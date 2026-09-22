import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, cj as requireOrderOwnership, aO as getUserSession, b as db, p as products } from '../../../../nitro/nitro.mjs';
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
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const _id__get = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    orderIdRequired: "\u8BA2\u5355 ID \u4E0D\u80FD\u4E3A\u7A7A",
    customPurchase: "\u81EA\u5B9A\u4E49\u8D2D\u4E70",
    defaultClientName: "\u5BA2\u6237"
  } : {
    orderIdRequired: "Order ID is required",
    customPurchase: "Custom Purchase",
    defaultClientName: "Customer"
  };
  const orderId = getRouterParam(event, "id");
  if (!orderId) {
    throw createError({
      statusCode: 400,
      message: messages.orderIdRequired
    });
  }
  const order = await requireOrderOwnership(event, orderId);
  const session = await getUserSession(event);
  let productDescription = messages.customPurchase;
  if (order.productId) {
    const productRecord = await db.select({ name: products.name }).from(products).where(eq(products.id, order.productId)).limit(1);
    if (productRecord.length) {
      productDescription = productRecord[0].name;
    }
  }
  const issueDate = order.paidAt ? new Date(order.paidAt) : new Date(order.createdAt);
  const formattedDate = issueDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return {
    id: order.id,
    status: order.payStatus,
    // e.g. "paid"
    dateIssue: formattedDate,
    amount: Number(order.amount),
    description: productDescription,
    qty: 1,
    // Defaulting to 1 for our current products
    rate: Number(order.amount),
    // Rate equals amount for qty=1
    currency: order.currency,
    client: {
      name: order.contactEmail || ((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.email) || messages.defaultClientName,
      email: order.contactEmail || ((_b = session == null ? void 0 : session.user) == null ? void 0 : _b.email) || ""
    }
  };
});

export { _id__get as default };
