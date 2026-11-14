import { d as defineEventHandler, eW as getAIGatewayUrl } from '../../../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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

const gatewayUrl_get = defineEventHandler(async () => {
  const url = await getAIGatewayUrl();
  return { url };
});

export { gatewayUrl_get as default };
//# sourceMappingURL=gateway-url.get.mjs.map
