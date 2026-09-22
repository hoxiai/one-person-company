import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, r as readBody, b as db, u as users, bh as validateEmail, bi as normalizeEmail, j as hashPassword, bj as revokeEmailVerifyTokens } from '../../../../nitro/nitro.mjs';
import { eq, and, ne } from 'drizzle-orm';
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

const _id__put = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    userIdRequired: "\u7528\u6237 ID \u4E0D\u80FD\u4E3A\u7A7A",
    emailRequired: "\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A",
    invalidEmail: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
    disposableEmail: "\u7CFB\u7EDF\u4E0D\u652F\u6301\u4E34\u65F6/\u4E00\u6B21\u6027\u90AE\u7BB1\uFF0C\u8BF7\u4F7F\u7528\u5E38\u7528\u90AE\u7BB1",
    userNotFound: "\u7528\u6237\u4E0D\u5B58\u5728",
    emailTaken: "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u5176\u4ED6\u7528\u6237\u5360\u7528",
    updated: "\u7528\u6237\u66F4\u65B0\u6210\u529F",
    emailChanged: "\u7528\u6237\u66F4\u65B0\u6210\u529F\uFF1B\u90AE\u7BB1\u5DF2\u53D8\u66F4\uFF0C\u9A8C\u8BC1\u72B6\u6001\u5DF2\u6E05\u7A7A\uFF0C\u9700\u91CD\u65B0\u9A8C\u8BC1",
    failed: "\u66F4\u65B0\u7528\u6237\u5931\u8D25"
  } : {
    userIdRequired: "User ID is required",
    emailRequired: "Email is required",
    invalidEmail: "Please enter a valid email address",
    disposableEmail: "Disposable email addresses are not supported. Please use a standard email.",
    userNotFound: "User not found",
    emailTaken: "Email already taken by another user",
    updated: "User updated successfully",
    emailChanged: "User updated. The email changed, so its verified status was cleared and needs re-verification",
    failed: "Failed to update user"
  };
  try {
    const id = getRouterParam(event, "id");
    const userId = Number(id);
    if (!id || !Number.isInteger(userId) || userId <= 0) {
      throw createError({ statusCode: 400, message: messages.userIdRequired });
    }
    const body = await readBody(event).catch(() => ({})) || {};
    const { username, password, nickname } = body;
    const userRows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    const currentUser = userRows[0];
    if (!currentUser) {
      throw createError({ statusCode: 404, message: messages.userNotFound });
    }
    const updateData = {};
    let emailChanged = false;
    if (username !== void 0 && username !== null) {
      const rawEmail = String(username).trim();
      if (!rawEmail) {
        throw createError({ statusCode: 400, message: messages.emailRequired });
      }
      const validation = validateEmail(rawEmail);
      if (!validation.valid) {
        throw createError({
          statusCode: 400,
          message: validation.errorKey === "email_disposable_rejected" ? messages.disposableEmail : messages.invalidEmail
        });
      }
      const email = validation.normalizedEmail;
      emailChanged = normalizeEmail(currentUser.email) !== email;
      if (emailChanged) {
        const existingUser = await db.select().from(users).where(
          and(
            eq(users.email, email),
            ne(users.id, userId)
          )
        );
        if (existingUser.length > 0) {
          throw createError({ statusCode: 400, message: messages.emailTaken });
        }
        updateData.email = email;
        updateData.emailVerifiedAt = null;
      }
    }
    if (typeof nickname === "string" && nickname.trim()) {
      updateData.nickname = nickname.trim();
    } else if (emailChanged && !currentUser.nickname) {
      const email = updateData.email;
      updateData.nickname = email.split("@")[0] || email;
    }
    if (password) {
      updateData.passwordHash = await hashPassword(String(password));
    }
    if (emailChanged) {
      await revokeEmailVerifyTokens(userId);
    }
    if (Object.keys(updateData).length > 0) {
      await db.update(users).set(updateData).where(eq(users.id, userId));
    }
    return {
      code: 0,
      message: emailChanged ? messages.emailChanged : messages.updated,
      emailChanged,
      // 邮箱变了就必须重新验证：管理员可在客户详情里手动标记已验证，或重发验证信
      emailVerificationCleared: emailChanged
    };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { _id__put as default };
