import { d as defineEventHandler, c as getRequestLocale, g as getQuery, v as users, cM as userWallets, b as db, d6 as getTopupRules, I as orders, e as createError, J as aggregateOrderAccountingTotals } from '../../../nitro/nitro.mjs';
import { sql, or, like, isNotNull, isNull, and, count, desc, asc, eq, inArray } from 'drizzle-orm';
import 'node:crypto';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';

const EMPTY_ORDER_METRICS = {
  totalOrders: 0,
  paidOrders: 0,
  unpaidOrders: 0,
  totalSpend: 0,
  totalSpentByCurrency: []
};
function buildUserOrderMetricsMap(orderRows) {
  const grouped = /* @__PURE__ */ new Map();
  for (const row of orderRows) {
    const uid = Number(row.userId);
    if (!Number.isFinite(uid) || uid <= 0) continue;
    let list = grouped.get(uid);
    if (!list) {
      list = [];
      grouped.set(uid, list);
    }
    list.push(row);
  }
  const metricsMap = /* @__PURE__ */ new Map();
  for (const [uid, rows] of grouped.entries()) {
    const paidRows = rows.filter((r) => r.payStatus === "paid");
    const totalSpentByCurrency = aggregateOrderAccountingTotals(paidRows);
    const totalSpend = totalSpentByCurrency.reduce((sum, item) => sum + item.amount, 0);
    metricsMap.set(uid, {
      totalOrders: rows.length,
      paidOrders: paidRows.length,
      unpaidOrders: rows.length - paidRows.length,
      totalSpend,
      totalSpentByCurrency
    });
  }
  return metricsMap;
}
const index_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 15, 1), 100);
  const offset = (page - 1) * pageSize;
  const keyword = String(query.search || query.q || query.keyword || "").trim();
  const hasSpending = String(query.hasSpending || "").trim();
  const emailVerified = String(query.emailVerified || "").trim();
  const sortBy = String(query.sortBy || query.sort || "").trim();
  const sortOrder = String(query.sortOrder || query.order || "desc").trim().toLowerCase() === "asc" ? "asc" : "desc";
  const likePattern = keyword ? `%${keyword.toLowerCase()}%` : "";
  const emailLower = sql`lower(${users.email})`;
  const nicknameLower = sql`lower(coalesce(${users.nickname}, ''))`;
  const idLower = sql`lower(cast(${users.id} as text))`;
  const conditions = [];
  if (keyword) {
    conditions.push(or(
      like(emailLower, likePattern),
      like(nicknameLower, likePattern),
      like(idLower, likePattern)
    ));
  }
  if (emailVerified === "verified" || emailVerified === "true") {
    conditions.push(isNotNull(users.emailVerifiedAt));
  } else if (emailVerified === "unverified" || emailVerified === "false") {
    conditions.push(isNull(users.emailVerifiedAt));
  }
  const whereClause = conditions.length === 1 ? conditions[0] : conditions.length > 1 ? and(...conditions) : void 0;
  const isOrderMetricSort = ["spend", "totalSpend", "orders", "totalOrders", "paidOrders"].includes(sortBy);
  const hasSpendingFilter = hasSpending === "true" || hasSpending === "false";
  const requiresFullScan = isOrderMetricSort || hasSpendingFilter;
  try {
    const cashSumExpr = sql`coalesce(sum(${userWallets.cashBalance}), 0)`;
    const grantSumExpr = sql`coalesce(sum(${userWallets.grantBalance}), 0)`;
    const totalBalanceExpr = sql`(${cashSumExpr} + ${grantSumExpr})`;
    const [globalUserStatsRows, globalWalletStatsRows, topupRules] = await Promise.all([
      db.select({
        totalUsers: count(),
        verifiedUsers: sql`coalesce(sum(case when ${users.emailVerifiedAt} is not null then 1 else 0 end), 0)`
      }).from(users),
      db.select({
        totalCashBalance: cashSumExpr,
        totalGrantBalance: grantSumExpr
      }).from(userWallets),
      getTopupRules()
    ]);
    const globalTotalUsers = Number(((_a = globalUserStatsRows[0]) == null ? void 0 : _a.totalUsers) || 0);
    const globalVerifiedUsers = Number(((_b = globalUserStatsRows[0]) == null ? void 0 : _b.verifiedUsers) || 0);
    const globalCashBalance = Number(((_c = globalWalletStatsRows[0]) == null ? void 0 : _c.totalCashBalance) || 0) / 1e8;
    const globalGrantBalance = Number(((_d = globalWalletStatsRows[0]) == null ? void 0 : _d.totalGrantBalance) || 0) / 1e8;
    const globalTotalBalance = globalCashBalance + globalGrantBalance;
    const summary = {
      totalUsers: globalTotalUsers,
      verifiedUsers: globalVerifiedUsers,
      unverifiedUsers: Math.max(0, globalTotalUsers - globalVerifiedUsers),
      totalCashBalance: globalCashBalance,
      totalGrantBalance: globalGrantBalance,
      totalBalance: globalTotalBalance,
      walletEnabled: Boolean(topupRules == null ? void 0 : topupRules.enabled) || globalTotalBalance > 0
    };
    if (!requiresFullScan) {
      const totalResult = await db.select({ total: count() }).from(users).where(whereClause);
      const total2 = Number(((_e = totalResult[0]) == null ? void 0 : _e.total) || 0);
      const orderByClauses = sortBy === "balance" || sortBy === "availableBalance" ? [
        sortOrder === "asc" ? sql`${totalBalanceExpr} ASC` : sql`${totalBalanceExpr} DESC`,
        desc(users.id)
      ] : [
        sortOrder === "asc" ? asc(users.createdAt) : desc(users.createdAt),
        sortOrder === "asc" ? asc(users.id) : desc(users.id)
      ];
      const paginatedUsers = await db.select({
        id: users.id,
        username: users.email,
        email: users.email,
        nickname: users.nickname,
        createdAt: users.createdAt,
        status: users.status,
        lastLoginAt: users.lastLoginAt,
        emailVerifiedAt: users.emailVerifiedAt,
        cashBalance: cashSumExpr,
        grantBalance: grantSumExpr
      }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id)).where(whereClause).groupBy(
        users.id,
        users.email,
        users.nickname,
        users.createdAt,
        users.status,
        users.lastLoginAt,
        users.emailVerifiedAt
      ).orderBy(...orderByClauses).limit(pageSize).offset(offset);
      const userIds = paginatedUsers.map((u) => u.id);
      const orderRows2 = userIds.length > 0 ? await db.select({
        userId: orders.userId,
        amount: orders.amount,
        currency: orders.currency,
        metaData: orders.metaData,
        payStatus: orders.payStatus
      }).from(orders).where(and(
        inArray(orders.userId, userIds),
        sql`${orders.payStatus} != 'deleted'`,
        sql`${orders.status} != 'deleted'`
      )) : [];
      const orderMetricsMap2 = buildUserOrderMetricsMap(orderRows2);
      const finalUsers2 = paginatedUsers.map((user) => {
        const metrics = orderMetricsMap2.get(user.id) || EMPTY_ORDER_METRICS;
        const cashBalance = Number(user.cashBalance || 0) / 1e8;
        const grantBalance = Number(user.grantBalance || 0) / 1e8;
        return {
          id: user.id,
          username: user.username,
          email: user.email,
          nickname: user.nickname,
          createdAt: user.createdAt,
          status: user.status,
          lastLoginAt: user.lastLoginAt,
          emailVerifiedAt: user.emailVerifiedAt,
          cashBalance,
          grantBalance,
          availableBalance: cashBalance + grantBalance,
          totalOrders: metrics.totalOrders,
          paidOrders: metrics.paidOrders,
          unpaidOrders: metrics.unpaidOrders,
          totalSpend: metrics.totalSpend,
          totalSpentByCurrency: metrics.totalSpentByCurrency
        };
      });
      return {
        data: finalUsers2,
        total: total2,
        page,
        pageSize,
        summary
      };
    }
    let usersQuery = db.select({
      id: users.id,
      username: users.email,
      email: users.email,
      nickname: users.nickname,
      createdAt: users.createdAt,
      status: users.status,
      lastLoginAt: users.lastLoginAt,
      emailVerifiedAt: users.emailVerifiedAt,
      cashBalance: cashSumExpr,
      grantBalance: grantSumExpr
    }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id));
    if (whereClause) {
      usersQuery = usersQuery.where(whereClause);
    }
    const allUsers = await usersQuery.groupBy(
      users.id,
      users.email,
      users.nickname,
      users.createdAt,
      users.status,
      users.lastLoginAt,
      users.emailVerifiedAt
    ).orderBy(desc(users.createdAt), desc(users.id));
    const orderRows = allUsers.length > 0 ? await db.select({
      userId: orders.userId,
      amount: orders.amount,
      currency: orders.currency,
      metaData: orders.metaData,
      payStatus: orders.payStatus
    }).from(orders).where(and(
      isNotNull(orders.userId),
      sql`${orders.payStatus} != 'deleted'`,
      sql`${orders.status} != 'deleted'`
    )) : [];
    const orderMetricsMap = buildUserOrderMetricsMap(orderRows);
    const mergedUsers = allUsers.map((user) => {
      const metrics = orderMetricsMap.get(user.id) || EMPTY_ORDER_METRICS;
      const cashBalance = Number(user.cashBalance || 0) / 1e8;
      const grantBalance = Number(user.grantBalance || 0) / 1e8;
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        nickname: user.nickname,
        createdAt: user.createdAt,
        status: user.status,
        lastLoginAt: user.lastLoginAt,
        emailVerifiedAt: user.emailVerifiedAt,
        cashBalance,
        grantBalance,
        availableBalance: cashBalance + grantBalance,
        totalOrders: metrics.totalOrders,
        paidOrders: metrics.paidOrders,
        unpaidOrders: metrics.unpaidOrders,
        totalSpend: metrics.totalSpend,
        totalSpentByCurrency: metrics.totalSpentByCurrency
      };
    });
    let filteredUsers = mergedUsers;
    if (hasSpending === "true") {
      filteredUsers = mergedUsers.filter((u) => u.totalSpend > 0);
    } else if (hasSpending === "false") {
      filteredUsers = mergedUsers.filter((u) => u.totalSpend === 0);
    }
    if (sortBy === "spend" || sortBy === "totalSpend") {
      filteredUsers.sort((a, b) => sortOrder === "asc" ? a.totalSpend - b.totalSpend : b.totalSpend - a.totalSpend);
    } else if (sortBy === "orders" || sortBy === "totalOrders") {
      filteredUsers.sort((a, b) => sortOrder === "asc" ? a.totalOrders - b.totalOrders : b.totalOrders - a.totalOrders);
    } else if (sortBy === "paidOrders") {
      filteredUsers.sort((a, b) => sortOrder === "asc" ? a.paidOrders - b.paidOrders : b.paidOrders - a.paidOrders);
    } else if (sortBy === "balance" || sortBy === "availableBalance") {
      filteredUsers.sort((a, b) => sortOrder === "asc" ? a.availableBalance - b.availableBalance : b.availableBalance - a.availableBalance);
    }
    const total = filteredUsers.length;
    const finalUsers = filteredUsers.slice(offset, offset + pageSize);
    return {
      data: finalUsers,
      total,
      page,
      pageSize,
      summary
    };
  } catch (error) {
    console.error("[admin/users] Error:", error);
    throw createError({
      statusCode: 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u7528\u6237\u5217\u8868\u5931\u8D25" : "Failed to fetch users")
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get13.mjs.map
