import { d as defineEventHandler, g as getQuery, V as newsletterSubscribers, b as db } from '../../../../nitro/nitro.mjs';
import { eq, like, and, desc, sql } from 'drizzle-orm';
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

const subscribers_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const query = getQuery(event);
  const page = Math.max(1, Number(query.page) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(query.pageSize) || 20));
  const search = String(query.search || "").trim().toLowerCase();
  const status = String(query.status || "all").trim().toLowerCase();
  const topic = String(query.topic || "all").trim().toLowerCase();
  const channel = String(query.channel || "all").trim().toLowerCase();
  const conditions = [];
  if (status && status !== "all") {
    conditions.push(eq(newsletterSubscribers.status, status));
  }
  if (topic && topic !== "all") {
    conditions.push(eq(newsletterSubscribers.topic, topic));
  }
  if (channel && channel !== "all") {
    conditions.push(eq(newsletterSubscribers.channel, channel));
  }
  if (search) {
    conditions.push(like(newsletterSubscribers.target, `%${search}%`));
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
  const [items, countRows, activeCountRows, unsubCountRows, topicRows] = await Promise.all([
    db.select().from(newsletterSubscribers).where(whereClause).orderBy(desc(newsletterSubscribers.createdAt)).limit(pageSize).offset((page - 1) * pageSize),
    db.select({ count: sql`count(*)` }).from(newsletterSubscribers).where(whereClause),
    db.select({ count: sql`count(*)` }).from(newsletterSubscribers).where(eq(newsletterSubscribers.status, "active")),
    db.select({ count: sql`count(*)` }).from(newsletterSubscribers).where(eq(newsletterSubscribers.status, "unsubscribed")),
    db.select({
      topic: newsletterSubscribers.topic,
      count: sql`count(*)`
    }).from(newsletterSubscribers).where(eq(newsletterSubscribers.status, "active")).groupBy(newsletterSubscribers.topic)
  ]);
  return {
    items,
    total: Number((_b = (_a = countRows[0]) == null ? void 0 : _a.count) != null ? _b : 0),
    page,
    pageSize,
    stats: {
      activeTotal: Number((_d = (_c = activeCountRows[0]) == null ? void 0 : _c.count) != null ? _d : 0),
      unsubscribedTotal: Number((_f = (_e = unsubCountRows[0]) == null ? void 0 : _e.count) != null ? _f : 0),
      topics: topicRows.map((r) => {
        var _a2;
        return {
          topic: r.topic,
          count: Number((_a2 = r.count) != null ? _a2 : 0)
        };
      })
    }
  };
});

export { subscribers_get as default };
//# sourceMappingURL=subscribers.get.mjs.map
