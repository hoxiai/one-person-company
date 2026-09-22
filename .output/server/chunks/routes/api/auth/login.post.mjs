import { d as defineEventHandler, c as getRequestLocale, N as resolveClientIp, P as checkIpRateLimit, e as createError, r as readBody, bz as getUserLoginSecurityState, R as consumeCaptchaTicket, b as db, u as users, S as verifyPassword, bA as clearUserLoginFailure, bB as issueWebSession, bm as trackVisitorEvent, bC as ensureVisitorId, bD as recordUserLoginFailure } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const login_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const ip = resolveClientIp(event);
  const messages = locale === "zh" ? {
    emailPasswordRequired: "\u90AE\u7BB1\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    invalidCredentials: "\u90AE\u7BB1\u6216\u5BC6\u7801\u9519\u8BEF",
    thirdPartyLogin: "\u8BE5\u8D26\u53F7\u4F7F\u7528\u7B2C\u4E09\u65B9\u767B\u5F55",
    rateLimited: "\u767B\u5F55\u5C1D\u8BD5\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
    needCaptcha: "\u8BF7\u5148\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1",
    captchaExpired: "\u5B89\u5168\u9A8C\u8BC1\u5DF2\u8FC7\u671F\u6216\u65E0\u6548\uFF0C\u8BF7\u91CD\u65B0\u9A8C\u8BC1"
  } : {
    emailPasswordRequired: "Email and password are required",
    invalidCredentials: "Invalid email or password",
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
  const { email, password, captchaTicket } = body || {};
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: messages.emailPasswordRequired
    });
  }
  const secState = getUserLoginSecurityState(ip, email);
  if (secState.isLocked) {
    const minutes = Math.ceil(secState.lockRemainingMs / 6e4) || 1;
    throw createError({
      statusCode: 429,
      message: locale === "zh" ? `\u767B\u5F55\u5931\u8D25\u6B21\u6570\u8FC7\u591A\uFF0C\u5DF2\u88AB\u4E34\u65F6\u9501\u5B9A\uFF0C\u8BF7 ${minutes} \u5206\u949F\u540E\u518D\u8BD5` : `Too many failed attempts. Temporarily locked. Please try again in ${minutes} minute(s)`,
      data: { needCaptcha: true, isLocked: true }
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
    const isTicketValid = consumeCaptchaTicket(captchaTicket);
    if (!isTicketValid) {
      throw createError({
        statusCode: 403,
        message: messages.captchaExpired,
        data: { needCaptcha: true }
      });
    }
  }
  const handleAuthFailure = (message) => {
    const failState = recordUserLoginFailure(ip, email);
    if (failState.isLocked) {
      throw createError({
        statusCode: 429,
        message: locale === "zh" ? "\u5BC6\u7801\u9519\u8BEF\u6B21\u6570\u8FC7\u591A\uFF0C\u5DF2\u88AB\u9501\u5B9A 15 \u5206\u949F" : "Too many failed attempts. Locked for 15 minutes",
        data: { needCaptcha: true, isLocked: true }
      });
    }
    throw createError({
      statusCode: 401,
      message,
      data: { needCaptcha: failState.requiresCaptcha }
    });
  };
  const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUsers.length === 0) {
    handleAuthFailure(messages.invalidCredentials);
  }
  const user = existingUsers[0];
  if (!user.passwordHash) {
    throw createError({
      statusCode: 401,
      message: messages.thirdPartyLogin
    });
  }
  const isValid = await verifyPassword(user.passwordHash, password);
  if (!isValid) {
    handleAuthFailure(messages.invalidCredentials);
  }
  clearUserLoginFailure(ip, email);
  await issueWebSession(event, user, "password");
  await trackVisitorEvent(event, {
    visitorId: ensureVisitorId(event),
    userId: user.id,
    eventName: "auth",
    eventAction: "login"
  });
  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      emailVerified: Boolean(user.emailVerifiedAt),
      emailVerifiedAt: user.emailVerifiedAt || null
    }
  };
});

export { login_post as default };
