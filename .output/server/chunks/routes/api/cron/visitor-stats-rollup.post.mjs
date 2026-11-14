import { d as defineEventHandler, c as getRequestLocale, dx as useRuntimeConfig, cP as getHeader, dl as logger, e as createError, L as getConfiguredTimezone, a5 as resolveRollupSiteHost, a3 as getRequestHost, dW as runVisitorRollupMaintenance } from '../../../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';

const visitorStatsRollup_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const config = useRuntimeConfig();
  const authHeader = getHeader(event, "Authorization");
  const cronSecret = String(config.cronSecret || process.env.CRON_SECRET || "").trim();
  if ((!cronSecret || authHeader !== `Bearer ${cronSecret}`)) {
    await logger.warn("[Cron] Unauthorized attempt to trigger visitor stats rollup");
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u6388\u6743" : "Unauthorized" });
  }
  const timezone = await getConfiguredTimezone();
  const siteHost = await resolveRollupSiteHost(getRequestHost(event));
  if (!siteHost) {
    throw createError({
      statusCode: 409,
      message: locale === "zh" ? "\u8BF7\u5148\u5728\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u914D\u7F6E\u7AD9\u70B9\u5730\u5740 site_url" : "Configure settings.site_url before running the visitor stats rollup"
    });
  }
  const result = await runVisitorRollupMaintenance({ timezone, siteHost });
  await logger.info(`[Cron] visitor stats rollup: computed ${result.backfill.computedDays.length} day(s), pending ${result.backfill.pendingDays.length}, cleaned events ${result.deletedEventDays.length} day(s), facts ${result.deletedFactDays.length} day(s)`);
  return {
    success: true,
    timezone,
    siteHost,
    computedDays: result.backfill.computedDays,
    pendingDays: result.backfill.pendingDays,
    staleDays: result.backfill.staleDays,
    deletedEventDays: result.deletedEventDays,
    deletedFactDays: result.deletedFactDays,
    retention: result.retention
  };
});

export { visitorStatsRollup_post as default };
//# sourceMappingURL=visitor-stats-rollup.post.mjs.map
