import { cb as defineCachedEventHandler, g as getQuery, as as posts, b as db } from '../../nitro/nitro.mjs';
import { eq, or, like, and, count, desc, asc } from 'drizzle-orm';
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

const index_get = defineCachedEventHandler(async (event) => {
  var _a, _b;
  const query = getQuery(event);
  const rawType = query.type;
  const postKey = (_a = query.key) == null ? void 0 : _a.trim();
  const order = query.order;
  const includeContent = query.include_content === "1" || query.include_content === "true" || query.content === "1" || query.content === "true";
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 12, 1), 100);
  const offset = (page - 1) * pageSize;
  const conditions = [eq(posts.isActive, true)];
  if (rawType) {
    conditions.push(eq(posts.type, rawType));
  } else if (!postKey) {
    conditions.push(eq(posts.type, "blog"));
  }
  if (postKey) {
    conditions.push(or(eq(posts.key, postKey), like(posts.key, `${postKey}%`)));
  }
  const whereClause = and(...conditions);
  const totalResult = await db.select({ value: count() }).from(posts).where(whereClause);
  const total = ((_b = totalResult[0]) == null ? void 0 : _b.value) || 0;
  let orderClause = desc(posts.createdAt);
  if (order === "sort_asc") {
    orderClause = asc(posts.sort);
  } else if (order === "sort_desc") {
    orderClause = desc(posts.sort);
  } else if (order === "asc") {
    orderClause = asc(posts.createdAt);
  }
  const selectFields = {
    id: posts.id,
    key: posts.key,
    sort: posts.sort,
    slug: posts.slug,
    title: posts.title,
    description: posts.description,
    imageUrl: posts.imageUrl,
    type: posts.type,
    views: posts.views,
    createdAt: posts.createdAt,
    updatedAt: posts.updatedAt,
    metaData: posts.metaData
  };
  if (includeContent) {
    selectFields.content = posts.content;
  }
  const result = await db.select(selectFields).from(posts).where(whereClause).orderBy(orderClause).limit(pageSize).offset(offset);
  return {
    data: result,
    total,
    page,
    pageSize
  };
}, {
  maxAge: 60,
  // cache for 60 seconds
  swr: true,
  name: "posts-list",
  getKey: (event) => {
    const query = getQuery(event);
    return `posts-${query.type || ""}-k-${query.key || ""}-c-${query.include_content || query.content || "0"}-o-${query.order || ""}-page-${query.page || 1}-size-${query.pageSize || 12}`;
  }
});

export { index_get as default };
