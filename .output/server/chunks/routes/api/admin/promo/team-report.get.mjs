import { d as defineEventHandler, g as getQuery, by as getMasterAgentTeamReport } from '../../../../nitro/nitro.mjs';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';

const teamReport_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const masterAgentUserId = Number(query.masterAgentUserId || 0);
  if (!masterAgentUserId) {
    return {
      summary: {
        teamCount: 0,
        paidOrderCount: 0,
        totalSalesAmount: 0,
        totalCommissionAmount: 0
      },
      rows: []
    };
  }
  return getMasterAgentTeamReport(masterAgentUserId);
});

export { teamReport_get as default };
//# sourceMappingURL=team-report.get.mjs.map
