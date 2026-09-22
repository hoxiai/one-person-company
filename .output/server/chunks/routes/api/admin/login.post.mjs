import { d as defineEventHandler, c as getRequestLocale, N as resolveClientIp, P as checkIpRateLimit, e as createError, r as readBody, Q as getAdminLoginSecurityState, R as consumeCaptchaTicket, b as db, h as admins, S as verifyPassword, T as clearAdminLoginFailure, U as setUserSession, V as recordOperationFromEvent, W as recordAdminLoginFailure } from '../../../nitro/nitro.mjs';
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

const ADMIN_LOGIN_AUDIT_DEDUPE_MS = 30 * 60 * 1e3;
const login_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const ip = resolveClientIp(event);
  const ipLimit = checkIpRateLimit(`admin-login:ip:${ip}`, { max: 10, windowMs: 6e4 });
  if (!ipLimit.ok) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too Many Requests",
      message: locale === "zh" ? "\u767B\u5F55\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5" : "Too many login attempts, please try again later"
    });
  }
  const body = await readBody(event);
  const { username, password, captchaTicket } = body || {};
  const auditLoginFailure = (reason, admin) => {
    var _a, _b;
    return recordOperationFromEvent(event, {
      actorId: (_a = admin == null ? void 0 : admin.id) != null ? _a : null,
      actorName: (_b = admin == null ? void 0 : admin.username) != null ? _b : typeof username === "string" ? username.slice(0, 190) : null,
      action: "loginFailed",
      resource: "auth",
      details: { reason },
      statusCode: 401
    });
  };
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7F3A\u5C11\u767B\u5F55\u51ED\u636E" : "Missing credentials"
    });
  }
  const secState = getAdminLoginSecurityState(ip, username);
  if (secState.isLocked) {
    const minutes = Math.ceil(secState.lockRemainingMs / 6e4) || 1;
    throw createError({
      statusCode: 429,
      message: locale === "zh" ? `\u5C1D\u8BD5\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8D26\u53F7\u5DF2\u88AB\u4E34\u65F6\u9501\u5B9A\uFF0C\u8BF7 ${minutes} \u5206\u949F\u540E\u518D\u8BD5` : `Too many attempts. Account locked. Please try again in ${minutes} minute(s)`,
      data: { needCaptcha: true, isLocked: true }
    });
  }
  if (secState.requiresCaptcha) {
    if (!captchaTicket || typeof captchaTicket !== "string") {
      throw createError({
        statusCode: 403,
        message: locale === "zh" ? "\u8BF7\u5148\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1" : "Please complete the security verification",
        data: { needCaptcha: true }
      });
    }
    const isTicketValid = consumeCaptchaTicket(captchaTicket);
    if (!isTicketValid) {
      throw createError({
        statusCode: 403,
        message: locale === "zh" ? "\u5B89\u5168\u9A8C\u8BC1\u5DF2\u8FC7\u671F\u6216\u65E0\u6548\uFF0C\u8BF7\u91CD\u65B0\u9A8C\u8BC1" : "Security verification expired or invalid, please retry",
        data: { needCaptcha: true }
      });
    }
  }
  const handleCredentialFailure = async (reason, adminUser) => {
    await auditLoginFailure(reason, adminUser);
    const failState = recordAdminLoginFailure(ip, username);
    if (failState.isLocked) {
      throw createError({
        statusCode: 429,
        message: locale === "zh" ? "\u5BC6\u7801\u9519\u8BEF\u6B21\u6570\u8FC7\u591A\uFF0C\u8D26\u53F7\u5DF2\u88AB\u9501\u5B9A 15 \u5206\u949F" : "Too many failed attempts. Account locked for 15 minutes",
        data: { needCaptcha: true, isLocked: true }
      });
    }
    throw createError({
      statusCode: 401,
      message: locale === "zh" ? "\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF" : "Invalid credentials",
      data: { needCaptcha: failState.requiresCaptcha }
    });
  };
  const [user] = await db.select().from(admins).where(eq(admins.username, username)).limit(1);
  if (!user) {
    await handleCredentialFailure("unknown_admin");
  }
  const isValid = await verifyPassword(user.passwordHash, password);
  if (!isValid) {
    await handleCredentialFailure("bad_password", { id: user.id, username: user.username });
  }
  clearAdminLoginFailure(ip, username);
  const permsRaw = user.permissions;
  const permissions = Array.isArray(permsRaw) ? permsRaw : void 0;
  await setUserSession(event, {
    admin: {
      id: user.id,
      username: user.username,
      role: "admin",
      permissions
    },
    user: void 0,
    loggedInAt: /* @__PURE__ */ new Date()
  });
  await recordOperationFromEvent(event, {
    actorId: user.id,
    actorName: user.username,
    action: "login",
    resource: "auth",
    statusCode: 200,
    dedupeWindowMs: ADMIN_LOGIN_AUDIT_DEDUPE_MS
  });
  return { message: locale === "zh" ? "\u767B\u5F55\u6210\u529F" : "Login successful" };
});

export { login_post as default };
