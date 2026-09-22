import { d as defineEventHandler, bF as requireUserSession, b as db, u as users, bG as overwriteSessionUser } from '../../../nitro/nitro.mjs';
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
