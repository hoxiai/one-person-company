import { d as defineEventHandler, c as getRequestLocale, b as db, Z as logs, e as createError } from '../../../../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const clear_delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  try {
    await db.delete(logs);
    return { success: true, message: locale === "zh" ? "\u65E5\u5FD7\u5DF2\u5168\u90E8\u6E05\u7A7A" : "All logs cleared successfully" };
  } catch (error) {
    throw createError({ statusCode: 500, message: locale === "zh" ? "\u6E05\u7A7A\u65E5\u5FD7\u5931\u8D25" : "Failed to clear logs" });
  }
});

export { clear_delete as default };
//# sourceMappingURL=clear.delete.mjs.map
