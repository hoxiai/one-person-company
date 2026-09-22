import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, b as db, u as users, j as hashPassword, a6 as emitEvent } from '../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const findOrCreate_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event);
  const { email, password, nickname, createApiToken = false } = body;
  if (!email) {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A" : "Email is required"
    });
  }
  if (createApiToken) {
    throw createError({
      statusCode: 403,
      message: locale === "zh" ? "\u6B64\u8EAB\u4EFD\u89E3\u6790\u63A5\u53E3\u4E0D\u80FD\u521B\u5EFA API Token" : "This identity endpoint cannot create API tokens"
    });
  }
  let user;
  let created = false;
  const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (existingUsers.length > 0) {
    user = existingUsers[0];
    created = false;
  } else {
    let passwordHash = null;
    if (password) {
      passwordHash = await hashPassword(password);
    }
    try {
      const newUser = await db.insert(users).values({
        email,
        passwordHash,
        nickname: nickname || email.split("@")[0]
      }).returning();
      user = newUser[0];
      created = true;
    } catch (err) {
      const racedUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
      if (racedUsers.length === 0) {
        throw err;
      }
      console.warn(`[find-or-create] concurrent insert for ${email}, resolved to existing user #${racedUsers[0].id}`);
      user = racedUsers[0];
      created = false;
    }
  }
  if (created && user) {
    try {
      await emitEvent("user.registered", {
        id: user.id,
        userId: user.id,
        email: user.email,
        nickname: user.nickname,
        source: "find_or_create"
      });
    } catch (eventErr) {
      console.error(`[find-or-create] user.registered event failed for #${user.id}:`, eventErr);
    }
  }
  return {
    success: true,
    created,
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      avatarUrl: user.avatarUrl
    },
    apiToken: null
  };
});

export { findOrCreate_post as default };
