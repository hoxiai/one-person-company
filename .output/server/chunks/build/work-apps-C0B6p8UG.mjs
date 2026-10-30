import { e as useToast, v as _sfc_main$q, G as _sfc_main$p, b as _sfc_main$A, _ as _sfc_main$Y, k as _sfc_main$O, i as _sfc_main$T, n as _sfc_main$I, a as _sfc_main$w, c as _sfc_main$s, B as _sfc_main$l } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
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

const hoxiPlatformWorkApps = [
  {
    id: "shopify",
    name: "Shopify \u72EC\u7ACB\u7AD9\u8FD0\u8425",
    shortName: "Shopify",
    heroTitle: "Shopify AI\uFF0C\u4E00\u7AD9\u5F0F\u5168\u7403\u72EC\u7ACB\u7AD9\u8FD0\u8425 Agent",
    tagline: "\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4E0A\u67B6\u3001Liquid \u4E3B\u9898\u88C5\u4FEE\u3001\u6298\u6263\u6D3B\u52A8\u4E0E\u5F03\u5355\u633D\u56DE\u4E13\u5BB6",
    skillName: "shopify-ops",
    iconBg: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)",
    iconGlyph: "S",
    mascotEmoji: "\u{1F6CD}\uFE0F",
    mascotTitle: "Shopify \u589E\u957F\u5E97\u957F",
    connectionLabel: "\u767B\u5F55 Shopify MCP",
    connectionUrlLabel: "Shopify \u5E97\u94FA\u57DF\u540D (*.myshopify.com \u6216\u4E3B\u57DF\u540D)",
    connectionUrlPlaceholder: "https://your-store.myshopify.com",
    connectionTokenLabel: "Shopify Admin Access Token (shpat_...\uFF0C\u53EF\u9009)",
    connectionTokenPlaceholder: "shpat_xxxxxxxxxxxxxxxxxxxxxxxx\uFF08\u7559\u7A7A\u5219\u8D70 Hoxi.ai \u4E00\u952E\u6388\u6743\uFF09",
    mcp: {
      serverId: "shopify-mcp",
      name: "Shopify \u5B98\u65B9\u5E97\u52A1 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "oauth",
      authUrl: "/api/hoxi/work/oauth/shopify/authorize",
      consoleUrl: "/user/tokens",
      scopes: [
        "mcp:tools",
        "mcp:profile:read",
        "mcp:orders:read",
        "mcp:subscriptions:read",
        "mcp:theme:read",
        "mcp:theme:plan"
      ],
      toolsPreview: [
        "shopify.products_upsert",
        "shopify.theme_liquid_patch",
        "shopify.discounts_manage",
        "shopify.orders_inventory_audit"
      ]
    },
    categories: [
      {
        id: "product-merchandising",
        label: "\u5546\u54C1\u4E0E\u53D8\u4F53\u4E0A\u67B6",
        icon: "\u{1F4E6}",
        placeholder: "\u8F93\u5165\u65B0\u54C1\u4FE1\u606F\u3001\u4F9B\u5E94\u5546\u53C2\u6570\u8868\u6216\u7ADE\u54C1\u94FE\u63A5\uFF0C\u4E00\u952E\u751F\u6210 Shopify \u9AD8\u8F6C\u5316\u5546\u54C1\u9875\u4E0E\u53D8\u4F53\u65B9\u6848...",
        chips: [
          {
            id: "shopify-pdp-listing",
            label: "\u9AD8\u8F6C\u5316 Shopify \u5546\u54C1\u4E0A\u67B6\u5168\u6848",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u6838\u5FC3\u5356\u70B9\u4E0E\u76EE\u6807\u5E02\u573A\uFF0C\u751F\u6210 SEO Title\u30015 \u70B9\u5229\u76CA\u3001OS 2.0 \u8BE6\u60C5\u4E0E Metafields...",
            starterPrompt: "\u8BF7\u4F7F\u7528 Shopify \u8FD0\u8425\u6280\u80FD\uFF0C\u4E3A\u4EE5\u4E0B\u5546\u54C1\u8F93\u51FA\u53EF\u76F4\u63A5\u4E0A\u67B6\u7684\u5B8C\u6574\u9AD8\u8F6C\u5316\u65B9\u6848\uFF08\u5305\u542B SEO Title & URL Handle\u3001\u9996\u5C4F 5 \u5927\u75DB\u70B9\u5229\u76CA Bullet Points\u3001\u6A21\u5757\u5316\u8BE6\u60C5\u9875 HTML/Markdown\u3001Collections \u5F52\u7C7B\u89C4\u5219\u3001custom.* Metafields \u5B57\u6BB5\u5EFA\u8BAE\u53CA 155 \u5B57\u7B26 Meta Description\uFF09\uFF1A\n\n\u5546\u54C1\u8D44\u6599\u4E0E\u76EE\u6807\u5E02\u573A\uFF1A"
          },
          {
            id: "shopify-variants-bundle",
            label: "\u591A\u89C4\u683C\u53D8\u4F53\u4E0E\u9636\u68AF\u52A0\u8D2D\u5B9A\u4EF7",
            placeholder: "\u8F93\u5165\u5355\u4EF6\u6210\u672C\u4E0E\u552E\u4EF7\uFF0C\u8BBE\u8BA1 Variants \u89C4\u683C\u77E9\u9635\u4E0E\u4E70\u591A\u7701\u591A\uFF08Tiered Bundle\uFF09\u52A0\u8D2D\u65B9\u6848...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u4E3A\u8FD9\u6B3E Shopify \u4E3B\u63A8\u5546\u54C1\u8BBE\u8BA1\u63D0\u5347 AOV\uFF08\u5BA2\u5355\u4EF7\uFF09\u7684\u89C4\u683C\u53D8\u4F53\uFF08Variants\uFF09\u4E0E 3 \u6863\u9636\u68AF\u8D2D\u4E70\u65B9\u6848\uFF081 \u4EF6\u6807\u51C6\u88C5 / 2 \u4EF6\u6700\u53D7\u6B22\u8FCE\u88C5\u7701 15% / 3 \u4EF6\u5BB6\u5EAD\u56E4\u8D27\u88C5\u7701 25% + \u514D\u90AE\uFF09\uFF0C\u5E76\u7ED9\u51FA Cart Drawer \u987A\u624B\u4E70\u4E00\u4EF6\uFF08Order Bump\uFF09\u914D\u7F6E\u5EFA\u8BAE\uFF1A\n\n\u5546\u54C1\u6210\u672C\u4E0E\u76EE\u6807\u552E\u4EF7\uFF1A"
          },
          {
            id: "shopify-chrome-link-fill",
            label: "Chrome Link \u81EA\u52A8\u586B\u5165 Shopify \u540E\u53F0",
            placeholder: "\u5C06\u5B9A\u7A3F\u7684\u5546\u54C1\u6807\u9898\u3001\u8BE6\u60C5\u4E0E\u53D8\u4F53\u4EF7\u683C\u534A\u81EA\u52A8\u586B\u5165\u5DF2\u6253\u5F00\u7684 Shopify Admin \u6807\u7B7E\u9875...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `shopify-ops` \u6280\u80FD\u914D\u5408 `hoxi_browser`\uFF08Chrome Link\uFF09\uFF0C\u5C06\u6211\u4EEC\u5B9A\u7A3F\u7684\u5546\u54C1\u6807\u9898\u3001\u8BE6\u60C5\u63CF\u8FF0\u3001SEO Handle \u4E0E\u53D8\u4F53\u4EF7\u683C\u81EA\u52A8\u586B\u5165\u6211\u5F53\u524D\u5DF2\u6253\u5F00\u7684 Shopify Admin \u5546\u54C1\u7F16\u8F91\u6807\u7B7E\u9875\u4E2D\uFF0C\u5E76\u5728\u70B9\u51FB\u6700\u7EC8 Save \u6309\u94AE\u524D\u505C\u4E0B\u8BA9\u6211\u6838\u5BF9\u786E\u8BA4\uFF1A\n\n\u5F85\u586B\u5165\u5546\u54C1\u6216\u6307\u4EE4\uFF1A"
          },
          {
            id: "shopify-csv-batch",
            label: "\u751F\u6210 Shopify \u6279\u91CF\u5BFC\u5165 CSV \u6A21\u677F",
            placeholder: "\u7C98\u8D34\u591A\u6B3E\u5546\u54C1\u6216 SKU \u53C2\u6570\uFF0C\u751F\u6210\u7B26\u5408 Shopify \u6807\u51C6\u5B57\u6BB5\u7684\u6279\u91CF\u5BFC\u5165\u8868\u683C...",
            starterPrompt: "\u8BF7\u5C06\u4EE5\u4E0B\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4FE1\u606F\u6574\u7406\u4E3A\u7B26\u5408 Shopify \u5B98\u65B9\u4EA7\u54C1\u5BFC\u5165\u89C4\u8303\u7684\u7ED3\u6784\u5316\u8868\u683C\u4E0E\u5B57\u6BB5\u6E05\u5355\uFF08\u542B Handle\u3001Title\u3001Body HTML\u3001Vendor\u3001Product Category\u3001Type\u3001Tags\u3001Option1 Name/Value\u3001Variant Price/Compare At Price\u3001Variant SKU\uFF09\uFF1A\n\n\u539F\u59CB\u5546\u54C1\u6E05\u5355\uFF1A"
          }
        ]
      },
      {
        id: "liquid-theme-cro",
        label: "Liquid \u4E3B\u9898\u4E0E\u88C5\u4FEE",
        icon: "\u{1F3A8}",
        placeholder: "\u63CF\u8FF0\u4F60\u60F3\u5B9A\u5236\u7684 Shopify \u9875\u9762\u6A21\u5757\u6216\u7C98\u8D34\u5E97\u94FA\u94FE\u63A5\uFF0C\u751F\u6210 Liquid Section \u4EE3\u7801\u6216 CRO \u8F6C\u5316\u8BCA\u65AD...",
        chips: [
          {
            id: "liquid-section-builder",
            label: "\u5B9A\u5236 OS 2.0 Liquid Section \u6A21\u5757",
            placeholder: "\u63CF\u8FF0\u60F3\u8981\u7684\u6A21\u5757\u6548\u679C\uFF08\u5982\u5E26\u89C6\u9891\u5F39\u7A97\u7684\u5BF9\u6BD4\u8868\u3001\u60AC\u6D6E\u52A0\u8D2D\u6761\u3001\u6EDA\u52A8\u8BC4\u6D4B\u5899\uFF09...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u7F16\u5199\u4E00\u4E2A\u517C\u5BB9 Shopify Online Store 2.0\uFF08\u5982 Dawn \u4E3B\u9898\uFF09\u7684\u72EC\u7ACB `.liquid` Section \u6587\u4EF6\uFF08\u5305\u542B\u54CD\u5E94\u5F0F\u6837\u5F0F\u3001\u79FB\u52A8\u7AEF\u89E6\u63A7\u4F18\u5316\u4EE5\u53CA\u5B8C\u6574\u7684 `{% schema %}` \u53EF\u89C6\u5316\u914D\u7F6E JSON\uFF0C\u652F\u6301\u5728 Theme Editor \u4E2D\u76F4\u63A5\u62D6\u62FD\u7F16\u8F91\uFF09\uFF1A\n\n\u6A21\u5757\u529F\u80FD\u4E0E\u89C6\u89C9\u9700\u6C42\uFF1A"
          },
          {
            id: "shopify-cro-audit",
            label: "\u5E97\u94FA\u8F6C\u5316\u7387\uFF08CRO\uFF09\u4E0E\u5F03\u8D2D\u8BCA\u65AD",
            placeholder: "\u8F93\u5165 Shopify \u5E97\u94FA\u7F51\u5740\u6216\u63CF\u8FF0\u5F53\u524D\u6D41\u91CF/\u52A0\u8D2D\u6570\u636E\uFF0C\u6392\u67E5\u4ECE\u843D\u5730\u9875\u5230\u7ED3\u8D26\u7684\u6D41\u5931\u5361\u70B9...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u5BF9\u76EE\u6807 Shopify \u72EC\u7ACB\u7AD9\u8FDB\u884C\u5168\u94FE\u8DEF CRO \u8F6C\u5316\u7387\u4F53\u68C0\uFF08\u6DB5\u76D6\u79FB\u52A8\u7AEF\u9996\u5C4F\u9EC4\u91D1 5 \u79D2\u4EF7\u503C\u4E3B\u5F20\u3001\u4EF7\u683C\u4E0E\u4FE1\u4EFB\u5FBD\u7AE0\u5E03\u5C40\u3001Add to Cart \u6309\u94AE\u663E\u8457\u5EA6\u3001Cart Drawer \u514D\u90AE\u8FDB\u5EA6\u6761\u3001Shop Pay/PayPal \u5FEB\u6377\u652F\u4ED8\u9732\u51FA\u4E0E\u9875\u9762\u52A0\u8F7D\u6027\u80FD\uFF09\uFF0C\u8F93\u51FA\u6309 ROI \u6392\u5E8F\u7684\u6539\u7248\u6E05\u5355\uFF1A\n\n\u5E97\u94FA\u7F51\u5740\u6216\u73B0\u72B6\uFF1A"
          },
          {
            id: "collection-seo-architecture",
            label: "Collections \u5BFC\u822A\u4E0E\u96C6\u5408\u9875\u89C4\u5212",
            placeholder: "\u8F93\u5165\u5E97\u94FA\u4E3B\u8425\u54C1\u7C7B\uFF0C\u89C4\u5212\u9AD8\u8F6C\u5316\u5BFC\u822A\u83DC\u5355\u3001Automated Collections \u89C4\u5219\u4E0E\u96C6\u5408\u9875\u6587\u6848...",
            starterPrompt: "\u8BF7\u4E3A\u6211\u7684 Shopify \u5E97\u94FA\u89C4\u5212\u4E00\u5957\u6E05\u6670\u7684\u9876\u680F Mega Menu \u5BFC\u822A\u7ED3\u6784\u3001Automated Collections \u81EA\u52A8\u5F52\u96C6\u6761\u4EF6\uFF08\u6309 Tag/Type/Price\uFF09\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u6838\u5FC3 Collection \u7F16\u5199\u9996\u5C4F\u5BFC\u8D2D\u5F15\u8A00\u4E0E\u5E95\u90E8 SEO \u5BCC\u6587\u672C\uFF1A\n\n\u4E3B\u8425\u54C1\u7C7B\u4E0E\u4EA7\u54C1\u7EBF\uFF1A"
          }
        ]
      },
      {
        id: "promo-retention",
        label: "\u6298\u6263\u5927\u4FC3\u4E0E\u5F03\u5355\u633D\u56DE",
        icon: "\u{1F525}",
        placeholder: "\u7B56\u5212\u9ED1\u4E94\u7F51\u4E00/\u6362\u5B63\u95EA\u4FC3\u6298\u6263\u89C4\u5219\uFF0C\u6216\u7F16\u5199 Klaviyo / Shopify Email \u5F03\u5355\u633D\u56DE\u90AE\u4EF6\u5E8F\u5217...",
        chips: [
          {
            id: "abandoned-checkout-klaviyo",
            label: "\u5F03\u5355\u633D\u56DE 3 \u5C01\u9AD8\u8F6C\u5316\u90AE\u4EF6\u6D41",
            placeholder: "\u8F93\u5165\u4E3B\u63A8\u54C1\u7C7B\u4E0E\u6700\u5927\u53EF\u7ED9\u6298\u6263\uFF0C\u751F\u6210 1h / 24h / 48h \u5F03\u5355\u53EC\u56DE\u90AE\u4EF6\uFF08\u4E2D\u82F1\u53CC\u8BED\uFF09...",
            starterPrompt: "\u8BF7\u4E3A\u6211\u7684 Shopify \u72EC\u7ACB\u7AD9\u7F16\u5199\u4E00\u5957\u53EF\u76F4\u63A5\u914D\u7F6E\u5230 Shopify Email / Klaviyo \u7684\u300CAbandoned Checkout \u5F03\u5355\u633D\u56DE\u300D3 \u5C01\u81EA\u52A8\u5316\u90AE\u4EF6\u5E8F\u5217\uFF08\u7B2C 1 \u5C01 1 \u5C0F\u65F6\u540E\u65E0\u6298\u6263\u6E29\u67D4\u63D0\u9192 + \u5BA2\u670D\u7B54\u7591\uFF0C\u7B2C 2 \u5C01 24 \u5C0F\u65F6\u540E\u6838\u5FC3\u5356\u70B9 + \u4E70\u5BB6\u771F\u5B9E\u597D\u8BC4\u6253\u6D88\u987E\u8651\uFF0C\u7B2C 3 \u5C01 48 \u5C0F\u65F6\u540E\u9650\u65F6\u4E13\u5C5E\u6298\u6263\u7801\u6700\u540E\u50AC\u5355\uFF09\uFF0C\u542B A/B \u6D4B\u8BD5\u4E3B\u9898\u884C\uFF08Subject Line & Preview Text\uFF09\uFF1A\n\n\u5546\u54C1\u54C1\u7C7B\u4E0E\u6298\u6263\u7801\uFF1A"
          },
          {
            id: "bfcm-flash-campaign",
            label: "\u5168\u7AD9\u5927\u4FC3\uFF08BFCM/\u95EA\u4FC3\uFF09\u6D3B\u52A8\u7B56\u5212",
            placeholder: "\u8F93\u5165\u4FC3\u9500\u76EE\u6807\u4E0E\u6BDB\u5229\u7387\uFF0C\u8BBE\u8BA1\u9636\u68AF\u6EE1\u51CF\u3001\u4E70\u8D60\uFF08BOGO\uFF09\u4E0E\u5168\u7AD9\u9884\u70ED\u5012\u8BA1\u65F6\u65B9\u6848...",
            starterPrompt: "\u8BF7\u7ED3\u5408\u6211\u7684\u6BDB\u5229\u7ED3\u6784\uFF0C\u5E2E\u6211\u7B56\u5212\u4E00\u573A\u9AD8 ROI \u7684 Shopify \u5168\u7AD9\u4FC3\u9500\u6D3B\u52A8\uFF08\u542B Automatic Discount \u81EA\u52A8\u9636\u68AF\u6EE1\u51CF\u89C4\u5219\u3001VIP \u63D0\u524D\u8D2D\u6298\u6263\u7801\u3001Announcement Bar \u9876\u90E8\u516C\u544A\u680F\u8F6E\u64AD\u6587\u6848\u3001\u9996\u9875\u4E3B\u6A2A\u5E45\u6587\u6848\u4E0E\u793E\u5A92\u9884\u70ED\u8282\u594F\uFF09\uFF1A\n\n\u5E73\u5747\u5BA2\u5355\u4EF7\u4E0E\u6BDB\u5229\u7A7A\u95F4\uFF1A"
          }
        ]
      },
      {
        id: "orders-inventory",
        label: "\u8BA2\u5355\u5C65\u7EA6\u4E0E\u5E93\u5B58",
        icon: "\u{1F4CA}",
        placeholder: "\u5DE1\u68C0 Shopify \u5E97\u94FA GMV \u5927\u76D8\u3001\u6392\u67E5\u5F02\u5E38/\u9AD8\u98CE\u9669\u8BA2\u5355\u3001\u6D4B\u7B97\u70ED\u9500 SKU \u8865\u8D27\u9884\u8B66...",
        chips: [
          {
            id: "daily-store-pulse",
            label: "\u4ECA\u65E5 GMV\u3001\u8F6C\u5316\u6F0F\u6597\u4E0E\u5F02\u5E38\u5DE1\u68C0",
            placeholder: "\u4E00\u952E\u6C47\u603B\u5E97\u94FA\u8BA2\u5355\u3001\u5BA2\u5355\u4EF7\u3001\u6D41\u91CF\u8F6C\u5316\u7387\u53CA\u5F85\u5904\u7406\u5F02\u5E38\u5C65\u7EA6...",
            starterPrompt: "\u8BF7\u8C03\u7528 Shopify \u8FD0\u8425\u6280\u80FD\uFF0C\u5DE1\u68C0\u5F53\u524D\u5E97\u94FA\u7684\u6838\u5FC3\u7ECF\u8425\u6307\u6807\uFF08\u4ECA\u65E5\u4E0E\u8FD1 7 \u5929\u9500\u552E\u989D GMV\u3001\u8BA2\u5355\u91CF\u3001AOV \u5BA2\u5355\u4EF7\u3001\u52A0\u8D2D\u2192\u53D1\u8D77\u7ED3\u8D26\u2192\u652F\u4ED8\u6210\u529F\u6F0F\u6597\u8F6C\u5316\u7387\u3001\u8D85\u65F6\u672A\u53D1\u8D27\u8BA2\u5355\u4E0E\u9AD8\u6B3A\u8BC8\u98CE\u9669\u8BA2\u5355\uFF09\uFF0C\u5E76\u7ED9\u51FA\u4ECA\u65E5\u6700\u7D27\u8FEB\u7684 3 \u9879\u8FD0\u8425\u52A8\u4F5C\uFF1A"
          },
          {
            id: "sku-restock-forecast",
            label: "\u65AD\u8D27\u9884\u8B66\u4E0E\u6162\u52A8\u9500\u5E93\u5B58\u6E05\u7406",
            placeholder: "\u8F93\u5165\u70ED\u9500 SKU \u65E5\u5747\u9500\u91CF\u4E0E\u5907\u8D27\u5468\u671F\uFF0C\u8BA1\u7B97\u5B89\u5168\u5E93\u5B58\u7EBF\u4E0E\u6EDE\u9500\u6B3E\u6346\u7ED1\u6E05\u4ED3\u65B9\u6848...",
            starterPrompt: "\u8BF7\u6839\u636E\u4EE5\u4E0B SKU \u7684\u5E93\u5B58\u4F59\u91CF\u3001\u8FD1 14 \u5929\u65E5\u5747\u9500\u91CF\u4E0E\u4F9B\u5E94\u5546\u4EA4\u671F\uFF08Lead Time\uFF09\uFF0C\u8BA1\u7B97\u6BCF\u4E2A SKU \u7684\u65AD\u8D27\u5012\u8BA1\u65F6\u4E0E\u5EFA\u8BAE\u8865\u8D27\u91CF\uFF0C\u5E76\u4E3A\u5468\u8F6C\u8D85\u8FC7 60 \u5929\u7684\u6162\u52A8\u9500\u5E93\u5B58\u8BBE\u8BA1 Mystery Box\uFF08\u76F2\u76D2\uFF09\u6216\u6EE1\u8D60\u6E05\u4ED3\u65B9\u6848\uFF1A\n\n\u5E93\u5B58\u4E0E\u9500\u91CF\u6570\u636E\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 1,
    hidden: false
  },
  {
    id: "tiktok-shop",
    name: "TikTok Shop \u5E26\u8D27",
    shortName: "TikTok Shop",
    heroTitle: "TikTok Shop AI\uFF0C\u8DE8\u5883\u5C0F\u5E97\u4E0E\u77ED\u89C6\u9891\u5E26\u8D27 Agent",
    tagline: "\u7F8E\u533A/\u4E1C\u5357\u4E9A\u5C0F\u5E97\u9009\u54C1\u4E0A\u67B6\u3001Affiliate \u8FBE\u4EBA\u5EFA\u8054\u9080\u7EA6\u3001\u6302\u8F66\u811A\u672C\u4E0E GMV Max \u6295\u6D41",
    skillName: "tiktok-shop-ops",
    iconBg: "linear-gradient(135deg, #09090B 0%, #EC4899 55%, #06B6D4 100%)",
    iconGlyph: "\u266A",
    mascotEmoji: "\u{1F3B5}",
    mascotTitle: "TikTok \u7206\u5355\u64CD\u76D8\u624B",
    connectionLabel: "\u767B\u5F55 TikTok Shop MCP",
    connectionUrlLabel: "TikTok Shop \u5E97\u94FA\u5730\u533A / \u5E97\u94FA\u540D\u79F0",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1AUS \u7F8E\u533A\u8DE8\u5883\u5E97 \xB7 LumiHome Official",
    connectionTokenLabel: "TikTok Shop App Key / \u6388\u6743 Token (\u53EF\u9009)",
    connectionTokenPlaceholder: "ttp_live_xxxxxxxxxxxxxxxx\uFF08\u7559\u7A7A\u5219\u8D70 Hoxi.ai \u4E00\u952E\u6388\u6743\uFF09",
    mcp: {
      serverId: "tiktok-shop-mcp",
      name: "TikTok Shop \u8DE8\u5883\u5E26\u8D27 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "tiktok.product_listing_optimize",
        "tiktok.affiliate_outreach_gen",
        "tiktok.shoppable_video_script",
        "tiktok.gmv_max_diagnose"
      ]
    },
    categories: [
      {
        id: "affiliate-outreach",
        label: "\u8FBE\u4EBA\u5EFA\u8054\u5BC4\u6837",
        icon: "\u{1F91D}",
        placeholder: "\u8F93\u5165\u5546\u54C1\u5356\u70B9\u4E0E\u4F63\u91D1\u6BD4\u4F8B\uFF0C\u6279\u91CF\u751F\u6210\u9AD8\u56DE\u590D\u7387 TikTok \u8FBE\u4EBA\u79C1\u4FE1\uFF08DM\uFF09\u3001\u90AE\u4EF6\u4E0E\u5BC4\u6837\u50AC\u7247\u8BDD\u672F...",
        chips: [
          {
            id: "creator-dm-templates",
            label: "\u9AD8\u56DE\u590D\u7387\u8FBE\u4EBA\u9080\u7EA6 DM + \u90AE\u4EF6\u5305",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u723D\u70B9\u4E0E\u4F63\u91D1\u6BD4\u4F8B\uFF08\u5982 20%\uFF09\uFF0C\u751F\u6210\u7F8E\u533A/\u82F1\u533A\u5730\u9053\u8FBE\u4EBA\u5EFA\u8054\u8BDD\u672F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 TikTok Shop \u8FD0\u8425\u6280\u80FD\uFF0C\u4E3A\u4EE5\u4E0B\u5546\u54C1\u7F16\u5199\u4E00\u5957\u5730\u9053\u6BCD\u8BED\u7EA7\uFF08\u7F8E\u533A/\u82F1\u533A Creator \u4E60\u60EF\uFF0C\u62D2\u7EDD\u751F\u786C\u7FA4\u53D1\u611F\uFF09\u7684 Affiliate \u8FBE\u4EBA\u5EFA\u8054\u8BDD\u672F\u5305\uFF08\u5305\u542B\uFF1A300 \u5B57\u7B26\u5185\u9AD8\u6253\u5F00\u7387 TikTok \u79C1\u4FE1 DM\u3001\u6DF1\u5EA6\u5408\u4F5C\u9080\u7EA6 Email\u3001Target Collaboration \u5B9A\u5411\u9AD8\u4F63\u9080\u8BF7\u5361\u6587\u6848\uFF0C\u4EE5\u53CA\u9636\u68AF\u5956\u52B1\u673A\u5236\uFF09\uFF1A\n\n\u4EA7\u54C1\u5356\u70B9\u4E0E\u4F63\u91D1\u6BD4\u4F8B\uFF1A"
          },
          {
            id: "sample-followup-sop",
            label: "\u5BC4\u6837\u7B7E\u6536\u8DDF\u8FDB\u4E0E\u50AC\u7247 Creative Brief",
            placeholder: "\u9488\u5BF9\u5DF2\u6536\u6837\u672A\u53D1\u89C6\u9891\u7684\u8FBE\u4EBA\uFF0C\u751F\u6210\u4E0D\u60F9\u4EBA\u53CD\u611F\u7684\u8DDF\u8FDB\u8BDD\u672F\u4E0E 3 \u4E2A\u6613\u7206\u62CD\u6444\u7075\u611F...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u9488\u5BF9\u300C\u6837\u54C1\u5DF2\u7B7E\u6536\uFF08Sample Delivered\uFF09\u4F46\u5C1A\u672A\u51FA\u7247\u300D\u7684 TikTok \u8FBE\u4EBA\uFF0C\u7F16\u5199\u4E00\u5957\u9AD8\u60C5\u5546\u8DDF\u8FDB\u8BDD\u672F\uFF08\u7B7E\u6536\u5F53\u65E5\u7075\u611F\u5582\u996D + \u7B7E\u6536\u7B2C 4 \u5929\u6E29\u548C\u63D0\u9192 + \u7B7E\u6536\u7B2C 7 \u5929\u70ED\u70B9\u94A9\u5B50\u52A9\u653B\uFF09\uFF0C\u5E76\u9644\u4E0A\u4E00\u4EFD 1 \u5206\u949F\u80FD\u770B\u61C2\u7684\u300A3 Angles Creative Brief \u7206\u6B3E\u62CD\u6444\u63D0\u793A\u5361\u300B\uFF1A\n\n\u5546\u54C1\u540D\u79F0\u4E0E\u6838\u5FC3\u6F14\u793A\u70B9\uFF1A"
          },
          {
            id: "spark-ads-code-request",
            label: "\u7206\u6B3E\u8FBE\u4EBA\u89C6\u9891\u6295\u6D41\u6388\u6743\uFF08Spark Ads Code\uFF09\u8BDD\u672F",
            placeholder: "\u8FBE\u4EBA\u89C6\u9891\u81EA\u7136\u6D41\u8D77\u91CF\u540E\uFF0C\u5FEB\u901F\u7D22\u53D6\u5E7F\u544A\u6388\u6743\u7801\uFF08Ad Code\uFF09\u5E76\u8C08\u6210\u957F\u671F\u7ED1\u5B9A...",
            starterPrompt: "\u4E00\u4F4D\u5408\u4F5C\u8FBE\u4EBA\u7684\u6302\u8F66\u89C6\u9891\u81EA\u7136\u6D41\u6570\u636E\u8868\u73B0\u6781\u4F73\uFF0C\u8BF7\u5E2E\u6211\u7F16\u5199\u4E00\u6BB5\u65E2\u771F\u8BDA\u8D5E\u7F8E\u53C8\u4E13\u4E1A\u9AD8\u6548\u7684\u82F1\u6587\u6C9F\u901A\u8BDD\u672F\uFF0C\u5411\u8FBE\u4EBA\u7533\u8BF7 30/60 \u5929 Spark Ads \u5E7F\u544A\u6295\u6D41\u6388\u6743\u7801\uFF08Authorization Code\uFF09\uFF0C\u5E76\u987A\u52BF\u63D0\u51FA\u72EC\u5BB6\u8FDE\u66F4\u6FC0\u52B1\u65B9\u6848\uFF1A\n\n\u8FBE\u4EBA\u89C6\u9891\u8868\u73B0\u4E0E\u9884\u7B97\u6FC0\u52B1\uFF1A"
          }
        ]
      },
      {
        id: "shoppable-video",
        label: "\u6302\u8F66\u77ED\u89C6\u9891\u811A\u672C",
        icon: "\u{1F3AC}",
        placeholder: "\u8F93\u5165\u5546\u54C1\u75DB\u70B9\uFF0C\u751F\u6210\u524D 3 \u79D2\u9EC4\u91D1\u7559\u4EBA\u94A9\u5B50\u3001\u5730\u9053\u82F1\u6587\u53E3\u64AD\u4E0E\u5C0F\u9EC4\u8F66\u4FC3\u5355\u5206\u955C\u811A\u672C...",
        chips: [
          {
            id: "three-sec-viral-hooks",
            label: "\u6302\u8F66\u89C6\u9891\u9EC4\u91D1\u524D 3 \u79D2\u94A9\u5B50\u88C2\u53D8\uFF0810 \u7EC4\uFF09",
            placeholder: "\u56F4\u7ED5\u540C\u4E00\u4EF6\u5546\u54C1\uFF0C\u88C2\u53D8 10 \u4E2A\u9AD8\u5B8C\u64AD\u7387\u5F00\u5934\u753B\u9762 + \u5730\u9053\u82F1\u6587\u9996\u53E5 Hook...",
            starterPrompt: "\u8BF7\u9488\u5BF9\u8FD9\u6B3E TikTok Shop \u5546\u54C1\uFF0C\u6309\u7F8E\u533A\u7206\u6B3E\u5E26\u8D27\u77ED\u89C6\u9891\u903B\u8F91\uFF0C\u4E00\u53E3\u6C14\u88C2\u53D8 10 \u7EC4\u300C0\u20133 \u79D2\u9EC4\u91D1\u89C6\u89C9\u51B2\u51FB\u753B\u9762 + \u5C4F\u5E55\u5927\u5B57\u8D34\u7EB8\uFF08Text Overlay\uFF09+ \u5730\u9053\u82F1\u6587\u53E3\u64AD\u9996\u53E5\uFF08Verbal Hook\uFF09\u300D\uFF08\u6DB5\u76D6\u75DB\u70B9\u7FFB\u8F66\u3001\u53CD\u5E38\u8BC6\u63D0\u95EE\u3001\u89E3\u538B\u7279\u5199\u3001POV \u89C6\u89D2\u4E0E\u4EF7\u683C\u951A\u70B9\u66B4\u51FB\uFF09\uFF1A\n\n\u5546\u54C1\u4E0E\u76EE\u6807\u75DB\u70B9\uFF1A"
          },
          {
            id: "ugc-shoppable-script",
            label: "30 \u79D2\u539F\u751F\u611F\uFF08UGC\uFF09\u6302\u8F66\u5E26\u8D27\u5168\u811A\u672C",
            placeholder: "\u751F\u6210\u5E26\u9010\u79D2\u753B\u9762\u6307\u5BFC\u3001\u5730\u9053\u53E3\u64AD\u53F0\u8BCD\u4E0E\u5DE6\u4E0B\u89D2\u5C0F\u9EC4\u8F66\u5F15\u5BFC\u7684\u5B8C\u6574\u62CD\u6444\u811A\u672C...",
            starterPrompt: "\u8BF7\u4E3A\u8FD9\u6B3E\u5546\u54C1\u7F16\u5199\u4E00\u4EFD 25\u201330 \u79D2\u9AD8\u8F6C\u5316 TikTok \u539F\u751F\u611F\uFF08UGC\uFF09\u6302\u8F66\u89C6\u9891\u5B8C\u6574\u5206\u955C\u811A\u672C\uFF08\u6309 0\u20133s \u6293\u4EBA\u94A9\u5B50 \u2192 3\u201312s \u75DB\u70B9\u89E3\u51B3\u5B9E\u6D4B \u2192 12\u201322s \u7EC6\u8282\u80CC\u4E66\u6253\u6D88\u987E\u8651 \u2192 22\u201330s \u9650\u65F6\u95EA\u4FC3\u6307\u5C0F\u9EC4\u8F66 CTA \u7ED3\u6784\u8F93\u51FA\uFF0C\u542B\u4E2D\u82F1\u5BF9\u7167\u53E3\u64AD\u4E0E\u955C\u5934\u8FD0\u955C\u8BF4\u660E\uFF09\uFF1A\n\n\u5546\u54C1\u4FE1\u606F\u4E0E\u4FC3\u9500\u94A9\u5B50\uFF1A"
          }
        ]
      },
      {
        id: "tts-listing-live",
        label: "\u5C0F\u5E97\u4E0A\u67B6\u4E0E\u76F4\u64AD",
        icon: "\u{1F6D2}",
        placeholder: "\u751F\u6210 TikTok Shop \u5408\u89C4\u9AD8\u641C\u7D22\u6807\u9898\u30019 \u56FE\u89C6\u89C9\u89C4\u5212\u6216\u76F4\u64AD\u95F4\u618B\u5355\u6392\u54C1\u8BDD\u672F...",
        chips: [
          {
            id: "tts-compliant-listing",
            label: "TikTok \u5C0F\u5E97\u7206\u6B3E\u6807\u9898\u4E0E 9 \u56FE\u8BE6\u60C5\u65B9\u6848",
            placeholder: "\u8F93\u5165\u5546\u54C1\u53C2\u6570\uFF0C\u8F93\u51FA\u7B26\u5408 TikTok \u641C\u7D22\u6743\u91CD\u7684\u82F1\u6587\u6807\u9898\u30019 \u5F20\u4E3B\u56FE\u811A\u672C\u4E0E\u5408\u89C4\u8BE6\u60C5...",
            starterPrompt: "\u8BF7\u6309 TikTok Shop \u6700\u65B0\u5546\u54C1\u4E0A\u67B6\u4E0E\u7B97\u6CD5\u63A8\u8350\u89C4\u8303\uFF0C\u4E3A\u4EE5\u4E0B\u4EA7\u54C1\u8F93\u51FA\uFF1A1) \u542B\u9AD8\u641C\u7D22\u91CF\u70ED\u8BCD\u7684\u5408\u89C4\u82F1\u6587\u6807\u9898\uFF1B2) 9 \u5F20\u5546\u54C1\u8F6E\u64AD\u4E3B\u56FE\u7684\u9010\u5F20\u89C6\u89C9\u4E0E\u5356\u70B9\u6587\u6848\u6307\u5BFC\uFF1B3) \u624B\u673A\u7AEF\u4E00\u773C\u770B\u61C2\u7684\u5206\u6BB5\u5F0F\u8BE6\u60C5\u63CF\u8FF0\u4E0E\u5C3A\u7801/\u5C5E\u6027\u8868\uFF08\u81EA\u52A8\u89C4\u907F\u5E73\u53F0\u7981\u552E\u4E0E\u5938\u5927\u533B\u7597\u8FDD\u89C4\u8BCD\uFF09\uFF1A\n\n\u4EA7\u54C1\u8D44\u6599\u4E0E\u76EE\u6807\u56FD\u5BB6\uFF1A"
          },
          {
            id: "livestream-runbook",
            label: "TikTok \u76F4\u64AD\u95F4\u8FC7\u54C1\u8282\u594F\u4E0E\u903C\u5355\u8BDD\u672F",
            placeholder: "\u8F93\u5165\u76F4\u64AD\u95F4\u5F15\u6D41\u54C1\u4E0E\u4E3B\u63A8\u54C1\uFF0C\u751F\u6210 15 \u5206\u949F\u5FAA\u73AF\u8FC7\u54C1\u811A\u672C\u4E0E\u798F\u888B\u7559\u4EBA\u8BDD\u672F...",
            starterPrompt: "\u8BF7\u4E3A\u6211\u7684 TikTok Shop \u76F4\u64AD\u95F4\u8BBE\u8BA1\u4E00\u5957\u300C15 \u5206\u949F\u9AD8\u5BC6\u5EA6\u5FAA\u73AF\u8FC7\u54C1\u811A\u672C\u300D\uFF08\u542B\u8FDB\u623F\u524D 10 \u79D2\u7559\u4EBA\u8BDD\u672F\u3001Flash Sale \u79D2\u6740\u5012\u8BA1\u65F6\u903C\u5355\u8BDD\u672F\u3001\u8BC4\u8BBA\u533A\u6263\u8BCD\u4E92\u52A8\u62C9\u505C\u7559\u8BDD\u672F\uFF0C\u4EE5\u53CA\u4E2D\u82F1\u53CC\u8BED\u9AD8\u9891\u4FC3\u5355\u53E3\u4EE4\uFF09\uFF1A\n\n\u76F4\u64AD\u4E3B\u63A8\u54C1\u4E0E\u798F\u5229\u673A\u5236\uFF1A"
          }
        ]
      },
      {
        id: "gmv-max-ads",
        label: "GMV Max \u6295\u6D41\u8BCA\u65AD",
        icon: "\u{1F4C8}",
        placeholder: "\u8F93\u5165\u77ED\u89C6\u9891\u64AD\u653E\u91CF\u3001CTR\u3001\u52A0\u8D2D\u7387\u4E0E ROAS \u6570\u636E\uFF0C\u8BCA\u65AD\u7D20\u6750\u5361\u70B9\u5E76\u7ED9\u51FA\u653E\u91CF\u7B56\u7565...",
        chips: [
          {
            id: "roas-funnel-audit",
            label: "\u77ED\u89C6\u9891\u5E26\u8D27\u4E0E GMV Max \u6F0F\u6597\u8BCA\u65AD",
            placeholder: "\u7C98\u8D34\u5F53\u524D\u7D20\u6750\u7684 2s/6s \u5B8C\u64AD\u7387\u3001CTR\u3001CVR \u4E0E ROAS\uFF0C\u5B9A\u4F4D\u6389\u91CF\u4E0E\u4E8F\u635F\u539F\u56E0...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u8BCA\u65AD\u5F53\u524D TikTok Shop \u77ED\u89C6\u9891\u4E0E GMV Max / Shop Ads \u6295\u6D41\u6570\u636E\u6F0F\u6597\uFF08\u7ED3\u5408 2 \u79D2\u7559\u5B58\u7387\u30016 \u79D2\u5B8C\u64AD\u7387\u3001\u5C0F\u9EC4\u8F66\u70B9\u51FB\u7387 CTR\u3001\u5546\u8BE6\u9875\u8F6C\u5316\u7387 CVR\u3001\u5BA2\u5355\u4EF7\u4E0E\u76EE\u6807 ROI\uFF09\uFF0C\u6307\u51FA\u6838\u5FC3\u77ED\u677F\u5728\u54EA\u4E00\u73AF\uFF0C\u5E76\u7ED9\u51FA\u5177\u4F53\u7684\u7D20\u6750\u6539\u4FEE\u4E0E\u51FA\u4EF7\u8C03\u6574\u5EFA\u8BAE\uFF1A\n\n\u5F53\u524D\u6570\u636E\u8868\u73B0\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 2,
    hidden: false
  },
  {
    id: "xiaohongshu",
    name: "\u5C0F\u7EA2\u4E66\u79CD\u8349\u8FD0\u8425",
    shortName: "\u5C0F\u7EA2\u4E66",
    heroTitle: "\u5C0F\u7EA2\u4E66 AI\uFF0C\u7206\u6B3E\u79CD\u8349\u4E0E\u641C\u7D22\u5361\u4F4D Agent",
    tagline: "\u9AD8\u70B9\u51FB 3:4 \u5C01\u9762\u4E0E\u6807\u9898\u88C2\u53D8\u3001\u591A\u4EBA\u8BBE\u79CD\u8349\u77E9\u9635\u3001KFS \u641C\u7D22\u5361\u4F4D\u4E0E\u79C1\u57DF\u5408\u89C4\u627F\u63A5",
    skillName: "xiaohongshu-ops",
    iconBg: "linear-gradient(135deg, #E11D48 0%, #FF2442 100%)",
    iconGlyph: "\u7EA2",
    mascotEmoji: "\u{1F4D5}",
    mascotTitle: "\u5C0F\u7EA2\u4E66\u7206\u6587\u4E3B\u7406\u4EBA",
    connectionLabel: "\u767B\u5F55\u5C0F\u7EA2\u4E66\u8FD0\u8425 MCP",
    connectionUrlLabel: "\u5C0F\u7EA2\u4E66\u54C1\u724C\u53F7 / \u535A\u4E3B\u4E3B\u9875\u540D\u79F0",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1A@LumiHome \u5BB6\u5C45\u7F8E\u5B66 \xB7 \u5C0F\u7EA2\u4E66\u5E97\u94FA",
    connectionTokenLabel: "\u8D26\u53F7\u4EBA\u8BBE\u5B9A\u4F4D\u4E0E\u76EE\u6807\u53D7\u4F17\u753B\u50CF",
    connectionTokenPlaceholder: "\u4F8B\u5982\uFF1A25-35\u5C81\u7CBE\u81F4\u72EC\u5C45\u5973\u6027\uFF0C\u771F\u8BDA\u5E72\u8D27\u4E0D\u7239\u5473",
    mcp: {
      serverId: "xiaohongshu-mcp",
      name: "\u5C0F\u7EA2\u4E66\u79CD\u8349\u4E0E KFS \u589E\u957F MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "xhs.viral_title_cover",
        "xhs.persona_notes_matrix",
        "xhs.kfs_keyword_seo",
        "xhs.comment_lead_funnel"
      ]
    },
    categories: [
      {
        id: "viral-notes",
        label: "\u7206\u6B3E\u56FE\u6587\u4E0E\u5C01\u9762",
        icon: "\u2728",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u5356\u70B9\u6216\u9009\u9898\u65B9\u5411\uFF0C\u4E00\u952E\u751F\u6210 10 \u4E2A\u9AD8\u70B9\u51FB\u6807\u9898\u30013:4 \u9996\u56FE\u65B9\u6848\u4E0E\u79CD\u8349\u6B63\u6587...",
        chips: [
          {
            id: "xhs-10-titles-3-notes",
            label: "10 \u4E2A\u7206\u6B3E\u6807\u9898 + 3 \u7BC7\u591A\u4EBA\u8BBE\u79CD\u8349\u6587",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u7279\u70B9\u4E0E\u76EE\u6807\u4EBA\u7FA4\uFF0C\u751F\u6210\u6D4B\u8BC4\u515A / \u5E72\u8D27\u515A / \u6C1B\u56F4\u611F\u751F\u6D3B\u5BB6 3 \u7BC7\u5DEE\u5F02\u5316\u7B14\u8BB0...",
            starterPrompt: "\u8BF7\u4F7F\u7528\u5C0F\u7EA2\u4E66\u8FD0\u8425\u6280\u80FD\uFF0C\u56F4\u7ED5\u4EE5\u4E0B\u4EA7\u54C1/\u8BDD\u9898\u8F93\u51FA\u4E00\u5957\u9AD8\u8D5E\u79CD\u8349\u65B9\u6848\uFF1A\n1) 10 \u4E2A 20 \u5B57\u4EE5\u5185\u7684\u9AD8\u70B9\u51FB\u7387\u5C01\u9762\u6807\u9898\uFF08\u6DB5\u76D6\u75DB\u70B9\u53CD\u5E38\u8BC6\u3001\u4EBA\u7FA4\u53EC\u5524\u3001\u6570\u5B57\u5BF9\u6BD4\u3001\u7EA2\u9ED1\u699C\u5408\u96C6\uFF09\uFF1B\n2) 3:4 \u7AD6\u7248\u9996\u56FE\u4E0E\u5185\u9875 5 \u5F20\u56FE\u7684\u753B\u9762\u6784\u56FE\u4E0E\u5927\u5B57\u8D34\u7EB8\u6587\u6848\uFF1B\n3) 3 \u7BC7\u4E0D\u540C\u4EBA\u8BBE\u5207\u5165\u70B9\uFF08\u786C\u6838\u6D4B\u8BC4\u515A / \u907F\u5751\u5E72\u8D27\u515A / \u771F\u5B9E\u751F\u6D3B\u5206\u4EAB\u515A\uFF09\u7684\u547C\u5438\u611F\u6392\u7248\u6B63\u6587\u3001\u9AD8\u6743\u91CD #\u8BDD\u9898\u6807\u7B7E \u4E0E\u8FDD\u7981\u8BCD\u81EA\u68C0\uFF1A\n\n\u4EA7\u54C1\u6216\u9009\u9898\u4FE1\u606F\uFF1A"
          },
          {
            id: "xhs-svg-cover-card",
            label: "\u76F4\u63A5\u751F\u6210 3:4 \u9AD8\u8D5E\u5C0F\u7EA2\u4E66\u5C01\u9762\u56FE\uFF08SVG\uFF09",
            placeholder: "\u8F93\u5165\u5C01\u9762\u4E3B\u6807\u9898\u4E0E\u526F\u6807\u9898\u8981\u70B9\uFF0C\u76F4\u63A5\u5728\u53F3\u4FA7\u753B\u5E03\u751F\u6210\u53EF\u9884\u89C8\u7684 3:4 \u7AD6\u7248\u4FE1\u606F\u56FE\u5C01\u9762...",
            starterPrompt: "\u8BF7\u76F4\u63A5\u5728\u5F53\u524D\u5DE5\u4F5C\u533A\u8BBE\u8BA1\u5E76\u751F\u6210\u4E00\u5F20\u7B26\u5408\u5C0F\u7EA2\u4E66\u9AD8\u70B9\u51FB\u5BA1\u7F8E\u7684 3:4 \u7AD6\u7248\uFF08900x1200\uFF09SVG \u5C01\u9762\u5361\u7247\u6587\u4EF6\uFF08\u8981\u6C42\u6392\u7248\u547C\u5438\u611F\u5F3A\u3001\u6838\u5FC3\u5927\u5B57\u6807\u9898\u9192\u76EE\u3001\u91CD\u70B9\u9AD8\u4EAE\u6807\u8BB0\u6E05\u6670\u3001\u914D\u8272\u9AD8\u7EA7\u8010\u770B\uFF09\uFF0C\u5E76\u5728\u53F3\u4FA7\u6587\u4EF6\u753B\u5E03\u6253\u5F00\u9884\u89C8\uFF1A\n\n\u5C01\u9762\u4E3B\u9898\u4E0E\u6838\u5FC3\u5356\u70B9\uFF1A"
          },
          {
            id: "xhs-chrome-link-publish",
            label: "Chrome Link \u81EA\u52A8\u586B\u5165\u5C0F\u7EA2\u4E66\u53D1\u5E03\u540E\u53F0",
            placeholder: "\u5C06\u9009\u5B9A\u7684\u7206\u6B3E\u6807\u9898\u3001\u79CD\u8349\u6B63\u6587\u4E0E #\u8BDD\u9898\u6807\u7B7E \u81EA\u52A8\u586B\u5165\u5DF2\u6253\u5F00\u7684\u521B\u4F5C\u8005\u5E73\u53F0...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `xiaohongshu-ops` \u6280\u80FD\u914D\u5408 `hoxi_browser`\uFF08Chrome Link\uFF09\uFF0C\u5C06\u6211\u4EEC\u5B9A\u7A3F\u7684\u5C0F\u7EA2\u4E66\u7206\u6B3E\u6807\u9898\u3001\u5206\u6BB5\u6B63\u6587\u4E0E\u5E95\u90E8 #\u8BDD\u9898\u6807\u7B7E \u81EA\u52A8\u586B\u5165\u6211\u5F53\u524D\u5DF2\u6253\u5F00\u7684\u5C0F\u7EA2\u4E66\u521B\u4F5C\u670D\u52A1\u5E73\u53F0\uFF08creator.xiaohongshu.com\uFF09\u53D1\u5E03\u9875\u4E2D\uFF0C\u5E76\u5728\u70B9\u51FB\u6700\u7EC8\u300C\u53D1\u5E03\u300D\u6309\u94AE\u524D\u505C\u4E0B\u8BA9\u6211\u786E\u8BA4\uFF1A\n\n\u5F85\u586B\u5165\u7B14\u8BB0\u6216\u6307\u4EE4\uFF1A"
          },
          {
            id: "xhs-benchmark-rewrite",
            label: "\u5BF9\u6807\u7206\u6587\u62C6\u89E3\u4E0E 100% \u539F\u521B\u50CF\u7D20\u7EA7\u6539\u5199",
            placeholder: "\u7C98\u8D34\u540C\u884C\u4E07\u8D5E\u7206\u6B3E\u7B14\u8BB0\u6587\u6848\uFF0C\u62C6\u89E3\u5176\u60C5\u7EEA\u94A9\u5B50\u4E0E\u8BC4\u8BBA\u69FD\u70B9\u5E76\u7ED3\u5408\u4F60\u7684\u4EA7\u54C1\u4E8C\u521B...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u6DF1\u5EA6\u62C6\u89E3\u4EE5\u4E0B\u5C0F\u7EA2\u4E66\u7206\u6B3E\u7B14\u8BB0\u7684\u300C\u5C01\u9762\u5438\u775B\u70B9\u3001\u9996\u6BB5\u524D 3 \u884C\u7559\u4EBA\u94A9\u5B50\u3001\u60C5\u7EEA\u9012\u8FDB\u8282\u594F\u4E0E\u8BC4\u8BBA\u533A\u4E92\u52A8\u69FD\u70B9\u300D\uFF0C\u5E76\u7ED3\u5408\u6211\u7684\u4EA7\u54C1\u8FDB\u884C 100% \u539F\u521B\u53BB\u540C\u8D28\u5316\u6539\u5199\uFF08\u9644 5 \u4E2A\u5347\u7EA7\u7248\u6807\u9898\uFF09\uFF1A\n\n\u5BF9\u6807\u7206\u6587\u4E0E\u6211\u7684\u4EA7\u54C1\uFF1A"
          }
        ]
      },
      {
        id: "kfs-search-seo",
        label: "KFS \u641C\u7D22\u8BCD\u5361\u4F4D",
        icon: "\u{1F50D}",
        placeholder: "\u8F93\u5165\u6838\u5FC3\u54C1\u7C7B\u8BCD\uFF0C\u6316\u6398\u5C0F\u7EA2\u4E66\u4E0B\u62C9\u6846\u9AD8\u610F\u56FE\u957F\u5C3E\u8BCD\u3001\u75DB\u70B9\u8BCD\u4E0E\u7B14\u8BB0\u94FA\u91CF\u77E9\u9635...",
        chips: [
          {
            id: "xhs-keyword-matrix",
            label: "\u5C0F\u7EA2\u4E66\u4E0B\u62C9\u6846\u957F\u5C3E\u8BCD\u4E0E KFS \u94FA\u91CF\u8868",
            placeholder: "\u8F93\u5165\u884C\u4E1A\u6216\u54C1\u7C7B\u8BCD\uFF0C\u751F\u6210\u54C1\u7C7B\u8BCD/\u75DB\u70B9\u8BCD/\u573A\u666F\u8BCD/\u4EBA\u7FA4\u8BCD\u56DB\u7EF4\u5361\u4F4D\u89C4\u5212...",
            starterPrompt: "\u8BF7\u6309\u5C0F\u7EA2\u4E66 KFS\uFF08KOL/KOC \u5185\u5BB9 + Feeds \u4FE1\u606F\u6D41 + Search \u641C\u7D22\u5361\u4F4D\uFF09\u589E\u957F\u6A21\u578B\uFF0C\u56F4\u7ED5\u6211\u7684\u6838\u5FC3\u54C1\u7C7B\u6784\u5EFA\u4E00\u4EFD\u300C\u5C0F\u7EA2\u4E66\u641C\u7D22\u9996\u5C4F\u9738\u5C4F\u5173\u952E\u8BCD\u77E9\u9635\u300D\uFF08\u62C6\u5206\u5927\u6D41\u91CF\u54C1\u7C7B\u8BCD\u3001\u9AD8\u8F6C\u5316\u75DB\u70B9\u8BCD\u3001\u5B63\u8282/\u793C\u8D60\u573A\u666F\u8BCD\u3001\u7ADE\u54C1\u5BF9\u6BD4\u622A\u6D41\u8BCD\uFF09\uFF0C\u5E76\u89C4\u5212 15 \u7BC7\u7CBE\u51C6\u5361\u4F4D\u7B14\u8BB0\u7684\u9009\u9898\u6392\u671F\u8868\uFF1A\n\n\u6838\u5FC3\u54C1\u7C7B\u4E0E\u54C1\u724C\uFF1A"
          },
          {
            id: "koc-seeding-brief",
            label: "\u767E\u4EBA KOC \u7D20\u4EBA\u94FA\u91CF\u79CD\u8349 Brief \u6A21\u677F",
            placeholder: "\u751F\u6210\u53D1\u7ED9\u8FBE\u4EBA/\u7D20\u4EBA\u7684\u5BA1\u7A3F\u6807\u51C6\u3001\u5FC5\u5E26\u5173\u952E\u8BCD\u3001\u5B9E\u62CD\u8981\u6C42\u4E0E\u9632\u9650\u6D41\u89C4\u8303...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u7F16\u5199\u4E00\u4EFD\u4E13\u4E1A\u6E05\u6670\u7684\u5C0F\u7EA2\u4E66\u300AKOC / \u8FBE\u4EBA\u79CD\u8349\u5408\u4F5C Brief \u624B\u518C\u300B\uFF08\u5305\u542B\uFF1A\u54C1\u724C\u6838\u5FC3\u89C6\u89C9\u9524\u30013 \u4E2A\u53EF\u9009\u5185\u5BB9\u5207\u5165\u65B9\u5411\u3001\u9996\u56FE\u5B9E\u62CD\u5149\u7EBF\u4E0E\u6784\u56FE\u7EA2\u7EBF\u3001\u5FC5\u57CB\u641C\u7D22\u5173\u952E\u8BCD\u3001\u81EA\u7136\u690D\u5165\u53E3\u543B\u8981\u6C42\u4EE5\u53CA\u7EDD\u5BF9\u7981\u6B62\u51FA\u73B0\u7684\u8FDD\u89C4\u786C\u5E7F\u8BCD\uFF09\uFF1A\n\n\u672C\u6B21\u63A8\u5E7F\u4EA7\u54C1\u4E0E\u9884\u7B97\u5C42\u7EA7\uFF1A"
          }
        ]
      },
      {
        id: "comment-private-domain",
        label: "\u8BC4\u8BBA\u622A\u6D41\u4E0E\u79C1\u57DF",
        icon: "\u{1F4AC}",
        placeholder: "\u8BBE\u8BA1\u4E0D\u8FDD\u89C4\u7684\u9996\u8BC4\u7F6E\u9876\u4E92\u52A8\u94A9\u5B50\u3001\u6C42\u94FE\u63A5\u795E\u8BC4\u914D\u5408\u4E0E\u79C1\u4FE1\u8F6C\u79C1\u57DF/\u5E97\u94FA\u8BDD\u672F...",
        chips: [
          {
            id: "comment-hook-scripts",
            label: "\u9996\u8BC4\u7F6E\u9876\u94A9\u5B50\u4E0E\u8BC4\u8BBA\u533A\u8F6C\u5316\u8BDD\u672F\u5E93",
            placeholder: "\u8F93\u5165\u5546\u54C1\u6216\u5F15\u6D41\u94A9\u5B50\uFF08\u5982\u9886\u8D44\u6599/\u8BD5\u6837/\u540C\u6B3E\u94FE\u63A5\uFF09\uFF0C\u751F\u6210\u9AD8\u4E92\u52A8\u8BC4\u8BBA\u533A\u5267\u672C...",
            starterPrompt: "\u8BF7\u4E3A\u6211\u7684\u5C0F\u7EA2\u4E66\u7B14\u8BB0\u8BBE\u8BA1\u4E00\u5957\u62C9\u6EE1 CES \u4E92\u52A8\u5206\u4E14\u9AD8\u8F6C\u5316\u7684\u300C\u8BC4\u8BBA\u533A\u8FD0\u8425\u5267\u672C\u300D\uFF08\u5305\u542B\uFF1A5 \u6761\u4E0D\u540C\u98CE\u683C\u7684\u535A\u4E3B\u9996\u8BC4\u7F6E\u9876\u94A9\u5B50\u3001\u81EA\u7136\u4E0D\u751F\u786C\u7684\u201C\u6C42\u94FE\u63A5/\u95EE\u75DB\u70B9\u201D\u4E92\u52A8\u914D\u5408\u8BDD\u672F\u3001\u9488\u5BF9\u4EF7\u683C\u8D28\u7591\u7684\u9AD8\u60C5\u5546\u56DE\u590D\uFF0C\u4EE5\u53CA\u96F6\u8FDD\u89C4\u5F15\u5BFC\u8FDB\u5165\u5C0F\u7EA2\u4E66\u5E97\u94FA/\u7FA4\u804A/\u79C1\u4FE1\u7684\u627F\u63A5\u94FE\u8DEF\uFF09\uFF1A\n\n\u4E3B\u63A8\u4EA7\u54C1\u6216\u5F15\u6D41\u94A9\u5B50\uFF1A"
          },
          {
            id: "founder-ip-story",
            label: "\u4E00\u4EBA\u516C\u53F8 / \u54C1\u724C\u4E3B\u7406\u4EBA\u6DA8\u7C89\u8FDE\u8F7D\u5267\u672C",
            placeholder: "\u8F93\u5165\u4F60\u7684\u521B\u4E1A\u521D\u5FC3\u6216\u505A\u4EA7\u54C1\u7684\u5E55\u540E\u6545\u4E8B\uFF0C\u6253\u9020\u9AD8\u4FE1\u4EFB\u5EA6\u3001\u9AD8\u5BA2\u5355\u8F6C\u5316\u7684\u4E3B\u7406\u4EBA IP...",
            starterPrompt: "\u8BF7\u5E2E\u6211\u7B56\u5212\u4E00\u5957\u300C\u5C0F\u7EA2\u4E66\u54C1\u724C\u4E3B\u7406\u4EBA / \u4E00\u4EBA\u516C\u53F8\u521B\u4E1A\u8FDE\u8F7D\u680F\u76EE\u300D\uFF08\u89C4\u5212\u8D26\u53F7\u56DB\u4EF6\u5957\u7B80\u4ECB\u3001\u7F6E\u9876 3 \u7BC7\u4EBA\u8BBE\u5EFA\u7ACB\u7B14\u8BB0\u3001\u7814\u53D1\u6253\u6837/\u9009\u54C1\u5E55\u540E\u6545\u4E8B\u7EBF\u3001\u542C\u529D\u6539\u54C1\u4E92\u52A8\u7B14\u8BB0\uFF09\uFF0C\u7528\u771F\u5B9E\u611F\u5EFA\u7ACB\u6781\u9AD8\u79C1\u57DF\u4FE1\u4EFB\u5EA6\uFF1A\n\n\u6211\u7684\u80CC\u666F\u4E0E\u6240\u505A\u4EA7\u54C1\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 3,
    hidden: false
  },
  {
    id: "amazon",
    name: "Amazon \u4E9A\u9A6C\u900A\u8FD0\u8425",
    shortName: "Amazon",
    heroTitle: "Amazon AI\uFF0C\u5168\u80FD\u4E9A\u9A6C\u900A\u8DE8\u5883\u8FD0\u8425 Agent",
    tagline: "COSMO/Rufus \u9AD8\u8F6C\u5316 Listing\u3001A+ \u9875\u9762\u89C6\u89C9\u811A\u672C\u3001SP \u5E7F\u544A\u5426\u8BCD\u4E0E FBA \u8865\u8D27\u7BA1\u5BB6",
    skillName: "amazon-ops",
    iconBg: "linear-gradient(135deg, #FF9900 0%, #D97706 100%)",
    iconGlyph: "A",
    mascotEmoji: "\u{1F4E6}",
    mascotTitle: "\u4E9A\u9A6C\u900A\u91D1\u724C\u8FD0\u8425",
    connectionLabel: "\u8FDE\u63A5 Amazon MCP",
    connectionUrlLabel: "\u4E9A\u9A6C\u900A\u7AD9\u70B9 / \u5E97\u94FA\u94FE\u63A5",
    connectionUrlPlaceholder: "https://www.amazon.com/sp?seller=XXXXX \u6216\u5317\u7F8E/\u6B27\u6D32\u7AD9\u70B9",
    connectionTokenLabel: "SP-API / MCP \u6388\u6743\u51ED\u8BC1 (\u53EF\u9009)",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5219\u4F7F\u7528 Hoxi.ai \u4E00\u952E\u6388\u6743\u4E0E Chrome Link \u5356\u5BB6\u540E\u53F0\u534F\u540C",
    mcp: {
      serverId: "amazon-mcp",
      name: "Amazon Seller \u8FD0\u8425 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "amazon.listing_cosmo_optimize",
        "amazon.aplus_storyboard",
        "amazon.ppc_search_term_audit",
        "amazon.fba_restock_planner"
      ]
    },
    categories: [
      {
        id: "amazon-listing",
        label: "Listing \u4E0E SEO",
        icon: "\u{1F4DD}",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u5356\u70B9\u3001\u6750\u8D28\u53C2\u6570\u6216\u7ADE\u54C1 ASIN\uFF0C\u751F\u6210\u7B26\u5408 COSMO + Rufus \u7B97\u6CD5\u7684 Listing...",
        chips: [
          {
            id: "cosmo-listing-full",
            label: "COSMO + Rufus \u9EC4\u91D1\u4E94\u70B9\u4E0E\u6807\u9898",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u76EE\u6807\u7AD9\u70B9\uFF08\u7F8E/\u6B27/\u65E5\uFF09\u4E0E 3 \u4E2A\u5DEE\u5F02\u5316\u5356\u70B9...",
            starterPrompt: "\u8BF7\u8C03\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u6309\u4E9A\u9A6C\u900A\u6700\u65B0 COSMO \u610F\u56FE\u56FE\u8C31\u4E0E Rufus AI \u5BFC\u8D2D\u6807\u51C6\uFF0C\u4E3A\u4EE5\u4E0B\u4EA7\u54C1\u751F\u6210\u9AD8\u8F6C\u5316\u82F1\u6587 Title\uFF08200 \u5B57\u7B26\u5185\uFF09\u30015 \u6761\u9EC4\u91D1 Bullet Points\uFF08\u5168\u5927\u5199\u75DB\u70B9\u5229\u76CA\u94A9\u5B50 + \u573A\u666F\u7EC6\u8282\uFF09\u3001Product Description \u4EE5\u53CA 250 Bytes \u6EE1\u683C Search Terms\uFF1A\n\n\u4EA7\u54C1\u4E0E\u7AD9\u70B9\u4FE1\u606F\uFF1A"
          },
          {
            id: "chrome-link-seller-central",
            label: "Chrome Link \u81EA\u52A8\u586B\u5165 Seller Central",
            placeholder: "\u5C06\u5B9A\u7A3F\u7684 Title\u3001\u4E94\u70B9\u63CF\u8FF0\u4E0E Search Terms \u534A\u81EA\u52A8\u586B\u5165\u5F53\u524D\u6253\u5F00\u7684\u4E9A\u9A6C\u900A\u540E\u53F0...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `amazon-ops` \u6280\u80FD\u914D\u5408 `hoxi_browser`\uFF08Chrome Link\uFF09\uFF0C\u5C06\u6211\u4EEC\u5B9A\u7A3F\u7684\u4E9A\u9A6C\u900A Listing\uFF08Title\u30015 Bullet Points\u3001Search Terms\uFF09\u81EA\u52A8\u586B\u5165\u6211\u5F53\u524D\u5DF2\u6253\u5F00\u7684 Amazon Seller Central \u5546\u54C1\u7F16\u8F91\u6807\u7B7E\u9875\u4E2D\uFF0C\u5E76\u5728\u70B9\u51FB Save and finish \u6309\u94AE\u524D\u505C\u4E0B\u8BA9\u6211\u786E\u8BA4\uFF1A\n\n\u5F85\u586B\u5165\u5185\u5BB9\u6216\u6307\u4EE4\uFF1A"
          },
          {
            id: "voc-review-mining",
            label: "\u7ADE\u54C1\u5DEE\u8BC4 VOC \u75DB\u70B9\u63D0\u70BC",
            placeholder: "\u7C98\u8D34 Top \u7ADE\u54C1\u7684 1\u20133 \u661F\u5DEE\u8BC4\u5185\u5BB9\uFF0C\u63D0\u70BC\u4EA7\u54C1\u5FAE\u521B\u65B0\u4E0E\u4E94\u70B9\u9632\u5DEE\u8BC4\u8BDD\u672F...",
            starterPrompt: "\u8BF7\u8C03\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u6DF1\u5EA6\u5206\u6790\u4EE5\u4E0B\u7ADE\u54C1\u7684\u4E70\u5BB6\u5DEE\u8BC4\uFF081\u20133 \u661F Review\uFF09\u4E0E\u9AD8\u9891 Q&A\uFF0C\u603B\u7ED3\u4E70\u5BB6\u6700\u96C6\u4E2D\u7684 3 \u5927\u69FD\u70B9\uFF0C\u5E76\u8F6C\u5316\u4E3A\u6211\u65B9 Listing \u4E94\u70B9\u63CF\u8FF0\u7684\u5DEE\u5F02\u5316\u5356\u70B9\u4E0E\u9632\u9000\u8D27\u8BF4\u660E\uFF1A\n\n\u7ADE\u54C1\u5DEE\u8BC4\u5185\u5BB9\u6216\u54C1\u7C7B\uFF1A"
          }
        ]
      },
      {
        id: "amazon-aplus",
        label: "A+ \u9875\u9762\u4E0E\u54C1\u724C\u6545\u4E8B",
        icon: "\u{1F3A8}",
        placeholder: "\u8BBE\u8BA1\u9AD8\u8F6C\u5316\u57FA\u7840 A+ / \u9AD8\u7EA7 A+\uFF08Premium A+\uFF09\u6A21\u5757\u5316\u6587\u6848\u3001\u5C3A\u5BF8\u6784\u56FE\u4E0E\u5BF9\u6BD4\u8868...",
        chips: [
          {
            id: "premium-aplus-script",
            label: "\u9AD8\u7EA7 A+ 6 \u6A21\u5757\u89C6\u89C9\u4E0E\u6587\u6848\u811A\u672C",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u79D1\u6280\u3001\u4F7F\u7528\u573A\u666F\u4E0E\u54C1\u724C\u8C03\u6027\uFF0C\u751F\u6210\u9010\u5C4F\u7F8E\u5DE5Brief\u4E0E\u56FE\u7247Alt\u8BCD...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u4E3A\u8FD9\u6B3E\u4EA7\u54C1\u7B56\u5212\u4E00\u5957 6 \u6A21\u5757\u9AD8\u8F6C\u5316\u4E9A\u9A6C\u900A A+ \u9875\u9762\u811A\u672C\uFF08\u542B\u6BCF\u6A21\u5757\u7684\u63A8\u8350\u5C3A\u5BF8\u3001\u7F8E\u5DE5\u6784\u56FE\u6307\u5BFC\u3001\u82F1\u6587\u4E3B\u526F\u6807\u9898\u3001\u6B63\u6587\u6587\u6848\uFF0C\u4EE5\u53CA\u57CB\u5165\u6BCF\u5F20\u56FE\u7247\u540E\u53F0\u7684 100 \u5B57\u7B26 Image Keywords Alt Text\uFF09\uFF1A\n\n\u4EA7\u54C1\u6838\u5FC3\u4FE1\u606F\uFF1A"
          },
          {
            id: "aplus-comparison-chart",
            label: "A+ \u5173\u8054\u4EA4\u53C9\u9500\u552E\u5BF9\u6BD4\u8868",
            placeholder: "\u5BF9\u6BD4\u5E97\u94FA\u5185\u591A\u6B3E\u4EA7\u54C1\u6216\u5BF9\u6BD4\u666E\u901A\u7ADE\u54C1\uFF0C\u63D0\u5347\u5173\u8054\u8D2D\u4E70\u4E0E\u8F6C\u5316\u7387...",
            starterPrompt: "\u8BF7\u8C03\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u8BBE\u8BA1\u4E00\u4E2A\u4E9A\u9A6C\u900A A+ \u9875\u9762\u5E95\u90E8\u7684\u9AD8\u8F6C\u5316\u5BF9\u6BD4\u77E9\u9635\uFF08Comparison Table\uFF09\uFF0C\u7A81\u51FA\u4E3B\u63A8\u6B3E\u5728 5 \u4E2A\u6838\u5FC3\u8D2D\u4E70\u51B3\u7B56\u7EF4\u5EA6\u4E0A\u7684\u4F18\u52BF\uFF1A\n\n\u4E3B\u63A8\u6B3E\u4E0E\u5BF9\u6BD4\u7EF4\u5EA6\uFF1A"
          }
        ]
      },
      {
        id: "amazon-ppc-fba",
        label: "SP \u5E7F\u544A\u4E0E FBA \u8865\u8D27",
        icon: "\u{1F4C8}",
        placeholder: "\u8BCA\u65AD SP/SB \u5E7F\u544A\u641C\u7D22\u8BCD\u62A5\u544A\u3001\u964D\u4F4E ACOS/TACOS\uFF0C\u6216\u6D4B\u7B97 FBA \u5B89\u5168\u5E93\u5B58\u4E0E\u65AD\u8D27\u70B9...",
        chips: [
          {
            id: "ppc-acos-audit",
            label: "SP \u5E7F\u544A\u641C\u7D22\u8BCD\u5426\u8BCD\u4E0E\u964D ACOS",
            placeholder: "\u7C98\u8D34\u5E7F\u544A\u9AD8\u82B1\u8D39\u8BCD\u6216\u5F53\u524D\u66DD\u5149/\u70B9\u51FB/\u8F6C\u5316\u6570\u636E\uFF0C\u8F93\u51FA\u7CBE\u51C6\u5426\u8BCD\u4E0E\u8C03\u4EF7\u65B9\u6848...",
            starterPrompt: "\u8BF7\u8C03\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BCA\u65AD\u4EE5\u4E0B\u4E9A\u9A6C\u900A SP \u5E7F\u544A\u6570\u636E/\u641C\u7D22\u8BCD\u8868\u73B0\uFF0C\u8BC6\u522B\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u7684\u5403\u9884\u7B97\u8BCD\uFF08\u7ED9\u51FA Negative Exact / Phrase \u5EFA\u8BAE\uFF09\u3001\u9AD8\u8F6C\u5316\u6BD5\u4E1A\u8BCD\uFF08\u8F6C\u624B\u52A8\u7CBE\u51C6\u7ADE\u4EF7\uFF09\u4EE5\u53CA\u964D\u4F4E ACOS \u7684\u5206\u65F6\u7ADE\u4EF7\u7B56\u7565\uFF1A\n\n\u5E7F\u544A\u6570\u636E\u6216\u54C1\u7C7B\uFF1A"
          },
          {
            id: "fba-restock-calc",
            label: "FBA \u8865\u8D27\u6570\u91CF\u4E0E\u65AD\u8D27\u9884\u8B66\u6D4B\u7B97",
            placeholder: "\u8F93\u5165\u5F53\u524D\u5728\u5E93/\u5728\u9014\u5E93\u5B58\u3001\u65E5\u5747\u9500\u91CF\u4E0E\u5934\u7A0B\u6D77\u8FD0/\u7A7A\u8FD0\u5468\u671F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `amazon-ops` \u6280\u80FD\uFF0C\u6839\u636E\u6211\u7684 FBA \u5728\u5E93\u53EF\u552E\u5E93\u5B58\u3001\u5728\u9014\u6570\u91CF\u3001\u8FD1 7/14/30 \u5929\u65E5\u5747\u9500\u91CF\u4E0E\u5934\u7A0B\u7269\u6D41\u65F6\u6548\uFF0C\u6D4B\u7B97\u5B89\u5168\u8865\u8D27\u89E6\u53D1\u70B9\u3001\u5EFA\u8BAE\u53D1\u8D27\u6570\u91CF\u53CA\u9632\u65AD\u8D27\u63A7\u6D41\u901F\u65B9\u6848\uFF1A\n\n\u5E93\u5B58\u4E0E\u9500\u91CF\u53C2\u6570\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 4,
    hidden: false
  },
  {
    id: "ads-growth",
    name: "Meta & Google \u6295\u6D41",
    shortName: "\u6295\u6D41\u589E\u957F",
    heroTitle: "Ads Growth AI\uFF0C\u6D77\u5916\u4E70\u91CF\u4E0E ROAS \u589E\u957F Agent",
    tagline: "Meta / Google PMax / TikTok \u7206\u6B3E\u4E70\u91CF\u7D20\u6750\u77E9\u9635\u3001\u53D7\u4F17\u6D4B\u8BD5\u4E0E\u5168\u6F0F\u6597 ROAS \u5F52\u56E0",
    skillName: "ads-growth-ops",
    iconBg: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
    iconGlyph: "M",
    mascotEmoji: "\u{1F680}",
    mascotTitle: "\u9996\u5E2D\u4E70\u91CF\u6295\u624B",
    connectionLabel: "\u8FDE\u63A5\u5E7F\u544A\u589E\u957F MCP",
    connectionUrlLabel: "\u5E7F\u544A\u843D\u5730\u9875 / \u8FFD\u8E2A\u57DF\u540D",
    connectionUrlPlaceholder: "https://yourbrand.com \u6216\u4E3B\u6295\u72EC\u7ACB\u7AD9\u843D\u5730\u9875\u94FE\u63A5",
    connectionTokenLabel: "\u5E7F\u544A\u62A5\u8868 / MCP Token (\u53EF\u9009)",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5219\u4F7F\u7528 Hoxi.ai \u4E00\u952E\u6388\u6743\u4E0E\u6D4F\u89C8\u5668\u50CF\u7D20\u5DE1\u68C0",
    mcp: {
      serverId: "ads-growth-mcp",
      name: "Meta & Google \u4E70\u91CF\u589E\u957F MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/oauth/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "ads.creative_angle_matrix",
        "ads.google_pmax_assets",
        "ads.roas_funnel_diagnose",
        "ads.landing_page_message_match"
      ]
    },
    categories: [
      {
        id: "meta-creatives",
        label: "Meta \u4E70\u91CF\u7D20\u6750\u77E9\u9635",
        icon: "\u{1F3AF}",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u4E0E\u53D7\u4F17\u75DB\u70B9\uFF0C\u751F\u6210 Facebook / Instagram 6 \u5927\u5207\u5165\u70B9\u4E70\u91CF\u5E7F\u544A\u6587\u6848\u4E0E\u89C6\u9891\u811A\u672C...",
        chips: [
          {
            id: "six-angle-matrix",
            label: "6 \u5927\u4E70\u91CF\u5207\u5165\u70B9\uFF08Angles\uFF09\u88C2\u53D8",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u6838\u5FC3\u5356\u70B9\u4E0E\u5BA2\u5355\u4EF7\uFF0C\u4E00\u6B21\u6027\u751F\u6210 6 \u7EC4\u4E0D\u540C\u5207\u5165\u70B9\u7684\u5E7F\u544A\u521B\u610F...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u4E3A\u8FD9\u6B3E\u4EA7\u54C1\u7B56\u5212\u4E00\u5957 Meta (Facebook / Instagram) \u4E70\u91CF\u6D4B\u8BD5\u77E9\u9635\uFF0C\u5305\u542B 6 \u4E2A\u622A\u7136\u4E0D\u540C\u7684\u521B\u610F\u5207\u5165\u70B9\uFF08\u75DB\u70B9\u66B4\u51FB\u3001Us vs Them \u5BF9\u6BD4\u3001\u521B\u59CB\u4EBA\u80CC\u4E66\u3001UGC \u771F\u5B9E\u6D4B\u8BC4\u3001\u62C6\u7BB1\u7B97\u8D26\u3001\u9001\u793C\u573A\u666F\uFF09\uFF0C\u6BCF\u7EC4\u8F93\u51FA Primary Text\u3001Headline\u3001Description \u4E0E\u9996\u5E27\u89C6\u89C9\u6307\u5BFC\uFF1A\n\n\u63A8\u5E7F\u4EA7\u54C1\u4E0E\u5BA2\u5355\u4EF7\uFF1A"
          },
          {
            id: "ugc-hook-pack",
            label: "\u9AD8 CTR \u89C6\u9891\u524D 3 \u79D2\u94A9\u5B50\u5305",
            placeholder: "\u89E3\u51B3\u5E7F\u544A\u7D20\u6750\u75B2\u52B3\uFF0C\u751F\u6210 10 \u7EC4\u7ECF\u8FC7\u6D77\u5916\u4E70\u91CF\u9A8C\u8BC1\u7684\u9EC4\u91D1 3 \u79D2\u5F00\u5934...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u9488\u5BF9\u6211\u7684\u4E70\u91CF\u89C6\u9891\u7D20\u6750\u75B2\u52B3\u95EE\u9898\uFF0C\u8BBE\u8BA1 10 \u4E2A\u9AD8 Thumb-Stop Ratio\uFF083 \u79D2\u505C\u7559\u7387 > 35%\uFF09\u7684\u89C6\u9891\u524D 3 \u79D2\u89C6\u89C9\u52A8\u4F5C + \u82F1\u6587\u53E3\u64AD\u94A9\u5B50\uFF08Hooks\uFF09\uFF1A\n\n\u4EA7\u54C1\u4E0E\u76EE\u6807\u53D7\u4F17\uFF1A"
          }
        ]
      },
      {
        id: "google-pmax",
        label: "Google \u641C\u7D22\u4E0E PMax",
        icon: "\u{1F50D}",
        placeholder: "\u914D\u7F6E Google Search \u9AD8\u8D2D\u4E70\u610F\u56FE\u5173\u952E\u8BCD\u3001RSA \u54CD\u5E94\u5F0F\u641C\u7D22\u5E7F\u544A\u4E0E Performance Max \u8D44\u4EA7\u7EC4...",
        chips: [
          {
            id: "pmax-asset-group",
            label: "PMax \u5168\u5957\u6587\u6848\u8D44\u4EA7\u5305\u751F\u6210",
            placeholder: "\u4E00\u952E\u751F\u6210\u7B26\u5408\u5B57\u7B26\u4E0A\u9650\u7684 15 \u6761 Headlines\u30015 \u6761 Long Headlines \u4E0E 4 \u6761 Descriptions...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u6309 Google Ads Performance Max (PMax) \u4E0E RSA \u54CD\u5E94\u5F0F\u641C\u7D22\u5E7F\u544A\u89C4\u8303\uFF0C\u4E3A\u6211\u7684\u4EA7\u54C1\u751F\u6210\u4E25\u683C\u7B26\u5408\u5B57\u7B26\u9650\u5236\u7684 15 \u6761 Headlines\uFF08\u226430\u5B57\u7B26\uFF09\u30015 \u6761 Long Headlines\uFF08\u226490\u5B57\u7B26\uFF09\u30014 \u6761 Descriptions\uFF08\u226490\u5B57\u7B26\uFF09\u53CA Sitelink \u9644\u52A0\u94FE\u63A5\u6587\u6848\uFF1A\n\n\u54C1\u724C\u4E0E\u4EA7\u54C1\u5356\u70B9\uFF1A"
          },
          {
            id: "search-intent-keywords",
            label: "\u9AD8\u8F6C\u5316\u641C\u7D22\u8BCD\u4E0E\u5426\u8BCD\u67B6\u6784",
            placeholder: "\u6309\u54C1\u724C\u8BCD\u3001\u54C1\u7C7B\u8BCD\u3001\u7ADE\u54C1\u622A\u6D41\u8BCD\u89C4\u5212 Google Search \u5E7F\u544A\u7EC4\u4E0E\u6392\u9664\u8BCD...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u642D\u5EFA Google Search \u641C\u7D22\u5E7F\u544A\u7684\u9AD8\u610F\u56FE\u5173\u952E\u8BCD\u77E9\u9635\uFF08\u542B Exact / Phrase \u5EFA\u8BAE\uFF09\u4EE5\u53CA\u9632\u6B62\u9884\u7B97\u6D6A\u8D39\u7684 Negative Keywords\uFF08\u5426\u8BCD\u8868\uFF09\uFF1A\n\n\u63A8\u5E7F\u54C1\u7C7B\u4E0E\u9884\u7B97\uFF1A"
          }
        ]
      },
      {
        id: "roas-funnel",
        label: "ROAS \u6F0F\u6597\u4E0E\u843D\u5730\u9875\u5BF9\u8D26",
        icon: "\u{1F4CA}",
        placeholder: "\u8F93\u5165\u5E7F\u544A\u66DD\u5149\u3001CTR\u3001CPC\u3001\u52A0\u8D2D\u7387\u4E0E ROAS \u6570\u636E\uFF0C\u7CBE\u51C6\u5B9A\u4F4D\u4E70\u91CF\u4E8F\u635F\u73AF\u8282...",
        chips: [
          {
            id: "funnel-bottleneck",
            label: "\u4E70\u91CF\u5168\u6F0F\u6597\u75C5\u7076\u5F52\u56E0\u4E0E\u6269\u91CF",
            placeholder: "\u8F93\u5165\u5F53\u524D CPM\u3001CTR\u3001CPC\u3001ATC%\u3001CVR \u4E0E\u76C8\u4E8F\u5E73\u8861 ROAS\uFF0C\u83B7\u53D6\u8C03\u4F18\u52A8\u4F5C...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ads-growth-ops` \u6280\u80FD\uFF0C\u6839\u636E\u6211\u5F53\u524D\u7684\u5E7F\u544A\u6295\u653E\u6F0F\u6597\u6307\u6807\uFF08CPM / CTR / CPC / \u52A0\u8D2D\u7387 / \u7ED3\u8D26\u8F6C\u5316\u7387 / \u5B9E\u9645 ROAS vs \u4FDD\u672C ROAS\uFF09\uFF0C\u7CBE\u51C6\u8BCA\u65AD\u5230\u5E95\u662F\u7D20\u6750\u7AEF\u3001\u53D7\u4F17\u7AEF\u8FD8\u662F\u72EC\u7ACB\u7AD9\u843D\u5730\u9875\u7AEF\u6389\u4E86\u94FE\u5B50\uFF0C\u5E76\u7ED9\u51FA\u5173\u505C\u4E0E\u6269\u91CF\uFF08Scaling\uFF09\u64CD\u4F5C\u6307\u5357\uFF1A\n\n\u5F53\u524D\u6295\u653E\u6570\u636E\uFF1A"
          },
          {
            id: "landing-message-match",
            label: "\u5E7F\u544A\u4E0E\u843D\u5730\u9875\u4E00\u81F4\u6027\uFF08Message Match\uFF09\u4F53\u68C0",
            placeholder: "\u68C0\u67E5\u5E7F\u544A\u627F\u8BFA\u7684\u6298\u6263/\u75DB\u70B9\u662F\u5426\u5728\u843D\u5730\u9875\u9996\u5C4F 3 \u79D2\u5185\u5F97\u5230\u627F\u63A5...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ads-growth-ops` \u6280\u80FD\u914D\u5408\u5185\u7F6E\u6D4F\u89C8\u5668\uFF0C\u5BF9\u6BD4\u6211\u7684\u4E70\u91CF\u5E7F\u544A\u6587\u6848\u627F\u8BFA\u4E0E\u76EE\u6807\u843D\u5730\u9875\uFF08Landing Page\uFF09\u9996\u5C4F\u5185\u5BB9\uFF0C\u8BCA\u65AD Message Match \u4E00\u81F4\u6027\u3001\u52A0\u8F7D\u901F\u5EA6\u4E0E\u52A0\u8D2D\u8F6C\u5316\u963B\u529B\uFF1A\n\n\u5E7F\u544A\u6587\u6848\u4E0E\u843D\u5730\u9875 URL\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 5,
    hidden: false
  },
  {
    id: "1688",
    name: "1688 \u6E90\u5934\u5DE5\u5382\u8FD0\u8425",
    shortName: "1688",
    heroTitle: "1688 AI\uFF0C\u6E90\u5934\u5DE5\u5382 B2B \u83B7\u5BA2\u4E0E\u8DE8\u5883\u4F9B\u8D27 Agent",
    tagline: "7 \u661F\u9547\u5E97\u4E4B\u5B9D\u5546\u54C1\u4E0A\u67B6\u3001\u65FA\u65FA\u5927\u5BA2\u8BE2\u76D8\u8F6C\u5316\u3001\u6570\u5B57\u8425\u9500\u6295\u6D41\u4E0E\u8DE8\u5883\u4EE3\u53D1\u5206\u9500\u62DB\u52DF",
    skillName: "1688-ops",
    iconBg: "linear-gradient(135deg, #FF5000 0%, #EA580C 100%)",
    iconGlyph: "16",
    mascotEmoji: "\u{1F3ED}",
    mascotTitle: "1688 \u6E90\u5934\u5382\u957F",
    connectionLabel: "\u8DF3\u8F6C 1688 \u6388\u6743\u5E97\u94FA",
    connectionUrlLabel: "1688 \u65FA\u94FA\u57DF\u540D / \u5E97\u94FA\u5730\u5740\uFF08\u70B9\u51FB\u786E\u8BA4\u6388\u6743\u5C06\u8DF3\u8F6C 1688 \u767B\u5F55\u6388\u6743\uFF09",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1Ahttps://yourfactory.1688.com\uFF08\u4E5F\u53EF\u7559\u7A7A\u76F4\u63A5\u8DF3\u8F6C 1688 \u6388\u6743\uFF09",
    connectionTokenLabel: "1688 \u5F00\u653E\u5E73\u53F0 Access Token\uFF08\u53EF\u9009\uFF09",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5C06\u76F4\u63A5\u6253\u5F00 1688 \u5B98\u65B9\u9875\u9762\u5B8C\u6210\u767B\u5F55\u6388\u6743",
    mcp: {
      serverId: "1688-mcp",
      name: "1688 \u6E90\u5934\u5DE5\u5382\u4E0E\u8DE8\u5883\u4F9B\u8D27 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "hoxi-account",
      authUrl: "/api/hoxi/work/oauth/1688/authorize",
      consoleUrl: "/user/tokens",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: [
        "c1688_tiered_wholesale_blueprint",
        "1688.product_title_seo",
        "1688.rfq_quote_followup",
        "1688.crossborder_supply_pack"
      ]
    },
    categories: [
      {
        id: "1688-listing",
        label: "\u9547\u5E97\u4E4B\u5B9D\u4E0E 7 \u661F\u4E0A\u54C1",
        icon: "\u{1F3ED}",
        placeholder: "\u8F93\u5165\u51FA\u5382\u88F8\u4EF7\u3001\u6750\u8D28\u5DE5\u827A\u6216\u4EA7\u54C1\u53C2\u6570\uFF0C\u751F\u6210 1688 \u6EE1\u683C 30 \u5B57 B2B \u6807\u9898\u3001\u9636\u68AF\u6279\u53D1\u4EF7\u4E0E\u5B9E\u529B\u5DE5\u5382\u8BE6\u60C5\u9875...",
        chips: [
          {
            id: "1688-7star-listing",
            label: "7 \u661F\u9AD8\u6743\u91CD\u6807\u9898 + 3 \u6863\u9636\u68AF\u6279\u53D1\u4EF7\u5168\u6848",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u3001\u51FA\u5382\u6210\u672C\u3001\u8D77\u8BA2\u91CF\uFF08MOQ\uFF09\u4E0E\u6838\u5FC3\u5B9A\u5236\u5DE5\u827A...",
            starterPrompt: "\u8BF7\u8C03\u7528 `1688-ops` \u6280\u80FD\uFF0C\u6309 1688 \u6700\u65B0 B2B \u641C\u7D22\u6743\u91CD\u4E0E\u300C\u9547\u5E97\u4E4B\u5B9D\u300D\u6807\u51C6\uFF0C\u4E3A\u4EE5\u4E0B\u5DE5\u5382\u4EA7\u54C1\u751F\u6210\uFF1A1) 5 \u6761 30 \u6C49\u5B57\uFF0860 \u5B57\u7B26\uFF09\u6EE1\u683C\u9AD8\u8F6C\u5316\u6279\u53D1\u6807\u9898\uFF08\u8986\u76D6\u6E90\u5934\u5B9A\u5236\u3001\u73B0\u8D27\u6279\u53D1\u3001\u8DE8\u5883\u4E13\u4F9B\u3001\u4E00\u4EF6\u4EE3\u53D1\u8BCD\u6839\uFF09\uFF1B2) \u62FF\u6837\u4EF7 + 3 \u6863\u9636\u68AF\u6279\u53D1\u4EF7\u4E0E\u6BDB\u5229\u6D4B\u7B97\uFF1B3) 5 \u5F20\u9AD8\u70B9\u51FB\u4E3B\u56FE\u89C6\u89C9\u811A\u672C\u4E0E 8 \u5C4F\u5B9E\u529B\u5DE5\u5382\u8BE6\u60C5\u9875\u5927\u7EB2\uFF1A\n\n\u4EA7\u54C1\u53C2\u6570\u4E0E\u51FA\u5382\u6210\u672C\uFF1A"
          },
          {
            id: "1688-chrome-link-publish",
            label: "Chrome Link \u81EA\u52A8\u586B\u5165 1688 \u5356\u5BB6\u540E\u53F0",
            placeholder: "\u5C06\u5B9A\u7A3F\u7684 30 \u5B57\u6279\u53D1\u6807\u9898\u3001\u5C5E\u6027\u53C2\u6570\u4E0E\u9636\u68AF\u4EF7\u81EA\u52A8\u586B\u5165\u5DF2\u6253\u5F00\u7684 1688 \u5546\u54C1\u53D1\u5E03\u9875...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `1688-ops` \u6280\u80FD\u914D\u5408 `hoxi_browser`\uFF08Chrome Link\uFF09\uFF0C\u5C06\u6211\u4EEC\u5B9A\u7A3F\u7684 1688 \u6279\u53D1\u5546\u54C1\u6807\u9898\u3001\u89C4\u683C\u5C5E\u6027\u30013 \u6863\u9636\u68AF\u4EF7\u683C\u4E0E\u8BE6\u60C5\u6587\u6848\u81EA\u52A8\u586B\u5165\u6211\u5F53\u524D\u5DF2\u6253\u5F00\u7684 1688 \u5356\u5BB6\u5DE5\u4F5C\u53F0\uFF08my.1688.com\uFF09\u5546\u54C1\u53D1\u5E03\u6807\u7B7E\u9875\u4E2D\uFF0C\u5E76\u5728\u70B9\u51FB\u6700\u7EC8\u63D0\u4EA4\u6309\u94AE\u524D\u505C\u4E0B\u8BA9\u6211\u6838\u5BF9\u786E\u8BA4\uFF1A\n\n\u5F85\u586B\u5165\u5546\u54C1\u6216\u6307\u4EE4\uFF1A"
          }
        ]
      },
      {
        id: "1688-inquiry-rfq",
        label: "\u65FA\u65FA\u8BE2\u76D8\u4E0E\u5B9A\u5236\u62A5\u4EF7",
        icon: "\u{1F4AC}",
        placeholder: "\u8F93\u5165\u91C7\u8D2D\u5546\u8BE2\u76D8\u5185\u5BB9\u3001\u8D34\u724C\uFF08OEM/ODM\uFF09\u9700\u6C42\u6216\u5BC4\u6837\u8BB0\u5F55\uFF0C\u751F\u6210\u9AD8\u4FE1\u4EFB\u5EA6\u62A5\u4EF7\u5355\u4E0E\u903C\u5355\u8DDF\u8FDB\u8BDD\u672F...",
        chips: [
          {
            id: "oem-rfq-quotation",
            label: "OEM/ODM \u8D34\u724C\u5B9A\u5236\u9636\u68AF\u62A5\u4EF7\u5355\u751F\u6210",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u57FA\u7840\u6B3E\u6210\u672C\u3001\u4E1D\u5370/\u5F00\u6A21\u8D77\u8BA2\u91CF\u3001\u6253\u6837\u8D39\u4E0E\u4EA4\u671F\uFF0C\u751F\u6210\u4E13\u4E1A B2B \u62A5\u4EF7\u8868...",
            starterPrompt: "\u8BF7\u8C03\u7528 `1688-ops` \u6280\u80FD\uFF0C\u4E3A\u8BE2\u76D8\u5927\u5BA2\u6237\u751F\u6210\u4E00\u4EFD\u4E13\u4E1A\u4E25\u8C28\u7684\u300A1688 \u6E90\u5934\u5DE5\u5382 OEM/ODM \u5B9A\u5236\u9636\u68AF\u62A5\u4EF7\u5355\u300B\uFF08\u5305\u542B\uFF1A\u73B0\u8D27\u901A\u8D27 / Logo \u4E1D\u5370\u5B9A\u5236 / \u5305\u6750\u5B9A\u5236 / \u6A21\u5177\u5F00\u53D1 4 \u6863 MOQ \u8D77\u8BA2\u91CF\u4E0E\u542B\u7A0E13%\u4E13\u7968/\u4E0D\u542B\u7A0E\u51FA\u5382\u5355\u4EF7\u3001\u6253\u6837\u5468\u671F\u4E0E\u6EE1\u989D\u9000\u6837\u8D39\u89C4\u5219\u3001\u5927\u8D27\u4EA4\u671F\u53CA\u5916\u7BB1\u7BB1\u89C4\u53C2\u6570\u8868\uFF09\uFF1A\n\n\u4EA7\u54C1\u6210\u672C\u4E0E\u5B9A\u5236\u8981\u6C42\uFF1A"
          },
          {
            id: "wangwang-sample-followup",
            label: "\u65FA\u65FA\u8BE2\u76D8\u9996\u54CD\u7834\u51B0\u4E0E\u5BC4\u6837 1/3/7 \u5929\u50AC\u5355\u8BDD\u672F",
            placeholder: "\u9488\u5BF9\u95EE\u5B8C\u4EF7\u4E0D\u56DE\u590D\u6216\u5DF2\u62FF\u6837\u672A\u4E0B\u5927\u8D27\u7684\u91C7\u8D2D\u5546\uFF0C\u751F\u6210\u4E0D\u751F\u786C\u7684\u9AD8\u8F6C\u5316\u903C\u5355 SOP...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `1688-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BBE\u8BA1\u4E00\u5957\u9AD8\u8F6C\u5316\u7684\u300C1688 \u65FA\u65FA\u5927\u5BA2\u6237\u8BE2\u76D8\u4E0E\u62FF\u6837\u8DDF\u8FDB\u5267\u672C\u300D\uFF08\u6DB5\u76D6\uFF1A30 \u79D2\u9996\u54CD\u5C55\u73B0\u5DE5\u5382\u5B9E\u529B\u5E76\u5957\u53D6\u91C7\u8D2D\u91CF/\u6E20\u9053\u7528\u9014\u8BDD\u672F\u3001\u540C\u884C\u6076\u610F\u6BD4\u4EF7\u9AD8\u60C5\u5546\u62C6\u89E3\u8BDD\u672F\u3001\u6837\u54C1\u7B7E\u6536\u7B2C 1 \u5929\u6D4B\u8BD5\u53CD\u9988 + \u7B2C 3 \u5929\u6392\u4EA7\u6863\u671F\u63D0\u9192 + \u7B2C 7 \u5929\u6837\u54C1\u8D39\u62B5\u6263\u5927\u8D27\u903C\u5355\u8BDD\u672F\uFF09\uFF1A\n\n\u4E3B\u8425\u54C1\u7C7B\u4E0E\u5BA2\u6237\u753B\u50CF\uFF1A"
          }
        ]
      },
      {
        id: "1688-ads-campaign",
        label: "\u6570\u5B57\u8425\u9500\u4E0E\u4F19\u62FC\u5927\u4FC3",
        icon: "\u{1F4C8}",
        placeholder: "\u8BCA\u65AD\u8425\u6548\u5B9D / \u9996\u4F4D\u5C55\u793A / \u5168\u5E97\u63A8\u5173\u952E\u8BCD\u6295\u4EA7\u6BD4\uFF0C\u6216\u7B56\u5212\u4F19\u62FC\u56E2\u8D2D\u4E0E\u5546\u4EBA\u8282\u51B2\u699C\u65B9\u6848...",
        chips: [
          {
            id: "1688-ads-roi-audit",
            label: "\u8425\u6548\u5B9D / \u9996\u4F4D\u5C55\u793A\u7CBE\u51C6\u8BCD\u5305\u4E0E\u964D\u672C\u8BCA\u65AD",
            placeholder: "\u7C98\u8D34\u5F53\u524D\u63A8\u5E7F\u6D88\u8D39\u3001\u70B9\u51FB\u7387\u3001\u8BE2\u76D8\u6210\u672C\u6216\u4E3B\u63A8\u54C1\u7C7B\uFF0C\u8FC7\u6EE4\u6CDB\u6D41\u91CF\u5403\u9884\u7B97\u8BCD...",
            starterPrompt: "\u8BF7\u8C03\u7528 `1688-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BCA\u65AD 1688 \u6570\u5B57\u8425\u9500\uFF08\u8425\u6548\u5B9D / \u5168\u5E97\u63A8 / \u9996\u4F4D\u5C55\u793A\uFF09\u6295\u653E\u6F0F\u6597\uFF0C\u642D\u5EFA\u9AD8\u610F\u5411 B2B \u91C7\u8D2D\u8BCD\u5305\uFF08\u533A\u5206\u300C\u5382\u5BB6\u5B9A\u5236/\u8D34\u724C\u4EE3\u5DE5\u300D\u5927B\u8BCD\u3001\u300C\u8DE8\u5883\u4E13\u4F9B/\u4E9A\u9A6C\u900A\u7206\u6B3E\u300D\u5916\u8D38\u8BCD\u4E0E\u300C\u4E00\u4EF6\u4EE3\u53D1\u300D\u5C0FB\u8BCD\uFF09\uFF0C\u5E76\u7ED9\u51FA\u5426\u5B9A\u6CDBC\u7AEF\u8BCD\u4E0E\u62C9\u4F4E\u5355\u6B21\u8BE2\u76D8\u6210\u672C\uFF08CPL\uFF09\u7684\u5B9E\u64CD\u5EFA\u8BAE\uFF1A\n\n\u5F53\u524D\u63A8\u5E7F\u6570\u636E\u6216\u4E3B\u63A8\u54C1\uFF1A"
          },
          {
            id: "huopin-merchant-fest",
            label: "\u4F19\u62FC\u7206\u6B3E\u51B2\u91CF\u4E0E\u5546\u4EBA\u8282\u84C4\u6C34\u65B9\u6848",
            placeholder: "\u8F93\u5165\u6D3B\u52A8\u5F15\u6D41\u6B3E\u6210\u672C\u4E0E\u5E93\u5B58\uFF0C\u8BBE\u8BA1\u65B0\u5BA2\u9996\u5355\u7834\u51B0\u3001\u8001\u5BA2\u8FD4\u5355\u6EE1\u51CF\u4E0E\u9547\u5E97\u4E4B\u5B9D\u51B2\u699C\u8282\u594F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `1688-ops` \u6280\u80FD\uFF0C\u4E3A\u6211\u7684 1688 \u5E97\u94FA\u7B56\u5212\u4E00\u573A\u300C\u4F19\u62FC / \u5546\u4EBA\u8282\u5927\u4FC3\u51B2\u699C\u65B9\u6848\u300D\uFF08\u542B\u524D 3 \u5929\u8001\u5BA2\u5B9A\u91D1\u84C4\u6C34\u4FDD\u5E95\u6210\u4EA4\u989D\u3001\u5F15\u6D41\u6B3E\u9636\u68AF\u4F19\u62FC\u4EF7\u8BBE\u8BA1\u3001\u5173\u8054\u642D\u914D\u9AD8\u6BDB\u5229\u5229\u6DA6\u6B3E\u52A8\u7EBF\uFF0C\u4EE5\u53CA\u51B2\u523A\u7C7B\u76EE\u70ED\u9500\u699C\u4E0E\u9547\u5E97\u4E4B\u5B9D\u6743\u91CD\u7684\u6BCF\u65E5\u6267\u884C\u6E05\u5355\uFF09\uFF1A\n\n\u6D3B\u52A8\u5546\u54C1\u4E0E\u6BDB\u5229\u7A7A\u95F4\uFF1A"
          }
        ]
      },
      {
        id: "1688-crossborder-dropship",
        label: "\u8DE8\u5883\u4E13\u4F9B\u4E0E\u4EE3\u53D1\u62DB\u52DF",
        icon: "\u{1F30D}",
        placeholder: "\u5C06\u5DE5\u5382\u597D\u8D27\u6253\u5305\u4E3A Amazon / TikTok / Shopify \u8DE8\u5883\u4E13\u4F9B\u8D27\u76D8\uFF0C\u6216\u62DB\u52DF\u6DD8\u5B9D/\u6296\u97F3/\u5C0F\u7EA2\u4E66\u4E00\u4EF6\u4EE3\u53D1\u5206\u9500\u5546...",
        chips: [
          {
            id: "crossborder-supply-pack",
            label: "1688 \u8DE8\u5883\u4E13\u4F9B\u4E2D\u82F1\u8D27\u76D8\u5305\uFF08\u5BF9\u63A5 Amazon/TikTok/\u72EC\u7ACB\u7AD9\uFF09",
            placeholder: "\u8F93\u5165\u5DE5\u5382\u73B0\u8D27\u53C2\u6570\u3001\u88C5\u7BB1\u89C4\u683C\u4E0E\u4F9B\u8D27\u4EF7\uFF0C\u4E00\u952E\u751F\u6210\u5438\u5F15\u8DE8\u5883\u5927\u5356\u7684\u6807\u51C6\u5316\u9009\u54C1\u8D44\u6599\u5305...",
            starterPrompt: "\u8BF7\u8C03\u7528 `1688-ops` \u6280\u80FD\uFF0C\u5C06\u6211\u4EEC\u5DE5\u5382\u7684\u8FD9\u6B3E\u4EA7\u54C1\u6253\u9020\u4E3A\u7B26\u5408\u300C1688 \u8DE8\u5883\u4E13\u4F9B\u300D\u6807\u51C6\u7684\u7206\u6B3E\u8D27\u76D8\u8D44\u6599\u5305\uFF08\u5305\u542B\uFF1A\u8DE8\u5883\u5356\u5BB6\u6700\u5173\u5FC3\u7684\u5355\u4E2A\u51C0\u91CD/\u5916\u7BB1\u4F53\u79EF\u6750\u79EF\u91CD/\u88C5\u7BB1\u6570\u3001CE/FCC/EPA \u5408\u89C4\u8D44\u8D28\u8BF4\u660E\u3001\u5EFA\u8BAE\u7F8E\u533A Amazon/TikTok Shop \u96F6\u552E\u4EF7\u4E0E\u8DE8\u5883\u6BDB\u5229\u7A7A\u95F4\u6D4B\u7B97\u8868\uFF0C\u4EE5\u53CA\u53EF\u76F4\u63A5\u53D1\u7ED9\u8DE8\u5883\u4E70\u5BB6\u7684\u4E2D\u82F1\u53CC\u8BED\u5356\u70B9\u5361\uFF09\uFF1A\n\n\u5DE5\u5382\u4EA7\u54C1\u4E0E\u88C5\u7BB1\u53C2\u6570\uFF1A"
          },
          {
            id: "dropship-distributor-recruit",
            label: "\u6DD8\u5B9D / \u6296\u97F3 / \u5C0F\u7EA2\u4E66\u4E00\u4EF6\u4EE3\u53D1\u5206\u9500\u5546\u62DB\u52DF\u5168\u6848",
            placeholder: "\u8BBE\u8BA1\u4EE3\u53D1\u5206\u9500\u7B49\u7EA7\u6743\u76CA\u300148h \u53D1\u8D27\u4E0E\u7834\u635F\u5305\u8D54\u627F\u8BFA\u3001\u4E3B\u64AD\u5BC4\u6837\u89C4\u5219\u4E0E\u62DB\u52DF\u6D77\u62A5\u6587\u6848...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `1688-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BBE\u8BA1\u4E00\u5957\u5438\u5F15\u6DD8\u5B9D\u5E97\u4E3B\u3001\u6296\u97F3\u5E26\u8D27\u8FBE\u4EBA\u4E0E\u5C0F\u7EA2\u4E66\u4E70\u624B\u94FA\u8D27\u7684\u300A1688 \u4E00\u4EF6\u4EE3\u53D1\u5206\u9500\u62DB\u52DF\u65B9\u6848\u300B\uFF08\u5305\u542B\uFF1A0 \u95E8\u69DB\u4E00\u952E\u94FA\u8D27\u653F\u7B56\u3001\u6708\u9500\u9636\u68AF\u8FD4\u70B9\u4E0E\u63A7\u4EF7\u89C4\u5219\u3001\u9AD8\u6E05\u767D\u5E95\u56FE/\u5B9E\u62CD\u539F\u7247\u7D20\u6750\u5305\u76EE\u5F55\uFF0C\u4EE5\u53CA\u65FA\u94FA\u9996\u9875\u300C\u8BDA\u62DB\u4EE3\u7406/\u4E00\u4EF6\u4EE3\u53D1\u300D\u62DB\u52DF\u8BE6\u60C5\u6587\u6848\uFF09\uFF1A\n\n\u4EE3\u53D1\u4F9B\u8D27\u4EF7\u4E0E\u5EFA\u8BAE\u96F6\u552E\u63A7\u4EF7\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 6,
    hidden: false
  }
];
const hoxiWorkApps = [
  ...hoxiPlatformWorkApps,
  {
    id: "shopark",
    name: "Shopark \u72EC\u7ACB\u7AD9",
    shortName: "Shopark",
    heroTitle: "Shopark AI\uFF0C\u5168\u6258\u7BA1\u9AD8\u8F6C\u5316\u54C1\u724C\u72EC\u7ACB\u7AD9 Agent",
    tagline: "\u8FDE\u63A5\u4F60\u7684 Shopark \u72EC\u7ACB\u7AD9\u8D26\u53F7\uFF0C\u81EA\u52A8\u5DE1\u68C0\u72EC\u7ACB\u7AD9\u5E97\u94FA\u3001GMV \u5927\u76D8\u3001\u5546\u54C1\u5E93\u5B58\u4E0E\u4FC3\u9500\u6D3B\u52A8",
    skillName: "shopark-ops",
    oneClickStoreAuth: false,
    iconBg: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    iconGlyph: "S",
    mascotEmoji: "\u{1F3EA}",
    mascotTitle: "Shopark \u72EC\u7ACB\u7AD9\u5E97\u957F",
    connectionLabel: "\u53BB Shopark \u5B98\u7F51\u767B\u5F55\u6388\u6743",
    connectionUrlLabel: "Shopark \u7AD9\u70B9\u6216\u72EC\u7ACB\u7AD9\u57DF\u540D\uFF08\u9ED8\u8BA4 shopark.ai",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1Ahttps://shopark.ai \u6216\u4F60\u7684\u54C1\u724C\u72EC\u7ACB\u7AD9\u57DF\u540D",
    connectionTokenLabel: "Shopark \u6388\u6743\u51ED\u8BC1\uFF08\u53EF\u9009\uFF0C\u7559\u7A7A\u8DF3\u8F6C\u5B98\u7F51\u767B\u5F55\u6388\u6743\uFF09",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5C06\u6253\u5F00 Shopark \u5B98\u7F51\u767B\u5F55\u4F60\u7684\u72EC\u7ACB\u8D26\u53F7\u5E76\u5B8C\u6210\u6388\u6743",
    mcp: {
      serverId: "shopark-mcp",
      name: "Shopark \u72EC\u7ACB\u7AD9\u5B98\u65B9 MCP",
      url: "https://shopark.ai/api/mcp",
      transport: "http",
      authType: "oauth",
      authUrl: "https://shopark.ai/api/oauth/authorize",
      consoleUrl: "https://shopark.ai/user/stores",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:tickets:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: ["apay_get_profile", "apay_list_orders", "apay_get_order_detail", "apay_list_subscriptions", "apay_list_tickets"]
    },
    categories: [
      {
        id: "storefront-launch",
        label: "\u6781\u901F\u5EFA\u7AD9\u4E0E\u88C5\u4FEE",
        icon: "\u{1F3EA}",
        placeholder: "\u63CF\u8FF0\u4F60\u60F3\u6253\u9020\u7684\u54C1\u724C\u72EC\u7ACB\u7AD9\u54C1\u7C7B\u6216\u53C2\u8003\u7ADE\u54C1\u7F51\u5740\uFF0C\u4E00\u952E\u751F\u6210\u9AD8\u8F6C\u5316\u5EFA\u7AD9\u4E0E\u88C5\u4FEE\u65B9\u6848...",
        chips: [
          {
            id: "one-sentence-store",
            label: "\u4E00\u53E5\u8BDD\u751F\u6210\u54C1\u724C\u72EC\u7ACB\u7AD9\u5168\u6848",
            placeholder: "\u8F93\u5165\u4F60\u7684\u4EA7\u54C1\u54C1\u7C7B\u4E0E\u76EE\u6807\u5E02\u573A\uFF08\u5982\uFF1A\u9762\u5411\u6B27\u7F8E\u5E02\u573A\u7684\u667A\u80FD\u5BA0\u7269\u7528\u54C1\u72EC\u7ACB\u7AD9\uFF09...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `shopark-ops` \u6280\u80FD\uFF0C\u4E3A\u6211\u5F53\u524D\u9009\u4E2D\u7684 Shopark \u5E97\u94FA\u89C4\u5212\u5E76\u751F\u6210\u4E00\u5957\u5B8C\u6574\u7684\u54C1\u724C\u72EC\u7ACB\u7AD9\u65B9\u6848\uFF08\u5305\u542B\u9996\u9875\u9996\u5C4F\u9EC4\u91D1 5 \u79D2 Hero \u533A\u3001\u54C1\u724C\u6545\u4E8B\u4E0E\u4FE1\u4EFB\u80CC\u4E66\u6A21\u5757\u3001\u6838\u5FC3\u5356\u70B9\u62C6\u89E3\u533A\u3001\u9AD8\u8F6C\u5316\u5206\u7C7B\u5BFC\u822A\u7ED3\u6784\u53CA\u9875\u811A\u5408\u89C4\u653F\u7B56\u6E05\u5355\uFF09\uFF1A\n\n\u76EE\u6807\u54C1\u7C7B\u4E0E\u53D7\u4F17\u5E02\u573A\uFF1A"
          },
          {
            id: "hero-cro-makeover",
            label: "\u72EC\u7ACB\u7AD9\u9996\u5C4F\u8F6C\u5316\u7387\uFF08CRO\uFF09\u5347\u7EA7",
            placeholder: "\u544A\u8BC9\u6211\u5F53\u524D\u72EC\u7ACB\u7AD9\u4E3B\u6253\u4EA7\u54C1\u6216\u8F6C\u5316\u75DB\u70B9\uFF0C\u91CD\u5851\u9996\u5C4F\u4EF7\u503C\u4E3B\u5F20\u4E0E\u52A0\u8D2D\u52A8\u7EBF...",
            starterPrompt: "\u8BF7\u7ED3\u5408 `shopark-ops` \u6280\u80FD\uFF0C\u5E2E\u6211\u8BCA\u65AD\u5E76\u5347\u7EA7\u5F53\u524D Shopark \u72EC\u7ACB\u7AD9\u9996\u5C4F\uFF08Above the Fold\uFF09\u7684\u4EF7\u503C\u4E3B\u5F20\u4E3B\u526F\u6807\u9898\u3001\u4E3B\u89C6\u89C9\u6784\u56FE\u6307\u5BFC\u3001\u4FE1\u4EFB\u5FBD\u7AE0\u6392\u5E03\u3001\u9636\u68AF\u52A0\u8D2D\u5C55\u793A\u4E0E\u4E3B CTA \u6309\u94AE\u6587\u6848\uFF1A\n\n\u5F53\u524D\u4E3B\u6253\u5546\u54C1\u4E0E\u73B0\u72B6\uFF1A"
          }
        ]
      },
      {
        id: "dashboard-audit",
        label: "\u7ECF\u8425\u5927\u76D8\u5DE1\u68C0",
        icon: "\u{1F4CA}",
        placeholder: "\u4E00\u952E\u5DE1\u68C0\u5F53\u524D Shopark \u5E97\u94FA GMV\u3001\u8BA2\u5355\u5C65\u7EA6\u3001\u6D3B\u8DC3\u72B6\u6001\u4E0E\u5230\u671F\u9884\u8B66...",
        chips: [
          {
            id: "gmv-overview",
            label: "\u4ECA\u65E5\u5E97\u94FA GMV \u4E0E\u8BA2\u5355\u5DE1\u68C0",
            placeholder: "\u6C47\u603B\u4ECA\u65E5\u4E0E\u8FD1 30 \u5929\u8BA2\u5355\u91CF\u3001GMV\u3001\u5BA2\u5355\u4EF7\u53CA\u5F02\u5E38\u6CE2\u52A8\u539F\u56E0...",
            starterPrompt: "\u8BF7\u8C03\u7528 `shopark-ops` \u6280\u80FD\u4E0E\u5DF2\u6388\u6743\u7684 MCP \u5DE5\u5177\uFF0C\u5E2E\u6211\u5168\u9762\u5DE1\u68C0\u5F53\u524D Shopark \u72EC\u7ACB\u7AD9\u8D26\u6237\u4E0E\u5E97\u94FA\u7ECF\u8425\u72B6\u6001\uFF08\u8BA2\u5355\u8868\u73B0\u3001\u8BA2\u9605\u6743\u76CA\u72B6\u6001\u3001\u5F85\u5904\u7406\u5DE5\u5355\u4E0E\u5F02\u5E38\u9884\u8B66\uFF09\uFF0C\u5E76\u8F93\u51FA\u4ECA\u65E5\u524D 3 \u9879\u7ECF\u8425\u884C\u52A8\u5EFA\u8BAE\uFF1A"
          },
          {
            id: "flash-sale-plan",
            label: "\u5168\u5E97\u5927\u4FC3\u6EE1\u51CF\u4E0E\u95EA\u4FC3\u7B56\u5212",
            placeholder: "\u8F93\u5165\u6D3B\u52A8\u8282\u65E5\u6216\u6E05\u4ED3\u76EE\u6807\uFF0C\u751F\u6210\u9636\u68AF\u6EE1\u51CF\u89C4\u5219\u3001\u6298\u6263\u7801\u4E0E\u6D3B\u52A8\u6A2A\u5E45...",
            starterPrompt: "\u8BF7\u7ED3\u5408\u5F53\u524D Shopark \u5E97\u94FA\u5728\u552E\u5546\u54C1\u7ED3\u6784\uFF0C\u5E2E\u6211\u7B56\u5212\u4E00\u573A\u9AD8\u8F6C\u5316\u300C\u5468\u672B 48 \u5C0F\u65F6\u9650\u65F6\u95EA\u4FC3 / \u6362\u5B63\u5927\u4FC3\u300D\u65B9\u6848\uFF08\u542B\u5F15\u6D41\u7206\u6B3E\u5B9A\u4EF7\u3001\u51D1\u5355\u6EE1\u51CF\u95E8\u69DB\u8BA1\u7B97\u3001VIP \u4E13\u5C5E\u6298\u6263\u7801\u53CA\u5168\u7AD9\u5012\u8BA1\u65F6 Banner \u6587\u6848\uFF09\uFF1A\n\n\u4FC3\u9500\u76EE\u6807\u4E0E\u6BDB\u5229\u7A7A\u95F4\uFF1A"
          }
        ]
      }
    ]
  },
  {
    id: "qingpu",
    name: "\u8F7B\u94FA AI \u4E0A\u54C1",
    shortName: "\u8F7B\u94FA AI",
    heroTitle: "\u8F7B\u94FA AI\uFF0C\u4E00\u4EBA\u516C\u53F8\u667A\u80FD\u9009\u54C1\u6D17\u7A3F\u4E0E\u591A\u5E73\u53F0\u520A\u767B Agent",
    tagline: "\u767B\u5F55\u4F60\u7684 qingpu.ai  \u72EC\u7ACB\u8D26\u53F7\u6388\u6743\uFF0C1688/\u7ADE\u54C1\u94FE\u63A5\u6E05\u6D17\u91CD\u6784\u3001AI \u5546\u62CD\u89C6\u89C9\u811A\u672C\u4E0E\u591A\u5E97\u6279\u91CF\u4E0A\u54C1",
    skillName: "qingpu-ops",
    oneClickStoreAuth: false,
    iconBg: "linear-gradient(135deg, #FF6B2C 0%, #FF9F1C 100%)",
    iconGlyph: "\u8F7B",
    mascotEmoji: "\u2728",
    mascotTitle: "\u8F7B\u94FA\u4E0A\u54C1\u4E13\u5BB6",
    connectionLabel: "\u53BB \u8F7B\u94FA AI \u5B98\u7F51\u767B\u5F55\u6388\u6743",
    connectionUrlLabel: "\u8F7B\u94FA\u7AD9\u70B9\u57DF\u540D\uFF08\u652F\u6301 qingpu.ai \uFF09",
    connectionUrlPlaceholder: "\u9ED8\u8BA4 https://qingpu.ai",
    connectionTokenLabel: "\u8F7B\u94FA\u6388\u6743\u51ED\u8BC1\uFF08\u53EF\u9009\uFF0C\u7559\u7A7A\u8DF3\u8F6C\u5B98\u7F51\u767B\u5F55\u6388\u6743\uFF09",
    connectionTokenPlaceholder: "\u7559\u7A7A\u5C06\u6253\u5F00\u8F7B\u94FA\u5B98\u7F51\uFF08qingpu.ai\uFF09\u767B\u5F55\u4F60\u7684\u72EC\u7ACB\u8D26\u53F7\u5E76\u6388\u6743",
    mcp: {
      serverId: "qingpu-mcp",
      name: "\u8F7B\u94FA AI \u5B98\u65B9\u4E0A\u54C1 MCP",
      url: "https://qingpu.ai/api/mcp",
      transport: "http",
      authType: "oauth",
      authUrl: "https://qingpu.ai/api/oauth/authorize",
      consoleUrl: "https://qingpu.ai/user/stores",
      scopes: ["mcp:tools", "mcp:profile:read", "mcp:orders:read", "mcp:subscriptions:read", "mcp:theme:read", "mcp:theme:plan"],
      toolsPreview: ["hoxi_work_list_apps", "shopify_csv_blueprint", "amazon_fba_profit_listing_audit", "apay_get_profile"]
    },
    categories: [
      {
        id: "smart-listing",
        label: "1688 \u6D17\u7A3F\u4E0E\u6781\u901F\u4E0A\u54C1",
        icon: "\u{1F4E6}",
        placeholder: "\u7C98\u8D34 1688/\u4F9B\u5E94\u5546\u53C2\u6570\u6216\u7ADE\u54C1\u94FE\u63A5\uFF0C\u4E00\u952E\u53BB\u540C\u8D28\u5316\u91CD\u5199\u4E3A\u9AD8\u6EA2\u4EF7\u8DE8\u5883\u5546\u54C1\u5168\u6848...",
        chips: [
          {
            id: "supplier-link-clean",
            label: "1688 / \u4F9B\u8D27\u94FE\u63A5\u6D17\u7A3F\u91CD\u6784\u4E0A\u54C1",
            placeholder: "\u7C98\u8D34 1688\u3001\u901F\u5356\u901A\u6216\u7ADE\u54C1\u539F\u59CB\u5546\u54C1\u8D44\u6599\uFF0C\u91CD\u5199\u4E3A\u9AD8\u6EA2\u4EF7\u54C1\u724C\u5546\u54C1\u8BE6\u60C5...",
            starterPrompt: "\u8BF7\u8C03\u7528 `qingpu-ops` \u6280\u80FD\uFF0C\u5C06\u4EE5\u4E0B 1688/\u4F9B\u5E94\u5546\u539F\u59CB\u5546\u54C1\u8D44\u6599\u6E05\u6D17\u63D0\u70BC\uFF0C\u53BB\u9664\u751F\u786C\u5382\u724C\u8BCD\u4E0E\u4E2D\u5F0F\u82F1\u8BED\uFF0C\u91CD\u6784\u4E3A\u5177\u5907\u9AD8\u6EA2\u4EF7\u54C1\u724C\u611F\u7684\u8DE8\u5883\u5546\u54C1\u4E0A\u67B6\u5168\u6848\uFF08\u542B SEO \u6807\u9898\u3001\u9996\u5C4F 5 \u5927\u75DB\u70B9\u5229\u76CA\u5356\u70B9\u3001AIDA \u8BE6\u60C5\u9875\u56FE\u6587\u7ED3\u6784\u3001\u591A\u89C4\u683C\u9636\u68AF\u5B9A\u4EF7\u4E0E FAQ\uFF09\uFF1A\n\n\u539F\u59CB\u5546\u54C1\u8D44\u6599\u6216\u94FE\u63A5\uFF1A"
          },
          {
            id: "multi-channel-adapt",
            label: "\u4E00\u7A3F\u591A\u6295\uFF08\u72EC\u7ACB\u7AD9 + Amazon + TikTok\uFF09\u9002\u914D",
            placeholder: "\u8F93\u5165\u4E00\u6B3E\u4E3B\u63A8\u65B0\u54C1\uFF0C\u540C\u6B65\u751F\u6210\u9002\u914D\u72EC\u7ACB\u7AD9\u3001\u4E9A\u9A6C\u900A\u4E0E TikTok \u5C0F\u5E97\u7684\u520A\u767B\u5305...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `qingpu-ops` \u6280\u80FD\uFF0C\u56F4\u7ED5\u4EE5\u4E0B\u4E3B\u63A8\u65B0\u54C1\uFF0C\u4E00\u6B21\u6027\u8F93\u51FA\u9002\u914D 3 \u5927\u6E20\u9053\u7684\u5DEE\u5F02\u5316\u4E0A\u54C1\u520A\u767B\u5305\uFF1A1) \u54C1\u724C\u72EC\u7ACB\u7AD9\u9AD8\u6EA2\u4EF7\u6545\u4E8B\u578B\u8BE6\u60C5\u4E0E\u6346\u7ED1\u5957\u9910\uFF1B2) Amazon COSMO \u7B97\u6CD5\u4E94\u70B9\u63CF\u8FF0\u4E0E 250 Bytes \u641C\u7D22\u8BCD\uFF1B3) TikTok Shop \u624B\u673A\u7AEF\u9AD8\u641C\u7D22\u6807\u9898\u4E0E 9 \u56FE\u5356\u70B9\u811A\u672C\uFF1A\n\n\u65B0\u54C1\u6838\u5FC3\u53C2\u6570\u4E0E\u6210\u672C\uFF1A"
          }
        ]
      },
      {
        id: "visual-pricing",
        label: "\u5546\u62CD\u89C6\u89C9\u4E0E\u8DE8\u5883\u5B9A\u4EF7",
        icon: "\u{1F3A8}",
        placeholder: "\u751F\u6210 9 \u5F20\u9AD8\u8F6C\u5316\u7535\u5546\u4E3B\u56FE/\u573A\u666F\u56FE\u5206\u955C\u811A\u672C\uFF0C\u6216\u6D4B\u7B97\u591A\u56FD\u5E01\u79CD\u6BDB\u5229\u4E0E\u500D\u7387\u5B9A\u4EF7...",
        chips: [
          {
            id: "nine-grid-visual-script",
            label: "\u9AD8\u8F6C\u5316\u7535\u5546 9 \u56FE\u89C6\u89C9\u4E0E\u7F8E\u5DE5 Brief",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u5916\u89C2\u4E0E\u6838\u5FC3\u529F\u80FD\uFF0C\u751F\u6210\u767D\u5E95\u4E3B\u56FE\u3001\u75DB\u70B9\u5BF9\u6BD4\u56FE\u3001\u573A\u666F\u56FE\u4E0E\u5C3A\u5BF8\u56FE\u811A\u672C...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `qingpu-ops` \u6280\u80FD\uFF0C\u4E3A\u8FD9\u6B3E\u5546\u54C1\u8BBE\u8BA1\u4E00\u5957\u9AD8\u70B9\u51FB\u7387\u300C\u7535\u5546\u8F6E\u64AD 9 \u56FE + \u8BE6\u60C5\u9996\u5C4F\u6D77\u62A5\u300D\u89C6\u89C9\u811A\u672C\uFF08\u9010\u5F20\u660E\u786E\u753B\u9762\u4E3B\u4F53\u3001\u5149\u7EBF\u6C1B\u56F4\u3001\u75DB\u70B9/\u5229\u76CA\u5BF9\u6BD4\u6784\u56FE\u53CA\u4E2D\u82F1\u53CC\u8BED\u753B\u9762\u8D34\u7EB8\u6587\u6848\uFF09\uFF1A\n\n\u4EA7\u54C1\u540D\u79F0\u4E0E\u6838\u5FC3\u5356\u70B9\uFF1A"
          },
          {
            id: "cross-border-pricing-matrix",
            label: "\u8DE8\u5883\u591A\u7AD9\u70B9\u6C47\u7387\u4E0E\u9636\u68AF\u6BDB\u5229\u6D4B\u7B97",
            placeholder: "\u8F93\u5165\u62FF\u8D27\u4EF7\uFF08RMB\uFF09\u4E0E\u5934\u7A0B\u91CD\u91CF\uFF0C\u6D4B\u7B97\u7F8E/\u6B27/\u82F1/\u65E5\u7AD9\u70B9\u552E\u4EF7\u4E0E\u6346\u7ED1\u6298\u6263...",
            starterPrompt: "\u8BF7\u8C03\u7528 `qingpu-ops` \u6280\u80FD\uFF0C\u6839\u636E\u4EE5\u4E0B\u4EBA\u6C11\u5E01\u62FF\u8D27\u6210\u672C\u4E0E\u9884\u4F30\u7269\u6D41\u91CD\u91CF\uFF0C\u6D4B\u7B97\u9762\u5411\u7F8E\u56FD\uFF08USD\uFF09\u3001\u6B27\u6D32\uFF08EUR\uFF09\u3001\u82F1\u56FD\uFF08GBP\uFF09\u7AD9\u70B9\u7684\u5EFA\u8BAE\u96F6\u552E\u4EF7\u3001\u5212\u7EBF\u951A\u70B9\u4EF7\u30012 \u4EF6 85 \u6298 / 3 \u4EF6 75 \u6298\u9636\u68AF\u5957\u9910\u6BDB\u5229\u7387\u53CA\u5E7F\u544A\u4FDD\u672C ROAS\uFF1A\n\n\u62FF\u8D27\u6210\u672C\uFF08RMB\uFF09\u4E0E\u91CD\u91CF\uFF1A"
          }
        ]
      }
    ]
  },
  {
    id: "ozon",
    name: "Ozon \u4FC4\u7F57\u65AF\u8DE8\u5883\u8FD0\u8425",
    shortName: "Ozon",
    heroTitle: "Ozon AI\uFF0C\u4FC4\u7F57\u65AF\u7AD9\u70B9\u5546\u54C1\u5361\u7247\u4E0E\u5E7F\u544A\u8FD0\u8425 Agent",
    tagline: "\u5C5E\u6027\u6743\u91CD\u4F18\u5148\u7684 Ozon \u5546\u54C1\u5361\u7247\u3001Rich-content \u5BCC\u6587\u672C\u3001\u5E7F\u544A \u0414\u0420\u0420 \u8BCA\u65AD\u4E0E\u8BC4\u4EF7 VOC \u6316\u6398",
    skillName: "ozon-ops",
    iconBg: "linear-gradient(135deg, #005BFF 0%, #F91155 100%)",
    iconGlyph: "O",
    mascotEmoji: "\u{1F6D2}",
    mascotTitle: "Ozon \u8DE8\u5883\u5E97\u957F",
    connectionLabel: "\u7ED1\u5B9A Ozon \u5E97\u94FA\uFF08Client-Id + Api-Key\uFF09",
    connectionUrlLabel: "Ozon Client-Id\uFF08\u5356\u5BB6\u540E\u53F0 \u2192 \u8BBE\u7F6E \u2192 API \u5BC6\u94A5\uFF0CAdmin \u6743\u9650\uFF09",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1A123456",
    connectionTokenLabel: "Ozon Api-Key",
    connectionTokenPlaceholder: "\u7C98\u8D34 Ozon Seller \u751F\u6210\u7684 Api-Key",
    mcp: {
      serverId: "ozon-mcp",
      name: "Ozon \u8DE8\u5883\u8FD0\u8425 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "none",
      authUrl: "/api/oauth/authorize",
      toolsPreview: ["ozon.product_card_seo", "ozon.rich_content_plan", "ozon.ads_drr_audit"]
    },
    categories: [
      {
        id: "ozon-card",
        label: "\u5546\u54C1\u5361\u7247\u4E0E Rich-content",
        icon: "\u{1F4C7}",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u53C2\u6570\u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF0C\u751F\u6210\u5C5E\u6027\u4F18\u5148\u7684 \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\u3001\u5B8C\u6574 \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u4E0E Rich-content \u6392\u7248...",
        chips: [
          {
            id: "ozon-card-full",
            label: "Ozon \u5546\u54C1\u5361\u7247\u5168\u6848\uFF08\u5C5E\u6027\u4F18\u5148\uFF09",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u53C2\u6570\u3001\u4FC4\u8BED\u5173\u952E\u8BCD\u4E0E\u7ADE\u54C1\u5361\u7247\uFF0C\u751F\u6210 \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 + \u5B8C\u6574 \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ozon-ops` \u6280\u80FD\uFF0C\u6309 Ozon \u6392\u5E8F\u903B\u8F91\u4E3A\u4EE5\u4E0B\u4EA7\u54C1\u751F\u6210\u5546\u54C1\u5361\u7247\u5168\u6848\uFF1A1) \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\uFF08\u2264200 \u5B57\u7B26\uFF0C\u542B \u0422\u0438\u043F+\u0411\u0440\u0435\u043D\u0434+\u5C5E\u6027\uFF0C\u65E0\u4FC3\u9500\u8BCD\uFF09\uFF1B2) \u9010\u9879\u586B\u6EE1\u7684 \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438\uFF08\u6838\u5FC3\u641C\u7D22\u8BCD\u843D\u5165\u5C5E\u6027\u503C\uFF09\uFF1B3) \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u4E0E\u5A92\u4F53\u7D20\u6750\u65B9\u6848\uFF1A\n\n\u4EA7\u54C1\u53C2\u6570\u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF1A"
          },
          {
            id: "ozon-rich-content",
            label: "Rich-content \u5BCC\u6587\u672C\u8BE6\u60C5\u811A\u672C",
            placeholder: "\u89C4\u5212\u9996\u5C4F\u5356\u70B9\u5927\u56FE\u3001\u56FE\u6587\u529F\u80FD\u62C6\u89E3\u3001\u89C4\u683C\u5BF9\u6BD4\u8868\u4E0E\u54C1\u724C\u6545\u4E8B\u7684\u5BCC\u6587\u672C\u6A21\u5757...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ozon-ops` \u6280\u80FD\uFF0C\u4E3A\u8FD9\u6B3E\u5546\u54C1\u8F93\u51FA Ozon Rich-content \u8BE6\u60C5\u9875\u9010\u6A21\u5757\u811A\u672C\uFF08\u6807\u9898\u3001\u4FC4\u8BED\u6587\u6848\u3001\u753B\u9762\u6784\u56FE\u6307\u5BFC\u4E0E\u5E95\u90E8\u4EA4\u53C9\u9500\u552E\uFF09\uFF1A\n\n\u4EA7\u54C1\u5916\u89C2\u4E0E\u6838\u5FC3\u5356\u70B9\uFF1A"
          }
        ]
      },
      {
        id: "ozon-ads",
        label: "\u5E7F\u544A\u8BCA\u65AD\u4E0E\u8BC4\u4EF7\u8FD0\u8425",
        icon: "\u{1F4C8}",
        placeholder: "\u7C98\u8D34\u63A8\u5E7F\u6D88\u8D39/CTR/\u8F6C\u5316\uFF0C\u8BCA\u65AD \u0414\u0420\u0420 \u5E76\u5254\u9664\u96F6\u8F6C\u5316\u641C\u7D22\u8BCD\uFF0C\u6216\u6316\u6398\u7ADE\u54C1\u8BC4\u4EF7\u75DB\u70B9...",
        chips: [
          {
            id: "ozon-ads-drr",
            label: "Ozon \u5E7F\u544A \u0414\u0420\u0420 \u4E0E\u96F6\u8F6C\u5316\u8BCD\u8BCA\u65AD",
            placeholder: "\u8F93\u5165\u641C\u7D22\u63A8\u5E7F/\u6A21\u677F/\u54C1\u724C\u8D27\u67B6\u7684\u5C55\u793A\u3001CTR \u4E0E\u8F6C\u5316\uFF0C\u5B9A\u4F4D\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u8BCD...",
            starterPrompt: "\u8BF7\u8C03\u7528 `ozon-ops` \u6280\u80FD\uFF0C\u8BCA\u65AD\u4EE5\u4E0B Ozon \u5E7F\u544A\uFF08\u041F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 / \u0422\u0440\u0430\u0444\u0430\u0440\u0435\u0442\u044B / \u0411\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u044F \u043F\u043E\u043B\u043A\u0430\uFF09\u6F0F\u6597\uFF0C\u8BA1\u7B97\u5404\u9879 \u0414\u0420\u0420\uFF0C\u5254\u9664\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u641C\u7D22\u8BCD\u5E76\u7ED9\u51FA\u7ADE\u4EF7\u8C03\u6574\u5EFA\u8BAE\uFF1A\n\n\u5E7F\u544A\u6570\u636E\uFF1A"
          },
          {
            id: "ozon-review-voc",
            label: "\u041E\u0442\u0437\u044B\u0432\u044B \u8BC4\u4EF7\u4E0E\u95EE\u7B54 VOC \u6316\u6398",
            placeholder: "\u7C98\u8D34\u540C\u7C7B\u76EE\u7ADE\u54C1\u8BC4\u4EF7\uFF0C\u63D0\u70BC\u5DEE\u8BC4\u75DB\u70B9\u4E0E\u597D\u8BC4\u723D\u70B9\uFF0C\u6307\u5BFC\u5361\u7247\u9632\u5DEE\u8BC4\u8BDD\u672F...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `ozon-ops` \u6280\u80FD\uFF0C\u4ECE\u4EE5\u4E0B\u540C\u7C7B\u76EE\u7ADE\u54C1 \u041E\u0442\u0437\u044B\u0432\u044B \u4E0E\u95EE\u7B54\u4E2D\u63D0\u70BC\u4F4E\u9891\u5DEE\u8BC4\u75DB\u70B9\u4E0E\u9AD8\u9891\u597D\u8BC4\u723D\u70B9\uFF0C\u8F93\u51FA\u9009\u54C1\u5FAE\u521B\u65B0\u65B9\u5411\u3001\u5361\u7247\u9632\u5DEE\u8BC4\u8BDD\u672F\u4E0E\u95EE\u7B54\u9884\u57CB\u6E05\u5355\uFF1A\n\n\u7ADE\u54C1\u8BC4\u4EF7\u4E0E\u95EE\u7B54\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 8,
    hidden: false
  },
  {
    id: "wildberries",
    name: "Wildberries \u4FC4\u7F57\u65AF\u8DE8\u5883\u8FD0\u8425",
    shortName: "WB",
    heroTitle: "Wildberries AI\uFF0C\u4FC4\u7F57\u65AF\u7AD9\u70B9\u5546\u54C1\u5361\u7247\u4E0E\u8D39\u7387\u5E7F\u544A Agent",
    tagline: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u5C5E\u6027\u641C\u7D22\u5361\u4F4D\u3001\u6761\u7801\u4E0E \u041A\u0438\u0417 \u6807\u8BC6\u3001\u041A\u0413\u0422/\u041C\u0413\u0422 \u8D39\u7387\u6D4B\u7B97\u4E0E \u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u0414\u0420\u0420 \u8BCA\u65AD",
    skillName: "wildberries-ops",
    iconBg: "linear-gradient(135deg, #8E44AD 0%, #CB11AB 100%)",
    iconGlyph: "W",
    mascotEmoji: "\u{1F4E6}",
    mascotTitle: "WB \u8DE8\u5883\u5E97\u957F",
    connectionLabel: "\u7ED1\u5B9A Wildberries \u5E97\u94FA\uFF08Api-Key\uFF09",
    connectionUrlLabel: "WB Seller \u7AD9\u70B9\uFF08Wildberries Global \u8DE8\u5883 / FBW / FBS\uFF09",
    connectionUrlPlaceholder: "\u4F8B\u5982\uFF1Ahttps://seller.wildberries.ru",
    connectionTokenLabel: "Wildberries Api-Key",
    connectionTokenPlaceholder: "\u7C98\u8D34 WB Seller \u540E\u53F0\u751F\u6210\u7684 Api-Key",
    mcp: {
      serverId: "wildberries-mcp",
      name: "Wildberries \u8DE8\u5883\u8FD0\u8425 MCP",
      url: "/api/mcp",
      transport: "http",
      authType: "none",
      authUrl: "/api/oauth/authorize",
      toolsPreview: ["wildberries.card_subject_seo", "wildberries.kiz_barcode_plan", "wildberries.ads_drr_audit"]
    },
    categories: [
      {
        id: "wb-card",
        label: "\u5546\u54C1\u5361\u7247\u4E0E\u5408\u89C4\u6807\u8BC6",
        icon: "\u{1F4C7}",
        placeholder: "\u8F93\u5165\u4EA7\u54C1\u53C2\u6570\u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF0C\u751F\u6210 \u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u5C5E\u6027\u5361\u4F4D\u7684 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\u3001\u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u4E0E \u041A\u0438\u0417 \u65B9\u6848...",
        chips: [
          {
            id: "wb-card-subject",
            label: "WB \u5546\u54C1\u5361\u7247\uFF08\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u5C5E\u6027\u5361\u4F4D\uFF09",
            placeholder: "\u8F93\u5165\u4EA7\u54C1\u53C2\u6570\u3001\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF0C\u751F\u6210 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 + \u5B8C\u6574 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438...",
            starterPrompt: "\u8BF7\u8C03\u7528 `wildberries-ops` \u6280\u80FD\uFF0C\u56F4\u7ED5\u6240\u9009 \u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u4E3A\u4EE5\u4E0B\u4EA7\u54C1\u751F\u6210 WB \u5546\u54C1\u5361\u7247\u5168\u6848\uFF1A1) \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435\uFF08\u0422\u0438\u043F+\u0411\u0440\u0435\u043D\u0434+\u5173\u952E\u5C5E\u6027\uFF0C\u65E0\u4FC3\u9500\u8BCD\uFF09\uFF1B2) \u9010\u9879\u586B\u6EE1\u7684 \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438\uFF08\u6838\u5FC3\u641C\u7D22\u8BCD\u843D\u5165\u5C5E\u6027\u503C\uFF09\uFF1B3) \u5A92\u4F53\u7D20\u6750\u65B9\u6848\uFF1A\n\n\u4EA7\u54C1\u53C2\u6570\u3001\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u4E0E\u4FC4\u8BED\u5173\u952E\u8BCD\uFF1A"
          },
          {
            id: "wb-kiz-barcode",
            label: "\u6761\u7801\u4E0E \u041A\u0438\u0417 \u6807\u8BC6\u5408\u89C4\u65B9\u6848",
            placeholder: "\u786E\u8BA4\u7C7B\u76EE\u662F\u5426\u9700\u8981 \u041A\u0438\u0417 / \u6761\u7801\uFF0C\u751F\u6210\u8D34\u6807\u4E0E\u5165\u4ED3\u65B9\u6848...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `wildberries-ops` \u6280\u80FD\uFF0C\u786E\u8BA4\u4EE5\u4E0B\u7C7B\u76EE\u5728 WB \u7684 \u041A\u0438\u0417\uFF08\u0427\u0435\u0441\u0442\u043D\u044B\u0439 \u0437\u043D\u0430\u043A\uFF09\u6807\u8BC6\u4E0E\u6761\u7801\u8981\u6C42\uFF0C\u8F93\u51FA\u751F\u6210\u3001\u8D34\u6807\u4E0E\u5165\u4ED3\u5408\u89C4\u65B9\u6848\uFF1A\n\n\u7C7B\u76EE\u4E0E\u5546\u54C1\u4FE1\u606F\uFF1A"
          }
        ]
      },
      {
        id: "wb-ops",
        label: "\u8D39\u7387\u6D4B\u7B97\u4E0E\u5E7F\u544A\u8FD0\u8425",
        icon: "\u{1F4C8}",
        placeholder: "\u6D4B\u7B97 \u041A\u0413\u0422/\u041C\u0413\u0422 \u7269\u6D41\u8D39\u7387\u4E0E\u5230\u624B\u6BDB\u5229\uFF0C\u6216\u8BCA\u65AD \u0410\u0432\u0442\u043E\u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435/\u041F\u043E\u0438\u0441\u043A \u7684 \u0414\u0420\u0420...",
        chips: [
          {
            id: "wb-costing",
            label: "\u041A\u0413\u0422/\u041C\u0413\u0422 \u8D39\u7387\u4E0E\u5230\u624B\u6BDB\u5229\u6D4B\u7B97",
            placeholder: "\u8F93\u5165\u4F9B\u8D27\u4EF7\u3001\u4F53\u79EF\u91CD\u4E0E\u4ED3\u50A8\u65F6\u957F\uFF0C\u6D4B\u7B97 FBW/FBS \u5230\u624B\u6BDB\u5229...",
            starterPrompt: "\u8BF7\u8C03\u7528 `wildberries-ops` \u6280\u80FD\uFF0C\u6839\u636E\u4EE5\u4E0B\u4F9B\u8D27\u4EF7\u4E0E\u7269\u6D41\u53C2\u6570\uFF0C\u6309 \u041A\u0413\u0422/\u041C\u0413\u0422 \u8D39\u7387\u3001\u043F\u0440\u0438\u0451\u043C\u043A\u0430\u3001\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u4E0E\u7C7B\u76EE\u4F63\u91D1\u6D4B\u7B97 FBW / FBS \u5230\u624B\u6BDB\u5229\uFF0C\u5E76\u7ED9\u51FA\u6A21\u5F0F\u53D6\u820D\u5EFA\u8BAE\uFF1A\n\n\u4F9B\u8D27\u4EF7\u4E0E\u7269\u6D41\u53C2\u6570\uFF1A"
          },
          {
            id: "wb-ads-drr",
            label: "\u0420\u0435\u043A\u043B\u0430\u043C\u0430\uFF08\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435/\u041F\u043E\u0438\u0441\u043A\uFF09\u0414\u0420\u0420 \u8BCA\u65AD",
            placeholder: "\u8F93\u5165 \u043F\u043E\u043A\u0430\u0437\u044B / CTR / CR \u4E0E\u82B1\u8D39\uFF0C\u5B9A\u4F4D\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u8BCD\u5E76\u8C03\u6574\u7ADE\u4EF7...",
            starterPrompt: "\u8BF7\u4F7F\u7528 `wildberries-ops` \u6280\u80FD\uFF0C\u8BCA\u65AD\u4EE5\u4E0B WB \u0420\u0435\u043A\u043B\u0430\u043C\u0430\uFF08\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 / \u041F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 / \u0421\u0442\u0430\u0432\u043A\u0438\uFF09\u6F0F\u6597\uFF0C\u8BA1\u7B97 \u0414\u0420\u0420\u3001\u8BC6\u522B\u9AD8\u82B1\u8D39\u96F6\u8F6C\u5316\u8BCD\u5E76\u7ED9\u51FA\u7ADE\u4EF7\u4E0E\u5173\u952E\u8BCD\u8C03\u6574\u5EFA\u8BAE\uFF1A\n\n\u5E7F\u544A\u6570\u636E\uFF1A"
          }
        ]
      }
    ],
    sortOrder: 9,
    hidden: false
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "work-apps",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const saving = ref(false);
    const errorMsg = ref("");
    const searchQuery = ref("");
    const list = ref([]);
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const categoriesJson = ref("[]");
    const filteredList = computed(() => {
      const q = searchQuery.value.trim().toLowerCase();
      if (!q) return list.value;
      return list.value.filter(
        (item) => {
          var _a;
          return item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q) || item.shortName.toLowerCase().includes(q) || item.skillName.toLowerCase().includes(q) || (((_a = item.mcp) == null ? void 0 : _a.serverId) || "").toLowerCase().includes(q);
        }
      );
    });
    const openAddModal = () => {
      isEditingNew.value = true;
      const fresh = {
        id: "",
        name: "",
        shortName: "",
        heroTitle: "",
        tagline: "",
        skillName: "",
        iconBg: "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)",
        iconGlyph: "A",
        mascotEmoji: "\u{1F916}",
        mascotTitle: "AI \u52A9\u624B",
        connectionLabel: "\u767B\u5F55 MCP",
        mcp: {
          serverId: "",
          name: "",
          url: "/api/mcp",
          transport: "http",
          authType: "hoxi-account",
          authUrl: "/api/oauth/authorize",
          consoleUrl: "/user/tokens",
          scopes: ["mcp:tools", "mcp:profile:read", "mcp:theme:read", "mcp:theme:plan"],
          toolsPreview: []
        },
        categories: [
          {
            id: "default",
            label: "\u6838\u5FC3\u573A\u666F",
            icon: "\u2728",
            placeholder: "\u8F93\u5165\u4F60\u7684\u4E1A\u52A1\u9700\u6C42...",
            chips: [
              {
                id: "starter-1",
                label: "\u5FEB\u901F\u5F00\u59CB",
                placeholder: "\u63CF\u8FF0\u5177\u4F53\u76EE\u6807...",
                starterPrompt: "\u8BF7\u5E2E\u6211\u5B8C\u6210\u4EE5\u4E0B\u4EFB\u52A1\uFF1A\n\n"
              }
            ]
          }
        ],
        sortOrder: (list.value.length + 1) * 10,
        featured: true,
        hidden: false
      };
      editingItem.value = fresh;
      categoriesJson.value = JSON.stringify(fresh.categories, null, 2);
      isEditModalOpen.value = true;
    };
    const openEditModal = (item) => {
      isEditingNew.value = false;
      const cloned = JSON.parse(JSON.stringify(item));
      if (cloned.featured === void 0) cloned.featured = true;
      editingItem.value = cloned;
      categoriesJson.value = JSON.stringify(cloned.categories || [], null, 2);
      isEditModalOpen.value = true;
    };
    const saveEditItem = () => {
      const item = editingItem.value;
      if (!item) return;
      if (!item.id.trim() || !item.name.trim() || !item.shortName.trim() || !item.skillName.trim()) {
        toast.add({ title: "\u8BF7\u5B8C\u6574\u586B\u5199\u5E94\u7528 ID\u3001\u540D\u79F0\u3001\u7B80\u79F0\u4E0E\u5173\u8054\u6280\u80FD", color: "warning" });
        return;
      }
      try {
        const parsedCats = JSON.parse(categoriesJson.value);
        if (!Array.isArray(parsedCats) || parsedCats.length === 0) {
          toast.add({ title: "\u573A\u666F\u5206\u7C7B JSON \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4", color: "warning" });
          return;
        }
        item.categories = parsedCats;
      } catch (err) {
        toast.add({ title: "\u573A\u666F\u5206\u7C7B JSON \u683C\u5F0F\u6709\u8BEF", description: err == null ? void 0 : err.message, color: "error" });
        return;
      }
      item.id = item.id.trim();
      item.name = item.name.trim();
      item.shortName = item.shortName.trim();
      item.skillName = item.skillName.trim();
      item.skills = Array.from(new Set([item.skillName, ...item.skills || []].filter(Boolean)));
      item.heroTitle = item.heroTitle.trim() || item.name;
      item.mcp.serverId = item.mcp.serverId.trim() || `${item.id}-mcp`;
      item.mcp.name = item.mcp.name.trim() || `${item.name} MCP`;
      if (isEditingNew.value) {
        list.value.push(item);
      } else {
        const idx = list.value.findIndex((i) => i.id === item.id);
        if (idx !== -1) list.value[idx] = item;
      }
      isEditModalOpen.value = false;
    };
    const removeItem = async (item) => {
      list.value = list.value.filter((i) => i.id !== item.id);
      await save();
    };
    const moveUp = (index) => {
      if (index <= 0) return;
      const temp = list.value[index];
      list.value[index] = list.value[index - 1];
      list.value[index - 1] = temp;
      list.value.forEach((item, idx) => {
        item.sortOrder = (idx + 1) * 10;
      });
    };
    const moveDown = (index) => {
      if (index >= list.value.length - 1) return;
      const temp = list.value[index];
      list.value[index] = list.value[index + 1];
      list.value[index + 1] = temp;
      list.value.forEach((item, idx) => {
        item.sortOrder = (idx + 1) * 10;
      });
    };
    const resetToBaseline = () => {
      list.value = JSON.parse(JSON.stringify(hoxiWorkApps));
      toast.add({ title: "\u5DF2\u6062\u590D\u9ED8\u8BA4\u5E94\u7528\u57FA\u7EBF\uFF0C\u70B9\u51FB\u300C\u4FDD\u5B58\u81F3\u6570\u636E\u5E93\u300D\u540E\u751F\u6548", color: "info" });
    };
    const save = async () => {
      saving.value = true;
      try {
        const items = list.value.map((item, idx) => ({
          ...item,
          sortOrder: Number(item.sortOrder) || (idx + 1) * 10,
          hidden: Boolean(item.hidden)
        }));
        await $fetch("/api/admin/hoxi/work-apps", {
          method: "POST",
          body: { items }
        });
        toast.add({ title: "Work \u5E94\u7528\u76EE\u5F55\u5DF2\u4FDD\u5B58\uFF0C\u684C\u9762\u7AEF\u5237\u65B0\u5373\u523B\u751F\u6548", color: "success" });
      } catch (error) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: error instanceof Error ? error.message : String(error),
          color: "error"
        });
      } finally {
        saving.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UAlert = _sfc_main$q;
      const _component_UCard = _sfc_main$p;
      const _component_UIcon = _sfc_main$Y;
      const _component_UButton = _sfc_main$T;
      const _component_UInput = _sfc_main$A;
      const _component_UBadge = _sfc_main$O;
      const _component_UModal = _sfc_main$I;
      const _component_UFormField = _sfc_main$w;
      const _component_UTextarea = _sfc_main$s;
      const _component_UCheckbox = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (errorMsg.value) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: "\u8BF7\u6C42\u5F02\u5E38",
          description: errorMsg.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h2 class="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:squares-four",
              class: "w-5 h-5 text-sky-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Work \u5DE5\u4F5C\u53F0\u5E94\u7528\u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u4F9B Hoxi \u684C\u9762\u7AEF\u300C\u4E00\u4EBA\u516C\u53F8 Work \u6A21\u5F0F\u300D\u5B9E\u65F6\u540C\u6B65\u5E94\u7528\u76EE\u5F55\u3001MCP \u8FDE\u63A5\u914D\u7F6E\u4E0E\u573A\u666F\u5FEB\u6377\u6307\u4EE4\uFF08\u516C\u5F00\u63A5\u53E3\uFF1A <code class="font-mono text-xs"${_scopeId}>/api/hoxi/work/apps</code>\uFF09\u3002\u4FEE\u6539\u5E76\u4FDD\u5B58\u81F3\u6570\u636E\u5E93\u540E\uFF0C\u684C\u9762\u7AEF\u70B9\u51FB\u5237\u65B0\u5373\u53EF\u751F\u6548\uFF0C\u65E0\u9700\u53D1\u7248\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:arrow-counter-clockwise",
              size: "sm",
              onClick: resetToBaseline
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF `);
                } else {
                  return [
                    createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:plus",
              size: "sm",
              onClick: openAddModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u65B0\u589E\u5E94\u7528 `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u5E94\u7528 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: saving.value,
              icon: "ph:floppy-disk",
              size: "sm",
              onClick: save
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:squares-four",
                      class: "w-5 h-5 text-sky-500"
                    }),
                    createVNode("span", null, "Work \u5DE5\u4F5C\u53F0\u5E94\u7528\u7BA1\u7406")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, [
                    createTextVNode(" \u4F9B Hoxi \u684C\u9762\u7AEF\u300C\u4E00\u4EBA\u516C\u53F8 Work \u6A21\u5F0F\u300D\u5B9E\u65F6\u540C\u6B65\u5E94\u7528\u76EE\u5F55\u3001MCP \u8FDE\u63A5\u914D\u7F6E\u4E0E\u573A\u666F\u5FEB\u6377\u6307\u4EE4\uFF08\u516C\u5F00\u63A5\u53E3\uFF1A "),
                    createVNode("code", { class: "font-mono text-xs" }, "/api/hoxi/work/apps"),
                    createTextVNode("\uFF09\u3002\u4FEE\u6539\u5E76\u4FDD\u5B58\u81F3\u6570\u636E\u5E93\u540E\uFF0C\u684C\u9762\u7AEF\u70B9\u51FB\u5237\u65B0\u5373\u53EF\u751F\u6548\uFF0C\u65E0\u9700\u53D1\u7248\u3002 ")
                  ])
                ]),
                createVNode("div", { class: "flex flex-wrap items-center gap-2.5" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:arrow-counter-clockwise",
                    size: "sm",
                    onClick: resetToBaseline
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:plus",
                    size: "sm",
                    onClick: openAddModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u65B0\u589E\u5E94\u7528 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: saving.value,
                    icon: "ph:floppy-disk",
                    size: "sm",
                    onClick: save
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              icon: "ph:magnifying-glass",
              placeholder: "\u6309\u5E94\u7528\u540D\u3001ID\u3001\u5173\u8054\u6280\u80FD\u6216 MCP \u641C\u7D22...",
              size: "sm",
              class: "w-72"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-xs text-gray-500"${_scopeId}> \u5171 ${ssrInterpolate(list.value.length)} \u4E2A\u5E94\u7528 \xB7 \u5F53\u524D\u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u4E2A </div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u6392\u5E8F</th><th class="px-3 py-3"${_scopeId}>\u5E94\u7528\u540D\u79F0 / ID</th><th class="px-3 py-3"${_scopeId}>\u5173\u8054\u6280\u80FD / MCP \u670D\u52A1</th><th class="px-3 py-3"${_scopeId}>\u573A\u666F\u5206\u7C7B\u4E0E\u5FEB\u6377\u80F6\u56CA</th><th class="px-3 py-3 text-center"${_scopeId}>\u72B6\u6001</th><th class="w-28 px-3 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item, index) => {
              var _a2, _b, _c, _d;
              _push2(`<tr class="${ssrRenderClass([{ "opacity-50": item.hidden }, "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="px-3 py-3 text-center font-mono"${_scopeId}><div class="flex items-center justify-center gap-1"${_scopeId}><button type="button" class="p-0.5 hover:text-blue-600 disabled:opacity-30"${ssrIncludeBooleanAttr(index === 0) ? " disabled" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-up",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</button><span class="text-gray-400 text-[11px]"${_scopeId}>${ssrInterpolate((_a2 = item.sortOrder) != null ? _a2 : (index + 1) * 10)}</span><button type="button" class="p-0.5 hover:text-blue-600 disabled:opacity-30"${ssrIncludeBooleanAttr(index === filteredList.value.length - 1) ? " disabled" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-down",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td><td class="px-3 py-3"${_scopeId}><div class="flex items-center gap-2.5"${_scopeId}><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white text-xs" style="${ssrRenderStyle({ background: item.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" })}"${_scopeId}>${ssrInterpolate(item.iconGlyph || ((_b = item.shortName) == null ? void 0 : _b.slice(0, 1)) || "A")}</span><div${_scopeId}><div class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.name)}</span>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.shortName)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.shortName), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-[11px] text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(item.id)} \xB7 ${ssrInterpolate(item.mascotEmoji)} ${ssrInterpolate(item.mascotTitle)}</div></div></div></td><td class="px-3 py-3"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "info",
                variant: "subtle",
                size: "xs",
                class: "font-mono"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.skillName)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.skillName), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "success",
                variant: "subtle",
                size: "xs",
                class: "font-mono"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2;
                  if (_push3) {
                    _push3(`${ssrInterpolate((_a3 = item.mcp) == null ? void 0 : _a3.serverId)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString((_b2 = item.mcp) == null ? void 0 : _b2.serverId), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="mt-1 truncate max-w-xs font-mono text-[11px] text-gray-400"${ssrRenderAttr("title", (_c = item.mcp) == null ? void 0 : _c.url)}${_scopeId}>${ssrInterpolate(((_d = item.mcp) == null ? void 0 : _d.url) || "/api/mcp")}</div></td><td class="px-3 py-3"${_scopeId}><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(item.categories, (cat) => {
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: cat.id,
                  color: "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a3, _b2;
                    if (_push3) {
                      _push3(`${ssrInterpolate(cat.icon)} ${ssrInterpolate(cat.label)} (${ssrInterpolate(((_a3 = cat.chips) == null ? void 0 : _a3.length) || 0)}) `);
                    } else {
                      return [
                        createTextVNode(toDisplayString(cat.icon) + " " + toDisplayString(cat.label) + " (" + toDisplayString(((_b2 = cat.chips) == null ? void 0 : _b2.length) || 0) + ") ", 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: item.hidden ? "neutral" : "success",
                variant: "subtle",
                size: "xs",
                onClick: ($event) => item.hidden = !item.hidden
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-3 text-right whitespace-nowrap"${_scopeId}><div class="flex items-center justify-end gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:pencil-simple",
                onClick: ($event) => openEditModal(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u7F16\u8F91 `);
                  } else {
                    return [
                      createTextVNode(" \u7F16\u8F91 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                onClick: ($event) => removeItem(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5220\u9664 `);
                  } else {
                    return [
                      createTextVNode(" \u5220\u9664 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode(_component_UInput, {
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                  icon: "ph:magnifying-glass",
                  placeholder: "\u6309\u5E94\u7528\u540D\u3001ID\u3001\u5173\u8054\u6280\u80FD\u6216 MCP \u641C\u7D22...",
                  size: "sm",
                  class: "w-72"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "text-xs text-gray-500" }, " \u5171 " + toDisplayString(list.value.length) + " \u4E2A\u5E94\u7528 \xB7 \u5F53\u524D\u663E\u793A " + toDisplayString(filteredList.value.length) + " \u4E2A ", 1)
              ]),
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u6392\u5E8F"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5E94\u7528\u540D\u79F0 / ID"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5173\u8054\u6280\u80FD / MCP \u670D\u52A1"),
                      createVNode("th", { class: "px-3 py-3" }, "\u573A\u666F\u5206\u7C7B\u4E0E\u5FEB\u6377\u80F6\u56CA"),
                      createVNode("th", { class: "px-3 py-3 text-center" }, "\u72B6\u6001"),
                      createVNode("th", { class: "w-28 px-3 py-3 text-right" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item, index) => {
                      var _a2, _b, _c, _d;
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        class: ["hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors", { "opacity-50": item.hidden }]
                      }, [
                        createVNode("td", { class: "px-3 py-3 text-center font-mono" }, [
                          createVNode("div", { class: "flex items-center justify-center gap-1" }, [
                            createVNode("button", {
                              type: "button",
                              class: "p-0.5 hover:text-blue-600 disabled:opacity-30",
                              disabled: index === 0,
                              onClick: ($event) => moveUp(index)
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-up",
                                class: "w-3.5 h-3.5"
                              })
                            ], 8, ["disabled", "onClick"]),
                            createVNode("span", { class: "text-gray-400 text-[11px]" }, toDisplayString((_a2 = item.sortOrder) != null ? _a2 : (index + 1) * 10), 1),
                            createVNode("button", {
                              type: "button",
                              class: "p-0.5 hover:text-blue-600 disabled:opacity-30",
                              disabled: index === filteredList.value.length - 1,
                              onClick: ($event) => moveDown(index)
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-down",
                                class: "w-3.5 h-3.5"
                              })
                            ], 8, ["disabled", "onClick"])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "flex items-center gap-2.5" }, [
                            createVNode("span", {
                              class: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white text-xs",
                              style: { background: item.iconBg || "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)" }
                            }, toDisplayString(item.iconGlyph || ((_b = item.shortName) == null ? void 0 : _b.slice(0, 1)) || "A"), 5),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                                createVNode("span", null, toDisplayString(item.name), 1),
                                createVNode(_component_UBadge, {
                                  color: "neutral",
                                  variant: "subtle",
                                  size: "xs"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.shortName), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("div", { class: "text-[11px] text-gray-400 font-mono" }, toDisplayString(item.id) + " \xB7 " + toDisplayString(item.mascotEmoji) + " " + toDisplayString(item.mascotTitle), 1)
                            ])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "flex items-center gap-1.5" }, [
                            createVNode(_component_UBadge, {
                              color: "info",
                              variant: "subtle",
                              size: "xs",
                              class: "font-mono"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.skillName), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UBadge, {
                              color: "success",
                              variant: "subtle",
                              size: "xs",
                              class: "font-mono"
                            }, {
                              default: withCtx(() => {
                                var _a3;
                                return [
                                  createTextVNode(toDisplayString((_a3 = item.mcp) == null ? void 0 : _a3.serverId), 1)
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", {
                            class: "mt-1 truncate max-w-xs font-mono text-[11px] text-gray-400",
                            title: (_c = item.mcp) == null ? void 0 : _c.url
                          }, toDisplayString(((_d = item.mcp) == null ? void 0 : _d.url) || "/api/mcp"), 9, ["title"])
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "flex flex-wrap gap-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.categories, (cat) => {
                              return openBlock(), createBlock(_component_UBadge, {
                                key: cat.id,
                                color: "neutral",
                                variant: "subtle",
                                size: "xs"
                              }, {
                                default: withCtx(() => {
                                  var _a3;
                                  return [
                                    createTextVNode(toDisplayString(cat.icon) + " " + toDisplayString(cat.label) + " (" + toDisplayString(((_a3 = cat.chips) == null ? void 0 : _a3.length) || 0) + ") ", 1)
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-center whitespace-nowrap" }, [
                          createVNode(_component_UButton, {
                            color: item.hidden ? "neutral" : "success",
                            variant: "subtle",
                            size: "xs",
                            onClick: ($event) => item.hidden = !item.hidden
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color", "onClick"])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-right whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1.5" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:pencil-simple",
                              onClick: ($event) => openEditModal(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u7F16\u8F91 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              onClick: ($event) => removeItem(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5220\u9664 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isEditModalOpen.value,
        "onUpdate:open": ($event) => isEditModalOpen.value = $event,
        title: isEditingNew.value ? "\u65B0\u589E Work \u5E94\u7528" : `\u7F16\u8F91\u5E94\u7528: ${(_a = editingItem.value) == null ? void 0 : _a.name}`
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (editingItem.value) {
              _push2(`<div class="space-y-4 py-2 max-h-[75vh] overflow-y-auto pr-1"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5E94\u7528 ID",
                required: "",
                help: "\u552F\u4E00\u82F1\u6587\u6807\u8BC6\uFF0C\u5982 shopify"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.id,
                      "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                      placeholder: "shopify",
                      disabled: !isEditingNew.value,
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "shopify",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5E94\u7528\u5168\u79F0",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                      placeholder: "Shopify \u72EC\u7ACB\u7AD9\u8FD0\u8425",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "Shopify \u72EC\u7ACB\u7AD9\u8FD0\u8425",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u80F6\u56CA\u7B80\u79F0 (shortName)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.shortName,
                      "onUpdate:modelValue": ($event) => editingItem.value.shortName = $event,
                      placeholder: "Shopify",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.shortName,
                        "onUpdate:modelValue": ($event) => editingItem.value.shortName = $event,
                        placeholder: "Shopify",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9996\u9875\u4E3B\u6807\u9898 (heroTitle)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.heroTitle,
                      "onUpdate:modelValue": ($event) => editingItem.value.heroTitle = $event,
                      placeholder: "Shopify AI\uFF0C\u4E00\u7AD9\u5F0F\u5168\u7403\u72EC\u7ACB\u7AD9\u8FD0\u8425 Agent",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.heroTitle,
                        "onUpdate:modelValue": ($event) => editingItem.value.heroTitle = $event,
                        placeholder: "Shopify AI\uFF0C\u4E00\u7AD9\u5F0F\u5168\u7403\u72EC\u7ACB\u7AD9\u8FD0\u8425 Agent",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u526F\u6807\u9898\u63CF\u8FF0 (tagline)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.tagline,
                      "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                      placeholder: "\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4E0A\u67B6\u3001Liquid \u4E3B\u9898\u88C5\u4FEE\u3001\u6298\u6263\u6D3B\u52A8\u4E0E\u5F03\u5355\u633D\u56DE\u4E13\u5BB6",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.tagline,
                        "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                        placeholder: "\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4E0A\u67B6\u3001Liquid \u4E3B\u9898\u88C5\u4FEE\u3001\u6298\u6263\u6D3B\u52A8\u4E0E\u5F03\u5355\u633D\u56DE\u4E13\u5BB6",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-4 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5173\u8054\u6280\u80FD (skillName)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.skillName,
                      "onUpdate:modelValue": ($event) => editingItem.value.skillName = $event,
                      placeholder: "shopify-ops",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.skillName,
                        "onUpdate:modelValue": ($event) => editingItem.value.skillName = $event,
                        placeholder: "shopify-ops",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u56FE\u6807\u6587\u5B57 (iconGlyph)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.iconGlyph,
                      "onUpdate:modelValue": ($event) => editingItem.value.iconGlyph = $event,
                      placeholder: "S",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.iconGlyph,
                        "onUpdate:modelValue": ($event) => editingItem.value.iconGlyph = $event,
                        placeholder: "S",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5409\u7965\u7269 Emoji" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.mascotEmoji,
                      "onUpdate:modelValue": ($event) => editingItem.value.mascotEmoji = $event,
                      placeholder: "\u{1F6CD}\uFE0F",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mascotEmoji,
                        "onUpdate:modelValue": ($event) => editingItem.value.mascotEmoji = $event,
                        placeholder: "\u{1F6CD}\uFE0F",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5409\u7965\u7269\u79F0\u53F7" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.mascotTitle,
                      "onUpdate:modelValue": ($event) => editingItem.value.mascotTitle = $event,
                      placeholder: "Shopify \u589E\u957F\u5E97\u957F",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mascotTitle,
                        "onUpdate:modelValue": ($event) => editingItem.value.mascotTitle = $event,
                        placeholder: "Shopify \u589E\u957F\u5E97\u957F",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u56FE\u6807\u80CC\u666F\u6E10\u53D8 (iconBg)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.iconBg,
                      "onUpdate:modelValue": ($event) => editingItem.value.iconBg = $event,
                      placeholder: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.iconBg,
                        "onUpdate:modelValue": ($event) => editingItem.value.iconBg = $event,
                        placeholder: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u767B\u5F55\u6309\u94AE\u6587\u6848 (connectionLabel)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.connectionLabel,
                      "onUpdate:modelValue": ($event) => editingItem.value.connectionLabel = $event,
                      placeholder: "\u767B\u5F55 Shopify MCP",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.connectionLabel,
                        "onUpdate:modelValue": ($event) => editingItem.value.connectionLabel = $event,
                        placeholder: "\u767B\u5F55 Shopify MCP",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "MCP Server ID",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.mcp.serverId,
                      "onUpdate:modelValue": ($event) => editingItem.value.mcp.serverId = $event,
                      placeholder: "shopify-mcp",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mcp.serverId,
                        "onUpdate:modelValue": ($event) => editingItem.value.mcp.serverId = $event,
                        placeholder: "shopify-mcp",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "MCP \u670D\u52A1\u540D\u79F0",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.mcp.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.mcp.name = $event,
                      placeholder: "Shopify \u5B98\u65B9\u5E97\u52A1 MCP",
                      class: "w-full text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mcp.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.mcp.name = $event,
                        placeholder: "Shopify \u5B98\u65B9\u5E97\u52A1 MCP",
                        class: "w-full text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "MCP Endpoint \u5730\u5740",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.mcp.url,
                      "onUpdate:modelValue": ($event) => editingItem.value.mcp.url = $event,
                      placeholder: "/api/mcp",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mcp.url,
                        "onUpdate:modelValue": ($event) => editingItem.value.mcp.url = $event,
                        placeholder: "/api/mcp",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u573A\u666F\u5206\u7C7B\u4E0E\u5FEB\u6377\u80F6\u56CA JSON (categories)",
                required: "",
                help: "\u6807\u51C6 JSON \u6570\u7EC4\uFF0C\u5B9A\u4E49\u573A\u666F\u5206\u7C7B Tab \u4E0E\u4E0B\u65B9\u5FEB\u6377\u6307\u4EE4\u80F6\u56CA"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: categoriesJson.value,
                      "onUpdate:modelValue": ($event) => categoriesJson.value = $event,
                      rows: 10,
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: categoriesJson.value,
                        "onUpdate:modelValue": ($event) => categoriesJson.value = $event,
                        rows: 10,
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.featured,
                "onUpdate:modelValue": ($event) => editingItem.value.featured = $event
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u7CBE\u9009\u63A8\u8350\uFF08Featured\uFF09</span></label><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.hidden,
                "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u6682\u4E0D\u5C55\u793A\uFF08\u9690\u85CF/\u4E0B\u67B6\uFF09</span></label></div><div class="flex items-center gap-2"${_scopeId}><span class="text-xs text-gray-500"${_scopeId}>\u6392\u5E8F\u6743\u91CD\uFF1A</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: editingItem.value.sortOrder,
                "onUpdate:modelValue": ($event) => editingItem.value.sortOrder = $event,
                modelModifiers: { number: true },
                type: "number",
                class: "w-20",
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              editingItem.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4 py-2 max-h-[75vh] overflow-y-auto pr-1"
              }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: "\u5E94\u7528 ID",
                    required: "",
                    help: "\u552F\u4E00\u82F1\u6587\u6807\u8BC6\uFF0C\u5982 shopify"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "shopify",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u5E94\u7528\u5168\u79F0",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "Shopify \u72EC\u7ACB\u7AD9\u8FD0\u8425",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u80F6\u56CA\u7B80\u79F0 (shortName)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.shortName,
                        "onUpdate:modelValue": ($event) => editingItem.value.shortName = $event,
                        placeholder: "Shopify",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: "\u9996\u9875\u4E3B\u6807\u9898 (heroTitle)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.heroTitle,
                        "onUpdate:modelValue": ($event) => editingItem.value.heroTitle = $event,
                        placeholder: "Shopify AI\uFF0C\u4E00\u7AD9\u5F0F\u5168\u7403\u72EC\u7ACB\u7AD9\u8FD0\u8425 Agent",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u526F\u6807\u9898\u63CF\u8FF0 (tagline)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.tagline,
                        "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                        placeholder: "\u5546\u54C1\u4E0E\u591A\u89C4\u683C\u4E0A\u67B6\u3001Liquid \u4E3B\u9898\u88C5\u4FEE\u3001\u6298\u6263\u6D3B\u52A8\u4E0E\u5F03\u5355\u633D\u56DE\u4E13\u5BB6",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-4 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: "\u5173\u8054\u6280\u80FD (skillName)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.skillName,
                        "onUpdate:modelValue": ($event) => editingItem.value.skillName = $event,
                        placeholder: "shopify-ops",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u56FE\u6807\u6587\u5B57 (iconGlyph)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.iconGlyph,
                        "onUpdate:modelValue": ($event) => editingItem.value.iconGlyph = $event,
                        placeholder: "S",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5409\u7965\u7269 Emoji" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mascotEmoji,
                        "onUpdate:modelValue": ($event) => editingItem.value.mascotEmoji = $event,
                        placeholder: "\u{1F6CD}\uFE0F",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5409\u7965\u7269\u79F0\u53F7" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mascotTitle,
                        "onUpdate:modelValue": ($event) => editingItem.value.mascotTitle = $event,
                        placeholder: "Shopify \u589E\u957F\u5E97\u957F",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, [
                  createVNode(_component_UFormField, { label: "\u56FE\u6807\u80CC\u666F\u6E10\u53D8 (iconBg)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.iconBg,
                        "onUpdate:modelValue": ($event) => editingItem.value.iconBg = $event,
                        placeholder: "linear-gradient(135deg, #16A34A 0%, #65A30D 100%)",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u767B\u5F55\u6309\u94AE\u6587\u6848 (connectionLabel)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.connectionLabel,
                        "onUpdate:modelValue": ($event) => editingItem.value.connectionLabel = $event,
                        placeholder: "\u767B\u5F55 Shopify MCP",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: "MCP Server ID",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mcp.serverId,
                        "onUpdate:modelValue": ($event) => editingItem.value.mcp.serverId = $event,
                        placeholder: "shopify-mcp",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "MCP \u670D\u52A1\u540D\u79F0",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mcp.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.mcp.name = $event,
                        placeholder: "Shopify \u5B98\u65B9\u5E97\u52A1 MCP",
                        class: "w-full text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "MCP Endpoint \u5730\u5740",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.mcp.url,
                        "onUpdate:modelValue": ($event) => editingItem.value.mcp.url = $event,
                        placeholder: "/api/mcp",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u573A\u666F\u5206\u7C7B\u4E0E\u5FEB\u6377\u80F6\u56CA JSON (categories)",
                  required: "",
                  help: "\u6807\u51C6 JSON \u6570\u7EC4\uFF0C\u5B9A\u4E49\u573A\u666F\u5206\u7C7B Tab \u4E0E\u4E0B\u65B9\u5FEB\u6377\u6307\u4EE4\u80F6\u56CA"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: categoriesJson.value,
                      "onUpdate:modelValue": ($event) => categoriesJson.value = $event,
                      rows: 10,
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", { class: "flex items-center gap-4" }, [
                    createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: editingItem.value.featured,
                        "onUpdate:modelValue": ($event) => editingItem.value.featured = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", null, "\u7CBE\u9009\u63A8\u8350\uFF08Featured\uFF09")
                    ]),
                    createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: editingItem.value.hidden,
                        "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", null, "\u6682\u4E0D\u5C55\u793A\uFF08\u9690\u85CF/\u4E0B\u67B6\uFF09")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "text-xs text-gray-500" }, "\u6392\u5E8F\u6743\u91CD\uFF1A"),
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.sortOrder,
                      "onUpdate:modelValue": ($event) => editingItem.value.sortOrder = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      class: "w-20",
                      size: "xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => isEditModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              onClick: saveEditItem
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u8BA4\u5E76\u5E94\u7528\u5230\u5217\u8868`);
                } else {
                  return [
                    createTextVNode("\u786E\u8BA4\u5E76\u5E94\u7528\u5230\u5217\u8868")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-2 w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  onClick: ($event) => isEditModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  onClick: saveEditItem
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u786E\u8BA4\u5E76\u5E94\u7528\u5230\u5217\u8868")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/work-apps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=work-apps-C0B6p8UG.mjs.map
