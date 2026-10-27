import { H as useRoute, p as useRouter, u as useI18n, d as useFormatTime, x as usePagination, y as useFetch, i as _sfc_main$R, _ as _sfc_main$W, k as _sfc_main$M, S as PageRequestError, z as _sfc_main$y } from './server.mjs';
import { g as getVisitorStatsCopy, b as getSourceTypeColor, f as formatExternalUrlLabel, d as getSafeInternalPath, c as formatVisitorLocation, a as getSafeExternalUrl, l as getInternalReferrerPath, _ as __nuxt_component_5, h as __nuxt_component_6, i as formatStatsNumber, s as shortenVisitorId } from './visitorStatsCopy-C1Q3UDg9.mjs';
import { defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "visitors",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const VALID_TABS = ["visitors", "pageVisits", "ips"];
    const VALID_PRESETS = ["today", "yesterday", "7d", "30d", "90d"];
    const VALID_EVENTS = ["all", "page_view", "product_view", "begin_checkout", "order_paid", "auth"];
    const VALID_SOURCES = ["all", "external", "tagged", "search", "ai", "social", "referral", "campaign", "affiliate", "email", "direct"];
    const route = useRoute();
    const router = useRouter();
    const { t, locale } = useI18n();
    const copy = computed(() => getVisitorStatsCopy(locale.value));
    const { formatDateTime } = useFormatTime();
    const normalizeQueryStr = (val) => typeof val === "string" ? val.trim() : "";
    const activeTab = ref(
      VALID_TABS.includes(normalizeQueryStr((_a = route.query) == null ? void 0 : _a.tab)) ? normalizeQueryStr((_b = route.query) == null ? void 0 : _b.tab) : "visitors"
    );
    const preset = ref(
      VALID_PRESETS.includes(normalizeQueryStr((_c = route.query) == null ? void 0 : _c.preset)) ? normalizeQueryStr((_d = route.query) == null ? void 0 : _d.preset) : "today"
    );
    const eventType = ref(
      VALID_EVENTS.includes(normalizeQueryStr((_e = route.query) == null ? void 0 : _e.type)) ? normalizeQueryStr((_f = route.query) == null ? void 0 : _f.type) : "all"
    );
    const sourceType = ref(
      VALID_SOURCES.includes(normalizeQueryStr((_g = route.query) == null ? void 0 : _g.sourceType)) ? normalizeQueryStr((_h = route.query) == null ? void 0 : _h.sourceType) : "all"
    );
    const sourceKey = ref(normalizeQueryStr((_i = route.query) == null ? void 0 : _i.sourceKey));
    const sourceLabel = ref(normalizeQueryStr((_j = route.query) == null ? void 0 : _j.sourceLabel));
    const attribution = ref(((_k = route.query) == null ? void 0 : _k.attribution) === "first" ? "first" : "last");
    const searchInput = ref(normalizeQueryStr((_l = route.query) == null ? void 0 : _l.search));
    const search = ref(searchInput.value);
    const { page, pageSize, onPageChange } = usePagination(20);
    const viewTabs = computed(() => [
      { value: "visitors", label: t("admin.stats.uniqueVisitors"), icon: "ph:users" },
      { value: "pageVisits", label: t("admin.stats.pageViews"), icon: "ph:chart-line-up" },
      { value: "ips", label: t("admin.stats.uniqueIps"), icon: "ph:globe" }
    ]);
    watch(
      () => route.query,
      (q) => {
        if (!q) return;
        const nextTab = VALID_TABS.includes(normalizeQueryStr(q.tab)) ? normalizeQueryStr(q.tab) : "visitors";
        const nextPreset = VALID_PRESETS.includes(normalizeQueryStr(q.preset)) ? normalizeQueryStr(q.preset) : "today";
        const nextType = VALID_EVENTS.includes(normalizeQueryStr(q.type)) ? normalizeQueryStr(q.type) : "all";
        const nextSourceType = VALID_SOURCES.includes(normalizeQueryStr(q.sourceType)) ? normalizeQueryStr(q.sourceType) : "all";
        const nextSourceKey = normalizeQueryStr(q.sourceKey);
        const nextSourceLabel = normalizeQueryStr(q.sourceLabel);
        const nextAttribution = q.attribution === "first" ? "first" : "last";
        const nextSearch = normalizeQueryStr(q.search);
        if (activeTab.value !== nextTab) activeTab.value = nextTab;
        if (preset.value !== nextPreset) preset.value = nextPreset;
        if (eventType.value !== nextType) eventType.value = nextType;
        if (sourceType.value !== nextSourceType) sourceType.value = nextSourceType;
        if (sourceKey.value !== nextSourceKey) sourceKey.value = nextSourceKey;
        if (sourceLabel.value !== nextSourceLabel) sourceLabel.value = nextSourceLabel;
        if (attribution.value !== nextAttribution) attribution.value = nextAttribution;
        if (search.value !== nextSearch) {
          search.value = nextSearch;
          searchInput.value = nextSearch;
        }
      }
    );
    const rangeDays = computed(() => {
      if (preset.value === "today" || preset.value === "yesterday") return 1;
      return Number.parseInt(preset.value.replace("d", ""), 10) || 7;
    });
    const dayOptions = computed(() => [
      { value: "today", label: t("admin.stats.today") },
      { value: "yesterday", label: t("admin.stats.yesterday") },
      { value: "7d", label: t("admin.stats.last7Days") },
      { value: "30d", label: t("admin.stats.last30Days") },
      { value: "90d", label: t("admin.stats.last90Days") }
    ]);
    const sourceTypeOptions = computed(() => [
      { value: "all", label: copy.value.allSources },
      { value: "external", label: copy.value.externalOnly },
      { value: "tagged", label: copy.value.taggedOnly },
      { value: "search", label: t("admin.stats.search") },
      { value: "ai", label: t("admin.stats.ai") || "AI" },
      { value: "social", label: t("admin.stats.social") },
      { value: "referral", label: t("admin.stats.referral") },
      { value: "campaign", label: copy.value.campaign },
      { value: "affiliate", label: t("admin.stats.affiliate") || "Affiliate" },
      { value: "email", label: t("admin.stats.email") || "Email" },
      { value: "direct", label: copy.value.direct }
    ]);
    const behaviorOptions = computed(() => [
      { value: "all", label: copy.value.allBehaviors },
      { value: "page_view", label: copy.value.pageVisitors },
      { value: "product_view", label: t("admin.stats.productVisitors") },
      { value: "begin_checkout", label: t("admin.stats.checkoutVisitors") },
      { value: "order_paid", label: t("admin.stats.paidVisitors") },
      { value: "auth", label: t("admin.stats.authVisitors") }
    ]);
    const hasActiveFilters = computed(
      () => eventType.value !== "all" || sourceType.value !== "all" || Boolean(sourceKey.value) || Boolean(search.value) || attribution.value !== "last"
    );
    const activeListUrl = computed(() => {
      const params = new URLSearchParams({
        preset: preset.value,
        days: String(rangeDays.value),
        page: String(page.value),
        pageSize: String(pageSize.value)
      });
      if (search.value) params.set("search", search.value);
      if (activeTab.value === "pageVisits") {
        return `/api/admin/stats/page-visits?${params.toString()}`;
      }
      if (activeTab.value === "ips") {
        return `/api/admin/stats/events?${params.toString()}`;
      }
      params.set("attribution", attribution.value);
      if (eventType.value && eventType.value !== "all") params.set("type", eventType.value);
      if (sourceType.value && sourceType.value !== "all") params.set("sourceType", sourceType.value);
      if (sourceKey.value) params.set("sourceKey", sourceKey.value);
      return `/api/admin/stats/visitors?${params.toString()}`;
    });
    const { data, pending, refresh, error } = useFetch(
      activeListUrl,
      "$_2P8qxUnXp"
      /* nuxt-injected */
    );
    watch(error, (value) => {
      if ((value == null ? void 0 : value.statusCode) === 401) {
        router.push("/admin/login");
      }
    });
    const rows = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.items) || [];
    });
    const totalItems = computed(() => {
      var _a2, _b2;
      return Number(((_b2 = (_a2 = data.value) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.totalItems) || 0);
    });
    const summary = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.summary) || {};
    });
    const summaryCards = computed(() => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      return [
        {
          key: "all",
          label: t("admin.stats.uniqueVisitors"),
          value: (_a2 = summary.value.totalVisitors) != null ? _a2 : totalItems.value,
          icon: "ph:users",
          iconClass: "text-purple-500",
          active: eventType.value === "all" && sourceType.value === "all" && !sourceKey.value,
          onClick: () => {
            eventType.value = "all";
            sourceType.value = "all";
            sourceKey.value = "";
            sourceLabel.value = "";
            onFilterChange();
          }
        },
        {
          key: "external",
          label: t("admin.stats.externalVisitors"),
          value: (_b2 = summary.value.externalVisitors) != null ? _b2 : 0,
          icon: "ph:share-network",
          iconClass: "text-sky-500",
          active: sourceType.value === "external",
          onClick: () => {
            sourceType.value = sourceType.value === "external" ? "all" : "external";
            sourceKey.value = "";
            sourceLabel.value = "";
            onFilterChange();
          }
        },
        {
          key: "tagged",
          label: copy.value.campaign,
          value: (_c2 = summary.value.campaignVisitors) != null ? _c2 : 0,
          icon: "ph:megaphone",
          iconClass: "text-rose-500",
          active: sourceType.value === "tagged",
          onClick: () => {
            sourceType.value = sourceType.value === "tagged" ? "all" : "tagged";
            sourceKey.value = "";
            sourceLabel.value = "";
            onFilterChange();
          }
        },
        {
          key: "product_view",
          label: t("admin.stats.productVisitors"),
          value: (_d2 = summary.value.productVisitors) != null ? _d2 : 0,
          icon: "ph:package",
          iconClass: "text-blue-500",
          active: eventType.value === "product_view",
          onClick: () => {
            eventType.value = eventType.value === "product_view" ? "all" : "product_view";
            onFilterChange();
          }
        },
        {
          key: "begin_checkout",
          label: t("admin.stats.checkoutVisitors"),
          value: (_e2 = summary.value.checkoutVisitors) != null ? _e2 : 0,
          icon: "ph:shopping-cart-simple",
          iconClass: "text-amber-500",
          active: eventType.value === "begin_checkout",
          onClick: () => {
            eventType.value = eventType.value === "begin_checkout" ? "all" : "begin_checkout";
            onFilterChange();
          }
        },
        {
          key: "order_paid",
          label: t("admin.stats.paidVisitors"),
          value: (_f2 = summary.value.paidVisitors) != null ? _f2 : 0,
          icon: "ph:credit-card",
          iconClass: "text-emerald-500",
          active: eventType.value === "order_paid",
          onClick: () => {
            eventType.value = eventType.value === "order_paid" ? "all" : "order_paid";
            onFilterChange();
          }
        }
      ];
    });
    function syncQueryToUrl() {
      const query = {};
      if (activeTab.value !== "visitors") query.tab = activeTab.value;
      if (preset.value && preset.value !== "today") query.preset = preset.value;
      if (activeTab.value === "visitors") {
        if (eventType.value && eventType.value !== "all") query.type = eventType.value;
        if (sourceType.value && sourceType.value !== "all") query.sourceType = sourceType.value;
        if (sourceKey.value) query.sourceKey = sourceKey.value;
        if (sourceLabel.value) query.sourceLabel = sourceLabel.value;
        if (attribution.value !== "last") query.attribution = attribution.value;
      }
      if (search.value) query.search = search.value;
      void router.replace({ query });
    }
    function onFilterChange() {
      page.value = 1;
      syncQueryToUrl();
    }
    function clearSourceKey() {
      sourceKey.value = "";
      sourceLabel.value = "";
      onFilterChange();
    }
    function clearSearch() {
      searchInput.value = "";
      search.value = "";
      onFilterChange();
    }
    function resetFilters() {
      eventType.value = "all";
      sourceType.value = "all";
      sourceKey.value = "";
      sourceLabel.value = "";
      attribution.value = "last";
      searchInput.value = "";
      search.value = "";
      onFilterChange();
    }
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
    function resolveVisitorReferrerUrl(item) {
      const preferred = attribution.value === "first" ? item.firstReferrer || item.lastReferrer : item.lastReferrer || item.firstReferrer;
      const safe = getSafeExternalUrl(preferred);
      if (safe) return safe;
      const candidateDomain = attribution.value === "first" ? item.firstSource : item.lastSource;
      if (typeof candidateDomain === "string" && /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(candidateDomain.trim())) {
        return `https://${candidateDomain.trim()}`;
      }
      return null;
    }
    function getDeviceIcon(deviceType) {
      const type = (deviceType || "").toLowerCase();
      if (type === "mobile") return "ph:device-mobile";
      if (type === "tablet") return "ph:device-tablet";
      if (type === "bot") return "ph:robot";
      return "ph:desktop";
    }
    function formatNumber(value) {
      return formatStatsNumber(value, locale.value);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      const _component_UBadge = _sfc_main$M;
      const _component_PageRequestError = PageRequestError;
      const _component_UPagination = _sfc_main$y;
      const _component_AdminStatsVisitorDetailModal = __nuxt_component_5;
      const _component_AdminStatsIpDetailModal = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-8rem)]" }, _attrs))}><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4"><div class="flex flex-wrap items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: `/admin/stats?preset=${unref(preset)}`,
        color: "neutral",
        variant: "outline",
        size: "sm",
        icon: "ph:arrow-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(copy).backToOverview)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(copy).backToOverview), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="inline-flex items-center gap-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121214] p-1"><!--[-->`);
      ssrRenderList(unref(viewTabs), (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(activeTab) === tab.value ? "bg-purple-600 text-white shadow-xs" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5", "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: tab.icon,
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(tab.label)}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="flex flex-wrap items-center gap-2"><div class="flex items-center gap-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121214] p-1"><!--[-->`);
      ssrRenderList(unref(dayOptions), (option) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(preset) === option.value ? "bg-purple-600 text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5", "px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(option.label)}</button>`);
      });
      _push(`<!--]--></div>`);
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
      if (unref(activeTab) === "visitors") {
        _push(`<div class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2.5 mb-4"><!--[-->`);
        ssrRenderList(unref(summaryCards), (card) => {
          _push(`<button type="button" class="${ssrRenderClass([card.active ? "border-purple-500 ring-1 ring-purple-500/30 shadow-sm" : "border-gray-200/60 dark:border-gray-800/50 hover:border-purple-500/40", "text-left bg-white dark:bg-[#121214] px-3.5 py-2.5 rounded-xl border transition-all cursor-pointer"])}"><div class="flex items-center justify-between gap-2"><span class="text-xs text-gray-500 dark:text-gray-400 truncate">${ssrInterpolate(card.label)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: card.icon,
            class: ["w-4 h-4 shrink-0", card.iconClass]
          }, null, _parent));
          _push(`</div><div class="mt-1 text-xl font-bold text-gray-900 dark:text-white tabular-nums">${ssrInterpolate(formatNumber(card.value))}</div></button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-4 rounded-xl border border-gray-200/60 dark:border-gray-800/50 bg-white dark:bg-[#121214] p-3 shadow-sm space-y-2.5"><div class="flex flex-col lg:flex-row lg:items-center gap-3"><div class="relative flex-1 min-w-[240px]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass",
        class: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", unref(searchInput))} type="text"${ssrRenderAttr("placeholder", unref(copy).searchPlaceholder)} class="w-full h-9 pl-10 pr-8 text-sm rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-black/20 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500">`);
      if (unref(searchInput)) {
        _push(`<button type="button" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-circle-fill",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(activeTab) === "visitors") {
        _push(`<div class="flex flex-wrap items-center gap-2"><select class="h-9 px-3 text-sm rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-black/20 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40"><!--[-->`);
        ssrRenderList(unref(sourceTypeOptions), (opt) => {
          _push(`<option${ssrRenderAttr("value", opt.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(sourceType)) ? ssrLooseContain(unref(sourceType), opt.value) : ssrLooseEqual(unref(sourceType), opt.value)) ? " selected" : ""}>${ssrInterpolate(opt.label)}</option>`);
        });
        _push(`<!--]--></select><select class="h-9 px-3 text-sm rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-black/20 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40"><!--[-->`);
        ssrRenderList(unref(behaviorOptions), (opt) => {
          _push(`<option${ssrRenderAttr("value", opt.value)}${ssrIncludeBooleanAttr(Array.isArray(unref(eventType)) ? ssrLooseContain(unref(eventType), opt.value) : ssrLooseEqual(unref(eventType), opt.value)) ? " selected" : ""}>${ssrInterpolate(opt.label)}</option>`);
        });
        _push(`<!--]--></select><div class="inline-flex items-center rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-black/20 p-0.5"><button type="button" class="${ssrRenderClass([unref(attribution) === "last" ? "bg-purple-600 text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white", "px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(unref(copy).attributionLast)}</button><button type="button" class="${ssrRenderClass([unref(attribution) === "first" ? "bg-purple-600 text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white", "px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(unref(copy).attributionFirst)}</button></div>`);
        if (unref(hasActiveFilters)) {
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "ghost",
            size: "sm",
            icon: "ph:funnel-x",
            onClick: resetFilters
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).clearFilters)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).clearFilters), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (unref(search)) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "ghost",
          size: "sm",
          icon: "ph:funnel-x",
          onClick: clearSearch
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).clearFilters)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).clearFilters), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(activeTab) === "visitors" && unref(sourceKey)) {
        _push(`<div class="flex items-center gap-2 pt-1"><span class="text-xs text-gray-500">${ssrInterpolate(unref(copy).activeSourceFilter)}</span>`);
        _push(ssrRenderComponent(_component_UBadge, {
          color: "primary",
          variant: "subtle",
          size: "sm",
          class: "inline-flex items-center gap-1.5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(formatSourceLabel(unref(sourceLabel) || unref(sourceKey)))}</span><button type="button" class="hover:text-red-500 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:x-bold",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(formatSourceLabel(unref(sourceLabel) || unref(sourceKey))), 1),
                createVNode("button", {
                  type: "button",
                  class: "hover:text-red-500 cursor-pointer",
                  onClick: clearSourceKey
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:x-bold",
                    class: "w-3 h-3"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(error) && !unref(pending)) {
        _push(ssrRenderComponent(_component_PageRequestError, {
          error: unref(error),
          retry: unref(refresh)
        }, null, _parent));
      } else {
        _push(`<div class="bg-white dark:bg-[#121214] rounded-2xl border border-gray-200/60 dark:border-gray-800/50 shadow-sm overflow-hidden">`);
        if (unref(pending) && unref(rows).length === 0) {
          _push(`<div role="status" class="flex items-center justify-center gap-2 py-20 text-gray-500">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:spinner",
            class: "size-5 animate-spin text-purple-500"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(unref(copy).loading)}</span></div>`);
        } else {
          _push(`<div class="overflow-x-auto">`);
          if (unref(activeTab) === "visitors") {
            _push(`<table class="min-w-full text-sm"><thead class="bg-gray-50/80 dark:bg-white/[0.02] border-b border-gray-200 dark:border-gray-800"><tr class="text-left text-xs font-medium text-gray-500 dark:text-gray-400"><th class="py-3.5 px-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colVisitorUser)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colSourceUrl)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colVisitedPage)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colLocationIp)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colDeviceEnv)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colActivity)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colActiveTime)}</th><th class="py-3.5 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-gray-50/95 backdrop-blur-md dark:bg-[#141417]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-gray-50/95 dark:before:from-transparent dark:before:to-[#141417]/95">${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/70"><!--[-->`);
            ssrRenderList(unref(rows), (item) => {
              var _a2, _b2;
              _push(`<tr class="hover:bg-gray-50/60 dark:hover:bg-white/[0.02] transition-colors align-top"><td class="py-3.5 px-4 whitespace-nowrap"><div class="flex flex-col gap-1.5"><div class="flex items-center gap-1.5"><button type="button" class="font-mono text-xs text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"${ssrRenderAttr("title", item.visitorId)}>${ssrInterpolate(shortVisitor(item.visitorId))}</button><button type="button" class="text-gray-400 hover:text-purple-500 transition-colors cursor-pointer"${ssrRenderAttr("title", unref(t)("admin.stats.visitorDetail.copy"))}>`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:copy-simple",
                class: "w-3.5 h-3.5"
              }, null, _parent));
              _push(`</button></div><div>`);
              if (item.userId) {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "success",
                  variant: "subtle",
                  size: "xs",
                  class: "max-w-[160px] truncate",
                  title: ((_a2 = item.user) == null ? void 0 : _a2.email) || ((_b2 = item.user) == null ? void 0 : _b2.nickname) || ""
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    var _a3, _b3, _c2, _d2;
                    if (_push2) {
                      _push2(`${ssrInterpolate(((_a3 = item.user) == null ? void 0 : _a3.nickname) || ((_b3 = item.user) == null ? void 0 : _b3.email) || unref(t)("admin.stats.visitorDetail.registered"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(((_c2 = item.user) == null ? void 0 : _c2.nickname) || ((_d2 = item.user) == null ? void 0 : _d2.email) || unref(t)("admin.stats.visitorDetail.registered")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(unref(t)("admin.stats.visitorDetail.anonymous"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("admin.stats.visitorDetail.anonymous")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              }
              _push(`</div></div></td><td class="py-3.5 pr-4"><div class="flex flex-col gap-1.5 min-w-[220px] max-w-[360px]"><div class="flex items-center gap-1.5 flex-wrap"><span class="text-[11px] text-gray-400 shrink-0">${ssrInterpolate(unref(copy).latestLabel)}</span>`);
              _push(ssrRenderComponent(_component_UBadge, {
                color: unref(getSourceTypeColor)(item.lastSourceType),
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(formatSourceLabel(item.lastSourceType || "direct"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(formatSourceLabel(item.lastSourceType || "direct")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`<span class="text-xs font-medium text-gray-800 dark:text-gray-200 truncate max-w-[180px]"${ssrRenderAttr("title", item.lastTouch)}>${ssrInterpolate(formatSourceLabel(item.lastTouch))}</span>`);
              if (item.lastTerm || item.firstTerm) {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "info",
                  variant: "subtle",
                  size: "xs",
                  class: "inline-flex items-center gap-1 font-mono max-w-[160px] truncate",
                  title: `${unref(copy).keywordLabel} ${item.lastTerm || item.firstTerm}`
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: "ph:magnifying-glass",
                        class: "w-3 h-3 shrink-0"
                      }, null, _parent2, _scopeId));
                      _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(item.lastTerm || item.firstTerm)}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:magnifying-glass",
                          class: "w-3 h-3 shrink-0"
                        }),
                        createVNode("span", { class: "truncate" }, toDisplayString(item.lastTerm || item.firstTerm), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              if (item.lastContent || item.firstContent) {
                _push(`<span class="text-[11px] font-mono text-gray-400 truncate max-w-[120px]"${ssrRenderAttr("title", item.lastContent || item.firstContent)}> #${ssrInterpolate(item.lastContent || item.firstContent)}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
              if (item.firstSourceKey !== item.lastSourceKey) {
                _push(`<div class="flex items-center gap-1.5 flex-wrap"><span class="text-[11px] text-gray-400 shrink-0">${ssrInterpolate(unref(copy).firstLabel)}</span>`);
                _push(ssrRenderComponent(_component_UBadge, {
                  color: unref(getSourceTypeColor)(item.firstSourceType),
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(formatSourceLabel(item.firstSourceType || "direct"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(formatSourceLabel(item.firstSourceType || "direct")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
                _push(`<span class="text-xs text-gray-600 dark:text-gray-300 truncate max-w-[180px]"${ssrRenderAttr("title", item.firstTouch)}>${ssrInterpolate(formatSourceLabel(item.firstTouch))}</span></div>`);
              } else {
                _push(`<!---->`);
              }
              if (resolveVisitorReferrerUrl(item)) {
                _push(`<div class="pt-0.5"><a${ssrRenderAttr("href", resolveVisitorReferrerUrl(item))} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", `${unref(copy).openSourceLink}: ${resolveVisitorReferrerUrl(item)}`)} class="inline-flex items-center gap-1 text-xs font-mono text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300 hover:underline max-w-full">`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:globe-simple",
                  class: "w-3.5 h-3.5 shrink-0"
                }, null, _parent));
                _push(`<span class="truncate">${ssrInterpolate(unref(formatExternalUrlLabel)(resolveVisitorReferrerUrl(item), 56))}</span>`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent));
                _push(`</a></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4"><div class="flex flex-col gap-1.5 min-w-[180px] max-w-[260px] font-mono text-xs"><div class="flex items-center gap-1.5 min-w-0"><span class="text-[11px] font-sans text-gray-400 shrink-0">${ssrInterpolate(unref(copy).landingLabel)}</span>`);
              if (unref(getSafeInternalPath)(item.landingPath)) {
                _push(`<a${ssrRenderAttr("href", unref(getSafeInternalPath)(item.landingPath))} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", `${unref(copy).openSitePage}: ${item.landingPath}`)} class="inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 hover:underline truncate"><span class="truncate">${ssrInterpolate(item.landingPath)}</span>`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent));
                _push(`</a>`);
              } else {
                _push(`<span class="text-gray-500 truncate">${ssrInterpolate(item.landingPath || "-")}</span>`);
              }
              _push(`</div>`);
              if (item.lastPath && item.lastPath !== item.landingPath) {
                _push(`<div class="flex items-center gap-1.5 min-w-0"><span class="text-[11px] font-sans text-gray-400 shrink-0">${ssrInterpolate(unref(copy).lastPageLabel)}</span>`);
                if (unref(getSafeInternalPath)(item.lastPath)) {
                  _push(`<a${ssrRenderAttr("href", unref(getSafeInternalPath)(item.lastPath))} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", `${unref(copy).openSitePage}: ${item.lastPath}`)} class="inline-flex items-center gap-1 text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 hover:underline truncate"><span class="truncate">${ssrInterpolate(item.lastPath)}</span>`);
                  _push(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-square-out",
                    class: "w-3 h-3 shrink-0"
                  }, null, _parent));
                  _push(`</a>`);
                } else {
                  _push(`<span class="text-gray-500 truncate">${ssrInterpolate(item.lastPath)}</span>`);
                }
                _push(`</div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4 whitespace-nowrap"><div class="flex flex-col gap-1"><div class="flex items-center gap-1.5 text-xs text-gray-800 dark:text-gray-200 font-medium">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:map-pin",
                class: "w-3.5 h-3.5 text-gray-400 shrink-0"
              }, null, _parent));
              _push(`<span>${ssrInterpolate(unref(formatVisitorLocation)(item))}</span></div><div class="font-mono text-xs text-gray-500 dark:text-gray-400 pl-5">`);
              if (item.ip && item.ip !== "Local") {
                _push(`<button type="button" class="hover:text-purple-600 dark:hover:text-purple-400 hover:underline inline-flex items-center gap-1 cursor-pointer"${ssrRenderAttr("title", `${unref(t)("admin.stats.ipDetail.view")}: ${item.ip}`)}><span>${ssrInterpolate(item.ip)}</span></button>`);
              } else {
                _push(`<span>Local</span>`);
              }
              _push(`</div></div></td><td class="py-3.5 pr-4 whitespace-nowrap"><div class="flex flex-col gap-1 text-xs"><div class="flex items-center gap-1.5 text-gray-700 dark:text-gray-200">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: getDeviceIcon(item.deviceType),
                class: "w-3.5 h-3.5 text-gray-400 shrink-0"
              }, null, _parent));
              _push(`<span>${ssrInterpolate(item.deviceType || "-")}</span></div>`);
              if (item.browser || item.os) {
                _push(`<div class="text-gray-400 dark:text-gray-500 pl-5">${ssrInterpolate([item.browser, item.os].filter(Boolean).join(" \xB7 "))}</div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4 whitespace-nowrap"><div class="flex flex-wrap items-center gap-1.5">`);
              _push(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs",
                class: "font-mono"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(` PV ${ssrInterpolate(formatNumber(item.pageViews))}`);
                  } else {
                    return [
                      createTextVNode(" PV " + toDisplayString(formatNumber(item.pageViews)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              if (item.productViews > 0) {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "info",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(unref(t)("admin.stats.productViews"))} ${ssrInterpolate(formatNumber(item.productViews))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("admin.stats.productViews")) + " " + toDisplayString(formatNumber(item.productViews)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              if (item.checkouts > 0) {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "warning",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(unref(t)("admin.stats.checkout"))} ${ssrInterpolate(formatNumber(item.checkouts))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("admin.stats.checkout")) + " " + toDisplayString(formatNumber(item.checkouts)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              if (item.paid > 0) {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "success",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono font-semibold"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(unref(t)("admin.stats.paid"))} ${ssrInterpolate(formatNumber(item.paid))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("admin.stats.paid")) + " " + toDisplayString(formatNumber(item.paid)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              if (item.auth > 0) {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "primary",
                  variant: "subtle",
                  size: "xs",
                  class: "font-mono"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(unref(t)("admin.stats.authViews"))} ${ssrInterpolate(formatNumber(item.auth))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("admin.stats.authViews")) + " " + toDisplayString(formatNumber(item.auth)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4 whitespace-nowrap font-mono text-xs"><div class="flex flex-col gap-1"><span class="text-gray-700 dark:text-gray-200">${ssrInterpolate(unref(formatDateTime)(item.lastSeenAt))}</span><span class="text-[11px] text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(copy).firstLabel)} ${ssrInterpolate(unref(formatDateTime)(item.firstSeenAt))}</span></div></td><td class="py-3.5 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]">`);
              _push(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "ghost",
                icon: "ph:eye",
                size: "sm",
                title: unref(t)("admin.stats.visitorDetail.view"),
                onClick: ($event) => openVisitorDetail(item.visitorId)
              }, null, _parent));
              _push(`</td></tr>`);
            });
            _push(`<!--]-->`);
            if (!unref(pending) && unref(rows).length === 0) {
              _push(`<tr><td colspan="8" class="px-4 py-16 text-center text-gray-500">${ssrInterpolate(unref(copy).noRecords)}</td></tr>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</tbody></table>`);
          } else if (unref(activeTab) === "pageVisits") {
            _push(`<table class="min-w-full text-sm"><thead class="bg-gray-50/80 dark:bg-white/[0.02] border-b border-gray-200 dark:border-gray-800"><tr class="text-left text-xs font-medium text-gray-500 dark:text-gray-400"><th class="py-3.5 px-4 whitespace-nowrap">${ssrInterpolate(unref(t)("admin.stats.path"))}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colSourceUrl)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(t)("admin.stats.visitor"))}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colLocationIp)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colDeviceEnv)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(t)("admin.stats.time"))}</th><th class="py-3.5 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-gray-50/95 backdrop-blur-md dark:bg-[#141417]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-gray-50/95 dark:before:from-transparent dark:before:to-[#141417]/95">${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/70"><!--[-->`);
            ssrRenderList(unref(rows), (item) => {
              _push(`<tr class="hover:bg-gray-50/60 dark:hover:bg-white/[0.02] transition-colors align-top"><td class="py-3.5 px-4"><div class="flex items-center gap-1.5 min-w-[180px] max-w-[280px] font-mono text-xs">`);
              if (unref(getSafeInternalPath)(item.path)) {
                _push(`<a${ssrRenderAttr("href", unref(getSafeInternalPath)(item.path))} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", `${unref(copy).openSitePage}: ${item.path}`)} class="inline-flex items-center gap-1 text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 hover:underline truncate"><span class="truncate">${ssrInterpolate(item.path)}</span>`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent));
                _push(`</a>`);
              } else {
                _push(`<span class="text-gray-600 dark:text-gray-300 truncate">${ssrInterpolate(item.path || "-")}</span>`);
              }
              _push(`<button type="button" class="text-gray-400 hover:text-purple-500 transition-colors cursor-pointer shrink-0"${ssrRenderAttr("title", unref(t)("admin.stats.visitorDetail.copy"))}>`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:copy-simple",
                class: "w-3.5 h-3.5"
              }, null, _parent));
              _push(`</button></div></td><td class="py-3.5 pr-4"><div class="flex flex-col gap-1 min-w-[200px] max-w-[340px]"><div class="flex items-center gap-1.5 flex-wrap">`);
              _push(ssrRenderComponent(_component_UBadge, {
                color: unref(getSourceTypeColor)(item.sourceType),
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(formatSourceLabel(item.sourceType || "direct"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(formatSourceLabel(item.sourceType || "direct")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              if (item.source && item.source !== "direct" && item.source !== item.sourceType) {
                _push(`<span class="text-xs font-medium text-gray-800 dark:text-gray-200 truncate max-w-[160px]"${ssrRenderAttr("title", item.source)}>${ssrInterpolate(item.source)}</span>`);
              } else {
                _push(`<!---->`);
              }
              if (item.campaign) {
                _push(`<span class="text-[11px] font-mono text-gray-400 truncate max-w-[100px]"${ssrRenderAttr("title", item.campaign)}> (${ssrInterpolate(item.campaign)}) </span>`);
              } else {
                _push(`<!---->`);
              }
              if (item.term) {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "info",
                  variant: "subtle",
                  size: "xs",
                  class: "inline-flex items-center gap-1 font-mono max-w-[150px] truncate",
                  title: `${unref(copy).keywordLabel} ${item.term}`
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: "ph:magnifying-glass",
                        class: "w-3 h-3 shrink-0"
                      }, null, _parent2, _scopeId));
                      _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(item.term)}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:magnifying-glass",
                          class: "w-3 h-3 shrink-0"
                        }),
                        createVNode("span", { class: "truncate" }, toDisplayString(item.term), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              if (item.content) {
                _push(`<span class="text-[11px] font-mono text-gray-400 truncate max-w-[100px]"${ssrRenderAttr("title", item.content)}> #${ssrInterpolate(item.content)}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
              if (unref(getSafeExternalUrl)(item.referrer)) {
                _push(`<div><a${ssrRenderAttr("href", unref(getSafeExternalUrl)(item.referrer))} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", `${unref(copy).openSourceLink}: ${item.referrer}`)} class="inline-flex items-center gap-1 text-xs font-mono text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300 hover:underline max-w-full">`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:globe-simple",
                  class: "w-3.5 h-3.5 shrink-0"
                }, null, _parent));
                _push(`<span class="truncate">${ssrInterpolate(unref(formatExternalUrlLabel)(item.referrer, 56))}</span>`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent));
                _push(`</a></div>`);
              } else if (unref(getInternalReferrerPath)(item.referrer)) {
                _push(`<div class="flex items-center gap-1 text-xs font-mono text-gray-500"><span class="text-[11px] font-sans text-gray-400 shrink-0">${ssrInterpolate(unref(copy).internalPrevLabel)}</span><a${ssrRenderAttr("href", unref(getInternalReferrerPath)(item.referrer))} target="_blank" rel="noopener noreferrer" class="hover:text-purple-600 dark:hover:text-purple-400 hover:underline truncate">${ssrInterpolate(unref(getInternalReferrerPath)(item.referrer))}</a></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4 whitespace-nowrap"><div class="flex items-center gap-1.5 font-mono text-xs"><button type="button" class="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"${ssrRenderAttr("title", item.visitorId)}>${ssrInterpolate(shortVisitor(item.visitorId))}</button><button type="button" class="text-gray-400 hover:text-purple-500 transition-colors cursor-pointer"${ssrRenderAttr("title", unref(t)("admin.stats.visitorDetail.copy"))}>`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:copy-simple",
                class: "w-3.5 h-3.5"
              }, null, _parent));
              _push(`</button></div></td><td class="py-3.5 pr-4 whitespace-nowrap"><div class="flex flex-col gap-1"><div class="flex items-center gap-1.5 text-xs text-gray-800 dark:text-gray-200 font-medium">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:map-pin",
                class: "w-3.5 h-3.5 text-gray-400 shrink-0"
              }, null, _parent));
              _push(`<span>${ssrInterpolate(unref(formatVisitorLocation)(item))}</span></div><div class="font-mono text-xs text-gray-500 dark:text-gray-400 pl-5">`);
              if (item.ip && item.ip !== "Local") {
                _push(`<button type="button" class="hover:text-purple-600 dark:hover:text-purple-400 hover:underline inline-flex items-center gap-1 cursor-pointer"${ssrRenderAttr("title", `${unref(t)("admin.stats.ipDetail.view")}: ${item.ip}`)}><span>${ssrInterpolate(item.ip)}</span></button>`);
              } else {
                _push(`<span>Local</span>`);
              }
              _push(`</div></div></td><td class="py-3.5 pr-4 whitespace-nowrap"><div class="flex flex-col gap-1 text-xs"><div class="flex items-center gap-1.5 text-gray-700 dark:text-gray-200">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: getDeviceIcon(item.deviceType),
                class: "w-3.5 h-3.5 text-gray-400 shrink-0"
              }, null, _parent));
              _push(`<span>${ssrInterpolate(item.deviceType || "-")}</span></div>`);
              if (item.browser || item.os) {
                _push(`<div class="text-gray-400 dark:text-gray-500 pl-5">${ssrInterpolate([item.browser, item.os].filter(Boolean).join(" \xB7 "))}</div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4 whitespace-nowrap font-mono text-xs text-gray-700 dark:text-gray-200">${ssrInterpolate(unref(formatDateTime)(item.createdAt))}</td><td class="py-3.5 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]"><div class="flex items-center justify-end gap-1">`);
              if (item.visitorId) {
                _push(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "ghost",
                  icon: "ph:user-focus",
                  size: "sm",
                  title: unref(t)("admin.stats.visitorDetail.view"),
                  onClick: ($event) => openVisitorDetail(item.visitorId)
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              if (item.ip && item.ip !== "Local") {
                _push(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:globe",
                  size: "sm",
                  title: unref(t)("admin.stats.ipDetail.view"),
                  onClick: ($event) => openIpDetail(item.ip)
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td></tr>`);
            });
            _push(`<!--]-->`);
            if (!unref(pending) && unref(rows).length === 0) {
              _push(`<tr><td colspan="7" class="px-4 py-16 text-center text-gray-500">${ssrInterpolate(unref(copy).noRecords)}</td></tr>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</tbody></table>`);
          } else {
            _push(`<table class="min-w-full text-sm"><thead class="bg-gray-50/80 dark:bg-white/[0.02] border-b border-gray-200 dark:border-gray-800"><tr class="text-left text-xs font-medium text-gray-500 dark:text-gray-400"><th class="py-3.5 px-4 whitespace-nowrap">${ssrInterpolate(unref(t)("admin.stats.ip"))}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colSourceUrl)}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(t)("admin.stats.region"))}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colDeviceEnv)}</th><th class="py-3.5 pr-4 whitespace-nowrap text-right">${ssrInterpolate(unref(t)("admin.stats.ipDetail.uniqueVisitors"))}</th><th class="py-3.5 pr-4 whitespace-nowrap text-right">${ssrInterpolate(unref(t)("admin.stats.visits"))}</th><th class="py-3.5 pr-4 whitespace-nowrap text-right">${ssrInterpolate(unref(t)("admin.stats.ipDetail.registeredUsers"))}</th><th class="py-3.5 pr-4 whitespace-nowrap">${ssrInterpolate(unref(copy).colActiveTime)}</th><th class="py-3.5 px-4 whitespace-nowrap text-right sticky right-0 z-30 bg-gray-50/95 backdrop-blur-md dark:bg-[#141417]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-gray-50/95 dark:before:from-transparent dark:before:to-[#141417]/95">${ssrInterpolate(unref(t)("admin.stats.visitorDetail.actions"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800/70"><!--[-->`);
            ssrRenderList(unref(rows), (item) => {
              _push(`<tr class="hover:bg-gray-50/60 dark:hover:bg-white/[0.02] transition-colors align-top"><td class="py-3.5 px-4 whitespace-nowrap font-mono text-xs"><div class="flex items-center gap-1.5"><button type="button" class="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:underline transition-colors cursor-pointer font-medium"${ssrRenderAttr("title", item.ip || "Local")}>${ssrInterpolate(item.ip || "Local")}</button>`);
              if (item.ip) {
                _push(`<button type="button" class="text-gray-400 hover:text-purple-500 transition-colors cursor-pointer"${ssrRenderAttr("title", unref(t)("admin.stats.visitorDetail.copy"))}>`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:copy-simple",
                  class: "w-3.5 h-3.5"
                }, null, _parent));
                _push(`</button>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4"><div class="flex flex-col gap-1 min-w-[200px] max-w-[340px]"><div class="flex items-center gap-1.5 flex-wrap">`);
              _push(ssrRenderComponent(_component_UBadge, {
                color: unref(getSourceTypeColor)(item.sourceType),
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(formatSourceLabel(item.sourceType || "direct"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(formatSourceLabel(item.sourceType || "direct")), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              if (item.source && item.source !== "direct" && item.source !== item.sourceType) {
                _push(`<span class="text-xs font-medium text-gray-800 dark:text-gray-200 truncate max-w-[160px]"${ssrRenderAttr("title", item.source)}>${ssrInterpolate(item.source)}</span>`);
              } else {
                _push(`<!---->`);
              }
              if (item.campaign) {
                _push(`<span class="text-[11px] font-mono text-gray-400 truncate max-w-[100px]"${ssrRenderAttr("title", item.campaign)}> (${ssrInterpolate(item.campaign)}) </span>`);
              } else {
                _push(`<!---->`);
              }
              if (item.term) {
                _push(ssrRenderComponent(_component_UBadge, {
                  color: "info",
                  variant: "subtle",
                  size: "xs",
                  class: "inline-flex items-center gap-1 font-mono max-w-[150px] truncate",
                  title: `${unref(copy).keywordLabel} ${item.term}`
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_UIcon, {
                        name: "ph:magnifying-glass",
                        class: "w-3 h-3 shrink-0"
                      }, null, _parent2, _scopeId));
                      _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(item.term)}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:magnifying-glass",
                          class: "w-3 h-3 shrink-0"
                        }),
                        createVNode("span", { class: "truncate" }, toDisplayString(item.term), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              if (item.content) {
                _push(`<span class="text-[11px] font-mono text-gray-400 truncate max-w-[100px]"${ssrRenderAttr("title", item.content)}> #${ssrInterpolate(item.content)}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
              if (unref(getSafeExternalUrl)(item.referrer)) {
                _push(`<div><a${ssrRenderAttr("href", unref(getSafeExternalUrl)(item.referrer))} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("title", `${unref(copy).openSourceLink}: ${item.referrer}`)} class="inline-flex items-center gap-1 text-xs font-mono text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300 hover:underline max-w-full">`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:globe-simple",
                  class: "w-3.5 h-3.5 shrink-0"
                }, null, _parent));
                _push(`<span class="truncate">${ssrInterpolate(unref(formatExternalUrlLabel)(item.referrer, 56))}</span>`);
                _push(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent));
                _push(`</a></div>`);
              } else if (unref(getInternalReferrerPath)(item.referrer)) {
                _push(`<div class="flex items-center gap-1 text-xs font-mono text-gray-500"><span class="text-[11px] font-sans text-gray-400 shrink-0">${ssrInterpolate(unref(copy).internalPrevLabel)}</span><a${ssrRenderAttr("href", unref(getInternalReferrerPath)(item.referrer))} target="_blank" rel="noopener noreferrer" class="hover:text-purple-600 dark:hover:text-purple-400 hover:underline truncate">${ssrInterpolate(unref(getInternalReferrerPath)(item.referrer))}</a></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4 whitespace-nowrap"><div class="flex items-center gap-1.5 text-xs text-gray-800 dark:text-gray-200 font-medium">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:map-pin",
                class: "w-3.5 h-3.5 text-gray-400 shrink-0"
              }, null, _parent));
              _push(`<span>${ssrInterpolate(unref(formatVisitorLocation)(item))}</span></div></td><td class="py-3.5 pr-4 whitespace-nowrap"><div class="flex flex-col gap-1 text-xs"><div class="flex items-center gap-1.5 text-gray-700 dark:text-gray-200">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: getDeviceIcon(item.deviceType),
                class: "w-3.5 h-3.5 text-gray-400 shrink-0"
              }, null, _parent));
              _push(`<span>${ssrInterpolate(item.deviceType || "-")}</span></div>`);
              if (item.browser || item.os) {
                _push(`<div class="text-gray-400 dark:text-gray-500 pl-5">${ssrInterpolate([item.browser, item.os].filter(Boolean).join(" \xB7 "))}</div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></td><td class="py-3.5 pr-4 text-right tabular-nums text-gray-700 dark:text-gray-200">${ssrInterpolate(formatNumber(item.visitorCount))}</td><td class="py-3.5 pr-4 text-right tabular-nums font-medium text-gray-900 dark:text-white">${ssrInterpolate(formatNumber(item.visitCount))}</td><td class="py-3.5 pr-4 text-right tabular-nums">`);
              _push(ssrRenderComponent(_component_UBadge, {
                color: item.registeredUserCount > 0 ? "success" : "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(formatNumber(item.registeredUserCount))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(formatNumber(item.registeredUserCount)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</td><td class="py-3.5 pr-4 whitespace-nowrap font-mono text-xs"><div class="flex flex-col gap-1"><span class="text-gray-700 dark:text-gray-200">${ssrInterpolate(unref(formatDateTime)(item.lastSeenAt))}</span><span class="text-[11px] text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(copy).firstLabel)} ${ssrInterpolate(unref(formatDateTime)(item.firstSeenAt))}</span></div></td><td class="py-3.5 px-4 text-right whitespace-nowrap sticky right-0 z-20 bg-white/95 backdrop-blur-md dark:bg-[#121214]/95 before:absolute before:inset-y-0 before:-left-3 before:w-3 before:bg-gradient-to-r before:from-transparent before:to-white dark:before:from-transparent dark:before:to-[#121214]">`);
              _push(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "ghost",
                icon: "ph:eye",
                size: "sm",
                title: unref(t)("admin.stats.ipDetail.view"),
                onClick: ($event) => openIpDetail(item.ip)
              }, null, _parent));
              _push(`</td></tr>`);
            });
            _push(`<!--]-->`);
            if (!unref(pending) && unref(rows).length === 0) {
              _push(`<tr><td colspan="9" class="px-4 py-16 text-center text-gray-500">${ssrInterpolate(unref(copy).noRecords)}</td></tr>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</tbody></table>`);
          }
          _push(`</div>`);
        }
        if (!unref(error) && unref(totalItems) > 0) {
          _push(`<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3.5 border-t border-gray-100 dark:border-gray-800/80"><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.common.showing"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate((unref(page) - 1) * unref(pageSize) + 1)}</span> ${ssrInterpolate(_ctx.$t("admin.common.to"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(Math.min(unref(page) * unref(pageSize), unref(totalItems)))}</span> ${ssrInterpolate(_ctx.$t("admin.common.of"))} <span class="text-gray-900 dark:text-white font-medium">${ssrInterpolate(unref(totalItems))}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
          _push(ssrRenderComponent(_component_UPagination, {
            modelValue: unref(page),
            "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
            total: unref(totalItems),
            "items-per-page": unref(pageSize),
            disabled: unref(pending),
            "onUpdate:page": (val) => unref(onPageChange)(val)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/visitors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=visitors-CrLxrBvT.mjs.map
