import { u as useI18n, D as useLocaleRouter, O as __nuxt_component_3$3, _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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
import 'node:fs/promises';
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
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const previewDimensions = computed(() => [
      { name: t("hoxi.homeReadiness.dim1Name"), focus: t("hoxi.homeReadiness.dim1Focus"), icon: "ph:coins-bold", color: "text-amber-500", barColor: "bg-amber-500", barWidth: "78%" },
      { name: t("hoxi.homeReadiness.dim2Name"), focus: t("hoxi.homeReadiness.dim2Focus"), icon: "ph:code-bold", color: "text-blue-500", barColor: "bg-blue-500", barWidth: "85%" },
      { name: t("hoxi.homeReadiness.dim3Name"), focus: t("hoxi.homeReadiness.dim3Focus"), icon: "ph:megaphone-simple-bold", color: "text-indigo-500", barColor: "bg-indigo-500", barWidth: "60%" },
      { name: t("hoxi.homeReadiness.dim4Name"), focus: t("hoxi.homeReadiness.dim4Focus"), icon: "ph:calculator-bold", color: "text-emerald-500", barColor: "bg-emerald-500", barWidth: "90%" },
      { name: t("hoxi.homeReadiness.dim5Name"), focus: t("hoxi.homeReadiness.dim5Focus"), icon: "ph:shield-check-bold", color: "text-slate-600 dark:text-slate-300", barColor: "bg-slate-500", barWidth: "70%" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$Y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950 p-4 sm:p-6 md:p-8 shadow-xs" }, _attrs))}><div class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl"></div><div class="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl"></div><div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8"><div class="max-w-xl space-y-3 sm:space-y-4"><div class="flex flex-wrap items-center gap-2"><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/60 shadow-2xs"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span><span>${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.badge"))}</span></span></div><h2 class="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.title"))}</h2><p class="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.subtitle"))}</p><div class="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 text-xs"><span class="text-slate-400 dark:text-slate-500 font-medium text-[11px] sm:text-xs">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.roleLabel"))}</span><span class="inline-flex items-center gap-1 rounded-md bg-white/80 dark:bg-slate-800 px-2 py-0.5 sm:py-1 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs font-mono text-[10px] sm:text-[11px]">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.roleEng"))}</span><span class="inline-flex items-center gap-1 rounded-md bg-white/80 dark:bg-slate-800 px-2 py-0.5 sm:py-1 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs font-mono text-[10px] sm:text-[11px]">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.rolePm"))}</span><span class="inline-flex items-center gap-1 rounded-md bg-white/80 dark:bg-slate-800 px-2 py-0.5 sm:py-1 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs font-mono text-[10px] sm:text-[11px]">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.roleDesign"))}</span><span class="inline-flex items-center gap-1 rounded-md bg-white/80 dark:bg-slate-800 px-2 py-0.5 sm:py-1 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 shadow-2xs font-mono text-[10px] sm:text-[11px]">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.roleGrowth"))}</span></div><div class="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/readiness"),
        class: "inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.startBtn"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeReadiness.startBtn")), 1),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "w-4 h-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-[11px] text-slate-400 dark:text-slate-500 font-mono">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.durationNote"))}</span></div></div><div class="shrink-0 w-full sm:w-auto lg:w-72 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-4 shadow-2xs backdrop-blur-xs space-y-3"><div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2"><div class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-polar-bold",
        class: "w-4 h-4 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.dimTitle"))}</span></div><span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.dimSample"))}</span></div><div class="space-y-2"><!--[-->`);
      ssrRenderList(previewDimensions.value, (item) => {
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
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.homeReadiness.dimCta"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.homeReadiness.dimCta")), 1)
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
//# sourceMappingURL=HoxiHomeReadiness-CxjdzgG7.mjs.map
