import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, aL as normalizePostLocale, b as db, aJ as posts, aM as notifyIndexNowEntityChange, aN as notifySubscribersOnPostPublished, aO as findUniqueViolation } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const normalizePostMetaData = (value) => {
  if (value === null || value === void 0 || value === "") return null;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" ? parsed : null;
    } catch {
      return null;
    }
  }
  return typeof value === "object" ? value : null;
};
const index_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  if (!body.title || !body.slug) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u6807\u9898\u548C slug \u4E0D\u80FD\u4E3A\u7A7A" : "Title and slug are required" });
  }
  try {
    const postType = body.type || "blog";
    const normalizedKey = typeof body.key === "string" ? body.key.trim() : "";
    const normalizedSort = body.sort === "" || body.sort === null || body.sort === void 0 ? null : Number.isFinite(Number(body.sort)) ? Number(body.sort) : null;
    const normalizedLocale = postType === "blog" && typeof body.locale === "string" && body.locale.trim() ? normalizePostLocale(body.locale) || null : null;
    const postData = {
      title: body.title,
      slug: body.slug,
      key: normalizedKey || null,
      sort: normalizedSort,
      locale: normalizedLocale,
      description: body.description || null,
      content: body.content || null,
      type: postType,
      imageUrl: body.imageUrl || null,
      isActive: body.isActive !== void 0 ? body.isActive : true,
      metaData: normalizePostMetaData(body.metaData),
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    const result = await db.insert(posts).values(postData).returning();
    const createdPost = result[0];
    if (createdPost && postData.isActive && postType === "blog" && createdPost.slug) {
      notifyIndexNowEntityChange(event, {
        entityType: "post",
        slug: createdPost.slug,
        locale: createdPost.locale
      });
    }
    let newsletterResult = null;
    if (createdPost && postData.isActive && postType === "blog" && Boolean(body.notifySubscribers)) {
      newsletterResult = await notifySubscribersOnPostPublished({
        id: createdPost.id,
        title: createdPost.title,
        slug: createdPost.slug,
        description: createdPost.description,
        locale: createdPost.locale,
        type: createdPost.type
      }).catch((err) => {
        console.error("[Newsletter] Failed to notify subscribers on post create:", err);
        return null;
      });
    }
    return {
      code: 0,
      message: locale === "zh" ? "\u6587\u7AE0\u521B\u5EFA\u6210\u529F" : "Post created successfully",
      data: createdPost,
      newsletter: newsletterResult
    };
  } catch (error) {
    console.error("Create post error:", error);
    const duplicate = findUniqueViolation(error);
    if (duplicate) {
      if (/posts[._]slug/.test(duplicate.message)) {
        return { code: 1, message: locale === "zh" ? "\u8BE5 slug \u7684\u6587\u7AE0\u5DF2\u5B58\u5728" : "A post with this slug already exists" };
      }
      return { code: 1, message: locale === "zh" ? "\u5B58\u5728\u91CD\u590D\u7EA6\u675F" : "Duplicate constraint" };
    }
    return { code: 1, message: error.message || (locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal server error") };
  }
});

export { index_post as default };
//# sourceMappingURL=index.post3.mjs.map
