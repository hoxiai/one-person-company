import { d as defineEventHandler, dF as requireUserSession, b as db, cY as userTokens, cZ as apiTokenScope, ef as MCP_SCOPE_DEFINITIONS } from '../../../nitro/nitro.mjs';
import { desc } from 'drizzle-orm';
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
