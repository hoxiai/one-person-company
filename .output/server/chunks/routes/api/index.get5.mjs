import { eL as defineCachedEventHandler, g as getQuery, eM as resolvePostRequestLocaleHint, aT as posts, eN as resolvePostLocaleContext, b as db, aZ as postCategories, eO as localizePostCategory } from '../../nitro/nitro.mjs';
import { eq, or, isNull, like, and, count, desc, asc, inArray } from 'drizzle-orm';
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
import 'node:fs/promises';
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
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const index_get = defineCachedEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const query = getQuery(event);
  const rawType = query.type;
  const postKey = (_a = query.key) == null ? void 0 : _a.trim();
  const categorySlug = (_b = query.category) == null ? void 0 : _b.trim();
  const order = query.order;
  const includeContent = query.include_content === "1" || query.include_content === "true" || query.content === "1" || query.content === "true";
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 12, 1), 100);
  const offset = (page - 1) * pageSize;
  const effectiveType = rawType || (!postKey ? "blog" : "");
  const conditions = [eq(posts.isActive, true)];
  if (rawType) {
    conditions.push(eq(posts.type, rawType));
  } else if (!postKey) {
    conditions.push(eq(posts.type, "blog"));
  }
  let localeContext = null;
  if (effectiveType === "blog") {
    localeContext = await resolvePostLocaleContext(event, query.locale);
    if (localeContext.isMultiLocaleEnabled) {
      conditions.push(
        or(
          isNull(posts.locale),
          eq(posts.locale, ""),
          eq(posts.locale, localeContext.locale)
        )
      );
    }
  }
  if (postKey) {
    conditions.push(or(eq(posts.key, postKey), like(posts.key, `${postKey}%`)));
  }
  if (categorySlug && categorySlug !== "all") {
    const categoryRow = await db.select({ id: postCategories.id }).from(postCategories).where(and(eq(postCategories.slug, categorySlug), eq(postCategories.isActive, true))).limit(1);
    const categoryId = (_c = categoryRow[0]) == null ? void 0 : _c.id;
    if (!categoryId) {
      return { data: [], total: 0, page, pageSize };
    }
    conditions.push(eq(posts.categoryId, categoryId));
  }
  const whereClause = and(...conditions);
  const totalResult = await db.select({ value: count() }).from(posts).where(whereClause);
  const total = ((_d = totalResult[0]) == null ? void 0 : _d.value) || 0;
  let orderClause = desc(posts.createdAt);
  if (order === "sort_asc") {
    orderClause = asc(posts.sort);
  } else if (order === "sort_desc") {
    orderClause = desc(posts.sort);
  } else if (order === "asc") {
    orderClause = asc(posts.createdAt);
  } else if (order === "likes_desc" || order === "popular") {
    orderClause = desc(posts.likes);
  } else if (order === "comments_desc") {
    orderClause = desc(posts.comments);
  } else if (order === "views_desc") {
    orderClause = desc(posts.views);
  }
  const selectFields = {
    id: posts.id,
    key: posts.key,
    sort: posts.sort,
    locale: posts.locale,
    slug: posts.slug,
    title: posts.title,
    description: posts.description,
    imageUrl: posts.imageUrl,
    type: posts.type,
    categoryId: posts.categoryId,
    views: posts.views,
    likes: posts.likes,
    comments: posts.comments,
    createdAt: posts.createdAt,
    updatedAt: posts.updatedAt,
    metaData: posts.metaData
  };
  if (includeContent) {
    selectFields.content = posts.content;
  }
  const result = await db.select(selectFields).from(posts).where(whereClause).orderBy(orderClause).limit(pageSize).offset(offset);
  const categoryIds = Array.from(new Set(result.map((row) => row.categoryId).filter((id) => typeof id === "number")));
  let categoryMap = /* @__PURE__ */ new Map();
  if (categoryIds.length) {
    const locale = (localeContext == null ? void 0 : localeContext.locale) || ((_e = await resolvePostLocaleContext(event)) == null ? void 0 : _e.locale) || "en";
    const rows = await db.select().from(postCategories).where(inArray(postCategories.id, categoryIds));
    categoryMap = new Map(rows.map((row) => [row.id, localizePostCategory(row, locale)]));
  }
  return {
    data: result.map((row) => ({
      ...row,
      category: row.categoryId != null ? categoryMap.get(row.categoryId) || null : null
    })),
    total,
    page,
    pageSize
  };
}, {
  maxAge: 60,
  // cache for 60 seconds
  swr: true,
  name: "posts-list",
  varies: ["cookie", "accept-language", "referer", "x-apay-ssr-path", "host", "x-forwarded-host"],
  getKey: (event) => {
    const query = getQuery(event);
    const localeKey = resolvePostRequestLocaleHint(event, query.locale);
    return `posts-${query.type || ""}-l-${localeKey}-k-${query.key || ""}-cat-${query.category || ""}-c-${query.include_content || query.content || "0"}-o-${query.order || ""}-page-${query.page || 1}-size-${query.pageSize || 12}`;
  }
});

export { index_get as default };
//# sourceMappingURL=index.get5.mjs.map
