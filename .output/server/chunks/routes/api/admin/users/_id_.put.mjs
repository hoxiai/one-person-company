import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, u as users, j as hashPassword } from '../../../../nitro/nitro.mjs';
import { and, eq, ne } from 'drizzle-orm';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const _id__put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    userIdRequired: "\u7528\u6237 ID \u4E0D\u80FD\u4E3A\u7A7A",
    emailRequired: "\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A",
    emailTaken: "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u5176\u4ED6\u7528\u6237\u5360\u7528",
    updated: "\u7528\u6237\u66F4\u65B0\u6210\u529F",
    failed: "\u66F4\u65B0\u7528\u6237\u5931\u8D25"
  } : {
    userIdRequired: "User ID is required",
    emailRequired: "Email is required",
    emailTaken: "Email already taken by another user",
    updated: "User updated successfully",
    failed: "Failed to update user"
  };
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({ statusCode: 400, message: messages.userIdRequired });
    }
    const body = await readBody(event);
    const { username, password } = body;
    const email = String(username || "").trim();
    if (!email) {
      throw createError({ statusCode: 400, message: messages.emailRequired });
    }
    const existingUser = await db.select().from(users).where(
      and(
        eq(users.email, email),
        ne(users.id, Number(id))
      )
    );
    if (existingUser.length > 0) {
      throw createError({ statusCode: 400, message: messages.emailTaken });
    }
    const updateData = {
      email,
      nickname: email.split("@")[0] || email
    };
    if (password) {
      updateData.passwordHash = await hashPassword(password);
    }
    await db.update(users).set(updateData).where(eq(users.id, Number(id)));
    return { code: 0, message: messages.updated };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { _id__put as default };
