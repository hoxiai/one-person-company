import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, z as orders, O as ORDER_PAY_STATUS, ao as ORDER_STATUS, s as setAuditMeta } from '../../../../../nitro/nitro.mjs';
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

const restore_post = defineEventHandler(async (event) => {
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
  if (order.status !== "deleted" && order.payStatus !== "deleted") {
    return {
      code: 0,
      message: locale === "zh" ? "\u8BA2\u5355\u672A\u5728\u56DE\u6536\u7AD9\u4E2D\uFF0C\u65E0\u9700\u6062\u590D" : "Order is not in trash",
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
  const deletedMeta = meta.deleted_meta;
  let targetStatus = (deletedMeta == null ? void 0 : deletedMeta.previous_status) && deletedMeta.previous_status !== "deleted" ? deletedMeta.previous_status : order.payStatus === ORDER_PAY_STATUS.PAID ? ORDER_STATUS.PROCESSING : ORDER_STATUS.NONE;
  let targetPayStatus = order.payStatus;
  if (targetPayStatus === "deleted") {
    targetPayStatus = (deletedMeta == null ? void 0 : deletedMeta.previous_pay_status) && deletedMeta.previous_pay_status !== "deleted" ? deletedMeta.previous_pay_status : ORDER_PAY_STATUS.PENDING;
  }
  delete meta.deleted_meta;
  await db.update(orders).set({
    status: targetStatus,
    payStatus: targetPayStatus,
    metaData: meta
  }).where(eq(orders.id, id));
  setAuditMeta(event, {
    summary: `Restored order ${id} from trash`,
    details: {
      id,
      restoredStatus: targetStatus,
      restoredPayStatus: targetPayStatus
    }
  });
  return {
    code: 0,
    message: locale === "zh" ? "\u8BA2\u5355\u5DF2\u6210\u529F\u6062\u590D" : "Order restored successfully",
    data: {
      id,
      status: targetStatus,
      payStatus: targetPayStatus
    }
  };
});

export { restore_post as default };
