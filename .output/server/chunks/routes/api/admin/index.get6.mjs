import { d as defineEventHandler, g as getQuery, Z as operationLogs, b as db, t as toIsoTimestamp } from '../../../nitro/nitro.mjs';
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
  const pageSize = Math.min(parseInt(query.pageSize) || 50, 200);
  const actorTypeFilter = typeof query.actorType === "string" ? query.actorType.trim() : "";
  const actionFilter = typeof query.action === "string" ? query.action.trim() : "";
  const resourceFilter = typeof query.resource === "string" ? query.resource.trim() : "";
  const search = typeof query.search === "string" ? query.search.trim() : "";
  const offset = (page - 1) * pageSize;
  const conditions = [];
  if (actorTypeFilter) {
    conditions.push(sql`${operationLogs.actorType} = ${actorTypeFilter}`);
  }
  if (actionFilter) {
    conditions.push(sql`${operationLogs.action} = ${actionFilter}`);
  }
  if (resourceFilter) {
    conditions.push(sql`${operationLogs.resource} = ${resourceFilter}`);
  }
  if (search) {
    conditions.push(sql`(
      ${operationLogs.actorName} LIKE ${`%${search}%`}
      OR ${operationLogs.resourceId} LIKE ${`%${search}%`}
      OR ${operationLogs.path} LIKE ${`%${search}%`}
      OR ${operationLogs.summary} LIKE ${`%${search}%`}
    )`);
  }
  const where = conditions.length > 0 ? conditions.reduce((acc, c) => sql`${acc} AND ${c}`) : void 0;
  const countResult = where ? await db.select({ value: count() }).from(operationLogs).where(where) : await db.select({ value: count() }).from(operationLogs);
  const [{ value: total }] = countResult;
  let queryBuilder = db.select({
    id: operationLogs.id,
    actorType: operationLogs.actorType,
    actorId: operationLogs.actorId,
    actorName: operationLogs.actorName,
    action: operationLogs.action,
    resource: operationLogs.resource,
    resourceId: operationLogs.resourceId,
    summary: operationLogs.summary,
    details: operationLogs.details,
    path: operationLogs.path,
    method: operationLogs.method,
    statusCode: operationLogs.statusCode,
    ip: operationLogs.ip,
    userAgent: operationLogs.userAgent,
    createdAt: operationLogs.createdAt
  }).from(operationLogs).orderBy(desc(operationLogs.createdAt), desc(operationLogs.id)).limit(pageSize).offset(offset);
  if (where) {
    queryBuilder = queryBuilder.where(where);
  }
  const result = await queryBuilder;
  const normalizedLogs = result.map((log) => ({
    ...log,
    createdAt: toIsoTimestamp(log.createdAt)
  }));
  const [resources, actions] = await Promise.all([
    db.selectDistinct({ value: operationLogs.resource }).from(operationLogs),
    db.selectDistinct({ value: operationLogs.action }).from(operationLogs)
  ]);
  return {
    logs: normalizedLogs,
    total,
    page,
    pageSize,
    facets: {
      resources: resources.map((r) => r.value).filter(Boolean).sort(),
      actions: actions.map((a) => a.value).filter(Boolean).sort()
    }
  };
});

export { index_get as default };
