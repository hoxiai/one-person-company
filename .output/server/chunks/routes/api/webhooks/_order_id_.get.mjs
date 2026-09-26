import { d as defineEventHandler, cN as setHeader, f as getRouterParam, cs as setResponseStatus, b as db, v as orders } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import postHandler from './_order_id_.post.mjs';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

const QUERY_NOTIFY_METHODS = /* @__PURE__ */ new Set(["qixiangpay", "zpay"]);
const _order_id__get = defineEventHandler(async (event) => {
  var _a;
  setHeader(event, "cache-control", "no-store");
  const urlOrderId = getRouterParam(event, "order_id");
  if (!urlOrderId) {
    setResponseStatus(event, 400);
    return "Order ID is required";
  }
  const existing = await db.select({ payMethod: orders.payMethod }).from(orders).where(eq(orders.id, urlOrderId)).limit(1);
  const payMethod = String(((_a = existing[0]) == null ? void 0 : _a.payMethod) || "").trim().toLowerCase();
  if (!QUERY_NOTIFY_METHODS.has(payMethod)) {
    setResponseStatus(event, 405);
    return "Method Not Allowed";
  }
  return postHandler(event);
});

export { _order_id__get as default };
