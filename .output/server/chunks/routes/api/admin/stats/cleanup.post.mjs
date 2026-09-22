import { d as defineEventHandler, r as readBody, b as db, aZ as visitorEvents } from '../../../../nitro/nitro.mjs';
import { lt } from 'drizzle-orm';
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

const cleanup_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const body = await readBody(event);
  const keepDays = Math.max(1, Math.min(365, (_a = body == null ? void 0 : body.days) != null ? _a : 90));
  const cutoff = new Date(Date.now() - keepDays * 24 * 60 * 60 * 1e3);
  const result = await db.delete(visitorEvents).where(lt(visitorEvents.createdAt, cutoff));
  const deletedCount = (_c = (_b = result == null ? void 0 : result.changes) != null ? _b : result == null ? void 0 : result.rowCount) != null ? _c : 0;
  return {
    success: true,
    deletedCount,
    keepDays,
    cutoff: cutoff.toISOString()
  };
});

export { cleanup_post as default };
