import { d as defineEventHandler, aP as extensionManifests, aQ as readExtensionMigrationStatus, aR as readEnabledExtensionIds, e as createError, r as readBody, aS as migrateExtensionDatabase, s as setAuditMeta, aT as normalizeEnabledExtensionIds, b as db, aG as settings, aU as ENABLED_EXTENSIONS_SETTING_KEY } from '../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const extensions = defineEventHandler(async (event) => {
  if (event.method === "GET") {
    const migrationStatuses2 = await Promise.all(extensionManifests.map(async (manifest) => [
      manifest.id,
      await readExtensionMigrationStatus(manifest.id)
    ]));
    return {
      extensions: extensionManifests,
      enabled: await readEnabledExtensionIds(),
      migrationStatuses: Object.fromEntries(migrationStatuses2)
    };
  }
  if (event.method !== "POST") {
    throw createError({ statusCode: 405, message: "Method not allowed" });
  }
  const body = await readBody(event);
  if ((body == null ? void 0 : body.action) === "migrate") {
    if (typeof body.extension !== "string") {
      throw createError({ statusCode: 400, message: "extension is required" });
    }
    try {
      const result = await migrateExtensionDatabase(body.extension);
      setAuditMeta(event, {
        action: "update",
        resource: "extensions",
        resourceId: body.extension,
        summary: `Applied ${result.applied.length} extension migration(s)`,
        details: { extension: body.extension, applied: result.applied, dialect: result.status.dialect }
      });
      return { success: true, ...result };
    } catch (error) {
      setAuditMeta(event, {
        action: "update",
        resource: "extensions",
        resourceId: body.extension,
        summary: "Extension migration failed",
        details: { extension: body.extension }
      });
      throw error;
    }
  }
  if (!Array.isArray(body == null ? void 0 : body.enabled)) {
    throw createError({ statusCode: 400, message: "enabled must be an array" });
  }
  const unknown = body.enabled.filter(
    (value2) => typeof value2 !== "string" || !extensionManifests.some((manifest) => manifest.id === value2)
  );
  if (unknown.length) {
    throw createError({ statusCode: 400, message: "enabled contains an unknown extension" });
  }
  const before = await readEnabledExtensionIds();
  const enabled = normalizeEnabledExtensionIds(body.enabled);
  const migrationStatuses = await Promise.all(enabled.map(async (extension) => ({
    extension,
    status: await readExtensionMigrationStatus(extension)
  })));
  const unavailable = migrationStatuses.filter((item) => item.status.state !== "ready");
  if (unavailable.length) {
    throw createError({
      statusCode: 409,
      message: `Run migrations before enabling: ${unavailable.map((item) => item.extension).join(", ")}`
    });
  }
  const value = JSON.stringify(enabled);
  const existing = await db.select({ key: settings.key }).from(settings).where(eq(settings.key, ENABLED_EXTENSIONS_SETTING_KEY)).limit(1);
  if (existing.length) {
    await db.update(settings).set({ value, updatedAt: /* @__PURE__ */ new Date() }).where(eq(settings.key, ENABLED_EXTENSIONS_SETTING_KEY));
  } else {
    await db.insert(settings).values({
      key: ENABLED_EXTENSIONS_SETTING_KEY,
      value,
      description: "Enabled built-in APay extensions"
    });
  }
  setAuditMeta(event, {
    action: "update",
    resource: "extensions",
    summary: `Enabled ${enabled.length} extension(s)`,
    details: { before, after: enabled }
  });
  return { success: true, enabled };
});

export { extensions as default };
