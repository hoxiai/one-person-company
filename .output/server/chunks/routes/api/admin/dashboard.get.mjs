import { d as defineEventHandler, g as getQuery, w as getConfiguredTimezone, x as getStartOfDayUtc, o as orders, b as db, O as ORDER_PAY_STATUS, y as buildLocaleCurrencyQuote, u as users, p as products, z as subscriptions, B as topups, q as aggregateOrderAccountingTotals, m as cards, C as resolveOrderCurrencyAmounts, D as getCurrentHour, E as getCurrencyTotal } from '../../../nitro/nitro.mjs';
import { sql, eq, and, or, isNull, gt, inArray, desc } from 'drizzle-orm';
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

const getHourInTimezone = (value, timezone) => {
  var _a;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "00";
  const part = (_a = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    hour12: false
  }).formatToParts(date).find((item) => item.type === "hour")) == null ? void 0 : _a.value;
  return part === "24" ? "00" : part || "00";
};
const getDateKeyInTimezone = (value, timezone) => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    month: "2-digit",
    day: "2-digit"
  }).format(date);
};
const dashboard_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const query = getQuery(event);
  const range = String(query.range || "today");
  const explicitDialect = (_a = process.env.DB_DIALECT) == null ? void 0 : _a.replace(/"/g, "").toLowerCase();
  const connectionUrl = process.env.DATABASE_URL || process.env.MYSQL_URL || process.env.POSTGRES_URL || process.env.POSTGRESQL_URL || process.env.NUXT_DATABASE_URL || "";
  const isPostgres = explicitDialect === "postgresql" || connectionUrl.startsWith("postgres://") || connectionUrl.startsWith("postgresql://");
  const isMysql = explicitDialect === "mysql" || connectionUrl.startsWith("mysql://");
  const timezone = await getConfiguredTimezone();
  const now = /* @__PURE__ */ new Date();
  const startOfDay = getStartOfDayUtc(timezone);
  const todayCondition = isPostgres ? sql`${orders.createdAt} >= ${startOfDay.iso}::timestamptz` : isMysql ? sql`${orders.createdAt} >= ${startOfDay.mysql}` : sql`${orders.createdAt} >= ${startOfDay.ms} OR (${orders.createdAt} < 1000000000000 AND ${orders.createdAt} >= ${startOfDay.sec})`;
  const selectFields = {
    id: orders.id,
    amount: orders.amount,
    currency: orders.currency,
    metaData: orders.metaData,
    payStatus: orders.payStatus,
    status: orders.status,
    contactEmail: orders.contactEmail,
    payMethod: orders.payMethod,
    createdAt: orders.createdAt
  };
  const [
    rawPaidOrderRows,
    rawTodayOrderRows,
    totalOrderRows,
    baseQuote,
    totalUsersCount,
    totalProductsCount,
    activeSubscriptionsCount,
    pendingFulfillmentsCount,
    pendingTopupsCount,
    recentOrdersResult,
    keyProducts
  ] = await Promise.all([
    db.select(selectFields).from(orders).where(eq(orders.payStatus, ORDER_PAY_STATUS.PAID)),
    db.select(selectFields).from(orders).where(todayCondition),
    db.select({ count: sql`count(*)` }).from(orders),
    buildLocaleCurrencyQuote(0),
    db.select({ count: sql`count(*)` }).from(users),
    db.select({ count: sql`count(*)` }).from(products).where(eq(products.isActive, true)),
    db.select({ count: sql`count(*)` }).from(subscriptions).where(and(
      eq(subscriptions.status, "active"),
      // 到期由定时任务改状态，漏跑时库里仍是 active；只数 status 会虚高。
      or(isNull(subscriptions.currentPeriodEnd), gt(subscriptions.currentPeriodEnd, /* @__PURE__ */ new Date()))
    )),
    db.select({ count: sql`count(*)` }).from(orders).where(and(eq(orders.payStatus, ORDER_PAY_STATUS.PAID), eq(orders.status, "pending"))),
    db.select({ count: sql`count(*)` }).from(topups).where(inArray(topups.status, ["paid", "crediting", "credit_failed", "review_required"])),
    db.select(selectFields).from(orders).orderBy(desc(orders.createdAt)).limit(6),
    db.select({ id: products.id, name: products.name }).from(products).where(and(eq(products.type, "key"), eq(products.isActive, true)))
  ]);
  const paidOrders = rawPaidOrderRows;
  const todayOrderRows = rawTodayOrderRows;
  const paidTodayOrders = todayOrderRows.filter((order) => order.payStatus === ORDER_PAY_STATUS.PAID);
  const totalRevenueByCurrency = aggregateOrderAccountingTotals(paidOrders);
  const todayRevenueByCurrency = aggregateOrderAccountingTotals(paidTodayOrders);
  const baseCurrency = baseQuote.baseCurrency;
  let lowStockCardsCount = 0;
  if (keyProducts.length > 0) {
    for (const kp of keyProducts) {
      const avail = await db.select({ count: sql`count(*)` }).from(cards).where(and(eq(cards.productId, kp.id), eq(cards.isUsed, false)));
      const stock = Number(((_b = avail[0]) == null ? void 0 : _b.count) || 0);
      if (stock <= 3) {
        lowStockCardsCount++;
      }
    }
  }
  let labels = [];
  let ordersSeries = [];
  let revenueSeries = [];
  if (range === "7d" || range === "30d") {
    const dayCount = range === "7d" ? 7 : 30;
    const dayKeys = [];
    for (let i = dayCount - 1; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1e3);
      dayKeys.push(getDateKeyInTimezone(d, timezone));
    }
    labels = dayKeys;
    ordersSeries = new Array(dayCount).fill(0);
    revenueSeries = new Array(dayCount).fill(0);
    for (const order of paidOrders) {
      const dKey = getDateKeyInTimezone(order.createdAt, timezone);
      const idx = dayKeys.indexOf(dKey);
      if (idx !== -1) {
        ordersSeries[idx]++;
        const amounts = resolveOrderCurrencyAmounts(order);
        if (amounts.accountingCurrency === baseCurrency) {
          revenueSeries[idx] = Number(((revenueSeries[idx] || 0) + amounts.accountingAmount).toFixed(2));
        }
      }
    }
  } else {
    labels = Array.from({ length: 24 }, (_, index) => `${String(index).padStart(2, "0")}:00`);
    ordersSeries = new Array(24).fill(0);
    revenueSeries = new Array(24).fill(0);
    for (const order of todayOrderRows) {
      const hour = Number(getHourInTimezone(order.createdAt, timezone));
      if (!Number.isInteger(hour) || hour < 0 || hour > 23) continue;
      ordersSeries[hour] = (ordersSeries[hour] || 0) + 1;
      if (order.payStatus !== ORDER_PAY_STATUS.PAID) continue;
      const amounts = resolveOrderCurrencyAmounts(order);
      if (amounts.accountingCurrency === baseCurrency) {
        revenueSeries[hour] = Number(((revenueSeries[hour] || 0) + amounts.accountingAmount).toFixed(2));
      }
    }
    const currentHour = getCurrentHour(timezone);
    for (let hour = currentHour + 1; hour < 24; hour++) {
      ordersSeries[hour] = 0;
      revenueSeries[hour] = 0;
    }
  }
  const mixMap = {
    standard: { count: 0, amount: 0 },
    key: { count: 0, amount: 0 },
    subscription: { count: 0, amount: 0 },
    topup: { count: 0, amount: 0 }
  };
  for (const order of paidOrders) {
    let type = "standard";
    try {
      const meta = typeof order.metaData === "string" ? JSON.parse(order.metaData) : order.metaData;
      if (meta == null ? void 0 : meta.product_type) {
        type = meta.product_type;
      } else if ((meta == null ? void 0 : meta.is_subscription) || (meta == null ? void 0 : meta.subscription_id)) {
        type = "subscription";
      } else if ((meta == null ? void 0 : meta.is_topup) || ((_c = order.id) == null ? void 0 : _c.startsWith("topup_"))) {
        type = "topup";
      }
    } catch {
    }
    if (!mixMap[type]) {
      mixMap[type] = { count: 0, amount: 0 };
    }
    mixMap[type].count++;
    const amounts = resolveOrderCurrencyAmounts(order);
    if (amounts.accountingCurrency === baseCurrency) {
      mixMap[type].amount = Number((mixMap[type].amount + amounts.accountingAmount).toFixed(2));
    }
  }
  const categoryMix = Object.entries(mixMap).map(([type, val]) => ({
    type,
    count: val.count,
    amount: val.amount
  }));
  return {
    stats: {
      todayOrders: todayOrderRows.length,
      todayRevenue: getCurrencyTotal(todayRevenueByCurrency, baseCurrency),
      todayRevenueByCurrency,
      totalOrders: Number(((_d = totalOrderRows[0]) == null ? void 0 : _d.count) || 0),
      totalRevenue: getCurrencyTotal(totalRevenueByCurrency, baseCurrency),
      totalRevenueByCurrency,
      totalUsers: Number(((_e = totalUsersCount[0]) == null ? void 0 : _e.count) || 0),
      activeProducts: Number(((_f = totalProductsCount[0]) == null ? void 0 : _f.count) || 0),
      activeSubscriptions: Number(((_g = activeSubscriptionsCount[0]) == null ? void 0 : _g.count) || 0),
      currency: baseCurrency
    },
    actionItems: {
      pendingFulfillments: Number(((_h = pendingFulfillmentsCount[0]) == null ? void 0 : _h.count) || 0),
      lowStockCards: lowStockCardsCount,
      pendingTopups: Number(((_i = pendingTopupsCount[0]) == null ? void 0 : _i.count) || 0)
    },
    categoryMix,
    recentOrders: recentOrdersResult,
    chart: {
      labels,
      orders: ordersSeries,
      revenue: revenueSeries,
      currency: baseCurrency,
      range
    },
    timezone,
    generatedAt: now.toISOString()
  };
});

export { dashboard_get as default };
