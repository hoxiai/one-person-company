import { d as defineEventHandler, c as getRequestLocale, e as createError } from '../../../../nitro/nitro.mjs';
import { spawn } from 'child_process';
import path from 'path';
import 'drizzle-orm';
import 'crypto';
import 'fs';
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

const rebuild_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  if (!event.context.admin) {
    throw createError({ statusCode: 403, message: locale === "zh" ? "\u7981\u6B62\u8BBF\u95EE\uFF1A\u9700\u8981\u7BA1\u7406\u5458\u6743\u9650" : "Forbidden: Admin access required" });
  }
  try {
    const scriptPath = path.join(process.cwd(), "rebuild.sh");
    console.log(`[System] Initiating async rebuild via ${scriptPath}`);
    const child = spawn("bash", [scriptPath], {
      detached: true,
      stdio: "ignore"
      // We don't need to capture the output back to the HTTP response
    });
    child.unref();
    return {
      code: 0,
      message: locale === "zh" ? "\u7CFB\u7EDF\u91CD\u5EFA\u5DF2\u542F\u52A8\uFF0C\u5E94\u7528\u5C06\u5728\u7EA6 30-60 \u79D2\u5185\u91CD\u542F\uFF0C\u8BF7\u7A0D\u540E\u5237\u65B0\u9875\u9762\u3002" : "System rebuild initiated. The application will restart in about 30-60 seconds. Please refresh the page later."
    };
  } catch (error) {
    console.error("[System] Failed to initiate rebuild:", error);
    throw createError({
      statusCode: 500,
      message: locale === "zh" ? `\u542F\u52A8\u7CFB\u7EDF\u91CD\u5EFA\u5931\u8D25\uFF1A${error.message}` : `Failed to initiate rebuild: ${error.message}`
    });
  }
});

export { rebuild_post as default };
