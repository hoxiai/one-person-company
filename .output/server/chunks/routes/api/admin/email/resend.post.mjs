import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, G as emailLogs, I as deliverEmail } from '../../../../nitro/nitro.mjs';
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

const resend_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  const logId = Number(body == null ? void 0 : body.logId);
  if (!logId || isNaN(logId)) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7F3A\u5C11\u90AE\u4EF6\u65E5\u5FD7 ID" : "Missing email log id"
    });
  }
  const logs = await db.select().from(emailLogs).where(eq(emailLogs.id, logId)).limit(1);
  if (!logs.length) {
    throw createError({
      statusCode: 404,
      message: locale === "zh" ? "\u90AE\u4EF6\u65E5\u5FD7\u4E0D\u5B58\u5728" : "Email log not found"
    });
  }
  const targetLog = logs[0];
  if (!targetLog.to) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u6536\u4EF6\u4EBA\u5730\u5740\u65E0\u6548" : "Invalid recipient email"
    });
  }
  if (!targetLog.html) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u8BE5\u90AE\u4EF6\u672A\u7559\u5B58\u6B63\u6587\uFF0C\u65E0\u6CD5\u91CD\u65B0\u53D1\u9001" : "Email body was not retained, cannot resend"
    });
  }
  const sendResult = await deliverEmail({
    to: targetLog.to,
    subject: targetLog.subject || "Notification",
    html: targetLog.html,
    templateCode: targetLog.templateCode || void 0
  });
  if (!sendResult.ok) {
    throw createError({
      statusCode: 500,
      message: sendResult.error || (locale === "zh" ? "\u90AE\u4EF6\u53D1\u9001\u5931\u8D25" : "Failed to send email")
    });
  }
  return {
    success: true,
    message: locale === "zh" ? "\u90AE\u4EF6\u91CD\u65B0\u53D1\u9001\u6210\u529F" : "Email resent successfully",
    data: sendResult
  };
});

export { resend_post as default };
