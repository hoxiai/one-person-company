import { d as defineEventHandler, b as db, av as settings } from '../../nitro/nitro.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const SECRET_KEYS = /* @__PURE__ */ new Set([
  "integration_token",
  "ai_api_key",
  "webhook_secret",
  "email_provider_config_json",
  "email_provider_send_script",
  "qingpu_ainode_tenant_token",
  "qingpu_ainode_base_url"
]);
const settings_get = defineEventHandler(async (event) => {
  const rows = await db.select().from(settings);
  return rows.filter((row) => !SECRET_KEYS.has(row.key));
});

export { settings_get as default };
