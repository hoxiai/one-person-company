import { H as useRoute, D as useLocaleRouter, bh as useUserSession, u as useI18n, aw as _sfc_main$W, O as __nuxt_component_3$3, j as _sfc_main$Y } from './server.mjs';
import { defineComponent, inject, reactive, provide, useSlots, ref, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
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

function formatPoints(value, maxDecimals = 2) {
  const num = Number(value || 0);
  if (!Number.isFinite(num)) return "0";
  if (Number.isInteger(num)) return num.toLocaleString();
  return num.toLocaleString(void 0, {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDecimals
  });
}
function formatUsdRef(pointsOrUsd, isUsd = false) {
  const raw = Number(pointsOrUsd || 0);
  if (!Number.isFinite(raw)) return "$0.00";
  const usd = isUsd ? raw : raw / 1e4;
  if (usd > 0 && usd < 0.01) {
    return `$${usd.toFixed(4)}`;
  }
  return `$${usd.toFixed(2)}`;
}
function formatTokensCount(tokens) {
  const num = Number(tokens || 0);
  if (!Number.isFinite(num) || num <= 0) return "0";
  if (num >= 1e6) return `${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
  return num.toLocaleString();
}
function formatShortTime(iso) {
  if (!iso) return "\u2014";
  const d = new Date(String(iso));
  if (Number.isNaN(d.getTime())) return String(iso);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
function useHoxiMember() {
  const walletLoading = ref(false);
  const walletError = ref("");
  const memberInfo = ref(null);
  const walletData = ref(null);
  const checkinSummary = ref(null);
  async function loadWalletOverview() {
    var _a;
    walletLoading.value = true;
    walletError.value = "";
    try {
      const res = await $fetch("/api/hoxi/member/wallet");
      memberInfo.value = (res == null ? void 0 : res.member) || null;
      walletData.value = (res == null ? void 0 : res.wallet) || null;
      checkinSummary.value = (res == null ? void 0 : res.checkin) || null;
      return res;
    } catch (error) {
      walletError.value = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || "Failed to load wallet";
      return null;
    } finally {
      walletLoading.value = false;
    }
  }
  return {
    walletLoading,
    walletError,
    memberInfo,
    walletData,
    checkinSummary,
    loadWalletOverview,
    formatPoints,
    formatUsdRef,
    formatTokensCount,
    formatShortTime
  };
}
const persistentDirectoryLayout = true;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  __ssrInlineRender: true,
  setup(__props) {
    const userLayoutKey = /* @__PURE__ */ Symbol.for("hoxi-user-layout");
    const parentLayout = inject(userLayoutKey, null);
    const registeredSlots = parentLayout || reactive({
      owner: null,
      title: null,
      subtitle: null,
      headerRight: null
    });
    if (!parentLayout) {
      provide(userLayoutKey, registeredSlots);
    } else {
      const slots = useSlots();
      const owner = /* @__PURE__ */ Symbol("hoxi-user-page");
      registeredSlots.owner = owner;
      registeredSlots.title = slots.title ? (() => {
        var _a;
        return (_a = slots.title) == null ? void 0 : _a.call(slots);
      }) : null;
      registeredSlots.subtitle = slots.subtitle ? (() => {
        var _a;
        return (_a = slots.subtitle) == null ? void 0 : _a.call(slots);
      }) : null;
      registeredSlots.headerRight = slots["header-right"] ? (() => {
        var _a;
        return (_a = slots["header-right"]) == null ? void 0 : _a.call(slots);
      }) : null;
    }
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    const { user } = useUserSession();
    const { t } = useI18n();
    const mobileNavOpen = ref(false);
    const sidebarCheckin = ref(null);
    const sidebarPoints = ref(0);
    const sidebarCheckingIn = ref(false);
    const userLabel = computed(
      () => {
        var _a, _b, _c;
        return ((_a = user.value) == null ? void 0 : _a.nickName) || ((_b = user.value) == null ? void 0 : _b.nickname) || ((_c = user.value) == null ? void 0 : _c.email) || t("hoxi.member.shell.guest");
      }
    );
    const userEmail = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.email) || "";
    });
    const userAvatar = computed(
      () => {
        var _a;
        return ((_a = user.value) == null ? void 0 : _a.avatarUrl) || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userEmail.value || userLabel.value || "hoxi")}`;
      }
    );
    const navItems = computed(() => [
      { key: "dashboard", label: t("hoxi.member.nav.dashboard"), icon: "ph:house-duotone", to: "/user/dashboard" },
      { key: "rewards", label: t("hoxi.member.nav.rewards"), icon: "ph:calendar-check-duotone", to: "/user/rewards" },
      { key: "models", label: t("hoxi.member.nav.models"), icon: "ph:cpu-duotone", to: "/user/models" },
      { key: "keys", label: t("hoxi.member.nav.keys"), icon: "ph:key-duotone", to: "/user/keys" },
      { key: "billing", label: t("hoxi.member.nav.billing"), icon: "ph:wallet-duotone", to: "/user/billing" },
      { key: "tickets", label: t("hoxi.member.nav.tickets"), icon: "ph:chats-teardrop-duotone", to: "/user/tickets" },
      { key: "account", label: t("hoxi.member.nav.account"), icon: "ph:user-circle-gear-duotone", to: "/user/account" }
    ]);
    const isActive = (path) => {
      const targetPath = localePath(path);
      return route.path === targetPath || route.path.startsWith(`${targetPath}/`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_UAvatar = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$Y;
      if (unref(parentLayout)) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-[#020203] text-gray-900 dark:text-white" }, _attrs))}><div class="flex min-h-screen flex-col"><aside class="fixed bottom-0 left-0 z-30 hidden w-64 flex-col border-r border-gray-100 dark:border-white/5 bg-white transition-[top] duration-300 ease-out motion-reduce:transition-none dark:bg-[#020203] xl:flex" style="${ssrRenderStyle({ top: "var(--hoxi-header-offset, 64px)" })}"><div class="flex-1 overflow-y-auto px-4 pt-6 scrollbar-industrial"><div class="mb-6 px-1 space-y-3"><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2.5 min-w-0 flex-1"><div class="relative shrink-0">`);
        _push(ssrRenderComponent(_component_UAvatar, {
          src: userAvatar.value,
          alt: userLabel.value,
          size: "sm",
          class: "ring-1 ring-gray-100 dark:ring-white/5 shadow-sm"
        }, null, _parent));
        _push(`<div class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-[#020203] bg-emerald-500"></div></div><div class="min-w-0 flex-1"><div class="flex items-center gap-1.5"><span class="truncate text-xs text-gray-900 dark:text-white font-semibold">${ssrInterpolate(userLabel.value)}</span><span class="inline-flex items-center rounded-md border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-gray-600 dark:text-white/70"> PTS </span></div><p class="truncate text-[11px] text-gray-500 dark:text-white/50 mt-0.5">${ssrInterpolate(userEmail.value)}</p></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/user/billing"),
          class: "shrink-0 inline-flex items-center gap-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1a1a1e] hover:bg-gray-100 dark:hover:bg-white/10 px-2.5 py-1 text-xs font-mono font-semibold tabular-nums text-gray-900 dark:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle-fill",
                class: "h-3.5 w-3.5 text-amber-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(((_a2 = sidebarCheckin.value) == null ? void 0 : _a2.gatewayAvailable) === false ? "\u2014" : unref(formatPoints)(sidebarPoints.value))}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:sparkle-fill",
                  class: "h-3.5 w-3.5 text-amber-500"
                }),
                createVNode("span", null, toDisplayString(((_b2 = sidebarCheckin.value) == null ? void 0 : _b2.gatewayAvailable) === false ? "\u2014" : unref(formatPoints)(sidebarPoints.value)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50/90 dark:bg-[#1a1a1e] px-3 py-2.5 flex items-center justify-between gap-2"><div class="min-w-0 flex-1"><div class="text-xs font-bold text-gray-900 dark:text-white truncate">${ssrInterpolate(_ctx.$t("hoxi.member.rewards.todayReward"))} +${ssrInterpolate(((_a = sidebarCheckin.value) == null ? void 0 : _a.todayPoints) || 5)} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</div><div class="text-[11px] text-gray-500 dark:text-white/50 truncate mt-0.5">${ssrInterpolate(((_b = sidebarCheckin.value) == null ? void 0 : _b.streak) || 0)} ${ssrInterpolate(_ctx.$t("hoxi.member.rewards.daysStreak"))}</div></div><button type="button"${ssrIncludeBooleanAttr(sidebarCheckingIn.value || Boolean((_c = sidebarCheckin.value) == null ? void 0 : _c.checkedInToday)) ? " disabled" : ""} class="${ssrRenderClass([((_d = sidebarCheckin.value) == null ? void 0 : _d.checkedInToday) ? "border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-400 dark:text-white/40 cursor-default" : "bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-95 cursor-pointer shadow-xs", "shrink-0 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all"])}">`);
        if (sidebarCheckingIn.value) {
          _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.member.common.loading"))}</span>`);
        } else if ((_e = sidebarCheckin.value) == null ? void 0 : _e.checkedInToday) {
          _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.checkedIn"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.member.rewards.checkInNow"))}</span>`);
        }
        _push(`</button></div></div><nav class="space-y-1"><div class="px-3 mb-3 text-xs text-gray-500 dark:text-white/55">${ssrInterpolate(_ctx.$t("hoxi.member.shell.mainNavigation"))}</div><!--[-->`);
        ssrRenderList(navItems.value, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.key,
            to: unref(localePath)(item.to),
            class: ["group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all", isActive(item.to) ? "bg-gray-100 dark:bg-[#1a1a1e] text-gray-900 dark:text-white border border-gray-200 dark:border-white/5" : "text-gray-500 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/[0.03] hover:text-gray-900 dark:hover:text-white"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: item.icon,
                  class: ["h-4 w-4 shrink-0 transition-transform group-hover:scale-110", isActive(item.to) ? "text-[#6d4cff] dark:text-[#8ea3ff]" : "text-gray-500 dark:text-white/55 group-hover:text-gray-600 dark:group-hover:text-white/40"]
                }, null, _parent2, _scopeId));
                _push2(`<span class="truncate text-sm font-medium"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              } else {
                return [
                  createVNode(_component_UIcon, {
                    name: item.icon,
                    class: ["h-4 w-4 shrink-0 transition-transform group-hover:scale-110", isActive(item.to) ? "text-[#6d4cff] dark:text-[#8ea3ff]" : "text-gray-500 dark:text-white/55 group-hover:text-gray-600 dark:group-hover:text-white/40"]
                  }, null, 8, ["name", "class"]),
                  createVNode("span", { class: "truncate text-sm font-medium" }, toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav></div><div class="border-t border-gray-100 dark:border-white/5 p-4 bg-gray-50/50 dark:bg-black/20 space-y-2.5"><div class="rounded-xl border border-gray-100 dark:border-white/5 bg-white dark:bg-[#1a1a1e] px-3 py-2.5"><div class="flex items-center justify-between text-[11px] text-gray-500 dark:text-white/50"><span>${ssrInterpolate(_ctx.$t("hoxi.member.shell.rateTitle"))}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:coins-duotone",
          class: "h-3.5 w-3.5 text-[#6d4cff] dark:text-[#8ea3ff]"
        }, null, _parent));
        _push(`</div><div class="mt-1 font-mono text-xs font-semibold tabular-nums text-gray-900 dark:text-white"> 10,000 ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))} = $1.00 USD </div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/models"),
          class: "flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 dark:bg-white px-4 py-2.5 text-sm text-white dark:text-black transition-all hover:-translate-y-0.5 hover:bg-gray-800 dark:hover:bg-slate-50 active:scale-95"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle-fill",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("hoxi.member.shell.exploreModels"))}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:sparkle-fill",
                  class: "h-3.5 w-3.5"
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.member.shell.exploreModels")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></aside><div class="flex-1 w-full"><div class="p-4 md:p-6 xl:hidden"><aside class="rounded-3xl border border-gray-100 dark:border-white/8 bg-white dark:bg-[#1a1a1e] p-4 shadow-sm dark:shadow-inner"><div class="flex items-center gap-3 rounded-xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/3 px-3 py-3 cursor-pointer">`);
        _push(ssrRenderComponent(_component_UAvatar, {
          src: userAvatar.value,
          alt: userLabel.value,
          size: "sm",
          class: "ring-1 ring-gray-200 dark:ring-white/10"
        }, null, _parent));
        _push(`<div class="min-w-0 flex-1"><div class="flex items-center gap-1.5"><p class="truncate text-sm text-gray-900 dark:text-white font-medium">${ssrInterpolate(userLabel.value)}</p><span class="inline-flex items-center rounded-md border border-[#6d4cff]/20 bg-[#6d4cff]/10 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"> PTS </span></div><p class="truncate text-xs text-gray-500 dark:text-white/60 mt-0.5">${ssrInterpolate(userEmail.value)}</p></div>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: mobileNavOpen.value ? "ph:caret-up-bold" : "ph:list-bold",
          class: "h-4 w-4 text-gray-500 dark:text-white/55"
        }, null, _parent));
        _push(`</div>`);
        if (mobileNavOpen.value) {
          _push(`<div class="mt-4 space-y-4"><nav class="space-y-1"><!--[-->`);
          ssrRenderList(navItems.value, (item) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: item.key,
              to: unref(localePath)(item.to),
              class: ["group flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition", isActive(item.to) ? "bg-gray-100 dark:bg-[#1a1a1e] text-gray-900 dark:text-white border border-gray-200 dark:border-white/5" : "text-gray-500 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/[0.03] hover:text-gray-900 dark:hover:text-white"],
              onClick: ($event) => mobileNavOpen.value = false
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: item.icon,
                    class: ["h-4 w-4 shrink-0", isActive(item.to) ? "text-[#6d4cff] dark:text-[#8ea3ff]" : "text-gray-500 dark:text-white/50 group-hover:text-gray-600 dark:group-hover:text-white/60"]
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="truncate text-sm tracking-[0.04em]"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: item.icon,
                      class: ["h-4 w-4 shrink-0", isActive(item.to) ? "text-[#6d4cff] dark:text-[#8ea3ff]" : "text-gray-500 dark:text-white/50 group-hover:text-gray-600 dark:group-hover:text-white/60"]
                    }, null, 8, ["name", "class"]),
                    createVNode("span", { class: "truncate text-sm tracking-[0.04em]" }, toDisplayString(item.label), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></nav><div class="border-t border-gray-100 pt-4 dark:border-white/8 space-y-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)("/models"),
            class: "flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-slate-50",
            onClick: ($event) => mobileNavOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:sparkle-fill",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.shell.exploreModels"))}</span>`);
              } else {
                return [
                  createVNode(_component_UIcon, {
                    name: "ph:sparkle-fill",
                    class: "h-4 w-4"
                  }),
                  createVNode("span", { class: "truncate" }, toDisplayString(_ctx.$t("hoxi.member.shell.exploreModels")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</aside></div><main class="min-w-0 py-5 xl:py-8 xl:pl-64"><div class="mx-auto w-full max-w-6xl px-4 md:px-5 lg:px-6 space-y-6 pb-10"><div class="relative"><div class="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between px-1"><div class="max-w-3xl"><h1 class="text-2xl text-gray-900 dark:text-white xl:text-3xl font-semibold tracking-tight">`);
        if (unref(registeredSlots).title) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(registeredSlots).title), null, null), _parent);
        } else {
          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
            _push(`${ssrInterpolate(_ctx.$t("hoxi.member.shell.title"))}`);
          }, _push, _parent);
        }
        _push(`</h1><div class="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-white/55 md:text-base">`);
        if (unref(registeredSlots).subtitle) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(registeredSlots).subtitle), null, null), _parent);
        } else {
          ssrRenderSlot(_ctx.$slots, "subtitle", {}, () => {
            _push(`${ssrInterpolate(_ctx.$t("hoxi.member.shell.subtitle"))}`);
          }, _push, _parent);
        }
        _push(`</div></div><div class="flex items-center gap-2">`);
        if (unref(registeredSlots).headerRight) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(registeredSlots).headerRight), null, null), _parent);
        } else {
          ssrRenderSlot(_ctx.$slots, "header-right", {}, null, _push, _parent);
        }
        _push(`</div></div><div class="relative mt-6"><div>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div></div></div></main></div></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/user/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main,
  persistentDirectoryLayout
}, Symbol.toStringTag, { value: "Module" }));

export { _sfc_main as _, formatUsdRef as a, formatTokensCount as b, formatShortTime as c, formatPoints as f, layout as l, useHoxiMember as u };
//# sourceMappingURL=layout-BygO2qvg.mjs.map
