import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, u as users } from '../../../../nitro/nitro.mjs';
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
  const messages = locale === "zh" ? {
    userIdRequired: "\u7528\u6237 ID \u4E0D\u80FD\u4E3A\u7A7A",
    userNotFound: "\u7528\u6237\u4E0D\u5B58\u5728",
    deleted: "\u7528\u6237\u5220\u9664\u6210\u529F",
    failed: "\u5220\u9664\u7528\u6237\u5931\u8D25"
  } : {
    userIdRequired: "User ID is required",
    userNotFound: "User not found",
    deleted: "User deleted successfully",
    failed: "Failed to delete user"
  };
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({ statusCode: 400, message: messages.userIdRequired });
    }
    const user = await db.select().from(users).where(eq(users.id, Number(id)));
    if (user.length === 0) {
      throw createError({ statusCode: 404, message: messages.userNotFound });
    }
    await db.delete(users).where(eq(users.id, Number(id)));
    return { code: 0, message: messages.deleted };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { _id__delete as default };
