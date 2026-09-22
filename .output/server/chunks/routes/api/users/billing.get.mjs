import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, g as getQuery, ci as getOrCreateUserWallet, b as db, b8 as userWallets, o as orders, q as aggregateOrderAccountingTotals, p as products, t as toIsoTimestamp } from '../../../nitro/nitro.mjs';
import { eq, and, gte, ne, desc, inArray } from 'drizzle-orm';
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

const billing_get = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const locale = getRequestLocale(event);
  const session = await requireUserSession(event);
  if (!session || !session.user || !session.user.id) {
    throw createError({
      statusCode: 401,
      message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized"
    });
  }
  const userId = session.user.id;
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.pageSize) || 15;
  const offset = (page - 1) * limit;
  const tab = query.tab || "pending";
  const walletRecord = await getOrCreateUserWallet(Number(userId));
  const userRecord = await db.select().from(userWallets).where(eq(userWallets.id, walletRecord.id)).limit(1);
  const cash = Number(((_a = userRecord[0]) == null ? void 0 : _a.cashBalance) || 0) / 1e8;
  const grant = Number(((_b = userRecord[0]) == null ? void 0 : _b.grantBalance) || 0) / 1e8;
  const availableBalance = cash + grant;
  const thirtyDaysAgo = /* @__PURE__ */ new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentOrders = await db.select({
    amount: orders.amount,
    currency: orders.currency,
    metaData: orders.metaData
  }).from(orders).where(and(
    eq(orders.userId, userId),
    eq(orders.payStatus, "paid"),
    gte(orders.paidAt, thirtyDaysAgo)
  ));
  const monthlySpendByCurrency = aggregateOrderAccountingTotals(recentOrders);
  const monthlySpend = monthlySpendByCurrency.length === 1 ? ((_c = monthlySpendByCurrency[0]) == null ? void 0 : _c.amount) || 0 : 0;
  const wallet = {
    available: availableBalance,
    frozen: 0,
    monthlySpend,
    monthlySpendByCurrency
  };
  const payStatusFilter = tab === "pending" ? eq(orders.payStatus, "pending") : and(
    eq(orders.payStatus, "paid"),
    ne(orders.payStatus, "refunded")
  );
  const records = await db.select().from(orders).where(and(
    eq(orders.userId, userId),
    payStatusFilter
  )).orderBy(desc(orders.createdAt)).limit(limit).offset(offset);
  const productIds = [...new Set(records.map((r) => r.productId))];
  const productsList = productIds.length > 0 ? await db.select({ id: products.id, name: products.name, type: products.type }).from(products).where(inArray(products.id, productIds)) : [];
  const productMap = new Map(productsList.map((p) => [p.id, p]));
  const formattedRecords = records.map((order) => {
    const product = productMap.get(order.productId);
    let displayType = "purchase";
    if ((product == null ? void 0 : product.type) === "subscription") displayType = "subscription";
    if ((product == null ? void 0 : product.type) === "topup") displayType = "recharge";
    return {
      id: order.id,
      time: toIsoTimestamp(order.paidAt || order.createdAt),
      type: displayType,
      target: (product == null ? void 0 : product.name) || (locale === "zh" ? "\u672A\u77E5\u5546\u54C1" : "Unknown Product"),
      amount: Number(order.amount),
      currency: order.currency,
      status: order.payStatus,
      payMethod: order.payMethod || null
    };
  });
  const allUserOrders = await db.select({ id: orders.id }).from(orders).where(and(
    eq(orders.userId, userId),
    payStatusFilter
  ));
  const total = allUserOrders.length;
  return {
    wallet,
    records: {
      list: formattedRecords,
      total
    }
  };
});

export { billing_get as default };
