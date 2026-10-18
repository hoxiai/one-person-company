const defaultHoxiProjects = [
  {
    id: "hoxi-desktop",
    name: "Hoxi Desktop",
    tagline: "macOS \u539F\u751F\u591A Agent \u5E76\u884C\u7814\u53D1\u5DE5\u4F5C\u53F0",
    description: "\u57FA\u4E8E Wails v2 \u4E0E\u5B98\u65B9 OpenCode \u6784\u5EFA\uFF0C\u5728\u4E00\u4E2A\u539F\u751F\u7A97\u53E3\u5185\u5E76\u884C\u8FD0\u884C\u591A\u4E2A AI \u7F16\u7A0B\u4F1A\u8BDD\u3002",
    category: "devtools",
    categoryLabel: "\u684C\u9762\u5DE5\u5177",
    status: "active",
    statusLabel: "\u5F00\u6E90",
    techStack: ["Go", "Wails v2", "SolidJS", "OpenCode"],
    author: "\u53EF\u4E50 (Coller)",
    badge: "Flagship",
    badgeTone: "positive",
    icon: "ph:terminal-window-bold",
    url: "https://hoxi.ai/#home-desktop",
    githubUrl: "https://github.com/hoxiai/hoxi",
    highlights: [
      "Git Worktree \u4F1A\u8BDD\u7EA7\u7269\u7406\u9694\u79BB\u4E0E\u4E00\u952E Diff \u5408\u5E76",
      "\u672C\u5730 Markdown \u8DE8\u4F1A\u8BDD\u957F\u6548\u8BB0\u5FC6",
      "\u4E00\u952E\u5207\u6362 Claude Code / Codex / Gemini CLI"
    ],
    order: 5,
    hidden: false
  },
  {
    id: "hoxi-ai",
    name: "Hoxi (hoxi.ai)",
    tagline: "AI \u6A21\u578B\u5B9E\u6D4B\u699C\u5355\u4E0E\u4E00\u4EBA\u516C\u53F8\u95E8\u6237",
    description: "\u628A\u4E3B\u6D41\u5927\u6A21\u578B\u8DD1\u5206\u3001\u5B98\u65B9\u5E95\u4EF7\u4E0E\u4E2D\u8F6C\u7AD9\u5EF6\u8FDF\u653E\u5728\u4E00\u5F20\u8868\u91CC\u5BF9\u6BD4\uFF0C\u9644\u5E26\u72EC\u7ACB\u5F00\u53D1\u5B9E\u6218\u6307\u5357\u3002",
    category: "ai-infra",
    categoryLabel: "AI \u9009\u578B",
    status: "active",
    statusLabel: "\u8FD0\u884C\u4E2D",
    techStack: ["Nuxt 4", "Tailwind CSS", "Drizzle ORM"],
    author: "\u53EF\u4E50 (Coller)",
    icon: "ph:compass-tool-bold",
    url: "https://hoxi.ai",
    storyUrl: "/about",
    highlights: [
      "\u9010\u6761\u6838\u5BF9\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u4E0E\u6838\u9A8C\u65E5\u671F",
      "\u4E2D\u8F6C\u4E13\u7EBF\u5EF6\u8FDF\u4E0E Coding Plan \u989D\u5EA6\u5BF9\u6BD4",
      "\u4E00\u4EBA\u516C\u53F8\u4E94\u7EF4\u80FD\u529B\u6D4B\u8BC4"
    ],
    order: 10,
    hidden: false
  },
  {
    id: "ainode",
    name: "AINode",
    tagline: "\u9AD8\u5E76\u53D1\u5927\u6A21\u578B API \u805A\u5408\u7F51\u5173",
    description: "\u81EA\u8425\u4F4E\u5EF6\u8FDF API \u4E13\u7EBF\uFF0C\u4E00\u884C\u914D\u7F6E\u63A5\u5165 Claude\u3001GPT\u3001Gemini \u4E0E DeepSeek\u3002",
    category: "gateway",
    categoryLabel: "\u7B97\u529B\u7F51\u5173",
    status: "active",
    statusLabel: "\u8FD0\u884C\u4E2D",
    techStack: ["Go", "OpenAI / Anthropic SDK"],
    author: "\u53EF\u4E50 (Coller)",
    icon: "ph:broadcast-bold",
    url: "https://ainode.run",
    highlights: [
      "\u652F\u6301 Hoxi Desktop\u3001Cursor\u3001Claude Code \u76F4\u8FDE",
      "\u6309 Token \u8BA1\u8D39\uFF0C\u65E0\u6708\u79DF\u3001\u989D\u5EA6\u4E0D\u8FC7\u671F",
      "\u5FAE\u4FE1 / \u652F\u4ED8\u5B9D\u5373\u5145\u5373\u7528"
    ],
    order: 20,
    hidden: false
  },
  {
    id: "qingpu",
    name: "\u8F7B\u94FA AI (qingpu.ai)",
    tagline: "Ozon / Wildberries \u8DE8\u5883\u7535\u5546 AI \u94FA\u8D27 SaaS",
    description: "\u7C98\u8D34\u56FD\u5185\u8D27\u6E90\u94FE\u63A5\uFF0C\u81EA\u52A8\u5B8C\u6210\u4FC4\u8BED\u6807\u9898\u7FFB\u8BD1\u3001AI \u6362\u5E95\u751F\u56FE\u5E76\u4E00\u952E\u4E0A\u67B6\u81F3\u4FC4\u7F57\u65AF\u4E3B\u6D41\u7535\u5546\u5E73\u53F0\u3002",
    category: "saas",
    categoryLabel: "\u8DE8\u5883 SaaS",
    status: "active",
    statusLabel: "\u8FD0\u884C\u4E2D",
    techStack: ["Nuxt 4", "apay", "AINode"],
    author: "\u53EF\u4E50 (Coller)",
    icon: "ph:storefront-bold",
    url: "https://qingpu.ai",
    highlights: [
      "1688 / \u62FC\u591A\u591A / \u6DD8\u5B9D\u5546\u54C1\u4E00\u952E\u91C7\u96C6",
      "\u591A\u8BED\u79CD\u7535\u5546 SEO \u6807\u9898\u4E0E\u5C5E\u6027\u7FFB\u8BD1",
      "AI \u5546\u62CD\u56FE\u751F\u6210\u4E0E\u6279\u91CF\u4E0A\u67B6"
    ],
    order: 25,
    hidden: false
  },
  {
    id: "apay",
    name: "apay",
    tagline: "\u4E00\u5957\u4EE3\u7801\u9A71\u52A8\u591A\u7AD9\u70B9\u7684 Nuxt 4 \u5546\u4E1A\u5E95\u5EA7",
    description: "\u652F\u6491 Hoxi \u4E0E\u8F7B\u94FA AI \u7684\u5185\u90E8\u5168\u6808\u6846\u67B6\uFF0C\u5355\u4ED3\u5E93\u591A\u4E3B\u9898\u9694\u79BB\uFF0C\u5F00\u7BB1\u5373\u7528\u5168\u7403\u6536\u6B3E\u3002",
    category: "devtools",
    categoryLabel: "\u5EFA\u7AD9\u5E95\u5EA7",
    status: "active",
    statusLabel: "\u81EA\u7528",
    techStack: ["Nuxt 4", "Drizzle ORM", "Stripe", "WeChat Pay"],
    author: "\u53EF\u4E50 (Coller)",
    icon: "ph:credit-card-bold",
    url: "",
    highlights: [
      "\u5355\u4EE3\u7801\u5E93\u591A\u4E3B\u9898\u72EC\u7ACB\u6784\u5EFA\u4E0E\u90E8\u7F72",
      "\u5185\u7F6E\u5FAE\u4FE1\u3001\u652F\u4ED8\u5B9D\u3001Stripe\u3001PayPal \u7B49 10+ \u652F\u4ED8\u901A\u9053",
      "\u517C\u5BB9 SQLite / PostgreSQL / MySQL"
    ],
    order: 30,
    hidden: false
  }
];
const defaultHoxiProjectsEn = [
  {
    id: "hoxi-desktop",
    name: "Hoxi Desktop",
    tagline: "Native macOS Multi-Agent Coding Workspace",
    description: "Built on Wails v2 and OpenCode to run parallel AI coding sessions in one native window.",
    category: "devtools",
    categoryLabel: "DevTools",
    status: "active",
    statusLabel: "Open Source",
    techStack: ["Go", "Wails v2", "SolidJS", "OpenCode"],
    author: "Coller",
    badge: "Flagship",
    badgeTone: "positive",
    icon: "ph:terminal-window-bold",
    url: "https://hoxi.ai/#home-desktop",
    githubUrl: "https://github.com/hoxiai/hoxi",
    highlights: [
      "Isolated Git worktree per session with visual diffs",
      "Persistent local Markdown project memory",
      "1-click handoff to Claude Code, Codex & Gemini CLI"
    ],
    order: 5,
    hidden: false
  },
  {
    id: "hoxi-ai",
    name: "Hoxi (hoxi.ai)",
    tagline: "Verified LLM Leaderboard & Solo Builder Portal",
    description: "Compare capability scores, official token pricing, and gateway latency side by side.",
    category: "ai-infra",
    categoryLabel: "Benchmarks",
    status: "active",
    statusLabel: "Live",
    techStack: ["Nuxt 4", "Tailwind CSS", "Drizzle ORM"],
    author: "Coller",
    icon: "ph:compass-tool-bold",
    url: "https://hoxi.ai",
    storyUrl: "/about",
    highlights: [
      "Token prices verified against official vendor pages",
      "API gateway latency & Coding Plan quota comparison",
      "5-dimension solo builder readiness assessment"
    ],
    order: 10,
    hidden: false
  },
  {
    id: "ainode",
    name: "AINode",
    tagline: "Unified Low-Latency LLM API Gateway",
    description: "Production API gateway aggregating Claude, GPT, Gemini, and DeepSeek with one-line SDK setup.",
    category: "gateway",
    categoryLabel: "Compute Infra",
    status: "active",
    statusLabel: "Live",
    techStack: ["Go", "OpenAI / Anthropic API"],
    author: "Coller",
    icon: "ph:broadcast-bold",
    url: "https://ainode.run",
    highlights: [
      "Drop-in compatibility with Hoxi Desktop, Cursor & Claude Code",
      "Pay-as-you-go billing with non-expiring credits",
      "Instant top-up & transparent logs"
    ],
    order: 20,
    hidden: false
  },
  {
    id: "qingpu",
    name: "Qingpu AI (qingpu.ai)",
    tagline: "Cross-Border E-Commerce AI Listing SaaS",
    description: "Import supplier links, auto-translate specs, generate AI product visuals, and publish to Ozon & Wildberries.",
    category: "saas",
    categoryLabel: "SaaS",
    status: "active",
    statusLabel: "Live",
    techStack: ["Nuxt 4", "apay", "AINode"],
    author: "Coller",
    icon: "ph:storefront-bold",
    url: "https://qingpu.ai",
    highlights: [
      "1-click supplier product ingestion",
      "Multilingual e-commerce SEO translation",
      "AI product photography & batch publishing"
    ],
    order: 25,
    hidden: false
  },
  {
    id: "apay",
    name: "apay",
    tagline: "Multi-Theme Nuxt 4 SaaS & Payment Framework",
    description: "Internal full-stack boilerplate powering Hoxi and Qingpu AI from a single multi-tenant codebase.",
    category: "devtools",
    categoryLabel: "Framework",
    status: "active",
    statusLabel: "Internal",
    techStack: ["Nuxt 4", "Drizzle ORM", "Stripe", "PayPal"],
    author: "Coller",
    icon: "ph:credit-card-bold",
    url: "",
    highlights: [
      "Single codebase, isolated multi-theme builds",
      "10+ global and regional payment channels built in",
      "SQLite, PostgreSQL, and MySQL support"
    ],
    order: 30,
    hidden: false
  }
];

export { defaultHoxiProjects as a, defaultHoxiProjectsEn as d };
//# sourceMappingURL=projects-CRoQay4i.mjs.map
