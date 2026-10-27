import { d as defineEventHandler, at as requireTrustedRequestOrigin, c as getRequestLocale, $ as resolveClientIp, a0 as checkIpRateLimit, e as createError, r as readBody, cV as mergePromoTracking, cW as capturePromoTracking, cX as readPromoTracking, cm as PASSWORD_MIN_LENGTH, cn as validateEmail, b as db, u as users, j as hashPassword, au as ensurePromoMember, cY as bindInviteRelation, cZ as requestPromoAgentJoin, al as emitEvent, c_ as promoAgentRelations, c$ as promoInviteRelations, aQ as promoMembers, cP as issueWebSession, cx as trackVisitorEvent, cQ as ensureVisitorId, cl as userTokens, cq as EMAIL_VERIFY_TOKEN_NAME, X as getLocalizedSettingValue, Y as sendEmail } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import 'node:crypto';
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

const register_post = defineEventHandler(async (event) => {
  const siteUrl = requireTrustedRequestOrigin(event);
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    tooManyRequests: "\u6CE8\u518C\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
    emailPasswordRequired: "\u90AE\u7BB1\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    passwordTooShort: `\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E ${PASSWORD_MIN_LENGTH} \u4F4D`,
    invalidEmail: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
    disposableEmail: "\u7CFB\u7EDF\u4E0D\u652F\u6301\u4E34\u65F6/\u4E00\u6B21\u6027\u90AE\u7BB1\u6CE8\u518C\uFF0C\u8BF7\u4F7F\u7528\u5E38\u7528\u90AE\u7BB1",
    userExists: "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u6CE8\u518C"
  } : {
    tooManyRequests: "Too many registration attempts. Please try again later.",
    emailPasswordRequired: "Email and password are required",
    passwordTooShort: `Password must be at least ${PASSWORD_MIN_LENGTH} characters`,
    invalidEmail: "Please enter a valid email address",
    disposableEmail: "Disposable email addresses are not supported. Please use a standard email.",
    userExists: "User with this email already exists"
  };
  const clientIp = resolveClientIp(event);
  const rateLimit = checkIpRateLimit(`register:${clientIp}`, { max: 10, windowMs: 15 * 60 * 1e3 });
  if (!rateLimit.ok) {
    throw createError({
      statusCode: 429,
      message: messages.tooManyRequests
    });
  }
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
  if (typeof password !== "string" || password.length < PASSWORD_MIN_LENGTH) {
    throw createError({
      statusCode: 400,
      message: messages.passwordTooShort
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
      await db.delete(promoAgentRelations).where(eq(promoAgentRelations.agentUserId, user.id));
      await db.delete(promoInviteRelations).where(eq(promoInviteRelations.inviteeUserId, user.id));
      await db.delete(promoMembers).where(eq(promoMembers.userId, user.id));
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
//# sourceMappingURL=register.post.mjs.map
