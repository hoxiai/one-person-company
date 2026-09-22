import { d as defineEventHandler, aO as getUserSession, e as createError, r as readBody, cs as diagnoseTicketIssue, b as db, b6 as tickets, b7 as ticketMessages } from '../../../nitro/nitro.mjs';
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
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const index_post = defineEventHandler(async (event) => {
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = user == null ? void 0 : user.id;
  if (!userId) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }
  const body = await readBody(event);
  const title = String(body.title || "").trim();
  const content = String(body.content || "").trim();
  const category = String(body.category || "other").trim();
  const priority = String(body.priority || "normal").trim();
  const context = body.context && typeof body.context === "object" ? body.context : null;
  const attachments = Array.isArray(body.attachments) ? body.attachments : null;
  if (!title) {
    throw createError({ statusCode: 400, statusMessage: "\u5DE5\u5355\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  if (!content) {
    throw createError({ statusCode: 400, statusMessage: "\u5DE5\u5355\u5185\u5BB9\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  const dateStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "");
  const randomSuffix = Math.floor(1e3 + Math.random() * 9e3);
  const ticketNo = `TK-${dateStr}-${randomSuffix}`;
  const diagnosis = diagnoseTicketIssue({
    category,
    title,
    content,
    context
  });
  const initialStatus = diagnosis.matched && diagnosis.suggestAutoResolved ? "auto_resolved" : "open";
  const finalPriority = diagnosis.suggestPriority || priority;
  const lastRepliedBy = diagnosis.matched ? "bot" : "user";
  const userName = (user == null ? void 0 : user.nickName) || (user == null ? void 0 : user.nickname) || (user == null ? void 0 : user.email) || "\u7528\u6237";
  const [createdTicket] = await db.insert(tickets).values({
    ticketNo,
    userId,
    category,
    title,
    status: initialStatus,
    priority: finalPriority,
    context,
    lastRepliedAt: /* @__PURE__ */ new Date(),
    lastRepliedBy,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  }).returning();
  const ticketId = createdTicket == null ? void 0 : createdTicket.id;
  await db.insert(ticketMessages).values({
    ticketId,
    senderType: "user",
    senderId: userId,
    senderName: userName,
    content,
    attachments,
    createdAt: /* @__PURE__ */ new Date()
  });
  if (diagnosis.matched && diagnosis.botReply) {
    await db.insert(ticketMessages).values({
      ticketId,
      senderType: "bot",
      senderId: null,
      senderName: "\u8F7B\u94FAAI \u667A\u80FD\u8BCA\u65AD\u52A9\u624B",
      content: diagnosis.botReply,
      attachments: null,
      createdAt: new Date(Date.now() + 1e3)
      // 稍晚1秒体现先后次序
    });
  }
  return {
    code: 200,
    message: "\u5DE5\u5355\u63D0\u4EA4\u6210\u529F",
    data: {
      ...createdTicket,
      autoDiagnosed: diagnosis.matched
    }
  };
});

export { index_post as default };
