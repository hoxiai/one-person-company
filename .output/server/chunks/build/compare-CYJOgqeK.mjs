import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import __nuxt_component_1 from './HoxiPageHeader-BFh30DFm.mjs';
import __nuxt_component_7 from './HoxiSectionLabel-BlLbr3V0.mjs';
import __nuxt_component_3 from './HoxiVendorDot-BQ5SFhuO.mjs';
import { e as useI18n, aM as useLocaleRouter, C as useRoute, r as useRouter, bj as useSeoMeta, bk as useJsonLd, a as __nuxt_component_3$1 } from './server.mjs';
import { defineComponent, computed, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHoxiModels, f as formatScore, a as formatPrice, b as formatContext, c as formatTps, d as formatLatency, e as billingWarnings } from './useHoxiModels-DpcwauH-.mjs';
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

const MAX_MODELS = 4;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "compare",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const route = useRoute();
    const router = useRouter();
    const { models } = useHoxiModels();
    const requested = computed(() => String(route.query.models || "").split(",").map((item) => item.trim()).filter(Boolean));
    const selected = computed(() => requested.value.slice(0, MAX_MODELS));
    const overflowed = computed(() => requested.value.length > MAX_MODELS);
    const chosen = computed(() => selected.value.map((slug) => models.value.find((item) => item.slug === slug)).filter((item) => item !== void 0));
    const toggle = (slug) => {
      const next = selected.value.includes(slug) ? selected.value.filter((item) => item !== slug) : [...selected.value, slug].slice(0, MAX_MODELS);
      router.replace({ query: next.length ? { models: next.join(",") } : {} });
    };
    const currency = (model) => model.price.currency === "USD" ? "$" : "\xA5";
    const rows = computed(() => [
      {
        key: "overall",
        label: t("hoxi.models.columns.overall"),
        numeric: true,
        value: (model) => formatScore(model.scores.overall)
      },
      {
        key: "blended",
        label: t("hoxi.models.columns.blended"),
        numeric: true,
        value: (model) => `\xA5${formatPrice(model.blendedPrice)}`
      },
      {
        key: "input",
        label: t("hoxi.models.columns.input"),
        numeric: true,
        value: (model) => `${currency(model)}${formatPrice(model.price.input)}`
      },
      {
        key: "output",
        label: t("hoxi.models.columns.output"),
        numeric: true,
        value: (model) => `${currency(model)}${formatPrice(model.price.output)}`
      },
      {
        key: "cacheRead",
        label: t("hoxi.model.priceCacheRead"),
        numeric: true,
        value: (model) => model.price.cacheRead === void 0 ? "\u2014" : `${currency(model)}${formatPrice(model.price.cacheRead)}`
      },
      {
        key: "context",
        label: t("hoxi.models.columns.context"),
        numeric: true,
        value: (model) => formatContext(model.contextWindow)
      },
      {
        key: "maxOutput",
        label: t("hoxi.model.maxOutput"),
        numeric: true,
        value: (model) => model.maxOutputTokens ? formatContext(model.maxOutputTokens) : "\u2014"
      },
      {
        key: "tps",
        label: t("hoxi.models.columns.tps"),
        numeric: true,
        value: (model) => {
          var _a;
          return formatTps((_a = model.perf) == null ? void 0 : _a.tps);
        }
      },
      {
        key: "ttft",
        label: t("hoxi.models.columns.ttft"),
        numeric: true,
        value: (model) => {
          var _a;
          return formatLatency((_a = model.perf) == null ? void 0 : _a.ttft);
        }
      },
      {
        key: "modalities",
        label: t("hoxi.compare.modalities"),
        numeric: false,
        value: (model) => Array.isArray(model.modalities) ? model.modalities.join("\u3001") : "\u2014"
      },
      {
        key: "reasoning",
        label: t("hoxi.model.tags.reasoning"),
        numeric: false,
        // 三态:未核实时显示「—」,不写成「否」
        value: (model) => model.reasoning === void 0 ? "\u2014" : model.reasoning ? t("hoxi.compare.yes") : t("hoxi.compare.no")
      },
      {
        key: "summary",
        label: t("hoxi.compare.summary"),
        numeric: false,
        value: (model) => model.summary
      }
    ]);
    const warningText = (warning) => {
      const value = warning.text;
      switch (warning.kind) {
        case "tiers":
          return t("hoxi.switch.warnings.tiers", { value });
        case "timeWindows":
          return t("hoxi.switch.warnings.timeWindows", { value });
        case "promo":
          return t("hoxi.switch.warnings.promo", { value });
        case "batch":
          return t("hoxi.switch.warnings.batch", { value });
        case "cache":
          return t("hoxi.switch.warnings.cache", { value });
        case "modality":
          return t("hoxi.switch.warnings.modality", { value });
        case "unstructured":
          return t("hoxi.switch.warnings.unstructured", { value });
      }
    };
    const compareSeoTitle = computed(() => {
      return chosen.value.length >= 2 ? t("hoxi.compare.seoTitleWith", { names: chosen.value.map((item) => item.name).join(" vs ") }) : t("hoxi.compare.seoTitle");
    });
    const compareSeoDescription = computed(() => {
      if (chosen.value.length >= 2) {
        const names = chosen.value.map((item) => item.name).join(" \u4E0E ");
        return `${names} \u5168\u7EF4\u5EA6\u5BF9\u6BD4\uFF1A\u7EFC\u5408\u5F97\u5206\u3001\u8F93\u5165\u8F93\u51FA\u4EF7\u683C\u3001\u6DF7\u5408\u5355\u4EF7\u3001\u4E0A\u4E0B\u6587\u957F\u5EA6\u4E0E\u63A8\u7406\u901F\u5EA6\u9762\u5BF9\u9762\u6BD4\u5BF9\u3002`;
      }
      return t("hoxi.compare.subtitle");
    });
    useSeoMeta({
      title: () => compareSeoTitle.value,
      description: () => compareSeoDescription.value,
      ogTitle: () => compareSeoTitle.value,
      ogDescription: () => compareSeoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => compareSeoTitle.value,
      twitterDescription: () => compareSeoDescription.value,
      keywords: "AI \u6A21\u578B\u5BF9\u6BD4, \u5927\u6A21\u578B\u4EF7\u683C\u5BF9\u6BD4, \u6A21\u578B\u53C2\u6570\u5BF9\u6BD4, API \u5355\u4EF7\u5BF9\u6BD4"
    });
    useJsonLd("hoxi-compare-jsonld", computed(() => [
      {
        "@type": "WebPage",
        name: compareSeoTitle.value,
        description: compareSeoDescription.value,
        url: localePath("/compare")
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "\u9996\u9875", item: localePath("/") },
          { "@type": "ListItem", position: 2, name: t("hoxi.compare.title"), item: localePath("/compare") }
        ]
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_HoxiPageHeader = __nuxt_component_1;
      const _component_HoxiSectionLabel = __nuxt_component_7;
      const _component_HoxiVendorDot = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_3$1;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiPageHeader, {
              title: _ctx.$t("hoxi.compare.title"),
              subtitle: _ctx.$t("hoxi.compare.subtitle")
            }, null, _parent2, _scopeId));
            _push2(`<section class="mt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.compare.pick", { max: MAX_MODELS }))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.compare.pick", { max: MAX_MODELS })), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-4 flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(models), (item) => {
              _push2(`<button type="button" class="${ssrRenderClass([selected.value.includes(item.slug) ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50" : "bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-500 dark:hover:text-blue-400 border border-transparent", "rounded-full px-2.5 py-0.5 text-xs transition-colors"])}"${ssrRenderAttr("aria-pressed", selected.value.includes(item.slug))}${_scopeId}><span class="inline-flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiVendorDot, {
                vendor: item.vendorInfo
              }, null, _parent2, _scopeId));
              _push2(`${ssrInterpolate(item.name)}</span></button>`);
            });
            _push2(`<!--]--></div>`);
            if (overflowed.value) {
              _push2(`<p class="mt-3 text-xs text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.compare.overflow", { max: MAX_MODELS }))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section>`);
            if (chosen.value.length < 2) {
              _push2(`<p class="mt-8 text-sm leading-7 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.compare.needMore"))}</p>`);
            } else {
              _push2(`<div class="mt-8 overflow-x-auto"${_scopeId}><table class="w-full border-collapse text-sm" style="${ssrRenderStyle({ minWidth: `${180 + chosen.value.length * 160}px` })}"${_scopeId}><caption class="sr-only"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.compare.title"))}</caption><thead${_scopeId}><tr class="border-b border-slate-200 dark:border-slate-800"${_scopeId}><th scope="col" class="sticky left-0 z-10 bg-white dark:bg-slate-950 py-2 pr-4 text-left text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.compare.field"))}</th><!--[-->`);
              ssrRenderList(chosen.value, (item) => {
                var _a;
                _push2(`<th scope="col" class="py-2 pl-4 text-left align-bottom"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)(`/models/${item.slug}`),
                  class: "flex items-center gap-1.5 text-sm font-medium text-slate-800 dark:text-slate-100 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_HoxiVendorDot, {
                        vendor: item.vendorInfo
                      }, null, _parent3, _scopeId2));
                      _push3(` ${ssrInterpolate(item.name)}`);
                    } else {
                      return [
                        createVNode(_component_HoxiVendorDot, {
                          vendor: item.vendorInfo
                        }, null, 8, ["vendor"]),
                        createTextVNode(" " + toDisplayString(item.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<span class="mt-0.5 block text-xs font-normal text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(((_a = item.vendorInfo) == null ? void 0 : _a.nameZh) || item.vendor)}</span></th>`);
              });
              _push2(`<!--]--></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(rows.value, (row) => {
                _push2(`<tr class="border-b border-slate-100 dark:border-slate-800/80"${_scopeId}><th scope="row" class="sticky left-0 z-10 bg-white dark:bg-slate-950 py-3 pr-4 text-left text-xs font-normal text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(row.label)}</th><!--[-->`);
                ssrRenderList(chosen.value, (item) => {
                  _push2(`<td class="${ssrRenderClass([row.numeric ? "tabular-nums whitespace-nowrap" : "", "py-3 pl-4 align-top text-slate-700 dark:text-slate-300 font-medium"])}"${_scopeId}>${ssrInterpolate(row.value(item))}</td>`);
                });
                _push2(`<!--]--></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            }
            if (chosen.value.length >= 2) {
              _push2(`<section class="mt-10 border-t border-slate-100 dark:border-slate-800 pt-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.compare.billingTitle"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.compare.billingTitle")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-4 grid gap-8 md:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(chosen.value, (item) => {
                _push2(`<div${_scopeId}><p class="text-sm font-medium text-slate-800 dark:text-slate-200"${_scopeId}>${ssrInterpolate(item.name)}</p><ul class="mt-2 space-y-1.5 text-xs leading-6 text-slate-500 dark:text-slate-400"${_scopeId}><!--[-->`);
                ssrRenderList(unref(billingWarnings)(item), (warning, index) => {
                  _push2(`<li${_scopeId}>${ssrInterpolate(warningText(warning))}</li>`);
                });
                _push2(`<!--]--></ul></div>`);
              });
              _push2(`<!--]--></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-16" }, [
                createVNode(_component_HoxiPageHeader, {
                  title: _ctx.$t("hoxi.compare.title"),
                  subtitle: _ctx.$t("hoxi.compare.subtitle")
                }, null, 8, ["title", "subtitle"]),
                createVNode("section", { class: "mt-8" }, [
                  createVNode(_component_HoxiSectionLabel, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.compare.pick", { max: MAX_MODELS })), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-4 flex flex-wrap gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(models), (item) => {
                      return openBlock(), createBlock("button", {
                        key: item.slug,
                        type: "button",
                        class: ["rounded-full px-2.5 py-0.5 text-xs transition-colors", selected.value.includes(item.slug) ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50" : "bg-slate-50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-500 dark:hover:text-blue-400 border border-transparent"],
                        "aria-pressed": selected.value.includes(item.slug),
                        onClick: ($event) => toggle(item.slug)
                      }, [
                        createVNode("span", { class: "inline-flex items-center gap-1.5" }, [
                          createVNode(_component_HoxiVendorDot, {
                            vendor: item.vendorInfo
                          }, null, 8, ["vendor"]),
                          createTextVNode(toDisplayString(item.name), 1)
                        ])
                      ], 10, ["aria-pressed", "onClick"]);
                    }), 128))
                  ]),
                  overflowed.value ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "mt-3 text-xs text-slate-400 dark:text-slate-500"
                  }, toDisplayString(_ctx.$t("hoxi.compare.overflow", { max: MAX_MODELS })), 1)) : createCommentVNode("", true)
                ]),
                chosen.value.length < 2 ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "mt-8 text-sm leading-7 text-slate-500 dark:text-slate-400"
                }, toDisplayString(_ctx.$t("hoxi.compare.needMore")), 1)) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mt-8 overflow-x-auto"
                }, [
                  createVNode("table", {
                    class: "w-full border-collapse text-sm",
                    style: { minWidth: `${180 + chosen.value.length * 160}px` }
                  }, [
                    createVNode("caption", { class: "sr-only" }, toDisplayString(_ctx.$t("hoxi.compare.title")), 1),
                    createVNode("thead", null, [
                      createVNode("tr", { class: "border-b border-slate-200 dark:border-slate-800" }, [
                        createVNode("th", {
                          scope: "col",
                          class: "sticky left-0 z-10 bg-white dark:bg-slate-950 py-2 pr-4 text-left text-xs font-medium tracking-wide text-slate-400 dark:text-slate-500"
                        }, toDisplayString(_ctx.$t("hoxi.compare.field")), 1),
                        (openBlock(true), createBlock(Fragment, null, renderList(chosen.value, (item) => {
                          var _a;
                          return openBlock(), createBlock("th", {
                            key: item.slug,
                            scope: "col",
                            class: "py-2 pl-4 text-left align-bottom"
                          }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localePath)(`/models/${item.slug}`),
                              class: "flex items-center gap-1.5 text-sm font-medium text-slate-800 dark:text-slate-100 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_HoxiVendorDot, {
                                  vendor: item.vendorInfo
                                }, null, 8, ["vendor"]),
                                createTextVNode(" " + toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            createVNode("span", { class: "mt-0.5 block text-xs font-normal text-slate-500 dark:text-slate-400" }, toDisplayString(((_a = item.vendorInfo) == null ? void 0 : _a.nameZh) || item.vendor), 1)
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(rows.value, (row) => {
                        return openBlock(), createBlock("tr", {
                          key: row.key,
                          class: "border-b border-slate-100 dark:border-slate-800/80"
                        }, [
                          createVNode("th", {
                            scope: "row",
                            class: "sticky left-0 z-10 bg-white dark:bg-slate-950 py-3 pr-4 text-left text-xs font-normal text-slate-500 dark:text-slate-400"
                          }, toDisplayString(row.label), 1),
                          (openBlock(true), createBlock(Fragment, null, renderList(chosen.value, (item) => {
                            return openBlock(), createBlock("td", {
                              key: item.slug,
                              class: ["py-3 pl-4 align-top text-slate-700 dark:text-slate-300 font-medium", row.numeric ? "tabular-nums whitespace-nowrap" : ""]
                            }, toDisplayString(row.value(item)), 3);
                          }), 128))
                        ]);
                      }), 128))
                    ])
                  ], 4)
                ])),
                chosen.value.length >= 2 ? (openBlock(), createBlock("section", {
                  key: 2,
                  class: "mt-10 border-t border-slate-100 dark:border-slate-800 pt-8"
                }, [
                  createVNode(_component_HoxiSectionLabel, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.compare.billingTitle")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-4 grid gap-8 md:grid-cols-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(chosen.value, (item) => {
                      return openBlock(), createBlock("div", {
                        key: item.slug
                      }, [
                        createVNode("p", { class: "text-sm font-medium text-slate-800 dark:text-slate-200" }, toDisplayString(item.name), 1),
                        createVNode("ul", { class: "mt-2 space-y-1.5 text-xs leading-6 text-slate-500 dark:text-slate-400" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(billingWarnings)(item), (warning, index) => {
                            return openBlock(), createBlock("li", { key: index }, toDisplayString(warningText(warning)), 1);
                          }), 128))
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/compare.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
