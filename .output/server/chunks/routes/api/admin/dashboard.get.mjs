import { d as defineEventHandler, g as getQuery, D as getConfiguredTimezone, E as getStartOfDayUtc, F as shiftZonedDay, z as orders, b as db, O as ORDER_PAY_STATUS, G as buildLocaleCurrencyQuote, u as users, p as products, H as subscriptions, I as topups, J as loadVisitorReport, K as getRequestHost, L as tickets, M as resolveOrderCurrencyAmounts, B as aggregateOrderAccountingTotals, N as getCurrencyTotal, m as cards, P as getCurrentHour } from '../../../nitro/nitro.mjs';
import { and, gte, lt, eq, sql, or, isNull, gt, inArray, desc } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
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
  const timezone = await getConfiguredTimezone();
  const now = /* @__PURE__ */ new Date();
  const startOfDay = getStartOfDayUtc(timezone);
  let periodStart = new Date(startOfDay.ms);
  if (range === "7d") {
    periodStart = shiftZonedDay(new Date(startOfDay.ms), -6, timezone);
  } else if (range === "30d") {
    periodStart = shiftZonedDay(new Date(startOfDay.ms), -29, timezone);
  }
  const periodCondition = and(gte(orders.createdAt, periodStart), lt(orders.createdAt, now));
  const selectFields = {
    id: orders.id,
    amount: orders.amount,
    currency: orders.currency,
    metaData: orders.metaData,
    payStatus: orders.payStatus,
    status: orders.status,
    contactEmail: orders.contactEmail,
    payMethod: orders.payMethod,
    createdAt: orders.createdAt,
    paidAt: orders.paidAt,
    visitorId: orders.visitorId
  };
  const [
    rawPaidOrderRows,
    rawPeriodOrderRows,
    totalOrderRows,
    baseQuote,
    totalUsersCount,
    totalProductsCount,
    activeSubscriptionsCount,
    pendingFulfillmentsCount,
    pendingTopupsCount,
    recentOrdersResult,
    keyProducts,
    visitorReport,
    pendingTicketsCount
  ] = await Promise.all([
    db.select(selectFields).from(orders).where(eq(orders.payStatus, ORDER_PAY_STATUS.PAID)),
    db.select(selectFields).from(orders).where(periodCondition),
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
    db.select({ id: products.id, name: products.name }).from(products).where(and(eq(products.type, "key"), eq(products.isActive, true))),
    loadVisitorReport(periodStart, now, getRequestHost(event)),
    db.select({ count: sql`count(*)` }).from(tickets).where(inArray(tickets.status, ["open", "in_progress"]))
  ]);
  const paidOrders = rawPaidOrderRows;
  const periodOrderRows = rawPeriodOrderRows;
  const paidPeriodOrders = paidOrders.filter((order) => order.paidAt && order.paidAt >= periodStart && order.paidAt < now && resolveOrderCurrencyAmounts(order).paymentAmount > 0);
  const totalRevenueByCurrency = aggregateOrderAccountingTotals(paidOrders);
  const periodRevenueByCurrency = aggregateOrderAccountingTotals(paidPeriodOrders);
  const baseCurrency = baseQuote.baseCurrency;
  const periodVisitors = visitorReport.rows.length;
  const periodIps = new Set(visitorReport.events.map((row) => row.ip)).size;
  const periodPageViews = visitorReport.rows.reduce((sum, row) => sum + row.pageViews, 0);
  const periodPaidVisitors = visitorReport.rows.filter((row) => row.paid > 0).length;
  const periodRevenueAmount = getCurrencyTotal(periodRevenueByCurrency, baseCurrency);
  const periodPaidOrdersCount = paidPeriodOrders.length;
  const periodConversionRate = periodVisitors > 0 ? Number((periodPaidVisitors / periodVisitors * 100).toFixed(1)) : 0;
  const periodAov = periodPaidOrdersCount > 0 ? Number((periodRevenueAmount / periodPaidOrdersCount).toFixed(2)) : 0;
  let lowStockCardsCount = 0;
  if (keyProducts.length > 0) {
    for (const kp of keyProducts) {
      const avail = await db.select({ count: sql`count(*)` }).from(cards).where(and(eq(cards.productId, kp.id), eq(cards.isUsed, false)));
      const stock = Number(((_a = avail[0]) == null ? void 0 : _a.count) || 0);
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
      const d = shiftZonedDay(new Date(startOfDay.ms), -i, timezone);
      dayKeys.push(getDateKeyInTimezone(d, timezone));
    }
    labels = dayKeys;
    ordersSeries = new Array(dayCount).fill(0);
    revenueSeries = new Array(dayCount).fill(0);
    for (const order of periodOrderRows) {
      const index = dayKeys.indexOf(getDateKeyInTimezone(order.createdAt, timezone));
      if (index !== -1) ordersSeries[index] = (ordersSeries[index] || 0) + 1;
    }
    for (const order of paidPeriodOrders) {
      const index = dayKeys.indexOf(getDateKeyInTimezone(order.paidAt, timezone));
      if (index === -1) continue;
      const amounts = resolveOrderCurrencyAmounts(order);
      if (amounts.accountingCurrency === baseCurrency) {
        revenueSeries[index] = Number(((revenueSeries[index] || 0) + amounts.accountingAmount).toFixed(2));
      }
    }
  } else {
    labels = Array.from({ length: 24 }, (_, index) => `${String(index).padStart(2, "0")}:00`);
    ordersSeries = new Array(24).fill(0);
    revenueSeries = new Array(24).fill(0);
    for (const order of periodOrderRows) {
      const hour = Number(getHourInTimezone(order.createdAt, timezone));
      if (!Number.isInteger(hour) || hour < 0 || hour > 23) continue;
      ordersSeries[hour] = (ordersSeries[hour] || 0) + 1;
    }
    for (const order of paidPeriodOrders) {
      const hour = Number(getHourInTimezone(order.paidAt, timezone));
      if (!Number.isInteger(hour) || hour < 0 || hour > 23) continue;
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
      } else if ((meta == null ? void 0 : meta.is_topup) || ((_b = order.id) == null ? void 0 : _b.startsWith("topup_"))) {
        type = "topup";
      }
    } catch {
    }
    const mix = mixMap[type] || (mixMap[type] = { count: 0, amount: 0 });
    mix.count++;
    const amounts = resolveOrderCurrencyAmounts(order);
    if (amounts.accountingCurrency === baseCurrency) {
      mix.amount = Number((mix.amount + amounts.accountingAmount).toFixed(2));
    }
  }
  const categoryMix = Object.entries(mixMap).map(([type, val]) => ({
    type,
    count: val.count,
    amount: val.amount
  }));
  return {
    stats: {
      range,
      periodOrders: periodOrderRows.length,
      periodPaidOrders: periodPaidOrdersCount,
      periodPaidVisitors,
      periodRevenue: periodRevenueAmount,
      periodRevenueByCurrency,
      periodVisitors,
      periodIps,
      periodPageViews,
      periodConversionRate,
      periodAov,
      // 保持 today 字段别名以向后兼容
      todayOrders: periodOrderRows.length,
      todayPaidOrders: periodPaidOrdersCount,
      todayRevenue: periodRevenueAmount,
      todayRevenueByCurrency: periodRevenueByCurrency,
      todayVisitors: periodVisitors,
      todayIps: periodIps,
      todayPageViews: periodPageViews,
      todayConversionRate: periodConversionRate,
      todayAov: periodAov,
      totalOrders: Number(((_c = totalOrderRows[0]) == null ? void 0 : _c.count) || 0),
      totalRevenue: getCurrencyTotal(totalRevenueByCurrency, baseCurrency),
      totalRevenueByCurrency,
      totalUsers: Number(((_d = totalUsersCount[0]) == null ? void 0 : _d.count) || 0),
      activeProducts: Number(((_e = totalProductsCount[0]) == null ? void 0 : _e.count) || 0),
      activeSubscriptions: Number(((_f = activeSubscriptionsCount[0]) == null ? void 0 : _f.count) || 0),
      currency: baseCurrency
    },
    actionItems: {
      pendingFulfillments: Number(((_g = pendingFulfillmentsCount[0]) == null ? void 0 : _g.count) || 0),
      lowStockCards: lowStockCardsCount,
      pendingTopups: Number(((_h = pendingTopupsCount[0]) == null ? void 0 : _h.count) || 0),
      pendingTickets: Number(((_i = pendingTicketsCount[0]) == null ? void 0 : _i.count) || 0)
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
