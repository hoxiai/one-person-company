import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { aM as useLocaleRouter, t as useSettings, y as useFetch, bj as useSeoMeta, bk as useJsonLd, a as __nuxt_component_3$1, b as _sfc_main$E } from './server.mjs';
import __nuxt_component_4 from './HoxiTag-BAz_5lMM.mjs';
import __nuxt_component_7 from './HoxiSectionLabel-8WOuY8L8.mjs';
import { defineComponent, computed, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { h as hoxiPlans } from './plans-D8XOOLan.mjs';
import { h as hoxiModels } from './models-VgTGFaGO.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const { data: dbPlans } = useFetch(
      "/api/hoxi/plans",
      {
        key: "hoxi-db-plans",
        default: () => null
      },
      "$bSCT0zSKxe"
      /* nuxt-injected */
    );
    const effectivePlans = computed(() => {
      if (dbPlans.value && Array.isArray(dbPlans.value) && dbPlans.value.length > 0) {
        return dbPlans.value;
      }
      try {
        const raw = getSetting("hoxi_plans_override");
        if (raw && typeof raw === "string") {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed.filter((item) => !item.hidden);
          }
        }
      } catch {
      }
      return hoxiPlans;
    });
    const slug = computed(() => {
      const raw = route.params.slug;
      const parts = Array.isArray(raw) ? raw : [raw];
      return String(parts.at(-1) || "").trim();
    });
    const plan = computed(() => {
      const target = slug.value.toLowerCase();
      return effectivePlans.value.find((p) => p.slug.toLowerCase() === target);
    });
    const getPlanTypeLabel = (type) => {
      switch (type) {
        case "coding_plan":
          return "AI \u7F16\u7A0B\u4E13\u7528\u5957\u9910";
        case "subscription":
          return "\u5B98\u65B9\u5305\u6708\u8BA2\u9605";
        case "token_plan":
          return "API \u6309\u91CF\u8BA1\u8D39";
        default:
          return "\u8BA2\u9605\u5957\u9910";
      }
    };
    const planSummary = computed(() => {
      if (!plan.value) return "";
      const p = plan.value;
      if (p.slug === "cursor-pro") {
        return "Cursor \u5B98\u65B9 Pro \u8BA2\u9605\u662F\u76EE\u524D\u5168\u7403\u5F00\u53D1\u8005\u5199\u4EE3\u7801\u4F7F\u7528\u7387\u6700\u9AD8\u3001\u4F53\u9A8C\u6700\u4E1D\u6ED1\u7684 AI IDE\u3002\u5185\u7F6E Composer \u591A\u6587\u4EF6\u4E0A\u4E0B\u6587\u91CD\u6784\u4E0E Agent \u7EC8\u7AEF\u6267\u884C\u80FD\u529B\uFF0C\u652F\u6301\u81EA\u7531\u5207\u6362 Claude 3.7 / GPT-4o \u7B49\u9876\u914D\u5927\u6A21\u578B\u3002";
      }
      if (p.slug === "claude-pro") {
        return "Anthropic \u5B98\u65B9\u51FA\u54C1\u7684 Claude \u7F51\u9875\u7248\u4E0E Artifacts \u4EA4\u4E92\u8BA2\u9605\uFF0C\u642D\u8F7D\u5F53\u524D\u5168\u7F51\u7EFC\u5408\u4EE3\u7801\u6218\u529B\u7B2C\u4E00\u68AF\u961F\u7684 Claude 3.7 Sonnet \u6DF7\u5408\u63A8\u7406\u6A21\u578B\uFF0C\u9002\u5408\u91CD\u5EA6\u67B6\u6784\u653B\u575A\u4E0E\u957F\u4EE3\u7801\u5E93\u95EE\u7B54\u3002";
      }
      if (p.slug === "ainode-payg") {
        return "\u4E13\u4E3A\u56FD\u5185\u5168\u6808\u5F00\u53D1\u8005\u6253\u9020\u7684\u4F01\u4E1A\u7EA7 API \u805A\u5408\u4E2D\u8F6C\u4E13\u7EBF\uFF0C\u652F\u6301\u5FAE\u4FE1\u4E0E\u652F\u4ED8\u5B9D\u5145\u503C\uFF0C\u4F59\u989D\u6C38\u4E0D\u8FC7\u671F\u3002\u76F4\u8FDE Cursor\u3001VS Code\u3001Cline \u7B49\u5DE5\u5177\uFF0C\u6EE1\u8840\u652F\u6301 Claude 3.7 / DeepSeek R1 \u6DF1\u5EA6\u601D\u8003\u3002";
      }
      if (p.slug === "aliyun-bailian-plan") {
        return "\u963F\u91CC\u4E91\u767E\u70BC\u5B98\u65B9 Coding \u5957\u9910\uFF0C\u4F9D\u6258\u56FD\u5185\u9876\u5C16\u57FA\u7840\u8BBE\u65BD\uFF0C\u8D85\u4F4E\u5EF6\u8FDF\u76F4\u8FDE\u901A\u4E49\u5343\u95EE Qwen 2.5 Coder \u4E0E DeepSeek \u6EE1\u8840\u5168\u7CFB\u5217\uFF0C\u4F01\u4E1A\u5F00\u53D1\u4E0E\u5F00\u7968\u62A5\u9500\u9996\u9009\u3002";
      }
      return `${p.name} \u662F\u7531 ${p.vendorLabel} \u63D0\u4F9B\u7684 ${getPlanTypeLabel(p.type)}\uFF0C\u6298\u5408\u6708\u8D39\u7EA6 \xA5${p.priceMonthlyCNY}\uFF0C\u652F\u6301 ${p.models.slice(0, 3).join("\u3001")} \u7B49\u4E3B\u6D41\u5927\u6A21\u578B\u3002`;
    });
    const getModelSlug = (modelName) => {
      const norm = modelName.toLowerCase().replace(/[^a-z0-9]/g, "");
      const found = hoxiModels.find((m) => {
        const mNorm = m.name.toLowerCase().replace(/[^a-z0-9]/g, "");
        return mNorm === norm || mNorm.includes(norm) || norm.includes(mNorm);
      });
      return found ? found.slug : null;
    };
    const getModelApiName = (modelName) => {
      const slug2 = getModelSlug(modelName);
      if (slug2) {
        const found = hoxiModels.find((m) => m.slug === slug2);
        if (found == null ? void 0 : found.apiName) return found.apiName;
      }
      return modelName.toLowerCase().replace(/\s+/g, "-");
    };
    const alternatives = computed(() => {
      if (!plan.value) return [];
      return effectivePlans.value.filter((p) => {
        var _a;
        return p.slug !== ((_a = plan.value) == null ? void 0 : _a.slug);
      }).slice(0, 3);
    });
    const planSeoTitle = computed(() => {
      return plan.value ? `${plan.value.name} \u4EF7\u683C\u3001\u989D\u5EA6\u9650\u5236\u4E0E Cursor/Cline \u63A5\u5165\u914D\u7F6E | Hoxi` : "\u7F16\u7A0B\u5957\u9910\u8BE6\u60C5 | Hoxi";
    });
    const planSeoDescription = computed(() => {
      if (!plan.value) return "";
      const p = plan.value;
      return `${p.name} (${p.vendorLabel}) \u8BE6\u5C3D\u8BC4\u6D4B\uFF1A\u53C2\u8003\u6708\u8D39 ${p.priceLabel} (\u7EA6 \xA5${p.priceMonthlyCNY}/\u6708)\uFF0C\u989D\u5EA6\u9650\u5236\uFF1A${p.quotaNote}\u3002\u652F\u6301 ${p.models.slice(0, 3).join("\u3001")}\uFF0C\u63D0\u4F9B 1 \u5206\u949F IDE \u5FEB\u901F\u914D\u7F6E\u4E0E\u907F\u5751\u6307\u5357\u3002`;
    });
    useSeoMeta({
      title: () => planSeoTitle.value,
      description: () => planSeoDescription.value,
      ogTitle: () => planSeoTitle.value,
      ogDescription: () => planSeoDescription.value,
      ogType: "product",
      twitterCard: "summary_large_image",
      twitterTitle: () => planSeoTitle.value,
      twitterDescription: () => planSeoDescription.value,
      keywords: () => plan.value ? `${plan.value.name}, ${plan.value.vendorLabel}, AI\u7F16\u7A0B\u5957\u9910, ${plan.value.models.join(", ")}, Cursor\u914D\u7F6E, Coding Plan, \u989D\u5EA6\u9650\u5236` : ""
    });
    useJsonLd("hoxi-coding-plan-detail", computed(() => {
      if (!plan.value) return [];
      const p = plan.value;
      return [
        {
          "@type": "Product",
          name: p.name,
          description: planSeoDescription.value,
          brand: { "@type": "Brand", name: p.vendorLabel },
          offers: {
            "@type": "Offer",
            price: p.priceMonthlyCNY,
            priceCurrency: "CNY",
            description: `${p.priceLabel} (${p.period})`,
            url: localePath(`/coding-plans/${p.slug}`)
          }
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
            { "@type": "ListItem", position: 2, name: "AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4", item: localePath("/coding-plans") },
            { "@type": "ListItem", position: 3, name: p.name, item: localePath(`/coding-plans/${p.slug}`) }
          ]
        }
      ];
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$E;
      const _component_HoxiTag = __nuxt_component_4;
      const _component_HoxiSectionLabel = __nuxt_component_7;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (plan.value) {
              _push2(`<div class="py-8 md:py-16"${_scopeId}><div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/"),
                class: "hover:text-slate-900 dark:hover:text-white transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u9996\u9875 `);
                  } else {
                    return [
                      createTextVNode(" \u9996\u9875 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span${_scopeId}>/</span>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/coding-plans"),
                class: "hover:text-slate-900 dark:hover:text-white transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4 `);
                  } else {
                    return [
                      createTextVNode(" AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span${_scopeId}>/</span><span class="text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none"${_scopeId}>${ssrInterpolate(plan.value.name)}</span></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/coding-plans"),
                class: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-4 h-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>\u8FD4\u56DE\u6A21\u578B\u5957\u9910\u5BF9\u6BD4</span>`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-left",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, "\u8FD4\u56DE\u6A21\u578B\u5957\u9910\u5BF9\u6BD4")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-8"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="${ssrRenderClass([plan.value.vendorColor, "inline-block h-3.5 w-3.5 rounded-full shrink-0"])}"${_scopeId}></span><h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(plan.value.name)}</h1></div><div class="mt-3 flex flex-wrap items-center gap-2"${_scopeId}>`);
              if (plan.value.status === "hot") {
                _push2(ssrRenderComponent(_component_HoxiTag, { tone: "positive" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u70ED\u95E8\u4E3B\u529B `);
                    } else {
                      return [
                        createTextVNode(" \u70ED\u95E8\u4E3B\u529B ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (plan.value.region === "domestic") {
                _push2(ssrRenderComponent(_component_HoxiTag, { tone: "info" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u{1F1E8}\u{1F1F3} \u56FD\u5185\u76F4\u8FDE `);
                    } else {
                      return [
                        createTextVNode(" \u{1F1E8}\u{1F1F3} \u56FD\u5185\u76F4\u8FDE ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(plan.value.vendorLabel)}</span><span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(getPlanTypeLabel(plan.value.type))}</span></div><p class="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"${_scopeId}>${ssrInterpolate(planSummary.value)}</p></div><div class="w-full md:w-80 shrink-0 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-5 shadow-xs"${_scopeId}><div class="text-xs text-slate-400 dark:text-slate-500 font-medium"${_scopeId}>\u53C2\u8003\u5B98\u65B9\u8D39\u7528</div><div class="mt-1 flex items-baseline gap-2"${_scopeId}><span class="text-3xl font-black text-slate-900 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(plan.value.priceLabel)}</span><span class="text-xs text-slate-400 dark:text-slate-500"${_scopeId}>\u7EA6 \xA5${ssrInterpolate(plan.value.priceMonthlyCNY)}/\u6708</span></div><div class="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800 pt-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-slate-400"${_scopeId}>\u8BA1\u8D39\u5468\u671F\uFF1A</span><span class="font-medium text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(plan.value.period)}</span></div><div class="flex items-center justify-between"${_scopeId}><span class="text-slate-400"${_scopeId}>\u7F51\u7EDC\u8981\u6C42\uFF1A</span><span class="font-medium text-slate-700 dark:text-slate-200"${_scopeId}>${ssrInterpolate(plan.value.networkRequirement)}</span></div><div class="flex items-center justify-between"${_scopeId}><span class="text-slate-400"${_scopeId}>\u652F\u4ED8\u652F\u6301\uFF1A</span><span class="font-medium text-slate-700 dark:text-slate-200 truncate max-w-[150px] text-right"${ssrRenderAttr("title", plan.value.paymentMethods.join(" / "))}${_scopeId}>${ssrInterpolate(plan.value.paymentMethods.join(" / "))}</span></div></div><div class="mt-5 space-y-2"${_scopeId}>`);
              if (plan.value.officialUrl) {
                _push2(`<a${ssrRenderAttr("href", plan.value.officialUrl)} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-1.5 w-full rounded-xl bg-slate-900 dark:bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs"${_scopeId}><span${_scopeId}>\u53BB\u5B98\u7F51\u5F00\u901A / \u5B9A\u4EF7\u9875</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-up-right",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<a href="#setup-guide" class="flex items-center justify-center gap-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-slate-400 transition-colors"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:terminal-window",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u67E5\u770B IDE \u914D\u7F6E\u6559\u7A0B</span></a></div></div></div><section class="mt-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u5957\u9910\u89C4\u683C\u4E0E\u8C03\u7528\u989D\u5EA6\u7EC6\u5219`);
                  } else {
                    return [
                      createTextVNode("\u5957\u9910\u89C4\u683C\u4E0E\u8C03\u7528\u989D\u5EA6\u7EC6\u5219")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-4 overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs"${_scopeId}><table class="w-full text-left text-xs"${_scopeId}><tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300"${_scopeId}><tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30"${_scopeId}><td class="w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40"${_scopeId}> \u989D\u5EA6\u4E0E\u5E76\u53D1\u9650\u5236 </td><td class="py-3.5 px-4 leading-relaxed"${_scopeId}>${ssrInterpolate(plan.value.quotaNote)}</td></tr><tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30"${_scopeId}><td class="w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40"${_scopeId}> \u6838\u5FC3\u652F\u6301\u6A21\u578B </td><td class="py-3.5 px-4"${_scopeId}><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
              ssrRenderList(plan.value.models, (modelName) => {
                _push2(`<!--[-->`);
                if (getModelSlug(modelName)) {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)(`/models/${getModelSlug(modelName)}`),
                    class: "inline-flex items-center gap-1 rounded-md bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/40 hover:border-blue-400 transition-all"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<span${_scopeId2}>${ssrInterpolate(modelName)}</span>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:chart-bar",
                          class: "w-3 h-3 text-blue-500"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode("span", null, toDisplayString(modelName), 1),
                          createVNode(_component_UIcon, {
                            name: "ph:chart-bar",
                            class: "w-3 h-3 text-blue-500"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<span class="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-700 dark:text-slate-300"${_scopeId}>${ssrInterpolate(modelName)}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></td></tr><tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30"${_scopeId}><td class="w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40"${_scopeId}> \u9002\u914D\u5DE5\u5177\u751F\u6001 </td><td class="py-3.5 px-4"${_scopeId}><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
              ssrRenderList(plan.value.tools, (tool) => {
                _push2(`<span class="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-700 dark:text-slate-300"${_scopeId}> \u{1F6E0}\uFE0F ${ssrInterpolate(tool)}</span>`);
              });
              _push2(`<!--]--></div></td></tr><tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30"${_scopeId}><td class="w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40"${_scopeId}> \u652F\u4ED8\u4E0E\u5145\u503C\u6E20\u9053 </td><td class="py-3.5 px-4 font-medium text-slate-800 dark:text-slate-200"${_scopeId}>${ssrInterpolate(plan.value.paymentMethods.join(" / "))}</td></tr><tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30"${_scopeId}><td class="w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40"${_scopeId}> \u7F51\u7EDC\u4E0E\u5730\u533A\u9650\u5236 </td><td class="py-3.5 px-4"${_scopeId}><span class="${ssrRenderClass([plan.value.region === "domestic" ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300", "inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-semibold"])}"${_scopeId}>${ssrInterpolate(plan.value.networkRequirement)}</span></td></tr></tbody></table></div></section><section class="mt-12 grid gap-6 md:grid-cols-2"${_scopeId}><div class="rounded-2xl border border-emerald-100 dark:border-emerald-950/60 bg-emerald-50/30 dark:bg-emerald-950/20 p-6"${_scopeId}><h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:check-circle",
                class: "w-5 h-5 text-emerald-600 dark:text-emerald-400"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u7AD9\u957F\u5B9E\u6D4B\u4EAE\u70B9\u4E0E\u4F18\u52BF</span></h3><ul class="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"${_scopeId}><!--[-->`);
              ssrRenderList(plan.value.highlights, (item) => {
                _push2(`<li class="flex items-start gap-2 leading-relaxed"${_scopeId}><span class="text-emerald-600 dark:text-emerald-400 font-bold shrink-0"${_scopeId}>\u2713</span><span${_scopeId}>${ssrInterpolate(item)}</span></li>`);
              });
              _push2(`<!--]--></ul></div><div class="rounded-2xl border border-amber-100 dark:border-amber-950/60 bg-amber-50/30 dark:bg-amber-950/20 p-6"${_scopeId}><h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:warning-circle",
                class: "w-5 h-5 text-amber-600 dark:text-amber-400"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u907F\u5751\u63D0\u9192\u4E0E\u6CE8\u610F\u4E8B\u9879</span></h3><ul class="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"${_scopeId}><!--[-->`);
              ssrRenderList(plan.value.caveats, (caveat) => {
                _push2(`<li class="flex items-start gap-2 leading-relaxed"${_scopeId}><span class="text-amber-600 dark:text-amber-400 font-bold shrink-0"${_scopeId}>!</span><span${_scopeId}>${ssrInterpolate(caveat)}</span></li>`);
              });
              _push2(`<!--]--></ul></div></section><section id="setup-guide" class="mt-12 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-6 md:p-8"${_scopeId}><div class="border-b border-slate-200/60 dark:border-slate-800 pb-4"${_scopeId}><h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2"${_scopeId}><span${_scopeId}>\u{1F6E0}\uFE0F</span><span${_scopeId}>1 \u5206\u949F\u63A5\u5165\u4E0E\u914D\u7F6E\u793A\u4F8B (Cursor / VS Code / Cline)</span></h3><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u5F00\u901A\u540E\u83B7\u53D6\u5BF9\u5E94 API Key \u6216\u6309\u7167\u5B98\u65B9\u63D2\u4EF6\u767B\u5F55\u5373\u53EF\u5FEB\u901F\u5199\u4EE3\u7801\uFF0C\u96F6\u7E41\u7410\u6D41\u7A0B </p></div><div class="mt-6 grid gap-5 md:grid-cols-2"${_scopeId}><div class="rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200"${_scopeId}><div class="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 flex items-center justify-between"${_scopeId}><span${_scopeId}># Cursor IDE \u8BBE\u7F6E</span><span class="text-[10px] text-emerald-400 font-sans"${_scopeId}>\u4E3B\u6D41\u63A8\u8350</span></div><p class="text-slate-400"${_scopeId}>\u8DEF\u5F84: Settings -&gt; Models -&gt; OpenAI API Key</p><p class="mt-2 text-slate-400"${_scopeId}>Base URL:</p><p class="text-emerald-400 font-bold"${_scopeId}>https://api.ainode.run/v1</p><p class="mt-2 text-slate-400"${_scopeId}>API Key:</p><p class="text-blue-400"${_scopeId}>sk-your-api-key</p><p class="mt-2 text-slate-400"${_scopeId}>Model Name:</p><p class="text-amber-300"${_scopeId}>${ssrInterpolate(plan.value.models[0] ? getModelApiName(plan.value.models[0]) : "claude-3-7-sonnet")}</p></div><div class="rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200"${_scopeId}><div class="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 flex items-center justify-between"${_scopeId}><span${_scopeId}># VS Code (Cline / Roo Code / Continue)</span><span class="text-[10px] text-blue-400 font-sans"${_scopeId}>\u5F00\u6E90\u795E\u5668</span></div><p class="text-slate-400"${_scopeId}>API Provider: OpenAI Compatible</p><p class="mt-2 text-slate-400"${_scopeId}>Base URL:</p><p class="text-emerald-400 font-bold"${_scopeId}>https://api.ainode.run/v1</p><p class="mt-2 text-slate-400"${_scopeId}>Thinking Mode (\u6EE1\u8840\u63A8\u7406):</p><p class="text-emerald-400"${_scopeId}>100% \u6EE1\u8840\u539F\u751F\u652F\u6301 (reasoning_content)</p></div></div></section>`);
              if (alternatives.value.length) {
                _push2(`<section class="mt-14 border-t border-slate-100 dark:border-slate-800 pt-10"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u540C\u6863\u4F4D\u5176\u4ED6\u7F16\u7A0B\u5957\u9910\u63A8\u8350`);
                    } else {
                      return [
                        createTextVNode("\u540C\u6863\u4F4D\u5176\u4ED6\u7F16\u7A0B\u5957\u9910\u63A8\u8350")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u7EFC\u5408\u9884\u7B97\u3001\u7F51\u7EDC\u73AF\u5883\u4E0E\u6A21\u578B\u504F\u597D\u7684\u66FF\u4EE3\u65B9\u6848\u6A2A\u5411\u53C2\u8003 </p></div>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)("/coding-plans"),
                  class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>\u67E5\u770B\u5B8C\u6574\u5957\u9910\u5BF9\u6BD4</span>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, "\u67E5\u770B\u5B8C\u6574\u5957\u9910\u5BF9\u6BD4"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(alternatives.value, (alt) => {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    key: alt.slug,
                    to: unref(localePath)(`/coding-plans/${alt.slug}`),
                    class: "group rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs block"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white text-xs"${_scopeId2}><span class="${ssrRenderClass([alt.vendorColor, "inline-block h-2 w-2 rounded-full"])}"${_scopeId2}></span><span${_scopeId2}>${ssrInterpolate(alt.name)}</span></div><span class="text-xs font-bold text-slate-900 dark:text-white font-mono"${_scopeId2}>${ssrInterpolate(alt.priceLabel)}</span></div><p class="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed"${_scopeId2}>${ssrInterpolate(alt.quotaNote)}</p><div class="mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(alt.region === "domestic" ? "\u{1F1E8}\u{1F1F3} \u56FD\u5185\u76F4\u8FDE" : "\u{1F310} \u56FD\u5916\u5E73\u53F0")}</span><span class="group-hover:translate-x-0.5 transition-transform"${_scopeId2}>\u67E5\u770B\u8BE6\u60C5 \u2192</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white text-xs" }, [
                              createVNode("span", {
                                class: ["inline-block h-2 w-2 rounded-full", alt.vendorColor]
                              }, null, 2),
                              createVNode("span", null, toDisplayString(alt.name), 1)
                            ]),
                            createVNode("span", { class: "text-xs font-bold text-slate-900 dark:text-white font-mono" }, toDisplayString(alt.priceLabel), 1)
                          ]),
                          createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed" }, toDisplayString(alt.quotaNote), 1),
                          createVNode("div", { class: "mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium" }, [
                            createVNode("span", null, toDisplayString(alt.region === "domestic" ? "\u{1F1E8}\u{1F1F3} \u56FD\u5185\u76F4\u8FDE" : "\u{1F310} \u56FD\u5916\u5E73\u53F0"), 1),
                            createVNode("span", { class: "group-hover:translate-x-0.5 transition-transform" }, "\u67E5\u770B\u8BE6\u60C5 \u2192")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="py-20 text-center space-y-4"${_scopeId}><h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u672A\u627E\u5230\u5BF9\u5E94\u7F16\u7A0B\u5957\u9910</h2><p class="text-xs text-slate-500"${_scopeId}>\u8BE5\u5957\u9910\u53EF\u80FD\u5DF2\u4E0B\u67B6\u6216\u6807\u8BC6\u6709\u8BEF</p>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/coding-plans"),
                class: "inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8FD4\u56DE\u5957\u9910\u5BF9\u6BD4\u5217\u8868 `);
                  } else {
                    return [
                      createTextVNode(" \u8FD4\u56DE\u5957\u9910\u5BF9\u6BD4\u5217\u8868 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              plan.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-8 md:py-16"
              }, [
                createVNode("div", { class: "flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6" }, [
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/"),
                    class: "hover:text-slate-900 dark:hover:text-white transition-colors"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u9996\u9875 ")
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("span", null, "/"),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/coding-plans"),
                    class: "hover:text-slate-900 dark:hover:text-white transition-colors"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4 ")
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("span", null, "/"),
                  createVNode("span", { class: "text-slate-900 dark:text-white font-medium truncate max-w-[200px] sm:max-w-none" }, toDisplayString(plan.value.name), 1)
                ]),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/coding-plans"),
                  class: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "\u8FD4\u56DE\u6A21\u578B\u5957\u9910\u5BF9\u6BD4")
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("div", { class: "flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-8" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("span", {
                        class: ["inline-block h-3.5 w-3.5 rounded-full shrink-0", plan.value.vendorColor]
                      }, null, 2),
                      createVNode("h1", { class: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" }, toDisplayString(plan.value.name), 1)
                    ]),
                    createVNode("div", { class: "mt-3 flex flex-wrap items-center gap-2" }, [
                      plan.value.status === "hot" ? (openBlock(), createBlock(_component_HoxiTag, {
                        key: 0,
                        tone: "positive"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u70ED\u95E8\u4E3B\u529B ")
                        ]),
                        _: 1
                      })) : plan.value.region === "domestic" ? (openBlock(), createBlock(_component_HoxiTag, {
                        key: 1,
                        tone: "info"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u{1F1E8}\u{1F1F3} \u56FD\u5185\u76F4\u8FDE ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("span", { class: "inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300" }, toDisplayString(plan.value.vendorLabel), 1),
                      createVNode("span", { class: "inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300" }, toDisplayString(getPlanTypeLabel(plan.value.type)), 1)
                    ]),
                    createVNode("p", { class: "mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl" }, toDisplayString(planSummary.value), 1)
                  ]),
                  createVNode("div", { class: "w-full md:w-80 shrink-0 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-5 shadow-xs" }, [
                    createVNode("div", { class: "text-xs text-slate-400 dark:text-slate-500 font-medium" }, "\u53C2\u8003\u5B98\u65B9\u8D39\u7528"),
                    createVNode("div", { class: "mt-1 flex items-baseline gap-2" }, [
                      createVNode("span", { class: "text-3xl font-black text-slate-900 dark:text-white tracking-tight" }, toDisplayString(plan.value.priceLabel), 1),
                      createVNode("span", { class: "text-xs text-slate-400 dark:text-slate-500" }, "\u7EA6 \xA5" + toDisplayString(plan.value.priceMonthlyCNY) + "/\u6708", 1)
                    ]),
                    createVNode("div", { class: "mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800 pt-3" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-slate-400" }, "\u8BA1\u8D39\u5468\u671F\uFF1A"),
                        createVNode("span", { class: "font-medium text-slate-700 dark:text-slate-200" }, toDisplayString(plan.value.period), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-slate-400" }, "\u7F51\u7EDC\u8981\u6C42\uFF1A"),
                        createVNode("span", { class: "font-medium text-slate-700 dark:text-slate-200" }, toDisplayString(plan.value.networkRequirement), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-slate-400" }, "\u652F\u4ED8\u652F\u6301\uFF1A"),
                        createVNode("span", {
                          class: "font-medium text-slate-700 dark:text-slate-200 truncate max-w-[150px] text-right",
                          title: plan.value.paymentMethods.join(" / ")
                        }, toDisplayString(plan.value.paymentMethods.join(" / ")), 9, ["title"])
                      ])
                    ]),
                    createVNode("div", { class: "mt-5 space-y-2" }, [
                      plan.value.officialUrl ? (openBlock(), createBlock("a", {
                        key: 0,
                        href: plan.value.officialUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "flex items-center justify-center gap-1.5 w-full rounded-xl bg-slate-900 dark:bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs"
                      }, [
                        createVNode("span", null, "\u53BB\u5B98\u7F51\u5F00\u901A / \u5B9A\u4EF7\u9875"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-up-right",
                          class: "w-3.5 h-3.5"
                        })
                      ], 8, ["href"])) : createCommentVNode("", true),
                      createVNode("a", {
                        href: "#setup-guide",
                        class: "flex items-center justify-center gap-1.5 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-slate-400 transition-colors"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:terminal-window",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, "\u67E5\u770B IDE \u914D\u7F6E\u6559\u7A0B")
                      ])
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-10" }, [
                  createVNode(_component_HoxiSectionLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("\u5957\u9910\u89C4\u683C\u4E0E\u8C03\u7528\u989D\u5EA6\u7EC6\u5219")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-4 overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs" }, [
                    createVNode("table", { class: "w-full text-left text-xs" }, [
                      createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300" }, [
                        createVNode("tr", { class: "hover:bg-slate-50/50 dark:hover:bg-slate-800/30" }, [
                          createVNode("td", { class: "w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40" }, " \u989D\u5EA6\u4E0E\u5E76\u53D1\u9650\u5236 "),
                          createVNode("td", { class: "py-3.5 px-4 leading-relaxed" }, toDisplayString(plan.value.quotaNote), 1)
                        ]),
                        createVNode("tr", { class: "hover:bg-slate-50/50 dark:hover:bg-slate-800/30" }, [
                          createVNode("td", { class: "w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40" }, " \u6838\u5FC3\u652F\u6301\u6A21\u578B "),
                          createVNode("td", { class: "py-3.5 px-4" }, [
                            createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(plan.value.models, (modelName) => {
                                return openBlock(), createBlock(Fragment, { key: modelName }, [
                                  getModelSlug(modelName) ? (openBlock(), createBlock(_component_NuxtLink, {
                                    key: 0,
                                    to: unref(localePath)(`/models/${getModelSlug(modelName)}`),
                                    class: "inline-flex items-center gap-1 rounded-md bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/40 hover:border-blue-400 transition-all"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(modelName), 1),
                                      createVNode(_component_UIcon, {
                                        name: "ph:chart-bar",
                                        class: "w-3 h-3 text-blue-500"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])) : (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-700 dark:text-slate-300"
                                  }, toDisplayString(modelName), 1))
                                ], 64);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("tr", { class: "hover:bg-slate-50/50 dark:hover:bg-slate-800/30" }, [
                          createVNode("td", { class: "w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40" }, " \u9002\u914D\u5DE5\u5177\u751F\u6001 "),
                          createVNode("td", { class: "py-3.5 px-4" }, [
                            createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(plan.value.tools, (tool) => {
                                return openBlock(), createBlock("span", {
                                  key: tool,
                                  class: "rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-700 dark:text-slate-300"
                                }, " \u{1F6E0}\uFE0F " + toDisplayString(tool), 1);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("tr", { class: "hover:bg-slate-50/50 dark:hover:bg-slate-800/30" }, [
                          createVNode("td", { class: "w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40" }, " \u652F\u4ED8\u4E0E\u5145\u503C\u6E20\u9053 "),
                          createVNode("td", { class: "py-3.5 px-4 font-medium text-slate-800 dark:text-slate-200" }, toDisplayString(plan.value.paymentMethods.join(" / ")), 1)
                        ]),
                        createVNode("tr", { class: "hover:bg-slate-50/50 dark:hover:bg-slate-800/30" }, [
                          createVNode("td", { class: "w-36 py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 bg-slate-50/60 dark:bg-slate-800/40" }, " \u7F51\u7EDC\u4E0E\u5730\u533A\u9650\u5236 "),
                          createVNode("td", { class: "py-3.5 px-4" }, [
                            createVNode("span", {
                              class: ["inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-semibold", plan.value.region === "domestic" ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300"]
                            }, toDisplayString(plan.value.networkRequirement), 3)
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-12 grid gap-6 md:grid-cols-2" }, [
                  createVNode("div", { class: "rounded-2xl border border-emerald-100 dark:border-emerald-950/60 bg-emerald-50/30 dark:bg-emerald-950/20 p-6" }, [
                    createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:check-circle",
                        class: "w-5 h-5 text-emerald-600 dark:text-emerald-400"
                      }),
                      createVNode("span", null, "\u7AD9\u957F\u5B9E\u6D4B\u4EAE\u70B9\u4E0E\u4F18\u52BF")
                    ]),
                    createVNode("ul", { class: "mt-4 space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(plan.value.highlights, (item) => {
                        return openBlock(), createBlock("li", {
                          key: item,
                          class: "flex items-start gap-2 leading-relaxed"
                        }, [
                          createVNode("span", { class: "text-emerald-600 dark:text-emerald-400 font-bold shrink-0" }, "\u2713"),
                          createVNode("span", null, toDisplayString(item), 1)
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "rounded-2xl border border-amber-100 dark:border-amber-950/60 bg-amber-50/30 dark:bg-amber-950/20 p-6" }, [
                    createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:warning-circle",
                        class: "w-5 h-5 text-amber-600 dark:text-amber-400"
                      }),
                      createVNode("span", null, "\u907F\u5751\u63D0\u9192\u4E0E\u6CE8\u610F\u4E8B\u9879")
                    ]),
                    createVNode("ul", { class: "mt-4 space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(plan.value.caveats, (caveat) => {
                        return openBlock(), createBlock("li", {
                          key: caveat,
                          class: "flex items-start gap-2 leading-relaxed"
                        }, [
                          createVNode("span", { class: "text-amber-600 dark:text-amber-400 font-bold shrink-0" }, "!"),
                          createVNode("span", null, toDisplayString(caveat), 1)
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("section", {
                  id: "setup-guide",
                  class: "mt-12 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 p-6 md:p-8"
                }, [
                  createVNode("div", { class: "border-b border-slate-200/60 dark:border-slate-800 pb-4" }, [
                    createVNode("h3", { class: "text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2" }, [
                      createVNode("span", null, "\u{1F6E0}\uFE0F"),
                      createVNode("span", null, "1 \u5206\u949F\u63A5\u5165\u4E0E\u914D\u7F6E\u793A\u4F8B (Cursor / VS Code / Cline)")
                    ]),
                    createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, " \u5F00\u901A\u540E\u83B7\u53D6\u5BF9\u5E94 API Key \u6216\u6309\u7167\u5B98\u65B9\u63D2\u4EF6\u767B\u5F55\u5373\u53EF\u5FEB\u901F\u5199\u4EE3\u7801\uFF0C\u96F6\u7E41\u7410\u6D41\u7A0B ")
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-5 md:grid-cols-2" }, [
                    createVNode("div", { class: "rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200" }, [
                      createVNode("div", { class: "text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 flex items-center justify-between" }, [
                        createVNode("span", null, "# Cursor IDE \u8BBE\u7F6E"),
                        createVNode("span", { class: "text-[10px] text-emerald-400 font-sans" }, "\u4E3B\u6D41\u63A8\u8350")
                      ]),
                      createVNode("p", { class: "text-slate-400" }, "\u8DEF\u5F84: Settings -> Models -> OpenAI API Key"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Base URL:"),
                      createVNode("p", { class: "text-emerald-400 font-bold" }, "https://api.ainode.run/v1"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "API Key:"),
                      createVNode("p", { class: "text-blue-400" }, "sk-your-api-key"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Model Name:"),
                      createVNode("p", { class: "text-amber-300" }, toDisplayString(plan.value.models[0] ? getModelApiName(plan.value.models[0]) : "claude-3-7-sonnet"), 1)
                    ]),
                    createVNode("div", { class: "rounded-xl bg-slate-900 p-5 font-mono text-xs text-slate-200" }, [
                      createVNode("div", { class: "text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 flex items-center justify-between" }, [
                        createVNode("span", null, "# VS Code (Cline / Roo Code / Continue)"),
                        createVNode("span", { class: "text-[10px] text-blue-400 font-sans" }, "\u5F00\u6E90\u795E\u5668")
                      ]),
                      createVNode("p", { class: "text-slate-400" }, "API Provider: OpenAI Compatible"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Base URL:"),
                      createVNode("p", { class: "text-emerald-400 font-bold" }, "https://api.ainode.run/v1"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Thinking Mode (\u6EE1\u8840\u63A8\u7406):"),
                      createVNode("p", { class: "text-emerald-400" }, "100% \u6EE1\u8840\u539F\u751F\u652F\u6301 (reasoning_content)")
                    ])
                  ])
                ]),
                alternatives.value.length ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "mt-14 border-t border-slate-100 dark:border-slate-800 pt-10"
                }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u540C\u6863\u4F4D\u5176\u4ED6\u7F16\u7A0B\u5957\u9910\u63A8\u8350")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, " \u7EFC\u5408\u9884\u7B97\u3001\u7F51\u7EDC\u73AF\u5883\u4E0E\u6A21\u578B\u504F\u597D\u7684\u66FF\u4EE3\u65B9\u6848\u6A2A\u5411\u53C2\u8003 ")
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/coding-plans"),
                      class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u67E5\u770B\u5B8C\u6574\u5957\u9910\u5BF9\u6BD4"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(alternatives.value, (alt) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: alt.slug,
                        to: unref(localePath)(`/coding-plans/${alt.slug}`),
                        class: "group rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs block"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white text-xs" }, [
                              createVNode("span", {
                                class: ["inline-block h-2 w-2 rounded-full", alt.vendorColor]
                              }, null, 2),
                              createVNode("span", null, toDisplayString(alt.name), 1)
                            ]),
                            createVNode("span", { class: "text-xs font-bold text-slate-900 dark:text-white font-mono" }, toDisplayString(alt.priceLabel), 1)
                          ]),
                          createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed" }, toDisplayString(alt.quotaNote), 1),
                          createVNode("div", { class: "mt-3 flex items-center justify-between text-[11px] text-blue-600 dark:text-blue-400 font-medium" }, [
                            createVNode("span", null, toDisplayString(alt.region === "domestic" ? "\u{1F1E8}\u{1F1F3} \u56FD\u5185\u76F4\u8FDE" : "\u{1F310} \u56FD\u5916\u5E73\u53F0"), 1),
                            createVNode("span", { class: "group-hover:translate-x-0.5 transition-transform" }, "\u67E5\u770B\u8BE6\u60C5 \u2192")
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "py-20 text-center space-y-4"
              }, [
                createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u672A\u627E\u5230\u5BF9\u5E94\u7F16\u7A0B\u5957\u9910"),
                createVNode("p", { class: "text-xs text-slate-500" }, "\u8BE5\u5957\u9910\u53EF\u80FD\u5DF2\u4E0B\u67B6\u6216\u6807\u8BC6\u6709\u8BEF"),
                createVNode(_component_NuxtLink, {
                  to: unref(localePath)("/coding-plans"),
                  class: "inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition-colors"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u8FD4\u56DE\u5957\u9910\u5BF9\u6BD4\u5217\u8868 ")
                  ]),
                  _: 1
                }, 8, ["to"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/coding-plans/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
