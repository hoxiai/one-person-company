import { d as defineEventHandler, c as getRequestLocale, g as getQuery, v as users, b as db, cM as userWallets, I as orders, J as aggregateOrderAccountingTotals, cY as userTokens, d7 as activeApiTokenConditions, e as createError } from '../../../../nitro/nitro.mjs';
import { sql, or, like, eq, and, isNotNull } from 'drizzle-orm';
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

const summary_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const keyword = String(query.q || query.keyword || "").trim();
  const hasSpending = String(query.hasSpending || "").trim();
  try {
    const likePattern = keyword ? `%${keyword.toLowerCase()}%` : "";
    const emailLower = sql`lower(${users.email})`;
    const nicknameLower = sql`lower(coalesce(${users.nickname}, ''))`;
    const idLower = sql`lower(cast(${users.id} as text))`;
    const keywordWhere = keyword ? or(
      like(emailLower, likePattern),
      like(nicknameLower, likePattern),
      like(idLower, likePattern)
    ) : void 0;
    let usersQuery = db.select({
      id: users.id,
      email: users.email,
      nickname: users.nickname,
      cashBalance: sql`coalesce(sum(${userWallets.cashBalance}), 0)`,
      grantBalance: sql`coalesce(sum(${userWallets.grantBalance}), 0)`,
      status: users.status
    }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id));
    if (keywordWhere) {
      usersQuery = usersQuery.where(keywordWhere);
    }
    const allUsers = await usersQuery.groupBy(
      users.id,
      users.email,
      users.nickname,
      users.status
    );
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
    const ordersByUser = /* @__PURE__ */ new Map();
    for (const row of orderRows) {
      const uid = Number(row.userId);
      if (!Number.isFinite(uid) || uid <= 0) continue;
      let list = ordersByUser.get(uid);
      if (!list) {
        list = [];
        ordersByUser.set(uid, list);
      }
      list.push(row);
    }
    const mergedUsers = allUsers.map((user) => {
      const userOrders = ordersByUser.get(user.id) || [];
      const paidOrderRows = userOrders.filter((r) => r.payStatus === "paid");
      const totalSpentByCurrency2 = aggregateOrderAccountingTotals(paidOrderRows);
      const totalSpend2 = totalSpentByCurrency2.reduce((sum, item) => sum + item.amount, 0);
      return {
        ...user,
        totalOrders: userOrders.length,
        paidOrderRows,
        totalSpend: totalSpend2
      };
    });
    let filteredUsers = mergedUsers;
    if (hasSpending === "true") {
      filteredUsers = mergedUsers.filter((u) => u.totalSpend > 0);
    } else if (hasSpending === "false") {
      filteredUsers = mergedUsers.filter((u) => u.totalSpend === 0);
    }
    const filteredPaidOrders = filteredUsers.flatMap((u) => u.paidOrderRows);
    const totalSpentByCurrency = aggregateOrderAccountingTotals(filteredPaidOrders);
    const totalSpend = totalSpentByCurrency.reduce((sum, item) => sum + item.amount, 0);
    const activeUsers = filteredUsers.filter(
      (u) => u.totalSpend > 0 || Number(u.cashBalance || 0) > 0 || Number(u.grantBalance || 0) > 0
    ).length;
    let totalActiveTokens = 0;
    if (filteredUsers.length > 0) {
      const filteredIdSet = new Set(filteredUsers.map((u) => u.id));
      const tokenUserRows = await db.select({ userId: userTokens.userId }).from(userTokens).where(activeApiTokenConditions());
      for (const row of tokenUserRows) {
        if (filteredIdSet.has(Number(row.userId))) {
          totalActiveTokens += 1;
        }
      }
    }
    const summary = {
      totalUsers: filteredUsers.length,
      activeUsers,
      totalCashBalance: filteredUsers.reduce((sum, u) => sum + Number(u.cashBalance || 0), 0) / 1e8,
      totalGrantBalance: filteredUsers.reduce((sum, u) => sum + Number(u.grantBalance || 0), 0) / 1e8,
      totalBalance: filteredUsers.reduce((sum, u) => sum + Number(u.cashBalance || 0) + Number(u.grantBalance || 0), 0) / 1e8,
      totalOrders: filteredUsers.reduce((sum, u) => sum + u.totalOrders, 0),
      paidOrders: filteredPaidOrders.length,
      totalSpend,
      totalSpentByCurrency,
      totalActiveTokens
    };
    return {
      data: summary
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
