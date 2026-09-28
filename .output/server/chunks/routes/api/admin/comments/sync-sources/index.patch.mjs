import { d as defineEventHandler, e as createError, r as readBody, b as db, w as commentSyncSources } from '../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const index_patch = defineEventHandler(async (event) => {
  var _a;
  const id = parseInt(((_a = event.context.params) == null ? void 0 : _a.id) || "", 10);
  if (!id || id <= 0) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u540C\u6B65\u6E90 ID" });
  }
  const body = await readBody(event);
  const updates = { updatedAt: /* @__PURE__ */ new Date() };
  if (typeof body.autoSync === "boolean") {
    updates.autoSync = body.autoSync;
  }
  if (typeof body.syncInterval === "number" && body.syncInterval >= 5) {
    updates.syncInterval = body.syncInterval;
  }
  if (body.defaultStatus === "approved" || body.defaultStatus === "pending") {
    updates.defaultStatus = body.defaultStatus;
  }
  await db.update(commentSyncSources).set(updates).where(eq(commentSyncSources.id, id));
  return { success: true };
});

export { index_patch as default };
