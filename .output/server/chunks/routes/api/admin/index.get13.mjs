import { d as defineEventHandler, c as getRequestLocale, g as getQuery, w as users, M as orders, cY as userWallets, b as db, dl as accountDeletionRequests, dA as getTopupRules, N as aggregateOrderAccountingTotals, dB as compareCurrencySpendTotals, e as createError, dC as normalizeAccountingCurrency, x as settings, a4 as getCurrencyTotal } from '../../../nitro/nitro.mjs';
import { sql, or, like, eq, isNotNull, isNull, and, count, desc, asc, inArray } from 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

function createEmptyOrderMetrics(spendCurrency) {
  return {
    totalOrders: 0,
    paidOrders: 0,
    unpaidOrders: 0,
    spendCurrency,
    totalSpend: 0,
    totalSpentByCurrency: []
  };
}
function buildUserOrderMetricsMap(orderRows, spendCurrency) {
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
    const totalSpend = getCurrencyTotal(totalSpentByCurrency, spendCurrency);
    metricsMap.set(uid, {
      totalOrders: rows.length,
      paidOrders: paidRows.length,
      unpaidOrders: rows.length - paidRows.length,
      spendCurrency,
      totalSpend,
      totalSpentByCurrency
    });
  }
  return metricsMap;
}
async function resolveSpendCurrency(requestedCurrency, fallbackCurrency = "USD") {
  var _a;
  const fallback = normalizeAccountingCurrency(fallbackCurrency, "USD");
  const explicit = String(requestedCurrency || "").trim();
  if (/^[A-Za-z]{3}$/.test(explicit)) {
    return normalizeAccountingCurrency(explicit, fallback);
  }
  try {
    const rows = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, "currency")).limit(1);
    if ((_a = rows[0]) == null ? void 0 : _a.value) {
      return normalizeAccountingCurrency(rows[0].value, fallback);
    }
  } catch {
  }
  return fallback;
}
function formatUserResponseRow(user, metrics, pendingDeletionRequestId = null) {
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
    pendingDeletionRequestId,
    cashBalance,
    grantBalance,
    availableBalance: cashBalance + grantBalance,
    totalOrders: metrics.totalOrders,
    paidOrders: metrics.paidOrders,
    unpaidOrders: metrics.unpaidOrders,
    spendCurrency: metrics.spendCurrency,
    totalSpend: metrics.totalSpend,
    totalSpentByCurrency: metrics.totalSpentByCurrency
  };
}
const index_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const page = Math.max(parseInt(query.page) || 1, 1);
  const pageSize = Math.min(Math.max(parseInt(query.pageSize) || 15, 1), 100);
  const offset = (page - 1) * pageSize;
  const keyword = String(query.search || query.q || query.keyword || "").trim();
  const hasSpending = String(query.hasSpending || "").trim();
  const emailVerified = String(query.emailVerified || "").trim();
  const statusFilter = String(query.status || "").trim();
  const sortBy = String(query.sortBy || query.sort || "").trim();
  const sortOrder = String(query.sortOrder || query.order || "desc").trim().toLowerCase() === "asc" ? "asc" : "desc";
  const likePattern = keyword ? `%${keyword.toLowerCase()}%` : "";
  const emailLower = sql`lower(${users.email})`;
  const nicknameLower = sql`lower(coalesce(${users.nickname}, ''))`;
  const idLower = sql`lower(cast(${users.id} as text))`;
  const userHasPaidSpendSql = sql`exists (
    select 1 from ${orders}
    where ${orders.userId} = ${users.id}
      and ${orders.payStatus} = 'paid'
      and ${orders.status} != 'deleted'
      and ${orders.amount} > 0
  )`;
  const conditions = [];
  if (keyword) {
    conditions.push(or(
      like(emailLower, likePattern),
      like(nicknameLower, likePattern),
      like(idLower, likePattern)
    ));
  }
  if (statusFilter === "active" || statusFilter === "1") {
    conditions.push(eq(users.status, 1));
  } else if (statusFilter === "disabled" || statusFilter === "0") {
    conditions.push(eq(users.status, 0));
  } else if (statusFilter === "archived" || statusFilter === "-1") {
    conditions.push(eq(users.status, -1));
  }
  if (emailVerified === "verified" || emailVerified === "true") {
    conditions.push(isNotNull(users.emailVerifiedAt));
  } else if (emailVerified === "unverified" || emailVerified === "false") {
    conditions.push(isNull(users.emailVerifiedAt));
  }
  if (hasSpending === "true") {
    conditions.push(userHasPaidSpendSql);
  } else if (hasSpending === "false") {
    conditions.push(sql`not (${userHasPaidSpendSql})`);
  }
  const whereClause = conditions.length === 1 ? conditions[0] : conditions.length > 1 ? and(...conditions) : void 0;
  const isSpendSort = sortBy === "spend" || sortBy === "totalSpend";
  try {
    const cashSumExpr = sql`coalesce(sum(${userWallets.cashBalance}), 0)`;
    const grantSumExpr = sql`coalesce(sum(${userWallets.grantBalance}), 0)`;
    const totalBalanceExpr = sql`(${cashSumExpr} + ${grantSumExpr})`;
    const [globalUserStatsRows, globalWalletStatsRows, pendingDeletionRows, topupRules] = await Promise.all([
      db.select({
        totalUsers: count(),
        verifiedUsers: sql`coalesce(sum(case when ${users.emailVerifiedAt} is not null then 1 else 0 end), 0)`,
        archivedUsers: sql`coalesce(sum(case when ${users.status} = -1 then 1 else 0 end), 0)`,
        disabledUsers: sql`coalesce(sum(case when ${users.status} = 0 then 1 else 0 end), 0)`
      }).from(users),
      db.select({
        totalCashBalance: cashSumExpr,
        totalGrantBalance: grantSumExpr
      }).from(userWallets),
      db.select({ pendingCount: count() }).from(accountDeletionRequests).where(eq(accountDeletionRequests.status, "pending")).catch(() => [{ pendingCount: 0 }]),
      getTopupRules()
    ]);
    const spendCurrency = await resolveSpendCurrency(
      query.spendCurrency,
      (topupRules == null ? void 0 : topupRules.accountingCurrency) || "USD"
    );
    const emptyMetrics = createEmptyOrderMetrics(spendCurrency);
    const globalTotalUsers = Number(((_a = globalUserStatsRows[0]) == null ? void 0 : _a.totalUsers) || 0);
    const globalVerifiedUsers = Number(((_b = globalUserStatsRows[0]) == null ? void 0 : _b.verifiedUsers) || 0);
    const globalArchivedUsers = Number(((_c = globalUserStatsRows[0]) == null ? void 0 : _c.archivedUsers) || 0);
    const globalDisabledUsers = Number(((_d = globalUserStatsRows[0]) == null ? void 0 : _d.disabledUsers) || 0);
    const pendingDeletionCount = Number(((_e = pendingDeletionRows[0]) == null ? void 0 : _e.pendingCount) || 0);
    const globalCashBalance = Number(((_f = globalWalletStatsRows[0]) == null ? void 0 : _f.totalCashBalance) || 0) / 1e8;
    const globalGrantBalance = Number(((_g = globalWalletStatsRows[0]) == null ? void 0 : _g.totalGrantBalance) || 0) / 1e8;
    const globalTotalBalance = globalCashBalance + globalGrantBalance;
    const summary = {
      totalUsers: globalTotalUsers,
      verifiedUsers: globalVerifiedUsers,
      unverifiedUsers: Math.max(0, globalTotalUsers - globalVerifiedUsers),
      archivedUsers: globalArchivedUsers,
      disabledUsers: globalDisabledUsers,
      pendingDeletionCount,
      totalCashBalance: globalCashBalance,
      totalGrantBalance: globalGrantBalance,
      totalBalance: globalTotalBalance,
      spendCurrency,
      walletEnabled: Boolean(topupRules == null ? void 0 : topupRules.enabled) || globalTotalBalance > 0
    };
    if (!isSpendSort) {
      const totalResult = await db.select({ total: count() }).from(users).where(whereClause);
      const total2 = Number(((_h = totalResult[0]) == null ? void 0 : _h.total) || 0);
      const totalOrdersCountExpr = sql`(
        select count(*) from ${orders}
        where ${orders.userId} = ${users.id}
          and ${orders.payStatus} != 'deleted'
          and ${orders.status} != 'deleted'
      )`;
      const paidOrdersCountExpr = sql`(
        select count(*) from ${orders}
        where ${orders.userId} = ${users.id}
          and ${orders.payStatus} = 'paid'
          and ${orders.status} != 'deleted'
      )`;
      const orderByClauses = sortBy === "balance" || sortBy === "availableBalance" ? [
        sortOrder === "asc" ? sql`${totalBalanceExpr} ASC` : sql`${totalBalanceExpr} DESC`,
        desc(users.id)
      ] : sortBy === "orders" || sortBy === "totalOrders" ? [
        sortOrder === "asc" ? sql`${totalOrdersCountExpr} ASC` : sql`${totalOrdersCountExpr} DESC`,
        desc(users.id)
      ] : sortBy === "paidOrders" ? [
        sortOrder === "asc" ? sql`${paidOrdersCountExpr} ASC` : sql`${paidOrdersCountExpr} DESC`,
        desc(users.id)
      ] : [
        sortOrder === "asc" ? asc(users.createdAt) : desc(users.createdAt),
        sortOrder === "asc" ? asc(users.id) : desc(users.id)
      ];
      const paginatedUsers = total2 > 0 && offset < total2 ? await db.select({
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
      ).orderBy(...orderByClauses).limit(pageSize).offset(offset) : [];
      const userIds = paginatedUsers.map((u) => u.id);
      const orderRows = userIds.length > 0 ? await db.select({
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
      const pendingMap2 = /* @__PURE__ */ new Map();
      if (userIds.length > 0) {
        const pendingRows = await db.select({
          id: accountDeletionRequests.id,
          userId: accountDeletionRequests.userId
        }).from(accountDeletionRequests).where(and(
          inArray(accountDeletionRequests.userId, userIds),
          eq(accountDeletionRequests.status, "pending")
        )).catch(() => []);
        for (const r of pendingRows) pendingMap2.set(Number(r.userId), Number(r.id));
      }
      const orderMetricsMap2 = buildUserOrderMetricsMap(orderRows, spendCurrency);
      const finalUsers2 = paginatedUsers.map(
        (user) => {
          var _a2;
          return formatUserResponseRow(
            user,
            orderMetricsMap2.get(user.id) || emptyMetrics,
            (_a2 = pendingMap2.get(user.id)) != null ? _a2 : null
          );
        }
      );
      return {
        data: finalUsers2,
        total: total2,
        page,
        pageSize,
        spendCurrency,
        summary
      };
    }
    const matchedStubs = await db.select({ id: users.id }).from(users).where(whereClause).orderBy(desc(users.createdAt), desc(users.id));
    const total = matchedStubs.length;
    if (total === 0 || offset >= total) {
      return {
        data: [],
        total,
        page,
        pageSize,
        spendCurrency,
        summary
      };
    }
    const paidSpendConditions = [
      eq(orders.payStatus, "paid"),
      sql`${orders.status} != 'deleted'`,
      sql`${orders.amount} > 0`,
      whereClause ? inArray(orders.userId, db.select({ id: users.id }).from(users).where(whereClause)) : isNotNull(orders.userId)
    ];
    const paidSpendRows = await db.select({
      userId: orders.userId,
      amount: orders.amount,
      currency: orders.currency,
      metaData: orders.metaData
    }).from(orders).where(and(...paidSpendConditions));
    const paidGrouped = /* @__PURE__ */ new Map();
    for (const row of paidSpendRows) {
      const uid = Number(row.userId);
      if (!Number.isFinite(uid) || uid <= 0) continue;
      let list = paidGrouped.get(uid);
      if (!list) {
        list = [];
        paidGrouped.set(uid, list);
      }
      list.push(row);
    }
    const totalsByUser = /* @__PURE__ */ new Map();
    for (const [uid, rows] of paidGrouped.entries()) {
      totalsByUser.set(uid, aggregateOrderAccountingTotals(rows));
    }
    const sortedIds = matchedStubs.map((stub, index) => ({ id: stub.id, index })).sort((a, b) => {
      const diff = compareCurrencySpendTotals(
        totalsByUser.get(a.id) || [],
        totalsByUser.get(b.id) || [],
        spendCurrency,
        sortOrder
      );
      return diff !== 0 ? diff : a.index - b.index;
    }).slice(offset, offset + pageSize).map((entry) => entry.id);
    const [pageUserRows, pageOrderRows] = await Promise.all([
      db.select({
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
      }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id)).where(inArray(users.id, sortedIds)).groupBy(
        users.id,
        users.email,
        users.nickname,
        users.createdAt,
        users.status,
        users.lastLoginAt,
        users.emailVerifiedAt
      ),
      db.select({
        userId: orders.userId,
        amount: orders.amount,
        currency: orders.currency,
        metaData: orders.metaData,
        payStatus: orders.payStatus
      }).from(orders).where(and(
        inArray(orders.userId, sortedIds),
        sql`${orders.payStatus} != 'deleted'`,
        sql`${orders.status} != 'deleted'`
      ))
    ]);
    const pendingMap = /* @__PURE__ */ new Map();
    if (sortedIds.length > 0) {
      const pendingRows = await db.select({
        id: accountDeletionRequests.id,
        userId: accountDeletionRequests.userId
      }).from(accountDeletionRequests).where(and(
        inArray(accountDeletionRequests.userId, sortedIds),
        eq(accountDeletionRequests.status, "pending")
      )).catch(() => []);
      for (const r of pendingRows) pendingMap.set(Number(r.userId), Number(r.id));
    }
    const userById = new Map(pageUserRows.map((row) => [row.id, row]));
    const orderMetricsMap = buildUserOrderMetricsMap(pageOrderRows, spendCurrency);
    const finalUsers = sortedIds.map((id) => userById.get(id)).filter((row) => Boolean(row)).map((user) => {
      var _a2;
      return formatUserResponseRow(
        user,
        orderMetricsMap.get(user.id) || emptyMetrics,
        (_a2 = pendingMap.get(user.id)) != null ? _a2 : null
      );
    });
    return {
      data: finalUsers,
      total,
      page,
      pageSize,
      spendCurrency,
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
