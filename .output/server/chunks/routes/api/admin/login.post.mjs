import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, h as admins, M as verifyPassword, N as setUserSession, P as recordOperationFromEvent } from '../../../nitro/nitro.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const ADMIN_LOGIN_AUDIT_DEDUPE_MS = 30 * 60 * 1e3;
const login_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  const { username, password } = body;
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
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u7F3A\u5C11\u767B\u5F55\u51ED\u636E" : "Missing credentials" });
  }
  const [user] = await db.select().from(admins).where(eq(admins.username, username)).limit(1);
  if (!user) {
    await auditLoginFailure("unknown_admin");
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u7BA1\u7406\u5458\u4E0D\u5B58\u5728" : "Admin not found" });
  }
  const isValid = await verifyPassword(user.passwordHash, password);
  if (!isValid) {
    await auditLoginFailure("bad_password", { id: user.id, username: user.username });
    throw createError({ statusCode: 401, message: locale === "zh" ? "\u767B\u5F55\u51ED\u636E\u65E0\u6548" : "Invalid credentials" });
  }
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
