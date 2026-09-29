import { d as defineEventHandler, c as getRequestLocale, ch as useRuntimeConfig, br as getHeader, bU as logger, e as createError, b as db, u as users, H as subscriptions, z as orders, ao as ORDER_STATUS, O as ORDER_PAY_STATUS, bm as syncWalletTierFromRemaining, ai as emitEvent } from '../../../nitro/nitro.mjs';
import { eq, and, lt } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import '@libsql/client';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const processSubscriptions_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const config = useRuntimeConfig();
  const authHeader = getHeader(event, "Authorization");
  const cronSecret = String(config.cronSecret || process.env.CRON_SECRET || "").trim();
  if ((!cronSecret || authHeader !== `Bearer ${cronSecret}`)) {
    await logger.warn("[Cron] Unauthorized attempt to trigger subscriptions cron");
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u672A\u6388\u6743" : "Unauthorized" });
  }
  await logger.info("[Cron] Starting to process subscriptions...");
  const now = /* @__PURE__ */ new Date();
  let expiredCount = 0;
  let errorCount = 0;
  try {
    const dueSubscriptions = await db.select({
      id: subscriptions.id,
      userId: subscriptions.userId,
      productId: subscriptions.productId,
      status: subscriptions.status,
      cancelAtPeriodEnd: subscriptions.cancelAtPeriodEnd,
      currentPeriodEnd: subscriptions.currentPeriodEnd,
      userEmail: users.email
    }).from(subscriptions).leftJoin(users, eq(subscriptions.userId, users.id)).where(and(eq(subscriptions.status, "active"), lt(subscriptions.currentPeriodEnd, now)));
    for (const sub of dueSubscriptions) {
      try {
        await db.update(subscriptions).set({ status: "expired", updatedAt: now }).where(eq(subscriptions.id, sub.id));
        await db.update(orders).set({ status: ORDER_STATUS.EXPIRED }).where(and(
          eq(orders.subscriptionId, sub.id),
          eq(orders.status, ORDER_STATUS.ACTIVE),
          eq(orders.payStatus, ORDER_PAY_STATUS.PAID)
        ));
        if (sub.userId) {
          await syncWalletTierFromRemaining(Number(sub.userId), now);
        }
        if (sub.userId) {
          await emitEvent("subscription.revoked", {
            id: sub.id,
            userId: Number(sub.userId),
            productId: Number(sub.productId || 0) || 0,
            subscriptionId: sub.id,
            reason: sub.cancelAtPeriodEnd ? "subscription_expired_period_ended" : "subscription_expired_unpaid"
          });
        }
        await logger.info(`[Cron] Subscription ${sub.id} expired.`);
        expiredCount++;
      } catch (err) {
        errorCount++;
        await logger.error(`[Cron] Error processing subscription ${sub.id}`, { source: "cron", details: { error: err.message } });
      }
    }
    await logger.info("[Cron] Subscriptions processing completed", {
      source: "cron",
      details: {
        processed: dueSubscriptions.length,
        expired: expiredCount,
        errors: errorCount
      }
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u6210\u529F" : "Success",
      data: {
        processed: dueSubscriptions.length,
        expired: expiredCount,
        errors: errorCount,
        timestamp: now.toISOString()
      }
    };
  } catch (error) {
    await logger.error("[Cron] Fatal error in process-subscriptions", { source: "cron", details: { error: error.message } });
    throw createError({ statusCode: 500, message: locale === "zh" ? "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF" : "Internal Server Error" });
  }
});

export { processSubscriptions_get as default };
