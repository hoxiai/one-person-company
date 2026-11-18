import { d as defineEventHandler, c as getRequestLocale, e as createError, r as readBody, n as normalizePermissions, j as canGrantPermissions, b as db, h as admins, l as hashPassword, s as setAuditMeta } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const USERNAME_REGEX = /^[a-zA-Z0-9_.-]{3,32}$/;
const MIN_PASSWORD_LEN = 6;
const index_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    required: "\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    invalidUsername: "\u7528\u6237\u540D\u683C\u5F0F\u975E\u6CD5\uFF0C\u4EC5\u9650 3-32 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3001\u70B9\u6216\u8FDE\u5B57\u7B26",
    passwordTooShort: `\u5BC6\u7801\u957F\u5EA6\u81F3\u5C11 ${MIN_PASSWORD_LEN} \u4F4D`,
    reservedMainUsername: '\u4E0D\u80FD\u521B\u5EFA\u4FDD\u7559\u7684\u4E3B\u7BA1\u7406\u5458\u7528\u6237\u540D "admin"',
    usernameExists: "\u7528\u6237\u540D\u5DF2\u5B58\u5728",
    cannotEscalate: "\u4E0D\u80FD\u6388\u4E88\u8D85\u51FA\u81EA\u8EAB\u6743\u9650\u8303\u56F4\u7684\u6743\u9650",
    created: "\u7BA1\u7406\u5458\u521B\u5EFA\u6210\u529F",
    failed: "\u521B\u5EFA\u7BA1\u7406\u5458\u5931\u8D25"
  } : {
    required: "Username and password are required",
    invalidUsername: "Invalid username: 3-32 chars of letters/digits/_ . - allowed",
    passwordTooShort: `Password must be at least ${MIN_PASSWORD_LEN} characters`,
    reservedMainUsername: 'Cannot create reserved superadmin username "admin"',
    usernameExists: "Username already exists",
    cannotEscalate: "Cannot grant permissions beyond your own scope",
    created: "Admin created successfully",
    failed: "Failed to create admin"
  };
  if (event.context.authenticatedFromToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406\u7BA1\u7406\u5458\u8D26\u53F7\uFF0C\u4E0D\u80FD\u7528\u7CFB\u7EDF Token \u64CD\u4F5C" : "Manage admin accounts from a logged-in session, not via a system token"
    });
  }
  try {
    const body = await readBody(event);
    const rawUsername = typeof (body == null ? void 0 : body.username) === "string" ? body.username.trim() : "";
    const password = body == null ? void 0 : body.password;
    const permissions = body == null ? void 0 : body.permissions;
    if (!rawUsername || !password || typeof password !== "string") {
      throw createError({
        statusCode: 400,
        message: messages.required
      });
    }
    if (!USERNAME_REGEX.test(rawUsername)) {
      throw createError({
        statusCode: 400,
        message: messages.invalidUsername
      });
    }
    if (password.length < MIN_PASSWORD_LEN) {
      throw createError({
        statusCode: 400,
        message: messages.passwordTooShort
      });
    }
    if (rawUsername.toLowerCase() === "admin") {
      throw createError({
        statusCode: 403,
        message: messages.reservedMainUsername
      });
    }
    const normalizedPerms = (_a = normalizePermissions(permissions, { allowAll: true })) != null ? _a : [];
    if (!canGrantPermissions(event.context.admin, normalizedPerms)) {
      throw createError({
        statusCode: 403,
        message: messages.cannotEscalate
      });
    }
    const existingAdmin = await db.select().from(admins).where(eq(admins.username, rawUsername));
    if (existingAdmin.length > 0) {
      throw createError({
        statusCode: 400,
        message: messages.usernameExists
      });
    }
    const hashedPassword = await hashPassword(password);
    await db.insert(admins).values({
      username: rawUsername,
      passwordHash: hashedPassword,
      permissions: normalizedPerms
    });
    setAuditMeta(event, {
      summary: `Created admin "${rawUsername}"`,
      details: { username: rawUsername, permissions: normalizedPerms }
    });
    return { code: 0, message: messages.created };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
