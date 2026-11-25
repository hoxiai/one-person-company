import { d as defineEventHandler, c as getRequestLocale, ec as requireUserSession, e as createError, r as readBody, b as db, w as users, dQ as isUserStatusActive, dR as createAccountUnavailableError, dO as validateUsername, dP as getUsernameErrorMessage, eh as isUniqueConstraintError, ed as overwriteSessionUser } from '../../../nitro/nitro.mjs';
import { eq, and, ne } from 'drizzle-orm';
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

const profile_put = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u672A\u767B\u5F55",
    usernameCannotClear: "\u5DF2\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u4E0D\u53EF\u6E05\u7A7A",
    profileUpdated: "\u8D44\u6599\u66F4\u65B0\u6210\u529F",
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    unauthorized: "Unauthorized",
    usernameCannotClear: "An existing username cannot be cleared",
    profileUpdated: "Profile updated successfully",
    internalError: "Internal server error"
  };
  const session = await requireUserSession(event);
  const userId = Number(((_a = session.user) == null ? void 0 : _a.id) || 0);
  if (!session.user || !Number.isInteger(userId) || userId <= 0) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  const body = await readBody(event).catch(() => ({}));
  const { nickname, avatarUrl, username } = body || {};
  const userRows = await db.select({
    id: users.id,
    email: users.email,
    username: users.username,
    nickname: users.nickname,
    avatarUrl: users.avatarUrl,
    status: users.status,
    emailVerifiedAt: users.emailVerifiedAt
  }).from(users).where(eq(users.id, userId)).limit(1);
  const currentUser = userRows[0];
  if (!currentUser) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  if (!isUserStatusActive(currentUser.status)) {
    throw createAccountUnavailableError(currentUser.status, locale, 403);
  }
  const updates = {};
  if (nickname !== void 0) {
    updates.nickname = typeof nickname === "string" ? nickname.trim().slice(0, 80) : "";
  }
  if (avatarUrl !== void 0) {
    updates.avatarUrl = typeof avatarUrl === "string" ? avatarUrl.trim().slice(0, 500) : null;
  }
  if (username !== void 0 && username !== null) {
    const rawUsername = String(username).trim();
    if (!rawUsername) {
      if (currentUser.username) {
        throw createError({ statusCode: 400, message: messages.usernameCannotClear });
      }
    } else {
      const validation = validateUsername(rawUsername);
      if (!validation.valid || !validation.normalizedUsername) {
        throw createError({
          statusCode: 400,
          message: getUsernameErrorMessage(validation.errorKey, locale)
        });
      }
      const normalized = validation.normalizedUsername;
      if (normalized !== (currentUser.username || "")) {
        const existing = await db.select({ id: users.id }).from(users).where(and(eq(users.username, normalized), ne(users.id, userId))).limit(1);
        if (existing.length > 0) {
          throw createError({
            statusCode: 409,
            message: getUsernameErrorMessage("username_taken", locale)
          });
        }
        updates.username = normalized;
      }
    }
  }
  if (Object.keys(updates).length === 0) {
    return {
      code: 0,
      message: messages.profileUpdated,
      user: {
        ...session.user,
        id: currentUser.id,
        email: currentUser.email,
        username: currentUser.username || null,
        nickname: currentUser.nickname,
        avatarUrl: currentUser.avatarUrl,
        emailVerified: Boolean(currentUser.emailVerifiedAt),
        emailVerifiedAt: currentUser.emailVerifiedAt || null
      }
    };
  }
  try {
    await db.update(users).set(updates).where(eq(users.id, userId));
  } catch (error) {
    if (updates.username && isUniqueConstraintError(error)) {
      throw createError({
        statusCode: 409,
        message: getUsernameErrorMessage("username_taken", locale)
      });
    }
    console.error("Update profile error:", error);
    throw createError({
      statusCode: 500,
      message: (error == null ? void 0 : error.message) || messages.internalError
    });
  }
  const updatedUser = {
    ...session.user,
    id: currentUser.id,
    email: currentUser.email,
    username: (updates.username !== void 0 ? String(updates.username) : currentUser.username) || null,
    nickname: updates.nickname !== void 0 ? String(updates.nickname) : currentUser.nickname,
    avatarUrl: updates.avatarUrl !== void 0 ? updates.avatarUrl : currentUser.avatarUrl,
    emailVerified: Boolean(currentUser.emailVerifiedAt),
    emailVerifiedAt: currentUser.emailVerifiedAt || null
  };
  await overwriteSessionUser(event, session, updatedUser);
  return {
    code: 0,
    message: messages.profileUpdated,
    user: updatedUser
  };
});

export { profile_put as default };
//# sourceMappingURL=profile.put.mjs.map
