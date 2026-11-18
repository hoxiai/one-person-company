import { d as defineEventHandler, c as getRequestLocale, aP as getUserSession, b as db, q as products, T as subscriptions } from '../../../nitro/nitro.mjs';
import { eq, and, or, isNull, gt, desc } from 'drizzle-orm';
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
  const locale = getRequestLocale(event);
  const session = await getUserSession(event).catch(() => null);
  if (!(session == null ? void 0 : session.user)) {
    return { data: null, list: [] };
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
    metaData: subscriptions.metaData,
    productId: products.id,
    productName: products.name,
    productSlug: products.slug,
    productType: products.type,
    productMetaData: products.metaData
  }).from(subscriptions).leftJoin(products, eq(subscriptions.productId, products.id)).where(and(
    eq(subscriptions.userId, userId),
    eq(subscriptions.status, "active"),
    or(isNull(subscriptions.currentPeriodEnd), gt(subscriptions.currentPeriodEnd, /* @__PURE__ */ new Date()))
  )).orderBy(desc(subscriptions.currentPeriodEnd)).limit(100);
  if (!subRows.length) {
    return { data: null, list: [] };
  }
  const list = subRows.map((sub) => {
    let productMeta = {};
    if (sub.productMetaData) {
      try {
        productMeta = typeof sub.productMetaData === "string" ? JSON.parse(sub.productMetaData) : sub.productMetaData;
      } catch {
      }
    }
    let subMeta = {};
    if (sub.metaData) {
      try {
        subMeta = typeof sub.metaData === "string" ? JSON.parse(sub.metaData) : sub.metaData;
      } catch {
      }
    }
    return {
      id: sub.id,
      status: sub.status,
      productId: sub.productId,
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
      createdAt: sub.createdAt,
      metaData: subMeta
    };
  });
  return {
    data: (_a = list[0]) != null ? _a : null,
    list
  };
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
