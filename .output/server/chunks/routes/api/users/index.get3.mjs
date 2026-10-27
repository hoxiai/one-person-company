import { d as defineEventHandler, bs as getUserSession, e as createError, g as getQuery, L as tickets, b as db } from '../../../nitro/nitro.mjs';
import { or, eq, and, count, desc } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = user == null ? void 0 : user.id;
  const userEmail = (user == null ? void 0 : user.email) ? String(user.email).trim().toLowerCase() : "";
  if (!userId) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const query = getQuery(event);
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 15, 1), 50);
  const offset = (page - 1) * pageSize;
  const status = typeof query.status === "string" && query.status.trim() ? query.status.trim() : "";
  const category = typeof query.category === "string" && query.category.trim() ? query.category.trim() : "";
  const ownerCondition = userEmail ? or(eq(tickets.userId, userId), eq(tickets.contactEmail, userEmail)) : eq(tickets.userId, userId);
  const conditions = [ownerCondition];
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
  const total = Number(((_a = totalResult[0]) == null ? void 0 : _a.total) || 0);
  const safeList = list.map(({ accessToken: _omit, ...item }) => item);
  return {
    code: 200,
    data: safeList,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize)
    }
  };
});

export { index_get as default };
//# sourceMappingURL=index.get3.mjs.map
