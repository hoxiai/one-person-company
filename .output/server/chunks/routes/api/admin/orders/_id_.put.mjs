import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, S as ORDER_PAY_STATUS, ax as getOrderRefund, b as db, M as orders, ay as orderMetaPathUpdate, az as captureRefundAssetPolicy, aA as refunds, aB as getAffectedRows, s as setAuditMeta, aC as isMinimalCheckoutRelayOrder, aD as readMinimalCheckoutBridgeMeta, aE as createOrderAttribution, aF as settlePaidTopup, aG as recoverCreditedApayTopup, aH as fulfillMinimalCheckoutRelay, aI as fulfillOrder, aJ as settlePromoCommission, aK as emitEvent, aL as cancelPromoCommission } from '../../../../nitro/nitro.mjs';
import { eq, and, notExists, inArray } from 'drizzle-orm';
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
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

const _id__put = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  const body = await readBody(event);
  if (body.payStatus === ORDER_PAY_STATUS.REFUNDED) {
    throw createError({ statusCode: 409, message: locale === "zh" ? "\u8BF7\u901A\u8FC7\u9000\u6B3E\u64CD\u4F5C\u53D1\u8D77\u539F\u8DEF\u9000\u6B3E\uFF0C\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539\u9000\u6B3E\u72B6\u6001" : "Use the refund action to issue an original-route refund; direct status editing is disabled" });
  }
  const refund = await getOrderRefund(id);
  if (refund && !["rejected", "failed"].includes(refund.status)) {
    throw createError({ statusCode: 409, message: locale === "zh" ? "\u8BA2\u5355\u5DF2\u6709\u9000\u6B3E\u6D41\u7A0B\uFF0C\u8BF7\u5728\u9000\u6B3E\u9762\u677F\u5904\u7406" : "This order has a refund in progress; use the refund panel" });
  }
  const existing = await db.select({ status: orders.status, payStatus: orders.payStatus }).from(orders).where(eq(orders.id, id)).limit(1);
  const previousPayStatus = (_a = existing[0]) == null ? void 0 : _a.payStatus;
  const endsCharge = body.payStatus === ORDER_PAY_STATUS.CANCELLED;
  const wasCharged = previousPayStatus === ORDER_PAY_STATUS.PAID || previousPayStatus === ORDER_PAY_STATUS.REFUNDED;
  if (wasCharged && body.payStatus && body.payStatus !== previousPayStatus) {
    throw createError({ statusCode: 409, message: locale === "zh" ? "\u5DF2\u6536\u6B3E\u8BA2\u5355\u53EA\u80FD\u901A\u8FC7\u9000\u6B3E\u6D41\u7A0B\u5173\u95ED" : "Charged orders must be closed through the refund workflow" });
  }
  if (body.status === "deleted" || body.payStatus === "deleted") {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u8BF7\u4F7F\u7528\u4E13\u95E8\u7684\u5220\u9664\u64CD\u4F5C\u5C06\u8BA2\u5355\u79FB\u5165\u56DE\u6536\u7AD9" : "Please use the dedicated delete action to move the order to trash"
    });
  }
  if (wasCharged && body.payStatus === ORDER_PAY_STATUS.PENDING) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u5DF2\u652F\u4ED8\u6216\u5DF2\u9000\u6B3E\u7684\u8BA2\u5355\u4E0D\u80FD\u76F4\u63A5\u6539\u56DE\u5F85\u652F\u4ED8\u72B6\u6001\u3002\u5982\u9700\u53D6\u6D88\u6216\u9000\u6B3E\uFF0C\u8BF7\u4FEE\u6539\u4E3A\u201C\u5DF2\u9000\u6B3E\u201D\u6216\u201C\u5DF2\u53D6\u6D88\u201D\u3002" : 'Paid or refunded orders cannot be set back to pending. Please select "refunded" or "cancelled".'
    });
  }
  if ((previousPayStatus === ORDER_PAY_STATUS.REFUNDED || previousPayStatus === ORDER_PAY_STATUS.CANCELLED) && body.payStatus === ORDER_PAY_STATUS.PAID) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u5DF2\u9000\u6B3E\u6216\u5DF2\u53D6\u6D88\u7684\u8BA2\u5355\u4E0D\u80FD\u518D\u6B21\u4FEE\u6539\u4E3A\u201C\u5DF2\u652F\u4ED8\u201D\u72B6\u6001\u3002" : "Refunded or cancelled orders cannot be changed back to paid."
    });
  }
  const updateData = {};
  if (body.status) updateData.status = body.status;
  if (body.payStatus) updateData.payStatus = body.payStatus;
  if (body.deliveryInfo !== void 0) updateData.deliveryInfo = body.deliveryInfo;
  if (body.payMethod !== void 0) updateData.payMethod = body.payMethod;
  if (body.tradeNo !== void 0) updateData.tradeNo = body.tradeNo;
  if (body.payStatus === ORDER_PAY_STATUS.PAID && previousPayStatus !== ORDER_PAY_STATUS.PAID) {
    updateData.paidAt = /* @__PURE__ */ new Date();
    updateData.metaData = orderMetaPathUpdate(["apayRefundAssetPolicy"], await captureRefundAssetPolicy());
  }
  const updateResult = await db.update(orders).set(updateData).where(and(eq(orders.id, id), eq(orders.payStatus, previousPayStatus || ""), notExists(
    db.select({ id: refunds.id }).from(refunds).where(and(eq(refunds.orderId, id), inArray(refunds.status, ["requested", "processing", "unknown", "succeeded"])))
  )));
  if (!getAffectedRows(updateResult)) throw createError({ statusCode: 409, message: "Order changed concurrently; refresh before retrying" });
  const result = await db.select().from(orders).where(eq(orders.id, id)).limit(1);
  if (!result[0]) throw createError({ statusCode: 409, message: "Order changed concurrently; refresh before retrying" });
  setAuditMeta(event, {
    summary: `Updated order ${id}`,
    details: {
      before: existing[0] ? { status: existing[0].status, payStatus: existing[0].payStatus } : null,
      after: updateData
    }
  });
  const wasAlreadyPaid = existing.length > 0 && existing[0].payStatus === ORDER_PAY_STATUS.PAID;
  if (body.payStatus === ORDER_PAY_STATUS.PAID) {
    const updatedOrder = result[0];
    const isMinimalRelay = isMinimalCheckoutRelayOrder(updatedOrder);
    const isApayTopup = ((_c = (_b = readMinimalCheckoutBridgeMeta(updatedOrder == null ? void 0 : updatedOrder.metaData)) == null ? void 0 : _b.attach) == null ? void 0 : _c.walletOwner) === "apay";
    if (!wasAlreadyPaid) {
      await createOrderAttribution({
        orderId: id,
        buyerUserId: updatedOrder == null ? void 0 : updatedOrder.userId,
        metaData: updatedOrder == null ? void 0 : updatedOrder.metaData
      });
    }
    if (isApayTopup) {
      await settlePaidTopup(id);
      await recoverCreditedApayTopup(id, { paidTransition: !wasAlreadyPaid });
    } else if (!wasAlreadyPaid) {
      const fulfilledOrder = isMinimalRelay ? await fulfillMinimalCheckoutRelay(id) : await fulfillOrder(id);
      if (fulfilledOrder) {
        await settlePromoCommission(id);
        await emitEvent("order.paid", fulfilledOrder);
      }
    }
  }
  if (endsCharge) {
    await cancelPromoCommission(id, `admin_${body.payStatus}`);
  }
  return result[0];
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
