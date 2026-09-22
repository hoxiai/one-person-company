import { d as defineEventHandler, f as getRouterParam, e as createError, b as db, b6 as tickets, r as readBody, ba as changeBalance, b7 as ticketMessages, bb as notifications } from '../../../../../nitro/nitro.mjs';
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

const compensation_post = defineEventHandler(async (event) => {
  const admin = event.context.admin;
  const adminId = admin == null ? void 0 : admin.id;
  const adminUsername = (admin == null ? void 0 : admin.username) || "\u5BA2\u670D\u7BA1\u7406\u5458";
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
  const amount = Math.abs(Number(body.amount || 0));
  const balanceType = body.balanceType === "cash" ? "cash" : "grant";
  const reason = String(body.reason || "\u5DE5\u5355\u95EE\u9898\u6838\u5B9E\u8865\u507F").trim();
  if (!(amount > 0)) {
    throw createError({ statusCode: 400, statusMessage: "\u8865\u507F\u91D1\u989D\u6216\u70B9\u6570\u5FC5\u987B\u5927\u4E8E 0" });
  }
  const eventId = `ticket-comp:${ticket.id}:${Date.now()}`;
  const balanceResult = await changeBalance({
    userId: ticket.userId,
    balanceType,
    amount,
    direction: "credit",
    eventId,
    actionType: "admin_recharge",
    sourceType: "admin",
    sourceId: String(ticket.id),
    operatorAdminId: adminId != null ? adminId : null,
    operatorName: adminUsername,
    remark: `[\u5DE5\u5355 ${ticket.ticketNo}] ${reason}`
  });
  const unitName = balanceType === "grant" ? "\u7B97\u529B\u70B9" : "\u5143\u73B0\u91D1\u4F59\u989D";
  const actionSummary = `\u7BA1\u7406\u5458 ${adminUsername} \u5DF2\u4E3A\u60A8\u53D1\u653E ${amount} ${unitName} \u8865\u507F\u5230\u8D26\uFF08\u539F\u56E0\uFF1A${reason}\uFF09\u3002`;
  const [createdMessage] = await db.insert(ticketMessages).values({
    ticketId,
    senderType: "system",
    senderId: adminId || null,
    senderName: "\u7CFB\u7EDF\u8D22\u52A1\u901A\u77E5",
    content: `\u{1F4B0} **\u8D22\u52A1\u8865\u507F\u53D1\u653E\u901A\u77E5**
${actionSummary}
\u5F53\u524D\u8D26\u6237\u6700\u65B0${unitName}: ${balanceResult.balance}`,
    attachments: null,
    createdAt: /* @__PURE__ */ new Date()
  }).returning();
  await db.update(tickets).set({
    lastRepliedAt: /* @__PURE__ */ new Date(),
    lastRepliedBy: "admin",
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(tickets.id, ticketId));
  try {
    await db.insert(notifications).values({
      userId: ticket.userId,
      visitorId: null,
      type: "balance_compensated",
      title: "\u8D26\u6237\u989D\u5EA6\u8865\u507F\u5230\u8D26",
      message: `\u60A8\u7684\u5DE5\u5355 ${ticket.ticketNo} \u5DF2\u83B7\u5904\u7406\uFF0C\u5DF2\u6210\u529F\u8865\u53D1 ${amount} ${unitName} \u5230\u60A8\u7684\u8D26\u6237\u3002`,
      data: {
        ticketId: ticket.id,
        ticketNo: ticket.ticketNo,
        amount,
        balanceType,
        targetPath: "/user/billing"
      },
      isRead: false,
      createdAt: /* @__PURE__ */ new Date()
    });
  } catch (e) {
    console.error("[Compensation Notification Error]", e);
  }
  return {
    code: 200,
    message: "\u8865\u507F\u53D1\u653E\u6210\u529F",
    data: {
      applied: balanceResult.applied,
      newBalance: balanceResult.balance,
      balanceType,
      message: createdMessage
    }
  };
});

export { compensation_post as default };
