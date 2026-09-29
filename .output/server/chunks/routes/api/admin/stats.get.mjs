import { d as defineEventHandler, c as getRequestLocale, D as getConfiguredTimezone, ba as parseStatsRange, g as getQuery, J as loadVisitorReport, K as getRequestHost, G as buildLocaleCurrencyQuote, M as resolveOrderCurrencyAmounts, B as aggregateOrderAccountingTotals, N as getCurrencyTotal, bb as toZonedDateKey, F as shiftZonedDay, bc as buildVisitorSourceMetrics } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import '@libsql/client';
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

const stats_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const unknown = locale === "zh" ? "\u672A\u77E5" : "Unknown";
  const timezone = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(getQuery(event), timezone);
  const [report, quote] = await Promise.all([
    loadVisitorReport(rangeStart, rangeEnd, getRequestHost(event)),
    buildLocaleCurrencyQuote(0)
  ]);
  const rows = report.rows;
  const currency = quote.baseCurrency;
  const countRows = (predicate) => rows.filter(predicate).length;
  const ips = new Set(report.events.map((item) => item.ip));
  const paidOrders = report.orders.filter((order) => resolveOrderCurrencyAmounts(order).paymentAmount > 0);
  const revenueByCurrency = aggregateOrderAccountingTotals(report.orders);
  const paidVisitors = countRows((row) => row.paid > 0);
  const conversionRate = rows.length > 0 ? Number((100 * paidVisitors / rows.length).toFixed(1)) : 0;
  const overview = {
    pageViews: rows.reduce((total, row) => total + row.pageViews, 0),
    uniqueVisitors: rows.length,
    pageViewVisitors: countRows((row) => row.pageViews > 0),
    uniqueIps: ips.size,
    todayVisitors: ips.size,
    productVisitors: countRows((row) => row.productViews > 0),
    checkoutVisitors: countRows((row) => row.checkouts > 0),
    paidVisitors,
    paidOrders: paidOrders.length,
    freeOrders: report.orders.length - paidOrders.length,
    authVisitors: countRows((row) => row.auth > 0),
    loginVisitors: countRows((row) => row.loggedIn),
    registerVisitors: countRows((row) => row.registered),
    externalVisitors: countRows((row) => row.external),
    campaignVisitors: countRows((row) => row.tagged),
    conversionRate,
    revenue: getCurrencyTotal(revenueByCurrency, currency),
    revenueByCurrency,
    currency,
    unattributedPaidOrders: paidOrders.filter((order) => !order.visitorId).length,
    unattributedRevenueByCurrency: aggregateOrderAccountingTotals(report.orders.filter((order) => !order.visitorId))
  };
  const trendMap = new Map(Array.from({ length: days }, (_, index) => {
    const date = toZonedDateKey(shiftZonedDay(rangeStart, index, timezone), timezone);
    return [date, {
      date,
      label: new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", { month: "short", day: "numeric", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`${date}T12:00:00Z`)),
      pageViews: 0,
      unique: /* @__PURE__ */ new Set(),
      products: /* @__PURE__ */ new Set(),
      checkouts: /* @__PURE__ */ new Set(),
      paid: /* @__PURE__ */ new Set(),
      auth: /* @__PURE__ */ new Set()
    }];
  }));
  for (const row of rows) {
    for (const item of row.events) {
      const daily = trendMap.get(toZonedDateKey(item.createdAt, timezone));
      if (!daily) continue;
      daily.unique.add(row.visitorId);
      if (item.eventName === "page_view") daily.pageViews++;
      if (item.eventName === "product_view") daily.products.add(row.visitorId);
      if (item.eventName === "begin_checkout") daily.checkouts.add(row.visitorId);
      if (item.eventName === "auth") daily.auth.add(row.visitorId);
    }
    for (const order of row.orders) {
      const daily = trendMap.get(toZonedDateKey(order.paidAt, timezone));
      if (!daily) continue;
      daily.unique.add(row.visitorId);
      if (resolveOrderCurrencyAmounts(order).paymentAmount > 0) daily.paid.add(row.visitorId);
    }
  }
  const trend = [...trendMap.values()].map((daily) => ({
    date: daily.date,
    label: daily.label,
    pageViews: daily.pageViews,
    uniqueVisitors: daily.unique.size,
    productVisitors: daily.products.size,
    checkoutVisitors: daily.checkouts.size,
    paidVisitors: daily.paid.size,
    authVisitors: daily.auth.size
  }));
  const distribution = (field) => {
    const totals = /* @__PURE__ */ new Map();
    for (const row of rows) totals.set(row[field] || unknown, (totals.get(row[field] || unknown) || 0) + 1);
    return [...totals].sort((a, b) => b[1] - a[1]).map(([label, count]) => ({
      label,
      count,
      percentage: rows.length > 0 ? Number((100 * count / rows.length).toFixed(1)) : 0
    }));
  };
  const lastTouch = buildVisitorSourceMetrics(report, "last", currency);
  return {
    range: { preset, days, from: rangeStart.toISOString(), to: rangeEnd.toISOString() },
    timezone,
    currency,
    attributionVersion: 1,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    overview,
    trend,
    // This is behavior distribution, not a sequential/cohort funnel.
    funnel: [
      { key: "page_view", label: "Page Visitors", visitors: overview.pageViewVisitors },
      { key: "product_view", label: "Product Visitors", visitors: overview.productVisitors },
      { key: "begin_checkout", label: "Checkout Visitors", visitors: overview.checkoutVisitors },
      { key: "order_paid", label: "Paid Visitors", visitors: overview.paidVisitors },
      { key: "auth", label: "Register / Login", visitors: overview.authVisitors }
    ],
    sources: {
      categories: buildVisitorSourceMetrics(report, "last", currency, true),
      firstTouch: buildVisitorSourceMetrics(report, "first", currency),
      lastTouch,
      external: lastTouch.filter((source) => source.sourceType !== "direct")
    },
    geography: distribution("country"),
    devices: distribution("deviceType")
  };
});

export { stats_get as default };
