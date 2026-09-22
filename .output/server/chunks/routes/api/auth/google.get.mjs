import { by as defineOAuthGoogleEventHandler, bv as handleOAuthLogin, bw as logger, bx as sendLocalizedRedirect } from '../../../nitro/nitro.mjs';
import 'drizzle-orm';
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

const google_get = defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    return handleOAuthLogin(event, "google", {
      id: user.sub,
      // Google's unique ID for the user
      email: user.email || "",
      name: user.name || "",
      avatar: user.picture || "",
      // Google's userinfo endpoint returns this per the OIDC standard claim set.
      emailVerified: user.email_verified === true || user.email_verified === "true"
    });
  },
  // Optional: Handle errors
  async onError(event, error) {
    await logger.error(`Google OAuth error: ${error.message}`, {
      source: "google_oauth",
      details: { error }
    });
    return sendLocalizedRedirect(event, "/auth/login?error=google_auth_failed");
  }
});

export { google_get as default };
