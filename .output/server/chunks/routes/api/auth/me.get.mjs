import { d as defineEventHandler, eb as requireUserSession, b as db, w as users, dQ as isUserStatusActive, av as clearUserSession, dR as createAccountUnavailableError, c as getRequestLocale, ec as overwriteSessionUser } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const me_get = defineEventHandler(async (event) => {
  var _a;
  const session = await requireUserSession(event);
  const userId = Number((_a = session.user) == null ? void 0 : _a.id);
  if (!userId) {
    return { user: session.user };
  }
  const userRows = await db.select({
    id: users.id,
    email: users.email,
    nickname: users.nickname,
    avatarUrl: users.avatarUrl,
    status: users.status,
    emailVerifiedAt: users.emailVerifiedAt
  }).from(users).where(eq(users.id, userId)).limit(1);
  const dbUser = userRows[0];
  if (!dbUser) {
    return { user: session.user };
  }
  if (!isUserStatusActive(dbUser.status)) {
    await clearUserSession(event).catch(() => {
    });
    throw createAccountUnavailableError(dbUser.status, getRequestLocale(event), 401);
  }
  const emailVerified = Boolean(dbUser.emailVerifiedAt);
  const updatedUser = {
    ...session.user,
    id: dbUser.id,
    email: dbUser.email,
    nickname: dbUser.nickname,
    avatarUrl: dbUser.avatarUrl,
    emailVerified,
    emailVerifiedAt: dbUser.emailVerifiedAt || null
  };
  await overwriteSessionUser(event, session, updatedUser);
  return {
    user: updatedUser
  };
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
