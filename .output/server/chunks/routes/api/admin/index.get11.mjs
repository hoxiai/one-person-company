import { d as defineEventHandler, g as getQuery, I as topups, z as orders, u as users, b as db, bx as BALANCE_SCALE } from '../../../nitro/nitro.mjs';
import { eq, or, like, sql, and, desc } from 'drizzle-orm';
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
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import '@libsql/client';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(1, Number(query.page) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(query.pageSize) || 20));
  const status = String(query.status || "").trim();
  const search = String(query.search || query.q || "").trim();
  const filterConditions = [];
  if (status && status !== "all") {
    filterConditions.push(eq(topups.status, status));
  }
  if (search) {
    const searchPattern = `%${search.toLowerCase()}%`;
    filterConditions.push(or(
      like(sql`lower(${topups.orderId})`, searchPattern),
      like(sql`lower(coalesce(${orders.tradeNo}, ''))`, searchPattern),
      like(sql`lower(coalesce(${users.email}, ''))`, searchPattern),
      like(sql`lower(coalesce(${users.nickname}, ''))`, searchPattern),
      like(sql`lower(coalesce(${orders.contactEmail}, ''))`, searchPattern)
    ));
  }
  const whereClause = filterConditions.length > 0 ? and(...filterConditions) : void 0;
  const listQuery = db.select({
    id: topups.id,
    orderId: topups.orderId,
    userId: topups.userId,
    userEmail: users.email,
    userNickname: users.nickname,
    paymentAmount: topups.paymentAmount,
    paymentCurrency: topups.paymentCurrency,
    creditAmountCents: topups.creditAmountCents,
    creditCurrency: topups.creditCurrency,
    exchangeRate: topups.exchangeRate,
    balanceType: topups.balanceType,
    status: topups.status,
    retryCount: topups.retryCount,
    shortfallCents: topups.shortfallCents,
    lastError: topups.lastError,
    paidAt: topups.paidAt,
    creditedAt: topups.creditedAt,
    refundedAt: topups.refundedAt,
    createdAt: topups.createdAt,
    updatedAt: topups.updatedAt,
    creditEventId: topups.creditEventId,
    refundEventId: topups.refundEventId,
    source: topups.source,
    walletId: topups.walletId,
    payMethod: orders.payMethod,
    tradeNo: orders.tradeNo,
    orderPayStatus: orders.payStatus,
    orderStatus: orders.status,
    contactEmail: orders.contactEmail
  }).from(topups).leftJoin(users, eq(users.id, topups.userId)).leftJoin(orders, eq(orders.id, topups.orderId));
  const countQuery = db.select({ count: sql`count(*)` }).from(topups).leftJoin(users, eq(users.id, topups.userId)).leftJoin(orders, eq(orders.id, topups.orderId));
  const [rows, totalRows] = await Promise.all([
    listQuery.where(whereClause).orderBy(desc(topups.createdAt)).limit(pageSize).offset((page - 1) * pageSize),
    countQuery.where(whereClause)
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
