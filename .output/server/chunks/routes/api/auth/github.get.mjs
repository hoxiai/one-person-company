import { cN as eventHandler, g as getQuery, e as createError, cO as logger, cP as sendLocalizedRedirect, cj as getRequestURL, cQ as getCookie, cR as deleteCookie, cS as setCookie, cT as sendRedirect, cU as withQuery, cV as handleOAuthLogin, cW as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { randomBytes } from 'node:crypto';
import 'drizzle-orm';
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
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const AUTHORIZATION_URL = "https://github.com/login/oauth/authorize";
const TOKEN_URL = "https://github.com/login/oauth/access_token";
const STATE_COOKIE = "nuxt-auth-state";
function base64url(buf) {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function resolveGitHubCredentials(event) {
  var _a, _b, _c, _d, _e;
  const override = (_a = event.context) == null ? void 0 : _a.oauthCredentials;
  if (override && override.provider === "github" && override.clientId && override.clientSecret) {
    return { clientId: override.clientId, clientSecret: override.clientSecret };
  }
  const cfg = useRuntimeConfig(event);
  return {
    clientId: String(((_c = (_b = cfg == null ? void 0 : cfg.oauth) == null ? void 0 : _b.github) == null ? void 0 : _c.clientId) || ""),
    clientSecret: String(((_e = (_d = cfg == null ? void 0 : cfg.oauth) == null ? void 0 : _d.github) == null ? void 0 : _e.clientSecret) || "")
  };
}
const github_get = eventHandler(async (event) => {
  const query = getQuery(event);
  const { clientId, clientSecret } = resolveGitHubCredentials(event);
  if (query.error) {
    const error = createError({
      statusCode: 401,
      message: `GitHub login failed: ${query.error || "Unknown error"}`,
      data: query
    });
    await logger.error(`GitHub OAuth error: ${error.message}`, { source: "github_oauth", details: { error } });
    return sendLocalizedRedirect(event, "/auth/login?error=github_auth_failed");
  }
  if (!clientId || !clientSecret) {
    throw createError({
      statusCode: 500,
      message: "Missing NUXT_OAUTH_GITHUB_CLIENT_ID or NUXT_OAUTH_GITHUB_CLIENT_SECRET env variables."
    });
  }
  const redirectURL = `${getRequestURL(event).protocol}//${getRequestURL(event).host}${getRequestURL(event).pathname}`;
  let state;
  if (query.state) {
    state = String(getCookie(event, STATE_COOKIE) || "");
    deleteCookie(event, STATE_COOKIE, { path: "/" });
  } else {
    state = base64url(randomBytes(8));
    setCookie(event, STATE_COOKIE, state, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/"
    });
  }
  if (!query.code) {
    return sendRedirect(event, withQuery(AUTHORIZATION_URL, {
      client_id: clientId,
      redirect_uri: redirectURL,
      scope: "user:email",
      state
    }));
  }
  if (query.state !== state) {
    const error = createError({ statusCode: 401, message: "GitHub login failed: Invalid state" });
    await logger.error(`GitHub OAuth error: ${error.message}`, { source: "github_oauth", details: { error } });
    return sendLocalizedRedirect(event, "/auth/login?error=github_auth_failed");
  }
  const tokens = await $fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectURL,
      code: String(query.code)
    }).toString()
  }).catch((e) => (e == null ? void 0 : e.status) === 401 ? e.data : Promise.reject(e));
  if (tokens == null ? void 0 : tokens.error) {
    const error = createError({ statusCode: 401, message: `GitHub login failed: ${tokens.error_description || tokens.error}`, data: tokens });
    await logger.error(`GitHub OAuth error: ${error.message}`, { source: "github_oauth", details: { error } });
    return sendLocalizedRedirect(event, "/auth/login?error=github_auth_failed");
  }
  const user = await $fetch("https://api.github.com/user", {
    headers: { "User-Agent": "apay-oauth", Authorization: `token ${tokens.access_token}` }
  });
  let email = user.email || "";
  let emailVerified = false;
  try {
    const emails = await $fetch(
      "https://api.github.com/user/emails",
      { headers: { "User-Agent": "apay-oauth", Authorization: `token ${tokens.access_token}` } }
    );
    const primary = emails.find((e) => e.primary) || emails.find((e) => e.verified);
    if (primary) {
      email = primary.email;
      emailVerified = primary.verified === true;
    } else if (email) {
      emailVerified = emails.some((e) => e.email === email && e.verified);
    }
  } catch {
    emailVerified = false;
  }
  return handleOAuthLogin(event, "github", {
    id: String(user.id),
    email,
    name: user.name || user.login,
    avatar: user.avatar_url || "",
    emailVerified
  });
});

export { github_get as default };
//# sourceMappingURL=github.get.mjs.map
