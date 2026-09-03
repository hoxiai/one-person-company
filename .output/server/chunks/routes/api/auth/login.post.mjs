import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, u as users, M as verifyPassword, bf as issueWebSession, b9 as trackVisitorEvent, bg as ensureVisitorId } from '../../../nitro/nitro.mjs';
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

const login_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    emailPasswordRequired: "\u90AE\u7BB1\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    invalidCredentials: "\u90AE\u7BB1\u6216\u5BC6\u7801\u9519\u8BEF",
    thirdPartyLogin: "\u8BE5\u8D26\u53F7\u4F7F\u7528\u7B2C\u4E09\u65B9\u767B\u5F55"
  } : {
    emailPasswordRequired: "Email and password are required",
    invalidCredentials: "Invalid email or password",
    thirdPartyLogin: "This account uses third-party login"
  };
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: messages.emailPasswordRequired
    });
  }
  const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUsers.length === 0) {
    throw createError({
      statusCode: 401,
      message: messages.invalidCredentials
    });
  }
  const user = existingUsers[0];
  if (!user.passwordHash) {
    throw createError({
      statusCode: 401,
      message: messages.thirdPartyLogin
    });
  }
  const isValid = await verifyPassword(user.passwordHash, password);
  if (!isValid) {
    throw createError({
      statusCode: 401,
      message: messages.invalidCredentials
    });
  }
  await issueWebSession(event, user, "password");
  await trackVisitorEvent(event, {
    visitorId: ensureVisitorId(event),
    userId: user.id,
    eventName: "auth",
    eventAction: "login"
  });
  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      emailVerified: Boolean(user.emailVerifiedAt),
      emailVerifiedAt: user.emailVerifiedAt || null
    }
  };
});

export { login_post as default };
