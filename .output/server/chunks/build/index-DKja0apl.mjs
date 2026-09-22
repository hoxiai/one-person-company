import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aM as useLocaleRouter, t as useSettings, y as useFetch, bj as useSeoMeta, bk as useJsonLd, a as __nuxt_component_3$1, b as _sfc_main$G } from './server.mjs';
import __nuxt_component_4 from './HoxiTag-BAz_5lMM.mjs';
import __nuxt_component_7 from './HoxiSectionLabel-BlLbr3V0.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHoxiModels } from './useHoxiModels-DpcwauH-.mjs';
import { h as hoxiPlans } from './plans-D8XOOLan.mjs';
import '../nitro/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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
import 'zod';
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
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const { models: allModels } = useHoxiModels();
    const getModelSlug = (modelName) => {
      const q = modelName.toLowerCase().trim();
      const found = allModels.value.find(
        (m) => m.name.toLowerCase() === q || m.slug.toLowerCase() === q || q.includes(m.name.toLowerCase()) || m.name.toLowerCase().includes(q)
      );
      return found ? found.slug : null;
    };
    const activeRegion = ref("all");
    const activeType = ref("all");
    const regionFilters = [
      { key: "all", label: "\u5168\u90E8" },
      { key: "domestic", label: "\u56FD\u5185" },
      { key: "international", label: "\u56FD\u5916" }
    ];
    const typeFilters = [
      { key: "all", label: "\u5168\u90E8\u7C7B\u578B" },
      { key: "coding_plan", label: "IDE \u7F16\u7A0B\u5957\u9910" },
      { key: "subscription", label: "\u5B98\u65B9 Web \u8BA2\u9605" },
      { key: "token_plan", label: "Token \u8D44\u6E90\u5305/\u6309\u91CF" }
    ];
    const { data: dbPlans } = useFetch(
      "/api/hoxi/plans",
      {
        key: "hoxi-db-plans",
        default: () => null
      },
      "$u6UdDMiLQj"
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
    const regionCounts = computed(() => ({
      all: effectivePlans.value.length,
      domestic: effectivePlans.value.filter((p) => p.region === "domestic").length,
      international: effectivePlans.value.filter((p) => p.region === "international").length
    }));
    const filteredPlans = computed(() => {
      return effectivePlans.value.filter((item) => {
        const matchRegion = activeRegion.value === "all" || item.region === activeRegion.value;
        const matchType = activeType.value === "all" || item.type === activeType.value;
        return matchRegion && matchType;
      });
    });
    useSeoMeta({
      title: () => t("hoxi.plans.seoTitle") || t("hoxi.plans.title"),
      description: () => t("hoxi.plans.seoDescription") || t("hoxi.plans.subtitle"),
      ogTitle: () => t("hoxi.plans.seoTitle") || t("hoxi.plans.title"),
      ogDescription: () => t("hoxi.plans.seoDescription") || t("hoxi.plans.subtitle"),
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => t("hoxi.plans.seoTitle") || t("hoxi.plans.title"),
      twitterDescription: () => t("hoxi.plans.seoDescription") || t("hoxi.plans.subtitle"),
      keywords: "AI\u7F16\u7A0B\u5957\u9910, Cursor Pro\u4EF7\u683C, Claude Pro\u8BA2\u9605, GitHub Copilot\u5BF9\u6BD4, ChatGPT Plus, \u963F\u91CC\u4E91\u767E\u70BCCoding, Token\u8D44\u6E90\u5305, IDE AI\u63D2\u4EF6"
    });
    useJsonLd("hoxi-coding-plans-list", computed(() => [
      {
        "@type": "CollectionPage",
        name: t("hoxi.plans.seoTitle") || t("hoxi.plans.title"),
        description: t("hoxi.plans.seoDescription") || t("hoxi.plans.subtitle"),
        url: localePath("/coding-plans")
      },
      {
        "@type": "ItemList",
        name: "AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4",
        numberOfItems: filteredPlans.value.length,
        itemListElement: filteredPlans.value.map((plan, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: plan.name,
          url: localePath(`/coding-plans/${plan.slug}`)
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
          { "@type": "ListItem", position: 2, name: t("hoxi.plans.title"), item: localePath("/coding-plans") }
        ]
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiTag = __nuxt_component_4;
      const _component_UIcon = _sfc_main$G;
      const _component_HoxiSectionLabel = __nuxt_component_7;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}><div class="text-center max-w-3xl mx-auto mb-10 md:mb-14"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/70 dark:border-purple-800/60 mb-3 shadow-2xs"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"${_scopeId}></span> IDE \u5957\u9910 \xB7 \u989D\u5EA6\u907F\u5751 </span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.plans.title"))}</h1><p class="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.plans.subtitle"))}</p></div><div class="mt-8 space-y-4 border-b border-slate-100 dark:border-slate-800 pb-5"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><span class="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1"${_scopeId}>\u5E73\u53F0\u8303\u56F4:</span><!--[-->`);
            ssrRenderList(regionFilters, (region) => {
              _push2(`<button type="button" class="${ssrRenderClass([activeRegion.value === region.key ? "bg-slate-900 dark:bg-blue-600 text-white shadow-sm" : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-100 dark:border-slate-800", "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all flex items-center gap-1.5"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(region.label)}</span><span class="${ssrRenderClass([activeRegion.value === region.key ? "bg-white/20 text-white dark:bg-slate-900/20" : "text-slate-500 dark:text-slate-400", "ml-0.5 rounded-full bg-slate-200/60 dark:bg-slate-800 px-1.5 py-0.2 text-[10px]"])}"${_scopeId}>${ssrInterpolate(regionCounts.value[region.key])}</span></button>`);
            });
            _push2(`<!--]--></div><div class="flex flex-wrap items-center justify-between gap-3 pt-1"${_scopeId}><div class="flex flex-wrap items-center gap-1.5"${_scopeId}><span class="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1"${_scopeId}>\u5957\u9910\u7C7B\u578B:</span><!--[-->`);
            ssrRenderList(typeFilters, (filter) => {
              _push2(`<button type="button" class="${ssrRenderClass([activeType.value === filter.key ? "bg-blue-500 dark:bg-blue-600 text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200", "rounded-full px-2.5 py-1 text-xs font-medium transition-colors"])}"${_scopeId}>${ssrInterpolate(filter.label)}</button>`);
            });
            _push2(`<!--]--></div><div class="text-xs text-slate-400 dark:text-slate-500"${_scopeId}> \u5171 ${ssrInterpolate(filteredPlans.value.length)} \u4E2A </div></div></div><div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(filteredPlans.value, (plan) => {
              _push2(`<div class="flex flex-col justify-between rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40 p-5 transition-all hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 relative"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-2"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/coding-plans/${plan.slug}`),
                class: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass([plan.vendorColor, "inline-block h-2 w-2 rounded-full"])}"${_scopeId2}></span><span${_scopeId2}>${ssrInterpolate(plan.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: ["inline-block h-2 w-2 rounded-full", plan.vendorColor]
                      }, null, 2),
                      createVNode("span", null, toDisplayString(plan.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="mt-1 flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(plan.vendorLabel)}</span><span${_scopeId}>\xB7</span><span class="text-slate-500 dark:text-slate-400 font-medium"${_scopeId}>${ssrInterpolate(plan.region === "domestic" ? "\u56FD\u5185" : "\u56FD\u5916")}</span></div></div>`);
              if (plan.status === "hot") {
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
                  _: 2
                }, _parent2, _scopeId));
              } else if (plan.region === "domestic") {
                _push2(ssrRenderComponent(_component_HoxiTag, { tone: "info" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u56FD\u5185\u76F4\u8FDE `);
                    } else {
                      return [
                        createTextVNode(" \u56FD\u5185\u76F4\u8FDE ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mt-4 flex items-baseline gap-2"${_scopeId}><span class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(plan.priceLabel)}</span><span class="text-xs text-slate-400 dark:text-slate-500"${_scopeId}>\u7EA6 \xA5${ssrInterpolate(plan.priceMonthlyCNY)}/\u6708</span></div><div class="mt-3 flex flex-wrap gap-1.5 text-[11px]"${_scopeId}><span class="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(plan.networkRequirement)}</span><span class="rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(plan.paymentMethods.join(" / "))}</span></div><p class="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(plan.quotaNote)}</p><div class="mt-4 border-t border-slate-100/80 dark:border-slate-800 pt-3"${_scopeId}><span class="text-[11px] font-medium text-slate-400 dark:text-slate-500"${_scopeId}>\u652F\u6301\u6A21\u578B\uFF1A</span><div class="mt-1.5 flex flex-wrap gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(plan.models, (modelName) => {
                _push2(`<!--[-->`);
                if (getModelSlug(modelName)) {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)(`/models/${getModelSlug(modelName)}`),
                    class: "rounded bg-white dark:bg-slate-800 px-1.5 py-0.5 text-[11px] text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:hover:border-blue-800/60",
                    title: `\u67E5\u770B ${modelName} \u8BC4\u6D4B\u4E0E\u8BE6\u60C5`
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(modelName)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(modelName), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<span class="rounded bg-white dark:bg-slate-800 px-1.5 py-0.5 text-[11px] text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700"${_scopeId}>${ssrInterpolate(modelName)}</span>`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div></div><ul class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400"${_scopeId}><!--[-->`);
              ssrRenderList(plan.highlights.slice(0, 3), (item) => {
                _push2(`<li class="flex items-start gap-1.5"${_scopeId}><span class="text-emerald-600 dark:text-emerald-400 font-bold"${_scopeId}>\u2713</span><span${_scopeId}>${ssrInterpolate(item)}</span></li>`);
              });
              _push2(`<!--]--></ul>`);
              if (plan.caveats.length) {
                _push2(`<div class="mt-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 p-2.5 text-[11px] leading-5 text-amber-800 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/30"${_scopeId}><strong class="font-semibold"${_scopeId}>\u6CE8\u610F\uFF1A</strong>${ssrInterpolate(plan.caveats[0])}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mt-6 border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/coding-plans/${plan.slug}`),
                class: "flex-1 rounded-lg bg-slate-900 dark:bg-blue-600 py-2 text-center text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u67E5\u770B\u8BE6\u60C5\u4E0E\u914D\u7F6E `);
                  } else {
                    return [
                      createTextVNode(" \u67E5\u770B\u8BE6\u60C5\u4E0E\u914D\u7F6E ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (plan.officialUrl) {
                _push2(`<a${ssrRenderAttr("href", plan.officialUrl)} target="_blank" rel="noopener noreferrer" class="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-center text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" title="\u8BBF\u95EE\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-up-right",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><section class="mt-16 border-t border-slate-100 dark:border-slate-800 pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u600E\u4E48\u9009`);
                } else {
                  return [
                    createTextVNode("\u600E\u4E48\u9009")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 grid gap-6 md:grid-cols-3"${_scopeId}><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200"${_scopeId}> \u56FD\u5916\u5B98\u65B9\u5E73\u53F0 </h3><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}><strong${_scopeId}>\u597D\u5904\uFF1A</strong>\u80FD\u76F4\u63A5\u7528 Claude\u3001GPT \u7B49\u6D77\u5916\u65D7\u8230\u6A21\u578B\u548C\u5B98\u65B9\u5DE5\u5177\u3002<br${_scopeId}><strong${_scopeId}>\u9EBB\u70E6\uFF1A</strong>\u8981\u5916\u5E01\u5361\u548C\u7A33\u5B9A\u7684\u7F51\u7EDC\uFF0C\u7528\u5F97\u591A\u5BB9\u6613\u78B0\u5230\u98CE\u63A7\u3002 </p></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200"${_scopeId}> \u56FD\u5185\u76F4\u8FDE\u5E73\u53F0 </h3><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}><strong${_scopeId}>\u597D\u5904\uFF1A</strong>\u652F\u4ED8\u5B9D\u3001\u5FAE\u4FE1\u4ED8\u6B3E\uFF0C\u56FD\u5185\u76F4\u8FDE\uFF0C\u56FD\u4EA7\u6A21\u578B\u5355\u4EF7\u4F4E\u3002<br${_scopeId}><strong${_scopeId}>\u9EBB\u70E6\uFF1A</strong>\u901A\u5E38\u7528\u4E0D\u4E86 Claude \u7B49\u6D77\u5916\u95ED\u6E90\u6A21\u578B\u3002 </p></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200"${_scopeId}> \u600E\u4E48\u642D\u914D </h3><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}> \u96BE\u7684\u6D3B\u7528 <strong${_scopeId}>Cursor / Claude</strong> \u8FD9\u7C7B\u6D77\u5916\u5DE5\u5177\uFF0C\u65E5\u5E38\u5927\u91CF\u7684\u8865\u5168\u548C\u5355\u6D4B\u7528<strong${_scopeId}>\u56FD\u5185\u6309\u91CF\u4ED8\u8D39\u7684 Key</strong>\u3002 </p></div></div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-16" }, [
                createVNode("div", { class: "text-center max-w-3xl mx-auto mb-10 md:mb-14" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/70 dark:border-purple-800/60 mb-3 shadow-2xs" }, [
                    createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" }),
                    createTextVNode(" IDE \u5957\u9910 \xB7 \u989D\u5EA6\u907F\u5751 ")
                  ]),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.plans.title")), 1),
                  createVNode("p", { class: "mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.plans.subtitle")), 1)
                ]),
                createVNode("div", { class: "mt-8 space-y-4 border-b border-slate-100 dark:border-slate-800 pb-5" }, [
                  createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                    createVNode("span", { class: "text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1" }, "\u5E73\u53F0\u8303\u56F4:"),
                    (openBlock(), createBlock(Fragment, null, renderList(regionFilters, (region) => {
                      return createVNode("button", {
                        key: region.key,
                        type: "button",
                        class: ["rounded-full px-3.5 py-1.5 text-xs font-medium transition-all flex items-center gap-1.5", activeRegion.value === region.key ? "bg-slate-900 dark:bg-blue-600 text-white shadow-sm" : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-100 dark:border-slate-800"],
                        onClick: ($event) => activeRegion.value = region.key
                      }, [
                        createVNode("span", null, toDisplayString(region.label), 1),
                        createVNode("span", {
                          class: ["ml-0.5 rounded-full bg-slate-200/60 dark:bg-slate-800 px-1.5 py-0.2 text-[10px]", activeRegion.value === region.key ? "bg-white/20 text-white dark:bg-slate-900/20" : "text-slate-500 dark:text-slate-400"]
                        }, toDisplayString(regionCounts.value[region.key]), 3)
                      ], 10, ["onClick"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3 pt-1" }, [
                    createVNode("div", { class: "flex flex-wrap items-center gap-1.5" }, [
                      createVNode("span", { class: "text-xs font-semibold text-slate-400 dark:text-slate-500 mr-1" }, "\u5957\u9910\u7C7B\u578B:"),
                      (openBlock(), createBlock(Fragment, null, renderList(typeFilters, (filter) => {
                        return createVNode("button", {
                          key: filter.key,
                          type: "button",
                          class: ["rounded-full px-2.5 py-1 text-xs font-medium transition-colors", activeType.value === filter.key ? "bg-blue-500 dark:bg-blue-600 text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200"],
                          onClick: ($event) => activeType.value = filter.key
                        }, toDisplayString(filter.label), 11, ["onClick"]);
                      }), 64))
                    ]),
                    createVNode("div", { class: "text-xs text-slate-400 dark:text-slate-500" }, " \u5171 " + toDisplayString(filteredPlans.value.length) + " \u4E2A ", 1)
                  ])
                ]),
                createVNode("div", { class: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(filteredPlans.value, (plan) => {
                    return openBlock(), createBlock("div", {
                      key: plan.slug,
                      class: "flex flex-col justify-between rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40 p-5 transition-all hover:border-slate-200 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 relative"
                    }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-start justify-between gap-2" }, [
                          createVNode("div", null, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localePath)(`/coding-plans/${plan.slug}`),
                              class: "flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", {
                                  class: ["inline-block h-2 w-2 rounded-full", plan.vendorColor]
                                }, null, 2),
                                createVNode("span", null, toDisplayString(plan.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            createVNode("div", { class: "mt-1 flex items-center gap-2 text-[11px] text-slate-400 dark:text-slate-500" }, [
                              createVNode("span", null, toDisplayString(plan.vendorLabel), 1),
                              createVNode("span", null, "\xB7"),
                              createVNode("span", { class: "text-slate-500 dark:text-slate-400 font-medium" }, toDisplayString(plan.region === "domestic" ? "\u56FD\u5185" : "\u56FD\u5916"), 1)
                            ])
                          ]),
                          plan.status === "hot" ? (openBlock(), createBlock(_component_HoxiTag, {
                            key: 0,
                            tone: "positive"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u70ED\u95E8\u4E3B\u529B ")
                            ]),
                            _: 1
                          })) : plan.region === "domestic" ? (openBlock(), createBlock(_component_HoxiTag, {
                            key: 1,
                            tone: "info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u56FD\u5185\u76F4\u8FDE ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "mt-4 flex items-baseline gap-2" }, [
                          createVNode("span", { class: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white" }, toDisplayString(plan.priceLabel), 1),
                          createVNode("span", { class: "text-xs text-slate-400 dark:text-slate-500" }, "\u7EA6 \xA5" + toDisplayString(plan.priceMonthlyCNY) + "/\u6708", 1)
                        ]),
                        createVNode("div", { class: "mt-3 flex flex-wrap gap-1.5 text-[11px]" }, [
                          createVNode("span", { class: "rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-slate-600 dark:text-slate-300" }, toDisplayString(plan.networkRequirement), 1),
                          createVNode("span", { class: "rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-slate-600 dark:text-slate-300" }, toDisplayString(plan.paymentMethods.join(" / ")), 1)
                        ]),
                        createVNode("p", { class: "mt-3 text-xs leading-5 text-slate-600 dark:text-slate-400" }, toDisplayString(plan.quotaNote), 1),
                        createVNode("div", { class: "mt-4 border-t border-slate-100/80 dark:border-slate-800 pt-3" }, [
                          createVNode("span", { class: "text-[11px] font-medium text-slate-400 dark:text-slate-500" }, "\u652F\u6301\u6A21\u578B\uFF1A"),
                          createVNode("div", { class: "mt-1.5 flex flex-wrap gap-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(plan.models, (modelName) => {
                              return openBlock(), createBlock(Fragment, { key: modelName }, [
                                getModelSlug(modelName) ? (openBlock(), createBlock(_component_NuxtLink, {
                                  key: 0,
                                  to: unref(localePath)(`/models/${getModelSlug(modelName)}`),
                                  class: "rounded bg-white dark:bg-slate-800 px-1.5 py-0.5 text-[11px] text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700 hover:border-blue-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:hover:border-blue-800/60",
                                  title: `\u67E5\u770B ${modelName} \u8BC4\u6D4B\u4E0E\u8BE6\u60C5`
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(modelName), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "title"])) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "rounded bg-white dark:bg-slate-800 px-1.5 py-0.5 text-[11px] text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-700"
                                }, toDisplayString(modelName), 1))
                              ], 64);
                            }), 128))
                          ])
                        ]),
                        createVNode("ul", { class: "mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(plan.highlights.slice(0, 3), (item) => {
                            return openBlock(), createBlock("li", {
                              key: item,
                              class: "flex items-start gap-1.5"
                            }, [
                              createVNode("span", { class: "text-emerald-600 dark:text-emerald-400 font-bold" }, "\u2713"),
                              createVNode("span", null, toDisplayString(item), 1)
                            ]);
                          }), 128))
                        ]),
                        plan.caveats.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 p-2.5 text-[11px] leading-5 text-amber-800 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/30"
                        }, [
                          createVNode("strong", { class: "font-semibold" }, "\u6CE8\u610F\uFF1A"),
                          createTextVNode(toDisplayString(plan.caveats[0]), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mt-6 border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center gap-2" }, [
                        createVNode(_component_NuxtLink, {
                          to: unref(localePath)(`/coding-plans/${plan.slug}`),
                          class: "flex-1 rounded-lg bg-slate-900 dark:bg-blue-600 py-2 text-center text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u67E5\u770B\u8BE6\u60C5\u4E0E\u914D\u7F6E ")
                          ]),
                          _: 1
                        }, 8, ["to"]),
                        plan.officialUrl ? (openBlock(), createBlock("a", {
                          key: 0,
                          href: plan.officialUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-center text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors",
                          title: "\u8BBF\u95EE\u5382\u5546\u5B98\u65B9\u5B9A\u4EF7\u9875"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-up-right",
                            class: "w-3.5 h-3.5"
                          })
                        ], 8, ["href"])) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ]),
                createVNode("section", { class: "mt-16 border-t border-slate-100 dark:border-slate-800 pt-10" }, [
                  createVNode(_component_HoxiSectionLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("\u600E\u4E48\u9009")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-6 grid gap-6 md:grid-cols-3" }, [
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h3", { class: "text-sm font-semibold text-slate-800 dark:text-slate-200" }, " \u56FD\u5916\u5B98\u65B9\u5E73\u53F0 "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, [
                        createVNode("strong", null, "\u597D\u5904\uFF1A"),
                        createTextVNode("\u80FD\u76F4\u63A5\u7528 Claude\u3001GPT \u7B49\u6D77\u5916\u65D7\u8230\u6A21\u578B\u548C\u5B98\u65B9\u5DE5\u5177\u3002"),
                        createVNode("br"),
                        createVNode("strong", null, "\u9EBB\u70E6\uFF1A"),
                        createTextVNode("\u8981\u5916\u5E01\u5361\u548C\u7A33\u5B9A\u7684\u7F51\u7EDC\uFF0C\u7528\u5F97\u591A\u5BB9\u6613\u78B0\u5230\u98CE\u63A7\u3002 ")
                      ])
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h3", { class: "text-sm font-semibold text-slate-800 dark:text-slate-200" }, " \u56FD\u5185\u76F4\u8FDE\u5E73\u53F0 "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, [
                        createVNode("strong", null, "\u597D\u5904\uFF1A"),
                        createTextVNode("\u652F\u4ED8\u5B9D\u3001\u5FAE\u4FE1\u4ED8\u6B3E\uFF0C\u56FD\u5185\u76F4\u8FDE\uFF0C\u56FD\u4EA7\u6A21\u578B\u5355\u4EF7\u4F4E\u3002"),
                        createVNode("br"),
                        createVNode("strong", null, "\u9EBB\u70E6\uFF1A"),
                        createTextVNode("\u901A\u5E38\u7528\u4E0D\u4E86 Claude \u7B49\u6D77\u5916\u95ED\u6E90\u6A21\u578B\u3002 ")
                      ])
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h3", { class: "text-sm font-semibold text-slate-800 dark:text-slate-200" }, " \u600E\u4E48\u642D\u914D "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, [
                        createTextVNode(" \u96BE\u7684\u6D3B\u7528 "),
                        createVNode("strong", null, "Cursor / Claude"),
                        createTextVNode(" \u8FD9\u7C7B\u6D77\u5916\u5DE5\u5177\uFF0C\u65E5\u5E38\u5927\u91CF\u7684\u8865\u5168\u548C\u5355\u6D4B\u7528"),
                        createVNode("strong", null, "\u56FD\u5185\u6309\u91CF\u4ED8\u8D39\u7684 Key"),
                        createTextVNode("\u3002 ")
                      ])
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/coding-plans/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
