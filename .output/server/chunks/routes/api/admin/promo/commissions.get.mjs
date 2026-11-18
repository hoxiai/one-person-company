import { d as defineEventHandler, g as getQuery, b as db, bo as promoCommissions, bp as listPromoCommissions } from '../../../../nitro/nitro.mjs';
import { count } from 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const commissions_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(1, parseInt(query.page) || 1);
  const pageSize = Math.max(1, Math.min(100, parseInt(query.pageSize) || 15));
  const offset = (page - 1) * pageSize;
  const [totalRows, data] = await Promise.all([
    db.select({ value: count() }).from(promoCommissions),
    listPromoCommissions(pageSize, offset)
  ]);
  return {
    data,
    total: Number(((_a = totalRows[0]) == null ? void 0 : _a.value) || 0),
    page,
    pageSize
  };
});

export { commissions_get as default };
//# sourceMappingURL=commissions.get.mjs.map
