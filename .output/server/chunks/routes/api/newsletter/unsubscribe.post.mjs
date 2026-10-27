import { d as defineEventHandler, g as getQuery, r as readBody, e as createError, dq as resubscribeByToken, dr as unsubscribeByToken } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const unsubscribe_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const query = getQuery(event);
  const body = await readBody(event).catch(() => ({}));
  const token = String((body == null ? void 0 : body.token) || (query == null ? void 0 : query.token) || "").trim();
  const action = String((body == null ? void 0 : body.action) || (query == null ? void 0 : query.action) || "unsubscribe").trim().toLowerCase();
  if (!token) {
    throw createError({ statusCode: 400, statusMessage: "Missing unsubscribe token." });
  }
  const res = action === "resubscribe" ? await resubscribeByToken(token) : await unsubscribeByToken(token);
  if (!res.ok) {
    throw createError({ statusCode: 404, statusMessage: "Subscriber not found." });
  }
  return {
    ok: true,
    code: 0,
    status: (_a = res.subscriber) == null ? void 0 : _a.status,
    target: (_b = res.subscriber) == null ? void 0 : _b.target,
    topic: (_c = res.subscriber) == null ? void 0 : _c.topic
  };
});

export { unsubscribe_post as default };
//# sourceMappingURL=unsubscribe.post.mjs.map
