import { _ as __nuxt_component_0 } from './EmailVerificationBanner-v6fzCPMr.mjs';
import { r as useSettings, D as useLocaleRouter, u as useI18n, J as useHead, N as __nuxt_component_3$3, _ as _sfc_main$V } from './server.mjs';
import __nuxt_component_2 from './HoxiLogoIcon-CLwAteRV.mjs';
import __nuxt_component_4 from './HoxiCommunityModal-CuljoxR-.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHoxiCommunity } from './useHoxiCommunity-TTPQpYm7.mjs';
import { u as useColorMode } from './composables-BmYjbj_w.mjs';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
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
    toolsDesc: "Hosting, DB, auth & global payment stack for solo builders",
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
  tools: {
    title: "Tools",
    subtitle: "Common tools for building, deploying, getting paid and working with AI as an indie developer.",
    seoTitle: "Tools - build, deploy and get paid as an indie developer",
    seoDescription: "Common indie developer tools: AI coding, hosting, databases, domains and international payments."
  },
  home: {
    heroBadge: "macOS Native \xB7 100% Open Source",
    titleLine1: "One Open Agentic Workspace",
    titleLine2: "For Every Developer Workflow",
    title: "Hoxi \u2014 One Open Agentic Workspace for Every Developer Workflow",
    subtitle: "Run parallel AI coding sessions in one native window. Built-in model leaderboard, high-speed gateways, and 100% BYOK with zero lock-in.",
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
    seoDescription: "For developers, PMs and other IT people: 12 scenario questions on validation, delivery, distribution, cost and mindset."
  },
  projects: {
    title: "Projects",
    subtitle: "AI workspaces, gateways, and SaaS products built & operated solo.",
    seoTitle: "Solo-Built AI Products & Open Source Projects",
    seoDescription: "Coller's AI products: Hoxi Desktop, Hoxi AI, AINode Gateway, Qingpu AI and apay.",
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
    closeLabel: "Close"
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
    mirrorCn: "GitCode Mirror",
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
    bentoModelTitle: "50+ Models & Gateways",
    bentoModelDesc: "Live benchmarks at cost \u2014 connect high-speed gateways in 1 click or bring your own key.",
    bentoOpenTitle: "100% Open Source",
    bentoOpenDesc: "Code and keys stay on your machine. Zero black boxes, zero hidden markup.",
    pillarsBadge: "BUILT DIFFERENTLY",
    pillarsTitle: "Built to work for you, not lock you in",
    pillarsSub: "Parallel branches, transparent pricing, and full local control.",
    p1Tag: "Parallel Agents",
    p1Title: "One window, multiple agents",
    p1Desc: "Every session runs in an isolated Git worktree. Ship features in parallel and merge with visual diffs.",
    p2Tag: "Aligned Pricing",
    p2Title: "Models at cost. No lock-in.",
    p2Desc: "Bring your own API keys for free, or connect verified high-speed gateways to save 35%\u201360%.",
    p3Tag: "Full Control",
    p3Title: "Persistent memory & safety gates",
    p3Desc: "Local Markdown memory preserves project context across sessions; destructive shell commands require approval.",
    tabWorktree: "01 \xB7 Worktrees",
    tabMemory: "02 \xB7 Memory",
    tabSteer: "03 \xB7 Live Steer",
    tabHandoff: "04 \xB7 CLI Handoff",
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
    faq4A: "Yes. All code, memory files, and keys stay on your local machine. Destructive shell commands (rm, sudo, force-push) are intercepted for human approval."
  },
  download: {
    title: "Download Hoxi Desktop",
    subtitle: "A native AI engineering workspace with parallel coding agents and a bundled OpenCode runtime. Installers, checksums and version history are synced from my release pipeline \u2014 no manual upkeep.",
    seoTitle: "Download Hoxi Desktop \u2014 macOS / Windows / Linux installers & release history | Hoxi AI",
    seoDescription: "Official download page for Hoxi Desktop: macOS (Apple Silicon), Windows (x64) and Linux (x64) installers with GitCode and GitHub mirrors, file size, SHA-256 checksums and full release notes from the release system.",
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
    historyTitle: "Release history",
    historySub: "Release notes and per-platform installers, synced from the published release records.",
    historyNoNotes: "No release notes for this version.",
    historyEmpty: "No releases published yet.",
    allVersions: "All versions & release notes"
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
    toolsDesc: "\u5EFA\u7AD9\u3001\u90E8\u7F72\u3001\u6570\u636E\u5E93\u4E0E\u6D77\u5916\u6536\u6B3E\u5E38\u7528\u5DE5\u5177",
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
  tools: {
    title: "\u5168\u6808\u5DE5\u5177\u7BB1",
    seoTitle: "\u5168\u6808\u5DE5\u5177\u7BB1 - \u4E00\u4EBA\u516C\u53F8\u5E38\u7528\u7684\u5F00\u53D1\u3001\u90E8\u7F72\u4E0E\u6536\u6B3E\u5DE5\u5177",
    seoDescription: "\u72EC\u7ACB\u5F00\u53D1\u5E38\u7528\u5DE5\u5177\uFF1AAI \u7F16\u7A0B\u3001\u90E8\u7F72\u3001\u6570\u636E\u5E93\u3001\u57DF\u540D\u4E0E\u6D77\u5916\u6536\u6B3E"
  },
  home: {
    heroBadge: "macOS \u539F\u751F \xB7 100% \u5F00\u6E90",
    titleLine1: "\u4E00\u4E2A\u5F00\u653E\u7684 AI \u7814\u53D1\u5DE5\u4F5C\u53F0",
    titleLine2: "\u7EDF\u5FA1\u6BCF\u4E00\u4E2A\u5F00\u53D1\u8005\u5DE5\u4F5C\u6D41",
    title: "Hoxi \u2014 \u4E00\u4E2A\u5F00\u653E\u7684 AI \u7814\u53D1\u5DE5\u4F5C\u53F0\uFF0C\u7EDF\u5FA1\u6BCF\u4E00\u4E2A\u5F00\u53D1\u8005\u5DE5\u4F5C\u6D41",
    subtitle: "\u5728\u4E00\u4E2A\u539F\u751F\u7A97\u53E3\u5185\u5E76\u884C\u8FD0\u884C\u591A\u4E2A AI \u4F1A\u8BDD\u3002\u5185\u7F6E\u771F\u5B9E\u6A21\u578B\u699C\u5355\u4E0E\u9AD8\u6027\u4EF7\u6BD4\u4E13\u7EBF\uFF0C\u652F\u6301\u81EA\u6709 Key\uFF0C\u96F6\u6346\u7ED1\u3002",
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
    seoDescription: "\u9762\u5411\u7A0B\u5E8F\u5458\u3001\u4EA7\u54C1\u7ECF\u7406\u7B49 IT \u540C\u884C\uFF1A12 \u9053\u5B9E\u6218\u60C5\u666F\u9898\uFF0C\u770B\u4F60\u5728\u505A\u4EA7\u54C1\u3001\u5546\u4E1A\u53D8\u73B0\u3001\u6D41\u91CF\u83B7\u5BA2\u3001\u7B97\u529B\u6210\u672C\u548C\u6297\u632B\u5FC3\u6001\u4E0A\u7684\u771F\u5B9E\u77ED\u677F"
  },
  projects: {
    title: "\u5B9E\u6218\u9879\u76EE",
    subtitle: "\u6211\u4E00\u4E2A\u4EBA\u7ED3\u5408 AI \u72EC\u7ACB\u5F00\u53D1\u5E76\u6301\u7EED\u7EF4\u62A4\u7684\u4EA7\u54C1\u77E9\u9635",
    seoTitle: "AI \u5B9E\u6218\u9879\u76EE - \u4E00\u4EBA\u516C\u53F8\u771F\u5B9E\u4EA7\u54C1\u843D\u5730",
    seoDescription: "\u53EF\u4E50\u72EC\u7ACB\u7814\u53D1\u5E76\u8FD0\u8425\u7684 AI \u4EA7\u54C1\u77E9\u9635\uFF1AHoxi Desktop\u3001\u53EF\u559C AI\u3001AINode\u3001\u8F7B\u94FA AI \u4E0E apay \u6846\u67B6",
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
    closeLabel: "\u5173\u95ED"
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
    mirrorCn: "\u56FD\u5185\u955C\u50CF (GitCode)",
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
    bentoModelTitle: "50+ \u6A21\u578B\u4E0E\u4F18\u60E0\u4E13\u7EBF",
    bentoModelDesc: "\u5B9E\u6D4B\u8DD1\u5206\u4E0E\u771F\u5B9E\u5E95\u4EF7\uFF0C\u4E00\u952E\u76F4\u8FDE\u4E2D\u8F6C\u7AD9\u6216\u4F7F\u7528\u81EA\u6709 Key",
    bentoOpenTitle: "100% \u5F00\u6E90\u900F\u660E",
    bentoOpenDesc: "\u4EE3\u7801\u4E0E\u5BC6\u94A5\u5B8C\u5168\u7559\u5728\u672C\u5730\uFF0C\u96F6\u9ED1\u76D2\u3001\u96F6\u9690\u5F62\u52A0\u4EF7",
    pillarsBadge: "BUILT DIFFERENTLY",
    pillarsTitle: "\u4E3A\u4F60\u6253\u5DE5\uFF0C\u800C\u4E0D\u662F\u628A\u4F60\u9501\u8FDB\u9ED1\u76D2",
    pillarsSub: "\u591A\u5206\u652F\u5E76\u884C\u3001\u4EF7\u683C\u900F\u660E\u3001\u5168\u94FE\u8DEF\u672C\u5730\u53EF\u63A7",
    p1Tag: "\u5E76\u884C\u5F00\u53D1",
    p1Title: "\u4E00\u4E2A\u7A97\u53E3\uFF0C\u591A\u4E2A Agent \u5E76\u884C",
    p1Desc: "\u6BCF\u4E2A\u4F1A\u8BDD\u72EC\u7ACB Git Worktree \u6C99\u7BB1\uFF0C\u540C\u65F6\u6539\u591A\u4E2A\u529F\u80FD\u4E5F\u4E0D\u51B2\u7A81\uFF0C\u5199\u5B8C\u4E00\u952E Diff \u5408\u5E76\u3002",
    p2Tag: "\u7B97\u529B\u81EA\u7531",
    p2Title: "\u5E95\u4EF7\u7528\u6A21\u578B\uFF0C\u7EDD\u4E0D\u6346\u7ED1\u62BD\u6210",
    p2Desc: "\u81EA\u5E26\u4EFB\u610F API Key \u96F6\u8D39\u7528\uFF1B\u6216\u4E00\u952E\u63A5\u5165\u5B9E\u6D4B\u4F18\u9009\u4E13\u7EBF\uFF0C\u7B97\u529B\u6210\u672C\u7ACB\u7701 35%~60%\u3002",
    p3Tag: "\u6301\u4E45\u53EF\u63A7",
    p3Title: "\u8DE8\u4F1A\u8BDD\u957F\u6548\u8BB0\u5FC6\uFF0C\u9AD8\u5371\u6307\u4EE4\u5FC5\u786E\u8BA4",
    p3Desc: "\u672C\u5730 Markdown \u81EA\u52A8\u6C89\u6DC0\u9879\u76EE\u67B6\u6784\uFF0C\u5207\u6362\u6A21\u578B\u4E0D\u5931\u5FC6\uFF1B\u5371\u9669\u7EC8\u7AEF\u547D\u4EE4\u81EA\u52A8\u62E6\u622A\u3002",
    tabWorktree: "01 \xB7 \u5E76\u884C\u5206\u652F",
    tabMemory: "02 \xB7 \u9879\u76EE\u8BB0\u5FC6",
    tabSteer: "03 \xB7 \u5B9E\u65F6\u7EA0\u504F",
    tabHandoff: "04 \xB7 CLI \u63A5\u529B",
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
    faq4A: "\u6240\u6709\u4EE3\u7801\u3001\u8BB0\u5FC6\u6587\u4EF6\u4E0E\u5BC6\u94A5\u5747\u4FDD\u5B58\u5728\u672C\u5730\u8BBE\u5907\u3002\u6D89\u53CA rm\u3001sudo\u3001\u5F3A\u63A8\u7B49\u5371\u9669\u7EC8\u7AEF\u547D\u4EE4\u4F1A\u5F3A\u5236\u62E6\u622A\u5E76\u5F39\u7A97\u786E\u8BA4\u3002"
  },
  download: {
    title: "\u4E0B\u8F7D Hoxi Desktop",
    subtitle: "\u591A Agent \u5E76\u884C\u7684\u539F\u751F AI \u7814\u53D1\u5DE5\u4F5C\u53F0\uFF0C\u5185\u7F6E OpenCode \u8FD0\u884C\u65F6\u3002\u5B89\u88C5\u5305\u3001\u6821\u9A8C\u503C\u4E0E\u5386\u53F2\u7248\u672C\u6211\u90FD\u4ECE\u53D1\u5E03\u7CFB\u7EDF\u5B9E\u65F6\u540C\u6B65\uFF0C\u4E0D\u624B\u5DE5\u7EF4\u62A4\u3002",
    seoTitle: "\u4E0B\u8F7D Hoxi Desktop \u2014 macOS / Windows / Linux \u5B89\u88C5\u5305\u4E0E\u5386\u53F2\u7248\u672C | \u53EF\u559C AI",
    seoDescription: "Hoxi Desktop \u5B98\u65B9\u4E0B\u8F7D\u9875\uFF1AmacOS (Apple Silicon)\u3001Windows (x64)\u3001Linux (x64) \u5B89\u88C5\u5305\uFF0CGitCode \u4E0E GitHub \u53CC\u955C\u50CF\uFF0C\u4F53\u79EF\u4E0E SHA-256 \u6821\u9A8C\u503C\u3001\u5386\u53F2\u7248\u672C\u66F4\u65B0\u8BF4\u660E\u5168\u90E8\u6765\u81EA\u53D1\u5E03\u7CFB\u7EDF\u3002",
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
    historyTitle: "\u7248\u672C\u5386\u53F2",
    historySub: "\u6BCF\u4E2A\u7248\u672C\u7684\u66F4\u65B0\u8BF4\u660E\u4E0E\u5404\u5E73\u53F0\u5B89\u88C5\u5305\uFF0C\u6211\u6309\u53D1\u5E03\u8BB0\u5F55\u5B9E\u65F6\u540C\u6B65\u3002",
    historyNoNotes: "\u8BE5\u7248\u672C\u672A\u9644\u66F4\u65B0\u8BF4\u660E\u3002",
    historyEmpty: "\u6682\u65E0\u53D1\u5E03\u8BB0\u5F55\u3002",
    allVersions: "\u5168\u90E8\u7248\u672C\u4E0E\u66F4\u65B0\u65E5\u5FD7"
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
    if (mergeLocaleMessage) {
      mergeLocaleMessage("en", { hoxi: en });
      mergeLocaleMessage("zh", { hoxi: zh });
    }
    const mobileOpen = ref(false);
    const mobileExpandedMap = ref({
      soloBuilder: true,
      savings: true
    });
    const isMobileSubmenuExpanded = (key) => Boolean(mobileExpandedMap.value[key]);
    const colorMode = useColorMode();
    computed(() => colorMode.value === "dark");
    const currentLocale = computed(() => {
      const raw = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? String(locale.value) : String(locale || "en");
      return raw.startsWith("zh") ? "zh" : "en";
    });
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
        script: [
          {
            src: "https://svgstat.com/sdk.js",
            defer: true,
            "data-project": svgstatProject.value
          }
        ]
      };
    });
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
          {
            key: "soloPortal",
            to: "/one-person-company",
            label: t("hoxi.nav.soloPortal"),
            desc: t("hoxi.nav.soloPortalDesc"),
            icon: "ph:rocket-launch-bold"
          },
          {
            key: "readiness",
            to: "/readiness",
            label: t("hoxi.nav.readiness"),
            desc: t("hoxi.nav.readinessDesc"),
            icon: "ph:chart-polar-bold",
            badge: t("hoxi.nav.readinessBadge")
          },
          {
            key: "soloColumn",
            to: "/refactoring-the-self",
            label: t("hoxi.nav.soloColumn"),
            desc: t("hoxi.nav.soloColumnDesc"),
            icon: "ph:book-bookmark-bold"
          }
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
          {
            key: "models",
            to: "/models",
            label: t("hoxi.nav.models"),
            desc: t("hoxi.nav.modelsDesc"),
            icon: "ph:trophy-bold"
          },
          {
            key: "gateways",
            to: "/gateways",
            label: t("hoxi.nav.gateways"),
            desc: t("hoxi.nav.gatewaysDesc"),
            icon: "ph:lightning-bold"
          },
          {
            key: "plans",
            to: "/coding-plans",
            label: t("hoxi.nav.plans"),
            desc: t("hoxi.nav.plansDesc"),
            icon: "ph:package-bold"
          }
        ]
      },
      { key: "posts", to: "/blog", label: t("hoxi.nav.posts"), ready: true },
      { key: "projects", to: "/projects", label: t("hoxi.nav.projects"), ready: true },
      { key: "download", to: "/download", label: t("hoxi.nav.download"), ready: true },
      { key: "about", to: "/about", label: t("hoxi.nav.about"), ready: true }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EmailVerificationBanner = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_HoxiLogoIcon = __nuxt_component_2;
      const _component_UIcon = _sfc_main$V;
      const _component_HoxiCommunityModal = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans transition-colors duration-150" }, _attrs))}>`);
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
      _push(`<!--]--></nav><div class="flex items-center gap-2 md:gap-3"><button type="button" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white rounded-lg transition-colors cursor-pointer"><span class="hidden sm:inline">${ssrInterpolate(_ctx.$t("hoxi.layout.communityBtn"))}</span><span class="sm:hidden">${ssrInterpolate(_ctx.$t("hoxi.layout.communityShort"))}</span></button><button type="button" class="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"${ssrRenderAttr("title", _ctx.$t("hoxi.layout.switchLang"))}${ssrRenderAttr("aria-label", _ctx.$t("hoxi.layout.switchLang"))}><span>${ssrInterpolate(currentLocale.value === "en" ? "\u4E2D\u6587" : "EN")}</span></button><a${ssrRenderAttr("href", effectiveGithubUrl.value)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900"${ssrRenderAttr("title", _ctx.$t("hoxi.layout.githubTitle"))} aria-label="GitHub"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"></path></svg></a><button type="button" class="inline-flex items-center justify-center p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900"${ssrRenderAttr("title", _ctx.$t("hoxi.layout.toggleTheme"))}${ssrRenderAttr("aria-label", _ctx.$t("hoxi.layout.toggleTheme"))}><svg class="hidden dark:block w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg><svg class="block dark:hidden w-4 h-4 text-slate-600 dark:text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></button><button type="button" class="md:hidden p-1.5 -mr-1 text-slate-600 dark:text-slate-400"${ssrRenderAttr("aria-label", mobileOpen.value ? _ctx.$t("hoxi.nav.closeMenu") : _ctx.$t("hoxi.nav.openMenu"))}${ssrRenderAttr("aria-expanded", mobileOpen.value)}><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">`);
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
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header></div><div class="h-16"></div><main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-slate-100 dark:border-slate-800/80"><div class="max-w-[1280px] mx-auto px-4 md:px-6 py-8"><div class="flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-xs text-slate-500 dark:text-slate-400"> \xA9 ${ssrInterpolate(unref(year))} ${ssrInterpolate(siteName.value)} \xB7 ${ssrInterpolate(tagline.value)}</p><div class="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">`);
      if (currentLocale.value === "zh") {
        _push(`<button type="button" class="transition-colors hover:text-blue-600 dark:hover:text-blue-400 font-medium">${ssrInterpolate(_ctx.$t("hoxi.footer.community"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", effectiveGithubUrl.value)} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-slate-700 dark:hover:text-slate-200 inline-flex items-center gap-1"><span>GitHub</span></a><a${ssrRenderAttr("href", currentLocale.value === "zh" ? "/legal/privacy-zh.html" : "/legal/privacy-en.html")} target="_blank" class="transition-colors hover:text-slate-700 dark:hover:text-slate-200">${ssrInterpolate(_ctx.$t("hoxi.footer.privacy"))}</a><a${ssrRenderAttr("href", currentLocale.value === "zh" ? "/legal/terms-zh.html" : "/legal/terms-en.html")} target="_blank" class="transition-colors hover:text-slate-700 dark:hover:text-slate-200">${ssrInterpolate(_ctx.$t("hoxi.footer.terms"))}</a><span>${ssrInterpolate(_ctx.$t("hoxi.footer.dataNote"))}</span>`);
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
//# sourceMappingURL=default-BCscENG-.mjs.map
