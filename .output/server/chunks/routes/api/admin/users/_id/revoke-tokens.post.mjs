import { d as defineEventHandler, c as getRequestLocale, f as getRouterParam, e as createError, b as db, u as users, cl as userTokens, cr as MCP_OAUTH_CODE_TOKEN_NAME, cs as MCP_OAUTH_REFRESH_TOKEN_NAME } from '../../../../../nitro/nitro.mjs';
import { eq, and, inArray } from 'drizzle-orm';
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

const revokeTokens_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const id = getRouterParam(event, "id");
  const userId = Number(id);
  if (!id || !Number.isFinite(userId) || userId <= 0) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u65E0\u6548\u7684\u7528\u6237 ID" : "Invalid user ID"
    });
  }
  const [user] = await db.select({ id: users.id, email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
  if (!user) {
    throw createError({
      statusCode: 404,
      message: locale === "zh" ? "\u7528\u6237\u4E0D\u5B58\u5728" : "User not found"
    });
  }
  await db.delete(userTokens).where(
    and(
      eq(userTokens.userId, userId),
      inArray(userTokens.name, [MCP_OAUTH_CODE_TOKEN_NAME, MCP_OAUTH_REFRESH_TOKEN_NAME])
    )
  );
  await db.update(userTokens).set({ revoked: true }).where(eq(userTokens.userId, userId));
  return {
    success: true,
    userId,
    message: locale === "zh" ? "\u5DF2\u540A\u9500\u8BE5\u7528\u6237\u7684\u6240\u6709 API / MCP \u4EE4\u724C\u5E76\u6E05\u9664\u5173\u8054\u5237\u65B0\u51ED\u636E" : "All API / MCP tokens and associated refresh credentials for this user have been revoked"
  };
});

export { revokeTokens_post as default };
//# sourceMappingURL=revoke-tokens.post.mjs.map
