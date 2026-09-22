import { d as defineEventHandler, c as getRequestLocale, r as readBody, e as createError, aL as saveSchedulerJobs, aM as loadSchedulerJobs, aN as runSchedulerJob } from '../../../nitro/nitro.mjs';
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

const scheduler_post = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  const body = await readBody(event).catch(() => ({}));
  if ((body == null ? void 0 : body.action) === "save") {
    const rawJobs = Array.isArray(body.jobs) ? body.jobs : null;
    if (!rawJobs) {
      throw createError({ statusCode: 400, message: locale === "zh" ? "jobs \u5FC5\u987B\u662F\u6570\u7EC4" : "jobs must be an array" });
    }
    const seen = /* @__PURE__ */ new Set();
    const jobs = [];
    for (const raw of rawJobs) {
      const name = String((raw == null ? void 0 : raw.name) || "").trim();
      const path = String((raw == null ? void 0 : raw.path) || "").trim();
      const schedule = raw == null ? void 0 : raw.schedule;
      if (!name) {
        throw createError({ statusCode: 400, message: locale === "zh" ? "\u4EFB\u52A1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A" : "Job name is required" });
      }
      if (seen.has(name)) {
        throw createError({ statusCode: 400, message: locale === "zh" ? `\u4EFB\u52A1\u540D\u79F0\u91CD\u590D\uFF1A${name}` : `Duplicate job name: ${name}` });
      }
      if (!path.startsWith("/")) {
        throw createError({ statusCode: 400, message: locale === "zh" ? `\u8DEF\u5F84\u5FC5\u987B\u4EE5 / \u5F00\u5934\uFF1A${name}` : `Path must start with /: ${name}` });
      }
      const method = String((raw == null ? void 0 : raw.method) || "POST").toUpperCase();
      if (method !== "GET" && method !== "POST") {
        throw createError({ statusCode: 400, message: locale === "zh" ? `\u8BF7\u6C42\u65B9\u6CD5\u4E0D\u5408\u6CD5\uFF1A${name}` : `Invalid method: ${name}` });
      }
      const validSchedule = schedule === "hourly" || schedule === "daily" || schedule === "weekly" || typeof schedule === "number" && Number.isFinite(schedule) && schedule >= 1;
      if (!validSchedule) {
        throw createError({ statusCode: 400, message: locale === "zh" ? `\u5468\u671F\u4E0D\u5408\u6CD5\uFF1A${name}` : `Invalid schedule: ${name}` });
      }
      seen.add(name);
      jobs.push({
        name,
        path,
        schedule,
        method,
        enabled: (raw == null ? void 0 : raw.enabled) !== false,
        useCronSecret: (raw == null ? void 0 : raw.useCronSecret) === true
      });
    }
    await saveSchedulerJobs(jobs);
    return { code: 0, message: locale === "zh" ? "\u5DF2\u4FDD\u5B58" : "saved", count: jobs.length };
  }
  if ((body == null ? void 0 : body.action) === "trigger") {
    const name = String((body == null ? void 0 : body.name) || "").trim();
    const jobs = await loadSchedulerJobs();
    const job = jobs.find((item) => item.name === name);
    if (!job) {
      throw createError({ statusCode: 404, message: locale === "zh" ? `\u4EFB\u52A1\u4E0D\u5B58\u5728\uFF1A${name}` : `Job not found: ${name}` });
    }
    const result = await runSchedulerJob(job);
    return { code: 0, data: result };
  }
  throw createError({ statusCode: 400, message: locale === "zh" ? "\u672A\u77E5\u64CD\u4F5C" : "Unknown action" });
});

export { scheduler_post as default };
