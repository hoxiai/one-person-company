import { d as defineEventHandler, c as getRequestLocale, an as resolveClientIp, ao as checkIpRateLimit, e as createError, g as getQuery, dO as validateUsername, dP as getUsernameErrorMessage, aP as getUserSession, w as users, b as db } from '../../../nitro/nitro.mjs';
import { and, eq, ne } from 'drizzle-orm';
import 'node:crypto';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const checkUsername_get = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const ip = resolveClientIp(event);
  const rl = checkIpRateLimit(`check-username:ip:${ip}`, { max: 60, windowMs: 6e4 });
  if (!rl.ok) {
    throw createError({
      statusCode: 429,
      message: locale === "zh" ? "\u68C0\u67E5\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5" : "Too many requests, please try again later"
    });
  }
  const query = getQuery(event);
  const rawUsername = typeof query.username === "string" ? query.username : "";
  const validation = validateUsername(rawUsername);
  if (!validation.valid || !validation.normalizedUsername) {
    return {
      success: true,
      valid: false,
      available: false,
      errorKey: validation.errorKey,
      message: getUsernameErrorMessage(validation.errorKey, locale)
    };
  }
  const normalized = validation.normalizedUsername;
  const session = await getUserSession(event).catch(() => null);
  const currentUserId = Number(((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id) || 0);
  const whereClause = Number.isInteger(currentUserId) && currentUserId > 0 ? and(eq(users.username, normalized), ne(users.id, currentUserId)) : eq(users.username, normalized);
  const existing = await db.select({ id: users.id }).from(users).where(whereClause).limit(1);
  const available = existing.length === 0;
  return {
    success: true,
    valid: true,
    available,
    username: normalized,
    message: available ? "" : getUsernameErrorMessage("username_taken", locale)
  };
});

export { checkUsername_get as default };
//# sourceMappingURL=check-username.get.mjs.map
