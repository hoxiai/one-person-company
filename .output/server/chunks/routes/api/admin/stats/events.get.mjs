import { d as defineEventHandler, c as getRequestLocale, g as getQuery, K as getRequestHost, D as getConfiguredTimezone, bT as parseStatsRange, bY as clampStatsPage, bZ as clampStatsPageSize, bX as visitorEvents, b as db, b_ as toIsoTimestampOrEpoch, b$ as isExternalReferrer, c0 as formatSourceBrand } from '../../../../nitro/nitro.mjs';
import { or, sql, and, gte, lt, count, desc } from 'drizzle-orm';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const events_get = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const unknownLabel = locale === "zh" ? "\u672A\u77E5" : "Unknown";
  const query = getQuery(event);
  const host = typeof getRequestHost === "function" ? getRequestHost(event) : null;
  const cleanHost = host ? host.toLowerCase().replace(/^www\./, "").split(":")[0] : "";
  const tz = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(query, tz);
  const page = clampStatsPage(query.page, 1);
  const pageSize = clampStatsPageSize(query.pageSize, 20);
  const offset = (page - 1) * pageSize;
  const searchQuery = typeof query.search === "string" ? query.search.trim().toLowerCase() : "";
  const pattern = searchQuery ? `%${searchQuery}%` : "";
  const searchFilter = pattern ? or(
    sql`LOWER(COALESCE(${visitorEvents.ip}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.path}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.source}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.medium}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.campaign}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.content}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.term}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.referrer}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.visitorId}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.country}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.region}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.city}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.browser}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.os}, '')) LIKE ${pattern}`
  ) : void 0;
  const timeFilter = and(
    gte(visitorEvents.createdAt, rangeStart),
    lt(visitorEvents.createdAt, rangeEnd),
    searchFilter
  );
  const totalRows = await db.select({
    value: sql`COUNT(DISTINCT ${visitorEvents.ip})
        + COALESCE(MAX(CASE WHEN ${visitorEvents.ip} IS NULL THEN 1 ELSE 0 END), 0)`
  }).from(visitorEvents).where(timeFilter);
  const totalItems = ((_a = totalRows[0]) == null ? void 0 : _a.value) || 0;
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
    sourceType: sql`COALESCE(MAX(CASE WHEN ${visitorEvents.sourceType} != 'direct' THEN ${visitorEvents.sourceType} END), MAX(${visitorEvents.sourceType}))`,
    source: sql`COALESCE(MAX(CASE WHEN ${visitorEvents.source} != 'direct' THEN ${visitorEvents.source} END), MAX(${visitorEvents.source}))`,
    medium: sql`MAX(${visitorEvents.medium})`,
    campaign: sql`MAX(${visitorEvents.campaign})`,
    content: sql`MAX(${visitorEvents.content})`,
    term: sql`MAX(${visitorEvents.term})`,
    referrer: cleanHost ? sql`MAX(CASE WHEN LOWER(${visitorEvents.referrer}) NOT LIKE ${`%://${cleanHost}%`} AND LOWER(${visitorEvents.referrer}) NOT LIKE ${`%://www.${cleanHost}%`} THEN ${visitorEvents.referrer} END)` : sql`MAX(${visitorEvents.referrer})`,
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
      medium: item.medium || null,
      campaign: item.campaign || null,
      content: item.content || null,
      term: item.term || null,
      referrer: item.referrer && (!host || isExternalReferrer(item.referrer, host)) ? item.referrer : null,
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
//# sourceMappingURL=events.get.mjs.map
