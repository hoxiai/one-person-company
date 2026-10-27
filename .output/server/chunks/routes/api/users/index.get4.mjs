import { d as defineEventHandler, cT as requireUserSession, b as db, cl as userTokens, eA as apiTokenScope, dx as MCP_SCOPE_DEFINITIONS } from '../../../nitro/nitro.mjs';
import { desc } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  const session = await requireUserSession(event);
  const userId = session.user.id;
  const rows = await db.select({
    id: userTokens.id,
    name: userTokens.name,
    scopes: userTokens.scopes,
    clientId: userTokens.clientId,
    clientName: userTokens.clientName,
    lastUsedAt: userTokens.lastUsedAt,
    expiresAt: userTokens.expiresAt,
    revoked: userTokens.revoked,
    createdAt: userTokens.createdAt
  }).from(userTokens).where(apiTokenScope(userId)).orderBy(desc(userTokens.createdAt));
  return {
    data: rows,
    supportedScopes: MCP_SCOPE_DEFINITIONS
  };
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
