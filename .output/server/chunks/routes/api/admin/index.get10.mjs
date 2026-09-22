import { d as defineEventHandler, g as getQuery, b as db, B as topups, u as users, bc as BALANCE_SCALE } from '../../../nitro/nitro.mjs';
import { eq, sql, desc } from 'drizzle-orm';
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
  const page = Math.max(1, Number(query.page) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(query.pageSize) || 20));
  const status = String(query.status || "").trim();
  const listQuery = db.select({
    id: topups.id,
    orderId: topups.orderId,
    userId: topups.userId,
    userEmail: users.email,
    paymentAmount: topups.paymentAmount,
    paymentCurrency: topups.paymentCurrency,
    creditAmountCents: topups.creditAmountCents,
    creditCurrency: topups.creditCurrency,
    balanceType: topups.balanceType,
    status: topups.status,
    retryCount: topups.retryCount,
    shortfallCents: topups.shortfallCents,
    lastError: topups.lastError,
    paidAt: topups.paidAt,
    creditedAt: topups.creditedAt,
    refundedAt: topups.refundedAt,
    createdAt: topups.createdAt
  }).from(topups).leftJoin(users, eq(users.id, topups.userId));
  const countQuery = db.select({ count: sql`count(*)` }).from(topups);
  const [rows, totalRows] = status ? await Promise.all([
    listQuery.where(eq(topups.status, status)).orderBy(desc(topups.createdAt)).limit(pageSize).offset((page - 1) * pageSize),
    countQuery.where(eq(topups.status, status))
  ]) : await Promise.all([
    listQuery.orderBy(desc(topups.createdAt)).limit(pageSize).offset((page - 1) * pageSize),
    countQuery
  ]);
  return {
    code: 0,
    data: {
      page,
      pageSize,
      total: Number(((_a = totalRows[0]) == null ? void 0 : _a.count) || 0),
      list: rows.map((row) => {
        const { creditAmountCents, shortfallCents, ...rest } = row;
        return {
          ...rest,
          creditAmount: Number(creditAmountCents || 0) / BALANCE_SCALE,
          shortfall: Number(shortfallCents || 0) / BALANCE_SCALE
        };
      })
    }
  };
});

export { index_get as default };
