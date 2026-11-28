import { d as defineEventHandler, aO as setHeader, c as getRequestLocale, f as getRouterParam, g7 as readRawBody, r as readBody, g as getQuery, fx as getRequestHeaders, dV as logger, e as createError, b as db, M as orders, $ as paymentMethods, fv as getPaymentAdapter, eF as setResponseStatus, g8 as markOrderPaid, a2 as ORDER_PAY_STATUS, aM as ORDER_STATUS, aB as getAffectedRows, g9 as markTopupPaymentFailed, ga as recordGatewayFullRefund, aL as cancelPromoCommission } from '../../../nitro/nitro.mjs';
import { eq, and, inArray } from 'drizzle-orm';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

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
const postHandler = defineEventHandler(async (event) => {
  var _a;
  setHeader(event, "cache-control", "no-store");
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
    let orderMetaData = {};
    try {
      const parsedMetaData = typeof order.metaData === "string" ? JSON.parse(order.metaData) : order.metaData;
      if (parsedMetaData && typeof parsedMetaData === "object" && !Array.isArray(parsedMetaData)) {
        orderMetaData = parsedMetaData;
      }
    } catch {
    }
    const verifiedPayload = { ...payload, order: {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      tradeNo: order.tradeNo,
      metaData: orderMetaData
    } };
    const payMethod = order.payMethod;
    if (!payMethod) {
      throw new Error(`Order ${urlOrderId} does not have a payment method assigned`);
    }
    const allMethods = await db.select().from(paymentMethods);
    const method = allMethods.find((m) => m.code.toLowerCase() === payMethod.toLowerCase() && m.isActive);
    if (!method) {
      throw new Error(`Payment method ${payMethod} is not found or inactive`);
    }
    const realMethodCode = method.code;
    const adapter = getPaymentAdapter(method);
    if (!adapter.supports.callback) {
      throw new Error(`Payment method ${realMethodCode} does not have a webhook callback script configured`);
    }
    const result = await adapter.callback(verifiedPayload);
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
        } else if (result.status === "failed" && (order2.payStatus === ORDER_PAY_STATUS.PENDING || order2.payStatus === ORDER_PAY_STATUS.FAILED)) {
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
          const failedUpdate = await db.update(orders).set(updateData).where(and(eq(orders.id, result.orderId), inArray(orders.payStatus, [ORDER_PAY_STATUS.PENDING, ORDER_PAY_STATUS.FAILED])));
          if (getAffectedRows(failedUpdate) > 0) {
            await markTopupPaymentFailed(order2.id, `\u652F\u4ED8\u7F51\u5173 ${realMethodCode} \u8FD4\u56DE\u5931\u8D25`);
          }
        } else if (result.status === "refunded") {
          await recordGatewayFullRefund(result.orderId, result.amount, result.tradeNo);
        } else if (result.status === "cancelled" && order2.payStatus !== ORDER_PAY_STATUS.REFUNDED) {
          if (order2.payStatus === ORDER_PAY_STATUS.PAID) throw new Error("A paid order requires verified full-refund evidence, not a cancellation");
          await logger.warn(`Order ${order2.id} ${result.status} via ${realMethodCode}`, {
            source: "webhook",
            details: { tradeNo: result.tradeNo, amount: result.amount }
          });
          const targetPayStatus = ORDER_PAY_STATUS.CANCELLED;
          const updateData = {
            payStatus: targetPayStatus,
            status: ORDER_STATUS.FAILED,
            payMethod: realMethodCode
          };
          if (result.tradeNo) updateData.tradeNo = result.tradeNo;
          const closedUpdate = await db.update(orders).set(updateData).where(and(
            eq(orders.id, result.orderId),
            inArray(orders.payStatus, [ORDER_PAY_STATUS.PENDING, ORDER_PAY_STATUS.FAILED, ORDER_PAY_STATUS.CANCELLED])
          ));
          const currentPayStatus = getAffectedRows(closedUpdate) > 0 ? targetPayStatus : (_a = (await db.select({ payStatus: orders.payStatus }).from(orders).where(eq(orders.id, result.orderId)).limit(1))[0]) == null ? void 0 : _a.payStatus;
          if (currentPayStatus === targetPayStatus) {
            await cancelPromoCommission(result.orderId, `webhook_${result.status}`);
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

export { postHandler as default };
//# sourceMappingURL=_order_id_.post.mjs.map
