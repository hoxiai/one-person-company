import { fu as defineCachedEventHandler, fv as resolvePostRequestLocaleHint, b as db, bf as postCategories, fw as resolvePostLocaleContext, fx as localizePostCategory } from '../../nitro/nitro.mjs';
import { eq, asc } from 'drizzle-orm';
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

const index_get = defineCachedEventHandler(async (event) => {
  const rows = await db.select().from(postCategories).where(eq(postCategories.isActive, true)).orderBy(asc(postCategories.sort), asc(postCategories.id));
  const localeContext = await resolvePostLocaleContext(event);
  const locale = localeContext.isMultiLocaleEnabled ? localeContext.locale : localeContext.defaultLocale;
  return {
    data: rows.map((row) => ({
      ...localizePostCategory(row, locale),
      sort: row.sort
    }))
  };
}, {
  maxAge: 60,
  swr: true,
  name: "post-categories",
  varies: ["cookie", "accept-language", "referer", "x-apay-ssr-path", "host", "x-forwarded-host"],
  getKey: (event) => `post-categories-l-${resolvePostRequestLocaleHint(event)}`
});

export { index_get as default };
//# sourceMappingURL=index.get4.mjs.map
