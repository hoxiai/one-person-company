import { d as defineEventHandler, r as readBody, e as createError, b0 as getUserSession, bZ as ensureVisitorId, b as db, ck as likes } from '../../../nitro/nitro.mjs';
import { sql, and, eq, inArray, or, isNull } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import '@nuxthub/db';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const batch_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  const targetType = String(body.targetType || "").trim().toLowerCase();
  const rawTargetIds = Array.isArray(body.targetIds) ? body.targetIds : [];
  if (!targetType) {
    throw createError({ statusCode: 400, statusMessage: "\u7F3A\u5C11 targetType" });
  }
  const targetIds = Array.from(
    new Set(rawTargetIds.map((id) => String(id || "").trim()).filter(Boolean))
  ).slice(0, 100);
  const result = {};
  for (const id of targetIds) {
    result[id] = { count: 0, hasLiked: false };
  }
  if (targetIds.length === 0) {
    return { success: true, data: result };
  }
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = (user == null ? void 0 : user.id) ? Number(user.id) : null;
  const visitorId = ensureVisitorId(event);
  const countRows = await db.select({
    targetId: likes.targetId,
    count: sql`count(*)`
  }).from(likes).where(and(eq(likes.targetType, targetType), inArray(likes.targetId, targetIds))).groupBy(likes.targetId);
  for (const row of countRows) {
    const item = result[row.targetId];
    if (item) {
      item.count = Number(row.count || 0);
    }
  }
  const userLikedCondition = userId ? and(
    eq(likes.targetType, targetType),
    inArray(likes.targetId, targetIds),
    or(eq(likes.userId, userId), and(isNull(likes.userId), eq(likes.visitorId, visitorId)))
  ) : and(
    eq(likes.targetType, targetType),
    inArray(likes.targetId, targetIds),
    eq(likes.visitorId, visitorId),
    isNull(likes.userId)
  );
  const userLikedRows = await db.select({ targetId: likes.targetId }).from(likes).where(userLikedCondition);
  for (const row of userLikedRows) {
    const item = result[row.targetId];
    if (item) {
      item.hasLiked = true;
    }
  }
  return {
    success: true,
    data: result
  };
});

export { batch_post as default };
