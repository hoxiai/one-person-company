import { d as defineEventHandler, b8 as getUserSession } from '../../../nitro/nitro.mjs';
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

const sessionStatus_get = defineEventHandler(async (event) => {
  const session = await getUserSession(event).catch(() => null);
  if (session == null ? void 0 : session.sessionReplaced) {
    return { active: false, reason: session.sessionReplaced };
  }
  return { active: Boolean(session == null ? void 0 : session.user), reason: null };
});

export { sessionStatus_get as default };
//# sourceMappingURL=session-status.get.mjs.map
