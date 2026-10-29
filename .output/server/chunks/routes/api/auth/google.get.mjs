import { cN as eventHandler, g as getQuery, e as createError, cj as getRequestURL, cT as sendRedirect, cU as withQuery, cO as logger, cP as sendLocalizedRedirect, cV as handleOAuthLogin, cW as useRuntimeConfig } from '../../../nitro/nitro.mjs';
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
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const USER_URL = "https://www.googleapis.com/oauth2/v3/userinfo";
function resolveGoogleCredentials(event) {
  var _a, _b, _c, _d, _e;
  const override = (_a = event.context) == null ? void 0 : _a.oauthCredentials;
  if (override && override.provider === "google" && override.clientId && override.clientSecret) {
    return { clientId: override.clientId, clientSecret: override.clientSecret };
  }
  const cfg = useRuntimeConfig(event);
  return {
    clientId: String(((_c = (_b = cfg == null ? void 0 : cfg.oauth) == null ? void 0 : _b.google) == null ? void 0 : _c.clientId) || ""),
    clientSecret: String(((_e = (_d = cfg == null ? void 0 : cfg.oauth) == null ? void 0 : _d.google) == null ? void 0 : _e.clientSecret) || "")
  };
}
const google_get = eventHandler(async (event) => {
  const query = getQuery(event);
  const { clientId, clientSecret } = resolveGoogleCredentials(event);
  if (!clientId || !clientSecret) {
    throw createError({
      statusCode: 500,
      message: "Missing NUXT_OAUTH_GOOGLE_CLIENT_ID or NUXT_OAUTH_GOOGLE_CLIENT_SECRET env variables."
    });
  }
  const redirectURL = `${getRequestURL(event).protocol}//${getRequestURL(event).host}${getRequestURL(event).pathname}`;
  if (!query.code) {
    return sendRedirect(event, withQuery(AUTHORIZATION_URL, {
      response_type: "code",
      client_id: clientId,
      redirect_uri: redirectURL,
      scope: "email profile",
      state: query.state || ""
    }));
  }
  const tokens = await $fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: String(query.code),
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectURL
    }).toString()
  }).catch((e) => (e == null ? void 0 : e.status) === 401 ? e.data : Promise.reject(e));
  if (tokens == null ? void 0 : tokens.error) {
    const error = createError({ statusCode: 401, message: `Google login failed: ${tokens.error_description || tokens.error}`, data: tokens });
    await logger.error(`Google OAuth error: ${error.message}`, { source: "google_oauth", details: { error } });
    return sendLocalizedRedirect(event, "/auth/login?error=google_auth_failed");
  }
  const user = await $fetch(USER_URL, {
    headers: { Authorization: `Bearer ${tokens.access_token}` }
  });
  return handleOAuthLogin(event, "google", {
    id: user.sub,
    email: user.email || "",
    name: user.name || "",
    avatar: user.picture || "",
    emailVerified: user.email_verified === true || user.email_verified === "true"
  });
});

export { google_get as default };
//# sourceMappingURL=google.get.mjs.map
