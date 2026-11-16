import { d as defineEventHandler, dS as useRuntimeConfig, cY as getHeader, e as createError, L as runAutoCommentSync } from '../../../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

const syncComments_get = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const cronSecret = String(config.cronSecret || process.env.CRON_SECRET || "").trim();
  if ((!cronSecret || getHeader(event, "authorization") !== `Bearer ${cronSecret}`)) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const results = await runAutoCommentSync();
  return {
    success: true,
    data: results,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
});

export { syncComments_get as default };
//# sourceMappingURL=sync-comments.get.mjs.map
