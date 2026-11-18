import { d as defineEventHandler, g as getQuery, b as db, w as users, q as products, T as subscriptions, M as orders } from '../../../nitro/nitro.mjs';
import { eq, desc, inArray } from 'drizzle-orm';
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
  const query = getQuery(event);
  const hasPagination = query.page !== void 0 || query.pageSize !== void 0 || query.search !== void 0;
  const page = Math.max(1, parseInt(query.page) || 1);
  const pageSize = Math.min(200, Math.max(1, parseInt(query.pageSize) || 15));
  const search = typeof query.search === "string" ? query.search.trim().toLowerCase() : "";
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
    productMetaData: products.metaData,
    userId: users.id,
    userEmail: users.email,
    userNickname: users.nickname
  }).from(subscriptions).leftJoin(products, eq(subscriptions.productId, products.id)).leftJoin(users, eq(subscriptions.userId, users.id)).orderBy(desc(subscriptions.createdAt));
  if (!subs.length) {
    return hasPagination ? { data: [], total: 0, page, pageSize } : [];
  }
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
  const merged = subs.map((sub) => {
    const linked = orderMap.get(sub.id);
    return {
      ...sub,
      orderId: (linked == null ? void 0 : linked.id) || sub.gatewaySubId || sub.id,
      contactEmail: (linked == null ? void 0 : linked.contactEmail) || sub.userEmail
    };
  });
  if (!hasPagination) {
    return merged;
  }
  const filtered = search ? merged.filter(
    (s) => s.orderId && String(s.orderId).toLowerCase().includes(search) || s.gatewaySubId && String(s.gatewaySubId).toLowerCase().includes(search) || s.productName && String(s.productName).toLowerCase().includes(search) || s.userEmail && String(s.userEmail).toLowerCase().includes(search) || s.contactEmail && String(s.contactEmail).toLowerCase().includes(search)
  ) : merged;
  const total = filtered.length;
  const start = (page - 1) * pageSize;
  return {
    data: filtered.slice(start, start + pageSize),
    total,
    page,
    pageSize
  };
});

export { index_get as default };
//# sourceMappingURL=index.get10.mjs.map
