import { d as defineEventHandler, c as getRequestLocale, g as getQuery, e as createError, w as getConfiguredTimezone, aX as parseStatsRange, aZ as visitorEvents, b as db, p as products, v as visitorProfiles, u as users, b2 as toIsoTimestampOrEpoch } from '../../../../nitro/nitro.mjs';
import { sql, eq, and, gte, lt, count, desc, inArray } from 'drizzle-orm';
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

const ipDetails_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const isLocal = query.local === "1";
  const ip = String(query.ip || "").trim();
  if (!isLocal && !ip || ip.length > 128) {
    throw createError({
      statusCode: 400,
      statusMessage: locale === "zh" ? "\u65E0\u6548\u7684 IP" : "Invalid IP address"
    });
  }
  const timezone = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(query, timezone);
  const ipCondition = isLocal ? sql`${visitorEvents.ip} IS NULL` : eq(visitorEvents.ip, ip);
  const eventFilter = and(
    gte(visitorEvents.createdAt, rangeStart),
    lt(visitorEvents.createdAt, rangeEnd),
    ipCondition
  );
  const [summaryRows, eventSummaryRows, visitorRows, contextRows, recentEvents] = await Promise.all([
    db.select({
      totalEvents: count(),
      uniqueVisitors: sql`COUNT(DISTINCT ${visitorEvents.visitorId})`,
      registeredUsers: sql`COUNT(DISTINCT ${visitorEvents.userId})`,
      firstSeenAt: sql`MIN(${visitorEvents.createdAt})`,
      lastSeenAt: sql`MAX(${visitorEvents.createdAt})`
    }).from(visitorEvents).where(eventFilter),
    db.select({ eventName: visitorEvents.eventName, value: count() }).from(visitorEvents).where(eventFilter).groupBy(visitorEvents.eventName),
    db.select({
      visitorId: visitorEvents.visitorId,
      userId: sql`MAX(${visitorEvents.userId})`,
      eventCount: count(),
      country: sql`MAX(${visitorEvents.country})`,
      region: sql`MAX(${visitorEvents.region})`,
      city: sql`MAX(${visitorEvents.city})`,
      deviceType: sql`MAX(${visitorEvents.deviceType})`,
      browser: sql`MAX(${visitorEvents.browser})`,
      os: sql`MAX(${visitorEvents.os})`,
      firstSeenAt: sql`MIN(${visitorEvents.createdAt})`,
      lastSeenAt: sql`MAX(${visitorEvents.createdAt})`
    }).from(visitorEvents).where(eventFilter).groupBy(visitorEvents.visitorId).orderBy(desc(sql`MAX(${visitorEvents.createdAt})`)).limit(100),
    db.select({
      country: visitorEvents.country,
      region: visitorEvents.region,
      city: visitorEvents.city,
      deviceType: visitorEvents.deviceType,
      browser: visitorEvents.browser,
      os: visitorEvents.os,
      count: count()
    }).from(visitorEvents).where(eventFilter).groupBy(
      visitorEvents.country,
      visitorEvents.region,
      visitorEvents.city,
      visitorEvents.deviceType,
      visitorEvents.browser,
      visitorEvents.os
    ).orderBy(desc(count())).limit(20),
    db.select({
      id: visitorEvents.id,
      visitorId: visitorEvents.visitorId,
      userId: visitorEvents.userId,
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
      deviceType: visitorEvents.deviceType,
      browser: visitorEvents.browser,
      os: visitorEvents.os,
      userAgent: visitorEvents.userAgent,
      orderId: visitorEvents.orderId,
      productId: visitorEvents.productId,
      productName: products.name,
      createdAt: visitorEvents.createdAt
    }).from(visitorEvents).leftJoin(products, eq(visitorEvents.productId, products.id)).where(eventFilter).orderBy(desc(visitorEvents.createdAt)).limit(100)
  ]);
  const visitorIds = visitorRows.map((item) => item.visitorId);
  const userIds = visitorRows.map((item) => item.userId).filter(Boolean);
  const [profiles, userRows] = await Promise.all([
    visitorIds.length ? db.select().from(visitorProfiles).where(inArray(visitorProfiles.visitorId, visitorIds)) : [],
    userIds.length ? db.select({
      id: users.id,
      email: users.email,
      nickname: users.nickname,
      status: users.status,
      createdAt: users.createdAt
    }).from(users).where(inArray(users.id, userIds)) : []
  ]);
  const profileMap = new Map(profiles.map((item) => [item.visitorId, item]));
  const userMap = new Map(userRows.map((item) => [item.id, item]));
  const eventSummary = Object.fromEntries(
    eventSummaryRows.map((item) => [item.eventName, Number(item.value || 0)])
  );
  const summary = summaryRows[0] || {};
  return {
    ip: isLocal ? null : ip,
    range: { preset, days, from: rangeStart, to: rangeEnd },
    stats: {
      totalEvents: Number(summary.totalEvents || 0),
      uniqueVisitors: Number(summary.uniqueVisitors || 0),
      registeredUsers: Number(summary.registeredUsers || 0),
      pageViews: eventSummary.page_view || 0,
      productViews: eventSummary.product_view || 0,
      checkouts: eventSummary.begin_checkout || 0,
      paid: eventSummary.order_paid || 0,
      auth: eventSummary.auth || 0,
      firstSeenAt: toIsoTimestampOrEpoch(summary.firstSeenAt),
      lastSeenAt: toIsoTimestampOrEpoch(summary.lastSeenAt)
    },
    visitors: visitorRows.map((item) => {
      const profile = profileMap.get(item.visitorId);
      const user = item.userId ? userMap.get(item.userId) : null;
      return {
        ...item,
        eventCount: Number(item.eventCount || 0),
        firstSeenAt: toIsoTimestampOrEpoch(item.firstSeenAt),
        lastSeenAt: toIsoTimestampOrEpoch(item.lastSeenAt),
        firstTouch: (profile == null ? void 0 : profile.firstCampaign) || (profile == null ? void 0 : profile.firstSource) || (profile == null ? void 0 : profile.firstSourceType) || "direct",
        lastTouch: (profile == null ? void 0 : profile.lastCampaign) || (profile == null ? void 0 : profile.lastSource) || (profile == null ? void 0 : profile.lastSourceType) || "direct",
        user: user ? { ...user, createdAt: toIsoTimestampOrEpoch(user.createdAt) } : null
      };
    }),
    visitorLimit: 100,
    contexts: contextRows.map((item) => ({
      ...item,
      count: Number(item.count || 0)
    })),
    recentEvents: recentEvents.map((item) => ({
      ...item,
      createdAt: toIsoTimestampOrEpoch(item.createdAt)
    })),
    recentEventsLimit: 100
  };
});

export { ipDetails_get as default };
