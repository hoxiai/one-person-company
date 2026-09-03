import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, o as orders, s as setAuditMeta, O as ORDER_PAY_STATUS, T as isMinimalCheckoutRelayOrder, U as readMinimalCheckoutBridgeMeta, V as createOrderAttribution, W as settlePaidTopup, X as recoverCreditedApayTopup, Y as fulfillMinimalCheckoutRelay, Z as fulfillOrder, _ as settlePromoCommission, $ as emitEvent, a0 as refundTopup } from '../../../../nitro/nitro.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const _id__put = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11 ID" : "Missing id" });
  const body = await readBody(event);
  const existing = await db.select({ status: orders.status, payStatus: orders.payStatus }).from(orders).where(eq(orders.id, id)).limit(1);
  const updateData = {};
  if (body.status) updateData.status = body.status;
  if (body.payStatus) updateData.payStatus = body.payStatus;
  if (body.deliveryInfo !== void 0) updateData.deliveryInfo = body.deliveryInfo;
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
    const isApayTopup = ((_b = (_a = readMinimalCheckoutBridgeMeta(updatedOrder == null ? void 0 : updatedOrder.metaData)) == null ? void 0 : _a.attach) == null ? void 0 : _b.walletOwner) === "apay";
    if (!wasAlreadyPaid) {
      await createOrderAttribution({
        orderId: id,
        buyerUserId: updatedOrder == null ? void 0 : updatedOrder.userId,
        metaData: updatedOrder == null ? void 0 : updatedOrder.metaData
      });
    }
    if (isApayTopup) {
      await settlePaidTopup(id);
      await recoverCreditedApayTopup(id);
    } else if (!wasAlreadyPaid) {
      const fulfilledOrder = isMinimalRelay ? await fulfillMinimalCheckoutRelay(id) : await fulfillOrder(id);
      if (fulfilledOrder) {
        await settlePromoCommission(id);
        await emitEvent("order.paid", fulfilledOrder);
      }
    }
  }
  if (body.payStatus === ORDER_PAY_STATUS.REFUNDED) {
    const refundedOrder = result[0];
    if (refundedOrder == null ? void 0 : refundedOrder.userId) {
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
  return result[0];
});

export { _id__put as default };
