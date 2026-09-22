import { d as defineEventHandler, b$ as getTopupRules } from '../../../nitro/nitro.mjs';
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

const options_get = defineEventHandler(async () => {
  const rules = await getTopupRules();
  return {
    code: 0,
    data: {
      enabled: rules.enabled,
      accountingCurrency: rules.accountingCurrency,
      currencies: Object.entries(rules.options).map(([currency, option]) => ({
        currency,
        min: option.min,
        max: option.max,
        presets: option.presets,
        rate: option.rate
      }))
    }
  };
});

export { options_get as default };
