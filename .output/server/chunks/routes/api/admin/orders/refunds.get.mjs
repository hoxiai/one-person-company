import { d as defineEventHandler, aO as setHeader, g as getQuery, e as createError, aA as refunds, b as db } from '../../../../nitro/nitro.mjs';
import { and, eq, count, desc } from 'drizzle-orm';
import { z } from 'zod';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
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

const refunds_get = defineEventHandler(async (event) => {
  var _a;
  setHeader(event, "cache-control", "no-store");
  const parsed = z.object({
    status: z.enum(["requested", "rejected", "processing", "unknown", "failed", "succeeded"]).optional(),
    page: z.coerce.number().int().min(1).max(1e5).default(1),
    pageSize: z.coerce.number().int().min(1).max(100).default(20)
  }).safeParse(getQuery(event));
  if (!parsed.success) throw createError({ statusCode: 400, message: "Invalid refund list query" });
  const { status, page, pageSize } = parsed.data;
  const condition = and(status ? eq(refunds.status, status) : void 0);
  const total = ((_a = (await db.select({ value: count() }).from(refunds).where(condition))[0]) == null ? void 0 : _a.value) || 0;
  const data = await db.select().from(refunds).where(condition).orderBy(desc(refunds.createdAt)).limit(pageSize).offset((page - 1) * pageSize);
  return { data, total, page, pageSize };
});

export { refunds_get as default };
//# sourceMappingURL=refunds.get.mjs.map
