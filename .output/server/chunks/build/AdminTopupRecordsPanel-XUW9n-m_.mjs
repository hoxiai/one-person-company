import { u as useI18n, e as useToast, d as useFormatTime, w as useFetch, b as _sfc_main$k, l as _sfc_main$j, i as _sfc_main$D, j as _sfc_main$h, _ as _sfc_main$I, k as _sfc_main$z, x as _sfc_main$n } from './server.mjs';
import { defineComponent, ref, watch, computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_7 } from './FullScreenModal-Dpul9c_Q.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TopupDetailModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    topup: {}
  },
  emits: ["update:modelValue", "retried"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const toast = useToast();
    const { formatDateTime } = useFormatTime();
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const loading = ref(false);
    const retrying = ref(false);
    const fullDetail = ref(null);
    const currentRecord = computed(() => fullDetail.value || props.topup);
    const canRetry = computed(() => {
      const r = currentRecord.value;
      if (!r) return false;
      return ["paid", "credit_failed", "review_required", "pending"].includes(r.status);
    });
    const statusLabel = (value) => ({
      pending: t("admin.topups.statusPending", "\u5F85\u652F\u4ED8"),
      payment_failed: t("admin.topups.statusPaymentFailed", "\u652F\u4ED8\u5931\u8D25"),
      paid: t("admin.topups.statusPaid", "\u5DF2\u652F\u4ED8\u5F85\u5165\u8D26"),
      crediting: t("admin.topups.statusCrediting", "\u5230\u8D26\u4E2D"),
      credited: t("admin.topups.statusCredited", "\u5DF2\u5230\u8D26"),
      credit_failed: t("admin.topups.statusCreditFailed", "\u5230\u8D26\u5931\u8D25"),
      review_required: t("admin.topups.statusReviewRequired", "\u5F85\u4EBA\u5DE5\u6838\u5BF9"),
      refunding: t("admin.topups.statusRefunding", "\u9000\u6B3E\u56DE\u6536\u4E2D"),
      refunded: t("admin.topups.statusRefunded", "\u5DF2\u9000\u6B3E")
    })[value] || value;
    const statusColor = (value) => {
      if (value === "credited") return "success";
      if (["pending", "paid", "crediting", "refunding"].includes(value)) return "warning";
      if (value === "refunded") return "neutral";
      return "error";
    };
    const formatAmount = (amount, currency) => `${Number(amount || 0).toFixed(2)} ${String(currency || "")}`;
    const copyText = (text, label) => {
      if (!text) return;
      (void 0).clipboard.writeText(text);
      toast.add({
        title: `${label || "\u5185\u5BB9"} \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F`,
        color: "success"
      });
    };
    const loadDetail = async (idOrOrderId) => {
      if (!idOrOrderId) return;
      loading.value = true;
      try {
        const res = await $fetch(`/api/admin/topups/${idOrOrderId}`);
        if (res == null ? void 0 : res.data) {
          fullDetail.value = res.data;
        }
      } catch {
      } finally {
        loading.value = false;
      }
    };
    const retrySingle = async () => {
      var _a, _b, _c;
      if (!((_a = currentRecord.value) == null ? void 0 : _a.orderId)) return;
      retrying.value = true;
      const orderId = currentRecord.value.orderId;
      try {
        const res = await $fetch("/api/admin/topups/retry", {
          method: "POST",
          body: { orderId }
        });
        toast.add({
          title: t("admin.topups.retrySingleSuccess", { outcome: ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.outcome) || "ok" }),
          description: `\u8BA2\u5355\u53F7: ${orderId}`,
          color: "success"
        });
        await loadDetail(orderId);
        emit("retried", currentRecord.value);
      } catch (error) {
        toast.add({
          title: t("admin.topups.retryFailed", "\u5145\u503C\u8865\u507F\u5931\u8D25"),
          description: String(((_c = error == null ? void 0 : error.data) == null ? void 0 : _c.message) || (error == null ? void 0 : error.message) || ""),
          color: "error"
        });
      } finally {
        retrying.value = false;
      }
    };
    watch(
      () => [props.modelValue, props.topup],
      ([val, topup]) => {
        if (val && topup) {
          fullDetail.value = null;
          loadDetail(topup.orderId || topup.id);
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UIcon = _sfc_main$I;
      const _component_UButton = _sfc_main$D;
      const _component_UBadge = _sfc_main$z;
      _push(ssrRenderComponent(_component_FullScreenModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        title: unref(t)("admin.topups.detailTitle", "\u5145\u503C\u8BB0\u5F55\u8BE6\u60C5"),
        maxWidth: "sm:max-w-4xl",
        defaultFullscreen: false
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex items-center justify-between w-full"${_scopeId}><span class="text-xs text-gray-400"${_scopeId}> \u6700\u540E\u66F4\u65B0: ${ssrInterpolate(((_a = currentRecord.value) == null ? void 0 : _a.updatedAt) ? unref(formatDateTime)(currentRecord.value.updatedAt) : "\u2014")}</span><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              size: "sm",
              onClick: ($event) => isOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("admin.common.close", "\u5173\u95ED"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("admin.common.close", "\u5173\u95ED")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (canRetry.value) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "sm",
                icon: "ph:arrow-counter-clockwise-bold",
                loading: retrying.value,
                onClick: retrySingle
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("admin.topups.retrySingle", "\u7ACB\u5373\u91CD\u8BD5\u5165\u8D26"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("admin.topups.retrySingle", "\u7ACB\u5373\u91CD\u8BD5\u5165\u8D26")), 1)
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
              createVNode("div", { class: "flex items-center justify-between w-full" }, [
                createVNode("span", { class: "text-xs text-gray-400" }, " \u6700\u540E\u66F4\u65B0: " + toDisplayString(((_b = currentRecord.value) == null ? void 0 : _b.updatedAt) ? unref(formatDateTime)(currentRecord.value.updatedAt) : "\u2014"), 1),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "sm",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("admin.common.close", "\u5173\u95ED")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  canRetry.value ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    color: "primary",
                    size: "sm",
                    icon: "ph:arrow-counter-clockwise-bold",
                    loading: retrying.value,
                    onClick: retrySingle
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("admin.topups.retrySingle", "\u7ACB\u5373\u91CD\u8BD5\u5165\u8D26")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (loading.value && !__props.topup) {
              _push2(`<div class="py-16 flex items-center justify-center text-gray-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner-gap-bold",
                class: "w-6 h-6 animate-spin text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (currentRecord.value) {
              _push2(`<div class="space-y-6"${_scopeId}><div class="flex items-start justify-between gap-4 flex-wrap pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2.5 flex-wrap"${_scopeId}><span class="text-xl font-mono font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(currentRecord.value.orderId)}</span>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "subtle",
                icon: "ph:copy",
                class: "cursor-pointer",
                onClick: ($event) => copyText(currentRecord.value.orderId, unref(t)("admin.topups.orderId", "\u8BA2\u5355\u53F7"))
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UBadge, {
                color: statusColor(currentRecord.value.status),
                variant: "subtle",
                size: "md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(statusLabel(currentRecord.value.status))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(statusLabel(currentRecord.value.status)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "outline",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(currentRecord.value.balanceType === "grant" ? unref(t)("admin.topups.grantPool", "\u8D60\u9001\u7B97\u529B") : unref(t)("admin.topups.cashPool", "\u73B0\u91D1\u4F59\u989D"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(currentRecord.value.balanceType === "grant" ? unref(t)("admin.topups.grantPool", "\u8D60\u9001\u7B97\u529B") : unref(t)("admin.topups.cashPool", "\u73B0\u91D1\u4F59\u989D")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (currentRecord.value.source) {
                _push2(`<span class="text-xs text-gray-400 font-mono"${_scopeId}> \u6765\u6E90: ${ssrInterpolate(currentRecord.value.source)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mt-1.5 flex items-center gap-3 text-xs text-gray-500"${_scopeId}><span${_scopeId}>\u8BB0\u5F55 ID: #${ssrInterpolate(currentRecord.value.id)}</span><span${_scopeId}>\u2022</span><span${_scopeId}>\u521B\u5EFA\u65F6\u95F4: ${ssrInterpolate(unref(formatDateTime)(currentRecord.value.createdAt))}</span>`);
              if (currentRecord.value.retryCount > 0) {
                _push2(`<span${_scopeId}>\u2022</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (currentRecord.value.retryCount > 0) {
                _push2(`<span class="text-amber-600 dark:text-amber-400 font-medium"${_scopeId}> \u91CD\u8BD5\u6B21\u6570: ${ssrInterpolate(currentRecord.value.retryCount)} \u6B21 </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex items-center gap-2"${_scopeId}>`);
              if (currentRecord.value.orderId) {
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "sm",
                  color: "neutral",
                  variant: "outline",
                  icon: "ph:receipt",
                  to: `/admin/orders?search=${encodeURIComponent(currentRecord.value.orderId)}`,
                  target: "_blank"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)("admin.topups.viewOrder", "\u67E5\u770B\u5173\u8054\u8BA2\u5355"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("admin.topups.viewOrder", "\u67E5\u770B\u5173\u8054\u8BA2\u5355")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (canRetry.value) {
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "sm",
                  color: "primary",
                  icon: "ph:arrows-clockwise",
                  loading: retrying.value,
                  onClick: retrySingle
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)("admin.topups.retrySingle", "\u7ACB\u5373\u91CD\u8BD5\u5165\u8D26"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("admin.topups.retrySingle", "\u7ACB\u5373\u91CD\u8BD5\u5165\u8D26")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><div class="p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 space-y-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"${_scopeId}> \u5916\u90E8\u652F\u4ED8 (Payment) </span>`);
              if (currentRecord.value.orderPayStatus) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: currentRecord.value.orderPayStatus === "paid" ? "success" : "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u8BA2\u5355: ${ssrInterpolate(currentRecord.value.orderPayStatus)}`);
                    } else {
                      return [
                        createTextVNode(" \u8BA2\u5355: " + toDisplayString(currentRecord.value.orderPayStatus), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div${_scopeId}><div class="text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(formatAmount(currentRecord.value.paymentAmount, currentRecord.value.paymentCurrency))}</div><div class="text-xs text-gray-500 mt-1"${_scopeId}>\u5B9E\u4ED8\u91D1\u989D\u4E0E\u5E01\u79CD</div></div><div class="space-y-1.5 pt-2 border-t border-gray-200/50 dark:border-gray-800/60 text-xs"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.payMethod", "\u652F\u4ED8\u6E20\u9053"))}:</span><span class="font-medium text-gray-900 dark:text-white capitalize"${_scopeId}>${ssrInterpolate(currentRecord.value.payMethod || "\u2014")}</span></div><div class="flex items-center justify-between"${_scopeId}><span class="text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.tradeNo", "\u7F51\u5173\u4EA4\u6613\u53F7"))}:</span>`);
              if (currentRecord.value.tradeNo) {
                _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="font-mono text-gray-900 dark:text-white truncate max-w-[180px]"${ssrRenderAttr("title", currentRecord.value.tradeNo)}${_scopeId}>${ssrInterpolate(currentRecord.value.tradeNo)}</span>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:copy",
                  onClick: ($event) => copyText(currentRecord.value.tradeNo, unref(t)("admin.topups.tradeNo", "\u7F51\u5173\u4EA4\u6613\u53F7"))
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<span class="text-gray-400"${_scopeId}>\u2014</span>`);
              }
              _push2(`</div><div class="flex items-center justify-between"${_scopeId}><span class="text-gray-500"${_scopeId}>\u4ED8\u6B3E\u65F6\u95F4:</span><span class="text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(currentRecord.value.paidAt ? unref(formatDateTime)(currentRecord.value.paidAt) : "\u5F85\u652F\u4ED8 / \u672A\u56DE\u4F20")}</span></div></div></div><div class="p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 space-y-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider"${_scopeId}> \u94B1\u5305\u5230\u8D26 (Credit) </span><span class="text-xs text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(currentRecord.value.walletId ? `\u672C\u5730\u94B1\u5305 #${currentRecord.value.walletId}` : "AINode \u7EDF\u4E00\u94B1\u5305")}</span></div><div${_scopeId}><div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400"${_scopeId}> +${ssrInterpolate(formatAmount(currentRecord.value.creditAmount, currentRecord.value.creditCurrency))}</div><div class="text-xs text-gray-500 mt-1"${_scopeId}>\u5165\u8D26\u989D\u5EA6\u4E0E\u5E01\u79CD</div></div><div class="space-y-1.5 pt-2 border-t border-gray-200/50 dark:border-gray-800/60 text-xs"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.exchangeRate", "\u6362\u7B97\u6C47\u7387"))}:</span><span class="font-mono text-gray-900 dark:text-white"${_scopeId}> 1 ${ssrInterpolate(currentRecord.value.paymentCurrency)} = ${ssrInterpolate(currentRecord.value.exchangeRate || 1)} ${ssrInterpolate(currentRecord.value.creditCurrency)}</span></div><div class="flex items-center justify-between"${_scopeId}><span class="text-gray-500"${_scopeId}>\u5165\u8D26\u8D26\u6237\u6C60:</span><span class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(currentRecord.value.balanceType === "grant" ? "\u8D60\u9001\u7B97\u529B\u6C60 (Grant)" : "\u73B0\u91D1\u4F59\u989D\u6C60 (Cash)")}</span></div><div class="flex items-center justify-between"${_scopeId}><span class="text-gray-500"${_scopeId}>\u5230\u8D26\u5B8C\u6210\u65F6\u95F4:</span><span class="text-gray-900 dark:text-gray-300"${_scopeId}>${ssrInterpolate(currentRecord.value.creditedAt ? unref(formatDateTime)(currentRecord.value.creditedAt) : currentRecord.value.status === "credit_failed" ? "\u5165\u8D26\u5931\u8D25" : "\u672A\u5165\u8D26")}</span></div></div></div></div>`);
              if (currentRecord.value.shortfall > 0 || ["refunding", "refunded"].includes(currentRecord.value.status)) {
                _push2(`<div class="p-4 rounded-xl border border-red-200/80 bg-red-50/60 dark:border-red-900/50 dark:bg-red-950/20 space-y-2.5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:warning-circle-bold",
                  class: "w-5 h-5 text-red-600 dark:text-red-400 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-sm font-semibold text-red-900 dark:text-red-300"${_scopeId}> \u9000\u6B3E\u4E0E\u8D44\u91D1\u56DE\u6536\u72B6\u6001 </span>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "error",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(statusLabel(currentRecord.value.status))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(statusLabel(currentRecord.value.status)), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
                if (currentRecord.value.shortfall > 0) {
                  _push2(`<div class="text-xs text-red-700 dark:text-red-300 leading-relaxed font-medium"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.shortfallAlert", { amount: formatAmount(currentRecord.value.shortfall, currentRecord.value.creditCurrency) }))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-red-200/50 dark:border-red-900/30 text-xs"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-red-600/80 dark:text-red-400"${_scopeId}>\u9000\u6B3E\u6D41\u6C34\u53F7:</span><span class="font-mono text-red-900 dark:text-red-200"${_scopeId}>${ssrInterpolate(currentRecord.value.refundEventId || "\u2014")}</span></div><div class="flex items-center gap-2"${_scopeId}><span class="text-red-600/80 dark:text-red-400"${_scopeId}>\u9000\u6B3E\u65F6\u95F4:</span><span class="text-red-900 dark:text-red-200"${_scopeId}>${ssrInterpolate(currentRecord.value.refundedAt ? unref(formatDateTime)(currentRecord.value.refundedAt) : "\u5904\u7406\u4E2D")}</span></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-[#151518]"${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><span class="text-xs font-semibold text-gray-500 uppercase tracking-wider"${_scopeId}>\u5BA2\u6237\u4FE1\u606F</span>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "ghost",
                icon: "ph:arrow-square-out",
                to: `/admin/customers?search=${encodeURIComponent(currentRecord.value.userEmail || currentRecord.value.userId)}`,
                target: "_blank"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("admin.topups.viewCustomer", "\u67E5\u770B\u5BA2\u6237\u753B\u50CF"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("admin.topups.viewCustomer", "\u67E5\u770B\u5BA2\u6237\u753B\u50CF")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs"${_scopeId}><div${_scopeId}><div class="text-gray-500 mb-0.5"${_scopeId}>\u7528\u6237\u90AE\u7BB1:</div><div class="font-medium text-gray-900 dark:text-white truncate"${ssrRenderAttr("title", currentRecord.value.userEmail || currentRecord.value.contactEmail || "")}${_scopeId}>${ssrInterpolate(currentRecord.value.userEmail || currentRecord.value.contactEmail || "\u2014")}</div></div><div${_scopeId}><div class="text-gray-500 mb-0.5"${_scopeId}>\u7528\u6237\u6635\u79F0:</div><div class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(currentRecord.value.userNickname || "\u2014")}</div></div><div${_scopeId}><div class="text-gray-500 mb-0.5"${_scopeId}>\u7528\u6237 ID:</div><div class="font-mono font-medium text-gray-900 dark:text-white"${_scopeId}> #${ssrInterpolate(currentRecord.value.userId)}</div></div></div></div><div class="p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-[#151518]"${_scopeId}><div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.timelineTitle", "\u751F\u547D\u5468\u671F\u65F6\u95F4\u7EBF"))}</div><div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs"${_scopeId}><div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80"${_scopeId}><div class="text-gray-400 mb-1 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:plus-circle",
                class: "w-3.5 h-3.5 text-primary-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>1. ${ssrInterpolate(unref(t)("admin.topups.timelineCreated", "\u8BA2\u5355\u521B\u5EFA"))}</span></div><div class="font-mono text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(currentRecord.value.createdAt))}</div></div><div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80"${_scopeId}><div class="text-gray-400 mb-1 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:credit-card",
                class: "w-3.5 h-3.5 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>2. ${ssrInterpolate(unref(t)("admin.topups.timelinePaid", "\u5916\u90E8\u4ED8\u6B3E"))}</span></div><div class="font-mono text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(currentRecord.value.paidAt ? unref(formatDateTime)(currentRecord.value.paidAt) : "\u672A\u652F\u4ED8")}</div></div><div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80"${_scopeId}><div class="text-gray-400 mb-1 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:wallet",
                class: "w-3.5 h-3.5 text-emerald-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>3. ${ssrInterpolate(unref(t)("admin.topups.timelineCredited", "\u94B1\u5305\u5165\u8D26"))}</span></div><div class="${ssrRenderClass([currentRecord.value.creditedAt ? "text-emerald-600 dark:text-emerald-400 font-medium" : "text-gray-400", "font-mono"])}"${_scopeId}>${ssrInterpolate(currentRecord.value.creditedAt ? unref(formatDateTime)(currentRecord.value.creditedAt) : currentRecord.value.status === "credit_failed" ? "\u5165\u8D26\u5931\u8D25" : "\u5F85\u5904\u7406")}</div></div><div class="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80"${_scopeId}><div class="text-gray-400 mb-1 flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-counter-clockwise",
                class: "w-3.5 h-3.5 text-neutral-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>4. ${ssrInterpolate(unref(t)("admin.topups.timelineRefunded", "\u9000\u6B3E\u5904\u7406"))}</span></div><div class="${ssrRenderClass([currentRecord.value.refundedAt ? "text-neutral-700 dark:text-neutral-300" : "text-gray-400", "font-mono"])}"${_scopeId}>${ssrInterpolate(currentRecord.value.refundedAt ? unref(formatDateTime)(currentRecord.value.refundedAt) : "\u65E0\u9000\u6B3E")}</div></div></div></div>`);
              if (currentRecord.value.lastError || ["credit_failed", "review_required", "payment_failed"].includes(currentRecord.value.status)) {
                _push2(`<div class="p-4 rounded-xl border border-amber-200/70 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20 space-y-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:bug-bold",
                  class: "w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-xs font-semibold text-amber-900 dark:text-amber-300"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.diagnosisTitle", "\u6392\u969C\u8BCA\u65AD\u4E0E\u9519\u8BEF\u8BF4\u660E"))}</span></div>`);
                if (currentRecord.value.lastError) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:copy",
                    onClick: ($event) => copyText(currentRecord.value.lastError, "\u9519\u8BEF\u4FE1\u606F")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` \u590D\u5236\u9519\u8BEF `);
                      } else {
                        return [
                          createTextVNode(" \u590D\u5236\u9519\u8BEF ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (currentRecord.value.status === "review_required") {
                  _push2(`<div class="text-xs text-amber-800 dark:text-amber-300/90 leading-relaxed bg-amber-100/60 dark:bg-amber-900/40 p-2.5 rounded-lg border border-amber-300/50 dark:border-amber-800"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.reviewAlert"))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (currentRecord.value.lastError) {
                  _push2(`<div class="p-3 rounded-lg bg-gray-900 text-red-300 font-mono text-xs break-all select-all leading-normal max-h-48 overflow-y-auto"${_scopeId}>${ssrInterpolate(currentRecord.value.lastError)}</div>`);
                } else {
                  _push2(`<div class="text-xs text-gray-500"${_scopeId}> \u5F53\u524D\u72B6\u6001\u6682\u65E0\u5177\u4F53\u9519\u8BEF\u6587\u672C\u8BB0\u5F55\u3002 </div>`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/20 space-y-2 text-xs"${_scopeId}><div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.auditTitle", "\u6280\u672F\u4E0E\u5BA1\u8BA1\u51ED\u636E"))}</div><div class="grid grid-cols-1 md:grid-cols-2 gap-2 font-mono"${_scopeId}><div class="flex items-center justify-between p-2 rounded bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"${_scopeId}><span class="text-gray-400"${_scopeId}>Credit Event ID:</span><div class="flex items-center gap-1"${_scopeId}><span class="text-gray-700 dark:text-gray-300 truncate max-w-[200px]"${ssrRenderAttr("title", currentRecord.value.creditEventId)}${_scopeId}>${ssrInterpolate(currentRecord.value.creditEventId)}</span>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "ghost",
                icon: "ph:copy",
                onClick: ($event) => copyText(currentRecord.value.creditEventId, "Credit Event ID")
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="flex items-center justify-between p-2 rounded bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"${_scopeId}><span class="text-gray-400"${_scopeId}>Refund Event ID:</span><div class="flex items-center gap-1"${_scopeId}><span class="text-gray-700 dark:text-gray-300 truncate max-w-[200px]"${ssrRenderAttr("title", currentRecord.value.refundEventId || "\u2014")}${_scopeId}>${ssrInterpolate(currentRecord.value.refundEventId || "\u2014")}</span>`);
              if (currentRecord.value.refundEventId) {
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:copy",
                  onClick: ($event) => copyText(currentRecord.value.refundEventId, "Refund Event ID")
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div></div>`);
              if (((_a = fullDetail.value) == null ? void 0 : _a.balanceLogs) && fullDetail.value.balanceLogs.length > 0) {
                _push2(`<div class="p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-[#151518]"${_scopeId}><div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"${_scopeId}>${ssrInterpolate(unref(t)("admin.topups.balanceLogsTitle", "\u5173\u8054\u94B1\u5305\u8D44\u91D1\u53D8\u52A8"))}</div><div class="divide-y divide-gray-100 dark:divide-gray-800 text-xs"${_scopeId}><!--[-->`);
                ssrRenderList(fullDetail.value.balanceLogs, (log) => {
                  _push2(`<div class="py-2.5 flex items-center justify-between gap-4"${_scopeId}><div${_scopeId}><div class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(log.remark || log.actionType)}</div><div class="text-[11px] text-gray-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(log.createdAt))} \u2022 \u4E8B\u4EF6: ${ssrInterpolate(log.eventId)}</div></div><div class="text-right"${_scopeId}><div class="${ssrRenderClass([log.amount >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-500", "font-mono font-semibold"])}"${_scopeId}>${ssrInterpolate(log.amount >= 0 ? `+${log.amount}` : log.amount)}</div><div class="text-[11px] text-gray-400 font-mono mt-0.5"${_scopeId}> \u4F59\u989D: ${ssrInterpolate(log.beforeBalance)} \u2794 ${ssrInterpolate(log.afterBalance)}</div></div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              loading.value && !__props.topup ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-16 flex items-center justify-center text-gray-400"
              }, [
                createVNode(_component_UIcon, {
                  name: "ph:spinner-gap-bold",
                  class: "w-6 h-6 animate-spin text-primary-500"
                })
              ])) : currentRecord.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "space-y-6"
              }, [
                createVNode("div", { class: "flex items-start justify-between gap-4 flex-wrap pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center gap-2.5 flex-wrap" }, [
                      createVNode("span", { class: "text-xl font-mono font-bold text-gray-900 dark:text-white" }, toDisplayString(currentRecord.value.orderId), 1),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "subtle",
                        icon: "ph:copy",
                        class: "cursor-pointer",
                        onClick: ($event) => copyText(currentRecord.value.orderId, unref(t)("admin.topups.orderId", "\u8BA2\u5355\u53F7"))
                      }, null, 8, ["onClick"]),
                      createVNode(_component_UBadge, {
                        color: statusColor(currentRecord.value.status),
                        variant: "subtle",
                        size: "md"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(statusLabel(currentRecord.value.status)), 1)
                        ]),
                        _: 1
                      }, 8, ["color"]),
                      createVNode(_component_UBadge, {
                        color: "neutral",
                        variant: "outline",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(currentRecord.value.balanceType === "grant" ? unref(t)("admin.topups.grantPool", "\u8D60\u9001\u7B97\u529B") : unref(t)("admin.topups.cashPool", "\u73B0\u91D1\u4F59\u989D")), 1)
                        ]),
                        _: 1
                      }),
                      currentRecord.value.source ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-gray-400 font-mono"
                      }, " \u6765\u6E90: " + toDisplayString(currentRecord.value.source), 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-1.5 flex items-center gap-3 text-xs text-gray-500" }, [
                      createVNode("span", null, "\u8BB0\u5F55 ID: #" + toDisplayString(currentRecord.value.id), 1),
                      createVNode("span", null, "\u2022"),
                      createVNode("span", null, "\u521B\u5EFA\u65F6\u95F4: " + toDisplayString(unref(formatDateTime)(currentRecord.value.createdAt)), 1),
                      currentRecord.value.retryCount > 0 ? (openBlock(), createBlock("span", { key: 0 }, "\u2022")) : createCommentVNode("", true),
                      currentRecord.value.retryCount > 0 ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-amber-600 dark:text-amber-400 font-medium"
                      }, " \u91CD\u8BD5\u6B21\u6570: " + toDisplayString(currentRecord.value.retryCount) + " \u6B21 ", 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    currentRecord.value.orderId ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      size: "sm",
                      color: "neutral",
                      variant: "outline",
                      icon: "ph:receipt",
                      to: `/admin/orders?search=${encodeURIComponent(currentRecord.value.orderId)}`,
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("admin.topups.viewOrder", "\u67E5\u770B\u5173\u8054\u8BA2\u5355")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])) : createCommentVNode("", true),
                    canRetry.value ? (openBlock(), createBlock(_component_UButton, {
                      key: 1,
                      size: "sm",
                      color: "primary",
                      icon: "ph:arrows-clockwise",
                      loading: retrying.value,
                      onClick: retrySingle
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("admin.topups.retrySingle", "\u7ACB\u5373\u91CD\u8BD5\u5165\u8D26")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 space-y-3" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider" }, " \u5916\u90E8\u652F\u4ED8 (Payment) "),
                      currentRecord.value.orderPayStatus ? (openBlock(), createBlock(_component_UBadge, {
                        key: 0,
                        color: currentRecord.value.orderPayStatus === "paid" ? "success" : "neutral",
                        variant: "subtle",
                        size: "xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u8BA2\u5355: " + toDisplayString(currentRecord.value.orderPayStatus), 1)
                        ]),
                        _: 1
                      }, 8, ["color"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white" }, toDisplayString(formatAmount(currentRecord.value.paymentAmount, currentRecord.value.paymentCurrency)), 1),
                      createVNode("div", { class: "text-xs text-gray-500 mt-1" }, "\u5B9E\u4ED8\u91D1\u989D\u4E0E\u5E01\u79CD")
                    ]),
                    createVNode("div", { class: "space-y-1.5 pt-2 border-t border-gray-200/50 dark:border-gray-800/60 text-xs" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-gray-500" }, toDisplayString(unref(t)("admin.topups.payMethod", "\u652F\u4ED8\u6E20\u9053")) + ":", 1),
                        createVNode("span", { class: "font-medium text-gray-900 dark:text-white capitalize" }, toDisplayString(currentRecord.value.payMethod || "\u2014"), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-gray-500" }, toDisplayString(unref(t)("admin.topups.tradeNo", "\u7F51\u5173\u4EA4\u6613\u53F7")) + ":", 1),
                        currentRecord.value.tradeNo ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-1"
                        }, [
                          createVNode("span", {
                            class: "font-mono text-gray-900 dark:text-white truncate max-w-[180px]",
                            title: currentRecord.value.tradeNo
                          }, toDisplayString(currentRecord.value.tradeNo), 9, ["title"]),
                          createVNode(_component_UButton, {
                            size: "xs",
                            color: "neutral",
                            variant: "ghost",
                            icon: "ph:copy",
                            onClick: ($event) => copyText(currentRecord.value.tradeNo, unref(t)("admin.topups.tradeNo", "\u7F51\u5173\u4EA4\u6613\u53F7"))
                          }, null, 8, ["onClick"])
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-gray-400"
                        }, "\u2014"))
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-gray-500" }, "\u4ED8\u6B3E\u65F6\u95F4:"),
                        createVNode("span", { class: "text-gray-900 dark:text-gray-300" }, toDisplayString(currentRecord.value.paidAt ? unref(formatDateTime)(currentRecord.value.paidAt) : "\u5F85\u652F\u4ED8 / \u672A\u56DE\u4F20"), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 space-y-3" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider" }, " \u94B1\u5305\u5230\u8D26 (Credit) "),
                      createVNode("span", { class: "text-xs text-gray-400 font-mono" }, toDisplayString(currentRecord.value.walletId ? `\u672C\u5730\u94B1\u5305 #${currentRecord.value.walletId}` : "AINode \u7EDF\u4E00\u94B1\u5305"), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-2xl font-bold text-emerald-600 dark:text-emerald-400" }, " +" + toDisplayString(formatAmount(currentRecord.value.creditAmount, currentRecord.value.creditCurrency)), 1),
                      createVNode("div", { class: "text-xs text-gray-500 mt-1" }, "\u5165\u8D26\u989D\u5EA6\u4E0E\u5E01\u79CD")
                    ]),
                    createVNode("div", { class: "space-y-1.5 pt-2 border-t border-gray-200/50 dark:border-gray-800/60 text-xs" }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-gray-500" }, toDisplayString(unref(t)("admin.topups.exchangeRate", "\u6362\u7B97\u6C47\u7387")) + ":", 1),
                        createVNode("span", { class: "font-mono text-gray-900 dark:text-white" }, " 1 " + toDisplayString(currentRecord.value.paymentCurrency) + " = " + toDisplayString(currentRecord.value.exchangeRate || 1) + " " + toDisplayString(currentRecord.value.creditCurrency), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-gray-500" }, "\u5165\u8D26\u8D26\u6237\u6C60:"),
                        createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(currentRecord.value.balanceType === "grant" ? "\u8D60\u9001\u7B97\u529B\u6C60 (Grant)" : "\u73B0\u91D1\u4F59\u989D\u6C60 (Cash)"), 1)
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-gray-500" }, "\u5230\u8D26\u5B8C\u6210\u65F6\u95F4:"),
                        createVNode("span", { class: "text-gray-900 dark:text-gray-300" }, toDisplayString(currentRecord.value.creditedAt ? unref(formatDateTime)(currentRecord.value.creditedAt) : currentRecord.value.status === "credit_failed" ? "\u5165\u8D26\u5931\u8D25" : "\u672A\u5165\u8D26"), 1)
                      ])
                    ])
                  ])
                ]),
                currentRecord.value.shortfall > 0 || ["refunding", "refunded"].includes(currentRecord.value.status) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "p-4 rounded-xl border border-red-200/80 bg-red-50/60 dark:border-red-900/50 dark:bg-red-950/20 space-y-2.5"
                }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:warning-circle-bold",
                      class: "w-5 h-5 text-red-600 dark:text-red-400 shrink-0"
                    }),
                    createVNode("span", { class: "text-sm font-semibold text-red-900 dark:text-red-300" }, " \u9000\u6B3E\u4E0E\u8D44\u91D1\u56DE\u6536\u72B6\u6001 "),
                    createVNode(_component_UBadge, {
                      color: "error",
                      variant: "subtle",
                      size: "xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(statusLabel(currentRecord.value.status)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  currentRecord.value.shortfall > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-xs text-red-700 dark:text-red-300 leading-relaxed font-medium"
                  }, toDisplayString(unref(t)("admin.topups.shortfallAlert", { amount: formatAmount(currentRecord.value.shortfall, currentRecord.value.creditCurrency) })), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-red-200/50 dark:border-red-900/30 text-xs" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "text-red-600/80 dark:text-red-400" }, "\u9000\u6B3E\u6D41\u6C34\u53F7:"),
                      createVNode("span", { class: "font-mono text-red-900 dark:text-red-200" }, toDisplayString(currentRecord.value.refundEventId || "\u2014"), 1)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "text-red-600/80 dark:text-red-400" }, "\u9000\u6B3E\u65F6\u95F4:"),
                      createVNode("span", { class: "text-red-900 dark:text-red-200" }, toDisplayString(currentRecord.value.refundedAt ? unref(formatDateTime)(currentRecord.value.refundedAt) : "\u5904\u7406\u4E2D"), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-[#151518]" }, [
                  createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                    createVNode("span", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider" }, "\u5BA2\u6237\u4FE1\u606F"),
                    createVNode(_component_UButton, {
                      size: "xs",
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:arrow-square-out",
                      to: `/admin/customers?search=${encodeURIComponent(currentRecord.value.userEmail || currentRecord.value.userId)}`,
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("admin.topups.viewCustomer", "\u67E5\u770B\u5BA2\u6237\u753B\u50CF")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "text-gray-500 mb-0.5" }, "\u7528\u6237\u90AE\u7BB1:"),
                      createVNode("div", {
                        class: "font-medium text-gray-900 dark:text-white truncate",
                        title: currentRecord.value.userEmail || currentRecord.value.contactEmail || ""
                      }, toDisplayString(currentRecord.value.userEmail || currentRecord.value.contactEmail || "\u2014"), 9, ["title"])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-gray-500 mb-0.5" }, "\u7528\u6237\u6635\u79F0:"),
                      createVNode("div", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(currentRecord.value.userNickname || "\u2014"), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-gray-500 mb-0.5" }, "\u7528\u6237 ID:"),
                      createVNode("div", { class: "font-mono font-medium text-gray-900 dark:text-white" }, " #" + toDisplayString(currentRecord.value.userId), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-[#151518]" }, [
                  createVNode("div", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3" }, toDisplayString(unref(t)("admin.topups.timelineTitle", "\u751F\u547D\u5468\u671F\u65F6\u95F4\u7EBF")), 1),
                  createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-3 text-xs" }, [
                    createVNode("div", { class: "p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80" }, [
                      createVNode("div", { class: "text-gray-400 mb-1 flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:plus-circle",
                          class: "w-3.5 h-3.5 text-primary-500"
                        }),
                        createVNode("span", null, "1. " + toDisplayString(unref(t)("admin.topups.timelineCreated", "\u8BA2\u5355\u521B\u5EFA")), 1)
                      ]),
                      createVNode("div", { class: "font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(unref(formatDateTime)(currentRecord.value.createdAt)), 1)
                    ]),
                    createVNode("div", { class: "p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80" }, [
                      createVNode("div", { class: "text-gray-400 mb-1 flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:credit-card",
                          class: "w-3.5 h-3.5 text-blue-500"
                        }),
                        createVNode("span", null, "2. " + toDisplayString(unref(t)("admin.topups.timelinePaid", "\u5916\u90E8\u4ED8\u6B3E")), 1)
                      ]),
                      createVNode("div", { class: "font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(currentRecord.value.paidAt ? unref(formatDateTime)(currentRecord.value.paidAt) : "\u672A\u652F\u4ED8"), 1)
                    ]),
                    createVNode("div", { class: "p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80" }, [
                      createVNode("div", { class: "text-gray-400 mb-1 flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:wallet",
                          class: "w-3.5 h-3.5 text-emerald-500"
                        }),
                        createVNode("span", null, "3. " + toDisplayString(unref(t)("admin.topups.timelineCredited", "\u94B1\u5305\u5165\u8D26")), 1)
                      ]),
                      createVNode("div", {
                        class: ["font-mono", currentRecord.value.creditedAt ? "text-emerald-600 dark:text-emerald-400 font-medium" : "text-gray-400"]
                      }, toDisplayString(currentRecord.value.creditedAt ? unref(formatDateTime)(currentRecord.value.creditedAt) : currentRecord.value.status === "credit_failed" ? "\u5165\u8D26\u5931\u8D25" : "\u5F85\u5904\u7406"), 3)
                    ]),
                    createVNode("div", { class: "p-2.5 rounded-lg bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/80" }, [
                      createVNode("div", { class: "text-gray-400 mb-1 flex items-center gap-1.5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-counter-clockwise",
                          class: "w-3.5 h-3.5 text-neutral-500"
                        }),
                        createVNode("span", null, "4. " + toDisplayString(unref(t)("admin.topups.timelineRefunded", "\u9000\u6B3E\u5904\u7406")), 1)
                      ]),
                      createVNode("div", {
                        class: ["font-mono", currentRecord.value.refundedAt ? "text-neutral-700 dark:text-neutral-300" : "text-gray-400"]
                      }, toDisplayString(currentRecord.value.refundedAt ? unref(formatDateTime)(currentRecord.value.refundedAt) : "\u65E0\u9000\u6B3E"), 3)
                    ])
                  ])
                ]),
                currentRecord.value.lastError || ["credit_failed", "review_required", "payment_failed"].includes(currentRecord.value.status) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "p-4 rounded-xl border border-amber-200/70 bg-amber-50/50 dark:border-amber-900/40 dark:bg-amber-950/20 space-y-3"
                }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:bug-bold",
                        class: "w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0"
                      }),
                      createVNode("span", { class: "text-xs font-semibold text-amber-900 dark:text-amber-300" }, toDisplayString(unref(t)("admin.topups.diagnosisTitle", "\u6392\u969C\u8BCA\u65AD\u4E0E\u9519\u8BEF\u8BF4\u660E")), 1)
                    ]),
                    currentRecord.value.lastError ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      size: "xs",
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:copy",
                      onClick: ($event) => copyText(currentRecord.value.lastError, "\u9519\u8BEF\u4FE1\u606F")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u590D\u5236\u9519\u8BEF ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  currentRecord.value.status === "review_required" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-xs text-amber-800 dark:text-amber-300/90 leading-relaxed bg-amber-100/60 dark:bg-amber-900/40 p-2.5 rounded-lg border border-amber-300/50 dark:border-amber-800"
                  }, toDisplayString(unref(t)("admin.topups.reviewAlert")), 1)) : createCommentVNode("", true),
                  currentRecord.value.lastError ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "p-3 rounded-lg bg-gray-900 text-red-300 font-mono text-xs break-all select-all leading-normal max-h-48 overflow-y-auto"
                  }, toDisplayString(currentRecord.value.lastError), 1)) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "text-xs text-gray-500"
                  }, " \u5F53\u524D\u72B6\u6001\u6682\u65E0\u5177\u4F53\u9519\u8BEF\u6587\u672C\u8BB0\u5F55\u3002 "))
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/20 space-y-2 text-xs" }, [
                  createVNode("div", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2" }, toDisplayString(unref(t)("admin.topups.auditTitle", "\u6280\u672F\u4E0E\u5BA1\u8BA1\u51ED\u636E")), 1),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-2 font-mono" }, [
                    createVNode("div", { class: "flex items-center justify-between p-2 rounded bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800" }, [
                      createVNode("span", { class: "text-gray-400" }, "Credit Event ID:"),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode("span", {
                          class: "text-gray-700 dark:text-gray-300 truncate max-w-[200px]",
                          title: currentRecord.value.creditEventId
                        }, toDisplayString(currentRecord.value.creditEventId), 9, ["title"]),
                        createVNode(_component_UButton, {
                          size: "xs",
                          color: "neutral",
                          variant: "ghost",
                          icon: "ph:copy",
                          onClick: ($event) => copyText(currentRecord.value.creditEventId, "Credit Event ID")
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-between p-2 rounded bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800" }, [
                      createVNode("span", { class: "text-gray-400" }, "Refund Event ID:"),
                      createVNode("div", { class: "flex items-center gap-1" }, [
                        createVNode("span", {
                          class: "text-gray-700 dark:text-gray-300 truncate max-w-[200px]",
                          title: currentRecord.value.refundEventId || "\u2014"
                        }, toDisplayString(currentRecord.value.refundEventId || "\u2014"), 9, ["title"]),
                        currentRecord.value.refundEventId ? (openBlock(), createBlock(_component_UButton, {
                          key: 0,
                          size: "xs",
                          color: "neutral",
                          variant: "ghost",
                          icon: "ph:copy",
                          onClick: ($event) => copyText(currentRecord.value.refundEventId, "Refund Event ID")
                        }, null, 8, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ]),
                ((_b = fullDetail.value) == null ? void 0 : _b.balanceLogs) && fullDetail.value.balanceLogs.length > 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "p-4 rounded-xl border border-gray-200/70 dark:border-gray-800 bg-white dark:bg-[#151518]"
                }, [
                  createVNode("div", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3" }, toDisplayString(unref(t)("admin.topups.balanceLogsTitle", "\u5173\u8054\u94B1\u5305\u8D44\u91D1\u53D8\u52A8")), 1),
                  createVNode("div", { class: "divide-y divide-gray-100 dark:divide-gray-800 text-xs" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(fullDetail.value.balanceLogs, (log) => {
                      return openBlock(), createBlock("div", {
                        key: log.id,
                        class: "py-2.5 flex items-center justify-between gap-4"
                      }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(log.remark || log.actionType), 1),
                          createVNode("div", { class: "text-[11px] text-gray-400 font-mono mt-0.5" }, toDisplayString(unref(formatDateTime)(log.createdAt)) + " \u2022 \u4E8B\u4EF6: " + toDisplayString(log.eventId), 1)
                        ]),
                        createVNode("div", { class: "text-right" }, [
                          createVNode("div", {
                            class: ["font-mono font-semibold", log.amount >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"]
                          }, toDisplayString(log.amount >= 0 ? `+${log.amount}` : log.amount), 3),
                          createVNode("div", { class: "text-[11px] text-gray-400 font-mono mt-0.5" }, " \u4F59\u989D: " + toDisplayString(log.beforeBalance) + " \u2794 " + toDisplayString(log.afterBalance), 1)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/topups/TopupDetailModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TopupDetailModal = Object.assign(_sfc_main$1, { __name: "AdminTopupsTopupDetailModal" });
const pageSize = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdminTopupRecordsPanel",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const toast = useToast();
    const { formatDateTime } = useFormatTime();
    const page = ref(1);
    const status = ref("all");
    const searchQuery = ref("");
    const activeSearch = ref("");
    const retrying = ref(false);
    const isDetailOpen = ref(false);
    const selectedTopup = ref(null);
    let searchDebounceTimer = null;
    watch(searchQuery, (newVal) => {
      if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        activeSearch.value = newVal.trim();
        page.value = 1;
      }, 350);
    });
    const statusKeys = ["pending", "payment_failed", "paid", "crediting", "credited", "credit_failed", "review_required", "refunding", "refunded"];
    const statusOptions = computed(() => [
      { label: t("admin.topups.allStatuses", "\u5168\u90E8\u72B6\u6001"), value: "all" },
      ...statusKeys.map((value) => ({ label: statusLabel(value), value }))
    ]);
    const query = computed(() => ({
      page: page.value,
      pageSize,
      ...status.value !== "all" ? { status: status.value } : {},
      ...activeSearch.value ? { search: activeSearch.value } : {}
    }));
    const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/topups",
      { query },
      "$HTIeeOVLGa"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const rows = computed(() => {
      var _a, _b;
      return ((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.list) || [];
    });
    const total = computed(() => {
      var _a, _b;
      return Number(((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.total) || 0);
    });
    const columns = computed(() => [
      { accessorKey: "orderId", header: t("admin.topups.orderId", "\u5145\u503C\u5355\u53F7") },
      { accessorKey: "user", header: t("admin.topups.user", "\u5145\u503C\u5BA2\u6237") },
      { accessorKey: "payment", header: t("admin.topups.payment", "\u5B9E\u4ED8\u91D1\u989D") },
      { accessorKey: "credit", header: t("admin.topups.credit", "\u5230\u8D26\u7B97\u529B/\u989D\u5EA6") },
      { accessorKey: "status", header: t("admin.topups.status", "\u5145\u503C\u72B6\u6001") },
      { accessorKey: "retryCount", header: t("admin.topups.retryCount", "\u91CD\u8BD5\u6B21\u6570") },
      { accessorKey: "error", header: t("admin.topups.error", "\u5F02\u5E38\u8BF4\u660E") },
      { accessorKey: "time", header: t("admin.topups.time", "\u5145\u503C\u65F6\u95F4") },
      { accessorKey: "actions", header: t("admin.topups.actions", "\u64CD\u4F5C") }
    ]);
    const statusLabel = (value) => ({
      pending: t("admin.topups.statusPending", "\u5F85\u652F\u4ED8"),
      payment_failed: t("admin.topups.statusPaymentFailed", "\u652F\u4ED8\u5931\u8D25"),
      paid: t("admin.topups.statusPaid", "\u5DF2\u652F\u4ED8\u5F85\u5165\u8D26"),
      crediting: t("admin.topups.statusCrediting", "\u5230\u8D26\u4E2D"),
      credited: t("admin.topups.statusCredited", "\u5DF2\u5230\u8D26"),
      credit_failed: t("admin.topups.statusCreditFailed", "\u5230\u8D26\u5931\u8D25"),
      review_required: t("admin.topups.statusReviewRequired", "\u5F85\u4EBA\u5DE5\u6838\u5BF9"),
      refunding: t("admin.topups.statusRefunding", "\u9000\u6B3E\u56DE\u6536\u4E2D"),
      refunded: t("admin.topups.statusRefunded", "\u5DF2\u9000\u6B3E")
    })[value] || value;
    const statusColor = (value) => {
      if (value === "credited") return "success";
      if (["pending", "paid", "crediting", "refunding"].includes(value)) return "warning";
      if (value === "refunded") return "neutral";
      return "error";
    };
    const formatAmount = (amount, currency) => `${Number(amount || 0).toFixed(2)} ${String(currency || "")}`;
    const copyText = (text, label) => {
      if (!text) return;
      (void 0).clipboard.writeText(text);
      toast.add({
        title: `${label || "\u5185\u5BB9"} \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F`,
        color: "success"
      });
    };
    const openDetail = (item) => {
      selectedTopup.value = item;
      isDetailOpen.value = true;
    };
    const handleRetried = async () => {
      await refresh();
    };
    const retryIncomplete = async () => {
      var _a;
      retrying.value = true;
      try {
        const response = await $fetch("/api/admin/topups/retry", { method: "POST", body: { limit: 50 } });
        toast.add({
          title: t("admin.topups.retryDone", response.data || {}),
          color: "success"
        });
        await refresh();
      } catch (error) {
        toast.add({
          title: t("admin.topups.retryFailed", "\u5145\u503C\u8865\u507F\u5931\u8D25"),
          description: String(((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || ""),
          color: "error"
        });
      } finally {
        retrying.value = false;
      }
    };
    watch(status, () => {
      page.value = 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UButton = _sfc_main$D;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$z;
      const _component_UIcon = _sfc_main$I;
      const _component_UPagination = _sfc_main$n;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-0 flex-1 flex-col" }, _attrs))}><div class="mb-4 flex shrink-0 flex-wrap items-center justify-between gap-3"><div class="flex items-center gap-2.5 flex-wrap">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
        icon: "ph:magnifying-glass",
        placeholder: unref(t)("admin.topups.searchPlaceholder", "\u641C\u7D22\u5145\u503C\u5355\u53F7\u3001\u5BA2\u6237\u90AE\u7BB1\u3001\u7F51\u5173\u6D41\u6C34\u53F7..."),
        class: "w-72",
        size: "sm",
        clearable: ""
      }, null, _parent));
      _push(`<div class="flex items-center gap-1.5 text-xs text-gray-500"><span>${ssrInterpolate(unref(t)("admin.topups.status", "\u72B6\u6001"))}:</span>`);
      _push(ssrRenderComponent(_component_USelect, {
        modelValue: status.value,
        "onUpdate:modelValue": ($event) => status.value = $event,
        items: statusOptions.value,
        "value-key": "value",
        class: "w-36",
        size: "sm"
      }, null, _parent));
      _push(`</div></div><div class="flex items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        size: "sm",
        loading: unref(pending),
        class: "hover:bg-gray-50 dark:hover:bg-gray-800",
        onClick: () => unref(refresh)()
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "ph:arrow-counter-clockwise-bold",
        size: "sm",
        loading: retrying.value,
        class: "shadow-xs font-medium",
        onClick: retryIncomplete
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("admin.topups.safeRetry", "\u5B89\u5168\u91CD\u8BD5"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("admin.topups.safeRetry", "\u5B89\u5168\u91CD\u8BD5")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm dark:border-gray-800/50 dark:bg-[#121214]"><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        columns: columns.value,
        data: rows.value,
        loading: unref(pending),
        sticky: ""
      }, {
        "orderId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col min-w-[140px]"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><span class="font-mono text-xs font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-primary-500 transition-colors"${ssrRenderAttr("title", unref(t)("admin.topups.viewDetails", "\u67E5\u770B\u8BE6\u60C5"))}${_scopeId}>${ssrInterpolate(row.original.orderId)}</span>`);
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "ghost",
              icon: "ph:copy",
              class: "opacity-0 group-hover:opacity-100 transition-opacity p-0.5",
              onClick: ($event) => copyText(row.original.orderId, unref(t)("admin.topups.orderId", "\u8BA2\u5355\u53F7"))
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (row.original.tradeNo) {
              _push2(`<span class="text-[11px] text-gray-400 font-mono truncate max-w-[160px]"${ssrRenderAttr("title", row.original.tradeNo)}${_scopeId}> \u7F51\u5173: ${ssrInterpolate(row.original.tradeNo)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col min-w-[140px]" }, [
                createVNode("div", { class: "flex items-center gap-1.5" }, [
                  createVNode("span", {
                    class: "font-mono text-xs font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-primary-500 transition-colors",
                    title: unref(t)("admin.topups.viewDetails", "\u67E5\u770B\u8BE6\u60C5"),
                    onClick: ($event) => openDetail(row.original)
                  }, toDisplayString(row.original.orderId), 9, ["title", "onClick"]),
                  createVNode(_component_UButton, {
                    size: "xs",
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:copy",
                    class: "opacity-0 group-hover:opacity-100 transition-opacity p-0.5",
                    onClick: withModifiers(($event) => copyText(row.original.orderId, unref(t)("admin.topups.orderId", "\u8BA2\u5355\u53F7")), ["stop"])
                  }, null, 8, ["onClick"])
                ]),
                row.original.tradeNo ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-[11px] text-gray-400 font-mono truncate max-w-[160px]",
                  title: row.original.tradeNo
                }, " \u7F51\u5173: " + toDisplayString(row.original.tradeNo), 9, ["title"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "user-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col min-w-[140px]"${_scopeId}><span class="text-sm font-medium text-gray-900 dark:text-white truncate"${ssrRenderAttr("title", row.original.userEmail || "")}${_scopeId}>${ssrInterpolate(row.original.userEmail || `#${row.original.userId}`)}</span><div class="flex items-center gap-1.5 text-xs text-gray-400"${_scopeId}><span${_scopeId}>#${ssrInterpolate(row.original.userId)}</span>`);
            if (row.original.userNickname) {
              _push2(`<span class="truncate max-w-[100px]"${_scopeId}>(${ssrInterpolate(row.original.userNickname)})</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col min-w-[140px]" }, [
                createVNode("span", {
                  class: "text-sm font-medium text-gray-900 dark:text-white truncate",
                  title: row.original.userEmail || ""
                }, toDisplayString(row.original.userEmail || `#${row.original.userId}`), 9, ["title"]),
                createVNode("div", { class: "flex items-center gap-1.5 text-xs text-gray-400" }, [
                  createVNode("span", null, "#" + toDisplayString(row.original.userId), 1),
                  row.original.userNickname ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "truncate max-w-[100px]"
                  }, "(" + toDisplayString(row.original.userNickname) + ")", 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        "payment-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(formatAmount(row.original.paymentAmount, row.original.paymentCurrency))}</span>`);
            if (row.original.payMethod) {
              _push2(`<span class="text-[11px] text-gray-400 capitalize"${_scopeId}>${ssrInterpolate(row.original.payMethod)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(formatAmount(row.original.paymentAmount, row.original.paymentCurrency)), 1),
                row.original.payMethod ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-[11px] text-gray-400 capitalize"
                }, toDisplayString(row.original.payMethod), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "credit-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm font-semibold text-emerald-600 dark:text-emerald-400"${_scopeId}> +${ssrInterpolate(formatAmount(row.original.creditAmount, row.original.creditCurrency))}</span><span class="text-[11px] text-gray-400"${_scopeId}>${ssrInterpolate(row.original.balanceType === "grant" ? unref(t)("admin.topups.grantPool", "\u8D60\u9001\u7B97\u529B") : unref(t)("admin.topups.cashPool", "\u73B0\u91D1"))}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "text-sm font-semibold text-emerald-600 dark:text-emerald-400" }, " +" + toDisplayString(formatAmount(row.original.creditAmount, row.original.creditCurrency)), 1),
                createVNode("span", { class: "text-[11px] text-gray-400" }, toDisplayString(row.original.balanceType === "grant" ? unref(t)("admin.topups.grantPool", "\u8D60\u9001\u7B97\u529B") : unref(t)("admin.topups.cashPool", "\u73B0\u91D1")), 1)
              ])
            ];
          }
        }),
        "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-start gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UBadge, {
              color: statusColor(row.original.status),
              variant: "subtle",
              size: "sm"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(statusLabel(row.original.status))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(statusLabel(row.original.status)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (row.original.shortfall > 0) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "error",
                variant: "subtle",
                size: "xs",
                title: unref(t)("admin.topups.shortfallAlert", { amount: formatAmount(row.original.shortfall, row.original.creditCurrency) })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u672A\u56DE\u6536: ${ssrInterpolate(row.original.shortfall)}`);
                  } else {
                    return [
                      createTextVNode(" \u672A\u56DE\u6536: " + toDisplayString(row.original.shortfall), 1)
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
              createVNode("div", { class: "flex flex-col items-start gap-1" }, [
                createVNode(_component_UBadge, {
                  color: statusColor(row.original.status),
                  variant: "subtle",
                  size: "sm"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(statusLabel(row.original.status)), 1)
                  ]),
                  _: 2
                }, 1032, ["color"]),
                row.original.shortfall > 0 ? (openBlock(), createBlock(_component_UBadge, {
                  key: 0,
                  color: "error",
                  variant: "subtle",
                  size: "xs",
                  title: unref(t)("admin.topups.shortfallAlert", { amount: formatAmount(row.original.shortfall, row.original.creditCurrency) })
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u672A\u56DE\u6536: " + toDisplayString(row.original.shortfall), 1)
                  ]),
                  _: 2
                }, 1032, ["title"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "retryCount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([row.original.retryCount > 0 ? "text-amber-600 dark:text-amber-400 font-semibold" : "text-gray-400", "text-xs font-mono"])}"${_scopeId}>${ssrInterpolate(row.original.retryCount || 0)}</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["text-xs font-mono", row.original.retryCount > 0 ? "text-amber-600 dark:text-amber-400 font-semibold" : "text-gray-400"]
              }, toDisplayString(row.original.retryCount || 0), 3)
            ];
          }
        }),
        "error-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([row.original.lastError ? "text-red-500/90 dark:text-red-400/90 font-medium" : "text-gray-400", "block max-w-56 truncate text-xs"])}"${ssrRenderAttr("title", row.original.lastError || "")}${_scopeId}>${ssrInterpolate(row.original.lastError || unref(t)("admin.topups.noError", "\u2014"))}</span>`);
          } else {
            return [
              createVNode("span", {
                class: ["block max-w-56 truncate text-xs", row.original.lastError ? "text-red-500/90 dark:text-red-400/90 font-medium" : "text-gray-400"],
                title: row.original.lastError || ""
              }, toDisplayString(row.original.lastError || unref(t)("admin.topups.noError", "\u2014")), 11, ["title"])
            ];
          }
        }),
        "time-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="whitespace-nowrap text-xs text-gray-500"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
          } else {
            return [
              createVNode("span", { class: "whitespace-nowrap text-xs text-gray-500" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
            ];
          }
        }),
        "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              size: "xs",
              color: "neutral",
              variant: "ghost",
              icon: "ph:arrow-square-out",
              class: "cursor-pointer",
              onClick: ($event) => openDetail(row.original)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("admin.topups.viewDetails", "\u8BE6\u60C5"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("admin.topups.viewDetails", "\u8BE6\u60C5")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "ghost",
                icon: "ph:arrow-square-out",
                class: "cursor-pointer",
                onClick: withModifiers(($event) => openDetail(row.original), ["stop"])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("admin.topups.viewDetails", "\u8BE6\u60C5")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center py-14 text-center px-4"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:wallet",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><p class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(status.value !== "all" || activeSearch.value ? unref(t)("admin.topups.noRecordsFound", "\u672A\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u5145\u503C\u8BB0\u5F55") : unref(t)("admin.common.noData", "\u6682\u65E0\u6570\u636E"))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center py-14 text-center px-4" }, [
                createVNode("div", { class: "w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:wallet",
                    class: "w-6 h-6"
                  })
                ]),
                createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(status.value !== "all" || activeSearch.value ? unref(t)("admin.topups.noRecordsFound", "\u672A\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u5145\u503C\u8BB0\u5F55") : unref(t)("admin.common.noData", "\u6682\u65E0\u6570\u636E")), 1)
              ])
            ];
          }
        }),
        loading: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center py-14 text-center px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:spinner-gap-bold",
              class: "w-6 h-6 animate-spin text-primary-500"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center py-14 text-center px-4" }, [
                createVNode(_component_UIcon, {
                  name: "ph:spinner-gap-bold",
                  class: "w-6 h-6 animate-spin text-primary-500"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex shrink-0 items-center justify-between border-t border-gray-200/80 p-3.5 dark:border-gray-800/50"><span class="text-xs text-gray-500">${ssrInterpolate(unref(t)("admin.topups.totalRecords", { total: total.value }))}</span>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: page.value,
        "onUpdate:modelValue": ($event) => page.value = $event,
        total: total.value,
        "items-per-page": pageSize,
        max: 7,
        size: "sm"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(TopupDetailModal, {
        modelValue: isDetailOpen.value,
        "onUpdate:modelValue": ($event) => isDetailOpen.value = $event,
        topup: selectedTopup.value,
        onRetried: handleRetried
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminTopupRecordsPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AdminTopupRecordsPanel = Object.assign(_sfc_main, { __name: "AdminTopupRecordsPanel" });

export { AdminTopupRecordsPanel as A };
