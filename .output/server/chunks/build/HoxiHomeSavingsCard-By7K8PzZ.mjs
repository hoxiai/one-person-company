import { u as useI18n, D as useLocaleRouter, y as useFetch, N as __nuxt_component_3$3, _ as _sfc_main$V } from './server.mjs';
import __nuxt_component_3 from './HoxiTag-CsgvfRW3.mjs';
import __nuxt_component_1 from './HoxiVendorDot-BLwK_ZsG.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useHoxiModels, s as sortModels, a as formatPrice, f as formatScore } from './useHoxiModels-BgjDUCxB.mjs';
import { a as localizeGatewayEn, b as localizePlanEn } from './i18n-data-DAEMwG3q.mjs';
import { h as hoxiGateways } from './gateways-tgDca7H5.mjs';
import { h as hoxiPlans } from './plans-D8XOOLan.mjs';
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
import 'ioredis';
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
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiHomeSavingsCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const { localePath } = useLocaleRouter();
    const { models } = useHoxiModels();
    const isEn = computed(() => {
      const val = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
      return val.toLowerCase().startsWith("en");
    });
    const activeDataTab = ref("gateways");
    const dataTabs = computed(() => [
      { id: "gateways", name: t("hoxi.homeSavings.tabGateways") },
      { id: "models", name: t("hoxi.homeSavings.tabModels") },
      { id: "plans", name: t("hoxi.homeSavings.tabPlans") }
    ]);
    const { data: dbGateways } = useFetch(
      "/api/hoxi/gateways",
      {
        key: "hoxi-home-gateways",
        default: () => null
      },
      "$WfJGM4tqrD"
      /* nuxt-injected */
    );
    const topGateways = computed(() => {
      const gws = dbGateways.value && Array.isArray(dbGateways.value) && dbGateways.value.length > 0 ? dbGateways.value : hoxiGateways;
      const list = gws.filter((g) => !g.hidden).slice(0, 3);
      return isEn.value ? list.map(localizeGatewayEn) : list;
    });
    const topCodingModels = computed(() => {
      const codingCapable = models.value.filter(
        (model) => {
          var _a, _b;
          return ((_a = model.scenes) == null ? void 0 : _a.includes("\u5199\u4EE3\u7801")) || ((_b = model.scenes) == null ? void 0 : _b.includes("Coding")) || model.scores.overall !== void 0 && model.scores.overall >= 45;
        }
      );
      return sortModels(codingCapable, "overall", "desc").slice(0, 4);
    });
    const { data: dbPlans } = useFetch(
      "/api/hoxi/plans",
      {
        key: "hoxi-home-plans",
        default: () => null
      },
      "$xMPxwiAj-i"
      /* nuxt-injected */
    );
    const featuredPlans = computed(() => {
      const plans = dbPlans.value && Array.isArray(dbPlans.value) && dbPlans.value.length > 0 ? dbPlans.value : hoxiPlans;
      const list = plans.filter((p) => !p.hidden).slice(0, 3);
      return isEn.value ? list.map(localizePlanEn) : list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$V;
      const _component_HoxiTag = __nuxt_component_3;
      const _component_HoxiVendorDot = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0d0f14] overflow-hidden" }, _attrs))}><div class="border-b border-slate-200/80 dark:border-slate-800/90 bg-slate-50/60 dark:bg-[#111319] p-5 sm:p-6"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h3 class="text-base md:text-lg font-bold tracking-tight text-slate-950 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.title"))}</h3><p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.subtitle"))}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/savings"),
        class: "shrink-0 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors flex items-center gap-1 self-start sm:self-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeSavings.viewAll"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSavings.viewAll")), 1),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right",
                class: "w-3.5 h-3.5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="p-5 sm:p-6"><div class="flex items-center justify-between gap-3 mb-4"><div class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.dataGlance"))}</div><div class="inline-flex rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-[#111319] p-1 font-mono text-xs"><!--[-->`);
      ssrRenderList(dataTabs.value, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeDataTab.value === tab.id ? "bg-slate-950 text-white dark:bg-blue-600 dark:text-white shadow-2xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white", "rounded-md px-3 py-1 font-semibold transition-all cursor-pointer"])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (activeDataTab.value === "gateways") {
        _push(`<div><div class="sm:hidden space-y-2.5 p-3"><!--[-->`);
        ssrRenderList(topGateways.value, (gw) => {
          _push(`<div class="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-2xs"><div class="flex items-center justify-between">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/gateways/${gw.id}`),
            class: "font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 flex items-center gap-1.5 text-xs dark:hover:text-blue-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="h-2 w-2 rounded-full bg-emerald-500"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(gw.name)}</span>`);
                if (gw.badge) {
                  _push2(ssrRenderComponent(_component_HoxiTag, {
                    tone: gw.badgeTone === "positive" ? "positive" : "info"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(gw.badge)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(gw.badge), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("span", { class: "h-2 w-2 rounded-full bg-emerald-500" }),
                  createVNode("span", null, toDisplayString(gw.name), 1),
                  gw.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                    key: 0,
                    tone: gw.badgeTone === "positive" ? "positive" : "info"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(gw.badge), 1)
                    ]),
                    _: 2
                  }, 1032, ["tone"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<span class="text-xs font-bold text-slate-900 dark:text-white font-mono">${ssrInterpolate(gw.priceLabel)}</span></div><div class="mt-2 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500"><span>${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colLatency"))} <strong class="text-emerald-600 font-mono dark:text-emerald-400">${ssrInterpolate(gw.latencyMs)}ms</strong></span><span>${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colUptime"))} <strong class="text-emerald-600 font-mono dark:text-emerald-400">${ssrInterpolate(gw.uptime)}</strong></span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/gateways/${gw.id}`),
            class: "text-blue-600 dark:text-blue-400 font-medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("hoxi.homeSavings.configureBtn"))} \u2192`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSavings.configureBtn")) + " \u2192", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="hidden sm:block overflow-x-auto"><table class="w-full text-left text-xs text-slate-600 dark:text-slate-300"><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500"><tr><th class="px-4 py-2.5">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colGateway"))}</th><th class="px-4 py-2.5">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colLatency"))}</th><th class="px-4 py-2.5">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colUptime"))}</th><th class="px-4 py-2.5">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colPrice"))}</th><th class="px-4 py-2.5 text-right">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colAction"))}</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
        ssrRenderList(topGateways.value, (gw) => {
          _push(`<tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"><td class="px-4 py-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/gateways/${gw.id}`),
            class: "font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 flex items-center gap-1.5 dark:hover:text-blue-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="h-2 w-2 rounded-full bg-emerald-500"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(gw.name)}</span>`);
                if (gw.badge) {
                  _push2(ssrRenderComponent(_component_HoxiTag, {
                    tone: gw.badgeTone === "positive" ? "positive" : "info"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(gw.badge)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(gw.badge), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("span", { class: "h-2 w-2 rounded-full bg-emerald-500" }),
                  createVNode("span", null, toDisplayString(gw.name), 1),
                  gw.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                    key: 0,
                    tone: gw.badgeTone === "positive" ? "positive" : "info"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(gw.badge), 1)
                    ]),
                    _: 2
                  }, 1032, ["tone"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="text-[11px] text-slate-400 mt-0.5 line-clamp-1 dark:text-slate-500">${ssrInterpolate(gw.caveat || gw.domain)}</div></td><td class="px-4 py-3 font-mono font-medium text-slate-700 dark:text-slate-300">${ssrInterpolate(gw.latencyMs)}ms</td><td class="px-4 py-3 font-mono font-medium text-emerald-600 dark:text-emerald-400">${ssrInterpolate(gw.uptime)}</td><td class="px-4 py-3 font-mono font-medium text-slate-800 dark:text-slate-200">${ssrInterpolate(gw.priceLabel)}</td><td class="px-4 py-3 text-right">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/gateways/${gw.id}`),
            class: "inline-block rounded-full bg-blue-600 text-white px-3 py-1 font-semibold hover:bg-blue-700 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("hoxi.homeSavings.configureBtn"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSavings.configureBtn")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else if (activeDataTab.value === "models") {
        _push(`<div><div class="sm:hidden space-y-2.5 p-3"><!--[-->`);
        ssrRenderList(topCodingModels.value, (model) => {
          var _a, _b;
          _push(`<div class="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-2xs"><div class="flex items-center justify-between">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/models/${model.slug}`),
            class: "font-bold text-slate-900 dark:text-white hover:text-blue-600 flex items-center gap-1.5 text-xs dark:hover:text-blue-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_HoxiVendorDot, {
                  vendor: model.vendorInfo
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(model.name)}</span>`);
              } else {
                return [
                  createVNode(_component_HoxiVendorDot, {
                    vendor: model.vendorInfo
                  }, null, 8, ["vendor"]),
                  createVNode("span", null, toDisplayString(model.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<span class="text-xs font-bold text-slate-900 dark:text-white font-mono">\xA5${ssrInterpolate(unref(formatPrice)(model.blendedPrice))}/M</span></div><div class="mt-2 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500"><span>${ssrInterpolate(isEn.value ? ((_a = model.vendorInfo) == null ? void 0 : _a.name) || model.vendor : ((_b = model.vendorInfo) == null ? void 0 : _b.nameZh) || model.vendor)} \xB7 ${ssrInterpolate(_ctx.$t("hoxi.homeSavings.overallPrefix"))} ${ssrInterpolate(unref(formatScore)(model.scores.overall))}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/models/${model.slug}`),
            class: "text-blue-600 dark:text-blue-400 font-medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("hoxi.homeSavings.detailsLink"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSavings.detailsLink")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="hidden sm:block overflow-x-auto"><table class="w-full text-left text-xs text-slate-600 dark:text-slate-300"><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500"><tr><th class="px-4 py-2.5">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colModel"))}</th><th class="px-4 py-2.5">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colScenes"))}</th><th class="px-4 py-2.5 text-right">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colScore"))}</th><th class="px-4 py-2.5 text-right">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colBlended"))}</th><th class="px-4 py-2.5 text-right">${ssrInterpolate(_ctx.$t("hoxi.homeSavings.colAction"))}</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
        ssrRenderList(topCodingModels.value, (model) => {
          _push(`<tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"><td class="px-4 py-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/models/${model.slug}`),
            class: "hover:text-blue-600 flex items-center gap-1.5 dark:hover:text-blue-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_HoxiVendorDot, {
                  vendor: model.vendorInfo
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(model.name)}</span>`);
              } else {
                return [
                  createVNode(_component_HoxiVendorDot, {
                    vendor: model.vendorInfo
                  }, null, 8, ["vendor"]),
                  createVNode("span", null, toDisplayString(model.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="px-4 py-3 max-w-[280px]"><div class="flex flex-wrap gap-1"><!--[-->`);
          ssrRenderList((model.badges || []).slice(0, 2), (b) => {
            _push(`<span class="rounded bg-amber-50 dark:bg-amber-950 px-1 py-0.2 text-[10px] text-amber-700 dark:text-amber-300">${ssrInterpolate(b)}</span>`);
          });
          _push(`<!--]--><!--[-->`);
          ssrRenderList((model.scenes || []).slice(0, 2), (s) => {
            _push(`<span class="rounded bg-blue-50 dark:bg-blue-950 px-1 py-0.2 text-[10px] text-blue-600 dark:text-blue-400">${ssrInterpolate(s)}</span>`);
          });
          _push(`<!--]--></div></td><td class="px-4 py-3 text-right font-mono font-bold text-slate-900 dark:text-white">${ssrInterpolate(unref(formatScore)(model.scores.overall))}</td><td class="px-4 py-3 text-right font-mono font-medium text-slate-800 dark:text-slate-200 whitespace-nowrap"> \xA5${ssrInterpolate(unref(formatPrice)(model.blendedPrice))}/M </td><td class="px-4 py-3 text-right whitespace-nowrap">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/models/${model.slug}`),
            class: "text-xs text-blue-600 hover:underline dark:text-blue-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("hoxi.homeSavings.detailsLink"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSavings.detailsLink")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else if (activeDataTab.value === "plans") {
        _push(`<div class="grid gap-3 sm:grid-cols-3"><!--[-->`);
        ssrRenderList(featuredPlans.value, (plan) => {
          _push(`<div class="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-3.5 space-y-2 flex flex-col justify-between"><div><div class="flex items-center justify-between"><div class="font-bold text-slate-900 dark:text-white text-xs">${ssrInterpolate(plan.name)}</div><span class="text-[10px] font-mono text-slate-400 dark:text-slate-500">${ssrInterpolate(plan.vendorLabel)}</span></div><div class="text-base font-bold text-slate-900 dark:text-white font-mono mt-1">${ssrInterpolate(plan.priceLabel)}</div><p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${ssrInterpolate(plan.quotaNote)}</p></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)("/coding-plans"),
            class: "text-center text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("hoxi.homeSavings.quotaLink"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSavings.quotaLink")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiHomeSavingsCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "HoxiHomeSavingsCard" });

export { __nuxt_component_5 as default };
//# sourceMappingURL=HoxiHomeSavingsCard-By7K8PzZ.mjs.map
