import { d as defineEventHandler, c as getRequestLocale, bi as requireUserSession, e as createError, r as readBody, b as db, u as users, M as verifyPassword, N as setUserSession } from '../../../nitro/nitro.mjs';
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

const email_put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u672A\u767B\u5F55",
    emailPasswordRequired: "\u90AE\u7BB1\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    userNotFound: "\u7528\u6237\u4E0D\u5B58\u5728",
    incorrectPassword: "\u5BC6\u7801\u9519\u8BEF",
    emailInUse: "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u5360\u7528",
    emailUpdated: "\u90AE\u7BB1\u66F4\u65B0\u6210\u529F",
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    unauthorized: "Unauthorized",
    emailPasswordRequired: "Email and password are required",
    userNotFound: "User not found",
    incorrectPassword: "Incorrect password",
    emailInUse: "Email is already in use",
    emailUpdated: "Email updated successfully",
    internalError: "Internal server error"
  };
  const session = await requireUserSession(event);
  if (!session.user) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  const body = await readBody(event);
  const { newEmail, password } = body;
  if (!newEmail || !password) {
    return { code: 1, message: messages.emailPasswordRequired };
  }
  try {
    const userRecords = await db.select().from(users).where(eq(users.id, session.user.id));
    if (userRecords.length === 0) {
      return { code: 1, message: messages.userNotFound };
    }
    const user = userRecords[0];
    const isValid = await verifyPassword(user.passwordHash, password);
    if (!isValid) {
      return { code: 1, message: messages.incorrectPassword };
    }
    const existingUser = await db.select().from(users).where(eq(users.email, newEmail));
    if (existingUser.length > 0) {
      return { code: 1, message: messages.emailInUse };
    }
    await db.update(users).set({ email: newEmail }).where(eq(users.id, session.user.id));
    session.user.email = newEmail;
    await setUserSession(event, session);
    return { code: 0, message: messages.emailUpdated, user: session.user };
  } catch (error) {
    console.error("Update email error:", error);
    return { code: 1, message: error.message || messages.internalError };
  }
});

export { email_put as default };
