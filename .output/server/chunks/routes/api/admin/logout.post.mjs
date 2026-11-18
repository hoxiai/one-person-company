import { d as defineEventHandler, c as getRequestLocale, av as clearUserSession } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const logout_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  await clearUserSession(event);
  return { message: locale === "zh" ? "\u5DF2\u6210\u529F\u9000\u51FA\u767B\u5F55" : "Logged out successfully" };
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
