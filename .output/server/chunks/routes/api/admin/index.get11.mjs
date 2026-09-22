import { d as defineEventHandler, c as getRequestLocale, g as getQuery, u as users, bl as proxyExternalRequest, b as db, b8 as userWallets, bg as userTokens, e as createError } from '../../../nitro/nitro.mjs';
import { sql, eq, or, like, desc, count, and } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const page = parseInt(query.page) || 1;
  const pageSize = parseInt(query.pageSize) || 15;
  const offset = (page - 1) * pageSize;
  const keyword = String(query.search || query.q || query.keyword || "").trim();
  const hasSpending = String(query.hasSpending || "").trim();
  const sortBy = String(query.sortBy || query.sort || "").trim();
  const sortOrder = String(query.sortOrder || query.order || "desc").trim().toLowerCase() === "asc" ? "asc" : "desc";
  const likePattern = keyword ? `%${keyword.toLowerCase()}%` : "";
  const emailLower = sql`lower(${users.email})`;
  const nicknameLower = sql`lower(coalesce(${users.nickname}, ''))`;
  const idLower = sql`lower(cast(${users.id} as text))`;
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
          // 获取所有用户用于过滤和排序
        }
      });
      if (((_a = externalRes == null ? void 0 : externalRes.data) == null ? void 0 : _a.list) && Array.isArray(externalRes.data.list)) {
        externalRes.data.list.forEach((extUser) => {
          externalUsersMap.set(Number(extUser.id), extUser);
        });
      }
    } catch (externalError) {
      console.error("[admin/users] Failed to fetch external user data:", externalError);
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
      cashBalance: userWallets.cashBalance,
      grantBalance: userWallets.grantBalance
    }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id));
    if (keyword) {
      usersQuery = usersQuery.where(or(
        like(emailLower, likePattern),
        like(nicknameLower, likePattern),
        like(idLower, likePattern)
      ));
    }
    const allUsers = await usersQuery.orderBy(desc(users.createdAt));
    const mergedUsers = allUsers.map((user) => {
      const extData = externalUsersMap.get(user.id) || {};
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        nickname: user.nickname,
        createdAt: user.createdAt,
        status: user.status,
        lastLoginAt: user.lastLoginAt,
        emailVerifiedAt: user.emailVerifiedAt,
        cashBalance: Number(user.cashBalance || 0) / 1e8,
        grantBalance: Number(user.grantBalance || 0) / 1e8,
        availableBalance: (Number(user.cashBalance || 0) + Number(user.grantBalance || 0)) / 1e8,
        totalSpend: Number(extData.totalSpend || 0),
        totalRequests: Number(extData.totalRequests || 0),
        totalTokens: Number(extData.totalTokens || 0),
        promptTokens: Number(extData.promptTokens || 0),
        completionTokens: Number(extData.completionTokens || 0),
        lastRequestAt: extData.lastRequestAt || null
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
    } else if (sortBy === "balance" || sortBy === "availableBalance") {
      filteredUsers.sort((a, b) => sortOrder === "asc" ? a.availableBalance - b.availableBalance : b.availableBalance - a.availableBalance);
    } else if (sortBy === "usage" || sortBy === "totalTokens") {
      filteredUsers.sort((a, b) => sortOrder === "asc" ? a.totalTokens - b.totalTokens : b.totalTokens - a.totalTokens);
    } else if (sortBy === "requests" || sortBy === "totalRequests") {
      filteredUsers.sort((a, b) => sortOrder === "asc" ? a.totalRequests - b.totalRequests : b.totalRequests - a.totalRequests);
    }
    const total = filteredUsers.length;
    const paginatedUsers = filteredUsers.slice(offset, offset + pageSize);
    const userIds = paginatedUsers.map((u) => u.id);
    let activeKeyCountMap = /* @__PURE__ */ new Map();
    if (userIds.length > 0) {
      const activeKeysResult = await db.select({
        userId: userTokens.userId,
        count: count()
      }).from(userTokens).where(
        and(
          sql`${userTokens.userId} IN (${sql.join(userIds.map((id) => sql`${id}`), sql`, `)})`,
          eq(userTokens.revoked, false),
          or(
            sql`${userTokens.expiresAt} IS NULL`,
            sql`${userTokens.expiresAt} > NOW()`
          )
        )
      ).groupBy(userTokens.userId);
      activeKeysResult.forEach((row) => {
        activeKeyCountMap.set(Number(row.userId), Number(row.count || 0));
      });
    }
    const finalUsers = paginatedUsers.map((user) => ({
      ...user,
      activeKeyCount: activeKeyCountMap.get(user.id) || 0
    }));
    return {
      data: finalUsers,
      total,
      page,
      pageSize
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
