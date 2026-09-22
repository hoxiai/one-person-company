import { d as defineEventHandler, c as getRequestLocale, aO as getUserSession, e as createError } from '../../../nitro/nitro.mjs';
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

const session_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const session = await getUserSession(event).catch(() => null);
  if (!(session == null ? void 0 : session.admin)) {
    throw createError({
      statusCode: 401,
      statusMessage: locale === "zh" ? "\u672A\u6388\u6743\uFF1A\u9700\u8981\u7BA1\u7406\u5458\u6743\u9650" : "Unauthorized: Admin access required"
    });
  }
  return {
    admin: session.admin
  };
});

export { session_get as default };
