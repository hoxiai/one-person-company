import { d as defineEventHandler, c$ as getHeader, b as db, k as adminTokens, e as createError, d4 as parseCustomerPushDevice, r as readBody, d5 as pushHash, d6 as customerPushDevices, d7 as customerApnsConfigured } from '../../../../nitro/nitro.mjs';
import { eq, and } from 'drizzle-orm';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const pushDevice_post = defineEventHandler(async (event) => {
  var _a;
  const authorization = getHeader(event, "authorization") || "";
  const accessToken = authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : getHeader(event, "x-api-key") || "";
  const [owner] = await db.select().from(adminTokens).where(eq(adminTokens.token, accessToken)).limit(1);
  if (!owner || owner.revoked || owner.expiresAt && new Date(owner.expiresAt).getTime() <= Date.now() || Number((_a = event.context.admin) == null ? void 0 : _a.id) !== owner.adminId) throw createError({ statusCode: 401, statusMessage: "Valid administrator API token required" });
  let input;
  try {
    input = parseCustomerPushDevice(await readBody(event));
  } catch {
    throw createError({ statusCode: 400, statusMessage: "Invalid push subscription" });
  }
  const id = pushHash(`${owner.id}|${input.deviceId}|${input.serverId}`);
  const values = {
    id,
    adminTokenId: owner.id,
    token: input.token,
    environment: input.environment,
    serverId: input.serverId,
    revokeHash: pushHash(input.revokeToken),
    preferences: JSON.stringify(input.preferences),
    expiresAt: Date.now() + 30 * 864e5
  };
  const [existing] = await db.select({ id: customerPushDevices.id }).from(customerPushDevices).where(eq(customerPushDevices.id, id)).limit(1);
  if (existing) await db.update(customerPushDevices).set(values).where(and(eq(customerPushDevices.id, id), eq(customerPushDevices.adminTokenId, owner.id)));
  else {
    try {
      await db.insert(customerPushDevices).values(values);
    } catch (error) {
      const [concurrent] = await db.select({ id: customerPushDevices.id }).from(customerPushDevices).where(eq(customerPushDevices.id, id)).limit(1);
      if (!concurrent) throw error;
      await db.update(customerPushDevices).set(values).where(and(eq(customerPushDevices.id, id), eq(customerPushDevices.adminTokenId, owner.id)));
    }
  }
  return { code: 200, data: { registered: true, configured: customerApnsConfigured(), expiresAt: values.expiresAt } };
});

export { pushDevice_post as default };
//# sourceMappingURL=push-device.post.mjs.map
