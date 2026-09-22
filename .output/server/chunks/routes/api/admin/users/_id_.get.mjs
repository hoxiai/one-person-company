import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, b8 as userWallets, u as users, p as products, o as orders, z as subscriptions, bf as oauthAccounts, bg as userTokens, v as visitorProfiles, au as promoMembers, G as emailLogs, q as aggregateOrderAccountingTotals } from '../../../../nitro/nitro.mjs';
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

const _id__get = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7528\u6237 ID \u4E0D\u80FD\u4E3A\u7A7A" : "User ID is required" });
  }
  const userId = Number(id);
  try {
    const userRows = await db.select({
      id: users.id,
      email: users.email,
      nickname: users.nickname,
      avatarUrl: users.avatarUrl,
      status: users.status,
      createdAt: users.createdAt,
      lastLoginAt: users.lastLoginAt,
      emailVerifiedAt: users.emailVerifiedAt,
      cashBalance: userWallets.cashBalance,
      grantBalance: userWallets.grantBalance,
      subBalance: userWallets.subBalance,
      tierLevel: userWallets.tierLevel,
      subExpiresAt: userWallets.subExpiresAt
    }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id)).where(eq(users.id, userId)).limit(1);
    const user = userRows[0];
    if (!user) {
      throw createError({ statusCode: 404, message: locale === "zh" ? "\u7528\u6237\u4E0D\u5B58\u5728" : "User not found" });
    }
    const BALANCE_SCALE = 1e8;
    const toDisplayBalance = (v) => Number(v || 0) / BALANCE_SCALE;
    const [orderRows, subscriptionRows, oauthRows, tokenRows, profileRows, promoRows, emailLogRows] = await Promise.all([
      db.select({
        id: orders.id,
        amount: orders.amount,
        currency: orders.currency,
        metaData: orders.metaData,
        status: orders.status,
        payStatus: orders.payStatus,
        payMethod: orders.payMethod,
        contactEmail: orders.contactEmail,
        createdAt: orders.createdAt,
        paidAt: orders.paidAt,
        productId: products.id,
        productName: products.name,
        productSlug: products.slug,
        productImage: products.imageUrl
      }).from(orders).leftJoin(products, eq(orders.productId, products.id)).where(eq(orders.userId, userId)).orderBy(desc(orders.createdAt)),
      db.select({
        id: subscriptions.id,
        status: subscriptions.status,
        interval: subscriptions.interval,
        intervalCount: subscriptions.intervalCount,
        amount: subscriptions.amount,
        currency: subscriptions.currency,
        payMethod: subscriptions.payMethod,
        currentPeriodStart: subscriptions.currentPeriodStart,
        currentPeriodEnd: subscriptions.currentPeriodEnd,
        cancelAtPeriodEnd: subscriptions.cancelAtPeriodEnd,
        productId: products.id,
        productName: products.name,
        createdAt: subscriptions.createdAt
      }).from(subscriptions).leftJoin(products, eq(subscriptions.productId, products.id)).where(eq(subscriptions.userId, userId)).orderBy(desc(subscriptions.createdAt)),
      db.select({
        provider: oauthAccounts.provider,
        providerAccountId: oauthAccounts.providerAccountId,
        createdAt: oauthAccounts.createdAt
      }).from(oauthAccounts).where(eq(oauthAccounts.userId, userId)),
      // Token identity only — never the raw token value.
      db.select({
        id: userTokens.id,
        name: userTokens.name,
        lastUsedAt: userTokens.lastUsedAt,
        expiresAt: userTokens.expiresAt,
        revoked: userTokens.revoked,
        createdAt: userTokens.createdAt
      }).from(userTokens).where(eq(userTokens.userId, userId)).orderBy(desc(userTokens.createdAt)),
      db.select().from(visitorProfiles).where(eq(visitorProfiles.userId, userId)).orderBy(desc(visitorProfiles.lastSeenAt)).limit(1),
      db.select({
        role: promoMembers.role,
        status: promoMembers.status,
        promoCode: promoMembers.promoCode,
        inviteCode: promoMembers.inviteCode,
        agentCode: promoMembers.agentCode,
        joinedAt: promoMembers.joinedAt
      }).from(promoMembers).where(eq(promoMembers.userId, userId)).limit(1),
      db.select().from(emailLogs).where(eq(emailLogs.to, user.email)).orderBy(desc(emailLogs.createdAt)).limit(30)
    ]);
    const typedOrderRows = orderRows;
    const totalSpentByCurrency = aggregateOrderAccountingTotals(
      typedOrderRows.filter((order) => order.payStatus === "paid")
    );
    const responseOrders = typedOrderRows.map(({ metaData: _metaData, ...order }) => order);
    return {
      user: {
        ...user,
        cashBalance: toDisplayBalance(user.cashBalance),
        grantBalance: toDisplayBalance(user.grantBalance),
        subBalance: toDisplayBalance(user.subBalance)
      },
      stats: {
        totalOrders: typedOrderRows.length,
        totalSpent: totalSpentByCurrency.length === 1 ? ((_a = totalSpentByCurrency[0]) == null ? void 0 : _a.amount) || 0 : 0,
        totalSpentByCurrency,
        unpaidOrders: typedOrderRows.filter((order) => order.payStatus !== "paid").length
      },
      orders: responseOrders,
      subscriptions: subscriptionRows,
      oauthAccounts: oauthRows,
      tokens: tokenRows,
      profile: profileRows[0] || null,
      promoMember: promoRows[0] || null,
      emailLogs: emailLogRows || []
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u7528\u6237\u8BE6\u60C5\u5931\u8D25" : "Failed to fetch user detail")
    });
  }
});

export { _id__get as default };
