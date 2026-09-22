import { d as defineEventHandler, g as getQuery, a as accessLogs, b as db, t as toIsoTimestamp } from '../../../nitro/nitro.mjs';
import { sql, count, desc } from 'drizzle-orm';
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
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 50;
  const pathFilter = typeof query.path === "string" ? query.path.trim() : "";
  const methodFilter = typeof query.method === "string" ? query.method.trim().toUpperCase() : "";
  const statusFilter = typeof query.status === "string" ? query.status.trim() : "";
  const search = typeof query.search === "string" ? query.search.trim() : "";
  const offset = (page - 1) * pageSize;
  const conditions = [];
  if (pathFilter) {
    conditions.push(sql`${accessLogs.path} LIKE ${`%${pathFilter}%`}`);
  }
  if (methodFilter) {
    conditions.push(sql`${accessLogs.method} = ${methodFilter}`);
  }
  if (statusFilter) {
    conditions.push(sql`CAST(${accessLogs.statusCode} AS TEXT) LIKE ${`${statusFilter}%`}`);
  }
  if (search) {
    conditions.push(sql`(
      ${accessLogs.path} LIKE ${`%${search}%`}
      OR ${accessLogs.ip} LIKE ${`%${search}%`}
      OR ${accessLogs.visitorId} LIKE ${`%${search}%`}
    )`);
  }
  const where = conditions.length > 0 ? conditions.reduce((acc, c) => sql`${acc} AND ${c}`) : void 0;
  const countResult = where ? await db.select({ value: count() }).from(accessLogs).where(where) : await db.select({ value: count() }).from(accessLogs);
  const [{ value: total }] = countResult;
  let queryBuilder = db.select({
    id: accessLogs.id,
    path: accessLogs.path,
    method: accessLogs.method,
    ip: accessLogs.ip,
    userAgent: accessLogs.userAgent,
    referrer: accessLogs.referrer,
    country: accessLogs.country,
    region: accessLogs.region,
    city: accessLogs.city,
    statusCode: accessLogs.statusCode,
    duration: accessLogs.duration,
    visitorId: accessLogs.visitorId,
    userId: accessLogs.userId,
    createdAt: accessLogs.createdAt
  }).from(accessLogs).orderBy(desc(accessLogs.createdAt)).limit(pageSize).offset(offset);
  if (where) {
    queryBuilder = queryBuilder.where(where);
  }
  const result = await queryBuilder;
  const normalizedLogs = result.map((log) => ({
    ...log,
    createdAt: toIsoTimestamp(log.createdAt)
  }));
  return {
    logs: normalizedLogs,
    total,
    page,
    pageSize
  };
});

export { index_get as default };
