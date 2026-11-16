import { d as defineEventHandler, b as db, bd as postCategories, b7 as posts, be as parsePostCategoryLocales } from '../../../../nitro/nitro.mjs';
import { asc, count } from 'drizzle-orm';
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
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

const index_get = defineEventHandler(async () => {
  const [rows, countRows] = await Promise.all([
    db.select().from(postCategories).orderBy(asc(postCategories.sort), asc(postCategories.id)),
    db.select({ categoryId: posts.categoryId, value: count() }).from(posts).groupBy(posts.categoryId)
  ]);
  const countMap = /* @__PURE__ */ new Map();
  for (const row of countRows) {
    if (row.categoryId != null) countMap.set(row.categoryId, Number(row.value) || 0);
  }
  return {
    data: rows.map((row) => ({
      ...row,
      locales: parsePostCategoryLocales(row.locales),
      postCount: countMap.get(row.id) || 0
    }))
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
