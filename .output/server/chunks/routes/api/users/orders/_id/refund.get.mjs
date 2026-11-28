import { d as defineEventHandler, aO as setHeader, fU as requireAuthenticatedMember, f as getRouterParam, b as db, M as orders, e as createError, fV as publicRefund, ax as getOrderRefund } from '../../../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const refund_get = defineEventHandler(async (event) => {
  setHeader(event, "cache-control", "no-store");
  const member = await requireAuthenticatedMember(event);
  const id = getRouterParam(event, "id") || "";
  const order = (await db.select({ id: orders.id }).from(orders).where(and(eq(orders.id, id), eq(orders.userId, member.id))).limit(1))[0];
  if (!order) throw createError({ statusCode: 404, message: "Order not found" });
  return { data: publicRefund(await getOrderRefund(id)) };
});

export { refund_get as default };
//# sourceMappingURL=refund.get.mjs.map
