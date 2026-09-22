import { d as defineEventHandler, aO as getUserSession, e as createError, f as getRouterParam, b as db, b6 as tickets, b7 as ticketMessages } from '../../../../nitro/nitro.mjs';
import { and, eq, asc } from 'drizzle-orm';
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

const _id__get = defineEventHandler(async (event) => {
  var _a;
  const session = await getUserSession(event).catch(() => null);
  const userId = (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id;
  if (!userId) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const idParam = getRouterParam(event, "id");
  const ticketId = parseInt(idParam, 10);
  if (!ticketId || isNaN(ticketId)) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u5DE5\u5355 ID" });
  }
  const [ticket] = await db.select().from(tickets).where(and(eq(tickets.id, ticketId), eq(tickets.userId, userId)));
  if (!ticket) {
    throw createError({ statusCode: 404, statusMessage: "\u5DE5\u5355\u4E0D\u5B58\u5728\u6216\u65E0\u6743\u67E5\u770B" });
  }
  const messages = await db.select().from(ticketMessages).where(eq(ticketMessages.ticketId, ticketId)).orderBy(asc(ticketMessages.createdAt));
  return {
    code: 200,
    data: {
      ticket,
      messages
    }
  };
});

export { _id__get as default };
