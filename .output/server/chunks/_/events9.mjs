import { eq } from 'drizzle-orm';
import { bv as loadSchedulerJobs, bu as saveSchedulerJobs, b as db, p as products, fz as readShoparkPlanMeta, fA as pushShoparkLicense } from '../nitro/nitro.mjs';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const BLOG_PLAN_PATH = "/api/shopark/cron/blog-plan";
const BLOG_PUBLISH_PATH = "/api/shopark/cron/blog-publish";
let registered = false;
async function ensureBlogSchedulerJob() {
  if (process.env.APAY_MIGRATE_ONLY === "1") return;
  if (registered) return;
  registered = true;
  try {
    const jobs = await loadSchedulerJobs();
    let changed = false;
    const ensure = (path, defaults) => {
      const idx = jobs.findIndex((job) => job.path.split("?")[0] === path);
      if (idx >= 0) {
        const current = jobs[idx];
        if (current.path !== path || current.method !== defaults.method) {
          jobs[idx] = { ...current, path, method: defaults.method };
          changed = true;
        }
        return;
      }
      jobs.push(defaults);
      changed = true;
    };
    ensure(BLOG_PLAN_PATH, {
      name: "shopark-blog-plan",
      path: BLOG_PLAN_PATH,
      method: "POST",
      schedule: "daily",
      enabled: true,
      useCronSecret: true
    });
    ensure(BLOG_PUBLISH_PATH, {
      name: "shopark-blog-publish",
      path: BLOG_PUBLISH_PATH,
      method: "POST",
      schedule: "daily",
      enabled: true,
      useCronSecret: true
    });
    if (changed) await saveSchedulerJobs(jobs);
  } catch {
  }
}

function getThemeEventRules() {
  return [
    {
      key: "shopark:license_sync",
      event: "order.paid",
      theme: "shopark",
      label: "Shopark\uFF1A\u5957\u9910\u751F\u6548\u540E\u540C\u6B65\u5E97\u94FA\u6743\u76CA",
      description: "\u5E26 shopark_plan_code \u7684\u5957\u9910\u5546\u54C1\u652F\u4ED8\u6210\u529F\u540E\uFF0C\u628A\u7528\u6237\u5F53\u524D\u5957\u9910\u3001\u5230\u671F\u65F6\u95F4\u4E0E\u53EF\u5F00\u5E97\u6570\u63A8\u9001\u5230 Shopark \u5E97\u94FA\u3002",
      mode: "async",
      handler: async (payload) => {
        var _a;
        const order = payload && typeof payload === "object" ? payload : {};
        const userId = Number(order.userId || 0);
        const productId = Number(order.productId || 0);
        if (!userId || !productId) return { ok: true };
        const rows = await db.select({ metaData: products.metaData }).from(products).where(eq(products.id, productId)).limit(1);
        if (!readShoparkPlanMeta((_a = rows[0]) == null ? void 0 : _a.metaData)) return { ok: true };
        try {
          const result = await pushShoparkLicense(userId, { ensure: true, force: false });
          if (result.skipped) {
            console.warn(`[ShoparkLicense] order ${String(order.id)} skipped: ${result.reason}`);
            return { ok: false, errorMessage: result.reason };
          }
          if (result.failed.length) {
            return { ok: false, errorMessage: `license not applied to stores ${result.failed.join(",")}` };
          }
          return { ok: true };
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          console.error(`[ShoparkLicense] order ${String(order.id)} push failed:`, message);
          return { ok: false, errorMessage: message };
        }
      }
    },
    {
      key: "shopark:license_revoke",
      event: "subscription.revoked",
      theme: "shopark",
      label: "Shopark\uFF1A\u8BA2\u9605\u88AB\u6536\u56DE\u540E\u540C\u6B65\u5E97\u94FA\u6743\u76CA",
      description: "\u8BA2\u5355\u9000\u6B3E\u5BFC\u81F4\u8BA2\u9605\u4F5C\u5E9F\u540E\uFF0C\u628A\u7528\u6237\u5F53\u524D\u6743\u76CA\uFF08\u901A\u5E38\u662F\u56DE\u843D\u514D\u8D39\u7248\uFF09\u63A8\u9001\u5230\u4ED6\u540D\u4E0B\u7684 Shopark \u5E97\u94FA\u3002",
      mode: "async",
      handler: async (payload) => {
        var _a;
        const input = payload && typeof payload === "object" ? payload : {};
        const userId = Number(input.userId || 0);
        const productId = Number(input.productId || 0);
        if (!userId) return { ok: true };
        if (productId) {
          const rows = await db.select({ metaData: products.metaData }).from(products).where(eq(products.id, productId)).limit(1);
          if (!readShoparkPlanMeta((_a = rows[0]) == null ? void 0 : _a.metaData)) return { ok: true };
        }
        try {
          const result = await pushShoparkLicense(userId, { ensure: false, force: false });
          if (result.skipped) return { ok: false, errorMessage: result.reason };
          if (result.failed.length) {
            return { ok: false, errorMessage: `license not applied to stores ${result.failed.join(",")}` };
          }
          return { ok: true };
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          console.error(`[ShoparkLicense] revoke sync failed for user ${userId}:`, message);
          return { ok: false, errorMessage: message };
        }
      }
    }
  ];
}
async function startThemeBackgroundWorkers() {
  await ensureBlogSchedulerJob().catch(() => {
  });
}
async function stopThemeBackgroundWorkers() {
}

export { getThemeEventRules, startThemeBackgroundWorkers, stopThemeBackgroundWorkers };
//# sourceMappingURL=events9.mjs.map
