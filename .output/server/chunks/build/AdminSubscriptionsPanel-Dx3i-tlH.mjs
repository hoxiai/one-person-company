import { e as useI18n, g as useToast, x as usePagination, y as useFetch, d as _sfc_main$k, k as _sfc_main$B, l as _sfc_main$h, n as _sfc_main$x, z as _sfc_main$n } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdminSubscriptionsPanel",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const toast = useToast();
    const searchQuery = ref("");
    const {
      page,
      pageSize,
      totalItems,
      onPageChange
    } = usePagination(10);
    const { data: subData, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/subscriptions",
      "$3GQTyloQck"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const subscriptions = computed(() => {
      var _a;
      return ((_a = subData.value) == null ? void 0 : _a.data) || [];
    });
    const filteredSubscriptions = computed(() => {
      if (!searchQuery.value) return subscriptions.value;
      const q = searchQuery.value.toLowerCase();
      return subscriptions.value.filter(
        (s) => s.orderId && s.orderId.toLowerCase().includes(q) || s.gatewaySubId && s.gatewaySubId.toLowerCase().includes(q) || s.productName && s.productName.toLowerCase().includes(q) || s.userEmail && s.userEmail.toLowerCase().includes(q) || s.contactEmail && s.contactEmail.toLowerCase().includes(q)
      );
    });
    watch(filteredSubscriptions, (newSubs) => {
      totalItems.value = newSubs.length;
    }, { immediate: true });
    const paginatedSubscriptions = computed(() => {
      const start = (page.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filteredSubscriptions.value.slice(start, end);
    });
    const columns = computed(() => [
      { accessorKey: "orderId", header: t("admin.subscriptions.orderId", "\u8BA2\u9605\u5355\u53F7") },
      { accessorKey: "productName", header: t("admin.subscriptions.product", "\u8BA2\u9605\u5546\u54C1") },
      { accessorKey: "customer", header: t("admin.subscriptions.customer", "\u5BA2\u6237") },
      { accessorKey: "status", header: t("admin.subscriptions.status", "\u72B6\u6001") },
      { accessorKey: "amount", header: t("admin.subscriptions.amount", "\u5468\u671F\u91D1\u989D") },
      { accessorKey: "interval", header: t("admin.subscriptions.interval", "\u8BA1\u8D39\u5468\u671F") },
      { accessorKey: "dates", header: t("admin.subscriptions.period", "\u6709\u6548\u671F") }
    ]);
    const formatDate = (dateStr) => {
      if (!dateStr) return "-";
      return new Date(dateStr).toLocaleDateString();
    };
    const copyToClipboard = (text, label) => {
      (void 0).clipboard.writeText(text);
      toast.add({
        title: t("admin.common.copied", "\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"),
        description: `${label}: ${text}`,
        color: "success"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$B;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$x;
      const _component_UPagination = _sfc_main$n;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-0 flex-1 flex-col" }, _attrs))}><div class="mb-4 flex shrink-0 items-center justify-between gap-4"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        icon: "ph:magnifying-glass",
        placeholder: unref(t)("admin.subscriptions.search", "\u641C\u7D22\u8BA2\u9605\u8BA2\u5355\u53F7\u3001\u5546\u54C1\u540D\u6216\u5BA2\u6237\u90AE\u7BB1..."),
        class: "w-80",
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
      _push(`</div><div class="text-xs text-gray-500"> \u5171 ${ssrInterpolate(filteredSubscriptions.value.length)} \u6761\u8BA2\u9605\u8BB0\u5F55 </div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: paginatedSubscriptions.value,
        columns: columns.value,
        loading: unref(pending),
        class: "min-w-full",
        sticky: ""
      }, {
        "orderId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col min-w-[150px]"${_scopeId}><span class="text-sm font-mono font-medium text-gray-900 dark:text-white cursor-pointer hover:text-primary-500 truncate"${ssrRenderAttr("title", row.original.orderId || row.original.id)}${_scopeId}>${ssrInterpolate(row.original.orderId || row.original.id)}</span>`);
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
                  title: row.original.orderId || row.original.id,
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
            _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.productName || "Unknown Product")}</span>`);
            if (row.original.payMethod) {
              _push2(`<span class="text-xs text-gray-400 capitalize"${_scopeId}> \u6E20\u9053: ${ssrInterpolate(row.original.payMethod)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(row.original.productName || "Unknown Product"), 1),
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
        _: 1
      }, _parent));
      _push(`</div><div class="p-3.5 border-t border-gray-200/80 dark:border-gray-800/50 flex items-center justify-between shrink-0 bg-white dark:bg-[#121214]"><span class="text-xs text-gray-500 dark:text-gray-400"> \u5171 ${ssrInterpolate(unref(totalItems))} \u6761\u8BA2\u9605\u8BB0\u5F55 </span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        total: unref(totalItems),
        "items-per-page": unref(pageSize),
        max: 5,
        size: "sm",
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminSubscriptionsPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminSubscriptionsPanel = Object.assign(_sfc_main, { __name: "AdminSubscriptionsPanel" });

export { AdminSubscriptionsPanel as A };
