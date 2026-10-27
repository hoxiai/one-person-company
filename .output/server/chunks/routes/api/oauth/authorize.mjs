import { d as defineEventHandler, g as getQuery, ce as getRequestURL, ds as sendRedirect, dt as normalizeMcpScopes, e as createError, du as resolveAndValidateMcpClient, dv as isValidPkceCodeChallenge, bs as getUserSession, dw as MCP_DEFAULT_SCOPES, dx as MCP_SCOPE_DEFINITIONS, cT as requireUserSession, r as readBody, b as db, cl as userTokens, cr as MCP_OAUTH_CODE_TOKEN_NAME, dy as createMcpAuthorizationCodeEnvelope, dz as hashMcpOAuthSecret } from '../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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

const authorize = defineEventHandler(async (event) => {
  if (event.method === "GET") {
    const query = getQuery(event);
    const mode = String(query.mode || "").trim();
    if (mode !== "inspect") {
      const url = getRequestURL(event);
      return sendRedirect(event, `/user/mcp-authorize${url.search || ""}`, 302);
    }
    const responseType = String(query.response_type || "code").trim();
    const clientId = String(query.client_id || "").trim();
    const clientName = String(query.client_name || "").trim();
    const redirectUri = String(query.redirect_uri || "").trim();
    const codeChallenge = String(query.code_challenge || "").trim();
    const codeChallengeMethod = String(query.code_challenge_method || "S256").trim().toUpperCase();
    const state = String(query.state || "").trim();
    const resource = String(query.resource || "").trim();
    const requestedScopes = normalizeMcpScopes(query.scope);
    if (responseType !== "code") {
      throw createError({
        statusCode: 400,
        message: 'Unsupported response_type: only "code" is supported'
      });
    }
    const clientCheck = resolveAndValidateMcpClient(clientId, redirectUri, clientName);
    if (!clientCheck.ok) {
      throw createError({
        statusCode: 400,
        message: `Invalid client or redirect_uri (${clientCheck.reason})`
      });
    }
    if (codeChallengeMethod !== "S256" || !isValidPkceCodeChallenge(codeChallenge)) {
      throw createError({
        statusCode: 400,
        message: "PKCE S256 code_challenge is required by MCP OAuth 2.1"
      });
    }
    const session = await getUserSession(event).catch(() => null);
    const effectiveScopes = requestedScopes.length > 0 ? requestedScopes : [...MCP_DEFAULT_SCOPES];
    return {
      client: clientCheck.client,
      state,
      resource: resource || null,
      requestedScopes: effectiveScopes,
      scopeDefinitions: MCP_SCOPE_DEFINITIONS,
      user: (session == null ? void 0 : session.user) ? {
        id: session.user.id,
        email: session.user.email,
        nickname: session.user.nickname
      } : null,
      isEmployeeDelegated: Boolean(session == null ? void 0 : session.employee)
    };
  }
  if (event.method === "POST") {
    const session = await requireUserSession(event);
    const userId = Number(session.user.id);
    if (event.context.authenticatedFromToken || session.employee) {
      throw createError({
        statusCode: 403,
        message: "Please use an owner web browser session to approve MCP authorization"
      });
    }
    const body = await readBody(event).catch(() => ({}));
    const decision = String((body == null ? void 0 : body.decision) || "approve").trim();
    const clientId = String((body == null ? void 0 : body.client_id) || "").trim();
    const clientName = String((body == null ? void 0 : body.client_name) || "").trim();
    const redirectUri = String((body == null ? void 0 : body.redirect_uri) || "").trim();
    const codeChallenge = String((body == null ? void 0 : body.code_challenge) || "").trim();
    const codeChallengeMethod = String((body == null ? void 0 : body.code_challenge_method) || "S256").trim().toUpperCase();
    const state = String((body == null ? void 0 : body.state) || "").trim();
    const resource = String((body == null ? void 0 : body.resource) || "").trim();
    const clientCheck = resolveAndValidateMcpClient(clientId, redirectUri, clientName);
    if (!clientCheck.ok) {
      throw createError({
        statusCode: 400,
        message: `Invalid client or redirect_uri (${clientCheck.reason})`
      });
    }
    const targetUrl = new URL(clientCheck.client.redirectUri);
    if (decision !== "approve") {
      targetUrl.searchParams.set("error", "access_denied");
      targetUrl.searchParams.set("error_description", "The user denied the authorization request");
      if (state) targetUrl.searchParams.set("state", state);
      return {
        approved: false,
        redirectTo: targetUrl.toString()
      };
    }
    if (codeChallengeMethod !== "S256" || !isValidPkceCodeChallenge(codeChallenge)) {
      throw createError({
        statusCode: 400,
        message: "PKCE S256 code_challenge is required"
      });
    }
    const scopes = normalizeMcpScopes(body == null ? void 0 : body.scopes);
    if (scopes.length === 0) {
      throw createError({
        statusCode: 400,
        message: "At least one scope must be granted"
      });
    }
    await db.delete(userTokens).where(
      and(
        eq(userTokens.userId, userId),
        eq(userTokens.name, MCP_OAUTH_CODE_TOKEN_NAME),
        eq(userTokens.clientId, clientCheck.client.clientId)
      )
    );
    const envelope = createMcpAuthorizationCodeEnvelope({
      userId,
      clientId: clientCheck.client.clientId,
      clientName: clientCheck.client.clientName,
      redirectUri: clientCheck.client.redirectUri,
      codeChallenge,
      ...resource ? { resource } : {}
    });
    await db.insert(userTokens).values({
      userId,
      token: envelope.codeHash,
      name: MCP_OAUTH_CODE_TOKEN_NAME,
      scopes,
      clientId: clientCheck.client.clientId,
      clientName: clientCheck.client.clientName,
      expiresAt: envelope.expiresAt
    });
    const isInPageRedirect = targetUrl.pathname.replace(/\/+$/, "").endsWith("/user/mcp-authorize");
    if (isInPageRedirect) {
      const pkceLookupHash = hashMcpOAuthSecret(`pkce:${clientCheck.client.clientId}:${codeChallenge}`);
      await db.insert(userTokens).values({
        userId,
        token: pkceLookupHash,
        name: MCP_OAUTH_CODE_TOKEN_NAME,
        scopes,
        clientId: clientCheck.client.clientId,
        clientName: clientCheck.client.clientName,
        expiresAt: envelope.expiresAt
      }).catch(() => {
      });
    }
    targetUrl.searchParams.set("code", envelope.code);
    if (state) targetUrl.searchParams.set("state", state);
    return {
      approved: true,
      inPageComplete: isInPageRedirect,
      code: envelope.code,
      redirectTo: targetUrl.toString()
    };
  }
  throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
});

export { authorize as default };
//# sourceMappingURL=authorize.mjs.map
