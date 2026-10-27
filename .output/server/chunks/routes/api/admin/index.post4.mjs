import { d as defineEventHandler, c as getRequestLocale, r as readBody, be as saveCustomReleaseApp, s as setAuditMeta, bf as deleteCustomReleaseApp, e as createError, b7 as updateReleaseStatusById, bg as discoverBundledReleaseApps, bh as getBundledReleasesForApp, bi as seedBundledReleasesForApp, bj as isValidAppKey, b8 as normalizeAppKey, b9 as normalizeReleaseChannel, bk as normalizeReleaseVersion, bl as isValidSemVer, bm as versionToCode, bn as upsertReleaseRecord } from '../../../nitro/nitro.mjs';
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
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';

const index_post = defineEventHandler(async (event) => {
  var _a, _b;
  const locale = getRequestLocale(event);
  const body = await readBody(event) || {};
  if (body.action === "save_app") {
    const apps = await saveCustomReleaseApp({
      appKey: body.appKey,
      name: body.name,
      nameZh: body.nameZh || body.name,
      description: body.description,
      repoUrl: body.repoUrl,
      defaultChannel: body.defaultChannel,
      platforms: body.platforms
    });
    setAuditMeta(event, {
      action: "save_app",
      resource: "releases",
      resourceId: String(body.appKey || ""),
      summary: `Saved release software card ${body.appKey}`
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u8F6F\u4EF6\u4EA7\u54C1\u5DF2\u4FDD\u5B58" : "Software product saved",
      data: { apps }
    };
  }
  if (body.action === "delete_app") {
    const apps = await deleteCustomReleaseApp(body.appKey);
    setAuditMeta(event, {
      action: "delete_app",
      resource: "releases",
      resourceId: String(body.appKey || ""),
      summary: `Deleted release software card ${body.appKey}`
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u8F6F\u4EF6\u4EA7\u54C1\u5DF2\u79FB\u9664" : "Software product removed",
      data: { apps }
    };
  }
  if (body.action === "withdraw" || body.action === "restore") {
    const id = Number.parseInt(String(body.id || ""), 10);
    if (!Number.isFinite(id) || id <= 0) {
      throw createError({
        statusCode: 400,
        message: locale === "zh" ? "\u8BF7\u63D0\u4F9B\u6709\u6548\u7684\u7248\u672C\u8BB0\u5F55 id" : "Valid release id is required"
      });
    }
    const updated = await updateReleaseStatusById(id, {
      withdrawn: body.action === "withdraw",
      ...body.action === "restore" ? { isActive: true } : {}
    });
    setAuditMeta(event, {
      action: body.action,
      resource: "releases",
      resourceId: id,
      summary: `${body.action === "withdraw" ? "Withdrew" : "Restored"} ${updated.appKey} v${updated.version}`
    });
    return {
      code: 0,
      message: body.action === "withdraw" ? locale === "zh" ? "\u7248\u672C\u5DF2\u64A4\u56DE" : "Release withdrawn" : locale === "zh" ? "\u7248\u672C\u5DF2\u6062\u590D\u4E0A\u67B6" : "Release restored",
      data: updated
    };
  }
  if (body.action === "seed_bundled") {
    const targetApp = String(body.appKey || "all").trim().toLowerCase();
    const results = [];
    if (targetApp === "all") {
      for (const appKey2 of discoverBundledReleaseApps()) {
        const entries = getBundledReleasesForApp(appKey2);
        if (entries.length > 0) {
          results.push(await seedBundledReleasesForApp(appKey2, entries));
        }
      }
    } else if (Array.isArray(body.entries)) {
      results.push(await seedBundledReleasesForApp(targetApp, body.entries));
    } else {
      const entries = getBundledReleasesForApp(targetApp);
      if (entries.length > 0) {
        results.push(await seedBundledReleasesForApp(targetApp, entries));
      }
    }
    setAuditMeta(event, {
      action: "seed_bundled",
      resource: "releases",
      resourceId: targetApp,
      summary: `Seeded bundled releases for ${targetApp}`
    });
    return {
      code: 0,
      message: locale === "zh" ? "\u5185\u7F6E\u7248\u672C\u8BB0\u5F55\u5DF2\u540C\u6B65\u5165\u5E93" : "Bundled releases synced to database",
      data: { results }
    };
  }
  const rawAppKey = String(body.appKey || body.app || "default").trim().toLowerCase();
  if (!isValidAppKey(rawAppKey)) {
    throw createError({
      statusCode: 400,
      message: "Invalid appKey: must start with alphanumeric and contain only lowercase letters, digits, dots, underscores, or hyphens"
    });
  }
  const appKey = normalizeAppKey(rawAppKey);
  const channel = normalizeReleaseChannel(body.channel || "stable");
  const version = normalizeReleaseVersion(body.version);
  if (!isValidSemVer(version)) {
    throw createError({
      statusCode: 400,
      message: `Invalid SemVer version "${body.version}": expected X.Y.Z`
    });
  }
  if (body.dryRun) {
    setAuditMeta(event, { skip: true });
    return {
      code: 0,
      dryRun: true,
      message: locale === "zh" ? "\u6F14\u7EC3\u6A21\u5F0F\u6821\u9A8C\u901A\u8FC7\uFF0C\u672A\u5199\u5165\u6570\u636E\u5E93" : "Dry-run validation passed without writing to database",
      data: {
        appKey,
        channel,
        version,
        versionCode: versionToCode(version)
      }
    };
  }
  const appName = typeof body.appName === "string" ? body.appName.trim() : "";
  const metaData = {
    ...body.metaData && typeof body.metaData === "object" ? body.metaData : {},
    ...appName ? { appName } : {}
  };
  if (appName) {
    try {
      await saveCustomReleaseApp({
        appKey,
        name: appName,
        nameZh: appName,
        defaultChannel: channel
      });
    } catch {
    }
  }
  const res = await upsertReleaseRecord({
    appKey,
    channel,
    version,
    versionCode: body.versionCode,
    tagName: body.tagName || body.tag_name,
    name: body.name,
    title: body.title,
    summary: body.summary,
    body: body.body,
    items: body.items,
    commit: body.commit,
    htmlUrl: body.htmlUrl || body.html_url,
    highlights: body.highlights,
    locales: body.locales,
    assets: body.assets,
    mandatory: body.mandatory,
    minUpgradeVersion: body.minUpgradeVersion,
    isActive: body.isActive,
    releasedAt: body.releasedAt,
    withdrawnAt: (_a = body.withdrawnAt) != null ? _a : body.withdrawn_at,
    metaData: Object.keys(metaData).length > 0 ? metaData : null,
    strictImmutableAssets: Boolean(body.strictImmutableAssets)
  });
  setAuditMeta(event, {
    action: res.isNew ? "publish" : "update",
    resource: "releases",
    resourceId: (_b = res.release.id) != null ? _b : `${appKey}:${channel}:${version}`,
    summary: `${res.isNew ? "Published" : "Updated"} ${appKey} v${version} (${channel})`
  });
  return {
    code: 0,
    message: res.isNew ? locale === "zh" ? "\u65B0\u7248\u672C\u53D1\u5E03\u6210\u529F" : "Release published successfully" : locale === "zh" ? "\u7248\u672C\u8BB0\u5F55\u5DF2\u66F4\u65B0" : "Release updated successfully",
    data: res.release,
    isNew: res.isNew
  };
});

export { index_post as default };
//# sourceMappingURL=index.post4.mjs.map
