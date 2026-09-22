import { d as defineEventHandler, aB as getPromoOverview, at as listPromoAgents, aC as listPromoAttributions, ay as listPromoCommissions } from '../../../../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
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
import 'zod';
import 'node:child_process';
import 'node:os';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const overview_get = defineEventHandler(async () => {
  const [overview, agents, attributions, commissions] = await Promise.all([
    getPromoOverview(),
    listPromoAgents(20),
    listPromoAttributions(20),
    listPromoCommissions(20)
  ]);
  return {
    overview,
    agents,
    attributions,
    commissions
  };
});

export { overview_get as default };
