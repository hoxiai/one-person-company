import { d as defineEventHandler, f as getRouterParam, r as readBody, bt as updatePromoAgentRelation } from '../../../../../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

const _id__put = defineEventHandler(async (event) => {
  const relationId = Number(getRouterParam(event, "id") || 0);
  const body = await readBody(event);
  return updatePromoAgentRelation({
    relationId,
    parentAgentUserId: Number((body == null ? void 0 : body.parentAgentUserId) || 0)
  });
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
