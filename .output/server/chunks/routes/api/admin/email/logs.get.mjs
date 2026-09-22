import { d as defineEventHandler, g as getQuery, G as emailLogs, b as db } from '../../../../nitro/nitro.mjs';
import { or, like, eq, and, sql, desc } from 'drizzle-orm';
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

const logs_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(Number(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(Number(query.pageSize) || 20, 1), 100);
  const offset = (page - 1) * pageSize;
  const search = typeof query.search === "string" ? query.search.trim() : "";
  const status = typeof query.status === "string" ? query.status.trim() : "";
  const conditions = [];
  if (search) {
    conditions.push(
      or(
        like(emailLogs.to, `%${search}%`),
        like(emailLogs.subject, `%${search}%`),
        like(emailLogs.templateCode, `%${search}%`)
      )
    );
  }
  if (status && (status === "success" || status === "failed")) {
    conditions.push(eq(emailLogs.status, status));
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
  const countRes = await db.select({ count: sql`count(*)` }).from(emailLogs).where(whereClause);
  const total = Number(((_a = countRes[0]) == null ? void 0 : _a.count) || 0);
  const items = await db.select().from(emailLogs).where(whereClause).orderBy(desc(emailLogs.createdAt), desc(emailLogs.id)).limit(pageSize).offset(offset);
  return {
    items,
    total,
    page,
    pageSize
  };
});

export { logs_get as default };
