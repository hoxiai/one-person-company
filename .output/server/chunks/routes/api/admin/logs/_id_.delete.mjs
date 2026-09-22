import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, Y as logs } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const _id__delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u65E5\u5FD7 ID" : "Missing log ID" });
  }
  try {
    await db.delete(logs).where(eq(logs.id, parseInt(id)));
    return { success: true };
  } catch (error) {
    throw createError({ statusCode: 500, message: locale === "zh" ? "\u5220\u9664\u65E5\u5FD7\u5931\u8D25" : "Failed to delete log" });
  }
});

export { _id__delete as default };
