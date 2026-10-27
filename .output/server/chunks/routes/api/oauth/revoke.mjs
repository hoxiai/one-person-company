import { d as defineEventHandler, df as applyMcpPublicCors, e as createError, r as readBody, dB as isMcpAccessTokenValue, dC as hashMcpAccessToken, b as db, cl as userTokens, dz as hashMcpOAuthSecret } from '../../../nitro/nitro.mjs';
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

const revoke = defineEventHandler(async (event) => {
  if (applyMcpPublicCors(event)) return null;
  if (event.method !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }
  const body = await readBody(event).catch(() => ({}));
  const rawToken = String((body == null ? void 0 : body.token) || "").trim();
  if (!rawToken) {
    return { revoked: true };
  }
  if (isMcpAccessTokenValue(rawToken)) {
    const tokenHash = hashMcpAccessToken(rawToken);
    await db.update(userTokens).set({ revoked: true }).where(eq(userTokens.token, tokenHash));
    return { revoked: true };
  }
  if (rawToken.startsWith("mcp_rt_")) {
    const refreshHash = hashMcpOAuthSecret(rawToken);
    await db.delete(userTokens).where(eq(userTokens.token, refreshHash));
    return { revoked: true };
  }
  return { revoked: true };
});

export { revoke as default };
//# sourceMappingURL=revoke.mjs.map
