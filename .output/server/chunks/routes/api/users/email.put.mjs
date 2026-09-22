import { d as defineEventHandler, ab as requireTrustedRequestOrigin, c as getRequestLocale, bF as requireUserSession, e as createError, r as readBody, bh as validateEmail, b as db, u as users, S as verifyPassword, bi as normalizeEmail, bM as getEmailVerifySendCooldown, bj as revokeEmailVerifyTokens, bN as issueEmailVerification, bG as overwriteSessionUser } from '../../../nitro/nitro.mjs';
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

const email_put = defineEventHandler(async (event) => {
  const siteUrl = requireTrustedRequestOrigin(event);
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u672A\u767B\u5F55",
    emailPasswordRequired: "\u90AE\u7BB1\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    invalidEmail: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
    disposableEmail: "\u7CFB\u7EDF\u4E0D\u652F\u6301\u4E34\u65F6/\u4E00\u6B21\u6027\u90AE\u7BB1\uFF0C\u8BF7\u4F7F\u7528\u5E38\u7528\u90AE\u7BB1",
    userNotFound: "\u7528\u6237\u4E0D\u5B58\u5728",
    incorrectPassword: "\u5BC6\u7801\u9519\u8BEF",
    emailInUse: "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u5360\u7528",
    emailUnchanged: "\u65B0\u90AE\u7BB1\u4E0E\u5F53\u524D\u90AE\u7BB1\u76F8\u540C\uFF0C\u672A\u505A\u4FEE\u6539",
    cooldown: (sec) => `\u90AE\u7BB1\u53D8\u66F4\u592A\u9891\u7E41\uFF0C\u8BF7\u5728 ${sec} \u79D2\u540E\u518D\u8BD5`,
    emailUpdated: "\u90AE\u7BB1\u5DF2\u66F4\u65B0\uFF0C\u6211\u4EEC\u5DF2\u5411\u65B0\u90AE\u7BB1\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6\uFF0C\u8BF7\u67E5\u6536\u540E\u5B8C\u6210\u9A8C\u8BC1",
    internalError: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF"
  } : {
    unauthorized: "Unauthorized",
    emailPasswordRequired: "Email and password are required",
    invalidEmail: "Please enter a valid email address",
    disposableEmail: "Disposable email addresses are not supported. Please use a standard email.",
    userNotFound: "User not found",
    incorrectPassword: "Incorrect password",
    emailInUse: "Email is already in use",
    emailUnchanged: "This is already your current email address, nothing was changed",
    cooldown: (sec) => `Too many email changes. Please wait ${sec} seconds before trying again`,
    emailUpdated: "Email updated. A verification link has been sent to your new address",
    internalError: "Internal server error"
  };
  const session = await requireUserSession(event);
  if (!session.user) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  const body = await readBody(event);
  const { newEmail, password } = body;
  if (!newEmail || !password) {
    return { code: 1, message: messages.emailPasswordRequired };
  }
  const emailValidation = validateEmail(newEmail);
  if (!emailValidation.valid) {
    return {
      code: 1,
      message: emailValidation.errorKey === "email_disposable_rejected" ? messages.disposableEmail : messages.invalidEmail
    };
  }
  const normalizedEmail = emailValidation.normalizedEmail;
  try {
    const userRecords = await db.select().from(users).where(eq(users.id, session.user.id));
    if (userRecords.length === 0) {
      return { code: 1, message: messages.userNotFound };
    }
    const user = userRecords[0];
    const isValid = await verifyPassword(user.passwordHash, password);
    if (!isValid) {
      return { code: 1, message: messages.incorrectPassword };
    }
    if (normalizeEmail(user.email) === normalizedEmail) {
      return {
        code: 0,
        message: messages.emailUnchanged,
        changed: false,
        emailVerified: Boolean(user.emailVerifiedAt),
        verificationSent: false,
        user: session.user
      };
    }
    const existingUser = await db.select().from(users).where(eq(users.email, normalizedEmail));
    if (existingUser.length > 0) {
      return { code: 1, message: messages.emailInUse };
    }
    const cooldownRemaining = await getEmailVerifySendCooldown(user.id);
    if (cooldownRemaining > 0) {
      return { code: 1, message: messages.cooldown(cooldownRemaining) };
    }
    await db.update(users).set({ email: normalizedEmail, emailVerifiedAt: null }).where(eq(users.id, session.user.id));
    await revokeEmailVerifyTokens(user.id);
    await issueEmailVerification({
      event,
      locale,
      siteUrl,
      user: { id: user.id, email: normalizedEmail, nickname: user.nickname }
    });
    await overwriteSessionUser(event, session, {
      ...session.user,
      email: normalizedEmail,
      emailVerified: false,
      emailVerifiedAt: null
    });
    return {
      code: 0,
      message: messages.emailUpdated,
      changed: true,
      emailVerified: false,
      verificationSent: true,
      user: { ...session.user, email: normalizedEmail, emailVerified: false, emailVerifiedAt: null }
    };
  } catch (error) {
    console.error("Update email error:", error);
    return { code: 1, message: error.message || messages.internalError };
  }
});

export { email_put as default };
