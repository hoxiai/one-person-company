import { d as defineEventHandler, bs as getUserSession, e as createError, f as getRouterParam, L as tickets, b as db, c6 as ticketMessages } from '../../../../nitro/nitro.mjs';
import { or, eq, and, asc } from 'drizzle-orm';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const _id__get = defineEventHandler(async (event) => {
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = user == null ? void 0 : user.id;
  const userEmail = (user == null ? void 0 : user.email) ? String(user.email).trim().toLowerCase() : "";
  if (!userId) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const idParam = getRouterParam(event, "id");
  const ticketId = parseInt(idParam, 10);
  if (!ticketId || isNaN(ticketId)) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u5DE5\u5355 ID" });
  }
  const ownerCondition = userEmail ? or(eq(tickets.userId, userId), eq(tickets.contactEmail, userEmail)) : eq(tickets.userId, userId);
  const [ticket] = await db.select().from(tickets).where(and(eq(tickets.id, ticketId), ownerCondition));
  if (!ticket) {
    throw createError({ statusCode: 404, statusMessage: "\u5DE5\u5355\u4E0D\u5B58\u5728\u6216\u65E0\u6743\u67E5\u770B" });
  }
  const messages = await db.select().from(ticketMessages).where(eq(ticketMessages.ticketId, ticketId)).orderBy(asc(ticketMessages.createdAt));
  const { accessToken: _omit, ...safeTicket } = ticket;
  return {
    code: 200,
    data: {
      ticket: safeTicket,
      messages
    }
  };
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
