import { _ as __nuxt_component_0 } from './EmailVerificationBanner-D_7UJEy7.mjs';
import { c as useSettings, D as useLocaleRouter, u as useI18n, bB as useSwitchLocalePath, bh as useUserSession, H as useRoute, K as useHead, O as __nuxt_component_3$3, j as _sfc_main$Y } from './server.mjs';
import __nuxt_component_2 from './HoxiLogoIcon-DQjCSQpM.mjs';
import __nuxt_component_4 from './HoxiCommunityModal-Ckoo5ZSh.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHoxiCommunity } from './useHoxiCommunity-xgFpfmKx.mjs';
import { u as useColorMode } from './composables-p2-IRBF7.mjs';
import './interval-BBg9qvAV.mjs';
import '../nitro/nitro.mjs';
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
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const en = {
  brand: {
    name: "Hoxi",
    tagline: "Native AI Workspace \xB7 Model & Compute Intelligence",
    headerSub: "hoxi.ai \xB7 Native AI Agentic Workspace"
  },
  nav: {
    home: "Hoxi Code",
    soloBuilder: "Solo Builder",
    models: "Capabilities",
    gateways: "Gateways",
    plans: "Coding Plans",
    tools: "Tools",
    skills: "Skills",
    projects: "Projects",
    posts: "Blog",
    download: "Download",
    about: "About",
    coding: "Experience Rank",
    cheap: "Gateways & Save",
    savings: "Savings Guide",
    savingsMenuTitle: "Savings Guide",
    savingsMenuNote: "Cost-reduction & model selection playbook",
    allSavings: "View all",
    modelsDesc: "Capability scores and list prices",
    gatewaysDesc: "Latency, uptime and pricing",
    plansDesc: "Subscription and token-pack quotas",
    switchDesc: "Budget-friendly model alternatives",
    changesDesc: "Official price drops and change history",
    switch: "Alternatives",
    compare: "Compare",
    changes: "Price Logs",
    readiness: "Readiness Test",
    readinessBadge: "Try It",
    readinessDesc: "12 role-based scenarios & 5D capability radar",
    soloMenuTitle: "Solo Builder",
    allSolo: "Portal",
    soloPortal: "Solo Builder Portal",
    soloPortalDesc: "4-step playbook, field notes & solo stack",
    soloColumn: "Refactoring the Self",
    soloColumnDesc: "Serialized handbook on solo mindset & execution",
    toolsMenuTitle: "Tools",
    toolsCatalog: "Agent Tools & APIs",
    allTools: "View all",
    toolsDesc: "Verified Agent APIs & full-stack solo toolkit",
    skillsDesc: "Verified Agent Skills ready to install in Hoxi",
    projectsDesc: "Real-world AI products built and shipped solo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    comingSoon: "Coming soon"
  },
  footer: {
    rights: "All rights reserved",
    dataNote: "Every price and score carries its source and last-checked date",
    community: "Developer Community",
    privacy: "Privacy Notice",
    terms: "Terms of Service"
  },
  common: {
    updatedAt: "Updated {date}",
    viewAll: "View all",
    readMore: "Read more",
    empty: "No data yet",
    source: "Source",
    learnMore: "Learn more"
  },
  plans: {
    title: "AI Coding Plans & Subscriptions",
    seoTitle: "AI Coding Plans & Official Subscriptions Comparison",
    seoDescription: "Compare official AI coding plans and token resource packs across pricing, quota limits, model coverage, and pros & cons."
  },
  skills: {
    title: "Hoxi Agent Skills",
    subtitle: "Agent Skills you can install into Hoxi Desktop. Only metadata is published here; installing downloads SKILL.md and verifies its SHA-256 digest locally.",
    seoTitle: "Hoxi Agent Skills - installable Agent Skills catalog",
    seoDescription: "Hoxi Agent Skills catalog: skill authoring, production ops and more, downloaded and digest-verified by the desktop app.",
    downloadApp: "Download Hoxi",
    installNote: "Open Inspector \u2192 Skills \u2192 Marketplace in the desktop app to install. Hoxi only downloads SKILL.md and verifies its digest; it never auto-installs or runs remote scripts.",
    viewSource: "View source",
    empty: "The catalog is being prepared"
  },
  tools: {
    title: "Tools",
    heroEyebrow: "{tools} tools \xB7 {endpoints} endpoints \xB7 {providers} providers",
    heroLine1: "Every tool.",
    heroLine2: "One balance.",
    subtitle: "The tools your agent calls. Live, metered, and billed against one balance. No vendor portal, no subscription cliff.",
    seoTitle: "Tools \u2014 Verified Agent APIs, Providers & Full-Stack Directory | Hoxi",
    seoDescription: "Explore {tools} tools, {endpoints} verified Agent API endpoints, and {providers} providers ready to call through Hoxi, Claude Code, and MCP.",
    searchPlaceholder: "Search the catalog \u2014 try 'video gen', 'amazon reviews', 'tiktok' or 'apify'",
    allCategories: "All",
    showMore: "Show more",
    showLess: "Show less",
    noMatchTitle: 'Nothing matches "{query}"',
    noMatchDesc: "Try a broader query or switch categories on the left.",
    emptyTitle: "No tools yet",
    emptyDesc: "The registry is empty in this category.",
    markupFootnote: "* Some tools in this category include a platform fee. Open a tile to inspect individual endpoints.",
    zeroMarkup: "0 Markup",
    zeroMarkupTip: "No platform fee added.",
    zeroMarkupPartialTip: "Most tools here add no platform fee. Some include one.",
    giveToAgent: "Get started by giving this to your agent",
    copyPrompt: "Copy prompt",
    copied: "Copied",
    endpointsTitle: "Endpoints",
    useCasesTitle: "Try it with your agents",
    relatedCategories: "Related categories",
    visitWebsite: "Website",
    viewDocs: "Docs",
    closeModal: "Close details",
    kindCategory: "Category",
    kindProvider: "Provider",
    kindSaas: "Indie Stack"
  },
  home: {
    heroBadge: "Desktop + Mobile Synergy \xB7 100% Open Source",
    titleLine1: "One Open Agentic Workspace",
    titleLine2: "For Every Developer Workflow",
    title: "Hoxi \u2014 One Open Agentic Workspace for Every Developer Workflow",
    subtitle: "Run parallel AI coding sessions on desktop and approve or steer from your phone on the go. Built-in model leaderboard, high-speed gateways, and 100% BYOK with zero lock-in.",
    authorIntro: "I run the AI gateway, and I'm also building Qingpu AI and this site.",
    sections: {
      codingLeaderboard: "\u{1F3C6} Real Experience Leaderboard",
      codingNote: "Ranked by complex refactoring, fullstack coding, and debug capability. Paired with real developer notes and cost efficiency.",
      gateways: "All gateways",
      gatewaysNote: "Tested continuously with real API keys for latency, uptime, and model authenticity to filter out fake or throttled relays.",
      plans: "\u{1F4E6} Coding Plans & Packages",
      plansNote: "Pay-as-you-go vs monthly subscriptions without payment headaches.",
      posts: "AI coding \xB7 Building products \xB7 Going solo",
      postsNote: "Practical AI-assisted solo workflows, prompt tricks, and pitfall avoidance guides.",
      picks: "This week's picks",
      leaderboard: "Full Leaderboard",
      about: "About",
      categories: "Categories",
      data: "Data at a glance"
    },
    plansList: {
      plan1Title: "Pay-As-You-Go Pack",
      plan1Tag: "Developer Choice",
      plan1Price: "From \xA510",
      plan1Desc: "Deposit as needed, credits never expire. Built specifically for Cursor, VS Code & CLI.",
      plan1F1: "Full support for Claude 3.7 / DeepSeek / GPT-4o",
      plan1F2: "Precise per-token billing with real-time logs",
      plan1F3: "Zero monthly fees, zero expiration lock-in",
      plan1Cta: "Recharge & Setup",
      plan2Title: "Pro Monthly Plan",
      plan2Tag: "Recommended for Heavy Dev",
      plan2Price: "\xA599 / mo",
      plan2Desc: "Unlimited high-concurrency access tailored for full-time developers and daily productivity.",
      plan2F1: "Dedicated fast routes, zero queuing under load",
      plan2F2: "Seamless switching across all frontier models",
      plan2F3: "Priority technical support and setup guidance",
      plan2Cta: "Subscribe Pro",
      plan3Title: "Plus/Pro Shared Sub",
      plan3Tag: "High Value",
      plan3Price: "\xA529 / mo",
      plan3Desc: "Official native web experience with isolated sessions, no overseas card or ban worries.",
      plan3F1: "Official ChatGPT Plus / Claude Pro Web UI",
      plan3F2: "Independent accounts or isolated workspaces",
      plan3F3: "Automated replacement guarantee and warranty",
      plan3Cta: "View Shared Plans"
    },
    moreCodingModels: "View full coding model benchmarks",
    viewGateways: "View tested gateways & reviews",
    viewPlans: "View all Coding Plans & Packages",
    picksNote: 'Taking "{scene}" as the most common case: one pick regardless of cost, one for value, one for the cheapest that still works. Other scenarios are in the buying guide.',
    moreScenes: "See all scenario picks",
    viewFullTable: "See the full leaderboard",
    postsEmpty: "No articles yet.",
    dataSummary: "{count} models from {vendors} vendors. Prices from official pricing pages, scores from Artificial Analysis.",
    method: {
      title: "Where the data comes from",
      viewAbout: "Full methodology",
      source: "I copy prices and specs by hand from official vendor pricing pages; capability scores come from Artificial Analysis. Every figure carries the date I checked it.",
      missing: "Missing fields are left blank rather than guessed.",
      update: "I maintain this alone, so it lags. Check the vendor's own page before budgeting."
    },
    pending: "The data layer lands in a later phase. This is a structural preview."
  },
  categories: {
    overall: "Overall",
    cheapest: "Cheapest",
    value: "Value",
    fastest: "Fastest",
    context: "Long context",
    coding: "Coding",
    chinese: "Chinese"
  },
  models: {
    title: "AI Model Leaderboard",
    subtitle: "Capability scores and official prices on one consistent yardstick, so you can tell which model to use and which one is actually worth it.",
    seoTitle: "AI Model Leaderboard - Capability and Price Comparison",
    seoDescription: "Compare large language models by capability score, input/output price, blended price, value index, output speed and context window. Every figure carries its source and check date.",
    tabsLabel: "Leaderboard categories",
    tabs: {
      overall: "Overall",
      value: "Value",
      cheapest: "Cheapest",
      fastest: "Fastest",
      context: "Long context"
    },
    columns: {
      model: "Model",
      overall: "Score",
      input: "Input",
      output: "Output",
      blended: "Blended",
      value: "Value",
      tps: "Speed",
      ttft: "Latency",
      context: "Context"
    },
    filters: {
      vendor: "Vendor",
      reasoning: "Type",
      reasoningOnly: "Reasoning only",
      maxPrice: "Max blended price",
      noLimit: "No limit",
      reset: "Clear filters"
    },
    count: "Showing {shown} of {total} models",
    modelCount: "{count} models tracked",
    searchPlaceholder: "Search model or vendor (e.g. Claude, DeepSeek, Flash)...",
    podiumTitle: "Three common picks",
    podiumDesc: "One each for overall score, value and speed, all computed from the leaderboard data.",
    viewMode: {
      table: "Table",
      cards: "Cards"
    },
    scenes: {
      all: "All",
      coding: "Coding",
      reasoning: "Reasoning",
      budget: "Budget (\u2264\xA52)",
      longContext: "1M+ Context"
    },
    compareDrawer: {
      selected: "{count} models selected",
      startCompare: "Compare Models",
      clear: "Clear",
      limitTip: "Max 3 models"
    },
    noMatch: "No model matches the current filters. Try raising the price cap or clearing the vendor filter."
  },
  model: {
    seoTitle: "{name} - price, scores and when to use it",
    offerDescription: "Official list price per 1M input tokens",
    scores: "Capability scores",
    scoreNote: "The overall figure is the Artificial Analysis Intelligence Index - a composite index, not a percentage. The current leader sits around 63.",
    scoreMissing: "This model is not in the current Artificial Analysis top 25, so we have no capability score for it. That means no verifiable third-party data, not that the model is weak.",
    scoreDimensions: {
      overall: "Overall",
      coding: "Coding",
      reasoning: "Reasoning",
      chinese: "Chinese",
      agentic: "Agentic"
    },
    variantNote: 'Figures are taken from the "{variant}" reasoning effort; the same model scores and responds differently at other efforts.',
    pricing: "Pricing",
    priceItem: "Item",
    priceOfficial: "Official price",
    priceInput: "Input",
    priceOutput: "Output",
    priceCacheRead: "Cache read",
    priceCacheWrite: "Cache write",
    maxOutput: "Max output",
    priceNote: "Per 1M tokens. Blended price works out to CNY {blended} (USD converted at 1 USD = {rate} CNY, rate checked {date}). A dash means the vendor does not publish that item or does not bill that way.",
    perMillion: "per 1M tokens",
    tpsUnit: "tokens/sec",
    noData: "No verifiable data",
    scenes: "Good for",
    highlights: "Strengths",
    caveats: "Watch out for",
    backToList: "Back to leaderboard",
    tags: {
      reasoning: "Reasoning",
      openWeights: "Open weights",
      image: "Image input",
      audio: "Audio input",
      video: "Video input",
      free: "Free"
    },
    alternatives: {
      stronger: "Stronger at similar price",
      cheaper: "Similar quality, cheaper",
      neighbors: "Similar price",
      neighborsNote: "This model has no verifiable overall score, so we cannot compare capability. These are the closest by blended price."
    },
    blendedShort: "Blended",
    scoreShort: "Score"
  },
  compare: {
    title: "Compare models",
    subtitle: "Put two to four candidates side by side. Your selection is written into the URL, so one link carries the whole comparison.",
    seoTitle: "Compare AI Models - Specs and Prices Side by Side",
    seoTitleWith: "{names} compared",
    pick: "Pick models to compare (up to {max})",
    overflow: "At most {max} models at a time; the extras were ignored - any more and the table becomes unreadable.",
    needMore: "Pick at least two models to compare.",
    field: "Field",
    modalities: "Input modalities",
    summary: "In one line",
    yes: "Yes",
    no: "No",
    billingTitle: "Billing differences"
  },
  changes: {
    title: "Model change log",
    subtitle: "Price adjustments, promotions starting and ending, models added and retired. Once you have picked a model, these are what blindside your bill.",
    seoTitle: "AI Model Price Changes and Upcoming Adjustments",
    seoDescription: "Track price adjustments, expiring promotions, newly listed and retired AI models, including announced future changes.",
    asOf: "As of {date}",
    upcoming: "Already announced",
    upcomingNote: "Changes vendors have already published, buried in the footnotes of their pricing pages. Anything under 30 days out is flagged in red.",
    upcomingEmpty: "None of the tracked models has a price change with a published date.",
    history: "What has changed",
    historyNote: "Only changes I actually verified myself, starting from the day I began tracking. No backfilling. Gaps stay gaps - inventing a fuller history would be easy, and I wouldn't trust this site myself afterward.",
    historyEmpty: "No changes recorded yet.",
    daysLeft: "{days} days left ({date})",
    today: "today",
    noDate: "No end date published",
    effect: {
      rise: "Rises from {from} to {to} per 1M tokens when it expires",
      riseUnknown: "Currently {from} per 1M tokens; the post-expiry price is not published",
      discountEnds: "Returns from the promo rate {to} to the standard {from} per 1M tokens",
      discountEndsUnknown: "Standard rate {from} per 1M tokens; the promo end date is not published"
    },
    kinds: {
      priceUp: "Price up",
      priceDown: "Price down",
      modelAdded: "Added",
      modelRemoved: "Retired",
      promo: "Promotion",
      score: "Score update",
      other: "Other"
    }
  },
  switch: {
    indexTitle: "Switch to something cheaper",
    indexSubtitle: "Pick the model you are on today and see what can replace it, how much you would save, and what to watch out for.",
    indexSeoTitle: "AI Model Alternatives - Switch to Something Cheaper",
    indexNote: "The most expensive models come first - if you are here you are probably worried about the bill, and that is where the headroom is.",
    groups: {
      expensive: "Expensive (blended over CNY 30)",
      mid: "Mid (CNY 10-30)",
      cheap: "Cheap (under CNY 10)"
    },
    title: "Cheaper alternatives to {name}",
    subtitle: "Models that match or suffice for what {name} does, at a lower price - plus the billing differences to know before you switch.",
    seoTitle: "Cheaper alternatives to {name} - what you save and how to switch",
    seoDescription: "Which cheaper models can replace {name}? Compare scores, blended prices and billing differences, with a checklist for verifying before you switch.",
    saves: "saves {percent}%",
    noScore: "No score yet",
    current: "Current model",
    viewDetail: "Full specs",
    otherModels: "Try another model",
    none: "On current data there is nothing clearly cheaper and still capable enough to replace {name}. It may already be near the value frontier.",
    sections: {
      cheaper: "Same level, cheaper",
      cheaperNote: "Score matches or beats your current model at a lower price. This tier is usually a straight swap.",
      deepCut: "Deep cut",
      deepCutNote: "A fifth of the price or less. Capability does drop; whether that matters depends on your task - I don't have per-dimension coding scores, so that question is yours to answer by testing.",
      stronger: "Same price, stronger",
      strongerNote: "Similar price, higher score. Start here if you are switching because quality is not good enough.",
      neighbors: "Similar price",
      neighborsNote: "This model has no verifiable score, so capability cannot be compared. These are the closest by blended price."
    },
    warnings: {
      tiers: "Tiered pricing: the rate jumps once input passes {value} tokens, so long-context work must be costed per tier.",
      timeWindows: "Time-of-day pricing: {value} is cheaper. Shifting offline work there cuts the bill outright.",
      promo: "{value}",
      batch: "The batch endpoint runs at about {value}% of the standard rate - use it for anything not time-critical.",
      cache: "Cache is billed by storage time rather than per write, so the longer it lives the more it costs. Not comparable to per-write pricing.",
      modality: "{value} input is priced separately and higher - multimodal workloads cannot be estimated from the text rate.",
      unstructured: "We have not yet verified this model's billing rules in structured form. It may have tiered or time-of-day pricing - check the vendor page before switching."
    },
    verify: {
      title: "Verify before you switch",
      step1: "Take three to five tasks you have actually run and feed the exact same inputs to the candidate.",
      step2: 'Do not judge "is the answer better" - judge "does it break": format compliance, detail loss in long context, tool-call argument correctness.',
      step3: "Put both outputs side by side. Over 10% failures, do not switch. Under 10%, run it on a non-critical path for a week first.",
      caveat: "That overall score comes from a general third-party leaderboard and says nothing about your specific task - I've said this on a few other pages, but it matters most here. The savings are certain; whether it's good enough is something only your own test can tell you."
    }
  },
  about: {
    title: "About Hoxi AI",
    subtitle: "Harness AI, One-Person Army, Joyful & Limitless \u2014 A full-stack engineer\u2019s solopreneur playbook.",
    seoTitle: "About Hoxi AI - The Solopreneur AI Guide & Founder Notes",
    explore: "Solopreneur Roadmap",
    authorIntro: "I am Coller. A full-stack engineer running the AI gateway, indie commercial SaaS Qingpu, and this platform. Focusing on a sustainable one-person business model powered by AI.",
    tagSolo: "Indie Full-Stack",
    tagAi: "AI Cost & Model Selection",
    tagAudit: "100% Real Production Tested",
    why: {
      title: 'Why Solopreneurship? The Paradigm Shift of "One-Person Army"',
      p1: "In the past, indie makers constantly struggled with an impossible trilemma: great product ideas but overwhelmed by coding, finishing development but struggling with distribution, getting traction but buried by DevOps, support tickets, and server bills.",
      p2: 'Today, generative AI and agents have radically reduced the marginal cost of building and shipping. By leveraging AI properly, a single person can match the output of a 5-to-10-person agile team. Being a "one-person army" is no longer just a metaphor, but a viable, sustainable lifestyle for modern builders.'
    },
    pillars: {
      title: "What Hoxi AI Offers: Four Pillars for the Solopreneur",
      p1: "1. Identify Your Blindspots (Readiness Assessment): Diagnose your strengths and bottlenecks across product, engineering, audience acquisition, and monetization.",
      p2: "2. Demystify AI Costs (Model Benchmarks & Savings): AI is your core production cost. I share real gateway telemetry, baseline pricing, and alternative routes to cut token expenditures by 50%\u201380%.",
      p3: "3. Minimalist Full-Stack Arsenal (Tools & Coding Plans): Tested workflows for coding, hosting, domain setup, automated CI/CD, and global billing \u2014 straightforward and ready to deploy.",
      p4: "4. Unvarnished Production Logs (Refactoring the Self & Blog): Real mental model shifts, launch retrospectives, and post-mortems from daily solopreneur operations."
    },
    values: {
      title: "Joyful & Limitless: The Philosophy of Sustainable Building",
      p1: 'The platform is named Hoxi, and my name is Coller. In Chinese, it naturally forms "Ke Xi Ke Le" \u2014 celebrating achievement while enjoying the journey. Many indie founders inadvertently turn themselves into 24/7 burned-out freelancers.',
      p2: "A genuine one-person business is about taking back agency over your life. Shipping valuable software is worthy of celebration (\u53EF\u559C), while making a living with peace of mind brings real joy (\u53EF\u4E50). The goal of running solo with AI is freedom and dignity."
    },
    principles: {
      title: "My Principles: Authenticity, Transparency, Zero Hype",
      p1: "No get-rich-quick nonsense: You won't find fake promises or hype courses here. Building a one-person business is serious work requiring solid code, genuine distribution, and clear unit economics.",
      p2: "Verifiable data & candid opinions: Pricing is cross-checked against official documentation, relays are benchmarked with real traffic, and subjective opinions are explicitly marked as editorial notes.",
      p3: "Solo, yet not alone: Solopreneurship can be an isolating journey. We maintain an intimate community for like-minded builders to share notes, collaborate, and grow together."
    }
  },
  posts: {
    title: "Blog",
    subtitle: "Notes on AI coding, building products and running a one-person company.",
    seoTitle: "Blog - Hoxi AI",
    seoDescription: "Coller's notes on AI coding, building products and running a one-person company.",
    empty: "No articles published yet.",
    checkBackLater: "New articles will show up here.",
    allCategories: "All",
    category: "Category",
    categoryEmpty: "No articles in this category yet.",
    views: "{count} views",
    toc: "Contents",
    pagination: "Article pagination",
    previous: "Previous",
    next: "Next",
    backToList: "Back to all articles",
    like: "Like",
    likePrompt: "Found this helpful? Give it a like"
  },
  cheap: {
    title: "Cheap AI Models: A Buying Guide",
    subtitle: "Three picks per scenario: the best regardless of cost, the one most people should pick, and how cheap you can actually go.",
    seoTitle: "Cheap AI Models - How to Pick One That Is Actually Good",
    seoDescription: "Scenario-based recommendations for cheap, capable AI models: coding, long documents, batch processing, translation. With price comparison and cost-saving tactics.",
    basisTitle: "How these picks were made",
    basisNote: "Prices and context windows come from vendor pricing pages; scores and speed come from the Artificial Analysis leaderboard - I'll stand behind those as verifiable. But I don't have per-dimension scores for coding, Chinese or agentic work, so any judgement about those is my own editorial call, flagged per scenario below. Before you ship, run your own task through the candidates - don't just take my word for it.",
    basisLabel: "Basis: ",
    tiers: {
      best: "Best",
      value: "Value",
      budget: "Cheapest"
    },
    tableTitle: "Cheapest models",
    tableNote: "The 15 lowest blended prices. Cheap is not the same as good enough - read it alongside the score. A dash means there is no verifiable score for that model.",
    viewFullTable: "See the full leaderboard",
    tipsTitle: "How to spend less",
    tips: {
      cache: {
        title: "Cache whatever does not change",
        body: "Cache hits typically cost about a tenth of the input price. System prompts, code bases and long documents that ride along on every call belong in the cache. Watch the billing model: some vendors charge for cache writes, others charge for cache storage per hour."
      },
      routing: {
        title: "Route by difficulty instead of using one model for everything",
        body: "Send classification, extraction and formatting to a cheap tier and reserve the flagship for steps that genuinely need reasoning. In most agent pipelines fewer than one step in five needs top-tier capability."
      },
      effort: {
        title: "Turn the reasoning effort down",
        body: "Max and medium effort cost the same per token but differ hugely in how many thinking tokens get produced, and in time to first token. For tasks that do not need deep reasoning, lowering the effort is both cheaper and faster."
      },
      batch: {
        title: "Use batch endpoints and off-peak windows",
        body: "Several vendors price batch calls at half rate, and DeepSeek halves prices during off-peak hours. Offline work that is not time-critical should run there."
      },
      tiers: {
        title: "Watch for tiered and promotional pricing",
        body: "Many models change price band once the input passes a threshold, sometimes doubling. Others are running limited-time promotions that expire. Base long-term estimates on the post-promotion price."
      },
      tokenizer: {
        title: "Compare tokens per text, not just price per token",
        body: "Tokenizers differ between vendors, and the same Chinese passage can differ by around 30% in token count. A lower unit price does not guarantee a lower bill - run your own corpus through each candidate and compare the totals."
      }
    }
  },
  gateways: {
    title: "AI Gateway Comparison",
    seoTitle: "AI Gateway Comparison - latency, uptime and pricing",
    seoDescription: "Compare AI API gateways reachable from China: latency, uptime, supported models and pricing, with Cursor / Cline setup."
  },
  savings: {
    title: "AI Compute Savings Guide",
    seoTitle: "AI Compute Savings Guide - Hoxi AI",
    seoDescription: "Model prices, gateways and coding plans compared, plus how to choose by usage.",
    decisionBadge: "How I choose",
    decisionDesc: "This is my own judgement, not a measured result.",
    rule1Title: "Light usage: pay as you go",
    rule1Desc: "If you don't use much, a $20\u201340 monthly plan mostly goes unused. Pay for what you use.",
    rule2Title: "Coding every day: get a coding plan",
    rule2Desc: "With heavy completions and multi-file edits every day, flat plans like Cursor or GitHub Copilot work out cheaper.",
    rule3Title: "Batch jobs: try cheap models first",
    rule3Desc: "For batch processing and long documents, run a Chinese or lightweight model first; if it is good enough, skip the flagship. See the leaderboard for price gaps.",
    modelsSectionTitle: "Model capability and price",
    modelsSectionNote: "Top four by value (overall score \xF7 blended price); scores from Artificial Analysis.",
    viewAllModels: "Full leaderboard",
    gatewaysSectionTitle: "Gateways",
    gatewaysSectionNote: "Latency, uptime and price. AI is my own gateway.",
    viewAllGateways: "All gateways",
    plansSectionTitle: "Coding plans",
    plansSectionNote: "Quotas, supported models and limits.",
    viewAllPlans: "All plans",
    switchCardTitle: "Smart Model Alternatives",
    switchCardDesc: "Find budget-friendly alternatives that deliver 90% of the capability at 10% of the cost.",
    changesCardTitle: "Price Drop Tracker",
    changesCardDesc: "Track vendor price cuts and promotional discounts in real time to capture compute dividends."
  },
  readiness: {
    title: "Solopreneur Readiness Assessment",
    subtitle: "12 scenario questions to see what you are still missing for a one-person company.",
    seoTitle: "Solopreneur Readiness Assessment - are you ready to go solo?",
    seoDescription: "For developers, PMs and other IT people: 12 scenario questions on validation, delivery, distribution, cost and mindset.",
    authorName: "Coller",
    authorInitial: "C",
    testedCount: "{count} people tested",
    badgeMeta: "12 scenario questions \xB7 about 3 minutes",
    testedShort: "{count} tested",
    chooseRole: "Pick your role",
    whyTitle: "Why questions by role, not a personality test",
    whyP1: "Most startup assessments ask whether you have leadership or can endure solitude, and everyone picks the flattering answer. I care more about this: the role you came from tends to leave habits behind.",
    whyP2Prefix: "Below are the 12 questions for",
    whyP2Suffix: "When you finish you get a five-dimension radar and a 7-day action list for your weakest dimension.",
    resumeBtn: "Continue {role} progress (answered {answered} / {total})",
    restartBtn: "Start over",
    startBtn: "Start the {role} assessment",
    dimensionsTitle: "What the five dimensions measure",
    currentRole: "Current role:",
    switchRole: "Switch role",
    progressLabel: "Progress: question {current} / {total}",
    jumpTip: "Jump to question {index}",
    questionIndex: "Question {current} / {total}",
    focusLabel: "Focus:",
    realFeedback: "Real take:",
    prevBtn: "Previous",
    nextBtn: "Next",
    viewReport: "View full diagnostic report",
    radarLabel: "One-person company five-dimension capability radar",
    percentilePrefix: "Higher than",
    percentileSuffix: "% of testers in this role",
    adviceLabel: "Coller's note:",
    dimensionsHeading: "Five dimensions",
    fullScoreNote: "Out of 100",
    scoreValue: "{score} pts",
    archetypeHeading: "Which type are you",
    prosLabel: "Your strengths:",
    consLabel: "Common pitfalls:",
    warningHeading: "Watch out",
    strongestLabel: "Strongest dimension",
    weakestLabel: "Weakest dimension",
    roleSpecific: "{role} track",
    hazardHeading: "Common habits for this role",
    prescriptionHeading: "What to change",
    blindspotHeading: "Weakest dimension \xB7 7-day action plan",
    blindspotIntro: "Targeting your lowest-scoring dimension:",
    causeLabel: "Why:",
    nextSevenDays: "What you can do in the next 7 days",
    arsenalHeading: "Tools and guides for this gap:",
    communityBadge: "Talk to Coller",
    communityTitle: "Want to talk one-person companies with other {role} folks?",
    communityDesc: "Add me on WeChat and I will pull you into the one-person company group.",
    communityBtn: "Add Coller on WeChat / Join group",
    restartOther: "Take it again with another role",
    copyBtn: "Copy result",
    copiedBtn: "Copied",
    toolboxBtn: "Toolkit",
    copyHeader: "\u3010One-Person Company Readiness \xB7 hoxi.ai\u3011",
    copyRole: "Role: {role}",
    copyScore: "Overall: {score} / 100 \xB7 {tier}",
    copyPercentile: "Same-role ranking: above {percentile}% of testers",
    copyArchetype: "Archetype: {name} ({tagline})",
    copyDivider: "--------------------------",
    copyDimensionsTitle: "Five-dimension breakdown:",
    copyDimension: "\u2022 {name}: {score} pts",
    copyStrongest: "Top strength: {name}",
    copyWeakest: "Weakest: {name}",
    copyAdvice: "Coller's note: {advice}",
    copyUrl: "Assessment: https://hoxi.ai/readiness"
  },
  projects: {
    title: "Projects",
    subtitle: "AI workspaces, gateways, and SaaS products built & operated solo.",
    seoTitle: "Solo-Built AI Products & Open Source Projects",
    seoDescription: "Coller's AI products: Hoxi Desktop, Hoxi AI, Qingpu AI and apay.",
    badge: "PROJECTS",
    highlightsLabel: "Highlights",
    internalUse: "Internal Core",
    recommendBtn: "Connect",
    recommendTip: "Showcasing my own products. Reach out if you're building solo too.",
    feedbackTitle: "Send Feedback to Author",
    feedbackDesc: "Share feature requests, partnership ideas, or questions directly with me.",
    feedbackPlaceholder: "Write your thoughts or ideas here...",
    submitFeedback: "Submit",
    contactAuthor: "Contact Author",
    viewSite: "Visit Site",
    viewGithub: "GitHub",
    viewStory: "About",
    modelUsed: "Core Models",
    monthlyCost: "Compute Bill",
    techStack: "Tech Stack",
    author: "Creator",
    emptyTitle: "No projects yet",
    emptyDesc: "Nothing in this category yet."
  },
  comment: {
    title: "Discussion & Comments",
    subtitle: "Share your thoughts, experiences and feedback.",
    placeholder: "Leave a comment...",
    authorPlaceholder: "Your nickname *",
    emailPlaceholder: "Email (optional, for avatar)",
    urlPlaceholder: "Website or GitHub (optional)",
    loginWithGithub: "Sign in with GitHub",
    submit: "Post Comment",
    submitting: "Submitting...",
    reply: "Reply",
    cancel: "Cancel",
    replyTo: "Reply to {name}",
    empty: "No comments yet. Be the first to share your thoughts.",
    success: "Comment posted successfully",
    pendingNotice: "Comment submitted. It will be published after review.",
    underReview: "Under Review",
    loginAs: "Logged in as: {name}",
    requireNickname: "Please enter your nickname",
    v2exDiscussion: "From V2EX community discussion, click to view topic",
    linuxdoDiscussion: "From LINUX DO community discussion, click to view topic",
    viewOriginal: "Original Topic"
  },
  blog: {
    notFound: "Post Not Found",
    notFoundDesc: "This post might have been removed or the URL is incorrect.",
    returnBlog: "Back to Blog"
  },
  layout: {
    communityBtn: "Contact",
    communityShort: "Contact",
    userMenu: "Account & contact menu",
    githubTitle: "GitHub Repository",
    toggleTheme: "Toggle color mode",
    switchLang: "Switch language",
    expandSavingsMenu: "Expand savings menu"
  },
  contactModal: {
    badge: "Direct Contact & Community",
    title: "Contact & Connect",
    subtitle: "Reach out directly via WeChat or Email, or follow our official updates.",
    wechatTitle: "WeChat & Community",
    wechatBadge: "Direct Chat",
    wechatIdLabel: "WeChat:",
    copyWechat: "Copy ID",
    copied: "Copied",
    emailLabel: "Email:",
    copyEmail: "Copy Email",
    tip1: 'Note "Hoxi" when adding on WeChat to join the Solo Builder group',
    tip2: "Discuss indie products, AI engineering, and global SaaS",
    tip3: "Direct exchange with zero spam",
    oaTitle: "WeChat Official Account",
    oaBadge: "Deep Dives",
    oaScanTitle: "Follow [Hoxi AI]",
    oaScanDesc: "Scan with WeChat to read in-depth model benchmarks and solo builder field notes.",
    oaScanNote: 'Reply "Group" to get the community invite',
    oaFooter: "Regular breakdowns of real product metrics and LLM selection",
    footerLeft: "Direct communication \xB7 Zero spam",
    closeLabel: "Close",
    tabInquiry: "Leave a Message",
    tabHistory: "My Inquiries",
    tabDirect: "WeChat & Direct",
    catPresales: "Product Inquiry",
    catCooperation: "Partnership",
    catFeedback: "Tool Submission & Feedback",
    catTechnical: "Technical Support",
    nameLabel: "Your Name",
    namePlaceholder: "e.g. Alex / Indie Builder",
    contactEmailLabel: "Email Address",
    contactEmailPlaceholder: "Email for receiving our reply (Recommended)",
    contactInfoLabel: "WeChat / Telegram / Other",
    contactInfoPlaceholder: "Optional, e.g. WeChat ID or Telegram handle",
    contentLabel: "Message",
    contentPlaceholder: "Tell us about your question, partnership idea, or issue. We will reply and notify you via email...",
    submitBtn: "Submit Inquiry",
    submittingBtn: "Submitting...",
    submitSuccessTitle: "Inquiry Submitted!",
    submitSuccessDesc: "Your reference number is {ticketNo}. You will receive an email when we reply, or you can track and reply right here anytime.",
    viewThreadBtn: "View Thread",
    newInquiryBtn: "New Inquiry",
    emptyHistory: "No inquiries yet",
    emptyHistoryHint: "Once submitted, your inquiries are saved in this browser or linked to your account.",
    lookupPlaceholder: "Reference # (e.g. TK-20261025-1234)",
    backToList: "Back to list",
    replyPlaceholder: "Write a follow-up message...",
    sendReplyBtn: "Send Reply",
    sendingReplyBtn: "Sending...",
    statusOpen: "Pending",
    statusInProgress: "In Progress",
    statusAutoResolved: "Auto-Answered",
    statusResolved: "Replied",
    statusClosed: "Closed",
    senderUser: "Me",
    senderAdmin: "Coller (Founder)",
    senderBot: "AI Assistant",
    senderSystem: "System"
  },
  homeCta: {
    downloadMac: "Download Hoxi for macOS",
    leaderboard: "Model Leaderboard",
    savings: "Compute Savings",
    readiness: "Solopreneur Test",
    blog: "Engineering Blog",
    endorsement: "Native Wails + OpenCode runtime \xB7 Git Worktree isolation"
  },
  desktop: {
    downloadMacArm64: "Download for macOS (Apple Silicon)",
    downloadWindows: "Download for Windows (x64)",
    downloadLinux: "Download for Linux (x64)",
    downloadDefault: "Download Hoxi Desktop",
    platformMac: "macOS (Apple Silicon)",
    platformWindows: "Windows (x64)",
    platformLinux: "Linux (x64)",
    osMac: "macOS",
    osWindows: "Windows",
    osLinux: "Linux",
    morePlatforms: "Other Platforms",
    mirrorGlobal: "GitHub Releases",
    sourceCode: "GitHub Source",
    archBadge: "WORKSPACE",
    archTitle: "Three-Pane Native Workspace",
    archSubtitle: "Worktrees on the left, live timeline in the center, diffs & terminal on the right.",
    mockLeftTitle: "WORKTREES",
    mockCenterTitle: "TIMELINE \xB7 STEER",
    mockRightTitle: "DIFFS \xB7 MEMORY \xB7 XTERM",
    mockStatusBusy: "Running",
    mockSteerHint: "Steer mid-stream or press Esc to stop...",
    mockGateTitle: "Safety Gate \xB7 Ask",
    mockMergeBtn: "1-Click Merge",
    soloBannerBadge: "SOLO BUILDER",
    soloBannerTitle: "Building Products Solo?",
    soloBannerDesc: "Readiness assessment, compute cost playbooks, indie toolstack, and field notes.",
    soloBannerCta: "Explore Solo Portal \u2192",
    bentoDesktopTitle: "Hoxi Desktop",
    bentoDesktopDesc: "Run multiple coding agents side by side. Every session gets an isolated Git worktree.",
    bentoArchNote: "Native support for macOS (Apple Silicon), Windows (x64), Linux (x64) \xB7 Bundled OpenCode Runtime",
    bentoCliTitle: "Multi-CLI Handoff",
    bentoCliDesc: "Supervises OpenCode natively with 1-click handoff to Claude Code, Codex & Gemini CLI.",
    bentoMobileTitle: "Mobile Remote Approval & Control",
    bentoMobileBadge: "Coming Soon",
    bentoMobileDesc: "Scan to pair with Hoxi Desktop \u2014 review diffs, approve safety gates, and steer sessions from your phone.",
    bentoModelTitle: "50+ Models & Gateways",
    bentoModelDesc: "Live benchmarks at cost \u2014 connect high-speed gateways in 1 click or bring your own key.",
    bentoOpenTitle: "100% Open Source",
    bentoOpenDesc: "Code and keys stay on your machine. Zero black boxes, zero hidden markup.",
    pillarsBadge: "BUILT DIFFERENTLY",
    pillarsTitle: "Built to work for you, not lock you in",
    pillarsSub: "Parallel branches, transparent pricing, and full control across desktop & mobile.",
    p1Tag: "Parallel Agents",
    p1Title: "One window, multiple agents",
    p1Desc: "Every session runs in an isolated Git worktree. Ship features in parallel and merge with visual diffs.",
    p2Tag: "Aligned Pricing",
    p2Title: "Models at cost. No lock-in.",
    p2Desc: "Bring your own API keys for free, or connect verified high-speed gateways to save 35%\u201360%.",
    p3Tag: "Cross-Device Control",
    p3Title: "Persistent memory & mobile safety gates",
    p3Desc: "Local Markdown memory preserves architecture across sessions; high-risk commands wait for desktop or mobile approval.",
    tabWorktree: "01 \xB7 Worktrees",
    tabMemory: "02 \xB7 Memory",
    tabSteer: "03 \xB7 Live Steer",
    tabHandoff: "04 \xB7 CLI Handoff",
    tabMobile: "05 \xB7 Mobile Sync",
    faqBadge: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Quick answers on architecture, pricing, and privacy.",
    faq1Q: "What is Hoxi Desktop and how does it relate to OpenCode?",
    faq1A: "Hoxi is a native macOS workspace built on Wails v2. It supervises the official OpenCode engine while adding Git worktree isolation, persistent memory, CLI handoff, and model benchmarks.",
    faq2Q: "Why isolate every session in a Git Worktree?",
    faq2A: "So multiple agents can edit code simultaneously without file conflicts. Review diffs and merge cleanly when done.",
    faq3Q: "How does pricing work? Can I bring my own API key?",
    faq3A: "Hoxi Desktop is 100% free and open source. Use your own API keys with zero markup, or connect verified gateways to cut token spend by 35%\u201360%.",
    faq4Q: "Are my code and API keys private?",
    faq4A: "Yes. All code, memory files, and keys stay on your local machine. Destructive shell commands (rm, sudo, force-push) are intercepted for human approval.",
    faq5Q: "How does the Hoxi Mobile app connect to my computer? Does my code pass through third-party servers?",
    faq5A: "Scan the pairing QR in Hoxi Desktop (Settings \u2192 Remote) to connect over LAN (:5417) first, with automatic fallback to your own Cloudflare Tunnel (:5418) or GoPanel reverse tunnel. Push notifications only carry pending counts \u2014 never code, paths, or commands."
  },
  download: {
    title: "Download Hoxi",
    subtitle: "Parallel coding agents on desktop, remote approval and voice dispatch on mobile. Desktop installers, checksums and release notes are synced live from my release pipeline; iOS and Android apps are coming soon.",
    seoTitle: "Download Hoxi \u2014 macOS / Windows / Linux Desktop & iOS / Android Mobile | Hoxi AI",
    seoDescription: "Official download page for Hoxi: macOS (Apple Silicon), Windows (x64) and Linux (x64) desktop installers, SHA-256 checksums, release history, and the upcoming Hoxi Mobile (iOS / Android) preview.",
    latestLine: "Latest release v{version} \xB7 {date}",
    currentDevice: "This device",
    versionLabel: "Version",
    releasedLabel: "Released",
    sizeLabel: "Size",
    minSystem: "Requires macOS {version} or later",
    archMac: "Apple Silicon (arm64) \xB7 .dmg",
    archWindows: "x64 \xB7 .zip",
    archLinux: "x64 \xB7 .tar.gz",
    altMirror: "Alternate mirror",
    browseReleases: "Browse releases",
    checksumNote: "File sizes and SHA-256 checksums come straight from the release system, so you can verify each installer after downloading.",
    desktopSectionTitle: "Hoxi Desktop \xB7 Native Workspace",
    mobileBadge: "COMING SOON \xB7 MOBILE PREVIEW",
    mobileTitle: "Hoxi Mobile \xB7 iOS & Android Companion",
    mobileSubtitle: "Stay in control away from your desk: pair with Hoxi Desktop and GoPanel servers to inspect live coding sessions, review Git diffs, and approve safety gates on the go.",
    mobileIosTitle: "iOS (iPhone)",
    mobileIosArch: "App Store / TestFlight \xB7 APNs approval count push & native voice",
    mobileAndroidTitle: "Android",
    mobileAndroidArch: "APK Direct Download \xB7 LAN & tunnel auto-routing",
    mobileStatusBadge: "Coming Soon",
    mobileF1Title: "QR Pairing \xB7 LAN-First Routing",
    mobileF1Desc: "Scan the QR code in Hoxi Desktop (Settings \u2192 Remote). Automatically prefers local network (:5417) and falls back to Cloudflare Tunnel (:5418) or GoPanel relay when away.",
    mobileF2Title: "Remote PreToolUse Approvals & Safety Cards",
    mobileF2Desc: "When a desktop agent hits a safety gate, your phone receives a count-only push alert. Open the app to inspect context and approve or deny in one tap.",
    mobileF3Title: "4-Tab Mobile Workspace",
    mobileF3Desc: "Chat (push-to-talk, camera, tool intents) \xB7 Workspace (coding sessions, Git diffs, GoPanel ops) \xB7 Solo Hub (leaderboards & readiness test) \xB7 Me (daily check-in points).",
    mobileNotifyBtn: "Join Group for Mobile Beta Access",
    historyTitle: "Release history",
    historySub: "Release notes and per-platform installers, synced from the published release records.",
    historyNoNotes: "No release notes for this version.",
    historyEmpty: "No releases published yet.",
    allVersions: "All versions & mobile preview"
  },
  soloPage: {
    badge: "One-Person AI Company \xB7 Field Guide & Benchmarks",
    titleLine1: "Ship Like a Team of Ten,",
    titleLine2: "Run on a Solo Budget",
    subtitle: "AI readiness assessment, verified LLM & gateway cost playbooks, full-stack indie toolstack, and real-world solopreneur engineering notes.",
    endorsement: "Real-world solo builder logs \xB7 Salute to every indie developer shipping in public",
    seoTitle: "Solo Builder Hub \u2014 One-Person AI Company Guide | Hoxi AI",
    seoDescription: "AI readiness assessment, LLM cost optimization, indie developer toolstack, and engineering notes for one-person AI companies."
  },
  homeSidebar: {
    authorAvatar: "H",
    authorName: "Coller",
    authorInitial: "C",
    authorRole: "Creator of Hoxi AI",
    communityBtn: "Contact & Connect",
    aboutMe: "About Me",
    columnBadge: "Serial Column",
    columnStatus: "Ongoing",
    columnTitle: "Refactoring the Self",
    columnSub: "Engineering Mental Models",
    columnDesc: "Field notes on mental models and AI-native workflow refactoring from an engineer's perspective.",
    columnCta: "Read the Series",
    projectsTitle: "Active Projects",
    projectsAll: "All Projects",
    dataTitle: "Dataset",
    dataSummary: "Tracking {models} models across {vendors} vendors",
    blogTitle: "Engineering & Solopreneur Blog",
    blogAll: "All Posts"
  },
  homeReadiness: {
    badge: "Readiness Assessment",
    title: "Ready to Build a One-Person AI Company?",
    subtitle: "12 real-world scenario questions to uncover your blind spots across validation, delivery, distribution, compute costs, and resilience.",
    roleLabel: "Tailored by role:",
    roleEng: "Engineer",
    rolePm: "Product Manager",
    roleDesign: "Designer",
    roleGrowth: "Growth & Ops",
    startBtn: "Start Assessment",
    durationNote: "No login required \xB7 ~3 mins",
    dimTitle: "5 Core Dimensions",
    dimSample: "Preview",
    dimCta: "See what each dimension measures \u2192",
    dim1Name: "Validation & Monetization",
    dim1Focus: "MVP Paid Validation",
    dim2Name: "Full-Stack AI Delivery",
    dim2Focus: "End-to-End Shipping",
    dim3Name: "Distribution & Growth",
    dim3Focus: "Cold-Start Traction",
    dim4Name: "Compute Cost Leverage",
    dim4Focus: "Token Economics",
    dim5Name: "Mental Runway & Grit",
    dim5Focus: "Stop-Loss & Focus"
  },
  homeSavings: {
    title: "Compute Cost & Model Comparison",
    subtitle: "Official floor prices, high-speed gateways, and IDE coding plans compared side by side.",
    viewAll: "View Full Guide",
    dataGlance: "Verified Benchmarks & Pricing",
    tabGateways: "Gateways",
    tabModels: "Models",
    tabPlans: "Coding Plans",
    colGateway: "Gateway",
    colLatency: "Latency",
    colUptime: "Uptime",
    colPrice: "Ref Price",
    colAction: "Action",
    colModel: "Model",
    colScenes: "Badges / Scenes",
    colScore: "Overall",
    colBlended: "Blended / 1M",
    configureBtn: "Details & Setup",
    detailsLink: "Details \u2192",
    quotaLink: "View Quotas \u2192",
    overallPrefix: "Overall"
  },
  homeTools: {
    title: "Indie Developer Toolkit",
    viewAll: "All {count} Tools",
    freeStart: "Free tier available",
    visitSite: "Website"
  },
  authDesktop: {
    title: "Authorize Hoxi Desktop",
    invalidState: "Invalid authorization link (missing or malformed state parameter). Please restart authorization from the Hoxi Desktop app.",
    cancelled: "Authorization cancelled. You may close this tab and return to Hoxi Desktop.",
    checkingSession: "Verifying your account session...",
    redirectingLogin: "No active session detected, redirecting to sign in...",
    subtitle: "Hoxi Desktop is requesting permission to link your account and sync workspace capabilities.",
    accountLabel: "Authorized Account",
    activeBadge: "Active",
    perm1: "One-click access to cloud model gateways and quota sync",
    perm2: "Receive automatic desktop updates and multi-region mirror routing",
    singleDeviceNote: "Note: Completing authorization issues an exclusive device token. Any previous active session on another device will be automatically revoked.",
    submitting: "Authorizing...",
    confirmBtn: "Authorize Desktop App",
    cancelBtn: "Cancel",
    doneTitle: "Authorization Successful",
    doneDesc: "Device token issued. Launching Hoxi Desktop automatically...",
    openAppBtn: "Open Hoxi Desktop Now",
    closePageHint: "If Hoxi Desktop has already signed in, you can safely close this tab."
  },
  auth: {
    loginTitle: "Sign in to Hoxi",
    loginSubtitle: "Sign in with your developer account to sync Hoxi Desktop and cloud capabilities",
    registerTitle: "Create your Hoxi account",
    registerSubtitle: "Register to authorize Hoxi Desktop and start your agentic engineering workflow",
    desktopRedirectHint: "You will be automatically redirected back to Hoxi Desktop authorization after signing in",
    continueWithGithub: "Continue with GitHub",
    continueWithGoogle: "Continue with Google",
    orWithEmail: "Or continue with email",
    nickname: "Nickname (Optional)",
    nicknamePlaceholder: "Your developer handle",
    email: "Email",
    emailPlaceholder: "Enter your email address",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    signIn: "Sign In",
    signingIn: "Signing in...",
    createAccount: "Create Account",
    creatingAccount: "Creating account...",
    noAccount: "Don't have an account?",
    alreadyHaveAccount: "Already have an account?",
    loginFailed: "Sign in failed. Please check your email and password.",
    registerFailed: "Registration failed. Please check your details and try again.",
    oauthGithubFailed: "GitHub sign-in could not be completed. Please try again or use email.",
    oauthGoogleFailed: "Google sign-in could not be completed. Please try again or use email.",
    oauthEmailUnverified: "Your OAuth provider email is unverified. Please verify it or sign in with email and password."
  },
  authMobile: {
    invalidState: "Invalid sign-in link",
    invalidStateHint: "Please start sign-in again from the Hoxi app",
    exchanging: "Handing your session to the app\u2026",
    readyTitle: "Session ready",
    readyDesc: "Signed in as {account}. Return to the Hoxi app to continue",
    openAppBtn: "Open Hoxi",
    closeHint: "If the app did not open automatically, tap the button above, then close this page",
    failedTitle: "Sign-in did not complete",
    retryBtn: "Retry"
  },
  site: {
    name: "Hoxi"
  },
  member: {
    shell: {
      eyebrow: "Hoxi Member Center",
      title: "Member Center",
      subtitle: "Manage your check-in points, compute balance, API keys, and usage logs",
      navEntry: "Member Center",
      mainNavigation: "Navigation",
      exploreModels: "Explore Models & Savings",
      guest: "Hoxi Builder",
      rateTitle: "Points Settlement Rate",
      rateHint: "Points are credited directly into your wallet points pool and deducted automatically on model calls."
    },
    nav: {
      dashboard: "Overview",
      rewards: "Check-in & Points",
      models: "Callable Models",
      keys: "API Keys",
      billing: "Points & Usage Logs",
      tickets: "Inquiries & Tickets",
      account: "Account Settings"
    },
    common: {
      pointsUnit: "pts",
      loading: "Loading...",
      retry: "Retry",
      actionFailed: "Action failed, please try again",
      gatewayUnavailable: "Compute gateway is currently unreachable. Live balance and key management are temporarily unavailable.",
      verifyEmailHint: "Your email address is not verified yet. Verify your email to claim daily check-in points.",
      goVerify: "Verify Now"
    },
    dashboard: {
      title: "Member Overview",
      subtitle: "View your live compute points balance, daily check-in progress, and model usage statistics",
      hello: "Hello, {name}",
      activeDays: "Activity & Check-in Heatmap (Last 52 Weeks)",
      less: "Less",
      more: "More",
      tokenUsage: "Total Token Usage",
      input: "Input Tokens",
      output: "Output Tokens",
      chatCount: "Total Calls",
      availablePoints: "Available Points",
      todayCheckin: "Daily Check-in",
      earnedPoints: "Total Earned Points",
      spentPoints: "Total Spent Points",
      pendingPoints: "Pending Delivery",
      allDelivered: "All rewards credited",
      consumptionOrder: "Settlement Pipeline",
      viewBilling: "View Ledger",
      viewAll: "View All",
      manage: "Manage",
      recentTransactions: "Recent Points & Usage Activity",
      noRecentTransactions: "No recent points or usage records",
      usageTitle: "Model Usage Statistics",
      usageSubtitle: "Aggregated usage across your Hoxi API keys within the selected window",
      requestsCount: "Requests",
      tokensCount: "Total Tokens",
      rangePointsSpent: "Points Spent",
      modelBreakdown: "Breakdown by Model",
      noUsageYet: "No model calls recorded yet. Create an API key to start calling models from Hoxi or any OpenAI-compatible client.",
      quickBindTitle: "Use with Hoxi Desktop & Mobile",
      quickBindDesc: "Copy the gateway endpoint below and your API key into Hoxi Desktop or Mobile (Me -> Bind AI Model) to spend points directly."
    },
    rewards: {
      title: "Daily Check-in & Points",
      subtitle: "Check in daily to earn real compute points and unlock streak milestone bonuses",
      daysStreak: "day streak",
      maxStreak: "Best streak",
      todayReward: "Today",
      tomorrowReward: "Next",
      checkInNow: "Check In & Claim Points",
      checkedIn: "Checked In Today",
      deliveryStatus: "Delivery Status",
      statusSucceeded: "Credited to compute",
      statusPending: "Delivering",
      statusBlocked: "Pending Admin Review",
      calendarTitle: "Check-in Calendar",
      milestonesTitle: "Streak Milestones",
      ruleNote: "Base +{base} pts/day, increasing by +{step} pt per consecutive day up to {max} pts/day, plus milestone bonuses.",
      ruleRandomNote: "Daily check-in awards a random +{min}~{max} pts mystery box, plus extra milestone bonuses on streak milestones.",
      historyTitle: "Recent Check-in & Reward History",
      noHistory: "No check-in records yet. Click the button above to claim your first daily reward.",
      colDate: "Date",
      colPoints: "Points Earned"
    },
    models: {
      title: "Callable Models & Points Pricing",
      subtitle: "Live callable models in your Hoxi tenant group (10,000 pts = $1.00 USD)",
      searchPlaceholder: "Search model name or vendor...",
      keyGroupLabel: "Key Group",
      countLabel: "{count} callable models",
      empty: "No matching models found",
      colModel: "Model",
      colVendor: "Vendor",
      colMode: "Billing Mode",
      colInputPoints: "Input Price (per 1M Tokens)",
      colOutputPoints: "Output Price (per 1M Tokens)"
    },
    keys: {
      title: "API Keys",
      subtitle: "Manage API keys bound to your Hoxi points wallet with rotation, status toggle, and usage tracking",
      endpointLabel: "OpenAI-Compatible Base Endpoint",
      namePlaceholder: "Key name (e.g., Hoxi Mac)",
      createBtn: "Create Key",
      secretBannerTitle: "Copy and store your full API key now (shown once)",
      copy: "Copy",
      copied: "Copied to clipboard",
      hide: "Dismiss",
      empty: 'No API keys yet. Click "Create Key" above to generate your first key.',
      colName: "Name",
      colKey: "Masked Key",
      colStatus: "Status",
      colUsedPoints: "Used Points",
      colActions: "Actions",
      statusEnabled: "Active",
      statusDisabled: "Disabled",
      reveal: "Reveal",
      enable: "Enable",
      disable: "Disable",
      rotate: "Rotate",
      delete: "Delete"
    },
    billing: {
      title: "Points & Usage Ledger",
      subtitle: "Audit every model invocation cost and points credit transaction",
      usageProgress: "Points Usage Progress",
      usageTrend: "Requests & Points Trend",
      requestsVsCost: "Daily API requests vs points spent in window",
      modelDistribution: "Model Distribution",
      byEstimatedSpending: "By points spent in window",
      tabConsumption: "Model Consumption",
      tabRewards: "Points Credits",
      emptyConsumption: "No model consumption records yet",
      emptyRewards: "No points credit records yet",
      colTime: "Time",
      colTokens: "Prompt / Completion Tokens",
      colPointsSpent: "Points Spent",
      colRemark: "Description",
      colPointsDelta: "Points Delta",
      colAfterPoints: "Balance After"
    },
    account: {
      title: "Account & Security Settings",
      subtitle: "Manage your Hoxi profile, password, and active session",
      profileTitle: "Profile Information",
      emailLabel: "Email Address",
      emailVerifiedStatus: "Email verified",
      emailUnverifiedHint: "Your email is not verified yet. Verify it to claim daily check-in points",
      resendVerify: "Resend verification email",
      resendingVerify: "Sending...",
      resendVerifyCooldown: "Retry in {sec}s",
      resendVerifySent: "Verification email sent. Please check your inbox",
      nicknameLabel: "Developer Nickname",
      saveProfile: "Save Profile",
      passwordTitle: "Change Password",
      passwordHint: "Updating your password regularly helps protect your compute points and API keys.",
      changePassword: "Change Password",
      oldPassword: "Current Password",
      newPassword: "New Password",
      confirmNewPassword: "Confirm New Password",
      passwordMismatch: "New passwords do not match",
      updatePassword: "Update Password",
      accountStatus: "Account & Gateway Status",
      activeStatus: "Active \xB7 Points Pool Ready",
      saved: "Changes saved",
      logoutTitle: "Sign Out",
      logoutDesc: "End your current browser session",
      logoutBtn: "Sign Out"
    },
    tickets: {
      title: "Inquiries & Support Tickets",
      subtitle: "Track your pre-sales questions, partnership proposals, and technical support threads",
      createBtn: "New Inquiry / Ticket",
      empty: "No inquiries or tickets yet",
      emptyDesc: "Have a product question, tool submission, partnership idea, or gateway issue? Start a conversation anytime.",
      filterAll: "All Statuses",
      colTicketNo: "Reference #",
      colCategory: "Category",
      colTitle: "Subject",
      colStatus: "Status",
      colUpdated: "Last Updated",
      titleLabel: "Subject",
      titlePlaceholder: "Briefly summarize your question or proposal",
      detailTitle: "Conversation Thread"
    }
  },
  newsletter: {
    badge: "EMAIL UPDATES",
    title: "Subscribe to Solopreneur Playbooks & Model Price Drops",
    subtitle: "Get practical AI workflows, benchmark deep-dives, and compute cost-saving alerts delivered to your inbox. No spam, one-click unsubscribe anytime.",
    placeholder: "Enter your email address",
    button: "Subscribe",
    submitting: "Subscribing...",
    success: "Subscribed! We will notify your inbox when new updates drop.",
    error: "Subscription failed. Please check your email and try again."
  }
};
const zh = {
  brand: {
    name: "Hoxi",
    tagline: "\u539F\u751F AI \u7814\u53D1\u5DE5\u4F5C\u53F0 \xB7 \u4E00\u4EBA\u516C\u53F8\u7B97\u529B\u4E0E\u6A21\u578B\u6307\u5357",
    headerSub: "hoxi.ai \xB7 \u539F\u751F AI \u7814\u53D1\u5DE5\u4F5C\u53F0"
  },
  nav: {
    home: "Hoxi Code",
    soloBuilder: "\u4E00\u4EBA\u516C\u53F8",
    models: "\u6A21\u578B\u80FD\u529B",
    gateways: "\u4E2D\u8F6C\u7AD9",
    plans: "Coding Plan",
    tools: "\u5DE5\u5177\u7BB1",
    skills: "\u6280\u80FD\u5E93",
    projects: "\u5B9E\u6218\u9879\u76EE",
    posts: "\u535A\u5BA2",
    download: "\u4E0B\u8F7D",
    about: "\u5173\u4E8E",
    coding: "\u4E2A\u4EBA\u4F53\u611F\u6392\u540D",
    cheap: "\u7701\u94B1\u6307\u5357",
    savings: "\u7701\u94B1\u6307\u5357",
    savingsMenuTitle: "\u7701\u94B1\u6307\u5357",
    savingsMenuNote: "\u4E00\u4EBA\u516C\u53F8\u7B97\u529B\u964D\u672C\u4E0E\u9009\u578B\u65B9\u6848",
    allSavings: "\u67E5\u770B\u5168\u90E8",
    modelsDesc: "\u80FD\u529B\u8BC4\u5206\u4E0E\u5B98\u65B9\u4EF7\u683C",
    gatewaysDesc: "\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E\u5355\u4EF7",
    plansDesc: "\u5B98\u65B9\u8BA2\u9605\u4E0E\u8D44\u6E90\u5305\u7684\u989D\u5EA6",
    switchDesc: "\u9AD8\u4EF7\u6A21\u578B\u964D\u672C\u5E73\u66FF\u8DEF\u7EBF",
    changesDesc: "\u5404\u5927\u5382\u5546\u6700\u65B0\u964D\u4EF7\u4E0E\u8C03\u4EF7\u6D41\u6C34",
    switch: "\u5E73\u66FF\u65B9\u6848",
    compare: "\u6A21\u578B\u5BF9\u6BD4",
    changes: "\u8C03\u4EF7\u8FFD\u8E2A",
    readiness: "\u80FD\u529B\u6D4B\u8BC4",
    readinessBadge: "\u6D4B\u6D4B\u770B",
    readinessDesc: "4 \u5927\u5C97\u4F4D 12 \u9053\u60C5\u666F\u9898 \xB7 \u4E94\u7EF4\u80FD\u529B\u96F7\u8FBE",
    soloMenuTitle: "\u4E00\u4EBA\u516C\u53F8",
    allSolo: "\u8FDB\u5165\u95E8\u6237",
    soloPortal: "\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u95E8\u6237",
    soloPortalDesc: "\u56DB\u6B65\u95ED\u73AF\u52A8\u7EBF\u3001\u5B9E\u6218\u535A\u5BA2\u4E0E\u5DE5\u5177\u6808",
    soloColumn: "\u300A\u5E95\u5C42\u91CD\u6784\u300B\u4E13\u680F",
    soloColumnDesc: "\u4E00\u4EBA\u516C\u53F8\u8BA4\u77E5\u4E0E\u6267\u884C\u529B\u957F\u6587\u8FDE\u8F7D",
    toolsMenuTitle: "\u5DE5\u5177\u7BB1",
    toolsCatalog: "Agent \u5DE5\u5177\u4E0E API",
    allTools: "\u67E5\u770B\u5168\u90E8",
    toolsDesc: "\u6309\u6B21\u8BA1\u8D39\u7684 Agent \u6570\u636E\u63A5\u53E3\u4E0E\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u5DE5\u5177\u5E93",
    skillsDesc: "Hoxi \u684C\u9762\u7AEF\u53EF\u4E00\u952E\u5B89\u88C5\u7684 Agent \u6280\u80FD",
    projectsDesc: "\u7ED3\u5408 AI \u72EC\u7ACB\u5F00\u53D1\u5E76\u843D\u5730\u7684\u771F\u5B9E\u4EA7\u54C1\u77E9\u9635",
    openMenu: "\u6253\u5F00\u83DC\u5355",
    closeMenu: "\u5173\u95ED\u83DC\u5355",
    comingSoon: "\u5373\u5C06\u4E0A\u7EBF"
  },
  footer: {
    rights: "\u4FDD\u7559\u6240\u6709\u6743\u5229",
    dataNote: "\u4EF7\u683C\u4E0E\u8BC4\u5206\u5747\u6807\u6CE8\u6765\u6E90\u4E0E\u66F4\u65B0\u65F6\u95F4",
    community: "\u4E00\u4EBA\u516C\u53F8\u793E\u7FA4",
    privacy: "\u9690\u79C1\u653F\u7B56",
    terms: "\u670D\u52A1\u6761\u6B3E"
  },
  common: {
    updatedAt: "\u6570\u636E\u66F4\u65B0\u4E8E {date}",
    viewAll: "\u67E5\u770B\u5168\u90E8",
    readMore: "\u7EE7\u7EED\u9605\u8BFB",
    empty: "\u6682\u65E0\u6570\u636E",
    source: "\u6570\u636E\u6765\u6E90",
    learnMore: "\u4E86\u89E3\u66F4\u591A"
  },
  plans: {
    title: "AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4",
    seoTitle: "AI \u7F16\u7A0B\u5957\u9910\u4E0E\u5B98\u65B9\u8BA2\u9605\u5BF9\u6BD4 - Coding Plan & Token Plan",
    seoDescription: "\u5BF9\u6BD4\u5404\u5BB6 AI \u7F16\u7A0B\u8BA2\u9605 (Coding Plan) \u4E0E Token \u8D44\u6E90\u5305\u7684\u4EF7\u683C\u3001\u989D\u5EA6\u9650\u5236\u3001\u652F\u6301\u6A21\u578B\u4E0E\u4F18\u7F3A\u70B9"
  },
  skills: {
    title: "Hoxi Agent \u6280\u80FD\u5E93",
    subtitle: "\u53EF\u76F4\u63A5\u88C5\u8FDB Hoxi \u684C\u9762\u7AEF\u7684 Agent Skill\uFF1A\u6BCF\u6761\u53EA\u53D1\u5E03\u5143\u6570\u636E\uFF0C\u5B89\u88C5\u65F6\u4E0B\u8F7D SKILL.md\u3001\u6821\u9A8C SHA-256 \u540E\u5199\u5165\u672C\u5730",
    seoTitle: "Hoxi Agent \u6280\u80FD\u5E93 - \u53EF\u76F4\u63A5\u5B89\u88C5\u7684 Agent Skills",
    seoDescription: "Hoxi Agent \u6280\u80FD\u76EE\u5F55\uFF1A\u6280\u80FD\u521B\u4F5C\u3001\u7EBF\u4E0A\u8FD0\u7EF4\u7B49\u53EF\u5B89\u88C5\u6280\u80FD\uFF0C\u684C\u9762\u7AEF\u4E00\u952E\u4E0B\u8F7D\u5E76\u6821\u9A8C\u6458\u8981",
    downloadApp: "\u4E0B\u8F7D Hoxi",
    installNote: "\u684C\u9762\u7AEF\u6253\u5F00\u300C\u68C0\u67E5\u5668 \u2192 \u6280\u80FD \u2192 \u7EBF\u4E0A\u5E02\u96C6\u300D\u5373\u53EF\u5B89\u88C5\u3002Hoxi \u53EA\u4E0B\u8F7D SKILL.md \u5E76\u6821\u9A8C\u6458\u8981\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u5B89\u88C5\uFF0C\u4E5F\u4E0D\u4F1A\u6267\u884C\u8FDC\u7A0B\u811A\u672C\u3002",
    viewSource: "\u67E5\u770B\u6E90\u7801",
    empty: "\u6280\u80FD\u5E93\u6B63\u5728\u6574\u7406\u4E2D"
  },
  tools: {
    title: "\u5168\u6808\u4E0E Agent \u5DE5\u5177\u5E93",
    heroEyebrow: "{tools} \u9879\u5DE5\u5177 \xB7 {endpoints} \u4E2A\u63A5\u53E3 \xB7 {providers} \u5BB6\u670D\u52A1\u5546",
    heroLine1: "\u5168\u7F51 Agent \u5DE5\u5177\uFF0C",
    heroLine2: "\u4E00\u4E2A\u5DE5\u4F5C\u53F0\u7EDF\u4E00\u8C03\u7528\u3002",
    subtitle: "\u4F60\u7684 Agent \u53EF\u76F4\u63A5\u53D1\u73B0\u3001\u6821\u9A8C\u5E76\u6309\u6B21\u8C03\u7528\u7684\u5B9E\u65F6\u5DE5\u5177\u4E0E API \u76EE\u5F55\uFF0C\u540C\u65F6\u6536\u5F55\u72EC\u7ACB\u5F00\u53D1\u8005\u5168\u6808\u5EFA\u7AD9\u4E0E\u51FA\u6D77\u5FC5\u5907\u5957\u4EF6\u3002",
    seoTitle: "Tools \u2014 Agent \u5DE5\u5177\u3001\u6570\u636E API \u4E0E\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u5DE5\u5177\u5E93 | Hoxi",
    seoDescription: "\u6536\u5F55 {tools} \u9879\u5DE5\u5177\u3001{endpoints} \u4E2A\u5DF2\u9A8C\u8BC1\u7684 Agent \u6570\u636E\u63A5\u53E3\u4E0E {providers} \u5BB6\u670D\u52A1\u5546\uFF0C\u652F\u6301\u5728 Hoxi\u3001Claude Code \u4E0E MCP \u4E2D\u4E00\u952E\u8C03\u7528\u3002",
    searchPlaceholder: '\u641C\u7D22\u5DE5\u5177\u76EE\u5F55 \u2014 \u8BD5\u8BD5 "amazon reviews"\u3001"tiktok"\u3001"video gen" \u6216 "apify"',
    allCategories: "\u5168\u90E8",
    showMore: "\u5C55\u5F00\u66F4\u591A\u5206\u7C7B",
    showLess: "\u6536\u8D77\u5206\u7C7B",
    noMatchTitle: '\u672A\u627E\u5230\u5339\u914D "{query}" \u7684\u5DE5\u5177',
    noMatchDesc: "\u8BF7\u5C1D\u8BD5\u66F4\u6362\u66F4\u5BBD\u6CDB\u7684\u5173\u952E\u8BCD\u6216\u5207\u6362\u5DE6\u4FA7\u5206\u7C7B\u3002",
    emptyTitle: "\u6682\u65E0\u5DE5\u5177",
    emptyDesc: "\u8BE5\u5206\u7C7B\u4E0B\u8FD8\u6CA1\u6709\u6536\u5F55\u5DE5\u5177\u3002",
    markupFootnote: "* \u5E26\u661F\u53F7\u6807\u8BB0\u7684\u5206\u7C7B\u4E2D\uFF0C\u90E8\u5206\u5DE5\u5177\u5305\u542B\u5C11\u91CF\u5E73\u53F0\u901A\u9053\u8D39\uFF0C\u70B9\u51FB\u5361\u7247\u67E5\u770B\u5404\u63A5\u53E3\u660E\u7EC6\u3002",
    zeroMarkup: "0 \u52A0\u4EF7",
    zeroMarkupTip: "\u96F6\u5E73\u53F0\u52A0\u4EF7\uFF0C\u6309\u4E0A\u6E38\u670D\u52A1\u5546\u6807\u51C6\u5355\u4EF7\u8BA1\u8D39\u3002",
    zeroMarkupPartialTip: "\u8BE5\u5206\u7C7B\u4E0B\u7EDD\u5927\u591A\u6570\u63A5\u53E3\u96F6\u5E73\u53F0\u52A0\u4EF7\uFF0C\u5C11\u6570\u63A5\u53E3\u542B\u901A\u9053\u8D39\u3002",
    giveToAgent: "\u590D\u5236\u4EE5\u4E0B\u6307\u4EE4\u4EA4\u7ED9\u4F60\u7684 Agent \u5373\u53EF\u5F00\u59CB\u4F7F\u7528",
    copyPrompt: "\u590D\u5236\u6307\u4EE4",
    copied: "\u5DF2\u590D\u5236",
    endpointsTitle: "\u53EF\u8C03\u7528\u63A5\u53E3 (Endpoints)",
    useCasesTitle: "\u7528\u4F60\u7684 Agent \u8BD5\u8BD5\u8FD9\u4E9B\u5B9E\u6218\u4EFB\u52A1",
    relatedCategories: "\u6240\u5C5E\u4E0E\u5173\u8054\u5206\u7C7B",
    visitWebsite: "\u8BBF\u95EE\u5B98\u7F51",
    viewDocs: "\u63A5\u53E3\u6587\u6863",
    closeModal: "\u5173\u95ED\u8BE6\u60C5",
    kindCategory: "\u6570\u636E\u4E0E\u5DE5\u5177\u96C6",
    kindProvider: "\u8BA4\u8BC1\u670D\u52A1\u5546",
    kindSaas: "\u5168\u6808\u5FC5\u88C5"
  },
  home: {
    heroBadge: "\u684C\u9762 + \u624B\u673A\u53CC\u7AEF\u534F\u540C \xB7 100% \u5F00\u6E90",
    titleLine1: "\u4E00\u4E2A\u5F00\u653E\u7684 AI \u7814\u53D1\u5DE5\u4F5C\u53F0",
    titleLine2: "\u7EDF\u5FA1\u6BCF\u4E00\u4E2A\u5F00\u53D1\u8005\u5DE5\u4F5C\u6D41",
    title: "Hoxi \u2014 \u4E00\u4E2A\u5F00\u653E\u7684 AI \u7814\u53D1\u5DE5\u4F5C\u53F0\uFF0C\u7EDF\u5FA1\u6BCF\u4E00\u4E2A\u5F00\u53D1\u8005\u5DE5\u4F5C\u6D41",
    subtitle: "\u5728\u684C\u9762\u539F\u751F\u7A97\u53E3\u5185\u5E76\u884C\u8FD0\u884C\u591A\u4E2A AI \u4F1A\u8BDD\uFF0C\u79BB\u5F00\u5DE5\u4F4D\u7528\u624B\u673A\u968F\u65F6\u5BA1\u6279\u4E0E\u9065\u63A7\u3002\u5185\u7F6E\u771F\u5B9E\u6A21\u578B\u699C\u5355\u4E0E\u9AD8\u6027\u4EF7\u6BD4\u4E13\u7EBF\uFF0C\u652F\u6301\u81EA\u6709 Key\uFF0C\u96F6\u6346\u7ED1\u3002",
    authorIntro: "\u6211\u81EA\u5DF1\u7EF4\u62A4 GoPanel\uFF0C\u4E5F\u5728\u505A\u8F7B\u94FA AI \u548C\u8FD9\u4E2A\u7AD9",
    sections: {
      codingLeaderboard: "\u{1F3C6} \u4E2A\u4EBA\u4F7F\u7528\u4F53\u611F\u6392\u540D",
      codingNote: "\u65E5\u5E38\u5199\u4EE3\u7801\u771F\u5B9E\u4F53\u611F\u6392\u5E8F\uFF0C\u9644\u5B9E\u6218\u70B9\u8BC4\u4E0E\u6027\u4EF7\u6BD4",
      gateways: "\u5168\u90E8\u4E2D\u8F6C\u7AD9",
      gatewaysNote: "\u771F\u5B9E API \u6301\u7EED\u63A2\u6D4B\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E\u6A21\u578B\u4E00\u81F4\u6027\uFF0C\u7B5B\u9009\u4F4E\u5EF6\u8FDF\u3001\u9AD8\u6027\u4EF7\u6BD4\u7684\u53EF\u9760\u4E13\u7EBF",
      plans: "\u{1F4E6} \u7F16\u7A0B\u5957\u9910\u4E0E Coding Plan",
      plansNote: "\u6309\u91CF\u4E0E\u5305\u6708\u5BF9\u6BD4\uFF0C\u544A\u522B\u6D77\u5916\u5361\u95E8\u69DB\u548C\u5C01\u53F7\u98CE\u9669",
      posts: "\u5B9E\u6218\u535A\u5BA2",
      postsNote: "\u4E00\u4EBA\u516C\u53F8\u5DE5\u4F5C\u6D41\u3001\u5546\u4E1A\u53D8\u73B0\u590D\u76D8\u4E0E\u907F\u5751\u5B9E\u5F55",
      picks: "\u672C\u5468\u63A8\u8350",
      leaderboard: "\u5168\u91CF\u6A21\u578B\u699C\u5355",
      about: "\u5173\u4E8E\u7AD9\u957F",
      categories: "\u699C\u5355\u5206\u7C7B",
      data: "\u6570\u636E\u6982\u51B5"
    },
    plansList: {
      plan1Title: "\u6309\u91CF\u6781\u5BA2\u5305",
      plan1Tag: "\u7A0B\u5E8F\u5458\u9996\u9009",
      plan1Price: "\xA510 \u8D77",
      plan1Desc: "\u5145\u591A\u5C11\u7528\u591A\u5C11\uFF0C\u989D\u5EA6\u6C38\u4E45\u4E0D\u8FC7\u671F\u3002\u4E13\u4E3A Cursor / VS Code / Cline \u5B9A\u5236",
      plan1F1: "\u652F\u6301\u5168\u91CF Claude 3.7 / DeepSeek / GPT-4o",
      plan1F2: "\u6309 Token \u7CBE\u51C6\u8BA1\u8D39\uFF0C\u660E\u7EC6\u900F\u660E\u5B9E\u65F6\u53EF\u67E5",
      plan1F3: "\u65E0\u6708\u79DF\u3001\u65E0\u8FC7\u671F\u65F6\u95F4\u9650\u5236",
      plan1Cta: "\u7ACB\u5373\u5145\u503C\u914D\u7F6E",
      plan2Title: "\u5168\u80FD\u4E3B\u529B\u6708\u5361",
      plan2Tag: "\u91CD\u5EA6\u5F00\u53D1\u63A8\u8350",
      plan2Price: "\xA599 / \u6708",
      plan2Desc: "\u65E0\u9650\u989D\u5EA6\u4E0E\u9AD8\u5E76\u53D1\u652F\u6301\uFF0C\u9002\u5408\u5168\u5929\u5019\u5199\u4EE3\u7801\u4E0E\u65E5\u5E38\u751F\u4EA7\u529B\u91CD\u5EA6\u7528\u6237",
      plan2F1: "\u72EC\u4EAB\u4E13\u7EBF\u901A\u9053\uFF0C\u9AD8\u5E76\u53D1\u7A33\u5B9A\u4E0D\u6392\u961F",
      plan2F2: "\u652F\u6301\u5168\u6A21\u578B\u81EA\u7531\u5207\u6362",
      plan2F3: "\u4F18\u5148\u6280\u672F\u652F\u6301\u4E0E\u914D\u7F6E\u8F85\u52A9",
      plan2Cta: "\u5F00\u901A\u4E3B\u529B\u6708\u5361",
      plan3Title: "Plus/Pro \u62FC\u8F66\u5408\u79DF",
      plan3Tag: "\u9AD8\u6027\u4EF7\u6BD4",
      plan3Price: "\xA529 / \u6708",
      plan3Desc: "\u5B98\u65B9\u539F\u751F\u7F51\u9875\u7AEF\u4F53\u9A8C\uFF0C\u72EC\u7ACB\u5BF9\u8BDD\u8BB0\u5F55\uFF0C\u544A\u522B\u6D77\u5916\u4FE1\u7528\u5361\u4E0E\u5C01\u53F7\u98CE\u9669",
      plan3F1: "ChatGPT Plus / Claude Pro \u5B98\u65B9\u539F\u7248 Web \u754C\u9762",
      plan3F2: "\u72EC\u7ACB\u8D26\u53F7\u6216\u9694\u79BB\u4F1A\u8BDD\uFF0C\u9690\u79C1\u5B89\u5168",
      plan3F3: "\u7FFB\u8F66\u95EA\u9000\u81EA\u52A8\u8865\u53F7\u4E0E\u552E\u540E\u4FDD\u969C",
      plan3Cta: "\u67E5\u770B\u62FC\u8F66\u65B9\u6848"
    },
    moreCodingModels: "\u67E5\u770B\u5B8C\u6574\u4EE3\u7801\u6A21\u578B\u8BC4\u5206",
    viewGateways: "\u67E5\u770B\u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u4E0E\u8BC4\u6D4B",
    viewPlans: "\u67E5\u770B\u5B8C\u6574 Coding Plan \u4E0E\u7F16\u7A0B\u5957\u9910",
    picksNote: "\u4EE5\u300C{scene}\u300D\u8FD9\u4E2A\u6700\u5E38\u89C1\u7684\u573A\u666F\u4E3A\u4F8B\uFF0C\u4ECE\u4E0D\u8BA1\u6210\u672C\u5230\u6781\u7701\u5404\u7ED9\u4E00\u4E2A\u9009\u62E9\u3002\u5176\u4ED6\u573A\u666F\u89C1\u7701\u94B1\u6307\u5357",
    moreScenes: "\u67E5\u770B\u5168\u90E8\u573A\u666F\u63A8\u8350",
    viewFullTable: "\u67E5\u770B\u5B8C\u6574\u699C\u5355",
    postsEmpty: "\u8FD8\u6CA1\u6709\u6587\u7AE0",
    dataSummary: "\u5DF2\u6536\u5F55 {count} \u4E2A\u6A21\u578B\u3001{vendors} \u5BB6\u5382\u5546\uFF0C\u4EF7\u683C\u53D6\u81EA\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875\uFF0C\u8BC4\u5206\u53D6\u81EA Artificial Analysis",
    method: {
      title: "\u6570\u636E\u4ECE\u54EA\u6765",
      viewAbout: "\u5B8C\u6574\u53E3\u5F84",
      source: "\u4EF7\u683C\u548C\u89C4\u683C\u6211\u4ECE\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875\u9010\u6761\u6284\u5F55\uFF0C\u80FD\u529B\u8BC4\u5206\u53D6\u81EA Artificial Analysis\uFF0C\u6BCF\u6761\u90FD\u6807\u4E86\u6838\u5BF9\u65E5\u671F",
      missing: "\u67E5\u4E0D\u5230\u7684\u5B57\u6BB5\u4E00\u5F8B\u7559\u7A7A\uFF0C\u4E0D\u778E\u731C\u7740\u586B",
      update: "\u6570\u636E\u6211\u4E00\u4E2A\u4EBA\u7EF4\u62A4\uFF0C\u4F1A\u6709\u6EDE\u540E\u3002\u6B63\u5F0F\u6838\u7B97\u524D\u8BF7\u4EE5\u5382\u5546\u9875\u9762\u4E3A\u51C6"
    },
    pending: "\u6570\u636E\u5C42\u5C06\u5728\u540E\u7EED\u9636\u6BB5\u63A5\u5165\uFF0C\u5F53\u524D\u4E3A\u9AA8\u67B6\u9884\u89C8"
  },
  categories: {
    overall: "\u7EFC\u5408",
    cheapest: "\u6700\u4FBF\u5B9C",
    value: "\u6027\u4EF7\u6BD4",
    fastest: "\u6700\u5FEB",
    context: "\u957F\u4E0A\u4E0B\u6587",
    coding: "\u7F16\u7A0B",
    chinese: "\u4E2D\u6587"
  },
  models: {
    title: "AI \u6A21\u578B\u6392\u884C\u699C",
    subtitle: "\u5927\u6A21\u578B\u8BE5\u7528\u54EA\u4E2A\uFF1F\u54EA\u4E2A\u6700\u5212\u7B97\uFF1F\u6211\u628A\u5199\u4EE3\u7801\u4F53\u611F\u3001\u8DD1\u5206\u548C\u771F\u5B9E\u4EF7\u683C\u5168\u6446\u5728\u8FD9\uFF0C\u76F4\u63A5\u6765\u6284\u4F5C\u4E1A",
    seoTitle: "AI \u6A21\u578B\u6392\u884C\u699C - \u80FD\u529B\u8BC4\u5206\u4E0E\u4EF7\u683C\u5BF9\u6BD4",
    seoDescription: "\u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u699C\uFF1A\u7EFC\u5408\u8BC4\u5206\u3001\u8F93\u5165\u8F93\u51FA\u4EF7\u683C\u3001\u6DF7\u5408\u4EF7\u3001\u6027\u4EF7\u6BD4\u3001\u8F93\u51FA\u901F\u5EA6\u4E0E\u4E0A\u4E0B\u6587\u957F\u5EA6\u6A2A\u5411\u5BF9\u6BD4\uFF0C\u6570\u636E\u6807\u6CE8\u6765\u6E90\u4E0E\u6838\u5BF9\u65E5\u671F",
    tabsLabel: "\u699C\u5355\u5206\u7C7B",
    tabs: {
      overall: "\u7EFC\u5408",
      value: "\u6027\u4EF7\u6BD4",
      cheapest: "\u6700\u4FBF\u5B9C",
      fastest: "\u6700\u5FEB",
      context: "\u957F\u4E0A\u4E0B\u6587"
    },
    columns: {
      model: "\u6A21\u578B",
      overall: "\u7EFC\u5408\u5206",
      input: "\u8F93\u5165\u4EF7",
      output: "\u8F93\u51FA\u4EF7",
      blended: "\u6DF7\u5408\u4EF7",
      value: "\u6027\u4EF7\u6BD4",
      tps: "\u901F\u5EA6",
      ttft: "\u9996\u5B57\u5EF6\u8FDF",
      context: "\u4E0A\u4E0B\u6587"
    },
    filters: {
      vendor: "\u5382\u5546",
      reasoning: "\u7C7B\u578B",
      reasoningOnly: "\u4EC5\u63A8\u7406\u6A21\u578B",
      maxPrice: "\u6DF7\u5408\u4EF7\u4E0A\u9650",
      noLimit: "\u4E0D\u9650",
      reset: "\u6E05\u7A7A\u7B5B\u9009"
    },
    count: "\u663E\u793A {shown} / {total} \u4E2A\u6A21\u578B",
    modelCount: "\u6536\u5F55 {count} \u4E2A\u6A21\u578B",
    searchPlaceholder: "\u641C\u7D22\u6A21\u578B\u540D\u6216\u5382\u5546\uFF08\u5982 Claude\u3001DeepSeek\u3001Flash\uFF09...",
    podiumTitle: "\u4E09\u4E2A\u5E38\u7528\u9009\u62E9",
    podiumDesc: "\u6309\u7EFC\u5408\u5206\u3001\u6027\u4EF7\u6BD4\u548C\u901F\u5EA6\u5404\u6311\u4E00\u4E2A\uFF0C\u90FD\u662F\u4ECE\u699C\u5355\u6570\u636E\u91CC\u7B97\u51FA\u6765\u7684",
    viewMode: {
      table: "\u8868\u683C",
      cards: "\u5361\u7247"
    },
    scenes: {
      all: "\u5168\u90E8",
      coding: "\u5199\u4EE3\u7801\u4E3B\u529B",
      reasoning: "\u6DF1\u5EA6\u601D\u8003",
      budget: "\u767D\u83DC\u4EF7\u5E73\u66FF (\u2264\xA52)",
      longContext: "\u767E\u4E07\u957F\u6587\u672C"
    },
    compareDrawer: {
      selected: "\u5DF2\u9009 {count} \u6B3E\u6A21\u578B",
      startCompare: "\u5F00\u59CB\u6A2A\u5411\u5BF9\u6BD4",
      clear: "\u6E05\u7A7A",
      limitTip: "\u6700\u591A\u53EF\u9009 3 \u6B3E\u6A21\u578B"
    },
    noMatch: "\u6CA1\u6709\u7B26\u5408\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u7684\u6A21\u578B\uFF0C\u8BD5\u8BD5\u653E\u5BBD\u4EF7\u683C\u4E0A\u9650\u6216\u53D6\u6D88\u5382\u5546\u7B5B\u9009"
  },
  model: {
    seoTitle: "{name} - \u4EF7\u683C\u3001\u8BC4\u5206\u4E0E\u9009\u578B\u5EFA\u8BAE",
    offerDescription: "\u6BCF\u767E\u4E07\u8F93\u5165 tokens \u7684\u5B98\u65B9\u6807\u4EF7",
    scores: "\u80FD\u529B\u8BC4\u5206",
    scoreNote: "\u7EFC\u5408\u5206\u53D6\u81EA Artificial Analysis \u7684 Intelligence Index\uFF0C\u5B83\u662F\u4E00\u4E2A\u7EFC\u5408\u6307\u6570\u800C\u975E\u767E\u5206\u5236\uFF0C\u5F53\u524D\u699C\u9996\u7EA6 63 \u5206",
    scoreMissing: "\u8BE5\u6A21\u578B\u672A\u51FA\u73B0\u5728 Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u4E2D\uFF0C\u6240\u4EE5\u6211\u8FD9\u91CC\u6682\u65F6\u6CA1\u6709\u5B83\u7684\u7B2C\u4E09\u65B9\u8BC4\u5206\u3002\u8FD9\u7EDD\u4E0D\u4EE3\u8868\u5B83\u80FD\u529B\u5DEE\uFF0C\u53EA\u4EE3\u8868\u7F3A\u5C11\u7EDF\u4E00\u7EF4\u5EA6\u7684\u516C\u5F00\u6D4B\u8BD5\u6570\u636E",
    scoreDimensions: {
      overall: "\u7EFC\u5408",
      coding: "\u7F16\u7A0B",
      reasoning: "\u63A8\u7406",
      chinese: "\u4E2D\u6587",
      agentic: "Agent"
    },
    variantNote: "\u6211\u8FD9\u91CC\u53D6\u7528\u7684\u662F\u300C{variant}\u300D\u63A8\u7406\u6863\u4F4D\u7684\u6570\u636E\uFF1B\u540C\u4E00\u6A21\u578B\u6362\u4E86\u6863\u4F4D\uFF0C\u901F\u5EA6\u4E0E\u8868\u73B0\u90FD\u4F1A\u6709\u660E\u663E\u5DEE\u5F02",
    pricing: "\u4EF7\u683C\u660E\u7EC6",
    priceItem: "\u9879\u76EE",
    priceOfficial: "\u5B98\u65B9\u6807\u4EF7",
    priceInput: "\u8F93\u5165",
    priceOutput: "\u8F93\u51FA",
    priceCacheRead: "\u7F13\u5B58\u547D\u4E2D",
    priceCacheWrite: "\u7F13\u5B58\u5199\u5165",
    maxOutput: "\u6700\u5927\u8F93\u51FA",
    priceNote: "\u5355\u4F4D\u4E3A\u6BCF\u767E\u4E07 tokens\u3002\u6298\u7B97\u540E\u7684\u6DF7\u5408\u4EF7\u4E3A \xA5{blended}\uFF08\u7F8E\u5143\u6309 1 USD = {rate} CNY \u8BA1\uFF0C\u6C47\u7387\u6838\u5BF9\u4E8E {date}\uFF09\u3002\u663E\u793A\u4E3A\u300C\u2014\u300D\u8868\u793A\u5382\u5546\u672A\u516C\u5E03\u8BE5\u9879\u6216\u4E0D\u6309\u8BE5\u65B9\u5F0F\u8BA1\u8D39",
    perMillion: "\u6BCF\u767E\u4E07 tokens",
    tpsUnit: "tokens/\u79D2",
    noData: "\u6682\u65E0\u53EF\u6838\u5B9E\u6570\u636E",
    scenes: "\u9002\u7528\u573A\u666F",
    highlights: "\u4F18\u70B9",
    caveats: "\u6CE8\u610F\u4E8B\u9879",
    backToList: "\u8FD4\u56DE\u699C\u5355",
    tags: {
      reasoning: "\u63A8\u7406\u6A21\u578B",
      openWeights: "\u5F00\u653E\u6743\u91CD",
      image: "\u56FE\u7247\u8F93\u5165",
      audio: "\u97F3\u9891\u8F93\u5165",
      video: "\u89C6\u9891\u8F93\u5165",
      free: "\u514D\u8D39"
    },
    alternatives: {
      stronger: "\u540C\u4EF7\u4F4D\u66F4\u5F3A",
      cheaper: "\u540C\u6C34\u5E73\u66F4\u4FBF\u5B9C",
      neighbors: "\u4EF7\u683C\u76F8\u8FD1",
      neighborsNote: "\u8BE5\u6A21\u578B\u6CA1\u6709\u53EF\u6838\u5B9E\u7684\u7EFC\u5408\u5206\uFF0C\u65E0\u6CD5\u505A\u80FD\u529B\u5BF9\u6BD4\uFF0C\u8FD9\u91CC\u6309\u6DF7\u5408\u4EF7\u63A5\u8FD1\u7A0B\u5EA6\u63A8\u8350"
    },
    blendedShort: "\u6DF7\u5408\u4EF7",
    scoreShort: "\u7EFC\u5408\u5206"
  },
  compare: {
    title: "\u6A21\u578B\u5BF9\u6BD4",
    subtitle: "\u628A\u4E24\u5230\u56DB\u4E2A\u5019\u9009\u5E76\u6392\u6446\u5F00\u770B\u3002\u9009\u62E9\u4F1A\u5199\u8FDB\u7F51\u5740\uFF0C\u4E00\u6761\u94FE\u63A5\u5C31\u80FD\u628A\u5BF9\u6BD4\u7ED3\u679C\u53D1\u7ED9\u522B\u4EBA",
    seoTitle: "AI \u6A21\u578B\u5BF9\u6BD4 - \u53C2\u6570\u4E0E\u4EF7\u683C\u5E76\u6392\u770B",
    seoTitleWith: "{names} \u5BF9\u6BD4",
    pick: "\u9009\u62E9\u8981\u5BF9\u6BD4\u7684\u6A21\u578B\uFF08\u6700\u591A {max} \u4E2A\uFF09",
    overflow: "\u4E00\u6B21\u6700\u591A\u5BF9\u6BD4 {max} \u4E2A\u6A21\u578B\uFF0C\u591A\u51FA\u7684\u5DF2\u5FFD\u7565\u2014\u2014\u518D\u591A\u5C31\u6324\u6210\u4E00\u56E2\u4E86",
    needMore: "\u81F3\u5C11\u9009\u4E24\u4E2A\u6A21\u578B\u624D\u80FD\u5BF9\u6BD4",
    field: "\u5BF9\u6BD4\u9879",
    modalities: "\u8F93\u5165\u6A21\u6001",
    summary: "\u4E00\u53E5\u8BDD",
    yes: "\u662F",
    no: "\u5426",
    billingTitle: "\u8BA1\u8D39\u5DEE\u5F02"
  },
  changes: {
    title: "\u6A21\u578B\u53D8\u66F4\u6D41\u6C34",
    subtitle: "\u4EF7\u683C\u8C03\u6574\u3001\u4FC3\u9500\u8D77\u6B62\u3001\u65B0\u6536\u5F55\u4E0E\u4E0B\u7EBF\u3002\u9009\u5BF9\u6A21\u578B\u4E4B\u540E\uFF0C\u6700\u5BB9\u6613\u8BA9\u4EBA\u88AB\u8D26\u5355\u6253\u4E2A\u63AA\u624B\u4E0D\u53CA\u7684\u5C31\u662F\u8FD9\u4E9B",
    seoTitle: "AI \u6A21\u578B\u4EF7\u683C\u53D8\u66F4\u8BB0\u5F55\u4E0E\u9884\u544A",
    seoDescription: "\u8DDF\u8E2A\u5404\u5BB6 AI \u6A21\u578B\u7684\u4EF7\u683C\u8C03\u6574\u3001\u4FC3\u9500\u5230\u671F\u3001\u65B0\u6A21\u578B\u6536\u5F55\u4E0E\u4E0B\u7EBF\uFF0C\u542B\u5DF2\u516C\u5E03\u7684\u672A\u6765\u53D8\u5316\u9884\u544A",
    asOf: "\u622A\u81F3 {date}",
    upcoming: "\u5DF2\u77E5\u5C06\u53D1\u751F",
    upcomingNote: "\u8FD9\u4E9B\u662F\u5382\u5546\u5DF2\u7ECF\u516C\u5E03\u3001\u4F46\u6563\u843D\u5728\u5404\u5BB6\u5B9A\u4EF7\u9875\u811A\u6CE8\u91CC\u7684\u53D8\u5316\u3002\u8DDD\u79BB\u5230\u671F\u4E0D\u5230 30 \u5929\u7684\u6807\u7EA2",
    upcomingEmpty: "\u5F53\u524D\u6536\u5F55\u7684\u6A21\u578B\u91CC\uFF0C\u6CA1\u6709\u5DF2\u516C\u5E03\u786E\u5207\u65E5\u671F\u7684\u4EF7\u683C\u53D8\u5316",
    history: "\u5DF2\u53D1\u751F\u7684\u53D8\u66F4",
    historyNote: "\u8FD9\u91CC\u53EA\u8BB0\u6211\u81EA\u5DF1\u771F\u5B9E\u6838\u5BF9\u8FC7\u7684\u53D8\u5316\uFF0C\u4ECE\u5F00\u59CB\u6536\u5F55\u90A3\u5929\u7B97\u8D77\uFF0C\u4E0D\u505A\u8FFD\u6EAF\u3002\u7A7A\u767D\u65F6\u6BB5\u5C31\u662F\u7A7A\u767D\u2014\u2014\u7F16\u4E00\u6BB5\u4E30\u6EE1\u7684\u5386\u53F2\u5F88\u5BB9\u6613\uFF0C\u4F46\u90A3\u6837\u6211\u81EA\u5DF1\u90FD\u4E0D\u4F1A\u518D\u4FE1\u8FD9\u4E2A\u7AD9",
    historyEmpty: "\u8FD8\u6CA1\u6709\u8BB0\u5F55\u5230\u53D8\u66F4",
    daysLeft: "\u8FD8\u6709 {days} \u5929\uFF08{date}\uFF09",
    today: "\u5C31\u662F\u4ECA\u5929",
    noDate: "\u672A\u516C\u5E03\u5230\u671F\u65E5",
    effect: {
      rise: "\u5230\u671F\u540E\u4EF7\u683C\u4ECE {from} \u6DA8\u5230 {to}\uFF08\u6BCF\u767E\u4E07 tokens\uFF09",
      riseUnknown: "\u5F53\u524D\u4EF7 {from}\uFF08\u6BCF\u767E\u4E07 tokens\uFF09\uFF0C\u5230\u671F\u540E\u7684\u4EF7\u683C\u5382\u5546\u672A\u516C\u5E03",
      discountEnds: "\u9650\u65F6\u4EF7 {to} \u7ED3\u675F\u540E\u56DE\u5230\u6807\u51C6\u4EF7 {from}\uFF08\u6BCF\u767E\u4E07 tokens\uFF09",
      discountEndsUnknown: "\u6807\u51C6\u4EF7 {from}\uFF08\u6BCF\u767E\u4E07 tokens\uFF09\uFF0C\u9650\u65F6\u4F18\u60E0\u7ED3\u675F\u65E5\u671F\u672A\u516C\u5E03"
    },
    kinds: {
      priceUp: "\u6DA8\u4EF7",
      priceDown: "\u964D\u4EF7",
      modelAdded: "\u65B0\u6536\u5F55",
      modelRemoved: "\u4E0B\u7EBF",
      promo: "\u4FC3\u9500",
      score: "\u8BC4\u5206\u66F4\u65B0",
      other: "\u5176\u4ED6"
    }
  },
  switch: {
    indexTitle: "\u6362\u4E2A\u66F4\u4FBF\u5B9C\u7684\u6A21\u578B",
    indexSubtitle: "\u9009\u4E00\u4E2A\u4F60\u6B63\u5728\u7528\u7684\u6A21\u578B\uFF0C\u770B\u770B\u6709\u54EA\u4E9B\u80FD\u66FF\u3001\u80FD\u7701\u591A\u5C11\u3001\u6362\u8FC7\u53BB\u8981\u6CE8\u610F\u4EC0\u4E48",
    indexSeoTitle: "AI \u6A21\u578B\u66FF\u4EE3\u65B9\u6848 - \u6362\u4E2A\u66F4\u4FBF\u5B9C\u7684",
    indexNote: "\u6392\u5728\u524D\u9762\u7684\u662F\u5355\u4EF7\u6700\u9AD8\u7684\u6A21\u578B\u2014\u2014\u4F1A\u770B\u8FD9\u4E00\u9875\u7684\u4EBA\u591A\u534A\u5728\u4E3A\u8D26\u5355\u53D1\u6101\uFF0C\u90A3\u6279\u7684\u66FF\u4EE3\u7A7A\u95F4\u4E5F\u6700\u5927",
    groups: {
      expensive: "\u8D35\u6863\uFF08\u6DF7\u5408\u4EF7 \xA530 \u4EE5\u4E0A\uFF09",
      mid: "\u4E2D\u6863\uFF08\xA510\u201330\uFF09",
      cheap: "\u4FBF\u5B9C\u6863\uFF08\xA510 \u4EE5\u4E0B\uFF09"
    },
    title: "{name} \u7684\u4FBF\u5B9C\u66FF\u4EE3",
    subtitle: "\u548C {name} \u80FD\u529B\u76F8\u5F53\u6216\u591F\u7528\u3001\u4F46\u66F4\u4FBF\u5B9C\u7684\u9009\u62E9\uFF0C\u4EE5\u53CA\u6362\u8FC7\u53BB\u4E4B\u524D\u8BE5\u77E5\u9053\u7684\u8BA1\u8D39\u5DEE\u5F02",
    seoTitle: "{name} \u7684\u4FBF\u5B9C\u66FF\u4EE3\u65B9\u6848 - \u80FD\u7701\u591A\u5C11\u3001\u600E\u4E48\u6362",
    seoDescription: "{name} \u6709\u54EA\u4E9B\u66F4\u4FBF\u5B9C\u7684\u66FF\u4EE3\u6A21\u578B\uFF1F\u5BF9\u6BD4\u7EFC\u5408\u5206\u3001\u6DF7\u5408\u4EF7\u4E0E\u8BA1\u8D39\u5DEE\u5F02\uFF0C\u9644\u6362\u6A21\u578B\u524D\u7684\u9A8C\u8BC1\u6B65\u9AA4",
    saves: "\u7701 {percent}%",
    noScore: "\u6682\u65E0\u7EFC\u5408\u5206",
    current: "\u5F53\u524D\u6A21\u578B",
    viewDetail: "\u67E5\u770B\u5B8C\u6574\u53C2\u6570",
    otherModels: "\u6362\u522B\u7684\u6A21\u578B\u770B\u770B",
    none: "\u6309\u5F53\u524D\u6570\u636E\uFF0C\u6CA1\u6709\u627E\u5230\u6BD4 {name} \u660E\u663E\u66F4\u4FBF\u5B9C\u53C8\u591F\u7528\u7684\u9009\u62E9\u3002\u5B83\u53EF\u80FD\u672C\u6765\u5C31\u5728\u6027\u4EF7\u6BD4\u524D\u5217",
    sections: {
      cheaper: "\u540C\u6C34\u5E73\u66F4\u4FBF\u5B9C",
      cheaperNote: "\u7EFC\u5408\u5206\u4E0E\u5F53\u524D\u6A21\u578B\u76F8\u5F53\u6216\u66F4\u9AD8\uFF0C\u4F46\u4EF7\u683C\u66F4\u4F4E\u3002\u8FD9\u4E00\u6863\u901A\u5E38\u53EF\u4EE5\u76F4\u63A5\u6362",
      deepCut: "\u5927\u5E45\u964D\u6863",
      deepCutNote: "\u4FBF\u5B9C\u5230\u4E94\u5206\u4E4B\u4E00\u4EE5\u4E0B\u3002\u80FD\u529B\u786E\u5B9E\u4F1A\u6389\uFF0C\u503C\u4E0D\u503C\u5F97\u53D6\u51B3\u4E8E\u4F60\u7684\u4EFB\u52A1\u2014\u2014\u6211\u624B\u4E0A\u6CA1\u6709\u7F16\u7A0B\u7B49\u5206\u7EF4\u5EA6\u7684\u8BC4\u5206\uFF0C\u8FD9\u4E2A\u95EE\u9898\u6211\u7B54\u4E0D\u4E86\uFF0C\u53EA\u80FD\u9760\u4F60\u81EA\u5DF1\u8BD5",
      stronger: "\u540C\u4EF7\u4F4D\u66F4\u5F3A",
      strongerNote: "\u4EF7\u683C\u76F8\u5F53\u4F46\u7EFC\u5408\u5206\u66F4\u9AD8\u3002\u5982\u679C\u4F60\u6362\u6A21\u578B\u7684\u52A8\u673A\u662F\u6548\u679C\u4E0D\u591F\uFF0C\u5148\u770B\u8FD9\u4E00\u6863",
      neighbors: "\u4EF7\u683C\u76F8\u8FD1",
      neighborsNote: "\u5F53\u524D\u6A21\u578B\u6CA1\u6709\u53EF\u6838\u5B9E\u7684\u7EFC\u5408\u5206\uFF0C\u65E0\u6CD5\u505A\u80FD\u529B\u5BF9\u6BD4\uFF0C\u8FD9\u91CC\u6309\u6DF7\u5408\u4EF7\u63A5\u8FD1\u7A0B\u5EA6\u5217\u51FA"
    },
    warnings: {
      tiers: "\u6709\u9636\u68AF\u4EF7\uFF1A\u8F93\u5165\u8D85\u8FC7 {value} token \u540E\u5355\u4EF7\u4F1A\u8DF3\u6863\uFF0C\u957F\u4E0A\u4E0B\u6587\u573A\u666F\u8981\u6309\u5B9E\u9645\u6863\u4F4D\u91CD\u7B97",
      timeWindows: "\u5206\u65F6\u6BB5\u8BA1\u4EF7\uFF1A{value} \u66F4\u4FBF\u5B9C\uFF0C\u79BB\u7EBF\u4EFB\u52A1\u9519\u5CF0\u8DD1\u80FD\u76F4\u63A5\u7701\u4E00\u622A",
      promo: "{value}",
      batch: "\u6279\u91CF\u63A5\u53E3\u7EA6\u4E3A\u5E38\u89C4\u4EF7\u7684 {value}%\uFF0C\u4E0D\u8D76\u65F6\u95F4\u7684\u4EFB\u52A1\u5E94\u8BE5\u8D70\u6279\u91CF",
      cache: "\u7F13\u5B58\u4E0D\u6309\u5199\u5165\u6536\u8D39\uFF0C\u6539\u6309\u5B58\u50A8\u65F6\u957F\u8BA1\u8D39\u2014\u2014\u7F13\u5B58\u7559\u5F97\u8D8A\u4E45\u8FD9\u7B14\u8D8A\u8D35\uFF0C\u548C\u6309\u6B21\u6536\u8D39\u7684\u6A21\u578B\u4E0D\u662F\u4E00\u56DE\u4E8B",
      modality: "{value} \u8F93\u5165\u5355\u72EC\u8BA1\u4EF7\u4E14\u66F4\u8D35\uFF0C\u591A\u6A21\u6001\u8D1F\u8F7D\u4E0D\u80FD\u6309\u6587\u672C\u5355\u4EF7\u4F30",
      unstructured: "\u8BE5\u6A21\u578B\u7684\u8BA1\u8D39\u89C4\u5219\u672C\u7AD9\u5C1A\u672A\u7ED3\u6784\u5316\u6838\u5B9E\uFF0C\u53EF\u80FD\u5B58\u5728\u9636\u68AF\u4EF7\u6216\u65F6\u6BB5\u4EF7\uFF0C\u6362\u4E4B\u524D\u8BF7\u81EA\u884C\u6838\u5BF9\u5B98\u65B9\u5B9A\u4EF7\u9875"
    },
    verify: {
      title: "\u6362\u4E4B\u524D\u5148\u81EA\u5DF1\u9A8C\u4E00\u904D",
      step1: "\u6311\u4E09\u5230\u4E94\u4E2A\u4F60\u771F\u5B9E\u8DD1\u8FC7\u7684\u4EFB\u52A1\uFF0C\u628A\u539F\u59CB\u8F93\u5165\u539F\u6837\u5582\u7ED9\u5019\u9009\u6A21\u578B",
      step2: "\u4E0D\u770B\u300C\u7B54\u5F97\u597D\u4E0D\u597D\u300D\uFF0C\u53EA\u770B\u300C\u4F1A\u4E0D\u4F1A\u7FFB\u8F66\u300D\uFF1A\u683C\u5F0F\u662F\u5426\u5B88\u7EA6\u3001\u957F\u4E0A\u4E0B\u6587\u6709\u6CA1\u6709\u4E22\u7EC6\u8282\u3001\u5DE5\u5177\u8C03\u7528\u53C2\u6570\u5BF9\u4E0D\u5BF9",
      step3: "\u628A\u4E24\u8FB9\u8F93\u51FA\u5E76\u6392\u653E\uFF0C\u7FFB\u8F66\u7387\u8D85\u8FC7\u4E00\u6210\u5C31\u522B\u6362\uFF1B\u4E00\u6210\u4EE5\u5185\u53EF\u4EE5\u5148\u5728\u975E\u5173\u952E\u8DEF\u5F84\u4E0A\u8DD1\u4E00\u5468",
      caveat: "\u8FD9\u4E2A\u7EFC\u5408\u5206\u6765\u81EA\u7B2C\u4E09\u65B9\u901A\u7528\u699C\u5355\uFF0C\u53CD\u6620\u4E0D\u4E86\u4F60\u624B\u5934\u8FD9\u4E2A\u5177\u4F53\u4EFB\u52A1\u2014\u2014\u8FD9\u8BDD\u6211\u5728\u597D\u51E0\u9875\u90FD\u8BF4\u8FC7\uFF0C\u4F46\u8FD9\u91CC\u6700\u8981\u7D27\uFF0C\u6240\u4EE5\u518D\u8BF4\u4E00\u904D\u3002\u7701\u4E0B\u7684\u94B1\u662F\u5B9E\u6253\u5B9E\u7684\uFF0C\u591F\u4E0D\u591F\u7528\uFF0C\u53EA\u6709\u4F60\u81EA\u5DF1\u8BD5\u8FC7\u624D\u7B97\u6570"
    }
  },
  about: {
    title: "\u5173\u4E8E\u53EF\u559C AI",
    subtitle: "\u5584\u7528 AI\uFF0C\u4E00\u4EBA\u6210\u519B\uFF0C\u53EF\u559C\u53EF\u4E50 \u2014\u2014 \u4E00\u4E2A\u5168\u6808\u5DE5\u7A0B\u5E08\u7684\u4E00\u4EBA\u516C\u53F8\u5B9E\u8DF5\u624B\u8BB0",
    seoTitle: "\u5173\u4E8E\u53EF\u559C AI - \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357\u4E0E\u7AD9\u957F\u624B\u8BB0",
    explore: "\u4E00\u4EBA\u516C\u53F8\u5B9E\u8DF5\u5730\u56FE",
    authorIntro: "\u6211\u662F\u53EF\u4E50\u3002\u5168\u6808\u5DE5\u7A0B\u5E08\uFF0C\u624B\u5934\u7EF4\u62A4\u7740 GoPanel\u3001\u8F7B\u94FAAI/\u72EC\u7ACB\u7AD9\u7B49\u9879\u76EE\uFF0C\u4EE5\u53CA\u8FD9\u4E2A\u7AD9\u70B9\u3002\u4E0D\u8FFD\u6C42\u878D\u8D44\u62DB\u4EBA\u7684\u5B8F\u5927\u53D9\u4E8B\uFF0C\u6B63\u5728\u8DF5\u884C\u9760 AI \u8D4B\u80FD\u7684\u4E00\u4EBA\u516C\u53F8\u95ED\u73AF",
    tagSolo: "\u72EC\u7ACB\u5168\u6808\u5F00\u53D1",
    tagAi: "AI \u964D\u672C\u4E0E\u6A21\u578B\u9009\u578B",
    tagAudit: "100% \u771F\u5B9E\u5B9E\u6D4B",
    why: {
      title: "\u4E3A\u4EC0\u4E48\u662F\u4E00\u4EBA\u516C\u53F8\uFF1F\u65F6\u4EE3\u62D0\u70B9\u4E0E\u300C\u4E00\u4EBA\u6210\u519B\u300D",
      p1: "\u8FC7\u53BB\u505A\u8F6F\u4EF6\uFF0C\u72EC\u7ACB\u5F00\u53D1\u8005\u5F80\u5F80\u4F1A\u649E\u4E0A\u6B8B\u9177\u7684\u300C\u4E0D\u53EF\u80FD\u4E09\u89D2\u300D\uFF1A\u61C2\u9700\u6C42\u5199\u4E0D\u5B8C\u4EE3\u7801\uFF0C\u5199\u5B8C\u4EE3\u7801\u4E0D\u4F1A\u505A\u5BA3\u53D1\u83B7\u5BA2\uFF0C\u597D\u4E0D\u5BB9\u6613\u6765\u4E86\u7528\u6237\uFF0C\u53C8\u88AB\u590D\u6742\u7684\u8FD0\u7EF4\u76D1\u63A7\u3001\u5BA2\u670D\u5DE5\u5355\u548C\u9AD8\u6602\u7684\u670D\u52A1\u5668\u8D26\u5355\u62D6\u5F97\u7126\u5934\u70C2\u989D\u3002\u6700\u540E\u4E00\u4E2A\u4EBA\u6D3B\u6210\u4E86\u4E00\u652F\u961F\u4F0D\uFF0C\u4F46\u7D2F\u5F97\u534A\u6B7B",
      p2: "\u73B0\u5728\u60C5\u51B5\u53D8\u4E86\u3002\u4EE5\u5927\u6A21\u578B\u548C Agent \u4E3A\u4EE3\u8868\u7684 AI \u6280\u672F\uFF0C\u7B2C\u4E00\u6B21\u628A\u7814\u53D1\u548C\u4EA4\u4ED8\u7684\u8FB9\u9645\u6210\u672C\u538B\u5230\u4E86\u6781\u4F4E\u3002\u5584\u7528 AI\uFF0C\u4E00\u4E2A\u4EBA\u7684\u8BA4\u77E5\u548C\u6267\u884C\u529B\u5C31\u80FD\u88AB\u653E\u5927\u6210\u4E00\u4E2A 5 \u5230 10 \u4EBA\u7684\u7CBE\u5E72\u6218\u961F\u3002\u300C\u4E00\u4EBA\u6210\u519B\u300D\u4E0D\u518D\u662F\u6587\u5B66\u4FEE\u8F9E\uFF0C\u800C\u662F\u6211\u4EEC\u8FD9\u4E00\u4EE3\u6280\u672F\u4EBA\u548C\u8D85\u7EA7\u4E2A\u4F53\u6700\u771F\u5B9E\u7684\u751F\u5B58\u8303\u5F0F"
    },
    pillars: {
      title: "\u8FD9\u4E2A\u7AD9\u80FD\u4E3A\u4F60\u63D0\u4F9B\u4EC0\u4E48\uFF1A\u4E00\u4EBA\u516C\u53F8\u7684\u56DB\u6839\u652F\u67F1",
      p1: "1. \u6D4B\u4E00\u6D4B\u80FD\u529B\u77ED\u677F\uFF08\u80FD\u529B\u6D4B\u8BC4\uFF09\uFF1A\u4ECE\u6253\u5DE5\u4EBA\u5230\u72EC\u7ACB\u7ECF\u8425\uFF0C\u6700\u6015\u7684\u662F\u4E0D\u77E5\u9053\u81EA\u5DF1\u7F3A\u4EC0\u4E48\u3002\u6211\u628A\u4E00\u4EBA\u516C\u53F8\u7684\u80FD\u529B\u62C6\u6210\u4EA7\u54C1\u3001\u6280\u672F\u3001\u83B7\u5BA2\u548C\u5546\u4E1A\u5316\u56DB\u4E2A\u7EF4\u5EA6\uFF0C\u505A\u4E86\u4E00\u5957\u6781\u7B80\u81EA\u6D4B\uFF0C\u5E2E\u4F60\u5FEB\u901F\u770B\u6E05\u5F53\u524D\u7684\u5361\u70B9\u5728\u54EA\u91CC",
      p2: "2. \u628A\u7B97\u529B\u8D26\u7B97\u5F97\u6E05\u6E05\u695A\u695A\uFF08\u6A21\u578B\u9009\u578B\u4E0E\u964D\u672C\uFF09\uFF1AAI \u662F\u4E00\u4EBA\u516C\u53F8\u6700\u6838\u5FC3\u7684\u751F\u4EA7\u8D44\u6599\uFF0C\u4F46\u4E5F\u6700\u5BB9\u6613\u88AB\u5382\u5546\u7684\u590D\u6742\u8BA1\u8D39\u548C\u9690\u6027\u52A0\u4EF7\u80CC\u523A\u3002\u6211\u628A\u81EA\u5DF1\u6BCF\u5929\u76EF AI \u7F51\u5173\u7684\u771F\u5B9E\u5E95\u4EF7\u3001\u5EF6\u8FDF\u8868\u73B0\u548C\u964D\u672C\u5E73\u66FF\u8DEF\u7EBF\u5168\u62FF\u51FA\u6765\uFF0C\u5E2E\u4F60\u780D\u6389 50% \u5230 80% \u7684\u7B97\u529B\u51A4\u6789\u94B1",
      p3: "3. \u6781\u7B80\u5168\u6808\u88C5\u5907\u5E93\uFF08\u5DE5\u5177\u7BB1\u4E0E\u7F16\u7A0B\u5957\u9910\uFF09\uFF1A\u5199\u4EE3\u7801\u7528\u4EC0\u4E48\u5DE5\u5177\u3001\u600E\u4E48\u4E70 Cursor / Claude \u5957\u9910\u6700\u5212\u7B97\u3001\u57DF\u540D\u600E\u4E48\u6311\u3001\u4EE3\u7801\u600E\u4E48\u81EA\u52A8\u6784\u5EFA\u3001\u6D77\u5916\u5982\u4F55\u5408\u6CD5\u6536\u6B3E\u2026\u2026\u5168\u662F\u6211\u81EA\u5DF1\u5B9E\u64CD\u8E29\u5751\u540E\u7559\u4E0B\u7684\u8D81\u624B\u88C5\u5907\uFF0C\u4E0D\u6C42\u5927\u800C\u5168\uFF0C\u53EA\u6C42\u5F00\u7BB1\u5373\u7528",
      p4: "4. \u771F\u5B9E\u7684\u5B9E\u6218\u4E0E\u8E29\u5751\u6D41\u6C34\uFF08\u4E13\u680F\u300A\u5E95\u5C42\u91CD\u6784\u300B\u4E0E\u535A\u5BA2\uFF09\uFF1A\u6CA1\u6709\u7406\u8BBA\u8BF4\u6559\uFF0C\u53EA\u6709\u771F\u5B9E\u7684\u5FC3\u667A\u6A21\u578B\u8FED\u4EE3\u3001\u4EA7\u54C1\u4E0A\u7EBF\u590D\u76D8\u548C\u907F\u5751\u6D41\u6C34\u3002\u6BCF\u4E00\u4E2A\u6210\u529F\u548C\u7FFB\u8F66\u7684\u7EC6\u8282\u90FD\u644A\u5728\u9633\u5149\u4E0B\uFF0C\u7ED9\u540C\u8DEF\u7684\u4F60\u505A\u4E2A\u53C2\u8003"
    },
    values: {
      title: "\u4EC0\u4E48\u662F\u300C\u53EF\u559C\u53EF\u4E50\u300D\uFF1F\u6211\u773C\u4E2D\u7684\u4E00\u4EBA\u516C\u53F8\u5FC3\u6001",
      p1: "\u8FD9\u4E2A\u7AD9\u53EB\u53EF\u559C AI\uFF0C\u6211\u53EB\u53EF\u4E50\u3002\u5408\u5728\u4E00\u8D77\uFF0C\u6070\u597D\u662F\u300C\u53EF\u559C\u53EF\u4E50\u300D\u3002\u5F88\u591A\u4EBA\u505A\u72EC\u7ACB\u5F00\u53D1\uFF0C\u505A\u7740\u505A\u7740\u53C8\u628A\u81EA\u5DF1\u903C\u6210\u4E86 7x24 \u5C0F\u65F6\u5F85\u547D\u7684\u82E6\u529B\u5916\u5305\uFF0C\u7126\u8651\u5931\u7720\uFF0C\u672C\u672B\u5012\u7F6E",
      p2: "\u6211\u7406\u89E3\u7684\u4E00\u4EBA\u516C\u53F8\uFF0C\u6838\u5FC3\u662F\u627E\u56DE\u5BF9\u751F\u6D3B\u7684\u638C\u63A7\u6743\u3002\u501F\u52A9 AI \u7684\u6760\u6746\uFF0C\u628A\u4E8B\u60C5\u505A\u6210\u3001\u521B\u9020\u771F\u5B9E\u4EF7\u503C\uFF0C\u8FD9\u662F\u300C\u53EF\u559C\u300D\uFF1B\u4E0D\u88AB\u865A\u8363\u6307\u6807\u7ED1\u67B6\uFF0C\u4ECE\u5BB9\u8D5A\u94B1\u3001\u8FC7\u597D\u751F\u6D3B\uFF0C\u8FD9\u662F\u300C\u53EF\u4E50\u300D\u3002\u4E00\u4EBA\u6210\u519B\uFF0C\u6700\u7EC8\u662F\u4E3A\u4E86\u8BA9\u81EA\u5DF1\u6D3B\u5F97\u66F4\u6709\u677E\u5F1B\u611F\u548C\u5C0A\u4E25"
    },
    principles: {
      title: "\u6211\u7684\u539F\u5219\uFF1A\u771F\u5B9E\u3001\u900F\u660E\u3001\u4E0D\u5356\u7126\u8651",
      p1: "\u4E0D\u753B\u9020\u5BCC\u5927\u997C\uFF1A\u6211\u4E0D\u4F1A\u5728\u8FD9\u4E2A\u7AD9\u4E0A\u5356\u300C7\u5929\u9760 AI \u6708\u5165\u5341\u4E07\u300D\u7684\u66B4\u5BCC\u795E\u8BDD\u3002\u4E00\u4EBA\u516C\u53F8\u662F\u4E00\u573A\u8BA4\u771F\u7684\u5546\u4E1A\u5B9E\u8DF5\uFF0C\u9700\u8981\u5B9E\u6253\u5B9E\u7684\u4EA7\u54C1\u3001\u4EE3\u7801\u3001\u83B7\u5BA2\u4E0E\u7B97\u529B\u8D26\u672C\uFF0C\u6D6E\u8E81\u7684\u6377\u5F84\u6700\u7EC8\u90FD\u4F1A\u88AB\u5E02\u573A\u6233\u7834",
      p2: "\u6570\u636E\u771F\u5B9E\u53EF\u6838\u5B9E\uFF1A\u699C\u5355\u4E0A\u6BCF\u4E2A\u6A21\u578B\u7684\u4EF7\u683C\u6211\u4ECE\u5B98\u65B9\u6838\u5BF9\uFF0C\u4E2D\u8F6C\u7AD9\u7684\u5EF6\u8FDF\u6211\u7528\u771F\u91D1\u767D\u94F6\u5B9E\u6D4B\uFF0C\u5DE5\u5177\u548C\u65B9\u6848\u5168\u662F\u6211\u81EA\u5DF1\u7528\u8FC7\u624D\u63A8\u3002\u51E1\u662F\u6211\u4E2A\u4EBA\u7684\u4E3B\u89C2\u4F53\u9A8C\uFF0C\u6211\u90FD\u660E\u786E\u6807\u6CE8\u300C\u7F16\u8F91\u5224\u65AD\u300D\uFF0C\u7EDD\u4E0D\u62FF\u4E2A\u4EBA\u504F\u597D\u5192\u5145\u5BA2\u89C2\u516C\u7406",
      p3: "\u4E00\u4EBA\u6210\u519B\uFF0C\u4F46\u4E0D\u5B64\u519B\u594B\u6218\uFF1A\u72EC\u7ACB\u63A2\u7D22\u7684\u8DEF\u4E0A\u5BB9\u6613\u611F\u5230\u5B64\u72EC\u548C\u8FF7\u832B\u3002\u6240\u4EE5\u6211\u5EFA\u4E86\u4E00\u4EBA\u516C\u53F8\u4EA4\u6D41\u793E\u7FA4\uFF0C\u628A\u6709\u540C\u9891\u76EE\u6807\u3001\u5728\u771F\u5B9E\u4EA4\u4ED8\u4EA7\u54C1\u7684\u670B\u53CB\u805A\u5728\u4E00\u8D77\u3002\u6211\u4EEC\u4E92\u901A\u6709\u65E0\u3001\u5171\u4EAB\u8D44\u6E90\u3001\u62B1\u56E2\u6210\u957F"
    }
  },
  posts: {
    title: "\u535A\u5BA2",
    subtitle: "AI \u7F16\u7A0B\u3001\u505A\u4EA7\u54C1\u548C\u4E00\u4EBA\u516C\u53F8\u7684\u8BB0\u5F55",
    seoTitle: "\u535A\u5BA2 - \u53EF\u559C AI",
    seoDescription: "\u53EF\u4E50\u5173\u4E8E AI \u7F16\u7A0B\u3001\u505A\u4EA7\u54C1\u548C\u4E00\u4EBA\u516C\u53F8\u7684\u8BB0\u5F55",
    empty: "\u8FD8\u6CA1\u6709\u53D1\u5E03\u6587\u7AE0",
    checkBackLater: "\u65B0\u6587\u7AE0\u4F1A\u653E\u5728\u8FD9\u91CC",
    allCategories: "\u5168\u90E8",
    category: "\u5206\u7C7B",
    categoryEmpty: "\u8BE5\u5206\u7C7B\u4E0B\u8FD8\u6CA1\u6709\u6587\u7AE0",
    views: "{count} \u6B21\u9605\u8BFB",
    toc: "\u76EE\u5F55",
    pagination: "\u6587\u7AE0\u5206\u9875",
    previous: "\u4E0A\u4E00\u9875",
    next: "\u4E0B\u4E00\u9875",
    backToList: "\u8FD4\u56DE\u6587\u7AE0\u5217\u8868",
    like: "\u70B9\u8D5E",
    likePrompt: "\u89C9\u5F97\u6709\u6536\u83B7\uFF0C\u4E0D\u59A8\u70B9\u4E2A\u8D5E"
  },
  cheap: {
    title: "AI \u6A21\u578B\u7701\u94B1\u6307\u5357",
    subtitle: "\u6309\u4F7F\u7528\u573A\u666F\u7ED9\u51FA\u4E09\u6863\u9009\u62E9\uFF1A\u4E0D\u8BA1\u6210\u672C\u7684\u9996\u9009\u3001\u591A\u6570\u4EBA\u8BE5\u9009\u7684\u6027\u4EF7\u6BD4\u6863\uFF0C\u4EE5\u53CA\u80FD\u7701\u5230\u4EC0\u4E48\u7A0B\u5EA6",
    seoTitle: "AI \u6A21\u578B\u7701\u94B1\u6307\u5357 - \u4FBF\u5B9C\u597D\u7528\u7684\u6A21\u578B\u600E\u4E48\u9009",
    seoDescription: "\u6309\u5199\u4EE3\u7801\u3001\u957F\u6587\u6863\u3001\u6279\u91CF\u5904\u7406\u3001\u7FFB\u8BD1\u7B49\u573A\u666F\u63A8\u8350\u4FBF\u5B9C\u597D\u7528\u7684 AI \u6A21\u578B\uFF0C\u9644\u4EF7\u683C\u5BF9\u6BD4\u4E0E\u7701\u94B1\u6280\u5DE7\u3002\u6BCF\u6761\u63A8\u8350\u90FD\u6807\u660E\u4F9D\u636E\u6765\u6E90",
    basisTitle: "\u8FD9\u4E9B\u63A8\u8350\u662F\u600E\u4E48\u6765\u7684",
    basisNote: "\u4EF7\u683C\u4E0E\u4E0A\u4E0B\u6587\u957F\u5EA6\u53D6\u81EA\u5404\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875\uFF0C\u7EFC\u5408\u5206\u4E0E\u901F\u5EA6\u53D6\u81EA Artificial Analysis \u699C\u5355\u2014\u2014\u8FD9\u51E0\u9879\u6211\u80FD\u62CD\u7740\u80F8\u812F\u8BF4\u662F\u53EF\u6838\u5B9E\u7684\u3002\u4F46\u6211\u624B\u5934\u6CA1\u6709\u7F16\u7A0B\u3001\u4E2D\u6587\u3001Agent \u8FD9\u4E9B\u5206\u7EF4\u5EA6\u7684\u8BC4\u5206\uFF0C\u51E1\u662F\u6D89\u53CA\u8FD9\u4E9B\u80FD\u529B\u7684\u5224\u65AD\uFF0C\u90FD\u662F\u6211\u81EA\u5DF1\u7684\u7F16\u8F91\u610F\u89C1\uFF0C\u6BCF\u4E2A\u573A\u666F\u4E0B\u90FD\u5355\u72EC\u6807\u4E86\u51FA\u6765\u3002\u771F\u8981\u4E0A\u751F\u4EA7\uFF0C\u62FF\u4F60\u81EA\u5DF1\u7684\u4EFB\u52A1\u5B9E\u6D4B\u4E00\u904D\u518D\u5B9A\uFF0C\u522B\u7167\u5355\u5168\u6536",
    basisLabel: "\u63A8\u8350\u4F9D\u636E\uFF1A",
    tiers: {
      best: "\u9996\u9009",
      value: "\u6027\u4EF7\u6BD4",
      budget: "\u6781\u7701"
    },
    tableTitle: "\u4FBF\u5B9C\u6A21\u578B\u603B\u699C",
    tableNote: "\u6309\u6DF7\u5408\u4EF7\u5347\u5E8F\u6392\u5217\u7684\u524D 15 \u4E2A\u6A21\u578B\u3002\u4EF7\u683C\u4F4E\u4E0D\u7B49\u4E8E\u591F\u7528\uFF0C\u8BF7\u7ED3\u5408\u7EFC\u5408\u5206\u4E00\u8D77\u770B\u2014\u2014\u663E\u793A\u4E3A\u300C\u2014\u300D\u7684\u8868\u793A\u8BE5\u6A21\u578B\u6CA1\u6709\u53EF\u6838\u5B9E\u7684\u8BC4\u5206\u6570\u636E",
    viewFullTable: "\u67E5\u770B\u5B8C\u6574\u699C\u5355",
    tipsTitle: "\u7701\u94B1\u6280\u5DE7",
    tips: {
      cache: {
        title: "\u628A\u7A33\u5B9A\u4E0D\u53D8\u7684\u5185\u5BB9\u653E\u8FDB\u7F13\u5B58",
        body: "\u591A\u6570\u5382\u5546\u7684\u7F13\u5B58\u547D\u4E2D\u4EF7\u53EA\u6709\u8F93\u5165\u4EF7\u7684\u5341\u5206\u4E4B\u4E00\u5DE6\u53F3\u3002\u7CFB\u7EDF\u63D0\u793A\u3001\u4EE3\u7801\u5E93\u3001\u957F\u6587\u6863\u8FD9\u4E9B\u6BCF\u6B21\u90FD\u8981\u5E26\u4E0A\u7684\u5185\u5BB9\uFF0C\u653E\u8FDB\u7F13\u5B58\u540E\u91CD\u590D\u8C03\u7528\u7684\u6210\u672C\u4F1A\u5927\u5E45\u4E0B\u964D\u3002\u6CE8\u610F\u5404\u5BB6\u8BA1\u8D39\u65B9\u5F0F\u4E0D\u540C\uFF1A\u6709\u7684\u6536\u7F13\u5B58\u5199\u5165\u8D39\uFF0C\u6709\u7684\u6309\u7F13\u5B58\u5B58\u50A8\u65F6\u957F\u6536\u8D39"
      },
      routing: {
        title: "\u6309\u96BE\u5EA6\u5206\u6D41\uFF0C\u4E0D\u8981\u4E00\u4E2A\u6A21\u578B\u8DD1\u5230\u5E95",
        body: "\u628A\u7B80\u5355\u4EFB\u52A1\uFF08\u5206\u7C7B\u3001\u62BD\u53D6\u3001\u683C\u5F0F\u5316\uFF09\u4EA4\u7ED9\u4FBF\u5B9C\u6863\uFF0C\u53EA\u628A\u771F\u6B63\u9700\u8981\u63A8\u7406\u7684\u6B65\u9AA4\u4EA4\u7ED9\u65D7\u8230\u3002\u591A\u6570 Agent \u94FE\u8DEF\u91CC\uFF0C\u9700\u8981\u9876\u7EA7\u80FD\u529B\u7684\u6B65\u9AA4\u4E0D\u5230\u4E24\u6210"
      },
      effort: {
        title: "\u8C03\u4F4E\u63A8\u7406\u6863\u4F4D",
        body: "\u540C\u4E00\u4E2A\u6A21\u578B\u7684 max \u4E0E medium \u6863\uFF0C\u4EF7\u683C\u76F8\u540C\u4F46\u8F93\u51FA\u7684\u601D\u8003 token \u6570\u5DEE\u5F88\u591A\uFF0C\u9996\u5B57\u5EF6\u8FDF\u4E5F\u5DEE\u51FA\u51E0\u5341\u79D2\u3002\u4E0D\u9700\u8981\u6DF1\u5EA6\u63A8\u7406\u7684\u4EFB\u52A1\u628A\u6863\u4F4D\u8C03\u4E0B\u6765\uFF0C\u7701\u94B1\u53C8\u53D8\u5FEB"
      },
      batch: {
        title: "\u7528\u6279\u91CF\u63A5\u53E3\u548C\u7A7A\u95F2\u65F6\u6BB5",
        body: "\u591A\u5BB6\u5382\u5546\u7684\u6279\u91CF\u8C03\u7528\u662F\u4E94\u6298\uFF0CDeepSeek \u8FD8\u6709\u7A7A\u95F2\u65F6\u6BB5\u534A\u4EF7\u3002\u4E0D\u8D76\u65F6\u95F4\u7684\u79BB\u7EBF\u4EFB\u52A1\u653E\u8FDB\u6279\u91CF\u6216\u9519\u5CF0\u8DD1\uFF0C\u6210\u672C\u76F4\u63A5\u51CF\u534A"
      },
      tiers: {
        title: "\u5F53\u5FC3\u9636\u68AF\u4EF7\u548C\u4FC3\u9500\u4EF7",
        body: "\u4E0D\u5C11\u6A21\u578B\u6309\u8F93\u5165\u957F\u5EA6\u5206\u6863\uFF0C\u8D85\u8FC7\u9608\u503C\u5355\u4EF7\u4F1A\u8DF3\u4E00\u5230\u4E24\u500D\uFF1B\u4E5F\u6709\u6A21\u578B\u73B0\u5728\u7684\u4F4E\u4EF7\u662F\u9650\u65F6\u4FC3\u9500\uFF0C\u5230\u671F\u4F1A\u7FFB\u500D\u3002\u505A\u957F\u671F\u6210\u672C\u4F30\u7B97\u65F6\u8981\u6309\u5230\u671F\u540E\u7684\u4EF7\u683C\u7B97"
      },
      tokenizer: {
        title: "\u522B\u53EA\u770B\u5355\u4EF7\uFF0C\u8981\u770B\u540C\u4E00\u6BB5\u6587\u672C\u5207\u51FA\u591A\u5C11 token",
        body: "\u4E0D\u540C\u5382\u5546\u7684\u5206\u8BCD\u5668\u4E0D\u540C\uFF0C\u540C\u6837\u4E00\u6BB5\u4E2D\u6587\u5207\u51FA\u7684 token \u6570\u53EF\u80FD\u5DEE\u4E09\u6210\u3002\u5355\u4EF7\u4F4E\u4E0D\u7B49\u4E8E\u603B\u82B1\u8D39\u4F4E\uFF0C\u6700\u53EF\u9760\u7684\u529E\u6CD5\u662F\u62FF\u81EA\u5DF1\u7684\u771F\u5B9E\u8BED\u6599\u5404\u8DD1\u4E00\u904D\u518D\u6BD4\u603B\u8D26\u5355"
      }
    }
  },
  gateways: {
    title: "AI \u4E2D\u8F6C\u7AD9\u63A8\u8350",
    seoTitle: "AI \u4E2D\u8F6C\u7AD9\u63A8\u8350 - \u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E\u5355\u4EF7\u5BF9\u6BD4",
    seoDescription: "\u5B9E\u6D4B\u56FD\u5185\u53EF\u7528\u7684 AI API \u4E2D\u8F6C\u4E13\u7EBF\uFF1A\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u3001\u652F\u6301\u6A21\u578B\u4E0E\u5355\u4EF7\uFF0C\u9644 Cursor / Cline \u63A5\u5165\u914D\u7F6E"
  },
  savings: {
    title: "AI \u7B97\u529B\u7701\u94B1\u6307\u5357",
    seoTitle: "AI \u7B97\u529B\u7701\u94B1\u6307\u5357 - \u53EF\u559C AI",
    seoDescription: "\u6A21\u578B\u4EF7\u683C\u3001\u4E2D\u8F6C\u7AD9\u548C\u7F16\u7A0B\u5957\u9910\u7684\u5BF9\u6BD4\uFF0C\u4EE5\u53CA\u6309\u7528\u91CF\u9009\u65B9\u6848\u7684\u529E\u6CD5",
    decisionBadge: "\u6211\u7684\u9009\u6CD5",
    decisionDesc: "\u8FD9\u662F\u6211\u81EA\u5DF1\u8E29\u5751\u6478\u7D22\u51FA\u6765\u7684\u7ECF\u9A8C\uFF0C\u4E0D\u662F\u642C\u7816\u5957\u516C\u5F0F",
    rule1Title: "\u5E73\u65F6\u7528\u5F97\u5C11\uFF1A\u76F4\u63A5\u6309\u91CF\u4E70 Token",
    rule1Desc: "\u5982\u679C\u4E0D\u662F\u5929\u5929\u9AD8\u5F3A\u5EA6\u5199\u4EE3\u7801\uFF0C$20-40 \u7684\u6708\u8D39\u591A\u534A\u662F\u767D\u767D\u6D6A\u8D39\u3002\u7528\u591A\u5C11\u6263\u591A\u5C11\uFF0C\u51E0\u5757\u94B1\u80FD\u7528\u597D\u4E45",
    rule2Title: "\u5929\u5929\u5199\u4EE3\u7801\u91CD\u5EA6\u4F9D\u8D56\uFF1A\u5F00\u7F16\u7A0B\u5957\u9910",
    rule2Desc: "\u6BCF\u5929\u5927\u91CF\u505A\u4EE3\u7801\u8865\u5168\u3001\u6574\u5E93\u91CD\u6784\u548C\u4E0A\u4E0B\u6587\u4FEE\u6539\uFF0CCursor\u3001Copilot \u8FD9\u79CD\u5305\u6708\u5957\u9910\u7B97\u4E0B\u6765\u624D\u771F\u5212\u7B97",
    rule3Title: "\u8DD1\u6279\u91CF\u6216\u65E5\u5E38\u5C0F\u6D3B\uFF1A\u4F18\u5148\u4FBF\u5B9C\u6A21\u578B",
    rule3Desc: "\u5207\u56FE\u3001\u5199 CRUD\u3001\u957F\u6587\u672C\u5F52\u7EB3\uFF0C\u5148\u62FF\u51E0\u6BDB\u94B1\u7684\u56FD\u4EA7\u6216\u8F7B\u91CF\u6A21\u578B\u8DD1\uFF0C\u641E\u5F97\u5B9A\u5C31\u522B\u6D6A\u8D39\u94B1\u4E0A\u5927\u65D7\u8230",
    modelsSectionTitle: "\u6A21\u578B\u80FD\u529B\u4E0E\u4EF7\u683C",
    modelsSectionNote: "\u6309\u6027\u4EF7\u6BD4\uFF08\u7EFC\u5408\u5206 \xF7 \u6DF7\u5408\u4EF7\uFF09\u6392\u524D\u56DB\uFF0C\u7EFC\u5408\u5206\u53D6\u81EA Artificial Analysis",
    viewAllModels: "\u5B8C\u6574\u699C\u5355",
    gatewaysSectionTitle: "\u4E2D\u8F6C\u7AD9",
    gatewaysSectionNote: "\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u548C\u5355\u4EF7",
    viewAllGateways: "\u5168\u90E8\u4E2D\u8F6C\u7AD9",
    plansSectionTitle: "\u7F16\u7A0B\u5957\u9910",
    plansSectionNote: "\u989D\u5EA6\u3001\u652F\u6301\u7684\u6A21\u578B\u548C\u9650\u5236",
    viewAllPlans: "\u5168\u90E8\u5957\u9910",
    switchCardTitle: "\u9AD8\u4EF7\u6A21\u578B\u5E73\u66FF\u7B97\u76D8",
    switchCardDesc: "\u8F93\u5165\u4F60\u60F3\u7528\u7684\u6602\u8D35\u6A21\u578B\uFF0C\u7ACB\u523B\u627E\u51FA\u80FD\u529B\u63A5\u8FD1\u4F46\u4EF7\u683C\u4EC5\u9700 1/10 \u7684\u5E73\u66FF\u7EC4\u5408",
    changesCardTitle: "\u5382\u5546\u8C03\u4EF7\u8FFD\u8E2A\u6D41\u6C34",
    changesCardDesc: "\u5B9E\u65F6\u8FFD\u8E2A\u5404\u5927\u5382\u5546\u964D\u4EF7\u8282\u594F\u4E0E\u4FC3\u9500\u52A8\u6001\uFF0C\u7B2C\u4E00\u65F6\u95F4\u4EAB\u53D7\u7B97\u529B\u7EA2\u5229"
  },
  readiness: {
    title: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6D4B\u8BC4",
    subtitle: "\u6D4B\u6D4B\u4F60\u9002\u4E0D\u9002\u5408\u5355\u5E72\uFF1A12 \u9053\u5B9E\u6218\u96BE\u9898\uFF0C\u770B\u770B\u4F60\u5728\u5199\u4EE3\u7801\u3001\u5546\u4E1A\u641E\u94B1\u8FD8\u662F\u5FC3\u6001\u4E0A\u6700\u5BB9\u6613\u683D\u8DDF\u5934",
    seoTitle: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6D4B\u8BC4 \xB7 \u6D4B\u6D4B\u4F60\u9002\u4E0D\u9002\u5408\u5355\u5E72",
    seoDescription: "\u9762\u5411\u7A0B\u5E8F\u5458\u3001\u4EA7\u54C1\u7ECF\u7406\u7B49 IT \u540C\u884C\uFF1A12 \u9053\u5B9E\u6218\u60C5\u666F\u9898\uFF0C\u770B\u4F60\u5728\u505A\u4EA7\u54C1\u3001\u5546\u4E1A\u53D8\u73B0\u3001\u6D41\u91CF\u83B7\u5BA2\u3001\u7B97\u529B\u6210\u672C\u548C\u6297\u632B\u5FC3\u6001\u4E0A\u7684\u771F\u5B9E\u77ED\u677F",
    authorName: "\u53EF\u4E50",
    authorInitial: "\u559C",
    testedCount: "{count} \u4EBA\u5DF2\u6D4B",
    badgeMeta: "12 \u9053\u60C5\u666F\u9898 \xB7 \u7EA6 3 \u5206\u949F",
    testedShort: "{count} \u4EBA\u5DF2\u6D4B",
    chooseRole: "\u9009\u62E9\u4F60\u7684\u5C97\u4F4D",
    whyTitle: "\u4E3A\u4EC0\u4E48\u6309\u5C97\u4F4D\u51FA\u9898\uFF0C\u800C\u4E0D\u6D4B\u6027\u683C",
    whyP1: "\u5F88\u591A\u521B\u4E1A\u6D4B\u8BC4\u95EE\u7684\u662F\u300C\u4F60\u6709\u6CA1\u6709\u9886\u5BFC\u529B\u300D\u300C\u8010\u4E0D\u8010\u5F97\u4F4F\u5BC2\u5BDE\u300D\uFF0C\u8FD9\u79CD\u9898\u8C01\u90FD\u4F1A\u5F80\u597D\u91CC\u9009\u3002\u6211\u66F4\u5728\u610F\u7684\u662F\uFF1A\u4F60\u4ECE\u4EC0\u4E48\u5C97\u4F4D\u51FA\u6765\uFF0C\u5C31\u5BB9\u6613\u5E26\u7740\u4EC0\u4E48\u4E60\u60EF\u3002",
    whyP2Prefix: "\u4E0B\u9762\u662F",
    whyP2Suffix: "\u7684 12 \u9053\u9898\u3002\u6D4B\u5B8C\u4F1A\u7ED9\u4F60\u4E00\u5F20\u4E94\u7EF4\u96F7\u8FBE\u56FE\uFF0C\u4EE5\u53CA\u9488\u5BF9\u6700\u5F31\u4E00\u9879\u7684 7 \u5929\u884C\u52A8\u6E05\u5355\u3002",
    resumeBtn: "\u7EE7\u7EED {role} \u8FDB\u5EA6 (\u5DF2\u7B54 {answered} / {total} \u9898)",
    restartBtn: "\u91CD\u65B0\u5F00\u59CB",
    startBtn: "\u5F00\u59CB {role} \u6D4B\u8BC4",
    dimensionsTitle: "\u6D4B\u8BC4\u770B\u7684\u4E94\u4E2A\u65B9\u9762",
    currentRole: "\u5F53\u524D\u5C97\u4F4D\uFF1A",
    switchRole: "\u5207\u6362\u5C97\u4F4D",
    progressLabel: "\u6D4B\u8BC4\u8FDB\u5EA6\uFF1A\u7B2C {current} / {total} \u9898",
    jumpTip: "\u8DF3\u8F6C\u5230\u7B2C {index} \u9898",
    questionIndex: "\u7B2C {current} / {total} \u9898",
    focusLabel: "\u8003\u5BDF\uFF1A",
    realFeedback: "\u771F\u5B9E\u53CD\u9988\uFF1A",
    prevBtn: "\u4E0A\u4E00\u9898",
    nextBtn: "\u4E0B\u4E00\u9898",
    viewReport: "\u67E5\u770B\u5B8C\u6574\u8BCA\u65AD\u62A5\u544A",
    radarLabel: "\u4E00\u4EBA\u516C\u53F8\u4E94\u7EF4\u80FD\u529B\u96F7\u8FBE\u56FE",
    percentilePrefix: "\u9AD8\u4E8E",
    percentileSuffix: "% \u7684\u540C\u5C97\u4F4D\u6D4B\u8BC4\u8005",
    adviceLabel: "\u53EF\u4E50\u7684\u63D0\u9192\uFF1A",
    dimensionsHeading: "\u4E94\u4E2A\u7EF4\u5EA6",
    fullScoreNote: "100 \u5206\u6EE1\u5206\u5236",
    scoreValue: "{score} \u5206",
    archetypeHeading: "\u4F60\u662F\u54EA\u4E00\u7C7B",
    prosLabel: "\u4F60\u7684\u4F18\u52BF\uFF1A",
    consLabel: "\u5BB9\u6613\u8E29\u7684\u5751\uFF1A",
    warningHeading: "\u9700\u8981\u5F53\u5FC3",
    strongestLabel: "\u6700\u5F3A\u7684\u4E00\u9879",
    weakestLabel: "\u6700\u5F31\u7684\u4E00\u9879",
    roleSpecific: "{role}\u4E13\u9879",
    hazardHeading: "\u8FD9\u4E2A\u5C97\u4F4D\u5E38\u89C1\u7684\u4E60\u60EF",
    prescriptionHeading: "\u600E\u4E48\u6539",
    blindspotHeading: "\u6700\u5F31\u4E00\u9879 \xB7 7 \u5929\u884C\u52A8\u6E05\u5355",
    blindspotIntro: "\u9488\u5BF9\u4F60\u5F97\u5206\u6700\u4F4E\u7684\u7EF4\u5EA6\uFF1A",
    causeLabel: "\u539F\u56E0\uFF1A",
    nextSevenDays: "\u63A5\u4E0B\u6765 7 \u5929\u53EF\u4EE5\u505A\u7684\u4E8B",
    arsenalHeading: "\u9488\u5BF9\u77ED\u677F\u7684\u81EA\u7528\u5175\u5668\u4E0E\u6307\u5357\uFF1A",
    communityBadge: "\u627E\u53EF\u4E50\u804A\u804A",
    communityTitle: "\u60F3\u548C\u5176\u4ED6{role}\u804A\u804A\u4E00\u4EBA\u516C\u53F8\uFF1F",
    communityDesc: "\u52A0\u6211\u5FAE\u4FE1\uFF0C\u62C9\u4F60\u8FDB\u4E00\u4EBA\u516C\u53F8\u7FA4\u3002",
    communityBtn: "\u52A0\u53EF\u4E50\u5FAE\u4FE1 / \u8FDB\u7FA4",
    restartOther: "\u6362\u4E2A\u5C97\u4F4D\u91CD\u65B0\u6D4B\u4E00\u6B21",
    copyBtn: "\u590D\u5236\u6D4B\u8BC4\u7ED3\u679C",
    copiedBtn: "\u5DF2\u590D\u5236",
    toolboxBtn: "\u5DE5\u5177\u7BB1",
    copyHeader: "\u3010\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6D4B\u8BC4 \xB7 hoxi.ai\u3011",
    copyRole: "\u5C97\u4F4D\u80CC\u666F\uFF1A{role}",
    copyScore: "\u7EFC\u5408\u5F97\u5206\uFF1A{score} \u5206 \xB7 {tier}",
    copyPercentile: "\u540C\u5C97\u4F4D\u6392\u540D\uFF1A\u9AD8\u4E8E {percentile}% \u7684\u6D4B\u8BC4\u8005",
    copyArchetype: "\u539F\u578B\u753B\u50CF\uFF1A{name}\uFF08{tagline}\uFF09",
    copyDivider: "--------------------------",
    copyDimensionsTitle: "\u4E94\u7EF4\u80FD\u529B\u5206\u5E03\uFF1A",
    copyDimension: "\u2022 {name}\uFF1A{score}\u5206",
    copyStrongest: "\u6700\u5F3A\u4F18\u52BF\uFF1A{name}",
    copyWeakest: "\u6700\u5F31\u7684\u4E00\u9879\uFF1A{name}",
    copyAdvice: "\u53EF\u4E50\u53EE\u5631\uFF1A{advice}",
    copyUrl: "\u6D4B\u8BC4\u5730\u5740\uFF1Ahttps://hoxi.ai/readiness"
  },
  projects: {
    title: "\u5B9E\u6218\u9879\u76EE",
    subtitle: "\u6211\u4E00\u4E2A\u4EBA\u7ED3\u5408 AI \u72EC\u7ACB\u5F00\u53D1\u5E76\u6301\u7EED\u7EF4\u62A4\u7684\u4EA7\u54C1\u77E9\u9635",
    seoTitle: "AI \u5B9E\u6218\u9879\u76EE - \u4E00\u4EBA\u516C\u53F8\u771F\u5B9E\u4EA7\u54C1\u843D\u5730",
    seoDescription: "\u53EF\u4E50\u72EC\u7ACB\u7814\u53D1\u5E76\u8FD0\u8425\u7684 AI \u4EA7\u54C1\u77E9\u9635\uFF1AHoxi Desktop\u3001Hoxi Mobile\u3001\u8F7B\u94FA AI \u4E0E apay \u6846\u67B6",
    badge: "PROJECTS",
    highlightsLabel: "\u6838\u5FC3\u4EAE\u70B9",
    internalUse: "\u5185\u90E8\u81EA\u7528\u5E95\u5EA7",
    recommendBtn: "\u4EA4\u6D41\u9879\u76EE",
    recommendTip: "\u76EE\u524D\u5C55\u793A\u6211\u81EA\u5DF1\u7684\u9879\u76EE\u3002\u4F60\u4E5F\u5728\u505A\u72EC\u7ACB\u4EA7\u54C1\u7684\u8BDD\uFF0C\u6B22\u8FCE\u4EA4\u6D41",
    feedbackTitle: "\u5411\u7AD9\u957F\u53CD\u9988 / \u63D0\u9700\u6C42",
    feedbackDesc: "\u4F60\u5BF9\u8BE5\u9879\u76EE\u6709\u4EFB\u4F55\u529F\u80FD\u5EFA\u8BAE\u3001\u5408\u4F5C\u610F\u5411\u6216\u4F7F\u7528\u7591\u60D1\uFF0C\u6B22\u8FCE\u76F4\u63A5\u544A\u8BC9\u6211",
    feedbackPlaceholder: "\u5199\u4E0B\u4F60\u7684\u5EFA\u8BAE\u6216\u60F3\u6C9F\u901A\u7684\u5185\u5BB9...",
    submitFeedback: "\u53D1\u9001\u53CD\u9988",
    contactAuthor: "\u4E0E\u4F5C\u8005\u4EA4\u6D41",
    viewSite: "\u8BBF\u95EE\u5B98\u7F51",
    viewGithub: "GitHub",
    viewStory: "\u5173\u4E8E",
    modelUsed: "\u6838\u5FC3\u6A21\u578B",
    monthlyCost: "\u7B97\u529B\u8D26\u672C",
    techStack: "\u6280\u672F\u6808",
    author: "\u521B\u4F5C\u8005",
    emptyTitle: "\u6682\u65E0\u9879\u76EE",
    emptyDesc: "\u8FD9\u4E2A\u5206\u7C7B\u4E0B\u8FD8\u6CA1\u6709\u9879\u76EE"
  },
  comment: {
    title: "\u8BA8\u8BBA\u4E0E\u53CD\u9988",
    subtitle: "\u6B22\u8FCE\u4EA4\u6D41\u4F7F\u7528\u5FC3\u5F97\u3001\u573A\u666F\u5B9E\u6D4B\u4E0E\u9009\u578B\u5EFA\u8BAE",
    placeholder: "\u6B22\u8FCE\u7559\u4E0B\u4F60\u7684\u770B\u6CD5...",
    authorPlaceholder: "\u4F60\u7684\u6635\u79F0 *",
    emailPlaceholder: "\u90AE\u7BB1\uFF08\u9009\u586B\uFF0C\u7528\u4E8E\u5C55\u793A\u5934\u50CF\uFF09",
    urlPlaceholder: "\u7F51\u7AD9\u6216 GitHub \u4E3B\u9875\uFF08\u9009\u586B\uFF09",
    loginWithGithub: "\u7528 GitHub \u767B\u5F55",
    submit: "\u53D1\u8868\u8BC4\u8BBA",
    submitting: "\u63D0\u4EA4\u4E2D...",
    reply: "\u56DE\u590D",
    cancel: "\u53D6\u6D88",
    replyTo: "\u56DE\u590D {name}",
    empty: "\u6682\u65E0\u8BC4\u8BBA\uFF0C\u6765\u53D1\u8868\u7B2C\u4E00\u6761\u770B\u6CD5\u5427",
    success: "\u8BC4\u8BBA\u53D1\u8868\u6210\u529F",
    pendingNotice: "\u8BC4\u8BBA\u5DF2\u63D0\u4EA4\uFF0C\u5F85\u7BA1\u7406\u5458\u5BA1\u6838\u901A\u8FC7\u540E\u5C06\u516C\u5F00\u663E\u793A",
    underReview: "\u5BA1\u6838\u4E2D",
    loginAs: "\u5DF2\u767B\u5F55\uFF1A{name}",
    requireNickname: "\u8BF7\u586B\u5199\u4F60\u7684\u6635\u79F0",
    v2exDiscussion: "\u6765\u81EA V2EX \u793E\u533A\u8BA8\u8BBA\uFF0C\u70B9\u51FB\u67E5\u770B\u539F\u5E16",
    linuxdoDiscussion: "\u6765\u81EA LINUX DO \u793E\u533A\u8BA8\u8BBA\uFF0C\u70B9\u51FB\u67E5\u770B\u539F\u5E16",
    viewOriginal: "\u539F\u8BA8\u8BBA"
  },
  blog: {
    notFound: "\u6587\u7AE0\u4E0D\u5B58\u5728",
    notFoundDesc: "\u8BE5\u6587\u7AE0\u53EF\u80FD\u5DF2\u88AB\u79FB\u9664\u6216\u5730\u5740\u6709\u8BEF",
    returnBlog: "\u8FD4\u56DE\u535A\u5BA2\u5217\u8868"
  },
  layout: {
    communityBtn: "\u8054\u7CFB",
    communityShort: "\u8054\u7CFB",
    userMenu: "\u8D26\u53F7\u4E0E\u8054\u7CFB\u83DC\u5355",
    githubTitle: "GitHub \u4ED3\u5E93",
    toggleTheme: "\u5207\u6362\u914D\u8272\u6A21\u5F0F",
    switchLang: "\u5207\u6362\u8BED\u8A00",
    expandSavingsMenu: "\u5C55\u5F00\u7701\u94B1\u83DC\u5355"
  },
  contactModal: {
    badge: "\u8054\u7CFB\u4F5C\u8005\u4E0E\u6280\u672F\u4EA4\u6D41",
    title: "\u8054\u7CFB\u4E0E\u4EA4\u6D41",
    subtitle: "\u6DFB\u52A0\u4E2A\u4EBA\u5FAE\u4FE1\u3001\u53D1\u9001\u90AE\u4EF6\uFF0C\u6216\u5173\u6CE8\u516C\u4F17\u53F7\u83B7\u53D6\u6DF1\u5EA6\u6280\u672F\u590D\u76D8",
    wechatTitle: "\u5FAE\u4FE1\u4E0E\u4EA4\u6D41\u7FA4",
    wechatBadge: "\u76F4\u8054 / \u8FDB\u7FA4",
    wechatIdLabel: "\u5FAE\u4FE1\uFF1A",
    copyWechat: "\u590D\u5236\u5FAE\u4FE1",
    copied: "\u5DF2\u590D\u5236",
    emailLabel: "\u90AE\u7BB1\uFF1A",
    copyEmail: "\u590D\u5236\u90AE\u7BB1",
    tip1: "\u52A0\u597D\u53CB\u5907\u6CE8\u3010\u53EF\u559C\u3011\uFF0C\u53EF\u9080\u8BF7\u8FDB\u5165\u4E00\u4EBA\u516C\u53F8\u4EA4\u6D41\u7FA4",
    tip2: "\u4EA4\u6D41 AI \u7F16\u7A0B\u3001\u72EC\u7ACB\u4EA7\u54C1\u7814\u53D1\u3001\u51FA\u6D77\u4E0E\u7B97\u529B\u9009\u578B",
    tip3: "\u7EAF\u7CB9\u6280\u672F\u4E0E\u5B9E\u6218\u4EA4\u6D41\uFF0C\u65E0\u5E7F\u544A\u6253\u6270",
    oaTitle: "\u5FAE\u4FE1\u516C\u4F17\u53F7",
    oaBadge: "\u6DF1\u5EA6\u957F\u6587",
    oaScanTitle: "\u5173\u6CE8\u3010\u53EF\u559CAI\u3011",
    oaScanDesc: "\u5FAE\u4FE1\u626B\u7801\uFF0C\u8FFD\u8E2A\u5927\u6A21\u578B\u5B9E\u6D4B\u6570\u636E\u4E0E\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u957F\u6587",
    oaScanNote: "\u540E\u53F0\u56DE\u590D\u3010\u8FDB\u7FA4\u3011\u4EA6\u53EF\u83B7\u53D6\u4EA4\u6D41\u7FA4\u5165\u53E3",
    oaFooter: "\u5B9A\u671F\u590D\u76D8\u72EC\u7ACB\u4EA7\u54C1\u771F\u5B9E\u6570\u636E\u4E0E\u5DE5\u7A0B\u5B9E\u8DF5",
    footerLeft: "\u76F4\u63A5\u6C9F\u901A \xB7 \u7EAF\u7CB9\u4EA4\u6D41",
    closeLabel: "\u5173\u95ED",
    tabInquiry: "\u5728\u7EBF\u7559\u8A00\u54A8\u8BE2",
    tabHistory: "\u6211\u7684\u54A8\u8BE2\u8BB0\u5F55",
    tabDirect: "\u5FAE\u4FE1\u4E0E\u793E\u7FA4\u76F4\u8054",
    catPresales: "\u552E\u524D\u4E0E\u4EA7\u54C1\u54A8\u8BE2",
    catCooperation: "\u5546\u52A1\u4E0E\u5B9A\u5236\u5408\u4F5C",
    catFeedback: "\u5DE5\u5177\u6536\u5F55\u4E0E\u5EFA\u8BAE",
    catTechnical: "\u6280\u672F\u4E0E\u8D26\u53F7\u6392\u969C",
    nameLabel: "\u60A8\u7684\u79F0\u547C",
    namePlaceholder: "\u4F8B\u5982\uFF1AAlex / \u67D0\u72EC\u7ACB\u5F00\u53D1\u8005",
    contactEmailLabel: "\u8054\u7CFB\u90AE\u7BB1",
    contactEmailPlaceholder: "\u63A5\u6536\u56DE\u590D\u901A\u77E5\u7684\u90AE\u7BB1\uFF08\u63A8\u8350\u586B\u5199\uFF09",
    contactInfoLabel: "\u5FAE\u4FE1\u53F7 / \u5176\u4ED6\u8054\u7CFB\u65B9\u5F0F",
    contactInfoPlaceholder: "\u9009\u586B\uFF0C\u4F8B\u5982\u5FAE\u4FE1\u53F7\u3001Telegram \u7B49",
    contentLabel: "\u54A8\u8BE2\u6216\u7559\u8A00\u5185\u5BB9",
    contentPlaceholder: "\u8BF7\u63CF\u8FF0\u60A8\u7684\u5177\u4F53\u8BC9\u6C42\u3001\u5408\u4F5C\u8BBE\u60F3\u6216\u9047\u5230\u7684\u95EE\u9898\uFF0C\u7AD9\u957F\u6536\u5230\u540E\u5C06\u7B2C\u4E00\u65F6\u95F4\u56DE\u590D\u5E76\u90AE\u4EF6\u901A\u77E5\u60A8...",
    submitBtn: "\u63D0\u4EA4\u7559\u8A00\u54A8\u8BE2",
    submittingBtn: "\u63D0\u4EA4\u4E2D...",
    submitSuccessTitle: "\u7559\u8A00\u5DF2\u63D0\u4EA4\uFF01",
    submitSuccessDesc: "\u60A8\u7684\u54A8\u8BE2\u5355\u53F7\u4E3A {ticketNo}\u3002\u540E\u53F0\u56DE\u590D\u540E\u4F1A\u81EA\u52A8\u53D1\u9001\u90AE\u4EF6\u901A\u77E5\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u968F\u65F6\u5728\u6B64\u67E5\u770B\u8FDB\u5EA6\u5E76\u7EE7\u7EED\u5BF9\u8BDD\u3002",
    viewThreadBtn: "\u67E5\u770B\u5BF9\u8BDD\u8FDB\u5EA6",
    newInquiryBtn: "\u53D1\u8D77\u65B0\u54A8\u8BE2",
    emptyHistory: "\u6682\u65E0\u672C\u5730\u54A8\u8BE2\u8BB0\u5F55",
    emptyHistoryHint: "\u63D0\u4EA4\u7559\u8A00\u540E\uFF0C\u60A8\u7684\u54A8\u8BE2\u5355\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u6216\u7ED1\u5B9A\u81F3\u60A8\u7684\u767B\u5F55\u8D26\u53F7\u3002",
    lookupPlaceholder: "\u8F93\u5165\u54A8\u8BE2\u5355\u53F7 (\u5982 TK-20261025-1234)",
    backToList: "\u8FD4\u56DE\u5217\u8868",
    replyPlaceholder: "\u8F93\u5165\u8865\u5145\u8BF4\u660E\u6216\u7EE7\u7EED\u8FFD\u95EE...",
    sendReplyBtn: "\u53D1\u9001\u56DE\u590D",
    sendingReplyBtn: "\u53D1\u9001\u4E2D...",
    statusOpen: "\u5F85\u56DE\u590D",
    statusInProgress: "\u8DDF\u8FDB\u4E2D",
    statusAutoResolved: "\u667A\u80FD\u89E3\u7B54",
    statusResolved: "\u5DF2\u56DE\u590D",
    statusClosed: "\u5DF2\u5B8C\u7ED3",
    senderUser: "\u6211",
    senderAdmin: "\u53EF\u4E50 (\u7AD9\u957F)",
    senderBot: "\u667A\u80FD\u52A9\u624B",
    senderSystem: "\u7CFB\u7EDF\u901A\u77E5"
  },
  homeCta: {
    downloadMac: "\u4E0B\u8F7D Hoxi \u684C\u9762\u7AEF (macOS)",
    leaderboard: "\u5927\u6A21\u578B\u6218\u529B\u699C",
    savings: "\u7B97\u529B\u964D\u672C\u5BF9\u6BD4",
    readiness: "\u8FDB\u5165\u80FD\u529B\u4F53\u68C0",
    blog: "\u5B9E\u6218\u535A\u5BA2\u5FC3\u5F97",
    endorsement: "\u539F\u751F Wails + OpenCode \u5185\u6838 \xB7 Git Worktree \u6C99\u7BB1\u9694\u79BB"
  },
  desktop: {
    downloadMacArm64: "\u4E0B\u8F7D macOS \u7248 (Apple Silicon)",
    downloadWindows: "\u4E0B\u8F7D Windows \u7248 (x64)",
    downloadLinux: "\u4E0B\u8F7D Linux \u7248 (x64)",
    downloadDefault: "\u4E0B\u8F7D Hoxi \u684C\u9762\u7AEF",
    platformMac: "macOS (Apple Silicon)",
    platformWindows: "Windows (x64)",
    platformLinux: "Linux (x64)",
    osMac: "macOS",
    osWindows: "Windows",
    osLinux: "Linux",
    morePlatforms: "\u5176\u4ED6\u5E73\u53F0\u5B89\u88C5\u5305",
    mirrorGlobal: "GitHub Releases",
    sourceCode: "GitHub \u6E90\u7801",
    archBadge: "WORKSPACE",
    archTitle: "\u4E09\u680F\u539F\u751F\u5DE5\u4F5C\u53F0",
    archSubtitle: "\u5DE6\u680F\u7BA1\u5206\u652F\uFF0C\u4E2D\u680F\u7BA1\u5BF9\u8BDD\u4E0E\u7EA0\u504F\uFF0C\u53F3\u680F\u5BA1\u4EE3\u7801\u4E0E\u7EC8\u7AEF",
    mockLeftTitle: "\u5206\u652F\u4E0E\u4F1A\u8BDD",
    mockCenterTitle: "\u5B9E\u65F6\u65F6\u95F4\u7EBF \xB7 \u968F\u65F6\u7EA0\u504F",
    mockRightTitle: "DIFF \xB7 \u8BB0\u5FC6 \xB7 \u7EC8\u7AEF",
    mockStatusBusy: "\u8FD0\u884C\u4E2D",
    mockSteerHint: "\u968F\u65F6\u8F93\u5165\u7EA0\u504F\u6307\u4EE4\uFF0C\u6216\u6309 Esc \u4E2D\u6B62...",
    mockGateTitle: "\u5B89\u5168\u62E6\u622A \xB7 \u9700\u786E\u8BA4",
    mockMergeBtn: "\u4E00\u952E\u5408\u5E76",
    soloBannerBadge: "SOLO BUILDER",
    soloBannerTitle: "\u6B63\u5728\u4E00\u4E2A\u4EBA\u505A\u72EC\u7ACB\u4EA7\u54C1\uFF1F",
    soloBannerDesc: "\u4E94\u7EF4\u80FD\u529B\u6D4B\u8BC4\u3001\u7B97\u529B\u964D\u672C\u8D26\u672C\u3001\u51FA\u6D77\u5DE5\u5177\u7BB1\u4E0E\u5B9E\u6218\u590D\u76D8",
    soloBannerCta: "\u8FDB\u5165\u4E00\u4EBA\u516C\u53F8\u95E8\u6237 \u2192",
    bentoDesktopTitle: "Hoxi Desktop",
    bentoDesktopDesc: "\u591A\u4E2A Agent \u5E76\u884C\u5199\u4EE3\u7801\uFF0C\u6BCF\u4E2A\u4F1A\u8BDD\u72EC\u5360\u72EC\u7ACB Git Worktree\uFF0C\u4E92\u4E0D\u5E72\u6270\u3002",
    bentoArchNote: "\u539F\u751F\u652F\u6301 macOS (Apple Silicon), Windows (x64), Linux (x64) \xB7 \u5185\u7F6E OpenCode \u8FD0\u884C\u65F6",
    bentoCliTitle: "\u591A CLI \u968F\u65F6\u63A5\u529B",
    bentoCliDesc: "\u5185\u7F6E OpenCode\uFF0C\u4E00\u952E\u5207\u6362 Claude Code / Codex / Gemini",
    bentoMobileTitle: "\u624B\u673A\u8FDC\u7A0B\u534F\u540C\u4E0E\u5BA1\u6279",
    bentoMobileBadge: "\u5373\u5C06\u4E0A\u7EBF",
    bentoMobileDesc: "\u626B\u7801\u914D\u5BF9\u684C\u9762\u7AEF\uFF0C\u79BB\u5F00\u5DE5\u4F4D\u4E5F\u80FD\u7528\u624B\u673A\u5BA1 Diff\u3001\u6279\u9AD8\u5371\u547D\u4EE4\u3001\u8BED\u97F3\u4E0B\u6307\u4EE4",
    bentoModelTitle: "50+ \u6A21\u578B\u4E0E\u4F18\u60E0\u4E13\u7EBF",
    bentoModelDesc: "\u5B9E\u6D4B\u8DD1\u5206\u4E0E\u771F\u5B9E\u5E95\u4EF7\uFF0C\u4E00\u952E\u76F4\u8FDE\u4E2D\u8F6C\u7AD9\u6216\u4F7F\u7528\u81EA\u6709 Key",
    bentoOpenTitle: "100% \u5F00\u6E90\u900F\u660E",
    bentoOpenDesc: "\u4EE3\u7801\u4E0E\u5BC6\u94A5\u5B8C\u5168\u7559\u5728\u672C\u5730\uFF0C\u96F6\u9ED1\u76D2\u3001\u96F6\u9690\u5F62\u52A0\u4EF7",
    pillarsBadge: "BUILT DIFFERENTLY",
    pillarsTitle: "\u4E3A\u4F60\u6253\u5DE5\uFF0C\u800C\u4E0D\u662F\u628A\u4F60\u9501\u8FDB\u9ED1\u76D2",
    pillarsSub: "\u591A\u5206\u652F\u5E76\u884C\u3001\u4EF7\u683C\u900F\u660E\u3001\u684C\u9762\u4E0E\u624B\u673A\u5168\u94FE\u8DEF\u53EF\u63A7",
    p1Tag: "\u5E76\u884C\u5F00\u53D1",
    p1Title: "\u4E00\u4E2A\u7A97\u53E3\uFF0C\u591A\u4E2A Agent \u5E76\u884C",
    p1Desc: "\u6BCF\u4E2A\u4F1A\u8BDD\u72EC\u7ACB Git Worktree \u6C99\u7BB1\uFF0C\u540C\u65F6\u6539\u591A\u4E2A\u529F\u80FD\u4E5F\u4E0D\u51B2\u7A81\uFF0C\u5199\u5B8C\u4E00\u952E Diff \u5408\u5E76\u3002",
    p2Tag: "\u7B97\u529B\u81EA\u7531",
    p2Title: "\u5E95\u4EF7\u7528\u6A21\u578B\uFF0C\u7EDD\u4E0D\u6346\u7ED1\u62BD\u6210",
    p2Desc: "\u81EA\u5E26\u4EFB\u610F API Key \u96F6\u8D39\u7528\uFF1B\u6216\u4E00\u952E\u63A5\u5165\u5B9E\u6D4B\u4F18\u9009\u4E13\u7EBF\uFF0C\u7B97\u529B\u6210\u672C\u7ACB\u7701 35%~60%\u3002",
    p3Tag: "\u53CC\u7AEF\u53EF\u63A7",
    p3Title: "\u957F\u6548\u8BB0\u5FC6\uFF0C\u79BB\u5E2D\u624B\u673A\u4E5F\u80FD\u6279\u6743\u9650",
    p3Desc: "\u672C\u5730 Markdown \u6C89\u6DC0\u67B6\u6784\u8BB0\u5FC6\uFF1B\u9AD8\u5371\u547D\u4EE4\u5FC5\u7ECF PreToolUse \u95E8\u63A7\uFF0C\u4EBA\u4E0D\u5728\u7535\u8111\u524D\u53EF\u7528\u624B\u673A\u8FDC\u7A0B\u5BA1\u6279\u3002",
    tabWorktree: "01 \xB7 \u5E76\u884C\u5206\u652F",
    tabMemory: "02 \xB7 \u9879\u76EE\u8BB0\u5FC6",
    tabSteer: "03 \xB7 \u5B9E\u65F6\u7EA0\u504F",
    tabHandoff: "04 \xB7 CLI \u63A5\u529B",
    tabMobile: "05 \xB7 \u624B\u673A\u534F\u540C",
    faqBadge: "FAQ",
    faqTitle: "\u5E38\u89C1\u95EE\u9898",
    faqSub: "\u5173\u4E8E\u67B6\u6784\u3001\u8BA1\u8D39\u4E0E\u9690\u79C1\u7684\u5FEB\u901F\u89E3\u7B54",
    faq1Q: "Hoxi Desktop \u662F\u4EC0\u4E48\uFF1F\u548C OpenCode \u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F",
    faq1A: "Hoxi \u662F\u57FA\u4E8E Wails v2 \u6784\u5EFA\u7684 macOS \u539F\u751F AI \u7814\u53D1\u5DE5\u4F5C\u53F0\u3002\u5E95\u5C42\u76F4\u63A5\u76D1\u7BA1\u5B98\u65B9 OpenCode \u5F15\u64CE\uFF0C\u5E76\u6269\u5C55\u4E86\u591A\u5206\u652F Worktree \u9694\u79BB\u3001\u8DE8\u4F1A\u8BDD\u8BB0\u5FC6\u3001CLI \u4E00\u952E\u63A5\u529B\u4E0E\u6A21\u578B\u699C\u5355\u3002",
    faq2Q: "\u4E3A\u4EC0\u4E48\u6BCF\u4E2A\u4F1A\u8BDD\u8981\u7528 Git Worktree \u9694\u79BB\uFF1F",
    faq2A: "\u907F\u514D\u591A\u4E2A AI \u540C\u65F6\u6539\u4EE3\u7801\u4EA7\u751F\u51B2\u7A81\u3002\u6BCF\u4E2A\u4F1A\u8BDD\u5728\u72EC\u7ACB\u5DE5\u4F5C\u6811\u4E2D\u8FD0\u884C\uFF0C\u5BA1\u67E5\u65E0\u8BEF\u540E\u53EF\u4E00\u952E\u5408\u5E76\u56DE\u4E3B\u5206\u652F\u3002",
    faq3Q: "\u600E\u4E48\u8BA1\u8D39\uFF1F\u53EF\u4EE5\u7528\u81EA\u5DF1\u7684 API Key \u5417\uFF1F",
    faq3A: "\u8F6F\u4EF6\u672C\u8EAB 100% \u514D\u8D39\u5F00\u6E90\u3002\u4F60\u53EF\u4EE5\u514D\u8D39\u586B\u5165\u81EA\u5DF1\u7684\u5B98\u65B9 API Key\uFF0C\u4E5F\u53EF\u4EE5\u4E00\u952E\u63A5\u5165\u4F18\u9009\u9AD8\u901F\u4E2D\u8F6C\u4E13\u7EBF\uFF08\u7701 35%~60%\uFF09\u3002",
    faq4Q: "\u4EE3\u7801\u548C\u5BC6\u94A5\u5B89\u5168\u5417\uFF1F",
    faq4A: "\u6240\u6709\u4EE3\u7801\u3001\u8BB0\u5FC6\u6587\u4EF6\u4E0E\u5BC6\u94A5\u5747\u4FDD\u5B58\u5728\u672C\u5730\u8BBE\u5907\u3002\u6D89\u53CA rm\u3001sudo\u3001\u5F3A\u63A8\u7B49\u5371\u9669\u7EC8\u7AEF\u547D\u4EE4\u4F1A\u5F3A\u5236\u62E6\u622A\u5E76\u5F39\u7A97\u786E\u8BA4\u3002",
    faq5Q: "\u624B\u673A\u7AEF\uFF08iOS / Android\uFF09\u600E\u4E48\u8FDE\u7535\u8111\uFF1F\u4EE3\u7801\u4F1A\u7ECF\u8FC7\u7B2C\u4E09\u65B9\u670D\u52A1\u5668\u5417\uFF1F",
    faq5A: "\u684C\u9762\u7AEF\u300C\u8BBE\u7F6E \u2192 \u8FDC\u7A0B\u300D\u751F\u6210\u914D\u5BF9\u4E8C\u7EF4\u7801\uFF0C\u624B\u673A\u626B\u7801\u540E\u4F18\u5148\u8D70\u5C40\u57DF\u7F51\u76F4\u8FDE\uFF08:5417\uFF09\uFF0C\u5916\u51FA\u53EF\u5207\u4F60\u81EA\u5DF1\u7684 Cloudflare Tunnel\uFF08:5418\uFF09\u6216 GoPanel \u53CD\u5411\u96A7\u9053\u3002iPhone \u5BA1\u6279\u63A8\u9001\u53EA\u53D1\u5F85\u5904\u7406\u8BA1\u6570\uFF0C\u4E0D\u542B\u4EFB\u4F55\u4EE3\u7801\u3001\u8DEF\u5F84\u6216\u547D\u4EE4\u6B63\u6587\u3002"
  },
  download: {
    title: "\u4E0B\u8F7D Hoxi \u5BA2\u6237\u7AEF",
    subtitle: "\u684C\u9762\u7AEF\u591A Agent \u5E76\u884C\u7F16\u7801\uFF0C\u624B\u673A\u7AEF\u79BB\u5E2D\u8FDC\u7A0B\u5BA1\u6279\u4E0E\u8BED\u97F3\u8C03\u5EA6\u3002\u684C\u9762\u5B89\u88C5\u5305\u3001\u6821\u9A8C\u503C\u4E0E\u5386\u53F2\u7248\u672C\u6211\u90FD\u4ECE\u53D1\u5E03\u7CFB\u7EDF\u5B9E\u65F6\u540C\u6B65\uFF1BiOS \u4E0E Android \u624B\u673A\u7AEF\u6B63\u5728\u6536\u5C3E\u5185\u6D4B\uFF0C\u5373\u5C06\u4E0A\u7EBF\u3002",
    seoTitle: "\u4E0B\u8F7D Hoxi \u2014 macOS / Windows / Linux \u684C\u9762\u7AEF\u4E0E iOS / Android \u624B\u673A\u7AEF | \u53EF\u559C AI",
    seoDescription: "Hoxi \u5B98\u65B9\u4E0B\u8F7D\u9875\uFF1AmacOS (Apple Silicon)\u3001Windows (x64)\u3001Linux (x64) \u684C\u9762\u5DE5\u4F5C\u53F0\u5B89\u88C5\u5305\u3001SHA-256 \u6821\u9A8C\u503C\u4E0E\u5386\u53F2\u7248\u672C\uFF0C\u4EE5\u53CA Hoxi Mobile (iOS / Android) \u624B\u673A\u7AEF\u9884\u544A\u3002",
    latestLine: "\u5F53\u524D\u6700\u65B0\u7248\u672C v{version} \xB7 \u53D1\u5E03\u4E8E {date}",
    currentDevice: "\u5F53\u524D\u8BBE\u5907",
    versionLabel: "\u7248\u672C",
    releasedLabel: "\u53D1\u5E03\u4E8E",
    sizeLabel: "\u4F53\u79EF",
    minSystem: "\u8981\u6C42 macOS {version} \u53CA\u4EE5\u4E0A",
    archMac: "Apple Silicon (arm64) \xB7 .dmg",
    archWindows: "x64 \xB7 .zip",
    archLinux: "x64 \xB7 .tar.gz",
    altMirror: "\u5907\u7528\u955C\u50CF",
    browseReleases: "\u524D\u5F80 Releases \u5217\u8868",
    checksumNote: "\u4F53\u79EF\u4E0E SHA-256 \u6211\u76F4\u63A5\u53D6\u81EA\u53D1\u5E03\u7CFB\u7EDF\uFF0C\u4E0B\u8F7D\u540E\u4F60\u53EF\u4EE5\u81EA\u884C\u6838\u5BF9\u5B89\u88C5\u5305\u5B8C\u6574\u6027\u3002",
    desktopSectionTitle: "Hoxi Desktop \xB7 \u684C\u9762\u5DE5\u4F5C\u53F0",
    mobileBadge: "COMING SOON \xB7 \u624B\u673A\u7AEF\u9884\u544A",
    mobileTitle: "Hoxi Mobile \xB7 \u53EF\u559CAI \u624B\u673A\u7AEF\uFF08iOS & Android\uFF09",
    mobileSubtitle: "\u79BB\u5F00\u7535\u8111\u5DE5\u4F4D\u4E0D\u65AD\u8054\uFF1A\u626B\u7801\u76F4\u8FDE\u4F60\u7684 Hoxi \u684C\u9762\u7AEF\u4E0E GoPanel \u670D\u52A1\u5668\uFF0C\u968F\u65F6\u67E5\u770B\u7F16\u7801\u8FDB\u5EA6\u3001\u5BA1\u67E5 Git Diff\u3001\u6279\u51C6\u9AD8\u5371\u547D\u4EE4\u3002",
    mobileIosTitle: "iOS \u7248 (iPhone)",
    mobileIosArch: "App Store / TestFlight \xB7 \u652F\u6301 APNs \u5BA1\u6279\u63D0\u9192\u63A8\u9001\u4E0E\u539F\u751F\u8BED\u97F3",
    mobileAndroidTitle: "Android \u7248",
    mobileAndroidArch: "APK \u76F4\u88C5 \xB7 \u5C40\u57DF\u7F51\u76F4\u8FDE\u4E0E\u96A7\u9053\u81EA\u52A8\u9009\u8DEF",
    mobileStatusBadge: "\u5373\u5C06\u4E0A\u7EBF",
    mobileF1Title: "\u626B\u7801\u914D\u5BF9 \xB7 \u5C40\u57DF\u7F51\u4F18\u5148\u9009\u8DEF",
    mobileF1Desc: "\u684C\u9762\u7AEF\u300C\u8BBE\u7F6E \u2192 \u8FDC\u7A0B\u300D\u751F\u6210\u4E8C\u7EF4\u7801\uFF0C\u624B\u673A\u626B\u7801\u540E\u4F18\u5148\u5C40\u57DF\u7F51\u76F4\u8FDE\uFF08:5417\uFF09\uFF0C\u5916\u51FA\u81EA\u52A8\u5207\u6362 Cloudflare Tunnel\uFF08:5418\uFF09\u6216 GoPanel \u96A7\u9053\u3002",
    mobileF2Title: "PreToolUse \u8FDC\u7A0B\u5BA1\u6279\u4E0E\u5B89\u5168\u786E\u8BA4\u5361",
    mobileF2Desc: "\u684C\u9762 Agent \u9047\u5230\u5371\u9669\u547D\u4EE4\u6682\u505C\u7B49\u5F85\u65F6\uFF0C\u624B\u673A\u6536\u5230\u63D0\u9192\uFF08\u4EC5\u542B\u5F85\u5904\u7406\u8BA1\u6570\uFF0C\u4E0D\u66B4\u9732\u4EE3\u7801\u4E0E\u547D\u4EE4\uFF09\uFF0C\u70B9\u5F00\u5373\u53EF\u67E5\u770B\u4E0A\u4E0B\u6587\u5E76\u6279\u51C6\u6216\u62D2\u7EDD\u3002",
    mobileF3Title: "\u56DB\u680F\u79FB\u52A8\u5DE5\u4F5C\u53F0",
    mobileF3Desc: "\u6C9F\u901A\uFF08\u6309\u4F4F\u8BF4\u8BDD / \u62CD\u7167 / \u610F\u56FE\u5DE5\u5177\u8C03\u7528\uFF09\xB7 \u5DE5\u4F5C\u53F0\uFF08\u7F16\u7801\u4F1A\u8BDD / Git Diff / GoPanel \u670D\u52A1\u5668\uFF09\xB7 \u4E00\u4EBA\u516C\u53F8\uFF08\u6A21\u578B\u699C / \u4E94\u7EF4\u6D4B\u8BC4\uFF09\xB7 \u6211\u7684\uFF08\u6BCF\u65E5\u7B7E\u5230\u9886\u79EF\u5206\uFF09\u3002",
    mobileNotifyBtn: "\u52A0\u5165\u4EA4\u6D41\u7FA4\u83B7\u53D6\u624B\u673A\u7AEF\u5185\u6D4B\u901A\u77E5",
    historyTitle: "\u7248\u672C\u5386\u53F2",
    historySub: "\u6BCF\u4E2A\u7248\u672C\u7684\u66F4\u65B0\u8BF4\u660E\u4E0E\u5404\u5E73\u53F0\u5B89\u88C5\u5305\uFF0C\u6211\u6309\u53D1\u5E03\u8BB0\u5F55\u5B9E\u65F6\u540C\u6B65\u3002",
    historyNoNotes: "\u8BE5\u7248\u672C\u672A\u9644\u66F4\u65B0\u8BF4\u660E\u3002",
    historyEmpty: "\u6682\u65E0\u53D1\u5E03\u8BB0\u5F55\u3002",
    allVersions: "\u5168\u90E8\u7248\u672C\u4E0E\u624B\u673A\u7AEF\u9884\u544A"
  },
  soloPage: {
    badge: "\u4E00\u4EBA\u516C\u53F8 \xB7 \u8BA4\u77E5\u3001\u9009\u578B\u4E0E\u5B9E\u6218\u8BB0\u5F55",
    titleLine1: "\u7528 AI \u6B66\u88C5\u81EA\u5DF1\uFF0C",
    titleLine2: "\u6D3B\u6210\u4E00\u652F\u961F\u4F0D",
    subtitle: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6D4B\u8BC4\u3001\u5927\u6A21\u578B\u4E0E\u4E2D\u8F6C\u7AD9\u771F\u5B9E\u8D26\u672C\u3001\u5168\u6808\u72EC\u7ACB\u5F00\u53D1\u5DE5\u5177\u7BB1\uFF0C\u4EE5\u53CA\u4ECE\u96F6\u8DD1\u901A\u95ED\u73AF\u7684\u5B9E\u6218\u957F\u6587",
    endorsement: "\u4E00\u4EBA\u516C\u53F8\uFF0C\u6210\u957F\u5B9E\u6218\u8BB0\u5F55\u3002\u81F4\u656C\u6BCF\u4E00\u4E2A\u5728\u594B\u6597\u7684\u72EC\u7ACB\u5F00\u53D1\u8005",
    seoTitle: "\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u4E2D\u5FC3 \u2014 AI \u80FD\u529B\u6D4B\u8BC4\u4E0E\u7B97\u529B\u964D\u672C\u6307\u5357 | \u53EF\u559C AI",
    seoDescription: "\u4E13\u4E3A\u72EC\u7ACB\u5F00\u53D1\u8005\u4E0E\u4E00\u4EBA\u516C\u53F8\u6253\u9020\u7684\u4E94\u7EF4\u80FD\u529B\u6D4B\u8BC4\u3001\u5927\u6A21\u578B\u4EF7\u683C\u5BF9\u6BD4\u3001\u4E2D\u8F6C\u7AD9\u8BC4\u6D4B\u4E0E\u5168\u6808\u51FA\u6D77\u5DE5\u5177\u7BB1"
  },
  homeSidebar: {
    authorAvatar: "\u559C",
    authorName: "\u6211\u662F\u53EF\u4E50 (Coller)",
    authorInitial: "C",
    authorRole: "\u53EF\u559C AI \u7AD9\u957F",
    communityBtn: "\u8054\u7CFB\u4E0E\u4EA4\u6D41",
    aboutMe: "\u5173\u4E8E\u6211",
    columnBadge: "\u8FDE\u8F7D\u4E13\u680F",
    columnStatus: "\u8FDE\u8F7D\u4E2D",
    columnTitle: "\u300A\u5E95\u5C42\u91CD\u6784\u300B",
    columnSub: "Refactoring the Self",
    columnDesc: "\u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u5FC3\u667A\u6A21\u578B\u4E0E\u5DE5\u4F5C\u6D41\u91CD\u6784\u5B9E\u5F55",
    columnCta: "\u8FDB\u5165\u8FDE\u8F7D\u9605\u8BFB",
    projectsTitle: "\u6211\u5728\u505A\u7684\u9879\u76EE",
    projectsAll: "\u5168\u90E8\u9879\u76EE",
    dataTitle: "\u6570\u636E",
    dataSummary: "\u5DF2\u6536\u5F55 {models} \u4E2A\u6A21\u578B \xB7 {vendors} \u5BB6\u5382\u5546",
    blogTitle: "\u5B9E\u6218\u535A\u5BA2",
    blogAll: "\u5168\u90E8\u6587\u7AE0"
  },
  homeReadiness: {
    badge: "\u80FD\u529B\u6D4B\u8BC4",
    title: "\u505A\u4E00\u4EBA\u516C\u53F8\uFF0C\u4F60\u8FD8\u5DEE\u54EA\u4E00\u5757\uFF1F",
    subtitle: "12 \u9053\u60C5\u666F\u9898\uFF0C\u770B\u4F60\u5728\u9A8C\u8BC1\u3001\u4EA4\u4ED8\u3001\u5206\u53D1\u3001\u6210\u672C\u548C\u5FC3\u6001\u4E0A\u7684\u77ED\u677F",
    roleLabel: "\u6309\u5C97\u4F4D\u51FA\u9898\uFF1A",
    roleEng: "\u5DE5\u7A0B\u5E08",
    rolePm: "\u4EA7\u54C1\u7ECF\u7406",
    roleDesign: "\u8BBE\u8BA1\u5E08",
    roleGrowth: "\u8FD0\u8425\u589E\u957F",
    startBtn: "\u5F00\u59CB\u6D4B\u8BC4",
    durationNote: "\u514D\u767B\u5F55 \xB7 \u7EA6 3 \u5206\u949F",
    dimTitle: "\u4E94\u4E2A\u7EF4\u5EA6",
    dimSample: "\u793A\u4F8B",
    dimCta: "\u770B\u770B\u6BCF\u4E2A\u7EF4\u5EA6\u6D4B\u4EC0\u4E48 \u2192",
    dim1Name: "\u5546\u4E1A\u4E0E\u9A8C\u8BC1\u55C5\u89C9",
    dim1Focus: "MVP\u6536\u8D39\u9A8C\u8BC1",
    dim2Name: "\u5168\u6808 AI \u4EA4\u4ED8\u529B",
    dim2Focus: "\u7AEF\u5230\u7AEF\u4EA4\u4ED8",
    dim3Name: "\u6D41\u91CF\u4E0E\u5206\u53D1\u529B",
    dim3Focus: "\u51B7\u542F\u52A8\u5206\u53D1",
    dim4Name: "\u6210\u672C\u6838\u7B97\u4E0E\u6760\u6746",
    dim4Focus: "\u7B97\u529B\u6210\u672C\u6838\u7B97",
    dim5Name: "\u5FC3\u667A\u8DD1\u9053\u4E0E\u97E7\u6027",
    dim5Focus: "\u6297\u632B\u4E0E\u6B62\u635F"
  },
  homeSavings: {
    title: "\u7B97\u529B\u964D\u672C\u5BF9\u6BD4",
    subtitle: "\u6A21\u578B\u5E95\u4EF7\u3001\u56FD\u5185\u4E13\u7EBF\u4E0E IDE \u5957\u9910\u771F\u5B9E\u8D26\u672C",
    viewAll: "\u67E5\u770B\u5B8C\u6574\u65B9\u6848",
    dataGlance: "\u5B9E\u6D4B\u6570\u636E\u4E00\u89C8",
    tabGateways: "\u4E2D\u8F6C\u7AD9",
    tabModels: "\u6A21\u578B",
    tabPlans: "\u7F16\u7A0B\u5957\u9910",
    colGateway: "\u4E2D\u8F6C\u7AD9",
    colLatency: "\u5EF6\u8FDF",
    colUptime: "\u5728\u7EBF\u7387",
    colPrice: "\u53C2\u8003\u5355\u4EF7",
    colAction: "\u64CD\u4F5C",
    colModel: "\u6A21\u578B",
    colScenes: "\u6807\u7B7E / \u573A\u666F",
    colScore: "\u7EFC\u5408\u5206",
    colBlended: "\u6DF7\u5408\u5355\u4EF7",
    configureBtn: "\u8BE6\u60C5\u4E0E\u914D\u7F6E",
    detailsLink: "\u8BE6\u60C5 \u2192",
    quotaLink: "\u67E5\u770B\u989D\u5EA6 \u2192",
    overallPrefix: "\u7EFC\u5408"
  },
  homeTools: {
    title: "\u5168\u6808\u5DE5\u5177\u7BB1",
    viewAll: "\u5168\u90E8 {count} \u4E2A",
    freeStart: "\u514D\u8D39\u8D77\u6B65",
    visitSite: "\u5B98\u7F51"
  },
  authDesktop: {
    title: "\u6388\u6743\u767B\u5F55 Hoxi \u684C\u9762\u5BA2\u6237\u7AEF",
    invalidState: "\u65E0\u6548\u7684\u6388\u6743\u94FE\u63A5\uFF08\u7F3A\u5C11\u6216\u683C\u5F0F\u9519\u8BEF\u7684 state \u53C2\u6570\uFF09\u3002\u8BF7\u5728 Hoxi \u5BA2\u6237\u7AEF\u91CD\u65B0\u53D1\u8D77\u6388\u6743",
    cancelled: "\u5DF2\u53D6\u6D88\u6388\u6743\u3002\u60A8\u53EF\u4EE5\u76F4\u63A5\u5173\u95ED\u6B64\u6807\u7B7E\u9875\u5E76\u8FD4\u56DE Hoxi \u5BA2\u6237\u7AEF",
    checkingSession: "\u6B63\u5728\u9A8C\u8BC1\u5B98\u7F51\u767B\u5F55\u72B6\u6001...",
    redirectingLogin: "\u672A\u68C0\u6D4B\u5230\u767B\u5F55\u72B6\u6001\uFF0C\u6B63\u5728\u524D\u5F80\u767B\u5F55\u9875\u9762...",
    subtitle: "Hoxi \u684C\u9762\u7AEF\u6B63\u5728\u7533\u8BF7\u4E0E\u5F53\u524D\u8D26\u53F7\u5EFA\u7ACB\u8FDE\u63A5\u5E76\u540C\u6B65\u5F00\u53D1\u6743\u9650",
    accountLabel: "\u6388\u6743\u767B\u5F55\u8D26\u53F7",
    activeBadge: "Active",
    perm1: "\u81EA\u52A8\u63A5\u5165\u4E91\u7AEF\u6A21\u578B\u7F51\u5173\u4E0E\u989D\u5EA6\u540C\u6B65",
    perm2: "\u83B7\u53D6\u6700\u65B0\u7248\u672C\u5728\u7EBF\u66F4\u65B0\u4E0E\u591A\u5E73\u53F0\u955C\u50CF",
    singleDeviceNote: "\u63D0\u793A\uFF1A\u5B8C\u6210\u6388\u6743\u540E\u5C06\u4E3A\u672C\u53F0\u8BBE\u5907\u7B7E\u53D1\u72EC\u5360\u51ED\u8BC1\u3002\u5982\u5728\u5176\u4ED6\u8BBE\u5907\u4E0A\u5DF2\u6709\u6D3B\u8DC3\u767B\u5F55\uFF0C\u65E7\u51ED\u8BC1\u5C06\u81EA\u52A8\u5931\u6548",
    submitting: "\u6B63\u5728\u6388\u6743...",
    confirmBtn: "\u786E\u8BA4\u6388\u6743",
    cancelBtn: "\u53D6\u6D88",
    doneTitle: "\u6388\u6743\u6210\u529F",
    doneDesc: "\u51ED\u8BC1\u5DF2\u6210\u529F\u7B7E\u53D1\uFF0C\u6B63\u5728\u5C1D\u8BD5\u81EA\u52A8\u5524\u9192 Hoxi \u684C\u9762\u5BA2\u6237\u7AEF...",
    openAppBtn: "\u7ACB\u5373\u5524\u9192 Hoxi \u5BA2\u6237\u7AEF",
    closePageHint: "\u5BA2\u6237\u7AEF\u82E5\u5DF2\u81EA\u52A8\u5B8C\u6210\u767B\u5F55\uFF0C\u60A8\u53EF\u76F4\u63A5\u5173\u95ED\u6B64\u9875\u9762"
  },
  auth: {
    loginTitle: "\u767B\u5F55 Hoxi",
    loginSubtitle: "\u4F7F\u7528\u5F00\u53D1\u8005\u8D26\u53F7\u767B\u5F55\uFF0C\u540C\u6B65 Hoxi \u684C\u9762\u5DE5\u4F5C\u53F0\u4E0E\u4E91\u7AEF\u80FD\u529B",
    registerTitle: "\u521B\u5EFA Hoxi \u8D26\u53F7",
    registerSubtitle: "\u6CE8\u518C\u5373\u53EF\u6388\u6743\u767B\u5F55 Hoxi \u684C\u9762\u5BA2\u6237\u7AEF\u5E76\u5F00\u542F\u667A\u80FD\u4F53\u5DE5\u7A0B\u4F53\u9A8C",
    desktopRedirectHint: "\u767B\u5F55\u6210\u529F\u540E\u5C06\u81EA\u52A8\u8FD4\u56DE Hoxi \u684C\u9762\u7AEF\u5B8C\u6210\u8BBE\u5907\u6388\u6743",
    continueWithGithub: "\u4F7F\u7528 GitHub \u7EE7\u7EED",
    continueWithGoogle: "\u4F7F\u7528 Google \u7EE7\u7EED",
    orWithEmail: "\u6216\u4F7F\u7528\u90AE\u7BB1\u8D26\u53F7",
    nickname: "\u6635\u79F0\uFF08\u9009\u586B\uFF09",
    nicknamePlaceholder: "\u4F60\u7684\u5F00\u53D1\u8005\u79F0\u547C",
    email: "\u7535\u5B50\u90AE\u7BB1",
    emailPlaceholder: "\u8F93\u5165\u5E38\u7528\u90AE\u7BB1\u5730\u5740",
    password: "\u5BC6\u7801",
    passwordPlaceholder: "\u8F93\u5165\u767B\u5F55\u5BC6\u7801",
    signIn: "\u767B\u5F55",
    signingIn: "\u6B63\u5728\u767B\u5F55...",
    createAccount: "\u6CE8\u518C\u8D26\u53F7",
    creatingAccount: "\u6B63\u5728\u6CE8\u518C...",
    noAccount: "\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF1F",
    alreadyHaveAccount: "\u5DF2\u6709\u8D26\u53F7\uFF1F",
    loginFailed: "\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u90AE\u7BB1\u6216\u5BC6\u7801\u662F\u5426\u6B63\u786E",
    registerFailed: "\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u586B\u5199\u4FE1\u606F\u540E\u91CD\u8BD5",
    oauthGithubFailed: "GitHub \u6388\u6743\u767B\u5F55\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u6216\u4F7F\u7528\u90AE\u7BB1\u767B\u5F55",
    oauthGoogleFailed: "Google \u6388\u6743\u767B\u5F55\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u6216\u4F7F\u7528\u90AE\u7BB1\u767B\u5F55",
    oauthEmailUnverified: "\u7B2C\u4E09\u65B9\u8D26\u53F7\u90AE\u7BB1\u672A\u9A8C\u8BC1\uFF0C\u8BF7\u5148\u9A8C\u8BC1\u90AE\u7BB1\u6216\u76F4\u63A5\u4F7F\u7528\u90AE\u7BB1\u5BC6\u7801\u767B\u5F55"
  },
  authMobile: {
    invalidState: "\u65E0\u6548\u7684\u767B\u5F55\u94FE\u63A5",
    invalidStateHint: "\u8BF7\u5728\u53EF\u559CAI \u624B\u673A\u7AEF\u91CD\u65B0\u53D1\u8D77\u767B\u5F55",
    exchanging: "\u6B63\u5728\u628A\u767B\u5F55\u72B6\u6001\u4EA4\u7ED9\u624B\u673A\u2026",
    readyTitle: "\u767B\u5F55\u72B6\u6001\u5DF2\u5C31\u7EEA",
    readyDesc: "\u5F53\u524D\u8D26\u53F7\uFF1A{account}\u3002\u8BF7\u8FD4\u56DE\u53EF\u559CAI \u624B\u673A\u7AEF\u7EE7\u7EED\u64CD\u4F5C",
    openAppBtn: "\u6253\u5F00\u53EF\u559CAI",
    closeHint: "\u5982\u679C\u6CA1\u6709\u81EA\u52A8\u8DF3\u8F6C\uFF0C\u8BF7\u70B9\u51FB\u4E0A\u9762\u7684\u6309\u94AE\uFF1B\u5B8C\u6210\u540E\u53EF\u5173\u95ED\u6B64\u9875\u9762",
    failedTitle: "\u767B\u5F55\u672A\u5B8C\u6210",
    retryBtn: "\u91CD\u8BD5"
  },
  site: {
    name: "\u53EF\u559C AI"
  },
  member: {
    shell: {
      eyebrow: "Hoxi Member Center",
      title: "\u4F1A\u5458\u4E2D\u5FC3",
      subtitle: "\u7BA1\u7406\u60A8\u7684\u7B7E\u5230\u79EF\u5206\u3001\u7B97\u529B\u989D\u5EA6\u3001API \u5BC6\u94A5\u4E0E\u8C03\u7528\u660E\u7EC6",
      navEntry: "\u4F1A\u5458\u4E2D\u5FC3",
      mainNavigation: "\u4F1A\u5458\u5BFC\u822A",
      exploreModels: "\u6D4F\u89C8\u6A21\u578B\u4E0E\u7701\u94B1\u699C",
      guest: "\u53EF\u559C\u5F00\u53D1\u8005",
      rateTitle: "\u79EF\u5206\u7ED3\u7B97\u53E3\u5F84",
      rateHint: "\u79EF\u5206\u76F4\u63A5\u843D\u5165 \u94B1\u5305 points \u6C60\uFF0C\u8C03\u7528\u6A21\u578B\u65F6\u6309\u771F\u5B9E Token \u6D88\u8017\u81EA\u52A8\u62B5\u6263\u3002"
    },
    nav: {
      dashboard: "\u6982\u89C8",
      rewards: "\u6BCF\u65E5\u7B7E\u5230\u4E0E\u79EF\u5206",
      models: "\u53EF\u8C03\u7528\u6A21\u578B",
      keys: "API \u5BC6\u94A5",
      billing: "\u79EF\u5206\u4E0E\u8C03\u7528\u660E\u7EC6",
      tickets: "\u6211\u7684\u54A8\u8BE2\u4E0E\u5DE5\u5355",
      account: "\u8D26\u53F7\u8BBE\u7F6E"
    },
    common: {
      pointsUnit: "\u79EF\u5206",
      loading: "\u6B63\u5728\u52A0\u8F7D...",
      retry: "\u91CD\u8BD5",
      actionFailed: "\u64CD\u4F5C\u672A\u6210\u529F\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
      gatewayUnavailable: "\u7B97\u529B\u7F51\u5173\u6682\u672A\u8FDE\u63A5\u6216\u4E0D\u53EF\u8FBE\uFF0C\u5B9E\u65F6\u4F59\u989D\u4E0E\u5BC6\u94A5\u5217\u8868\u6682\u4E0D\u53EF\u7528\u3002",
      verifyEmailHint: "\u60A8\u7684\u8D26\u53F7\u90AE\u7BB1\u5C1A\u672A\u5B8C\u6210\u9A8C\u8BC1\uFF0C\u5B8C\u6210\u9A8C\u8BC1\u540E\u5373\u53EF\u7B7E\u5230\u9886\u53D6\u79EF\u5206\u5956\u52B1\u3002",
      goVerify: "\u53BB\u9A8C\u8BC1"
    },
    dashboard: {
      title: "\u4F1A\u5458\u6982\u89C8",
      subtitle: "\u5B9E\u65F6\u67E5\u770B\u60A8\u7684 \u7B97\u529B\u79EF\u5206\u4F59\u989D\u3001\u4ECA\u65E5\u7B7E\u5230\u8FDB\u5EA6\u4E0E\u8FD1\u671F\u6A21\u578B\u8C03\u7528\u7EDF\u8BA1",
      hello: "\u60A8\u597D\uFF0C{name}",
      activeDays: "\u6D3B\u8DC3\u4E0E\u7B7E\u5230\u70ED\u529B\u56FE\uFF08\u8FD1 52 \u5468\uFF09",
      less: "\u5C11",
      more: "\u591A",
      tokenUsage: "Token \u6D88\u8017\u603B\u91CF",
      input: "\u8F93\u5165 Tokens",
      output: "\u8F93\u51FA Tokens",
      chatCount: "\u8C03\u7528\u603B\u6B21\u6570",
      availablePoints: "\u53EF\u7528\u79EF\u5206",
      todayCheckin: "\u4ECA\u65E5\u7B7E\u5230",
      earnedPoints: "\u7D2F\u8BA1\u83B7\u5F97\u79EF\u5206",
      spentPoints: "\u7D2F\u8BA1\u6D88\u8017\u79EF\u5206",
      pendingPoints: "\u53D1\u653E\u4E2D",
      allDelivered: "\u5DF2\u5168\u90E8\u5B9E\u65F6\u5165\u8D26",
      consumptionOrder: "\u79EF\u5206\u7ED3\u7B97\u94FE\u8DEF",
      viewBilling: "\u67E5\u770B\u79EF\u5206\u660E\u7EC6",
      viewAll: "\u67E5\u770B\u5168\u90E8",
      manage: "\u7BA1\u7406",
      recentTransactions: "\u8FD1\u671F\u79EF\u5206\u5165\u8D26\u4E0E\u6D88\u8D39\u6D41\u6C34",
      noRecentTransactions: "\u6682\u65E0\u79EF\u5206\u5165\u8D26\u6216\u8C03\u7528\u8BB0\u5F55",
      usageTitle: "\u6A21\u578B\u8C03\u7528\u7EDF\u8BA1",
      usageSubtitle: "\u7EDF\u8BA1\u5468\u671F\u5185\u901A\u8FC7\u60A8\u7684 Hoxi API \u5BC6\u94A5\u53D1\u8D77\u7684\u771F\u5B9E\u8C03\u7528\u6C47\u603B",
      requestsCount: "\u8C03\u7528\u6B21\u6570",
      tokensCount: "\u603B Token \u6570",
      rangePointsSpent: "\u5468\u671F\u6D88\u8017\u79EF\u5206",
      modelBreakdown: "\u6309\u6A21\u578B\u5206\u5E03",
      noUsageYet: "\u6682\u65E0\u6A21\u578B\u8C03\u7528\u8BB0\u5F55\uFF0C\u521B\u5EFA API \u5BC6\u94A5\u540E\u5373\u53EF\u5728 Hoxi \u5BA2\u6237\u7AEF\u6216\u4EFB\u610F OpenAI \u517C\u5BB9\u5DE5\u5177\u4E2D\u8C03\u7528\u3002",
      quickBindTitle: "\u5728\u53EF\u559C AI \u5BA2\u6237\u7AEF\u4E2D\u7ED1\u5B9A\u4F7F\u7528",
      quickBindDesc: "\u590D\u5236\u4E0B\u65B9\u7F51\u5173\u5730\u5740\u4E0E\u60A8\u7684 API \u5BC6\u94A5\uFF0C\u586B\u5165 Hoxi \u684C\u9762\u7AEF\u6216\u624B\u673A\u7AEF\u300C\u6211\u7684 \u2192 \u7ED1\u5B9A AI \u6A21\u578B\u300D\u5373\u53EF\u76F4\u63A5\u4F7F\u7528\u79EF\u5206\u8C03\u7528\u3002"
    },
    rewards: {
      title: "\u6BCF\u65E5\u7B7E\u5230\u4E0E\u79EF\u5206",
      subtitle: "\u6BCF\u65E5\u7B7E\u5230\u83B7\u53D6\u771F\u5B9E\u7B97\u529B\u79EF\u5206\uFF0C\u8FDE\u7EED\u7B7E\u5230\u89E3\u9501\u9636\u68AF\u5956\u52B1",
      daysStreak: "\u5929\u8FDE\u7B7E",
      maxStreak: "\u6700\u9AD8\u8FDE\u7B7E",
      todayReward: "\u4ECA\u65E5\u5956\u52B1",
      tomorrowReward: "\u660E\u65E5\u9884\u8BA1",
      checkInNow: "\u7ACB\u5373\u7B7E\u5230\u9886\u79EF\u5206",
      checkedIn: "\u4ECA\u65E5\u5DF2\u7B7E\u5230",
      deliveryStatus: "\u5165\u8D26\u72B6\u6001",
      statusSucceeded: "\u5DF2\u5165\u8D26",
      statusPending: "\u6B63\u5728\u5165\u8D26",
      statusBlocked: "\u5F85\u7BA1\u7406\u5458\u6838\u5BF9",
      calendarTitle: "\u7B7E\u5230\u65E5\u5386",
      milestonesTitle: "\u8FDE\u7EED\u7B7E\u5230\u91CC\u7A0B\u7891",
      ruleNote: "\u57FA\u7840\u6BCF\u65E5 +{base} \u79EF\u5206\uFF0C\u6BCF\u8FDE\u7EED 1 \u5929\u9012\u589E +{step} \u79EF\u5206\uFF0C\u65E5\u5E38\u5355\u65E5\u4E0A\u9650 {max} \u79EF\u5206\uFF1B\u8FBE\u5230\u91CC\u7A0B\u7891\u5929\u6570\u989D\u5916\u53E0\u52A0\u5956\u52B1\u3002",
      ruleRandomNote: "\u6BCF\u65E5\u7B7E\u5230\u968F\u673A\u62BD\u53D6 +{min}~{max} \u79EF\u5206\u76F2\u76D2\uFF1B\u8FBE\u5230\u8FDE\u7EED\u7B7E\u5230\u91CC\u7A0B\u7891\u5929\u6570\u989D\u5916\u53E0\u52A0\u5956\u52B1\u3002",
      historyTitle: "\u8FD1\u671F\u7B7E\u5230\u4E0E\u79EF\u5206\u53D1\u653E\u8BB0\u5F55",
      noHistory: "\u6682\u65E0\u7B7E\u5230\u8BB0\u5F55\uFF0C\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u5B8C\u6210\u9996\u6B21\u7B7E\u5230\u3002",
      colDate: "\u7B7E\u5230\u65E5\u671F",
      colPoints: "\u83B7\u5F97\u79EF\u5206"
    },
    models: {
      title: "\u53EF\u8C03\u7528\u6A21\u578B\u4E0E\u79EF\u5206\u5B9A\u4EF7",
      subtitle: "\u5F53\u524D Hoxi \u79DF\u6237\u5F00\u653E\u7684\u771F\u5B9E\u53EF\u8C03\u7528\u6A21\u578B\u6E05\u5355\uFF0810,000 \u79EF\u5206 = $1.00 USD\uFF09",
      searchPlaceholder: "\u641C\u7D22\u6A21\u578B\u540D\u79F0\u6216\u5382\u5546...",
      keyGroupLabel: "\u5F53\u524D\u5206\u7EC4",
      countLabel: "\u5171 {count} \u4E2A\u53EF\u8C03\u7528\u6A21\u578B",
      empty: "\u672A\u627E\u5230\u5339\u914D\u7684\u6A21\u578B",
      colModel: "\u6A21\u578B\u6807\u8BC6",
      colVendor: "\u5382\u5546",
      colMode: "\u8BA1\u8D39\u6A21\u5F0F",
      colInputPoints: "\u8F93\u5165\u4EF7\u683C (\u6BCF\u767E\u4E07 Token)",
      colOutputPoints: "\u8F93\u51FA\u4EF7\u683C (\u6BCF\u767E\u4E07 Token)"
    },
    keys: {
      title: "API \u5BC6\u94A5\u7BA1\u7406",
      subtitle: "\u7BA1\u7406\u4E0E\u60A8\u79EF\u5206\u94B1\u5305\u7ED1\u5B9A\u7684\u4E13\u5C5E API \u5BC6\u94A5\uFF0C\u652F\u6301\u4E00\u952E\u8F6E\u6362\u3001\u9650\u989D\u4E0E\u542F\u505C",
      endpointLabel: "OpenAI \u517C\u5BB9\u63A5\u53E3\u5730\u5740",
      namePlaceholder: "\u8F93\u5165\u5BC6\u94A5\u5907\u6CE8\u540D\u79F0\uFF08\u5982\uFF1AHoxi Mac\uFF09",
      createBtn: "\u65B0\u5EFA\u5BC6\u94A5",
      secretBannerTitle: "\u8BF7\u7ACB\u5373\u590D\u5236\u5E76\u59A5\u5584\u4FDD\u5B58\u60A8\u7684\u5B8C\u6574\u5BC6\u94A5\uFF08\u4EC5\u5C55\u793A\u4E00\u6B21\uFF09",
      copy: "\u590D\u5236",
      copied: "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",
      hide: "\u9690\u85CF",
      empty: "\u60A8\u8FD8\u6CA1\u6709\u521B\u5EFA API \u5BC6\u94A5\uFF0C\u70B9\u51FB\u53F3\u4E0A\u65B9\u300C\u65B0\u5EFA\u5BC6\u94A5\u300D\u751F\u6210\u7B2C\u4E00\u628A\u5BC6\u94A5\u3002",
      colName: "\u540D\u79F0",
      colKey: "\u5BC6\u94A5\u63A9\u7801",
      colStatus: "\u72B6\u6001",
      colUsedPoints: "\u5DF2\u6D88\u8017\u79EF\u5206",
      colActions: "\u64CD\u4F5C",
      statusEnabled: "\u542F\u7528\u4E2D",
      statusDisabled: "\u5DF2\u7981\u7528",
      reveal: "\u67E5\u770B",
      enable: "\u542F\u7528",
      disable: "\u7981\u7528",
      rotate: "\u91CD\u7F6E",
      delete: "\u5220\u9664"
    },
    billing: {
      title: "\u79EF\u5206\u4E0E\u8C03\u7528\u660E\u7EC6",
      subtitle: "\u900F\u660E\u6838\u5BF9\u6BCF\u4E00\u7B14\u6A21\u578B\u8C03\u7528\u6D88\u8017\u4E0E\u7B7E\u5230\u79EF\u5206\u5165\u8D26\u6D41\u6C34",
      usageProgress: "\u7D2F\u8BA1\u79EF\u5206\u4F7F\u7528\u8FDB\u5EA6",
      usageTrend: "\u8C03\u7528\u91CF\u4E0E\u79EF\u5206\u6D88\u8017\u8D8B\u52BF",
      requestsVsCost: "\u6240\u9009\u5468\u671F\u5185\u6BCF\u65E5\u8BF7\u6C42\u6570\u4E0E\u6D88\u8017\u79EF\u5206\u5BF9\u6BD4",
      modelDistribution: "\u6A21\u578B\u6D88\u8017\u5206\u5E03",
      byEstimatedSpending: "\u6309\u6240\u9009\u5468\u671F\u6D88\u8017\u79EF\u5206\u5360\u6BD4",
      tabConsumption: "\u6A21\u578B\u8C03\u7528\u6D88\u8017",
      tabRewards: "\u79EF\u5206\u5165\u8D26\u6D41\u6C34",
      emptyConsumption: "\u6682\u65E0\u6A21\u578B\u8C03\u7528\u6D88\u8017\u8BB0\u5F55",
      emptyRewards: "\u6682\u65E0\u79EF\u5206\u5165\u8D26\u6D41\u6C34",
      colTime: "\u65F6\u95F4",
      colTokens: "\u8F93\u5165 / \u8F93\u51FA Tokens",
      colPointsSpent: "\u6D88\u8017\u79EF\u5206",
      colRemark: "\u6765\u6E90\u8BF4\u660E",
      colPointsDelta: "\u53D8\u52A8\u79EF\u5206",
      colAfterPoints: "\u53D8\u52A8\u540E\u4F59\u989D"
    },
    account: {
      title: "\u8D26\u53F7\u4E0E\u5B89\u5168\u8BBE\u7F6E",
      subtitle: "\u7BA1\u7406\u60A8\u7684\u53EF\u559C AI \u8D26\u53F7\u8D44\u6599\u3001\u767B\u5F55\u5BC6\u7801\u4E0E\u4F1A\u8BDD\u72B6\u6001",
      profileTitle: "\u57FA\u672C\u8D44\u6599",
      emailLabel: "\u7ED1\u5B9A\u90AE\u7BB1",
      emailVerifiedStatus: "\u90AE\u7BB1\u5DF2\u9A8C\u8BC1",
      emailUnverifiedHint: "\u60A8\u7684\u90AE\u7BB1\u5C1A\u672A\u5B8C\u6210\u9A8C\u8BC1\uFF0C\u5B8C\u6210\u9A8C\u8BC1\u540E\u5373\u53EF\u7B7E\u5230\u9886\u53D6\u79EF\u5206\u5956\u52B1",
      resendVerify: "\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6",
      resendingVerify: "\u53D1\u9001\u4E2D...",
      resendVerifyCooldown: "\u8BF7\u5728 {sec} \u79D2\u540E\u91CD\u8BD5",
      resendVerifySent: "\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u8BF7\u67E5\u6536",
      nicknameLabel: "\u5F00\u53D1\u8005\u6635\u79F0",
      saveProfile: "\u4FDD\u5B58\u8D44\u6599",
      passwordTitle: "\u4FEE\u6539\u767B\u5F55\u5BC6\u7801",
      passwordHint: "\u5B9A\u671F\u66F4\u6362\u9AD8\u5F3A\u5EA6\u5BC6\u7801\u6709\u52A9\u4E8E\u4FDD\u62A4\u60A8\u7684 \u7B97\u529B\u79EF\u5206\u4E0E API \u5BC6\u94A5\u5B89\u5168\u3002",
      changePassword: "\u4FEE\u6539\u5BC6\u7801",
      oldPassword: "\u5F53\u524D\u5BC6\u7801",
      newPassword: "\u65B0\u5BC6\u7801",
      confirmNewPassword: "\u786E\u8BA4\u65B0\u5BC6\u7801",
      passwordMismatch: "\u4E24\u6B21\u8F93\u5165\u7684\u65B0\u5BC6\u7801\u4E0D\u4E00\u81F4",
      updatePassword: "\u66F4\u65B0\u5BC6\u7801",
      accountStatus: "\u8D26\u53F7\u4E0E\u7B97\u529B\u7F51\u5173\u72B6\u6001",
      activeStatus: "\u6B63\u5E38\u5728\u7EBF \xB7 \u79EF\u5206\u6C60\u5DF2\u5C31\u7EEA",
      saved: "\u5DF2\u4FDD\u5B58\u66F4\u65B0",
      logoutTitle: "\u9000\u51FA\u5F53\u524D\u8D26\u53F7",
      logoutDesc: "\u9000\u51FA\u540E\u5C06\u6E05\u9664\u5F53\u524D\u6D4F\u89C8\u5668\u7684\u767B\u5F55\u4F1A\u8BDD",
      logoutBtn: "\u9000\u51FA\u767B\u5F55"
    },
    tickets: {
      title: "\u6211\u7684\u54A8\u8BE2\u4E0E\u5DE5\u5355",
      subtitle: "\u67E5\u770B\u60A8\u63D0\u4EA4\u7684\u552E\u524D\u54A8\u8BE2\u3001\u5408\u4F5C\u7559\u8A00\u4E0E\u6280\u672F\u652F\u6301\u5DE5\u5355\uFF0C\u652F\u6301\u591A\u8F6E\u5F02\u6B65\u5BF9\u8BDD\u8DDF\u8FDB",
      createBtn: "\u53D1\u8D77\u65B0\u54A8\u8BE2 / \u5DE5\u5355",
      empty: "\u60A8\u8FD8\u6CA1\u6709\u63D0\u4EA4\u8FC7\u4EFB\u4F55\u54A8\u8BE2\u6216\u5DE5\u5355",
      emptyDesc: "\u65E0\u8BBA\u662F\u4EA7\u54C1\u54A8\u8BE2\u3001\u5DE5\u5177\u6536\u5F55\u3001\u5546\u52A1\u5408\u4F5C\u8FD8\u662F\u7B97\u529B\u7F51\u5173\u6392\u969C\uFF0C\u90FD\u53EF\u4EE5\u968F\u65F6\u53D1\u8D77\u7559\u8A00\u3002",
      filterAll: "\u5168\u90E8\u72B6\u6001",
      colTicketNo: "\u5355\u53F7",
      colCategory: "\u7C7B\u578B",
      colTitle: "\u4E3B\u9898",
      colStatus: "\u72B6\u6001",
      colUpdated: "\u6700\u540E\u66F4\u65B0",
      titleLabel: "\u54A8\u8BE2 / \u5DE5\u5355\u6807\u9898",
      titlePlaceholder: "\u7B80\u8981\u6982\u62EC\u60A8\u7684\u95EE\u9898\u6216\u5408\u4F5C\u610F\u5411",
      detailTitle: "\u5BF9\u8BDD\u8BE6\u60C5"
    }
  },
  newsletter: {
    badge: "EMAIL UPDATES",
    title: "\u8BA2\u9605\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u4E13\u680F\u4E0E\u7B97\u529B\u964D\u4EF7\u5468\u62A5",
    subtitle: "\u6BCF\u5468\u7CBE\u9009\u6DF1\u5EA6\u5B9E\u6218\u590D\u76D8\u3001\u65B0\u6A21\u578B\u4F53\u611F\u8BC4\u6D4B\u4E0E\u9AD8\u6027\u4EF7\u6BD4\u4E2D\u8F6C\u52A8\u6001\uFF0C\u96F6\u5783\u573E\u90AE\u4EF6\uFF0C\u968F\u65F6\u53EF\u4E00\u952E\u9000\u8BA2\u3002",
    placeholder: "\u8F93\u5165\u60A8\u7684\u5E38\u7528\u90AE\u7BB1\u5730\u5740",
    button: "\u514D\u8D39\u8BA2\u9605",
    submitting: "\u63D0\u4EA4\u4E2D...",
    success: "\u8BA2\u9605\u6210\u529F\uFF01\u6709\u91CD\u8981\u66F4\u65B0\u65F6\u6211\u4EEC\u5C06\u7B2C\u4E00\u65F6\u95F4\u90AE\u4EF6\u901A\u77E5\u60A8\u3002",
    error: "\u8BA2\u9605\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u90AE\u7BB1\u683C\u5F0F\u540E\u91CD\u8BD5\u3002"
  }
};
const zhHK = {
  brand: {
    name: "Hoxi",
    tagline: "\u539F\u751F AI \u7814\u767C\u5DE5\u4F5C\u53F0 \xB7 \u4E00\u4EBA\u516C\u53F8\u7B97\u529B\u8207\u6A21\u578B\u6307\u5357",
    headerSub: "hoxi.ai \xB7 \u539F\u751F AI \u7814\u767C\u5DE5\u4F5C\u53F0"
  },
  nav: {
    home: "Hoxi Code",
    soloBuilder: "\u4E00\u4EBA\u516C\u53F8",
    models: "\u6A21\u578B\u80FD\u529B",
    gateways: "\u4E2D\u8F49\u7AD9",
    plans: "Coding Plan",
    tools: "\u5DE5\u5177\u7BB1",
    skills: "\u6280\u80FD\u5EAB",
    projects: "\u5BE6\u6230\u9805\u76EE",
    posts: "\u535A\u5BA2",
    download: "\u4E0B\u8F09",
    about: "\u95DC\u65BC",
    coding: "\u500B\u4EBA\u9AD4\u611F\u6392\u540D",
    cheap: "\u7701\u9322\u6307\u5357",
    savings: "\u7701\u9322\u6307\u5357",
    savingsMenuTitle: "\u7701\u9322\u6307\u5357",
    savingsMenuNote: "\u4E00\u4EBA\u516C\u53F8\u7B97\u529B\u964D\u672C\u8207\u9078\u578B\u65B9\u6848",
    allSavings: "\u67E5\u770B\u5168\u90E8",
    modelsDesc: "\u80FD\u529B\u8A55\u5206\u8207\u5B98\u65B9\u50F9\u683C",
    gatewaysDesc: "\u5EF6\u9072\u3001\u5728\u7DDA\u7387\u8207\u55AE\u50F9",
    plansDesc: "\u5B98\u65B9\u8A02\u95B2\u8207\u8CC7\u6E90\u5305\u7684\u984D\u5EA6",
    switchDesc: "\u9AD8\u50F9\u6A21\u578B\u964D\u672C\u5E73\u66FF\u8DEF\u7DDA",
    changesDesc: "\u5404\u5927\u5EE0\u5546\u6700\u65B0\u964D\u50F9\u8207\u8ABF\u50F9\u6D41\u6C34",
    switch: "\u5E73\u66FF\u65B9\u6848",
    compare: "\u6A21\u578B\u5C0D\u6BD4",
    changes: "\u8ABF\u50F9\u8FFD\u8E64",
    readiness: "\u80FD\u529B\u6E2C\u8A55",
    readinessBadge: "\u6E2C\u6E2C\u770B",
    readinessDesc: "4 \u5927\u5D17\u4F4D 12 \u9053\u60C5\u666F\u984C \xB7 \u4E94\u7DAD\u80FD\u529B\u96F7\u9054",
    soloMenuTitle: "\u4E00\u4EBA\u516C\u53F8",
    allSolo: "\u9032\u5165\u9580\u6237",
    soloPortal: "\u4E00\u4EBA\u516C\u53F8\u5BE6\u6230\u9580\u6237",
    soloPortalDesc: "\u56DB\u6B65\u9589\u74B0\u52D5\u7DDA\u3001\u5BE6\u6230\u535A\u5BA2\u8207\u5DE5\u5177\u68E7",
    soloColumn: "\u300A\u5E95\u5C64\u91CD\u69CB\u300B\u5C08\u6B04",
    soloColumnDesc: "\u4E00\u4EBA\u516C\u53F8\u8A8D\u77E5\u8207\u57F7\u884C\u529B\u9577\u6587\u9023\u8F09",
    toolsMenuTitle: "\u5DE5\u5177\u7BB1",
    toolsCatalog: "Agent \u5DE5\u5177\u8207 API",
    allTools: "\u67E5\u770B\u5168\u90E8",
    toolsDesc: "\u6309\u6B21\u8A08\u8CBB\u7684 Agent \u6578\u64DA\u63A5\u53E3\u8207\u4E00\u4EBA\u516C\u53F8\u5168\u68E7\u5DE5\u5177\u5EAB",
    skillsDesc: "Hoxi \u684C\u9762\u7AEF\u53EF\u4E00\u9375\u5B89\u88DD\u7684 Agent \u6280\u80FD",
    projectsDesc: "\u7D50\u5408 AI \u7368\u7ACB\u958B\u767C\u4E26\u843D\u5730\u7684\u771F\u5BE6\u7522\u54C1\u77E9\u9663",
    openMenu: "\u6253\u958B\u83DC\u55AE",
    closeMenu: "\u95DC\u9589\u83DC\u55AE",
    comingSoon: "\u5373\u5C07\u4E0A\u7DDA"
  },
  footer: {
    rights: "\u4FDD\u7559\u6240\u6709\u6B0A\u5229",
    dataNote: "\u50F9\u683C\u8207\u8A55\u5206\u5747\u6A19\u8A3B\u4F86\u6E90\u8207\u66F4\u65B0\u6642\u9593",
    community: "\u4E00\u4EBA\u516C\u53F8\u793E\u7FA3",
    privacy: "\u96B1\u79C1\u653F\u7B56",
    terms: "\u670D\u52D9\u689D\u6B3E"
  },
  common: {
    updatedAt: "\u6578\u64DA\u66F4\u65B0\u65BC {date}",
    viewAll: "\u67E5\u770B\u5168\u90E8",
    readMore: "\u7E7C\u7E8C\u95B2\u8B80",
    empty: "\u66AB\u7121\u6578\u64DA",
    source: "\u6578\u64DA\u4F86\u6E90",
    learnMore: "\u77AD\u89E3\u66F4\u591A"
  },
  plans: {
    title: "AI \u7DE8\u7A0B\u5957\u9910\u5C0D\u6BD4",
    seoTitle: "AI \u7DE8\u7A0B\u5957\u9910\u8207\u5B98\u65B9\u8A02\u95B2\u5C0D\u6BD4 - Coding Plan & Token Plan",
    seoDescription: "\u5C0D\u6BD4\u5404\u5BB6 AI \u7DE8\u7A0B\u8A02\u95B2 (Coding Plan) \u8207 Token \u8CC7\u6E90\u5305\u7684\u50F9\u683C\u3001\u984D\u5EA6\u9650\u5236\u3001\u652F\u6301\u6A21\u578B\u8207\u512A\u7F3A\u9EDE"
  },
  skills: {
    title: "Hoxi Agent \u6280\u80FD\u5EAB",
    subtitle: "\u53EF\u76F4\u63A5\u88DD\u9032 Hoxi \u684C\u9762\u7AEF\u7684 Agent Skill\uFF1A\u6BCF\u689D\u53EA\u767C\u5E03\u5143\u6578\u64DA\uFF0C\u5B89\u88DD\u6642\u4E0B\u8F09 SKILL.md\u3001\u6821\u9A57 SHA-256 \u5F8C\u5BEB\u5165\u672C\u5730",
    seoTitle: "Hoxi Agent \u6280\u80FD\u5EAB - \u53EF\u76F4\u63A5\u5B89\u88DD\u7684 Agent Skills",
    seoDescription: "Hoxi Agent \u6280\u80FD\u76EE\u9304\uFF1A\u6280\u80FD\u5275\u4F5C\u3001\u7DDA\u4E0A\u904B\u7DAD\u7B49\u53EF\u5B89\u88DD\u6280\u80FD\uFF0C\u684C\u9762\u7AEF\u4E00\u9375\u4E0B\u8F09\u4E26\u6821\u9A57\u6458\u8981",
    downloadApp: "\u4E0B\u8F09 Hoxi",
    installNote: "\u684C\u9762\u7AEF\u6253\u958B\u300C\u6AA2\u67E5\u5668 \u2192 \u6280\u80FD \u2192 \u7DDA\u4E0A\u5E02\u96C6\u300D\u5373\u53EF\u5B89\u88DD\u3002Hoxi \u53EA\u4E0B\u8F09 SKILL.md \u4E26\u6821\u9A57\u6458\u8981\uFF0C\u4E0D\u6703\u81EA\u52D5\u5B89\u88DD\uFF0C\u4E5F\u4E0D\u6703\u57F7\u884C\u9060\u7A0B\u8173\u672C\u3002",
    viewSource: "\u67E5\u770B\u6E90\u78BC",
    empty: "\u6280\u80FD\u5EAB\u6B63\u5728\u6574\u7406\u4E2D"
  },
  tools: {
    title: "\u5168\u68E7\u8207 Agent \u5DE5\u5177\u5EAB",
    heroEyebrow: "{tools} \u9805\u5DE5\u5177 \xB7 {endpoints} \u500B\u63A5\u53E3 \xB7 {providers} \u5BB6\u670D\u52D9\u5546",
    heroLine1: "\u5168\u7DB2 Agent \u5DE5\u5177\uFF0C",
    heroLine2: "\u4E00\u500B\u5DE5\u4F5C\u53F0\u7D71\u4E00\u8ABF\u7528\u3002",
    subtitle: "\u4F60\u7684 Agent \u53EF\u76F4\u63A5\u767C\u73FE\u3001\u6821\u9A57\u4E26\u6309\u6B21\u8ABF\u7528\u7684\u5BE6\u6642\u5DE5\u5177\u8207 API \u76EE\u9304\uFF0C\u540C\u6642\u6536\u9304\u7368\u7ACB\u958B\u767C\u8005\u5168\u68E7\u5EFA\u7AD9\u8207\u51FA\u6D77\u5FC5\u5099\u5957\u4EF6\u3002",
    seoTitle: "Tools \u2014 Agent \u5DE5\u5177\u3001\u6578\u64DA API \u8207\u4E00\u4EBA\u516C\u53F8\u5168\u68E7\u5DE5\u5177\u5EAB | Hoxi",
    seoDescription: "\u6536\u9304 {tools} \u9805\u5DE5\u5177\u3001{endpoints} \u500B\u5DF2\u9A57\u8B49\u7684 Agent \u6578\u64DA\u63A5\u53E3\u8207 {providers} \u5BB6\u670D\u52D9\u5546\uFF0C\u652F\u6301\u5728 Hoxi\u3001Claude Code \u8207 MCP \u4E2D\u4E00\u9375\u8ABF\u7528\u3002",
    searchPlaceholder: '\u641C\u7D22\u5DE5\u5177\u76EE\u9304 \u2014 \u8A66\u8A66 "amazon reviews"\u3001"tiktok"\u3001"video gen" \u6216 "apify"',
    allCategories: "\u5168\u90E8",
    showMore: "\u5C55\u958B\u66F4\u591A\u5206\u985E",
    showLess: "\u6536\u8D77\u5206\u985E",
    noMatchTitle: '\u672A\u627E\u5230\u5339\u914D "{query}" \u7684\u5DE5\u5177',
    noMatchDesc: "\u8ACB\u5617\u8A66\u66F4\u63DB\u66F4\u5BEC\u6CDB\u7684\u95DC\u9375\u8A5E\u6216\u5207\u63DB\u5DE6\u5074\u5206\u985E\u3002",
    emptyTitle: "\u66AB\u7121\u5DE5\u5177",
    emptyDesc: "\u8A72\u5206\u985E\u4E0B\u9084\u6C92\u6709\u6536\u9304\u5DE5\u5177\u3002",
    markupFootnote: "* \u5E36\u661F\u865F\u6A19\u8A18\u7684\u5206\u985E\u4E2D\uFF0C\u90E8\u5206\u5DE5\u5177\u5305\u542B\u5C11\u91CF\u5E73\u53F0\u901A\u9053\u8CBB\uFF0C\u9EDE\u64CA\u5361\u7247\u67E5\u770B\u5404\u63A5\u53E3\u660E\u7D30\u3002",
    zeroMarkup: "0 \u52A0\u50F9",
    zeroMarkupTip: "\u96F6\u5E73\u53F0\u52A0\u50F9\uFF0C\u6309\u4E0A\u6E38\u670D\u52D9\u5546\u6A19\u6E96\u55AE\u50F9\u8A08\u8CBB\u3002",
    zeroMarkupPartialTip: "\u8A72\u5206\u985E\u4E0B\u7D55\u5927\u591A\u6578\u63A5\u53E3\u96F6\u5E73\u53F0\u52A0\u50F9\uFF0C\u5C11\u6578\u63A5\u53E3\u542B\u901A\u9053\u8CBB\u3002",
    giveToAgent: "\u8907\u88FD\u4EE5\u4E0B\u6307\u4EE4\u4EA4\u7D66\u4F60\u7684 Agent \u5373\u53EF\u958B\u59CB\u4F7F\u7528",
    copyPrompt: "\u8907\u88FD\u6307\u4EE4",
    copied: "\u5DF2\u8907\u88FD",
    endpointsTitle: "\u53EF\u8ABF\u7528\u63A5\u53E3 (Endpoints)",
    useCasesTitle: "\u7528\u4F60\u7684 Agent \u8A66\u8A66\u9019\u4E9B\u5BE6\u6230\u4EFB\u52D9",
    relatedCategories: "\u6240\u5C6C\u8207\u95DC\u806F\u5206\u985E",
    visitWebsite: "\u8A2A\u554F\u5B98\u7DB2",
    viewDocs: "\u63A5\u53E3\u6587\u6A94",
    closeModal: "\u95DC\u9589\u8A73\u60C5",
    kindCategory: "\u6578\u64DA\u8207\u5DE5\u5177\u96C6",
    kindProvider: "\u8A8D\u8B49\u670D\u52D9\u5546",
    kindSaas: "\u5168\u68E7\u5FC5\u88DD"
  },
  home: {
    heroBadge: "\u684C\u9762 + \u624B\u6A5F\u96D9\u7AEF\u5354\u540C \xB7 100% \u958B\u6E90",
    titleLine1: "\u4E00\u500B\u958B\u653E\u7684 AI \u7814\u767C\u5DE5\u4F5C\u53F0",
    titleLine2: "\u7D71\u5FA1\u6BCF\u4E00\u500B\u958B\u767C\u8005\u5DE5\u4F5C\u6D41",
    title: "Hoxi \u2014 \u4E00\u500B\u958B\u653E\u7684 AI \u7814\u767C\u5DE5\u4F5C\u53F0\uFF0C\u7D71\u5FA1\u6BCF\u4E00\u500B\u958B\u767C\u8005\u5DE5\u4F5C\u6D41",
    subtitle: "\u5728\u684C\u9762\u539F\u751F\u7A97\u53E3\u5167\u4E26\u884C\u904B\u884C\u591A\u500B AI \u6703\u8A71\uFF0C\u96E2\u958B\u5DE5\u4F4D\u7528\u624B\u6A5F\u96A8\u6642\u5BE9\u6279\u8207\u9059\u63A7\u3002\u5167\u7F6E\u771F\u5BE6\u6A21\u578B\u699C\u55AE\u8207\u9AD8\u6027\u50F9\u6BD4\u5C08\u7DDA\uFF0C\u652F\u6301\u81EA\u6709 Key\uFF0C\u96F6\u6346\u7D81\u3002",
    authorIntro: "\u6211\u81EA\u5DF1\u7DAD\u8B77 GoPanel\uFF0C\u4E5F\u5728\u505A\u8F15\u92EA AI \u548C\u9019\u500B\u7AD9",
    sections: {
      codingLeaderboard: "\u{1F3C6} \u500B\u4EBA\u4F7F\u7528\u9AD4\u611F\u6392\u540D",
      codingNote: "\u65E5\u5E38\u5BEB\u4EE3\u78BC\u771F\u5BE6\u9AD4\u611F\u6392\u5E8F\uFF0C\u9644\u5BE6\u6230\u9EDE\u8A55\u8207\u6027\u50F9\u6BD4",
      gateways: "\u5168\u90E8\u4E2D\u8F49\u7AD9",
      gatewaysNote: "\u771F\u5BE6 API \u6301\u7E8C\u63A2\u6E2C\u5EF6\u9072\u3001\u5728\u7DDA\u7387\u8207\u6A21\u578B\u4E00\u81F4\u6027\uFF0C\u7BE9\u9078\u4F4E\u5EF6\u9072\u3001\u9AD8\u6027\u50F9\u6BD4\u7684\u53EF\u9760\u5C08\u7DDA",
      plans: "\u{1F4E6} \u7DE8\u7A0B\u5957\u9910\u8207 Coding Plan",
      plansNote: "\u6309\u91CF\u8207\u5305\u6708\u5C0D\u6BD4\uFF0C\u544A\u5225\u6D77\u5916\u5361\u9580\u6ABB\u548C\u5C01\u865F\u98A8\u96AA",
      posts: "\u5BE6\u6230\u535A\u5BA2",
      postsNote: "\u4E00\u4EBA\u516C\u53F8\u5DE5\u4F5C\u6D41\u3001\u5546\u696D\u8B8A\u73FE\u8986\u76E4\u8207\u907F\u5751\u5BE6\u9304",
      picks: "\u672C\u9031\u63A8\u85A6",
      leaderboard: "\u5168\u91CF\u6A21\u578B\u699C\u55AE",
      about: "\u95DC\u65BC\u7AD9\u9577",
      categories: "\u699C\u55AE\u5206\u985E",
      data: "\u6578\u64DA\u6982\u6CC1"
    },
    plansList: {
      plan1Title: "\u6309\u91CF\u6975\u5BA2\u5305",
      plan1Tag: "\u7A0B\u5E8F\u54E1\u9996\u9078",
      plan1Price: "\xA510 \u8D77",
      plan1Desc: "\u5145\u591A\u5C11\u7528\u591A\u5C11\uFF0C\u984D\u5EA6\u6C38\u4E45\u4E0D\u904E\u671F\u3002\u5C08\u70BA Cursor / VS Code / Cline \u5B9A\u88FD",
      plan1F1: "\u652F\u6301\u5168\u91CF Claude 3.7 / DeepSeek / GPT-4o",
      plan1F2: "\u6309 Token \u7CBE\u6E96\u8A08\u8CBB\uFF0C\u660E\u7D30\u900F\u660E\u5BE6\u6642\u53EF\u67E5",
      plan1F3: "\u7121\u6708\u79DF\u3001\u7121\u904E\u671F\u6642\u9593\u9650\u5236",
      plan1Cta: "\u7ACB\u5373\u5145\u503C\u914D\u7F6E",
      plan2Title: "\u5168\u80FD\u4E3B\u529B\u6708\u5361",
      plan2Tag: "\u91CD\u5EA6\u958B\u767C\u63A8\u85A6",
      plan2Price: "\xA599 / \u6708",
      plan2Desc: "\u7121\u9650\u984D\u5EA6\u8207\u9AD8\u4F75\u767C\u652F\u6301\uFF0C\u9069\u5408\u5168\u5929\u5019\u5BEB\u4EE3\u78BC\u8207\u65E5\u5E38\u751F\u7522\u529B\u91CD\u5EA6\u7528\u6237",
      plan2F1: "\u7368\u4EAB\u5C08\u7DDA\u901A\u9053\uFF0C\u9AD8\u4F75\u767C\u7A69\u5B9A\u4E0D\u6392\u968A",
      plan2F2: "\u652F\u6301\u5168\u6A21\u578B\u81EA\u7531\u5207\u63DB",
      plan2F3: "\u512A\u5148\u6280\u8853\u652F\u6301\u8207\u914D\u7F6E\u8F14\u52A9",
      plan2Cta: "\u958B\u901A\u4E3B\u529B\u6708\u5361",
      plan3Title: "Plus/Pro \u62FC\u8ECA\u5408\u79DF",
      plan3Tag: "\u9AD8\u6027\u50F9\u6BD4",
      plan3Price: "\xA529 / \u6708",
      plan3Desc: "\u5B98\u65B9\u539F\u751F\u7DB2\u9801\u7AEF\u9AD4\u9A57\uFF0C\u7368\u7ACB\u5C0D\u8A71\u8A18\u9304\uFF0C\u544A\u5225\u6D77\u5916\u4FE1\u7528\u5361\u8207\u5C01\u865F\u98A8\u96AA",
      plan3F1: "ChatGPT Plus / Claude Pro \u5B98\u65B9\u539F\u7248 Web \u754C\u9762",
      plan3F2: "\u7368\u7ACB\u8CEC\u865F\u6216\u9694\u96E2\u6703\u8A71\uFF0C\u96B1\u79C1\u5B89\u5168",
      plan3F3: "\u7FFB\u8ECA\u9583\u9000\u81EA\u52D5\u88DC\u865F\u8207\u552E\u5F8C\u4FDD\u969C",
      plan3Cta: "\u67E5\u770B\u62FC\u8ECA\u65B9\u6848"
    },
    moreCodingModels: "\u67E5\u770B\u5B8C\u6574\u4EE3\u78BC\u6A21\u578B\u8A55\u5206",
    viewGateways: "\u67E5\u770B\u4E2D\u8F49\u7AD9\u5BE6\u6E2C\u8207\u8A55\u6E2C",
    viewPlans: "\u67E5\u770B\u5B8C\u6574 Coding Plan \u8207\u7DE8\u7A0B\u5957\u9910",
    picksNote: "\u4EE5\u300C{scene}\u300D\u9019\u500B\u6700\u5E38\u898B\u7684\u5834\u666F\u70BA\u4F8B\uFF0C\u5F9E\u4E0D\u8A08\u6210\u672C\u5230\u6975\u7701\u5404\u7D66\u4E00\u500B\u9078\u64C7\u3002\u5176\u4ED6\u5834\u666F\u898B\u7701\u9322\u6307\u5357",
    moreScenes: "\u67E5\u770B\u5168\u90E8\u5834\u666F\u63A8\u85A6",
    viewFullTable: "\u67E5\u770B\u5B8C\u6574\u699C\u55AE",
    postsEmpty: "\u9084\u6C92\u6709\u6587\u7AE0",
    dataSummary: "\u5DF2\u6536\u9304 {count} \u500B\u6A21\u578B\u3001{vendors} \u5BB6\u5EE0\u5546\uFF0C\u50F9\u683C\u53D6\u81EA\u5EE0\u5546\u5B98\u65B9\u5B9A\u50F9\u9801\uFF0C\u8A55\u5206\u53D6\u81EA Artificial Analysis",
    method: {
      title: "\u6578\u64DA\u5F9E\u54EA\u4F86",
      viewAbout: "\u5B8C\u6574\u53E3\u5F91",
      source: "\u50F9\u683C\u548C\u898F\u683C\u6211\u5F9E\u5EE0\u5546\u5B98\u65B9\u5B9A\u50F9\u9801\u9010\u689D\u6284\u9304\uFF0C\u80FD\u529B\u8A55\u5206\u53D6\u81EA Artificial Analysis\uFF0C\u6BCF\u689D\u90FD\u6A19\u4E86\u6838\u5C0D\u65E5\u671F",
      missing: "\u67E5\u4E0D\u5230\u7684\u5B57\u6BB5\u4E00\u5F8B\u7559\u7A7A\uFF0C\u4E0D\u778E\u731C\u7740\u586B",
      update: "\u6578\u64DA\u6211\u4E00\u500B\u4EBA\u7DAD\u8B77\uFF0C\u6703\u6709\u6EEF\u5F8C\u3002\u6B63\u5F0F\u6838\u7B97\u524D\u8ACB\u4EE5\u5EE0\u5546\u9801\u9762\u70BA\u6E96"
    },
    pending: "\u6578\u64DA\u5C64\u5C07\u5728\u5F8C\u7E8C\u968E\u6BB5\u63A5\u5165\uFF0C\u7576\u524D\u70BA\u9AA8\u67B6\u9810\u89BD"
  },
  categories: {
    overall: "\u7D9C\u5408",
    cheapest: "\u6700\u4FBF\u5B9C",
    value: "\u6027\u50F9\u6BD4",
    fastest: "\u6700\u5FEB",
    context: "\u9577\u4E0A\u4E0B\u6587",
    coding: "\u7DE8\u7A0B",
    chinese: "\u4E2D\u6587"
  },
  models: {
    title: "AI \u6A21\u578B\u6392\u884C\u699C",
    subtitle: "\u5927\u6A21\u578B\u8A72\u7528\u54EA\u500B\uFF1F\u54EA\u500B\u6700\u5212\u7B97\uFF1F\u6211\u628A\u5BEB\u4EE3\u78BC\u9AD4\u611F\u3001\u8DD1\u5206\u548C\u771F\u5BE6\u50F9\u683C\u5168\u64FA\u5728\u9019\uFF0C\u76F4\u63A5\u4F86\u6284\u4F5C\u696D",
    seoTitle: "AI \u6A21\u578B\u6392\u884C\u699C - \u80FD\u529B\u8A55\u5206\u8207\u50F9\u683C\u5C0D\u6BD4",
    seoDescription: "\u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u699C\uFF1A\u7D9C\u5408\u8A55\u5206\u3001\u8F38\u5165\u8F38\u51FA\u50F9\u683C\u3001\u6DF7\u5408\u50F9\u3001\u6027\u50F9\u6BD4\u3001\u8F38\u51FA\u901F\u5EA6\u8207\u4E0A\u4E0B\u6587\u9577\u5EA6\u6A6B\u5411\u5C0D\u6BD4\uFF0C\u6578\u64DA\u6A19\u8A3B\u4F86\u6E90\u8207\u6838\u5C0D\u65E5\u671F",
    tabsLabel: "\u699C\u55AE\u5206\u985E",
    tabs: {
      overall: "\u7D9C\u5408",
      value: "\u6027\u50F9\u6BD4",
      cheapest: "\u6700\u4FBF\u5B9C",
      fastest: "\u6700\u5FEB",
      context: "\u9577\u4E0A\u4E0B\u6587"
    },
    columns: {
      model: "\u6A21\u578B",
      overall: "\u7D9C\u5408\u5206",
      input: "\u8F38\u5165\u50F9",
      output: "\u8F38\u51FA\u50F9",
      blended: "\u6DF7\u5408\u50F9",
      value: "\u6027\u50F9\u6BD4",
      tps: "\u901F\u5EA6",
      ttft: "\u9996\u5B57\u5EF6\u9072",
      context: "\u4E0A\u4E0B\u6587"
    },
    filters: {
      vendor: "\u5EE0\u5546",
      reasoning: "\u985E\u578B",
      reasoningOnly: "\u50C5\u63A8\u7406\u6A21\u578B",
      maxPrice: "\u6DF7\u5408\u50F9\u4E0A\u9650",
      noLimit: "\u4E0D\u9650",
      reset: "\u6E05\u7A7A\u7BE9\u9078"
    },
    count: "\u986F\u793A {shown} / {total} \u500B\u6A21\u578B",
    modelCount: "\u6536\u9304 {count} \u500B\u6A21\u578B",
    searchPlaceholder: "\u641C\u7D22\u6A21\u578B\u540D\u6216\u5EE0\u5546\uFF08\u5982 Claude\u3001DeepSeek\u3001Flash\uFF09...",
    podiumTitle: "\u4E09\u500B\u5E38\u7528\u9078\u64C7",
    podiumDesc: "\u6309\u7D9C\u5408\u5206\u3001\u6027\u50F9\u6BD4\u548C\u901F\u5EA6\u5404\u6311\u4E00\u500B\uFF0C\u90FD\u662F\u5F9E\u699C\u55AE\u6578\u64DA\u88CF\u7B97\u51FA\u4F86\u7684",
    viewMode: {
      table: "\u8868\u683C",
      cards: "\u5361\u7247"
    },
    scenes: {
      all: "\u5168\u90E8",
      coding: "\u5BEB\u4EE3\u78BC\u4E3B\u529B",
      reasoning: "\u6DF1\u5EA6\u601D\u8003",
      budget: "\u767D\u83DC\u50F9\u5E73\u66FF (\u2264\xA52)",
      longContext: "\u767E\u842C\u9577\u6587\u672C"
    },
    compareDrawer: {
      selected: "\u5DF2\u9078 {count} \u6B3E\u6A21\u578B",
      startCompare: "\u958B\u59CB\u6A6B\u5411\u5C0D\u6BD4",
      clear: "\u6E05\u7A7A",
      limitTip: "\u6700\u591A\u53EF\u9078 3 \u6B3E\u6A21\u578B"
    },
    noMatch: "\u6C92\u6709\u7B26\u5408\u7576\u524D\u7BE9\u9078\u689D\u4EF6\u7684\u6A21\u578B\uFF0C\u8A66\u8A66\u653E\u5BEC\u50F9\u683C\u4E0A\u9650\u6216\u53D6\u6D88\u5EE0\u5546\u7BE9\u9078"
  },
  model: {
    seoTitle: "{name} - \u50F9\u683C\u3001\u8A55\u5206\u8207\u9078\u578B\u5EFA\u8B70",
    offerDescription: "\u6BCF\u767E\u842C\u8F38\u5165 tokens \u7684\u5B98\u65B9\u6A19\u50F9",
    scores: "\u80FD\u529B\u8A55\u5206",
    scoreNote: "\u7D9C\u5408\u5206\u53D6\u81EA Artificial Analysis \u7684 Intelligence Index\uFF0C\u5B83\u662F\u4E00\u500B\u7D9C\u5408\u6307\u6578\u800C\u975E\u767E\u5206\u5236\uFF0C\u7576\u524D\u699C\u9996\u7D04 63 \u5206",
    scoreMissing: "\u8A72\u6A21\u578B\u672A\u51FA\u73FE\u5728 Artificial Analysis \u7576\u524D\u699C\u55AE\u524D 25 \u540D\u4E2D\uFF0C\u6240\u4EE5\u6211\u9019\u88CF\u66AB\u6642\u6C92\u6709\u5B83\u7684\u7B2C\u4E09\u65B9\u8A55\u5206\u3002\u9019\u7D55\u4E0D\u4EE3\u8868\u5B83\u80FD\u529B\u5DEE\uFF0C\u53EA\u4EE3\u8868\u7F3A\u5C11\u7D71\u4E00\u7DAD\u5EA6\u7684\u516C\u958B\u6E2C\u8A66\u6578\u64DA",
    scoreDimensions: {
      overall: "\u7D9C\u5408",
      coding: "\u7DE8\u7A0B",
      reasoning: "\u63A8\u7406",
      chinese: "\u4E2D\u6587",
      agentic: "Agent"
    },
    variantNote: "\u6211\u9019\u88CF\u53D6\u7528\u7684\u662F\u300C{variant}\u300D\u63A8\u7406\u6A94\u4F4D\u7684\u6578\u64DA\uFF1B\u540C\u4E00\u6A21\u578B\u63DB\u4E86\u6A94\u4F4D\uFF0C\u901F\u5EA6\u8207\u8868\u73FE\u90FD\u6703\u6709\u660E\u986F\u5DEE\u7570",
    pricing: "\u50F9\u683C\u660E\u7D30",
    priceItem: "\u9805\u76EE",
    priceOfficial: "\u5B98\u65B9\u6A19\u50F9",
    priceInput: "\u8F38\u5165",
    priceOutput: "\u8F38\u51FA",
    priceCacheRead: "\u7DE9\u5B58\u547D\u4E2D",
    priceCacheWrite: "\u7DE9\u5B58\u5BEB\u5165",
    maxOutput: "\u6700\u5927\u8F38\u51FA",
    priceNote: "\u55AE\u4F4D\u70BA\u6BCF\u767E\u842C tokens\u3002\u6298\u7B97\u5F8C\u7684\u6DF7\u5408\u50F9\u70BA \xA5{blended}\uFF08\u7F8E\u5143\u6309 1 USD = {rate} CNY \u8A08\uFF0C\u532F\u7387\u6838\u5C0D\u65BC {date}\uFF09\u3002\u986F\u793A\u70BA\u300C\u2014\u300D\u8868\u793A\u5EE0\u5546\u672A\u516C\u4F48\u8A72\u9805\u6216\u4E0D\u6309\u8A72\u65B9\u5F0F\u8A08\u8CBB",
    perMillion: "\u6BCF\u767E\u842C tokens",
    tpsUnit: "tokens/\u79D2",
    noData: "\u66AB\u7121\u53EF\u6838\u5BE6\u6578\u64DA",
    scenes: "\u9069\u7528\u5834\u666F",
    highlights: "\u512A\u9EDE",
    caveats: "\u6CE8\u610F\u4E8B\u9805",
    backToList: "\u8FD4\u56DE\u699C\u55AE",
    tags: {
      reasoning: "\u63A8\u7406\u6A21\u578B",
      openWeights: "\u958B\u653E\u6B0A\u91CD",
      image: "\u5716\u7247\u8F38\u5165",
      audio: "\u97F3\u983B\u8F38\u5165",
      video: "\u8996\u983B\u8F38\u5165",
      free: "\u514D\u8CBB"
    },
    alternatives: {
      stronger: "\u540C\u50F9\u4F4D\u66F4\u5F37",
      cheaper: "\u540C\u6C34\u5E73\u66F4\u4FBF\u5B9C",
      neighbors: "\u50F9\u683C\u76F8\u8FD1",
      neighborsNote: "\u8A72\u6A21\u578B\u6C92\u6709\u53EF\u6838\u5BE6\u7684\u7D9C\u5408\u5206\uFF0C\u7121\u6CD5\u505A\u80FD\u529B\u5C0D\u6BD4\uFF0C\u9019\u88CF\u6309\u6DF7\u5408\u50F9\u63A5\u8FD1\u7A0B\u5EA6\u63A8\u85A6"
    },
    blendedShort: "\u6DF7\u5408\u50F9",
    scoreShort: "\u7D9C\u5408\u5206"
  },
  compare: {
    title: "\u6A21\u578B\u5C0D\u6BD4",
    subtitle: "\u628A\u5169\u5230\u56DB\u500B\u5019\u9078\u4E26\u6392\u64FA\u958B\u770B\u3002\u9078\u64C7\u6703\u5BEB\u9032\u7DB2\u5740\uFF0C\u4E00\u689D\u93C8\u63A5\u5C31\u80FD\u628A\u5C0D\u6BD4\u7D50\u679C\u767C\u7D66\u5225\u4EBA",
    seoTitle: "AI \u6A21\u578B\u5C0D\u6BD4 - \u53C3\u6578\u8207\u50F9\u683C\u4E26\u6392\u770B",
    seoTitleWith: "{names} \u5C0D\u6BD4",
    pick: "\u9078\u64C7\u8981\u5C0D\u6BD4\u7684\u6A21\u578B\uFF08\u6700\u591A {max} \u500B\uFF09",
    overflow: "\u4E00\u6B21\u6700\u591A\u5C0D\u6BD4 {max} \u500B\u6A21\u578B\uFF0C\u591A\u51FA\u7684\u5DF2\u5FFD\u7565\u2014\u2014\u518D\u591A\u5C31\u64E0\u6210\u4E00\u5718\u4E86",
    needMore: "\u81F3\u5C11\u9078\u5169\u500B\u6A21\u578B\u624D\u80FD\u5C0D\u6BD4",
    field: "\u5C0D\u6BD4\u9805",
    modalities: "\u8F38\u5165\u6A21\u614B",
    summary: "\u4E00\u53E5\u8A71",
    yes: "\u662F",
    no: "\u5426",
    billingTitle: "\u8A08\u8CBB\u5DEE\u7570"
  },
  changes: {
    title: "\u6A21\u578B\u8B8A\u66F4\u6D41\u6C34",
    subtitle: "\u50F9\u683C\u8ABF\u6574\u3001\u4FC3\u92B7\u8D77\u6B62\u3001\u65B0\u6536\u9304\u8207\u4E0B\u7DDA\u3002\u9078\u5C0D\u6A21\u578B\u4E4B\u5F8C\uFF0C\u6700\u5BB9\u6613\u8B93\u4EBA\u88AB\u8CEC\u55AE\u6253\u500B\u63AA\u624B\u4E0D\u53CA\u7684\u5C31\u662F\u9019\u4E9B",
    seoTitle: "AI \u6A21\u578B\u50F9\u683C\u8B8A\u66F4\u8A18\u9304\u8207\u9810\u544A",
    seoDescription: "\u8DDF\u8E64\u5404\u5BB6 AI \u6A21\u578B\u7684\u50F9\u683C\u8ABF\u6574\u3001\u4FC3\u92B7\u5230\u671F\u3001\u65B0\u6A21\u578B\u6536\u9304\u8207\u4E0B\u7DDA\uFF0C\u542B\u5DF2\u516C\u4F48\u7684\u672A\u4F86\u8B8A\u5316\u9810\u544A",
    asOf: "\u622A\u81F3 {date}",
    upcoming: "\u5DF2\u77E5\u5C07\u767C\u751F",
    upcomingNote: "\u9019\u4E9B\u662F\u5EE0\u5546\u5DF2\u7D93\u516C\u4F48\u3001\u4F46\u6563\u843D\u5728\u5404\u5BB6\u5B9A\u50F9\u9801\u8173\u8A3B\u88CF\u7684\u8B8A\u5316\u3002\u8DDD\u96E2\u5230\u671F\u4E0D\u5230 30 \u5929\u7684\u6A19\u7D05",
    upcomingEmpty: "\u7576\u524D\u6536\u9304\u7684\u6A21\u578B\u88CF\uFF0C\u6C92\u6709\u5DF2\u516C\u4F48\u78BA\u5207\u65E5\u671F\u7684\u50F9\u683C\u8B8A\u5316",
    history: "\u5DF2\u767C\u751F\u7684\u8B8A\u66F4",
    historyNote: "\u9019\u88CF\u53EA\u8A18\u6211\u81EA\u5DF1\u771F\u5BE6\u6838\u5C0D\u904E\u7684\u8B8A\u5316\uFF0C\u5F9E\u958B\u59CB\u6536\u9304\u90A3\u5929\u7B97\u8D77\uFF0C\u4E0D\u505A\u8FFD\u6EAF\u3002\u7A7A\u767D\u6642\u6BB5\u5C31\u662F\u7A7A\u767D\u2014\u2014\u7DE8\u4E00\u6BB5\u8C50\u6EFF\u7684\u6B77\u53F2\u5F88\u5BB9\u6613\uFF0C\u4F46\u90A3\u6A23\u6211\u81EA\u5DF1\u90FD\u4E0D\u6703\u518D\u4FE1\u9019\u500B\u7AD9",
    historyEmpty: "\u9084\u6C92\u6709\u8A18\u9304\u5230\u8B8A\u66F4",
    daysLeft: "\u9084\u6709 {days} \u5929\uFF08{date}\uFF09",
    today: "\u5C31\u662F\u4ECA\u5929",
    noDate: "\u672A\u516C\u4F48\u5230\u671F\u65E5",
    effect: {
      rise: "\u5230\u671F\u5F8C\u50F9\u683C\u5F9E {from} \u6F32\u5230 {to}\uFF08\u6BCF\u767E\u842C tokens\uFF09",
      riseUnknown: "\u7576\u524D\u50F9 {from}\uFF08\u6BCF\u767E\u842C tokens\uFF09\uFF0C\u5230\u671F\u5F8C\u7684\u50F9\u683C\u5EE0\u5546\u672A\u516C\u4F48",
      discountEnds: "\u9650\u6642\u50F9 {to} \u7D50\u675F\u5F8C\u56DE\u5230\u6A19\u6E96\u50F9 {from}\uFF08\u6BCF\u767E\u842C tokens\uFF09",
      discountEndsUnknown: "\u6A19\u6E96\u50F9 {from}\uFF08\u6BCF\u767E\u842C tokens\uFF09\uFF0C\u9650\u6642\u512A\u60E0\u7D50\u675F\u65E5\u671F\u672A\u516C\u4F48"
    },
    kinds: {
      priceUp: "\u6F32\u50F9",
      priceDown: "\u964D\u50F9",
      modelAdded: "\u65B0\u6536\u9304",
      modelRemoved: "\u4E0B\u7DDA",
      promo: "\u4FC3\u92B7",
      score: "\u8A55\u5206\u66F4\u65B0",
      other: "\u5176\u4ED6"
    }
  },
  switch: {
    indexTitle: "\u63DB\u500B\u66F4\u4FBF\u5B9C\u7684\u6A21\u578B",
    indexSubtitle: "\u9078\u4E00\u500B\u4F60\u6B63\u5728\u7528\u7684\u6A21\u578B\uFF0C\u770B\u770B\u6709\u54EA\u4E9B\u80FD\u66FF\u3001\u80FD\u7701\u591A\u5C11\u3001\u63DB\u904E\u53BB\u8981\u6CE8\u610F\u4EC0\u9EBC",
    indexSeoTitle: "AI \u6A21\u578B\u66FF\u4EE3\u65B9\u6848 - \u63DB\u500B\u66F4\u4FBF\u5B9C\u7684",
    indexNote: "\u6392\u5728\u524D\u9762\u7684\u662F\u55AE\u50F9\u6700\u9AD8\u7684\u6A21\u578B\u2014\u2014\u6703\u770B\u9019\u4E00\u9801\u7684\u4EBA\u591A\u534A\u5728\u70BA\u8CEC\u55AE\u767C\u6101\uFF0C\u90A3\u6279\u7684\u66FF\u4EE3\u7A7A\u9593\u4E5F\u6700\u5927",
    groups: {
      expensive: "\u8CB4\u6A94\uFF08\u6DF7\u5408\u50F9 \xA530 \u4EE5\u4E0A\uFF09",
      mid: "\u4E2D\u6A94\uFF08\xA510\u201330\uFF09",
      cheap: "\u4FBF\u5B9C\u6A94\uFF08\xA510 \u4EE5\u4E0B\uFF09"
    },
    title: "{name} \u7684\u4FBF\u5B9C\u66FF\u4EE3",
    subtitle: "\u548C {name} \u80FD\u529B\u76F8\u7576\u6216\u5920\u7528\u3001\u4F46\u66F4\u4FBF\u5B9C\u7684\u9078\u64C7\uFF0C\u4EE5\u53CA\u63DB\u904E\u53BB\u4E4B\u524D\u8A72\u77E5\u9053\u7684\u8A08\u8CBB\u5DEE\u7570",
    seoTitle: "{name} \u7684\u4FBF\u5B9C\u66FF\u4EE3\u65B9\u6848 - \u80FD\u7701\u591A\u5C11\u3001\u600E\u9EBC\u63DB",
    seoDescription: "{name} \u6709\u54EA\u4E9B\u66F4\u4FBF\u5B9C\u7684\u66FF\u4EE3\u6A21\u578B\uFF1F\u5C0D\u6BD4\u7D9C\u5408\u5206\u3001\u6DF7\u5408\u50F9\u8207\u8A08\u8CBB\u5DEE\u7570\uFF0C\u9644\u63DB\u6A21\u578B\u524D\u7684\u9A57\u8B49\u6B65\u9A5F",
    saves: "\u7701 {percent}%",
    noScore: "\u66AB\u7121\u7D9C\u5408\u5206",
    current: "\u7576\u524D\u6A21\u578B",
    viewDetail: "\u67E5\u770B\u5B8C\u6574\u53C3\u6578",
    otherModels: "\u63DB\u5225\u7684\u6A21\u578B\u770B\u770B",
    none: "\u6309\u7576\u524D\u6578\u64DA\uFF0C\u6C92\u6709\u627E\u5230\u6BD4 {name} \u660E\u986F\u66F4\u4FBF\u5B9C\u53C8\u5920\u7528\u7684\u9078\u64C7\u3002\u5B83\u53EF\u80FD\u672C\u4F86\u5C31\u5728\u6027\u50F9\u6BD4\u524D\u5217",
    sections: {
      cheaper: "\u540C\u6C34\u5E73\u66F4\u4FBF\u5B9C",
      cheaperNote: "\u7D9C\u5408\u5206\u8207\u7576\u524D\u6A21\u578B\u76F8\u7576\u6216\u66F4\u9AD8\uFF0C\u4F46\u50F9\u683C\u66F4\u4F4E\u3002\u9019\u4E00\u6A94\u901A\u5E38\u53EF\u4EE5\u76F4\u63A5\u63DB",
      deepCut: "\u5927\u5E45\u964D\u6A94",
      deepCutNote: "\u4FBF\u5B9C\u5230\u4E94\u5206\u4E4B\u4E00\u4EE5\u4E0B\u3002\u80FD\u529B\u78BA\u5BE6\u6703\u6389\uFF0C\u503C\u4E0D\u503C\u5F97\u53D6\u6C7A\u65BC\u4F60\u7684\u4EFB\u52D9\u2014\u2014\u6211\u624B\u4E0A\u6C92\u6709\u7DE8\u7A0B\u7B49\u5206\u7DAD\u5EA6\u7684\u8A55\u5206\uFF0C\u9019\u500B\u554F\u984C\u6211\u7B54\u4E0D\u4E86\uFF0C\u53EA\u80FD\u9760\u4F60\u81EA\u5DF1\u8A66",
      stronger: "\u540C\u50F9\u4F4D\u66F4\u5F37",
      strongerNote: "\u50F9\u683C\u76F8\u7576\u4F46\u7D9C\u5408\u5206\u66F4\u9AD8\u3002\u5982\u679C\u4F60\u63DB\u6A21\u578B\u7684\u52D5\u6A5F\u662F\u6548\u679C\u4E0D\u5920\uFF0C\u5148\u770B\u9019\u4E00\u6A94",
      neighbors: "\u50F9\u683C\u76F8\u8FD1",
      neighborsNote: "\u7576\u524D\u6A21\u578B\u6C92\u6709\u53EF\u6838\u5BE6\u7684\u7D9C\u5408\u5206\uFF0C\u7121\u6CD5\u505A\u80FD\u529B\u5C0D\u6BD4\uFF0C\u9019\u88CF\u6309\u6DF7\u5408\u50F9\u63A5\u8FD1\u7A0B\u5EA6\u5217\u51FA"
    },
    warnings: {
      tiers: "\u6709\u968E\u68AF\u50F9\uFF1A\u8F38\u5165\u8D85\u904E {value} token \u5F8C\u55AE\u50F9\u6703\u8DF3\u6A94\uFF0C\u9577\u4E0A\u4E0B\u6587\u5834\u666F\u8981\u6309\u5BE6\u969B\u6A94\u4F4D\u91CD\u7B97",
      timeWindows: "\u5206\u6642\u6BB5\u8A08\u50F9\uFF1A{value} \u66F4\u4FBF\u5B9C\uFF0C\u96E2\u7DDA\u4EFB\u52D9\u932F\u5CEF\u8DD1\u80FD\u76F4\u63A5\u7701\u4E00\u622A",
      promo: "{value}",
      batch: "\u6279\u91CF\u63A5\u53E3\u7D04\u70BA\u5E38\u898F\u50F9\u7684 {value}%\uFF0C\u4E0D\u8D95\u6642\u9593\u7684\u4EFB\u52D9\u61C9\u8A72\u8D70\u6279\u91CF",
      cache: "\u7DE9\u5B58\u4E0D\u6309\u5BEB\u5165\u6536\u8CBB\uFF0C\u6539\u6309\u5B58\u5132\u6642\u9577\u8A08\u8CBB\u2014\u2014\u7DE9\u5B58\u7559\u5F97\u8D8A\u4E45\u9019\u7B46\u8D8A\u8CB4\uFF0C\u548C\u6309\u6B21\u6536\u8CBB\u7684\u6A21\u578B\u4E0D\u662F\u4E00\u56DE\u4E8B",
      modality: "{value} \u8F38\u5165\u55AE\u7368\u8A08\u50F9\u4E14\u66F4\u8CB4\uFF0C\u591A\u6A21\u614B\u8CA0\u8F09\u4E0D\u80FD\u6309\u6587\u672C\u55AE\u50F9\u4F30",
      unstructured: "\u8A72\u6A21\u578B\u7684\u8A08\u8CBB\u898F\u5247\u672C\u7AD9\u5C1A\u672A\u7D50\u69CB\u5316\u6838\u5BE6\uFF0C\u53EF\u80FD\u5B58\u5728\u968E\u68AF\u50F9\u6216\u6642\u6BB5\u50F9\uFF0C\u63DB\u4E4B\u524D\u8ACB\u81EA\u884C\u6838\u5C0D\u5B98\u65B9\u5B9A\u50F9\u9801"
    },
    verify: {
      title: "\u63DB\u4E4B\u524D\u5148\u81EA\u5DF1\u9A57\u4E00\u904D",
      step1: "\u6311\u4E09\u5230\u4E94\u500B\u4F60\u771F\u5BE6\u8DD1\u904E\u7684\u4EFB\u52D9\uFF0C\u628A\u539F\u59CB\u8F38\u5165\u539F\u6A23\u9935\u7D66\u5019\u9078\u6A21\u578B",
      step2: "\u4E0D\u770B\u300C\u7B54\u5F97\u597D\u4E0D\u597D\u300D\uFF0C\u53EA\u770B\u300C\u6703\u4E0D\u6703\u7FFB\u8ECA\u300D\uFF1A\u683C\u5F0F\u662F\u5426\u5B88\u7D04\u3001\u9577\u4E0A\u4E0B\u6587\u6709\u6C92\u6709\u4E1F\u7D30\u7BC0\u3001\u5DE5\u5177\u8ABF\u7528\u53C3\u6578\u5C0D\u4E0D\u5C0D",
      step3: "\u628A\u5169\u908A\u8F38\u51FA\u4E26\u6392\u653E\uFF0C\u7FFB\u8ECA\u7387\u8D85\u904E\u4E00\u6210\u5C31\u5225\u63DB\uFF1B\u4E00\u6210\u4EE5\u5167\u53EF\u4EE5\u5148\u5728\u975E\u95DC\u9375\u8DEF\u5F91\u4E0A\u8DD1\u4E00\u9031",
      caveat: "\u9019\u500B\u7D9C\u5408\u5206\u4F86\u81EA\u7B2C\u4E09\u65B9\u901A\u7528\u699C\u55AE\uFF0C\u53CD\u6620\u4E0D\u4E86\u4F60\u624B\u982D\u9019\u500B\u5177\u9AD4\u4EFB\u52D9\u2014\u2014\u9019\u8A71\u6211\u5728\u597D\u5E7E\u9801\u90FD\u8AAC\u904E\uFF0C\u4F46\u9019\u88CF\u6700\u8981\u7DCA\uFF0C\u6240\u4EE5\u518D\u8AAC\u4E00\u904D\u3002\u7701\u4E0B\u7684\u9322\u662F\u5BE6\u6253\u5BE6\u7684\uFF0C\u5920\u4E0D\u5920\u7528\uFF0C\u53EA\u6709\u4F60\u81EA\u5DF1\u8A66\u904E\u624D\u7B97\u6578"
    }
  },
  about: {
    title: "\u95DC\u65BC\u53EF\u559C AI",
    subtitle: "\u5584\u7528 AI\uFF0C\u4E00\u4EBA\u6210\u8ECD\uFF0C\u53EF\u559C\u53EF\u6A02 \u2014\u2014 \u4E00\u500B\u5168\u68E7\u5DE5\u7A0B\u5E2B\u7684\u4E00\u4EBA\u516C\u53F8\u5BE6\u8E10\u624B\u8A18",
    seoTitle: "\u95DC\u65BC\u53EF\u559C AI - \u4E00\u4EBA\u516C\u53F8\u767C\u5C55\u6307\u5357\u8207\u7AD9\u9577\u624B\u8A18",
    explore: "\u4E00\u4EBA\u516C\u53F8\u5BE6\u8E10\u5730\u5716",
    authorIntro: "\u6211\u662F\u53EF\u6A02\u3002\u5168\u68E7\u5DE5\u7A0B\u5E2B\uFF0C\u624B\u982D\u7DAD\u8B77\u7740 GoPanel\u3001\u8F15\u92EAAI/\u7368\u7ACB\u7AD9\u7B49\u9805\u76EE\uFF0C\u4EE5\u53CA\u9019\u500B\u7AD9\u9EDE\u3002\u4E0D\u8FFD\u6C42\u878D\u8CC7\u62DB\u4EBA\u7684\u5B8F\u5927\u654D\u4E8B\uFF0C\u6B63\u5728\u8E10\u884C\u9760 AI \u8CE6\u80FD\u7684\u4E00\u4EBA\u516C\u53F8\u9589\u74B0",
    tagSolo: "\u7368\u7ACB\u5168\u68E7\u958B\u767C",
    tagAi: "AI \u964D\u672C\u8207\u6A21\u578B\u9078\u578B",
    tagAudit: "100% \u771F\u5BE6\u5BE6\u6E2C",
    why: {
      title: "\u70BA\u4EC0\u9EBC\u662F\u4E00\u4EBA\u516C\u53F8\uFF1F\u6642\u4EE3\u62D0\u9EDE\u8207\u300C\u4E00\u4EBA\u6210\u8ECD\u300D",
      p1: "\u904E\u53BB\u505A\u8EDF\u4EF6\uFF0C\u7368\u7ACB\u958B\u767C\u8005\u5F80\u5F80\u6703\u649E\u4E0A\u6B98\u9177\u7684\u300C\u4E0D\u53EF\u80FD\u4E09\u89D2\u300D\uFF1A\u61C2\u9700\u6C42\u5BEB\u4E0D\u5B8C\u4EE3\u78BC\uFF0C\u5BEB\u5B8C\u4EE3\u78BC\u4E0D\u6703\u505A\u5BA3\u767C\u7372\u5BA2\uFF0C\u597D\u4E0D\u5BB9\u6613\u4F86\u4E86\u7528\u6237\uFF0C\u53C8\u88AB\u8907\u96DC\u7684\u904B\u7DAD\u76E3\u63A7\u3001\u5BA2\u670D\u5DE5\u55AE\u548C\u9AD8\u6602\u7684\u670D\u52D9\u5668\u8CEC\u55AE\u62D6\u5F97\u7126\u982D\u721B\u984D\u3002\u6700\u5F8C\u4E00\u500B\u4EBA\u6D3B\u6210\u4E86\u4E00\u652F\u968A\u4F0D\uFF0C\u4F46\u7D2F\u5F97\u534A\u6B7B",
      p2: "\u73FE\u5728\u60C5\u6CC1\u8B8A\u4E86\u3002\u4EE5\u5927\u6A21\u578B\u548C Agent \u70BA\u4EE3\u8868\u7684 AI \u6280\u8853\uFF0C\u7B2C\u4E00\u6B21\u628A\u7814\u767C\u548C\u4EA4\u4ED8\u7684\u908A\u969B\u6210\u672C\u58D3\u5230\u4E86\u6975\u4F4E\u3002\u5584\u7528 AI\uFF0C\u4E00\u500B\u4EBA\u7684\u8A8D\u77E5\u548C\u57F7\u884C\u529B\u5C31\u80FD\u88AB\u653E\u5927\u6210\u4E00\u500B 5 \u5230 10 \u4EBA\u7684\u7CBE\u5E79\u6230\u968A\u3002\u300C\u4E00\u4EBA\u6210\u8ECD\u300D\u4E0D\u518D\u662F\u6587\u5B78\u4FEE\u8FAD\uFF0C\u800C\u662F\u6211\u5011\u9019\u4E00\u4EE3\u6280\u8853\u4EBA\u548C\u8D85\u7D1A\u500B\u9AD4\u6700\u771F\u5BE6\u7684\u751F\u5B58\u7BC4\u5F0F"
    },
    pillars: {
      title: "\u9019\u500B\u7AD9\u80FD\u70BA\u4F60\u63D0\u4F9B\u4EC0\u9EBC\uFF1A\u4E00\u4EBA\u516C\u53F8\u7684\u56DB\u6839\u652F\u67F1",
      p1: "1. \u6E2C\u4E00\u6E2C\u80FD\u529B\u77ED\u677F\uFF08\u80FD\u529B\u6E2C\u8A55\uFF09\uFF1A\u5F9E\u6253\u5DE5\u4EBA\u5230\u7368\u7ACB\u7D93\u71DF\uFF0C\u6700\u6015\u7684\u662F\u4E0D\u77E5\u9053\u81EA\u5DF1\u7F3A\u4EC0\u9EBC\u3002\u6211\u628A\u4E00\u4EBA\u516C\u53F8\u7684\u80FD\u529B\u62C6\u6210\u7522\u54C1\u3001\u6280\u8853\u3001\u7372\u5BA2\u548C\u5546\u696D\u5316\u56DB\u500B\u7DAD\u5EA6\uFF0C\u505A\u4E86\u4E00\u5957\u6975\u7C21\u81EA\u6E2C\uFF0C\u5E6B\u4F60\u5FEB\u901F\u770B\u6E05\u7576\u524D\u7684\u5361\u9EDE\u5728\u54EA\u88CF",
      p2: "2. \u628A\u7B97\u529B\u8CEC\u7B97\u5F97\u6E05\u6E05\u695A\u695A\uFF08\u6A21\u578B\u9078\u578B\u8207\u964D\u672C\uFF09\uFF1AAI \u662F\u4E00\u4EBA\u516C\u53F8\u6700\u6838\u5FC3\u7684\u751F\u7522\u8CC7\u6599\uFF0C\u4F46\u4E5F\u6700\u5BB9\u6613\u88AB\u5EE0\u5546\u7684\u8907\u96DC\u8A08\u8CBB\u548C\u96B1\u6027\u52A0\u50F9\u80CC\u523A\u3002\u6211\u628A\u81EA\u5DF1\u6BCF\u5929\u76EF AI \u7DB2\u95DC\u7684\u771F\u5BE6\u5E95\u50F9\u3001\u5EF6\u9072\u8868\u73FE\u548C\u964D\u672C\u5E73\u66FF\u8DEF\u7DDA\u5168\u62FF\u51FA\u4F86\uFF0C\u5E6B\u4F60\u780D\u6389 50% \u5230 80% \u7684\u7B97\u529B\u51A4\u6789\u9322",
      p3: "3. \u6975\u7C21\u5168\u68E7\u88DD\u5099\u5EAB\uFF08\u5DE5\u5177\u7BB1\u8207\u7DE8\u7A0B\u5957\u9910\uFF09\uFF1A\u5BEB\u4EE3\u78BC\u7528\u4EC0\u9EBC\u5DE5\u5177\u3001\u600E\u9EBC\u8CB7 Cursor / Claude \u5957\u9910\u6700\u5212\u7B97\u3001\u57DF\u540D\u600E\u9EBC\u6311\u3001\u4EE3\u78BC\u600E\u9EBC\u81EA\u52D5\u69CB\u5EFA\u3001\u6D77\u5916\u5982\u4F55\u5408\u6CD5\u6536\u6B3E\u2026\u2026\u5168\u662F\u6211\u81EA\u5DF1\u5BE6\u64CD\u8E29\u5751\u5F8C\u7559\u4E0B\u7684\u8D81\u624B\u88DD\u5099\uFF0C\u4E0D\u6C42\u5927\u800C\u5168\uFF0C\u53EA\u6C42\u958B\u7BB1\u5373\u7528",
      p4: "4. \u771F\u5BE6\u7684\u5BE6\u6230\u8207\u8E29\u5751\u6D41\u6C34\uFF08\u5C08\u6B04\u300A\u5E95\u5C64\u91CD\u69CB\u300B\u8207\u535A\u5BA2\uFF09\uFF1A\u6C92\u6709\u7406\u8AD6\u8AAC\u6559\uFF0C\u53EA\u6709\u771F\u5BE6\u7684\u5FC3\u667A\u6A21\u578B\u8FED\u4EE3\u3001\u7522\u54C1\u4E0A\u7DDA\u8986\u76E4\u548C\u907F\u5751\u6D41\u6C34\u3002\u6BCF\u4E00\u500B\u6210\u529F\u548C\u7FFB\u8ECA\u7684\u7D30\u7BC0\u90FD\u6524\u5728\u967D\u5149\u4E0B\uFF0C\u7D66\u540C\u8DEF\u7684\u4F60\u505A\u500B\u53C3\u8003"
    },
    values: {
      title: "\u4EC0\u9EBC\u662F\u300C\u53EF\u559C\u53EF\u6A02\u300D\uFF1F\u6211\u773C\u4E2D\u7684\u4E00\u4EBA\u516C\u53F8\u5FC3\u614B",
      p1: "\u9019\u500B\u7AD9\u53EB\u53EF\u559C AI\uFF0C\u6211\u53EB\u53EF\u6A02\u3002\u5408\u5728\u4E00\u8D77\uFF0C\u6070\u597D\u662F\u300C\u53EF\u559C\u53EF\u6A02\u300D\u3002\u5F88\u591A\u4EBA\u505A\u7368\u7ACB\u958B\u767C\uFF0C\u505A\u7740\u505A\u7740\u53C8\u628A\u81EA\u5DF1\u903C\u6210\u4E86 7x24 \u5C0F\u6642\u5F85\u547D\u7684\u82E6\u529B\u5916\u5305\uFF0C\u7126\u616E\u5931\u7720\uFF0C\u672C\u672B\u5012\u7F6E",
      p2: "\u6211\u7406\u89E3\u7684\u4E00\u4EBA\u516C\u53F8\uFF0C\u6838\u5FC3\u662F\u627E\u56DE\u5C0D\u751F\u6D3B\u7684\u638C\u63A7\u6B0A\u3002\u85C9\u52A9 AI \u7684\u69D3\u687F\uFF0C\u628A\u4E8B\u60C5\u505A\u6210\u3001\u5275\u9020\u771F\u5BE6\u50F9\u503C\uFF0C\u9019\u662F\u300C\u53EF\u559C\u300D\uFF1B\u4E0D\u88AB\u865B\u69AE\u6307\u6A19\u7D81\u67B6\uFF0C\u5F9E\u5BB9\u8CFA\u9322\u3001\u904E\u597D\u751F\u6D3B\uFF0C\u9019\u662F\u300C\u53EF\u6A02\u300D\u3002\u4E00\u4EBA\u6210\u8ECD\uFF0C\u6700\u7D42\u662F\u70BA\u4E86\u8B93\u81EA\u5DF1\u6D3B\u5F97\u66F4\u6709\u9B06\u5F1B\u611F\u548C\u5C0A\u56B4"
    },
    principles: {
      title: "\u6211\u7684\u539F\u5247\uFF1A\u771F\u5BE6\u3001\u900F\u660E\u3001\u4E0D\u8CE3\u7126\u616E",
      p1: "\u4E0D\u756B\u9020\u5BCC\u5927\u9905\uFF1A\u6211\u4E0D\u6703\u5728\u9019\u500B\u7AD9\u4E0A\u8CE3\u300C7\u5929\u9760 AI \u6708\u5165\u5341\u842C\u300D\u7684\u66B4\u5BCC\u795E\u8A71\u3002\u4E00\u4EBA\u516C\u53F8\u662F\u4E00\u5834\u8A8D\u771F\u7684\u5546\u696D\u5BE6\u8E10\uFF0C\u9700\u8981\u5BE6\u6253\u5BE6\u7684\u7522\u54C1\u3001\u4EE3\u78BC\u3001\u7372\u5BA2\u8207\u7B97\u529B\u8CEC\u672C\uFF0C\u6D6E\u8E81\u7684\u6377\u5F91\u6700\u7D42\u90FD\u6703\u88AB\u5E02\u5834\u6233\u7834",
      p2: "\u6578\u64DA\u771F\u5BE6\u53EF\u6838\u5BE6\uFF1A\u699C\u55AE\u4E0A\u6BCF\u500B\u6A21\u578B\u7684\u50F9\u683C\u6211\u5F9E\u5B98\u65B9\u6838\u5C0D\uFF0C\u4E2D\u8F49\u7AD9\u7684\u5EF6\u9072\u6211\u7528\u771F\u91D1\u767D\u9280\u5BE6\u6E2C\uFF0C\u5DE5\u5177\u548C\u65B9\u6848\u5168\u662F\u6211\u81EA\u5DF1\u7528\u904E\u624D\u63A8\u3002\u51E1\u662F\u6211\u500B\u4EBA\u7684\u4E3B\u89C0\u9AD4\u9A57\uFF0C\u6211\u90FD\u660E\u78BA\u6A19\u8A3B\u300C\u7DE8\u8F2F\u5224\u65B7\u300D\uFF0C\u7D55\u4E0D\u62FF\u500B\u4EBA\u504F\u597D\u5192\u5145\u5BA2\u89C0\u516C\u7406",
      p3: "\u4E00\u4EBA\u6210\u8ECD\uFF0C\u4F46\u4E0D\u5B64\u8ECD\u596E\u6230\uFF1A\u7368\u7ACB\u63A2\u7D22\u7684\u8DEF\u4E0A\u5BB9\u6613\u611F\u5230\u5B64\u7368\u548C\u8FF7\u832B\u3002\u6240\u4EE5\u6211\u5EFA\u4E86\u4E00\u4EBA\u516C\u53F8\u4EA4\u6D41\u793E\u7FA3\uFF0C\u628A\u6709\u540C\u983B\u76EE\u6A19\u3001\u5728\u771F\u5BE6\u4EA4\u4ED8\u7522\u54C1\u7684\u670B\u53CB\u805A\u5728\u4E00\u8D77\u3002\u6211\u5011\u4E92\u901A\u6709\u7121\u3001\u5171\u4EAB\u8CC7\u6E90\u3001\u62B1\u5718\u6210\u9577"
    }
  },
  posts: {
    title: "\u535A\u5BA2",
    subtitle: "AI \u7DE8\u7A0B\u3001\u505A\u7522\u54C1\u548C\u4E00\u4EBA\u516C\u53F8\u7684\u8A18\u9304",
    seoTitle: "\u535A\u5BA2 - \u53EF\u559C AI",
    seoDescription: "\u53EF\u6A02\u95DC\u65BC AI \u7DE8\u7A0B\u3001\u505A\u7522\u54C1\u548C\u4E00\u4EBA\u516C\u53F8\u7684\u8A18\u9304",
    empty: "\u9084\u6C92\u6709\u767C\u4F48\u6587\u7AE0",
    checkBackLater: "\u65B0\u6587\u7AE0\u6703\u653E\u5728\u9019\u88CF",
    allCategories: "\u5168\u90E8",
    category: "\u5206\u985E",
    categoryEmpty: "\u8A72\u5206\u985E\u4E0B\u9084\u6C92\u6709\u6587\u7AE0",
    views: "{count} \u6B21\u95B2\u8B80",
    toc: "\u76EE\u9304",
    pagination: "\u6587\u7AE0\u5206\u9801",
    previous: "\u4E0A\u4E00\u9801",
    next: "\u4E0B\u4E00\u9801",
    backToList: "\u8FD4\u56DE\u6587\u7AE0\u5217\u8868",
    like: "\u9EDE\u8D0A",
    likePrompt: "\u89BA\u5F97\u6709\u6536\u7A6B\uFF0C\u4E0D\u59A8\u9EDE\u500B\u8D0A"
  },
  cheap: {
    title: "AI \u6A21\u578B\u7701\u9322\u6307\u5357",
    subtitle: "\u6309\u4F7F\u7528\u5834\u666F\u7D66\u51FA\u4E09\u6A94\u9078\u64C7\uFF1A\u4E0D\u8A08\u6210\u672C\u7684\u9996\u9078\u3001\u591A\u6578\u4EBA\u8A72\u9078\u7684\u6027\u50F9\u6BD4\u6A94\uFF0C\u4EE5\u53CA\u80FD\u7701\u5230\u4EC0\u9EBC\u7A0B\u5EA6",
    seoTitle: "AI \u6A21\u578B\u7701\u9322\u6307\u5357 - \u4FBF\u5B9C\u597D\u7528\u7684\u6A21\u578B\u600E\u9EBC\u9078",
    seoDescription: "\u6309\u5BEB\u4EE3\u78BC\u3001\u9577\u6587\u6A94\u3001\u6279\u91CF\u8655\u7406\u3001\u7FFB\u8B6F\u7B49\u5834\u666F\u63A8\u85A6\u4FBF\u5B9C\u597D\u7528\u7684 AI \u6A21\u578B\uFF0C\u9644\u50F9\u683C\u5C0D\u6BD4\u8207\u7701\u9322\u6280\u5DE7\u3002\u6BCF\u689D\u63A8\u85A6\u90FD\u6A19\u660E\u4F9D\u64DA\u4F86\u6E90",
    basisTitle: "\u9019\u4E9B\u63A8\u85A6\u662F\u600E\u9EBC\u4F86\u7684",
    basisNote: "\u50F9\u683C\u8207\u4E0A\u4E0B\u6587\u9577\u5EA6\u53D6\u81EA\u5404\u5EE0\u5546\u5B98\u65B9\u5B9A\u50F9\u9801\uFF0C\u7D9C\u5408\u5206\u8207\u901F\u5EA6\u53D6\u81EA Artificial Analysis \u699C\u55AE\u2014\u2014\u9019\u5E7E\u9805\u6211\u80FD\u62CD\u7740\u80F8\u812F\u8AAC\u662F\u53EF\u6838\u5BE6\u7684\u3002\u4F46\u6211\u624B\u982D\u6C92\u6709\u7DE8\u7A0B\u3001\u4E2D\u6587\u3001Agent \u9019\u4E9B\u5206\u7DAD\u5EA6\u7684\u8A55\u5206\uFF0C\u51E1\u662F\u6D89\u53CA\u9019\u4E9B\u80FD\u529B\u7684\u5224\u65B7\uFF0C\u90FD\u662F\u6211\u81EA\u5DF1\u7684\u7DE8\u8F2F\u610F\u898B\uFF0C\u6BCF\u500B\u5834\u666F\u4E0B\u90FD\u55AE\u7368\u6A19\u4E86\u51FA\u4F86\u3002\u771F\u8981\u4E0A\u751F\u7522\uFF0C\u62FF\u4F60\u81EA\u5DF1\u7684\u4EFB\u52D9\u5BE6\u6E2C\u4E00\u904D\u518D\u5B9A\uFF0C\u5225\u7167\u55AE\u5168\u6536",
    basisLabel: "\u63A8\u85A6\u4F9D\u64DA\uFF1A",
    tiers: {
      best: "\u9996\u9078",
      value: "\u6027\u50F9\u6BD4",
      budget: "\u6975\u7701"
    },
    tableTitle: "\u4FBF\u5B9C\u6A21\u578B\u7E3D\u699C",
    tableNote: "\u6309\u6DF7\u5408\u50F9\u5347\u5E8F\u6392\u5217\u7684\u524D 15 \u500B\u6A21\u578B\u3002\u50F9\u683C\u4F4E\u4E0D\u7B49\u65BC\u5920\u7528\uFF0C\u8ACB\u7D50\u5408\u7D9C\u5408\u5206\u4E00\u8D77\u770B\u2014\u2014\u986F\u793A\u70BA\u300C\u2014\u300D\u7684\u8868\u793A\u8A72\u6A21\u578B\u6C92\u6709\u53EF\u6838\u5BE6\u7684\u8A55\u5206\u6578\u64DA",
    viewFullTable: "\u67E5\u770B\u5B8C\u6574\u699C\u55AE",
    tipsTitle: "\u7701\u9322\u6280\u5DE7",
    tips: {
      cache: {
        title: "\u628A\u7A69\u5B9A\u4E0D\u8B8A\u7684\u5167\u5BB9\u653E\u9032\u7DE9\u5B58",
        body: "\u591A\u6578\u5EE0\u5546\u7684\u7DE9\u5B58\u547D\u4E2D\u50F9\u53EA\u6709\u8F38\u5165\u50F9\u7684\u5341\u5206\u4E4B\u4E00\u5DE6\u53F3\u3002\u7CFB\u7D71\u63D0\u793A\u3001\u4EE3\u78BC\u5EAB\u3001\u9577\u6587\u6A94\u9019\u4E9B\u6BCF\u6B21\u90FD\u8981\u5E36\u4E0A\u7684\u5167\u5BB9\uFF0C\u653E\u9032\u7DE9\u5B58\u5F8C\u91CD\u5FA9\u8ABF\u7528\u7684\u6210\u672C\u6703\u5927\u5E45\u4E0B\u964D\u3002\u6CE8\u610F\u5404\u5BB6\u8A08\u8CBB\u65B9\u5F0F\u4E0D\u540C\uFF1A\u6709\u7684\u6536\u7DE9\u5B58\u5BEB\u5165\u8CBB\uFF0C\u6709\u7684\u6309\u7DE9\u5B58\u5B58\u5132\u6642\u9577\u6536\u8CBB"
      },
      routing: {
        title: "\u6309\u96E3\u5EA6\u5206\u6D41\uFF0C\u4E0D\u8981\u4E00\u500B\u6A21\u578B\u8DD1\u5230\u5E95",
        body: "\u628A\u7C21\u55AE\u4EFB\u52D9\uFF08\u5206\u985E\u3001\u62BD\u53D6\u3001\u683C\u5F0F\u5316\uFF09\u4EA4\u7D66\u4FBF\u5B9C\u6A94\uFF0C\u53EA\u628A\u771F\u6B63\u9700\u8981\u63A8\u7406\u7684\u6B65\u9A5F\u4EA4\u7D66\u65D7\u8266\u3002\u591A\u6578 Agent \u93C8\u8DEF\u88CF\uFF0C\u9700\u8981\u9802\u7D1A\u80FD\u529B\u7684\u6B65\u9A5F\u4E0D\u5230\u5169\u6210"
      },
      effort: {
        title: "\u8ABF\u4F4E\u63A8\u7406\u6A94\u4F4D",
        body: "\u540C\u4E00\u500B\u6A21\u578B\u7684 max \u8207 medium \u6A94\uFF0C\u50F9\u683C\u76F8\u540C\u4F46\u8F38\u51FA\u7684\u601D\u8003 token \u6578\u5DEE\u5F88\u591A\uFF0C\u9996\u5B57\u5EF6\u9072\u4E5F\u5DEE\u51FA\u5E7E\u5341\u79D2\u3002\u4E0D\u9700\u8981\u6DF1\u5EA6\u63A8\u7406\u7684\u4EFB\u52D9\u628A\u6A94\u4F4D\u8ABF\u4E0B\u4F86\uFF0C\u7701\u9322\u53C8\u8B8A\u5FEB"
      },
      batch: {
        title: "\u7528\u6279\u91CF\u63A5\u53E3\u548C\u7A7A\u9592\u6642\u6BB5",
        body: "\u591A\u5BB6\u5EE0\u5546\u7684\u6279\u91CF\u8ABF\u7528\u662F\u4E94\u6298\uFF0CDeepSeek \u9084\u6709\u7A7A\u9592\u6642\u6BB5\u534A\u50F9\u3002\u4E0D\u8D95\u6642\u9593\u7684\u96E2\u7DDA\u4EFB\u52D9\u653E\u9032\u6279\u91CF\u6216\u932F\u5CEF\u8DD1\uFF0C\u6210\u672C\u76F4\u63A5\u6E1B\u534A"
      },
      tiers: {
        title: "\u7576\u5FC3\u968E\u68AF\u50F9\u548C\u4FC3\u92B7\u50F9",
        body: "\u4E0D\u5C11\u6A21\u578B\u6309\u8F38\u5165\u9577\u5EA6\u5206\u6A94\uFF0C\u8D85\u904E\u95BE\u503C\u55AE\u50F9\u6703\u8DF3\u4E00\u5230\u5169\u500D\uFF1B\u4E5F\u6709\u6A21\u578B\u73FE\u5728\u7684\u4F4E\u50F9\u662F\u9650\u6642\u4FC3\u92B7\uFF0C\u5230\u671F\u6703\u7FFB\u500D\u3002\u505A\u9577\u671F\u6210\u672C\u4F30\u7B97\u6642\u8981\u6309\u5230\u671F\u5F8C\u7684\u50F9\u683C\u7B97"
      },
      tokenizer: {
        title: "\u5225\u96BB\u770B\u55AE\u50F9\uFF0C\u8981\u770B\u540C\u4E00\u6BB5\u6587\u672C\u5207\u51FA\u591A\u5C11 token",
        body: "\u4E0D\u540C\u5EE0\u5546\u7684\u5206\u8A5E\u5668\u4E0D\u540C\uFF0C\u540C\u6A23\u4E00\u6BB5\u4E2D\u6587\u5207\u51FA\u7684 token \u6578\u53EF\u80FD\u5DEE\u4E09\u6210\u3002\u55AE\u50F9\u4F4E\u4E0D\u7B49\u65BC\u7E3D\u82B1\u8CBB\u4F4E\uFF0C\u6700\u53EF\u9760\u7684\u8FA6\u6CD5\u662F\u62FF\u81EA\u5DF1\u7684\u771F\u5BE6\u8A9E\u6599\u5404\u8DD1\u4E00\u904D\u518D\u6BD4\u7E3D\u8CEC\u55AE"
      }
    }
  },
  gateways: {
    title: "AI \u4E2D\u8F49\u7AD9\u63A8\u85A6",
    seoTitle: "AI \u4E2D\u8F49\u7AD9\u63A8\u85A6 - \u5EF6\u9072\u3001\u5728\u7DDA\u7387\u8207\u55AE\u50F9\u5C0D\u6BD4",
    seoDescription: "\u5BE6\u6E2C\u570B\u5167\u53EF\u7528\u7684 AI API \u4E2D\u8F49\u5C08\u7DDA\uFF1A\u5EF6\u9072\u3001\u5728\u7DDA\u7387\u3001\u652F\u6301\u6A21\u578B\u8207\u55AE\u50F9\uFF0C\u9644 Cursor / Cline \u63A5\u5165\u914D\u7F6E"
  },
  savings: {
    title: "AI \u7B97\u529B\u7701\u9322\u6307\u5357",
    seoTitle: "AI \u7B97\u529B\u7701\u9322\u6307\u5357 - \u53EF\u559C AI",
    seoDescription: "\u6A21\u578B\u50F9\u683C\u3001\u4E2D\u8F49\u7AD9\u548C\u7DE8\u7A0B\u5957\u9910\u7684\u5C0D\u6BD4\uFF0C\u4EE5\u53CA\u6309\u7528\u91CF\u9078\u65B9\u6848\u7684\u8FA6\u6CD5",
    decisionBadge: "\u6211\u7684\u9078\u6CD5",
    decisionDesc: "\u9019\u662F\u6211\u81EA\u5DF1\u8E29\u5751\u6478\u7D22\u51FA\u4F86\u7684\u7D93\u9A57\uFF0C\u4E0D\u662F\u642C\u78DA\u5957\u516C\u5F0F",
    rule1Title: "\u5E73\u6642\u7528\u5F97\u5C11\uFF1A\u76F4\u63A5\u6309\u91CF\u8CB7 Token",
    rule1Desc: "\u5982\u679C\u4E0D\u662F\u5929\u5929\u9AD8\u5F37\u5EA6\u5BEB\u4EE3\u78BC\uFF0C$20-40 \u7684\u6708\u8CBB\u591A\u534A\u662F\u767D\u767D\u6D6A\u8CBB\u3002\u7528\u591A\u5C11\u6263\u591A\u5C11\uFF0C\u5E7E\u584A\u9322\u80FD\u7528\u597D\u4E45",
    rule2Title: "\u5929\u5929\u5BEB\u4EE3\u78BC\u91CD\u5EA6\u4F9D\u8CF4\uFF1A\u958B\u7DE8\u7A0B\u5957\u9910",
    rule2Desc: "\u6BCF\u5929\u5927\u91CF\u505A\u4EE3\u78BC\u88DC\u5168\u3001\u6574\u5EAB\u91CD\u69CB\u548C\u4E0A\u4E0B\u6587\u4FEE\u6539\uFF0CCursor\u3001Copilot \u9019\u7A2E\u5305\u6708\u5957\u9910\u7B97\u4E0B\u4F86\u624D\u771F\u5212\u7B97",
    rule3Title: "\u8DD1\u6279\u91CF\u6216\u65E5\u5E38\u5C0F\u6D3B\uFF1A\u512A\u5148\u4FBF\u5B9C\u6A21\u578B",
    rule3Desc: "\u5207\u5716\u3001\u5BEB CRUD\u3001\u9577\u6587\u672C\u6B78\u7D0D\uFF0C\u5148\u62FF\u5E7E\u6BDB\u9322\u7684\u570B\u7522\u6216\u8F15\u91CF\u6A21\u578B\u8DD1\uFF0C\u641E\u5F97\u5B9A\u5C31\u5225\u6D6A\u8CBB\u9322\u4E0A\u5927\u65D7\u8266",
    modelsSectionTitle: "\u6A21\u578B\u80FD\u529B\u8207\u50F9\u683C",
    modelsSectionNote: "\u6309\u6027\u50F9\u6BD4\uFF08\u7D9C\u5408\u5206 \xF7 \u6DF7\u5408\u50F9\uFF09\u6392\u524D\u56DB\uFF0C\u7D9C\u5408\u5206\u53D6\u81EA Artificial Analysis",
    viewAllModels: "\u5B8C\u6574\u699C\u55AE",
    gatewaysSectionTitle: "\u4E2D\u8F49\u7AD9",
    gatewaysSectionNote: "\u5EF6\u9072\u3001\u5728\u7DDA\u7387\u548C\u55AE\u50F9",
    viewAllGateways: "\u5168\u90E8\u4E2D\u8F49\u7AD9",
    plansSectionTitle: "\u7DE8\u7A0B\u5957\u9910",
    plansSectionNote: "\u984D\u5EA6\u3001\u652F\u6301\u7684\u6A21\u578B\u548C\u9650\u5236",
    viewAllPlans: "\u5168\u90E8\u5957\u9910",
    switchCardTitle: "\u9AD8\u50F9\u6A21\u578B\u5E73\u66FF\u7B97\u76E4",
    switchCardDesc: "\u8F38\u5165\u4F60\u60F3\u7528\u7684\u6602\u8CB4\u6A21\u578B\uFF0C\u7ACB\u523B\u627E\u51FA\u80FD\u529B\u63A5\u8FD1\u4F46\u50F9\u683C\u50C5\u9700 1/10 \u7684\u5E73\u66FF\u7D44\u5408",
    changesCardTitle: "\u5EE0\u5546\u8ABF\u50F9\u8FFD\u8E64\u6D41\u6C34",
    changesCardDesc: "\u5BE6\u6642\u8FFD\u8E64\u5404\u5927\u5EE0\u5546\u964D\u50F9\u7BC0\u594F\u8207\u4FC3\u92B7\u52D5\u614B\uFF0C\u7B2C\u4E00\u6642\u9593\u4EAB\u53D7\u7B97\u529B\u7D05\u5229"
  },
  readiness: {
    title: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6E2C\u8A55",
    subtitle: "\u6E2C\u6E2C\u4F60\u9069\u4E0D\u9069\u5408\u55AE\u5E79\uFF1A12 \u9053\u5BE6\u6230\u96E3\u984C\uFF0C\u770B\u770B\u4F60\u5728\u5BEB\u4EE3\u78BC\u3001\u5546\u696D\u641E\u9322\u9084\u662F\u5FC3\u614B\u4E0A\u6700\u5BB9\u6613\u683D\u8DDF\u982D",
    seoTitle: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6E2C\u8A55 \xB7 \u6E2C\u6E2C\u4F60\u9069\u4E0D\u9069\u5408\u55AE\u5E79",
    seoDescription: "\u9762\u5411\u7A0B\u5E8F\u54E1\u3001\u7522\u54C1\u7D93\u7406\u7B49 IT \u540C\u884C\uFF1A12 \u9053\u5BE6\u6230\u60C5\u666F\u984C\uFF0C\u770B\u4F60\u5728\u505A\u7522\u54C1\u3001\u5546\u696D\u8B8A\u73FE\u3001\u6D41\u91CF\u7372\u5BA2\u3001\u7B97\u529B\u6210\u672C\u548C\u6297\u632B\u5FC3\u614B\u4E0A\u7684\u771F\u5BE6\u77ED\u677F",
    authorName: "\u53EF\u6A02",
    authorInitial: "\u559C",
    testedCount: "{count} \u4EBA\u5DF2\u6E2C",
    badgeMeta: "12 \u9053\u60C5\u666F\u984C \xB7 \u7D04 3 \u5206\u9418",
    testedShort: "{count} \u4EBA\u5DF2\u6E2C",
    chooseRole: "\u9078\u64C7\u4F60\u7684\u5D17\u4F4D",
    whyTitle: "\u70BA\u4EC0\u9EBC\u6309\u5D17\u4F4D\u51FA\u984C\uFF0C\u800C\u4E0D\u6E2C\u6027\u683C",
    whyP1: "\u5F88\u591A\u5275\u696D\u6E2C\u8A55\u554F\u7684\u662F\u300C\u4F60\u6709\u6C92\u6709\u9818\u5C0E\u529B\u300D\u300C\u8010\u4E0D\u8010\u5F97\u4F4F\u5BC2\u5BDE\u300D\uFF0C\u9019\u7A2E\u984C\u8AB0\u90FD\u6703\u5F80\u597D\u88CF\u9078\u3002\u6211\u66F4\u5728\u610F\u7684\u662F\uFF1A\u4F60\u5F9E\u4EC0\u9EBC\u5D17\u4F4D\u51FA\u4F86\uFF0C\u5C31\u5BB9\u6613\u5E36\u7740\u4EC0\u9EBC\u7FD2\u6163\u3002",
    whyP2Prefix: "\u4E0B\u9762\u662F",
    whyP2Suffix: "\u7684 12 \u9053\u984C\u3002\u6E2C\u5B8C\u6703\u7D66\u4F60\u4E00\u5F35\u4E94\u7DAD\u96F7\u9054\u5716\uFF0C\u4EE5\u53CA\u91DD\u5C0D\u6700\u5F31\u4E00\u9805\u7684 7 \u5929\u884C\u52D5\u6E05\u55AE\u3002",
    resumeBtn: "\u7E7C\u7E8C {role} \u9032\u5EA6 (\u5DF2\u7B54 {answered} / {total} \u984C)",
    restartBtn: "\u91CD\u65B0\u958B\u59CB",
    startBtn: "\u958B\u59CB {role} \u6E2C\u8A55",
    dimensionsTitle: "\u6E2C\u8A55\u770B\u7684\u4E94\u500B\u65B9\u9762",
    currentRole: "\u7576\u524D\u5D17\u4F4D\uFF1A",
    switchRole: "\u5207\u63DB\u5D17\u4F4D",
    progressLabel: "\u6E2C\u8A55\u9032\u5EA6\uFF1A\u7B2C {current} / {total} \u984C",
    jumpTip: "\u8DF3\u8F49\u5230\u7B2C {index} \u984C",
    questionIndex: "\u7B2C {current} / {total} \u984C",
    focusLabel: "\u8003\u5BDF\uFF1A",
    realFeedback: "\u771F\u5BE6\u53CD\u994B\uFF1A",
    prevBtn: "\u4E0A\u4E00\u984C",
    nextBtn: "\u4E0B\u4E00\u984C",
    viewReport: "\u67E5\u770B\u5B8C\u6574\u8A3A\u65B7\u5831\u544A",
    radarLabel: "\u4E00\u4EBA\u516C\u53F8\u4E94\u7DAD\u80FD\u529B\u96F7\u9054\u5716",
    percentilePrefix: "\u9AD8\u65BC",
    percentileSuffix: "% \u7684\u540C\u5D17\u4F4D\u6E2C\u8A55\u8005",
    adviceLabel: "\u53EF\u6A02\u7684\u63D0\u9192\uFF1A",
    dimensionsHeading: "\u4E94\u500B\u7DAD\u5EA6",
    fullScoreNote: "100 \u5206\u6EFF\u5206\u5236",
    scoreValue: "{score} \u5206",
    archetypeHeading: "\u4F60\u662F\u54EA\u4E00\u985E",
    prosLabel: "\u4F60\u7684\u512A\u52E2\uFF1A",
    consLabel: "\u5BB9\u6613\u8E29\u7684\u5751\uFF1A",
    warningHeading: "\u9700\u8981\u7576\u5FC3",
    strongestLabel: "\u6700\u5F37\u7684\u4E00\u9805",
    weakestLabel: "\u6700\u5F31\u7684\u4E00\u9805",
    roleSpecific: "{role}\u5C08\u9805",
    hazardHeading: "\u9019\u500B\u5D17\u4F4D\u5E38\u898B\u7684\u7FD2\u6163",
    prescriptionHeading: "\u600E\u9EBC\u6539",
    blindspotHeading: "\u6700\u5F31\u4E00\u9805 \xB7 7 \u5929\u884C\u52D5\u6E05\u55AE",
    blindspotIntro: "\u91DD\u5C0D\u4F60\u5F97\u5206\u6700\u4F4E\u7684\u7DAD\u5EA6\uFF1A",
    causeLabel: "\u539F\u56E0\uFF1A",
    nextSevenDays: "\u63A5\u4E0B\u4F86 7 \u5929\u53EF\u4EE5\u505A\u7684\u4E8B",
    arsenalHeading: "\u91DD\u5C0D\u77ED\u677F\u7684\u81EA\u7528\u5175\u5668\u8207\u6307\u5357\uFF1A",
    communityBadge: "\u627E\u53EF\u6A02\u804A\u804A",
    communityTitle: "\u60F3\u548C\u5176\u4ED6{role}\u804A\u804A\u4E00\u4EBA\u516C\u53F8\uFF1F",
    communityDesc: "\u52A0\u6211\u5FAE\u4FE1\uFF0C\u62C9\u4F60\u9032\u4E00\u4EBA\u516C\u53F8\u7FA3\u3002",
    communityBtn: "\u52A0\u53EF\u6A02\u5FAE\u4FE1 / \u9032\u7FA3",
    restartOther: "\u63DB\u500B\u5D17\u4F4D\u91CD\u65B0\u6E2C\u4E00\u6B21",
    copyBtn: "\u8907\u88FD\u6E2C\u8A55\u7D50\u679C",
    copiedBtn: "\u5DF2\u8907\u88FD",
    toolboxBtn: "\u5DE5\u5177\u7BB1",
    copyHeader: "\u3010\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6E2C\u8A55 \xB7 hoxi.ai\u3011",
    copyRole: "\u5D17\u4F4D\u80CC\u666F\uFF1A{role}",
    copyScore: "\u7D9C\u5408\u5F97\u5206\uFF1A{score} \u5206 \xB7 {tier}",
    copyPercentile: "\u540C\u5D17\u4F4D\u6392\u540D\uFF1A\u9AD8\u65BC {percentile}% \u7684\u6E2C\u8A55\u8005",
    copyArchetype: "\u539F\u578B\u756B\u50CF\uFF1A{name}\uFF08{tagline}\uFF09",
    copyDivider: "--------------------------",
    copyDimensionsTitle: "\u4E94\u7DAD\u80FD\u529B\u5206\u4F48\uFF1A",
    copyDimension: "\u2022 {name}\uFF1A{score}\u5206",
    copyStrongest: "\u6700\u5F37\u512A\u52E2\uFF1A{name}",
    copyWeakest: "\u6700\u5F31\u7684\u4E00\u9805\uFF1A{name}",
    copyAdvice: "\u53EF\u6A02\u53EE\u56D1\uFF1A{advice}",
    copyUrl: "\u6E2C\u8A55\u5730\u5740\uFF1Ahttps://hoxi.ai/readiness"
  },
  projects: {
    title: "\u5BE6\u6230\u9805\u76EE",
    subtitle: "\u6211\u4E00\u500B\u4EBA\u7D50\u5408 AI \u7368\u7ACB\u958B\u767C\u4E26\u6301\u7E8C\u7DAD\u8B77\u7684\u7522\u54C1\u77E9\u9663",
    seoTitle: "AI \u5BE6\u6230\u9805\u76EE - \u4E00\u4EBA\u516C\u53F8\u771F\u5BE6\u7522\u54C1\u843D\u5730",
    seoDescription: "\u53EF\u6A02\u7368\u7ACB\u7814\u767C\u4E26\u904B\u71DF\u7684 AI \u7522\u54C1\u77E9\u9663\uFF1AHoxi Desktop\u3001\u53EF\u559C AI\u3001\u8F15\u92EA AI \u8207 apay \u6846\u67B6",
    badge: "PROJECTS",
    highlightsLabel: "\u6838\u5FC3\u4EAE\u9EDE",
    internalUse: "\u5167\u90E8\u81EA\u7528\u5E95\u5EA7",
    recommendBtn: "\u4EA4\u6D41\u9805\u76EE",
    recommendTip: "\u76EE\u524D\u5C55\u793A\u6211\u81EA\u5DF1\u7684\u9805\u76EE\u3002\u4F60\u4E5F\u5728\u505A\u7368\u7ACB\u7522\u54C1\u7684\u8A71\uFF0C\u6B61\u8FCE\u4EA4\u6D41",
    feedbackTitle: "\u5411\u7AD9\u9577\u53CD\u994B / \u63D0\u9700\u6C42",
    feedbackDesc: "\u4F60\u5C0D\u8A72\u9805\u76EE\u6709\u4EFB\u4F55\u529F\u80FD\u5EFA\u8B70\u3001\u5408\u4F5C\u610F\u5411\u6216\u4F7F\u7528\u7591\u60D1\uFF0C\u6B61\u8FCE\u76F4\u63A5\u544A\u8A34\u6211",
    feedbackPlaceholder: "\u5BEB\u4E0B\u4F60\u7684\u5EFA\u8B70\u6216\u60F3\u6E9D\u901A\u7684\u5167\u5BB9...",
    submitFeedback: "\u767C\u9001\u53CD\u994B",
    contactAuthor: "\u8207\u4F5C\u8005\u4EA4\u6D41",
    viewSite: "\u8A2A\u554F\u5B98\u7DB2",
    viewGithub: "GitHub",
    viewStory: "\u95DC\u65BC",
    modelUsed: "\u6838\u5FC3\u6A21\u578B",
    monthlyCost: "\u7B97\u529B\u8CEC\u672C",
    techStack: "\u6280\u8853\u68E7",
    author: "\u5275\u4F5C\u8005",
    emptyTitle: "\u66AB\u7121\u9805\u76EE",
    emptyDesc: "\u9019\u500B\u5206\u985E\u4E0B\u9084\u6C92\u6709\u9805\u76EE"
  },
  comment: {
    title: "\u8A0E\u8AD6\u8207\u53CD\u994B",
    subtitle: "\u6B61\u8FCE\u4EA4\u6D41\u4F7F\u7528\u5FC3\u5F97\u3001\u5834\u666F\u5BE6\u6E2C\u8207\u9078\u578B\u5EFA\u8B70",
    placeholder: "\u6B61\u8FCE\u7559\u4E0B\u4F60\u7684\u770B\u6CD5...",
    authorPlaceholder: "\u4F60\u7684\u66B1\u7A31 *",
    emailPlaceholder: "\u90F5\u7BB1\uFF08\u9078\u586B\uFF0C\u7528\u65BC\u5C55\u793A\u982D\u50CF\uFF09",
    urlPlaceholder: "\u7DB2\u7AD9\u6216 GitHub \u4E3B\u9801\uFF08\u9078\u586B\uFF09",
    loginWithGithub: "\u7528 GitHub \u767B\u9304",
    submit: "\u767C\u8868\u8A55\u8AD6",
    submitting: "\u63D0\u4EA4\u4E2D...",
    reply: "\u56DE\u8986",
    cancel: "\u53D6\u6D88",
    replyTo: "\u56DE\u8986 {name}",
    empty: "\u66AB\u7121\u8A55\u8AD6\uFF0C\u4F86\u767C\u8868\u7B2C\u4E00\u689D\u770B\u6CD5\u5427",
    success: "\u8A55\u8AD6\u767C\u8868\u6210\u529F",
    pendingNotice: "\u8A55\u8AD6\u5DF2\u63D0\u4EA4\uFF0C\u5F85\u7BA1\u7406\u54E1\u5BE9\u6838\u901A\u904E\u5F8C\u5C07\u516C\u958B\u986F\u793A",
    underReview: "\u5BE9\u6838\u4E2D",
    loginAs: "\u5DF2\u767B\u9304\uFF1A{name}",
    requireNickname: "\u8ACB\u586B\u5BEB\u4F60\u7684\u66B1\u7A31",
    v2exDiscussion: "\u4F86\u81EA V2EX \u793E\u5340\u8A0E\u8AD6\uFF0C\u9EDE\u64CA\u67E5\u770B\u539F\u5E16",
    linuxdoDiscussion: "\u4F86\u81EA LINUX DO \u793E\u5340\u8A0E\u8AD6\uFF0C\u9EDE\u64CA\u67E5\u770B\u539F\u5E16",
    viewOriginal: "\u539F\u8A0E\u8AD6"
  },
  blog: {
    notFound: "\u6587\u7AE0\u4E0D\u5B58\u5728",
    notFoundDesc: "\u8A72\u6587\u7AE0\u53EF\u80FD\u5DF2\u88AB\u79FB\u9664\u6216\u5730\u5740\u6709\u8AA4",
    returnBlog: "\u8FD4\u56DE\u535A\u5BA2\u5217\u8868"
  },
  layout: {
    communityBtn: "\u806F\u7E6B",
    communityShort: "\u806F\u7E6B",
    userMenu: "\u8CEC\u865F\u8207\u806F\u7E6B\u83DC\u55AE",
    githubTitle: "GitHub \u5009\u5EAB",
    toggleTheme: "\u5207\u63DB\u914D\u8272\u6A21\u5F0F",
    switchLang: "\u5207\u63DB\u8A9E\u8A00",
    expandSavingsMenu: "\u5C55\u958B\u7701\u9322\u83DC\u55AE"
  },
  contactModal: {
    badge: "\u806F\u7E6B\u4F5C\u8005\u8207\u6280\u8853\u4EA4\u6D41",
    title: "\u806F\u7E6B\u8207\u4EA4\u6D41",
    subtitle: "\u6DFB\u52A0\u500B\u4EBA\u5FAE\u4FE1\u3001\u767C\u9001\u90F5\u4EF6\uFF0C\u6216\u95DC\u6CE8\u516C\u773E\u865F\u7372\u53D6\u6DF1\u5EA6\u6280\u8853\u8986\u76E4",
    wechatTitle: "\u5FAE\u4FE1\u8207\u4EA4\u6D41\u7FA3",
    wechatBadge: "\u76F4\u806F / \u9032\u7FA3",
    wechatIdLabel: "\u5FAE\u4FE1\uFF1A",
    copyWechat: "\u8907\u88FD\u5FAE\u4FE1",
    copied: "\u5DF2\u8907\u88FD",
    emailLabel: "\u90F5\u7BB1\uFF1A",
    copyEmail: "\u8907\u88FD\u90F5\u7BB1",
    tip1: "\u52A0\u597D\u53CB\u5099\u8A3B\u3010\u53EF\u559C\u3011\uFF0C\u53EF\u9080\u8ACB\u9032\u5165\u4E00\u4EBA\u516C\u53F8\u4EA4\u6D41\u7FA3",
    tip2: "\u4EA4\u6D41 AI \u7DE8\u7A0B\u3001\u7368\u7ACB\u7522\u54C1\u7814\u767C\u3001\u51FA\u6D77\u8207\u7B97\u529B\u9078\u578B",
    tip3: "\u7D14\u7CB9\u6280\u8853\u8207\u5BE6\u6230\u4EA4\u6D41\uFF0C\u7121\u5EE3\u544A\u6253\u64FE",
    oaTitle: "\u5FAE\u4FE1\u516C\u773E\u865F",
    oaBadge: "\u6DF1\u5EA6\u9577\u6587",
    oaScanTitle: "\u95DC\u6CE8\u3010\u53EF\u559CAI\u3011",
    oaScanDesc: "\u5FAE\u4FE1\u6383\u78BC\uFF0C\u8FFD\u8E64\u5927\u6A21\u578B\u5BE6\u6E2C\u6578\u64DA\u8207\u4E00\u4EBA\u516C\u53F8\u5BE6\u6230\u9577\u6587",
    oaScanNote: "\u5F8C\u53F0\u56DE\u8986\u3010\u9032\u7FA3\u3011\u4EA6\u53EF\u7372\u53D6\u4EA4\u6D41\u7FA3\u5165\u53E3",
    oaFooter: "\u5B9A\u671F\u8986\u76E4\u7368\u7ACB\u7522\u54C1\u771F\u5BE6\u6578\u64DA\u8207\u5DE5\u7A0B\u5BE6\u8E10",
    footerLeft: "\u76F4\u63A5\u6E9D\u901A \xB7 \u7D14\u7CB9\u4EA4\u6D41",
    closeLabel: "\u95DC\u9589",
    tabInquiry: "\u5728\u7DDA\u7559\u8A00\u8AEE\u8A62",
    tabHistory: "\u6211\u7684\u8AEE\u8A62\u8A18\u9304",
    tabDirect: "\u5FAE\u4FE1\u8207\u793E\u7FA3\u76F4\u806F",
    catPresales: "\u552E\u524D\u8207\u7522\u54C1\u8AEE\u8A62",
    catCooperation: "\u5546\u52D9\u8207\u5B9A\u88FD\u5408\u4F5C",
    catFeedback: "\u5DE5\u5177\u6536\u9304\u8207\u5EFA\u8B70",
    catTechnical: "\u6280\u8853\u8207\u8CEC\u865F\u6392\u969C",
    nameLabel: "\u60A8\u7684\u7A31\u547C",
    namePlaceholder: "\u4F8B\u5982\uFF1AAlex / \u67D0\u7368\u7ACB\u958B\u767C\u8005",
    contactEmailLabel: "\u806F\u7E6B\u90F5\u7BB1",
    contactEmailPlaceholder: "\u63A5\u6536\u56DE\u8986\u901A\u77E5\u7684\u90F5\u7BB1\uFF08\u63A8\u85A6\u586B\u5BEB\uFF09",
    contactInfoLabel: "\u5FAE\u4FE1\u865F / \u5176\u4ED6\u806F\u7E6B\u65B9\u5F0F",
    contactInfoPlaceholder: "\u9078\u586B\uFF0C\u4F8B\u5982\u5FAE\u4FE1\u865F\u3001Telegram \u7B49",
    contentLabel: "\u8AEE\u8A62\u6216\u7559\u8A00\u5167\u5BB9",
    contentPlaceholder: "\u8ACB\u63CF\u8FF0\u60A8\u7684\u5177\u9AD4\u8A34\u6C42\u3001\u5408\u4F5C\u8A2D\u60F3\u6216\u9047\u5230\u7684\u554F\u984C\uFF0C\u7AD9\u9577\u6536\u5230\u5F8C\u5C07\u7B2C\u4E00\u6642\u9593\u56DE\u8986\u4E26\u90F5\u4EF6\u901A\u77E5\u60A8...",
    submitBtn: "\u63D0\u4EA4\u7559\u8A00\u8AEE\u8A62",
    submittingBtn: "\u63D0\u4EA4\u4E2D...",
    submitSuccessTitle: "\u7559\u8A00\u5DF2\u63D0\u4EA4\uFF01",
    submitSuccessDesc: "\u60A8\u7684\u8AEE\u8A62\u55AE\u865F\u70BA {ticketNo}\u3002\u5F8C\u53F0\u56DE\u8986\u5F8C\u6703\u81EA\u52D5\u767C\u9001\u90F5\u4EF6\u901A\u77E5\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u96A8\u6642\u5728\u6B64\u67E5\u770B\u9032\u5EA6\u4E26\u7E7C\u7E8C\u5C0D\u8A71\u3002",
    viewThreadBtn: "\u67E5\u770B\u5C0D\u8A71\u9032\u5EA6",
    newInquiryBtn: "\u767C\u8D77\u65B0\u8AEE\u8A62",
    emptyHistory: "\u66AB\u7121\u672C\u5730\u8AEE\u8A62\u8A18\u9304",
    emptyHistoryHint: "\u63D0\u4EA4\u7559\u8A00\u5F8C\uFF0C\u60A8\u7684\u8AEE\u8A62\u55AE\u6703\u81EA\u52D5\u4FDD\u5B58\u5728\u7576\u524D\u700F\u89BD\u5668\u6216\u7D81\u5B9A\u81F3\u60A8\u7684\u767B\u9304\u8CEC\u865F\u3002",
    lookupPlaceholder: "\u8F38\u5165\u8AEE\u8A62\u55AE\u865F (\u5982 TK-20261025-1234)",
    backToList: "\u8FD4\u56DE\u5217\u8868",
    replyPlaceholder: "\u8F38\u5165\u88DC\u5145\u8AAC\u660E\u6216\u7E7C\u7E8C\u8FFD\u554F...",
    sendReplyBtn: "\u767C\u9001\u56DE\u8986",
    sendingReplyBtn: "\u767C\u9001\u4E2D...",
    statusOpen: "\u5F85\u56DE\u8986",
    statusInProgress: "\u8DDF\u9032\u4E2D",
    statusAutoResolved: "\u667A\u80FD\u89E3\u7B54",
    statusResolved: "\u5DF2\u56DE\u8986",
    statusClosed: "\u5DF2\u5B8C\u7D50",
    senderUser: "\u6211",
    senderAdmin: "\u53EF\u6A02 (\u7AD9\u9577)",
    senderBot: "\u667A\u80FD\u52A9\u624B",
    senderSystem: "\u7CFB\u7D71\u901A\u77E5"
  },
  homeCta: {
    downloadMac: "\u4E0B\u8F09 Hoxi \u684C\u9762\u7AEF (macOS)",
    leaderboard: "\u5927\u6A21\u578B\u6230\u529B\u699C",
    savings: "\u7B97\u529B\u964D\u672C\u5C0D\u6BD4",
    readiness: "\u9032\u5165\u80FD\u529B\u9AD4\u6AA2",
    blog: "\u5BE6\u6230\u535A\u5BA2\u5FC3\u5F97",
    endorsement: "\u539F\u751F Wails + OpenCode \u5167\u6838 \xB7 Git Worktree \u6C99\u7BB1\u9694\u96E2"
  },
  desktop: {
    downloadMacArm64: "\u4E0B\u8F09 macOS \u7248 (Apple Silicon)",
    downloadWindows: "\u4E0B\u8F09 Windows \u7248 (x64)",
    downloadLinux: "\u4E0B\u8F09 Linux \u7248 (x64)",
    downloadDefault: "\u4E0B\u8F09 Hoxi \u684C\u9762\u7AEF",
    platformMac: "macOS (Apple Silicon)",
    platformWindows: "Windows (x64)",
    platformLinux: "Linux (x64)",
    osMac: "macOS",
    osWindows: "Windows",
    osLinux: "Linux",
    morePlatforms: "\u5176\u4ED6\u5E73\u53F0\u5B89\u88DD\u5305",
    mirrorGlobal: "GitHub Releases",
    sourceCode: "GitHub \u6E90\u78BC",
    archBadge: "WORKSPACE",
    archTitle: "\u4E09\u6B04\u539F\u751F\u5DE5\u4F5C\u53F0",
    archSubtitle: "\u5DE6\u6B04\u7BA1\u5206\u652F\uFF0C\u4E2D\u6B04\u7BA1\u5C0D\u8A71\u8207\u7CFE\u504F\uFF0C\u53F3\u6B04\u5BE9\u4EE3\u78BC\u8207\u7D42\u7AEF",
    mockLeftTitle: "\u5206\u652F\u8207\u6703\u8A71",
    mockCenterTitle: "\u5BE6\u6642\u6642\u9593\u7DDA \xB7 \u96A8\u6642\u7CFE\u504F",
    mockRightTitle: "DIFF \xB7 \u8A18\u61B6 \xB7 \u7D42\u7AEF",
    mockStatusBusy: "\u904B\u884C\u4E2D",
    mockSteerHint: "\u96A8\u6642\u8F38\u5165\u7CFE\u504F\u6307\u4EE4\uFF0C\u6216\u6309 Esc \u4E2D\u6B62...",
    mockGateTitle: "\u5B89\u5168\u6514\u622A \xB7 \u9700\u78BA\u8A8D",
    mockMergeBtn: "\u4E00\u9375\u5408\u4F75",
    soloBannerBadge: "SOLO BUILDER",
    soloBannerTitle: "\u6B63\u5728\u4E00\u500B\u4EBA\u505A\u7368\u7ACB\u7522\u54C1\uFF1F",
    soloBannerDesc: "\u4E94\u7DAD\u80FD\u529B\u6E2C\u8A55\u3001\u7B97\u529B\u964D\u672C\u8CEC\u672C\u3001\u51FA\u6D77\u5DE5\u5177\u7BB1\u8207\u5BE6\u6230\u8986\u76E4",
    soloBannerCta: "\u9032\u5165\u4E00\u4EBA\u516C\u53F8\u9580\u6237 \u2192",
    bentoDesktopTitle: "Hoxi Desktop",
    bentoDesktopDesc: "\u591A\u500B Agent \u4E26\u884C\u5BEB\u4EE3\u78BC\uFF0C\u6BCF\u500B\u6703\u8A71\u7368\u4F54\u7368\u7ACB Git Worktree\uFF0C\u4E92\u4E0D\u5E72\u64FE\u3002",
    bentoArchNote: "\u539F\u751F\u652F\u6301 macOS (Apple Silicon), Windows (x64), Linux (x64) \xB7 \u5167\u7F6E OpenCode \u904B\u884C\u6642",
    bentoCliTitle: "\u591A CLI \u96A8\u6642\u63A5\u529B",
    bentoCliDesc: "\u5167\u7F6E OpenCode\uFF0C\u4E00\u9375\u5207\u63DB Claude Code / Codex / Gemini",
    bentoMobileTitle: "\u624B\u6A5F\u9060\u7A0B\u5354\u540C\u8207\u5BE9\u6279",
    bentoMobileBadge: "\u5373\u5C07\u4E0A\u7DDA",
    bentoMobileDesc: "\u6383\u78BC\u914D\u5C0D\u684C\u9762\u7AEF\uFF0C\u96E2\u958B\u5DE5\u4F4D\u4E5F\u80FD\u7528\u624B\u6A5F\u5BE9 Diff\u3001\u6279\u9AD8\u5371\u547D\u4EE4\u3001\u8A9E\u97F3\u4E0B\u6307\u4EE4",
    bentoModelTitle: "50+ \u6A21\u578B\u8207\u512A\u60E0\u5C08\u7DDA",
    bentoModelDesc: "\u5BE6\u6E2C\u8DD1\u5206\u8207\u771F\u5BE6\u5E95\u50F9\uFF0C\u4E00\u9375\u76F4\u9023\u4E2D\u8F49\u7AD9\u6216\u4F7F\u7528\u81EA\u6709 Key",
    bentoOpenTitle: "100% \u958B\u6E90\u900F\u660E",
    bentoOpenDesc: "\u4EE3\u78BC\u8207\u5BC6\u9470\u5B8C\u5168\u7559\u5728\u672C\u5730\uFF0C\u96F6\u9ED1\u76D2\u3001\u96F6\u96B1\u5F62\u52A0\u50F9",
    pillarsBadge: "BUILT DIFFERENTLY",
    pillarsTitle: "\u70BA\u4F60\u6253\u5DE5\uFF0C\u800C\u4E0D\u662F\u628A\u4F60\u9396\u9032\u9ED1\u76D2",
    pillarsSub: "\u591A\u5206\u652F\u4E26\u884C\u3001\u50F9\u683C\u900F\u660E\u3001\u684C\u9762\u8207\u624B\u6A5F\u5168\u93C8\u8DEF\u53EF\u63A7",
    p1Tag: "\u4E26\u884C\u958B\u767C",
    p1Title: "\u4E00\u500B\u7A97\u53E3\uFF0C\u591A\u500B Agent \u4E26\u884C",
    p1Desc: "\u6BCF\u500B\u6703\u8A71\u7368\u7ACB Git Worktree \u6C99\u7BB1\uFF0C\u540C\u6642\u6539\u591A\u500B\u529F\u80FD\u4E5F\u4E0D\u885D\u7A81\uFF0C\u5BEB\u5B8C\u4E00\u9375 Diff \u5408\u4F75\u3002",
    p2Tag: "\u7B97\u529B\u81EA\u7531",
    p2Title: "\u5E95\u50F9\u7528\u6A21\u578B\uFF0C\u7D55\u4E0D\u6346\u7D81\u62BD\u6210",
    p2Desc: "\u81EA\u5E36\u4EFB\u610F API Key \u96F6\u8CBB\u7528\uFF1B\u6216\u4E00\u9375\u63A5\u5165\u5BE6\u6E2C\u512A\u9078\u5C08\u7DDA\uFF0C\u7B97\u529B\u6210\u672C\u7ACB\u7701 35%~60%\u3002",
    p3Tag: "\u96D9\u7AEF\u53EF\u63A7",
    p3Title: "\u9577\u6548\u8A18\u61B6\uFF0C\u96E2\u5E2D\u624B\u6A5F\u4E5F\u80FD\u6279\u6B0A\u9650",
    p3Desc: "\u672C\u5730 Markdown \u6C89\u6FB1\u67B6\u69CB\u8A18\u61B6\uFF1B\u9AD8\u5371\u547D\u4EE4\u5FC5\u7D93 PreToolUse \u9580\u63A7\uFF0C\u4EBA\u4E0D\u5728\u96FB\u8166\u524D\u53EF\u7528\u624B\u6A5F\u9060\u7A0B\u5BE9\u6279\u3002",
    tabWorktree: "01 \xB7 \u4E26\u884C\u5206\u652F",
    tabMemory: "02 \xB7 \u9805\u76EE\u8A18\u61B6",
    tabSteer: "03 \xB7 \u5BE6\u6642\u7CFE\u504F",
    tabHandoff: "04 \xB7 CLI \u63A5\u529B",
    tabMobile: "05 \xB7 \u624B\u6A5F\u5354\u540C",
    faqBadge: "FAQ",
    faqTitle: "\u5E38\u898B\u554F\u984C",
    faqSub: "\u95DC\u65BC\u67B6\u69CB\u3001\u8A08\u8CBB\u8207\u96B1\u79C1\u7684\u5FEB\u901F\u89E3\u7B54",
    faq1Q: "Hoxi Desktop \u662F\u4EC0\u9EBC\uFF1F\u548C OpenCode \u662F\u4EC0\u9EBC\u95DC\u4FC2\uFF1F",
    faq1A: "Hoxi \u662F\u57FA\u65BC Wails v2 \u69CB\u5EFA\u7684 macOS \u539F\u751F AI \u7814\u767C\u5DE5\u4F5C\u53F0\u3002\u5E95\u5C64\u76F4\u63A5\u76E3\u7BA1\u5B98\u65B9 OpenCode \u5F15\u64CE\uFF0C\u4E26\u64F4\u5C55\u4E86\u591A\u5206\u652F Worktree \u9694\u96E2\u3001\u8DE8\u6703\u8A71\u8A18\u61B6\u3001CLI \u4E00\u9375\u63A5\u529B\u8207\u6A21\u578B\u699C\u55AE\u3002",
    faq2Q: "\u70BA\u4EC0\u9EBC\u6BCF\u500B\u6703\u8A71\u8981\u7528 Git Worktree \u9694\u96E2\uFF1F",
    faq2A: "\u907F\u514D\u591A\u500B AI \u540C\u6642\u6539\u4EE3\u78BC\u7522\u751F\u885D\u7A81\u3002\u6BCF\u500B\u6703\u8A71\u5728\u7368\u7ACB\u5DE5\u4F5C\u6A39\u4E2D\u904B\u884C\uFF0C\u5BE9\u67E5\u7121\u8AA4\u5F8C\u53EF\u4E00\u9375\u5408\u4F75\u56DE\u4E3B\u5206\u652F\u3002",
    faq3Q: "\u600E\u9EBC\u8A08\u8CBB\uFF1F\u53EF\u4EE5\u7528\u81EA\u5DF1\u7684 API Key \u55CE\uFF1F",
    faq3A: "\u8EDF\u4EF6\u672C\u8EAB 100% \u514D\u8CBB\u958B\u6E90\u3002\u4F60\u53EF\u4EE5\u514D\u8CBB\u586B\u5165\u81EA\u5DF1\u7684\u5B98\u65B9 API Key\uFF0C\u4E5F\u53EF\u4EE5\u4E00\u9375\u63A5\u5165\u512A\u9078\u9AD8\u901F\u4E2D\u8F49\u5C08\u7DDA\uFF08\u7701 35%~60%\uFF09\u3002",
    faq4Q: "\u4EE3\u78BC\u548C\u5BC6\u9470\u5B89\u5168\u55CE\uFF1F",
    faq4A: "\u6240\u6709\u4EE3\u78BC\u3001\u8A18\u61B6\u6587\u4EF6\u8207\u5BC6\u9470\u5747\u4FDD\u5B58\u5728\u672C\u5730\u8A2D\u5099\u3002\u6D89\u53CA rm\u3001sudo\u3001\u5F37\u63A8\u7B49\u5371\u96AA\u7D42\u7AEF\u547D\u4EE4\u6703\u5F37\u5236\u6514\u622A\u4E26\u5F48\u7A97\u78BA\u8A8D\u3002",
    faq5Q: "\u624B\u6A5F\u7AEF\uFF08iOS / Android\uFF09\u600E\u9EBC\u9023\u96FB\u8166\uFF1F\u4EE3\u78BC\u6703\u7D93\u904E\u7B2C\u4E09\u65B9\u670D\u52D9\u5668\u55CE\uFF1F",
    faq5A: "\u684C\u9762\u7AEF\u300C\u8A2D\u7F6E \u2192 \u9060\u7A0B\u300D\u751F\u6210\u914D\u5C0D\u4E8C\u7DAD\u78BC\uFF0C\u624B\u6A5F\u6383\u78BC\u5F8C\u512A\u5148\u8D70\u5C40\u57DF\u7DB2\u76F4\u9023\uFF08:5417\uFF09\uFF0C\u5916\u51FA\u53EF\u5207\u4F60\u81EA\u5DF1\u7684 Cloudflare Tunnel\uFF08:5418\uFF09\u6216 GoPanel \u53CD\u5411\u96A7\u9053\u3002iPhone \u5BE9\u6279\u63A8\u9001\u53EA\u767C\u5F85\u8655\u7406\u8A08\u6578\uFF0C\u4E0D\u542B\u4EFB\u4F55\u4EE3\u78BC\u3001\u8DEF\u5F91\u6216\u547D\u4EE4\u6B63\u6587\u3002"
  },
  download: {
    title: "\u4E0B\u8F09 Hoxi \u5BA2\u6237\u7AEF",
    subtitle: "\u684C\u9762\u7AEF\u591A Agent \u4E26\u884C\u7DE8\u78BC\uFF0C\u624B\u6A5F\u7AEF\u96E2\u5E2D\u9060\u7A0B\u5BE9\u6279\u8207\u8A9E\u97F3\u8ABF\u5EA6\u3002\u684C\u9762\u5B89\u88DD\u5305\u3001\u6821\u9A57\u503C\u8207\u6B77\u53F2\u7248\u672C\u6211\u90FD\u5F9E\u767C\u4F48\u7CFB\u7D71\u5BE6\u6642\u540C\u6B65\uFF1BiOS \u8207 Android \u624B\u6A5F\u7AEF\u6B63\u5728\u6536\u5C3E\u5167\u6E2C\uFF0C\u5373\u5C07\u4E0A\u7DDA\u3002",
    seoTitle: "\u4E0B\u8F09 Hoxi \u2014 macOS / Windows / Linux \u684C\u9762\u7AEF\u8207 iOS / Android \u624B\u6A5F\u7AEF | \u53EF\u559C AI",
    seoDescription: "Hoxi \u5B98\u65B9\u4E0B\u8F09\u9801\uFF1AmacOS (Apple Silicon)\u3001Windows (x64)\u3001Linux (x64) \u684C\u9762\u5DE5\u4F5C\u53F0\u5B89\u88DD\u5305\u3001SHA-256 \u6821\u9A57\u503C\u8207\u6B77\u53F2\u7248\u672C\uFF0C\u4EE5\u53CA Hoxi Mobile (iOS / Android) \u624B\u6A5F\u7AEF\u9810\u544A\u3002",
    latestLine: "\u7576\u524D\u6700\u65B0\u7248\u672C v{version} \xB7 \u767C\u4F48\u65BC {date}",
    currentDevice: "\u7576\u524D\u8A2D\u5099",
    versionLabel: "\u7248\u672C",
    releasedLabel: "\u767C\u4F48\u65BC",
    sizeLabel: "\u9AD4\u7A4D",
    minSystem: "\u8981\u6C42 macOS {version} \u53CA\u4EE5\u4E0A",
    archMac: "Apple Silicon (arm64) \xB7 .dmg",
    archWindows: "x64 \xB7 .zip",
    archLinux: "x64 \xB7 .tar.gz",
    altMirror: "\u5099\u7528\u93E1\u50CF",
    browseReleases: "\u524D\u5F80 Releases \u5217\u8868",
    checksumNote: "\u9AD4\u7A4D\u8207 SHA-256 \u6211\u76F4\u63A5\u53D6\u81EA\u767C\u5E03\u7CFB\u7D71\uFF0C\u4E0B\u8F09\u5F8C\u4F60\u53EF\u4EE5\u81EA\u884C\u6838\u5C0D\u5B89\u88DD\u5305\u5B8C\u6574\u6027\u3002",
    desktopSectionTitle: "Hoxi Desktop \xB7 \u684C\u9762\u5DE5\u4F5C\u53F0",
    mobileBadge: "COMING SOON \xB7 \u624B\u6A5F\u7AEF\u9810\u544A",
    mobileTitle: "Hoxi Mobile \xB7 \u53EF\u559CAI \u624B\u6A5F\u7AEF\uFF08iOS & Android\uFF09",
    mobileSubtitle: "\u96E2\u958B\u96FB\u8166\u5DE5\u4F4D\u4E0D\u65B7\u806F\uFF1A\u6383\u78BC\u76F4\u9023\u4F60\u7684 Hoxi \u684C\u9762\u7AEF\u8207 GoPanel \u670D\u52D9\u5668\uFF0C\u96A8\u6642\u67E5\u770B\u7DE8\u78BC\u9032\u5EA6\u3001\u5BE9\u67E5 Git Diff\u3001\u6279\u51C6\u9AD8\u5371\u547D\u4EE4\u3002",
    mobileIosTitle: "iOS \u7248 (iPhone)",
    mobileIosArch: "App Store / TestFlight \xB7 \u652F\u6301 APNs \u5BE9\u6279\u63D0\u9192\u63A8\u9001\u8207\u539F\u751F\u8A9E\u97F3",
    mobileAndroidTitle: "Android \u7248",
    mobileAndroidArch: "APK \u76F4\u88DD \xB7 \u5C40\u57DF\u7DB2\u76F4\u9023\u8207\u96A7\u9053\u81EA\u52D5\u9078\u8DEF",
    mobileStatusBadge: "\u5373\u5C07\u4E0A\u7DDA",
    mobileF1Title: "\u6383\u78BC\u914D\u5C0D \xB7 \u5C40\u57DF\u7DB2\u512A\u5148\u9078\u8DEF",
    mobileF1Desc: "\u684C\u9762\u7AEF\u300C\u8A2D\u7F6E \u2192 \u9060\u7A0B\u300D\u751F\u6210\u4E8C\u7DAD\u78BC\uFF0C\u624B\u6A5F\u6383\u78BC\u5F8C\u512A\u5148\u5C40\u57DF\u7DB2\u76F4\u9023\uFF08:5417\uFF09\uFF0C\u5916\u51FA\u81EA\u52D5\u5207\u63DB Cloudflare Tunnel\uFF08:5418\uFF09\u6216 GoPanel \u96A7\u9053\u3002",
    mobileF2Title: "PreToolUse \u9060\u7A0B\u5BE9\u6279\u8207\u5B89\u5168\u78BA\u8A8D\u5361",
    mobileF2Desc: "\u684C\u9762 Agent \u9047\u5230\u5371\u96AA\u547D\u4EE4\u66AB\u505C\u7B49\u5F85\u6642\uFF0C\u624B\u6A5F\u6536\u5230\u63D0\u9192\uFF08\u50C5\u542B\u5F85\u8655\u7406\u8A08\u6578\uFF0C\u4E0D\u66B4\u9732\u4EE3\u78BC\u8207\u547D\u4EE4\uFF09\uFF0C\u9EDE\u958B\u5373\u53EF\u67E5\u770B\u4E0A\u4E0B\u6587\u4E26\u6279\u51C6\u6216\u62D2\u7D55\u3002",
    mobileF3Title: "\u56DB\u6B04\u79FB\u52D5\u5DE5\u4F5C\u53F0",
    mobileF3Desc: "\u6E9D\u901A\uFF08\u6309\u4F4F\u8AAC\u8A71 / \u62CD\u7167 / \u610F\u5716\u5DE5\u5177\u8ABF\u7528\uFF09\xB7 \u5DE5\u4F5C\u53F0\uFF08\u7DE8\u78BC\u6703\u8A71 / Git Diff / GoPanel \u670D\u52D9\u5668\uFF09\xB7 \u4E00\u4EBA\u516C\u53F8\uFF08\u6A21\u578B\u699C / \u4E94\u7DAD\u6E2C\u8A55\uFF09\xB7 \u6211\u7684\uFF08\u6BCF\u65E5\u7C3D\u5230\u9818\u7A4D\u5206\uFF09\u3002",
    mobileNotifyBtn: "\u52A0\u5165\u4EA4\u6D41\u7FA3\u7372\u53D6\u624B\u6A5F\u7AEF\u5167\u6E2C\u901A\u77E5",
    historyTitle: "\u7248\u672C\u6B77\u53F2",
    historySub: "\u6BCF\u500B\u7248\u672C\u7684\u66F4\u65B0\u8AAC\u660E\u8207\u5404\u5E73\u53F0\u5B89\u88DD\u5305\uFF0C\u6211\u6309\u767C\u4F48\u8A18\u9304\u5BE6\u6642\u540C\u6B65\u3002",
    historyNoNotes: "\u8A72\u7248\u672C\u672A\u9644\u66F4\u65B0\u8AAC\u660E\u3002",
    historyEmpty: "\u66AB\u7121\u767C\u4F48\u8A18\u9304\u3002",
    allVersions: "\u5168\u90E8\u7248\u672C\u8207\u624B\u6A5F\u7AEF\u9810\u544A"
  },
  soloPage: {
    badge: "\u4E00\u4EBA\u516C\u53F8 \xB7 \u8A8D\u77E5\u3001\u9078\u578B\u8207\u5BE6\u6230\u8A18\u9304",
    titleLine1: "\u7528 AI \u6B66\u88DD\u81EA\u5DF1\uFF0C",
    titleLine2: "\u6D3B\u6210\u4E00\u652F\u968A\u4F0D",
    subtitle: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6E2C\u8A55\u3001\u5927\u6A21\u578B\u8207\u4E2D\u8F49\u7AD9\u771F\u5BE6\u8CEC\u672C\u3001\u5168\u68E7\u7368\u7ACB\u958B\u767C\u5DE5\u5177\u7BB1\uFF0C\u4EE5\u53CA\u5F9E\u96F6\u8DD1\u901A\u9589\u74B0\u7684\u5BE6\u6230\u9577\u6587",
    endorsement: "\u4E00\u4EBA\u516C\u53F8\uFF0C\u6210\u9577\u5BE6\u6230\u8A18\u9304\u3002\u81F4\u656C\u6BCF\u4E00\u500B\u5728\u596E\u9B25\u7684\u7368\u7ACB\u958B\u767C\u8005",
    seoTitle: "\u4E00\u4EBA\u516C\u53F8\u5BE6\u6230\u4E2D\u5FC3 \u2014 AI \u80FD\u529B\u6E2C\u8A55\u8207\u7B97\u529B\u964D\u672C\u6307\u5357 | \u53EF\u559C AI",
    seoDescription: "\u5C08\u70BA\u7368\u7ACB\u958B\u767C\u8005\u8207\u4E00\u4EBA\u516C\u53F8\u6253\u9020\u7684\u4E94\u7DAD\u80FD\u529B\u6E2C\u8A55\u3001\u5927\u6A21\u578B\u50F9\u683C\u5C0D\u6BD4\u3001\u4E2D\u8F49\u7AD9\u8A55\u6E2C\u8207\u5168\u68E7\u51FA\u6D77\u5DE5\u5177\u7BB1"
  },
  homeSidebar: {
    authorAvatar: "\u559C",
    authorName: "\u6211\u662F\u53EF\u6A02 (Coller)",
    authorInitial: "C",
    authorRole: "\u53EF\u559C AI \u7AD9\u9577",
    communityBtn: "\u806F\u7E6B\u8207\u4EA4\u6D41",
    aboutMe: "\u95DC\u65BC\u6211",
    columnBadge: "\u9023\u8F09\u5C08\u6B04",
    columnStatus: "\u9023\u8F09\u4E2D",
    columnTitle: "\u300A\u5E95\u5C64\u91CD\u69CB\u300B",
    columnSub: "Refactoring the Self",
    columnDesc: "\u5DE5\u7A0B\u5E2B\u8996\u89D2\u4E0B\u7684\u5FC3\u667A\u6A21\u578B\u8207\u5DE5\u4F5C\u6D41\u91CD\u69CB\u5BE6\u9304",
    columnCta: "\u9032\u5165\u9023\u8F09\u95B2\u8B80",
    projectsTitle: "\u6211\u5728\u505A\u7684\u9805\u76EE",
    projectsAll: "\u5168\u90E8\u9805\u76EE",
    dataTitle: "\u6578\u64DA",
    dataSummary: "\u5DF2\u6536\u9304 {models} \u500B\u6A21\u578B \xB7 {vendors} \u5BB6\u5EE0\u5546",
    blogTitle: "\u5BE6\u6230\u535A\u5BA2",
    blogAll: "\u5168\u90E8\u6587\u7AE0"
  },
  homeReadiness: {
    badge: "\u80FD\u529B\u6E2C\u8A55",
    title: "\u505A\u4E00\u4EBA\u516C\u53F8\uFF0C\u4F60\u9084\u5DEE\u54EA\u4E00\u584A\uFF1F",
    subtitle: "12 \u9053\u60C5\u666F\u984C\uFF0C\u770B\u4F60\u5728\u9A57\u8B49\u3001\u4EA4\u4ED8\u3001\u5206\u767C\u3001\u6210\u672C\u548C\u5FC3\u614B\u4E0A\u7684\u77ED\u677F",
    roleLabel: "\u6309\u5D17\u4F4D\u51FA\u984C\uFF1A",
    roleEng: "\u5DE5\u7A0B\u5E2B",
    rolePm: "\u7522\u54C1\u7D93\u7406",
    roleDesign: "\u8A2D\u8A08\u5E2B",
    roleGrowth: "\u904B\u71DF\u589E\u9577",
    startBtn: "\u958B\u59CB\u6E2C\u8A55",
    durationNote: "\u514D\u767B\u9304 \xB7 \u7D04 3 \u5206\u9418",
    dimTitle: "\u4E94\u500B\u7DAD\u5EA6",
    dimSample: "\u793A\u4F8B",
    dimCta: "\u770B\u770B\u6BCF\u500B\u7DAD\u5EA6\u6E2C\u4EC0\u9EBC \u2192",
    dim1Name: "\u5546\u696D\u8207\u9A57\u8B49\u55C5\u89BA",
    dim1Focus: "MVP\u6536\u8CBB\u9A57\u8B49",
    dim2Name: "\u5168\u68E7 AI \u4EA4\u4ED8\u529B",
    dim2Focus: "\u7AEF\u5230\u7AEF\u4EA4\u4ED8",
    dim3Name: "\u6D41\u91CF\u8207\u5206\u767C\u529B",
    dim3Focus: "\u51B7\u5553\u52D5\u5206\u767C",
    dim4Name: "\u6210\u672C\u6838\u7B97\u8207\u69D3\u687F",
    dim4Focus: "\u7B97\u529B\u6210\u672C\u6838\u7B97",
    dim5Name: "\u5FC3\u667A\u8DD1\u9053\u8207\u97CC\u6027",
    dim5Focus: "\u6297\u632B\u8207\u6B62\u640D"
  },
  homeSavings: {
    title: "\u7B97\u529B\u964D\u672C\u5C0D\u6BD4",
    subtitle: "\u6A21\u578B\u5E95\u50F9\u3001\u570B\u5167\u5C08\u7DDA\u8207 IDE \u5957\u9910\u771F\u5BE6\u8CEC\u672C",
    viewAll: "\u67E5\u770B\u5B8C\u6574\u65B9\u6848",
    dataGlance: "\u5BE6\u6E2C\u6578\u64DA\u4E00\u89BD",
    tabGateways: "\u4E2D\u8F49\u7AD9",
    tabModels: "\u6A21\u578B",
    tabPlans: "\u7DE8\u7A0B\u5957\u9910",
    colGateway: "\u4E2D\u8F49\u7AD9",
    colLatency: "\u5EF6\u9072",
    colUptime: "\u5728\u7DDA\u7387",
    colPrice: "\u53C3\u8003\u55AE\u50F9",
    colAction: "\u64CD\u4F5C",
    colModel: "\u6A21\u578B",
    colScenes: "\u6A19\u7C64 / \u5834\u666F",
    colScore: "\u7D9C\u5408\u5206",
    colBlended: "\u6DF7\u5408\u55AE\u50F9",
    configureBtn: "\u8A73\u60C5\u8207\u914D\u7F6E",
    detailsLink: "\u8A73\u60C5 \u2192",
    quotaLink: "\u67E5\u770B\u984D\u5EA6 \u2192",
    overallPrefix: "\u7D9C\u5408"
  },
  homeTools: {
    title: "\u5168\u68E7\u5DE5\u5177\u7BB1",
    viewAll: "\u5168\u90E8 {count} \u500B",
    freeStart: "\u514D\u8CBB\u8D77\u6B65",
    visitSite: "\u5B98\u7DB2"
  },
  authDesktop: {
    title: "\u6388\u6B0A\u767B\u9304 Hoxi \u684C\u9762\u5BA2\u6237\u7AEF",
    invalidState: "\u7121\u6548\u7684\u6388\u6B0A\u93C8\u63A5\uFF08\u7F3A\u5C11\u6216\u683C\u5F0F\u932F\u8AA4\u7684 state \u53C3\u6578\uFF09\u3002\u8ACB\u5728 Hoxi \u5BA2\u6237\u7AEF\u91CD\u65B0\u767C\u8D77\u6388\u6B0A",
    cancelled: "\u5DF2\u53D6\u6D88\u6388\u6B0A\u3002\u60A8\u53EF\u4EE5\u76F4\u63A5\u95DC\u9589\u6B64\u6A19\u7C64\u9801\u4E26\u8FD4\u56DE Hoxi \u5BA2\u6237\u7AEF",
    checkingSession: "\u6B63\u5728\u9A57\u8B49\u5B98\u7DB2\u767B\u9304\u72C0\u614B...",
    redirectingLogin: "\u672A\u6AA2\u6E2C\u5230\u767B\u9304\u72C0\u614B\uFF0C\u6B63\u5728\u524D\u5F80\u767B\u9304\u9801\u9762...",
    subtitle: "Hoxi \u684C\u9762\u7AEF\u6B63\u5728\u7533\u8ACB\u8207\u7576\u524D\u8CEC\u865F\u5EFA\u7ACB\u9023\u63A5\u4E26\u540C\u6B65\u958B\u767C\u6B0A\u9650",
    accountLabel: "\u6388\u6B0A\u767B\u9304\u8CEC\u865F",
    activeBadge: "Active",
    perm1: "\u81EA\u52D5\u63A5\u5165\u96F2\u7AEF\u6A21\u578B\u7DB2\u95DC\u8207\u984D\u5EA6\u540C\u6B65",
    perm2: "\u7372\u53D6\u6700\u65B0\u7248\u672C\u5728\u7DDA\u66F4\u65B0\u8207\u591A\u5E73\u53F0\u93E1\u50CF",
    singleDeviceNote: "\u63D0\u793A\uFF1A\u5B8C\u6210\u6388\u6B0A\u5F8C\u5C07\u70BA\u672C\u53F0\u8A2D\u5099\u7C3D\u767C\u7368\u4F54\u6191\u8B49\u3002\u5982\u5728\u5176\u4ED6\u8A2D\u5099\u4E0A\u5DF2\u6709\u6D3B\u8E8D\u767B\u9304\uFF0C\u820A\u6191\u8B49\u5C07\u81EA\u52D5\u5931\u6548",
    submitting: "\u6B63\u5728\u6388\u6B0A...",
    confirmBtn: "\u78BA\u8A8D\u6388\u6B0A",
    cancelBtn: "\u53D6\u6D88",
    doneTitle: "\u6388\u6B0A\u6210\u529F",
    doneDesc: "\u6191\u8B49\u5DF2\u6210\u529F\u7C3D\u767C\uFF0C\u6B63\u5728\u5617\u8A66\u81EA\u52D5\u559A\u9192 Hoxi \u684C\u9762\u5BA2\u6237\u7AEF...",
    openAppBtn: "\u7ACB\u5373\u559A\u9192 Hoxi \u5BA2\u6237\u7AEF",
    closePageHint: "\u5BA2\u6237\u7AEF\u82E5\u5DF2\u81EA\u52D5\u5B8C\u6210\u767B\u9304\uFF0C\u60A8\u53EF\u76F4\u63A5\u95DC\u9589\u6B64\u9801\u9762"
  },
  auth: {
    loginTitle: "\u767B\u9304 Hoxi",
    loginSubtitle: "\u4F7F\u7528\u958B\u767C\u8005\u8CEC\u865F\u767B\u9304\uFF0C\u540C\u6B65 Hoxi \u684C\u9762\u5DE5\u4F5C\u53F0\u8207\u96F2\u7AEF\u80FD\u529B",
    registerTitle: "\u5275\u5EFA Hoxi \u8CEC\u865F",
    registerSubtitle: "\u8A3B\u518A\u5373\u53EF\u6388\u6B0A\u767B\u9304 Hoxi \u684C\u9762\u5BA2\u6237\u7AEF\u4E26\u958B\u5553\u667A\u80FD\u9AD4\u5DE5\u7A0B\u9AD4\u9A57",
    desktopRedirectHint: "\u767B\u9304\u6210\u529F\u5F8C\u5C07\u81EA\u52D5\u8FD4\u56DE Hoxi \u684C\u9762\u7AEF\u5B8C\u6210\u8A2D\u5099\u6388\u6B0A",
    continueWithGithub: "\u4F7F\u7528 GitHub \u7E7C\u7E8C",
    continueWithGoogle: "\u4F7F\u7528 Google \u7E7C\u7E8C",
    orWithEmail: "\u6216\u4F7F\u7528\u90F5\u7BB1\u8CEC\u865F",
    nickname: "\u66B1\u7A31\uFF08\u9078\u586B\uFF09",
    nicknamePlaceholder: "\u4F60\u7684\u958B\u767C\u8005\u7A31\u547C",
    email: "\u96FB\u5B50\u90F5\u7BB1",
    emailPlaceholder: "\u8F38\u5165\u5E38\u7528\u90F5\u7BB1\u5730\u5740",
    password: "\u5BC6\u78BC",
    passwordPlaceholder: "\u8F38\u5165\u767B\u9304\u5BC6\u78BC",
    signIn: "\u767B\u9304",
    signingIn: "\u6B63\u5728\u767B\u9304...",
    createAccount: "\u8A3B\u518A\u8CEC\u865F",
    creatingAccount: "\u6B63\u5728\u8A3B\u518A...",
    noAccount: "\u9084\u6C92\u6709\u8CEC\u865F\uFF1F",
    alreadyHaveAccount: "\u5DF2\u6709\u8CEC\u865F\uFF1F",
    loginFailed: "\u767B\u9304\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u90F5\u7BB1\u6216\u5BC6\u78BC\u662F\u5426\u6B63\u78BA",
    registerFailed: "\u8A3B\u518A\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u586B\u5BEB\u4FE1\u606F\u5F8C\u91CD\u8A66",
    oauthGithubFailed: "GitHub \u6388\u6B0A\u767B\u9304\u672A\u5B8C\u6210\uFF0C\u8ACB\u91CD\u8A66\u6216\u4F7F\u7528\u90F5\u7BB1\u767B\u9304",
    oauthGoogleFailed: "Google \u6388\u6B0A\u767B\u9304\u672A\u5B8C\u6210\uFF0C\u8ACB\u91CD\u8A66\u6216\u4F7F\u7528\u90F5\u7BB1\u767B\u9304",
    oauthEmailUnverified: "\u7B2C\u4E09\u65B9\u8CEC\u865F\u90F5\u7BB1\u672A\u9A57\u8B49\uFF0C\u8ACB\u5148\u9A57\u8B49\u90F5\u7BB1\u6216\u76F4\u63A5\u4F7F\u7528\u90F5\u7BB1\u5BC6\u78BC\u767B\u9304"
  },
  authMobile: {
    invalidState: "\u7121\u6548\u7684\u767B\u9304\u93C8\u63A5",
    invalidStateHint: "\u8ACB\u5728\u53EF\u559CAI \u624B\u6A5F\u7AEF\u91CD\u65B0\u767C\u8D77\u767B\u9304",
    exchanging: "\u6B63\u5728\u628A\u767B\u9304\u72C0\u614B\u4EA4\u7D66\u624B\u6A5F\u2026",
    readyTitle: "\u767B\u9304\u72C0\u614B\u5DF2\u5C31\u7DD2",
    readyDesc: "\u7576\u524D\u8CEC\u865F\uFF1A{account}\u3002\u8ACB\u8FD4\u56DE\u53EF\u559CAI \u624B\u6A5F\u7AEF\u7E7C\u7E8C\u64CD\u4F5C",
    openAppBtn: "\u6253\u958B\u53EF\u559CAI",
    closeHint: "\u5982\u679C\u6C92\u6709\u81EA\u52D5\u8DF3\u8F49\uFF0C\u8ACB\u9EDE\u64CA\u4E0A\u9762\u7684\u6309\u9215\uFF1B\u5B8C\u6210\u5F8C\u53EF\u95DC\u9589\u6B64\u9801\u9762",
    failedTitle: "\u767B\u9304\u672A\u5B8C\u6210",
    retryBtn: "\u91CD\u8A66"
  },
  site: {
    name: "\u53EF\u559C AI"
  },
  member: {
    shell: {
      eyebrow: "Hoxi Member Center",
      title: "\u6703\u54E1\u4E2D\u5FC3",
      subtitle: "\u7BA1\u7406\u60A8\u7684\u7C3D\u5230\u7A4D\u5206\u3001\u7B97\u529B\u984D\u5EA6\u3001API \u5BC6\u9470\u8207\u8ABF\u7528\u660E\u7D30",
      navEntry: "\u6703\u54E1\u4E2D\u5FC3",
      mainNavigation: "\u6703\u54E1\u5C0E\u822A",
      exploreModels: "\u700F\u89BD\u6A21\u578B\u8207\u7701\u9322\u699C",
      guest: "\u53EF\u559C\u958B\u767C\u8005",
      rateTitle: "\u7A4D\u5206\u7D50\u7B97\u53E3\u5F91",
      rateHint: "\u7A4D\u5206\u76F4\u63A5\u843D\u5165 \u9322\u5305 points \u6C60\uFF0C\u8ABF\u7528\u6A21\u578B\u6642\u6309\u771F\u5BE6 Token \u6D88\u8017\u81EA\u52D5\u62B5\u6263\u3002"
    },
    nav: {
      dashboard: "\u6982\u89BD",
      rewards: "\u6BCF\u65E5\u7C3D\u5230\u8207\u7A4D\u5206",
      models: "\u53EF\u8ABF\u7528\u6A21\u578B",
      keys: "API \u5BC6\u9470",
      billing: "\u7A4D\u5206\u8207\u8ABF\u7528\u660E\u7D30",
      tickets: "\u6211\u7684\u8AEE\u8A62\u8207\u5DE5\u55AE",
      account: "\u8CEC\u865F\u8A2D\u7F6E"
    },
    common: {
      pointsUnit: "\u7A4D\u5206",
      loading: "\u6B63\u5728\u52A0\u8F09...",
      retry: "\u91CD\u8A66",
      actionFailed: "\u64CD\u4F5C\u672A\u6210\u529F\uFF0C\u8ACB\u7A0D\u5F8C\u91CD\u8A66",
      gatewayUnavailable: "\u7B97\u529B\u7DB2\u95DC\u66AB\u672A\u9023\u63A5\u6216\u4E0D\u53EF\u9054\uFF0C\u5BE6\u6642\u9918\u984D\u8207\u5BC6\u9470\u5217\u8868\u66AB\u4E0D\u53EF\u7528\u3002",
      verifyEmailHint: "\u60A8\u7684\u8CEC\u865F\u90F5\u7BB1\u5C1A\u672A\u5B8C\u6210\u9A57\u8B49\uFF0C\u5B8C\u6210\u9A57\u8B49\u5F8C\u5373\u53EF\u7C3D\u5230\u9818\u53D6\u7A4D\u5206\u734E\u52F5\u3002",
      goVerify: "\u53BB\u9A57\u8B49"
    },
    dashboard: {
      title: "\u6703\u54E1\u6982\u89BD",
      subtitle: "\u5BE6\u6642\u67E5\u770B\u60A8\u7684 \u7B97\u529B\u79EF\u5206\u9918\u984D\u3001\u4ECA\u65E5\u7C3D\u5230\u9032\u5EA6\u8207\u8FD1\u671F\u6A21\u578B\u8ABF\u7528\u7D71\u8A08",
      hello: "\u60A8\u597D\uFF0C{name}",
      activeDays: "\u6D3B\u8E8D\u8207\u7C3D\u5230\u71B1\u529B\u5716\uFF08\u8FD1 52 \u5468\uFF09",
      less: "\u5C11",
      more: "\u591A",
      tokenUsage: "Token \u6D88\u8017\u7E3D\u91CF",
      input: "\u8F38\u5165 Tokens",
      output: "\u8F38\u51FA Tokens",
      chatCount: "\u8ABF\u7528\u7E3D\u6B21\u6578",
      availablePoints: "\u53EF\u7528\u7A4D\u5206",
      todayCheckin: "\u4ECA\u65E5\u7C3D\u5230",
      earnedPoints: "\u7D2F\u8A08\u7372\u5F97\u7A4D\u5206",
      spentPoints: "\u7D2F\u8A08\u6D88\u8017\u7A4D\u5206",
      pendingPoints: "\u767C\u653E\u4E2D",
      allDelivered: "\u5DF2\u5168\u90E8\u5BE6\u6642\u5165\u8CEC",
      consumptionOrder: "\u7A4D\u5206\u7D50\u7B97\u93C8\u8DEF",
      viewBilling: "\u67E5\u770B\u7A4D\u5206\u660E\u7D30",
      viewAll: "\u67E5\u770B\u5168\u90E8",
      manage: "\u7BA1\u7406",
      recentTransactions: "\u8FD1\u671F\u7A4D\u5206\u5165\u8CEC\u8207\u6D88\u8CBB\u6D41\u6C34",
      noRecentTransactions: "\u66AB\u7121\u7A4D\u5206\u5165\u8CEC\u6216\u8ABF\u7528\u8A18\u9304",
      usageTitle: "\u6A21\u578B\u8ABF\u7528\u7D71\u8A08",
      usageSubtitle: "\u7D71\u8A08\u9031\u671F\u5167\u901A\u904E\u60A8\u7684 Hoxi API \u5BC6\u9470\u767C\u8D77\u7684\u771F\u5BE6\u8ABF\u7528\u532F\u7E3D",
      requestsCount: "\u8ABF\u7528\u6B21\u6578",
      tokensCount: "\u7E3D Token \u6578",
      rangePointsSpent: "\u9031\u671F\u6D88\u8017\u7A4D\u5206",
      modelBreakdown: "\u6309\u6A21\u578B\u5206\u4F48",
      noUsageYet: "\u66AB\u7121\u6A21\u578B\u8ABF\u7528\u8A18\u9304\uFF0C\u5275\u5EFA API \u5BC6\u9470\u5F8C\u5373\u53EF\u5728 Hoxi \u5BA2\u6237\u7AEF\u6216\u4EFB\u610F OpenAI \u517C\u5BB9\u5DE5\u5177\u4E2D\u8ABF\u7528\u3002",
      quickBindTitle: "\u5728\u53EF\u559C AI \u5BA2\u6237\u7AEF\u4E2D\u7D81\u5B9A\u4F7F\u7528",
      quickBindDesc: "\u8907\u88FD\u4E0B\u65B9\u7DB2\u95DC\u5730\u5740\u8207\u60A8\u7684 API \u5BC6\u9470\uFF0C\u586B\u5165 Hoxi \u684C\u9762\u7AEF\u6216\u624B\u6A5F\u7AEF\u300C\u6211\u7684 \u2192 \u7D81\u5B9A AI \u6A21\u578B\u300D\u5373\u53EF\u76F4\u63A5\u4F7F\u7528\u7A4D\u5206\u8ABF\u7528\u3002"
    },
    rewards: {
      title: "\u6BCF\u65E5\u7C3D\u5230\u8207\u7A4D\u5206",
      subtitle: "\u6BCF\u65E5\u7C3D\u5230\u7372\u53D6\u771F\u5BE6\u7B97\u529B\u7A4D\u5206\uFF0C\u9023\u7E8C\u7C3D\u5230\u89E3\u9396\u968E\u68AF\u734E\u52F5",
      daysStreak: "\u5929\u9023\u7C64",
      maxStreak: "\u6700\u9AD8\u9023\u7C64",
      todayReward: "\u4ECA\u65E5\u734E\u52F5",
      tomorrowReward: "\u660E\u65E5\u9810\u8A08",
      checkInNow: "\u7ACB\u5373\u7C3D\u5230\u9818\u7A4D\u5206",
      checkedIn: "\u4ECA\u65E5\u5DF2\u7C3D\u5230",
      deliveryStatus: "\u5165\u8CEC\u72C0\u614B",
      statusSucceeded: "\u5DF2\u5165\u8CEC",
      statusPending: "\u6B63\u5728\u5165\u8CEC",
      statusBlocked: "\u5F85\u7BA1\u7406\u54E1\u6838\u5C0D",
      calendarTitle: "\u7C3D\u5230\u65E5\u66C6",
      milestonesTitle: "\u9023\u7E8C\u7C3D\u5230\u91CC\u7A0B\u7891",
      ruleNote: "\u57FA\u790E\u6BCF\u65E5 +{base} \u7A4D\u5206\uFF0C\u6BCF\u9023\u7E8C 1 \u5929\u905E\u589E +{step} \u7A4D\u5206\uFF0C\u65E5\u5E38\u55AE\u65E5\u4E0A\u9650 {max} \u7A4D\u5206\uFF1B\u9054\u5230\u91CC\u7A0B\u7891\u5929\u6578\u984D\u5916\u758A\u52A0\u734E\u52F5\u3002",
      ruleRandomNote: "\u6BCF\u65E5\u7C3D\u5230\u96A8\u6A5F\u62BD\u53D6 +{min}~{max} \u7A4D\u5206\u76F2\u76D2\uFF1B\u9054\u5230\u9023\u7E8C\u7C3D\u5230\u91CC\u7A0B\u7891\u5929\u6578\u984D\u5916\u758A\u52A0\u734E\u52F5\u3002",
      historyTitle: "\u8FD1\u671F\u7C3D\u5230\u8207\u7A4D\u5206\u767C\u653E\u8A18\u9304",
      noHistory: "\u66AB\u7121\u7C3D\u5230\u8A18\u9304\uFF0C\u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u5B8C\u6210\u9996\u6B21\u7C3D\u5230\u3002",
      colDate: "\u7C3D\u5230\u65E5\u671F",
      colPoints: "\u7372\u5F97\u7A4D\u5206"
    },
    models: {
      title: "\u53EF\u8ABF\u7528\u6A21\u578B\u8207\u7A4D\u5206\u5B9A\u50F9",
      subtitle: "\u7576\u524D Hoxi \u79DF\u6237\u958B\u653E\u7684\u771F\u5BE6\u53EF\u8ABF\u7528\u6A21\u578B\u6E05\u55AE\uFF0810,000 \u7A4D\u5206 = $1.00 USD\uFF09",
      searchPlaceholder: "\u641C\u7D22\u6A21\u578B\u540D\u7A31\u6216\u5EE0\u5546...",
      keyGroupLabel: "\u7576\u524D\u5206\u7D44",
      countLabel: "\u5171 {count} \u500B\u53EF\u8ABF\u7528\u6A21\u578B",
      empty: "\u672A\u627E\u5230\u5339\u914D\u7684\u6A21\u578B",
      colModel: "\u6A21\u578B\u6A19\u8B58",
      colVendor: "\u5EE0\u5546",
      colMode: "\u8A08\u8CBB\u6A21\u5F0F",
      colInputPoints: "\u8F38\u5165\u50F9\u683C (\u6BCF\u767E\u842C Token)",
      colOutputPoints: "\u8F38\u51FA\u50F9\u683C (\u6BCF\u767E\u842C Token)"
    },
    keys: {
      title: "API \u5BC6\u9470\u7BA1\u7406",
      subtitle: "\u7BA1\u7406\u8207\u60A8\u7A4D\u5206\u9322\u5305\u7D81\u5B9A\u7684\u5C08\u5C6C API \u5BC6\u9470\uFF0C\u652F\u6301\u4E00\u9375\u8F2A\u63DB\u3001\u9650\u984D\u8207\u5553\u505C",
      endpointLabel: "OpenAI \u517C\u5BB9\u63A5\u53E3\u5730\u5740",
      namePlaceholder: "\u8F38\u5165\u5BC6\u9470\u5099\u8A3B\u540D\u7A31\uFF08\u5982\uFF1AHoxi Mac\uFF09",
      createBtn: "\u65B0\u5EFA\u5BC6\u9470",
      secretBannerTitle: "\u8ACB\u7ACB\u5373\u8907\u88FD\u4E26\u59A5\u5584\u4FDD\u5B58\u60A8\u7684\u5B8C\u6574\u5BC6\u9470\uFF08\u50C5\u5C55\u793A\u4E00\u6B21\uFF09",
      copy: "\u8907\u88FD",
      copied: "\u5DF2\u8907\u88FD\u5230\u526A\u8CBC\u677F",
      hide: "\u96B1\u85CF",
      empty: "\u60A8\u9084\u6C92\u6709\u5275\u5EFA API \u5BC6\u9470\uFF0C\u9EDE\u64CA\u53F3\u4E0A\u65B9\u300C\u65B0\u5EFA\u5BC6\u9470\u300D\u751F\u6210\u7B2C\u4E00\u628A\u5BC6\u9470\u3002",
      colName: "\u540D\u7A31",
      colKey: "\u5BC6\u9470\u63A9\u78BC",
      colStatus: "\u72C0\u614B",
      colUsedPoints: "\u5DF2\u6D88\u8017\u7A4D\u5206",
      colActions: "\u64CD\u4F5C",
      statusEnabled: "\u5553\u7528\u4E2D",
      statusDisabled: "\u5DF2\u7981\u7528",
      reveal: "\u67E5\u770B",
      enable: "\u5553\u7528",
      disable: "\u7981\u7528",
      rotate: "\u91CD\u7F6E",
      delete: "\u522A\u9664"
    },
    billing: {
      title: "\u7A4D\u5206\u8207\u8ABF\u7528\u660E\u7D30",
      subtitle: "\u900F\u660E\u6838\u5C0D\u6BCF\u4E00\u7B46\u6A21\u578B\u8ABF\u7528\u6D88\u8017\u8207\u7C3D\u5230\u7A4D\u5206\u5165\u8CEC\u6D41\u6C34",
      usageProgress: "\u7D2F\u8A08\u7A4D\u5206\u4F7F\u7528\u9032\u5EA6",
      usageTrend: "\u8ABF\u7528\u91CF\u8207\u7A4D\u5206\u6D88\u8017\u8DA8\u52E2",
      requestsVsCost: "\u6240\u9078\u9031\u671F\u5167\u6BCF\u65E5\u8ACB\u6C42\u6578\u8207\u6D88\u8017\u7A4D\u5206\u5C0D\u6BD4",
      modelDistribution: "\u6A21\u578B\u6D88\u8017\u5206\u4F48",
      byEstimatedSpending: "\u6309\u6240\u9078\u9031\u671F\u6D88\u8017\u7A4D\u5206\u4F54\u6BD4",
      tabConsumption: "\u6A21\u578B\u8ABF\u7528\u6D88\u8017",
      tabRewards: "\u7A4D\u5206\u5165\u8CEC\u6D41\u6C34",
      emptyConsumption: "\u66AB\u7121\u6A21\u578B\u8ABF\u7528\u6D88\u8017\u8A18\u9304",
      emptyRewards: "\u66AB\u7121\u7A4D\u5206\u5165\u8CEC\u6D41\u6C34",
      colTime: "\u6642\u9593",
      colTokens: "\u8F38\u5165 / \u8F38\u51FA Tokens",
      colPointsSpent: "\u6D88\u8017\u7A4D\u5206",
      colRemark: "\u4F86\u6E90\u8AAC\u660E",
      colPointsDelta: "\u8B8A\u52D5\u7A4D\u5206",
      colAfterPoints: "\u8B8A\u52D5\u5F8C\u9918\u984D"
    },
    account: {
      title: "\u8CEC\u865F\u8207\u5B89\u5168\u8A2D\u7F6E",
      subtitle: "\u7BA1\u7406\u60A8\u7684\u53EF\u559C AI \u8CEC\u865F\u8CC7\u6599\u3001\u767B\u9304\u5BC6\u78BC\u8207\u6703\u8A71\u72C0\u614B",
      profileTitle: "\u57FA\u672C\u8CC7\u6599",
      emailLabel: "\u7D81\u5B9A\u90F5\u7BB1",
      emailVerifiedStatus: "\u90F5\u7BB1\u5DF2\u9A57\u8B49",
      emailUnverifiedHint: "\u60A8\u7684\u90F5\u7BB1\u5C1A\u672A\u5B8C\u6210\u9A57\u8B49\uFF0C\u5B8C\u6210\u9A57\u8B49\u5F8C\u5373\u53EF\u7C3D\u5230\u9818\u53D6\u7A4D\u5206\u734E\u52F5",
      resendVerify: "\u91CD\u65B0\u767C\u9001\u9A57\u8B49\u90F5\u4EF6",
      resendingVerify: "\u767C\u9001\u4E2D...",
      resendVerifyCooldown: "\u8ACB\u5728 {sec} \u79D2\u5F8C\u91CD\u8A66",
      resendVerifySent: "\u9A57\u8B49\u90F5\u4EF6\u5DF2\u767C\u9001\uFF0C\u8ACB\u67E5\u6536",
      nicknameLabel: "\u958B\u767C\u8005\u66B1\u7A31",
      saveProfile: "\u4FDD\u5B58\u8CC7\u6599",
      passwordTitle: "\u4FEE\u6539\u767B\u9304\u5BC6\u78BC",
      passwordHint: "\u5B9A\u671F\u66F4\u63DB\u9AD8\u5F37\u5EA6\u5BC6\u78BC\u6709\u52A9\u65BC\u4FDD\u8B77\u60A8\u7684 \u7B97\u529B\u7A4D\u5206\u8207 API \u5BC6\u9470\u5B89\u5168\u3002",
      changePassword: "\u4FEE\u6539\u5BC6\u78BC",
      oldPassword: "\u7576\u524D\u5BC6\u78BC",
      newPassword: "\u65B0\u5BC6\u78BC",
      confirmNewPassword: "\u78BA\u8A8D\u65B0\u5BC6\u78BC",
      passwordMismatch: "\u5169\u6B21\u8F38\u5165\u7684\u65B0\u5BC6\u78BC\u4E0D\u4E00\u81F4",
      updatePassword: "\u66F4\u65B0\u5BC6\u78BC",
      accountStatus: "\u8CEC\u865F\u8207\u7B97\u529B\u7DB2\u95DC\u72C0\u614B",
      activeStatus: "\u6B63\u5E38\u5728\u7DDA \xB7 \u7A4D\u5206\u6C60\u5DF2\u5C31\u7DD2",
      saved: "\u5DF2\u4FDD\u5B58\u66F4\u65B0",
      logoutTitle: "\u9000\u51FA\u7576\u524D\u8CEC\u865F",
      logoutDesc: "\u9000\u51FA\u5F8C\u5C07\u6E05\u9664\u7576\u524D\u700F\u89BD\u5668\u7684\u767B\u9304\u6703\u8A71",
      logoutBtn: "\u9000\u51FA\u767B\u9304"
    },
    tickets: {
      title: "\u6211\u7684\u8AEE\u8A62\u8207\u5DE5\u55AE",
      subtitle: "\u67E5\u770B\u60A8\u63D0\u4EA4\u7684\u552E\u524D\u8AEE\u8A62\u3001\u5408\u4F5C\u7559\u8A00\u8207\u6280\u8853\u652F\u6301\u5DE5\u55AE\uFF0C\u652F\u6301\u591A\u8F2A\u7570\u6B65\u5C0D\u8A71\u8DDF\u9032",
      createBtn: "\u767C\u8D77\u65B0\u8AEE\u8A62 / \u5DE5\u55AE",
      empty: "\u60A8\u9084\u6C92\u6709\u63D0\u4EA4\u904E\u4EFB\u4F55\u8AEE\u8A62\u6216\u5DE5\u55AE",
      emptyDesc: "\u7121\u8AD6\u662F\u7522\u54C1\u8AEE\u8A62\u3001\u5DE5\u5177\u6536\u9304\u3001\u5546\u52D9\u5408\u4F5C\u9084\u662F\u7B97\u529B\u7DB2\u95DC\u6392\u969C\uFF0C\u90FD\u53EF\u4EE5\u96A8\u6642\u767C\u8D77\u7559\u8A00\u3002",
      filterAll: "\u5168\u90E8\u72C0\u614B",
      colTicketNo: "\u55AE\u865F",
      colCategory: "\u985E\u578B",
      colTitle: "\u4E3B\u984C",
      colStatus: "\u72C0\u614B",
      colUpdated: "\u6700\u5F8C\u66F4\u65B0",
      titleLabel: "\u8AEE\u8A62 / \u5DE5\u55AE\u6A19\u984C",
      titlePlaceholder: "\u7C21\u8981\u6982\u62EC\u60A8\u7684\u554F\u984C\u6216\u5408\u4F5C\u610F\u5411",
      detailTitle: "\u5C0D\u8A71\u8A73\u60C5"
    }
  },
  newsletter: {
    badge: "EMAIL UPDATES",
    title: "\u8A02\u95B1\u4E00\u4EBA\u516C\u53F8\u5BE6\u6230\u5C08\u6B04\u8207\u7B97\u529B\u964D\u50F9\u9031\u5831",
    subtitle: "\u6BCF\u9031\u7CBE\u9078\u6DF1\u5EA6\u5BE6\u6230\u5FA9\u76E4\u3001\u65B0\u6A21\u578B\u9AD4\u611F\u8A55\u6E2C\u8207\u9AD8\u6027\u50F9\u6BD4\u4E2D\u8F49\u52D5\u614B\uFF0C\u96F6\u5783\u573E\u90F5\u4EF6\uFF0C\u96A8\u6642\u53EF\u4E00\u9375\u9000\u8A02\u3002",
    placeholder: "\u8F38\u5165\u60A8\u7684\u5E38\u7528\u90F5\u7BB1\u5730\u5740",
    button: "\u514D\u8CBB\u8A02\u95B1",
    submitting: "\u63D0\u4EA4\u4E2D...",
    success: "\u8A02\u95B1\u6210\u529F\uFF01\u6709\u91CD\u8981\u66F4\u65B0\u6642\u6211\u5011\u5C07\u7B2C\u4E00\u6642\u9593\u90F5\u4EF6\u901A\u77E5\u60A8\u3002",
    error: "\u8A02\u95B1\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u90F5\u7BB1\u683C\u5F0F\u5F8C\u91CD\u8A66\u3002"
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHoxiCommunity();
    const { getSetting } = useSettings();
    const { localePath } = useLocaleRouter();
    const { locale, setLocale, mergeLocaleMessage, t } = useI18n();
    useSwitchLocalePath();
    const { loggedIn, user } = useUserSession();
    const route = useRoute();
    const isMemberRoute = computed(() => /(?:^|\/)user(?:\/|$)/.test(route.path));
    if (mergeLocaleMessage) {
      mergeLocaleMessage("en", { hoxi: en });
      mergeLocaleMessage("zh", { hoxi: zh });
      mergeLocaleMessage("zh-HK", { hoxi: zhHK });
    }
    const localeOptions = [
      { code: "en", label: "English", shortLabel: "EN" },
      { code: "zh", label: "\u7B80\u4F53\u4E2D\u6587", shortLabel: "\u7B80" },
      { code: "zh-HK", label: "\u7E41\u9AD4\u4E2D\u6587", shortLabel: "\u7E41" }
    ];
    ref(null);
    const userMenuOpen = ref(false);
    ref(null);
    const langMenuOpen = ref(false);
    const mobileOpen = ref(false);
    const mobileExpandedMap = ref({
      soloBuilder: true,
      savings: true,
      tools: true
    });
    const userLabel = computed(
      () => {
        var _a, _b, _c;
        return ((_a = user.value) == null ? void 0 : _a.nickName) || ((_b = user.value) == null ? void 0 : _b.nickname) || ((_c = user.value) == null ? void 0 : _c.email) || t("hoxi.member.shell.guest");
      }
    );
    const userEmail = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.email) || "";
    });
    const userAvatar = computed(
      () => {
        var _a;
        return ((_a = user.value) == null ? void 0 : _a.avatarUrl) || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userEmail.value || userLabel.value || "hoxi")}`;
      }
    );
    const isMobileSubmenuExpanded = (key) => Boolean(mobileExpandedMap.value[key]);
    useColorMode();
    const currentLocale = computed(() => {
      const raw = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? String(locale.value) : String(locale || "en");
      if (raw === "zh-HK" || raw.toLowerCase() === "zh-hk" || raw.toLowerCase() === "zh-tw") return "zh-HK";
      if (raw.startsWith("zh")) return "zh";
      return "en";
    });
    const isZhFamily = computed(() => currentLocale.value === "zh" || currentLocale.value === "zh-HK");
    const currentLocaleOption = computed(() => localeOptions.find((opt) => opt.code === currentLocale.value) || localeOptions[0]);
    const siteName = computed(() => String(t("hoxi.brand.name") || "Hoxi"));
    const tagline = computed(() => String(currentLocale.value === "zh" && getSetting("site_tagline") || t("hoxi.brand.tagline")));
    const icpBeian = computed(() => String(getSetting("icp_beian") || "").trim());
    const githubUrl = computed(() => String(getSetting("github_url") || "").trim());
    const effectiveGithubUrl = computed(() => githubUrl.value || "https://github.com/hoxiai");
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const svgstatProject = computed(() => {
      const custom = String(getSetting("svgstat_project") || getSetting("analytics_svgstat_project") || "").trim();
      if (custom === "none" || custom === "false" || custom === "off") return "";
      return custom || "hoxi";
    });
    useHead(() => {
      if (!svgstatProject.value) return {};
      return {
        script: [{ src: "https://svgstat.com/sdk.js", defer: true, "data-project": svgstatProject.value }]
      };
    });
    const memberMenuItems = computed(() => [
      { key: "dashboard", to: "/user/dashboard", label: t("hoxi.member.shell.navEntry"), icon: "ph:squares-four-bold" },
      { key: "rewards", to: "/user/rewards", label: t("hoxi.member.nav.rewards"), icon: "ph:calendar-check-bold" },
      { key: "keys", to: "/user/keys", label: t("hoxi.member.nav.keys"), icon: "ph:key-bold" },
      { key: "tickets", to: "/user/tickets", label: t("hoxi.member.nav.tickets"), icon: "ph:chats-teardrop-bold" },
      { key: "account", to: "/user/account", label: t("hoxi.member.nav.account"), icon: "ph:gear-six-bold" }
    ]);
    const navItems = computed(() => [
      { key: "home", to: "/", label: t("hoxi.nav.home"), ready: true },
      {
        key: "soloBuilder",
        to: "/one-person-company",
        label: t("hoxi.nav.soloBuilder"),
        ready: true,
        menuTitle: t("hoxi.nav.soloMenuTitle"),
        menuAll: t("hoxi.nav.allSolo"),
        children: [
          { key: "soloPortal", to: "/one-person-company", label: t("hoxi.nav.soloPortal"), desc: t("hoxi.nav.soloPortalDesc"), icon: "ph:rocket-launch-bold" },
          { key: "readiness", to: "/readiness", label: t("hoxi.nav.readiness"), desc: t("hoxi.nav.readinessDesc"), icon: "ph:chart-polar-bold", badge: t("hoxi.nav.readinessBadge") },
          { key: "soloColumn", to: "/refactoring-the-self", label: t("hoxi.nav.soloColumn"), desc: t("hoxi.nav.soloColumnDesc"), icon: "ph:book-bookmark-bold" }
        ]
      },
      {
        key: "savings",
        to: "/savings",
        label: t("hoxi.nav.savings"),
        ready: true,
        menuTitle: t("hoxi.nav.savingsMenuTitle"),
        menuAll: t("hoxi.nav.allSavings"),
        children: [
          { key: "models", to: "/models", label: t("hoxi.nav.models"), desc: t("hoxi.nav.modelsDesc"), icon: "ph:trophy-bold" },
          { key: "gateways", to: "/gateways", label: t("hoxi.nav.gateways"), desc: t("hoxi.nav.gatewaysDesc"), icon: "ph:lightning-bold" },
          { key: "plans", to: "/coding-plans", label: t("hoxi.nav.plans"), desc: t("hoxi.nav.plansDesc"), icon: "ph:package-bold" }
        ]
      },
      { key: "posts", to: "/blog", label: t("hoxi.nav.posts"), ready: true },
      {
        key: "tools",
        to: "/tools",
        label: t("hoxi.nav.tools"),
        ready: true,
        menuTitle: t("hoxi.nav.toolsMenuTitle"),
        menuAll: t("hoxi.nav.allTools"),
        children: [
          { key: "toolsCatalog", to: "/tools", label: t("hoxi.nav.toolsCatalog"), desc: t("hoxi.nav.toolsDesc"), icon: "ph:wrench-bold" },
          { key: "skills", to: "/skills", label: t("hoxi.nav.skills"), desc: t("hoxi.nav.skillsDesc"), icon: "ph:puzzle-piece-bold" },
          { key: "projects", to: "/projects", label: t("hoxi.nav.projects"), desc: t("hoxi.nav.projectsDesc"), icon: "ph:cube-bold" }
        ]
      },
      { key: "download", to: "/download", label: t("hoxi.nav.download"), ready: true },
      { key: "about", to: "/about", label: t("hoxi.nav.about"), ready: true }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EmailVerificationBanner = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_HoxiLogoIcon = __nuxt_component_2;
      const _component_UIcon = _sfc_main$Y;
      const _component_HoxiCommunityModal = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans transition-colors duration-150",
        style: { "--hoxi-header-offset": "64px" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_EmailVerificationBanner, null, null, _parent));
      _push(`<div class="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800"><header><div class="max-w-[1280px] mx-auto px-4 md:px-6"><div class="flex items-center justify-between h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "flex items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HoxiLogoIcon, { class: "h-7 w-7 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-150 group-hover:scale-105" }, null, _parent2, _scopeId));
            _push2(`<span class="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId}> Hoxi </span>`);
          } else {
            return [
              createVNode(_component_HoxiLogoIcon, { class: "h-7 w-7 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-150 group-hover:scale-105" }),
              createVNode("span", { class: "text-lg font-extrabold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, " Hoxi ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-7"><!--[-->`);
      ssrRenderList(navItems.value, (item) => {
        _push(`<!--[-->`);
        if (item.children && item.children.length) {
          _push(`<div class="relative group py-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(item.to),
            class: "inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:caret-down-bold",
                  class: "w-3 h-3 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:rotate-180 transition-transform duration-200 dark:text-slate-500"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(item.label), 1),
                  createVNode(_component_UIcon, {
                    name: "ph:caret-down-bold",
                    class: "w-3 h-3 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:rotate-180 transition-transform duration-200 dark:text-slate-500"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 pt-2 w-84 z-50 pointer-events-none group-hover:pointer-events-auto"><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2 shadow-xs space-y-1"><div class="px-3 py-1.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 mb-1"><span class="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider">${ssrInterpolate(item.menuTitle)}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(item.to),
            class: "text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(item.menuAll)}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-3 h-3"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(item.menuAll), 1),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3 h-3"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><!--[-->`);
          ssrRenderList(item.children, (sub) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: sub.key,
              to: unref(localePath)(sub.to),
              class: "flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group/sub"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover/sub:bg-blue-50 dark:group-hover/sub:bg-blue-950/50 group-hover/sub:text-blue-600 dark:group-hover/sub:text-blue-400 transition-colors text-sm mt-0.5"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: sub.icon,
                    class: "w-4 h-4"
                  }, null, _parent2, _scopeId));
                  _push2(`</div><div class="min-w-0 flex-1"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><span class="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/sub:text-blue-600 dark:group-hover/sub:text-blue-400 transition-colors"${_scopeId}>${ssrInterpolate(sub.label)}</span>`);
                  if (sub.badge) {
                    _push2(`<span class="px-1.5 py-0.2 rounded text-[10px] font-medium bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40"${_scopeId}>${ssrInterpolate(sub.badge)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5 truncate"${_scopeId}>${ssrInterpolate(sub.desc)}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover/sub:bg-blue-50 dark:group-hover/sub:bg-blue-950/50 group-hover/sub:text-blue-600 dark:group-hover/sub:text-blue-400 transition-colors text-sm mt-0.5" }, [
                      createVNode(_component_UIcon, {
                        name: sub.icon,
                        class: "w-4 h-4"
                      }, null, 8, ["name"])
                    ]),
                    createVNode("div", { class: "min-w-0 flex-1" }, [
                      createVNode("div", { class: "flex items-center gap-1.5" }, [
                        createVNode("span", { class: "text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/sub:text-blue-600 dark:group-hover/sub:text-blue-400 transition-colors" }, toDisplayString(sub.label), 1),
                        sub.badge ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "px-1.5 py-0.2 rounded text-[10px] font-medium bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40"
                        }, toDisplayString(sub.badge), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("p", { class: "text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5 truncate" }, toDisplayString(sub.desc), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div></div>`);
        } else if (item.ready) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(item.to),
            class: "inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
                if (item.badge) {
                  _push2(`<span class="px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 leading-tight"${_scopeId}>${ssrInterpolate(item.badge)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("span", null, toDisplayString(item.label), 1),
                  item.badge ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 leading-tight"
                  }, toDisplayString(item.badge), 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span class="text-sm font-medium text-slate-300 dark:text-slate-600 cursor-default py-2">${ssrInterpolate(item.label)}<span class="sr-only">\uFF08${ssrInterpolate(_ctx.$t("hoxi.nav.comingSoon"))}\uFF09</span></span>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></nav><div class="flex items-center gap-2 md:gap-3"><div class="relative group py-1.5"><button type="button" class="inline-flex items-center gap-2 pl-1.5 pr-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"${ssrRenderAttr("aria-label", _ctx.$t("hoxi.layout.userMenu"))}${ssrRenderAttr("aria-expanded", userMenuOpen.value)}>`);
      if (unref(loggedIn)) {
        _push(`<span class="relative inline-flex shrink-0"><img${ssrRenderAttr("src", userAvatar.value)}${ssrRenderAttr("alt", userLabel.value)} class="h-6 w-6 rounded-full object-cover border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"><span class="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-white dark:border-slate-950 bg-emerald-500"></span></span>`);
      } else {
        _push(`<span class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:user-bold",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`</span>`);
      }
      _push(`<span class="hidden sm:inline max-w-[96px] truncate">${ssrInterpolate(unref(loggedIn) ? userLabel.value : _ctx.$t("hoxi.auth.signIn"))}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: ["w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-transform duration-200", userMenuOpen.value ? "rotate-180" : "group-hover:rotate-180"]
      }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([userMenuOpen.value ? "visible opacity-100 pointer-events-auto" : "invisible group-hover:visible opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto", "transition-all duration-150 absolute top-full right-0 pt-2 w-60 z-50"])}"><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2 shadow-xs space-y-1">`);
      if (unref(loggedIn)) {
        _push(`<!--[--><div class="px-2.5 py-2 flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800/80 mb-1"><img${ssrRenderAttr("src", userAvatar.value)}${ssrRenderAttr("alt", userLabel.value)} class="h-8 w-8 shrink-0 rounded-full object-cover border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"><div class="min-w-0 flex-1"><div class="text-xs font-semibold text-slate-900 dark:text-white truncate">${ssrInterpolate(userLabel.value)}</div>`);
        if (userEmail.value) {
          _push(`<div class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${ssrInterpolate(userEmail.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><!--[-->`);
        ssrRenderList(memberMenuItems.value, (mItem) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: mItem.key,
            to: unref(localePath)(mItem.to),
            class: "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
            onClick: ($event) => userMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: mItem.icon,
                  class: "w-4 h-4 text-slate-400 dark:text-slate-500"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(mItem.label)}</span>`);
              } else {
                return [
                  createVNode(_component_UIcon, {
                    name: mItem.icon,
                    class: "w-4 h-4 text-slate-400 dark:text-slate-500"
                  }, null, 8, ["name"]),
                  createVNode("span", null, toDisplayString(mItem.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><div class="border-t border-slate-100 dark:border-slate-800/80 my-1"></div><button type="button" class="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chat-circle-dots-bold",
          class: "w-4 h-4 text-slate-400 dark:text-slate-500"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.layout.communityBtn"))}</span></button><div class="border-t border-slate-100 dark:border-slate-800/80 my-1"></div><button type="button" class="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer text-left">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sign-out-bold",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.member.account.logoutBtn"))}</span></button><!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/auth/login"),
          class: "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
          onClick: ($event) => userMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sign-in-bold",
                class: "w-4 h-4 text-slate-400 dark:text-slate-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.auth.signIn"))}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:sign-in-bold",
                  class: "w-4 h-4 text-slate-400 dark:text-slate-500"
                }),
                createVNode("span", null, toDisplayString(_ctx.$t("hoxi.auth.signIn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/auth/register"),
          class: "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
          onClick: ($event) => userMenuOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:user-plus-bold",
                class: "w-4 h-4 text-slate-400 dark:text-slate-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.auth.createAccount"))}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:user-plus-bold",
                  class: "w-4 h-4 text-slate-400 dark:text-slate-500"
                }),
                createVNode("span", null, toDisplayString(_ctx.$t("hoxi.auth.createAccount")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="border-t border-slate-100 dark:border-slate-800/80 my-1"></div><button type="button" class="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-left">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chat-circle-dots-bold",
          class: "w-4 h-4 text-slate-400 dark:text-slate-500"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.layout.communityBtn"))}</span></button><!--]-->`);
      }
      _push(`</div></div></div><div class="relative group py-1.5"><button type="button" class="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"${ssrRenderAttr("title", _ctx.$t("hoxi.layout.switchLang"))}${ssrRenderAttr("aria-label", _ctx.$t("hoxi.layout.switchLang"))}${ssrRenderAttr("aria-expanded", langMenuOpen.value)}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:translate-bold",
        class: "w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(currentLocaleOption.value.shortLabel)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: ["w-2.5 h-2.5 text-slate-400 dark:text-slate-500 transition-transform duration-200", langMenuOpen.value ? "rotate-180" : "group-hover:rotate-180"]
      }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([langMenuOpen.value ? "visible opacity-100 pointer-events-auto" : "invisible group-hover:visible opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto", "transition-all duration-150 absolute top-full right-0 pt-2 w-40 z-50"])}"><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-1.5 shadow-xs space-y-0.5"><!--[-->`);
      ssrRenderList(localeOptions, (opt) => {
        _push(`<button type="button" class="${ssrRenderClass([currentLocale.value === opt.code ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold" : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60", "w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer"])}"><span>${ssrInterpolate(opt.label)}</span>`);
        if (currentLocale.value === opt.code) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-bold",
            class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div></div></div><a${ssrRenderAttr("href", effectiveGithubUrl.value)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900"${ssrRenderAttr("title", _ctx.$t("hoxi.layout.githubTitle"))} aria-label="GitHub"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"></path></svg></a><button type="button" class="inline-flex items-center justify-center p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900"${ssrRenderAttr("title", _ctx.$t("hoxi.layout.toggleTheme"))}${ssrRenderAttr("aria-label", _ctx.$t("hoxi.layout.toggleTheme"))}><svg class="hidden dark:block w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg><svg class="block dark:hidden w-4 h-4 text-slate-600 dark:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2m-7.07-19.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg></button><button type="button" class="md:hidden p-1.5 -mr-1 text-slate-600 dark:text-slate-400"${ssrRenderAttr("aria-label", mobileOpen.value ? _ctx.$t("hoxi.nav.closeMenu") : _ctx.$t("hoxi.nav.openMenu"))}${ssrRenderAttr("aria-expanded", mobileOpen.value)}><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">`);
      if (mobileOpen.value) {
        _push(`<path d="M6 6l12 12M18 6L6 18"></path>`);
      } else {
        _push(`<path d="M4 7h16M4 12h16M4 17h16"></path>`);
      }
      _push(`</svg></button></div></div></div>`);
      if (mobileOpen.value) {
        _push(`<div class="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950"><div class="max-w-[1280px] mx-auto px-4 py-3 space-y-1"><!--[-->`);
        ssrRenderList(navItems.value, (item) => {
          _push(`<!--[-->`);
          if (item.children && item.children.length) {
            _push(`<div class="space-y-1"><div class="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)(item.to),
              class: "flex-1 hover:text-blue-500 dark:hover:text-blue-400",
              onClick: ($event) => mobileOpen.value = false
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<button type="button" class="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors dark:text-slate-500"${ssrRenderAttr("aria-label", _ctx.$t("hoxi.layout.expandSavingsMenu"))}>`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-down-bold",
              class: ["w-3.5 h-3.5 transition-transform duration-200", { "rotate-180": isMobileSubmenuExpanded(item.key) }]
            }, null, _parent));
            _push(`</button></div>`);
            if (isMobileSubmenuExpanded(item.key)) {
              _push(`<div class="pl-3 pr-1 py-1 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-4"><!--[-->`);
              ssrRenderList(item.children, (sub) => {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  key: sub.key,
                  to: unref(localePath)(sub.to),
                  class: "flex items-center justify-between px-2.5 py-1.5 text-xs text-slate-600 dark:text-slate-300 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
                  onClick: ($event) => mobileOpen.value = false
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: sub.icon,
                        class: "w-3.5 h-3.5 text-slate-400 dark:text-slate-500"
                      }, null, _parent2, _scopeId));
                      _push2(`<span${_scopeId}>${ssrInterpolate(sub.label)}</span></div>`);
                      if (sub.badge) {
                        _push2(`<span class="px-1.5 py-0.2 rounded text-[9px] font-medium bg-blue-500/10 text-blue-700 dark:text-blue-400"${_scopeId}>${ssrInterpolate(sub.badge)}</span>`);
                      } else {
                        _push2(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: sub.icon,
                            class: "w-3.5 h-3.5 text-slate-400 dark:text-slate-500"
                          }, null, 8, ["name"]),
                          createVNode("span", null, toDisplayString(sub.label), 1)
                        ]),
                        sub.badge ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "px-1.5 py-0.2 rounded text-[9px] font-medium bg-blue-500/10 text-blue-700 dark:text-blue-400"
                        }, toDisplayString(sub.badge), 1)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else if (item.ready) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)(item.to),
              class: "flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
              onClick: ($event) => mobileOpen.value = false
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
                  if (item.badge) {
                    _push2(`<span class="px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 leading-tight"${_scopeId}>${ssrInterpolate(item.badge)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("span", null, toDisplayString(item.label), 1),
                    item.badge ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 leading-tight"
                    }, toDisplayString(item.badge), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<span class="block px-3 py-2 text-sm text-slate-300 dark:text-slate-600">${ssrInterpolate(item.label)}<span class="sr-only">\uFF08${ssrInterpolate(_ctx.$t("hoxi.nav.comingSoon"))}\uFF09</span></span>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--><div class="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(unref(loggedIn) ? "/user/dashboard" : "/auth/login"),
          class: "flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-blue-500 dark:hover:text-blue-400 transition-colors",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:user-circle-bold",
                class: "w-4 h-4 text-slate-400 dark:text-slate-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(loggedIn) ? _ctx.$t("hoxi.member.shell.navEntry") : _ctx.$t("hoxi.auth.signIn"))}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:user-circle-bold",
                  class: "w-4 h-4 text-slate-400 dark:text-slate-500"
                }),
                createVNode("span", null, toDisplayString(unref(loggedIn) ? _ctx.$t("hoxi.member.shell.navEntry") : _ctx.$t("hoxi.auth.signIn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chat-circle-dots-bold",
          class: "w-4 h-4 text-slate-400 dark:text-slate-500"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.layout.communityBtn"))}</span></button><div class="px-3 py-1.5 flex items-center justify-between gap-2"><span class="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:translate-bold",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.layout.switchLang"))}</span></span><div class="inline-flex rounded-lg border border-slate-200 dark:border-slate-800 p-0.5 bg-slate-50 dark:bg-slate-900"><!--[-->`);
        ssrRenderList(localeOptions, (opt) => {
          _push(`<button type="button" class="${ssrRenderClass([currentLocale.value === opt.code ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold shadow-2xs" : "text-slate-600 dark:text-slate-400", "px-2 py-1 rounded-md text-xs transition-colors"])}">${ssrInterpolate(opt.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
        if (unref(loggedIn)) {
          _push(`<button type="button" class="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors text-left">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:sign-out-bold",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.member.account.logoutBtn"))}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header></div><div class="h-16"></div><main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="${ssrRenderClass([isMemberRoute.value ? "xl:pl-64" : "", "border-t border-slate-100 dark:border-slate-800/80"])}"><div class="max-w-[1280px] mx-auto px-4 md:px-6 py-8"><div class="flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-xs text-slate-500 dark:text-slate-400"> \xA9 ${ssrInterpolate(unref(year))} ${ssrInterpolate(siteName.value)} \xB7 ${ssrInterpolate(tagline.value)}</p><div class="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">`);
      if (isZhFamily.value) {
        _push(`<button type="button" class="transition-colors hover:text-blue-600 dark:hover:text-blue-400 font-medium">${ssrInterpolate(_ctx.$t("hoxi.footer.community"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", effectiveGithubUrl.value)} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-slate-700 dark:hover:text-slate-200 inline-flex items-center gap-1"><span>GitHub</span></a><a${ssrRenderAttr("href", isZhFamily.value ? "/legal/privacy-zh.html" : "/legal/privacy-en.html")} target="_blank" class="transition-colors hover:text-slate-700 dark:hover:text-slate-200">${ssrInterpolate(_ctx.$t("hoxi.footer.privacy"))}</a><a${ssrRenderAttr("href", isZhFamily.value ? "/legal/terms-zh.html" : "/legal/terms-en.html")} target="_blank" class="transition-colors hover:text-slate-700 dark:hover:text-slate-200">${ssrInterpolate(_ctx.$t("hoxi.footer.terms"))}</a><span>${ssrInterpolate(_ctx.$t("hoxi.footer.dataNote"))}</span>`);
      if (icpBeian.value) {
        _push(`<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">${ssrInterpolate(icpBeian.value)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></footer>`);
      _push(ssrRenderComponent(_component_HoxiCommunityModal, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BSUQTTl6.mjs.map
