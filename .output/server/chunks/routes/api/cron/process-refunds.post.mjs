import { d as defineEventHandler, dS as useRuntimeConfig, cY as getHeader, e as createError, ed as sweepRefunds } from '../../../nitro/nitro.mjs';
import { timingSafeEqual } from 'node:crypto';
import 'drizzle-orm';
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

const processRefunds_post = defineEventHandler(async (event) => {
  const secret = String(useRuntimeConfig().cronSecret || process.env.CRON_SECRET || "");
  const received = getHeader(event, "authorization") || "";
  const expected = `Bearer ${secret}`;
  if (!secret || Buffer.byteLength(received) !== Buffer.byteLength(expected) || !timingSafeEqual(Buffer.from(received), Buffer.from(expected))) throw createError({ statusCode: 401, message: "Unauthorized" });
  return await sweepRefunds();
});

export { processRefunds_post as default };
//# sourceMappingURL=process-refunds.post.mjs.map
