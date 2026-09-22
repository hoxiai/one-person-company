import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, r as readBody, b as db, bg as userTokens, ct as apiTokenScope, cu as API_TOKEN_PREFIX } from '../../../nitro/nitro.mjs';
import crypto from 'crypto';
import { z } from 'zod';
import { count, and, eq } from 'drizzle-orm';
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
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const bodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  // Preset expiry windows only — an arbitrary client-supplied date would let
  // a caller mint a token that outlives any reasonable review cadence.
  expiresInDays: z.union([z.literal(30), z.literal(90), z.literal(365), z.null()]).optional()
});
const MAX_ACTIVE_TOKENS = 20;
const index_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const session = await requireUserSession(event);
  const userId = session.user.id;
  if (event.context.authenticatedFromToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u8BF7\u4F7F\u7528\u767B\u5F55\u4F1A\u8BDD\u7BA1\u7406 API Token\uFF0C\u4E0D\u80FD\u7528 Token \u672C\u8EAB\u64CD\u4F5C" : "Manage API tokens from a logged-in session, not via another token"
    });
  }
  const parsed = bodySchema.safeParse(await readBody(event));
  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u8BF7\u6C42\u53C2\u6570\u65E0\u6548" : "Invalid request"
    });
  }
  const { name, expiresInDays } = parsed.data;
  const [{ value: activeCount }] = await db.select({ value: count() }).from(userTokens).where(and(apiTokenScope(userId), eq(userTokens.revoked, false)));
  if (activeCount >= MAX_ACTIVE_TOKENS) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? `\u6700\u591A\u53EA\u80FD\u521B\u5EFA ${MAX_ACTIVE_TOKENS} \u4E2A\u6709\u6548 Token\uFF0C\u8BF7\u5148\u540A\u9500\u4E00\u4E9B` : `You can have at most ${MAX_ACTIVE_TOKENS} active tokens \u2014 revoke one first`
    });
  }
  const rawToken = `${API_TOKEN_PREFIX}${crypto.randomBytes(32).toString("base64url")}`;
  const expiresAt = expiresInDays ? new Date(Date.now() + expiresInDays * 86400 * 1e3) : null;
  const inserted = await db.insert(userTokens).values({
    userId,
    token: rawToken,
    name,
    expiresAt
  }).returning();
  return {
    // The raw token is only ever returned here, at creation — it cannot be
    // retrieved again afterwards (list/GET never selects userTokens.token).
    token: rawToken,
    data: {
      id: inserted[0].id,
      name: inserted[0].name,
      expiresAt: inserted[0].expiresAt,
      createdAt: inserted[0].createdAt
    }
  };
});

export { index_post as default };
