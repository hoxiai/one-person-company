import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, aJ as posts, aK as assertPostMutable, aM as notifyIndexNowEntityChange } from '../../../../../nitro/nitro.mjs';
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

const status_patch = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const idStr = getRouterParam(event, "id");
  const id = parseInt(idStr || "");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u6587\u7AE0 ID" : "Missing post id" });
  const body = await readBody(event);
  if (typeof (body == null ? void 0 : body.isActive) !== "boolean") {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u72B6\u6001\u53C2\u6570" : "isActive must be a boolean" });
  }
  const existing = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  if (!existing.length) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u6587\u7AE0\u4E0D\u5B58\u5728" : "Post not found" });
  }
  assertPostMutable(existing[0], locale);
  const updated = await db.update(posts).set({
    isActive: body.isActive,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(posts.id, id)).returning();
  if (updated.length === 0) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u6587\u7AE0\u4E0D\u5B58\u5728" : "Post not found" });
  }
  const updatedPost = updated[0];
  if ((updatedPost == null ? void 0 : updatedPost.isActive) && updatedPost.type === "blog" && updatedPost.slug) {
    notifyIndexNowEntityChange(event, {
      entityType: "post",
      slug: updatedPost.slug,
      locale: updatedPost.locale
    });
  }
  return {
    code: 0,
    message: locale === "zh" ? "\u72B6\u6001\u66F4\u65B0\u6210\u529F" : "Status updated successfully",
    data: updated[0]
  };
});

export { status_patch as default };
//# sourceMappingURL=status.patch.mjs.map
