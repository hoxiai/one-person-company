import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, $ as paymentMethods, b4 as normalizePaymentPluginOverrides } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const _id_ = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  const numericId = parseInt(id, 10);
  if (event.method === "PUT") {
    const body = await readBody(event);
    const updateData = { ...body };
    delete updateData.id;
    delete updateData.createdAt;
    delete updateData.isLocalOnly;
    delete updateData.hasLocalFiles;
    if (Object.hasOwn(updateData, "supportedLocales")) {
      updateData.supportedLocales = String(updateData.supportedLocales || "").trim() || null;
    }
    const hasTemplateField = ["info", "create", "callback"].some((field) => Object.hasOwn(updateData, field));
    let normalizedData = updateData;
    if (hasTemplateField) {
      let methodCode = String(updateData.code || "").trim();
      if (!methodCode) {
        const existing = await db.select({ code: paymentMethods.code }).from(paymentMethods).where(eq(paymentMethods.id, numericId));
        methodCode = String(((_a = existing[0]) == null ? void 0 : _a.code) || "").trim();
      }
      normalizedData = normalizePaymentPluginOverrides(methodCode, updateData);
    }
    try {
      return await db.update(paymentMethods).set(normalizedData).where(eq(paymentMethods.id, numericId)).returning();
    } catch (e) {
      console.error("Database update error:", e);
      throw createError({
        statusCode: 500,
        message: locale === "zh" ? `\u6570\u636E\u5E93\u66F4\u65B0\u5931\u8D25\uFF1A${e.message}` : "Failed query: " + e.message
      });
    }
  }
  if (event.method === "DELETE") {
    await db.delete(paymentMethods).where(eq(paymentMethods.id, numericId));
    return { success: true };
  }
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
