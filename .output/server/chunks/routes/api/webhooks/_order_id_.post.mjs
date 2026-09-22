import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, cz as readRawBody, r as readBody, g as getQuery, c9 as getRequestHeaders, bw as logger, e as createError, b as db, o as orders, O as ORDER_PAY_STATUS, cA as markOrderPaid, ao as paymentMethods, cB as executeCallbackScript, ce as setResponseStatus, al as ORDER_STATUS, bX as getAffectedRows, cC as markTopupPaymentFailed, a7 as cancelPromoCommission, a8 as revokeSubscriptionForOrder, a9 as refundTopup, cD as setHeader } from '../../../nitro/nitro.mjs';
import { eq, and, ne } from 'drizzle-orm';
import fs from 'fs';
import path from 'path';
import 'crypto';
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

const SENSITIVE_HEADER_KEYS = /* @__PURE__ */ new Set([
  "authorization",
  "x-api-key",
  "apikey",
  "cookie",
  "signature",
  "x-signature",
  "sign",
  "x-sign",
  "token",
  "x-token",
  "secret"
]);
function sanitizePayloadForLog(payload) {
  const maskedHeaders = {};
  for (const [key, value] of Object.entries(payload.headers || {})) {
    maskedHeaders[key] = SENSITIVE_HEADER_KEYS.has(key.toLowerCase()) ? "***redacted***" : value;
  }
  return {
    urlOrderId: payload.urlOrderId,
    query: payload.query,
    headers: maskedHeaders,
    rawBodyLength: (payload.rawBody || "").length
  };
}
const _order_id__post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const urlOrderId = getRouterParam(event, "order_id");
  let rawBody = "";
  let body = {};
  try {
    rawBody = await readRawBody(event) || "";
    if (rawBody) {
      body = JSON.parse(rawBody);
    }
  } catch (e) {
    try {
      body = await readBody(event) || {};
    } catch (err) {
    }
  }
  const query = getQuery(event);
  const headers = getRequestHeaders(event);
  const payload = { body, rawBody, query, headers, urlOrderId };
  const logPayload = sanitizePayloadForLog(payload);
  await logger.warn(`record webhook for order ${urlOrderId}`, {
    source: "webhook",
    details: { urlOrderId, payload: logPayload }
  });
  if (!urlOrderId) {
    return createError({
      statusCode: 400,
      message: locale === "zh" ? "Webhook URL \u4E2D\u7F3A\u5C11\u8BA2\u5355 ID" : "Order ID is required in webhook URL"
    });
  }
  try {
    const existingOrders = await db.select().from(orders).where(eq(orders.id, urlOrderId));
    if (existingOrders.length === 0) {
      throw new Error(`Order ${urlOrderId} not found`);
    }
    const order = existingOrders[0];
    if (order.payStatus === ORDER_PAY_STATUS.PAID) {
      await markOrderPaid({ orderId: order.id, source: "webhook-retry" });
      return "success";
    }
    const payMethod = order.payMethod;
    if (!payMethod) {
      throw new Error(`Order ${urlOrderId} does not have a payment method assigned`);
    }
    const methods = await db.select().from(paymentMethods);
    const allMethods = await db.select().from(paymentMethods);
    const method = allMethods.find((m) => m.code.toLowerCase() === payMethod.toLowerCase() && m.isActive);
    if (!method) {
      throw new Error(`Payment method ${payMethod} is not found or inactive`);
    }
    const realMethodCode = method.code;
    let callbackScript = method.callback || "";
    if (!callbackScript.trim()) {
      const localScriptPath = path.join(process.cwd(), "payments", realMethodCode, "callback.js");
      const lowerCaseLocalScriptPath = path.join(process.cwd(), "payments", realMethodCode.toLowerCase(), "callback.js");
      try {
        if (fs.existsSync(localScriptPath)) {
          console.log(`[Webhook] Using local script: ${localScriptPath}`);
          callbackScript = fs.readFileSync(localScriptPath, "utf-8");
        } else if (fs.existsSync(lowerCaseLocalScriptPath)) {
          console.log(`[Webhook] Using local script (lowercase fallback): ${lowerCaseLocalScriptPath}`);
          callbackScript = fs.readFileSync(lowerCaseLocalScriptPath, "utf-8");
        }
      } catch (err) {
        console.warn(`Failed to read local callback.js for ${realMethodCode}`, err);
      }
    }
    if (!callbackScript || callbackScript.trim() === "") {
      throw new Error(`Payment method ${realMethodCode} does not have a webhook callback script configured`);
    }
    let configJson = {};
    try {
      configJson = method.configJson ? JSON.parse(method.configJson) : {};
    } catch (e) {
      console.warn("Failed to parse configJson for", realMethodCode);
    }
    if (!Object.keys(configJson).length) {
      const localConfigPath = path.join(process.cwd(), "payments", realMethodCode, "config.json");
      const localConfigLowerPath = path.join(process.cwd(), "payments", realMethodCode.toLowerCase(), "config.json");
      try {
        if (fs.existsSync(localConfigPath)) {
          configJson = JSON.parse(fs.readFileSync(localConfigPath, "utf-8"));
        } else if (fs.existsSync(localConfigLowerPath)) {
          configJson = JSON.parse(fs.readFileSync(localConfigLowerPath, "utf-8"));
        }
      } catch (e) {
        console.warn("Failed to read local config.json for", realMethodCode);
      }
    }
    const result = await executeCallbackScript(callbackScript, payload, configJson);
    await logger.info(`Webhook processed for ${realMethodCode}`, {
      source: "webhook",
      details: { urlOrderId, payload: logPayload, result }
    });
    if (!result.isSignValid) {
      console.error(`[Webhook] Invalid signature for ${realMethodCode}, Order: ${result.orderId}`);
      await logger.error(`Invalid webhook signature for ${realMethodCode}`, {
        source: "webhook",
        details: { urlOrderId, payload: logPayload, result }
      });
      setResponseStatus(event, 403);
      return "Invalid Signature";
    }
    if (result.orderId && String(result.orderId) !== String(urlOrderId)) {
      await logger.error(`Webhook orderId mismatch: url=${urlOrderId} script=${result.orderId}`, {
        source: "webhook",
        details: { urlOrderId, scriptOrderId: result.orderId, method: realMethodCode }
      });
      setResponseStatus(event, 400);
      return "Order ID mismatch";
    }
    if (result.orderId) {
      const existingOrders2 = await db.select().from(orders).where(eq(orders.id, result.orderId));
      if (existingOrders2.length > 0) {
        const order2 = existingOrders2[0];
        if (result.status === "paid") {
          const marked = await markOrderPaid({
            orderId: result.orderId,
            tradeNo: result.tradeNo,
            amount: result.amount,
            payMethod: realMethodCode,
            source: "webhook"
          });
          if (marked.outcome === "amount_mismatch") {
            await logger.warn(`Amount mismatch for order ${order2.id}`, {
              source: "webhook",
              details: { expected: order2.amount, got: result.amount, payload: logPayload, result }
            });
            return "Amount Mismatch";
          }
        } else if (result.status === "failed" && order2.payStatus !== ORDER_PAY_STATUS.PAID) {
          await logger.warn(`Order ${order2.id} failed via ${realMethodCode}`, {
            source: "webhook",
            details: { tradeNo: result.tradeNo, amount: result.amount }
          });
          const updateData = {
            payStatus: ORDER_PAY_STATUS.FAILED,
            status: ORDER_STATUS.FAILED,
            // Keep them in sync for failure
            payMethod: realMethodCode
          };
          if (result.tradeNo) updateData.tradeNo = result.tradeNo;
          const failedUpdate = await db.update(orders).set(updateData).where(and(eq(orders.id, result.orderId), ne(orders.payStatus, ORDER_PAY_STATUS.PAID)));
          if (getAffectedRows(failedUpdate) > 0) {
            await markTopupPaymentFailed(order2.id, `\u652F\u4ED8\u7F51\u5173 ${realMethodCode} \u8FD4\u56DE\u5931\u8D25`);
          }
        } else if (result.status === "refunded" || result.status === "cancelled") {
          await logger.warn(`Order ${order2.id} ${result.status} via ${realMethodCode}`, {
            source: "webhook",
            details: { tradeNo: result.tradeNo, amount: result.amount }
          });
          const targetPayStatus = result.status === "refunded" ? ORDER_PAY_STATUS.REFUNDED : ORDER_PAY_STATUS.CANCELLED;
          const updateData = {
            payStatus: targetPayStatus,
            status: ORDER_STATUS.FAILED,
            payMethod: realMethodCode
          };
          if (result.tradeNo) updateData.tradeNo = result.tradeNo;
          await db.update(orders).set(updateData).where(eq(orders.id, result.orderId));
          await cancelPromoCommission(result.orderId, `webhook_${result.status}`);
          await revokeSubscriptionForOrder(String(result.orderId), `webhook_${result.status}`).catch((err) => console.error("[Webhook] revokeSubscriptionForOrder failed:", err));
          if (result.status === "refunded" && order2.userId) {
            await refundTopup(result.orderId).catch((err) => console.error("[Webhook] refundTopup failed:", err));
          }
        }
      } else {
        await logger.error(`Order ${result.orderId} not found in database`, {
          source: "webhook",
          details: { payload: logPayload, result }
        });
      }
    }
    if (typeof result.responseBody === "object") {
      return result.responseBody;
    } else {
      setHeader(event, "Content-Type", "text/plain");
      return result.responseBody || "success";
    }
  } catch (error) {
    await logger.error(`Webhook execution error`, {
      source: "webhook",
      details: { urlOrderId, error: error.message, stack: error.stack }
    });
    setResponseStatus(event, 500);
    return `Webhook Processing Error: ${error.message}`;
  }
});

export { _order_id__post as default };
