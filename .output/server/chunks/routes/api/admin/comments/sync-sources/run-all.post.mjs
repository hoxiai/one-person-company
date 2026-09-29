import { d as defineEventHandler, y as runAutoCommentSync } from '../../../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import '@libsql/client';
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

const runAll_post = defineEventHandler(async () => {
  const results = await runAutoCommentSync();
  return {
    success: true,
    data: results,
    message: `\u5DF2\u6267\u884C\u6279\u91CF\u540C\u6B65\uFF0C\u5171\u5904\u7406 ${results.length} \u4E2A\u540C\u6B65\u6E90`
  };
});

export { runAll_post as default };
