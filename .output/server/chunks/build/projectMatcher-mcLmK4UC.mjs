import { b as buildBlogOgCoverUrl } from './blogOgCard-Dd_qPNIc.mjs';

const SEED_PROJECT_RUN_MANIFESTS = {
  "qingpu": {
    mode: "workflow_playground",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "AINode \u8DE8\u5883\u591A\u8BED\u79CD\u5546\u54C1\u5361\u6D17\u7A3F\u4E0E\u4E3B\u56FE\u573A\u666F\u5DE5\u4F5C\u6D41\u5DF2\u6838\u9A8C",
    ainodeModel: "deepseek-v3",
    estimatedPoints: 15,
    systemPrompt: [
      "\u4F60\u662F\u8F7B\u94FA AI\uFF08Qingpu AI\uFF09\u8DE8\u5883\u7535\u5546\u591A\u8BED\u79CD\u5546\u54C1\u4E0A\u67B6\u4E13\u5BB6\u3002",
      "\u8BF7\u6839\u636E\u7528\u6237\u63D0\u4F9B\u7684 1688/\u56FD\u5185\u8D27\u6E90\u5356\u70B9\u4E0E\u76EE\u6807\u8DE8\u5883\u5E73\u53F0\uFF08\u5982 Ozon \u4FC4\u8BED\u3001Wildberries\u3001Amazon \u82F1\u8BED\u6216\u4E1C\u5357\u4E9A\u7AD9\u70B9\uFF09\uFF0C\u8F93\u51FA\u7ED3\u6784\u5316\u4E0A\u67B6\u65B9\u6848\uFF1A",
      "1. \u3010\u672C\u571F\u5316\u9AD8\u641C\u7D22\u91CF SEO \u6807\u9898\u3011\uFF08\u53CC\u8BED\u5BF9\u7167\uFF0C\u57CB\u5165\u6838\u5FC3\u54C1\u7C7B\u70ED\u8BCD\uFF09\uFF1B",
      "2. \u30105 \u6761\u75DB\u70B9\u8F6C\u5316\u5356\u70B9 Bullet Points\u3011\uFF08\u7B26\u5408\u5F53\u5730\u4E70\u5BB6\u9605\u8BFB\u4E60\u60EF\uFF0C\u62D2\u7EDD\u673A\u7FFB\u8154\uFF09\uFF1B",
      "3. \u30103 \u5F20\u9AD8\u70B9\u51FB\u4E3B\u56FE/\u573A\u666F\u56FE AI \u91CD\u7ED8\u63D0\u793A\u8BCD\uFF08Flux/Midjourney \u82F1\u6587 Prompt\uFF09\u3011\uFF1B",
      "4. \u3010\u5EFA\u8BAE\u5B9A\u4EF7\u4E0E\u6BDB\u5229\u6D4B\u7B97\u533A\u95F4\u3011\u3002"
    ].join("\n"),
    inputs: [
      {
        key: "productInfo",
        label: "\u8D27\u6E90\u5546\u54C1\u540D\u79F0\u4E0E\u6838\u5FC3\u5356\u70B9",
        labelEn: "Source Product & Key Selling Points",
        type: "textarea",
        placeholder: "\u7C98\u8D34 1688 \u5546\u54C1\u6807\u9898\u3001\u6750\u8D28\u53C2\u6570\u6216\u6838\u5FC3\u75DB\u70B9\u2026",
        placeholderEn: "Paste wholesale product specs, materials, and features\u2026",
        sampleValue: "\u4FBF\u643A\u78C1\u5438\u5FEB\u5145\u6570\u636E\u7EBF 240W \u6DB2\u6001\u7845\u80F6\u9632\u7F20\u7ED5\uFF0C\u652F\u6301\u7B14\u8BB0\u672C\u4E0E\u624B\u673A\u5FEB\u5145\uFF0C\u51FA\u5382\u62FF\u8D27\u4EF7 9.5 \u5143",
        sampleValueEn: "240W magnetic braided silicone fast-charging USB-C cable, tangle-free, $1.35 factory cost",
        required: true
      },
      {
        key: "targetMarket",
        label: "\u76EE\u6807\u8DE8\u5883\u5E73\u53F0\u4E0E\u8BED\u79CD",
        labelEn: "Target Marketplace & Language",
        type: "text",
        placeholder: "\u4F8B\u5982\uFF1AOzon \u4FC4\u8BED\u533A / Amazon \u5317\u7F8E / TikTok \u7F8E\u533A",
        placeholderEn: "e.g. Ozon Russia / Amazon US / Shopee Japan",
        sampleValue: "Ozon \u4FC4\u7F57\u65AF\u7AD9\uFF08\u4FC4\u8BED + \u4E2D\u6587\u5BF9\u7167\uFF09",
        sampleValueEn: "Amazon US & Germany (EN + DE)",
        required: true
      }
    ],
    monetizeEngine: "shopark",
    monetizePrompt: "\u5F00\u901A\u9762\u5411\u8DE8\u5883\u5356\u5BB6\u7684\u591A\u8BED\u79CD AI \u9009\u54C1\u4E0A\u67B6\u5DE5\u5177\u4E0E\u914D\u5957\u54C1\u724C\u72EC\u7ACB\u7AD9"
  },
  "shopark": {
    mode: "shopark_launchpad",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "\u76F4\u8FDE ShopArk \u591A\u8BED\u79CD\u5916\u8D38 B2B \u8BE2\u76D8\u4E0E\u8DE8\u5883 DTC \u72EC\u7ACB\u7AD9\u5F00\u5E97\u5411\u5BFC",
    launchpadUrl: "https://myshopark.com",
    themePreset: "bluex",
    blueprintPrompt: "\u5F00\u8BBE\u81EA\u5E26 11 \u56FD\u8BED\u8A00 Google SEO\u3001WhatsApp \u5B9E\u65F6\u8DDF\u5355\u4E0E B2B \u9636\u68AF\u6279\u53D1\u8BE2\u76D8\u7684\u5916\u8D38\u72EC\u7ACB\u7AD9"
  },
  "ainode": {
    mode: "gopanel_app",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "GoPanel \u5BB9\u5668\u5E95\u5EA7\u4E00\u952E\u62C9\u8D77\u517C\u5BB9 OpenAI/Anthropic \u7684\u7B97\u529B\u5206\u53D1\u7F51\u5173\u5E76\u76F4\u8FDE\u4E0A\u6E38\u4E13\u7EBF",
    gopanelAppKey: "new-api",
    dockerImage: "calciumion/new-api:latest",
    defaultPort: 3e3,
    injectAinodeEnv: {
      baseUrlKey: "UPSTREAM_OPENAI_BASE_URL",
      apiKeyKey: "UPSTREAM_API_KEY",
      defaultModel: "deepseek-v3"
    }
  },
  "photoroom-ecom": {
    mode: "workflow_playground",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "\u8DE8\u5883\u5546\u54C1\u56FE\u573A\u666F\u91CD\u7ED8\u914D\u65B9\u4E0E\u793E\u5A92\u5BF9\u6BD4\u5F15\u6D41\u811A\u672C\u5DE5\u4F5C\u6D41\u5DF2\u6838\u9A8C",
    ainodeModel: "deepseek-v3",
    estimatedPoints: 12,
    systemPrompt: [
      "\u4F60\u662F\u8DE8\u5883\u7535\u5546\u89C6\u89C9\u5FAE SaaS \u5BFC\u6F14\uFF08\u5BF9\u6807 PhotoRoom / Pebblely \u9AD8\u8F6C\u5316\u6A21\u677F\u5E93\uFF09\u3002",
      "\u8BF7\u6839\u636E\u7528\u6237\u7684\u5546\u54C1\u54C1\u7C7B\u4E0E\u76EE\u6807\u9500\u552E\u56FD\u5BB6\uFF0C\u76F4\u63A5\u8F93\u51FA\u53EF\u6295\u5165\u751F\u4EA7\u7684\u89C6\u89C9\u751F\u6210\u65B9\u6848\uFF1A",
      "1. \u30103 \u5957\u9AD8\u70B9\u51FB\u7387\u672C\u571F\u751F\u6D3B\u573A\u666F\u4E0E\u5E03\u5149\u9884\u8BBE\u3011\uFF08\u542B Flux.1 / SDXL \u53EF\u76F4\u63A5\u590D\u5236\u7684\u82F1\u6587\u6B63\u53CD\u5411 Prompt\uFF09\uFF1B",
      "2. \u3010\u672C\u571F\u6A21\u7279\u7279\u5F81\u4E0E\u7A7F\u642D\u59FF\u6001\u6307\u4EE4\u3011\uFF08\u907F\u514D\u8DE8\u6587\u5316\u8FDD\u548C\u611F\uFF09\uFF1B",
      "3. \u3010TikTok / \u5C0F\u7EA2\u4E66 15 \u79D2\u524D\u540E\u5BF9\u6BD4\u5F15\u6D41\u77ED\u89C6\u9891\u5206\u955C\u3011\uFF08\u7528\u6765\u4F4E\u6210\u672C\u83B7\u5BA2\u5356\u8BE5\u89C6\u89C9\u5FAE SaaS\uFF09\u3002"
    ].join("\n"),
    inputs: [
      {
        key: "skuCategory",
        label: "\u62CD\u6444\u5546\u54C1\u54C1\u7C7B\u4E0E\u5916\u89C2",
        labelEn: "Product Category & Appearance",
        type: "text",
        sampleValue: "925 \u7EAF\u94F6\u6781\u7B80\u83AB\u6851\u77F3\u9501\u9AA8\u9879\u94FE\uFF08\u624B\u673A\u767D\u5E95\u5B9E\u62CD\u539F\u56FE\uFF09",
        sampleValueEn: "Minimalist 925 sterling silver collarbone necklace on white background",
        required: true
      },
      {
        key: "buyerRegion",
        label: "\u76EE\u6807\u4E70\u5BB6\u5E02\u573A",
        labelEn: "Target Buyer Market",
        type: "text",
        sampleValue: "\u5317\u7F8E\u4E0E\u897F\u6B27\u72EC\u7ACB\u7AD9\u5973\u6027\u5BA2\u7FA4\uFF08\u504F\u81EA\u7136\u9633\u5149\u6CD5\u5F0F\u751F\u6D3B\u611F\uFF09",
        sampleValueEn: "North America & Western Europe DTC buyers (warm natural editorial style)",
        required: true
      }
    ],
    monetizeEngine: "apay",
    monetizePrompt: "\u56F4\u7ED5\u300CAI \u8DE8\u5883\u5546\u54C1\u56FE\u6362\u5E95\u4E0E\u865A\u62DF\u6A21\u7279\u8BD5\u7A7F\u300D\u751F\u6210\u6309\u70B9\u6570\u5305\uFF08$19/$49\uFF09\u81EA\u52A8\u6536\u6B3E\u7684\u6570\u5B57 SaaS \u7AD9\u70B9"
  },
  "rfq-trade-agent": {
    mode: "workflow_playground",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "\u5916\u8D38 B2B \u4E70\u5BB6\u7834\u51B0\u5F00\u53D1\u4FE1\u4E0E WhatsApp \u62A5\u4EF7\u8DDF\u5355\u5DE5\u4F5C\u6D41\u5DF2\u6838\u9A8C",
    ainodeModel: "deepseek-v3",
    estimatedPoints: 15,
    systemPrompt: [
      "\u4F60\u662F\u62E5\u6709 12 \u5E74\u5B9E\u6218\u7ECF\u9A8C\u7684\u5916\u8D38 B2B \u9500\u51A0 Agent\u3002",
      "\u8BF7\u7ED3\u5408\u76EE\u6807\u6D77\u5916\u4E70\u5BB6\u7684\u4E1A\u52A1\u80CC\u666F\u4E0E\u6211\u65B9\u4F9B\u5E94\u94FE\u4F18\u52BF\uFF0C\u62D2\u7EDD\u7FA4\u53D1\u5783\u573E\u4FE1\u53E3\u543B\uFF0C\u8F93\u51FA\uFF1A",
      "1. \u3010\u9AD8\u6253\u5F00\u7387\u90AE\u4EF6\u6807\u9898\uFF083 \u4E2A\u77ED\u6807\u9898\u5907\u9009\uFF0C\u5C0F\u4E8E 7 \u4E2A\u5355\u8BCD\uFF09\u3011\uFF1B",
      "2. \u3010\u5343\u4EBA\u5343\u9762\u7834\u51B0\u5F00\u53D1\u4FE1\u6B63\u6587\u3011\uFF08\u76EE\u6807\u8BED\u79CD + \u4E2D\u6587\u91CA\u4E49\uFF0C\u63A7\u5236\u5728 110 \u8BCD\u5185\uFF0C\u76F4\u51FB\u5229\u6DA6\u7A7A\u95F4\u4E0E\u6837\u54C1\u9A8C\u8BC1\uFF09\uFF1B",
      "3. \u3010WhatsApp \u9996\u6761\u7834\u51B0\u77ED\u6D88\u606F + FOB/MOQ \u9636\u68AF\u62A5\u4EF7\u8DDF\u8FDB\u8BDD\u672F\u3011\u3002"
    ].join("\n"),
    inputs: [
      {
        key: "buyerProfile",
        label: "\u76EE\u6807\u6D77\u5916\u4E70\u5BB6\u7B80\u4ECB\u6216\u4E3B\u8425\u4EA7\u54C1",
        labelEn: "Target Overseas Buyer Profile",
        type: "textarea",
        sampleValue: "\u5FB7\u56FD\u6155\u5C3C\u9ED1\u6237\u5916\u9732\u8425\u88C5\u5907\u8FDE\u9501\u6279\u53D1\u5546\uFF0C\u5B98\u7F51\u4E3B\u63A8\u8F7B\u91CF\u5316\u6298\u53E0\u684C\u6905\uFF0C\u96F6\u552E\u4EF7 \u20AC89-\u20AC149",
        sampleValueEn: "Munich outdoor camping gear distributor selling lightweight folding chairs at \u20AC89\u2013\u20AC149",
        required: true
      },
      {
        key: "supplierEdge",
        label: "\u6211\u65B9\u5DE5\u5382\u4F18\u52BF\u4E0E\u8D77\u8BA2\u91CF (MOQ)",
        labelEn: "Factory Advantage & MOQ",
        type: "text",
        sampleValue: "7075 \u822A\u7A7A\u94DD\u6E90\u5934\u5DE5\u5382\uFF0C\u652F\u6301\u6FC0\u5149\u8D34\u724C\u5B9A\u5236\uFF0CMOQ 100 \u4EF6\uFF0CFOB \u5B81\u6CE2 $16.8\uFF0C7 \u5929\u6253\u6837",
        sampleValueEn: "7075 aircraft aluminum OEM factory, custom laser logo, MOQ 100 pcs, FOB $16.8, 7-day sample",
        required: true
      }
    ],
    monetizeEngine: "shopark",
    monetizePrompt: "\u642D\u5EFA\u81EA\u5E26 WhatsApp \u62A5\u4EF7\u52A9\u624B\u4E0E\u591A\u8BED\u79CD\u4EA7\u54C1\u76EE\u5F55\u7684\u5916\u8D38 B2B \u5DE5\u5382\u8BE2\u76D8\u72EC\u7ACB\u7AD9"
  },
  "hoxi-ai": {
    mode: "apay_launchpad",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "\u57FA\u4E8E APay \u5546\u4E1A\u6BCD\u4F53\u4E00\u952E\u5F00\u901A\u5782\u76F4 AI \u5DE5\u5177\u8BC4\u6D4B\u4E0E\u4F1A\u5458\u79EF\u5206\u6536\u6B3E\u7AD9",
    themePreset: "tech-portal",
    blueprintPrompt: "\u642D\u5EFA\u5782\u76F4\u8D5B\u9053 AI \u5DE5\u5177\u5B9E\u6D4B\u5BF9\u6BD4\u95E8\u6237\uFF0C\u5185\u7F6E\u4F1A\u5458\u8BA2\u9605\u3001\u7B97\u529B\u52A0\u6CB9\u5305\u4E0E\u81EA\u52A8\u53D1\u5361\u53D8\u73B0\u95ED\u73AF"
  },
  "kalodata-tiktok": {
    mode: "workflow_playground",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "TikTok Shop \u9EC4\u91D1\u524D 3 \u79D2\u94A9\u5B50\u62C6\u89E3\u4E0E\u591A\u8BED\u79CD\u5E26\u8D27\u811A\u672C\u514B\u9686\u5DE5\u4F5C\u6D41\u5DF2\u6838\u9A8C",
    ainodeModel: "deepseek-v3",
    estimatedPoints: 12,
    systemPrompt: [
      "\u4F60\u662F TikTok Shop \u767E\u4E07\u7F8E\u91D1\u6295\u6D41\u7F16\u5BFC\u3002",
      "\u8BF7\u628A\u7528\u6237\u63D0\u4F9B\u7684\u7206\u6B3E\u5546\u54C1\u539F\u7247\u5356\u70B9\u62C6\u89E3\u5E76\u88C2\u53D8\u4E3A 3 \u5957\u53EF\u76F4\u63A5\u4EA4\u7ED9 TTS \u914D\u97F3\u5408\u6210\u7684\u672C\u571F\u5316\u5E26\u8D27\u77ED\u89C6\u9891\u811A\u672C\uFF1A",
      "- \u4E25\u683C\u62C6\u51FA\u30100-3s \u9EC4\u91D1\u89C6\u89C9/\u53CD\u5E38\u8BC6\u94A9\u5B50\u3011+\u30103-12s \u75DB\u70B9\u7279\u5199\u6F14\u793A\u3011+\u301012-22s \u4FE1\u4EFB\u80CC\u4E66\u4E0E\u4FC3\u5355 CTA\u3011\uFF1B",
      "- \u8F93\u51FA\u5730\u9053\u53E3\u8BED\u53F0\u8BCD\uFF08\u9644\u8BED\u901F\u505C\u987F\u6807\u8BB0\u4E0E\u753B\u9762\u5206\u955C\u63D0\u793A\uFF09\u3002"
    ].join("\n"),
    inputs: [
      {
        key: "viralHookInput",
        label: "\u7206\u6B3E\u5546\u54C1\u6838\u5FC3\u5356\u70B9\u6216\u539F\u89C6\u9891\u53F0\u8BCD",
        labelEn: "Viral Product Pitch or Raw Transcript",
        type: "textarea",
        sampleValue: "\u8F66\u8F7D\u65E0\u7EBF\u5438\u5C18\u5668\uFF1A\u4E00\u5438\u5C31\u5E72\u51C0\uFF0C\u786C\u5E01\u94A2\u73E0\u90FD\u80FD\u5438\u8D77\u6765\uFF0CUSB \u968F\u8F66\u5145\u7535\uFF0C\u539F\u89C6\u9891\u9760\u62CD\u6E05\u7406\u5EA7\u6905\u7F1D\u9699\u85AF\u7247\u6E23\u7206\u5355 2 \u4E07\u4EF6",
        sampleValueEn: "Cordless mini car vacuum picking up coins and seat-gap crumbs in 3 seconds, 20k units sold",
        required: true
      },
      {
        key: "scriptLocale",
        label: "\u76EE\u6807\u5E26\u8D27\u5E02\u573A\u8BED\u79CD",
        labelEn: "Target Ad Script Language",
        type: "text",
        sampleValue: "\u7F8E\u533A\u5730\u9053\u82F1\u8BED\u53E3\u64AD\uFF08\u9644\u4E2D\u6587\u5BF9\u7167\uFF09",
        sampleValueEn: "US TikTok Shop native casual English",
        required: true
      }
    ],
    monetizeEngine: "apay",
    monetizePrompt: "\u751F\u6210\u9762\u5411 TikTok \u8DE8\u5883\u5356\u5BB6\u7684\u300C\u7206\u6B3E\u811A\u672C\u62C6\u89E3\u4E0E\u914D\u97F3\u70B9\u6570\u5305\u300D\u6708\u5EA6\u8BA2\u9605 SaaS \u6536\u6B3E\u7AD9"
  },
  "pdf-invoice-b2b": {
    mode: "workflow_playground",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "\u5916\u8D38\u591A\u8BED\u79CD\u5546\u4E1A\u53D1\u7968/\u88C5\u7BB1\u5355\u7ED3\u6784\u5316\u63D0\u53D6\u4E0E\u91D1\u989D\u4EA4\u53C9\u6838\u9A8C\u5DE5\u4F5C\u6D41\u5DF2\u6838\u9A8C",
    ainodeModel: "deepseek-v3",
    estimatedPoints: 15,
    systemPrompt: [
      "\u4F60\u662F\u56FD\u9645\u8D27\u4EE3\u4E0E\u6D77\u5173\u7533\u62A5\u5355\u8BC1\u5BA1\u6838 AI \u5F15\u64CE\u3002",
      "\u8BF7\u4ECE\u7528\u6237\u7C98\u8D34\u7684\u975E\u6807\u5546\u4E1A\u53D1\u7968\uFF08Commercial Invoice\uFF09\u6216\u88C5\u7BB1\u5355\uFF08Packing List\uFF09\u6742\u4E71\u6587\u672C\u4E2D\uFF1A",
      "1. \u63D0\u53D6\u6807\u51C6\u7ED3\u6784\u5316\u8868\u683C\uFF08\u54C1\u540D\u82F1\u6587/\u4E2D\u6587\u3001\u6750\u8D28\u7528\u9014\u5EFA\u8BAE\u3001\u6570\u91CF\u3001\u5355\u4EF7\u3001\u884C\u5C0F\u8BA1\u3001\u51C0\u91CD/\u6BDB\u91CD\u3001\u5EFA\u8BAE 6 \u4F4D HS \u7F16\u7801\u65B9\u5411\uFF09\uFF1B",
      "2. \u6267\u884C\u4E25\u683C\u7684\u3010\u6570\u5B66\u4EA4\u53C9\u6838\u9A8C\u3011\uFF1A\u9010\u884C\u8BA1\u7B97 `\u6570\u91CF \xD7 \u5355\u4EF7` \u5E76\u4E0E\u7968\u9762\u603B\u91D1\u989D\u6BD4\u5BF9\uFF0C\u660E\u786E\u6807\u51FA\u662F\u5426\u4E00\u81F4\u6216\u5B58\u5728\u5DEE\u989D\u98CE\u9669\uFF1B",
      "3. \u8F93\u51FA\u53EF\u76F4\u63A5\u5BFC\u5165 ERP \u7684\u6807\u51C6 JSON \u4EE3\u7801\u5757\u3002"
    ].join("\n"),
    inputs: [
      {
        key: "rawInvoiceText",
        label: "\u6742\u4E71\u53D1\u7968 / \u88C5\u7BB1\u5355\u539F\u59CB\u6587\u672C\u7247\u6BB5",
        labelEn: "Raw Invoice / Packing List Text",
        type: "textarea",
        sampleValue: [
          "INV NO: EX-2026-889  TERMS: FOB SHENZHEN  CURRENCY: USD",
          "1) Magnetic Type-C Cable 2M Black - 1,200 PCS @ $1.45/pc = $1,740.00 NW 48kg GW 52kg",
          "2) GaN Fast Charger 65W EU Plug - 500 PCS @ $5.80/pc = $2,900.00 NW 60kg GW 66kg",
          "DECLARED TOTAL AMOUNT: USD 4,650.00 (Please check discrepancy!)"
        ].join("\n"),
        sampleValueEn: [
          "INV NO: EX-2026-889  TERMS: FOB SHENZHEN  CURRENCY: USD",
          "1) Magnetic Type-C Cable 2M Black - 1,200 PCS @ $1.45/pc = $1,740.00 NW 48kg GW 52kg",
          "2) GaN Fast Charger 65W EU Plug - 500 PCS @ $5.80/pc = $2,900.00 NW 60kg GW 66kg",
          "DECLARED TOTAL AMOUNT: USD 4,650.00"
        ].join("\n"),
        required: true
      }
    ],
    monetizeEngine: "apay",
    monetizePrompt: "\u751F\u6210\u9762\u5411\u8D27\u4EE3\u4E0E\u5916\u8D38\u8D22\u52A1\u7684\u300CAI \u62A5\u5173\u5355\u4E0E\u53D1\u7968\u8F6C Excel\u300D\u6309\u9875\u6570\u5957\u9910\uFF08$39/$149/\u6708\uFF09\u5FAE SaaS \u7F51\u7AD9"
  },
  "hoxi-desktop": {
    mode: "guide_only",
    verified: true,
    verifiedAt: "2026-11-14",
    reason: "\u539F\u751F\u8DE8\u5E73\u53F0\u684C\u9762\u5DE5\u4F5C\u53F0\u5BA2\u6237\u7AEF\uFF0C\u8BF7\u76F4\u63A5\u524D\u5F80\u4E0B\u8F7D\u9875\u5B89\u88C5\u6216\u514B\u9686 GitHub \u5F00\u6E90\u4ED3\u5E93\u8FD0\u884C"
  },
  "video-dub-localization": {
    mode: "workflow_playground",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "\u51FA\u6D77\u77ED\u89C6\u9891\u7B49\u957F\u97F3\u8282\u53E3\u8BED\u5316\u53F0\u8BCD\u6539\u5199\u4E0E\u53CC\u8BED\u65F6\u95F4\u8F74\u5DE5\u4F5C\u6D41\u5DF2\u6838\u9A8C",
    ainodeModel: "deepseek-v3",
    estimatedPoints: 12,
    systemPrompt: [
      "\u4F60\u662F\u51FA\u6D77\u77ED\u5267\u4E0E\u4E9A\u9A6C\u900A\u4EA7\u54C1\u89C6\u9891\u672C\u571F\u5316\u914D\u97F3\u5BFC\u6F14\u3002",
      "\u8BF7\u5C06\u7528\u6237\u8F93\u5165\u7684\u4E2D\u6587\u539F\u7247\u53E3\u64AD\u6309\u300C\u7B49\u65F6\u957F\u97F3\u8282\u63A7\u5236\uFF08\u786E\u4FDD\u914D\u97F3\u8BED\u901F\u81EA\u7136\u5BF9\u9F50\u539F\u753B\u9762\u53E3\u578B\u65F6\u95F4\u8F74\uFF09\u300D\u91CD\u5199\u4E3A\u5730\u9053\u76EE\u6807\u8BED\u79CD\u53F0\u8BCD\uFF1A",
      "- \u4E25\u7981\u751F\u786C\u76F4\u8BD1\u6210\u8BED\u6216\u7F51\u7EDC\u6897\uFF0C\u5FC5\u987B\u66FF\u6362\u4E3A\u76EE\u6807\u56FD\u672C\u571F\u9AD8\u9891\u4FDA\u8BED\uFF1B",
      "- \u8F93\u51FA\u5E26 `[00:00 - 00:04]` \u65F6\u95F4\u8F74\u5BF9\u7167\u7684\u53CC\u8BED\u5B57\u5E55\u7A3F\u53CA\u60C5\u7EEA\u91CD\u97F3\u63D0\u793A\u3002"
    ].join("\n"),
    inputs: [
      {
        key: "sourceTranscript",
        label: "\u539F\u7247\u4E2D\u6587\u53F0\u8BCD\u6216\u4EA7\u54C1\u89E3\u8BF4\u8BCD",
        labelEn: "Original Script / Voiceover Lines",
        type: "textarea",
        sampleValue: "\u8FD8\u5728\u7528\u4F20\u7EDF\u62D6\u628A\u5F2F\u8170\u6D17\u534A\u5929\uFF1F\u770B\u597D\u4E86\uFF0C\u8FD9\u6B3E\u514D\u624B\u6D17\u9759\u7535\u9664\u5C18\u62D6\uFF0C\u4E00\u63A8\u4E00\u62C9\u6BDB\u53D1\u5168\u5438\u5149\uFF0C\u61D2\u4EBA\u6551\u661F\uFF01",
        sampleValueEn: "Still hurting your back wringing out dirty mops? Watch how this hands-free electrostatic mop traps pet hair in one swipe!",
        required: true
      },
      {
        key: "dubLanguages",
        label: "\u76EE\u6807\u914D\u97F3\u8BED\u79CD",
        labelEn: "Target Dubbing Languages",
        type: "text",
        sampleValue: "\u7F8E\u5F0F\u82F1\u8BED + \u65E5\u8BED + \u897F\u73ED\u7259\u8BED\uFF08\u62C9\u7F8E\u53E3\u8BED\uFF09",
        sampleValueEn: "US English + Japanese + Latin American Spanish",
        required: true
      }
    ],
    monetizeEngine: "apay",
    monetizePrompt: "\u751F\u6210\u6309\u5206\u949F\u5356\u914D\u97F3\u7FFB\u8BD1\u989D\u5EA6\u7684\u300CAI \u51FA\u6D77\u89C6\u9891\u591A\u8BED\u79CD\u914D\u97F3 SaaS\u300D\u81EA\u52A8\u6536\u6B3E\u7AD9\u70B9"
  },
  "apay": {
    mode: "apay_launchpad",
    verified: true,
    verifiedAt: "2026-11-14",
    verificationNote: "\u76F4\u8FDE APay \u591A\u4E3B\u9898\u5546\u4E1A\u5316\u5EFA\u7AD9\u6D41\u5F0F\u6C99\u76D2",
    themePreset: "saas-launchpad",
    blueprintPrompt: "\u4F7F\u7528 APay \u5546\u4E1A\u5E95\u5EA7\u5728 5 \u5206\u949F\u5185\u751F\u6210\u5E26\u4F1A\u5458\u8BA2\u9605\u3001\u7B97\u529B\u70B9\u6570\u5305\u4E0E\u81EA\u52A8\u53D1\u5361\u7684\u72EC\u7ACB\u6536\u6B3E\u7AD9"
  }
};
function safeParseObject(raw) {
  if (!raw) return null;
  if (typeof raw === "object" && !Array.isArray(raw)) return raw;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      return null;
    }
  }
  return null;
}
function normalizeProjectRunManifest(raw, context) {
  var _a, _b, _c, _d, _e;
  const idKey = String((context == null ? void 0 : context.slug) || (context == null ? void 0 : context.id) || "").trim().toLowerCase();
  const seedManifest = idKey ? SEED_PROJECT_RUN_MANIFESTS[idKey] : void 0;
  const obj = safeParseObject(raw);
  if (!obj) {
    if (seedManifest) return { ...seedManifest };
    return inferFallbackRunManifest(context);
  }
  const rawMode = String(obj.mode || "").trim();
  if (rawMode === "gopanel_app") {
    const gopanelAppKey = typeof obj.gopanelAppKey === "string" ? obj.gopanelAppKey.trim() : "";
    const dockerImage = typeof obj.dockerImage === "string" ? obj.dockerImage.trim() : "";
    const composeYaml = typeof obj.composeYaml === "string" ? obj.composeYaml.trim() : "";
    if (!gopanelAppKey && !dockerImage && !composeYaml) {
      return seedManifest ? { ...seedManifest } : inferFallbackRunManifest(context);
    }
    return {
      mode: "gopanel_app",
      verified: Boolean((_a = obj.verified) != null ? _a : true),
      verifiedAt: typeof obj.verifiedAt === "string" ? obj.verifiedAt : void 0,
      verificationNote: typeof obj.verificationNote === "string" ? obj.verificationNote : void 0,
      gopanelAppKey: gopanelAppKey || void 0,
      dockerImage: dockerImage || void 0,
      composeYaml: composeYaml || void 0,
      defaultPort: typeof obj.defaultPort === "number" ? obj.defaultPort : void 0,
      githubRepo: typeof obj.githubRepo === "string" ? obj.githubRepo.trim() : context == null ? void 0 : context.githubUrl,
      injectAinodeEnv: obj.injectAinodeEnv && typeof obj.injectAinodeEnv === "object" ? {
        baseUrlKey: String(obj.injectAinodeEnv.baseUrlKey || "OPENAI_API_BASE"),
        apiKeyKey: String(obj.injectAinodeEnv.apiKeyKey || "OPENAI_API_KEY"),
        modelKey: obj.injectAinodeEnv.modelKey ? String(obj.injectAinodeEnv.modelKey) : void 0,
        defaultModel: obj.injectAinodeEnv.defaultModel ? String(obj.injectAinodeEnv.defaultModel) : void 0
      } : void 0
    };
  }
  if (rawMode === "workflow_playground") {
    const systemPrompt = typeof obj.systemPrompt === "string" ? obj.systemPrompt.trim() : "";
    const rawInputs = Array.isArray(obj.inputs) ? obj.inputs : [];
    const inputs = rawInputs.filter((f) => f && typeof f === "object" && String(f.key || "").trim() && String(f.label || "").trim()).slice(0, 4).map((f) => ({
      key: String(f.key).trim(),
      label: String(f.label).trim(),
      labelEn: typeof f.labelEn === "string" ? f.labelEn.trim() : void 0,
      type: f.type === "textarea" || f.type === "url" ? f.type : "text",
      placeholder: typeof f.placeholder === "string" ? f.placeholder.trim() : void 0,
      placeholderEn: typeof f.placeholderEn === "string" ? f.placeholderEn.trim() : void 0,
      sampleValue: String(f.sampleValue || "").trim(),
      sampleValueEn: typeof f.sampleValueEn === "string" ? f.sampleValueEn.trim() : void 0,
      required: f.required !== false
    }));
    if (!systemPrompt || inputs.length === 0) {
      return seedManifest ? { ...seedManifest } : inferFallbackRunManifest(context);
    }
    return {
      mode: "workflow_playground",
      verified: Boolean((_b = obj.verified) != null ? _b : true),
      verifiedAt: typeof obj.verifiedAt === "string" ? obj.verifiedAt : void 0,
      verificationNote: typeof obj.verificationNote === "string" ? obj.verificationNote : void 0,
      ainodeModel: String(obj.ainodeModel || "deepseek-v3").trim(),
      systemPrompt,
      inputs,
      estimatedPoints: typeof obj.estimatedPoints === "number" ? obj.estimatedPoints : 12,
      monetizeEngine: obj.monetizeEngine === "shopark" ? "shopark" : "apay",
      monetizePrompt: typeof obj.monetizePrompt === "string" ? obj.monetizePrompt.trim() : void 0
    };
  }
  if (rawMode === "shopark_launchpad") {
    return {
      mode: "shopark_launchpad",
      verified: Boolean((_c = obj.verified) != null ? _c : true),
      verifiedAt: typeof obj.verifiedAt === "string" ? obj.verifiedAt : void 0,
      verificationNote: typeof obj.verificationNote === "string" ? obj.verificationNote : void 0,
      launchpadUrl: String(obj.launchpadUrl || "https://myshopark.com").trim(),
      themePreset: typeof obj.themePreset === "string" ? obj.themePreset.trim() : "bluex",
      blueprintPrompt: String(obj.blueprintPrompt || (context == null ? void 0 : context.tagline) || (context == null ? void 0 : context.name) || "\u8DE8\u5883\u591A\u8BED\u8A00\u72EC\u7ACB\u7AD9").trim()
    };
  }
  if (rawMode === "apay_launchpad") {
    return {
      mode: "apay_launchpad",
      verified: Boolean((_d = obj.verified) != null ? _d : true),
      verifiedAt: typeof obj.verifiedAt === "string" ? obj.verifiedAt : void 0,
      verificationNote: typeof obj.verificationNote === "string" ? obj.verificationNote : void 0,
      launchpadUrl: typeof obj.launchpadUrl === "string" ? obj.launchpadUrl.trim() : void 0,
      themePreset: typeof obj.themePreset === "string" ? obj.themePreset.trim() : void 0,
      blueprintPrompt: String(obj.blueprintPrompt || (context == null ? void 0 : context.tagline) || (context == null ? void 0 : context.name) || "AI \u6570\u5B57\u5546\u54C1\u4E0E\u8BA2\u9605\u5FAE\u7AD9").trim()
    };
  }
  if (rawMode === "guide_only") {
    return {
      mode: "guide_only",
      verified: Boolean((_e = obj.verified) != null ? _e : true),
      reason: typeof obj.reason === "string" ? obj.reason.trim() : void 0
    };
  }
  return seedManifest ? { ...seedManifest } : inferFallbackRunManifest(context);
}
function inferFallbackRunManifest(context) {
  const cat = String((context == null ? void 0 : context.category) || "").toLowerCase();
  const title = String((context == null ? void 0 : context.name) || "\u7CBE\u9009\u9879\u76EE").trim();
  if (cat === "cross-border") {
    return {
      mode: "shopark_launchpad",
      verified: true,
      launchpadUrl: "https://myshopark.com",
      themePreset: "bluex",
      blueprintPrompt: `\u56F4\u7ED5\u300C${title}\u300D\u5F00\u901A\u591A\u8BED\u79CD\u5916\u8D38 B2B \u8BE2\u76D8\u4E0E\u8DE8\u5883 DTC \u72EC\u7ACB\u7AD9`
    };
  }
  if (cat === "saas" || cat === "ai-infra") {
    return {
      mode: "apay_launchpad",
      verified: true,
      blueprintPrompt: `\u56F4\u7ED5\u300C${title}\u300D\u751F\u6210\u5E26\u4F1A\u5458\u8BA2\u9605\u4E0E\u7B97\u529B\u5145\u503C\u5305\u7684\u6536\u8D39\u5FAE\u7AD9`
    };
  }
  return {
    mode: "guide_only",
    verified: true,
    reason: "\u8BE5\u9879\u76EE\u4FA7\u91CD\u5E95\u5C42\u5DE5\u7A0B\u6216\u5BA2\u6237\u7AEF\u751F\u6001\uFF0C\u5EFA\u8BAE\u9605\u8BFB\u6DF1\u5EA6\u62C6\u89E3\u62A5\u544A\u4E0E\u6E90\u7801\u4ED3\u5E93\u843D\u5730"
  };
}
function getRunModeActionCopy(manifest, locale = "zh") {
  const mode = (manifest == null ? void 0 : manifest.mode) || "guide_only";
  const isEn = locale === "en";
  const isHk = locale === "zh-HK";
  const isJa = locale === "ja";
  const isKo = locale === "ko";
  if (mode === "workflow_playground") {
    if (isEn) return { modeBadge: "Runnable AI Workflow", primaryCta: "Run Live Workflow Now", secondaryMonetizeCta: "Clone as Paid Micro-Site" };
    if (isJa) return { modeBadge: "\u5373\u6642\u5B9F\u884C\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC", primaryCta: "\u4ECA\u3059\u3050\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u8A66\u3059", secondaryMonetizeCta: "\u540C\u578B\u8AB2\u91D1\u30B5\u30A4\u30C8\u3092\u69CB\u7BC9" };
    if (isKo) return { modeBadge: "\uC989\uC2DC \uC2E4\uD589 \uC6CC\uD06C\uD50C\uB85C\uC6B0", primaryCta: "\uC2E4\uC2DC\uAC04 \uC6CC\uD06C\uD50C\uB85C\uC6B0 \uBC14\uB85C \uC2E4\uD589", secondaryMonetizeCta: "\uB3D9\uC77C \uC218\uC775\uD615 \uC0AC\uC774\uD2B8 \uC0DD\uC131" };
    if (isHk) return { modeBadge: "\u53EF\u76F4\u63A5\u8A66\u8DD1\u5DE5\u4F5C\u6D41", primaryCta: "\u7ACB\u5373\u5728\u7DDA\u8A66\u8DD1\u5DE5\u4F5C\u6D41", secondaryMonetizeCta: "\u4E00\u9375\u5C01\u88DD\u6210\u6211\u7684\u6536\u8CBB\u5FAE\u7AD9" };
    return { modeBadge: "\u53EF\u76F4\u63A5\u8BD5\u8DD1\u5DE5\u4F5C\u6D41", primaryCta: "\u7ACB\u5373\u5728\u7EBF\u8BD5\u8DD1\u5DE5\u4F5C\u6D41", secondaryMonetizeCta: "\u4E00\u952E\u5C01\u88C5\u6210\u6211\u7684\u6536\u8D39\u5FAE\u7AD9" };
  }
  if (mode === "gopanel_app") {
    if (isEn) return { modeBadge: "Verified Docker App", primaryCta: "1-Click Deploy to GoPanel", secondaryMonetizeCta: "Launch Commercial Portal" };
    if (isJa) return { modeBadge: "\u691C\u8A3C\u6E08\u307F\u30B3\u30F3\u30C6\u30CA", primaryCta: "GoPanel\u3078\u30EF\u30F3\u30AF\u30EA\u30C3\u30AF\u5C0E\u5165", secondaryMonetizeCta: "\u5546\u7528\u8AB2\u91D1\u30B5\u30A4\u30C8\u3092\u69CB\u7BC9" };
    if (isKo) return { modeBadge: "\uAC80\uC99D\uB41C \uCEE8\uD14C\uC774\uB108 \uC571", primaryCta: "GoPanel \uC6D0\uD074\uB9AD \uBC30\uD3EC", secondaryMonetizeCta: "\uC0C1\uC6A9 \uACB0\uC81C \uC0AC\uC774\uD2B8 \uAD6C\uCD95" };
    if (isHk) return { modeBadge: "\u5DF2\u6838\u9A57\u958B\u6E90\u5BB9\u5668", primaryCta: "\u4E00\u9375\u90E8\u7F72\u5230 GoPanel \u9762\u677F", secondaryMonetizeCta: "\u751F\u6210\u914D\u5957\u6536\u6B3E\u5B98\u7DB2" };
    return { modeBadge: "\u5DF2\u6838\u9A8C\u5F00\u6E90\u5BB9\u5668", primaryCta: "\u4E00\u952E\u90E8\u7F72\u5230 GoPanel \u9762\u677F", secondaryMonetizeCta: "\u751F\u6210\u914D\u5957\u6536\u6B3E\u5B98\u7F51" };
  }
  if (mode === "shopark_launchpad") {
    if (isEn) return { modeBadge: "Cross-Border Storefront", primaryCta: "Launch Store on ShopArk", secondaryMonetizeCta: "Build Digital Add-on Site" };
    if (isJa) return { modeBadge: "\u8D8A\u5883EC\u30FBB2B\u57FA\u76E4", primaryCta: "ShopArk\u3067\u591A\u8A00\u8A9EEC\u3092\u958B\u8A2D", secondaryMonetizeCta: "\u30C7\u30B8\u30BF\u30EB\u8AB2\u91D1LP\u3092\u4F5C\u6210" };
    if (isKo) return { modeBadge: "\uD06C\uB85C\uC2A4\uBCF4\uB354 \uC790\uC0AC\uBAB0", primaryCta: "ShopArk \uB2E4\uAD6D\uC5B4 \uC2A4\uD1A0\uC5B4 \uAC1C\uC124", secondaryMonetizeCta: "\uB514\uC9C0\uD138 \uAD6C\uB3C5 \uD398\uC774\uC9C0 \uC0DD\uC131" };
    if (isHk) return { modeBadge: "\u5916\u8CBF\u7368\u7ACB\u7AD9\u6BCD\u9AD4", primaryCta: "\u7528 ShopArk \u958B\u8A2D\u540C\u6B3E\u5916\u8CBF\u7AD9", secondaryMonetizeCta: "\u7528 APay \u751F\u6210\u914D\u5957\u6536\u6B3E\u9801" };
    return { modeBadge: "\u5916\u8D38\u72EC\u7ACB\u7AD9\u6BCD\u4F53", primaryCta: "\u7528 ShopArk \u5F00\u8BBE\u540C\u6B3E\u5916\u8D38\u7AD9", secondaryMonetizeCta: "\u7528 APay \u751F\u6210\u914D\u5957\u6536\u6B3E\u9875" };
  }
  if (mode === "apay_launchpad") {
    if (isEn) return { modeBadge: "Turnkey Micro-SaaS", primaryCta: "Launch Paid Site in Sandbox", secondaryMonetizeCta: "Customize Pricing Blueprint" };
    if (isJa) return { modeBadge: "3\u65E5MVP\u69CB\u7BC9\u30E2\u30C7\u30EB", primaryCta: "\u8AB2\u91D1\u5BFE\u5FDC\u30DE\u30A4\u30AF\u30ED\u30B5\u30A4\u30C8\u3092\u751F\u6210", secondaryMonetizeCta: "\u6599\u91D1\u30D7\u30E9\u30F3\u3092\u8ABF\u6574" };
    if (isKo) return { modeBadge: "\uC218\uC775\uD615 \uB9C8\uC774\uD06C\uB85C \uC0AC\uC774\uD2B8", primaryCta: "\uACB0\uC81C \uAC00\uB2A5\uD55C \uC0AC\uC774\uD2B8 \uC989\uC2DC \uC0DD\uC131", secondaryMonetizeCta: "\uC694\uAE08\uC81C \uBE14\uB8E8\uD504\uB9B0\uD2B8 \uD3B8\uC9D1" };
    if (isHk) return { modeBadge: "\u5FAE\u7AD9\u6C99\u76D2\u76F4\u958B", primaryCta: "\u4E00\u9375\u751F\u6210\u540C\u6B3E\u6536\u6B3E\u5FAE\u7AD9", secondaryMonetizeCta: "\u81EA\u5B9A\u7FA9\u5546\u54C1\u8207\u5B9A\u50F9" };
    return { modeBadge: "\u5FAE\u7AD9\u6C99\u76D2\u76F4\u5F00", primaryCta: "\u4E00\u952E\u751F\u6210\u540C\u6B3E\u6536\u6B3E\u5FAE\u7AD9", secondaryMonetizeCta: "\u81EA\u5B9A\u4E49\u5546\u54C1\u4E0E\u5B9A\u4EF7" };
  }
  if (isEn) return { modeBadge: "Architecture Breakdown", primaryCta: "Read Full Breakdown", secondaryMonetizeCta: "Explore Source & Download" };
  if (isJa) return { modeBadge: "\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u89E3\u5256", primaryCta: "\u5B8C\u5168\u89E3\u5256\u30EC\u30DD\u30FC\u30C8\u3092\u8AAD\u3080", secondaryMonetizeCta: "\u516C\u5F0F\u30EA\u30BD\u30FC\u30B9\u3092\u898B\u308B" };
  if (isKo) return { modeBadge: "\uC544\uD0A4\uD14D\uCC98 \uC2EC\uCE35 \uBD84\uC11D", primaryCta: "\uC2E4\uC804 \uBD84\uC11D \uB9AC\uD3EC\uD2B8 \uC77D\uAE30", secondaryMonetizeCta: "\uACF5\uC2DD \uB9AC\uC18C\uC2A4 \uD655\uC778" };
  if (isHk) return { modeBadge: "\u6DF1\u5EA6\u5BE6\u6230\u62C6\u89E3", primaryCta: "\u95B1\u8B80\u5B8C\u6574\u62C6\u89E3\u5831\u544A", secondaryMonetizeCta: "\u67E5\u770B\u5B98\u65B9\u5009\u5EAB\u8207\u8CC7\u6E90" };
  return { modeBadge: "\u6DF1\u5EA6\u5B9E\u6218\u62C6\u89E3", primaryCta: "\u9605\u8BFB\u5B8C\u6574\u62C6\u89E3\u62A5\u544A", secondaryMonetizeCta: "\u67E5\u770B\u5B98\u65B9\u4ED3\u5E93\u4E0E\u8D44\u6E90" };
}
function normalizeHoxiLocale(raw, defaultLocale = "en") {
  var _a;
  const val = String(raw || "").trim();
  if (!val) return defaultLocale;
  const primary = (((_a = val.split(",")[0]) == null ? void 0 : _a.split(";")[0]) || val).trim().toLowerCase();
  if (primary === "zh-hk" || primary === "zh-tw" || primary === "zh-mo" || primary === "zh-hant" || primary === "tw" || primary === "hk") {
    return "zh-HK";
  }
  if (primary.startsWith("zh")) return "zh";
  if (primary.startsWith("ja") || primary === "jp") return "ja";
  if (primary.startsWith("ko") || primary === "kr") return "ko";
  if (primary.startsWith("en")) return "en";
  return defaultLocale;
}
const CATEGORY_LABELS_I18N = {
  "all": {
    "zh": "\u5168\u90E8\u9879\u76EE",
    "zh-HK": "\u5168\u90E8\u9805\u76EE",
    "en": "All Projects",
    "ja": "\u3059\u3079\u3066\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
    "ko": "\uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8"
  },
  "cross-border": {
    "zh": "\u5916\u8D38\u4E0E\u8DE8\u5883",
    "zh-HK": "\u5916\u8CBF\u8207\u8DE8\u5883",
    "en": "Cross-Border & Trade",
    "ja": "\u8D8A\u5883EC\u30FB\u8CBF\u6613",
    "ko": "\uD06C\uB85C\uC2A4\uBCF4\uB354\xB7\uBB34\uC5ED"
  },
  "saas": {
    "zh": "\u5546\u4E1A\u53D8\u73B0 SaaS",
    "zh-HK": "\u5546\u696D\u8B8A\u73FE SaaS",
    "en": "Commercial SaaS",
    "ja": "\u53CE\u76CA\u5316 Micro-SaaS",
    "ko": "\uC218\uC775\uD615 Micro-SaaS"
  },
  "ai-infra": {
    "zh": "AI \u9009\u578B\u4E0E\u6D41\u91CF",
    "zh-HK": "AI \u9078\u578B\u8207\u6D41\u91CF",
    "en": "AI Portal & Traffic",
    "ja": "AI\u9078\u5B9A\u30FB\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF",
    "ko": "AI \uC120\uC815\xB7\uD2B8\uB798\uD53D"
  },
  "gateway": {
    "zh": "\u7B97\u529B\u57FA\u5EFA",
    "zh-HK": "\u7B97\u529B\u57FA\u5EFA",
    "en": "Compute Infra",
    "ja": "\u8A08\u7B97\u30A4\u30F3\u30D5\u30E9",
    "ko": "\uC5F0\uC0B0 \uC778\uD504\uB77C"
  },
  "devtools": {
    "zh": "\u5F00\u53D1\u6548\u7387\u4E0E\u5E95\u5EA7",
    "zh-HK": "\u958B\u767C\u6548\u7387\u8207\u5E95\u5EA7",
    "en": "DevTools & Engine",
    "ja": "\u958B\u767A\u30C4\u30FC\u30EB\u30FB\u57FA\u76E4",
    "ko": "\uAC1C\uBC1C \uB3C4\uAD6C\xB7\uAE30\uBC18"
  },
  "open-source": {
    "zh": "\u5F00\u6E90\u5F15\u6D41",
    "zh-HK": "\u958B\u6E90\u5F15\u6D41",
    "en": "Open Source",
    "ja": "\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9",
    "ko": "\uC624\uD508\uC18C\uC2A4"
  }
};
function getCategoryLabelForLocale(category, locale, fallback) {
  const entry = CATEGORY_LABELS_I18N[category];
  if (entry && entry[locale]) return entry[locale];
  return fallback || category;
}
function inferProjectMatchProfile(project) {
  const cat = String(project.category || "").toLowerCase();
  const text = `${project.id} ${project.name} ${project.description} ${(project.techStack || []).join(" ")}`.toLowerCase();
  if (cat === "cross-border" || text.includes("\u8DE8\u5883") || text.includes("\u5916\u8D38") || text.includes("ozon") || text.includes("shopify") || text.includes("tiktok")) {
    return {
      roles: { trade: 95, growth: 88, product: 84, developer: 76, designer: 70 },
      dimensions: { market: 86, delivery: 65, distribution: 88, leverage: 84, resilience: 78 },
      difficulty: "easy",
      revenueModel: "SaaS \u8BA2\u9605 + \u8DE8\u5883\u5E97\u7FA4/\u8BE2\u76D8\u5DEE\u4EF7",
      monthlyRevenueEstimate: "$2,500 - $18,000 / mo"
    };
  }
  if (cat === "gateway" || text.includes("gateway") || text.includes("\u7F51\u5173") || text.includes("token")) {
    return {
      roles: { developer: 94, product: 78, growth: 74, trade: 62, designer: 55 },
      dimensions: { market: 78, delivery: 90, distribution: 76, leverage: 94, resilience: 82 },
      difficulty: "medium",
      revenueModel: "\u9884\u5145\u503C Token \u5DEE\u4EF7 + \u9AD8\u9891 API \u8BA1\u8D39",
      monthlyRevenueEstimate: "$3,000 - $25,000 / mo"
    };
  }
  if (cat === "devtools" || text.includes("desktop") || text.includes("cli") || text.includes("boilerplate")) {
    return {
      roles: { developer: 96, product: 80, designer: 68, growth: 65, trade: 58 },
      dimensions: { market: 76, delivery: 92, distribution: 72, leverage: 88, resilience: 80 },
      difficulty: "hard",
      revenueModel: "\u5F00\u6E90\u5F15\u6D41 + \u4E91\u7AEF\u7B97\u529B/Pro \u8BA2\u9605\u53D8\u73B0",
      monthlyRevenueEstimate: "$2,000 - $15,000 / mo"
    };
  }
  if (cat === "ai-infra" || text.includes("seo") || text.includes("portal") || text.includes("\u95E8\u6237") || text.includes("\u699C\u5355")) {
    return {
      roles: { growth: 94, product: 90, trade: 82, designer: 78, developer: 80 },
      dimensions: { market: 88, delivery: 70, distribution: 92, leverage: 85, resilience: 80 },
      difficulty: "easy",
      revenueModel: "SEO \u81EA\u7136\u6D41\u91CF + \u8054\u76DF\u5206\u6210 + \u4F1A\u5458\u8BA2\u9605",
      monthlyRevenueEstimate: "$1,500 - $12,000 / mo"
    };
  }
  return {
    roles: { product: 90, developer: 88, designer: 84, growth: 82, trade: 78 },
    dimensions: { market: 85, delivery: 80, distribution: 80, leverage: 84, resilience: 76 },
    difficulty: "medium",
    revenueModel: "Micro-SaaS \u6708\u5EA6\u8BA2\u9605 + \u7B97\u529B\u70B9\u6570\u5305",
    monthlyRevenueEstimate: "$2,000 - $16,000 / mo"
  };
}
function mergeProjectLocales(baseProject, seedProject, rawLocales) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const zhBaseSource = seedProject || baseProject;
  const seedZh = {
    name: zhBaseSource.name,
    tagline: zhBaseSource.tagline,
    description: zhBaseSource.description,
    categoryLabel: getCategoryLabelForLocale(String(zhBaseSource.category || baseProject.category || "saas"), "zh", zhBaseSource.categoryLabel),
    statusLabel: zhBaseSource.statusLabel,
    modelUsed: zhBaseSource.modelUsed,
    monthlyCost: zhBaseSource.monthlyCost,
    badge: zhBaseSource.badge,
    techStack: zhBaseSource.techStack,
    highlights: zhBaseSource.highlights
  };
  const seedLocales = (seedProject == null ? void 0 : seedProject.locales) || {};
  const incomingLocales = rawLocales || baseProject.locales || {};
  const allKeys = ["zh", "zh-HK", "en", "ja", "ko"];
  const merged = {};
  for (const key of allKeys) {
    const sLoc = key === "zh" ? { ...seedZh, ...seedLocales.zh || {} } : seedLocales[key] || {};
    const rLoc = incomingLocales[key] || {};
    const combined = {
      name: ((_a = rLoc.name) == null ? void 0 : _a.trim()) || ((_b = sLoc.name) == null ? void 0 : _b.trim()) || void 0,
      tagline: ((_c = rLoc.tagline) == null ? void 0 : _c.trim()) || ((_d = sLoc.tagline) == null ? void 0 : _d.trim()) || void 0,
      description: ((_e = rLoc.description) == null ? void 0 : _e.trim()) || ((_f = sLoc.description) == null ? void 0 : _f.trim()) || void 0,
      categoryLabel: ((_g = rLoc.categoryLabel) == null ? void 0 : _g.trim()) || ((_h = sLoc.categoryLabel) == null ? void 0 : _h.trim()) || void 0,
      statusLabel: ((_i = rLoc.statusLabel) == null ? void 0 : _i.trim()) || ((_j = sLoc.statusLabel) == null ? void 0 : _j.trim()) || void 0,
      modelUsed: ((_k = rLoc.modelUsed) == null ? void 0 : _k.trim()) || ((_l = sLoc.modelUsed) == null ? void 0 : _l.trim()) || void 0,
      monthlyCost: ((_m = rLoc.monthlyCost) == null ? void 0 : _m.trim()) || ((_n = sLoc.monthlyCost) == null ? void 0 : _n.trim()) || void 0,
      badge: ((_o = rLoc.badge) == null ? void 0 : _o.trim()) || ((_p = sLoc.badge) == null ? void 0 : _p.trim()) || void 0,
      techStack: Array.isArray(rLoc.techStack) && rLoc.techStack.length > 0 ? rLoc.techStack : Array.isArray(sLoc.techStack) && sLoc.techStack.length > 0 ? sLoc.techStack : void 0,
      highlights: Array.isArray(rLoc.highlights) && rLoc.highlights.length > 0 ? rLoc.highlights : Array.isArray(sLoc.highlights) && sLoc.highlights.length > 0 ? sLoc.highlights : void 0
    };
    if (combined.name || combined.tagline || combined.description) {
      merged[key] = combined;
    }
  }
  return merged;
}
function localizeProject(project, rawLocale) {
  const locale = normalizeHoxiLocale(rawLocale);
  const locales = mergeProjectLocales(project, void 0, project.locales);
  const exact = locales[locale];
  const fallback = locale === "zh-HK" ? locales["zh"] || {} : locale === "zh" ? locales["zh"] || {} : locales["en"] || locales["zh"] || {};
  const merged = {
    ...project,
    slug: String(project.slug || project.id),
    name: (exact == null ? void 0 : exact.name) || (fallback == null ? void 0 : fallback.name) || project.name,
    tagline: (exact == null ? void 0 : exact.tagline) || (fallback == null ? void 0 : fallback.tagline) || project.tagline,
    description: (exact == null ? void 0 : exact.description) || (fallback == null ? void 0 : fallback.description) || project.description,
    categoryLabel: (exact == null ? void 0 : exact.categoryLabel) || getCategoryLabelForLocale(project.category, locale, (fallback == null ? void 0 : fallback.categoryLabel) || project.categoryLabel),
    statusLabel: (exact == null ? void 0 : exact.statusLabel) || (fallback == null ? void 0 : fallback.statusLabel) || project.statusLabel,
    modelUsed: (exact == null ? void 0 : exact.modelUsed) || (fallback == null ? void 0 : fallback.modelUsed) || project.modelUsed,
    monthlyCost: (exact == null ? void 0 : exact.monthlyCost) || (fallback == null ? void 0 : fallback.monthlyCost) || project.monthlyCost,
    badge: (exact == null ? void 0 : exact.badge) || (fallback == null ? void 0 : fallback.badge) || project.badge,
    techStack: (exact == null ? void 0 : exact.techStack) && exact.techStack.length > 0 ? exact.techStack : (fallback == null ? void 0 : fallback.techStack) && fallback.techStack.length > 0 ? fallback.techStack : project.techStack,
    highlights: (exact == null ? void 0 : exact.highlights) && exact.highlights.length > 0 ? exact.highlights : (fallback == null ? void 0 : fallback.highlights) && fallback.highlights.length > 0 ? fallback.highlights : project.highlights,
    matchProfile: project.matchProfile || inferProjectMatchProfile(project),
    runManifest: normalizeProjectRunManifest(project.runManifest, {
      id: project.id,
      slug: String(project.slug || project.id),
      category: project.category,
      name: project.name,
      tagline: project.tagline,
      githubUrl: project.githubUrl
    }),
    locales
  };
  return merged;
}
const DIMENSION_NAMES_I18N = {
  market: {
    "zh": "\u5546\u4E1A\u4E0E\u9A8C\u8BC1\u55C5\u89C9",
    "zh-HK": "\u5546\u696D\u8207\u9A57\u8B49\u55C5\u89BA",
    "en": "Market & Validation Instinct",
    "ja": "\u30D3\u30B8\u30CD\u30B9\u691C\u8A3C\u30BB\u30F3\u30B9",
    "ko": "\uBE44\uC988\uB2C8\uC2A4 \uAC80\uC99D \uAC10\uAC01"
  },
  delivery: {
    "zh": "\u5168\u6808 AI \u4EA4\u4ED8\u529B",
    "zh-HK": "\u5168\u68E7 AI \u4EA4\u4ED8\u529B",
    "en": "Full-Stack AI Delivery",
    "ja": "\u30D5\u30EB\u30B9\u30BF\u30C3\u30AFAI\u5B9F\u88C5\u529B",
    "ko": "\uD480\uC2A4\uD0DD AI \uAD6C\uD604\uB825"
  },
  distribution: {
    "zh": "\u6D41\u91CF\u4E0E\u5206\u53D1\u529B",
    "zh-HK": "\u6D41\u91CF\u8207\u5206\u767C\u529B",
    "en": "Traffic & Distribution",
    "ja": "\u96C6\u5BA2\u30FB\u30C7\u30A3\u30B9\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3\u529B",
    "ko": "\uD2B8\uB798\uD53D \uBC0F \uBC30\uD3EC\uB825"
  },
  leverage: {
    "zh": "\u6210\u672C\u6838\u7B97\u4E0E\u6760\u6746",
    "zh-HK": "\u6210\u672C\u6838\u7B97\u8207\u69D3\u687F",
    "en": "Cost Accounting & Leverage",
    "ja": "\u30B3\u30B9\u30C8\u8A08\u7B97\u30FB\u30EC\u30D0\u30EC\u30C3\u30B8\u529B",
    "ko": "\uBE44\uC6A9 \uACC4\uC0B0 \uBC0F \uB808\uBC84\uB9AC\uC9C0"
  },
  resilience: {
    "zh": "\u8DD1\u9053\u4E0E\u5FC3\u667A\u97E7\u6027",
    "zh-HK": "\u8DD1\u9053\u8207\u5FC3\u667A\u97CC\u6027",
    "en": "Runway & Mental Grit",
    "ja": "\u8CC7\u91D1\u30E9\u30F3\u30A6\u30A7\u30A4\u30FB\u7CBE\u795E\u7684\u56DE\u5FA9\u529B",
    "ko": "\uB7F0\uC6E8\uC774 \uBC0F \uBA58\uD0C8 \uD68C\uBCF5\uB825"
  }
};
const ROLE_NAMES_I18N = {
  developer: {
    "zh": "\u7814\u53D1 / \u7A0B\u5E8F\u5458",
    "zh-HK": "\u7814\u767C / \u5DE5\u7A0B\u5E2B",
    "en": "Developer / Engineer",
    "ja": "\u30A8\u30F3\u30B8\u30CB\u30A2 / \u958B\u767A\u8005",
    "ko": "\uAC1C\uBC1C\uC790 / \uC5D4\uC9C0\uB2C8\uC5B4"
  },
  product: {
    "zh": "\u4EA7\u54C1\u7ECF\u7406 / \u4E1A\u52A1",
    "zh-HK": "\u7522\u54C1\u7D93\u7406 / \u696D\u52D9",
    "en": "Product Manager",
    "ja": "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC",
    "ko": "\uD504\uB85C\uB355\uD2B8 \uB9E4\uB2C8\uC800"
  },
  designer: {
    "zh": "UI/UX \u8BBE\u8BA1\u5E08",
    "zh-HK": "UI/UX \u8A2D\u8A08\u5E2B",
    "en": "UI/UX Designer",
    "ja": "UI/UX\u30C7\u30B6\u30A4\u30CA\u30FC",
    "ko": "UI/UX \uB514\uC790\uC774\uB108"
  },
  growth: {
    "zh": "\u8FD0\u8425 / \u589E\u957F / \u5E02\u573A",
    "zh-HK": "\u904B\u71DF / \u589E\u9577 / \u5E02\u5834",
    "en": "Growth & Marketing",
    "ja": "\u30B0\u30ED\u30FC\u30B9\u30FB\u30DE\u30FC\u30B1\u30BF\u30FC",
    "ko": "\uADF8\uB85C\uC2A4 / \uB9C8\uCF00\uD130"
  },
  trade: {
    "zh": "\u5916\u8D38 / \u8DE8\u5883\u5356\u5BB6",
    "zh-HK": "\u5916\u8CBF / \u8DE8\u5883\u8CE3\u5BB6",
    "en": "Cross-Border & Foreign Trade",
    "ja": "\u8D8A\u5883EC\u30FB\u8CBF\u6613\u30BB\u30E9\u30FC",
    "ko": "\uD574\uC678\uBB34\uC5ED / \uD06C\uB85C\uC2A4\uBCF4\uB354 \uC140\uB7EC"
  }
};
const BLINDSPOT_GUARD_I18N = {
  market: {
    "zh": "\u5148\u7528\u5355\u9875\u6216\u73B0\u6210\u5546\u54C1\u5361\u6D4B\u771F\u5B9E\u4ED8\u6B3E/\u8BE2\u76D8\u70B9\u51FB\uFF0C\u4E25\u7981\u5728\u6CA1\u6536\u5230\u7B2C\u4E00\u7B14\u94B1\u524D\u95ED\u95E8\u5199\u590D\u6742\u7CFB\u7EDF\u3002",
    "zh-HK": "\u5148\u7528\u55AE\u9801\u6216\u73FE\u6210\u5546\u54C1\u5361\u6E2C\u771F\u5BE6\u4ED8\u6B3E/\u8A62\u76E4\u9EDE\u64CA\uFF0C\u56B4\u7981\u5728\u6C92\u6536\u5230\u7B2C\u4E00\u7B46\u9322\u524D\u9589\u9580\u5BEB\u8907\u96DC\u7CFB\u7D71\u3002",
    "en": "Validate willingness to pay with a 1-page landing or live listing first; never build complex backend systems before your first paid order.",
    "ja": "\u8907\u96D1\u306A\u30B7\u30B9\u30C6\u30E0\u3092\u4F5C\u308B\u524D\u306B\u30011\u679A\u306ELP\u3084\u30C6\u30B9\u30C8\u51FA\u54C1\u3067\u5B9F\u969B\u306E\u6C7A\u6E08\u30FB\u554F\u3044\u5408\u308F\u305B\u53CD\u5FDC\u3092\u691C\u8A3C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    "ko": "\uBCF5\uC7A1\uD55C \uC2DC\uC2A4\uD15C\uC744 \uAC1C\uBC1C\uD558\uAE30 \uC804\uC5D0 \uC6D0\uD398\uC774\uC9C0 \uB79C\uB529\uC774\uB098 \uD14C\uC2A4\uD2B8 \uC0C1\uD488 \uB4F1\uB85D\uC73C\uB85C \uC2E4\uC81C \uACB0\uC81C\xB7\uBB38\uC758 \uBC18\uC751\uBD80\uD130 \uAC80\uC99D\uD558\uC138\uC694."
  },
  delivery: {
    "zh": "\u76F4\u63A5\u590D\u7528\u73B0\u6210 SaaS \u5E95\u5EA7\uFF08\u5982 APay / \u8F7B\u94FA\u6280\u80FD / Supabase\uFF09\uFF0C\u7528 Cursor/Hoxi Agent \u9A71\u52A8\u4EA4\u4ED8\uFF0C\u522B\u81EA\u5DF1\u624B\u642D\u5E95\u5C42\u8FD0\u7EF4\u3002",
    "zh-HK": "\u76F4\u63A5\u8907\u7528\u73FE\u6210 SaaS \u5E95\u5EA7\uFF08\u5982 APay / \u8F15\u92EA\u6280\u80FD / Supabase\uFF09\uFF0C\u7528 Cursor/Hoxi Agent \u9A45\u52D5\u4EA4\u4ED8\uFF0C\u5225\u81EA\u5DF1\u624B\u642D\u5E95\u5C64\u904B\u7DAD\u3002",
    "en": "Reuse battle-tested templates (APay / Hoxi Skills / Supabase) and let AI coding agents ship the glue code instead of configuring servers by hand.",
    "ja": "\u65E2\u5B58\u306ESaaS\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3084Hoxi\u30B9\u30AD\u30EB\u3092\u518D\u5229\u7528\u3057\u3001\u30A4\u30F3\u30D5\u30E9\u69CB\u7BC9\u3067\u7ACB\u3061\u6B62\u307E\u3089\u305AAI\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3067\u4E00\u6C17\u901A\u8CAB\u5B9F\u88C5\u3057\u307E\u3057\u3087\u3046\u3002",
    "ko": "\uAE30\uC874 SaaS \uD15C\uD50C\uB9BF\uACFC Hoxi \uC2A4\uD0AC\uC744 \uC7AC\uC0AC\uC6A9\uD558\uACE0, \uC778\uD504\uB77C \uAD6C\uCD95\uC5D0 \uC2DC\uAC04\uC744 \uC4F0\uC9C0 \uB9D0\uACE0 AI \uC5D0\uC774\uC804\uD2B8\uB85C \uBE60\uB974\uAC8C \uBC30\uD3EC\uD558\uC138\uC694."
  },
  distribution: {
    "zh": "\u6BCF\u5468\u56FA\u5B9A\u7559\u51FA 40% \u65F6\u95F4\u505A\u591A\u8BED\u79CD SEO\u3001\u516C\u5F00\u6784\u5EFA\uFF08Build in Public\uFF09\u6216\u7CBE\u51C6\u5916\u8D38\u5BA2\u6237\u4E3B\u52A8\u89E6\u8FBE\uFF0C\u522B\u5750\u7B49\u81EA\u7136\u6D41\u91CF\u3002",
    "zh-HK": "\u6BCF\u9031\u56FA\u5B9A\u7559\u51FA 40% \u6642\u9593\u505A\u591A\u8A9E\u7A2E SEO\u3001\u516C\u958B\u69CB\u5EFA\uFF08Build in Public\uFF09\u6216\u7CBE\u6E96\u5916\u8CBF\u5BA2\u6236\u4E3B\u52D5\u89F8\u9054\uFF0C\u5225\u5750\u7B49\u81EA\u7136\u6D41\u91CF\u3002",
    "en": "Dedicate 40% of your week to programmatic SEO, Build in Public, or direct outbound outreach rather than waiting passively for traffic.",
    "ja": "\u9031\u306E40%\u306F\u591A\u8A00\u8A9ESEO\u3084Build in Public\u3001\u898B\u8FBC\u307F\u5BA2\u3078\u306E\u76F4\u63A5\u30A2\u30D7\u30ED\u30FC\u30C1\u306B\u5145\u3066\u3001\u81EA\u7136\u6D41\u5165\u3092\u5F85\u3064\u3060\u3051\u306B\u3057\u306A\u3044\u3053\u3068\u3002",
    "ko": "\uB9E4\uC8FC \uC2DC\uAC04\uC758 40%\uB97C \uB2E4\uAD6D\uC5B4 SEO, \uACF5\uAC1C \uBE4C\uB529(Build in Public), \uC7A0\uC7AC \uACE0\uAC1D \uC9C1\uC811 \uCEE8\uD0DD\uC5D0 \uD22C\uC790\uD558\uC138\uC694."
  },
  leverage: {
    "zh": "\u65E5\u5E38\u6279\u5904\u7406\u4E0E\u7FFB\u8BD1\u6D17\u7A3F\u5207\u5230 DeepSeek V3 / Gemini Flash \u4E13\u7EBF\uFF0C\u4EC5\u6838\u5FC3\u63A8\u7406\u7528 Claude Sonnet\uFF0C\u5C06\u6BDB\u5229\u9501\u6B7B\u5728 75% \u4EE5\u4E0A\u3002",
    "zh-HK": "\u65E5\u5E38\u6279\u8655\u7406\u8207\u7FFB\u8B6F\u6D17\u7A3F\u5207\u5230 DeepSeek V3 / Gemini Flash \u5C08\u7DDA\uFF0C\u50C5\u6838\u5FC3\u63A8\u7406\u7528 Claude Sonnet\uFF0C\u5C07\u6BDB\u5229\u9396\u6B7B\u5728 75% \u4EE5\u4E0A\u3002",
    "en": "Route bulk translation and extraction to DeepSeek V3 / Gemini Flash gateways, reserving flagship models for core reasoning to keep gross margin above 75%.",
    "ja": "\u4E00\u62EC\u7FFB\u8A33\u3084\u30C7\u30FC\u30BF\u62BD\u51FA\u306FDeepSeek V3\u3084Gemini Flash\u5C02\u7528\u56DE\u7DDA\u306B\u632F\u308A\u5206\u3051\u3001\u7C97\u5229\u738775%\u4EE5\u4E0A\u3092\u78BA\u4FDD\u3057\u307E\u3057\u3087\u3046\u3002",
    "ko": "\uB300\uB7C9 \uBC88\uC5ED\xB7\uCD94\uCD9C \uC791\uC5C5\uC740 DeepSeek V3 / Gemini Flash \uAC8C\uC774\uD2B8\uC6E8\uC774\uB85C \uB77C\uC6B0\uD305\uD558\uC5EC \uB9E4\uCD9C\uCD1D\uC774\uC775\uB960\uC744 75% \uC774\uC0C1\uC73C\uB85C \uC720\uC9C0\uD558\uC138\uC694."
  },
  resilience: {
    "zh": "\u8BBE\u7F6E 30 \u5929\u6700\u5C0F\u6295\u5165\u6B62\u635F\u7EBF\uFF08\u6708\u56FA\u5B9A\u6210\u672C\u63A7\u5236\u5728 \xA5300 \u5185\uFF09\uFF0C\u5148\u8DD1\u901A\u524D 10 \u4E2A\u4ED8\u8D39\u5BA2\u6237\u518D\u9010\u6B65\u653E\u5927\u6295\u5165\u3002",
    "zh-HK": "\u8A2D\u7F6E 30 \u5929\u6700\u5C0F\u6295\u5165\u6B62\u640D\u7DDA\uFF08\u6708\u56FA\u5B9A\u6210\u672C\u63A7\u5236\u5728 \xA5300 \u5167\uFF09\uFF0C\u5148\u8DD1\u901A\u524D 10 \u500B\u4ED8\u8CBB\u5BA2\u6236\u518D\u9010\u6B65\u653E\u5927\u6295\u5165\u3002",
    "en": "Cap monthly fixed cost under $45 and set a 30-day validation checkpoint: land your first 10 paying customers before scaling spend.",
    "ja": "\u6708\u984D\u56FA\u5B9A\u8CBB\u30925,000\u5186\u4EE5\u4E0B\u306B\u6291\u3048\u300130\u65E5\u9593\u306E\u64A4\u9000\u30E9\u30A4\u30F3\u3092\u8A2D\u5B9A\u3057\u3066\u3001\u307E\u305A\u6700\u521D\u306E\u6709\u6599\u9867\u5BA210\u4EBA\u3092\u7372\u5F97\u3057\u307E\u3057\u3087\u3046\u3002",
    "ko": "\uC6D4 \uACE0\uC815\uBE44\uB97C $45 \uC774\uD558\uB85C \uC81C\uD55C\uD558\uACE0 30\uC77C \uC190\uC808 \uAE30\uC900\uC120\uC744 \uC124\uC815\uD55C \uB4A4, \uCCAB \uC720\uB8CC \uACE0\uAC1D 10\uBA85\uC744 \uD655\uBCF4\uD55C \uD6C4 \uD655\uC7A5\uD558\uC138\uC694."
  }
};
function rankProjectsForUser(options) {
  var _a;
  const locale = normalizeHoxiLocale(options.locale);
  const role = options.role || "developer";
  const scores = options.dimensionScores || {
    market: 65,
    delivery: 65,
    distribution: 65,
    leverage: 65,
    resilience: 65
  };
  const dimKeys = ["market", "delivery", "distribution", "leverage", "resilience"];
  const sortedUserDims = [...dimKeys].sort((a, b) => {
    var _a2, _b;
    return ((_a2 = scores[b]) != null ? _a2 : 50) - ((_b = scores[a]) != null ? _b : 50);
  });
  const strongestKey = sortedUserDims[0] || "market";
  const weakestKey = sortedUserDims[sortedUserDims.length - 1] || "distribution";
  const localizedProjects = options.projects.map((p) => localizeProject(p, locale));
  const recommendations = localizedProjects.map((project) => {
    var _a2, _b, _c, _d;
    const profile = project.matchProfile || inferProjectMatchProfile(project);
    const roleAffinity = (_a2 = profile.roles[role]) != null ? _a2 : 75;
    let weightedSum = 0;
    let weightTotal = 0;
    for (const key of dimKeys) {
      const reqWeight = Math.max(40, (_b = profile.dimensions[key]) != null ? _b : 70);
      const userScore = Math.max(20, Math.min(100, (_c = scores[key]) != null ? _c : 65));
      const ratio = userScore >= reqWeight ? 86 + Math.min(14, (userScore - reqWeight) * 0.45) : 55 + userScore / reqWeight * 31;
      weightedSum += ratio * reqWeight;
      weightTotal += reqWeight;
    }
    const capabilityFit = weightTotal > 0 ? weightedSum / weightTotal : 75;
    const projectTopDims = [...dimKeys].sort(
      (a, b) => {
        var _a3, _b2;
        return ((_a3 = profile.dimensions[b]) != null ? _a3 : 70) - ((_b2 = profile.dimensions[a]) != null ? _b2 : 70);
      }
    );
    const strengthBonus = projectTopDims.slice(0, 2).includes(strongestKey) ? 4 : 0;
    const rawMatch = Math.round(roleAffinity * 0.46 + capabilityFit * 0.54 + strengthBonus);
    const matchScore = Math.max(62, Math.min(98, rawMatch));
    const roleName = ROLE_NAMES_I18N[role][locale];
    const strongName = DIMENSION_NAMES_I18N[strongestKey][locale];
    const strongScore = (_d = scores[strongestKey]) != null ? _d : 75;
    const weakName = DIMENSION_NAMES_I18N[weakestKey][locale];
    const weakGuard = BLINDSPOT_GUARD_I18N[weakestKey][locale];
    const firstHighlight = project.highlights && project.highlights[0] || project.monthlyCost || "";
    const thirdHighlight = project.highlights && project.highlights[2] || project.highlights && project.highlights[1] || "";
    const whyItFits = buildWhyItFitsCopy(locale, {
      roleName,
      strongName,
      strongScore,
      projectName: project.name,
      categoryLabel: project.categoryLabel
    });
    const howToMakeMoney = firstHighlight ? firstHighlight.replace(/^【[^】]+】\s*|^\[[^\]]+\]\s*/, "") : project.monthlyCost || profile.revenueModel;
    const watchOutBlindspot = buildBlindspotCopy(locale, {
      weakName,
      weakGuard
    });
    const firstWeekAction = thirdHighlight ? thirdHighlight.replace(/^【[^】]+】\s*|^\[[^\]]+\]\s*/, "") : project.tagline;
    return {
      project,
      matchScore,
      primaryStrengthKey: strongestKey,
      weakestDimensionKey: weakestKey,
      whyItFits,
      howToMakeMoney,
      watchOutBlindspot,
      firstWeekAction
    };
  });
  recommendations.sort((a, b) => b.matchScore - a.matchScore);
  const limit = (_a = options.limit) != null ? _a : 3;
  return limit > 0 ? recommendations.slice(0, limit) : recommendations;
}
function buildWhyItFitsCopy(locale, params) {
  switch (locale) {
    case "zh-HK":
      return `\u4F5C\u70BA\u3010${params.roleName}\u3011\uFF0C\u4F60\u7684\u9577\u677F\u662F\u300C${params.strongName}\uFF08${params.strongScore}\u5206\uFF09\u300D\uFF0C\u5207\u5165\u300C${params.categoryLabel}\u300D\u8CFD\u9053\u7684 ${params.projectName} \u80FD\u76F4\u63A5\u653E\u5927\u4F60\u7684\u6838\u5FC3\u69D3\u687F\u3002`;
    case "en":
      return `As a ${params.roleName}, your top strength in ${params.strongName} (${params.strongScore}/100) gives you an immediate unfair advantage in ${params.projectName} (${params.categoryLabel}).`;
    case "ja":
      return `\u3010${params.roleName}\u3011\u3068\u3057\u3066\u306E\u5F37\u307F\u3067\u3042\u308B\u300C${params.strongName}\uFF08${params.strongScore}\u70B9\uFF09\u300D\u3092\u6D3B\u304B\u3057\u3001\u300C${params.categoryLabel}\u300D\u9818\u57DF\u306E ${params.projectName} \u3067\u6700\u77ED\u3067\u53CE\u76CA\u5316\u3092\u72D9\u3048\u307E\u3059\u3002`;
    case "ko":
      return `[${params.roleName}]\uB85C\uC11C \uBCF4\uC720\uD55C '${params.strongName}(${params.strongScore}\uC810)' \uAC15\uC810\uC744 \uC0B4\uB824 '${params.categoryLabel}' \uBD84\uC57C\uC758 ${params.projectName} \uBAA8\uB378\uC744 \uAC00\uC7A5 \uBE60\uB974\uAC8C \uC218\uC775\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`;
    default:
      return `\u4F5C\u4E3A\u3010${params.roleName}\u3011\uFF0C\u4F60\u7684\u957F\u677F\u662F\u300C${params.strongName}\uFF08${params.strongScore}\u5206\uFF09\u300D\uFF0C\u5207\u5165\u300C${params.categoryLabel}\u300D\u8D5B\u9053\u7684 ${params.projectName} \u80FD\u76F4\u63A5\u653E\u5927\u4F60\u7684\u6838\u5FC3\u6760\u6746\u3002`;
  }
}
function buildBlindspotCopy(locale, params) {
  switch (locale) {
    case "zh-HK":
      return `\u91DD\u5C0D\u4F60\u7684\u8584\u5F31\u9805\u300C${params.weakName}\u300D\uFF1A${params.weakGuard}`;
    case "en":
      return `Guardrail for your ${params.weakName} gap: ${params.weakGuard}`;
    case "ja":
      return `\u5F31\u70B9\u300C${params.weakName}\u300D\u3078\u306E\u5BFE\u7B56\uFF1A${params.weakGuard}`;
    case "ko":
      return `\uC57D\uC810 '${params.weakName}' \uBCF4\uC644 \uC804\uB7B5: ${params.weakGuard}`;
    default:
      return `\u9488\u5BF9\u4F60\u7684\u8584\u5F31\u9879\u300C${params.weakName}\u300D\uFF1A${params.weakGuard}`;
  }
}
function buildClientProjectBreakdownPost(project, rawLocale) {
  var _a, _b;
  const locale = normalizeHoxiLocale(rawLocale);
  const p = localizeProject(project, locale);
  const profile = p.matchProfile || inferProjectMatchProfile(p);
  const highlights = p.highlights || [];
  const h0 = highlights[0] || p.monthlyCost || profile.revenueModel;
  const h1 = highlights[1] || p.monthlyCost || "";
  const h2 = highlights[2] || p.tagline;
  const techHtml = (p.techStack || []).map((t) => `<code>${t}</code>`).join(" \xB7 ");
  const slug = String(p.storyUrl || "").replace(/^\/blog\//, "").replace(/\/$/, "") || `${p.id}-breakdown`;
  if (locale === "en" || locale === "ja" || locale === "ko") {
    const content2 = `
<p>${p.tagline} \u2014 ${p.description}</p>
<h2>1. Core Logic & Solo Builder Positioning</h2>
<p><strong>${p.name}</strong> operates in the <strong>${p.categoryLabel}</strong> track. Instead of burning venture capital on cold traffic, it targets a sharp, high-frequency B2B or cross-border pain point with an automated AI pipeline.</p>
<blockquote>
  <p><strong>Core Model Stack:</strong> <code>${p.modelUsed || "DeepSeek V3.2 + Claude Sonnet 4.6"}</code> (connected via <span data-hoxi-model="deepseek-v3"></span> and <span data-hoxi-model="claude-sonnet-4-6"></span>)</p>
</blockquote>
<h2>2. Monetization & Token Cost Ledger</h2>
<ul>
  <li><strong>Revenue Engine:</strong> ${h0}</li>
  <li><strong>Compute & Fixed Cost Ledger:</strong> ${h1}</li>
  <li><strong>Estimated Solo Revenue Ceiling:</strong> <code>${profile.monthlyRevenueEstimate || "$2,500 - $18,000 / mo"}</code></li>
</ul>
<h2>3. Required Capabilities & 5D Fit Profile</h2>
<ul>
  <li><strong>Role Fit Scores:</strong> Trade/Cross-Border <code>${profile.roles.trade}</code> \xB7 Growth <code>${profile.roles.growth}</code> \xB7 Product <code>${profile.roles.product}</code> \xB7 Developer <code>${profile.roles.developer}</code> \xB7 Designer <code>${profile.roles.designer}</code></li>
  <li><strong>5D Requirements:</strong> Market <code>${profile.dimensions.market}</code> / Delivery <code>${profile.dimensions.delivery}</code> / Distribution <code>${profile.dimensions.distribution}</code> / Leverage <code>${profile.dimensions.leverage}</code> / Grit <code>${profile.dimensions.resilience}</code></li>
  <li><strong>Required Stack:</strong> ${techHtml}</li>
</ul>
<h2>4. 7-Day Solo Launch Playbook</h2>
<ol>
  <li><strong>Day 1\u20132 (Minimal Loop):</strong> ${h2}</li>
  <li><strong>Day 3\u20134 (Billing & Token Guardrails):</strong> Wire prepaid credits and AINode model routing to keep gross margin above 78%.</li>
  <li><strong>Day 5\u20137 (5-Locale Acquisition):</strong> Publish localized landing pages (EN / ZH / ZH-HK / JA / KO) and close your first 10 paying customers.</li>
</ol>`.trim();
    return {
      slug,
      key: "projects",
      locale,
      type: "blog",
      title: `${p.name} \u2014 ${p.tagline}`,
      description: p.description,
      imageUrl: buildBlogOgCoverUrl(slug, locale),
      content: content2,
      createdAt: ((_a = p.sourceMeta) == null ? void 0 : _a.lastSyncedAt) || "2026-04-16"
    };
  }
  const content = `
<p>${p.tagline} \u2014\u2014 ${p.description}</p>
<h2>\u4E00\u3001\u9879\u76EE\u5E95\u5C42\u903B\u8F91\uFF1A\u4E3A\u4EC0\u4E48\u9002\u5408\u4E00\u4EBA\u516C\u53F8\u5207\u5165\uFF1F</h2>
<p>\u5728\u4E00\u4EBA\u516C\u53F8\u4E0E\u5916\u8D38\u8DE8\u5883\u5B9E\u6218\u4F53\u7CFB\u91CC\uFF0C<strong>${p.name}</strong>\uFF08\u8D5B\u9053\u5206\u7C7B\uFF1A<strong>${p.categoryLabel}</strong>\uFF09\u5C5E\u4E8E\u5178\u578B\u7684\u9AD8\u73B0\u91D1\u6D41\u786E\u5B9A\u6027\u6807\u7684\u3002\u5B83\u76F4\u63A5\u5207\u5165\u771F\u5B9E\u5546\u4E1A\u573A\u666F\u4E2D\u6700\u75DB\u7684\u6548\u7387\u5361\u70B9\uFF0C\u7528 AI \u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41\u66FF\u4EE3\u6602\u8D35\u7684\u4EBA\u529B\u6210\u672C\u3002</p>
<blockquote>
  <p><strong>\u5EFA\u8BAE\u4E3B\u529B\u6A21\u578B\u6808\uFF1A</strong><code>${p.modelUsed || "DeepSeek V3.2 + Claude Sonnet 4.6"}</code>\uFF08\u76F4\u8FDE <span data-hoxi-model="deepseek-v3"></span> \u4E0E <span data-hoxi-model="claude-sonnet-4-6"></span> \u4E13\u7EBF\u8DEF\u7531\uFF09</p>
</blockquote>
<h2>\u4E8C\u3001\u600E\u4E48\u8D5A\u94B1\u4E0E\u7B97\u529B\u6210\u672C\u8D26\u672C\uFF08Unit Economics\uFF09</h2>
<ul>
  <li><strong>\u53D8\u73B0\u95ED\u73AF\uFF1A</strong>${h0}</li>
  <li><strong>\u7B97\u529B\u4E0E\u56FA\u5B9A\u6210\u672C\u8D26\u672C\uFF1A</strong>${h1}</li>
  <li><strong>\u9884\u4F30\u6708\u5EA6\u8425\u6536\u7A7A\u95F4\uFF1A</strong><code>${profile.monthlyRevenueEstimate || "$2,500 - $18,000 / mo"}</code></li>
</ul>
<h2>\u4E09\u3001\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u4E0E\u88C5\u5907\u6808\uFF08\u4E94\u7EF4\u80FD\u529B & \u4E94\u89D2\u8272\u5951\u5408\u5EA6\uFF09</h2>
<ul>
  <li><strong>\u4E94\u7C7B\u4EBA\u7FA4\u5951\u5408\u5206\uFF1A</strong>\u5916\u8D38/\u8DE8\u5883\u5356\u5BB6 <code>${profile.roles.trade}\u5206</code> \xB7 \u8FD0\u8425/\u589E\u957F <code>${profile.roles.growth}\u5206</code> \xB7 \u4EA7\u54C1\u7ECF\u7406 <code>${profile.roles.product}</code> \xB7 \u7814\u53D1/\u7A0B\u5E8F\u5458 <code>${profile.roles.developer}\u5206</code> \xB7 \u8BBE\u8BA1\u5E08 <code>${profile.roles.designer}\u5206</code></li>
  <li><strong>\u4E94\u7EF4\u95E8\u69DB\u5206\u5E03\uFF1A</strong>\u5546\u4E1A\u9A8C\u8BC1 <code>${profile.dimensions.market}</code> / \u5168\u6808\u4EA4\u4ED8 <code>${profile.dimensions.delivery}</code> / \u6D41\u91CF\u5206\u53D1 <code>${profile.dimensions.distribution}</code> / \u7B97\u529B\u6760\u6746 <code>${profile.dimensions.leverage}</code> / \u5FC3\u667A\u97E7\u6027 <code>${profile.dimensions.resilience}</code></li>
  <li><strong>\u5FC5\u5907\u80FD\u529B\u4E0E\u88C5\u5907\u6808\uFF1A</strong>${techHtml}</li>
</ul>
<h2>\u56DB\u3001\u600E\u4E48\u64CD\u4F5C\uFF1A7 \u5929\u51B7\u542F\u52A8\u843D\u5730\u624B\u518C</h2>
<ol>
  <li><strong>Day 1\u20132\uFF08\u6700\u5C0F\u95ED\u73AF\u642D\u5EFA\uFF09\uFF1A</strong>${h2}</li>
  <li><strong>Day 3\u20134\uFF08\u7B97\u529B\u7F51\u5173\u4E0E\u6536\u6B3E\u63A5\u5165\uFF09\uFF1A</strong>\u63A5\u5165 AINode \u4E13\u7EBF API Key \u4E0E\u9884\u5145\u503C\u79EF\u5206\u62E6\u622A\uFF0C\u628A\u7EFC\u5408\u6BDB\u5229\u7387\u9501\u6B7B\u5728 78% \u4EE5\u4E0A\u3002</li>
  <li><strong>Day 5\u20137\uFF08\u4E94\u8BED\u79CD\u5206\u53D1\u83B7\u5BA2\uFF09\uFF1A</strong>\u4E0A\u7EBF\u82F1/\u4E2D/\u7E41/\u65E5/\u97E9 5 \u8BED\u79CD SEO \u5BF9\u6BD4\u843D\u5730\u9875\u4E0E\u81EA\u52A8\u5316\u5916\u8054\uFF0C\u8DD1\u901A\u524D 10 \u4E2A\u771F\u5B9E\u4ED8\u8D39\u5BA2\u6237\u3002</li>
</ol>`.trim();
  return {
    slug,
    key: "projects",
    locale,
    type: "blog",
    title: `${p.name}\uFF1A${p.tagline}`,
    description: p.description,
    imageUrl: buildBlogOgCoverUrl(slug, locale),
    content,
    createdAt: ((_b = p.sourceMeta) == null ? void 0 : _b.lastSyncedAt) || "2026-04-16"
  };
}

export { SEED_PROJECT_RUN_MANIFESTS as S, normalizeProjectRunManifest as a, buildClientProjectBreakdownPost as b, getRunModeActionCopy as c, getCategoryLabelForLocale as g, inferProjectMatchProfile as i, localizeProject as l, mergeProjectLocales as m, normalizeHoxiLocale as n, rankProjectsForUser as r };
//# sourceMappingURL=projectMatcher-mcLmK4UC.mjs.map
