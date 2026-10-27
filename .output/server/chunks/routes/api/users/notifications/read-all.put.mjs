import { d as defineEventHandler, c as getRequestLocale, bs as getUserSession, cd as notifications, db as getCookie, e as createError, b as db } from '../../../../nitro/nitro.mjs';
import { eq, isNull, and } from 'drizzle-orm';
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

const readAll_put = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const session = await getUserSession(event).catch(() => null);
  const userId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  const conditions = [];
  if (userId) {
    conditions.push(eq(notifications.userId, userId));
  } else {
    const visitorId = getCookie(event, "visitor_id") || getCookie(event, "visitorId") || "";
    if (visitorId) {
      conditions.push(eq(notifications.visitorId, visitorId), isNull(notifications.userId));
    } else {
      throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
    }
  }
  conditions.push(eq(notifications.isRead, false));
  await db.update(notifications).set({ isRead: true }).where(and(...conditions));
  return { ok: true };
});

export { readAll_put as default };
//# sourceMappingURL=read-all.put.mjs.map
