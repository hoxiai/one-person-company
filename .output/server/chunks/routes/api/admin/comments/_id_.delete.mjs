import { d as defineEventHandler, f as getRouterParam, e as createError, b as db, o as comments } from '../../../../nitro/nitro.mjs';
import { or, eq } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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
  const id = Number(getRouterParam(event, "id"));
  if (!id || isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: "\u975E\u6CD5\u7684\u8BC4\u8BBA ID" });
  }
  await db.delete(comments).where(or(eq(comments.id, id), eq(comments.parentId, id)));
  return {
    success: true,
    data: { id }
  };
});

export { _id__delete as default };
