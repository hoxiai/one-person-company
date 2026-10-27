import { d as defineEventHandler, c as getRequestLocale, g as getQuery, D as getConfiguredTimezone, bT as parseStatsRange, bY as clampStatsPage, bZ as clampStatsPageSize, e as createError, J as loadVisitorReport, K as getRequestHost, c2 as matchesVisitorReportRow, b as db, u as users, c1 as visitorSourceLabel, c0 as formatSourceBrand } from '../../../../nitro/nitro.mjs';
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
  const search = stringQuery("search");
  const baseFilter = {
    attribution,
    type,
    sourceType: stringQuery("sourceType"),
    sourceKey: stringQuery("sourceKey"),
    source: stringQuery("source")
  };
  const baseMatches = report.rows.filter((row) => matchesVisitorReportRow(row, baseFilter));
  const candidateUserIds = [...new Set(baseMatches.flatMap((row) => row.userId ? [row.userId] : []))];
  const userRows = [];
  for (let offset = 0; offset < candidateUserIds.length; offset += 100) {
    userRows.push(
      ...await db.select({ id: users.id, email: users.email, nickname: users.nickname }).from(users).where(inArray(users.id, candidateUserIds.slice(offset, offset + 100)))
    );
  }
  const userMap = new Map(
    userRows.map((user) => [user.id, user])
  );
  const searchKeyword = (search == null ? void 0 : search.toLowerCase()) || "";
  const matches = searchKeyword ? baseMatches.filter((row) => {
    if (matchesVisitorReportRow(row, { search })) return true;
    const u = row.userId ? userMap.get(row.userId) : null;
    if (!u) return false;
    return [u.email, u.nickname, String(u.id)].filter(Boolean).join(" ").toLowerCase().includes(searchKeyword);
  }) : baseMatches;
  const rows = matches.slice((page - 1) * pageSize, page * pageSize);
  const countRows = (predicate) => report.rows.filter(predicate).length;
  return {
    range: { preset, days, from: rangeStart.toISOString(), to: rangeEnd.toISOString() },
    attribution,
    summary: {
      totalVisitors: report.rows.length,
      pageViewVisitors: countRows((row) => row.pageViews > 0),
      productVisitors: countRows((row) => row.productViews > 0),
      checkoutVisitors: countRows((row) => row.checkouts > 0),
      paidVisitors: countRows((row) => row.paid > 0),
      authVisitors: countRows((row) => row.auth > 0),
      externalVisitors: countRows((row) => row.external),
      campaignVisitors: countRows((row) => row.tagged)
    },
    pagination: { page, pageSize, totalItems: matches.length, totalPages: Math.max(1, Math.ceil(matches.length / pageSize)) },
    items: rows.map((row) => ({
      visitorId: row.visitorId,
      userId: row.userId,
      user: row.userId ? userMap.get(row.userId) || null : null,
      ip: row.ip,
      country: row.country || unknown,
      region: row.region || null,
      city: row.city || null,
      deviceType: row.deviceType || unknown,
      browser: row.browser || null,
      os: row.os || null,
      firstSourceType: row.first.sourceType,
      firstSource: formatSourceBrand(row.first.source, row.first.sourceType),
      firstMedium: row.first.medium,
      firstCampaign: row.first.campaign,
      firstContent: row.first.content,
      firstTerm: row.first.term,
      firstTouch: visitorSourceLabel(row.first),
      firstSourceKey: row.firstSourceKey,
      firstReferrer: row.firstReferrer,
      lastSourceType: row.last.sourceType,
      lastSource: formatSourceBrand(row.last.source, row.last.sourceType),
      lastMedium: row.last.medium,
      lastCampaign: row.last.campaign,
      lastContent: row.last.content,
      lastTerm: row.last.term,
      lastTouch: visitorSourceLabel(row.last),
      lastSourceKey: row.lastSourceKey,
      lastReferrer: row.lastReferrer,
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
//# sourceMappingURL=visitors.get.mjs.map
