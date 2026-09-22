import { d as defineEventHandler, c as getRequestLocale, g as getQuery, e as createError, bZ as resolveOrderAccess, b as db, p as products } from '../../../nitro/nitro.mjs';
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

const detail_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const orderId = getQuery(event).orderId;
  if (!orderId) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u8BA2\u5355 ID" : "Missing order id" });
  }
  const { order, owned } = await resolveOrderAccess(event, orderId);
  let product = null;
  if (order.productId) {
    const productRows = await db.select({
      name: products.name,
      imageUrl: products.imageUrl,
      type: products.type,
      slug: products.slug
    }).from(products).where(eq(products.id, order.productId)).limit(1);
    product = productRows[0] || null;
  }
  let parsedMetaData = null;
  if (order.metaData) {
    try {
      parsedMetaData = typeof order.metaData === "string" ? JSON.parse(order.metaData) : order.metaData;
    } catch (e) {
      console.error("Failed to parse metaData JSON", e);
    }
  }
  if (!owned) {
    const { checkoutBridge, currencySnapshot } = parsedMetaData || {};
    return {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
      payStatus: order.payStatus,
      createdAt: order.createdAt,
      paidAt: order.paidAt,
      tradeNo: null,
      payMethod: order.payMethod,
      contactEmail: null,
      deliveryInfo: null,
      metaData: { checkoutBridge, currencySnapshot },
      productName: (product == null ? void 0 : product.name) || null,
      productImageUrl: (product == null ? void 0 : product.imageUrl) || null,
      productType: (product == null ? void 0 : product.type) || null,
      productSlug: (product == null ? void 0 : product.slug) || null
    };
  }
  return {
    id: order.id,
    amount: order.amount,
    currency: order.currency,
    status: order.status,
    payStatus: order.payStatus,
    createdAt: order.createdAt,
    paidAt: order.paidAt,
    tradeNo: order.tradeNo,
    payMethod: order.payMethod,
    contactEmail: order.contactEmail,
    deliveryInfo: order.deliveryInfo,
    metaData: parsedMetaData,
    productName: (product == null ? void 0 : product.name) || null,
    productImageUrl: (product == null ? void 0 : product.imageUrl) || null,
    productType: (product == null ? void 0 : product.type) || null,
    productSlug: (product == null ? void 0 : product.slug) || null
  };
});

export { detail_get as default };
