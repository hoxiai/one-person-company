import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, z as orders, O as ORDER_PAY_STATUS, ab as findSubscriptionRefundImpact, ac as describeSubscriptionRefundImpact, s as setAuditMeta, ad as isMinimalCheckoutRelayOrder, ae as readMinimalCheckoutBridgeMeta, af as createOrderAttribution, ag as settlePaidTopup, ah as recoverCreditedApayTopup, ai as fulfillMinimalCheckoutRelay, aj as fulfillOrder, ak as settlePromoCommission, al as emitEvent, am as cancelPromoCommission, an as revokeSubscriptionForOrder, ao as refundTopup, ap as sendMinimalCheckoutRefundNotification, aq as SUBSCRIPTION_REFUND_IMPACT_CODE } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const _id__put = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  const body = await readBody(event);
  const existing = await db.select({ status: orders.status, payStatus: orders.payStatus }).from(orders).where(eq(orders.id, id)).limit(1);
  const previousPayStatus = (_a = existing[0]) == null ? void 0 : _a.payStatus;
  const endsCharge = body.payStatus === ORDER_PAY_STATUS.REFUNDED || body.payStatus === ORDER_PAY_STATUS.CANCELLED;
  const wasCharged = previousPayStatus === ORDER_PAY_STATUS.PAID || previousPayStatus === ORDER_PAY_STATUS.REFUNDED;
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
  if (endsCharge && wasCharged && previousPayStatus !== body.payStatus && body.confirmSubscriptionImpact !== true) {
    const impact = await findSubscriptionRefundImpact(String(id));
    if (impact) {
      throw createError({
        statusCode: 409,
        message: describeSubscriptionRefundImpact(impact, locale, body.payStatus),
        data: { code: SUBSCRIPTION_REFUND_IMPACT_CODE, impact }
      });
    }
  }
  const updateData = {};
  if (body.status) updateData.status = body.status;
  if (body.payStatus) updateData.payStatus = body.payStatus;
  if (body.deliveryInfo !== void 0) updateData.deliveryInfo = body.deliveryInfo;
  if (body.payMethod !== void 0) updateData.payMethod = body.payMethod;
  if (body.tradeNo !== void 0) updateData.tradeNo = body.tradeNo;
  if (body.payStatus === ORDER_PAY_STATUS.PAID && previousPayStatus !== ORDER_PAY_STATUS.PAID) {
    updateData.paidAt = /* @__PURE__ */ new Date();
  }
  const result = await db.update(orders).set(updateData).where(eq(orders.id, id)).returning();
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
    const refundedOrder = result[0];
    await cancelPromoCommission(id, `admin_${body.payStatus}`);
    if (wasCharged) {
      try {
        await revokeSubscriptionForOrder(String(id), `admin_${body.payStatus}`);
      } catch (error) {
        console.error(`[Subscription] failed to revoke for refunded order ${id}:`, error);
      }
    }
    if ((body.payStatus === ORDER_PAY_STATUS.REFUNDED || wasCharged) && (refundedOrder == null ? void 0 : refundedOrder.userId)) {
      try {
        const clawback = await refundTopup(id);
        if (clawback.shortfall > 0) {
          console.warn(`[Balance] refund clawback short by ${clawback.shortfall} for order ${id} (user ${refundedOrder.userId})`);
        }
      } catch (error) {
        console.error(`[Balance] failed to claw back refunded order ${id}:`, error);
        throw error;
      }
    }
  }
  if (body.payStatus === ORDER_PAY_STATUS.REFUNDED && wasCharged && result[0]) {
    const notification = await sendMinimalCheckoutRefundNotification(result[0]);
    if (!notification.skipped && !notification.delivered) {
      throw createError({ statusCode: 502, message: locale === "zh" ? "\u9000\u6B3E\u72B6\u6001\u5DF2\u4FDD\u5B58\uFF0C\u4E0B\u6E38\u901A\u77E5\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5" : "Refund saved; downstream notification failed, retry required" });
    }
  }
  return result[0];
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
