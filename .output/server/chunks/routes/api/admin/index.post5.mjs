import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, bh as validateEmail, b as db, u as users, j as hashPassword } from '../../../nitro/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    required: "\u90AE\u7BB1\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",
    invalidEmail: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
    emailExists: "\u90AE\u7BB1\u5DF2\u5B58\u5728",
    created: "\u7528\u6237\u521B\u5EFA\u6210\u529F",
    failed: "\u521B\u5EFA\u7528\u6237\u5931\u8D25"
  } : {
    required: "Email and password are required",
    invalidEmail: "Please enter a valid email address",
    emailExists: "Email already exists",
    created: "User created successfully",
    failed: "Failed to create user"
  };
  try {
    const body = await readBody(event);
    const { username, password } = body;
    const rawEmail = String(username || "").trim();
    if (!rawEmail || !password) {
      throw createError({
        statusCode: 400,
        message: messages.required
      });
    }
    const validation = validateEmail(rawEmail);
    if (!validation.valid) {
      throw createError({
        statusCode: 400,
        message: messages.invalidEmail
      });
    }
    const email = validation.normalizedEmail;
    const existingUser = await db.select().from(users).where(eq(users.email, email));
    if (existingUser.length > 0) {
      throw createError({
        statusCode: 400,
        message: messages.emailExists
      });
    }
    const passwordHash = await hashPassword(password);
    await db.insert(users).values({
      email,
      passwordHash,
      nickname: email.split("@")[0] || email
    });
    return { code: 0, message: messages.created };
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || messages.failed
    });
  }
});

export { index_post as default };
