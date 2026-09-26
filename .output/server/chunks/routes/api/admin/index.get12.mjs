import { d as defineEventHandler, c as getRequestLocale, g as getQuery, u as users, b as db, be as userWallets, bw as fetchExternalUsersMap, bp as userTokens, e as createError } from '../../../nitro/nitro.mjs';
import { sql, or, like, count, desc, eq, and } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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
  const whereClause = keyword ? or(
    like(emailLower, likePattern),
    like(nicknameLower, likePattern),
    like(idLower, likePattern)
  ) : void 0;
  const isExternalSort = ["spend", "totalSpend", "usage", "totalTokens", "requests", "totalRequests"].includes(sortBy);
  const hasSpendingFilter = hasSpending === "true" || hasSpending === "false";
  const requiresFullScan = isExternalSort || hasSpendingFilter;
  try {
    if (!requiresFullScan) {
      const totalResult = await db.select({ total: count() }).from(users).where(whereClause);
      const total2 = Number(((_a = totalResult[0]) == null ? void 0 : _a.total) || 0);
      let orderByClause;
      if (sortBy === "balance" || sortBy === "availableBalance") {
        orderByClause = sortOrder === "asc" ? sql`(coalesce(${userWallets.cashBalance}, 0) + coalesce(${userWallets.grantBalance}, 0)) ASC` : sql`(coalesce(${userWallets.cashBalance}, 0) + coalesce(${userWallets.grantBalance}, 0)) DESC`;
      } else {
        orderByClause = sortOrder === "asc" ? users.createdAt : desc(users.createdAt);
      }
      const paginatedUsers2 = await db.select({
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
      }).from(users).leftJoin(userWallets, eq(userWallets.userId, users.id)).where(whereClause).orderBy(orderByClause).limit(pageSize).offset(offset);
      const [externalUsersMap2, activeKeyCountMap2] = await Promise.all([
        fetchExternalUsersMap(event),
        (async () => {
          const userIds2 = paginatedUsers2.map((u) => u.id);
          const map = /* @__PURE__ */ new Map();
          if (userIds2.length > 0) {
            const activeKeysResult = await db.select({
              userId: userTokens.userId,
              count: count()
            }).from(userTokens).where(
              and(
                sql`${userTokens.userId} IN (${sql.join(userIds2.map((id) => sql`${id}`), sql`, `)})`,
                eq(userTokens.revoked, false),
                or(
                  sql`${userTokens.expiresAt} IS NULL`,
                  sql`${userTokens.expiresAt} > NOW()`
                )
              )
            ).groupBy(userTokens.userId);
            activeKeysResult.forEach((row) => {
              map.set(Number(row.userId), Number(row.count || 0));
            });
          }
          return map;
        })()
      ]);
      const finalUsers2 = paginatedUsers2.map((user) => {
        const extData = externalUsersMap2.get(user.id) || {};
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
          lastRequestAt: extData.lastRequestAt || null,
          activeKeyCount: activeKeyCountMap2.get(user.id) || 0
        };
      });
      return {
        data: finalUsers2,
        total: total2,
        page,
        pageSize
      };
    }
    const externalUsersMap = await fetchExternalUsersMap(event);
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
    if (whereClause) {
      usersQuery = usersQuery.where(whereClause);
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
