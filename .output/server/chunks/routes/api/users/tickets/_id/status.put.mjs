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

const status_put = defineEventHandler(async (event) => {
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
  const body = await readBody(event);
  const status = String(body.status || "").trim();
  if (!["resolved", "closed"].includes(status)) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u72B6\u6001\u53D8\u66F4\u64CD\u4F5C" });
  }
  await db.update(tickets).set({
    status,
    lastRepliedAt: /* @__PURE__ */ new Date(),
    lastRepliedBy: "user",
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(tickets.id, ticketId));
  const actionText = status === "resolved" ? "\u7528\u6237\u5DF2\u786E\u8BA4\u95EE\u9898\u89E3\u51B3" : "\u7528\u6237\u4E3B\u52A8\u5173\u95ED\u4E86\u5DE5\u5355";
  await db.insert(ticketMessages).values({
    ticketId,
    senderType: "system",
    senderId: userId,
    senderName: "\u7CFB\u7EDF\u901A\u77E5",
    content: actionText,
    attachments: null,
    createdAt: /* @__PURE__ */ new Date()
  });
  return {
    code: 200,
    message: "\u72B6\u6001\u66F4\u65B0\u6210\u529F",
    data: { id: ticketId, status }
  };
});

export { status_put as default };
