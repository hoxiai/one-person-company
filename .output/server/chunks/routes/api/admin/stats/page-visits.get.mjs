import { d as defineEventHandler, g as getQuery, w as getConfiguredTimezone, aX as parseStatsRange, b0 as clampStatsPage, b1 as clampStatsPageSize, aZ as visitorEvents, b as db } from '../../../../nitro/nitro.mjs';
import { and, gte, lt, eq, count, desc } from 'drizzle-orm';
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

const pageVisits_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const tz = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(query, tz);
  const page = clampStatsPage(query.page, 1);
  const pageSize = clampStatsPageSize(query.pageSize, 20);
  const offset = (page - 1) * pageSize;
  const filter = and(
    gte(visitorEvents.createdAt, rangeStart),
    lt(visitorEvents.createdAt, rangeEnd),
    eq(visitorEvents.eventName, "page_view")
  );
  const [{ value: totalItems }] = await db.select({ value: count() }).from(visitorEvents).where(filter);
  const items = await db.select({
    id: visitorEvents.id,
    visitorId: visitorEvents.visitorId,
    userId: visitorEvents.userId,
    path: visitorEvents.path,
    referrer: visitorEvents.referrer,
    ip: visitorEvents.ip,
    country: visitorEvents.country,
    region: visitorEvents.region,
    city: visitorEvents.city,
    deviceType: visitorEvents.deviceType,
    browser: visitorEvents.browser,
    os: visitorEvents.os,
    createdAt: visitorEvents.createdAt
  }).from(visitorEvents).where(filter).orderBy(desc(visitorEvents.createdAt)).limit(pageSize).offset(offset);
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
      id: item.id,
      visitorId: item.visitorId,
      userId: item.userId || null,
      path: item.path || "/",
      referrer: item.referrer || null,
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
