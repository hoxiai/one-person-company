import { d as defineEventHandler, bQ as useRuntimeConfig, bR as getHeader, e as createError, g as getQuery, bS as generateRenewalInvoices, bT as RENEWAL_LEAD_DAYS } from '../../../nitro/nitro.mjs';
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

const renewSubscriptions_get = defineEventHandler(async (event) => {
  var _a, _b;
  const config = useRuntimeConfig();
  const cronSecret = String(config.cronSecret || process.env.CRON_SECRET || "").trim();
  if ((!cronSecret || getHeader(event, "authorization") !== `Bearer ${cronSecret}`)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const query = getQuery(event);
  const leadDays = Number.parseInt(String((_a = query.leadDays) != null ? _a : ""), 10);
  const result = await generateRenewalInvoices({
    leadDays: Number.isInteger(leadDays) && leadDays > 0 && leadDays <= 60 ? leadDays : RENEWAL_LEAD_DAYS,
    // ?notify=false 只生成账单不发提醒，用于补历史数据时避免打扰用户。
    notify: String((_b = query.notify) != null ? _b : "") !== "false"
  });
  return {
    data: {
      scanned: result.scanned,
      created: result.created,
      skipped: result.skipped,
      notified: result.notified,
      failed: result.failed,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }
  };
});

export { renewSubscriptions_get as default };
