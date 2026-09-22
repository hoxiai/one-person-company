import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aM as useLocaleRouter, t as useSettings, y as useFetch, bj as useSeoMeta, bk as useJsonLd, b as _sfc_main$G, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_7 from './HoxiSectionLabel-BlLbr3V0.mjs';
import __nuxt_component_4 from './HoxiTag-BAz_5lMM.mjs';
import { defineComponent, ref, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useHoxiModels } from './useHoxiModels-DpcwauH-.mjs';
import { h as hoxiGateways } from './gateways-tgDca7H5.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
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
    const { updatedAt } = useHoxiModels();
    const activeModelTab = ref("all");
    const modelTabs = [
      { key: "all", label: "\u5168\u90E8" },
      { key: "claude-3-7", label: "Claude 3.7 Sonnet" },
      { key: "deepseek-r1", label: "DeepSeek R1" },
      { key: "qwen-coder", label: "Qwen 2.5 Coder" },
      { key: "gpt-4o", label: "GPT-4o" },
      { key: "claude-3-5", label: "Claude 3.5 Sonnet" }
    ];
    const { data: dbGateways } = useFetch(
      "/api/hoxi/gateways",
      {
        key: "hoxi-db-gateways",
        default: () => null
      },
      "$5JUuTimT7O"
      /* nuxt-injected */
    );
    const effectiveGateways = computed(() => {
      if (dbGateways.value && Array.isArray(dbGateways.value) && dbGateways.value.length > 0) {
        return dbGateways.value;
      }
      try {
        const raw = getSetting("hoxi_gateways_override");
        if (raw && typeof raw === "string") {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed.filter((item) => !item.hidden);
          }
        }
      } catch {
      }
      return hoxiGateways;
    });
    const filteredGateways = computed(() => {
      if (activeModelTab.value === "all") {
        return effectiveGateways.value;
      }
      return effectiveGateways.value.filter(
        (gw) => gw.primaryModelKey === activeModelTab.value || gw.models.some((m) => m.toLowerCase().includes(activeModelTab.value.replace("-", " ")))
      );
    });
    const copiedUrl = ref("");
    const copyBaseUrl = (url) => {
    };
    useSeoMeta({
      title: () => t("hoxi.gateways.seoTitle"),
      description: () => t("hoxi.gateways.seoDescription"),
      ogTitle: () => t("hoxi.gateways.seoTitle"),
      ogDescription: () => t("hoxi.gateways.seoDescription"),
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => t("hoxi.gateways.seoTitle"),
      twitterDescription: () => t("hoxi.gateways.seoDescription"),
      keywords: "AI \u4E2D\u8F6C\u7AD9, API \u4E2D\u8F6C, Cursor Base URL, \u56FD\u5185\u76F4\u8FDE, \u4FBF\u5B9C API"
    });
    useJsonLd("hoxi-gateways-list", computed(() => [
      {
        "@type": "CollectionPage",
        name: t("hoxi.gateways.seoTitle"),
        description: t("hoxi.gateways.seoDescription"),
        url: localePath("/gateways")
      },
      {
        "@type": "ItemList",
        name: "AI \u4E2D\u8F6C\u7AD9\u5BF9\u6BD4",
        numberOfItems: filteredGateways.value.length,
        itemListElement: filteredGateways.value.map((gw, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: gw.name,
          url: localePath(`/gateways/${gw.id}`)
        }))
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "\u600E\u4E48\u5224\u65AD\u4E2D\u8F6C\u7AD9\u6709\u6CA1\u6709\u628A\u6A21\u578B\u6362\u6389\uFF1F",
            acceptedAnswer: {
              "@type": "Answer",
              text: "\u6709\u7684\u4E2D\u8F6C\u7AD9\u6807\u4EF7\u6781\u4F4E\uFF0C\u5B9E\u9645\u628A\u9AD8\u7AEF\u6A21\u578B\u6362\u6210\u4E86\u4FBF\u5B9C\u6A21\u578B\u3002\u53EF\u4EE5\u62FF\u8DE8\u6587\u4EF6\u91CD\u6784\u3001\u590D\u6742\u63A8\u7406\u9898\u8BD5\u4E00\u8BD5\uFF0C\u770B\u8F93\u51FA\u5BF9\u4E0D\u5BF9\u5F97\u4E0A\u3002"
            }
          },
          {
            "@type": "Question",
            name: "\u7ED9\u4E2D\u8F6C\u7AD9\u5145\u503C\u8981\u6CE8\u610F\u4EC0\u4E48\uFF1F",
            acceptedAnswer: {
              "@type": "Answer",
              text: "\u7B2C\u4E09\u65B9\u4E2D\u8F6C\u7AD9\u53D7\u4E0A\u6E38\u98CE\u63A7\u5F71\u54CD\u5927\u3002\u7B2C\u4E00\u6B21\u5148\u5145 \xA510~30\uFF0C\u6D4B\u901A\u5EF6\u8FDF\u548C\u7A33\u5B9A\u6027\uFF0C\u522B\u4E00\u6B21\u5145\u5F88\u591A\u3002"
            }
          },
          {
            "@type": "Question",
            name: "\u4E3A\u4EC0\u4E48\u5199\u4EE3\u7801\u8981\u770B\u9996\u5B57\u5EF6\u8FDF\uFF1F",
            acceptedAnswer: {
              "@type": "Answer",
              text: "IDE \u91CC\u7684\u8865\u5168\u548C\u5BF9\u8BDD\u5BF9\u9996\u5B57\u8FD4\u56DE\u5F88\u654F\u611F\uFF0C\u56FD\u5185\u76F4\u8FDE\u901A\u5E38\u6BD4\u76F4\u8FDE\u6D77\u5916\u660E\u663E\u66F4\u5FEB\u3002"
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
          { "@type": "ListItem", position: 2, name: t("hoxi.gateways.title"), item: localePath("/gateways") }
        ]
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$G;
      const _component_HoxiSectionLabel = __nuxt_component_7;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiTag = __nuxt_component_4;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-16"${_scopeId}><div class="text-center max-w-3xl mx-auto mb-10 md:mb-14"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/60 mb-3 shadow-2xs"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"${_scopeId}></span> \u7701\u94B1\u6307\u5357 </span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.gateways.title"))}</h1><p class="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.gateways.subtitle"))}</p>`);
            if (unref(updatedAt)) {
              _push2(`<div class="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono dark:text-slate-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:clock-clockwise",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.common.updatedAt", { date: unref(updatedAt) }))}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><section class="mt-8"${_scopeId}><div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.home.sections.gateways"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.home.sections.gateways")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><span class="text-xs text-slate-400 dark:text-slate-500"${_scopeId}> \u5171 ${ssrInterpolate(filteredGateways.value.length)} \u4E2A </span></div><div class="mt-6 flex flex-wrap gap-2 text-xs"${_scopeId}><!--[-->`);
            ssrRenderList(modelTabs, (tab) => {
              _push2(`<button type="button" class="${ssrRenderClass([activeModelTab.value === tab.key ? "bg-slate-900 dark:bg-blue-600 text-white shadow-xs" : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600", "rounded-full px-3.5 py-1.5 font-medium transition-all"])}"${_scopeId}>${ssrInterpolate(tab.label)}</button>`);
            });
            _push2(`<!--]--></div><div class="md:hidden mt-4 space-y-3"${_scopeId}><!--[-->`);
            ssrRenderList(filteredGateways.value, (gw, index) => {
              _push2(`<div class="${ssrRenderClass([gw.isSelfOperated ? "border-blue-300/80 dark:border-blue-800/80 bg-blue-50/20 dark:bg-blue-950/20" : "", "rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs"])}"${_scopeId}><div class="flex items-start justify-between gap-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="${ssrRenderClass([index === 0 ? "bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300" : index === 1 ? "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200" : index === 2 ? "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400", "inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold font-mono"])}"${_scopeId}>${ssrInterpolate(index + 1)}</span><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/gateways/${gw.id}`),
                class: "font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 flex items-center gap-1.5 dark:hover:text-blue-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(gw.name)}</span>`);
                    if (gw.badge) {
                      _push3(ssrRenderComponent(_component_HoxiTag, {
                        tone: gw.badgeTone || "neutral"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(gw.badge)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(gw.badge), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(gw.name), 1),
                      gw.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                        key: 0,
                        tone: gw.badgeTone || "neutral"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(gw.badge), 1)
                        ]),
                        _: 2
                      }, 1032, ["tone"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="text-[11px] text-slate-400 font-mono dark:text-slate-500"${_scopeId}>${ssrInterpolate(gw.domain)}</div></div></div><span class="inline-flex items-center rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 shrink-0"${_scopeId}> \u7701 ${ssrInterpolate(gw.savingsPercent)}% </span></div><div class="mt-3 grid grid-cols-3 gap-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-2.5 text-center text-xs font-mono"${_scopeId}><div${_scopeId}><div class="text-[10px] text-slate-400 font-sans dark:text-slate-500"${_scopeId}>\u5EF6\u8FDF</div><div class="${ssrRenderClass([gw.latencyMs < 300 ? "text-emerald-600 dark:text-emerald-400" : "text-blue-600 dark:text-blue-400", "font-bold font-mono mt-0.5"])}"${_scopeId}>${ssrInterpolate(gw.latencyMs)}ms </div></div><div${_scopeId}><div class="text-[10px] text-slate-400 font-sans dark:text-slate-500"${_scopeId}>\u5728\u7EBF\u7387</div><div class="font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(gw.uptime)}</div></div><div${_scopeId}><div class="text-[10px] text-slate-400 font-sans dark:text-slate-500"${_scopeId}>\u8F93\u5165\u5355\u4EF7</div><div class="font-bold text-slate-900 dark:text-white font-mono mt-0.5 text-[11px]"${_scopeId}>${ssrInterpolate(gw.priceLabel)}</div></div></div><div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2"${_scopeId}><button type="button" class="flex-1 rounded-lg border border-slate-200 dark:border-slate-700 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 text-center active:bg-slate-100 dark:active:bg-slate-800"${_scopeId}>${ssrInterpolate(copiedUrl.value === gw.baseUrl ? "\u5DF2\u590D\u5236 \u2713" : "\u590D\u5236 Base URL")}</button>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/gateways/${gw.id}`),
                class: "flex-1 rounded-lg bg-slate-900 dark:bg-blue-600 py-1.5 text-xs font-semibold text-white text-center hover:bg-blue-600 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8BE6\u60C5\u4E0E\u914D\u7F6E `);
                  } else {
                    return [
                      createTextVNode(" \u8BE6\u60C5\u4E0E\u914D\u7F6E ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="hidden md:block mt-6 overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs"${_scopeId}><table class="w-full min-w-[720px] text-left text-xs text-slate-600 dark:text-slate-300"${_scopeId}><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 font-medium text-slate-400 dark:text-slate-500"${_scopeId}><tr${_scopeId}><th class="w-12 px-4 py-3 text-center"${_scopeId}>\u6392\u540D</th><th class="px-4 py-3"${_scopeId}>\u4E2D\u8F6C\u7AD9</th><th class="px-4 py-3"${_scopeId}>\u5EF6\u8FDF</th><th class="px-4 py-3"${_scopeId}>\u5728\u7EBF\u7387</th><th class="px-4 py-3"${_scopeId}>\u8F93\u5165\u5355\u4EF7 (\xA5/M)</th><th class="px-4 py-3"${_scopeId}>\u6BD4\u5B98\u65B9\u4EF7</th><th class="px-4 py-3 hidden sm:table-cell"${_scopeId}>\u652F\u6301\u7684\u6A21\u578B</th><th class="px-4 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(filteredGateways.value, (gw, index) => {
              _push2(`<tr class="${ssrRenderClass([gw.isSelfOperated ? "bg-blue-50/20 dark:bg-blue-950/20" : "", "hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"])}"${_scopeId}><td class="px-4 py-3.5 text-center font-bold font-mono text-slate-400 dark:text-slate-500"${_scopeId}>`);
              if (index === 0) {
                _push2(`<span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-bold"${_scopeId}>1</span>`);
              } else if (index === 1) {
                _push2(`<span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold"${_scopeId}>2</span>`);
              } else if (index === 2) {
                _push2(`<span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 text-xs font-bold"${_scopeId}>3</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
              }
              _push2(`</td><td class="px-4 py-3.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/gateways/${gw.id}`),
                class: "font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="inline-block h-2 w-2 rounded-full bg-emerald-500"${_scopeId2}></span><span${_scopeId2}>${ssrInterpolate(gw.name)}</span>`);
                    if (gw.badge) {
                      _push3(ssrRenderComponent(_component_HoxiTag, {
                        tone: gw.badgeTone || "neutral"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(gw.badge)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(gw.badge), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("span", { class: "inline-block h-2 w-2 rounded-full bg-emerald-500" }),
                      createVNode("span", null, toDisplayString(gw.name), 1),
                      gw.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                        key: 0,
                        tone: gw.badgeTone || "neutral"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(gw.badge), 1)
                        ]),
                        _: 2
                      }, 1032, ["tone"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500 font-mono"${_scopeId}>${ssrInterpolate(gw.domain)} \xB7 ${ssrInterpolate(gw.features[0])}</div></td><td class="px-4 py-3.5 font-medium tabular-nums font-mono"${_scopeId}><span class="${ssrRenderClass(gw.latencyMs < 300 ? "text-emerald-600 dark:text-emerald-400" : gw.latencyMs < 400 ? "text-blue-600 dark:text-blue-400" : "text-amber-600 dark:text-amber-400")}"${_scopeId}>${ssrInterpolate(gw.latencyMs)}ms </span></td><td class="px-4 py-3.5 font-medium tabular-nums text-emerald-600 dark:text-emerald-400 font-mono"${_scopeId}>${ssrInterpolate(gw.uptime)}</td><td class="px-4 py-3.5 font-bold tabular-nums text-slate-900 dark:text-white text-sm font-mono"${_scopeId}>${ssrInterpolate(gw.priceLabel)}</td><td class="px-4 py-3.5 font-medium"${_scopeId}><span class="inline-flex items-center gap-1 rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60"${_scopeId}> \u7701 ${ssrInterpolate(gw.savingsPercent)}% </span></td><td class="px-4 py-3.5 hidden sm:table-cell text-slate-500 dark:text-slate-400"${_scopeId}><div class="flex flex-wrap gap-1 max-w-[220px]"${_scopeId}><!--[-->`);
              ssrRenderList(gw.models.slice(0, 2), (m) => {
                _push2(`<span class="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(m)}</span>`);
              });
              _push2(`<!--]--></div></td><td class="px-4 py-3.5 text-right"${_scopeId}><div class="flex items-center justify-end gap-2"${_scopeId}><button type="button" class="rounded-full border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-slate-400 transition-colors cursor-pointer" title="\u590D\u5236 Base URL \u586B\u5165 Cursor"${_scopeId}>${ssrInterpolate(copiedUrl.value === gw.baseUrl ? "\u5DF2\u590D\u5236 \u2713" : "\u590D\u5236 Base URL")}</button>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/gateways/${gw.id}`),
                class: "rounded-full bg-slate-900 dark:bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8BE6\u60C5\u4E0E\u914D\u7F6E `);
                  } else {
                    return [
                      createTextVNode(" \u8BE6\u60C5\u4E0E\u914D\u7F6E ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></section><section id="setup-guide" class="mt-14 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8"${_scopeId}><div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4"${_scopeId}><div${_scopeId}><h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"${_scopeId}><span${_scopeId}>Cursor / Cline \u63A5\u5165\u914D\u7F6E</span></h3><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u62FF\u5230 API Key \u540E\uFF0C\u628A <strong${_scopeId}>OpenAI Base URL</strong> \u6362\u6210\u4E0B\u9762\u7684\u5730\u5740\u5373\u53EF\u3002\u793A\u4F8B\u7528\u7684\u662F\u6211\u81EA\u5DF1\u7684 AINode\u3002 </p></div></div><div class="mt-6 grid gap-4 md:grid-cols-2"${_scopeId}><div class="rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200"${_scopeId}><div class="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 dark:text-slate-500"${_scopeId}> # Cursor IDE \u914D\u7F6E (Settings -&gt; Models -&gt; OpenAI API Key) </div><p class="text-slate-400 dark:text-slate-500"${_scopeId}>Base URL:</p><p class="text-emerald-400 font-bold"${_scopeId}>https://api.ainode.run/v1</p><p class="mt-2 text-slate-400 dark:text-slate-500"${_scopeId}>API Key:</p><p class="text-blue-400"${_scopeId}>sk-your-ainode-api-key</p><p class="mt-2 text-slate-400 dark:text-slate-500"${_scopeId}>Model Name:</p><p class="text-amber-300"${_scopeId}>\u4EE5 AINode \u540E\u53F0\u7684\u6A21\u578B\u5217\u8868\u4E3A\u51C6</p></div><div class="rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200"${_scopeId}><div class="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 dark:text-slate-500"${_scopeId}> # Cline / Roo Code / Continue \u914D\u7F6E </div><p class="text-slate-400 dark:text-slate-500"${_scopeId}>API Provider:</p><p class="text-blue-400"${_scopeId}>OpenAI Compatible</p><p class="mt-2 text-slate-400 dark:text-slate-500"${_scopeId}>Base URL:</p><p class="text-emerald-400 font-bold"${_scopeId}>https://api.ainode.run/v1</p><p class="mt-2 text-slate-400 dark:text-slate-500"${_scopeId}>Thinking Mode (\u601D\u8003\u6A21\u5F0F):</p><p class="text-emerald-400"${_scopeId}>\u652F\u6301\uFF0C\u8FD4\u56DE reasoning_content</p></div></div></section><section class="mt-14 border-t border-slate-100 dark:border-slate-800 pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u7528\u4E2D\u8F6C\u7AD9\u8981\u6CE8\u610F\u7684\u4E09\u4EF6\u4E8B`);
                } else {
                  return [
                    createTextVNode("\u7528\u4E2D\u8F6C\u7AD9\u8981\u6CE8\u610F\u7684\u4E09\u4EF6\u4E8B")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 grid gap-6 md:grid-cols-3"${_scopeId}><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h4 class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}> 1. \u592A\u4FBF\u5B9C\u7684\u8981\u5F53\u5FC3 </h4><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}> \u6709\u7684\u4E2D\u8F6C\u7AD9\u6807\u4EF7\u6781\u4F4E\uFF0C\u5B9E\u9645\u628A\u9AD8\u7AEF\u6A21\u578B\u6362\u6210\u4E86\u4FBF\u5B9C\u6A21\u578B\u3002\u53EF\u4EE5\u62FF\u8DE8\u6587\u4EF6\u91CD\u6784\u3001\u590D\u6742\u63A8\u7406\u9898\u8BD5\u4E00\u8BD5\uFF0C\u770B\u8F93\u51FA\u5BF9\u4E0D\u5BF9\u5F97\u4E0A\u3002 </p></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h4 class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}> 2. \u5C0F\u989D\u5145\u503C </h4><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}> \u7B2C\u4E09\u65B9\u4E2D\u8F6C\u7AD9\u53D7\u4E0A\u6E38\u98CE\u63A7\u5F71\u54CD\u5927\u3002\u7B2C\u4E00\u6B21\u5148\u5145 \xA510~30\uFF0C\u6D4B\u901A\u5EF6\u8FDF\u548C\u7A33\u5B9A\u6027\uFF0C\u522B\u4E00\u6B21\u5145\u5F88\u591A\u3002 </p></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h4 class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}> 3. \u5199\u4EE3\u7801\u770B\u9996\u5B57\u5EF6\u8FDF </h4><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}> IDE \u91CC\u7684\u8865\u5168\u548C\u5BF9\u8BDD\u5BF9\u9996\u5B57\u8FD4\u56DE\u5F88\u654F\u611F\uFF0C\u56FD\u5185\u76F4\u8FDE\u901A\u5E38\u6BD4\u76F4\u8FDE\u6D77\u5916\u660E\u663E\u66F4\u5FEB\u3002 </p></div></div></section><section class="mt-14 border-t border-slate-100 dark:border-slate-800 pt-10"${_scopeId}><div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/coding-plans"),
              class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><span class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId2}>\u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u5B98\u65B9\u8BA2\u9605\u548C\u56FD\u5185\u5957\u9910\u7684\u4EF7\u683C\u4E0E\u989D\u5EA6 </p>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                      })
                    ]),
                    createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u5B98\u65B9\u8BA2\u9605\u548C\u56FD\u5185\u5957\u9910\u7684\u4EF7\u683C\u4E0E\u989D\u5EA6 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/models"),
              class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><span class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId2}>\u6A21\u578B\u4EF7\u683C</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u5B98\u65B9\u6807\u4EF7\u3001\u6DF7\u5408\u4EF7\u548C\u4E0A\u4E0B\u6587\u957F\u5EA6 </p>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u6A21\u578B\u4EF7\u683C"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                      })
                    ]),
                    createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u5B98\u65B9\u6807\u4EF7\u3001\u6DF7\u5408\u4EF7\u548C\u4E0A\u4E0B\u6587\u957F\u5EA6 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/compare"),
              class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block sm:col-span-2 md:col-span-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><span class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId2}>\u6A21\u578B\u5BF9\u6BD4</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u9009\u4E24\u5230\u56DB\u4E2A\u6A21\u578B\u5E76\u6392\u6BD4\u8F83 </p>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u6A21\u578B\u5BF9\u6BD4"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                      })
                    ]),
                    createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u9009\u4E24\u5230\u56DB\u4E2A\u6A21\u578B\u5E76\u6392\u6BD4\u8F83 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-16" }, [
                createVNode("div", { class: "text-center max-w-3xl mx-auto mb-10 md:mb-14" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/60 mb-3 shadow-2xs" }, [
                    createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                    createTextVNode(" \u7701\u94B1\u6307\u5357 ")
                  ]),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.gateways.title")), 1),
                  createVNode("p", { class: "mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.gateways.subtitle")), 1),
                  unref(updatedAt) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono dark:text-slate-500"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:clock-clockwise",
                      class: "w-3.5 h-3.5"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.common.updatedAt", { date: unref(updatedAt) })), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("section", { class: "mt-8" }, [
                  createVNode("div", { class: "flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4" }, [
                    createVNode("div", null, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.home.sections.gateways")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("span", { class: "text-xs text-slate-400 dark:text-slate-500" }, " \u5171 " + toDisplayString(filteredGateways.value.length) + " \u4E2A ", 1)
                  ]),
                  createVNode("div", { class: "mt-6 flex flex-wrap gap-2 text-xs" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(modelTabs, (tab) => {
                      return createVNode("button", {
                        key: tab.key,
                        type: "button",
                        class: ["rounded-full px-3.5 py-1.5 font-medium transition-all", activeModelTab.value === tab.key ? "bg-slate-900 dark:bg-blue-600 text-white shadow-xs" : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600"],
                        onClick: ($event) => activeModelTab.value = tab.key
                      }, toDisplayString(tab.label), 11, ["onClick"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "md:hidden mt-4 space-y-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredGateways.value, (gw, index) => {
                      return openBlock(), createBlock("div", {
                        key: gw.id,
                        class: ["rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs", gw.isSelfOperated ? "border-blue-300/80 dark:border-blue-800/80 bg-blue-50/20 dark:bg-blue-950/20" : ""]
                      }, [
                        createVNode("div", { class: "flex items-start justify-between gap-2" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", {
                              class: ["inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold font-mono", index === 0 ? "bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300" : index === 1 ? "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200" : index === 2 ? "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"]
                            }, toDisplayString(index + 1), 3),
                            createVNode("div", null, [
                              createVNode(_component_NuxtLink, {
                                to: unref(localePath)(`/gateways/${gw.id}`),
                                class: "font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 flex items-center gap-1.5 dark:hover:text-blue-400"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(gw.name), 1),
                                  gw.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                                    key: 0,
                                    tone: gw.badgeTone || "neutral"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(gw.badge), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["tone"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              createVNode("div", { class: "text-[11px] text-slate-400 font-mono dark:text-slate-500" }, toDisplayString(gw.domain), 1)
                            ])
                          ]),
                          createVNode("span", { class: "inline-flex items-center rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 shrink-0" }, " \u7701 " + toDisplayString(gw.savingsPercent) + "% ", 1)
                        ]),
                        createVNode("div", { class: "mt-3 grid grid-cols-3 gap-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 p-2.5 text-center text-xs font-mono" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[10px] text-slate-400 font-sans dark:text-slate-500" }, "\u5EF6\u8FDF"),
                            createVNode("div", {
                              class: ["font-bold font-mono mt-0.5", gw.latencyMs < 300 ? "text-emerald-600 dark:text-emerald-400" : "text-blue-600 dark:text-blue-400"]
                            }, toDisplayString(gw.latencyMs) + "ms ", 3)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[10px] text-slate-400 font-sans dark:text-slate-500" }, "\u5728\u7EBF\u7387"),
                            createVNode("div", { class: "font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5" }, toDisplayString(gw.uptime), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-[10px] text-slate-400 font-sans dark:text-slate-500" }, "\u8F93\u5165\u5355\u4EF7"),
                            createVNode("div", { class: "font-bold text-slate-900 dark:text-white font-mono mt-0.5 text-[11px]" }, toDisplayString(gw.priceLabel), 1)
                          ])
                        ]),
                        createVNode("div", { class: "mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2" }, [
                          createVNode("button", {
                            type: "button",
                            class: "flex-1 rounded-lg border border-slate-200 dark:border-slate-700 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 text-center active:bg-slate-100 dark:active:bg-slate-800",
                            onClick: ($event) => copyBaseUrl(gw.baseUrl)
                          }, toDisplayString(copiedUrl.value === gw.baseUrl ? "\u5DF2\u590D\u5236 \u2713" : "\u590D\u5236 Base URL"), 9, ["onClick"]),
                          createVNode(_component_NuxtLink, {
                            to: unref(localePath)(`/gateways/${gw.id}`),
                            class: "flex-1 rounded-lg bg-slate-900 dark:bg-blue-600 py-1.5 text-xs font-semibold text-white text-center hover:bg-blue-600 transition-colors"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8BE6\u60C5\u4E0E\u914D\u7F6E ")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])
                      ], 2);
                    }), 128))
                  ]),
                  createVNode("div", { class: "hidden md:block mt-6 overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs" }, [
                    createVNode("table", { class: "w-full min-w-[720px] text-left text-xs text-slate-600 dark:text-slate-300" }, [
                      createVNode("thead", { class: "border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 font-medium text-slate-400 dark:text-slate-500" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "w-12 px-4 py-3 text-center" }, "\u6392\u540D"),
                          createVNode("th", { class: "px-4 py-3" }, "\u4E2D\u8F6C\u7AD9"),
                          createVNode("th", { class: "px-4 py-3" }, "\u5EF6\u8FDF"),
                          createVNode("th", { class: "px-4 py-3" }, "\u5728\u7EBF\u7387"),
                          createVNode("th", { class: "px-4 py-3" }, "\u8F93\u5165\u5355\u4EF7 (\xA5/M)"),
                          createVNode("th", { class: "px-4 py-3" }, "\u6BD4\u5B98\u65B9\u4EF7"),
                          createVNode("th", { class: "px-4 py-3 hidden sm:table-cell" }, "\u652F\u6301\u7684\u6A21\u578B"),
                          createVNode("th", { class: "px-4 py-3 text-right" }, "\u64CD\u4F5C")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredGateways.value, (gw, index) => {
                          return openBlock(), createBlock("tr", {
                            key: gw.id,
                            class: ["hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors", gw.isSelfOperated ? "bg-blue-50/20 dark:bg-blue-950/20" : ""]
                          }, [
                            createVNode("td", { class: "px-4 py-3.5 text-center font-bold font-mono text-slate-400 dark:text-slate-500" }, [
                              index === 0 ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-bold"
                              }, "1")) : index === 1 ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold"
                              }, "2")) : index === 2 ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 text-xs font-bold"
                              }, "3")) : (openBlock(), createBlock("span", { key: 3 }, toDisplayString(index + 1), 1))
                            ]),
                            createVNode("td", { class: "px-4 py-3.5" }, [
                              createVNode(_component_NuxtLink, {
                                to: unref(localePath)(`/gateways/${gw.id}`),
                                class: "font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "inline-block h-2 w-2 rounded-full bg-emerald-500" }),
                                  createVNode("span", null, toDisplayString(gw.name), 1),
                                  gw.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                                    key: 0,
                                    tone: gw.badgeTone || "neutral"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(gw.badge), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["tone"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              createVNode("div", { class: "mt-0.5 text-[11px] text-slate-400 dark:text-slate-500 font-mono" }, toDisplayString(gw.domain) + " \xB7 " + toDisplayString(gw.features[0]), 1)
                            ]),
                            createVNode("td", { class: "px-4 py-3.5 font-medium tabular-nums font-mono" }, [
                              createVNode("span", {
                                class: gw.latencyMs < 300 ? "text-emerald-600 dark:text-emerald-400" : gw.latencyMs < 400 ? "text-blue-600 dark:text-blue-400" : "text-amber-600 dark:text-amber-400"
                              }, toDisplayString(gw.latencyMs) + "ms ", 3)
                            ]),
                            createVNode("td", { class: "px-4 py-3.5 font-medium tabular-nums text-emerald-600 dark:text-emerald-400 font-mono" }, toDisplayString(gw.uptime), 1),
                            createVNode("td", { class: "px-4 py-3.5 font-bold tabular-nums text-slate-900 dark:text-white text-sm font-mono" }, toDisplayString(gw.priceLabel), 1),
                            createVNode("td", { class: "px-4 py-3.5 font-medium" }, [
                              createVNode("span", { class: "inline-flex items-center gap-1 rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60" }, " \u7701 " + toDisplayString(gw.savingsPercent) + "% ", 1)
                            ]),
                            createVNode("td", { class: "px-4 py-3.5 hidden sm:table-cell text-slate-500 dark:text-slate-400" }, [
                              createVNode("div", { class: "flex flex-wrap gap-1 max-w-[220px]" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(gw.models.slice(0, 2), (m) => {
                                  return openBlock(), createBlock("span", {
                                    key: m,
                                    class: "rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-600 dark:text-slate-300"
                                  }, toDisplayString(m), 1);
                                }), 128))
                              ])
                            ]),
                            createVNode("td", { class: "px-4 py-3.5 text-right" }, [
                              createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "rounded-full border border-slate-200 dark:border-slate-700 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-slate-400 transition-colors cursor-pointer",
                                  title: "\u590D\u5236 Base URL \u586B\u5165 Cursor",
                                  onClick: ($event) => copyBaseUrl(gw.baseUrl)
                                }, toDisplayString(copiedUrl.value === gw.baseUrl ? "\u5DF2\u590D\u5236 \u2713" : "\u590D\u5236 Base URL"), 9, ["onClick"]),
                                createVNode(_component_NuxtLink, {
                                  to: unref(localePath)(`/gateways/${gw.id}`),
                                  class: "rounded-full bg-slate-900 dark:bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u8BE6\u60C5\u4E0E\u914D\u7F6E ")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ])
                            ])
                          ], 2);
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                createVNode("section", {
                  id: "setup-guide",
                  class: "mt-14 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8"
                }, [
                  createVNode("div", { class: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2" }, [
                        createVNode("span", null, "Cursor / Cline \u63A5\u5165\u914D\u7F6E")
                      ]),
                      createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, [
                        createTextVNode(" \u62FF\u5230 API Key \u540E\uFF0C\u628A "),
                        createVNode("strong", null, "OpenAI Base URL"),
                        createTextVNode(" \u6362\u6210\u4E0B\u9762\u7684\u5730\u5740\u5373\u53EF\u3002\u793A\u4F8B\u7528\u7684\u662F\u6211\u81EA\u5DF1\u7684 AINode\u3002 ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-4 md:grid-cols-2" }, [
                    createVNode("div", { class: "rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200" }, [
                      createVNode("div", { class: "text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 dark:text-slate-500" }, " # Cursor IDE \u914D\u7F6E (Settings -> Models -> OpenAI API Key) "),
                      createVNode("p", { class: "text-slate-400 dark:text-slate-500" }, "Base URL:"),
                      createVNode("p", { class: "text-emerald-400 font-bold" }, "https://api.ainode.run/v1"),
                      createVNode("p", { class: "mt-2 text-slate-400 dark:text-slate-500" }, "API Key:"),
                      createVNode("p", { class: "text-blue-400" }, "sk-your-ainode-api-key"),
                      createVNode("p", { class: "mt-2 text-slate-400 dark:text-slate-500" }, "Model Name:"),
                      createVNode("p", { class: "text-amber-300" }, "\u4EE5 AINode \u540E\u53F0\u7684\u6A21\u578B\u5217\u8868\u4E3A\u51C6")
                    ]),
                    createVNode("div", { class: "rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200" }, [
                      createVNode("div", { class: "text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3 dark:text-slate-500" }, " # Cline / Roo Code / Continue \u914D\u7F6E "),
                      createVNode("p", { class: "text-slate-400 dark:text-slate-500" }, "API Provider:"),
                      createVNode("p", { class: "text-blue-400" }, "OpenAI Compatible"),
                      createVNode("p", { class: "mt-2 text-slate-400 dark:text-slate-500" }, "Base URL:"),
                      createVNode("p", { class: "text-emerald-400 font-bold" }, "https://api.ainode.run/v1"),
                      createVNode("p", { class: "mt-2 text-slate-400 dark:text-slate-500" }, "Thinking Mode (\u601D\u8003\u6A21\u5F0F):"),
                      createVNode("p", { class: "text-emerald-400" }, "\u652F\u6301\uFF0C\u8FD4\u56DE reasoning_content")
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-14 border-t border-slate-100 dark:border-slate-800 pt-10" }, [
                  createVNode(_component_HoxiSectionLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("\u7528\u4E2D\u8F6C\u7AD9\u8981\u6CE8\u610F\u7684\u4E09\u4EF6\u4E8B")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-6 grid gap-6 md:grid-cols-3" }, [
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h4", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, " 1. \u592A\u4FBF\u5B9C\u7684\u8981\u5F53\u5FC3 "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, " \u6709\u7684\u4E2D\u8F6C\u7AD9\u6807\u4EF7\u6781\u4F4E\uFF0C\u5B9E\u9645\u628A\u9AD8\u7AEF\u6A21\u578B\u6362\u6210\u4E86\u4FBF\u5B9C\u6A21\u578B\u3002\u53EF\u4EE5\u62FF\u8DE8\u6587\u4EF6\u91CD\u6784\u3001\u590D\u6742\u63A8\u7406\u9898\u8BD5\u4E00\u8BD5\uFF0C\u770B\u8F93\u51FA\u5BF9\u4E0D\u5BF9\u5F97\u4E0A\u3002 ")
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h4", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, " 2. \u5C0F\u989D\u5145\u503C "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, " \u7B2C\u4E09\u65B9\u4E2D\u8F6C\u7AD9\u53D7\u4E0A\u6E38\u98CE\u63A7\u5F71\u54CD\u5927\u3002\u7B2C\u4E00\u6B21\u5148\u5145 \xA510~30\uFF0C\u6D4B\u901A\u5EF6\u8FDF\u548C\u7A33\u5B9A\u6027\uFF0C\u522B\u4E00\u6B21\u5145\u5F88\u591A\u3002 ")
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h4", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, " 3. \u5199\u4EE3\u7801\u770B\u9996\u5B57\u5EF6\u8FDF "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, " IDE \u91CC\u7684\u8865\u5168\u548C\u5BF9\u8BDD\u5BF9\u9996\u5B57\u8FD4\u56DE\u5F88\u654F\u611F\uFF0C\u56FD\u5185\u76F4\u8FDE\u901A\u5E38\u6BD4\u76F4\u8FDE\u6D77\u5916\u660E\u663E\u66F4\u5FEB\u3002 ")
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-14 border-t border-slate-100 dark:border-slate-800 pt-10" }, [
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-2 md:grid-cols-3" }, [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/coding-plans"),
                      class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                          })
                        ]),
                        createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u5B98\u65B9\u8BA2\u9605\u548C\u56FD\u5185\u5957\u9910\u7684\u4EF7\u683C\u4E0E\u989D\u5EA6 ")
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/models"),
                      class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u6A21\u578B\u4EF7\u683C"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                          })
                        ]),
                        createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u5B98\u65B9\u6807\u4EF7\u3001\u6DF7\u5408\u4EF7\u548C\u4E0A\u4E0B\u6587\u957F\u5EA6 ")
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/compare"),
                      class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block sm:col-span-2 md:col-span-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u6A21\u578B\u5BF9\u6BD4"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all dark:text-slate-500"
                          })
                        ]),
                        createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u9009\u4E24\u5230\u56DB\u4E2A\u6A21\u578B\u5E76\u6392\u6BD4\u8F83 ")
                      ]),
                      _: 1
                    }, 8, ["to"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/gateways/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
