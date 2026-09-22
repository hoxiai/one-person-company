import { cb as defineCachedEventHandler, b as db, p as products } from '../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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
