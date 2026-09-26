import { d as defineEventHandler, b$ as getRequestIP, c0 as checkCommentRateLimit, e as createError, aV as getUserSession, r as readBody, b as db, bo as oauthAccounts, c1 as sanitizeComment, c2 as getRequestHeader, aN as settings, o as comments, q as getCommentAvatarUrl } from '../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

const index_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const ip = getRequestIP(event, { xForwardedFor: true }) || "127.0.0.1";
  if (!checkCommentRateLimit(ip)) {
    throw createError({
      statusCode: 429,
      statusMessage: "\u53D1\u8A00\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5"
    });
  }
  const session = await getUserSession(event).catch(() => null);
  const user = session == null ? void 0 : session.user;
  const currentUserId = (user == null ? void 0 : user.id) ? Number(user.id) : null;
  const body = await readBody(event).catch(() => ({}));
  const targetType = String(body.targetType || "").trim().toLowerCase();
  const targetId = String(body.targetId || "").trim();
  const rawContent = String(body.content || "").trim();
  const rawAuthorName = String(body.authorName || "").trim();
  const rawAuthorEmail = String(body.authorEmail || "").trim();
  const rawAuthorUrl = String(body.authorUrl || "").trim();
  const parentId = body.parentId ? Number(body.parentId) : null;
  if (!targetType || targetType.length > 32) {
    throw createError({ statusCode: 400, statusMessage: "\u7F3A\u5C11\u6216\u975E\u6CD5\u7684 targetType" });
  }
  if (!targetId || targetId.length > 191) {
    throw createError({ statusCode: 400, statusMessage: "\u7F3A\u5C11\u6216\u975E\u6CD5\u7684 targetId" });
  }
  if (!rawContent || rawContent.length < 2) {
    throw createError({ statusCode: 400, statusMessage: "\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u80FD\u5C11\u4E8E 2 \u4E2A\u5B57" });
  }
  if (rawContent.length > 1e3) {
    throw createError({ statusCode: 400, statusMessage: "\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u80FD\u8D85\u8FC7 1000 \u5B57" });
  }
  let finalAuthorName = rawAuthorName;
  let finalAuthorEmail = rawAuthorEmail;
  let finalUserAvatar = null;
  if (currentUserId && user) {
    finalAuthorName = user.nickname || finalAuthorName || ((_a = user.email) == null ? void 0 : _a.split("@")[0]) || "\u7528\u6237";
    finalAuthorEmail = user.email || finalAuthorEmail;
    finalUserAvatar = user.avatarUrl || null;
  }
  if (!finalAuthorName) {
    throw createError({ statusCode: 400, statusMessage: "\u8BF7\u586B\u5199\u6635\u79F0" });
  }
  if (finalAuthorName.length > 50) {
    throw createError({ statusCode: 400, statusMessage: "\u6635\u79F0\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 50 \u4E2A\u5B57\u7B26" });
  }
  if (finalAuthorEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(finalAuthorEmail) || finalAuthorEmail.length > 100) {
      throw createError({ statusCode: 400, statusMessage: "\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E" });
    }
  }
  let finalAuthorUrl = null;
  if (rawAuthorUrl) {
    let cleanUrl = rawAuthorUrl;
    if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
      cleanUrl = `https://${cleanUrl}`;
    }
    try {
      const parsed = new URL(cleanUrl);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") {
        finalAuthorUrl = parsed.toString().slice(0, 200);
      }
    } catch {
    }
  } else if (currentUserId) {
    try {
      const githubOAuth = await db.select({ providerAccountId: oauthAccounts.providerAccountId }).from(oauthAccounts).where(
        and(
          eq(oauthAccounts.userId, currentUserId),
          eq(oauthAccounts.provider, "github")
        )
      ).limit(1);
      if (githubOAuth.length > 0 && (user == null ? void 0 : user.nickname)) {
        finalAuthorUrl = `https://github.com/${user.nickname}`;
      }
    } catch {
    }
  }
  const safeContent = sanitizeComment(rawContent);
  const userAgent = getRequestHeader(event, "user-agent") || "";
  let initialStatus = "approved";
  try {
    const modRows = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, "comment_require_moderation")).limit(1);
    const requireMod = ((_b = modRows[0]) == null ? void 0 : _b.value) === "true" || ((_c = modRows[0]) == null ? void 0 : _c.value) === "1";
    if (requireMod) {
      const exemptRows = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, "comment_login_exempt_moderation")).limit(1);
      const loginExempt = !exemptRows[0] || exemptRows[0].value === "true" || exemptRows[0].value === "1";
      if (currentUserId && loginExempt) {
        initialStatus = "approved";
      } else {
        initialStatus = "pending";
      }
    }
  } catch {
    initialStatus = "approved";
  }
  const now = /* @__PURE__ */ new Date();
  const insertValues = {
    targetType,
    targetId,
    userId: currentUserId,
    authorName: finalAuthorName,
    authorEmail: finalAuthorEmail || null,
    authorUrl: finalAuthorUrl,
    content: safeContent,
    parentId,
    status: initialStatus,
    ip,
    userAgent,
    createdAt: now,
    updatedAt: now
  };
  const [inserted] = await db.insert(comments).values(insertValues).returning({ id: comments.id });
  const newId = inserted == null ? void 0 : inserted.id;
  const avatarUrl = getCommentAvatarUrl(finalAuthorEmail, finalUserAvatar);
  return {
    success: true,
    data: {
      id: newId,
      targetType,
      targetId,
      userId: currentUserId,
      authorName: finalAuthorName,
      authorUrl: finalAuthorUrl,
      avatarUrl,
      content: safeContent,
      parentId,
      status: initialStatus,
      createdAt: now,
      replies: []
    }
  };
});

export { index_post as default };
