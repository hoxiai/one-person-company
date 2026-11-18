import { d as defineEventHandler, g as getQuery, P as getConfiguredTimezone, cx as parseStatsRange, cH as clampStatsPage, cI as clampStatsPageSize, cF as visitorEvents, b as db } from '../../../../nitro/nitro.mjs';
import { or, sql, and, eq, gte, lt, desc, count } from 'drizzle-orm';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const pageVisits_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const tz = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(query, tz);
  const page = clampStatsPage(query.page, 1);
  const pageSize = clampStatsPageSize(query.pageSize, 20);
  const offset = (page - 1) * pageSize;
  const searchQuery = typeof query.search === "string" ? query.search.trim().toLowerCase() : "";
  const pattern = searchQuery ? `%${searchQuery}%` : "";
  const searchFilter = pattern ? or(
    sql`LOWER(COALESCE(${visitorEvents.path}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.referrer}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.ip}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.visitorId}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.source}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.medium}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.campaign}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.content}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.term}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.country}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.region}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.city}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.browser}, '')) LIKE ${pattern}`,
    sql`LOWER(COALESCE(${visitorEvents.os}, '')) LIKE ${pattern}`
  ) : void 0;
  const filter = and(
    eq(visitorEvents.eventName, "page_view"),
    gte(visitorEvents.createdAt, rangeStart),
    lt(visitorEvents.createdAt, rangeEnd),
    searchFilter
  );
  const queryItems = () => db.select({
    id: visitorEvents.id,
    visitorId: visitorEvents.visitorId,
    userId: visitorEvents.userId,
    path: visitorEvents.path,
    referrer: visitorEvents.referrer,
    sourceType: visitorEvents.sourceType,
    source: visitorEvents.source,
    medium: visitorEvents.medium,
    campaign: visitorEvents.campaign,
    content: visitorEvents.content,
    term: visitorEvents.term,
    ip: visitorEvents.ip,
    country: visitorEvents.country,
    region: visitorEvents.region,
    city: visitorEvents.city,
    deviceType: visitorEvents.deviceType,
    browser: visitorEvents.browser,
    os: visitorEvents.os,
    createdAt: visitorEvents.createdAt
  }).from(visitorEvents).where(filter).orderBy(desc(visitorEvents.createdAt)).limit(pageSize).offset(offset);
  const queryTotal = async () => {
    var _a;
    const rows = await db.select({ value: count() }).from(visitorEvents).where(filter);
    return Number(((_a = rows[0]) == null ? void 0 : _a.value) || 0);
  };
  let items;
  let totalItems;
  if (offset === 0) {
    items = await queryItems();
    totalItems = items.length < pageSize ? items.length : await queryTotal();
  } else {
    [totalItems, items] = await Promise.all([queryTotal(), queryItems()]);
  }
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
      totalItems,
      totalPages: Math.max(1, Math.ceil(totalItems / pageSize))
    },
    items: items.map((item) => ({
      id: item.id,
      visitorId: item.visitorId,
      userId: item.userId || null,
      path: item.path || "/",
      referrer: item.referrer || null,
      sourceType: item.sourceType || "direct",
      source: item.source || null,
      medium: item.medium || null,
      campaign: item.campaign || null,
      content: item.content || null,
      term: item.term || null,
      ip: item.ip || null,
      country: item.country || null,
      region: item.region || null,
      city: item.city || null,
      deviceType: item.deviceType || null,
      browser: item.browser || null,
      os: item.os || null,
      createdAt: item.createdAt
    }))
  };
});

export { pageVisits_get as default };
//# sourceMappingURL=page-visits.get.mjs.map
