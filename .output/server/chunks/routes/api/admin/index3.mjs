import { d as defineEventHandler, c as getRequestLocale, b as db, $ as paymentMethods, b6 as readLocalPaymentPluginTemplates, b7 as applyLocalPaymentPluginDefaults, r as readBody, b4 as normalizePaymentPluginOverrides, e as createError } from '../../../nitro/nitro.mjs';
import fs from 'fs';
import path from 'path';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'node:fs/promises';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

const index = defineEventHandler(async (event) => {
  const locale = getRequestLocale(event);
  if (event.method === "GET") {
    const dbMethods = await db.select().from(paymentMethods);
    const paymentsDir = path.resolve(process.cwd(), "payments");
    let localPlugins = [];
    if (fs.existsSync(paymentsDir)) {
      localPlugins = fs.readdirSync(paymentsDir).filter((item) => {
        const itemPath = path.join(paymentsDir, item);
        try {
          return fs.statSync(itemPath).isDirectory();
        } catch {
          return false;
        }
      });
    }
    const localPluginLowerSet = new Set(localPlugins.map((code) => code.toLowerCase()));
    const mergedMethods = dbMethods.map((method) => {
      const localTemplates = readLocalPaymentPluginTemplates(method.code);
      const hasLocalFiles = localTemplates.hasLocalFiles || localPluginLowerSet.has(String(method.code || "").toLowerCase());
      return applyLocalPaymentPluginDefaults({
        ...method,
        info: method.info || localTemplates.info || "",
        create: method.create || localTemplates.create || "",
        callback: method.callback || localTemplates.callback || "",
        hasLocalFiles
      });
    });
    for (const pluginCode of localPlugins) {
      const existsInDb = dbMethods.some((m) => String(m.code || "").toLowerCase() === pluginCode.toLowerCase());
      if (!existsInDb) {
        const localTemplates = readLocalPaymentPluginTemplates(pluginCode);
        mergedMethods.push(applyLocalPaymentPluginDefaults({
          id: null,
          // Null ID indicates it's not in DB yet
          name: pluginCode.charAt(0).toUpperCase() + pluginCode.slice(1),
          code: pluginCode,
          iconUrl: "",
          isActive: false,
          supportedLocales: "",
          configJson: localTemplates.configJson || "{}",
          info: localTemplates.info || "",
          create: localTemplates.create || "",
          callback: localTemplates.callback || "",
          createdAt: /* @__PURE__ */ new Date(),
          isLocalOnly: true,
          hasLocalFiles: true
        }));
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
    if (!Object.hasOwn(insertData, "info")) insertData.info = null;
    if (!Object.hasOwn(insertData, "create")) insertData.create = null;
    if (!Object.hasOwn(insertData, "callback")) insertData.callback = null;
    const normalizedData = normalizePaymentPluginOverrides(insertData.code, insertData);
    normalizedData.supportedLocales = String(normalizedData.supportedLocales || "").trim() || null;
    try {
      return await db.insert(paymentMethods).values(normalizedData).returning();
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
//# sourceMappingURL=index3.mjs.map
