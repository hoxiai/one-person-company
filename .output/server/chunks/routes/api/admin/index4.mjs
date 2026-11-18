import { d as defineEventHandler, g as getQuery, q as products, b as db, p as cards, T as subscriptions, r as readBody, e as createError, c as getRequestLocale, bj as normalizeProductLocalePrices, bc as notifyIndexNowEntityChange } from '../../../nitro/nitro.mjs';
import { or, like, sql, and, eq, count, desc } from 'drizzle-orm';
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
  var _a, _b, _c;
  if (event.method === "GET") {
    const query = getQuery(event);
    const page = parseInt(query.page) || 1;
    const pageSize = parseInt(query.pageSize) || 15;
    const search = String(query.search || "").trim();
    const type = String(query.type || "").trim();
    const status = String(query.status || "").trim();
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
    if (status === "active") {
      conditions.push(and(eq(products.status, "active"), eq(products.isActive, true)));
    } else if (status === "hidden") {
      conditions.push(eq(products.status, "hidden"));
    } else if (status === "inactive") {
      conditions.push(or(eq(products.status, "inactive"), eq(products.isActive, false)));
    }
    const whereClause = conditions.length === 1 ? conditions[0] : conditions.length > 1 ? and(...conditions) : void 0;
    let countQuery = db.select({ value: count() }).from(products);
    if (whereClause) {
      countQuery = countQuery.where(whereClause);
    }
    let selectQuery = db.select().from(products).orderBy(products.sortOrder, desc(products.id)).limit(pageSize).offset(offset);
    if (whereClause) {
      selectQuery = selectQuery.where(whereClause);
    }
    const [totalResult, result, allProductStates, availableCardsResult, activeSubsResult] = await Promise.all([
      countQuery,
      selectQuery,
      db.select({
        type: products.type,
        status: products.status,
        isActive: products.isActive
      }).from(products),
      db.select({ value: count() }).from(cards).where(eq(cards.isUsed, false)),
      db.select({ value: count() }).from(subscriptions).where(eq(subscriptions.status, "active"))
    ]);
    const total = ((_a = totalResult[0]) == null ? void 0 : _a.value) || 0;
    let activeCount = 0;
    let hiddenCount = 0;
    let inactiveCount = 0;
    const typeSet = /* @__PURE__ */ new Set();
    for (const row of allProductStates) {
      if (row.type) typeSet.add(row.type);
      if (row.status === "hidden") {
        hiddenCount += 1;
      } else if (row.status === "inactive" || row.isActive === false) {
        inactiveCount += 1;
      } else {
        activeCount += 1;
      }
    }
    return {
      data: result,
      total,
      page,
      pageSize,
      summary: {
        all: allProductStates.length,
        active: activeCount,
        hidden: hiddenCount,
        inactive: inactiveCount,
        types: [...typeSet],
        availableCards: Number(((_b = availableCardsResult[0]) == null ? void 0 : _b.value) || 0),
        activeSubscriptions: Number(((_c = activeSubsResult[0]) == null ? void 0 : _c.value) || 0)
      }
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
    insertData.metaData = await normalizeProductLocalePrices(normalizeMetaData(insertData.metaData));
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
    const created = await db.insert(products).values(insertData).returning();
    const createdProduct = created[0];
    if ((createdProduct == null ? void 0 : createdProduct.isActive) && createdProduct.slug) {
      notifyIndexNowEntityChange(event, {
        entityType: "product",
        slug: createdProduct.slug
      });
    }
    return created;
  }
});

export { index as default };
//# sourceMappingURL=index4.mjs.map
