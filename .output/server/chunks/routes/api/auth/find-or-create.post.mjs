import { d as defineEventHandler, c as getRequestLocale, $ as resolveClientIp, a0 as checkIpRateLimit, e as createError, r as readBody, cn as validateEmail, b as db, u as users, j as hashPassword, al as emitEvent, cH as getIntegrationToken, b1 as settings } from '../../../nitro/nitro.mjs';
import { timingSafeEqual } from 'node:crypto';
import { eq, like } from 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

function safeTokenMatch(a, b) {
  if (!a || !b) return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}
async function isAuthorizedIdentityCaller(event) {
  var _a, _b, _c;
  if ((_a = event == null ? void 0 : event.context) == null ? void 0 : _a.admin) return true;
  const headers = ((_c = (_b = event == null ? void 0 : event.node) == null ? void 0 : _b.req) == null ? void 0 : _c.headers) || {};
  const authHeader = String(headers.authorization || headers.Authorization || "").trim();
  const xApiKey = String(headers["x-api-key"] || headers["X-Api-Key"] || "").trim();
  const xInternalSecret = String(headers["x-internal-secret"] || headers["X-Internal-Secret"] || "").trim();
  const bearerToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
  const suppliedToken = bearerToken || xApiKey || xInternalSecret;
  if (!suppliedToken) return false;
  const candidates = /* @__PURE__ */ new Set();
  const integrationToken = await getIntegrationToken();
  if (integrationToken) candidates.add(integrationToken.trim());
  if (process.env.APAY_INTEGRATION_TOKEN) candidates.add(process.env.APAY_INTEGRATION_TOKEN.trim());
  if (process.env.INTERNAL_API_SECRET) candidates.add(process.env.INTERNAL_API_SECRET.trim());
  try {
    const tenantTokenRows = await db.select({ value: settings.value }).from(settings).where(like(settings.key, "%_ainode_tenant_token"));
    for (const row of tenantTokenRows) {
      const val = String(row.value || "").trim();
      if (val) candidates.add(val);
    }
  } catch {
  }
  for (const expected of candidates) {
    if (safeTokenMatch(suppliedToken, expected)) return true;
  }
  return false;
}
const findOrCreate_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const clientIp = resolveClientIp(event);
  const rateLimit = checkIpRateLimit(`find-or-create:${clientIp}`, { max: 30, windowMs: 6e4 });
  if (!rateLimit.ok) {
    throw createError({
      statusCode: 429,
      message: locale === "zh" ? "\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5" : "Too many requests, please try again later"
    });
  }
  if (!await isAuthorizedIdentityCaller(event)) {
    throw createError({
      statusCode: 401,
      message: locale === "zh" ? "\u672A\u6388\u6743\u7684\u670D\u52A1\u7AEF\u8EAB\u4EFD\u89E3\u6790\u8BF7\u6C42" : "Unauthorized identity resolution request"
    });
  }
  const body = await readBody(event);
  const { email: rawEmail, password, nickname, createApiToken = false } = body || {};
  if (!rawEmail) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A" : "Email is required"
    });
  }
  if (createApiToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u6B64\u8EAB\u4EFD\u89E3\u6790\u63A5\u53E3\u4E0D\u80FD\u521B\u5EFA API Token" : "This identity endpoint cannot create API tokens"
    });
  }
  const emailValidation = validateEmail(rawEmail);
  if (!emailValidation.valid) {
    throw createError({
      statusCode: 400,
      message: emailValidation.errorKey === "email_disposable_rejected" ? locale === "zh" ? "\u7CFB\u7EDF\u4E0D\u652F\u6301\u4E34\u65F6/\u4E00\u6B21\u6027\u90AE\u7BB1\uFF0C\u8BF7\u4F7F\u7528\u5E38\u7528\u90AE\u7BB1" : "Disposable email addresses are not supported" : locale === "zh" ? "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740" : "Please enter a valid email address"
    });
  }
  const email = emailValidation.normalizedEmail;
  let user;
  let created = false;
  const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUsers.length > 0) {
    user = existingUsers[0];
    created = false;
  } else {
    let passwordHash = null;
    if (password) {
      passwordHash = await hashPassword(password);
    }
    try {
      const newUser = await db.insert(users).values({
        email,
        passwordHash,
        nickname: nickname || email.split("@")[0]
      }).returning();
      user = newUser[0];
      created = true;
    } catch (err) {
      const racedUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
      if (racedUsers.length === 0) {
        throw err;
      }
      console.warn(`[find-or-create] concurrent insert for ${email}, resolved to existing user #${racedUsers[0].id}`);
      user = racedUsers[0];
      created = false;
    }
  }
  if (created && user) {
    try {
      await emitEvent("user.registered", {
        id: user.id,
        userId: user.id,
        email: user.email,
        nickname: user.nickname,
        source: "find_or_create"
      });
    } catch (eventErr) {
      console.error(`[find-or-create] user.registered event failed for #${user.id}:`, eventErr);
    }
  }
  return {
    success: true,
    created,
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      avatarUrl: user.avatarUrl
    },
    apiToken: null
  };
});

export { findOrCreate_post as default };
//# sourceMappingURL=find-or-create.post.mjs.map
