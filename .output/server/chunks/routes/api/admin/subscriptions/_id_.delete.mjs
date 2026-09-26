import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, u as users, D as subscriptions, ba as usesAINodeWallet, bb as appendRevokedPeriod, v as orders, as as ORDER_STATUS, bc as syncWalletTierFromRemaining, ac as emitEvent } from '../../../../nitro/nitro.mjs';
import { eq, and } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

const _id__delete = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u8BA2\u9605 ID" : "Missing subscription id" });
  const existing = await db.select({
    id: subscriptions.id,
    userId: subscriptions.userId,
    status: subscriptions.status,
    currentPeriodStart: subscriptions.currentPeriodStart,
    currentPeriodEnd: subscriptions.currentPeriodEnd,
    metaData: subscriptions.metaData,
    userEmail: users.email
  }).from(subscriptions).leftJoin(users, eq(subscriptions.userId, users.id)).where(eq(subscriptions.id, id)).limit(1);
  if (!existing.length) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u8BA2\u9605\u4E0D\u5B58\u5728" : "Subscription not found" });
  }
  const sub = existing[0];
  if (String(sub.status) !== "active") {
    return { code: 0, message: locale === "zh" ? "\u8BA2\u9605\u5DF2\u4E0D\u5728\u751F\u6548\u4E2D\uFF0C\u65E0\u9700\u91CD\u590D\u53D6\u6D88" : "Subscription is not active" };
  }
  const now = /* @__PURE__ */ new Date();
  const periodStart = sub.currentPeriodStart ? new Date(sub.currentPeriodStart) : null;
  const periodEnd = sub.currentPeriodEnd ? new Date(sub.currentPeriodEnd) : null;
  const notStarted = usesAINodeWallet() && periodStart && periodEnd && periodStart.getTime() > now.getTime();
  await db.update(subscriptions).set({
    status: "canceled",
    cancelAtPeriodEnd: true,
    ...notStarted && periodEnd ? { metaData: appendRevokedPeriod(sub.metaData, { periodEnd: periodEnd.toISOString(), orderId: "", revokedAt: now.toISOString(), reason: "admin_cancel" }) } : {},
    updatedAt: now
  }).where(eq(subscriptions.id, id));
  const relatedOrders = await db.select({ id: orders.id }).from(orders).where(eq(orders.subscriptionId, id));
  await db.update(orders).set({ status: ORDER_STATUS.EXPIRED }).where(and(eq(orders.subscriptionId, id), eq(orders.status, ORDER_STATUS.ACTIVE)));
  if (sub.userId) {
    await syncWalletTierFromRemaining(Number(sub.userId), /* @__PURE__ */ new Date());
  }
  await emitEvent("subscription.revoked", {
    id,
    userId: Number(sub.userId || 0),
    orderId: ((_a = relatedOrders[0]) == null ? void 0 : _a.id) || id,
    subscriptionId: id,
    reason: locale === "zh" ? "\u7BA1\u7406\u5458\u53D6\u6D88\u4E86\u8BA2\u9605" : "Admin cancelled subscription"
  });
  return { code: 0, message: locale === "zh" ? "\u8BA2\u9605\u5DF2\u53D6\u6D88" : "Subscription cancelled" };
});

export { _id__delete as default };
