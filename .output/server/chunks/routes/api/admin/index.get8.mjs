import { d as defineEventHandler, b as db, u as users, p as products, z as subscriptions, o as orders } from '../../../nitro/nitro.mjs';
import { eq, desc, inArray } from 'drizzle-orm';
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
  const subs = await db.select({
    id: subscriptions.id,
    gatewaySubId: subscriptions.gatewaySubId,
    amount: subscriptions.amount,
    currency: subscriptions.currency,
    interval: subscriptions.interval,
    intervalCount: subscriptions.intervalCount,
    status: subscriptions.status,
    payMethod: subscriptions.payMethod,
    createdAt: subscriptions.createdAt,
    currentPeriodStart: subscriptions.currentPeriodStart,
    currentPeriodEnd: subscriptions.currentPeriodEnd,
    cancelAtPeriodEnd: subscriptions.cancelAtPeriodEnd,
    productId: products.id,
    productName: products.name,
    userId: users.id,
    userEmail: users.email,
    userNickname: users.nickname
  }).from(subscriptions).leftJoin(products, eq(subscriptions.productId, products.id)).leftJoin(users, eq(subscriptions.userId, users.id)).orderBy(desc(subscriptions.createdAt));
  if (!subs.length) return [];
  const subIds = subs.map((s) => s.id).filter(Boolean);
  const relatedOrders = subIds.length > 0 ? await db.select({
    id: orders.id,
    subscriptionId: orders.subscriptionId,
    contactEmail: orders.contactEmail
  }).from(orders).where(inArray(orders.subscriptionId, subIds)).orderBy(desc(orders.createdAt)) : [];
  const orderMap = /* @__PURE__ */ new Map();
  for (const ord of relatedOrders) {
    if (ord.subscriptionId && !orderMap.has(ord.subscriptionId)) {
      orderMap.set(ord.subscriptionId, {
        id: ord.id,
        contactEmail: ord.contactEmail
      });
    }
  }
  return subs.map((sub) => {
    const linked = orderMap.get(sub.id);
    return {
      ...sub,
      orderId: (linked == null ? void 0 : linked.id) || sub.gatewaySubId || sub.id,
      contactEmail: (linked == null ? void 0 : linked.contactEmail) || sub.userEmail
    };
  });
});

export { index_get as default };
