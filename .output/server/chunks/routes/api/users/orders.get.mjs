import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, g as getQuery, o as orders, b as db, p as products } from '../../../nitro/nitro.mjs';
import { and, eq, ne, count, desc } from 'drizzle-orm';
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

const orders_get = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const session = await requireUserSession(event);
  const userId = session.user.id;
  if (!userId) {
    throw createError({
      statusCode: 401,
      message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized"
    });
  }
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 10;
  const offset = (page - 1) * pageSize;
  const filter = and(
    eq(orders.userId, userId),
    ne(orders.payStatus, "deleted")
  );
  const totalResult = await db.select({ value: count() }).from(orders).where(filter);
  const total = ((_a = totalResult[0]) == null ? void 0 : _a.value) || 0;
  const userOrders = await db.select({
    id: orders.id,
    amount: orders.amount,
    currency: orders.currency,
    status: orders.status,
    payStatus: orders.payStatus,
    createdAt: orders.createdAt,
    paidAt: orders.paidAt,
    tradeNo: orders.tradeNo,
    payMethod: orders.payMethod,
    productName: products.name,
    productImageUrl: products.imageUrl,
    productType: products.type,
    deliveryInfo: orders.deliveryInfo
  }).from(orders).leftJoin(products, eq(orders.productId, products.id)).where(filter).orderBy(desc(orders.createdAt)).limit(pageSize).offset(offset);
  return {
    data: userOrders,
    total,
    page,
    pageSize
  };
});

export { orders_get as default };
