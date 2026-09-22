import fs from 'node:fs';
import path from 'node:path';
import { d as defineEventHandler, e as createError, cD as setHeader, bR as getHeader, ce as setResponseStatus, cJ as sendStream } from '../../nitro/nitro.mjs';
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

const CONTENT_TYPES = {
  ".avif": "image/avif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".m4v": "video/x-m4v",
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".webm": "video/webm",
  ".webp": "image/webp"
};
const ____slug_ = defineEventHandler(async (event) => {
  var _a;
  const slug = ((_a = event.context.params) == null ? void 0 : _a.slug) || "";
  const uploadsRoot = path.resolve(process.cwd(), "uploads");
  const filePath = path.resolve(uploadsRoot, slug);
  if (filePath !== uploadsRoot && !filePath.startsWith(uploadsRoot + path.sep)) {
    throw createError({ statusCode: 404, statusMessage: "File Not Found" });
  }
  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
    const size = fs.statSync(filePath).size;
    setHeader(event, "X-Content-Type-Options", "nosniff");
    setHeader(event, "Content-Type", CONTENT_TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream");
    setHeader(event, "Accept-Ranges", "bytes");
    const range = String(getHeader(event, "range") || "").trim();
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (range && !match) {
      setHeader(event, "Content-Range", `bytes */${size}`);
      throw createError({ statusCode: 416, statusMessage: "Range Not Satisfiable" });
    }
    if (match) {
      const requestedStart = match[1] ? Number(match[1]) : null;
      const requestedEnd = match[2] ? Number(match[2]) : null;
      const start = requestedStart === null ? Math.max(size - (requestedEnd || 0), 0) : requestedStart;
      const end = requestedStart === null ? size - 1 : Math.min(requestedEnd != null ? requestedEnd : size - 1, size - 1);
      if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || start > end || start >= size) {
        setHeader(event, "Content-Range", `bytes */${size}`);
        throw createError({ statusCode: 416, statusMessage: "Range Not Satisfiable" });
      }
      setResponseStatus(event, 206);
      setHeader(event, "Content-Range", `bytes ${start}-${end}/${size}`);
      setHeader(event, "Content-Length", String(end - start + 1));
      return sendStream(event, fs.createReadStream(filePath, { start, end }));
    }
    setHeader(event, "Content-Length", String(size));
    return sendStream(event, fs.createReadStream(filePath));
  }
  throw createError({
    statusCode: 404,
    statusMessage: "File Not Found"
  });
});

export { ____slug_ as default };
