import { d as defineEventHandler, bx as requireUserSession, b as db, ba as userTokens, bb as EMAIL_VERIFY_TOKEN_NAME } from '../../../nitro/nitro.mjs';
import { and, eq, or, isNull, ne, desc } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

const index_get = defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const userId = session.user.id;
  const rows = await db.select({
    id: userTokens.id,
    name: userTokens.name,
    lastUsedAt: userTokens.lastUsedAt,
    expiresAt: userTokens.expiresAt,
    revoked: userTokens.revoked,
    createdAt: userTokens.createdAt
  }).from(userTokens).where(and(
    eq(userTokens.userId, userId),
    // ne() against a NULL name is NULL (not true) in SQL, which would
    // silently exclude un-named rows — explicitly allow NULL through.
    or(isNull(userTokens.name), ne(userTokens.name, EMAIL_VERIFY_TOKEN_NAME))
  )).orderBy(desc(userTokens.createdAt));
  return { data: rows };
});

export { index_get as default };
