import { d as defineEventHandler, f as getRouterParam, fu as getPublishedThemeBySlug, e as createError } from '../../../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

const _slug__get = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  const item = await getPublishedThemeBySlug(slug);
  if (!item) {
    throw createError({ statusCode: 404, statusMessage: "Theme not found" });
  }
  return item;
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
