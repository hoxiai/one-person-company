import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, M as orders, ax as getOrderRefund, a2 as ORDER_PAY_STATUS, aM as ORDER_STATUS, aD as readMinimalCheckoutBridgeMeta, aF as settlePaidTopup, aG as recoverCreditedApayTopup, aC as isMinimalCheckoutRelayOrder, aH as fulfillMinimalCheckoutRelay, aI as fulfillOrder, aJ as settlePromoCommission, aK as emitEvent, s as setAuditMeta } from '../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const fulfill_post = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7F3A\u5C11\u8BA2\u5355 ID" : "Missing order id"
    });
  }
  const existing = await db.select().from(orders).where(eq(orders.id, id)).limit(1);
  if (!existing.length) {
    throw createError({
      statusCode: 404,
      message: locale === "zh" ? "\u8BA2\u5355\u4E0D\u5B58\u5728" : "Order not found"
    });
  }
  const order = existing[0];
  const refund = await getOrderRefund(id);
  if (refund && !["rejected", "failed"].includes(refund.status)) throw createError({ statusCode: 409, message: locale === "zh" ? "\u9000\u6B3E\u6D41\u7A0B\u4E2D\u7684\u8BA2\u5355\u4E0D\u53EF\u91CD\u65B0\u5C65\u7EA6" : "Orders in the refund workflow cannot be fulfilled again" });
  if (order.payStatus !== ORDER_PAY_STATUS.PAID) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u53EA\u6709\u5DF2\u4ED8\u6B3E\u7684\u8BA2\u5355\u624D\u80FD\u6267\u884C\u5C65\u7EA6" : "Only paid orders can be fulfilled"
    });
  }
  const wasAlreadyDelivered = order.status === ORDER_STATUS.DELIVERED || order.status === ORDER_STATUS.ACTIVE || order.status === ORDER_STATUS.COMPLETED;
  const isApayTopup = ((_b = (_a = readMinimalCheckoutBridgeMeta(order.metaData)) == null ? void 0 : _a.attach) == null ? void 0 : _b.walletOwner) === "apay";
  let fulfilledOrder = null;
  if (isApayTopup) {
    await settlePaidTopup(id);
    const recovered = await recoverCreditedApayTopup(id);
    if (!recovered) {
      throw createError({
        statusCode: 500,
        message: locale === "zh" ? "\u5145\u503C\u5165\u8D26\u6216\u5C65\u7EA6\u6062\u590D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5145\u503C\u8BB0\u5F55" : "Top-up settlement or fulfillment recovery failed"
      });
    }
    const rows = await db.select().from(orders).where(eq(orders.id, id)).limit(1);
    fulfilledOrder = rows[0] || order;
  } else {
    const isMinimalRelay = isMinimalCheckoutRelayOrder(order);
    fulfilledOrder = isMinimalRelay ? await fulfillMinimalCheckoutRelay(id) : await fulfillOrder(id);
    if (!fulfilledOrder) {
      throw createError({
        statusCode: 500,
        message: locale === "zh" ? "\u5C65\u7EA6\u6267\u884C\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5546\u54C1\u914D\u7F6E\u6216\u5E93\u5B58" : "Fulfillment failed, please check product stock or configuration"
      });
    }
    if (!wasAlreadyDelivered) {
      await settlePromoCommission(id).catch((e) => console.error("[ManualFulfill] settlePromoCommission failed:", e));
      await emitEvent("order.paid", fulfilledOrder).catch((e) => console.error("[ManualFulfill] emitEvent failed:", e));
    }
  }
  const updatedRows = await db.select().from(orders).where(eq(orders.id, id)).limit(1);
  const updatedOrder = updatedRows[0] || fulfilledOrder;
  setAuditMeta(event, {
    summary: `Manually triggered fulfillment for order ${id}`,
    details: {
      id,
      status: updatedOrder.status,
      deliveryInfo: updatedOrder.deliveryInfo
    }
  });
  return {
    code: 0,
    message: locale === "zh" ? "\u5C65\u7EA6\u6267\u884C\u6210\u529F" : "Order fulfilled successfully",
    data: updatedOrder
  };
});

export { fulfill_post as default };
//# sourceMappingURL=fulfill.post.mjs.map
