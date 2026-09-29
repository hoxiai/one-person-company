import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, u as users, z as orders, p as products } from '../../../../nitro/nitro.mjs';
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
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const _id__get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7F3A\u5C11\u8BA2\u5355 ID" : "Missing order id"
    });
  }
  const rows = await db.select({
    id: orders.id,
    amount: orders.amount,
    currency: orders.currency,
    source: orders.source,
    externalOrderId: orders.externalOrderId,
    status: orders.status,
    payStatus: orders.payStatus,
    contactEmail: orders.contactEmail,
    payMethod: orders.payMethod,
    tradeNo: orders.tradeNo,
    visitorId: orders.visitorId,
    deliveryInfo: orders.deliveryInfo,
    metaData: orders.metaData,
    createdAt: orders.createdAt,
    paidAt: orders.paidAt,
    productId: products.id,
    productName: products.name,
    productSlug: products.slug,
    productImage: products.imageUrl,
    productType: products.type,
    productPrice: products.price,
    userId: orders.userId,
    userNickname: users.nickname,
    userEmail: users.email
  }).from(orders).leftJoin(products, eq(orders.productId, products.id)).leftJoin(users, eq(orders.userId, users.id)).where(eq(orders.id, id)).limit(1);
  if (!rows.length) {
    throw createError({
      statusCode: 404,
      message: locale === "zh" ? "\u8BA2\u5355\u4E0D\u5B58\u5728" : "Order not found"
    });
  }
  return {
    code: 0,
    data: rows[0]
  };
});

export { _id__get as default };
