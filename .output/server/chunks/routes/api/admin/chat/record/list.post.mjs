import { d as defineEventHandler, r as readBody, g as getQuery, e as createError, b as db, v as tickets, y as ticketMessages, z as normalizeTicketAttachments, C as ticketReadSnapshot } from '../../../../../nitro/nitro.mjs';
import { eq, asc } from 'drizzle-orm';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const list_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  const body = await readBody(event).catch(() => ({}));
  const query = getQuery(event);
  const chatId = Math.trunc(Number((_d = (_c = (_b = (_a = body == null ? void 0 : body.chatId) != null ? _a : body == null ? void 0 : body.id) != null ? _b : query.chatId) != null ? _c : query.id) != null ? _d : 0));
  if (!Number.isFinite(chatId) || chatId <= 0) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u4F1A\u8BDD ID" });
  }
  const [ticket] = await db.select({ id: tickets.id, ticketNo: tickets.ticketNo, status: tickets.status }).from(tickets).where(eq(tickets.id, chatId)).limit(1);
  if (!ticket) {
    throw createError({ statusCode: 404, statusMessage: "\u4F1A\u8BDD\u4E0D\u5B58\u5728" });
  }
  const messages = await db.select().from(ticketMessages).where(eq(ticketMessages.ticketId, chatId)).orderBy(asc(ticketMessages.createdAt));
  const list = messages.map((msg) => {
    const senderType = msg.senderType === "admin" ? "store" : msg.senderType === "bot" ? "ai" : msg.senderType === "user" ? "visitor" : msg.senderType;
    const storedTime = msg.createdAt;
    const createdAt = storedTime instanceof Date ? storedTime.toISOString() : String(storedTime || "");
    const attachments = normalizeTicketAttachments(msg.attachments);
    const isImageOnly = Boolean(
      (attachments == null ? void 0 : attachments.length) && (!msg.content || msg.content === "[\u56FE\u7247\u9644\u4EF6]")
    );
    return {
      id: msg.id,
      chatId: msg.ticketId,
      senderType,
      rawSenderType: msg.senderType,
      senderName: msg.senderName,
      content: isImageOnly ? attachments[0].url : msg.content,
      type: isImageOnly ? "image" : "text",
      attachments,
      createdAt
    };
  });
  const receipt = await ticketReadSnapshot(chatId, "admin");
  return {
    code: 200,
    data: {
      list,
      ticketNo: ticket.ticketNo,
      status: ticket.status,
      ...receipt
    }
  };
});

export { list_post as default };
//# sourceMappingURL=list.post.mjs.map
