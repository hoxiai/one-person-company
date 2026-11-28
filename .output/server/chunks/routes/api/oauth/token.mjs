import { d as defineEventHandler, eD as applyMcpPublicCors, an as resolveClientIp, ao as checkIpRateLimit, r as readBody, eZ as verifyMcpAuthorizationCodeEnvelope, e_ as verifyPkceS256, b as db, dk as userTokens, dv as MCP_OAUTH_CODE_TOKEN_NAME, e$ as isValidPkceCodeVerifier, f0 as computePkceS256Challenge, eV as hashMcpOAuthSecret, w as users, eP as normalizeMcpScopes, eS as MCP_DEFAULT_SCOPES, f1 as generateMcpAccessToken, f2 as generateMcpRefreshToken, dw as MCP_OAUTH_REFRESH_TOKEN_NAME, eE as resolveMcpServerOrigin, f3 as setResponseHeaders, f4 as MCP_ACCESS_TOKEN_TTL_SECONDS, f5 as MCP_REFRESH_TOKEN_TTL_MS, eF as setResponseStatus, eH as getActiveThemeName, f6 as themeEventLoaders } from '../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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

const RESERVED_OAUTH_TOKEN_FIELDS = /* @__PURE__ */ new Set([
  "access_token",
  "token_type",
  "expires_in",
  "refresh_token",
  "scope",
  "mcp_url",
  "user"
]);
async function loadThemeOAuthTokenEnrichment(params) {
  var _a;
  try {
    const activeTheme = (await getActiveThemeName().catch(() => "")).trim().toLowerCase();
    if (!activeTheme) return {};
    const loader = (_a = themeEventLoaders) == null ? void 0 : _a[activeTheme];
    if (typeof loader !== "function") return {};
    const mod = await loader();
    if (typeof (mod == null ? void 0 : mod.enrichOAuthTokenResponse) !== "function") return {};
    const extra = await Promise.race([
      Promise.resolve(mod.enrichOAuthTokenResponse(params)),
      new Promise((resolve) => setTimeout(() => resolve(null), 5e3))
    ]);
    if (!extra || typeof extra !== "object" || Array.isArray(extra)) return {};
    const safeExtra = {};
    for (const [key, value] of Object.entries(extra)) {
      if (!RESERVED_OAUTH_TOKEN_FIELDS.has(key) && value !== void 0) {
        safeExtra[key] = value;
      }
    }
    return safeExtra;
  } catch {
    return {};
  }
}
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
  var _a, _b, _c, _d, _e, _f, _g, _h;
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
      resolvedClientName = record.clientName || "MCP OAuth Client";
    }
    const userRows = await db.select().from(users).where(eq(users.id, record.userId)).limit(1);
    if (!userRows[0] || Number((_a = userRows[0].status) != null ? _a : 1) !== 1) {
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
    const themeExtra = await loadThemeOAuthTokenEnrichment({
      userId: Number(authUser.id),
      user: {
        id: Number(authUser.id),
        email: (_b = authUser.email) != null ? _b : null,
        nickname: (_c = authUser.nickname) != null ? _c : null,
        avatarUrl: (_d = authUser.avatarUrl) != null ? _d : null
      },
      origin,
      scopes: finalScopes
    });
    setResponseHeaders(event, {
      "Cache-Control": "no-store",
      "Pragma": "no-cache"
    });
    return {
      ...themeExtra,
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
    if (!userRows[0] || Number((_e = userRows[0].status) != null ? _e : 1) !== 1) {
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
    const refreshUser = userRows[0];
    const origin = resolveMcpServerOrigin(event);
    const themeExtra = await loadThemeOAuthTokenEnrichment({
      userId: Number(refreshUser.id),
      user: {
        id: Number(refreshUser.id),
        email: (_f = refreshUser.email) != null ? _f : null,
        nickname: (_g = refreshUser.nickname) != null ? _g : null,
        avatarUrl: (_h = refreshUser.avatarUrl) != null ? _h : null
      },
      origin,
      scopes: finalScopes
    });
    setResponseHeaders(event, {
      "Cache-Control": "no-store",
      "Pragma": "no-cache"
    });
    return {
      ...themeExtra,
      access_token: newAccessToken.rawToken,
      token_type: "Bearer",
      expires_in: MCP_ACCESS_TOKEN_TTL_SECONDS,
      refresh_token: newRefreshToken.rawToken,
      scope: finalScopes.join(" "),
      mcp_url: `${origin}/api/mcp`,
      user: {
        id: refreshUser.id,
        email: refreshUser.email,
        nickname: refreshUser.nickname
      }
    };
  }
  return oauthError(event, 400, "unsupported_grant_type", "Supported grant_types: authorization_code, refresh_token");
});

export { token as default };
//# sourceMappingURL=token.mjs.map
