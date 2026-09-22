import { bu as defineOAuthGitHubEventHandler, bv as handleOAuthLogin, bw as logger, bx as sendLocalizedRedirect } from '../../../nitro/nitro.mjs';
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

const github_get = defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true
  },
  async onSuccess(event, { user, tokens }) {
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
      // GitHub returns id as a number, we need it as a string
      email,
      name: user.name || user.login,
      // Fallback to login name if real name is not set
      avatar: user.avatar_url || "",
      emailVerified
    });
  },
  async onError(event, error) {
    await logger.error(`GitHub OAuth error: ${error.message}`, {
      source: "github_oauth",
      details: { error }
    });
    return sendLocalizedRedirect(event, "/auth/login?error=github_auth_failed");
  }
});

export { github_get as default };
