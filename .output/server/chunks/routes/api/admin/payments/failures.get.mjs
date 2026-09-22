import { d as defineEventHandler, c as getRequestLocale, b as db, ap as failures, o as orders, e as createError } from '../../../../nitro/nitro.mjs';
import { eq, desc } from 'drizzle-orm';
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

const failures_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  try {
    const data = await db.select({
      id: failures.id,
      orderId: failures.orderId,
      cardBin: failures.cardBin,
      reason: failures.reason,
      amount: failures.amount,
      currency: orders.currency,
      payMethod: failures.payMethod,
      contactEmail: failures.contactEmail,
      rawResponse: failures.rawResponse,
      visitorId: failures.visitorId,
      createdAt: failures.createdAt
    }).from(failures).leftJoin(orders, eq(failures.orderId, orders.id)).orderBy(desc(failures.createdAt));
    return data;
  } catch (error) {
    console.error("Fetch failures error:", error);
    throw createError({
      statusCode: 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u5931\u8D25\u8BB0\u5F55\u5931\u8D25" : "Failed to fetch failures")
    });
  }
});

export { failures_get as default };
