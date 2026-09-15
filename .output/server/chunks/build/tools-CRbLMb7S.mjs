import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aM as useLocaleRouter, bj as useSeoMeta, b as _sfc_main$E, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_3 from './HoxiCanvasWidget-Ba6U9ble.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHoxiTools } from './useHoxiTools-DcixUNZe.mjs';
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
import './tools-DBum00wX.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tools",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localeRouter = useLocaleRouter();
    const localePath = (p) => {
      const target = typeof p === "object" && (p == null ? void 0 : p.value) !== void 0 ? p.value : String(p);
      if (localeRouter && typeof localeRouter.localePath === "function") {
        return localeRouter.localePath(target);
      }
      return target.startsWith("/") ? target : `/${target}`;
    };
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
      const _component_UIcon = _sfc_main$E;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiCanvasWidget = __nuxt_component_3;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-16"${_scopeId}><div class="text-center max-w-2xl mx-auto mb-10 md:mb-14"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60 mb-3 shadow-2xs"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"${_scopeId}></span> \u4E00\u4EBA\u516C\u53F8\u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1 \xB7 \u7AD9\u957F\u81EA\u7528 </span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.tools.title"))}</h1><p class="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.tools.subtitle"))}</p></div><div class="max-w-3xl mx-auto mb-10 rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/30 p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white shadow-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:compass-bold",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><div${_scopeId}><div class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId}> \u8FF7\u832B\u8BE5\u9009\u54EA\u4E9B\u5DE5\u5177\uFF1F\u5148\u6D4B\u6D4B\u4F60\u7684\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6 </div><p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5"${_scopeId}> 12 \u9053\u5B9E\u6218\u60C5\u5883\u9898\uFF0C\u6DF1\u5EA6\u8BCA\u65AD\u4F60\u7684\u5DE5\u7A0B\u4E0E\u53D8\u73B0\u77ED\u677F\uFF0C\u76F4\u63A5\u5BF9\u75C7\u6311\u5DE5\u5177\u3002 </p></div></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: localePath("/readiness"),
              class: "shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold transition-colors shadow-2xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u7ACB\u5373\u5F00\u59CB\u6D4B\u8BC4</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "\u7ACB\u5373\u5F00\u59CB\u6D4B\u8BC4"),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-center mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-none"${_scopeId}><div class="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-2xs shrink-0 max-w-full"${_scopeId}><!--[-->`);
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
                _push2(`</div><p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mt-2"${_scopeId}>${ssrInterpolate(tool.description)}</p></div><div class="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between"${_scopeId}><span class="text-[11px] text-slate-400 font-mono"${_scopeId}>${ssrInterpolate(formatDomain(tool.url))}</span><a${ssrRenderAttr("href", tool.affiliateUrl || tool.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-slate-800 hover:bg-amber-600 dark:hover:bg-amber-500 text-white px-3.5 py-1 text-xs font-semibold transition-colors shadow-2xs"${_scopeId}><span${_scopeId}>\u76F4\u8FBE\u4F7F\u7528</span>`);
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
              _push2(`<h3 class="text-base font-bold text-slate-800 dark:text-white mb-1"${_scopeId}> \u8BE5\u5206\u7C7B\u4E0B\u6682\u65E0\u5DE5\u5177\u63A8\u8350 </h3><p class="text-xs text-slate-500 dark:text-slate-400"${_scopeId}> \u6211\u4EEC\u6B63\u5728\u6301\u7EED\u5B9E\u6D4B\u5E76\u8865\u5145\u4E00\u4EBA\u516C\u53F8\u597D\u5DE5\u5177\uFF0C\u6B22\u8FCE\u7A0D\u540E\u67E5\u770B\u3002 </p></div>`);
            }
            _push2(ssrRenderComponent(_component_HoxiCanvasWidget, { class: "mt-14" }, null, _parent2, _scopeId));
            _push2(`<div class="mt-14 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8"${_scopeId}><h2 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3"${_scopeId}><span${_scopeId}>\u{1F4A1}</span><span${_scopeId}>\u53EF\u4E50\u7684\u4E00\u4EBA\u516C\u53F8\u5DE5\u5177\u9009\u578B\u4E09\u539F\u5219</span></h2><div class="grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400"${_scopeId}><div${_scopeId}><strong class="font-semibold text-slate-800 dark:text-slate-200 block mb-1"${_scopeId}>1. \u80FD\u7528\u6258\u7BA1\uFF0C\u7EDD\u4E0D\u81EA\u5EFA</strong><p${_scopeId}>\u4E00\u4EBA\u516C\u53F8\u6700\u503C\u94B1\u7684\u662F\u4F60\u7684\u6CE8\u610F\u529B\u548C\u7CBE\u529B\u3002\u6570\u636E\u5E93\u7528 Supabase\uFF0C\u6258\u7BA1\u7528 Vercel\uFF0C\u522B\u6D6A\u8D39\u51E0\u5929\u53BB\u6298\u817E Linux \u8FD0\u7EF4\u548C\u5907\u4EFD\u3002</p></div><div${_scopeId}><strong class="font-semibold text-slate-800 dark:text-slate-200 block mb-1"${_scopeId}>2. \u4F18\u5148\u6309\u7528\u91CF\u4ED8\u8D39\uFF0C\u675C\u7EDD\u56FA\u5B9A\u6C89\u6CA1\u6210\u672C</strong><p${_scopeId}>\u4EA7\u54C1\u521D\u671F\u6CA1\u6709\u89C4\u6A21\u5316\u6D41\u6C34\u65F6\uFF0C\u4F18\u5148\u9009\u62E9\u514D\u8D39\u989D\u5EA6\u5927\u6216\u7EAF\u6309\u8C03\u7528\u6263\u8D39\uFF08Pay-as-you-go\uFF09\u7684\u670D\u52A1\uFF0C\u4E0D\u8BA9\u56FA\u5B9A\u6708\u8D39\u5403\u6389\u5229\u6DA6\u3002</p></div><div${_scopeId}><strong class="font-semibold text-slate-800 dark:text-slate-200 block mb-1"${_scopeId}>3. \u5DE5\u5177\u5C11\u800C\u7CBE\uFF0C\u62D2\u7EDD\u6280\u672F\u81EA\u55E8</strong><p${_scopeId}>\u6BCF\u4E00\u6B3E\u5DE5\u5177\u5FC5\u987B\u80FD\u76F4\u63A5\u5E2E\u4F60\u7701\u51FA\u5199\u4EE3\u7801\u7684\u65F6\u95F4\uFF0C\u6216\u8005\u76F4\u63A5\u6253\u901A\u6536\u6B3E\u53D8\u73B0\u6E20\u9053\u3002\u4E0D\u5806\u780C\u82B1\u54E8\u6280\u672F\u6808\uFF0C\u8DD1\u901A\u5546\u4E1A\u95ED\u73AF\u624D\u662F\u786C\u9053\u7406\u3002</p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-16" }, [
                createVNode("div", { class: "text-center max-w-2xl mx-auto mb-10 md:mb-14" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60 mb-3 shadow-2xs" }, [
                    createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" }),
                    createTextVNode(" \u4E00\u4EBA\u516C\u53F8\u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1 \xB7 \u7AD9\u957F\u81EA\u7528 ")
                  ]),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.tools.title")), 1),
                  createVNode("p", { class: "mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.tools.subtitle")), 1)
                ]),
                createVNode("div", { class: "max-w-3xl mx-auto mb-10 rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-blue-50/40 dark:bg-blue-950/30 p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    createVNode("span", { class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white shadow-xs" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:compass-bold",
                        class: "w-5 h-5"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-sm font-bold text-slate-900 dark:text-white" }, " \u8FF7\u832B\u8BE5\u9009\u54EA\u4E9B\u5DE5\u5177\uFF1F\u5148\u6D4B\u6D4B\u4F60\u7684\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6 "),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 mt-0.5" }, " 12 \u9053\u5B9E\u6218\u60C5\u5883\u9898\uFF0C\u6DF1\u5EA6\u8BCA\u65AD\u4F60\u7684\u5DE5\u7A0B\u4E0E\u53D8\u73B0\u77ED\u677F\uFF0C\u76F4\u63A5\u5BF9\u75C7\u6311\u5DE5\u5177\u3002 ")
                    ])
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: localePath("/readiness"),
                    class: "shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold transition-colors shadow-2xs"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u7ACB\u5373\u5F00\u59CB\u6D4B\u8BC4"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
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
                        createVNode("span", { class: "text-[11px] text-slate-400 font-mono" }, toDisplayString(formatDomain(tool.url)), 1),
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
                  createVNode("h3", { class: "text-base font-bold text-slate-800 dark:text-white mb-1" }, " \u8BE5\u5206\u7C7B\u4E0B\u6682\u65E0\u5DE5\u5177\u63A8\u8350 "),
                  createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400" }, " \u6211\u4EEC\u6B63\u5728\u6301\u7EED\u5B9E\u6D4B\u5E76\u8865\u5145\u4E00\u4EBA\u516C\u53F8\u597D\u5DE5\u5177\uFF0C\u6B22\u8FCE\u7A0D\u540E\u67E5\u770B\u3002 ")
                ])),
                createVNode(_component_HoxiCanvasWidget, { class: "mt-14" }),
                createVNode("div", { class: "mt-14 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6 md:p-8" }, [
                  createVNode("h2", { class: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3" }, [
                    createVNode("span", null, "\u{1F4A1}"),
                    createVNode("span", null, "\u53EF\u4E50\u7684\u4E00\u4EBA\u516C\u53F8\u5DE5\u5177\u9009\u578B\u4E09\u539F\u5219")
                  ]),
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400" }, [
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 dark:text-slate-200 block mb-1" }, "1. \u80FD\u7528\u6258\u7BA1\uFF0C\u7EDD\u4E0D\u81EA\u5EFA"),
                      createVNode("p", null, "\u4E00\u4EBA\u516C\u53F8\u6700\u503C\u94B1\u7684\u662F\u4F60\u7684\u6CE8\u610F\u529B\u548C\u7CBE\u529B\u3002\u6570\u636E\u5E93\u7528 Supabase\uFF0C\u6258\u7BA1\u7528 Vercel\uFF0C\u522B\u6D6A\u8D39\u51E0\u5929\u53BB\u6298\u817E Linux \u8FD0\u7EF4\u548C\u5907\u4EFD\u3002")
                    ]),
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 dark:text-slate-200 block mb-1" }, "2. \u4F18\u5148\u6309\u7528\u91CF\u4ED8\u8D39\uFF0C\u675C\u7EDD\u56FA\u5B9A\u6C89\u6CA1\u6210\u672C"),
                      createVNode("p", null, "\u4EA7\u54C1\u521D\u671F\u6CA1\u6709\u89C4\u6A21\u5316\u6D41\u6C34\u65F6\uFF0C\u4F18\u5148\u9009\u62E9\u514D\u8D39\u989D\u5EA6\u5927\u6216\u7EAF\u6309\u8C03\u7528\u6263\u8D39\uFF08Pay-as-you-go\uFF09\u7684\u670D\u52A1\uFF0C\u4E0D\u8BA9\u56FA\u5B9A\u6708\u8D39\u5403\u6389\u5229\u6DA6\u3002")
                    ]),
                    createVNode("div", null, [
                      createVNode("strong", { class: "font-semibold text-slate-800 dark:text-slate-200 block mb-1" }, "3. \u5DE5\u5177\u5C11\u800C\u7CBE\uFF0C\u62D2\u7EDD\u6280\u672F\u81EA\u55E8"),
                      createVNode("p", null, "\u6BCF\u4E00\u6B3E\u5DE5\u5177\u5FC5\u987B\u80FD\u76F4\u63A5\u5E2E\u4F60\u7701\u51FA\u5199\u4EE3\u7801\u7684\u65F6\u95F4\uFF0C\u6216\u8005\u76F4\u63A5\u6253\u901A\u6536\u6B3E\u53D8\u73B0\u6E20\u9053\u3002\u4E0D\u5806\u780C\u82B1\u54E8\u6280\u672F\u6808\uFF0C\u8DD1\u901A\u5546\u4E1A\u95ED\u73AF\u624D\u662F\u786C\u9053\u7406\u3002")
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
