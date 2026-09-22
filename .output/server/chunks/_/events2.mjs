import { eq, and, inArray, desc } from 'drizzle-orm';
import { b as db, aF as settings, e as createError, cT as $fetch$1, z as subscriptions, p as products, cU as markTrialPaymentReceived, cV as beginTrialFulfillment, cW as completeTrialOrder, cX as failTrialOrder, cY as markTrialWalletEligible, u as users, bX as createNotification, cZ as formatTrialErrorMessage, bv as logger, o as orders } from '../nitro/nitro.mjs';
import postgres from 'postgres';
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

const normalizeEnv = (value) => (value || "").replace(/"/g, "").trim();
const resolveConnectionString = () => normalizeEnv(
  process.env.QINGPU_DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRESQL_URL || process.env.DATABASE_URL
);
const globalScope = globalThis;
const getQingpuSql = () => {
  if (globalScope.__qingpuSql) {
    return globalScope.__qingpuSql;
  }
  const connectionString = resolveConnectionString();
  if (!connectionString) {
    throw new Error("Missing QINGPU_DATABASE_URL or DATABASE_URL for qingpu theme database module.");
  }
  globalScope.__qingpuSql = postgres(connectionString, {
    prepare: false,
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10
  });
  return globalScope.__qingpuSql;
};
const qingpuSql = new Proxy((() => {
}), {
  apply(_target, thisArg, argArray) {
    return Reflect.apply(getQingpuSql(), thisArg, argArray);
  },
  get(_target, prop, receiver) {
    if (prop === "then" || prop === Symbol.toStringTag || prop === Symbol.toPrimitive) {
      return void 0;
    }
    return Reflect.get(getQingpuSql(), prop, receiver);
  }
});

const DEFAULT_PRICING_CONFIG_BASE = Object.freeze({
  exchangeRate: 12.5,
  // 类目匹配佣金更低时仍按 17% 核价，避免平台费用被低估。
  fallbackCommissionRate: 0.17,
  // 平台佣金默认 17%：对齐 Ozon 常见类目实际费率（lite 核价同用此默认）
  commissionRate: 0.17,
  // 手填运费没有可信默认值；承运商线路命中时由报价表计算，未命中时必须由用户实填并确认。
  freightCny: 0,
  domesticFeeCny: 2,
  profitRate: 0.2,
  frontDiscountRate: 0,
  storageFeeRub: 0,
  storageMonths: 1,
  adBudgetRub: 0,
  adRate: 0,
  otherRate: 0.03,
  returnRate: 0.05,
  packageWeightG: 0,
  lengthCm: 0,
  widthCm: 0,
  heightCm: 0,
  // 默认物流:GUOO 经济线(主力承运商)——新商品默认按它的费率核算建议价,
  // 不再落在「手动录入」的空费率上;存量商品已保存的选择不受影响
  logisticsProvider: "realfbs-guoo-economy",
  preferredMode: "RFBS",
  commissionCategoryPath: [],
  commissionCategoryLabels: [],
  commissionTierLabel: ""
});
function createDefaultPricingConfig(costPriceCny = 0) {
  return {
    costPriceCny,
    ...DEFAULT_PRICING_CONFIG_BASE,
    commissionCategoryPath: [...DEFAULT_PRICING_CONFIG_BASE.commissionCategoryPath],
    commissionCategoryLabels: [...DEFAULT_PRICING_CONFIG_BASE.commissionCategoryLabels]
  };
}

const IMAGE_SIZE_VALUES = [
  "auto",
  "1008x1344",
  "1024x1536",
  "768x1024",
  "1024x1024",
  "1536x1024"
];
const QUALITY_VALUES = ["auto", "low", "medium", "high"];
const DEFAULT_LISTING_MODEL_SETTINGS = {
  generalModelApiKey: "",
  generalModelBaseUrl: "",
  generalModelName: "qp-chat-1",
  imageModelName: "qp-image-2",
  imageGenSize: "1008x1344",
  imageGenQuality: "medium",
  imageProviderProfiles: [],
  activeImageProfileId: "",
  videoModelName: "qp-video-1",
  videoGenQuality: "medium",
  translationModelName: "qp-translate-1"
};
createDefaultPricingConfig();
const trimString = (value) => String(value || "").trim();
const normalizeBaseUrl = (value) => trimString(value).replace(/\/+$/, "");
const pickImageSize = (value) => IMAGE_SIZE_VALUES.includes(value) ? value : DEFAULT_LISTING_MODEL_SETTINGS.imageGenSize;
const pickQuality = (value) => QUALITY_VALUES.includes(value) ? value : DEFAULT_LISTING_MODEL_SETTINGS.imageGenQuality;
const normalizeImageProviderProfiles = (value) => {
  if (!Array.isArray(value)) return [];
  return value.map((item) => {
    if (!item || typeof item !== "object") return null;
    const source = item;
    const id = trimString(source.id);
    const name = trimString(source.name);
    if (!id || !name) return null;
    const size = IMAGE_SIZE_VALUES.includes(source.size) ? source.size : void 0;
    const quality = QUALITY_VALUES.includes(source.quality) ? source.quality : void 0;
    return {
      id,
      name,
      model: trimString(source.model) || void 0,
      size,
      quality
    };
  }).filter((item) => Boolean(item));
};
const normalizeListingModelSettings = (value) => {
  const input = value && typeof value === "object" ? value : {};
  return {
    generalModelApiKey: trimString(input.generalModelApiKey),
    generalModelBaseUrl: normalizeBaseUrl(input.generalModelBaseUrl),
    generalModelName: trimString(input.generalModelName) || DEFAULT_LISTING_MODEL_SETTINGS.generalModelName,
    imageModelName: trimString(input.imageModelName) || DEFAULT_LISTING_MODEL_SETTINGS.imageModelName,
    imageGenSize: pickImageSize(input.imageGenSize),
    imageGenQuality: pickQuality(input.imageGenQuality),
    imageProviderProfiles: normalizeImageProviderProfiles(input.imageProviderProfiles),
    activeImageProfileId: trimString(input.activeImageProfileId),
    videoModelName: trimString(input.videoModelName) || DEFAULT_LISTING_MODEL_SETTINGS.videoModelName,
    videoGenQuality: pickQuality(input.videoGenQuality),
    translationModelName: trimString(input.translationModelName) || DEFAULT_LISTING_MODEL_SETTINGS.translationModelName
  };
};
const normalizeQingpuUserSettings = (value) => value && typeof value === "object" ? value : {};

const getQingpuSettingsByUser = async (userId) => {
  var _a;
  if (!Number.isFinite(userId) || userId <= 0) {
    return normalizeQingpuUserSettings(void 0);
  }
  const rows = await qingpuSql`
    select *
    from qingpu_settings
    where user_id = ${userId}
    limit 1
  `;
  return normalizeQingpuUserSettings((_a = rows[0]) == null ? void 0 : _a.config);
};
const upsertQingpuSettingsByUser = async (userId, input) => {
  const normalized = normalizeQingpuUserSettings(input);
  await qingpuSql`
    insert into qingpu_settings (
      user_id,
      config,
      created_at,
      updated_at
    )
    values (
      ${userId},
      ${qingpuSql.json(normalized)},
      now(),
      now()
    )
    on conflict (user_id) do update
    set
      config = excluded.config,
      updated_at = now()
  `;
  return normalized;
};
const getListingModelSettingsByUser = async (userId) => {
  var _a;
  const settings = await getQingpuSettingsByUser(userId);
  return {
    ...DEFAULT_LISTING_MODEL_SETTINGS,
    ...normalizeListingModelSettings(((_a = settings.listing) == null ? void 0 : _a.modelSettings) || {})
  };
};
const updateListingModelSettingsByUser = async (userId, input) => {
  var _a;
  const current = await getQingpuSettingsByUser(userId);
  const currentModelSettings = normalizeListingModelSettings(((_a = current.listing) == null ? void 0 : _a.modelSettings) || {});
  const nextModelSettings = normalizeListingModelSettings({
    ...currentModelSettings,
    ...input && typeof input === "object" ? input : {}
  });
  const nextSettings = {
    ...current,
    listing: {
      ...current.listing || {},
      modelSettings: nextModelSettings
    }
  };
  await upsertQingpuSettingsByUser(userId, nextSettings);
  return nextModelSettings;
};

const QINGPU_AINODE_TENANT_TOKEN_SETTING_KEY = "qingpu_ainode_tenant_token";
const QINGPU_AINODE_BASE_URL_SETTING_KEY = "qingpu_ainode_base_url";
const DEFAULT_QINGPU_AINODE_BASE_URL = "https://api.ainode.run";
const normalizeQingpuAINodeBaseUrl = (value) => {
  const raw = String(value || "").trim();
  let url;
  try {
    url = new URL(raw || DEFAULT_QINGPU_AINODE_BASE_URL);
  } catch {
    throw createError({ statusCode: 400, message: "\u8BF7\u8F93\u5165\u6709\u6548\u7684 AINode Base URL" });
  }
  const isLocalHttp = url.protocol === "http:" && ["127.0.0.1", "localhost", "::1"].includes(url.hostname);
  if (url.protocol !== "https:" && !isLocalHttp || url.username || url.password || url.search || url.hash) {
    throw createError({ statusCode: 400, message: "AINode Base URL \u5FC5\u987B\u4F7F\u7528 HTTPS\uFF08\u672C\u673A\u8C03\u8BD5\u53EF\u7528 HTTP\uFF09" });
  }
  if (url.pathname !== "/" && url.pathname !== "") {
    throw createError({ statusCode: 400, message: "AINode Base URL \u4E0D\u80FD\u5305\u542B\u8DEF\u5F84" });
  }
  return url.origin;
};
async function getQingpuAINodeBaseUrl() {
  var _a;
  const rows = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, QINGPU_AINODE_BASE_URL_SETTING_KEY)).limit(1);
  return normalizeQingpuAINodeBaseUrl(((_a = rows[0]) == null ? void 0 : _a.value) || DEFAULT_QINGPU_AINODE_BASE_URL);
}
async function getQingpuAINodeTenantToken() {
  var _a;
  const rows = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, QINGPU_AINODE_TENANT_TOKEN_SETTING_KEY)).limit(1);
  return String(((_a = rows[0]) == null ? void 0 : _a.value) || "").trim() || null;
}

const AINODE_MODEL_GROUP_ID = 6;
function createAINodeKeyError(stage, message) {
  return createError({ statusCode: 502, message, data: { stage } });
}
const AINODE_USER_ID_CACHE_TTL = 10 * 60 * 1e3;
const AINODE_PROVISION_BUDGET_MS = 2e4;
const AINODE_IDENTITY_BUDGET_MS = 12e3;
const AINODE_IDENTITY_TIMEOUT_MS = 6e3;
const AINODE_KEY_STEP_TIMEOUT_MS = 8e3;
const AINODE_IDENTITY_MAX_ATTEMPTS = 3;
const AINODE_IDENTITY_BACKOFF_MS = [400, 1200];
const AINODE_USER_ID_CACHE_MAX = 1e3;
const ainodeUserIdCache = /* @__PURE__ */ new Map();
const ainodeUserIdPending = /* @__PURE__ */ new Map();
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function remainingBudgetMs(deadline) {
  return deadline === void 0 ? Number.POSITIVE_INFINITY : deadline - Date.now();
}
function stepTimeoutMs(limitMs, deadline) {
  return Math.min(limitMs, remainingBudgetMs(deadline));
}
function isRetryableFetchError(err) {
  var _a, _b, _c;
  const status = Number((_c = (_b = err == null ? void 0 : err.status) != null ? _b : (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.status) != null ? _c : err == null ? void 0 : err.statusCode);
  if (Number.isFinite(status) && status > 0) return status >= 500 || status === 429;
  return true;
}
function cacheAINodeUserId(cacheKey, userId) {
  const now = Date.now();
  for (const [key, value] of ainodeUserIdCache) {
    if (value.expiresAt <= now) ainodeUserIdCache.delete(key);
  }
  while (ainodeUserIdCache.size >= AINODE_USER_ID_CACHE_MAX) {
    const oldestKey = ainodeUserIdCache.keys().next().value;
    if (!oldestKey) break;
    ainodeUserIdCache.delete(oldestKey);
  }
  ainodeUserIdCache.set(cacheKey, {
    userId,
    expiresAt: now + AINODE_USER_ID_CACHE_TTL
  });
}
function describeFetchError(err) {
  var _a, _b, _c, _d, _e, _f, _g;
  const status = (_c = (_b = err == null ? void 0 : err.status) != null ? _b : (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.status) != null ? _c : err == null ? void 0 : err.statusCode;
  const data = (_e = err == null ? void 0 : err.data) != null ? _e : (_d = err == null ? void 0 : err.response) == null ? void 0 : _d._data;
  const cause = ((_f = err == null ? void 0 : err.cause) == null ? void 0 : _f.message) || ((_g = err == null ? void 0 : err.cause) == null ? void 0 : _g.code);
  const parts = [
    status !== void 0 ? `status=${status}` : null,
    data ? `data=${typeof data === "string" ? data.slice(0, 300) : JSON.stringify(data).slice(0, 300)}` : null,
    cause ? `cause=${cause}` : null,
    !status && !data && !cause ? `raw=${err == null ? void 0 : err.message}` : null
  ].filter(Boolean);
  return parts.join(" ") || String(err);
}
async function resolveAINodeUserId(gatewayUrl, email, deadline) {
  const normalizedGatewayUrl = String(gatewayUrl || "").trim().replace(/\/+$/, "");
  const normalizedEmail = String(email || "").trim().toLowerCase();
  if (!normalizedGatewayUrl || !normalizedEmail) {
    throw new Error("find-or-create requires gateway URL and email");
  }
  const cacheKey = `${normalizedGatewayUrl}|${normalizedEmail}`;
  const cached = ainodeUserIdCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.userId;
  const pending = ainodeUserIdPending.get(cacheKey);
  if (pending) return pending;
  const request = (async () => {
    var _a, _b, _c, _d;
    let lastFailure = "";
    const tenantToken = await getQingpuAINodeTenantToken();
    for (let attempt = 1; attempt <= AINODE_IDENTITY_MAX_ATTEMPTS; attempt++) {
      if (attempt > 1) {
        const backoffMs = (_a = AINODE_IDENTITY_BACKOFF_MS[attempt - 2]) != null ? _a : 0;
        if (remainingBudgetMs(deadline) <= backoffMs) break;
        await sleep(backoffMs);
      }
      const timeoutMs = stepTimeoutMs(AINODE_IDENTITY_TIMEOUT_MS, deadline);
      if (timeoutMs <= 0) break;
      const headers = {
        "Content-Type": "application/json"
      };
      if (tenantToken) {
        headers["Authorization"] = `Bearer ${tenantToken}`;
      }
      try {
        const tenantRes = await $fetch$1(`${normalizedGatewayUrl}/api/tenant/users/by-email/wallet`, {
          method: "PUT",
          headers,
          body: { email: normalizedEmail },
          signal: AbortSignal.timeout(timeoutMs)
        });
        const envelope = (tenantRes == null ? void 0 : tenantRes.data) || tenantRes;
        const resolvedId = Number((envelope == null ? void 0 : envelope.userId) || (envelope == null ? void 0 : envelope.id));
        if (Number.isInteger(resolvedId) && resolvedId > 0) {
          cacheAINodeUserId(cacheKey, resolvedId);
          return resolvedId;
        }
      } catch (err) {
      }
      const endpoint = `${normalizedGatewayUrl}/api/auth/find-or-create`;
      try {
        const res = await $fetch$1(endpoint, {
          method: "POST",
          headers,
          body: { email: normalizedEmail, password: `${normalizedEmail}:qingpu` },
          signal: AbortSignal.timeout(timeoutMs)
        });
        const resolvedId = Number(((_b = res == null ? void 0 : res.user) == null ? void 0 : _b.id) || ((_d = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.user) == null ? void 0 : _d.id) || (res == null ? void 0 : res.id));
        if (Number.isInteger(resolvedId) && resolvedId > 0) {
          cacheAINodeUserId(cacheKey, resolvedId);
          return resolvedId;
        }
      } catch (err) {
        lastFailure = describeFetchError(err);
        console.error(`resolveAINodeUserId attempt ${attempt}/${AINODE_IDENTITY_MAX_ATTEMPTS} failed for ainode user (${normalizedEmail}) at ${endpoint}: ${lastFailure}`);
        if (!isRetryableFetchError(err)) break;
        continue;
      }
    }
    throw new Error(`find-or-create request failed: ${lastFailure || "provisioning budget exhausted before any attempt ran"}`);
  })().finally(() => {
    ainodeUserIdPending.delete(cacheKey);
  });
  ainodeUserIdPending.set(cacheKey, request);
  return request;
}
async function ensureAINodeApiKey(userId, email) {
  var _a;
  const startedAt = Date.now();
  const deadline = startedAt + AINODE_PROVISION_BUDGET_MS;
  const identityDeadline = Math.min(deadline, startedAt + AINODE_IDENTITY_BUDGET_MS);
  const gatewayUrl = await getQingpuAINodeBaseUrl();
  const tenantToken = await getQingpuAINodeTenantToken();
  if (!tenantToken) {
    throw createAINodeKeyError("config", "\u83B7\u53D6 AI \u5BC6\u94A5\u5931\u8D25\uFF08\u7F51\u5173\u672A\u914D\u7F6E\uFF09");
  }
  let ainodeUserId;
  try {
    ainodeUserId = await resolveAINodeUserId(gatewayUrl, email, identityDeadline);
  } catch (err) {
    throw createAINodeKeyError("identity", "\u83B7\u53D6 AI \u5BC6\u94A5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  }
  const headers = {
    Authorization: `Bearer ${tenantToken}`,
    "X-Internal-User-Id": String(ainodeUserId),
    "X-Internal-User-Email": email
  };
  let listRes;
  const listTimeoutMs = stepTimeoutMs(AINODE_KEY_STEP_TIMEOUT_MS, deadline);
  if (listTimeoutMs <= 0) {
    console.error(`[qingpu ensureAINodeApiKey] budget exhausted before api-keys/list for ainode user ${ainodeUserId} (${email})`);
    throw createAINodeKeyError("list", "\u83B7\u53D6 AI \u5BC6\u94A5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  }
  try {
    listRes = await $fetch$1(`${gatewayUrl}/api/site/api-keys/list`, {
      headers,
      signal: AbortSignal.timeout(listTimeoutMs)
    });
  } catch (err) {
    console.error(`[qingpu ensureAINodeApiKey] api-keys/list failed for ainode user ${ainodeUserId} (${email}) at ${gatewayUrl}: ${describeFetchError(err)}`);
    throw createAINodeKeyError("list", "\u83B7\u53D6 AI \u5BC6\u94A5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  }
  const existing = ((listRes == null ? void 0 : listRes.data) || []).find((key) => key.status === "active" && key.groupId === AINODE_MODEL_GROUP_ID);
  if (existing == null ? void 0 : existing.rawKey) {
    return { apiKey: existing.rawKey, baseUrl: gatewayUrl };
  }
  const createTimeoutMs = stepTimeoutMs(AINODE_KEY_STEP_TIMEOUT_MS, deadline);
  if (createTimeoutMs <= 0) {
    console.error(`[qingpu ensureAINodeApiKey] budget exhausted before api-keys/create for ainode user ${ainodeUserId} (${email})`);
    throw createAINodeKeyError("create", "\u83B7\u53D6 AI \u5BC6\u94A5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  }
  try {
    const createRes = await $fetch$1(`${gatewayUrl}/api/site/api-keys/create`, {
      method: "POST",
      headers,
      body: { name: "\u8F7B\u94FAAI-\u81EA\u52A8\u6388\u6743", groupId: AINODE_MODEL_GROUP_ID },
      signal: AbortSignal.timeout(createTimeoutMs)
    });
    if (!((_a = createRes == null ? void 0 : createRes.data) == null ? void 0 : _a.rawKey)) {
      throw new Error(`/api/site/api-keys/create, raw=${JSON.stringify(createRes).slice(0, 300)}`);
    }
    return { apiKey: createRes.data.rawKey, baseUrl: gatewayUrl };
  } catch (err) {
    console.error(`[qingpu ensureAINodeApiKey] api-keys/create failed for ainode user ${ainodeUserId} (${email}): ${describeFetchError(err)}`);
    throw createAINodeKeyError("create", "\u83B7\u53D6 AI \u5BC6\u94A5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
  }
}
async function persistModelCredentials(userId, apiKey, baseUrl, options = {}) {
  if (!apiKey) return false;
  try {
    const current = await getListingModelSettingsByUser(userId);
    if (!options.overwrite && String((current == null ? void 0 : current.generalModelApiKey) || "").trim()) return true;
    await updateListingModelSettingsByUser(userId, {
      generalModelApiKey: apiKey,
      ...baseUrl ? { generalModelBaseUrl: baseUrl } : {}
    });
    return true;
  } catch (error) {
    console.error("[qingpu persistModelCredentials] failed (non-fatal):", error);
    return false;
  }
}

const USER_GRANT_CATALOG = Object.freeze([
  {
    key: "listing.enabled",
    label: "\u4E0A\u54C1\u5DE5\u4F5C\u53F0",
    description: "\u662F\u5426\u5141\u8BB8\u8BBF\u95EE Qingpu \u4E0A\u54C1\u5DE5\u4F5C\u53F0\u4E0E Listing API",
    valueType: "boolean",
    defaultValue: false,
    subscriptionDefaultValue: true,
    productMetaKey: "listing_enabled",
    public: true
  },
  {
    key: "studio.enabled",
    label: "Studio \u521B\u4F5C\u4E2D\u5FC3",
    description: "\u662F\u5426\u5141\u8BB8\u8BBF\u95EE Qingpu Studio API \u4E0E\u521B\u4F5C\u5DE5\u4F5C\u53F0",
    valueType: "boolean",
    defaultValue: false,
    subscriptionDefaultValue: true,
    productMetaKey: "studio_enabled",
    public: true
  },
  {
    key: "ops.enabled",
    label: "\u8DE8\u5883\u5E97\u94FA\u8FD0\u8425",
    description: "\u662F\u5426\u5141\u8BB8\u8BBF\u95EE \u8DE8\u5883\u5E97\u94FA\u8FD0\u8425\u8FD0\u8425\u4E0E\u5728\u7EBF\u5546\u54C1 API",
    valueType: "boolean",
    defaultValue: false,
    subscriptionDefaultValue: true,
    productMetaKey: "ops_enabled",
    public: true
  },
  {
    key: "stores.max_count",
    label: "\u5E97\u94FA\u6570\u4E0A\u9650",
    description: "\u53EF\u521B\u5EFA\u7684\u542F\u7528\u5E97\u94FA\u6570\u91CF\uFF1Bnull \u8868\u793A\u4E0D\u9650\u5236",
    valueType: "limit",
    defaultValue: null,
    productMetaKey: "max_stores",
    public: true
  },
  {
    key: "employees.max_count",
    label: "\u5458\u5DE5\u6570\u4E0A\u9650",
    description: "\u53EF\u521B\u5EFA\u7684\u542F\u7528\u5458\u5DE5\u6570\u91CF\uFF1Bnull \u8868\u793A\u4E0D\u9650\u5236",
    valueType: "limit",
    defaultValue: null,
    productMetaKey: "max_employees",
    public: true
  }
]);
const definitionByKey = new Map(USER_GRANT_CATALOG.map((definition) => [definition.key, definition]));
const getUserGrantDefinition = (key) => definitionByKey.get(key);
const validateUserGrantValue = (key, value) => {
  const definition = getUserGrantDefinition(key);
  if (definition.valueType === "boolean") {
    if (typeof value !== "boolean") throw new Error(`${key} \u5FC5\u987B\u662F\u5E03\u5C14\u503C`);
    return value;
  }
  if (value === null) return null;
  if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
    throw new Error(`${key} \u5FC5\u987B\u662F\u975E\u8D1F\u6574\u6570\u6216 null`);
  }
  return value;
};
const readProductMetaUserGrantValue = (definition, meta) => {
  const raw = meta[definition.productMetaKey];
  if (definition.valueType === "boolean") {
    if (raw === null || raw === void 0 || raw === "") return void 0;
    if (typeof raw === "boolean") return raw;
    if (typeof raw === "number") return raw === 1 ? true : raw === 0 ? false : void 0;
    const normalized2 = String(raw).trim().toLowerCase();
    if (["true", "1", "yes"].includes(normalized2)) return true;
    if (["false", "0", "no"].includes(normalized2)) return false;
    return void 0;
  }
  if (raw === void 0) return void 0;
  if (raw === null || raw === "") return null;
  const normalized = typeof raw === "string" ? raw.trim() : raw;
  if (normalized === "") return null;
  const parsed = typeof normalized === "number" ? normalized : Number(normalized);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : null;
};
const defaultUserGrantValues = () => Object.fromEntries(USER_GRANT_CATALOG.map((definition) => [definition.key, definition.defaultValue]));

const PLAN_CACHE_TTL_MS = 5 * 60 * 1e3;
let planCache = null;
const parseMeta = (raw) => {
  if (!raw) return {};
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) || {};
    } catch {
      return {};
    }
  }
  return typeof raw === "object" ? raw : {};
};
const readBoolean = (value) => {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value === 1;
  const normalized = String(value != null ? value : "").trim().toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes";
};
const listingEnabledGrant = getUserGrantDefinition("listing.enabled");
const studioEnabledGrant = getUserGrantDefinition("studio.enabled");
const opsEnabledGrant = getUserGrantDefinition("ops.enabled");
const maxStoresGrant = getUserGrantDefinition("stores.max_count");
const maxEmployeesGrant = getUserGrantDefinition("employees.max_count");
const hasIntervalHint = (row, meta) => {
  const interval = String(meta.interval || "").trim().toLowerCase();
  if (interval === "year" || interval === "month") return true;
  const haystack = `${(row == null ? void 0 : row.slug) || ""} ${(row == null ? void 0 : row.name) || ""}`.toLowerCase();
  return /(yearly|annually|annual|year|monthly|month|每年|年付|每月|月付)/.test(haystack);
};
const isQingpuPlanProduct = (row) => {
  const meta = parseMeta(row.metaData);
  const type = String(row.type || "");
  if (type === "subscription") {
    return readBoolean(meta.is_pricing_plan) || Boolean(meta.pricing_group || meta.plan_group) || hasIntervalHint(row, meta);
  }
  if (type === "topup") {
    if (meta.show_in_pricing !== void 0) return readBoolean(meta.show_in_pricing);
    if (meta.is_pricing_plan !== void 0) return readBoolean(meta.is_pricing_plan);
    return true;
  }
  return false;
};
async function getQingpuPlanProducts() {
  if (planCache && planCache.expiresAt > Date.now()) return planCache.value;
  const rows = await db.select({
    id: products.id,
    slug: products.slug,
    name: products.name,
    price: products.price,
    type: products.type,
    isActive: products.isActive,
    description: products.description,
    metaData: products.metaData
  }).from(products);
  const value = rows.filter((row) => isQingpuPlanProduct(row)).map((row) => {
    const meta = parseMeta(row.metaData);
    let interval = String(meta.interval || "").trim().toLowerCase();
    if (!interval) {
      const haystack = `${(row == null ? void 0 : row.slug) || ""} ${(row == null ? void 0 : row.name) || ""}`.toLowerCase();
      if (/(yearly|annually|annual|year|每年|年付)/.test(haystack)) interval = "year";
      else if (/(monthly|month|每月|月付)/.test(haystack)) interval = "month";
    }
    return {
      id: Number(row.id),
      slug: String(row.slug || ""),
      name: String(row.name || ""),
      price: Number(row.price || 0),
      type: String(row.type || ""),
      isActive: row.isActive !== false,
      description: String(row.description || ""),
      interval: interval || void 0,
      originalPrice: meta.original_price ? Number(meta.original_price) : void 0,
      level: Number(meta.level || 0),
      grantAmount: Number(meta.grant_amount || 0),
      listingEnabled: readProductMetaUserGrantValue(listingEnabledGrant, meta),
      studioEnabled: readProductMetaUserGrantValue(studioEnabledGrant, meta),
      opsEnabled: readProductMetaUserGrantValue(opsEnabledGrant, meta),
      maxStores: readProductMetaUserGrantValue(maxStoresGrant, meta),
      maxEmployees: readProductMetaUserGrantValue(maxEmployeesGrant, meta)
    };
  });
  planCache = { value, expiresAt: Date.now() + PLAN_CACHE_TTL_MS };
  return value;
}
async function getPlanNameById() {
  const plans = await getQingpuPlanProducts();
  return new Map(plans.map((plan) => [plan.id, plan]));
}
async function getSubscriptionBriefsByUserIds(userIds, productIds) {
  if (userIds.length === 0 || (productIds == null ? void 0 : productIds.length) === 0) return /* @__PURE__ */ new Map();
  const rows = await db.select({
    id: subscriptions.id,
    userId: subscriptions.userId,
    productId: subscriptions.productId,
    status: subscriptions.status,
    amount: subscriptions.amount,
    currency: subscriptions.currency,
    currentPeriodEnd: subscriptions.currentPeriodEnd,
    cancelAtPeriodEnd: subscriptions.cancelAtPeriodEnd
  }).from(subscriptions).where(and(
    inArray(subscriptions.userId, userIds),
    productIds ? inArray(subscriptions.productId, productIds) : void 0
  ));
  const best = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const userId = Number(row.userId);
    if (!userId) continue;
    const periodEnd = row.currentPeriodEnd ? new Date(row.currentPeriodEnd) : null;
    const brief = {
      id: String(row.id),
      userId,
      productId: row.productId === null || row.productId === void 0 ? null : Number(row.productId),
      status: String(row.status || ""),
      amount: Number(row.amount || 0),
      currency: String(row.currency || "USD").toUpperCase(),
      currentPeriodEnd: periodEnd && !Number.isNaN(periodEnd.getTime()) ? periodEnd.toISOString() : null,
      cancelAtPeriodEnd: Boolean(row.cancelAtPeriodEnd),
      autoRenew: String(row.status || "") === "active" && !row.cancelAtPeriodEnd
    };
    const current = best.get(userId);
    if (!current) {
      best.set(userId, brief);
      continue;
    }
    const currentEnd = current.currentPeriodEnd ? Date.parse(current.currentPeriodEnd) : Number.POSITIVE_INFINITY;
    const nextEnd = brief.currentPeriodEnd ? Date.parse(brief.currentPeriodEnd) : Number.POSITIVE_INFINITY;
    const currentRank = current.status === "active" && currentEnd > Date.now() ? 2 : current.status === "active" ? 1 : 0;
    const nextRank = brief.status === "active" && nextEnd > Date.now() ? 2 : brief.status === "active" ? 1 : 0;
    if (nextRank > currentRank) {
      best.set(userId, brief);
    } else if (nextRank === currentRank) {
      if (nextEnd > currentEnd) best.set(userId, brief);
    }
  }
  return best;
}

const listActiveUserGrants = async (userId) => qingpuSql`
    select *
    from qingpu_user_grants
    where user_id = ${userId}
      and status = 'active'
      and starts_at <= now()
      and (expires_at is null or expires_at > now())
    order by starts_at desc, created_at desc, id desc
  `;
const createUserGrant = async (input) => qingpuSql.begin(async (sql) => {
  await sql`select pg_advisory_xact_lock(hashtext('qingpu:user-grant'), ${input.userId})`;
  await sql`
      update qingpu_user_grants
      set status = 'revoked',
          revoked_at = now(),
          revoked_by_admin_id = ${input.adminId},
          revoked_reason = 'superseded',
          updated_at = now()
      where user_id = ${input.userId}
        and grant_key = ${input.key}
        and status = 'active'
    `;
  const rows = await sql`
      insert into qingpu_user_grants (
        user_id, grant_key, value_json, source, starts_at, expires_at,
        status, reason, created_by_admin_id, created_at, updated_at
      ) values (
        ${input.userId}, ${input.key}, ${sql.json(input.value)}, ${input.source}, now(),
        ${input.expiresAt}, 'active', ${input.reason}, ${input.adminId}, now(), now()
      )
      returning *
    `;
  return rows[0];
});

const isoOrNull = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
};
const isSubscriptionCurrent = (status, currentPeriodEnd) => {
  if (status !== "active") return false;
  return !currentPeriodEnd || Date.parse(currentPeriodEnd) > Date.now();
};
const applyStoredGrant = (values, grants, row, hasActiveSubscription = false) => {
  var _a;
  try {
    const value = validateUserGrantValue(row.grant_key, row.value_json);
    if (hasActiveSubscription && (row.source === "promotion" || ((_a = row.reason) == null ? void 0 : _a.startsWith("trial-order:")))) {
      return;
    }
    values[row.grant_key] = value;
    grants[row.grant_key] = {
      key: row.grant_key,
      value,
      source: "user_grant",
      grantId: Number(row.id),
      expiresAt: isoOrNull(row.expires_at)
    };
  } catch (error) {
    console.warn("[qingpu/user-grants] ignored invalid stored grant:", error instanceof Error ? error.message : String(error));
  }
};
async function resolveEffectiveUserGrants(userId) {
  const values = defaultUserGrantValues();
  const grants = Object.fromEntries(USER_GRANT_CATALOG.map((definition) => [definition.key, {
    key: definition.key,
    value: definition.defaultValue,
    source: "default",
    grantId: null,
    expiresAt: null
  }]));
  const [planById, activeRows] = await Promise.all([
    getPlanNameById(),
    listActiveUserGrants(userId)
  ]);
  const subscriptionPlanById = new Map(
    [...planById].filter(([, plan]) => plan.type === "subscription")
  );
  const subscription = await getSubscriptionBriefsByUserIds(
    [userId],
    [...subscriptionPlanById.keys()]
  ).then((result) => result.get(userId) || null);
  let subscriptionSummary = null;
  if ((subscription == null ? void 0 : subscription.productId) && isSubscriptionCurrent(subscription.status, subscription.currentPeriodEnd)) {
    const plan = subscriptionPlanById.get(subscription.productId);
    if (plan) {
      const planValues = {
        "listing.enabled": plan.listingEnabled,
        "studio.enabled": plan.studioEnabled,
        "ops.enabled": plan.opsEnabled,
        "stores.max_count": plan.maxStores,
        "employees.max_count": plan.maxEmployees
      };
      for (const definition of USER_GRANT_CATALOG) {
        const value = planValues[definition.key] === void 0 ? definition.subscriptionDefaultValue : planValues[definition.key];
        if (value === void 0 || value === null && definition.valueType === "boolean") continue;
        values[definition.key] = value != null ? value : null;
        grants[definition.key] = {
          key: definition.key,
          value: value != null ? value : null,
          source: "subscription",
          grantId: null,
          expiresAt: subscription.currentPeriodEnd
        };
      }
      subscriptionSummary = {
        id: subscription.id,
        productId: subscription.productId,
        planName: plan.name,
        currentPeriodEnd: subscription.currentPeriodEnd
      };
    }
  }
  const hasActiveSubscription = Boolean(subscriptionSummary);
  for (const row of [...activeRows].reverse()) applyStoredGrant(values, grants, row, hasActiveSubscription);
  return { userId, values, grants, subscription: subscriptionSummary };
}

const QINGPU_TRIAL_ORDER_SOURCE = "qingpu_trial";
const markQingpuTrialPaymentReceived = (orderId) => markTrialPaymentReceived(orderId, QINGPU_TRIAL_ORDER_SOURCE, "qingpuTrial");
const beginQingpuTrialFulfillment = (orderId, adminId) => beginTrialFulfillment(orderId, adminId, QINGPU_TRIAL_ORDER_SOURCE, "qingpuTrial");
const completeQingpuTrialOrder = (orderId) => completeTrialOrder(orderId, "qingpuTrial");
const failQingpuTrialOrder = (orderId, error) => failTrialOrder(orderId, error, "qingpuTrial");
const markQingpuTrialWalletEligible = (orderId) => markTrialWalletEligible(orderId, "qingpuTrial");

const AINODE_SITE_TIMEOUT_MS = 15e3;
async function getAINodeProxyHeaders(userId) {
  const rows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const user = rows[0];
  if (!(user == null ? void 0 : user.email)) {
    throw createError({ statusCode: 404, message: "User not found" });
  }
  const [gatewayUrl, tenantToken] = await Promise.all([
    getQingpuAINodeBaseUrl(),
    getQingpuAINodeTenantToken()
  ]);
  if (!tenantToken) {
    throw createError({ statusCode: 502, message: "Qingpu AINode tenant token not configured" });
  }
  const ainodeUserId = await resolveAINodeUserId(
    gatewayUrl,
    user.email
  );
  return {
    gatewayUrl,
    headers: {
      Authorization: `Bearer ${tenantToken}`,
      "X-Internal-User-Id": String(ainodeUserId),
      "X-Internal-User-Email": user.email
    }
  };
}
function extractErrorMessage(error) {
  var _a, _b, _c;
  const data = (_b = error == null ? void 0 : error.data) != null ? _b : (_a = error == null ? void 0 : error.response) == null ? void 0 : _a._data;
  if (typeof data === "object" && data !== null) {
    if (typeof data.error === "object" && ((_c = data.error) == null ? void 0 : _c.message)) return String(data.error.message);
    if (typeof data.error === "string" && data.error) return data.error;
    if (data.message) return String(data.message);
    if (data.msg) return String(data.msg);
  }
  return (error == null ? void 0 : error.statusMessage) || (error == null ? void 0 : error.message) || "AINode request failed";
}
async function fetchAINodeSiteData(userId, path) {
  var _a;
  let targetUrl = "";
  let targetEmail = "";
  try {
    const { gatewayUrl, headers } = await getAINodeProxyHeaders(userId);
    targetUrl = `${gatewayUrl}${path}`;
    targetEmail = headers["X-Internal-User-Email"] || "";
    return await $fetch(targetUrl, {
      headers,
      signal: AbortSignal.timeout(AINODE_SITE_TIMEOUT_MS)
    });
  } catch (error) {
    const statusCode = Number((error == null ? void 0 : error.statusCode) || (error == null ? void 0 : error.status) || ((_a = error == null ? void 0 : error.response) == null ? void 0 : _a.status) || 502);
    const rawMessage = extractErrorMessage(error);
    const detailMsg = `AINode request failed [${statusCode}] for ${targetEmail || `user:${userId}`} at ${targetUrl || path}: ${rawMessage}`;
    console.error(detailMsg, (error == null ? void 0 : error.data) || "");
    throw createError({
      statusCode: Number.isFinite(statusCode) ? statusCode : 502,
      message: detailMsg
    });
  }
}

const assertTrialEligibility = async (userId) => {
  const resolved = await resolveEffectiveUserGrants(userId);
  if (resolved.subscription) {
    throw createError({ statusCode: 409, message: "Active subscription already exists" });
  }
};
const grantTrialEntitlements = async (order, adminId) => {
  if (!order.expiresAt) throw new Error("Trial expiration snapshot is missing");
  const resolved = await resolveEffectiveUserGrants(order.userId);
  const values = {
    "listing.enabled": order.policy.features.listing,
    "studio.enabled": order.policy.features.studio,
    "ops.enabled": order.policy.features.ops,
    "stores.max_count": order.policy.limits.stores,
    "employees.max_count": order.policy.limits.employees
  };
  for (const [key, value] of Object.entries(values)) {
    const current = resolved.grants[key];
    if (current.source !== "default") continue;
    await createUserGrant({
      userId: order.userId,
      key,
      value,
      source: "promotion",
      expiresAt: new Date(order.expiresAt),
      reason: `trial-order:${order.id}`,
      adminId
    });
  }
};
const provisionAINodeCredentials = async (userId, email) => {
  let apiKey = "";
  let baseUrl = "";
  try {
    const ainode = await ensureAINodeApiKey(userId, email);
    apiKey = ainode.apiKey;
    baseUrl = ainode.baseUrl;
    await persistModelCredentials(userId, apiKey, baseUrl);
  } catch (error) {
    console.error("[qingpu claimTrialPass] ainode key provisioning failed (non-fatal):", error);
  }
  return { apiKey, baseUrl };
};
const assertAINodeTrialWalletEligible = async (order) => {
  if (order.policy.grantAmount <= 0) return;
  if (order.walletEligibilityCheckedAt) return;
  try {
    const response = await fetchAINodeSiteData(order.userId, "/api/site/wallet");
    const envelope = response && typeof response === "object" ? response : {};
    const wallet = envelope.data && typeof envelope.data === "object" ? envelope.data : envelope;
    const subCents = Number(wallet.subCents || 0);
    const grantCents = Number(wallet.grantCents || 0);
    const expiresAt = wallet.subExpiresAt ? Date.parse(String(wallet.subExpiresAt)) : 0;
    if (order.policy.paymentAmountCny <= 0 && subCents > 0 && Number.isFinite(expiresAt) && expiresAt > Date.now()) {
      throw createError({ statusCode: 409, message: "\u5DF2\u6709\u751F\u6548\u5957\u9910\uFF0C\u65E0\u6CD5\u91CD\u590D\u7533\u8BF7\u514D\u8D39\u8BD5\u7528" });
    }
  } catch (error) {
    if ((error == null ? void 0 : error.statusCode) === 409) {
      throw error;
    }
    console.warn("[qingpu trial] assertAINodeTrialWalletEligible non-fatal error:", (error == null ? void 0 : error.message) || error);
  }
  await markQingpuTrialWalletEligible(order.id);
};
const deliverQingpuTrialGrant = async (order) => {
  var _a, _b, _c, _d, _e, _f;
  if (!order.expiresAt) throw new Error("Trial expiration snapshot is missing");
  if (order.policy.grantAmount <= 0) return;
  const [gatewayUrl, token] = await Promise.all([
    getQingpuAINodeBaseUrl(),
    getQingpuAINodeTenantToken()
  ]);
  if (!gatewayUrl || !token) {
    const msg = "AINode tenant token or gateway URL not configured";
    console.warn(`[qingpu trial] ${msg}, skipping grant delivery`);
    await logger.warn(`\u8BD5\u7528\u91D1\u5E01\u672A\u53D1\u653E\uFF08\u7F51\u5173\u672A\u914D\u7F6E\uFF09: ${order.email}`, {
      source: "qingpu_trial_grant",
      details: { orderId: order.id, email: order.email, gatewayUrl, hasToken: Boolean(token) }
    });
    return;
  }
  let ainodeUserId = null;
  try {
    ainodeUserId = await resolveAINodeUserId(gatewayUrl, order.email);
    if (!ainodeUserId) {
      const msg = `Could not resolve AINode user ID for ${order.email}`;
      console.warn(`[qingpu trial] ${msg}, skipping grant delivery`);
      await logger.warn(`\u8BD5\u7528\u91D1\u5E01\u672A\u53D1\u653E\uFF08\u65E0\u6CD5\u89E3\u6790 AINode \u7528\u6237\uFF09: ${order.email}`, {
        source: "qingpu_trial_grant",
        details: { orderId: order.id, email: order.email, gatewayUrl }
      });
      return;
    }
    const payload = {
      event: "subscription.apply",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      data: {
        eventId: `trial:apply:${order.id}`,
        userId: ainodeUserId,
        email: order.email,
        paidAmount: 0,
        grantAmount: order.policy.grantAmount,
        expiresAt: order.expiresAt,
        tier: 0,
        sourceId: order.id,
        remark: `Qingpu trial grant: ${order.policy.grantAmount}`
      }
    };
    const response = await $fetch$1(`${gatewayUrl}/api/webhooks/events`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: payload,
      retry: 2,
      retryStatusCodes: [408, 409, 425, 429, 500, 502, 503, 504],
      signal: AbortSignal.timeout(15e3)
    });
    console.log(`[qingpu trial] Successfully delivered ${order.policy.grantAmount} coins to ${order.email} (ainodeUserId: ${ainodeUserId})`);
    await logger.info(`\u8BD5\u7528\u91D1\u5E01\u53D1\u653E\u6210\u529F: ${order.email} (+${order.policy.grantAmount} \u91D1\u5E01)`, {
      source: "qingpu_trial_grant",
      details: {
        orderId: order.id,
        email: order.email,
        ainodeUserId,
        gatewayUrl,
        payload,
        response
      }
    });
  } catch (err) {
    const rawError = ((_b = (_a = err == null ? void 0 : err.data) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || ((_c = err == null ? void 0 : err.data) == null ? void 0 : _c.error) || ((_d = err == null ? void 0 : err.data) == null ? void 0 : _d.message) || ((_e = err == null ? void 0 : err.data) == null ? void 0 : _e.msg) || (err == null ? void 0 : err.message) || "\u5145\u503C\u53D1\u653E\u5931\u8D25";
    console.error(`[qingpu trial] AINode subscription.apply delivery failed for ${order.email}:`, rawError, (err == null ? void 0 : err.data) || "");
    await logger.error(`\u8BD5\u7528\u91D1\u5E01\u53D1\u653E\u5931\u8D25: ${order.email} (${rawError})`, {
      source: "qingpu_trial_grant",
      details: {
        orderId: order.id,
        email: order.email,
        ainodeUserId,
        gatewayUrl,
        error: rawError,
        responseBody: (err == null ? void 0 : err.data) || ((_f = err == null ? void 0 : err.response) == null ? void 0 : _f._data)
      }
    });
    if (/insufficient/i.test(rawError) || /余额不足/i.test(rawError) || /资金不足/i.test(rawError) || /tenant/i.test(rawError)) {
      throw new Error(`AINode \u91D1\u5E01\u53D1\u653E\u5931\u8D25: ${rawError}`);
    }
  }
};
async function fulfillTrialOrder(order, adminId) {
  try {
    await assertTrialEligibility(order.userId);
    const credentials = await provisionAINodeCredentials(order.userId, order.email);
    await assertAINodeTrialWalletEligible(order);
    await deliverQingpuTrialGrant(order);
    await grantTrialEntitlements(order, adminId);
    await completeQingpuTrialOrder(order.id);
    try {
      const durationDays = order.policy.durationDays || 1;
      const grantAmount = order.policy.grantAmount || 0;
      const grantMsg = grantAmount > 0 ? `\u53CA ${grantAmount} \u91D1\u5E01\u4F53\u9A8C\u7B97\u529B` : "";
      await createNotification({
        userId: order.userId,
        type: "trial_activated",
        title: "\u8BD5\u7528\u6743\u76CA\u5DF2\u5F00\u901A",
        message: `\u60A8\u7684\u4F53\u9A8C\u5957\u9910\u5DF2\u751F\u6548\uFF0C\u5305\u542B ${durationDays} \u5929\u5B8C\u6574\u529F\u80FD\u4F53\u9A8C${grantMsg}\u3002`,
        data: { orderId: order.id, productId: order.productId, targetPath: "/user/listing" }
      });
    } catch (notifyErr) {
      console.warn("[qingpu trial] Failed to send trial notification:", notifyErr);
    }
    return credentials;
  } catch (error) {
    await failQingpuTrialOrder(order.id, error);
    const readable = formatTrialErrorMessage(error);
    const statusCode = (error == null ? void 0 : error.statusCode) || 400;
    throw createError({
      statusCode,
      statusMessage: readable,
      message: readable
    });
  }
}
async function fulfillPaidTrialOrder(orderId) {
  const result = await beginQingpuTrialFulfillment(orderId, null);
  if (!result.claimed) return result.order;
  await fulfillTrialOrder(result.order, null);
  return { ...result.order, state: "approved" };
}

const timeoutMs = 15e3;
const getUserEmail = async (userId) => {
  var _a;
  const rows = await db.select({ email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
  const email = String(((_a = rows[0]) == null ? void 0 : _a.email) || "").trim().toLowerCase();
  if (!email) throw createError({ statusCode: 404, message: "\u7528\u6237\u4E0D\u5B58\u5728" });
  return email;
};
const requestTenant = async (path, options = {}) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const [gatewayUrl, token] = await Promise.all([getQingpuAINodeBaseUrl(), getQingpuAINodeTenantToken()]);
  if (!token) throw createError({ statusCode: 502, message: "Qingpu AINode tenant token not configured" });
  try {
    return await $fetch$1(`${gatewayUrl}${path}`, {
      method: options.method || "GET",
      query: options.query,
      body: options.body,
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(timeoutMs)
    });
  } catch (error) {
    const candidate = error;
    const statusCode = Number(candidate.statusCode || candidate.status || ((_a = candidate.response) == null ? void 0 : _a.status) || 502);
    throw createError({
      statusCode: Number.isFinite(statusCode) ? statusCode : 502,
      message: ((_b = candidate.data) == null ? void 0 : _b.message) || ((_c = candidate.data) == null ? void 0 : _c.msg) || ((_e = (_d = candidate.response) == null ? void 0 : _d._data) == null ? void 0 : _e.message) || ((_g = (_f = candidate.response) == null ? void 0 : _f._data) == null ? void 0 : _g.msg) || candidate.statusMessage || candidate.message || "AINode request failed"
    });
  }
};
const envelopeData = (value) => {
  if (!value || typeof value !== "object") return {};
  const record = value;
  return record.data && typeof record.data === "object" && !Array.isArray(record.data) ? record.data : record;
};
const lookupAINodeTenantUsers = async (emails) => {
  const normalized = emails.map((email) => email.trim().toLowerCase()).filter(Boolean);
  const requested = [...new Set(normalized)];
  const result = /* @__PURE__ */ new Map();
  if (!requested.length) return result;
  const response = await requestTenant("/api/tenant/users/lookup", {
    method: "POST",
    body: { emails: requested }
  });
  const data = envelopeData(response);
  const rows = Array.isArray(data.items) ? data.items : [];
  for (const row of rows) {
    const email = String(row.email || "").trim().toLowerCase();
    if (!requested.includes(email)) continue;
    const status = String(row.status || "");
    const userId = Number(row.userId);
    const walletId = Number(row.walletId);
    if (status === "identity_missing") {
      result.set(email, { status, userId: null, walletId: null, wallet: null, error: null });
    } else if (status === "wallet_missing" && Number.isInteger(userId) && userId > 0) {
      result.set(email, { status, userId, walletId: null, wallet: null, error: null });
    } else if (status === "linked" && Number.isInteger(userId) && userId > 0 && Number.isInteger(walletId) && walletId > 0) {
      result.set(email, {
        status,
        userId,
        walletId,
        wallet: row.wallet && typeof row.wallet === "object" ? row.wallet : {},
        error: null
      });
    }
  }
  for (const email of requested) {
    if (!result.has(email)) {
      result.set(email, { status: "unavailable", userId: null, walletId: null, wallet: null, error: "AINode lookup response missing customer" });
    }
  }
  return result;
};
async function listAINodeCustomerAssets(customers) {
  if (!customers.length) return /* @__PURE__ */ new Map();
  let assets;
  try {
    assets = await lookupAINodeTenantUsers(customers.map((customer) => customer.email));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return new Map(customers.map((customer) => [customer.id, {
      status: "unavailable",
      userId: null,
      walletId: null,
      wallet: null,
      error: message
    }]));
  }
  return new Map(customers.map((customer) => {
    const email = customer.email.trim().toLowerCase();
    return [customer.id, assets.get(email) || {
      status: "unavailable",
      userId: null,
      walletId: null,
      wallet: null,
      error: "AINode lookup response missing customer"
    }];
  }));
}
const requireLinkedAINodeCustomer = async (userId) => {
  const email = await getUserEmail(userId);
  const assets = await listAINodeCustomerAssets([{
    id: userId,
    email,
    nickname: "",
    status: "",
    createdAt: null,
    lastLoginAt: null
  }]);
  const asset = assets.get(userId);
  if (!asset || asset.status === "unavailable") {
    throw createError({ statusCode: 502, message: (asset == null ? void 0 : asset.error) || "AINode \u6682\u4E0D\u53EF\u7528" });
  }
  if (asset.status === "identity_missing") {
    throw createError({ statusCode: 409, message: "AINode \u8EAB\u4EFD\u5C1A\u672A\u521D\u59CB\u5316" });
  }
  if (asset.status === "wallet_missing") {
    throw createError({ statusCode: 409, message: "AINode \u8EAB\u4EFD\u5DF2\u5B58\u5728\uFF0C\u4F46\u5C1A\u672A\u5173\u8054\u9752\u6D66\u79DF\u6237\u94B1\u5305" });
  }
  return {
    email,
    ainodeUserId: asset.userId,
    walletId: asset.walletId,
    wallet: asset.wallet
  };
};
const creditAINodeCustomerBalance = async (input) => {
  const { ainodeUserId } = await requireLinkedAINodeCustomer(input.userId);
  return requestTenant(`/api/tenant/users/${ainodeUserId}/credits`, {
    method: "POST",
    body: {
      operationId: input.operationId,
      balanceType: input.balanceType,
      amount: input.amount,
      reason: input.reason,
      actor: {
        type: "qingpu_admin",
        id: String(input.actor.id),
        name: input.actor.username || `admin#${input.actor.id}`
      },
      metadata: {
        localUserId: input.userId
      }
    }
  });
};

function parseJsonMeta(value) {
  if (!value) return {};
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    } catch {
      return {};
    }
  }
  return typeof value === "object" && !Array.isArray(value) ? value : {};
}
async function handleQingpuTopupPaid(payload) {
  var _a;
  const orderId = String((payload == null ? void 0 : payload.id) || (payload == null ? void 0 : payload.orderId) || "").trim();
  if (!orderId) return { ok: true };
  const rows = await db.select({
    order: orders,
    productType: products.type,
    productName: products.name
  }).from(orders).leftJoin(products, eq(products.id, orders.productId)).where(eq(orders.id, orderId)).limit(1);
  const row = rows[0];
  if (!row) return { ok: true };
  const order = row.order;
  const orderMeta = parseJsonMeta(order.metaData);
  const bridge = parseJsonMeta(orderMeta.checkoutBridge);
  const attach = parseJsonMeta(bridge.attach);
  const currencySnapshot = parseJsonMeta(orderMeta.currencySnapshot);
  if (order.source === "qingpu_trial" || orderId.startsWith("TR") || Boolean(orderMeta.qingpuTrial)) {
    return { ok: true };
  }
  if (row.productType === "subscription" || orderId.startsWith("SUB")) {
    return { ok: true };
  }
  const isTopup = orderId.startsWith("TU") || row.productType === "topup" || attach.businessType === "topup" || order.source === "quick_topup" || order.source === "minimal_checkout" && (attach.businessType === "topup" || Boolean(orderMeta.recharge_amount) || orderMeta.balance_type === "cash") || orderMeta.balance_type === "cash" || Boolean(orderMeta.recharge_amount);
  if (!isTopup) {
    return { ok: true };
  }
  const userId = Number(order.userId || (payload == null ? void 0 : payload.userId) || 0);
  if (!userId) {
    console.warn(`[QingpuTopupEvent] Order ${orderId} has no userId, skip AINode topup credit`);
    return { ok: true };
  }
  const rechargeAmount = Number(
    bridge.rechargeAmount || orderMeta.recharge_amount || bridge.sourceAmount || currencySnapshot.baseAmount || order.amount || 0
  );
  if (rechargeAmount <= 0) {
    console.warn(`[QingpuTopupEvent] Order ${orderId} rechargeAmount is <= 0 (${rechargeAmount})`);
    return { ok: true };
  }
  const balanceType = String(bridge.balanceType || orderMeta.balance_type || "cash").trim().toLowerCase() === "grant" ? "grant" : "cash";
  const userRows = await db.select({ email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
  const email = String(((_a = userRows[0]) == null ? void 0 : _a.email) || "").trim().toLowerCase();
  if (!email) {
    console.warn(`[QingpuTopupEvent] User ${userId} has no email, skip AINode credit`);
    return { ok: true };
  }
  const [gatewayUrl, token] = await Promise.all([
    getQingpuAINodeBaseUrl(),
    getQingpuAINodeTenantToken()
  ]);
  if (!gatewayUrl || !token) {
    const msg = "AINode \u7F51\u5173\u5730\u5740\u6216\u79DF\u6237 Token \u672A\u914D\u7F6E\uFF0C\u5145\u503C\u4F59\u989D\u672A\u80FD\u81EA\u52A8\u540C\u6B65\u5230 AINode";
    console.warn(`[QingpuTopupEvent] ${msg}`);
    await logger.warn(`\u5145\u503C\u91D1\u5E01\u672A\u540C\u6B65\uFF08\u7F51\u5173\u672A\u914D\u7F6E\uFF09: ${email} (\u8BA2\u5355 ${orderId})`, {
      source: "qingpu_topup_sync",
      details: { orderId, email, rechargeAmount }
    });
    return { ok: false, errorMessage: msg };
  }
  try {
    const ainodeCreds = await ensureAINodeApiKey(userId, email);
    await persistModelCredentials(userId, ainodeCreds.apiKey, ainodeCreds.baseUrl);
  } catch (err) {
    console.warn(`[QingpuTopupEvent] ensureAINodeApiKey non-fatal warning for ${email}:`, (err == null ? void 0 : err.message) || err);
  }
  const operationId = `topup:${orderId}`;
  try {
    await creditAINodeCustomerBalance({
      userId,
      operationId,
      balanceType,
      amount: rechargeAmount,
      reason: `\u8F7B\u94FA\u5145\u503C\u8BA2\u5355\u5230\u8D26 ${orderId}`,
      actor: {
        id: 0,
        username: "system_topup"
      }
    });
    console.log(`[QingpuTopupEvent] Successfully credited ${rechargeAmount} (${balanceType}) to AINode for ${email} (Order ${orderId})`);
    await logger.info(`\u5145\u503C\u91D1\u5E01\u540C\u6B65 AINode \u6210\u529F: ${email} (+${rechargeAmount} ${balanceType})`, {
      source: "qingpu_topup_sync",
      details: {
        orderId,
        userId,
        email,
        amount: rechargeAmount,
        balanceType
      }
    });
  } catch (err) {
    console.warn(`[QingpuTopupEvent] creditAINodeCustomerBalance failed, attempting webhook fallback:`, (err == null ? void 0 : err.message) || err);
    try {
      const ainodeUserId = await resolveAINodeUserId(gatewayUrl, email);
      if (ainodeUserId) {
        await $fetch$1(`${gatewayUrl}/api/webhooks/events`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: {
            event: "transaction.credit",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            data: {
              source: "apay",
              eventId: `topup:credit:${orderId}`,
              userId: ainodeUserId,
              type: "topup",
              balanceType,
              direction: "credit",
              amount: rechargeAmount,
              sourceId: orderId,
              remark: `\u5145\u503C\u8BA2\u5355\u5230\u8D26 ${orderId}`
            }
          },
          retry: 2,
          signal: AbortSignal.timeout(1e4)
        });
        console.log(`[QingpuTopupEvent] Webhook fallback credited ${rechargeAmount} for user ${email}`);
      }
    } catch (fallbackErr) {
      console.error(`[QingpuTopupEvent] Both direct credit and webhook failed for order ${orderId}:`, (fallbackErr == null ? void 0 : fallbackErr.message) || fallbackErr);
      await logger.error(`\u5145\u503C\u91D1\u5E01\u540C\u6B65 AINode \u5931\u8D25: ${email}`, {
        source: "qingpu_topup_sync",
        details: {
          orderId,
          userId,
          email,
          rechargeAmount,
          error: (err == null ? void 0 : err.message) || err,
          fallbackError: (fallbackErr == null ? void 0 : fallbackErr.message) || fallbackErr
        }
      });
      return { ok: false, errorMessage: (err == null ? void 0 : err.message) || "\u540C\u6B65 AINode \u4F59\u989D\u5931\u8D25" };
    }
  }
  return { ok: true };
}
async function handleQingpuSubscriptionPaid(payload) {
  var _a, _b, _c, _d, _e, _f, _g;
  const orderId = String((payload == null ? void 0 : payload.id) || (payload == null ? void 0 : payload.orderId) || "").trim();
  if (!orderId) return { ok: true };
  const rows = await db.select({
    order: orders,
    productType: products.type,
    productMeta: products.metaData,
    productName: products.name
  }).from(orders).leftJoin(products, eq(products.id, orders.productId)).where(eq(orders.id, orderId)).limit(1);
  const row = rows[0];
  if (!row) return { ok: true };
  if (row.productType !== "subscription" && !orderId.startsWith("SUB")) {
    return { ok: true };
  }
  const userId = Number(row.order.userId || (payload == null ? void 0 : payload.userId) || 0);
  if (!userId) return { ok: true };
  const meta = parseJsonMeta(row.productMeta);
  const grantAmount = Number(meta.grant_amount || 0);
  if (grantAmount > 0) {
    const userRows = await db.select({ email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
    const email = String(((_a = userRows[0]) == null ? void 0 : _a.email) || "").trim().toLowerCase();
    if (!email) return { ok: true };
    try {
      const ainodeCreds = await ensureAINodeApiKey(userId, email);
      await persistModelCredentials(userId, ainodeCreds.apiKey, ainodeCreds.baseUrl);
    } catch (err) {
      console.warn(`[QingpuSubscriptionEvent] ensureAINodeApiKey warning for ${email}:`, (err == null ? void 0 : err.message) || err);
    }
    const [gatewayUrl, token] = await Promise.all([
      getQingpuAINodeBaseUrl(),
      getQingpuAINodeTenantToken()
    ]);
    if (!gatewayUrl || !token) {
      const msg = "AINode tenant token or gateway URL not configured";
      console.warn(`[QingpuSubscriptionEvent] ${msg}, skipping grant delivery`);
      return { ok: true };
    }
    try {
      const ainodeUserId = await resolveAINodeUserId(gatewayUrl, email);
      if (!ainodeUserId) {
        throw new Error(`Could not resolve AINode user ID for ${email}`);
      }
      const subRows = await db.select({ currentPeriodEnd: subscriptions.currentPeriodEnd }).from(subscriptions).where(and(eq(subscriptions.userId, userId), eq(subscriptions.status, "active"))).orderBy(desc(subscriptions.createdAt)).limit(1);
      const expiresAt = ((_b = subRows[0]) == null ? void 0 : _b.currentPeriodEnd) ? new Date(subRows[0].currentPeriodEnd).toISOString() : new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString();
      const eventPayload = {
        event: "subscription.apply",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        data: {
          eventId: `subscription:grant:${orderId}`,
          userId: ainodeUserId,
          email,
          paidAmount: 0,
          grantAmount,
          expiresAt,
          tier: Number(meta.level) || 1,
          sourceId: orderId,
          remark: `\u8F7B\u94FA\u8BA2\u9605\u5957\u9910\u8D60\u9001\u7B97\u529B: ${grantAmount} \u91D1\u5E01`
        }
      };
      const response = await $fetch$1(`${gatewayUrl}/api/webhooks/events`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: eventPayload,
        retry: 2,
        retryStatusCodes: [408, 409, 425, 429, 500, 502, 503, 504],
        signal: AbortSignal.timeout(15e3)
      });
      console.log(`[QingpuSubscriptionEvent] Successfully delivered ${grantAmount} grant credits for ${email} (Order ${orderId})`);
      await logger.info(`\u8BA2\u9605\u8D60\u9001\u7B97\u529B\u540C\u6B65 AINode \u6210\u529F: ${email} (+${grantAmount} grant)`, {
        source: "qingpu_subscription_sync",
        details: { orderId, userId, email, grantAmount, response }
      });
    } catch (err) {
      const rawError = ((_d = (_c = err == null ? void 0 : err.data) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || ((_e = err == null ? void 0 : err.data) == null ? void 0 : _e.error) || ((_f = err == null ? void 0 : err.data) == null ? void 0 : _f.message) || ((_g = err == null ? void 0 : err.data) == null ? void 0 : _g.msg) || (err == null ? void 0 : err.message) || "\u5145\u503C\u53D1\u653E\u5931\u8D25";
      console.error(`[QingpuSubscriptionEvent] Failed to credit subscription grant for ${email}:`, rawError, (err == null ? void 0 : err.data) || "");
      await logger.error(`\u8BA2\u9605\u8D60\u9001\u7B97\u529B\u540C\u6B65 AINode \u5931\u8D25: ${email}`, {
        source: "qingpu_subscription_sync",
        details: { orderId, userId, email, grantAmount, error: rawError }
      });
    }
  }
  return { ok: true };
}
async function handleQingpuSubscriptionRevoked(payload) {
  var _a, _b, _c, _d, _e;
  const userId = Number((payload == null ? void 0 : payload.userId) || 0);
  const subscriptionId = String((payload == null ? void 0 : payload.subscriptionId) || "").trim();
  const reason = String((payload == null ? void 0 : payload.reason) || "subscription_revoked").trim();
  if (!userId || !subscriptionId) return { ok: true };
  const userRows = await db.select({ email: users.email }).from(users).where(eq(users.id, userId)).limit(1);
  const email = String(((_a = userRows[0]) == null ? void 0 : _a.email) || "").trim().toLowerCase();
  if (!email) return { ok: true };
  const [gatewayUrl, token] = await Promise.all([
    getQingpuAINodeBaseUrl(),
    getQingpuAINodeTenantToken()
  ]);
  if (!gatewayUrl || !token) {
    console.warn(`[QingpuSubscriptionRevoke] AINode token or gateway URL not configured, skipping revoke sync`);
    return { ok: true };
  }
  try {
    const ainodeUserId = await resolveAINodeUserId(gatewayUrl, email);
    if (!ainodeUserId) {
      console.warn(`[QingpuSubscriptionRevoke] Could not resolve AINode user ID for ${email}`);
      return { ok: true };
    }
    const eventPayload = {
      event: "subscription.cancel",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      data: {
        eventId: `sub:cancel:${subscriptionId}:${Date.now()}`,
        userId: ainodeUserId,
        sourceId: subscriptionId,
        remark: `\u8F7B\u94FA\u8BA2\u9605\u9000\u6B3E\u64A4\u9500: ${reason}`
      }
    };
    const response = await $fetch$1(`${gatewayUrl}/api/webhooks/events`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: eventPayload,
      retry: 2,
      retryStatusCodes: [408, 409, 425, 429, 500, 502, 503, 504],
      signal: AbortSignal.timeout(15e3)
    });
    console.log(`[QingpuSubscriptionRevoke] Successfully revoked subscription ${subscriptionId} for ${email}`);
    await logger.info(`\u8BA2\u9605\u64A4\u9500\u540C\u6B65 AINode \u6210\u529F: ${email}`, {
      source: "qingpu_subscription_revoke",
      details: { subscriptionId, userId, email, reason, response }
    });
    return { ok: true };
  } catch (err) {
    const rawError = ((_c = (_b = err == null ? void 0 : err.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message) || ((_d = err == null ? void 0 : err.data) == null ? void 0 : _d.error) || ((_e = err == null ? void 0 : err.data) == null ? void 0 : _e.message) || (err == null ? void 0 : err.message) || "\u64A4\u9500\u540C\u6B65\u5931\u8D25";
    console.error(`[QingpuSubscriptionRevoke] Failed to revoke subscription ${subscriptionId} for ${email}:`, rawError);
    await logger.error(`\u8BA2\u9605\u64A4\u9500\u540C\u6B65 AINode \u5931\u8D25: ${email}`, {
      source: "qingpu_subscription_revoke",
      details: { subscriptionId, userId, email, reason, error: rawError }
    });
    return { ok: false, errorMessage: rawError };
  }
}
function getThemeEventRules() {
  return [
    {
      key: "qingpu:sync_user_registered",
      event: "user.registered",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u65B0\u7528\u6237\u6CE8\u518C\u81EA\u52A8\u540C\u6B65 AINode \u51ED\u8BC1",
      description: "\u65B0\u7528\u6237\u6CE8\u518C\u6210\u529F\u540E\uFF0C\u81EA\u52A8\u5728 AINode \u7F51\u5173\u5F00\u901A\u7528\u6237\u8D26\u53F7\u5E76\u521D\u59CB\u5316\u8F7B\u94FA\u6A21\u578B\u51ED\u636E",
      mode: "async",
      handler: async (payload) => {
        const userId = Number((payload == null ? void 0 : payload.userId) || (payload == null ? void 0 : payload.id) || 0);
        const email = String((payload == null ? void 0 : payload.email) || "").trim();
        if (userId > 0 && email) {
          try {
            const ainode = await ensureAINodeApiKey(userId, email);
            await persistModelCredentials(userId, ainode.apiKey, ainode.baseUrl);
          } catch (err) {
            console.warn(`[QingpuRegisterEvent] Failed to auto-provision AINode credentials for ${email}:`, (err == null ? void 0 : err.message) || err);
          }
        }
      }
    },
    {
      key: "qingpu:fulfill_trial",
      event: "order.paid",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u8BD5\u7528\u8BA2\u5355\u5C65\u7EA6\u4E0E\u6743\u76CA\u5F00\u901A",
      description: "\u5C65\u7EA6\u8F7B\u94FA\u8BD5\u7528\u8BA2\u5355\uFF0C\u5F00\u901A\u8F7B\u94FA\u7CFB\u7EDF\u6743\u9650\u5E76\u4E3A\u7528\u6237\u53D1\u653E AINode \u8BD5\u7528\u989D\u5EA6",
      mode: "async",
      handler: async (payload) => {
        const order = payload;
        const orderId = String((order == null ? void 0 : order.id) || (order == null ? void 0 : order.orderId) || "").trim();
        const source = String((order == null ? void 0 : order.source) || "").trim();
        if (source !== "qingpu_trial" && !orderId.startsWith("TR")) {
          return { ok: true };
        }
        if (!orderId) {
          return { ok: false, errorMessage: "\u7F3A\u5C11\u8BA2\u5355 ID" };
        }
        try {
          const next = await markQingpuTrialPaymentReceived(orderId);
          if (next === "ready") {
            await fulfillPaidTrialOrder(orderId);
          }
          return { ok: true };
        } catch (err) {
          const readable = formatTrialErrorMessage((err == null ? void 0 : err.message) || err);
          console.error(`[QingpuTrialEvent] fulfill failed for order ${orderId}:`, readable);
          return { ok: false, errorMessage: readable };
        }
      }
    },
    {
      key: "qingpu:fulfill_subscription",
      event: "order.paid",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u8BA2\u9605\u8BA2\u5355\u5C65\u7EA6\u4E0E\u8D60\u9001\u7B97\u529B\u53D1\u653E",
      description: "\u5F53\u7528\u6237\u5B8C\u6210\u8F7B\u94FA\u8BA2\u9605\u5957\u9910\u652F\u4ED8\u540E\uFF0C\u81EA\u52A8\u4E3A\u7528\u6237\u53D1\u653E\u8BE5\u5957\u9910\u9644\u8D60\u7684\u5468\u671F\u7B97\u529B\u91D1\u5E01",
      mode: "async",
      handler: async (payload) => {
        return await handleQingpuSubscriptionPaid(payload);
      }
    },
    {
      key: "qingpu:fulfill_topup",
      event: "order.paid",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u5145\u503C\u8BA2\u5355\u81EA\u52A8\u540C\u6B65 AINode \u4F59\u989D",
      description: "\u5F53\u7528\u6237\u5728\u8F7B\u94FA\u5B8C\u6210\u5145\u503C\u652F\u4ED8\u540E\uFF0C\u81EA\u52A8\u4E3A\u7528\u6237\u5728 AINode \u7F51\u5173\u5165\u8D26\u5BF9\u5E94\u7684\u91D1\u5E01\u4F59\u989D",
      mode: "async",
      handler: async (payload) => {
        return await handleQingpuTopupPaid(payload);
      }
    },
    {
      key: "qingpu:revoke_subscription",
      event: "subscription.revoked",
      theme: "qingpu",
      label: "\u8F7B\u94FA\uFF1A\u8BA2\u9605\u64A4\u9500\u540E\u540C\u6B65\u6E05\u7406 AINode \u8D60\u9001\u7B97\u529B",
      description: "\u5F53\u8BA2\u5355\u9000\u6B3E\u5BFC\u81F4\u8BA2\u9605\u4F5C\u5E9F\u65F6\uFF0C\u5411 AINode \u6D3E\u53D1 subscription.cancel \u4E8B\u4EF6\u6E05\u7A7A\u672A\u4F7F\u7528\u7684\u8D60\u9001\u7B97\u529B",
      mode: "async",
      handler: async (payload) => {
        return await handleQingpuSubscriptionRevoked(payload);
      }
    }
  ];
}

export { getThemeEventRules };
