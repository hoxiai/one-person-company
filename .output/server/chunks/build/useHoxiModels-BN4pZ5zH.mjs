import { computed } from 'vue';
import { h as hoxiModels } from './models-VgTGFaGO.mjs';
import { h as hoxiVendors } from './vendors-sPFB0I2R.mjs';
import { p as parseOverrides, H as HOXI_OVERRIDES_KEY, E as EMPTY_OVERRIDES, a as applyOverrides, b as buildModelViews, l as latestUpdatedAt } from './model-domain-gc5XLZ8l.mjs';
import { c as useSettings, u as useI18n, y as useFetch } from './server.mjs';

const SCENE_EN_MAP = {
  "\u590D\u6742\u63A8\u7406": "Deep Reasoning",
  "\u5199\u4EE3\u7801": "Coding",
  "Agent \u5DE5\u5177\u8C03\u7528": "Agent Tool Use",
  "\u957F\u6587\u6863": "Long Context",
  "\u65E5\u5E38\u95EE\u7B54": "General Chat",
  "\u6279\u91CF\u5904\u7406": "Batch Processing",
  "\u56FE\u7247\u7406\u89E3": "Vision",
  "\u4E2D\u6587\u5199\u4F5C": "Multilingual Writing"
};
const BADGE_EN_MAP = {
  "\u7EFC\u5408\u5206\u7B2C\u4E00": "#1 Overall",
  "\u6781\u7701": "Ultra Low Cost",
  "\u6700\u5FEB": "Fastest TPS",
  "\u56FD\u4EA7\u6027\u4EF7\u6BD4": "Best Value",
  "\u6027\u4EF7\u6BD4\u4E4B\u738B": "Value King",
  "\u514D\u8D39": "Free Tier",
  "\u81EA\u8425\u63A8\u8350": "Official Pick",
  "\u4EE3\u7801\u5E73\u66FF\u738B": "Best for Coding",
  "\u8001\u724C\u4E2D\u8F6C": "Established",
  "\u7A33\u5B9A\u5907\u7528": "Reliable Backup",
  "\u6781\u7AEF\u4FBF\u5B9C": "Budget Pick",
  "\u767D\u83DC\u4EF7": "Ultra Cheap",
  "\u7701 90%": "Save 90%"
};
const MODEL_SUMMARY_EN_MAP = {
  "claude-fable-5": "Ultimate powerhouse for massive architecture design and deep refactoring; always-on deep thinking with higher latency, ideal for complex async tasks.",
  "claude-opus-5": "Top-tier workhorse for multi-file refactoring and agentic tool use; rock-solid reasoning and first-pass code accuracy.",
  "claude-sonnet-5": "Daily full-stack driver for TypeScript, Vue, and Go; low hallucination rate and significantly better value than flagship tiers.",
  "claude-haiku-4-5": "Blazing-fast lightweight model for log analysis and quick code completions; complex multi-file logic may require higher tiers.",
  "gpt-5-6-sol": "Broad domain knowledge and thorough system design; highly reliable logic and code generation, best paired with token budget controls.",
  "gpt-5-6-terra": "Well-balanced for full-stack engineering and long-context refactoring; fast token output speed with longer initial thinking time on max tier.",
  "gpt-5-6-luna": "1M+ context window at a fraction of the cost; ideal for batch testing and long-document triage.",
  "gemini-3-7-flash": "Sub-second TTFT and 360+ TPS; unbeaten value for rapid code completion, multimodal parsing, and everyday CRUD tasks.",
  "gemini-3-1-pro": "Strong 1M+ token repository comprehension; note the 2x tiered pricing step above 200K input tokens.",
  "gemini-3-1-flash-lite": "Ultra-low-cost workhorse for high-volume text and lightweight chat; watch out for audio input surcharges.",
  "deepseek-v4-pro": "Flagship open-ecosystem reasoning model with 1.48s TTFT and sharp debugging accuracy; 50% off during off-peak hours.",
  "deepseek-v4-flash": "Ultra-affordable everyday coding and chat alternative with a 1M context window for high-frequency workloads.",
  "qwen3-8-max": "Top-tier multilingual and vision reasoning model with strong instruction following; slower token output speed on long generations.",
  "qwen3-8-flash": "Sub-cent 1M context with multimodal support and 50% batch discount; great for high-volume content and code scaffolding.",
  "kimi-k3": "Exceptional long-document analysis and full-repo comprehension with automatic context caching.",
  "glm-5-3": "High-value reasoning flagship with 1.57s TTFT and solid code generation at 40% of comparable flagship cost.",
  "glm-5-3-flash": "Near-flagship benchmark score at a fraction of the price with 1.47s TTFT; ideal for everyday feature development.",
  "glm-4-7-flash": "Zero-cost 200K context model for rapid prototyping, unit test scaffolding, and lightweight agent pipelines.",
  "doubao-seed-2-0-mini": "Ultra-low-cost multimodal model for short inputs; note progressive price tiers above 32K and 128K input tokens.",
  "minimax-m3": "1M context window with 50% flat discount under 512K input tokens; great for large document synthesis."
};
const GATEWAY_EN_MAP = {
  "ainode-pro": {
    name: "AINode Direct Pro",
    badge: "Official Pick",
    features: ["Low-latency direct routing", "100% full-weight thinking mode", "Instant top-up", "Never-expiring balance"],
    caveat: "Enterprise-grade dedicated upstream channels only; zero quantized or downgraded models."
  },
  "deepseek-direct": {
    name: "DeepSeek Full-Weight Direct",
    badge: "Best for Coding",
    features: ["High-concurrency cluster", "TTFT < 300ms", "64K+ context window", "Plug-and-play with Hoxi & Cursor"],
    caveat: "Automatically fails over to backup compute pools during upstream peak congestion."
  },
  "duiapi": {
    name: "DuiAPI Aggregator",
    badge: "Established",
    features: ["Broad model catalog", "Multi-protocol compatibility"],
    caveat: "Minor queueing latency during peak hours; test with a small balance first."
  },
  "hao-ai": {
    name: "hao.ai Developer Hub",
    badge: "Reliable Backup",
    features: ["Global edge acceleration", "Multiple Claude upstream routes"],
    caveat: "Slightly higher unit price; reliable secondary fallback route."
  },
  "cun-ai": {
    name: "CUN.ai Geek Relay",
    badge: "Budget Pick",
    features: ["Rock-bottom token rates", "Supports niche models"],
    caveat: "Stricter concurrency limits on some nodes; long generations may occasionally truncate."
  },
  "qwen-bailian": {
    name: "Qwen Coder Dedicated Line",
    badge: "Ultra Cheap",
    features: ["Fastest TTFT (<200ms)", "Multi-cloud BGP routing", "Uncapped concurrency"],
    caveat: "Great for fast autocompletion; pair with Claude Opus/Sonnet for deep architecture design."
  },
  "claude-35-budget": {
    name: "Claude Sonnet Value Channel",
    badge: "Save 90%",
    features: ["High cost-efficiency", "200K context window", "Prompt caching discount supported"],
    caveat: "Dependable daily coding driver when full extended thinking is not required."
  }
};
const PLAN_EN_MAP = {
  "cursor-pro": {
    name: "Cursor Pro Official",
    vendorLabel: "Cursor",
    priceLabel: "$20 / mo",
    quotaNote: "500 Fast Requests/mo + unlimited slow requests; multi-file Composer & Agent mode."
  },
  "claude-pro": {
    name: "Claude Pro Official",
    vendorLabel: "Anthropic",
    priceLabel: "$20 / mo",
    quotaNote: "~45 messages per 5 hours (dynamic by load); full Extended Thinking & Artifacts."
  },
  "github-copilot": {
    name: "GitHub Copilot Individual",
    vendorLabel: "GitHub",
    priceLabel: "$10 / mo ($100/yr)",
    quotaNote: "Unlimited inline completions + multi-model Copilot Chat (Claude, GPT, Gemini)."
  },
  "chatgpt-plus": {
    name: "ChatGPT Plus Official",
    vendorLabel: "OpenAI",
    priceLabel: "$20 / mo",
    quotaNote: "80 GPT-4o messages per 3 hours + weekly reasoning quota & Canvas workspace."
  },
  "windsurf-pro": {
    name: "Windsurf Pro (Codeium)",
    vendorLabel: "Codeium",
    priceLabel: "$15 / mo",
    quotaNote: "500 Fast Prompts/mo with Cascade multi-file agentic flow."
  },
  "google-one-ai": {
    name: "Google One AI Premium",
    vendorLabel: "Google",
    priceLabel: "$19.99 / mo",
    quotaNote: "Gemini Advanced with 1M context window + 2TB Google Drive storage."
  }
};
function translateSceneEn(scene) {
  return SCENE_EN_MAP[scene] || scene;
}
function translateBadgeEn(badge) {
  return BADGE_EN_MAP[badge] || badge;
}
function localizeModelEn(model) {
  return {
    ...model,
    summary: MODEL_SUMMARY_EN_MAP[model.slug] || model.summary,
    scenes: (model.scenes || []).map(translateSceneEn),
    badges: (model.badges || []).map(translateBadgeEn)
  };
}
function localizeGatewayEn(gw) {
  var _a;
  const en = GATEWAY_EN_MAP[gw.id];
  if (!en) {
    return {
      ...gw,
      badge: gw.badge ? translateBadgeEn(gw.badge) : gw.badge
    };
  }
  return {
    ...gw,
    name: en.name,
    badge: (_a = en.badge) != null ? _a : gw.badge ? translateBadgeEn(gw.badge) : void 0,
    features: en.features,
    caveat: en.caveat
  };
}
function localizePlanEn(plan) {
  const en = PLAN_EN_MAP[plan.slug];
  if (!en) return plan;
  return {
    ...plan,
    name: en.name,
    vendorLabel: en.vendorLabel,
    priceLabel: en.priceLabel,
    quotaNote: en.quotaNote
  };
}
function useHoxiModels() {
  const { getSetting } = useSettings();
  const { locale } = useI18n();
  const isEn = computed(() => {
    const val = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
    return val.toLowerCase().startsWith("en");
  });
  const fetchState = useFetch(
    "/api/hoxi/models",
    {
      key: "hoxi-db-models",
      default: () => null
    },
    "$ZOLA80VdjY"
    /* nuxt-injected */
  );
  const { data: dbModels } = fetchState;
  const overrides = computed(() => {
    try {
      return parseOverrides(getSetting(HOXI_OVERRIDES_KEY));
    } catch {
      return EMPTY_OVERRIDES;
    }
  });
  const effectiveModels = computed(() => {
    const baseModels = Array.isArray(dbModels.value) ? dbModels.value : hoxiModels;
    const raw = applyOverrides(baseModels, overrides.value);
    return isEn.value ? raw.map(localizeModelEn) : raw;
  });
  const models = computed(() => buildModelViews(effectiveModels.value));
  const vendors = computed(() => hoxiVendors);
  const updatedAt = computed(() => latestUpdatedAt(effectiveModels.value));
  const findBySlug = (slug) => models.value.find((model) => model.slug === slug);
  const ready = (async () => {
    try {
      if (fetchState && typeof fetchState.then === "function") {
        await fetchState;
      }
    } catch {
    }
  })();
  return { models, vendors, updatedAt, findBySlug, overrides, ready };
}

export { localizePlanEn as a, localizeGatewayEn as l, useHoxiModels as u };
//# sourceMappingURL=useHoxiModels-BN4pZ5zH.mjs.map
