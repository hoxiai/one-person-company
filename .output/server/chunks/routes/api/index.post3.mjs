import { d as defineEventHandler, c as getRequestLocale, ca as getHeader, el as resolveExpectedReleaseKey, e as createError, em as matchesReleasePublishKey, r as readBody, bj as isValidAppKey, b8 as normalizeAppKey, b9 as normalizeReleaseChannel, bk as normalizeReleaseVersion, bl as isValidSemVer, bm as versionToCode, be as saveCustomReleaseApp, bn as upsertReleaseRecord, a6 as recordOperationFromEvent } from '../../nitro/nitro.mjs';
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

const releasePublishHandler = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const locale = getRequestLocale(event);
  const authHeader = getHeader(event, "authorization") || "";
  const xReleaseKey = getHeader(event, "x-release-key") || getHeader(event, "x-api-key") || "";
  const providedKey = (authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "") || xReleaseKey.trim();
  const expectedKey = resolveExpectedReleaseKey();
  if (!expectedKey) {
    throw createError({
      statusCode: 500,
      statusMessage: locale === "zh" ? "\u670D\u52A1\u7AEF\u672A\u914D\u7F6E APAY_RELEASE_KEY \u73AF\u5883\u53D8\u91CF\uFF0C\u62D2\u7EDD\u53D1\u5E03" : "Server is missing APAY_RELEASE_KEY environment variable"
    });
  }
  if (!matchesReleasePublishKey(providedKey, expectedKey)) {
    throw createError({
      statusCode: 401,
      statusMessage: locale === "zh" ? "\u672A\u6388\u6743\uFF1AAPAY_RELEASE_KEY \u65E0\u6548\u6216\u7F3A\u5931 (Unauthorized)" : "Unauthorized: invalid or missing APAY_RELEASE_KEY"
    });
  }
  const body = await readBody(event) || {};
  if (body.action && body.action !== "publish") {
    throw createError({
      statusCode: 400,
      message: locale === "zh" ? "\u7BA1\u7406\u52A8\u4F5C\u5DF2\u7EDF\u4E00\u6536\u655B\u81F3 /api/admin/releases \u63A5\u53E3" : "Management actions must be sent to /api/admin/releases"
    });
  }
  const rawAppKey = String(body.appKey || body.app || "default").trim().toLowerCase();
  if (!isValidAppKey(rawAppKey)) {
    throw createError({
      statusCode: 400,
      message: "Invalid appKey: must start with alphanumeric and contain only lowercase letters, digits, dots, underscores, or hyphens"
    });
  }
  const appKey = normalizeAppKey(rawAppKey);
  const channel = normalizeReleaseChannel(body.channel);
  const version = normalizeReleaseVersion(body.version);
  if (!isValidSemVer(version)) {
    throw createError({
      statusCode: 400,
      message: `Invalid SemVer version "${body.version}": expected X.Y.Z`
    });
  }
  if (body.dryRun) {
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
  await recordOperationFromEvent(event, {
    actorType: "admin",
    actorName: "apay:release-key",
    action: res.isNew ? "publish" : "update",
    resource: "releases",
    resourceId: (_b = res.release.id) != null ? _b : `${appKey}:${channel}:${version}`,
    summary: `${res.isNew ? "Published" : "Updated"} ${appKey} v${version} (${channel})`,
    details: {
      appKey,
      channel,
      version,
      isNew: res.isNew,
      assetsCount: ((_c = res.release.assets) == null ? void 0 : _c.length) || 0
    }
  });
  return {
    code: 0,
    message: res.isNew ? locale === "zh" ? "\u65B0\u7248\u672C\u53D1\u5E03\u6210\u529F" : "Release published successfully" : locale === "zh" ? "\u7248\u672C\u8BB0\u5F55\u5DF2\u66F4\u65B0" : "Release updated successfully",
    data: res.release,
    isNew: res.isNew
  };
});

export { releasePublishHandler as default };
//# sourceMappingURL=index.post3.mjs.map
