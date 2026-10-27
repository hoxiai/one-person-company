import { d as defineEventHandler, f as getRouterParam, e as createError, g as getQuery, bs as getUserSession, b as db, L as tickets, c6 as ticketMessages } from '../../../nitro/nitro.mjs';
import crypto from 'node:crypto';
import { eq, asc } from 'drizzle-orm';
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

function tokensMatch(expected, provided) {
  if (!expected || !provided) return false;
  const a = Buffer.from(String(expected));
  const b = Buffer.from(String(provided));
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
const _ticketNo__get = defineEventHandler(async (event) => {
  var _a;
  const ticketNo = String(getRouterParam(event, "ticketNo") || "").trim().toUpperCase();
  if (!ticketNo || !/^TK-\d{8}-\d{4}$/.test(ticketNo)) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u54A8\u8BE2\u5355\u53F7" });
  }
  const query = getQuery(event);
  const token = typeof query.token === "string" ? query.token.trim() : "";
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = (user == null ? void 0 : user.id) ? Number(user.id) : null;
  const userEmail = (user == null ? void 0 : user.email) ? String(user.email).trim().toLowerCase() : "";
  const [ticket] = await db.select().from(tickets).where(eq(tickets.ticketNo, ticketNo)).limit(1);
  if (!ticket) {
    throw createError({ statusCode: 404, statusMessage: "\u672A\u627E\u5230\u8BE5\u54A8\u8BE2\u8BB0\u5F55" });
  }
  const isOwnerBySession = Boolean(
    userId && (ticket.userId === userId || !ticket.userId && userEmail && ((_a = ticket.contactEmail) == null ? void 0 : _a.toLowerCase()) === userEmail)
  );
  const isOwnerByToken = tokensMatch(ticket.accessToken, token);
  if (!isOwnerBySession && !isOwnerByToken) {
    throw createError({ statusCode: 403, statusMessage: "\u65E0\u6743\u67E5\u770B\u8BE5\u54A8\u8BE2\u8BB0\u5F55" });
  }
  const messages = await db.select().from(ticketMessages).where(eq(ticketMessages.ticketId, ticket.id)).orderBy(asc(ticketMessages.createdAt));
  const { accessToken: _omit, ...safeTicket } = ticket;
  return {
    code: 200,
    data: {
      ticket: safeTicket,
      messages
    }
  };
});

export { _ticketNo__get as default };
//# sourceMappingURL=_ticketNo_.get.mjs.map
