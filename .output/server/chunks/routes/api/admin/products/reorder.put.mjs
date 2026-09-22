import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, p as products } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const reorder_put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  const items = body.items;
  if (!Array.isArray(items)) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u8BF7\u6C42\u4F53\u65E0\u6548\uFF0C\u9884\u671F\u4E3A\u6570\u7EC4 items" : "Invalid request body, expected an array of items"
    });
  }
  const updates = [];
  for (const item of items) {
    if (item.id !== void 0 && item.sortOrder !== void 0) {
      updates.push(
        db.update(products).set({ sortOrder: item.sortOrder }).where(eq(products.id, item.id))
      );
    }
  }
  if (updates.length > 0) {
    await Promise.all(updates);
  }
  return { success: true, updated: updates.length };
});

export { reorder_put as default };
