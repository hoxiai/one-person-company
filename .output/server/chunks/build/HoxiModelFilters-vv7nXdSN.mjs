import { f as useI18n, b as _sfc_main$G } from './server.mjs';
import __nuxt_component_1 from './HoxiVendorDot-BLwK_ZsG.mjs';
import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiModelFilters",
  __ssrInlineRender: true,
  props: {
    vendors: {},
    selectedVendors: { default: () => [] },
    reasoning: { type: Boolean },
    maxPrice: {},
    searchQuery: { default: "" },
    selectedScene: { default: "all" },
    viewMode: { default: "table" }
  },
  emits: ["update:selectedVendors", "update:reasoning", "update:maxPrice", "update:searchQuery", "update:selectedScene", "update:viewMode", "reset"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const priceOptions = [1, 2, 5, 10, 50];
    const sceneOptions = computed(() => [
      { key: "all", label: t("hoxi.models.scenes.all"), icon: "\u2728" },
      { key: "coding", label: t("hoxi.models.scenes.coding"), icon: "\u{1F4BB}" },
      { key: "reasoning", label: t("hoxi.models.scenes.reasoning"), icon: "\u{1F9E0}" },
      { key: "budget", label: t("hoxi.models.scenes.budget"), icon: "\u{1F4B8}" },
      { key: "longContext", label: t("hoxi.models.scenes.longContext"), icon: "\u{1F4DA}" }
    ]);
    const hasActiveFilter = computed(
      () => props.selectedVendors.length > 0 || props.reasoning !== void 0 || props.maxPrice !== void 0 || props.searchQuery.trim().length > 0 || props.selectedScene && props.selectedScene !== "all"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_HoxiVendorDot = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3"><div class="relative flex-1 max-w-md">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass",
        class: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none dark:text-slate-500"
      }, null, _parent));
      _push(`<input type="text"${ssrRenderAttr("value", __props.searchQuery)}${ssrRenderAttr("placeholder", _ctx.$t("hoxi.models.searchPlaceholder"))} class="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 transition-colors shadow-2xs">`);
      if (__props.searchQuery) {
        _push(`<button type="button" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 dark:text-slate-500">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl self-start sm:self-auto shrink-0 border border-slate-200/60 dark:border-slate-700/60"><button type="button" class="${ssrRenderClass([__props.viewMode === "table" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:table-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.models.viewMode.table"))}</span></button><button type="button" class="${ssrRenderClass([__props.viewMode === "cards" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:squares-four-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.models.viewMode.cards"))}</span></button></div></div><div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"><span class="text-xs font-medium text-slate-400 dark:text-slate-500 shrink-0">\u573A\u666F\u9884\u8BBE\uFF1A</span><div class="flex items-center gap-1.5 shrink-0"><!--[-->`);
      ssrRenderList(sceneOptions.value, (scene) => {
        _push(`<button type="button" class="${ssrRenderClass([__props.selectedScene === scene.key ? "bg-blue-500 text-white border-blue-500 shadow-2xs" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 hover:text-blue-500 dark:hover:border-slate-700", "px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 border"])}"><span>${ssrInterpolate(scene.icon)}</span><span>${ssrInterpolate(scene.label)}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1"><div class="flex flex-wrap items-center gap-1.5"><span class="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.models.filters.vendor"))}</span><!--[-->`);
      ssrRenderList(__props.vendors, (vendor) => {
        _push(`<button type="button" class="${ssrRenderClass([__props.selectedVendors.includes(vendor.slug) ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50" : "bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-500 dark:hover:text-blue-400 border border-transparent", "rounded-full px-2.5 py-0.5 text-xs transition-colors"])}"${ssrRenderAttr("aria-pressed", __props.selectedVendors.includes(vendor.slug))}><span class="inline-flex items-center gap-1.5">`);
        _push(ssrRenderComponent(_component_HoxiVendorDot, { vendor }, null, _parent));
        _push(` ${ssrInterpolate(vendor.nameZh)}</span></button>`);
      });
      _push(`<!--]--></div><div class="flex items-center gap-2"><label class="text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500" for="hoxi-max-price">${ssrInterpolate(_ctx.$t("hoxi.models.filters.maxPrice"))}</label><select id="hoxi-max-price" class="rounded-full bg-slate-50 dark:bg-slate-900 px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 transition-colors hover:text-blue-500"${ssrRenderAttr("value", __props.maxPrice === void 0 ? "" : String(__props.maxPrice))}><option value="">${ssrInterpolate(_ctx.$t("hoxi.models.filters.noLimit"))}</option><!--[-->`);
      ssrRenderList(priceOptions, (option) => {
        _push(`<option${ssrRenderAttr("value", String(option))}>\u2264 \xA5${ssrInterpolate(option)}</option>`);
      });
      _push(`<!--]--></select></div>`);
      if (hasActiveFilter.value) {
        _push(`<button type="button" class="text-xs text-slate-400 underline decoration-slate-200 dark:decoration-slate-700 underline-offset-4 transition-colors hover:text-blue-500 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.models.filters.reset"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiModelFilters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "HoxiModelFilters" });

export { __nuxt_component_2 as default };
