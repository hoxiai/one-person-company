import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, L as eventRules } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const _id_ = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = Number(getRouterParam(event, "id"));
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: locale === "zh" ? "\u65E0\u6548\u7684 ID" : "Invalid id" });
  }
  if (event.method === "PUT") {
    const body = await readBody(event);
    const patch = { updatedAt: /* @__PURE__ */ new Date() };
    if ((body == null ? void 0 : body.event) !== void 0) patch.event = String(body.event).trim();
    if ((body == null ? void 0 : body.action) !== void 0) patch.action = String(body.action).trim();
    if ((body == null ? void 0 : body.config) !== void 0) patch.config = body.config;
    if ((body == null ? void 0 : body.enabled) !== void 0) patch.enabled = Boolean(body.enabled);
    if ((body == null ? void 0 : body.remark) !== void 0) patch.remark = body.remark ? String(body.remark) : null;
    await db.update(eventRules).set(patch).where(eq(eventRules.id, id));
    return { ok: true };
  }
  if (event.method === "DELETE") {
    await db.delete(eventRules).where(eq(eventRules.id, id));
    return { ok: true };
  }
  throw createError({ statusCode: 405, statusMessage: locale === "zh" ? "\u8BF7\u6C42\u65B9\u6CD5\u4E0D\u5141\u8BB8" : "Method Not Allowed" });
});

export { _id_ as default };
