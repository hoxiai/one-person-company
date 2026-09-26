import { d as defineEventHandler, g as getQuery, e as createError, b as db, u as users, o as comments, q as getCommentAvatarUrl } from '../../nitro/nitro.mjs';
import { eq, and, asc } from 'drizzle-orm';
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
  const query = getQuery(event);
  const targetType = String(query.targetType || "").trim();
  const targetId = String(query.targetId || "").trim();
  if (!targetType || !targetId) {
    throw createError({
      statusCode: 400,
      statusMessage: "targetType and targetId are required"
    });
  }
  const rows = await db.select({
    id: comments.id,
    targetType: comments.targetType,
    targetId: comments.targetId,
    userId: comments.userId,
    authorName: comments.authorName,
    authorEmail: comments.authorEmail,
    authorUrl: comments.authorUrl,
    content: comments.content,
    parentId: comments.parentId,
    createdAt: comments.createdAt,
    userNickname: users.nickname,
    userAvatar: users.avatarUrl
  }).from(comments).leftJoin(users, eq(comments.userId, users.id)).where(
    and(
      eq(comments.targetType, targetType),
      eq(comments.targetId, targetId),
      eq(comments.status, "approved")
    )
  ).orderBy(asc(comments.createdAt));
  const commentMap = /* @__PURE__ */ new Map();
  const rootComments = [];
  for (const row of rows) {
    const displayName = row.userNickname || row.authorName || "\u8BBF\u5BA2";
    const avatarUrl = getCommentAvatarUrl(row.authorEmail, row.userAvatar);
    const item = {
      id: row.id,
      targetType: row.targetType,
      targetId: row.targetId,
      userId: row.userId,
      authorName: displayName,
      authorUrl: row.authorUrl || null,
      avatarUrl,
      content: row.content,
      parentId: row.parentId,
      createdAt: row.createdAt,
      replies: []
    };
    commentMap.set(row.id, item);
  }
  for (const item of commentMap.values()) {
    if (item.parentId && commentMap.has(item.parentId)) {
      const parent = commentMap.get(item.parentId);
      item.replyToName = parent.authorName;
      if (parent.parentId && commentMap.has(parent.parentId)) {
        const rootParent = commentMap.get(parent.parentId);
        rootParent.replies.push(item);
      } else {
        parent.replies.push(item);
      }
    } else {
      rootComments.push(item);
    }
  }
  return {
    success: true,
    data: rootComments,
    total: rows.length
  };
});

export { index_get as default };
