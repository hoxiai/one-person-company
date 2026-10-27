import { d as defineEventHandler, df as applyMcpPublicCors, dg as resolveMcpServerOrigin, eJ as MCP_SUPPORTED_SCOPES } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const ____path_ = defineEventHandler((event) => {
  if (applyMcpPublicCors(event)) return null;
  const origin = resolveMcpServerOrigin(event);
  return {
    resource: `${origin}/api/mcp`,
    authorization_servers: [origin],
    scopes_supported: MCP_SUPPORTED_SCOPES,
    bearer_methods_supported: ["header"],
    resource_documentation: `${origin}/docs`
  };
});

export { ____path_ as default };
//# sourceMappingURL=_...path_.mjs.map
