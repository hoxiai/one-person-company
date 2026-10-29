import { d as defineEventHandler, g as getQuery, a9 as logs, b as db, t as toIsoTimestamp } from '../../../nitro/nitro.mjs';
import { or, like, count, desc } from 'drizzle-orm';
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
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = Math.max(1, parseInt(String(query.page)) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(String(query.pageSize)) || 50));
  const search = typeof query.search === "string" ? query.search.trim().slice(0, 200) : "";
  const filter = search ? or(like(logs.message, `%${search}%`), like(logs.details, `%${search}%`)) : void 0;
  const offset = (page - 1) * pageSize;
  const [{ value: total }] = await db.select({ value: count() }).from(logs).where(filter);
  const result = await db.select({
    id: logs.id,
    level: logs.level,
    message: logs.message,
    details: logs.details,
    source: logs.source,
    createdAt: logs.createdAt
  }).from(logs).where(filter).orderBy(desc(logs.createdAt)).limit(pageSize).offset(offset);
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
//# sourceMappingURL=index.get6.mjs.map
