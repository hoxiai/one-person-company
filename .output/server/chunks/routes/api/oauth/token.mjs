import { d as defineEventHandler, df as applyMcpPublicCors, $ as resolveClientIp, a0 as checkIpRateLimit, r as readBody, dD as verifyMcpAuthorizationCodeEnvelope, dE as verifyPkceS256, b as db, cl as userTokens, cr as MCP_OAUTH_CODE_TOKEN_NAME, dF as isValidPkceCodeVerifier, dG as computePkceS256Challenge, dz as hashMcpOAuthSecret, u as users, dt as normalizeMcpScopes, dw as MCP_DEFAULT_SCOPES, dH as generateMcpAccessToken, dI as generateMcpRefreshToken, cs as MCP_OAUTH_REFRESH_TOKEN_NAME, dg as resolveMcpServerOrigin, dJ as setResponseHeaders, dK as MCP_ACCESS_TOKEN_TTL_SECONDS, dL as MCP_REFRESH_TOKEN_TTL_MS, dh as setResponseStatus } from '../../../nitro/nitro.mjs';
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

function oauthError(event, statusCode, error, description) {
  setResponseStatus(event, statusCode);
  setResponseHeaders(event, {
    "Cache-Control": "no-store",
    "Pragma": "no-cache"
  });
  return {
    error,
    error_description: description
  };
}
const token = defineEventHandler(async (event) => {
  if (applyMcpPublicCors(event)) return null;
  if (event.method !== "POST") {
    return oauthError(event, 405, "invalid_request", "Method must be POST");
  }
  const ip = resolveClientIp(event);
  const rateLimit = checkIpRateLimit(`mcp-oauth-token:${ip}`, { max: 120, windowMs: 10 * 60 * 1e3 });
  if (!rateLimit.ok) {
    return oauthError(event, 429, "slow_down", "Too many token requests, please retry later");
  }
  const body = await readBody(event).catch(() => ({}));
  const grantType = String((body == null ? void 0 : body.grant_type) || "").trim();
  if (grantType === "authorization_code") {
    const code = String((body == null ? void 0 : body.code) || "").trim();
    const codeVerifier = String((body == null ? void 0 : body.code_verifier) || "").trim();
    const redirectUri = String((body == null ? void 0 : body.redirect_uri) || "").trim();
    const clientId = String((body == null ? void 0 : body.client_id) || "").trim();
    if (!codeVerifier) {
      return oauthError(event, 400, "invalid_request", "Missing code_verifier");
    }
    let record;
    let resolvedClientId = clientId;
    let resolvedClientName = "MCP OAuth Client";
    if (code) {
      const verified = verifyMcpAuthorizationCodeEnvelope(code);
      if (!verified.ok) {
        return oauthError(event, 400, "invalid_grant", `Authorization code is invalid or expired (${verified.reason})`);
      }
      const { payload, codeHash } = verified;
      if (clientId && clientId !== payload.cid) {
        return oauthError(event, 400, "invalid_grant", "client_id does not match authorization code");
      }
      if (redirectUri && redirectUri !== payload.r) {
        return oauthError(event, 400, "invalid_grant", "redirect_uri does not match authorization code");
      }
      if (!verifyPkceS256(codeVerifier, payload.cc, payload.ccm)) {
        return oauthError(event, 400, "invalid_grant", "PKCE code_verifier verification failed");
      }
      const rows = await db.select().from(userTokens).where(and(eq(userTokens.token, codeHash), eq(userTokens.name, MCP_OAUTH_CODE_TOKEN_NAME))).limit(1);
      record = rows[0];
      if (!record) {
        return oauthError(event, 400, "invalid_grant", "Authorization code has already been used or does not exist");
      }
      await db.delete(userTokens).where(
        and(
          eq(userTokens.userId, record.userId),
          eq(userTokens.name, MCP_OAUTH_CODE_TOKEN_NAME),
          eq(userTokens.clientId, payload.cid)
        )
      );
      const isRevoked = record.revoked === true || record.revoked === 1;
      const isExpired = !record.expiresAt || new Date(record.expiresAt).getTime() <= Date.now();
      if (isRevoked || isExpired || Number(record.userId) !== payload.u) {
        return oauthError(event, 400, "invalid_grant", "Authorization code expired or revoked");
      }
      resolvedClientId = payload.cid;
      resolvedClientName = payload.cname;
    } else {
      if (!clientId || !isValidPkceCodeVerifier(codeVerifier)) {
        return oauthError(event, 400, "invalid_request", "Missing code, or invalid client_id / code_verifier");
      }
      const expectedChallenge = computePkceS256Challenge(codeVerifier);
      const pkceLookupHash = hashMcpOAuthSecret(`pkce:${clientId}:${expectedChallenge}`);
      const rows = await db.select().from(userTokens).where(and(eq(userTokens.token, pkceLookupHash), eq(userTokens.name, MCP_OAUTH_CODE_TOKEN_NAME))).limit(1);
      record = rows[0];
      if (!record) {
        return oauthError(event, 400, "authorization_pending", "Waiting for user to approve authorization in browser");
      }
      await db.delete(userTokens).where(
        and(
          eq(userTokens.userId, record.userId),
          eq(userTokens.name, MCP_OAUTH_CODE_TOKEN_NAME),
          eq(userTokens.clientId, clientId)
        )
      );
      const isRevoked = record.revoked === true || record.revoked === 1;
      const isExpired = !record.expiresAt || new Date(record.expiresAt).getTime() <= Date.now();
      if (isRevoked || isExpired) {
        return oauthError(event, 400, "invalid_grant", "Authorization code expired or revoked");
      }
      resolvedClientId = record.clientId || clientId;
      resolvedClientName = record.clientName || "Hoxi Work";
    }
    const userRows = await db.select().from(users).where(eq(users.id, record.userId)).limit(1);
    if (!userRows[0] || userRows[0].status === 0) {
      return oauthError(event, 400, "invalid_grant", "User account is unavailable");
    }
    const authUser = userRows[0];
    const grantedScopes = normalizeMcpScopes(record.scopes);
    const finalScopes = grantedScopes.length > 0 ? grantedScopes : [...MCP_DEFAULT_SCOPES];
    const accessToken = generateMcpAccessToken();
    const refreshToken = generateMcpRefreshToken();
    const now = Date.now();
    const accessExpiresAt = new Date(now + MCP_ACCESS_TOKEN_TTL_SECONDS * 1e3);
    const refreshExpiresAt = new Date(now + MCP_REFRESH_TOKEN_TTL_MS);
    const displayName = record.clientName ? `MCP: ${record.clientName}` : "MCP OAuth Client";
    await db.insert(userTokens).values({
      userId: record.userId,
      token: accessToken.tokenHash,
      name: displayName,
      scopes: finalScopes,
      clientId: resolvedClientId,
      clientName: resolvedClientName,
      expiresAt: accessExpiresAt
    });
    await db.insert(userTokens).values({
      userId: record.userId,
      token: refreshToken.tokenHash,
      name: MCP_OAUTH_REFRESH_TOKEN_NAME,
      scopes: finalScopes,
      clientId: resolvedClientId,
      clientName: resolvedClientName,
      expiresAt: refreshExpiresAt
    });
    const origin = resolveMcpServerOrigin(event);
    setResponseHeaders(event, {
      "Cache-Control": "no-store",
      "Pragma": "no-cache"
    });
    return {
      access_token: accessToken.rawToken,
      token_type: "Bearer",
      expires_in: MCP_ACCESS_TOKEN_TTL_SECONDS,
      refresh_token: refreshToken.rawToken,
      scope: finalScopes.join(" "),
      mcp_url: `${origin}/api/mcp`,
      user: {
        id: authUser.id,
        email: authUser.email,
        nickname: authUser.nickname
      }
    };
  }
  if (grantType === "refresh_token") {
    const rawRefreshToken = String((body == null ? void 0 : body.refresh_token) || "").trim();
    const clientId = String((body == null ? void 0 : body.client_id) || "").trim();
    if (!rawRefreshToken) {
      return oauthError(event, 400, "invalid_request", "Missing refresh_token");
    }
    const refreshHash = hashMcpOAuthSecret(rawRefreshToken);
    const rows = await db.select().from(userTokens).where(and(eq(userTokens.token, refreshHash), eq(userTokens.name, MCP_OAUTH_REFRESH_TOKEN_NAME))).limit(1);
    const record = rows[0];
    if (!record) {
      return oauthError(event, 400, "invalid_grant", "Invalid or expired refresh_token");
    }
    await db.delete(userTokens).where(eq(userTokens.id, record.id));
    const isRevoked = record.revoked === true || record.revoked === 1;
    const isExpired = !record.expiresAt || new Date(record.expiresAt).getTime() <= Date.now();
    if (isRevoked || isExpired) {
      return oauthError(event, 400, "invalid_grant", "Refresh token has expired or been revoked");
    }
    if (clientId && record.clientId && clientId !== record.clientId) {
      return oauthError(event, 400, "invalid_grant", "client_id mismatch");
    }
    const userRows = await db.select().from(users).where(eq(users.id, record.userId)).limit(1);
    if (!userRows[0] || userRows[0].status === 0) {
      return oauthError(event, 400, "invalid_grant", "User account is unavailable");
    }
    const originalScopes = normalizeMcpScopes(record.scopes);
    const requestedScopes = (body == null ? void 0 : body.scope) ? normalizeMcpScopes(body.scope) : originalScopes;
    const finalScopes = requestedScopes.filter((s) => originalScopes.includes(s));
    if (finalScopes.length === 0) {
      return oauthError(event, 400, "invalid_scope", "Requested scope exceeds original grant");
    }
    const newAccessToken = generateMcpAccessToken();
    const newRefreshToken = generateMcpRefreshToken();
    const now = Date.now();
    const accessExpiresAt = new Date(now + MCP_ACCESS_TOKEN_TTL_SECONDS * 1e3);
    const refreshExpiresAt = new Date(now + MCP_REFRESH_TOKEN_TTL_MS);
    const displayName = record.clientName ? `MCP: ${record.clientName}` : "MCP OAuth Client";
    await db.insert(userTokens).values({
      userId: record.userId,
      token: newAccessToken.tokenHash,
      name: displayName,
      scopes: finalScopes,
      clientId: record.clientId,
      clientName: record.clientName,
      expiresAt: accessExpiresAt
    });
    await db.insert(userTokens).values({
      userId: record.userId,
      token: newRefreshToken.tokenHash,
      name: MCP_OAUTH_REFRESH_TOKEN_NAME,
      scopes: finalScopes,
      clientId: record.clientId,
      clientName: record.clientName,
      expiresAt: refreshExpiresAt
    });
    setResponseHeaders(event, {
      "Cache-Control": "no-store",
      "Pragma": "no-cache"
    });
    return {
      access_token: newAccessToken.rawToken,
      token_type: "Bearer",
      expires_in: MCP_ACCESS_TOKEN_TTL_SECONDS,
      refresh_token: newRefreshToken.rawToken,
      scope: finalScopes.join(" ")
    };
  }
  return oauthError(event, 400, "unsupported_grant_type", "Supported grant_types: authorization_code, refresh_token");
});

export { token as default };
//# sourceMappingURL=token.mjs.map
