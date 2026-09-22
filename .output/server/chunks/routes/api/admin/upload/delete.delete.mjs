import { d as defineEventHandler, c as getRequestLocale, g as getQuery, e as createError } from '../../../../nitro/nitro.mjs';
import fs from 'node:fs';
import path from 'node:path';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
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

const delete_delete = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const query = getQuery(event);
  const fileUrl = query.url;
  if (!fileUrl) {
    throw createError({ statusCode: 400, message: locale === "zh" ? "URL \u4E0D\u80FD\u4E3A\u7A7A" : "URL is required" });
  }
  if (!fileUrl.startsWith("/uploads/") && !fileUrl.includes("blob.core.windows.net")) {
    throw createError({ statusCode: 403, message: locale === "zh" ? "\u7981\u6B62\u8BBF\u95EE" : "Forbidden" });
  }
  const fileName = fileUrl.split("/").pop() || path.basename(fileUrl);
  if (process.env.NUXT_HUB_BLOB || typeof hubBlob === "function") {
    try {
      await hubBlob().delete(`uploads/${fileName}`);
      return { success: true, message: locale === "zh" ? "\u6587\u4EF6\u5DF2\u4ECE Blob \u5B58\u50A8\u5220\u9664" : "File deleted from blob storage" };
    } catch (error) {
      console.warn("Failed to delete from Hub Blob, falling back to local file system:", error);
    }
  }
  const filePath = path.join(process.cwd(), "uploads", fileName);
  const legacyFilePath = path.join(process.cwd(), "public", "uploads", fileName);
  let targetPath = null;
  if (fs.existsSync(filePath)) {
    targetPath = filePath;
  } else if (fs.existsSync(legacyFilePath)) {
    targetPath = legacyFilePath;
  }
  if (targetPath) {
    try {
      fs.unlinkSync(targetPath);
      return { success: true, message: locale === "zh" ? "\u6587\u4EF6\u5DF2\u5220\u9664" : "File deleted" };
    } catch (e) {
      console.error("Error deleting file", e);
      throw createError({ statusCode: 500, message: locale === "zh" ? "\u5220\u9664\u6587\u4EF6\u5931\u8D25" : "Failed to delete file" });
    }
  }
  return { success: false, message: locale === "zh" ? "\u6587\u4EF6\u4E0D\u5B58\u5728" : "File not found" };
});

export { delete_delete as default };
