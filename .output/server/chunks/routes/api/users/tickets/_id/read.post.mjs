import { d as defineEventHandler, d2 as requireTicketReadAccess, f as getRouterParam, r as readBody, d3 as advanceTicketRead } from '../../../../../nitro/nitro.mjs';
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

const read_post = defineEventHandler(async (event) => {
  const ticket = await requireTicketReadAccess(event, { id: Number(getRouterParam(event, "id")) });
  const body = await readBody(event);
  return { code: 200, data: await advanceTicketRead(ticket.id, "user", body == null ? void 0 : body.messageId) };
});

export { read_post as default };
//# sourceMappingURL=read.post.mjs.map
