import { _ as __nuxt_component_0 } from './EmailVerificationBanner-CMUye8_6.mjs';
import { t as useSettings, aM as useLocaleRouter, e as useI18n, a as __nuxt_component_3$1, b as _sfc_main$E } from './server.mjs';
import __nuxt_component_2 from './HoxiLogoIcon-jvFFm8sK.mjs';
import __nuxt_component_4 from './HoxiCommunityModal-CFd8zBX8.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHoxiCommunity } from './useHoxiCommunity-C73oY16n.mjs';
import { u as useColorMode } from './composables-C04bOF3H.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:os';
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
    name: "Hoxi AI",
    tagline: "The Solopreneur AI Guide \xB7 Solo Yet Limitless"
  },
  nav: {
    home: "Home",
    models: "Capabilities",
    gateways: "Gateways",
    plans: "Coding Plans",
    tools: "Tools",
    projects: "Projects",
    posts: "Blog",
    about: "About",
    coding: "Experience Rank",
    cheap: "Gateways & Save",
    savings: "Savings Guide",
    savingsMenuTitle: "AI Compute Savings Hub",
    savingsMenuNote: "Cost-reduction & model selection playbook",
    allSavings: "Open Savings Hub",
    modelsDesc: "Real developer benchmarks & pricing rank",
    gatewaysDesc: "Tested low-latency relays up to 80% off",
    plansDesc: "IDE subscriptions & quota pitfall notes",
    switchDesc: "Budget-friendly model alternatives",
    changesDesc: "Official price drops and change history",
    switch: "Alternatives",
    compare: "Compare",
    changes: "Price Logs",
    readiness: "Readiness Test",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    comingSoon: "Coming soon"
  },
  footer: {
    rights: "All rights reserved",
    dataNote: "Every price and score carries its source and last-checked date"
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
    subtitle: "Pricing, quota limits, and practical notes across major IDEs and official plans.",
    seoTitle: "AI Coding Plans & Official Subscriptions Comparison",
    seoDescription: "Compare official AI coding plans and token resource packs across pricing, quota limits, model coverage, and pros & cons."
  },
  tools: {
    title: "Solopreneur Tech Stack & Tools",
    subtitle: "I'm Coller. Curated indie developer, global payments, serverless deployment, and AI tools battle-tested for solo builders.",
    seoTitle: "Solopreneur Tech Stack - Curated Tools for Solo Founders",
    seoDescription: "Essential tools for one-person businesses: AI coding assistants, serverless hosting, Stripe/LemonSqueezy payments, and solo workflows."
  },
  home: {
    heroBadge: "Solopreneur AI Guide \xB7 Engineering & Solopreneurship",
    title: "Hoxi AI: Build Your One-Person Business with AI",
    subtitle: "I'm Coller. No vanity coding, just solopreneur execution: test readiness, arm with tools, cut compute costs. Build a profitable one-person business with AI.",
    heroLinks: {
      coding: "Experience Rank",
      gateways: "Gateway Deals",
      insights: "Solopreneur Blog"
    },
    sections: {
      codingLeaderboard: "\u{1F3C6} Real Experience Leaderboard",
      codingNote: "Ranked by complex refactoring, fullstack coding, and debug capability. Paired with real developer notes and cost efficiency.",
      gateways: "\u26A1 Verified AI Gateway Benchmark",
      gatewaysNote: "Tested continuously with real API keys for latency, uptime, and model authenticity to filter out fake or throttled relays.",
      plans: "\u{1F4E6} Coding Plans & Packages",
      plansNote: "Pay-as-you-go vs monthly subscriptions without payment headaches.",
      posts: "\u{1F4DD} Solopreneur Insights & Reviews",
      postsNote: "Practical AI-assisted solo workflows, prompt tricks, and pitfall avoidance guides.",
      picks: "This week's picks",
      leaderboard: "Full Leaderboard",
      about: "About",
      categories: "Categories",
      data: "Data at a glance"
    },
    gatewaysTable: {
      site: "Tested Relay Sites",
      latency: "Latency",
      uptime: "Uptime",
      price: "Reference Price",
      models: "Key Support",
      action: "Configure",
      statusVerified: "Verified Genuine",
      statusFast: "Ultra Fast"
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
    gatewaysList: {
      official: "Direct Official",
      officialDesc: "Requires overseas cards, potential account ban risk, full retail price",
      relay: "High-Stability Gateway (Self-hosted / Curated)",
      relayDesc: "Direct low-latency route, pay-as-you-go with no monthly lock-in, full tool & CLI support",
      saveRate: "Save 50% - 85%",
      feature1: "Supports Cursor, Cline, Roo Code, VS Code & CLI",
      feature2: "Direct fast route with minimal TTFT (< 800ms)",
      feature3: "High concurrency, zero account ban risk, transparent billing",
      feature4: "Full support for Claude 3.7, DeepSeek R1, GPT-4o"
    },
    moreCodingModels: "View full coding model benchmarks",
    viewGateways: "View tested gateways & reviews",
    viewPlans: "View all Coding Plans & Packages",
    picksNote: 'Taking "{scene}" as the most common case: one pick regardless of cost, one for value, one for the cheapest that still works. Other scenarios are in the buying guide.',
    moreScenes: "See all scenario picks",
    viewFullTable: "See the full leaderboard",
    postsEmpty: "Insights articles are constantly updated. Check out the coding tier and gateway guide first.",
    dataSummary: "{count} models from {vendors} vendors. Prices from official pricing pages, scores from Artificial Analysis.",
    method: {
      title: "How I put these numbers together",
      viewAbout: "View full methodology",
      source: "I don't run vanity benchmarks. Prices and specs are verified by hand from official vendor docs, scores are cited from authoritative public leaderboards, and every figure carries a verification date.",
      missing: "Missing fields are left blank rather than guessed.",
      update: "I maintain this alone, so pricing changes may lag reality. Always check official vendor pricing before making financial decisions."
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
    podiumTitle: "Top Picks \xB7 3 Essential Models",
    podiumDesc: "Carefully curated based on real benchmarks and actual pricing.",
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
    noMatch: "No model matches the current filters. Try raising the price cap or clearing the vendor filter.",
    method: {
      title: "Methodology",
      blended: "Blended price = (input x 3 + output x 1) / 4, per 1M tokens. The 3:1 split is an assumption - real workloads usually read far more than they write. Change the weights and the ranking changes.",
      currency: "USD prices are converted at 1 USD = {rate} CNY for the blended column, rate checked on {date}. The Input and Output columns keep each vendor's original price and currency, unconverted.",
      valueBar: "Value = score / blended price, normalised so the best in the table is 100. The number is a linear index; the bar beside it is logarithmic, because prices span two orders of magnitude and a linear bar collapses into one full bar and a row of slivers. Bar length ratios are not value ratios.",
      missing: "A dash means there is no verifiable figure for that cell - it is not zero. Those models always sort to the bottom of that column.",
      variant: "Third-party leaderboards list one row per model AND reasoning effort, and the scores differ between efforts. We keep one row per model; the effort level we used is recorded on each model page.",
      source: "Prices come from each vendor's official list price / standard tier. Limited-time discounts, off-peak rates, tiered pricing and long-context surcharges are excluded - see each model page for the caveats."
    }
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
    title: "About Hoxi",
    subtitle: "A site that puts capability scores and official prices for the major language models on one consistent yardstick.",
    seoTitle: "About Hoxi - sources and limitations",
    explore: "Start here",
    who: {
      title: "Who is behind this",
      p1: "I'm Coller. I've been building AI-related things for a while now, and I currently run an AI gateway - basically a relay service for calling the big model APIs. That job means staring at everyone's price sheets every week: who repriced, whose promo is about to expire, whose cache billing quietly changed.",
      p2: "So I turned that running tally into a public site - partly to save myself from re-checking it from scratch every time, partly because these numbers should be out in the open anyway. I checked every figure myself, and every judgment call here is mine. Agree or not, the source links are right there for you to go verify."
    },
    what: {
      title: "What this site does",
      p1: "I want to answer two questions: which model to use, and which one is actually worth the money. There are more models every month, and vendors differ in how they quote prices, what they bill for, and what promotions apply - you can't compare them head-on without flattening those differences first. That took long enough that I built a site around it instead of redoing the work every time.",
      p2: "Currently tracking {count} models from {vendors} vendors, covering flagship, mid and budget tiers, both international and Chinese."
    },
    how: {
      title: "Where the data comes from",
      p1: "I don't run my own benchmarks - the time that would take is better spent checking these pages carefully a few more times. Prices, context windows and input modalities are transcribed by hand from each vendor's official pricing page and model docs; capability scores and output speed come from the public Artificial Analysis leaderboard. Every model page lists its source links and the date I checked them, so go verify anything you doubt.",
      p2: "To make prices comparable across vendors I defined a blended price: input and output weighted 3:1, with USD converted at a fixed rate. Both are assumptions I made, not facts - the leaderboard states the method, and I'm not hiding that a different weighting would change the ranking.",
      p3: "I last checked the data on {date}.",
      p4: "I've also opened up the whole dataset as an endpoint: {apiPath}, returning every model and vendor with a schema version, the exchange rate used, and source notes. Take it, with attribution to hoxi.ai - build a plugin, a CLI, or your own comparison page on top of it."
    },
    limits: {
      title: "What this site cannot tell you",
      p1: "I maintain this data by hand, alone, so it will lag. Price changes, expiring promotions and new releases can all make these numbers stale. Please check the vendor page before committing to a cost estimate - don't just take my word for it.",
      p2: "I only have an overall score today - no per-dimension data for coding, Chinese or agentic work. Every recommendation in the buying guide that touches those is marked as editorial judgement: that's my own opinion, not a measurement. Before you ship, run your own task through the candidates - don't treat my judgment as a free pass.",
      p3: "A dash means I could not find verifiable data for that cell - not zero, and not a bad model. I'd rather leave a visible gap than make up a number to fill the table."
    }
  },
  posts: {
    title: "Blog & Technical Notes",
    subtitle: "Hands-on engineering practices, AI-assisted coding workflows, technical deep dives, and real-world lessons.",
    seoTitle: "Blog & Technical Notes - Hoxi",
    seoDescription: "Hands-on engineering practices, AI-assisted coding workflows, technical deep dives, and real-world lessons.",
    empty: "No articles published yet.",
    checkBackLater: "Check back soon for more in-depth reviews and guides.",
    views: "{count} views",
    toc: "Contents",
    pagination: "Article pagination",
    previous: "Previous",
    next: "Next",
    backToList: "Back to all articles"
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
    title: "AI Gateway Leaderboard & Relays",
    subtitle: "Tested latency, uptime, pricing per million tokens and verified reliability for developers.",
    seoTitle: "AI Gateway Leaderboard - Low Latency Relays & API Proxies",
    seoDescription: "Real-time benchmark of AI API gateways: uptime (99.99%), TTFT latency (<300ms), supported models and pricing comparison. Quick 1-minute setup for Cursor, VS Code and Cline."
  },
  savings: {
    title: "AI Compute Savings Guide",
    subtitle: "I'm Coller. Compute is the largest yet most compressible fixed overhead for solo builders. No buzzwords here: just hard-tested cost-reduction decision trees, high-value relays, and subscription tips.",
    seoTitle: "AI Compute Savings Guide \xB7 Solo Builder Cost Playbook - Hoxi AI",
    seoDescription: "Essential AI compute cost-cutting guide for solopreneurs: model cost-efficiency benchmarks, tested relay gateways, coding plan subscriptions, and smart alternatives.",
    decisionBadge: "Rule of Thumb",
    decisionTitle: "Solopreneur Compute Cost Decision Tree",
    decisionDesc: "Don't jump straight into costly monthly subscriptions or waste money on sketchy relays. Follow this rule to save thousands of dollars every year.",
    rule1Title: "Light / Testing Phase: Use Verified Relays",
    rule1Desc: "If monthly volume is under 10M tokens, avoid $20\u2013$40 subscriptions. Pay-as-you-go via verified relays gives you top-tier models for a fraction of the cost.",
    rule2Title: "Heavy Daily Coding: Pick a Coding Plan",
    rule2Desc: "If you code 8 hours a day with hundreds of completions and multi-file refactoring, official plans (Cursor, Copilot, Trae) offer unmatched bulk discounts.",
    rule3Title: "Complex Reasoning & Long Context: Use Flagship Alternatives",
    rule3Desc: "DeepSeek R1/V3 and Qwen 2.5 Coder match top-tier coding performance at 1/10th to 1/20th the price of Claude 3.7 Sonnet. Swap them in for batch jobs.",
    modelsSectionTitle: "Flagship Model Experience & Value",
    modelsSectionNote: "No synthetic leaderboard fluff: real developer impressions, debugging abilities, and blended unit prices.",
    viewAllModels: "View all models and pricing",
    gatewaysSectionTitle: "Tested Low-Latency AI Gateway Relays",
    gatewaysSectionNote: "Continuously tested with real API keys for TTFT latency, uptime, and model authenticity.",
    viewAllGateways: "View full gateway benchmark",
    plansSectionTitle: "AI Coding Plans & Subscriptions",
    plansSectionNote: "Global & domestic IDE subscriptions: fast requests quota, model support, and practical notes.",
    viewAllPlans: "View all coding plans comparison",
    toolsSectionTitle: "Advanced Cost-Saving Tools",
    toolsSectionNote: "Extra utilities to trim your AI budget",
    switchCardTitle: "Smart Model Alternatives",
    switchCardDesc: "Find budget-friendly alternatives that deliver 90% of the capability at 10% of the cost.",
    changesCardTitle: "Price Drop Tracker",
    changesCardDesc: "Track vendor price cuts and promotional discounts in real time to capture compute dividends."
  },
  readiness: {
    title: "Solopreneur Readiness Assessment",
    subtitle: "For developers, PMs, and IT builders: Are you ready to build a one-person business?",
    seoTitle: "Solopreneur Readiness & Competency Assessment | Hoxi.ai",
    seoDescription: "A practical readiness quiz for developers and PMs. 5-pillar validation model and 12 real-world dilemmas to diagnose strengths, blindspots, and 7-day action prescriptions."
  },
  projects: {
    title: "AI Solopreneur Project Showcase",
    subtitle: "I'm Coller. Real-world projects built with AI to achieve profitability and solo delivery: dissected by tech stack, models used, and compute bills.",
    seoTitle: "AI Solopreneur Project Showcase - Real-World Case Studies & Bills",
    seoDescription: "Curated AI projects built by solopreneurs: transparent model choices, monthly token expenses, serverless tech stacks, and solo engineering tips.",
    badge: "Solopreneur Showcase \xB7 Battle-Tested Projects",
    recommendBtn: "Submit / Recommend Project",
    recommendTip: "Currently handpicked and benchmarked by Coller. If you built a great solo AI product, feel free to get in touch.",
    feedbackTitle: "Send Feedback to Author",
    feedbackDesc: "Share feature requests, partnership ideas, or questions directly with me.",
    feedbackPlaceholder: "Write your thoughts or ideas here...",
    submitFeedback: "Submit",
    contactAuthor: "Contact Author",
    viewSite: "Visit Site",
    viewGithub: "GitHub Source",
    viewStory: "Case Study",
    modelUsed: "Core Models",
    monthlyCost: "Compute Bill",
    techStack: "Tech Stack",
    author: "Creator",
    emptyTitle: "No projects in this category yet",
    emptyDesc: "We are continually testing and indexing new case studies. Stay tuned.",
    principlesTitle: "Coller's 3 Rules for Solo AI Execution",
    principle1Title: "1. Solve Real Problems, Avoid Vanity Toys",
    principle1Desc: "The true superpower of AI is compressing delivery cost to near-zero, not overcomplicating architecture. Validate monetization before scaling.",
    principle2Title: "2. Audit Compute Bills Rigorously",
    principle2Desc: "Too many AI products fail due to runaway token costs. Use prompt caching, tier routing, and verified relays to keep monthly bills under $10.",
    principle3Title: "3. Minimalist Full-Stack, One Person Army",
    principle3Desc: "No microservices or bloated setups. Nuxt + Tailwind + serverless DB + edge CDN ship in hours with near-zero ongoing maintenance."
  }
};
const zh = {
  brand: {
    name: "\u5408\u559CAI",
    tagline: "\u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 \xB7 \u5584\u7528 AI\uFF0C\u4E00\u4EBA\u6210\u519B\uFF0C\u6EE1\u5FC3\u6B22\u559C"
  },
  nav: {
    home: "\u9996\u9875",
    models: "\u6A21\u578B\u80FD\u529B",
    gateways: "\u4E2D\u8F6C\u7AD9",
    plans: "Coding Plan",
    tools: "\u5DE5\u5177\u7BB1",
    projects: "\u5B9E\u6218\u9879\u76EE",
    posts: "\u535A\u5BA2",
    about: "\u5173\u4E8E",
    coding: "\u4E2A\u4EBA\u4F53\u611F\u6392\u540D",
    cheap: "\u7701\u94B1\u6307\u5357",
    savings: "\u7701\u94B1\u6307\u5357",
    savingsMenuTitle: "AI \u7B97\u529B\u7701\u94B1\u4E2D\u5FC3",
    savingsMenuNote: "\u4E00\u4EBA\u516C\u53F8\u7B97\u529B\u964D\u672C\u4E0E\u9009\u578B\u65B9\u6848",
    allSavings: "\u8FDB\u5165\u7701\u94B1\u51B3\u7B56\u4E2D\u5FC3",
    modelsDesc: "\u4E3B\u529B\u6A21\u578B\u4F53\u611F\u6392\u540D\u4E0E\u771F\u5B9E\u5355\u4EF7",
    gatewaysDesc: "\u771F\u5B9E\u5EF6\u8FDF\u4E0E\u63BA\u6C34\u68C0\u6D4B\u3001\u4F4E\u81F3 1-3 \u6298\u4E13\u7EBF",
    plansDesc: "IDE \u5B98\u65B9\u8BA2\u9605\u4E0E Token \u5305\u989D\u5EA6\u907F\u5751",
    switchDesc: "\u9AD8\u4EF7\u6A21\u578B\u964D\u672C\u5E73\u66FF\u8DEF\u7EBF",
    changesDesc: "\u5404\u5927\u5382\u5546\u6700\u65B0\u964D\u4EF7\u4E0E\u8C03\u4EF7\u6D41\u6C34",
    switch: "\u5E73\u66FF\u65B9\u6848",
    compare: "\u6A21\u578B\u5BF9\u6BD4",
    changes: "\u8C03\u4EF7\u8FFD\u8E2A",
    readiness: "\u80FD\u529B\u6D4B\u8BD5",
    openMenu: "\u6253\u5F00\u83DC\u5355",
    closeMenu: "\u5173\u95ED\u83DC\u5355",
    comingSoon: "\u5373\u5C06\u4E0A\u7EBF"
  },
  footer: {
    rights: "\u4FDD\u7559\u6240\u6709\u6743\u5229",
    dataNote: "\u4EF7\u683C\u4E0E\u8BC4\u5206\u5747\u6807\u6CE8\u6765\u6E90\u4E0E\u66F4\u65B0\u65F6\u95F4"
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
    title: "AI \u7F16\u7A0B\u5957\u9910 (Coding Plans) \u5BF9\u6BD4",
    subtitle: "\u6574\u7406\u56FD\u5185\u5916\u4E3B\u6D41 IDE \u4E0E\u5B98\u65B9\u8BA2\u9605\u7684\u771F\u5B9E\u5355\u4EF7\u3001\u989D\u5EA6\u4E0A\u9650\u4E0E\u8E29\u5751\u63D0\u9192\u3002",
    seoTitle: "AI \u7F16\u7A0B\u5957\u9910\u4E0E\u5B98\u65B9\u8BA2\u9605\u5BF9\u6BD4 - Coding Plan & Token Plan",
    seoDescription: "\u5BF9\u6BD4\u5404\u5927\u5382\u5546 AI \u7F16\u7A0B\u8BA2\u9605 (Coding Plan) \u4E0E Token \u8D44\u6E90\u5305\u7684\u4EF7\u683C\u3001\u989D\u5EA6\u9650\u5236\u3001\u652F\u6301\u6A21\u578B\u4E0E\u4F18\u7F3A\u70B9\uFF0C\u9644\u7AD9\u957F\u5B9E\u6D4B\u5EFA\u8BAE\u3002"
  },
  tools: {
    title: "\u4E00\u4EBA\u516C\u53F8\u5FC5\u5907\u5DE5\u5177\u7BB1",
    subtitle: "\u6211\u662F\u53EF\u4E50\u3002\u7CBE\u9009\u72EC\u7ACB\u5F00\u53D1\u3001\u51FA\u6D77\u6536\u6B3E\u3001\u6781\u7B80\u90E8\u7F72\u4E0E AI \u63D0\u6548\u5FC5\u5907\u795E\u5668\uFF0C\u4E0D\u6574\u865A\u5934\u5DF4\u8111\uFF0C\u5168\u662F\u4E00\u4EBA\u6210\u519B\u771F\u5B9E\u81EA\u7528\u3002",
    seoTitle: "\u4E00\u4EBA\u516C\u53F8\u5FC5\u5907\u5DE5\u5177\u7BB1 - \u51FA\u6D77\u72EC\u7ACB\u5F00\u53D1\u4E0E\u5168\u6808\u63D0\u6548\u795E\u5668",
    seoDescription: "\u6574\u7406\u4E00\u4EBA\u516C\u53F8\u72EC\u7ACB\u5F00\u53D1\u4E0E\u51FA\u6D77\u5FC5\u5907\u7684\u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1\uFF0C\u6DB5\u76D6 AI \u751F\u4EA7\u529B\u3001\u57DF\u540D\u89E3\u6790\u3001\u65E0\u670D\u52A1\u5668\u90E8\u7F72\u3001\u5168\u7403\u652F\u4ED8\u4E0E\u521B\u4F5C\u63D0\u6548\u3002"
  },
  home: {
    heroBadge: "\u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 \xB7 \u72EC\u7ACB\u5F00\u53D1\u5B9E\u6218",
    title: "\u5584\u7528 AI\uFF0C\u4E00\u4EBA\u6210\u519B\uFF0C\u6EE1\u5FC3\u6B22\u559C",
    subtitle: "\u6211\u662F\u53EF\u4E50\u3002\u62D2\u7EDD\u4EE3\u7801\u81EA\u55E8\uFF0C\u4E13\u6CE8\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u3002\u6D4B\u80FD\u529B\u3001\u7ED9\u5DE5\u5177\u3001\u964D\u7B97\u529B\uFF0C\u4E00\u4E2A\u4EBA\u4E5F\u80FD\u505A\u6210\u4E00\u5BB6\u8D5A\u94B1\u7684\u516C\u53F8\u3002",
    heroLinks: {
      coding: "\u4E2A\u4EBA\u4F53\u611F\u6392\u540D",
      gateways: "\u9760\u8C31\u4E2D\u8F6C\u63A8\u8350",
      insights: "\u5B9E\u6218\u5FC3\u5F97\u535A\u5BA2"
    },
    sections: {
      codingLeaderboard: "\u{1F3C6} \u4E2A\u4EBA\u4F7F\u7528\u4F53\u611F\u6392\u540D",
      codingNote: "\u57FA\u4E8E\u65E5\u5E38\u771F\u5B9E\u5199\u4EE3\u7801\u3001\u590D\u6742\u91CD\u6784\u4E0E Debug \u5B9E\u9645\u4F53\u611F\u6392\u5E8F\uFF0C\u9644\u5E26\u7AD9\u957F\u5B9E\u6218\u70B9\u8BC4\u4E0E\u6027\u4EF7\u6BD4\u3002",
      gateways: "\u26A1 \u4F18\u8D28 AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF",
      gatewaysNote: "\u7528\u771F\u5B9E API Key \u6301\u7EED\u5B9E\u6D4B\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E\u771F\u5B9E\u6A21\u578B\u4E00\u81F4\u6027\uFF0C\u7B5B\u9009\u4E0D\u63BA\u5047\u3001\u4F4E\u5EF6\u8FDF\u3001\u9AD8\u6027\u4EF7\u6BD4\u7684\u4E2D\u8F6C\u6E20\u9053\u3002",
      plans: "\u{1F4E6} \u7F16\u7A0B\u5957\u9910\u4E0E Coding Plan",
      plansNote: "\u6309\u91CF\u4E0E\u5305\u6708\u5BF9\u6BD4\uFF0C\u544A\u522B\u6D77\u5916\u5361\u95E8\u69DB\u548C\u5C01\u53F7\u98CE\u9669\u3002",
      posts: "\u{1F4DD} \u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u5FC3\u5F97 & \u6DF1\u5EA6\u8BC4\u6D4B",
      postsNote: "\u8BB0\u5F55\u771F\u5B9E\u7684\u4E00\u4EBA\u516C\u53F8\u5DE5\u4F5C\u6D41\u3001AI \u5546\u4E1A\u53D8\u73B0\u590D\u76D8\u3001\u81EA\u5A92\u4F53\u53E3\u64AD\u914D\u5957\u4E0E\u907F\u5751\u6307\u5357\u3002",
      picks: "\u672C\u5468\u63A8\u8350",
      leaderboard: "\u5168\u91CF\u6A21\u578B\u699C\u5355",
      about: "\u5173\u4E8E\u7AD9\u957F",
      categories: "\u699C\u5355\u5206\u7C7B",
      data: "\u6570\u636E\u6982\u51B5"
    },
    gatewaysTable: {
      site: "\u5B9E\u6D4B\u63A8\u8350\u7AD9\u70B9",
      latency: "\u5B9E\u6D4B\u5EF6\u8FDF",
      uptime: "\u5728\u7EBF\u7387",
      price: "\u53C2\u8003\u5355\u4EF7",
      models: "\u6838\u5FC3\u652F\u6301",
      action: "\u76F4\u8FBE\u914D\u7F6E",
      statusVerified: "\u5B9E\u6D4B\u771F\u6A21\u578B",
      statusFast: "\u4E13\u7EBF\u6781\u901F"
    },
    plansList: {
      plan1Title: "\u6309\u91CF\u6781\u5BA2\u5305",
      plan1Tag: "\u7A0B\u5E8F\u5458\u9996\u9009",
      plan1Price: "\xA510 \u8D77",
      plan1Desc: "\u5145\u591A\u5C11\u7528\u591A\u5C11\uFF0C\u989D\u5EA6\u6C38\u4E45\u4E0D\u8FC7\u671F\u3002\u4E13\u4E3A Cursor / VS Code / Cline \u5B9A\u5236\u3002",
      plan1F1: "\u652F\u6301\u5168\u91CF Claude 3.7 / DeepSeek / GPT-4o",
      plan1F2: "\u6309 Token \u7CBE\u51C6\u8BA1\u8D39\uFF0C\u660E\u7EC6\u900F\u660E\u5B9E\u65F6\u53EF\u67E5",
      plan1F3: "\u65E0\u6708\u79DF\u3001\u65E0\u8FC7\u671F\u65F6\u95F4\u9650\u5236",
      plan1Cta: "\u7ACB\u5373\u5145\u503C\u914D\u7F6E",
      plan2Title: "\u5168\u80FD\u4E3B\u529B\u6708\u5361",
      plan2Tag: "\u91CD\u5EA6\u5F00\u53D1\u63A8\u8350",
      plan2Price: "\xA599 / \u6708",
      plan2Desc: "\u65E0\u9650\u989D\u5EA6\u4E0E\u9AD8\u5E76\u53D1\u652F\u6301\uFF0C\u9002\u5408\u5168\u5929\u5019\u5199\u4EE3\u7801\u4E0E\u65E5\u5E38\u751F\u4EA7\u529B\u91CD\u5EA6\u7528\u6237\u3002",
      plan2F1: "\u72EC\u4EAB\u4E13\u7EBF\u901A\u9053\uFF0C\u9AD8\u5E76\u53D1\u7A33\u5B9A\u4E0D\u6392\u961F",
      plan2F2: "\u652F\u6301\u5168\u6A21\u578B\u81EA\u7531\u5207\u6362",
      plan2F3: "\u4F18\u5148\u6280\u672F\u652F\u6301\u4E0E\u914D\u7F6E\u8F85\u52A9",
      plan2Cta: "\u5F00\u901A\u4E3B\u529B\u6708\u5361",
      plan3Title: "Plus/Pro \u62FC\u8F66\u5408\u79DF",
      plan3Tag: "\u9AD8\u6027\u4EF7\u6BD4",
      plan3Price: "\xA529 / \u6708",
      plan3Desc: "\u5B98\u65B9\u539F\u751F\u7F51\u9875\u7AEF\u4F53\u9A8C\uFF0C\u72EC\u7ACB\u5BF9\u8BDD\u8BB0\u5F55\uFF0C\u544A\u522B\u6D77\u5916\u4FE1\u7528\u5361\u4E0E\u5C01\u53F7\u98CE\u9669\u3002",
      plan3F1: "ChatGPT Plus / Claude Pro \u5B98\u65B9\u539F\u7248 Web \u754C\u9762",
      plan3F2: "\u72EC\u7ACB\u8D26\u53F7\u6216\u9694\u79BB\u4F1A\u8BDD\uFF0C\u9690\u79C1\u5B89\u5168",
      plan3F3: "\u7FFB\u8F66\u95EA\u9000\u81EA\u52A8\u8865\u53F7\u4E0E\u552E\u540E\u4FDD\u969C",
      plan3Cta: "\u67E5\u770B\u62FC\u8F66\u65B9\u6848"
    },
    gatewaysList: {
      official: "\u5B98\u65B9\u76F4\u8FDE",
      officialDesc: "\u9700\u6D77\u5916\u652F\u4ED8\u5361\uFF0C\u5076\u6709\u5C01\u53F7\u98CE\u9669\uFF0C\u539F\u4EF7\u8BA1\u8D39",
      relay: "\u4F18\u8D28\u9AD8\u7A33\u4E2D\u8F6C\uFF08\u81EA\u8425/\u7CBE\u9009\uFF09",
      relayDesc: "\u56FD\u5185\u76F4\u8FDE\u4F4E\u5EF6\u8FDF\uFF0C\u6309\u91CF\u8BA1\u8D39\u65E0\u6708\u8D39\uFF0C\u652F\u6301\u4E3B\u6D41\u4EE3\u7801\u5DE5\u5177\u4E0E CLI",
      saveRate: "\u7ACB\u7701 50% - 85%",
      feature1: "\u652F\u6301 Cursor / Cline / Roo / VS Code \u7B49\u4E3B\u6D41\u5DE5\u5177",
      feature2: "\u56FD\u5185\u9AD8\u901F\u76F4\u8FDE\uFF0C\u9996\u5B57\u5EF6\u8FDF\u4F4E (TTFT < 800ms)",
      feature3: "\u9AD8\u5E76\u53D1\u65E0\u5C01\u53F7\u98CE\u9669\uFF0C\u660E\u7EC6\u900F\u660E\u53EF\u67E5",
      feature4: "\u5168\u91CF\u8986\u76D6 Claude 3.7 / DeepSeek R1 / GPT-4o"
    },
    moreCodingModels: "\u67E5\u770B\u5B8C\u6574\u4EE3\u7801\u6A21\u578B\u8BC4\u5206",
    viewGateways: "\u67E5\u770B\u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u4E0E\u8BC4\u6D4B",
    viewPlans: "\u67E5\u770B\u5B8C\u6574 Coding Plan \u4E0E\u7F16\u7A0B\u5957\u9910",
    picksNote: "\u4EE5\u300C{scene}\u300D\u8FD9\u4E2A\u6700\u5E38\u89C1\u7684\u573A\u666F\u4E3A\u4F8B\uFF0C\u4ECE\u4E0D\u8BA1\u6210\u672C\u5230\u6781\u7701\u5404\u7ED9\u4E00\u4E2A\u9009\u62E9\u3002\u5176\u4ED6\u573A\u666F\u89C1\u7701\u94B1\u6307\u5357\u3002",
    moreScenes: "\u67E5\u770B\u5168\u90E8\u573A\u666F\u63A8\u8350",
    viewFullTable: "\u67E5\u770B\u5B8C\u6574\u699C\u5355",
    postsEmpty: "\u5B9E\u6218\u5FC3\u5F97\u8FD8\u5728\u6301\u7EED\u66F4\u65B0\u4E2D\uFF0C\u5148\u770B\u770B\u4EE3\u7801\u6218\u529B\u699C\u4E0E\u7701\u94B1\u65B9\u6848\u5427\u3002",
    dataSummary: "\u5DF2\u6536\u5F55 {count} \u4E2A\u6A21\u578B\u3001{vendors} \u5BB6\u5382\u5546\uFF0C\u4EF7\u683C\u53D6\u81EA\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875\uFF0C\u8BC4\u5206\u53D6\u81EA Artificial Analysis\u3002",
    method: {
      title: "\u8FD9\u4E9B\u6570\u636E\u6211\u662F\u600E\u4E48\u5F04\u51FA\u6765\u7684",
      viewAbout: "\u67E5\u770B\u5B8C\u6574\u53E3\u5F84\u8BF4\u660E",
      source: "\u6211\u4E0D\u8DD1\u865A\u6807\u57FA\u51C6\u3002\u4EF7\u683C\u4E0E\u89C4\u683C\u7531\u6211\u9010\u6761\u6838\u5B9E\u81EA\u5382\u5546\u5B98\u65B9\u6587\u6863\u4E0E\u5B9A\u4EF7\u9875\uFF0C\u80FD\u529B\u8BC4\u5206\u5F15\u81EA\u516C\u5F00\u6743\u5A01\u699C\u5355\uFF0C\u6BCF\u6761\u6570\u636E\u5747\u6807\u660E\u6838\u5BF9\u65E5\u671F\u3002",
      missing: "\u67E5\u4E0D\u5230\u7684\u5B57\u6BB5\u4E00\u5F8B\u7559\u7A7A\uFF0C\u4E0D\u778E\u731C\u7740\u586B\u3002",
      update: "\u6570\u636E\u7531\u6211\u5355\u4EBA\u7EF4\u62A4\uFF0C\u5382\u5546\u8C03\u4EF7\u96BE\u514D\u5B58\u5728\u6EDE\u540E\uFF0C\u505A\u6B63\u5F0F\u6210\u672C\u6838\u7B97\u524D\u8BF7\u4EE5\u5382\u5546\u5B9E\u65F6\u9875\u9762\u4E3A\u51C6\u3002"
    },
    pending: "\u6570\u636E\u5C42\u5C06\u5728\u540E\u7EED\u9636\u6BB5\u63A5\u5165\uFF0C\u5F53\u524D\u4E3A\u9AA8\u67B6\u9884\u89C8\u3002"
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
    subtitle: "\u628A\u4E3B\u6D41\u5927\u6A21\u578B\u7684\u80FD\u529B\u8BC4\u5206\u4E0E\u5B98\u65B9\u4EF7\u683C\u653E\u5728\u540C\u4E00\u628A\u5C3A\u5B50\u4E0A\u6BD4\u8F83\uFF0C\u5E2E\u4F60\u5224\u65AD\u8BE5\u7528\u54EA\u4E2A\u3001\u4EE5\u53CA\u54EA\u4E2A\u66F4\u5212\u7B97\u3002",
    seoTitle: "AI \u6A21\u578B\u6392\u884C\u699C - \u80FD\u529B\u8BC4\u5206\u4E0E\u4EF7\u683C\u5BF9\u6BD4",
    seoDescription: "\u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u699C\uFF1A\u7EFC\u5408\u8BC4\u5206\u3001\u8F93\u5165\u8F93\u51FA\u4EF7\u683C\u3001\u6DF7\u5408\u4EF7\u3001\u6027\u4EF7\u6BD4\u3001\u8F93\u51FA\u901F\u5EA6\u4E0E\u4E0A\u4E0B\u6587\u957F\u5EA6\u6A2A\u5411\u5BF9\u6BD4\uFF0C\u6570\u636E\u6807\u6CE8\u6765\u6E90\u4E0E\u6838\u5BF9\u65E5\u671F\u3002",
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
    podiumTitle: "\u7AD9\u957F\u7CBE\u9009 \xB7 \u95ED\u773C\u5165\u4E09\u5927\u4E3B\u529B",
    podiumDesc: "\u6839\u636E\u5168\u7F51\u5B9E\u6D4B\u6570\u636E\u4E0E\u771F\u5B9E\u6210\u672C\uFF0C\u4E3A\u4F60\u7CBE\u9009\u7684\u4E09\u6B3E\u6838\u5FC3\u6A21\u578B",
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
    noMatch: "\u6CA1\u6709\u7B26\u5408\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u7684\u6A21\u578B\uFF0C\u8BD5\u8BD5\u653E\u5BBD\u4EF7\u683C\u4E0A\u9650\u6216\u53D6\u6D88\u5382\u5546\u7B5B\u9009\u3002",
    method: {
      title: "\u6570\u636E\u53E3\u5F84",
      blended: "\u6DF7\u5408\u4EF7 = (\u8F93\u5165\u4EF7 \xD7 3 + \u8F93\u51FA\u4EF7 \xD7 1) \xF7 4\uFF0C\u6309\u6BCF\u767E\u4E07 tokens \u8BA1\u30023:1 \u662F\u4E00\u4E2A\u5047\u8BBE\u2014\u2014\u771F\u5B9E\u4F7F\u7528\u4E2D\u8BFB\u7684\u901A\u5E38\u8FDC\u591A\u4E8E\u5199\u7684\uFF1B\u6362\u4E00\u7EC4\u6743\u91CD\uFF0C\u6392\u540D\u4F1A\u53D8\u3002",
      currency: "\u7F8E\u5143\u6807\u4EF7\u6309 1 USD = {rate} CNY \u6298\u7B97\u6210\u6DF7\u5408\u4EF7\uFF0C\u6C47\u7387\u6838\u5BF9\u4E8E {date}\u3002\u300C\u8F93\u5165\u4EF7\u300D\u300C\u8F93\u51FA\u4EF7\u300D\u4E24\u5217\u4FDD\u7559\u5382\u5546\u539F\u59CB\u6807\u4EF7\u4E0E\u5E01\u79CD\uFF0C\u4E0D\u505A\u6362\u7B97\u3002",
      valueBar: "\u6027\u4EF7\u6BD4 = \u7EFC\u5408\u5206 \xF7 \u6DF7\u5408\u4EF7\uFF0C\u4EE5\u699C\u5185\u6700\u9AD8\u8005\u4E3A 100\u3002\u6570\u5B57\u662F\u7EBF\u6027\u6307\u6570\uFF1B\u65C1\u8FB9\u7684\u6761\u5F62\u662F\u5BF9\u6570\u523B\u5EA6\uFF0C\u56E0\u4E3A\u4EF7\u683C\u8DE8\u4E24\u4E2A\u6570\u91CF\u7EA7\uFF0C\u7EBF\u6027\u6761\u5F62\u4F1A\u9000\u5316\u6210\u4E00\u6839\u6EE1\u683C\u52A0\u4E00\u5806\u7EC6\u7EBF\u2014\u2014\u6761\u957F\u4E4B\u6BD4\u4E0D\u7B49\u4E8E\u6027\u4EF7\u6BD4\u4E4B\u6BD4\u3002",
      missing: "\u663E\u793A\u4E3A\u300C\u2014\u300D\u8868\u793A\u8BE5\u9879\u6CA1\u6709\u53EF\u6838\u5B9E\u7684\u6570\u636E\uFF0C\u4E0D\u662F 0\u3002\u6309\u8BE5\u5217\u6392\u5E8F\u65F6\u8FD9\u4E9B\u6A21\u578B\u4E00\u5F8B\u6C89\u5E95\u3002",
      variant: "\u7B2C\u4E09\u65B9\u699C\u5355\u6309\u300C\u6A21\u578B \xD7 \u63A8\u7406\u6863\u4F4D\u300D\u5206\u884C\uFF0C\u540C\u4E00\u6A21\u578B\u4E0D\u540C\u6863\u4F4D\u7684\u5206\u6570\u4E0E\u5EF6\u8FDF\u5E76\u4E0D\u76F8\u540C\u3002\u672C\u7AD9\u6BCF\u4E2A\u6A21\u578B\u53EA\u4FDD\u7559\u4E00\u6761\u8BB0\u5F55\uFF0C\u53D6\u7528\u7684\u6863\u4F4D\u8BB0\u5F55\u5728\u6A21\u578B\u8BE6\u60C5\u9875\u3002",
      source: "\u4EF7\u683C\u53D6\u81EA\u5404\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875\u7684\u520A\u4F8B\u4EF7/\u6807\u51C6\u6863\uFF0C\u9650\u65F6\u6298\u6263\u3001\u5206\u65F6\u6BB5\u4EF7\u3001\u9636\u68AF\u4EF7\u4E0E\u957F\u4E0A\u4E0B\u6587\u52A0\u4EF7\u5747\u4E0D\u8BA1\u5165\uFF0C\u5177\u4F53\u5DEE\u5F02\u89C1\u5404\u6A21\u578B\u8BE6\u60C5\u9875\u7684\u6CE8\u610F\u4E8B\u9879\u3002"
    }
  },
  model: {
    seoTitle: "{name} - \u4EF7\u683C\u3001\u8BC4\u5206\u4E0E\u9009\u578B\u5EFA\u8BAE",
    offerDescription: "\u6BCF\u767E\u4E07\u8F93\u5165 tokens \u7684\u5B98\u65B9\u6807\u4EF7",
    scores: "\u80FD\u529B\u8BC4\u5206",
    scoreNote: "\u7EFC\u5408\u5206\u53D6\u81EA Artificial Analysis \u7684 Intelligence Index\uFF0C\u5B83\u662F\u4E00\u4E2A\u7EFC\u5408\u6307\u6570\u800C\u975E\u767E\u5206\u5236\uFF0C\u5F53\u524D\u699C\u9996\u7EA6 63 \u5206\u3002",
    scoreMissing: "\u8BE5\u6A21\u578B\u672A\u51FA\u73B0\u5728 Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u4E2D\uFF0C\u56E0\u6B64\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u80FD\u529B\u8BC4\u5206\u3002\u8FD9\u4E0D\u4EE3\u8868\u5B83\u80FD\u529B\u5DEE\uFF0C\u53EA\u4EE3\u8868\u6CA1\u6709\u53EF\u6838\u5B9E\u7684\u7B2C\u4E09\u65B9\u6570\u636E\u3002",
    scoreDimensions: {
      overall: "\u7EFC\u5408",
      coding: "\u7F16\u7A0B",
      reasoning: "\u63A8\u7406",
      chinese: "\u4E2D\u6587",
      agentic: "Agent"
    },
    variantNote: "\u672C\u7AD9\u53D6\u7528\u7684\u662F\u300C{variant}\u300D\u63A8\u7406\u6863\u4F4D\u7684\u6570\u636E\uFF1B\u540C\u4E00\u6A21\u578B\u6362\u6863\u4F4D\uFF0C\u5206\u6570\u4E0E\u5EF6\u8FDF\u90FD\u4F1A\u53D8\u3002",
    pricing: "\u4EF7\u683C\u660E\u7EC6",
    priceItem: "\u9879\u76EE",
    priceOfficial: "\u5B98\u65B9\u6807\u4EF7",
    priceInput: "\u8F93\u5165",
    priceOutput: "\u8F93\u51FA",
    priceCacheRead: "\u7F13\u5B58\u547D\u4E2D",
    priceCacheWrite: "\u7F13\u5B58\u5199\u5165",
    maxOutput: "\u6700\u5927\u8F93\u51FA",
    priceNote: "\u5355\u4F4D\u4E3A\u6BCF\u767E\u4E07 tokens\u3002\u6298\u7B97\u540E\u7684\u6DF7\u5408\u4EF7\u4E3A \xA5{blended}\uFF08\u7F8E\u5143\u6309 1 USD = {rate} CNY \u8BA1\uFF0C\u6C47\u7387\u6838\u5BF9\u4E8E {date}\uFF09\u3002\u663E\u793A\u4E3A\u300C\u2014\u300D\u8868\u793A\u5382\u5546\u672A\u516C\u5E03\u8BE5\u9879\u6216\u4E0D\u6309\u8BE5\u65B9\u5F0F\u8BA1\u8D39\u3002",
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
      neighborsNote: "\u8BE5\u6A21\u578B\u6CA1\u6709\u53EF\u6838\u5B9E\u7684\u7EFC\u5408\u5206\uFF0C\u65E0\u6CD5\u505A\u80FD\u529B\u5BF9\u6BD4\uFF0C\u8FD9\u91CC\u6309\u6DF7\u5408\u4EF7\u63A5\u8FD1\u7A0B\u5EA6\u63A8\u8350\u3002"
    },
    blendedShort: "\u6DF7\u5408\u4EF7",
    scoreShort: "\u7EFC\u5408\u5206"
  },
  compare: {
    title: "\u6A21\u578B\u5BF9\u6BD4",
    subtitle: "\u628A\u4E24\u5230\u56DB\u4E2A\u5019\u9009\u5E76\u6392\u6446\u5F00\u770B\u3002\u9009\u62E9\u4F1A\u5199\u8FDB\u7F51\u5740\uFF0C\u4E00\u6761\u94FE\u63A5\u5C31\u80FD\u628A\u5BF9\u6BD4\u7ED3\u679C\u53D1\u7ED9\u522B\u4EBA\u3002",
    seoTitle: "AI \u6A21\u578B\u5BF9\u6BD4 - \u53C2\u6570\u4E0E\u4EF7\u683C\u5E76\u6392\u770B",
    seoTitleWith: "{names} \u5BF9\u6BD4",
    pick: "\u9009\u62E9\u8981\u5BF9\u6BD4\u7684\u6A21\u578B\uFF08\u6700\u591A {max} \u4E2A\uFF09",
    overflow: "\u4E00\u6B21\u6700\u591A\u5BF9\u6BD4 {max} \u4E2A\u6A21\u578B\uFF0C\u591A\u51FA\u7684\u5DF2\u5FFD\u7565\u2014\u2014\u518D\u591A\u5C31\u6324\u6210\u4E00\u56E2\u4E86\u3002",
    needMore: "\u81F3\u5C11\u9009\u4E24\u4E2A\u6A21\u578B\u624D\u80FD\u5BF9\u6BD4\u3002",
    field: "\u5BF9\u6BD4\u9879",
    modalities: "\u8F93\u5165\u6A21\u6001",
    summary: "\u4E00\u53E5\u8BDD",
    yes: "\u662F",
    no: "\u5426",
    billingTitle: "\u8BA1\u8D39\u5DEE\u5F02"
  },
  changes: {
    title: "\u6A21\u578B\u53D8\u66F4\u6D41\u6C34",
    subtitle: "\u4EF7\u683C\u8C03\u6574\u3001\u4FC3\u9500\u8D77\u6B62\u3001\u65B0\u6536\u5F55\u4E0E\u4E0B\u7EBF\u3002\u9009\u5BF9\u6A21\u578B\u4E4B\u540E\uFF0C\u6700\u5BB9\u6613\u8BA9\u4EBA\u88AB\u8D26\u5355\u6253\u4E2A\u63AA\u624B\u4E0D\u53CA\u7684\u5C31\u662F\u8FD9\u4E9B\u3002",
    seoTitle: "AI \u6A21\u578B\u4EF7\u683C\u53D8\u66F4\u8BB0\u5F55\u4E0E\u9884\u544A",
    seoDescription: "\u8DDF\u8E2A\u5404\u5BB6 AI \u6A21\u578B\u7684\u4EF7\u683C\u8C03\u6574\u3001\u4FC3\u9500\u5230\u671F\u3001\u65B0\u6A21\u578B\u6536\u5F55\u4E0E\u4E0B\u7EBF\uFF0C\u542B\u5DF2\u516C\u5E03\u7684\u672A\u6765\u53D8\u5316\u9884\u544A\u3002",
    asOf: "\u622A\u81F3 {date}",
    upcoming: "\u5DF2\u77E5\u5C06\u53D1\u751F",
    upcomingNote: "\u8FD9\u4E9B\u662F\u5382\u5546\u5DF2\u7ECF\u516C\u5E03\u3001\u4F46\u6563\u843D\u5728\u5404\u5BB6\u5B9A\u4EF7\u9875\u811A\u6CE8\u91CC\u7684\u53D8\u5316\u3002\u8DDD\u79BB\u5230\u671F\u4E0D\u5230 30 \u5929\u7684\u6807\u7EA2\u3002",
    upcomingEmpty: "\u5F53\u524D\u6536\u5F55\u7684\u6A21\u578B\u91CC\uFF0C\u6CA1\u6709\u5DF2\u516C\u5E03\u786E\u5207\u65E5\u671F\u7684\u4EF7\u683C\u53D8\u5316\u3002",
    history: "\u5DF2\u53D1\u751F\u7684\u53D8\u66F4",
    historyNote: "\u8FD9\u91CC\u53EA\u8BB0\u6211\u81EA\u5DF1\u771F\u5B9E\u6838\u5BF9\u8FC7\u7684\u53D8\u5316\uFF0C\u4ECE\u5F00\u59CB\u6536\u5F55\u90A3\u5929\u7B97\u8D77\uFF0C\u4E0D\u505A\u8FFD\u6EAF\u3002\u7A7A\u767D\u65F6\u6BB5\u5C31\u662F\u7A7A\u767D\u2014\u2014\u7F16\u4E00\u6BB5\u4E30\u6EE1\u7684\u5386\u53F2\u5F88\u5BB9\u6613\uFF0C\u4F46\u90A3\u6837\u6211\u81EA\u5DF1\u90FD\u4E0D\u4F1A\u518D\u4FE1\u8FD9\u4E2A\u7AD9\u3002",
    historyEmpty: "\u8FD8\u6CA1\u6709\u8BB0\u5F55\u5230\u53D8\u66F4\u3002",
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
    indexSubtitle: "\u9009\u4E00\u4E2A\u4F60\u6B63\u5728\u7528\u7684\u6A21\u578B\uFF0C\u770B\u770B\u6709\u54EA\u4E9B\u80FD\u66FF\u3001\u80FD\u7701\u591A\u5C11\u3001\u6362\u8FC7\u53BB\u8981\u6CE8\u610F\u4EC0\u4E48\u3002",
    indexSeoTitle: "AI \u6A21\u578B\u66FF\u4EE3\u65B9\u6848 - \u6362\u4E2A\u66F4\u4FBF\u5B9C\u7684",
    indexNote: "\u6392\u5728\u524D\u9762\u7684\u662F\u5355\u4EF7\u6700\u9AD8\u7684\u6A21\u578B\u2014\u2014\u4F1A\u770B\u8FD9\u4E00\u9875\u7684\u4EBA\u591A\u534A\u5728\u4E3A\u8D26\u5355\u53D1\u6101\uFF0C\u90A3\u6279\u7684\u66FF\u4EE3\u7A7A\u95F4\u4E5F\u6700\u5927\u3002",
    groups: {
      expensive: "\u8D35\u6863\uFF08\u6DF7\u5408\u4EF7 \xA530 \u4EE5\u4E0A\uFF09",
      mid: "\u4E2D\u6863\uFF08\xA510\u201330\uFF09",
      cheap: "\u4FBF\u5B9C\u6863\uFF08\xA510 \u4EE5\u4E0B\uFF09"
    },
    title: "{name} \u7684\u4FBF\u5B9C\u66FF\u4EE3",
    subtitle: "\u548C {name} \u80FD\u529B\u76F8\u5F53\u6216\u591F\u7528\u3001\u4F46\u66F4\u4FBF\u5B9C\u7684\u9009\u62E9\uFF0C\u4EE5\u53CA\u6362\u8FC7\u53BB\u4E4B\u524D\u8BE5\u77E5\u9053\u7684\u8BA1\u8D39\u5DEE\u5F02\u3002",
    seoTitle: "{name} \u7684\u4FBF\u5B9C\u66FF\u4EE3\u65B9\u6848 - \u80FD\u7701\u591A\u5C11\u3001\u600E\u4E48\u6362",
    seoDescription: "{name} \u6709\u54EA\u4E9B\u66F4\u4FBF\u5B9C\u7684\u66FF\u4EE3\u6A21\u578B\uFF1F\u5BF9\u6BD4\u7EFC\u5408\u5206\u3001\u6DF7\u5408\u4EF7\u4E0E\u8BA1\u8D39\u5DEE\u5F02\uFF0C\u9644\u6362\u6A21\u578B\u524D\u7684\u9A8C\u8BC1\u6B65\u9AA4\u3002",
    saves: "\u7701 {percent}%",
    noScore: "\u6682\u65E0\u7EFC\u5408\u5206",
    current: "\u5F53\u524D\u6A21\u578B",
    viewDetail: "\u67E5\u770B\u5B8C\u6574\u53C2\u6570",
    otherModels: "\u6362\u522B\u7684\u6A21\u578B\u770B\u770B",
    none: "\u6309\u5F53\u524D\u6570\u636E\uFF0C\u6CA1\u6709\u627E\u5230\u6BD4 {name} \u660E\u663E\u66F4\u4FBF\u5B9C\u53C8\u591F\u7528\u7684\u9009\u62E9\u3002\u5B83\u53EF\u80FD\u672C\u6765\u5C31\u5728\u6027\u4EF7\u6BD4\u524D\u5217\u3002",
    sections: {
      cheaper: "\u540C\u6C34\u5E73\u66F4\u4FBF\u5B9C",
      cheaperNote: "\u7EFC\u5408\u5206\u4E0E\u5F53\u524D\u6A21\u578B\u76F8\u5F53\u6216\u66F4\u9AD8\uFF0C\u4F46\u4EF7\u683C\u66F4\u4F4E\u3002\u8FD9\u4E00\u6863\u901A\u5E38\u53EF\u4EE5\u76F4\u63A5\u6362\u3002",
      deepCut: "\u5927\u5E45\u964D\u6863",
      deepCutNote: "\u4FBF\u5B9C\u5230\u4E94\u5206\u4E4B\u4E00\u4EE5\u4E0B\u3002\u80FD\u529B\u786E\u5B9E\u4F1A\u6389\uFF0C\u503C\u4E0D\u503C\u5F97\u53D6\u51B3\u4E8E\u4F60\u7684\u4EFB\u52A1\u2014\u2014\u6211\u624B\u4E0A\u6CA1\u6709\u7F16\u7A0B\u7B49\u5206\u7EF4\u5EA6\u7684\u8BC4\u5206\uFF0C\u8FD9\u4E2A\u95EE\u9898\u6211\u7B54\u4E0D\u4E86\uFF0C\u53EA\u80FD\u9760\u4F60\u81EA\u5DF1\u8BD5\u3002",
      stronger: "\u540C\u4EF7\u4F4D\u66F4\u5F3A",
      strongerNote: "\u4EF7\u683C\u76F8\u5F53\u4F46\u7EFC\u5408\u5206\u66F4\u9AD8\u3002\u5982\u679C\u4F60\u6362\u6A21\u578B\u7684\u52A8\u673A\u662F\u6548\u679C\u4E0D\u591F\uFF0C\u5148\u770B\u8FD9\u4E00\u6863\u3002",
      neighbors: "\u4EF7\u683C\u76F8\u8FD1",
      neighborsNote: "\u5F53\u524D\u6A21\u578B\u6CA1\u6709\u53EF\u6838\u5B9E\u7684\u7EFC\u5408\u5206\uFF0C\u65E0\u6CD5\u505A\u80FD\u529B\u5BF9\u6BD4\uFF0C\u8FD9\u91CC\u6309\u6DF7\u5408\u4EF7\u63A5\u8FD1\u7A0B\u5EA6\u5217\u51FA\u3002"
    },
    warnings: {
      tiers: "\u6709\u9636\u68AF\u4EF7\uFF1A\u8F93\u5165\u8D85\u8FC7 {value} token \u540E\u5355\u4EF7\u4F1A\u8DF3\u6863\uFF0C\u957F\u4E0A\u4E0B\u6587\u573A\u666F\u8981\u6309\u5B9E\u9645\u6863\u4F4D\u91CD\u7B97\u3002",
      timeWindows: "\u5206\u65F6\u6BB5\u8BA1\u4EF7\uFF1A{value} \u66F4\u4FBF\u5B9C\uFF0C\u79BB\u7EBF\u4EFB\u52A1\u9519\u5CF0\u8DD1\u80FD\u76F4\u63A5\u7701\u4E00\u622A\u3002",
      promo: "{value}",
      batch: "\u6279\u91CF\u63A5\u53E3\u7EA6\u4E3A\u5E38\u89C4\u4EF7\u7684 {value}%\uFF0C\u4E0D\u8D76\u65F6\u95F4\u7684\u4EFB\u52A1\u5E94\u8BE5\u8D70\u6279\u91CF\u3002",
      cache: "\u7F13\u5B58\u4E0D\u6309\u5199\u5165\u6536\u8D39\uFF0C\u6539\u6309\u5B58\u50A8\u65F6\u957F\u8BA1\u8D39\u2014\u2014\u7F13\u5B58\u7559\u5F97\u8D8A\u4E45\u8FD9\u7B14\u8D8A\u8D35\uFF0C\u548C\u6309\u6B21\u6536\u8D39\u7684\u6A21\u578B\u4E0D\u662F\u4E00\u56DE\u4E8B\u3002",
      modality: "{value} \u8F93\u5165\u5355\u72EC\u8BA1\u4EF7\u4E14\u66F4\u8D35\uFF0C\u591A\u6A21\u6001\u8D1F\u8F7D\u4E0D\u80FD\u6309\u6587\u672C\u5355\u4EF7\u4F30\u3002",
      unstructured: "\u8BE5\u6A21\u578B\u7684\u8BA1\u8D39\u89C4\u5219\u672C\u7AD9\u5C1A\u672A\u7ED3\u6784\u5316\u6838\u5B9E\uFF0C\u53EF\u80FD\u5B58\u5728\u9636\u68AF\u4EF7\u6216\u65F6\u6BB5\u4EF7\uFF0C\u6362\u4E4B\u524D\u8BF7\u81EA\u884C\u6838\u5BF9\u5B98\u65B9\u5B9A\u4EF7\u9875\u3002"
    },
    verify: {
      title: "\u6362\u4E4B\u524D\u5148\u81EA\u5DF1\u9A8C\u4E00\u904D",
      step1: "\u6311\u4E09\u5230\u4E94\u4E2A\u4F60\u771F\u5B9E\u8DD1\u8FC7\u7684\u4EFB\u52A1\uFF0C\u628A\u539F\u59CB\u8F93\u5165\u539F\u6837\u5582\u7ED9\u5019\u9009\u6A21\u578B\u3002",
      step2: "\u4E0D\u770B\u300C\u7B54\u5F97\u597D\u4E0D\u597D\u300D\uFF0C\u53EA\u770B\u300C\u4F1A\u4E0D\u4F1A\u7FFB\u8F66\u300D\uFF1A\u683C\u5F0F\u662F\u5426\u5B88\u7EA6\u3001\u957F\u4E0A\u4E0B\u6587\u6709\u6CA1\u6709\u4E22\u7EC6\u8282\u3001\u5DE5\u5177\u8C03\u7528\u53C2\u6570\u5BF9\u4E0D\u5BF9\u3002",
      step3: "\u628A\u4E24\u8FB9\u8F93\u51FA\u5E76\u6392\u653E\uFF0C\u7FFB\u8F66\u7387\u8D85\u8FC7\u4E00\u6210\u5C31\u522B\u6362\uFF1B\u4E00\u6210\u4EE5\u5185\u53EF\u4EE5\u5148\u5728\u975E\u5173\u952E\u8DEF\u5F84\u4E0A\u8DD1\u4E00\u5468\u3002",
      caveat: "\u8FD9\u4E2A\u7EFC\u5408\u5206\u6765\u81EA\u7B2C\u4E09\u65B9\u901A\u7528\u699C\u5355\uFF0C\u53CD\u6620\u4E0D\u4E86\u4F60\u624B\u5934\u8FD9\u4E2A\u5177\u4F53\u4EFB\u52A1\u2014\u2014\u8FD9\u8BDD\u6211\u5728\u597D\u51E0\u9875\u90FD\u8BF4\u8FC7\uFF0C\u4F46\u8FD9\u91CC\u6700\u8981\u7D27\uFF0C\u6240\u4EE5\u518D\u8BF4\u4E00\u904D\u3002\u7701\u4E0B\u7684\u94B1\u662F\u5B9E\u6253\u5B9E\u7684\uFF0C\u591F\u4E0D\u591F\u7528\uFF0C\u53EA\u6709\u4F60\u81EA\u5DF1\u8BD5\u8FC7\u624D\u7B97\u6570\u3002"
    }
  },
  about: {
    title: "\u5173\u4E8E\u5408\u559C AI",
    subtitle: "\u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 \xB7 \u5584\u7528 AI\uFF0C\u4E00\u4EBA\u6210\u519B\uFF0C\u6EE1\u5FC3\u6B22\u559C\u3002",
    seoTitle: "\u5173\u4E8E\u5408\u559C AI - \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357\u4E0E\u6570\u636E\u51FA\u5904",
    explore: "\u4ECE\u8FD9\u91CC\u5F00\u59CB\u770B",
    who: {
      title: "\u8FD9\u4E2A\u7AD9\u662F\u8C01\u5728\u505A",
      p1: "\u6211\u662F\u53EF\u4E50\u3002\u505A\u8FD9\u884C\u8FD9\u4E9B\u5E74\u4E00\u76F4\u5728\u548C AI \u6253\u4EA4\u9053\uFF0C\u624B\u4E0A\u7EF4\u62A4\u7740\u4E00\u4E2A AI \u7F51\u5173\uFF0C\u8BF4\u767D\u4E86\u5C31\u662F\u5E2E\u4EBA\u4E2D\u8F6C\u8C03\u7528\u5404\u5BB6\u5927\u6A21\u578B\u3002\u5E72\u8FD9\u884C\u5929\u5929\u8981\u76EF\u5404\u5BB6\u7684\u62A5\u4EF7\u5355\u2014\u2014\u8C01\u5BB6\u53C8\u8C03\u4EF7\u4E86\u3001\u54EA\u4E2A\u4FC3\u9500\u8981\u5230\u671F\u4E86\u3001\u7F13\u5B58\u8BA1\u8D39\u53C8\u6539\u4E86\u89C4\u5219\uFF0C\u8FD9\u4E9B\u4E8B\u6211\u81EA\u5DF1\u6BCF\u5468\u90FD\u8981\u8FC7\u4E00\u904D\u8D26\u3002",
      p2: "\u7D22\u6027\u628A\u8FD9\u5957\u8D26\u672C\u505A\u6210\u4E86\u4E00\u4E2A\u516C\u5F00\u7684\u7AD9\uFF1A\u4E00\u662F\u7701\u5F97\u81EA\u5DF1\u6BCF\u6B21\u91CD\u65B0\u7FFB\uFF0C\u4E8C\u662F\u8FD9\u4E9B\u6570\u5B57\u672C\u6765\u5C31\u8BE5\u8BA9\u66F4\u591A\u4EBA\u770B\u5230\u3002\u6570\u636E\u662F\u6211\u4E00\u6761\u6761\u6838\u5BF9\u7684\uFF0C\u5224\u65AD\u4E5F\u662F\u6211\u81EA\u5DF1\u7684\u2014\u2014\u540C\u610F\u4E0D\u540C\u610F\uFF0C\u4F60\u90FD\u53EF\u4EE5\u987A\u7740\u6765\u6E90\u94FE\u63A5\u81EA\u5DF1\u53BB\u67E5\u3002"
    },
    what: {
      title: "\u8FD9\u4E2A\u7AD9\u505A\u4EC0\u4E48",
      p1: "\u6211\u60F3\u641E\u6E05\u695A\u4E24\u4EF6\u4E8B\uFF1A\u8BE5\u7528\u4EC0\u4E48\u6A21\u578B\uFF0C\u4EE5\u53CA\u54EA\u4E2A\u66F4\u5212\u7B97\u3002\u6A21\u578B\u8D8A\u6765\u8D8A\u591A\uFF0C\u5404\u5BB6\u7684\u6807\u4EF7\u53E3\u5F84\u3001\u8BA1\u8D39\u5355\u4F4D\u3001\u4FC3\u9500\u89C4\u5219\u90FD\u4E0D\u4E00\u6837\uFF0C\u76F4\u63A5\u6A2A\u5411\u6BD4\u662F\u6BD4\u4E0D\u660E\u767D\u7684\uFF0C\u5F97\u5148\u628A\u8FD9\u4E9B\u5DEE\u5F02\u62C9\u5E73\u2014\u2014\u8FD9\u4EF6\u4E8B\u672C\u8EAB\u5C31\u633A\u8D39\u5DE5\u592B\uFF0C\u6240\u4EE5\u6211\u628A\u5B83\u505A\u6210\u4E86\u4E00\u4E2A\u7AD9\uFF0C\u4E0D\u7528\u6BCF\u6B21\u90FD\u4ECE\u5934\u67E5\u4E00\u904D\u3002",
      p2: "\u76EE\u524D\u6536\u5F55 {count} \u4E2A\u6A21\u578B\u3001{vendors} \u5BB6\u5382\u5546\uFF0C\u8986\u76D6\u5404\u5BB6\u65D7\u8230\u3001\u4E2D\u6863\u4E0E\u4FBF\u5B9C\u6863\uFF0C\u6D77\u5916\u4E0E\u56FD\u4EA7\u90FD\u6709\u3002"
    },
    how: {
      title: "\u6570\u636E\u4ECE\u54EA\u6765",
      p1: "\u6211\u4E0D\u8DD1\u81EA\u5DF1\u7684\u57FA\u51C6\u2014\u2014\u8DD1\u57FA\u51C6\u8981\u82B1\u7684\u65F6\u95F4\uFF0C\u591F\u6211\u628A\u8FD9\u4E9B\u9875\u9762\u8BA4\u771F\u6838\u5BF9\u597D\u51E0\u904D\u4E86\u3002\u4EF7\u683C\u3001\u4E0A\u4E0B\u6587\u957F\u5EA6\u3001\u8F93\u5165\u6A21\u6001\u8FD9\u4E9B\u89C4\u683C\uFF0C\u6211\u4E00\u6761\u6761\u4ECE\u5B98\u65B9\u5B9A\u4EF7\u9875\u548C\u6A21\u578B\u6587\u6863\u91CC\u6284\u4E0B\u6765\uFF1B\u80FD\u529B\u8BC4\u5206\u4E0E\u8F93\u51FA\u901F\u5EA6\u53D6\u81EA Artificial Analysis \u7684\u516C\u5F00\u699C\u5355\u3002\u6BCF\u4E2A\u6A21\u578B\u8BE6\u60C5\u9875\u90FD\u5217\u4E86\u6765\u6E90\u94FE\u63A5\u548C\u6211\u6838\u5BF9\u7684\u65E5\u671F\uFF0C\u4E0D\u653E\u5FC3\u4F60\u81EA\u5DF1\u53BB\u7FFB\u3002",
      p2: "\u4E3A\u4E86\u8BA9\u4E0D\u540C\u5382\u5546\u7684\u6807\u4EF7\u80FD\u6BD4\uFF0C\u6211\u5B9A\u4E86\u4E2A\u6DF7\u5408\u4EF7\uFF1A\u8F93\u5165\u4EF7\u4E0E\u8F93\u51FA\u4EF7\u6309 3:1 \u52A0\u6743\uFF0C\u7F8E\u5143\u6807\u4EF7\u6309\u56FA\u5B9A\u6C47\u7387\u6298\u6210\u4EBA\u6C11\u5E01\u3002\u8FD9\u4E24\u4E2A\u90FD\u662F\u6211\u5B9A\u7684\u5047\u8BBE\uFF0C\u4E0D\u662F\u4E8B\u5B9E\u2014\u2014\u699C\u5355\u9875\u5199\u660E\u4E86\u53E3\u5F84\uFF0C\u6362\u4E00\u7EC4\u6743\u91CD\u6392\u540D\u4F1A\u53D8\uFF0C\u8FD9\u70B9\u6211\u85CF\u4E0D\u4F4F\u4E5F\u4E0D\u6253\u7B97\u85CF\u3002",
      p3: "\u6570\u636E\u6211\u6700\u8FD1\u4E00\u6B21\u6838\u5BF9\u4E8E {date}\u3002",
      p4: "\u6574\u4E2A\u6570\u636E\u96C6\u6211\u4E5F\u5F00\u653E\u6210\u4E86\u63A5\u53E3\uFF1A{apiPath}\uFF0C\u8FD4\u56DE\u5168\u91CF\u6A21\u578B\u4E0E\u5382\u5546\u6570\u636E\uFF0C\u5E26 schema \u7248\u672C\u3001\u6C47\u7387\u53E3\u5F84\u4E0E\u6765\u6E90\u8BF4\u660E\u3002\u7F72\u540D hoxi.ai \u968F\u4FBF\u62FF\u53BB\u7528\u2014\u2014\u505A\u63D2\u4EF6\u3001\u505A CLI\u3001\u505A\u4F60\u81EA\u5DF1\u7684\u6BD4\u4EF7\u9875\u90FD\u884C\u3002"
    },
    limits: {
      title: "\u8FD9\u4E2A\u7AD9\u6709\u4EC0\u4E48\u662F\u505A\u4E0D\u5230\u7684",
      p1: "\u6570\u636E\u9760\u6211\u4E00\u4E2A\u4EBA\u7EF4\u62A4\uFF0C\u80AF\u5B9A\u4F1A\u6EDE\u540E\u3002\u5382\u5546\u8C03\u4EF7\u3001\u4FC3\u9500\u5230\u671F\u3001\u65B0\u6A21\u578B\u53D1\u5E03\uFF0C\u90FD\u53EF\u80FD\u8BA9\u8FD9\u91CC\u7684\u6570\u5B57\u8DDF\u4E0D\u4E0A\u3002\u505A\u6B63\u5F0F\u7684\u6210\u672C\u4F30\u7B97\u524D\uFF0C\u9EBB\u70E6\u4F60\u4EE5\u5382\u5546\u5B98\u65B9\u9875\u9762\u4E3A\u51C6\uFF0C\u522B\u53EA\u4FE1\u6211\u8FD9\u4E00\u9875\u3002",
      p2: "\u6211\u73B0\u5728\u53EA\u6709\u7EFC\u5408\u8BC4\u5206\uFF0C\u6CA1\u6709\u7F16\u7A0B\u3001\u4E2D\u6587\u3001Agent \u8FD9\u4E9B\u5206\u7EF4\u5EA6\u7684\u6D4B\u8BC4\u6570\u636E\u3002\u7701\u94B1\u6307\u5357\u91CC\u51E1\u662F\u6D89\u53CA\u8FD9\u4E9B\u80FD\u529B\u7684\u63A8\u8350\uFF0C\u6211\u90FD\u6807\u4E86\u300C\u5C5E\u4E8E\u7F16\u8F91\u5224\u65AD\u300D\u2014\u2014\u90A3\u662F\u6211\u81EA\u5DF1\u7684\u770B\u6CD5\uFF0C\u4E0D\u662F\u6D4B\u51FA\u6765\u7684\u7ED3\u8BBA\u3002\u771F\u8981\u4E0A\u751F\u4EA7\uFF0C\u62FF\u4F60\u81EA\u5DF1\u7684\u4EFB\u52A1\u5B9E\u6D4B\u4E00\u904D\u624D\u7B97\u6570\uFF0C\u522B\u62FF\u6211\u7684\u5224\u65AD\u5F53\u514D\u6B7B\u91D1\u724C\u3002",
      p3: "\u300C\u2014\u300D\u8868\u793A\u6211\u6CA1\u67E5\u5230\u53EF\u6838\u5B9E\u7684\u6570\u636E\uFF0C\u4E0D\u8868\u793A\u8FD9\u9879\u662F\u96F6\u3001\u4E5F\u4E0D\u8868\u793A\u8FD9\u4E2A\u6A21\u578B\u5DEE\u3002\u6211\u5B81\u53EF\u7559\u767D\u8BA9\u4F60\u770B\u51FA\u8FD9\u91CC\u6CA1\u5199\u5B8C\uFF0C\u4E5F\u4E0D\u60F3\u7F16\u4E00\u4E2A\u6570\u5B57\u7CCA\u5F04\u8FC7\u53BB\u3002"
    }
  },
  posts: {
    title: "\u5B9E\u6218\u535A\u5BA2 & \u6280\u672F\u5FC3\u5F97",
    subtitle: "\u8BB0\u5F55\u771F\u5B9E\u7684 AI \u8F85\u52A9\u7F16\u7A0B\u3001\u5168\u6808\u5F00\u53D1\u5B9E\u6218\u3001\u6280\u672F\u8BC4\u6D4B\u4E0E\u6DF1\u5EA6\u8E29\u5751\u5FC3\u5F97\u3002",
    seoTitle: "\u5B9E\u6218\u535A\u5BA2 & \u6280\u672F\u5FC3\u5F97 - Hoxi",
    seoDescription: "\u8BB0\u5F55\u771F\u5B9E\u7684 AI \u8F85\u52A9\u7F16\u7A0B\u5DE5\u4F5C\u6D41\u3001\u5168\u6808\u5F00\u53D1\u5B9E\u6218\u3001\u6280\u672F\u8BC4\u6D4B\u4E0E\u6DF1\u5EA6\u8E29\u5751\u5FC3\u5F97\u3002",
    empty: "\u8FD8\u6CA1\u6709\u53D1\u5E03\u6587\u7AE0\u3002",
    checkBackLater: "\u656C\u8BF7\u671F\u5F85\u66F4\u591A\u6DF1\u5EA6\u8BC4\u6D4B\u4E0E\u5B9E\u6218\u5206\u4EAB",
    views: "{count} \u6B21\u9605\u8BFB",
    toc: "\u76EE\u5F55",
    pagination: "\u6587\u7AE0\u5206\u9875",
    previous: "\u4E0A\u4E00\u9875",
    next: "\u4E0B\u4E00\u9875",
    backToList: "\u8FD4\u56DE\u6587\u7AE0\u5217\u8868"
  },
  cheap: {
    title: "AI \u6A21\u578B\u7701\u94B1\u6307\u5357",
    subtitle: "\u6309\u4F7F\u7528\u573A\u666F\u7ED9\u51FA\u4E09\u6863\u9009\u62E9\uFF1A\u4E0D\u8BA1\u6210\u672C\u7684\u9996\u9009\u3001\u591A\u6570\u4EBA\u8BE5\u9009\u7684\u6027\u4EF7\u6BD4\u6863\uFF0C\u4EE5\u53CA\u80FD\u7701\u5230\u4EC0\u4E48\u7A0B\u5EA6\u3002",
    seoTitle: "AI \u6A21\u578B\u7701\u94B1\u6307\u5357 - \u4FBF\u5B9C\u597D\u7528\u7684\u6A21\u578B\u600E\u4E48\u9009",
    seoDescription: "\u6309\u5199\u4EE3\u7801\u3001\u957F\u6587\u6863\u3001\u6279\u91CF\u5904\u7406\u3001\u7FFB\u8BD1\u7B49\u573A\u666F\u63A8\u8350\u4FBF\u5B9C\u597D\u7528\u7684 AI \u6A21\u578B\uFF0C\u9644\u4EF7\u683C\u5BF9\u6BD4\u4E0E\u7701\u94B1\u6280\u5DE7\u3002\u6BCF\u6761\u63A8\u8350\u90FD\u6807\u660E\u4F9D\u636E\u6765\u6E90\u3002",
    basisTitle: "\u8FD9\u4E9B\u63A8\u8350\u662F\u600E\u4E48\u6765\u7684",
    basisNote: "\u4EF7\u683C\u4E0E\u4E0A\u4E0B\u6587\u957F\u5EA6\u53D6\u81EA\u5404\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875\uFF0C\u7EFC\u5408\u5206\u4E0E\u901F\u5EA6\u53D6\u81EA Artificial Analysis \u699C\u5355\u2014\u2014\u8FD9\u51E0\u9879\u6211\u80FD\u62CD\u7740\u80F8\u812F\u8BF4\u662F\u53EF\u6838\u5B9E\u7684\u3002\u4F46\u6211\u624B\u5934\u6CA1\u6709\u7F16\u7A0B\u3001\u4E2D\u6587\u3001Agent \u8FD9\u4E9B\u5206\u7EF4\u5EA6\u7684\u8BC4\u5206\uFF0C\u51E1\u662F\u6D89\u53CA\u8FD9\u4E9B\u80FD\u529B\u7684\u5224\u65AD\uFF0C\u90FD\u662F\u6211\u81EA\u5DF1\u7684\u7F16\u8F91\u610F\u89C1\uFF0C\u6BCF\u4E2A\u573A\u666F\u4E0B\u90FD\u5355\u72EC\u6807\u4E86\u51FA\u6765\u3002\u771F\u8981\u4E0A\u751F\u4EA7\uFF0C\u62FF\u4F60\u81EA\u5DF1\u7684\u4EFB\u52A1\u5B9E\u6D4B\u4E00\u904D\u518D\u5B9A\uFF0C\u522B\u7167\u5355\u5168\u6536\u3002",
    basisLabel: "\u63A8\u8350\u4F9D\u636E\uFF1A",
    tiers: {
      best: "\u9996\u9009",
      value: "\u6027\u4EF7\u6BD4",
      budget: "\u6781\u7701"
    },
    tableTitle: "\u4FBF\u5B9C\u6A21\u578B\u603B\u699C",
    tableNote: "\u6309\u6DF7\u5408\u4EF7\u5347\u5E8F\u6392\u5217\u7684\u524D 15 \u4E2A\u6A21\u578B\u3002\u4EF7\u683C\u4F4E\u4E0D\u7B49\u4E8E\u591F\u7528\uFF0C\u8BF7\u7ED3\u5408\u7EFC\u5408\u5206\u4E00\u8D77\u770B\u2014\u2014\u663E\u793A\u4E3A\u300C\u2014\u300D\u7684\u8868\u793A\u8BE5\u6A21\u578B\u6CA1\u6709\u53EF\u6838\u5B9E\u7684\u8BC4\u5206\u6570\u636E\u3002",
    viewFullTable: "\u67E5\u770B\u5B8C\u6574\u699C\u5355",
    tipsTitle: "\u7701\u94B1\u6280\u5DE7",
    tips: {
      cache: {
        title: "\u628A\u7A33\u5B9A\u4E0D\u53D8\u7684\u5185\u5BB9\u653E\u8FDB\u7F13\u5B58",
        body: "\u591A\u6570\u5382\u5546\u7684\u7F13\u5B58\u547D\u4E2D\u4EF7\u53EA\u6709\u8F93\u5165\u4EF7\u7684\u5341\u5206\u4E4B\u4E00\u5DE6\u53F3\u3002\u7CFB\u7EDF\u63D0\u793A\u3001\u4EE3\u7801\u5E93\u3001\u957F\u6587\u6863\u8FD9\u4E9B\u6BCF\u6B21\u90FD\u8981\u5E26\u4E0A\u7684\u5185\u5BB9\uFF0C\u653E\u8FDB\u7F13\u5B58\u540E\u91CD\u590D\u8C03\u7528\u7684\u6210\u672C\u4F1A\u5927\u5E45\u4E0B\u964D\u3002\u6CE8\u610F\u5404\u5BB6\u8BA1\u8D39\u65B9\u5F0F\u4E0D\u540C\uFF1A\u6709\u7684\u6536\u7F13\u5B58\u5199\u5165\u8D39\uFF0C\u6709\u7684\u6309\u7F13\u5B58\u5B58\u50A8\u65F6\u957F\u6536\u8D39\u3002"
      },
      routing: {
        title: "\u6309\u96BE\u5EA6\u5206\u6D41\uFF0C\u4E0D\u8981\u4E00\u4E2A\u6A21\u578B\u8DD1\u5230\u5E95",
        body: "\u628A\u7B80\u5355\u4EFB\u52A1\uFF08\u5206\u7C7B\u3001\u62BD\u53D6\u3001\u683C\u5F0F\u5316\uFF09\u4EA4\u7ED9\u4FBF\u5B9C\u6863\uFF0C\u53EA\u628A\u771F\u6B63\u9700\u8981\u63A8\u7406\u7684\u6B65\u9AA4\u4EA4\u7ED9\u65D7\u8230\u3002\u591A\u6570 Agent \u94FE\u8DEF\u91CC\uFF0C\u9700\u8981\u9876\u7EA7\u80FD\u529B\u7684\u6B65\u9AA4\u4E0D\u5230\u4E24\u6210\u3002"
      },
      effort: {
        title: "\u8C03\u4F4E\u63A8\u7406\u6863\u4F4D",
        body: "\u540C\u4E00\u4E2A\u6A21\u578B\u7684 max \u4E0E medium \u6863\uFF0C\u4EF7\u683C\u76F8\u540C\u4F46\u8F93\u51FA\u7684\u601D\u8003 token \u6570\u5DEE\u5F88\u591A\uFF0C\u9996\u5B57\u5EF6\u8FDF\u4E5F\u5DEE\u51FA\u51E0\u5341\u79D2\u3002\u4E0D\u9700\u8981\u6DF1\u5EA6\u63A8\u7406\u7684\u4EFB\u52A1\u628A\u6863\u4F4D\u8C03\u4E0B\u6765\uFF0C\u7701\u94B1\u53C8\u53D8\u5FEB\u3002"
      },
      batch: {
        title: "\u7528\u6279\u91CF\u63A5\u53E3\u548C\u7A7A\u95F2\u65F6\u6BB5",
        body: "\u591A\u5BB6\u5382\u5546\u7684\u6279\u91CF\u8C03\u7528\u662F\u4E94\u6298\uFF0CDeepSeek \u8FD8\u6709\u7A7A\u95F2\u65F6\u6BB5\u534A\u4EF7\u3002\u4E0D\u8D76\u65F6\u95F4\u7684\u79BB\u7EBF\u4EFB\u52A1\u653E\u8FDB\u6279\u91CF\u6216\u9519\u5CF0\u8DD1\uFF0C\u6210\u672C\u76F4\u63A5\u51CF\u534A\u3002"
      },
      tiers: {
        title: "\u5F53\u5FC3\u9636\u68AF\u4EF7\u548C\u4FC3\u9500\u4EF7",
        body: "\u4E0D\u5C11\u6A21\u578B\u6309\u8F93\u5165\u957F\u5EA6\u5206\u6863\uFF0C\u8D85\u8FC7\u9608\u503C\u5355\u4EF7\u4F1A\u8DF3\u4E00\u5230\u4E24\u500D\uFF1B\u4E5F\u6709\u6A21\u578B\u73B0\u5728\u7684\u4F4E\u4EF7\u662F\u9650\u65F6\u4FC3\u9500\uFF0C\u5230\u671F\u4F1A\u7FFB\u500D\u3002\u505A\u957F\u671F\u6210\u672C\u4F30\u7B97\u65F6\u8981\u6309\u5230\u671F\u540E\u7684\u4EF7\u683C\u7B97\u3002"
      },
      tokenizer: {
        title: "\u522B\u53EA\u770B\u5355\u4EF7\uFF0C\u8981\u770B\u540C\u4E00\u6BB5\u6587\u672C\u5207\u51FA\u591A\u5C11 token",
        body: "\u4E0D\u540C\u5382\u5546\u7684\u5206\u8BCD\u5668\u4E0D\u540C\uFF0C\u540C\u6837\u4E00\u6BB5\u4E2D\u6587\u5207\u51FA\u7684 token \u6570\u53EF\u80FD\u5DEE\u4E09\u6210\u3002\u5355\u4EF7\u4F4E\u4E0D\u7B49\u4E8E\u603B\u82B1\u8D39\u4F4E\uFF0C\u6700\u53EF\u9760\u7684\u529E\u6CD5\u662F\u62FF\u81EA\u5DF1\u7684\u771F\u5B9E\u8BED\u6599\u5404\u8DD1\u4E00\u904D\u518D\u6BD4\u603B\u8D26\u5355\u3002"
      }
    }
  },
  gateways: {
    title: "AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF\u699C",
    subtitle: "\u5B9E\u6D4B\u5404\u5927 AI \u4E2D\u8F6C\u7AD9\u8282\u70B9\u5728\u7EBF\u7387\u3001\u5B9E\u6D4B\u5EF6\u8FDF\u3001\u6BCF\u767E\u4E07 Token \u5355\u4EF7\u4E0E\u771F\u5B9E\u53EF\u7528\u6027\u3002",
    seoTitle: "AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF\u699C - \u4F4E\u5EF6\u8FDF\u56FD\u5185\u4E13\u7EBF\u4E0E API \u805A\u5408\u63A8\u8350",
    seoDescription: "\u5B9E\u6D4B\u5404\u5927 AI \u4E2D\u8F6C\u7AD9\u8282\u70B9\u5728\u7EBF\u7387 (99.99%)\u3001\u9996\u5B57\u5EF6\u8FDF (<300ms)\u3001\u652F\u6301\u6A21\u578B\u4E0E\u5355\u4EF7\u5BF9\u6BD4\u3002\u652F\u6301 Cursor / VS Code / Cline 1 \u5206\u949F\u5FEB\u901F\u914D\u7F6E\uFF0C\u652F\u6301\u5FAE\u4FE1\u652F\u4ED8\u5B9D\u968F\u7528\u968F\u5145\u3002"
  },
  savings: {
    title: "AI \u7B97\u529B\u7701\u94B1\u6307\u5357",
    subtitle: "\u6211\u662F\u53EF\u4E50\u3002\u7B97\u529B\u662F\u4E00\u4EBA\u516C\u53F8\u6700\u5927\u4E5F\u662F\u6700\u597D\u538B\u7F29\u7684\u56FA\u5B9A\u5F00\u9500\u3002\u5728\u8FD9\u91CC\u6211\u4E0D\u8BB2\u5B8F\u5927\u53D9\u4E8B\uFF0C\u53EA\u5206\u4EAB\u65E5\u5E38\u5F00\u53D1\u4E2D\u5B9E\u6D4B\u51FA\u6765\u7684\u964D\u672C\u51B3\u7B56\u6811\u3001\u9AD8\u6027\u4EF7\u6BD4\u4E2D\u8F6C\u4E0E\u8BA2\u9605\u907F\u5751\u65B9\u6848\u3002",
    seoTitle: "AI \u7B97\u529B\u7701\u94B1\u6307\u5357 \xB7 \u4E00\u4EBA\u516C\u53F8\u964D\u672C\u51B3\u7B56\u4E2D\u5FC3 - \u5408\u559C AI",
    seoDescription: "\u6574\u7406\u4E00\u4EBA\u516C\u53F8\u4E0E\u72EC\u7ACB\u5F00\u53D1\u5FC5\u5907\u7684 AI \u7B97\u529B\u7701\u94B1\u65B9\u6848\uFF1A\u6A21\u578B\u6027\u4EF7\u6BD4\u6A2A\u8BC4\u3001\u9760\u8C31\u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u3001Coding Plan \u8BA2\u9605\u907F\u5751\u53CA\u5E73\u66FF\u8BA1\u7B97\u5668\u3002",
    decisionBadge: "\u964D\u672C\u6CD5\u5219",
    decisionTitle: "\u4E00\u4EBA\u516C\u53F8\u7B97\u529B\u964D\u672C\u51B3\u7B56\u6811",
    decisionDesc: "\u4E0D\u8981\u4E00\u4E0A\u6765\u5C31\u5F00\u5404\u79CD\u6708\u8D39\u8BA2\u9605\uFF0C\u4E5F\u4E0D\u8981\u5728\u4E0D\u9760\u8C31\u7684\u4E2D\u8F6C\u4E0A\u4EA4\u5B66\u8D39\u3002\u6309\u8FD9\u5957\u89C4\u5219\u9009\uFF0C\u6BCF\u5E74\u81F3\u5C11\u7701\u4E0B\u4E00\u53F0\u9876\u914D\u7535\u8111\u94B1\u3002",
    rule1Title: "\u8F7B\u91CF / \u8BD5\u6C34\u671F\uFF1A\u76F4\u63A5\u7528\u9AD8\u8D28\u4E2D\u8F6C",
    rule1Desc: "\u6708\u6D88\u8017\u4F4E\u4E8E 1000 \u4E07 Token \u65F6\uFF0C\u5343\u4E07\u522B\u5F00\u52A8\u8F84 $20-$40 \u7684\u6309\u6708\u8BA2\u9605\u3002\u7528\u9760\u8C31\u4E2D\u8F6C\u6309\u91CF\u8BA1\u8D39\uFF0C\u7528\u591A\u5C11\u6263\u591A\u5C11\uFF0C\u51E0\u5341\u5757\u94B1\u80FD\u5199\u4E00\u4E24\u4E2A\u6708\u3002",
    rule2Title: "\u91CD\u5EA6\u9AD8\u9891\u7F16\u7801\uFF1A\u4F18\u5148\u9009 Coding Plan",
    rule2Desc: "\u5982\u679C\u6BCF\u5929\u6CE1\u5728 IDE \u91CC\u5199\u51E0\u767E\u6B21\u8865\u5168\u548C\u591A\u6587\u4EF6\u91CD\u6784\uFF0C\u76F4\u63A5\u4E0A Cursor / GitHub Copilot / Trae \u7B49\u5B98\u65B9\u5957\u9910\uFF0C\u9AD8\u901F\u914D\u989D\u6298\u7B97\u4E0B\u6765\u5355\u4EF7\u6781\u5176\u5212\u7B97\u3002",
    rule3Title: "\u590D\u6742\u957F\u6587\u672C / \u601D\u8003\u6A21\u5F0F\uFF1A\u9996\u9009\u5E73\u66FF\u4E0E\u56FD\u4EA7\u9876\u6D41",
    rule3Desc: "DeepSeek R1/V3\u3001Qwen 2.5 Coder \u7684\u7F16\u7A0B\u8868\u73B0\u5DF2\u903C\u8FD1\u9876\u7EA7\u65D7\u8230\uFF0C\u800C\u4EF7\u683C\u4EC5\u4E3A Claude 3.7 \u7684 1/10 \u5230 1/20\uFF0C\u5927\u6279\u91CF\u4EFB\u52A1\u76F4\u63A5\u5E73\u66FF\u3002",
    modelsSectionTitle: "\u4E3B\u529B\u6A21\u578B\u4F53\u611F\u4E0E\u6027\u4EF7\u6BD4",
    modelsSectionNote: "\u62D2\u7EDD\u865A\u6807\u8DD1\u5206\uFF0C\u53EA\u770B\u771F\u5B9E\u5199\u4EE3\u7801\u3001\u6392\u67E5 Bug \u7684\u5B9E\u6218\u8868\u73B0\u4E0E\u6298\u7B97\u5355\u4EF7",
    viewAllModels: "\u67E5\u770B\u5168\u90E8\u6A21\u578B\u699C\u5355\u4E0E\u5355\u4EF7",
    gatewaysSectionTitle: "\u9760\u8C31 AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF",
    gatewaysSectionNote: "\u6301\u7EED\u7528\u771F\u5B9E API Key \u5B9E\u6D4B\u5EF6\u8FDF\u3001\u4E22\u5305\u7387\u4E0E\u771F\u4F2A\u6A21\u578B\uFF0C\u62D2\u7EDD\u63BA\u6C34\u964D\u667A",
    viewAllGateways: "\u67E5\u770B\u5B8C\u6574\u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF",
    plansSectionTitle: "Coding Plan \u7F16\u7A0B\u5957\u9910\u6A2A\u8BC4",
    plansSectionNote: "\u56FD\u5185\u5916\u4E3B\u6D41 AI \u7F16\u7A0B\u8BA2\u9605\u5B9E\u6D4B\uFF1A\u989D\u5EA6\u4E0A\u9650\u3001\u6A21\u578B\u652F\u6301\u4E0E\u5B9E\u64CD\u907F\u5751",
    viewAllPlans: "\u67E5\u770B\u6240\u6709\u7F16\u7A0B\u5957\u9910\u6DF1\u5EA6\u5BF9\u6BD4",
    toolsSectionTitle: "\u8FDB\u9636\u7701\u94B1\u5DE5\u5177\u7BB1",
    toolsSectionNote: "\u66F4\u591A\u5E2E\u4F60\u7CBE\u6253\u7EC6\u7B97\u7684\u8F85\u52A9\u5DE5\u5177",
    switchCardTitle: "\u9AD8\u4EF7\u6A21\u578B\u5E73\u66FF\u7B97\u76D8",
    switchCardDesc: "\u8F93\u5165\u4F60\u60F3\u7528\u7684\u6602\u8D35\u6A21\u578B\uFF0C\u7ACB\u523B\u627E\u51FA\u80FD\u529B\u63A5\u8FD1\u4F46\u4EF7\u683C\u4EC5\u9700 1/10 \u7684\u5E73\u66FF\u7EC4\u5408\u3002",
    changesCardTitle: "\u5382\u5546\u8C03\u4EF7\u8FFD\u8E2A\u6D41\u6C34",
    changesCardDesc: "\u5B9E\u65F6\u8FFD\u8E2A\u5404\u5927\u5382\u5546\u964D\u4EF7\u8282\u594F\u4E0E\u4FC3\u9500\u52A8\u6001\uFF0C\u7B2C\u4E00\u65F6\u95F4\u4EAB\u53D7\u7B97\u529B\u7EA2\u5229\u3002"
  },
  readiness: {
    title: "\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6\u4E0E\u80FD\u529B\u6D4B\u8BC4",
    subtitle: "\u9762\u5411\u7A0B\u5E8F\u5458\u3001\u4EA7\u54C1\u7ECF\u7406\u7B49 IT \u4ECE\u4E1A\u8005\uFF1A\u6D4B\u6D4B\u4F60\u9002\u4E0D\u9002\u5408\u505A\u4E00\u4EBA\u516C\u53F8\uFF1F",
    seoTitle: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u4E0E\u5C31\u7EEA\u5EA6\u6D4B\u8BD5 \xB7 \u6D4B\u6D4B\u4F60\u9002\u4E0D\u9002\u5408\u5355\u5E72 | Hoxi.ai",
    seoDescription: "\u9762\u5411\u7A0B\u5E8F\u5458\u3001\u4EA7\u54C1\u7ECF\u7406\u7B49 IT \u4ECE\u4E1A\u8005\u7684\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6\u4E0E\u80FD\u529B\u6D4B\u8BD5\u3002\u57FA\u4E8E\u4E94\u7EF4\u5546\u4E1A\u95ED\u73AF\u6A21\u578B\u4E0E12\u9053\u786C\u6838\u5B9E\u6218\u60C5\u5883\u9898\uFF0C\u6DF1\u5EA6\u8BCA\u65AD\u6838\u5FC3\u4F18\u52BF\u4E0E\u81F4\u547D\u6B7B\u7A74\u3002"
  },
  projects: {
    title: "AI \u5B9E\u6218\u9879\u76EE\u5E93",
    subtitle: "\u6211\u662F\u53EF\u4E50\u3002\u8FD9\u91CC\u6536\u5F55\u7528 AI \u8DD1\u901A\u4E00\u4EBA\u516C\u53F8\u5546\u4E1A\u95ED\u73AF\u4E0E\u9AD8\u6548\u4EA4\u4ED8\u7684\u5B9E\u6218\u9879\u76EE\uFF0C\u516C\u5F00\u6280\u672F\u9009\u578B\u3001\u6838\u5FC3\u6A21\u578B\u4E0E\u771F\u5B9E\u7B97\u529B\u8D26\u672C",
    seoTitle: "AI \u5B9E\u6218\u9879\u76EE\u5E93 - \u4E00\u4EBA\u516C\u53F8\u843D\u5730\u6848\u4F8B\u4E0E\u7B97\u529B\u8D26\u672C\u89E3\u5256",
    seoDescription: "\u7CBE\u9009\u4E00\u4EBA\u516C\u53F8\u4E0E\u72EC\u7ACB\u5F00\u53D1\u8005\u7684 AI \u5B9E\u6218\u9879\u76EE\uFF1A\u516C\u5F00\u6838\u5FC3\u4F7F\u7528\u7684\u5927\u6A21\u578B\u3001\u771F\u5B9E\u6708\u7B97\u529B\u5F00\u9500\u3001\u6781\u7B80\u6280\u672F\u6808\u4E0E\u4E00\u4EBA\u4EA4\u4ED8\u5FC3\u6CD5\u3002",
    badge: "\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218 \xB7 \u771F\u5B9E\u843D\u5730\u6848\u4F8B",
    recommendBtn: "\u63A8\u8350 / \u63D0\u4EA4\u9879\u76EE",
    recommendTip: "\u76EE\u524D\u7531\u53EF\u4E50\u4EBA\u5DE5\u5B9E\u6D4B\u4E0E\u7CBE\u9009\u6536\u5F55\u3002\u5982\u679C\u4F60\u6709\u4E00\u4EBA\u6210\u519B\u7684\u4F18\u79C0 AI \u843D\u5730\u9879\u76EE\uFF0C\u6B22\u8FCE\u8054\u7CFB\u6211\u63A8\u8350\u5C55\u793A\u3002",
    feedbackTitle: "\u5411\u7AD9\u957F\u53CD\u9988 / \u63D0\u9700\u6C42",
    feedbackDesc: "\u4F60\u5BF9\u8BE5\u9879\u76EE\u6709\u4EFB\u4F55\u529F\u80FD\u5EFA\u8BAE\u3001\u5408\u4F5C\u610F\u5411\u6216\u4F7F\u7528\u7591\u60D1\uFF0C\u6B22\u8FCE\u76F4\u63A5\u544A\u8BC9\u6211\u3002",
    feedbackPlaceholder: "\u5199\u4E0B\u4F60\u7684\u5EFA\u8BAE\u6216\u60F3\u6C9F\u901A\u7684\u5185\u5BB9...",
    submitFeedback: "\u53D1\u9001\u53CD\u9988",
    contactAuthor: "\u4E0E\u4F5C\u8005\u4EA4\u6D41",
    viewSite: "\u8BBF\u95EE\u5B98\u7F51",
    viewGithub: "GitHub \u6E90\u7801",
    viewStory: "\u590D\u76D8\u624B\u8BB0",
    modelUsed: "\u6838\u5FC3\u6A21\u578B",
    monthlyCost: "\u7B97\u529B\u8D26\u672C",
    techStack: "\u6280\u672F\u5168\u6808",
    author: "\u521B\u4F5C\u8005",
    emptyTitle: "\u8BE5\u5206\u7C7B\u4E0B\u6682\u65E0\u9879\u76EE\u6536\u5F55",
    emptyDesc: "\u6211\u4EEC\u6B63\u5728\u6301\u7EED\u5B9E\u6D4B\u5E76\u8865\u5145\u4F18\u8D28\u5B9E\u6218\u6848\u4F8B\uFF0C\u6B22\u8FCE\u7A0D\u540E\u67E5\u770B\u3002",
    principlesTitle: "\u53EF\u4E50\u7684\u4E00\u4EBA\u516C\u53F8\u9879\u76EE\u843D\u5730\u4E09\u6CD5\u5219",
    principle1Title: "1. \u89E3\u51B3\u771F\u75DB\u70B9\uFF0C\u4E0D\u505A\u70AB\u6280\u73A9\u5177",
    principle1Desc: "AI \u6700\u5927\u7684\u4EF7\u503C\u662F\u628A\u4F60\u7684\u4EA4\u4ED8\u6210\u672C\u538B\u5230\u65E0\u9650\u63A5\u8FD1\u4E8E\u96F6\uFF0C\u800C\u4E0D\u662F\u628A\u67B6\u6784\u641E\u5F97\u65E0\u9650\u590D\u6742\u3002\u5148\u9A8C\u8BC1\u6709\u6CA1\u6709\u4EBA\u613F\u610F\u4E70\u5355\uFF0C\u518D\u8C08\u6280\u672F\u6269\u5C55\u3002",
    principle2Title: "2. \u4E25\u683C\u6838\u7B97\u7B97\u529B\u8D26\u672C\uFF0C\u628A Token \u7528\u5728\u5200\u5203\u4E0A",
    principle2Desc: "\u5F88\u591A\u4EA7\u54C1\u6B7B\u4E8E\u7B97\u529B\u6210\u672C\u5931\u63A7\u3002\u901A\u8FC7\u5408\u7406\u7684 Prompt \u88C1\u526A\u3001\u591A\u7EA7\u6A21\u578B\u5206\u6D41\u4E0E\u56FD\u5185\u4E2D\u8F6C\u4E13\u7EBF\uFF0C\u628A\u6BCF\u4E2A\u9879\u76EE\u7684\u6708\u7B97\u529B\u538B\u7F29\u5728\u51E0\u5341\u5143\u5185\u3002",
    principle3Title: "3. \u6781\u7B80\u5168\u6808\uFF0C\u4E00\u4E2A\u4EBA\u5C31\u662F\u4E00\u652F\u7CBE\u9510\u90E8\u961F",
    principle3Desc: "\u62D2\u7EDD\u5FAE\u670D\u52A1\u4E0E\u81C3\u80BF\u6846\u67B6\u3002Nuxt + Tailwind + \u6258\u7BA1\u6570\u636E\u5E93 + \u8FB9\u7F18 CDN\uFF0C\u51E0\u5C0F\u65F6\u5373\u53EF\u4EA4\u4ED8\u4E0A\u7EBF\uFF0C\u7528\u6781\u4F4E\u7EF4\u62A4\u8D1F\u62C5\u652F\u6491\u5546\u4E1A\u95ED\u73AF\u3002"
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen: communityOpen } = useHoxiCommunity();
    const { getSetting } = useSettings();
    const { localePath } = useLocaleRouter();
    const { locale, setLocale, mergeLocaleMessage, t } = useI18n();
    if (mergeLocaleMessage) {
      mergeLocaleMessage("en", { hoxi: en });
      mergeLocaleMessage("zh", { hoxi: zh });
    }
    const mobileOpen = ref(false);
    const mobileSavingsExpanded = ref(true);
    const colorMode = useColorMode();
    const isDarkMode = computed(() => colorMode.value === "dark");
    const currentLocale = computed(() => typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : "zh");
    const siteName = computed(() => String(getSetting("site_name") || t("hoxi.brand.name")));
    const tagline = computed(() => String(getSetting("site_tagline") || t("hoxi.brand.tagline")));
    const icpBeian = computed(() => String(getSetting("icp_beian") || "").trim());
    const githubUrl = computed(() => String(getSetting("github_url") || "").trim());
    const effectiveGithubUrl = computed(() => githubUrl.value || "https://github.com/hoxiai");
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const navItems = computed(() => [
      { key: "home", to: "/", label: t("hoxi.nav.home"), ready: true },
      { key: "readiness", to: "/readiness", label: t("hoxi.nav.readiness"), ready: true, badge: "\u6D4B\u6D4B\u770B" },
      { key: "projects", to: "/projects", label: t("hoxi.nav.projects"), ready: true },
      { key: "tools", to: "/tools", label: t("hoxi.nav.tools"), ready: true },
      {
        key: "savings",
        to: "/savings",
        label: t("hoxi.nav.savings"),
        ready: true,
        children: [
          {
            key: "models",
            to: "/models",
            label: t("hoxi.nav.models"),
            desc: t("hoxi.nav.modelsDesc"),
            icon: "ph:trophy-bold",
            badge: "\u4F53\u611F\u6392\u540D"
          },
          {
            key: "gateways",
            to: "/gateways",
            label: t("hoxi.nav.gateways"),
            desc: t("hoxi.nav.gatewaysDesc"),
            icon: "ph:lightning-bold",
            badge: "\u4F4E\u81F31\u6298"
          },
          {
            key: "plans",
            to: "/coding-plans",
            label: t("hoxi.nav.plans"),
            desc: t("hoxi.nav.plansDesc"),
            icon: "ph:package-bold",
            badge: "\u907F\u5751\u6307\u5357"
          }
        ]
      },
      { key: "posts", to: "/blog", label: t("hoxi.nav.posts"), ready: true },
      { key: "about", to: "/about", label: t("hoxi.nav.about"), ready: true }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EmailVerificationBanner = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiLogoIcon = __nuxt_component_2;
      const _component_UIcon = _sfc_main$E;
      const _component_HoxiCommunityModal = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans transition-colors duration-150" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_EmailVerificationBanner, null, null, _parent));
      _push(`<div class="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800"><header><div class="max-w-[1280px] mx-auto px-4 md:px-6"><div class="flex items-center justify-between h-16">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "flex items-center gap-2.5 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HoxiLogoIcon, { class: "h-7 w-7 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-150 group-hover:scale-105" }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col"${_scopeId}><span class="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId}>${ssrInterpolate(siteName.value)} ${ssrInterpolate(_ctx.$t("hoxi.brand.name"))}</span><span class="text-[10px] text-slate-400 dark:text-slate-500 font-mono leading-none mt-1"${_scopeId}>hoxi.ai \xB7 \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357</span></div>`);
          } else {
            return [
              createVNode(_component_HoxiLogoIcon, { class: "h-7 w-7 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-150 group-hover:scale-105" }),
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "text-base font-bold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, toDisplayString(siteName.value) + " " + toDisplayString(_ctx.$t("hoxi.brand.name")), 1),
                createVNode("span", { class: "text-[10px] text-slate-400 dark:text-slate-500 font-mono leading-none mt-1" }, "hoxi.ai \xB7 \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357")
              ])
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
                  class: "w-3 h-3 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:rotate-180 transition-transform duration-200"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(item.label), 1),
                  createVNode(_component_UIcon, {
                    name: "ph:caret-down-bold",
                    class: "w-3 h-3 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:rotate-180 transition-transform duration-200"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 pt-2 w-84 z-50 pointer-events-none group-hover:pointer-events-auto"><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2 shadow-xs space-y-1"><div class="px-3 py-1.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 mb-1"><span class="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider">${ssrInterpolate(_ctx.$t("hoxi.nav.savingsMenuTitle"))}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(item.to),
            class: "text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.nav.allSavings"))}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-3 h-3"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.nav.allSavings")), 1),
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
                    _push2(`<span class="px-1.5 py-0.2 rounded text-[10px] font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40"${_scopeId}>${ssrInterpolate(sub.badge)}</span>`);
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
                          class: "px-1.5 py-0.2 rounded text-[10px] font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40"
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
                  _push2(`<span class="px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 leading-tight"${_scopeId}>${ssrInterpolate(item.badge)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("span", null, toDisplayString(item.label), 1),
                  item.badge ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 leading-tight"
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
      _push(`<!--]--></nav><div class="flex items-center gap-2.5 md:gap-4"><button type="button" class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-200 bg-amber-50/90 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-200/80 dark:border-amber-800/60 rounded-full transition-all shadow-2xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chat-circle-dots-bold",
        class: "w-3.5 h-3.5 text-amber-600 dark:text-amber-400"
      }, null, _parent));
      _push(`<span class="hidden sm:inline">\u627E\u53EF\u4E50 / \u8FDB\u7FA4</span><span class="sm:hidden">\u8FDB\u7FA4</span></button><a${ssrRenderAttr("href", effectiveGithubUrl.value)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900" title="GitHub \u4ED3\u5E93" aria-label="GitHub"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"></path></svg></a><button type="button" class="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800" title="\u5207\u6362\u8BED\u8A00 / Switch Language"><svg class="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg><span>${ssrInterpolate(currentLocale.value === "zh" ? "EN" : "\u4E2D")}</span></button><button type="button" class="inline-flex items-center justify-center p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-900"${ssrRenderAttr("title", isDarkMode.value ? "\u5207\u6362\u4E3A\u660E\u4EAE\u6A21\u5F0F" : "\u5207\u6362\u4E3A\u6697\u8272\u6A21\u5F0F")} aria-label="\u5207\u6362\u914D\u8272\u6A21\u5F0F">`);
      if (isDarkMode.value) {
        _push(`<svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`);
      }
      _push(`</button><button type="button" class="md:hidden p-1.5 -mr-1 text-slate-600 dark:text-slate-400"${ssrRenderAttr("aria-label", mobileOpen.value ? _ctx.$t("hoxi.nav.closeMenu") : _ctx.$t("hoxi.nav.openMenu"))}${ssrRenderAttr("aria-expanded", mobileOpen.value)}><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">`);
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
            _push(`<button type="button" class="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" aria-label="\u5C55\u5F00\u7701\u94B1\u83DC\u5355">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-down-bold",
              class: ["w-3.5 h-3.5 transition-transform duration-200", { "rotate-180": mobileSavingsExpanded.value }]
            }, null, _parent));
            _push(`</button></div>`);
            if (mobileSavingsExpanded.value) {
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
                        class: "w-3.5 h-3.5 text-slate-400"
                      }, null, _parent2, _scopeId));
                      _push2(`<span${_scopeId}>${ssrInterpolate(sub.label)}</span></div>`);
                      if (sub.badge) {
                        _push2(`<span class="px-1.5 py-0.2 rounded text-[9px] font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400"${_scopeId}>${ssrInterpolate(sub.badge)}</span>`);
                      } else {
                        _push2(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: sub.icon,
                            class: "w-3.5 h-3.5 text-slate-400"
                          }, null, 8, ["name"]),
                          createVNode("span", null, toDisplayString(sub.label), 1)
                        ]),
                        sub.badge ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "px-1.5 py-0.2 rounded text-[9px] font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400"
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
                    _push2(`<span class="px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 leading-tight"${_scopeId}>${ssrInterpolate(item.badge)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("span", null, toDisplayString(item.label), 1),
                    item.badge ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 leading-tight"
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
      _push(`</main><footer class="border-t border-slate-100 dark:border-slate-800/80"><div class="max-w-[1280px] mx-auto px-4 md:px-6 py-8"><div class="flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-xs text-slate-500 dark:text-slate-400"> \xA9 ${ssrInterpolate(unref(year))} ${ssrInterpolate(siteName.value)} \xB7 ${ssrInterpolate(tagline.value)}</p><div class="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400"><button type="button" class="transition-colors hover:text-amber-600 dark:hover:text-amber-400 font-medium"> \u4E00\u4EBA\u516C\u53F8\u793E\u7FA4 </button><a${ssrRenderAttr("href", effectiveGithubUrl.value)} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-slate-700 dark:hover:text-slate-200 inline-flex items-center gap-1"><span>GitHub</span></a><span>${ssrInterpolate(_ctx.$t("hoxi.footer.dataNote"))}</span>`);
      if (icpBeian.value) {
        _push(`<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">${ssrInterpolate(icpBeian.value)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></footer>`);
      _push(ssrRenderComponent(_component_HoxiCommunityModal, {
        modelValue: unref(communityOpen),
        "onUpdate:modelValue": ($event) => isRef(communityOpen) ? communityOpen.value = $event : null
      }, null, _parent));
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
