import { d as defineEventHandler, f as getRouterParam, e as createError, b as db, b6 as tickets, r as readBody, b7 as ticketMessages, bb as notifications } from '../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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
  if (ticket.userId) {
    try {
      await db.insert(notifications).values({
        userId: ticket.userId,
        visitorId: null,
        type: "ticket_replied",
        title: "\u5DE5\u5355\u6536\u5230\u65B0\u56DE\u590D",
        message: `\u60A8\u7684\u5DE5\u5355 ${ticket.ticketNo}\uFF08${ticket.title}\uFF09\u5DF2\u6536\u5230\u5BA2\u670D\u4E13\u5458\u7684\u56DE\u590D\uFF0C\u8BF7\u524D\u5F80\u5DE5\u5355\u4E2D\u5FC3\u67E5\u770B\u3002`,
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
  return {
    code: 200,
    message: "\u56DE\u590D\u6210\u529F",
    data: createdMessage
  };
});

export { reply_post as default };
