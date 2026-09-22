import { d as defineEventHandler, aO as getUserSession, e as createError, f as getRouterParam, b as db, b6 as tickets, r as readBody, b7 as ticketMessages } from '../../../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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

const reply_post = defineEventHandler(async (event) => {
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = user == null ? void 0 : user.id;
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
    throw createError({ statusCode: 404, statusMessage: "\u5DE5\u5355\u4E0D\u5B58\u5728\u6216\u65E0\u6743\u64CD\u4F5C" });
  }
  if (ticket.status === "closed") {
    throw createError({ statusCode: 400, statusMessage: "\u8BE5\u5DE5\u5355\u5DF2\u5F7B\u5E95\u5173\u95ED\uFF0C\u8BF7\u91CD\u65B0\u63D0\u4EA4\u65B0\u5DE5\u5355" });
  }
  const body = await readBody(event);
  const content = String(body.content || "").trim();
  const attachments = Array.isArray(body.attachments) ? body.attachments : null;
  if (!content) {
    throw createError({ statusCode: 400, statusMessage: "\u56DE\u590D\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  const userName = (user == null ? void 0 : user.nickName) || (user == null ? void 0 : user.nickname) || (user == null ? void 0 : user.email) || "\u7528\u6237";
  const [createdMessage] = await db.insert(ticketMessages).values({
    ticketId,
    senderType: "user",
    senderId: userId,
    senderName: userName,
    content,
    attachments,
    createdAt: /* @__PURE__ */ new Date()
  }).returning();
  const newStatus = ticket.status === "resolved" || ticket.status === "auto_resolved" ? "in_progress" : ticket.status;
  await db.update(tickets).set({
    status: newStatus,
    lastRepliedAt: /* @__PURE__ */ new Date(),
    lastRepliedBy: "user",
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(tickets.id, ticketId));
  return {
    code: 200,
    message: "\u56DE\u590D\u6210\u529F",
    data: createdMessage
  };
});

export { reply_post as default };
