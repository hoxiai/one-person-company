import { d as defineEventHandler, c as getRequestLocale, g as getQuery, y as getConfiguredTimezone, b2 as parseStatsRange, b7 as clampStatsPage, b8 as clampStatsPageSize, B as visitorEvents, b as db, b9 as toIsoTimestampOrEpoch, b6 as formatSourceBrand } from '../../../../nitro/nitro.mjs';
import { and, gte, lt, sql, count, desc } from 'drizzle-orm';
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

const events_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const unknownLabel = locale === "zh" ? "\u672A\u77E5" : "Unknown";
  const query = getQuery(event);
  const tz = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(query, tz);
  const page = clampStatsPage(query.page, 1);
  const pageSize = clampStatsPageSize(query.pageSize, 20);
  const offset = (page - 1) * pageSize;
  const timeFilter = and(gte(visitorEvents.createdAt, rangeStart), lt(visitorEvents.createdAt, rangeEnd));
  const [{ value: totalItems }] = await db.select({
    value: sql`COUNT(DISTINCT ${visitorEvents.ip})
        + COALESCE(MAX(CASE WHEN ${visitorEvents.ip} IS NULL THEN 1 ELSE 0 END), 0)`
  }).from(visitorEvents).where(timeFilter);
  const items = await db.select({
    ip: visitorEvents.ip,
    visitCount: count(),
    visitorId: sql`MAX(${visitorEvents.visitorId})`,
    visitorCount: sql`COUNT(DISTINCT ${visitorEvents.visitorId})`,
    userId: sql`MAX(${visitorEvents.userId})`,
    registeredUserCount: sql`COUNT(DISTINCT ${visitorEvents.userId})`,
    country: sql`MAX(${visitorEvents.country})`,
    region: sql`MAX(${visitorEvents.region})`,
    city: sql`MAX(${visitorEvents.city})`,
    sourceType: sql`MAX(${visitorEvents.sourceType})`,
    source: sql`MAX(${visitorEvents.source})`,
    campaign: sql`MAX(${visitorEvents.campaign})`,
    referrer: sql`MAX(${visitorEvents.referrer})`,
    deviceType: sql`MAX(${visitorEvents.deviceType})`,
    browser: sql`MAX(${visitorEvents.browser})`,
    os: sql`MAX(${visitorEvents.os})`,
    firstSeenAt: sql`MIN(${visitorEvents.createdAt})`,
    lastSeenAt: sql`MAX(${visitorEvents.createdAt})`
  }).from(visitorEvents).where(timeFilter).groupBy(visitorEvents.ip).orderBy(desc(sql`MAX(${visitorEvents.createdAt})`)).limit(pageSize).offset(offset);
  return {
    range: {
      preset,
      days,
      from: rangeStart,
      to: rangeEnd
    },
    pagination: {
      page,
      pageSize,
      totalItems: Number(totalItems || 0),
      totalPages: Math.max(1, Math.ceil(Number(totalItems || 0) / pageSize))
    },
    items: items.map((item) => ({
      ip: item.ip,
      visitorId: item.visitorId,
      visitorCount: Number(item.visitorCount || 0),
      userId: item.userId || null,
      registeredUserCount: Number(item.registeredUserCount || 0),
      visitCount: item.visitCount,
      isRegistered: !!item.userId,
      sourceType: item.sourceType || "direct",
      source: formatSourceBrand(item.source, item.sourceType) || (item.sourceType === "direct" ? locale === "zh" ? "\u76F4\u63A5\u8BBF\u95EE" : "Direct" : item.referrer || unknownLabel),
      campaign: item.campaign || null,
      referrer: item.referrer || null,
      country: item.country || unknownLabel,
      region: item.region || null,
      city: item.city || null,
      deviceType: item.deviceType || unknownLabel,
      browser: item.browser || null,
      os: item.os || null,
      // MIN/MAX are raw sql`` fragments, so no drizzle column mapper runs and
      // the value arrives dialect-shaped (Postgres string / SQLite seconds).
      firstSeenAt: toIsoTimestampOrEpoch(item.firstSeenAt),
      lastSeenAt: toIsoTimestampOrEpoch(item.lastSeenAt)
    }))
  };
});

export { events_get as default };
