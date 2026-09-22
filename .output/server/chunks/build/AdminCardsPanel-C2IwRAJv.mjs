import { e as useI18n, f as useFormatTime, g as useToast, h as useAdminPermissions, x as usePagination, y as useFetch, o as _sfc_main$j, k as _sfc_main$B, l as _sfc_main$h, n as _sfc_main$x, z as _sfc_main$n, p as _sfc_main$s, O as _sfc_main$g } from './server.mjs';
import { _ as _sfc_main$1 } from './Card-jMFP8cqX.mjs';
import { defineComponent, ref, withAsyncContext, computed, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, isRef, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const ALL = "all";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      totalItems,
      onPageChange,
      onNewItemAdded,
      onItemDeleted
    } = usePagination(10);
    const { data: productsData } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/products",
      "$rF4dyaromc"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: cardsData, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/cards",
      {
        query: computed(() => ({
          productId: selectedProduct.value && selectedProduct.value !== ALL ? selectedProduct.value : void 0
        }))
      },
      "$OsLqfXK9ev"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const products = computed(() => {
      var _a;
      return ((_a = productsData.value) == null ? void 0 : _a.data) || [];
    });
    const cards = computed(() => {
      var _a;
      return ((_a = cardsData.value) == null ? void 0 : _a.data) || [];
    });
    watch(cards, (newCards) => {
      totalItems.value = newCards.length;
    }, { immediate: true });
    watch(selectedProduct, () => {
      page.value = 1;
    });
    const paginatedCards = computed(() => {
      const start = (page.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return cards.value.slice(start, end);
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
      { accessorKey: "cardCode", header: t("admin.cards.cardCode", "\u5361\u5BC6\u5185\u5BB9") },
      { accessorKey: "status", header: t("admin.cards.status", "\u4F7F\u7528\u72B6\u6001") },
      { accessorKey: "orderId", header: t("admin.cards.orderId", "\u5173\u8054\u8BA2\u5355") },
      { accessorKey: "createdAt", header: t("admin.cards.createdAt", "\u5BFC\u5165\u65F6\u95F4") },
      { id: "actions", header: t("admin.common.actions", "\u64CD\u4F5C") }
    ]);
    const getProductName = (productId) => {
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
            cards: cardsList
          }
        });
        if (res.code === 200) {
          toast.add({ title: t("admin.cards.importSuccess", `\u6210\u529F\u5BFC\u5165 ${cardsList.length} \u6761\u5361\u5BC6`), color: "success" });
          closeModal();
          await refresh();
          onNewItemAdded(cardsList.length);
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
        if (res.code === 200) {
          toast.add({ title: t("admin.cards.deleteSuccess", "\u5220\u9664\u6210\u529F"), color: "success" });
          await refresh();
          onItemDeleted();
        }
      } catch (error) {
        toast.add({ title: t("admin.cards.deleteError", "\u5220\u9664\u5931\u8D25"), description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message), color: "error" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USelect = _sfc_main$j;
      const _component_UButton = _sfc_main$B;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$x;
      const _component_UPagination = _sfc_main$n;
      const _component_UModal = _sfc_main$s;
      const _component_UCard = _sfc_main$1;
      const _component_UTextarea = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-0 flex-1 flex-col" }, _attrs))}><div class="mb-4 flex shrink-0 items-center justify-between gap-4"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: selectedProduct.value,
        "onUpdate:modelValue": ($event) => selectedProduct.value = $event,
        items: productOptions.value,
        placeholder: unref(t)("admin.cards.filterProduct", "\u6309\u5546\u54C1\u7B5B\u9009\u5361\u5BC6"),
        class: "w-64",
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
          class: "shadow-xs font-medium",
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
      _push(`</div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: paginatedCards.value,
        columns: columns.value,
        loading: unref(pending),
        sticky: ""
      }, {
        "product-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(getProductName(row.original.productId))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(getProductName(row.original.productId)), 1)
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
      _push(`</div><div class="p-3.5 border-t border-gray-200/80 dark:border-gray-800/50 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214]"><span class="text-xs text-gray-500 dark:text-gray-400"> \u5171 ${ssrInterpolate(unref(totalItems))} \u6761\u5361\u5BC6\u8BB0\u5F55 </span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        total: unref(totalItems),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminCardsPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminCardsPanel = Object.assign(_sfc_main, { __name: "AdminCardsPanel" });

export { AdminCardsPanel as A };
