import { u as useI18n, B as useRoute, p as useRouter, e as useToast, q as useConfirm, f as useAdminPermissions, J as useCurrencyFormat, r as useSettings, v as usePagination, w as useFetch, _ as _sfc_main$I, b as _sfc_main$k, l as _sfc_main$j, i as _sfc_main$D, j as _sfc_main$h, k as _sfc_main$z, x as _sfc_main$n } from './server.mjs';
import { _ as _sfc_main$1 } from './Tooltip-DXQIk-HE.mjs';
import { defineComponent, withAsyncContext, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useSortable } from '@vueuse/integrations/useSortable';
import { A as AdminCardsPanel } from './AdminCardsPanel-MHXWBQo_.mjs';
import { A as AdminSubscriptionsPanel } from './AdminSubscriptionsPanel-ChLFqg7I.mjs';
import { u as useImageProxy } from './useImageProxy-DBzzMBty.mjs';
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
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
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
import './Kbd-D-RKgryE.mjs';
import './Card-CCax2U16.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
    const route = useRoute();
    useRouter();
    const toast = useToast();
    const { confirm } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { getSetting, fetchSettings } = useSettings();
    const { buildImageProxyUrl } = useImageProxy();
    [__temp, __restore] = withAsyncContext(() => fetchSettings()), await __temp, __restore();
    const baseCurrency = computed(() => getSetting("currency", "USD"));
    const activeTab = ref(
      route.query.tab === "cards" ? "cards" : route.query.tab === "subscriptions" ? "subscriptions" : "products"
    );
    watch(() => route.query.tab, (val) => {
      activeTab.value = val === "cards" ? "cards" : val === "subscriptions" ? "subscriptions" : "products";
    });
    const getProductStatusColor = (product) => {
      const status = (product == null ? void 0 : product.status) || ((product == null ? void 0 : product.isActive) === false ? "inactive" : "active");
      if (status === "active") return "success";
      if (status === "hidden") return "warning";
      return "neutral";
    };
    const getProductStatusLabel = (product) => {
      const status = (product == null ? void 0 : product.status) || ((product == null ? void 0 : product.isActive) === false ? "inactive" : "active");
      if (status === "active") return t("admin.products.active");
      if (status === "hidden") return t("admin.products.hidden");
      return t("admin.products.inactive");
    };
    const columns = computed(() => [
      { accessorKey: "drag", header: "" },
      { accessorKey: "id", header: "ID" },
      { accessorKey: "image", header: "Image" },
      { accessorKey: "name", header: t("admin.products.name") },
      { accessorKey: "price", header: t("admin.products.price") },
      { accessorKey: "type", header: t("admin.products.type") },
      { accessorKey: "views", header: t("admin.products.views") },
      { accessorKey: "isActive", header: t("admin.products.status") },
      {
        accessorKey: "actions",
        header: t("admin.products.actions"),
        meta: {
          class: {
            th: "text-right sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const { page, pageSize: pageCount, onPageChange } = usePagination(15);
    const searchQuery = ref("");
    const selectedType = ref("all");
    const { data: allTypesData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/products/types",
      "$Q32KAb8Zpx"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const availableTypes = computed(() => {
      var _a;
      return ((_a = allTypesData.value) == null ? void 0 : _a.data) || [];
    });
    const typeFilterOptions = computed(() => [
      { label: "\u5168\u90E8\u7C7B\u578B", value: "all" },
      ...availableTypes.value.map((t2) => ({ label: t2.toUpperCase(), value: t2 }))
    ]);
    const {
      data: productsData,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/products",
      {
        query: computed(() => ({
          page: page.value,
          pageSize: pageCount.value,
          search: searchQuery.value || void 0,
          type: selectedType.value !== "all" ? selectedType.value : void 0
        })),
        watch: [page, searchQuery, selectedType],
        onResponseError({ response }) {
          if (response.status === 401) {
            useRouter().push("/admin/login");
          }
        }
      },
      "$BYQfDOyOPO"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    watch([searchQuery, selectedType], () => {
      page.value = 1;
    });
    const paginatedProducts = computed(() => {
      var _a;
      return ((_a = productsData.value) == null ? void 0 : _a.data) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return ((_a = productsData.value) == null ? void 0 : _a.total) || 0;
    });
    const total = computed(() => totalItems.value);
    const hasKeyProducts = computed(() => availableTypes.value.includes("key") || paginatedProducts.value.some((p) => p.type === "key"));
    const hasSubscriptionProducts = computed(() => availableTypes.value.includes("subscription") || paginatedProducts.value.some((p) => p.type === "subscription"));
    const keyCount = computed(() => paginatedProducts.value.filter((p) => p.type === "key").length);
    const subCount = computed(() => paginatedProducts.value.filter((p) => p.type === "subscription").length);
    const parseJsonMaybe = (value) => {
      if (typeof value !== "string") return value;
      try {
        return JSON.parse(value);
      } catch {
        return value;
      }
    };
    const getProductMetaData = (product) => {
      const parsed = parseJsonMaybe(product == null ? void 0 : product.metaData);
      return parsed && typeof parsed === "object" ? parsed : {};
    };
    const isPlanFeatureProduct = (product) => ["subscription", "topup"].includes(String((product == null ? void 0 : product.type) || ""));
    const normalizePlanFeatures = (value) => {
      const parsed = parseJsonMaybe(value);
      if (!Array.isArray(parsed)) return [];
      return parsed.map((feature) => {
        if (typeof feature === "string") {
          return {
            name: feature.trim(),
            included: true
          };
        }
        return {
          name: String((feature == null ? void 0 : feature.name) || "").trim(),
          included: (feature == null ? void 0 : feature.included) !== false
        };
      }).filter((feature) => feature.name);
    };
    const getProductPlanFeatures = (product) => {
      var _a, _b;
      const metaData = getProductMetaData(product);
      const translatedFeatures = normalizePlanFeatures((_b = (_a = metaData == null ? void 0 : metaData.translations) == null ? void 0 : _a[locale.value]) == null ? void 0 : _b.plan_features);
      if (translatedFeatures.length > 0) {
        return translatedFeatures;
      }
      return normalizePlanFeatures(metaData == null ? void 0 : metaData.plan_features);
    };
    const getVisiblePlanFeatures = (product) => getProductPlanFeatures(product).slice(0, 2);
    const getHiddenPlanFeatureCount = (product) => Math.max(getProductPlanFeatures(product).length - 2, 0);
    const getPlanFeaturesTooltip = (product) => getProductPlanFeatures(product).map((feature) => `${feature.included ? "\u2713" : "\u2715"} ${feature.name}`).join("\n");
    const sortableTarget = computed(() => null);
    useSortable(sortableTarget, paginatedProducts, {
      animation: 150,
      handle: ".cursor-move",
      onEnd: async () => {
        const total2 = totalItems.value;
        const startIndex = (page.value - 1) * pageCount.value;
        const reorderedItems = paginatedProducts.value.map((item, index) => ({
          id: item.id,
          sortOrder: total2 - (startIndex + index)
        }));
        try {
          await $fetch("/api/admin/products/reorder", {
            method: "PUT",
            body: { items: reorderedItems }
          });
          toast.add({
            title: "Success",
            description: "Products reordered successfully",
            color: "success"
          });
          await refresh();
        } catch (e) {
          toast.add({
            title: "Error",
            description: "Failed to reorder products",
            color: "error"
          });
          await refresh();
        }
      }
    });
    const deleteProduct = async (id) => {
      var _a;
      const isConfirmed = await confirm({
        title: t("admin.products.delete"),
        description: t("admin.products.confirmDelete")
      });
      if (!isConfirmed) return;
      try {
        await $fetch(`/api/admin/products/${id}`, {
          method: "DELETE"
        });
        await refresh();
        toast.add({
          title: t("admin.common.success"),
          description: t("admin.products.deleteSuccess"),
          color: "success"
        });
      } catch (e) {
        toast.add({
          title: t("admin.common.error"),
          description: ((_a = e.data) == null ? void 0 : _a.message) || t("admin.products.deleteFailed"),
          color: "error"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$I;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UButton = _sfc_main$D;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$z;
      const _component_UTooltip = _sfc_main$1;
      const _component_UPagination = _sfc_main$n;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col" }, _attrs))}><div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4 shrink-0"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(activeTab.value === "cards" ? _ctx.$t("admin.cards.title", "\u5361\u5BC6\u5E93\u5B58") : activeTab.value === "subscriptions" ? _ctx.$t("admin.subscriptions.title", "\u8BA2\u9605\u7BA1\u7406") : _ctx.$t("admin.products.title", "\u4EA7\u54C1\u7BA1\u7406"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-1.5 text-sm">${ssrInterpolate(activeTab.value === "cards" ? _ctx.$t("admin.cards.subtitle", "\u7BA1\u7406\u5361\u5BC6\u578B\u5546\u54C1\u7684\u6279\u91CF\u5BFC\u5165\u4E0E\u4F7F\u7528\u72B6\u6001") : activeTab.value === "subscriptions" ? _ctx.$t("admin.subscriptions.subtitle", "\u67E5\u770B\u4E0E\u7BA1\u7406\u5BA2\u6237\u5468\u671F\u6027\u8BA2\u9605\u8BA1\u5212") : _ctx.$t("admin.products.subtitle", "\u7BA1\u7406\u5546\u57CE\u6240\u6709\u5B9E\u7269\u3001\u6570\u5B57\u3001\u5361\u5BC6\u53CA\u8BA2\u9605\u5546\u54C1"))}</p></div><div class="flex items-center gap-1.5 bg-gray-100 dark:bg-white/5 p-1 rounded-xl shrink-0"><button type="button" class="${ssrRenderClass([activeTab.value === "products" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:package-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("admin.products.tab_all", "\u5168\u90E8\u5546\u54C1"))}</span><span class="opacity-70 text-[10px] font-mono">(${ssrInterpolate(total.value)})</span></button>`);
      if (hasKeyProducts.value) {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === "cards" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:barcode-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("admin.cards.title", "\u5361\u5BC6\u5E93\u5B58"))}</span><span class="rounded-full bg-purple-100 dark:bg-purple-900/50 px-1.5 py-0.2 text-[10px] font-bold text-purple-700 dark:text-purple-300">${ssrInterpolate(keyCount.value)}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (hasSubscriptionProducts.value) {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === "subscriptions" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:calendar-check-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("admin.subscriptions.title", "\u8BA2\u9605\u7BA1\u7406"))}</span><span class="rounded-full bg-purple-100 dark:bg-purple-900/50 px-1.5 py-0.2 text-[10px] font-bold text-purple-700 dark:text-purple-300">${ssrInterpolate(subCount.value)}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (activeTab.value === "cards") {
        _push(ssrRenderComponent(AdminCardsPanel, null, null, _parent));
      } else if (activeTab.value === "subscriptions") {
        _push(ssrRenderComponent(AdminSubscriptionsPanel, null, null, _parent));
      } else {
        _push(`<!--[--><div class="flex flex-wrap items-center justify-between gap-3 mb-3 shrink-0"><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: searchQuery.value,
          "onUpdate:modelValue": ($event) => searchQuery.value = $event,
          icon: "ph:magnifying-glass",
          placeholder: _ctx.$t("admin.products.searchPlaceholder", "\u641C\u7D22\u5546\u54C1\u540D\u79F0\u3001\u6807\u8BC6\u6216\u63CF\u8FF0..."),
          class: "w-72",
          size: "sm"
        }, null, _parent));
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: selectedType.value,
          "onUpdate:modelValue": ($event) => selectedType.value = $event,
          items: typeFilterOptions.value,
          class: "w-36 text-xs shrink-0",
          size: "sm"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:arrows-clockwise",
          size: "sm",
          loading: unref(pending),
          class: "hover:bg-gray-50 dark:hover:bg-gray-800",
          onClick: () => unref(refresh)()
        }, null, _parent));
        _push(`</div><div class="flex items-center gap-2">`);
        if (unref(hasAdminPerm)("products:edit")) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "primary",
            class: "bg-purple-600 hover:bg-purple-500 text-white font-medium",
            size: "sm",
            icon: "ph:plus-bold",
            to: "/admin/products/create"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.products.add"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.products.add")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          data: paginatedProducts.value,
          columns: columns.value,
          loading: unref(pending),
          ui: { tbody: "my-table-tbody divide-y divide-gray-200 dark:divide-gray-800" },
          sticky: ""
        }, {
          "drag-cell": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-10 flex items-center justify-center cursor-move text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:dots-six-vertical",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-10 flex items-center justify-center cursor-move text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:dots-six-vertical",
                    class: "w-5 h-5"
                  })
                ])
              ];
            }
          }),
          "image-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center"${_scopeId}>`);
              if (row.original.imageUrl) {
                _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(String(row.original.imageUrl)))} class="w-full h-full object-cover"${ssrRenderAttr("alt", String(row.original.name))}${_scopeId}>`);
              } else {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:image",
                  class: "w-6 h-6 text-gray-600"
                }, null, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-12 h-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center" }, [
                  row.original.imageUrl ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: unref(buildImageProxyUrl)(String(row.original.imageUrl)),
                    class: "w-full h-full object-cover",
                    alt: String(row.original.name)
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_UIcon, {
                    key: 1,
                    name: "ph:image",
                    class: "w-6 h-6 text-gray-600"
                  }))
                ])
              ];
            }
          }),
          "price-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(formatCurrencyAmount)(row.original.price, baseCurrency.value))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(formatCurrencyAmount)(row.original.price, baseCurrency.value)), 1)
              ];
            }
          }),
          "type-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2 min-w-[16rem] py-1"${_scopeId}><div class="flex items-center gap-2 flex-wrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "sm",
                class: "capitalize"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(row.original.type)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(row.original.type), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (getProductMetaData(row.original).is_pricing_plan) {
                _push2(ssrRenderComponent(_component_UTooltip, {
                  text: _ctx.$t("admin.products.pricingPlan")
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:star-fill",
                        class: "w-4 h-4 text-yellow-500"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:star-fill",
                          class: "w-4 h-4 text-yellow-500"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (isPlanFeatureProduct(row.original) && getProductPlanFeatures(row.original).length) {
                _push2(`<div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                ssrRenderList(getVisiblePlanFeatures(row.original), (feature, index) => {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    key: `${row.original.id}-feature-${index}`,
                    color: feature.included ? "primary" : "neutral",
                    variant: "subtle",
                    size: "sm",
                    class: "max-w-full"
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<span class="${ssrRenderClass([feature.included ? "" : "opacity-70", "inline-flex items-center gap-1 max-w-full"])}"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: feature.included ? "ph:check" : "ph:x",
                          class: "w-3.5 h-3.5 shrink-0"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="${ssrRenderClass([feature.included ? "" : "line-through", "truncate"])}"${_scopeId2}>${ssrInterpolate(feature.name)}</span></span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: ["inline-flex items-center gap-1 max-w-full", feature.included ? "" : "opacity-70"]
                          }, [
                            createVNode(_component_UIcon, {
                              name: feature.included ? "ph:check" : "ph:x",
                              class: "w-3.5 h-3.5 shrink-0"
                            }, null, 8, ["name"]),
                            createVNode("span", {
                              class: ["truncate", feature.included ? "" : "line-through"]
                            }, toDisplayString(feature.name), 3)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
                if (getHiddenPlanFeatureCount(row.original) > 0) {
                  _push2(ssrRenderComponent(_component_UTooltip, {
                    text: getPlanFeaturesTooltip(row.original)
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UBadge, {
                          color: "neutral",
                          variant: "outline",
                          size: "sm"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` +${ssrInterpolate(getHiddenPlanFeatureCount(row.original))}`);
                            } else {
                              return [
                                createTextVNode(" +" + toDisplayString(getHiddenPlanFeatureCount(row.original)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UBadge, {
                            color: "neutral",
                            variant: "outline",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" +" + toDisplayString(getHiddenPlanFeatureCount(row.original)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-2 min-w-[16rem] py-1" }, [
                  createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                    createVNode(_component_UBadge, {
                      color: "neutral",
                      variant: "subtle",
                      size: "sm",
                      class: "capitalize"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(row.original.type), 1)
                      ]),
                      _: 2
                    }, 1024),
                    getProductMetaData(row.original).is_pricing_plan ? (openBlock(), createBlock(_component_UTooltip, {
                      key: 0,
                      text: _ctx.$t("admin.products.pricingPlan")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:star-fill",
                          class: "w-4 h-4 text-yellow-500"
                        })
                      ]),
                      _: 1
                    }, 8, ["text"])) : createCommentVNode("", true)
                  ]),
                  isPlanFeatureProduct(row.original) && getProductPlanFeatures(row.original).length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-wrap gap-1.5"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(getVisiblePlanFeatures(row.original), (feature, index) => {
                      return openBlock(), createBlock(_component_UBadge, {
                        key: `${row.original.id}-feature-${index}`,
                        color: feature.included ? "primary" : "neutral",
                        variant: "subtle",
                        size: "sm",
                        class: "max-w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: ["inline-flex items-center gap-1 max-w-full", feature.included ? "" : "opacity-70"]
                          }, [
                            createVNode(_component_UIcon, {
                              name: feature.included ? "ph:check" : "ph:x",
                              class: "w-3.5 h-3.5 shrink-0"
                            }, null, 8, ["name"]),
                            createVNode("span", {
                              class: ["truncate", feature.included ? "" : "line-through"]
                            }, toDisplayString(feature.name), 3)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["color"]);
                    }), 128)),
                    getHiddenPlanFeatureCount(row.original) > 0 ? (openBlock(), createBlock(_component_UTooltip, {
                      key: 0,
                      text: getPlanFeaturesTooltip(row.original)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UBadge, {
                          color: "neutral",
                          variant: "outline",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" +" + toDisplayString(getHiddenPlanFeatureCount(row.original)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["text"])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "views-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:eye",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(row.original.views || 0)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:eye",
                    class: "w-4 h-4"
                  }),
                  createTextVNode(" " + toDisplayString(row.original.views || 0), 1)
                ])
              ];
            }
          }),
          "isActive-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: getProductStatusColor(row.original),
                variant: "subtle"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(getProductStatusLabel(row.original))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(getProductStatusLabel(row.original)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UBadge, {
                  color: getProductStatusColor(row.original),
                  variant: "subtle"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(getProductStatusLabel(row.original)), 1)
                  ]),
                  _: 2
                }, 1032, ["color"])
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "ghost",
                icon: "ph:link",
                title: _ctx.$t("admin.products.viewPage"),
                to: `/products/${row.original.slug || row.original.id}`,
                target: "_blank"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:pencil-simple",
                title: _ctx.$t("admin.products.edit"),
                to: `/admin/products/${row.original.id}`,
                disabled: !unref(hasAdminPerm)("products:edit")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                icon: "ph:trash",
                onClick: ($event) => deleteProduct(Number(row.original.id)),
                disabled: !unref(hasAdminPerm)("products:edit")
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "ghost",
                    icon: "ph:link",
                    title: _ctx.$t("admin.products.viewPage"),
                    to: `/products/${row.original.slug || row.original.id}`,
                    target: "_blank"
                  }, null, 8, ["title", "to"]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:pencil-simple",
                    title: _ctx.$t("admin.products.edit"),
                    to: `/admin/products/${row.original.id}`,
                    disabled: !unref(hasAdminPerm)("products:edit")
                  }, null, 8, ["title", "to", "disabled"]),
                  createVNode(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    icon: "ph:trash",
                    onClick: ($event) => deleteProduct(Number(row.original.id)),
                    disabled: !unref(hasAdminPerm)("products:edit")
                  }, null, 8, ["onClick", "disabled"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="px-4 py-2 border-t border-gray-200 dark:border-gray-800/50 flex justify-between items-center shrink-0 bg-white dark:bg-[#121214]"><div class="text-sm text-gray-500 dark:text-gray-400"><span class="text-gray-900 dark:text-white">${ssrInterpolate(totalItems.value)}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: unref(page),
          "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
          total: totalItems.value,
          "items-per-page": unref(pageCount),
          "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
        }, null, _parent));
        _push(`</div></div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
