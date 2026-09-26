import { _ as _export_sfc, f as useI18n, J as useCurrencyFormat, g as useFormatTime, s as useRouter, z as useFetch, l as _sfc_main$B, b as _sfc_main$G, a as __nuxt_component_3$1, o as _sfc_main$x } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
const TOP = 10;
const HEIGHT = 36;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const { formatCurrencyAmount, formatCurrencyTotals } = useCurrencyFormat();
    const { formatDateTime } = useFormatTime();
    const {
      getPayStatusLabel,
      getPayStatusColor,
      getFulfillmentStatusLabel,
      getFulfillmentStatusColor
    } = useOrderStatus();
    const router = useRouter();
    const hoveredIndex = ref(null);
    const selectedRange = ref("today");
    const rangeOptions = [
      { label: "\u4ECA\u65E5 24h", value: "today" },
      { label: "\u8FD1 7 \u5929", value: "7d" },
      { label: "\u8FD1 30 \u5929", value: "30d" }
    ];
    const selectedRangeLabel = computed(() => {
      const opt = rangeOptions.find((r) => r.value === selectedRange.value);
      return opt ? opt.label : "\u4ECA\u65E5";
    });
    const performanceCardTitle = computed(() => {
      if (selectedRange.value === "7d") return t("admin.dashboard.performance7d", "\u8FD1 7 \u5929\u7ECF\u8425\u4E1A\u7EE9");
      if (selectedRange.value === "30d") return t("admin.dashboard.performance30d", "\u8FD1 30 \u5929\u7ECF\u8425\u4E1A\u7EE9");
      return t("admin.dashboard.todayPerformance", "\u4ECA\u65E5\u7ECF\u8425\u4E1A\u7EE9");
    });
    const trafficCardTitle = computed(() => {
      if (selectedRange.value === "7d") return t("admin.dashboard.traffic7d", "\u8FD1 7 \u5929\u8BBF\u5BA2\u4E0E\u8F6C\u5316");
      if (selectedRange.value === "30d") return t("admin.dashboard.traffic30d", "\u8FD1 30 \u5929\u8BBF\u5BA2\u4E0E\u8F6C\u5316");
      return t("admin.dashboard.todayTraffic", "\u4ECA\u65E5\u8BBF\u5BA2\u4E0E\u8F6C\u5316");
    });
    const ordersBadgeLabel = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const count = (_f = (_e = (_b = (_a = dashboardData.value) == null ? void 0 : _a.stats) == null ? void 0 : _b.todayPaidOrders) != null ? _e : (_d = (_c = dashboardData.value) == null ? void 0 : _c.stats) == null ? void 0 : _d.todayOrders) != null ? _f : 0;
      if (selectedRange.value === "7d") return `${count} \u7B14\u8BA2\u5355 (7\u5929)`;
      if (selectedRange.value === "30d") return `${count} \u7B14\u8BA2\u5355 (30\u5929)`;
      return `${count} \u7B14\u8BA2\u5355`;
    });
    const { data: dashboardData, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/dashboard",
      {
        query: computed(() => ({
          range: selectedRange.value
        })),
        onResponseError({ response }) {
          if (response.status === 401) router.push("/admin/login");
        }
      },
      "$aL2fRZDo7k"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const svgData = computed(() => {
      var _a, _b;
      const chart = (_a = dashboardData.value) == null ? void 0 : _a.chart;
      if (!((_b = chart == null ? void 0 : chart.revenue) == null ? void 0 : _b.length)) return null;
      const data = chart.revenue;
      const max = Math.max(...data, 10);
      const len = data.length;
      const points = data.map((val, i) => ({
        x: i / (len - 1) * 100,
        y: TOP + HEIGHT - val / max * HEIGHT
      }));
      let linePath = `M ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < len - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const cpX = p0.x + (p1.x - p0.x) / 2;
        linePath += ` C ${cpX} ${p0.y}, ${cpX} ${p1.y}, ${p1.x} ${p1.y}`;
      }
      const areaPath = `${linePath} L 100 50 L 0 50 Z`;
      return { points, linePath, areaPath };
    });
    const shouldShowXLabel = (index, total) => {
      if (total <= 12) return true;
      if (total <= 24) return index % 3 === 0 || index === total - 1;
      return index % 5 === 0 || index === total - 1;
    };
    const hasActionItems = computed(() => {
      var _a;
      const ai = (_a = dashboardData.value) == null ? void 0 : _a.actionItems;
      return Boolean((ai == null ? void 0 : ai.pendingFulfillments) || (ai == null ? void 0 : ai.lowStockCards) || (ai == null ? void 0 : ai.pendingTopups) || (ai == null ? void 0 : ai.pendingTickets));
    });
    const productMixDisplay = computed(() => {
      var _a;
      const mix = ((_a = dashboardData.value) == null ? void 0 : _a.categoryMix) || [];
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
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W;
      const _component_UButton = _sfc_main$B;
      const _component_UIcon = _sfc_main$G;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UBadge = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-8rem)] flex flex-col gap-6 pb-8" }, _attrs))} data-v-b931477f><div class="flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0" data-v-b931477f><div data-v-b931477f><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight" data-v-b931477f>${ssrInterpolate(_ctx.$t("admin.dashboard.title", "\u7ECF\u8425\u6982\u89C8"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-1 text-sm" data-v-b931477f>${ssrInterpolate(((_a = unref(dashboardData)) == null ? void 0 : _a.timezone) ? `\u65F6\u533A: ${unref(dashboardData).timezone} \xB7 ` : "")} \u5B9E\u65F6\u8425\u6536\u8D8B\u52BF\u3001\u5F85\u529E\u5904\u7F6E\u4E0E\u4E1A\u52A1\u52A8\u6001 </p></div><div class="flex items-center gap-2.5" data-v-b931477f><div class="flex items-center bg-gray-100 dark:bg-white/5 p-1 rounded-xl shrink-0" data-v-b931477f><!--[-->`);
      ssrRenderList(rangeOptions, (r) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedRange.value === r.value ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer"])}" data-v-b931477f>${ssrInterpolate(r.label)}</button>`);
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
      _push(`</div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-v-b931477f><div class="bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs hover:border-emerald-500/40 transition" data-v-b931477f><div class="flex justify-between items-start mb-2.5" data-v-b931477f><span class="text-gray-500 dark:text-gray-400 text-xs font-medium" data-v-b931477f>${ssrInterpolate(performanceCardTitle.value)}</span><div class="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:currency-dollar-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div></div><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight" data-v-b931477f>${ssrInterpolate(unref(formatCurrencyTotals)((_c = (_b = unref(dashboardData)) == null ? void 0 : _b.stats) == null ? void 0 : _c.todayRevenueByCurrency, (_e = (_d = unref(dashboardData)) == null ? void 0 : _d.stats) == null ? void 0 : _e.currency))}</div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap" data-v-b931477f><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-cart-bold",
        class: "w-3 h-3 text-blue-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(ordersBadgeLabel.value)}</span><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:trend-up-bold",
        class: "w-3 h-3 text-emerald-500"
      }, null, _parent));
      _push(` \u5BA2\u5355\u4EF7 ${ssrInterpolate(unref(formatCurrencyAmount)(((_g = (_f = unref(dashboardData)) == null ? void 0 : _f.stats) == null ? void 0 : _g.todayAov) || 0, (_i = (_h = unref(dashboardData)) == null ? void 0 : _h.stats) == null ? void 0 : _i.currency))}</span></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-gray-400 flex justify-between items-center" data-v-b931477f><span class="truncate" data-v-b931477f>\u7D2F\u8BA1\u5B9E\u6536: ${ssrInterpolate(unref(formatCurrencyTotals)((_k = (_j = unref(dashboardData)) == null ? void 0 : _j.stats) == null ? void 0 : _k.totalRevenueByCurrency, (_m = (_l = unref(dashboardData)) == null ? void 0 : _l.stats) == null ? void 0 : _m.currency))}</span><span class="shrink-0 text-gray-400 font-mono" data-v-b931477f>${ssrInterpolate((((_o = (_n = unref(dashboardData)) == null ? void 0 : _n.stats) == null ? void 0 : _o.totalOrders) || 0).toLocaleString())} \u7B14</span></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/stats",
        class: "bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs hover:border-cyan-500/40 transition group flex flex-col justify-between cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2;
          if (_push2) {
            _push2(`<div data-v-b931477f${_scopeId}><div class="flex justify-between items-start mb-2.5" data-v-b931477f${_scopeId}><span class="text-gray-500 dark:text-gray-400 text-xs font-medium" data-v-b931477f${_scopeId}>${ssrInterpolate(trafficCardTitle.value)}</span><div class="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center" data-v-b931477f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:users-three-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1" data-v-b931477f${_scopeId}>${ssrInterpolate((((_b2 = (_a2 = unref(dashboardData)) == null ? void 0 : _a2.stats) == null ? void 0 : _b2.todayVisitors) || 0).toLocaleString())} <span class="text-xs font-normal text-gray-400" data-v-b931477f${_scopeId}>UV \u72EC\u7ACB\u8BBF\u5BA2</span></div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap" data-v-b931477f${_scopeId}><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" data-v-b931477f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:globe-hemisphere-west-bold",
              class: "w-3 h-3 text-indigo-500"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate((((_d2 = (_c2 = unref(dashboardData)) == null ? void 0 : _c2.stats) == null ? void 0 : _d2.todayIps) || 0).toLocaleString())} IP </span><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" data-v-b931477f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:eye-bold",
              class: "w-3 h-3 text-cyan-500"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate((((_f2 = (_e2 = unref(dashboardData)) == null ? void 0 : _e2.stats) == null ? void 0 : _f2.todayPageViews) || 0).toLocaleString())} PV </span><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-purple-500/10 text-[11px] font-semibold text-purple-600 dark:text-purple-400" data-v-b931477f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:funnel-bold",
              class: "w-3 h-3 text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(` \u8F6C\u5316\u7387 ${ssrInterpolate(((_h2 = (_g2 = unref(dashboardData)) == null ? void 0 : _g2.stats) == null ? void 0 : _h2.todayConversionRate) || 0)}% </span></div></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-cyan-600 dark:text-cyan-400 group-hover:underline flex items-center justify-between" data-v-b931477f${_scopeId}><span data-v-b931477f${_scopeId}>${ssrInterpolate(_ctx.$t("admin.dashboard.viewTrafficStats", "\u8BBF\u5BA2\u4E0E\u6F0F\u6597\u5206\u6790"))}</span><span data-v-b931477f${_scopeId}>\u2192</span></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex justify-between items-start mb-2.5" }, [
                  createVNode("span", { class: "text-gray-500 dark:text-gray-400 text-xs font-medium" }, toDisplayString(trafficCardTitle.value), 1),
                  createVNode("div", { class: "p-2 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:users-three-bold",
                      class: "w-4 h-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1" }, [
                  createTextVNode(toDisplayString((((_j2 = (_i2 = unref(dashboardData)) == null ? void 0 : _i2.stats) == null ? void 0 : _j2.todayVisitors) || 0).toLocaleString()) + " ", 1),
                  createVNode("span", { class: "text-xs font-normal text-gray-400" }, "UV \u72EC\u7ACB\u8BBF\u5BA2")
                ]),
                createVNode("div", { class: "mt-2.5 flex items-center gap-1.5 flex-wrap" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:globe-hemisphere-west-bold",
                      class: "w-3 h-3 text-indigo-500"
                    }),
                    createTextVNode(" " + toDisplayString((((_l2 = (_k2 = unref(dashboardData)) == null ? void 0 : _k2.stats) == null ? void 0 : _l2.todayIps) || 0).toLocaleString()) + " IP ", 1)
                  ]),
                  createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 text-[11px] font-medium text-gray-700 dark:text-gray-300" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:eye-bold",
                      class: "w-3 h-3 text-cyan-500"
                    }),
                    createTextVNode(" " + toDisplayString((((_n2 = (_m2 = unref(dashboardData)) == null ? void 0 : _m2.stats) == null ? void 0 : _n2.todayPageViews) || 0).toLocaleString()) + " PV ", 1)
                  ]),
                  createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-purple-500/10 text-[11px] font-semibold text-purple-600 dark:text-purple-400" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:funnel-bold",
                      class: "w-3 h-3 text-purple-500"
                    }),
                    createTextVNode(" \u8F6C\u5316\u7387 " + toDisplayString(((_p2 = (_o2 = unref(dashboardData)) == null ? void 0 : _o2.stats) == null ? void 0 : _p2.todayConversionRate) || 0) + "% ", 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-cyan-600 dark:text-cyan-400 group-hover:underline flex items-center justify-between" }, [
                createVNode("span", null, toDisplayString(_ctx.$t("admin.dashboard.viewTrafficStats", "\u8BBF\u5BA2\u4E0E\u6F0F\u6597\u5206\u6790")), 1),
                createVNode("span", null, "\u2192")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs hover:border-purple-500/40 transition flex flex-col justify-between" data-v-b931477f><div data-v-b931477f><div class="flex justify-between items-start mb-2.5" data-v-b931477f><span class="text-gray-500 dark:text-gray-400 text-xs font-medium" data-v-b931477f>${ssrInterpolate(_ctx.$t("admin.dashboard.customerScale", "\u5BA2\u6237\u8D44\u4EA7\u89C4\u6A21"))}</span><div class="p-2 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div></div><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1" data-v-b931477f>${ssrInterpolate((((_q = (_p = unref(dashboardData)) == null ? void 0 : _p.stats) == null ? void 0 : _q.totalUsers) || 0).toLocaleString())} <span class="text-xs font-normal text-gray-400" data-v-b931477f>\u4F4D</span></div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap" data-v-b931477f><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-500/10 text-[11px] font-medium text-emerald-600 dark:text-emerald-400" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-3 h-3"
      }, null, _parent));
      _push(` ${ssrInterpolate(((_s = (_r = unref(dashboardData)) == null ? void 0 : _r.stats) == null ? void 0 : _s.activeSubscriptions) || 0)} \u4E2A\u751F\u6548\u4E2D\u7684\u8BA2\u9605\u8BA1\u5212 </span></div></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-gray-400 flex justify-between items-center" data-v-b931477f><span data-v-b931477f>\u6CE8\u518C\u4E0E\u6D88\u8D39\u8F6C\u5316</span><span data-v-b931477f>\u6C89\u6DC0\u4F1A\u5458\u6C60</span></div></div><div class="bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs hover:border-amber-500/40 transition flex flex-col justify-between" data-v-b931477f><div data-v-b931477f><div class="flex justify-between items-start mb-2.5" data-v-b931477f><span class="text-gray-500 dark:text-gray-400 text-xs font-medium" data-v-b931477f>${ssrInterpolate(_ctx.$t("admin.dashboard.productHealth", "\u5728\u552E\u5546\u54C1\u4E0E\u5065\u5EB7\u5EA6"))}</span><div class="p-2 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:package-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</div></div><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-baseline gap-1" data-v-b931477f>${ssrInterpolate(((_u = (_t = unref(dashboardData)) == null ? void 0 : _t.stats) == null ? void 0 : _u.activeProducts) || 0)} <span class="text-xs font-normal text-gray-400" data-v-b931477f>\u6B3E\u5728\u552E</span></div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap" data-v-b931477f><span class="${ssrRenderClass([((_w = (_v = unref(dashboardData)) == null ? void 0 : _v.actionItems) == null ? void 0 : _w.lowStockCards) ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold" : "bg-gray-100 dark:bg-white/5 text-gray-500", "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium"])}" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: ((_y = (_x = unref(dashboardData)) == null ? void 0 : _x.actionItems) == null ? void 0 : _y.lowStockCards) ? "ph:warning-bold" : "ph:check-bold",
        class: "w-3 h-3"
      }, null, _parent));
      _push(` ${ssrInterpolate(((_A = (_z = unref(dashboardData)) == null ? void 0 : _z.actionItems) == null ? void 0 : _A.lowStockCards) ? `${unref(dashboardData).actionItems.lowStockCards} \u6B3E\u5361\u5BC6\u5E93\u5B58\u504F\u4F4E` : "\u6240\u6709\u5361\u5BC6\u5E93\u5B58\u5145\u8DB3")}</span></div></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 text-[11px] text-gray-400 flex justify-between items-center" data-v-b931477f><span data-v-b931477f>\u5546\u54C1\u6301\u7EED\u4F9B\u8D27</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products?tab=cards",
        class: "text-primary-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5361\u5BC6\u7BA1\u7406 \u2192`);
          } else {
            return [
              createTextVNode("\u5361\u5BC6\u7BA1\u7406 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-6" data-v-b931477f><div class="bg-white dark:bg-[#121214] p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs flex flex-col" data-v-b931477f><div class="flex items-center justify-between mb-8" data-v-b931477f><div data-v-b931477f><h2 class="text-base font-bold text-gray-900 dark:text-white" data-v-b931477f>${ssrInterpolate(_ctx.$t("admin.dashboard.revenueOverview", "\u8425\u6536\u4E0E\u8BA2\u5355\u8D70\u52BF"))}</h2><p class="text-xs text-gray-400 mt-0.5" data-v-b931477f>${ssrInterpolate(selectedRangeLabel.value)}\u4EA4\u6613\u6CE2\u52A8\u4E0E\u6536\u76CA\u66F2\u7EBF</p></div><div class="flex items-center gap-4" data-v-b931477f><div class="flex items-center gap-2" data-v-b931477f><div class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" data-v-b931477f></div><span class="text-xs text-gray-500 dark:text-gray-400" data-v-b931477f>\u8425\u6536 (${ssrInterpolate(((_C = (_B = unref(dashboardData)) == null ? void 0 : _B.chart) == null ? void 0 : _C.currency) || "USD")})</span></div><div class="flex items-center gap-2" data-v-b931477f><div class="w-2.5 h-2.5 rounded-full bg-purple-500" data-v-b931477f></div><span class="text-xs text-gray-500 dark:text-gray-400" data-v-b931477f>\u8BA2\u5355\u6570</span></div></div></div><div class="h-[280px] w-full relative group pb-6 flex-1" data-v-b931477f>`);
      if (svgData.value) {
        _push(`<svg class="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none" data-v-b931477f><defs data-v-b931477f><linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1" data-v-b931477f><stop offset="0%" stop-color="#10b981" stop-opacity="0.25" data-v-b931477f></stop><stop offset="100%" stop-color="#10b981" stop-opacity="0" data-v-b931477f></stop></linearGradient></defs><g stroke="#e5e7eb" class="dark:stroke-gray-800" stroke-width="0.1" stroke-dasharray="2 2" data-v-b931477f><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<line x1="0"${ssrRenderAttr("y1", TOP + (i - 1) * (HEIGHT / 4))} x2="100"${ssrRenderAttr("y2", TOP + (i - 1) * (HEIGHT / 4))} data-v-b931477f></line>`);
        });
        _push(`<!--]--></g>`);
        if (hoveredIndex.value !== null && ((_D = svgData.value) == null ? void 0 : _D.points[hoveredIndex.value])) {
          _push(`<line${ssrRenderAttr("x1", svgData.value.points[hoveredIndex.value].x)} y1="0"${ssrRenderAttr("x2", svgData.value.points[hoveredIndex.value].x)} y2="50" stroke="#9ca3af" stroke-width="0.3" stroke-dasharray="2 2" vector-effect="non-scaling-stroke" data-v-b931477f></line>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<path${ssrRenderAttr("d", svgData.value.areaPath)} fill="url(#area-gradient)" class="transition-all duration-500" data-v-b931477f></path><path${ssrRenderAttr("d", svgData.value.linePath)} fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" data-v-b931477f></path><!--[-->`);
        ssrRenderList(svgData.value.points, (point, index) => {
          _push(`<g data-v-b931477f><rect${ssrRenderAttr("x", index === 0 ? 0 : point.x - 50 / (svgData.value.points.length - 1))} y="0"${ssrRenderAttr("width", 100 / (svgData.value.points.length - 1))} height="50" fill="transparent" class="cursor-crosshair" data-v-b931477f></rect><circle${ssrRenderAttr("cx", point.x)}${ssrRenderAttr("cy", point.y)}${ssrRenderAttr("r", hoveredIndex.value === index ? 1.2 : 0.6)}${ssrRenderAttr("fill", hoveredIndex.value === index ? "#fff" : "#10b981")}${ssrRenderAttr("stroke", hoveredIndex.value === index ? "#10b981" : "#121214")} stroke-width="0.8" class="transition-all duration-200" vector-effect="non-scaling-stroke" data-v-b931477f></circle></g>`);
        });
        _push(`<!--]--></svg>`);
      } else {
        _push(`<div class="w-full h-full flex flex-col items-center justify-center text-gray-400 text-xs py-12" data-v-b931477f>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chart-line-up",
          class: "w-8 h-8 mb-2 opacity-30 text-gray-400"
        }, null, _parent));
        _push(`<span data-v-b931477f>${ssrInterpolate(unref(pending) ? "\u6B63\u5728\u52A0\u8F7D\u8D70\u52BF\u6570\u636E..." : "\u6682\u65E0\u8D70\u52BF\u6570\u636E")}</span></div>`);
      }
      if ((_G = (_F = (_E = unref(dashboardData)) == null ? void 0 : _E.chart) == null ? void 0 : _F.labels) == null ? void 0 : _G.length) {
        _push(`<div class="absolute bottom-0 left-0 w-full flex justify-between pb-2" data-v-b931477f><!--[-->`);
        ssrRenderList(unref(dashboardData).chart.labels, (label, i) => {
          _push(`<span class="text-[10px] font-mono text-gray-400 whitespace-nowrap absolute transform -translate-x-1/2" style="${ssrRenderStyle({ left: `${Number(i) / (unref(dashboardData).chart.labels.length - 1) * 100}%` })}" data-v-b931477f>`);
          if (shouldShowXLabel(i, unref(dashboardData).chart.labels.length)) {
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
      if (hoveredIndex.value !== null && ((_H = unref(dashboardData)) == null ? void 0 : _H.chart)) {
        _push(`<div class="absolute z-30 bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700/50 rounded-xl p-3.5 shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3" style="${ssrRenderStyle({
          left: ((_J = (_I = svgData.value) == null ? void 0 : _I.points[hoveredIndex.value]) == null ? void 0 : _J.x) + "%",
          top: `${((_L = (_K = svgData.value) == null ? void 0 : _K.points[hoveredIndex.value]) == null ? void 0 : _L.y) / 50 * 100}%`
        })}" data-v-b931477f><div class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 dark:border-gray-800 pb-1.5" data-v-b931477f>${ssrInterpolate(unref(dashboardData).chart.labels[hoveredIndex.value])}</div><div class="space-y-1.5 min-w-[130px]" data-v-b931477f><div class="flex items-center justify-between gap-3" data-v-b931477f><span class="text-xs text-gray-500" data-v-b931477f>\u8425\u6536:</span><span class="text-xs font-bold text-emerald-600 dark:text-emerald-400" data-v-b931477f>${ssrInterpolate(unref(formatCurrencyAmount)(unref(dashboardData).chart.revenue[hoveredIndex.value], unref(dashboardData).chart.currency))}</span></div><div class="flex items-center justify-between gap-3" data-v-b931477f><span class="text-xs text-gray-500" data-v-b931477f>\u8BA2\u5355\u6570:</span><span class="text-xs font-bold text-purple-600 dark:text-purple-400" data-v-b931477f>${ssrInterpolate(unref(dashboardData).chart.orders[hoveredIndex.value])} \u7B14 </span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-white dark:bg-[#121214] p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs flex flex-col justify-between" data-v-b931477f><div data-v-b931477f><div class="flex items-center justify-between mb-4" data-v-b931477f><h2 class="text-base font-bold text-gray-900 dark:text-white" data-v-b931477f>\u4E1A\u52A1\u54C1\u7C7B\u6784\u6210</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products",
        class: "text-xs text-primary-600 hover:text-primary-700 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7BA1\u7406\u5546\u54C1 `);
          } else {
            return [
              createTextVNode(" \u7BA1\u7406\u5546\u54C1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-xs text-gray-400 mb-6" data-v-b931477f>\u5404\u4E1A\u52A1\u7C7B\u578B\u5B9E\u6536\u4E0E\u8BA2\u5355\u5360\u6BD4\u5206\u5E03</p><div class="space-y-4" data-v-b931477f><!--[-->`);
      ssrRenderList(productMixDisplay.value, (item) => {
        var _a2, _b2;
        _push(`<div class="space-y-1.5" data-v-b931477f><div class="flex items-center justify-between text-xs" data-v-b931477f><span class="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5" data-v-b931477f>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: ["w-3.5 h-3.5", item.iconClass]
        }, null, _parent));
        _push(` ${ssrInterpolate(item.name)}</span><span class="text-gray-500 font-mono" data-v-b931477f>${ssrInterpolate(item.count)} \u7B14 \xB7 ${ssrInterpolate(unref(formatCurrencyAmount)(item.amount, (_b2 = (_a2 = unref(dashboardData)) == null ? void 0 : _a2.stats) == null ? void 0 : _b2.currency))}</span></div><div class="h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden" data-v-b931477f><div class="${ssrRenderClass([item.barClass, "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${item.percentage}%` })}" data-v-b931477f></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800/60 grid grid-cols-2 gap-2" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products?tab=cards",
        class: "flex items-center gap-2 p-2.5 rounded-xl border border-gray-200/60 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 hover:border-purple-500/40 transition text-xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:barcode-bold",
              class: "w-4 h-4 text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-medium text-gray-700 dark:text-gray-300" data-v-b931477f${_scopeId}>\u5361\u5BC6\u5E93\u5B58</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:barcode-bold",
                class: "w-4 h-4 text-purple-500"
              }),
              createVNode("span", { class: "font-medium text-gray-700 dark:text-gray-300" }, "\u5361\u5BC6\u5E93\u5B58")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products?tab=subscriptions",
        class: "flex items-center gap-2 p-2.5 rounded-xl border border-gray-200/60 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5 hover:border-blue-500/40 transition text-xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:calendar-check-bold",
              class: "w-4 h-4 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-medium text-gray-700 dark:text-gray-300" data-v-b931477f${_scopeId}>\u8BA2\u9605\u8BA1\u5212</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:calendar-check-bold",
                class: "w-4 h-4 text-blue-500"
              }),
              createVNode("span", { class: "font-medium text-gray-700 dark:text-gray-300" }, "\u8BA2\u9605\u8BA1\u5212")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-1 xl:grid-cols-[1fr_1.6fr] gap-6" data-v-b931477f><div class="bg-white dark:bg-[#121214] p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs flex flex-col" data-v-b931477f><div class="flex items-center justify-between mb-4" data-v-b931477f><h2 class="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:bell-ringing-bold",
        class: "w-4 h-4 text-primary-500"
      }, null, _parent));
      _push(` \u8FD0\u8425\u5F85\u529E\u4E0E\u9884\u8B66 </h2>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: hasActionItems.value ? "warning" : "success",
        variant: "subtle",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(hasActionItems.value ? "\u9700\u8981\u5173\u6CE8" : "\u72B6\u6001\u826F\u597D")}`);
          } else {
            return [
              createTextVNode(toDisplayString(hasActionItems.value ? "\u9700\u8981\u5173\u6CE8" : "\u72B6\u6001\u826F\u597D"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-xs text-gray-400 mb-5" data-v-b931477f>\u96C6\u4E2D\u5904\u7F6E\u5F85\u53D1\u8D27\u3001\u5361\u5BC6\u4E0D\u8DB3\u4E0E\u5145\u503C\u5F02\u5E38</p><div class="space-y-3 flex-1" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: ["flex items-center justify-between p-3.5 rounded-xl border transition", ((_N = (_M = unref(dashboardData)) == null ? void 0 : _M.actionItems) == null ? void 0 : _N.pendingFulfillments) ? "border-amber-500/40 bg-amber-50/40 dark:bg-amber-950/20 hover:border-amber-500" : "border-gray-200/60 dark:border-gray-800/50 bg-gray-50/30 dark:bg-white/5"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
          if (_push2) {
            _push2(`<div class="flex items-center gap-3" data-v-b931477f${_scopeId}><div class="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400" data-v-b931477f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:truck-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-b931477f${_scopeId}><div class="text-xs font-semibold text-gray-900 dark:text-white" data-v-b931477f${_scopeId}>\u5F85\u5C65\u7EA6\u53D1\u8D27\u8BA2\u5355</div><div class="text-[11px] text-gray-400" data-v-b931477f${_scopeId}>\u5DF2\u4ED8\u6B3E\u5F85\u5904\u7406\u8BA2\u5355</div></div></div><span class="${ssrRenderClass([((_b2 = (_a2 = unref(dashboardData)) == null ? void 0 : _a2.actionItems) == null ? void 0 : _b2.pendingFulfillments) ? "text-amber-600 dark:text-amber-400" : "text-gray-400", "text-sm font-bold font-mono"])}" data-v-b931477f${_scopeId}>${ssrInterpolate(((_d2 = (_c2 = unref(dashboardData)) == null ? void 0 : _c2.actionItems) == null ? void 0 : _d2.pendingFulfillments) || 0)}</span>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("div", { class: "p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:truck-bold",
                    class: "w-4 h-4"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-xs font-semibold text-gray-900 dark:text-white" }, "\u5F85\u5C65\u7EA6\u53D1\u8D27\u8BA2\u5355"),
                  createVNode("div", { class: "text-[11px] text-gray-400" }, "\u5DF2\u4ED8\u6B3E\u5F85\u5904\u7406\u8BA2\u5355")
                ])
              ]),
              createVNode("span", {
                class: ["text-sm font-bold font-mono", ((_f2 = (_e2 = unref(dashboardData)) == null ? void 0 : _e2.actionItems) == null ? void 0 : _f2.pendingFulfillments) ? "text-amber-600 dark:text-amber-400" : "text-gray-400"]
              }, toDisplayString(((_h2 = (_g2 = unref(dashboardData)) == null ? void 0 : _g2.actionItems) == null ? void 0 : _h2.pendingFulfillments) || 0), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/products?tab=cards",
        class: ["flex items-center justify-between p-3.5 rounded-xl border transition", ((_P = (_O = unref(dashboardData)) == null ? void 0 : _O.actionItems) == null ? void 0 : _P.lowStockCards) ? "border-red-500/40 bg-red-50/40 dark:bg-red-950/20 hover:border-red-500" : "border-gray-200/60 dark:border-gray-800/50 bg-gray-50/30 dark:bg-white/5"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
          if (_push2) {
            _push2(`<div class="flex items-center gap-3" data-v-b931477f${_scopeId}><div class="p-2 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400" data-v-b931477f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-b931477f${_scopeId}><div class="text-xs font-semibold text-gray-900 dark:text-white" data-v-b931477f${_scopeId}>\u5361\u5BC6\u5E93\u5B58\u9884\u8B66</div><div class="text-[11px] text-gray-400" data-v-b931477f${_scopeId}>\u53EF\u7528\u5E93\u5B58 \u2264 3 \u6761\u7684\u5361\u5BC6\u5546\u54C1</div></div></div><span class="${ssrRenderClass([((_b2 = (_a2 = unref(dashboardData)) == null ? void 0 : _a2.actionItems) == null ? void 0 : _b2.lowStockCards) ? "text-red-600 dark:text-red-400" : "text-gray-400", "text-sm font-bold font-mono"])}" data-v-b931477f${_scopeId}>${ssrInterpolate(((_d2 = (_c2 = unref(dashboardData)) == null ? void 0 : _c2.actionItems) == null ? void 0 : _d2.lowStockCards) || 0)}</span>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("div", { class: "p-2 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:warning-bold",
                    class: "w-4 h-4"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-xs font-semibold text-gray-900 dark:text-white" }, "\u5361\u5BC6\u5E93\u5B58\u9884\u8B66"),
                  createVNode("div", { class: "text-[11px] text-gray-400" }, "\u53EF\u7528\u5E93\u5B58 \u2264 3 \u6761\u7684\u5361\u5BC6\u5546\u54C1")
                ])
              ]),
              createVNode("span", {
                class: ["text-sm font-bold font-mono", ((_f2 = (_e2 = unref(dashboardData)) == null ? void 0 : _e2.actionItems) == null ? void 0 : _f2.lowStockCards) ? "text-red-600 dark:text-red-400" : "text-gray-400"]
              }, toDisplayString(((_h2 = (_g2 = unref(dashboardData)) == null ? void 0 : _g2.actionItems) == null ? void 0 : _h2.lowStockCards) || 0), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/tickets",
        class: ["flex items-center justify-between p-3.5 rounded-xl border transition", ((_R = (_Q = unref(dashboardData)) == null ? void 0 : _Q.actionItems) == null ? void 0 : _R.pendingTickets) ? "border-blue-500/40 bg-blue-50/40 dark:bg-blue-950/20 hover:border-blue-500" : "border-gray-200/60 dark:border-gray-800/50 bg-gray-50/30 dark:bg-white/5"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
          if (_push2) {
            _push2(`<div class="flex items-center gap-3" data-v-b931477f${_scopeId}><div class="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400" data-v-b931477f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:ticket-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-b931477f${_scopeId}><div class="text-xs font-semibold text-gray-900 dark:text-white" data-v-b931477f${_scopeId}>${ssrInterpolate(_ctx.$t("admin.dashboard.pendingTickets", "\u5F85\u56DE\u590D\u5BA2\u670D\u5DE5\u5355"))}</div><div class="text-[11px] text-gray-400" data-v-b931477f${_scopeId}>${ssrInterpolate(_ctx.$t("admin.dashboard.pendingTicketsDesc", "\u4E70\u5BB6\u53D1\u8D77\u7684\u552E\u540E\u54A8\u8BE2\u4E0E\u6C42\u52A9"))}</div></div></div><span class="${ssrRenderClass([((_b2 = (_a2 = unref(dashboardData)) == null ? void 0 : _a2.actionItems) == null ? void 0 : _b2.pendingTickets) ? "text-blue-600 dark:text-blue-400" : "text-gray-400", "text-sm font-bold font-mono"])}" data-v-b931477f${_scopeId}>${ssrInterpolate(((_d2 = (_c2 = unref(dashboardData)) == null ? void 0 : _c2.actionItems) == null ? void 0 : _d2.pendingTickets) || 0)}</span>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("div", { class: "p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:ticket-bold",
                    class: "w-4 h-4"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-xs font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("admin.dashboard.pendingTickets", "\u5F85\u56DE\u590D\u5BA2\u670D\u5DE5\u5355")), 1),
                  createVNode("div", { class: "text-[11px] text-gray-400" }, toDisplayString(_ctx.$t("admin.dashboard.pendingTicketsDesc", "\u4E70\u5BB6\u53D1\u8D77\u7684\u552E\u540E\u54A8\u8BE2\u4E0E\u6C42\u52A9")), 1)
                ])
              ]),
              createVNode("span", {
                class: ["text-sm font-bold font-mono", ((_f2 = (_e2 = unref(dashboardData)) == null ? void 0 : _e2.actionItems) == null ? void 0 : _f2.pendingTickets) ? "text-blue-600 dark:text-blue-400" : "text-gray-400"]
              }, toDisplayString(((_h2 = (_g2 = unref(dashboardData)) == null ? void 0 : _g2.actionItems) == null ? void 0 : _h2.pendingTickets) || 0), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders?tab=topups",
        class: ["flex items-center justify-between p-3.5 rounded-xl border transition", ((_T = (_S = unref(dashboardData)) == null ? void 0 : _S.actionItems) == null ? void 0 : _T.pendingTopups) ? "border-purple-500/40 bg-purple-50/40 dark:bg-purple-950/20 hover:border-purple-500" : "border-gray-200/60 dark:border-gray-800/50 bg-gray-50/30 dark:bg-white/5"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
          if (_push2) {
            _push2(`<div class="flex items-center gap-3" data-v-b931477f${_scopeId}><div class="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400" data-v-b931477f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:wallet-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-b931477f${_scopeId}><div class="text-xs font-semibold text-gray-900 dark:text-white" data-v-b931477f${_scopeId}>\u5145\u503C\u5F85\u8865\u5355/\u5F85\u5BA1</div><div class="text-[11px] text-gray-400" data-v-b931477f${_scopeId}>\u9700\u8981\u4EBA\u5DE5\u91CD\u8BD5\u6216\u6838\u5BF9\u7684\u5145\u503C\u6D41\u6C34</div></div></div><span class="${ssrRenderClass([((_b2 = (_a2 = unref(dashboardData)) == null ? void 0 : _a2.actionItems) == null ? void 0 : _b2.pendingTopups) ? "text-purple-600 dark:text-purple-400" : "text-gray-400", "text-sm font-bold font-mono"])}" data-v-b931477f${_scopeId}>${ssrInterpolate(((_d2 = (_c2 = unref(dashboardData)) == null ? void 0 : _c2.actionItems) == null ? void 0 : _d2.pendingTopups) || 0)}</span>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("div", { class: "p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:wallet-bold",
                    class: "w-4 h-4"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "text-xs font-semibold text-gray-900 dark:text-white" }, "\u5145\u503C\u5F85\u8865\u5355/\u5F85\u5BA1"),
                  createVNode("div", { class: "text-[11px] text-gray-400" }, "\u9700\u8981\u4EBA\u5DE5\u91CD\u8BD5\u6216\u6838\u5BF9\u7684\u5145\u503C\u6D41\u6C34")
                ])
              ]),
              createVNode("span", {
                class: ["text-sm font-bold font-mono", ((_f2 = (_e2 = unref(dashboardData)) == null ? void 0 : _e2.actionItems) == null ? void 0 : _f2.pendingTopups) ? "text-purple-600 dark:text-purple-400" : "text-gray-400"]
              }, toDisplayString(((_h2 = (_g2 = unref(dashboardData)) == null ? void 0 : _g2.actionItems) == null ? void 0 : _h2.pendingTopups) || 0), 3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between" data-v-b931477f><span class="text-xs text-gray-400" data-v-b931477f>\u5FEB\u6377\u64CD\u4F5C</span><div class="flex items-center gap-3" data-v-b931477f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/tickets",
        class: "text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5DE5\u5355\u5904\u7406 \u2192`);
          } else {
            return [
              createTextVNode("\u5DE5\u5355\u5904\u7406 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: "text-xs text-primary-600 hover:text-primary-700 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u8BA2\u5355\u7BA1\u7406 \u2192`);
          } else {
            return [
              createTextVNode("\u8BA2\u5355\u7BA1\u7406 \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="bg-white dark:bg-[#121214] p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs flex flex-col" data-v-b931477f><div class="flex items-center justify-between mb-4" data-v-b931477f><div data-v-b931477f><h2 class="text-base font-bold text-gray-900 dark:text-white" data-v-b931477f>${ssrInterpolate(unref(t)("admin.dashboard.recentTransactions"))}</h2><p class="text-xs text-gray-400 mt-0.5" data-v-b931477f>${ssrInterpolate(unref(t)("admin.dashboard.recentTransactionsDesc"))}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: "text-xs text-primary-600 hover:text-primary-700 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("admin.dashboard.viewAllOrders"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("admin.dashboard.viewAllOrders")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 overflow-x-auto" data-v-b931477f><table class="w-full text-xs" data-v-b931477f><thead data-v-b931477f><tr class="border-b border-gray-100 dark:border-gray-800/80 text-left text-gray-400 font-medium" data-v-b931477f><th class="py-2.5 pr-3" data-v-b931477f>${ssrInterpolate(unref(t)("admin.dashboard.orderAndCustomer"))}</th><th class="py-2.5 pr-3" data-v-b931477f>${ssrInterpolate(unref(t)("admin.orders.amount"))}</th><th class="py-2.5 pr-3" data-v-b931477f>${ssrInterpolate(unref(t)("admin.orders.payStatus"))}</th><th class="py-2.5 pr-3" data-v-b931477f>${ssrInterpolate(unref(t)("admin.orders.fulfillment_label"))}</th><th class="py-2.5 text-right" data-v-b931477f>${ssrInterpolate(unref(t)("admin.orders.date"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/50" data-v-b931477f><!--[-->`);
      ssrRenderList(((_U = unref(dashboardData)) == null ? void 0 : _U.recentOrders) || [], (order) => {
        _push(`<tr class="hover:bg-gray-50/60 dark:hover:bg-white/5 transition" data-v-b931477f><td class="py-2.5 pr-3" data-v-b931477f><div class="font-mono font-medium text-gray-900 dark:text-white truncate max-w-[140px]" data-v-b931477f>${ssrInterpolate(order.id)}</div><div class="text-[10px] text-gray-400 truncate max-w-[140px]" data-v-b931477f>${ssrInterpolate(order.contactEmail || unref(t)("admin.dashboard.anonymousOrder"))}</div></td><td class="py-2.5 pr-3 whitespace-nowrap" data-v-b931477f><span class="font-semibold text-gray-900 dark:text-white" data-v-b931477f>${ssrInterpolate(unref(formatCurrencyAmount)(order.amount, order.currency))}</span></td><td class="py-2.5 pr-3 whitespace-nowrap" data-v-b931477f>`);
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
        _push(`</td><td class="py-2.5 pr-3 whitespace-nowrap" data-v-b931477f>`);
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
        _push(`</td><td class="py-2.5 text-right whitespace-nowrap text-gray-400 text-[11px]" data-v-b931477f>${ssrInterpolate(unref(formatDateTime)(order.createdAt))}</td></tr>`);
      });
      _push(`<!--]-->`);
      if (!((_W = (_V = unref(dashboardData)) == null ? void 0 : _V.recentOrders) == null ? void 0 : _W.length)) {
        _push(`<tr data-v-b931477f><td colspan="5" class="py-8 text-center text-gray-400" data-v-b931477f>${ssrInterpolate(unref(t)("admin.dashboard.noOrderData"))}</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b931477f"]]);

export { dashboard as default };
