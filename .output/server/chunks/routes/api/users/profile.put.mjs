import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, r as readBody, b as db, u as users, U as setUserSession } from '../../../nitro/nitro.mjs';
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

const profile_put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u672A\u767B\u5F55",
    noData: "\u6CA1\u6709\u53EF\u66F4\u65B0\u7684\u6570\u636E",
    profileUpdated: "\u8D44\u6599\u66F4\u65B0\u6210\u529F",
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    unauthorized: "Unauthorized",
    noData: "No data to update",
    profileUpdated: "Profile updated successfully",
    internalError: "Internal server error"
  };
  const session = await requireUserSession(event);
  if (!session.user) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  const body = await readBody(event);
  const { nickname, avatarUrl } = body;
  if (!nickname && !avatarUrl) {
    return { code: 1, message: messages.noData };
  }
  try {
    const updates = {};
    if (nickname !== void 0) updates.nickname = nickname;
    if (avatarUrl !== void 0) updates.avatarUrl = avatarUrl;
    await db.update(users).set(updates).where(eq(users.id, session.user.id));
    if (nickname !== void 0) session.user.nickname = nickname;
    if (avatarUrl !== void 0) session.user.avatarUrl = avatarUrl;
    await setUserSession(event, session);
    return { code: 0, message: messages.profileUpdated, user: session.user };
  } catch (error) {
    console.error("Update profile error:", error);
    return { code: 1, message: error.message || messages.internalError };
  }
});

export { profile_put as default };
