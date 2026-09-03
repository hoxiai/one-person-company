import { cI as qingpuSql } from '../nitro/nitro.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const assignVideoAssetToListing = async (userId, productId, assetId) => {
  await qingpuSql.begin(async (sql) => {
    var _a, _b, _c;
    const productRows = await sql`
      select revision from qingpu_listing_products
      where user_id = ${userId} and product_id = ${productId} and deleted_at is null
      for update
    `;
    if (!productRows[0]) throw new Error("product not found");
    const assetRows = await sql`
      select media_type, status from qingpu_assets
      where user_id = ${userId} and product_id = ${productId}
        and asset_id = ${assetId} and deleted_at is null
      limit 1
    `;
    if (((_a = assetRows[0]) == null ? void 0 : _a.media_type) !== "video" || ((_b = assetRows[0]) == null ? void 0 : _b.status) !== "hosted") {
      throw new Error("video asset not found");
    }
    const workspaceRows = await sql`
      select workspace from qingpu_listing_workspaces
      where user_id = ${userId} and product_id = ${productId} and deleted_at is null
      for update
    `;
    const workspace = { ...((_c = workspaceRows[0]) == null ? void 0 : _c.workspace) || {} };
    const media = { ...workspace.media || {} };
    const currentAssetIds = Array.isArray(media.videoAssetIds) ? media.videoAssetIds.map(String) : [];
    if (media.publishedVideoRef === assetId && currentAssetIds[0] === assetId) return;
    media.videoAssetIds = [assetId, ...currentAssetIds.filter((id) => id !== assetId)];
    media.publishedVideoRef = assetId;
    const nextWorkspace = { ...workspace, media, updatedAt: Date.now() };
    const now = /* @__PURE__ */ new Date();
    await sql`
      insert into qingpu_listing_workspaces (
        user_id, product_id, workspace, schema_version, client_updated_at, updated_by, updated_at
      ) values (${userId}, ${productId}, ${sql.json(nextWorkspace)}, 1, ${now}, 'server', now())
      on conflict (user_id, product_id) do update set
        workspace = excluded.workspace,
        client_updated_at = excluded.client_updated_at,
        updated_by = 'server',
        deleted_at = null,
        updated_at = now()
    `;
    await sql`
      update qingpu_listing_products
      set revision = revision + 1, client_updated_at = ${now}, updated_at = now()
      where user_id = ${userId} and product_id = ${productId}
    `;
  });
};

export { assignVideoAssetToListing };
