import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, C as useRoute, r as useRouter, aM as useLocaleRouter, bk as useSeoMeta, bl as useJsonLd, b as _sfc_main$G, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_2 from './HoxiModelFilters-DXBK5Ooy.mjs';
import __nuxt_component_3 from './HoxiModelTable-Dof6s14v.mjs';
import __nuxt_component_4 from './HoxiModelCard-DwKfQeS-.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useHoxiModels, k as filterModels, s as sortModels } from './useHoxiModels-DpcwauH-.mjs';
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
import './HoxiVendorDot-BLwK_ZsG.mjs';
import './HoxiValueBar-nKN9Q0nQ.mjs';
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const { localePath } = useLocaleRouter();
    const { models, vendors, updatedAt } = useHoxiModels();
    const viewMode = ref("table");
    const searchQuery = ref("");
    const selectedScene = ref("all");
    const selectedForCompare = ref([]);
    const toggleCompare = (slug) => {
      if (selectedForCompare.value.includes(slug)) {
        selectedForCompare.value = selectedForCompare.value.filter((s) => s !== slug);
      } else {
        if (selectedForCompare.value.length >= 3) {
          selectedForCompare.value = [...selectedForCompare.value.slice(1), slug];
        } else {
          selectedForCompare.value = [...selectedForCompare.value, slug];
        }
      }
    };
    const findModelName = (slug) => {
      const m = models.value.find((item) => item.slug === slug);
      return m ? m.name : slug;
    };
    const TAB_CONFIG = [
      { key: "overall", field: "overall" },
      { key: "value", field: "valueIndex" },
      { key: "cheapest", field: "blendedPrice" },
      { key: "fastest", field: "tps" },
      { key: "context", field: "contextWindow" }
    ];
    const defaultDirectionFor = (field) => field === "blendedPrice" || field === "ttft" ? "asc" : "desc";
    const SORT_FIELDS = [
      "overall",
      "blendedPrice",
      "valueIndex",
      "tps",
      "ttft",
      "contextWindow",
      "releasedAt"
    ];
    const tabs = computed(() => TAB_CONFIG.map((tab) => ({
      key: tab.key,
      label: t(`hoxi.models.tabs.${tab.key}`)
    })));
    const activeTab = computed(() => {
      const value = String(route.query.tab || "");
      return TAB_CONFIG.some((tab) => tab.key === value) ? value : "overall";
    });
    const tabField = computed(() => TAB_CONFIG.find((tab) => tab.key === activeTab.value).field);
    const sortField = computed(() => {
      const value = String(route.query.sort || "");
      return SORT_FIELDS.includes(value) ? value : tabField.value;
    });
    const sortDirection = computed(() => {
      const value = String(route.query.dir || "");
      if (value === "asc" || value === "desc") return value;
      return defaultDirectionFor(sortField.value);
    });
    const selectedVendors = computed(() => String(route.query.vendors || "").split(",").map((item) => item.trim()).filter(Boolean));
    const reasoningFilter = computed(() => route.query.reasoning === "1" ? true : void 0);
    const maxPrice = computed(() => {
      const value = Number(route.query.max);
      return Number.isFinite(value) && value > 0 ? value : void 0;
    });
    const updateQuery = (patch) => {
      const next = {};
      for (const [key, value] of Object.entries({ ...route.query, ...patch })) {
        const normalized = value === void 0 || value === null ? "" : String(value);
        if (normalized) next[key] = normalized;
      }
      router.replace({ query: next });
    };
    const selectTab = (key) => {
      updateQuery({ tab: key === "overall" ? void 0 : key, sort: void 0, dir: void 0 });
    };
    const onSort = (field) => {
      const isSame = field === sortField.value;
      const nextDirection = isSame ? sortDirection.value === "asc" ? "desc" : "asc" : defaultDirectionFor(field);
      updateQuery({ sort: field, dir: nextDirection });
    };
    const resetFilters = () => {
      searchQuery.value = "";
      selectedScene.value = "all";
      updateQuery({ vendors: void 0, reasoning: void 0, max: void 0 });
    };
    const filteredModels = computed(() => {
      const baseList = filterModels(models.value, {
        vendors: selectedVendors.value.length ? selectedVendors.value : void 0,
        reasoning: reasoningFilter.value,
        maxBlendedPrice: maxPrice.value
      });
      return baseList.filter((model) => {
        var _a, _b, _c;
        if (searchQuery.value.trim()) {
          const q = searchQuery.value.trim().toLowerCase();
          const nameMatch = model.name.toLowerCase().includes(q);
          const slugMatch = model.slug.toLowerCase().includes(q);
          const vendorMatch = model.vendor.toLowerCase().includes(q) || ((_a = model.vendorInfo) == null ? void 0 : _a.nameZh) && model.vendorInfo.nameZh.toLowerCase().includes(q);
          if (!nameMatch && !slugMatch && !vendorMatch) return false;
        }
        if (selectedScene.value && selectedScene.value !== "all") {
          if (selectedScene.value === "coding") {
            const isCoding = ((_b = model.scenes) == null ? void 0 : _b.includes("coding")) || ((_c = model.badges) == null ? void 0 : _c.some((b) => b.includes("\u4EE3\u7801") || b.includes("\u7F16\u7A0B") || b.includes("\u5168\u80FD"))) || model.slug.includes("sonnet") || model.slug.includes("codestral");
            if (!isCoding) return false;
          } else if (selectedScene.value === "reasoning") {
            if (!model.reasoning) return false;
          } else if (selectedScene.value === "budget") {
            if (model.blendedPrice > 2) return false;
          } else if (selectedScene.value === "longContext") {
            if (model.contextWindow < 1e6) return false;
          }
        }
        return true;
      });
    });
    const sortedModels = computed(() => sortModels(filteredModels.value, sortField.value, sortDirection.value));
    computed(() => [
      t("hoxi.common.updatedAt", { date: updatedAt.value || "\u2014" }),
      t("hoxi.models.modelCount", { count: models.value.length })
    ]);
    useSeoMeta({
      title: () => t("hoxi.models.seoTitle"),
      description: () => t("hoxi.models.seoDescription"),
      ogTitle: () => t("hoxi.models.seoTitle"),
      ogDescription: () => t("hoxi.models.seoDescription"),
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => t("hoxi.models.seoTitle"),
      twitterDescription: () => t("hoxi.models.seoDescription"),
      keywords: "AI \u6A21\u578B\u6392\u884C\u699C, \u5927\u6A21\u578B\u4EF7\u683C\u5BF9\u6BD4, \u5927\u6A21\u578B\u4E0A\u4E0B\u6587, AI \u63A8\u7406\u901F\u5EA6, \u6BCF\u767E\u4E07 Token \u4EF7\u683C"
    });
    useJsonLd("hoxi-models-list", computed(() => [
      {
        "@type": "CollectionPage",
        name: t("hoxi.models.seoTitle"),
        description: t("hoxi.models.seoDescription"),
        url: localePath("/models")
      },
      {
        "@type": "ItemList",
        name: t("hoxi.models.seoTitle"),
        numberOfItems: sortedModels.value.length,
        itemListElement: sortedModels.value.map((model, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: model.name,
          url: localePath(`/models/${model.slug}`)
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
          { "@type": "ListItem", position: 2, name: t("hoxi.models.title"), item: localePath("/models") }
        ]
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$G;
      const _component_HoxiModelFilters = __nuxt_component_2;
      const _component_HoxiModelTable = __nuxt_component_3;
      const _component_HoxiModelCard = __nuxt_component_4;
      const _component_NuxtLink = __nuxt_component_3$1;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-16 space-y-10"${_scopeId}><div class="text-center max-w-3xl mx-auto mb-10 md:mb-14"${_scopeId}><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.models.title"))}</h1>`);
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
            _push2(`</div><div class="space-y-6 pt-2 border-t border-slate-100 dark:border-slate-800"${_scopeId}><nav class="flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-100 dark:border-slate-800 pb-2"${ssrRenderAttr("aria-label", _ctx.$t("hoxi.models.tabsLabel"))}${_scopeId}><!--[-->`);
            ssrRenderList(tabs.value, (tab) => {
              _push2(`<button type="button" class="${ssrRenderClass([tab.key === activeTab.value ? "font-bold text-slate-900 dark:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500" : "text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 font-medium", "pb-1 text-sm transition-colors relative"])}"${ssrRenderAttr("aria-current", tab.key === activeTab.value ? "true" : void 0)}${_scopeId}>${ssrInterpolate(tab.label)}</button>`);
            });
            _push2(`<!--]--></nav>`);
            _push2(ssrRenderComponent(_component_HoxiModelFilters, {
              vendors: unref(vendors),
              "selected-vendors": selectedVendors.value,
              reasoning: reasoningFilter.value,
              "max-price": maxPrice.value,
              "search-query": searchQuery.value,
              "selected-scene": selectedScene.value,
              "view-mode": viewMode.value,
              "onUpdate:selectedVendors": (value) => updateQuery({ vendors: value.length ? value.join(",") : void 0 }),
              "onUpdate:reasoning": (value) => updateQuery({ reasoning: value ? "1" : void 0 }),
              "onUpdate:maxPrice": (value) => updateQuery({ max: value ? String(value) : void 0 }),
              "onUpdate:searchQuery": (value) => searchQuery.value = value,
              "onUpdate:selectedScene": (value) => selectedScene.value = value,
              "onUpdate:viewMode": (value) => viewMode.value = value,
              onReset: resetFilters
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between text-xs text-slate-400 pt-1 dark:text-slate-500"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.models.count", { shown: sortedModels.value.length, total: unref(models).length }))}</p>`);
            if (selectedForCompare.value.length) {
              _push2(`<span class="text-blue-600 font-medium font-mono dark:text-blue-400"${_scopeId}> \u5DF2\u52FE\u9009 ${ssrInterpolate(selectedForCompare.value.length)} \u6B3E\u5BF9\u6BD4 </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (sortedModels.value.length) {
              _push2(`<div${_scopeId}>`);
              if (viewMode.value === "table") {
                _push2(ssrRenderComponent(_component_HoxiModelTable, {
                  models: sortedModels.value,
                  "sort-field": sortField.value,
                  "sort-direction": sortDirection.value,
                  caption: _ctx.$t("hoxi.models.title"),
                  selectable: true,
                  "selected-slugs": selectedForCompare.value,
                  onSort,
                  onToggleSelect: toggleCompare
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(sortedModels.value, (model, index) => {
                  _push2(ssrRenderComponent(_component_HoxiModelCard, {
                    key: model.slug,
                    model,
                    rank: index + 1,
                    "is-selected": selectedForCompare.value.includes(model.slug),
                    onToggleSelect: toggleCompare
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<p class="mt-6 text-sm leading-7 text-slate-500 py-8 text-center dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.models.noMatch"))}</p>`);
            }
            if (selectedForCompare.value.length) {
              _push2(`<div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-slate-900/95 text-white shadow-xl backdrop-blur-md flex items-center gap-4 text-xs sm:text-sm border border-slate-700/80 max-w-[90vw]"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="w-2 h-2 rounded-full bg-blue-400 animate-ping"${_scopeId}></span><span class="font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.models.compareDrawer.selected", { count: selectedForCompare.value.length }))}</span></div><div class="hidden sm:flex items-center gap-1.5 text-xs text-slate-300"${_scopeId}><!--[-->`);
              ssrRenderList(selectedForCompare.value, (s) => {
                _push2(`<span class="px-2 py-0.5 rounded bg-slate-800 text-slate-200"${_scopeId}>${ssrInterpolate(findModelName(s))}</span>`);
              });
              _push2(`<!--]--></div><div class="flex items-center gap-2"${_scopeId}>`);
              if (selectedForCompare.value.length >= 2) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)(`/compare?models=${selectedForCompare.value.join(",")}`),
                  class: "px-3.5 py-1.5 rounded-xl bg-blue-500 text-white hover:bg-blue-600 font-semibold transition-colors inline-flex items-center gap-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.models.compareDrawer.startCompare"))}</span>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.models.compareDrawer.startCompare")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="text-xs text-slate-400 dark:text-slate-500"${_scopeId}> \u8BF7\u518D\u9009 1 \u6B3E </span>`);
              }
              _push2(`<button type="button" class="text-xs text-slate-400 hover:text-white px-2 py-1 transition-colors dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.models.compareDrawer.clear"))}</button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-16 space-y-10" }, [
                createVNode("div", { class: "text-center max-w-3xl mx-auto mb-10 md:mb-14" }, [
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.models.title")), 1),
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
                createVNode("div", { class: "space-y-6 pt-2 border-t border-slate-100 dark:border-slate-800" }, [
                  createVNode("nav", {
                    class: "flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-100 dark:border-slate-800 pb-2",
                    "aria-label": _ctx.$t("hoxi.models.tabsLabel")
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (tab) => {
                      return openBlock(), createBlock("button", {
                        key: tab.key,
                        type: "button",
                        class: ["pb-1 text-sm transition-colors relative", tab.key === activeTab.value ? "font-bold text-slate-900 dark:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500" : "text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 font-medium"],
                        "aria-current": tab.key === activeTab.value ? "true" : void 0,
                        onClick: ($event) => selectTab(tab.key)
                      }, toDisplayString(tab.label), 11, ["aria-current", "onClick"]);
                    }), 128))
                  ], 8, ["aria-label"]),
                  createVNode(_component_HoxiModelFilters, {
                    vendors: unref(vendors),
                    "selected-vendors": selectedVendors.value,
                    reasoning: reasoningFilter.value,
                    "max-price": maxPrice.value,
                    "search-query": searchQuery.value,
                    "selected-scene": selectedScene.value,
                    "view-mode": viewMode.value,
                    "onUpdate:selectedVendors": (value) => updateQuery({ vendors: value.length ? value.join(",") : void 0 }),
                    "onUpdate:reasoning": (value) => updateQuery({ reasoning: value ? "1" : void 0 }),
                    "onUpdate:maxPrice": (value) => updateQuery({ max: value ? String(value) : void 0 }),
                    "onUpdate:searchQuery": (value) => searchQuery.value = value,
                    "onUpdate:selectedScene": (value) => selectedScene.value = value,
                    "onUpdate:viewMode": (value) => viewMode.value = value,
                    onReset: resetFilters
                  }, null, 8, ["vendors", "selected-vendors", "reasoning", "max-price", "search-query", "selected-scene", "view-mode", "onUpdate:selectedVendors", "onUpdate:reasoning", "onUpdate:maxPrice", "onUpdate:searchQuery", "onUpdate:selectedScene", "onUpdate:viewMode"])
                ]),
                createVNode("div", { class: "flex items-center justify-between text-xs text-slate-400 pt-1 dark:text-slate-500" }, [
                  createVNode("p", null, toDisplayString(_ctx.$t("hoxi.models.count", { shown: sortedModels.value.length, total: unref(models).length })), 1),
                  selectedForCompare.value.length ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-blue-600 font-medium font-mono dark:text-blue-400"
                  }, " \u5DF2\u52FE\u9009 " + toDisplayString(selectedForCompare.value.length) + " \u6B3E\u5BF9\u6BD4 ", 1)) : createCommentVNode("", true)
                ]),
                sortedModels.value.length ? (openBlock(), createBlock("div", { key: 0 }, [
                  viewMode.value === "table" ? (openBlock(), createBlock(_component_HoxiModelTable, {
                    key: 0,
                    models: sortedModels.value,
                    "sort-field": sortField.value,
                    "sort-direction": sortDirection.value,
                    caption: _ctx.$t("hoxi.models.title"),
                    selectable: true,
                    "selected-slugs": selectedForCompare.value,
                    onSort,
                    onToggleSelect: toggleCompare
                  }, null, 8, ["models", "sort-field", "sort-direction", "caption", "selected-slugs"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(sortedModels.value, (model, index) => {
                      return openBlock(), createBlock(_component_HoxiModelCard, {
                        key: model.slug,
                        model,
                        rank: index + 1,
                        "is-selected": selectedForCompare.value.includes(model.slug),
                        onToggleSelect: toggleCompare
                      }, null, 8, ["model", "rank", "is-selected"]);
                    }), 128))
                  ]))
                ])) : (openBlock(), createBlock("p", {
                  key: 1,
                  class: "mt-6 text-sm leading-7 text-slate-500 py-8 text-center dark:text-slate-400"
                }, toDisplayString(_ctx.$t("hoxi.models.noMatch")), 1)),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "transform translate-y-8 opacity-0",
                  "enter-to-class": "transform translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "transform translate-y-0 opacity-100",
                  "leave-to-class": "transform translate-y-8 opacity-0"
                }, {
                  default: withCtx(() => [
                    selectedForCompare.value.length ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-slate-900/95 text-white shadow-xl backdrop-blur-md flex items-center gap-4 text-xs sm:text-sm border border-slate-700/80 max-w-[90vw]"
                    }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "w-2 h-2 rounded-full bg-blue-400 animate-ping" }),
                        createVNode("span", { class: "font-medium" }, toDisplayString(_ctx.$t("hoxi.models.compareDrawer.selected", { count: selectedForCompare.value.length })), 1)
                      ]),
                      createVNode("div", { class: "hidden sm:flex items-center gap-1.5 text-xs text-slate-300" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(selectedForCompare.value, (s) => {
                          return openBlock(), createBlock("span", {
                            key: s,
                            class: "px-2 py-0.5 rounded bg-slate-800 text-slate-200"
                          }, toDisplayString(findModelName(s)), 1);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        selectedForCompare.value.length >= 2 ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          to: unref(localePath)(`/compare?models=${selectedForCompare.value.join(",")}`),
                          class: "px-3.5 py-1.5 rounded-xl bg-blue-500 text-white hover:bg-blue-600 font-semibold transition-colors inline-flex items-center gap-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.models.compareDrawer.startCompare")), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5"
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-xs text-slate-400 dark:text-slate-500"
                        }, " \u8BF7\u518D\u9009 1 \u6B3E ")),
                        createVNode("button", {
                          type: "button",
                          class: "text-xs text-slate-400 hover:text-white px-2 py-1 transition-colors dark:text-slate-500",
                          onClick: ($event) => selectedForCompare.value = []
                        }, toDisplayString(_ctx.$t("hoxi.models.compareDrawer.clear")), 9, ["onClick"])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/models/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
