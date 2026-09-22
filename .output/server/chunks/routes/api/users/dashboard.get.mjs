import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, b as db, b8 as userWallets, u as users, p as products, o as orders } from '../../../nitro/nitro.mjs';
import { eq, and, ne, desc } from 'drizzle-orm';
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

const dashboard_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const session = await requireUserSession(event);
  if (!session.user) {
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
  }
  const userId = session.user.id;
  const userRecords = await db.select({
    createdAt: users.createdAt,
    cashBalance: userWallets.cashBalance,
    grantBalance: userWallets.grantBalance
  }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id)).where(eq(users.id, userId));
  const user = userRecords[0] || {};
  const allOrders = await db.select({
    id: orders.id,
    status: orders.status,
    payStatus: orders.payStatus,
    amount: orders.amount,
    currency: orders.currency,
    createdAt: orders.createdAt,
    productName: products.name
  }).from(orders).leftJoin(products, eq(orders.productId, products.id)).where(and(
    eq(orders.userId, userId),
    ne(orders.payStatus, "deleted")
  )).orderBy(desc(orders.createdAt));
  const totalOrders = allOrders.length;
  const paidOrders = allOrders.filter((o) => o.payStatus === "paid").length;
  const pendingOrders = allOrders.filter((o) => o.payStatus === "pending").length;
  const recentOrders = allOrders.slice(0, 5);
  const activeServices = allOrders.filter((o) => o.status === "active").slice(0, 3);
  return {
    code: 0,
    data: {
      createdAt: user.createdAt || null,
      cashBalance: (Number(user.cashBalance || 0) + Number(user.grantBalance || 0)) / 1e8,
      stats: {
        totalOrders,
        paidOrders,
        pendingOrders
      },
      recentOrders,
      activeServices
    }
  };
});

export { dashboard_get as default };
