import { d as defineEventHandler, g as getQuery, p as products, b as db, r as readBody, e as createError, c as getRequestLocale } from '../../../nitro/nitro.mjs';
import { or, like, sql, and, count, desc } from 'drizzle-orm';
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
const index = defineEventHandler(async (event) => {
  var _a;
  if (event.method === "GET") {
    const query = getQuery(event);
    const page = parseInt(query.page) || 1;
    const pageSize = parseInt(query.pageSize) || 15;
    const search = String(query.search || "").trim();
    const type = String(query.type || "").trim();
    const offset = (page - 1) * pageSize;
    const conditions = [];
    if (search) {
      conditions.push(or(
        like(products.name, `%${search}%`),
        like(products.description, `%${search}%`),
        like(products.slug, `%${search}%`)
      ));
    }
    if (type && type !== "all") {
      conditions.push(sql`${products.type} = ${type}`);
    }
    const whereClause = conditions.length === 1 ? conditions[0] : conditions.length > 1 ? and(...conditions) : void 0;
    let countQuery = db.select({ value: count() }).from(products);
    if (whereClause) {
      countQuery = countQuery.where(whereClause);
    }
    const totalResult = await countQuery;
    const total = ((_a = totalResult[0]) == null ? void 0 : _a.value) || 0;
    let selectQuery = db.select().from(products).orderBy(products.sortOrder, desc(products.id)).limit(pageSize).offset(offset);
    if (whereClause) {
      selectQuery = selectQuery.where(whereClause);
    }
    const result = await selectQuery;
    return {
      data: result,
      total,
      page,
      pageSize
    };
  }
  if (event.method === "POST") {
    const body = await readBody(event);
    const { id, ...insertData } = body;
    if (insertData.price !== void 0) {
      const price = Number(insertData.price);
      if (!Number.isFinite(price) || price < 0) {
        throw createError({
          statusCode: 400,
          message: getRequestLocale(event) === "zh" ? "\u4EF7\u683C\u4E0D\u80FD\u4E3A\u8D1F\u6570" : "Price cannot be negative"
        });
      }
    }
    if (!insertData.slug && insertData.name) {
      insertData.slug = insertData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    }
    insertData.imageUrls = normalizeImageUrls(insertData.imageUrls);
    insertData.metaData = normalizeMetaData(insertData.metaData);
    if (insertData.status) {
      insertData.isActive = insertData.status !== "inactive";
    } else if (insertData.isActive !== void 0) {
      insertData.status = insertData.isActive ? "active" : "inactive";
    } else {
      insertData.status = "active";
      insertData.isActive = true;
    }
    if (insertData.createdAt) {
      delete insertData.createdAt;
    }
    return await db.insert(products).values(insertData).returning();
  }
});

export { index as default };
