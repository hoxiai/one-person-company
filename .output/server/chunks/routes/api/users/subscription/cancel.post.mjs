import { d as defineEventHandler, c as getRequestLocale, eb as requireUserSession, e as createError, r as readBody, T as subscriptions, b as db } from '../../../../nitro/nitro.mjs';
import { eq, or, isNull, gt, and, desc } from 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const cancel_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u672A\u767B\u5F55",
    noActiveSubscription: "\u672A\u627E\u5230\u6709\u6548\u8BA2\u9605",
    cancelled: "\u8BA2\u9605\u5DF2\u53D6\u6D88"
  } : {
    unauthorized: "Unauthorized",
    noActiveSubscription: "No active subscription found",
    cancelled: "Subscription cancelled"
  };
  const session = await requireUserSession(event);
  if (!session.user) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  const userId = session.user.id;
  const body = await readBody(event).catch(() => null);
  const requestedSubId = typeof (body == null ? void 0 : body.subscriptionId) === "string" ? body.subscriptionId.trim() : "";
  const conditions = [
    eq(subscriptions.userId, userId),
    eq(subscriptions.status, "active"),
    or(isNull(subscriptions.currentPeriodEnd), gt(subscriptions.currentPeriodEnd, /* @__PURE__ */ new Date()))
  ];
  if (requestedSubId) {
    conditions.push(eq(subscriptions.id, requestedSubId));
  }
  const existing = await db.select().from(subscriptions).where(and(...conditions)).orderBy(desc(subscriptions.currentPeriodEnd)).limit(1);
  if (!existing.length) {
    throw createError({ statusCode: 404, message: messages.noActiveSubscription });
  }
  const sub = existing[0];
  if (!sub.cancelAtPeriodEnd) {
    await db.update(subscriptions).set({
      cancelAtPeriodEnd: true,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(subscriptions.id, sub.id));
  }
  return { success: true, subscriptionId: sub.id, message: messages.cancelled };
});

export { cancel_post as default };
//# sourceMappingURL=cancel.post.mjs.map
