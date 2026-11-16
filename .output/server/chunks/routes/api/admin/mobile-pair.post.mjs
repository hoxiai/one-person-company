import { d as defineEventHandler, c as getRequestLocale, e as createError, b as db, h as admins, i as isSuperAdmin, n as normalizePermissions, k as adminTokens, s as setAuditMeta, E as getRequestURL } from '../../../nitro/nitro.mjs';
import crypto from 'crypto';
import os from 'node:os';
import { eq, and, count, or, isNull, gt } from 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
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

const MOBILE_PAIR_TOKEN_NAME = "APay Mobile Admin";
const MAX_ACTIVE_ADMIN_TOKENS = 10;
function isLoopbackHost(hostname) {
  const lower = hostname.trim().toLowerCase().replace(/^\[|\]$/g, "");
  return lower === "localhost" || lower === "127.0.0.1" || lower === "::1";
}
function isVirtualInterfaceName(name) {
  const lower = name.trim().toLowerCase();
  return [
    "utun",
    "tun",
    "tap",
    "ppp",
    "gif",
    "stf",
    "awdl",
    "llw",
    "anpi",
    "bridge",
    "veth",
    "docker",
    "br-",
    "vmnet",
    "vboxnet",
    "virbr",
    "cni",
    "flannel",
    "cali",
    "lo"
  ].some((prefix) => lower.startsWith(prefix));
}
function interfaceBonus(name) {
  if (isVirtualInterfaceName(name)) return -25;
  const lower = name.trim().toLowerCase();
  if (lower === "en0" || lower === "wlan0" || lower === "eth0") return 15;
  if (["en", "eth", "wlan", "wl", "wi-fi", "ethernet"].some((p) => lower.startsWith(p))) return 10;
  return 0;
}
function ipv4Rank(ip) {
  if (ip.startsWith("169.254.")) return 0;
  if (ip.startsWith("192.168.")) {
    const parts = ip.split(".");
    const third = Number(parts[2]);
    return third === 64 || third === 65 ? 35 : 50;
  }
  if (ip.startsWith("10.")) return 40;
  if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(ip)) return 30;
  if (/^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(ip)) return 20;
  return 0;
}
function listLocalDirectHosts() {
  const interfaces = os.networkInterfaces();
  const scoredIpv4 = [];
  const publicIpv6s = [];
  let order = 0;
  for (const [ifName, entries] of Object.entries(interfaces)) {
    if (!entries) continue;
    const bonus = interfaceBonus(ifName);
    for (const addr of entries) {
      if (addr.internal) continue;
      const ip = addr.address.trim();
      if (!ip) continue;
      if (addr.family === "IPv4") {
        const rank = ipv4Rank(ip);
        if (rank <= 0) continue;
        const score = rank + bonus;
        if (score <= 10) continue;
        scoredIpv4.push({ ip, score, order: order++ });
      } else if (addr.family === "IPv6" && !isVirtualInterfaceName(ifName)) {
        const lower = ip.toLowerCase().split("%")[0];
        if (/^[23][0-9a-f]{3}:/i.test(lower)) {
          const bracketed = `[${lower}]`;
          if (!publicIpv6s.includes(bracketed)) publicIpv6s.push(bracketed);
        }
      }
    }
  }
  scoredIpv4.sort((a, b) => b.score !== a.score ? b.score - a.score : a.order - b.order);
  const ipv4Hosts = [];
  for (const item of scoredIpv4) {
    if (!ipv4Hosts.includes(item.ip)) ipv4Hosts.push(item.ip);
  }
  if (ipv4Hosts.length > 0) {
    return ipv4Hosts.slice(0, 3);
  }
  return publicIpv6s.slice(0, 1);
}
function resolvePairingOrigins(event) {
  try {
    const reqUrl = new URL(String(getRequestURL(event)));
    const portSuffix = reqUrl.port ? `:${reqUrl.port}` : "";
    if (isLoopbackHost(reqUrl.hostname)) {
      const localHosts = listLocalDirectHosts();
      const lanOrigins = localHosts.map((host) => `${reqUrl.protocol}//${host}${portSuffix}`);
      if (lanOrigins.length > 0) {
        return {
          recommendedOrigin: lanOrigins[0],
          candidateOrigins: lanOrigins
        };
      }
    }
    return {
      recommendedOrigin: reqUrl.origin,
      candidateOrigins: [reqUrl.origin]
    };
  } catch {
    return { recommendedOrigin: "", candidateOrigins: [] };
  }
}
const mobilePair_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const locale = getRequestLocale(event);
  const isZh = locale === "zh";
  if (event.context.authenticatedFromToken) {
    throw createError({
      statusCode: 403,
      message: isZh ? "\u8BF7\u4F7F\u7528\u540E\u53F0\u7F51\u9875\u767B\u5F55\u4F1A\u8BDD\u751F\u6210\u624B\u673A\u914D\u5BF9\u7801\uFF0C\u4E0D\u80FD\u901A\u8FC7 Token \u8C03\u7528" : "Mobile pairing codes must be generated from a web login session, not via API token"
    });
  }
  const sessionAdmin = event.context.admin;
  if (!(sessionAdmin == null ? void 0 : sessionAdmin.id)) {
    throw createError({
      statusCode: 401,
      message: isZh ? "\u672A\u6388\u6743\uFF1A\u8BF7\u5148\u767B\u5F55\u540E\u53F0" : "Unauthorized"
    });
  }
  const [adminRow] = await db.select().from(admins).where(eq(admins.id, Number(sessionAdmin.id))).limit(1);
  if (!adminRow) {
    throw createError({
      statusCode: 401,
      message: isZh ? "\u7BA1\u7406\u5458\u8D26\u53F7\u4E0D\u5B58\u5728" : "Admin account not found"
    });
  }
  const rawPerms = adminRow.permissions;
  const permissions = Array.isArray(rawPerms) ? rawPerms : void 0;
  const grantedPerms = isSuperAdmin(adminRow.username) || !permissions ? ["*"] : (_a = normalizePermissions(permissions, { allowAll: true })) != null ? _a : [];
  if (grantedPerms.length === 0) {
    throw createError({
      statusCode: 403,
      message: isZh ? "\u5F53\u524D\u7BA1\u7406\u5458\u8D26\u53F7\u672A\u5206\u914D\u4EFB\u4F55\u540E\u53F0\u6743\u9650\uFF0C\u65E0\u6CD5\u7B7E\u53D1\u914D\u5BF9\u7801" : "Current admin account has no permissions to issue a pairing token"
    });
  }
  await db.update(adminTokens).set({ revoked: true }).where(
    and(
      eq(adminTokens.adminId, adminRow.id),
      eq(adminTokens.name, MOBILE_PAIR_TOKEN_NAME),
      eq(adminTokens.revoked, false)
    )
  );
  const now = /* @__PURE__ */ new Date();
  const [{ value: activeCount }] = await db.select({ value: count() }).from(adminTokens).where(
    and(
      eq(adminTokens.revoked, false),
      or(isNull(adminTokens.expiresAt), gt(adminTokens.expiresAt, now))
    )
  );
  if (activeCount >= MAX_ACTIVE_ADMIN_TOKENS) {
    throw createError({
      statusCode: 400,
      message: isZh ? `\u7CFB\u7EDF\u6709\u6548 Token \u5DF2\u8FBE\u4E0A\u9650\uFF08${MAX_ACTIVE_ADMIN_TOKENS} \u4E2A\uFF09\uFF0C\u8BF7\u5148\u5728\u300C\u8BBE\u7F6E \u2192 \u6388\u6743\u300D\u4E2D\u540A\u9500\u95F2\u7F6E Token` : `Maximum active system tokens (${MAX_ACTIVE_ADMIN_TOKENS}) reached \u2014 revoke an unused token first`
    });
  }
  const rawToken = `apay_admin_${crypto.randomBytes(32).toString("base64url")}`;
  const inserted = await db.insert(adminTokens).values({
    adminId: adminRow.id,
    token: rawToken,
    name: MOBILE_PAIR_TOKEN_NAME,
    permissions: grantedPerms,
    expiresAt: null
  }).returning();
  const { recommendedOrigin, candidateOrigins } = resolvePairingOrigins(event);
  setAuditMeta(event, {
    summary: `Generated mobile pairing token "${MOBILE_PAIR_TOKEN_NAME}"`,
    details: { name: MOBILE_PAIR_TOKEN_NAME, permissions: grantedPerms }
  });
  return {
    token: rawToken,
    recommendedOrigin,
    candidateOrigins,
    data: {
      id: (_b = inserted[0]) == null ? void 0 : _b.id,
      name: MOBILE_PAIR_TOKEN_NAME,
      adminUsername: adminRow.username,
      permissions: grantedPerms,
      createdAt: (_c = inserted[0]) == null ? void 0 : _c.createdAt,
      recommendedOrigin,
      candidateOrigins
    },
    message: isZh ? "\u624B\u673A\u7AEF\u914D\u5BF9\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210" : "Mobile pairing QR code generated"
  };
});

export { mobilePair_post as default };
//# sourceMappingURL=mobile-pair.post.mjs.map
