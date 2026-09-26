import { d as defineEventHandler, g as getQuery, o as comments, b as db, u as users, q as getCommentAvatarUrl } from '../../../nitro/nitro.mjs';
import { eq, or, like, and, count, desc } from 'drizzle-orm';
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
  var _a;
  const query = getQuery(event);
  const page = Math.max(1, parseInt(query.page) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(query.pageSize) || 20));
  const offset = (page - 1) * pageSize;
  const status = String(query.status || "all").trim().toLowerCase();
  const targetType = String(query.targetType || "").trim().toLowerCase();
  const search = String(query.search || "").trim();
  const conditions = [];
  if (status && status !== "all") {
    conditions.push(eq(comments.status, status));
  }
  if (targetType && targetType !== "all") {
    conditions.push(eq(comments.targetType, targetType));
  }
  if (search) {
    const pattern = `%${search}%`;
    conditions.push(
      or(
        like(comments.authorName, pattern),
        like(comments.authorEmail, pattern),
        like(comments.content, pattern),
        like(comments.targetId, pattern)
      )
    );
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
  const totalRes = await db.select({ value: count() }).from(comments).where(whereClause);
  const total = ((_a = totalRes[0]) == null ? void 0 : _a.value) || 0;
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
    status: comments.status,
    ip: comments.ip,
    userAgent: comments.userAgent,
    createdAt: comments.createdAt,
    userNickname: users.nickname,
    userEmail: users.email,
    userAvatar: users.avatarUrl
  }).from(comments).leftJoin(users, eq(comments.userId, users.id)).where(whereClause).orderBy(desc(comments.createdAt)).limit(pageSize).offset(offset);
  const countStats = await db.select({
    status: comments.status,
    count: count()
  }).from(comments).groupBy(comments.status);
  const summary = {
    all: 0,
    approved: 0,
    pending: 0,
    spam: 0,
    deleted: 0
  };
  for (const s of countStats) {
    const c = Number(s.count) || 0;
    summary.all += c;
    if (s.status in summary) {
      summary[s.status] = c;
    }
  }
  const list = rows.map((r) => ({
    ...r,
    avatarUrl: getCommentAvatarUrl(r.authorEmail, r.userAvatar)
  }));
  return {
    success: true,
    data: list,
    total,
    counts: summary,
    page,
    pageSize
  };
});

export { index_get as default };
