import { d as defineEventHandler, $ as resolveClientIp, a0 as checkIpRateLimit, e as createError, bs as getUserSession, db as getCookie, r as readBody, dc as diagnoseTicketIssue, b as db, L as tickets, c6 as ticketMessages } from '../../nitro/nitro.mjs';
import crypto from 'node:crypto';
import 'drizzle-orm';
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

const ALLOWED_CATEGORIES = /* @__PURE__ */ new Set([
  "presales",
  "cooperation",
  "feedback",
  "technical",
  "billing",
  "account",
  "listing",
  "studio",
  "extension",
  "other"
]);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const index_post = defineEventHandler(async (event) => {
  const ip = resolveClientIp(event);
  const rate = checkIpRateLimit(`inquiries:create:${ip}`, { max: 8, windowMs: 10 * 6e4 });
  if (!rate.ok) {
    throw createError({
      statusCode: 429,
      statusMessage: "\u63D0\u4EA4\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"
    });
  }
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const userId = (user == null ? void 0 : user.id) ? Number(user.id) : null;
  const visitorCookie = getCookie(event, "apay_vid") || "";
  const body = await readBody(event).catch(() => ({}));
  const rawCategory = String(body.category || "presales").trim().toLowerCase();
  const category = ALLOWED_CATEGORIES.has(rawCategory) ? rawCategory : "other";
  const rawContent = String(body.content || "").trim();
  const rawTitle = String(body.title || "").trim();
  const rawContactName = String(body.contactName || "").trim();
  const rawContactEmail = String(body.contactEmail || "").trim().toLowerCase();
  const rawContactInfo = String(body.contactInfo || "").trim();
  const rawVisitorId = String(body.visitorId || visitorCookie || "").trim().slice(0, 64);
  const attachments = Array.isArray(body.attachments) ? body.attachments : null;
  if (!rawContent || rawContent.length < 2) {
    throw createError({ statusCode: 400, statusMessage: "\u8BF7\u586B\u5199\u5177\u4F53\u7684\u54A8\u8BE2\u6216\u7559\u8A00\u5185\u5BB9\uFF08\u81F3\u5C11 2 \u4E2A\u5B57\uFF09" });
  }
  if (rawContent.length > 2e3) {
    throw createError({ statusCode: 400, statusMessage: "\u7559\u8A00\u5185\u5BB9\u4E0D\u80FD\u8D85\u8FC7 2000 \u5B57" });
  }
  const contactEmail = rawContactEmail || ((user == null ? void 0 : user.email) ? String(user.email).trim().toLowerCase() : "");
  if (contactEmail && (!EMAIL_REGEX.test(contactEmail) || contactEmail.length > 190)) {
    throw createError({ statusCode: 400, statusMessage: "\u8BF7\u586B\u5199\u683C\u5F0F\u6B63\u786E\u7684\u8054\u7CFB\u90AE\u7BB1" });
  }
  const contactInfo = rawContactInfo.slice(0, 190);
  if (!userId && !contactEmail && !contactInfo) {
    throw createError({ statusCode: 400, statusMessage: "\u8BF7\u81F3\u5C11\u586B\u5199\u8054\u7CFB\u90AE\u7BB1\u6216\u5FAE\u4FE1\u53F7/\u5176\u4ED6\u8054\u7CFB\u65B9\u5F0F\uFF0C\u65B9\u4FBF\u6211\u4EEC\u56DE\u590D\u60A8" });
  }
  const contactName = (rawContactName || (user == null ? void 0 : user.nickName) || (user == null ? void 0 : user.nickname) || (contactEmail ? contactEmail.split("@")[0] : "") || "\u8BBF\u5BA2").slice(0, 80);
  const derivedTitle = rawTitle ? rawTitle.slice(0, 120) : rawContent.replace(/\s+/g, " ").slice(0, 42) + (rawContent.length > 42 ? "..." : "");
  const rawContext = body.context && typeof body.context === "object" && !Array.isArray(body.context) ? body.context : {};
  const context = {
    ...rawContext,
    sourcePath: typeof rawContext.sourcePath === "string" ? rawContext.sourcePath.slice(0, 255) : void 0,
    locale: typeof rawContext.locale === "string" ? rawContext.locale.slice(0, 16) : void 0,
    submittedAs: userId ? "member" : "guest"
  };
  const dateStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "");
  const randomSuffix = Math.floor(1e3 + Math.random() * 9e3);
  const ticketNo = `TK-${dateStr}-${randomSuffix}`;
  const accessToken = crypto.randomBytes(16).toString("hex");
  const diagnosis = diagnoseTicketIssue({
    category,
    title: derivedTitle,
    content: rawContent,
    context
  });
  const initialStatus = diagnosis.matched && diagnosis.suggestAutoResolved ? "auto_resolved" : "open";
  const finalPriority = diagnosis.suggestPriority || "normal";
  const lastRepliedBy = diagnosis.matched ? "bot" : "user";
  const [createdTicket] = await db.insert(tickets).values({
    ticketNo,
    userId: userId || null,
    visitorId: rawVisitorId || null,
    contactName: contactName || null,
    contactEmail: contactEmail || null,
    contactInfo: contactInfo || null,
    accessToken,
    category,
    title: derivedTitle,
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
    senderId: userId || null,
    senderName: contactName,
    content: rawContent,
    attachments,
    createdAt: /* @__PURE__ */ new Date()
  });
  if (diagnosis.matched && diagnosis.botReply) {
    await db.insert(ticketMessages).values({
      ticketId,
      senderType: "bot",
      senderId: null,
      senderName: "\u667A\u80FD\u8BCA\u65AD\u52A9\u624B",
      content: diagnosis.botReply,
      attachments: null,
      createdAt: new Date(Date.now() + 1e3)
    });
  }
  return {
    code: 200,
    message: "\u54A8\u8BE2\u63D0\u4EA4\u6210\u529F",
    data: {
      id: createdTicket == null ? void 0 : createdTicket.id,
      ticketNo,
      accessToken,
      title: derivedTitle,
      category,
      status: initialStatus,
      contactName,
      contactEmail,
      contactInfo,
      createdAt: (createdTicket == null ? void 0 : createdTicket.createdAt) || /* @__PURE__ */ new Date(),
      autoDiagnosed: diagnosis.matched,
      botReply: diagnosis.botReply || null
    }
  };
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
