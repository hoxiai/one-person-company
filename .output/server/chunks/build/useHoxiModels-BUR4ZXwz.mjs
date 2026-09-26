import { computed } from 'vue';
import { h as hoxiModels } from './models-VgTGFaGO.mjs';
import { h as hoxiVendors } from './vendors-sPFB0I2R.mjs';
import { v as useSettings, z as useFetch } from './server.mjs';

const USD_TO_CNY = 7.2;
const USD_TO_CNY_CHECKED_AT = "2026-08-27";
const EMPTY_OVERRIDES = { version: 1, models: {} };
const HOXI_OVERRIDES_KEY = "hoxi_model_overrides";
const BLENDED_INPUT_WEIGHT = 3;
const BLENDED_OUTPUT_WEIGHT = 1;
const VALUE_INDEX_SCALE = 100;
function toCny(amount, currency) {
  return currency === "USD" ? amount * USD_TO_CNY : amount;
}
function blendedPrice(model) {
  const totalWeight = BLENDED_INPUT_WEIGHT + BLENDED_OUTPUT_WEIGHT;
  const input = toCny(model.price.input, model.price.currency);
  const output = toCny(model.price.output, model.price.currency);
  return (input * BLENDED_INPUT_WEIGHT + output * BLENDED_OUTPUT_WEIGHT) / totalWeight;
}
function rawValue(model) {
  const overall = model.scores.overall;
  if (overall === void 0) return void 0;
  const price = blendedPrice(model);
  if (price <= 0) return void 0;
  return overall / price;
}
function valueIndexOf(model, maxRawValue) {
  const raw = rawValue(model);
  if (raw === void 0 || maxRawValue <= 0) return void 0;
  return raw / maxRawValue * VALUE_INDEX_SCALE;
}
function formatPrice(amount) {
  if (!Number.isFinite(amount)) return "\u2014";
  if (amount === 0) return "0";
  if (amount < 0.1) return amount.toFixed(3);
  if (amount < 10) return amount.toFixed(2);
  return amount.toFixed(1);
}
function formatContext(tokens) {
  if (!Number.isFinite(tokens) || tokens <= 0) return "\u2014";
  if (tokens >= 1e6) {
    const m = tokens / 1e6;
    return `${Number.isInteger(m) ? m : m.toFixed(1)}M`;
  }
  if (tokens >= 1e3) return `${Math.round(tokens / 1e3)}K`;
  return String(tokens);
}
function formatScore(score) {
  return score === void 0 ? "\u2014" : score.toFixed(0);
}
function formatTps(tps) {
  return tps === void 0 ? "\u2014" : tps.toFixed(0);
}
function formatLatency(seconds) {
  return seconds === void 0 ? "\u2014" : `${seconds.toFixed(2)}s`;
}
function latestUpdatedAt(models) {
  const dates = models.map((model) => model.updatedAt).filter(Boolean).sort();
  return dates.at(-1);
}
const MIN_BAR_RATIO = 0.04;
function buildModelViews(models) {
  const rawValues = models.map(rawValue).filter((value) => value !== void 0);
  const maxRawValue = rawValues.length ? Math.max(...rawValues) : 0;
  const minRawValue = rawValues.length ? Math.min(...rawValues) : 0;
  const logSpan = maxRawValue > 0 && minRawValue > 0 ? Math.log(maxRawValue) - Math.log(minRawValue) : 0;
  const barRatioOf = (model) => {
    const raw = rawValue(model);
    if (raw === void 0) return void 0;
    if (logSpan <= 0) return 1;
    const ratio = (Math.log(raw) - Math.log(minRawValue)) / logSpan;
    return MIN_BAR_RATIO + ratio * (1 - MIN_BAR_RATIO);
  };
  return models.map((model) => {
    const staticBase = hoxiModels.find((item) => item.slug === model.slug);
    const modalities = Array.isArray(model.modalities) && model.modalities.length > 0 ? model.modalities : (staticBase == null ? void 0 : staticBase.modalities) || ["text"];
    return {
      ...model,
      modalities,
      summary: typeof model.summary === "string" && model.summary.trim() ? model.summary : (staticBase == null ? void 0 : staticBase.summary) || "",
      badges: Array.isArray(model.badges) && model.badges.length > 0 ? model.badges : (staticBase == null ? void 0 : staticBase.badges) || [],
      scenes: Array.isArray(model.scenes) && model.scenes.length > 0 ? model.scenes : (staticBase == null ? void 0 : staticBase.scenes) || [],
      highlights: Array.isArray(model.highlights) && model.highlights.length > 0 ? model.highlights : (staticBase == null ? void 0 : staticBase.highlights) || [],
      caveats: Array.isArray(model.caveats) && model.caveats.length > 0 ? model.caveats : (staticBase == null ? void 0 : staticBase.caveats) || [],
      sources: Array.isArray(model.sources) && model.sources.length > 0 ? model.sources : (staticBase == null ? void 0 : staticBase.sources) || [],
      scores: model.scores || (staticBase == null ? void 0 : staticBase.scores) || {},
      blendedPrice: blendedPrice(model),
      valueIndex: valueIndexOf(model, maxRawValue),
      valueBarRatio: barRatioOf(model),
      vendorInfo: hoxiVendors.find((vendor) => vendor.slug === model.vendor)
    };
  });
}
function filterModels(models, filters) {
  return models.filter((model) => {
    var _a;
    if (((_a = filters.vendors) == null ? void 0 : _a.length) && !filters.vendors.includes(model.vendor)) return false;
    if (filters.reasoning !== void 0 && model.reasoning !== filters.reasoning) return false;
    if (filters.openWeights !== void 0 && model.openWeights !== filters.openWeights) return false;
    if (filters.maxBlendedPrice !== void 0 && model.blendedPrice > filters.maxBlendedPrice) return false;
    if (filters.minBlendedPrice !== void 0 && model.blendedPrice < filters.minBlendedPrice) return false;
    return true;
  });
}
const sortValue = (model, field) => {
  var _a, _b;
  switch (field) {
    case "overall":
      return model.scores.overall;
    case "blendedPrice":
      return model.blendedPrice;
    case "valueIndex":
      return model.valueIndex;
    case "tps":
      return (_a = model.perf) == null ? void 0 : _a.tps;
    case "ttft":
      return (_b = model.perf) == null ? void 0 : _b.ttft;
    case "contextWindow":
      return model.contextWindow;
    case "releasedAt":
      return model.releasedAt ? Date.parse(model.releasedAt) : void 0;
  }
};
function sortModels(models, field, direction = "desc") {
  const factor = direction === "asc" ? 1 : -1;
  return [...models].sort((a, b) => {
    const left = sortValue(a, field);
    const right = sortValue(b, field);
    if (left === void 0 && right === void 0) return a.name.localeCompare(b.name);
    if (left === void 0) return 1;
    if (right === void 0) return -1;
    if (left === right) return a.name.localeCompare(b.name);
    return (left - right) * factor;
  });
}
const SAME_PRICE_TOLERANCE = 1.2;
const SAME_QUALITY_TOLERANCE = 0.95;
const ALTERNATIVE_LIMIT = 3;
function billingWarnings(model) {
  var _a, _b, _c, _d, _e;
  const billing = model.billing;
  if (!billing) return [{ kind: "unstructured", text: "" }];
  const warnings = [];
  if ((_a = billing.tiers) == null ? void 0 : _a.length) {
    const firstLimit = (_b = billing.tiers[0]) == null ? void 0 : _b.upToInputTokens;
    warnings.push({ kind: "tiers", text: firstLimit ? String(firstLimit) : "" });
  }
  if ((_c = billing.timeWindows) == null ? void 0 : _c.length) {
    const cheapest = [...billing.timeWindows].sort((a, b) => a.multiplier - b.multiplier)[0];
    warnings.push({ kind: "timeWindows", text: (cheapest == null ? void 0 : cheapest.label) || "" });
  }
  if (billing.promo) {
    warnings.push({ kind: "promo", text: billing.promo.note });
  }
  if (billing.batchMultiplier !== void 0 && billing.batchMultiplier < 1) {
    warnings.push({ kind: "batch", text: String(Math.round(billing.batchMultiplier * 100)) });
  }
  if (((_d = billing.cache) == null ? void 0 : _d.model) === "hourly-storage") {
    warnings.push({ kind: "cache", text: "" });
  }
  if ((_e = billing.modalitySurcharges) == null ? void 0 : _e.length) {
    warnings.push({ kind: "modality", text: billing.modalitySurcharges.map((item) => item.modality).join("\u3001") });
  }
  return warnings;
}
function findAlternatives(target, models) {
  const others = models.filter((model) => model.slug !== target.slug);
  const targetScore = target.scores.overall;
  if (targetScore === void 0) {
    const priceNeighbors = [...others].sort((a, b) => Math.abs(a.blendedPrice - target.blendedPrice) - Math.abs(b.blendedPrice - target.blendedPrice)).slice(0, ALTERNATIVE_LIMIT);
    return { stronger: [], cheaper: [], priceNeighbors };
  }
  const cheaper = others.filter((model) => model.scores.overall !== void 0 && model.scores.overall >= targetScore * SAME_QUALITY_TOLERANCE && model.blendedPrice < target.blendedPrice).sort((a, b) => a.blendedPrice - b.blendedPrice).slice(0, ALTERNATIVE_LIMIT);
  const taken = new Set(cheaper.map((model) => model.slug));
  const stronger = others.filter((model) => !taken.has(model.slug)).filter((model) => model.scores.overall !== void 0 && model.scores.overall > targetScore && model.blendedPrice <= target.blendedPrice * SAME_PRICE_TOLERANCE).sort((a, b) => b.scores.overall - a.scores.overall).slice(0, ALTERNATIVE_LIMIT);
  return { stronger, cheaper, priceNeighbors: [] };
}
const isPositiveNumber = (value) => typeof value === "number" && Number.isFinite(value) && value >= 0;
const isStringArray = (value) => Array.isArray(value) && value.every((item) => typeof item === "string" && item.trim().length > 0);
function parseOverrides(raw) {
  let source = raw;
  if (typeof raw === "string") {
    if (!raw.trim()) return EMPTY_OVERRIDES;
    try {
      source = JSON.parse(raw);
    } catch {
      return EMPTY_OVERRIDES;
    }
  }
  if (!source || typeof source !== "object" || Array.isArray(source)) return EMPTY_OVERRIDES;
  const record = source;
  const rawModels = record.models;
  const models = {};
  if (rawModels && typeof rawModels === "object" && !Array.isArray(rawModels)) {
    for (const [slug, value] of Object.entries(rawModels)) {
      if (!value || typeof value !== "object" || Array.isArray(value)) continue;
      const entry = value;
      const override = {};
      if (entry.price && typeof entry.price === "object" && !Array.isArray(entry.price)) {
        const price = {};
        for (const key of ["input", "output", "cacheRead", "cacheWrite"]) {
          const candidate = entry.price[key];
          if (isPositiveNumber(candidate)) price[key] = candidate;
        }
        if (Object.keys(price).length) override.price = price;
      }
      if (isStringArray(entry.badges)) override.badges = entry.badges;
      if (isStringArray(entry.scenes)) override.scenes = entry.scenes;
      if (typeof entry.hidden === "boolean") override.hidden = entry.hidden;
      if (Object.keys(override).length) models[slug] = override;
    }
  }
  return {
    version: 1,
    models,
    homeScene: typeof record.homeScene === "string" && record.homeScene.trim() ? record.homeScene.trim() : void 0,
    savedAt: typeof record.savedAt === "string" ? record.savedAt : void 0
  };
}
function applyOverrides(models, overrides) {
  const entries = overrides.models;
  if (!entries || !Object.keys(entries).length) return [...models];
  return models.map((model) => {
    var _a, _b;
    const override = entries[model.slug];
    if (!override) return model;
    if (override.hidden) return null;
    return {
      ...model,
      price: override.price ? { ...model.price, ...override.price } : model.price,
      badges: (_a = override.badges) != null ? _a : model.badges,
      scenes: (_b = override.scenes) != null ? _b : model.scenes
    };
  }).filter((model) => model !== null);
}
const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function injectModelReferences(html, models, options) {
  if (!html || !html.includes("data-hoxi-model")) return html;
  return html.replace(
    /<span\b[^>]*\bdata-hoxi-model="([^"]+)"[^>]*><\/span>/g,
    (_match, slug) => {
      const model = models.find((item) => item.slug === slug);
      if (!model) return "";
      const score = model.scores.overall === void 0 ? "" : ` \xB7 ${escapeHtml(options.scoreLabel)} ${formatScore(model.scores.overall)}`;
      return `<a href="${escapeHtml(options.href(model.slug))}" class="not-prose inline-flex flex-wrap items-baseline gap-x-2 no-underline"><span class="font-medium text-slate-700 dark:text-slate-300">${escapeHtml(model.name)}</span><span class="text-xs tabular-nums text-slate-500 dark:text-slate-400">${escapeHtml(options.blendedLabel)} \xA5${formatPrice(model.blendedPrice)}${score}</span></a>`;
    }
  );
}
function scoreEntries(model) {
  const keys = ["overall", "coding", "reasoning", "chinese", "agentic"];
  return keys.map((key) => ({ key, value: model.scores[key] })).filter((entry) => entry.value !== void 0);
}
function useHoxiModels() {
  const { getSetting } = useSettings();
  const { data: dbModels } = useFetch(
    "/api/hoxi/models",
    {
      key: "hoxi-db-models",
      default: () => null
    },
    "$ZOLA80VdjY"
    /* nuxt-injected */
  );
  const overrides = computed(() => {
    try {
      return parseOverrides(getSetting(HOXI_OVERRIDES_KEY));
    } catch {
      return EMPTY_OVERRIDES;
    }
  });
  const effectiveModels = computed(() => {
    if (dbModels.value && Array.isArray(dbModels.value) && dbModels.value.length > 0) {
      return dbModels.value;
    }
    return applyOverrides(hoxiModels, overrides.value);
  });
  const models = computed(() => buildModelViews(effectiveModels.value));
  const vendors = computed(() => hoxiVendors);
  const updatedAt = computed(() => latestUpdatedAt(effectiveModels.value));
  const findBySlug = (slug) => models.value.find((model) => model.slug === slug);
  return { models, vendors, updatedAt, findBySlug, overrides };
}

export { USD_TO_CNY_CHECKED_AT as U, formatPrice as a, formatContext as b, formatTps as c, formatLatency as d, billingWarnings as e, formatScore as f, scoreEntries as g, findAlternatives as h, injectModelReferences as i, USD_TO_CNY as j, filterModels as k, sortModels as s, useHoxiModels as u };
