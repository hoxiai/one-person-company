import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, as as posts } from '../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const status_patch = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const idStr = getRouterParam(event, "id");
  const id = parseInt(idStr || "");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u6587\u7AE0 ID" : "Missing post id" });
  const body = await readBody(event);
  if (typeof (body == null ? void 0 : body.isActive) !== "boolean") {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u72B6\u6001\u53C2\u6570" : "isActive must be a boolean" });
  }
  const updated = await db.update(posts).set({
    isActive: body.isActive,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(posts.id, id)).returning();
  if (updated.length === 0) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u6587\u7AE0\u4E0D\u5B58\u5728" : "Post not found" });
  }
  return {
    code: 0,
    message: locale === "zh" ? "\u72B6\u6001\u66F4\u65B0\u6210\u529F" : "Status updated successfully",
    data: updated[0]
  };
});

export { status_patch as default };
