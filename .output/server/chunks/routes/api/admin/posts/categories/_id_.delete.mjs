import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, aZ as postCategories, aT as posts, s as setAuditMeta } from '../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const _id__delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = Number.parseInt(getRouterParam(event, "id") || "", 10);
  if (!Number.isFinite(id) || id <= 0) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  }
  const existingRows = await db.select().from(postCategories).where(eq(postCategories.id, id)).limit(1);
  const existing = existingRows[0];
  if (!existing) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u5206\u7C7B\u4E0D\u5B58\u5728" : "Category not found" });
  }
  try {
    await db.update(posts).set({ categoryId: null }).where(eq(posts.categoryId, id));
    await db.delete(postCategories).where(eq(postCategories.id, id));
    setAuditMeta(event, {
      action: "delete",
      resource: "post_categories",
      resourceId: id,
      summary: `Deleted post category ${existing.slug}`
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u5206\u7C7B\u5DF2\u5220\u9664" : "Category deleted",
      data: { id }
    };
  } catch (error) {
    console.error("Delete post category error:", error);
    return { code: 1, message: error.message || (locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal server error") };
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
