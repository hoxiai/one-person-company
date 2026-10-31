import { d as defineEventHandler, c as getRequestLocale, r as readBody, a$ as normalizePostCategorySlug, e as createError, b as db, aZ as postCategories, b0 as normalizePostCategoryLocalesInput, s as setAuditMeta, a_ as parsePostCategoryLocales, aY as findUniqueViolation } from '../../../../nitro/nitro.mjs';
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

const normalizeMetaData = (value) => {
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
  const body = await readBody(event) || {};
  const slug = normalizePostCategorySlug(body.slug);
  if (!slug) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "slug \u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E14\u53EA\u80FD\u5305\u542B\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u8FDE\u5B57\u7B26" : "Slug is required and may only contain lowercase letters, digits and hyphens"
    });
  }
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const description = typeof body.description === "string" ? body.description.trim() : "";
  const sort = Number.isFinite(Number(body.sort)) ? Number(body.sort) : 0;
  const isActive = body.isActive !== void 0 ? Boolean(body.isActive) : true;
  try {
    const result = await db.insert(postCategories).values({
      slug,
      name,
      description: description || null,
      locales: normalizePostCategoryLocalesInput(body.locales),
      sort,
      isActive,
      metaData: normalizeMetaData(body.metaData),
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    }).returning();
    const created = result[0];
    setAuditMeta(event, {
      action: "create",
      resource: "post_categories",
      resourceId: created == null ? void 0 : created.id,
      summary: `Created post category ${slug}`
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u5206\u7C7B\u521B\u5EFA\u6210\u529F" : "Category created successfully",
      data: created ? { ...created, locales: parsePostCategoryLocales(created.locales) } : created
    };
  } catch (error) {
    console.error("Create post category error:", error);
    const duplicate = findUniqueViolation(error);
    if (duplicate && /post_categories[._]slug/.test(duplicate.message)) {
      return { code: 1, message: locale === "zh" ? "\u8BE5 slug \u7684\u5206\u7C7B\u5DF2\u5B58\u5728" : "A category with this slug already exists" };
    }
    return { code: 1, message: error.message || (locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal server error") };
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
