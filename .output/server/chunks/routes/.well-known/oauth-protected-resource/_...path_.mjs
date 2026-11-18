import { d as defineEventHandler, eA as applyMcpPublicCors, eB as resolveMcpServerOrigin, g9 as MCP_SUPPORTED_SCOPES } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

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
