import { u as useI18n, j as _sfc_main$10 } from './server.mjs';
import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { l as localizeDimensions } from './readiness-i18n-JBjMTJkv.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';
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
  __name: "HoxiReadinessQuestion",
  __ssrInlineRender: true,
  props: {
    question: {},
    selectedOptionIndex: {},
    currentIndex: {},
    totalQuestions: {}
  },
  emits: ["select", "next", "prev"],
  setup(__props) {
    const props = __props;
    const { locale } = useI18n();
    const isEn = computed(() => {
      const value = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
      return value.toLowerCase().startsWith("en");
    });
    const dimensions = computed(() => localizeDimensions(isEn.value));
    const dimensionName = computed(() => {
      var _a;
      return ((_a = dimensions.value[props.question.dimensionFocus]) == null ? void 0 : _a.name) || props.question.dimensionFocus;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-xs transition-all dark:border-slate-800 dark:bg-slate-900" }, _attrs))}><div class="flex items-center justify-between gap-3 mb-4"><div class="flex items-center gap-2"><span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">${ssrInterpolate(__props.question.category)}</span><span class="text-xs text-slate-400 font-mono dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.readiness.questionIndex", { current: __props.currentIndex + 1, total: __props.totalQuestions }))}</span></div><div class="text-xs text-slate-400 font-medium flex items-center gap-1 dark:text-slate-500"><span>${ssrInterpolate(_ctx.$t("hoxi.readiness.focusLabel"))}</span><span class="text-slate-700 font-semibold dark:text-slate-300">${ssrInterpolate(dimensionName.value)}</span></div></div><h2 class="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-2 dark:text-white">${ssrInterpolate(__props.question.title)}</h2><p class="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5 sm:mb-6 dark:text-slate-400">${ssrInterpolate(__props.question.scenario)}</p><div class="space-y-3"><!--[-->`);
      ssrRenderList(__props.question.options, (option, idx) => {
        _push(`<button type="button" class="${ssrRenderClass([__props.selectedOptionIndex === idx ? "border-blue-500 bg-blue-50/40 text-slate-900 shadow-xs dark:bg-blue-950/40 dark:text-white" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-800/80 dark:text-slate-300", "w-full text-left rounded-xl p-3.5 sm:p-4 border transition-all flex flex-col group relative"])}"><div class="flex items-start gap-3"><span class="${ssrRenderClass([__props.selectedOptionIndex === idx ? "bg-blue-500 text-white" : "border border-slate-300 text-slate-500 group-hover:border-slate-400 group-hover:text-slate-700 dark:border-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300", "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-mono font-bold transition-colors"])}">${ssrInterpolate(option.label)}</span><span class="text-sm md:text-[15px] leading-relaxed flex-1 pt-0.5">${ssrInterpolate(option.text)}</span></div>`);
        if (__props.selectedOptionIndex === idx) {
          _push(`<div class="mt-3 pt-2.5 border-t border-blue-100 flex items-start gap-2 text-xs text-slate-600 bg-white/70 rounded-lg p-2.5 dark:border-blue-800/60 dark:text-slate-300 dark:bg-slate-900/70">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:lightbulb-filament-bold",
            class: "w-4 h-4 text-amber-500 shrink-0 mt-0.5"
          }, null, _parent));
          _push(`<span class="leading-relaxed"><strong class="text-slate-800 font-medium dark:text-slate-200">${ssrInterpolate(_ctx.$t("hoxi.readiness.realFeedback"))}</strong><span class="ml-1">${ssrInterpolate(option.insight)}</span></span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></div><div class="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between dark:border-slate-800">`);
      if (__props.currentIndex > 0) {
        _push(`<button type="button" class="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors py-2 px-3 rounded-lg hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-left",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.readiness.prevBtn"))}</span></button>`);
      } else {
        _push(`<div></div>`);
      }
      _push(`<button type="button"${ssrIncludeBooleanAttr(__props.selectedOptionIndex === void 0) ? " disabled" : ""} class="${ssrRenderClass([__props.selectedOptionIndex !== void 0 ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" : "bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500", "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-xs"])}"><span>${ssrInterpolate(__props.currentIndex === __props.totalQuestions - 1 ? _ctx.$t("hoxi.readiness.viewReport") : _ctx.$t("hoxi.readiness.nextBtn"))}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: __props.currentIndex === __props.totalQuestions - 1 ? "ph:sparkle" : "ph:arrow-right",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiReadinessQuestion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "HoxiReadinessQuestion" });

export { __nuxt_component_4 as default };
//# sourceMappingURL=HoxiReadinessQuestion-jsKusGyA.mjs.map
