import { P as _export_sfc, u as useI18n, bt as useSeoMeta, _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, openBlock, createBlock, Fragment, toDisplayString, createTextVNode, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useHoxiMember, _ as _sfc_main$1, f as formatPoints, a as formatUsdRef, b as formatTokensCount, c as formatShortTime } from './layout-DypCocu9.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "billing",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { walletLoading, walletData } = useHoxiMember();
    useSeoMeta({
      title: () => `${t("hoxi.member.billing.title")} \xB7 ${t("hoxi.site.name")}`
    });
    const selectedRange = ref("30d");
    const statsData = ref(null);
    const activeTab = ref("consumption");
    const loading = ref(true);
    const billingLogs = ref([]);
    const balanceLogs = ref([]);
    const consumedPct = computed(() => {
      var _a, _b;
      const earned = Number(((_a = walletData.value) == null ? void 0 : _a.totalEarnedPoints) || 0);
      const spent = Number(((_b = walletData.value) == null ? void 0 : _b.totalSpentPoints) || 0);
      if (earned <= 0) return 0;
      return Math.min(Math.round(spent / earned * 100), 100);
    });
    const trendSeries = computed(() => {
      var _a;
      const list = Array.isArray((_a = statsData.value) == null ? void 0 : _a.dailyTrend) ? statsData.value.dailyTrend : [];
      if (list.length) {
        return list.map((d) => ({
          label: String(d.date || "").slice(5),
          requests: Number(d.requests || 0),
          cost: Number(d.pointsCost || 0)
        }));
      }
      return [{ label: "Today", requests: 0, cost: 0 }];
    });
    const trendLabels = computed(() => trendSeries.value.map((i) => i.label));
    const maxRequests = computed(() => {
      const m = Math.max(...trendSeries.value.map((i) => i.requests), 10);
      return m;
    });
    const maxCost = computed(() => {
      const m = Math.max(...trendSeries.value.map((i) => Number(i.cost) || 0), 1);
      return m;
    });
    const chartPoints = computed(() => {
      const W = 860;
      const H = 250;
      const X0 = 70;
      const Y0 = 30;
      const n = Math.max(1, trendSeries.value.length);
      const step = n > 1 ? W / (n - 1) : 0;
      return trendSeries.value.map((item, idx) => {
        const x = n > 1 ? X0 + idx * step : 500;
        const barHeight = item.requests / maxRequests.value * H;
        const barY = Y0 + H - barHeight;
        const lineY = Y0 + H - item.cost / maxCost.value * H;
        return { x, barY, barHeight, lineY };
      });
    });
    const barWidth = computed(() => {
      const n = trendSeries.value.length;
      if (n <= 1) return 24;
      return Math.max(8, Math.min(26, 860 / (n - 1) * 0.55));
    });
    const linePath = computed(() => {
      if (!chartPoints.value.length) return "";
      return chartPoints.value.map((pt, idx) => `${idx === 0 ? "M" : "L"} ${pt.x} ${pt.lineY}`).join(" ");
    });
    const palette = ["#6d4cff", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"];
    const modelStats = computed(() => {
      var _a;
      const list = Array.isArray((_a = statsData.value) == null ? void 0 : _a.modelDistribution) ? statsData.value.modelDistribution : [];
      return list.map((m, idx) => ({
        name: m.model,
        value: Number(m.pointsCost || m.requests || 0),
        color: palette[idx % palette.length]
      }));
    });
    const donutCircumference = 2 * Math.PI * 38;
    const donutSegments = computed(() => {
      const total = modelStats.value.reduce((s, m) => s + m.value, 0) || 1;
      let offset = 0;
      return modelStats.value.map((m) => {
        const length = donutCircumference * (m.value / total);
        const seg = { ...m, length, offset: -offset };
        offset += length;
        return seg;
      });
    });
    const showXLabel = (idx) => {
      const n = trendLabels.value.length;
      if (n <= 8) return true;
      const step = Math.ceil(n / 8);
      return idx % step === 0 || idx === n - 1;
    };
    async function loadStats() {
      try {
        statsData.value = await $fetch("/api/hoxi/member/stats", {
          query: { range: selectedRange.value }
        });
      } catch {
        statsData.value = null;
      }
    }
    async function changeRange(r) {
      selectedRange.value = r;
      await Promise.all([loadStats(), loadTab()]);
    }
    async function loadTab() {
      loading.value = true;
      try {
        if (activeTab.value === "consumption") {
          const res = await $fetch("/api/hoxi/member/billing-logs", {
            query: { range: selectedRange.value }
          });
          billingLogs.value = Array.isArray(res == null ? void 0 : res.list) ? res.list : [];
        } else {
          const res = await $fetch("/api/hoxi/member/balance-logs");
          balanceLogs.value = Array.isArray(res == null ? void 0 : res.list) ? res.list : [];
        }
      } catch {
        billingLogs.value = [];
        balanceLogs.value = [];
      } finally {
        loading.value = false;
      }
    }
    async function switchTab(tab) {
      activeTab.value = tab;
      await loadTab();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Y;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.member.billing.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.member.billing.title")), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-700 dark:text-gray-400" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.subtitle"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-700 dark:text-gray-400" }, toDisplayString(_ctx.$t("hoxi.member.billing.subtitle")), 1)
            ];
          }
        }),
        "header-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-1.5 bg-gray-100 dark:bg-black/20 p-1 rounded-2xl border border-gray-100 dark:border-white/5 shadow-inner" data-v-8f66bc88${_scopeId}><!--[-->`);
            ssrRenderList(["24h", "7d", "30d"], (r) => {
              _push2(`<button type="button" class="${ssrRenderClass([selectedRange.value === r ? "bg-white dark:bg-white text-gray-900 dark:text-black shadow-sm font-semibold" : "text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white", "px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all"])}" data-v-8f66bc88${_scopeId}>${ssrInterpolate(r)}</button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-1.5 bg-gray-100 dark:bg-black/20 p-1 rounded-2xl border border-gray-100 dark:border-white/5 shadow-inner" }, [
                (openBlock(), createBlock(Fragment, null, renderList(["24h", "7d", "30d"], (r) => {
                  return createVNode("button", {
                    key: r,
                    type: "button",
                    class: ["px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all", selectedRange.value === r ? "bg-white dark:bg-white text-gray-900 dark:text-black shadow-sm font-semibold" : "text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"],
                    onClick: ($event) => changeRange(r)
                  }, toDisplayString(r), 11, ["onClick"]);
                }), 64))
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="space-y-6 relative" data-v-8f66bc88${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner relative overflow-hidden group" data-v-8f66bc88${_scopeId}><div class="absolute -right-32 -top-32 w-72 h-72 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6d4cff]/10 transition-colors duration-1000" data-v-8f66bc88${_scopeId}></div><div class="flex flex-col lg:flex-row lg:items-start justify-between mb-8 relative z-10 gap-6" data-v-8f66bc88${_scopeId}><div data-v-8f66bc88${_scopeId}><div class="flex items-baseline gap-4 flex-wrap" data-v-8f66bc88${_scopeId}><div class="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white tabular-nums" data-v-8f66bc88${_scopeId}>`);
            if (unref(walletLoading)) {
              _push2(`<span class="w-36 h-10 bg-gray-50 dark:bg-white/5 animate-pulse rounded-2xl inline-block" data-v-8f66bc88${_scopeId}></span>`);
            } else {
              _push2(`<!--[--><span data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatPoints)((_a = unref(walletData)) == null ? void 0 : _a.points))}</span><span class="ml-1.5 text-base font-normal text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span><span class="ml-2 text-sm font-mono text-gray-500 dark:text-white/45" data-v-8f66bc88${_scopeId}>\u2248 ${ssrInterpolate(unref(formatUsdRef)((_b = unref(walletData)) == null ? void 0 : _b.points))} USD</span><!--]-->`);
            }
            _push2(`</div><span class="pb-2 text-sm text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.availablePoints"))}</span></div><div class="mt-6 flex flex-wrap items-center gap-3" data-v-8f66bc88${_scopeId}><div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-black/60 transition-all" data-v-8f66bc88${_scopeId}><div class="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20" data-v-8f66bc88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-down-right-bold",
              class: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col" data-v-8f66bc88${_scopeId}><span class="text-xs text-gray-600 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.earnedPoints"))}</span><span class="text-sm font-semibold tabular-nums text-gray-900 dark:text-white/80" data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatPoints)((_c = unref(walletData)) == null ? void 0 : _c.totalEarnedPoints))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div></div><div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-black/60 transition-all" data-v-8f66bc88${_scopeId}><div class="w-7 h-7 rounded-lg bg-[#6d4cff]/10 flex items-center justify-center border border-[#6d4cff]/20" data-v-8f66bc88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-up-right-bold",
              class: "w-3.5 h-3.5 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col" data-v-8f66bc88${_scopeId}><span class="text-xs text-gray-600 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.spentPoints"))}</span><span class="text-sm font-semibold tabular-nums text-[#6d4cff] dark:text-[#8ea3ff]" data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatPoints)((_d = unref(walletData)) == null ? void 0 : _d.totalSpentPoints))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div></div></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:text-right min-w-0 lg:min-w-[400px]" data-v-8f66bc88${_scopeId}><div class="border border-gray-100 dark:border-white/5 rounded-2xl p-3 bg-white dark:bg-black/20" data-v-8f66bc88${_scopeId}><div class="mb-2 text-xs text-gray-600 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.requestsCount"))}</div><div class="text-xl font-semibold tabular-nums text-gray-900 dark:text-white" data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatPoints)(((_e = statsData.value) == null ? void 0 : _e.totalRequests) || 0))}</div></div><div class="border border-gray-100 dark:border-white/5 rounded-2xl p-3 bg-blue-50/50 dark:bg-blue-500/5" data-v-8f66bc88${_scopeId}><div class="mb-2 text-xs text-gray-600 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.tokensCount"))}</div><div class="text-xl font-semibold tabular-nums text-[#6d4cff] dark:text-blue-400" data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatTokensCount)((_f = statsData.value) == null ? void 0 : _f.totalTokens))}</div></div><div class="border border-gray-100 dark:border-white/5 rounded-2xl p-3 bg-indigo-50/50 dark:bg-indigo-500/5" data-v-8f66bc88${_scopeId}><div class="mb-2 text-xs text-gray-600 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.rangePointsSpent"))}</div><div class="text-xl font-semibold tabular-nums text-blue-700 dark:text-blue-500" data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatPoints)(((_g = statsData.value) == null ? void 0 : _g.totalPointsCost) || 0))}</div></div></div></div><div class="relative z-10 pt-6 border-t border-gray-100 dark:border-white/5" data-v-8f66bc88${_scopeId}><div class="mb-3 flex items-center justify-between text-xs text-gray-700 dark:text-white/50" data-v-8f66bc88${_scopeId}><span class="flex items-center gap-2" data-v-8f66bc88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chart-line-up-bold",
              class: "w-4 h-4 text-[#6d4cff]"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("hoxi.member.billing.usageProgress"))}</span><span class="font-mono text-gray-900 dark:text-white/70 bg-gray-50 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-gray-100 dark:border-white/5" data-v-8f66bc88${_scopeId}>${ssrInterpolate(consumedPct.value)}% </span></div><div class="w-full h-3 bg-gray-50 dark:bg-black/60 rounded-full overflow-hidden flex border border-gray-100 dark:border-white/5 p-0.5 relative" data-v-8f66bc88${_scopeId}><div class="h-full bg-[linear-gradient(90deg,#3b82f6,#6d4cff)] transition-all duration-1000 overflow-hidden relative rounded-full" style="${ssrRenderStyle({ width: consumedPct.value + "%" })}" data-v-8f66bc88${_scopeId}><div class="absolute inset-0 wave-overlay opacity-40" data-v-8f66bc88${_scopeId}></div></div></div></div></div><div class="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6" data-v-8f66bc88${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 shadow-sm dark:shadow-inner relative overflow-hidden group" data-v-8f66bc88${_scopeId}><div class="absolute -left-20 -bottom-20 w-64 h-64 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none" data-v-8f66bc88${_scopeId}></div><div class="flex items-center gap-4 mb-6 relative z-10" data-v-8f66bc88${_scopeId}><div class="w-11 h-11 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-8f66bc88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chart-line-up-duotone",
              class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-8f66bc88${_scopeId}><h3 class="text-base font-semibold text-gray-900 dark:text-white" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.usageTrend"))}</h3><p class="mt-0.5 text-xs text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.requestsVsCost"))}</p></div></div><div class="relative mt-6 z-10" data-v-8f66bc88${_scopeId}><svg viewBox="0 0 1000 320" class="w-full h-64" data-v-8f66bc88${_scopeId}><!--[-->`);
            ssrRenderList(5, (y) => {
              _push2(`<g data-v-8f66bc88${_scopeId}><line x1="70"${ssrRenderAttr("y1", 30 + (y - 1) * 65)} x2="930"${ssrRenderAttr("y2", 30 + (y - 1) * 65)} stroke="currentColor" class="text-gray-200 dark:text-white/[0.04]" stroke-width="1" data-v-8f66bc88${_scopeId}></line></g>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(chartPoints.value, (pt, idx) => {
              _push2(`<g data-v-8f66bc88${_scopeId}><rect${ssrRenderAttr("x", pt.x - barWidth.value / 2)}${ssrRenderAttr("y", pt.barY)}${ssrRenderAttr("width", barWidth.value)}${ssrRenderAttr("height", pt.barHeight)} rx="6" fill="currentColor" class="text-gray-100 dark:text-white/[0.05]" data-v-8f66bc88${_scopeId}></rect></g>`);
            });
            _push2(`<!--]-->`);
            if (linePath.value) {
              _push2(`<path${ssrRenderAttr("d", linePath.value)} fill="none" stroke="#6d4cff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-v-8f66bc88${_scopeId}></path>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(chartPoints.value, (pt, idx) => {
              _push2(`<g data-v-8f66bc88${_scopeId}><circle${ssrRenderAttr("cx", pt.x)}${ssrRenderAttr("cy", pt.lineY)} r="5" fill="#6d4cff" stroke="currentColor" stroke-width="2.5" class="text-white dark:text-[#020203]" data-v-8f66bc88${_scopeId}></circle></g>`);
            });
            _push2(`<!--]--><!--[-->`);
            ssrRenderList(trendLabels.value, (label, idx) => {
              var _a2;
              _push2(`<g data-v-8f66bc88${_scopeId}>`);
              if (showXLabel(Number(idx))) {
                _push2(`<text${ssrRenderAttr("x", (_a2 = chartPoints.value[idx]) == null ? void 0 : _a2.x)} y="312" fill="currentColor" font-size="11" text-anchor="middle" class="text-gray-500 dark:text-white/50 font-mono" data-v-8f66bc88${_scopeId}>${ssrInterpolate(label)}</text>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</g>`);
            });
            _push2(`<!--]--></svg></div></div><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 shadow-sm dark:shadow-inner relative overflow-hidden group" data-v-8f66bc88${_scopeId}><div class="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" data-v-8f66bc88${_scopeId}></div><div class="flex items-center gap-4 mb-6 relative z-10" data-v-8f66bc88${_scopeId}><div class="w-11 h-11 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-8f66bc88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chart-pie-duotone",
              class: "w-5 h-5 text-amber-500 dark:text-amber-400"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-8f66bc88${_scopeId}><h3 class="text-base font-semibold text-gray-900 dark:text-white" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.modelDistribution"))}</h3><p class="mt-0.5 text-xs text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.byEstimatedSpending"))}</p></div></div><div class="flex items-center justify-center py-4 relative z-10" data-v-8f66bc88${_scopeId}><div class="relative w-44 h-44" data-v-8f66bc88${_scopeId}><svg viewBox="0 0 120 120" class="w-full h-full" data-v-8f66bc88${_scopeId}><g transform="rotate(-90 60 60)" data-v-8f66bc88${_scopeId}><circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" class="text-gray-100 dark:text-white/[0.04]" stroke-width="14" data-v-8f66bc88${_scopeId}></circle><!--[-->`);
            ssrRenderList(donutSegments.value, (seg) => {
              _push2(`<circle cx="60" cy="60" r="38" fill="none"${ssrRenderAttr("stroke", seg.color)} stroke-width="14"${ssrRenderAttr("stroke-dasharray", `${seg.length} ${donutCircumference - seg.length}`)}${ssrRenderAttr("stroke-dashoffset", seg.offset)} style="${ssrRenderStyle({ "stroke-linecap": "round" })}" data-v-8f66bc88${_scopeId}></circle>`);
            });
            _push2(`<!--]--></g></svg><div class="absolute inset-0 flex flex-col items-center justify-center" data-v-8f66bc88${_scopeId}><span class="text-xs text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.colModel"))}</span><span class="text-3xl font-bold text-gray-900 dark:text-white mt-0.5 tabular-nums" data-v-8f66bc88${_scopeId}>${ssrInterpolate(modelStats.value.length)}</span></div></div></div><div class="mt-4 space-y-2 relative z-10" data-v-8f66bc88${_scopeId}><!--[-->`);
            ssrRenderList(modelStats.value.slice(0, 4), (m) => {
              _push2(`<div class="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5" data-v-8f66bc88${_scopeId}><div class="flex items-center gap-3 min-w-0" data-v-8f66bc88${_scopeId}><div class="w-2.5 h-2.5 rounded-full shrink-0" style="${ssrRenderStyle({ backgroundColor: m.color })}" data-v-8f66bc88${_scopeId}></div><span class="text-xs font-mono text-gray-700 dark:text-white/70 truncate" data-v-8f66bc88${_scopeId}>${ssrInterpolate(m.name)}</span></div><span class="text-xs font-mono tabular-nums text-gray-600 dark:text-white/60" data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatPoints)(m.value))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner" data-v-8f66bc88${_scopeId}><div class="border-b border-gray-100 dark:border-white/5 bg-gray-50/80 dark:bg-black/20 p-2.5 sm:p-3" data-v-8f66bc88${_scopeId}><div class="flex flex-wrap items-center gap-2" data-v-8f66bc88${_scopeId}><button type="button" class="${ssrRenderClass([activeTab.value === "consumption" ? "bg-white text-gray-900 shadow-sm border border-gray-200/90 dark:bg-white/15 dark:border-white/15 dark:text-white font-bold" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 font-medium", "flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs transition-all"])}" data-v-8f66bc88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chart-bar-duotone",
              class: ["h-4 w-4 shrink-0", activeTab.value === "consumption" ? "text-[#6d4cff] dark:text-[#a896ff]" : "text-gray-400"]
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.tabConsumption"))}</span></button><button type="button" class="${ssrRenderClass([activeTab.value === "rewards" ? "bg-white text-gray-900 shadow-sm border border-gray-200/90 dark:bg-white/15 dark:border-white/15 dark:text-white font-bold" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 font-medium", "flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs transition-all"])}" data-v-8f66bc88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:currency-circle-dollar-duotone",
              class: ["h-4 w-4 shrink-0", activeTab.value === "rewards" ? "text-[#6d4cff] dark:text-[#a896ff]" : "text-gray-400"]
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.tabRewards"))}</span></button></div></div>`);
            if (activeTab.value === "consumption") {
              _push2(`<div class="overflow-x-auto relative min-h-[320px]" data-v-8f66bc88${_scopeId}>`);
              if (loading.value) {
                _push2(`<div class="p-16 text-center text-sm text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.loading"))}</div>`);
              } else if (!billingLogs.value.length) {
                _push2(`<div class="p-16 text-center" data-v-8f66bc88${_scopeId}><div class="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mx-auto mb-4" data-v-8f66bc88${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:chart-bar-duotone",
                  class: "w-8 h-8 text-gray-400 dark:text-white/30"
                }, null, _parent2, _scopeId));
                _push2(`</div><p class="text-sm text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.emptyConsumption"))}</p></div>`);
              } else {
                _push2(`<table class="w-full min-w-[720px] text-left border-collapse text-sm" data-v-8f66bc88${_scopeId}><thead data-v-8f66bc88${_scopeId}><tr class="border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50" data-v-8f66bc88${_scopeId}><th class="py-4 px-6 font-medium" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.colTime"))}</th><th class="py-4 px-6 font-medium" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.colModel"))}</th><th class="py-4 px-6 font-medium text-right" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.colTokens"))}</th><th class="py-4 px-6 font-medium text-right" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.colPointsSpent"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-white/5" data-v-8f66bc88${_scopeId}><!--[-->`);
                ssrRenderList(billingLogs.value, (item, idx) => {
                  _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group" data-v-8f66bc88${_scopeId}><td class="py-4 px-6" data-v-8f66bc88${_scopeId}><div class="flex items-center gap-2 text-gray-600 dark:text-white/55 text-xs font-mono" data-v-8f66bc88${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:clock-duotone",
                    class: "w-4 h-4 text-[#6d4cff]"
                  }, null, _parent2, _scopeId));
                  _push2(`<span data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatShortTime)(item.createdAt))}</span></div></td><td class="py-4 px-6 font-mono text-gray-900 dark:text-white group-hover:text-[#6d4cff] dark:group-hover:text-[#b496ff] transition-colors" data-v-8f66bc88${_scopeId}>${ssrInterpolate(item.model)}</td><td class="py-4 px-6 text-right font-mono text-xs tabular-nums text-gray-600 dark:text-white/60" data-v-8f66bc88${_scopeId}>${ssrInterpolate(item.promptTokens)} / ${ssrInterpolate(item.completionTokens)}</td><td class="py-4 px-6 text-right font-mono tabular-nums" data-v-8f66bc88${_scopeId}><span class="font-semibold text-gray-900 dark:text-white" data-v-8f66bc88${_scopeId}>-${ssrInterpolate(unref(formatPoints)(item.pointsCost, 4))}</span><span class="ml-1.5 text-[11px] text-gray-400 dark:text-white/40" data-v-8f66bc88${_scopeId}>(${ssrInterpolate(unref(formatUsdRef)(item.usdCost, true))})</span></td></tr>`);
                });
                _push2(`<!--]--></tbody></table>`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="overflow-x-auto relative min-h-[320px]" data-v-8f66bc88${_scopeId}>`);
              if (loading.value) {
                _push2(`<div class="p-16 text-center text-sm text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.loading"))}</div>`);
              } else if (!balanceLogs.value.length) {
                _push2(`<div class="p-16 text-center" data-v-8f66bc88${_scopeId}><div class="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mx-auto mb-4" data-v-8f66bc88${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:currency-circle-dollar-duotone",
                  class: "w-8 h-8 text-gray-400 dark:text-white/30"
                }, null, _parent2, _scopeId));
                _push2(`</div><p class="text-sm text-gray-500 dark:text-white/50" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.emptyRewards"))}</p></div>`);
              } else {
                _push2(`<table class="w-full min-w-[720px] text-left border-collapse text-sm" data-v-8f66bc88${_scopeId}><thead data-v-8f66bc88${_scopeId}><tr class="border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50" data-v-8f66bc88${_scopeId}><th class="py-4 px-6 font-medium" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.colTime"))}</th><th class="py-4 px-6 font-medium" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.colRemark"))}</th><th class="py-4 px-6 font-medium text-right" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.colPointsDelta"))}</th><th class="py-4 px-6 font-medium text-right" data-v-8f66bc88${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.billing.colAfterPoints"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-white/5" data-v-8f66bc88${_scopeId}><!--[-->`);
                ssrRenderList(balanceLogs.value, (item, idx) => {
                  _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors" data-v-8f66bc88${_scopeId}><td class="py-4 px-6" data-v-8f66bc88${_scopeId}><div class="flex items-center gap-2 text-gray-600 dark:text-white/55 text-xs font-mono" data-v-8f66bc88${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:calendar-blank-duotone",
                    class: "w-4 h-4 text-[#6d4cff]"
                  }, null, _parent2, _scopeId));
                  _push2(`<span data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatShortTime)(item.createdAt))}</span></div></td><td class="py-4 px-6 text-gray-800 dark:text-white/80" data-v-8f66bc88${_scopeId}>${ssrInterpolate(item.remark || item.actionType)}</td><td class="py-4 px-6 text-right font-mono tabular-nums font-semibold text-emerald-600 dark:text-emerald-400" data-v-8f66bc88${_scopeId}> +${ssrInterpolate(unref(formatPoints)(item.pointsDelta, 4))}</td><td class="py-4 px-6 text-right font-mono tabular-nums text-gray-700 dark:text-white/70" data-v-8f66bc88${_scopeId}>${ssrInterpolate(unref(formatPoints)(item.afterPoints, 4))}</td></tr>`);
                });
                _push2(`<!--]--></tbody></table>`);
              }
              _push2(`</div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6 relative" }, [
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner relative overflow-hidden group" }, [
                  createVNode("div", { class: "absolute -right-32 -top-32 w-72 h-72 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6d4cff]/10 transition-colors duration-1000" }),
                  createVNode("div", { class: "flex flex-col lg:flex-row lg:items-start justify-between mb-8 relative z-10 gap-6" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-baseline gap-4 flex-wrap" }, [
                        createVNode("div", { class: "text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white tabular-nums" }, [
                          unref(walletLoading) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "w-36 h-10 bg-gray-50 dark:bg-white/5 animate-pulse rounded-2xl inline-block"
                          })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("span", null, toDisplayString(unref(formatPoints)((_h = unref(walletData)) == null ? void 0 : _h.points)), 1),
                            createVNode("span", { class: "ml-1.5 text-base font-normal text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1),
                            createVNode("span", { class: "ml-2 text-sm font-mono text-gray-500 dark:text-white/45" }, "\u2248 " + toDisplayString(unref(formatUsdRef)((_i = unref(walletData)) == null ? void 0 : _i.points)) + " USD", 1)
                          ], 64))
                        ]),
                        createVNode("span", { class: "pb-2 text-sm text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.availablePoints")), 1)
                      ]),
                      createVNode("div", { class: "mt-6 flex flex-wrap items-center gap-3" }, [
                        createVNode("div", { class: "flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-black/60 transition-all" }, [
                          createVNode("div", { class: "w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-down-right-bold",
                              class: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                            })
                          ]),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "text-xs text-gray-600 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.earnedPoints")), 1),
                            createVNode("span", { class: "text-sm font-semibold tabular-nums text-gray-900 dark:text-white/80" }, toDisplayString(unref(formatPoints)((_j = unref(walletData)) == null ? void 0 : _j.totalEarnedPoints)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-black/60 transition-all" }, [
                          createVNode("div", { class: "w-7 h-7 rounded-lg bg-[#6d4cff]/10 flex items-center justify-center border border-[#6d4cff]/20" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-up-right-bold",
                              class: "w-3.5 h-3.5 text-[#6d4cff] dark:text-[#8ea3ff]"
                            })
                          ]),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", { class: "text-xs text-gray-600 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.spentPoints")), 1),
                            createVNode("span", { class: "text-sm font-semibold tabular-nums text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(unref(formatPoints)((_k = unref(walletData)) == null ? void 0 : _k.totalSpentPoints)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3 lg:text-right min-w-0 lg:min-w-[400px]" }, [
                      createVNode("div", { class: "border border-gray-100 dark:border-white/5 rounded-2xl p-3 bg-white dark:bg-black/20" }, [
                        createVNode("div", { class: "mb-2 text-xs text-gray-600 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.requestsCount")), 1),
                        createVNode("div", { class: "text-xl font-semibold tabular-nums text-gray-900 dark:text-white" }, toDisplayString(unref(formatPoints)(((_l = statsData.value) == null ? void 0 : _l.totalRequests) || 0)), 1)
                      ]),
                      createVNode("div", { class: "border border-gray-100 dark:border-white/5 rounded-2xl p-3 bg-blue-50/50 dark:bg-blue-500/5" }, [
                        createVNode("div", { class: "mb-2 text-xs text-gray-600 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.tokensCount")), 1),
                        createVNode("div", { class: "text-xl font-semibold tabular-nums text-[#6d4cff] dark:text-blue-400" }, toDisplayString(unref(formatTokensCount)((_m = statsData.value) == null ? void 0 : _m.totalTokens)), 1)
                      ]),
                      createVNode("div", { class: "border border-gray-100 dark:border-white/5 rounded-2xl p-3 bg-indigo-50/50 dark:bg-indigo-500/5" }, [
                        createVNode("div", { class: "mb-2 text-xs text-gray-600 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.rangePointsSpent")), 1),
                        createVNode("div", { class: "text-xl font-semibold tabular-nums text-blue-700 dark:text-blue-500" }, toDisplayString(unref(formatPoints)(((_n = statsData.value) == null ? void 0 : _n.totalPointsCost) || 0)), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative z-10 pt-6 border-t border-gray-100 dark:border-white/5" }, [
                    createVNode("div", { class: "mb-3 flex items-center justify-between text-xs text-gray-700 dark:text-white/50" }, [
                      createVNode("span", { class: "flex items-center gap-2" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chart-line-up-bold",
                          class: "w-4 h-4 text-[#6d4cff]"
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.member.billing.usageProgress")), 1)
                      ]),
                      createVNode("span", { class: "font-mono text-gray-900 dark:text-white/70 bg-gray-50 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-gray-100 dark:border-white/5" }, toDisplayString(consumedPct.value) + "% ", 1)
                    ]),
                    createVNode("div", { class: "w-full h-3 bg-gray-50 dark:bg-black/60 rounded-full overflow-hidden flex border border-gray-100 dark:border-white/5 p-0.5 relative" }, [
                      createVNode("div", {
                        class: "h-full bg-[linear-gradient(90deg,#3b82f6,#6d4cff)] transition-all duration-1000 overflow-hidden relative rounded-full",
                        style: { width: consumedPct.value + "%" }
                      }, [
                        createVNode("div", { class: "absolute inset-0 wave-overlay opacity-40" })
                      ], 4)
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6" }, [
                  createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 shadow-sm dark:shadow-inner relative overflow-hidden group" }, [
                    createVNode("div", { class: "absolute -left-20 -bottom-20 w-64 h-64 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none" }),
                    createVNode("div", { class: "flex items-center gap-4 mb-6 relative z-10" }, [
                      createVNode("div", { class: "w-11 h-11 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chart-line-up-duotone",
                          class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-base font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.billing.usageTrend")), 1),
                        createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.billing.requestsVsCost")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "relative mt-6 z-10" }, [
                      (openBlock(), createBlock("svg", {
                        viewBox: "0 0 1000 320",
                        class: "w-full h-64"
                      }, [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (y) => {
                          return createVNode("g", { key: y }, [
                            createVNode("line", {
                              x1: "70",
                              y1: 30 + (y - 1) * 65,
                              x2: "930",
                              y2: 30 + (y - 1) * 65,
                              stroke: "currentColor",
                              class: "text-gray-200 dark:text-white/[0.04]",
                              "stroke-width": "1"
                            }, null, 8, ["y1", "y2"])
                          ]);
                        }), 64)),
                        (openBlock(true), createBlock(Fragment, null, renderList(chartPoints.value, (pt, idx) => {
                          return openBlock(), createBlock("g", {
                            key: `bar-${idx}`
                          }, [
                            createVNode("rect", {
                              x: pt.x - barWidth.value / 2,
                              y: pt.barY,
                              width: barWidth.value,
                              height: pt.barHeight,
                              rx: "6",
                              fill: "currentColor",
                              class: "text-gray-100 dark:text-white/[0.05]"
                            }, null, 8, ["x", "y", "width", "height"])
                          ]);
                        }), 128)),
                        linePath.value ? (openBlock(), createBlock("path", {
                          key: 0,
                          d: linePath.value,
                          fill: "none",
                          stroke: "#6d4cff",
                          "stroke-width": "4",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, null, 8, ["d"])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(chartPoints.value, (pt, idx) => {
                          return openBlock(), createBlock("g", {
                            key: `dot-${idx}`
                          }, [
                            createVNode("circle", {
                              cx: pt.x,
                              cy: pt.lineY,
                              r: "5",
                              fill: "#6d4cff",
                              stroke: "currentColor",
                              "stroke-width": "2.5",
                              class: "text-white dark:text-[#020203]"
                            }, null, 8, ["cx", "cy"])
                          ]);
                        }), 128)),
                        (openBlock(true), createBlock(Fragment, null, renderList(trendLabels.value, (label, idx) => {
                          var _a2;
                          return openBlock(), createBlock("g", {
                            key: `label-${idx}`
                          }, [
                            showXLabel(Number(idx)) ? (openBlock(), createBlock("text", {
                              key: 0,
                              x: (_a2 = chartPoints.value[idx]) == null ? void 0 : _a2.x,
                              y: "312",
                              fill: "currentColor",
                              "font-size": "11",
                              "text-anchor": "middle",
                              class: "text-gray-500 dark:text-white/50 font-mono"
                            }, toDisplayString(label), 9, ["x"])) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 shadow-sm dark:shadow-inner relative overflow-hidden group" }, [
                    createVNode("div", { class: "absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" }),
                    createVNode("div", { class: "flex items-center gap-4 mb-6 relative z-10" }, [
                      createVNode("div", { class: "w-11 h-11 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chart-pie-duotone",
                          class: "w-5 h-5 text-amber-500 dark:text-amber-400"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-base font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.billing.modelDistribution")), 1),
                        createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.billing.byEstimatedSpending")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-center py-4 relative z-10" }, [
                      createVNode("div", { class: "relative w-44 h-44" }, [
                        (openBlock(), createBlock("svg", {
                          viewBox: "0 0 120 120",
                          class: "w-full h-full"
                        }, [
                          createVNode("g", { transform: "rotate(-90 60 60)" }, [
                            createVNode("circle", {
                              cx: "60",
                              cy: "60",
                              r: "38",
                              fill: "none",
                              stroke: "currentColor",
                              class: "text-gray-100 dark:text-white/[0.04]",
                              "stroke-width": "14"
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(donutSegments.value, (seg) => {
                              return openBlock(), createBlock("circle", {
                                key: seg.name,
                                cx: "60",
                                cy: "60",
                                r: "38",
                                fill: "none",
                                stroke: seg.color,
                                "stroke-width": "14",
                                "stroke-dasharray": `${seg.length} ${donutCircumference - seg.length}`,
                                "stroke-dashoffset": seg.offset,
                                style: { "stroke-linecap": "round" }
                              }, null, 8, ["stroke", "stroke-dasharray", "stroke-dashoffset"]);
                            }), 128))
                          ])
                        ])),
                        createVNode("div", { class: "absolute inset-0 flex flex-col items-center justify-center" }, [
                          createVNode("span", { class: "text-xs text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.models.colModel")), 1),
                          createVNode("span", { class: "text-3xl font-bold text-gray-900 dark:text-white mt-0.5 tabular-nums" }, toDisplayString(modelStats.value.length), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-4 space-y-2 relative z-10" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(modelStats.value.slice(0, 4), (m) => {
                        return openBlock(), createBlock("div", {
                          key: m.name,
                          class: "flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5"
                        }, [
                          createVNode("div", { class: "flex items-center gap-3 min-w-0" }, [
                            createVNode("div", {
                              class: "w-2.5 h-2.5 rounded-full shrink-0",
                              style: { backgroundColor: m.color }
                            }, null, 4),
                            createVNode("span", { class: "text-xs font-mono text-gray-700 dark:text-white/70 truncate" }, toDisplayString(m.name), 1)
                          ]),
                          createVNode("span", { class: "text-xs font-mono tabular-nums text-gray-600 dark:text-white/60" }, toDisplayString(unref(formatPoints)(m.value)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner" }, [
                  createVNode("div", { class: "border-b border-gray-100 dark:border-white/5 bg-gray-50/80 dark:bg-black/20 p-2.5 sm:p-3" }, [
                    createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                      createVNode("button", {
                        type: "button",
                        class: ["flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs transition-all", activeTab.value === "consumption" ? "bg-white text-gray-900 shadow-sm border border-gray-200/90 dark:bg-white/15 dark:border-white/15 dark:text-white font-bold" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 font-medium"],
                        onClick: ($event) => switchTab("consumption")
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chart-bar-duotone",
                          class: ["h-4 w-4 shrink-0", activeTab.value === "consumption" ? "text-[#6d4cff] dark:text-[#a896ff]" : "text-gray-400"]
                        }, null, 8, ["class"]),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.billing.tabConsumption")), 1)
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        class: ["flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs transition-all", activeTab.value === "rewards" ? "bg-white text-gray-900 shadow-sm border border-gray-200/90 dark:bg-white/15 dark:border-white/15 dark:text-white font-bold" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 font-medium"],
                        onClick: ($event) => switchTab("rewards")
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:currency-circle-dollar-duotone",
                          class: ["h-4 w-4 shrink-0", activeTab.value === "rewards" ? "text-[#6d4cff] dark:text-[#a896ff]" : "text-gray-400"]
                        }, null, 8, ["class"]),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.billing.tabRewards")), 1)
                      ], 10, ["onClick"])
                    ])
                  ]),
                  activeTab.value === "consumption" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "overflow-x-auto relative min-h-[320px]"
                  }, [
                    loading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-16 text-center text-sm text-gray-500 dark:text-white/50"
                    }, toDisplayString(_ctx.$t("hoxi.member.common.loading")), 1)) : !billingLogs.value.length ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "p-16 text-center"
                    }, [
                      createVNode("div", { class: "w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mx-auto mb-4" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chart-bar-duotone",
                          class: "w-8 h-8 text-gray-400 dark:text-white/30"
                        })
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.billing.emptyConsumption")), 1)
                    ])) : (openBlock(), createBlock("table", {
                      key: 2,
                      class: "w-full min-w-[720px] text-left border-collapse text-sm"
                    }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50" }, [
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.billing.colTime")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.models.colModel")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.billing.colTokens")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.billing.colPointsSpent")), 1)
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-white/5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(billingLogs.value, (item, idx) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id || idx,
                            class: "hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group"
                          }, [
                            createVNode("td", { class: "py-4 px-6" }, [
                              createVNode("div", { class: "flex items-center gap-2 text-gray-600 dark:text-white/55 text-xs font-mono" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:clock-duotone",
                                  class: "w-4 h-4 text-[#6d4cff]"
                                }),
                                createVNode("span", null, toDisplayString(unref(formatShortTime)(item.createdAt)), 1)
                              ])
                            ]),
                            createVNode("td", { class: "py-4 px-6 font-mono text-gray-900 dark:text-white group-hover:text-[#6d4cff] dark:group-hover:text-[#b496ff] transition-colors" }, toDisplayString(item.model), 1),
                            createVNode("td", { class: "py-4 px-6 text-right font-mono text-xs tabular-nums text-gray-600 dark:text-white/60" }, toDisplayString(item.promptTokens) + " / " + toDisplayString(item.completionTokens), 1),
                            createVNode("td", { class: "py-4 px-6 text-right font-mono tabular-nums" }, [
                              createVNode("span", { class: "font-semibold text-gray-900 dark:text-white" }, "-" + toDisplayString(unref(formatPoints)(item.pointsCost, 4)), 1),
                              createVNode("span", { class: "ml-1.5 text-[11px] text-gray-400 dark:text-white/40" }, "(" + toDisplayString(unref(formatUsdRef)(item.usdCost, true)) + ")", 1)
                            ])
                          ]);
                        }), 128))
                      ])
                    ]))
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "overflow-x-auto relative min-h-[320px]"
                  }, [
                    loading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-16 text-center text-sm text-gray-500 dark:text-white/50"
                    }, toDisplayString(_ctx.$t("hoxi.member.common.loading")), 1)) : !balanceLogs.value.length ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "p-16 text-center"
                    }, [
                      createVNode("div", { class: "w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mx-auto mb-4" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:currency-circle-dollar-duotone",
                          class: "w-8 h-8 text-gray-400 dark:text-white/30"
                        })
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.billing.emptyRewards")), 1)
                    ])) : (openBlock(), createBlock("table", {
                      key: 2,
                      class: "w-full min-w-[720px] text-left border-collapse text-sm"
                    }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50" }, [
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.billing.colTime")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.billing.colRemark")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.billing.colPointsDelta")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.billing.colAfterPoints")), 1)
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-white/5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(balanceLogs.value, (item, idx) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id || idx,
                            class: "hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
                          }, [
                            createVNode("td", { class: "py-4 px-6" }, [
                              createVNode("div", { class: "flex items-center gap-2 text-gray-600 dark:text-white/55 text-xs font-mono" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:calendar-blank-duotone",
                                  class: "w-4 h-4 text-[#6d4cff]"
                                }),
                                createVNode("span", null, toDisplayString(unref(formatShortTime)(item.createdAt)), 1)
                              ])
                            ]),
                            createVNode("td", { class: "py-4 px-6 text-gray-800 dark:text-white/80" }, toDisplayString(item.remark || item.actionType), 1),
                            createVNode("td", { class: "py-4 px-6 text-right font-mono tabular-nums font-semibold text-emerald-600 dark:text-emerald-400" }, " +" + toDisplayString(unref(formatPoints)(item.pointsDelta, 4)), 1),
                            createVNode("td", { class: "py-4 px-6 text-right font-mono tabular-nums text-gray-700 dark:text-white/70" }, toDisplayString(unref(formatPoints)(item.afterPoints, 4)), 1)
                          ]);
                        }), 128))
                      ])
                    ]))
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/user/billing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f66bc88"]]);

export { billing as default };
//# sourceMappingURL=billing-D7XRrJjU.mjs.map
