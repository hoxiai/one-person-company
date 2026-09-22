import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, u as users } from '../../../../../nitro/nitro.mjs';
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

const verifyEmail_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7528\u6237 ID \u4E0D\u80FD\u4E3A\u7A7A" : "User ID is required" });
  }
  const userId = Number(id);
  const body = await readBody(event).catch(() => ({}));
  const verified = (body == null ? void 0 : body.verified) !== false;
  const userRows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const user = userRows[0];
  if (!user) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u7528\u6237\u4E0D\u5B58\u5728" : "User not found" });
  }
  const newVerifiedAt = verified ? /* @__PURE__ */ new Date() : null;
  await db.update(users).set({ emailVerifiedAt: newVerifiedAt }).where(eq(users.id, userId));
  return {
    success: true,
    emailVerifiedAt: newVerifiedAt,
    message: verified ? locale === "zh" ? "\u5DF2\u6210\u529F\u624B\u52A8\u8BA4\u8BC1\u8BE5\u7528\u6237\u90AE\u7BB1" : "User email verified successfully" : locale === "zh" ? "\u5DF2\u64A4\u9500\u8BE5\u7528\u6237\u90AE\u7BB1\u9A8C\u8BC1" : "User email verification revoked"
  };
});

export { verifyEmail_post as default };
