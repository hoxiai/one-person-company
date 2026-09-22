import { d as defineEventHandler, g as getQuery, b6 as tickets, u as users, b as db } from '../../../nitro/nitro.mjs';
import { eq, or, like, and, desc, count } from 'drizzle-orm';
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
  var _a;
  const query = getQuery(event);
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 15, 1), 100);
  const offset = (page - 1) * pageSize;
  const status = typeof query.status === "string" && query.status.trim() ? query.status.trim() : "";
  const category = typeof query.category === "string" && query.category.trim() ? query.category.trim() : "";
  const priority = typeof query.priority === "string" && query.priority.trim() ? query.priority.trim() : "";
  const keyword = typeof query.keyword === "string" && query.keyword.trim() ? query.keyword.trim() : "";
  const conditions = [];
  if (status) {
    conditions.push(eq(tickets.status, status));
  }
  if (category) {
    conditions.push(eq(tickets.category, category));
  }
  if (priority) {
    conditions.push(eq(tickets.priority, priority));
  }
  if (keyword) {
    const pattern = `%${keyword}%`;
    conditions.push(
      or(
        like(tickets.ticketNo, pattern),
        like(tickets.title, pattern),
        like(users.email, pattern)
      )
    );
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
  const queryBuilder = db.select({
    id: tickets.id,
    ticketNo: tickets.ticketNo,
    userId: tickets.userId,
    userEmail: users.email,
    userNickname: users.nickname,
    category: tickets.category,
    title: tickets.title,
    status: tickets.status,
    priority: tickets.priority,
    context: tickets.context,
    lastRepliedAt: tickets.lastRepliedAt,
    lastRepliedBy: tickets.lastRepliedBy,
    createdAt: tickets.createdAt,
    updatedAt: tickets.updatedAt
  }).from(tickets).leftJoin(users, eq(tickets.userId, users.id)).where(whereClause).orderBy(desc(tickets.lastRepliedAt)).limit(pageSize).offset(offset);
  const [totalResult, list, statusCounts] = await Promise.all([
    db.select({ total: count() }).from(tickets).leftJoin(users, eq(tickets.userId, users.id)).where(whereClause),
    queryBuilder,
    db.select({
      status: tickets.status,
      count: count()
    }).from(tickets).groupBy(tickets.status)
  ]);
  const total = Number(((_a = totalResult[0]) == null ? void 0 : _a.total) || 0);
  const summary = {
    all: 0,
    open: 0,
    in_progress: 0,
    auto_resolved: 0,
    resolved: 0,
    closed: 0
  };
  for (const item of statusCounts) {
    const cnt = Number(item.count || 0);
    summary.all += cnt;
    if (item.status in summary) {
      summary[item.status] = cnt;
    }
  }
  return {
    code: 200,
    data: list,
    summary,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize)
    }
  };
});

export { index_get as default };
