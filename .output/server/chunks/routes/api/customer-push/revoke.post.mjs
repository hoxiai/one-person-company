import { d as defineEventHandler, ao as checkIpRateLimit, an as resolveClientIp, e as createError, r as readBody, b as db, d3 as customerPushDevices, d2 as pushHash } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const revoke_post = defineEventHandler(async (event) => {
  const rate = checkIpRateLimit(`customer-push:revoke:${resolveClientIp(event)}`, { max: 30, windowMs: 6e4 });
  if (!rate.ok) throw createError({ statusCode: 429, statusMessage: "Too many requests" });
  const body = await readBody(event);
  const secret = body && typeof body === "object" && "revokeToken" in body ? body.revokeToken : "";
  if (typeof secret !== "string" || !/^[a-f0-9]{64}$/.test(secret)) throw createError({ statusCode: 400, statusMessage: "Invalid revocation" });
  await db.delete(customerPushDevices).where(eq(customerPushDevices.revokeHash, pushHash(secret)));
  return { code: 200, data: { removed: true } };
});

export { revoke_post as default };
//# sourceMappingURL=revoke.post.mjs.map
