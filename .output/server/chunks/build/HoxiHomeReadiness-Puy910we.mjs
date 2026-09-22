import { aM as useLocaleRouter, a as __nuxt_component_3$1, b as _sfc_main$G } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiHomeReadiness",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const previewDimensions = [
      { name: "\u5546\u4E1A\u4E0E\u9A8C\u8BC1\u55C5\u89C9", focus: "MVP\u6536\u8D39\u9A8C\u8BC1", icon: "ph:coins-bold", color: "text-amber-500", barColor: "bg-amber-500", barWidth: "78%" },
      { name: "\u5168\u6808 AI \u4EA4\u4ED8\u529B", focus: "\u7AEF\u5230\u7AEF\u4EA4\u4ED8", icon: "ph:code-bold", color: "text-blue-500", barColor: "bg-blue-500", barWidth: "85%" },
      { name: "\u6D41\u91CF\u4E0E\u5206\u53D1\u529B", focus: "\u51B7\u542F\u52A8\u5206\u53D1", icon: "ph:megaphone-simple-bold", color: "text-indigo-500", barColor: "bg-indigo-500", barWidth: "60%" },
      { name: "\u6210\u672C\u6838\u7B97\u4E0E\u6760\u6746", focus: "\u7B97\u529B\u6210\u672C\u6838\u7B97", icon: "ph:calculator-bold", color: "text-emerald-500", barColor: "bg-emerald-500", barWidth: "90%" },
      { name: "\u5FC3\u667A\u8DD1\u9053\u4E0E\u97E7\u6027", focus: "\u6297\u632B\u4E0E\u6B62\u635F", icon: "ph:shield-check-bold", color: "text-slate-600 dark:text-slate-300", barColor: "bg-slate-500", barWidth: "70%" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$G;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-blue-50/30 via-white to-amber-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950 p-4 sm:p-6 md:p-8 shadow-xs" }, _attrs))}><div class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl"></div><div class="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-amber-500/10 dark:bg-amber-500/15 blur-3xl"></div><div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8"><div class="max-w-xl space-y-3 sm:space-y-4"><div class="flex flex-wrap items-center gap-2"><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span><span>\u5C31\u7EEA\u5EA6\u6D4B\u8BC4</span></span></div><h2 class="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug"> \u505A\u4E00\u4EBA\u516C\u53F8\uFF0C\u4F60\u8FD8\u5DEE\u54EA\u4E00\u5757\uFF1F </h2><p class="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"> 12 \u9053\u60C5\u666F\u9898\uFF0C\u770B\u4F60\u5728\u9A8C\u8BC1\u3001\u4EA4\u4ED8\u3001\u5206\u53D1\u3001\u6210\u672C\u548C\u5FC3\u6001\u4E0A\u7684\u77ED\u677F\u3002 </p><div class="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 text-xs"><span class="text-slate-400 dark:text-slate-500 font-medium text-[11px] sm:text-xs">\u6309\u5C97\u4F4D\u51FA\u9898\uFF1A</span><span class="inline-flex items-center gap-1 rounded-md bg-white/80 dark:bg-slate-800 px-2 py-0.5 sm:py-1 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs font-mono text-[10px] sm:text-[11px]"> \u5DE5\u7A0B\u5E08 </span><span class="inline-flex items-center gap-1 rounded-md bg-white/80 dark:bg-slate-800 px-2 py-0.5 sm:py-1 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs font-mono text-[10px] sm:text-[11px]"> \u4EA7\u54C1\u7ECF\u7406 </span><span class="inline-flex items-center gap-1 rounded-md bg-white/80 dark:bg-slate-800 px-2 py-0.5 sm:py-1 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs font-mono text-[10px] sm:text-[11px]"> \u8BBE\u8BA1\u5E08 </span><span class="inline-flex items-center gap-1 rounded-md bg-white/80 dark:bg-slate-800 px-2 py-0.5 sm:py-1 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs font-mono text-[10px] sm:text-[11px]"> \u8FD0\u8425\u589E\u957F </span></div><div class="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/readiness"),
        class: "inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u5F00\u59CB\u6D4B\u8BC4</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u5F00\u59CB\u6D4B\u8BC4"),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "w-4 h-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-[11px] text-slate-400 dark:text-slate-500 font-mono">\u514D\u767B\u5F55 \xB7 \u7EA6 3 \u5206\u949F</span></div></div><div class="shrink-0 w-full sm:w-auto lg:w-72 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-4 shadow-2xs backdrop-blur-xs space-y-3"><div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2"><div class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-polar-bold",
        class: "w-4 h-4 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>\u4E94\u4E2A\u7EF4\u5EA6</span></div><span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">\u793A\u4F8B</span></div><div class="space-y-2"><!--[-->`);
      ssrRenderList(previewDimensions, (item) => {
        _push(`<div class="space-y-1"><div class="flex items-center justify-between text-[11px]"><span class="text-slate-600 dark:text-slate-300 font-medium flex items-center gap-1">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: ["w-3 h-3", item.color]
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item.name)}</span></span><span class="text-[10px] text-slate-400 font-mono dark:text-slate-500">${ssrInterpolate(item.focus)}</span></div><div class="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden"><div class="${ssrRenderClass([item.barColor, "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: item.barWidth })}"></div></div></div>`);
      });
      _push(`<!--]--></div><div class="pt-1 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/readiness"),
        class: "text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u770B\u770B\u6BCF\u4E2A\u7EF4\u5EA6\u6D4B\u4EC0\u4E48 \u2192 `);
          } else {
            return [
              createTextVNode(" \u770B\u770B\u6BCF\u4E2A\u7EF4\u5EA6\u6D4B\u4EC0\u4E48 \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiHomeReadiness.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "HoxiHomeReadiness" });

export { __nuxt_component_2 as default };
