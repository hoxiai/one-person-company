import { d as defineEventHandler, c as getRequestLocale, e5 as validateLoginAuthorization, an as resolveClientIp, ao as checkIpRateLimit, e as createError, r as readBody, e6 as getUserLoginSecurityState, aq as consumeCaptchaTicket, b as db, w as users, e7 as normalizeUsername, dR as isUserStatusActive, dS as createAccountUnavailableError, ar as verifyPassword, e8 as clearUserLoginFailure, e9 as issueLoginSession, dH as trackVisitorEvent, ea as ensureVisitorId, eb as recordUserLoginFailure } from '../../../nitro/nitro.mjs';
import { eq, or } from 'drizzle-orm';
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

const login_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  await validateLoginAuthorization(event);
  const ip = resolveClientIp(event);
  const messages = locale === "zh" ? {
    emailPasswordRequired: "\u90AE\u7BB1/\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    invalidCredentials: "\u8D26\u53F7\u6216\u5BC6\u7801\u9519\u8BEF",
    thirdPartyLogin: "\u8BE5\u8D26\u53F7\u4F7F\u7528\u7B2C\u4E09\u65B9\u767B\u5F55",
    rateLimited: "\u767B\u5F55\u5C1D\u8BD5\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
    needCaptcha: "\u8BF7\u5148\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1",
    captchaExpired: "\u5B89\u5168\u9A8C\u8BC1\u5DF2\u8FC7\u671F\u6216\u65E0\u6548\uFF0C\u8BF7\u91CD\u65B0\u9A8C\u8BC1"
  } : {
    emailPasswordRequired: "Email/username and password are required",
    invalidCredentials: "Invalid email/username or password",
    thirdPartyLogin: "This account uses third-party login",
    rateLimited: "Too many login attempts, please try again later",
    needCaptcha: "Please complete the security verification",
    captchaExpired: "Security verification expired or invalid, please retry"
  };
  const ipLimit = checkIpRateLimit(`user-login:ip:${ip}`, { max: 30, windowMs: 6e4 });
  if (!ipLimit.ok) {
    throw createError({
      statusCode: 429,
      message: messages.rateLimited
    });
  }
  const body = await readBody(event);
  const { email, identifier, username, password, captchaTicket } = body || {};
  const rawIdentifier = String(identifier || email || username || "").trim();
  const normalizedIdentifier = rawIdentifier.toLowerCase();
  if (!rawIdentifier || !password) {
    throw createError({
      statusCode: 400,
      message: messages.emailPasswordRequired
    });
  }
  const secState = getUserLoginSecurityState(ip, normalizedIdentifier);
  if (secState.isLocked) {
    const minutes = Math.ceil(secState.lockRemainingMs / 6e4) || 1;
    throw createError({
      statusCode: 429,
      message: locale === "zh" ? `\u767B\u5F55\u5931\u8D25\u6B21\u6570\u8FC7\u591A\uFF0C\u5DF2\u88AB\u4E34\u65F6\u9501\u5B9A\uFF0C\u8BF7 ${minutes} \u5206\u949F\u540E\u518D\u8BD5` : `Too many failed attempts. Temporarily locked. Please try again in ${minutes} minute(s)`,
      data: { needCaptcha: false, isLocked: true }
    });
  }
  if (secState.requiresCaptcha) {
    if (!captchaTicket || typeof captchaTicket !== "string") {
      throw createError({
        statusCode: 403,
        message: messages.needCaptcha,
        data: { needCaptcha: true }
      });
    }
    const isTicketValid = consumeCaptchaTicket(captchaTicket, ip);
    if (!isTicketValid) {
      throw createError({
        statusCode: 403,
        message: messages.captchaExpired,
        data: { needCaptcha: true }
      });
    }
  }
  const handleAuthFailure = (message) => {
    const failState = recordUserLoginFailure(ip, normalizedIdentifier);
    if (failState.isLocked) {
      throw createError({
        statusCode: 429,
        message: locale === "zh" ? "\u5BC6\u7801\u9519\u8BEF\u6B21\u6570\u8FC7\u591A\uFF0C\u5DF2\u88AB\u9501\u5B9A 15 \u5206\u949F" : "Too many failed attempts. Locked for 15 minutes",
        data: { needCaptcha: false, isLocked: true }
      });
    }
    throw createError({
      statusCode: 401,
      message,
      // 密码错误时先让用户看到报错并修改密码，不要立即弹滑块；下次提交时再由前置检查返回 403 + needCaptcha: true
      data: { needCaptcha: false }
    });
  };
  const isEmailLookup = normalizedIdentifier.includes("@");
  const existingUsers = isEmailLookup ? await db.select().from(users).where(
    normalizedIdentifier === rawIdentifier ? eq(users.email, normalizedIdentifier) : or(eq(users.email, normalizedIdentifier), eq(users.email, rawIdentifier))
  ).limit(1) : await db.select().from(users).where(eq(users.username, normalizeUsername(rawIdentifier))).limit(1);
  if (existingUsers.length === 0) {
    handleAuthFailure(messages.invalidCredentials);
  }
  const user = existingUsers[0];
  if (!user.passwordHash) {
    if (!isUserStatusActive(user.status)) {
      throw createAccountUnavailableError(user.status, locale, 403);
    }
    throw createError({
      statusCode: 401,
      message: messages.thirdPartyLogin
    });
  }
  const isValid = await verifyPassword(user.passwordHash, password);
  if (!isValid) {
    handleAuthFailure(messages.invalidCredentials);
  }
  if (!isUserStatusActive(user.status)) {
    throw createAccountUnavailableError(user.status, locale, 403);
  }
  clearUserLoginFailure(ip, normalizedIdentifier);
  const loginResult = await issueLoginSession(event, user, "password");
  await trackVisitorEvent(event, {
    visitorId: ensureVisitorId(event),
    userId: user.id,
    eventName: "auth",
    eventAction: "login"
  });
  return {
    success: true,
    ...loginResult,
    user: {
      id: user.id,
      email: user.email,
      username: user.username || null,
      nickname: user.nickname,
      emailVerified: Boolean(user.emailVerifiedAt),
      emailVerifiedAt: user.emailVerifiedAt || null
    }
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
