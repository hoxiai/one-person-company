import { d as defineEventHandler, c as getRequestLocale, g as getQuery, e as createError, o as orders, b as db, p as products, q as aggregateOrderAccountingTotals, v as visitorProfiles, u as users } from '../../../../nitro/nitro.mjs';
import { and, or, isNull, eq, desc } from 'drizzle-orm';
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

const detail_get = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const email = String(query.email || "").trim();
  const visitorId = String(query.visitorId || "").trim();
  const isAnonymous = !email || email === "Anonymous" || email === "\u533F\u540D\u8BBF\u5BA2";
  if (!email && !visitorId) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7F3A\u5C11\u5BA2\u6237\u6807\u8BC6" : "Missing customer identifier"
    });
  }
  try {
    const orderWhere = isAnonymous ? and(
      or(isNull(orders.contactEmail), eq(orders.contactEmail, "")),
      eq(orders.visitorId, visitorId)
    ) : eq(orders.contactEmail, email);
    const orderRows = await db.select({
      id: orders.id,
      amount: orders.amount,
      currency: orders.currency,
      metaData: orders.metaData,
      status: orders.status,
      payStatus: orders.payStatus,
      payMethod: orders.payMethod,
      tradeNo: orders.tradeNo,
      visitorId: orders.visitorId,
      createdAt: orders.createdAt,
      paidAt: orders.paidAt,
      productId: products.id,
      productName: products.name,
      productSlug: products.slug,
      productImage: products.imageUrl
    }).from(orders).leftJoin(products, eq(orders.productId, products.id)).where(orderWhere).orderBy(desc(orders.createdAt));
    const typedOrderRows = orderRows;
    const paidOrders = typedOrderRows.filter((order) => order.payStatus === "paid");
    const totalSpentByCurrency = aggregateOrderAccountingTotals(paidOrders);
    const stats = {
      totalOrders: typedOrderRows.length,
      totalSpent: totalSpentByCurrency.length === 1 ? ((_a = totalSpentByCurrency[0]) == null ? void 0 : _a.amount) || 0 : 0,
      totalSpentByCurrency,
      unpaidOrders: typedOrderRows.length - paidOrders.length
    };
    const attributionVisitorId = visitorId || ((_b = typedOrderRows.find((order) => order.visitorId)) == null ? void 0 : _b.visitorId) || "";
    const profileRows = attributionVisitorId ? await db.select().from(visitorProfiles).where(eq(visitorProfiles.visitorId, attributionVisitorId)).limit(1) : [];
    const registeredUserRows = !isAnonymous ? await db.select({
      id: users.id,
      email: users.email,
      nickname: users.nickname,
      avatarUrl: users.avatarUrl,
      createdAt: users.createdAt,
      status: users.status
    }).from(users).where(eq(users.email, email)).limit(1) : [];
    const responseOrders = typedOrderRows.map(({ metaData: _metaData, ...order }) => order);
    return {
      identity: {
        email: isAnonymous ? null : email,
        visitorId: attributionVisitorId || null,
        isAnonymous
      },
      stats,
      profile: profileRows[0] || null,
      registeredUser: registeredUserRows[0] || null,
      orders: responseOrders
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u5BA2\u6237\u8BE6\u60C5\u5931\u8D25" : "Failed to fetch customer detail")
    });
  }
});

export { detail_get as default };
