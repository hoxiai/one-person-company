import { d as defineEventHandler, g as getQuery, P as getConfiguredTimezone, Q as getStartOfDayUtc, R as shiftZonedDay, S as getRequestHost, b as db, M as orders, q as products, T as subscriptions, w as users, U as topups, v as tickets, V as newsletterSubscribers, W as promoInviteRelations, G as comments, X as promoApplications, Y as emailLogs, Z as logs, _ as paymentFailures, $ as paymentMethods, a0 as emailProviders, a1 as buildLocaleCurrencyQuote, a2 as ORDER_PAY_STATUS, N as aggregateOrderAccountingTotals, a3 as resolveOrderCurrencyAmounts, a4 as getCurrencyTotal, p as cards, a5 as toZonedDateKey, a6 as getCurrentHour, a7 as buildApayDashboardTelemetry, a8 as isVisitorRollupEnabled, a9 as resolveRollupSiteHost, aa as ensureRollupRange, ab as loadRollupDashboardTraffic, ac as buildRawDashboardTraffic, ad as loadVisitorReport, ae as createRollupBackgroundScheduler } from '../../../nitro/nitro.mjs';
import { sql, eq, and, or, isNull, gt, inArray, gte, lt, desc } from 'drizzle-orm';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

let lifetimePaidDigestCache = null;
const LIFETIME_DIGEST_TTL_MS = 3e4;
const DEFAULT_CATEGORY_MIX = () => [
  { type: "standard", count: 0, amount: 0 },
  { type: "key", count: 0, amount: 0 },
  { type: "subscription", count: 0, amount: 0 },
  { type: "topup", count: 0, amount: 0 }
];
const safeCount = async (queryPromise) => {
  var _a;
  try {
    const rows = await queryPromise;
    return Number(((_a = rows[0]) == null ? void 0 : _a.count) || 0);
  } catch {
    return 0;
  }
};
const safeRows = async (queryPromise) => {
  try {
    return await queryPromise;
  } catch {
    return [];
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
const computeCategoryMix = (paidOrders, baseCurrency) => {
  var _a;
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
      if (meta == null ? void 0 : meta.product_type) type = meta.product_type;
      else if ((meta == null ? void 0 : meta.is_subscription) || (meta == null ? void 0 : meta.subscription_id)) type = "subscription";
      else if ((meta == null ? void 0 : meta.is_topup) || ((_a = order.id) == null ? void 0 : _a.startsWith("topup_"))) type = "topup";
    } catch {
    }
    const mix = mixMap[type] || (mixMap[type] = { count: 0, amount: 0 });
    mix.count++;
    const amounts = resolveOrderCurrencyAmounts(order);
    if (amounts.accountingCurrency === baseCurrency) {
      mix.amount = Number((mix.amount + amounts.accountingAmount).toFixed(2));
    }
  }
  return Object.entries(mixMap).map(([type, val]) => ({ type, count: val.count, amount: val.amount }));
};
const dashboard_get = defineEventHandler(async (event) => {
  var _a;
  const startedAtMs = Date.now();
  const query = getQuery(event);
  const range = String(query.range || "today");
  const timezone = await getConfiguredTimezone();
  const now = /* @__PURE__ */ new Date();
  const startOfDay = getStartOfDayUtc(timezone);
  let periodStart = new Date(startOfDay.ms);
  if (range === "7d") periodStart = shiftZonedDay(new Date(startOfDay.ms), -6, timezone);
  else if (range === "30d") periodStart = shiftZonedDay(new Date(startOfDay.ms), -29, timezone);
  const since24h = new Date(now.getTime() - 24 * 60 * 60 * 1e3);
  const host = getRequestHost(event, { xForwardedHost: true });
  const loadTraffic = async () => {
    const siteHost = isVisitorRollupEnabled() ? await resolveRollupSiteHost(host) : null;
    if (siteHost) {
      const ensured = await ensureRollupRange(periodStart, now, { timezone, siteHost }, { schedule: createRollupBackgroundScheduler(event) });
      return loadRollupDashboardTraffic(periodStart, now, timezone, {
        complete: ensured.pendingDays.length === 0,
        pendingDays: ensured.pendingDays,
        staleDays: ensured.staleDays
      });
    }
    return buildRawDashboardTraffic(await loadVisitorReport(periodStart, now, host), timezone);
  };
  const [
    totalOrdersCount,
    activeProductsCount,
    activeSubsCount,
    totalUsersCount,
    pendingTopups,
    pendingTickets,
    periodNewUsersCount,
    activeNewsletterCount,
    promoInvitesCount,
    pendingCommentsCount,
    pendingPromoAppsCount,
    failedEmails24hCount,
    errorLogs24hCount,
    paymentFailures24hCount,
    activePaymentMethodsCount,
    activeEmailProvidersCount,
    baseQuote,
    traffic
  ] = await Promise.all([
    safeCount(db.select({ count: sql`count(*)` }).from(orders)),
    safeCount(db.select({ count: sql`count(*)` }).from(products).where(eq(products.isActive, true))),
    safeCount(db.select({ count: sql`count(*)` }).from(subscriptions).where(and(
      eq(subscriptions.status, "active"),
      or(isNull(subscriptions.currentPeriodEnd), gt(subscriptions.currentPeriodEnd, now))
    ))),
    safeCount(db.select({ count: sql`count(*)` }).from(users)),
    safeCount(db.select({ count: sql`count(*)` }).from(topups).where(inArray(topups.status, ["paid", "crediting", "credit_failed", "review_required"]))),
    safeCount(db.select({ count: sql`count(*)` }).from(tickets).where(inArray(tickets.status, ["open", "in_progress"]))),
    safeCount(db.select({ count: sql`count(*)` }).from(users).where(and(gte(users.createdAt, periodStart), lt(users.createdAt, now)))),
    safeCount(db.select({ count: sql`count(*)` }).from(newsletterSubscribers).where(eq(newsletterSubscribers.status, "active"))),
    safeCount(db.select({ count: sql`count(*)` }).from(promoInviteRelations)),
    safeCount(db.select({ count: sql`count(*)` }).from(comments).where(eq(comments.status, "pending"))),
    safeCount(db.select({ count: sql`count(*)` }).from(promoApplications).where(eq(promoApplications.status, "pending"))),
    safeCount(db.select({ count: sql`count(*)` }).from(emailLogs).where(and(eq(emailLogs.status, "failed"), gte(emailLogs.createdAt, since24h)))),
    safeCount(db.select({ count: sql`count(*)` }).from(logs).where(and(eq(logs.level, "error"), gte(logs.createdAt, since24h)))),
    safeCount(db.select({ count: sql`count(*)` }).from(paymentFailures).where(gte(paymentFailures.createdAt, since24h))),
    safeCount(db.select({ count: sql`count(*)` }).from(paymentMethods).where(eq(paymentMethods.isActive, true))),
    safeCount(db.select({ count: sql`count(*)` }).from(emailProviders).where(eq(emailProviders.isActive, true))),
    buildLocaleCurrencyQuote(0),
    loadTraffic()
  ]);
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
  const periodCondition = and(gte(orders.createdAt, periodStart), lt(orders.createdAt, now));
  const paidPeriodCondition = and(eq(orders.payStatus, ORDER_PAY_STATUS.PAID), gte(orders.paidAt, periodStart), lt(orders.paidAt, now));
  const [
    paidOrderCount,
    latestPaidOrderRows,
    rawPaidPeriodOrderRows,
    rawPeriodOrderRows,
    pendingFulfillments,
    recentOrdersResult,
    keyProducts,
    recentErrorLogs,
    recentPaymentFailures,
    recentFailedEmails,
    creditFailedTopups
  ] = await Promise.all([
    totalOrdersCount > 0 ? safeCount(db.select({ count: sql`count(*)` }).from(orders).where(eq(orders.payStatus, ORDER_PAY_STATUS.PAID))) : Promise.resolve(0),
    totalOrdersCount > 0 ? safeRows(db.select({ paidAt: orders.paidAt }).from(orders).where(eq(orders.payStatus, ORDER_PAY_STATUS.PAID)).orderBy(desc(orders.paidAt)).limit(1)) : Promise.resolve([]),
    totalOrdersCount > 0 ? safeRows(db.select({ id: orders.id, amount: orders.amount, currency: orders.currency, metaData: orders.metaData, paidAt: orders.paidAt }).from(orders).where(paidPeriodCondition)) : Promise.resolve([]),
    totalOrdersCount > 0 ? safeRows(db.select(selectFields).from(orders).where(periodCondition)) : Promise.resolve([]),
    totalOrdersCount > 0 ? safeCount(db.select({ count: sql`count(*)` }).from(orders).where(and(eq(orders.payStatus, ORDER_PAY_STATUS.PAID), eq(orders.status, "pending")))) : Promise.resolve(0),
    totalOrdersCount > 0 ? safeRows(db.select(selectFields).from(orders).orderBy(desc(orders.createdAt)).limit(6)) : Promise.resolve([]),
    activeProductsCount > 0 ? safeRows(db.select({ id: products.id, name: products.name }).from(products).where(and(eq(products.type, "key"), eq(products.isActive, true)))) : Promise.resolve([]),
    errorLogs24hCount > 0 ? safeRows(db.select({ id: logs.id, message: logs.message, source: logs.source, createdAt: logs.createdAt }).from(logs).where(and(eq(logs.level, "error"), gte(logs.createdAt, since24h))).orderBy(desc(logs.createdAt)).limit(20)) : Promise.resolve([]),
    paymentFailures24hCount > 0 ? safeRows(db.select({ id: paymentFailures.id, orderId: paymentFailures.orderId, reason: paymentFailures.reason, payMethod: paymentFailures.payMethod, createdAt: paymentFailures.createdAt }).from(paymentFailures).where(gte(paymentFailures.createdAt, since24h)).orderBy(desc(paymentFailures.createdAt)).limit(20)) : Promise.resolve([]),
    failedEmails24hCount > 0 ? safeRows(db.select({ id: emailLogs.id, provider: emailLogs.provider, error: emailLogs.error, createdAt: emailLogs.createdAt }).from(emailLogs).where(and(eq(emailLogs.status, "failed"), gte(emailLogs.createdAt, since24h))).orderBy(desc(emailLogs.createdAt)).limit(15)) : Promise.resolve([]),
    pendingTopups > 0 ? safeRows(db.select({ id: topups.id, orderId: topups.orderId, status: topups.status, lastError: topups.lastError, updatedAt: topups.updatedAt, createdAt: topups.createdAt }).from(topups).where(inArray(topups.status, ["credit_failed", "review_required"])).orderBy(desc(topups.updatedAt)).limit(10)) : Promise.resolve([])
  ]);
  const baseCurrency = baseQuote.baseCurrency;
  const latestPaidDate = (_a = latestPaidOrderRows[0]) == null ? void 0 : _a.paidAt;
  const latestPaidAtMs = latestPaidDate ? new Date(latestPaidDate).getTime() : 0;
  let totalRevenueByCurrency = [];
  let categoryMix = DEFAULT_CATEGORY_MIX();
  if (paidOrderCount > 0) {
    if (lifetimePaidDigestCache && lifetimePaidDigestCache.expiresAtMs > startedAtMs && lifetimePaidDigestCache.paidOrderCount === paidOrderCount && lifetimePaidDigestCache.latestPaidAtMs === latestPaidAtMs && lifetimePaidDigestCache.baseCurrency === baseCurrency) {
      totalRevenueByCurrency = lifetimePaidDigestCache.totalRevenueByCurrency;
      categoryMix = lifetimePaidDigestCache.categoryMix;
    } else {
      const rawPaidOrderRows = await db.select({ id: orders.id, amount: orders.amount, currency: orders.currency, metaData: orders.metaData, paidAt: orders.paidAt }).from(orders).where(eq(orders.payStatus, ORDER_PAY_STATUS.PAID));
      const paidOrders = rawPaidOrderRows;
      totalRevenueByCurrency = aggregateOrderAccountingTotals(paidOrders);
      categoryMix = computeCategoryMix(paidOrders, baseCurrency);
      lifetimePaidDigestCache = {
        expiresAtMs: Date.now() + LIFETIME_DIGEST_TTL_MS,
        paidOrderCount,
        latestPaidAtMs,
        baseCurrency,
        totalRevenueByCurrency,
        categoryMix
      };
    }
  }
  const periodOrderRows = rawPeriodOrderRows;
  const paidPeriodOrders = rawPaidPeriodOrderRows.filter(
    (order) => order.paidAt && order.paidAt >= periodStart && order.paidAt < now && resolveOrderCurrencyAmounts(order).paymentAmount > 0
  );
  const periodRevenueByCurrency = aggregateOrderAccountingTotals(paidPeriodOrders);
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
    const stockRows = await db.select({ productId: cards.productId, count: sql`count(*)` }).from(cards).where(and(inArray(cards.productId, keyProducts.map((kp) => kp.id)), eq(cards.isUsed, false))).groupBy(cards.productId);
    const availableByProduct = new Map(stockRows.map((row) => [row.productId, Number(row.count || 0)]));
    lowStockCardsCount = keyProducts.filter((kp) => {
      var _a2;
      return ((_a2 = availableByProduct.get(kp.id)) != null ? _a2 : 0) <= 3;
    }).length;
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
      if (Number.isInteger(hour) && hour >= 0 && hour <= 23) ordersSeries[hour] = (ordersSeries[hour] || 0) + 1;
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
  for (const st of ["direct", "search", "ai", "social", "referral", "campaign", "affiliate"]) {
    if (!sourceTypeCounts.has(st)) sourceTypeCounts.set(st, { count: 0, paidVisitors: 0 });
  }
  const trafficSources = [...sourceTypeCounts.entries()].map(([type, val]) => ({ type, count: val.count, paidVisitors: val.paidVisitors, percentage: toPct(val.count, insightTotal) })).sort((a, b) => b.count - a.count || a.type.localeCompare(b.type));
  const topSources = [...specificSourceCounts.entries()].sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0])).slice(0, 6).map(([, item]) => ({ ...item, percentage: toPct(item.count, insightTotal) }));
  const totalTrackedPageViews = traffic.totalTrackedPageViews || periodPageViews;
  const topPages = traffic.pages.map((page) => ({ path: page.path, views: page.views, visitors: page.visitors, percentage: toPct(page.views, totalTrackedPageViews) })).sort((a, b) => b.views - a.views || b.visitors - a.visitors || a.path.localeCompare(b.path)).slice(0, 6);
  const topCountries = [...countryCounts.entries()].map(([country, count]) => ({ country, count, percentage: toPct(count, insightTotal) })).sort((a, b) => b.count - a.count || a.country.localeCompare(b.country)).slice(0, 5);
  const devices = [...deviceCounts.entries()].map(([deviceType, count]) => ({ deviceType, count, percentage: toPct(count, insightTotal) })).sort((a, b) => b.count - a.count || a.deviceType.localeCompare(b.deviceType));
  const isCommerceActive = activeProductsCount > 0 || totalOrdersCount > 0 || activeSubsCount > 0;
  const telemetry = buildApayDashboardTelemetry({
    latencyMs: Date.now() - startedAtMs,
    isCommerceActive,
    activePaymentMethodsCount,
    activeEmailProvidersCount,
    errorLogs24h: errorLogs24hCount,
    paymentFailures24h: paymentFailures24hCount,
    failedEmails24h: failedEmails24hCount,
    pendingTopups,
    pendingFulfillments,
    recentErrorLogs,
    recentPaymentFailures,
    recentFailedEmails,
    creditFailedTopups
  });
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
      totalUsers: totalUsersCount,
      activeProducts: activeProductsCount,
      activeSubscriptions: activeSubsCount,
      activeNewsletterSubscribers: activeNewsletterCount,
      totalPromoInvites: promoInvitesCount,
      isCommerceActive,
      currency: baseCurrency
    },
    actionItems: {
      pendingFulfillments,
      lowStockCards: lowStockCardsCount,
      pendingTopups,
      pendingTickets,
      pendingComments: pendingCommentsCount,
      pendingPromoApplications: pendingPromoAppsCount,
      failedEmails24h: failedEmails24hCount,
      errorLogs24h: errorLogs24hCount,
      paymentFailures24h: paymentFailures24hCount
    },
    telemetry,
    categoryMix,
    trafficInsights: {
      sources: trafficSources,
      topSources,
      topPages,
      topCountries,
      devices,
      recentVisitors: traffic.recentVisitors,
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
