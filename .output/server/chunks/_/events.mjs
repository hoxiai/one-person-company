import { b as db, ga as ensureHoxiWorkMcpToolsRegistered, gb as ensureRewardOutboxWorkerStarted, gc as startAaDailySyncWorker, gd as startProjectDailySyncWorker, ge as stopRewardOutboxWorker, gf as stopAaDailySyncWorker, gg as stopProjectDailySyncWorker } from '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
import 'node:child_process';

function getThemeEventRules() {
  return [];
}
function registerThemeMcpTools() {
  ensureHoxiWorkMcpToolsRegistered();
}
function startThemeBackgroundWorkers(database = db) {
  ensureRewardOutboxWorkerStarted(database, 6e4, { immediateSweep: true });
  startAaDailySyncWorker(database);
  startProjectDailySyncWorker(database);
}
function stopThemeBackgroundWorkers() {
  stopRewardOutboxWorker();
  stopAaDailySyncWorker();
  stopProjectDailySyncWorker();
}

export { getThemeEventRules, registerThemeMcpTools, startThemeBackgroundWorkers, stopThemeBackgroundWorkers };
//# sourceMappingURL=events.mjs.map
