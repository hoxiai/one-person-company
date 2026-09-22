import { d as defineEventHandler, f as getRouterParam, e as createError, b as db, b6 as tickets, u as users, b7 as ticketMessages, b8 as userWallets, o as orders, b9 as fromScaled } from '../../../../nitro/nitro.mjs';
import { eq, asc, desc } from 'drizzle-orm';
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
  const idParam = getRouterParam(event, "id");
  const ticketId = parseInt(idParam, 10);
  if (!ticketId || isNaN(ticketId)) {
    throw createError({ statusCode: 400, statusMessage: "\u65E0\u6548\u7684\u5DE5\u5355 ID" });
  }
  const [ticket] = await db.select({
    id: tickets.id,
    ticketNo: tickets.ticketNo,
    userId: tickets.userId,
    userEmail: users.email,
    userNickname: users.nickname,
    category: tickets.category,
    title: tickets.title,
    status: tickets.status,
    priority: tickets.priority,
    context: tickets.context,
    lastRepliedAt: tickets.lastRepliedAt,
    lastRepliedBy: tickets.lastRepliedBy,
    createdAt: tickets.createdAt,
    updatedAt: tickets.updatedAt
  }).from(tickets).leftJoin(users, eq(tickets.userId, users.id)).where(eq(tickets.id, ticketId));
  if (!ticket) {
    throw createError({ statusCode: 404, statusMessage: "\u5DE5\u5355\u4E0D\u5B58\u5728" });
  }
  const [messages, walletRows, recentOrders] = await Promise.all([
    db.select().from(ticketMessages).where(eq(ticketMessages.ticketId, ticketId)).orderBy(asc(ticketMessages.createdAt)),
    db.select().from(userWallets).where(eq(userWallets.userId, ticket.userId)).limit(1),
    ticket.userEmail ? db.select({
      id: orders.id,
      amount: orders.amount,
      currency: orders.currency,
      payStatus: orders.payStatus,
      payMethod: orders.payMethod,
      createdAt: orders.createdAt
    }).from(orders).where(eq(orders.contactEmail, ticket.userEmail)).orderBy(desc(orders.createdAt)).limit(3) : Promise.resolve([])
  ]);
  const walletRow = walletRows[0];
  const userFinance = walletRow ? {
    cashBalance: fromScaled(walletRow.cashBalance),
    grantBalance: fromScaled(walletRow.grantBalance),
    subBalance: fromScaled(walletRow.subBalance),
    pointsBalance: fromScaled(walletRow.pointsBalance),
    tierLevel: walletRow.tierLevel,
    subExpiresAt: walletRow.subExpiresAt
  } : null;
  return {
    code: 200,
    data: {
      ticket,
      messages,
      userFinance,
      recentOrders
    }
  };
});

export { _id__get as default };
