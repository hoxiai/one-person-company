const hoxiVendors = [
  {
    slug: "anthropic",
    name: "Anthropic",
    nameZh: "Anthropic",
    homepage: "https://www.anthropic.com",
    pricingUrl: "https://platform.claude.com/docs/en/about-claude/pricing",
    color: { dot: "bg-orange-500", text: "text-orange-600" }
  },
  {
    slug: "openai",
    name: "OpenAI",
    nameZh: "OpenAI",
    homepage: "https://openai.com",
    pricingUrl: "https://developers.openai.com/api/docs/pricing",
    color: { dot: "bg-violet-500", text: "text-violet-600" }
  },
  {
    slug: "google",
    name: "Google",
    nameZh: "\u8C37\u6B4C",
    homepage: "https://ai.google.dev",
    pricingUrl: "https://ai.google.dev/gemini-api/docs/pricing",
    color: { dot: "bg-amber-500", text: "text-amber-600" }
  },
  {
    slug: "deepseek",
    name: "DeepSeek",
    nameZh: "\u6DF1\u5EA6\u6C42\u7D22",
    homepage: "https://www.deepseek.com",
    pricingUrl: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing",
    color: { dot: "bg-indigo-500", text: "text-indigo-600" }
  },
  {
    slug: "qwen",
    name: "Qwen (Alibaba)",
    nameZh: "\u963F\u91CC\u901A\u4E49\u5343\u95EE",
    homepage: "https://help.aliyun.com/zh/model-studio/",
    pricingUrl: "https://help.aliyun.com/zh/model-studio/model-pricing",
    color: { dot: "bg-fuchsia-500", text: "text-fuchsia-600" }
  },
  {
    slug: "moonshot",
    name: "Moonshot AI",
    nameZh: "\u6708\u4E4B\u6697\u9762 Kimi",
    homepage: "https://www.moonshot.cn",
    pricingUrl: "https://platform.kimi.com/docs/pricing/chat-k3",
    color: { dot: "bg-purple-500", text: "text-purple-600" }
  },
  {
    slug: "zhipu",
    name: "Z.ai (Zhipu)",
    nameZh: "\u667A\u8C31 AI",
    homepage: "https://www.zhipuai.cn",
    pricingUrl: "https://open.bigmodel.cn/pricing",
    color: { dot: "bg-pink-500", text: "text-pink-600" }
  },
  {
    slug: "doubao",
    name: "Doubao (ByteDance)",
    nameZh: "\u5B57\u8282\u8C46\u5305",
    homepage: "https://www.volcengine.com/product/ark",
    pricingUrl: "https://www.volcengine.com/docs/82379/1544106",
    color: { dot: "bg-yellow-600", text: "text-yellow-700" }
  },
  {
    slug: "minimax",
    name: "MiniMax",
    nameZh: "MiniMax",
    homepage: "https://www.minimaxi.com",
    pricingUrl: "https://platform.minimaxi.com/docs/guides/pricing-paygo",
    color: { dot: "bg-lime-600", text: "text-lime-700" }
  }
];

export { hoxiVendors as h };
