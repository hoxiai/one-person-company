import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import __nuxt_component_1 from './HoxiPageHeader-BFh30DFm.mjs';
import { e as useI18n, aL as useLocaleRouter, u as useHead, y as useFetch, a as __nuxt_component_3$1, b as _sfc_main$E } from './server.mjs';
import __nuxt_component_4 from './HoxiVendorDot-F2b2YLsh.mjs';
import __nuxt_component_5 from './HoxiTag-siFn4kRf.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHoxiModels, a as formatPrice } from './useHoxiModels-D3S6mr-U.mjs';
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
  __name: "savings",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    useHead({
      title: t("hoxi.savings.seoTitle"),
      meta: [
        { name: "description", content: t("hoxi.savings.seoDescription") }
      ]
    });
    const { models } = useHoxiModels();
    const featuredModelSlugs = ["claude-3-7-sonnet", "deepseek-r1", "deepseek-v3", "gemini-2-5-flash"];
    const featuredModels = computed(() => {
      const list = [];
      for (const slug of featuredModelSlugs) {
        const found = models.value.find((m) => m.slug === slug);
        if (found) list.push(found);
      }
      if (list.length < 4) {
        for (const m of models.value) {
          if (!list.some((item) => item.slug === m.slug)) {
            list.push(m);
            if (list.length >= 4) break;
          }
        }
      }
      return list;
    });
    const { data: dbGateways } = useFetch(
      "/api/hoxi/gateways",
      {
        key: "hoxi-savings-gateways",
        default: () => null
      },
      "$fCWUiqrBcL"
      /* nuxt-injected */
    );
    const effectiveGateways = computed(() => {
      if (dbGateways.value && Array.isArray(dbGateways.value) && dbGateways.value.length > 0) {
        return dbGateways.value.filter((g) => !g.hidden);
      }
      return hoxiGateways.filter((g) => !g.hidden);
    });
    const featuredGateways = computed(() => effectiveGateways.value.slice(0, 3));
    const { data: dbPlans } = useFetch(
      "/api/hoxi/plans",
      {
        key: "hoxi-savings-plans",
        default: () => null
      },
      "$35-ipUDaRA"
      /* nuxt-injected */
    );
    const effectivePlans = computed(() => {
      if (dbPlans.value && Array.isArray(dbPlans.value) && dbPlans.value.length > 0) {
        return dbPlans.value.filter((p) => !p.hidden);
      }
      return hoxiPlans.filter((p) => !p.hidden);
    });
    const featuredPlanSlugs = ["cursor-pro", "github-copilot-individual", "trae-pro"];
    const featuredPlans = computed(() => {
      const list = [];
      for (const slug of featuredPlanSlugs) {
        const found = effectivePlans.value.find((p) => p.slug === slug);
        if (found) list.push(found);
      }
      if (list.length < 3) {
        for (const p of effectivePlans.value) {
          if (!list.some((item) => item.slug === p.slug)) {
            list.push(p);
            if (list.length >= 3) break;
          }
        }
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_HoxiPageHeader = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$E;
      const _component_HoxiVendorDot = __nuxt_component_4;
      const _component_HoxiTag = __nuxt_component_5;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiPageHeader, {
              title: _ctx.$t("hoxi.savings.title"),
              subtitle: _ctx.$t("hoxi.savings.subtitle")
            }, null, _parent2, _scopeId));
            _push2(`<section class="mt-10 rounded-2xl border border-amber-200/70 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/20 dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-900/80 p-6 md:p-8 shadow-2xs"${_scopeId}><div class="flex items-center gap-2 mb-2"${_scopeId}><span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800/60"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-500"${_scopeId}></span> ${ssrInterpolate(_ctx.$t("hoxi.savings.decisionBadge"))}</span><h2 class="text-base md:text-lg font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.decisionTitle"))}</h2></div><p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.decisionDesc"))}</p><div class="mt-6 grid gap-4 md:grid-cols-3"${_scopeId}><div class="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 mb-2"${_scopeId}><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono"${_scopeId}>1</span><h3 class="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.rule1Title"))}</h3></div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.rule1Desc"))}</p></div><div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between"${_scopeId}><span class="text-[11px] text-slate-400"${_scopeId}>\u63A8\u8350\u65B9\u6848</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/gateways"),
              class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u6309\u91CF\u4E2D\u8F6C</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3 h-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "\u6309\u91CF\u4E2D\u8F6C"),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3 h-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 mb-2"${_scopeId}><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono"${_scopeId}>2</span><h3 class="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.rule2Title"))}</h3></div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.rule2Desc"))}</p></div><div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between"${_scopeId}><span class="text-[11px] text-slate-400"${_scopeId}>\u63A8\u8350\u65B9\u6848</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/coding-plans"),
              class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Cursor / Copilot</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3 h-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "Cursor / Copilot"),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3 h-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 flex flex-col justify-between"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2 mb-2"${_scopeId}><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono"${_scopeId}>3</span><h3 class="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.rule3Title"))}</h3></div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.rule3Desc"))}</p></div><div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between"${_scopeId}><span class="text-[11px] text-slate-400"${_scopeId}>\u63A8\u8350\u65B9\u6848</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/models"),
              class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u67E5\u770B\u6A21\u578B\u699C\u5355</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3 h-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "\u67E5\u770B\u6A21\u578B\u699C\u5355"),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3 h-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></section><section class="mt-14 md:mt-20"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-sm"${_scopeId}>\u{1F3C6}</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.modelsSectionTitle"))}</h2></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.modelsSectionNote"))}</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/models"),
              class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.savings.viewAllModels"))}</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.savings.viewAllModels")), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(featuredModels.value, (m) => {
              _push2(`<div class="flex flex-col justify-between rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-2 mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/models/${m.slug}`),
                class: "font-semibold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_HoxiVendorDot, {
                      vendor: m.vendorInfo
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="truncate"${_scopeId2}>${ssrInterpolate(m.name)}</span>`);
                  } else {
                    return [
                      createVNode(_component_HoxiVendorDot, {
                        vendor: m.vendorInfo
                      }, null, 8, ["vendor"]),
                      createVNode("span", { class: "truncate" }, toDisplayString(m.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (m.badges && m.badges[0]) {
                _push2(ssrRenderComponent(_component_HoxiTag, {
                  tone: "positive",
                  class: "shrink-0 scale-90"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(m.badges[0])}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(m.badges[0]), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed"${_scopeId}>${ssrInterpolate(m.description)}</p></div><div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between"${_scopeId}><div${_scopeId}><span class="block text-[10px] text-slate-400"${_scopeId}>\u7EFC\u5408\u6DF7\u5408\u5355\u4EF7</span><span class="text-sm font-bold text-slate-800 dark:text-slate-200 tabular-nums"${_scopeId}> \xA5${ssrInterpolate(unref(formatPrice)(m.blendedPrice))} <span class="text-[10px] font-normal text-slate-400"${_scopeId}>/ M</span></span></div><div class="text-right"${_scopeId}><span class="block text-[10px] text-slate-400"${_scopeId}>\u7F16\u7A0B\u4F53\u611F\u5206</span><span class="text-xs font-semibold text-amber-600 dark:text-amber-400 tabular-nums"${_scopeId}>${ssrInterpolate(m.scores.coding || m.scores.overall || "\u2014")} \u5206 </span></div></div></div>`);
            });
            _push2(`<!--]--></div></section><section class="mt-14 md:mt-20"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-sm"${_scopeId}>\u26A1</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.gatewaysSectionTitle"))}</h2></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.gatewaysSectionNote"))}</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/gateways"),
              class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.savings.viewAllGateways"))}</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.savings.viewAllGateways")), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(featuredGateways.value, (gw) => {
              _push2(`<div class="flex flex-col justify-between rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-2 mb-2"${_scopeId}><div${_scopeId}><h3 class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(gw.name)}</span></h3><span class="text-xs font-mono text-slate-400 mt-0.5 block"${_scopeId}>${ssrInterpolate(gw.domain)}</span></div>`);
              if (gw.badge) {
                _push2(ssrRenderComponent(_component_HoxiTag, {
                  tone: gw.badgeTone || "positive"
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
              _push2(`</div><div class="mt-3 flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
              ssrRenderList(gw.features.slice(0, 3), (feat) => {
                _push2(`<span class="px-2 py-0.5 rounded text-[10px] bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(feat)}</span>`);
              });
              _push2(`<!--]--></div></div><div class="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"${_scopeId}><div${_scopeId}><span class="block text-[10px] text-slate-400"${_scopeId}>\u5B9E\u6D4B\u4F4E\u81F3</span><span class="text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums"${_scopeId}>${ssrInterpolate(gw.priceLabel)}</span></div><div class="text-right"${_scopeId}><span class="block text-[10px] text-slate-400"${_scopeId}>\u76F8\u5BF9\u5B98\u65B9\u964D\u8D39</span><span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums"${_scopeId}> \u964D ${ssrInterpolate(gw.savingsPercent)}% </span></div></div></div>`);
            });
            _push2(`<!--]--></div></section><section class="mt-14 md:mt-20"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-sm"${_scopeId}>\u{1F4E6}</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.plansSectionTitle"))}</h2></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.plansSectionNote"))}</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/coding-plans"),
              class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.savings.viewAllPlans"))}</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.savings.viewAllPlans")), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(featuredPlans.value, (plan) => {
              _push2(`<div class="flex flex-col justify-between rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-2 mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/coding-plans/${plan.slug}`),
                class: "font-bold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(plan.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(plan.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0"${_scopeId}>${ssrInterpolate(plan.vendorLabel)}</span></div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mt-2"${_scopeId}>${ssrInterpolate(plan.quotaNote)}</p></div><div class="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"${_scopeId}><div${_scopeId}><span class="block text-[10px] text-slate-400"${_scopeId}>\u53C2\u8003\u6708\u8D39</span><span class="text-sm font-bold text-slate-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(plan.priceLabel)}</span></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/coding-plans/${plan.slug}`),
                class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u5B9E\u6D4B\u5EFA\u8BAE</span>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3 h-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", null, "\u5B9E\u6D4B\u5EFA\u8BAE"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3 h-3"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></section><section class="mt-14 md:mt-20"${_scopeId}><div class="pb-4 border-b border-slate-100 dark:border-slate-800"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 text-sm"${_scopeId}>\u{1F6E0}\uFE0F</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.toolsSectionTitle"))}</h2></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.toolsSectionNote"))}</p></div><div class="mt-6 grid gap-4 sm:grid-cols-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/projects"),
              class: "group rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between mb-3"${_scopeId2}><span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-base"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:rocket-launch-bold",
                    class: "w-5 h-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="text-xs text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1"${_scopeId2}><span${_scopeId2}>\u6D4F\u89C8\u771F\u5B9E\u6848\u4F8B</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div><h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"${_scopeId2}> \u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u843D\u5730\u9879\u76EE </h3><p class="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u771F\u5B9E\u6848\u4F8B\u5E93\uFF1A\u900F\u660E\u5C55\u793A\u522B\u4EBA\u5982\u4F55\u9009\u578B\u6A21\u578B\u3001\u6781\u7B80\u6280\u672F\u6808\u4E0E\u628A\u6708\u7B97\u529B\u538B\u5230\u51E0\u5341\u5143\u3002 </p>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                      createVNode("span", { class: "flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-base" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:rocket-launch-bold",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("span", { class: "text-xs text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1" }, [
                        createVNode("span", null, "\u6D4F\u89C8\u771F\u5B9E\u6848\u4F8B"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ])
                    ]),
                    createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, " \u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u843D\u5730\u9879\u76EE "),
                    createVNode("p", { class: "mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u771F\u5B9E\u6848\u4F8B\u5E93\uFF1A\u900F\u660E\u5C55\u793A\u522B\u4EBA\u5982\u4F55\u9009\u578B\u6A21\u578B\u3001\u6781\u7B80\u6280\u672F\u6808\u4E0E\u628A\u6708\u7B97\u529B\u538B\u5230\u51E0\u5341\u5143\u3002 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/tools"),
              class: "group rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-amber-400 dark:hover:border-amber-500/50 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between mb-3"${_scopeId2}><span class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-base"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:wrench-bold",
                    class: "w-5 h-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="text-xs text-amber-600 dark:text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1"${_scopeId2}><span${_scopeId2}>\u6D4F\u89C8\u519B\u706B\u5E93</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div><h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"${_scopeId2}> \u4E00\u4EBA\u516C\u53F8\u5168\u6808\u5DE5\u5177\u7BB1 </h3><p class="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId2}> \u7CBE\u9009\u51FA\u6D77\u6536\u6B3E\u3001\u96F6\u8FD0\u7EF4\u90E8\u7F72\u3001UI \u751F\u6210\u4E0E\u5168\u6808\u6570\u636E\u5E93\u5FC5\u5907\u795E\u5668\uFF0C\u7AEF\u5230\u7AEF\u6781\u7B80\u63D0\u6548\u3002 </p>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                      createVNode("span", { class: "flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-base" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:wrench-bold",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("span", { class: "text-xs text-amber-600 dark:text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1" }, [
                        createVNode("span", null, "\u6D4F\u89C8\u519B\u706B\u5E93"),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ])
                    ]),
                    createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" }, " \u4E00\u4EBA\u516C\u53F8\u5168\u6808\u5DE5\u5177\u7BB1 "),
                    createVNode("p", { class: "mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u7CBE\u9009\u51FA\u6D77\u6536\u6B3E\u3001\u96F6\u8FD0\u7EF4\u90E8\u7F72\u3001UI \u751F\u6210\u4E0E\u5168\u6808\u6570\u636E\u5E93\u5FC5\u5907\u795E\u5668\uFF0C\u7AEF\u5230\u7AEF\u6781\u7B80\u63D0\u6548\u3002 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-16" }, [
                createVNode(_component_HoxiPageHeader, {
                  title: _ctx.$t("hoxi.savings.title"),
                  subtitle: _ctx.$t("hoxi.savings.subtitle")
                }, null, 8, ["title", "subtitle"]),
                createVNode("section", { class: "mt-10 rounded-2xl border border-amber-200/70 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/20 dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-900/80 p-6 md:p-8 shadow-2xs" }, [
                  createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                    createVNode("span", { class: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800/60" }, [
                      createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-500" }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.savings.decisionBadge")), 1)
                    ]),
                    createVNode("h2", { class: "text-base md:text-lg font-bold text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.savings.decisionTitle")), 1)
                  ]),
                  createVNode("p", { class: "text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.savings.decisionDesc")), 1),
                  createVNode("div", { class: "mt-6 grid gap-4 md:grid-cols-3" }, [
                    createVNode("div", { class: "rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 flex flex-col justify-between" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", { class: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono" }, "1"),
                          createVNode("h3", { class: "text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug" }, toDisplayString(_ctx.$t("hoxi.savings.rule1Title")), 1)
                        ]),
                        createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.savings.rule1Desc")), 1)
                      ]),
                      createVNode("div", { class: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between" }, [
                        createVNode("span", { class: "text-[11px] text-slate-400" }, "\u63A8\u8350\u65B9\u6848"),
                        createVNode(_component_NuxtLink, {
                          to: unref(localePath)("/gateways"),
                          class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u6309\u91CF\u4E2D\u8F6C"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3 h-3"
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ])
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 flex flex-col justify-between" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", { class: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono" }, "2"),
                          createVNode("h3", { class: "text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug" }, toDisplayString(_ctx.$t("hoxi.savings.rule2Title")), 1)
                        ]),
                        createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.savings.rule2Desc")), 1)
                      ]),
                      createVNode("div", { class: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between" }, [
                        createVNode("span", { class: "text-[11px] text-slate-400" }, "\u63A8\u8350\u65B9\u6848"),
                        createVNode(_component_NuxtLink, {
                          to: unref(localePath)("/coding-plans"),
                          class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Cursor / Copilot"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3 h-3"
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ])
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 flex flex-col justify-between" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "flex items-center gap-2 mb-2" }, [
                          createVNode("span", { class: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono" }, "3"),
                          createVNode("h3", { class: "text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-snug" }, toDisplayString(_ctx.$t("hoxi.savings.rule3Title")), 1)
                        ]),
                        createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.savings.rule3Desc")), 1)
                      ]),
                      createVNode("div", { class: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between" }, [
                        createVNode("span", { class: "text-[11px] text-slate-400" }, "\u63A8\u8350\u65B9\u6848"),
                        createVNode(_component_NuxtLink, {
                          to: unref(localePath)("/models"),
                          class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u67E5\u770B\u6A21\u578B\u699C\u5355"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3 h-3"
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ])
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-14 md:mt-20" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-sm" }, "\u{1F3C6}"),
                        createVNode("h2", { class: "text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.savings.modelsSectionTitle")), 1)
                      ]),
                      createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.savings.modelsSectionNote")), 1)
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/models"),
                      class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.savings.viewAllModels")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(featuredModels.value, (m) => {
                      return openBlock(), createBlock("div", {
                        key: m.slug,
                        class: "flex flex-col justify-between rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"
                      }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-start justify-between gap-2 mb-2" }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localePath)(`/models/${m.slug}`),
                              class: "font-semibold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_HoxiVendorDot, {
                                  vendor: m.vendorInfo
                                }, null, 8, ["vendor"]),
                                createVNode("span", { class: "truncate" }, toDisplayString(m.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            m.badges && m.badges[0] ? (openBlock(), createBlock(_component_HoxiTag, {
                              key: 0,
                              tone: "positive",
                              class: "shrink-0 scale-90"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(m.badges[0]), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed" }, toDisplayString(m.description), 1)
                        ]),
                        createVNode("div", { class: "mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "block text-[10px] text-slate-400" }, "\u7EFC\u5408\u6DF7\u5408\u5355\u4EF7"),
                            createVNode("span", { class: "text-sm font-bold text-slate-800 dark:text-slate-200 tabular-nums" }, [
                              createTextVNode(" \xA5" + toDisplayString(unref(formatPrice)(m.blendedPrice)) + " ", 1),
                              createVNode("span", { class: "text-[10px] font-normal text-slate-400" }, "/ M")
                            ])
                          ]),
                          createVNode("div", { class: "text-right" }, [
                            createVNode("span", { class: "block text-[10px] text-slate-400" }, "\u7F16\u7A0B\u4F53\u611F\u5206"),
                            createVNode("span", { class: "text-xs font-semibold text-amber-600 dark:text-amber-400 tabular-nums" }, toDisplayString(m.scores.coding || m.scores.overall || "\u2014") + " \u5206 ", 1)
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { class: "mt-14 md:mt-20" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-sm" }, "\u26A1"),
                        createVNode("h2", { class: "text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.savings.gatewaysSectionTitle")), 1)
                      ]),
                      createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.savings.gatewaysSectionNote")), 1)
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/gateways"),
                      class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.savings.viewAllGateways")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(featuredGateways.value, (gw) => {
                      return openBlock(), createBlock("div", {
                        key: gw.id,
                        class: "flex flex-col justify-between rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"
                      }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-start justify-between gap-2 mb-2" }, [
                            createVNode("div", null, [
                              createVNode("h3", { class: "font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5" }, [
                                createVNode("span", null, toDisplayString(gw.name), 1)
                              ]),
                              createVNode("span", { class: "text-xs font-mono text-slate-400 mt-0.5 block" }, toDisplayString(gw.domain), 1)
                            ]),
                            gw.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                              key: 0,
                              tone: gw.badgeTone || "positive"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(gw.badge), 1)
                              ]),
                              _: 2
                            }, 1032, ["tone"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mt-3 flex flex-wrap gap-1.5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(gw.features.slice(0, 3), (feat) => {
                              return openBlock(), createBlock("span", {
                                key: feat,
                                class: "px-2 py-0.5 rounded text-[10px] bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                              }, toDisplayString(feat), 1);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "block text-[10px] text-slate-400" }, "\u5B9E\u6D4B\u4F4E\u81F3"),
                            createVNode("span", { class: "text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums" }, toDisplayString(gw.priceLabel), 1)
                          ]),
                          createVNode("div", { class: "text-right" }, [
                            createVNode("span", { class: "block text-[10px] text-slate-400" }, "\u76F8\u5BF9\u5B98\u65B9\u964D\u8D39"),
                            createVNode("span", { class: "text-xs font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums" }, " \u964D " + toDisplayString(gw.savingsPercent) + "% ", 1)
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { class: "mt-14 md:mt-20" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-sm" }, "\u{1F4E6}"),
                        createVNode("h2", { class: "text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.savings.plansSectionTitle")), 1)
                      ]),
                      createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.savings.plansSectionNote")), 1)
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/coding-plans"),
                      class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.savings.viewAllPlans")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(featuredPlans.value, (plan) => {
                      return openBlock(), createBlock("div", {
                        key: plan.slug,
                        class: "flex flex-col justify-between rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"
                      }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-start justify-between gap-2 mb-2" }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localePath)(`/coding-plans/${plan.slug}`),
                              class: "font-bold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(plan.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            createVNode("span", { class: "px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0" }, toDisplayString(plan.vendorLabel), 1)
                          ]),
                          createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mt-2" }, toDisplayString(plan.quotaNote), 1)
                        ]),
                        createVNode("div", { class: "mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between" }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "block text-[10px] text-slate-400" }, "\u53C2\u8003\u6708\u8D39"),
                            createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white tabular-nums" }, toDisplayString(plan.priceLabel), 1)
                          ]),
                          createVNode(_component_NuxtLink, {
                            to: unref(localePath)(`/coding-plans/${plan.slug}`),
                            class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u5B9E\u6D4B\u5EFA\u8BAE"),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3 h-3"
                              })
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("section", { class: "mt-14 md:mt-20" }, [
                  createVNode("div", { class: "pb-4 border-b border-slate-100 dark:border-slate-800" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 text-sm" }, "\u{1F6E0}\uFE0F"),
                      createVNode("h2", { class: "text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.savings.toolsSectionTitle")), 1)
                    ]),
                    createVNode("p", { class: "mt-1 text-xs text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.savings.toolsSectionNote")), 1)
                  ]),
                  createVNode("div", { class: "mt-6 grid gap-4 sm:grid-cols-2" }, [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/projects"),
                      class: "group rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                          createVNode("span", { class: "flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-base" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:rocket-launch-bold",
                              class: "w-5 h-5"
                            })
                          ]),
                          createVNode("span", { class: "text-xs text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1" }, [
                            createVNode("span", null, "\u6D4F\u89C8\u771F\u5B9E\u6848\u4F8B"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5"
                            })
                          ])
                        ]),
                        createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" }, " \u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u843D\u5730\u9879\u76EE "),
                        createVNode("p", { class: "mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u771F\u5B9E\u6848\u4F8B\u5E93\uFF1A\u900F\u660E\u5C55\u793A\u522B\u4EBA\u5982\u4F55\u9009\u578B\u6A21\u578B\u3001\u6781\u7B80\u6280\u672F\u6808\u4E0E\u628A\u6708\u7B97\u529B\u538B\u5230\u51E0\u5341\u5143\u3002 ")
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/tools"),
                      class: "group rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-amber-400 dark:hover:border-amber-500/50 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                          createVNode("span", { class: "flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-base" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:wrench-bold",
                              class: "w-5 h-5"
                            })
                          ]),
                          createVNode("span", { class: "text-xs text-amber-600 dark:text-amber-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-1" }, [
                            createVNode("span", null, "\u6D4F\u89C8\u519B\u706B\u5E93"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5"
                            })
                          ])
                        ]),
                        createVNode("h3", { class: "text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" }, " \u4E00\u4EBA\u516C\u53F8\u5168\u6808\u5DE5\u5177\u7BB1 "),
                        createVNode("p", { class: "mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed" }, " \u7CBE\u9009\u51FA\u6D77\u6536\u6B3E\u3001\u96F6\u8FD0\u7EF4\u90E8\u7F72\u3001UI \u751F\u6210\u4E0E\u5168\u6808\u6570\u636E\u5E93\u5FC5\u5907\u795E\u5668\uFF0C\u7AEF\u5230\u7AEF\u6781\u7B80\u63D0\u6548\u3002 ")
                      ]),
                      _: 1
                    }, 8, ["to"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/savings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
