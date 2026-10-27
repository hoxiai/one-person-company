import { d as defineEventHandler, f as getRouterParam, e as createError, b as db, L as tickets, r as readBody, c6 as ticketMessages, cd as notifications, u as users, b1 as settings, ce as getRequestURL, Y as sendEmail } from '../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const reply_post = defineEventHandler(async (event) => {
  var _a;
  const admin = event.context.admin;
  const adminId = admin == null ? void 0 : admin.id;
  const adminUsername = (admin == null ? void 0 : admin.username) || "\u5BA2\u670D\u4E13\u5BB6";
  const idParam = getRouterParam(event, "id");
  const ticketId = parseInt(idParam, 10);
  if (!ticketId || isNaN(ticketId)) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u5DE5\u5355 ID" });
  }
  const [ticket] = await db.select().from(tickets).where(eq(tickets.id, ticketId));
  if (!ticket) {
    throw createError({ statusCode: 404, statusMessage: "\u5DE5\u5355\u4E0D\u5B58\u5728" });
  }
  const body = await readBody(event);
  const content = String(body.content || "").trim();
  const attachments = Array.isArray(body.attachments) ? body.attachments : null;
  const statusAfterReply = typeof body.status === "string" && body.status.trim() ? body.status.trim() : null;
  if (!content) {
    throw createError({ statusCode: 400, statusMessage: "\u56DE\u590D\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" });
  }
  const [createdMessage] = await db.insert(ticketMessages).values({
    ticketId,
    senderType: "admin",
    senderId: adminId || null,
    senderName: adminUsername,
    content,
    attachments,
    createdAt: /* @__PURE__ */ new Date()
  }).returning();
  let targetStatus = ticket.status;
  if (statusAfterReply && ["in_progress", "resolved", "closed"].includes(statusAfterReply)) {
    targetStatus = statusAfterReply;
  } else if (ticket.status === "open") {
    targetStatus = "in_progress";
  }
  await db.update(tickets).set({
    status: targetStatus,
    lastRepliedAt: /* @__PURE__ */ new Date(),
    lastRepliedBy: "admin",
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(tickets.id, ticketId));
  if (ticket.userId || ticket.visitorId) {
    try {
      await db.insert(notifications).values({
        userId: ticket.userId || null,
        visitorId: ticket.userId ? null : ticket.visitorId || null,
        type: "ticket_replied",
        title: "\u54A8\u8BE2/\u5DE5\u5355\u6536\u5230\u65B0\u56DE\u590D",
        message: `\u60A8\u7684\u54A8\u8BE2\u5355 ${ticket.ticketNo}\uFF08${ticket.title}\uFF09\u5DF2\u6536\u5230\u56DE\u590D\uFF0C\u8BF7\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5\u3002`,
        data: {
          ticketId: ticket.id,
          ticketNo: ticket.ticketNo,
          targetPath: "/user/tickets"
        },
        isRead: false,
        createdAt: /* @__PURE__ */ new Date()
      });
    } catch (e) {
      console.error("[Ticket Notification Error]", e);
    }
  }
  try {
    let recipientEmail = ticket.contactEmail ? String(ticket.contactEmail).trim() : "";
    let recipientName = ticket.contactName ? String(ticket.contactName).trim() : "";
    if (ticket.userId && (!recipientEmail || !recipientName)) {
      const [userRow] = await db.select({ email: users.email, nickname: users.nickname }).from(users).where(eq(users.id, ticket.userId)).limit(1);
      if (!recipientEmail && (userRow == null ? void 0 : userRow.email)) recipientEmail = userRow.email;
      if (!recipientName && (userRow == null ? void 0 : userRow.nickname)) recipientName = userRow.nickname;
    }
    if (recipientEmail) {
      const siteSettingRows = await db.select().from(settings).where(eq(settings.key, "site_name")).limit(1);
      const siteName = ((_a = siteSettingRows[0]) == null ? void 0 : _a.value) || "APay";
      const reqUrl = getRequestURL(event);
      const siteUrl = `${reqUrl.protocol}//${reqUrl.host}`;
      const contextObj = ticket.context && typeof ticket.context === "object" ? ticket.context : {};
      const locale = typeof contextObj.locale === "string" && contextObj.locale.startsWith("en") ? "en" : "zh";
      const ticketUrl = ticket.accessToken ? `${siteUrl}/?inquiry=${encodeURIComponent(ticket.ticketNo)}&token=${encodeURIComponent(ticket.accessToken)}` : `${siteUrl}/user/tickets`;
      void sendEmail({
        to: recipientEmail,
        templateCode: "ticket_reply",
        locale,
        variables: {
          nickname: recipientName || recipientEmail.split("@")[0] || "\u7528\u6237",
          ticket_no: ticket.ticketNo,
          ticket_title: ticket.title,
          reply_content: content,
          ticket_url: ticketUrl,
          site_name: siteName,
          site_url: siteUrl
        }
      }).catch((err) => {
        console.error("[Ticket Email Notification Error]", err);
      });
    }
  } catch (emailErr) {
    console.error("[Ticket Email Notification Error]", emailErr);
  }
  return {
    code: 200,
    message: "\u56DE\u590D\u6210\u529F",
    data: createdMessage
  };
});

export { reply_post as default };
//# sourceMappingURL=reply.post.mjs.map
