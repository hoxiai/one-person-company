function normalizeHoxiLocale(raw) {
  const val = String(raw || "en").trim();
  const lower = val.toLowerCase();
  if (lower === "zh-hk" || lower === "zh-tw" || lower === "zh-mo") return "zh-HK";
  if (lower.startsWith("zh")) return "zh";
  if (lower.startsWith("ja")) return "ja";
  if (lower.startsWith("ko")) return "ko";
  return "en";
}
const CATEGORY_LABELS_I18N = {
  "all": {
    "zh": "\u5168\u90E8\u9879\u76EE",
    "zh-HK": "\u5168\u90E8\u9805\u76EE",
    "en": "All Projects",
    "ja": "\u3059\u3079\u3066\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
    "ko": "\uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8"
  },
  "cross-border": {
    "zh": "\u5916\u8D38\u4E0E\u8DE8\u5883",
    "zh-HK": "\u5916\u8CBF\u8207\u8DE8\u5883",
    "en": "Cross-Border & Trade",
    "ja": "\u8D8A\u5883EC\u30FB\u8CBF\u6613",
    "ko": "\uD06C\uB85C\uC2A4\uBCF4\uB354\xB7\uBB34\uC5ED"
  },
  "saas": {
    "zh": "\u5546\u4E1A\u53D8\u73B0 SaaS",
    "zh-HK": "\u5546\u696D\u8B8A\u73FE SaaS",
    "en": "Commercial SaaS",
    "ja": "\u53CE\u76CA\u5316 Micro-SaaS",
    "ko": "\uC218\uC775\uD615 Micro-SaaS"
  },
  "ai-infra": {
    "zh": "AI \u9009\u578B\u4E0E\u6D41\u91CF",
    "zh-HK": "AI \u9078\u578B\u8207\u6D41\u91CF",
    "en": "AI Portal & Traffic",
    "ja": "AI\u9078\u5B9A\u30FB\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF",
    "ko": "AI \uC120\uC815\xB7\uD2B8\uB798\uD53D"
  },
  "gateway": {
    "zh": "\u7B97\u529B\u57FA\u5EFA",
    "zh-HK": "\u7B97\u529B\u57FA\u5EFA",
    "en": "Compute Infra",
    "ja": "\u8A08\u7B97\u30A4\u30F3\u30D5\u30E9",
    "ko": "\uC5F0\uC0B0 \uC778\uD504\uB77C"
  },
  "devtools": {
    "zh": "\u5F00\u53D1\u6548\u7387\u4E0E\u5E95\u5EA7",
    "zh-HK": "\u958B\u767C\u6548\u7387\u8207\u5E95\u5EA7",
    "en": "DevTools & Engine",
    "ja": "\u958B\u767A\u30C4\u30FC\u30EB\u30FB\u57FA\u76E4",
    "ko": "\uAC1C\uBC1C \uB3C4\uAD6C\xB7\uAE30\uBC18"
  },
  "open-source": {
    "zh": "\u5F00\u6E90\u5F15\u6D41",
    "zh-HK": "\u958B\u6E90\u5F15\u6D41",
    "en": "Open Source",
    "ja": "\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9",
    "ko": "\uC624\uD508\uC18C\uC2A4"
  }
};
function getCategoryLabelForLocale(category, locale, fallback) {
  const entry = CATEGORY_LABELS_I18N[category];
  if (entry && entry[locale]) return entry[locale];
  return fallback || category;
}
function inferProjectMatchProfile(project) {
  const cat = String(project.category || "").toLowerCase();
  const text = `${project.id} ${project.name} ${project.description} ${(project.techStack || []).join(" ")}`.toLowerCase();
  if (cat === "cross-border" || text.includes("\u8DE8\u5883") || text.includes("\u5916\u8D38") || text.includes("ozon") || text.includes("shopify") || text.includes("tiktok")) {
    return {
      roles: { trade: 95, growth: 88, product: 84, developer: 76, designer: 70 },
      dimensions: { market: 86, delivery: 65, distribution: 88, leverage: 84, resilience: 78 },
      difficulty: "easy",
      revenueModel: "SaaS \u8BA2\u9605 + \u8DE8\u5883\u5E97\u7FA4/\u8BE2\u76D8\u5DEE\u4EF7",
      monthlyRevenueEstimate: "$2,500 - $18,000 / mo"
    };
  }
  if (cat === "gateway" || text.includes("gateway") || text.includes("\u7F51\u5173") || text.includes("token")) {
    return {
      roles: { developer: 94, product: 78, growth: 74, trade: 62, designer: 55 },
      dimensions: { market: 78, delivery: 90, distribution: 76, leverage: 94, resilience: 82 },
      difficulty: "medium",
      revenueModel: "\u9884\u5145\u503C Token \u5DEE\u4EF7 + \u9AD8\u9891 API \u8BA1\u8D39",
      monthlyRevenueEstimate: "$3,000 - $25,000 / mo"
    };
  }
  if (cat === "devtools" || text.includes("desktop") || text.includes("cli") || text.includes("boilerplate")) {
    return {
      roles: { developer: 96, product: 80, designer: 68, growth: 65, trade: 58 },
      dimensions: { market: 76, delivery: 92, distribution: 72, leverage: 88, resilience: 80 },
      difficulty: "hard",
      revenueModel: "\u5F00\u6E90\u5F15\u6D41 + \u4E91\u7AEF\u7B97\u529B/Pro \u8BA2\u9605\u53D8\u73B0",
      monthlyRevenueEstimate: "$2,000 - $15,000 / mo"
    };
  }
  if (cat === "ai-infra" || text.includes("seo") || text.includes("portal") || text.includes("\u95E8\u6237") || text.includes("\u699C\u5355")) {
    return {
      roles: { growth: 94, product: 90, trade: 82, designer: 78, developer: 80 },
      dimensions: { market: 88, delivery: 70, distribution: 92, leverage: 85, resilience: 80 },
      difficulty: "easy",
      revenueModel: "SEO \u81EA\u7136\u6D41\u91CF + \u8054\u76DF\u5206\u6210 + \u4F1A\u5458\u8BA2\u9605",
      monthlyRevenueEstimate: "$1,500 - $12,000 / mo"
    };
  }
  return {
    roles: { product: 90, developer: 88, designer: 84, growth: 82, trade: 78 },
    dimensions: { market: 85, delivery: 80, distribution: 80, leverage: 84, resilience: 76 },
    difficulty: "medium",
    revenueModel: "Micro-SaaS \u6708\u5EA6\u8BA2\u9605 + \u7B97\u529B\u70B9\u6570\u5305",
    monthlyRevenueEstimate: "$2,000 - $16,000 / mo"
  };
}
function localizeProject(project, rawLocale) {
  const locale = normalizeHoxiLocale(rawLocale);
  const locales = project.locales || {};
  const exact = locales[locale];
  const fallback = locale === "zh-HK" ? locales["zh"] || {} : locale === "zh" ? locales["zh"] || {} : locales["en"] || locales["zh"] || {};
  const merged = {
    ...project,
    name: (exact == null ? void 0 : exact.name) || (fallback == null ? void 0 : fallback.name) || project.name,
    tagline: (exact == null ? void 0 : exact.tagline) || (fallback == null ? void 0 : fallback.tagline) || project.tagline,
    description: (exact == null ? void 0 : exact.description) || (fallback == null ? void 0 : fallback.description) || project.description,
    categoryLabel: (exact == null ? void 0 : exact.categoryLabel) || getCategoryLabelForLocale(project.category, locale, (fallback == null ? void 0 : fallback.categoryLabel) || project.categoryLabel),
    statusLabel: (exact == null ? void 0 : exact.statusLabel) || (fallback == null ? void 0 : fallback.statusLabel) || project.statusLabel,
    modelUsed: (exact == null ? void 0 : exact.modelUsed) || (fallback == null ? void 0 : fallback.modelUsed) || project.modelUsed,
    monthlyCost: (exact == null ? void 0 : exact.monthlyCost) || (fallback == null ? void 0 : fallback.monthlyCost) || project.monthlyCost,
    badge: (exact == null ? void 0 : exact.badge) || (fallback == null ? void 0 : fallback.badge) || project.badge,
    techStack: (exact == null ? void 0 : exact.techStack) && exact.techStack.length > 0 ? exact.techStack : (fallback == null ? void 0 : fallback.techStack) && fallback.techStack.length > 0 ? fallback.techStack : project.techStack,
    highlights: (exact == null ? void 0 : exact.highlights) && exact.highlights.length > 0 ? exact.highlights : (fallback == null ? void 0 : fallback.highlights) && fallback.highlights.length > 0 ? fallback.highlights : project.highlights,
    matchProfile: project.matchProfile || inferProjectMatchProfile(project)
  };
  return merged;
}
const DIMENSION_NAMES_I18N = {
  market: {
    "zh": "\u5546\u4E1A\u4E0E\u9A8C\u8BC1\u55C5\u89C9",
    "zh-HK": "\u5546\u696D\u8207\u9A57\u8B49\u55C5\u89BA",
    "en": "Market & Validation Instinct",
    "ja": "\u30D3\u30B8\u30CD\u30B9\u691C\u8A3C\u30BB\u30F3\u30B9",
    "ko": "\uBE44\uC988\uB2C8\uC2A4 \uAC80\uC99D \uAC10\uAC01"
  },
  delivery: {
    "zh": "\u5168\u6808 AI \u4EA4\u4ED8\u529B",
    "zh-HK": "\u5168\u68E7 AI \u4EA4\u4ED8\u529B",
    "en": "Full-Stack AI Delivery",
    "ja": "\u30D5\u30EB\u30B9\u30BF\u30C3\u30AFAI\u5B9F\u88C5\u529B",
    "ko": "\uD480\uC2A4\uD0DD AI \uAD6C\uD604\uB825"
  },
  distribution: {
    "zh": "\u6D41\u91CF\u4E0E\u5206\u53D1\u529B",
    "zh-HK": "\u6D41\u91CF\u8207\u5206\u767C\u529B",
    "en": "Traffic & Distribution",
    "ja": "\u96C6\u5BA2\u30FB\u30C7\u30A3\u30B9\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3\u529B",
    "ko": "\uD2B8\uB798\uD53D \uBC0F \uBC30\uD3EC\uB825"
  },
  leverage: {
    "zh": "\u6210\u672C\u6838\u7B97\u4E0E\u6760\u6746",
    "zh-HK": "\u6210\u672C\u6838\u7B97\u8207\u69D3\u687F",
    "en": "Cost Accounting & Leverage",
    "ja": "\u30B3\u30B9\u30C8\u8A08\u7B97\u30FB\u30EC\u30D0\u30EC\u30C3\u30B8\u529B",
    "ko": "\uBE44\uC6A9 \uACC4\uC0B0 \uBC0F \uB808\uBC84\uB9AC\uC9C0"
  },
  resilience: {
    "zh": "\u8DD1\u9053\u4E0E\u5FC3\u667A\u97E7\u6027",
    "zh-HK": "\u8DD1\u9053\u8207\u5FC3\u667A\u97CC\u6027",
    "en": "Runway & Mental Grit",
    "ja": "\u8CC7\u91D1\u30E9\u30F3\u30A6\u30A7\u30A4\u30FB\u7CBE\u795E\u7684\u56DE\u5FA9\u529B",
    "ko": "\uB7F0\uC6E8\uC774 \uBC0F \uBA58\uD0C8 \uD68C\uBCF5\uB825"
  }
};
const ROLE_NAMES_I18N = {
  developer: {
    "zh": "\u7814\u53D1 / \u7A0B\u5E8F\u5458",
    "zh-HK": "\u7814\u767C / \u5DE5\u7A0B\u5E2B",
    "en": "Developer / Engineer",
    "ja": "\u30A8\u30F3\u30B8\u30CB\u30A2 / \u958B\u767A\u8005",
    "ko": "\uAC1C\uBC1C\uC790 / \uC5D4\uC9C0\uB2C8\uC5B4"
  },
  product: {
    "zh": "\u4EA7\u54C1\u7ECF\u7406 / \u4E1A\u52A1",
    "zh-HK": "\u7522\u54C1\u7D93\u7406 / \u696D\u52D9",
    "en": "Product Manager",
    "ja": "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC",
    "ko": "\uD504\uB85C\uB355\uD2B8 \uB9E4\uB2C8\uC800"
  },
  designer: {
    "zh": "UI/UX \u8BBE\u8BA1\u5E08",
    "zh-HK": "UI/UX \u8A2D\u8A08\u5E2B",
    "en": "UI/UX Designer",
    "ja": "UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC",
    "ko": "UI/UX \uB514\uC790\uC774\uB108"
  },
  growth: {
    "zh": "\u8FD0\u8425 / \u589E\u957F / \u5E02\u573A",
    "zh-HK": "\u904B\u71DF / \u589E\u9577 / \u5E02\u5834",
    "en": "Growth & Marketing",
    "ja": "\u30B0\u30ED\u30FC\u30B9\u30FB\u30DE\u30FC\u30B1\u30BF\u30FC",
    "ko": "\uADF8\uB85C\uC2A4 / \uB9C8\uCF00\uD130"
  },
  trade: {
    "zh": "\u5916\u8D38 / \u8DE8\u5883\u5356\u5BB6",
    "zh-HK": "\u5916\u8CBF / \u8DE8\u5883\u8CE3\u5BB6",
    "en": "Cross-Border & Foreign Trade",
    "ja": "\u8D8A\u5883EC\u30FB\u8CBF\u6613\u30BB\u30E9\u30FC",
    "ko": "\uD574\uC678\uBB34\uC5ED / \uD06C\uB85C\uC2A4\uBCF4\uB354 \uC140\uB7EC"
  }
};
const BLINDSPOT_GUARD_I18N = {
  market: {
    "zh": "\u5148\u7528\u5355\u9875\u6216\u73B0\u6210\u5546\u54C1\u5361\u6D4B\u771F\u5B9E\u4ED8\u6B3E/\u8BE2\u76D8\u70B9\u51FB\uFF0C\u4E25\u7981\u5728\u6CA1\u6536\u5230\u7B2C\u4E00\u7B14\u94B1\u524D\u95ED\u95E8\u5199\u590D\u6742\u7CFB\u7EDF\u3002",
    "zh-HK": "\u5148\u7528\u55AE\u9801\u6216\u73FE\u6210\u5546\u54C1\u5361\u6E2C\u771F\u5BE6\u4ED8\u6B3E/\u8A62\u76E4\u9EDE\u64CA\uFF0C\u56B4\u7981\u5728\u6C92\u6536\u5230\u7B2C\u4E00\u7B46\u9322\u524D\u9589\u9580\u5BEB\u8907\u96DC\u7CFB\u7D71\u3002",
    "en": "Validate willingness to pay with a 1-page landing or live listing first; never build complex backend systems before your first paid order.",
    "ja": "\u8907\u96D1\u306A\u30B7\u30B9\u30C6\u30E0\u3092\u4F5C\u308B\u524D\u306B\u30011\u679A\u306ELP\u3084\u30C6\u30B9\u30C8\u51FA\u54C1\u3067\u5B9F\u969B\u306E\u6C7A\u6E08\u30FB\u554F\u3044\u5408\u308F\u305B\u53CD\u5FDC\u3092\u691C\u8A3C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "ko": "\uBCF5\uC7A1\uD55C \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uBC1C\uD558\uAE30 \uC804\uC5D0 \uC6D0\uD398\uC774\uC9C0 \uB79C\uB529\uC774\uB098 \uD14C\uC2A4\uD2B8 \uC0C1\uD488 \uB4F1\uB85D\uC73C\uB85C \uC2E4\uC81C \uACB0\uC81C\xB7\uBB38\uC758 \uBC18\uC751\uBD80\uD130 \uAC80\uC99D\uD558\uC138\uC694."
  },
  delivery: {
    "zh": "\u76F4\u63A5\u590D\u7528\u73B0\u6210 SaaS \u5E95\u5EA7\uFF08\u5982 APay / \u8F7B\u94FA\u6280\u80FD / Supabase\uFF09\uFF0C\u7528 Cursor/Hoxi Agent \u9A71\u52A8\u4EA4\u4ED8\uFF0C\u522B\u81EA\u5DF1\u624B\u642D\u5E95\u5C42\u8FD0\u7EF4\u3002",
    "zh-HK": "\u76F4\u63A5\u8907\u7528\u73FE\u6210 SaaS \u5E95\u5EA7\uFF08\u5982 APay / \u8F15\u92EA\u6280\u80FD / Supabase\uFF09\uFF0C\u7528 Cursor/Hoxi Agent \u9A45\u52D5\u4EA4\u4ED8\uFF0C\u5225\u81EA\u5DF1\u624B\u642D\u5E95\u5C64\u904B\u7DAD\u3002",
    "en": "Reuse battle-tested templates (APay / Hoxi Skills / Supabase) and let AI coding agents ship the glue code instead of configuring servers by hand.",
    "ja": "\u65E2\u5B58\u306ESaaS\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3084Hoxi\u30B9\u30AD\u30EB\u3092\u518D\u5229\u7528\u3057\u3001\u30A4\u30F3\u30D5\u30E9\u69CB\u7BC9\u3067\u7ACB\u3061\u6B62\u307E\u3089\u305AAI\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3067\u4E00\u6C17\u901A\u8CAB\u5B9F\u88C5\u3057\u307E\u3057\u3087\u3046\u3002",
    "ko": "\uAE30\uC874 SaaS \uD15C\uD50C\uB9BF\uACFC Hoxi \uC2A4\uD0AC\uC744 \uC7AC\uC0AC\uC6A9\uD558\uACE0, \uC778\uD504\uB77C \uAD6C\uCD95\uC5D0 \uC2DC\uAC04\uC744 \uC4F0\uC9C0 \uB9D0\uACE0 AI \uC5D0\uC774\uC804\uD2B8\uB85C \uBE60\uB974\uAC8C \uBC30\uD3EC\uD558\uC138\uC694."
  },
  distribution: {
    "zh": "\u6BCF\u5468\u56FA\u5B9A\u7559\u51FA 40% \u65F6\u95F4\u505A\u591A\u8BED\u79CD SEO\u3001\u516C\u5F00\u6784\u5EFA\uFF08Build in Public\uFF09\u6216\u7CBE\u51C6\u5916\u8D38\u5BA2\u6237\u4E3B\u52A8\u89E6\u8FBE\uFF0C\u522B\u5750\u7B49\u81EA\u7136\u6D41\u91CF\u3002",
    "zh-HK": "\u6BCF\u9031\u56FA\u5B9A\u7559\u51FA 40% \u6642\u9593\u505A\u591A\u8A9E\u7A2E SEO\u3001\u516C\u958B\u69CB\u5EFA\uFF08Build in Public\uFF09\u6216\u7CBE\u6E96\u5916\u8CBF\u5BA2\u6236\u4E3B\u52D5\u89F8\u9054\uFF0C\u5225\u5750\u7B49\u81EA\u7136\u6D41\u91CF\u3002",
    "en": "Dedicate 40% of your week to programmatic SEO, Build in Public, or direct outbound outreach rather than waiting passively for traffic.",
    "ja": "\u9031\u306E40%\u306F\u591A\u8A00\u8A9ESEO\u3084Build in Public\u3001\u898B\u8FBC\u307F\u5BA2\u3078\u306E\u76F4\u63A5\u30A2\u30D7\u30ED\u30FC\u30C1\u306B\u5145\u3066\u3001\u81EA\u7136\u6D41\u5165\u3092\u5F85\u3064\u3060\u3051\u306B\u3057\u306A\u3044\u3053\u3068\u3002",
    "ko": "\uB9E4\uC8FC \uC2DC\uAC04\uC758 40%\uB97C \uB2E4\uAD6D\uC5B4 SEO, \uACF5\uAC1C \uBE4C\uB529(Build in Public), \uC7A0\uC7AC \uACE0\uAC1D \uC9C1\uC811 \uCEE8\uD0DD\uC5D0 \uD22C\uC790\uD558\uC138\uC694."
  },
  leverage: {
    "zh": "\u65E5\u5E38\u6279\u5904\u7406\u4E0E\u7FFB\u8BD1\u6D17\u7A3F\u5207\u5230 DeepSeek V3 / Gemini Flash \u4E13\u7EBF\uFF0C\u4EC5\u6838\u5FC3\u63A8\u7406\u7528 Claude Sonnet\uFF0C\u5C06\u6BDB\u5229\u9501\u6B7B\u5728 75% \u4EE5\u4E0A\u3002",
    "zh-HK": "\u65E5\u5E38\u6279\u8655\u7406\u8207\u7FFB\u8B6F\u6D17\u7A3F\u5207\u5230 DeepSeek V3 / Gemini Flash \u5C08\u7DDA\uFF0C\u50C5\u6838\u5FC3\u63A8\u7406\u7528 Claude Sonnet\uFF0C\u5C07\u6BDB\u5229\u9396\u6B7B\u5728 75% \u4EE5\u4E0A\u3002",
    "en": "Route bulk translation and extraction to DeepSeek V3 / Gemini Flash gateways, reserving flagship models for core reasoning to keep gross margin above 75%.",
    "ja": "\u4E00\u62EC\u7FFB\u8A33\u3084\u30C7\u30FC\u30BF\u62BD\u51FA\u306FDeepSeek V3\u3084Gemini Flash\u5C02\u7528\u56DE\u7DDA\u306B\u632F\u308A\u5206\u3051\u3001\u7C97\u5229\u738775%\u4EE5\u4E0A\u3092\u78BA\u4FDD\u3057\u307E\u3057\u3087\u3046\u3002",
    "ko": "\uB300\uB7C9 \uBC88\uC5ED\xB7\uCD94\uCD9C \uC791\uC5C5\uC740 DeepSeek V3 / Gemini Flash \uAC8C\uC774\uD2B8\uC6E8\uC774\uB85C \uB77C\uC6B0\uD305\uD558\uC5EC \uB9E4\uCD9C\uCD1D\uC774\uC775\uB960\uC744 75% \uC774\uC0C1\uC73C\uB85C \uC720\uC9C0\uD558\uC138\uC694."
  },
  resilience: {
    "zh": "\u8BBE\u7F6E 30 \u5929\u6700\u5C0F\u6295\u5165\u6B62\u635F\u7EBF\uFF08\u6708\u56FA\u5B9A\u6210\u672C\u63A7\u5236\u5728 \xA5300 \u5185\uFF09\uFF0C\u5148\u8DD1\u901A\u524D 10 \u4E2A\u4ED8\u8D39\u5BA2\u6237\u518D\u9010\u6B65\u653E\u5927\u6295\u5165\u3002",
    "zh-HK": "\u8A2D\u7F6E 30 \u5929\u6700\u5C0F\u6295\u5165\u6B62\u640D\u7DDA\uFF08\u6708\u56FA\u5B9A\u6210\u672C\u63A7\u5236\u5728 \xA5300 \u5167\uFF09\uFF0C\u5148\u8DD1\u901A\u524D 10 \u500B\u4ED8\u8CBB\u5BA2\u6236\u518D\u9010\u6B65\u653E\u5927\u6295\u5165\u3002",
    "en": "Cap monthly fixed cost under $45 and set a 30-day validation checkpoint: land your first 10 paying customers before scaling spend.",
    "ja": "\u6708\u984D\u56FA\u5B9A\u8CBB\u30925,000\u5186\u4EE5\u4E0B\u306B\u6291\u3048\u300130\u65E5\u9593\u306E\u64A4\u9000\u30E9\u30A4\u30F3\u3092\u8A2D\u5B9A\u3057\u3066\u3001\u307E\u305A\u6700\u521D\u306E\u6709\u6599\u9867\u5BA210\u4EBA\u3092\u7372\u5F97\u3057\u307E\u3057\u3087\u3046\u3002",
    "ko": "\uC6D4 \uACE0\uC815\uBE44\uB97C $45 \uC774\uD558\uB85C \uC81C\uD55C\uD558\uACE0 30\uC77C \uC190\uC808 \uAE30\uC900\uC120\uC744 \uC124\uC815\uD55C \uB4A4, \uCCAB \uC720\uB8CC \uACE0\uAC1D 10\uBA85\uC744 \uD655\uBCF4\uD55C \uD6C4 \uD655\uC7A5\uD558\uC138\uC694."
  }
};
function rankProjectsForUser(options) {
  var _a;
  const locale = normalizeHoxiLocale(options.locale);
  const role = options.role || "developer";
  const scores = options.dimensionScores || {
    market: 65,
    delivery: 65,
    distribution: 65,
    leverage: 65,
    resilience: 65
  };
  const dimKeys = ["market", "delivery", "distribution", "leverage", "resilience"];
  const sortedUserDims = [...dimKeys].sort((a, b) => {
    var _a2, _b;
    return ((_a2 = scores[b]) != null ? _a2 : 50) - ((_b = scores[a]) != null ? _b : 50);
  });
  const strongestKey = sortedUserDims[0] || "market";
  const weakestKey = sortedUserDims[sortedUserDims.length - 1] || "distribution";
  const localizedProjects = options.projects.map((p) => localizeProject(p, locale));
  const recommendations = localizedProjects.map((project) => {
    var _a2, _b, _c, _d;
    const profile = project.matchProfile || inferProjectMatchProfile(project);
    const roleAffinity = (_a2 = profile.roles[role]) != null ? _a2 : 75;
    let weightedSum = 0;
    let weightTotal = 0;
    for (const key of dimKeys) {
      const reqWeight = Math.max(40, (_b = profile.dimensions[key]) != null ? _b : 70);
      const userScore = Math.max(20, Math.min(100, (_c = scores[key]) != null ? _c : 65));
      const ratio = userScore >= reqWeight ? 86 + Math.min(14, (userScore - reqWeight) * 0.45) : 55 + userScore / reqWeight * 31;
      weightedSum += ratio * reqWeight;
      weightTotal += reqWeight;
    }
    const capabilityFit = weightTotal > 0 ? weightedSum / weightTotal : 75;
    const projectTopDims = [...dimKeys].sort(
      (a, b) => {
        var _a3, _b2;
        return ((_a3 = profile.dimensions[b]) != null ? _a3 : 70) - ((_b2 = profile.dimensions[a]) != null ? _b2 : 70);
      }
    );
    const strengthBonus = projectTopDims.slice(0, 2).includes(strongestKey) ? 4 : 0;
    const rawMatch = Math.round(roleAffinity * 0.46 + capabilityFit * 0.54 + strengthBonus);
    const matchScore = Math.max(62, Math.min(98, rawMatch));
    const roleName = ROLE_NAMES_I18N[role][locale];
    const strongName = DIMENSION_NAMES_I18N[strongestKey][locale];
    const strongScore = (_d = scores[strongestKey]) != null ? _d : 75;
    const weakName = DIMENSION_NAMES_I18N[weakestKey][locale];
    const weakGuard = BLINDSPOT_GUARD_I18N[weakestKey][locale];
    const firstHighlight = project.highlights && project.highlights[0] || project.monthlyCost || "";
    const thirdHighlight = project.highlights && project.highlights[2] || project.highlights && project.highlights[1] || "";
    const whyItFits = buildWhyItFitsCopy(locale, {
      roleName,
      strongName,
      strongScore,
      projectName: project.name,
      categoryLabel: project.categoryLabel
    });
    const howToMakeMoney = firstHighlight ? firstHighlight.replace(/^【[^】]+】\s*|^\[[^\]]+\]\s*/, "") : project.monthlyCost || profile.revenueModel;
    const watchOutBlindspot = buildBlindspotCopy(locale, {
      weakName,
      weakGuard
    });
    const firstWeekAction = thirdHighlight ? thirdHighlight.replace(/^【[^】]+】\s*|^\[[^\]]+\]\s*/, "") : project.tagline;
    return {
      project,
      matchScore,
      primaryStrengthKey: strongestKey,
      weakestDimensionKey: weakestKey,
      whyItFits,
      howToMakeMoney,
      watchOutBlindspot,
      firstWeekAction
    };
  });
  recommendations.sort((a, b) => b.matchScore - a.matchScore);
  const limit = (_a = options.limit) != null ? _a : 3;
  return limit > 0 ? recommendations.slice(0, limit) : recommendations;
}
function buildWhyItFitsCopy(locale, params) {
  switch (locale) {
    case "zh-HK":
      return `\u4F5C\u70BA\u3010${params.roleName}\u3011\uFF0C\u4F60\u7684\u9577\u677F\u662F\u300C${params.strongName}\uFF08${params.strongScore}\u5206\uFF09\u300D\uFF0C\u5207\u5165\u300C${params.categoryLabel}\u300D\u8CFD\u9053\u7684 ${params.projectName} \u80FD\u76F4\u63A5\u653E\u5927\u4F60\u7684\u6838\u5FC3\u69D3\u687F\u3002`;
    case "en":
      return `As a ${params.roleName}, your top strength in ${params.strongName} (${params.strongScore}/100) gives you an immediate unfair advantage in ${params.projectName} (${params.categoryLabel}).`;
    case "ja":
      return `\u3010${params.roleName}\u3011\u3068\u3057\u3066\u306E\u5F37\u307F\u3067\u3042\u308B\u300C${params.strongName}\uFF08${params.strongScore}\u70B9\uFF09\u300D\u3092\u6D3B\u304B\u3057\u3001\u300C${params.categoryLabel}\u300D\u9818\u57DF\u306E ${params.projectName} \u3067\u6700\u77ED\u3067\u53CE\u76CA\u5316\u3092\u72D9\u3048\u307E\u3059\u3002`;
    case "ko":
      return `[${params.roleName}]\uB85C\uC11C \uBCF4\uC720\uD55C '${params.strongName}(${params.strongScore}\uC810)' \uAC15\uC810\uC744 \uC0B4\uB824 '${params.categoryLabel}' \uBD84\uC57C\uC758 ${params.projectName} \uBAA8\uB378\uC744 \uAC00\uC7A5 \uBE60\uB974\uAC8C \uC218\uC775\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`;
    default:
      return `\u4F5C\u4E3A\u3010${params.roleName}\u3011\uFF0C\u4F60\u7684\u957F\u677F\u662F\u300C${params.strongName}\uFF08${params.strongScore}\u5206\uFF09\u300D\uFF0C\u5207\u5165\u300C${params.categoryLabel}\u300D\u8D5B\u9053\u7684 ${params.projectName} \u80FD\u76F4\u63A5\u653E\u5927\u4F60\u7684\u6838\u5FC3\u6760\u6746\u3002`;
  }
}
function buildBlindspotCopy(locale, params) {
  switch (locale) {
    case "zh-HK":
      return `\u91DD\u5C0D\u4F60\u7684\u8584\u5F31\u9805\u300C${params.weakName}\u300D\uFF1A${params.weakGuard}`;
    case "en":
      return `Guardrail for your ${params.weakName} gap: ${params.weakGuard}`;
    case "ja":
      return `\u5F31\u70B9\u300C${params.weakName}\u300D\u3078\u306E\u5BFE\u7B56\uFF1A${params.weakGuard}`;
    case "ko":
      return `\uC57D\uC810 '${params.weakName}' \uBCF4\uC644 \uC804\uB7B5: ${params.weakGuard}`;
    default:
      return `\u9488\u5BF9\u4F60\u7684\u8584\u5F31\u9879\u300C${params.weakName}\u300D\uFF1A${params.weakGuard}`;
  }
}
function buildClientProjectBreakdownPost(project, rawLocale) {
  var _a, _b;
  const locale = normalizeHoxiLocale(rawLocale);
  const p = localizeProject(project, locale);
  const profile = p.matchProfile || inferProjectMatchProfile(p);
  const highlights = p.highlights || [];
  const h0 = highlights[0] || p.monthlyCost || profile.revenueModel;
  const h1 = highlights[1] || p.monthlyCost || "";
  const h2 = highlights[2] || p.tagline;
  const techHtml = (p.techStack || []).map((t) => `<code>${t}</code>`).join(" \xB7 ");
  const slug = String(p.storyUrl || "").replace(/^\/blog\//, "").replace(/\/$/, "") || `${p.id}-breakdown`;
  if (locale === "en" || locale === "ja" || locale === "ko") {
    const content2 = `
<p>${p.tagline} \u2014 ${p.description}</p>
<h2>1. Core Logic & Solo Builder Positioning</h2>
<p><strong>${p.name}</strong> operates in the <strong>${p.categoryLabel}</strong> track. Instead of burning venture capital on cold traffic, it targets a sharp, high-frequency B2B or cross-border pain point with an automated AI pipeline.</p>
<blockquote>
  <p><strong>Core Model Stack:</strong> <code>${p.modelUsed || "DeepSeek V3.2 + Claude Sonnet 4.6"}</code> (connected via <span data-hoxi-model="deepseek-v3"></span> and <span data-hoxi-model="claude-sonnet-4-6"></span>)</p>
</blockquote>
<h2>2. Monetization & Token Cost Ledger</h2>
<ul>
  <li><strong>Revenue Engine:</strong> ${h0}</li>
  <li><strong>Compute & Fixed Cost Ledger:</strong> ${h1}</li>
  <li><strong>Estimated Solo Revenue Ceiling:</strong> <code>${profile.monthlyRevenueEstimate || "$2,500 - $18,000 / mo"}</code></li>
</ul>
<h2>3. Required Capabilities & 5D Fit Profile</h2>
<ul>
  <li><strong>Role Fit Scores:</strong> Trade/Cross-Border <code>${profile.roles.trade}</code> \xB7 Growth <code>${profile.roles.growth}</code> \xB7 Product <code>${profile.roles.product}</code> \xB7 Developer <code>${profile.roles.developer}</code> \xB7 Designer <code>${profile.roles.designer}</code></li>
  <li><strong>5D Requirements:</strong> Market <code>${profile.dimensions.market}</code> / Delivery <code>${profile.dimensions.delivery}</code> / Distribution <code>${profile.dimensions.distribution}</code> / Leverage <code>${profile.dimensions.leverage}</code> / Grit <code>${profile.dimensions.resilience}</code></li>
  <li><strong>Required Stack:</strong> ${techHtml}</li>
</ul>
<h2>4. 7-Day Solo Launch Playbook</h2>
<ol>
  <li><strong>Day 1\u20132 (Minimal Loop):</strong> ${h2}</li>
  <li><strong>Day 3\u20134 (Billing & Token Guardrails):</strong> Wire prepaid credits and AINode model routing to keep gross margin above 78%.</li>
  <li><strong>Day 5\u20137 (5-Locale Acquisition):</strong> Publish localized landing pages (EN / ZH / ZH-HK / JA / KO) and close your first 10 paying customers.</li>
</ol>`.trim();
    return {
      slug,
      key: "projects",
      locale,
      type: "blog",
      title: `${p.name} \u2014 ${p.tagline}`,
      description: p.description,
      content: content2,
      createdAt: ((_a = p.sourceMeta) == null ? void 0 : _a.lastSyncedAt) || "2026-04-16"
    };
  }
  const content = `
<p>${p.tagline} \u2014\u2014 ${p.description}</p>
<h2>\u4E00\u3001\u9879\u76EE\u5E95\u5C42\u903B\u8F91\uFF1A\u4E3A\u4EC0\u4E48\u9002\u5408\u4E00\u4EBA\u516C\u53F8\u5207\u5165\uFF1F</h2>
<p>\u5728\u4E00\u4EBA\u516C\u53F8\u4E0E\u5916\u8D38\u8DE8\u5883\u5B9E\u6218\u4F53\u7CFB\u91CC\uFF0C<strong>${p.name}</strong>\uFF08\u8D5B\u9053\u5206\u7C7B\uFF1A<strong>${p.categoryLabel}</strong>\uFF09\u5C5E\u4E8E\u5178\u578B\u7684\u9AD8\u73B0\u91D1\u6D41\u786E\u5B9A\u6027\u6807\u7684\u3002\u5B83\u76F4\u63A5\u5207\u5165\u771F\u5B9E\u5546\u4E1A\u573A\u666F\u4E2D\u6700\u75DB\u7684\u6548\u7387\u5361\u70B9\uFF0C\u7528 AI \u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41\u66FF\u4EE3\u6602\u8D35\u7684\u4EBA\u529B\u6210\u672C\u3002</p>
<blockquote>
  <p><strong>\u5EFA\u8BAE\u4E3B\u529B\u6A21\u578B\u6808\uFF1A</strong><code>${p.modelUsed || "DeepSeek V3.2 + Claude Sonnet 4.6"}</code>\uFF08\u76F4\u8FDE <span data-hoxi-model="deepseek-v3"></span> \u4E0E <span data-hoxi-model="claude-sonnet-4-6"></span> \u4E13\u7EBF\u8DEF\u7531\uFF09</p>
</blockquote>
<h2>\u4E8C\u3001\u600E\u4E48\u8D5A\u94B1\u4E0E\u7B97\u529B\u6210\u672C\u8D26\u672C\uFF08Unit Economics\uFF09</h2>
<ul>
  <li><strong>\u53D8\u73B0\u95ED\u73AF\uFF1A</strong>${h0}</li>
  <li><strong>\u7B97\u529B\u4E0E\u56FA\u5B9A\u6210\u672C\u8D26\u672C\uFF1A</strong>${h1}</li>
  <li><strong>\u9884\u4F30\u6708\u5EA6\u8425\u6536\u7A7A\u95F4\uFF1A</strong><code>${profile.monthlyRevenueEstimate || "$2,500 - $18,000 / mo"}</code></li>
</ul>
<h2>\u4E09\u3001\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u4E0E\u88C5\u5907\u6808\uFF08\u4E94\u7EF4\u80FD\u529B & \u4E94\u89D2\u8272\u5951\u5408\u5EA6\uFF09</h2>
<ul>
  <li><strong>\u4E94\u7C7B\u4EBA\u7FA4\u5951\u5408\u5206\uFF1A</strong>\u5916\u8D38/\u8DE8\u5883\u5356\u5BB6 <code>${profile.roles.trade}\u5206</code> \xB7 \u8FD0\u8425/\u589E\u957F <code>${profile.roles.growth}\u5206</code> \xB7 \u4EA7\u54C1\u7ECF\u7406 <code>${profile.roles.product}\u5206</code> \xB7 \u7814\u53D1/\u7A0B\u5E8F\u5458 <code>${profile.roles.developer}\u5206</code> \xB7 \u8BBE\u8BA1\u5E08 <code>${profile.roles.designer}\u5206</code></li>
  <li><strong>\u4E94\u7EF4\u95E8\u69DB\u5206\u5E03\uFF1A</strong>\u5546\u4E1A\u9A8C\u8BC1 <code>${profile.dimensions.market}</code> / \u5168\u6808\u4EA4\u4ED8 <code>${profile.dimensions.delivery}</code> / \u6D41\u91CF\u5206\u53D1 <code>${profile.dimensions.distribution}</code> / \u7B97\u529B\u6760\u6746 <code>${profile.dimensions.leverage}</code> / \u5FC3\u667A\u97E7\u6027 <code>${profile.dimensions.resilience}</code></li>
  <li><strong>\u5FC5\u5907\u80FD\u529B\u4E0E\u88C5\u5907\u6808\uFF1A</strong>${techHtml}</li>
</ul>
<h2>\u56DB\u3001\u600E\u4E48\u64CD\u4F5C\uFF1A7 \u5929\u51B7\u542F\u52A8\u843D\u5730\u624B\u518C</h2>
<ol>
  <li><strong>Day 1\u20132\uFF08\u6700\u5C0F\u95ED\u73AF\u642D\u5EFA\uFF09\uFF1A</strong>${h2}</li>
  <li><strong>Day 3\u20134\uFF08\u7B97\u529B\u7F51\u5173\u4E0E\u6536\u6B3E\u63A5\u5165\uFF09\uFF1A</strong>\u63A5\u5165 AINode \u4E13\u7EBF API Key \u4E0E\u9884\u5145\u503C\u79EF\u5206\u62E6\u622A\uFF0C\u628A\u7EFC\u5408\u6BDB\u5229\u7387\u9501\u6B7B\u5728 78% \u4EE5\u4E0A\u3002</li>
  <li><strong>Day 5\u20137\uFF08\u4E94\u8BED\u79CD\u5206\u53D1\u83B7\u5BA2\uFF09\uFF1A</strong>\u4E0A\u7EBF\u82F1/\u4E2D/\u7E41/\u65E5/\u97E9 5 \u8BED\u79CD SEO \u5BF9\u6BD4\u843D\u5730\u9875\u4E0E\u81EA\u52A8\u5316\u5916\u8054\uFF0C\u8DD1\u901A\u524D 10 \u4E2A\u771F\u5B9E\u4ED8\u8D39\u5BA2\u6237\u3002</li>
</ol>`.trim();
  return {
    slug,
    key: "projects",
    locale,
    type: "blog",
    title: `${p.name}\uFF1A${p.tagline}`,
    description: p.description,
    content,
    createdAt: ((_b = p.sourceMeta) == null ? void 0 : _b.lastSyncedAt) || "2026-04-16"
  };
}
const defaultHoxiProjects = [
  {
    id: "qingpu",
    name: "\u8F7B\u94FA AI (qingpu.ai)",
    tagline: "Ozon / Wildberries \u8DE8\u5883\u7535\u5546 AI \u94FA\u8D27\u4E0E\u4EE3\u8FD0\u8425 SaaS",
    description: "\u8DE8\u5883\u5356\u5BB6\u4ECE 1688 \u62FF\u8D27\u4E0A\u4FC4\u8BED\u4E0E\u65B0\u5174\u5E73\u53F0\u65F6\uFF0C\u6700\u5927\u7684\u75DB\u70B9\u662F\u5C0F\u8BED\u79CD SEO \u5361\u7247\u64B0\u5199\u3001\u4E3B\u56FE\u767D\u5E95\u6362\u666F\u548C\u6279\u91CF\u520A\u767B\u6781\u8017\u4EBA\u5DE5\u3002\u7528 AI \u628A\u300C\u9009\u54C1\u6D17\u7A3F \u2192 \u89C6\u89C9\u751F\u56FE \u2192 \u591A\u5E97\u4E0A\u67B6\u300D\u505A\u6210\u5168\u81EA\u52A8\u6D41\u6C34\u7EBF\uFF0C\u4E00\u4E2A\u4EBA\u5C31\u80FD\u670D\u52A1\u4E0A\u767E\u4E2A\u8DE8\u5883\u5356\u5BB6\u6216\u81EA\u8425\u5E97\u7FA4\u3002",
    category: "cross-border",
    categoryLabel: "\u5916\u8D38\u4E0E\u8DE8\u5883",
    status: "active",
    statusLabel: "\u5546\u4E1A\u5316\u8FD0\u884C",
    modelUsed: "DeepSeek-V3 + Claude Sonnet 4.6 + \u89C6\u89C9\u751F\u6210 API",
    monthlyCost: "SaaS \u8BA2\u9605 \xA599~\xA5399/\u6708 + \u7B97\u529B\u5305 \xB7 \u6708\u7B97\u529B\u6210\u672C\u7EA6 \xA5320\uFF08\u6BDB\u5229 86%\uFF09",
    techStack: ["\u8DE8\u5883\u9009\u54C1\u55C5\u89C9", "\u591A\u8BED\u79CD\u7535\u5546 SEO", "Hoxi Work \u6280\u80FD", "Nuxt 4", "AINode \u7F51\u5173"],
    author: "\u53EF\u4E50 (Coller)",
    badge: "\u8DE8\u5883\u53D8\u73B0\u6807\u6746",
    badgeTone: "positive",
    icon: "ph:storefront-bold",
    url: "https://qingpu.ai",
    storyUrl: "/blog/qingpu-ozon-solo-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u5356 SaaS \u6708\u5EA6\u8BA2\u9605\uFF08\xA599~\xA5399/\u6708\uFF09+ AI \u751F\u56FE\u4E0E\u6D17\u7A3F\u7B97\u529B\u5305\u62BD\u6210\uFF0C\u6216\u81EA\u8425\u8DE8\u5883\u5E97\u7FA4\u8D5A\u53D6 35%~60% \u5546\u54C1\u8DE8\u5883\u5DEE\u4EF7",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u61C2\u8DE8\u5883\u5E73\u53F0\uFF08Ozon/WB/\u901F\u5356\u901A\uFF09\u9009\u54C1\u89C4\u5219\u3001\u5546\u54C1\u5C5E\u6027\u5361\u4F4D\u903B\u8F91\u4E0E\u57FA\u7840\u5168\u6808\u81EA\u52A8\u5316\u4EA4\u4ED8\u80FD\u529B",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u5728 Hoxi \u6302\u8F7D qingpu-ops / ozon-ops \u6280\u80FD\uFF0C\u7C98\u8D34 1688 \u94FE\u63A5\u81EA\u52A8\u6D17\u7A3F\u751F\u56FE\u5E76\u4E00\u952E\u6279\u91CF\u520A\u767B\u5230\u5E97\u94FA"
    ],
    matchProfile: {
      roles: { trade: 98, growth: 88, product: 86, developer: 82, designer: 72 },
      dimensions: { market: 88, delivery: 72, distribution: 85, leverage: 90, resilience: 78 },
      difficulty: "easy",
      revenueModel: "SaaS \u6708\u5EA6\u8BA2\u9605 + \u7B97\u529B\u70B9\u6570\u5305 + \u81EA\u8425\u5E97\u7FA4\u5DEE\u4EF7",
      monthlyRevenueEstimate: "$4,500 - $25,000 / mo"
    },
    sourceMeta: {
      source: "official",
      sourceUrl: "https://qingpu.ai",
      monthlyVisits: "85K/mo",
      pricingSummary: "\xA599 - \xA5399 / mo",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "\u8F15\u92EA AI (qingpu.ai)",
        tagline: "Ozon / Wildberries \u8DE8\u5883\u96FB\u5546 AI \u92EA\u8CA8\u8207\u4EE3\u904B\u71DF SaaS",
        description: "\u8DE8\u5883\u8CE3\u5BB6\u5F9E 1688 \u62FF\u8CA8\u4E0A\u4FC4\u8A9E\u8207\u65B0\u8208\u5E73\u53F0\u6642\uFF0C\u6700\u5927\u7684\u75DB\u9EDE\u662F\u5C0F\u8A9E\u7A2E SEO \u5361\u7247\u64B0\u5BEB\u3001\u4E3B\u5716\u63DB\u5E95\u548C\u6279\u91CF\u520A\u767B\u6975\u8017\u4EBA\u5DE5\u3002\u7528 AI \u628A\u300C\u9078\u54C1\u6D17\u7A3F \u2192 \u8996\u89BA\u751F\u5716 \u2192 \u591A\u5E97\u4E0A\u67B6\u300D\u505A\u6210\u5168\u81EA\u52D5\u6D41\u6C34\u7DDA\uFF0C\u4E00\u500B\u4EBA\u5C31\u80FD\u670D\u52D9\u4E0A\u767E\u500B\u8DE8\u5883\u8CE3\u5BB6\u6216\u81EA\u71DF\u5E97\u7FA4\u3002",
        categoryLabel: "\u5916\u8CBF\u8207\u8DE8\u5883",
        statusLabel: "\u5546\u696D\u5316\u904B\u884C",
        monthlyCost: "SaaS \u8A02\u95B1 \xA599~\xA5399/\u6708 + \u7B97\u529B\u5305 \xB7 \u6708\u7B97\u529B\u6210\u672C\u7D04 \xA5320\uFF08\u6BDB\u5229 86%\uFF09",
        badge: "\u8DE8\u5883\u8B8A\u73FE\u6A19\u687F",
        techStack: ["\u8DE8\u5883\u9078\u54C1\u55C5\u89BA", "\u591A\u8A9E\u7A2E\u96FB\u5546 SEO", "Hoxi Work \u6280\u80FD", "Nuxt 4", "AINode \u7DB2\u95DC"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u8CE3 SaaS \u6708\u5EA6\u8A02\u95B1\uFF08\xA599~\xA5399/\u6708\uFF09+ AI \u751F\u5716\u8207\u6D17\u7A3F\u7B97\u529B\u5305\u62BD\u6210\uFF0C\u6216\u81EA\u71DF\u8DE8\u5883\u5E97\u7FA4\u8CFA\u53D6 35%~60% \u5546\u54C1\u8DE8\u5883\u5DEE\u50F9",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u61C2\u8DE8\u5883\u5E73\u53F0\uFF08Ozon/WB/\u901F\u8CE3\u901A\uFF09\u9078\u54C1\u898F\u5247\u3001\u5546\u54C1\u5C6C\u6027\u5361\u4F4D\u908F\u8F2F\u8207\u57FA\u790E\u5168\u68E7\u81EA\u52D5\u5316\u4EA4\u4ED8\u80FD\u529B",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u5728 Hoxi \u639B\u8F09 qingpu-ops / ozon-ops \u6280\u80FD\uFF0C\u8CBC\u4E0A 1688 \u9023\u7D50\u81EA\u52D5\u6D17\u7A3F\u751F\u5716\u4E26\u4E00\u9375\u6279\u91CF\u520A\u767B\u5230\u5E97\u92EA"
        ]
      },
      "en": {
        name: "Qingpu AI (qingpu.ai)",
        tagline: "Cross-Border E-Commerce AI Listing & Store Ops SaaS",
        description: "Cross-border sellers sourcing from 1688 waste hours translating localized SEO specs, editing product photos, and listing manually. Turning sourcing, visual generation, and multi-store publishing into an AI pipeline lets one person serve hundreds of sellers.",
        categoryLabel: "Cross-Border & Trade",
        statusLabel: "Live & Profitable",
        modelUsed: "DeepSeek-V3 + Claude Sonnet 4.6 + Vision APIs",
        monthlyCost: "SaaS $15\u2013$59/mo + Credit Packs \xB7 Compute ~$45/mo (86% Margin)",
        badge: "Trade Cashflow",
        techStack: ["Product Sourcing", "Multilingual SEO", "Hoxi Work Skills", "Nuxt 4", "AINode Gateway"],
        highlights: [
          "[How It Makes Money] Monthly SaaS subscriptions ($15\u2013$59/mo) + AI listing/image credit packs, or self-operated cross-border store margins (35%\u201360%)",
          "[Required Capabilities] Marketplace listing rules (Ozon/WB/AliExpress), SEO attribute mapping & automated workflow delivery",
          "[How to Operate] Mount qingpu-ops / ozon-ops skills in Hoxi, ingest 1688 URLs, auto-generate localized visuals & batch publish"
        ]
      },
      "ja": {
        name: "Qingpu AI (\u8EFD\u8217 AI / qingpu.ai)",
        tagline: "\u8D8A\u5883EC\u5411\u3051AI\u51FA\u54C1\u30FB\u591A\u8A00\u8A9ESEO\u30FB\u5E97\u8217\u81EA\u52D5\u5316SaaS",
        description: "1688\u306A\u3069\u306E\u4ED5\u5165\u308C\u30B5\u30A4\u30C8\u304B\u3089\u6D77\u5916EC\u30E2\u30FC\u30EB\u3078\u51FA\u54C1\u3059\u308B\u969B\u3001\u591A\u8A00\u8A9ESEO\u30BF\u30A4\u30C8\u30EB\u4F5C\u6210\u30FB\u5546\u54C1\u753B\u50CF\u306E\u767D\u629C\u304D\u5DEE\u3057\u66FF\u3048\u30FB\u4E00\u62EC\u767B\u9332\u306E\u5DE5\u6570\u3092AI\u3067\u5B8C\u5168\u81EA\u52D5\u5316\u30021\u4EBA\u3067\u6570\u767E\u5E97\u8217\u306E\u904B\u55B6\u4EE3\u884C\u307E\u305F\u306F\u81EA\u793E\u30B7\u30E7\u30C3\u30D7\u7FA4\u3092\u56DE\u305B\u308B\u9AD8\u53CE\u76CA\u30E2\u30C7\u30EB\u3067\u3059\u3002",
        categoryLabel: "\u8D8A\u5883EC\u30FB\u8CBF\u6613",
        statusLabel: "\u5546\u7528\u7A3C\u50CD\u4E2D",
        modelUsed: "DeepSeek-V3 + Claude Sonnet 4.6 + \u753B\u50CF\u751F\u6210API",
        monthlyCost: "\u6708\u984D\u30B5\u30D6\u30B9\u30AF $15\u301C$59 + \u5F93\u91CF\u30AF\u30EC\u30B8\u30C3\u30C8 \xB7 \u8A08\u7B97\u539F\u4FA1 \u7D04$45/\u6708\uFF08\u7C97\u522986%\uFF09",
        badge: "\u8D8A\u5883EC\u306E\u5B9A\u756A",
        techStack: ["\u8D8A\u5883\u5546\u54C1\u30EA\u30B5\u30FC\u30C1", "\u591A\u8A00\u8A9EEC SEO", "Hoxi Work\u30B9\u30AD\u30EB", "Nuxt 4", "AINode"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u6708\u984DSaaS\u8AB2\u91D1\uFF08$15\u301C$59/\u6708\uFF09\uFF0B\u753B\u50CF\u751F\u6210\u30AF\u30EC\u30B8\u30C3\u30C8\u8CA9\u58F2\u3001\u307E\u305F\u306F\u81EA\u793E\u8D8A\u5883\u30B7\u30E7\u30C3\u30D7\u3067\u306E\u7269\u8CA9\u5DEE\u76CA\uFF08\u7C97\u522935\u301C60%\uFF09",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u6D77\u5916EC\u30E2\u30FC\u30EB\u306E\u51FA\u54C1\u898F\u7D04\u7406\u89E3\u3001\u591A\u8A00\u8A9E\u30AD\u30FC\u30EF\u30FC\u30C9\u8A2D\u8A08\u3001AI\u81EA\u52D5\u5316\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306E\u69CB\u7BC9\u529B",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011Hoxi\u3067qingpu-ops\u30B9\u30AD\u30EB\u3092\u6709\u52B9\u5316\u3057\u3001\u4ED5\u5165\u308CURL\u304B\u3089\u591A\u8A00\u8A9E\u8AAC\u660E\u6587\u3068\u5546\u54C1\u753B\u50CF\u3092\u81EA\u52D5\u751F\u6210\u3057\u3066\u4E00\u62EC\u51FA\u54C1"
        ]
      },
      "ko": {
        name: "Qingpu AI (\uCE6D\uD478 AI / qingpu.ai)",
        tagline: "\uD06C\uB85C\uC2A4\uBCF4\uB354 \uC774\uCEE4\uBA38\uC2A4 AI \uC0C1\uD488 \uB4F1\uB85D \uBC0F \uB2E4\uAD6D\uC5B4 \uC6B4\uC601 \uC790\uB3D9\uD654 SaaS",
        description: "1688 \uB4F1\uC5D0\uC11C \uC18C\uC2F1\uD558\uC5EC \uAE00\uB85C\uBC8C \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4\uC5D0 \uC785\uC810\uD560 \uB54C \uAC00\uC7A5 \uD070 \uBCD1\uBAA9\uC778 \uB2E4\uAD6D\uC5B4 SEO \uCE74\uD53C \uC791\uC131, \uC0C1\uD488 \uC774\uBBF8\uC9C0 \uBC30\uACBD \uAD50\uCCB4, \uB300\uB7C9 \uB4F1\uB85D\uC744 AI \uD30C\uC774\uD504\uB77C\uC778\uC73C\uB85C \uC790\uB3D9\uD654\uD569\uB2C8\uB2E4. 1\uC778 \uAE30\uC5C5\uC774 \uC218\uBC31 \uBA85\uC758 \uC140\uB7EC\uC5D0\uAC8C SaaS\uB97C \uD310\uB9E4\uD558\uAC70\uB098 \uC9C1\uC601 \uC2A4\uD1A0\uC5B4\uB97C \uC6B4\uC601\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        categoryLabel: "\uD06C\uB85C\uC2A4\uBCF4\uB354\xB7\uBB34\uC5ED",
        statusLabel: "\uC0C1\uC6A9 \uC6B4\uC601 \uC911",
        modelUsed: "DeepSeek-V3 + Claude Sonnet 4.6 + \uBE44\uC804 \uC0DD\uC131 API",
        monthlyCost: "\uC6D4 \uAD6C\uB3C5 $15~$59 + \uD06C\uB808\uB527 \uD329 \xB7 \uC6D4 \uC5F0\uC0B0 \uC6D0\uAC00 \uC57D $45 (\uB9C8\uC9C4\uC728 86%)",
        badge: "\uBB34\uC5ED \uC218\uC775\uD654 \uD45C\uC900",
        techStack: ["\uD574\uC678 \uC18C\uC2F1 \uAC10\uAC01", "\uB2E4\uAD6D\uC5B4 \uCEE4\uBA38\uC2A4 SEO", "Hoxi Work \uC2A4\uD0AC", "Nuxt 4", "AINode \uAC8C\uC774\uD2B8\uC6E8\uC774"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uC6D4\uAC04 SaaS \uAD6C\uB3C5\uB8CC($15~$59) \uBC0F \uC774\uBBF8\uC9C0/\uBC88\uC5ED \uD06C\uB808\uB527 \uACFC\uAE08, \uB610\uB294 \uC9C1\uC601 \uAE00\uB85C\uBC8C \uC2A4\uD1A0\uC5B4 \uB9C8\uC9C4(35%~60%)",
          "[\uD544\uC694 \uC5ED\uB7C9] \uAE00\uB85C\uBC8C \uB9C8\uCF13\uD50C\uB808\uC774\uC2A4 \uB178\uCD9C \uC54C\uACE0\uB9AC\uC998 \uC774\uD574, \uB2E4\uAD6D\uC5B4 \uC0C1\uD488 \uC18D\uC131 \uCD5C\uC801\uD654 \uBC0F \uC6CC\uD06C\uD50C\uB85C\uC6B0 \uC790\uB3D9\uD654",
          "[\uC2E4\uD589 \uBC29\uBC95] Hoxi\uC5D0\uC11C qingpu-ops \uC2A4\uD0AC\uC744 \uC5F0\uACB0\uD558\uACE0 \uB3C4\uB9E4 \uB9C1\uD06C\uB97C \uC785\uB825\uD574 \uB2E4\uAD6D\uC5B4 \uC0C1\uC138\uD398\uC774\uC9C0\xB7\uC774\uBBF8\uC9C0 \uC0DD\uC131 \uD6C4 \uC77C\uAD04 \uC5C5\uB85C\uB4DC"
        ]
      }
    },
    order: 5,
    hidden: false
  },
  {
    id: "shopark",
    name: "ShopArk (shopark.ai)",
    tagline: "\u5916\u8D38 B2B \u8BE2\u76D8\u4E0E\u8DE8\u5883 DTC \u591A\u8BED\u8A00\u72EC\u7ACB\u7AD9 AI \u6BCD\u4F53",
    description: "\u4F20\u7EDF\u5916\u8D38\u5DE5\u5382\u4E0E\u8DE8\u5883\u5356\u5BB6\u5EFA\u6D77\u5916\u72EC\u7ACB\u7AD9\uFF0C\u5E38\u88AB Shopify \u9AD8\u6602\u63D2\u4EF6\u8D39\u3001\u591A\u8BED\u79CD\u7FFB\u8BD1\u751F\u786C\u548C Google SEO \u6CA1\u6D41\u91CF\u5361\u8116\u5B50\u3002\u7528\u4E00\u5957\u81EA\u5E26 11 \u56FD\u8BED\u8A00 SEO\u3001AI \u5BA2\u670D\u5BFC\u8D2D\u4E0E\u5168\u7403\u6536\u6B3E\uFF08Stripe/PayPal\uFF09\u7684\u72EC\u7ACB\u7AD9\u6BCD\u4F53\uFF0C\u5E2E\u5916\u8D38\u4EBA\u628A\u6D77\u5916\u81EA\u7136\u641C\u7D22\u6D41\u91CF\u76F4\u63A5\u53D8\u6210\u7F8E\u91D1\u8BA2\u5355\u4E0E\u6279\u53D1\u8BE2\u76D8\u3002",
    category: "cross-border",
    categoryLabel: "\u5916\u8D38\u4E0E\u8DE8\u5883",
    status: "active",
    statusLabel: "\u5546\u4E1A\u5316\u8FD0\u884C",
    modelUsed: "DeepSeek-V3\uFF0811 \u8BED\u79CD\u5546\u54C1\u4E0E\u535A\u5BA2\u7FFB\u8BD1\uFF09+ Claude Sonnet 4.6",
    monthlyCost: "\u72EC\u7ACB\u7AD9\u5E74\u8D39/\u6708\u8D39 + \u5782\u76F4\u54C1\u7C7B\u81EA\u8425\u51FA\u5355 \xB7 \u5355\u7AD9\u6708\u5747\u6210\u672C \xA540",
    techStack: ["\u5916\u8D38 B2B \u83B7\u5BA2", "\u591A\u8BED\u79CD Google SEO", "Stripe/PayPal \u6536\u6B3E", "Nuxt 4", "PostgreSQL"],
    author: "\u53EF\u4E50 (Coller)",
    badge: "\u5916\u8D38\u72EC\u7ACB\u7AD9\u6BCD\u4F53",
    badgeTone: "positive",
    icon: "ph:globe-hemisphere-west-bold",
    url: "https://shopark.ai",
    storyUrl: "/blog/shopark-cross-border-store-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u5BF9\u5916\u552E\u5356\u5782\u76F4\u884C\u4E1A\u72EC\u7ACB\u7AD9 SaaS \u5E2D\u4F4D\u6216\u4EE3\u5EFA\u670D\u52A1\uFF08\xA52,999~\xA59,800/\u5E74\uFF09\uFF0C\u5BF9\u5185\u5B75\u5316\u9AD8\u6BDB\u5229\u5C0F\u8BED\u79CD\u5782\u76F4\u8DE8\u5883\u72EC\u7ACB\u7AD9\u5403\u5546\u54C1\u5DEE\u4EF7",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u5916\u8D38\u5229\u57FA\u9009\u54C1\u4E0E\u4F9B\u5E94\u94FE\u5BF9\u63A5\u3001\u591A\u8BED\u8A00\u957F\u5C3E\u8BCD SEO \u5E03\u5C40\u3001\u6D77\u5916\u5408\u89C4\u6536\u6B3E\u4E0E\u5E7F\u544A\u6295\u653E\u57FA\u7840",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u7528 ShopArk \u6BCD\u4F53 10 \u5206\u949F\u62C9\u8D77\u4E00\u4E2A\u82F1/\u65E5/\u97E9/\u897F/\u4FC4\u591A\u8BED\u79CD\u7AD9\u70B9 \u2192 AI \u6279\u91CF\u91CD\u5199\u4EA7\u54C1\u9875\u4E0E\u5BF9\u6BD4\u6D4B\u8BC4\u6587\u7AE0 \u2192 \u6302\u8F7D WhatsApp/\u8BE2\u76D8\u8868\u5355\u76F4\u63A5\u6536\u5355"
    ],
    matchProfile: {
      roles: { trade: 96, growth: 92, product: 85, designer: 80, developer: 78 },
      dimensions: { market: 90, delivery: 70, distribution: 90, leverage: 86, resilience: 80 },
      difficulty: "easy",
      revenueModel: "\u72EC\u7ACB\u7AD9 SaaS \u8BA2\u9605 + \u5916\u8D38 B2B \u8BE2\u76D8/DTC \u96F6\u552E\u5DEE\u4EF7",
      monthlyRevenueEstimate: "$3,500 - $30,000 / mo"
    },
    sourceMeta: {
      source: "official",
      sourceUrl: "https://shopark.ai",
      monthlyVisits: "62K/mo",
      pricingSummary: "$29 - $99 / mo",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "ShopArk (shopark.ai)",
        tagline: "\u5916\u8CBF B2B \u8A62\u76E4\u8207\u8DE8\u5883 DTC \u591A\u8A9E\u8A00\u7368\u7ACB\u7AD9 AI \u6BCD\u9AD4",
        description: "\u50B3\u7D71\u5916\u8CBF\u5DE5\u5EE0\u8207\u8DE8\u5883\u8CE3\u5BB6\u5EFA\u6D77\u5916\u7368\u7ACB\u7AD9\uFF0C\u5E38\u88AB\u9AD8\u6602\u63D2\u4EF6\u8CBB\u3001\u591A\u8A9E\u7A2E\u7FFB\u8B6F\u751F\u786C\u548C Google SEO \u6C92\u6D41\u91CF\u5361\u8116\u5B50\u3002\u7528\u4E00\u5957\u81EA\u5E36 11 \u570B\u8A9E\u8A00 SEO\u3001AI \u5C0E\u8CFC\u8207\u5168\u7403\u6536\u6B3E\u7684\u7368\u7ACB\u7AD9\u6BCD\u9AD4\uFF0C\u628A\u6D77\u5916\u81EA\u7136\u641C\u7D22\u6D41\u91CF\u76F4\u63A5\u8B8A\u6210\u7F8E\u91D1\u8A02\u55AE\u8207\u6279\u767C\u8A62\u76E4\u3002",
        categoryLabel: "\u5916\u8CBF\u8207\u8DE8\u5883",
        statusLabel: "\u5546\u696D\u5316\u904B\u884C",
        monthlyCost: "\u7368\u7ACB\u7AD9\u5E74\u8CBB/\u6708\u8CBB + \u5782\u76F4\u54C1\u985E\u81EA\u71DF\u51FA\u55AE \xB7 \u55AE\u7AD9\u6708\u5747\u6210\u672C \xA540",
        badge: "\u5916\u8CBF\u7368\u7ACB\u7AD9\u6BCD\u9AD4",
        techStack: ["\u5916\u8CBF B2B \u7372\u5BA2", "\u591A\u8A9E\u7A2E Google SEO", "Stripe/PayPal \u6536\u6B3E", "Nuxt 4", "PostgreSQL"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u5C0D\u5916\u552E\u8CE3\u5782\u76F4\u884C\u696D\u7368\u7ACB\u7AD9 SaaS \u5E2D\u4F4D\u6216\u4EE3\u5EFA\u670D\u52D9\uFF0C\u5C0D\u5167\u5B75\u5316\u9AD8\u6BDB\u5229\u5C0F\u8A9E\u7A2E\u5782\u76F4\u8DE8\u5883\u7368\u7ACB\u7AD9\u5403\u5546\u54C1\u5DEE\u50F9",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u5916\u8CBF\u5229\u57FA\u9078\u54C1\u8207\u4F9B\u61C9\u93C8\u5C0D\u63A5\u3001\u591A\u8A9E\u8A00\u9577\u5C3E\u8A5E SEO \u4F48\u5C40\u3001\u6D77\u5916\u5408\u898F\u6536\u6B3E",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u7528 ShopArk \u6BCD\u9AD4 10 \u5206\u9418\u62C9\u8D77\u591A\u8A9E\u7A2E\u7AD9\u9EDE \u2192 AI \u6279\u91CF\u91CD\u5BEB\u7522\u54C1\u9801\u8207\u6E2C\u8A55\u6587\u7AE0 \u2192 \u639B\u8F09 WhatsApp/\u8A62\u76E4\u8868\u55AE\u6536\u55AE"
        ]
      },
      "en": {
        name: "ShopArk (shopark.ai)",
        tagline: "AI Multilingual DTC & B2B Foreign Trade Storefront Engine",
        description: "Exporters and cross-border brands lose margins on bloated Shopify plugins and weak multilingual SEO. ShopArk bundles 11-language programmatic SEO, AI sales concierge, and Stripe/PayPal checkout to turn global search traffic into B2B RFQs and DTC orders.",
        categoryLabel: "Cross-Border & Trade",
        statusLabel: "Live & Profitable",
        modelUsed: "DeepSeek-V3 (11-Language SEO) + Claude Sonnet 4.6",
        monthlyCost: "SaaS Licensing + Niche DTC Margins \xB7 Hosting ~$6/mo per site",
        badge: "Global Trade Engine",
        techStack: ["B2B Lead Gen", "Multilingual SEO", "Stripe / PayPal", "Nuxt 4", "PostgreSQL"],
        highlights: [
          "[How It Makes Money] Sell turnkey multilingual storefront subscriptions ($29\u2013$99/mo) or operate niche B2B/DTC export sites with 50%+ product margins",
          "[Required Capabilities] Niche export supply chain selection, long-tail multilingual SEO, and cross-border payment setup",
          "[How to Operate] Spin up a 11-language site in 10 mins \u2192 batch-generate localized product & comparison blogs via AI \u2192 capture WhatsApp/RFQ leads"
        ]
      },
      "ja": {
        name: "ShopArk (shopark.ai)",
        tagline: "\u8CBF\u6613B2B\u554F\u3044\u5408\u308F\u305B\u30FB\u8D8A\u5883DTC\u5411\u305111\u8A00\u8A9E\u5BFE\u5FDCAI\u81EA\u793EEC\u57FA\u76E4",
        description: "\u6D77\u5916\u5411\u3051\u81EA\u793EEC\uFF08DTC\uFF09\u3084B2B\u8F38\u51FA\u30B5\u30A4\u30C8\u306B\u5FC5\u8981\u306A11\u8A00\u8A9ESEO\u3001AI\u63A5\u5BA2\u30C1\u30E3\u30C3\u30C8\u3001Stripe/PayPal\u6C7A\u6E08\u3092\u6A19\u6E96\u642D\u8F09\u3002\u9AD8\u984D\u306A\u30D7\u30E9\u30B0\u30A4\u30F3\u8CBB\u7528\u3092\u524A\u308A\u3001\u6D77\u5916\u306E\u81EA\u7136\u691C\u7D22\u6D41\u5165\u3092\u76F4\u63A5\u30C9\u30EB\u5EFA\u3066\u6CE8\u6587\u3084\u5927\u53E3\u898B\u7A4D\u3082\u308A\uFF08RFQ\uFF09\u3078\u8EE2\u63DB\u3057\u307E\u3059\u3002",
        categoryLabel: "\u8D8A\u5883EC\u30FB\u8CBF\u6613",
        statusLabel: "\u5546\u7528\u7A3C\u50CD\u4E2D",
        modelUsed: "DeepSeek-V3\uFF0811\u8A00\u8A9ESEO\u7FFB\u8A33\uFF09+ Claude Sonnet 4.6",
        monthlyCost: "SaaS\u30E9\u30A4\u30BB\u30F3\u30B9\uFF0B\u81EA\u793E\u8D8A\u5883\u7269\u8CA9\u5229\u76CA \xB7 1\u30B5\u30A4\u30C8\u7DAD\u6301\u8CBB \u7D04$6/\u6708",
        badge: "\u8D8A\u5883EC\u72EC\u7ACB\u30B5\u30A4\u30C8",
        techStack: ["\u8CBF\u6613B2B\u96C6\u5BA2", "\u591A\u8A00\u8A9EGoogle SEO", "Stripe/PayPal\u6C7A\u6E08", "Nuxt 4", "PostgreSQL"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u591A\u8A00\u8A9EEC\u69CB\u7BC9SaaS\u306E\u6708\u984D\u63D0\u4F9B\uFF08$29\u301C$99/\u6708\uFF09\u3001\u307E\u305F\u306F\u30CB\u30C3\u30C1\u5546\u6750\u306E\u81EA\u793E\u8D8A\u5883EC\u904B\u55B6\u306B\u3088\u308B\u7269\u8CA9\u30FBB2B\u5378\u5229\u76CA",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u30CB\u30C3\u30C1\u5546\u6750\u306E\u9078\u5B9A\u529B\u3001\u591A\u8A00\u8A9E\u30ED\u30F3\u30B0\u30C6\u30FC\u30EBSEO\u8A2D\u8A08\u3001\u6D77\u5916\u6C7A\u6E08\u306E\u9023\u643A",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011ShopArk\u306710\u5206\u3067\u591A\u8A00\u8A9E\u30B5\u30A4\u30C8\u3092\u7ACB\u3061\u4E0A\u3052\u2192AI\u3067\u5546\u54C1\u30DA\u30FC\u30B8\u3068SEO\u8A18\u4E8B\u3092\u81EA\u52D5\u751F\u6210\u2192WhatsApp/RFQ\u30D5\u30A9\u30FC\u30E0\u3067\u53D7\u6CE8"
        ]
      },
      "ko": {
        name: "ShopArk (shopark.ai)",
        tagline: "\uD574\uC678\uBB34\uC5ED B2B \uC778\uCF70\uC774\uC5B4\uB9AC \uBC0F \uD06C\uB85C\uC2A4\uBCF4\uB354 DTC \uB2E4\uAD6D\uC5B4 \uC790\uC0AC\uBAB0 AI \uC5D4\uC9C4",
        description: "\uC218\uCD9C \uAE30\uC5C5\uACFC \uAE00\uB85C\uBC8C \uC140\uB7EC\uAC00 \uB192\uC740 \uD50C\uB7EC\uADF8\uC778 \uBE44\uC6A9 \uC5C6\uC774 11\uAC1C \uAD6D\uC5B4 \uC790\uB3D9 SEO, AI \uAD6C\uB9E4 \uC0C1\uB2F4, Stripe/PayPal \uACB0\uC81C\uB97C \uAC16\uCD98 \uC790\uC0AC\uBAB0\uC744 \uAD6C\uCD95\uD560 \uC218 \uC788\uB294 \uC5D4\uC9C4\uC785\uB2C8\uB2E4. \uAE00\uB85C\uBC8C \uAD6C\uAE00 \uAC80\uC0C9 \uD2B8\uB798\uD53D\uC744 B2B \uB300\uB7C9 \uC624\uB354\uC640 \uC9C1\uAD6C \uB9E4\uCD9C\uB85C \uC804\uD658\uD569\uB2C8\uB2E4.",
        categoryLabel: "\uD06C\uB85C\uC2A4\uBCF4\uB354\xB7\uBB34\uC5ED",
        statusLabel: "\uC0C1\uC6A9 \uC6B4\uC601 \uC911",
        modelUsed: "DeepSeek-V3 (11\uAC1C\uAD6D\uC5B4 SEO) + Claude Sonnet 4.6",
        monthlyCost: "\uC790\uC0AC\uBAB0 SaaS \uBD84\uC591 + \uB2C8\uCE58 \uD488\uBAA9 \uC9C1\uC601 \uB9C8\uC9C4 \xB7 \uC0AC\uC774\uD2B8\uB2F9 \uC6D4 $6",
        badge: "\uBB34\uC5ED \uC790\uC0AC\uBAB0 \uC5D4\uC9C4",
        techStack: ["\uD574\uC678 B2B \uBC14\uC774\uC5B4 \uBC1C\uAD74", "\uB2E4\uAD6D\uC5B4 \uAD6C\uAE00 SEO", "Stripe/PayPal \uACB0\uC81C", "Nuxt 4", "PostgreSQL"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uB2E4\uAD6D\uC5B4 \uC790\uC0AC\uBAB0 SaaS \uAD6C\uB3C5($29~$99/\uC6D4) \uD310\uB9E4 \uB610\uB294 \uACE0\uB9C8\uC9C4 \uB2C8\uCE58 \uC218\uCD9C \uD488\uBAA9 \uC9C1\uC601 \uD310\uB9E4",
          "[\uD544\uC694 \uC5ED\uB7C9] \uC218\uCD9C \uC720\uB9DD \uD488\uBAA9 \uC18C\uC2F1, \uB2E4\uAD6D\uC5B4 \uB871\uD14C\uC77C \uD0A4\uC6CC\uB4DC SEO, \uAE00\uB85C\uBC8C \uACB0\uC81C \uC5F0\uB3D9",
          "[\uC2E4\uD589 \uBC29\uBC95] 10\uBD84 \uB9CC\uC5D0 \uB2E4\uAD6D\uC5B4 \uC790\uC0AC\uBAB0 \uBC30\uD3EC \u2192 AI\uB85C \uD604\uC9C0\uD654\uB41C \uC0C1\uD488 \uD398\uC774\uC9C0\xB7\uBE44\uAD50 \uCE7C\uB7FC \uB300\uB7C9 \uBC1C\uD589 \u2192 WhatsApp \uBC0F \uBC14\uC774\uC5B4 \uACAC\uC801 \uD3FC\uC73C\uB85C \uC218\uC8FC"
        ]
      }
    },
    order: 8,
    hidden: false
  },
  {
    id: "ainode",
    name: "AINode (ainode.run)",
    tagline: "\u9AD8\u5E76\u53D1\u5927\u6A21\u578B API \u805A\u5408\u4E0E\u7B97\u529B\u5206\u53D1\u7F51\u5173",
    description: "\u56FD\u5185\u72EC\u7ACB\u5F00\u53D1\u8005\u4E0E\u5916\u8D38\u81EA\u52A8\u5316\u56E2\u961F\u8C03\u6D77\u5916\u5927\u6A21\u578B\u666E\u904D\u5361\u5728\u300C\u6D77\u5916\u5361\u652F\u4ED8\u96BE\u3001\u76F4\u8FDE\u5EF6\u8FDF\u9AD8\u3001\u591A\u5382\u5546\u8D26\u5355\u5206\u6563\u300D\u3002\u805A\u5408\u4E0A\u6E38\u4F01\u4E1A\u7EA7\u6E20\u9053\u8DEF\u7531\uFF0C\u63D0\u4F9B\u517C\u5BB9 OpenAI / Anthropic \u7684\u4E00\u884C\u914D\u7F6E\u4E13\u7EBF\uFF0C\u8D5A\u53D6\u7A33\u5B9A\u7684\u7B97\u529B\u5206\u53D1\u5DEE\u4EF7\u3002",
    category: "gateway",
    categoryLabel: "\u7B97\u529B\u57FA\u5EFA",
    status: "active",
    statusLabel: "\u5546\u4E1A\u5316\u8FD0\u884C",
    modelUsed: "Claude / GPT / Gemini / DeepSeek \u5168\u6A21\u578B\u667A\u80FD\u8DEF\u7531",
    monthlyCost: "\u6309\u91CF\u5145\u503C\u9884\u4ED8 + Token \u5DEE\u4EF7\u53D8\u73B0 \xB7 \u8FB9\u9645\u8FD0\u7EF4\u6781\u4F4E\uFF08\u51C0\u6BDB\u5229 15%~25%\uFF09",
    techStack: ["\u9AD8\u5E76\u53D1\u7F51\u5173\u8FD0\u7EF4", "\u6E20\u9053\u6210\u672C\u6838\u7B97", "\u5F00\u53D1\u8005\u793E\u7FA4\u83B7\u5BA2", "Go", "OpenAI SDK"],
    author: "\u53EF\u4E50 (Coller)",
    badge: "\u73B0\u91D1\u6D41\u57FA\u5EFA",
    badgeTone: "positive",
    icon: "ph:broadcast-bold",
    url: "https://ainode.run",
    storyUrl: "/blog/ainode-gateway-solo-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u9884\u5145\u503C\u6309 Token \u8BA1\u8D39\uFF0815%~25% \u6E20\u9053\u4E0E\u7F13\u5B58\u8DEF\u7531\u6BDB\u5229\uFF09\uFF0C\u5F00\u53D1\u8005\u4E0E\u5916\u8D38\u811A\u672C\u65E5\u9AD8\u9891\u8C03\u7528\u5E26\u6765\u590D\u5229\u6D41\u6C34",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u7A33\u5B9A\u7684\u591A\u4E0A\u6E38\u6E20\u9053\u81EA\u52A8\u4E3B\u5907\u5207\u6362\u3001\u9632\u5237\u98CE\u63A7\u3001\u7CBE\u51C6\u8BA1\u8D39\u8D26\u672C\u4E0E\u6280\u672F\u793E\u7FA4\u53E3\u7891\u83B7\u5BA2",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u7528\u900F\u660E\u5BF9\u6BD4\u8BC4\u6D4B\u5185\u5BB9\u5F15\u6D41\u5F00\u53D1\u8005 \u2192 \u63D0\u4F9B\u5373\u5145\u5373\u7528\u7684 Base URL \u2192 \u7ED1\u5B9A Hoxi \u5BA2\u6237\u7AEF\u4E0E Cursor \u6301\u7EED\u6D88\u8017"
    ],
    matchProfile: {
      roles: { developer: 96, product: 80, growth: 75, trade: 68, designer: 55 },
      dimensions: { market: 80, delivery: 92, distribution: 78, leverage: 96, resilience: 84 },
      difficulty: "medium",
      revenueModel: "\u9884\u5145\u503C\u7B97\u529B\u5305 + Token \u8DEF\u7531\u5DEE\u4EF7",
      monthlyRevenueEstimate: "$5,000 - $35,000 / mo"
    },
    sourceMeta: {
      source: "official",
      sourceUrl: "https://ainode.run",
      monthlyVisits: "110K/mo",
      pricingSummary: "Pay-As-You-Go ($5+)",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "AINode (ainode.run)",
        tagline: "\u9AD8\u4F75\u767C\u5927\u6A21\u578B API \u805A\u5408\u8207\u7B97\u529B\u5206\u767C\u7DB2\u95DC",
        description: "\u7368\u7ACB\u958B\u767C\u8005\u8207\u5916\u8CBF\u81EA\u52D5\u5316\u5718\u968A\u8ABF\u6D77\u5916\u5927\u6A21\u578B\u666E\u904D\u5361\u5728\u300C\u652F\u4ED8\u96E3\u3001\u76F4\u9023\u5EF6\u9072\u9AD8\u3001\u591A\u5EE0\u5546\u8CEC\u55AE\u5206\u6563\u300D\u3002\u805A\u5408\u4E0A\u6E38\u4F01\u696D\u7D1A\u6E20\u9053\u8DEF\u7531\uFF0C\u63D0\u4F9B\u517C\u5BB9 OpenAI / Anthropic \u7684\u4E00\u884C\u914D\u7F6E\u5C08\u7DDA\uFF0C\u8CFA\u53D6\u7A69\u5B9A\u7684\u7B97\u529B\u5206\u767C\u5DEE\u50F9\u3002",
        categoryLabel: "\u7B97\u529B\u57FA\u5EFA",
        statusLabel: "\u5546\u696D\u5316\u904B\u884C",
        monthlyCost: "\u6309\u91CF\u5145\u503C\u9810\u4ED8 + Token \u5DEE\u50F9\u8B8A\u73FE \xB7 \u908A\u969B\u904B\u7DAD\u6975\u4F4E\uFF08\u6DE8\u6BDB\u5229 15%~25%\uFF09",
        badge: "\u73FE\u91D1\u6D41\u57FA\u5EFA",
        techStack: ["\u9AD8\u4F75\u767C\u7DB2\u95DC\u904B\u7DAD", "\u6E20\u9053\u6210\u672C\u6838\u7B97", "\u958B\u767C\u8005\u793E\u7FA4\u7372\u5BA2", "Go", "OpenAI SDK"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u9810\u5145\u503C\u6309 Token \u8A08\u8CBB\uFF0815%~25% \u6E20\u9053\u8207\u7DE9\u5B58\u8DEF\u7531\u6BDB\u5229\uFF09\uFF0C\u9AD8\u983B\u8ABF\u7528\u5E36\u4F86\u8907\u5229\u6D41\u6C34",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u7A69\u5B9A\u7684\u591A\u4E0A\u6E38\u6E20\u9053\u81EA\u52D5\u5207\u63DB\u3001\u9632\u5237\u98A8\u63A7\u3001\u7CBE\u6E96\u8A08\u8CBB\u8CEC\u672C\u8207\u6280\u8853\u793E\u7FA4\u53E3\u7891\u7372\u5BA2",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u7528\u900F\u660E\u5C0D\u6BD4\u8A55\u6E2C\u5F15\u6D41\u958B\u767C\u8005 \u2192 \u63D0\u4F9B\u5373\u5145\u5373\u7528\u7684 Base URL \u2192 \u7D81\u5B9A Hoxi \u8207 Cursor \u6301\u7E8C\u6D88\u8017"
        ]
      },
      "en": {
        name: "AINode (ainode.run)",
        tagline: "High-Concurrency LLM API Aggregation & Routing Gateway",
        description: "Solo developers and automation teams struggle with fragmented vendor billing, payment barriers, and latency. Aggregating enterprise upstream routes into a drop-in OpenAI/Anthropic gateway creates recurring usage-based cashflow.",
        categoryLabel: "Compute Infra",
        statusLabel: "Live & Profitable",
        modelUsed: "Claude / GPT / Gemini / DeepSeek Smart Routing",
        monthlyCost: "Prepaid Token Margin (15%\u201325%) \xB7 Near-Zero Marginal Ops",
        badge: "Recurring Infra",
        techStack: ["Gateway Ops", "Unit Economics", "Developer Distribution", "Go", "OpenAI / Anthropic SDK"],
        highlights: [
          "[How It Makes Money] Prepaid token billing with a 15%\u201325% routing & prompt-caching margin on daily coding and agent traffic",
          "[Required Capabilities] Multi-upstream failover, rate-limit protection, accurate token ledger & developer community trust",
          "[How to Operate] Attract devs via transparent benchmarks \u2192 provide 1-line Base URL \u2192 bind into Hoxi & Cursor"
        ]
      },
      "ja": {
        name: "AINode (ainode.run)",
        tagline: "\u9AD8\u4E26\u5217LLM API\u30A2\u30B0\u30EA\u30B2\u30FC\u30B7\u30E7\u30F3\uFF06\u63A8\u8AD6\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u57FA\u76E4",
        description: "\u500B\u4EBA\u958B\u767A\u8005\u3084\u81EA\u52D5\u5316\u30C1\u30FC\u30E0\u304C\u62B1\u3048\u308B\u300C\u8907\u6570AI\u30D9\u30F3\u30C0\u30FC\u306E\u8ACB\u6C42\u5206\u6563\u30FB\u6C7A\u6E08\u969C\u58C1\u30FB\u30EC\u30A4\u30C6\u30F3\u30B7\u554F\u984C\u300D\u3092\u89E3\u6C7A\u3002OpenAI/Anthropic\u4E92\u63DB\u306E1\u884C\u8A2D\u5B9A\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u3092\u63D0\u4F9B\u3057\u3001\u30C8\u30FC\u30AF\u30F3\u5F93\u91CF\u8AB2\u91D1\u306E\u5DEE\u76CA\u3067\u5B89\u5B9A\u30AD\u30E3\u30C3\u30B7\u30E5\u30D5\u30ED\u30FC\u3092\u751F\u3080\u30A4\u30F3\u30D5\u30E9\u4E8B\u696D\u3067\u3059\u3002",
        categoryLabel: "\u8A08\u7B97\u30A4\u30F3\u30D5\u30E9",
        statusLabel: "\u5546\u7528\u7A3C\u50CD\u4E2D",
        modelUsed: "Claude / GPT / Gemini / DeepSeek \u30B9\u30DE\u30FC\u30C8\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0",
        monthlyCost: "\u30D7\u30EA\u30DA\u30A4\u30C9\u5F93\u91CF\u8AB2\u91D1\uFF08\u7C97\u522915%\u301C25%\uFF09\xB7 \u9650\u754C\u904B\u7528\u30B3\u30B9\u30C8\u6975\u5C0F",
        badge: "\u7D99\u7D9A\u8AB2\u91D1\u30A4\u30F3\u30D5\u30E9",
        techStack: ["\u9AD8\u4E26\u5217\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4", "\u30C8\u30FC\u30AF\u30F3\u539F\u4FA1\u7BA1\u7406", "\u958B\u767A\u8005\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u96C6\u5BA2", "Go", "OpenAI SDK"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u30D7\u30EA\u30DA\u30A4\u30C9\u30C1\u30E3\u30FC\u30B8\uFF0B\u30C8\u30FC\u30AF\u30F3\u6D88\u8CBB\u306B\u5FDC\u3058\u305F15%\u301C25%\u306E\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u5DEE\u76CA\u3067\u6BCE\u65E5\u7D99\u7D9A\u53CE\u76CA\u3092\u8A08\u4E0A",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u8907\u6570\u4E0A\u6D41\u30C1\u30E3\u30CD\u30EB\u306E\u81EA\u52D5\u30D5\u30A7\u30A4\u30EB\u30AA\u30FC\u30D0\u30FC\u3001\u4E0D\u6B63\u5229\u7528\u5BFE\u7B56\u3001\u6B63\u78BA\u306A\u30C8\u30FC\u30AF\u30F3\u53F0\u5E33\u8A2D\u8A08",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u5BA2\u89B3\u7684\u306A\u30E2\u30C7\u30EB\u6BD4\u8F03\u8A18\u4E8B\u3067\u958B\u767A\u8005\u3092\u96C6\u5BA2\u2192\u5373\u4F7F\u3048\u308BBase URL\u3092\u63D0\u4F9B\u2192Cursor\u3084Hoxi\u306B\u9023\u643A\u3057\u3066\u7D99\u7D9A\u6D88\u8CBB"
        ]
      },
      "ko": {
        name: "AINode (ainode.run)",
        tagline: "\uACE0\uC131\uB2A5 \uBA40\uD2F0 LLM API \uC5B4\uADF8\uB9AC\uAC8C\uC774\uC158 \uBC0F \uB77C\uC6B0\uD305 \uAC8C\uC774\uD2B8\uC6E8\uC774",
        description: "1\uC778 \uAC1C\uBC1C\uC790\uC640 \uC790\uB3D9\uD654 \uD300\uC774 \uACAA\uB294 \uD574\uC678 \uACB0\uC81C \uC7A5\uBCBD, \uC9C0\uC5F0 \uC2DC\uAC04, \uD30C\uD3B8\uD654\uB41C API \uCCAD\uAD6C\uC11C\uB97C \uD558\uB098\uB85C \uD1B5\uD569\uD569\uB2C8\uB2E4. OpenAI/Anthropic \uD638\uD658 \uB2E8\uC77C \uC5D4\uB4DC\uD3EC\uC778\uD2B8\uB97C \uC81C\uACF5\uD558\uACE0 \uD1A0\uD070 \uC0AC\uC6A9\uB7C9 \uB9C8\uC9C4\uC73C\uB85C \uBCF5\uB9AC \uD604\uAE08\uD750\uB984\uC744 \uCC3D\uCD9C\uD569\uB2C8\uB2E4.",
        categoryLabel: "\uC5F0\uC0B0 \uC778\uD504\uB77C",
        statusLabel: "\uC0C1\uC6A9 \uC6B4\uC601 \uC911",
        modelUsed: "Claude / GPT / Gemini / DeepSeek \uC2A4\uB9C8\uD2B8 \uB77C\uC6B0\uD305",
        monthlyCost: "\uC120\uBD88 \uCDA9\uC804 \uD1A0\uD070 \uB9C8\uC9C4(15%~25%) \xB7 \uD55C\uACC4 \uC6B4\uC601\uBE44 \uC81C\uB85C\uC5D0 \uC218\uB834",
        badge: "\uD604\uAE08\uD750\uB984 \uC778\uD504\uB77C",
        techStack: ["\uACE0\uAC00\uC6A9\uC131 \uAC8C\uC774\uD2B8\uC6E8\uC774", "\uC720\uB2DB \uC774\uCF54\uB178\uBBF9\uC2A4", "\uAC1C\uBC1C\uC790 \uCEE4\uBBA4\uB2C8\uD2F0 \uBAA8\uAC1D", "Go", "OpenAI SDK"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uC120\uBD88 \uD06C\uB808\uB527 \uCDA9\uC804 \uBC0F \uC77C\uC77C \uCF54\uB529\xB7\uC5D0\uC774\uC804\uD2B8 API \uD638\uCD9C\uB7C9\uC5D0 \uB300\uD55C 15%~25% \uB77C\uC6B0\uD305 \uB9C8\uC9C4",
          "[\uD544\uC694 \uC5ED\uB7C9] \uBA40\uD2F0 \uC5C5\uC2A4\uD2B8\uB9BC \uC790\uB3D9 \uD398\uC77C\uC624\uBC84, \uB808\uC774\uD2B8 \uB9AC\uBC0B \uBC29\uC5B4, \uC815\uBC00 \uACFC\uAE08 \uC6D0\uC7A5 \uBC0F \uAC1C\uBC1C\uC790 \uC2E0\uB8B0 \uAD6C\uCD95",
          "[\uC2E4\uD589 \uBC29\uBC95] \uD22C\uBA85\uD55C \uBAA8\uB378 \uBCA4\uCE58\uB9C8\uD06C\uB85C \uAC1C\uBC1C\uC790 \uC720\uC785 \u2192 1\uC904 Base URL \uC81C\uACF5 \u2192 Cursor \uBC0F Hoxi \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uC5F0\uB3D9\uD574 \uC9C0\uC18D \uACFC\uAE08"
        ]
      }
    },
    order: 10,
    hidden: false
  },
  {
    id: "photoroom-ecom",
    name: "AI \u8DE8\u5883\u5546\u54C1\u56FE\u6362\u5E95\u4E0E\u865A\u62DF\u6A21\u7279\u8BD5\u7A7F (Toolify \u89C6\u89C9\u7206\u6B3E)",
    tagline: "\u5207\u4E2D\u5168\u7403\u4E2D\u5C0F\u5356\u5BB6\u521A\u9700\u7684\u9AD8\u6BDB\u5229\u89C6\u89C9\u5FAE SaaS\uFF08\u5BF9\u6807 PhotoRoom / Pebblely\uFF09",
    description: "Toolify \u7535\u5546\u8D5B\u9053\u5E38\u5E74\u9738\u699C\u7684\u9AD8\u53D8\u73B0\u54C1\u7C7B\uFF1A\u5916\u8D38\u4E0E\u8DE8\u5883\u5356\u5BB6\u6BCF\u4E0A\u67B6\u4E00\u6B3E\u65B0\u54C1\uFF0C\u4F20\u7EDF\u627E\u6A21\u7279\u5B9E\u62CD+\u7F8E\u5DE5\u4FEE\u56FE\u8981\u82B1 \xA5500~\xA52000\u3002\u7528\u5F00\u6E90\u5206\u5272\u6A21\u578B + Flux/SDXL \u573A\u666F\u91CD\u7ED8 API\uFF0C\u8BA9\u5356\u5BB6\u4E0A\u4F20\u624B\u673A\u5B9E\u62CD\u767D\u5E95\u56FE\u5373\u53EF\u751F\u6210\u6B27\u7F8E/\u4FC4\u8BED/\u65E5\u97E9\u672C\u571F\u6A21\u7279\u7A7F\u642D\u4E0E\u751F\u6D3B\u573A\u666F\u56FE\uFF0C\u7528\u6237\u4ED8\u8D39\u6781\u723D\u5FEB\u3002",
    category: "cross-border",
    categoryLabel: "\u5916\u8D38\u4E0E\u8DE8\u5883",
    status: "active",
    statusLabel: "Toolify \u9AD8\u53D8\u73B0\u6807\u6746",
    modelUsed: "BiRefNet \u62A0\u56FE + Flux.1 / Gemini Flash \u89C6\u89C9\u63D0\u793A\u8BCD\u6269\u5199",
    monthlyCost: "\u6309\u70B9\u6570\u5305/\u6708\u5EA6\u8BA2\u9605 ($19~$49/mo) \xB7 \u5355\u5F20\u751F\u56FE\u6210\u672C \xA50.06\uFF08\u6BDB\u5229 88%\uFF09",
    techStack: ["\u8DE8\u5883\u5356\u5BB6\u75DB\u70B9\u6D1E\u5BDF", "\u56FE\u50CF\u751F\u6210\u5DE5\u4F5C\u6D41", "\u5C0F\u8BED\u79CD\u843D\u5730\u9875\u6295\u6D41", "Next.js / Nuxt", "Stripe"],
    author: "Toolify \u7CBE\u9009\u62C6\u89E3",
    authorUrl: "https://www.toolify.ai",
    badge: "Toolify \u89C6\u89C9\u5370\u949E\u673A",
    badgeTone: "positive",
    icon: "ph:camera-plus-bold",
    url: "https://www.toolify.ai",
    storyUrl: "/blog/ecom-ai-photo-saas-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u514D\u8D39\u9001 3 \u5F20\u5E26\u6C34\u5370\u9884\u89C8\uFF0C\u53BB\u6C34\u5370\u9AD8\u6E05\u4E0B\u8F7D\u4E0E\u6279\u91CF\u751F\u6210\u6309 $19/\u6708\uFF08200\u70B9\uFF09\u6216 $49/\u6708\u6536\u8D39\uFF0C\u6BDB\u5229\u7387\u8D85 85%",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u4E0D\u9700\u8981\u81EA\u5DF1\u8BAD\u7EC3\u5E95\u5C42\u5927\u6A21\u578B\uFF01\u6838\u5FC3\u5728\u4E8E\u9488\u5BF9\u7279\u5B9A\u54C1\u7C7B\uFF08\u5982\u5973\u88C5\u3001\u9996\u9970\u3001\u5BB6\u5C45\u3001\u6C7D\u914D\uFF09\u8C03\u597D\u9884\u8BBE\u5149\u5F71\u6A21\u677F\u4E0E\u6279\u91CF\u5BFC\u51FA\u4F53\u9A8C",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u9501\u5B9A\u4E00\u4E2A\u7EC6\u5206\u5916\u8D38\u54C1\u7C7B\uFF08\u5982\u5047\u53D1/\u6CF3\u88C5/\u5BA0\u7269\u7528\u54C1\uFF09 \u2192 \u63A5 Replicate/AINode \u89C6\u89C9\u63A5\u53E3 \u2192 \u5728\u5C0F\u7EA2\u4E66/TikTok \u53D1\u524D\u540E\u5BF9\u6BD4\u89C6\u9891\u5F15\u6D41\u5356\u5BB6"
    ],
    matchProfile: {
      roles: { designer: 96, trade: 94, product: 88, growth: 86, developer: 80 },
      dimensions: { market: 90, delivery: 75, distribution: 86, leverage: 88, resilience: 75 },
      difficulty: "easy",
      revenueModel: "\u514D\u8D39\u8BD5\u7528 + \u89C6\u89C9\u70B9\u6570\u5305/\u6708\u5EA6\u8BA2\u9605 ($19-$49/mo)",
      monthlyRevenueEstimate: "$5,000 - $40,000 / mo"
    },
    sourceMeta: {
      source: "toolify",
      sourceUrl: "https://www.toolify.ai",
      monthlyVisits: "680K/mo",
      pricingSummary: "$19 - $49 / mo",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "AI \u8DE8\u5883\u5546\u54C1\u5716\u63DB\u5E95\u8207\u865B\u64EC\u6A21\u7279\u8A66\u7A7F (Toolify \u8996\u89BA\u7206\u6B3E)",
        tagline: "\u5207\u4E2D\u5168\u7403\u4E2D\u5C0F\u8CE3\u5BB6\u525B\u9700\u7684\u9AD8\u6BDB\u5229\u8996\u89BA\u5FAE SaaS\uFF08\u5C0D\u6A19 PhotoRoom / Pebblely\uFF09",
        description: "Toolify \u96FB\u5546\u8CFD\u9053\u5E38\u5E74\u9738\u699C\u7684\u9AD8\u8B8A\u73FE\u54C1\u985E\uFF1A\u5916\u8CBF\u8207\u8DE8\u5883\u8CE3\u5BB6\u6BCF\u4E0A\u67B6\u4E00\u6B3E\u65B0\u54C1\uFF0C\u50B3\u7D71\u627E\u6A21\u7279\u5BE6\u62CD+\u4FEE\u5716\u8981\u82B1\u4E0A\u5343\u5143\u3002\u7528\u5206\u5272\u6A21\u578B + Flux \u5834\u666F\u91CD\u7E6A API\uFF0C\u8B93\u8CE3\u5BB6\u4E0A\u50B3\u624B\u6A5F\u5BE6\u62CD\u5716\u5373\u53EF\u751F\u6210\u6B50\u7F8E/\u65E5\u97D3\u6A21\u7279\u7A7F\u642D\u8207\u5834\u666F\u5716\u3002",
        categoryLabel: "\u5916\u8CBF\u8207\u8DE8\u5883",
        statusLabel: "Toolify \u9AD8\u8B8A\u73FE\u6A19\u687F",
        monthlyCost: "\u6309\u9EDE\u6578\u5305/\u6708\u5EA6\u8A02\u95B1 ($19~$49/mo) \xB7 \u55AE\u5F35\u751F\u5716\u6210\u672C \xA50.06\uFF08\u6BDB\u5229 88%\uFF09",
        badge: "Toolify \u8996\u89BA\u5370\u9214\u6A5F",
        techStack: ["\u8DE8\u5883\u8CE3\u5BB6\u75DB\u9EDE\u6D1E\u5BDF", "\u5716\u50CF\u751F\u6210\u5DE5\u4F5C\u6D41", "\u5C0F\u8A9E\u7A2E\u843D\u5730\u9801\u6295\u6D41", "Next.js / Nuxt", "Stripe"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u514D\u8CBB\u9001 3 \u5F35\u9810\u89BD\uFF0C\u9AD8\u6E05\u7121\u6C34\u5370\u8207\u6279\u91CF\u751F\u6210\u6309 $19/\u6708\u6216 $49/\u6708\u6536\u8CBB\uFF0C\u6BDB\u5229\u7387\u8D85 85%",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u7121\u9700\u81EA\u8A13\u5E95\u5C64\u6A21\u578B\uFF0C\u6838\u5FC3\u5728\u65BC\u91DD\u5C0D\u7279\u5B9A\u54C1\u985E\uFF08\u5973\u88DD\u3001\u9996\u98FE\u3001\u5BB6\u5C45\uFF09\u8ABF\u597D\u9810\u8A2D\u5149\u5F71\u6A21\u677F\u8207\u6279\u91CF\u9AD4\u9A57",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u9396\u5B9A\u4E00\u500B\u7D30\u5206\u5916\u8CBF\u54C1\u985E \u2192 \u63A5\u5165\u8996\u89BA\u751F\u6210 API \u2192 \u5728\u793E\u5A92\u767C\u524D\u5F8C\u5C0D\u6BD4\u77ED\u8996\u983B\u5F15\u6D41\u8DE8\u5883\u8CE3\u5BB6"
        ]
      },
      "en": {
        name: "AI Product Photo & Virtual Try-On Micro-SaaS (Toolify Top Pick)",
        tagline: "High-Margin Visual Studio for Cross-Border Sellers (PhotoRoom / Pebblely Playbook)",
        description: "One of the highest-converting categories on Toolify: e-commerce sellers spend hundreds of dollars per SKU on studio shoots and local models. Wrapping background removal + Flux/SDXL inpainting into preset studio templates lets sellers generate lifestyle shots in seconds.",
        categoryLabel: "Cross-Border & Trade",
        statusLabel: "Toolify Benchmark",
        modelUsed: "BiRefNet Segmentation + Flux.1 / Gemini Flash Prompting",
        monthlyCost: "$19\u2013$49/mo Subscriptions + Credit Packs \xB7 ~$0.008/image (88% Margin)",
        badge: "Toolify Cash Cow",
        techStack: ["E-Commerce UX", "Vision API Pipeline", "Short-Video Growth", "Nuxt / Next.js", "Stripe"],
        highlights: [
          "[How It Makes Money] 3 free watermarked previews; charge $19/mo (200 credits) or $49/mo for batch HD exports with 88% gross margin",
          "[Required Capabilities] Zero model training needed \u2014 win by curating niche-specific lighting/model presets (jewelry, apparel, furniture, auto parts)",
          "[How to Operate] Pick 1 vertical export niche \u2192 wire Flux/Vision APIs \u2192 post before/after reels on TikTok & seller communities"
        ]
      },
      "ja": {
        name: "AI\u5546\u54C1\u753B\u50CF\u751F\u6210\u30FB\u30D0\u30FC\u30C1\u30E3\u30EB\u8A66\u7740Micro-SaaS (Toolify\u4EBA\u6C17\u30E2\u30C7\u30EB)",
        tagline: "EC\u30BB\u30E9\u30FC\u306E\u64AE\u5F71\u30B3\u30B9\u30C8\u30921/20\u306B\u3059\u308B\u9AD8\u7C97\u5229\u30D3\u30B8\u30E5\u30A2\u30EBSaaS\uFF08PhotoRoom\u578B\uFF09",
        description: "Toolify\u306EEC\u30AB\u30C6\u30B4\u30EA\u3067\u5E38\u306B\u4E0A\u4F4D\u53CE\u76CA\u3092\u8A87\u308B\u30E2\u30C7\u30EB\u3002\u30B9\u30DE\u30DB\u3067\u64AE\u3063\u305F\u5546\u54C1\u5199\u771F\u304B\u3089\u80CC\u666F\u5207\u308A\u629C\u304D\uFF0B\u6B27\u7C73\u30FB\u65E5\u97D3\u30E2\u30C7\u30EB\u7740\u7528\u753B\u50CF\u3092\u81EA\u52D5\u751F\u6210\u3057\u3001EC\u4E8B\u696D\u8005\u306E\u30B9\u30BF\u30B8\u30AA\u64AE\u5F71\u8CBB\u3092\u5287\u7684\u306B\u524A\u6E1B\u3057\u307E\u3059\u3002",
        categoryLabel: "\u8D8A\u5883EC\u30FB\u8CBF\u6613",
        statusLabel: "Toolify\u9AD8\u53CE\u76CA\u30E2\u30C7\u30EB",
        modelUsed: "BiRefNet\u80CC\u666F\u9664\u53BB + Flux.1 / Gemini Flash",
        monthlyCost: "\u6708\u984D$19\u301C$49\u30B5\u30D6\u30B9\u30AF\uFF0B\u30AF\u30EC\u30B8\u30C3\u30C8 \xB7 1\u679A\u539F\u4FA1 \u7D041.2\u5186\uFF08\u7C97\u522988%\uFF09",
        badge: "Toolify\u5B9A\u756A\u53CE\u76CA\u30E2\u30C7\u30EB",
        techStack: ["EC\u4E8B\u696D\u8005\u30DA\u30A4\u30F3\u7406\u89E3", "\u753B\u50CF\u751F\u6210API\u9023\u643A", "\u30B7\u30E7\u30FC\u30C8\u52D5\u753B\u96C6\u5BA2", "Nuxt / Next.js", "Stripe"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u7121\u6599\u30D7\u30EC\u30D3\u30E5\u30FC3\u679A\u3067\u4FA1\u5024\u3092\u4F53\u611F\u3055\u305B\u3001\u900F\u304B\u3057\u306A\u3057\u4E00\u62EC\u66F8\u304D\u51FA\u3057\u3092\u6708\u984D$19\u301C$49\u3067\u8AB2\u91D1\uFF08\u7C97\u5229\u738788%\uFF09",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u72EC\u81EAAI\u30E2\u30C7\u30EB\u306E\u5B66\u7FD2\u306F\u4E0D\u8981\u3002\u7279\u5B9A\u5546\u6750\uFF08\u30A2\u30D1\u30EC\u30EB\u3001\u30B8\u30E5\u30A8\u30EA\u30FC\u3001\u5BB6\u5177\uFF09\u5411\u3051\u306E\u7167\u660E\u30FB\u80CC\u666F\u30D7\u30EA\u30BB\u30C3\u30C8\u8A2D\u8A08\u304C\u9375",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u7279\u5B9A\u306E\u7269\u8CA9\u30B8\u30E3\u30F3\u30EB\u306B\u7279\u5316\u2192\u753B\u50CF\u751F\u6210API\u3092\u63A5\u7D9A\u2192\u30D3\u30D5\u30A9\u30FC\u30A2\u30D5\u30BF\u30FC\u52D5\u753B\u3092SNS\u3067\u767A\u4FE1\u3057\u3066\u30BB\u30E9\u30FC\u3092\u96C6\u5BA2"
        ]
      },
      "ko": {
        name: "AI \uC1FC\uD551\uBAB0 \uC0C1\uD488 \uC0AC\uC9C4\xB7\uAC00\uC0C1 \uD53C\uD305 Micro-SaaS (Toolify \uC778\uAE30 \uBAA8\uB378)",
        tagline: "\uC140\uB7EC\uC758 \uCD2C\uC601 \uBE44\uC6A9\uC744 95% \uC808\uAC10\uD558\uB294 \uACE0\uB9C8\uC9C4 \uBE44\uC8FC\uC5BC SaaS (PhotoRoom \uBCA4\uCE58\uB9C8\uD06C)",
        description: "Toolify \uC774\uCEE4\uBA38\uC2A4 \uCE74\uD14C\uACE0\uB9AC\uC5D0\uC11C \uAC00\uC7A5 \uACB0\uC81C \uC804\uD658\uC728\uC774 \uB192\uC740 \uBE44\uC988\uB2C8\uC2A4 \uBAA8\uB378\uC785\uB2C8\uB2E4. \uC2A4\uB9C8\uD2B8\uD3F0\uC73C\uB85C \uCC0D\uC740 \uC81C\uD488 \uC0AC\uC9C4 \uD55C \uC7A5\uC73C\uB85C \uD604\uC9C0 \uBAA8\uB378 \uCC29\uC6A9\uC0F7\uACFC \uB77C\uC774\uD504\uC2A4\uD0C0\uC77C \uBC30\uACBD\uC744 \uC0DD\uC131\uD574 \uD06C\uB85C\uC2A4\uBCF4\uB354 \uC140\uB7EC\uC758 \uC0C1\uC138\uD398\uC774\uC9C0 \uC81C\uC791\uBE44\uB97C \uD68D\uAE30\uC801\uC73C\uB85C \uC904\uC5EC\uC90D\uB2C8\uB2E4.",
        categoryLabel: "\uD06C\uB85C\uC2A4\uBCF4\uB354\xB7\uBB34\uC5ED",
        statusLabel: "Toolify \uACE0\uC218\uC775 \uBAA8\uB378",
        modelUsed: "BiRefNet \uBC30\uACBD\uC81C\uAC70 + Flux.1 / Gemini Flash",
        monthlyCost: "\uC6D4 $19~$49 \uAD6C\uB3C5 \uBC0F \uD06C\uB808\uB527 \xB7 \uC7A5\uB2F9 \uC6D0\uAC00 $0.008 (\uB9C8\uC9C4\uC728 88%)",
        badge: "Toolify \uCE90\uC2DC\uCE74\uC6B0",
        techStack: ["\uCEE4\uBA38\uC2A4 UX \uC124\uACC4", "\uBE44\uC804 API \uD30C\uC774\uD504\uB77C\uC778", "\uC20F\uD3FC \uBE44\uAD50 \uB9C8\uCF00\uD305", "Nuxt / Next.js", "Stripe"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uC6CC\uD130\uB9C8\uD06C \uBB34\uB8CC \uCCB4\uD5D8 3\uD68C \uC81C\uACF5 \uD6C4 \uACE0\uD574\uC0C1\uB3C4 \uC77C\uAD04 \uB2E4\uC6B4\uB85C\uB4DC\uC5D0 \uC6D4 $19~$49 \uACFC\uAE08(\uB9C8\uC9C4\uC728 88%)",
          "[\uD544\uC694 \uC5ED\uB7C9] \uC790\uCCB4 \uBAA8\uB378 \uD559\uC2B5 \uBD88\uD544\uC694. \uC758\uB958\xB7\uC8FC\uC5BC\uB9AC\xB7\uAC00\uAD6C \uB4F1 \uD2B9\uC815 \uCE74\uD14C\uACE0\uB9AC\uC5D0 \uB9DE\uCD98 \uC870\uBA85\xB7\uBC30\uACBD \uD504\uB9AC\uC14B \uAE30\uD68D\uB825\uC774 \uD575\uC2EC",
          "[\uC2E4\uD589 \uBC29\uBC95] \uB2E8\uC77C \uC218\uCD9C\uC785 \uCE74\uD14C\uACE0\uB9AC \uD0C0\uAC9F\uD305 \u2192 \uBE44\uC804 API \uC5F0\uB3D9 \u2192 \uD2F1\uD1A1\xB7\uC140\uB7EC \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0 \uC804\uD6C4 \uBE44\uAD50 \uC601\uC0C1 \uC5C5\uB85C\uB4DC\uB85C \uBAA8\uAC1D"
        ]
      }
    },
    order: 12,
    hidden: false
  },
  {
    id: "rfq-trade-agent",
    name: "B2B \u5916\u8D38\u6D77\u5916\u91C7\u8D2D\u5546\u6316\u6398\u4E0E WhatsApp \u8DDF\u5355 Agent (Toolify \u5916\u8D38\u8D5B\u9053)",
    tagline: "\u5E2E\u5916\u8D38\u4E1A\u52A1\u5458 24 \u5C0F\u65F6\u81EA\u52A8\u627E\u6D77\u5916\u4E70\u5BB6\u3001\u5199\u5B9A\u5236\u5F00\u53D1\u4FE1\u4E0E\u5C0F\u8BED\u79CD\u5B9E\u65F6\u63A5\u5355",
    description: "\u4F20\u7EDF\u5916\u8D38\u5DE5\u5382\u6BCF\u5E74\u82B1\u51E0\u4E07\u5757\u4E70\u5C55\u4F1A\u548C B2B \u5E73\u53F0\u4F1A\u5458\uFF0C\u4F46\u56DE\u590D\u7387\u4E0D\u5230 1%\u3002\u901A\u8FC7\u6293\u53D6 Google Maps / \u6D77\u5173\u540D\u5F55\u4E0E\u4E70\u5BB6\u72EC\u7ACB\u7AD9\u65B0\u54C1\u52A8\u6001\uFF0C\u7528\u5927\u6A21\u578B\u7ED3\u5408\u4E70\u5BB6\u6B63\u5728\u5356\u7684\u54C1\u7C7B\u81EA\u52A8\u5199\u51FA\u300C\u5343\u4EBA\u5343\u9762\u300D\u7684\u5C0F\u8BED\u79CD\u5F00\u53D1\u4FE1\uFF08\u82F1/\u897F/\u963F/\u4FC4/\u65E5\uFF09\uFF0C\u5E76\u901A\u8FC7 WhatsApp \u81EA\u52A8\u56DE\u590D\u65F6\u5DEE\u8BE2\u76D8\u4E0E\u53D1\u62A5\u4EF7\u5355\u3002",
    category: "cross-border",
    categoryLabel: "\u5916\u8D38\u4E0E\u8DE8\u5883",
    status: "active",
    statusLabel: "Toolify \u9AD8\u5BA2\u5355 B2B",
    modelUsed: "DeepSeek-V3\uFF08\u6279\u91CF\u4E70\u5BB6\u753B\u50CF\u63D0\u53D6\uFF09+ Claude Haiku 4.5\uFF08\u5C0F\u8BED\u79CD\u8DDF\u5355\uFF09",
    monthlyCost: "\u6309\u5E2D\u4F4D\u5E74\u8D39 \xA53,800/\u5E74 \u6216\u6309\u6709\u6548\u8BE2\u76D8\u62BD\u6210 \xB7 \u5355\u5BA2\u6237\u6708 Token \u6210\u672C \xA518\uFF08\u6BDB\u5229 92%\uFF09",
    techStack: ["\u5916\u8D38\u5F00\u53D1\u4FE1 SOP", "\u7F51\u9875\u722C\u53D6\u4E0E\u6E05\u6D17", "WhatsApp Business API", "Node.js / Python", "AINode"],
    author: "Toolify \u7CBE\u9009\u62C6\u89E3",
    authorUrl: "https://www.toolify.ai",
    badge: "\u9AD8\u5BA2\u5355 B2B",
    badgeTone: "positive",
    icon: "ph:paper-plane-tilt-bold",
    url: "https://www.toolify.ai",
    storyUrl: "/blog/b2b-trade-outreach-agent-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u9762\u5411\u5916\u8D38 SOHO \u4E0E\u4E2D\u5C0F\u5DE5\u5382\u6536\u8F6F\u4EF6\u5E74\u8D39\uFF08\xA53,800~\xA59,800/\u5E74\uFF09\uFF0C\u6216\u5E2E\u81EA\u5DF1/\u5408\u4F5C\u5DE5\u5382\u76F4\u63A5\u62FF\u6D77\u5916\u6279\u53D1\u5927\u5355\u8D5A 15%~30% \u5916\u8D38\u4F63\u91D1",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u61C2\u5916\u8D38 B2B \u62A5\u4EF7\u672F\u8BED\uFF08FOB/CIF/MOQ\uFF09\u3001\u76EE\u6807\u56FD\u91C7\u8D2D\u4E60\u60EF\uFF0C\u4EE5\u53CA\u57FA\u7840\u7684\u7F51\u9875\u6293\u53D6\u4E0E\u90AE\u4EF6/WhatsApp \u9632\u5C01\u7B56\u7565",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u9501\u5B9A\u4E00\u4E2A\u9AD8\u590D\u8D2D\u5916\u8D38\u54C1\u7C7B\uFF08\u5982\u4E94\u91D1\u3001\u5305\u88C5\u3001\u6C7D\u914D\u3001\u7F8E\u5986\u5305\u6750\uFF09 \u2192 \u7528\u722C\u866B\u62C9\u53D6\u6D77\u5916\u4E2D\u5C0F\u6279\u53D1\u5546\u7F51\u5740 \u2192 AI \u8BFB\u5BF9\u65B9\u9996\u9875\u751F\u6210\u7834\u51B0\u5F00\u53D1\u4FE1"
    ],
    matchProfile: {
      roles: { trade: 99, growth: 92, product: 84, developer: 80, designer: 55 },
      dimensions: { market: 92, delivery: 70, distribution: 94, leverage: 88, resilience: 82 },
      difficulty: "easy",
      revenueModel: "B2B \u9AD8\u5BA2\u5355\u8F6F\u4EF6\u5E74\u8D39 + \u5916\u8D38\u8BE2\u76D8/\u8BA2\u5355\u4F63\u91D1\u5206\u6210",
      monthlyRevenueEstimate: "$4,000 - $28,000 / mo"
    },
    sourceMeta: {
      source: "toolify",
      sourceUrl: "https://www.toolify.ai",
      monthlyVisits: "310K/mo",
      pricingSummary: "$49 - $199 / mo",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "B2B \u5916\u8CBF\u6D77\u5916\u63A1\u8CFC\u5546\u6316\u6398\u8207 WhatsApp \u8DDF\u55AE Agent (Toolify \u5916\u8CBF\u8CFD\u9053)",
        tagline: "\u5E6B\u5916\u8CBF\u696D\u52D9\u54E1 24 \u5C0F\u6642\u81EA\u52D5\u627E\u6D77\u5916\u8CB7\u5BB6\u3001\u5BEB\u5B9A\u5236\u958B\u767C\u4FE1\u8207\u5C0F\u8A9E\u7A2E\u5373\u6642\u63A5\u55AE",
        description: "\u901A\u904E\u6293\u53D6\u6D77\u5916\u540D\u9304\u8207\u8CB7\u5BB6\u7368\u7ACB\u7AD9\u52D5\u614B\uFF0C\u7528\u5927\u6A21\u578B\u7D50\u5408\u8CB7\u5BB6\u6B63\u5728\u8CE3\u7684\u54C1\u985E\u81EA\u52D5\u5BEB\u51FA\u300C\u5343\u4EBA\u5343\u9762\u300D\u7684\u5C0F\u8A9E\u7A2E\u958B\u767C\u4FE1\uFF08\u82F1/\u897F/\u963F/\u4FC4/\u65E5\uFF09\uFF0C\u4E26\u901A\u904E WhatsApp \u81EA\u52D5\u56DE\u8986\u6642\u5DEE\u8A62\u76E4\u8207\u767C\u5831\u50F9\u55AE\u3002",
        categoryLabel: "\u5916\u8CBF\u8207\u8DE8\u5883",
        statusLabel: "Toolify \u9AD8\u5BA2\u55AE B2B",
        monthlyCost: "\u6309\u5E2D\u4F4D\u5E74\u8CBB \xA53,800/\u5E74 \u6216\u6309\u6709\u6548\u8A62\u76E4\u62BD\u6210 \xB7 \u55AE\u5BA2\u6236\u6708 Token \u6210\u672C \xA518\uFF08\u6BDB\u5229 92%\uFF09",
        badge: "\u9AD8\u5BA2\u55AE B2B",
        techStack: ["\u5916\u8CBF\u958B\u767C\u4FE1 SOP", "\u7DB2\u9801\u722C\u53D6\u8207\u6E05\u6D17", "WhatsApp Business API", "Node.js / Python", "AINode"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u9762\u5411\u5916\u8CBF SOHO \u8207\u4E2D\u5C0F\u5DE5\u5EE0\u6536\u8EDF\u4EF6\u5E74\u8CBB\uFF08\xA53,800~\xA59,800/\u5E74\uFF09\uFF0C\u6216\u76F4\u63A5\u62FF\u6D77\u5916\u6279\u767C\u5927\u55AE\u8CFA 15%~30% \u5916\u8CBF\u4F63\u91D1",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u61C2\u5916\u8CBF B2B \u5831\u50F9\u8853\u8A9E\uFF08FOB/CIF/MOQ\uFF09\u3001\u76EE\u6A19\u570B\u63A1\u8CFC\u7FD2\u6163\uFF0C\u4EE5\u53CA\u90F5\u4EF6/WhatsApp \u9632\u5C01\u7B56\u7565",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u9396\u5B9A\u4E00\u500B\u9AD8\u8907\u8CFC\u5916\u8CBF\u54C1\u985E\uFF08\u4E94\u91D1\u3001\u5305\u88DD\u3001\u6C7D\u914D\uFF09 \u2192 \u62C9\u53D6\u6D77\u5916\u6279\u767C\u5546\u7DB2\u5740 \u2192 AI \u8B80\u5C0D\u65B9\u9996\u9801\u751F\u6210\u7834\u51B0\u958B\u767C\u4FE1"
        ]
      },
      "en": {
        name: "B2B Foreign Trade Buyer Discovery & WhatsApp RFQ Agent (Toolify B2B)",
        tagline: "24/7 AI Outbound & Multilingual Quotation Agent for Exporters",
        description: "Exporters spend thousands on trade shows with <1% cold email reply rates. By scraping buyer websites and customs records, this agent crafts hyper-personalized outreach in Spanish, Arabic, Russian, or Japanese and handles timezone-shifted WhatsApp RFQ replies automatically.",
        categoryLabel: "Cross-Border & Trade",
        statusLabel: "High-Ticket B2B",
        modelUsed: "DeepSeek-V3 (Lead Enrichment) + Claude Haiku 4.5",
        monthlyCost: "$49\u2013$199/mo B2B Seats or Trade Commission \xB7 ~$2.50 Token Cost/seat (92% Margin)",
        badge: "High-Ticket B2B",
        techStack: ["B2B Export SOP", "Lead Scraping", "WhatsApp Business API", "Node.js / Python", "AINode"],
        highlights: [
          "[How It Makes Money] Charge $49\u2013$199/mo to export factories & SOHO traders, or earn 15%\u201330% commission on closed wholesale orders",
          "[Required Capabilities] Incoterms/MOQ quoting fluency, outbound deliverability warmup, and lightweight web scraping",
          "[How to Operate] Target 1 export vertical (packaging, auto parts, hardware) \u2192 scrape overseas distributor sites \u2192 auto-send personalized pitches"
        ]
      },
      "ja": {
        name: "B2B\u8CBF\u6613\u30D0\u30A4\u30E4\u30FC\u958B\u62D3\uFF06WhatsApp\u81EA\u52D5\u898B\u7A4D\u3082\u308A\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8 (Toolify B2B)",
        tagline: "\u6D77\u5916\u30D0\u30A4\u30E4\u30FC\u8ABF\u67FB\u30FB\u591A\u8A00\u8A9E\u30A2\u30D7\u30ED\u30FC\u30C1\u30FB\u6642\u5DEE\u5BFE\u5FDC\u309224\u6642\u9593\u81EA\u52D5\u5316\u3059\u308BB2B\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8",
        description: "\u6D77\u5916\u5378\u58F2\u696D\u8005\u306EWeb\u30B5\u30A4\u30C8\u3084\u901A\u95A2\u30C7\u30FC\u30BF\u3092\u89E3\u6790\u3057\u3001\u76F8\u624B\u304C\u6271\u3046\u5546\u6750\u306B\u5408\u308F\u305B\u305F\u30D1\u30FC\u30BD\u30CA\u30E9\u30A4\u30BA\u63D0\u6848\u30E1\u30FC\u30EB\uFF08\u82F1\u30FB\u897F\u30FB\u9732\u30FB\u30A2\u30E9\u30D3\u30A2\u8A9E\u306A\u3069\uFF09\u3092\u81EA\u52D5\u751F\u6210\u3002\u3055\u3089\u306BWhatsApp\u3067\u306E\u6642\u5DEE\u554F\u3044\u5408\u308F\u305B\u3084FOB/MOQ\u898B\u7A4D\u3082\u308A\u56DE\u7B54\u3092\u81EA\u52D5\u5316\u3057\u307E\u3059\u3002",
        categoryLabel: "\u8D8A\u5883EC\u30FB\u8CBF\u6613",
        statusLabel: "\u9AD8\u5358\u4FA1B2B\u30E2\u30C7\u30EB",
        modelUsed: "DeepSeek-V3\uFF08\u30EA\u30FC\u30C9\u89E3\u6790\uFF09+ Claude Haiku 4.5",
        monthlyCost: "\u6708\u984D$49\u301C$199\u306EB2B\u8AB2\u91D1\u307E\u305F\u306F\u6210\u7D04\u30B3\u30DF\u30C3\u30B7\u30E7\u30F3 \xB7 \u539F\u4FA1 \u7D04$2.5/\u5E2D\uFF08\u7C97\u522992%\uFF09",
        badge: "\u9AD8\u5358\u4FA1B2B",
        techStack: ["\u8CBF\u6613\u5B9F\u52D9SOP", "Web\u30B9\u30AF\u30EC\u30A4\u30D4\u30F3\u30B0", "WhatsApp API", "Node.js / Python", "AINode"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u8F38\u51FA\u30E1\u30FC\u30AB\u30FC\u3084\u500B\u4EBA\u8CBF\u6613\u5546\u5411\u3051\u306B\u6708\u984D$49\u301C$199\u3067SaaS\u63D0\u4F9B\u3001\u307E\u305F\u306F\u81EA\u793E\u3067\u6D77\u5916\u5927\u53E3\u6848\u4EF6\u3092\u7372\u5F97\u305715\u301C30%\u306E\u4EF2\u4ECB\u624B\u6570\u6599\u3092\u5F97\u308B",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u8CBF\u6613\u53D6\u5F15\u6761\u4EF6\uFF08FOB/CIF/MOQ\uFF09\u306E\u7406\u89E3\u3001\u30EA\u30FC\u30C9\u62BD\u51FA\u81EA\u52D5\u5316\u3001\u30E1\u30FC\u30EB\u5230\u9054\u7387\u306E\u6700\u9069\u5316",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u7279\u5B9A\u306E\u8F38\u51FA\u5546\u6750\uFF08\u5305\u88C5\u8CC7\u6750\u3001\u81EA\u52D5\u8ECA\u90E8\u54C1\u306A\u3069\uFF09\u306B\u7D5E\u308A\u3001\u6D77\u5916\u30C7\u30A3\u30B9\u30C8\u30EA\u30D3\u30E5\u30FC\u30BF\u30FC\u60C5\u5831\u3092\u53D6\u5F97\u3057\u3066AI\u3067\u500B\u5225\u63D0\u6848\u3092\u9001\u4FE1"
        ]
      },
      "ko": {
        name: "B2B \uD574\uC678 \uBC14\uC774\uC5B4 \uBC1C\uAD74 \uBC0F WhatsApp \uC778\uCF70\uC774\uC5B4\uB9AC \uC790\uB3D9 \uC751\uB300 \uC5D0\uC774\uC804\uD2B8",
        tagline: "\uC218\uCD9C \uAE30\uC5C5\uACFC \uBB34\uC5ED \uC140\uB7EC\uB97C \uC704\uD55C 24\uC2DC\uAC04 \uB2E4\uAD6D\uC5B4 \uCF5C\uB4DC\uBA54\uC77C\xB7\uBC14\uC774\uC5B4 \uC0C1\uB2F4 AI",
        description: "\uD574\uC678 \uB3C4\uB9E4\uC0C1\uC758 \uC6F9\uC0AC\uC774\uD2B8\uC640 \uD1B5\uAD00 \uB370\uC774\uD130\uB97C \uBD84\uC11D\uD574 \uBC14\uC774\uC5B4 \uB9DE\uCDA4\uD615 \uB2E4\uAD6D\uC5B4 \uC81C\uC548\uC11C(\uC601\xB7\uC2A4\uD398\uC778\xB7\uC544\uB78D\xB7\uB7EC\uC2DC\uC544\xB7\uC77C\uBCF8\uC5B4)\uB97C \uC791\uC131\uD558\uACE0, \uC2DC\uCC28\uB85C \uC778\uD574 \uB193\uCE58\uAE30 \uC26C\uC6B4 WhatsApp \uACAC\uC801 \uBB38\uC758(FOB/MOQ)\uB97C 24\uC2DC\uAC04 \uC790\uB3D9 \uC751\uB300\uD569\uB2C8\uB2E4.",
        categoryLabel: "\uD06C\uB85C\uC2A4\uBCF4\uB354\xB7\uBB34\uC5ED",
        statusLabel: "\uACE0\uB2E8\uAC00 B2B \uBAA8\uB378",
        modelUsed: "DeepSeek-V3 (\uBC14\uC774\uC5B4 \uBD84\uC11D) + Claude Haiku 4.5",
        monthlyCost: "\uC6D4 $49~$199 B2B \uAD6C\uB3C5 \uB610\uB294 \uC624\uB354 \uC218\uC218\uB8CC \xB7 \uC88C\uC11D\uB2F9 \uC6D0\uAC00 $2.5 (\uB9C8\uC9C4\uC728 92%)",
        badge: "\uACE0\uB2E8\uAC00 B2B",
        techStack: ["\uBB34\uC5ED \uC624\uD37C SOP", "\uB9AC\uB4DC \uC2A4\uD06C\uB798\uD551", "WhatsApp API", "Node.js / Python", "AINode"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uC911\uC18C \uC218\uCD9C \uC81C\uC870\uC0AC \uBC0F \uBB34\uC5ED\uC0C1 \uB300\uC0C1 \uC6D4 $49~$199 SaaS \uACFC\uAE08, \uB610\uB294 \uC9C1\uC811 \uBC14\uC774\uC5B4\uB97C \uB9E4\uCE6D\uD574 15%~30% \uBB34\uC5ED \uCEE4\uBBF8\uC158 \uC218\uCDE8",
          "[\uD544\uC694 \uC5ED\uB7C9] \uBB34\uC5ED \uC870\uAC74(FOB/CIF/MOQ) \uC774\uD574, \uD0C0\uAC9F \uAD6D\uAC00 \uBC14\uC774\uC5B4 \uB9AC\uC2A4\uD2B8 \uCD94\uCD9C, \uC774\uBA54\uC77C/\uBA54\uC2E0\uC800 \uB3C4\uB2EC\uB960 \uAD00\uB9AC",
          "[\uC2E4\uD589 \uBC29\uBC95] \uC7AC\uC8FC\uBB38\uC728\uC774 \uB192\uC740 \uC218\uCD9C \uD488\uBAA9(\uD328\uD0A4\uC9D5, \uD558\uB4DC\uC6E8\uC5B4, \uBDF0\uD2F0 \uBD80\uC790\uC7AC) \uC120\uC815 \u2192 \uD574\uC678 \uC720\uD1B5\uC0AC \uD648\uD398\uC774\uC9C0 \uD06C\uB864\uB9C1 \u2192 AI \uB9DE\uCDA4 \uCF5C\uB4DC\uBA54\uC77C \uBC1C\uC1A1"
        ]
      }
    },
    order: 14,
    hidden: false
  },
  {
    id: "hoxi-ai",
    name: "Hoxi (hoxi.ai)",
    tagline: "AI \u6A21\u578B\u5B9E\u6D4B\u699C\u5355\u4E0E\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u95E8\u6237",
    description: "\u56F4\u7ED5\u300C\u5E2E\u72EC\u7ACB\u5F00\u53D1\u8005\u4E0E\u8DE8\u5883\u521B\u4E1A\u8005\u7701\u7B97\u529B\u94B1\u3001\u627E\u843D\u5730\u9879\u76EE\u300D\u505A\u516C\u5F00\u53EF\u6838\u5B9E\u7684\u6A21\u578B\u4EF7\u683C\u699C\u5355\u3001\u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u4E0E\u4E94\u7EF4\u80FD\u529B\u9879\u76EE\u5339\u914D\u3002\u7528\u9AD8\u4EF7\u503C\u514D\u8D39\u5DE5\u5177\u548C\u6DF1\u5EA6\u62C6\u89E3\u957F\u6587\u505A\u81EA\u7136\u641C\u7D22\uFF08SEO\uFF09\u83B7\u5BA2\uFF0C\u628A\u516C\u57DF\u6D41\u91CF\u8F6C\u5316\u4E3A\u79C1\u6709\u4F1A\u5458\u4E0E\u7B97\u529B\u6D88\u8D39\u3002",
    category: "ai-infra",
    categoryLabel: "AI \u9009\u578B\u4E0E\u6D41\u91CF",
    status: "active",
    statusLabel: "\u5546\u4E1A\u5316\u8FD0\u884C",
    modelUsed: "Gemini Flash / DeepSeek-V3\uFF08\u65E5\u5E38\u8BC4\u6D4B\u4E0E\u5185\u5BB9\u8F85\u52A9\uFF09",
    monthlyCost: "\u7F51\u5173\u5BFC\u6D41 + \u8054\u76DF\u5206\u6210 + \u4F1A\u5458\u79EF\u5206\u95ED\u73AF \xB7 \u7B97\u529B\u6210\u672C \xA545/\u6708",
    techStack: ["SEO \u5185\u5BB9\u83B7\u5BA2", "\u6570\u636E\u6838\u9A8C\u4E0E\u9009\u578B", "\u5546\u4E1A\u95ED\u73AF\u8BBE\u8BA1", "Nuxt 4", "Drizzle ORM"],
    author: "\u53EF\u4E50 (Coller)",
    badge: "\u6D41\u91CF\u4E2D\u67A2",
    badgeTone: "info",
    icon: "ph:compass-tool-bold",
    url: "https://hoxi.ai",
    storyUrl: "/blog/hoxi-ai-solo-portal-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u9760\u6A21\u578B\u5BF9\u6BD4\u4E0E\u9879\u76EE\u62C6\u89E3\u622A\u83B7\u7CBE\u51C6\u641C\u7D22\u6D41\u91CF\uFF0C\u5411\u81EA\u8425\u7B97\u529B\u7F51\u5173\u3001SaaS \u5DE5\u5177\u4E0E\u9AD8\u4EF7\u503C\u8054\u76DF\u8BA2\u9605\u5BFC\u6D41\u53D8\u73B0",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u6301\u7EED\u8F93\u51FA\u771F\u5B9E\u53EF\u6838\u5B9E\u7684\u8BC4\u6D4B\u6570\u636E\u3001\u591A\u8BED\u8A00 Programmatic SEO \u8DEF\u7531\u8BBE\u8BA1\uFF0C\u4EE5\u53CA\u628A\u5185\u5BB9\u75DB\u70B9\u8F6C\u5316\u4E3A\u5DE5\u5177\u4EA7\u54C1\u7684\u80FD\u529B",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u65E0\u4EBA\u503C\u5B88\u540C\u6B65\u6A21\u578B\u699C\u5355\u4E0E\u9879\u76EE\u62C6\u89E3\u5E93 \u2192 \u7528\u4E94\u7EF4\u80FD\u529B\u5339\u914D\u505A\u793E\u4EA4\u88C2\u53D8 \u2192 \u6BCF\u65E5\u7B7E\u5230\u9001\u7B97\u529B\u79EF\u5206\u7559\u5B58\u7528\u6237"
    ],
    matchProfile: {
      roles: { growth: 95, product: 92, developer: 84, trade: 80, designer: 78 },
      dimensions: { market: 90, delivery: 74, distribution: 95, leverage: 88, resilience: 82 },
      difficulty: "easy",
      revenueModel: "SEO \u81EA\u7136\u6D41\u91CF + \u8054\u76DF\u4F63\u91D1 + \u7B97\u529B\u7F51\u5173\u5BFC\u6D41",
      monthlyRevenueEstimate: "$2,500 - $18,000 / mo"
    },
    sourceMeta: {
      source: "official",
      sourceUrl: "https://hoxi.ai",
      monthlyVisits: "95K/mo",
      pricingSummary: "Freemium + Affiliate + Credits",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "Hoxi (hoxi.ai)",
        tagline: "AI \u6A21\u578B\u5BE6\u6E2C\u699C\u55AE\u8207\u4E00\u4EBA\u516C\u53F8\u5BE6\u6230\u9580\u6236",
        description: "\u570D\u7E5E\u300C\u5E6B\u7368\u7ACB\u958B\u767C\u8005\u8207\u8DE8\u5883\u5275\u696D\u8005\u7701\u7B97\u529B\u9322\u3001\u627E\u843D\u5730\u9805\u76EE\u300D\u505A\u516C\u958B\u53EF\u6838\u5BE6\u7684\u6A21\u578B\u50F9\u683C\u699C\u55AE\u3001\u4E2D\u8F49\u7AD9\u5BE6\u6E2C\u8207\u4E94\u7DAD\u80FD\u529B\u9805\u76EE\u5339\u914D\u3002\u7528\u9AD8\u50F9\u503C\u514D\u8CBB\u5DE5\u5177\u548C\u6DF1\u5EA6\u62C6\u89E3\u9577\u6587\u505A\u81EA\u7136\u641C\u7D22\uFF08SEO\uFF09\u7372\u5BA2\u3002",
        categoryLabel: "AI \u9078\u578B\u8207\u6D41\u91CF",
        statusLabel: "\u5546\u696D\u5316\u904B\u884C",
        monthlyCost: "\u7DB2\u95DC\u5C0E\u6D41 + \u806F\u76DF\u5206\u6210 + \u6703\u54E1\u7A4D\u5206\u9589\u74B0 \xB7 \u7B97\u529B\u6210\u672C \xA545/\u6708",
        badge: "\u6D41\u91CF\u4E2D\u6A1E",
        techStack: ["SEO \u5167\u5BB9\u7372\u5BA2", "\u6578\u64DA\u6838\u9A57\u8207\u9078\u578B", "\u5546\u696D\u9589\u74B0\u8A2D\u8A08", "Nuxt 4", "Drizzle ORM"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u9760\u6A21\u578B\u5C0D\u6BD4\u8207\u9805\u76EE\u62C6\u89E3\u622A\u7372\u7CBE\u6E96\u641C\u7D22\u6D41\u91CF\uFF0C\u5411\u81EA\u71DF\u7B97\u529B\u7DB2\u95DC\u3001SaaS \u5DE5\u5177\u8207\u806F\u76DF\u8A02\u95B1\u5C0E\u6D41\u8B8A\u73FE",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u6301\u7E8C\u8F38\u51FA\u771F\u5BE6\u8A55\u6E2C\u6578\u64DA\u3001\u591A\u8A9E\u8A00 SEO \u8DEF\u7531\u67B6\u69CB\u8A2D\u8A08\uFF0C\u4EE5\u53CA\u628A\u5167\u5BB9\u75DB\u9EDE\u8F49\u5316\u70BA\u5DE5\u5177\u7684\u80FD\u529B",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u7121\u4EBA\u503C\u5B88\u540C\u6B65\u6A21\u578B\u699C\u55AE\u8207\u9805\u76EE\u62C6\u89E3\u5EAB \u2192 \u7528\u4E94\u7DAD\u80FD\u529B\u5339\u914D\u505A\u793E\u4EA4\u88C2\u8B8A \u2192 \u6BCF\u65E5\u7C3D\u5230\u9001\u7B97\u529B\u7A4D\u5206\u7559\u5B58\u7528\u6236"
        ]
      },
      "en": {
        name: "Hoxi (hoxi.ai)",
        tagline: "Verified LLM Leaderboard & Solo Builder Project Portal",
        description: "Helps solo builders and global sellers cut compute bills and match with actionable business models through verified model benchmarks, gateway tests, and 5D project matchmaking \u2014 turning organic SEO traffic into ecosystem revenue.",
        categoryLabel: "AI Portal & Traffic",
        statusLabel: "Live & Profitable",
        modelUsed: "Gemini Flash / DeepSeek-V3",
        monthlyCost: "Gateway Funnel + Affiliates + Member Points \xB7 Compute ~$6/mo",
        badge: "Traffic Hub",
        techStack: ["Programmatic SEO", "Data Verification", "Funnel Design", "Nuxt 4", "Drizzle ORM"],
        highlights: [
          "[How It Makes Money] Captures high-intent search traffic and funnels users into compute gateways, SaaS tools, and affiliate plans",
          "[Required Capabilities] Credible benchmark curation, multilingual programmatic SEO architecture, and productized content",
          "[How to Operate] Auto-sync verified model & project datasets \u2192 drive viral sharing with 5D project matching \u2192 retain via daily check-in points"
        ]
      },
      "ja": {
        name: "Hoxi (hoxi.ai)",
        tagline: "AI\u30E2\u30C7\u30EB\u5B9F\u6E2C\u30E9\u30F3\u30AD\u30F3\u30B0\uFF061\u4EBA\u8D77\u696D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u89E3\u5256\u30DD\u30FC\u30BF\u30EB",
        description: "\u500B\u4EBA\u958B\u767A\u8005\u3084\u8D8A\u5883\u30BB\u30E9\u30FC\u5411\u3051\u306B\u3001\u691C\u8A3C\u6E08\u307F\u306ELLM\u4FA1\u683C\u30FB\u6027\u80FD\u6BD4\u8F03\u3001API\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u5B9F\u6E2C\u30015\u6B21\u5143\u30B9\u30AD\u30EB\u8A3A\u65AD\u306B\u3088\u308B\u6700\u9069\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u63A8\u85A6\u3092\u63D0\u4F9B\u3002SEO\u81EA\u7136\u691C\u7D22\u304B\u3089\u9AD8\u610F\u6B32\u30E6\u30FC\u30B6\u30FC\u3092\u96C6\u5BA2\u3057\u3001\u81EA\u793ESaaS\u3084\u8A08\u7B97\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u3078\u9001\u5BA2\u3057\u307E\u3059\u3002",
        categoryLabel: "AI\u9078\u5B9A\u30FB\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF",
        statusLabel: "\u5546\u7528\u7A3C\u50CD\u4E2D",
        modelUsed: "Gemini Flash / DeepSeek-V3",
        monthlyCost: "\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u9001\u5BA2\uFF0B\u30A2\u30D5\u30A3\u30EA\u30A8\u30A4\u30C8\uFF0B\u4F1A\u54E1\u30DD\u30A4\u30F3\u30C8 \xB7 \u7DAD\u6301\u8CBB \u7D04$6/\u6708",
        badge: "\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF\u4E2D\u67A2",
        techStack: ["\u30D7\u30ED\u30B0\u30E9\u30DE\u30C6\u30A3\u30C3\u30AFSEO", "\u30C7\u30FC\u30BF\u691C\u8A3C", "\u30D5\u30A1\u30CD\u30EB\u8A2D\u8A08", "Nuxt 4", "Drizzle ORM"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u30E2\u30C7\u30EB\u6BD4\u8F03\u3084\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u89E3\u5256\u8A18\u4E8B\u3067\u691C\u7D22\u6D41\u5165\u3092\u7372\u5F97\u3057\u3001\u81EA\u793EAPI\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u3084SaaS\u30C4\u30FC\u30EB\u3078\u9001\u5BA2\u3057\u3066\u53CE\u76CA\u5316",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u4FE1\u983C\u6027\u306E\u9AD8\u3044\u6BD4\u8F03\u30C7\u30FC\u30BF\u6574\u7406\u3001\u591A\u8A00\u8A9ESEO\u30EB\u30FC\u30C6\u30A3\u30F3\u30B0\u8A2D\u8A08\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u304B\u3089\u30C4\u30FC\u30EB\u3078\u306E\u5C0E\u7DDA\u8A2D\u8A08",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u30E2\u30C7\u30EB\u30E9\u30F3\u30AD\u30F3\u30B0\u3068\u4E8B\u4F8BDB\u3092\u81EA\u52D5\u66F4\u65B0\u21925\u6B21\u5143\u9069\u6027\u8A3A\u65AD\u3067SNS\u62E1\u6563\u2192\u6BCE\u65E5\u30C1\u30A7\u30C3\u30AF\u30A4\u30F3\u306E\u30DD\u30A4\u30F3\u30C8\u9084\u5143\u3067\u5B9A\u7740\u5316"
        ]
      },
      "ko": {
        name: "Hoxi (hoxi.ai)",
        tagline: "AI \uBAA8\uB378 \uC2E4\uCE21 \uB9AC\uB354\uBCF4\uB4DC \uBC0F 1\uC778 \uAE30\uC5C5 \uC218\uC775\uD654 \uD504\uB85C\uC81D\uD2B8 \uD3EC\uD138",
        description: "1\uC778 \uAC1C\uBC1C\uC790\uC640 \uAE00\uB85C\uBC8C \uC140\uB7EC\uAC00 \uC5F0\uC0B0 \uBE44\uC6A9\uC744 \uC544\uB07C\uACE0 \uC790\uC2E0\uC5D0\uAC8C \uB9DE\uB294 \uC218\uC775 \uBAA8\uB378\uC744 \uCC3E\uC744 \uC218 \uC788\uB3C4\uB85D \uAC80\uC99D\uB41C LLM \uAC00\uACA9 \uBE44\uAD50, \uAC8C\uC774\uD2B8\uC6E8\uC774 \uBCA4\uCE58\uB9C8\uD06C, 5\uCC28\uC6D0 \uC5ED\uB7C9 \uB9E4\uCE6D\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uAC80\uC0C9(SEO) \uD2B8\uB798\uD53D\uC744 \uC790\uC0AC \uAC8C\uC774\uD2B8\uC6E8\uC774\uC640 SaaS \uB9E4\uCD9C\uB85C \uC804\uD658\uD569\uB2C8\uB2E4.",
        categoryLabel: "AI \uC120\uC815\xB7\uD2B8\uB798\uD53D",
        statusLabel: "\uC0C1\uC6A9 \uC6B4\uC601 \uC911",
        modelUsed: "Gemini Flash / DeepSeek-V3",
        monthlyCost: "\uAC8C\uC774\uD2B8\uC6E8\uC774 \uC720\uC785 + \uC81C\uD734 \uC218\uC218\uB8CC + \uD3EC\uC778\uD2B8 \uC0DD\uD0DC\uACC4 \xB7 \uC6D0\uAC00 \uC6D4 $6",
        badge: "\uD2B8\uB798\uD53D \uD5C8\uBE0C",
        techStack: ["\uD504\uB85C\uADF8\uB798\uB9E4\uD2F1 SEO", "\uB370\uC774\uD130 \uAC80\uC99D", "\uD37C\uB110 \uC124\uACC4", "Nuxt 4", "Drizzle ORM"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uBAA8\uB378 \uAC00\uC131\uBE44 \uBE44\uAD50\uC640 \uD504\uB85C\uC81D\uD2B8 \uBD84\uC11D \uCF58\uD150\uCE20\uB85C \uAC80\uC0C9 \uD2B8\uB798\uD53D\uC744 \uBAA8\uC544 \uC790\uC0AC API \uAC8C\uC774\uD2B8\uC6E8\uC774 \uBC0F SaaS \uAD6C\uB3C5\uC73C\uB85C \uC804\uD658",
          "[\uD544\uC694 \uC5ED\uB7C9] \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uBCA4\uCE58\uB9C8\uD06C \uD050\uB808\uC774\uC158, \uB2E4\uAD6D\uC5B4 SEO \uC544\uD0A4\uD14D\uCC98, \uCF58\uD150\uCE20\uC758 \uB3C4\uAD6C\uD654 \uC5ED\uB7C9",
          "[\uC2E4\uD589 \uBC29\uBC95] \uBAA8\uB378 \uB9AC\uB354\uBCF4\uB4DC\xB7\uD504\uB85C\uC81D\uD2B8 DB \uBB34\uC778 \uB3D9\uAE30\uD654 \u2192 5\uCC28\uC6D0 \uD504\uB85C\uC81D\uD2B8 \uB9E4\uCE6D \uD14C\uC2A4\uD2B8\uB85C \uBC14\uC774\uB7F4 \uC720\uB3C4 \u2192 \uCD9C\uC11D\uCCB4\uD06C \uD3EC\uC778\uD2B8\uB85C \uB9AC\uD150\uC158 \uD655\uBCF4"
        ]
      }
    },
    order: 15,
    hidden: false
  },
  {
    id: "kalodata-tiktok",
    name: "TikTok Shop \u8DE8\u5883\u7206\u54C1\u76D1\u63A7\u4E0E\u5E26\u8D27\u811A\u672C\u514B\u9686\u5668 (Toolify \u589E\u957F\u7206\u6B3E)",
    tagline: "\u5E2E\u8DE8\u5883\u5356\u5BB6\u6293\u53D6\u7F8E\u533A/\u4E1C\u5357\u4E9A\u7206\u6B3E\u89C6\u9891\uFF0C\u4E00\u952E\u62C6\u89E3\u9EC4\u91D1\u524D 3 \u79D2\u94A9\u5B50\u4E0E\u591A\u8BED\u79CD\u914D\u97F3\u811A\u672C",
    description: "\u505A TikTok Shop \u548C\u6D77\u5916\u72EC\u7ACB\u7AD9\u6295\u6D41\u7684\u5356\u5BB6\uFF0C\u6BCF\u5929\u6700\u5934\u75BC\u7684\u662F\u4E0D\u77E5\u9053\u62CD\u4EC0\u4E48\u5E26\u8D27\u89C6\u9891\u80FD\u7206\u3002\u901A\u8FC7\u6293\u53D6\u5F53\u65E5\u9500\u91CF\u98D9\u5347\u7684\u5546\u54C1\u77ED\u89C6\u9891\uFF0C\u7528\u591A\u6A21\u6001\u5927\u6A21\u578B\u62C6\u89E3\u5176\u300C\u524D 3 \u79D2\u89C6\u89C9\u94A9\u5B50 + \u75DB\u70B9\u8BDD\u672F + \u8F6C\u5316\u53F7\u53EC\u300D\uFF0C\u5E76\u81EA\u52A8\u6539\u5199\u6210 10 \u6761\u53EF\u76F4\u63A5\u4EA4\u7ED9\u6570\u5B57\u4EBA\u6216\u914D\u97F3 API \u5408\u6210\u7684\u672C\u571F\u5316\u5E26\u8D27\u811A\u672C\u3002",
    category: "cross-border",
    categoryLabel: "\u5916\u8D38\u4E0E\u8DE8\u5883",
    status: "active",
    statusLabel: "Toolify \u589E\u957F\u6807\u6746",
    modelUsed: "Gemini 3.1 Flash\uFF08\u89C6\u9891\u591A\u6A21\u6001\u7406\u89E3\uFF09+ Claude Sonnet 4.6\uFF08\u7206\u6B3E\u811A\u672C\u6539\u5199\uFF09",
    monthlyCost: "SaaS \u8BA2\u9605 $29~$99/\u6708 \xB7 \u5355\u6761\u89C6\u9891\u62C6\u89E3\u6210\u672C\u4EC5 \xA50.08\uFF08\u6BDB\u5229 90%\uFF09",
    techStack: ["TikTok \u5E26\u8D27\u65B9\u6CD5\u8BBA", "\u89C6\u9891\u591A\u6A21\u6001\u89E3\u6790", "\u8DE8\u5883\u5356\u5BB6\u793E\u7FA4\u8FD0\u8425", "Nuxt / FastAPI", "ElevenLabs / TTS"],
    author: "Toolify \u7CBE\u9009\u62C6\u89E3",
    authorUrl: "https://www.toolify.ai",
    badge: "TikTok \u51FA\u6D77\u521A\u9700",
    badgeTone: "positive",
    icon: "ph:video-camera-bold",
    url: "https://www.toolify.ai",
    storyUrl: "/blog/tiktok-shop-script-agent-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u6309\u6708\u6536\u53D6\u5356\u5BB6\u4E0E\u8FBE\u4EBA\u8BA2\u9605\u8D39\uFF08$29~$99/\u6708\uFF09\uFF0C\u6216\u81EA\u5DF1\u6279\u91CF\u77E9\u9635\u8D77\u53F7\u6302 TikTok Shop \u7CBE\u9009\u8054\u76DF\u8D5A 15%~30% \u5E26\u8D27\u4F63\u91D1",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u61C2\u77ED\u89C6\u9891\u9EC4\u91D1\u524D 3 \u79D2\u7559\u5B58\u903B\u8F91\u3001\u8DE8\u5883\u9009\u54C1\u8D8B\u52BF\uFF0C\u4EE5\u53CA\u5229\u7528 Gemini \u89C6\u9891\u7406\u89E3\u4F4E\u6210\u672C\u6279\u5904\u7406\u7684\u80FD\u529B",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u63A5\u5165\u516C\u5F00\u5E26\u8D27\u699C\u5355\u6570\u636E \u2192 \u7528 Gemini Flash \u63D0\u53D6\u89C6\u9891\u5206\u955C\u4E0E\u53F0\u8BCD\u7ED3\u6784 \u2192 \u4E00\u952E\u751F\u6210\u82F1/\u897F/\u6CF0/\u8D8A\u8BED\u5E26\u8D27\u811A\u672C\u4E0E\u914D\u97F3"
    ],
    matchProfile: {
      roles: { growth: 98, trade: 95, product: 86, designer: 78, developer: 74 },
      dimensions: { market: 92, delivery: 68, distribution: 96, leverage: 86, resilience: 78 },
      difficulty: "easy",
      revenueModel: "SaaS \u8BA2\u9605 ($29-$99/mo) + TikTok \u8FBE\u4EBA\u5E26\u8D27\u4F63\u91D1",
      monthlyRevenueEstimate: "$3,800 - $32,000 / mo"
    },
    sourceMeta: {
      source: "toolify",
      sourceUrl: "https://www.toolify.ai",
      monthlyVisits: "520K/mo",
      pricingSummary: "$29 - $99 / mo",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "TikTok Shop \u8DE8\u5883\u7206\u54C1\u76E3\u63A7\u8207\u5E36\u8CA8\u8173\u672C\u514B\u9686\u5668 (Toolify \u589E\u9577\u7206\u6B3E)",
        tagline: "\u5E6B\u8DE8\u5883\u8CE3\u5BB6\u6293\u53D6\u7F8E\u5340/\u6771\u5357\u4E9E\u7206\u6B3E\u8996\u983B\uFF0C\u4E00\u9375\u62C6\u89E3\u9EC3\u91D1\u524D 3 \u79D2\u9264\u5B50\u8207\u591A\u8A9E\u7A2E\u914D\u97F3\u8173\u672C",
        description: "\u901A\u904E\u6293\u53D6\u7576\u65E5\u92B7\u91CF\u98C6\u5347\u7684\u5546\u54C1\u77ED\u8996\u983B\uFF0C\u7528\u591A\u6A21\u614B\u5927\u6A21\u578B\u62C6\u89E3\u5176\u300C\u524D 3 \u79D2\u8996\u89BA\u9264\u5B50 + \u75DB\u9EDE\u8A71\u8853 + \u8F49\u5316\u865F\u53EC\u300D\uFF0C\u4E26\u81EA\u52D5\u6539\u5BEB\u6210 10 \u689D\u53EF\u76F4\u63A5\u4EA4\u7D66\u914D\u97F3 API \u5408\u6210\u7684\u672C\u571F\u5316\u5E36\u8CA8\u8173\u672C\u3002",
        categoryLabel: "\u5916\u8CBF\u8207\u8DE8\u5883",
        statusLabel: "Toolify \u589E\u9577\u6A19\u687F",
        monthlyCost: "SaaS \u8A02\u95B1 $29~$99/\u6708 \xB7 \u55AE\u689D\u8996\u983B\u62C6\u89E3\u6210\u672C\u50C5 \xA50.08\uFF08\u6BDB\u5229 90%\uFF09",
        badge: "TikTok \u51FA\u6D77\u525B\u9700",
        techStack: ["TikTok \u5E36\u8CA8\u65B9\u6CD5\u8AD6", "\u8996\u983B\u591A\u6A21\u614B\u89E3\u6790", "\u8DE8\u5883\u8CE3\u5BB6\u793E\u7FA4\u904B\u71DF", "Nuxt / FastAPI", "TTS \u8A9E\u97F3"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u6309\u6708\u6536\u53D6\u8CE3\u5BB6\u8207\u9054\u4EBA\u8A02\u95B1\u8CBB\uFF08$29~$99/\u6708\uFF09\uFF0C\u6216\u81EA\u5DF1\u6279\u91CF\u77E9\u9663\u8D77\u865F\u639B TikTok \u7CBE\u9078\u806F\u76DF\u8CFA 15%~30% \u4F63\u91D1",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u61C2\u77ED\u8996\u983B\u9EC3\u91D1\u524D 3 \u79D2\u7559\u5B58\u908F\u8F2F\u3001\u8DE8\u5883\u9078\u54C1\u8DA8\u52E2\uFF0C\u4EE5\u53CA\u591A\u6A21\u614B\u89C6\u9891\u6279\u8655\u7406\u80FD\u529B",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u63A5\u5165\u5E36\u8CA8\u699C\u55AE\u6578\u64DA \u2192 \u7528 Gemini Flash \u63D0\u53D6\u8996\u983B\u5206\u93E1\u8207\u53F0\u8A5E\u7D50\u69CB \u2192 \u4E00\u9375\u751F\u6210\u591A\u8A9E\u7A2E\u5E36\u8CA8\u8173\u672C\u8207\u914D\u97F3"
        ]
      },
      "en": {
        name: "TikTok Shop Viral Product & Hook Cloning Agent (Toolify Growth Pick)",
        tagline: "Deconstruct Top-Selling TikTok Videos into Localized Ad Scripts in 1 Click",
        description: "TikTok Shop sellers struggle with creative fatigue. By analyzing trending product videos with multimodal LLMs, this tool extracts the 3-second visual hook, pain-point pitch, and CTA, then rewrites 10 localized scripts ready for AI voiceover.",
        categoryLabel: "Cross-Border & Trade",
        statusLabel: "Toolify Growth Pick",
        modelUsed: "Gemini 3.1 Flash (Multimodal Video) + Claude Sonnet 4.6",
        monthlyCost: "$29\u2013$99/mo SaaS or Affiliate Commissions \xB7 ~$0.01/video (90% Margin)",
        badge: "TikTok Seller Must-Have",
        techStack: ["Short-Video Hooks", "Multimodal LLM", "Seller Distribution", "Nuxt / FastAPI", "TTS API"],
        highlights: [
          "[How It Makes Money] Charge sellers $29\u2013$99/mo for viral hook analysis & script generation, or run faceless affiliate accounts for 15%\u201330% commission",
          "[Required Capabilities] Short-form video conversion psychology, cross-border product trends, and low-cost multimodal video prompting",
          "[How to Operate] Ingest trending TikTok product clips \u2192 extract hook/body/CTA structure via Gemini Flash \u2192 output localized scripts + voiceovers"
        ]
      },
      "ja": {
        name: "TikTok Shop\u58F2\u308C\u7B4B\u52D5\u753B\u89E3\u6790\uFF06\u591A\u8A00\u8A9E\u53F0\u672C\u30AF\u30ED\u30FC\u30F3AI (Toolify\u6025\u6210\u9577\u30E2\u30C7\u30EB)",
        tagline: "\u30D0\u30BA\u3063\u3066\u3044\u308B\u7269\u8CA9\u52D5\u753B\u306E\u300C\u5192\u982D3\u79D2\u30D5\u30C3\u30AF\u300D\u3092\u5206\u89E3\u3057\u3001\u591A\u8A00\u8A9E\u30B7\u30E7\u30FC\u30C8\u52D5\u753B\u53F0\u672C\u3092\u91CF\u7523",
        description: "TikTok Shop\u3084\u30EA\u30FC\u30EB\u52D5\u753B\u3067\u58F2\u308C\u3066\u3044\u308B\u5546\u54C1\u52D5\u753B\u3092\u30DE\u30EB\u30C1\u30E2\u30FC\u30C0\u30EBAI\u3067\u89E3\u6790\u3002\u300C\u5192\u982D3\u79D2\u306E\u8996\u899A\u30D5\u30C3\u30AF\uFF0B\u60A9\u307F\u8A34\u6C42\uFF0BCTA\u300D\u3092\u62BD\u51FA\u3057\u3001\u82F1\u8A9E\u30FB\u6771\u5357\u30A2\u30B8\u30A2\u30FB\u65E5\u672C\u8A9E\u5411\u3051\u306E\u30CA\u30EC\u30FC\u30B7\u30E7\u30F3\u53F0\u672C\u3068AI\u97F3\u58F0\u3092\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u3067\u751F\u6210\u3057\u307E\u3059\u3002",
        categoryLabel: "\u8D8A\u5883EC\u30FB\u8CBF\u6613",
        statusLabel: "Toolify\u6210\u9577\u30E2\u30C7\u30EB",
        modelUsed: "Gemini 3.1 Flash\uFF08\u52D5\u753B\u30DE\u30EB\u30C1\u30E2\u30FC\u30C0\u30EB\u89E3\u6790\uFF09+ Claude Sonnet 4.6",
        monthlyCost: "\u6708\u984D$29\u301C$99\u30B5\u30D6\u30B9\u30AF \xB7 \u52D5\u753B1\u672C\u89E3\u6790\u539F\u4FA1 \u7D041.5\u5186\uFF08\u7C97\u522990%\uFF09",
        badge: "SNS\u7269\u8CA9\u306E\u5FC5\u9808\u6B66\u5668",
        techStack: ["\u30B7\u30E7\u30FC\u30C8\u52D5\u753B\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0", "\u30DE\u30EB\u30C1\u30E2\u30FC\u30C0\u30EBAI", "\u8D8A\u5883\u30BB\u30E9\u30FC\u96C6\u5BA2", "Nuxt / FastAPI", "TTS\u97F3\u58F0\u5408\u6210"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u8D8A\u5883\u30BB\u30E9\u30FC\u3084\u30A2\u30D5\u30A3\u30EA\u30A8\u30A4\u30BF\u30FC\u5411\u3051\u306B\u6708\u984D$29\u301C$99\u3067\u63D0\u4F9B\u3001\u307E\u305F\u306F\u81EA\u793E\u306E\u30B7\u30E7\u30FC\u30C8\u52D5\u753B\u30A2\u30D5\u30A3\u30EA\u30A8\u30A4\u30C8\u306715\u301C30%\u306E\u5831\u916C\u3092\u7372\u5F97",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u30B7\u30E7\u30FC\u30C8\u52D5\u753B\u306E\u96E2\u8131\u9632\u6B62\u30D5\u30C3\u30AF\u8A2D\u8A08\u3001\u58F2\u308C\u7B4B\u30C8\u30EC\u30F3\u30C9\u5206\u6790\u3001Gemini\u52D5\u753B\u89E3\u6790API\u306E\u6D3B\u7528",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u6025\u4E0A\u6607\u5546\u54C1\u52D5\u753B\u3092\u53D6\u5F97\u2192Gemini Flash\u3067\u30AB\u30C3\u30C8\u5272\u308A\u3068\u53F0\u8A5E\u69CB\u9020\u3092\u62BD\u51FA\u2192\u591A\u8A00\u8A9E\u30B9\u30AF\u30EA\u30D7\u30C8\u3068AI\u97F3\u58F0\u3092\u4E00\u62EC\u51FA\u529B"
        ]
      },
      "ko": {
        name: "TikTok Shop \uAE09\uC0C1\uC2B9 \uC0C1\uD488 \uBD84\uC11D \uBC0F \uC20F\uD3FC \uB300\uBCF8 \uD074\uB85C\uB2DD AI (Toolify \uADF8\uB85C\uC2A4 \uD53D)",
        tagline: "\uD130\uC9C0\uB294 \uD2F1\uD1A1 \uC1FC\uD551 \uC601\uC0C1\uC758 \uCD08\uBC18 3\uCD08 \uD6C5(Hook)\uC744 \uBD84\uD574\uD574 \uB2E4\uAD6D\uC5B4 \uC138\uC77C\uC988 \uB300\uBCF8\uC73C\uB85C \uBCF5\uC81C",
        description: "TikTok Shop\uACFC \uB9B4\uC2A4 \uCEE4\uBA38\uC2A4 \uC140\uB7EC\uB97C \uC704\uD574 \uB9E4\uCD9C\uC774 \uAE09\uC99D\uD55C \uC20F\uD3FC \uC601\uC0C1\uC744 \uBA40\uD2F0\uBAA8\uB2EC AI\uB85C \uBD84\uC11D\uD569\uB2C8\uB2E4. \uCD08\uBC18 3\uCD08 \uC2DC\uC120 \uAC15\uD0C8 \uD6C5, \uD398\uC778\uD3EC\uC778\uD2B8 \uC790\uADF9 \uBA58\uD2B8, \uAD6C\uB9E4 \uC720\uB3C4(CTA) \uAD6C\uC870\uB97C \uCD94\uCD9C\uD574 10\uAC1C \uAD6D\uC5B4 \uB354\uBE59 \uB300\uBCF8\uC73C\uB85C \uC989\uC2DC \uBCC0\uD658\uD569\uB2C8\uB2E4.",
        categoryLabel: "\uD06C\uB85C\uC2A4\uBCF4\uB354\xB7\uBB34\uC5ED",
        statusLabel: "Toolify \uADF8\uB85C\uC2A4 \uBAA8\uB378",
        modelUsed: "Gemini 3.1 Flash (\uBE44\uB514\uC624 \uBA40\uD2F0\uBAA8\uB2EC) + Claude Sonnet 4.6",
        monthlyCost: "\uC6D4 $29~$99 \uAD6C\uB3C5 \uB610\uB294 \uC81C\uD734 \uCEE4\uBBF8\uC158 \xB7 \uC601\uC0C1\uB2F9 \uC6D0\uAC00 $0.01 (\uB9C8\uC9C4\uC728 90%)",
        badge: "\uD2F1\uD1A1 \uCEE4\uBA38\uC2A4 \uD544\uC218\uD15C",
        techStack: ["\uC20F\uD3FC \uC804\uD658 \uC2EC\uB9AC\uD559", "\uBA40\uD2F0\uBAA8\uB2EC \uBE44\uB514\uC624 AI", "\uC140\uB7EC \uCEE4\uBBA4\uB2C8\uD2F0 \uB9C8\uCF00\uD305", "Nuxt / FastAPI", "TTS API"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uC140\uB7EC\xB7\uD06C\uB9AC\uC5D0\uC774\uD130 \uB300\uC0C1 \uC6D4 $29~$99 \uAD6C\uB3C5 \uACFC\uAE08, \uB610\uB294 \uC9C1\uC811 \uD2F1\uD1A1 \uC5B4\uD544\uB9AC\uC5D0\uC774\uD2B8 \uCC44\uB110\uC744 \uC6B4\uC601\uD574 15%~30% \uD310\uB9E4 \uC218\uC218\uB8CC \uC218\uCDE8",
          "[\uD544\uC694 \uC5ED\uB7C9] \uC20F\uD3FC \uCD08\uBC18 3\uCD08 \uD6C4\uD0B9 \uACF5\uC2DD \uC774\uD574, \uAE00\uB85C\uBC8C \uD788\uD2B8 \uC0C1\uD488 \uD2B8\uB80C\uB4DC \uD30C\uC545, \uC800\uBE44\uC6A9 \uBA40\uD2F0\uBAA8\uB2EC \uD504\uB86C\uD504\uD2B8 \uC124\uACC4",
          "[\uC2E4\uD589 \uBC29\uBC95] \uC778\uAE30 \uCEE4\uBA38\uC2A4 \uC601\uC0C1 \uC218\uC9D1 \u2192 Gemini Flash\uB85C \uCEF7 \uAD6C\uC131\xB7\uB300\uC0AC \uCD94\uCD9C \u2192 \uD604\uC9C0\uC5B4 \uB300\uBCF8 \uBC0F AI \uBCF4\uC774\uC2A4\uC624\uBC84 \uC790\uB3D9 \uC0DD\uC131"
        ]
      }
    },
    order: 16,
    hidden: false
  },
  {
    id: "pdf-invoice-b2b",
    name: "\u5916\u8D38\u62A5\u5173\u5355\u4E0E\u5546\u4E1A\u53D1\u7968 AI \u7ED3\u6784\u5316\u63D0\u53D6\u5668 (Toolify B2B \u6548\u7387\u7206\u6B3E)",
    tagline: "\u5E2E\u8D27\u4EE3\u3001\u62A5\u5173\u884C\u4E0E\u5916\u8D38\u8D22\u52A1\u628A\u6742\u4E71 PDF \u88C5\u7BB1\u5355/\u53D1\u7968\u4E00\u952E\u8F6C\u4E3A\u6807\u51C6 ERP Excel",
    description: "\u5916\u8D38\u4E0E\u56FD\u9645\u7269\u6D41\u884C\u4E1A\u6BCF\u5929\u6709\u6D77\u91CF\u683C\u5F0F\u4E94\u82B1\u516B\u95E8\u7684\u82F1\u6587/\u4FC4\u6587/\u897F\u6587 PDF \u5546\u4E1A\u53D1\u7968\uFF08Commercial Invoice\uFF09\u3001\u88C5\u7BB1\u5355\uFF08Packing List\uFF09\u548C\u63D0\u5355\uFF08B/L\uFF09\uFF0C\u4EBA\u5DE5\u5F55\u5165\u6D77\u5173\u7CFB\u7EDF\u6781\u6613\u51FA\u9519\u7F5A\u6B3E\u3002\u7528\u89C6\u89C9\u5927\u6A21\u578B + \u6821\u9A8C\u89C4\u5219\u628A\u975E\u6807 PDF 10 \u79D2\u5185\u8F6C\u6210 100% \u5BF9\u9F50\u7684\u7533\u62A5 Excel\uFF0CB \u7AEF\u5BA2\u6237\u4E00\u65E6\u7528\u4E0A\u5C31\u6781\u96BE\u6D41\u5931\u3002",
    category: "saas",
    categoryLabel: "\u5546\u4E1A\u53D8\u73B0 SaaS",
    status: "active",
    statusLabel: "\u9AD8\u7559\u5B58 Micro-SaaS",
    modelUsed: "Gemini 3.1 Flash / Qwen-VL\uFF08\u591A\u8BED\u79CD\u7968\u636E\u89C6\u89C9 OCR\uFF09+ DeepSeek-V3\uFF08HS \u7F16\u7801\u6838\u9A8C\uFF09",
    monthlyCost: "\u6309\u9875\u6570\u5305\u6216\u4F01\u4E1A\u6708\u5EA6\u8BA2\u9605 ($39~$149/mo) \xB7 \u5355\u9875\u89E3\u6790\u6210\u672C \xA50.02\uFF08\u6BDB\u5229 94%\uFF09",
    techStack: ["\u5916\u8D38\u5355\u8BC1\u89C4\u8303", "\u591A\u6A21\u6001\u7ED3\u6784\u5316 JSON", "Excel \u6A21\u677F\u5BFC\u51FA", "TypeScript / Go", "AINode"],
    author: "Toolify \u7CBE\u9009\u62C6\u89E3",
    authorUrl: "https://www.toolify.ai",
    badge: "\u8D85\u9AD8\u7EED\u8D39\u7387",
    badgeTone: "positive",
    icon: "ph:file-xls-bold",
    url: "https://www.toolify.ai",
    storyUrl: "/blog/b2b-invoice-extractor-saas-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u514D\u8D39\u4F53\u9A8C 10 \u9875\uFF0C\u6B63\u5F0F\u7248\u6309 $39/\u6708\uFF08500 \u9875\uFF09\u6216 $149/\u6708\uFF08\u56E2\u961F\u65E0\u9650\u7248\uFF09\u6536\u8D39\uFF0CB2B \u5BA2\u6237\u6708\u7559\u5B58\u7387\u8D85 92%",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u61C2\u7279\u5B9A\u5782\u76F4\u884C\u4E1A\u7684\u8868\u683C\u5B57\u6BB5\u6807\u51C6\uFF08\u5982\u5916\u8D38\u62A5\u5173\u5355\u3001\u8DE8\u5883\u9000\u7A0E\u5355\u3001\u533B\u7597/\u6CD5\u5F8B\u8D26\u5355\uFF09\u4E0E\u81EA\u52A8\u91D1\u989D\u4EA4\u53C9\u6821\u9A8C",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u6536\u96C6 20 \u4EFD\u6700\u5934\u75BC\u7684\u771F\u5B9E\u884C\u4E1A\u590D\u6742 PDF \u2192 \u7528\u7ED3\u6784\u5316 JSON Schema \u9501\u6B7B\u8F93\u51FA\u5B57\u6BB5\u4E0E\u81EA\u52A8\u6C42\u548C\u6821\u9A8C \u2192 \u8FDB\u8D27\u4EE3/\u5916\u8D38\u8D22\u52A1\u7FA4\u63A8\u5E7F"
    ],
    matchProfile: {
      roles: { developer: 92, product: 90, trade: 92, growth: 72, designer: 65 },
      dimensions: { market: 88, delivery: 85, distribution: 76, leverage: 94, resilience: 84 },
      difficulty: "easy",
      revenueModel: "B2B \u6309\u9875\u6570/\u6309\u6708\u8BA2\u9605 ($39-$149/mo)\uFF0C\u8D85\u9AD8\u7559\u5B58",
      monthlyRevenueEstimate: "$3,000 - $22,000 / mo"
    },
    sourceMeta: {
      source: "toolify",
      sourceUrl: "https://www.toolify.ai",
      monthlyVisits: "240K/mo",
      pricingSummary: "$39 - $149 / mo",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "\u5916\u8CBF\u5831\u95DC\u55AE\u8207\u5546\u696D\u767C\u7968 AI \u7D50\u69CB\u5316\u63D0\u53D6\u5668 (Toolify B2B \u6548\u7387\u7206\u6B3E)",
        tagline: "\u5E6B\u8CA8\u4EE3\u3001\u5831\u95DC\u884C\u8207\u5916\u8CBF\u8CA1\u52D9\u628A\u96DC\u4E82 PDF \u88DD\u7BB1\u55AE/\u767C\u7968\u4E00\u9375\u8F49\u70BA\u6A19\u6E96 ERP Excel",
        description: "\u5916\u8CBF\u8207\u570B\u969B\u7269\u6D41\u884C\u696D\u6BCF\u5929\u6709\u6D77\u91CF\u683C\u5F0F\u4E94\u82B1\u516B\u9580\u7684\u591A\u8A9E\u7A2E PDF \u5546\u696D\u767C\u7968\u3001\u88DD\u7BB1\u55AE\u548C\u63D0\u55AE\uFF0C\u4EBA\u5DE5\u9304\u5165\u6975\u6613\u51FA\u932F\u3002\u7528\u8996\u89BA\u5927\u6A21\u578B + \u91D1\u984D\u4EA4\u53C9\u6821\u9A57\u898F\u5247\u628A\u975E\u6A19 PDF 10 \u79D2\u5167\u8F49\u6210\u6A19\u6E96\u7533\u5831 Excel\u3002",
        categoryLabel: "\u5546\u696D\u8B8A\u73FE SaaS",
        statusLabel: "\u9AD8\u7559\u5B58 Micro-SaaS",
        monthlyCost: "\u6309\u9801\u6578\u5305\u6216\u4F01\u696D\u6708\u5EA6\u8A02\u95B1 ($39~$149/mo) \xB7 \u55AE\u9801\u89E3\u6790\u6210\u672C \xA50.02\uFF08\u6BDB\u5229 94%\uFF09",
        badge: "\u8D85\u9AD8\u7E8C\u8CBB\u7387",
        techStack: ["\u5916\u8CBF\u55AE\u8B49\u898F\u7BC4", "\u591A\u6A21\u614B\u7D50\u69CB\u5316 JSON", "Excel \u6A21\u677F\u5C0E\u51FA", "TypeScript / Go", "AINode"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u514D\u8CBB\u9AD4\u9A57 10 \u9801\uFF0C\u6B63\u5F0F\u7248\u6309 $39/\u6708\u6216 $149/\u6708\u6536\u8CBB\uFF0CB2B \u5BA2\u6236\u6708\u7559\u5B58\u7387\u8D85 92%",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u61C2\u7279\u5B9A\u5782\u76F4\u884C\u696D\u7684\u8868\u683C\u5B57\u6BB5\u6A19\u6E96\uFF08\u5916\u8CBF\u5831\u95DC\u55AE\u3001\u9000\u7A05\u55AE\uFF09\u8207\u81EA\u52D5\u91D1\u984D\u4EA4\u53C9\u6821\u9A57",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u6536\u96C6 20 \u4EFD\u771F\u5BE6\u8907\u96DC PDF \u2192 \u7528 JSON Schema \u9396\u6B7B\u8F38\u51FA\u5B57\u6BB5\u8207\u81EA\u52D5\u6C42\u548C\u6821\u9A57 \u2192 \u9032\u8CA8\u4EE3/\u5916\u8CBF\u8CA1\u52D9\u7FA4\u63A8\u5EE3"
        ]
      },
      "en": {
        name: "AI Customs Declaration & B2B Invoice Extractor (Toolify B2B SaaS)",
        tagline: "Turn Messy Multilingual Packing Lists & Invoices into ERP-Ready Excel in 10s",
        description: "Freight forwarders, customs brokers, and export accountants manually type thousands of non-standard PDF invoices and bills of lading every week. Combining vision LLMs with strict math cross-checks creates a sticky B2B Micro-SaaS with 92%+ monthly retention.",
        categoryLabel: "Commercial SaaS",
        statusLabel: "High-Retention B2B",
        modelUsed: "Gemini 3.1 Flash Vision + DeepSeek-V3 (HS Code Validation)",
        monthlyCost: "$39\u2013$149/mo B2B Subscriptions \xB7 ~$0.003/page (94% Margin)",
        badge: "92%+ Retention",
        techStack: ["Trade Document Schema", "Vision JSON Output", "Excel ERP Export", "TypeScript / Go", "AINode"],
        highlights: [
          "[How It Makes Money] 10 free pages, then $39/mo (500 pages) to $149/mo for freight & accounting teams with 94% gross margin",
          "[Required Capabilities] Deep familiarity with industry-specific ERP templates (customs HS codes, line-item totals) and deterministic math validation",
          "[How to Operate] Gather 20 messy real-world PDFs \u2192 enforce strict JSON schema + row-sum verification \u2192 distribute in logistics & trade communities"
        ]
      },
      "ja": {
        name: "\u8CBF\u6613\u901A\u95A2\u66F8\u985E\u30FB\u30A4\u30F3\u30DC\u30A4\u30B9AI\u69CB\u9020\u5316\u30C4\u30FC\u30EB (Toolify\u9AD8\u7D99\u7D9AB2B\u30E2\u30C7\u30EB)",
        tagline: "\u30D0\u30E9\u30D0\u30E9\u306APDF\u30A4\u30F3\u30DC\u30A4\u30B9\u30FB\u30D1\u30C3\u30AD\u30F3\u30B0\u30EA\u30B9\u30C8\u309210\u79D2\u3067ERP\u7528Excel\u3078\u81EA\u52D5\u5909\u63DB",
        description: "\u30D5\u30A9\u30EF\u30FC\u30C0\u30FC\u3001\u901A\u95A2\u696D\u8005\u3001\u8CBF\u6613\u4E8B\u52D9\u304C\u6BCE\u65E5\u624B\u5165\u529B\u3057\u3066\u3044\u308B\u591A\u8A00\u8A9E\u306E\u5546\u696D\u9001\u308A\u72B6\uFF08Invoice\uFF09\u3084\u68B1\u5305\u660E\u7D30\u66F8\uFF08Packing List\uFF09\u3001\u8239\u8377\u8A3C\u5238\uFF08B/L\uFF09\u3092\u3001\u30D3\u30B8\u30E7\u30F3LLM\uFF0B\u91D1\u984D\u81EA\u52D5\u691C\u7B97\u30ED\u30B8\u30C3\u30AF\u3067100%\u5B9A\u578B\u306EExcel\u306B\u5909\u63DB\u3002\u4E00\u5EA6\u5C0E\u5165\u3055\u308C\u308B\u3068\u89E3\u7D04\u3055\u308C\u306B\u304F\u3044\u9AD8\u7D99\u7D9A\u7387SaaS\u3067\u3059\u3002",
        categoryLabel: "\u53CE\u76CA\u5316 Micro-SaaS",
        statusLabel: "\u9AD8\u7D99\u7D9AB2B SaaS",
        modelUsed: "Gemini 3.1 Flash Vision + DeepSeek-V3\uFF08HS\u30B3\u30FC\u30C9\u691C\u8A3C\uFF09",
        monthlyCost: "\u6708\u984D$39\u301C$149\u306E\u6CD5\u4EBA\u30B5\u30D6\u30B9\u30AF \xB7 1\u30DA\u30FC\u30B8\u539F\u4FA1 \u7D040.5\u5186\uFF08\u7C97\u522994%\uFF09",
        badge: "\u7D99\u7D9A\u738792%\u8D85",
        techStack: ["\u8CBF\u6613\u5B9F\u52D9\u5E33\u7968\u77E5\u8B58", "\u69CB\u9020\u5316JSON\u62BD\u51FA", "Excel\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u51FA\u529B", "TypeScript / Go", "AINode"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u301110\u30DA\u30FC\u30B8\u7121\u6599\u4F53\u9A13\u5F8C\u3001\u6708\u984D$39\uFF08500\u679A\uFF09\u301C$149\uFF08\u6CD5\u4EBA\u30D7\u30E9\u30F3\uFF09\u3067\u8AB2\u91D1\u3002\u696D\u52D9\u76F4\u7D50\u306E\u305F\u3081\u6708\u6B21\u7D99\u7D9A\u738792%\u4EE5\u4E0A",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u7279\u5B9A\u696D\u754C\u306E\u5E33\u7968\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u7406\u89E3\u3068\u3001\u660E\u7D30\u884C\u306E\u5408\u8A08\u91D1\u984D\u3092\u81EA\u52D5\u691C\u7B97\u3059\u308B\u30A8\u30E9\u30FC\u9632\u6B62\u30ED\u30B8\u30C3\u30AF",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u73FE\u5834\u306E\u8907\u96D1\u306APDF\u309220\uAC74\u53CE\u96C6\u2192JSON\u30B9\u30AD\u30FC\u30DE\u3068\u691C\u7B97\u30EB\u30FC\u30EB\u3092\u5B9F\u88C5\u2192\u8CBF\u6613\u4E8B\u52D9\u30FB\u7269\u6D41\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3078\u5C55\u958B"
        ]
      },
      "ko": {
        name: "\uD574\uC678\uBB34\uC5ED \uD1B5\uAD00\uC11C\uB958\xB7\uC778\uBCF4\uC774\uC2A4 AI \uAD6C\uC870\uD654 \uCD94\uCD9C\uAE30 (Toolify B2B \uACE0\uB9AC\uD150\uC158 \uBAA8\uB378)",
        tagline: "\uBCF5\uC7A1\uD55C \uB2E4\uAD6D\uC5B4 PDF \uC0C1\uC5C5\uC1A1\uC7A5\xB7\uD328\uD0B9\uB9AC\uC2A4\uD2B8\uB97C 10\uCD08 \uB9CC\uC5D0 ERP\uC6A9 \uD45C\uC900 \uC5D1\uC140\uB85C \uBCC0\uD658",
        description: "\uD3EC\uC6CC\uB354, \uAD00\uC138\uC0AC, \uBB34\uC5ED \uACBD\uB9AC\uD300\uC774 \uB9E4\uC77C \uC218\uC791\uC5C5\uC73C\uB85C \uC785\uB825\uD558\uB294 \uBE44\uC815\uD615 PDF \uC778\uBCF4\uC774\uC2A4(Invoice), \uD328\uD0B9\uB9AC\uC2A4\uD2B8(P/L), \uC120\uD558\uC99D\uAD8C(B/L)\uC744 \uBE44\uC804 AI\uC640 \uAE08\uC561 \uAD50\uCC28\uAC80\uC99D \uB85C\uC9C1\uC73C\uB85C \uC644\uBCBD\uD55C \uC5D1\uC140 \uD30C\uC77C\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4. \uD55C \uBC88 \uB3C4\uC785\uD558\uBA74 \uC774\uD0C8\uD558\uC9C0 \uC54A\uB294 \uACE0\uB9AC\uD150\uC158 B2B SaaS\uC785\uB2C8\uB2E4.",
        categoryLabel: "\uC218\uC775\uD615 Micro-SaaS",
        statusLabel: "\uACE0\uB9AC\uD150\uC158 B2B SaaS",
        modelUsed: "Gemini 3.1 Flash Vision + DeepSeek-V3 (HS\uCF54\uB4DC \uAC80\uC99D)",
        monthlyCost: "\uC6D4 $39~$149 B2B \uAD6C\uB3C5 \xB7 \uD398\uC774\uC9C0\uB2F9 \uC6D0\uAC00 $0.003 (\uB9C8\uC9C4\uC728 94%)",
        badge: "\uC6D4 \uC720\uC9C0\uC728 92%+",
        techStack: ["\uBB34\uC5ED \uC120\uC801\uC11C\uB958 \uADDC\uACA9", "\uBE44\uC804 JSON \uCD94\uCD9C", "ERP \uC5D1\uC140 \uBCC0\uD658", "TypeScript / Go", "AINode"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] 10\uD398\uC774\uC9C0 \uBB34\uB8CC \uCCB4\uD5D8 \uD6C4 \uC6D4 $39(500\uD398\uC774\uC9C0)~$149(\uD300 \uD50C\uB79C) \uAD6C\uB3C5 \uACFC\uAE08, B2B \uD2B9\uC131\uC0C1 92% \uC774\uC0C1\uC758 \uB192\uC740 \uC6D4 \uC720\uC9C0\uC728",
          "[\uD544\uC694 \uC5ED\uB7C9] \uD2B9\uC815 \uC0B0\uC5C5\uAD70(\uBB34\uC5ED \uD1B5\uAD00, \uC138\uBB34, \uBB3C\uB958)\uC758 \uD45C\uC900 \uC5D1\uC140 \uC591\uC2DD \uC774\uD574 \uBC0F \uD488\uBAA9 \uD569\uACC4 \uC790\uB3D9 \uAC80\uC99D \uB85C\uC9C1 \uAD6C\uD604",
          "[\uC2E4\uD589 \uBC29\uBC95] \uC2E4\uC81C \uD604\uC7A5\uC758 \uAE4C\uB2E4\uB85C\uC6B4 PDF \uC0D8\uD50C 20\uAC1C \uD655\uBCF4 \u2192 JSON \uC2A4\uD0A4\uB9C8 \uBC0F \uD569\uACC4 \uAC80\uC99D \uAD6C\uD604 \u2192 \uD3EC\uC6CC\uB529\xB7\uBB34\uC5ED \uC2E4\uBB34\uC790 \uCEE4\uBBA4\uB2C8\uD2F0 \uBC30\uD3EC"
        ]
      }
    },
    order: 18,
    hidden: false
  },
  {
    id: "hoxi-desktop",
    name: "Hoxi Desktop",
    tagline: "macOS / Windows \u539F\u751F\u591A Agent \u5E76\u884C\u7814\u53D1\u5DE5\u4F5C\u53F0",
    description: "\u4E00\u4EBA\u516C\u53F8\u5199\u4EE3\u7801\u6539\u9700\u6C42\u65F6\uFF0C\u5355\u7A97\u53E3\u4E32\u884C\u7B49\u5F85 AI \u592A\u6162\u4E14\u5BB9\u6613\u6539\u4E71\u5206\u652F\u3002\u628A Git Worktree \u7269\u7406\u9694\u79BB\u3001\u8DE8\u4F1A\u8BDD\u672C\u5730\u8BB0\u5FC6\u4E0E\u624B\u673A\u79BB\u5E2D\u5BA1\u6279\u88C5\u8FDB\u539F\u751F\u684C\u9762\u7AEF\uFF0C\u7528 100% \u5F00\u6E90\u7B56\u7565\u5EFA\u7ACB\u6280\u672F\u4FE1\u4EFB\uFF0C\u6C89\u6DC0\u9AD8\u9891\u7EC8\u7AEF\u5165\u53E3\u3002",
    category: "devtools",
    categoryLabel: "\u5F00\u53D1\u6548\u7387\u4E0E\u5E95\u5EA7",
    status: "active",
    statusLabel: "\u5F00\u6E90\u5F15\u6D41",
    modelUsed: "Claude Code / Codex / Gemini CLI \u591A\u5F15\u64CE\u63A5\u529B",
    monthlyCost: "\u8F6F\u4EF6\u514D\u8D39\u5F00\u6E90\u5F15\u6D41 \xB7 \u5E26\u52A8\u4E91\u7AEF\u7B97\u529B\u79EF\u5206\u4E0E\u5DE5\u5177\u8C03\u7528\u6D88\u8D39",
    techStack: ["\u539F\u751F\u684C\u9762\u67B6\u6784", "Agent \u5DE5\u4F5C\u6D41\u8BBE\u8BA1", "Git Worktree", "Go + Wails v2", "SolidJS"],
    author: "\u53EF\u4E50 (Coller)",
    badge: "Flagship",
    badgeTone: "info",
    icon: "ph:terminal-window-bold",
    url: "https://hoxi.ai/download",
    githubUrl: "https://github.com/hoxiai/hoxi",
    storyUrl: "/blog/hoxi-desktop-worktree-agent-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u684C\u9762\u7AEF\u672C\u4F53\u5F00\u6E90\u514D\u8D39\u964D\u4F4E\u83B7\u5BA2\u95E8\u69DB\uFF0C\u901A\u8FC7\u5185\u7F6E\u6A21\u578B\u4E13\u7EBF\u3001\u6309\u6B21\u8BA1\u8D39 Agent \u5DE5\u5177\u4E0E\u6280\u80FD\u5E02\u573A\u53D8\u73B0",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u8DE8\u5E73\u53F0\u684C\u9762\u7AEF\u5DE5\u7A0B\u80FD\u529B\u3001\u591A CLI \u8FDB\u7A0B\u76D1\u7BA1\u4E0E\u5F00\u53D1\u8005\u9AD8\u9891\u75DB\u70B9\u6D1E\u5BDF",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u53D1\u5E03\u591A\u5E73\u53F0\u5B89\u88C5\u5305\u4E0E\u5F00\u6E90\u4ED3\u5E93 \u2192 \u7528\u6237\u626B\u7801\u7ED1\u5B9A Hoxi \u8D26\u53F7 \u2192 \u4E00\u952E\u5B89\u88C5\u5B98\u65B9 Skill \u4E0E\u8C03\u7528\u7F51\u5173\u7B97\u529B"
    ],
    matchProfile: {
      roles: { developer: 98, product: 82, designer: 70, growth: 68, trade: 60 },
      dimensions: { market: 80, delivery: 96, distribution: 76, leverage: 92, resilience: 85 },
      difficulty: "hard",
      revenueModel: "\u5F00\u6E90\u684C\u9762\u7AEF\u5F15\u6D41 + \u4E91\u7AEF\u7B97\u529B\u7F51\u5173\u4E0E\u6280\u80FD\u8BA2\u9605",
      monthlyRevenueEstimate: "$3,000 - $20,000 / mo"
    },
    sourceMeta: {
      source: "official",
      sourceUrl: "https://hoxi.ai/download",
      monthlyVisits: "48K/mo",
      pricingSummary: "Free Open Source + Cloud Credits",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "Hoxi Desktop",
        tagline: "macOS / Windows \u539F\u751F\u591A Agent \u4E26\u884C\u7814\u767C\u5DE5\u4F5C\u53F0",
        description: "\u4E00\u4EBA\u516C\u53F8\u5BEB\u4EE3\u78BC\u6539\u9700\u6C42\u6642\uFF0C\u55AE\u7A97\u53E3\u4E32\u884C\u7B49\u5F85 AI \u592A\u6162\u4E14\u5BB9\u6613\u6539\u4E82\u5206\u652F\u3002\u628A Git Worktree \u7269\u7406\u9694\u96E2\u3001\u8DE8\u6703\u8A71\u672C\u5730\u8A18\u61B6\u8207\u624B\u6A5F\u96E2\u5E2D\u5BE9\u6279\u88DD\u9032\u539F\u751F\u684C\u9762\u7AEF\uFF0C\u7528 100% \u958B\u6E90\u7B56\u7565\u5EFA\u7ACB\u6280\u8853\u4FE1\u4EFB\u3002",
        categoryLabel: "\u958B\u767C\u6548\u7387\u8207\u5E95\u5EA7",
        statusLabel: "\u958B\u6E90\u5F15\u6D41",
        monthlyCost: "\u8EDF\u4EF6\u514D\u8CBB\u958B\u6E90\u5F15\u6D41 \xB7 \u5E36\u52D5\u96F2\u7AEF\u7B97\u529B\u7A4D\u5206\u8207\u5DE5\u5177\u8ABF\u7528\u6D88\u8CBB",
        badge: "Flagship",
        techStack: ["\u539F\u751F\u684C\u9762\u67B6\u69CB", "Agent \u5DE5\u4F5C\u6D41\u8A2D\u8A08", "Git Worktree", "Go + Wails v2", "SolidJS"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u684C\u9762\u7AEF\u672C\u9AD4\u958B\u6E90\u514D\u8CBB\u964D\u4F4E\u7372\u5BA2\u9580\u6ABB\uFF0C\u901A\u904E\u5167\u7F6E\u6A21\u578B\u5C08\u7DDA\u3001\u6309\u6B21\u8A08\u8CBB Agent \u5DE5\u5177\u8207\u6280\u80FD\u5E02\u5834\u8B8A\u73FE",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u8DE8\u5E73\u53F0\u684C\u9762\u7AEF\u5DE5\u7A0B\u80FD\u529B\u3001\u591A CLI \u9032\u7A0B\u76E3\u7BA1\u8207\u958B\u767C\u8005\u9AD8\u983B\u75DB\u9EDE\u6D1E\u5BDF",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u767C\u4F48\u591A\u5E73\u53F0\u5B89\u88DD\u5305\u8207\u958B\u6E90\u5009\u5EAB \u2192 \u7528\u6236\u6383\u78BC\u7D81\u5B9A Hoxi \u8CEC\u865F \u2192 \u4E00\u9375\u5B89\u88DD\u5B98\u65B9 Skill \u8207\u8ABF\u7528\u7DB2\u95DC\u7B97\u529B"
        ]
      },
      "en": {
        name: "Hoxi Desktop",
        tagline: "Native Multi-Agent Parallel Coding Workspace",
        description: "Serial AI prompting bottlenecks solo developers. Hoxi isolates parallel agents in Git worktrees with persistent local memory and mobile remote approvals \u2014 100% open source to build trust and anchor daily developer workflows.",
        categoryLabel: "DevTools & Engine",
        statusLabel: "Open Source Funnel",
        modelUsed: "Claude Code / Codex / Gemini CLI Handoff",
        monthlyCost: "Free Open-Source Client \xB7 Monetized via Cloud Compute & APIs",
        badge: "Flagship",
        techStack: ["Native Desktop", "Agentic Workflow", "Git Worktree", "Go + Wails v2", "SolidJS"],
        highlights: [
          "[How It Makes Money] Free open-source desktop app lowers acquisition friction and drives metered cloud API & gateway usage",
          "[Required Capabilities] Native desktop engineering, multi-CLI process supervision, and developer UX polish",
          "[How to Operate] Ship cross-platform installers \u2192 pair user accounts \u2192 1-click install official Skills & gateways"
        ]
      },
      "ja": {
        name: "Hoxi Desktop",
        tagline: "macOS / Windows\u5BFE\u5FDC \u30CD\u30A4\u30C6\u30A3\u30D6\u30FB\u30DE\u30EB\u30C1\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u4E26\u5217\u958B\u767A\u30EF\u30FC\u30AF\u30B9\u30DA\u30FC\u30B9",
        description: "Git Worktree\u306B\u3088\u308B\u30D6\u30E9\u30F3\u30C1\u7269\u7406\u9694\u96E2\u3001\u30ED\u30FC\u30AB\u30EB\u9577\u671F\u30E1\u30E2\u30EA\u3001\u30B9\u30DE\u30DB\u304B\u3089\u306E\u30EA\u30E2\u30FC\u30C8\u627F\u8A8D\u3092\u7D71\u5408\u3057\u305F\u30CD\u30A4\u30C6\u30A3\u30D6\u30A2\u30D7\u30EA\u3002\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3092\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u3067\u7121\u6599\u516C\u958B\u3057\u3066\u958B\u767A\u8005\u306E\u4FE1\u983C\u3092\u7372\u5F97\u3057\u3001\u30AF\u30E9\u30A6\u30C9API\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u6D88\u8CBB\u3067\u53CE\u76CA\u5316\u3057\u307E\u3059\u3002",
        categoryLabel: "\u958B\u767A\u30C4\u30FC\u30EB\u30FB\u57FA\u76E4",
        statusLabel: "OSS\u96C6\u5BA2\u30E2\u30C7\u30EB",
        modelUsed: "Claude Code / Codex / Gemini CLI \u4E26\u5217\u9023\u643A",
        monthlyCost: "OSS\u7121\u6599\u914D\u5E03\u3067\u96C6\u5BA2 \xB7 \u30AF\u30E9\u30A6\u30C9\u8A08\u7B97\u30AF\u30EC\u30B8\u30C3\u30C8\u6D88\u8CBB\u3067\u53CE\u76CA\u5316",
        badge: "Flagship",
        techStack: ["\u30CD\u30A4\u30C6\u30A3\u30D6\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7", "Agent\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC", "Git Worktree", "Go + Wails v2", "SolidJS"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u672C\u4F53\u3092\u7121\u6599\u516C\u958B\u3057\u3066\u5C0E\u5165\u969C\u58C1\u3092\u306A\u304F\u3057\u3001\u5185\u8535API\u30B2\u30FC\u30C8\u30A6\u30A7\u30A4\u3084\u516C\u5F0F\u30B9\u30AD\u30EB\u306E\u5F93\u91CF\u5229\u7528\u3067\u30DE\u30CD\u30BF\u30A4\u30BA",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u30AF\u30ED\u30B9\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u5B9F\u88C5\u529B\u3001\u8907\u6570CLI\u30D7\u30ED\u30BB\u30B9\u306E\u5236\u5FA1\u3001\u958B\u767A\u8005UX\u306E\u5FB9\u5E95\u7684\u306A\u78E8\u304D\u8FBC\u307F",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u30A4\u30F3\u30B9\u30C8\u30FC\u30E9\u30FC\u3068GitHub\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u516C\u958B\u2192QR\u30B3\u30FC\u30C9\u3067\u30A2\u30AB\u30A6\u30F3\u30C8\u9023\u643A\u2192\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u3067\u516C\u5F0F\u30B9\u30AD\u30EB\u3068API\u3092\u63A5\u7D9A"
        ]
      },
      "ko": {
        name: "Hoxi Desktop",
        tagline: "macOS / Windows \uB124\uC774\uD2F0\uBE0C \uBA40\uD2F0 \uC5D0\uC774\uC804\uD2B8 \uBCD1\uB82C \uAC1C\uBC1C \uC6CC\uD06C\uC2A4\uD398\uC774\uC2A4",
        description: "Git Worktree \uBB3C\uB9AC\uC801 \uACA9\uB9AC, \uC138\uC158 \uAC04 \uB85C\uCEEC \uBA54\uBAA8\uB9AC, \uBAA8\uBC14\uC77C \uC6D0\uACA9 \uC2B9\uC778\uC744 \uACB0\uD569\uD55C \uB124\uC774\uD2F0\uBE0C \uB370\uC2A4\uD06C\uD1B1 \uC571\uC785\uB2C8\uB2E4. 100% \uC624\uD508\uC18C\uC2A4 \uC804\uB7B5\uC73C\uB85C \uAC1C\uBC1C\uC790 \uC2E0\uB8B0\uB97C \uD655\uBCF4\uD558\uACE0 \uD074\uB77C\uC6B0\uB4DC \uC5F0\uC0B0 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uBC0F \uC2A4\uD0AC \uC0DD\uD0DC\uACC4\uB85C \uC218\uC775\uC744 \uCC3D\uCD9C\uD569\uB2C8\uB2E4.",
        categoryLabel: "\uAC1C\uBC1C \uB3C4\uAD6C\xB7\uAE30\uBC18",
        statusLabel: "\uC624\uD508\uC18C\uC2A4 \uBAA8\uAC1D",
        modelUsed: "Claude Code / Codex / Gemini CLI \uBA40\uD2F0 \uC5D4\uC9C4",
        monthlyCost: "\uD074\uB77C\uC774\uC5B8\uD2B8 \uBB34\uB8CC \uBC30\uD3EC \xB7 \uD074\uB77C\uC6B0\uB4DC \uC5F0\uC0B0 \uD06C\uB808\uB527 \uBC0F \uAC8C\uC774\uD2B8\uC6E8\uC774 \uACFC\uAE08",
        badge: "Flagship",
        techStack: ["\uB124\uC774\uD2F0\uBE0C \uB370\uC2A4\uD06C\uD1B1", "\uC5D0\uC774\uC804\uD2B8 \uC6CC\uD06C\uD50C\uB85C\uC6B0", "Git Worktree", "Go + Wails v2", "SolidJS"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uB370\uC2A4\uD06C\uD1B1 \uC571\uC744 \uBB34\uB8CC \uC624\uD508\uC18C\uC2A4\uB85C \uBC30\uD3EC\uD574 \uC9C4\uC785\uC7A5\uBCBD\uC744 \uB0AE\uCD94\uACE0, \uB0B4\uC7A5 \uBAA8\uB378 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uBC0F \uC5D0\uC774\uC804\uD2B8 \uC2A4\uD0AC \uD638\uCD9C\uB85C \uC218\uC775\uD654",
          "[\uD544\uC694 \uC5ED\uB7C9] \uD06C\uB85C\uC2A4\uD50C\uB7AB\uD3FC \uB370\uC2A4\uD06C\uD1B1 \uC5D4\uC9C0\uB2C8\uC5B4\uB9C1, \uBA40\uD2F0 CLI \uD504\uB85C\uC138\uC2A4 \uC81C\uC5B4 \uBC0F \uAC1C\uBC1C\uC790 UX \uC124\uACC4",
          "[\uC2E4\uD589 \uBC29\uBC95] \uBA40\uD2F0 \uD50C\uB7AB\uD3FC \uC124\uCE58 \uD30C\uC77C \uBC30\uD3EC \u2192 QR \uC2A4\uCE94\uC73C\uB85C \uACC4\uC815 \uC5F0\uB3D9 \u2192 \uC6D0\uD074\uB9AD \uACF5\uC2DD \uC2A4\uD0AC \uC7A5\uCC29 \uBC0F \uAC8C\uC774\uD2B8\uC6E8\uC774 \uD06C\uB808\uB527 \uC18C\uBE44"
        ]
      }
    },
    order: 20,
    hidden: false
  },
  {
    id: "video-dub-localization",
    name: "\u51FA\u6D77\u77ED\u5267\u4E0E\u4EA7\u54C1\u89C6\u9891 AI \u591A\u8BED\u79CD\u914D\u97F3\u53E3\u578B\u540C\u6B65 (Toolify \u97F3\u89C6\u9891\u7206\u6B3E)",
    tagline: "\u5E2E\u8DE8\u5883\u5356\u5BB6\u3001\u77ED\u5267\u51FA\u6D77\u56E2\u961F\u4E0E YouTuber \u628A\u4E2D\u6587\u89C6\u9891\u4E00\u952E\u8F6C\u6210 15 \u56FD\u5730\u9053\u53E3\u578B\u89C6\u9891",
    description: "\u56FD\u5185\u6D77\u91CF\u4F18\u8D28\u5E26\u8D27\u89C6\u9891\u3001\u77E5\u8BC6\u535A\u4E3B\u6559\u7A0B\u548C\u5FAE\u77ED\u5267\u60F3\u51FA\u6D77\u8D5A\u7F8E\u91D1\uFF0C\u6700\u5927\u7684\u95E8\u69DB\u662F\u8BF7\u6D77\u5916\u6BCD\u8BED\u914D\u97F3\u5458\u6210\u672C\u6781\u9AD8\uFF08$50~$200/\u5206\u949F\uFF09\u3002\u7ED3\u5408\u8BED\u97F3\u8BC6\u522B\u3001\u5927\u6A21\u578B\u672C\u571F\u4FDA\u8BED\u91CD\u5199\u3001\u97F3\u8272\u514B\u9686\u4E0E\u53E3\u578B\u540C\u6B65 API\uFF0C\u628A\u5355\u5206\u949F\u6210\u672C\u538B\u5230 \xA50.8\uFF0C\u5356 $29~$99/\u6708\u8BA2\u9605\u6781\u5176\u66B4\u5229\u3002",
    category: "saas",
    categoryLabel: "\u5546\u4E1A\u53D8\u73B0 SaaS",
    status: "active",
    statusLabel: "Toolify \u51FA\u6D77\u70ED\u95E8",
    modelUsed: "Whisper + DeepSeek-V3\uFF08\u672C\u571F\u5316\u53F0\u8BCD\u6DA6\u8272\uFF09+ \u97F3\u8272\u514B\u9686 TTS",
    monthlyCost: "\u6309\u5206\u949F\u70B9\u6570\u5305 ($29~$99/mo) \xB7 \u7B97\u529B\u6210\u672C\u7EA6 \xA50.8/\u5206\u949F\uFF08\u6BDB\u5229 82%\uFF09",
    techStack: ["\u591A\u8BED\u79CD\u672C\u571F\u5316\u6DA6\u8272", "\u97F3\u89C6\u9891\u6D41\u6C34\u7EBF", "\u521B\u4F5C\u8005\u589E\u957F\u88C2\u53D8", "Next.js / Python", "Stripe"],
    author: "Toolify \u7CBE\u9009\u62C6\u89E3",
    authorUrl: "https://www.toolify.ai",
    badge: "\u97F3\u89C6\u9891\u51FA\u6D77",
    badgeTone: "info",
    icon: "ph:translate-bold",
    url: "https://www.toolify.ai",
    storyUrl: "/blog/video-dubbing-localization-saas-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u6309\u7FFB\u8BD1\u89C6\u9891\u65F6\u957F\u5356\u70B9\u6570\u5305\uFF08$29/\u6708\u542B 30 \u5206\u949F\uFF0C$99/\u6708\u542B 150 \u5206\u949F\uFF09\uFF0C\u521B\u4F5C\u8005\u4E0E\u8DE8\u5883\u5356\u5BB6\u6309\u6708\u6301\u7EED\u590D\u8D2D",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u97F3\u89C6\u9891\u961F\u5217\u5F02\u6B65\u5904\u7406\uFF08FFmpeg + \u5B57\u5E55\u65F6\u95F4\u8F74\u5BF9\u9F50\uFF09\u3001\u76EE\u6807\u8BED\u79CD\u53E3\u8BED\u5316 Prompt \u8C03\u4F18\uFF08\u9632\u6B62\u673A\u5668\u7FFB\u8BD1\u8154\uFF09",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u9488\u5BF9\u4E00\u4E2A\u7EC6\u5206\u573A\u666F\uFF08\u5982\u4E9A\u9A6C\u900A\u4EA7\u54C1\u8BB2\u89E3\u89C6\u9891\u6216\u51FA\u6D77\u77ED\u5267\u5207\u7247\uFF09 \u2192 \u4E32\u8054\u8F6C\u5199\u3001\u53F0\u8BCD\u65F6\u95F4\u8F74\u538B\u7F29\u4E0E\u514B\u9686\u914D\u97F3 \u2192 \u5BFC\u51FA\u53CC\u8BED\u786C\u5B57\u5E55\u89C6\u9891"
    ],
    matchProfile: {
      roles: { growth: 94, product: 90, designer: 85, trade: 88, developer: 82 },
      dimensions: { market: 90, delivery: 78, distribution: 90, leverage: 85, resilience: 76 },
      difficulty: "medium",
      revenueModel: "\u6309\u89C6\u9891\u5206\u949F\u6570\u8BA2\u9605 ($29-$99/mo)",
      monthlyRevenueEstimate: "$4,000 - $30,000 / mo"
    },
    sourceMeta: {
      source: "toolify",
      sourceUrl: "https://www.toolify.ai",
      monthlyVisits: "450K/mo",
      pricingSummary: "$29 - $99 / mo",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "\u51FA\u6D77\u77ED\u5287\u8207\u7522\u54C1\u8996\u983B AI \u591A\u8A9E\u7A2E\u914D\u97F3\u53E3\u578B\u540C\u6B65 (Toolify \u97F3\u8996\u983B\u7206\u6B3E)",
        tagline: "\u5E6B\u8DE8\u5883\u8CE3\u5BB6\u3001\u77ED\u5287\u51FA\u6D77\u5718\u968A\u8207 YouTuber \u628A\u4E2D\u6587\u8996\u983B\u4E00\u9375\u8F49\u6210 15 \u570B\u5730\u9053\u53E3\u578B\u8996\u983B",
        description: "\u7D50\u5408\u8A9E\u97F3\u8B58\u5225\u3001\u5927\u6A21\u578B\u672C\u571F\u4FDA\u8A9E\u91CD\u5BEB\u3001\u97F3\u8272\u514B\u9686\u8207\u53E3\u578B\u540C\u6B65 API\uFF0C\u628A\u55AE\u5206\u9418\u672C\u5730\u5316\u914D\u97F3\u6210\u672C\u58D3\u5230 \xA50.8\uFF0C\u5E6B\u52A9\u8DE8\u5883\u8CE3\u5BB6\u8207\u5275\u4F5C\u8005\u6279\u91CF\u5206\u767C\u5230\u82F1/\u65E5/\u97D3/\u897F/\u963F\u8A9E\u5E02\u5834\u3002",
        categoryLabel: "\u5546\u696D\u8B8A\u73FE SaaS",
        statusLabel: "Toolify \u51FA\u6D77\u71B1\u9580",
        monthlyCost: "\u6309\u5206\u9418\u9EDE\u6578\u5305 ($29~$99/mo) \xB7 \u7B97\u529B\u6210\u672C\u7D04 \xA50.8/\u5206\u9418\uFF08\u6BDB\u5229 82%\uFF09",
        badge: "\u97F3\u8996\u983B\u51FA\u6D77",
        techStack: ["\u591A\u8A9E\u7A2E\u672C\u571F\u5316\u6F64\u8272", "\u97F3\u8996\u983B\u6D41\u6C34\u7DDA", "\u5275\u4F5C\u8005\u589E\u9577\u88C2\u8B8A", "Next.js / Python", "Stripe"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u6309\u7FFB\u8B6F\u8996\u983B\u6642\u9577\u8CE3\u9EDE\u6578\u5305\uFF08$29/\u6708\u542B 30 \u5206\u9418\uFF0C$99/\u6708\u542B 150 \u5206\u9418\uFF09\uFF0C\u5275\u4F5C\u8005\u8207\u8DE8\u5883\u8CE3\u5BB6\u6301\u7E8C\u8907\u8CFC",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u97F3\u8996\u983B\u7570\u6B65\u968A\u5217\u8655\u7406\uFF08FFmpeg + \u5B57\u5E55\u6642\u9593\u8EF8\u5C0D\u9F4A\uFF09\u3001\u76EE\u6A19\u8A9E\u7A2E\u53E3\u8A9E\u5316 Prompt \u8ABF\u512A",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u9396\u5B9A\u4E9E\u99AC\u905C\u7522\u54C1\u8996\u983B\u6216\u51FA\u6D77\u77ED\u5287\u5207\u7247 \u2192 \u4E32\u806F\u8F49\u5BEB\u3001\u6642\u9593\u8EF8\u58D3\u7E2E\u8207\u514B\u9686\u914D\u97F3 \u2192 \u5C0E\u51FA\u591A\u8A9E\u7A2E\u8996\u983B"
        ]
      },
      "en": {
        name: "AI Video Dubbing & Lip-Sync Localization SaaS (Toolify Media Pick)",
        tagline: "Translate Product Demos, Shorts & Courses into 15 Languages with Voice Cloning",
        description: "Creators and cross-border brands want global reach on YouTube, TikTok, and Reels, but human voice actors cost $50\u2013$200/minute. Chaining ASR, idiom-aware LLM translation, and voice cloning brings cost down to $0.12/min with 82% SaaS margins.",
        categoryLabel: "Commercial SaaS",
        statusLabel: "Toolify Media Pick",
        modelUsed: "Whisper ASR + DeepSeek-V3 (Idiom Adaptation) + Voice Cloning TTS",
        monthlyCost: "$29\u2013$99/mo Minute Packs \xB7 ~$0.12/min Compute Cost (82% Margin)",
        badge: "Global Media SaaS",
        techStack: ["Audio/Video Queue", "Subtitle Timing", "Creator Growth", "Next.js / Python", "Stripe"],
        highlights: [
          "[How It Makes Money] Sell monthly minute quotas ($29/mo for 30 mins, $99/mo for 150 mins) with strong recurring top-ups",
          "[Required Capabilities] FFmpeg audio-track mixing, syllable-length pacing prompts so dubbed audio matches video timestamps",
          "[How to Operate] Focus on 1 niche (Amazon product demos or short-drama localization) \u2192 chain transcription, pacing-aware translation & TTS"
        ]
      },
      "ja": {
        name: "AI\u52D5\u753B\u591A\u8A00\u8A9E\u5439\u304D\u66FF\u3048\u30FB\u30EA\u30C3\u30D7\u30B7\u30F3\u30AF\u81EA\u52D5\u5316SaaS (Toolify\u30E1\u30C7\u30A3\u30A2\u4EBA\u6C17\u30E2\u30C7\u30EB)",
        tagline: "\u5546\u54C1PR\u52D5\u753B\u3084\u30B7\u30E7\u30FC\u30C8\u30C9\u30E9\u30DE\u3092\u58F0\u8CEA\u7DAD\u6301\u306E\u307E\u307E15\u8A00\u8A9E\u3078\u81EA\u52D5\u5439\u304D\u66FF\u3048",
        description: "YouTube\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC\u3084\u8D8A\u5883EC\u30BB\u30E9\u30FC\u5411\u3051\u306B\u3001\u52D5\u753B\u306E\u97F3\u58F0\u8A8D\u8B58\u30FB\u81EA\u7136\u306A\u73FE\u5730\u30B9\u30E9\u30F3\u30B0\u7FFB\u8A33\u30FB\u58F0\u8CEA\u30AF\u30ED\u30FC\u30F3TTS\u30FB\u5B57\u5E55\u30BF\u30A4\u30DF\u30F3\u30B0\u8ABF\u6574\u3092\u4E00\u6C17\u901A\u8CAB\u3067\u81EA\u52D5\u5316\u30021\u5206\u3042\u305F\u308A\u7D0418\u5186\u306E\u539F\u4FA1\u3067\u30B0\u30ED\u30FC\u30D0\u30EB\u5C55\u958B\u3092\u652F\u63F4\u3057\u307E\u3059\u3002",
        categoryLabel: "\u53CE\u76CA\u5316 Micro-SaaS",
        statusLabel: "Toolify\u4EBA\u6C17\u30E2\u30C7\u30EB",
        modelUsed: "Whisper + DeepSeek-V3\uFF08\u53E3\u8A9E\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\uFF09+ \u97F3\u58F0\u30AF\u30ED\u30FC\u30F3TTS",
        monthlyCost: "\u5206\u6570\u30AF\u30EC\u30B8\u30C3\u30C8\u8AB2\u91D1\uFF08\u6708\u984D$29\u301C$99\uFF09\xB7 \u539F\u4FA1 \u7D04$0.12/\u5206\uFF08\u7C97\u522982%\uFF09",
        badge: "\u52D5\u753B\u30B0\u30ED\u30FC\u30D0\u30EB\u5316",
        techStack: ["\u97F3\u58F0\u30FB\u52D5\u753B\u975E\u540C\u671F\u51E6\u7406", "\u5B57\u5E55\u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u8ABF\u6574", "\u30AF\u30EA\u30A8\u30A4\u30BF\u30FC\u96C6\u5BA2", "Next.js / Python", "Stripe"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u7FFB\u8A33\u5206\u6570\u306B\u5FDC\u3058\u305F\u6708\u984D\u30D7\u30E9\u30F3\uFF08$29/30\u5206\u3001$99/150\u5206\uFF09\u3067\u7D99\u7D9A\u8AB2\u91D1\uFF08\u7C97\u5229\u738782%\uFF09",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011FFmpeg\u306B\u3088\u308B\u97F3\u58F0\u30C8\u30E9\u30C3\u30AF\u5408\u6210\u3068\u3001\u5C3A\u306B\u53CE\u307E\u308B\u81EA\u7136\u306A\u53E3\u8A9E\u7FFB\u8A33\u30D7\u30ED\u30F3\u30D7\u30C8\u306E\u8ABF\u6574\u529B",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u5546\u54C1\u7D39\u4ECB\u52D5\u753B\u3084\u30B7\u30E7\u30FC\u30C8\u52D5\u753B\u306B\u7279\u5316\u2192\u6587\u5B57\u8D77\u3053\u3057\u30FB\u5C3A\u5408\u308F\u305B\u7FFB\u8A33\u30FB\u30AF\u30ED\u30FC\u30F3\u97F3\u58F0\u5408\u6210\u3092\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u5316"
        ]
      },
      "ko": {
        name: "AI \uBE44\uB514\uC624 \uB2E4\uAD6D\uC5B4 \uB354\uBE59 \uBC0F \uB9BD\uC2F1\uD06C \uD604\uC9C0\uD654 SaaS (Toolify \uBBF8\uB514\uC5B4 \uD53D)",
        tagline: "\uC81C\uD488 \uD64D\uBCF4 \uC601\uC0C1\xB7\uC20F\uD3FC\xB7\uAC15\uC758\uB97C \uC6D0\uBCF8 \uBAA9\uC18C\uB9AC \uADF8\uB300\uB85C 15\uAC1C \uAD6D\uC5B4\uB85C \uC790\uB3D9 \uB354\uBE59",
        description: "\uD06C\uB85C\uC2A4\uBCF4\uB354 \uC140\uB7EC\uC640 \uC720\uD29C\uBE0C\xB7\uC20F\uD3FC \uD06C\uB9AC\uC5D0\uC774\uD130\uAC00 \uACAA\uB294 \uC131\uC6B0 \uC12D\uC678 \uBE44\uC6A9($50~$200/\uBD84) \uBB38\uC81C\uB97C \uD574\uACB0\uD569\uB2C8\uB2E4. \uC74C\uC131 \uC778\uC2DD(ASR), \uD604\uC9C0 \uAD6C\uC5B4\uCCB4 LLM \uBC88\uC5ED, \uBCF4\uC774\uC2A4 \uD074\uB85C\uB2DD\uC744 \uACB0\uD569\uD574 \uBD84\uB2F9 $0.12 \uC6D0\uAC00\uB85C 82% \uB9C8\uC9C4\uC758 \uAD6C\uB3C5 \uBAA8\uB378\uC744 \uAD6C\uCD95\uD569\uB2C8\uB2E4.",
        categoryLabel: "\uC218\uC775\uD615 Micro-SaaS",
        statusLabel: "Toolify \uC778\uAE30 \uBAA8\uB378",
        modelUsed: "Whisper ASR + DeepSeek-V3 (\uAD6C\uC5B4\uCCB4 \uD604\uC9C0\uD654) + \uBCF4\uC774\uC2A4 \uD074\uB85C\uB2DD TTS",
        monthlyCost: "\uC6D4 $29~$99 \uBD84(Minute) \uD328\uC2A4 \uACFC\uAE08 \xB7 \uBD84\uB2F9 \uC6D0\uAC00 $0.12 (\uB9C8\uC9C4\uC728 82%)",
        badge: "\uAE00\uB85C\uBC8C \uC601\uC0C1 \uD604\uC9C0\uD654",
        techStack: ["FFmpeg \uBBF8\uB514\uC5B4 \uD30C\uC774\uD504\uB77C\uC778", "\uC790\uB9C9 \uD0C0\uC784\uB77C\uC778 \uB3D9\uAE30\uD654", "\uD06C\uB9AC\uC5D0\uC774\uD130 \uBC14\uC774\uB7F4", "Next.js / Python", "Stripe"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uC6D4\uAC04 \uB354\uBE59 \uC2DC\uAC04\uC81C \uAD6C\uB3C5($29/30\uBD84, $99/150\uBD84) \uBC0F \uCD94\uAC00 \uD06C\uB808\uB527 \uD310\uB9E4\uB85C 82% \uB9E4\uCD9C\uCD1D\uC774\uC775 \uB2EC\uC131",
          "[\uD544\uC694 \uC5ED\uB7C9] FFmpeg \uC624\uB514\uC624 \uBBF9\uC2F1 \uC790\uB3D9\uD654 \uBC0F \uC601\uC0C1 \uAE38\uC774\uC5D0 \uB9DE\uCD98 \uB2E4\uAD6D\uC5B4 \uC74C\uC808 \uAE38\uC774 \uC870\uC808 \uD504\uB86C\uD504\uD2B8 \uC5D4\uC9C0\uB2C8\uC5B4\uB9C1",
          "[\uC2E4\uD589 \uBC29\uBC95] \uC544\uB9C8\uC874 \uC0C1\uD488 \uC601\uC0C1 \uB610\uB294 \uC20F\uD3FC \uB4DC\uB77C\uB9C8 \uD0C0\uAC9F\uD305 \u2192 \uC74C\uC131 \uCD94\uCD9C\xB7\uAD6C\uC5B4\uCCB4 \uBC88\uC5ED\xB7\uBCF4\uC774\uC2A4 \uD074\uB85C\uB2DD \uD30C\uC774\uD504\uB77C\uC778 \uAD6C\uCD95"
        ]
      }
    },
    order: 22,
    hidden: false
  },
  {
    id: "apay",
    name: "apay",
    tagline: "\u4E00\u5957\u4EE3\u7801\u9A71\u52A8\u591A\u7AD9\u70B9\u7684 Nuxt 4 \u5546\u4E1A\u5316\u5EFA\u7AD9\u5E95\u5EA7",
    description: "\u4E00\u4EBA\u516C\u53F8\u6700\u5FCC\u8BB3\u6BCF\u4E2A\u65B0\u9879\u76EE\u90FD\u91CD\u65B0\u5199\u4E00\u904D\u767B\u5F55\u3001\u652F\u4ED8\u3001\u4F1A\u5458\u3001\u591A\u8BED\u8A00\u3001SEO \u548C\u540E\u53F0\u3002\u628A\u8FD9\u4E9B\u901A\u7528\u57FA\u5EFA\u62BD\u6210\u5355\u4EE3\u7801\u5E93\u591A\u4E3B\u9898\u6846\u67B6\uFF0C\u65B0\u5F00\u4E00\u4E2A\u5546\u4E1A\u9879\u76EE\u53EA\u9700\u5199\u4E1A\u52A1\u4E3B\u9898\u5C42\uFF0C3 \u5929\u5185\u5373\u53EF\u4E0A\u7EBF\u6536\u6B3E\u9A8C\u8BC1\u3002",
    category: "devtools",
    categoryLabel: "\u5F00\u53D1\u6548\u7387\u4E0E\u5E95\u5EA7",
    status: "active",
    statusLabel: "\u5185\u90E8\u590D\u5229\u5E95\u5EA7",
    modelUsed: "Hoxi Desktop \u591A\u5206\u652F\u5E76\u884C\u7814\u53D1\u7EF4\u62A4",
    monthlyCost: "\u652F\u6491\u591A\u4E2A\u81EA\u8425\u5546\u4E1A\u7AD9\u70B9 \xB7 \u65B0\u9879\u76EE\u51B7\u542F\u52A8\u6210\u672C\u8D8B\u8FD1\u4E8E \xA50",
    techStack: ["\u5168\u6808\u67B6\u6784\u62BD\u8C61", "\u5168\u7403\u652F\u4ED8\u63A5\u5165", "\u591A\u8BED\u8A00 SEO", "Nuxt 4", "Stripe / \u5FAE\u4FE1\u652F\u4ED8"],
    author: "\u53EF\u4E50 (Coller)",
    badge: "3\u5929\u4E0A\u7EBF\u5E95\u5EA7",
    badgeTone: "info",
    icon: "ph:credit-card-bold",
    url: "https://hoxi.ai/projects",
    storyUrl: "/blog/apay-multi-theme-saas-engine-breakdown",
    highlights: [
      "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u4E0D\u9760\u5356\u5EC9\u4EF7\u6E90\u7801\u8D5A\u94B1\uFF0C\u800C\u662F\u4F5C\u4E3A\u4E00\u4EBA\u516C\u53F8\u7684\u300C\u5370\u949E\u673A\u6BCD\u7248\u300D\uFF0C3 \u5929\u4E00\u4E2A\u65B0\u4E3B\u9898\u5FEB\u901F\u5B75\u5316\u8F7B\u94FA AI\u3001Hoxi \u7B49\u72EC\u7ACB\u6536\u6B3E\u7AD9\u70B9",
      "\u3010\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3011\u5168\u6808\u6A21\u5757\u5316\u62BD\u8C61\u80FD\u529B\u3001\u56FD\u5185\u5916\u5408\u89C4\u6536\u6B3E\u901A\u9053\u5BF9\u63A5\uFF08\u5FAE\u4FE1/\u652F\u4ED8\u5B9D/Stripe\uFF09\u4E0E\u591A\u8BED\u79CD\u81EA\u52A8\u5316\u90E8\u7F72\u80FD\u529B",
      "\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u590D\u7528\u6838\u5FC3\u9274\u6743\u3001\u8BA2\u5355\u3001\u5DE5\u5355\u4E0E\u535A\u5BA2\u8868 \u2192 \u65B0\u5EFA\u72EC\u7ACB\u4E3B\u9898\u76EE\u5F55 \u2192 \u914D\u597D\u57DF\u540D\u4E0E\u652F\u4ED8\u5BC6\u94A5\u76F4\u63A5\u4E0A\u7EBF\u9A8C\u8BC1 MVP"
    ],
    matchProfile: {
      roles: { developer: 96, product: 88, designer: 82, growth: 78, trade: 74 },
      dimensions: { market: 86, delivery: 94, distribution: 80, leverage: 96, resilience: 88 },
      difficulty: "medium",
      revenueModel: "\u591A\u7AD9\u70B9\u5FEB\u901F\u5B75\u5316\u6BCD\u7248 + \u5782\u76F4 SaaS \u77E9\u9635\u6536\u6B3E",
      monthlyRevenueEstimate: "$5,000 - $50,000 / mo (Matrix)"
    },
    sourceMeta: {
      source: "official",
      sourceUrl: "https://hoxi.ai/projects",
      monthlyVisits: "40K/mo",
      pricingSummary: "Internal SaaS Multiplier",
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      "zh-HK": {
        name: "apay",
        tagline: "\u4E00\u5957\u4EE3\u78BC\u9A45\u52D5\u591A\u7AD9\u9EDE\u7684 Nuxt 4 \u5546\u696D\u5316\u5EFA\u7AD9\u5E95\u5EA7",
        description: "\u4E00\u4EBA\u516C\u53F8\u6700\u5FCC\u8AF1\u6BCF\u500B\u65B0\u9805\u76EE\u90FD\u91CD\u65B0\u5BEB\u4E00\u904D\u767B\u9304\u3001\u652F\u4ED8\u3001\u6703\u54E1\u3001\u591A\u8A9E\u8A00\u3001SEO \u548C\u5F8C\u53F0\u3002\u628A\u9019\u4E9B\u901A\u7528\u57FA\u5EFA\u62BD\u6210\u55AE\u4EE3\u78BC\u5EAB\u591A\u4E3B\u984C\u6846\u67B6\uFF0C\u65B0\u958B\u4E00\u500B\u5546\u696D\u9805\u76EE\u53EA\u9700\u5BEB\u696D\u52D9\u4E3B\u984C\u5C64\uFF0C3 \u5929\u5167\u5373\u53EF\u4E0A\u7DDA\u6536\u6B3E\u9A57\u8B49\u3002",
        categoryLabel: "\u958B\u767C\u6548\u7387\u8207\u5E95\u5EA7",
        statusLabel: "\u5167\u90E8\u8907\u5229\u5E95\u5EA7",
        monthlyCost: "\u652F\u6490\u591A\u500B\u81EA\u71DF\u5546\u696D\u7AD9\u9EDE \xB7 \u65B0\u9805\u76EE\u51B7\u555F\u52D5\u6210\u672C\u8DA8\u8FD1\u65BC \xA50",
        badge: "3\u5929\u4E0A\u7DDA\u5E95\u5EA7",
        techStack: ["\u5168\u68E7\u67B6\u69CB\u62BD\u8C61", "\u5168\u7403\u652F\u4ED8\u63A5\u5165", "\u591A\u8A9E\u8A00 SEO", "Nuxt 4", "Stripe / \u5FAE\u4FE1\u652F\u4ED8"],
        highlights: [
          "\u3010\u600E\u9EBC\u8CFA\u9322\u3011\u4F5C\u70BA\u4E00\u4EBA\u516C\u53F8\u7684\u300C\u5370\u9214\u6A5F\u6BCD\u7248\u300D\uFF0C\u5FEB\u901F\u5B75\u5316\u8F15\u92EA AI\u3001Hoxi \u7B49\u7368\u7ACB\u6536\u6B3E\u7AD9\u9EDE",
          "\u3010\u9700\u8981\u4EC0\u9EBC\u80FD\u529B\u3011\u5168\u68E7\u6A21\u584A\u5316\u62BD\u8C61\u80FD\u529B\u3001\u570B\u5167\u5916\u5408\u898F\u6536\u6B3E\u901A\u9053\u5C0D\u63A5\u8207\u81EA\u52D5\u5316\u90E8\u7F72\u80FD\u529B",
          "\u3010\u600E\u9EBC\u64CD\u4F5C\u3011\u8907\u7528\u6838\u5FC3\u9451\u6B0A\u3001\u8A02\u55AE\u3001\u5DE5\u55AE\u8207\u535A\u5BA2\u8868 \u2192 \u65B0\u5EFA\u7368\u7ACB\u4E3B\u984C\u76EE\u9304 \u2192 \u914D\u597D\u57DF\u540D\u8207\u652F\u4ED8\u5BC6\u9470\u76F4\u63A5\u4E0A\u7DDA\u9A57\u8B49 MVP"
        ]
      },
      "en": {
        name: "apay",
        tagline: "Multi-Theme Nuxt 4 Commercial SaaS Launchpad",
        description: "Rebuilding auth, billing, 11-language i18n, SEO, and admin panels from scratch kills solo momentum. apay isolates business themes over a shared commercial core so any new SaaS can launch and accept payments in 3 days.",
        categoryLabel: "DevTools & Engine",
        statusLabel: "Internal Multiplier",
        modelUsed: "Built & maintained in parallel with Hoxi Desktop",
        monthlyCost: "Powers 10+ live commercial sites \xB7 Near-zero launch cost",
        badge: "3-Day MVP Engine",
        techStack: ["Full-Stack Architecture", "Global Payments", "Multilingual SEO", "Nuxt 4", "Stripe / WeChat Pay"],
        highlights: [
          "[How It Makes Money] Acts as the internal launchpad to spin up revenue-generating sites like Qingpu AI and Hoxi in 72 hours",
          "[Required Capabilities] Multi-tenant architecture design, payment gateway integration & automated CI/CD deployment",
          "[How to Operate] Reuse core auth/orders/blog tables \u2192 create a new theme folder \u2192 bind domain & payment keys to validate MVP"
        ]
      },
      "ja": {
        name: "apay",
        tagline: "1\u3064\u306E\u30B3\u30FC\u30C9\u30D9\u30FC\u30B9\u3067\u8907\u6570SaaS\u30923\u65E5\u3067\u7ACB\u3061\u4E0A\u3052\u308BNuxt 4\u5546\u7528\u57FA\u76E4",
        description: "\u30ED\u30B0\u30A4\u30F3\u8A8D\u8A3C\u3001\u6C7A\u6E08\uFF08Stripe/WeChat\uFF09\u3001\u4F1A\u54E1\u7BA1\u7406\u3001\u591A\u8A00\u8A9ESEO\u3001\u7BA1\u7406\u753B\u9762\u3092\u5171\u901A\u30B3\u30A2\u3068\u3057\u3066\u62BD\u8C61\u5316\u3002\u65B0\u898FSaaS\u3092\u4F5C\u308B\u969B\u306F\u30C6\u30FC\u30DE\u5C64\u3092\u66F8\u304F\u3060\u3051\u30673\u65E5\u4EE5\u5185\u306B\u8AB2\u91D1\u691C\u8A3C\u3092\u958B\u59CB\u3067\u304D\u308B\u30011\u4EBA\u8D77\u696D\u5BB6\u306E\u8907\u5229\u30A8\u30F3\u30B8\u30F3\u3067\u3059\u3002",
        categoryLabel: "\u958B\u767A\u30C4\u30FC\u30EB\u30FB\u57FA\u76E4",
        statusLabel: "\u81EA\u793ESaaS\u91CF\u7523\u57FA\u76E4",
        modelUsed: "Hoxi Desktop\u306B\u3088\u308B\u4E26\u5217\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u4FDD\u5B88",
        monthlyCost: "10\u4EE5\u4E0A\u306E\u5546\u7528\u30B5\u30A4\u30C8\u3092\u99C6\u52D5 \xB7 \u65B0\u898F\u7ACB\u3061\u4E0A\u3052\u56FA\u5B9A\u8CBB\u307B\u307C0\u5186",
        badge: "3\u65E5MVP\u69CB\u7BC9\u57FA\u76E4",
        techStack: ["\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u8A2D\u8A08", "\u30B0\u30ED\u30FC\u30D0\u30EB\u6C7A\u6E08\u9023\u643A", "\u591A\u8A00\u8A9ESEO", "Nuxt 4", "Stripe"],
        highlights: [
          "\u3010\u7A3C\u304E\u65B9\u3011\u65B0\u898F\u30DE\u30A4\u30AF\u30EDSaaS\u30923\u65E5\u3067\u672C\u756A\u6295\u5165\u3059\u308B\u300C\u6BCD\u4F53\u30A8\u30F3\u30B8\u30F3\u300D\u3068\u3057\u3066\u3001\u8907\u6570\u306E\u53CE\u76CA\u30B5\u30A4\u30C8\u3092\u9AD8\u901F\u5B75\u5316",
          "\u3010\u5FC5\u8981\u306A\u30B9\u30AD\u30EB\u3011\u30E2\u30B8\u30E5\u30FC\u30EB\u5316\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u8A2D\u8A08\u3001\u6C7A\u6E08API\u7D71\u5408\u3001\u81EA\u52D5\u30C7\u30D7\u30ED\u30A4\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u69CB\u7BC9",
          "\u3010\u5B9F\u8DF5\u30B9\u30C6\u30C3\u30D7\u3011\u5171\u901A\u306E\u8A8D\u8A3C\u30FB\u6CE8\u6587\u30FB\u30D6\u30ED\u30B0DB\u3092\u518D\u5229\u7528\u2192\u65B0\u898F\u30C6\u30FC\u30DE\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u4F5C\u6210\u2192\u30C9\u30E1\u30A4\u30F3\u3068\u6C7A\u6E08\u30AD\u30FC\u3092\u8A2D\u5B9A\u3057\u3066\u5373\u65E5\u516C\u958B"
        ]
      },
      "ko": {
        name: "apay",
        tagline: "\uB2E8\uC77C \uCF54\uB4DC\uBCA0\uC774\uC2A4\uB85C \uBA40\uD2F0 SaaS\uB97C 3\uC77C \uB9CC\uC5D0 \uB7F0\uCE6D\uD558\uB294 Nuxt 4 \uC0C1\uC6A9 \uBCF4\uC77C\uB7EC\uD50C\uB808\uC774\uD2B8",
        description: "\uC0C8\uB85C\uC6B4 \uC544\uC774\uD15C\uC744 \uAC80\uC99D\uD560 \uB54C\uB9C8\uB2E4 \uB85C\uADF8\uC778, \uACB0\uC81C, \uBA64\uBC84\uC2ED, \uB2E4\uAD6D\uC5B4 SEO, \uC5B4\uB4DC\uBBFC\uC744 \uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC \uC9DC\uB294 \uC2DC\uAC04 \uB0AD\uBE44\uB97C \uC5C6\uC560\uC90D\uB2C8\uB2E4. \uACF5\uD1B5 \uC0C1\uC6A9 \uCF54\uC5B4 \uC704\uC5D0 \uBE44\uC988\uB2C8\uC2A4 \uD14C\uB9C8\uB9CC \uC5B9\uC5B4 3\uC77C \uC548\uC5D0 \uACB0\uC81C \uAC00\uB2A5\uD55C MVP\uB97C \uBC30\uD3EC\uD569\uB2C8\uB2E4.",
        categoryLabel: "\uAC1C\uBC1C \uB3C4\uAD6C\xB7\uAE30\uBC18",
        statusLabel: "\uC0AC\uB0B4 \uBCF5\uB9AC \uC5D4\uC9C4",
        modelUsed: "Hoxi Desktop \uBA40\uD2F0 \uC5D0\uC774\uC804\uD2B8 \uBCD1\uB82C \uC720\uC9C0\uBCF4\uC218",
        monthlyCost: "10\uAC1C \uC774\uC0C1\uC758 \uC0C1\uC6A9 \uC0AC\uC774\uD2B8 \uAD6C\uB3D9 \xB7 \uC2E0\uADDC \uB7F0\uCE6D \uD55C\uACC4\uBE44\uC6A9 $0",
        badge: "3\uC77C MVP \uB7F0\uCE6D \uC5D4\uC9C4",
        techStack: ["\uD480\uC2A4\uD0DD \uC544\uD0A4\uD14D\uCC98", "\uAE00\uB85C\uBC8C \uACB0\uC81C \uC5F0\uB3D9", "\uB2E4\uAD6D\uC5B4 SEO", "Nuxt 4", "Stripe"],
        highlights: [
          "[\uC218\uC775 \uAD6C\uC870] \uCE6D\uD478 AI, Hoxi \uB4F1 \uB3C5\uB9BD \uC218\uC775\uD615 \uC0AC\uC774\uD2B8\uB97C 72\uC2DC\uAC04 \uB0B4\uC5D0 \uCC0D\uC5B4\uB0B4\uB294 1\uC778 \uAE30\uC5C5\uC758 \uD575\uC2EC \uB7F0\uCE58\uD328\uB4DC",
          "[\uD544\uC694 \uC5ED\uB7C9] \uBA40\uD2F0 \uD14C\uB9C8 \uBAA8\uB4C8\uD654 \uC124\uACC4, \uAE00\uB85C\uBC8C \uACB0\uC81C \uAC8C\uC774\uD2B8\uC6E8\uC774 \uC5F0\uB3D9 \uBC0F \uBB34\uC911\uB2E8 \uBC30\uD3EC \uC790\uB3D9\uD654",
          "[\uC2E4\uD589 \uBC29\uBC95] \uC778\uC99D\xB7\uC8FC\uBB38\xB7\uBE14\uB85C\uADF8 \uCF54\uC5B4 \uD14C\uC774\uBE14 \uC7AC\uC0AC\uC6A9 \u2192 \uC2E0\uADDC \uD14C\uB9C8 \uD3F4\uB354 \uC0DD\uC131 \u2192 \uB3C4\uBA54\uC778 \uBC0F \uACB0\uC81C \uD0A4 \uC5F0\uACB0 \uD6C4 \uC989\uC2DC \uC720\uB8CC \uAC80\uC99D"
        ]
      }
    },
    order: 30,
    hidden: false
  }
];
defaultHoxiProjects.map((p) => localizeProject(p, "en"));
function enrichProjectRecord(raw, rawLocale) {
  const seed = defaultHoxiProjects.find((item) => item.id === raw.id);
  const merged = {
    ...raw,
    matchProfile: raw.matchProfile || (seed == null ? void 0 : seed.matchProfile) || inferProjectMatchProfile(raw),
    sourceMeta: raw.sourceMeta || (seed == null ? void 0 : seed.sourceMeta) || {
      source: "curated",
      sourceUrl: raw.url,
      lastSyncedAt: "2026-11-05"
    },
    locales: {
      ...(seed == null ? void 0 : seed.locales) || {},
      ...raw.locales || {}
    }
  };
  return rawLocale ? localizeProject(merged, rawLocale) : merged;
}

export { buildClientProjectBreakdownPost as b, defaultHoxiProjects as d, enrichProjectRecord as e, getCategoryLabelForLocale as g, normalizeHoxiLocale as n, rankProjectsForUser as r };
//# sourceMappingURL=projects-EO1nOmRT.mjs.map
