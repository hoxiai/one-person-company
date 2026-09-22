import { d as defineEventHandler, aO as getUserSession, e as createError, g as getQuery, b6 as tickets, b as db } from '../../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async (event) => {
  var _a, _b;
  const session = await getUserSession(event).catch(() => null);
  const userId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  if (!userId) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const query = getQuery(event);
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 15, 1), 50);
  const offset = (page - 1) * pageSize;
  const status = typeof query.status === "string" && query.status.trim() ? query.status.trim() : "";
  const category = typeof query.category === "string" && query.category.trim() ? query.category.trim() : "";
  const conditions = [eq(tickets.userId, userId)];
  if (status) {
    conditions.push(eq(tickets.status, status));
  }
  if (category) {
    conditions.push(eq(tickets.category, category));
  }
  const whereClause = and(...conditions);
  const [totalResult, list] = await Promise.all([
    db.select({ total: count() }).from(tickets).where(whereClause),
    db.select().from(tickets).where(whereClause).orderBy(desc(tickets.lastRepliedAt)).limit(pageSize).offset(offset)
  ]);
  const total = Number(((_b = totalResult[0]) == null ? void 0 : _b.total) || 0);
  return {
    code: 200,
    data: list,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize)
    }
  };
});

export { index_get as default };
