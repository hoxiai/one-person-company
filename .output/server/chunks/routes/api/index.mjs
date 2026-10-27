import { d as defineEventHandler, df as applyMcpPublicCors, dg as resolveMcpServerOrigin, bs as getUserSession, dh as setResponseStatus, di as setResponseHeader, d6 as getRequestHeader, e as createError, r as readBody, dj as getActiveThemeName, dk as dispatchMcpJsonRpcRequest, dl as buildMcpWwwAuthenticateHeader } from '../../nitro/nitro.mjs';
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

const index = defineEventHandler(async (event) => {
  var _a, _b, _c;
  if (applyMcpPublicCors(event)) return null;
  const origin = resolveMcpServerOrigin(event);
  const session = await getUserSession(event).catch(() => null);
  if (!((_a = session == null ? void 0 : session.user) == null ? void 0 : _a.id) || !event.context.authenticatedFromToken) {
    setResponseStatus(event, 401);
    setResponseHeader(event, "WWW-Authenticate", buildMcpWwwAuthenticateHeader(origin));
    return {
      error: "unauthorized",
      error_description: "Bearer token required. Discover OAuth 2.1 endpoints via /.well-known/oauth-protected-resource"
    };
  }
  if (event.method === "DELETE") {
    setResponseStatus(event, 204);
    return null;
  }
  if (event.method === "GET") {
    const accept = (getRequestHeader(event, "accept") || "").toLowerCase();
    if (accept.includes("text/event-stream") && !accept.includes("text/html")) {
      setResponseStatus(event, 405);
      setResponseHeader(event, "Allow", "POST, DELETE");
      return {
        error: "method_not_allowed",
        error_description: "Server does not offer standalone GET SSE streams; send JSON-RPC requests via POST /api/mcp."
      };
    }
    return {
      name: "APay Core MCP Server",
      version: "1.0.0",
      protocol: "streamable-http",
      user: {
        id: session.user.id,
        email: session.user.email
      },
      scopes: (_b = event.context.tokenScopes) != null ? _b : ["*"]
    };
  }
  if (event.method !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }
  const body = await readBody(event).catch(() => null);
  if (!body || typeof body !== "object") {
    setResponseStatus(event, 400);
    return {
      jsonrpc: "2.0",
      id: null,
      error: { code: -32700, message: "Parse error: invalid JSON body" }
    };
  }
  const activeTheme = await getActiveThemeName().catch(() => "");
  const ctx = {
    event,
    userId: Number(session.user.id),
    userEmail: String(session.user.email || ""),
    scopes: (_c = event.context.tokenScopes) != null ? _c : null,
    activeTheme
  };
  if (Array.isArray(body)) {
    const responses = [];
    for (const item of body) {
      const res = await dispatchMcpJsonRpcRequest(item, ctx);
      if (res) responses.push(res);
    }
    if (responses.length === 0) {
      setResponseStatus(event, 202);
      return null;
    }
    return responses;
  }
  const response = await dispatchMcpJsonRpcRequest(body, ctx);
  if (!response) {
    setResponseStatus(event, 202);
    return null;
  }
  return response;
});

export { index as default };
//# sourceMappingURL=index.mjs.map
