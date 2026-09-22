import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, ao as paymentMethods } from '../../../../nitro/nitro.mjs';
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

const _id_ = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  if (event.method === "PUT") {
    const body = await readBody(event);
    const updateData = { ...body };
    delete updateData.id;
    delete updateData.createdAt;
    delete updateData.isLocalOnly;
    delete updateData.hasLocalFiles;
    if (updateData.info === void 0) updateData.info = null;
    if (updateData.create === void 0) updateData.create = null;
    if (updateData.callback === void 0) updateData.callback = null;
    updateData.supportedLocales = String(updateData.supportedLocales || "").trim() || null;
    try {
      return await db.update(paymentMethods).set(updateData).where(eq(paymentMethods.id, parseInt(id))).returning();
    } catch (e) {
      console.error("Database update error:", e);
      throw createError({
        statusCode: 500,
        message: locale === "zh" ? `\u6570\u636E\u5E93\u66F4\u65B0\u5931\u8D25\uFF1A${e.message}` : "Failed query: " + e.message
      });
    }
  }
  if (event.method === "DELETE") {
    await db.delete(paymentMethods).where(eq(paymentMethods.id, parseInt(id)));
    return { success: true };
  }
});

export { _id_ as default };
