import { d as defineEventHandler, c as getRequestLocale, e as createError, f as getRouterParam, b as db, h as admins, i as isSuperAdmin, j as canGrantPermissions, r as readBody, l as hashPassword, n as normalizePermissions, m as setUserSession, s as setAuditMeta } from '../../../../nitro/nitro.mjs';
import { eq, and, ne } from 'drizzle-orm';
import 'node:crypto';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
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
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';

const USERNAME_REGEX = /^[a-zA-Z0-9_.-]{3,32}$/;
const MIN_PASSWORD_LEN = 6;
const _id__put = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    adminIdRequired: "\u7BA1\u7406\u5458 ID \u4E0D\u80FD\u4E3A\u7A7A",
    usernameRequired: "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",
    invalidUsername: "\u7528\u6237\u540D\u683C\u5F0F\u975E\u6CD5\uFF0C\u4EC5\u9650 3-32 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3001\u70B9\u6216\u8FDE\u5B57\u7B26",
    passwordTooShort: `\u5BC6\u7801\u957F\u5EA6\u81F3\u5C11 ${MIN_PASSWORD_LEN} \u4F4D`,
    reservedMainUsername: '\u4E0D\u80FD\u5C06\u7528\u6237\u540D\u4FEE\u6539\u4E3A\u4FDD\u7559\u7684\u4E3B\u7BA1\u7406\u5458\u540D\u79F0 "admin"',
    usernameTaken: "\u8BE5\u7528\u6237\u540D\u5DF2\u88AB\u5176\u4ED6\u7BA1\u7406\u5458\u5360\u7528",
    cannotEditMain: "\u4E3B\u7BA1\u7406\u5458\u6743\u9650\u4E0D\u53EF\u4FEE\u6539",
    cannotModifyMainName: "\u4E3B\u7BA1\u7406\u5458\u7528\u6237\u540D\u4E0D\u53EF\u4FEE\u6539",
    cannotEscalate: "\u4E0D\u80FD\u7BA1\u7406\u9AD8\u4E8E\u81EA\u8EAB\u6743\u9650\u7684\u8D26\u53F7\u6216\u6388\u4E88\u8D85\u51FA\u81EA\u8EAB\u8303\u56F4\u7684\u6743\u9650",
    updated: "\u7BA1\u7406\u5458\u66F4\u65B0\u6210\u529F",
    failed: "\u66F4\u65B0\u7BA1\u7406\u5458\u5931\u8D25"
  } : {
    adminIdRequired: "Admin ID is required",
    usernameRequired: "Username is required",
    invalidUsername: "Invalid username: 3-32 chars of letters/digits/_ . - allowed",
    passwordTooShort: `Password must be at least ${MIN_PASSWORD_LEN} characters`,
    reservedMainUsername: 'Cannot rename an account to the reserved superadmin username "admin"',
    usernameTaken: "Username already taken by another admin",
    cannotEditMain: "Permissions of the main admin cannot be modified",
    cannotModifyMainName: "Username of the main admin cannot be changed",
    cannotEscalate: "Cannot manage an account with higher privileges or grant permissions beyond your own scope",
    updated: "Admin updated successfully",
    failed: "Failed to update admin"
  };
  if (event.context.authenticatedFromToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406\u7BA1\u7406\u5458\u8D26\u53F7\uFF0C\u4E0D\u80FD\u7528\u7CFB\u7EDF Token \u64CD\u4F5C" : "Manage admin accounts from a logged-in session, not via a system token"
    });
  }
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({ statusCode: 400, message: messages.adminIdRequired });
    }
    const currentList = await db.select().from(admins).where(eq(admins.id, Number(id))).limit(1);
    if (currentList.length === 0) {
      throw createError({ statusCode: 404, message: messages.failed });
    }
    const current = currentList[0];
    const editingMain = isSuperAdmin(current.username);
    const actingAdmin = event.context.admin;
    if (editingMain && !isSuperAdmin(actingAdmin == null ? void 0 : actingAdmin.username)) {
      throw createError({ statusCode: 403, message: messages.cannotEditMain });
    }
    if (!editingMain && !canGrantPermissions(actingAdmin, current.permissions)) {
      throw createError({ statusCode: 403, message: messages.cannotEscalate });
    }
    const body = await readBody(event);
    const rawUsername = typeof (body == null ? void 0 : body.username) === "string" ? body.username.trim() : "";
    const password = body == null ? void 0 : body.password;
    const permissions = body == null ? void 0 : body.permissions;
    if (!rawUsername) {
      throw createError({ statusCode: 400, message: messages.usernameRequired });
    }
    if (!USERNAME_REGEX.test(rawUsername)) {
      throw createError({ statusCode: 400, message: messages.invalidUsername });
    }
    if (editingMain && rawUsername !== "admin") {
      throw createError({ statusCode: 400, message: messages.cannotModifyMainName });
    }
    if (!editingMain && rawUsername.toLowerCase() === "admin") {
      throw createError({ statusCode: 403, message: messages.reservedMainUsername });
    }
    const existingUser = await db.select().from(admins).where(
      and(
        eq(admins.username, rawUsername),
        ne(admins.id, Number(id))
      )
    );
    if (existingUser.length > 0) {
      throw createError({ statusCode: 400, message: messages.usernameTaken });
    }
    const updateData = { username: rawUsername };
    if (password !== void 0 && password !== null && password !== "") {
      if (typeof password !== "string" || password.length < MIN_PASSWORD_LEN) {
        throw createError({ statusCode: 400, message: messages.passwordTooShort });
      }
      updateData.passwordHash = await hashPassword(password);
    }
    if (!editingMain && permissions !== void 0) {
      const normalized = (_a = normalizePermissions(permissions, { allowAll: true })) != null ? _a : [];
      if (!canGrantPermissions(actingAdmin, normalized)) {
        throw createError({ statusCode: 403, message: messages.cannotEscalate });
      }
      updateData.permissions = normalized;
    }
    await db.update(admins).set(updateData).where(eq(admins.id, Number(id)));
    if (actingAdmin && Number(actingAdmin.id) === Number(id)) {
      const nextPerms = "permissions" in updateData ? updateData.permissions : current.permissions;
      await setUserSession(event, {
        admin: {
          id: Number(id),
          username: rawUsername,
          role: "admin",
          permissions: Array.isArray(nextPerms) ? nextPerms : void 0
        },
        user: void 0,
        loggedInAt: /* @__PURE__ */ new Date()
      }).catch(() => {
      });
    }
    setAuditMeta(event, {
      summary: `Updated admin "${current.username}"`,
      details: {
        before: { username: current.username, permissions: (_b = current.permissions) != null ? _b : null },
        after: {
          username: rawUsername,
          permissions: "permissions" in updateData ? updateData.permissions : (_c = current.permissions) != null ? _c : null
        },
        passwordChanged: Boolean(password)
      }
    });
    return { code: 0, message: messages.updated };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
