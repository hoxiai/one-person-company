import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, aZ as postCategories, a$ as normalizePostCategorySlug, b0 as normalizePostCategoryLocalesInput, s as setAuditMeta, a_ as parsePostCategoryLocales, aY as findUniqueViolation } from '../../../../../nitro/nitro.mjs';
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
const _id__put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = Number.parseInt(getRouterParam(event, "id") || "", 10);
  if (!Number.isFinite(id) || id <= 0) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  }
  const body = await readBody(event) || {};
  const existingRows = await db.select().from(postCategories).where(eq(postCategories.id, id)).limit(1);
  const existing = existingRows[0];
  if (!existing) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u5206\u7C7B\u4E0D\u5B58\u5728" : "Category not found" });
  }
  const nextSlug = body.slug !== void 0 ? normalizePostCategorySlug(body.slug) : existing.slug;
  if (!nextSlug) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "slug \u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E14\u53EA\u80FD\u5305\u542B\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u8FDE\u5B57\u7B26" : "Slug is required and may only contain lowercase letters, digits and hyphens"
    });
  }
  const updateData = {
    slug: nextSlug,
    updatedAt: /* @__PURE__ */ new Date()
  };
  if (body.name !== void 0) updateData.name = typeof body.name === "string" ? body.name.trim() : "";
  if (body.description !== void 0) {
    const description = typeof body.description === "string" ? body.description.trim() : "";
    updateData.description = description || null;
  }
  if (body.locales !== void 0) updateData.locales = normalizePostCategoryLocalesInput(body.locales);
  if (body.sort !== void 0) updateData.sort = Number.isFinite(Number(body.sort)) ? Number(body.sort) : 0;
  if (body.isActive !== void 0) updateData.isActive = Boolean(body.isActive);
  if (body.metaData !== void 0) updateData.metaData = normalizeMetaData(body.metaData);
  try {
    const result = await db.update(postCategories).set(updateData).where(eq(postCategories.id, id)).returning();
    const updated = result[0];
    setAuditMeta(event, {
      action: "update",
      resource: "post_categories",
      resourceId: id,
      summary: `Updated post category ${nextSlug}`
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u5206\u7C7B\u66F4\u65B0\u6210\u529F" : "Category updated successfully",
      data: updated ? { ...updated, locales: parsePostCategoryLocales(updated.locales) } : updated
    };
  } catch (error) {
    console.error("Update post category error:", error);
    const duplicate = findUniqueViolation(error);
    if (duplicate && /post_categories[._]slug/.test(duplicate.message)) {
      return { code: 1, message: locale === "zh" ? "\u8BE5 slug \u7684\u5206\u7C7B\u5DF2\u5B58\u5728" : "A category with this slug already exists" };
    }
    return { code: 1, message: error.message || (locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal server error") };
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
