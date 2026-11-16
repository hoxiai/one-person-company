import { d as defineEventHandler, d_ as requireUserSession, e as createError, d5 as uploadTicketAttachment } from '../../../../nitro/nitro.mjs';
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

const upload_post = defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);
  if (!(user == null ? void 0 : user.id)) throw createError({ statusCode: 401, message: "User access required" });
  return uploadTicketAttachment(event, `user-${user.id}`);
});

export { upload_post as default };
//# sourceMappingURL=upload.post.mjs.map
