import { cb as defineCachedEventHandler, f as getRouterParam, c as getRequestLocale, e as createError, b as db, as as posts } from '../../../nitro/nitro.mjs';
import { and, or, eq, sql } from 'drizzle-orm';
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

const _slug__get = defineCachedEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u6587\u7AE0 slug" : "Missing post slug" });
  }
  const postList = await db.select().from(posts).where(and(or(eq(posts.slug, slug), eq(posts.key, slug)), eq(posts.isActive, true))).limit(1);
  const post = postList[0];
  if (!post) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u6587\u7AE0\u4E0D\u5B58\u5728" : "Post not found" });
  }
  event.waitUntil(
    db.update(posts).set({ views: sql`${posts.views} + 1` }).where(eq(posts.id, post.id)).execute().catch((error) => console.error("Failed to increment post views:", error))
  );
  let parsedMetaData = null;
  if (post.metaData) {
    try {
      parsedMetaData = typeof post.metaData === "string" ? JSON.parse(post.metaData) : post.metaData;
    } catch (e) {
      console.error("Failed to parse metaData JSON", e);
    }
  }
  return {
    ...post,
    metaData: parsedMetaData
  };
}, {
  maxAge: 60,
  // 1 minute
  swr: true,
  name: "post-detail",
  getKey: (event) => getRouterParam(event, "slug") || "unknown"
});

export { _slug__get as default };
