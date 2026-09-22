import { d as defineEventHandler, c as getRequestLocale, N as resolveClientIp, P as checkIpRateLimit, e as createError, b as db, h as admins, r as readBody, j as hashPassword, V as recordOperationFromEvent } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const USERNAME_REGEX = /^[a-zA-Z0-9_.-]{3,32}$/;
const MIN_PASSWORD_LEN = 10;
function isStrongPassword(pw) {
  if (typeof pw !== "string") return { ok: false, reason: "invalid_type" };
  if (pw.length < MIN_PASSWORD_LEN) return { ok: false, reason: "too_short" };
  const hasLower = /[a-z]/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasDigit = /\d/.test(pw);
  const variety = [hasLower, hasUpper, hasDigit].filter(Boolean).length;
  if (variety < 2) return { ok: false, reason: "too_simple" };
  const commonWeak = /* @__PURE__ */ new Set(["1234567890", "password12", "admin12345", "qwerty1234", "0987654321"]);
  if (commonWeak.has(pw.toLowerCase())) return { ok: false, reason: "common_password" };
  return { ok: true };
}
function isUniqueViolation(err) {
  if (!err) return false;
  const msg = err.message || "";
  const code = err.code || "";
  const lower = msg.toLowerCase();
  return /unique.*constraint/.test(lower) || /duplicate.*(entry|key|column)/.test(lower) || /sqlite_constraint_unique/.test(lower) || code === "23505" || // PostgreSQL
  code === "ER_DUP_ENTRY" || // MySQL
  code === "SQLITE_CONSTRAINT_UNIQUE";
}
const setup_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const locale = getRequestLocale(event);
  const ip = resolveClientIp(event);
  const rl = checkIpRateLimit(`admin-setup:post:${ip}`, { max: 15, windowMs: 6e4 });
  if (!rl.ok) {
    event.node.res.setHeader("Retry-After", Math.ceil(rl.retryAfterMs / 1e3));
    throw createError({
      statusCode: 429,
      statusMessage: "Too Many Requests",
      message: locale === "zh" ? "\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5" : "Too many requests, please try later"
    });
  }
  const existingAdmins = await db.select({ id: admins.id }).from(admins).limit(1);
  if (existingAdmins.length > 0) {
    throw createError({ statusCode: 403, message: locale === "zh" ? "\u7BA1\u7406\u5458\u5DF2\u521D\u59CB\u5316" : "Admin already initialized" });
  }
  const body = await readBody(event);
  const { username, password } = body || {};
  if (!username || !password) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u767B\u5F55\u51ED\u636E" : "Missing credentials" });
  }
  const trimmedUsername = typeof username === "string" ? username.trim() : "";
  if (!USERNAME_REGEX.test(trimmedUsername)) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7528\u6237\u540D\u683C\u5F0F\u975E\u6CD5\uFF0C\u4EC5\u9650 3-32 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3001\u70B9\u6216\u8FDE\u5B57\u7B26" : "Invalid username: 3-32 chars of letters/digits/_ . - allowed"
    });
  }
  const strength = isStrongPassword(password);
  if (!strength.ok) {
    const messages = {
      invalid_type: { zh: "\u5BC6\u7801\u683C\u5F0F\u975E\u6CD5", en: "Invalid password format" },
      too_short: {
        zh: `\u5BC6\u7801\u957F\u5EA6\u81F3\u5C11 ${MIN_PASSWORD_LEN} \u4F4D`,
        en: `Password must be at least ${MIN_PASSWORD_LEN} characters`
      },
      too_simple: {
        zh: "\u5BC6\u7801\u5F3A\u5EA6\u4E0D\u8DB3\uFF0C\u9700\u540C\u65F6\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u4E0E\u6570\u5B57\u4E2D\u7684\u81F3\u5C11\u4E24\u7C7B",
        en: "Password too weak: need at least 2 of lowercase/uppercase/digit"
      },
      common_password: {
        zh: "\u8BE5\u5BC6\u7801\u8FC7\u4E8E\u5E38\u89C1\uFF0C\u8BF7\u66F4\u6362\u66F4\u590D\u6742\u7684\u5BC6\u7801",
        en: "This password is too common. Choose a stronger one."
      }
    };
    const key = strength.reason || "too_simple";
    const { zh, en } = (_b = (_a = messages[key]) != null ? _a : messages.too_simple) != null ? _b : { zh: "\u5BC6\u7801\u5F3A\u5EA6\u4E0D\u8DB3", en: "Password too weak" };
    throw createError({ statusCode: 400, message: locale === "zh" ? zh : en });
  }
  const passwordHash = await hashPassword(password);
  try {
    const inserted = await db.insert(admins).values({
      username: trimmedUsername,
      passwordHash
    }).onConflictDoNothing().returning({ id: admins.id });
    const affected = Array.isArray(inserted) ? inserted.length : (_c = inserted == null ? void 0 : inserted.rowCount) != null ? _c : 0;
    if (affected === 0) {
      throw createError({ statusCode: 403, message: locale === "zh" ? "\u7BA1\u7406\u5458\u5DF2\u521D\u59CB\u5316" : "Admin already initialized" });
    }
  } catch (err) {
    if (err == null ? void 0 : err.statusCode) throw err;
    if (isUniqueViolation(err)) {
      throw createError({ statusCode: 403, message: locale === "zh" ? "\u7BA1\u7406\u5458\u5DF2\u521D\u59CB\u5316" : "Admin already initialized" });
    }
    throw createError({ statusCode: 500, message: locale === "zh" ? "\u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" : "Setup failed, please retry" });
  }
  await recordOperationFromEvent(event, {
    actorType: "system",
    actorName: trimmedUsername,
    action: "setup",
    resource: "admins",
    summary: `Initialized first admin "${trimmedUsername}"`,
    statusCode: 200
  });
  return { success: true, message: locale === "zh" ? "\u7BA1\u7406\u5458\u521D\u59CB\u5316\u5B8C\u6210" : "Admin initialized" };
});

export { setup_post as default };
