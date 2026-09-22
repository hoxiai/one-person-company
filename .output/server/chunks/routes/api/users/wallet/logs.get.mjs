import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, g as getQuery, cx as listBalanceLogs } from '../../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const logs_get = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const session = await requireUserSession(event);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id)) {
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u767B\u5F55" : "Unauthorized" });
  }
  const query = getQuery(event);
  const balanceType = String(query.balanceType || "");
  const result = await listBalanceLogs({
    userId: Number(session.user.id),
    page: Number(query.page || 1),
    pageSize: Number(query.pageSize || 20),
    balanceType: balanceType === "cash" || balanceType === "grant" ? balanceType : "",
    actionType: String(query.actionType || "")
  });
  return { code: 0, data: result };
});

export { logs_get as default };
