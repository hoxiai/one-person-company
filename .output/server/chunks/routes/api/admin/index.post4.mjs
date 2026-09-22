import { d as defineEventHandler, c as getRequestLocale, be as readFormData, e as createError } from '../../../nitro/nitro.mjs';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
  var _a;
  const locale = getRequestLocale(event);
  const form = await readFormData(event);
  const files = form.getAll("files");
  const singleFile = form.get("file");
  if (singleFile && !files.length) {
    files.push(singleFile);
  }
  if (!files.length || !((_a = files[0]) == null ? void 0 : _a.size)) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "\u672A\u4E0A\u4F20\u6587\u4EF6" : "No file uploaded" });
  }
  const urls = [];
  for (const file of files) {
    if (!file.size) continue;
    if (process.env.NUXT_HUB_BLOB || typeof hubBlob === "function") {
      try {
        const ext2 = file.name ? file.name.split(".").pop() : "";
        const timestamp2 = Date.now();
        const hash2 = crypto.randomBytes(8).toString("hex");
        const uniqueName2 = ext2 ? `${timestamp2}-${hash2}.${ext2}` : `${timestamp2}-${hash2}`;
        const blob = await hubBlob().put(`uploads/${uniqueName2}`, file, {
          addRandomSuffix: false
        });
        urls.push(blob.pathname);
        continue;
      } catch (error) {
        console.warn("Failed to upload to Hub Blob, falling back to local file system:", error);
      }
    }
    const uploadDir = path.join(process.cwd(), "/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const ext = path.extname(file.name) || "";
    const timestamp = Date.now();
    const hash = crypto.randomBytes(8).toString("hex");
    const uniqueName = `${timestamp}-${hash}${ext}`;
    const filePath = path.join(uploadDir, uniqueName);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    urls.push(`/uploads/${uniqueName}`);
  }
  return {
    urls,
    // Keep single url for backward compatibility if needed
    url: urls[0]
  };
});

export { index_post as default };
