import { p as useRouter, u as useI18n, d as useFormatTime, H as useRoute, y as useFetch, x as usePagination, q as useConfirm, f as useAdminPermissions, i as _sfc_main$T, S as PageRequestError, _ as _sfc_main$Y, k as _sfc_main$O, G as _sfc_main$p, b as _sfc_main$A, z as _sfc_main$y, e as useToast } from './server.mjs';
import { _ as _sfc_main$1 } from './Tooltip-BTaeSdzd.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-Dpul9c_Q.mjs';
import { g as getVisitorStatsCopy, a as getSafeExternalUrl, f as formatExternalUrlLabel, b as getSourceTypeColor, c as formatVisitorLocation, d as getSafeInternalPath, e as formatRegionCity, _ as __nuxt_component_5, h as __nuxt_component_6, i as formatStatsNumber, j as getStatsTrendWidth, k as formatStatsPercent, s as shortenVisitorId } from './visitorStatsCopy-kJ7wc3Fj.mjs';
import { defineComponent, computed, ref, watch, unref, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, isRef, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
import 'node:fs/promises';
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
import './Kbd-D90vDiJp.mjs';

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
const defaultTrendLimit = 7;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stats",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const router = useRouter();
    const { t, locale } = useI18n();
    const copy = computed(() => getVisitorStatsCopy(locale.value));
    const { formatDateTime } = useFormatTime();
    const copyText = (text, label) => {
      if (!text) return;
      try {
        if (typeof useToast === "function") {
          useToast().add({
            title: t("admin.common.copied") || "\u5DF2\u590D\u5236",
            description: `${label || ""}: ${text}`,
            color: "success"
          });
        }
      } catch {
      }
    };
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
    const trend = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.trend) || [];
    });
    const isTrendExpanded = ref(false);
    const displayedTrend = computed(() => {
      const list = trend.value;
      if (isTrendExpanded.value || list.length <= defaultTrendLimit) {
        return list;
      }
      return list.slice(-defaultTrendLimit);
    });
    watch(preset, () => {
      isTrendExpanded.value = false;
    });
    const geography = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.geography) || [];
    });
    const devices = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.devices) || [];
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
    const funnel = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.funnel) || [];
    });
    const isModalOpen = ref(false);
    const modalTitle = ref("");
    const modalSource = ref("visitors");
    const modalEventType = ref("");
    const modalSourceType = ref("");
    const modalSourceKey = ref("");
    const modalAttribution = ref("last");
    const isVisitorDetailOpen = ref(false);
    const selectedVisitorId = ref(null);
    const isIpDetailOpen = ref(false);
    const selectedIp = ref(null);
    function openVisitorDetail(visitorId) {
      selectedVisitorId.value = visitorId;
      isVisitorDetailOpen.value = true;
    }
    function openIpDetail(ip) {
      selectedIp.value = ip;
      isIpDetailOpen.value = true;
    }
    function openVisitorFromIp(visitorId) {
      isIpDetailOpen.value = false;
      openVisitorDetail(visitorId);
    }
    const {
      page: modalPage,
      pageSize: modalPageSize,
      onPageChange: onModalPageChange
    } = usePagination(20);
    const visitorsUrl = computed(
      () => {
        let url = `/api/admin/stats/visitors?preset=${preset.value}&days=${rangeDays.value}&page=${modalPage.value}&pageSize=${modalPageSize.value}&attribution=${modalAttribution.value}`;
        if (modalEventType.value) {
          url += `&type=${modalEventType.value}`;
        }
        if (modalSourceType.value) {
          url += `&sourceType=${encodeURIComponent(modalSourceType.value)}`;
        }
        if (modalSourceKey.value) {
          url += `&sourceKey=${encodeURIComponent(modalSourceKey.value)}`;
        }
        return url;
      }
    );
    const eventsUrl = computed(
      () => `/api/admin/stats/events?preset=${preset.value}&days=${rangeDays.value}&page=${modalPage.value}&pageSize=${modalPageSize.value}`
    );
    const pageVisitsUrl = computed(
      () => `/api/admin/stats/page-visits?preset=${preset.value}&days=${rangeDays.value}&page=${modalPage.value}&pageSize=${modalPageSize.value}`
    );
    const {
      data: visitorsData,
      pending: visitorsPending,
      refresh: refreshVisitors,
      error: visitorsError
    } = useFetch(
      visitorsUrl,
      { immediate: false, watch: false },
      "$kglNl4jBoA"
      /* nuxt-injected */
    );
    const {
      data: eventsData,
      pending: eventsPending,
      refresh: refreshEvents,
      error: eventsError
    } = useFetch(
      eventsUrl,
      { immediate: false, watch: false },
      "$HqQHuL6bP0"
      /* nuxt-injected */
    );
    const {
      data: pageVisitsData,
      pending: pageVisitsPending,
      refresh: refreshPageVisits,
      error: pageVisitsError
    } = useFetch(
      pageVisitsUrl,
      { immediate: false, watch: false },
      "$hoT7nVyFoA"
      /* nuxt-injected */
    );
    const visitorRows = computed(() => {
      var _a2;
      return ((_a2 = visitorsData.value) == null ? void 0 : _a2.items) || [];
    });
    const visitorTotalItems = computed(
      () => {
        var _a2, _b;
        return Number(((_b = (_a2 = visitorsData.value) == null ? void 0 : _a2.pagination) == null ? void 0 : _b.totalItems) || 0);
      }
    );
    const eventRows = computed(() => {
      var _a2;
      return ((_a2 = eventsData.value) == null ? void 0 : _a2.items) || [];
    });
    const eventTotalItems = computed(
      () => {
        var _a2, _b;
        return Number(((_b = (_a2 = eventsData.value) == null ? void 0 : _a2.pagination) == null ? void 0 : _b.totalItems) || 0);
      }
    );
    const pageVisitRows = computed(() => {
      var _a2;
      return ((_a2 = pageVisitsData.value) == null ? void 0 : _a2.items) || [];
    });
    const pageVisitTotalItems = computed(
      () => {
        var _a2, _b;
        return Number(((_b = (_a2 = pageVisitsData.value) == null ? void 0 : _a2.pagination) == null ? void 0 : _b.totalItems) || 0);
      }
    );
    const modalRows = computed(
      () => modalSource.value === "events" ? eventRows.value : modalSource.value === "pageVisits" ? pageVisitRows.value : visitorRows.value
    );
    const modalTotalItems = computed(
      () => modalSource.value === "events" ? eventTotalItems.value : modalSource.value === "pageVisits" ? pageVisitTotalItems.value : visitorTotalItems.value
    );
    const modalPending = computed(
      () => modalSource.value === "events" ? eventsPending.value : modalSource.value === "pageVisits" ? pageVisitsPending.value : visitorsPending.value
    );
    const modalError = computed(
      () => modalSource.value === "events" ? eventsError.value : modalSource.value === "pageVisits" ? pageVisitsError.value : visitorsError.value
    );
    const modalUrl = computed(
      () => modalSource.value === "events" ? eventsUrl.value : modalSource.value === "pageVisits" ? pageVisitsUrl.value : visitorsUrl.value
    );
    function refreshModal() {
      return modalSource.value === "events" ? refreshEvents() : modalSource.value === "pageVisits" ? refreshPageVisits() : refreshVisitors();
    }
    watch([isModalOpen, modalUrl], ([open]) => {
      if (open) void refreshModal();
    });
    watch([visitorsError, eventsError, pageVisitsError], ([vErr, eErr, pErr]) => {
      const err = vErr || eErr || pErr;
      if ((err == null ? void 0 : err.statusCode) === 401) {
        router.push("/admin/login");
      }
    });
    const maxPageViews = computed(
      () => Math.max(...trend.value.map((item) => Number(item.pageViews || 0)), 1)
    );
    const maxUniqueVisitors = computed(
      () => Math.max(
        ...trend.value.map((item) => Number(item.uniqueVisitors || 0)),
        1
      )
    );
    const overviewCards = computed(() => buildStatsOverviewCards(
      overview.value,
      translateStatsCard,
      formatNumber,
      formatPercent
    ));
    const funnelLabels = { page_view: "uniqueVisitors", product_view: "productVisitors", begin_checkout: "checkoutVisitors", order_paid: "paidVisitors", auth: "authVisitors" };
    const funnelWithRate = computed(() => {
      const base = Number(overview.value.uniqueVisitors || 0);
      return funnel.value.map((item) => ({
        ...item,
        label: item.key === "page_view" ? copy.value.pageVisitors : t(`admin.stats.${funnelLabels[item.key]}`),
        rate: base > 0 ? Number((Number(item.visitors || 0) / base * 100).toFixed(1)) : 0
      }));
    });
    function handleRefresh() {
      refresh();
      if (isModalOpen.value) void refreshModal();
    }
    watch(preset, () => {
      modalPage.value = 1;
    });
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
    function getTrendWidth(value, max) {
      return getStatsTrendWidth(value, max);
    }
    function shortVisitor(value) {
      return shortenVisitorId(value);
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
      const _component_UButton = _sfc_main$T;
      const _component_PageRequestError = PageRequestError;
      const _component_UTooltip = _sfc_main$1;
      const _component_UIcon = _sfc_main$Y;
      const _component_UBadge = _sfc_main$O;
      const _component_UCard = _sfc_main$p;
      const _component_UInput = _sfc_main$A;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UPagination = _sfc_main$y;
      const _component_AdminStatsVisitorDetailModal = __nuxt_component_5;
      const _component_AdminStatsIpDetailModal = __nuxt_component_6;
      _push(`<!--[--><div class="min-h-[calc(100vh-8rem)]"><div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-8"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(unref(t)("admin.stats.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(unref(t)("admin.stats.subtitle"))}</p></div><div class="flex flex-wrap items-center gap-2"><div class="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121214] p-1"><!--[-->`);
      ssrRenderList(unref(dayOptions), (option) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(preset) === option.value ? "bg-purple-600 text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5", "px-3 py-1.5 rounded-lg text-sm transition-colors"])}">${ssrInterpolate(option.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        to: `/admin/stats/visitors?preset=${unref(preset)}`,
        color: "primary",
        variant: "soft",
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
        icon: "ph:arrows-clockwise",
        loading: unref(pending),
        onClick: handleRefresh
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
        if (unref(overview).unattributedPaidOrders > 0) {
          _push(`<div class="mb-6 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/70 dark:bg-amber-950/20 px-4 py-3 text-xs text-amber-700 dark:text-amber-300">${ssrInterpolate(unref(copy).unlinked)} ${ssrInterpolate(formatNumber(unref(overview).unattributedPaidOrders))} ${ssrInterpolate(unref(copy).orders)} \xB7 ${ssrInterpolate(formatRevenue({ revenueByCurrency: unref(overview).unattributedRevenueByCurrency }))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8"><!--[-->`);
        ssrRenderList(unref(overviewCards), (card) => {
          _push(`<div class="${ssrRenderClass([card.clickable ? "cursor-pointer hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5" : "", "bg-white dark:bg-[#121214] p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm transition-all flex flex-col justify-between"])}"><div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-1.5 min-w-0"><span class="text-sm text-gray-500 dark:text-gray-400 truncate">${ssrInterpolate(card.label)}</span>`);
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
          _push(`</div>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: card.icon,
            class: ["w-5 h-5 shrink-0", card.iconClass]
          }, null, _parent));
          _push(`</div><div class="mt-4 flex items-baseline justify-between gap-2 flex-wrap"><div class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight tabular-nums">${ssrInterpolate(card.value)}</div>`);
          if (card.comparison) {
            _push(`<span class="${ssrRenderClass([card.comparison.trend === "up" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : card.comparison.trend === "down" ? "bg-rose-500/10 text-rose-600 dark:text-rose-400" : "bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-400", "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold tabular-nums"])}">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: card.comparison.trend === "up" ? "ph:trend-up-bold" : card.comparison.trend === "down" ? "ph:trend-down-bold" : "ph:minus-bold",
              class: "w-3.5 h-3.5 shrink-0"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(card.comparison.badgeText)}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
          if (card.comparison) {
            _push(`<div class="mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800/60 space-y-1.5 text-xs tabular-nums"><div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1"><span class="text-gray-500 dark:text-gray-400">${ssrInterpolate(card.comparison.primaryLabel)} <span class="font-medium text-gray-700 dark:text-gray-200">${ssrInterpolate(card.comparison.primaryValue)}</span></span>`);
            if (card.comparison.secondaryLabel) {
              _push(`<span class="text-gray-400 dark:text-gray-500">${ssrInterpolate(card.comparison.secondaryLabel)} <span class="font-medium text-gray-600 dark:text-gray-300">${ssrInterpolate(card.comparison.secondaryValue)}</span></span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            if (card.comparison.forecastLabel) {
              _push(`<div class="flex items-center justify-between text-xs"><span class="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle",
                class: "w-3.5 h-3.5 text-purple-500 dark:text-purple-400 shrink-0"
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
        _push(`<!--]--></div><div class="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-6 mb-8"><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6 flex flex-col justify-between"><div><div class="flex items-center justify-between mb-6"><div><div class="flex items-center gap-2"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.trafficTrend"))}</h2>`);
        if (unref(trend).length > defaultTrendLimit && !unref(isTrendExpanded)) {
          _push(ssrRenderComponent(_component_UBadge, {
            color: "neutral",
            variant: "subtle",
            size: "xs"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("admin.stats.recentDays", { count: defaultTrendLimit }))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("admin.stats.recentDays", { count: defaultTrendLimit })), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.trafficTrendSubtitle"))}</p></div>`);
        if (unref(trend).length > defaultTrendLimit) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "ghost",
            size: "xs",
            icon: unref(isTrendExpanded) ? "ph:caret-up" : "ph:caret-down",
            class: "shrink-0",
            onClick: ($event) => isTrendExpanded.value = !unref(isTrendExpanded)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(isTrendExpanded) ? unref(t)("admin.stats.collapseTrend") : unref(t)("admin.stats.viewAllTrend", { count: unref(trend).length }))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(isTrendExpanded) ? unref(t)("admin.stats.collapseTrend") : unref(t)("admin.stats.viewAllTrend", { count: unref(trend).length })), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="${ssrRenderClass(unref(isTrendExpanded) && unref(trend).length > 10 ? "max-h-[460px] overflow-y-auto pr-1 space-y-3" : "space-y-3")}"><!--[-->`);
        ssrRenderList(unref(displayedTrend), (item) => {
          _push(`<div class="grid grid-cols-[72px_1fr_72px_72px_72px] gap-3 items-center"><div class="text-xs text-gray-500">${ssrInterpolate(item.label)}</div><div class="space-y-2 bg-gray-100 dark:bg-transparent rounded-lg p-1"><div class="h-2 rounded-full bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-cyan-500" style="${ssrRenderStyle({ width: `${getTrendWidth(item.pageViews, unref(maxPageViews))}%` })}"></div></div><div class="h-2 rounded-full bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-purple-500" style="${ssrRenderStyle({ width: `${getTrendWidth(item.uniqueVisitors, unref(maxUniqueVisitors))}%` })}"></div></div></div><div class="text-right text-sm text-cyan-600 dark:text-cyan-300">${ssrInterpolate(formatNumber(item.pageViews))}</div><div class="text-right text-sm text-purple-600 dark:text-purple-300">${ssrInterpolate(formatNumber(item.uniqueVisitors))}</div><div class="text-right text-sm text-emerald-600 dark:text-emerald-300">${ssrInterpolate(formatNumber(item.paidVisitors))}</div></div>`);
        });
        _push(`<!--]--></div></div><div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500"><div class="flex items-center gap-6"><div class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-cyan-500"></div> ${ssrInterpolate(unref(t)("admin.stats.pageViews"))}</div><div class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-purple-500"></div> ${ssrInterpolate(unref(t)("admin.stats.uniqueVisitors"))}</div><div class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full bg-emerald-500"></div> ${ssrInterpolate(unref(t)("admin.stats.paidVisitors"))}</div></div>`);
        if (unref(trend).length > defaultTrendLimit) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "link",
            size: "xs",
            icon: unref(isTrendExpanded) ? "ph:caret-up" : "ph:caret-down",
            class: "p-0 text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white",
            onClick: ($event) => isTrendExpanded.value = !unref(isTrendExpanded)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(isTrendExpanded) ? unref(t)("admin.stats.collapseTrend") : unref(t)("admin.stats.viewAllTrend", { count: unref(trend).length }))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(isTrendExpanded) ? unref(t)("admin.stats.collapseTrend") : unref(t)("admin.stats.viewAllTrend", { count: unref(trend).length })), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(copy).behavior)}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(copy).behaviorSubtitle)}</p></div><div class="mt-6 space-y-4"><!--[-->`);
        ssrRenderList(unref(funnelWithRate), (step) => {
          _push(`<div class="space-y-2"><div class="flex items-center justify-between text-sm"><span class="text-gray-500 dark:text-gray-300">${ssrInterpolate(step.label)}</span><span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(formatNumber(step.visitors))} \xB7 ${ssrInterpolate(formatPercent(step.rate))}</span></div><div class="h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-emerald-500" style="${ssrRenderStyle({ width: `${step.rate}%` })}"></div></div></div>`);
        });
        _push(`<!--]--></div></div></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8"><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><div class="flex items-center justify-between mb-5"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.firstTouch"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(copy).firstSubtitle)}</p></div></div><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(firstTouchSources), (item) => {
          var _a2, _b;
          _push(`<div class="${ssrRenderClass([item.count > 0 ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 group" : "", "space-y-1.5 p-2 -mx-2 rounded-xl transition-colors"])}"><div class="flex items-center justify-between text-sm"><div class="flex items-center gap-2 max-w-[70%] truncate"><span class="text-gray-700 dark:text-gray-200 font-medium truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"${ssrRenderAttr("title", item.label)}>${ssrInterpolate(formatSourceLabel(item.label))}</span>`);
          if (item.paid > 0) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "success",
              variant: "subtle",
              size: "xs",
              class: "shrink-0 font-mono"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.paidVisitors)} ${ssrInterpolate(unref(copy).people)} \xB7 ${ssrInterpolate(item.paidOrders)} ${ssrInterpolate(unref(copy).orders)} \xB7 ${ssrInterpolate(formatRevenue(item))} (${ssrInterpolate(item.conversionRate)}%) `);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.paidVisitors) + " " + toDisplayString(unref(copy).people) + " \xB7 " + toDisplayString(item.paidOrders) + " " + toDisplayString(unref(copy).orders) + " \xB7 " + toDisplayString(formatRevenue(item)) + " (" + toDisplayString(item.conversionRate) + "%) ", 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center gap-1.5 text-right text-gray-900 dark:text-white font-medium whitespace-nowrap text-xs"><span>${ssrInterpolate(formatNumber(item.count))} <span class="text-gray-400 font-normal">(${ssrInterpolate(formatPercent(item.percentage))})</span></span>`);
          if (item.count > 0) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-right",
              class: "w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-purple-500" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div>`);
          if (((_a2 = item.terms) == null ? void 0 : _a2.length) || ((_b = item.referrers) == null ? void 0 : _b.length)) {
            _push(`<div class="flex flex-wrap items-center gap-1.5 pt-0.5"><!--[-->`);
            ssrRenderList(item.terms, (term) => {
              _push(ssrRenderComponent(_component_UBadge, {
                key: `term-${term}`,
                color: "info",
                variant: "subtle",
                size: "xs",
                class: "inline-flex items-center gap-1 font-mono max-w-[160px] truncate",
                title: `${unref(copy).keywordLabel} ${term}`
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
        _push(`<!--]--></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><div class="flex items-center justify-between mb-5"><div><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(copy).lastTitle)}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(copy).lastSubtitle)}</p></div></div><div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(lastTouchSources), (item) => {
          var _a2, _b;
          _push(`<div class="${ssrRenderClass([item.count > 0 ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 group" : "", "space-y-1.5 p-2 -mx-2 rounded-xl transition-colors"])}"><div class="flex items-center justify-between text-sm"><div class="flex items-center gap-2 max-w-[70%] truncate"><span class="text-gray-700 dark:text-gray-200 font-medium truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"${ssrRenderAttr("title", item.label)}>${ssrInterpolate(formatSourceLabel(item.label))}</span>`);
          if (item.paid > 0) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "success",
              variant: "subtle",
              size: "xs",
              class: "shrink-0 font-mono"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.paidVisitors)} ${ssrInterpolate(unref(copy).people)} \xB7 ${ssrInterpolate(item.paidOrders)} ${ssrInterpolate(unref(copy).orders)} \xB7 ${ssrInterpolate(formatRevenue(item))} (${ssrInterpolate(item.conversionRate)}%) `);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.paidVisitors) + " " + toDisplayString(unref(copy).people) + " \xB7 " + toDisplayString(item.paidOrders) + " " + toDisplayString(unref(copy).orders) + " \xB7 " + toDisplayString(formatRevenue(item)) + " (" + toDisplayString(item.conversionRate) + "%) ", 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center gap-1.5 text-right text-gray-900 dark:text-white font-medium whitespace-nowrap text-xs"><span>${ssrInterpolate(formatNumber(item.count))} <span class="text-gray-400 font-normal">(${ssrInterpolate(formatPercent(item.percentage))})</span></span>`);
          if (item.count > 0) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-right",
              class: "w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-cyan-500" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div>`);
          if (((_a2 = item.terms) == null ? void 0 : _a2.length) || ((_b = item.referrers) == null ? void 0 : _b.length)) {
            _push(`<div class="flex flex-wrap items-center gap-1.5 pt-0.5"><!--[-->`);
            ssrRenderList(item.terms, (term) => {
              _push(ssrRenderComponent(_component_UBadge, {
                key: `term-${term}`,
                color: "info",
                variant: "subtle",
                size: "xs",
                class: "inline-flex items-center gap-1 font-mono max-w-[160px] truncate",
                title: `${unref(copy).keywordLabel} ${term}`
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
        _push(`<!--]--></div></div></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8"><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.sourceCategories"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(copy).categorySubtitle)}</p><div class="mt-5 space-y-3"><!--[-->`);
        ssrRenderList(unref(sourceCategories), (item) => {
          _push(`<div class="${ssrRenderClass([item.count > 0 ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 group" : "opacity-60", "flex items-center justify-between text-sm py-2 px-2.5 -mx-2.5 rounded-xl border-b border-gray-50 dark:border-gray-900/50 last:border-none transition-colors"])}"><div class="flex items-center gap-2"><span class="text-gray-700 dark:text-gray-200 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">${ssrInterpolate(formatSourceLabel(item.label))}</span>`);
          if (item.paid > 0) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "success",
              variant: "subtle",
              size: "xs",
              class: "font-mono"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.paidVisitors)} ${ssrInterpolate(unref(copy).people)} \xB7 ${ssrInterpolate(item.paidOrders)} ${ssrInterpolate(unref(copy).orders)} \xB7 ${ssrInterpolate(formatRevenue(item))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.paidVisitors) + " " + toDisplayString(unref(copy).people) + " \xB7 " + toDisplayString(item.paidOrders) + " " + toDisplayString(unref(copy).orders) + " \xB7 " + toDisplayString(formatRevenue(item)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center gap-2"><span class="text-gray-900 dark:text-white tabular-nums">${ssrInterpolate(formatNumber(item.count))} \xB7 ${ssrInterpolate(formatPercent(item.percentage))}</span>`);
          if (item.count > 0) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-right",
              class: "w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(copy).knownSources)}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(copy).knownSubtitle)}</p><div class="mt-5 space-y-4"><!--[-->`);
        ssrRenderList(unref(externalSources), (item) => {
          var _a2, _b;
          _push(`<div class="${ssrRenderClass([item.count > 0 ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/40 group" : "", "space-y-1.5 p-2 -mx-2 rounded-xl transition-colors"])}"><div class="flex items-center justify-between text-sm"><div class="flex items-center gap-2 max-w-[70%] truncate"><span class="text-gray-700 dark:text-gray-200 font-medium truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"${ssrRenderAttr("title", item.label)}>${ssrInterpolate(formatSourceLabel(item.label))}</span>`);
          if (item.paid > 0) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "success",
              variant: "subtle",
              size: "xs",
              class: "shrink-0 font-mono"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.paidVisitors)} ${ssrInterpolate(unref(copy).people)} \xB7 ${ssrInterpolate(item.paidOrders)} ${ssrInterpolate(unref(copy).orders)} \xB7 ${ssrInterpolate(formatRevenue(item))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.paidVisitors) + " " + toDisplayString(unref(copy).people) + " \xB7 " + toDisplayString(item.paidOrders) + " " + toDisplayString(unref(copy).orders) + " \xB7 " + toDisplayString(formatRevenue(item)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center gap-1.5 text-right text-gray-900 dark:text-white font-medium whitespace-nowrap text-xs"><span>${ssrInterpolate(formatNumber(item.count))} <span class="text-gray-400 font-normal">(${ssrInterpolate(formatPercent(item.percentage))})</span></span>`);
          if (item.count > 0) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-right",
              class: "w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="h-1.5 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-sky-500" style="${ssrRenderStyle({ width: `${item.percentage}%` })}"></div></div>`);
          if (((_a2 = item.terms) == null ? void 0 : _a2.length) || ((_b = item.referrers) == null ? void 0 : _b.length)) {
            _push(`<div class="flex flex-wrap items-center gap-1.5 pt-0.5"><!--[-->`);
            ssrRenderList(item.terms, (term) => {
              _push(ssrRenderComponent(_component_UBadge, {
                key: `term-${term}`,
                color: "info",
                variant: "subtle",
                size: "xs",
                class: "inline-flex items-center gap-1 font-mono max-w-[160px] truncate",
                title: `${unref(copy).keywordLabel} ${term}`
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
        _push(`<!--]--></div></div></div><div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8"><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.regions"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.regionsSubtitle"))}</p><div class="mt-5 space-y-3"><!--[-->`);
        ssrRenderList(unref(geography), (item) => {
          _push(`<div class="flex items-center justify-between text-sm"><span class="text-gray-600 dark:text-gray-300">${ssrInterpolate(item.label)}</span><span class="text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.count))} \xB7 ${ssrInterpolate(formatPercent(item.percentage))}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm p-6"><h2 class="text-lg font-bold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("admin.stats.devices"))}</h2><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(unref(t)("admin.stats.devicesSubtitle"))}</p><div class="mt-5 space-y-3"><!--[-->`);
        ssrRenderList(unref(devices), (item) => {
          _push(`<div class="flex items-center justify-between text-sm"><span class="text-gray-600 dark:text-gray-300">${ssrInterpolate(item.label)}</span><span class="text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.count))} \xB7 ${ssrInterpolate(formatPercent(item.percentage))}</span></div>`);
        });
        _push(`<!--]--></div></div></div><!--]-->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "mt-8" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h2 class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(t)("admin.dataCleanup.title"))}</h2><p class="text-sm text-gray-500 dark:text-gray-400 mt-1"${_scopeId}>${ssrInterpolate(unref(t)("admin.dataCleanup.description"))}</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-lg font-bold text-gray-900 dark:text-white" }, toDisplayString(unref(t)("admin.dataCleanup.title")), 1),
                  createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(unref(t)("admin.dataCleanup.description")), 1)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: unref(cleanupDays),
              "onUpdate:modelValue": ($event) => isRef(cleanupDays) ? cleanupDays.value = $event : null,
              type: "number",
              min: 1,
              max: 365,
              class: "w-28",
              placeholder: unref(t)("admin.dataCleanup.keepDaysPlaceholder")
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("admin.dataCleanup.keepDays"))}</span>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              variant: "outline",
              loading: unref(isCleaningUp),
              disabled: unref(isCleaningUp) || !unref(hasAdminPerm)("stats:edit"),
              onClick: confirmCleanup
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isCleaningUp) ? unref(t)("admin.dataCleanup.cleaningUp") : unref(t)("admin.dataCleanup.cleanupBtn"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(isCleaningUp) ? unref(t)("admin.dataCleanup.cleaningUp") : unref(t)("admin.dataCleanup.cleanupBtn")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode(_component_UInput, {
                  modelValue: unref(cleanupDays),
                  "onUpdate:modelValue": ($event) => isRef(cleanupDays) ? cleanupDays.value = $event : null,
                  type: "number",
                  min: 1,
                  max: 365,
                  class: "w-28",
                  placeholder: unref(t)("admin.dataCleanup.keepDaysPlaceholder")
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("admin.dataCleanup.keepDays")), 1),
                createVNode(_component_UButton, {
                  color: "error",
                  variant: "outline",
                  loading: unref(isCleaningUp),
                  disabled: unref(isCleaningUp) || !unref(hasAdminPerm)("stats:edit"),
                  onClick: confirmCleanup
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(isCleaningUp) ? unref(t)("admin.dataCleanup.cleaningUp") : unref(t)("admin.dataCleanup.cleanupBtn")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: unref(isModalOpen),
        "onUpdate:modelValue": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : null,
        title: unref(modalTitle),
        "max-width": "max-w-7xl"
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(modalPending) && !unref(modalError)) {
              _push2(`<div class="flex items-center justify-between w-full"${_scopeId}><div class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.common.showing"))} <span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(modalTotalItems) > 0 ? (unref(modalPage) - 1) * unref(modalPageSize) + 1 : 0)}</span> ${ssrInterpolate(_ctx.$t("admin.common.to"))} <span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(Math.min(unref(modalPage) * unref(modalPageSize), unref(modalTotalItems)))}</span> ${ssrInterpolate(_ctx.$t("admin.common.of"))} <span class="text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(modalTotalItems))}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
              _push2(ssrRenderComponent(_component_UPagination, {
                modelValue: unref(modalPage),
                "onUpdate:modelValue": ($event) => isRef(modalPage) ? modalPage.value = $event : null,
                total: unref(modalTotalItems),
                "items-per-page": unref(modalPageSize),
                disabled: unref(modalPending),
                "onUpdate:page": (val) => unref(onModalPageChange)(val)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(modalPending) && !unref(modalError) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center justify-between w-full"
              }, [
                createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                  createTextVNode(toDisplayString(_ctx.$t("admin.common.showing")) + " ", 1),
                  createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(modalTotalItems) > 0 ? (unref(modalPage) - 1) * unref(modalPageSize) + 1 : 0), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("admin.common.to")) + " ", 1),
                  createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(Math.min(unref(modalPage) * unref(modalPageSize), unref(modalTotalItems))), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("admin.common.of")) + " ", 1),
                  createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(unref(modalTotalItems)), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("admin.common.results")), 1)
                ]),
                createVNode(_component_UPagination, {
                  modelValue: unref(modalPage),
                  "onUpdate:modelValue": ($event) => isRef(modalPage) ? modalPage.value = $event : null,
                  total: unref(modalTotalItems),
                  "items-per-page": unref(modalPageSize),
                  disabled: unref(modalPending),
                  "onUpdate:page": (val) => unref(onModalPageChange)(val)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "total", "items-per-page", "disabled", "onUpdate:page"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-auto"${_scopeId}>`);
            if (unref(modalPending)) {
              _push2(`<div role="status" class="flex items-center justify-center gap-2 py-16 text-gray-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner",
                class: "size-5 animate-spin"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(copy).loading)}</div>`);
            } else if (unref(modalError)) {
              _push2(ssrRenderComponent(_component_PageRequestError, {
                error: unref(modalError),
                retry: refreshModal
              }, null, _parent2, _scopeId));
            } else if (unref(modalSource) === "visitors") {
              _push2(`<table class="min-w-full text-sm"${_scopeId}><thead class="sticky top-0 bg-white dark:bg-[#121214] z-10"${_scopeId}><tr class="text-left text-gray-500 border-b border-gray-200 dark:border-gray-800"${_scopeId}><th class="py-3 px-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitor"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.registeredUser"))}</th><th class="py-3 pr-4 whitespace-nowrap font-mono text-xs"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ip"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.firstSource"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(copy).lastTitle)}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.region"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.device"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.pageViews"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.productViews"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.checkout"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.paid"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.authViews"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.lastSeen"))}</th><th class="py-3 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(unref(modalRows), (item) => {
                var _a2, _b;
                _push2(`<tr class="border-b border-gray-100 dark:border-gray-900/80 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"${_scopeId}><td class="py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs whitespace-nowrap"${_scopeId}><span class="cursor-pointer hover:text-primary-500 transition-colors inline-flex items-center gap-1 group"${ssrRenderAttr("title", item.visitorId)}${_scopeId}>${ssrInterpolate(shortVisitor(item.visitorId))} `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:copy-simple",
                  class: "w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                }, null, _parent2, _scopeId));
                _push2(`</span></td><td class="py-3 pr-4"${_scopeId}>`);
                if (item.userId) {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "success",
                    variant: "subtle",
                    size: "xs",
                    class: "whitespace-nowrap max-w-[160px] truncate",
                    title: ((_a2 = item.user) == null ? void 0 : _a2.email) || ((_b = item.user) == null ? void 0 : _b.nickname) || ""
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a3, _b2, _c, _d;
                      if (_push3) {
                        _push3(`${ssrInterpolate(((_a3 = item.user) == null ? void 0 : _a3.nickname) || ((_b2 = item.user) == null ? void 0 : _b2.email) || unref(t)("admin.stats.visitorDetail.registered"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(((_c = item.user) == null ? void 0 : _c.nickname) || ((_d = item.user) == null ? void 0 : _d.email) || unref(t)("admin.stats.visitorDetail.registered")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_UBadge, {
                    color: "neutral",
                    variant: "subtle",
                    size: "xs"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("admin.stats.visitorDetail.anonymous"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }
                _push2(`</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 font-mono text-xs whitespace-nowrap"${_scopeId}>`);
                if (item.ip && item.ip !== "Local") {
                  _push2(`<span class="cursor-pointer hover:text-primary-500 transition-colors inline-flex items-center gap-1"${ssrRenderAttr("title", unref(t)("admin.stats.ipDetail.view") + ": " + item.ip)}${_scopeId}>${ssrInterpolate(item.ip)}</span>`);
                } else {
                  _push2(`<span${_scopeId}>Local</span>`);
                }
                _push2(`</td><td class="py-3 pr-4 whitespace-nowrap"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: unref(getSourceTypeColor)(item.firstSourceType),
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(formatSourceLabel(item.firstSourceType || "direct"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(formatSourceLabel(item.firstSourceType || "direct")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (item.firstSource && item.firstSource !== "direct" && item.firstSource !== item.firstSourceType) {
                  _push2(`<span class="text-gray-700 dark:text-gray-200 text-xs font-medium max-w-[120px] truncate"${ssrRenderAttr("title", item.firstSource)}${_scopeId}>${ssrInterpolate(item.firstSource)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.firstCampaign) {
                  _push2(`<span class="text-gray-400 dark:text-gray-500 text-[11px] font-mono max-w-[80px] truncate"${ssrRenderAttr("title", item.firstCampaign)}${_scopeId}> (${ssrInterpolate(item.firstCampaign)}) </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></td><td class="py-3 pr-4 whitespace-nowrap"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: unref(getSourceTypeColor)(item.lastSourceType),
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(formatSourceLabel(item.lastSourceType))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(formatSourceLabel(item.lastSourceType)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<span class="ml-1 text-xs"${ssrRenderAttr("title", item.lastTouch)}${_scopeId}>${ssrInterpolate(formatSourceLabel(item.lastTouch))}</span></td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatVisitorLocation)(item))}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(item.deviceType)}</td><td class="py-3 pr-4 text-gray-900 dark:text-white text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.pageViews))}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.productViews))}</td><td class="py-3 pr-4 text-amber-600 dark:text-amber-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.checkouts))}</td><td class="py-3 pr-4 text-emerald-600 dark:text-emerald-400 text-right tabular-nums font-semibold"${_scopeId}>${ssrInterpolate(formatNumber(item.paid))}</td><td class="py-3 pr-4 text-pink-600 dark:text-pink-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.auth))}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs font-mono"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(item.lastSeenAt))}</td><td class="py-3 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "ghost",
                  icon: "ph:eye",
                  size: "sm",
                  title: unref(t)("admin.stats.visitorDetail.view"),
                  onClick: ($event) => openVisitorDetail(item.visitorId)
                }, null, _parent2, _scopeId));
                _push2(`</div></td></tr>`);
              });
              _push2(`<!--]-->`);
              if (!unref(modalPending) && unref(modalRows).length === 0) {
                _push2(`<tr${_scopeId}><td colspan="14" class="px-4 py-10 text-center text-gray-500"${_scopeId}>${ssrInterpolate(unref(copy).noRecords)}</td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table>`);
            } else if (unref(modalSource) === "pageVisits") {
              _push2(`<table class="min-w-full text-sm"${_scopeId}><thead class="sticky top-0 bg-white dark:bg-[#121214] z-10"${_scopeId}><tr class="text-left text-gray-500 border-b border-gray-200 dark:border-gray-800"${_scopeId}><th class="py-3 px-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.path"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.time"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitor"))}</th><th class="py-3 pr-4 whitespace-nowrap font-mono text-xs"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ip"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.referrer"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.device"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.browser"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.os"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.region"))}</th><th class="py-3 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(unref(modalRows), (item) => {
                _push2(`<tr class="border-b border-gray-100 dark:border-gray-900/80 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"${_scopeId}><td class="py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs max-w-[220px] truncate"${ssrRenderAttr("title", item.path)}${_scopeId}>`);
                if (unref(getSafeInternalPath)(item.path)) {
                  _push2(`<a${ssrRenderAttr("href", unref(getSafeInternalPath)(item.path))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 dark:text-purple-400 hover:underline transition-colors"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(item.path)}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-square-out",
                    class: "w-3 h-3 shrink-0"
                  }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<span class="cursor-pointer hover:text-primary-500 transition-colors"${_scopeId}>${ssrInterpolate(item.path)}</span>`);
                }
                _push2(`</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs font-mono"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(item.createdAt))}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 font-mono text-xs whitespace-nowrap"${_scopeId}><span class="cursor-pointer hover:text-primary-500 transition-colors"${ssrRenderAttr("title", item.visitorId)}${_scopeId}>${ssrInterpolate(shortVisitor(item.visitorId))}</span></td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 font-mono text-xs whitespace-nowrap"${_scopeId}>`);
                if (item.ip && item.ip !== "Local") {
                  _push2(`<span class="cursor-pointer hover:text-primary-500 transition-colors"${ssrRenderAttr("title", unref(t)("admin.stats.ipDetail.view") + ": " + item.ip)}${_scopeId}>${ssrInterpolate(item.ip)}</span>`);
                } else {
                  _push2(`<span${_scopeId}>Local</span>`);
                }
                _push2(`</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs max-w-[180px] truncate"${ssrRenderAttr("title", item.referrer)}${_scopeId}>`);
                if (unref(getSafeExternalUrl)(item.referrer)) {
                  _push2(`<a${ssrRenderAttr("href", unref(getSafeExternalUrl)(item.referrer))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-mono text-sky-600 hover:text-sky-500 dark:text-sky-400 hover:underline max-w-full"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(unref(formatExternalUrlLabel)(item.referrer, 32))}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-square-out",
                    class: "w-3 h-3 shrink-0"
                  }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<span${_scopeId}>${ssrInterpolate(item.referrer || "-")}</span>`);
                }
                _push2(`</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(item.deviceType || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.browser || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.os || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatVisitorLocation)(item))}</td><td class="py-3 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
                if (item.visitorId) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:user-focus",
                    size: "sm",
                    title: unref(t)("admin.stats.visitorDetail.view"),
                    onClick: ($event) => openVisitorDetail(item.visitorId)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.ip && item.ip !== "Local") {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:globe",
                    size: "sm",
                    title: unref(t)("admin.stats.ipDetail.view"),
                    onClick: ($event) => openIpDetail(item.ip)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></td></tr>`);
              });
              _push2(`<!--]-->`);
              if (!unref(modalPending) && unref(modalRows).length === 0) {
                _push2(`<tr${_scopeId}><td colspan="10" class="px-4 py-10 text-center text-gray-500"${_scopeId}>${ssrInterpolate(unref(copy).noRecords)}</td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table>`);
            } else if (unref(modalSource) === "events") {
              _push2(`<table class="min-w-full text-sm"${_scopeId}><thead class="sticky top-0 bg-white dark:bg-[#121214] z-10"${_scopeId}><tr class="text-left text-gray-500 border-b border-gray-200 dark:border-gray-800"${_scopeId}><th class="py-3 px-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ip"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.source"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ipDetail.uniqueVisitors"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visits"))}</th><th class="py-3 pr-4 whitespace-nowrap text-right"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.ipDetail.registeredUsers"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.country"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.regionCity"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.device"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.browser"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.os"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.firstSeen"))}</th><th class="py-3 pr-4 whitespace-nowrap"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.lastSeen"))}</th><th class="py-3 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"${_scopeId}>${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(unref(modalRows), (item) => {
                _push2(`<tr class="border-b border-gray-100 dark:border-gray-900/80 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"${_scopeId}><td class="py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs whitespace-nowrap"${_scopeId}><span class="cursor-pointer hover:text-primary-500 transition-colors inline-flex items-center gap-1 group"${ssrRenderAttr("title", item.ip || "Local")}${_scopeId}>${ssrInterpolate(item.ip || "Local")} `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                }, null, _parent2, _scopeId));
                _push2(`</span></td><td class="py-3 pr-4 whitespace-nowrap"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: unref(getSourceTypeColor)(item.sourceType),
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(formatSourceLabel(item.sourceType || "direct"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(formatSourceLabel(item.sourceType || "direct")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                if (item.source && item.source !== "direct" && item.source !== item.sourceType) {
                  _push2(`<span class="text-gray-700 dark:text-gray-200 text-xs font-medium max-w-[120px] truncate"${ssrRenderAttr("title", item.source)}${_scopeId}>${ssrInterpolate(item.source)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.campaign) {
                  _push2(`<span class="text-gray-400 dark:text-gray-500 text-[11px] font-mono max-w-[80px] truncate"${ssrRenderAttr("title", item.campaign)}${_scopeId}> (${ssrInterpolate(item.campaign)}) </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 text-right tabular-nums"${_scopeId}>${ssrInterpolate(formatNumber(item.visitorCount))}</td><td class="py-3 pr-4 text-gray-900 dark:text-white text-right tabular-nums font-medium"${_scopeId}>${ssrInterpolate(formatNumber(item.visitCount))}</td><td class="py-3 pr-4 text-right tabular-nums"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: item.registeredUserCount > 0 ? "success" : "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(formatNumber(item.registeredUserCount))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(formatNumber(item.registeredUserCount)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(item.country)}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(unref(formatRegionCity)(item))}</td><td class="py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs"${_scopeId}>${ssrInterpolate(item.deviceType)}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.browser || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.os || "-")}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs font-mono"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(item.firstSeenAt))}</td><td class="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs font-mono"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(item.lastSeenAt))}</td><td class="py-3 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "ghost",
                  icon: "ph:eye",
                  size: "sm",
                  title: unref(t)("admin.stats.ipDetail.view"),
                  onClick: ($event) => openIpDetail(item.ip)
                }, null, _parent2, _scopeId));
                _push2(`</div></td></tr>`);
              });
              _push2(`<!--]-->`);
              if (!unref(modalPending) && unref(modalRows).length === 0) {
                _push2(`<tr${_scopeId}><td colspan="13" class="px-4 py-10 text-center text-gray-500"${_scopeId}>${ssrInterpolate(unref(copy).noRecords)}</td></tr>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</tbody></table>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-auto" }, [
                unref(modalPending) ? (openBlock(), createBlock("div", {
                  key: 0,
                  role: "status",
                  class: "flex items-center justify-center gap-2 py-16 text-gray-500"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:spinner",
                    class: "size-5 animate-spin"
                  }),
                  createTextVNode(" " + toDisplayString(unref(copy).loading), 1)
                ])) : unref(modalError) ? (openBlock(), createBlock(_component_PageRequestError, {
                  key: 1,
                  error: unref(modalError),
                  retry: refreshModal
                }, null, 8, ["error"])) : unref(modalSource) === "visitors" ? (openBlock(), createBlock("table", {
                  key: 2,
                  class: "min-w-full text-sm"
                }, [
                  createVNode("thead", { class: "sticky top-0 bg-white dark:bg-[#121214] z-10" }, [
                    createVNode("tr", { class: "text-left text-gray-500 border-b border-gray-200 dark:border-gray-800" }, [
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.visitor")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.registeredUser")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap font-mono text-xs" }, toDisplayString(unref(t)("admin.stats.ip")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.firstSource")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(copy).lastTitle), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.region")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.pageViews")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.productViews")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.checkout")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.paid")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.authViews")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.lastSeen")), 1),
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(modalRows), (item) => {
                      var _a2, _b;
                      return openBlock(), createBlock("tr", {
                        key: item.visitorId,
                        class: "border-b border-gray-100 dark:border-gray-900/80 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"
                      }, [
                        createVNode("td", { class: "py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs whitespace-nowrap" }, [
                          createVNode("span", {
                            class: "cursor-pointer hover:text-primary-500 transition-colors inline-flex items-center gap-1 group",
                            title: item.visitorId,
                            onClick: ($event) => copyText(item.visitorId, unref(t)("admin.stats.visitor"))
                          }, [
                            createTextVNode(toDisplayString(shortVisitor(item.visitorId)) + " ", 1),
                            createVNode(_component_UIcon, {
                              name: "ph:copy-simple",
                              class: "w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            })
                          ], 8, ["title", "onClick"])
                        ]),
                        createVNode("td", { class: "py-3 pr-4" }, [
                          item.userId ? (openBlock(), createBlock(_component_UBadge, {
                            key: 0,
                            color: "success",
                            variant: "subtle",
                            size: "xs",
                            class: "whitespace-nowrap max-w-[160px] truncate",
                            title: ((_a2 = item.user) == null ? void 0 : _a2.email) || ((_b = item.user) == null ? void 0 : _b.nickname) || ""
                          }, {
                            default: withCtx(() => {
                              var _a3, _b2;
                              return [
                                createTextVNode(toDisplayString(((_a3 = item.user) == null ? void 0 : _a3.nickname) || ((_b2 = item.user) == null ? void 0 : _b2.email) || unref(t)("admin.stats.visitorDetail.registered")), 1)
                              ];
                            }),
                            _: 2
                          }, 1032, ["title"])) : (openBlock(), createBlock(_component_UBadge, {
                            key: 1,
                            color: "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1)
                            ]),
                            _: 1
                          }))
                        ]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 font-mono text-xs whitespace-nowrap" }, [
                          item.ip && item.ip !== "Local" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "cursor-pointer hover:text-primary-500 transition-colors inline-flex items-center gap-1",
                            title: unref(t)("admin.stats.ipDetail.view") + ": " + item.ip,
                            onClick: ($event) => openIpDetail(item.ip)
                          }, toDisplayString(item.ip), 9, ["title", "onClick"])) : (openBlock(), createBlock("span", { key: 1 }, "Local"))
                        ]),
                        createVNode("td", { class: "py-3 pr-4 whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center gap-1.5" }, [
                            createVNode(_component_UBadge, {
                              color: unref(getSourceTypeColor)(item.firstSourceType),
                              variant: "subtle",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(formatSourceLabel(item.firstSourceType || "direct")), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            item.firstSource && item.firstSource !== "direct" && item.firstSource !== item.firstSourceType ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-gray-700 dark:text-gray-200 text-xs font-medium max-w-[120px] truncate",
                              title: item.firstSource
                            }, toDisplayString(item.firstSource), 9, ["title"])) : createCommentVNode("", true),
                            item.firstCampaign ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-gray-400 dark:text-gray-500 text-[11px] font-mono max-w-[80px] truncate",
                              title: item.firstCampaign
                            }, " (" + toDisplayString(item.firstCampaign) + ") ", 9, ["title"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "py-3 pr-4 whitespace-nowrap" }, [
                          createVNode(_component_UBadge, {
                            color: unref(getSourceTypeColor)(item.lastSourceType),
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatSourceLabel(item.lastSourceType)), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          createVNode("span", {
                            class: "ml-1 text-xs",
                            title: item.lastTouch
                          }, toDisplayString(formatSourceLabel(item.lastTouch)), 9, ["title"])
                        ]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs" }, toDisplayString(unref(formatVisitorLocation)(item)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs" }, toDisplayString(item.deviceType), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-900 dark:text-white text-right tabular-nums" }, toDisplayString(formatNumber(item.pageViews)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.productViews)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-amber-600 dark:text-amber-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.checkouts)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-emerald-600 dark:text-emerald-400 text-right tabular-nums font-semibold" }, toDisplayString(formatNumber(item.paid)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-pink-600 dark:text-pink-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.auth)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs font-mono" }, toDisplayString(unref(formatDateTime)(item.lastSeenAt)), 1),
                        createVNode("td", { class: "py-3 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                            createVNode(_component_UButton, {
                              color: "primary",
                              variant: "ghost",
                              icon: "ph:eye",
                              size: "sm",
                              title: unref(t)("admin.stats.visitorDetail.view"),
                              onClick: ($event) => openVisitorDetail(item.visitorId)
                            }, null, 8, ["title", "onClick"])
                          ])
                        ])
                      ]);
                    }), 128)),
                    !unref(modalPending) && unref(modalRows).length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "14",
                        class: "px-4 py-10 text-center text-gray-500"
                      }, toDisplayString(unref(copy).noRecords), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ])) : unref(modalSource) === "pageVisits" ? (openBlock(), createBlock("table", {
                  key: 3,
                  class: "min-w-full text-sm"
                }, [
                  createVNode("thead", { class: "sticky top-0 bg-white dark:bg-[#121214] z-10" }, [
                    createVNode("tr", { class: "text-left text-gray-500 border-b border-gray-200 dark:border-gray-800" }, [
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.path")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.time")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.visitor")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap font-mono text-xs" }, toDisplayString(unref(t)("admin.stats.ip")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.referrer")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.browser")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.os")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.region")), 1),
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(modalRows), (item) => {
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        class: "border-b border-gray-100 dark:border-gray-900/80 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"
                      }, [
                        createVNode("td", {
                          class: "py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs max-w-[220px] truncate",
                          title: item.path
                        }, [
                          unref(getSafeInternalPath)(item.path) ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: unref(getSafeInternalPath)(item.path),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 dark:text-purple-400 hover:underline transition-colors"
                          }, [
                            createVNode("span", { class: "truncate" }, toDisplayString(item.path), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-square-out",
                              class: "w-3 h-3 shrink-0"
                            })
                          ], 8, ["href"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "cursor-pointer hover:text-primary-500 transition-colors",
                            onClick: ($event) => copyText(item.path, unref(t)("admin.stats.path"))
                          }, toDisplayString(item.path), 9, ["onClick"]))
                        ], 8, ["title"]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs font-mono" }, toDisplayString(unref(formatDateTime)(item.createdAt)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 font-mono text-xs whitespace-nowrap" }, [
                          createVNode("span", {
                            class: "cursor-pointer hover:text-primary-500 transition-colors",
                            title: item.visitorId,
                            onClick: ($event) => openVisitorDetail(item.visitorId)
                          }, toDisplayString(shortVisitor(item.visitorId)), 9, ["title", "onClick"])
                        ]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 font-mono text-xs whitespace-nowrap" }, [
                          item.ip && item.ip !== "Local" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "cursor-pointer hover:text-primary-500 transition-colors",
                            title: unref(t)("admin.stats.ipDetail.view") + ": " + item.ip,
                            onClick: ($event) => openIpDetail(item.ip)
                          }, toDisplayString(item.ip), 9, ["title", "onClick"])) : (openBlock(), createBlock("span", { key: 1 }, "Local"))
                        ]),
                        createVNode("td", {
                          class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs max-w-[180px] truncate",
                          title: item.referrer
                        }, [
                          unref(getSafeExternalUrl)(item.referrer) ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: unref(getSafeExternalUrl)(item.referrer),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "inline-flex items-center gap-1 font-mono text-sky-600 hover:text-sky-500 dark:text-sky-400 hover:underline max-w-full"
                          }, [
                            createVNode("span", { class: "truncate" }, toDisplayString(unref(formatExternalUrlLabel)(item.referrer, 32)), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-square-out",
                              class: "w-3 h-3 shrink-0"
                            })
                          ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.referrer || "-"), 1))
                        ], 8, ["title"]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs" }, toDisplayString(item.deviceType || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap" }, toDisplayString(item.browser || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap" }, toDisplayString(item.os || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs" }, toDisplayString(unref(formatVisitorLocation)(item)), 1),
                        createVNode("td", { class: "py-3 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                            item.visitorId ? (openBlock(), createBlock(_component_UButton, {
                              key: 0,
                              color: "neutral",
                              variant: "ghost",
                              icon: "ph:user-focus",
                              size: "sm",
                              title: unref(t)("admin.stats.visitorDetail.view"),
                              onClick: ($event) => openVisitorDetail(item.visitorId)
                            }, null, 8, ["title", "onClick"])) : createCommentVNode("", true),
                            item.ip && item.ip !== "Local" ? (openBlock(), createBlock(_component_UButton, {
                              key: 1,
                              color: "neutral",
                              variant: "ghost",
                              icon: "ph:globe",
                              size: "sm",
                              title: unref(t)("admin.stats.ipDetail.view"),
                              onClick: ($event) => openIpDetail(item.ip)
                            }, null, 8, ["title", "onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]);
                    }), 128)),
                    !unref(modalPending) && unref(modalRows).length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "10",
                        class: "px-4 py-10 text-center text-gray-500"
                      }, toDisplayString(unref(copy).noRecords), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ])) : unref(modalSource) === "events" ? (openBlock(), createBlock("table", {
                  key: 4,
                  class: "min-w-full text-sm"
                }, [
                  createVNode("thead", { class: "sticky top-0 bg-white dark:bg-[#121214] z-10" }, [
                    createVNode("tr", { class: "text-left text-gray-500 border-b border-gray-200 dark:border-gray-800" }, [
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.ip")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.source")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.ipDetail.uniqueVisitors")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.visits")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap text-right" }, toDisplayString(unref(t)("admin.stats.ipDetail.registeredUsers")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.country")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.regionCity")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.device")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.browser")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.os")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.firstSeen")), 1),
                      createVNode("th", { class: "py-3 pr-4 whitespace-nowrap" }, toDisplayString(unref(t)("admin.stats.lastSeen")), 1),
                      createVNode("th", { class: "py-3 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, toDisplayString(unref(t)("admin.stats.visitorDetail.actions")), 1)
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(modalRows), (item) => {
                      return openBlock(), createBlock("tr", {
                        key: item.ip,
                        class: "border-b border-gray-100 dark:border-gray-900/80 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"
                      }, [
                        createVNode("td", { class: "py-3 px-4 text-gray-700 dark:text-gray-200 font-mono text-xs whitespace-nowrap" }, [
                          createVNode("span", {
                            class: "cursor-pointer hover:text-primary-500 transition-colors inline-flex items-center gap-1 group",
                            title: item.ip || "Local",
                            onClick: ($event) => openIpDetail(item.ip)
                          }, [
                            createTextVNode(toDisplayString(item.ip || "Local") + " ", 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-square-out",
                              class: "w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            })
                          ], 8, ["title", "onClick"])
                        ]),
                        createVNode("td", { class: "py-3 pr-4 whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center gap-1.5" }, [
                            createVNode(_component_UBadge, {
                              color: unref(getSourceTypeColor)(item.sourceType),
                              variant: "subtle",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(formatSourceLabel(item.sourceType || "direct")), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            item.source && item.source !== "direct" && item.source !== item.sourceType ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-gray-700 dark:text-gray-200 text-xs font-medium max-w-[120px] truncate",
                              title: item.source
                            }, toDisplayString(item.source), 9, ["title"])) : createCommentVNode("", true),
                            item.campaign ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-gray-400 dark:text-gray-500 text-[11px] font-mono max-w-[80px] truncate",
                              title: item.campaign
                            }, " (" + toDisplayString(item.campaign) + ") ", 9, ["title"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 text-right tabular-nums" }, toDisplayString(formatNumber(item.visitorCount)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-900 dark:text-white text-right tabular-nums font-medium" }, toDisplayString(formatNumber(item.visitCount)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-right tabular-nums" }, [
                          createVNode(_component_UBadge, {
                            color: item.registeredUserCount > 0 ? "success" : "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatNumber(item.registeredUserCount)), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs" }, toDisplayString(item.country), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs" }, toDisplayString(unref(formatRegionCity)(item)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-xs" }, toDisplayString(item.deviceType), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap" }, toDisplayString(item.browser || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 text-xs whitespace-nowrap" }, toDisplayString(item.os || "-"), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs font-mono" }, toDisplayString(unref(formatDateTime)(item.firstSeenAt)), 1),
                        createVNode("td", { class: "py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap text-xs font-mono" }, toDisplayString(unref(formatDateTime)(item.lastSeenAt)), 1),
                        createVNode("td", { class: "py-3 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                            createVNode(_component_UButton, {
                              color: "primary",
                              variant: "ghost",
                              icon: "ph:eye",
                              size: "sm",
                              title: unref(t)("admin.stats.ipDetail.view"),
                              onClick: ($event) => openIpDetail(item.ip)
                            }, null, 8, ["title", "onClick"])
                          ])
                        ])
                      ]);
                    }), 128)),
                    !unref(modalPending) && unref(modalRows).length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "13",
                        class: "px-4 py-10 text-center text-gray-500"
                      }, toDisplayString(unref(copy).noRecords), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AdminStatsVisitorDetailModal, {
        open: unref(isVisitorDetailOpen),
        "onUpdate:open": ($event) => isRef(isVisitorDetailOpen) ? isVisitorDetailOpen.value = $event : null,
        "visitor-id": unref(selectedVisitorId)
      }, null, _parent));
      _push(ssrRenderComponent(_component_AdminStatsIpDetailModal, {
        open: unref(isIpDetailOpen),
        "onUpdate:open": ($event) => isRef(isIpDetailOpen) ? isIpDetailOpen.value = $event : null,
        ip: unref(selectedIp),
        preset: unref(preset),
        days: unref(rangeDays),
        onViewVisitor: openVisitorFromIp
      }, null, _parent));
      _push(`<!--]-->`);
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
//# sourceMappingURL=stats-oUrndTB2.mjs.map
