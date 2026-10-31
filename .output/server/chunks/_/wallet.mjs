import { eq } from 'drizzle-orm';
import { gJ as getWebhookSubscriptionUrl, dg as getIntegrationToken, gK as $fetch, gL as refundEventId, b as db, u as users } from '../nitro/nitro.mjs';
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
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const AINODE_BALANCE_SCALE = 1e8;
const AINODE_CREDIT_POOL = "cash";
const fromAINodeScaled = (scaled) => Math.round(Number(scaled || 0)) / AINODE_BALANCE_SCALE;
const finiteOrNull = (value) => {
  if (value === null || value === void 0 || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};
function parseAINodeTransactionResponse(body, requestedAmount) {
  const data = body && typeof body === "object" ? body : {};
  const amountCents = finiteOrNull(data.amountCents);
  const afterBalanceCents = finiteOrNull(data.afterBalanceCents);
  return {
    alreadyProcessed: data.alreadyProcessed === true,
    transactionId: Number(data.transactionId || 0) || 0,
    amount: amountCents === null ? requestedAmount : fromAINodeScaled(amountCents),
    afterBalance: afterBalanceCents === null ? null : fromAINodeScaled(afterBalanceCents)
  };
}
function isRetryableAINodeStatus(status) {
  if (!status) return true;
  return status === 408 || status === 425 || status === 429 || status >= 500;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class AINodeWalletError extends Error {
  constructor(message, status) {
    super(message);
    __publicField(this, "status");
    __publicField(this, "retryable");
    this.name = "AINodeWalletError";
    this.status = status;
    this.retryable = isRetryableAINodeStatus(status);
  }
}
const DELIVERY_TIMEOUT_MS = 15e3;
async function resolveEmail(userId) {
  var _a;
  const rows = await db.select({ email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
  return String(((_a = rows[0]) == null ? void 0 : _a.email) || "").trim().toLowerCase();
}
function describeFailure(error) {
  var _a, _b, _c;
  const err = error;
  const status = Number((_a = err == null ? void 0 : err.status) != null ? _a : err == null ? void 0 : err.statusCode) || void 0;
  const message = String(((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.error) || ((_c = err == null ? void 0 : err.data) == null ? void 0 : _c.message) || (err == null ? void 0 : err.message) || error || "AINode \u94B1\u5305\u8BF7\u6C42\u5931\u8D25").slice(0, 500);
  return { status, message };
}
async function changeAINodeWallet(change) {
  const amount = Math.abs(Number(change.amount || 0));
  if (!change.userId || !change.eventId || !(amount > 0)) {
    throw new AINodeWalletError("AINode \u94B1\u5305\u8BF7\u6C42\u7F3A\u5C11\u7528\u6237\u3001\u5E42\u7B49\u952E\u6216\u91D1\u989D", 400);
  }
  const email = await resolveEmail(change.userId);
  if (!email) throw new AINodeWalletError(`\u7528\u6237 ${change.userId} \u6CA1\u6709\u90AE\u7BB1\uFF0CAINode \u65E0\u6CD5\u8BC6\u522B`, 400);
  const [webhookUrl, token] = await Promise.all([getWebhookSubscriptionUrl(), getIntegrationToken()]);
  if (!webhookUrl || !token) throw new AINodeWalletError("AINode \u7F51\u5173\u5730\u5740\u6216 integration_token \u672A\u914D\u7F6E");
  try {
    const response = await $fetch(webhookUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: {
        event: "transaction.credit",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        data: {
          source: "apay",
          eventId: change.eventId,
          userId: change.userId,
          email,
          type: change.type,
          // 非订阅额度不进 grant（订阅周期池，换期清空），见 AINODE_CREDIT_POOL
          balanceType: AINODE_CREDIT_POOL,
          direction: change.direction,
          amount,
          sourceId: change.sourceId,
          remark: change.remark,
          ...change.direction === "debit" && change.allowPartial ? { allowPartial: true } : {}
        }
      },
      // eventId 幂等：响应丢失后重发不会重复记账
      retry: 2,
      retryDelay: 1e3,
      retryStatusCodes: [408, 425, 429, 500, 502, 503, 504],
      signal: AbortSignal.timeout(DELIVERY_TIMEOUT_MS)
    });
    return parseAINodeTransactionResponse(response, amount);
  } catch (error) {
    const { status, message } = describeFailure(error);
    throw new AINodeWalletError(`AINode \u94B1\u5305${change.direction === "debit" ? "\u6263\u6B3E" : "\u5165\u8D26"}\u5931\u8D25: ${message}`, status);
  }
}
async function creditTopupInAINode(topup, orderId) {
  await changeAINodeWallet({
    userId: Number(topup.userId),
    direction: "credit",
    amount: fromAINodeScaled(topup.creditAmountCents),
    eventId: topup.creditEventId,
    type: "topup",
    sourceId: orderId,
    remark: `\u5145\u503C\u8BA2\u5355 ${orderId}`
  });
  return { applied: true };
}
async function clawbackTopupInAINode(topup, orderId, remark) {
  var _a;
  const creditedAmount = fromAINodeScaled(topup.creditAmountCents);
  const result = await changeAINodeWallet({
    userId: Number(topup.userId),
    direction: "debit",
    amount: creditedAmount,
    eventId: refundEventId(orderId),
    type: "refund",
    sourceId: orderId,
    remark,
    allowPartial: true
  });
  const clawedBack = Math.min(result.amount, creditedAmount);
  const shortfall = Math.round((creditedAmount - clawedBack) * AINODE_BALANCE_SCALE) / AINODE_BALANCE_SCALE;
  return {
    applied: !result.alreadyProcessed && clawedBack > 0,
    clawedBack,
    shortfall,
    balance: (_a = result.afterBalance) != null ? _a : 0
  };
}
async function creditCompensationInAINode(input) {
  const result = await changeAINodeWallet({
    userId: input.userId,
    direction: "credit",
    amount: input.amount,
    eventId: input.eventId,
    type: input.kind || "admin_recharge",
    sourceId: input.sourceId,
    remark: input.remark
  });
  return {
    applied: !result.alreadyProcessed,
    balance: null
  };
}
const walletAdapter = {
  creditTopup: creditTopupInAINode,
  clawbackTopup: clawbackTopupInAINode,
  creditCompensation: creditCompensationInAINode
};

export { AINodeWalletError, changeAINodeWallet, clawbackTopupInAINode, creditCompensationInAINode, creditTopupInAINode, walletAdapter as default, walletAdapter };
//# sourceMappingURL=wallet.mjs.map
