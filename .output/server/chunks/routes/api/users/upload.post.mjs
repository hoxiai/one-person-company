import { d as defineEventHandler, c as getRequestLocale, bF as requireUserSession, e as createError, be as readFormData } from '../../../nitro/nitro.mjs';
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

const MAX_FILES_PER_REQUEST = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = /* @__PURE__ */ new Set(["jpg", "jpeg", "png", "gif", "webp", "avif"]);
const ALLOWED_MIME_PREFIX = "image/";
const resolveSafeExtension = (fileName, mimeType) => {
  const ext = path.extname(fileName || "").replace(".", "").toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) return null;
  if (mimeType && !mimeType.toLowerCase().startsWith(ALLOWED_MIME_PREFIX)) return null;
  return ext;
};
const upload_post = defineEventHandler(async (event) => {
  var _a;
  const locale = getRequestLocale(event);
  const messages = locale === "zh" ? {
    unauthorized: "\u672A\u767B\u5F55",
    noFileUploaded: "\u672A\u4E0A\u4F20\u6587\u4EF6",
    tooManyFiles: `\u6587\u4EF6\u6570\u91CF\u8FC7\u591A\uFF08\u6700\u591A ${MAX_FILES_PER_REQUEST} \u4E2A\uFF09`,
    fileTooLarge: `\u6587\u4EF6\u8FC7\u5927\uFF08\u6700\u5927 ${MAX_FILE_SIZE / 1024 / 1024}MB\uFF09`,
    unsupportedFileType: "\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B\uFF08\u4EC5\u652F\u6301\u56FE\u7247\uFF09"
  } : {
    unauthorized: "Unauthorized",
    noFileUploaded: "No file uploaded",
    tooManyFiles: `Too many files (max ${MAX_FILES_PER_REQUEST})`,
    fileTooLarge: `File too large (max ${MAX_FILE_SIZE / 1024 / 1024}MB)`,
    unsupportedFileType: "Unsupported file type (images only)"
  };
  const session = await requireUserSession(event);
  if (!session.user) {
    throw createError({ statusCode: 401, message: messages.unauthorized });
  }
  const form = await readFormData(event);
  const files = form.getAll("files");
  const singleFile = form.get("file");
  if (singleFile && !files.length) {
    files.push(singleFile);
  }
  if (!files.length || !((_a = files[0]) == null ? void 0 : _a.size)) {
    throw createError({ statusCode: 400, message: messages.noFileUploaded });
  }
  if (files.length > MAX_FILES_PER_REQUEST) {
    throw createError({ statusCode: 400, message: messages.tooManyFiles });
  }
  for (const file of files) {
    if (file.size > MAX_FILE_SIZE) {
      throw createError({ statusCode: 413, message: messages.fileTooLarge });
    }
    if (file.size && !resolveSafeExtension(file.name || "", file.type || "")) {
      throw createError({ statusCode: 400, message: messages.unsupportedFileType });
    }
  }
  const urls = [];
  for (const file of files) {
    if (!file.size) continue;
    const safeExt = resolveSafeExtension(file.name || "", file.type || "");
    if (process.env.NUXT_HUB_BLOB || typeof hubBlob === "function") {
      try {
        const timestamp2 = Date.now();
        const hash2 = crypto.randomBytes(8).toString("hex");
        const uniqueName2 = `${timestamp2}-${hash2}.${safeExt}`;
        const blob = await hubBlob().put(`uploads/users/${session.user.id}/${uniqueName2}`, file, {
          addRandomSuffix: false
        });
        urls.push(blob.pathname);
        continue;
      } catch (error) {
        console.warn("Failed to upload to Hub Blob, falling back to local file system:", error);
      }
    }
    const uploadDir = path.join(process.cwd(), "/uploads", "users", session.user.id.toString());
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const timestamp = Date.now();
    const hash = crypto.randomBytes(8).toString("hex");
    const uniqueName = `${timestamp}-${hash}.${safeExt}`;
    const filePath = path.join(uploadDir, uniqueName);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    urls.push(`/uploads/users/${session.user.id}/${uniqueName}`);
  }
  return {
    urls,
    url: urls[0]
  };
});

export { upload_post as default };
