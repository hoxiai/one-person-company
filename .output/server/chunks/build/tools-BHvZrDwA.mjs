import { u as useI18n, H as useRoute, p as useRouter, bt as useSeoMeta, _ as _sfc_main$W } from './server.mjs';
import __nuxt_component_1 from './HoxiToolBrandMark-C1f66sTa.mjs';
import __nuxt_component_2 from './HoxiToolDetailModal-MKeSjti7.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useHoxiTools } from './useHoxiTools-BjV7cydX.mjs';
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
import './tools-ByMeFHmu.mjs';

const MOBILE_VISIBLE_LIMIT = 5;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tools",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const {
      tools,
      categories,
      stats,
      isEn,
      belongsToCategory,
      subcategoriesOf,
      getToolEndpoints,
      getToolUseCases
    } = useHoxiTools();
    const railExpanded = ref(false);
    const activeCategory = ref(null);
    const searchQuery = ref("");
    const selectedTool = ref(null);
    const railCategories = computed(() => categories.value.filter((c) => c.id !== "all"));
    watch(activeCategory, (val) => {
      const nextQuery = { ...route.query, c: val || void 0 };
      router.replace({ query: nextQuery }).catch(() => {
      });
    });
    const hasSearch = computed(() => searchQuery.value.trim().length > 0);
    function matchesQuery(tool, rawQuery) {
      const q = rawQuery.trim().toLowerCase();
      if (!q) return true;
      if (tool.id.toLowerCase().includes(q)) return true;
      if (tool.name.toLowerCase().includes(q)) return true;
      if (tool.nameZh && tool.nameZh.toLowerCase().includes(q)) return true;
      if (tool.description && tool.description.toLowerCase().includes(q)) return true;
      if (tool.descriptionZh && tool.descriptionZh.toLowerCase().includes(q)) return true;
      if (tool.categoryLabel && tool.categoryLabel.toLowerCase().includes(q)) return true;
      if (tool.categoryLabelEn && tool.categoryLabelEn.toLowerCase().includes(q)) return true;
      if (tool.providerSlug && tool.providerSlug.toLowerCase().includes(q)) return true;
      const eps = getToolEndpoints(tool);
      return eps.some(
        (ep) => ep.displayName.toLowerCase().includes(q) || ep.endpoint.toLowerCase().includes(q) || ep.providerDisplayName.toLowerCase().includes(q)
      );
    }
    const matchedToolIds = computed(() => {
      if (!hasSearch.value) return null;
      const q = searchQuery.value;
      const set = /* @__PURE__ */ new Set();
      for (const item of tools.value) {
        if (matchesQuery(item, q)) {
          set.add(item.id);
        }
      }
      return set;
    });
    const totalMatchCount = computed(() => {
      if (!matchedToolIds.value) return tools.value.length;
      return matchedToolIds.value.size;
    });
    function getCategoryMatchCount(catId) {
      const inCat = tools.value.filter((t2) => belongsToCategory(t2, catId));
      if (!matchedToolIds.value) return inCat.length;
      return inCat.filter((t2) => matchedToolIds.value.has(t2.id)).length;
    }
    function isCategoryZeroMatch(catId) {
      return Boolean(matchedToolIds.value) && getCategoryMatchCount(catId) === 0;
    }
    function isTileZeroMatch(tool) {
      return Boolean(matchedToolIds.value) && !matchedToolIds.value.has(tool.id);
    }
    const categoryTiles = computed(() => subcategoriesOf(activeCategory.value));
    const displayedTiles = computed(() => {
      if (!matchedToolIds.value) {
        return categoryTiles.value;
      }
      return categoryTiles.value.filter((t2) => matchedToolIds.value.has(t2.id));
    });
    const hasPartialMarkup = computed(() => displayedTiles.value.some((t2) => t2.noMarkup === "partial"));
    function isRailOverflowHidden(idx) {
      return !railExpanded.value && idx >= MOBILE_VISIBLE_LIMIT;
    }
    function handleSelectCategoryFromModal(catId) {
      selectedTool.value = null;
      activeCategory.value = catId;
    }
    const selectedToolEndpoints = computed(() => selectedTool.value ? getToolEndpoints(selectedTool.value) : []);
    const selectedToolUseCases = computed(() => selectedTool.value ? getToolUseCases(selectedTool.value) : []);
    useSeoMeta({
      title: computed(() => t("hoxi.tools.seoTitle")),
      description: computed(() => t("hoxi.tools.seoDescription", {
        tools: stats.value.toolCount,
        endpoints: stats.value.endpointCount,
        providers: stats.value.providerCount
      }))
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      const _component_HoxiToolBrandMark = __nuxt_component_1;
      const _component_HoxiToolDetailModal = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1240px] mx-auto px-4 md:px-6" }, _attrs))}><section class="pt-10 pb-6 md:pt-14 md:pb-8"><div class="inline-flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-7"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true"></span><span>${ssrInterpolate(_ctx.$t("hoxi.tools.heroEyebrow", { tools: unref(stats).toolCount, endpoints: unref(stats).endpointCount.toLocaleString("en-US"), providers: unref(stats).providerCount, categories: unref(stats).categoryCount }))}</span></div><h1 class="text-4xl sm:text-6xl md:text-[72px] font-semibold tracking-tight text-slate-900 dark:text-white leading-[0.98] mb-4"><span>${ssrInterpolate(_ctx.$t("hoxi.tools.heroLine1"))}</span><br><span>${ssrInterpolate(_ctx.$t("hoxi.tools.heroLine2"))}</span></h1><p class="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-[640px]">${ssrInterpolate(_ctx.$t("hoxi.tools.subtitle"))}</p></section><div class="pt-2"><div class="relative flex items-center">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass",
        class: "w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-4 pointer-events-none",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", searchQuery.value)} type="search"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.tools.searchPlaceholder"))}${ssrRenderAttr("aria-label", _ctx.$t("hoxi.tools.searchPlaceholder"))} class="w-full h-[52px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-11 pr-10 text-[15px] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-slate-900 dark:focus:border-slate-400 outline-none transition-colors">`);
      if (hasSearch.value) {
        _push(`<button type="button" class="absolute right-3.5 inline-flex h-6 w-6 items-center justify-center rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer" aria-label="Clear search">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><main class="pt-8 pb-20"><div class="grid items-start gap-6 lg:gap-8 lg:grid-cols-[240px_minmax(0,1fr)]"><nav aria-label="Tool categories" class="flex flex-wrap gap-1.5 lg:flex-col lg:flex-nowrap lg:gap-0.5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto"><button type="button" class="${ssrRenderClass([activeCategory.value === null ? "bg-slate-100 dark:bg-slate-800 border-slate-900 dark:border-slate-600 text-slate-900 dark:text-white font-semibold" : "bg-white lg:bg-transparent dark:bg-slate-900 lg:dark:bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white", "inline-flex items-center gap-2.5 rounded-full lg:rounded-lg border border-slate-200 lg:border-transparent dark:border-slate-800 lg:dark:border-transparent px-3.5 py-2 lg:px-3 lg:py-2 text-[13px] lg:text-sm text-left transition-colors cursor-pointer shrink-0"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:squares-four-bold",
        class: ["w-4 h-4 shrink-0", activeCategory.value === null ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"]
      }, null, _parent));
      _push(`<span class="flex-1 min-w-0 lg:truncate">${ssrInterpolate(_ctx.$t("hoxi.tools.allCategories"))}</span><span class="font-mono text-[11px] text-slate-400 dark:text-slate-500">${ssrInterpolate(totalMatchCount.value)}</span></button><!--[-->`);
      ssrRenderList(railCategories.value, (cat, idx) => {
        _push(`<button type="button" class="${ssrRenderClass([[
          isRailOverflowHidden(idx) ? "hidden lg:inline-flex" : "inline-flex",
          activeCategory.value === cat.id ? "bg-slate-100 dark:bg-slate-800 border-slate-900 dark:border-slate-600 text-slate-900 dark:text-white font-semibold" : "bg-white lg:bg-transparent dark:bg-slate-900 lg:dark:bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white",
          isCategoryZeroMatch(cat.id) ? "opacity-45" : ""
        ], "items-center gap-2.5 rounded-full lg:rounded-lg border border-slate-200 lg:border-transparent dark:border-slate-800 lg:dark:border-transparent px-3.5 py-2 lg:px-3 lg:py-2 text-[13px] lg:text-sm text-left transition-colors cursor-pointer shrink-0"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: cat.icon || "ph:folder-bold",
          class: ["w-4 h-4 shrink-0", activeCategory.value === cat.id ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500"]
        }, null, _parent));
        _push(`<span class="flex-1 min-w-0 lg:truncate">${ssrInterpolate(cat.label)}</span><span class="font-mono text-[11px] text-slate-400 dark:text-slate-500">${ssrInterpolate(getCategoryMatchCount(cat.id))}</span></button>`);
      });
      _push(`<!--]-->`);
      if (railCategories.value.length > MOBILE_VISIBLE_LIMIT) {
        _push(`<button type="button" class="inline-flex lg:hidden items-center rounded-full border border-dashed border-slate-300 dark:border-slate-700 px-3.5 py-2 text-[13px] text-slate-500 dark:text-slate-400 hover:border-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer shrink-0">${ssrInterpolate(railExpanded.value ? _ctx.$t("hoxi.tools.showLess") : _ctx.$t("hoxi.tools.showMore"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav><div class="min-w-0">`);
      if (hasSearch.value && displayedTiles.value.length === 0) {
        _push(`<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 py-16 px-6 text-center"><div class="text-lg font-semibold text-slate-900 dark:text-white mb-1">${ssrInterpolate(_ctx.$t("hoxi.tools.noMatchTitle", { query: searchQuery.value.trim() }))}</div><div class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.tools.noMatchDesc"))}</div></div>`);
      } else if (displayedTiles.value.length > 0) {
        _push(`<!--[--><div class="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        ssrRenderList(displayedTiles.value, (tool) => {
          _push(`<article role="button" tabindex="0" class="${ssrRenderClass([isTileZeroMatch(tool) ? "opacity-45 hover:opacity-70" : "", "group rounded-[10px] border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-[18px] pb-3.5 min-h-[132px] flex flex-col gap-2 text-left transition-colors hover:border-slate-800 dark:hover:border-slate-500 cursor-pointer"])}"><div class="flex items-center gap-2.5 min-w-0">`);
          _push(ssrRenderComponent(_component_HoxiToolBrandMark, {
            name: tool.providerSlug || tool.id,
            label: tool.name,
            "logo-url": tool.logoUrl,
            "logo-dark": tool.logoDark,
            icon: tool.icon,
            size: 36
          }, null, _parent));
          _push(`<span class="flex-1 min-w-0 text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">${ssrInterpolate(tool.name)}</span></div>`);
          if (tool.description) {
            _push(`<p class="text-[13px] leading-normal text-slate-500 dark:text-slate-400 line-clamp-2 flex-1 m-0">${ssrInterpolate(tool.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2"><span class="font-mono text-[11px] text-slate-400 dark:text-slate-500 truncate">${ssrInterpolate(tool.pricing)}</span><span class="inline-flex items-center gap-1.5 shrink-0">`);
          if (tool.discountPercent) {
            _push(`<span class="rounded-full bg-blue-600 text-white font-mono text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 whitespace-nowrap">${ssrInterpolate(tool.discountPercent)}% OFF </span>`);
          } else {
            _push(`<!---->`);
          }
          if (tool.noMarkup === "all" || tool.noMarkup === "partial") {
            _push(`<span class="rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/60 font-mono text-[9.5px] font-medium uppercase tracking-wide px-1.5 py-0.5 whitespace-nowrap"${ssrRenderAttr("title", tool.noMarkup === "partial" ? _ctx.$t("hoxi.tools.zeroMarkupPartialTip") : _ctx.$t("hoxi.tools.zeroMarkupTip"))}>${ssrInterpolate(_ctx.$t("hoxi.tools.zeroMarkup"))}`);
            if (tool.noMarkup === "partial") {
              _push(`<!--[-->*<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          } else if (tool.badge) {
            _push(`<span class="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[9.5px] font-medium px-2 py-0.5 whitespace-nowrap">${ssrInterpolate(tool.badge)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span></div></article>`);
        });
        _push(`<!--]--></div>`);
        if (hasPartialMarkup.value) {
          _push(`<p class="mt-4 text-xs text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.tools.markupFootnote"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 py-16 px-6 text-center"><div class="text-lg font-semibold text-slate-900 dark:text-white mb-1">${ssrInterpolate(_ctx.$t("hoxi.tools.emptyTitle"))}</div><div class="text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.tools.emptyDesc"))}</div></div>`);
      }
      _push(`</div></div></main>`);
      _push(ssrRenderComponent(_component_HoxiToolDetailModal, {
        open: Boolean(selectedTool.value),
        tool: selectedTool.value,
        endpoints: selectedToolEndpoints.value,
        "use-cases": selectedToolUseCases.value,
        categories: unref(categories),
        "is-en": unref(isEn),
        onClose: ($event) => selectedTool.value = null,
        onSelectCategory: handleSelectCategoryFromModal
      }, null, _parent));
      _push(`</div>`);
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
//# sourceMappingURL=tools-BHvZrDwA.mjs.map
