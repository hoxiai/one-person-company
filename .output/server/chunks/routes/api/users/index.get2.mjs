import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, b as db, p as products, z as subscriptions } from '../../../nitro/nitro.mjs';
import { eq, and, or, isNull, gt, desc } from 'drizzle-orm';
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
  const locale = getRequestLocale(event);
  const session = await requireUserSession(event);
  if (!session.user) {
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
  }
  const userId = session.user.id;
  const subRows = await db.select({
    id: subscriptions.id,
    status: subscriptions.status,
    interval: subscriptions.interval,
    intervalCount: subscriptions.intervalCount,
    amount: subscriptions.amount,
    currency: subscriptions.currency,
    currentPeriodStart: subscriptions.currentPeriodStart,
    currentPeriodEnd: subscriptions.currentPeriodEnd,
    cancelAtPeriodEnd: subscriptions.cancelAtPeriodEnd,
    createdAt: subscriptions.createdAt,
    productId: products.id,
    productName: products.name,
    productSlug: products.slug,
    productType: products.type,
    productMetaData: products.metaData
  }).from(subscriptions).leftJoin(products, eq(subscriptions.productId, products.id)).where(and(
    eq(subscriptions.userId, userId),
    eq(subscriptions.status, "active"),
    or(isNull(subscriptions.currentPeriodEnd), gt(subscriptions.currentPeriodEnd, /* @__PURE__ */ new Date()))
  )).orderBy(desc(subscriptions.currentPeriodEnd)).limit(1);
  if (!subRows.length) {
    return { data: null };
  }
  const sub = subRows[0];
  let productMeta = {};
  if (sub.productMetaData) {
    try {
      productMeta = typeof sub.productMetaData === "string" ? JSON.parse(sub.productMetaData) : sub.productMetaData;
    } catch {
    }
  }
  return {
    data: {
      id: sub.id,
      status: sub.status,
      tier: productMeta.level || 0,
      grantAmount: productMeta.grant_amount || 0,
      planName: sub.productName || (locale === "zh" ? "\u672A\u77E5\u5957\u9910" : "Unknown"),
      interval: sub.interval,
      intervalCount: sub.intervalCount,
      amount: sub.amount,
      currency: sub.currency,
      currentPeriodStart: sub.currentPeriodStart,
      currentPeriodEnd: sub.currentPeriodEnd,
      cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
      createdAt: sub.createdAt
    }
  };
});

export { index_get as default };
