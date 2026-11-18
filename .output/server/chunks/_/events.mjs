import { b as db, gu as purgeHoxiUserOwnedData, gv as createDrizzleAccountDeletionStore, gw as ensureHoxiWorkMcpToolsRegistered, gx as ensureRewardOutboxWorkerStarted, gy as startAaDailySyncWorker, gz as startProjectDailySyncWorker, gA as stopRewardOutboxWorker, gB as stopAaDailySyncWorker, gC as stopProjectDailySyncWorker } from '../nitro/nitro.mjs';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';

function getThemeEventRules() {
  return [
    {
      event: "user.deleted",
      name: "hoxi-purge-deleted-user-data",
      handler: async (ctx) => {
        var _a, _b, _c, _d, _e, _f;
        const rawId = (_f = (_d = (_c = (_a = ctx == null ? void 0 : ctx.payload) == null ? void 0 : _a.userId) != null ? _c : (_b = ctx == null ? void 0 : ctx.payload) == null ? void 0 : _b.id) != null ? _d : ctx == null ? void 0 : ctx.userId) != null ? _f : (_e = ctx == null ? void 0 : ctx.user) == null ? void 0 : _e.id;
        const userId = Number(rawId || 0);
        if (userId > 0) {
          await purgeHoxiUserOwnedData(
            createDrizzleAccountDeletionStore(db),
            userId
          ).catch(() => {
          });
        }
      }
    }
  ];
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
