import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { f as useI18n, aM as useLocaleRouter, u as useHead, z as useFetch, b as _sfc_main$G, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_3 from './HoxiTag-wDTaVaC3.mjs';
import { defineComponent, computed, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHoxiModels, s as sortModels } from './useHoxiModels-BUR4ZXwz.mjs';
import { h as hoxiGateways } from './gateways-tgDca7H5.mjs';
import { h as hoxiPlans } from './plans-D8XOOLan.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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
    computed(() => sortModels(models.value, "valueIndex", "desc").slice(0, 4));
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
      const _component_UIcon = _sfc_main$G;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiTag = __nuxt_component_3;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}><div class="text-center max-w-3xl mx-auto mb-10 md:mb-14"${_scopeId}><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.title"))}</h1></div><section class="mt-14 md:mt-20"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:lightning-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.gatewaysSectionTitle"))}</h2></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.gatewaysSectionNote"))}</p></div>`);
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
              _push2(`<div class="flex flex-col justify-between rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors"${_scopeId}><div${_scopeId}><div class="flex items-start justify-between gap-2 mb-2"${_scopeId}><div${_scopeId}><h3 class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(gw.name)}</span></h3><span class="text-xs font-mono text-slate-400 mt-0.5 block dark:text-slate-500"${_scopeId}>${ssrInterpolate(gw.domain)}</span></div>`);
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
              _push2(`<!--]--></div></div><div class="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"${_scopeId}><div${_scopeId}><span class="block text-[10px] text-slate-400 dark:text-slate-500"${_scopeId}>\u4F4E\u81F3</span><span class="text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums"${_scopeId}>${ssrInterpolate(gw.priceLabel)}</span></div><div class="text-right"${_scopeId}><span class="block text-[10px] text-slate-400 dark:text-slate-500"${_scopeId}>\u6BD4\u5B98\u65B9\u4EF7</span><span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums"${_scopeId}> \u964D ${ssrInterpolate(gw.savingsPercent)}% </span></div></div></div>`);
            });
            _push2(`<!--]--></div></section><section class="mt-14 md:mt-20"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:package-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.plansSectionTitle"))}</h2></div><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.savings.plansSectionNote"))}</p></div>`);
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
              _push2(`<span class="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0"${_scopeId}>${ssrInterpolate(plan.vendorLabel)}</span></div><p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mt-2"${_scopeId}>${ssrInterpolate(plan.quotaNote)}</p></div><div class="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"${_scopeId}><div${_scopeId}><span class="block text-[10px] text-slate-400 dark:text-slate-500"${_scopeId}>\u53C2\u8003\u6708\u8D39</span><span class="text-sm font-bold text-slate-900 dark:text-white tabular-nums"${_scopeId}>${ssrInterpolate(plan.priceLabel)}</span></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/coding-plans/${plan.slug}`),
                class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u8BE6\u60C5</span>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3 h-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", null, "\u8BE6\u60C5"),
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
            _push2(`<!--]--></div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-16" }, [
                createVNode("div", { class: "text-center max-w-3xl mx-auto mb-10 md:mb-14" }, [
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.savings.title")), 1)
                ]),
                createVNode("section", { class: "mt-14 md:mt-20" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-sm" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:lightning-bold",
                            class: "w-4 h-4"
                          })
                        ]),
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
                              createVNode("span", { class: "text-xs font-mono text-slate-400 mt-0.5 block dark:text-slate-500" }, toDisplayString(gw.domain), 1)
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
                            createVNode("span", { class: "block text-[10px] text-slate-400 dark:text-slate-500" }, "\u4F4E\u81F3"),
                            createVNode("span", { class: "text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums" }, toDisplayString(gw.priceLabel), 1)
                          ]),
                          createVNode("div", { class: "text-right" }, [
                            createVNode("span", { class: "block text-[10px] text-slate-400 dark:text-slate-500" }, "\u6BD4\u5B98\u65B9\u4EF7"),
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
                        createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-sm" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:package-bold",
                            class: "w-4 h-4"
                          })
                        ]),
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
                            createVNode("span", { class: "block text-[10px] text-slate-400 dark:text-slate-500" }, "\u53C2\u8003\u6708\u8D39"),
                            createVNode("span", { class: "text-sm font-bold text-slate-900 dark:text-white tabular-nums" }, toDisplayString(plan.priceLabel), 1)
                          ]),
                          createVNode(_component_NuxtLink, {
                            to: unref(localePath)(`/coding-plans/${plan.slug}`),
                            class: "text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u8BE6\u60C5"),
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
