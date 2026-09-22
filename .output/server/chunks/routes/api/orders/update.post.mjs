import { d as defineEventHandler, c as getRequestLocale, r as readBody, bZ as resolveOrderAccess, O as ORDER_PAY_STATUS, b as db, o as orders } from '../../../nitro/nitro.mjs';
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

const update_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    required: "\u8BA2\u5355 ID \u548C\u4EA4\u6613\u53F7\u4E0D\u80FD\u4E3A\u7A7A",
    alreadyPaid: "\u8BA2\u5355\u5DF2\u652F\u4ED8",
    success: "\u6210\u529F",
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    required: "Order ID and Trade No are required",
    alreadyPaid: "Order already paid",
    success: "success",
    internalError: "Internal server error"
  };
  try {
    const body = await readBody(event);
    const { orderId, tradeNo, payMethod } = body;
    if (!orderId || !tradeNo) {
      return { code: 1, message: messages.required };
    }
    const { order } = await resolveOrderAccess(event, String(orderId));
    if (order.payStatus === ORDER_PAY_STATUS.PAID) {
      return { code: 1, message: messages.alreadyPaid };
    }
    await db.update(orders).set({ payMethod }).where(eq(orders.id, order.id));
    return { code: 0, message: messages.success };
  } catch (error) {
    if (error == null ? void 0 : error.statusCode) throw error;
    return { code: 1, message: error.message || messages.internalError };
  }
});

export { update_post as default };
