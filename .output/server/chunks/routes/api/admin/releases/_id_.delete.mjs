import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, by as deleteReleaseRecordById } from '../../../../nitro/nitro.mjs';
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
