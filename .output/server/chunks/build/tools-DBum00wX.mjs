const defaultHoxiTools = [
  // AI 生产力
  {
    id: "cursor",
    name: "Cursor",
    category: "ai",
    categoryLabel: "AI \u751F\u4EA7\u529B",
    description: "\u4E00\u4EBA\u516C\u53F8\u5FC5\u5907\u7684 AI \u8F85\u52A9\u7F16\u7A0B\u7F16\u8F91\u5668\uFF0C\u539F\u751F\u96C6\u6210\u591A\u6A21\u578B\u4E0E Agent \u4EE3\u7801\u91CD\u6784\u3002",
    url: "https://cursor.com",
    badge: "\u4E00\u4EBA\u516C\u53F8\u6807\u914D",
    badgeTone: "positive",
    icon: "ph:code-bold",
    pricing: "\u514D\u8D39\u8D77\u6B65 / $20\u6708",
    order: 10
  },
  {
    id: "v0",
    name: "v0.dev",
    category: "ai",
    categoryLabel: "AI \u751F\u4EA7\u529B",
    description: "Vercel \u5B98\u65B9\u51FA\u54C1\uFF0C\u7528\u81EA\u7136\u8BED\u8A00\u5FEB\u901F\u751F\u6210\u751F\u4EA7\u7EA7 React/Vue/Tailwind UI \u754C\u9762\u7EC4\u4EF6\u3002",
    url: "https://v0.dev",
    badge: "UI \u751F\u6210\u795E\u5668",
    badgeTone: "info",
    icon: "ph:sparkle-bold",
    pricing: "\u514D\u8D39\u989D\u5EA6\u8DB3",
    order: 20
  },
  {
    id: "claude-code",
    name: "Claude Code",
    category: "ai",
    categoryLabel: "AI \u751F\u4EA7\u529B",
    description: "Anthropic \u5B98\u65B9\u7EC8\u7AEF Agent \u5DE5\u5177\uFF0C\u5728\u547D\u4EE4\u884C\u4E2D\u5B9E\u73B0\u5168\u81EA\u52A8\u4EE3\u7801\u9605\u8BFB\u3001\u6D4B\u8BD5\u4E0E\u4FEE\u590D\u3002",
    url: "https://claude.ai",
    badge: "\u7EC8\u7AEF\u653B\u575A\u9996\u9009",
    badgeTone: "warning",
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
    description: "\u5168\u7403\u8FB9\u7F18\u5168\u6808\u6258\u7BA1\u4E8B\u5B9E\u6807\u51C6\uFF0CGit \u63D0\u4EA4\u79D2\u7EA7\u81EA\u52A8\u90E8\u7F72\uFF0C\u4E00\u4EBA\u516C\u53F8\u5B8C\u5168\u514D\u8FD0\u7EF4\u3002",
    url: "https://vercel.com",
    badge: "\u514D\u8FD0\u7EF4\u9996\u9009",
    badgeTone: "positive",
    icon: "ph:cloud-arrow-up-bold",
    pricing: "\u4E2A\u4EBA\u514D\u8D39\u7248\u591F\u7528",
    order: 40
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "deploy",
    categoryLabel: "\u6781\u7B80\u5168\u6808\u90E8\u7F72",
    description: "\u5F00\u6E90 Firebase \u5E73\u66FF\uFF0C\u81EA\u5E26 PostgreSQL \u5173\u7CFB\u578B\u6570\u636E\u5E93\u3001\u7528\u6237\u9274\u6743\u7CFB\u7EDF\u4E0E\u5B9E\u65F6\u8BA2\u9605\u3002",
    url: "https://supabase.com",
    badge: "\u5168\u6808\u6570\u636E\u5E93\u795E\u5668",
    badgeTone: "positive",
    icon: "ph:database-bold",
    pricing: "\u514D\u8D39 500MB DB",
    order: 50
  },
  {
    id: "zeabur",
    name: "Zeabur",
    category: "deploy",
    categoryLabel: "\u6781\u7B80\u5168\u6808\u90E8\u7F72",
    description: "\u4E13\u4E3A\u72EC\u7ACB\u5F00\u53D1\u8005\u8BBE\u8BA1\u7684\u4E00\u7AD9\u5F0F\u591A\u8BED\u8A00\u4E0E\u5BB9\u5668\u90E8\u7F72\u5E73\u53F0\uFF0C\u56FD\u5185\u8BBF\u95EE\u901F\u5EA6\u6781\u5FEB\u3002",
    url: "https://zeabur.com",
    badge: "\u5BB9\u5668\u6781\u901F\u4E0A\u7EBF",
    badgeTone: "info",
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
    description: "\u5168\u7403\u514D\u8D39 DNS \u89E3\u6790\u3001\u514D\u8D39 SSL \u8BC1\u4E66\u3001DDoS \u9632\u62A4\u4E0E\u8FB9\u7F18\u7F13\u5B58\uFF0C\u4E00\u4EBA\u516C\u53F8\u57FA\u77F3\u3002",
    url: "https://cloudflare.com",
    badge: "\u4E00\u4EBA\u516C\u53F8\u57FA\u77F3",
    badgeTone: "positive",
    icon: "ph:shield-check-bold",
    pricing: "\u6C38\u4E45\u514D\u8D39\u4F7F\u7528",
    order: 70
  },
  {
    id: "namecheap",
    name: "Namecheap",
    category: "domain",
    categoryLabel: "\u57DF\u540D\u4E0E\u7F51\u7EDC",
    description: "\u56FD\u9645\u77E5\u540D\u57DF\u540D\u6CE8\u518C\u5546\uFF0C\u6027\u4EF7\u6BD4\u9AD8\u3001\u81EA\u5E26\u514D\u8D39\u9690\u79C1\u4FDD\u62A4\uFF0C\u652F\u6301\u591A\u79CD\u4FBF\u6377\u652F\u4ED8\u3002",
    url: "https://namecheap.com",
    badge: "\u9AD8\u6027\u4EF7\u6BD4\u57DF\u540D",
    badgeTone: "neutral",
    icon: "ph:globe-hemisphere-west-bold",
    pricing: "\u5B9E\u60E0\u9996\u5E74",
    order: 80
  },
  // 出海全球收款
  {
    id: "stripe",
    name: "Stripe",
    category: "payment",
    categoryLabel: "\u51FA\u6D77\u6536\u6B3E",
    description: "\u5168\u7403\u4E92\u8054\u7F51\u652F\u4ED8\u57FA\u7840\u8BBE\u65BD\uFF0C\u652F\u6301 135+ \u79CD\u8D27\u5E01\u4E0E\u8BA2\u9605\u5468\u671F\u7ED3\u7B97\uFF0C\u751F\u6001\u6700\u6210\u719F\u3002",
    url: "https://stripe.com",
    badge: "\u5168\u7403\u6536\u6B3E\u6807\u51C6",
    badgeTone: "positive",
    icon: "ph:credit-card-bold",
    pricing: "\u6309\u4EA4\u6613\u62BD\u6210",
    order: 90
  },
  {
    id: "lemon-squeezy",
    name: "Lemon Squeezy",
    category: "payment",
    categoryLabel: "\u51FA\u6D77\u6536\u6B3E",
    description: "\u9762\u5411\u51FA\u6D77\u72EC\u7ACB\u5F00\u53D1\u8005\u7684 MoR \u5546\u6237\u4EE3\u6263\u670D\u52A1\uFF0C\u4EE3\u7F34\u5168\u7403\u589E\u503C\u7A0E\uFF0C\u514D\u9664\u590D\u6742\u62A5\u7A0E\u70E6\u607C\u3002",
    url: "https://lemonsqueezy.com",
    badge: "\u514D\u7A0E\u6536\u70E6\u607C",
    badgeTone: "warning",
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
    description: "macOS \u8D85\u7EA7\u5FEB\u6377\u952E\u542F\u52A8\u5668\uFF0C\u96C6\u6210\u526A\u8D34\u677F\u5386\u53F2\u3001\u7A97\u53E3\u7BA1\u7406\u4E0E\u5404\u79CD\u5F00\u53D1\u8005\u5C0F\u63D2\u4EF6\u3002",
    url: "https://raycast.com",
    badge: "Mac\u6548\u7387\u795E\u5668",
    badgeTone: "info",
    icon: "ph:lightning-bold",
    pricing: "\u57FA\u7840\u7248\u514D\u8D39",
    order: 110
  },
  {
    id: "typefully",
    name: "Typefully",
    category: "media",
    categoryLabel: "\u521B\u4F5C\u4E0E\u6548\u7387",
    description: "\u4E13\u4E3A\u6D77\u5916 X / Twitter \u81EA\u5A92\u4F53\u8FD0\u8425\u6253\u9020\u7684\u957F\u63A8\u6587\u6392\u7248\u3001\u5B9A\u65F6\u53D1\u5E03\u4E0E\u6570\u636E\u6D1E\u5BDF\u5DE5\u5177\u3002",
    url: "https://typefully.com",
    badge: "\u51FA\u6D77\u81EA\u5A92\u4F53\u5229\u5668",
    badgeTone: "neutral",
    icon: "ph:share-network-bold",
    pricing: "\u514D\u8D39\u4F53\u9A8C",
    order: 120
  }
];

export { defaultHoxiTools as d };
