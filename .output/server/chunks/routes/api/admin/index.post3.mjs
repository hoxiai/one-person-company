import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, as as posts } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const index_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  if (!body.title || !body.slug) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u6807\u9898\u548C slug \u4E0D\u80FD\u4E3A\u7A7A" : "Title and slug are required" });
  }
  try {
    const normalizedKey = typeof body.key === "string" ? body.key.trim() : "";
    const normalizedSort = body.sort === "" || body.sort === null || body.sort === void 0 ? null : Number.isFinite(Number(body.sort)) ? Number(body.sort) : null;
    const postData = {
      title: body.title,
      slug: body.slug,
      key: normalizedKey || null,
      sort: normalizedSort,
      description: body.description || null,
      content: body.content || null,
      type: body.type || "blog",
      imageUrl: body.imageUrl || null,
      isActive: body.isActive !== void 0 ? body.isActive : true,
      metaData: body.metaData ? process.env.NUXT_HUB_DATABASE ? body.metaData : JSON.stringify(body.metaData) : null,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    const result = await db.insert(posts).values(postData).returning();
    return { code: 0, message: locale === "zh" ? "\u6587\u7AE0\u521B\u5EFA\u6210\u529F" : "Post created successfully", data: result[0] };
  } catch (error) {
    console.error("Create post error:", error);
    const msg = String((error == null ? void 0 : error.message) || "");
    const pgCode = String((error == null ? void 0 : error.code) || "");
    if (msg.includes("UNIQUE constraint failed") || pgCode === "23505") {
      if (msg.includes("posts.slug") || msg.includes("posts_slug") || msg.includes("posts_slug_key")) {
        return { code: 1, message: locale === "zh" ? "\u8BE5 slug \u7684\u6587\u7AE0\u5DF2\u5B58\u5728" : "A post with this slug already exists" };
      }
      return { code: 1, message: locale === "zh" ? "\u5B58\u5728\u91CD\u590D\u7EA6\u675F" : "Duplicate constraint" };
    }
    return { code: 1, message: error.message || (locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal server error") };
  }
});

export { index_post as default };
