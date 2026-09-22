import { d as defineEventHandler, c as getRequestLocale, b as db, ao as paymentMethods, aq as applyLocalPaymentPluginDefaults, r as readBody, e as createError } from '../../../nitro/nitro.mjs';
import fs from 'fs';
import path from 'path';
import 'drizzle-orm';
import 'crypto';
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

const index = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  if (event.method === "GET") {
    const dbMethods = await db.select().from(paymentMethods);
    const paymentsDir = path.resolve(process.cwd(), "payments");
    let localPlugins = [];
    if (fs.existsSync(paymentsDir)) {
      localPlugins = fs.readdirSync(paymentsDir).filter((item) => {
        const itemPath = path.join(paymentsDir, item);
        return fs.statSync(itemPath).isDirectory();
      });
    }
    const mergedMethods = dbMethods.map((method) => applyLocalPaymentPluginDefaults({ ...method }));
    for (const pluginCode of localPlugins) {
      const existsInDb = dbMethods.find((m) => m.code === pluginCode);
      if (!existsInDb) {
        let info = "";
        let create = "";
        let callback = "";
        let configJson = "{}";
        try {
          const infoPath = path.join(paymentsDir, pluginCode, "info.html");
          if (fs.existsSync(infoPath)) info = fs.readFileSync(infoPath, "utf-8");
          const callbackPath = path.join(paymentsDir, pluginCode, "callback.js");
          if (fs.existsSync(callbackPath)) callback = fs.readFileSync(callbackPath, "utf-8");
          const createPath = path.join(paymentsDir, pluginCode, "create.js");
          if (fs.existsSync(createPath)) create = fs.readFileSync(createPath, "utf-8");
          const configPath = path.join(paymentsDir, pluginCode, "config.json");
          if (fs.existsSync(configPath)) configJson = fs.readFileSync(configPath, "utf-8");
        } catch (e) {
          console.error(`Error reading local plugin ${pluginCode}:`, e);
        }
        mergedMethods.push(applyLocalPaymentPluginDefaults({
          id: null,
          // Null ID indicates it's not in DB yet
          name: pluginCode.charAt(0).toUpperCase() + pluginCode.slice(1),
          code: pluginCode,
          iconUrl: "",
          isActive: false,
          supportedLocales: "",
          configJson,
          info,
          create,
          callback,
          createdAt: /* @__PURE__ */ new Date(),
          isLocalOnly: true
          // custom flag for frontend
        }));
      } else {
        existsInDb.hasLocalFiles = true;
      }
    }
    return mergedMethods;
  }
  if (event.method === "POST") {
    const body = await readBody(event);
    const insertData = { ...body };
    delete insertData.id;
    delete insertData.createdAt;
    delete insertData.isLocalOnly;
    delete insertData.hasLocalFiles;
    if (insertData.info === void 0) insertData.info = null;
    if (insertData.create === void 0) insertData.create = null;
    if (insertData.callback === void 0) insertData.callback = null;
    insertData.supportedLocales = String(insertData.supportedLocales || "").trim() || null;
    try {
      return await db.insert(paymentMethods).values(insertData).returning();
    } catch (e) {
      console.error("Database insert error:", e);
      throw createError({
        statusCode: 500,
        message: locale === "zh" ? `\u6570\u636E\u5E93\u5199\u5165\u5931\u8D25\uFF1A${e.message}` : "Failed query: " + e.message
      });
    }
  }
});

export { index as default };
