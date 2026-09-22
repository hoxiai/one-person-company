import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aM as useLocaleRouter, bk as useSeoMeta, b as _sfc_main$G } from './server.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHoxiTools } from './useHoxiTools-CyeF0_tS.mjs';
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
import './tools-Dasq1Dvd.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tools",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useLocaleRouter();
    const { tools, categories } = useHoxiTools();
    const activeCategory = ref("all");
    const filteredTools = computed(() => {
      if (activeCategory.value === "all") {
        return tools.value;
      }
      return tools.value.filter((t2) => t2.category === activeCategory.value);
    });
    const getCategoryCount = (catId) => {
      if (catId === "all") return tools.value.length;
      return tools.value.filter((t2) => t2.category === catId).length;
    };
    const formatDomain = (url) => {
      try {
        const u = new URL(url);
        return u.hostname;
      } catch {
        return url;
      }
    };
    useSeoMeta({
      title: computed(() => t("hoxi.tools.seoTitle")),
      description: computed(() => t("hoxi.tools.seoDescription"))
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$G;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-16"${_scopeId}><div class="text-center max-w-2xl mx-auto mb-10 md:mb-14"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60 mb-3 shadow-2xs"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"${_scopeId}></span> \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 </span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.tools.title"))}</h1><p class="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.tools.subtitle"))}</p></div><div class="flex items-center justify-center mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-none"${_scopeId}><div class="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-2xs shrink-0 max-w-full"${_scopeId}><!--[-->`);
            ssrRenderList(unref(categories), (cat) => {
              _push2(`<button type="button" class="${ssrRenderClass([activeCategory.value === cat.id ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "inline-flex items-center gap-1.5 rounded-xl px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer whitespace-nowrap"])}"${_scopeId}>`);
              if (cat.icon) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: cat.icon,
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${ssrInterpolate(cat.label)}</span><span class="text-[10px] opacity-60 font-mono"${_scopeId}> (${ssrInterpolate(getCategoryCount(cat.id))}) </span></button>`);
            });
            _push2(`<!--]--></div></div>`);
            if (filteredTools.value.length > 0) {
              _push2(`<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(filteredTools.value, (tool) => {
                _push2(`<div class="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4 sm:p-5 md:p-6 transition-all duration-200 hover:border-amber-400/60 dark:hover:border-amber-500/50 hover:shadow-lg dark:hover:bg-slate-900 hover:-translate-y-0.5"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-3 mb-3"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-2xs"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: tool.icon || "ph:wrench-bold",
                  class: "w-5 h-5 text-amber-600 dark:text-amber-400"
                }, null, _parent2, _scopeId));
                _push2(`</span><div${_scopeId}><h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 leading-snug"${_scopeId}><span${_scopeId}>${ssrInterpolate(tool.name)}</span></h3><div class="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(tool.categoryLabel)}</span><span${_scopeId}>\xB7</span><span class="font-medium text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(tool.pricing || "\u514D\u8D39\u8D77\u6B65")}</span></div></div></div>`);
                if (tool.badge) {
                  _push2(`<span class="${ssrRenderClass([tool.badgeTone === "warning" ? "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/60" : tool.badgeTone === "info" ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/60" : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/60", "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold border"])}"${_scopeId}>${ssrInterpolate(tool.badge)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mt-2"${_scopeId}>${ssrInterpolate(tool.description)}</p></div><div class="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between"${_scopeId}><span class="text-[11px] text-slate-400 font-mono dark:text-slate-500"${_scopeId}>${ssrInterpolate(formatDomain(tool.url))}</span><a${ssrRenderAttr("href", tool.affiliateUrl || tool.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-amber-600 dark:hover:bg-amber-500 text-white px-3.5 py-1 text-xs font-semibold transition-colors shadow-2xs"${_scopeId}><span${_scopeId}>\u76F4\u8FBE\u4F7F\u7528</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-up-right-bold",
                  class: "w-3 h-3"
                }, null, _parent2, _scopeId));
                _push2(`</a></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-16 bg-slate-50/50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:wrench-bold",
                class: "w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-3"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-base font-bold text-slate-800 dark:text-white mb-1"${_scopeId}> \u6682\u65E0\u5DE5\u5177 </h3><p class="text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u8FD9\u4E2A\u5206\u7C7B\u4E0B\u8FD8\u6CA1\u6709\u5DE5\u5177\u3002 </p></div>`);
            }
            _push2(`<div class="mt-14 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8"${_scopeId}><h2 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3"${_scopeId}><span${_scopeId}>\u9009\u5DE5\u5177\u7684\u4E09\u6761\u539F\u5219</span></h2><div class="grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400"${_scopeId}><div${_scopeId}><strong class="font-semibold text-slate-800 dark:text-slate-200 block mb-1"${_scopeId}>1. \u8FD0\u7EF4\u4EA4\u7ED9\u5E73\u53F0</strong><p${_scopeId}>\u4E00\u4E2A\u4EBA\u7684\u65F6\u95F4\u6709\u9650\u3002\u90E8\u7F72\u3001\u6570\u636E\u5E93\u3001\u5907\u4EFD\u80FD\u4EA4\u7ED9\u6258\u7BA1\u670D\u52A1\u7684\uFF0C\u5C31\u522B\u81EA\u5DF1\u82B1\u65F6\u95F4\u6298\u817E\u3002</p></div><div${_scopeId}><strong class="font-semibold text-slate-800 dark:text-slate-200 block mb-1"${_scopeId}>2. \u5148\u6309\u7528\u91CF\u4ED8\u8D39</strong><p${_scopeId}>\u8FD8\u6CA1\u6709\u7A33\u5B9A\u6536\u5165\u65F6\uFF0C\u4F18\u5148\u9009\u6709\u514D\u8D39\u989D\u5EA6\u6216\u6309\u7528\u91CF\u8BA1\u8D39\u7684\u670D\u52A1\uFF0C\u522B\u8BA9\u6708\u8D39\u5148\u5403\u6389\u5229\u6DA6\u3002</p></div><div${_scopeId}><strong class="font-semibold text-slate-800 dark:text-slate-200 block mb-1"${_scopeId}>3. \u5DE5\u5177\u8D8A\u5C11\u8D8A\u597D</strong><p${_scopeId}>\u6BCF\u52A0\u4E00\u4E2A\u5DE5\u5177\uFF0C\u90FD\u8BE5\u7701\u4E0B\u65F6\u95F4\u6216\u8005\u5E2E\u4F60\u6536\u5230\u94B1\uFF0C\u5426\u5219\u5C31\u5148\u4E0D\u52A0\u3002</p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-16" }, [
                createVNode("div", { class: "text-center max-w-2xl mx-auto mb-10 md:mb-14" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60 mb-3 shadow-2xs" }, [
                    createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" }),
                    createTextVNode(" \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 ")
                  ]),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.tools.title")), 1),
                  createVNode("p", { class: "mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.tools.subtitle")), 1)
                ]),
                createVNode("div", { class: "flex items-center justify-center mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-none" }, [
                  createVNode("div", { class: "inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-2xs shrink-0 max-w-full" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (cat) => {
                      return openBlock(), createBlock("button", {
                        key: cat.id,
                        type: "button",
                        class: ["inline-flex items-center gap-1.5 rounded-xl px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all cursor-pointer whitespace-nowrap", activeCategory.value === cat.id ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"],
                        onClick: ($event) => activeCategory.value = cat.id
                      }, [
                        cat.icon ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: cat.icon,
                          class: "w-3.5 h-3.5"
                        }, null, 8, ["name"])) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString(cat.label), 1),
                        createVNode("span", { class: "text-[10px] opacity-60 font-mono" }, " (" + toDisplayString(getCategoryCount(cat.id)) + ") ", 1)
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ]),
                filteredTools.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(filteredTools.value, (tool) => {
                    return openBlock(), createBlock("div", {
                      key: tool.id,
                      class: "flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-4 sm:p-5 md:p-6 transition-all duration-200 hover:border-amber-400/60 dark:hover:border-amber-500/50 hover:shadow-lg dark:hover:bg-slate-900 hover:-translate-y-0.5"
                    }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-start justify-between gap-3 mb-3" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("span", { class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-2xs" }, [
                              createVNode(_component_UIcon, {
                                name: tool.icon || "ph:wrench-bold",
                                class: "w-5 h-5 text-amber-600 dark:text-amber-400"
                              }, null, 8, ["name"])
                            ]),
                            createVNode("div", null, [
                              createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 leading-snug" }, [
                                createVNode("span", null, toDisplayString(tool.name), 1)
                              ]),
                              createVNode("div", { class: "mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500" }, [
                                createVNode("span", null, toDisplayString(tool.categoryLabel), 1),
                                createVNode("span", null, "\xB7"),
                                createVNode("span", { class: "font-medium text-slate-600 dark:text-slate-300" }, toDisplayString(tool.pricing || "\u514D\u8D39\u8D77\u6B65"), 1)
                              ])
                            ])
                          ]),
                          tool.badge ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ["shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold border", tool.badgeTone === "warning" ? "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/60" : tool.badgeTone === "info" ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/60" : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/60"]
                          }, toDisplayString(tool.badge), 3)) : createCommentVNode("", true)
                        ]),
                        createVNode("p", { class: "text-xs leading-relaxed text-slate-600 dark:text-slate-400 mt-2" }, toDisplayString(tool.description), 1)
                      ]),
                      createVNode("div", { class: "mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between" }, [
                        createVNode("span", { class: "text-[11px] text-slate-400 font-mono dark:text-slate-500" }, toDisplayString(formatDomain(tool.url)), 1),
                        createVNode("a", {
                          href: tool.affiliateUrl || tool.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-amber-600 dark:hover:bg-amber-500 text-white px-3.5 py-1 text-xs font-semibold transition-colors shadow-2xs"
                        }, [
                          createVNode("span", null, "\u76F4\u8FBE\u4F7F\u7528"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-up-right-bold",
                            class: "w-3 h-3"
                          })
                        ], 8, ["href"])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center py-16 bg-slate-50/50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:wrench-bold",
                    class: "w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-3"
                  }),
                  createVNode("h3", { class: "text-base font-bold text-slate-800 dark:text-white mb-1" }, " \u6682\u65E0\u5DE5\u5177 "),
                  createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400" }, " \u8FD9\u4E2A\u5206\u7C7B\u4E0B\u8FD8\u6CA1\u6709\u5DE5\u5177\u3002 ")
                ])),
                createVNode("div", { class: "mt-14 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8" }, [
                  createVNode("h2", { class: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3" }, [
                    createVNode("span", null, "\u9009\u5DE5\u5177\u7684\u4E09\u6761\u539F\u5219")
                  ]),
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400" }, [
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 dark:text-slate-200 block mb-1" }, "1. \u8FD0\u7EF4\u4EA4\u7ED9\u5E73\u53F0"),
                      createVNode("p", null, "\u4E00\u4E2A\u4EBA\u7684\u65F6\u95F4\u6709\u9650\u3002\u90E8\u7F72\u3001\u6570\u636E\u5E93\u3001\u5907\u4EFD\u80FD\u4EA4\u7ED9\u6258\u7BA1\u670D\u52A1\u7684\uFF0C\u5C31\u522B\u81EA\u5DF1\u82B1\u65F6\u95F4\u6298\u817E\u3002")
                    ]),
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 dark:text-slate-200 block mb-1" }, "2. \u5148\u6309\u7528\u91CF\u4ED8\u8D39"),
                      createVNode("p", null, "\u8FD8\u6CA1\u6709\u7A33\u5B9A\u6536\u5165\u65F6\uFF0C\u4F18\u5148\u9009\u6709\u514D\u8D39\u989D\u5EA6\u6216\u6309\u7528\u91CF\u8BA1\u8D39\u7684\u670D\u52A1\uFF0C\u522B\u8BA9\u6708\u8D39\u5148\u5403\u6389\u5229\u6DA6\u3002")
                    ]),
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 dark:text-slate-200 block mb-1" }, "3. \u5DE5\u5177\u8D8A\u5C11\u8D8A\u597D"),
                      createVNode("p", null, "\u6BCF\u52A0\u4E00\u4E2A\u5DE5\u5177\uFF0C\u90FD\u8BE5\u7701\u4E0B\u65F6\u95F4\u6216\u8005\u5E2E\u4F60\u6536\u5230\u94B1\uFF0C\u5426\u5219\u5C31\u5148\u4E0D\u52A0\u3002")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/tools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
