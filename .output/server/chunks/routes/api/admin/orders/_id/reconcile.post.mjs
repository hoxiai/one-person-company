import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, aa as reconcileOrder, s as setAuditMeta } from '../../../../../nitro/nitro.mjs';
import 'drizzle-orm';
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
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const reconcile_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u8BA2\u5355 ID" : "Missing order id" });
  }
  const result = await reconcileOrder(id, "admin-manual");
  setAuditMeta(event, {
    action: "reconcile",
    resource: "orders",
    resourceId: id,
    summary: `Reconciled order ${id} \u2192 ${result.outcome}`,
    details: result
  });
  const messages = {
    paid: { zh: "\u67E5\u5230\u5DF2\u652F\u4ED8\uFF0C\u8BA2\u5355\u72B6\u6001\u5DF2\u540C\u6B65\u5E76\u89E6\u53D1\u5C65\u7EA6", en: "Confirmed paid; order synced and fulfilled" },
    already_paid: { zh: "\u8BA2\u5355\u672C\u5730\u5DF2\u662F\u5DF2\u652F\u4ED8", en: "Order is already marked paid" },
    unpaid: { zh: "\u7F51\u5173\u786E\u8BA4\u8BE5\u8BA2\u5355\u5C1A\u672A\u652F\u4ED8", en: "Gateway confirms the order is unpaid" },
    closed: { zh: "\u8BE5\u8BA2\u5355\u5728\u7F51\u5173\u4FA7\u5DF2\u5173\u95ED\u6216\u5DF2\u9000\u6B3E", en: "Order is closed or refunded at the gateway" },
    unsupported: { zh: "\u8BE5\u652F\u4ED8\u65B9\u5F0F\u672A\u63D0\u4F9B\u67E5\u5355\u811A\u672C\uFF08payments/<code>/query.js\uFF09", en: "This method has no query.js script" },
    order_not_found: { zh: "\u8BA2\u5355\u4E0D\u5B58\u5728", en: "Order not found" },
    method_not_found: { zh: "\u8BA2\u5355\u6CA1\u6709\u5173\u8054\u7684\u652F\u4ED8\u65B9\u5F0F\uFF0C\u6216\u8BE5\u652F\u4ED8\u65B9\u5F0F\u5DF2\u5220\u9664", en: "Order has no usable payment method" },
    amount_mismatch: { zh: "\u7F51\u5173\u91D1\u989D\u4E0E\u8BA2\u5355\u91D1\u989D\u4E0D\u4E00\u81F4\uFF0C\u672A\u505A\u4EFB\u4F55\u53D8\u66F4", en: "Amount mismatch; nothing changed" },
    error: { zh: "\u67E5\u5355\u5931\u8D25", en: "Query failed" }
  };
  const m = messages[result.outcome] || messages.error;
  return {
    code: result.outcome === "paid" || result.outcome === "already_paid" ? 0 : 1,
    message: locale === "zh" ? m.zh : m.en,
    data: result
  };
});

export { reconcile_post as default };
