import { r as useRouter, y as useFetch, d as _sfc_main$T, P as _export_sfc, u as useI18n, F as useCurrencyFormat, O as __nuxt_component_3$3, j as _sfc_main$Y, l as useFormatTime, _ as _sfc_main$O } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, withModifiers, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
import 'node:fs/promises';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "KpiCardsGrid",
  __ssrInlineRender: true,
  props: {
    stats: {},
    actionItems: {},
    selectedRange: {},
    isCommerceActive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const router = useRouter();
    const { formatCurrencyAmount, formatCurrencyTotals } = useCurrencyFormat();
    const performanceCardTitle = computed(() => {
      if (props.selectedRange === "7d") return t("admin.dashboard.performance7d", "\u8FD1 7 \u5929\u7ECF\u8425\u4E1A\u7EE9");
      if (props.selectedRange === "30d") return t("admin.dashboard.performance30d", "\u8FD1 30 \u5929\u7ECF\u8425\u4E1A\u7EE9");
      return t("admin.dashboard.todayPerformance", "\u4ECA\u65E5\u7ECF\u8425\u4E1A\u7EE9");
    });
    const trafficCardTitle = computed(() => {
      if (props.selectedRange === "7d") return t("admin.dashboard.traffic7d", "\u8FD1 7 \u5929\u8BBF\u5BA2\u4E0E\u8F6C\u5316");
      if (props.selectedRange === "30d") return t("admin.dashboard.traffic30d", "\u8FD1 30 \u5929\u8BBF\u5BA2\u4E0E\u8F6C\u5316");
      return t("admin.dashboard.todayTraffic", "\u4ECA\u65E5\u8BBF\u5BA2\u4E0E\u8F6C\u5316");
    });
    const ordersBadgeLabel = computed(() => {
      var _a, _b, _c, _d;
      const count = (_d = (_c = (_a = props.stats) == null ? void 0 : _a.todayPaidOrders) != null ? _c : (_b = props.stats) == null ? void 0 : _b.todayOrders) != null ? _d : 0;
      if (props.selectedRange === "7d") return `${count} \u7B14\u8BA2\u5355 (7\u5929)`;
      if (props.selectedRange === "30d") return `${count} \u7B14\u8BA2\u5355 (30\u5929)`;
      return `${count} \u7B14\u8BA2\u5355`;
    });
    const systemHealthAlertCount = computed(() => {
      const ai = props.actionItems;
      return ((ai == null ? void 0 : ai.failedEmails24h) || 0) + ((ai == null ? void 0 : ai.errorLogs24h) || 0) + ((ai == null ? void 0 : ai.paymentFailures24h) || 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$Y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: "bg-white dark:bg-[#121214] p-4.5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs hover:border-emerald-500/40 transition group flex flex-col justify-between cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex justify-between items-start mb-2"${_scopeId}><span class="text-gray-500 dark:text-gray-400 text-xs font-medium"${_scopeId}>${ssrInterpolate(performanceCardTitle.value)}</span><div class="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:currency-dollar-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(unref(formatCurrencyTotals)((_a = __props.stats) == null ? void 0 : _a.todayRevenueByCurrency, (_b = __props.stats) == null ? void 0 : _b.currency))}</div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap"${_scopeId}><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:shopping-cart-bold",
              class: "w-3 h-3 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(ordersBadgeLabel.value)}</span><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:trend-up-bold",
              class: "w-3 h-3 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(` \u5BA2\u5355\u4EF7 ${ssrInterpolate(unref(formatCurrencyAmount)(((_c = __props.stats) == null ? void 0 : _c.todayAov) || 0, (_d = __props.stats) == null ? void 0 : _d.currency))}</span></div></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-gray-400 flex justify-between items-center"${_scopeId}><span class="truncate"${_scopeId}>\u7D2F\u8BA1\u5B9E\u6536: ${ssrInterpolate(unref(formatCurrencyTotals)((_e = __props.stats) == null ? void 0 : _e.totalRevenueByCurrency, (_f = __props.stats) == null ? void 0 : _f.currency))}</span><span class="shrink-0 text-emerald-600 dark:text-emerald-400 group-hover:underline font-mono"${_scopeId}>${ssrInterpolate((((_g = __props.stats) == null ? void 0 : _g.totalOrders) || 0).toLocaleString())} \u7B14 \u2192</span></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex justify-between items-start mb-2" }, [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs font-medium" }, toDisplayString(performanceCardTitle.value), 1),
                  createVNode("div", { class: "p-2 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:currency-dollar-bold",
                      class: "w-4 h-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight" }, toDisplayString(unref(formatCurrencyTotals)((_h = __props.stats) == null ? void 0 : _h.todayRevenueByCurrency, (_i = __props.stats) == null ? void 0 : _i.currency)), 1),
                createVNode("div", { class: "mt-2.5 flex items-center gap-1.5 flex-wrap" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:shopping-cart-bold",
                      class: "w-3 h-3 text-blue-500"
                    }),
                    createTextVNode(" " + toDisplayString(ordersBadgeLabel.value), 1)
                  ]),
                  createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:trend-up-bold",
                      class: "w-3 h-3 text-emerald-500"
                    }),
                    createTextVNode(" \u5BA2\u5355\u4EF7 " + toDisplayString(unref(formatCurrencyAmount)(((_j = __props.stats) == null ? void 0 : _j.todayAov) || 0, (_k = __props.stats) == null ? void 0 : _k.currency)), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-gray-400 flex justify-between items-center" }, [
                createVNode("span", { class: "truncate" }, "\u7D2F\u8BA1\u5B9E\u6536: " + toDisplayString(unref(formatCurrencyTotals)((_l = __props.stats) == null ? void 0 : _l.totalRevenueByCurrency, (_m = __props.stats) == null ? void 0 : _m.currency)), 1),
                createVNode("span", { class: "shrink-0 text-emerald-600 dark:text-emerald-400 group-hover:underline font-mono" }, toDisplayString((((_n = __props.stats) == null ? void 0 : _n.totalOrders) || 0).toLocaleString()) + " \u7B14 \u2192", 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/stats/visitors?preset=${__props.selectedRange}`,
        class: "bg-white dark:bg-[#121214] p-4.5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs hover:border-cyan-500/40 transition group flex flex-col justify-between cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex justify-between items-start mb-2"${_scopeId}><span class="text-gray-500 dark:text-gray-400 text-xs font-medium"${_scopeId}>${ssrInterpolate(trafficCardTitle.value)}</span><div class="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:users-three-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1.5"${_scopeId}>${ssrInterpolate((((_a = __props.stats) == null ? void 0 : _a.todayVisitors) || 0).toLocaleString())} <span class="text-xs font-normal text-gray-400"${_scopeId}>UV \u72EC\u7ACB\u8BBF\u5BA2</span></div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap"${_scopeId}><span role="link" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-indigo-500/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:globe-hemisphere-west-bold",
              class: "w-3 h-3 text-indigo-500"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate((((_b = __props.stats) == null ? void 0 : _b.todayIps) || 0).toLocaleString())} IP </span><span role="link" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan-500/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:eye-bold",
              class: "w-3 h-3 text-cyan-500"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate((((_c = __props.stats) == null ? void 0 : _c.todayPageViews) || 0).toLocaleString())} PV </span>`);
            if (__props.isCommerceActive) {
              _push2(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-purple-500/10 text-[11px] font-semibold text-purple-600 dark:text-purple-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:funnel-bold",
                class: "w-3 h-3 text-purple-500"
              }, null, _parent2, _scopeId));
              _push2(` \u8F6C\u5316 ${ssrInterpolate(((_d = __props.stats) == null ? void 0 : _d.todayConversionRate) || 0)}% </span>`);
            } else {
              _push2(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-cyan-500/10 text-[11px] font-medium text-cyan-600 dark:text-cyan-400"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:compass-bold",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
              _push2(` \u5916\u94FE\u5F15\u6D41 ${ssrInterpolate((((_e = __props.stats) == null ? void 0 : _e.periodExternalVisitors) || 0).toLocaleString())}</span>`);
            }
            _push2(`</div></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-cyan-600 dark:text-cyan-400 flex items-center justify-between"${_scopeId}><span class="group-hover:underline"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.stats.uniqueVisitors", "\u72EC\u7ACB\u8BBF\u5BA2\u660E\u7EC6"))} \u2192</span><span role="link" class="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:underline"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.dashboard.viewTrafficStats", "\u7EDF\u8BA1\u6982\u89C8"))}</span></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex justify-between items-start mb-2" }, [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs font-medium" }, toDisplayString(trafficCardTitle.value), 1),
                  createVNode("div", { class: "p-2 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:users-three-bold",
                      class: "w-4 h-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1.5" }, [
                  createTextVNode(toDisplayString((((_f = __props.stats) == null ? void 0 : _f.todayVisitors) || 0).toLocaleString()) + " ", 1),
                  createVNode("span", { class: "text-xs font-normal text-gray-400" }, "UV \u72EC\u7ACB\u8BBF\u5BA2")
                ]),
                createVNode("div", { class: "mt-2.5 flex items-center gap-1.5 flex-wrap" }, [
                  createVNode("span", {
                    role: "link",
                    class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-indigo-500/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors",
                    onClick: withModifiers(($event) => unref(router).push(`/admin/stats/visitors?preset=${__props.selectedRange}&tab=ips`), ["stop", "prevent"])
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:globe-hemisphere-west-bold",
                      class: "w-3 h-3 text-indigo-500"
                    }),
                    createTextVNode(" " + toDisplayString((((_g = __props.stats) == null ? void 0 : _g.todayIps) || 0).toLocaleString()) + " IP ", 1)
                  ], 8, ["onClick"]),
                  createVNode("span", {
                    role: "link",
                    class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-cyan-500/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
                    onClick: withModifiers(($event) => unref(router).push(`/admin/stats/visitors?preset=${__props.selectedRange}&tab=pageVisits`), ["stop", "prevent"])
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:eye-bold",
                      class: "w-3 h-3 text-cyan-500"
                    }),
                    createTextVNode(" " + toDisplayString((((_h = __props.stats) == null ? void 0 : _h.todayPageViews) || 0).toLocaleString()) + " PV ", 1)
                  ], 8, ["onClick"]),
                  __props.isCommerceActive ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-purple-500/10 text-[11px] font-semibold text-purple-600 dark:text-purple-400"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:funnel-bold",
                      class: "w-3 h-3 text-purple-500"
                    }),
                    createTextVNode(" \u8F6C\u5316 " + toDisplayString(((_i = __props.stats) == null ? void 0 : _i.todayConversionRate) || 0) + "% ", 1)
                  ])) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-cyan-500/10 text-[11px] font-medium text-cyan-600 dark:text-cyan-400"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:compass-bold",
                      class: "w-3 h-3"
                    }),
                    createTextVNode(" \u5916\u94FE\u5F15\u6D41 " + toDisplayString((((_j = __props.stats) == null ? void 0 : _j.periodExternalVisitors) || 0).toLocaleString()), 1)
                  ]))
                ])
              ]),
              createVNode("div", { class: "mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-cyan-600 dark:text-cyan-400 flex items-center justify-between" }, [
                createVNode("span", { class: "group-hover:underline" }, toDisplayString(_ctx.$t("admin.stats.uniqueVisitors", "\u72EC\u7ACB\u8BBF\u5BA2\u660E\u7EC6")) + " \u2192", 1),
                createVNode("span", {
                  role: "link",
                  class: "text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:underline",
                  onClick: withModifiers(($event) => unref(router).push(`/admin/stats?preset=${__props.selectedRange}`), ["stop", "prevent"])
                }, toDisplayString(_ctx.$t("admin.dashboard.viewTrafficStats", "\u7EDF\u8BA1\u6982\u89C8")), 9, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/customers",
        class: "bg-white dark:bg-[#121214] p-4.5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs hover:border-purple-500/40 transition group flex flex-col justify-between cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex justify-between items-start mb-2"${_scopeId}><span class="text-gray-500 dark:text-gray-400 text-xs font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.dashboard.customerScale", "\u7528\u6237\u589E\u957F\u4E0E\u8D44\u4EA7\u89C4\u6A21"))}</span><div class="p-2 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:users-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-baseline gap-2"${_scopeId}><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1"${_scopeId}>${ssrInterpolate((((_a = __props.stats) == null ? void 0 : _a.totalUsers) || 0).toLocaleString())} <span class="text-xs font-normal text-gray-400"${_scopeId}>\u4F4D\u7528\u6237</span></div><span class="${ssrRenderClass([(((_b = __props.stats) == null ? void 0 : _b.periodNewUsers) || 0) > 0 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-gray-100 dark:bg-white/5 text-gray-400", "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[11px] font-semibold"])}"${_scopeId}> +${ssrInterpolate((((_c = __props.stats) == null ? void 0 : _c.periodNewUsers) || 0).toLocaleString())} \u65B0\u589E </span></div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap"${_scopeId}><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:user-check-bold",
              class: "w-3 h-3 text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(` \u6D3B\u8DC3\u767B\u5F55 ${ssrInterpolate((((_d = __props.stats) == null ? void 0 : _d.periodLoginVisitors) || 0).toLocaleString())}</span>`);
            if ((((_e = __props.stats) == null ? void 0 : _e.activeSubscriptions) || 0) > 0) {
              _push2(`<span role="link" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 transition-colors"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:check-circle-fill",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(((_f = __props.stats) == null ? void 0 : _f.activeSubscriptions) || 0)} \u8BA2\u9605\u751F\u6548 </span>`);
            } else {
              _push2(`<span role="link" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-[11px] font-medium text-blue-600 dark:text-blue-400 transition-colors"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:envelope-simple-open-bold",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate((((_g = __props.stats) == null ? void 0 : _g.activeNewsletterSubscribers) || 0).toLocaleString())} \u90AE\u4EF6\u8BA2\u9605 </span>`);
            }
            _push2(`</div></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-purple-600 dark:text-purple-400 flex justify-between items-center"${_scopeId}><span class="group-hover:underline"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.nav.customers", "\u5BA2\u6237\u5217\u8868"))} \u2192</span><span role="link" class="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:underline"${_scopeId}> \u63A8\u5E7F\u88C2\u53D8 ${ssrInterpolate((((_h = __props.stats) == null ? void 0 : _h.totalPromoInvites) || 0).toLocaleString())} \u4EBA \u2192 </span></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex justify-between items-start mb-2" }, [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs font-medium" }, toDisplayString(_ctx.$t("admin.dashboard.customerScale", "\u7528\u6237\u589E\u957F\u4E0E\u8D44\u4EA7\u89C4\u6A21")), 1),
                  createVNode("div", { class: "p-2 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:users-bold",
                      class: "w-4 h-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex items-baseline gap-2" }, [
                  createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1" }, [
                    createTextVNode(toDisplayString((((_i = __props.stats) == null ? void 0 : _i.totalUsers) || 0).toLocaleString()) + " ", 1),
                    createVNode("span", { class: "text-xs font-normal text-gray-400" }, "\u4F4D\u7528\u6237")
                  ]),
                  createVNode("span", {
                    class: ["inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[11px] font-semibold", (((_j = __props.stats) == null ? void 0 : _j.periodNewUsers) || 0) > 0 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-gray-100 dark:bg-white/5 text-gray-400"]
                  }, " +" + toDisplayString((((_k = __props.stats) == null ? void 0 : _k.periodNewUsers) || 0).toLocaleString()) + " \u65B0\u589E ", 3)
                ]),
                createVNode("div", { class: "mt-2.5 flex items-center gap-1.5 flex-wrap" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:user-check-bold",
                      class: "w-3 h-3 text-purple-500"
                    }),
                    createTextVNode(" \u6D3B\u8DC3\u767B\u5F55 " + toDisplayString((((_l = __props.stats) == null ? void 0 : _l.periodLoginVisitors) || 0).toLocaleString()), 1)
                  ]),
                  (((_m = __props.stats) == null ? void 0 : _m.activeSubscriptions) || 0) > 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    role: "link",
                    class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 transition-colors",
                    onClick: withModifiers(($event) => unref(router).push("/admin/products?tab=subscriptions"), ["stop", "prevent"])
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:check-circle-fill",
                      class: "w-3 h-3"
                    }),
                    createTextVNode(" " + toDisplayString(((_n = __props.stats) == null ? void 0 : _n.activeSubscriptions) || 0) + " \u8BA2\u9605\u751F\u6548 ", 1)
                  ], 8, ["onClick"])) : (openBlock(), createBlock("span", {
                    key: 1,
                    role: "link",
                    class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-[11px] font-medium text-blue-600 dark:text-blue-400 transition-colors",
                    onClick: withModifiers(($event) => unref(router).push("/admin/newsletter"), ["stop", "prevent"])
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:envelope-simple-open-bold",
                      class: "w-3 h-3"
                    }),
                    createTextVNode(" " + toDisplayString((((_o = __props.stats) == null ? void 0 : _o.activeNewsletterSubscribers) || 0).toLocaleString()) + " \u90AE\u4EF6\u8BA2\u9605 ", 1)
                  ], 8, ["onClick"]))
                ])
              ]),
              createVNode("div", { class: "mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-purple-600 dark:text-purple-400 flex justify-between items-center" }, [
                createVNode("span", { class: "group-hover:underline" }, toDisplayString(_ctx.$t("admin.nav.customers", "\u5BA2\u6237\u5217\u8868")) + " \u2192", 1),
                createVNode("span", {
                  role: "link",
                  class: "text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:underline",
                  onClick: withModifiers(($event) => unref(router).push("/admin/promo"), ["stop", "prevent"])
                }, " \u63A8\u5E7F\u88C2\u53D8 " + toDisplayString((((_p = __props.stats) == null ? void 0 : _p.totalPromoInvites) || 0).toLocaleString()) + " \u4EBA \u2192 ", 9, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products",
        class: "bg-white dark:bg-[#121214] p-4.5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs hover:border-amber-500/40 transition group flex flex-col justify-between cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex justify-between items-start mb-2"${_scopeId}><span class="text-gray-500 dark:text-gray-400 text-xs font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.dashboard.productHealth", "\u5728\u552E\u5546\u54C1\u4E0E\u7CFB\u7EDF\u5065\u5EB7"))}</span><div class="p-2 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:package-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1.5"${_scopeId}>${ssrInterpolate(((_a = __props.stats) == null ? void 0 : _a.activeProducts) || 0)} <span class="text-xs font-normal text-gray-400"${_scopeId}>\u6B3E\u5728\u552E\u5546\u54C1</span></div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap"${_scopeId}><span role="link" class="${ssrRenderClass([((_b = __props.actionItems) == null ? void 0 : _b.lowStockCards) ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold" : "bg-gray-100 dark:bg-white/5 hover:bg-gray-200/70 dark:hover:bg-white/10 text-gray-500", "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium transition-colors"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: ((_c = __props.actionItems) == null ? void 0 : _c.lowStockCards) ? "ph:warning-bold" : "ph:check-bold",
              class: "w-3 h-3"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(((_d = __props.actionItems) == null ? void 0 : _d.lowStockCards) ? `${__props.actionItems.lowStockCards} \u6B3E\u5361\u5BC6\u5E93\u5B58\u504F\u4F4E` : "\u5361\u5BC6\u5E93\u5B58\u5145\u8DB3")}</span><span role="link" class="${ssrRenderClass([systemHealthAlertCount.value > 0 ? "bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 font-semibold" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400", "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium transition-colors"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: systemHealthAlertCount.value > 0 ? "ph:warning-circle-bold" : "ph:shield-check-bold",
              class: "w-3 h-3"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(systemHealthAlertCount.value > 0 ? `24h \u5F02\u5E38 ${systemHealthAlertCount.value}` : "\u7CFB\u7EDF\u8FD0\u884C\u6B63\u5E38")}</span></div></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-amber-600 dark:text-amber-400 flex justify-between items-center"${_scopeId}><span class="group-hover:underline"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.nav.products", "\u5546\u54C1\u5217\u8868"))} \u2192</span><span role="link" class="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:underline"${_scopeId}> \u7CFB\u7EDF\u65E5\u5FD7 \u2192 </span></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex justify-between items-start mb-2" }, [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs font-medium" }, toDisplayString(_ctx.$t("admin.dashboard.productHealth", "\u5728\u552E\u5546\u54C1\u4E0E\u7CFB\u7EDF\u5065\u5EB7")), 1),
                  createVNode("div", { class: "p-2 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:package-bold",
                      class: "w-4 h-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1.5" }, [
                  createTextVNode(toDisplayString(((_e = __props.stats) == null ? void 0 : _e.activeProducts) || 0) + " ", 1),
                  createVNode("span", { class: "text-xs font-normal text-gray-400" }, "\u6B3E\u5728\u552E\u5546\u54C1")
                ]),
                createVNode("div", { class: "mt-2.5 flex items-center gap-1.5 flex-wrap" }, [
                  createVNode("span", {
                    role: "link",
                    class: ["inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium transition-colors", ((_f = __props.actionItems) == null ? void 0 : _f.lowStockCards) ? "bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold" : "bg-gray-100 dark:bg-white/5 hover:bg-gray-200/70 dark:hover:bg-white/10 text-gray-500"],
                    onClick: withModifiers(($event) => unref(router).push("/admin/products?tab=cards"), ["stop", "prevent"])
                  }, [
                    createVNode(_component_UIcon, {
                      name: ((_g = __props.actionItems) == null ? void 0 : _g.lowStockCards) ? "ph:warning-bold" : "ph:check-bold",
                      class: "w-3 h-3"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(((_h = __props.actionItems) == null ? void 0 : _h.lowStockCards) ? `${__props.actionItems.lowStockCards} \u6B3E\u5361\u5BC6\u5E93\u5B58\u504F\u4F4E` : "\u5361\u5BC6\u5E93\u5B58\u5145\u8DB3"), 1)
                  ], 10, ["onClick"]),
                  createVNode("span", {
                    role: "link",
                    class: ["inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium transition-colors", systemHealthAlertCount.value > 0 ? "bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 font-semibold" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"],
                    onClick: withModifiers(($event) => unref(router).push("/admin/logs"), ["stop", "prevent"])
                  }, [
                    createVNode(_component_UIcon, {
                      name: systemHealthAlertCount.value > 0 ? "ph:warning-circle-bold" : "ph:shield-check-bold",
                      class: "w-3 h-3"
                    }, null, 8, ["name"]),
                    createTextVNode(" " + toDisplayString(systemHealthAlertCount.value > 0 ? `24h \u5F02\u5E38 ${systemHealthAlertCount.value}` : "\u7CFB\u7EDF\u8FD0\u884C\u6B63\u5E38"), 1)
                  ], 10, ["onClick"])
                ])
              ]),
              createVNode("div", { class: "mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-amber-600 dark:text-amber-400 flex justify-between items-center" }, [
                createVNode("span", { class: "group-hover:underline" }, toDisplayString(_ctx.$t("admin.nav.products", "\u5546\u54C1\u5217\u8868")) + " \u2192", 1),
                createVNode("span", {
                  role: "link",
                  class: "text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 hover:underline",
                  onClick: withModifiers(($event) => unref(router).push("/admin/logs"), ["stop", "prevent"])
                }, " \u7CFB\u7EDF\u65E5\u5FD7 \u2192 ", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/dashboard/KpiCardsGrid.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DashboardKpiCardsGrid = Object.assign(_sfc_main$4, { __name: "AdminDashboardKpiCardsGrid" });
const DASHBOARD_RANGE_OPTIONS = [
  { label: "\u4ECA\u65E5 24h", value: "today" },
  { label: "\u8FD1 7 \u5929", value: "7d" },
  { label: "\u8FD1 30 \u5929", value: "30d" }
];
const CHART_TOP = 8;
const CHART_HEIGHT = 38;
const buildSmoothLinePath = (points) => {
  if (!points.length) return "";
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cpX = p0.x + (p1.x - p0.x) / 2;
    path += ` C ${cpX} ${p0.y}, ${cpX} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return path;
};
const buildDashboardSvgData = (chart, mode) => {
  var _a;
  if (!((_a = chart == null ? void 0 : chart.labels) == null ? void 0 : _a.length)) return null;
  const primarySeries = mode === "traffic" ? chart.visitors || [] : chart.revenue || [];
  const secondarySeries = mode === "traffic" ? chart.pageViews || [] : chart.orders || [];
  if (!primarySeries.length) return null;
  const maxPrimary = Math.max(...primarySeries, 5);
  const maxSecondary = Math.max(...secondarySeries, 5);
  const len = primarySeries.length;
  const points = primarySeries.map((val, i) => ({
    x: i / (len - 1) * 100,
    y: CHART_TOP + CHART_HEIGHT - val / maxPrimary * CHART_HEIGHT
  }));
  const secondaryPoints = secondarySeries.map((val, i) => ({
    x: i / (len - 1) * 100,
    y: CHART_TOP + CHART_HEIGHT - val / maxSecondary * CHART_HEIGHT
  }));
  const linePath = buildSmoothLinePath(points);
  const secondaryLinePath = secondaryPoints.length ? buildSmoothLinePath(secondaryPoints) : "";
  const areaPath = `${linePath} L 100 50 L 0 50 Z`;
  return { points, linePath, secondaryLinePath, areaPath };
};
const shouldShowDashboardXLabel = (index, total) => {
  if (total <= 12) return true;
  if (total <= 24) return index % 3 === 0 || index === total - 1;
  return index % 5 === 0 || index === total - 1;
};
const getDashboardSourceTypeLabel = (type) => {
  const labels = {
    direct: "\u76F4\u8FBE",
    search: "\u641C\u7D22",
    ai: "AI",
    social: "\u793E\u4EA4",
    referral: "\u5916\u94FE",
    campaign: "\u6D3B\u52A8",
    affiliate: "\u5206\u9500"
  };
  return labels[type || "direct"] || type || "\u76F4\u8FBE";
};
const getDashboardDeviceLabel = (device) => {
  if (device === "mobile") return "\u624B\u673A";
  if (device === "tablet") return "\u5E73\u677F";
  return "\u684C\u9762";
};
const sourceMetaMap = {
  direct: { name: "\u76F4\u63A5\u8BBF\u95EE (Direct)", icon: "ph:compass-bold", iconClass: "text-slate-500", barClass: "bg-slate-500" },
  search: { name: "\u641C\u7D22\u5F15\u64CE (SEO)", icon: "ph:magnifying-glass-bold", iconClass: "text-blue-500", barClass: "bg-blue-500" },
  ai: { name: "AI \u641C\u7D22/\u52A9\u624B", icon: "ph:sparkle-bold", iconClass: "text-purple-500", barClass: "bg-purple-500" },
  social: { name: "\u793E\u4EA4\u5A92\u4F53 (Social)", icon: "ph:share-network-bold", iconClass: "text-pink-500", barClass: "bg-pink-500" },
  referral: { name: "\u5916\u94FE\u5F15\u6D41 (Referral)", icon: "ph:link-bold", iconClass: "text-cyan-500", barClass: "bg-cyan-500" },
  campaign: { name: "\u63A8\u5E7F\u6D3B\u52A8 (UTM)", icon: "ph:megaphone-simple-bold", iconClass: "text-amber-500", barClass: "bg-amber-500" },
  affiliate: { name: "\u63A8\u5E7F\u5206\u9500 (Promo)", icon: "ph:users-four-bold", iconClass: "text-emerald-500", barClass: "bg-emerald-500" }
};
const buildDashboardTrafficSources = (trafficInsights) => {
  const raw = (trafficInsights == null ? void 0 : trafficInsights.sources) || [];
  const fallback = ["direct", "search", "ai", "social", "referral"];
  const list = raw.length ? raw.slice(0, 5) : fallback.map((type) => ({ type, count: 0, percentage: 0 }));
  return list.map((item) => {
    const meta = sourceMetaMap[item.type] || {
      name: item.type,
      icon: "ph:globe-bold",
      iconClass: "text-gray-500",
      barClass: "bg-gray-500"
    };
    return {
      ...item,
      ...meta
    };
  });
};
const buildDashboardDevices = (trafficInsights) => {
  const raw = (trafficInsights == null ? void 0 : trafficInsights.devices) || [];
  return raw.slice(0, 2).map((d) => ({
    ...d,
    label: getDashboardDeviceLabel(d.deviceType),
    icon: d.deviceType === "mobile" ? "ph:device-mobile-bold" : "ph:desktop-bold"
  }));
};
const buildDashboardProductMix = (categoryMix) => {
  const mix = categoryMix || [];
  const totalAmount = mix.reduce((sum, item) => sum + (item.amount || 0), 0) || 1;
  const metaMap = {
    standard: { name: "\u5B9E\u7269/\u6570\u5B57\u5546\u54C1", icon: "ph:package-bold", iconClass: "text-blue-500", barClass: "bg-blue-500" },
    key: { name: "\u5361\u5BC6\u5E93\u5B58", icon: "ph:barcode-bold", iconClass: "text-purple-500", barClass: "bg-purple-500" },
    subscription: { name: "\u8BA2\u9605\u670D\u52A1", icon: "ph:calendar-check-bold", iconClass: "text-emerald-500", barClass: "bg-emerald-500" },
    topup: { name: "\u94B1\u5305\u5145\u503C", icon: "ph:wallet-bold", iconClass: "text-amber-500", barClass: "bg-amber-500" }
  };
  return mix.map((item) => {
    const meta = metaMap[item.type] || metaMap.standard;
    const percentage = Math.min(100, Math.round((item.amount || 0) / totalAmount * 100));
    return {
      ...item,
      ...meta,
      percentage
    };
  });
};
const buildDashboardActionCards = (actionItems, pendingTicketsTitle = "\u5F85\u56DE\u590D\u5BA2\u670D\u5DE5\u5355") => {
  const ai = actionItems || {};
  const cards = [
    {
      key: "tickets",
      title: pendingTicketsTitle,
      desc: "\u4E70\u5BB6\u54A8\u8BE2\u4E0E\u552E\u540E\u6C42\u52A9",
      count: ai.pendingTickets || 0,
      to: "/admin/tickets",
      icon: "ph:ticket-bold",
      iconBgClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      activeClass: "border-blue-500/40 bg-blue-50/40 dark:bg-blue-950/20 hover:border-blue-500",
      countActiveClass: "text-blue-600 dark:text-blue-400"
    },
    {
      key: "comments",
      title: "\u5F85\u5BA1\u6838\u7528\u6237\u8BC4\u8BBA",
      desc: "\u535A\u5BA2\u4E0E\u9875\u9762\u65B0\u589E\u5F85\u5BA1\u8BC4\u8BBA",
      count: ai.pendingComments || 0,
      to: "/admin/comments",
      icon: "ph:chat-circle-dots-bold",
      iconBgClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
      activeClass: "border-indigo-500/40 bg-indigo-50/40 dark:bg-indigo-950/20 hover:border-indigo-500",
      countActiveClass: "text-indigo-600 dark:text-indigo-400"
    },
    {
      key: "emails",
      title: "24h \u90AE\u4EF6\u53D1\u9001\u5931\u8D25",
      desc: "\u9A8C\u8BC1\u7801\u6216\u901A\u77E5\u6295\u9012\u5F02\u5E38",
      count: ai.failedEmails24h || 0,
      to: "/admin/settings",
      icon: "ph:envelope-simple-bold",
      iconBgClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
      activeClass: "border-rose-500/40 bg-rose-50/40 dark:bg-rose-950/20 hover:border-rose-500",
      countActiveClass: "text-rose-600 dark:text-rose-400"
    },
    {
      key: "logs",
      title: "24h \u7CFB\u7EDF\u5F02\u5E38\u65E5\u5FD7",
      desc: "\u670D\u52A1\u7AEF error \u7EA7\u522B\u544A\u8B66",
      count: ai.errorLogs24h || 0,
      to: "/admin/logs",
      icon: "ph:bug-beetle-bold",
      iconBgClass: "bg-red-500/10 text-red-600 dark:text-red-400",
      activeClass: "border-red-500/40 bg-red-50/40 dark:bg-red-950/20 hover:border-red-500",
      countActiveClass: "text-red-600 dark:text-red-400"
    },
    {
      key: "fulfillments",
      title: "\u5F85\u5C65\u7EA6\u53D1\u8D27\u8BA2\u5355",
      desc: "\u5DF2\u4ED8\u6B3E\u5F85\u4EBA\u5DE5\u5904\u7406\u8BA2\u5355",
      count: ai.pendingFulfillments || 0,
      to: "/admin/orders",
      icon: "ph:truck-bold",
      iconBgClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      activeClass: "border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20 hover:border-amber-500",
      countActiveClass: "text-amber-600 dark:text-amber-400"
    },
    {
      key: "commerceHealth",
      title: (ai.pendingTopups || 0) > 0 ? "\u5145\u503C\u5F85\u8865\u5355/\u5F85\u5BA1" : "\u5361\u5BC6\u4F4E\u5E93\u5B58\u9884\u8B66",
      desc: (ai.pendingTopups || 0) > 0 ? "\u9700\u4EBA\u5DE5\u91CD\u8BD5\u6216\u6838\u5BF9\u6D41\u6C34" : "\u53EF\u7528\u5E93\u5B58 \u2264 3 \u6761\u7684\u5546\u54C1",
      count: (ai.lowStockCards || 0) + (ai.pendingTopups || 0),
      to: (ai.pendingTopups || 0) > 0 ? "/admin/orders?tab=topups" : "/admin/products?tab=cards",
      icon: "ph:warning-bold",
      iconBgClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      activeClass: "border-purple-500/40 bg-purple-50/40 dark:bg-purple-950/20 hover:border-purple-500",
      countActiveClass: "text-purple-600 dark:text-purple-400"
    }
  ];
  return cards.sort((a, b) => (b.count > 0 ? 1 : 0) - (a.count > 0 ? 1 : 0));
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrendChartCard",
  __ssrInlineRender: true,
  props: {
    chart: {},
    trafficInsights: {},
    selectedRangeLabel: {},
    hasPeriodCommerceActivity: { type: Boolean },
    pending: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { formatCurrencyAmount } = useCurrencyFormat();
    const hoveredIndex = ref(null);
    const userChartMode = ref(null);
    const effectiveChartMode = computed(() => {
      if (userChartMode.value) return userChartMode.value;
      return props.hasPeriodCommerceActivity ? "revenue" : "traffic";
    });
    const svgData = computed(() => buildDashboardSvgData(props.chart, effectiveChartMode.value));
    const topCountriesDisplay = computed(() => {
      var _a;
      return (((_a = props.trafficInsights) == null ? void 0 : _a.topCountries) || []).slice(0, 3);
    });
    const devicesDisplay = computed(() => buildDashboardDevices(props.trafficInsights));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const _component_UIcon = _sfc_main$Y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs flex flex-col justify-between" }, _attrs))} data-v-9842279b><div data-v-9842279b><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4" data-v-9842279b><div data-v-9842279b><div class="flex items-center gap-2" data-v-9842279b><h2 class="text-base font-bold text-gray-900 dark:text-white" data-v-9842279b>${ssrInterpolate(effectiveChartMode.value === "traffic" ? "\u6D41\u91CF\u4E0E\u8BBF\u95EE\u8D8B\u52BF" : _ctx.$t("admin.dashboard.revenueOverview", "\u6536\u5165\u6982\u89C8"))}</h2>`);
      if (userChartMode.value === null && !__props.hasPeriodCommerceActivity) {
        _push(`<span class="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-medium" data-v-9842279b> \u5DF2\u81EA\u52A8\u5207\u6362\u6D41\u91CF\u89C6\u56FE </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-xs text-gray-400 mt-0.5" data-v-9842279b>${ssrInterpolate(effectiveChartMode.value === "traffic" ? `${__props.selectedRangeLabel}\u72EC\u7ACB\u8BBF\u5BA2 (UV) \u4E0E\u9875\u9762\u6D4F\u89C8 (PV) \u6CE2\u52A8` : `${__props.selectedRangeLabel}\u4EA4\u6613\u6CE2\u52A8\u4E0E\u6536\u76CA\u66F2\u7EBF`)}</p></div><div class="flex items-center gap-3 flex-wrap" data-v-9842279b>`);
      if (effectiveChartMode.value === "traffic") {
        _push(`<div class="flex items-center gap-3 text-xs" data-v-9842279b><div class="flex items-center gap-1.5" data-v-9842279b><div class="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" data-v-9842279b></div><span class="text-gray-500 dark:text-gray-400" data-v-9842279b>\u72EC\u7ACB\u8BBF\u5BA2 UV</span></div><div class="flex items-center gap-1.5" data-v-9842279b><div class="w-2.5 h-0.5 bg-indigo-500" data-v-9842279b></div><span class="text-gray-500 dark:text-gray-400" data-v-9842279b>\u6D4F\u89C8\u91CF PV</span></div></div>`);
      } else {
        _push(`<div class="flex items-center gap-3 text-xs" data-v-9842279b><div class="flex items-center gap-1.5" data-v-9842279b><div class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" data-v-9842279b></div><span class="text-gray-500 dark:text-gray-400" data-v-9842279b>\u8425\u6536 (${ssrInterpolate(((_a = __props.chart) == null ? void 0 : _a.currency) || "USD")})</span></div><div class="flex items-center gap-1.5" data-v-9842279b><div class="w-2.5 h-0.5 bg-purple-500" data-v-9842279b></div><span class="text-gray-500 dark:text-gray-400" data-v-9842279b>\u8BA2\u5355\u6570</span></div></div>`);
      }
      _push(`<div class="flex items-center bg-gray-100 dark:bg-white/5 p-0.5 rounded-lg" data-v-9842279b><button type="button" class="${ssrRenderClass([effectiveChartMode.value === "traffic" ? "bg-white dark:bg-[#1a1a1e] text-cyan-600 dark:text-cyan-400 shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer flex items-center gap-1"])}" data-v-9842279b>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-three-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(` \u6D41\u91CF UV/PV </button><button type="button" class="${ssrRenderClass([effectiveChartMode.value === "revenue" ? "bg-white dark:bg-[#1a1a1e] text-emerald-600 dark:text-emerald-400 shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer flex items-center gap-1"])}" data-v-9842279b>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:currency-dollar-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(` \u8425\u6536/\u8BA2\u5355 </button></div></div></div><div class="h-[180px] w-full relative group pb-6" data-v-9842279b>`);
      if (svgData.value) {
        _push(`<svg class="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none" data-v-9842279b><defs data-v-9842279b><linearGradient id="dashboard-area-gradient-emerald" x1="0" y1="0" x2="0" y2="1" data-v-9842279b><stop offset="0%" stop-color="#10b981" stop-opacity="0.25" data-v-9842279b></stop><stop offset="100%" stop-color="#10b981" stop-opacity="0" data-v-9842279b></stop></linearGradient><linearGradient id="dashboard-area-gradient-cyan" x1="0" y1="0" x2="0" y2="1" data-v-9842279b><stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25" data-v-9842279b></stop><stop offset="100%" stop-color="#06b6d4" stop-opacity="0" data-v-9842279b></stop></linearGradient></defs><g stroke="#e5e7eb" class="dark:stroke-gray-800" stroke-width="0.1" stroke-dasharray="2 2" data-v-9842279b><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<line x1="0"${ssrRenderAttr("y1", unref(CHART_TOP) + (i - 1) * (unref(CHART_HEIGHT) / 4))} x2="100"${ssrRenderAttr("y2", unref(CHART_TOP) + (i - 1) * (unref(CHART_HEIGHT) / 4))} data-v-9842279b></line>`);
        });
        _push(`<!--]--></g>`);
        if (hoveredIndex.value !== null && ((_b = svgData.value) == null ? void 0 : _b.points[hoveredIndex.value])) {
          _push(`<line${ssrRenderAttr("x1", svgData.value.points[hoveredIndex.value].x)} y1="0"${ssrRenderAttr("x2", svgData.value.points[hoveredIndex.value].x)} y2="50" stroke="#9ca3af" stroke-width="0.3" stroke-dasharray="2 2" vector-effect="non-scaling-stroke" data-v-9842279b></line>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<path${ssrRenderAttr("d", svgData.value.areaPath)}${ssrRenderAttr("fill", effectiveChartMode.value === "traffic" ? "url(#dashboard-area-gradient-cyan)" : "url(#dashboard-area-gradient-emerald)")} class="transition-all duration-500" data-v-9842279b></path>`);
        if (svgData.value.secondaryLinePath) {
          _push(`<path${ssrRenderAttr("d", svgData.value.secondaryLinePath)} fill="none"${ssrRenderAttr("stroke", effectiveChartMode.value === "traffic" ? "#6366f1" : "#a855f7")} stroke-width="1.5" stroke-dasharray="3 3" stroke-linecap="round" stroke-linejoin="round" opacity="0.65" vector-effect="non-scaling-stroke" data-v-9842279b></path>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<path${ssrRenderAttr("d", svgData.value.linePath)} fill="none"${ssrRenderAttr("stroke", effectiveChartMode.value === "traffic" ? "#06b6d4" : "#10b981")} stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" data-v-9842279b></path><!--[-->`);
        ssrRenderList(svgData.value.points, (point, index) => {
          _push(`<g data-v-9842279b><rect${ssrRenderAttr("x", index === 0 ? 0 : point.x - 50 / (svgData.value.points.length - 1))} y="0"${ssrRenderAttr("width", 100 / (svgData.value.points.length - 1))} height="50" fill="transparent" class="cursor-crosshair" data-v-9842279b></rect><circle${ssrRenderAttr("cx", point.x)}${ssrRenderAttr("cy", point.y)}${ssrRenderAttr("r", hoveredIndex.value === index ? 1.2 : 0.55)}${ssrRenderAttr("fill", hoveredIndex.value === index ? "#fff" : effectiveChartMode.value === "traffic" ? "#06b6d4" : "#10b981")}${ssrRenderAttr("stroke", hoveredIndex.value === index ? effectiveChartMode.value === "traffic" ? "#06b6d4" : "#10b981" : "#121214")} stroke-width="0.8" class="transition-all duration-200" vector-effect="non-scaling-stroke" data-v-9842279b></circle></g>`);
        });
        _push(`<!--]--></svg>`);
      } else {
        _push(`<div class="w-full h-full flex flex-col items-center justify-center text-gray-400 text-xs py-8" data-v-9842279b>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chart-line-up",
          class: "w-7 h-7 mb-1.5 opacity-30 text-gray-400"
        }, null, _parent));
        _push(`<span data-v-9842279b>${ssrInterpolate(__props.pending ? "\u6B63\u5728\u52A0\u8F7D\u8D70\u52BF\u6570\u636E..." : "\u6682\u65E0\u8D70\u52BF\u6570\u636E")}</span></div>`);
      }
      if ((_d = (_c = __props.chart) == null ? void 0 : _c.labels) == null ? void 0 : _d.length) {
        _push(`<div class="absolute bottom-0 left-0 w-full flex justify-between pb-1" data-v-9842279b><!--[-->`);
        ssrRenderList(__props.chart.labels, (label, i) => {
          _push(`<span class="text-[10px] font-mono text-gray-400 whitespace-nowrap absolute transform -translate-x-1/2" style="${ssrRenderStyle({ left: `${Number(i) / (__props.chart.labels.length - 1) * 100}%` })}" data-v-9842279b>`);
          if (unref(shouldShowDashboardXLabel)(Number(i), __props.chart.labels.length)) {
            _push(`<!--[-->${ssrInterpolate(label)}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (hoveredIndex.value !== null && __props.chart) {
        _push(`<div class="absolute z-30 bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700/50 rounded-xl p-3 shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2" style="${ssrRenderStyle({
          left: `${Math.min(88, Math.max(12, ((_f = (_e = svgData.value) == null ? void 0 : _e.points[hoveredIndex.value]) == null ? void 0 : _f.x) || 50))}%`,
          top: `${(((_h = (_g = svgData.value) == null ? void 0 : _g.points[hoveredIndex.value]) == null ? void 0 : _h.y) || 25) / 50 * 100}%`
        })}" data-v-9842279b><div class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 border-b border-gray-100 dark:border-gray-800 pb-1" data-v-9842279b>${ssrInterpolate(__props.chart.labels[hoveredIndex.value])}</div>`);
        if (effectiveChartMode.value === "traffic") {
          _push(`<div class="space-y-1 min-w-[130px]" data-v-9842279b><div class="flex items-center justify-between gap-3" data-v-9842279b><span class="text-xs text-gray-500" data-v-9842279b>\u72EC\u7ACB\u8BBF\u5BA2 UV:</span><span class="text-xs font-bold text-cyan-600 dark:text-cyan-400" data-v-9842279b>${ssrInterpolate((_j = (_i = __props.chart.visitors) == null ? void 0 : _i[hoveredIndex.value]) != null ? _j : 0)} \u4EBA </span></div><div class="flex items-center justify-between gap-3" data-v-9842279b><span class="text-xs text-gray-500" data-v-9842279b>\u9875\u9762\u6D4F\u89C8 PV:</span><span class="text-xs font-bold text-indigo-600 dark:text-indigo-400" data-v-9842279b>${ssrInterpolate((_l = (_k = __props.chart.pageViews) == null ? void 0 : _k[hoveredIndex.value]) != null ? _l : 0)} \u6B21 </span></div></div>`);
        } else {
          _push(`<div class="space-y-1 min-w-[130px]" data-v-9842279b><div class="flex items-center justify-between gap-3" data-v-9842279b><span class="text-xs text-gray-500" data-v-9842279b>\u8425\u6536:</span><span class="text-xs font-bold text-emerald-600 dark:text-emerald-400" data-v-9842279b>${ssrInterpolate(unref(formatCurrencyAmount)(((_m = __props.chart.revenue) == null ? void 0 : _m[hoveredIndex.value]) || 0, __props.chart.currency))}</span></div><div class="flex items-center justify-between gap-3" data-v-9842279b><span class="text-xs text-gray-500" data-v-9842279b>\u8BA2\u5355\u6570:</span><span class="text-xs font-bold text-purple-600 dark:text-purple-400" data-v-9842279b>${ssrInterpolate(((_n = __props.chart.orders) == null ? void 0 : _n[hoveredIndex.value]) || 0)} \u7B14 </span></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap items-center justify-between gap-2 text-xs" data-v-9842279b><div class="flex items-center gap-3 flex-wrap" data-v-9842279b><span class="text-gray-400" data-v-9842279b> \u4E3B\u8981\u5730\u533A: `);
      if (topCountriesDisplay.value.length) {
        _push(`<!--[-->`);
        ssrRenderList(topCountriesDisplay.value, (c) => {
          _push(`<span class="inline-flex items-center gap-1 ml-1 text-gray-700 dark:text-gray-300 font-medium" data-v-9842279b>${ssrInterpolate(c.country)} <span class="text-gray-400 font-mono" data-v-9842279b>(${ssrInterpolate(c.percentage)}%)</span></span>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<span class="text-gray-400 ml-1" data-v-9842279b>\u6682\u65E0\u6570\u636E</span>`);
      }
      _push(`</span></div><div class="flex items-center gap-2" data-v-9842279b><!--[-->`);
      ssrRenderList(devicesDisplay.value, (dev) => {
        _push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[11px] text-gray-600 dark:text-gray-300" data-v-9842279b>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: dev.icon,
          class: "w-3 h-3 text-gray-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(dev.label)} ${ssrInterpolate(dev.percentage)}% </span>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/dashboard/TrendChartCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DashboardTrendChartCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-9842279b"]]), { __name: "AdminDashboardTrendChartCard" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InsightsMixCard",
  __ssrInlineRender: true,
  props: {
    trafficInsights: {},
    categoryMix: {},
    selectedRange: {},
    selectedRangeLabel: {},
    totalRevenue: {},
    currency: {},
    isCommerceActive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const userInsightTab = ref(null);
    const effectiveInsightTab = computed(() => {
      if (userInsightTab.value) return userInsightTab.value;
      return props.totalRevenue > 0 ? "categories" : "sources";
    });
    const trafficSourceDisplay = computed(() => buildDashboardTrafficSources(props.trafficInsights));
    const productMixDisplay = computed(() => buildDashboardProductMix(props.categoryMix));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UIcon = _sfc_main$Y;
      const _component_NuxtLink = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs flex flex-col justify-between" }, _attrs))}><div><div class="flex items-center justify-between gap-2 mb-3"><h2 class="text-base font-bold text-gray-900 dark:text-white">${ssrInterpolate(effectiveInsightTab.value === "sources" ? "\u6D41\u91CF\u6765\u6E90\u6E20\u9053" : effectiveInsightTab.value === "pages" ? "\u70ED\u95E8\u53D7\u8BBF\u9875\u9762" : "\u4E1A\u52A1\u54C1\u7C7B\u6784\u6210")}</h2><div class="flex items-center bg-gray-100 dark:bg-white/5 p-0.5 rounded-lg"><button type="button" class="${ssrRenderClass([effectiveInsightTab.value === "sources" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2 py-1 rounded-md text-[11px] font-medium transition cursor-pointer"])}"> \u6D41\u91CF\u6765\u6E90 </button><button type="button" class="${ssrRenderClass([effectiveInsightTab.value === "pages" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2 py-1 rounded-md text-[11px] font-medium transition cursor-pointer"])}"> \u70ED\u95E8\u9875\u9762 </button><button type="button" class="${ssrRenderClass([effectiveInsightTab.value === "categories" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2 py-1 rounded-md text-[11px] font-medium transition cursor-pointer"])}"> \u54C1\u7C7B\u6784\u6210 </button></div></div>`);
      if (effectiveInsightTab.value === "sources") {
        _push(`<div class="space-y-3"><p class="text-xs text-gray-400 mb-2">${ssrInterpolate(__props.selectedRangeLabel)}\u5404\u83B7\u5BA2\u6E20\u9053\u72EC\u7ACB\u8BBF\u5BA2\u5360\u6BD4</p><!--[-->`);
        ssrRenderList(trafficSourceDisplay.value, (src) => {
          _push(`<div class="space-y-1"><div class="flex items-center justify-between text-xs"><span class="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: src.icon,
            class: ["w-3.5 h-3.5", src.iconClass]
          }, null, _parent));
          _push(` ${ssrInterpolate(src.name)}</span><span class="text-gray-500 font-mono text-[11px]">${ssrInterpolate(src.count)} UV \xB7 ${ssrInterpolate(src.percentage)}% </span></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="${ssrRenderClass([src.barClass, "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${src.percentage}%` })}"></div></div></div>`);
        });
        _push(`<!--]-->`);
        if ((_b = (_a = __props.trafficInsights) == null ? void 0 : _a.topSources) == null ? void 0 : _b.length) {
          _push(`<div class="pt-2 flex items-center gap-1.5 flex-wrap"><span class="text-[11px] text-gray-400">Top \u6765\u6E90:</span><!--[-->`);
          ssrRenderList(__props.trafficInsights.topSources.slice(0, 4), (spec) => {
            _push(`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[11px] text-gray-700 dark:text-gray-300 font-medium">${ssrInterpolate(spec.source)} <span class="text-gray-400 font-mono">${ssrInterpolate(spec.count)}</span></span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (effectiveInsightTab.value === "pages") {
        _push(`<div class="space-y-2.5"><p class="text-xs text-gray-400 mb-2">${ssrInterpolate(__props.selectedRangeLabel)}\u8BBF\u95EE\u91CF\u6700\u9AD8\u7684\u7AD9\u5185\u8DEF\u5F84</p>`);
        if ((_d = (_c = __props.trafficInsights) == null ? void 0 : _c.topPages) == null ? void 0 : _d.length) {
          _push(`<!--[-->`);
          ssrRenderList(__props.trafficInsights.topPages.slice(0, 5), (pg) => {
            _push(`<div role="link" class="space-y-1 group cursor-pointer"><div class="flex items-center justify-between text-xs gap-2"><span class="font-mono text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 truncate max-w-[200px]">${ssrInterpolate(pg.path)}</span><span class="text-gray-500 font-mono text-[11px] shrink-0">${ssrInterpolate(pg.views)} PV \xB7 ${ssrInterpolate(pg.visitors)} UV </span></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-cyan-500 transition-all duration-500" style="${ssrRenderStyle({ width: `${pg.percentage}%` })}"></div></div></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<div class="py-8 text-center text-xs text-gray-400"> \u5F53\u524D\u5468\u671F\u6682\u65E0\u9875\u9762\u8BBF\u95EE\u8BB0\u5F55 </div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="space-y-3"><p class="text-xs text-gray-400 mb-2">\u5404\u4E1A\u52A1\u7C7B\u578B\u7D2F\u8BA1\u5B9E\u6536\u4E0E\u8BA2\u5355\u5360\u6BD4\u5206\u5E03</p><!--[-->`);
        ssrRenderList(productMixDisplay.value, (item) => {
          _push(`<div class="space-y-1"><div class="flex items-center justify-between text-xs"><span class="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: item.icon,
            class: ["w-3.5 h-3.5", item.iconClass]
          }, null, _parent));
          _push(` ${ssrInterpolate(item.name)}</span><span class="text-gray-500 font-mono text-[11px]">${ssrInterpolate(item.count)} \u7B14 \xB7 ${ssrInterpolate(unref(formatCurrencyAmount)(item.amount, __props.currency))}</span></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="${ssrRenderClass([item.barClass, "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="mt-4 pt-3.5 border-t border-gray-100 dark:border-gray-800/60 grid grid-cols-2 gap-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/stats?preset=${__props.selectedRange}`,
        class: "flex items-center justify-between p-2 rounded-xl border border-gray-200/60 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 hover:border-cyan-500/40 transition text-xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chart-bar-bold",
              class: "w-4 h-4 text-cyan-500"
            }, null, _parent2, _scopeId));
            _push2(` \u6D41\u91CF\u7EDF\u8BA1\u62A5\u8868 </span><span class="text-gray-400"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300" }, [
                createVNode(_component_UIcon, {
                  name: "ph:chart-bar-bold",
                  class: "w-4 h-4 text-cyan-500"
                }),
                createTextVNode(" \u6D41\u91CF\u7EDF\u8BA1\u62A5\u8868 ")
              ]),
              createVNode("span", { class: "text-gray-400" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.isCommerceActive ? "/admin/products" : "/admin/posts",
        class: "flex items-center justify-between p-2 rounded-xl border border-gray-200/60 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 hover:border-purple-500/40 transition text-xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: __props.isCommerceActive ? "ph:package-bold" : "ph:newspaper-duotone",
              class: "w-4 h-4 text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(__props.isCommerceActive ? "\u5546\u54C1\u4E0E\u5E93\u5B58" : "\u5185\u5BB9\u4E0E\u6587\u7AE0")}</span><span class="text-gray-400"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center gap-1.5 font-medium text-gray-700 dark:text-gray-300" }, [
                createVNode(_component_UIcon, {
                  name: __props.isCommerceActive ? "ph:package-bold" : "ph:newspaper-duotone",
                  class: "w-4 h-4 text-purple-500"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(__props.isCommerceActive ? "\u5546\u54C1\u4E0E\u5E93\u5B58" : "\u5185\u5BB9\u4E0E\u6587\u7AE0"), 1)
              ]),
              createVNode("span", { class: "text-gray-400" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/dashboard/InsightsMixCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const DashboardInsightsMixCard = Object.assign(_sfc_main$2, { __name: "AdminDashboardInsightsMixCard" });
var OrderPayStatus = /* @__PURE__ */ ((OrderPayStatus2) => {
  OrderPayStatus2["PENDING"] = "pending";
  OrderPayStatus2["PAID"] = "paid";
  OrderPayStatus2["FAILED"] = "failed";
  OrderPayStatus2["REFUNDED"] = "refunded";
  OrderPayStatus2["CANCELLED"] = "cancelled";
  OrderPayStatus2["EXPIRED"] = "expired";
  OrderPayStatus2["CLOSED"] = "closed";
  OrderPayStatus2["DELETED"] = "deleted";
  return OrderPayStatus2;
})(OrderPayStatus || {});
var OrderFulfillmentStatus = /* @__PURE__ */ ((OrderFulfillmentStatus2) => {
  OrderFulfillmentStatus2["NONE"] = "none";
  OrderFulfillmentStatus2["PENDING"] = "pending";
  OrderFulfillmentStatus2["PROCESSING"] = "processing";
  OrderFulfillmentStatus2["ACTIVE"] = "active";
  OrderFulfillmentStatus2["DELIVERED"] = "delivered";
  OrderFulfillmentStatus2["FULFILLED"] = "fulfilled";
  OrderFulfillmentStatus2["COMPLETED"] = "completed";
  OrderFulfillmentStatus2["EXPIRED"] = "expired";
  OrderFulfillmentStatus2["FAILED"] = "failed";
  OrderFulfillmentStatus2["CANCELLED"] = "cancelled";
  OrderFulfillmentStatus2["DELETED"] = "deleted";
  return OrderFulfillmentStatus2;
})(OrderFulfillmentStatus || {});
const useOrderStatus = () => {
  const { t, te } = useI18n();
  const getPayStatusLabel = (payStatus) => {
    const status = String(
      payStatus || "pending"
      /* PENDING */
    ).toLowerCase();
    const key = `admin.orders.pay_status_${status}`;
    if (te(key)) return t(key);
    const fallbackMap = {
      [
        "pending"
        /* PENDING */
      ]: "\u5F85\u652F\u4ED8",
      [
        "paid"
        /* PAID */
      ]: "\u5DF2\u652F\u4ED8",
      [
        "failed"
        /* FAILED */
      ]: "\u652F\u4ED8\u5931\u8D25",
      [
        "refunded"
        /* REFUNDED */
      ]: "\u5DF2\u9000\u6B3E",
      [
        "cancelled"
        /* CANCELLED */
      ]: "\u5DF2\u53D6\u6D88",
      [
        "expired"
        /* EXPIRED */
      ]: "\u5DF2\u8FC7\u671F",
      [
        "closed"
        /* CLOSED */
      ]: "\u5DF2\u5173\u95ED",
      [
        "deleted"
        /* DELETED */
      ]: "\u5DF2\u5220\u9664"
    };
    return fallbackMap[status] || status;
  };
  const getPayStatusColor = (payStatus) => {
    const status = String(
      payStatus || "pending"
      /* PENDING */
    ).toLowerCase();
    switch (status) {
      case "paid":
        return "success";
      case "pending":
        return "warning";
      case "failed":
      case "deleted":
      case "expired":
        return "error";
      case "refunded":
      case "cancelled":
      case "closed":
        return "info";
      default:
        return "neutral";
    }
  };
  const getFulfillmentStatusLabel = (status) => {
    const rawStatus = String(
      status || "pending"
      /* PENDING */
    ).toLowerCase();
    const normalizedKey = rawStatus === "fulfilled" ? "delivered" : rawStatus;
    const key = `admin.orders.status_${normalizedKey}`;
    if (te(key)) return t(key);
    const fallbackMap = {
      [
        "none"
        /* NONE */
      ]: "\u65E0\u72B6\u6001",
      [
        "pending"
        /* PENDING */
      ]: "\u5F85\u5C65\u7EA6",
      [
        "processing"
        /* PROCESSING */
      ]: "\u5904\u7406\u4E2D",
      [
        "active"
        /* ACTIVE */
      ]: "\u5DF2\u6FC0\u6D3B",
      [
        "delivered"
        /* DELIVERED */
      ]: "\u5DF2\u53D1\u8D27",
      [
        "fulfilled"
        /* FULFILLED */
      ]: "\u5DF2\u53D1\u8D27",
      [
        "completed"
        /* COMPLETED */
      ]: "\u5DF2\u5B8C\u6210",
      [
        "expired"
        /* EXPIRED */
      ]: "\u5DF2\u8FC7\u671F",
      [
        "failed"
        /* FAILED */
      ]: "\u5931\u8D25",
      [
        "cancelled"
        /* CANCELLED */
      ]: "\u5DF2\u53D6\u6D88",
      [
        "deleted"
        /* DELETED */
      ]: "\u5DF2\u5220\u9664"
    };
    return fallbackMap[rawStatus] || rawStatus;
  };
  const getFulfillmentStatusColor = (status) => {
    const s = String(
      status || "pending"
      /* PENDING */
    ).toLowerCase();
    switch (s) {
      case "delivered":
      case "fulfilled":
      case "completed":
        return "success";
      case "pending":
      case "processing":
      case "active":
        return "warning";
      case "failed":
      case "expired":
      case "deleted":
        return "error";
      case "cancelled":
        return "info";
      default:
        return "neutral";
    }
  };
  return {
    OrderPayStatus,
    OrderFulfillmentStatus,
    getPayStatusLabel,
    getPayStatusColor,
    getFulfillmentStatusLabel,
    getFulfillmentStatusColor
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BottomPanelsGrid",
  __ssrInlineRender: true,
  props: {
    actionItems: {},
    recentOrders: {},
    trafficInsights: {},
    selectedRange: {},
    selectedRangeLabel: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    useRouter();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { formatDateTime } = useFormatTime();
    const {
      getPayStatusLabel,
      getPayStatusColor,
      getFulfillmentStatusLabel,
      getFulfillmentStatusColor
    } = useOrderStatus();
    const userActivityTab = ref(null);
    const effectiveActivityTab = computed(() => {
      var _a;
      if (userActivityTab.value) return userActivityTab.value;
      return (((_a = props.recentOrders) == null ? void 0 : _a.length) || 0) > 0 ? "orders" : "visitors";
    });
    const actionCenterCards = computed(() => {
      return buildDashboardActionCards(props.actionItems, t("admin.dashboard.pendingTickets", "\u5F85\u56DE\u590D\u5BA2\u670D\u5DE5\u5355"));
    });
    const totalActionAlertCount = computed(() => {
      return actionCenterCards.value.reduce((sum, item) => sum + item.count, 0);
    });
    const hasActionItems = computed(() => totalActionAlertCount.value > 0);
    const recentVisitors = computed(() => {
      var _a;
      return ((_a = props.trafficInsights) == null ? void 0 : _a.recentVisitors) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIcon = _sfc_main$Y;
      const _component_UBadge = _sfc_main$O;
      const _component_NuxtLink = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 xl:grid-cols-[1fr_1.6fr] gap-5" }, _attrs))}><div class="bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs flex flex-col justify-between"><div><div class="flex items-center justify-between mb-1.5"><h2 class="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:bell-ringing-bold",
        class: "w-4 h-4 text-primary-500"
      }, null, _parent));
      _push(` \u8FD0\u8425\u5F85\u529E\u4E0E\u7CFB\u7EDF\u9884\u8B66 </h2>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: hasActionItems.value ? "warning" : "success",
        variant: "subtle",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(hasActionItems.value ? `${totalActionAlertCount.value} \u9879\u9700\u5173\u6CE8` : "\u72B6\u6001\u826F\u597D")}`);
          } else {
            return [
              createTextVNode(toDisplayString(hasActionItems.value ? `${totalActionAlertCount.value} \u9879\u9700\u5173\u6CE8` : "\u72B6\u6001\u826F\u597D"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-xs text-gray-400 mb-4">\u96C6\u4E2D\u5904\u7F6E\u5DE5\u5355\u3001\u8BC4\u8BBA\u5BA1\u6838\u3001\u90AE\u4EF6\u6295\u9012\u4E0E\u5C65\u7EA6\u5F02\u5E38</p><div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5"><!--[-->`);
      ssrRenderList(actionCenterCards.value, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.key,
          to: item.to,
          class: ["flex items-center justify-between p-3 rounded-xl border transition", item.count > 0 ? item.activeClass : "border-gray-200/60 dark:border-gray-800/50 bg-gray-50/30 dark:bg-white/5 hover:border-gray-300 dark:hover:border-gray-700"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2.5 min-w-0"${_scopeId}><div class="${ssrRenderClass([item.iconBgClass, "p-2 rounded-lg shrink-0"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon,
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="min-w-0"${_scopeId}><div class="text-xs font-semibold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(item.title)}</div><div class="text-[11px] text-gray-400 truncate"${_scopeId}>${ssrInterpolate(item.desc)}</div></div></div><span class="${ssrRenderClass([item.count > 0 ? item.countActiveClass : "text-gray-400", "text-sm font-bold font-mono pl-2 shrink-0"])}"${_scopeId}>${ssrInterpolate(item.count)}</span>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2.5 min-w-0" }, [
                  createVNode("div", {
                    class: ["p-2 rounded-lg shrink-0", item.iconBgClass]
                  }, [
                    createVNode(_component_UIcon, {
                      name: item.icon,
                      class: "w-4 h-4"
                    }, null, 8, ["name"])
                  ], 2),
                  createVNode("div", { class: "min-w-0" }, [
                    createVNode("div", { class: "text-xs font-semibold text-gray-900 dark:text-white truncate" }, toDisplayString(item.title), 1),
                    createVNode("div", { class: "text-[11px] text-gray-400 truncate" }, toDisplayString(item.desc), 1)
                  ])
                ]),
                createVNode("span", {
                  class: ["text-sm font-bold font-mono pl-2 shrink-0", item.count > 0 ? item.countActiveClass : "text-gray-400"]
                }, toDisplayString(item.count), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="mt-4 pt-3.5 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between"><span class="text-xs text-gray-400">\u5FEB\u6377\u6392\u67E5</span><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/tickets",
        class: "text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5BA2\u670D\u5DE5\u5355 \u2192`);
          } else {
            return [
              createTextVNode("\u5BA2\u670D\u5DE5\u5355 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/comments",
        class: "text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8BC4\u8BBA\u7BA1\u7406 \u2192`);
          } else {
            return [
              createTextVNode("\u8BC4\u8BBA\u7BA1\u7406 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/logs",
        class: "text-xs text-primary-600 hover:text-primary-700 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u7CFB\u7EDF\u65E5\u5FD7 \u2192`);
          } else {
            return [
              createTextVNode("\u7CFB\u7EDF\u65E5\u5FD7 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs flex flex-col"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4"><div><h2 class="text-base font-bold text-gray-900 dark:text-white">${ssrInterpolate(effectiveActivityTab.value === "orders" ? unref(t)("admin.dashboard.recentTransactions", "\u6700\u65B0\u4EA4\u6613\u52A8\u6001") : "\u5B9E\u65F6\u8BBF\u5BA2\u52A8\u6001")}</h2><p class="text-xs text-gray-400 mt-0.5">${ssrInterpolate(effectiveActivityTab.value === "orders" ? unref(t)("admin.dashboard.recentTransactionsDesc", "\u5168\u7AD9\u5B9E\u65F6\u4E0B\u5355\u4E0E\u652F\u4ED8\u8BB0\u5F55") : `${__props.selectedRangeLabel}\u6700\u8FD1\u6D3B\u8DC3\u7684\u72EC\u7ACB\u8BBF\u5BA2\u4E0E\u843D\u5730\u9875\u9762`)}</p></div><div class="flex items-center gap-2.5"><div class="flex items-center bg-gray-100 dark:bg-white/5 p-0.5 rounded-lg"><button type="button" class="${ssrRenderClass([effectiveActivityTab.value === "orders" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer"])}"> \u4EA4\u6613\u8BA2\u5355 </button><button type="button" class="${ssrRenderClass([effectiveActivityTab.value === "visitors" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer"])}"> \u5B9E\u65F6\u8BBF\u5BA2 </button></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: effectiveActivityTab.value === "orders" ? "/admin/orders" : `/admin/stats/visitors?preset=${__props.selectedRange}`,
        class: "text-xs text-primary-600 hover:text-primary-700 font-medium shrink-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(effectiveActivityTab.value === "orders" ? unref(t)("admin.dashboard.viewAllOrders", "\u67E5\u770B\u5168\u90E8 \u2192") : "\u5168\u90E8\u8BBF\u5BA2 \u2192")}`);
          } else {
            return [
              createTextVNode(toDisplayString(effectiveActivityTab.value === "orders" ? unref(t)("admin.dashboard.viewAllOrders", "\u67E5\u770B\u5168\u90E8 \u2192") : "\u5168\u90E8\u8BBF\u5BA2 \u2192"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (effectiveActivityTab.value === "orders") {
        _push(`<div class="flex-1 overflow-x-auto"><table class="w-full text-xs"><thead><tr class="border-b border-gray-100 dark:border-gray-800/80 text-left text-gray-400 font-medium"><th class="py-2 pr-3">${ssrInterpolate(unref(t)("admin.dashboard.orderAndCustomer", "\u5355\u53F7 / \u5BA2\u6237"))}</th><th class="py-2 pr-3">${ssrInterpolate(unref(t)("admin.orders.amount", "\u91D1\u989D"))}</th><th class="py-2 pr-3">${ssrInterpolate(unref(t)("admin.orders.payStatus", "\u652F\u4ED8\u72B6\u6001"))}</th><th class="py-2 pr-3">${ssrInterpolate(unref(t)("admin.orders.fulfillment_label", "\u5C65\u7EA6\u72B6\u6001"))}</th><th class="py-2 text-right">${ssrInterpolate(unref(t)("admin.orders.date", "\u65F6\u95F4"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/50"><!--[-->`);
        ssrRenderList(__props.recentOrders || [], (order) => {
          _push(`<tr class="hover:bg-gray-50/60 dark:hover:bg-white/5 transition"><td class="py-2.5 pr-3"><div class="font-mono font-medium text-gray-900 dark:text-white truncate max-w-[140px]">${ssrInterpolate(order.id)}</div><div class="text-[10px] text-gray-400 truncate max-w-[140px]">${ssrInterpolate(order.contactEmail || unref(t)("admin.dashboard.anonymousOrder", "\u533F\u540D\u4E0B\u5355"))}</div></td><td class="py-2.5 pr-3 whitespace-nowrap"><span class="font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(formatCurrencyAmount)(order.amount, order.currency))}</span></td><td class="py-2.5 pr-3 whitespace-nowrap">`);
          _push(ssrRenderComponent(_component_UBadge, {
            color: unref(getPayStatusColor)(order.payStatus),
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(getPayStatusLabel)(order.payStatus))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(getPayStatusLabel)(order.payStatus)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="py-2.5 pr-3 whitespace-nowrap">`);
          _push(ssrRenderComponent(_component_UBadge, {
            color: unref(getFulfillmentStatusColor)(order.status),
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(getFulfillmentStatusLabel)(order.status))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(getFulfillmentStatusLabel)(order.status)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="py-2.5 text-right whitespace-nowrap text-gray-400 text-[11px]">${ssrInterpolate(unref(formatDateTime)(order.createdAt))}</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!((_a = __props.recentOrders) == null ? void 0 : _a.length)) {
          _push(`<tr><td colspan="5" class="py-8 text-center text-gray-400">${ssrInterpolate(unref(t)("admin.dashboard.noOrderData", "\u6682\u65E0\u8BA2\u5355\u6570\u636E"))}</td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div>`);
      } else {
        _push(`<div class="flex-1 overflow-x-auto"><table class="w-full text-xs"><thead><tr class="border-b border-gray-100 dark:border-gray-800/80 text-left text-gray-400 font-medium"><th class="py-2 pr-3">\u8BBF\u5BA2 / \u6765\u6E90\u6E20\u9053</th><th class="py-2 pr-3">\u53D7\u8BBF\u9875\u9762</th><th class="py-2 pr-3">\u5730\u533A / \u8BBE\u5907</th><th class="py-2 pr-3">\u6D4F\u89C8\u6DF1\u5EA6</th><th class="py-2 text-right">\u6700\u8FD1\u6D3B\u8DC3</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/50"><!--[-->`);
        ssrRenderList(recentVisitors.value, (v) => {
          _push(`<tr class="hover:bg-gray-50/60 dark:hover:bg-white/5 transition cursor-pointer"><td class="py-2.5 pr-3"><div class="font-medium text-gray-900 dark:text-white flex items-center gap-1.5"><span>${ssrInterpolate(v.source || "direct")}</span><span class="px-1.5 py-0.2 rounded bg-gray-100 dark:bg-white/5 text-[10px] text-gray-500 font-normal">${ssrInterpolate(unref(getDashboardSourceTypeLabel)(v.sourceType))}</span></div><div class="text-[10px] font-mono text-gray-400 truncate max-w-[130px]">${ssrInterpolate(v.visitorId)}</div></td><td class="py-2.5 pr-3"><div class="font-mono text-gray-700 dark:text-gray-300 truncate max-w-[180px]">${ssrInterpolate(v.lastPath || v.landingPath)}</div>`);
          if (v.landingPath && v.landingPath !== v.lastPath) {
            _push(`<div class="text-[10px] text-gray-400 truncate max-w-[180px]"> \u5165\u53E3: ${ssrInterpolate(v.landingPath)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="py-2.5 pr-3 whitespace-nowrap text-gray-600 dark:text-gray-300"><span>${ssrInterpolate(v.country || "\u672A\u77E5")}</span><span class="text-gray-400 mx-1">\xB7</span><span class="text-gray-400">${ssrInterpolate(unref(getDashboardDeviceLabel)(v.deviceType))}</span></td><td class="py-2.5 pr-3 whitespace-nowrap">`);
          _push(ssrRenderComponent(_component_UBadge, {
            color: "neutral",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(v.pageViews)} PV `);
              } else {
                return [
                  createTextVNode(toDisplayString(v.pageViews) + " PV ", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="py-2.5 text-right whitespace-nowrap text-gray-400 text-[11px]">${ssrInterpolate(unref(formatDateTime)(v.lastSeenAt))}</td></tr>`);
        });
        _push(`<!--]-->`);
        if (!recentVisitors.value.length) {
          _push(`<tr><td colspan="5" class="py-8 text-center text-gray-400"> \u5F53\u524D\u5468\u671F\u6682\u65E0\u8BBF\u5BA2\u8BB0\u5F55 </td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/dashboard/BottomPanelsGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DashboardBottomPanelsGrid = Object.assign(_sfc_main$1, { __name: "AdminDashboardBottomPanelsGrid" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const selectedRange = ref("today");
    const selectedRangeLabel = computed(() => {
      const opt = DASHBOARD_RANGE_OPTIONS.find((r) => r.value === selectedRange.value);
      return opt ? opt.label : "\u4ECA\u65E5";
    });
    const { data: dashboardData, pending, refresh } = useFetch(
      "/api/admin/dashboard",
      {
        query: computed(() => ({
          range: selectedRange.value
        })),
        // 经营概览是重接口:不在 SSR 阶段等待,先渲染页面骨架,数据到客户端再拉,
        // 避免整页 HTML 被这个统计接口拖住(布局层的权限引导仍按原样同步等待)。
        server: false,
        lazy: true,
        onResponseError({ response }) {
          if (response.status === 401) router.push("/admin/login");
        }
      },
      "$aL2fRZDo7k"
      /* nuxt-injected */
    );
    const isCommerceActive = computed(() => {
      var _a, _b;
      return Boolean((_b = (_a = dashboardData.value) == null ? void 0 : _a.stats) == null ? void 0 : _b.isCommerceActive);
    });
    const hasPeriodCommerceActivity = computed(() => {
      var _a;
      const stats = (_a = dashboardData.value) == null ? void 0 : _a.stats;
      return Boolean(((stats == null ? void 0 : stats.periodRevenue) || 0) > 0 || ((stats == null ? void 0 : stats.periodOrders) || 0) > 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const _component_UButton = _sfc_main$T;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-8rem)] flex flex-col gap-5 pb-8" }, _attrs))}><div class="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0"><div><h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("admin.dashboard.title", "\u7ECF\u8425\u6982\u89C8"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-1 text-xs md:text-sm">${ssrInterpolate(((_a = unref(dashboardData)) == null ? void 0 : _a.timezone) ? `\u65F6\u533A: ${unref(dashboardData).timezone} \xB7 ` : "")} \u6D41\u91CF\u6D1E\u5BDF\u3001\u7528\u6237\u589E\u957F\u3001\u7CFB\u7EDF\u5065\u5EB7\u4E0E\u5B9E\u65F6\u4E1A\u52A1\u52A8\u6001 </p></div><div class="flex items-center gap-2.5"><div class="flex items-center bg-gray-100 dark:bg-white/5 p-1 rounded-xl shrink-0"><!--[-->`);
      ssrRenderList(unref(DASHBOARD_RANGE_OPTIONS), (r) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedRange.value === r.value ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer"])}">${ssrInterpolate(r.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        size: "sm",
        loading: unref(pending),
        class: "hover:bg-gray-50 dark:hover:bg-gray-800",
        onClick: () => unref(refresh)()
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(DashboardKpiCardsGrid, {
        stats: (_b = unref(dashboardData)) == null ? void 0 : _b.stats,
        "action-items": (_c = unref(dashboardData)) == null ? void 0 : _c.actionItems,
        "selected-range": selectedRange.value,
        "is-commerce-active": isCommerceActive.value
      }, null, _parent));
      _push(`<div class="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-5">`);
      _push(ssrRenderComponent(DashboardTrendChartCard, {
        chart: (_d = unref(dashboardData)) == null ? void 0 : _d.chart,
        "traffic-insights": (_e = unref(dashboardData)) == null ? void 0 : _e.trafficInsights,
        "selected-range-label": selectedRangeLabel.value,
        "has-period-commerce-activity": hasPeriodCommerceActivity.value,
        pending: unref(pending)
      }, null, _parent));
      _push(ssrRenderComponent(DashboardInsightsMixCard, {
        "traffic-insights": (_f = unref(dashboardData)) == null ? void 0 : _f.trafficInsights,
        "category-mix": (_g = unref(dashboardData)) == null ? void 0 : _g.categoryMix,
        "selected-range": selectedRange.value,
        "selected-range-label": selectedRangeLabel.value,
        "total-revenue": ((_i = (_h = unref(dashboardData)) == null ? void 0 : _h.stats) == null ? void 0 : _i.totalRevenue) || 0,
        currency: (_k = (_j = unref(dashboardData)) == null ? void 0 : _j.stats) == null ? void 0 : _k.currency,
        "is-commerce-active": isCommerceActive.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(DashboardBottomPanelsGrid, {
        "action-items": (_l = unref(dashboardData)) == null ? void 0 : _l.actionItems,
        "recent-orders": (_m = unref(dashboardData)) == null ? void 0 : _m.recentOrders,
        "traffic-insights": (_n = unref(dashboardData)) == null ? void 0 : _n.trafficInsights,
        "selected-range": selectedRange.value,
        "selected-range-label": selectedRangeLabel.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-DRBgjeZM.mjs.map
