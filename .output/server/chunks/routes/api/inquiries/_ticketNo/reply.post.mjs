import { d as defineEventHandler, $ as resolveClientIp, a0 as checkIpRateLimit, e as createError, f as getRouterParam, r as readBody, g as getQuery, bs as getUserSession, b as db, L as tickets, c6 as ticketMessages } from '../../../../nitro/nitro.mjs';
import crypto from 'node:crypto';
import { eq } from 'drizzle-orm';
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
const reply_post = defineEventHandler(async (event) => {
  var _a;
  const ip = resolveClientIp(event);
  const rate = checkIpRateLimit(`inquiries:reply:${ip}`, { max: 15, windowMs: 10 * 6e4 });
  if (!rate.ok) {
    throw createError({ statusCode: 429, statusMessage: "\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5" });
  }
  const ticketNo = String(getRouterParam(event, "ticketNo") || "").trim().toUpperCase();
  if (!ticketNo || !/^TK-\d{8}-\d{4}$/.test(ticketNo)) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u54A8\u8BE2\u5355\u53F7" });
  }
  const body = await readBody(event).catch(() => ({}));
  const query = getQuery(event);
  const token = String(body.token || query.token || "").trim();
  const content = String(body.content || "").trim();
  const attachments = Array.isArray(body.attachments) ? body.attachments : null;
  if (!content) {
    throw createError({ statusCode: 400, statusMessage: "\u56DE\u590D\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  if (content.length > 2e3) {
    throw createError({ statusCode: 400, statusMessage: "\u56DE\u590D\u5185\u5BB9\u4E0D\u80FD\u8D85\u8FC7 2000 \u5B57" });
  }
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = (user == null ? void 0 : user.id) ? Number(user.id) : null;
  const userEmail = (user == null ? void 0 : user.email) ? String(user.email).trim().toLowerCase() : "";
  const [ticket] = await db.select().from(tickets).where(eq(tickets.ticketNo, ticketNo)).limit(1);
  if (!ticket) {
    throw createError({ statusCode: 404, statusMessage: "\u54A8\u8BE2\u8BB0\u5F55\u4E0D\u5B58\u5728" });
  }
  const isOwnerBySession = Boolean(
    userId && (ticket.userId === userId || !ticket.userId && userEmail && ((_a = ticket.contactEmail) == null ? void 0 : _a.toLowerCase()) === userEmail)
  );
  const isOwnerByToken = tokensMatch(ticket.accessToken, token);
  if (!isOwnerBySession && !isOwnerByToken) {
    throw createError({ statusCode: 403, statusMessage: "\u65E0\u6743\u56DE\u590D\u8BE5\u54A8\u8BE2\u8BB0\u5F55" });
  }
  if (ticket.status === "closed") {
    throw createError({ statusCode: 400, statusMessage: "\u8BE5\u54A8\u8BE2\u5355\u5DF2\u5173\u95ED\uFF0C\u8BF7\u53D1\u8D77\u65B0\u7684\u7559\u8A00\u54A8\u8BE2" });
  }
  const senderName = (user == null ? void 0 : user.nickName) || (user == null ? void 0 : user.nickname) || ticket.contactName || (userEmail ? userEmail.split("@")[0] : "\u8BBF\u5BA2");
  const [createdMessage] = await db.insert(ticketMessages).values({
    ticketId: ticket.id,
    senderType: "user",
    senderId: userId || ticket.userId || null,
    senderName,
    content,
    attachments,
    createdAt: /* @__PURE__ */ new Date()
  }).returning();
  const nextStatus = ticket.status === "resolved" || ticket.status === "auto_resolved" ? "in_progress" : ticket.status;
  await db.update(tickets).set({
    ...userId && !ticket.userId ? { userId } : {},
    status: nextStatus,
    lastRepliedAt: /* @__PURE__ */ new Date(),
    lastRepliedBy: "user",
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(tickets.id, ticket.id));
  return {
    code: 200,
    message: "\u56DE\u590D\u6210\u529F",
    data: createdMessage
  };
});

export { reply_post as default };
//# sourceMappingURL=reply.post.mjs.map
