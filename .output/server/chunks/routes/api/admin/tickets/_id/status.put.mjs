import { d as defineEventHandler, f as getRouterParam, e as createError, b as db, b6 as tickets, r as readBody, b7 as ticketMessages } from '../../../../../nitro/nitro.mjs';
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

const status_put = defineEventHandler(async (event) => {
  const admin = event.context.admin;
  const adminUsername = (admin == null ? void 0 : admin.username) || "\u7BA1\u7406\u5458";
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
  const status = typeof body.status === "string" && body.status.trim() ? body.status.trim() : null;
  const priority = typeof body.priority === "string" && body.priority.trim() ? body.priority.trim() : null;
  const updates = {
    updatedAt: /* @__PURE__ */ new Date()
  };
  const actions = [];
  if (status && ["open", "in_progress", "auto_resolved", "resolved", "closed"].includes(status) && status !== ticket.status) {
    updates.status = status;
    const statusLabels = {
      open: "\u5F85\u5904\u7406",
      in_progress: "\u5904\u7406\u4E2D",
      auto_resolved: "\u5DF2\u81EA\u52A8\u89E3\u51B3",
      resolved: "\u5DF2\u89E3\u51B3",
      closed: "\u5DF2\u5173\u95ED"
    };
    actions.push(`\u72B6\u6001\u66F4\u65B0\u4E3A\u300C${statusLabels[status] || status}\u300D`);
  }
  if (priority && ["low", "normal", "high", "urgent"].includes(priority) && priority !== ticket.priority) {
    updates.priority = priority;
    const priorityLabels = {
      low: "\u4F4E",
      normal: "\u666E\u901A",
      high: "\u9AD8",
      urgent: "\u7D27\u6025"
    };
    actions.push(`\u4F18\u5148\u7EA7\u8C03\u6574\u4E3A\u300C${priorityLabels[priority] || priority}\u300D`);
  }
  if (Object.keys(updates).length > 1) {
    await db.update(tickets).set(updates).where(eq(tickets.id, ticketId));
    if (actions.length > 0) {
      await db.insert(ticketMessages).values({
        ticketId,
        senderType: "system",
        senderId: (admin == null ? void 0 : admin.id) || null,
        senderName: "\u7CFB\u7EDF\u8BB0\u5F55",
        content: `\u7BA1\u7406\u5458 ${adminUsername} \u5C06\u5DE5\u5355 ${actions.join("\uFF0C")}`,
        attachments: null,
        createdAt: /* @__PURE__ */ new Date()
      });
    }
  }
  return {
    code: 200,
    message: "\u66F4\u65B0\u6210\u529F",
    data: { id: ticketId, ...updates }
  };
});

export { status_put as default };
