import { u as useI18n, bt as useSeoMeta, _ as _sfc_main$W } from './server.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$1, f as formatPoints } from './layout-DypCocu9.mjs';
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
  __name: "rewards",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => `${t("hoxi.member.rewards.title")} \xB7 ${t("hoxi.site.name")}`
    });
    const now = /* @__PURE__ */ new Date();
    const calYear = ref(now.getFullYear());
    const calMonth = ref(now.getMonth() + 1);
    const checkinData = ref(null);
    const monthDates = ref(/* @__PURE__ */ new Set());
    const submitting = ref(false);
    const actionError = ref("");
    function formatRewardRange(range, fallback) {
      const min = Number((range == null ? void 0 : range.min) || 0);
      const max = Number((range == null ? void 0 : range.max) || 0);
      if (min > 0 && max > min) {
        return `${formatPoints(min)}~${formatPoints(max)}`;
      }
      return formatPoints(max > 0 ? max : fallback);
    }
    const calendarCells = computed(() => {
      const year = calYear.value;
      const month = calMonth.value;
      const firstDay = new Date(year, month - 1, 1).getDay();
      const daysInMonth = new Date(year, month, 0).getDate();
      const cells = [];
      for (let i = 0; i < firstDay; i++) {
        cells.push({ day: null, dateStr: "", checked: false });
      }
      for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        cells.push({
          day: d,
          dateStr,
          checked: monthDates.value.has(dateStr)
        });
      }
      return cells;
    });
    async function loadCheckin() {
      var _a;
      try {
        const res = await $fetch("/api/hoxi/member/checkin", {
          query: { year: calYear.value, month: calMonth.value }
        });
        checkinData.value = res;
        const dates = Array.isArray(res == null ? void 0 : res.monthDates) ? res.monthDates : [];
        monthDates.value = new Set(dates);
      } catch (error) {
        actionError.value = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || "";
      }
    }
    async function shiftMonth(delta) {
      let y = calYear.value;
      let m = calMonth.value + delta;
      if (m < 1) {
        m = 12;
        y -= 1;
      } else if (m > 12) {
        m = 1;
        y += 1;
      }
      calYear.value = y;
      calMonth.value = m;
      await loadCheckin();
    }
    async function handleCheckin() {
      var _a, _b;
      if (submitting.value || ((_a = checkinData.value) == null ? void 0 : _a.checkedInToday)) return;
      submitting.value = true;
      actionError.value = "";
      try {
        const res = await $fetch("/api/hoxi/member/checkin", { method: "POST" });
        checkinData.value = res;
        if (res == null ? void 0 : res.date) {
          monthDates.value = /* @__PURE__ */ new Set([...monthDates.value, res.date]);
        }
      } catch (error) {
        actionError.value = ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
      } finally {
        submitting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.member.rewards.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.member.rewards.title")), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-700 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.subtitle"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-700 dark:text-gray-400" }, toDisplayString(_ctx.$t("hoxi.member.rewards.subtitle")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha;
          if (_push2) {
            _push2(`<div class="space-y-6 relative"${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner relative overflow-hidden group"${_scopeId}><div class="absolute -right-24 -top-24 w-64 h-64 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6d4cff]/10 transition-colors duration-1000"${_scopeId}></div><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10"${_scopeId}><div${_scopeId}><div class="inline-flex items-center gap-2 rounded-xl border border-[#6d4cff]/20 bg-[#6d4cff]/10 px-3 py-1 text-xs font-mono text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:calendar-check-duotone",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(((_a = checkinData.value) == null ? void 0 : _a.date) || "")}</span></div><div class="mt-4 flex items-baseline gap-3 flex-wrap"${_scopeId}><span class="text-4xl lg:text-5xl font-bold font-mono tabular-nums text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(((_b = checkinData.value) == null ? void 0 : _b.streak) || 0)}</span><span class="text-base text-gray-700 dark:text-white/60"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.daysStreak"))}</span><span class="text-xs font-mono text-gray-500 dark:text-white/45"${_scopeId}> (${ssrInterpolate(_ctx.$t("hoxi.member.rewards.maxStreak"))}: ${ssrInterpolate(((_c = checkinData.value) == null ? void 0 : _c.maxStreak) || 0)}) </span></div><div class="mt-5 flex flex-wrap items-center gap-3"${_scopeId}><div class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:gift-duotone",
              class: "w-4 h-4 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xs text-gray-600 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.todayReward"))}:</span><span class="text-xs font-mono font-semibold text-gray-900 dark:text-white"${_scopeId}> +${ssrInterpolate(formatRewardRange((_d = checkinData.value) == null ? void 0 : _d.todayPointsRange, ((_e = checkinData.value) == null ? void 0 : _e.todayPoints) || 5e3))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div><div class="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle-duotone",
              class: "w-4 h-4 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xs text-gray-600 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.tomorrowReward"))}:</span><span class="text-xs font-mono font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}> +${ssrInterpolate(formatRewardRange((_f = checkinData.value) == null ? void 0 : _f.nextPointsRange, ((_g = checkinData.value) == null ? void 0 : _g.nextPoints) || 1e5))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div></div></div><div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"${_scopeId}><div class="border border-gray-100 dark:border-white/5 rounded-2xl p-4 bg-gray-50/70 dark:bg-black/30 sm:text-right min-w-[160px]"${_scopeId}><div class="text-xs text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.dashboard.availablePoints"))}</div><div class="mt-1 text-2xl font-bold font-mono tabular-nums text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(((_h = checkinData.value) == null ? void 0 : _h.gatewayAvailable) === false ? "\u2014" : unref(formatPoints)((_k = (_i = checkinData.value) == null ? void 0 : _i.walletPoints) != null ? _k : (_j = checkinData.value) == null ? void 0 : _j.balance))}</div></div><button type="button" class="${ssrRenderClass([((_l = checkinData.value) == null ? void 0 : _l.checkedInToday) ? "border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-white/50" : "bg-[#6d4cff] hover:bg-[#5b3ee0] text-white shadow-[#6d4cff]/25 hover:-translate-y-0.5", "px-6 py-4 rounded-2xl text-sm font-semibold transition-all shadow-md active:scale-95 disabled:opacity-60"])}"${ssrIncludeBooleanAttr(submitting.value || Boolean((_m = checkinData.value) == null ? void 0 : _m.checkedInToday)) ? " disabled" : ""}${_scopeId}>`);
            if (submitting.value) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.loading"))}</span>`);
            } else if ((_n = checkinData.value) == null ? void 0 : _n.checkedInToday) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.checkedIn"))}</span>`);
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.checkInNow"))}</span>`);
            }
            _push2(`</button></div></div>`);
            if (((_o = checkinData.value) == null ? void 0 : _o.checkedInToday) && ((_p = checkinData.value) == null ? void 0 : _p.rewardStatus)) {
              _push2(`<div class="mt-6 pt-5 border-t border-gray-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs relative z-10"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.deliveryStatus"))}:</span>`);
              if (checkinData.value.rewardStatus === "succeeded") {
                _push2(`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("hoxi.member.rewards.statusSucceeded"))}</span>`);
              } else if (checkinData.value.rewardStatus === "blocked") {
                _push2(`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-medium"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-red-500"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("hoxi.member.rewards.statusBlocked"))}</span>`);
              } else {
                _push2(`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-medium"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("hoxi.member.rewards.statusPending"))}</span>`);
              }
              _push2(`</div>`);
              if (checkinData.value.rewardOperationId) {
                _push2(`<span class="font-mono text-[11px] text-gray-400 dark:text-white/40"${_scopeId}> ID: ${ssrInterpolate(checkinData.value.rewardOperationId)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (actionError.value) {
              _push2(`<p class="mt-4 text-xs text-red-600 dark:text-red-400 relative z-10"${_scopeId}>${ssrInterpolate(actionError.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"${_scopeId}><div class="lg:col-span-7 bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner relative overflow-hidden"${_scopeId}><div class="flex items-center justify-between pb-5 mb-5 border-b border-gray-100 dark:border-white/5"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:calendar-blank-duotone",
              class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-base font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.calendarTitle"))}</h2></div><div class="flex items-center gap-2"${_scopeId}><button type="button" class="p-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 transition"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-left-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`</button><span class="px-2 text-xs font-mono font-semibold tabular-nums text-gray-800 dark:text-white/80"${_scopeId}>${ssrInterpolate(calYear.value)}-${ssrInterpolate(String(calMonth.value).padStart(2, "0"))}</span><button type="button" class="p-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 transition"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:caret-right-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div><div class="grid grid-cols-7 gap-2 text-center text-[11px] font-medium text-gray-400 dark:text-white/40 mb-3"${_scopeId}><!--[-->`);
            ssrRenderList(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (d) => {
              _push2(`<span${_scopeId}>${ssrInterpolate(d)}</span>`);
            });
            _push2(`<!--]--></div><div class="grid grid-cols-7 gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(calendarCells.value, (cell, idx) => {
              _push2(`<div class="${ssrRenderClass([!cell.day ? "border-transparent" : cell.checked ? "border-[#6d4cff]/30 bg-[#6d4cff]/15 text-[#6d4cff] dark:text-[#8ea3ff] font-bold shadow-xs" : "border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-black/20 text-gray-600 dark:text-white/55", "h-10 rounded-xl flex items-center justify-center text-xs font-mono tabular-nums border transition-all"])}"${_scopeId}>${ssrInterpolate(cell.day || "")}</div>`);
            });
            _push2(`<!--]--></div></div><div class="lg:col-span-5 bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner flex flex-col"${_scopeId}><div class="flex items-center gap-3 pb-5 mb-5 border-b border-gray-100 dark:border-white/5"${_scopeId}><div class="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:medal-duotone",
              class: "w-5 h-5 text-amber-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-base font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.milestonesTitle"))}</h2></div><div class="space-y-3 flex-1"${_scopeId}><!--[-->`);
            ssrRenderList(((_q = checkinData.value) == null ? void 0 : _q.milestones) || [], (m) => {
              var _a2, _b2;
              _push2(`<div class="${ssrRenderClass([(((_a2 = checkinData.value) == null ? void 0 : _a2.streak) || 0) >= m.day ? "border-[#6d4cff]/30 bg-[#6d4cff]/10" : "border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/30", "flex items-center justify-between p-3.5 rounded-2xl border transition-all"])}"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: (((_b2 = checkinData.value) == null ? void 0 : _b2.streak) || 0) >= m.day ? "ph:check-circle-fill" : "ph:medal-duotone",
                class: "w-4 h-4 text-[#6d4cff] dark:text-[#8ea3ff]"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-xs font-medium text-gray-800 dark:text-white/80"${_scopeId}>${ssrInterpolate(m.day)} ${ssrInterpolate(_ctx.$t("hoxi.member.rewards.daysStreak"))}</span></div><span class="text-xs font-mono tabular-nums font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}> +${ssrInterpolate(m.points)} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</span></div>`);
            });
            _push2(`<!--]--></div><p class="mt-5 pt-4 border-t border-gray-100 dark:border-white/5 text-xs text-gray-500 dark:text-white/45 leading-relaxed"${_scopeId}>`);
            if (((_s = (_r = checkinData.value) == null ? void 0 : _r.rule) == null ? void 0 : _s.randomEnabled) !== false) {
              _push2(`<!--[-->${ssrInterpolate(_ctx.$t("hoxi.member.rewards.ruleRandomNote", {
                min: unref(formatPoints)(((_u = (_t = checkinData.value) == null ? void 0 : _t.rule) == null ? void 0 : _u.randomMinPoints) || 5e3),
                max: unref(formatPoints)(((_w = (_v = checkinData.value) == null ? void 0 : _v.rule) == null ? void 0 : _w.randomMaxPoints) || 1e5)
              }))}<!--]-->`);
            } else {
              _push2(`<!--[-->${ssrInterpolate(_ctx.$t("hoxi.member.rewards.ruleNote", {
                base: unref(formatPoints)(((_y = (_x = checkinData.value) == null ? void 0 : _x.rule) == null ? void 0 : _y.basePoints) || 5e3),
                step: unref(formatPoints)(((_A = (_z = checkinData.value) == null ? void 0 : _z.rule) == null ? void 0 : _A.streakStep) || 1e3),
                max: unref(formatPoints)(((_C = (_B = checkinData.value) == null ? void 0 : _B.rule) == null ? void 0 : _C.maxPoints) || 1e5)
              }))}<!--]-->`);
            }
            _push2(`</p></div></div><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner"${_scopeId}><div class="px-6 py-5 border-b border-gray-100 dark:border-white/5 bg-gray-50/80 dark:bg-black/20 flex items-center gap-3"${_scopeId}><div class="w-9 h-9 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:clock-counter-clockwise-duotone",
              class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`</div><h2 class="text-base font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.historyTitle"))}</h2></div>`);
            if (!((_E = (_D = checkinData.value) == null ? void 0 : _D.history) == null ? void 0 : _E.length)) {
              _push2(`<div class="py-16 text-center text-sm text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.noHistory"))}</div>`);
            } else {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="w-full text-left border-collapse text-sm"${_scopeId}><thead${_scopeId}><tr class="border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50"${_scopeId}><th class="py-4 px-6 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.colDate"))}</th><th class="py-4 px-6 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.daysStreak"))}</th><th class="py-4 px-6 font-medium text-right"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.colPoints"))}</th><th class="py-4 px-6 font-medium text-right"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.deliveryStatus"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-white/5"${_scopeId}><!--[-->`);
              ssrRenderList(checkinData.value.history, (item) => {
                _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"${_scopeId}><td class="py-4 px-6 font-mono text-xs text-gray-800 dark:text-white/80"${_scopeId}>${ssrInterpolate(item.date)}</td><td class="py-4 px-6 font-mono text-xs tabular-nums text-gray-600 dark:text-white/60"${_scopeId}>${ssrInterpolate(item.streak)}</td><td class="py-4 px-6 text-right font-mono tabular-nums font-semibold text-emerald-600 dark:text-emerald-400"${_scopeId}> +${ssrInterpolate(item.points)} `);
                if (item.bonus > 0) {
                  _push2(`<span class="text-[11px] text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>(+${ssrInterpolate(item.bonus)})</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</td><td class="py-4 px-6 text-right"${_scopeId}><span class="${ssrRenderClass([item.status === "succeeded" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20", "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs"])}"${_scopeId}>${ssrInterpolate(item.status === "succeeded" ? _ctx.$t("hoxi.member.rewards.statusSucceeded") : _ctx.$t("hoxi.member.rewards.statusPending"))}</span></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6 relative" }, [
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner relative overflow-hidden group" }, [
                  createVNode("div", { class: "absolute -right-24 -top-24 w-64 h-64 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6d4cff]/10 transition-colors duration-1000" }),
                  createVNode("div", { class: "flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "inline-flex items-center gap-2 rounded-xl border border-[#6d4cff]/20 bg-[#6d4cff]/10 px-3 py-1 text-xs font-mono text-[#6d4cff] dark:text-[#8ea3ff]" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:calendar-check-duotone",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(((_F = checkinData.value) == null ? void 0 : _F.date) || ""), 1)
                      ]),
                      createVNode("div", { class: "mt-4 flex items-baseline gap-3 flex-wrap" }, [
                        createVNode("span", { class: "text-4xl lg:text-5xl font-bold font-mono tabular-nums text-gray-900 dark:text-white" }, toDisplayString(((_G = checkinData.value) == null ? void 0 : _G.streak) || 0), 1),
                        createVNode("span", { class: "text-base text-gray-700 dark:text-white/60" }, toDisplayString(_ctx.$t("hoxi.member.rewards.daysStreak")), 1),
                        createVNode("span", { class: "text-xs font-mono text-gray-500 dark:text-white/45" }, " (" + toDisplayString(_ctx.$t("hoxi.member.rewards.maxStreak")) + ": " + toDisplayString(((_H = checkinData.value) == null ? void 0 : _H.maxStreak) || 0) + ") ", 1)
                      ]),
                      createVNode("div", { class: "mt-5 flex flex-wrap items-center gap-3" }, [
                        createVNode("div", { class: "flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:gift-duotone",
                            class: "w-4 h-4 text-emerald-500"
                          }),
                          createVNode("span", { class: "text-xs text-gray-600 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.rewards.todayReward")) + ":", 1),
                          createVNode("span", { class: "text-xs font-mono font-semibold text-gray-900 dark:text-white" }, " +" + toDisplayString(formatRewardRange((_I = checkinData.value) == null ? void 0 : _I.todayPointsRange, ((_J = checkinData.value) == null ? void 0 : _J.todayPoints) || 5e3)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                        ]),
                        createVNode("div", { class: "flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:sparkle-duotone",
                            class: "w-4 h-4 text-[#6d4cff] dark:text-[#8ea3ff]"
                          }),
                          createVNode("span", { class: "text-xs text-gray-600 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.rewards.tomorrowReward")) + ":", 1),
                          createVNode("span", { class: "text-xs font-mono font-semibold text-[#6d4cff] dark:text-[#8ea3ff]" }, " +" + toDisplayString(formatRewardRange((_K = checkinData.value) == null ? void 0 : _K.nextPointsRange, ((_L = checkinData.value) == null ? void 0 : _L.nextPoints) || 1e5)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4" }, [
                      createVNode("div", { class: "border border-gray-100 dark:border-white/5 rounded-2xl p-4 bg-gray-50/70 dark:bg-black/30 sm:text-right min-w-[160px]" }, [
                        createVNode("div", { class: "text-xs text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.dashboard.availablePoints")), 1),
                        createVNode("div", { class: "mt-1 text-2xl font-bold font-mono tabular-nums text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(((_M = checkinData.value) == null ? void 0 : _M.gatewayAvailable) === false ? "\u2014" : unref(formatPoints)((_P = (_N = checkinData.value) == null ? void 0 : _N.walletPoints) != null ? _P : (_O = checkinData.value) == null ? void 0 : _O.balance)), 1)
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: ["px-6 py-4 rounded-2xl text-sm font-semibold transition-all shadow-md active:scale-95 disabled:opacity-60", ((_Q = checkinData.value) == null ? void 0 : _Q.checkedInToday) ? "border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-white/50" : "bg-[#6d4cff] hover:bg-[#5b3ee0] text-white shadow-[#6d4cff]/25 hover:-translate-y-0.5"],
                        disabled: submitting.value || Boolean((_R = checkinData.value) == null ? void 0 : _R.checkedInToday),
                        onClick: handleCheckin
                      }, [
                        submitting.value ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.$t("hoxi.member.common.loading")), 1)) : ((_S = checkinData.value) == null ? void 0 : _S.checkedInToday) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t("hoxi.member.rewards.checkedIn")), 1)) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(_ctx.$t("hoxi.member.rewards.checkInNow")), 1))
                      ], 10, ["disabled"])
                    ])
                  ]),
                  ((_T = checkinData.value) == null ? void 0 : _T.checkedInToday) && ((_U = checkinData.value) == null ? void 0 : _U.rewardStatus) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-6 pt-5 border-t border-gray-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs relative z-10"
                  }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.rewards.deliveryStatus")) + ":", 1),
                      checkinData.value.rewardStatus === "succeeded" ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium"
                      }, [
                        createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-500" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.member.rewards.statusSucceeded")), 1)
                      ])) : checkinData.value.rewardStatus === "blocked" ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-medium"
                      }, [
                        createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-red-500" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.member.rewards.statusBlocked")), 1)
                      ])) : (openBlock(), createBlock("span", {
                        key: 2,
                        class: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-medium"
                      }, [
                        createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.member.rewards.statusPending")), 1)
                      ]))
                    ]),
                    checkinData.value.rewardOperationId ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "font-mono text-[11px] text-gray-400 dark:text-white/40"
                    }, " ID: " + toDisplayString(checkinData.value.rewardOperationId), 1)) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  actionError.value ? (openBlock(), createBlock("p", {
                    key: 1,
                    class: "mt-4 text-xs text-red-600 dark:text-red-400 relative z-10"
                  }, toDisplayString(actionError.value), 1)) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-12 gap-6" }, [
                  createVNode("div", { class: "lg:col-span-7 bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner relative overflow-hidden" }, [
                    createVNode("div", { class: "flex items-center justify-between pb-5 mb-5 border-b border-gray-100 dark:border-white/5" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:calendar-blank-duotone",
                            class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
                          })
                        ]),
                        createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.rewards.calendarTitle")), 1)
                      ]),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("button", {
                          type: "button",
                          class: "p-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 transition",
                          onClick: ($event) => shiftMonth(-1)
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:caret-left-bold",
                            class: "w-3.5 h-3.5"
                          })
                        ], 8, ["onClick"]),
                        createVNode("span", { class: "px-2 text-xs font-mono font-semibold tabular-nums text-gray-800 dark:text-white/80" }, toDisplayString(calYear.value) + "-" + toDisplayString(String(calMonth.value).padStart(2, "0")), 1),
                        createVNode("button", {
                          type: "button",
                          class: "p-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 transition",
                          onClick: ($event) => shiftMonth(1)
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:caret-right-bold",
                            class: "w-3.5 h-3.5"
                          })
                        ], 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-7 gap-2 text-center text-[11px] font-medium text-gray-400 dark:text-white/40 mb-3" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (d) => {
                        return createVNode("span", { key: d }, toDisplayString(d), 1);
                      }), 64))
                    ]),
                    createVNode("div", { class: "grid grid-cols-7 gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(calendarCells.value, (cell, idx) => {
                        return openBlock(), createBlock("div", {
                          key: idx,
                          class: ["h-10 rounded-xl flex items-center justify-center text-xs font-mono tabular-nums border transition-all", !cell.day ? "border-transparent" : cell.checked ? "border-[#6d4cff]/30 bg-[#6d4cff]/15 text-[#6d4cff] dark:text-[#8ea3ff] font-bold shadow-xs" : "border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-black/20 text-gray-600 dark:text-white/55"]
                        }, toDisplayString(cell.day || ""), 3);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "lg:col-span-5 bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner flex flex-col" }, [
                    createVNode("div", { class: "flex items-center gap-3 pb-5 mb-5 border-b border-gray-100 dark:border-white/5" }, [
                      createVNode("div", { class: "w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:medal-duotone",
                          class: "w-5 h-5 text-amber-500"
                        })
                      ]),
                      createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.rewards.milestonesTitle")), 1)
                    ]),
                    createVNode("div", { class: "space-y-3 flex-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(((_V = checkinData.value) == null ? void 0 : _V.milestones) || [], (m) => {
                        var _a2, _b2;
                        return openBlock(), createBlock("div", {
                          key: m.day,
                          class: ["flex items-center justify-between p-3.5 rounded-2xl border transition-all", (((_a2 = checkinData.value) == null ? void 0 : _a2.streak) || 0) >= m.day ? "border-[#6d4cff]/30 bg-[#6d4cff]/10" : "border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/30"]
                        }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode(_component_UIcon, {
                              name: (((_b2 = checkinData.value) == null ? void 0 : _b2.streak) || 0) >= m.day ? "ph:check-circle-fill" : "ph:medal-duotone",
                              class: "w-4 h-4 text-[#6d4cff] dark:text-[#8ea3ff]"
                            }, null, 8, ["name"]),
                            createVNode("span", { class: "text-xs font-medium text-gray-800 dark:text-white/80" }, toDisplayString(m.day) + " " + toDisplayString(_ctx.$t("hoxi.member.rewards.daysStreak")), 1)
                          ]),
                          createVNode("span", { class: "text-xs font-mono tabular-nums font-semibold text-[#6d4cff] dark:text-[#8ea3ff]" }, " +" + toDisplayString(m.points) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1)
                        ], 2);
                      }), 128))
                    ]),
                    createVNode("p", { class: "mt-5 pt-4 border-t border-gray-100 dark:border-white/5 text-xs text-gray-500 dark:text-white/45 leading-relaxed" }, [
                      ((_X = (_W = checkinData.value) == null ? void 0 : _W.rule) == null ? void 0 : _X.randomEnabled) !== false ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.member.rewards.ruleRandomNote", {
                          min: unref(formatPoints)(((_Z = (_Y = checkinData.value) == null ? void 0 : _Y.rule) == null ? void 0 : _Z.randomMinPoints) || 5e3),
                          max: unref(formatPoints)(((_$ = (__ = checkinData.value) == null ? void 0 : __.rule) == null ? void 0 : _$.randomMaxPoints) || 1e5)
                        })), 1)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.member.rewards.ruleNote", {
                          base: unref(formatPoints)(((_ba = (_aa = checkinData.value) == null ? void 0 : _aa.rule) == null ? void 0 : _ba.basePoints) || 5e3),
                          step: unref(formatPoints)(((_da = (_ca = checkinData.value) == null ? void 0 : _ca.rule) == null ? void 0 : _da.streakStep) || 1e3),
                          max: unref(formatPoints)(((_fa = (_ea = checkinData.value) == null ? void 0 : _ea.rule) == null ? void 0 : _fa.maxPoints) || 1e5)
                        })), 1)
                      ], 64))
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner" }, [
                  createVNode("div", { class: "px-6 py-5 border-b border-gray-100 dark:border-white/5 bg-gray-50/80 dark:bg-black/20 flex items-center gap-3" }, [
                    createVNode("div", { class: "w-9 h-9 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center border border-gray-100 dark:border-white/5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:clock-counter-clockwise-duotone",
                        class: "w-5 h-5 text-[#6d4cff] dark:text-[#8ea3ff]"
                      })
                    ]),
                    createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.rewards.historyTitle")), 1)
                  ]),
                  !((_ha = (_ga = checkinData.value) == null ? void 0 : _ga.history) == null ? void 0 : _ha.length) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "py-16 text-center text-sm text-gray-500 dark:text-white/50"
                  }, toDisplayString(_ctx.$t("hoxi.member.rewards.noHistory")), 1)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "overflow-x-auto"
                  }, [
                    createVNode("table", { class: "w-full text-left border-collapse text-sm" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50" }, [
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.rewards.colDate")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.rewards.daysStreak")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.rewards.colPoints")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.rewards.deliveryStatus")), 1)
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-white/5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(checkinData.value.history, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.date,
                            class: "hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
                          }, [
                            createVNode("td", { class: "py-4 px-6 font-mono text-xs text-gray-800 dark:text-white/80" }, toDisplayString(item.date), 1),
                            createVNode("td", { class: "py-4 px-6 font-mono text-xs tabular-nums text-gray-600 dark:text-white/60" }, toDisplayString(item.streak), 1),
                            createVNode("td", { class: "py-4 px-6 text-right font-mono tabular-nums font-semibold text-emerald-600 dark:text-emerald-400" }, [
                              createTextVNode(" +" + toDisplayString(item.points) + " ", 1),
                              item.bonus > 0 ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-[11px] text-[#6d4cff] dark:text-[#8ea3ff]"
                              }, "(+" + toDisplayString(item.bonus) + ")", 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("td", { class: "py-4 px-6 text-right" }, [
                              createVNode("span", {
                                class: ["inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs", item.status === "succeeded" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"]
                              }, toDisplayString(item.status === "succeeded" ? _ctx.$t("hoxi.member.rewards.statusSucceeded") : _ctx.$t("hoxi.member.rewards.statusPending")), 3)
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/user/rewards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rewards-DffUQQ-x.mjs.map
