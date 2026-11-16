import { d as defineEventHandler, g as getQuery, e as createError, V as topups, M as orders, w as users, b as db, q as products, d8 as getTopupManagementActions, d7 as BALANCE_SCALE } from '../../../nitro/nitro.mjs';
import { isNull, isNotNull, eq, or, like, sql, and, desc } from 'drizzle-orm';
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
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

const index_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(1, Number(query.page) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(query.pageSize) || 20));
  const status = String(query.status || "").trim();
  const search = String(query.search || query.q || "").trim();
  const archive = String(query.archive || "current");
  if (!["current", "archived", "all"].includes(archive)) {
    throw createError({ statusCode: 400, message: "Invalid archive filter" });
  }
  const filterConditions = [];
  if (archive === "current") filterConditions.push(isNull(topups.archivedAt));
  if (archive === "archived") filterConditions.push(isNotNull(topups.archivedAt));
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
    archivedAt: topups.archivedAt,
    archivedBy: topups.archivedBy,
    archiveReason: topups.archiveReason,
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
    orderPaidAt: orders.paidAt,
    productType: products.type,
    contactEmail: orders.contactEmail
  }).from(topups).leftJoin(users, eq(users.id, topups.userId)).leftJoin(orders, eq(orders.id, topups.orderId)).leftJoin(products, eq(products.id, orders.productId));
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
          shortfall: Number(shortfallCents || 0) / BALANCE_SCALE,
          managementActions: getTopupManagementActions(row)
        };
      })
    }
  };
});

export { index_get as default };
//# sourceMappingURL=index.get12.mjs.map
