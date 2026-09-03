const CHECKED_AT = "2026-08-27";
const AA = {
  label: "Artificial Analysis \u699C\u5355",
  url: "https://artificialanalysis.ai/leaderboards/models",
  checkedAt: CHECKED_AT
};
const source = (label, url) => ({ label, url, checkedAt: CHECKED_AT });
const CLAUDE_TOKENIZER_CAVEAT = "Claude 4.7 \u53CA\u4E4B\u540E\u7684\u6A21\u578B\u6362\u7528\u4E86\u65B0\u5206\u8BCD\u5668,\u540C\u6837\u4E00\u6BB5\u6587\u672C\u5207\u51FA\u7684 token \u6BD4 Sonnet 4.6 \u53CA\u66F4\u65E9\u7248\u672C\u591A\u7EA6 30%\u3002\u56E0\u6B64\u6309\u300C\u6BCF\u767E\u4E07 token \u5355\u4EF7\u300D\u548C\u5176\u4ED6\u5382\u5546\u6A2A\u5411\u6BD4\u4EF7\u4F1A\u4F4E\u4F30\u5B9E\u9645\u82B1\u8D39\u3002";
const hoxiModels = [
  // --- Anthropic ---------------------------------------------------------
  {
    slug: "claude-fable-5",
    name: "Claude Fable 5",
    vendor: "anthropic",
    apiName: "claude-fable-5",
    releasedAt: "2026-06-09",
    reasoning: true,
    modalities: ["text", "image"],
    contextWindow: 1e6,
    maxOutputTokens: 128e3,
    price: { currency: "USD", input: 10, output: 50, cacheRead: 1, cacheWrite: 12.5 },
    billing: {
      cache: {
        model: "write-fee",
        writeVariants: [
          { label: "5 \u5206\u949F\u6863", price: 12.5 },
          { label: "1 \u5C0F\u65F6\u6863", price: 20 }
        ]
      },
      tokenizer: {
        factor: 1.3,
        relativeTo: "Claude Sonnet 4.6 \u53CA\u66F4\u65E9\u7248\u672C",
        note: "Claude 4.7 \u8D77\u6362\u7528\u65B0\u5206\u8BCD\u5668,\u540C\u6837\u6587\u672C\u5207\u51FA\u7684 token \u6BD4 4.6 \u53CA\u66F4\u65E9\u591A\u7EA6 30%\u3002\u8FD9\u662F Anthropic \u5BB6\u65CF\u5185\u90E8\u7684\u5BF9\u6BD4,\u4E0D\u80FD\u5F53\u6210\u5BF9\u5176\u4ED6\u5382\u5546\u7684\u6362\u7B97\u7CFB\u6570\u3002"
      }
    },
    scores: { overall: 62 },
    benchmarkVariant: "with fallback",
    perf: { tps: 70, ttft: 95.42 },
    scenes: ["\u590D\u6742\u63A8\u7406", "\u957F\u6587\u6863", "\u5199\u4EE3\u7801"],
    summary: "\u8D85\u5927\u5DE5\u7A0B\u67B6\u6784\u8BBE\u8BA1\u4E0E\u6DF1\u5EA6\u91CD\u6784\u7684\u7EC8\u6781\u5E95\u724C\uFF1B\u59CB\u7EC8\u5F00\u542F\u6DF1\u5EA6\u601D\u8003\u4E14\u5EF6\u8FDF\u8F83\u9AD8\uFF0C\u9002\u5408\u5F02\u6B65\u590D\u6742\u653B\u575A\u3002",
    highlights: ["\u7EFC\u5408\u5206 62,\u4EC5\u6B21\u4E8E Opus 5", "100 \u4E07 token \u4E0A\u4E0B\u6587", "\u7F13\u5B58\u547D\u4E2D\u4EF7\u964D\u5230\u8F93\u5165\u4EF7\u7684\u5341\u5206\u4E4B\u4E00"],
    caveats: [
      CLAUDE_TOKENIZER_CAVEAT,
      "\u7F13\u5B58\u5199\u5165\u6309\u6709\u6548\u671F\u5206\u6863:5 \u5206\u949F\u6863 $12.5/\u767E\u4E07 token,1 \u5C0F\u65F6\u6863 $20/\u767E\u4E07 token\u3002",
      "\u9996\u5B57\u5EF6\u8FDF\u5728\u699C\u5355\u4E0A\u9AD8\u8FBE 95 \u79D2(\u59CB\u7EC8\u5F00\u542F\u601D\u8003),\u4E0D\u9002\u5408\u8981\u6C42\u5373\u65F6\u54CD\u5E94\u7684\u4EA4\u4E92\u573A\u666F\u3002"
    ],
    sources: [source("Anthropic \u5B98\u65B9\u6A21\u578B\u9875", "https://platform.claude.com/docs/en/models/fable-5/overview"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "claude-opus-5",
    name: "Claude Opus 5",
    vendor: "anthropic",
    apiName: "claude-opus-5",
    releasedAt: "2026-07-24",
    reasoning: true,
    modalities: ["text", "image"],
    contextWindow: 1e6,
    maxOutputTokens: 128e3,
    price: { currency: "USD", input: 5, output: 25, cacheRead: 0.5, cacheWrite: 6.25 },
    billing: {
      cache: {
        model: "write-fee",
        writeVariants: [
          { label: "5 \u5206\u949F\u6863", price: 6.25 },
          { label: "1 \u5C0F\u65F6\u6863", price: 10 }
        ]
      },
      tokenizer: {
        factor: 1.3,
        relativeTo: "Claude Sonnet 4.6 \u53CA\u66F4\u65E9\u7248\u672C",
        note: "Claude 4.7 \u8D77\u6362\u7528\u65B0\u5206\u8BCD\u5668,\u540C\u6837\u6587\u672C\u5207\u51FA\u7684 token \u6BD4 4.6 \u53CA\u66F4\u65E9\u591A\u7EA6 30%\u3002\u8FD9\u662F Anthropic \u5BB6\u65CF\u5185\u90E8\u7684\u5BF9\u6BD4,\u4E0D\u80FD\u5F53\u6210\u5BF9\u5176\u4ED6\u5382\u5546\u7684\u6362\u7B97\u7CFB\u6570\u3002"
      }
    },
    scores: { overall: 63 },
    benchmarkVariant: "max",
    perf: { tps: 55, ttft: 31.92 },
    scenes: ["\u590D\u6742\u63A8\u7406", "\u5199\u4EE3\u7801", "Agent \u5DE5\u5177\u8C03\u7528"],
    badges: ["\u7EFC\u5408\u5206\u7B2C\u4E00"],
    summary: "\u591A\u6587\u4EF6\u590D\u6742\u91CD\u6784\u4E0E Agent \u5DE5\u5177\u8C03\u7528\u7684\u6218\u795E\uFF1B\u903B\u8F91\u7F1C\u5BC6\u4EE3\u7801\u4E00\u6B21\u8FC7\uFF0C\u65E5\u5E38\u653B\u575A\u7EFC\u5408\u4F53\u611F\u9996\u9009\u3002",
    highlights: ["\u7EFC\u5408\u5206 63,\u699C\u9996", "\u8F93\u5165 $5 / \u8F93\u51FA $25,\u6BD4 Fable 5 \u4F4E\u4E00\u534A", "100 \u4E07 token \u4E0A\u4E0B\u6587"],
    caveats: [
      CLAUDE_TOKENIZER_CAVEAT,
      "\u53E6\u6709\u7814\u7A76\u9884\u89C8\u6027\u8D28\u7684 Fast mode,\u6309 $10 / $50 \u5355\u72EC\u8BA1\u4EF7,\u4E0D\u662F\u8FD9\u91CC\u7684\u4EF7\u683C\u3002",
      "\u7F13\u5B58\u5199\u5165 5 \u5206\u949F\u6863 $6.25\u30011 \u5C0F\u65F6\u6863 $10\u3002"
    ],
    sources: [source("Anthropic \u5B98\u65B9\u6A21\u578B\u9875", "https://platform.claude.com/docs/en/models/opus-5/overview"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "claude-sonnet-5",
    name: "Claude Sonnet 5",
    vendor: "anthropic",
    apiName: "claude-sonnet-5",
    releasedAt: "2026-06-30",
    reasoning: true,
    modalities: ["text", "image"],
    contextWindow: 1e6,
    maxOutputTokens: 128e3,
    price: { currency: "USD", input: 2, output: 10, cacheRead: 0.2, cacheWrite: 2.5 },
    billing: {
      cache: {
        model: "write-fee",
        writeVariants: [
          { label: "5 \u5206\u949F\u6863", price: 2.5 },
          { label: "1 \u5C0F\u65F6\u6863", price: 4 }
        ]
      },
      tokenizer: {
        factor: 1.3,
        relativeTo: "Claude Sonnet 4.6 \u53CA\u66F4\u65E9\u7248\u672C",
        note: "Claude 4.7 \u8D77\u6362\u7528\u65B0\u5206\u8BCD\u5668,\u540C\u6837\u6587\u672C\u5207\u51FA\u7684 token \u6BD4 4.6 \u53CA\u66F4\u65E9\u591A\u7EA6 30%\u3002\u8FD9\u662F Anthropic \u5BB6\u65CF\u5185\u90E8\u7684\u5BF9\u6BD4,\u4E0D\u80FD\u5F53\u6210\u5BF9\u5176\u4ED6\u5382\u5546\u7684\u6362\u7B97\u7CFB\u6570\u3002"
      }
    },
    scores: { overall: 55 },
    benchmarkVariant: "max",
    perf: { tps: 92, ttft: 171.86 },
    scenes: ["\u65E5\u5E38\u95EE\u7B54", "\u5199\u4EE3\u7801", "\u957F\u6587\u6863"],
    summary: "\u5168\u6808\u5F00\u53D1\u65E5\u5E38\u4E3B\u529B\uFF0C\u5199 Vue/TS/Go \u4E1D\u6ED1\u7A33\u5B9A\u5C11\u5E7B\u89C9\uFF1B\u6027\u4EF7\u6BD4\u663E\u8457\u4F18\u4E8E\u65D7\u8230\uFF0C\u65E5\u5E38\u9AD8\u9891\u9996\u9009\u3002",
    highlights: ["\u8F93\u5165 $2 / \u8F93\u51FA $10", "100 \u4E07 token \u4E0A\u4E0B\u6587", "\u5B98\u65B9\u5DF2\u786E\u8BA4\u4E0D\u518D\u6DA8\u4EF7"],
    caveats: [
      CLAUDE_TOKENIZER_CAVEAT,
      "\u539F\u5B9A 2026-09-01 \u4E0A\u8C03\u5230 $3 / $15,\u5B98\u65B9\u5B9A\u4EF7\u9875\u5DF2\u660E\u786E\u53D6\u6D88\u8BE5\u8C03\u6574,\u5F53\u524D\u4EF7\u5373\u957F\u671F\u4EF7\u3002",
      "\u699C\u5355\u4E0A max \u6863\u9996\u5B57\u5EF6\u8FDF\u7EA6 172 \u79D2,\u4EA4\u4E92\u573A\u666F\u8BF7\u8C03\u4F4E\u63A8\u7406\u6863\u4F4D\u3002"
    ],
    sources: [source("Anthropic \u5B98\u65B9\u6A21\u578B\u9875", "https://platform.claude.com/docs/en/models/sonnet-5/overview"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "claude-haiku-4-5",
    name: "Claude Haiku 4.5",
    vendor: "anthropic",
    apiName: "claude-haiku-4-5-20251001",
    releasedAt: "2025-10-15",
    reasoning: true,
    modalities: ["text", "image"],
    contextWindow: 2e5,
    maxOutputTokens: 64e3,
    price: { currency: "USD", input: 1, output: 5, cacheRead: 0.1, cacheWrite: 1.25 },
    billing: {
      cache: {
        model: "write-fee",
        writeVariants: [
          { label: "5 \u5206\u949F\u6863", price: 1.25 },
          { label: "1 \u5C0F\u65F6\u6863", price: 2 }
        ]
      }
    },
    scores: {},
    scenes: ["\u6279\u91CF\u5904\u7406", "\u65E5\u5E38\u95EE\u7B54"],
    summary: "\u6781\u901F\u8F7B\u91CF\u5C0F\u94A2\u70AE\uFF0C\u5904\u7406\u6D77\u91CF\u65E5\u5FD7\u4E0E\u8F7B\u91CF\u51FD\u6570\u8865\u5168\u6781\u5FEB\uFF1B\u590D\u6742\u5D4C\u5957\u4E0E\u8DE8\u6587\u4EF6\u903B\u8F91\u5076\u6709\u9057\u6F0F\u3002",
    highlights: ["\u8F93\u5165 $1 / \u8F93\u51FA $5", "\u7F13\u5B58\u547D\u4E2D\u4EF7\u4F4E\u81F3 $0.1"],
    caveats: [
      "\u4E0A\u4E0B\u6587 20 \u4E07 token,\u53EA\u6709 Claude 5 \u7CFB\u5217\u7684\u4E94\u5206\u4E4B\u4E00\u3002",
      "\u601D\u8003\u9700\u8981\u624B\u52A8\u5F00\u542F(\u8BBE\u7F6E thinking \u4E0E budget_tokens),\u4E0D\u652F\u6301 effort \u53C2\u6570\u3002",
      "Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u91CC\u6CA1\u6709\u8FD9\u4E2A\u6A21\u578B,\u56E0\u6B64\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u7EFC\u5408\u5206\u4E0E\u5B9E\u6D4B\u901F\u5EA6\u3002"
    ],
    sources: [source("Anthropic \u5B98\u65B9\u6A21\u578B\u9875", "https://platform.claude.com/docs/en/models/haiku-4-5/overview")],
    updatedAt: CHECKED_AT
  },
  // --- OpenAI ------------------------------------------------------------
  {
    slug: "gpt-5-6-sol",
    name: "GPT-5.6 Sol",
    vendor: "openai",
    apiName: "gpt-5.6-sol",
    reasoning: true,
    modalities: ["text", "image"],
    contextWindow: 105e4,
    maxOutputTokens: 128e3,
    price: { currency: "USD", input: 4, output: 20, cacheRead: 0.4 },
    billing: {
      cache: {
        model: "none",
        note: "OpenAI \u4E0D\u4E3A\u7F13\u5B58\u5199\u5165\u5355\u72EC\u6536\u8D39\u3002\u8FD9\u662F\u300C\u6CA1\u6709\u8FD9\u9879\u6536\u8D39\u300D,\u4E0D\u662F\u300C\u514D\u8D39\u300D\u2014\u2014\u4E0D\u8981\u5728\u8868\u683C\u91CC\u663E\u793A\u4E3A 0\u3002"
      }
    },
    scores: { overall: 61 },
    benchmarkVariant: "max",
    perf: { tps: 74, ttft: 112.27 },
    scenes: ["\u590D\u6742\u63A8\u7406", "\u5199\u4EE3\u7801", "Agent \u5DE5\u5177\u8C03\u7528"],
    summary: "\u77E5\u8BC6\u9762\u6781\u5BBD\u3001\u590D\u6742\u65B9\u6848\u8BBE\u8BA1\u8BE6\u5C3D\uFF1B\u903B\u8F91\u4E0E\u4EE3\u7801\u6781\u7A33\uFF0C\u4F46\u5355\u4EF7\u504F\u9AD8\u5EFA\u8BAE\u6309\u91CF\u63A7\u5236\u9884\u7B97\u3002",
    highlights: ["\u7EFC\u5408\u5206 61", "105 \u4E07 token \u4E0A\u4E0B\u6587", "\u8F93\u5165 $4 / \u8F93\u51FA $20"],
    caveats: [
      "OpenAI \u4E0D\u5355\u72EC\u6536\u7F13\u5B58\u5199\u5165\u8D39,\u6240\u4EE5\u672C\u7AD9\u4E0D\u663E\u793A\u8BE5\u9879\u2014\u2014\u90A3\u662F\u300C\u6CA1\u6709\u8FD9\u9879\u6536\u8D39\u300D,\u4E0D\u662F\u300C\u514D\u8D39\u300D\u3002",
      "\u63A8\u7406\u6863\u4F4D\u4ECE medium \u63D0\u5230 max \u4F1A\u663E\u8457\u62C9\u9AD8\u9996\u5B57\u5EF6\u8FDF(\u699C\u5355 max \u6863\u7EA6 112 \u79D2)\u3002"
    ],
    sources: [source("OpenAI \u5B98\u65B9\u6A21\u578B\u9875", "https://developers.openai.com/api/docs/models/gpt-5.6-sol"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "gpt-5-6-terra",
    name: "GPT-5.6 Terra",
    vendor: "openai",
    apiName: "gpt-5.6-terra",
    reasoning: true,
    modalities: ["text", "image"],
    contextWindow: 105e4,
    maxOutputTokens: 128e3,
    price: { currency: "USD", input: 2, output: 12, cacheRead: 0.2 },
    billing: {
      cache: {
        model: "none",
        note: "OpenAI \u4E0D\u4E3A\u7F13\u5B58\u5199\u5165\u5355\u72EC\u6536\u8D39\u3002\u8FD9\u662F\u300C\u6CA1\u6709\u8FD9\u9879\u6536\u8D39\u300D,\u4E0D\u662F\u300C\u514D\u8D39\u300D\u2014\u2014\u4E0D\u8981\u5728\u8868\u683C\u91CC\u663E\u793A\u4E3A 0\u3002"
      }
    },
    scores: { overall: 57 },
    benchmarkVariant: "max",
    perf: { tps: 109, ttft: 150.94 },
    scenes: ["\u65E5\u5E38\u95EE\u7B54", "\u5199\u4EE3\u7801", "\u957F\u6587\u6863"],
    summary: "\u5E38\u89C4\u5168\u6808\u5F00\u53D1\u4E0E\u957F\u6587\u6863\u91CD\u6784\u8868\u73B0\u5747\u8861\uFF1B\u8F93\u51FA\u901F\u5EA6\u98DE\u5FEB\uFF0C\u4F46 max \u6863\u601D\u8003\u9996\u5B57\u5EF6\u8FDF\u504F\u957F\u3002",
    highlights: ["\u8F93\u5165 $2 / \u8F93\u51FA $12", "\u8F93\u51FA\u901F\u5EA6 109 tokens/s,\u9AD8\u4E8E\u540C\u95E8\u65D7\u8230", "105 \u4E07 token \u4E0A\u4E0B\u6587"],
    caveats: ["\u699C\u5355 max \u6863\u9996\u5B57\u5EF6\u8FDF\u7EA6 151 \u79D2,\u662F\u8FD9\u4E00\u6863\u91CC\u6700\u6162\u7684\u4E4B\u4E00\u3002"],
    sources: [source("OpenAI \u5B98\u65B9\u6A21\u578B\u9875", "https://developers.openai.com/api/docs/models/gpt-5.6-terra"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "gpt-5-6-luna",
    name: "GPT-5.6 Luna",
    vendor: "openai",
    apiName: "gpt-5.6-luna",
    reasoning: true,
    modalities: ["text", "image"],
    contextWindow: 105e4,
    maxOutputTokens: 128e3,
    price: { currency: "USD", input: 0.2, output: 1.2, cacheRead: 0.02 },
    billing: {
      cache: {
        model: "none",
        note: "OpenAI \u4E0D\u4E3A\u7F13\u5B58\u5199\u5165\u5355\u72EC\u6536\u8D39\u3002\u8FD9\u662F\u300C\u6CA1\u6709\u8FD9\u9879\u6536\u8D39\u300D,\u4E0D\u662F\u300C\u514D\u8D39\u300D\u2014\u2014\u4E0D\u8981\u5728\u8868\u683C\u91CC\u663E\u793A\u4E3A 0\u3002"
      }
    },
    scores: {},
    scenes: ["\u6279\u91CF\u5904\u7406", "\u65E5\u5E38\u95EE\u7B54", "\u957F\u6587\u6863"],
    badges: ["\u6781\u7701"],
    summary: "\u6781\u4F4E\u6210\u672C\u4FDD\u7559\u767E\u4E07\u4E0A\u4E0B\u6587\uFF0C\u8DD1\u6279\u91CF\u6D4B\u8BD5\u4E0E\u957F\u6587\u7C97\u7B5B\u795E\u5668\uFF1B\u590D\u6742\u4EE3\u7801\u653B\u575A\u5EFA\u8BAE\u6362\u9AD8\u9636\u6863\u3002",
    highlights: ["\u8F93\u5165 $0.2 / \u8F93\u51FA $1.2", "\u7F13\u5B58\u547D\u4E2D $0.02", "105 \u4E07 token \u4E0A\u4E0B\u6587"],
    caveats: [
      "\u63A8\u7406\u6863\u4F4D\u53EF\u8C03\u5230 none,\u7701\u94B1\u573A\u666F\u5EFA\u8BAE\u5148\u8BD5\u6700\u4F4E\u6863\u3002",
      "Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u91CC\u6CA1\u6709\u8FD9\u4E2A\u6A21\u578B,\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u7EFC\u5408\u5206\u4E0E\u5B9E\u6D4B\u901F\u5EA6\u3002"
    ],
    sources: [source("OpenAI \u5B98\u65B9\u6A21\u578B\u9875", "https://developers.openai.com/api/docs/models/gpt-5.6-luna")],
    updatedAt: CHECKED_AT
  },
  // --- Google ------------------------------------------------------------
  {
    slug: "gemini-3-7-flash",
    name: "Gemini 3.7 Flash",
    vendor: "google",
    apiName: "gemini-3.7-flash",
    reasoning: true,
    modalities: ["text", "image", "audio", "video"],
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    price: { currency: "USD", input: 0.75, output: 3.75, cacheRead: 0.075 },
    billing: {
      cache: {
        model: "hourly-storage",
        storagePerMTokHour: 0.5,
        note: "\u4E0D\u6536\u7F13\u5B58\u5199\u5165\u8D39,\u6539\u6309\u7F13\u5B58\u5B58\u50A8\u65F6\u957F\u8BA1\u8D39;2027-01-01 \u8D77\u5B58\u50A8\u5355\u4EF7\u6DA8\u5230 $1.00/\u767E\u4E07 token/\u5C0F\u65F6\u3002"
      },
      promo: {
        kind: "current-is-promo",
        until: "2026-12-31",
        after: { input: 1.5, output: 7.5, cacheRead: 0.15 },
        note: "\u73B0\u4EF7\u4E3A\u4FC3\u9500\u4EF7,2027-01-01 \u8D77\u7FFB\u500D\u3002\u505A\u957F\u671F\u6210\u672C\u4F30\u7B97\u5E94\u6309\u5230\u671F\u540E\u7684\u4EF7\u683C\u7B97\u3002"
      }
    },
    scores: { overall: 56 },
    benchmarkVariant: "high",
    perf: { tps: 362, ttft: 12.75 },
    scenes: ["\u65E5\u5E38\u95EE\u7B54", "\u6279\u91CF\u5904\u7406", "\u56FE\u7247\u7406\u89E3", "\u957F\u6587\u6863"],
    badges: ["\u6700\u5FEB"],
    summary: "\u9996\u5B57\u6BEB\u79D2\u7EA7\u54CD\u5E94\u3001\u6781\u901F\u65E0\u611F\uFF1B\u65E5\u5E38\u4EE3\u7801\u8865\u5168\u4E0E\u5E38\u89C4 CRUD \u751F\u6210\u5229\u5668\uFF0C\u6027\u4EF7\u6BD4\u65E0\u654C\u3002",
    highlights: ["\u8F93\u51FA 362 tokens/s,\u8FDC\u9AD8\u4E8E\u540C\u699C\u5176\u4ED6\u6A21\u578B", "\u8F93\u5165 $0.75 / \u8F93\u51FA $3.75", "\u652F\u6301\u97F3\u9891\u4E0E\u89C6\u9891\u8F93\u5165"],
    caveats: [
      "\u5F53\u524D\u4EF7\u683C\u53EA\u5230 2026-12-31\u30022027-01-01 \u8D77\u8F93\u5165\u6DA8\u5230 $1.50\u3001\u8F93\u51FA\u6DA8\u5230 $3.75\u2192$7.50\u3001\u7F13\u5B58\u547D\u4E2D\u6DA8\u5230 $0.15,\u76F8\u5F53\u4E8E\u7FFB\u500D\u3002",
      "Google \u4E0D\u6309\u300C\u7F13\u5B58\u5199\u5165\u300D\u6536\u8D39,\u800C\u662F\u6309\u7F13\u5B58\u5B58\u50A8\u65F6\u957F\u6536\u8D39($0.50/\u767E\u4E07 token/\u5C0F\u65F6,2027 \u5E74\u8D77\u6DA8\u5230 $1.00),\u8FD9\u9879\u5F00\u9500\u65E0\u6CD5\u4F53\u73B0\u5728\u5355\u4EF7\u8868\u91CC\u3002"
    ],
    sources: [source("Google \u5B98\u65B9\u6A21\u578B\u9875", "https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "gemini-3-1-pro",
    name: "Gemini 3.1 Pro Preview",
    vendor: "google",
    apiName: "gemini-3.1-pro-preview",
    reasoning: true,
    modalities: ["text", "image", "audio", "video"],
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    price: { currency: "USD", input: 2, output: 12, cacheRead: 0.2 },
    billing: {
      tiers: [
        { upToInputTokens: 2e5, input: 2, output: 12, cacheRead: 0.2 },
        { upToInputTokens: null, input: 4, output: 18, cacheRead: 0.4 }
      ],
      cache: {
        model: "hourly-storage",
        note: "\u4E0D\u6536\u7F13\u5B58\u5199\u5165\u8D39,\u6539\u6309\u7F13\u5B58\u5B58\u50A8\u65F6\u957F\u8BA1\u8D39\u3002"
      }
    },
    scores: {},
    scenes: ["\u957F\u6587\u6863", "\u56FE\u7247\u7406\u89E3", "\u590D\u6742\u63A8\u7406"],
    summary: "\u767E\u4E07\u957F\u4E0A\u4E0B\u6587\u8868\u73B0\u51FA\u8272\uFF0C\u6574\u5E93\u585E\u5165\u4F9D\u7136\u6293\u53D6\u7CBE\u51C6\uFF1B\u6CE8\u610F 20 \u4E07 Token \u540E\u7684\u9636\u68AF\u7FFB\u500D\u6210\u672C\u3002",
    highlights: ["104 \u4E07 token \u4E0A\u4E0B\u6587", "\u652F\u6301\u97F3\u9891\u4E0E\u89C6\u9891\u8F93\u5165"],
    caveats: [
      "\u9636\u68AF\u4EF7:\u8F93\u5165\u8D85\u8FC7 20 \u4E07 token \u540E,\u8F93\u5165\u6DA8\u5230 $4.00\u3001\u8F93\u51FA\u6DA8\u5230 $18.00\u3001\u7F13\u5B58\u547D\u4E2D\u6DA8\u5230 $0.40\u3002\u672C\u7AD9\u5217\u7684\u662F 20 \u4E07\u4EE5\u5185\u7684\u4EF7\u683C\u3002",
      "\u4ECD\u662F preview \u72B6\u6001,\u63A5\u53E3\u4E0E\u4EF7\u683C\u90FD\u53EF\u80FD\u53D8\u52A8\u3002",
      "Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u91CC\u6CA1\u6709\u8FD9\u4E2A\u6A21\u578B,\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u7EFC\u5408\u5206\u3002"
    ],
    sources: [source("Google \u5B98\u65B9\u6A21\u578B\u9875", "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview")],
    updatedAt: CHECKED_AT
  },
  {
    slug: "gemini-3-1-flash-lite",
    name: "Gemini 3.1 Flash-Lite",
    vendor: "google",
    apiName: "gemini-3.1-flash-lite",
    reasoning: true,
    modalities: ["text", "image", "audio", "video"],
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    price: { currency: "USD", input: 0.25, output: 1.5, cacheRead: 0.025 },
    billing: {
      cache: {
        model: "hourly-storage",
        note: "\u4E0D\u6536\u7F13\u5B58\u5199\u5165\u8D39,\u6539\u6309\u7F13\u5B58\u5B58\u50A8\u65F6\u957F\u8BA1\u8D39\u3002"
      },
      modalitySurcharges: [
        { modality: "audio", input: 0.5, cacheRead: 0.05, note: "\u97F3\u9891\u8F93\u5165\u5355\u4EF7\u662F\u6587\u672C/\u56FE\u7247/\u89C6\u9891\u7684\u4E24\u500D,\u7F13\u5B58\u547D\u4E2D\u4EF7\u540C\u7406\u7FFB\u500D\u3002" }
      ]
    },
    scores: {},
    scenes: ["\u6279\u91CF\u5904\u7406", "\u65E5\u5E38\u95EE\u7B54", "\u957F\u6587\u6863"],
    badges: ["\u6781\u7701"],
    summary: "\u8D85\u5927\u6279\u91CF\u957F\u6587\u672C\u4E0E\u8F7B\u91CF\u4EA4\u4E92\u7684\u767D\u83DC\u4EF7\u5229\u5668\uFF1B\u97F3\u9891/\u590D\u6742\u591A\u6A21\u6001\u8F93\u5165\u9700\u7559\u610F\u9644\u52A0\u8D39\u3002",
    highlights: ["\u8F93\u5165 $0.25 / \u8F93\u51FA $1.5", "104 \u4E07 token \u4E0A\u4E0B\u6587", "\u7F13\u5B58\u547D\u4E2D $0.025"],
    caveats: [
      "\u97F3\u9891\u8F93\u5165\u5355\u72EC\u8BA1\u4EF7,\u662F\u6587\u672C/\u56FE\u7247/\u89C6\u9891\u7684\u4E24\u500D($0.50/\u767E\u4E07 token),\u7F13\u5B58\u547D\u4E2D\u540C\u7406\u7FFB\u500D\u3002",
      "Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u91CC\u6CA1\u6709\u8FD9\u4E2A\u6A21\u578B,\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u7EFC\u5408\u5206\u3002"
    ],
    sources: [source("Google \u5B98\u65B9\u6A21\u578B\u9875", "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite")],
    updatedAt: CHECKED_AT
  },
  // --- DeepSeek ----------------------------------------------------------
  {
    slug: "deepseek-v4-pro",
    name: "DeepSeek-V4-Pro",
    vendor: "deepseek",
    apiName: "deepseek-v4-pro",
    reasoning: true,
    modalities: ["text"],
    contextWindow: 1048576,
    maxOutputTokens: 393216,
    price: { currency: "CNY", input: 9, output: 27, cacheRead: 0.3 },
    billing: {
      timeWindows: [
        { label: "\u9AD8\u5CF0(\u5317\u4EAC\u65F6\u95F4\u5468\u4E00\u81F3\u5468\u4E94 9:00-12:00\u300114:00-18:00)", multiplier: 1 },
        { label: "\u7A7A\u95F2\u65F6\u6BB5(\u5176\u4F59\u5168\u90E8\u65F6\u95F4)", multiplier: 0.5 }
      ]
    },
    scores: { overall: 53 },
    benchmarkVariant: "max",
    perf: { tps: 68, ttft: 1.48 },
    scenes: ["\u590D\u6742\u63A8\u7406", "\u5199\u4EE3\u7801", "\u957F\u6587\u6863"],
    summary: "\u56FD\u4EA7\u81EA\u7814\u63A8\u7406\u65D7\u8230\uFF0C\u4E2D\u6587\u7406\u89E3\u4E0E Debug \u627E\u9519\u6781\u5EA6\u4E1D\u6ED1\uFF0C\u5EF6\u8FDF\u6781\u4F4E\uFF1B\u975E\u9AD8\u5CF0\u671F\u8C03\u7528\u6210\u672C\u51CF\u534A\u3002",
    highlights: ["\u9996\u5B57\u5EF6\u8FDF 1.48 \u79D2", "\u7F13\u5B58\u547D\u4E2D \xA50.3/\u767E\u4E07 token", "\u6700\u5927\u8F93\u51FA 384K token"],
    caveats: [
      "\u5206\u65F6\u6BB5\u8BA1\u4EF7:\u5317\u4EAC\u65F6\u95F4\u5468\u4E00\u81F3\u5468\u4E94 9:00\u201312:00\u300114:00\u201318:00 \u4E3A\u9AD8\u5CF0\u4EF7(\u5373\u672C\u7AD9\u6240\u5217),\u5176\u4F59\u65F6\u6BB5\u5168\u90E8\u51CF\u534A\u3002",
      "\u672C\u7AD9\u5217\u7684\u662F DeepSeek \u5B98\u65B9\u81EA\u8425\u4EF7\u3002\u540C\u4E00\u6A21\u578B\u5728\u706B\u5C71\u65B9\u821F\u7B49\u7B2C\u4E09\u65B9\u5E73\u53F0\u4E0A\u7684\u4EF7\u683C\u4E0D\u540C,\u4E14\u65B9\u821F\u4FA7\u8BA1\u8D39\u6807\u51C6\u9884\u8BA1 2026-08-28 \u8D77\u8C03\u6574\u3002",
      "\u4EC5\u652F\u6301\u6587\u672C\u8F93\u5165\u3002"
    ],
    sources: [source("DeepSeek \u5B98\u65B9\u5B9A\u4EF7\u9875", "https://api-docs.deepseek.com/zh-cn/quick_start/pricing"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "deepseek-v4-flash",
    name: "DeepSeek-V4-Flash",
    vendor: "deepseek",
    apiName: "deepseek-v4-flash",
    reasoning: true,
    modalities: ["text"],
    contextWindow: 1048576,
    maxOutputTokens: 393216,
    price: { currency: "CNY", input: 3, output: 9, cacheRead: 0.1 },
    billing: {
      timeWindows: [
        { label: "\u9AD8\u5CF0(\u5317\u4EAC\u65F6\u95F4\u5468\u4E00\u81F3\u5468\u4E94 9:00-12:00\u300114:00-18:00)", multiplier: 1 },
        { label: "\u7A7A\u95F2\u65F6\u6BB5(\u5176\u4F59\u5168\u90E8\u65F6\u95F4)", multiplier: 0.5 }
      ]
    },
    scores: {},
    scenes: ["\u6279\u91CF\u5904\u7406", "\u65E5\u5E38\u95EE\u7B54", "\u957F\u6587\u6863"],
    summary: "\u5E38\u89C4\u5199\u4EE3\u7801\u4E0E\u65E5\u5E38\u95EE\u7B54\u7684\u8D85\u4F4E\u6210\u672C\u5E73\u66FF\uFF1B\u767E\u4E07\u4E0A\u4E0B\u6587\u591F\u5927\uFF0C\u9002\u5408\u4E2D\u5C0F\u578B\u9879\u76EE\u9AD8\u9891\u8C03\u7528\u3002",
    highlights: ["\u8F93\u5165 \xA53 / \u8F93\u51FA \xA59", "\u7F13\u5B58\u547D\u4E2D \xA50.1/\u767E\u4E07 token", "\u767E\u4E07\u7EA7\u4E0A\u4E0B\u6587,\u6700\u5927\u8F93\u51FA 384K"],
    caveats: [
      "\u540C\u6837\u5206\u65F6\u6BB5\u8BA1\u4EF7,\u7A7A\u95F2\u65F6\u6BB5\u51CF\u534A\u3002",
      "Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u91CC\u6CA1\u6709\u8FD9\u4E2A\u6A21\u578B,\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u7EFC\u5408\u5206\u4E0E\u5B9E\u6D4B\u901F\u5EA6\u3002"
    ],
    sources: [source("DeepSeek \u5B98\u65B9\u5B9A\u4EF7\u9875", "https://api-docs.deepseek.com/zh-cn/quick_start/pricing")],
    updatedAt: CHECKED_AT
  },
  // --- 阿里通义千问 -------------------------------------------------------
  {
    slug: "qwen3-8-max",
    name: "Qwen3.8-Max",
    vendor: "qwen",
    apiName: "qwen3.8-max",
    reasoning: true,
    modalities: ["text", "image", "video"],
    contextWindow: 1e6,
    maxOutputTokens: 131072,
    price: { currency: "CNY", input: 12, output: 36, cacheRead: 1.5 },
    billing: {
      cache: {
        model: "write-fee",
        writeVariants: [{ label: "\u663E\u5F0F\u7F13\u5B58\u521B\u5EFA", price: 15 }],
        note: "\u9664\u6309\u6B21\u7684\u7F13\u5B58\u547D\u4E2D\u4EF7\u5916,\u663E\u5F0F\u7F13\u5B58\u53E6\u6709\u521B\u5EFA\u8D39,\u4E0E\u547D\u4E2D\u4EF7\u662F\u4E24\u7B14\u3002"
      }
    },
    scores: { overall: 58 },
    perf: { tps: 21, ttft: 2.5 },
    scenes: ["\u590D\u6742\u63A8\u7406", "\u4E2D\u6587\u5199\u4F5C", "\u56FE\u7247\u7406\u89E3"],
    summary: "\u56FD\u4EA7\u7EFC\u5408\u6218\u529B\u7B2C\u4E00\u68AF\u961F\uFF0C\u4E2D\u6587\u6307\u4EE4\u9075\u5FAA\u6781\u5F3A\uFF1B\u591A\u6A21\u6001\u652F\u6301\u597D\u4F46\u957F\u8F93\u51FA\u901F\u5EA6\u504F\u6162\u9700\u8010\u5FC3\u3002",
    highlights: ["\u7EFC\u5408\u5206 58,\u56FD\u4EA7\u6700\u9AD8", "\u652F\u6301\u56FE\u7247\u4E0E\u89C6\u9891\u8F93\u5165", "\u9996\u5B57\u5EF6\u8FDF 2.5 \u79D2"],
    caveats: [
      "\u8F93\u51FA\u901F\u5EA6\u4EC5 21 tokens/s,\u662F\u672C\u7AD9\u6536\u5F55\u6A21\u578B\u91CC\u6700\u6162\u7684,\u957F\u8F93\u51FA\u4EFB\u52A1\u4F53\u611F\u4F1A\u5F88\u660E\u663E\u3002",
      "\u6240\u5217\u4E3A\u534E\u53172(\u5317\u4EAC)\u5730\u57DF\u520A\u4F8B\u4EF7,\u63A7\u5236\u53F0\u53EF\u80FD\u53E6\u6709\u9650\u65F6\u4F18\u60E0,\u4E0D\u540C\u5730\u57DF\u4EF7\u683C\u4E5F\u53EF\u80FD\u4E0D\u540C\u3002",
      "\u663E\u5F0F\u7F13\u5B58\u53E6\u6709\u521B\u5EFA\u8D39(\xA515/\u767E\u4E07 token),\u4E0E\u547D\u4E2D\u4EF7\u662F\u4E24\u7B14\u3002"
    ],
    sources: [source("\u963F\u91CC\u4E91\u767E\u70BC\u5B9A\u4EF7\u9875", "https://help.aliyun.com/zh/model-studio/model-pricing"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "qwen3-8-flash",
    name: "Qwen3.8-Flash",
    vendor: "qwen",
    apiName: "qwen3.8-flash",
    reasoning: true,
    modalities: ["text", "image", "video"],
    contextWindow: 1e6,
    maxOutputTokens: 131072,
    price: { currency: "CNY", input: 0.8, output: 2.7, cacheRead: 0.1 },
    billing: {
      batchMultiplier: 0.5,
      cache: {
        model: "write-fee",
        note: "\u652F\u6301\u4E0A\u4E0B\u6587\u7F13\u5B58;\u5B98\u65B9\u5B9A\u4EF7\u9875\u672A\u5355\u5217\u5199\u5165\u4EF7\u3002"
      }
    },
    scores: {},
    scenes: ["\u6279\u91CF\u5904\u7406", "\u4E2D\u6587\u5199\u4F5C", "\u56FE\u7247\u7406\u89E3"],
    badges: ["\u6781\u7701"],
    summary: "\u51E0\u6BDB\u94B1\u767E\u4E07 Token \u8FD8\u5E26\u591A\u6A21\u6001\uFF0C\u6279\u91CF\u751F\u6210\u4E0E\u4E2D\u6587\u5199\u4F5C\u6781\u4F73\uFF1B\u8D85\u590D\u6742\u903B\u8F91\u5076\u6709\u5E7B\u89C9\u3002",
    highlights: ["\u8F93\u5165 \xA50.8 / \u8F93\u51FA \xA52.7", "\u767E\u4E07 token \u4E0A\u4E0B\u6587", "\u6279\u91CF\u8C03\u7528\u53E6\u6709\u4E94\u6298"],
    caveats: [
      "\u6240\u5217\u4E3A\u520A\u4F8B\u4EF7,\u63A7\u5236\u53F0\u53EF\u80FD\u53E6\u6709\u4F18\u60E0;\u4EF7\u683C\u5206\u5730\u57DF\u3002",
      "Artificial Analysis \u699C\u4E0A\u6709\u4E00\u4E2A\u540D\u4E3A Qwen3.8-Flash-Next \u7684\u6761\u76EE,\u4E0E\u672C\u6761\u4E0D\u662F\u540C\u4E00\u4E2A\u6A21\u578B,\u672C\u7AD9\u6CA1\u6709\u628A\u5B83\u7684\u5206\u6570\u5957\u7528\u8FC7\u6765\u3002"
    ],
    sources: [source("\u963F\u91CC\u4E91\u767E\u70BC\u5B9A\u4EF7\u9875", "https://help.aliyun.com/zh/model-studio/model-pricing")],
    updatedAt: CHECKED_AT
  },
  // --- 月之暗面 Kimi ------------------------------------------------------
  {
    slug: "kimi-k3",
    name: "Kimi K3",
    vendor: "moonshot",
    apiName: "kimi-k3",
    reasoning: true,
    modalities: ["text"],
    contextWindow: 1048576,
    maxOutputTokens: 131072,
    price: { currency: "CNY", input: 20, output: 100, cacheRead: 2 },
    scores: { overall: 60 },
    benchmarkVariant: "max",
    perf: { tps: 40, ttft: 7.5 },
    scenes: ["\u590D\u6742\u63A8\u7406", "\u957F\u6587\u6863", "\u4E2D\u6587\u5199\u4F5C"],
    summary: "\u957F\u6587\u6863\u5206\u6790\u4E0E\u8D85\u957F\u4E0A\u4E0B\u6587\u7406\u89E3\u80FD\u529B\u51FA\u4F17\uFF0C\u4E2D\u6587\u903B\u8F91\u4E25\u5BC6\uFF1B\u8F93\u51FA\u5355\u4EF7\u504F\u8D35\u5EFA\u8BAE\u642D\u914D\u7F13\u5B58\u3002",
    highlights: ["\u7EFC\u5408\u5206 60", "104 \u4E07 token \u7CBE\u786E\u4E0A\u4E0B\u6587", "\u81EA\u52A8\u4E0A\u4E0B\u6587\u7F13\u5B58"],
    caveats: [
      "\u8F93\u51FA \xA5100/\u767E\u4E07 token,\u8F93\u51FA\u91CD\u7684\u4EFB\u52A1\u6210\u672C\u4F1A\u8FC5\u901F\u4E0A\u53BB\u3002",
      "\u5B98\u65B9\u5E73\u53F0\u57DF\u540D\u5DF2\u4ECE platform.moonshot.cn \u8FC1\u5230 platform.kimi.com\u3002",
      "\u5B9A\u4EF7\u9875\u672A\u5217\u51FA\u8F93\u5165\u6A21\u6001\u4E0E\u6700\u5927\u8F93\u51FA\u4E0A\u9650,\u672C\u7AD9\u7684\u6A21\u6001\u4E0E\u6700\u5927\u8F93\u51FA\u53D6\u81EA\u699C\u5355\u4E0E\u6587\u6863,\u53EF\u80FD\u4E0D\u5B8C\u6574\u3002"
    ],
    sources: [source("Kimi \u5B98\u65B9\u5B9A\u4EF7\u9875", "https://platform.kimi.com/docs/pricing/chat-k3"), AA],
    updatedAt: CHECKED_AT
  },
  // --- 智谱 GLM -----------------------------------------------------------
  {
    slug: "glm-5-3",
    name: "GLM-5.3",
    vendor: "zhipu",
    apiName: "glm-5.3",
    reasoning: true,
    modalities: ["text"],
    contextWindow: 1e6,
    maxOutputTokens: 131072,
    price: { currency: "CNY", input: 8, output: 28, cacheRead: 2 },
    billing: {
      cache: {
        model: "hourly-storage",
        note: "\u7F13\u5B58\u5B58\u50A8\u5F53\u524D\u6807\u6CE8\u300C\u9650\u65F6\u514D\u8D39\u300D,\u8BE5\u4F18\u60E0\u7ED3\u675F\u540E\u4F1A\u591A\u51FA\u4E00\u7B14\u6309\u65F6\u957F\u7684\u5F00\u9500\u3002"
      }
    },
    scores: { overall: 60 },
    benchmarkVariant: "max",
    perf: { tps: 84, ttft: 1.57 },
    scenes: ["\u590D\u6742\u63A8\u7406", "\u4E2D\u6587\u5199\u4F5C", "\u5199\u4EE3\u7801"],
    badges: ["\u56FD\u4EA7\u6027\u4EF7\u6BD4"],
    summary: "\u667A\u8C31\u9AD8\u6027\u4EF7\u6BD4\u63A8\u7406\u65D7\u8230\uFF0C\u9996\u5B57\u54CD\u5E94\u6781\u5FEB\uFF1B\u4EE3\u7801\u751F\u6210\u624E\u5B9E\uFF0C\u5355\u4EF7\u4EC5\u4E3A\u540C\u6863\u4F4D\u7ADE\u54C1\u56DB\u6210\u3002",
    highlights: ["\u7EFC\u5408\u5206 60", "\u8F93\u5165 \xA58 / \u8F93\u51FA \xA528", "\u9996\u5B57\u5EF6\u8FDF 1.57 \u79D2,\u8F93\u51FA 84 tokens/s"],
    caveats: [
      "\u59CB\u7EC8\u5F00\u542F\u601D\u8003,\u5206 low / high / max \u4E09\u6863,\u672C\u7AD9\u5206\u6570\u53D6 max \u6863\u3002",
      "\u4EC5\u652F\u6301\u6587\u672C\u6A21\u6001\u3002",
      "\u7F13\u5B58\u5B58\u50A8\u5F53\u524D\u6807\u6CE8\u300C\u9650\u65F6\u514D\u8D39\u300D,\u8BE5\u4F18\u60E0\u7ED3\u675F\u540E\u4F1A\u591A\u4E00\u7B14\u5F00\u9500\u3002"
    ],
    sources: [source("\u667A\u8C31\u5F00\u653E\u5E73\u53F0\u5B9A\u4EF7\u9875", "https://open.bigmodel.cn/pricing"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "glm-5-3-flash",
    name: "GLM-5.3-Flash",
    vendor: "zhipu",
    modalities: ["text", "image", "video"],
    contextWindow: 1e6,
    price: { currency: "CNY", input: 0.8, output: 2.8, cacheRead: 0.23 },
    billing: {
      promo: {
        kind: "temporary-lower",
        discounted: { input: 0.4, output: 1.4, cacheRead: 0.115 },
        note: "\u5B9A\u4EF7\u9875\u5F53\u524D\u6709\u300C\u9650\u65F6\u4E24\u5468\u4E94\u6298\u300D,\u672C\u7AD9\u5217\u7684\u662F\u539F\u4EF7\u3002\u6309\u539F\u4EF7\u505A\u4F30\u7B97\u66F4\u7A33\u59A5\u3002"
      },
      cache: {
        model: "hourly-storage",
        note: "\u7F13\u5B58\u5B58\u50A8\u5F53\u524D\u6807\u6CE8\u300C\u9650\u65F6\u514D\u8D39\u300D\u3002"
      }
    },
    scores: { overall: 57 },
    perf: { tps: 50, ttft: 1.47 },
    scenes: ["\u6279\u91CF\u5904\u7406", "\u4E2D\u6587\u5199\u4F5C", "\u56FE\u7247\u7406\u89E3"],
    badges: ["\u6027\u4EF7\u6BD4\u4E4B\u738B"],
    summary: "\u767D\u83DC\u4EF7\u5374\u6709\u63A5\u8FD1\u65D7\u8230\u7684\u80FD\u529B\u8868\u73B0\uFF0C\u65E5\u5E38\u5199\u5C0F\u529F\u80FD\u6781\u5EA6\u5212\u7B97\uFF1B\u8C03\u7528\u540D\u4E0E\u89C4\u683C\u9700\u7559\u5FC3\u6838\u5BF9\u3002",
    highlights: ["\u7EFC\u5408\u5206 57,\u63A5\u8FD1\u65D7\u8230\u6C34\u5E73", "\u8F93\u5165 \xA50.8 / \u8F93\u51FA \xA52.8", "\u9996\u5B57\u5EF6\u8FDF 1.47 \u79D2,\u672C\u7AD9\u6700\u4F4E"],
    caveats: [
      "\u672C\u7AD9\u5217\u7684\u662F\u539F\u4EF7\u3002\u5B9A\u4EF7\u9875\u5F53\u524D\u6709\u300C\u9650\u65F6\u4E24\u5468\u4E94\u6298\u300D,\u6298\u540E\u4E3A\u8F93\u5165 \xA50.4 / \u8F93\u51FA \xA51.4\u3002",
      "\u8BE5\u6A21\u578B\u672A\u51FA\u73B0\u5728\u667A\u8C31\u6587\u6863\u7684\u6A21\u578B\u603B\u89C8\u8868\u4E2D,API \u8C03\u7528\u540D\u3001\u6700\u5927\u8F93\u51FA\u3001\u662F\u5426\u63A8\u7406\u6A21\u578B\u5747\u65E0\u6CD5\u4ECE\u5B98\u65B9\u9875\u9762\u6838\u5B9E,\u672C\u7AD9\u7559\u7A7A\u3002"
    ],
    sources: [source("\u667A\u8C31\u5F00\u653E\u5E73\u53F0\u5B9A\u4EF7\u9875", "https://open.bigmodel.cn/pricing"), AA],
    updatedAt: CHECKED_AT
  },
  {
    slug: "glm-4-7-flash",
    name: "GLM-4.7-Flash",
    vendor: "zhipu",
    apiName: "glm-4.7-flash",
    reasoning: true,
    modalities: ["text"],
    contextWindow: 2e5,
    maxOutputTokens: 131072,
    price: { currency: "CNY", input: 0, output: 0, cacheRead: 0 },
    isFree: true,
    scores: {},
    scenes: ["\u6279\u91CF\u5904\u7406", "\u65E5\u5E38\u95EE\u7B54"],
    badges: ["\u514D\u8D39"],
    summary: "\u5B98\u65B9\u5168\u514D\u8D39\u826F\u5FC3\u6A21\u578B\uFF0C\u8DD1\u539F\u578B\u9A8C\u8BC1\u3001\u5FEB\u901F\u6253\u6869\u4E0E\u8F7B\u91CF\u5DE5\u5177\u94FE\u96F6\u6210\u672C\u9996\u9009\u3002",
    highlights: ["\u5B98\u65B9\u6807\u6CE8\u514D\u8D39", "20 \u4E07 token \u4E0A\u4E0B\u6587", "\u6700\u5927\u8F93\u51FA 128K"],
    caveats: [
      "\u514D\u8D39\u7B56\u7565\u968F\u65F6\u53EF\u80FD\u8C03\u6574,\u4E0D\u5B9C\u4F5C\u4E3A\u751F\u4EA7\u73AF\u5883\u7684\u6210\u672C\u5047\u8BBE\u3002",
      "Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u91CC\u6CA1\u6709\u8FD9\u4E2A\u6A21\u578B,\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u7EFC\u5408\u5206\u3002"
    ],
    sources: [source("\u667A\u8C31\u5F00\u653E\u5E73\u53F0\u5B9A\u4EF7\u9875", "https://open.bigmodel.cn/pricing")],
    updatedAt: CHECKED_AT
  },
  // --- 字节豆包 -----------------------------------------------------------
  {
    slug: "doubao-seed-2-0-mini",
    name: "Doubao-Seed-2.0-mini",
    vendor: "doubao",
    apiName: "doubao-seed-2-0-mini-260428",
    reasoning: true,
    modalities: ["text", "image", "video", "audio"],
    contextWindow: 262144,
    maxOutputTokens: 131072,
    price: { currency: "CNY", input: 0.2, output: 2, cacheRead: 0.04 },
    billing: {
      tiers: [
        { upToInputTokens: 32e3, input: 0.2, output: 2, cacheRead: 0.04 },
        { upToInputTokens: 128e3, input: 0.4, output: 4, cacheRead: 0.08 },
        { upToInputTokens: null, input: 0.8, output: 8, cacheRead: 0.16 }
      ],
      batchMultiplier: 0.5,
      cache: {
        model: "hourly-storage",
        storagePerMTokHour: 0.017,
        note: "\u7F13\u5B58\u6309\u5B58\u50A8\u65F6\u957F\u8BA1\u8D39\u3002"
      },
      modalitySurcharges: [
        { modality: "audio", input: 3, cacheRead: 0.6, note: "\u97F3\u9891\u8F93\u5165\u5728\u6700\u77ED\u6863\u5373\u4E3A \xA53/\u767E\u4E07 token,\u8FDC\u9AD8\u4E8E\u6587\u672C\u3002" }
      ]
    },
    scores: {},
    scenes: ["\u6279\u91CF\u5904\u7406", "\u65E5\u5E38\u95EE\u7B54", "\u56FE\u7247\u7406\u89E3"],
    badges: ["\u6781\u7701"],
    summary: "\u5B57\u8282\u751F\u6001\u591A\u6A21\u6001\u5C0F\u94A2\u70AE\uFF0C\u77ED\u6587\u672C\u6781\u4FBF\u5B9C\uFF1B\u957F\u8F93\u5165\u8DE8\u9636\u68AF\u4F1A\u8DF3\u4EF7\uFF0C\u6CE8\u610F\u5206\u6863\u63A7\u5236\u3002",
    highlights: ["\u8F93\u5165 \xA50.2 / \u8F93\u51FA \xA52(\u6700\u77ED\u6863)", "\u652F\u6301\u6587\u672C\u3001\u56FE\u7247\u3001\u89C6\u9891\u3001\u97F3\u9891\u8F93\u5165", "\u6279\u91CF\u63A8\u7406\u7EA6\u4E3A\u5E38\u89C4\u4EF7\u4E94\u6298"],
    caveats: [
      "\u9636\u68AF\u4EF7\u6309\u8F93\u5165\u957F\u5EA6:32K \u4EE5\u5185\u4E3A\u672C\u7AD9\u6240\u5217\u4EF7;32K\u2013128K \u7FFB\u500D;128K\u2013256K \u518D\u7FFB\u500D\u3002\u957F\u8F93\u5165\u573A\u666F\u5B9E\u9645\u6210\u672C\u8981\u6309\u6863\u6362\u7B97\u3002",
      "\u97F3\u9891\u8F93\u5165\u5355\u72EC\u8BA1\u4EF7,\u6700\u77ED\u6863\u4E3A \xA53/\u767E\u4E07 token,\u8FDC\u9AD8\u4E8E\u6587\u672C\u3002",
      "Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u91CC\u6CA1\u6709\u8FD9\u4E2A\u6A21\u578B,\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u7EFC\u5408\u5206\u3002"
    ],
    sources: [source("\u706B\u5C71\u65B9\u821F\u6A21\u578B\u4EF7\u683C\u9875", "https://www.volcengine.com/docs/82379/1544106")],
    updatedAt: CHECKED_AT
  },
  // --- MiniMax ------------------------------------------------------------
  {
    slug: "minimax-m3",
    name: "MiniMax-M3",
    vendor: "minimax",
    apiName: "MiniMax-M3",
    reasoning: true,
    modalities: ["text", "image", "video"],
    contextWindow: 1e6,
    price: { currency: "CNY", input: 2.1, output: 8.4, cacheRead: 0.42 },
    billing: {
      tiers: [
        { upToInputTokens: 512e3, input: 2.1, output: 8.4, cacheRead: 0.42 },
        { upToInputTokens: null, input: 4.2, output: 16.8, cacheRead: 0.84 }
      ],
      cache: {
        model: "write-fee",
        note: "\u53E6\u6709\u300C\u4F18\u5148\u300D\u670D\u52A1\u6863,\u4EF7\u683C\u4E3A\u6807\u51C6\u6863\u7684 1.5 \u500D;\u672C\u7AD9\u6309\u6807\u51C6\u6863\u8BA1\u3002"
      }
    },
    scores: {},
    scenes: ["\u957F\u6587\u6863", "\u65E5\u5E38\u95EE\u7B54", "\u56FE\u7247\u7406\u89E3"],
    summary: "512K \u4EE5\u5185\u957F\u671F\u4E94\u6298\uFF0C\u957F\u6587\u672C\u7406\u89E3\u4E0E\u6D77\u91CF\u8D44\u6599\u5F52\u7EB3\u795E\u5668\uFF1B\u6DF1\u5EA6\u4EE3\u7801\u91CD\u6784\u80FD\u529B\u4E2D\u89C4\u4E2D\u77E9\u3002",
    highlights: ["\u8F93\u5165 \xA52.1 / \u8F93\u51FA \xA58.4(512K \u4EE5\u5185)", "\u767E\u4E07 token \u4E0A\u4E0B\u6587", "\u652F\u6301\u56FE\u7247\u4E0E\u89C6\u9891\u8F93\u5165"],
    caveats: [
      "\u9636\u68AF\u4EF7:\u672C\u7AD9\u5217\u7684\u662F 512K \u4EE5\u5185\u7684\u5E38\u7528\u6863(\u5B98\u65B9\u6807\u6CE8\u300C\u6C38\u4E45\u4E94\u6298\u300D,\u539F\u4EF7 \xA54.2 / \xA516.8)\u3002\u8F93\u5165\u8D85\u8FC7 512K \u540E\u6309\u539F\u4EF7\u8BA1\u8D39,\u5373\u7FFB\u500D\u3002",
      "\u53E6\u6709\u300C\u4F18\u5148\u300D\u670D\u52A1\u6863,\u4EF7\u683C\u4E3A\u6807\u51C6\u6863\u7684 1.5 \u500D\u3002",
      "\u5B98\u65B9\u6587\u6863\u672A\u7ED9\u51FA\u6700\u5927\u8F93\u51FA\u4E0A\u9650\u3002",
      "Artificial Analysis \u5F53\u524D\u699C\u5355\u524D 25 \u540D\u91CC\u6CA1\u6709\u8FD9\u4E2A\u6A21\u578B,\u672C\u7AD9\u6CA1\u6709\u5B83\u7684\u7EFC\u5408\u5206\u3002"
    ],
    sources: [source("MiniMax \u5B98\u65B9\u5B9A\u4EF7\u9875", "https://platform.minimaxi.com/docs/guides/pricing-paygo")],
    updatedAt: CHECKED_AT
  }
];

export { hoxiModels as h };
