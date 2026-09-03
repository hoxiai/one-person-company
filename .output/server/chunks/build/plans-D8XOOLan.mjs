const hoxiPlans = [
  // ================= 🌐 国外主流平台 =================
  {
    slug: "cursor-pro",
    name: "Cursor Pro \u5B98\u65B9\u8BA2\u9605",
    vendor: "cursor",
    vendorLabel: "Cursor",
    vendorColor: "bg-slate-900",
    region: "international",
    type: "coding_plan",
    priceLabel: "$20 / \u6708",
    priceMonthlyCNY: 145,
    paymentMethods: ["\u6D77\u5916\u4FE1\u7528\u5361 (Visa/Mastercard)"],
    networkRequirement: "\u9700\u6D77\u5916\u7F51\u7EDC",
    period: "\u6309\u6708\u8BA2\u9605",
    quotaNote: "\u6BCF\u6708 500 \u6B21 Fast Requests\uFF0C\u8D85\u989D\u540E\u65E0\u9650\u6B21\u6162\u901F\u6392\u961F\uFF1B\u652F\u6301\u591A\u6587\u4EF6 Composer",
    models: ["Claude 3.7 Sonnet", "Claude 3.5 Sonnet", "GPT-4o", "DeepSeek R1 (Pro)"],
    recommendedModels: ["Claude 3.7 Sonnet", "Claude 3.5 Sonnet", "GPT-4o", "DeepSeek R1 (671B)"],
    tools: ["Cursor IDE", "Composer (\u591A\u6587\u4EF6\u4EE3\u7801\u751F\u6210)", "Agent \u6A21\u5F0F", "Terminal \u96C6\u6210"],
    highlights: [
      "\u5F53\u524D\u5168\u7403\u6700\u4E3B\u6D41\u7684 AI \u7F16\u7A0B IDE\uFF0C\u5199\u4EE3\u7801\u4F53\u9A8C\u7B2C\u4E00\u68AF\u961F",
      "\u591A\u6587\u4EF6\u8DE8\u6A21\u5757\u91CD\u6784\u80FD\u529B\u6781\u5F3A",
      "\u6BCF\u6708 500 \u6B21\u9AD8\u901F\u9AD8\u7EA7\u6A21\u578B\u8C03\u7528",
      "\u8D85\u989D\u540E\u53EF\u7528\u81EA\u5B9A\u4E49 API Key \u65E0\u7F1D\u7EED\u676F"
    ],
    caveats: [
      "\u9700\u7ED1\u5B9A\u6D77\u5916\u4FE1\u7528\u5361\u652F\u4ED8\uFF0C\u5B58\u5728\u5916\u5E01\u6263\u6B3E\u95E8\u69DB",
      "500 \u6B21\u9AD8\u901F\u989D\u5EA6\u91CD\u5EA6\u5F00\u53D1\u7EA6 10-15 \u5929\u5373\u8017\u5C3D\uFF0C\u6162\u901F\u9AD8\u5CF0\u671F\u9700\u6392\u961F"
    ],
    status: "hot",
    officialUrl: "https://www.cursor.com/pricing"
  },
  {
    slug: "claude-pro",
    name: "Claude Pro \u5B98\u65B9\u8BA2\u9605",
    vendor: "anthropic",
    vendorLabel: "Anthropic",
    vendorColor: "bg-orange-600",
    region: "international",
    type: "subscription",
    priceLabel: "$20 / \u6708",
    priceMonthlyCNY: 145,
    paymentMethods: ["\u6D77\u5916\u4FE1\u7528\u5361 (Stripe)"],
    networkRequirement: "\u9700\u6D77\u5916\u7F51\u7EDC (\u4E25\u683C\u98CE\u63A7)",
    period: "\u6309\u6708\u8BA2\u9605",
    quotaNote: "\u6BCF 5 \u5C0F\u65F6\u7EA6 45 \u6761\u6D88\u606F\uFF08\u6839\u636E\u5168\u7F51\u8D1F\u8F7D\u52A8\u6001\u6D6E\u52A8\uFF09\uFF1B\u652F\u6301\u5F00\u542F Thinking \u6DF1\u5EA6\u601D\u8003",
    models: ["Claude 3.7 Sonnet", "Claude 3.5 Sonnet", "Claude 3.5 Haiku"],
    tools: ["Claude \u5B98\u65B9 Web", "Artifacts (\u524D\u7AEF\u5B9E\u65F6\u9884\u89C8)", "Projects (\u4EE3\u7801\u77E5\u8BC6\u5E93)"],
    highlights: [
      "Claude 3.7 \u6DF7\u5408\u63A8\u7406\u4E0E\u7F16\u7A0B\u80FD\u529B\u5F53\u524D\u5168\u7F51\u516C\u8BA4\u7B2C\u4E00",
      "Artifacts \u53EF\u5B9E\u65F6\u6E32\u67D3 React/HTML \u524D\u7AEF\u7EC4\u4EF6",
      "Projects \u652F\u6301\u4E0A\u4F20\u6574\u4E2A\u4EE3\u7801\u5E93\u4F5C\u4E3A\u80CC\u666F\u4E0A\u4E0B\u6587"
    ],
    caveats: [
      "\u5B98\u65B9\u98CE\u63A7\u6781\u4E25\uFF0C\u56FD\u5185 IP \u6216\u975E\u7EAF\u51C0\u4EE3\u7406\u8282\u70B9\u6781\u6613\u5C01\u53F7\u62D2\u4ED8",
      "5 \u5C0F\u65F6\u7A97\u53E3\u9650\u5236\u5728\u8FDE\u7EED\u91CD\u5EA6 Debug \u65F6\u5BB9\u6613\u89E6\u53D1\u7B49\u5F85"
    ],
    status: "hot",
    officialUrl: "https://claude.ai/pricing"
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot \u4E2A\u4EBA\u7248",
    vendor: "github",
    vendorLabel: "GitHub",
    vendorColor: "bg-slate-800",
    region: "international",
    type: "coding_plan",
    priceLabel: "$10 / \u6708 (\u5E74\u4ED8 $100)",
    priceMonthlyCNY: 72,
    paymentMethods: ["PayPal", "\u6D77\u5916\u4FE1\u7528\u5361"],
    networkRequirement: "\u56FD\u5185\u76F4\u8FDE\u53EF\u7528 / \u90E8\u5206\u529F\u80FD\u9700\u7A33\u5B9A\u8FDE\u63A5",
    period: "\u6309\u6708/\u6309\u5E74",
    quotaNote: "\u65E0\u9650\u6B21\u4EE3\u7801\u884C\u5185\u667A\u80FD\u8865\u5168\uFF0CCopilot Chat \u81EA\u7531\u5207\u6362\u5E95\u5C42\u6A21\u578B",
    models: ["Claude 3.7 Sonnet", "GPT-4o", "o3-mini", "Gemini 3.7 Flash", "Gemini 2.0 Flash"],
    tools: ["VS Code", "JetBrains \u5168\u5BB6\u6876", "Visual Studio", "Xcode", "CLI"],
    highlights: [
      "\u4EE3\u7801\u8865\u5168\u5EF6\u8FDF\u6781\u4F4E\uFF0C\u6572\u56DE\u8F66\u5373\u586B\u8865\u903B\u8F91",
      "\u652F\u6301\u5728 VS Code \u4E2D\u81EA\u7531\u9009\u62E9\u5E95\u5C42\u6A21\u578B\uFF08\u542B Claude 3.7\uFF09",
      "\u5B66\u751F\u3001\u6559\u5E08\u53CA\u5F00\u6E90\u9879\u76EE\u7EF4\u62A4\u8005\u53EF\u7533\u8BF7\u514D\u8D39\u4F7F\u7528"
    ],
    caveats: [
      "\u8DE8\u591A\u6587\u4EF6\u7684\u5927\u578B\u67B6\u6784\u751F\u6210\u80FD\u529B\u7565\u900A\u4E8E\u72EC\u7ACB Cursor"
    ],
    status: "available",
    officialUrl: "https://github.com/features/copilot"
  },
  {
    slug: "chatgpt-plus",
    name: "ChatGPT Plus \u5B98\u65B9\u8BA2\u9605",
    vendor: "openai",
    vendorLabel: "OpenAI",
    vendorColor: "bg-emerald-600",
    region: "international",
    type: "subscription",
    priceLabel: "$20 / \u6708",
    priceMonthlyCNY: 145,
    paymentMethods: ["\u6D77\u5916\u4FE1\u7528\u5361", "App Store \u8BA2\u9605"],
    networkRequirement: "\u9700\u6D77\u5916\u7F51\u7EDC",
    period: "\u6309\u6708\u8BA2\u9605",
    quotaNote: "GPT-4o \u6BCF 3 \u5C0F\u65F6 80 \u6761\u6D88\u606F\uFF1Bo1 / o3-mini \u63A8\u7406\u6A21\u578B\u6BCF\u5468\u9650\u989D\u4F7F\u7528",
    models: ["GPT-4o", "o1 / o1-preview", "o3-mini (High)", "GPT-4o mini"],
    tools: ["ChatGPT Web / App", "Canvas \u4EE3\u7801\u4E0E\u6587\u672C\u534F\u4F5C\u753B\u5E03", "Advanced Voice \u9AD8\u7EA7\u8BED\u97F3", "GPTS \u5546\u5E97"],
    highlights: [
      "\u591A\u6A21\u6001\u7EFC\u5408\u80FD\u529B\u6700\u5168\u9762\uFF0C\u652F\u6301\u8BED\u97F3\u5BF9\u8BDD\u4E0E\u753B\u56FE",
      "Canvas \u753B\u5E03\u4EA4\u4E92\u6539\u5199\u5C0F\u6A21\u5757\u4EE3\u7801\u4F53\u9A8C\u6D41\u7545",
      "o3-mini \u5728\u590D\u6742\u7B97\u6CD5\u63A8\u5BFC\u4E0A\u6709\u4F18\u79C0\u8868\u73B0"
    ],
    caveats: [
      "\u9700\u6D77\u5916\u652F\u4ED8\u65B9\u5F0F\uFF0C\u5BF9\u4EE3\u7406 IP \u73AF\u5883\u8F83\u654F\u611F"
    ],
    status: "available",
    officialUrl: "https://openai.com/chatgpt/pricing"
  },
  {
    slug: "windsurf-pro",
    name: "Windsurf Pro (Codeium)",
    vendor: "codeium",
    vendorLabel: "Codeium",
    vendorColor: "bg-teal-600",
    region: "international",
    type: "coding_plan",
    priceLabel: "$15 / \u6708",
    priceMonthlyCNY: 108,
    paymentMethods: ["\u6D77\u5916\u4FE1\u7528\u5361"],
    networkRequirement: "\u9700\u6D77\u5916\u7F51\u7EDC",
    period: "\u6309\u6708\u8BA2\u9605",
    quotaNote: "\u6BCF\u6708 500 \u6B21 Fast Prompts\uFF0CCascade \u591A\u6587\u4EF6\u534F\u540C Flow",
    models: ["Claude 3.7 Sonnet", "GPT-4o", "DeepSeek R1"],
    tools: ["Windsurf IDE", "Cascade Flow (\u591A\u6B65\u9AA4\u4EE3\u7801\u4EE3\u7406)"],
    highlights: [
      "Cascade Agent \u534F\u540C\u6D41\u5199\u4EE3\u7801\u4E0A\u4E0B\u6587\u8FDE\u8D2F\u5EA6\u9AD8",
      "\u4EF7\u683C\u6BD4 Cursor \u4FBF\u5B9C $5/\u6708",
      "\u591A\u6587\u4EF6\u611F\u77E5\u548C\u5DE5\u5177\u8C03\u7528\u901F\u5EA6\u5FEB"
    ],
    caveats: [
      "\u9700\u6D77\u5916\u652F\u4ED8\u5361\uFF0C\u63D2\u4EF6\u751F\u6001\u4ECD\u5728\u8FFD\u8D76 VS Code / Cursor"
    ],
    status: "available",
    officialUrl: "https://codeium.com/windsurf"
  },
  {
    slug: "google-one-ai",
    name: "Google One AI Premium (Gemini Advanced)",
    vendor: "google",
    vendorLabel: "Google",
    vendorColor: "bg-blue-500",
    region: "international",
    type: "subscription",
    priceLabel: "$19.99 / \u6708 (\u9996\u6708\u514D\u8D39)",
    priceMonthlyCNY: 145,
    paymentMethods: ["Google Play", "\u6D77\u5916\u4FE1\u7528\u5361"],
    networkRequirement: "\u9700\u6D77\u5916\u7F51\u7EDC",
    period: "\u6309\u6708\u8BA2\u9605",
    quotaNote: "Gemini Advanced \u4F53\u9A8C Gemini 3.7 / 2.5 Pro \u8D85\u5927 1M \u4E0A\u4E0B\u6587\uFF1B\u8D60\u9001 2TB Google Drive \u7A7A\u95F4",
    models: ["Gemini 3.7 Flash", "Gemini 2.5 Pro", "Gemini 2.0 Flash", "Gemini 1.5 Pro"],
    recommendedModels: ["Gemini 3.7 Flash", "Gemini 2.5 Pro", "Gemini 2.0 Flash"],
    tools: ["Gemini Web / App", "Google AI Studio", "Google Workspace \u6574\u5408"],
    highlights: [
      "\u9AD8\u8FBE 100\u4E07 Token \u8D85\u5927\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4E00\u6B21\u6027\u5206\u6790\u5927\u578B\u4EE3\u7801\u5E93\u3001\u957F\u89C6\u9891\u4E0E\u97F3\u9891",
      "Gemini 3.7 Flash \u54CD\u5E94\u901F\u5EA6\u6781\u5FEB\u4E14\u591A\u6A21\u6001\u89E3\u6790\u80FD\u529B\u62D4\u5C16",
      "\u8D60\u9001 2TB Google \u4E91\u5B58\u50A8\u7A7A\u95F4\uFF0C\u6027\u4EF7\u6BD4\u9AD8"
    ],
    caveats: [
      "\u9700\u6D77\u5916\u7F51\u7EDC\u73AF\u5883\uFF0C\u56FD\u5185\u7F51\u7EDC\u65E0\u6CD5\u76F4\u8FDE"
    ],
    status: "hot",
    officialUrl: "https://one.google.com/explore-plan/gemini-advanced"
  },
  // ================= 🇨🇳 国内主流平台 =================
  {
    slug: "aliyun-bailian-plan",
    name: "\u963F\u91CC\u4E91\u767E\u70BC Coding Plan",
    vendor: "alibaba",
    vendorLabel: "\u963F\u91CC\u4E91",
    vendorColor: "bg-orange-500",
    region: "domestic",
    type: "token_plan",
    priceLabel: "\xA549 / \u6708\u8D77",
    priceMonthlyCNY: 49,
    paymentMethods: ["\u652F\u4ED8\u5B9D", "\u5FAE\u4FE1\u652F\u4ED8", "\u4F01\u4E1A\u5BF9\u516C\u8F6C\u8D26"],
    networkRequirement: "\u56FD\u5185\u76F4\u8FDE (\u6781\u4F4E\u5EF6\u8FDF)",
    period: "\u6309\u6708\u5957\u9910\u5305",
    quotaNote: "\u6BCF\u6708\u5305\u542B 1000\u4E07 Token \u4E13\u7EBF\u989D\u5EA6\uFF0C\u8D85\u989D\u540E\u6309\u9636\u68AF\u6298\u6263\u5355\u4EF7\u6263\u8D39",
    models: ["Qwen 2.5 Coder 32B/72B", "DeepSeek R1/V3 (\u6EE1\u8840\u7248)"],
    tools: ["Continue \u63D2\u4EF6", "Cline", "\u901A\u4E49\u7075\u7801 IDE", "\u6807\u51C6 OpenAI \u517C\u5BB9\u63A5\u53E3"],
    highlights: [
      "\u56FD\u5185\u7F51\u7EDC\u76F4\u8FDE\uFF0C\u65E0\u9700\u4EFB\u4F55\u4EE3\u7406\uFF0C\u9996\u5B57\u5EF6\u8FDF < 300ms",
      "\u652F\u6301\u652F\u4ED8\u5B9D/\u4F01\u4E1A\u5BF9\u516C\u4ED8\u6B3E\uFF0C\u652F\u6301\u5F00\u5177\u589E\u503C\u7A0E\u53D1\u7968",
      "Qwen 2.5 Coder \u4EE3\u7801\u80FD\u529B\u8868\u73B0\u6781\u5176\u4EAE\u773C\u4E14\u5355\u4EF7\u6781\u4F4E"
    ],
    caveats: [
      "\u4EC5\u652F\u6301\u901A\u4E49\u5BB6\u65CF\u53CA\u5F00\u6E90\u6743\u91CD\u6A21\u578B\uFF0C\u4E0D\u652F\u6301\u95ED\u6E90 Claude / OpenAI"
    ],
    status: "hot",
    officialUrl: "https://bailian.console.aliyun.com/"
  },
  {
    slug: "volcengine-ark-plan",
    name: "\u706B\u5C71\u5F15\u64CE\u65B9\u821F Coding Plan",
    vendor: "bytedance",
    vendorLabel: "\u5B57\u8282\u8DF3\u52A8",
    vendorColor: "bg-blue-500",
    region: "domestic",
    type: "coding_plan",
    priceLabel: "\xA539 / \u6708\u8D77 (\u9650\u65F6\u6298\u6263)",
    priceMonthlyCNY: 39,
    paymentMethods: ["\u652F\u4ED8\u5B9D", "\u5FAE\u4FE1\u652F\u4ED8", "\u5BF9\u516C\u8F6C\u8D26"],
    networkRequirement: "\u56FD\u5185\u76F4\u8FDE (BGP\u4E13\u7EBF)",
    period: "\u6309\u6708\u8BA2\u9605",
    quotaNote: "\u5305\u542B\u8C46\u5305 Doubao-Seed \u4E0E DeepSeek R1 \u6EE1\u8840\u7248\u9AD8\u5E76\u53D1\u8D44\u6E90",
    models: ["Doubao-Coder", "DeepSeek R1 (\u6EE1\u8840\u7248)", "DeepSeek V3"],
    tools: ["Trae IDE", "Cline", "Roo Code", "\u65B9\u821F\u5927\u6A21\u578B\u5E73\u53F0"],
    highlights: [
      "\u5B57\u8282\u8DF3\u52A8 Trae IDE \u5B98\u65B9\u5E95\u5C42\u4E13\u7EBF\uFF0C\u4F53\u9A8C\u6781\u5176\u4E1D\u6ED1",
      "DeepSeek R1 \u6EE1\u8840\u7248\u5E76\u53D1\u7A33\u5B9A\u6027\u56FD\u5185\u9886\u5148",
      "\u5927\u5382 BGP \u53CC\u7EBF\u7F51\u7EDC\uFF0C\u9996\u5B57\u54CD\u5E94\u5EF6\u8FDF\u6781\u4F4E"
    ],
    caveats: [
      "\u9650\u65F6\u4F18\u60E0\u5230\u671F\u540E\u6309\u6807\u51C6\u8D44\u6E90\u5305\u8BA1\u8D39"
    ],
    status: "hot",
    officialUrl: "https://www.volcengine.com/product/ark"
  },
  {
    slug: "zhipu-code-plan",
    name: "\u667A\u8C31 GLM \u7F16\u7A0B\u4E13\u4EAB\u5305",
    vendor: "zhipu",
    vendorLabel: "\u667A\u8C31 AI",
    vendorColor: "bg-blue-600",
    region: "domestic",
    type: "token_plan",
    priceLabel: "\xA539 / \u6708\u8D77",
    priceMonthlyCNY: 39,
    paymentMethods: ["\u652F\u4ED8\u5B9D", "\u5FAE\u4FE1\u652F\u4ED8", "\u5BF9\u516C\u4ED8\u6B3E"],
    networkRequirement: "\u56FD\u5185\u76F4\u8FDE",
    period: "\u8D44\u6E90\u5305",
    quotaNote: "500\u4E07 GLM-4-Plus Token + 5000\u4E07 CodeGeeX \u6781\u901F\u8865\u5168",
    models: ["GLM-4-Plus", "CodeGeeX-4", "GLM-4-Air"],
    tools: ["CodeGeeX \u63D2\u4EF6", "OpenAI \u517C\u5BB9 API", "\u667A\u8C31\u5F00\u653E\u5E73\u53F0"],
    highlights: [
      "\u9488\u5BF9\u4E2D\u6587\u6CE8\u91CA\u548C\u4E2D\u6587\u4EE3\u7801\u5F00\u53D1\u573A\u666F\u6DF1\u5EA6\u4F18\u5316",
      "\u56FD\u5185\u4F01\u4E1A\u5408\u89C4\u5BA1\u67E5\u5B8C\u5168\u65E0\u98CE\u9669",
      "CodeGeeX \u63D2\u4EF6\u5728 VS Code / JetBrains \u4F53\u9A8C\u6D41\u7545"
    ],
    caveats: [
      "\u8D85\u5927\u578B\u590D\u6742\u903B\u8F91\u63A8\u7406\u80FD\u529B\u7A0D\u5F31\u4E8E Claude 3.7"
    ],
    status: "available",
    officialUrl: "https://open.bigmodel.cn/"
  },
  {
    slug: "kimi-code-plan",
    name: "Kimi K3 \u8D85\u957F\u4E0A\u4E0B\u6587\u4EE3\u7801\u5305",
    vendor: "moonshot",
    vendorLabel: "\u6708\u4E4B\u6697\u9762",
    vendorColor: "bg-purple-600",
    region: "domestic",
    type: "token_plan",
    priceLabel: "\xA519 \u8D77",
    priceMonthlyCNY: 19,
    paymentMethods: ["\u652F\u4ED8\u5B9D", "\u5FAE\u4FE1\u652F\u4ED8"],
    networkRequirement: "\u56FD\u5185\u76F4\u8FDE",
    period: "\u6309\u91CF\u8D44\u6E90\u5305",
    quotaNote: "200\u4E07 Token \u8D85\u957F\u4E0A\u4E0B\u6587\uFF0C\u4E13\u4E3A\u5927\u578B\u4ED3\u5E93\u5168\u91CF\u9605\u8BFB\u4F18\u5316",
    models: ["Kimi K3", "Moonshot-v1-128k"],
    tools: ["Kimi \u5F00\u653E\u5E73\u53F0", "Cline", "OpenAI \u517C\u5BB9 API"],
    highlights: [
      "\u8D85\u957F\u4E0A\u4E0B\u6587\u6574\u5E93\u5206\u6790\u80FD\u529B\u6781\u5F3A\uFF0C\u4E00\u6B21\u53EF\u8BFB\u4E0A\u767E\u4E2A\u6E90\u7801\u6587\u4EF6",
      "\u4E2D\u6587\u6587\u6863\u4E0E\u67B6\u6784\u56FE\u89E3\u6790\u7CBE\u51C6"
    ],
    caveats: [
      "\u4EE3\u7801\u81EA\u52A8\u8865\u5168\u5EF6\u8FDF\u8F83\u901A\u7528\u6A21\u578B\u7565\u9AD8"
    ],
    status: "available",
    officialUrl: "https://platform.moonshot.cn/"
  },
  {
    slug: "ainode-payg",
    name: "AINode \u5F00\u53D1\u8005\u6309\u91CF\u4E2D\u8F6C\u4E13\u7EBF",
    vendor: "ainode",
    vendorLabel: "AINode (\u81EA\u8425/\u63A8\u8350)",
    vendorColor: "bg-blue-500",
    region: "domestic",
    type: "coding_plan",
    priceLabel: "\xA510 \u8D77\u5145",
    priceMonthlyCNY: 10,
    paymentMethods: ["\u5FAE\u4FE1\u652F\u4ED8", "\u652F\u4ED8\u5B9D"],
    networkRequirement: "\u56FD\u5185\u76F4\u8FDE (\u4E13\u7EBF\u52A0\u901F)",
    period: "\u6309\u91CF\u6263\u8D39 \xB7 \u6C38\u4E45\u6709\u6548",
    quotaNote: "\u5145\u591A\u5C11\u7528\u591A\u5C11\uFF0C100% \u6309\u771F\u5B9E Token \u8BA1\u8D39\uFF0C\u65E0\u6708\u8D39\uFF0C\u65E0\u8FC7\u671F\u65F6\u95F4\u9650\u5236",
    models: ["Claude 3.7 Sonnet", "DeepSeek R1", "GPT-4o", "Gemini 3.7 Flash", "Gemini 2.0 Flash"],
    recommendedModels: ["Claude 3.7 Sonnet", "DeepSeek R1 (671B)", "GPT-4o", "Gemini 3.7 Flash"],
    tools: ["Cursor", "Cline", "Roo Code", "VS Code", "Claude Code CLI"],
    highlights: [
      "\u4E13\u4E3A Cursor / IDE \u7A0B\u5E8F\u5458\u6253\u9020\uFF0C\u4E0D\u7528\u65F6\u4E0D\u82B1\u4E00\u5206\u94B1",
      "\u56FD\u5185\u53CC\u7EBF\u4E13\u7EBF\u52A0\u901F\uFF0CTTFT \u9996\u5B57\u54CD\u5E94 < 300ms",
      "\u5FAE\u4FE1/\u652F\u4ED8\u5B9D\u4E00\u952E\u626B\u7801\u5145\u503C\uFF0C\u660E\u7EC6\u900F\u660E\u5B9E\u65F6\u53EF\u67E5",
      "\u5168\u91CF\u8986\u76D6\u6D77\u5916\u6700\u65B0\u65D7\u8230\u6A21\u578B\uFF0C\u65E0\u9700\u62C5\u5FC3\u8D26\u53F7\u88AB\u5C01"
    ],
    caveats: [
      "\u4EC5\u63D0\u4F9B API Key \u4E2D\u8F6C\uFF0C\u4E0D\u542B\u5B98\u65B9 Web \u754C\u9762\uFF08\u5982\u9700 Web \u53EF\u7528\u5F00\u6E90\u5BA2\u6237\u7AEF\uFF09"
    ],
    status: "hot",
    guideUrl: "/gateways"
  }
];

export { hoxiPlans as h };
