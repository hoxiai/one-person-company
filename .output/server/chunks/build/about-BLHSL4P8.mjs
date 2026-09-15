import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { aM as useLocaleRouter, bj as useSeoMeta, bk as useJsonLd, b as _sfc_main$E, a as __nuxt_component_3$1 } from './server.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useHoxiModels } from './useHoxiModels-CB4dunlj.mjs';
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
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const { models, vendors, updatedAt } = useHoxiModels();
    useSeoMeta({
      title: "\u5173\u4E8E\u5408\u559C AI - \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357\u3001\u7AD9\u957F\u5FC3\u58F0\u4E0E\u6570\u636E\u53E3\u5F84",
      description: "\u6211\u662F\u53EF\u4E50\u3002\u8BB0\u5F55\u5584\u7528 AI \u4E00\u4EBA\u6210\u519B\u7684\u5B9E\u6218\u5168\u666F\uFF1A\u5C31\u7EEA\u5EA6\u6D4B\u8BC4\u3001\u6781\u7B80\u5168\u6808\u519B\u706B\u5E93\u3001\u7B97\u529B\u964D\u672C\u4E13\u7EBF\u4E0E\u5FC3\u667A\u91CD\u6784\u3002",
      ogTitle: "\u5173\u4E8E\u5408\u559C AI - \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357\u3001\u7AD9\u957F\u5FC3\u58F0\u4E0E\u6570\u636E\u53E3\u5F84",
      ogDescription: "\u6211\u662F\u53EF\u4E50\u3002\u8BB0\u5F55\u5584\u7528 AI \u4E00\u4EBA\u6210\u519B\u7684\u5B9E\u6218\u5168\u666F\uFF1A\u5C31\u7EEA\u5EA6\u6D4B\u8BC4\u3001\u6781\u7B80\u5168\u6808\u519B\u706B\u5E93\u3001\u7B97\u529B\u964D\u672C\u4E13\u7EBF\u4E0E\u5FC3\u667A\u91CD\u6784\u3002",
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: "\u5173\u4E8E\u5408\u559C AI - \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357",
      twitterDescription: "\u6211\u662F\u53EF\u4E50\u3002\u8BB0\u5F55\u5584\u7528 AI \u4E00\u4EBA\u6210\u519B\u7684\u5B9E\u6218\u5168\u666F\uFF1A\u5C31\u7EEA\u5EA6\u6D4B\u8BC4\u3001\u6781\u7B80\u5168\u6808\u519B\u706B\u5E93\u3001\u7B97\u529B\u964D\u672C\u4E13\u7EBF\u4E0E\u5FC3\u667A\u91CD\u6784\u3002",
      keywords: "\u5173\u4E8E\u5408\u559CAI, \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357, \u7AD9\u957F\u53EF\u4E50, \u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6, \u5168\u6808\u5DE5\u5177\u7BB1, \u5927\u6A21\u578B\u8BC4\u6D4B\u6807\u51C6, AI\u4E13\u7EBF\u964D\u8D39"
    });
    useJsonLd("hoxi-about-jsonld", computed(() => [
      {
        "@type": "AboutPage",
        name: "\u5173\u4E8E\u5408\u559C AI",
        description: "\u5408\u559C AI \u7AD9\u957F\u505A\u7AD9\u521D\u8877\u3001\u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357\u3001\u5168\u6808\u519B\u706B\u5E93\u4E0E\u7B97\u529B\u4E13\u7EBF\u6570\u636E\u53E3\u5F84\u3002",
        url: localePath("/about")
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
          { "@type": "ListItem", position: 2, name: "\u5173\u4E8E", item: localePath("/about") }
        ]
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$E;
      const _component_NuxtLink = __nuxt_component_3$1;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-20 max-w-4xl mx-auto"${_scopeId}><div class="text-center max-w-2xl mx-auto mb-12 md:mb-16"${_scopeId}><span class="inline-block text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full mb-3 border border-amber-200/60 dark:border-amber-800/60"${_scopeId}> \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 \xB7 \u7AD9\u957F\u5FC3\u58F0 </span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}> \u5173\u4E8E\u5408\u559C AI </h1><p class="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}> \u5584\u7528 AI\uFF0C\u4E00\u4EBA\u6210\u519B\uFF0C\u6EE1\u5FC3\u6B22\u559C\u3002\u8BB0\u5F55\u4E00\u4EBA\u516C\u53F8\u6210\u957F\u8DEF\u5F84\u3001\u6781\u7B80\u5168\u6808\u519B\u706B\u5E93\u4E0E\u5546\u4E1A\u95ED\u73AF\u3002 </p></div><div class="rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-gradient-to-br from-slate-50/80 via-white to-amber-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950 p-6 md:p-8 shadow-xs mb-12"${_scopeId}><div class="flex flex-col sm:flex-row items-center sm:items-start gap-6"${_scopeId}><div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-black text-2xl shadow-md shrink-0"${_scopeId}> \u559C </div><div class="text-center sm:text-left flex-1"${_scopeId}><div class="flex flex-wrap items-center justify-center sm:justify-start gap-2.5"${_scopeId}><h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u53EF\u4E50 (Coller)</h2><span class="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60"${_scopeId}> \u4E00\u4EBA\u516C\u53F8\u63A2\u7D22\u8005 \xB7 \u5168\u6808\u72EC\u7ACB\u5F00\u53D1\u8005 </span></div><p class="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"${_scopeId}> \u505A\u8FD9\u884C\u8FD9\u4E9B\u5E74\uFF0C\u6211\u4E00\u76F4\u5728\u548C\u5404\u79CD\u5927\u6A21\u578B\u3001\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E0E\u5546\u4E1A\u95ED\u73AF\u6253\u4EA4\u9053\u3002\u624B\u4E0A\u8DD1\u7740\u4E00\u4EBA\u516C\u53F8\u4E1A\u52A1\u4E0E AI \u7F51\u5173\uFF0C\u6BCF\u5929\u76EF\u5404\u5BB6\u62A5\u4EF7\u3001\u6D4B\u6A21\u578B\u6218\u529B\u3001\u6D4B\u8BD5\u4E13\u7EBF\u7A33\u5B9A\u6027\u3002\u6211\u628A\u8FD9\u5957\u8E29\u5751\u6559\u8BAD\u3001\u6838\u7B97\u8D26\u672C\u4E0E\u5168\u6808\u519B\u706B\u5E93\u505A\u6210\u516C\u5F00\u7AD9\u70B9\uFF0C\u5206\u4EAB\u7ED9\u6BCF\u4E00\u4F4D\u60F3\u8981\u4F9D\u9760 AI \u653E\u5927\u4E2A\u4EBA\u6760\u6746\u3001\u4E00\u4EBA\u6210\u519B\u7684\u8D85\u7EA7\u4E2A\u4F53\u4E0E\u5F00\u53D1\u8005\u3002 </p><div class="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400"${_scopeId}><span class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:cpu",
              class: "w-4 h-4 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u5DF2\u6536\u5F55 ${ssrInterpolate(unref(models).length)} \u6B3E\u6838\u5FC3\u6A21\u578B</span></span><span class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:buildings",
              class: "w-4 h-4 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u6DB5\u76D6 ${ssrInterpolate(unref(vendors).length)} \u5BB6\u4E3B\u6D41\u5382\u5546</span></span>`);
            if (unref(updatedAt)) {
              _push2(`<span class="flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:calendar-check",
                class: "w-4 h-4 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u6570\u636E\u6838\u5BF9\u4E8E ${ssrInterpolate(unref(updatedAt))}</span></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<a href="https://github.com/hoxiai" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:github-logo",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>GitHub @hoxiai</span></a></div></div></div></div><div class="space-y-12 md:space-y-16"${_scopeId}><section class="border-t border-slate-100 dark:border-slate-800/80 pt-8"${_scopeId}><div class="flex items-center gap-2 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:compass",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u4E3A\u4EC0\u4E48\u505A\u5408\u559C AI\uFF1F</h2></div><div class="space-y-4 text-sm md:text-[15px] leading-8 text-slate-600 dark:text-slate-300"${_scopeId}><p${_scopeId}> \u4E00\u4E2A\u4EBA\u6210\u519B\uFF0C\u6700\u5927\u7684\u963B\u788D\u5F80\u5F80\u4E0D\u662F\u5199\u4E0D\u51FA\u4EE3\u7801\uFF0C\u800C\u662F<strong${_scopeId}>\u5927\u5382\u804C\u4E1A\u75C5\u3001\u4EE3\u7801\u81EA\u55E8\u3001\u5DE5\u5177\u94FE\u81C3\u80BF\u3001\u4E0D\u6562\u6536\u8D39\u4E0E\u7B97\u529B\u6210\u672C\u5931\u63A7</strong>\u3002\u6211\u505A\u8FD9\u4E2A\u7AD9\uFF0C\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u4E00\u4EBA\u516C\u53F8\u6210\u957F\u8DEF\u4E0A\u7684\u4E09\u5927\u73B0\u5B9E\u75DB\u70B9\uFF1A </p><div class="grid sm:grid-cols-3 gap-4 my-2"${_scopeId}><div class="rounded-2xl p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1"${_scopeId}>\u5173\u5361\u4E00</div><div class="text-sm font-semibold text-slate-800 dark:text-slate-200"${_scopeId}>\u80FD\u529B\u4E0E\u5FC3\u667A\u56F0\u5C40</div><p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal"${_scopeId}> \u7A0B\u5E8F\u5458\u6B7B\u4E8E\u8FC7\u5EA6\u8BBE\u8BA1\uFF0C\u4EA7\u54C1\u4EBA\u6B7B\u4E8E\u4EA4\u4ED8\u65AD\u5D16\u3002\u901A\u8FC7 12 \u9053\u4E24\u96BE\u9898\u6D4B\u8BC4\uFF0C\u6D4B\u51FA\u81F4\u547D\u77ED\u677F\u4E0E\u907F\u5751\u5904\u65B9\u3002 </p></div><div class="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-blue-600 dark:text-blue-400 font-mono"${_scopeId}> \u2192 /readiness \u80FD\u529B\u4F53\u68C0 </div></div><div class="rounded-2xl p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1"${_scopeId}>\u5173\u5361\u4E8C</div><div class="text-sm font-semibold text-slate-800 dark:text-slate-200"${_scopeId}>\u6781\u7B80\u5168\u6808\u519B\u706B\u5E93</div><p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal"${_scopeId}> \u6253\u901A\u201CUI\u751F\u6210 \u2192 AI\u8F85\u52A9\u7F16\u7A0B \u2192 \u96F6\u8FD0\u7EF4\u4E0A\u7EBF \u2192 \u5168\u7403\u6536\u7F8E\u91D1\u201D\uFF0C\u62D2\u7EDD\u590D\u6742\u67B6\u6784\uFF0C\u7CBE\u9009\u771F\u91D1\u767D\u94F6\u81EA\u7528\u5DE5\u5177\u3002 </p></div><div class="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-amber-600 dark:text-amber-400 font-mono"${_scopeId}> \u2192 /tools \u5168\u6808\u5DE5\u5177\u7BB1 </div></div><div class="rounded-2xl p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1"${_scopeId}>\u5173\u5361\u4E09</div><div class="text-sm font-semibold text-slate-800 dark:text-slate-200"${_scopeId}>\u7B97\u529B\u964D\u672C\u4E0E\u5546\u4E1A\u95ED\u73AF</div><p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal"${_scopeId}> \u62D2\u7EDD\u865A\u6807\u8DD1\u5206\u4E0E\u6708\u79DF\u7ED1\u67B6\uFF0C\u5B9E\u6D4B\u4F53\u611F\u5929\u68AF\u4E0E\u56FD\u5185\u76F4\u8FDE\u4E13\u7EBF\uFF0C\u4ECE\u6708\u82B1 \xA51500 \u538B\u5230 \xA580 \u4EE5\u5185\u3002 </p></div><div class="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-mono"${_scopeId}> \u2192 /savings \u7B97\u529B\u7701\u94B1\u65B9\u6848 </div></div></div></div></section><section class="border-t border-slate-100 dark:border-slate-800/80 pt-8"${_scopeId}><div class="flex items-center gap-2 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:grid-four",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u5408\u559C AI \u6838\u5FC3\u652F\u6491\u77E9\u9635</h2></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/projects"),
              class: "group p-4 rounded-2xl border border-blue-200/80 dark:border-blue-800/80 bg-blue-50/30 dark:bg-blue-950/20 hover:border-blue-500/60 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u{1F680} AI \u5B9E\u6218\u9879\u76EE\u5E93</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u8DD1\u901A\u5546\u4E1A\u95ED\u73AF\u7684\u771F\u5B9E\u843D\u5730\u9879\u76EE\uFF0C\u62C6\u89E3\u6A21\u578B\u9009\u578B\u4E0E\u6708\u7B97\u529B\u8D26\u672C\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u{1F680} AI \u5B9E\u6218\u9879\u76EE\u5E93"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u8DD1\u901A\u5546\u4E1A\u95ED\u73AF\u7684\u771F\u5B9E\u843D\u5730\u9879\u76EE\uFF0C\u62C6\u89E3\u6A21\u578B\u9009\u578B\u4E0E\u6708\u7B97\u529B\u8D26\u672C\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/readiness"),
              class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u{1F9ED} \u5C31\u7EEA\u5EA6\u80FD\u529B\u4F53\u68C0</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId2}> 12 \u9053\u5B9E\u6218\u60C5\u5883\u9898\uFF0C\u4E94\u7EF4\u96F7\u8FBE\u6DF1\u5EA6\u8BCA\u65AD\u5546\u4E1A\u3001\u4EA4\u4ED8\u4E0E\u5206\u53D1\u77ED\u677F\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u{1F9ED} \u5C31\u7EEA\u5EA6\u80FD\u529B\u4F53\u68C0"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, " 12 \u9053\u5B9E\u6218\u60C5\u5883\u9898\uFF0C\u4E94\u7EF4\u96F7\u8FBE\u6DF1\u5EA6\u8BCA\u65AD\u5546\u4E1A\u3001\u4EA4\u4ED8\u4E0E\u5206\u53D1\u77ED\u677F\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/tools"),
              class: "group p-4 rounded-2xl border border-amber-200/80 dark:border-amber-800/80 bg-amber-50/30 dark:bg-amber-950/20 hover:border-amber-500/60 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u{1F6E0}\uFE0F \u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u7CBE\u9009\u51FA\u6D77\u6536\u6B3E\u3001\u96F6\u8FD0\u7EF4\u90E8\u7F72\u3001UI \u751F\u6210\u4E0E\u5168\u6808\u6570\u636E\u5E93\u5FC5\u5907\u795E\u5668\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u{1F6E0}\uFE0F \u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u7CBE\u9009\u51FA\u6D77\u6536\u6B3E\u3001\u96F6\u8FD0\u7EF4\u90E8\u7F72\u3001UI \u751F\u6210\u4E0E\u5168\u6808\u6570\u636E\u5E93\u5FC5\u5907\u795E\u5668\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/models"),
              class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u{1F3C6} \u4E2A\u4EBA\u4F53\u611F\u6218\u529B\u699C</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u6A2A\u5411\u5BF9\u6BD4\u7EFC\u5408\u5206\u3001\u8F93\u5165\u8F93\u51FA\u5355\u4EF7\u3001\u6DF7\u5408\u4EF7\u4E0E\u5B9E\u6218\u5199\u4EE3\u7801\u4F53\u611F\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u{1F3C6} \u4E2A\u4EBA\u4F53\u611F\u6218\u529B\u699C"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u6A2A\u5411\u5BF9\u6BD4\u7EFC\u5408\u5206\u3001\u8F93\u5165\u8F93\u51FA\u5355\u4EF7\u3001\u6DF7\u5408\u4EF7\u4E0E\u5B9E\u6218\u5199\u4EE3\u7801\u4F53\u611F\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/gateways"),
              class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u26A1 \u9760\u8C31\u4E2D\u8F6C\u4E13\u7EBF</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u5B9E\u6D4B\u54CD\u5E94\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E\u771F\u6A21\u578B\u4E00\u81F4\u6027\uFF0C\u56FD\u5185\u514D\u7FFB\u76F4\u8FDE\u4F4E\u81F3 1 \u6298\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u26A1 \u9760\u8C31\u4E2D\u8F6C\u4E13\u7EBF"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u5B9E\u6D4B\u54CD\u5E94\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E\u771F\u6A21\u578B\u4E00\u81F4\u6027\uFF0C\u56FD\u5185\u514D\u7FFB\u76F4\u8FDE\u4F4E\u81F3 1 \u6298\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/coding-plans"),
              class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u{1F4E6} Coding Plan \u5BF9\u6BD4</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u4E3B\u6D41 IDE \u4E0E\u5B98\u65B9\u8BA2\u9605\u771F\u5B9E\u5355\u4EF7\u3001\u989D\u5EA6\u4E0A\u9650\u4E0E\u72EC\u5BB6\u907F\u5751\u6307\u5357\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u{1F4E6} Coding Plan \u5BF9\u6BD4"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u4E3B\u6D41 IDE \u4E0E\u5B98\u65B9\u8BA2\u9605\u771F\u5B9E\u5355\u4EF7\u3001\u989D\u5EA6\u4E0A\u9650\u4E0E\u72EC\u5BB6\u907F\u5751\u6307\u5357\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/projects"),
              class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u{1F680} \u771F\u5B9E\u843D\u5730\u9879\u76EE</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u7CBE\u9009\u4E00\u4EBA\u516C\u53F8\u5546\u4E1A\u95ED\u73AF\u6848\u4F8B\uFF0C\u900F\u660E\u516C\u5F00\u6280\u672F\u6808\u4E0E\u6BCF\u6708\u7B97\u529B\u8D26\u672C\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u{1F680} \u771F\u5B9E\u843D\u5730\u9879\u76EE"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u7CBE\u9009\u4E00\u4EBA\u516C\u53F8\u5546\u4E1A\u95ED\u73AF\u6848\u4F8B\uFF0C\u900F\u660E\u516C\u5F00\u6280\u672F\u6808\u4E0E\u6BCF\u6708\u7B97\u529B\u8D26\u672C\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/refactoring-the-self"),
              class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u{1F4D6} \u8FDE\u8F7D\u300A\u5E95\u5C42\u91CD\u6784\u300B</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u5FC3\u667A\u6A21\u578B\u3001\u9632\u5FA1\u673A\u5236\u4E0E\u601D\u7EF4\u67B6\u6784\u91CD\u5851\u6587\u96C6\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u{1F4D6} \u8FDE\u8F7D\u300A\u5E95\u5C42\u91CD\u6784\u300B"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u5FC3\u667A\u6A21\u578B\u3001\u9632\u5FA1\u673A\u5236\u4E0E\u601D\u7EF4\u67B6\u6784\u91CD\u5851\u6587\u96C6\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/blog"),
              class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5"${_scopeId2}><span class="flex items-center gap-1"${_scopeId2}>\u{1F4DD} \u5B9E\u6218\u535A\u5BA2 &amp; \u8E29\u5751</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u8BB0\u5F55\u4E00\u4EBA\u516C\u53F8\u5546\u4E1A\u95ED\u73AF\u3001AI \u5DE5\u4F5C\u6D41\u4E0E\u89C6\u9891\u914D\u5957\u8E29\u5751\u5B9E\u5F55\u3002 </p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, "\u{1F4DD} \u5B9E\u6218\u535A\u5BA2 & \u8E29\u5751"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        })
                      ]),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u8BB0\u5F55\u4E00\u4EBA\u516C\u53F8\u5546\u4E1A\u95ED\u73AF\u3001AI \u5DE5\u4F5C\u6D41\u4E0E\u89C6\u9891\u914D\u5957\u8E29\u5751\u5B9E\u5F55\u3002 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section><section class="border-t border-slate-100 dark:border-slate-800/80 pt-8"${_scopeId}><div class="flex items-center gap-2 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:database",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u6570\u636E\u6765\u6E90\u4E0E\u53E3\u5F84\u8BF4\u660E</h2></div><div class="space-y-4 text-sm md:text-[15px] leading-8 text-slate-600 dark:text-slate-300"${_scopeId}><p${_scopeId}><strong${_scopeId}>1. \u4E0D\u8DD1\u7384\u5B66\u57FA\u51C6\uFF1A</strong>\u4EF7\u683C\u3001\u4E0A\u4E0B\u6587\u957F\u5EA6\u3001\u8F93\u5165\u6A21\u6001\u7B49\u5BA2\u89C2\u89C4\u683C\uFF0C\u5747\u4E00\u6761\u6761\u4ECE\u5404\u5927\u5382\u5546\u7684\u5B98\u65B9\u5B9A\u4EF7\u9875\u548C\u6700\u65B0\u6587\u6863\u4E2D\u6838\u5BF9\u6458\u5F55\uFF1B\u80FD\u529B\u8BC4\u5206\u4E0E\u8F93\u51FA\u901F\u5EA6\u4E3B\u8981\u53C2\u8003 Artificial Analysis \u7B49\u516C\u5F00\u6743\u5A01\u699C\u5355\u3002\u6BCF\u4E00\u6761\u6570\u636E\u90FD\u5728\u6A21\u578B\u8BE6\u60C5\u9875\u6807\u6CE8\u4E86\u6838\u5BF9\u65E5\u671F\u4E0E\u6765\u6E90\u3002 </p><p${_scopeId}><strong${_scopeId}>2. \u6DF7\u5408\u5355\u4EF7\u5047\u8BBE\uFF1A</strong>\u4E3A\u4E86\u8BA9\u4E0D\u540C\u5382\u5546\u7684\u6807\u4EF7\u80FD\u5728\u540C\u4E00\u6807\u5C3A\u4E0B\u6A2A\u5411\u6BD4\u8F83\uFF0C\u672C\u7AD9\u5B9A\u4E49\u4E86\u300C\u6DF7\u5408\u5355\u4EF7\u300D\uFF1A\u8F93\u5165\u4EF7\u4E0E\u8F93\u51FA\u4EF7\u6309 <strong${_scopeId}>3:1</strong> \u52A0\u6743\uFF0C\u7F8E\u5143\u6807\u4EF7\u6309\u5B9E\u65F6\u6C47\u7387\u6298\u7B97\u4E3A\u4EBA\u6C11\u5E01\u3002\u8FD9\u662F\u672C\u7AD9\u8BBE\u5B9A\u7684\u8861\u91CF\u6A21\u578B\uFF0C\u975E\u5B98\u65B9\u7EDF\u4E00\u5B9A\u4E49\u3002 </p><p${_scopeId}><strong${_scopeId}>3. \u5F00\u6E90\u5F00\u653E API\uFF1A</strong>\u6574\u4E2A\u6570\u636E\u96C6\u652F\u6301\u901A\u8FC7\u516C\u5F00\u63A5\u53E3 <code class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-xs"${_scopeId}>/api/hoxi/models</code> \u8BFB\u53D6\uFF0C\u6B22\u8FCE\u5F00\u53D1\u8005\u7528\u4E8E\u4E2A\u4EBA\u63D2\u4EF6\u3001CLI \u5DE5\u5177\u6216\u72EC\u7ACB\u6BD4\u4EF7\u5DE5\u5177\u3002 </p></div></section><section class="border-t border-slate-100 dark:border-slate-800/80 pt-8"${_scopeId}><div class="flex items-center gap-2 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-circle",
              class: "w-5 h-5 text-amber-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u672C\u7AD9\u505A\u4E0D\u5230\u7684\u4E8B\uFF08\u8BDA\u5B9E\u5C40\u9650\uFF09</h2></div><div class="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300"${_scopeId}><div class="flex items-start gap-3"${_scopeId}><span class="font-bold text-slate-400 dark:text-slate-500 font-mono"${_scopeId}>01.</span><p${_scopeId}>\u6570\u636E\u9760\u7AD9\u957F\u4E2A\u4EBA\u5B9A\u671F\u7EF4\u62A4\uFF0C\u5382\u5546\u4E34\u65F6\u8C03\u4EF7\u3001\u4FC3\u9500\u5230\u671F\u6216\u7A81\u53D1\u53D8\u52A8\u53EF\u80FD\u5B58\u5728\u6EDE\u540E\u3002\u6B63\u5F0F\u5546\u4E1A\u51B3\u7B56\u8BF7\u52A1\u5FC5\u4EE5\u5382\u5546\u5B98\u65B9\u8BA1\u8D39\u9875\u4E3A\u51C6\u3002</p></div><div class="flex items-start gap-3"${_scopeId}><span class="font-bold text-slate-400 dark:text-slate-500 font-mono"${_scopeId}>02.</span><p${_scopeId}>\u6392\u884C\u699C\u4E2D\u7684\u90E8\u5206\u4F53\u611F\u70B9\u8BC4\u5C5E\u4E8E\u7AD9\u957F\u4E2A\u4EBA\u5199\u4EE3\u7801\u4E0E Debug \u7684\u4E3B\u89C2\u7F16\u8F91\u610F\u89C1\u3002\u5404\u4E1A\u52A1\u573A\u666F\u5DEE\u5F02\u5DE8\u5927\uFF0C\u4E0A\u751F\u4EA7\u73AF\u5883\u524D\u52A1\u5FC5\u62FF\u81EA\u5DF1\u7684\u4E1A\u52A1 Prompt \u4EB2\u81EA\u9A8C\u8BC1\u3002</p></div><div class="flex items-start gap-3"${_scopeId}><span class="font-bold text-slate-400 dark:text-slate-500 font-mono"${_scopeId}>03.</span><p${_scopeId}>\u9875\u9762\u4E2D\u663E\u793A\u300C\u2014\u300D\u4EE3\u8868\u8BE5\u9879\u672A\u67E5\u5230\u53EF\u6838\u5B9E\u7684\u6570\u636E\uFF0C\u7EDD\u4E0D\u4EE3\u8868\u8BE5\u9879\u4E3A\u96F6\u6216\u6A21\u578B\u8868\u73B0\u5DEE\u3002\u5B81\u53EF\u7559\u767D\uFF0C\u4E5F\u7EDD\u4E0D\u7F16\u9020\u865A\u5047\u6570\u5B57\u3002</p></div></div></section><section class="border-t border-slate-100 dark:border-slate-800/80 pt-8"${_scopeId}><div class="flex items-center gap-2 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:paper-plane-tilt",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u5F00\u59CB\u63A2\u7D22\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218</h2></div><div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/readiness"),
              class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-2xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:compass-bold",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u6D4B\u6D4B\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:compass-bold",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "\u6D4B\u6D4B\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/tools"),
              class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors shadow-2xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:wrench-bold",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u6D4F\u89C8\u5168\u6808\u5DE5\u5177\u7BB1</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:wrench-bold",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "\u6D4F\u89C8\u5168\u6808\u5DE5\u5177\u7BB1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/models"),
              class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:trophy",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u6A21\u578B\u6218\u529B\u699C</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:trophy",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "\u6A21\u578B\u6218\u529B\u699C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/gateways"),
              class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:broadcast",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u4E2D\u8F6C\u7AD9\u5929\u68AF</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:broadcast",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "\u4E2D\u8F6C\u7AD9\u5929\u68AF")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/coding-plans"),
              class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:credit-card",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>Coding Plan</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:credit-card",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "Coding Plan")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/blog"),
              class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:article",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u6280\u672F\u535A\u5BA2</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:article",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "\u6280\u672F\u535A\u5BA2")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/refactoring-the-self"),
              class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:book-open",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u8FDE\u8F7D\u300A\u5E95\u5C42\u91CD\u6784\u300B</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:book-open",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, "\u8FDE\u8F7D\u300A\u5E95\u5C42\u91CD\u6784\u300B")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-20 max-w-4xl mx-auto" }, [
                createVNode("div", { class: "text-center max-w-2xl mx-auto mb-12 md:mb-16" }, [
                  createVNode("span", { class: "inline-block text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full mb-3 border border-amber-200/60 dark:border-amber-800/60" }, " \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 \xB7 \u7AD9\u957F\u5FC3\u58F0 "),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, " \u5173\u4E8E\u5408\u559C AI "),
                  createVNode("p", { class: "mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u5584\u7528 AI\uFF0C\u4E00\u4EBA\u6210\u519B\uFF0C\u6EE1\u5FC3\u6B22\u559C\u3002\u8BB0\u5F55\u4E00\u4EBA\u516C\u53F8\u6210\u957F\u8DEF\u5F84\u3001\u6781\u7B80\u5168\u6808\u519B\u706B\u5E93\u4E0E\u5546\u4E1A\u95ED\u73AF\u3002 ")
                ]),
                createVNode("div", { class: "rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-gradient-to-br from-slate-50/80 via-white to-amber-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950 p-6 md:p-8 shadow-xs mb-12" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row items-center sm:items-start gap-6" }, [
                    createVNode("div", { class: "w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-black text-2xl shadow-md shrink-0" }, " \u559C "),
                    createVNode("div", { class: "text-center sm:text-left flex-1" }, [
                      createVNode("div", { class: "flex flex-wrap items-center justify-center sm:justify-start gap-2.5" }, [
                        createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u53EF\u4E50 (Coller)"),
                        createVNode("span", { class: "px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60" }, " \u4E00\u4EBA\u516C\u53F8\u63A2\u7D22\u8005 \xB7 \u5168\u6808\u72EC\u7ACB\u5F00\u53D1\u8005 ")
                      ]),
                      createVNode("p", { class: "mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" }, " \u505A\u8FD9\u884C\u8FD9\u4E9B\u5E74\uFF0C\u6211\u4E00\u76F4\u5728\u548C\u5404\u79CD\u5927\u6A21\u578B\u3001\u5F00\u53D1\u5DE5\u4F5C\u6D41\u4E0E\u5546\u4E1A\u95ED\u73AF\u6253\u4EA4\u9053\u3002\u624B\u4E0A\u8DD1\u7740\u4E00\u4EBA\u516C\u53F8\u4E1A\u52A1\u4E0E AI \u7F51\u5173\uFF0C\u6BCF\u5929\u76EF\u5404\u5BB6\u62A5\u4EF7\u3001\u6D4B\u6A21\u578B\u6218\u529B\u3001\u6D4B\u8BD5\u4E13\u7EBF\u7A33\u5B9A\u6027\u3002\u6211\u628A\u8FD9\u5957\u8E29\u5751\u6559\u8BAD\u3001\u6838\u7B97\u8D26\u672C\u4E0E\u5168\u6808\u519B\u706B\u5E93\u505A\u6210\u516C\u5F00\u7AD9\u70B9\uFF0C\u5206\u4EAB\u7ED9\u6BCF\u4E00\u4F4D\u60F3\u8981\u4F9D\u9760 AI \u653E\u5927\u4E2A\u4EBA\u6760\u6746\u3001\u4E00\u4EBA\u6210\u519B\u7684\u8D85\u7EA7\u4E2A\u4F53\u4E0E\u5F00\u53D1\u8005\u3002 "),
                      createVNode("div", { class: "mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400" }, [
                        createVNode("span", { class: "flex items-center gap-1.5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:cpu",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, "\u5DF2\u6536\u5F55 " + toDisplayString(unref(models).length) + " \u6B3E\u6838\u5FC3\u6A21\u578B", 1)
                        ]),
                        createVNode("span", { class: "flex items-center gap-1.5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:buildings",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, "\u6DB5\u76D6 " + toDisplayString(unref(vendors).length) + " \u5BB6\u4E3B\u6D41\u5382\u5546", 1)
                        ]),
                        unref(updatedAt) ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex items-center gap-1.5"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:calendar-check",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, "\u6570\u636E\u6838\u5BF9\u4E8E " + toDisplayString(unref(updatedAt)), 1)
                        ])) : createCommentVNode("", true),
                        createVNode("a", {
                          href: "https://github.com/hoxiai",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:github-logo",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "GitHub @hoxiai")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-12 md:space-y-16" }, [
                  createVNode("section", { class: "border-t border-slate-100 dark:border-slate-800/80 pt-8" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:compass",
                        class: "w-5 h-5 text-blue-500"
                      }),
                      createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u4E3A\u4EC0\u4E48\u505A\u5408\u559C AI\uFF1F")
                    ]),
                    createVNode("div", { class: "space-y-4 text-sm md:text-[15px] leading-8 text-slate-600 dark:text-slate-300" }, [
                      createVNode("p", null, [
                        createTextVNode(" \u4E00\u4E2A\u4EBA\u6210\u519B\uFF0C\u6700\u5927\u7684\u963B\u788D\u5F80\u5F80\u4E0D\u662F\u5199\u4E0D\u51FA\u4EE3\u7801\uFF0C\u800C\u662F"),
                        createVNode("strong", null, "\u5927\u5382\u804C\u4E1A\u75C5\u3001\u4EE3\u7801\u81EA\u55E8\u3001\u5DE5\u5177\u94FE\u81C3\u80BF\u3001\u4E0D\u6562\u6536\u8D39\u4E0E\u7B97\u529B\u6210\u672C\u5931\u63A7"),
                        createTextVNode("\u3002\u6211\u505A\u8FD9\u4E2A\u7AD9\uFF0C\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u4E00\u4EBA\u516C\u53F8\u6210\u957F\u8DEF\u4E0A\u7684\u4E09\u5927\u73B0\u5B9E\u75DB\u70B9\uFF1A ")
                      ]),
                      createVNode("div", { class: "grid sm:grid-cols-3 gap-4 my-2" }, [
                        createVNode("div", { class: "rounded-2xl p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1" }, "\u5173\u5361\u4E00"),
                            createVNode("div", { class: "text-sm font-semibold text-slate-800 dark:text-slate-200" }, "\u80FD\u529B\u4E0E\u5FC3\u667A\u56F0\u5C40"),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal" }, " \u7A0B\u5E8F\u5458\u6B7B\u4E8E\u8FC7\u5EA6\u8BBE\u8BA1\uFF0C\u4EA7\u54C1\u4EBA\u6B7B\u4E8E\u4EA4\u4ED8\u65AD\u5D16\u3002\u901A\u8FC7 12 \u9053\u4E24\u96BE\u9898\u6D4B\u8BC4\uFF0C\u6D4B\u51FA\u81F4\u547D\u77ED\u677F\u4E0E\u907F\u5751\u5904\u65B9\u3002 ")
                          ]),
                          createVNode("div", { class: "mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-blue-600 dark:text-blue-400 font-mono" }, " \u2192 /readiness \u80FD\u529B\u4F53\u68C0 ")
                        ]),
                        createVNode("div", { class: "rounded-2xl p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1" }, "\u5173\u5361\u4E8C"),
                            createVNode("div", { class: "text-sm font-semibold text-slate-800 dark:text-slate-200" }, "\u6781\u7B80\u5168\u6808\u519B\u706B\u5E93"),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal" }, " \u6253\u901A\u201CUI\u751F\u6210 \u2192 AI\u8F85\u52A9\u7F16\u7A0B \u2192 \u96F6\u8FD0\u7EF4\u4E0A\u7EBF \u2192 \u5168\u7403\u6536\u7F8E\u91D1\u201D\uFF0C\u62D2\u7EDD\u590D\u6742\u67B6\u6784\uFF0C\u7CBE\u9009\u771F\u91D1\u767D\u94F6\u81EA\u7528\u5DE5\u5177\u3002 ")
                          ]),
                          createVNode("div", { class: "mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-amber-600 dark:text-amber-400 font-mono" }, " \u2192 /tools \u5168\u6808\u5DE5\u5177\u7BB1 ")
                        ]),
                        createVNode("div", { class: "rounded-2xl p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex flex-col justify-between" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1" }, "\u5173\u5361\u4E09"),
                            createVNode("div", { class: "text-sm font-semibold text-slate-800 dark:text-slate-200" }, "\u7B97\u529B\u964D\u672C\u4E0E\u5546\u4E1A\u95ED\u73AF"),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal" }, " \u62D2\u7EDD\u865A\u6807\u8DD1\u5206\u4E0E\u6708\u79DF\u7ED1\u67B6\uFF0C\u5B9E\u6D4B\u4F53\u611F\u5929\u68AF\u4E0E\u56FD\u5185\u76F4\u8FDE\u4E13\u7EBF\uFF0C\u4ECE\u6708\u82B1 \xA51500 \u538B\u5230 \xA580 \u4EE5\u5185\u3002 ")
                          ]),
                          createVNode("div", { class: "mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-mono" }, " \u2192 /savings \u7B97\u529B\u7701\u94B1\u65B9\u6848 ")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "border-t border-slate-100 dark:border-slate-800/80 pt-8" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:grid-four",
                        class: "w-5 h-5 text-blue-500"
                      }),
                      createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u5408\u559C AI \u6838\u5FC3\u652F\u6491\u77E9\u9635")
                    ]),
                    createVNode("div", { class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4" }, [
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/projects"),
                        class: "group p-4 rounded-2xl border border-blue-200/80 dark:border-blue-800/80 bg-blue-50/30 dark:bg-blue-950/20 hover:border-blue-500/60 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u{1F680} AI \u5B9E\u6218\u9879\u76EE\u5E93"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u8DD1\u901A\u5546\u4E1A\u95ED\u73AF\u7684\u771F\u5B9E\u843D\u5730\u9879\u76EE\uFF0C\u62C6\u89E3\u6A21\u578B\u9009\u578B\u4E0E\u6708\u7B97\u529B\u8D26\u672C\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/readiness"),
                        class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u{1F9ED} \u5C31\u7EEA\u5EA6\u80FD\u529B\u4F53\u68C0"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, " 12 \u9053\u5B9E\u6218\u60C5\u5883\u9898\uFF0C\u4E94\u7EF4\u96F7\u8FBE\u6DF1\u5EA6\u8BCA\u65AD\u5546\u4E1A\u3001\u4EA4\u4ED8\u4E0E\u5206\u53D1\u77ED\u677F\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/tools"),
                        class: "group p-4 rounded-2xl border border-amber-200/80 dark:border-amber-800/80 bg-amber-50/30 dark:bg-amber-950/20 hover:border-amber-500/60 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u{1F6E0}\uFE0F \u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u7CBE\u9009\u51FA\u6D77\u6536\u6B3E\u3001\u96F6\u8FD0\u7EF4\u90E8\u7F72\u3001UI \u751F\u6210\u4E0E\u5168\u6808\u6570\u636E\u5E93\u5FC5\u5907\u795E\u5668\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/models"),
                        class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u{1F3C6} \u4E2A\u4EBA\u4F53\u611F\u6218\u529B\u699C"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u6A2A\u5411\u5BF9\u6BD4\u7EFC\u5408\u5206\u3001\u8F93\u5165\u8F93\u51FA\u5355\u4EF7\u3001\u6DF7\u5408\u4EF7\u4E0E\u5B9E\u6218\u5199\u4EE3\u7801\u4F53\u611F\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/gateways"),
                        class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u26A1 \u9760\u8C31\u4E2D\u8F6C\u4E13\u7EBF"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u5B9E\u6D4B\u54CD\u5E94\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E\u771F\u6A21\u578B\u4E00\u81F4\u6027\uFF0C\u56FD\u5185\u514D\u7FFB\u76F4\u8FDE\u4F4E\u81F3 1 \u6298\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/coding-plans"),
                        class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u{1F4E6} Coding Plan \u5BF9\u6BD4"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u4E3B\u6D41 IDE \u4E0E\u5B98\u65B9\u8BA2\u9605\u771F\u5B9E\u5355\u4EF7\u3001\u989D\u5EA6\u4E0A\u9650\u4E0E\u72EC\u5BB6\u907F\u5751\u6307\u5357\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/projects"),
                        class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u{1F680} \u771F\u5B9E\u843D\u5730\u9879\u76EE"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u7CBE\u9009\u4E00\u4EBA\u516C\u53F8\u5546\u4E1A\u95ED\u73AF\u6848\u4F8B\uFF0C\u900F\u660E\u516C\u5F00\u6280\u672F\u6808\u4E0E\u6BCF\u6708\u7B97\u529B\u8D26\u672C\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/refactoring-the-self"),
                        class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u{1F4D6} \u8FDE\u8F7D\u300A\u5E95\u5C42\u91CD\u6784\u300B"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u5FC3\u667A\u6A21\u578B\u3001\u9632\u5FA1\u673A\u5236\u4E0E\u601D\u7EF4\u67B6\u6784\u91CD\u5851\u6587\u96C6\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/blog"),
                        class: "group p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 mb-1.5" }, [
                              createVNode("span", { class: "flex items-center gap-1" }, "\u{1F4DD} \u5B9E\u6218\u535A\u5BA2 & \u8E29\u5751"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                              })
                            ]),
                            createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" }, " \u8BB0\u5F55\u4E00\u4EBA\u516C\u53F8\u5546\u4E1A\u95ED\u73AF\u3001AI \u5DE5\u4F5C\u6D41\u4E0E\u89C6\u9891\u914D\u5957\u8E29\u5751\u5B9E\u5F55\u3002 ")
                          ])
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])
                  ]),
                  createVNode("section", { class: "border-t border-slate-100 dark:border-slate-800/80 pt-8" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:database",
                        class: "w-5 h-5 text-blue-500"
                      }),
                      createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u6570\u636E\u6765\u6E90\u4E0E\u53E3\u5F84\u8BF4\u660E")
                    ]),
                    createVNode("div", { class: "space-y-4 text-sm md:text-[15px] leading-8 text-slate-600 dark:text-slate-300" }, [
                      createVNode("p", null, [
                        createVNode("strong", null, "1. \u4E0D\u8DD1\u7384\u5B66\u57FA\u51C6\uFF1A"),
                        createTextVNode("\u4EF7\u683C\u3001\u4E0A\u4E0B\u6587\u957F\u5EA6\u3001\u8F93\u5165\u6A21\u6001\u7B49\u5BA2\u89C2\u89C4\u683C\uFF0C\u5747\u4E00\u6761\u6761\u4ECE\u5404\u5927\u5382\u5546\u7684\u5B98\u65B9\u5B9A\u4EF7\u9875\u548C\u6700\u65B0\u6587\u6863\u4E2D\u6838\u5BF9\u6458\u5F55\uFF1B\u80FD\u529B\u8BC4\u5206\u4E0E\u8F93\u51FA\u901F\u5EA6\u4E3B\u8981\u53C2\u8003 Artificial Analysis \u7B49\u516C\u5F00\u6743\u5A01\u699C\u5355\u3002\u6BCF\u4E00\u6761\u6570\u636E\u90FD\u5728\u6A21\u578B\u8BE6\u60C5\u9875\u6807\u6CE8\u4E86\u6838\u5BF9\u65E5\u671F\u4E0E\u6765\u6E90\u3002 ")
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "2. \u6DF7\u5408\u5355\u4EF7\u5047\u8BBE\uFF1A"),
                        createTextVNode("\u4E3A\u4E86\u8BA9\u4E0D\u540C\u5382\u5546\u7684\u6807\u4EF7\u80FD\u5728\u540C\u4E00\u6807\u5C3A\u4E0B\u6A2A\u5411\u6BD4\u8F83\uFF0C\u672C\u7AD9\u5B9A\u4E49\u4E86\u300C\u6DF7\u5408\u5355\u4EF7\u300D\uFF1A\u8F93\u5165\u4EF7\u4E0E\u8F93\u51FA\u4EF7\u6309 "),
                        createVNode("strong", null, "3:1"),
                        createTextVNode(" \u52A0\u6743\uFF0C\u7F8E\u5143\u6807\u4EF7\u6309\u5B9E\u65F6\u6C47\u7387\u6298\u7B97\u4E3A\u4EBA\u6C11\u5E01\u3002\u8FD9\u662F\u672C\u7AD9\u8BBE\u5B9A\u7684\u8861\u91CF\u6A21\u578B\uFF0C\u975E\u5B98\u65B9\u7EDF\u4E00\u5B9A\u4E49\u3002 ")
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "3. \u5F00\u6E90\u5F00\u653E API\uFF1A"),
                        createTextVNode("\u6574\u4E2A\u6570\u636E\u96C6\u652F\u6301\u901A\u8FC7\u516C\u5F00\u63A5\u53E3 "),
                        createVNode("code", { class: "px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-xs" }, "/api/hoxi/models"),
                        createTextVNode(" \u8BFB\u53D6\uFF0C\u6B22\u8FCE\u5F00\u53D1\u8005\u7528\u4E8E\u4E2A\u4EBA\u63D2\u4EF6\u3001CLI \u5DE5\u5177\u6216\u72EC\u7ACB\u6BD4\u4EF7\u5DE5\u5177\u3002 ")
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "border-t border-slate-100 dark:border-slate-800/80 pt-8" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:warning-circle",
                        class: "w-5 h-5 text-amber-500"
                      }),
                      createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u672C\u7AD9\u505A\u4E0D\u5230\u7684\u4E8B\uFF08\u8BDA\u5B9E\u5C40\u9650\uFF09")
                    ]),
                    createVNode("div", { class: "space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300" }, [
                      createVNode("div", { class: "flex items-start gap-3" }, [
                        createVNode("span", { class: "font-bold text-slate-400 dark:text-slate-500 font-mono" }, "01."),
                        createVNode("p", null, "\u6570\u636E\u9760\u7AD9\u957F\u4E2A\u4EBA\u5B9A\u671F\u7EF4\u62A4\uFF0C\u5382\u5546\u4E34\u65F6\u8C03\u4EF7\u3001\u4FC3\u9500\u5230\u671F\u6216\u7A81\u53D1\u53D8\u52A8\u53EF\u80FD\u5B58\u5728\u6EDE\u540E\u3002\u6B63\u5F0F\u5546\u4E1A\u51B3\u7B56\u8BF7\u52A1\u5FC5\u4EE5\u5382\u5546\u5B98\u65B9\u8BA1\u8D39\u9875\u4E3A\u51C6\u3002")
                      ]),
                      createVNode("div", { class: "flex items-start gap-3" }, [
                        createVNode("span", { class: "font-bold text-slate-400 dark:text-slate-500 font-mono" }, "02."),
                        createVNode("p", null, "\u6392\u884C\u699C\u4E2D\u7684\u90E8\u5206\u4F53\u611F\u70B9\u8BC4\u5C5E\u4E8E\u7AD9\u957F\u4E2A\u4EBA\u5199\u4EE3\u7801\u4E0E Debug \u7684\u4E3B\u89C2\u7F16\u8F91\u610F\u89C1\u3002\u5404\u4E1A\u52A1\u573A\u666F\u5DEE\u5F02\u5DE8\u5927\uFF0C\u4E0A\u751F\u4EA7\u73AF\u5883\u524D\u52A1\u5FC5\u62FF\u81EA\u5DF1\u7684\u4E1A\u52A1 Prompt \u4EB2\u81EA\u9A8C\u8BC1\u3002")
                      ]),
                      createVNode("div", { class: "flex items-start gap-3" }, [
                        createVNode("span", { class: "font-bold text-slate-400 dark:text-slate-500 font-mono" }, "03."),
                        createVNode("p", null, "\u9875\u9762\u4E2D\u663E\u793A\u300C\u2014\u300D\u4EE3\u8868\u8BE5\u9879\u672A\u67E5\u5230\u53EF\u6838\u5B9E\u7684\u6570\u636E\uFF0C\u7EDD\u4E0D\u4EE3\u8868\u8BE5\u9879\u4E3A\u96F6\u6216\u6A21\u578B\u8868\u73B0\u5DEE\u3002\u5B81\u53EF\u7559\u767D\uFF0C\u4E5F\u7EDD\u4E0D\u7F16\u9020\u865A\u5047\u6570\u5B57\u3002")
                      ])
                    ])
                  ]),
                  createVNode("section", { class: "border-t border-slate-100 dark:border-slate-800/80 pt-8" }, [
                    createVNode("div", { class: "flex items-center gap-2 mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:paper-plane-tilt",
                        class: "w-5 h-5 text-blue-500"
                      }),
                      createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u5F00\u59CB\u63A2\u7D22\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218")
                    ]),
                    createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/readiness"),
                        class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-2xs"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:compass-bold",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "\u6D4B\u6D4B\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/tools"),
                        class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold transition-colors shadow-2xs"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:wrench-bold",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "\u6D4F\u89C8\u5168\u6808\u5DE5\u5177\u7BB1")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/models"),
                        class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:trophy",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "\u6A21\u578B\u6218\u529B\u699C")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/gateways"),
                        class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:broadcast",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "\u4E2D\u8F6C\u7AD9\u5929\u68AF")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/coding-plans"),
                        class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:credit-card",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "Coding Plan")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/blog"),
                        class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:article",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "\u6280\u672F\u535A\u5BA2")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/refactoring-the-self"),
                        class: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:border-slate-400 transition-colors"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:book-open",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "\u8FDE\u8F7D\u300A\u5E95\u5C42\u91CD\u6784\u300B")
                        ]),
                        _: 1
                      }, 8, ["to"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
