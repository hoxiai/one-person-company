import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, b as db, o as orders } from '../../../../../nitro/nitro.mjs';
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

const cancel_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    invalidRequest: "\u8BF7\u6C42\u65E0\u6548",
    orderNotFound: "\u8BA2\u5355\u4E0D\u5B58\u5728",
    onlyPending: "\u53EA\u6709\u5F85\u652F\u4ED8\u8BA2\u5355\u53EF\u4EE5\u53D6\u6D88",
    cancelled: "\u8BA2\u5355\u5DF2\u6210\u529F\u53D6\u6D88"
  } : {
    invalidRequest: "Invalid request",
    orderNotFound: "Order not found",
    onlyPending: "Only pending orders can be cancelled",
    cancelled: "Order cancelled successfully"
  };
  const session = await requireUserSession(event);
  const userId = session.user.id;
  const orderId = (_a = event.context.params) == null ? void 0 : _a.id;
  if (!userId || !orderId) {
    throw createError({
      statusCode: 400,
      message: messages.invalidRequest
    });
  }
  const existing = await db.select({
    id: orders.id,
    payStatus: orders.payStatus,
    status: orders.status
  }).from(orders).where(and(eq(orders.id, orderId), eq(orders.userId, userId))).limit(1);
  if (!existing || existing.length === 0) {
    throw createError({
      statusCode: 404,
      message: messages.orderNotFound
    });
  }
  const order = existing[0];
  if (order.payStatus !== "pending") {
    throw createError({
      statusCode: 400,
      message: messages.onlyPending
    });
  }
  await db.update(orders).set({
    payStatus: "cancelled",
    status: "expired"
  }).where(eq(orders.id, orderId));
  return {
    success: true,
    message: messages.cancelled
  };
});

export { cancel_post as default };
