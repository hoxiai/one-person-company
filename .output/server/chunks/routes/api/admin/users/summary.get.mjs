import { d as defineEventHandler, c as getRequestLocale, g as getQuery, w as users, M as orders, cY as userWallets, dA as getTopupRules, b as db, dj as userTokens, dD as activeApiTokenConditions, N as aggregateOrderAccountingTotals, a4 as getCurrencyTotal, e as createError, dC as normalizeAccountingCurrency, x as settings } from '../../../../nitro/nitro.mjs';
import { sql, or, like, isNotNull, isNull, and, count, inArray, eq } from 'drizzle-orm';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

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
const summary_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const keyword = String(query.search || query.q || query.keyword || "").trim();
  const hasSpending = String(query.hasSpending || "").trim();
  const emailVerified = String(query.emailVerified || "").trim();
  try {
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
    const userPositiveWalletSql = sql`(
      (select coalesce(sum(${userWallets.cashBalance}), 0) from ${userWallets} where ${userWallets.userId} = ${users.id}) > 0
      or (select coalesce(sum(${userWallets.grantBalance}), 0) from ${userWallets} where ${userWallets.userId} = ${users.id}) > 0
    )`;
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
    if (hasSpending === "true") {
      conditions.push(userHasPaidSpendSql);
    } else if (hasSpending === "false") {
      conditions.push(sql`not (${userHasPaidSpendSql})`);
    }
    const whereClause = conditions.length === 1 ? conditions[0] : conditions.length > 1 ? and(...conditions) : void 0;
    const topupRules = await getTopupRules().catch(() => null);
    const spendCurrency = await resolveSpendCurrency(
      query.spendCurrency,
      (topupRules == null ? void 0 : topupRules.accountingCurrency) || "USD"
    );
    const userStatsRows = await db.select({
      totalUsers: count(),
      activeUsers: sql`coalesce(sum(case when (${userHasPaidSpendSql}) or (${userPositiveWalletSql}) then 1 else 0 end), 0)`
    }).from(users).where(whereClause);
    const totalUsers = Number(((_a = userStatsRows[0]) == null ? void 0 : _a.totalUsers) || 0);
    const activeUsers = Number(((_b = userStatsRows[0]) == null ? void 0 : _b.activeUsers) || 0);
    if (totalUsers === 0) {
      return {
        data: {
          totalUsers: 0,
          activeUsers: 0,
          totalCashBalance: 0,
          totalGrantBalance: 0,
          totalBalance: 0,
          totalOrders: 0,
          paidOrders: 0,
          spendCurrency,
          totalSpend: 0,
          totalSpentByCurrency: [],
          totalActiveTokens: 0
        }
      };
    }
    const matchedUsersSubquery = db.select({ id: users.id }).from(users).where(whereClause);
    const [walletStatsRows, orderStatsRows, tokenStatsRows, paidOrderRows] = await Promise.all([
      db.select({
        totalCashBalance: sql`coalesce(sum(${userWallets.cashBalance}), 0)`,
        totalGrantBalance: sql`coalesce(sum(${userWallets.grantBalance}), 0)`
      }).from(userWallets).where(inArray(userWallets.userId, matchedUsersSubquery)),
      db.select({
        totalOrders: count(),
        paidOrders: sql`coalesce(sum(case when ${orders.payStatus} = 'paid' then 1 else 0 end), 0)`
      }).from(orders).where(and(
        inArray(orders.userId, matchedUsersSubquery),
        sql`${orders.payStatus} != 'deleted'`,
        sql`${orders.status} != 'deleted'`
      )),
      // 统计有效个人/MCP API Token 数量（严格走 activeApiTokenConditions，排除 apay_dt_ 设备令牌与一次性令牌）
      db.select({
        totalActiveTokens: count()
      }).from(userTokens).where(and(
        activeApiTokenConditions(),
        inArray(userTokens.userId, matchedUsersSubquery)
      )),
      db.select({
        amount: orders.amount,
        currency: orders.currency,
        metaData: orders.metaData
      }).from(orders).where(and(
        inArray(orders.userId, matchedUsersSubquery),
        eq(orders.payStatus, "paid"),
        sql`${orders.status} != 'deleted'`,
        sql`${orders.amount} > 0`
      ))
    ]);
    const totalCashBalance = Number(((_c = walletStatsRows[0]) == null ? void 0 : _c.totalCashBalance) || 0) / 1e8;
    const totalGrantBalance = Number(((_d = walletStatsRows[0]) == null ? void 0 : _d.totalGrantBalance) || 0) / 1e8;
    const totalBalance = totalCashBalance + totalGrantBalance;
    const totalOrders = Number(((_e = orderStatsRows[0]) == null ? void 0 : _e.totalOrders) || 0);
    const paidOrders = Number(((_f = orderStatsRows[0]) == null ? void 0 : _f.paidOrders) || 0);
    const totalActiveTokens = Number(((_g = tokenStatsRows[0]) == null ? void 0 : _g.totalActiveTokens) || 0);
    const totalSpentByCurrency = aggregateOrderAccountingTotals(paidOrderRows);
    const totalSpend = getCurrencyTotal(totalSpentByCurrency, spendCurrency);
    return {
      data: {
        totalUsers,
        activeUsers,
        totalCashBalance,
        totalGrantBalance,
        totalBalance,
        totalOrders,
        paidOrders,
        spendCurrency,
        totalSpend,
        totalSpentByCurrency,
        totalActiveTokens
      }
    };
  } catch (error) {
    console.error("[admin/users/summary] Error:", error);
    throw createError({
      statusCode: 500,
      message: error.message || (locale === "zh" ? "\u83B7\u53D6\u7528\u6237\u6C47\u603B\u5931\u8D25" : "Failed to fetch user summary")
    });
  }
});

export { summary_get as default };
//# sourceMappingURL=summary.get.mjs.map
