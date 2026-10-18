import { d as defineEventHandler, dk as getMethod, r as readBody, g as getQuery, c_ as queryPublishedThemes } from '../../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const themes = defineEventHandler(async (event) => {
  const method = getMethod(event);
  let params = {};
  if (method === "POST") {
    try {
      params = await readBody(event) || {};
    } catch {
      params = {};
    }
  }
  const query = getQuery(event);
  const page = Number(params.page || query.page || 1);
  const limit = Number(params.limit || params.pageSize || query.limit || query.pageSize || 18);
  const keyword = String(params.keyword || query.keyword || "");
  const category = String(params.category || query.category || "");
  const result = await queryPublishedThemes({
    page,
    pageSize: limit,
    keyword,
    category
  });
  return {
    code: 0,
    msg: "ok",
    data: {
      data: result.data.map((item) => {
        var _a;
        return {
          ...item,
          demoUrl: item.demoUrl || (item.uniqueName ? `https://${item.uniqueName}.shoply.page` : ""),
          salesPrice: String((_a = item.salesPrice) != null ? _a : "0"),
          thumbnail: item.thumbnail || item.imageUrl || "",
          description: item.subtitle || item.content || "",
          author: "Shoply"
        };
      }),
      total: result.total,
      page: result.page,
      limit: result.limit,
      perPage: result.limit
    }
  };
});

export { themes as default };
//# sourceMappingURL=themes.mjs.map
