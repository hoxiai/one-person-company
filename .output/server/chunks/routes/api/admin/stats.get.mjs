import { d as defineEventHandler, c as getRequestLocale, g as getQuery, w as getConfiguredTimezone, aX as parseStatsRange, aY as getRequestHost, b as db, aZ as visitorEvents, v as visitorProfiles, a_ as toZonedDateKey, a$ as shiftZonedDay } from '../../../nitro/nitro.mjs';
import { and, gte, lt, desc, sql } from 'drizzle-orm';
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
  if (campaign) return campaign;
  if (sourceType === "direct") return "Direct";
  if (medium) return `${source} / ${medium}`;
  return source;
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
  const events = await db.select({
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
  }).from(visitorEvents).where(and(gte(visitorEvents.createdAt, rangeStart), lt(visitorEvents.createdAt, rangeEnd))).orderBy(desc(visitorEvents.createdAt));
  const externalEventVisitorIds = /* @__PURE__ */ new Set();
  for (const evt of events) {
    if (evt.referrer && !evt.referrer.includes(host)) {
      externalEventVisitorIds.add(evt.visitorId);
    }
  }
  const profiles = await db.select().from(visitorProfiles).where(and(gte(visitorProfiles.lastSeenAt, rangeStart), lt(visitorProfiles.lastSeenAt, rangeEnd))).orderBy(desc(visitorProfiles.lastSeenAt));
  const { rangeStart: todayStart, rangeEnd: todayEnd } = parseStatsRange({ preset: "today" }, tz);
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
  const todayIps = /* @__PURE__ */ new Set();
  let todayHasUnknownIp = false;
  const externalVisitors = /* @__PURE__ */ new Set();
  const campaignVisitors = /* @__PURE__ */ new Set();
  const firstTouchSourceMap = {};
  const lastTouchSourceMap = {};
  const sourceCategoryMap = {};
  const externalSourceMap = {};
  const countryMap = {};
  const deviceMap = {};
  const visitorEventStats = /* @__PURE__ */ new Map();
  for (const profile of profiles) {
    const firstTouch = formatSourceLabel(profile, "first");
    const lastTouch = formatSourceLabel(profile, "last");
    const sourceCategory = profile.lastSourceType || "direct";
    firstTouchSourceMap[firstTouch] = (firstTouchSourceMap[firstTouch] || 0) + 1;
    lastTouchSourceMap[lastTouch] = (lastTouchSourceMap[lastTouch] || 0) + 1;
    sourceCategoryMap[sourceCategory] = (sourceCategoryMap[sourceCategory] || 0) + 1;
    if (["search", "social", "referral"].includes(sourceCategory)) {
      externalSourceMap[lastTouch] = (externalSourceMap[lastTouch] || 0) + 1;
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
    const createdAt = toDate(item.createdAt);
    if (createdAt >= todayStart && createdAt < todayEnd) {
      if (item.ip) todayIps.add(item.ip);
      else todayHasUnknownIp = true;
    }
    visitorEventStats.set(item.visitorId, stats);
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
      // Field name kept for compatibility with the existing card binding; the
      // metric is distinct IPs (see todayIps), matching the "今日IP" label and
      // the GROUP BY ip drill-down.
      todayVisitors: todayIps.size + (todayHasUnknownIp ? 1 : 0),
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
      categories: buildTopList(sourceCategoryMap, profiles.length),
      external: buildTopList(externalSourceMap, profiles.length),
      firstTouch: buildTopList(firstTouchSourceMap, profiles.length),
      lastTouch: buildTopList(lastTouchSourceMap, profiles.length)
    },
    geography: buildTopList(countryMap, profiles.length),
    devices: buildTopList(deviceMap, profiles.length)
  };
});

export { stats_get as default };
