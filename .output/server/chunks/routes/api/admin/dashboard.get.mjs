import { d as defineEventHandler, g as getQuery, D as getConfiguredTimezone, E as getStartOfDayUtc, F as shiftZonedDay, z as orders, b as db, O as ORDER_PAY_STATUS, G as buildLocaleCurrencyQuote, u as users, p as products, H as subscriptions, I as topups, J as tickets, K as newsletterSubscribers, L as promoInviteRelations, o as comments, M as promoApplications, N as emailLogs, P as logs, Q as paymentFailures, R as resolveOrderCurrencyAmounts, B as aggregateOrderAccountingTotals, S as getCurrencyTotal, m as cards, T as toZonedDateKey, U as getCurrentHour, V as getRequestHost, W as isVisitorRollupEnabled, X as resolveRollupSiteHost, Y as ensureRollupRange, Z as loadRollupDashboardTraffic, _ as buildRawDashboardTraffic, $ as loadVisitorReport } from '../../../nitro/nitro.mjs';
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
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const safeCount = async (queryPromise) => {
  var _a;
  try {
    const rows = await queryPromise;
    return Number(((_a = rows[0]) == null ? void 0 : _a.count) || 0);
  } catch {
    return 0;
  }
};
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
  const since24h = new Date(now.getTime() - 24 * 60 * 60 * 1e3);
  const periodCondition = and(gte(orders.createdAt, periodStart), lt(orders.createdAt, now));
  const loadTraffic = async () => {
    const host = getRequestHost(event);
    const siteHost = isVisitorRollupEnabled() ? await resolveRollupSiteHost(host) : null;
    if (siteHost) {
      const ensured = await ensureRollupRange(periodStart, now, { timezone, siteHost });
      return loadRollupDashboardTraffic(periodStart, now, timezone, {
        complete: ensured.pendingDays.length === 0,
        pendingDays: ensured.pendingDays,
        staleDays: ensured.staleDays
      });
    }
    return buildRawDashboardTraffic(await loadVisitorReport(periodStart, now, host), timezone);
  };
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
    traffic,
    pendingTicketsCount,
    periodNewUsersCount,
    activeNewsletterCount,
    promoInvitesCount,
    pendingCommentsCount,
    pendingPromoAppsCount,
    failedEmails24hCount,
    errorLogs24hCount,
    paymentFailures24hCount
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
    loadTraffic(),
    db.select({ count: sql`count(*)` }).from(tickets).where(inArray(tickets.status, ["open", "in_progress"])),
    safeCount(db.select({ count: sql`count(*)` }).from(users).where(and(gte(users.createdAt, periodStart), lt(users.createdAt, now)))),
    safeCount(db.select({ count: sql`count(*)` }).from(newsletterSubscribers).where(eq(newsletterSubscribers.status, "active"))),
    safeCount(db.select({ count: sql`count(*)` }).from(promoInviteRelations)),
    safeCount(db.select({ count: sql`count(*)` }).from(comments).where(eq(comments.status, "pending"))),
    safeCount(db.select({ count: sql`count(*)` }).from(promoApplications).where(eq(promoApplications.status, "pending"))),
    safeCount(db.select({ count: sql`count(*)` }).from(emailLogs).where(and(eq(emailLogs.status, "failed"), gte(emailLogs.createdAt, since24h)))),
    safeCount(db.select({ count: sql`count(*)` }).from(logs).where(and(eq(logs.level, "error"), gte(logs.createdAt, since24h)))),
    safeCount(db.select({ count: sql`count(*)` }).from(paymentFailures).where(gte(paymentFailures.createdAt, since24h)))
  ]);
  const paidOrders = rawPaidOrderRows;
  const periodOrderRows = rawPeriodOrderRows;
  const paidPeriodOrders = paidOrders.filter((order) => order.paidAt && order.paidAt >= periodStart && order.paidAt < now && resolveOrderCurrencyAmounts(order).paymentAmount > 0);
  const totalRevenueByCurrency = aggregateOrderAccountingTotals(paidOrders);
  const periodRevenueByCurrency = aggregateOrderAccountingTotals(paidPeriodOrders);
  const baseCurrency = baseQuote.baseCurrency;
  const {
    periodVisitors,
    periodIps,
    periodPageViews,
    periodPaidVisitors,
    periodRegisterVisitors,
    periodLoginVisitors,
    periodAuthVisitors,
    periodExternalVisitors
  } = traffic;
  const periodNewUsers = Math.max(periodNewUsersCount, periodRegisterVisitors);
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
  let visitorsSeries = [];
  let pageViewsSeries = [];
  if (range === "7d" || range === "30d") {
    const dayCount = range === "7d" ? 7 : 30;
    const dayKeys = [];
    const isoDayKeys = [];
    for (let i = dayCount - 1; i >= 0; i--) {
      const d = shiftZonedDay(new Date(startOfDay.ms), -i, timezone);
      dayKeys.push(getDateKeyInTimezone(d, timezone));
      isoDayKeys.push(toZonedDateKey(d, timezone));
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
    visitorsSeries = isoDayKeys.map((key) => traffic.dailyVisitors.get(key) || 0);
    pageViewsSeries = isoDayKeys.map((key) => traffic.dailyPageViews.get(key) || 0);
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
    visitorsSeries = Array.from({ length: 24 }, (_, hour) => traffic.hourlyVisitors[hour] || 0);
    pageViewsSeries = Array.from({ length: 24 }, (_, hour) => traffic.hourlyPageViews[hour] || 0);
    const currentHour = getCurrentHour(timezone);
    for (let hour = currentHour + 1; hour < 24; hour++) {
      ordersSeries[hour] = 0;
      revenueSeries[hour] = 0;
      visitorsSeries[hour] = 0;
      pageViewsSeries[hour] = 0;
    }
  }
  const { sourceTypeCounts, specificSourceCounts, countryCounts, deviceCounts } = traffic;
  const insightTotal = traffic.visitorDays;
  const toPct = (val, total) => total > 0 ? Number((val / total * 100).toFixed(1)) : 0;
  const defaultSourceTypes = ["direct", "search", "ai", "social", "referral", "campaign", "affiliate"];
  for (const st of defaultSourceTypes) {
    if (!sourceTypeCounts.has(st)) {
      sourceTypeCounts.set(st, { count: 0, paidVisitors: 0 });
    }
  }
  const trafficSources = [...sourceTypeCounts.entries()].map(([type, val]) => ({
    type,
    count: val.count,
    paidVisitors: val.paidVisitors,
    percentage: toPct(val.count, insightTotal)
  })).sort((a, b) => b.count - a.count || a.type.localeCompare(b.type));
  const topSources = [...specificSourceCounts.entries()].sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0])).slice(0, 6).map(([, item]) => ({
    ...item,
    percentage: toPct(item.count, insightTotal)
  }));
  const totalTrackedPageViews = traffic.totalTrackedPageViews || periodPageViews;
  const topPages = traffic.pages.map((page) => ({
    path: page.path,
    views: page.views,
    visitors: page.visitors,
    percentage: toPct(page.views, totalTrackedPageViews)
  })).sort((a, b) => b.views - a.views || b.visitors - a.visitors || a.path.localeCompare(b.path)).slice(0, 6);
  const topCountries = [...countryCounts.entries()].map(([country, count]) => ({
    country,
    count,
    percentage: toPct(count, insightTotal)
  })).sort((a, b) => b.count - a.count || a.country.localeCompare(b.country)).slice(0, 5);
  const devices = [...deviceCounts.entries()].map(([deviceType, count]) => ({
    deviceType,
    count,
    percentage: toPct(count, insightTotal)
  })).sort((a, b) => b.count - a.count || a.deviceType.localeCompare(b.deviceType));
  const recentVisitors = traffic.recentVisitors;
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
  const totalOrdersCount = Number(((_c = totalOrderRows[0]) == null ? void 0 : _c.count) || 0);
  const activeProductsCount = Number(((_d = totalProductsCount[0]) == null ? void 0 : _d.count) || 0);
  const activeSubsCount = Number(((_e = activeSubscriptionsCount[0]) == null ? void 0 : _e.count) || 0);
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
      periodNewUsers,
      periodRegisterVisitors,
      periodLoginVisitors,
      periodAuthVisitors,
      periodExternalVisitors,
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
      totalOrders: totalOrdersCount,
      totalRevenue: getCurrencyTotal(totalRevenueByCurrency, baseCurrency),
      totalRevenueByCurrency,
      totalUsers: Number(((_f = totalUsersCount[0]) == null ? void 0 : _f.count) || 0),
      activeProducts: activeProductsCount,
      activeSubscriptions: activeSubsCount,
      activeNewsletterSubscribers: activeNewsletterCount,
      totalPromoInvites: promoInvitesCount,
      isCommerceActive: activeProductsCount > 0 || totalOrdersCount > 0 || activeSubsCount > 0,
      currency: baseCurrency
    },
    actionItems: {
      pendingFulfillments: Number(((_g = pendingFulfillmentsCount[0]) == null ? void 0 : _g.count) || 0),
      lowStockCards: lowStockCardsCount,
      pendingTopups: Number(((_h = pendingTopupsCount[0]) == null ? void 0 : _h.count) || 0),
      pendingTickets: Number(((_i = pendingTicketsCount[0]) == null ? void 0 : _i.count) || 0),
      pendingComments: pendingCommentsCount,
      pendingPromoApplications: pendingPromoAppsCount,
      failedEmails24h: failedEmails24hCount,
      errorLogs24h: errorLogs24hCount,
      paymentFailures24h: paymentFailures24hCount
    },
    categoryMix,
    trafficInsights: {
      sources: trafficSources,
      topSources,
      topPages,
      topCountries,
      devices,
      recentVisitors,
      rollup: traffic.rollup
    },
    recentOrders: recentOrdersResult,
    chart: {
      labels,
      orders: ordersSeries,
      revenue: revenueSeries,
      visitors: visitorsSeries,
      pageViews: pageViewsSeries,
      currency: baseCurrency,
      range
    },
    timezone,
    generatedAt: now.toISOString()
  };
});

export { dashboard_get as default };
//# sourceMappingURL=dashboard.get.mjs.map
