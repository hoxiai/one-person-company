import { r as useRouter, u as useI18n, H as useRoute, y as useFetch, i as useConfirm, b as useAdminPermissions, d as _sfc_main$T, S as PageRequestError, P as _export_sfc, a as useToast, j as _sfc_main$Y, O as __nuxt_component_3$3, _ as _sfc_main$O, g as _sfc_main$A } from './server.mjs';
import { defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, isRef, createVNode, withModifiers, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$5 } from './Tooltip-D5fmsta9.mjs';
import { g as getVisitorStatsCopy, f as formatStatsNumber, a as formatStatsPercent, b as getStatsTrendWidth, c as getSafeExternalUrl, d as formatExternalUrlLabel, e as getSafeInternalPath } from './visitorStatsCopy-Ds0fUucV.mjs';
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
import './Kbd-Btx37SrR.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "OverviewCardsGrid",
  __ssrInlineRender: true,
  props: {
    overviewCards: {},
    overview: {},
    formatNumber: { type: Function },
    formatPercent: { type: Function }
  },
  emits: ["cardClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const primaryThreeCards = computed(() => props.overviewCards.slice(0, 3));
    const hasCommerceFunnel = computed(() => {
      const ov = props.overview;
      return Boolean(((ov == null ? void 0 : ov.paidVisitors) || 0) > 0 || ((ov == null ? void 0 : ov.checkoutVisitors) || 0) > 0 || ((ov == null ? void 0 : ov.productVisitors) || 0) > 0);
    });
    const externalSharePercent = computed(() => {
      var _a, _b;
      const uv = Number(((_a = props.overview) == null ? void 0 : _a.uniqueVisitors) || 0);
      const ext = Number(((_b = props.overview) == null ? void 0 : _b.externalVisitors) || 0);
      return props.formatPercent(uv > 0 ? Number((ext / uv * 100).toFixed(1)) : 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_UTooltip = _sfc_main$5;
      const _component_UIcon = _sfc_main$Y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6" }, _attrs))}><!--[-->`);
      ssrRenderList(primaryThreeCards.value, (card) => {
        _push(`<div class="bg-white dark:bg-[#121214] p-4.5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs transition-all flex flex-col justify-between cursor-pointer hover:border-purple-500/50"><div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-1.5 min-w-0"><span class="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">${ssrInterpolate(card.label)}</span>`);
        if (card.tip) {
          _push(ssrRenderComponent(_component_UTooltip, {
            text: card.tip,
            "delay-duration": 150
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button type="button" class="inline-flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors focus:outline-none"${ssrRenderAttr("title", card.tip)}${ssrRenderAttr("aria-label", card.tip)}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:info",
                  class: "w-3.5 h-3.5 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                return [
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors focus:outline-none",
                    title: card.tip,
                    "aria-label": card.tip,
                    onClick: withModifiers(() => {
                    }, ["stop"])
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:info",
                      class: "w-3.5 h-3.5 shrink-0"
                    })
                  ], 8, ["title", "aria-label", "onClick"])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="p-2 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: ["w-4 h-4 shrink-0", card.iconClass]
        }, null, _parent));
        _push(`</div></div><div class="mt-2.5 flex items-baseline justify-between gap-2 flex-wrap"><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight tabular-nums">${ssrInterpolate(card.value)}</div>`);
        if (card.comparison) {
          _push(`<span class="${ssrRenderClass([card.comparison.trend === "up" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : card.comparison.trend === "down" ? "bg-rose-500/10 text-rose-600 dark:text-rose-400" : "bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400", "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold tabular-nums"])}">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: card.comparison.trend === "up" ? "ph:trend-up-bold" : card.comparison.trend === "down" ? "ph:trend-down-bold" : "ph:minus-bold",
            class: "w-3 h-3 shrink-0"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(card.comparison.badgeText)}</span></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (card.comparison) {
          _push(`<div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 space-y-1 text-[11px] tabular-nums"><div class="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5"><span class="text-gray-500 dark:text-gray-400">${ssrInterpolate(card.comparison.primaryLabel)} <span class="font-medium text-gray-700 dark:text-gray-200">${ssrInterpolate(card.comparison.primaryValue)}</span></span>`);
          if (card.comparison.secondaryLabel) {
            _push(`<span class="text-gray-400 dark:text-gray-500">${ssrInterpolate(card.comparison.secondaryLabel)} <span class="font-medium text-gray-600 dark:text-gray-300">${ssrInterpolate(card.comparison.secondaryValue)}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (card.comparison.forecastLabel) {
            _push(`<div class="flex items-center justify-between"><span class="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle",
              class: "w-3 h-3 text-purple-500 dark:text-purple-400 shrink-0"
            }, null, _parent));
            _push(` ${ssrInterpolate(card.comparison.forecastLabel)}</span><span class="font-semibold text-purple-600 dark:text-purple-400">${ssrInterpolate(card.comparison.forecastValue)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="bg-white dark:bg-[#121214] p-4.5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs transition-all flex flex-col justify-between cursor-pointer hover:border-emerald-500/50"><div><div class="flex items-center justify-between gap-2"><span class="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">${ssrInterpolate(hasCommerceFunnel.value ? unref(t)("admin.stats.paidVisitors", "\u4ED8\u8D39\u8F6C\u5316\u4E0E\u83B7\u5BA2") : unref(t)("admin.stats.externalVisitors", "\u5916\u90E8\u5F15\u6D41\u4E0E\u4E92\u52A8"))}</span><div class="${ssrRenderClass([hasCommerceFunnel.value ? "bg-emerald-500/10 text-emerald-500" : "bg-sky-500/10 text-sky-500", "p-2 rounded-xl flex items-center justify-center"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: hasCommerceFunnel.value ? "ph:funnel-bold" : "ph:share-network-bold",
        class: "w-4 h-4 shrink-0"
      }, null, _parent));
      _push(`</div></div><div class="mt-2.5 flex items-baseline justify-between gap-2 flex-wrap">`);
      if (hasCommerceFunnel.value) {
        _push(`<!--[--><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight tabular-nums flex items-baseline gap-1.5">${ssrInterpolate(__props.formatNumber(((_a = __props.overview) == null ? void 0 : _a.paidVisitors) || 0))} <span class="text-xs font-normal text-gray-400">\u4ED8\u8D39\u8BBF\u5BA2</span></div><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"> \u8F6C\u5316\u7387 ${ssrInterpolate(__props.formatPercent(((_b = __props.overview) == null ? void 0 : _b.conversionRate) || 0))}</span><!--]-->`);
      } else {
        _push(`<!--[--><div class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight tabular-nums flex items-baseline gap-1.5">${ssrInterpolate(__props.formatNumber(((_c = __props.overview) == null ? void 0 : _c.externalVisitors) || 0))} <span class="text-xs font-normal text-gray-400">\u5916\u90E8\u6765\u6E90 UV</span></div><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400"> \u5360\u6BD4 ${ssrInterpolate(externalSharePercent.value)}</span><!--]-->`);
      }
      _push(`</div><div class="mt-2.5 flex items-center gap-1.5 flex-wrap"><span role="link" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-sky-500/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 transition-colors">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:share-network-bold",
        class: "w-3 h-3 text-sky-500"
      }, null, _parent));
      _push(` \u5916\u94FE ${ssrInterpolate(__props.formatNumber(((_d = __props.overview) == null ? void 0 : _d.externalVisitors) || 0))}</span><span role="link" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-pink-500/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 transition-colors">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sign-in-bold",
        class: "w-3 h-3 text-pink-500"
      }, null, _parent));
      _push(` \u767B\u5F55/\u6CE8\u518C ${ssrInterpolate(__props.formatNumber(((_e = __props.overview) == null ? void 0 : _e.authVisitors) || 0))}</span>`);
      if ((((_f = __props.overview) == null ? void 0 : _f.campaignVisitors) || 0) > 0 || !hasCommerceFunnel.value) {
        _push(`<span role="link" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-rose-500/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 transition-colors">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:megaphone-bold",
          class: "w-3 h-3 text-rose-500"
        }, null, _parent));
        _push(` \u6D3B\u52A8 ${ssrInterpolate(__props.formatNumber(((_g = __props.overview) == null ? void 0 : _g.campaignVisitors) || 0))}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (hasCommerceFunnel.value) {
        _push(`<span role="link" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-amber-500/10 text-[11px] font-medium text-gray-700 dark:text-gray-300 transition-colors">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:shopping-cart-simple-bold",
          class: "w-3 h-3 text-amber-500"
        }, null, _parent));
        _push(` \u7ED3\u8D26 ${ssrInterpolate(__props.formatNumber(((_h = __props.overview) == null ? void 0 : _h.checkoutVisitors) || 0))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-[11px] text-gray-400">`);
      if (hasCommerceFunnel.value) {
        _push(`<span> \u5546\u54C1\u6D4F\u89C8: <strong class="text-gray-700 dark:text-gray-200 font-mono">${ssrInterpolate(__props.formatNumber(((_i = __props.overview) == null ? void 0 : _i.productVisitors) || 0))}</strong> \u4EBA </span>`);
      } else {
        _push(`<span> \u65B0\u6CE8\u518C\u8BBF\u5BA2: <strong class="text-gray-700 dark:text-gray-200 font-mono">${ssrInterpolate(__props.formatNumber(((_j = __props.overview) == null ? void 0 : _j.registerVisitors) || 0))}</strong> \u4EBA </span>`);
      }
      _push(`<span class="text-purple-600 dark:text-purple-400 hover:underline">\u67E5\u770B\u660E\u7EC6 \u2192</span></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/OverviewCardsGrid.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const StatsOverviewCardsGrid = Object.assign(_sfc_main$4, { __name: "AdminStatsOverviewCardsGrid" });
const buildCardComparisonView = (metric, comparisons, translate, formatNumber, formatPercent) => {
  var _a;
  if (!metric || typeof metric !== "object") return null;
  const current = Number(metric.current || 0);
  const previous = Number(metric.previous || 0);
  const delta = Number((_a = metric.delta) != null ? _a : current - previous);
  const trend = metric.trend === "up" || metric.trend === "down" || metric.trend === "flat" ? metric.trend : delta > 0 ? "up" : delta < 0 ? "down" : "flat";
  const deltaText = delta > 0 ? `+${formatNumber(delta)}` : delta < 0 ? `-${formatNumber(Math.abs(delta))}` : "0";
  const newLabel = translate("admin.stats.newGrowth");
  const badgeText = metric.deltaPercent === null || previous === 0 && current > 0 ? `${newLabel} +${formatNumber(current)}` : delta > 0 ? `+${formatPercent(metric.deltaPercent)}` : delta < 0 ? `${formatPercent(metric.deltaPercent)}` : "0.0%";
  const mode = String((comparisons == null ? void 0 : comparisons.mode) || "yesterday_same_time");
  const days = Number((comparisons == null ? void 0 : comparisons.days) || 1);
  const primaryLabel = mode === "yesterday_same_time" ? translate("admin.stats.vsYesterdaySameTime") : mode === "day_before_yesterday" ? translate("admin.stats.vsDayBeforeYesterday") : translate("admin.stats.vsPreviousDays").replace("{days}", String(days || 7));
  const primaryValue = `${formatNumber(previous)} (${deltaText})`;
  if (mode === "yesterday_same_time" && typeof metric.fullDay === "number") {
    const fullDay = Number(metric.fullDay || 0);
    const predicted = typeof metric.predictedFullDay === "number" ? Number(metric.predictedFullDay) : previous > 0 ? Math.max(current, Math.round(fullDay * (current / previous))) : current + fullDay;
    return {
      trend,
      badgeText,
      deltaText,
      primaryLabel,
      primaryValue,
      secondaryLabel: translate("admin.stats.yesterdayFullDay"),
      secondaryValue: formatNumber(fullDay),
      forecastLabel: translate("admin.stats.predictedToday"),
      forecastValue: `~${formatNumber(predicted)}`
    };
  }
  return {
    trend,
    badgeText,
    deltaText,
    primaryLabel,
    primaryValue
  };
};
const modalDefinitions = {
  pageViews: { titleKey: "admin.stats.pageViewsModalTitle", source: "visitors", eventType: "page_view" },
  pageVisits: { titleKey: "admin.stats.pageVisitsModalTitle", source: "pageVisits" },
  uniqueVisitors: { titleKey: "admin.stats.uniqueVisitorsModalTitle", source: "visitors" },
  todayIp: { titleKey: "admin.stats.todayIpModalTitle", source: "events" },
  productVisitors: { titleKey: "admin.stats.productVisitorsModalTitle", source: "visitors", eventType: "product_view" },
  checkoutVisitors: { titleKey: "admin.stats.checkoutVisitorsModalTitle", source: "visitors", eventType: "begin_checkout" },
  paidVisitors: { titleKey: "admin.stats.paidVisitorsModalTitle", source: "visitors", eventType: "order_paid" },
  authVisitors: { titleKey: "admin.stats.authVisitorsModalTitle", source: "visitors", eventType: "auth" },
  externalVisitors: { titleKey: "admin.stats.externalVisitorsModalTitle", source: "visitors", sourceType: "external" },
  campaignVisitors: { titleKey: "admin.stats.campaignVisitorsModalTitle", source: "visitors", sourceType: "campaign" }
};
const resolveStatsModal = (key, translate) => {
  const definition = modalDefinitions[key];
  if (!definition) return null;
  return {
    title: translate(definition.titleKey),
    source: definition.source,
    eventType: definition.eventType || "",
    sourceType: definition.sourceType || ""
  };
};
const buildStatsOverviewCards = (overview, translate, formatNumber, formatPercent) => {
  var _a;
  const comparisons = overview == null ? void 0 : overview.comparisons;
  return [
    {
      label: translate("admin.stats.pageViews"),
      value: formatNumber(overview.pageViews),
      icon: "ph:chart-line-up",
      iconClass: "text-cyan-400",
      tip: translate("admin.stats.pageVisitsTip"),
      clickable: true,
      modalKey: "pageVisits",
      comparison: buildCardComparisonView(comparisons == null ? void 0 : comparisons.pageViews, comparisons, translate, formatNumber, formatPercent)
    },
    {
      label: translate("admin.stats.uniqueVisitors"),
      value: formatNumber(overview.uniqueVisitors),
      icon: "ph:users",
      iconClass: "text-purple-400",
      tip: translate("admin.stats.uniqueVisitorsTip"),
      clickable: true,
      modalKey: "uniqueVisitors",
      comparison: buildCardComparisonView(comparisons == null ? void 0 : comparisons.uniqueVisitors, comparisons, translate, formatNumber, formatPercent)
    },
    {
      label: translate("admin.stats.todayVisitors"),
      value: formatNumber((_a = overview.uniqueIps) != null ? _a : overview.todayVisitors),
      icon: "ph:globe",
      iconClass: "text-amber-400",
      tip: translate("admin.stats.todayVisitorsTip"),
      clickable: true,
      modalKey: "todayIp",
      comparison: buildCardComparisonView(comparisons == null ? void 0 : comparisons.uniqueIps, comparisons, translate, formatNumber, formatPercent)
    },
    {
      label: translate("admin.stats.productVisitors"),
      value: formatNumber(overview.productVisitors),
      icon: "ph:package",
      iconClass: "text-blue-400",
      tip: translate("admin.stats.productVisitorsTip"),
      clickable: true,
      modalKey: "productVisitors",
      comparison: null
    },
    {
      label: translate("admin.stats.checkoutVisitors"),
      value: formatNumber(overview.checkoutVisitors),
      icon: "ph:shopping-cart-simple",
      iconClass: "text-orange-400",
      tip: translate("admin.stats.checkoutVisitorsTip"),
      clickable: true,
      modalKey: "checkoutVisitors",
      comparison: null
    },
    {
      label: translate("admin.stats.paidVisitors"),
      value: formatNumber(overview.paidVisitors),
      icon: "ph:credit-card",
      iconClass: "text-emerald-400",
      tip: translate("admin.stats.paidVisitorsTip"),
      clickable: true,
      modalKey: "paidVisitors",
      comparison: null
    },
    {
      label: translate("admin.stats.authVisitors"),
      value: formatNumber(overview.authVisitors),
      icon: "ph:sign-in",
      iconClass: "text-pink-400",
      tip: translate("admin.stats.authVisitorsTip"),
      clickable: true,
      modalKey: "authVisitors",
      comparison: null
    },
    {
      label: translate("admin.stats.externalVisitors"),
      value: formatNumber(overview.externalVisitors),
      icon: "ph:share-network",
      iconClass: "text-sky-400",
      tip: translate("admin.stats.externalVisitorsTip"),
      clickable: true,
      modalKey: "externalVisitors",
      comparison: null
    },
    {
      label: translate("admin.stats.campaignVisitors"),
      value: formatNumber(overview.campaignVisitors),
      icon: "ph:megaphone",
      iconClass: "text-rose-400",
      tip: translate("admin.stats.campaignVisitorsTip"),
      clickable: true,
      modalKey: "campaignVisitors",
      comparison: null
    },
    {
      label: translate("admin.stats.conversionRate"),
      value: formatPercent(overview.conversionRate),
      icon: "ph:funnel",
      iconClass: "text-green-400",
      tip: translate("admin.stats.conversionRateTip"),
      clickable: false,
      modalKey: "",
      comparison: null
    }
  ];
};
const STATS_CHART_TOP = 8;
const STATS_CHART_HEIGHT = 38;
const buildSmoothSvgPath = (points) => {
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
const buildStatsTrendSvgData = (series) => {
  if (!series || !series.length) return null;
  const normalized = series.length === 1 ? [series[0], series[0]] : series;
  const uvSeries = normalized.map((item) => Number(item.uniqueVisitors || 0));
  const pvSeries = normalized.map((item) => Number(item.pageViews || 0));
  const maxUv = Math.max(...uvSeries, 5);
  const maxPv = Math.max(...pvSeries, 5);
  const len = normalized.length;
  const points = uvSeries.map((val, i) => ({
    x: i / (len - 1) * 100,
    y: STATS_CHART_TOP + STATS_CHART_HEIGHT - val / maxUv * STATS_CHART_HEIGHT
  }));
  const secondaryPoints = pvSeries.map((val, i) => ({
    x: i / (len - 1) * 100,
    y: STATS_CHART_TOP + STATS_CHART_HEIGHT - val / maxPv * STATS_CHART_HEIGHT
  }));
  const linePath = buildSmoothSvgPath(points);
  const secondaryLinePath = buildSmoothSvgPath(secondaryPoints);
  const areaPath = `${linePath} L 100 50 L 0 50 Z`;
  return {
    points,
    linePath,
    secondaryLinePath,
    areaPath,
    series: normalized
  };
};
const shouldShowStatsXLabel = (index, total) => {
  if (total <= 10) return true;
  if (total <= 24) return index % 3 === 0 || index === total - 1;
  if (total <= 31) return index % 5 === 0 || index === total - 1;
  return index % 15 === 0 || index === total - 1;
};
const buildStatsBehaviorItems = (overview, translate, pageVisitorsLabel) => {
  const base = Number((overview == null ? void 0 : overview.uniqueVisitors) || 0);
  const rateOf = (val) => base > 0 ? Number((val / base * 100).toFixed(1)) : 0;
  const items = [
    {
      key: "page_view",
      modalKey: "uniqueVisitors",
      label: pageVisitorsLabel,
      visitors: Number((overview == null ? void 0 : overview.pageViewVisitors) || 0),
      rate: rateOf(Number((overview == null ? void 0 : overview.pageViewVisitors) || 0)),
      icon: "ph:eye-bold",
      iconClass: "text-cyan-500",
      barClass: "bg-cyan-500"
    },
    {
      key: "external",
      modalKey: "externalVisitors",
      label: translate("admin.stats.externalVisitors"),
      visitors: Number((overview == null ? void 0 : overview.externalVisitors) || 0),
      rate: rateOf(Number((overview == null ? void 0 : overview.externalVisitors) || 0)),
      icon: "ph:share-network-bold",
      iconClass: "text-sky-500",
      barClass: "bg-sky-500"
    },
    {
      key: "campaign",
      modalKey: "campaignVisitors",
      label: translate("admin.stats.campaignVisitors"),
      visitors: Number((overview == null ? void 0 : overview.campaignVisitors) || 0),
      rate: rateOf(Number((overview == null ? void 0 : overview.campaignVisitors) || 0)),
      icon: "ph:megaphone-bold",
      iconClass: "text-rose-500",
      barClass: "bg-rose-500"
    },
    {
      key: "auth",
      modalKey: "authVisitors",
      label: translate("admin.stats.authVisitors"),
      visitors: Number((overview == null ? void 0 : overview.authVisitors) || 0),
      rate: rateOf(Number((overview == null ? void 0 : overview.authVisitors) || 0)),
      icon: "ph:sign-in-bold",
      iconClass: "text-pink-500",
      barClass: "bg-pink-500"
    },
    {
      key: "product_view",
      modalKey: "productVisitors",
      label: translate("admin.stats.productVisitors"),
      visitors: Number((overview == null ? void 0 : overview.productVisitors) || 0),
      rate: rateOf(Number((overview == null ? void 0 : overview.productVisitors) || 0)),
      icon: "ph:package-bold",
      iconClass: "text-blue-500",
      barClass: "bg-blue-500",
      isCommerce: true
    },
    {
      key: "begin_checkout",
      modalKey: "checkoutVisitors",
      label: translate("admin.stats.checkoutVisitors"),
      visitors: Number((overview == null ? void 0 : overview.checkoutVisitors) || 0),
      rate: rateOf(Number((overview == null ? void 0 : overview.checkoutVisitors) || 0)),
      icon: "ph:shopping-cart-simple-bold",
      iconClass: "text-amber-500",
      barClass: "bg-amber-500",
      isCommerce: true
    },
    {
      key: "order_paid",
      modalKey: "paidVisitors",
      label: translate("admin.stats.paidVisitors"),
      visitors: Number((overview == null ? void 0 : overview.paidVisitors) || 0),
      rate: rateOf(Number((overview == null ? void 0 : overview.paidVisitors) || 0)),
      icon: "ph:credit-card-bold",
      iconClass: "text-emerald-500",
      barClass: "bg-emerald-500",
      isCommerce: true
    }
  ];
  const hasCommerceActivity = ((overview == null ? void 0 : overview.productVisitors) || 0) > 0 || ((overview == null ? void 0 : overview.checkoutVisitors) || 0) > 0 || ((overview == null ? void 0 : overview.paidVisitors) || 0) > 0;
  if (hasCommerceActivity) {
    return items;
  }
  return items.filter((item) => !item.isCommerce);
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TrafficTrendPanel",
  __ssrInlineRender: true,
  props: {
    trend: {},
    hourlyTrend: {},
    overview: {},
    preset: {},
    copy: {},
    translateStatsCard: { type: Function },
    formatNumber: { type: Function },
    formatPercent: { type: Function }
  },
  emits: ["cardClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const viewMode = ref("chart");
    const hoveredIndex = ref(null);
    const showZeroCommerce = ref(false);
    const isHourlyMode = computed(() => {
      return (props.preset === "today" || props.preset === "yesterday") && Array.isArray(props.hourlyTrend) && props.hourlyTrend.length > 0;
    });
    const activeSeries = computed(() => {
      if (isHourlyMode.value && props.hourlyTrend) {
        return props.hourlyTrend;
      }
      return props.trend || [];
    });
    const svgData = computed(() => buildStatsTrendSvgData(activeSeries.value));
    const hoveredPointData = computed(() => {
      if (hoveredIndex.value === null || !svgData.value) return null;
      return svgData.value.series[hoveredIndex.value] || null;
    });
    const maxPageViews = computed(
      () => Math.max(...activeSeries.value.map((item) => Number(item.pageViews || 0)), 1)
    );
    const maxUniqueVisitors = computed(
      () => Math.max(...activeSeries.value.map((item) => Number(item.uniqueVisitors || 0)), 1)
    );
    const maxPageViewsLabel = computed(
      () => Math.max(...activeSeries.value.map((item) => Number(item.pageViews || 0)), 0)
    );
    const maxUniqueVisitorsLabel = computed(
      () => Math.max(...activeSeries.value.map((item) => Number(item.uniqueVisitors || 0)), 0)
    );
    const avgPagesPerVisitor = computed(() => {
      var _a, _b;
      const uv = Number(((_a = props.overview) == null ? void 0 : _a.uniqueVisitors) || 0);
      const pv = Number(((_b = props.overview) == null ? void 0 : _b.pageViews) || 0);
      return uv > 0 ? (pv / uv).toFixed(1) : "0.0";
    });
    const allBehaviorItems = computed(() => {
      var _a, _b, _c, _d;
      return buildStatsBehaviorItems(
        { ...props.overview, productVisitors: ((_a = props.overview) == null ? void 0 : _a.productVisitors) || 0, checkoutVisitors: ((_b = props.overview) == null ? void 0 : _b.checkoutVisitors) || 0, paidVisitors: Math.max(((_c = props.overview) == null ? void 0 : _c.paidVisitors) || 0, showZeroCommerce.value ? 0 : 0) },
        props.translateStatsCard,
        ((_d = props.copy) == null ? void 0 : _d.pageVisitors) || "\u9875\u9762\u8BBF\u95EE\u8BBF\u5BA2"
      );
    });
    const hasHiddenCommerceItems = computed(() => {
      const ov = props.overview;
      return ((ov == null ? void 0 : ov.productVisitors) || 0) === 0 && ((ov == null ? void 0 : ov.checkoutVisitors) || 0) === 0 && ((ov == null ? void 0 : ov.paidVisitors) || 0) === 0;
    });
    const displayedBehaviorItems = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (!showZeroCommerce.value) return allBehaviorItems.value;
      const base = Number(((_a = props.overview) == null ? void 0 : _a.uniqueVisitors) || 0);
      const rateOf = (val) => base > 0 ? Number((val / base * 100).toFixed(1)) : 0;
      return [
        ...allBehaviorItems.value,
        {
          key: "product_view",
          modalKey: "productVisitors",
          label: props.translateStatsCard("admin.stats.productVisitors"),
          visitors: Number(((_b = props.overview) == null ? void 0 : _b.productVisitors) || 0),
          rate: rateOf(Number(((_c = props.overview) == null ? void 0 : _c.productVisitors) || 0)),
          icon: "ph:package-bold",
          iconClass: "text-blue-500",
          barClass: "bg-blue-500"
        },
        {
          key: "begin_checkout",
          modalKey: "checkoutVisitors",
          label: props.translateStatsCard("admin.stats.checkoutVisitors"),
          visitors: Number(((_d = props.overview) == null ? void 0 : _d.checkoutVisitors) || 0),
          rate: rateOf(Number(((_e = props.overview) == null ? void 0 : _e.checkoutVisitors) || 0)),
          icon: "ph:shopping-cart-simple-bold",
          iconClass: "text-amber-500",
          barClass: "bg-amber-500"
        },
        {
          key: "order_paid",
          modalKey: "paidVisitors",
          label: props.translateStatsCard("admin.stats.paidVisitors"),
          visitors: Number(((_f = props.overview) == null ? void 0 : _f.paidVisitors) || 0),
          rate: rateOf(Number(((_g = props.overview) == null ? void 0 : _g.paidVisitors) || 0)),
          icon: "ph:credit-card-bold",
          iconClass: "text-emerald-500",
          barClass: "bg-emerald-500"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UIcon = _sfc_main$Y;
      const _component_NuxtLink = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 xl:grid-cols-[1.55fr_1fr] gap-5 mb-6" }, _attrs))} data-v-095fb394><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs p-5 flex flex-col justify-between" data-v-095fb394><div data-v-095fb394><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4" data-v-095fb394><div data-v-095fb394><div class="flex items-center gap-2" data-v-095fb394><h2 class="text-base font-bold text-gray-900 dark:text-white" data-v-095fb394>${ssrInterpolate(unref(t)("admin.stats.trafficTrend", "\u6D41\u91CF\u4E0E\u8BBF\u95EE\u8D8B\u52BF"))}</h2>`);
      if (isHourlyMode.value) {
        _push(`<span class="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-medium" data-v-095fb394> 24h \u5206\u65F6\u89C6\u56FE </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-xs text-gray-400 mt-0.5" data-v-095fb394>${ssrInterpolate(isHourlyMode.value ? "\u6309\u5C0F\u65F6\u7EDF\u8BA1\u7684\u72EC\u7ACB\u8BBF\u5BA2 (UV) \u4E0E\u9875\u9762\u6D4F\u89C8 (PV) \u6CE2\u52A8" : unref(t)("admin.stats.trafficTrendSubtitle", "\u6309\u65E5\u7EDF\u8BA1\u7684\u72EC\u7ACB\u8BBF\u5BA2\u4E0E\u9875\u9762\u6D4F\u89C8\u8D8B\u52BF"))}</p></div><div class="flex items-center gap-3 flex-wrap" data-v-095fb394><div class="flex items-center gap-3 text-xs" data-v-095fb394><div class="flex items-center gap-1.5" data-v-095fb394><div class="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" data-v-095fb394></div><span class="text-gray-500 dark:text-gray-400" data-v-095fb394>${ssrInterpolate(unref(t)("admin.stats.uniqueVisitors", "\u72EC\u7ACB\u8BBF\u5BA2 UV"))}</span></div><div class="flex items-center gap-1.5" data-v-095fb394><div class="w-2.5 h-0.5 bg-indigo-500" data-v-095fb394></div><span class="text-gray-500 dark:text-gray-400" data-v-095fb394>${ssrInterpolate(unref(t)("admin.stats.pageViews", "\u9875\u9762\u6D4F\u89C8 PV"))}</span></div></div><div class="flex items-center bg-gray-100 dark:bg-white/5 p-0.5 rounded-lg" data-v-095fb394><button type="button" class="${ssrRenderClass([viewMode.value === "chart" ? "bg-white dark:bg-[#1a1a1e] text-cyan-600 dark:text-cyan-400 shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer flex items-center gap-1"])}" data-v-095fb394>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-line-up-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(` \u66F2\u7EBF\u56FE </button><button type="button" class="${ssrRenderClass([viewMode.value === "table" ? "bg-white dark:bg-[#1a1a1e] text-purple-600 dark:text-purple-400 shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer flex items-center gap-1"])}" data-v-095fb394>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:list-numbers-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(` \u660E\u7EC6\u8868 </button></div></div></div>`);
      if (viewMode.value === "chart") {
        _push(`<div class="h-[190px] w-full relative group pb-6" data-v-095fb394>`);
        if (svgData.value) {
          _push(`<svg class="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none" data-v-095fb394><defs data-v-095fb394><linearGradient id="stats-trend-area-cyan" x1="0" y1="0" x2="0" y2="1" data-v-095fb394><stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25" data-v-095fb394></stop><stop offset="100%" stop-color="#06b6d4" stop-opacity="0" data-v-095fb394></stop></linearGradient></defs><g stroke="#e5e7eb" class="dark:stroke-gray-800" stroke-width="0.1" stroke-dasharray="2 2" data-v-095fb394><!--[-->`);
          ssrRenderList(5, (i) => {
            _push(`<line x1="0"${ssrRenderAttr("y1", unref(STATS_CHART_TOP) + (i - 1) * (unref(STATS_CHART_HEIGHT) / 4))} x2="100"${ssrRenderAttr("y2", unref(STATS_CHART_TOP) + (i - 1) * (unref(STATS_CHART_HEIGHT) / 4))} data-v-095fb394></line>`);
          });
          _push(`<!--]--></g>`);
          if (hoveredIndex.value !== null && svgData.value.points[hoveredIndex.value]) {
            _push(`<line${ssrRenderAttr("x1", svgData.value.points[hoveredIndex.value].x)} y1="0"${ssrRenderAttr("x2", svgData.value.points[hoveredIndex.value].x)} y2="50" stroke="#9ca3af" stroke-width="0.3" stroke-dasharray="2 2" vector-effect="non-scaling-stroke" data-v-095fb394></line>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<path${ssrRenderAttr("d", svgData.value.areaPath)} fill="url(#stats-trend-area-cyan)" class="transition-all duration-500" data-v-095fb394></path>`);
          if (svgData.value.secondaryLinePath) {
            _push(`<path${ssrRenderAttr("d", svgData.value.secondaryLinePath)} fill="none" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="3 3" stroke-linecap="round" stroke-linejoin="round" opacity="0.65" vector-effect="non-scaling-stroke" data-v-095fb394></path>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<path${ssrRenderAttr("d", svgData.value.linePath)} fill="none" stroke="#06b6d4" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" data-v-095fb394></path><!--[-->`);
          ssrRenderList(svgData.value.points, (point, index) => {
            _push(`<g data-v-095fb394><rect${ssrRenderAttr("x", index === 0 ? 0 : point.x - 50 / (svgData.value.points.length - 1))} y="0"${ssrRenderAttr("width", 100 / (svgData.value.points.length - 1))} height="50" fill="transparent" class="cursor-crosshair" data-v-095fb394></rect><circle${ssrRenderAttr("cx", point.x)}${ssrRenderAttr("cy", point.y)}${ssrRenderAttr("r", hoveredIndex.value === index ? 1.2 : 0.55)}${ssrRenderAttr("fill", hoveredIndex.value === index ? "#fff" : "#06b6d4")}${ssrRenderAttr("stroke", hoveredIndex.value === index ? "#06b6d4" : "#121214")} stroke-width="0.8" class="transition-all duration-200" vector-effect="non-scaling-stroke" data-v-095fb394></circle></g>`);
          });
          _push(`<!--]--></svg>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = (_a = svgData.value) == null ? void 0 : _a.series) == null ? void 0 : _b.length) {
          _push(`<div class="absolute bottom-0 left-0 w-full flex justify-between pb-1" data-v-095fb394><!--[-->`);
          ssrRenderList(svgData.value.series, (item, i) => {
            _push(`<span class="text-[10px] font-mono text-gray-400 whitespace-nowrap absolute transform -translate-x-1/2" style="${ssrRenderStyle({ left: `${Number(i) / (svgData.value.series.length - 1) * 100}%` })}" data-v-095fb394>`);
            if (unref(shouldShowStatsXLabel)(Number(i), svgData.value.series.length)) {
              _push(`<!--[-->${ssrInterpolate(item.label)}<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (hoveredIndex.value !== null && hoveredPointData.value && svgData.value) {
          _push(`<div class="absolute z-30 bg-white dark:bg-[#18181b] border border-gray-200 dark:border-gray-700/50 rounded-xl p-3 shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2" style="${ssrRenderStyle({
            left: `${Math.min(86, Math.max(14, ((_c = svgData.value.points[hoveredIndex.value]) == null ? void 0 : _c.x) || 50))}%`,
            top: `${(((_d = svgData.value.points[hoveredIndex.value]) == null ? void 0 : _d.y) || 25) / 50 * 100}%`
          })}" data-v-095fb394><div class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 border-b border-gray-100 dark:border-gray-800 pb-1" data-v-095fb394>${ssrInterpolate(hoveredPointData.value.label)}</div><div class="space-y-1 min-w-[135px]" data-v-095fb394><div class="flex items-center justify-between gap-3" data-v-095fb394><span class="text-xs text-gray-500" data-v-095fb394>\u72EC\u7ACB\u8BBF\u5BA2 UV:</span><span class="text-xs font-bold text-cyan-600 dark:text-cyan-400" data-v-095fb394>${ssrInterpolate(__props.formatNumber(hoveredPointData.value.uniqueVisitors))}</span></div><div class="flex items-center justify-between gap-3" data-v-095fb394><span class="text-xs text-gray-500" data-v-095fb394>\u9875\u9762\u6D4F\u89C8 PV:</span><span class="text-xs font-bold text-indigo-600 dark:text-indigo-400" data-v-095fb394>${ssrInterpolate(__props.formatNumber(hoveredPointData.value.pageViews))}</span></div>`);
          if ((hoveredPointData.value.authVisitors || 0) > 0) {
            _push(`<div class="flex items-center justify-between gap-3" data-v-095fb394><span class="text-xs text-gray-500" data-v-095fb394>\u767B\u5F55/\u6CE8\u518C:</span><span class="text-xs font-bold text-pink-600 dark:text-pink-400" data-v-095fb394>${ssrInterpolate(__props.formatNumber(hoveredPointData.value.authVisitors))}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((hoveredPointData.value.paidVisitors || 0) > 0) {
            _push(`<div class="flex items-center justify-between gap-3" data-v-095fb394><span class="text-xs text-gray-500" data-v-095fb394>\u4ED8\u8D39\u8BBF\u5BA2:</span><span class="text-xs font-bold text-emerald-600 dark:text-emerald-400" data-v-095fb394>${ssrInterpolate(__props.formatNumber(hoveredPointData.value.paidVisitors))}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="max-h-[220px] overflow-y-auto pr-1 space-y-2.5" data-v-095fb394><!--[-->`);
        ssrRenderList(activeSeries.value, (item) => {
          _push(`<div class="grid grid-cols-[64px_1fr_64px_64px_56px] gap-2.5 items-center text-xs" data-v-095fb394><div class="text-gray-500 font-mono" data-v-095fb394>${ssrInterpolate(item.label)}</div><div class="space-y-1.5 bg-gray-100 dark:bg-white/5 rounded-lg p-1.5" data-v-095fb394><div class="h-1.5 rounded-full bg-white/10 overflow-hidden" data-v-095fb394><div class="h-full rounded-full bg-cyan-500" style="${ssrRenderStyle({ width: `${unref(getStatsTrendWidth)(item.uniqueVisitors, maxUniqueVisitors.value)}%` })}" data-v-095fb394></div></div><div class="h-1.5 rounded-full bg-white/10 overflow-hidden" data-v-095fb394><div class="h-full rounded-full bg-indigo-500" style="${ssrRenderStyle({ width: `${unref(getStatsTrendWidth)(item.pageViews, maxPageViews.value)}%` })}" data-v-095fb394></div></div></div><div class="text-right font-mono text-cyan-600 dark:text-cyan-400" data-v-095fb394>${ssrInterpolate(__props.formatNumber(item.uniqueVisitors))} UV</div><div class="text-right font-mono text-indigo-600 dark:text-indigo-400" data-v-095fb394>${ssrInterpolate(__props.formatNumber(item.pageViews))} PV</div><div class="text-right font-mono text-emerald-600 dark:text-emerald-400" data-v-095fb394>${ssrInterpolate(__props.formatNumber(item.paidVisitors || 0))} \u4ED8</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500" data-v-095fb394><div class="flex items-center gap-4" data-v-095fb394><span data-v-095fb394> \u5CF0\u503C UV: <strong class="text-gray-900 dark:text-white font-mono" data-v-095fb394>${ssrInterpolate(__props.formatNumber(maxUniqueVisitorsLabel.value))}</strong></span><span data-v-095fb394> \u5CF0\u503C PV: <strong class="text-gray-900 dark:text-white font-mono" data-v-095fb394>${ssrInterpolate(__props.formatNumber(maxPageViewsLabel.value))}</strong></span></div><span class="text-[11px] text-gray-400" data-v-095fb394> \u4EBA\u5747\u6D4F\u89C8\u6DF1\u5EA6: <strong class="text-cyan-600 dark:text-cyan-400 font-mono" data-v-095fb394>${ssrInterpolate(avgPagesPerVisitor.value)}</strong> \u9875/\u4EBA </span></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs p-5 flex flex-col justify-between" data-v-095fb394><div data-v-095fb394><div class="flex items-center justify-between gap-2 mb-3" data-v-095fb394><div data-v-095fb394><h2 class="text-base font-bold text-gray-900 dark:text-white" data-v-095fb394>${ssrInterpolate(__props.copy.behavior)}</h2><p class="text-xs text-gray-400 mt-0.5" data-v-095fb394>${ssrInterpolate(__props.copy.behaviorSubtitle)}</p></div>`);
      if (hasHiddenCommerceItems.value) {
        _push(`<button type="button" class="text-[11px] text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer" data-v-095fb394>${ssrInterpolate(showZeroCommerce.value ? "\u6536\u8D77\u7535\u5546\u9879" : "\u5C55\u5F00\u7535\u5546\u6F0F\u6597")}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-3 mt-3" data-v-095fb394><!--[-->`);
      ssrRenderList(displayedBehaviorItems.value, (step) => {
        _push(`<div role="link" class="space-y-1.5 p-1.5 -mx-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.03] transition cursor-pointer group" data-v-095fb394><div class="flex items-center justify-between text-xs" data-v-095fb394><span class="font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex items-center gap-1.5 transition-colors" data-v-095fb394>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: step.icon,
          class: ["w-3.5 h-3.5", step.iconClass]
        }, null, _parent));
        _push(` ${ssrInterpolate(step.label)}</span><span class="text-gray-900 dark:text-white font-mono text-[11px] flex items-center gap-1" data-v-095fb394>${ssrInterpolate(__props.formatNumber(step.visitors))} \xB7 ${ssrInterpolate(__props.formatPercent(step.rate))} `);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:caret-right",
          class: "w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
        }, null, _parent));
        _push(`</span></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden" data-v-095fb394><div class="${ssrRenderClass([step.barClass, "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${step.rate}%` })}" data-v-095fb394></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-400" data-v-095fb394><span data-v-095fb394>\u70B9\u51FB\u4EFB\u610F\u884C\u4E3A\u7EF4\u5EA6\u53EF\u94BB\u53D6\u8BBF\u5BA2\u660E\u7EC6</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/stats/visitors?preset=${__props.preset}`,
        class: "text-purple-600 dark:text-purple-400 hover:underline font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5168\u90E8\u8BBF\u5BA2 \u2192 `);
          } else {
            return [
              createTextVNode(" \u5168\u90E8\u8BBF\u5BA2 \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/TrafficTrendPanel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const StatsTrafficTrendPanel = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-095fb394"]]), { __name: "AdminStatsTrafficTrendPanel" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SourcesAndPagesGrid",
  __ssrInlineRender: true,
  props: {
    firstTouchSources: {},
    lastTouchSources: {},
    sourceCategories: {},
    externalSources: {},
    topPages: {},
    topLandingPages: {},
    preset: {},
    copy: {},
    formatNumber: { type: Function },
    formatPercent: { type: Function },
    formatRevenue: { type: Function },
    formatSourceLabel: { type: Function }
  },
  emits: ["sourceClick", "categoryClick", "pageClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const activeSourceTab = ref("lastTouch");
    const activePageTab = ref("topPages");
    const sourceTabs = computed(() => [
      { value: "lastTouch", label: "\u672B\u6B21\u89E6\u8FBE" },
      { value: "firstTouch", label: "\u9996\u6B21\u89E6\u8FBE" },
      { value: "categories", label: "\u6E20\u9053\u5206\u7C7B" },
      { value: "external", label: "\u5DF2\u77E5\u5916\u94FE" }
    ]);
    const activeSourceTabTitle = computed(() => {
      var _a, _b;
      if (activeSourceTab.value === "firstTouch") return t("admin.stats.firstTouch", "\u9996\u6B21\u89E6\u8FBE\u6765\u6E90");
      if (activeSourceTab.value === "categories") return t("admin.stats.sourceCategories", "\u6765\u6E90\u6E20\u9053\u5206\u7C7B");
      if (activeSourceTab.value === "external") return ((_a = props.copy) == null ? void 0 : _a.knownSources) || "\u5DF2\u77E5\u5916\u90E8\u6765\u6E90";
      return ((_b = props.copy) == null ? void 0 : _b.lastTitle) || "\u672B\u6B21\u89E6\u8FBE\u6765\u6E90";
    });
    const activeSourceTabSubtitle = computed(() => {
      var _a, _b, _c, _d;
      if (activeSourceTab.value === "firstTouch") return ((_a = props.copy) == null ? void 0 : _a.firstSubtitle) || "\u8BBF\u5BA2\u9996\u6B21\u8FDB\u5165\u7AD9\u70B9\u65F6\u7684\u83B7\u5BA2\u6E20\u9053";
      if (activeSourceTab.value === "categories") return ((_b = props.copy) == null ? void 0 : _b.categorySubtitle) || "\u6309\u6E20\u9053\u5927\u7C7B\u805A\u5408\u7684\u6D41\u91CF\u5360\u6BD4";
      if (activeSourceTab.value === "external") return ((_c = props.copy) == null ? void 0 : _c.knownSubtitle) || "\u8FC7\u6EE4\u76F4\u63A5\u8BBF\u95EE\u540E\u7684\u5916\u90E8\u5F15\u6D41\u6E20\u9053";
      return ((_d = props.copy) == null ? void 0 : _d.lastSubtitle) || "\u8BBF\u5BA2\u6700\u8FD1\u4E00\u6B21\u5916\u90E8\u83B7\u5BA2\u6E20\u9053";
    });
    const activeSourceList = computed(() => {
      if (activeSourceTab.value === "firstTouch") return props.firstTouchSources || [];
      if (activeSourceTab.value === "categories") return props.sourceCategories || [];
      if (activeSourceTab.value === "external") return props.externalSources || [];
      return props.lastTouchSources || [];
    });
    const activeBarColorClass = computed(() => {
      if (activeSourceTab.value === "firstTouch") return "bg-purple-500";
      if (activeSourceTab.value === "categories") return "bg-indigo-500";
      if (activeSourceTab.value === "external") return "bg-sky-500";
      return "bg-cyan-500";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UBadge = _sfc_main$O;
      const _component_UIcon = _sfc_main$Y;
      const _component_NuxtLink = __nuxt_component_3$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 xl:grid-cols-[1.25fr_1fr] gap-5 mb-6" }, _attrs))}><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs p-5 flex flex-col justify-between"><div><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4"><div><h2 class="text-base font-bold text-gray-900 dark:text-white">${ssrInterpolate(activeSourceTabTitle.value)}</h2><p class="text-xs text-gray-400 mt-0.5">${ssrInterpolate(activeSourceTabSubtitle.value)}</p></div><div class="flex items-center bg-gray-100 dark:bg-white/5 p-0.5 rounded-lg flex-wrap"><!--[-->`);
      ssrRenderList(sourceTabs.value, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeSourceTab.value === tab.value ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer"])}">${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div></div><div class="space-y-3 max-h-[380px] overflow-y-auto pr-1">`);
      if (activeSourceList.value.length) {
        _push(`<!--[-->`);
        ssrRenderList(activeSourceList.value, (item) => {
          var _a2, _b2;
          _push(`<div class="${ssrRenderClass([item.count > 0 ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 group" : "opacity-60", "space-y-1.5 p-2 -mx-2 rounded-xl transition-colors"])}"><div class="flex items-center justify-between text-xs gap-2"><div class="flex items-center gap-2 max-w-[72%] truncate"><span class="text-gray-700 dark:text-gray-200 font-medium truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"${ssrRenderAttr("title", item.label)}>${ssrInterpolate(__props.formatSourceLabel(item.label))}</span>`);
          if (item.paid > 0) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "success",
              variant: "subtle",
              size: "xs",
              class: "shrink-0 font-mono"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.paidVisitors)} ${ssrInterpolate(__props.copy.people)} \xB7 ${ssrInterpolate(item.paidOrders)} ${ssrInterpolate(__props.copy.orders)} \xB7 ${ssrInterpolate(__props.formatRevenue(item))} `);
                  if (item.conversionRate) {
                    _push2(`<!--[--> (${ssrInterpolate(item.conversionRate)}%)<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(toDisplayString(item.paidVisitors) + " " + toDisplayString(__props.copy.people) + " \xB7 " + toDisplayString(item.paidOrders) + " " + toDisplayString(__props.copy.orders) + " \xB7 " + toDisplayString(__props.formatRevenue(item)) + " ", 1),
                    item.conversionRate ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" (" + toDisplayString(item.conversionRate) + "%)", 1)
                    ], 64)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center gap-1.5 text-right text-gray-900 dark:text-white font-medium whitespace-nowrap text-xs tabular-nums"><span>${ssrInterpolate(__props.formatNumber(item.count))} <span class="text-gray-400 font-normal">(${ssrInterpolate(__props.formatPercent(item.percentage))})</span></span>`);
          if (item.count > 0) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-right",
              class: "w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="${ssrRenderClass([activeBarColorClass.value, "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div>`);
          if (((_a2 = item.terms) == null ? void 0 : _a2.length) || ((_b2 = item.referrers) == null ? void 0 : _b2.length)) {
            _push(`<div class="flex flex-wrap items-center gap-1.5 pt-0.5"><!--[-->`);
            ssrRenderList(item.terms, (term) => {
              _push(ssrRenderComponent(_component_UBadge, {
                key: `term-${term}`,
                color: "info",
                variant: "subtle",
                size: "xs",
                class: "inline-flex items-center gap-1 font-mono max-w-[160px] truncate",
                title: `${__props.copy.keywordLabel} ${term}`
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:magnifying-glass",
                      class: "w-3 h-3 shrink-0"
                    }, null, _parent2, _scopeId));
                    _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(term)}</span>`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:magnifying-glass",
                        class: "w-3 h-3 shrink-0"
                      }),
                      createVNode("span", { class: "truncate" }, toDisplayString(term), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--><!--[-->`);
            ssrRenderList(item.referrers, (refUrl) => {
              _push(`<a${ssrRenderAttr("href", unref(getSafeExternalUrl)(refUrl) || void 0)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[11px] font-mono text-sky-600 hover:text-sky-500 dark:text-sky-400 hover:underline max-w-[260px] truncate"${ssrRenderAttr("title", refUrl)}>`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:globe-simple",
                class: "w-3 h-3 shrink-0"
              }, null, _parent));
              _push(`<span class="truncate">${ssrInterpolate(unref(formatExternalUrlLabel)(refUrl, 48))}</span></a>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="py-12 text-center text-xs text-gray-400">${ssrInterpolate(__props.copy.noRecords || "\u5F53\u524D\u5468\u671F\u6682\u65E0\u6765\u6E90\u8BB0\u5F55")}</div>`);
      }
      _push(`</div></div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-400"><span>\u70B9\u51FB\u4EFB\u4E00\u6765\u6E90\u884C\u53EF\u94BB\u53D6\u8BE5\u6765\u6E90\u4E0B\u7684\u72EC\u7ACB\u8BBF\u5BA2\u5217\u8868</span><span class="font-mono text-[11px]">\u5171 ${ssrInterpolate(activeSourceList.value.length)} \u9879\u6765\u6E90</span></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs p-5 flex flex-col justify-between"><div><div class="flex items-center justify-between gap-2 mb-4"><div><h2 class="text-base font-bold text-gray-900 dark:text-white">${ssrInterpolate(activePageTab.value === "topPages" ? "\u70ED\u95E8\u53D7\u8BBF\u9875\u9762 Top \u699C" : "\u70ED\u95E8\u5165\u53E3\u843D\u5730\u9875 Top \u699C")}</h2><p class="text-xs text-gray-400 mt-0.5">${ssrInterpolate(activePageTab.value === "topPages" ? "\u6309\u9875\u9762\u6D4F\u89C8\u91CF (PV) \u4E0E\u72EC\u7ACB\u8BBF\u5BA2\u6392\u5E8F\u7684\u7AD9\u5185\u8DEF\u5F84" : "\u8BBF\u5BA2\u9996\u6B21\u8FDB\u5165\u7AD9\u70B9\u7684\u7740\u9646\u9875\u9762\u4E0E\u8F6C\u5316\u5206\u5E03")}</p></div><div class="flex items-center bg-gray-100 dark:bg-white/5 p-0.5 rounded-lg shrink-0"><button type="button" class="${ssrRenderClass([activePageTab.value === "topPages" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer"])}"> \u53D7\u8BBF\u9875\u9762 </button><button type="button" class="${ssrRenderClass([activePageTab.value === "landingPages" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer"])}"> \u5165\u53E3\u843D\u5730\u9875 </button></div></div>`);
      if (activePageTab.value === "topPages") {
        _push(`<div class="space-y-3 max-h-[380px] overflow-y-auto pr-1">`);
        if ((_a = __props.topPages) == null ? void 0 : _a.length) {
          _push(`<!--[-->`);
          ssrRenderList(__props.topPages, (pg) => {
            _push(`<div role="link" class="space-y-1.5 p-2 -mx-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/40 transition cursor-pointer group"><div class="flex items-center justify-between text-xs gap-2"><div class="flex items-center gap-1.5 min-w-0 max-w-[65%]"><span class="font-mono text-gray-700 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 truncate transition-colors"${ssrRenderAttr("title", pg.path)}>${ssrInterpolate(pg.path)}</span>`);
            if (unref(getSafeInternalPath)(pg.path)) {
              _push(`<a${ssrRenderAttr("href", unref(getSafeInternalPath)(pg.path))} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" title="\u5728\u65B0\u7A97\u53E3\u6253\u5F00\u9875\u9762">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-square-out",
                class: "w-3.5 h-3.5"
              }, null, _parent));
              _push(`</a>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><span class="text-gray-600 dark:text-gray-300 font-mono text-[11px] shrink-0 tabular-nums"><strong class="text-gray-900 dark:text-white">${ssrInterpolate(__props.formatNumber(pg.views))}</strong> PV \xB7 ${ssrInterpolate(__props.formatNumber(pg.visitors))} UV (${ssrInterpolate(__props.formatPercent(pg.percentage))}) </span></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-cyan-500 transition-all duration-500" style="${ssrRenderStyle({ width: `${pg.percentage}%` })}"></div></div></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<div class="py-12 text-center text-xs text-gray-400"> \u5F53\u524D\u5468\u671F\u6682\u65E0\u9875\u9762\u8BBF\u95EE\u8BB0\u5F55 </div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="space-y-3 max-h-[380px] overflow-y-auto pr-1">`);
        if ((_b = __props.topLandingPages) == null ? void 0 : _b.length) {
          _push(`<!--[-->`);
          ssrRenderList(__props.topLandingPages, (lp) => {
            _push(`<div role="link" class="space-y-1.5 p-2 -mx-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/40 transition cursor-pointer group"><div class="flex items-center justify-between text-xs gap-2"><div class="flex items-center gap-1.5 min-w-0 max-w-[65%]"><span class="font-mono text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 truncate transition-colors"${ssrRenderAttr("title", lp.path)}>${ssrInterpolate(lp.path)}</span>`);
            if (lp.paidVisitors > 0) {
              _push(ssrRenderComponent(_component_UBadge, {
                color: "success",
                variant: "subtle",
                size: "xs",
                class: "shrink-0 font-mono"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(lp.paidVisitors)} \u8F6C\u5316 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(lp.paidVisitors) + " \u8F6C\u5316 ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div><span class="text-gray-600 dark:text-gray-300 font-mono text-[11px] shrink-0 tabular-nums"><strong class="text-gray-900 dark:text-white">${ssrInterpolate(__props.formatNumber(lp.visitors))}</strong> \u5165\u53E3 UV (${ssrInterpolate(__props.formatPercent(lp.percentage))}) </span></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-indigo-500 transition-all duration-500" style="${ssrRenderStyle({ width: `${lp.percentage}%` })}"></div></div></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<div class="py-12 text-center text-xs text-gray-400"> \u5F53\u524D\u5468\u671F\u6682\u65E0\u843D\u5730\u9875\u8BB0\u5F55 </div>`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-400"><span>\u70B9\u51FB\u4EFB\u610F\u8DEF\u5F84\u53EF\u67E5\u770B\u8BBF\u95EE\u8BE5\u9875\u9762\u7684\u8BBF\u5BA2\u6D41\u6C34</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/stats/visitors?preset=${__props.preset}&tab=pageVisits`,
        class: "text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5168\u90E8\u9875\u9762\u6D4F\u89C8 \u2192 `);
          } else {
            return [
              createTextVNode(" \u5168\u90E8\u9875\u9762\u6D4F\u89C8 \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/SourcesAndPagesGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const StatsSourcesAndPagesGrid = Object.assign(_sfc_main$2, { __name: "AdminStatsSourcesAndPagesGrid" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GeoAndDevicesGrid",
  __ssrInlineRender: true,
  props: {
    geography: {},
    geoConversions: {},
    devices: {},
    browsers: {},
    operatingSystems: {},
    preset: {},
    cleanupDays: {},
    isCleaningUp: { type: Boolean },
    canCleanup: { type: Boolean },
    formatNumber: { type: Function },
    formatPercent: { type: Function },
    formatRevenue: { type: Function }
  },
  emits: ["update:cleanupDays", "confirmCleanup"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const isGeoExpanded = ref(false);
    const activeEnvTab = ref("devices");
    const cleanupDaysModel = computed({
      get: () => props.cleanupDays,
      set: (val) => emit("update:cleanupDays", Number(val) || 90)
    });
    const mergedGeoList = computed(() => {
      const convMap = new Map(
        (props.geoConversions || []).map((item) => [item.country, item])
      );
      return (props.geography || []).map((geo) => {
        const conv = convMap.get(geo.label);
        return {
          label: geo.label,
          count: geo.count,
          percentage: geo.percentage,
          paidVisitors: (conv == null ? void 0 : conv.paidVisitors) || 0,
          paidOrders: (conv == null ? void 0 : conv.paidOrders) || 0,
          conversionRate: (conv == null ? void 0 : conv.conversionRate) || 0,
          aiVisitors: (conv == null ? void 0 : conv.aiVisitors) || 0,
          revenueByCurrency: (conv == null ? void 0 : conv.revenueByCurrency) || []
        };
      });
    });
    const displayedGeoList = computed(() => {
      if (isGeoExpanded.value) return mergedGeoList.value;
      return mergedGeoList.value.slice(0, 8);
    });
    const activeEnvList = computed(() => {
      if (activeEnvTab.value === "browsers") return props.browsers || [];
      if (activeEnvTab.value === "os") return props.operatingSystems || [];
      return props.devices || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$O;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UInput = _sfc_main$A;
      const _component_UButton = _sfc_main$T;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 xl:grid-cols-[1.25fr_1fr] gap-5" }, _attrs))}><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs p-5 flex flex-col justify-between"><div><div class="flex items-center justify-between gap-2 mb-4"><div><h2 class="text-base font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.regions", "\u56FD\u5BB6\u4E0E\u5730\u533A\u5206\u5E03"))}</h2><p class="text-xs text-gray-400 mt-0.5">${ssrInterpolate(unref(t)("admin.stats.regionsSubtitle", "\u5404\u56FD\u5BB6/\u5730\u533A\u8BBF\u5BA2\u5360\u6BD4\u3001AI \u641C\u7D22\u83B7\u5BA2\u4E0E\u4ED8\u8D39\u8F6C\u5316"))}</p></div>`);
      if (mergedGeoList.value.length > 8) {
        _push(`<button type="button" class="text-xs text-purple-600 dark:text-purple-400 hover:underline cursor-pointer shrink-0">${ssrInterpolate(isGeoExpanded.value ? "\u6536\u8D77\u5217\u8868" : `\u5C55\u5F00\u5168\u90E8 (${mergedGeoList.value.length})`)}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([isGeoExpanded.value ? "max-h-[340px] overflow-y-auto pr-1" : "", "space-y-3"])}">`);
      if (displayedGeoList.value.length) {
        _push(`<!--[-->`);
        ssrRenderList(displayedGeoList.value, (item) => {
          _push(`<div class="space-y-1.5"><div class="flex items-center justify-between text-xs gap-2"><div class="flex items-center gap-2 min-w-0"><span class="font-medium text-gray-700 dark:text-gray-200 truncate">${ssrInterpolate(item.label)}</span>`);
          if (item.aiVisitors > 0) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "info",
              variant: "subtle",
              size: "xs",
              class: "font-mono shrink-0"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` AI ${ssrInterpolate(item.aiVisitors)}`);
                } else {
                  return [
                    createTextVNode(" AI " + toDisplayString(item.aiVisitors), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (item.paidVisitors > 0) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "success",
              variant: "subtle",
              size: "xs",
              class: "font-mono shrink-0"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.paidVisitors)} \u4ED8 (${ssrInterpolate(item.conversionRate)}%) \xB7 ${ssrInterpolate(__props.formatRevenue(item))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.paidVisitors) + " \u4ED8 (" + toDisplayString(item.conversionRate) + "%) \xB7 " + toDisplayString(__props.formatRevenue(item)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><span class="text-gray-900 dark:text-white font-mono text-[11px] tabular-nums shrink-0">${ssrInterpolate(__props.formatNumber(item.count))} <span class="text-gray-400 font-normal">(${ssrInterpolate(__props.formatPercent(item.percentage))})</span></span></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-purple-500 transition-all duration-500" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="py-10 text-center text-xs text-gray-400"> \u5F53\u524D\u5468\u671F\u6682\u65E0\u5730\u533A\u5206\u5E03\u6570\u636E </div>`);
      }
      _push(`</div></div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-xs text-gray-400"><span>\u5171\u8986\u76D6 ${ssrInterpolate(mergedGeoList.value.length)} \u4E2A\u56FD\u5BB6/\u5730\u533A</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/stats/visitors?preset=${__props.preset}&tab=ips`,
        class: "text-purple-600 dark:text-purple-400 hover:underline font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u67E5\u770B IP \u5730\u533A\u660E\u7EC6 \u2192 `);
          } else {
            return [
              createTextVNode(" \u67E5\u770B IP \u5730\u533A\u660E\u7EC6 \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-xs p-5 flex flex-col justify-between"><div><div class="flex items-center justify-between gap-2 mb-4"><div><h2 class="text-base font-bold text-gray-900 dark:text-white">${ssrInterpolate(activeEnvTab.value === "devices" ? unref(t)("admin.stats.devices", "\u7EC8\u7AEF\u8BBE\u5907\u5206\u5E03") : activeEnvTab.value === "browsers" ? "\u6D4F\u89C8\u5668\u5206\u5E03" : "\u64CD\u4F5C\u7CFB\u7EDF\u5206\u5E03")}</h2><p class="text-xs text-gray-400 mt-0.5">${ssrInterpolate(unref(t)("admin.stats.devicesSubtitle", "\u8BBF\u5BA2\u4F7F\u7528\u7684\u786C\u4EF6\u8BBE\u5907\u3001\u6D4F\u89C8\u5668\u4E0E\u7CFB\u7EDF\u73AF\u5883\u5360\u6BD4"))}</p></div><div class="flex items-center bg-gray-100 dark:bg-white/5 p-0.5 rounded-lg shrink-0"><button type="button" class="${ssrRenderClass([activeEnvTab.value === "devices" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer"])}"> \u8BBE\u5907\u7C7B\u578B </button><button type="button" class="${ssrRenderClass([activeEnvTab.value === "browsers" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer"])}"> \u6D4F\u89C8\u5668 </button><button type="button" class="${ssrRenderClass([activeEnvTab.value === "os" ? "bg-white dark:bg-[#1a1a1e] text-gray-900 dark:text-white shadow-xs" : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", "px-2.5 py-1 rounded-md text-xs font-medium transition cursor-pointer"])}"> \u64CD\u4F5C\u7CFB\u7EDF </button></div></div><div class="space-y-3">`);
      if (activeEnvList.value.length) {
        _push(`<!--[-->`);
        ssrRenderList(activeEnvList.value.slice(0, 7), (item) => {
          _push(`<div class="space-y-1.5"><div class="flex items-center justify-between text-xs"><span class="font-medium text-gray-700 dark:text-gray-200">${ssrInterpolate(item.label)}</span><span class="text-gray-900 dark:text-white font-mono text-[11px] tabular-nums">${ssrInterpolate(__props.formatNumber(item.count))} <span class="text-gray-400 font-normal">(${ssrInterpolate(__props.formatPercent(item.percentage))})</span></span></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-cyan-500 transition-all duration-500" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="py-10 text-center text-xs text-gray-400"> \u5F53\u524D\u5468\u671F\u6682\u65E0\u7EC8\u7AEF\u73AF\u5883\u6570\u636E </div>`);
      }
      _push(`</div></div><div class="mt-5 pt-3.5 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap items-center justify-between gap-2"><div class="text-xs text-gray-500 dark:text-gray-400"><span class="font-medium text-gray-700 dark:text-gray-300">${ssrInterpolate(unref(t)("admin.dataCleanup.title", "\u5386\u53F2\u7EDF\u8BA1\u6570\u636E\u6E05\u7406"))}</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: cleanupDaysModel.value,
        "onUpdate:modelValue": ($event) => cleanupDaysModel.value = $event,
        type: "number",
        size: "xs",
        min: 1,
        max: 365,
        class: "w-20",
        placeholder: unref(t)("admin.dataCleanup.keepDaysPlaceholder")
      }, null, _parent));
      _push(`<span class="text-xs text-gray-400">${ssrInterpolate(unref(t)("admin.dataCleanup.keepDays"))}</span>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "error",
        variant: "soft",
        size: "xs",
        loading: __props.isCleaningUp,
        disabled: __props.isCleaningUp || !__props.canCleanup,
        onClick: ($event) => emit("confirmCleanup")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.isCleaningUp ? unref(t)("admin.dataCleanup.cleaningUp") : unref(t)("admin.dataCleanup.cleanupBtn"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.isCleaningUp ? unref(t)("admin.dataCleanup.cleaningUp") : unref(t)("admin.dataCleanup.cleanupBtn")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/stats/GeoAndDevicesGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const StatsGeoAndDevicesGrid = Object.assign(_sfc_main$1, { __name: "AdminStatsGeoAndDevicesGrid" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stats",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const router = useRouter();
    const { t, locale } = useI18n();
    const copy = computed(() => getVisitorStatsCopy(locale.value));
    const currentRoute = typeof useRoute === "function" ? useRoute() : null;
    const initialPreset = typeof ((_a = currentRoute == null ? void 0 : currentRoute.query) == null ? void 0 : _a.preset) === "string" && ["today", "yesterday", "7d", "30d", "90d"].includes(currentRoute.query.preset) ? currentRoute.query.preset : "today";
    const preset = ref(initialPreset);
    const rangeDays = computed(() => {
      if (preset.value === "today" || preset.value === "yesterday") {
        return 1;
      }
      return Number.parseInt(preset.value.replace("d", ""), 10) || 7;
    });
    const dayOptions = computed(() => [
      { value: "today", label: t("admin.stats.today") },
      { value: "yesterday", label: t("admin.stats.yesterday") },
      { value: "7d", label: t("admin.stats.last7Days") },
      { value: "30d", label: t("admin.stats.last30Days") },
      { value: "90d", label: t("admin.stats.last90Days") }
    ]);
    const statsUrl = computed(
      () => `/api/admin/stats?preset=${preset.value}&days=${rangeDays.value}&limit=50`
    );
    const { data, pending, refresh, error } = useFetch(
      statsUrl,
      {
        // 访客统计是重接口:不阻塞 SSR,先渲染骨架,数据到客户端再拉。
        server: false,
        lazy: true
      },
      "$tlqLiy-3-w"
      /* nuxt-injected */
    );
    watch(error, (value) => {
      if ((value == null ? void 0 : value.statusCode) === 401) {
        router.push("/admin/login");
      }
    });
    const overview = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.overview) || {};
    });
    const rollupPendingDays = computed(() => {
      var _a2, _b;
      return Array.isArray((_b = (_a2 = data.value) == null ? void 0 : _a2.rollup) == null ? void 0 : _b.pendingDays) ? data.value.rollup.pendingDays.length : 0;
    });
    const trend = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.trend) || [];
    });
    const hourlyTrend = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.hourlyTrend) || [];
    });
    const topPages = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.topPages) || [];
    });
    const topLandingPages = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.topLandingPages) || [];
    });
    const geography = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.geography) || [];
    });
    const geoConversions = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.geoConversions) || [];
    });
    const devices = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.devices) || [];
    });
    const browsers = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.browsers) || [];
    });
    const operatingSystems = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.operatingSystems) || [];
    });
    const sourceCategories = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = data.value) == null ? void 0 : _a2.sources) == null ? void 0 : _b.categories) || [];
    });
    const externalSources = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = data.value) == null ? void 0 : _a2.sources) == null ? void 0 : _b.external) || [];
    });
    const firstTouchSources = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = data.value) == null ? void 0 : _a2.sources) == null ? void 0 : _b.firstTouch) || [];
    });
    const lastTouchSources = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = data.value) == null ? void 0 : _a2.sources) == null ? void 0 : _b.lastTouch) || [];
    });
    const overviewCards = computed(() => buildStatsOverviewCards(
      overview.value,
      translateStatsCard,
      formatNumber,
      formatPercent
    ));
    function handleCardClick(key) {
      const config = resolveStatsModal(key, translateStatsCard);
      if (!config) return;
      const query = { preset: preset.value };
      if (config.source === "pageVisits") {
        query.tab = "pageVisits";
      } else if (config.source === "events") {
        query.tab = "ips";
      } else {
        if (config.eventType) query.type = config.eventType;
        const resolvedSourceType = key === "campaignVisitors" ? "tagged" : config.sourceType;
        if (resolvedSourceType) query.sourceType = resolvedSourceType;
      }
      void router.push({ path: "/admin/stats/visitors", query });
    }
    function navigateToCategoryVisitors(categoryKey, count) {
      if (count <= 0) return;
      void router.push({
        path: "/admin/stats/visitors",
        query: {
          preset: preset.value,
          attribution: "last",
          sourceType: categoryKey
        }
      });
    }
    function navigateToSourceVisitors(item, mode) {
      if (item.count <= 0) return;
      void router.push({
        path: "/admin/stats/visitors",
        query: {
          preset: preset.value,
          attribution: mode,
          sourceKey: item.key,
          sourceLabel: item.label
        }
      });
    }
    function navigateToPageVisits(path) {
      if (!path) return;
      void router.push({
        path: "/admin/stats/visitors",
        query: {
          preset: preset.value,
          tab: "pageVisits",
          search: path
        }
      });
    }
    function translateStatsCard(key) {
      const overrides = {
        "admin.stats.campaignVisitors": copy.value.campaign,
        "admin.stats.campaignVisitorsTip": copy.value.campaignTip,
        "admin.stats.campaignVisitorsModalTitle": copy.value.campaign,
        "admin.stats.authVisitorsTip": copy.value.authTip,
        "admin.stats.uniqueVisitorsTip": copy.value.visitorTip,
        "admin.stats.paidVisitorsTip": copy.value.paidTip,
        "admin.stats.vsYesterdaySameTime": copy.value.vsYesterdaySameTime,
        "admin.stats.yesterdayFullDay": copy.value.yesterdayFullDay,
        "admin.stats.predictedToday": copy.value.predictedToday,
        "admin.stats.vsDayBeforeYesterday": copy.value.vsDayBeforeYesterday,
        "admin.stats.vsPreviousDays": copy.value.vsPreviousDays,
        "admin.stats.newGrowth": copy.value.newGrowth
      };
      return overrides[key] || t(key);
    }
    function formatRevenue(item) {
      var _a2, _b;
      const amounts = ((_a2 = item.revenueByCurrency) == null ? void 0 : _a2.length) ? item.revenueByCurrency : [{ currency: ((_b = data.value) == null ? void 0 : _b.currency) || "USD", amount: 0 }];
      return amounts.map(({ currency, amount }) => new Intl.NumberFormat(locale.value, {
        style: "currency",
        currency,
        currencyDisplay: "code",
        maximumFractionDigits: 2
      }).format(amount)).join(" / ");
    }
    function formatNumber(value) {
      return formatStatsNumber(value, locale.value);
    }
    function formatPercent(value) {
      return formatStatsPercent(value);
    }
    function formatSourceLabel(value) {
      if (!value) return "-";
      const normalized = value.toLowerCase();
      if (normalized === "direct") return copy.value.direct;
      if (normalized === "unknown") return copy.value.unknown;
      if (normalized.startsWith("unknown \xB7 ")) return `${copy.value.unknown}${value.slice("unknown".length)}`;
      if (normalized === "search") return t("admin.stats.search");
      if (normalized === "social") return t("admin.stats.social");
      if (normalized === "ai") return t("admin.stats.ai") || "AI";
      if (normalized === "campaign") return copy.value.campaign;
      if (normalized === "affiliate") return t("admin.stats.affiliate") || "Affiliate";
      if (normalized === "email") return t("admin.stats.email") || "Email";
      if (normalized === "referral") return t("admin.stats.referral");
      return value;
    }
    const cleanupDays = ref(90);
    const isCleaningUp = ref(false);
    const { confirm } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    async function confirmCleanup() {
      const confirmed = await confirm({
        title: t("admin.dataCleanup.confirmTitle"),
        description: t("admin.dataCleanup.confirmMessage", { days: cleanupDays.value })
      });
      if (!confirmed) return;
      isCleaningUp.value = true;
      try {
        const result = await $fetch("/api/admin/stats/cleanup", {
          method: "POST",
          body: { days: cleanupDays.value }
        });
        useToast().add({
          title: t("admin.dataCleanup.success", { count: result.deletedCount, days: cleanupDays.value }),
          color: "success"
        });
      } catch (e) {
        useToast().add({
          title: t("admin.dataCleanup.error"),
          color: "error",
          description: String(e)
        });
      } finally {
        isCleaningUp.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      const _component_UButton = _sfc_main$T;
      const _component_PageRequestError = PageRequestError;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-8rem)] pb-8" }, _attrs))}><div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6"><div><h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(unref(t)("admin.stats.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-1 text-xs md:text-sm">${ssrInterpolate(unref(t)("admin.stats.subtitle"))}</p></div><div class="flex flex-wrap items-center gap-2"><div class="flex items-center gap-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121214] p-1"><!--[-->`);
      ssrRenderList(unref(dayOptions), (option) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(preset) === option.value ? "bg-purple-600 text-white shadow-xs" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5", "px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer"])}">${ssrInterpolate(option.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: `/admin/stats/visitors?preset=${unref(preset)}`,
        color: "primary",
        variant: "soft",
        size: "sm",
        icon: "ph:users-three"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(copy).openVisitorsPage)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(copy).openVisitorsPage), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        size: "sm",
        icon: "ph:arrows-clockwise",
        loading: unref(pending),
        onClick: () => unref(refresh)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("admin.stats.refresh"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("admin.stats.refresh")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(error) && !unref(pending)) {
        _push(ssrRenderComponent(_component_PageRequestError, {
          error: unref(error),
          retry: unref(refresh)
        }, null, _parent));
      } else {
        _push(`<!--[-->`);
        if (unref(rollupPendingDays) > 0) {
          _push(`<div class="mb-3 rounded-xl border border-sky-200 dark:border-sky-800/60 bg-sky-50/70 dark:bg-sky-950/20 px-4 py-2.5 text-xs text-sky-700 dark:text-sky-300">${ssrInterpolate(unref(copy).rollupPending.replace("{days}", String(unref(rollupPendingDays))))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_b = (_a2 = unref(data)) == null ? void 0 : _a2.rollup) == null ? void 0 : _b.multiDayDimensionsAreVisitorDays) {
          _push(`<div class="mb-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-white/5 px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">${ssrInterpolate(unref(copy).rollupVisitorDays)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(overview).unattributedPaidOrders > 0) {
          _push(`<div class="mb-5 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/70 dark:bg-amber-950/20 px-4 py-2.5 text-xs text-amber-700 dark:text-amber-300">${ssrInterpolate(unref(copy).unlinked)} ${ssrInterpolate(formatNumber(unref(overview).unattributedPaidOrders))} ${ssrInterpolate(unref(copy).orders)} \xB7 ${ssrInterpolate(formatRevenue({ revenueByCurrency: unref(overview).unattributedRevenueByCurrency }))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(StatsOverviewCardsGrid, {
          "overview-cards": unref(overviewCards),
          overview: unref(overview),
          "format-number": formatNumber,
          "format-percent": formatPercent,
          onCardClick: handleCardClick
        }, null, _parent));
        _push(ssrRenderComponent(StatsTrafficTrendPanel, {
          trend: unref(trend),
          "hourly-trend": unref(hourlyTrend),
          overview: unref(overview),
          preset: unref(preset),
          copy: unref(copy),
          "translate-stats-card": translateStatsCard,
          "format-number": formatNumber,
          "format-percent": formatPercent,
          onCardClick: handleCardClick
        }, null, _parent));
        _push(ssrRenderComponent(StatsSourcesAndPagesGrid, {
          "first-touch-sources": unref(firstTouchSources),
          "last-touch-sources": unref(lastTouchSources),
          "source-categories": unref(sourceCategories),
          "external-sources": unref(externalSources),
          "top-pages": unref(topPages),
          "top-landing-pages": unref(topLandingPages),
          preset: unref(preset),
          copy: unref(copy),
          "format-number": formatNumber,
          "format-percent": formatPercent,
          "format-revenue": formatRevenue,
          "format-source-label": formatSourceLabel,
          onSourceClick: navigateToSourceVisitors,
          onCategoryClick: navigateToCategoryVisitors,
          onPageClick: navigateToPageVisits
        }, null, _parent));
        _push(ssrRenderComponent(StatsGeoAndDevicesGrid, {
          "cleanup-days": unref(cleanupDays),
          "onUpdate:cleanupDays": ($event) => isRef(cleanupDays) ? cleanupDays.value = $event : null,
          geography: unref(geography),
          "geo-conversions": unref(geoConversions),
          devices: unref(devices),
          browsers: unref(browsers),
          "operating-systems": unref(operatingSystems),
          preset: unref(preset),
          "is-cleaning-up": unref(isCleaningUp),
          "can-cleanup": unref(hasAdminPerm)("stats:edit"),
          "format-number": formatNumber,
          "format-percent": formatPercent,
          "format-revenue": formatRevenue,
          onConfirmCleanup: confirmCleanup
        }, null, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/stats.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=stats-DdI8xPDb.mjs.map
