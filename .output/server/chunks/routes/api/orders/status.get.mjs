import { d as defineEventHandler, c as getRequestLocale, g as getQuery, e as createError, bZ as resolveOrderAccess, b as db, p as products } from '../../../nitro/nitro.mjs';
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

const status_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const orderId = query.orderId;
  if (!orderId) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u8BA2\u5355 ID \u4E0D\u80FD\u4E3A\u7A7A" : "Order ID is required" });
  }
  const { order, owned } = await resolveOrderAccess(event, orderId);
  let product = null;
  if (order.productId) {
    const productRows = await db.select({
      name: products.name,
      type: products.type,
      slug: products.slug,
      imageUrl: products.imageUrl
    }).from(products).where(eq(products.id, order.productId)).limit(1);
    product = productRows[0] || null;
  }
  const deliveryInfo = owned && order.payStatus === "paid" ? order.deliveryInfo : null;
  return {
    code: 0,
    data: {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      payStatus: order.payStatus,
      createdAt: order.createdAt,
      paidAt: order.paidAt,
      payMethod: order.payMethod,
      deliveryInfo,
      productName: (product == null ? void 0 : product.name) || null,
      productType: (product == null ? void 0 : product.type) || null,
      productSlug: (product == null ? void 0 : product.slug) || null,
      productImageUrl: (product == null ? void 0 : product.imageUrl) || null
    }
  };
});

export { status_get as default };
