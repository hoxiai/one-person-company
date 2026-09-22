import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, f as getRouterParam, b as db, bg as userTokens } from '../../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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
  const session = await requireUserSession(event);
  const userId = session.user.id;
  if (event.context.authenticatedFromToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406 API Token\uFF0C\u4E0D\u80FD\u7528 Token \u672C\u8EAB\u64CD\u4F5C" : "Manage API tokens from a logged-in session, not via another token"
    });
  }
  const id = Number(getRouterParam(event, "id"));
  if (!id) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u8BF7\u6C42\u65E0\u6548" : "Invalid request" });
  }
  const existing = await db.select({ id: userTokens.id }).from(userTokens).where(and(eq(userTokens.id, id), eq(userTokens.userId, userId))).limit(1);
  if (existing.length === 0) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "Token \u4E0D\u5B58\u5728" : "Token not found" });
  }
  await db.update(userTokens).set({ revoked: true }).where(eq(userTokens.id, id));
  return { success: true };
});

export { _id__delete as default };
