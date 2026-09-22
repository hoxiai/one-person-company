import { d as defineEventHandler, c as getRequestLocale, g as getQuery, bl as proxyExternalRequest, u as users, b as db, b8 as userWallets, bg as userTokens, e as createError } from '../../../../nitro/nitro.mjs';
import { sql, eq, or, like, count, and } from 'drizzle-orm';
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

const summary_get = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const keyword = String(query.q || query.keyword || "").trim();
  const hasSpending = String(query.hasSpending || "").trim();
  try {
    let externalUsersMap = /* @__PURE__ */ new Map();
    try {
      const externalRes = await proxyExternalRequest(event, {
        requireSession: true,
        proxyLabel: "ExternalUsersAPI",
        userAgent: "APay-Admin/1.0",
        overrideQuery: {
          path: "/api/admin/users",
          page: 1,
          pageSize: 1e4
          // 获取所有用户的消费数据用于汇总
        }
      });
      if (((_a = externalRes == null ? void 0 : externalRes.data) == null ? void 0 : _a.list) && Array.isArray(externalRes.data.list)) {
        externalRes.data.list.forEach((extUser) => {
          externalUsersMap.set(Number(extUser.id), extUser);
        });
      }
    } catch (externalError) {
      console.error("[admin/users/summary] Failed to fetch external user data:", externalError);
    }
    const likePattern = keyword ? `%${keyword.toLowerCase()}%` : "";
    const emailLower = sql`lower(${users.email})`;
    const nicknameLower = sql`lower(coalesce(${users.nickname}, ''))`;
    const idLower = sql`lower(cast(${users.id} as text))`;
    let usersQuery = db.select({
      id: users.id,
      email: users.email,
      nickname: users.nickname,
      cashBalance: userWallets.cashBalance,
      grantBalance: userWallets.grantBalance,
      status: users.status
    }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id));
    if (keyword) {
      usersQuery = usersQuery.where(or(
        like(emailLower, likePattern),
        like(nicknameLower, likePattern),
        like(idLower, likePattern)
      ));
    }
    const allUsers = await usersQuery;
    const mergedUsers = allUsers.map((user) => {
      const extData = externalUsersMap.get(user.id) || {};
      return {
        ...user,
        totalSpend: Number(extData.totalSpend || 0),
        totalRequests: Number(extData.totalRequests || 0),
        totalTokens: Number(extData.totalTokens || 0),
        promptTokens: Number(extData.promptTokens || 0),
        completionTokens: Number(extData.completionTokens || 0)
      };
    });
    let filteredUsers = mergedUsers;
    if (hasSpending === "true") {
      filteredUsers = mergedUsers.filter((u) => u.totalSpend > 0);
    } else if (hasSpending === "false") {
      filteredUsers = mergedUsers.filter((u) => u.totalSpend === 0);
    }
    const activeUsers = filteredUsers.filter(
      (u) => u.totalSpend > 0 || Number(u.cashBalance || 0) > 0 || Number(u.grantBalance || 0) > 0
    ).length;
    const summary = {
      totalUsers: filteredUsers.length,
      activeUsers,
      totalCashBalance: filteredUsers.reduce((sum, u) => sum + Number(u.cashBalance || 0), 0) / 1e8,
      totalGrantBalance: filteredUsers.reduce((sum, u) => sum + Number(u.grantBalance || 0), 0) / 1e8,
      totalBalance: filteredUsers.reduce((sum, u) => sum + Number(u.cashBalance || 0) + Number(u.grantBalance || 0), 0) / 1e8,
      totalRequests: filteredUsers.reduce((sum, u) => sum + u.totalRequests, 0),
      totalTokens: filteredUsers.reduce((sum, u) => sum + u.totalTokens, 0),
      totalActiveKeys: 0
      // Will be calculated below
    };
    if (filteredUsers.length > 0) {
      const userIds = filteredUsers.map((u) => u.id);
      const activeKeysResult = await db.select({ count: count() }).from(userTokens).where(
        and(
          sql`${userTokens.userId} IN (${sql.join(userIds.map((id) => sql`${id}`), sql`, `)})`,
          eq(userTokens.revoked, false),
          or(
            sql`${userTokens.expiresAt} IS NULL`,
            sql`${userTokens.expiresAt} > NOW()`
          )
        )
      );
      summary.totalActiveKeys = Number(((_b = activeKeysResult[0]) == null ? void 0 : _b.count) || 0);
    }
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
