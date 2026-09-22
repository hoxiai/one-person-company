import { d as defineEventHandler, N as resolveClientIp, P as checkIpRateLimit, e as createError, b as db, h as admins } from '../../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const check_get = defineEventHandler(async (event) => {
  const ip = resolveClientIp(event);
  const rl = checkIpRateLimit(`admin-setup:check:${ip}`, { max: 60, windowMs: 6e4 });
  if (!rl.ok) {
    event.node.res.setHeader("Retry-After", Math.ceil(rl.retryAfterMs / 1e3));
    throw createError({ statusCode: 429, statusMessage: "Too Many Requests", message: "Rate limited" });
  }
  const existing = await db.select({ id: admins.id }).from(admins).limit(1);
  return {
    initialized: existing.length > 0
  };
});

export { check_get as default };
