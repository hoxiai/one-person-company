import { d as defineEventHandler, aO as getUserSession, g as getQuery, bb as notifications, b_ as getCookie, b as db } from '../../../nitro/nitro.mjs';
import { eq, and, count, desc } from 'drizzle-orm';
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

const normalizeNotificationData = (value) => {
  if (!value) return {};
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return {};
    }
  }
  if (typeof value === "object") {
    return value;
  }
  return {};
};
const resolveNotificationTargetPath = (data) => {
  if (typeof data.targetPath === "string" && data.targetPath.trim()) {
    return data.targetPath.trim();
  }
  const orderId = typeof data.orderId === "string" ? data.orderId.trim() : "";
  if (!orderId) return null;
  if (data.payStatus === "pending") {
    return `/payment/${orderId}`;
  }
  return `/user/orders/${orderId}`;
};
const index_get = defineEventHandler(async (event) => {
  var _a, _b;
  const session = await getUserSession(event).catch(() => null);
  const userId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 20;
  const offset = (page - 1) * pageSize;
  const unreadOnly = query.unread === "1";
  const conditions = [];
  if (userId) {
    conditions.push(eq(notifications.userId, userId));
  } else {
    const visitorId = getCookie(event, "visitorId") || "";
    if (visitorId) {
      conditions.push(eq(notifications.visitorId, visitorId));
    } else {
      return { data: [], total: 0, page, pageSize };
    }
  }
  if (unreadOnly) {
    conditions.push(eq(notifications.isRead, false));
  }
  const filter = and(...conditions);
  const totalResult = await db.select({ value: count() }).from(notifications).where(filter);
  const total = ((_b = totalResult[0]) == null ? void 0 : _b.value) || 0;
  const rows = await db.select().from(notifications).where(filter).orderBy(desc(notifications.createdAt)).limit(pageSize).offset(offset);
  const data = rows.map((row) => {
    const normalizedData = normalizeNotificationData(row.data);
    return {
      ...row,
      data: normalizedData,
      targetPath: resolveNotificationTargetPath(normalizedData),
      createdAt: row.createdAt ? new Date(row.createdAt).toISOString() : null
    };
  });
  return { data, total, page, pageSize };
});

export { index_get as default };
