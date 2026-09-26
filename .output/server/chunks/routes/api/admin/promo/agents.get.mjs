import { d as defineEventHandler, g as getQuery, b as db, aA as promoMembers, aB as PROMO_ROLE, aC as listPromoAgents } from '../../../../nitro/nitro.mjs';
import { count, inArray } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

const agents_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(1, parseInt(query.page) || 1);
  const pageSize = Math.max(1, Math.min(100, parseInt(query.pageSize) || 15));
  const offset = (page - 1) * pageSize;
  const [totalRows, data] = await Promise.all([
    db.select({ value: count() }).from(promoMembers).where(inArray(promoMembers.role, [PROMO_ROLE.AGENT, PROMO_ROLE.MASTER_AGENT])),
    listPromoAgents(pageSize, offset)
  ]);
  return {
    data,
    total: Number(((_a = totalRows[0]) == null ? void 0 : _a.value) || 0),
    page,
    pageSize
  };
});

export { agents_get as default };
