import { d as defineEventHandler, N as resolveClientIp, P as checkIpRateLimit, e as createError, r as readBody, bn as verifyCaptchaChallengeToken, bo as issueCaptchaTicket } from '../../../../nitro/nitro.mjs';
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

const TOLERANCE_PX = 5;
const check_post = defineEventHandler(async (event) => {
  const ip = resolveClientIp(event);
  const rl = checkIpRateLimit(`captcha:check:${ip}`, { max: 30, windowMs: 6e4 });
  if (!rl.ok) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too Many Requests",
      message: "\u9A8C\u8BC1\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"
    });
  }
  const body = await readBody(event);
  const { token, moveX } = body || {};
  if (!token || typeof moveX !== "number") {
    throw createError({
      statusCode: 400,
      message: "\u7F3A\u5C11\u9A8C\u8BC1\u53C2\u6570"
    });
  }
  const challenge = verifyCaptchaChallengeToken(token);
  if (!challenge) {
    throw createError({
      statusCode: 400,
      message: "\u9A8C\u8BC1\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5"
    });
  }
  const diff = Math.abs(moveX - challenge.x);
  if (diff > TOLERANCE_PX) {
    throw createError({
      statusCode: 400,
      message: "\u6ED1\u5757\u672A\u5BF9\u9F50\uFF0C\u8BF7\u91CD\u8BD5"
    });
  }
  const ticket = issueCaptchaTicket(ip);
  return {
    success: true,
    ticket
  };
});

export { check_post as default };
