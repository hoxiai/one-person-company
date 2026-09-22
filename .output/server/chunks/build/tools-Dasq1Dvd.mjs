const defaultHoxiTools = [
  // AI 生产力
  {
    id: "cursor",
    name: "Cursor",
    category: "ai",
    categoryLabel: "AI \u751F\u4EA7\u529B",
    description: "AI \u7F16\u7A0B\u7F16\u8F91\u5668\uFF0C\u5185\u7F6E\u591A\u6A21\u578B\u5BF9\u8BDD\u548C Agent \u6539\u4EE3\u7801\u3002",
    url: "https://cursor.com",
    icon: "ph:code-bold",
    pricing: "\u514D\u8D39\u8D77\u6B65 / $20\u6708",
    order: 10
  },
  {
    id: "v0",
    name: "v0.dev",
    category: "ai",
    categoryLabel: "AI \u751F\u4EA7\u529B",
    description: "Vercel \u51FA\u54C1\uFF0C\u7528\u81EA\u7136\u8BED\u8A00\u751F\u6210 React / Tailwind \u754C\u9762\u7EC4\u4EF6\u3002",
    url: "https://v0.dev",
    icon: "ph:sparkle-bold",
    pricing: "\u6709\u514D\u8D39\u989D\u5EA6",
    order: 20
  },
  {
    id: "claude-code",
    name: "Claude Code",
    category: "ai",
    categoryLabel: "AI \u751F\u4EA7\u529B",
    description: "Anthropic \u7684\u547D\u4EE4\u884C\u7F16\u7A0B Agent\uFF0C\u80FD\u8BFB\u4EE3\u7801\u3001\u8DD1\u6D4B\u8BD5\u3001\u6539\u6587\u4EF6\u3002",
    url: "https://claude.ai",
    icon: "ph:terminal-window-bold",
    pricing: "\u6309 Token \u8BA1\u8D39",
    order: 30
  },
  // 极简部署与数据库
  {
    id: "vercel",
    name: "Vercel",
    category: "deploy",
    categoryLabel: "\u6781\u7B80\u5168\u6808\u90E8\u7F72",
    description: "\u524D\u7AEF\u4E0E\u5168\u6808\u6258\u7BA1\uFF0C\u63A8\u9001 Git \u81EA\u52A8\u90E8\u7F72\u3002",
    url: "https://vercel.com",
    icon: "ph:cloud-arrow-up-bold",
    pricing: "\u6709\u514D\u8D39\u7248",
    order: 40
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "deploy",
    categoryLabel: "\u6781\u7B80\u5168\u6808\u90E8\u7F72",
    description: "\u5F00\u6E90\u7684 Firebase \u66FF\u4EE3\uFF0C\u5E26 PostgreSQL\u3001\u7528\u6237\u8BA4\u8BC1\u548C\u5B9E\u65F6\u8BA2\u9605\u3002",
    url: "https://supabase.com",
    icon: "ph:database-bold",
    pricing: "\u514D\u8D39 500MB DB",
    order: 50
  },
  {
    id: "zeabur",
    name: "Zeabur",
    category: "deploy",
    categoryLabel: "\u6781\u7B80\u5168\u6808\u90E8\u7F72",
    description: "\u652F\u6301\u591A\u8BED\u8A00\u548C\u5BB9\u5668\u7684\u90E8\u7F72\u5E73\u53F0\uFF0C\u6709\u56FD\u5185\u8282\u70B9\u3002",
    url: "https://zeabur.com",
    icon: "ph:cube-bold",
    pricing: "\u6309\u7528\u91CF\u8BA1\u8D39",
    order: 60
  },
  // 域名与网络
  {
    id: "cloudflare",
    name: "Cloudflare",
    category: "domain",
    categoryLabel: "\u57DF\u540D\u4E0E\u7F51\u7EDC",
    description: "DNS\u3001SSL \u8BC1\u4E66\u3001DDoS \u9632\u62A4\u548C CDN\uFF0C\u57FA\u7840\u529F\u80FD\u514D\u8D39\u3002",
    url: "https://cloudflare.com",
    icon: "ph:shield-check-bold",
    pricing: "\u57FA\u7840\u529F\u80FD\u514D\u8D39",
    order: 70
  },
  {
    id: "namecheap",
    name: "Namecheap",
    category: "domain",
    categoryLabel: "\u57DF\u540D\u4E0E\u7F51\u7EDC",
    description: "\u57DF\u540D\u6CE8\u518C\u5546\uFF0C\u9ED8\u8BA4\u5E26\u514D\u8D39\u7684\u57DF\u540D\u9690\u79C1\u4FDD\u62A4\u3002",
    url: "https://namecheap.com",
    icon: "ph:globe-hemisphere-west-bold",
    pricing: "\u6309\u5E74\u4ED8\u8D39",
    order: 80
  },
  // 出海全球收款
  {
    id: "stripe",
    name: "Stripe",
    category: "payment",
    categoryLabel: "\u51FA\u6D77\u6536\u6B3E",
    description: "\u6D77\u5916\u6536\u6B3E\u4E0E\u8BA2\u9605\u8BA1\u8D39\uFF0C\u652F\u6301 135 \u79CD\u4EE5\u4E0A\u8D27\u5E01\u3002",
    url: "https://stripe.com",
    icon: "ph:credit-card-bold",
    pricing: "\u6309\u4EA4\u6613\u62BD\u6210",
    order: 90
  },
  {
    id: "lemon-squeezy",
    name: "Lemon Squeezy",
    category: "payment",
    categoryLabel: "\u51FA\u6D77\u6536\u6B3E",
    description: "MoR\uFF08\u4EE3\u7406\u5546\u6237\uFF09\u6536\u6B3E\uFF0C\u66FF\u4F60\u5904\u7406\u5404\u56FD\u589E\u503C\u7A0E\u3002",
    url: "https://lemonsqueezy.com",
    icon: "ph:wallet-bold",
    pricing: "5% + 50\xA2",
    order: 100
  },
  // 创作与生产力
  {
    id: "raycast",
    name: "Raycast",
    category: "media",
    categoryLabel: "\u521B\u4F5C\u4E0E\u6548\u7387",
    description: "macOS \u542F\u52A8\u5668\uFF0C\u5E26\u526A\u8D34\u677F\u5386\u53F2\u3001\u7A97\u53E3\u7BA1\u7406\u548C\u63D2\u4EF6\u3002",
    url: "https://raycast.com",
    icon: "ph:lightning-bold",
    pricing: "\u57FA\u7840\u7248\u514D\u8D39",
    order: 110
  },
  {
    id: "typefully",
    name: "Typefully",
    category: "media",
    categoryLabel: "\u521B\u4F5C\u4E0E\u6548\u7387",
    description: "X / Twitter \u7684\u5199\u4F5C\u3001\u6392\u7248\u548C\u5B9A\u65F6\u53D1\u5E03\u5DE5\u5177\u3002",
    url: "https://typefully.com",
    icon: "ph:share-network-bold",
    pricing: "\u514D\u8D39\u4F53\u9A8C",
    order: 120
  }
];

export { defaultHoxiTools as d };
