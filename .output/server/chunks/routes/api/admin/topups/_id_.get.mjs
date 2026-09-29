import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, I as topups, b as db, z as orders, u as users, bw as balanceLogs, bx as BALANCE_SCALE } from '../../../../nitro/nitro.mjs';
import { or, eq, inArray, desc } from 'drizzle-orm';
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

const _id__get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7F3A\u5C11\u8BB0\u5F55\u6807\u8BC6" : "Missing record ID"
    });
  }
  const numId = Number(id);
  const whereCondition = !isNaN(numId) ? or(eq(topups.id, numId), eq(topups.orderId, id)) : eq(topups.orderId, id);
  const rows = await db.select({
    id: topups.id,
    orderId: topups.orderId,
    userId: topups.userId,
    userEmail: users.email,
    userNickname: users.nickname,
    paymentAmount: topups.paymentAmount,
    paymentCurrency: topups.paymentCurrency,
    creditAmountCents: topups.creditAmountCents,
    creditCurrency: topups.creditCurrency,
    exchangeRate: topups.exchangeRate,
    balanceType: topups.balanceType,
    status: topups.status,
    creditEventId: topups.creditEventId,
    refundEventId: topups.refundEventId,
    source: topups.source,
    walletId: topups.walletId,
    retryCount: topups.retryCount,
    shortfallCents: topups.shortfallCents,
    lastError: topups.lastError,
    paidAt: topups.paidAt,
    creditedAt: topups.creditedAt,
    refundedAt: topups.refundedAt,
    createdAt: topups.createdAt,
    updatedAt: topups.updatedAt,
    payMethod: orders.payMethod,
    tradeNo: orders.tradeNo,
    orderPayStatus: orders.payStatus,
    orderStatus: orders.status,
    orderAmount: orders.amount,
    orderCurrency: orders.currency,
    contactEmail: orders.contactEmail
  }).from(topups).leftJoin(users, eq(users.id, topups.userId)).leftJoin(orders, eq(orders.id, topups.orderId)).where(whereCondition).limit(1);
  if (!rows[0]) {
    throw createError({
      statusCode: 404,
      message: locale === "zh" ? "\u5145\u503C\u8BB0\u5F55\u4E0D\u5B58\u5728" : "Top-up record not found"
    });
  }
  const row = rows[0];
  const eventIds = [];
  if (row.creditEventId) eventIds.push(row.creditEventId);
  if (row.refundEventId) eventIds.push(row.refundEventId);
  let logs = [];
  if (eventIds.length > 0) {
    logs = await db.select({
      id: balanceLogs.id,
      balanceType: balanceLogs.balanceType,
      actionType: balanceLogs.actionType,
      amountCents: balanceLogs.amountCents,
      beforeBalanceCents: balanceLogs.beforeBalanceCents,
      afterBalanceCents: balanceLogs.afterBalanceCents,
      eventId: balanceLogs.eventId,
      remark: balanceLogs.remark,
      createdAt: balanceLogs.createdAt
    }).from(balanceLogs).where(inArray(balanceLogs.eventId, eventIds)).orderBy(desc(balanceLogs.createdAt));
  }
  return {
    code: 0,
    data: {
      ...row,
      creditAmount: Number(row.creditAmountCents || 0) / BALANCE_SCALE,
      shortfall: Number(row.shortfallCents || 0) / BALANCE_SCALE,
      balanceLogs: logs.map((l) => ({
        ...l,
        amount: Number(l.amountCents || 0) / BALANCE_SCALE,
        beforeBalance: Number(l.beforeBalanceCents || 0) / BALANCE_SCALE,
        afterBalance: Number(l.afterBalanceCents || 0) / BALANCE_SCALE
      }))
    }
  };
});

export { _id__get as default };
