import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, z as subscriptions, o as orders, al as ORDER_STATUS, b3 as getWebhookSubscriptionUrl, b4 as getIntegrationToken, b5 as sendHttpWebhook } from '../../../../nitro/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u8BA2\u9605 ID" : "Missing subscription id" });
  const existing = await db.select().from(subscriptions).where(eq(subscriptions.id, id)).limit(1);
  if (!existing.length) {
    throw createError({ statusCode: 404, message: locale === "zh" ? "\u8BA2\u9605\u4E0D\u5B58\u5728" : "Subscription not found" });
  }
  const sub = existing[0];
  await db.update(subscriptions).set({
    status: "canceled",
    cancelAtPeriodEnd: true,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(subscriptions.id, id));
  const relatedOrders = await db.select({ id: orders.id }).from(orders).where(eq(orders.subscriptionId, id));
  for (const order of relatedOrders) {
    await db.update(orders).set({ status: ORDER_STATUS.EXPIRED }).where(eq(orders.id, order.id));
  }
  const [webhookUrl, ainodeToken] = await Promise.all([getWebhookSubscriptionUrl(), getIntegrationToken()]);
  if (webhookUrl && ainodeToken && sub.userId) {
    const eventId = `sub:cancel:${id}:${Date.now()}`;
    sendHttpWebhook(
      webhookUrl,
      {
        event: "subscription.cancel",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        data: {
          eventId,
          userId: Number(sub.userId),
          sourceId: id,
          remark: locale === "zh" ? "\u7BA1\u7406\u5458\u53D6\u6D88\u4E86\u8BA2\u9605" : "Admin cancelled subscription"
        }
      },
      { headers: { Authorization: `Bearer ${ainodeToken}` } }
    );
  }
  return { code: 0, message: locale === "zh" ? "\u8BA2\u9605\u5DF2\u53D6\u6D88" : "Subscription cancelled" };
});

export { _id__delete as default };
