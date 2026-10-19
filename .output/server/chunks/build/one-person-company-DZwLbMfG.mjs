import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n, D as useLocaleRouter, r as useSettings, y as useFetch, bt as useSeoMeta, _ as _sfc_main$V, N as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_2 from './HoxiHomeReadiness-BqfSzwrT.mjs';
import __nuxt_component_4 from './HoxiPostItem-BUn5vU_x.mjs';
import __nuxt_component_5 from './HoxiHomeSavingsCard-By7K8PzZ.mjs';
import __nuxt_component_3 from './HoxiHomeTools-BvSvgUnL.mjs';
import __nuxt_component_7 from './HoxiHairlineLink-D3R1gSHp.mjs';
import __nuxt_component_8 from './HoxiSectionLabel-5Ppz2V54.mjs';
import { defineComponent, computed, withAsyncContext, withCtx, createVNode, toDisplayString, unref, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useHoxiModels } from './useHoxiModels-BgjDUCxB.mjs';
import { u as useHoxiCommunity } from './useHoxiCommunity-TTPQpYm7.mjs';
import { u as useHoxiProjects } from './useHoxiProjects-fQyT78sg.mjs';
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
import './HoxiMeta-BgAl7LvM.mjs';
import './HoxiTag-CsgvfRW3.mjs';
import './HoxiVendorDot-BLwK_ZsG.mjs';
import './i18n-data-DAEMwG3q.mjs';
import './gateways-tgDca7H5.mjs';
import './plans-D8XOOLan.mjs';
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';
import './useHoxiTools-D16PTU9W.mjs';
import './tools-Dasq1Dvd.mjs';
import './projects-CRoQay4i.mjs';

const POSTS_LIMIT = 6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "one-person-company",
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
    const currentLocale = computed(() => typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en"));
    const siteIntro = computed(() => {
      if (currentLocale.value === "zh") {
        return String(getSetting("site_intro") || t("hoxi.home.authorIntro"));
      }
      return t("hoxi.home.authorIntro");
    });
    const { data: postsResponse } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/posts",
      {
        key: computed(() => `hoxi-solo-posts-${currentLocale.value}`),
        query: computed(() => ({ type: "blog", locale: currentLocale.value, pageSize: POSTS_LIMIT })),
        default: () => ({ data: [] }),
        watch: [currentLocale],
        onResponseError() {
        }
      },
      "$2JO0z6BtJx"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      var _a, _b;
      return ((_b = (_a = postsResponse.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((post) => (post == null ? void 0 : post.slug) && (post == null ? void 0 : post.title))) || [];
    });
    useSeoMeta({
      title: () => t("hoxi.soloPage.seoTitle"),
      description: () => t("hoxi.soloPage.seoDescription"),
      ogTitle: () => t("hoxi.soloPage.seoTitle"),
      ogDescription: () => t("hoxi.soloPage.seoDescription"),
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => t("hoxi.soloPage.seoTitle"),
      twitterDescription: () => t("hoxi.soloPage.seoDescription")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$V;
      const _component_HoxiHomeReadiness = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_HoxiPostItem = __nuxt_component_4;
      const _component_HoxiHomeSavingsCard = __nuxt_component_5;
      const _component_HoxiHomeTools = __nuxt_component_3;
      const _component_HoxiHairlineLink = __nuxt_component_7;
      const _component_HoxiSectionLabel = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="w-full relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-slate-50/20 to-transparent dark:from-slate-900/80 dark:via-slate-950/50 dark:to-transparent pt-12 pb-10 md:pt-20 md:pb-16"><div class="pointer-events-none absolute left-1/2 -top-28 -translate-x-1/2 h-[460px] w-[760px] rounded-full bg-gradient-to-b from-blue-500/20 via-indigo-500/12 to-transparent dark:from-blue-500/18 dark:via-indigo-500/12 blur-3xl"></div><div class="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-sky-500/10 dark:bg-sky-500/10 blur-3xl"></div><div class="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-3xl"></div><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-25 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"></div>`);
      _push(ssrRenderComponent(_component_HoxiContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"${_scopeId}><div class="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-gradient-to-r from-blue-50/95 via-indigo-50/85 to-blue-50/95 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-800 shadow-2xs dark:border-blue-800/70 dark:bg-gradient-to-r dark:from-blue-950/70 dark:via-indigo-950/60 dark:to-blue-950/70 dark:text-blue-300 mb-6"${_scopeId}><span class="text-blue-500 animate-pulse text-xs"${_scopeId}>\u2727</span><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.soloPage.badge"))}</span></div><h1 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.14]"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.soloPage.titleLine1"))}</span><span class="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-400 bg-clip-text text-transparent drop-shadow-xs"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.soloPage.titleLine2"))}</span></h1><p class="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.soloPage.subtitle"))}</p><div class="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"${_scopeId}><a href="#home-readiness" class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeCta.readiness"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="#recent-posts" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 shadow-2xs backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-slate-700 dark:hover:bg-slate-800 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:article",
              class: "w-4 h-4 text-blue-600 dark:text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeCta.blog"))}</span></a><a href="#home-savings" class="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 shadow-2xs backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chart-bar-bold",
              class: "w-4 h-4 text-slate-500 dark:text-slate-400"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeCta.savings"))}</span></a></div><div class="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-mono"${_scopeId}><span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.soloPage.endorsement"))}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center" }, [
                createVNode("div", { class: "inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-gradient-to-r from-blue-50/95 via-indigo-50/85 to-blue-50/95 px-4 py-1.5 text-xs sm:text-sm font-semibold text-blue-800 shadow-2xs dark:border-blue-800/70 dark:bg-gradient-to-r dark:from-blue-950/70 dark:via-indigo-950/60 dark:to-blue-950/70 dark:text-blue-300 mb-6" }, [
                  createVNode("span", { class: "text-blue-500 animate-pulse text-xs" }, "\u2727"),
                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.soloPage.badge")), 1)
                ]),
                createVNode("h1", { class: "text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.14]" }, [
                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.soloPage.titleLine1")), 1),
                  createVNode("span", { class: "block mt-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-400 bg-clip-text text-transparent drop-shadow-xs" }, toDisplayString(_ctx.$t("hoxi.soloPage.titleLine2")), 1)
                ]),
                createVNode("p", { class: "mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal" }, toDisplayString(_ctx.$t("hoxi.soloPage.subtitle")), 1),
                createVNode("div", { class: "mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4" }, [
                  createVNode("a", {
                    href: "#home-readiness",
                    class: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  }, [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeCta.readiness")), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right-bold",
                      class: "w-4 h-4"
                    })
                  ]),
                  createVNode("a", {
                    href: "#recent-posts",
                    class: "inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 shadow-2xs backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-slate-700 dark:hover:bg-slate-800 cursor-pointer"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:article",
                      class: "w-4 h-4 text-blue-600 dark:text-blue-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeCta.blog")), 1)
                  ]),
                  createVNode("a", {
                    href: "#home-savings",
                    class: "inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 shadow-2xs backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 cursor-pointer"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:chart-bar-bold",
                      class: "w-4 h-4 text-slate-500 dark:text-slate-400"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeCta.savings")), 1)
                  ])
                ]),
                createVNode("div", { class: "mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-mono" }, [
                  createVNode("span", { class: "inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" }),
                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.soloPage.endorsement")), 1)
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
            _push2(`</section><section id="recent-posts"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5"${_scopeId}><div${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:article",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><h2 class="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.blogTitle"))}</h2></div></div>`);
            if (posts.value.length) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/blog"),
                class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 self-start sm:self-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.blogAll"))}</span>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.blogAll")), 1),
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
            _push2(`</section><section id="home-savings"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHomeSavingsCard, null, null, _parent2, _scopeId));
            _push2(`</section><section id="home-tools"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHomeTools, null, null, _parent2, _scopeId));
            _push2(`</section></div><aside class="hidden space-y-8 lg:block lg:sticky lg:top-24 lg:self-start"${_scopeId}><div class="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-2xs"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.authorAvatar"))}</div><div${_scopeId}><h3 class="text-sm font-semibold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.authorName"))}</h3><p class="text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.authorRole"))}</p></div></div><p class="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(siteIntro.value)}</p><button type="button" class="mt-3.5 w-full rounded-xl bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 py-2 px-3 text-xs font-semibold text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chat-circle-dots-bold",
              class: "w-4 h-4 text-blue-600 dark:text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.communityBtn"))}</span></button><div class="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHairlineLink, { to: "/about" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.aboutMe"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSidebar.aboutMe")), 1)
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
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.columnBadge"))}</span></span><span class="text-[10px] text-emerald-400 font-mono flex items-center gap-1"${_scopeId2}><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"${_scopeId2}></span> ${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.columnStatus"))}</span></div><div class="flex items-start gap-3.5 my-1.5"${_scopeId2}><div class="shrink-0 w-11 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-md border border-white/20 flex flex-col justify-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:book-open",
                    class: "w-3.5 h-3.5 text-blue-200"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-[7px] font-mono text-white/80 leading-none"${_scopeId2}>VOL.</span></div><div class="min-w-0 flex-1"${_scopeId2}><h4 class="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.columnTitle"))}</h4><p class="text-[10px] text-slate-300 font-mono mt-0.5"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.columnSub"))}</p><p class="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug dark:text-slate-500"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.columnDesc"))}</p></div></div><div class="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-blue-300 font-medium"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.columnCta"))}</span>`);
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
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnBadge")), 1)
                      ]),
                      createVNode("span", { class: "text-[10px] text-emerald-400 font-mono flex items-center gap-1" }, [
                        createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.homeSidebar.columnStatus")), 1)
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
                        createVNode("h4", { class: "text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnTitle")), 1),
                        createVNode("p", { class: "text-[10px] text-slate-300 font-mono mt-0.5" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnSub")), 1),
                        createVNode("p", { class: "text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnDesc")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-blue-300 font-medium" }, [
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnCta")), 1),
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
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.projectsTitle"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSidebar.projectsTitle")), 1)
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
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.projectsAll"))}</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3 h-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.projectsAll")), 1),
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
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.dataTitle"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSidebar.dataTitle")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-2 text-slate-600 dark:text-slate-300 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.homeSidebar.dataSummary", { models: unref(models).length, vendors: unref(vendors).length }))}</p><p class="mt-1 text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.common.updatedAt", { date: unref(updatedAt) || "\u2014" }))}</p></div></aside></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-4 pb-16 md:pt-6 md:pb-20" }, [
                createVNode("div", { class: "grid gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_300px]" }, [
                  createVNode("div", { class: "min-w-0 space-y-12 md:space-y-16" }, [
                    createVNode("section", { id: "home-readiness" }, [
                      createVNode(_component_HoxiHomeReadiness)
                    ]),
                    createVNode("section", { id: "recent-posts" }, [
                      createVNode("div", { class: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-sm" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:article",
                                class: "w-4 h-4"
                              })
                            ]),
                            createVNode("h2", { class: "text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.blogTitle")), 1)
                          ])
                        ]),
                        posts.value.length ? (openBlock(), createBlock(_component_NuxtLink, {
                          key: 0,
                          to: unref(localePath)("/blog"),
                          class: "shrink-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 self-start sm:self-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.blogAll")), 1),
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
                    ]),
                    createVNode("section", { id: "home-savings" }, [
                      createVNode(_component_HoxiHomeSavingsCard)
                    ]),
                    createVNode("section", { id: "home-tools" }, [
                      createVNode(_component_HoxiHomeTools)
                    ])
                  ]),
                  createVNode("aside", { class: "hidden space-y-8 lg:block lg:sticky lg:top-24 lg:self-start" }, [
                    createVNode("div", { class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("div", { class: "h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-2xs" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.authorAvatar")), 1),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-sm font-semibold text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.authorName")), 1),
                          createVNode("p", { class: "text-[11px] text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.authorRole")), 1)
                        ])
                      ]),
                      createVNode("p", { class: "mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400" }, toDisplayString(siteIntro.value), 1),
                      createVNode("button", {
                        type: "button",
                        class: "mt-3.5 w-full rounded-xl bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 py-2 px-3 text-xs font-semibold text-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer",
                        onClick: unref(openCommunity)
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:chat-circle-dots-bold",
                          class: "w-4 h-4 text-blue-600 dark:text-blue-400"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.communityBtn")), 1)
                      ], 8, ["onClick"]),
                      createVNode("div", { class: "mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between" }, [
                        createVNode(_component_HoxiHairlineLink, { to: "/about" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSidebar.aboutMe")), 1)
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
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnBadge")), 1)
                          ]),
                          createVNode("span", { class: "text-[10px] text-emerald-400 font-mono flex items-center gap-1" }, [
                            createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }),
                            createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.homeSidebar.columnStatus")), 1)
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
                            createVNode("h4", { class: "text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnTitle")), 1),
                            createVNode("p", { class: "text-[10px] text-slate-300 font-mono mt-0.5" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnSub")), 1),
                            createVNode("p", { class: "text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnDesc")), 1)
                          ])
                        ]),
                        createVNode("div", { class: "mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-blue-300 font-medium" }, [
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.columnCta")), 1),
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
                            createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSidebar.projectsTitle")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          to: unref(localePath)("/projects"),
                          class: "text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeSidebar.projectsAll")), 1),
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
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.homeSidebar.dataTitle")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mt-2 text-slate-600 dark:text-slate-300 font-medium" }, toDisplayString(_ctx.$t("hoxi.homeSidebar.dataSummary", { models: unref(models).length, vendors: unref(vendors).length })), 1),
                      createVNode("p", { class: "mt-1 text-[11px] text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.common.updatedAt", { date: unref(updatedAt) || "\u2014" })), 1)
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/one-person-company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=one-person-company-DZwLbMfG.mjs.map
