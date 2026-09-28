import { d as defineEventHandler, c as getRequestLocale, g as getQuery, D as getConfiguredTimezone, ba as parseStatsRange, be as clampStatsPage, bf as clampStatsPageSize, e as createError, J as loadVisitorReport, K as getRequestHost, bj as matchesVisitorReportRow, u as users, bi as visitorSourceLabel, bh as formatSourceBrand } from '../../../../nitro/nitro.mjs';
import { db } from '@nuxthub/db';
import { inArray } from 'drizzle-orm';
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
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
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

const visitors_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const unknown = locale === "zh" ? "\u672A\u77E5" : "Unknown";
  const query = getQuery(event);
  const timezone = await getConfiguredTimezone();
  const { preset, days, rangeStart, rangeEnd } = parseStatsRange(query, timezone);
  const page = clampStatsPage(query.page, 1);
  const pageSize = clampStatsPageSize(query.pageSize, 20);
  const attribution = query.attribution === "first" ? "first" : "last";
  const stringQuery = (key) => typeof query[key] === "string" ? query[key].trim() : void 0;
  const type = stringQuery("type");
  if (type && !["page_view", "product_view", "begin_checkout", "order_paid", "auth"].includes(type)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid analytics event filter" });
  }
  const report = await loadVisitorReport(rangeStart, rangeEnd, getRequestHost(event));
  const matches = report.rows.filter((row) => matchesVisitorReportRow(row, {
    attribution,
    type,
    sourceType: stringQuery("sourceType"),
    sourceKey: stringQuery("sourceKey"),
    source: stringQuery("source")
  }));
  const rows = matches.slice((page - 1) * pageSize, page * pageSize);
  const userIds = [...new Set(rows.flatMap((row) => row.userId ? [row.userId] : []))];
  const userRows = userIds.length > 0 ? await db.select({ id: users.id, email: users.email, nickname: users.nickname }).from(users).where(inArray(users.id, userIds)) : [];
  const userMap = new Map(userRows.map((user) => [user.id, user]));
  return {
    range: { preset, days, from: rangeStart.toISOString(), to: rangeEnd.toISOString() },
    attribution,
    pagination: { page, pageSize, totalItems: matches.length, totalPages: Math.max(1, Math.ceil(matches.length / pageSize)) },
    items: rows.map((row) => ({
      visitorId: row.visitorId,
      userId: row.userId,
      user: row.userId ? userMap.get(row.userId) || null : null,
      ip: row.ip,
      country: row.country || unknown,
      deviceType: row.deviceType || unknown,
      firstSourceType: row.first.sourceType,
      firstSource: formatSourceBrand(row.first.source, row.first.sourceType),
      firstMedium: row.first.medium,
      firstCampaign: row.first.campaign,
      firstTouch: visitorSourceLabel(row.first),
      firstSourceKey: row.firstSourceKey,
      lastSourceType: row.last.sourceType,
      lastSource: formatSourceBrand(row.last.source, row.last.sourceType),
      lastMedium: row.last.medium,
      lastCampaign: row.last.campaign,
      lastTouch: visitorSourceLabel(row.last),
      lastSourceKey: row.lastSourceKey,
      landingPath: row.landingPath,
      lastPath: row.lastPath,
      firstSeenAt: row.firstSeenAt,
      lastSeenAt: row.lastSeenAt,
      pageViews: row.pageViews,
      productViews: row.productViews,
      checkouts: row.checkouts,
      paid: row.paid,
      paidOrders: row.paid,
      auth: row.auth
    }))
  };
});

export { visitors_get as default };
