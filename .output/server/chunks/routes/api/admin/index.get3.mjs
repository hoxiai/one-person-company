import { d as defineEventHandler, g as getQuery, p as cards, b as db, q as products } from '../../../nitro/nitro.mjs';
import { eq, count, desc } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(1, parseInt(query.page) || 1);
  const pageSize = Math.min(200, Math.max(1, parseInt(query.pageSize) || 15));
  const offset = (page - 1) * pageSize;
  const productId = query.productId && query.productId !== "all" ? Number(query.productId) : null;
  const whereClause = productId && Number.isFinite(productId) ? eq(cards.productId, productId) : void 0;
  const totalQuery = db.select({ value: count() }).from(cards);
  const totalResult = whereClause ? await totalQuery.where(whereClause) : await totalQuery;
  const total = ((_a = totalResult[0]) == null ? void 0 : _a.value) || 0;
  const listQuery = db.select({
    id: cards.id,
    productId: cards.productId,
    productName: products.name,
    cardNumber: cards.cardNumber,
    cardCode: cards.cardNumber,
    isUsed: cards.isUsed,
    orderId: cards.orderId,
    createdAt: cards.createdAt
  }).from(cards).leftJoin(products, eq(cards.productId, products.id));
  const result = await (whereClause ? listQuery.where(whereClause) : listQuery).orderBy(desc(cards.createdAt)).limit(pageSize).offset(offset);
  return {
    data: result,
    total,
    page,
    pageSize
  };
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
