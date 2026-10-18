import { d as defineEventHandler, b as db, aX as settings, r as readBody, s as setAuditMeta, ba as EMAIL_VERIFY_POLICY_KEY, bb as invalidateEmailVerifyPolicyCache } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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
import 'ioredis';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const index = defineEventHandler(async (event) => {
  var _a;
  if (event.method === "GET") {
    return await db.select().from(settings);
  }
  if (event.method === "POST") {
    const body = await readBody(event);
    const changes = {};
    for (const [key, value] of Object.entries(body)) {
      const existing = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
      if (existing.length) {
        await db.update(settings).set({ value: String(value) }).where(eq(settings.key, key));
      } else {
        await db.insert(settings).values({ key, value: String(value) });
      }
      const before = existing.length ? (_a = existing[0].value) != null ? _a : null : null;
      if (before !== String(value)) {
        changes[key] = { before, after: String(value) };
      }
    }
    if (EMAIL_VERIFY_POLICY_KEY in body) {
      invalidateEmailVerifyPolicyCache();
    }
    setAuditMeta(event, {
      action: "update",
      resource: "settings",
      summary: `Updated ${Object.keys(changes).length} setting(s)`,
      details: { changed: changes }
    });
    return { success: true };
  }
});

export { index as default };
//# sourceMappingURL=index5.mjs.map
