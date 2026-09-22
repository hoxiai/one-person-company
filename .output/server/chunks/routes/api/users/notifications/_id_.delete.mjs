import { d as defineEventHandler, c as getRequestLocale, aO as getUserSession, f as getRouterParam, e as createError, bb as notifications, b_ as getCookie, b as db } from '../../../../nitro/nitro.mjs';
import { eq, and } from 'drizzle-orm';
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

const _id__delete = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const session = await getUserSession(event).catch(() => null);
  const userId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  const notificationId = parseInt(getRouterParam(event, "id") || "0");
  if (!notificationId) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u65E0\u6548\u7684\u901A\u77E5 ID" : "Invalid notification ID" });
  }
  const conditions = [eq(notifications.id, notificationId)];
  if (userId) {
    conditions.push(eq(notifications.userId, userId));
  } else {
    const visitorId = getCookie(event, "visitorId") || "";
    if (visitorId) {
      conditions.push(eq(notifications.visitorId, visitorId));
    } else {
      throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
    }
  }
  await db.delete(notifications).where(and(...conditions));
  return { ok: true };
});

export { _id__delete as default };
