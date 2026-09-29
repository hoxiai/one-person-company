import { dr as hoxiGateways, ds as hoxiPlans, dt as hoxiModels, du as normalizeIsoDate } from '../nitro/nitro.mjs';
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
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const getSitemapEntries = async (source) => {
  if (source === "hoxi-gateways") {
    return hoxiGateways.filter((gw) => !gw.hidden).map((gw) => ({
      path: `/gateways/${gw.id}`
    }));
  }
  if (source === "hoxi-coding-plans") {
    return hoxiPlans.filter((p) => !p.hidden).map((p) => ({
      path: `/coding-plans/${p.slug}`
    }));
  }
  return hoxiModels.map((model) => ({
    path: `/models/${model.slug}`,
    lastmod: normalizeIsoDate(model.updatedAt)
  }));
};

export { getSitemapEntries };
