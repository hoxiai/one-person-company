import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, b as db, p as products, o as orders } from '../../../../nitro/nitro.mjs';
import { eq, and } from 'drizzle-orm';
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

const _id__get = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    invalidRequest: "\u8BF7\u6C42\u65E0\u6548",
    orderNotFound: "\u8BA2\u5355\u4E0D\u5B58\u5728"
  } : {
    invalidRequest: "Invalid request",
    orderNotFound: "Order not found"
  };
  const session = await requireUserSession(event);
  const userId = session.user.id;
  const orderId = (_a = event.context.params) == null ? void 0 : _a.id;
  if (!userId || !orderId) {
    throw createError({
      statusCode: 400,
      message: messages.invalidRequest
    });
  }
  const result = await db.select({
    id: orders.id,
    amount: orders.amount,
    currency: orders.currency,
    status: orders.status,
    payStatus: orders.payStatus,
    createdAt: orders.createdAt,
    paidAt: orders.paidAt,
    tradeNo: orders.tradeNo,
    payMethod: orders.payMethod,
    contactEmail: orders.contactEmail,
    deliveryInfo: orders.deliveryInfo,
    productName: products.name,
    productImageUrl: products.imageUrl,
    productType: products.type,
    productSlug: products.slug
  }).from(orders).leftJoin(products, eq(orders.productId, products.id)).where(and(eq(orders.id, orderId), eq(orders.userId, userId))).limit(1);
  if (!result || result.length === 0) {
    throw createError({
      statusCode: 404,
      message: messages.orderNotFound
    });
  }
  return result[0];
});

export { _id__get as default };
