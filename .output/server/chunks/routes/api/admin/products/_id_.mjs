import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, p as products, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
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

const normalizeImageUrls = (value) => {
  if (value === null || value === void 0 || value === "") {
    return [];
  }
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return Array.isArray(value) ? value : [];
};
const normalizeMetaData = (value) => {
  if (value === null || value === void 0 || value === "") {
    return {};
  }
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }
  return value && typeof value === "object" ? value : {};
};
const _id_ = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  if (event.method === "PUT") {
    const body = await readBody(event);
    const updateData = { ...body };
    delete updateData.id;
    delete updateData.createdAt;
    if (updateData.price !== void 0) {
      const price = Number(updateData.price);
      if (!Number.isFinite(price) || price < 0) {
        throw createError({
          statusCode: 400,
          message: locale === "zh" ? "\u4EF7\u683C\u4E0D\u80FD\u4E3A\u8D1F\u6570" : "Price cannot be negative"
        });
      }
    }
    if (!updateData.slug && updateData.name) {
      updateData.slug = updateData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    }
    updateData.imageUrls = normalizeImageUrls(updateData.imageUrls);
    updateData.metaData = normalizeMetaData(updateData.metaData);
    if (updateData.status) {
      updateData.isActive = updateData.status !== "inactive";
    } else if (updateData.isActive !== void 0) {
      updateData.status = updateData.isActive ? "active" : "inactive";
    }
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === void 0 || updateData[key] === null) {
        delete updateData[key];
      }
    });
    const [before] = await db.select({ name: products.name, price: products.price, isActive: products.isActive }).from(products).where(eq(products.id, parseInt(id))).limit(1);
    const updated = await db.update(products).set(updateData).where(eq(products.id, parseInt(id))).returning();
    setAuditMeta(event, {
      summary: `Updated product "${(_a = before == null ? void 0 : before.name) != null ? _a : id}"`,
      details: {
        before: before != null ? before : null,
        after: { name: updateData.name, price: updateData.price, isActive: updateData.isActive }
      }
    });
    return updated;
  }
  if (event.method === "DELETE") {
    const [before] = await db.select({ name: products.name, price: products.price }).from(products).where(eq(products.id, parseInt(id))).limit(1);
    await db.delete(products).where(eq(products.id, parseInt(id)));
    setAuditMeta(event, {
      summary: `Deleted product "${(_b = before == null ? void 0 : before.name) != null ? _b : id}"`,
      details: { before: before != null ? before : null }
    });
    return { success: true };
  }
});

export { _id_ as default };
