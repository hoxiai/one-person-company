import { d as defineEventHandler, c as getRequestLocale, g as getQuery, y as getConfiguredTimezone, b2 as parseStatsRange, b3 as getRequestHost, b as db, B as visitorEvents, x as visitorProfiles, v as orders, b4 as toZonedDateKey, b5 as shiftZonedDay, b6 as formatSourceBrand } from '../../../nitro/nitro.mjs';
import { and, gte, lt, desc, eq, sql } from 'drizzle-orm';
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

const toDate = (value) => {
  if (value instanceof Date) return value;
  return new Date(value);
};
const formatLabel = (dateKey) => {
  const date = /* @__PURE__ */ new Date(`${dateKey}T00:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric"
  }).format(date);
};
const formatSourceLabel = (item, mode) => {
  const sourceType = item[mode === "first" ? "firstSourceType" : "lastSourceType"] || "direct";
  const source = item[mode === "first" ? "firstSource" : "lastSource"] || "direct";
  const medium = item[mode === "first" ? "firstMedium" : "lastMedium"] || "";
  const campaign = item[mode === "first" ? "firstCampaign" : "lastCampaign"] || "";
  if (sourceType === "direct") return "Direct";
  if (sourceType === "affiliate" && campaign) return `Affiliate / ${campaign}`;
  if (campaign && (sourceType === "campaign" || sourceType === "paid")) {
    return `${formatSourceBrand(source, sourceType)} \xB7 ${campaign}`;
  }
  const brandedSource = formatSourceBrand(source, sourceType);
  if (medium && medium !== "referral" && medium !== "organic" && medium !== "social" && medium !== "ai_referral" && medium !== "email") {
    return `${brandedSource} / ${medium}`;
  }
  return brandedSource;
};
const buildTopCommerceList = (items, total) => {
  return Object.entries(items).sort((a, b) => {
    if (b[1].paid !== a[1].paid) return b[1].paid - a[1].paid;
    return b[1].count - a[1].count;
  }).slice(0, 15).map(([label, m]) => ({
    label,
    count: m.count,
    visitors: m.count,
    checkouts: m.checkouts,
    paid: m.paid,
    revenue: Number(m.revenue.toFixed(2)),
    conversionRate: m.count > 0 ? Number((m.paid / m.count * 100).toFixed(1)) : 0,
    percentage: total > 0 ? Number((m.count / total * 100).toFixed(1)) : 0
  }));
};
const buildTopList = (items, total) => {
  return Object.entries(items).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([label, count]) => ({
    label,
    count,
    percentage: total > 0 ? Number((count / total * 100).toFixed(1)) : 0
  }));
};
const stats_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const unknownLabel = locale === "zh" ? "\u672A\u77E5" : "Unknown";
  const query = getQuery(event);
  const tz = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(query, tz);
  const host = getRequestHost(event);
  const [events, profiles, rangeOrders] = await Promise.all([
    db.select({
      id: visitorEvents.id,
      visitorId: visitorEvents.visitorId,
      ip: visitorEvents.ip,
      userId: visitorEvents.userId,
      orderId: visitorEvents.orderId,
      productId: visitorEvents.productId,
      eventName: visitorEvents.eventName,
      eventAction: visitorEvents.eventAction,
      path: visitorEvents.path,
      referrer: visitorEvents.referrer,
      sourceType: visitorEvents.sourceType,
      source: visitorEvents.source,
      medium: visitorEvents.medium,
      campaign: visitorEvents.campaign,
      country: visitorEvents.country,
      region: visitorEvents.region,
      city: visitorEvents.city,
      locale: visitorEvents.locale,
      currency: visitorEvents.currency,
      deviceType: visitorEvents.deviceType,
      browser: visitorEvents.browser,
      os: visitorEvents.os,
      createdAt: visitorEvents.createdAt
    }).from(visitorEvents).where(and(gte(visitorEvents.createdAt, rangeStart), lt(visitorEvents.createdAt, rangeEnd))).orderBy(desc(visitorEvents.createdAt)),
    db.select().from(visitorProfiles).where(and(gte(visitorProfiles.lastSeenAt, rangeStart), lt(visitorProfiles.lastSeenAt, rangeEnd))).orderBy(desc(visitorProfiles.lastSeenAt)),
    db.select({
      id: orders.id,
      amount: orders.amount,
      visitorId: orders.visitorId,
      userId: orders.userId
    }).from(orders).where(and(gte(orders.createdAt, rangeStart), lt(orders.createdAt, rangeEnd), eq(orders.payStatus, "paid")))
  ]);
  const externalEventVisitorIds = /* @__PURE__ */ new Set();
  for (const evt of events) {
    if (evt.referrer && !evt.referrer.includes(host)) {
      externalEventVisitorIds.add(evt.visitorId);
    }
  }
  const visitorRevenueMap = /* @__PURE__ */ new Map();
  for (const ord of rangeOrders) {
    if (ord.visitorId) {
      const cur = visitorRevenueMap.get(ord.visitorId) || { count: 0, revenue: 0 };
      cur.count += 1;
      cur.revenue += Number(ord.amount || 0);
      visitorRevenueMap.set(ord.visitorId, cur);
    }
  }
  const dateKeys = Array.from({ length: days }).map((_, index) => toZonedDateKey(shiftZonedDay(rangeStart, index, tz), tz));
  const trendMap = /* @__PURE__ */ new Map();
  for (const dateKey of dateKeys) {
    trendMap.set(dateKey, {
      label: formatLabel(dateKey),
      pageViews: 0,
      uniqueVisitors: /* @__PURE__ */ new Set(),
      productVisitors: /* @__PURE__ */ new Set(),
      checkoutVisitors: /* @__PURE__ */ new Set(),
      paidVisitors: /* @__PURE__ */ new Set(),
      authVisitors: /* @__PURE__ */ new Set()
    });
  }
  const pageViewVisitors = /* @__PURE__ */ new Set();
  const productVisitors = /* @__PURE__ */ new Set();
  const checkoutVisitors = /* @__PURE__ */ new Set();
  const paidVisitors = /* @__PURE__ */ new Set();
  const authVisitors = /* @__PURE__ */ new Set();
  const loginVisitors = /* @__PURE__ */ new Set();
  const registerVisitors = /* @__PURE__ */ new Set();
  const uniqueIps = /* @__PURE__ */ new Set();
  let hasUnknownIp = false;
  const externalVisitors = /* @__PURE__ */ new Set();
  const campaignVisitors = /* @__PURE__ */ new Set();
  const visitorEventStats = /* @__PURE__ */ new Map();
  for (const item of events) {
    const dateKey = toZonedDateKey(toDate(item.createdAt), tz);
    const trendItem = trendMap.get(dateKey);
    const stats = visitorEventStats.get(item.visitorId) || {
      pageViews: 0,
      productViews: 0,
      checkouts: 0,
      paid: 0,
      auth: 0
    };
    if (item.eventName === "page_view") {
      pageViewVisitors.add(item.visitorId);
      stats.pageViews += 1;
      if (trendItem) {
        trendItem.pageViews += 1;
        trendItem.uniqueVisitors.add(item.visitorId);
      }
    }
    if (item.eventName === "product_view") {
      productVisitors.add(item.visitorId);
      stats.productViews += 1;
      if (trendItem) {
        trendItem.productVisitors.add(item.visitorId);
      }
    }
    if (item.eventName === "begin_checkout") {
      checkoutVisitors.add(item.visitorId);
      stats.checkouts += 1;
      if (trendItem) {
        trendItem.checkoutVisitors.add(item.visitorId);
      }
    }
    if (item.eventName === "order_paid") {
      paidVisitors.add(item.visitorId);
      stats.paid += 1;
      if (trendItem) {
        trendItem.paidVisitors.add(item.visitorId);
      }
    }
    if (item.userId) {
      authVisitors.add(item.visitorId);
      loginVisitors.add(item.visitorId);
      if (trendItem) {
        trendItem.authVisitors.add(item.visitorId);
      }
    }
    if (item.eventName === "auth") {
      authVisitors.add(item.visitorId);
      stats.auth += 1;
      if (item.eventAction === "login") loginVisitors.add(item.visitorId);
      if (item.eventAction === "register") {
        registerVisitors.add(item.visitorId);
        loginVisitors.add(item.visitorId);
      }
      if (trendItem) {
        trendItem.authVisitors.add(item.visitorId);
      }
    }
    if (item.ip) uniqueIps.add(item.ip);
    else hasUnknownIp = true;
    visitorEventStats.set(item.visitorId, stats);
  }
  const firstTouchSourceMap = {};
  const lastTouchSourceMap = {};
  const sourceCategoryMap = {};
  const externalSourceMap = {};
  const countryMap = {};
  const deviceMap = {};
  const standardCategories = ["direct", "search", "social", "ai", "campaign", "affiliate", "email", "referral"];
  for (const cat of standardCategories) {
    sourceCategoryMap[cat] = { count: 0, checkouts: 0, paid: 0, revenue: 0 };
  }
  const recordMetric = (map, key, checkouts, paid, revenue) => {
    if (!map[key]) {
      map[key] = { count: 0, checkouts: 0, paid: 0, revenue: 0 };
    }
    map[key].count += 1;
    map[key].checkouts += checkouts;
    map[key].paid += paid;
    map[key].revenue += revenue;
  };
  for (const profile of profiles) {
    const firstTouch = formatSourceLabel(profile, "first");
    const lastTouch = formatSourceLabel(profile, "last");
    const sourceCategory = profile.lastSourceType || "direct";
    const vStats = visitorEventStats.get(profile.visitorId);
    const vRev = visitorRevenueMap.get(profile.visitorId);
    const checkouts = ((vStats == null ? void 0 : vStats.checkouts) || 0) > 0 ? 1 : 0;
    const paid = ((vStats == null ? void 0 : vStats.paid) || 0) > 0 || ((vRev == null ? void 0 : vRev.count) || 0) > 0 ? 1 : 0;
    const revenue = (vRev == null ? void 0 : vRev.revenue) || 0;
    recordMetric(firstTouchSourceMap, firstTouch, checkouts, paid, revenue);
    recordMetric(lastTouchSourceMap, lastTouch, checkouts, paid, revenue);
    recordMetric(sourceCategoryMap, sourceCategory, checkouts, paid, revenue);
    if (sourceCategory !== "direct") {
      recordMetric(externalSourceMap, lastTouch, checkouts, paid, revenue);
    }
    countryMap[profile.country || unknownLabel] = (countryMap[profile.country || unknownLabel] || 0) + 1;
    deviceMap[profile.deviceType || unknownLabel] = (deviceMap[profile.deviceType || unknownLabel] || 0) + 1;
    if (externalEventVisitorIds.has(profile.visitorId)) {
      externalVisitors.add(profile.visitorId);
    }
    if (profile.firstCampaign || profile.lastCampaign) {
      campaignVisitors.add(profile.visitorId);
    }
  }
  const authProfiles = await db.select({ visitorId: visitorProfiles.visitorId }).from(visitorProfiles).where(
    and(
      gte(visitorProfiles.lastSeenAt, rangeStart),
      lt(visitorProfiles.lastSeenAt, rangeEnd),
      sql`${visitorProfiles.userId} IS NOT NULL`
    )
  );
  for (const p of authProfiles) {
    authVisitors.add(p.visitorId);
    loginVisitors.add(p.visitorId);
  }
  const trend = dateKeys.map((dateKey) => {
    const item = trendMap.get(dateKey);
    return {
      date: dateKey,
      label: item.label,
      pageViews: item.pageViews,
      uniqueVisitors: item.uniqueVisitors.size,
      productVisitors: item.productVisitors.size,
      checkoutVisitors: item.checkoutVisitors.size,
      paidVisitors: item.paidVisitors.size,
      authVisitors: item.authVisitors.size
    };
  });
  return {
    range: {
      preset: preset || `${days}d`,
      days,
      from: rangeStart,
      to: rangeEnd
    },
    overview: {
      pageViews: events.filter((item) => item.eventName === "page_view").length,
      uniqueVisitors: pageViewVisitors.size,
      uniqueIps: uniqueIps.size + (hasUnknownIp ? 1 : 0),
      // todayVisitors kept for backwards compatibility with existing card binding
      todayVisitors: uniqueIps.size + (hasUnknownIp ? 1 : 0),
      productVisitors: productVisitors.size,
      checkoutVisitors: checkoutVisitors.size,
      paidVisitors: paidVisitors.size,
      authVisitors: authVisitors.size,
      loginVisitors: loginVisitors.size,
      registerVisitors: registerVisitors.size,
      externalVisitors: externalVisitors.size,
      campaignVisitors: campaignVisitors.size,
      conversionRate: pageViewVisitors.size > 0 ? Number((paidVisitors.size / pageViewVisitors.size * 100).toFixed(1)) : 0
    },
    funnel: [
      { key: "page_view", label: "Page Views", visitors: pageViewVisitors.size },
      { key: "product_view", label: "Product Views", visitors: productVisitors.size },
      { key: "begin_checkout", label: "Begin Checkout", visitors: checkoutVisitors.size },
      { key: "order_paid", label: "Order Paid", visitors: paidVisitors.size },
      { key: "auth", label: "Register / Login", visitors: authVisitors.size }
    ],
    trend,
    sources: {
      categories: buildTopCommerceList(sourceCategoryMap, profiles.length),
      external: buildTopCommerceList(externalSourceMap, profiles.length),
      firstTouch: buildTopCommerceList(firstTouchSourceMap, profiles.length),
      lastTouch: buildTopCommerceList(lastTouchSourceMap, profiles.length)
    },
    geography: buildTopList(countryMap, profiles.length),
    devices: buildTopList(deviceMap, profiles.length)
  };
});

export { stats_get as default };
