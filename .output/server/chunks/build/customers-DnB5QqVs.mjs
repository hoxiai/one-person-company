import { e as useI18n, f as useFormatTime, I as useCurrencyFormat, g as useToast, s as useConfirm, h as useAdminPermissions, x as usePagination, y as useFetch, r as useRouter, n as _sfc_main$x, k as _sfc_main$B, b as _sfc_main$G, o as _sfc_main$j, d as _sfc_main$k, l as _sfc_main$h, z as _sfc_main$n, p as _sfc_main$s, c as _sfc_main$l, t as useSettings } from './server.mjs';
import { _ as _sfc_main$3 } from './Tabs-Dgl8hfR3.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, reactive, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, isRef, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_7 } from './FullScreenModal-C_oQJW_c.mjs';
import { u as useImageProxy } from './useImageProxy-CJnFnQot.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
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
import './TabsTrigger-Debt6F5y.mjs';
import './RovingFocusItem-DyHBwisL.mjs';
import './utils-DD3u_B8M.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CustomerDetailModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    email: {},
    visitorId: {}
  },
  emits: ["update:modelValue", "view-user"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { locale } = useI18n();
    const { formatDateTime } = useFormatTime();
    const { formatCurrencyAmount, formatCurrencyTotals } = useCurrencyFormat();
    const toast = useToast();
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const isZh = computed(() => locale.value.startsWith("zh"));
    const anonymousLabel = computed(() => isZh.value ? "\u533F\u540D\u8BBF\u5BA2" : "Anonymous Visitor");
    const visitorIdLabel = computed(() => isZh.value ? "\u8BBF\u5BA2 ID" : "Visitor ID");
    const copyHint = computed(() => isZh.value ? "\u70B9\u51FB\u590D\u5236" : "Click to copy");
    const hasAccountLabel = computed(() => isZh.value ? "\u5DF2\u6CE8\u518C\u8D26\u53F7" : "Has a registered account");
    const viewAccountLabel = computed(() => isZh.value ? "\u67E5\u770B\u8D26\u53F7" : "View account");
    const attributionTitle = computed(() => isZh.value ? "\u6765\u6E90\u4E0E\u8BBE\u5907" : "Attribution & Device");
    const ordersTitle = computed(() => isZh.value ? "\u8BA2\u5355\u8BB0\u5F55" : "Order History");
    const noOrdersLabel = computed(() => isZh.value ? "\u6682\u65E0\u8BA2\u5355" : "No orders yet");
    const unknownProductLabel = computed(() => isZh.value ? "\u672A\u77E5\u5546\u54C1" : "Unknown product");
    const loadErrorLabel = computed(() => isZh.value ? "\u52A0\u8F7D\u8BE6\u60C5\u5931\u8D25" : "Failed to load detail");
    const modalTitle = computed(() => {
      var _a, _b;
      return ((_b = (_a = detail.value) == null ? void 0 : _a.identity) == null ? void 0 : _b.email) || anonymousLabel.value;
    });
    const detail = ref(null);
    const pending = ref(false);
    const load = async () => {
      var _a;
      if (!props.email && !props.visitorId) return;
      pending.value = true;
      detail.value = null;
      try {
        detail.value = await $fetch("/api/admin/customers/detail", {
          query: {
            email: props.email && props.email !== "Anonymous" ? props.email : "",
            visitorId: props.visitorId || ""
          }
        });
      } catch (e) {
        toast.add({
          title: isZh.value ? "\u9519\u8BEF" : "Error",
          description: ((_a = e.data) == null ? void 0 : _a.message) || loadErrorLabel.value,
          color: "error"
        });
      } finally {
        pending.value = false;
      }
    };
    watch(() => props.modelValue, (open) => {
      if (open) load();
    });
    const statCards = computed(() => {
      if (!detail.value) return [];
      const s = detail.value.stats;
      return [
        { label: isZh.value ? "\u8BA2\u5355\u603B\u6570" : "Total Orders", value: s.totalOrders },
        { label: isZh.value ? "\u6D88\u8D39\u603B\u989D" : "Total Spent", value: formatCurrencyTotals(s.totalSpentByCurrency), class: "text-emerald-500" },
        { label: isZh.value ? "\u672A\u652F\u4ED8" : "Unpaid", value: s.unpaidOrders, class: s.unpaidOrders > 0 ? "text-red-500" : void 0 },
        {
          label: isZh.value ? "\u6700\u8FD1\u4E0B\u5355" : "Last Order",
          value: detail.value.orders[0] ? formatDateTime(detail.value.orders[0].createdAt) : "-"
        }
      ];
    });
    const attributionFields = computed(() => {
      var _a;
      const p = (_a = detail.value) == null ? void 0 : _a.profile;
      if (!p) return [];
      const loc = [p.city, p.region, p.country].filter(Boolean).join(" / ") || "-";
      return [
        { label: isZh.value ? "\u6765\u6E90\u6E20\u9053" : "Source", value: p.firstSource || p.lastSource },
        { label: isZh.value ? "\u5A92\u4ECB" : "Medium", value: p.firstMedium || p.lastMedium },
        { label: isZh.value ? "\u6D3B\u52A8" : "Campaign", value: p.firstCampaign || p.lastCampaign },
        { label: isZh.value ? "\u9996\u6B21\u6765\u6E90\u9875" : "Referrer", value: p.firstReferrer || p.lastReferrer },
        { label: isZh.value ? "\u5730\u7406\u4F4D\u7F6E" : "Location", value: loc },
        { label: isZh.value ? "\u8BED\u8A00" : "Locale", value: p.locale },
        { label: isZh.value ? "\u8BBE\u5907" : "Device", value: p.deviceType },
        { label: isZh.value ? "\u6D4F\u89C8\u5668" : "Browser", value: p.browser },
        { label: isZh.value ? "\u64CD\u4F5C\u7CFB\u7EDF" : "OS", value: p.os },
        { label: isZh.value ? "\u9996\u6B21\u5230\u8BBF" : "First Seen", value: formatDateTime(p.firstSeenAt) },
        { label: isZh.value ? "\u6700\u8FD1\u5230\u8BBF" : "Last Seen", value: formatDateTime(p.lastSeenAt) }
      ];
    });
    const payStatusColor = (status) => {
      switch (status) {
        case "paid":
          return "success";
        case "failed":
          return "error";
        case "refunded":
          return "info";
        default:
          return "neutral";
      }
    };
    const statusColor = (status) => {
      switch (status) {
        case "delivered":
        case "completed":
        case "active":
          return "success";
        case "expired":
        case "failed":
          return "error";
        case "processing":
          return "warning";
        default:
          return "neutral";
      }
    };
    const copyToClipboard = (text) => {
      if (!text) return;
      (void 0).clipboard.writeText(text);
      toast.add({
        title: isZh.value ? "\u5DF2\u590D\u5236" : "Copied",
        color: "success"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      const _component_UBadge = _sfc_main$x;
      _push(ssrRenderComponent(_component_FullScreenModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        title: modalTitle.value,
        maxWidth: "sm:max-w-4xl",
        defaultFullscreen: false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (pending.value) {
              _push2(`<div class="py-16 flex items-center justify-center text-gray-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner-gap-bold",
                class: "w-6 h-6 animate-spin"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (detail.value) {
              _push2(`<div class="space-y-6"${_scopeId}><div class="flex items-start justify-between gap-4 flex-wrap"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: detail.value.identity.isAnonymous ? "ph:ghost" : "ph:user-circle-fill",
                class: "w-5 h-5 text-purple-500"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(detail.value.identity.email || anonymousLabel.value)}</span></div>`);
              if (detail.value.identity.visitorId) {
                _push2(`<div class="mt-1 text-xs font-mono text-gray-500 dark:text-gray-400 cursor-pointer hover:text-primary-400"${ssrRenderAttr("title", copyHint.value)}${_scopeId}>${ssrInterpolate(visitorIdLabel.value)}: ${ssrInterpolate(detail.value.identity.visitorId)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (detail.value.registeredUser) {
                _push2(`<div class="flex items-center gap-2 rounded-xl border border-purple-200/60 bg-purple-50/60 px-3 py-2 text-xs dark:border-purple-500/20 dark:bg-purple-500/10"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:shield-check",
                  class: "w-4 h-4 text-purple-500 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span class="text-purple-700 dark:text-purple-300"${_scopeId}>${ssrInterpolate(hasAccountLabel.value)}</span>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "neutral",
                  variant: "ghost",
                  onClick: ($event) => _ctx.$emit("view-user", detail.value.registeredUser.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(viewAccountLabel.value)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(viewAccountLabel.value), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="grid grid-cols-2 sm:grid-cols-4 gap-3"${_scopeId}><!--[-->`);
              ssrRenderList(statCards.value, (card) => {
                _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20 px-4 py-3"${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(card.label)}</div><div class="${ssrRenderClass([card.class || "text-gray-900 dark:text-white", "mt-1 text-lg font-semibold"])}"${_scopeId}>${ssrInterpolate(card.value)}</div></div>`);
              });
              _push2(`<!--]--></div>`);
              if (detail.value.profile) {
                _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"${_scopeId}><div class="px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(attributionTitle.value)}</h4></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 p-4 text-sm"${_scopeId}><!--[-->`);
                ssrRenderList(attributionFields.value, (field) => {
                  _push2(`<div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(field.label)}</div><div class="text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(field.value || "-")}</div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"${_scopeId}><div class="px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(ordersTitle.value)} (${ssrInterpolate(detail.value.orders.length)})</h4></div>`);
              if (!detail.value.orders.length) {
                _push2(`<div class="p-8 text-center text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(noOrdersLabel.value)}</div>`);
              } else {
                _push2(`<div class="divide-y divide-gray-200 dark:divide-gray-800/60 max-h-80 overflow-auto"${_scopeId}><!--[-->`);
                ssrRenderList(detail.value.orders, (order) => {
                  _push2(`<div class="flex items-center justify-between gap-3 px-4 py-2.5 text-sm"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(order.productName || unknownProductLabel.value)}</div><div class="text-xs text-gray-500 dark:text-gray-400 font-mono truncate"${_scopeId}>${ssrInterpolate(order.id)}</div></div><div class="text-right shrink-0"${_scopeId}><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(order.amount, order.currency))}</div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(order.createdAt))}</div></div><div class="flex flex-col items-end gap-1 shrink-0 w-24"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: payStatusColor(order.payStatus),
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(order.payStatus)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(order.payStatus), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: statusColor(order.status),
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(order.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(order.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></div>`);
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="py-16 text-center text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(loadErrorLabel.value)}</div>`);
            }
          } else {
            return [
              pending.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-16 flex items-center justify-center text-gray-400"
              }, [
                createVNode(_component_UIcon, {
                  name: "ph:spinner-gap-bold",
                  class: "w-6 h-6 animate-spin"
                })
              ])) : detail.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "space-y-6"
              }, [
                createVNode("div", { class: "flex items-start justify-between gap-4 flex-wrap" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: detail.value.identity.isAnonymous ? "ph:ghost" : "ph:user-circle-fill",
                        class: "w-5 h-5 text-purple-500"
                      }, null, 8, ["name"]),
                      createVNode("span", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(detail.value.identity.email || anonymousLabel.value), 1)
                    ]),
                    detail.value.identity.visitorId ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-1 text-xs font-mono text-gray-500 dark:text-gray-400 cursor-pointer hover:text-primary-400",
                      title: copyHint.value,
                      onClick: ($event) => copyToClipboard(detail.value.identity.visitorId)
                    }, toDisplayString(visitorIdLabel.value) + ": " + toDisplayString(detail.value.identity.visitorId), 9, ["title", "onClick"])) : createCommentVNode("", true)
                  ]),
                  detail.value.registeredUser ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex items-center gap-2 rounded-xl border border-purple-200/60 bg-purple-50/60 px-3 py-2 text-xs dark:border-purple-500/20 dark:bg-purple-500/10"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:shield-check",
                      class: "w-4 h-4 text-purple-500 shrink-0"
                    }),
                    createVNode("span", { class: "text-purple-700 dark:text-purple-300" }, toDisplayString(hasAccountLabel.value), 1),
                    createVNode(_component_UButton, {
                      size: "xs",
                      color: "neutral",
                      variant: "ghost",
                      onClick: ($event) => _ctx.$emit("view-user", detail.value.registeredUser.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(viewAccountLabel.value), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(statCards.value, (card) => {
                    return openBlock(), createBlock("div", {
                      key: card.label,
                      class: "rounded-xl border border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20 px-4 py-3"
                    }, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(card.label), 1),
                      createVNode("div", {
                        class: ["mt-1 text-lg font-semibold", card.class || "text-gray-900 dark:text-white"]
                      }, toDisplayString(card.value), 3)
                    ]);
                  }), 128))
                ]),
                detail.value.profile ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"
                }, [
                  createVNode("div", { class: "px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20" }, [
                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(attributionTitle.value), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 p-4 text-sm" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(attributionFields.value, (field) => {
                      return openBlock(), createBlock("div", {
                        key: field.label
                      }, [
                        createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(field.label), 1),
                        createVNode("div", { class: "text-gray-900 dark:text-white truncate" }, toDisplayString(field.value || "-"), 1)
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden" }, [
                  createVNode("div", { class: "px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20" }, [
                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(ordersTitle.value) + " (" + toDisplayString(detail.value.orders.length) + ")", 1)
                  ]),
                  !detail.value.orders.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-8 text-center text-sm text-gray-500 dark:text-gray-400"
                  }, toDisplayString(noOrdersLabel.value), 1)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "divide-y divide-gray-200 dark:divide-gray-800/60 max-h-80 overflow-auto"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(detail.value.orders, (order) => {
                      return openBlock(), createBlock("div", {
                        key: order.id,
                        class: "flex items-center justify-between gap-3 px-4 py-2.5 text-sm"
                      }, [
                        createVNode("div", { class: "min-w-0 flex-1" }, [
                          createVNode("div", { class: "text-gray-900 dark:text-white truncate" }, toDisplayString(order.productName || unknownProductLabel.value), 1),
                          createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 font-mono truncate" }, toDisplayString(order.id), 1)
                        ]),
                        createVNode("div", { class: "text-right shrink-0" }, [
                          createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(order.amount, order.currency)), 1),
                          createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(order.createdAt)), 1)
                        ]),
                        createVNode("div", { class: "flex flex-col items-end gap-1 shrink-0 w-24" }, [
                          createVNode(_component_UBadge, {
                            color: payStatusColor(order.payStatus),
                            variant: "subtle",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.payStatus), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode(_component_UBadge, {
                            color: statusColor(order.status),
                            variant: "subtle",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ])
                      ]);
                    }), 128))
                  ]))
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "py-16 text-center text-sm text-gray-500 dark:text-gray-400"
              }, toDisplayString(loadErrorLabel.value), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/customers/CustomerDetailModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AdminCustomerDetailModal = Object.assign(_sfc_main$2, { __name: "AdminCustomersCustomerDetailModal" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserDetailModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    userId: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { locale } = useI18n();
    const { formatDateTime } = useFormatTime();
    const { formatCurrencyAmount, formatCurrencyTotals } = useCurrencyFormat();
    const { getSetting, fetchSettings } = useSettings();
    const { buildImageProxyUrl } = useImageProxy();
    const toast = useToast();
    void fetchSettings();
    const baseCurrency = computed(() => getSetting("currency", "USD"));
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const isZh = computed(() => (locale.value || "").startsWith("zh"));
    const activeLabel = computed(() => isZh.value ? "\u6B63\u5E38" : "Active");
    const activeLabelShort = computed(() => isZh.value ? "\u6709\u6548" : "active");
    const disabledLabel = computed(() => isZh.value ? "\u5DF2\u7981\u7528" : "Disabled");
    const verifiedLabel = computed(() => isZh.value ? "\u90AE\u7BB1\u5DF2\u9A8C\u8BC1" : "Email Verified");
    const unverifiedLabel = computed(() => isZh.value ? "\u90AE\u7BB1\u672A\u9A8C\u8BC1" : "Email Unverified");
    const balancesTitle = computed(() => isZh.value ? "\u8D26\u6237\u4F59\u989D" : "Balances");
    const cashBalanceLabel = computed(() => isZh.value ? "\u5145\u503C\u4F59\u989D" : "Cash Balance");
    const grantBalanceLabel = computed(() => isZh.value ? "\u8D60\u9001\u4F59\u989D" : "Grant Balance");
    const subBalanceLabel = computed(() => isZh.value ? "\u8BA2\u9605\u4F59\u989D" : "Subscription Balance");
    const tierLabel = computed(() => isZh.value ? "\u8BA2\u9605\u7B49\u7EA7" : "Tier Level");
    const accountTitle = computed(() => isZh.value ? "\u8D26\u6237\u4FE1\u606F" : "Account");
    const registeredAtLabel = computed(() => isZh.value ? "\u6CE8\u518C\u65F6\u95F4" : "Registered At");
    const lastLoginLabel = computed(() => isZh.value ? "\u6700\u8FD1\u767B\u5F55" : "Last Login");
    const oauthLabel = computed(() => isZh.value ? "\u7B2C\u4E09\u65B9\u767B\u5F55" : "OAuth Accounts");
    const promoLabel = computed(() => isZh.value ? "\u63A8\u5E7F\u8EAB\u4EFD" : "Promo Membership");
    const tokensLabel = computed(() => isZh.value ? "API \u4EE4\u724C" : "API Tokens");
    const attributionTitle = computed(() => isZh.value ? "\u6765\u6E90\u4E0E\u8BBE\u5907" : "Attribution & Device");
    const subscriptionsTitle = computed(() => isZh.value ? "\u8BA2\u9605\u8BB0\u5F55" : "Subscriptions");
    const ordersTitle = computed(() => isZh.value ? "\u8BA2\u5355\u8BB0\u5F55" : "Order History");
    const noOrdersLabel = computed(() => isZh.value ? "\u6682\u65E0\u8BA2\u5355" : "No orders yet");
    const unknownProductLabel = computed(() => isZh.value ? "\u672A\u77E5\u5546\u54C1" : "Unknown product");
    const loadErrorLabel = computed(() => isZh.value ? "\u52A0\u8F7D\u8BE6\u60C5\u5931\u8D25" : "Failed to load detail");
    const modalTitle = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = detail.value) == null ? void 0 : _a.user) == null ? void 0 : _b.nickname) || ((_d = (_c = detail.value) == null ? void 0 : _c.user) == null ? void 0 : _d.email) || "";
    });
    const detail = ref(null);
    const pending = ref(false);
    const load = async () => {
      var _a;
      if (!props.userId) return;
      pending.value = true;
      detail.value = null;
      try {
        detail.value = await $fetch(`/api/admin/users/${props.userId}`);
      } catch (e) {
        toast.add({
          title: isZh.value ? "\u9519\u8BEF" : "Error",
          description: ((_a = e.data) == null ? void 0 : _a.message) || loadErrorLabel.value,
          color: "error"
        });
      } finally {
        pending.value = false;
      }
    };
    watch(() => [props.modelValue, props.userId], ([open]) => {
      if (open) load();
    });
    const hasBalances = computed(() => {
      var _a;
      const u = (_a = detail.value) == null ? void 0 : _a.user;
      if (!u) return false;
      return Number(u.cashBalance) !== 0 || Number(u.grantBalance) !== 0 || Number(u.subBalance) !== 0 || Number(u.tierLevel) > 0;
    });
    const activeTokenCount = computed(() => {
      var _a;
      return (((_a = detail.value) == null ? void 0 : _a.tokens) || []).filter((t) => !t.revoked).length;
    });
    const statCards = computed(() => {
      if (!detail.value) return [];
      const s = detail.value.stats;
      return [
        { label: isZh.value ? "\u8BA2\u5355\u603B\u6570" : "Total Orders", value: s.totalOrders },
        { label: isZh.value ? "\u6D88\u8D39\u603B\u989D" : "Total Spent", value: formatCurrencyTotals(s.totalSpentByCurrency), class: "text-emerald-500" },
        { label: isZh.value ? "\u672A\u652F\u4ED8" : "Unpaid", value: s.unpaidOrders, class: s.unpaidOrders > 0 ? "text-red-500" : void 0 },
        {
          label: isZh.value ? "\u6700\u8FD1\u4E0B\u5355" : "Last Order",
          value: detail.value.orders[0] ? formatDateTime(detail.value.orders[0].createdAt) : "-"
        }
      ];
    });
    const attributionFields = computed(() => {
      var _a;
      const p = (_a = detail.value) == null ? void 0 : _a.profile;
      if (!p) return [];
      const loc = [p.city, p.region, p.country].filter(Boolean).join(" / ") || "-";
      return [
        { label: isZh.value ? "\u6765\u6E90\u6E20\u9053" : "Source", value: p.firstSource || p.lastSource },
        { label: isZh.value ? "\u5A92\u4ECB" : "Medium", value: p.firstMedium || p.lastMedium },
        { label: isZh.value ? "\u6D3B\u52A8" : "Campaign", value: p.firstCampaign || p.lastCampaign },
        { label: isZh.value ? "\u9996\u6B21\u6765\u6E90\u9875" : "Referrer", value: p.firstReferrer || p.lastReferrer },
        { label: isZh.value ? "\u5730\u7406\u4F4D\u7F6E" : "Location", value: loc },
        { label: isZh.value ? "\u8BED\u8A00" : "Locale", value: p.locale },
        { label: isZh.value ? "\u8BBE\u5907" : "Device", value: p.deviceType },
        { label: isZh.value ? "\u6D4F\u89C8\u5668" : "Browser", value: p.browser },
        { label: isZh.value ? "\u64CD\u4F5C\u7CFB\u7EDF" : "OS", value: p.os },
        { label: isZh.value ? "\u9996\u6B21\u5230\u8BBF" : "First Seen", value: formatDateTime(p.firstSeenAt) },
        { label: isZh.value ? "\u6700\u8FD1\u5230\u8BBF" : "Last Seen", value: formatDateTime(p.lastSeenAt) }
      ];
    });
    const payStatusColor = (status) => {
      switch (status) {
        case "paid":
          return "success";
        case "failed":
          return "error";
        case "refunded":
          return "info";
        default:
          return "neutral";
      }
    };
    const statusColor = (status) => {
      switch (status) {
        case "delivered":
        case "completed":
        case "active":
          return "success";
        case "expired":
        case "failed":
          return "error";
        case "processing":
          return "warning";
        default:
          return "neutral";
      }
    };
    const isVerifying = ref(false);
    const isResending = ref(false);
    const isEmailPreviewOpen = ref(false);
    const previewingLog = ref(null);
    const openEmailPreview = (log) => {
      previewingLog.value = log;
      isEmailPreviewOpen.value = true;
    };
    const handleManualVerify = async (verified) => {
      var _a, _b, _c;
      if (!((_b = (_a = detail.value) == null ? void 0 : _a.user) == null ? void 0 : _b.id)) return;
      isVerifying.value = true;
      try {
        const res = await $fetch(`/api/admin/users/${detail.value.user.id}/verify-email`, {
          method: "POST",
          body: { verified }
        });
        detail.value.user.emailVerifiedAt = res.emailVerifiedAt;
        toast.add({
          title: isZh.value ? "\u64CD\u4F5C\u6210\u529F" : "Success",
          description: res.message,
          color: "success"
        });
      } catch (err) {
        toast.add({
          title: isZh.value ? "\u64CD\u4F5C\u5931\u8D25" : "Failed",
          description: ((_c = err == null ? void 0 : err.data) == null ? void 0 : _c.message) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        isVerifying.value = false;
      }
    };
    const handleAdminResendVerify = async () => {
      var _a, _b, _c;
      if (!((_b = (_a = detail.value) == null ? void 0 : _a.user) == null ? void 0 : _b.id)) return;
      isResending.value = true;
      try {
        const res = await $fetch(`/api/admin/users/${detail.value.user.id}/resend-verify`, {
          method: "POST"
        });
        toast.add({
          title: isZh.value ? "\u53D1\u9001\u6210\u529F" : "Success",
          description: res.message,
          color: "success"
        });
        if (props.userId) {
          await load();
        }
      } catch (err) {
        toast.add({
          title: isZh.value ? "\u53D1\u9001\u5931\u8D25" : "Failed",
          description: ((_c = err == null ? void 0 : err.data) == null ? void 0 : _c.message) || (err == null ? void 0 : err.message),
          color: "error"
        });
      } finally {
        isResending.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UIcon = _sfc_main$G;
      const _component_UBadge = _sfc_main$x;
      const _component_UButton = _sfc_main$B;
      _push(ssrRenderComponent(_component_FullScreenModal, mergeProps({
        modelValue: isOpen.value,
        "onUpdate:modelValue": ($event) => isOpen.value = $event,
        title: modalTitle.value,
        maxWidth: "sm:max-w-4xl",
        defaultFullscreen: false
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            if (pending.value) {
              _push2(`<div class="py-16 flex items-center justify-center text-gray-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner-gap-bold",
                class: "w-6 h-6 animate-spin"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (detail.value) {
              _push2(`<div class="space-y-6"${_scopeId}><div class="flex items-start justify-between gap-4 flex-wrap"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
              if (detail.value.user.avatarUrl) {
                _push2(`<img${ssrRenderAttr("src", unref(buildImageProxyUrl)(detail.value.user.avatarUrl))} class="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-800"${_scopeId}>`);
              } else {
                _push2(`<div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:user",
                  class: "w-5 h-5"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`<div${_scopeId}><div class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(detail.value.user.nickname || detail.value.user.email)}</div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(detail.value.user.email)} \xB7 ID ${ssrInterpolate(detail.value.user.id)}</div></div></div><div class="flex items-center gap-2 flex-wrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: detail.value.user.status === 1 ? "success" : "error",
                variant: "subtle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(detail.value.user.status === 1 ? activeLabel.value : disabledLabel.value)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(detail.value.user.status === 1 ? activeLabel.value : disabledLabel.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UBadge, {
                color: detail.value.user.emailVerifiedAt ? "success" : "warning",
                variant: "subtle"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(detail.value.user.emailVerifiedAt ? verifiedLabel.value : unverifiedLabel.value)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(detail.value.user.emailVerifiedAt ? verifiedLabel.value : unverifiedLabel.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1.5 ml-2"${_scopeId}>`);
              if (!detail.value.user.emailVerifiedAt) {
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "primary",
                  variant: "soft",
                  class: "rounded-lg font-medium",
                  loading: isVerifying.value,
                  onClick: ($event) => handleManualVerify(true)
                }, {
                  leading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:check-circle-bold",
                        class: "w-3.5 h-3.5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:check-circle-bold",
                          class: "w-3.5 h-3.5"
                        })
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` ${ssrInterpolate(isZh.value ? "\u4EBA\u5DE5\u901A\u8FC7\u8BA4\u8BC1" : "Manual Verify")}`);
                    } else {
                      return [
                        createTextVNode(" " + toDisplayString(isZh.value ? "\u4EBA\u5DE5\u901A\u8FC7\u8BA4\u8BC1" : "Manual Verify"), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "neutral",
                  variant: "ghost",
                  class: "rounded-lg text-xs text-gray-400 hover:text-red-500",
                  loading: isVerifying.value,
                  onClick: ($event) => handleManualVerify(false)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(isZh.value ? "\u64A4\u9500\u8BA4\u8BC1" : "Revoke Verify")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(isZh.value ? "\u64A4\u9500\u8BA4\u8BC1" : "Revoke Verify"), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "soft",
                class: "rounded-lg font-medium",
                loading: isResending.value,
                onClick: handleAdminResendVerify
              }, {
                leading: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:paper-plane-tilt-bold",
                      class: "w-3.5 h-3.5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:paper-plane-tilt-bold",
                        class: "w-3.5 h-3.5"
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` ${ssrInterpolate(isZh.value ? "\u4EE3\u53D1\u9A8C\u8BC1\u90AE\u4EF6" : "Send Verify Email")}`);
                  } else {
                    return [
                      createTextVNode(" " + toDisplayString(isZh.value ? "\u4EE3\u53D1\u9A8C\u8BC1\u90AE\u4EF6" : "Send Verify Email"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-3"${_scopeId}><!--[-->`);
              ssrRenderList(statCards.value, (card) => {
                _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20 px-4 py-3"${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(card.label)}</div><div class="${ssrRenderClass([card.class || "text-gray-900 dark:text-white", "mt-1 text-lg font-semibold"])}"${_scopeId}>${ssrInterpolate(card.value)}</div></div>`);
              });
              _push2(`<!--]--></div>`);
              if (hasBalances.value) {
                _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"${_scopeId}><div class="px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(balancesTitle.value)}</h4></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 text-sm"${_scopeId}><div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(cashBalanceLabel.value)}</div><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(detail.value.user.cashBalance, baseCurrency.value))}</div></div><div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(grantBalanceLabel.value)}</div><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(detail.value.user.grantBalance, baseCurrency.value))}</div></div><div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(subBalanceLabel.value)}</div><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(detail.value.user.subBalance, baseCurrency.value))}</div></div><div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(tierLabel.value)}</div><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate((_a = detail.value.user.tierLevel) != null ? _a : "-")}</div></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"${_scopeId}><div class="px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(accountTitle.value)}</h4></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 p-4 text-sm"${_scopeId}><div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(registeredAtLabel.value)}</div><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(detail.value.user.createdAt))}</div></div><div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(lastLoginLabel.value)}</div><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(detail.value.user.lastLoginAt ? unref(formatDateTime)(detail.value.user.lastLoginAt) : "-")}</div></div>`);
              if (detail.value.oauthAccounts.length) {
                _push2(`<div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(oauthLabel.value)}</div><div class="flex flex-wrap gap-1 mt-0.5"${_scopeId}><!--[-->`);
                ssrRenderList(detail.value.oauthAccounts, (acc) => {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    key: acc.provider,
                    color: "neutral",
                    variant: "subtle",
                    size: "sm",
                    class: "capitalize"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(acc.provider)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(acc.provider), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (detail.value.promoMember) {
                _push2(`<div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(promoLabel.value)}</div><div class="text-gray-900 dark:text-white capitalize"${_scopeId}>${ssrInterpolate(detail.value.promoMember.role)} \xB7 ${ssrInterpolate(detail.value.promoMember.promoCode)}</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (detail.value.tokens.length) {
                _push2(`<div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(tokensLabel.value)}</div><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(activeTokenCount.value)} / ${ssrInterpolate(detail.value.tokens.length)} ${ssrInterpolate(activeLabelShort.value)}</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
              if (detail.value.profile) {
                _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"${_scopeId}><div class="px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(attributionTitle.value)}</h4></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 p-4 text-sm"${_scopeId}><!--[-->`);
                ssrRenderList(attributionFields.value, (field) => {
                  _push2(`<div${_scopeId}><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(field.label)}</div><div class="text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(field.value || "-")}</div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (detail.value.subscriptions.length) {
                _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"${_scopeId}><div class="px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(subscriptionsTitle.value)} (${ssrInterpolate(detail.value.subscriptions.length)})</h4></div><div class="divide-y divide-gray-200 dark:divide-gray-800/60"${_scopeId}><!--[-->`);
                ssrRenderList(detail.value.subscriptions, (sub) => {
                  _push2(`<div class="flex items-center justify-between gap-3 px-4 py-2.5 text-sm"${_scopeId}><div class="min-w-0 flex-1 text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(sub.productName || unknownProductLabel.value)}</div><div class="text-xs text-gray-500 dark:text-gray-400 shrink-0"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(sub.amount, sub.currency))} / ${ssrInterpolate(sub.interval)}</div>`);
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: sub.status === "active" ? "success" : sub.status === "past_due" ? "warning" : "neutral",
                    variant: "subtle",
                    size: "sm",
                    class: "shrink-0"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(sub.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(sub.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"${_scopeId}><div class="px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20"${_scopeId}><h4 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(ordersTitle.value)} (${ssrInterpolate(detail.value.orders.length)})</h4></div>`);
              if (!detail.value.orders.length) {
                _push2(`<div class="p-8 text-center text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(noOrdersLabel.value)}</div>`);
              } else {
                _push2(`<div class="divide-y divide-gray-200 dark:divide-gray-800/60 max-h-80 overflow-auto"${_scopeId}><!--[-->`);
                ssrRenderList(detail.value.orders, (order) => {
                  _push2(`<div class="flex items-center justify-between gap-3 px-4 py-2.5 text-sm"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(order.productName || unknownProductLabel.value)}</div><div class="text-xs text-gray-500 dark:text-gray-400 font-mono truncate"${_scopeId}>${ssrInterpolate(order.id)}</div></div><div class="text-right shrink-0"${_scopeId}><div class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatCurrencyAmount)(order.amount, order.currency))}</div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(order.createdAt))}</div></div><div class="flex flex-col items-end gap-1 shrink-0 w-24"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: payStatusColor(order.payStatus),
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(order.payStatus)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(order.payStatus), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: statusColor(order.status),
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(order.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(order.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></div>`);
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</div><div class="rounded-2xl border border-gray-200 dark:border-gray-800/60 bg-white dark:bg-[#121214] p-5"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="flex items-center gap-2 font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:envelope-simple-fill",
                class: "w-5 h-5 text-indigo-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(isZh.value ? "\u90AE\u4EF6\u53D1\u9001\u8BB0\u5F55" : "Email History")}</span><span class="text-xs font-normal text-gray-400"${_scopeId}>(${ssrInterpolate(((_b = detail.value.emailLogs) == null ? void 0 : _b.length) || 0)})</span></div></div>`);
              if (!detail.value.emailLogs || detail.value.emailLogs.length === 0) {
                _push2(`<div class="py-8 text-center text-xs text-gray-400"${_scopeId}>${ssrInterpolate(isZh.value ? "\u6682\u65E0\u53D1\u9001\u7ED9\u8BE5\u7528\u6237\u7684\u90AE\u4EF6\u8BB0\u5F55" : "No emails sent to this user yet")}</div>`);
              } else {
                _push2(`<div class="divide-y divide-gray-100 dark:divide-gray-800/60 -mx-5 px-5"${_scopeId}><!--[-->`);
                ssrRenderList(detail.value.emailLogs, (log) => {
                  _push2(`<div class="py-3 flex items-center justify-between gap-4 text-xs hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors"${_scopeId}><div class="min-w-0 flex-1 space-y-0.5"${_scopeId}><div class="flex items-center gap-2 flex-wrap"${_scopeId}><span class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(log.subject)}</span>`);
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: log.status === "success" ? "success" : "error",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(log.status === "success" ? isZh.value ? "\u6210\u529F" : "Success" : isZh.value ? "\u5931\u8D25" : "Failed")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(log.status === "success" ? isZh.value ? "\u6210\u529F" : "Success" : isZh.value ? "\u5931\u8D25" : "Failed"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  if (log.templateCode) {
                    _push2(`<span class="text-[10px] px-1.5 py-0.2 rounded bg-gray-100 dark:bg-gray-800 text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(log.templateCode)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                  if (log.error) {
                    _push2(`<div class="text-red-500 truncate text-[11px]"${_scopeId}>${ssrInterpolate(log.error)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="flex items-center gap-2 shrink-0"${_scopeId}><span class="text-gray-400 text-[11px] font-mono"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(log.createdAt))}</span>`);
                  if (log.html) {
                    _push2(ssrRenderComponent(_component_UButton, {
                      size: "xs",
                      variant: "soft",
                      color: "neutral",
                      class: "rounded-lg text-xs",
                      onClick: ($event) => openEmailPreview(log)
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(isZh.value ? "\u67E5\u770B\u6B63\u6587" : "View")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(isZh.value ? "\u67E5\u770B\u6B63\u6587" : "View"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div>`);
                });
                _push2(`<!--]--></div>`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="py-16 text-center text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(loadErrorLabel.value)}</div>`);
            }
            _push2(ssrRenderComponent(_component_FullScreenModal, {
              modelValue: isEmailPreviewOpen.value,
              "onUpdate:modelValue": ($event) => isEmailPreviewOpen.value = $event,
              title: isZh.value ? "\u90AE\u4EF6\u5FEB\u7167\u9884\u89C8" : "Email Preview",
              "default-fullscreen": false,
              "max-width": "sm:max-w-2xl"
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "soft",
                    onClick: ($event) => isEmailPreviewOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(isZh.value ? "\u5173\u95ED" : "Close")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(isZh.value ? "\u5173\u95ED" : "Close"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "soft",
                      onClick: ($event) => isEmailPreviewOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(isZh.value ? "\u5173\u95ED" : "Close"), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2;
                if (_push3) {
                  if (previewingLog.value) {
                    _push3(`<div class="space-y-4"${_scopeId2}><div class="flex items-start justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-3"${_scopeId2}><div${_scopeId2}><p class="text-xs text-gray-500"${_scopeId2}>To: <span class="font-mono text-gray-700 dark:text-gray-300"${_scopeId2}>${ssrInterpolate(previewingLog.value.to)}</span> \xB7 ${ssrInterpolate(unref(formatDateTime)(previewingLog.value.createdAt))}</p></div>`);
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: previewingLog.value.status === "success" ? "success" : "error",
                      variant: "subtle"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(previewingLog.value.status === "success" ? isZh.value ? "\u6210\u529F" : "Success" : isZh.value ? "\u5931\u8D25" : "Failed")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(previewingLog.value.status === "success" ? isZh.value ? "\u6210\u529F" : "Success" : isZh.value ? "\u5931\u8D25" : "Failed"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="space-y-1.5"${_scopeId2}><div class="text-xs font-medium text-gray-500"${_scopeId2}>${ssrInterpolate(isZh.value ? "\u90AE\u4EF6\u4E3B\u9898\uFF1A" : "Subject:")}</div><div class="text-sm font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-black/30 p-2.5 rounded-lg border border-gray-200 dark:border-gray-800"${_scopeId2}>${ssrInterpolate(previewingLog.value.subject)}</div></div><div class="space-y-1.5"${_scopeId2}><div class="text-xs font-medium text-gray-500"${_scopeId2}>${ssrInterpolate(isZh.value ? "HTML \u5185\u5BB9\u5FEB\u7167\uFF1A" : "HTML Content:")}</div><div class="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-zinc-900 max-h-96 overflow-auto text-xs font-mono select-all"${_scopeId2}><div class="prose dark:prose-invert max-w-none"${_scopeId2}>${(_a2 = previewingLog.value.html) != null ? _a2 : ""}</div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    previewingLog.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-4"
                    }, [
                      createVNode("div", { class: "flex items-start justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-3" }, [
                        createVNode("div", null, [
                          createVNode("p", { class: "text-xs text-gray-500" }, [
                            createTextVNode("To: "),
                            createVNode("span", { class: "font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(previewingLog.value.to), 1),
                            createTextVNode(" \xB7 " + toDisplayString(unref(formatDateTime)(previewingLog.value.createdAt)), 1)
                          ])
                        ]),
                        createVNode(_component_UBadge, {
                          color: previewingLog.value.status === "success" ? "success" : "error",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(previewingLog.value.status === "success" ? isZh.value ? "\u6210\u529F" : "Success" : isZh.value ? "\u5931\u8D25" : "Failed"), 1)
                          ]),
                          _: 1
                        }, 8, ["color"])
                      ]),
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("div", { class: "text-xs font-medium text-gray-500" }, toDisplayString(isZh.value ? "\u90AE\u4EF6\u4E3B\u9898\uFF1A" : "Subject:"), 1),
                        createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-black/30 p-2.5 rounded-lg border border-gray-200 dark:border-gray-800" }, toDisplayString(previewingLog.value.subject), 1)
                      ]),
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("div", { class: "text-xs font-medium text-gray-500" }, toDisplayString(isZh.value ? "HTML \u5185\u5BB9\u5FEB\u7167\uFF1A" : "HTML Content:"), 1),
                        createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-zinc-900 max-h-96 overflow-auto text-xs font-mono select-all" }, [
                          createVNode("div", {
                            innerHTML: previewingLog.value.html,
                            class: "prose dark:prose-invert max-w-none"
                          }, null, 8, ["innerHTML"])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              pending.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-16 flex items-center justify-center text-gray-400"
              }, [
                createVNode(_component_UIcon, {
                  name: "ph:spinner-gap-bold",
                  class: "w-6 h-6 animate-spin"
                })
              ])) : detail.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "space-y-6"
              }, [
                createVNode("div", { class: "flex items-start justify-between gap-4 flex-wrap" }, [
                  createVNode("div", { class: "flex items-center gap-3" }, [
                    detail.value.user.avatarUrl ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: unref(buildImageProxyUrl)(detail.value.user.avatarUrl),
                      class: "w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-800"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:user",
                        class: "w-5 h-5"
                      })
                    ])),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(detail.value.user.nickname || detail.value.user.email), 1),
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(detail.value.user.email) + " \xB7 ID " + toDisplayString(detail.value.user.id), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                    createVNode(_component_UBadge, {
                      color: detail.value.user.status === 1 ? "success" : "error",
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(detail.value.user.status === 1 ? activeLabel.value : disabledLabel.value), 1)
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    createVNode(_component_UBadge, {
                      color: detail.value.user.emailVerifiedAt ? "success" : "warning",
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(detail.value.user.emailVerifiedAt ? verifiedLabel.value : unverifiedLabel.value), 1)
                      ]),
                      _: 1
                    }, 8, ["color"]),
                    createVNode("div", { class: "flex items-center gap-1.5 ml-2" }, [
                      !detail.value.user.emailVerifiedAt ? (openBlock(), createBlock(_component_UButton, {
                        key: 0,
                        size: "xs",
                        color: "primary",
                        variant: "soft",
                        class: "rounded-lg font-medium",
                        loading: isVerifying.value,
                        onClick: ($event) => handleManualVerify(true)
                      }, {
                        leading: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:check-circle-bold",
                            class: "w-3.5 h-3.5"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" " + toDisplayString(isZh.value ? "\u4EBA\u5DE5\u901A\u8FC7\u8BA4\u8BC1" : "Manual Verify"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : (openBlock(), createBlock(_component_UButton, {
                        key: 1,
                        size: "xs",
                        color: "neutral",
                        variant: "ghost",
                        class: "rounded-lg text-xs text-gray-400 hover:text-red-500",
                        loading: isVerifying.value,
                        onClick: ($event) => handleManualVerify(false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(isZh.value ? "\u64A4\u9500\u8BA4\u8BC1" : "Revoke Verify"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"])),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "soft",
                        class: "rounded-lg font-medium",
                        loading: isResending.value,
                        onClick: handleAdminResendVerify
                      }, {
                        leading: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:paper-plane-tilt-bold",
                            class: "w-3.5 h-3.5"
                          })
                        ]),
                        default: withCtx(() => [
                          createTextVNode(" " + toDisplayString(isZh.value ? "\u4EE3\u53D1\u9A8C\u8BC1\u90AE\u4EF6" : "Send Verify Email"), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(statCards.value, (card) => {
                    return openBlock(), createBlock("div", {
                      key: card.label,
                      class: "rounded-xl border border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20 px-4 py-3"
                    }, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(card.label), 1),
                      createVNode("div", {
                        class: ["mt-1 text-lg font-semibold", card.class || "text-gray-900 dark:text-white"]
                      }, toDisplayString(card.value), 3)
                    ]);
                  }), 128))
                ]),
                hasBalances.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"
                }, [
                  createVNode("div", { class: "px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20" }, [
                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(balancesTitle.value), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 text-sm" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(cashBalanceLabel.value), 1),
                      createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(detail.value.user.cashBalance, baseCurrency.value)), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(grantBalanceLabel.value), 1),
                      createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(detail.value.user.grantBalance, baseCurrency.value)), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(subBalanceLabel.value), 1),
                      createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(detail.value.user.subBalance, baseCurrency.value)), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(tierLabel.value), 1),
                      createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString((_c = detail.value.user.tierLevel) != null ? _c : "-"), 1)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden" }, [
                  createVNode("div", { class: "px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20" }, [
                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(accountTitle.value), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 p-4 text-sm" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(registeredAtLabel.value), 1),
                      createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(formatDateTime)(detail.value.user.createdAt)), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(lastLoginLabel.value), 1),
                      createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(detail.value.user.lastLoginAt ? unref(formatDateTime)(detail.value.user.lastLoginAt) : "-"), 1)
                    ]),
                    detail.value.oauthAccounts.length ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(oauthLabel.value), 1),
                      createVNode("div", { class: "flex flex-wrap gap-1 mt-0.5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(detail.value.oauthAccounts, (acc) => {
                          return openBlock(), createBlock(_component_UBadge, {
                            key: acc.provider,
                            color: "neutral",
                            variant: "subtle",
                            size: "sm",
                            class: "capitalize"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(acc.provider), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    detail.value.promoMember ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(promoLabel.value), 1),
                      createVNode("div", { class: "text-gray-900 dark:text-white capitalize" }, toDisplayString(detail.value.promoMember.role) + " \xB7 " + toDisplayString(detail.value.promoMember.promoCode), 1)
                    ])) : createCommentVNode("", true),
                    detail.value.tokens.length ? (openBlock(), createBlock("div", { key: 2 }, [
                      createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(tokensLabel.value), 1),
                      createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(activeTokenCount.value) + " / " + toDisplayString(detail.value.tokens.length) + " " + toDisplayString(activeLabelShort.value), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                detail.value.profile ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"
                }, [
                  createVNode("div", { class: "px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20" }, [
                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(attributionTitle.value), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 p-4 text-sm" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(attributionFields.value, (field) => {
                      return openBlock(), createBlock("div", {
                        key: field.label
                      }, [
                        createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(field.label), 1),
                        createVNode("div", { class: "text-gray-900 dark:text-white truncate" }, toDisplayString(field.value || "-"), 1)
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                detail.value.subscriptions.length ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden"
                }, [
                  createVNode("div", { class: "px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20" }, [
                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(subscriptionsTitle.value) + " (" + toDisplayString(detail.value.subscriptions.length) + ")", 1)
                  ]),
                  createVNode("div", { class: "divide-y divide-gray-200 dark:divide-gray-800/60" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(detail.value.subscriptions, (sub) => {
                      return openBlock(), createBlock("div", {
                        key: sub.id,
                        class: "flex items-center justify-between gap-3 px-4 py-2.5 text-sm"
                      }, [
                        createVNode("div", { class: "min-w-0 flex-1 text-gray-900 dark:text-white truncate" }, toDisplayString(sub.productName || unknownProductLabel.value), 1),
                        createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 shrink-0" }, toDisplayString(unref(formatCurrencyAmount)(sub.amount, sub.currency)) + " / " + toDisplayString(sub.interval), 1),
                        createVNode(_component_UBadge, {
                          color: sub.status === "active" ? "success" : sub.status === "past_due" ? "warning" : "neutral",
                          variant: "subtle",
                          size: "sm",
                          class: "shrink-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(sub.status), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "rounded-xl border border-gray-200 dark:border-gray-800/60 overflow-hidden" }, [
                  createVNode("div", { class: "px-4 py-3 border-b border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-black/20" }, [
                    createVNode("h4", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, toDisplayString(ordersTitle.value) + " (" + toDisplayString(detail.value.orders.length) + ")", 1)
                  ]),
                  !detail.value.orders.length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-8 text-center text-sm text-gray-500 dark:text-gray-400"
                  }, toDisplayString(noOrdersLabel.value), 1)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "divide-y divide-gray-200 dark:divide-gray-800/60 max-h-80 overflow-auto"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(detail.value.orders, (order) => {
                      return openBlock(), createBlock("div", {
                        key: order.id,
                        class: "flex items-center justify-between gap-3 px-4 py-2.5 text-sm"
                      }, [
                        createVNode("div", { class: "min-w-0 flex-1" }, [
                          createVNode("div", { class: "text-gray-900 dark:text-white truncate" }, toDisplayString(order.productName || unknownProductLabel.value), 1),
                          createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 font-mono truncate" }, toDisplayString(order.id), 1)
                        ]),
                        createVNode("div", { class: "text-right shrink-0" }, [
                          createVNode("div", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(formatCurrencyAmount)(order.amount, order.currency)), 1),
                          createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(order.createdAt)), 1)
                        ]),
                        createVNode("div", { class: "flex flex-col items-end gap-1 shrink-0 w-24" }, [
                          createVNode(_component_UBadge, {
                            color: payStatusColor(order.payStatus),
                            variant: "subtle",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.payStatus), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode(_component_UBadge, {
                            color: statusColor(order.status),
                            variant: "subtle",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(order.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ])
                      ]);
                    }), 128))
                  ]))
                ]),
                createVNode("div", { class: "rounded-2xl border border-gray-200 dark:border-gray-800/60 bg-white dark:bg-[#121214] p-5" }, [
                  createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                    createVNode("div", { class: "flex items-center gap-2 font-semibold text-gray-900 dark:text-white" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:envelope-simple-fill",
                        class: "w-5 h-5 text-indigo-500"
                      }),
                      createVNode("span", null, toDisplayString(isZh.value ? "\u90AE\u4EF6\u53D1\u9001\u8BB0\u5F55" : "Email History"), 1),
                      createVNode("span", { class: "text-xs font-normal text-gray-400" }, "(" + toDisplayString(((_d = detail.value.emailLogs) == null ? void 0 : _d.length) || 0) + ")", 1)
                    ])
                  ]),
                  !detail.value.emailLogs || detail.value.emailLogs.length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "py-8 text-center text-xs text-gray-400"
                  }, toDisplayString(isZh.value ? "\u6682\u65E0\u53D1\u9001\u7ED9\u8BE5\u7528\u6237\u7684\u90AE\u4EF6\u8BB0\u5F55" : "No emails sent to this user yet"), 1)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "divide-y divide-gray-100 dark:divide-gray-800/60 -mx-5 px-5"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(detail.value.emailLogs, (log) => {
                      return openBlock(), createBlock("div", {
                        key: log.id,
                        class: "py-3 flex items-center justify-between gap-4 text-xs hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors"
                      }, [
                        createVNode("div", { class: "min-w-0 flex-1 space-y-0.5" }, [
                          createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                            createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(log.subject), 1),
                            createVNode(_component_UBadge, {
                              color: log.status === "success" ? "success" : "error",
                              variant: "subtle",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(log.status === "success" ? isZh.value ? "\u6210\u529F" : "Success" : isZh.value ? "\u5931\u8D25" : "Failed"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            log.templateCode ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-[10px] px-1.5 py-0.2 rounded bg-gray-100 dark:bg-gray-800 text-gray-400 font-mono"
                            }, toDisplayString(log.templateCode), 1)) : createCommentVNode("", true)
                          ]),
                          log.error ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-500 truncate text-[11px]"
                          }, toDisplayString(log.error), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 shrink-0" }, [
                          createVNode("span", { class: "text-gray-400 text-[11px] font-mono" }, toDisplayString(unref(formatDateTime)(log.createdAt)), 1),
                          log.html ? (openBlock(), createBlock(_component_UButton, {
                            key: 0,
                            size: "xs",
                            variant: "soft",
                            color: "neutral",
                            class: "rounded-lg text-xs",
                            onClick: ($event) => openEmailPreview(log)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(isZh.value ? "\u67E5\u770B\u6B63\u6587" : "View"), 1)
                            ]),
                            _: 1
                          }, 8, ["onClick"])) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128))
                  ]))
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "py-16 text-center text-sm text-gray-500 dark:text-gray-400"
              }, toDisplayString(loadErrorLabel.value), 1)),
              createVNode(_component_FullScreenModal, {
                modelValue: isEmailPreviewOpen.value,
                "onUpdate:modelValue": ($event) => isEmailPreviewOpen.value = $event,
                title: isZh.value ? "\u90AE\u4EF6\u5FEB\u7167\u9884\u89C8" : "Email Preview",
                "default-fullscreen": false,
                "max-width": "sm:max-w-2xl"
              }, {
                footer: withCtx(() => [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "soft",
                    onClick: ($event) => isEmailPreviewOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(isZh.value ? "\u5173\u95ED" : "Close"), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  previewingLog.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4"
                  }, [
                    createVNode("div", { class: "flex items-start justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-3" }, [
                      createVNode("div", null, [
                        createVNode("p", { class: "text-xs text-gray-500" }, [
                          createTextVNode("To: "),
                          createVNode("span", { class: "font-mono text-gray-700 dark:text-gray-300" }, toDisplayString(previewingLog.value.to), 1),
                          createTextVNode(" \xB7 " + toDisplayString(unref(formatDateTime)(previewingLog.value.createdAt)), 1)
                        ])
                      ]),
                      createVNode(_component_UBadge, {
                        color: previewingLog.value.status === "success" ? "success" : "error",
                        variant: "subtle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(previewingLog.value.status === "success" ? isZh.value ? "\u6210\u529F" : "Success" : isZh.value ? "\u5931\u8D25" : "Failed"), 1)
                        ]),
                        _: 1
                      }, 8, ["color"])
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("div", { class: "text-xs font-medium text-gray-500" }, toDisplayString(isZh.value ? "\u90AE\u4EF6\u4E3B\u9898\uFF1A" : "Subject:"), 1),
                      createVNode("div", { class: "text-sm font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-black/30 p-2.5 rounded-lg border border-gray-200 dark:border-gray-800" }, toDisplayString(previewingLog.value.subject), 1)
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      createVNode("div", { class: "text-xs font-medium text-gray-500" }, toDisplayString(isZh.value ? "HTML \u5185\u5BB9\u5FEB\u7167\uFF1A" : "HTML Content:"), 1),
                      createVNode("div", { class: "border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-zinc-900 max-h-96 overflow-auto text-xs font-mono select-all" }, [
                        createVNode("div", {
                          innerHTML: previewingLog.value.html,
                          class: "prose dark:prose-invert max-w-none"
                        }, null, 8, ["innerHTML"])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "title"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/customers/UserDetailModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AdminUserDetailModal = Object.assign(_sfc_main$1, { __name: "AdminCustomersUserDetailModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "customers",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
    const isZh = computed(() => (locale.value || "").startsWith("zh"));
    const { formatDateTime } = useFormatTime();
    const { formatCurrencyTotals } = useCurrencyFormat();
    const toast = useToast();
    const { confirm } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const activeTab = ref("users");
    const userFilter = ref("all");
    const tabs = computed(() => [
      {
        label: t("admin.users.registered"),
        value: "users",
        icon: "ph:user-circle"
      },
      { label: t("admin.customers.title"), value: "customers", icon: "ph:users" }
    ]);
    const userFilterOptions = computed(() => [
      { label: isZh.value ? "\u5168\u90E8\u4F1A\u5458" : "All Users", value: "all" },
      { label: isZh.value ? "\u5DF2\u9A8C\u8BC1\u90AE\u7BB1" : "Verified Email", value: "verified" },
      { label: isZh.value ? "\u672A\u9A8C\u8BC1\u90AE\u7BB1" : "Unverified Email", value: "unverified" },
      { label: isZh.value ? "\u6709\u6D88\u8D39\u4F1A\u5458" : "Has Spending", value: "has_spending" }
    ]);
    const copyText = (text, label) => {
      if (!text) return;
      (void 0).clipboard.writeText(text);
      toast.add({
        title: t("admin.common.success"),
        description: `${label} \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F`,
        color: "success"
      });
    };
    const columns = computed(() => [
      { accessorKey: "email", header: t("admin.customers.email") },
      { accessorKey: "visitorId", header: t("admin.customers.visitorId"), meta: { class: { th: "w-40" } } },
      { accessorKey: "totalSpent", header: t("admin.customers.totalSpent"), meta: { class: { th: "w-36" } } },
      { accessorKey: "totalOrders", header: t("admin.customers.orders"), meta: { class: { th: "w-32" } } },
      { accessorKey: "lastOrderAt", header: t("admin.customers.lastActive"), meta: { class: { th: "w-44" } } },
      {
        accessorKey: "actions",
        header: t("admin.users.actions"),
        meta: {
          class: {
            th: "w-24 text-right sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const userColumns = computed(() => [
      { accessorKey: "id", header: "ID", meta: { class: { th: "w-16 font-mono text-center", td: "text-center font-mono text-xs" } } },
      { accessorKey: "username", header: isZh.value ? "\u7528\u6237\u8EAB\u4EFD / \u90AE\u7BB1" : "User Identity / Email" },
      { accessorKey: "emailVerification", header: isZh.value ? "\u8BA4\u8BC1\u72B6\u6001" : "Verification", meta: { class: { th: "w-36" } } },
      { accessorKey: "balance", header: isZh.value ? "\u94B1\u5305\u8D44\u4EA7" : "Wallet Balance", meta: { class: { th: "w-36" } } },
      { accessorKey: "spending", header: isZh.value ? "\u6D88\u8D39 / Key" : "Spending & Keys", meta: { class: { th: "w-32" } } },
      { accessorKey: "createdAt", header: isZh.value ? "\u6CE8\u518C / \u6D3B\u8DC3\u65F6\u95F4" : "Registered / Active", meta: { class: { th: "w-44" } } },
      {
        accessorKey: "actions",
        header: t("admin.users.actions"),
        meta: {
          class: {
            th: "w-28 text-right sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-[#121214]",
            td: "text-right font-medium sticky right-0 bg-white dark:bg-[#121214] z-10 before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:to-[#121214]"
          }
        }
      }
    ]);
    const searchInput = ref("");
    const searchKeyword = ref("");
    let searchDebounceTimer = null;
    watch(searchInput, (val) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        searchKeyword.value = (val || "").trim();
        page.value = 1;
        usersPage.value = 1;
      }, 300);
    });
    const resetFilters = () => {
      searchInput.value = "";
      searchKeyword.value = "";
      userFilter.value = "all";
      page.value = 1;
      usersPage.value = 1;
    };
    const { page, pageSize: pageCount, onPageChange } = usePagination(15);
    const {
      data: customersData,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/customers",
      {
        query: computed(() => ({
          page: page.value,
          pageSize: pageCount.value,
          search: searchKeyword.value || void 0
        })),
        watch: [page, searchKeyword],
        onResponseError({ response }) {
          if (response.status === 401) {
            useRouter().push("/admin/login");
          }
        }
      },
      "$CC_SZtdkCq"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const paginatedCustomers = computed(() => {
      var _a;
      return ((_a = customersData.value) == null ? void 0 : _a.data) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return ((_a = customersData.value) == null ? void 0 : _a.total) || 0;
    });
    const {
      page: usersPage,
      pageSize: usersPageCount,
      onPageChange: onUsersPageChange
    } = usePagination(15);
    const {
      data: usersData,
      pending: usersPending,
      refresh: usersRefresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/users",
      {
        query: computed(() => ({
          page: usersPage.value,
          pageSize: usersPageCount.value,
          search: searchKeyword.value || void 0,
          hasSpending: userFilter.value === "has_spending" ? "true" : void 0
        })),
        watch: [usersPage, searchKeyword, userFilter],
        onResponseError({ response }) {
          if (response.status === 401) {
            useRouter().push("/admin/login");
          }
        }
      },
      "$rYaVeJ4CHn"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const usersTotalItems = computed(() => {
      var _a;
      return ((_a = usersData.value) == null ? void 0 : _a.total) || 0;
    });
    const paginatedUsers = computed(() => {
      var _a;
      return ((_a = usersData.value) == null ? void 0 : _a.data) || [];
    });
    const filteredUsers = computed(() => {
      const list = paginatedUsers.value;
      if (userFilter.value === "verified") {
        return list.filter((u) => Boolean(u.emailVerifiedAt));
      }
      if (userFilter.value === "unverified") {
        return list.filter((u) => !u.emailVerifiedAt);
      }
      return list;
    });
    const verifiedCount = computed(() => {
      return paginatedUsers.value.filter((u) => Boolean(u.emailVerifiedAt)).length;
    });
    const totalUserBalanceFormatted = computed(() => {
      const sum = paginatedUsers.value.reduce((acc, u) => acc + Number(u.availableBalance || 0), 0);
      return `\xA5${sum.toFixed(2)}`;
    });
    const isCustomerDetailOpen = ref(false);
    const customerDetailEmail = ref(null);
    const customerDetailVisitorId = ref(null);
    const openCustomerDetail = (row) => {
      customerDetailEmail.value = row.email;
      customerDetailVisitorId.value = row.visitorId || null;
      isCustomerDetailOpen.value = true;
    };
    const isUserDetailOpen = ref(false);
    const userDetailId = ref(null);
    const openUserDetail = (id) => {
      userDetailId.value = id;
      isUserDetailOpen.value = true;
    };
    const handleViewRegisteredUser = (id) => {
      isCustomerDetailOpen.value = false;
      openUserDetail(id);
    };
    const isModalOpen = ref(false);
    const isSaving = ref(false);
    const form = reactive({
      id: null,
      username: "",
      password: "",
      role: "admin"
    });
    const roles = [
      { label: "Admin", value: "admin" },
      { label: "Super Admin", value: "superadmin" }
    ];
    const openModal = (user) => {
      if (user) {
        form.id = user.id;
        form.username = user.username;
        form.password = "";
        form.role = user.role || "admin";
      } else {
        form.id = null;
        form.username = "";
        form.password = "";
        form.role = "admin";
      }
      isModalOpen.value = true;
    };
    const saveUser = async () => {
      var _a;
      isSaving.value = true;
      try {
        if (form.id) {
          await $fetch(`/api/admin/users/${form.id}`, {
            method: "PUT",
            body: {
              password: form.password || void 0,
              role: form.role
            }
          });
          toast.add({ title: t("admin.common.success"), description: "\u7528\u6237\u66F4\u65B0\u6210\u529F", color: "success" });
        } else {
          await $fetch("/api/admin/users", {
            method: "POST",
            body: form
          });
          toast.add({ title: t("admin.common.success"), description: "\u7528\u6237\u521B\u5EFA\u6210\u529F", color: "success" });
        }
        isModalOpen.value = false;
        usersRefresh();
      } catch (e) {
        toast.add({ title: t("admin.common.error"), description: ((_a = e.data) == null ? void 0 : _a.message) || "\u64CD\u4F5C\u5931\u8D25", color: "error" });
      } finally {
        isSaving.value = false;
      }
    };
    const deleteUser = async (id) => {
      var _a;
      if (!await confirm({
        title: t("admin.users.delete"),
        message: t("admin.users.confirmDelete")
      })) return;
      try {
        await $fetch(`/api/admin/users/${id}`, { method: "DELETE" });
        toast.add({ title: t("admin.common.success"), description: "\u7528\u6237\u5220\u9664\u6210\u529F", color: "success" });
        usersRefresh();
      } catch (e) {
        toast.add({ title: t("admin.common.error"), description: ((_a = e.data) == null ? void 0 : _a.message) || "\u5220\u9664\u5931\u8D25", color: "error" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$x;
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      const _component_UTabs = _sfc_main$3;
      const _component_USelect = _sfc_main$j;
      const _component_UInput = _sfc_main$k;
      const _component_UTable = _sfc_main$h;
      const _component_UPagination = _sfc_main$n;
      const _component_UModal = _sfc_main$s;
      const _component_UFormField = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col space-y-4" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 shrink-0"><div><div class="flex items-center gap-2"><h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(activeTab.value === "users" ? _ctx.$t("admin.users.registered") : _ctx.$t("admin.customers.title"))}</h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "primary",
        variant: "subtle",
        size: "xs",
        class: "font-mono font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(activeTab.value === "users" ? usersTotalItems.value : totalItems.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(activeTab.value === "users" ? usersTotalItems.value : totalItems.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-gray-500 dark:text-gray-400 text-xs mt-0.5">${ssrInterpolate(_ctx.$t("admin.customers.subtitle"))}</p></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-clockwise",
        size: "sm",
        loading: activeTab.value === "customers" ? unref(pending) : unref(usersPending),
        class: "rounded-xl",
        onClick: ($event) => activeTab.value === "customers" ? unref(refresh)() : unref(usersRefresh)()
      }, null, _parent));
      if (activeTab.value === "users" && unref(hasAdminPerm)("customers:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          size: "sm",
          icon: "ph:plus-bold",
          class: "bg-purple-600 hover:bg-purple-500 text-white rounded-xl shadow-xs font-medium",
          onClick: ($event) => openModal()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.users.add"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.users.add")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 shrink-0"><div class="${ssrRenderClass([{ "ring-1 ring-purple-500 border-purple-500": activeTab.value === "users" && userFilter.value === "all" }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-purple-500/50 hover:bg-purple-50/20 dark:hover:bg-purple-950/10 transition-all"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:user-circle-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.users.registered"))}</div></div></div><span class="text-base font-bold text-gray-900 dark:text-white font-mono ml-2 shrink-0">${ssrInterpolate(usersTotalItems.value)}</span></div><div class="${ssrRenderClass([{ "ring-1 ring-emerald-500 border-emerald-500": activeTab.value === "users" && userFilter.value === "verified" }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-emerald-500/50 hover:bg-emerald-50/20 dark:hover:bg-emerald-950/10 transition-all"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:seal-check-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(isZh.value ? "\u5DF2\u9A8C\u8BC1\u4F1A\u5458" : "Verified Users")}</div></div></div><span class="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono ml-2 shrink-0">${ssrInterpolate(verifiedCount.value)}</span></div><div class="${ssrRenderClass([{ "ring-1 ring-blue-500 border-blue-500": activeTab.value === "customers" }, "bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between cursor-pointer hover:border-blue-500/50 hover:bg-blue-50/20 dark:hover:bg-blue-950/10 transition-all"])}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-bag-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.customers.title"))}</div></div></div><span class="text-base font-bold text-blue-600 dark:text-blue-400 font-mono ml-2 shrink-0">${ssrInterpolate(totalItems.value)}</span></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-xl px-3 py-2 shadow-2xs flex items-center justify-between"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:wallet-duotone",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div><div class="truncate"><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400">${ssrInterpolate(isZh.value ? "\u4F1A\u5458\u603B\u8D44\u4EA7" : "Member Balances")}</div></div></div><span class="text-base font-bold text-amber-600 dark:text-amber-400 font-mono ml-2 shrink-0">${ssrInterpolate(totalUserBalanceFormatted.value)}</span></div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0"><div class="p-3.5 border-b border-gray-200/70 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50/50 dark:bg-[#18181b]/30">`);
      _push(ssrRenderComponent(_component_UTabs, {
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event,
        items: tabs.value,
        size: "sm",
        class: "w-full sm:w-auto"
      }, null, _parent));
      _push(`<div class="flex items-center gap-2.5 w-full sm:w-auto flex-wrap justify-end">`);
      if (activeTab.value === "users") {
        _push(ssrRenderComponent(_component_USelect, {
          modelValue: userFilter.value,
          "onUpdate:modelValue": ($event) => userFilter.value = $event,
          items: userFilterOptions.value,
          size: "sm",
          class: "w-36",
          ui: { base: "rounded-xl" }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full sm:w-72">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: searchInput.value,
        "onUpdate:modelValue": ($event) => searchInput.value = $event,
        icon: "ph:magnifying-glass",
        placeholder: activeTab.value === "users" ? isZh.value ? "\u641C\u7D22\u7528\u6237\u540D\u3001\u90AE\u7BB1\u3001ID..." : "Search users..." : isZh.value ? "\u641C\u7D22\u5BA2\u6237\u90AE\u7BB1\u3001\u8BBF\u5BA2ID..." : "Search customers...",
        size: "sm",
        class: "w-full text-xs",
        ui: { base: "rounded-xl" },
        clearable: ""
      }, null, _parent));
      _push(`</div>`);
      if (searchKeyword.value || activeTab.value === "users" && userFilter.value !== "all") {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "subtle",
          size: "sm",
          icon: "ph:x",
          class: "rounded-xl text-xs",
          onClick: resetFilters
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(isZh.value ? "\u91CD\u7F6E" : "Reset")}`);
            } else {
              return [
                createTextVNode(toDisplayString(isZh.value ? "\u91CD\u7F6E" : "Reset"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (activeTab.value === "users") {
        _push(`<div class="flex-1 overflow-auto custom-scrollbar">`);
        _push(ssrRenderComponent(_component_UTable, {
          data: filteredUsers.value,
          columns: userColumns.value,
          loading: unref(usersPending),
          class: "min-w-full",
          sticky: ""
        }, {
          "id-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-mono text-xs text-gray-500"${_scopeId}>#${ssrInterpolate(row.original.id)}</span>`);
            } else {
              return [
                createVNode("span", { class: "font-mono text-xs text-gray-500" }, "#" + toDisplayString(row.original.id), 1)
              ];
            }
          }),
          "username-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2.5 py-1"${_scopeId}><div class="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/50 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 font-bold text-xs"${_scopeId}>${ssrInterpolate((row.original.nickname || row.original.email || "U").substring(0, 1).toUpperCase())}</div><div class="flex flex-col min-w-0 max-w-xs"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}><span class="text-sm font-semibold text-gray-900 dark:text-white truncate hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors"${_scopeId}>${ssrInterpolate(row.original.nickname || row.original.email)}</span>`);
              if (row.original.nickname && row.original.nickname !== row.original.email) {
                _push2(`<span class="text-xs text-gray-400 truncate"${_scopeId}> (${ssrInterpolate(row.original.email)}) </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center gap-2 mt-0.5"${_scopeId}><span class="text-[11px] text-gray-500 font-mono flex items-center gap-1 hover:text-purple-600 cursor-pointer" title="\u70B9\u51FB\u590D\u5236\u90AE\u7BB1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:envelope-simple",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(row.original.email)}</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2.5 py-1" }, [
                  createVNode("div", { class: "w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/50 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 font-bold text-xs" }, toDisplayString((row.original.nickname || row.original.email || "U").substring(0, 1).toUpperCase()), 1),
                  createVNode("div", { class: "flex flex-col min-w-0 max-w-xs" }, [
                    createVNode("div", { class: "flex items-center gap-1.5" }, [
                      createVNode("span", {
                        class: "text-sm font-semibold text-gray-900 dark:text-white truncate hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors",
                        onClick: ($event) => openUserDetail(Number(row.original.id))
                      }, toDisplayString(row.original.nickname || row.original.email), 9, ["onClick"]),
                      row.original.nickname && row.original.nickname !== row.original.email ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs text-gray-400 truncate"
                      }, " (" + toDisplayString(row.original.email) + ") ", 1)) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2 mt-0.5" }, [
                      createVNode("span", {
                        class: "text-[11px] text-gray-500 font-mono flex items-center gap-1 hover:text-purple-600 cursor-pointer",
                        onClick: withModifiers(($event) => copyText(row.original.email, "\u90AE\u7BB1"), ["stop"]),
                        title: "\u70B9\u51FB\u590D\u5236\u90AE\u7BB1"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:envelope-simple",
                          class: "w-3 h-3"
                        }),
                        createTextVNode(" " + toDisplayString(row.original.email), 1)
                      ], 8, ["onClick"])
                    ])
                  ])
                ])
              ];
            }
          }),
          "emailVerification-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-1.5 flex-wrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: row.original.emailVerifiedAt ? "success" : "warning",
                variant: "subtle",
                size: "xs",
                class: "cursor-pointer font-medium",
                onClick: ($event) => openUserDetail(Number(row.original.id))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: row.original.emailVerifiedAt ? "ph:check-circle" : "ph:warning-circle",
                      class: "w-3 h-3 mr-1"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(row.original.emailVerifiedAt ? isZh.value ? "\u5DF2\u9A8C\u8BC1" : "Verified" : isZh.value ? "\u672A\u9A8C\u8BC1" : "Unverified")}`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: row.original.emailVerifiedAt ? "ph:check-circle" : "ph:warning-circle",
                        class: "w-3 h-3 mr-1"
                      }, null, 8, ["name"]),
                      createTextVNode(" " + toDisplayString(row.original.emailVerifiedAt ? isZh.value ? "\u5DF2\u9A8C\u8BC1" : "Verified" : isZh.value ? "\u672A\u9A8C\u8BC1" : "Unverified"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (row.original.status !== void 0 && row.original.status !== null) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: row.original.status === 1 || row.original.status === "active" ? "neutral" : "error",
                  variant: "outline",
                  size: "xs"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(row.original.status === 1 || row.original.status === "active" ? isZh.value ? "\u6B63\u5E38" : "Active" : isZh.value ? "\u7981\u7528" : "Disabled")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(row.original.status === 1 || row.original.status === "active" ? isZh.value ? "\u6B63\u5E38" : "Active" : isZh.value ? "\u7981\u7528" : "Disabled"), 1)
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
                createVNode("div", { class: "flex items-center gap-1.5 flex-wrap" }, [
                  createVNode(_component_UBadge, {
                    color: row.original.emailVerifiedAt ? "success" : "warning",
                    variant: "subtle",
                    size: "xs",
                    class: "cursor-pointer font-medium",
                    onClick: ($event) => openUserDetail(Number(row.original.id))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: row.original.emailVerifiedAt ? "ph:check-circle" : "ph:warning-circle",
                        class: "w-3 h-3 mr-1"
                      }, null, 8, ["name"]),
                      createTextVNode(" " + toDisplayString(row.original.emailVerifiedAt ? isZh.value ? "\u5DF2\u9A8C\u8BC1" : "Verified" : isZh.value ? "\u672A\u9A8C\u8BC1" : "Unverified"), 1)
                    ]),
                    _: 2
                  }, 1032, ["color", "onClick"]),
                  row.original.status !== void 0 && row.original.status !== null ? (openBlock(), createBlock(_component_UBadge, {
                    key: 0,
                    color: row.original.status === 1 || row.original.status === "active" ? "neutral" : "error",
                    variant: "outline",
                    size: "xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(row.original.status === 1 || row.original.status === "active" ? isZh.value ? "\u6B63\u5E38" : "Active" : isZh.value ? "\u7981\u7528" : "Disabled"), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "balance-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col py-0.5"${_scopeId}><div class="text-sm font-bold text-gray-900 dark:text-white font-mono"${_scopeId}> \xA5${ssrInterpolate(Number(row.original.availableBalance || 0).toFixed(2))}</div><div class="flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-500 font-mono"${_scopeId}><span${_scopeId}>\u73B0\u91D1: \xA5${ssrInterpolate(Number(row.original.cashBalance || 0).toFixed(2))}</span><span${_scopeId}>\u8D60\u9001: \xA5${ssrInterpolate(Number(row.original.grantBalance || 0).toFixed(2))}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col py-0.5" }, [
                  createVNode("div", { class: "text-sm font-bold text-gray-900 dark:text-white font-mono" }, " \xA5" + toDisplayString(Number(row.original.availableBalance || 0).toFixed(2)), 1),
                  createVNode("div", { class: "flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-500 font-mono" }, [
                    createVNode("span", null, "\u73B0\u91D1: \xA5" + toDisplayString(Number(row.original.cashBalance || 0).toFixed(2)), 1),
                    createVNode("span", null, "\u8D60\u9001: \xA5" + toDisplayString(Number(row.original.grantBalance || 0).toFixed(2)), 1)
                  ])
                ])
              ];
            }
          }),
          "spending-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col py-0.5"${_scopeId}><span class="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400"${_scopeId}> \xA5${ssrInterpolate(Number(row.original.totalSpend || 0).toFixed(2))}</span>`);
              if (Number(row.original.activeKeyCount || 0) > 0) {
                _push2(`<span class="text-[11px] text-purple-600 dark:text-purple-400 font-mono"${_scopeId}>${ssrInterpolate(row.original.activeKeyCount)} ${ssrInterpolate(isZh.value ? "\u4E2A\u6D3B\u8DC3 Key" : "Keys")}</span>`);
              } else {
                _push2(`<span class="text-[11px] text-gray-400 font-mono"${_scopeId}> 0 Keys </span>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col py-0.5" }, [
                  createVNode("span", { class: "text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400" }, " \xA5" + toDisplayString(Number(row.original.totalSpend || 0).toFixed(2)), 1),
                  Number(row.original.activeKeyCount || 0) > 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-[11px] text-purple-600 dark:text-purple-400 font-mono"
                  }, toDisplayString(row.original.activeKeyCount) + " " + toDisplayString(isZh.value ? "\u4E2A\u6D3B\u8DC3 Key" : "Keys"), 1)) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-[11px] text-gray-400 font-mono"
                  }, " 0 Keys "))
                ])
              ];
            }
          }),
          "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col text-xs font-mono"${_scopeId}><span class="text-gray-700 dark:text-gray-300 font-medium"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
              if (row.original.lastLoginAt) {
                _push2(`<span class="text-gray-400 dark:text-gray-500 text-[11px]"${_scopeId}>${ssrInterpolate(isZh.value ? "\u6700\u540E\u767B\u5F55: " : "Login: ")}${ssrInterpolate(unref(formatDateTime)(row.original.lastLoginAt))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col text-xs font-mono" }, [
                  createVNode("span", { class: "text-gray-700 dark:text-gray-300 font-medium" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1),
                  row.original.lastLoginAt ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-gray-400 dark:text-gray-500 text-[11px]"
                  }, toDisplayString(isZh.value ? "\u6700\u540E\u767B\u5F55: " : "Login: ") + toDisplayString(unref(formatDateTime)(row.original.lastLoginAt)), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-end gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:eye",
                size: "sm",
                title: isZh.value ? "\u67E5\u770B\u8BE6\u60C5\u4E0E\u90AE\u4EF6\u8BB0\u5F55" : "View details",
                class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
                onClick: ($event) => openUserDetail(Number(row.original.id))
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:pencil-simple",
                size: "sm",
                disabled: row.original.username === "admin" || !unref(hasAdminPerm)("customers:edit"),
                title: row.original.username === "admin" ? "\u8BF7\u5728\u4E2A\u4EBA\u4E2D\u5FC3\u4FEE\u6539\u8D85\u7EA7\u7BA1\u7406\u5458" : isZh.value ? "\u7F16\u8F91" : "Edit",
                class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
                onClick: ($event) => openModal(row.original)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                icon: "ph:trash",
                size: "sm",
                disabled: row.original.username === "admin" || !unref(hasAdminPerm)("customers:edit"),
                title: row.original.username === "admin" ? "\u7981\u6B62\u5220\u9664\u4E3B\u7BA1\u7406\u5458" : isZh.value ? "\u5220\u9664" : "Delete",
                class: "rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30",
                onClick: ($event) => deleteUser(Number(row.original.id))
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:eye",
                    size: "sm",
                    title: isZh.value ? "\u67E5\u770B\u8BE6\u60C5\u4E0E\u90AE\u4EF6\u8BB0\u5F55" : "View details",
                    class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
                    onClick: ($event) => openUserDetail(Number(row.original.id))
                  }, null, 8, ["title", "onClick"]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:pencil-simple",
                    size: "sm",
                    disabled: row.original.username === "admin" || !unref(hasAdminPerm)("customers:edit"),
                    title: row.original.username === "admin" ? "\u8BF7\u5728\u4E2A\u4EBA\u4E2D\u5FC3\u4FEE\u6539\u8D85\u7EA7\u7BA1\u7406\u5458" : isZh.value ? "\u7F16\u8F91" : "Edit",
                    class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
                    onClick: ($event) => openModal(row.original)
                  }, null, 8, ["disabled", "title", "onClick"]),
                  createVNode(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    icon: "ph:trash",
                    size: "sm",
                    disabled: row.original.username === "admin" || !unref(hasAdminPerm)("customers:edit"),
                    title: row.original.username === "admin" ? "\u7981\u6B62\u5220\u9664\u4E3B\u7BA1\u7406\u5458" : isZh.value ? "\u5220\u9664" : "Delete",
                    class: "rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30",
                    onClick: ($event) => deleteUser(Number(row.original.id))
                  }, null, 8, ["disabled", "title", "onClick"])
                ])
              ];
            }
          }),
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center justify-center py-16 text-center px-4"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:user-circle",
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(searchKeyword.value ? _ctx.$t("admin.customers.no_customers_found") : _ctx.$t("admin.common.noData"))}</p>`);
              if (searchKeyword.value || userFilter.value !== "all") {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "soft",
                  size: "xs",
                  class: "mt-3 rounded-lg",
                  icon: "ph:x",
                  onClick: resetFilters
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(isZh.value ? "\u6E05\u9664\u7B5B\u9009" : "Clear filters")}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(isZh.value ? "\u6E05\u9664\u7B5B\u9009" : "Clear filters"), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center justify-center py-16 text-center px-4" }, [
                  createVNode("div", { class: "w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:user-circle",
                      class: "w-6 h-6"
                    })
                  ]),
                  createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(searchKeyword.value ? _ctx.$t("admin.customers.no_customers_found") : _ctx.$t("admin.common.noData")), 1),
                  searchKeyword.value || userFilter.value !== "all" ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    color: "neutral",
                    variant: "soft",
                    size: "xs",
                    class: "mt-3 rounded-lg",
                    icon: "ph:x",
                    onClick: resetFilters
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(isZh.value ? "\u6E05\u9664\u7B5B\u9009" : "Clear filters"), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex-1 overflow-auto custom-scrollbar">`);
        _push(ssrRenderComponent(_component_UTable, {
          data: paginatedCustomers.value,
          columns: columns.value,
          loading: unref(pending),
          class: "min-w-full",
          sticky: ""
        }, {
          "email-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 py-1"${_scopeId}><div class="w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:user",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</div><span class="${ssrRenderClass(row.original.email === "Anonymous" || row.original.email === "\u533F\u540D\u8BBF\u5BA2" ? "text-gray-500 italic text-xs" : "text-gray-900 dark:text-white font-medium text-sm")}"${_scopeId}>${ssrInterpolate(row.original.email)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 py-1" }, [
                  createVNode("div", { class: "w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:user",
                      class: "w-3.5 h-3.5"
                    })
                  ]),
                  createVNode("span", {
                    class: row.original.email === "Anonymous" || row.original.email === "\u533F\u540D\u8BBF\u5BA2" ? "text-gray-500 italic text-xs" : "text-gray-900 dark:text-white font-medium text-sm"
                  }, toDisplayString(row.original.email), 3)
                ])
              ];
            }
          }),
          "visitorId-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (row.original.visitorId) {
                _push2(`<span class="inline-flex items-center gap-1 text-xs text-gray-500 font-mono cursor-pointer hover:text-purple-600 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded-md transition-colors"${ssrRenderAttr("title", String(row.original.visitorId))}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:copy",
                  class: "w-3 h-3"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(String(row.original.visitorId).substring(0, 10))}... </span>`);
              } else {
                _push2(`<span class="text-xs text-gray-400"${_scopeId}>-</span>`);
              }
            } else {
              return [
                row.original.visitorId ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "inline-flex items-center gap-1 text-xs text-gray-500 font-mono cursor-pointer hover:text-purple-600 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded-md transition-colors",
                  title: String(row.original.visitorId),
                  onClick: ($event) => copyText(String(row.original.visitorId), "Visitor ID")
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:copy",
                    class: "w-3 h-3"
                  }),
                  createTextVNode(" " + toDisplayString(String(row.original.visitorId).substring(0, 10)) + "... ", 1)
                ], 8, ["title", "onClick"])) : (openBlock(), createBlock("span", {
                  key: 1,
                  class: "text-xs text-gray-400"
                }, "-"))
              ];
            }
          }),
          "totalSpent-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-emerald-600 dark:text-emerald-400 font-bold font-mono text-sm"${_scopeId}>${ssrInterpolate(unref(formatCurrencyTotals)(row.original.totalSpentByCurrency))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-emerald-600 dark:text-emerald-400 font-bold font-mono text-sm" }, toDisplayString(unref(formatCurrencyTotals)(row.original.totalSpentByCurrency)), 1)
              ];
            }
          }),
          "totalOrders-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-1.5 font-mono"${_scopeId}><span class="font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.totalOrders)}</span>`);
              if (Number(row.original.unpaidOrders || 0) > 0) {
                _push2(`<span class="text-[11px] text-red-500 font-medium"${ssrRenderAttr("title", _ctx.$t("admin.customers.failed"))}${_scopeId}> (${ssrInterpolate(row.original.unpaidOrders)} ${ssrInterpolate(_ctx.$t("admin.customers.failed"))}) </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-1.5 font-mono" }, [
                  createVNode("span", { class: "font-bold text-gray-900 dark:text-white" }, toDisplayString(row.original.totalOrders), 1),
                  Number(row.original.unpaidOrders || 0) > 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-[11px] text-red-500 font-medium",
                    title: _ctx.$t("admin.customers.failed")
                  }, " (" + toDisplayString(row.original.unpaidOrders) + " " + toDisplayString(_ctx.$t("admin.customers.failed")) + ") ", 9, ["title"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          "lastOrderAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-xs text-gray-500 dark:text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.lastOrderAt))}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-xs text-gray-500 dark:text-gray-400 font-mono" }, toDisplayString(unref(formatDateTime)(row.original.lastOrderAt)), 1)
              ];
            }
          }),
          "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:eye",
                size: "sm",
                title: isZh.value ? "\u67E5\u770B\u8BA2\u5355\u8BB0\u5F55\u4E0E\u5BA2\u6237\u753B\u50CF" : "View customer orders",
                class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
                onClick: ($event) => openCustomerDetail(row.original)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-end" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:eye",
                    size: "sm",
                    title: isZh.value ? "\u67E5\u770B\u8BA2\u5355\u8BB0\u5F55\u4E0E\u5BA2\u6237\u753B\u50CF" : "View customer orders",
                    class: "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",
                    onClick: ($event) => openCustomerDetail(row.original)
                  }, null, 8, ["title", "onClick"])
                ])
              ];
            }
          }),
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center justify-center py-16 text-center px-4"${_scopeId}><div class="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:users",
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(searchKeyword.value ? _ctx.$t("admin.customers.no_customers_found") : _ctx.$t("admin.common.noData"))}</p>`);
              if (searchKeyword.value) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "soft",
                  size: "xs",
                  class: "mt-3 rounded-lg",
                  icon: "ph:x",
                  onClick: ($event) => {
                    searchInput.value = "";
                    searchKeyword.value = "";
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("admin.customers.clear_search"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("admin.customers.clear_search")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center justify-center py-16 text-center px-4" }, [
                  createVNode("div", { class: "w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-3" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:users",
                      class: "w-6 h-6"
                    })
                  ]),
                  createVNode("p", { class: "text-sm font-medium text-gray-900 dark:text-white" }, toDisplayString(searchKeyword.value ? _ctx.$t("admin.customers.no_customers_found") : _ctx.$t("admin.common.noData")), 1),
                  searchKeyword.value ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    color: "primary",
                    variant: "soft",
                    size: "xs",
                    class: "mt-3 rounded-lg",
                    icon: "ph:x",
                    onClick: ($event) => {
                      searchInput.value = "";
                      searchKeyword.value = "";
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.customers.clear_search")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`<div class="p-3.5 border-t border-gray-200/70 dark:border-gray-800/60 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0 bg-white dark:bg-[#121214] rounded-b-2xl"><div class="text-xs text-gray-500 dark:text-gray-400 font-mono">${ssrInterpolate(_ctx.$t("admin.common.showing"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(activeTab.value === "users" ? usersTotalItems.value > 0 ? Math.min(usersTotalItems.value, (unref(usersPage) - 1) * unref(usersPageCount) + 1) : 0 : totalItems.value > 0 ? Math.min(totalItems.value, (unref(page) - 1) * unref(pageCount) + 1) : 0)}</span> ${ssrInterpolate(_ctx.$t("admin.common.to"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(activeTab.value === "users" ? Math.min(unref(usersPage) * unref(usersPageCount), usersTotalItems.value) : Math.min(unref(page) * unref(pageCount), totalItems.value))}</span> ${ssrInterpolate(_ctx.$t("admin.common.of"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(activeTab.value === "users" ? usersTotalItems.value : totalItems.value)}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
      if (activeTab.value === "users") {
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: unref(usersPage),
          "onUpdate:modelValue": ($event) => isRef(usersPage) ? usersPage.value = $event : null,
          total: usersTotalItems.value,
          "items-per-page": unref(usersPageCount),
          max: 5,
          "onUpdate:page": (val) => unref(onUsersPageChange)(val, () => unref(usersRefresh)())
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UPagination, {
          modelValue: unref(page),
          "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
          total: totalItems.value,
          "items-per-page": unref(pageCount),
          max: 5,
          "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
        }, null, _parent));
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isModalOpen.value,
        "onUpdate:open": ($event) => isModalOpen.value = $event,
        title: form.id ? _ctx.$t("admin.users.edit") : _ctx.$t("admin.users.add")
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="space-y-4 p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.users.username"),
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.username,
                    "onUpdate:modelValue": ($event) => form.username = $event,
                    disabled: !!form.id,
                    required: "",
                    class: "w-full",
                    placeholder: "user@example.com"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.username,
                      "onUpdate:modelValue": ($event) => form.username = $event,
                      disabled: !!form.id,
                      required: "",
                      class: "w-full",
                      placeholder: "user@example.com"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.users.password"),
              required: !form.id,
              hint: form.id ? _ctx.$t("admin.users.passwordHint") : ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.password,
                    "onUpdate:modelValue": ($event) => form.password = $event,
                    type: "password",
                    required: !form.id,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.password,
                      "onUpdate:modelValue": ($event) => form.password = $event,
                      type: "password",
                      required: !form.id,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "required"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.users.role"),
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: form.role,
                    "onUpdate:modelValue": ($event) => form.role = $event,
                    items: roles,
                    required: "",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: form.role,
                      "onUpdate:modelValue": ($event) => form.role = $event,
                      items: roles,
                      required: "",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end gap-2 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => isModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.users.cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.users.cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              color: "primary",
              loading: isSaving.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.users.save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.users.save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(saveUser, ["prevent"]),
                class: "space-y-4 p-4"
              }, [
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.users.username"),
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.username,
                      "onUpdate:modelValue": ($event) => form.username = $event,
                      disabled: !!form.id,
                      required: "",
                      class: "w-full",
                      placeholder: "user@example.com"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.users.password"),
                  required: !form.id,
                  hint: form.id ? _ctx.$t("admin.users.passwordHint") : ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.password,
                      "onUpdate:modelValue": ($event) => form.password = $event,
                      type: "password",
                      required: !form.id,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "required"])
                  ]),
                  _: 1
                }, 8, ["label", "required", "hint"]),
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.users.role"),
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USelect, {
                      modelValue: form.role,
                      "onUpdate:modelValue": ($event) => form.role = $event,
                      items: roles,
                      required: "",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode("div", { class: "flex justify-end gap-2 pt-4" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => isModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.users.cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    type: "submit",
                    color: "primary",
                    loading: isSaving.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.users.save")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AdminCustomerDetailModal, {
        modelValue: isCustomerDetailOpen.value,
        "onUpdate:modelValue": ($event) => isCustomerDetailOpen.value = $event,
        email: customerDetailEmail.value,
        "visitor-id": customerDetailVisitorId.value,
        onViewUser: handleViewRegisteredUser
      }, null, _parent));
      _push(ssrRenderComponent(AdminUserDetailModal, {
        modelValue: isUserDetailOpen.value,
        "onUpdate:modelValue": ($event) => isUserDetailOpen.value = $event,
        "user-id": userDetailId.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/customers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
