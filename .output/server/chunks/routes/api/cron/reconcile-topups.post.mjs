import { d as defineEventHandler, c as getRequestLocale, bQ as useRuntimeConfig, bR as getHeader, bw as logger, e as createError, r as readBody, bd as retryIncompleteTopups } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const reconcileTopups_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const config = useRuntimeConfig(event);
  const authHeader = getHeader(event, "Authorization");
  const cronSecret = String(config.cronSecret || process.env.CRON_SECRET || "").trim();
  if ((!cronSecret || authHeader !== `Bearer ${cronSecret}`)) {
    await logger.warn("[Cron] Unauthorized top-up reconciliation attempt");
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u6388\u6743" : "Unauthorized" });
  }
  const body = await readBody(event).catch(() => ({}));
  const report = await retryIncompleteTopups(body.limit);
  await logger.info("[Cron] Top-up reconciliation completed", { source: "cron", details: report });
  return { code: 0, data: report };
});

export { reconcileTopups_post as default };
