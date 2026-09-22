import { d as defineEventHandler, g as getQuery, b as db, aw as promoApplications, u as users } from '../../../../nitro/nitro.mjs';
import { sql, eq, desc } from 'drizzle-orm';
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

const applications_get = defineEventHandler(async (event) => {
  var _a;
  const query = getQuery(event);
  const page = Math.max(1, Number(query.page) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(query.pageSize) || 20));
  const offset = (page - 1) * pageSize;
  const [totalRows, rows] = await Promise.all([
    db.select({ count: sql`count(*)` }).from(promoApplications),
    db.select({
      id: promoApplications.id,
      userId: promoApplications.userId,
      status: promoApplications.status,
      channelInfo: promoApplications.channelInfo,
      contact: promoApplications.contact,
      reason: promoApplications.reason,
      reviewNote: promoApplications.reviewNote,
      reviewedByAdminId: promoApplications.reviewedByAdminId,
      reviewedAt: promoApplications.reviewedAt,
      createdAt: promoApplications.createdAt,
      userEmail: users.email,
      userNickname: users.nickname
    }).from(promoApplications).innerJoin(users, eq(users.id, promoApplications.userId)).orderBy(desc(promoApplications.createdAt)).limit(pageSize).offset(offset)
  ]);
  return {
    list: rows,
    total: Number(((_a = totalRows[0]) == null ? void 0 : _a.count) || 0),
    page,
    pageSize
  };
});

export { applications_get as default };
