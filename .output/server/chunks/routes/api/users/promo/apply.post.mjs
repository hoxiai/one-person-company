import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, r as readBody, ck as checkUserPromoAccess, b as db, aw as promoApplications } from '../../../../nitro/nitro.mjs';
import { eq, desc } from 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const apply_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const session = await requireUserSession(event);
  const userId = Number(((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id) || 0);
  if (!userId) {
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
  }
  const body = await readBody(event);
  const channelInfo = String((body == null ? void 0 : body.channelInfo) || "").trim();
  const contact = String((body == null ? void 0 : body.contact) || "").trim();
  const reason = String((body == null ? void 0 : body.reason) || "").trim();
  if (!contact) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u8BF7\u586B\u5199\u8054\u7CFB\u65B9\u5F0F" : "Contact is required" });
  }
  const access = await checkUserPromoAccess(userId);
  if (access.allowed) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u60A8\u5DF2\u5F00\u901A\u63A8\u5E7F\u6743\u9650\uFF0C\u65E0\u9700\u91CD\u590D\u7533\u8BF7" : "Promo access already granted" });
  }
  if (access.mode === "paid_and_audit" && !access.hasActiveSubscription && access.totalSpend < access.minSpendAmount) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? `\u672A\u6EE1\u8DB3\u6D88\u8D39\u95E8\u69DB\uFF08\u9700\u5F00\u901A\u6709\u6548\u8BA2\u9605\u6216\u7D2F\u8BA1\u6D88\u8D39\u6EE1 $${access.minSpendAmount}\uFF09` : `Spend threshold not met ($${access.minSpendAmount} required)`
    });
  }
  const pendingApps = await db.select().from(promoApplications).where(eq(promoApplications.userId, userId)).orderBy(desc(promoApplications.createdAt)).limit(1);
  if (pendingApps.length > 0 && pendingApps[0].status === "pending") {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u5DF2\u6709\u7533\u8BF7\u6B63\u5728\u5BA1\u6838\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85" : "An application is already pending" });
  }
  const inserted = await db.insert(promoApplications).values({
    userId,
    status: "pending",
    channelInfo: channelInfo || null,
    contact,
    reason: reason || null,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  }).returning();
  return {
    ok: true,
    data: inserted[0],
    message: locale === "zh" ? "\u7533\u8BF7\u5DF2\u63D0\u4EA4\uFF0C\u8BF7\u7B49\u5F85\u7BA1\u7406\u5458\u5BA1\u6838" : "Application submitted successfully"
  };
});

export { apply_post as default };
