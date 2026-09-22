import { eq, and, gt, desc } from 'drizzle-orm';
import { b as db, z as subscriptions, p as products, t as toIsoTimestamp, aF as settings, e as createError, u as users } from '../nitro/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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
import 'zod';

const SHOPLY_FREE_PLAN_CODE = "free";
const SHOPLY_FREE_STORE_LIMIT_SETTING = "shoply_free_store_limit";
const DEFAULT_FREE_STORE_LIMIT = 1;
const MAX_STORE_LIMIT = 1e4;
const PLAN_CODE_PATTERN = /^[a-z0-9][a-z0-9_-]{0,63}$/;
const parseMeta = (value) => {
  if (value && typeof value === "object" && !Array.isArray(value)) return value;
  if (typeof value !== "string" || !value.trim()) return {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};
const parseStoreLimit = (value) => {
  if (value === null || value === void 0 || value === "") return null;
  const limit = Number(value);
  return Number.isInteger(limit) && limit >= 0 && limit <= MAX_STORE_LIMIT ? limit : null;
};
const readShoplyPlanMeta = (metaData) => {
  var _a;
  const meta = parseMeta(metaData);
  const planCode = String((_a = meta.shoply_plan_code) != null ? _a : "").trim().toLowerCase();
  if (!PLAN_CODE_PATTERN.test(planCode)) return null;
  return { planCode, storeLimit: parseStoreLimit(meta.shoply_store_limit) };
};
async function readFreeStoreLimit() {
  var _a, _b;
  const rows = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, SHOPLY_FREE_STORE_LIMIT_SETTING)).limit(1);
  return (_b = parseStoreLimit((_a = rows[0]) == null ? void 0 : _a.value)) != null ? _b : DEFAULT_FREE_STORE_LIMIT;
}
async function resolveShoplyEntitlement(userId, now = /* @__PURE__ */ new Date()) {
  var _a;
  const freeStoreLimit = await readFreeStoreLimit();
  const rows = await db.select({
    id: subscriptions.id,
    productId: products.id,
    productName: products.name,
    productMetaData: products.metaData,
    currentPeriodEnd: subscriptions.currentPeriodEnd,
    cancelAtPeriodEnd: subscriptions.cancelAtPeriodEnd
  }).from(subscriptions).innerJoin(products, eq(subscriptions.productId, products.id)).where(and(
    eq(subscriptions.userId, userId),
    eq(subscriptions.status, "active"),
    gt(subscriptions.currentPeriodEnd, now)
  )).orderBy(desc(subscriptions.currentPeriodEnd)).limit(5);
  for (const row of rows) {
    const plan = readShoplyPlanMeta(row.productMetaData);
    const currentPeriodEnd = toIsoTimestamp(row.currentPeriodEnd);
    if (!plan || !currentPeriodEnd) continue;
    return {
      source: "subscription",
      license: {
        planCode: plan.planCode,
        expireAt: currentPeriodEnd,
        maxStores: (_a = plan.storeLimit) != null ? _a : freeStoreLimit,
        version: Date.now()
      },
      subscription: {
        id: String(row.id),
        productId: Number(row.productId),
        productName: String(row.productName || ""),
        currentPeriodEnd,
        cancelAtPeriodEnd: Boolean(row.cancelAtPeriodEnd)
      }
    };
  }
  return {
    source: "free",
    license: {
      planCode: SHOPLY_FREE_PLAN_CODE,
      expireAt: null,
      maxStores: freeStoreLimit,
      version: Date.now()
    },
    subscription: null
  };
}

const MIN_SECRET_LENGTH = 32;
const isPrivateHost = (hostname) => hostname === "localhost" || hostname.endsWith(".local") || hostname === "::1" || hostname === "[::1]" || /^127\./.test(hostname) || /^10\./.test(hostname) || /^192\.168\./.test(hostname) || /^169\.254\./.test(hostname) || /^172\.(1[6-9]|2\d|3[01])\./.test(hostname);
const inspect = () => {
  const rawUrl = String(process.env.SHOPLY_PARTNER_API_URL || "").trim();
  const secret = String(process.env.SHOPLY_PARTNER_SECRET || "").trim();
  const fail = (problem, baseUrl2 = "") => ({
    connection: null,
    view: { configured: false, baseUrl: baseUrl2, problem }
  });
  if (!rawUrl) return fail("missing_url");
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return fail("invalid_url");
  }
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.search || url.hash) {
    return fail("invalid_url");
  }
  const baseUrl = url.toString().replace(/\/+$/, "");
  if (isPrivateHost(url.hostname.toLowerCase()) && process.env.SHOPLY_PARTNER_ALLOW_PRIVATE_NETWORK !== "true") {
    return fail("private_network", baseUrl);
  }
  if (!secret) return fail("missing_secret", baseUrl);
  if (secret.length < MIN_SECRET_LENGTH) return fail("weak_secret", baseUrl);
  return {
    connection: { baseUrl, secret },
    view: { configured: true, baseUrl, problem: "" }
  };
};
const getShoplyPartnerConnection = () => inspect().connection;

const encoder = new TextEncoder();
const toHex = (buffer) => Array.from(new Uint8Array(buffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
const sha256Hex = async (value) => toHex(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
const buildCanonical = async (method, action, timestamp, nonce, rawBody) => [
  method.toUpperCase(),
  action.replace(/^\/+|\/+$/g, ""),
  timestamp,
  nonce,
  await sha256Hex(rawBody)
].join("\n");
const signCanonical = async (secret, canonical) => {
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(canonical)));
};

const SHOPLY_PARTNER_ACTIONS = [
  "merchant/ensure",
  "license/sync",
  "store/list",
  "store/create",
  "store/admin-url",
  "category/list",
  "bind/challenge",
  "bind/verify",
  "bind/confirm"
];
const UPSTREAM_TIMEOUT_MS = 25e3;
const REJECT_REASONS = [
  [/limit of the current plan/i, "plan_limit"],
  [/limit of this account/i, "platform_limit"],
  [/name is already taken|duplicate/i, "name_taken"],
  [/domain is already taken/i, "domain_taken"],
  [/domain must be|domain is reserved/i, "domain_invalid"],
  [/in progress|being created|being processed|please retry/i, "busy"],
  [/no right/i, "forbidden"],
  [/disabled by the platform/i, "store_disabled"],
  [/must be|invalid|unavailable|not supported/i, "invalid_input"]
];
const createShoplyNotConfiguredError = () => createError({
  statusCode: 503,
  statusMessage: "Shoply store service is not configured: set SHOPLY_PARTNER_API_URL and SHOPLY_PARTNER_SECRET"
});
const createUpstreamError = (reason) => createError({
  statusCode: 502,
  statusMessage: `Shoply upstream failed: ${reason}`
});
const createRejectedError = (message) => {
  var _a, _b;
  const explicit = (_a = /^bind:([a-z_]+)$/.exec(message)) == null ? void 0 : _a[1];
  const reason = explicit || ((_b = REJECT_REASONS.find(([pattern]) => pattern.test(message))) == null ? void 0 : _b[1]) || "rejected";
  return createError({
    statusCode: 422,
    statusMessage: "Shoply rejected the request",
    data: { reason }
  });
};
const isRecord = (value) => Boolean(value) && typeof value === "object" && !Array.isArray(value);
async function callShoply(action, payload) {
  var _a;
  if (!SHOPLY_PARTNER_ACTIONS.includes(action)) {
    throw createUpstreamError("action is not allowed");
  }
  const connection = getShoplyPartnerConnection();
  if (!connection) throw createShoplyNotConfiguredError();
  const rawBody = JSON.stringify(payload);
  const timestamp = String(Math.floor(Date.now() / 1e3));
  const nonce = crypto.randomUUID();
  const signature = await signCanonical(connection.secret, await buildCanonical("POST", action, timestamp, nonce, rawBody));
  let response;
  try {
    response = await fetch(`${connection.baseUrl}/${action}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "APay-ShoplyTheme/1.0",
        "X-Partner-Key": "apay",
        "X-Partner-Timestamp": timestamp,
        "X-Partner-Nonce": nonce,
        "X-Partner-Signature": signature
      },
      body: rawBody,
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS)
    });
  } catch {
    throw createUpstreamError("network or timeout");
  }
  if (!response.ok) throw createUpstreamError(`http ${response.status}`);
  let body;
  try {
    body = await response.json();
  } catch {
    throw createUpstreamError("malformed response");
  }
  if (!isRecord(body)) throw createUpstreamError("malformed response");
  const code = Number(body.code);
  if (code === 0) return body.data;
  const message = typeof body.msg === "string" ? body.msg : "";
  if (code === 41 && /not configured|replay protection unavailable/i.test(message)) {
    throw createUpstreamError("partner integration is unavailable on Shoply");
  }
  if (code === 41 && message) throw createRejectedError(message);
  throw createUpstreamError(code === 50 ? "partner authentication rejected" : `business code ${String((_a = body.code) != null ? _a : "missing")}`);
}
const partnerIdentity = (user) => ({
  externalUserId: String(user.id),
  profile: { nickName: user.nickname, avatar: user.avatarUrl }
});
async function syncShoplyLicense(user, license, options) {
  var _a;
  const data = await callShoply("license/sync", {
    ...partnerIdentity(user),
    license,
    ensure: options.ensure,
    force: options.force
  });
  return {
    provisioned: data.provisioned === true,
    accepted: data.accepted === true,
    applied: Number((_a = data.applied) != null ? _a : 0) || 0,
    failed: Array.isArray(data.failed) ? data.failed.map(Number) : []
  };
}

async function pushShoplyLicense(userId, options) {
  if (!getShoplyPartnerConnection()) return { skipped: true, reason: "not_configured" };
  const rows = await db.select({
    id: users.id,
    email: users.email,
    nickname: users.nickname,
    avatarUrl: users.avatarUrl
  }).from(users).where(eq(users.id, userId)).limit(1);
  const user = rows[0];
  if (!user) return { skipped: true, reason: "user_not_found" };
  const entitlement = await resolveShoplyEntitlement(userId);
  const result = await syncShoplyLicense({
    id: Number(user.id),
    nickname: String(user.nickname || String(user.email || "").split("@")[0] || ""),
    avatarUrl: String(user.avatarUrl || "")
  }, entitlement.license, options);
  return { skipped: false, ...result };
}

function getThemeEventRules() {
  return [
    {
      key: "shoply:license_sync",
      event: "order.paid",
      theme: "shoply",
      label: "Shoply\uFF1A\u5957\u9910\u751F\u6548\u540E\u540C\u6B65\u5E97\u94FA\u6743\u76CA",
      description: "\u5E26 shoply_plan_code \u7684\u5957\u9910\u5546\u54C1\u652F\u4ED8\u6210\u529F\u540E\uFF0C\u628A\u7528\u6237\u5F53\u524D\u5957\u9910\u3001\u5230\u671F\u65F6\u95F4\u4E0E\u53EF\u5F00\u5E97\u6570\u63A8\u9001\u5230 Shoply \u5E97\u94FA\u3002",
      mode: "async",
      handler: async (payload) => {
        var _a;
        const order = payload && typeof payload === "object" ? payload : {};
        const userId = Number(order.userId || 0);
        const productId = Number(order.productId || 0);
        if (!userId || !productId) return { ok: true };
        const rows = await db.select({ metaData: products.metaData }).from(products).where(eq(products.id, productId)).limit(1);
        if (!readShoplyPlanMeta((_a = rows[0]) == null ? void 0 : _a.metaData)) return { ok: true };
        try {
          const result = await pushShoplyLicense(userId, { ensure: true, force: false });
          if (result.skipped) {
            console.warn(`[ShoplyLicense] order ${String(order.id)} skipped: ${result.reason}`);
            return { ok: result.reason !== "user_not_found" };
          }
          if (result.failed.length) {
            return { ok: false, errorMessage: `license not applied to stores ${result.failed.join(",")}` };
          }
          return { ok: true };
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          console.error(`[ShoplyLicense] order ${String(order.id)} push failed:`, message);
          return { ok: false, errorMessage: message };
        }
      }
    },
    {
      key: "shoply:license_revoke",
      event: "subscription.revoked",
      theme: "shoply",
      label: "Shoply\uFF1A\u8BA2\u9605\u88AB\u6536\u56DE\u540E\u540C\u6B65\u5E97\u94FA\u6743\u76CA",
      description: "\u8BA2\u5355\u9000\u6B3E\u5BFC\u81F4\u8BA2\u9605\u4F5C\u5E9F\u540E\uFF0C\u628A\u7528\u6237\u5F53\u524D\u6743\u76CA\uFF08\u901A\u5E38\u662F\u56DE\u843D\u514D\u8D39\u7248\uFF09\u63A8\u9001\u5230\u4ED6\u540D\u4E0B\u7684 Shoply \u5E97\u94FA\u3002",
      mode: "async",
      handler: async (payload) => {
        var _a;
        const input = payload && typeof payload === "object" ? payload : {};
        const userId = Number(input.userId || 0);
        const productId = Number(input.productId || 0);
        if (!userId) return { ok: true };
        if (productId) {
          const rows = await db.select({ metaData: products.metaData }).from(products).where(eq(products.id, productId)).limit(1);
          if (!readShoplyPlanMeta((_a = rows[0]) == null ? void 0 : _a.metaData)) return { ok: true };
        }
        try {
          const result = await pushShoplyLicense(userId, { ensure: false, force: false });
          if (result.skipped) return { ok: result.reason !== "user_not_found" };
          if (result.failed.length) {
            return { ok: false, errorMessage: `license not applied to stores ${result.failed.join(",")}` };
          }
          return { ok: true };
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          console.error(`[ShoplyLicense] revoke sync failed for user ${userId}:`, message);
          return { ok: false, errorMessage: message };
        }
      }
    }
  ];
}

export { getThemeEventRules };
