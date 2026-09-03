import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aL as useLocaleRouter, t as useSettings, y as useFetch, bi as useSeoMeta, bj as useJsonLd, b as _sfc_main$E, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_7 from './HoxiSectionLabel-8WOuY8L8.mjs';
import __nuxt_component_5 from './HoxiTag-siFn4kRf.mjs';
import __nuxt_component_5$1 from './HoxiSpeedTester-BuP0SWPl.mjs';
import __nuxt_component_6 from './HoxiCostCalculator-0yBYXexB.mjs';
import { defineComponent, ref, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useHoxiModels } from './useHoxiModels-D3S6mr-U.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
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
      { key: "all", label: "\u26A1 \u5168\u90E8\u7EFC\u5408\u5929\u68AF" },
      { key: "claude-3-7", label: "\u{1F525} Claude 3.7 Sonnet (\u65B0\u65D7\u8230/\u770187%)" },
      { key: "deepseek-r1", label: "\u{1F916} DeepSeek R1 (\u6EE1\u8840\u4EE3\u7801/\u770186%)" },
      { key: "qwen-coder", label: "\u26A1 Qwen 2.5 Coder (\u767D\u83DC\u4EF7/\u770188%)" },
      { key: "gpt-4o", label: "\u{1F9E0} GPT-4o (\u5168\u80FD\u738B/\u770180%)" },
      { key: "claude-3-5", label: "\u{1F48E} Claude 3.5 Sonnet (\u7ECF\u5178\u4E3B\u529B/\u770190%)" }
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
      keywords: "AI\u4E2D\u8F6C\u7AD9, API\u4E2D\u8F6C, Cursor Base URL, Claude 3.7\u4E2D\u8F6C, DeepSeek\u4E13\u7EBF, \u4FBF\u5B9CAPI, \u56FD\u5185\u76F4\u8FDE\u4E2D\u8F6C, \u6EE1\u8840\u601D\u8003\u6A21\u5F0F, \u6D4B\u901F\u5929\u68AF"
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
        name: "AI \u4E2D\u8F6C\u7AD9\u5B9E\u6D4B\u5929\u68AF\u699C",
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
            name: "\u5982\u4F55\u9274\u522B AI \u4E2D\u8F6C\u7AD9\u662F\u5426\u5B58\u5728\u63BA\u6C34\u6216\u964D\u667A\u884C\u4E3A\uFF1F",
            acceptedAnswer: {
              "@type": "Answer",
              text: "\u90E8\u5206\u4E0D\u826F\u4E2D\u8F6C\u7AD9\u4F1A\u5C06\u9AD8\u9636\u6A21\u578B\uFF08\u5982 Claude 3.7 / GPT-4o\uFF09\u5728\u540E\u53F0\u9759\u9ED8\u964D\u667A\u66FF\u6362\u4E3A\u5F00\u6E90\u5C0F\u6A21\u578B\u3002\u6D4B\u8BD5\u65F6\u53EF\u901A\u8FC7\u957F\u4E0A\u4E0B\u6587\u591A\u6587\u4EF6\u4EE3\u7801\u91CD\u6784\u3001\u6781\u7AEF\u6570\u5B66\u63A8\u5BFC\u4E0E\u590D\u6742 reasoning \u601D\u8003\u94FE\u8F93\u51FA\u7279\u5F81\u8FDB\u884C\u4E25\u683C\u6821\u9A8C\u3002"
            }
          },
          {
            "@type": "Question",
            name: "\u4F7F\u7528\u7B2C\u4E09\u65B9 AI \u4E2D\u8F6C\u7AD9\u5145\u503C\u6709\u4EC0\u4E48\u907F\u5751\u5EFA\u8BAE\uFF1F",
            acceptedAnswer: {
              "@type": "Answer",
              text: "\u7B2C\u4E09\u65B9\u4E2D\u8F6C\u7AD9\u53D7\u4E0A\u6E38\u98CE\u63A7\u6CE2\u52A8\u5F71\u54CD\u8F83\u5927\uFF0C\u5EFA\u8BAE\u575A\u6301\u300C\u5C0F\u989D\u5145\u503C \xB7 \u968F\u7528\u968F\u5145\u300D\uFF0C\u9996\u6B21\u5145\u503C \xA510~\xA530 \u8DD1\u901A\u5EF6\u8FDF\u4E0E\u8FDE\u901A\u6027\u6D4B\u8BD5\uFF0C\u5207\u5FCC\u4E00\u6B21\u6027\u5927\u989D\u5145\u503C\u3002"
            }
          },
          {
            "@type": "Question",
            name: "\u4E3A\u4EC0\u4E48\u9996\u5B57\u5EF6\u8FDF (TTFT) \u5BF9 IDE \u8F85\u52A9\u5199\u4EE3\u7801\u81F3\u5173\u91CD\u8981\uFF1F",
            acceptedAnswer: {
              "@type": "Answer",
              text: "\u5728 Cursor\u3001VS Code \u7B49 IDE \u5185\u5199\u4EE3\u7801\u65F6\uFF0C\u9996\u5B57\u54CD\u5E94\u65F6\u95F4\u76F4\u63A5\u51B3\u5B9A\u4E86\u4EE3\u7801\u8865\u5168\u662F\u5426\u5361\u987F\u3002\u56FD\u5185\u4E13\u7EBF\uFF08<300ms\uFF09\u80FD\u63D0\u4F9B\u5AB2\u7F8E\u672C\u5730\u8FD0\u884C\u7684\u4E1D\u6ED1\u4F53\u9A8C\uFF0C\u800C\u672A\u7ECF\u4F18\u5316\u7684\u6D77\u5916\u88F8\u8FDE\uFF081500ms+\uFF09\u4F1A\u6709\u660E\u663E\u7684\u7B49\u5F85\u505C\u987F\u611F\u3002"
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
      const _component_UIcon = _sfc_main$E;
      const _component_HoxiSectionLabel = __nuxt_component_7;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiTag = __nuxt_component_5;
      const _component_HoxiSpeedTester = __nuxt_component_5$1;
      const _component_HoxiCostCalculator = __nuxt_component_6;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-16"${_scopeId}><div class="text-center max-w-3xl mx-auto mb-10 md:mb-14"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/60 mb-3 shadow-2xs"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"${_scopeId}></span> \u5B9E\u6D4B\u4E13\u7EBF \xB7 \u964D\u672C 85%+ </span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.gateways.title"))}</h1><p class="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.gateways.subtitle"))}</p>`);
            if (unref(updatedAt)) {
              _push2(`<div class="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono"${_scopeId}>`);
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
            _push2(`<p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u57FA\u4E8E\u771F\u5B9E API \u63A2\u6D4B\u4E0E\u5B9E\u6D4B\u8D26\u5355\uFF0C\u5BF9\u6BD4\u5404\u5927 AI \u4E2D\u8F6C\u7AD9\u7684\u5728\u7EBF\u7387\u3001\u5B9E\u6D4B\u5EF6\u8FDF\u3001\u6BCF\u767E\u4E07 Token \u5355\u4EF7\u4E0E\u7701\u94B1\u5E45\u5EA6 </p></div><span class="text-xs text-slate-400"${_scopeId}> \u5171\u6536\u5F55 ${ssrInterpolate(filteredGateways.value.length)} \u4E2A\u5B9E\u6D4B\u4E13\u7EBF\u8282\u70B9 </span></div><div class="mt-6 flex flex-wrap gap-2 text-xs"${_scopeId}><!--[-->`);
            ssrRenderList(modelTabs, (tab) => {
              _push2(`<button type="button" class="${ssrRenderClass([activeModelTab.value === tab.key ? "bg-slate-900 dark:bg-blue-600 text-white shadow-xs" : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600", "rounded-full px-3.5 py-1.5 font-medium transition-all"])}"${_scopeId}>${ssrInterpolate(tab.label)}</button>`);
            });
            _push2(`<!--]--></div><div class="mt-6 overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs"${_scopeId}><table class="w-full text-left text-xs text-slate-600 dark:text-slate-300"${_scopeId}><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 font-medium text-slate-400 dark:text-slate-500"${_scopeId}><tr${_scopeId}><th class="w-12 px-4 py-3 text-center"${_scopeId}>\u6392\u540D</th><th class="px-4 py-3"${_scopeId}>\u4E2D\u8F6C\u7AD9\u70B9 / \u57DF\u540D</th><th class="px-4 py-3"${_scopeId}>\u5B9E\u6D4B\u5EF6\u8FDF</th><th class="px-4 py-3"${_scopeId}>\u5728\u7EBF\u7387</th><th class="px-4 py-3"${_scopeId}>\u8F93\u5165\u5355\u4EF7 (\xA5/M)</th><th class="px-4 py-3"${_scopeId}>\u76F8\u5BF9\u5B98\u65B9\u964D\u8D39</th><th class="px-4 py-3 hidden sm:table-cell"${_scopeId}>\u6838\u5FC3\u652F\u6301\u6A21\u578B</th><th class="px-4 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(filteredGateways.value, (gw, index) => {
              _push2(`<tr class="${ssrRenderClass([gw.isSelfOperated ? "bg-blue-50/20 dark:bg-blue-950/20" : "", "hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"])}"${_scopeId}><td class="px-4 py-3.5 text-center font-bold font-mono text-slate-400"${_scopeId}>`);
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
              _push2(`<div class="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500 font-mono"${_scopeId}>${ssrInterpolate(gw.domain)} \xB7 ${ssrInterpolate(gw.features[0])}</div></td><td class="px-4 py-3.5 font-medium tabular-nums font-mono"${_scopeId}><span class="${ssrRenderClass(gw.latencyMs < 300 ? "text-emerald-600 dark:text-emerald-400" : gw.latencyMs < 400 ? "text-blue-600 dark:text-blue-400" : "text-amber-600 dark:text-amber-400")}"${_scopeId}>${ssrInterpolate(gw.latencyMs)}ms </span></td><td class="px-4 py-3.5 font-medium tabular-nums text-emerald-600 dark:text-emerald-400 font-mono"${_scopeId}>${ssrInterpolate(gw.uptime)}</td><td class="px-4 py-3.5 font-bold tabular-nums text-slate-900 dark:text-white text-sm font-mono"${_scopeId}>${ssrInterpolate(gw.priceLabel)}</td><td class="px-4 py-3.5 font-medium"${_scopeId}><span class="inline-flex items-center gap-1 rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60"${_scopeId}> \u76F4\u964D ${ssrInterpolate(gw.savingsPercent)}% </span></td><td class="px-4 py-3.5 hidden sm:table-cell text-slate-500 dark:text-slate-400"${_scopeId}><div class="flex flex-wrap gap-1 max-w-[220px]"${_scopeId}><!--[-->`);
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
            _push2(`<!--]--></tbody></table></div></section><section class="mt-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSpeedTester, null, null, _parent2, _scopeId));
            _push2(`</section><section class="mt-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiCostCalculator, null, null, _parent2, _scopeId));
            _push2(`</section><section id="setup-guide" class="mt-14 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8"${_scopeId}><div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4"${_scopeId}><div${_scopeId}><h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"${_scopeId}><span${_scopeId}>\u{1F6E0}\uFE0F</span><span${_scopeId}>Cursor / VS Code / Cline 1 \u5206\u949F\u63A5\u5165\u914D\u7F6E</span></h3><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u83B7\u53D6 API Key \u540E\uFF0C\u76F4\u63A5\u5C06 <strong${_scopeId}>OpenAI Base URL</strong> \u586B\u5165 IDE \u8BBE\u7F6E\u5373\u53EF\u4E1D\u6ED1\u5199\u4EE3\u7801\uFF0C\u96F6\u9B54\u6CD5\u95E8\u69DB </p></div></div><div class="mt-6 grid gap-4 md:grid-cols-2"${_scopeId}><div class="rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200"${_scopeId}><div class="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3"${_scopeId}> # Cursor IDE \u914D\u7F6E (Settings -&gt; Models -&gt; OpenAI API Key) </div><p class="text-slate-400"${_scopeId}>Base URL:</p><p class="text-emerald-400 font-bold"${_scopeId}>https://api.ainode.run/v1</p><p class="mt-2 text-slate-400"${_scopeId}>API Key:</p><p class="text-blue-400"${_scopeId}>sk-your-ainode-api-key</p><p class="mt-2 text-slate-400"${_scopeId}>Model Name:</p><p class="text-amber-300"${_scopeId}>claude-3-7-sonnet / deepseek-r1</p></div><div class="rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200"${_scopeId}><div class="text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3"${_scopeId}> # Cline / Roo Code / Continue \u914D\u7F6E </div><p class="text-slate-400"${_scopeId}>API Provider:</p><p class="text-blue-400"${_scopeId}>OpenAI Compatible</p><p class="mt-2 text-slate-400"${_scopeId}>Base URL:</p><p class="text-emerald-400 font-bold"${_scopeId}>https://api.ainode.run/v1</p><p class="mt-2 text-slate-400"${_scopeId}>Thinking Mode (\u601D\u8003\u6A21\u5F0F):</p><p class="text-emerald-400"${_scopeId}>100% \u6EE1\u8840\u539F\u751F\u652F\u6301 (\u652F\u6301 reasoning_content)</p></div></div></section><section class="mt-14 border-t border-slate-100 dark:border-slate-800 pt-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`AI \u4E2D\u8F6C\u7AD9\u5B9E\u6218\u907F\u5751\u4E0E\u771F\u4F2A\u9274\u522B\u539F\u5219`);
                } else {
                  return [
                    createTextVNode("AI \u4E2D\u8F6C\u7AD9\u5B9E\u6218\u907F\u5751\u4E0E\u771F\u4F2A\u9274\u522B\u539F\u5219")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 grid gap-6 md:grid-cols-3"${_scopeId}><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h4 class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}> 1. \u8B66\u60D5\u6781\u7AEF\u5EC9\u4EF7\u7684\u300C\u63BA\u6C34 / \u5047\u6A21\u578B\u300D </h4><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}> \u90E8\u5206\u4E2D\u8F6C\u7AD9\u6807\u4EF7\u51E0\u5206\u94B1\uFF0C\u5B9E\u9645\u540E\u53F0\u5C06 Claude 3.7 \u964D\u667A\u66FF\u6362\u4E3A Haiku \u751A\u81F3\u5F00\u6E90\u5C0F\u6A21\u578B\u3002\u6D4B\u8BD5\u65F6\u53EF\u7528\u590D\u6742\u7684\u8DE8\u6587\u4EF6\u91CD\u6784\u4E0E\u6781\u7AEF\u6570\u5B66\u9898\u6821\u9A8C\u8F93\u51FA\u7279\u5F81\u3002 </p></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h4 class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}> 2. \u575A\u6301\u300C\u5C0F\u989D\u5145\u503C \xB7 \u968F\u7528\u968F\u5145\u300D </h4><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}> \u7B2C\u4E09\u65B9\u4E2D\u8F6C\u7AD9\u53D7\u4E0A\u6E38\u5B98\u65B9\u98CE\u63A7\u5F71\u54CD\u8F83\u5927\u3002\u5F3A\u70C8\u5EFA\u8BAE\u9996\u6B21\u5145\u503C \xA510~\xA530 \u8FDB\u884C\u8FDE\u901A\u6027\u548C\u5EF6\u8FDF\u9A8C\u8BC1\uFF0C\u5207\u5FCC\u4E00\u6B21\u6027\u5927\u989D\u5145\u503C\u6570\u767E\u5143\u4EE5\u9632\u8DD1\u8DEF\u3002 </p></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5"${_scopeId}><h4 class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}> 3. \u9996\u5B57\u5EF6\u8FDF (TTFT) \u5BF9 IDE \u5199\u4EE3\u7801\u81F3\u5173\u91CD\u8981 </h4><p class="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}> IDE \u5185\u4EE3\u7801\u8865\u5168\u548C\u5B9E\u65F6\u5BF9\u8BDD\u5BF9\u9996\u5B57\u8FD4\u56DE\u6781\u4E3A\u654F\u611F\u3002\u56FD\u5185\u4E13\u7EBF\uFF08&lt;300ms\uFF09\u80FD\u5E26\u6765\u5982\u540C\u672C\u5730\u8FD0\u884C\u822C\u7684\u4E1D\u6ED1\u4F53\u9A8C\uFF0C\u800C\u6D77\u5916\u88F8\u8FDE\uFF081500ms+\uFF09\u5219\u4F1A\u6709\u660E\u663E\u5361\u987F\u611F\u3002 </p></div></div></section><section class="mt-14 border-t border-slate-100 dark:border-slate-800 pt-10"${_scopeId}><div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/coding-plans"),
              class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><span class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId2}>\u{1F4B3} AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> Cursor Pro\u3001Claude \u5B98\u65B9\u8BA2\u9605\u4E0E\u963F\u91CC\u4E91\u767E\u70BC\u5957\u9910\u6DF1\u5EA6\u6A2A\u5411\u6BD4\u5BF9 </p>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u{1F4B3} AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                      })
                    ]),
                    createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " Cursor Pro\u3001Claude \u5B98\u65B9\u8BA2\u9605\u4E0E\u963F\u91CC\u4E91\u767E\u70BC\u5957\u9910\u6DF1\u5EA6\u6A2A\u5411\u6BD4\u5BF9 ")
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><span class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId2}>\u{1F4CA} \u5B98\u65B9\u6A21\u578B\u4EF7\u683C\u5E93</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u6536\u5F55 20+ \u5B98\u65B9\u6A21\u578B\u520A\u4F8B\u4EF7\u3001\u6BCF\u767E\u4E07 Token \u6DF7\u5408\u6210\u672C\u4E0E\u4E0A\u4E0B\u6587\u89C4\u683C </p>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u{1F4CA} \u5B98\u65B9\u6A21\u578B\u4EF7\u683C\u5E93"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                      })
                    ]),
                    createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u6536\u5F55 20+ \u5B98\u65B9\u6A21\u578B\u520A\u4F8B\u4EF7\u3001\u6BCF\u767E\u4E07 Token \u6DF7\u5408\u6210\u672C\u4E0E\u4E0A\u4E0B\u6587\u89C4\u683C ")
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><span class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId2}>\u2696\uFE0F \u6A21\u578B\u81EA\u7531\u53CC\u680F PK</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u4EFB\u610F\u4E24\u6B3E\u6A21\u578B\u89C4\u683C\u3001\u901F\u5EA6\u3001\u4EF7\u683C\u4E0E\u5B9E\u6D4B\u4F53\u9A8C\u9762\u5BF9\u9762\u6DF1\u5EA6\u5BF9\u6BD4 </p>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u2696\uFE0F \u6A21\u578B\u81EA\u7531\u53CC\u680F PK"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                      })
                    ]),
                    createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u4EFB\u610F\u4E24\u6B3E\u6A21\u578B\u89C4\u683C\u3001\u901F\u5EA6\u3001\u4EF7\u683C\u4E0E\u5B9E\u6D4B\u4F53\u9A8C\u9762\u5BF9\u9762\u6DF1\u5EA6\u5BF9\u6BD4 ")
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
                    createTextVNode(" \u5B9E\u6D4B\u4E13\u7EBF \xB7 \u964D\u672C 85%+ ")
                  ]),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.gateways.title")), 1),
                  createVNode("p", { class: "mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.gateways.subtitle")), 1),
                  unref(updatedAt) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono"
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
                      }),
                      createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, " \u57FA\u4E8E\u771F\u5B9E API \u63A2\u6D4B\u4E0E\u5B9E\u6D4B\u8D26\u5355\uFF0C\u5BF9\u6BD4\u5404\u5927 AI \u4E2D\u8F6C\u7AD9\u7684\u5728\u7EBF\u7387\u3001\u5B9E\u6D4B\u5EF6\u8FDF\u3001\u6BCF\u767E\u4E07 Token \u5355\u4EF7\u4E0E\u7701\u94B1\u5E45\u5EA6 ")
                    ]),
                    createVNode("span", { class: "text-xs text-slate-400" }, " \u5171\u6536\u5F55 " + toDisplayString(filteredGateways.value.length) + " \u4E2A\u5B9E\u6D4B\u4E13\u7EBF\u8282\u70B9 ", 1)
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
                  createVNode("div", { class: "mt-6 overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs" }, [
                    createVNode("table", { class: "w-full text-left text-xs text-slate-600 dark:text-slate-300" }, [
                      createVNode("thead", { class: "border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 font-medium text-slate-400 dark:text-slate-500" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "w-12 px-4 py-3 text-center" }, "\u6392\u540D"),
                          createVNode("th", { class: "px-4 py-3" }, "\u4E2D\u8F6C\u7AD9\u70B9 / \u57DF\u540D"),
                          createVNode("th", { class: "px-4 py-3" }, "\u5B9E\u6D4B\u5EF6\u8FDF"),
                          createVNode("th", { class: "px-4 py-3" }, "\u5728\u7EBF\u7387"),
                          createVNode("th", { class: "px-4 py-3" }, "\u8F93\u5165\u5355\u4EF7 (\xA5/M)"),
                          createVNode("th", { class: "px-4 py-3" }, "\u76F8\u5BF9\u5B98\u65B9\u964D\u8D39"),
                          createVNode("th", { class: "px-4 py-3 hidden sm:table-cell" }, "\u6838\u5FC3\u652F\u6301\u6A21\u578B"),
                          createVNode("th", { class: "px-4 py-3 text-right" }, "\u64CD\u4F5C")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredGateways.value, (gw, index) => {
                          return openBlock(), createBlock("tr", {
                            key: gw.id,
                            class: ["hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors", gw.isSelfOperated ? "bg-blue-50/20 dark:bg-blue-950/20" : ""]
                          }, [
                            createVNode("td", { class: "px-4 py-3.5 text-center font-bold font-mono text-slate-400" }, [
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
                              createVNode("span", { class: "inline-flex items-center gap-1 rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60" }, " \u76F4\u964D " + toDisplayString(gw.savingsPercent) + "% ", 1)
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
                createVNode("section", { class: "mt-12" }, [
                  createVNode(_component_HoxiSpeedTester)
                ]),
                createVNode("section", { class: "mt-12" }, [
                  createVNode(_component_HoxiCostCalculator)
                ]),
                createVNode("section", {
                  id: "setup-guide",
                  class: "mt-14 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8"
                }, [
                  createVNode("div", { class: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4" }, [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2" }, [
                        createVNode("span", null, "\u{1F6E0}\uFE0F"),
                        createVNode("span", null, "Cursor / VS Code / Cline 1 \u5206\u949F\u63A5\u5165\u914D\u7F6E")
                      ]),
                      createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, [
                        createTextVNode(" \u83B7\u53D6 API Key \u540E\uFF0C\u76F4\u63A5\u5C06 "),
                        createVNode("strong", null, "OpenAI Base URL"),
                        createTextVNode(" \u586B\u5165 IDE \u8BBE\u7F6E\u5373\u53EF\u4E1D\u6ED1\u5199\u4EE3\u7801\uFF0C\u96F6\u9B54\u6CD5\u95E8\u69DB ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-4 md:grid-cols-2" }, [
                    createVNode("div", { class: "rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200" }, [
                      createVNode("div", { class: "text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3" }, " # Cursor IDE \u914D\u7F6E (Settings -> Models -> OpenAI API Key) "),
                      createVNode("p", { class: "text-slate-400" }, "Base URL:"),
                      createVNode("p", { class: "text-emerald-400 font-bold" }, "https://api.ainode.run/v1"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "API Key:"),
                      createVNode("p", { class: "text-blue-400" }, "sk-your-ainode-api-key"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Model Name:"),
                      createVNode("p", { class: "text-amber-300" }, "claude-3-7-sonnet / deepseek-r1")
                    ]),
                    createVNode("div", { class: "rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-200" }, [
                      createVNode("div", { class: "text-slate-400 font-semibold border-b border-slate-800 pb-2 mb-3" }, " # Cline / Roo Code / Continue \u914D\u7F6E "),
                      createVNode("p", { class: "text-slate-400" }, "API Provider:"),
                      createVNode("p", { class: "text-blue-400" }, "OpenAI Compatible"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Base URL:"),
                      createVNode("p", { class: "text-emerald-400 font-bold" }, "https://api.ainode.run/v1"),
                      createVNode("p", { class: "mt-2 text-slate-400" }, "Thinking Mode (\u601D\u8003\u6A21\u5F0F):"),
                      createVNode("p", { class: "text-emerald-400" }, "100% \u6EE1\u8840\u539F\u751F\u652F\u6301 (\u652F\u6301 reasoning_content)")
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-14 border-t border-slate-100 dark:border-slate-800 pt-10" }, [
                  createVNode(_component_HoxiSectionLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("AI \u4E2D\u8F6C\u7AD9\u5B9E\u6218\u907F\u5751\u4E0E\u771F\u4F2A\u9274\u522B\u539F\u5219")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-6 grid gap-6 md:grid-cols-3" }, [
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h4", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, " 1. \u8B66\u60D5\u6781\u7AEF\u5EC9\u4EF7\u7684\u300C\u63BA\u6C34 / \u5047\u6A21\u578B\u300D "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, " \u90E8\u5206\u4E2D\u8F6C\u7AD9\u6807\u4EF7\u51E0\u5206\u94B1\uFF0C\u5B9E\u9645\u540E\u53F0\u5C06 Claude 3.7 \u964D\u667A\u66FF\u6362\u4E3A Haiku \u751A\u81F3\u5F00\u6E90\u5C0F\u6A21\u578B\u3002\u6D4B\u8BD5\u65F6\u53EF\u7528\u590D\u6742\u7684\u8DE8\u6587\u4EF6\u91CD\u6784\u4E0E\u6781\u7AEF\u6570\u5B66\u9898\u6821\u9A8C\u8F93\u51FA\u7279\u5F81\u3002 ")
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h4", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, " 2. \u575A\u6301\u300C\u5C0F\u989D\u5145\u503C \xB7 \u968F\u7528\u968F\u5145\u300D "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, " \u7B2C\u4E09\u65B9\u4E2D\u8F6C\u7AD9\u53D7\u4E0A\u6E38\u5B98\u65B9\u98CE\u63A7\u5F71\u54CD\u8F83\u5927\u3002\u5F3A\u70C8\u5EFA\u8BAE\u9996\u6B21\u5145\u503C \xA510~\xA530 \u8FDB\u884C\u8FDE\u901A\u6027\u548C\u5EF6\u8FDF\u9A8C\u8BC1\uFF0C\u5207\u5FCC\u4E00\u6B21\u6027\u5927\u989D\u5145\u503C\u6570\u767E\u5143\u4EE5\u9632\u8DD1\u8DEF\u3002 ")
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 p-5" }, [
                      createVNode("h4", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, " 3. \u9996\u5B57\u5EF6\u8FDF (TTFT) \u5BF9 IDE \u5199\u4EE3\u7801\u81F3\u5173\u91CD\u8981 "),
                      createVNode("p", { class: "mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400" }, " IDE \u5185\u4EE3\u7801\u8865\u5168\u548C\u5B9E\u65F6\u5BF9\u8BDD\u5BF9\u9996\u5B57\u8FD4\u56DE\u6781\u4E3A\u654F\u611F\u3002\u56FD\u5185\u4E13\u7EBF\uFF08<300ms\uFF09\u80FD\u5E26\u6765\u5982\u540C\u672C\u5730\u8FD0\u884C\u822C\u7684\u4E1D\u6ED1\u4F53\u9A8C\uFF0C\u800C\u6D77\u5916\u88F8\u8FDE\uFF081500ms+\uFF09\u5219\u4F1A\u6709\u660E\u663E\u5361\u987F\u611F\u3002 ")
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
                          createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u{1F4B3} AI \u7F16\u7A0B\u5957\u9910\u5BF9\u6BD4"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                          })
                        ]),
                        createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " Cursor Pro\u3001Claude \u5B98\u65B9\u8BA2\u9605\u4E0E\u963F\u91CC\u4E91\u767E\u70BC\u5957\u9910\u6DF1\u5EA6\u6A2A\u5411\u6BD4\u5BF9 ")
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/models"),
                      class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u{1F4CA} \u5B98\u65B9\u6A21\u578B\u4EF7\u683C\u5E93"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                          })
                        ]),
                        createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u6536\u5F55 20+ \u5B98\u65B9\u6A21\u578B\u520A\u4F8B\u4EF7\u3001\u6BCF\u767E\u4E07 Token \u6DF7\u5408\u6210\u672C\u4E0E\u4E0A\u4E0B\u6587\u89C4\u683C ")
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/compare"),
                      class: "group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all block sm:col-span-2 md:col-span-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white" }, "\u2696\uFE0F \u6A21\u578B\u81EA\u7531\u53CC\u680F PK"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                          })
                        ]),
                        createVNode("p", { class: "mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u4EFB\u610F\u4E24\u6B3E\u6A21\u578B\u89C4\u683C\u3001\u901F\u5EA6\u3001\u4EF7\u683C\u4E0E\u5B9E\u6D4B\u4F53\u9A8C\u9762\u5BF9\u9762\u6DF1\u5EA6\u5BF9\u6BD4 ")
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
