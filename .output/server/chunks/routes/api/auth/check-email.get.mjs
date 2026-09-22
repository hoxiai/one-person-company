import { d as defineEventHandler, c as getRequestLocale, g as getQuery, e as createError, bh as validateEmail, b as db, u as users } from '../../../nitro/nitro.mjs';
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

const checkEmail_get = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const { email: rawEmail } = query;
  if (!rawEmail || typeof rawEmail !== "string") {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A" : "Email is required"
    });
  }
  const validation = validateEmail(rawEmail);
  if (!validation.valid) {
    return {
      success: false,
      valid: false,
      exists: false,
      message: locale === "zh" ? "\u90AE\u7BB1\u683C\u5F0F\u65E0\u6548" : "Invalid email format"
    };
  }
  const email = validation.normalizedEmail;
  const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return {
    success: true,
    valid: true,
    exists: existingUser.length > 0
  };
});

export { checkEmail_get as default };
