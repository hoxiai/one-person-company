import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aM as useLocaleRouter, t as useSettings, y as useFetch, bk as useSeoMeta, bl as useJsonLd, b as _sfc_main$G, a as __nuxt_component_3$1 } from './server.mjs';
import __nuxt_component_2 from './HoxiHomeReadiness-Puy910we.mjs';
import __nuxt_component_3 from './HoxiHomeTools-7lPndgUx.mjs';
import __nuxt_component_4 from './HoxiHomeSavingsCard-CuKyH8nI.mjs';
import __nuxt_component_6 from './HoxiPostItem-Ba3UJ_I7.mjs';
import __nuxt_component_8 from './HoxiHairlineLink-6_pMzXOE.mjs';
import __nuxt_component_7 from './HoxiSectionLabel-BlLbr3V0.mjs';
import { defineComponent, computed, withAsyncContext, withCtx, createVNode, toDisplayString, createTextVNode, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHoxiModels } from './useHoxiModels-DpcwauH-.mjs';
import { u as useHoxiCommunity } from './useHoxiCommunity-ffKpLZPc.mjs';
import { u as useHoxiProjects } from './useHoxiProjects-CLP1ERVu.mjs';
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
import './useHoxiTools-CyeF0_tS.mjs';
import './tools-Dasq1Dvd.mjs';
import './HoxiTag-BAz_5lMM.mjs';
import './HoxiVendorDot-BQ5SFhuO.mjs';
import './gateways-tgDca7H5.mjs';
import './plans-D8XOOLan.mjs';
import './HoxiMeta-BgAl7LvM.mjs';
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';
import './projects-D5cHNQbb.mjs';

const POSTS_LIMIT = 6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { open: openCommunity } = useHoxiCommunity();
    const { projects: allProjects } = useHoxiProjects();
    const featuredProjects = computed(() => allProjects.value.slice(0, 3));
    const { locale, t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const { models, vendors, updatedAt } = useHoxiModels();
    const currentLocale = computed(() => typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "zh"));
    const seoTitle = computed(() => {
      const loc = currentLocale.value;
      const localeKey = `${loc.replace("-", "_")}_site_title`;
      const titleFromSetting = getSetting(localeKey) || getSetting("site_title") || getSetting("seo_title") || getSetting("site_name");
      return titleFromSetting ? String(titleFromSetting).trim() : t("hoxi.home.title");
    });
    const seoDescription = computed(() => {
      const loc = currentLocale.value;
      const localeKey = `${loc.replace("-", "_")}_site_description`;
      const descFromSetting = getSetting(localeKey) || getSetting("site_description") || getSetting("seo_description") || getSetting("site_intro") || getSetting("site_tagline");
      return descFromSetting ? String(descFromSetting).trim() : t("hoxi.home.subtitle");
    });
    const siteIntro = computed(() => String(getSetting("site_intro") || t("hoxi.home.authorIntro")));
    const { data: postsResponse } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/posts",
      {
        key: "hoxi-home-posts",
        query: { type: "blog", pageSize: POSTS_LIMIT },
        default: () => ({ data: [] }),
        onResponseError() {
        }
      },
      "$MRfyZSLAPA"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      var _a, _b;
      return ((_b = (_a = postsResponse.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((post) => (post == null ? void 0 : post.slug) && (post == null ? void 0 : post.title))) || [];
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value,
      keywords: "\u4E00\u4EBA\u516C\u53F8, \u72EC\u7ACB\u5F00\u53D1, AI \u6A21\u578B\u6392\u884C, \u5927\u6A21\u578B\u4EF7\u683C\u5BF9\u6BD4, AI \u4E2D\u8F6C\u7AD9, Coding Plan, Cursor \u914D\u7F6E"
    });
    useJsonLd("hoxi-home-jsonld", computed(() => [
      {
        "@type": "WebSite",
        name: seoTitle.value,
        description: seoDescription.value,
        url: localePath("/")
      },
      {
        "@type": "ItemList",
        name: "AI \u6A21\u578B\u699C\u5355",
        itemListElement: models.value.slice(0, 10).map((m, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: m.name,
          item: localePath(`/models/${m.slug}`)
        }))
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$G;
      const _component_HoxiHomeReadiness = __nuxt_component_2;
      const _component_HoxiHomeTools = __nuxt_component_3;
      const _component_HoxiHomeSavingsCard = __nuxt_component_4;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_HoxiPostItem = __nuxt_component_6;
      const _component_HoxiHairlineLink = __nuxt_component_8;
      const _component_HoxiSectionLabel = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="w-full relative overflow-hidden bg-gradient-to-b from-amber-50/30 via-slate-50/20 to-transparent dark:from-slate-900/80 dark:via-slate-950/50 dark:to-transparent pt-12 pb-10 md:pt-20 md:pb-16"><div class="pointer-events-none absolute left-1/2 -top-28 -translate-x-1/2 h-[460px] w-[760px] rounded-full bg-gradient-to-b from-amber-400/20 via-orange-400/12 to-transparent dark:from-amber-500/15 dark:via-orange-500/10 blur-3xl"></div><div class="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-3xl"></div><div class="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-indigo-500/10 dark:bg-purple-500/10 blur-3xl"></div><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-25 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"></div>`);
      _push(ssrRenderComponent(_component_HoxiContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"${_scopeId}><div class="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-50/90 via-orange-50/80 to-amber-50/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-800 shadow-2xs dark:border-amber-700/60 dark:bg-gradient-to-r dark:from-amber-950/60 dark:via-orange-950/50 dark:to-amber-950/60 dark:text-amber-300 mb-6"${_scopeId}><span class="text-amber-500 animate-pulse text-xs"${_scopeId}>\u2727</span><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.heroBadge"))}</span></div><h1 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.14]"${_scopeId}><span${_scopeId}>\u4E00\u4EBA\u6210\u519B \xB7 \u4E2D\u6587 AI \u5168\u6808</span><span class="block mt-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xs"${_scopeId}> \u72EC\u7ACB\u5546\u4E1A\u5316\u95ED\u73AF\u6307\u5357 </span></h1><p class="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.subtitle"))}</p><div class="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"${_scopeId}><a href="#home-readiness" class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"${_scopeId}><span${_scopeId}>\u8FDB\u5165\u80FD\u529B\u4F53\u68C0</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="#home-savings" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 shadow-2xs backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-slate-700 dark:hover:bg-slate-800 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chart-bar-bold",
              class: "w-4 h-4 text-slate-500 dark:text-slate-400"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u7B97\u529B\u964D\u672C\u5BF9\u6BD4</span></a><a href="#home-tools" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 shadow-2xs backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:wrench-bold",
              class: "w-4 h-4 text-amber-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u5168\u6808\u5DE5\u5177\u7BB1</span></a></div><div class="mt-10 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500"${_scopeId}><span class="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold"${_scopeId}><span class="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"${_scopeId}></span> SYSTEM ONLINE </span><span class="text-slate-300 dark:text-slate-700"${_scopeId}>|</span><span${_scopeId}>CLAUDE 3.7</span><span${_scopeId}>DEEPSEEK-R1</span><span${_scopeId}>NUXT 3</span><span${_scopeId}>SQLITE</span><span class="text-slate-300 dark:text-slate-700"${_scopeId}>|</span><span class="text-amber-600 dark:text-amber-400 font-semibold"${_scopeId}> 100% SOLO DRIVEN </span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center" }, [
                createVNode("div", { class: "inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-gradient-to-r from-amber-50/90 via-orange-50/80 to-amber-50/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-800 shadow-2xs dark:border-amber-700/60 dark:bg-gradient-to-r dark:from-amber-950/60 dark:via-orange-950/50 dark:to-amber-950/60 dark:text-amber-300 mb-6" }, [
                  createVNode("span", { class: "text-amber-500 animate-pulse text-xs" }, "\u2727"),
                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.home.heroBadge")), 1)
                ]),
                createVNode("h1", { class: "text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.14]" }, [
                  createVNode("span", null, "\u4E00\u4EBA\u6210\u519B \xB7 \u4E2D\u6587 AI \u5168\u6808"),
                  createVNode("span", { class: "block mt-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xs" }, " \u72EC\u7ACB\u5546\u4E1A\u5316\u95ED\u73AF\u6307\u5357 ")
                ]),
                createVNode("p", { class: "mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal" }, toDisplayString(_ctx.$t("hoxi.home.subtitle")), 1),
                createVNode("div", { class: "mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4" }, [
                  createVNode("a", {
                    href: "#home-readiness",
                    class: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  }, [
                    createVNode("span", null, "\u8FDB\u5165\u80FD\u529B\u4F53\u68C0"),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right-bold",
                      class: "w-4 h-4"
                    })
                  ]),
                  createVNode("a", {
                    href: "#home-savings",
                    class: "inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 shadow-2xs backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-slate-700 dark:hover:bg-slate-800 cursor-pointer"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:chart-bar-bold",
                      class: "w-4 h-4 text-slate-500 dark:text-slate-400"
                    }),
                    createVNode("span", null, "\u7B97\u529B\u964D\u672C\u5BF9\u6BD4")
                  ]),
                  createVNode("a", {
                    href: "#home-tools",
                    class: "inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 shadow-2xs backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 cursor-pointer"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:wrench-bold",
                      class: "w-4 h-4 text-amber-500"
                    }),
                    createVNode("span", null, "\u5168\u6808\u5DE5\u5177\u7BB1")
                  ])
                ]),
                createVNode("div", { class: "mt-10 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold" }, [
                    createVNode("span", { class: "inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }),
                    createTextVNode(" SYSTEM ONLINE ")
                  ]),
                  createVNode("span", { class: "text-slate-300 dark:text-slate-700" }, "|"),
                  createVNode("span", null, "CLAUDE 3.7"),
                  createVNode("span", null, "DEEPSEEK-R1"),
                  createVNode("span", null, "NUXT 3"),
                  createVNode("span", null, "SQLITE"),
                  createVNode("span", { class: "text-slate-300 dark:text-slate-700" }, "|"),
                  createVNode("span", { class: "text-amber-600 dark:text-amber-400 font-semibold" }, " 100% SOLO DRIVEN ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_HoxiContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-4 pb-16 md:pt-6 md:pb-20"${_scopeId}><div class="grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_300px]"${_scopeId}><div class="min-w-0 space-y-12 md:space-y-16"${_scopeId}><section id="home-readiness"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHomeReadiness, null, null, _parent2, _scopeId));
            _push2(`</section><section id="home-tools"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHomeTools, null, null, _parent2, _scopeId));
            _push2(`</section><section id="home-savings"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHomeSavingsCard, null, null, _parent2, _scopeId));
            _push2(`</section><section id="recent-posts"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:article",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}> \u6587\u7AE0 </h2></div></div>`);
            if (posts.value.length) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/blog"),
                class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 self-start sm:self-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u5168\u90E8\u6587\u7AE0</span>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", null, "\u5168\u90E8\u6587\u7AE0"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (posts.value.length) {
              _push2(`<div class="mt-6 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(posts.value, (post, index) => {
                _push2(ssrRenderComponent(_component_HoxiPostItem, {
                  key: post.slug,
                  post,
                  lead: index === 0
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="mt-6 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-8 text-center"${_scopeId}><p class="text-sm leading-7 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.postsEmpty"))}</p></div>`);
            }
            _push2(`</section></div><aside class="hidden space-y-8 lg:block lg:sticky lg:top-24 lg:self-start"${_scopeId}><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-base shadow-2xs"${_scopeId}> \u559C </div><div${_scopeId}><h3 class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}>\u6211\u662F\u53EF\u4E50 (Coller)</h3><p class="text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}>\u53EF\u559C AI \u7AD9\u957F</p></div></div><p class="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(siteIntro.value)}</p><button type="button" class="mt-3.5 w-full rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 py-2 px-3 text-xs font-semibold text-amber-900 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-all flex items-center justify-center gap-1.5 shadow-2xs"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chat-circle-dots-bold",
              class: "w-4 h-4 text-amber-600 dark:text-amber-400"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u52A0\u5FAE\u4FE1 \xB7 \u8FDB\u4E00\u4EBA\u516C\u53F8\u7FA4</span></button><div class="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHairlineLink, { to: "/about" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5173\u4E8E\u6211 `);
                } else {
                  return [
                    createTextVNode(" \u5173\u4E8E\u6211 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<a href="https://github.com/hoxiai" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 dark:text-slate-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:github-logo",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>GitHub</span></a></div></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/refactoring-the-self"),
              class: "group block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-5 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 hover:-translate-y-0.5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-blue-500/20 blur-2xl pointer-events-none"${_scopeId2}></div><div class="flex items-center justify-between mb-3"${_scopeId2}><span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:book-bookmark-fill",
                    class: "w-3 h-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u8FDE\u8F7D\u4E13\u680F</span></span><span class="text-[10px] text-emerald-400 font-mono flex items-center gap-1"${_scopeId2}><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"${_scopeId2}></span> \u8FDE\u8F7D\u4E2D </span></div><div class="flex items-start gap-3.5 my-1.5"${_scopeId2}><div class="shrink-0 w-11 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-md border border-white/20 flex flex-col justify-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:book-open",
                    class: "w-3.5 h-3.5 text-blue-200"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-[7px] font-mono text-white/80 leading-none"${_scopeId2}>VOL.</span></div><div class="min-w-0 flex-1"${_scopeId2}><h4 class="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight"${_scopeId2}> \u300A\u5E95\u5C42\u91CD\u6784\u300B </h4><p class="text-[10px] text-slate-300 font-mono mt-0.5"${_scopeId2}> Refactoring the Self </p><p class="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug dark:text-slate-500"${_scopeId2}> \u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u5FC3\u667A\u6A21\u578B\u4E0E\u5DE5\u4F5C\u6D41\u91CD\u6784\u5B9E\u5F55\u3002 </p></div></div><div class="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-blue-300 font-medium"${_scopeId2}><span${_scopeId2}>\u8FDB\u5165\u8FDE\u8F7D\u9605\u8BFB</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "absolute -right-8 -top-8 w-28 h-28 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" }),
                    createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                      createVNode("span", { class: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:book-bookmark-fill",
                          class: "w-3 h-3"
                        }),
                        createVNode("span", null, "\u8FDE\u8F7D\u4E13\u680F")
                      ]),
                      createVNode("span", { class: "text-[10px] text-emerald-400 font-mono flex items-center gap-1" }, [
                        createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                        createTextVNode(" \u8FDE\u8F7D\u4E2D ")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-start gap-3.5 my-1.5" }, [
                      createVNode("div", { class: "shrink-0 w-11 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-md border border-white/20 flex flex-col justify-between" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:book-open",
                          class: "w-3.5 h-3.5 text-blue-200"
                        }),
                        createVNode("span", { class: "text-[7px] font-mono text-white/80 leading-none" }, "VOL.")
                      ]),
                      createVNode("div", { class: "min-w-0 flex-1" }, [
                        createVNode("h4", { class: "text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight" }, " \u300A\u5E95\u5C42\u91CD\u6784\u300B "),
                        createVNode("p", { class: "text-[10px] text-slate-300 font-mono mt-0.5" }, " Refactoring the Self "),
                        createVNode("p", { class: "text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug dark:text-slate-500" }, " \u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u5FC3\u667A\u6A21\u578B\u4E0E\u5DE5\u4F5C\u6D41\u91CD\u6784\u5B9E\u5F55\u3002 ")
                      ])
                    ]),
                    createVNode("div", { class: "mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-blue-300 font-medium" }, [
                      createVNode("span", null, "\u8FDB\u5165\u8FDE\u8F7D\u9605\u8BFB"),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5"${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6211\u5728\u505A\u7684\u9879\u76EE`);
                } else {
                  return [
                    createTextVNode("\u6211\u5728\u505A\u7684\u9879\u76EE")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/projects"),
              class: "text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u5168\u90E8\u9879\u76EE</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3 h-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "\u5168\u90E8\u9879\u76EE"),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3 h-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2.5"${_scopeId}><!--[-->`);
            ssrRenderList(featuredProjects.value, (project) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: project.id,
                to: unref(localePath)("/projects"),
                class: "group block p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-between gap-1"${_scopeId2}><span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate"${_scopeId2}>${ssrInterpolate(project.name)}</span>`);
                    if (project.badge) {
                      _push3(`<span class="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"${_scopeId2}>${ssrInterpolate(project.badge)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1"${_scopeId2}>${ssrInterpolate(project.tagline)}</p><div class="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 font-mono dark:text-slate-500"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(project.categoryLabel)}</span>`);
                    if (project.monthlyCost) {
                      _push3(`<span class="text-emerald-600 dark:text-emerald-400"${_scopeId2}>${ssrInterpolate(project.monthlyCost)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-between gap-1" }, [
                        createVNode("span", { class: "text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate" }, toDisplayString(project.name), 1),
                        project.badge ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"
                        }, toDisplayString(project.badge), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("p", { class: "text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1" }, toDisplayString(project.tagline), 1),
                      createVNode("div", { class: "mt-1.5 flex items-center justify-between text-[10px] text-slate-400 font-mono dark:text-slate-500" }, [
                        createVNode("span", null, toDisplayString(project.categoryLabel), 1),
                        project.monthlyCost ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-emerald-600 dark:text-emerald-400"
                        }, toDisplayString(project.monthlyCost), 1)) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 text-xs text-slate-500 dark:text-slate-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6570\u636E`);
                } else {
                  return [
                    createTextVNode("\u6570\u636E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-2 text-slate-600 dark:text-slate-300"${_scopeId}> \u5DF2\u6536\u5F55 <strong${_scopeId}>${ssrInterpolate(unref(models).length)}</strong> \u4E2A\u6A21\u578B \xB7 <strong${_scopeId}>${ssrInterpolate(unref(vendors).length)}</strong> \u5BB6\u5382\u5546 </p><p class="mt-1 text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.common.updatedAt", { date: unref(updatedAt) || "\u2014" }))}</p></div></aside></div><section class="mt-12 border-t border-slate-100 dark:border-slate-800 pt-6"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.home.method.title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.home.method.title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/about"),
              class: "text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5 self-start sm:self-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.home.method.viewAbout"))}</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3 h-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.home.method.viewAbout")), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3 h-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="max-w-[720px] text-xs leading-6 text-slate-500 dark:text-slate-400 space-y-1"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.method.source"))}</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.method.update"))}</p></div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-4 pb-16 md:pt-6 md:pb-20" }, [
                createVNode("div", { class: "grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_300px]" }, [
                  createVNode("div", { class: "min-w-0 space-y-12 md:space-y-16" }, [
                    createVNode("section", { id: "home-readiness" }, [
                      createVNode(_component_HoxiHomeReadiness)
                    ]),
                    createVNode("section", { id: "home-tools" }, [
                      createVNode(_component_HoxiHomeTools)
                    ]),
                    createVNode("section", { id: "home-savings" }, [
                      createVNode(_component_HoxiHomeSavingsCard)
                    ]),
                    createVNode("section", { id: "recent-posts" }, [
                      createVNode("div", { class: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-sm" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:article",
                                class: "w-4 h-4"
                              })
                            ]),
                            createVNode("h2", { class: "text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white" }, " \u6587\u7AE0 ")
                          ])
                        ]),
                        posts.value.length ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          to: unref(localePath)("/blog"),
                          class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 self-start sm:self-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u5168\u90E8\u6587\u7AE0"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5"
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])) : createCommentVNode("", true)
                      ]),
                      posts.value.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-6 space-y-4"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(posts.value, (post, index) => {
                          return openBlock(), createBlock(_component_HoxiPostItem, {
                            key: post.slug,
                            post,
                            lead: index === 0
                          }, null, 8, ["post", "lead"]);
                        }), 128))
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "mt-6 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-8 text-center"
                      }, [
                        createVNode("p", { class: "text-sm leading-7 text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.home.postsEmpty")), 1)
                      ]))
                    ])
                  ]),
                  createVNode("aside", { class: "hidden space-y-8 lg:block lg:sticky lg:top-24 lg:self-start" }, [
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("div", { class: "h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center font-bold text-base shadow-2xs" }, " \u559C "),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, "\u6211\u662F\u53EF\u4E50 (Coller)"),
                          createVNode("p", { class: "text-[11px] text-slate-400 dark:text-slate-500" }, "\u53EF\u559C AI \u7AD9\u957F")
                        ])
                      ]),
                      createVNode("p", { class: "mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400" }, toDisplayString(siteIntro.value), 1),
                      createVNode("button", {
                        type: "button",
                        class: "mt-3.5 w-full rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 py-2 px-3 text-xs font-semibold text-amber-900 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-all flex items-center justify-center gap-1.5 shadow-2xs",
                        onClick: unref(openCommunity)
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chat-circle-dots-bold",
                          class: "w-4 h-4 text-amber-600 dark:text-amber-400"
                        }),
                        createVNode("span", null, "\u52A0\u5FAE\u4FE1 \xB7 \u8FDB\u4E00\u4EBA\u516C\u53F8\u7FA4")
                      ], 8, ["onClick"]),
                      createVNode("div", { class: "mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between" }, [
                        createVNode(_component_HoxiHairlineLink, { to: "/about" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5173\u4E8E\u6211 ")
                          ]),
                          _: 1
                        }),
                        createVNode("a", {
                          href: "https://github.com/hoxiai",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1 dark:text-slate-500"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:github-logo",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, "GitHub")
                        ])
                      ])
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/refactoring-the-self"),
                      class: "group block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-5 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-500/50 hover:-translate-y-0.5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "absolute -right-8 -top-8 w-28 h-28 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" }),
                        createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                          createVNode("span", { class: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:book-bookmark-fill",
                              class: "w-3 h-3"
                            }),
                            createVNode("span", null, "\u8FDE\u8F7D\u4E13\u680F")
                          ]),
                          createVNode("span", { class: "text-[10px] text-emerald-400 font-mono flex items-center gap-1" }, [
                            createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                            createTextVNode(" \u8FDE\u8F7D\u4E2D ")
                          ])
                        ]),
                        createVNode("div", { class: "flex items-start gap-3.5 my-1.5" }, [
                          createVNode("div", { class: "shrink-0 w-11 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-md border border-white/20 flex flex-col justify-between" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:book-open",
                              class: "w-3.5 h-3.5 text-blue-200"
                            }),
                            createVNode("span", { class: "text-[7px] font-mono text-white/80 leading-none" }, "VOL.")
                          ]),
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            createVNode("h4", { class: "text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight" }, " \u300A\u5E95\u5C42\u91CD\u6784\u300B "),
                            createVNode("p", { class: "text-[10px] text-slate-300 font-mono mt-0.5" }, " Refactoring the Self "),
                            createVNode("p", { class: "text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug dark:text-slate-500" }, " \u5DE5\u7A0B\u5E08\u89C6\u89D2\u4E0B\u7684\u5FC3\u667A\u6A21\u578B\u4E0E\u5DE5\u4F5C\u6D41\u91CD\u6784\u5B9E\u5F55\u3002 ")
                          ])
                        ]),
                        createVNode("div", { class: "mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-blue-300 font-medium" }, [
                          createVNode("span", null, "\u8FDB\u5165\u8FDE\u8F7D\u9605\u8BFB"),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5" }, [
                      createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                        createVNode(_component_HoxiSectionLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6211\u5728\u505A\u7684\u9879\u76EE")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          to: unref(localePath)("/projects"),
                          class: "text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u5168\u90E8\u9879\u76EE"),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3 h-3"
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      createVNode("div", { class: "space-y-2.5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(featuredProjects.value, (project) => {
                          return openBlock(), createBlock(_component_NuxtLink, {
                            key: project.id,
                            to: unref(localePath)("/projects"),
                            class: "group block p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-between gap-1" }, [
                                createVNode("span", { class: "text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate" }, toDisplayString(project.name), 1),
                                project.badge ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "shrink-0 px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"
                                }, toDisplayString(project.badge), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("p", { class: "text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1" }, toDisplayString(project.tagline), 1),
                              createVNode("div", { class: "mt-1.5 flex items-center justify-between text-[10px] text-slate-400 font-mono dark:text-slate-500" }, [
                                createVNode("span", null, toDisplayString(project.categoryLabel), 1),
                                project.monthlyCost ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "text-emerald-600 dark:text-emerald-400"
                                }, toDisplayString(project.monthlyCost), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["to"]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 text-xs text-slate-500 dark:text-slate-400" }, [
                      createVNode(_component_HoxiSectionLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u6570\u636E")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mt-2 text-slate-600 dark:text-slate-300" }, [
                        createTextVNode(" \u5DF2\u6536\u5F55 "),
                        createVNode("strong", null, toDisplayString(unref(models).length), 1),
                        createTextVNode(" \u4E2A\u6A21\u578B \xB7 "),
                        createVNode("strong", null, toDisplayString(unref(vendors).length), 1),
                        createTextVNode(" \u5BB6\u5382\u5546 ")
                      ]),
                      createVNode("p", { class: "mt-1 text-[11px] text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.common.updatedAt", { date: unref(updatedAt) || "\u2014" })), 1)
                    ])
                  ])
                ]),
                createVNode("section", { class: "mt-12 border-t border-slate-100 dark:border-slate-800 pt-6" }, [
                  createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2" }, [
                    createVNode(_component_HoxiSectionLabel, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.home.method.title")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/about"),
                      class: "text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5 self-start sm:self-auto"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.home.method.viewAbout")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3 h-3"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  createVNode("div", { class: "max-w-[720px] text-xs leading-6 text-slate-500 dark:text-slate-400 space-y-1" }, [
                    createVNode("p", null, toDisplayString(_ctx.$t("hoxi.home.method.source")), 1),
                    createVNode("p", null, toDisplayString(_ctx.$t("hoxi.home.method.update")), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
