import { P as _export_sfc, u as useI18n, D as useLocaleRouter, bg as useUserSession, bt as useSeoMeta, _ as _sfc_main$W, O as __nuxt_component_3$3 } from './server.mjs';
import { defineComponent, computed, ref, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { u as useHoxiMember, _ as _sfc_main$1 } from './layout-DypCocu9.mjs';
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

const emptyActivityClass = "bg-gray-100 border-gray-200 dark:bg-white/5 dark:border-white/5";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { user } = useUserSession();
    const {
      walletLoading,
      memberInfo,
      walletData,
      checkinSummary,
      formatPoints,
      formatUsdRef,
      formatTokensCount,
      formatShortTime
    } = useHoxiMember();
    useSeoMeta({
      title: () => `${t("hoxi.member.dashboard.title")} \xB7 ${t("hoxi.site.name")}`
    });
    const userLabel = computed(
      () => {
        var _a, _b;
        return ((_a = user.value) == null ? void 0 : _a.nickname) || ((_b = user.value) == null ? void 0 : _b.email) || t("hoxi.member.shell.guest");
      }
    );
    const statsLoading = ref(true);
    const statsData = ref(null);
    const recentLoading = ref(true);
    const recentItems = ref([]);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const activityMonthLabels = computed(() => {
      const currentMonth = (/* @__PURE__ */ new Date()).getMonth();
      return Array.from({ length: 12 }, (_, index) => monthNames[(currentMonth + index + 1) % 12]);
    });
    const walletPools = computed(() => {
      var _a, _b, _c, _d;
      return [
        {
          key: "available",
          label: t("hoxi.member.dashboard.availablePoints"),
          value: ((_a = walletData.value) == null ? void 0 : _a.gatewayAvailable) === false ? "\u2014" : formatPoints((_b = walletData.value) == null ? void 0 : _b.points),
          color: "text-gray-900 dark:text-white",
          dot: "bg-gray-300 dark:bg-white/30",
          bg: "bg-white dark:bg-black/20"
        },
        {
          key: "today",
          label: t("hoxi.member.rewards.todayReward"),
          value: `+${formatPoints(((_c = checkinSummary.value) == null ? void 0 : _c.todayPoints) || 5)}`,
          color: "text-[#6d4cff] dark:text-[#8ea3ff]",
          dot: "bg-[#6d4cff]",
          bg: "bg-purple-50/50 dark:bg-purple-500/5"
        },
        {
          key: "pending",
          label: t("hoxi.member.dashboard.pendingPoints"),
          value: formatPoints(((_d = walletData.value) == null ? void 0 : _d.pendingPoints) || 0),
          color: "text-blue-700 dark:text-blue-500",
          dot: "bg-blue-500",
          bg: "bg-blue-50/50 dark:bg-blue-500/5"
        }
      ];
    });
    const consumedPct = computed(() => {
      var _a, _b;
      const earned = Number(((_a = walletData.value) == null ? void 0 : _a.totalEarnedPoints) || 0);
      const spent = Number(((_b = walletData.value) == null ? void 0 : _b.totalSpentPoints) || 0);
      if (earned <= 0) return 0;
      return Math.min(Math.round(spent / earned * 100), 100);
    });
    const getActivityColor = (col, row) => {
      var _a;
      const heatmapData = (_a = statsData.value) == null ? void 0 : _a.activityHeatmap;
      if (statsLoading.value || !Array.isArray(heatmapData) || !heatmapData.length) {
        return emptyActivityClass;
      }
      const today = /* @__PURE__ */ new Date();
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - 52 * 7 + 1);
      const cellIndex = (col - 1) * 7 + (row - 1);
      const cellDate = new Date(startDate);
      cellDate.setDate(startDate.getDate() + cellIndex);
      const dateStr = `${cellDate.getFullYear()}-${String(cellDate.getMonth() + 1).padStart(2, "0")}-${String(cellDate.getDate()).padStart(2, "0")}`;
      const dayData = heatmapData.find((item) => item.date === dateStr);
      if (!dayData || !dayData.count) return emptyActivityClass;
      const count = Number(dayData.count);
      if (count > 200) return "bg-[#6d4cff] border-[#6d4cff]/80";
      if (count > 80) return "bg-[#6d4cff]/70 border-[#6d4cff]/40";
      if (count > 35) return "bg-[#6d4cff]/40 border-[#6d4cff]/25";
      return "bg-[#6d4cff]/20 border-[#6d4cff]/15";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$W;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-900 dark:text-white" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.hello", { name: userLabel.value }))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.hello", { name: userLabel.value })), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-1 text-gray-700 dark:text-gray-400 italic tracking-tight" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.subtitle"))}</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-1 text-gray-700 dark:text-gray-400 italic tracking-tight" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.subtitle")), 1)
            ];
          }
        }),
        "header-right": withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/user/rewards"),
              class: ["inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all shadow-sm active:scale-95", ((_a = unref(checkinSummary)) == null ? void 0 : _a.checkedInToday) ? "border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1e] text-gray-700 dark:text-white/70" : "bg-[#6d4cff] hover:bg-[#5b3ee0] text-white shadow-[#6d4cff]/20"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:calendar-check-duotone",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-c4fe02a8${_scopeId2}>${ssrInterpolate(((_a2 = unref(checkinSummary)) == null ? void 0 : _a2.checkedInToday) ? _ctx.$t("hoxi.member.rewards.checkedIn") : _ctx.$t("hoxi.member.rewards.checkInNow"))}</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:calendar-check-duotone",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, toDisplayString(((_b2 = unref(checkinSummary)) == null ? void 0 : _b2.checkedInToday) ? _ctx.$t("hoxi.member.rewards.checkedIn") : _ctx.$t("hoxi.member.rewards.checkInNow")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: unref(localePath)("/user/rewards"),
                class: ["inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all shadow-sm active:scale-95", ((_b = unref(checkinSummary)) == null ? void 0 : _b.checkedInToday) ? "border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1e] text-gray-700 dark:text-white/70" : "bg-[#6d4cff] hover:bg-[#5b3ee0] text-white shadow-[#6d4cff]/20"]
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:calendar-check-duotone",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, toDisplayString(((_a2 = unref(checkinSummary)) == null ? void 0 : _a2.checkedInToday) ? _ctx.$t("hoxi.member.rewards.checkedIn") : _ctx.$t("hoxi.member.rewards.checkInNow")), 1)
                  ];
                }),
                _: 1
              }, 8, ["to", "class"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
          if (_push2) {
            _push2(`<div class="space-y-6 relative" data-v-c4fe02a8${_scopeId}><div class="absolute -left-32 top-0 w-72 h-72 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none" data-v-c4fe02a8${_scopeId}></div><div class="absolute -right-32 bottom-0 w-72 h-72 bg-[#8ea3ff]/5 rounded-full blur-[100px] pointer-events-none" data-v-c4fe02a8${_scopeId}></div>`);
            if (unref(memberInfo) && !unref(memberInfo).emailVerified) {
              _push2(`<div class="p-4 rounded-3xl border border-amber-500/20 bg-amber-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-2.5 text-xs sm:text-sm text-amber-700 dark:text-amber-300" data-v-c4fe02a8${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:warning-circle-duotone",
                class: "w-5 h-5 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.verifyEmailHint"))}</span></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/user/account"),
                class: "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl border border-amber-500/30 text-xs font-medium text-amber-800 dark:text-amber-200 hover:bg-amber-500/20 shrink-0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-c4fe02a8${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.member.common.goVerify"))}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.common.goVerify")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner space-y-8 relative overflow-hidden group" data-v-c4fe02a8${_scopeId}><div class="absolute -right-16 -top-16 w-48 h-48 bg-gray-500/5 dark:bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-gray-500/10 dark:group-hover:bg-white/10 transition-colors duration-700" data-v-c4fe02a8${_scopeId}></div><div data-v-c4fe02a8${_scopeId}><div class="flex flex-wrap items-start justify-between gap-4 mb-6 relative z-10" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-3 text-sm text-gray-700 dark:text-white/60" data-v-c4fe02a8${_scopeId}><div class="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:calendar-duotone",
              class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`</div><span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.activeDays"))}</span></div><div class="flex items-center gap-2 text-xs text-gray-500 dark:text-white/50" data-v-c4fe02a8${_scopeId}><span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.less"))}</span><div class="flex gap-1.5" data-v-c4fe02a8${_scopeId}><div class="w-3.5 h-3.5 rounded-sm bg-gray-100 border-gray-200 dark:bg-white/5 dark:border-white/5 border" data-v-c4fe02a8${_scopeId}></div><div class="w-3.5 h-3.5 rounded-sm bg-[#6d4cff]/20 border border-[#6d4cff]/10" data-v-c4fe02a8${_scopeId}></div><div class="w-3.5 h-3.5 rounded-sm bg-[#6d4cff]/40 border border-[#6d4cff]/10" data-v-c4fe02a8${_scopeId}></div><div class="w-3.5 h-3.5 rounded-sm bg-[#6d4cff]/70 border border-[#6d4cff]/10" data-v-c4fe02a8${_scopeId}></div><div class="w-3.5 h-3.5 rounded-sm bg-[#6d4cff] border border-gray-200 dark:border-white/10" data-v-c4fe02a8${_scopeId}></div></div><span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.more"))}</span></div></div><div class="flex gap-4 justify-center w-full relative z-10" data-v-c4fe02a8${_scopeId}><div class="flex flex-col gap-[6px] text-xs text-gray-500 dark:text-white/55 py-[2px] pt-[24px] text-right" data-v-c4fe02a8${_scopeId}><span class="h-3 flex items-center justify-end invisible" data-v-c4fe02a8${_scopeId}>S</span><span class="h-3 flex items-center justify-end pr-1.5" data-v-c4fe02a8${_scopeId}>M</span><span class="h-3 flex items-center justify-end invisible" data-v-c4fe02a8${_scopeId}>T</span><span class="h-3 flex items-center justify-end pr-1.5" data-v-c4fe02a8${_scopeId}>W</span><span class="h-3 flex items-center justify-end invisible" data-v-c4fe02a8${_scopeId}>T</span><span class="h-3 flex items-center justify-end pr-1.5" data-v-c4fe02a8${_scopeId}>F</span><span class="h-3 flex items-center justify-end invisible" data-v-c4fe02a8${_scopeId}>S</span></div><div class="flex-1 min-w-0 pb-2" data-v-c4fe02a8${_scopeId}><div class="w-full" data-v-c4fe02a8${_scopeId}><div class="grid grid-cols-12 gap-2 mb-3 w-full text-[11px] text-gray-500 dark:text-white/50" data-v-c4fe02a8${_scopeId}><!--[-->`);
            ssrRenderList(activityMonthLabels.value, (m) => {
              _push2(`<div class="min-w-0 truncate" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(m)}</div>`);
            });
            _push2(`<!--]--></div><div class="grid w-full gap-1 md:gap-1.5" style="${ssrRenderStyle({ gridTemplateColumns: "repeat(52, minmax(0, 1fr))" })}" data-v-c4fe02a8${_scopeId}><!--[-->`);
            ssrRenderList(52, (col) => {
              _push2(`<div class="grid min-w-0 grid-rows-7 gap-1 md:gap-1.5" data-v-c4fe02a8${_scopeId}><!--[-->`);
              ssrRenderList(7, (row) => {
                _push2(`<div class="${ssrRenderClass([[
                  getActivityColor(col, row),
                  getActivityColor(col, row) !== emptyActivityClass ? "hover:ring-2 hover:ring-[#6d4cff]/30 hover:scale-125 z-20" : "hover:bg-gray-100 hover:border-gray-300 dark:hover:bg-white/10 dark:hover:border-white/10"
                ], "aspect-square w-full rounded-[3px] transition-all cursor-pointer border"])}" data-v-c4fe02a8${_scopeId}></div>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div></div></div></div></div><div class="w-full h-px bg-gray-100 dark:bg-white/5 relative z-10" data-v-c4fe02a8${_scopeId}></div><div class="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10" data-v-c4fe02a8${_scopeId}><div class="md:col-span-8 flex flex-col justify-between" data-v-c4fe02a8${_scopeId}><div class="flex items-end gap-6 flex-wrap" data-v-c4fe02a8${_scopeId}><div class="flex flex-col gap-4 flex-1 min-w-[160px]" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-2 text-sm text-gray-700 dark:text-white/60" data-v-c4fe02a8${_scopeId}><div class="w-7 h-7 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:activity-bold",
              class: "w-3.5 h-3.5 text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`</div><span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.tokenUsage"))}</span></div>`);
            if (statsLoading.value) {
              _push2(`<div class="w-24 h-10 bg-gray-100 dark:bg-white/5 animate-pulse rounded-2xl border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}></div>`);
            } else {
              _push2(`<div class="text-3xl font-semibold text-gray-900 dark:text-white tabular-nums" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(unref(formatTokensCount)((_a = statsData.value) == null ? void 0 : _a.totalTokens))}</div>`);
            }
            _push2(`</div><div class="flex flex-col gap-3 flex-1 min-w-[120px]" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-2 text-sm text-gray-700 dark:text-white/55" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-square-in-bold",
              class: "w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400/60"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.input"))}</span></div><div class="h-11 bg-gray-50 dark:bg-black/40 rounded-xl flex items-center px-5 text-sm text-gray-800 dark:text-white/70 border border-gray-100 dark:border-white/5 group-hover:border-gray-200 dark:group-hover:border-white/10 transition-colors tabular-nums" data-v-c4fe02a8${_scopeId}>`);
            if (statsLoading.value) {
              _push2(`<span class="w-12 h-4 bg-gray-100 dark:bg-white/5 animate-pulse rounded" data-v-c4fe02a8${_scopeId}></span>`);
            } else {
              _push2(`<!--[-->${ssrInterpolate(unref(formatPoints)(((_b = statsData.value) == null ? void 0 : _b.promptTokens) || 0))}<!--]-->`);
            }
            _push2(`</div></div><div class="flex flex-col gap-3 flex-1 min-w-[120px]" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-2 text-sm text-gray-700 dark:text-white/55" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-square-out-bold",
              class: "w-3.5 h-3.5 text-[#6d4cff] dark:text-[#8ea3ff]/60"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.output"))}</span></div><div class="h-11 bg-gray-50 dark:bg-black/40 rounded-xl flex items-center px-5 text-sm text-gray-800 dark:text-white/70 border border-gray-100 dark:border-white/5 group-hover:border-gray-200 dark:group-hover:border-white/10 transition-colors tabular-nums" data-v-c4fe02a8${_scopeId}>`);
            if (statsLoading.value) {
              _push2(`<span class="w-12 h-4 bg-gray-100 dark:bg-white/5 animate-pulse rounded" data-v-c4fe02a8${_scopeId}></span>`);
            } else {
              _push2(`<!--[-->${ssrInterpolate(unref(formatPoints)(((_c = statsData.value) == null ? void 0 : _c.completionTokens) || 0))}<!--]-->`);
            }
            _push2(`</div></div></div></div><div class="md:col-span-4 flex flex-col justify-between md:border-l border-gray-100 dark:border-white/5 md:pl-8" data-v-c4fe02a8${_scopeId}><div class="flex flex-col gap-4" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-2 text-sm text-gray-700 dark:text-white/60" data-v-c4fe02a8${_scopeId}><div class="w-7 h-7 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chat-circle-dots-bold",
              class: "w-3.5 h-3.5 text-amber-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.chatCount"))}</span></div><div class="text-3xl font-semibold text-gray-900 dark:text-white tabular-nums" data-v-c4fe02a8${_scopeId}>`);
            if (statsLoading.value) {
              _push2(`<span class="w-24 h-10 bg-gray-100 dark:bg-white/5 animate-pulse rounded-2xl border border-gray-100 dark:border-white/5 inline-block" data-v-c4fe02a8${_scopeId}></span>`);
            } else {
              _push2(`<!--[-->${ssrInterpolate(unref(formatPoints)(((_d = statsData.value) == null ? void 0 : _d.totalRequests) || 0))}<!--]-->`);
            }
            _push2(`</div></div></div></div></div><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner relative overflow-hidden group" data-v-c4fe02a8${_scopeId}><div class="absolute -left-16 -bottom-16 w-48 h-48 bg-[#3b82f6]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#3b82f6]/10 transition-colors duration-700" data-v-c4fe02a8${_scopeId}></div><div class="flex flex-col lg:flex-row lg:items-start justify-between mb-8 relative z-10 gap-6" data-v-c4fe02a8${_scopeId}><div data-v-c4fe02a8${_scopeId}><div class="flex items-baseline gap-4 flex-wrap" data-v-c4fe02a8${_scopeId}><div class="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white tabular-nums" data-v-c4fe02a8${_scopeId}>`);
            if (unref(walletLoading)) {
              _push2(`<span class="w-36 h-10 bg-gray-100 dark:bg-white/5 animate-pulse rounded-2xl border border-gray-100 dark:border-white/5 inline-block" data-v-c4fe02a8${_scopeId}></span>`);
            } else {
              _push2(`<!--[--><span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(((_e = unref(walletData)) == null ? void 0 : _e.gatewayAvailable) === false ? "\u2014" : unref(formatPoints)((_f = unref(walletData)) == null ? void 0 : _f.points))}</span><span class="ml-1.5 text-base font-normal text-gray-500 dark:text-white/50" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span>`);
              if (((_g = unref(walletData)) == null ? void 0 : _g.gatewayAvailable) !== false) {
                _push2(`<span class="ml-2 text-sm font-mono text-gray-500 dark:text-white/45" data-v-c4fe02a8${_scopeId}>\u2248 ${ssrInterpolate(unref(formatUsdRef)((_h = unref(walletData)) == null ? void 0 : _h.points))} USD</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            }
            _push2(`</div><span class="pb-2 text-sm text-gray-500 dark:text-white/50" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.availablePoints"))}</span></div><div class="mt-6 flex items-center gap-3 flex-wrap" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-black/60 transition-all" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-down-right-bold",
              class: "w-4 h-4 text-emerald-600 dark:text-emerald-400"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-700 dark:text-white/50" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.earnedPoints"))}:</span><span class="text-sm font-semibold tabular-nums text-gray-900 dark:text-white/80" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(unref(formatPoints)((_i = unref(walletData)) == null ? void 0 : _i.totalEarnedPoints))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div><div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-black/60 transition-all" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-up-right-bold",
              class: "w-4 h-4 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm text-gray-700 dark:text-white/50" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.spentPoints"))}:</span><span class="text-sm font-semibold tabular-nums text-[#6d4cff] dark:text-[#8ea3ff]" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(unref(formatPoints)((_j = unref(walletData)) == null ? void 0 : _j.totalSpentPoints))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:text-right min-w-0 lg:min-w-[400px]" data-v-c4fe02a8${_scopeId}><!--[-->`);
            ssrRenderList(walletPools.value, (pool) => {
              _push2(`<div class="${ssrRenderClass([pool.bg, "border border-gray-100 dark:border-white/5 rounded-2xl p-3 group/pool hover:shadow-lg hover:-translate-y-0.5 transition-all"])}" data-v-c4fe02a8${_scopeId}><div class="flex items-center lg:justify-end gap-1.5 mb-2" data-v-c4fe02a8${_scopeId}><span class="text-xs text-gray-700 transition-colors group-hover/pool:text-[#6d4cff] dark:text-white/50" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(pool.label)}</span><span class="${ssrRenderClass([pool.dot, "w-1.5 h-1.5 rounded-full"])}" data-v-c4fe02a8${_scopeId}></span></div><div class="${ssrRenderClass([pool.color, "text-xl font-semibold tabular-nums transition-transform group-hover/pool:scale-105"])}" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(pool.value)}</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="w-full h-3 bg-gray-100 dark:bg-black/60 rounded-full overflow-hidden flex mb-6 border border-gray-200 dark:border-white/5 p-0.5 relative z-10" data-v-c4fe02a8${_scopeId}>`);
            if (unref(walletLoading)) {
              _push2(`<div class="w-full h-full bg-gray-200 dark:bg-white/5 animate-pulse rounded-full" data-v-c4fe02a8${_scopeId}></div>`);
            } else {
              _push2(`<div class="h-full bg-[linear-gradient(90deg,#3b82f6,#6d4cff)] transition-all duration-1000 overflow-hidden relative rounded-full" style="${ssrRenderStyle({ width: consumedPct.value + "%" })}" data-v-c4fe02a8${_scopeId}><div class="absolute inset-0 wave-overlay opacity-30" data-v-c4fe02a8${_scopeId}></div></div>`);
            }
            _push2(`</div><div class="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-100 dark:border-white/5 relative z-10" data-v-c4fe02a8${_scopeId}><div class="flex flex-wrap items-center gap-3" data-v-c4fe02a8${_scopeId}><span class="text-sm text-gray-700 dark:text-white/50" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.consumptionOrder"))}:</span><div class="flex items-center gap-2 flex-wrap" data-v-c4fe02a8${_scopeId}><div class="rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs text-gray-700 dark:border-white/5 dark:bg-white/5 dark:text-white/60" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.nav.rewards"))}</div>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-right-bold",
              class: "text-gray-500 dark:text-white/55 w-3 h-3"
            }, null, _parent2, _scopeId));
            _push2(`<div class="rounded-lg border border-[#6d4cff]/20 bg-[#6d4cff]/10 px-3 py-1.5 text-xs text-[#6d4cff] dark:text-[#8ea3ff]" data-v-c4fe02a8${_scopeId}> AINode Points Pool </div>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-right-bold",
              class: "text-gray-500 dark:text-white/55 w-3 h-3"
            }, null, _parent2, _scopeId));
            _push2(`<div class="rounded-lg border border-blue-600/20 bg-blue-600/10 px-3 py-1.5 text-xs text-blue-700 dark:text-blue-400" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.nav.keys"))}</div></div></div><div class="flex items-center gap-4" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/user/billing"),
              class: "group flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-800 transition-all hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white hover:shadow-lg active:scale-95 dark:border-white/5 dark:bg-white/5 dark:text-white/60 dark:hover:bg-[#6d4cff] dark:hover:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-c4fe02a8${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.viewBilling"))}</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.viewBilling")), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right-bold",
                      class: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/user/rewards"),
              class: "block group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2;
                if (_push3) {
                  _push3(`<div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner hover:bg-gray-50 dark:hover:bg-[#222226] hover:border-gray-200 dark:hover:border-white/10 hover:-translate-y-1 transition-all duration-500 h-full relative overflow-hidden" data-v-c4fe02a8${_scopeId2}><div class="absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-50 bg-emerald-500/5" data-v-c4fe02a8${_scopeId2}></div><div class="mb-6 flex items-center justify-between gap-3 text-sm text-gray-700 dark:text-white/60" data-v-c4fe02a8${_scopeId2}><div class="flex items-center gap-3" data-v-c4fe02a8${_scopeId2}><div class="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:calendar-check-duotone",
                    class: "w-5 h-5 text-emerald-600"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><span data-v-c4fe02a8${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.todayCheckin"))}</span></div><span class="text-xs font-mono text-emerald-600 dark:text-emerald-400" data-v-c4fe02a8${_scopeId2}> +${ssrInterpolate(unref(formatPoints)(((_a2 = unref(checkinSummary)) == null ? void 0 : _a2.todayPoints) || 5e3))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div><div class="text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" data-v-c4fe02a8${_scopeId2}>${ssrInterpolate(((_b2 = unref(checkinSummary)) == null ? void 0 : _b2.streak) || 0)} ${ssrInterpolate(_ctx.$t("hoxi.member.rewards.daysStreak"))}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner hover:bg-gray-50 dark:hover:bg-[#222226] hover:border-gray-200 dark:hover:border-white/10 hover:-translate-y-1 transition-all duration-500 h-full relative overflow-hidden" }, [
                      createVNode("div", { class: "absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-50 bg-emerald-500/5" }),
                      createVNode("div", { class: "mb-6 flex items-center justify-between gap-3 text-sm text-gray-700 dark:text-white/60" }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:calendar-check-duotone",
                              class: "w-5 h-5 text-emerald-600"
                            })
                          ]),
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.todayCheckin")), 1)
                        ]),
                        createVNode("span", { class: "text-xs font-mono text-emerald-600 dark:text-emerald-400" }, " +" + toDisplayString(unref(formatPoints)(((_c2 = unref(checkinSummary)) == null ? void 0 : _c2.todayPoints) || 5e3)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                      ]),
                      createVNode("div", { class: "text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(((_d2 = unref(checkinSummary)) == null ? void 0 : _d2.streak) || 0) + " " + toDisplayString(_ctx.$t("hoxi.member.rewards.daysStreak")), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/user/keys"),
              class: "block group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner hover:bg-gray-50 dark:hover:bg-[#222226] hover:border-gray-200 dark:hover:border-white/10 hover:-translate-y-1 transition-all duration-500 h-full relative overflow-hidden" data-v-c4fe02a8${_scopeId2}><div class="absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-50 bg-amber-500/5" data-v-c4fe02a8${_scopeId2}></div><div class="mb-6 flex items-center justify-between gap-3 text-sm text-gray-700 dark:text-white/60" data-v-c4fe02a8${_scopeId2}><div class="flex items-center gap-3" data-v-c4fe02a8${_scopeId2}><div class="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:key-duotone",
                    class: "w-5 h-5 text-amber-600"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><span data-v-c4fe02a8${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.quickBindTitle"))}</span></div><span class="text-xs text-[#6d4cff] dark:text-[#8ea3ff]" data-v-c4fe02a8${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.manage"))}</span></div><div class="text-lg font-mono text-gray-900 dark:text-white truncate" data-v-c4fe02a8${_scopeId2}>${ssrInterpolate((((_a2 = unref(walletData)) == null ? void 0 : _a2.gatewayBaseUrl) || "https://api.ainode.run") + "/v1")}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner hover:bg-gray-50 dark:hover:bg-[#222226] hover:border-gray-200 dark:hover:border-white/10 hover:-translate-y-1 transition-all duration-500 h-full relative overflow-hidden" }, [
                      createVNode("div", { class: "absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-50 bg-amber-500/5" }),
                      createVNode("div", { class: "mb-6 flex items-center justify-between gap-3 text-sm text-gray-700 dark:text-white/60" }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:key-duotone",
                              class: "w-5 h-5 text-amber-600"
                            })
                          ]),
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.quickBindTitle")), 1)
                        ]),
                        createVNode("span", { class: "text-xs text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.manage")), 1)
                      ]),
                      createVNode("div", { class: "text-lg font-mono text-gray-900 dark:text-white truncate" }, toDisplayString((((_b2 = unref(walletData)) == null ? void 0 : _b2.gatewayBaseUrl) || "https://api.ainode.run") + "/v1"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10" data-v-c4fe02a8${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner flex flex-col relative overflow-hidden group" data-v-c4fe02a8${_scopeId}><div class="absolute -right-16 -top-16 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-700" data-v-c4fe02a8${_scopeId}></div><div class="flex items-center justify-between mb-6 relative z-10" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-3 text-sm text-gray-700 dark:text-white/60" data-v-c4fe02a8${_scopeId}><div class="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:rocket-launch-duotone",
              class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`</div><span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.modelBreakdown"))}</span></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/user/models"),
              class: "rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-700 transition-all hover:bg-gray-900 hover:text-white active:scale-95 dark:border-white/5 dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.manage"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.member.dashboard.manage")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (statsLoading.value) {
              _push2(`<div class="space-y-3 flex-1 relative z-10" data-v-c4fe02a8${_scopeId}><!--[-->`);
              ssrRenderList(3, (i) => {
                _push2(`<div class="h-20 rounded-2xl bg-gray-50 dark:bg-white/[0.02] animate-pulse border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}></div>`);
              });
              _push2(`<!--]--></div>`);
            } else if (((_l = (_k = statsData.value) == null ? void 0 : _k.modelDistribution) == null ? void 0 : _l.length) > 0) {
              _push2(`<div class="space-y-3 flex-1 relative z-10" data-v-c4fe02a8${_scopeId}><!--[-->`);
              ssrRenderList(statsData.value.modelDistribution.slice(0, 5), (item) => {
                _push2(`<div class="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] hover:border-gray-200 dark:hover:border-white/10 transition-all group/row hover:shadow-lg" data-v-c4fe02a8${_scopeId}><div class="w-11 h-11 rounded-xl bg-white dark:bg-white/[0.04] flex items-center justify-center shrink-0 border border-gray-100 dark:border-white/5 group-hover/row:bg-[#6d4cff] group-hover/row:text-white transition-all" data-v-c4fe02a8${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:cpu-fill",
                  class: "w-5 h-5"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex-1 min-w-0" data-v-c4fe02a8${_scopeId}><div class="text-gray-900 dark:text-white truncate flex justify-between items-baseline" data-v-c4fe02a8${_scopeId}><span class="text-sm font-mono font-medium" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(item.model)}</span><span class="text-xs text-gray-500 dark:text-white/55" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(item.requests)} reqs</span></div><div class="w-full h-1 bg-gray-100 dark:bg-black/40 rounded-full mt-3 overflow-hidden border border-gray-200 dark:border-white/5" data-v-c4fe02a8${_scopeId}><div class="h-full rounded-full bg-[linear-gradient(90deg,#6d4cff,#8ea3ff)] transition-all duration-1000" style="${ssrRenderStyle({ "width": "100%" })}" data-v-c4fe02a8${_scopeId}></div></div></div><div class="text-right shrink-0 ml-2" data-v-c4fe02a8${_scopeId}><div class="rounded-full border border-[#6d4cff]/20 bg-[#6d4cff]/10 px-2.5 py-1 text-xs font-mono text-[#6d4cff] dark:text-[#8ea3ff]" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(unref(formatPoints)(item.pointsCost))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="flex flex-col items-center justify-center py-12 text-gray-200 dark:text-white/10 flex-1 relative z-10" data-v-c4fe02a8${_scopeId}><div class="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mb-4" data-v-c4fe02a8${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:ghost-duotone",
                class: "w-10 h-10"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm text-center text-gray-600 dark:text-white/50 max-w-xs" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.noUsageYet"))}</p></div>`);
            }
            _push2(`</div><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner flex flex-col relative overflow-hidden group" data-v-c4fe02a8${_scopeId}><div class="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-700" data-v-c4fe02a8${_scopeId}></div><div class="flex items-center justify-between mb-6 relative z-10" data-v-c4fe02a8${_scopeId}><div class="flex items-center gap-3 text-sm text-gray-700 dark:text-white/60" data-v-c4fe02a8${_scopeId}><div class="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:receipt-duotone",
              class: "w-5 h-5 text-emerald-600 dark:text-emerald-400"
            }, null, _parent2, _scopeId));
            _push2(`</div><span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.recentTransactions"))}</span></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/user/billing"),
              class: "rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-700 transition-all hover:bg-gray-900 hover:text-white active:scale-95 dark:border-white/5 dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.viewAll"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.member.dashboard.viewAll")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (recentLoading.value) {
              _push2(`<div class="space-y-2 flex-1 relative z-10" data-v-c4fe02a8${_scopeId}><!--[-->`);
              ssrRenderList(4, (i) => {
                _push2(`<div class="h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] animate-pulse border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}></div>`);
              });
              _push2(`<!--]--></div>`);
            } else if (recentItems.value.length > 0) {
              _push2(`<div class="space-y-2 flex-1 relative z-10" data-v-c4fe02a8${_scopeId}><!--[-->`);
              ssrRenderList(recentItems.value.slice(0, 5), (row) => {
                _push2(`<div class="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] hover:border-gray-200 dark:hover:border-white/10 transition-all" data-v-c4fe02a8${_scopeId}><div class="w-10 h-10 rounded-xl bg-white dark:bg-white/[0.04] flex items-center justify-center shrink-0 border border-gray-100 dark:border-white/5" data-v-c4fe02a8${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: row.isCredit ? "ph:check-circle-duotone" : "ph:lightning-duotone",
                  class: [row.isCredit ? "text-emerald-600 dark:text-emerald-400" : "text-[#6d4cff] dark:text-[#8ea3ff]", "w-5 h-5"]
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex-1 min-w-0" data-v-c4fe02a8${_scopeId}><div class="text-gray-900 dark:text-white/80 text-sm truncate flex justify-between items-center mb-1" data-v-c4fe02a8${_scopeId}><span class="truncate font-medium" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(row.title)}</span></div><div class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-white/50 font-mono" data-v-c4fe02a8${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:calendar-blank-bold",
                  class: "w-3 h-3 text-[#6d4cff]/40 dark:text-[#8ea3ff]/40"
                }, null, _parent2, _scopeId));
                _push2(`<span data-v-c4fe02a8${_scopeId}>${ssrInterpolate(unref(formatShortTime)(row.time))}</span></div></div><div class="text-right shrink-0 ml-2" data-v-c4fe02a8${_scopeId}><div class="${ssrRenderClass([row.isCredit ? "text-emerald-600 dark:text-emerald-400" : "text-gray-900 dark:text-white", "text-sm font-mono font-semibold tabular-nums"])}" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(row.isCredit ? "+" : "-")}${ssrInterpolate(unref(formatPoints)(row.points, 4))}</div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="flex flex-col items-center justify-center py-12 text-gray-200 dark:text-white/10 flex-1 relative z-10" data-v-c4fe02a8${_scopeId}><div class="w-20 h-20 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mb-4" data-v-c4fe02a8${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:receipt-duotone",
                class: "w-10 h-10"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm text-gray-600 dark:text-white/50" data-v-c4fe02a8${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.noRecentTransactions"))}</p></div>`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6 relative" }, [
                createVNode("div", { class: "absolute -left-32 top-0 w-72 h-72 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none" }),
                createVNode("div", { class: "absolute -right-32 bottom-0 w-72 h-72 bg-[#8ea3ff]/5 rounded-full blur-[100px] pointer-events-none" }),
                unref(memberInfo) && !unref(memberInfo).emailVerified ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "p-4 rounded-3xl border border-amber-500/20 bg-amber-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10"
                }, [
                  createVNode("div", { class: "flex items-center gap-2.5 text-xs sm:text-sm text-amber-700 dark:text-amber-300" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:warning-circle-duotone",
                      class: "w-5 h-5 shrink-0"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.common.verifyEmailHint")), 1)
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/user/account"),
                    class: "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl border border-amber-500/30 text-xs font-medium text-amber-800 dark:text-amber-200 hover:bg-amber-500/20 shrink-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.common.goVerify")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner space-y-8 relative overflow-hidden group" }, [
                  createVNode("div", { class: "absolute -right-16 -top-16 w-48 h-48 bg-gray-500/5 dark:bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-gray-500/10 dark:group-hover:bg-white/10 transition-colors duration-700" }),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex flex-wrap items-start justify-between gap-4 mb-6 relative z-10" }, [
                      createVNode("div", { class: "flex items-center gap-3 text-sm text-gray-700 dark:text-white/60" }, [
                        createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:calendar-duotone",
                            class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
                          })
                        ]),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.activeDays")), 1)
                      ]),
                      createVNode("div", { class: "flex items-center gap-2 text-xs text-gray-500 dark:text-white/50" }, [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.less")), 1),
                        createVNode("div", { class: "flex gap-1.5" }, [
                          createVNode("div", { class: "w-3.5 h-3.5 rounded-sm bg-gray-100 border-gray-200 dark:bg-white/5 dark:border-white/5 border" }),
                          createVNode("div", { class: "w-3.5 h-3.5 rounded-sm bg-[#6d4cff]/20 border border-[#6d4cff]/10" }),
                          createVNode("div", { class: "w-3.5 h-3.5 rounded-sm bg-[#6d4cff]/40 border border-[#6d4cff]/10" }),
                          createVNode("div", { class: "w-3.5 h-3.5 rounded-sm bg-[#6d4cff]/70 border border-[#6d4cff]/10" }),
                          createVNode("div", { class: "w-3.5 h-3.5 rounded-sm bg-[#6d4cff] border border-gray-200 dark:border-white/10" })
                        ]),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.more")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-4 justify-center w-full relative z-10" }, [
                      createVNode("div", { class: "flex flex-col gap-[6px] text-xs text-gray-500 dark:text-white/55 py-[2px] pt-[24px] text-right" }, [
                        createVNode("span", { class: "h-3 flex items-center justify-end invisible" }, "S"),
                        createVNode("span", { class: "h-3 flex items-center justify-end pr-1.5" }, "M"),
                        createVNode("span", { class: "h-3 flex items-center justify-end invisible" }, "T"),
                        createVNode("span", { class: "h-3 flex items-center justify-end pr-1.5" }, "W"),
                        createVNode("span", { class: "h-3 flex items-center justify-end invisible" }, "T"),
                        createVNode("span", { class: "h-3 flex items-center justify-end pr-1.5" }, "F"),
                        createVNode("span", { class: "h-3 flex items-center justify-end invisible" }, "S")
                      ]),
                      createVNode("div", { class: "flex-1 min-w-0 pb-2" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode("div", { class: "grid grid-cols-12 gap-2 mb-3 w-full text-[11px] text-gray-500 dark:text-white/50" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(activityMonthLabels.value, (m) => {
                              return openBlock(), createBlock("div", {
                                key: m,
                                class: "min-w-0 truncate"
                              }, toDisplayString(m), 1);
                            }), 128))
                          ]),
                          createVNode("div", {
                            class: "grid w-full gap-1 md:gap-1.5",
                            style: { gridTemplateColumns: "repeat(52, minmax(0, 1fr))" }
                          }, [
                            (openBlock(), createBlock(Fragment, null, renderList(52, (col) => {
                              return createVNode("div", {
                                key: col,
                                class: "grid min-w-0 grid-rows-7 gap-1 md:gap-1.5"
                              }, [
                                (openBlock(), createBlock(Fragment, null, renderList(7, (row) => {
                                  return createVNode("div", {
                                    key: row,
                                    class: ["aspect-square w-full rounded-[3px] transition-all cursor-pointer border", [
                                      getActivityColor(col, row),
                                      getActivityColor(col, row) !== emptyActivityClass ? "hover:ring-2 hover:ring-[#6d4cff]/30 hover:scale-125 z-20" : "hover:bg-gray-100 hover:border-gray-300 dark:hover:bg-white/10 dark:hover:border-white/10"
                                    ]]
                                  }, null, 2);
                                }), 64))
                              ]);
                            }), 64))
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-full h-px bg-gray-100 dark:bg-white/5 relative z-10" }),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10" }, [
                    createVNode("div", { class: "md:col-span-8 flex flex-col justify-between" }, [
                      createVNode("div", { class: "flex items-end gap-6 flex-wrap" }, [
                        createVNode("div", { class: "flex flex-col gap-4 flex-1 min-w-[160px]" }, [
                          createVNode("div", { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-white/60" }, [
                            createVNode("div", { class: "w-7 h-7 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:activity-bold",
                                class: "w-3.5 h-3.5 text-[#8ea3ff]"
                              })
                            ]),
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.tokenUsage")), 1)
                          ]),
                          statsLoading.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "w-24 h-10 bg-gray-100 dark:bg-white/5 animate-pulse rounded-2xl border border-gray-100 dark:border-white/5"
                          })) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "text-3xl font-semibold text-gray-900 dark:text-white tabular-nums"
                          }, toDisplayString(unref(formatTokensCount)((_m = statsData.value) == null ? void 0 : _m.totalTokens)), 1))
                        ]),
                        createVNode("div", { class: "flex flex-col gap-3 flex-1 min-w-[120px]" }, [
                          createVNode("div", { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-white/55" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-square-in-bold",
                              class: "w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400/60"
                            }),
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.input")), 1)
                          ]),
                          createVNode("div", { class: "h-11 bg-gray-50 dark:bg-black/40 rounded-xl flex items-center px-5 text-sm text-gray-800 dark:text-white/70 border border-gray-100 dark:border-white/5 group-hover:border-gray-200 dark:group-hover:border-white/10 transition-colors tabular-nums" }, [
                            statsLoading.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "w-12 h-4 bg-gray-100 dark:bg-white/5 animate-pulse rounded"
                            })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(unref(formatPoints)(((_n = statsData.value) == null ? void 0 : _n.promptTokens) || 0)), 1)
                            ], 64))
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col gap-3 flex-1 min-w-[120px]" }, [
                          createVNode("div", { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-white/55" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-square-out-bold",
                              class: "w-3.5 h-3.5 text-[#6d4cff] dark:text-[#8ea3ff]/60"
                            }),
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.output")), 1)
                          ]),
                          createVNode("div", { class: "h-11 bg-gray-50 dark:bg-black/40 rounded-xl flex items-center px-5 text-sm text-gray-800 dark:text-white/70 border border-gray-100 dark:border-white/5 group-hover:border-gray-200 dark:group-hover:border-white/10 transition-colors tabular-nums" }, [
                            statsLoading.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "w-12 h-4 bg-gray-100 dark:bg-white/5 animate-pulse rounded"
                            })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(unref(formatPoints)(((_o = statsData.value) == null ? void 0 : _o.completionTokens) || 0)), 1)
                            ], 64))
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "md:col-span-4 flex flex-col justify-between md:border-l border-gray-100 dark:border-white/5 md:pl-8" }, [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", { class: "flex items-center gap-2 text-sm text-gray-700 dark:text-white/60" }, [
                          createVNode("div", { class: "w-7 h-7 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:chat-circle-dots-bold",
                              class: "w-3.5 h-3.5 text-amber-500"
                            })
                          ]),
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.chatCount")), 1)
                        ]),
                        createVNode("div", { class: "text-3xl font-semibold text-gray-900 dark:text-white tabular-nums" }, [
                          statsLoading.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "w-24 h-10 bg-gray-100 dark:bg-white/5 animate-pulse rounded-2xl border border-gray-100 dark:border-white/5 inline-block"
                          })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(unref(formatPoints)(((_p = statsData.value) == null ? void 0 : _p.totalRequests) || 0)), 1)
                          ], 64))
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner relative overflow-hidden group" }, [
                  createVNode("div", { class: "absolute -left-16 -bottom-16 w-48 h-48 bg-[#3b82f6]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#3b82f6]/10 transition-colors duration-700" }),
                  createVNode("div", { class: "flex flex-col lg:flex-row lg:items-start justify-between mb-8 relative z-10 gap-6" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-baseline gap-4 flex-wrap" }, [
                        createVNode("div", { class: "text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white tabular-nums" }, [
                          unref(walletLoading) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "w-36 h-10 bg-gray-100 dark:bg-white/5 animate-pulse rounded-2xl border border-gray-100 dark:border-white/5 inline-block"
                          })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("span", null, toDisplayString(((_q = unref(walletData)) == null ? void 0 : _q.gatewayAvailable) === false ? "\u2014" : unref(formatPoints)((_r = unref(walletData)) == null ? void 0 : _r.points)), 1),
                            createVNode("span", { class: "ml-1.5 text-base font-normal text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1),
                            ((_s = unref(walletData)) == null ? void 0 : _s.gatewayAvailable) !== false ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "ml-2 text-sm font-mono text-gray-500 dark:text-white/45"
                            }, "\u2248 " + toDisplayString(unref(formatUsdRef)((_t = unref(walletData)) == null ? void 0 : _t.points)) + " USD", 1)) : createCommentVNode("", true)
                          ], 64))
                        ]),
                        createVNode("span", { class: "pb-2 text-sm text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.availablePoints")), 1)
                      ]),
                      createVNode("div", { class: "mt-6 flex items-center gap-3 flex-wrap" }, [
                        createVNode("div", { class: "flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-black/60 transition-all" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-down-right-bold",
                            class: "w-4 h-4 text-emerald-600 dark:text-emerald-400"
                          }),
                          createVNode("span", { class: "text-sm text-gray-700 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.earnedPoints")) + ":", 1),
                          createVNode("span", { class: "text-sm font-semibold tabular-nums text-gray-900 dark:text-white/80" }, toDisplayString(unref(formatPoints)((_u = unref(walletData)) == null ? void 0 : _u.totalEarnedPoints)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-black/60 transition-all" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-up-right-bold",
                            class: "w-4 h-4 text-[#6d4cff] dark:text-[#8ea3ff]"
                          }),
                          createVNode("span", { class: "text-sm text-gray-700 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.spentPoints")) + ":", 1),
                          createVNode("span", { class: "text-sm font-semibold tabular-nums text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(unref(formatPoints)((_v = unref(walletData)) == null ? void 0 : _v.totalSpentPoints)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3 lg:text-right min-w-0 lg:min-w-[400px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(walletPools.value, (pool) => {
                        return openBlock(), createBlock("div", {
                          key: pool.key,
                          class: ["border border-gray-100 dark:border-white/5 rounded-2xl p-3 group/pool hover:shadow-lg hover:-translate-y-0.5 transition-all", pool.bg]
                        }, [
                          createVNode("div", { class: "flex items-center lg:justify-end gap-1.5 mb-2" }, [
                            createVNode("span", { class: "text-xs text-gray-700 transition-colors group-hover/pool:text-[#6d4cff] dark:text-white/50" }, toDisplayString(pool.label), 1),
                            createVNode("span", {
                              class: ["w-1.5 h-1.5 rounded-full", pool.dot]
                            }, null, 2)
                          ]),
                          createVNode("div", {
                            class: ["text-xl font-semibold tabular-nums transition-transform group-hover/pool:scale-105", pool.color]
                          }, toDisplayString(pool.value), 3)
                        ], 2);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "w-full h-3 bg-gray-100 dark:bg-black/60 rounded-full overflow-hidden flex mb-6 border border-gray-200 dark:border-white/5 p-0.5 relative z-10" }, [
                    unref(walletLoading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-full h-full bg-gray-200 dark:bg-white/5 animate-pulse rounded-full"
                    })) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "h-full bg-[linear-gradient(90deg,#3b82f6,#6d4cff)] transition-all duration-1000 overflow-hidden relative rounded-full",
                      style: { width: consumedPct.value + "%" }
                    }, [
                      createVNode("div", { class: "absolute inset-0 wave-overlay opacity-30" })
                    ], 4))
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-100 dark:border-white/5 relative z-10" }, [
                    createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                      createVNode("span", { class: "text-sm text-gray-700 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.consumptionOrder")) + ":", 1),
                      createVNode("div", { class: "flex items-center gap-2 flex-wrap" }, [
                        createVNode("div", { class: "rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-xs text-gray-700 dark:border-white/5 dark:bg-white/5 dark:text-white/60" }, toDisplayString(_ctx.$t("hoxi.member.nav.rewards")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:caret-right-bold",
                          class: "text-gray-500 dark:text-white/55 w-3 h-3"
                        }),
                        createVNode("div", { class: "rounded-lg border border-[#6d4cff]/20 bg-[#6d4cff]/10 px-3 py-1.5 text-xs text-[#6d4cff] dark:text-[#8ea3ff]" }, " AINode Points Pool "),
                        createVNode(_component_UIcon, {
                          name: "ph:caret-right-bold",
                          class: "text-gray-500 dark:text-white/55 w-3 h-3"
                        }),
                        createVNode("div", { class: "rounded-lg border border-blue-600/20 bg-blue-600/10 px-3 py-1.5 text-xs text-blue-700 dark:text-blue-400" }, toDisplayString(_ctx.$t("hoxi.member.nav.keys")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/user/billing"),
                        class: "group flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-800 transition-all hover:-translate-y-0.5 hover:bg-gray-900 hover:text-white hover:shadow-lg active:scale-95 dark:border-white/5 dark:bg-white/5 dark:text-white/60 dark:hover:bg-[#6d4cff] dark:hover:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.viewBilling")), 1),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right-bold",
                            class: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                          })
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10" }, [
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/user/rewards"),
                    class: "block group"
                  }, {
                    default: withCtx(() => {
                      var _a2, _b2;
                      return [
                        createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner hover:bg-gray-50 dark:hover:bg-[#222226] hover:border-gray-200 dark:hover:border-white/10 hover:-translate-y-1 transition-all duration-500 h-full relative overflow-hidden" }, [
                          createVNode("div", { class: "absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-50 bg-emerald-500/5" }),
                          createVNode("div", { class: "mb-6 flex items-center justify-between gap-3 text-sm text-gray-700 dark:text-white/60" }, [
                            createVNode("div", { class: "flex items-center gap-3" }, [
                              createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:calendar-check-duotone",
                                  class: "w-5 h-5 text-emerald-600"
                                })
                              ]),
                              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.todayCheckin")), 1)
                            ]),
                            createVNode("span", { class: "text-xs font-mono text-emerald-600 dark:text-emerald-400" }, " +" + toDisplayString(unref(formatPoints)(((_a2 = unref(checkinSummary)) == null ? void 0 : _a2.todayPoints) || 5e3)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                          ]),
                          createVNode("div", { class: "text-2xl font-semibold text-gray-900 dark:text-white tabular-nums" }, toDisplayString(((_b2 = unref(checkinSummary)) == null ? void 0 : _b2.streak) || 0) + " " + toDisplayString(_ctx.$t("hoxi.member.rewards.daysStreak")), 1)
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["to"]),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/user/keys"),
                    class: "block group"
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner hover:bg-gray-50 dark:hover:bg-[#222226] hover:border-gray-200 dark:hover:border-white/10 hover:-translate-y-1 transition-all duration-500 h-full relative overflow-hidden" }, [
                          createVNode("div", { class: "absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-50 bg-amber-500/5" }),
                          createVNode("div", { class: "mb-6 flex items-center justify-between gap-3 text-sm text-gray-700 dark:text-white/60" }, [
                            createVNode("div", { class: "flex items-center gap-3" }, [
                              createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:key-duotone",
                                  class: "w-5 h-5 text-amber-600"
                                })
                              ]),
                              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.quickBindTitle")), 1)
                            ]),
                            createVNode("span", { class: "text-xs text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.manage")), 1)
                          ]),
                          createVNode("div", { class: "text-lg font-mono text-gray-900 dark:text-white truncate" }, toDisplayString((((_a2 = unref(walletData)) == null ? void 0 : _a2.gatewayBaseUrl) || "https://api.ainode.run") + "/v1"), 1)
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10" }, [
                  createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner flex flex-col relative overflow-hidden group" }, [
                    createVNode("div", { class: "absolute -right-16 -top-16 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-700" }),
                    createVNode("div", { class: "flex items-center justify-between mb-6 relative z-10" }, [
                      createVNode("div", { class: "flex items-center gap-3 text-sm text-gray-700 dark:text-white/60" }, [
                        createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:rocket-launch-duotone",
                            class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
                          })
                        ]),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.modelBreakdown")), 1)
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/user/models"),
                        class: "rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-700 transition-all hover:bg-gray-900 hover:text-white active:scale-95 dark:border-white/5 dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.member.dashboard.manage")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    statsLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-3 flex-1 relative z-10"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                        return createVNode("div", {
                          key: i,
                          class: "h-20 rounded-2xl bg-gray-50 dark:bg-white/[0.02] animate-pulse border border-gray-100 dark:border-white/5"
                        });
                      }), 64))
                    ])) : ((_x = (_w = statsData.value) == null ? void 0 : _w.modelDistribution) == null ? void 0 : _x.length) > 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-3 flex-1 relative z-10"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(statsData.value.modelDistribution.slice(0, 5), (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.model,
                          class: "flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] hover:border-gray-200 dark:hover:border-white/10 transition-all group/row hover:shadow-lg"
                        }, [
                          createVNode("div", { class: "w-11 h-11 rounded-xl bg-white dark:bg-white/[0.04] flex items-center justify-center shrink-0 border border-gray-100 dark:border-white/5 group-hover/row:bg-[#6d4cff] group-hover/row:text-white transition-all" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:cpu-fill",
                              class: "w-5 h-5"
                            })
                          ]),
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode("div", { class: "text-gray-900 dark:text-white truncate flex justify-between items-baseline" }, [
                              createVNode("span", { class: "text-sm font-mono font-medium" }, toDisplayString(item.model), 1),
                              createVNode("span", { class: "text-xs text-gray-500 dark:text-white/55" }, toDisplayString(item.requests) + " reqs", 1)
                            ]),
                            createVNode("div", { class: "w-full h-1 bg-gray-100 dark:bg-black/40 rounded-full mt-3 overflow-hidden border border-gray-200 dark:border-white/5" }, [
                              createVNode("div", {
                                class: "h-full rounded-full bg-[linear-gradient(90deg,#6d4cff,#8ea3ff)] transition-all duration-1000",
                                style: { "width": "100%" }
                              })
                            ])
                          ]),
                          createVNode("div", { class: "text-right shrink-0 ml-2" }, [
                            createVNode("div", { class: "rounded-full border border-[#6d4cff]/20 bg-[#6d4cff]/10 px-2.5 py-1 text-xs font-mono text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(unref(formatPoints)(item.pointsCost)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                          ])
                        ]);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex flex-col items-center justify-center py-12 text-gray-200 dark:text-white/10 flex-1 relative z-10"
                    }, [
                      createVNode("div", { class: "w-20 h-20 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mb-4" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:ghost-duotone",
                          class: "w-10 h-10"
                        })
                      ]),
                      createVNode("p", { class: "text-sm text-center text-gray-600 dark:text-white/50 max-w-xs" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.noUsageYet")), 1)
                    ]))
                  ]),
                  createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner flex flex-col relative overflow-hidden group" }, [
                    createVNode("div", { class: "absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-700" }),
                    createVNode("div", { class: "flex items-center justify-between mb-6 relative z-10" }, [
                      createVNode("div", { class: "flex items-center gap-3 text-sm text-gray-700 dark:text-white/60" }, [
                        createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:receipt-duotone",
                            class: "w-5 h-5 text-emerald-600 dark:text-emerald-400"
                          })
                        ]),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.dashboard.recentTransactions")), 1)
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/user/billing"),
                        class: "rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-700 transition-all hover:bg-gray-900 hover:text-white active:scale-95 dark:border-white/5 dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.member.dashboard.viewAll")), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    recentLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-2 flex-1 relative z-10"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(4, (i) => {
                        return createVNode("div", {
                          key: i,
                          class: "h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] animate-pulse border border-gray-100 dark:border-white/5"
                        });
                      }), 64))
                    ])) : recentItems.value.length > 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-2 flex-1 relative z-10"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(recentItems.value.slice(0, 5), (row) => {
                        return openBlock(), createBlock("div", {
                          key: row.id,
                          class: "flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] hover:border-gray-200 dark:hover:border-white/10 transition-all"
                        }, [
                          createVNode("div", { class: "w-10 h-10 rounded-xl bg-white dark:bg-white/[0.04] flex items-center justify-center shrink-0 border border-gray-100 dark:border-white/5" }, [
                            createVNode(_component_UIcon, {
                              name: row.isCredit ? "ph:check-circle-duotone" : "ph:lightning-duotone",
                              class: [row.isCredit ? "text-emerald-600 dark:text-emerald-400" : "text-[#6d4cff] dark:text-[#8ea3ff]", "w-5 h-5"]
                            }, null, 8, ["name", "class"])
                          ]),
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode("div", { class: "text-gray-900 dark:text-white/80 text-sm truncate flex justify-between items-center mb-1" }, [
                              createVNode("span", { class: "truncate font-medium" }, toDisplayString(row.title), 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-1.5 text-xs text-gray-500 dark:text-white/50 font-mono" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:calendar-blank-bold",
                                class: "w-3 h-3 text-[#6d4cff]/40 dark:text-[#8ea3ff]/40"
                              }),
                              createVNode("span", null, toDisplayString(unref(formatShortTime)(row.time)), 1)
                            ])
                          ]),
                          createVNode("div", { class: "text-right shrink-0 ml-2" }, [
                            createVNode("div", {
                              class: ["text-sm font-mono font-semibold tabular-nums", row.isCredit ? "text-emerald-600 dark:text-emerald-400" : "text-gray-900 dark:text-white"]
                            }, toDisplayString(row.isCredit ? "+" : "-") + toDisplayString(unref(formatPoints)(row.points, 4)), 3)
                          ])
                        ]);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex flex-col items-center justify-center py-12 text-gray-200 dark:text-white/10 flex-1 relative z-10"
                    }, [
                      createVNode("div", { class: "w-20 h-20 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mb-4" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:receipt-duotone",
                          class: "w-10 h-10"
                        })
                      ]),
                      createVNode("p", { class: "text-sm text-gray-600 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.noRecentTransactions")), 1)
                    ]))
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/user/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4fe02a8"]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-BKannGgl.mjs.map
