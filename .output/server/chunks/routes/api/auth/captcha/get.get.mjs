import { d as defineEventHandler, N as resolveClientIp, P as checkIpRateLimit, e as createError, bp as createCaptchaChallengeToken, bq as generateCaptchaBackgroundWithSlot, br as generateCaptchaPiece, bs as PUZZLE_PATH, bt as CAPTCHA_BACKGROUNDS } from '../../../../nitro/nitro.mjs';
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

const get_get = defineEventHandler((event) => {
  const ip = resolveClientIp(event);
  const rl = checkIpRateLimit(`captcha:get:${ip}`, { max: 60, windowMs: 6e4 });
  if (!rl.ok) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too Many Requests",
      message: "\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"
    });
  }
  const targetX = Math.floor(Math.random() * (240 - 50 + 1)) + 50;
  const targetY = Math.floor(Math.random() * (85 - 20 + 1)) + 20;
  const bgIndex = Math.floor(Math.random() * CAPTCHA_BACKGROUNDS.length);
  const nonce = Math.random().toString(36).slice(2, 10);
  const token = createCaptchaChallengeToken({
    x: targetX,
    y: targetY,
    bgIndex,
    timestamp: Date.now(),
    nonce
  });
  const bgWithSlot = generateCaptchaBackgroundWithSlot(targetX, targetY, bgIndex);
  const pieceImg = generateCaptchaPiece(targetX, targetY, bgIndex);
  return {
    success: true,
    data: {
      token,
      bg: bgWithSlot,
      pieceImg,
      pieceY: targetY,
      puzzlePath: PUZZLE_PATH,
      pieceWidth: 52,
      pieceHeight: 52
    }
  };
});

export { get_get as default };
