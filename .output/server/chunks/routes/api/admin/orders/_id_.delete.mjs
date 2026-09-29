import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, g as getQuery, b as db, z as orders, O as ORDER_PAY_STATUS, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7F3A\u5C11\u8BA2\u5355 ID" : "Missing order id"
    });
  }
  const query = getQuery(event);
  const isHard = query.hard === "true" || query.hard === "1";
  const existing = await db.select().from(orders).where(eq(orders.id, id)).limit(1);
  if (!existing.length) {
    throw createError({
      statusCode: 404,
      message: locale === "zh" ? "\u8BA2\u5355\u4E0D\u5B58\u5728" : "Order not found"
    });
  }
  const order = existing[0];
  if (isHard) {
    if (order.payStatus === ORDER_PAY_STATUS.PAID) {
      throw createError({
        statusCode: 400,
        message: locale === "zh" ? "\u5DF2\u652F\u4ED8\u8BA2\u5355\u6D89\u53CA\u8D22\u52A1\u8BB0\u8D26\u4E0E\u5BA1\u8BA1\u6D41\u6C34\uFF0C\u4E25\u7981\u5F7B\u5E95\u5220\u9664\u3002\u5982\u4E0D\u9700\u8981\u53EF\u5C06\u5176\u79FB\u5165\u56DE\u6536\u7AD9\u3002" : "Paid orders are linked to financial ledgers and audits, and cannot be permanently deleted. You may move them to trash instead."
      });
    }
    await db.delete(orders).where(eq(orders.id, id));
    setAuditMeta(event, {
      summary: `Permanently deleted order ${id}`,
      details: {
        id,
        productId: order.productId,
        amount: order.amount,
        currency: order.currency,
        payStatus: order.payStatus,
        status: order.status
      }
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u8BA2\u5355\u5DF2\u5F7B\u5E95\u5220\u9664" : "Order permanently deleted",
      data: { id }
    };
  }
  if (order.status === "deleted" || order.payStatus === "deleted") {
    return {
      code: 0,
      message: locale === "zh" ? "\u8BA2\u5355\u5DF2\u5728\u56DE\u6536\u7AD9\u4E2D" : "Order is already in trash",
      data: { id }
    };
  }
  let meta = order.metaData || {};
  if (typeof meta === "string") {
    try {
      meta = JSON.parse(meta);
    } catch {
      meta = {};
    }
  }
  meta.deleted_meta = {
    deleted_at: (/* @__PURE__ */ new Date()).toISOString(),
    previous_status: order.status,
    previous_pay_status: order.payStatus,
    deleted_by: "admin"
  };
  await db.update(orders).set({
    status: "deleted",
    metaData: meta
  }).where(eq(orders.id, id));
  setAuditMeta(event, {
    summary: `Moved order ${id} to trash`,
    details: {
      id,
      previousStatus: order.status,
      previousPayStatus: order.payStatus
    }
  });
  return {
    code: 0,
    message: locale === "zh" ? "\u8BA2\u5355\u5DF2\u79FB\u5165\u56DE\u6536\u7AD9" : "Order moved to trash",
    data: { id }
  };
});

export { _id__delete as default };
