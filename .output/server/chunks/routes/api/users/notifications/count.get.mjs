import { d as defineEventHandler, aO as getUserSession, bb as notifications, b_ as getCookie, b as db } from '../../../../nitro/nitro.mjs';
import { eq, count, and } from 'drizzle-orm';
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

const count_get = defineEventHandler(async (event) => {
  var _a, _b;
  const session = await getUserSession(event).catch(() => null);
  const userId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  const conditions = [];
  if (userId) {
    conditions.push(eq(notifications.userId, userId));
  } else {
    const visitorId = getCookie(event, "visitorId") || "";
    if (visitorId) {
      conditions.push(eq(notifications.visitorId, visitorId));
    } else {
      return { unreadCount: 0 };
    }
  }
  conditions.push(eq(notifications.isRead, false));
  const result = await db.select({ value: count() }).from(notifications).where(and(...conditions));
  return { unreadCount: ((_b = result[0]) == null ? void 0 : _b.value) || 0 };
});

export { count_get as default };
