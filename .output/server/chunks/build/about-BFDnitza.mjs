import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aM as useLocaleRouter, bj as useSeoMeta, bk as useJsonLd, b as _sfc_main$G } from './server.mjs';
import __nuxt_component_8 from './HoxiHairlineLink-6_pMzXOE.mjs';
import { defineComponent, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHoxiModels } from './useHoxiModels-DpcwauH-.mjs';
import { u as useHoxiCommunity } from './useHoxiCommunity-C73oY16n.mjs';
import '../nitro/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'drizzle-orm';
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
import 'zod';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { models, vendors, updatedAt } = useHoxiModels();
    const { isOpen: communityOpen } = useHoxiCommunity();
    const sections = computed(() => [
      {
        key: "who",
        title: t("hoxi.about.who.title"),
        paragraphs: [t("hoxi.about.who.p1"), t("hoxi.about.who.p2")]
      },
      {
        key: "what",
        title: t("hoxi.about.what.title"),
        paragraphs: [
          t("hoxi.about.what.p1"),
          t("hoxi.about.what.p2", { count: models.value.length, vendors: vendors.value.length })
        ]
      },
      {
        key: "how",
        title: t("hoxi.about.how.title"),
        paragraphs: [
          t("hoxi.about.how.p1"),
          t("hoxi.about.how.p2"),
          t("hoxi.about.how.p3", { date: updatedAt.value || "\u2014" }),
          t("hoxi.about.how.p4", { apiPath: "/api/hoxi/models" })
        ]
      },
      {
        key: "limits",
        title: t("hoxi.about.limits.title"),
        paragraphs: [t("hoxi.about.limits.p1"), t("hoxi.about.limits.p2"), t("hoxi.about.limits.p3")]
      }
    ]);
    const exploreLinks = computed(() => [
      { to: "/readiness", label: t("hoxi.nav.readiness") },
      { to: "/projects", label: t("hoxi.nav.projects") },
      { to: "/tools", label: t("hoxi.nav.tools") },
      { to: "/models", label: t("hoxi.nav.models") },
      { to: "/gateways", label: t("hoxi.nav.gateways") },
      { to: "/coding-plans", label: t("hoxi.nav.plans") },
      { to: "/blog", label: t("hoxi.nav.posts") },
      { to: "/refactoring-the-self", label: "\u300A\u5E95\u5C42\u91CD\u6784\u300B" }
    ]);
    const seoTitle = computed(() => String(t("hoxi.about.seoTitle")));
    const seoDescription = computed(() => String(t("hoxi.about.subtitle")));
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value
    });
    useJsonLd("hoxi-about-jsonld", computed(() => [
      {
        "@type": "AboutPage",
        name: seoTitle.value,
        description: seoDescription.value,
        url: localePath("/about")
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("hoxi.nav.home"), item: localePath("/") },
          { "@type": "ListItem", position: 2, name: t("hoxi.nav.about"), item: localePath("/about") }
        ]
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$G;
      const _component_HoxiHairlineLink = __nuxt_component_8;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-20 max-w-3xl mx-auto"${_scopeId}><div class="text-center max-w-2xl mx-auto mb-12 md:mb-16"${_scopeId}><span class="inline-block text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full mb-3 border border-amber-200/60 dark:border-amber-800/60"${_scopeId}> \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 </span><h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.about.title"))}</h1><p class="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.about.subtitle"))}</p></div><div class="rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60 p-6 md:p-8 mb-12"${_scopeId}><div class="flex flex-col sm:flex-row items-center sm:items-start gap-6"${_scopeId}><div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-black text-2xl shrink-0"${_scopeId}> \u559C </div><div class="text-center sm:text-left flex-1"${_scopeId}><h2 class="text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>\u53EF\u4E50 (Coller)</h2><p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.authorIntro"))}</p><div class="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400"${_scopeId}><span class="flex items-center gap-1.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:cpu",
              class: "w-4 h-4 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(models).length)} \u4E2A\u6A21\u578B \xB7 ${ssrInterpolate(unref(vendors).length)} \u5BB6\u5382\u5546</span></span>`);
            if (unref(updatedAt)) {
              _push2(`<span class="flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:calendar-check",
                class: "w-4 h-4 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u6570\u636E\u6838\u5BF9\u4E8E ${ssrInterpolate(unref(updatedAt))}</span></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button type="button" class="flex items-center gap-1.5 text-amber-700 dark:text-amber-300 hover:underline"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chat-circle-dots-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u52A0\u5FAE\u4FE1 \xB7 \u8FDB\u4E00\u4EBA\u516C\u53F8\u7FA4</span></button></div></div></div></div><div class="space-y-12 md:space-y-14"${_scopeId}><!--[-->`);
            ssrRenderList(sections.value, (block) => {
              _push2(`<section class="border-t border-slate-100 dark:border-slate-800/80 pt-8"${_scopeId}><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4"${_scopeId}>${ssrInterpolate(block.title)}</h2><div class="space-y-4 text-sm md:text-[15px] leading-8 text-slate-600 dark:text-slate-300"${_scopeId}><!--[-->`);
              ssrRenderList(block.paragraphs, (paragraph, index) => {
                _push2(`<p${_scopeId}>${ssrInterpolate(paragraph)}</p>`);
              });
              _push2(`<!--]--></div></section>`);
            });
            _push2(`<!--]--><section class="border-t border-slate-100 dark:border-slate-800/80 pt-8"${_scopeId}><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.about.explore"))}</h2><div class="flex flex-wrap gap-x-6 gap-y-3 text-sm"${_scopeId}><!--[-->`);
            ssrRenderList(exploreLinks.value, (link) => {
              _push2(ssrRenderComponent(_component_HoxiHairlineLink, {
                key: link.to,
                to: unref(localePath)(link.to)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></section></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-20 max-w-3xl mx-auto" }, [
                createVNode("div", { class: "text-center max-w-2xl mx-auto mb-12 md:mb-16" }, [
                  createVNode("span", { class: "inline-block text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full mb-3 border border-amber-200/60 dark:border-amber-800/60" }, " \u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357 "),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.about.title")), 1),
                  createVNode("p", { class: "mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.about.subtitle")), 1)
                ]),
                createVNode("div", { class: "rounded-3xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60 p-6 md:p-8 mb-12" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row items-center sm:items-start gap-6" }, [
                    createVNode("div", { class: "w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-black text-2xl shrink-0" }, " \u559C "),
                    createVNode("div", { class: "text-center sm:text-left flex-1" }, [
                      createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white" }, "\u53EF\u4E50 (Coller)"),
                      createVNode("p", { class: "mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.home.authorIntro")), 1),
                      createVNode("div", { class: "mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400" }, [
                        createVNode("span", { class: "flex items-center gap-1.5" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:cpu",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, toDisplayString(unref(models).length) + " \u4E2A\u6A21\u578B \xB7 " + toDisplayString(unref(vendors).length) + " \u5BB6\u5382\u5546", 1)
                        ]),
                        unref(updatedAt) ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex items-center gap-1.5"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:calendar-check",
                            class: "w-4 h-4 text-blue-500"
                          }),
                          createVNode("span", null, "\u6570\u636E\u6838\u5BF9\u4E8E " + toDisplayString(unref(updatedAt)), 1)
                        ])) : createCommentVNode("", true),
                        createVNode("button", {
                          type: "button",
                          class: "flex items-center gap-1.5 text-amber-700 dark:text-amber-300 hover:underline",
                          onClick: ($event) => communityOpen.value = true
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:chat-circle-dots-bold",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, "\u52A0\u5FAE\u4FE1 \xB7 \u8FDB\u4E00\u4EBA\u516C\u53F8\u7FA4")
                        ], 8, ["onClick"])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "space-y-12 md:space-y-14" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(sections.value, (block) => {
                    return openBlock(), createBlock("section", {
                      key: block.key,
                      class: "border-t border-slate-100 dark:border-slate-800/80 pt-8"
                    }, [
                      createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white mb-4" }, toDisplayString(block.title), 1),
                      createVNode("div", { class: "space-y-4 text-sm md:text-[15px] leading-8 text-slate-600 dark:text-slate-300" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(block.paragraphs, (paragraph, index) => {
                          return openBlock(), createBlock("p", { key: index }, toDisplayString(paragraph), 1);
                        }), 128))
                      ])
                    ]);
                  }), 128)),
                  createVNode("section", { class: "border-t border-slate-100 dark:border-slate-800/80 pt-8" }, [
                    createVNode("h2", { class: "text-xl font-bold text-slate-900 dark:text-white mb-4" }, toDisplayString(_ctx.$t("hoxi.about.explore")), 1),
                    createVNode("div", { class: "flex flex-wrap gap-x-6 gap-y-3 text-sm" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(exploreLinks.value, (link) => {
                        return openBlock(), createBlock(_component_HoxiHairlineLink, {
                          key: link.to,
                          to: unref(localePath)(link.to)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(link.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128))
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
