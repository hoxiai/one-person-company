import { d as defineEventHandler, c as getRequestLocale, g as getQuery, w as getConfiguredTimezone, aX as parseStatsRange, b0 as clampStatsPage, b1 as clampStatsPageSize, aY as getRequestHost, b as db, aZ as visitorEvents, v as visitorProfiles, u as users } from '../../../../nitro/nitro.mjs';
import { and, gte, lt, eq, sql, inArray, count, desc } from 'drizzle-orm';
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

const visitors_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const unknownLabel = locale === "zh" ? "\u672A\u77E5" : "Unknown";
  const query = getQuery(event);
  const tz = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(query, tz);
  const page = clampStatsPage(query.page, 1);
  const pageSize = clampStatsPageSize(query.pageSize, 20);
  const offset = (page - 1) * pageSize;
  const eventType = query.type;
  const sourceType = query.sourceType;
  const host = getRequestHost(event);
  let matchingVisitorIds = null;
  if (eventType) {
    if (eventType === "auth") {
      const fromEvents = await db.select({ visitorId: visitorEvents.visitorId }).from(visitorEvents).where(
        and(
          gte(visitorEvents.createdAt, rangeStart),
          lt(visitorEvents.createdAt, rangeEnd),
          eq(visitorEvents.eventName, eventType)
        )
      ).groupBy(visitorEvents.visitorId);
      const fromProfiles = await db.select({ visitorId: visitorProfiles.visitorId }).from(visitorProfiles).where(
        and(
          gte(visitorProfiles.lastSeenAt, rangeStart),
          lt(visitorProfiles.lastSeenAt, rangeEnd),
          sql`${visitorProfiles.userId} IS NOT NULL`
        )
      );
      const mergedIds = /* @__PURE__ */ new Set([
        ...fromEvents.map((r) => r.visitorId),
        ...fromProfiles.map((r) => r.visitorId)
      ]);
      matchingVisitorIds = Array.from(mergedIds);
    } else {
      const rows = await db.select({ visitorId: visitorEvents.visitorId }).from(visitorEvents).where(
        and(
          gte(visitorEvents.createdAt, rangeStart),
          lt(visitorEvents.createdAt, rangeEnd),
          eq(visitorEvents.eventName, eventType)
        )
      ).groupBy(visitorEvents.visitorId);
      matchingVisitorIds = rows.map((r) => r.visitorId);
    }
  } else if (sourceType === "external") {
    const rows = await db.select({ visitorId: visitorEvents.visitorId }).from(visitorEvents).where(
      and(
        gte(visitorEvents.createdAt, rangeStart),
        lt(visitorEvents.createdAt, rangeEnd),
        // sql.raw() would splice `host` (attacker-controllable via the Host
        // request header) directly into the query text — a SQL injection
        // primitive. Interpolating it as a normal template value instead
        // lets drizzle bind it as a parameter, which is safe regardless of
        // what characters it contains.
        sql`${visitorEvents.referrer} IS NOT NULL AND ${visitorEvents.referrer} != '' AND ${visitorEvents.referrer} NOT LIKE ${`%${host}%`}`
      )
    ).groupBy(visitorEvents.visitorId);
    matchingVisitorIds = rows.map((r) => r.visitorId);
  }
  const profileConditions = [
    gte(visitorProfiles.lastSeenAt, rangeStart),
    lt(visitorProfiles.lastSeenAt, rangeEnd)
  ];
  if (matchingVisitorIds !== null) {
    profileConditions.push(inArray(visitorProfiles.visitorId, matchingVisitorIds.length > 0 ? matchingVisitorIds : ["__none__"]));
  }
  if (sourceType === "campaign") {
    profileConditions.push(
      sql`(${visitorProfiles.firstCampaign} IS NOT NULL OR ${visitorProfiles.lastCampaign} IS NOT NULL)`
    );
  }
  const profileFilter = and(...profileConditions);
  const [{ value: totalItems }] = await db.select({ value: count() }).from(visitorProfiles).where(profileFilter);
  const profiles = await db.select().from(visitorProfiles).where(profileFilter).orderBy(desc(visitorProfiles.lastSeenAt)).limit(pageSize).offset(offset);
  const visitorIds = profiles.map((item) => item.visitorId).filter(Boolean);
  const userIds = profiles.map((p) => p.userId).filter(Boolean);
  const userMap = /* @__PURE__ */ new Map();
  if (userIds.length > 0) {
    const userRows = await db.select({ id: users.id, email: users.email, nickname: users.nickname }).from(users).where(inArray(users.id, userIds));
    for (const u of userRows) {
      userMap.set(u.id, { email: u.email, nickname: u.nickname });
    }
  }
  const events = visitorIds.length > 0 ? await db.select({
    visitorId: visitorEvents.visitorId,
    eventName: visitorEvents.eventName
  }).from(visitorEvents).where(
    and(
      gte(visitorEvents.createdAt, rangeStart),
      lt(visitorEvents.createdAt, rangeEnd),
      inArray(visitorEvents.visitorId, visitorIds)
    )
  ) : [];
  const statsMap = /* @__PURE__ */ new Map();
  for (const eventItem of events) {
    const stats = statsMap.get(eventItem.visitorId) || {
      pageViews: 0,
      productViews: 0,
      checkouts: 0,
      paid: 0,
      auth: 0
    };
    if (eventItem.eventName === "page_view") stats.pageViews += 1;
    if (eventItem.eventName === "product_view") stats.productViews += 1;
    if (eventItem.eventName === "begin_checkout") stats.checkouts += 1;
    if (eventItem.eventName === "order_paid") stats.paid += 1;
    if (eventItem.eventName === "auth") stats.auth += 1;
    statsMap.set(eventItem.visitorId, stats);
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
      totalItems: Number(totalItems || 0),
      totalPages: Math.max(1, Math.ceil(Number(totalItems || 0) / pageSize))
    },
    items: profiles.map((profile) => {
      const stats = statsMap.get(profile.visitorId) || {
        pageViews: 0,
        productViews: 0,
        checkouts: 0,
        paid: 0,
        auth: 0
      };
      return {
        visitorId: profile.visitorId,
        userId: profile.userId,
        user: profile.userId ? userMap.get(profile.userId) || null : null,
        ip: profile.ip,
        firstTouch: profile.firstCampaign || profile.firstSource || profile.firstSourceType || "direct",
        lastTouch: profile.lastCampaign || profile.lastSource || profile.lastSourceType || "direct",
        country: profile.country || unknownLabel,
        deviceType: profile.deviceType || unknownLabel,
        landingPath: profile.landingPath || profile.firstPath || "/",
        lastPath: profile.lastPath || "/",
        firstSeenAt: profile.firstSeenAt,
        lastSeenAt: profile.lastSeenAt,
        pageViews: stats.pageViews,
        productViews: stats.productViews,
        checkouts: stats.checkouts,
        paid: stats.paid,
        auth: stats.auth
      };
    })
  };
});

export { visitors_get as default };
