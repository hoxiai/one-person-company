import { d as defineEventHandler, c as getRequestLocale, g as getQuery, o as orders, b as db, t as toIsoTimestamp, q as aggregateOrderAccountingTotals, e as createError } from '../../../nitro/nitro.mjs';
import { sql, inArray, and, or, isNull, eq } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  try {
    const query = getQuery(event);
    const page = Math.max(parseInt(query.page) || 1, 1);
    const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 15, 1), 100);
    const offset = (page - 1) * pageSize;
    const search = String(query.search || query.q || query.keyword || "").trim().toLowerCase();
    const searchPattern = search ? `%${search}%` : "";
    let namedWhere = sql`${orders.contactEmail} IS NOT NULL AND ${orders.contactEmail} != '' AND ${orders.payStatus} != 'deleted' AND ${orders.status} != 'deleted'`;
    if (search) {
      namedWhere = sql`${orders.contactEmail} IS NOT NULL AND ${orders.contactEmail} != '' AND ${orders.payStatus} != 'deleted' AND ${orders.status} != 'deleted' AND (lower(${orders.contactEmail}) LIKE ${searchPattern} OR lower(coalesce(${orders.visitorId}, '')) LIKE ${searchPattern})`;
    }
    const namedGroups = await db.select({
      email: orders.contactEmail,
      visitorId: sql`MAX(${orders.visitorId})`,
      totalOrders: sql`COUNT(${orders.id})`,
      firstOrderAt: sql`MIN(${orders.createdAt})`,
      lastOrderAt: sql`MAX(${orders.createdAt})`,
      unpaidOrders: sql`SUM(CASE WHEN ${orders.payStatus} != 'paid' THEN 1 ELSE 0 END)`
    }).from(orders).where(namedWhere).groupBy(orders.contactEmail);
    let anonymousWhere = sql`(${orders.contactEmail} IS NULL OR ${orders.contactEmail} = '') AND ${orders.visitorId} IS NOT NULL AND ${orders.payStatus} != 'deleted' AND ${orders.status} != 'deleted'`;
    if (search) {
      anonymousWhere = sql`(${orders.contactEmail} IS NULL OR ${orders.contactEmail} = '') AND ${orders.visitorId} IS NOT NULL AND ${orders.payStatus} != 'deleted' AND ${orders.status} != 'deleted' AND lower(${orders.visitorId}) LIKE ${searchPattern}`;
    }
    const anonymousGroups = await db.select({
      email: sql`NULL`,
      visitorId: orders.visitorId,
      totalOrders: sql`COUNT(${orders.id})`,
      firstOrderAt: sql`MIN(${orders.createdAt})`,
      lastOrderAt: sql`MAX(${orders.createdAt})`,
      unpaidOrders: sql`SUM(CASE WHEN ${orders.payStatus} != 'paid' THEN 1 ELSE 0 END)`
    }).from(orders).where(anonymousWhere).groupBy(orders.visitorId);
    const groups = [...namedGroups, ...anonymousGroups].map((group) => ({
      ...group,
      isAnonymous: !group.email,
      email: group.email || (locale === "zh" ? "\u533F\u540D\u8BBF\u5BA2" : "Anonymous"),
      totalOrders: Number(group.totalOrders || 0),
      firstOrderAt: toIsoTimestamp(group.firstOrderAt) || null,
      lastOrderAt: toIsoTimestamp(group.lastOrderAt) || null,
      unpaidOrders: Number(group.unpaidOrders || 0)
    })).sort((left, right) => String(right.lastOrderAt || "").localeCompare(String(left.lastOrderAt || "")));
    const paginatedGroups = groups.slice(offset, offset + pageSize);
    const namedEmails = paginatedGroups.filter((group) => !group.isAnonymous).map((group) => String(group.email || "").trim()).filter(Boolean);
    const anonymousVisitorIds = paginatedGroups.filter((group) => group.isAnonymous).map((group) => String(group.visitorId || "").trim()).filter(Boolean);
    const identityConditions = [];
    if (namedEmails.length) identityConditions.push(inArray(orders.contactEmail, namedEmails));
    if (anonymousVisitorIds.length) {
      identityConditions.push(and(
        or(isNull(orders.contactEmail), eq(orders.contactEmail, "")),
        inArray(orders.visitorId, anonymousVisitorIds)
      ));
    }
    const paidOrderRows = identityConditions.length ? await db.select({
      email: orders.contactEmail,
      visitorId: orders.visitorId,
      amount: orders.amount,
      currency: orders.currency,
      metaData: orders.metaData
    }).from(orders).where(and(
      eq(orders.payStatus, "paid"),
      or(...identityConditions)
    )) : [];
    const totalsByIdentity = /* @__PURE__ */ new Map();
    for (const group of paginatedGroups) {
      const email = String(group.email || "").trim();
      const matchingOrders = paidOrderRows.filter((order) => group.isAnonymous ? String(order.visitorId || "") === String(group.visitorId || "") && !String(order.email || "").trim() : String(order.email || "").trim() === email);
      const key = group.isAnonymous ? `visitor:${group.visitorId}` : `email:${email}`;
      totalsByIdentity.set(key, aggregateOrderAccountingTotals(matchingOrders));
    }
    const data = paginatedGroups.map((group) => {
      var _a;
      const email = String(group.email || "").trim();
      const key = group.isAnonymous ? `visitor:${group.visitorId}` : `email:${email}`;
      const totalSpentByCurrency = totalsByIdentity.get(key) || [];
      return {
        email: group.email,
        visitorId: group.visitorId,
        totalOrders: group.totalOrders,
        firstOrderAt: group.firstOrderAt,
        lastOrderAt: group.lastOrderAt,
        unpaidOrders: group.unpaidOrders,
        totalSpent: totalSpentByCurrency.length === 1 ? ((_a = totalSpentByCurrency[0]) == null ? void 0 : _a.amount) || 0 : 0,
        totalSpentByCurrency
      };
    });
    return {
      data,
      total: groups.length,
      page,
      pageSize
    };
  } catch (error) {
    console.error("Fetch customers error:", error);
    throw createError({
      statusCode: 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u5BA2\u6237\u5217\u8868\u5931\u8D25" : "Failed to fetch customers")
    });
  }
});

export { index_get as default };
