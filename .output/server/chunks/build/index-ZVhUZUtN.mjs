import { u as useI18n, I as useRoute, r as useRouter, aN as useRequestURL, a as useToast, i as useConfirm, b as useAdminPermissions, G as useCurrencyFormat, c as useSettings, x as usePagination, y as useFetch, _ as _sfc_main$R, j as _sfc_main$10, d as _sfc_main$X, p as _sfc_main$u, g as _sfc_main$D, e as _sfc_main$s, P as __nuxt_component_3$4, z as _sfc_main$w, l as useFormatTime, f as _sfc_main$L, H as _sfc_main$q, h as _sfc_main$E, N as useExtensions } from './server.mjs';
import { _ as _sfc_main$3 } from './Tooltip-BnYYx88r.mjs';
import { defineComponent, withAsyncContext, computed, ref, watch, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createSlots, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { useSortable } from '@vueuse/integrations/useSortable';
import { u as useImageProxy } from './useImageProxy-DBzzMBty.mjs';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
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
import './Kbd-BiL9J_NO.mjs';

const ALL = "all";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AdminCardsPanel",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const { formatDateTime } = useFormatTime();
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const isModalOpen = ref(false);
    const selectedProduct = ref(ALL);
    const importProductId = ref("");
    const importContent = ref("");
    const isImporting = ref(false);
    const {
      page,
      pageSize,
      onPageChange
    } = usePagination(15);
    const { data: productsData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      computed(() => hasAdminPerm("products:view") ? "/api/admin/products" : "/api/products"),
      { query: { pageSize: 200 } },
      "$rF4dyaromc"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: cardsData, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/cards",
      {
        query: computed(() => ({
          page: page.value,
          pageSize: pageSize.value,
          productId: selectedProduct.value && selectedProduct.value !== ALL ? selectedProduct.value : void 0
        })),
        watch: [page, selectedProduct]
      },
      "$OsLqfXK9ev"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const products = computed(() => {
      var _a;
      return ((_a = productsData.value) == null ? void 0 : _a.data) || (Array.isArray(productsData.value) ? productsData.value : []);
    });
    const paginatedCards = computed(() => {
      var _a;
      return ((_a = cardsData.value) == null ? void 0 : _a.data) || [];
    });
    const totalItems = computed(() => {
      var _a, _b;
      return Number((_b = (_a = cardsData.value) == null ? void 0 : _a.total) != null ? _b : paginatedCards.value.length);
    });
    watch(selectedProduct, () => {
      page.value = 1;
    });
    const productOptions = computed(() => [
      { label: t("admin.cards.allProducts", "\u5168\u90E8\u5361\u5BC6\u5546\u54C1"), value: ALL },
      ...products.value.filter((p) => p.type === "key").map((p) => ({ label: p.name, value: String(p.id) }))
    ]);
    const keyProductOptions = computed(
      () => products.value.filter((p) => p.type === "key").map((p) => ({ label: p.name, value: String(p.id) }))
    );
    const columns = computed(() => [
      { accessorKey: "product", header: t("admin.cards.product", "\u5173\u8054\u5546\u54C1") },
      { accessorKey: "cardNumber", header: t("admin.cards.cardCode", "\u5361\u5BC6\u5185\u5BB9") },
      { accessorKey: "status", header: t("admin.cards.status", "\u4F7F\u7528\u72B6\u6001") },
      { accessorKey: "orderId", header: t("admin.cards.orderId", "\u5173\u8054\u8BA2\u5355") },
      { accessorKey: "createdAt", header: t("admin.cards.createdAt", "\u5BFC\u5165\u65F6\u95F4") },
      { id: "actions", header: t("admin.common.actions", "\u64CD\u4F5C") }
    ]);
    const getProductName = (productId, fallbackName) => {
      if (fallbackName) return fallbackName;
      const product = products.value.find((p) => p.id === productId);
      return product ? product.name : `Product #${productId}`;
    };
    const openModal = () => {
      var _a;
      importProductId.value = (selectedProduct.value && selectedProduct.value !== ALL ? selectedProduct.value : "") || (((_a = keyProductOptions.value[0]) == null ? void 0 : _a.value) || "");
      importContent.value = "";
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const handleImport = async () => {
      var _a;
      if (!importProductId.value || !importContent.value.trim()) return;
      const cardsList = importContent.value.split("\n").map((line) => line.trim()).filter(Boolean);
      if (!cardsList.length) return;
      isImporting.value = true;
      try {
        const res = await $fetch("/api/admin/cards", {
          method: "POST",
          body: {
            productId: Number(importProductId.value),
            cardNumbers: cardsList
          }
        });
        if (res.code === 0 || res.code === 200) {
          toast.add({ title: t("admin.cards.importSuccess", `\u6210\u529F\u5BFC\u5165 ${cardsList.length} \u6761\u5361\u5BC6`), color: "success" });
          closeModal();
          await refresh();
        } else {
          toast.add({ title: t("admin.cards.importError", "\u5BFC\u5165\u5931\u8D25"), description: res.message, color: "error" });
        }
      } catch (error) {
        toast.add({ title: t("admin.cards.importError", "\u5BFC\u5165\u5931\u8D25"), description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message), color: "error" });
      } finally {
        isImporting.value = false;
      }
    };
    const deleteCard = async (id) => {
      var _a;
      if (!confirm(t("admin.cards.deleteConfirm", "\u786E\u5B9A\u5220\u9664\u8BE5\u6761\u5361\u5BC6\u5417\uFF1F"))) return;
      try {
        const res = await $fetch(`/api/admin/cards/${id}`, { method: "DELETE" });
        if (res.code === 0 || res.code === 200) {
          toast.add({ title: t("admin.cards.deleteSuccess", "\u5220\u9664\u6210\u529F"), color: "success" });
          await refresh();
        } else {
          toast.add({ title: t("admin.cards.deleteError", "\u5220\u9664\u5931\u8D25"), description: res.message, color: "error" });
        }
      } catch (error) {
        toast.add({ title: t("admin.cards.deleteError", "\u5220\u9664\u5931\u8D25"), description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message), color: "error" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$u;
      const _component_UButton = _sfc_main$X;
      const _component_UTable = _sfc_main$s;
      const _component_UBadge = _sfc_main$R;
      const _component_UPagination = _sfc_main$w;
      const _component_UModal = _sfc_main$L;
      const _component_UCard = _sfc_main$q;
      const _component_UTextarea = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-0 flex-1 flex-col" }, _attrs))}><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="px-4 py-2.5 border-b border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-[#18181b]/30 flex flex-wrap items-center justify-between gap-2.5 shrink-0"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedProduct.value,
        "onUpdate:modelValue": ($event) => selectedProduct.value = $event,
        items: productOptions.value,
        placeholder: unref(t)("admin.cards.filterProduct", "\u6309\u5546\u54C1\u7B5B\u9009\u5361\u5BC6"),
        class: "w-60",
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
      _push(`</div>`);
      if (unref(hasAdminPerm)("cards:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          size: "sm",
          icon: "ph:file-arrow-up-bold",
          class: "bg-purple-600 hover:bg-purple-500 text-white shadow-xs font-medium",
          onClick: openModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("admin.cards.import", "\u5BFC\u5165\u5361\u5BC6"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("admin.cards.import", "\u5BFC\u5165\u5361\u5BC6")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: paginatedCards.value,
        columns: columns.value,
        loading: unref(pending),
        sticky: ""
      }, {
        "product-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(getProductName(row.original.productId, row.original.productName))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(getProductName(row.original.productId, row.original.productName)), 1)
            ];
          }
        }),
        "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              color: row.original.isUsed ? "error" : "success",
              variant: "subtle",
              size: "sm"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.original.isUsed ? unref(t)("admin.cards.status_used", "\u5DF2\u4F7F\u7528") : unref(t)("admin.cards.status_available", "\u53EF\u7528"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.original.isUsed ? unref(t)("admin.cards.status_used", "\u5DF2\u4F7F\u7528") : unref(t)("admin.cards.status_available", "\u53EF\u7528")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                color: row.original.isUsed ? "error" : "success",
                variant: "subtle",
                size: "sm"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.original.isUsed ? unref(t)("admin.cards.status_used", "\u5DF2\u4F7F\u7528") : unref(t)("admin.cards.status_available", "\u53EF\u7528")), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "orderId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (row.original.orderId) {
              _push2(`<span class="text-gray-500 font-mono text-xs"${_scopeId}>${ssrInterpolate(row.original.orderId)}</span>`);
            } else {
              _push2(`<span class="text-gray-400"${_scopeId}>-</span>`);
            }
          } else {
            return [
              row.original.orderId ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-gray-500 font-mono text-xs"
              }, toDisplayString(row.original.orderId), 1)) : (openBlock(), createBlock("span", {
                key: 1,
                class: "text-gray-400"
              }, "-"))
            ];
          }
        }),
        "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
            ];
          }
        }),
        "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              variant: "ghost",
              icon: "ph:trash",
              size: "xs",
              disabled: row.original.isUsed || !unref(hasAdminPerm)("cards:edit"),
              onClick: ($event) => deleteCard(row.original.id)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_UButton, {
                  color: "error",
                  variant: "ghost",
                  icon: "ph:trash",
                  size: "xs",
                  disabled: row.original.isUsed || !unref(hasAdminPerm)("cards:edit"),
                  onClick: ($event) => deleteCard(row.original.id)
                }, null, 8, ["disabled", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-4 py-2.5 border-t border-gray-200/80 dark:border-gray-800/50 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214]"><span class="text-xs text-gray-500 dark:text-gray-400"> \u5171 ${ssrInterpolate(totalItems.value)} \u6761\u5361\u5BC6\u8BB0\u5F55 </span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        total: totalItems.value,
        "items-per-page": unref(pageSize),
        max: 5,
        size: "sm",
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isModalOpen.value,
        "onUpdate:open": ($event) => isModalOpen.value = $event,
        ui: { content: "sm:max-w-xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "bg-white dark:bg-[#121214] ring-1 ring-gray-200 dark:ring-gray-800" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-bold text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(unref(t)("admin.cards.importTitle", "\u6279\u91CF\u5BFC\u5165\u5361\u5BC6"))}</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    size: "xs",
                    onClick: closeModal
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.cards.importTitle", "\u6279\u91CF\u5BFC\u5165\u5361\u5BC6")), 1),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x-bold",
                        size: "xs",
                        onClick: closeModal
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="space-y-4"${_scopeId2}><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(unref(t)("admin.cards.selectProduct", "\u5173\u8054\u5361\u5BC6\u5546\u54C1"))}</label>`);
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: importProductId.value,
                    "onUpdate:modelValue": ($event) => importProductId.value = $event,
                    items: keyProductOptions.value,
                    placeholder: unref(t)("admin.cards.selectProductPlaceholder", "\u8BF7\u9009\u62E9\u5361\u5BC6\u5546\u54C1..."),
                    class: "w-full",
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}><label class="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1"${_scopeId2}>${ssrInterpolate(unref(t)("admin.cards.cardList", "\u5361\u5BC6\u5217\u8868\uFF08\u6BCF\u884C\u4E00\u6761\uFF09"))}</label>`);
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: importContent.value,
                    "onUpdate:modelValue": ($event) => importContent.value = $event,
                    rows: 8,
                    class: "font-mono text-xs w-full",
                    placeholder: unref(t)("admin.cards.cardListPlaceholder", "\u4E00\u884C\u4E00\u6761\u5361\u5BC6\uFF0C\u4F8B\u5982\uFF1A\nAAAA-BBBB-CCCC\nDDDD-EEEE-FFFF"),
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-end gap-2 pt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "sm",
                    onClick: closeModal
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("admin.common.cancel", "\u53D6\u6D88"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("admin.common.cancel", "\u53D6\u6D88")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UButton, {
                    type: "submit",
                    color: "primary",
                    size: "sm",
                    loading: isImporting.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("admin.cards.confirmImport", "\u786E\u8BA4\u5BFC\u5165"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("admin.cards.confirmImport", "\u786E\u8BA4\u5BFC\u5165")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode("form", {
                      class: "space-y-4",
                      onSubmit: withModifiers(handleImport, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.cards.selectProduct", "\u5173\u8054\u5361\u5BC6\u5546\u54C1")), 1),
                        createVNode(_component_USelect, {
                          modelValue: importProductId.value,
                          "onUpdate:modelValue": ($event) => importProductId.value = $event,
                          items: keyProductOptions.value,
                          placeholder: unref(t)("admin.cards.selectProductPlaceholder", "\u8BF7\u9009\u62E9\u5361\u5BC6\u5546\u54C1..."),
                          class: "w-full",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.cards.cardList", "\u5361\u5BC6\u5217\u8868\uFF08\u6BCF\u884C\u4E00\u6761\uFF09")), 1),
                        createVNode(_component_UTextarea, {
                          modelValue: importContent.value,
                          "onUpdate:modelValue": ($event) => importContent.value = $event,
                          rows: 8,
                          class: "font-mono text-xs w-full",
                          placeholder: unref(t)("admin.cards.cardListPlaceholder", "\u4E00\u884C\u4E00\u6761\u5361\u5BC6\uFF0C\u4F8B\u5982\uFF1A\nAAAA-BBBB-CCCC\nDDDD-EEEE-FFFF"),
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          size: "sm",
                          onClick: closeModal
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("admin.common.cancel", "\u53D6\u6D88")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          type: "submit",
                          color: "primary",
                          size: "sm",
                          loading: isImporting.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("admin.cards.confirmImport", "\u786E\u8BA4\u5BFC\u5165")), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ], 32)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "bg-white dark:bg-[#121214] ring-1 ring-gray-200 dark:ring-gray-800" }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-base font-bold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.cards.importTitle", "\u6279\u91CF\u5BFC\u5165\u5361\u5BC6")), 1),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x-bold",
                      size: "xs",
                      onClick: closeModal
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("form", {
                    class: "space-y-4",
                    onSubmit: withModifiers(handleImport, ["prevent"])
                  }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.cards.selectProduct", "\u5173\u8054\u5361\u5BC6\u5546\u54C1")), 1),
                      createVNode(_component_USelect, {
                        modelValue: importProductId.value,
                        "onUpdate:modelValue": ($event) => importProductId.value = $event,
                        items: keyProductOptions.value,
                        placeholder: unref(t)("admin.cards.selectProductPlaceholder", "\u8BF7\u9009\u62E9\u5361\u5BC6\u5546\u54C1..."),
                        class: "w-full",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "placeholder"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1" }, toDisplayString(unref(t)("admin.cards.cardList", "\u5361\u5BC6\u5217\u8868\uFF08\u6BCF\u884C\u4E00\u6761\uFF09")), 1),
                      createVNode(_component_UTextarea, {
                        modelValue: importContent.value,
                        "onUpdate:modelValue": ($event) => importContent.value = $event,
                        rows: 8,
                        class: "font-mono text-xs w-full",
                        placeholder: unref(t)("admin.cards.cardListPlaceholder", "\u4E00\u884C\u4E00\u6761\u5361\u5BC6\uFF0C\u4F8B\u5982\uFF1A\nAAAA-BBBB-CCCC\nDDDD-EEEE-FFFF"),
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        size: "sm",
                        onClick: closeModal
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("admin.common.cancel", "\u53D6\u6D88")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UButton, {
                        type: "submit",
                        color: "primary",
                        size: "sm",
                        loading: isImporting.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("admin.cards.confirmImport", "\u786E\u8BA4\u5BFC\u5165")), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ], 32)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminCardsPanel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AdminCardsPanel = Object.assign(_sfc_main$2, { __name: "AdminCardsPanel" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AdminSubscriptionsPanel",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const toast = useToast();
    const { confirm: confirm2 } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { adminPages } = useExtensions();
    const licenseSyncPage = computed(() => adminPages.value.find((page2) => page2.key === "licenses") || null);
    const searchQuery = ref("");
    const cancellingId = ref(null);
    const {
      page,
      pageSize,
      onPageChange
    } = usePagination(15);
    const { data: subData, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/subscriptions",
      {
        query: computed(() => ({
          page: page.value,
          pageSize: pageSize.value,
          search: searchQuery.value.trim() || void 0
        })),
        watch: [page, searchQuery]
      },
      "$3GQTyloQck"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    watch(searchQuery, () => {
      page.value = 1;
    });
    const paginatedSubscriptions = computed(() => {
      var _a;
      if (Array.isArray(subData.value)) {
        const start = (page.value - 1) * pageSize.value;
        return subData.value.slice(start, start + pageSize.value);
      }
      return ((_a = subData.value) == null ? void 0 : _a.data) || [];
    });
    const totalItems = computed(() => {
      var _a, _b;
      if (Array.isArray(subData.value)) return subData.value.length;
      return Number((_b = (_a = subData.value) == null ? void 0 : _a.total) != null ? _b : paginatedSubscriptions.value.length);
    });
    const columns = computed(() => [
      { accessorKey: "orderId", header: t("admin.subscriptions.orderId", "\u8BA2\u9605\u5355\u53F7") },
      { accessorKey: "productName", header: t("admin.subscriptions.product", "\u8BA2\u9605\u5546\u54C1") },
      { accessorKey: "customer", header: t("admin.subscriptions.customer", "\u5BA2\u6237") },
      { accessorKey: "status", header: t("admin.subscriptions.status", "\u72B6\u6001") },
      { accessorKey: "amount", header: t("admin.subscriptions.amount", "\u5468\u671F\u91D1\u989D") },
      { accessorKey: "interval", header: t("admin.subscriptions.interval", "\u8BA1\u8D39\u5468\u671F") },
      { accessorKey: "dates", header: t("admin.subscriptions.period", "\u6709\u6548\u671F") },
      ...hasAdminPerm("subscriptions:edit") ? [{ accessorKey: "actions", header: t("admin.common.actions", "\u64CD\u4F5C") }] : []
    ]);
    const cancelSubscription = async (sub) => {
      var _a;
      if (!(sub == null ? void 0 : sub.id) || !hasAdminPerm("subscriptions:edit")) return;
      const ok = await confirm2({
        title: t("admin.subscriptions.cancelTitle", "\u786E\u8BA4\u53D6\u6D88\u8BE5\u8BA2\u9605\uFF1F"),
        description: t("admin.subscriptions.cancelDesc", `\u53D6\u6D88\u540E\u5C06\u7ACB\u5373\u7EC8\u6B62\u8BA2\u9605 #${sub.orderId || sub.id} \u5E76\u540C\u6B65\u56DE\u6536\u4E0B\u6E38\u6743\u76CA\u3002`)
      });
      if (!ok) return;
      cancellingId.value = sub.id;
      try {
        const res = await $fetch(`/api/admin/subscriptions/${sub.id}`, { method: "DELETE" });
        toast.add({
          title: (res == null ? void 0 : res.message) || t("admin.subscriptions.cancelSuccess", "\u8BA2\u9605\u5DF2\u53D6\u6D88"),
          color: "success"
        });
        await refresh();
      } catch (err) {
        toast.add({
          title: t("admin.subscriptions.cancelFailed", "\u53D6\u6D88\u8BA2\u9605\u5931\u8D25"),
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        cancellingId.value = null;
      }
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "-";
      return new Date(dateStr).toLocaleDateString();
    };
    const copyToClipboard = (text, label) => {
      (void 0).clipboard.writeText(String(text));
      toast.add({
        title: t("admin.common.copied", "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),
        description: `${label}: ${text}`,
        color: "success"
      });
    };
    const getExternalPlanCode = (metaData) => {
      if (!metaData) return null;
      let meta = {};
      if (typeof metaData === "string") {
        try {
          meta = JSON.parse(metaData);
        } catch {
        }
      } else if (typeof metaData === "object") {
        meta = metaData;
      }
      const direct = meta == null ? void 0 : meta.plan_code;
      if (typeof direct === "string" && direct.trim()) return direct.trim();
      for (const [key, val] of Object.entries(meta)) {
        if (key.endsWith("_plan_code") && typeof val === "string" && val.trim()) {
          return val.trim();
        }
      }
      return null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$D;
      const _component_UButton = _sfc_main$X;
      const _component_UTable = _sfc_main$s;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UBadge = _sfc_main$R;
      const _component_UPagination = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-0 flex-1 flex-col" }, _attrs))}><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="px-4 py-2.5 border-b border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-[#18181b]/30 flex flex-wrap items-center justify-between gap-2.5 shrink-0"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        icon: "ph:magnifying-glass",
        placeholder: unref(t)("admin.subscriptions.search", "\u641C\u7D22\u8BA2\u9605\u8BA2\u5355\u53F7\u3001\u5546\u54C1\u540D\u6216\u5BA2\u6237\u90AE\u7BB1..."),
        class: "w-72 sm:w-80",
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
      _push(`</div><div class="flex items-center gap-2.5">`);
      if (licenseSyncPage.value) {
        _push(ssrRenderComponent(_component_UButton, {
          to: licenseSyncPage.value.route,
          size: "sm",
          color: "neutral",
          variant: "outline",
          icon: "ph:arrows-clockwise"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(licenseSyncPage.value.title || unref(t)("admin.subscriptions.licenseSync", "\u6743\u76CA\u540C\u6B65"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(licenseSyncPage.value.title || unref(t)("admin.subscriptions.licenseSync", "\u6743\u76CA\u540C\u6B65")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="text-xs text-gray-500 dark:text-gray-400 font-mono"> \u5171 ${ssrInterpolate(totalItems.value)} \u6761 </span></div></div><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: paginatedSubscriptions.value,
        columns: columns.value,
        loading: unref(pending),
        class: "min-w-full",
        sticky: ""
      }, {
        "orderId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col min-w-[150px]"${_scopeId}><span class="text-sm font-mono font-medium text-gray-900 dark:text-white cursor-pointer hover:text-primary-500 truncate"${ssrRenderAttr("title", String(row.original.orderId || row.original.id))}${_scopeId}>${ssrInterpolate(row.original.orderId || row.original.id)}</span>`);
            if (row.original.gatewaySubId && row.original.gatewaySubId !== row.original.orderId) {
              _push2(`<span class="text-[11px] text-gray-400 font-mono truncate"${ssrRenderAttr("title", row.original.gatewaySubId)}${_scopeId}>${ssrInterpolate(row.original.gatewaySubId)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col min-w-[150px]" }, [
                createVNode("span", {
                  class: "text-sm font-mono font-medium text-gray-900 dark:text-white cursor-pointer hover:text-primary-500 truncate",
                  title: String(row.original.orderId || row.original.id),
                  onClick: ($event) => copyToClipboard(row.original.orderId || row.original.id, unref(t)("admin.orders.modal.order_id", "\u8BA2\u9605\u53F7"))
                }, toDisplayString(row.original.orderId || row.original.id), 9, ["title", "onClick"]),
                row.original.gatewaySubId && row.original.gatewaySubId !== row.original.orderId ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-[11px] text-gray-400 font-mono truncate",
                  title: row.original.gatewaySubId
                }, toDisplayString(row.original.gatewaySubId), 9, ["title"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "productName-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-0.5"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><span class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.productName || "Unknown Product")}</span>`);
            if (licenseSyncPage.value && getExternalPlanCode(row.original.productMetaData)) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `${licenseSyncPage.value.route}?keyword=${encodeURIComponent(String(row.original.userEmail || ""))}`,
                class: "inline-flex"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: "primary",
                      variant: "subtle",
                      size: "xs",
                      class: "cursor-pointer hover:opacity-80",
                      title: licenseSyncPage.value.description || licenseSyncPage.value.title
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(licenseSyncPage.value.sectionTitle)}: ${ssrInterpolate(getExternalPlanCode(row.original.productMetaData))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(licenseSyncPage.value.sectionTitle) + ": " + toDisplayString(getExternalPlanCode(row.original.productMetaData)), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UBadge, {
                        color: "primary",
                        variant: "subtle",
                        size: "xs",
                        class: "cursor-pointer hover:opacity-80",
                        title: licenseSyncPage.value.description || licenseSyncPage.value.title
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(licenseSyncPage.value.sectionTitle) + ": " + toDisplayString(getExternalPlanCode(row.original.productMetaData)), 1)
                        ]),
                        _: 2
                      }, 1032, ["title"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (row.original.payMethod) {
              _push2(`<span class="text-xs text-gray-400 capitalize"${_scopeId}> \u6E20\u9053: ${ssrInterpolate(row.original.payMethod)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-0.5" }, [
                createVNode("div", { class: "flex items-center gap-1.5" }, [
                  createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(row.original.productName || "Unknown Product"), 1),
                  licenseSyncPage.value && getExternalPlanCode(row.original.productMetaData) ? (openBlock(), createBlock(_component_NuxtLink, {
                    key: 0,
                    to: `${licenseSyncPage.value.route}?keyword=${encodeURIComponent(String(row.original.userEmail || ""))}`,
                    class: "inline-flex"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UBadge, {
                        color: "primary",
                        variant: "subtle",
                        size: "xs",
                        class: "cursor-pointer hover:opacity-80",
                        title: licenseSyncPage.value.description || licenseSyncPage.value.title
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(licenseSyncPage.value.sectionTitle) + ": " + toDisplayString(getExternalPlanCode(row.original.productMetaData)), 1)
                        ]),
                        _: 2
                      }, 1032, ["title"])
                    ]),
                    _: 2
                  }, 1032, ["to"])) : createCommentVNode("", true)
                ]),
                row.original.payMethod ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-xs text-gray-400 capitalize"
                }, " \u6E20\u9053: " + toDisplayString(row.original.payMethod), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "customer-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-700 dark:text-gray-300 font-medium"${_scopeId}>${ssrInterpolate(row.original.userEmail || row.original.contactEmail || "\u533F\u540D\u5BA2\u6237")}</span>`);
            if (row.original.userNickname) {
              _push2(`<span class="text-xs text-gray-400"${_scopeId}>${ssrInterpolate(row.original.userNickname)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300 font-medium" }, toDisplayString(row.original.userEmail || row.original.contactEmail || "\u533F\u540D\u5BA2\u6237"), 1),
                row.original.userNickname ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-xs text-gray-400"
                }, toDisplayString(row.original.userNickname), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              color: row.original.status === "active" ? "success" : row.original.status === "past_due" ? "warning" : "neutral",
              variant: "subtle",
              size: "sm",
              class: "capitalize"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.original.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.original.status), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                color: row.original.status === "active" ? "success" : row.original.status === "past_due" ? "warning" : "neutral",
                variant: "subtle",
                size: "sm",
                class: "capitalize"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.original.status), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "amount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.amount)} ${ssrInterpolate(row.original.currency)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(row.original.amount) + " " + toDisplayString(row.original.currency), 1)
            ];
          }
        }),
        "interval-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm text-gray-500 capitalize"${_scopeId}>${ssrInterpolate(row.original.intervalCount || 1)} ${ssrInterpolate(row.original.interval || "month")}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm text-gray-500 capitalize" }, toDisplayString(row.original.intervalCount || 1) + " " + toDisplayString(row.original.interval || "month"), 1)
            ];
          }
        }),
        "dates-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col text-xs text-gray-400 gap-0.5"${_scopeId}><span${_scopeId}>\u8D77: ${ssrInterpolate(formatDate(row.original.currentPeriodStart || row.original.createdAt))}</span>`);
            if (row.original.currentPeriodEnd) {
              _push2(`<span${_scopeId}> \u6B62: ${ssrInterpolate(formatDate(row.original.currentPeriodEnd))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col text-xs text-gray-400 gap-0.5" }, [
                createVNode("span", null, "\u8D77: " + toDisplayString(formatDate(row.original.currentPeriodStart || row.original.createdAt)), 1),
                row.original.currentPeriodEnd ? (openBlock(), createBlock("span", { key: 0 }, " \u6B62: " + toDisplayString(formatDate(row.original.currentPeriodEnd)), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(hasAdminPerm)("subscriptions:edit") && row.original.status === "active") {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:prohibit",
                loading: cancellingId.value === row.original.id,
                onClick: ($event) => cancelSubscription(row.original)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("admin.subscriptions.cancel", "\u53D6\u6D88\u8BA2\u9605"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("admin.subscriptions.cancel", "\u53D6\u6D88\u8BA2\u9605")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<span class="text-xs text-gray-400"${_scopeId}>\u2014</span>`);
            }
          } else {
            return [
              unref(hasAdminPerm)("subscriptions:edit") && row.original.status === "active" ? (openBlock(), createBlock(_component_UButton, {
                key: 0,
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:prohibit",
                loading: cancellingId.value === row.original.id,
                onClick: ($event) => cancelSubscription(row.original)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("admin.subscriptions.cancel", "\u53D6\u6D88\u8BA2\u9605")), 1)
                ]),
                _: 1
              }, 8, ["loading", "onClick"])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "text-xs text-gray-400"
              }, "\u2014"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-4 py-2.5 border-t border-gray-200/80 dark:border-gray-800/50 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214]"><span class="text-xs text-gray-500 dark:text-gray-400"> \u5171 ${ssrInterpolate(totalItems.value)} \u6761\u8BA2\u9605\u8BB0\u5F55 </span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        total: totalItems.value,
        "items-per-page": unref(pageSize),
        max: 5,
        size: "sm",
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminSubscriptionsPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdminSubscriptionsPanel = Object.assign(_sfc_main$1, { __name: "AdminSubscriptionsPanel" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
    const route = useRoute();
    useRouter();
    const requestUrl = useRequestURL();
    const toast = useToast();
    const { confirm: confirm2 } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { getSetting, fetchSettings } = useSettings();
    const { buildImageProxyUrl } = useImageProxy();
    [__temp, __restore] = withAsyncContext(() => fetchSettings()), await __temp, __restore();
    const baseCurrency = computed(() => getSetting("currency", "USD"));
    const resolveInitialProductTab = () => {
      const qTab = route.query.tab;
      if (qTab === "cards" && hasAdminPerm("cards:view")) return "cards";
      if (qTab === "subscriptions" && hasAdminPerm("subscriptions:view")) return "subscriptions";
      if (hasAdminPerm("products:view")) return "products";
      if (hasAdminPerm("cards:view")) return "cards";
      if (hasAdminPerm("subscriptions:view")) return "subscriptions";
      return "products";
    };
    const activeTab = ref(resolveInitialProductTab());
    watch(() => route.query.tab, () => {
      activeTab.value = resolveInitialProductTab();
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
    const TYPE_META = {
      basic: { labelZh: "\u57FA\u7840", labelEn: "Basic", icon: "ph:cube", color: "neutral" },
      subscription: { labelZh: "\u8BA2\u9605", labelEn: "Subscription", icon: "ph:calendar-check", color: "primary" },
      key: { labelZh: "\u5361\u5BC6", labelEn: "Key", icon: "ph:key", color: "warning" },
      file: { labelZh: "\u6587\u4EF6", labelEn: "File", icon: "ph:file-arrow-down", color: "info" },
      service: { labelZh: "\u670D\u52A1", labelEn: "Service", icon: "ph:headset", color: "success" },
      topup: { labelZh: "\u5145\u503C", labelEn: "Top-up", icon: "ph:wallet", color: "info" }
    };
    const getTypeLabel = (type) => {
      const key = String(type || "basic").toLowerCase();
      const item = TYPE_META[key];
      if (!item) return key.toUpperCase();
      return (locale.value || "zh").startsWith("zh") ? item.labelZh : item.labelEn;
    };
    const getTypeIcon = (type) => {
      var _a;
      const key = String(type || "basic").toLowerCase();
      return ((_a = TYPE_META[key]) == null ? void 0 : _a.icon) || "ph:package";
    };
    const getTypeColor = (type) => {
      var _a;
      const key = String(type || "basic").toLowerCase();
      return ((_a = TYPE_META[key]) == null ? void 0 : _a.color) || "neutral";
    };
    const columns = computed(() => [
      ...hasAdminPerm("products:edit") ? [{ accessorKey: "drag", header: "", meta: { class: { th: "w-9 !px-2", td: "w-9 !px-2" } } }] : [],
      { accessorKey: "name", header: t("admin.products.name") },
      { accessorKey: "type", header: t("admin.products.type"), meta: { class: { th: "w-44" } } },
      { accessorKey: "price", header: t("admin.products.price"), meta: { class: { th: "w-32" } } },
      { accessorKey: "views", header: t("admin.products.views"), meta: { class: { th: "w-24" } } },
      { accessorKey: "isActive", header: t("admin.products.status"), meta: { class: { th: "w-24" } } },
      {
        accessorKey: "actions",
        header: t("admin.products.actions"),
        meta: {
          class: {
            th: "w-28 text-right sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const { page, pageSize: pageCount, onPageChange } = usePagination(15);
    const searchInput = ref("");
    const searchQuery = ref("");
    const selectedType = ref("all");
    const selectedStatus = ref("all");
    let searchDebounceTimer = null;
    watch(searchInput, (val) => {
      if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        searchQuery.value = val.trim();
        page.value = 1;
      }, 280);
    });
    const isFiltered = computed(
      () => Boolean(searchQuery.value) || selectedType.value !== "all" || selectedStatus.value !== "all"
    );
    const resetFilters = () => {
      searchInput.value = "";
      searchQuery.value = "";
      selectedType.value = "all";
      selectedStatus.value = "all";
      page.value = 1;
    };
    const canViewProducts = computed(() => hasAdminPerm("products:view"));
    const { data: publicTypesData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/products/types",
      {
        immediate: !canViewProducts.value
      },
      "$Q32KAb8Zpx"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const {
      data: productsData,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/products",
      {
        immediate: canViewProducts.value,
        query: computed(() => ({
          page: page.value,
          pageSize: pageCount.value,
          search: searchQuery.value || void 0,
          type: selectedType.value !== "all" ? selectedType.value : void 0,
          status: selectedStatus.value !== "all" ? selectedStatus.value : void 0
        })),
        watch: [page, searchQuery, selectedType, selectedStatus],
        onResponseError({ response }) {
          if (response.status === 401) {
            useRouter().push("/admin/login");
          }
        }
      },
      "$BYQfDOyOPO"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    watch([selectedType, selectedStatus], () => {
      page.value = 1;
    });
    const paginatedProducts = computed(() => {
      var _a;
      return ((_a = productsData.value) == null ? void 0 : _a.data) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return Number(((_a = productsData.value) == null ? void 0 : _a.total) || 0);
    });
    const summary = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const raw = (_a = productsData.value) == null ? void 0 : _a.summary;
      return {
        all: Number((_b = raw == null ? void 0 : raw.all) != null ? _b : totalItems.value),
        active: Number((_c = raw == null ? void 0 : raw.active) != null ? _c : 0),
        hidden: Number((_d = raw == null ? void 0 : raw.hidden) != null ? _d : 0),
        inactive: Number((_e = raw == null ? void 0 : raw.inactive) != null ? _e : 0),
        types: Array.isArray(raw == null ? void 0 : raw.types) ? raw.types : ((_f = publicTypesData.value) == null ? void 0 : _f.data) || [],
        availableCards: (raw == null ? void 0 : raw.availableCards) !== void 0 ? Number(raw.availableCards) : void 0,
        activeSubscriptions: (raw == null ? void 0 : raw.activeSubscriptions) !== void 0 ? Number(raw.activeSubscriptions) : void 0
      };
    });
    const availableTypes = computed(() => summary.value.types || []);
    const typeFilterOptions = computed(() => [
      { label: (locale.value || "zh").startsWith("zh") ? "\u5168\u90E8\u7C7B\u578B" : "All Types", value: "all" },
      ...availableTypes.value.map((typeCode) => ({
        label: getTypeLabel(typeCode),
        value: typeCode
      }))
    ]);
    const statusPills = computed(() => [
      { value: "all", label: t("admin.common.all", "\u5168\u90E8"), count: summary.value.all, dotClass: "" },
      { value: "active", label: t("admin.products.active", "\u516C\u5F00"), count: summary.value.active, dotClass: "bg-emerald-500" },
      { value: "hidden", label: t("admin.products.hidden", "\u9690\u85CF"), count: summary.value.hidden, dotClass: "bg-amber-500" },
      { value: "inactive", label: t("admin.products.inactive", "\u4E0B\u67B6"), count: summary.value.inactive, dotClass: "bg-gray-400" }
    ]);
    const hasKeyProducts = computed(
      () => availableTypes.value.includes("key") || paginatedProducts.value.some((p) => p.type === "key")
    );
    const hasSubscriptionProducts = computed(
      () => availableTypes.value.includes("subscription") || paginatedProducts.value.some((p) => p.type === "subscription")
    );
    const visibleTabs = computed(() => {
      const tabs = [];
      if (hasAdminPerm("products:view")) {
        tabs.push({
          key: "products",
          label: t("admin.products.tab_all", "\u5168\u90E8\u5546\u54C1"),
          icon: "ph:package-bold",
          count: summary.value.all
        });
      }
      if (hasKeyProducts.value && hasAdminPerm("cards:view")) {
        tabs.push({
          key: "cards",
          label: t("admin.cards.title", "\u5361\u5BC6\u5E93\u5B58"),
          icon: "ph:barcode-bold",
          count: summary.value.availableCards
        });
      }
      if (hasSubscriptionProducts.value && hasAdminPerm("subscriptions:view")) {
        tabs.push({
          key: "subscriptions",
          label: t("admin.subscriptions.title", "\u8BA2\u9605\u7BA1\u7406"),
          icon: "ph:calendar-check-bold",
          count: summary.value.activeSubscriptions
        });
      }
      return tabs;
    });
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
    const getOriginalPrice = (product) => {
      const meta = getProductMetaData(product);
      const val = Number(meta == null ? void 0 : meta.original_price);
      return Number.isFinite(val) ? val : 0;
    };
    const hasCustomLocalePricing = (product) => {
      const meta = getProductMetaData(product);
      const prices = meta == null ? void 0 : meta.locale_prices;
      return Boolean(prices && typeof prices === "object" && Object.keys(prices).length > 0);
    };
    const getBillingCycleLabel = (product) => {
      if ((product == null ? void 0 : product.type) !== "subscription") return "";
      const meta = getProductMetaData(product);
      const unit = String((meta == null ? void 0 : meta.billing_interval) || (meta == null ? void 0 : meta.interval) || "").toLowerCase();
      const countVal = Number((meta == null ? void 0 : meta.billing_interval_count) || (meta == null ? void 0 : meta.interval_count) || 1);
      if (!unit) return "";
      if (unit === "lifetime") return t("admin.products.form.interval_lifetime", "\u6C38\u4E45");
      const unitLabelMap = {
        day: t("admin.products.form.interval_day", "\u5929"),
        week: t("admin.products.form.interval_week", "\u5468"),
        month: t("admin.products.form.interval_month", "\u6708"),
        year: t("admin.products.form.interval_year", "\u5E74")
      };
      const unitLabel = unitLabelMap[unit] || unit;
      return countVal > 1 ? `${countVal}${unitLabel}` : `/${unitLabel}`;
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
      }).filter((feature) => Boolean(feature.name));
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
    const getPlanFeaturesTooltip = (product) => getProductPlanFeatures(product).map((feature) => `${feature.included ? "\u2713" : "\u2715"} ${feature.name}`).join("\n");
    const copyProductUrl = async (product) => {
      try {
        const origin = requestUrl.origin.replace(/\/$/, "");
        const fullUrl = `${origin}/products/${product.slug || product.id}`;
        await (void 0).clipboard.writeText(fullUrl);
        toast.add({
          title: t("admin.common.copySuccess", "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),
          description: fullUrl,
          color: "success"
        });
      } catch {
        toast.add({
          title: t("admin.common.error", "\u590D\u5236\u5931\u8D25"),
          color: "error"
        });
      }
    };
    const sortableTarget = computed(
      () => null
    );
    useSortable(sortableTarget, paginatedProducts, {
      animation: 150,
      handle: ".drag-handle",
      onEnd: async () => {
        if (isFiltered.value) return;
        const total = totalItems.value;
        const startIndex = (page.value - 1) * pageCount.value;
        const reorderedItems = paginatedProducts.value.map((item, index) => ({
          id: item.id,
          sortOrder: total - (startIndex + index)
        }));
        try {
          await $fetch("/api/admin/products/reorder", {
            method: "PUT",
            body: { items: reorderedItems }
          });
          toast.add({
            title: t("admin.common.success", "\u6210\u529F"),
            description: "\u5546\u54C1\u6392\u5E8F\u5DF2\u66F4\u65B0",
            color: "success"
          });
          await refresh();
        } catch {
          toast.add({
            title: t("admin.common.error", "\u5931\u8D25"),
            description: "\u66F4\u65B0\u5546\u54C1\u6392\u5E8F\u5931\u8D25",
            color: "error"
          });
          await refresh();
        }
      }
    });
    const deleteProduct = async (id) => {
      var _a;
      const isConfirmed = await confirm2({
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
      const _component_UBadge = _sfc_main$R;
      const _component_UIcon = _sfc_main$10;
      const _component_UButton = _sfc_main$X;
      const _component_USelect = _sfc_main$u;
      const _component_UInput = _sfc_main$D;
      const _component_UTable = _sfc_main$s;
      const _component_UTooltip = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UPagination = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-6.25rem)] flex flex-col gap-3" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-3 shrink-0"><div class="flex items-center gap-2.5 min-w-0"><h1 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight truncate">${ssrInterpolate(activeTab.value === "cards" ? _ctx.$t("admin.cards.title", "\u5361\u5BC6\u5E93\u5B58") : activeTab.value === "subscriptions" ? _ctx.$t("admin.subscriptions.title", "\u8BA2\u9605\u7BA1\u7406") : _ctx.$t("admin.products.title", "\u4EA7\u54C1\u7BA1\u7406"))}</h1>`);
      if (activeTab.value === "products") {
        _push(ssrRenderComponent(_component_UBadge, {
          color: "primary",
          variant: "subtle",
          size: "xs",
          class: "font-mono font-semibold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(summary.value.all)}`);
            } else {
              return [
                createTextVNode(toDisplayString(summary.value.all), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-2.5 shrink-0">`);
      if (visibleTabs.value.length > 1) {
        _push(`<div class="flex items-center gap-1 bg-gray-100 dark:bg-white/5 p-1 rounded-xl"><!--[-->`);
        ssrRenderList(visibleTabs.value, (tab) => {
          _push(`<button type="button" class="${ssrRenderClass([activeTab.value === tab.key ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer select-none"])}">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: tab.icon,
            class: "h-3.5 w-3.5 shrink-0"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(tab.label)}</span>`);
          if (tab.count !== void 0) {
            _push(`<span class="${ssrRenderClass([activeTab.value === tab.key ? "bg-purple-100 dark:bg-purple-900/50 font-bold text-purple-700 dark:text-purple-300" : "bg-gray-200/70 dark:bg-white/10 text-gray-500 dark:text-gray-400", "rounded-full px-1.5 py-0.2 text-[10px] font-mono leading-tight"])}">${ssrInterpolate(tab.count)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "products" && unref(hasAdminPerm)("products:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          class: "bg-purple-600 hover:bg-purple-500 text-white font-medium shadow-xs",
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
      _push(`</div></div>`);
      if (activeTab.value === "cards" && unref(hasAdminPerm)("cards:view")) {
        _push(ssrRenderComponent(AdminCardsPanel, null, null, _parent));
      } else if (activeTab.value === "subscriptions" && unref(hasAdminPerm)("subscriptions:view")) {
        _push(ssrRenderComponent(AdminSubscriptionsPanel, null, null, _parent));
      } else {
        _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="px-4 py-2.5 border-b border-gray-200/70 dark:border-gray-800/60 bg-gray-50/50 dark:bg-[#18181b]/30 flex flex-wrap items-center justify-between gap-2.5 shrink-0"><div class="flex items-center gap-1 overflow-x-auto"><!--[-->`);
        ssrRenderList(statusPills.value, (pill) => {
          _push(`<button type="button" class="${ssrRenderClass([selectedStatus.value === pill.value ? "bg-white dark:bg-[#1e1e24] text-gray-900 dark:text-white ring-1 ring-gray-200 dark:ring-gray-700 font-semibold shadow-2xs" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/[0.04]", "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer select-none shrink-0"])}">`);
          if (pill.dotClass) {
            _push(`<span class="${ssrRenderClass([pill.dotClass, "h-1.5 w-1.5 rounded-full shrink-0"])}"></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(pill.label)}</span><span class="text-[10px] font-mono opacity-70">${ssrInterpolate(pill.count)}</span></button>`);
        });
        _push(`<!--]--></div><div class="flex items-center gap-2 flex-wrap sm:flex-nowrap w-full sm:w-auto justify-end">`);
        if (availableTypes.value.length > 1) {
          _push(ssrRenderComponent(_component_USelect, {
            modelValue: selectedType.value,
            "onUpdate:modelValue": ($event) => selectedType.value = $event,
            items: typeFilterOptions.value,
            class: "w-32 text-xs shrink-0",
            size: "sm"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: searchInput.value,
          "onUpdate:modelValue": ($event) => searchInput.value = $event,
          icon: "ph:magnifying-glass",
          placeholder: _ctx.$t("admin.products.searchPlaceholder", "\u641C\u7D22\u540D\u79F0\u3001Slug \u6216\u63CF\u8FF0..."),
          class: "w-full sm:w-60 text-xs",
          size: "sm"
        }, createSlots({ _: 2 }, [
          searchInput.value ? {
            name: "trailing",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button type="button" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:x-circle-fill",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                return [
                  createVNode("button", {
                    type: "button",
                    class: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer",
                    onClick: ($event) => searchInput.value = ""
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:x-circle-fill",
                      class: "w-3.5 h-3.5"
                    })
                  ], 8, ["onClick"])
                ];
              }
            }),
            key: "0"
          } : void 0
        ]), _parent));
        if (isFiltered.value) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "ghost",
            size: "sm",
            icon: "ph:arrow-counter-clockwise",
            title: _ctx.$t("admin.common.reset", "\u91CD\u7F6E\u7B5B\u9009"),
            onClick: resetFilters
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          icon: "ph:arrows-clockwise",
          size: "sm",
          loading: unref(pending),
          class: "hover:bg-gray-50 dark:hover:bg-gray-800 shrink-0",
          title: _ctx.$t("admin.common.refresh", "\u5237\u65B0"),
          onClick: () => unref(refresh)()
        }, null, _parent));
        _push(`</div></div><div class="flex-1 overflow-auto">`);
        _push(ssrRenderComponent(_component_UTable, {
          data: paginatedProducts.value,
          columns: columns.value,
          loading: unref(pending),
          ui: {
            tbody: "my-table-tbody divide-y divide-gray-100 dark:divide-gray-800/70",
            th: "py-2.5 px-3 text-xs",
            td: "py-2.5 px-3"
          },
          sticky: ""
        }, {
          "drag-cell": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UTooltip, {
                text: isFiltered.value ? "\u7B5B\u9009\u72B6\u6001\u4E0B\u4E0D\u53EF\u62D6\u62FD\u8C03\u6574\u5168\u5C40\u6392\u5E8F" : "\u62D6\u62FD\u8C03\u6574\u6392\u5E8F",
                content: { side: "right" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([isFiltered.value ? "cursor-not-allowed text-gray-300 dark:text-gray-700" : "drag-handle cursor-move text-gray-400 hover:text-gray-800 dark:hover:text-white", "w-6 flex items-center justify-center transition-colors"])}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:dots-six-vertical-bold",
                      class: "w-4 h-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["w-6 flex items-center justify-center transition-colors", isFiltered.value ? "cursor-not-allowed text-gray-300 dark:text-gray-700" : "drag-handle cursor-move text-gray-400 hover:text-gray-800 dark:hover:text-white"]
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:dots-six-vertical-bold",
                          class: "w-4 h-4"
                        })
                      ], 2)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UTooltip, {
                  text: isFiltered.value ? "\u7B5B\u9009\u72B6\u6001\u4E0B\u4E0D\u53EF\u62D6\u62FD\u8C03\u6574\u5168\u5C40\u6392\u5E8F" : "\u62D6\u62FD\u8C03\u6574\u6392\u5E8F",
                  content: { side: "right" }
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: ["w-6 flex items-center justify-center transition-colors", isFiltered.value ? "cursor-not-allowed text-gray-300 dark:text-gray-700" : "drag-handle cursor-move text-gray-400 hover:text-gray-800 dark:hover:text-white"]
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:dots-six-vertical-bold",
                        class: "w-4 h-4"
                      })
                    ], 2)
                  ]),
                  _: 1
                }, 8, ["text"])
              ];
            }
          }),
          "name-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3 min-w-[220px] max-w-md"${_scopeId}><div class="w-10 h-10 rounded-lg overflow-hidden border border-gray-200/80 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0"${_scopeId}>`);
              if (row.original.imageUrl) {
                _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(String(row.original.imageUrl)))} class="w-full h-full object-cover"${ssrRenderAttr("alt", String(row.original.name))}${_scopeId}>`);
              } else {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: getTypeIcon(row.original.type),
                  class: "w-4 h-4 text-gray-400 dark:text-gray-500"
                }, null, _parent2, _scopeId));
              }
              _push2(`</div><div class="min-w-0 flex-1"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}>`);
              if (unref(hasAdminPerm)("products:edit")) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/admin/products/${row.original.id}`,
                  class: "text-sm font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate",
                  title: String(row.original.name)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(row.original.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(row.original.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="text-sm font-semibold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(row.original.name)}</span>`);
              }
              if (getProductMetaData(row.original).is_pricing_plan) {
                _push2(ssrRenderComponent(_component_UTooltip, {
                  text: _ctx.$t("admin.products.pricingPlan")
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:star-fill",
                        class: "w-3.5 h-3.5 text-amber-500 shrink-0"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:star-fill",
                          class: "w-3.5 h-3.5 text-amber-500 shrink-0"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center gap-1.5 mt-0.5 text-[11px] text-gray-400 dark:text-gray-500"${_scopeId}><span class="font-mono shrink-0"${_scopeId}>#${ssrInterpolate(row.original.id)}</span><span${_scopeId}>\xB7</span><button type="button" class="group/slug inline-flex items-center gap-1 font-mono text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 truncate max-w-[200px] cursor-pointer transition-colors"${ssrRenderAttr("title", `/products/${row.original.slug || row.original.id}`)}${_scopeId}><span class="truncate"${_scopeId}>/${ssrInterpolate(row.original.slug || row.original.id)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:copy-simple",
                class: "w-3 h-3 shrink-0 opacity-0 group-hover/slug:opacity-100 transition-opacity"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3 min-w-[220px] max-w-md" }, [
                  createVNode("div", { class: "w-10 h-10 rounded-lg overflow-hidden border border-gray-200/80 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 flex items-center justify-center shrink-0" }, [
                    row.original.imageUrl ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: unref(buildImageProxyUrl)(String(row.original.imageUrl)),
                      class: "w-full h-full object-cover",
                      alt: String(row.original.name)
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_UIcon, {
                      key: 1,
                      name: getTypeIcon(row.original.type),
                      class: "w-4 h-4 text-gray-400 dark:text-gray-500"
                    }, null, 8, ["name"]))
                  ]),
                  createVNode("div", { class: "min-w-0 flex-1" }, [
                    createVNode("div", { class: "flex items-center gap-1.5" }, [
                      unref(hasAdminPerm)("products:edit") ? (openBlock(), createBlock(_component_NuxtLink, {
                        key: 0,
                        to: `/admin/products/${row.original.id}`,
                        class: "text-sm font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate",
                        title: String(row.original.name)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.original.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to", "title"])) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-sm font-semibold text-gray-900 dark:text-white truncate"
                      }, toDisplayString(row.original.name), 1)),
                      getProductMetaData(row.original).is_pricing_plan ? (openBlock(), createBlock(_component_UTooltip, {
                        key: 2,
                        text: _ctx.$t("admin.products.pricingPlan")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:star-fill",
                            class: "w-3.5 h-3.5 text-amber-500 shrink-0"
                          })
                        ]),
                        _: 1
                      }, 8, ["text"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center gap-1.5 mt-0.5 text-[11px] text-gray-400 dark:text-gray-500" }, [
                      createVNode("span", { class: "font-mono shrink-0" }, "#" + toDisplayString(row.original.id), 1),
                      createVNode("span", null, "\xB7"),
                      createVNode("button", {
                        type: "button",
                        class: "group/slug inline-flex items-center gap-1 font-mono text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 truncate max-w-[200px] cursor-pointer transition-colors",
                        title: `/products/${row.original.slug || row.original.id}`,
                        onClick: withModifiers(($event) => copyProductUrl(row.original), ["stop"])
                      }, [
                        createVNode("span", { class: "truncate" }, "/" + toDisplayString(row.original.slug || row.original.id), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:copy-simple",
                          class: "w-3 h-3 shrink-0 opacity-0 group-hover/slug:opacity-100 transition-opacity"
                        })
                      ], 8, ["title", "onClick"])
                    ])
                  ])
                ])
              ];
            }
          }),
          "type-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-1.5 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: getTypeColor(row.original.type),
                variant: "subtle",
                size: "sm",
                class: "inline-flex items-center gap-1 font-medium"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: getTypeIcon(row.original.type),
                      class: "w-3 h-3 shrink-0"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>${ssrInterpolate(getTypeLabel(row.original.type))}</span>`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: getTypeIcon(row.original.type),
                        class: "w-3 h-3 shrink-0"
                      }, null, 8, ["name"]),
                      createVNode("span", null, toDisplayString(getTypeLabel(row.original.type)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (getBillingCycleLabel(row.original)) {
                _push2(`<span class="text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded"${_scopeId}>${ssrInterpolate(getBillingCycleLabel(row.original))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (isPlanFeatureProduct(row.original) && getProductPlanFeatures(row.original).length > 0) {
                _push2(ssrRenderComponent(_component_UTooltip, {
                  text: getPlanFeaturesTooltip(row.original)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UBadge, {
                        color: "neutral",
                        variant: "outline",
                        size: "xs",
                        class: "cursor-help font-mono"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(getProductPlanFeatures(row.original).length)} \u9879\u7279\u6027 `);
                          } else {
                            return [
                              createTextVNode(toDisplayString(getProductPlanFeatures(row.original).length) + " \u9879\u7279\u6027 ", 1)
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
                          size: "xs",
                          class: "cursor-help font-mono"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getProductPlanFeatures(row.original).length) + " \u9879\u7279\u6027 ", 1)
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
              return [
                createVNode("div", { class: "flex items-center gap-1.5 whitespace-nowrap" }, [
                  createVNode(_component_UBadge, {
                    color: getTypeColor(row.original.type),
                    variant: "subtle",
                    size: "sm",
                    class: "inline-flex items-center gap-1 font-medium"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: getTypeIcon(row.original.type),
                        class: "w-3 h-3 shrink-0"
                      }, null, 8, ["name"]),
                      createVNode("span", null, toDisplayString(getTypeLabel(row.original.type)), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]),
                  getBillingCycleLabel(row.original) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-1.5 py-0.5 rounded"
                  }, toDisplayString(getBillingCycleLabel(row.original)), 1)) : createCommentVNode("", true),
                  isPlanFeatureProduct(row.original) && getProductPlanFeatures(row.original).length > 0 ? (openBlock(), createBlock(_component_UTooltip, {
                    key: 1,
                    text: getPlanFeaturesTooltip(row.original)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UBadge, {
                        color: "neutral",
                        variant: "outline",
                        size: "xs",
                        class: "cursor-help font-mono"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(getProductPlanFeatures(row.original).length) + " \u9879\u7279\u6027 ", 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["text"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "price-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-baseline gap-1.5 whitespace-nowrap font-mono"${_scopeId}><span class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(row.original.price, baseCurrency.value))}</span>`);
              if (getOriginalPrice(row.original) > Number(row.original.price || 0)) {
                _push2(`<span class="text-xs text-gray-400 line-through"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(getOriginalPrice(row.original), baseCurrency.value))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (hasCustomLocalePricing(row.original)) {
                _push2(ssrRenderComponent(_component_UTooltip, { text: "\u5DF2\u914D\u7F6E\u591A\u8BED\u8A00\u72EC\u7ACB\u552E\u4EF7" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:globe-simple",
                        class: "w-3.5 h-3.5 text-purple-500 self-center shrink-0"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:globe-simple",
                          class: "w-3.5 h-3.5 text-purple-500 self-center shrink-0"
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
            } else {
              return [
                createVNode("div", { class: "flex items-baseline gap-1.5 whitespace-nowrap font-mono" }, [
                  createVNode("span", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(row.original.price, baseCurrency.value)), 1),
                  getOriginalPrice(row.original) > Number(row.original.price || 0) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-xs text-gray-400 line-through"
                  }, toDisplayString(unref(formatCurrencyAmount)(getOriginalPrice(row.original), baseCurrency.value)), 1)) : createCommentVNode("", true),
                  hasCustomLocalePricing(row.original) ? (openBlock(), createBlock(_component_UTooltip, {
                    key: 1,
                    text: "\u5DF2\u914D\u7F6E\u591A\u8BED\u8A00\u72EC\u7ACB\u552E\u4EF7"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: "ph:globe-simple",
                        class: "w-3.5 h-3.5 text-purple-500 self-center shrink-0"
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "views-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-gray-500 dark:text-gray-400 text-xs font-mono inline-flex items-center gap-1 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:eye",
                class: "w-3.5 h-3.5 opacity-75"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(row.original.views || 0)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs font-mono inline-flex items-center gap-1 whitespace-nowrap" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:eye",
                    class: "w-3.5 h-3.5 opacity-75"
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
                variant: "subtle",
                size: "sm",
                class: "whitespace-nowrap"
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
                  variant: "subtle",
                  size: "sm",
                  class: "whitespace-nowrap"
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
              _push2(`<div class="flex items-center justify-end gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:arrow-square-out",
                title: _ctx.$t("admin.products.viewPage"),
                to: `/products/${row.original.slug || row.original.id}`,
                target: "_blank"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:pencil-simple",
                title: _ctx.$t("admin.products.edit"),
                to: `/admin/products/${row.original.id}`,
                disabled: !unref(hasAdminPerm)("products:edit")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                title: _ctx.$t("admin.products.delete"),
                disabled: !unref(hasAdminPerm)("products:edit"),
                onClick: ($event) => deleteProduct(Number(row.original.id))
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:arrow-square-out",
                    title: _ctx.$t("admin.products.viewPage"),
                    to: `/products/${row.original.slug || row.original.id}`,
                    target: "_blank"
                  }, null, 8, ["title", "to"]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:pencil-simple",
                    title: _ctx.$t("admin.products.edit"),
                    to: `/admin/products/${row.original.id}`,
                    disabled: !unref(hasAdminPerm)("products:edit")
                  }, null, 8, ["title", "to", "disabled"]),
                  createVNode(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:trash",
                    title: _ctx.$t("admin.products.delete"),
                    disabled: !unref(hasAdminPerm)("products:edit"),
                    onClick: ($event) => deleteProduct(Number(row.original.id))
                  }, null, 8, ["title", "disabled", "onClick"])
                ])
              ];
            }
          }),
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="py-12 flex flex-col items-center justify-center text-center px-4"${_scopeId}><div class="w-11 h-11 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:package-duotone",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(isFiltered.value ? "\u672A\u627E\u5230\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u5546\u54C1" : _ctx.$t("admin.common.noData"))}</p><div class="mt-3 flex items-center gap-2"${_scopeId}>`);
              if (isFiltered.value) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  size: "xs",
                  icon: "ph:arrow-counter-clockwise",
                  onClick: resetFilters
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.common.reset", "\u91CD\u7F6E\u7B5B\u9009"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.common.reset", "\u91CD\u7F6E\u7B5B\u9009")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (unref(hasAdminPerm)("products:edit")) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  size: "xs",
                  icon: "ph:plus-bold",
                  to: "/admin/products/create"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.products.add"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.products.add")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "py-12 flex flex-col items-center justify-center text-center px-4" }, [
                  createVNode("div", { class: "w-11 h-11 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-2.5" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:package-duotone",
                      class: "w-5 h-5"
                    })
                  ]),
                  createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(isFiltered.value ? "\u672A\u627E\u5230\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u5546\u54C1" : _ctx.$t("admin.common.noData")), 1),
                  createVNode("div", { class: "mt-3 flex items-center gap-2" }, [
                    isFiltered.value ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      color: "neutral",
                      variant: "outline",
                      size: "xs",
                      icon: "ph:arrow-counter-clockwise",
                      onClick: resetFilters
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.common.reset", "\u91CD\u7F6E\u7B5B\u9009")), 1)
                      ]),
                      _: 1
                    })) : unref(hasAdminPerm)("products:edit") ? (openBlock(), createBlock(_component_UButton, {
                      key: 1,
                      color: "primary",
                      size: "xs",
                      icon: "ph:plus-bold",
                      to: "/admin/products/create"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("admin.products.add")), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="px-4 py-2.5 border-t border-gray-200/80 dark:border-gray-800/50 flex justify-between items-center shrink-0 bg-white dark:bg-[#121214]"><div class="text-xs text-gray-500 dark:text-gray-400 font-mono">${ssrInterpolate(_ctx.$t("admin.common.showing"))} <span class="text-gray-900 dark:text-white font-semibold">${ssrInterpolate(totalItems.value > 0 ? Math.min(totalItems.value, (unref(page) - 1) * unref(pageCount) + 1) : 0)}</span> ${ssrInterpolate(_ctx.$t("admin.common.to"))} <span class="text-gray-900 dark:text-white font-semibold">${ssrInterpolate(Math.min(unref(page) * unref(pageCount), totalItems.value))}</span> ${ssrInterpolate(_ctx.$t("admin.common.of"))} <span class="text-gray-900 dark:text-white font-semibold">${ssrInterpolate(totalItems.value)}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: unref(page),
          "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
          total: totalItems.value,
          "items-per-page": unref(pageCount),
          size: "sm",
          "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
        }, null, _parent));
        _push(`</div></div>`);
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
//# sourceMappingURL=index-ZVhUZUtN.mjs.map
