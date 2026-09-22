const defaultHoxiProjects = [
  {
    id: "hoxi-ai",
    name: "\u53EF\u559C AI (hoxi.ai)",
    tagline: "\u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u4E0E\u4E00\u4EBA\u516C\u53F8\u9009\u578B\u7AD9",
    description: "\u628A\u4E3B\u6D41\u6A21\u578B\u7684\u80FD\u529B\u8BC4\u5206\u548C\u5B98\u65B9\u4EF7\u683C\u653E\u5728\u4E00\u8D77\u6BD4\uFF0C\u53E6\u6709\u4E2D\u8F6C\u7AD9\u3001\u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4\u548C\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6\u6D4B\u8BC4\u3002",
    category: "ai-infra",
    categoryLabel: "AI \u9009\u578B\u4E0E\u5DE5\u5177",
    status: "active",
    statusLabel: "\u8FD0\u884C\u4E2D",
    techStack: ["Nuxt 4", "Tailwind CSS", "Drizzle ORM", "apay"],
    author: "\u53EF\u4E50 (Coller)",
    icon: "ph:compass-tool-bold",
    url: "https://hoxi.ai",
    storyUrl: "/about",
    highlights: [
      "\u4EF7\u683C\u9010\u6761\u6284\u81EA\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875\uFF0C\u6807\u6CE8\u6838\u5BF9\u65E5\u671F",
      "\u4E2D\u8F6C\u7AD9\u4E0E\u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4",
      "\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6\u6D4B\u8BC4"
    ],
    order: 10,
    hidden: false
  },
  {
    id: "ainode",
    name: "AINode (AI \u7F51\u5173)",
    tagline: "\u56FD\u5185\u76F4\u8FDE\u7684\u5927\u6A21\u578B API \u7F51\u5173\uFF0C\u517C\u5BB9 OpenAI \u534F\u8BAE",
    description: "\u6211\u81EA\u5DF1\u8FD0\u8425\u7684 API \u7F51\u5173\uFF0C\u805A\u5408\u4E3B\u6D41\u5927\u6A21\u578B\uFF0C\u6309\u91CF\u8BA1\u8D39\u3002\u8F7B\u94FA AI \u7684\u6A21\u578B\u8C03\u7528\u4E5F\u8D70\u5B83\u3002",
    category: "gateway",
    categoryLabel: "\u7B97\u529B\u57FA\u5EFA",
    status: "active",
    statusLabel: "\u8FD0\u884C\u4E2D",
    techStack: ["Go", "OpenAI \u517C\u5BB9\u534F\u8BAE"],
    author: "\u53EF\u4E50 (Coller)",
    icon: "ph:broadcast-bold",
    url: "https://ainode.run",
    highlights: [
      "\u517C\u5BB9 OpenAI SDK\uFF0C\u6539 Base URL \u5373\u53EF\u63A5\u5165",
      "\u6309\u91CF\u8BA1\u8D39\uFF0C\u6CA1\u6709\u6708\u8D39",
      "\u652F\u6301\u5FAE\u4FE1\u3001\u652F\u4ED8\u5B9D\u5145\u503C"
    ],
    order: 20,
    hidden: false
  },
  {
    id: "qingpu",
    name: "\u8F7B\u94FA AI (qingpu.ai)",
    tagline: "\u628A 1688\u3001\u62FC\u591A\u591A\u3001\u6DD8\u5B9D\u7684\u5546\u54C1\u94FA\u5230 Ozon / WB",
    description: "\u8D34\u5546\u54C1\u94FE\u63A5\u5BFC\u5165\uFF0C\u81EA\u52A8\u7FFB\u8BD1\u6807\u9898\u548C\u8BE6\u60C5\u3001\u751F\u6210\u5546\u54C1\u56FE\uFF0C\u518D\u53D1\u5E03\u5230 Ozon \u548C Wildberries\u3002",
    category: "saas",
    categoryLabel: "\u5546\u4E1A\u53D8\u73B0",
    status: "active",
    statusLabel: "\u8FD0\u884C\u4E2D",
    techStack: ["Nuxt 4", "apay", "AINode"],
    author: "\u53EF\u4E50 (Coller)",
    icon: "ph:storefront-bold",
    url: "https://qingpu.ai",
    highlights: [
      "\u652F\u6301 1688\u3001\u62FC\u591A\u591A\u3001\u6DD8\u5B9D\u5546\u54C1\u94FE\u63A5\u5BFC\u5165",
      "\u6807\u9898\u4E0E\u8BE6\u60C5\u81EA\u52A8\u7FFB\u8BD1",
      "AI \u751F\u6210\u5546\u54C1\u56FE"
    ],
    order: 25,
    hidden: false
  },
  {
    id: "apay",
    name: "apay",
    tagline: "\u6211\u7684\u51E0\u4E2A\u7AD9\u5171\u7528\u7684 Nuxt \u5EFA\u7AD9\u4E0E\u6536\u6B3E\u6846\u67B6",
    description: "\u53EF\u559C AI \u548C\u8F7B\u94FA AI \u90FD\u8DD1\u5728\u5B83\u4E0A\u9762\uFF1A\u4E00\u5957\u4EE3\u7801\u591A\u5957\u4E3B\u9898\uFF0C\u4E00\u4E2A\u4E3B\u9898\u5C31\u662F\u4E00\u4E2A\u7AD9\uFF0C\u5185\u7F6E\u5FAE\u4FE1\u3001\u652F\u4ED8\u5B9D\u3001Stripe\u3001PayPal \u7B49\u6536\u6B3E\u901A\u9053\u3002",
    category: "devtools",
    categoryLabel: "\u5F00\u53D1\u6548\u7387",
    status: "active",
    statusLabel: "\u81EA\u7528",
    techStack: ["Nuxt 4", "Drizzle ORM", "Stripe", "\u5FAE\u4FE1\u652F\u4ED8", "\u652F\u4ED8\u5B9D"],
    author: "\u53EF\u4E50 (Coller)",
    icon: "ph:credit-card-bold",
    url: "",
    highlights: [
      "\u4E00\u5957\u4EE3\u7801\u591A\u5957\u4E3B\u9898\uFF0C\u4E00\u4E2A\u4E3B\u9898\u5C31\u662F\u4E00\u4E2A\u7AD9",
      "\u5341\u591A\u79CD\u6536\u6B3E\u901A\u9053",
      "\u652F\u6301 SQLite / PostgreSQL / MySQL"
    ],
    order: 30,
    hidden: false
  }
];

export { defaultHoxiProjects as d };
