import { d as defineEventHandler, r as readBody, e as createError, b0 as getUserSession, bZ as ensureVisitorId, cc as getRequestIP, br as getHeader, b as db, ck as likes, cl as syncLikesCount, ai as emitEvent } from '../../../nitro/nitro.mjs';
import { and, eq, or, isNull } from 'drizzle-orm';
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

const toggle_post = defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}));
  const targetType = String(body.targetType || "").trim().toLowerCase();
  const targetId = String(body.targetId || "").trim();
  if (!targetType || targetType.length > 32) {
    throw createError({ statusCode: 400, statusMessage: "\u7F3A\u5C11\u6216\u975E\u6CD5\u7684 targetType" });
  }
  if (!targetId || targetId.length > 191) {
    throw createError({ statusCode: 400, statusMessage: "\u7F3A\u5C11\u6216\u975E\u6CD5\u7684 targetId" });
  }
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = (user == null ? void 0 : user.id) ? Number(user.id) : null;
  const visitorId = ensureVisitorId(event);
  const ip = getRequestIP(event, { xForwardedFor: true }) || null;
  const userAgent = getHeader(event, "user-agent") || null;
  let existingLike = null;
  if (userId) {
    const rows = await db.select({ id: likes.id }).from(likes).where(
      and(
        eq(likes.targetType, targetType),
        eq(likes.targetId, targetId),
        or(eq(likes.userId, userId), and(isNull(likes.userId), eq(likes.visitorId, visitorId)))
      )
    ).limit(1);
    existingLike = rows[0] || null;
  } else {
    const rows = await db.select({ id: likes.id }).from(likes).where(
      and(
        eq(likes.targetType, targetType),
        eq(likes.targetId, targetId),
        eq(likes.visitorId, visitorId),
        isNull(likes.userId)
      )
    ).limit(1);
    existingLike = rows[0] || null;
  }
  if (existingLike) {
    await db.delete(likes).where(eq(likes.id, existingLike.id));
    const totalCount2 = await syncLikesCount(targetType, targetId);
    emitEvent("like.deleted", { userId: userId != null ? userId : void 0, visitorId, targetType, targetId });
    return {
      success: true,
      action: "unliked",
      count: totalCount2,
      hasLiked: false
    };
  }
  await db.insert(likes).values({
    targetType,
    targetId,
    userId,
    visitorId,
    ip,
    userAgent,
    createdAt: /* @__PURE__ */ new Date()
  });
  const totalCount = await syncLikesCount(targetType, targetId);
  emitEvent("like.created", { userId: userId != null ? userId : void 0, visitorId, targetType, targetId });
  return {
    success: true,
    action: "liked",
    count: totalCount,
    hasLiked: true
  };
});

export { toggle_post as default };
