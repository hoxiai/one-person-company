import { cb as defineCachedEventHandler, g as getQuery, p as products, b as db } from '../../nitro/nitro.mjs';
import { and, eq, count, desc } from 'drizzle-orm';
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

const index_get = defineCachedEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 100, 1), 200);
  const offset = (page - 1) * pageSize;
  const isPublicCondition = and(eq(products.status, "active"), eq(products.isActive, true));
  const totalResult = await db.select({ value: count() }).from(products).where(isPublicCondition);
  const total = ((_a = totalResult[0]) == null ? void 0 : _a.value) || 0;
  const result = await db.select().from(products).where(isPublicCondition).orderBy(desc(products.sortOrder), desc(products.id)).limit(pageSize).offset(offset);
  return {
    data: result,
    total,
    page,
    pageSize
  };
}, {
  maxAge: 60,
  // cache for 60 seconds
  swr: true,
  // serve stale content while revalidating
  name: "products-list",
  getKey: (event) => {
    const query = getQuery(event);
    return `page-${query.page || 1}-size-${query.pageSize || 100}`;
  }
});

export { index_get as default };
