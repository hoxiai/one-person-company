import { d as defineEventHandler, g as getQuery, as as posts, b as db } from '../../../nitro/nitro.mjs';
import { eq, or, like, and, count, desc, sql } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(1, parseInt(query.page) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(query.pageSize) || 15));
  const offset = (page - 1) * pageSize;
  const type = String(query.type || "").trim();
  const status = String(query.status || "").trim();
  const search = String(query.search || "").trim();
  const conditions = [];
  if (type && type !== "all") {
    conditions.push(eq(posts.type, type));
  }
  if (status === "published") {
    conditions.push(eq(posts.isActive, true));
  } else if (status === "draft") {
    conditions.push(eq(posts.isActive, false));
  }
  if (search) {
    const pattern = `%${search}%`;
    conditions.push(
      or(
        like(posts.title, pattern),
        like(posts.slug, pattern),
        like(posts.key, pattern),
        like(posts.description, pattern)
      )
    );
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
  const [totalResult, result] = await Promise.all([
    db.select({ value: count() }).from(posts).where(whereClause),
    db.select().from(posts).where(whereClause).orderBy(desc(posts.createdAt)).limit(pageSize).offset(offset)
  ]);
  const total = ((_a = totalResult[0]) == null ? void 0 : _a.value) || 0;
  const [statsResult] = await db.select({
    totalAll: count(),
    publishedCount: sql`SUM(CASE WHEN ${posts.isActive} = true THEN 1 ELSE 0 END)`,
    draftCount: sql`SUM(CASE WHEN ${posts.isActive} = false THEN 1 ELSE 0 END)`,
    totalViews: sql`COALESCE(SUM(${posts.views}), 0)`
  }).from(posts);
  return {
    data: result,
    total,
    page,
    pageSize,
    stats: {
      total: Number((statsResult == null ? void 0 : statsResult.totalAll) || 0),
      published: Number((statsResult == null ? void 0 : statsResult.publishedCount) || 0),
      draft: Number((statsResult == null ? void 0 : statsResult.draftCount) || 0),
      totalViews: Number((statsResult == null ? void 0 : statsResult.totalViews) || 0)
    }
  };
});

export { index_get as default };
