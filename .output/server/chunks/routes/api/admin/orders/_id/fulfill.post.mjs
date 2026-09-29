import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, z as orders, O as ORDER_PAY_STATUS, aa as isMinimalCheckoutRelayOrder, af as fulfillMinimalCheckoutRelay, ag as fulfillOrder, s as setAuditMeta } from '../../../../../nitro/nitro.mjs';
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

const fulfill_post = defineEventHandler(async (event) => {
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
  if (order.payStatus !== ORDER_PAY_STATUS.PAID) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u53EA\u6709\u5DF2\u4ED8\u6B3E\u7684\u8BA2\u5355\u624D\u80FD\u6267\u884C\u5C65\u7EA6" : "Only paid orders can be fulfilled"
    });
  }
  const isMinimalRelay = isMinimalCheckoutRelayOrder(order);
  const fulfilledOrder = isMinimalRelay ? await fulfillMinimalCheckoutRelay(id) : await fulfillOrder(id);
  if (!fulfilledOrder) {
    throw createError({
      statusCode: 500,
      message: locale === "zh" ? "\u5C65\u7EA6\u6267\u884C\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5546\u54C1\u914D\u7F6E\u6216\u5E93\u5B58" : "Fulfillment failed, please check product stock or configuration"
    });
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
