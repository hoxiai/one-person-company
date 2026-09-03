import { aL as useLocaleRouter, y as useFetch, a as __nuxt_component_3$1, b as _sfc_main$E } from './server.mjs';
import __nuxt_component_5 from './HoxiTag-siFn4kRf.mjs';
import __nuxt_component_4$1 from './HoxiVendorDot-F2b2YLsh.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useHoxiModels, s as sortModels, f as formatScore, a as formatPrice } from './useHoxiModels-D3S6mr-U.mjs';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
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
      { id: "gateways", name: "\u26A1 \u9760\u8C31\u4E13\u7EBF" },
      { id: "models", name: "\u{1F3C6} \u4E3B\u529B\u4F53\u611F" },
      { id: "plans", name: "\u{1F4E6} \u5957\u9910\u907F\u5751" }
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
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$E;
      const _component_HoxiTag = __nuxt_component_5;
      const _component_HoxiVendorDot = __nuxt_component_4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-xs overflow-hidden" }, _attrs))}><div class="border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-amber-50/50 via-slate-50/50 to-blue-50/40 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900 p-6 md:p-8"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><div class="flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-sm font-bold"> \u{1F4B0} </span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"> \u4E00\u4EBA\u516C\u53F8\u7B97\u529B\u964D\u672C\u65B9\u6848 </h2><span class="rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"> \u5B9E\u6D4B\u76F4\u964D 85%+ </span></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"> \u6DF7\u5408\u6A21\u578B\u642D\u914D + \u56FD\u5185\u514D\u9B54\u6CD5\u4E13\u7EBF\uFF0C\u6708\u82B1\u767E\u5143\u5185\u3002 </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/savings"),
        class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 self-start sm:self-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u8FDB\u5165\u7701\u94B1\u4E2D\u5FC3</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u8FDB\u5165\u7701\u94B1\u4E2D\u5FC3"),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right",
                class: "w-3.5 h-3.5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 grid gap-4 lg:grid-cols-2"><div class="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 space-y-2.5"><div class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5"><span>\u{1F4A1}</span><span>\u7AD9\u957F\u5B9E\u64CD\u9EC4\u91D1\u642D\u914D</span></div><div class="space-y-2 text-xs"><div class="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60"><div class="flex items-center gap-2"><span class="rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-1.5 py-0.5 text-[10px] font-semibold">\u65E5\u5E38 70%</span><strong class="text-slate-800 dark:text-slate-100 font-mono">Gemini 3.7 Flash</strong></div><span class="text-[11px] text-slate-500 dark:text-slate-400">\u6781\u901F\u54CD\u5E94 \xB7 \xA50.7/M</span></div><div class="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60"><div class="flex items-center gap-2"><span class="rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 text-[10px] font-semibold">\u653B\u575A 20%</span><strong class="text-slate-800 dark:text-slate-100 font-mono">Claude 3.7 / Code</strong></div><span class="text-[11px] text-slate-500 dark:text-slate-400">\u6DF1\u5EA6\u91CD\u6784 \xB7 \u6309\u91CF\u4E13\u7EBF</span></div><div class="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60"><div class="flex items-center gap-2"><span class="rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 text-[10px] font-semibold">\u9A8C\u8BC1 10%</span><strong class="text-slate-800 dark:text-slate-100 font-mono">Grok 3 / Codex</strong></div><span class="text-[11px] text-slate-500 dark:text-slate-400">\u4EA4\u53C9\u5BF9\u6BD4 \xB7 \u907F\u514D\u6B7B\u80E1\u540C</span></div></div></div><div class="rounded-xl border border-emerald-200/60 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/20 p-4 flex flex-col justify-between"><div><div class="flex items-center justify-between"><span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:receipt-bold",
        class: "w-4 h-4 text-emerald-600 dark:text-emerald-400"
      }, null, _parent));
      _push(`<span>\u6708\u5EA6\u7B97\u529B\u8D26\u672C\u5BF9\u6BD4</span></span><span class="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-full"> \u7ACB\u964D 88% </span></div><div class="mt-3 grid grid-cols-2 gap-3 text-center"><div class="rounded-lg bg-white/80 dark:bg-slate-900/70 p-2.5 border border-slate-200/60 dark:border-slate-800"><div class="text-[11px] text-slate-400">\u5B98\u65B9\u5168\u5957\u6708\u8BA2\u9605</div><div class="text-lg font-bold text-slate-600 dark:text-slate-400 font-mono line-through">\xA51,500/\u6708</div><div class="text-[10px] text-slate-400 mt-0.5">\u6D77\u5916\u5361\u95E8\u69DB \xB7 \u95F2\u7F6E\u4E5F\u6263\u6B3E</div></div><div class="rounded-lg bg-white/90 dark:bg-slate-900/90 p-2.5 border border-emerald-300 dark:border-emerald-800 shadow-2xs"><div class="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">\u4E00\u4EBA\u516C\u53F8\u4E13\u7EBF\u65B9\u6848</div><div class="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono">\xA568/\u6708 \u8D77</div><div class="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">\u56FD\u5185\u76F4\u8FDE \xB7 \u989D\u5EA6\u6C38\u4E45\u6709\u6548</div></div></div></div><div class="mt-3 pt-2 border-t border-emerald-200/40 dark:border-emerald-900/40 text-center text-xs text-emerald-800 dark:text-emerald-300 font-medium"> \u6BCF\u5E74\u7701\u4E0B\u7EA6 <strong>\xA517,000+</strong> \u73B0\u91D1\u8DD1\u9053 </div></div></div></div><div class="p-6 md:p-8"><div class="flex items-center justify-between gap-3 mb-4"><div class="text-xs font-bold text-slate-500 uppercase tracking-wider"> \u6DF1\u5165\u67E5\u9A8C\u6570\u636E\u660E\u7EC6 </div><div class="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs"><!--[-->`);
      ssrRenderList(dataTabs, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeDataTab.value === tab.id ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "rounded-lg px-3 py-1 font-medium transition-all"])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (activeDataTab.value === "gateways") {
        _push(`<div class="overflow-x-auto"><table class="w-full text-left text-xs text-slate-600 dark:text-slate-300"><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 text-slate-400"><tr><th class="px-4 py-2.5">\u63A8\u8350\u4E13\u7EBF</th><th class="px-4 py-2.5">\u5B9E\u6D4B\u5EF6\u8FDF</th><th class="px-4 py-2.5">\u5728\u7EBF\u7387</th><th class="px-4 py-2.5">\u53C2\u8003\u5355\u4EF7</th><th class="px-4 py-2.5 text-right">\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
        ssrRenderList(topGateways.value, (gw) => {
          _push(`<tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"><td class="px-4 py-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/gateways/${gw.id}`),
            class: "font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 flex items-center gap-1.5"
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
          _push(`<div class="text-[11px] text-slate-400 mt-0.5 line-clamp-1">${ssrInterpolate(gw.caveat || gw.domain)}</div></td><td class="px-4 py-3 font-mono font-medium text-slate-700 dark:text-slate-300">${ssrInterpolate(gw.latencyMs)}ms</td><td class="px-4 py-3 font-mono font-medium text-emerald-600">${ssrInterpolate(gw.uptime)}</td><td class="px-4 py-3 font-mono font-medium text-slate-800 dark:text-slate-200">${ssrInterpolate(gw.priceLabel)}</td><td class="px-4 py-3 text-right">`);
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
        _push(`<!--]--></tbody></table></div>`);
      } else if (activeDataTab.value === "models") {
        _push(`<div class="overflow-x-auto"><table class="w-full text-left text-xs text-slate-600 dark:text-slate-300"><thead class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 text-slate-400"><tr><th class="px-4 py-2.5">\u6A21\u578B</th><th class="px-4 py-2.5">\u4F53\u611F\u70B9\u8BC4 / \u573A\u666F</th><th class="px-4 py-2.5 text-right">\u7EFC\u5408\u5206</th><th class="px-4 py-2.5 text-right">\u6DF7\u5408\u5355\u4EF7</th><th class="px-4 py-2.5 text-right">\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
        ssrRenderList(topCodingModels.value, (model) => {
          _push(`<tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"><td class="px-4 py-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/models/${model.slug}`),
            class: "hover:text-blue-600 flex items-center gap-1.5"
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
            class: "text-xs text-blue-600 hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u8BC4\u6D4B \u2192 `);
              } else {
                return [
                  createTextVNode(" \u8BC4\u6D4B \u2192 ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else if (activeDataTab.value === "plans") {
        _push(`<div class="grid gap-3 sm:grid-cols-3"><!--[-->`);
        ssrRenderList(featuredPlans.value, (plan) => {
          _push(`<div class="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-3.5 space-y-2 flex flex-col justify-between"><div><div class="flex items-center justify-between"><div class="font-bold text-slate-900 dark:text-white text-xs">${ssrInterpolate(plan.name)}</div><span class="text-[10px] font-mono text-slate-400">${ssrInterpolate(plan.vendorLabel)}</span></div><div class="text-base font-bold text-slate-900 dark:text-white font-mono mt-1">${ssrInterpolate(plan.priceLabel)}</div><p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${ssrInterpolate(plan.quotaNote)}</p></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)("/coding-plans"),
            class: "text-center text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u67E5\u770B\u989D\u5EA6\u4E0E\u907F\u5751\u6307\u5357 \u2192 `);
              } else {
                return [
                  createTextVNode(" \u67E5\u770B\u989D\u5EA6\u4E0E\u907F\u5751\u6307\u5357 \u2192 ")
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
