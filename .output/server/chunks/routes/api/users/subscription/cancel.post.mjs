import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, b as db, z as subscriptions } from '../../../../nitro/nitro.mjs';
import { and, eq, or, isNull, gt, desc } from 'drizzle-orm';
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
  const existing = await db.select().from(subscriptions).where(and(
    eq(subscriptions.userId, userId),
    eq(subscriptions.status, "active"),
    or(isNull(subscriptions.currentPeriodEnd), gt(subscriptions.currentPeriodEnd, /* @__PURE__ */ new Date()))
  )).orderBy(desc(subscriptions.currentPeriodEnd)).limit(1);
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
  return { success: true, message: messages.cancelled };
});

export { cancel_post as default };
