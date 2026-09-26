import { eq, and, desc, ne, gt } from 'drizzle-orm';
import { db as ensureAINodeApiKey, dc as persistModelCredentials, dd as markQingpuTrialPaymentReceived, de as fulfillPaidTrialOrder, df as formatTrialErrorMessage, b as db, p as products, v as orders, u as users, bH as logger, D as subscriptions, dg as enqueueAndDeliverAINodeSync, d6 as getQingpuAINodeBaseUrl, dh as getQingpuAINodeTenantToken, di as retryIdempotentAINodeCall, dj as creditAINodeCustomerBalance, dk as planSubscriptionRevoke, dl as grantEventId } from '../nitro/nitro.mjs';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

function parseJsonMeta(value) {
  if (!value) return {};
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    } catch {
      return {};
    }
  }
  return typeof value === "object" && !Array.isArray(value) ? value : {};
}
async function handleQingpuTopupPaid(payload) {
  var _a;
  const orderId = String((payload == null ? void 0 : payload.id) || (payload == null ? void 0 : payload.orderId) || "").trim();
  if (!orderId) return { ok: true };
  const rows = await db.select({
    order: orders,
    productType: products.type,
    productName: products.name
  }).from(orders).leftJoin(products, eq(products.id, orders.productId)).where(eq(orders.id, orderId)).limit(1);
  const row = rows[0];
  if (!row) return { ok: true };
  const order = row.order;
  const orderMeta = parseJsonMeta(order.metaData);
  const bridge = parseJsonMeta(orderMeta.checkoutBridge);
  const attach = parseJsonMeta(bridge.attach);
  const currencySnapshot = parseJsonMeta(orderMeta.currencySnapshot);
  if (order.source === "qingpu_trial" || orderId.startsWith("TR") || Boolean(orderMeta.qingpuTrial)) {
    return { ok: true };
  }
  if (row.productType === "subscription" || orderId.startsWith("SU") || orderId.startsWith("SUB")) {
    return { ok: true };
  }
  const isTopup = orderId.startsWith("TU") || row.productType === "topup" || attach.businessType === "topup" || order.source === "quick_topup" || order.source === "minimal_checkout" && (attach.businessType === "topup" || Boolean(orderMeta.recharge_amount) || orderMeta.balance_type === "cash") || orderMeta.balance_type === "cash" || Boolean(orderMeta.recharge_amount);
  if (!isTopup) {
    return { ok: true };
  }
  const userId = Number(order.userId || (payload == null ? void 0 : payload.userId) || 0);
  if (!userId) {
    console.warn(`[QingpuTopupEvent] Order ${orderId} has no userId, skip AINode topup credit`);
    return { ok: true };
  }
  const rechargeAmount = Number(
    bridge.rechargeAmount || orderMeta.recharge_amount || bridge.sourceAmount || currencySnapshot.baseAmount || order.amount || 0
  );
  if (rechargeAmount <= 0) {
    console.warn(`[QingpuTopupEvent] Order ${orderId} rechargeAmount is <= 0 (${rechargeAmount})`);
    return { ok: true };
  }
  const balanceType = String(bridge.balanceType || orderMeta.balance_type || "cash").trim().toLowerCase() === "grant" ? "grant" : "cash";
  const userRows = await db.select({ email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
  const email = String(((_a = userRows[0]) == null ? void 0 : _a.email) || "").trim().toLowerCase();
  if (!email) {
    console.warn(`[QingpuTopupEvent] User ${userId} has no email, skip AINode credit`);
    return { ok: true };
  }
  const [gatewayUrl, token] = await Promise.all([
    getQingpuAINodeBaseUrl(),
    getQingpuAINodeTenantToken()
  ]);
  if (!gatewayUrl || !token) {
    const msg = "AINode \u7F51\u5173\u5730\u5740\u6216\u79DF\u6237 Token \u672A\u914D\u7F6E\uFF0C\u5145\u503C\u4F59\u989D\u672A\u80FD\u81EA\u52A8\u540C\u6B65\u5230 AINode";
    console.warn(`[QingpuTopupEvent] ${msg}`);
    await logger.warn(`\u5145\u503C\u91D1\u5E01\u672A\u540C\u6B65\uFF08\u7F51\u5173\u672A\u914D\u7F6E\uFF09: ${email} (\u8BA2\u5355 ${orderId})`, {
      source: "qingpu_topup_sync",
      details: { orderId, email, rechargeAmount }
    });
    return { ok: false, errorMessage: msg };
  }
  try {
    const ainodeCreds = await ensureAINodeApiKey(userId, email);
    await persistModelCredentials(userId, ainodeCreds.apiKey, ainodeCreds.baseUrl);
  } catch (err) {
    console.warn(`[QingpuTopupEvent] ensureAINodeApiKey non-fatal warning for ${email}:`, (err == null ? void 0 : err.message) || err);
  }
  const operationId = `topup:${orderId}`;
  try {
    await retryIdempotentAINodeCall(() => creditAINodeCustomerBalance({
      userId,
      operationId,
      balanceType,
      amount: rechargeAmount,
      reason: `\u8F7B\u94FA\u5145\u503C\u8BA2\u5355\u5230\u8D26 ${orderId}`,
      actor: {
        id: 0,
        username: "system_topup"
      }
    }));
    console.log(`[QingpuTopupEvent] Successfully credited ${rechargeAmount} (${balanceType}) to AINode for ${email} (Order ${orderId})`);
    await logger.info(`\u5145\u503C\u91D1\u5E01\u540C\u6B65 AINode \u6210\u529F: ${email} (+${rechargeAmount} ${balanceType})`, {
      source: "qingpu_topup_sync",
      details: {
        orderId,
        userId,
        email,
        amount: rechargeAmount,
        balanceType
      }
    });
  } catch (err) {
    console.error(`[QingpuTopupEvent] creditAINodeCustomerBalance failed for order ${orderId}:`, (err == null ? void 0 : err.message) || err);
    await logger.error(`\u5145\u503C\u91D1\u5E01\u540C\u6B65 AINode \u5931\u8D25: ${email}`, {
      source: "qingpu_topup_sync",
      details: {
        orderId,
        userId,
        email,
        rechargeAmount,
        operationId,
        error: (err == null ? void 0 : err.message) || err
      }
    });
    return { ok: false, errorMessage: (err == null ? void 0 : err.message) || "\u540C\u6B65 AINode \u4F59\u989D\u5931\u8D25" };
  }
  return { ok: true };
}
async function handleQingpuSubscriptionPaid(payload) {
  var _a, _b;
  const orderId = String((payload == null ? void 0 : payload.id) || (payload == null ? void 0 : payload.orderId) || "").trim();
  if (!orderId) return { ok: true };
  const rows = await db.select({
    order: orders,
    productType: products.type,
    productMeta: products.metaData,
    productName: products.name
  }).from(orders).leftJoin(products, eq(products.id, orders.productId)).where(eq(orders.id, orderId)).limit(1);
  const row = rows[0];
  if (!row) return { ok: true };
  if (row.productType !== "subscription" && !orderId.startsWith("SU") && !orderId.startsWith("SUB")) {
    return { ok: true };
  }
  const userId = Number(row.order.userId || (payload == null ? void 0 : payload.userId) || 0);
  if (!userId) return { ok: true };
  const meta = parseJsonMeta(row.productMeta);
  const grantAmount = Number(meta.grant_amount || 0);
  if (!(grantAmount > 0)) return { ok: true };
  const userRows = await db.select({ email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
  const email = String(((_a = userRows[0]) == null ? void 0 : _a.email) || "").trim().toLowerCase();
  if (!email) {
    const msg = `\u8BA2\u9605\u8BA2\u5355 ${orderId} \u7684\u7528\u6237 ${userId} \u6CA1\u6709\u90AE\u7BB1\uFF0C\u8D60\u9001\u7B97\u529B\u65E0\u6CD5\u540C\u6B65 AINode`;
    await logger.error(msg, { source: "qingpu_subscription_sync", details: { orderId, userId, grantAmount } });
    return { ok: false, errorMessage: msg };
  }
  const subRows = await db.select({ currentPeriodEnd: subscriptions.currentPeriodEnd }).from(subscriptions).where(and(eq(subscriptions.userId, userId), eq(subscriptions.status, "active"))).orderBy(desc(subscriptions.createdAt)).limit(1);
  const expiresAt = ((_b = subRows[0]) == null ? void 0 : _b.currentPeriodEnd) ? new Date(subRows[0].currentPeriodEnd).toISOString() : new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString();
  const result = await enqueueAndDeliverAINodeSync(userId, {
    eventId: grantEventId(orderId),
    kind: "subscription_grant",
    email,
    payload: { orderId, grantAmount, expiresAt, tier: Number(meta.level) || 1 }
  });
  return { ok: result.ok, errorMessage: result.errorMessage };
}
async function handleQingpuSubscriptionRevoked(payload) {
  var _a, _b, _c;
  const userId = Number((payload == null ? void 0 : payload.userId) || 0);
  const subscriptionId = String((payload == null ? void 0 : payload.subscriptionId) || "").trim();
  const reason = String((payload == null ? void 0 : payload.reason) || "subscription_revoked").trim();
  if (!userId || !subscriptionId) {
    const msg = "\u8BA2\u9605\u64A4\u9500\u4E8B\u4EF6\u7F3A\u5C11 userId \u6216 subscriptionId\uFF0C\u65E0\u6CD5\u540C\u6B65 AINode";
    await logger.error(msg, { source: "qingpu_subscription_revoke", details: { payload } });
    return { ok: false, errorMessage: msg };
  }
  const userRows = await db.select({ email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
  const email = String(((_a = userRows[0]) == null ? void 0 : _a.email) || "").trim().toLowerCase();
  if (!email) {
    const msg = `\u8BA2\u9605 ${subscriptionId} \u7684\u7528\u6237 ${userId} \u6CA1\u6709\u90AE\u7BB1\uFF0C\u64A4\u9500\u65E0\u6CD5\u540C\u6B65 AINode`;
    await logger.error(msg, { source: "qingpu_subscription_revoke", details: { subscriptionId, userId, reason } });
    return { ok: false, errorMessage: msg };
  }
  const now = /* @__PURE__ */ new Date();
  const [revokedRows, otherActiveRows] = await Promise.all([
    db.select({ currentPeriodEnd: subscriptions.currentPeriodEnd }).from(subscriptions).where(eq(subscriptions.id, subscriptionId)).limit(1),
    db.select({ id: subscriptions.id }).from(subscriptions).where(and(
      eq(subscriptions.userId, userId),
      eq(subscriptions.status, "active"),
      ne(subscriptions.id, subscriptionId),
      gt(subscriptions.currentPeriodEnd, now)
    ))
  ]);
  const plan = planSubscriptionRevoke({
    subscriptionId,
    currentPeriodEnd: (_c = (_b = revokedRows[0]) == null ? void 0 : _b.currentPeriodEnd) != null ? _c : null,
    otherActiveSubscriptionIds: otherActiveRows.map((row) => String(row.id))
  });
  if (plan.action === "skip") {
    await logger.info(`\u8BA2\u9605 ${subscriptionId} \u64A4\u9500\u672A\u540C\u6B65 AINode\uFF1A${plan.reason}`, {
      source: "qingpu_subscription_revoke",
      details: { subscriptionId, userId, reason }
    });
    return { ok: true };
  }
  const result = await enqueueAndDeliverAINodeSync(userId, {
    eventId: plan.eventId,
    kind: "subscription_revoke",
    email,
    payload: { subscriptionId, reason }
  });
  return { ok: result.ok, errorMessage: result.errorMessage };
}
function getThemeEventRules() {
  return [
    {
      key: "qingpu:sync_user_registered",
      event: "user.registered",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u65B0\u7528\u6237\u6CE8\u518C\u81EA\u52A8\u540C\u6B65 AINode \u51ED\u8BC1",
      description: "\u65B0\u7528\u6237\u6CE8\u518C\u6210\u529F\u540E\uFF0C\u81EA\u52A8\u5728 AINode \u7F51\u5173\u5F00\u901A\u7528\u6237\u8D26\u53F7\u5E76\u521D\u59CB\u5316\u8F7B\u94FA\u6A21\u578B\u51ED\u636E",
      mode: "async",
      handler: async (payload) => {
        const userId = Number((payload == null ? void 0 : payload.userId) || (payload == null ? void 0 : payload.id) || 0);
        const email = String((payload == null ? void 0 : payload.email) || "").trim();
        if (userId > 0 && email) {
          try {
            const ainode = await ensureAINodeApiKey(userId, email);
            await persistModelCredentials(userId, ainode.apiKey, ainode.baseUrl);
          } catch (err) {
            console.warn(`[QingpuRegisterEvent] Failed to auto-provision AINode credentials for ${email}:`, (err == null ? void 0 : err.message) || err);
          }
        }
      }
    },
    {
      key: "qingpu:fulfill_trial",
      event: "order.paid",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u8BD5\u7528\u8BA2\u5355\u5C65\u7EA6\u4E0E\u6743\u76CA\u5F00\u901A",
      description: "\u5C65\u7EA6\u8F7B\u94FA\u8BD5\u7528\u8BA2\u5355\uFF0C\u5F00\u901A\u8F7B\u94FA\u7CFB\u7EDF\u6743\u9650\u5E76\u4E3A\u7528\u6237\u53D1\u653E AINode \u8BD5\u7528\u989D\u5EA6",
      mode: "async",
      handler: async (payload) => {
        const order = payload;
        const orderId = String((order == null ? void 0 : order.id) || (order == null ? void 0 : order.orderId) || "").trim();
        const source = String((order == null ? void 0 : order.source) || "").trim();
        if (source !== "qingpu_trial" && !orderId.startsWith("TR")) {
          return { ok: true };
        }
        if (!orderId) {
          return { ok: false, errorMessage: "\u7F3A\u5C11\u8BA2\u5355 ID" };
        }
        try {
          const next = await markQingpuTrialPaymentReceived(orderId);
          if (next === "ready") {
            await fulfillPaidTrialOrder(orderId);
          }
          return { ok: true };
        } catch (err) {
          const readable = formatTrialErrorMessage((err == null ? void 0 : err.message) || err);
          console.error(`[QingpuTrialEvent] fulfill failed for order ${orderId}:`, readable);
          return { ok: false, errorMessage: readable };
        }
      }
    },
    {
      key: "qingpu:fulfill_subscription",
      event: "order.paid",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u8BA2\u9605\u8BA2\u5355\u5C65\u7EA6\u4E0E\u8D60\u9001\u7B97\u529B\u53D1\u653E",
      description: "\u5F53\u7528\u6237\u5B8C\u6210\u8F7B\u94FA\u8BA2\u9605\u5957\u9910\u652F\u4ED8\u540E\uFF0C\u81EA\u52A8\u4E3A\u7528\u6237\u53D1\u653E\u8BE5\u5957\u9910\u9644\u8D60\u7684\u5468\u671F\u7B97\u529B\u91D1\u5E01",
      mode: "async",
      handler: async (payload) => {
        return await handleQingpuSubscriptionPaid(payload);
      }
    },
    {
      key: "qingpu:fulfill_topup",
      event: "order.paid",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u5145\u503C\u8BA2\u5355\u81EA\u52A8\u540C\u6B65 AINode \u4F59\u989D",
      description: "\u5F53\u7528\u6237\u5728\u8F7B\u94FA\u5B8C\u6210\u5145\u503C\u652F\u4ED8\u540E\uFF0C\u81EA\u52A8\u4E3A\u7528\u6237\u5728 AINode \u7F51\u5173\u5165\u8D26\u5BF9\u5E94\u7684\u91D1\u5E01\u4F59\u989D",
      mode: "async",
      handler: async (payload) => {
        return await handleQingpuTopupPaid(payload);
      }
    },
    {
      key: "qingpu:revoke_subscription",
      event: "subscription.revoked",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u8BA2\u9605\u64A4\u9500\u540E\u540C\u6B65\u6E05\u7406 AINode \u8D60\u9001\u7B97\u529B",
      description: "\u5F53\u8BA2\u5355\u9000\u6B3E\u5BFC\u81F4\u8BA2\u9605\u4F5C\u5E9F\u65F6\uFF0C\u5411 AINode \u6D3E\u53D1 subscription.cancel \u4E8B\u4EF6\u6E05\u7A7A\u672A\u4F7F\u7528\u7684\u8D60\u9001\u7B97\u529B",
      mode: "async",
      handler: async (payload) => {
        return await handleQingpuSubscriptionRevoked(payload);
      }
    }
  ];
}

export { getThemeEventRules };
