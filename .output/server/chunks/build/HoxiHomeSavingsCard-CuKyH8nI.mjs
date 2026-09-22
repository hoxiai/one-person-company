import { aM as useLocaleRouter, y as useFetch, b as _sfc_main$G, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_4$1 from './HoxiTag-BAz_5lMM.mjs';
import __nuxt_component_3 from './HoxiVendorDot-BQ5SFhuO.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useHoxiModels, s as sortModels, a as formatPrice, f as formatScore } from './useHoxiModels-DpcwauH-.mjs';
import { h as hoxiGateways } from './gateways-tgDca7H5.mjs';
import { h as hoxiPlans } from './plans-D8XOOLan.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
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
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiHomeSavingsCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useLocaleRouter();
    const { models } = useHoxiModels();
    const activeDataTab = ref("gateways");
    const dataTabs = [
      { id: "gateways", name: "\u4E2D\u8F6C\u7AD9" },
      { id: "models", name: "\u6A21\u578B" },
      { id: "plans", name: "\u7F16\u7A0B\u5957\u9910" }
    ];
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
      return gws.filter((g) => !g.hidden).slice(0, 3);
    });
    const topCodingModels = computed(() => {
      const codingCapable = models.value.filter(
        (model) => model.scenes.includes("\u5199\u4EE3\u7801") || model.scores.overall !== void 0 && model.scores.overall >= 45
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
      return plans.filter((p) => !p.hidden).slice(0, 3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiTag = __nuxt_component_4$1;
      const _component_HoxiVendorDot = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-xs overflow-hidden" }, _attrs))}><div class="border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-amber-50/50 via-slate-50/50 to-blue-50/40 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900 p-4 sm:p-6 md:p-8"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><div class="flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-sm font-bold">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:coins-bold",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"> \u7701\u94B1 </h2></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"> \u6A21\u578B\u3001\u4E2D\u8F6C\u7AD9\u548C\u7F16\u7A0B\u5957\u9910\u7684\u4EF7\u683C\u5BF9\u6BD4\u3002 </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/savings"),
        class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 self-start sm:self-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u7701\u94B1\u6307\u5357</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u7701\u94B1\u6307\u5357"),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right",
                class: "w-3.5 h-3.5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="p-6 md:p-8"><div class="flex items-center justify-between gap-3 mb-4"><div class="text-xs font-bold text-slate-500 uppercase tracking-wider dark:text-slate-400"> \u5BF9\u6BD4 </div><div class="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs"><!--[-->`);
      ssrRenderList(dataTabs, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeDataTab.value === tab.id ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "rounded-lg px-3 py-1 font-medium transition-all"])}">${ssrInterpolate(tab.name)}</button>`);
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
          _push(`<span class="text-xs font-bold text-slate-900 dark:text-white font-mono">${ssrInterpolate(gw.priceLabel)}</span></div><div class="mt-2 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500"><span>\u5EF6\u8FDF <strong class="text-emerald-600 font-mono dark:text-emerald-400">${ssrInterpolate(gw.latencyMs)}ms</strong></span><span>\u5728\u7EBF\u7387 <strong class="text-emerald-600 font-mono dark:text-emerald-400">${ssrInterpolate(gw.uptime)}</strong></span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/gateways/${gw.id}`),
            class: "text-blue-600 dark:text-blue-400 font-medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u8BE6\u60C5\u4E0E\u914D\u7F6E \u2192`);
              } else {
                return [
                  createTextVNode("\u8BE6\u60C5\u4E0E\u914D\u7F6E \u2192")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="hidden sm:block overflow-x-auto"><table class="w-full text-left text-xs text-slate-600 dark:text-slate-300"><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500"><tr><th class="px-4 py-2.5">\u4E2D\u8F6C\u7AD9</th><th class="px-4 py-2.5">\u5EF6\u8FDF</th><th class="px-4 py-2.5">\u5728\u7EBF\u7387</th><th class="px-4 py-2.5">\u53C2\u8003\u5355\u4EF7</th><th class="px-4 py-2.5 text-right">\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
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
                _push2(` \u8BE6\u60C5\u4E0E\u914D\u7F6E `);
              } else {
                return [
                  createTextVNode(" \u8BE6\u60C5\u4E0E\u914D\u7F6E ")
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
          var _a;
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
          _push(`<span class="text-xs font-bold text-slate-900 dark:text-white font-mono">\xA5${ssrInterpolate(unref(formatPrice)(model.blendedPrice))}/M</span></div><div class="mt-2 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500"><span>${ssrInterpolate(((_a = model.vendorInfo) == null ? void 0 : _a.nameZh) || model.vendor)} \xB7 \u7EFC\u5408 ${ssrInterpolate(unref(formatScore)(model.scores.overall))}\u5206</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/models/${model.slug}`),
            class: "text-blue-600 dark:text-blue-400 font-medium"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u8BE6\u60C5 \u2192`);
              } else {
                return [
                  createTextVNode("\u8BE6\u60C5 \u2192")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div><div class="hidden sm:block overflow-x-auto"><table class="w-full text-left text-xs text-slate-600 dark:text-slate-300"><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 text-slate-400 dark:text-slate-500"><tr><th class="px-4 py-2.5">\u6A21\u578B</th><th class="px-4 py-2.5">\u6807\u7B7E / \u573A\u666F</th><th class="px-4 py-2.5 text-right">\u7EFC\u5408\u5206</th><th class="px-4 py-2.5 text-right">\u6DF7\u5408\u5355\u4EF7</th><th class="px-4 py-2.5 text-right">\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
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
                _push2(` \u8BE6\u60C5 \u2192 `);
              } else {
                return [
                  createTextVNode(" \u8BE6\u60C5 \u2192 ")
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
                _push2(` \u67E5\u770B\u989D\u5EA6 \u2192 `);
              } else {
                return [
                  createTextVNode(" \u67E5\u770B\u989D\u5EA6 \u2192 ")
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
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "HoxiHomeSavingsCard" });

export { __nuxt_component_4 as default };
