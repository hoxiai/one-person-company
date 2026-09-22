import { d as defineEventHandler, g as getQuery, ay as listPromoCommissions, b as db, az as promoCommissions } from '../../../../nitro/nitro.mjs';
import { count } from 'drizzle-orm';
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

const commissions_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 15;
  const rows = await listPromoCommissions(500);
  const totalRows = await db.select({ value: count() }).from(promoCommissions);
  const total = Number(((_a = totalRows[0]) == null ? void 0 : _a.value) || 0);
  const start = (page - 1) * pageSize;
  return {
    data: rows.slice(start, start + pageSize),
    total,
    page,
    pageSize
  };
});

export { commissions_get as default };
