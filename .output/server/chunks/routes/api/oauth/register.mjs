import { d as defineEventHandler, df as applyMcpPublicCors, e as createError, $ as resolveClientIp, a0 as checkIpRateLimit, r as readBody, dA as registerDynamicMcpClient, dh as setResponseStatus } from '../../../nitro/nitro.mjs';
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
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const register = defineEventHandler(async (event) => {
  if (applyMcpPublicCors(event)) return null;
  if (event.method !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }
  const ip = resolveClientIp(event);
  const rateLimit = checkIpRateLimit(`mcp-oauth-dcr:${ip}`, { max: 30, windowMs: 10 * 60 * 1e3 });
  if (!rateLimit.ok) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too Many Requests",
      data: { error: "slow_down", error_description: "Too many client registration requests" }
    });
  }
  const body = await readBody(event).catch(() => ({}));
  try {
    const registered = registerDynamicMcpClient({
      client_name: body == null ? void 0 : body.client_name,
      redirect_uris: body == null ? void 0 : body.redirect_uris,
      grant_types: body == null ? void 0 : body.grant_types,
      response_types: body == null ? void 0 : body.response_types,
      token_endpoint_auth_method: body == null ? void 0 : body.token_endpoint_auth_method,
      scope: body == null ? void 0 : body.scope
    });
    setResponseStatus(event, 201);
    return registered;
  } catch (err) {
    setResponseStatus(event, 400);
    return {
      error: "invalid_client_metadata",
      error_description: err instanceof Error ? err.message : "Invalid client metadata"
    };
  }
});

export { register as default };
//# sourceMappingURL=register.mjs.map
