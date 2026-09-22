import { d as defineEventHandler, g as getQuery, b as db, m as cards, p as products } from '../../../nitro/nitro.mjs';
import { count, eq, desc } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 15;
  const offset = (page - 1) * pageSize;
  const totalResult = await db.select({ value: count() }).from(cards);
  const total = ((_a = totalResult[0]) == null ? void 0 : _a.value) || 0;
  const result = await db.select({
    id: cards.id,
    productId: cards.productId,
    productName: products.name,
    cardNumber: cards.cardNumber,
    isUsed: cards.isUsed,
    orderId: cards.orderId,
    createdAt: cards.createdAt
  }).from(cards).leftJoin(products, eq(cards.productId, products.id)).orderBy(desc(cards.createdAt)).limit(pageSize).offset(offset);
  return {
    data: result,
    total,
    page,
    pageSize
  };
});

export { index_get as default };
