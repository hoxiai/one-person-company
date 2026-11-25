import { d as defineEventHandler, aO as setHeader, fS as requireAuthenticatedMember, f as getRouterParam, r as readBody, e as createError, fT as publicRefund, aQ as requestOrderRefund } from '../../../../../nitro/nitro.mjs';
import { z } from 'zod';
import 'drizzle-orm';
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

const refund_post = defineEventHandler(async (event) => {
  setHeader(event, "cache-control", "no-store");
  const member = await requireAuthenticatedMember(event);
  const id = getRouterParam(event, "id") || "";
  const body = z.object({ reason: z.string().trim().min(1).max(500) }).strict().safeParse(await readBody(event));
  if (!body.success) throw createError({ statusCode: 400, message: "Refund reason must contain 1\u2013500 characters" });
  return { data: publicRefund(await requestOrderRefund(id, body.data.reason, { userId: member.id })) };
});

export { refund_post as default };
//# sourceMappingURL=refund.post.mjs.map
