import { d as defineEventHandler, g as getQuery, c as getRequestLocale, bP as normalizeSupportedLocale, bx as sendLocalizedRedirect, b as db, bg as userTokens, bk as EMAIL_VERIFY_TOKEN_NAME, u as users, o as orders, aO as getUserSession, U as setUserSession } from '../../../nitro/nitro.mjs';
import { eq, and, isNull } from 'drizzle-orm';
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

const verifyEmail_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const token = query.token;
  const rawLang = query.lang || query.locale || getRequestLocale(event);
  const lang = normalizeSupportedLocale(rawLang);
  if (!token) {
    return sendLocalizedRedirect(event, "/auth/login?verified=missing", lang);
  }
  const tokenRows = await db.select().from(userTokens).where(eq(userTokens.token, token)).limit(1);
  const tokenRecord = tokenRows[0];
  if (!tokenRecord || tokenRecord.name !== EMAIL_VERIFY_TOKEN_NAME) {
    return sendLocalizedRedirect(event, "/auth/login?verified=invalid", lang);
  }
  const userList = await db.select().from(users).where(eq(users.id, tokenRecord.userId)).limit(1);
  const user = userList[0];
  if (!user) {
    return sendLocalizedRedirect(event, "/auth/login?verified=invalid", lang);
  }
  if (user.emailVerifiedAt) {
    return sendLocalizedRedirect(event, "/auth/login?verified=already", lang);
  }
  const now = /* @__PURE__ */ new Date();
  const isRevoked = tokenRecord.revoked === true || tokenRecord.revoked === 1;
  const isExpired = tokenRecord.expiresAt && new Date(tokenRecord.expiresAt) < now;
  if (isRevoked || isExpired) {
    return sendLocalizedRedirect(event, "/auth/login?verified=expired", lang);
  }
  await db.update(users).set({ emailVerifiedAt: now }).where(eq(users.id, user.id));
  await db.update(userTokens).set({ revoked: true, lastUsedAt: now }).where(eq(userTokens.id, tokenRecord.id));
  await db.update(orders).set({ userId: user.id }).where(and(eq(orders.contactEmail, user.email), isNull(orders.userId)));
  const session = await getUserSession(event).catch(() => null);
  if ((session == null ? void 0 : session.user) && Number(session.user.id) === user.id) {
    await setUserSession(event, {
      ...session,
      user: {
        ...session.user,
        emailVerified: true,
        emailVerifiedAt: now
      }
    });
  }
  return sendLocalizedRedirect(event, "/auth/login?verified=success", lang);
});

export { verifyEmail_get as default };
