import { e8 as defineCachedEventHandler, f as getRouterParam, e9 as resolvePostRequestLocaleHint, c as getRequestLocale, e as createError, b as db, aJ as posts } from '../../../nitro/nitro.mjs';
import { and, or, eq, sql } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
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
  varies: ["cookie", "accept-language", "referer", "x-apay-ssr-path", "host", "x-forwarded-host"],
  getKey: (event) => {
    const slug = getRouterParam(event, "slug") || "unknown";
    const localeKey = resolvePostRequestLocaleHint(event);
    return `${slug}-l-${localeKey}`;
  }
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
