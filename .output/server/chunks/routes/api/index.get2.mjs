import { d as defineEventHandler, g as getQuery, e as createError, aP as getUserSession, e9 as ensureVisitorId, b as db, eA as likes } from '../../nitro/nitro.mjs';
import { sql, and, eq, or, isNull } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const targetType = String(query.targetType || "").trim().toLowerCase();
  const targetId = String(query.targetId || "").trim();
  if (!targetType || !targetId) {
    throw createError({
      statusCode: 400,
      statusMessage: "targetType and targetId are required"
    });
  }
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = (user == null ? void 0 : user.id) ? Number(user.id) : null;
  const visitorId = ensureVisitorId(event);
  const [countRow] = await db.select({ count: sql`count(*)` }).from(likes).where(and(eq(likes.targetType, targetType), eq(likes.targetId, targetId)));
  const totalCount = Number((countRow == null ? void 0 : countRow.count) || 0);
  let hasLiked = false;
  if (userId) {
    const userLikes = await db.select({ id: likes.id }).from(likes).where(
      and(
        eq(likes.targetType, targetType),
        eq(likes.targetId, targetId),
        or(eq(likes.userId, userId), and(isNull(likes.userId), eq(likes.visitorId, visitorId)))
      )
    ).limit(1);
    hasLiked = userLikes.length > 0;
  } else {
    const visitorLikes = await db.select({ id: likes.id }).from(likes).where(
      and(
        eq(likes.targetType, targetType),
        eq(likes.targetId, targetId),
        eq(likes.visitorId, visitorId),
        isNull(likes.userId)
      )
    ).limit(1);
    hasLiked = visitorLikes.length > 0;
  }
  return {
    success: true,
    count: totalCount,
    hasLiked
  };
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
