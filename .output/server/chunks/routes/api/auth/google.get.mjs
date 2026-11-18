import { dT as eventHandler, g as getQuery, e as createError, E as getRequestURL, dY as beginAppOAuth, dZ as setCookie, d_ as sendRedirect, d$ as withQuery, dW as getCookie, dX as deleteCookie, e0 as validateAppOAuth, dV as sendLocalizedRedirect, e1 as appAuthorizationFailurePath, dU as logger, e2 as handleOAuthLogin, e3 as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { randomBytes } from 'node:crypto';
import 'drizzle-orm';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const USER_URL = "https://www.googleapis.com/oauth2/v3/userinfo";
const STATE_COOKIE = "nuxt-auth-google-state";
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
  if (!query.code && !query.error) {
    const state = query.app_authorization ? await beginAppOAuth(event, String(query.app_authorization)) : randomBytes(32).toString("hex");
    setCookie(event, STATE_COOKIE, state, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 600,
      path: "/"
    });
    return sendRedirect(event, withQuery(AUTHORIZATION_URL, {
      response_type: "code",
      client_id: clientId,
      redirect_uri: redirectURL,
      scope: "email profile",
      state
    }));
  }
  const expectedState = getCookie(event, STATE_COOKIE);
  deleteCookie(event, STATE_COOKIE, { path: "/" });
  if (!expectedState || expectedState !== query.state) {
    throw createError({ statusCode: 401, message: "Google login failed: Invalid state" });
  }
  await validateAppOAuth(event, String(query.state || ""));
  if (query.error) return sendLocalizedRedirect(event, await appAuthorizationFailurePath(event, "google_auth_failed"));
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
    return sendLocalizedRedirect(event, await appAuthorizationFailurePath(event, "google_auth_failed"));
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
