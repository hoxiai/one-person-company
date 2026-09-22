import { cb as defineCachedEventHandler, f as getRouterParam, c as getRequestLocale, e as createError, b as db, p as products } from '../../../nitro/nitro.mjs';
import { and, eq, ne, sql } from 'drizzle-orm';
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

const _slug__get = defineCachedEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u5546\u54C1 slug" : "Missing product slug" });
  }
  const productList = await db.select().from(products).where(and(
    eq(products.slug, slug),
    eq(products.isActive, true),
    ne(products.status, "inactive")
  )).limit(1);
  const product = productList[0];
  if (!product) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u5546\u54C1\u4E0D\u5B58\u5728" : "Product not found" });
  }
  event.waitUntil(
    db.update(products).set({ views: sql`${products.views} + 1` }).where(eq(products.id, product.id)).execute().catch((error) => console.error("Failed to increment product views:", error))
  );
  let parsedImageUrls = [];
  if (product.imageUrls) {
    try {
      parsedImageUrls = typeof product.imageUrls === "string" ? JSON.parse(product.imageUrls) : product.imageUrls;
    } catch (e) {
      console.error("Failed to parse imageUrls JSON", e);
    }
  }
  return {
    ...product,
    images: parsedImageUrls
  };
}, {
  maxAge: 60,
  // 1 minute
  swr: true,
  name: "product-detail",
  getKey: (event) => getRouterParam(event, "slug") || "unknown"
});

export { _slug__get as default };
