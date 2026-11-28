import { fy as defineCachedEventHandler, b as db, q as products } from '../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const types_get = defineCachedEventHandler(async (event) => {
  const result = await db.select({
    type: products.type
  }).from(products).where(and(eq(products.status, "active"), eq(products.isActive, true)));
  const types = [...new Set(result.map((row) => row.type).filter(Boolean))];
  return {
    success: true,
    data: types
  };
}, {
  maxAge: 60,
  // cache for 60 seconds
  swr: true,
  name: "products-types"
});

export { types_get as default };
//# sourceMappingURL=types.get.mjs.map
