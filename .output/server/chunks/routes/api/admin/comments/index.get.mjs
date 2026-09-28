import { d as defineEventHandler, g as getQuery, w as commentSyncSources, b as db } from '../../../../nitro/nitro.mjs';
import { eq, or, like, and, desc } from 'drizzle-orm';
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
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const source = String(query.source || "all").trim().toLowerCase();
  const targetType = String(query.targetType || "all").trim().toLowerCase();
  const search = String(query.search || "").trim();
  const conditions = [];
  if (source && source !== "all") {
    conditions.push(eq(commentSyncSources.source, source));
  }
  if (targetType && targetType !== "all") {
    conditions.push(eq(commentSyncSources.targetType, targetType));
  }
  if (search) {
    const pattern = `%${search}%`;
    conditions.push(
      or(
        like(commentSyncSources.targetId, pattern),
        like(commentSyncSources.externalId, pattern),
        like(commentSyncSources.externalUrl, pattern)
      )
    );
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
  const rows = await db.select().from(commentSyncSources).where(whereClause).orderBy(desc(commentSyncSources.updatedAt));
  return {
    success: true,
    data: rows,
    total: rows.length
  };
});

export { index_get as default };
