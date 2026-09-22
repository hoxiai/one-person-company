import { d as defineEventHandler, ab as requireTrustedRequestOrigin, c as getRequestLocale, r as readBody, bH as mergePromoTracking, bI as capturePromoTracking, bJ as readPromoTracking, e as createError, bh as validateEmail, b as db, u as users, j as hashPassword, ac as ensurePromoMember, bK as bindInviteRelation, bL as requestPromoAgentJoin, a6 as emitEvent, bB as issueWebSession, bm as trackVisitorEvent, bC as ensureVisitorId, bg as userTokens, bk as EMAIL_VERIFY_TOKEN_NAME, J as getLocalizedSettingValue, K as sendEmail } from '../../../nitro/nitro.mjs';
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

const register_post = defineEventHandler(async (event) => {
  const siteUrl = requireTrustedRequestOrigin(event);
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    emailPasswordRequired: "\u90AE\u7BB1\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    invalidEmail: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
    disposableEmail: "\u7CFB\u7EDF\u4E0D\u652F\u6301\u4E34\u65F6/\u4E00\u6B21\u6027\u90AE\u7BB1\u6CE8\u518C\uFF0C\u8BF7\u4F7F\u7528\u5E38\u7528\u90AE\u7BB1",
    userExists: "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u6CE8\u518C"
  } : {
    emailPasswordRequired: "Email and password are required",
    invalidEmail: "Please enter a valid email address",
    disposableEmail: "Disposable email addresses are not supported. Please use a standard email.",
    userExists: "User with this email already exists"
  };
  const body = await readBody(event);
  const { email: rawEmail, password, nickname, inviteCode } = body;
  const promoTracking = mergePromoTracking(
    readPromoTracking(event),
    await capturePromoTracking(event)
  );
  if (!rawEmail || !password) {
    throw createError({
      statusCode: 400,
      message: messages.emailPasswordRequired
    });
  }
  const emailValidation = validateEmail(rawEmail);
  if (!emailValidation.valid) {
    const errorMsg = emailValidation.errorKey === "email_disposable_rejected" ? messages.disposableEmail : messages.invalidEmail;
    throw createError({
      statusCode: 400,
      message: errorMsg
    });
  }
  const email = emailValidation.normalizedEmail;
  const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUser.length > 0) {
    throw createError({
      statusCode: 409,
      message: messages.userExists
    });
  }
  const passwordHash = await hashPassword(password);
  const newUser = await db.insert(users).values({
    email,
    passwordHash,
    nickname: nickname || email.split("@")[0]
  }).returning();
  const user = newUser[0];
  await ensurePromoMember(user.id);
  const resolvedInviteCode = String(inviteCode || promoTracking.inviteCode || promoTracking.promoCode || "").trim();
  if (resolvedInviteCode) {
    await bindInviteRelation({
      inviteeUserId: user.id,
      inviteCode: resolvedInviteCode,
      source: "register"
    });
  }
  if (promoTracking.agentCode) {
    await requestPromoAgentJoin({
      userId: user.id,
      agentCode: promoTracking.agentCode});
  }
  try {
    await emitEvent("user.registered", {
      id: user.id,
      userId: user.id,
      email: user.email,
      nickname: user.nickname,
      inviteCode
    });
  } catch (err) {
    console.error("[Register] user.registered sync rule failed, rolling back user:", err);
    try {
      await db.delete(users).where(eq(users.id, user.id));
    } catch (cleanupErr) {
      console.error("[Register] Failed to rollback user after sync rule failure:", cleanupErr);
    }
    throw createError({
      statusCode: err.statusCode || 422,
      statusMessage: err.statusMessage || err.message || "\u6CE8\u518C\u524D\u7F6E\u89C4\u5219\u6821\u9A8C\u5931\u8D25\uFF0C\u64CD\u4F5C\u5DF2\u7EC8\u6B62"
    });
  }
  await issueWebSession(event, user, "register");
  await trackVisitorEvent(event, {
    visitorId: ensureVisitorId(event),
    userId: user.id,
    eventName: "auth",
    eventAction: "register"
  });
  const verifyToken = crypto.randomUUID();
  const verifyExpiresAt = Math.floor(Date.now() / 1e3) + 86400;
  await db.insert(userTokens).values({
    userId: user.id,
    token: verifyToken,
    name: EMAIL_VERIFY_TOKEN_NAME,
    expiresAt: new Date(verifyExpiresAt * 1e3)
  });
  const verifyLink = `${siteUrl}/api/auth/verify-email?token=${verifyToken}&lang=${locale}`;
  const siteName = await getLocalizedSettingValue("site_name", locale, "APay");
  const emailPromise = sendEmail({
    to: user.email,
    templateCode: "verify_email",
    locale,
    variables: {
      nickname: user.nickname || user.email.split("@")[0],
      site_name: siteName,
      site_url: siteUrl,
      verify_link: verifyLink
    }
  }).catch((err) => console.error("[Register] Failed to send verification email:", err));
  if (typeof (event == null ? void 0 : event.waitUntil) === "function") {
    event.waitUntil(emailPromise);
  }
  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      emailVerified: false,
      emailVerifiedAt: null
    }
  };
});

export { register_post as default };
