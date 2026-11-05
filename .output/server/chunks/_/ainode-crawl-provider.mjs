import { gf as fetchAinodeCrawl1688Item, gg as sanitizeAinodeCrawlItem, gh as normalizeAinodeCrawl1688Product, gi as extract1688OfferId } from '../nitro/nitro.mjs';
import { registerCollectProvider } from './registry.mjs';
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
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';

registerCollectProvider({
  id: "ainode-crawl-1688",
  platform: "1688",
  matchUrl: (url) => extract1688OfferId(url),
  async collect({ userId, url, sourceProductId, productId }) {
    var _a, _b;
    const { item, error } = await fetchAinodeCrawl1688Item(userId, sourceProductId);
    if (!item || error) return { ok: false, error: error || "empty item" };
    const sanitizedItem = sanitizeAinodeCrawlItem(item, sourceProductId);
    const canonical = normalizeAinodeCrawl1688Product(sanitizedItem, url, { productId });
    const mainImage = ((_a = canonical.media.images.find((image) => image.role === "main")) == null ? void 0 : _a.originalUrl) || ((_b = canonical.media.images[0]) == null ? void 0 : _b.originalUrl) || null;
    const title = canonical.basic.title || `\u5546\u54C1_${sourceProductId}`;
    const input = {
      productId,
      sourcePlatform: "1688",
      sourceUrl: url,
      sourceProductId,
      title,
      mainImageUrl: mainImage,
      skuCount: Math.max(1, canonical.variants.length),
      preprocessStatus: "pending",
      canonical,
      schemaVersion: 1,
      clientUpdatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return { ok: true, input };
  }
});
//# sourceMappingURL=ainode-crawl-provider.mjs.map
