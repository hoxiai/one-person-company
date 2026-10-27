import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b5 as deleteReleaseRecordById } from '../../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const _id__delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const idParam = getRouterParam(event, "id");
  const id = Number.parseInt(String(idParam || ""), 10);
  if (!Number.isFinite(id) || id <= 0) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u65E0\u6548\u7684\u7248\u672C\u8BB0\u5F55 ID" : "Invalid release ID"
    });
  }
  const deleted = await deleteReleaseRecordById(id);
  return {
    code: 0,
    message: locale === "zh" ? "\u7248\u672C\u8BB0\u5F55\u5DF2\u5220\u9664" : "Release deleted successfully",
    data: deleted
  };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
