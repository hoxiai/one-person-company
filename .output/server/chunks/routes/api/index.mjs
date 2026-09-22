import { d as defineEventHandler, c as getRequestLocale, g as getQuery, aO as getUserSession, b_ as getCookie, e as createError, o as orders, b as db, u as users, p as products } from '../../nitro/nitro.mjs';
import { or, eq, count, desc } from 'drizzle-orm';
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

const index = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 15;
  const offset = (page - 1) * pageSize;
  const session = await getUserSession(event);
  const userId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  const visitorId = getCookie(event, "visitor_id");
  if (!userId && !visitorId) {
    throw createError({
      statusCode: 401,
      message: locale === "zh" ? "\u672A\u767B\u5F55\uFF0C\u4E14\u672A\u627E\u5230\u8BBF\u5BA2\u51ED\u8BC1" : "Unauthorized: No user session or visitor cookie found"
    });
  }
  const authCondition = userId ? or(eq(orders.userId, userId), eq(orders.visitorId, visitorId || "")) : eq(orders.visitorId, visitorId);
  const totalResult = await db.select({ value: count() }).from(orders).where(authCondition);
  const total = ((_b = totalResult[0]) == null ? void 0 : _b.value) || 0;
  const result = await db.select({
    id: orders.id,
    amount: orders.amount,
    currency: orders.currency,
    status: orders.status,
    contactEmail: orders.contactEmail,
    payMethod: orders.payMethod,
    tradeNo: orders.tradeNo,
    visitorId: orders.visitorId,
    createdAt: orders.createdAt,
    productName: products.name,
    productSlug: products.slug,
    productId: products.id,
    productImage: products.imageUrl,
    productType: products.type,
    userNickname: users.nickname,
    userEmail: users.email
  }).from(orders).leftJoin(products, eq(orders.productId, products.id)).leftJoin(users, eq(orders.userId, users.id)).where(authCondition).orderBy(desc(orders.createdAt)).limit(pageSize).offset(offset);
  return {
    data: result,
    total,
    page,
    pageSize
  };
});

export { index as default };
