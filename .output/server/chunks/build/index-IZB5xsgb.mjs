import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n$1, E as useLocaleRouter, l as useFormatTime, I as useRoute, r as useRouter, y as useFetch, bG as useCollectionPageJsonLd, bA as useSeoMeta, P as __nuxt_component_3$4, j as _sfc_main$10 } from './server.mjs';
import __nuxt_component_5 from './HoxiNewsletterBox-DJSIwjgS.mjs';
import { defineComponent, computed, withAsyncContext, watch, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { f as filterAndCurateBlogIndexPosts, i as isExternalBreakdownPost } from './blogFeedCurator-YDyRZRUr.mjs';
import { b as buildBlogOgCoverUrl } from './blogOgCard-Dd_qPNIc.mjs';
import { u as usePostCategories } from './usePostCategories-Dfopjo7b.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';
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

const PAGE_SIZE = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale, t } = useI18n$1();
    const currentLocale = computed(() => {
      const raw = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? String(locale.value) : String(locale || "en");
      return raw.startsWith("zh") ? "zh" : "en";
    });
    const localeRouter = useLocaleRouter();
    const localePath = (p, targetLocale) => {
      const target = typeof p === "object" && (p == null ? void 0 : p.value) !== void 0 ? p.value : String(p || "");
      const current = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? String(locale.value) : String(locale || "en");
      const effectiveLocale = targetLocale && targetLocale.startsWith("zh") && current.startsWith("zh") ? current : targetLocale;
      if (localeRouter && typeof localeRouter.localePath === "function") {
        return localeRouter.localePath(target, effectiveLocale);
      }
      return target.startsWith("/") ? target : `/${target}`;
    };
    const { formatDate } = useFormatTime();
    const route = useRoute();
    const router = useRouter();
    const activeTrack = computed(() => {
      const raw = String(route.query.track || "").trim().toLowerCase();
      if (raw === "original" || raw === "audit") return raw;
      return "all";
    });
    const trackTabs = computed(() => {
      if (currentLocale.value === "en") {
        return [
          { value: "all", label: "All Columns" },
          { value: "original", label: "Founder Notes & Live Ledger" },
          { value: "audit", label: "Solo SaaS Financial Audits" }
        ];
      }
      return [
        { value: "all", label: "\u5168\u90E8\u4E13\u680F" },
        { value: "original", label: "\u539F\u521B\u624B\u8BB0\u4E0E\u5B9E\u76D8\u8D26\u672C" },
        { value: "audit", label: "\u9879\u76EE\u8D22\u52A1\u62C6\u89E3" }
      ];
    });
    const trackHintText = computed(() => {
      if (currentLocale.value === "en") {
        if (activeTrack.value === "original") return "Showing 1P founder essays and verified AINode token ledgers";
        if (activeTrack.value === "audit") return "Showing unit-economics & replication audits of solo SaaS projects";
        return "Founder essays & live ledgers prioritized on page 1";
      }
      if (activeTrack.value === "original") return "\u4EC5\u5C55\u793A\u4E3B\u7406\u4EBA\u624B\u5199\u957F\u6587\u4E0E\u81EA\u6709\u4ED3\u5E93\u5B9E\u76D8\u7B97\u529B\u8D26\u672C";
      if (activeTrack.value === "audit") return "\u4EC5\u5C55\u793A\u4E00\u4EBA\u516C\u53F8\u5546\u4E1A\u9879\u76EE\u5355\u5BA2\u6BDB\u5229\u4E0E\u590D\u523B\u6B7B\u7A74\u62C6\u89E3";
      return "\u9996\u5C4F\u4F18\u5148\u4FDD\u62A4\u539F\u521B\u624B\u8BB0\u4E0E\u5B9E\u76D8\u8D26\u672C\uFF0C\u4E0D\u8BA9\u81EA\u52A8\u62C6\u89E3\u5237\u5C4F";
    });
    const getTrackLink = (track) => {
      const query = { ...route.query };
      delete query.page;
      if (track === "all") delete query.track;
      else query.track = track;
      return { path: localePath("/blog"), query };
    };
    const getCategoryLink = (catSlug) => {
      const query = { ...route.query };
      delete query.page;
      if (!catSlug) delete query.category;
      else query.category = catSlug;
      return { path: localePath("/blog"), query };
    };
    const getPageLink = (targetPage) => {
      const query = { ...route.query };
      if (targetPage <= 1) {
        delete query.page;
      } else {
        query.page = String(targetPage);
      }
      return {
        path: route.path,
        query
      };
    };
    const page = computed({
      get: () => {
        const p = Number(route.query.page);
        return Number.isFinite(p) && p > 0 ? Math.floor(p) : 1;
      },
      set: (newPage) => {
        const target = Number.isFinite(newPage) && newPage > 0 ? Math.floor(newPage) : 1;
        router.push(getPageLink(target));
      }
    });
    const activeCategory = computed(() => {
      const raw = route.query.category;
      return typeof raw === "string" ? raw.trim() : "";
    });
    const { categories } = usePostCategories({ key: "hoxi-blog-categories" });
    const effectiveFetchPageSize = computed(() => {
      if (activeTrack.value === "original") return 36;
      if (activeTrack.value === "all" && page.value === 1) return 18;
      return PAGE_SIZE;
    });
    const { data: response, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/posts",
      {
        query: computed(() => ({
          type: "blog",
          key: activeTrack.value === "audit" ? "projects" : void 0,
          locale: currentLocale.value,
          page: activeTrack.value === "original" ? 1 : page.value,
          pageSize: effectiveFetchPageSize.value,
          category: activeCategory.value || void 0
        })),
        default: () => ({ data: [], total: 0, page: 1, pageSize: PAGE_SIZE }),
        watch: [page, currentLocale, activeCategory, activeTrack]
      },
      "$2APqyO8aeR"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const pending = computed(() => status.value === "pending");
    const curatedPosts = computed(() => {
      var _a, _b;
      const rawList = ((_b = (_a = response.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((p) => (p == null ? void 0 : p.slug) && (p == null ? void 0 : p.title))) || [];
      return filterAndCurateBlogIndexPosts(rawList, activeTrack.value, {
        isFirstPage: page.value === 1,
        pinOriginalCount: 3
      });
    });
    const posts = computed(() => {
      if (activeTrack.value === "original") {
        const start = (page.value - 1) * PAGE_SIZE;
        return curatedPosts.value.slice(start, start + PAGE_SIZE);
      }
      return curatedPosts.value.slice(0, PAGE_SIZE);
    });
    const total = computed(() => {
      var _a;
      if (activeTrack.value === "original") return curatedPosts.value.length;
      return Number((_a = response.value) == null ? void 0 : _a.total) || 0;
    });
    const resolveCardBadge = (post) => {
      var _a;
      const isEn = currentLocale.value === "en";
      if (post.key === "devpulse") return isEn ? "Live Ledger" : "\u5B9E\u76D8\u8D26\u672C";
      if (isExternalBreakdownPost(post)) return isEn ? "Financial Audit" : "\u8D22\u52A1\u62C6\u89E3";
      return ((_a = post.category) == null ? void 0 : _a.name) || post.type || "";
    };
    useCollectionPageJsonLd("hoxi-blog-collection", {
      path: "/blog",
      name: () => t("hoxi.posts.seoTitle"),
      description: () => t("hoxi.posts.seoDescription"),
      items: posts
    });
    const totalPages = computed(() => Math.max(1, Math.ceil(total.value / PAGE_SIZE)));
    const visiblePages = computed(() => {
      const totalCount = totalPages.value;
      const current = Math.min(Math.max(1, page.value), totalCount);
      if (totalCount <= 7) {
        return Array.from({ length: totalCount }, (_, i) => i + 1);
      }
      if (current <= 4) {
        return [1, 2, 3, 4, 5, "...", totalCount];
      }
      if (current >= totalCount - 3) {
        return [1, "...", totalCount - 4, totalCount - 3, totalCount - 2, totalCount - 1, totalCount];
      }
      return [1, "...", current - 1, current, current + 1, "...", totalCount];
    });
    watch(page, (newPage, oldPage) => {
    });
    useSeoMeta({
      title: () => t("hoxi.posts.seoTitle"),
      description: () => t("hoxi.posts.seoDescription"),
      ogTitle: () => t("hoxi.posts.seoTitle"),
      ogDescription: () => t("hoxi.posts.seoDescription")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$10;
      const _component_HoxiNewsletterBox = __nuxt_component_5;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 md:py-20"${_scopeId}><div class="mb-10 md:mb-14 text-center max-w-3xl mx-auto"${_scopeId}><span class="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full mb-3 border border-blue-200/50 dark:border-blue-800/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.sections.posts"))}</span><h1 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.title"))}</h1><p class="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.subtitle"))}</p></div><div class="mb-6 flex flex-wrap items-center justify-between gap-3"${_scopeId}><div class="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800"${_scopeId}><!--[-->`);
            ssrRenderList(trackTabs.value, (tab) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: tab.value,
                to: getTrackLink(tab.value),
                class: ["px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors", activeTrack.value === tab.value ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(tab.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tab.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><span class="text-xs text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(trackHintText.value)}</span></div>`);
            if (unref(categories).length > 0) {
              _push2(`<div class="mb-10 md:mb-12 flex flex-wrap items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: getCategoryLink(""),
                class: ["px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:border-blue-200 dark:hover:border-blue-800 transition-colors", { "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800": !activeCategory.value }]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.posts.allCategories"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.posts.allCategories")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(unref(categories), (cat) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: cat.slug,
                  to: getCategoryLink(cat.slug),
                  class: ["px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:border-blue-200 dark:hover:border-blue-800 transition-colors", { "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800": activeCategory.value === cat.slug }]
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(cat.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(cat.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (pending.value) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(6, (i) => {
                _push2(`<div class="bg-slate-100 dark:bg-slate-900/60 rounded-2xl h-80 animate-pulse border border-slate-100 dark:border-slate-800"${_scopeId}></div>`);
              });
              _push2(`<!--]--></div>`);
            } else if (posts.value && posts.value.length > 0) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(posts.value, (post) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: post.slug,
                  to: localePath(`/blog/${post.slug}`, post.locale || void 0),
                  class: "group bg-white dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl dark:hover:bg-slate-900 transition-all duration-300 flex flex-col h-full"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="aspect-[16/9] w-full bg-slate-50 dark:bg-slate-800/60 relative overflow-hidden"${_scopeId2}>`);
                      if (post.imageUrl || post.slug) {
                        _push3(`<img${ssrRenderAttr("src", post.imageUrl || unref(buildBlogOgCoverUrl)(post.slug, currentLocale.value))}${ssrRenderAttr("alt", post.title)} loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400 dark:text-slate-600"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:article",
                          class: "w-12 h-12"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      if (resolveCardBadge(post)) {
                        _push3(`<div class="${ssrRenderClass([post.key === "devpulse" ? "bg-emerald-950/85 text-emerald-300 border-emerald-700/60" : unref(isExternalBreakdownPost)(post) ? "bg-slate-950/80 text-blue-300 border-blue-800/60" : "bg-white/90 dark:bg-slate-950/80 text-slate-800 dark:text-slate-200 border-slate-200/60 dark:border-slate-800", "absolute bottom-3 left-3 backdrop-blur-md font-medium px-2.5 py-0.5 rounded-md border text-xs shadow-xs"])}"${_scopeId2}>${ssrInterpolate(resolveCardBadge(post))}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="p-6 flex flex-col flex-grow"${_scopeId2}><div class="text-xs text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-4"${_scopeId2}>`);
                      if (post.createdAt) {
                        _push3(`<div class="flex items-center gap-1.5"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:calendar-blank",
                          class: "w-3.5 h-3.5"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span${_scopeId2}>${ssrInterpolate(unref(formatDate)(post.createdAt))}</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (post.views !== void 0 && post.views !== null) {
                        _push3(`<div class="flex items-center gap-1.5"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:eye",
                          class: "w-3.5 h-3.5"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span${_scopeId2}>${ssrInterpolate(post.views)}</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><h3 class="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2.5 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug"${_scopeId2}>${ssrInterpolate(post.title)}</h3>`);
                      if (post.description) {
                        _push3(`<p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 flex-grow mb-4 leading-relaxed"${_scopeId2}>${ssrInterpolate(post.description)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-auto"${_scopeId2}><span class="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.common.readMore") || "\u9605\u8BFB\u5168\u6587")} `);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "aspect-[16/9] w-full bg-slate-50 dark:bg-slate-800/60 relative overflow-hidden" }, [
                          post.imageUrl || post.slug ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: post.imageUrl || unref(buildBlogOgCoverUrl)(post.slug, currentLocale.value),
                            alt: post.title,
                            loading: "lazy",
                            class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400 dark:text-slate-600"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:article",
                              class: "w-12 h-12"
                            })
                          ])),
                          resolveCardBadge(post) ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: ["absolute bottom-3 left-3 backdrop-blur-md font-medium px-2.5 py-0.5 rounded-md border text-xs shadow-xs", post.key === "devpulse" ? "bg-emerald-950/85 text-emerald-300 border-emerald-700/60" : unref(isExternalBreakdownPost)(post) ? "bg-slate-950/80 text-blue-300 border-blue-800/60" : "bg-white/90 dark:bg-slate-950/80 text-slate-800 dark:text-slate-200 border-slate-200/60 dark:border-slate-800"]
                          }, toDisplayString(resolveCardBadge(post)), 3)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "p-6 flex flex-col flex-grow" }, [
                          createVNode("div", { class: "text-xs text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-4" }, [
                            post.createdAt ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex items-center gap-1.5"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:calendar-blank",
                                class: "w-3.5 h-3.5"
                              }),
                              createVNode("span", null, toDisplayString(unref(formatDate)(post.createdAt)), 1)
                            ])) : createCommentVNode("", true),
                            post.views !== void 0 && post.views !== null ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "flex items-center gap-1.5"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:eye",
                                class: "w-3.5 h-3.5"
                              }),
                              createVNode("span", null, toDisplayString(post.views), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("h3", { class: "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2.5 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug" }, toDisplayString(post.title), 1),
                          post.description ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm text-slate-600 dark:text-slate-400 line-clamp-3 flex-grow mb-4 leading-relaxed"
                          }, toDisplayString(post.description), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-auto" }, [
                            createVNode("span", { class: "text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform" }, [
                              createTextVNode(toDisplayString(_ctx.$t("hoxi.common.readMore") || "\u9605\u8BFB\u5168\u6587") + " ", 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-4 h-4"
                              })
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-20 bg-slate-50/50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:article-bold",
                class: "w-16 h-16 text-slate-400 dark:text-slate-600 mb-4 mx-auto"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.empty"))}</h3><p class="text-slate-500 dark:text-slate-400 text-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.checkBackLater"))}</p></div>`);
            }
            if (totalPages.value > 1) {
              _push2(`<nav class="mt-12 md:mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm"${ssrRenderAttr("aria-label", _ctx.$t("hoxi.posts.pagination"))}${_scopeId}><div class="flex-1 flex justify-start"${_scopeId}>`);
              if (page.value > 1) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: getPageLink(page.value - 1),
                  class: "inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-400 transition-colors"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-left",
                        class: "w-4 h-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.posts.previous"))}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-left",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.posts.previous")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-700 cursor-not-allowed select-none" aria-disabled="true"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-left",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.previous"))}</span></span>`);
              }
              _push2(`</div><span class="text-xs text-slate-400 dark:text-slate-500 tabular-nums sm:hidden"${_scopeId}>${ssrInterpolate(page.value)} / ${ssrInterpolate(totalPages.value)}</span><div class="hidden sm:flex items-center gap-1 md:gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(visiblePages.value, (item, idx) => {
                _push2(`<!--[-->`);
                if (item === "...") {
                  _push2(`<span class="px-2 py-1 text-xs text-slate-300 dark:text-slate-700 select-none"${_scopeId}> \u2026 </span>`);
                } else if (item === page.value) {
                  _push2(`<span class="px-2.5 py-1 text-xs md:text-sm font-semibold text-slate-900 dark:text-white tabular-nums" aria-current="page"${_scopeId}>${ssrInterpolate(item)}</span>`);
                } else {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: getPageLink(Number(item)),
                    class: "px-2.5 py-1 text-xs md:text-sm text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-400 transition-colors tabular-nums"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]--></div><div class="flex-1 flex justify-end"${_scopeId}>`);
              if (page.value < totalPages.value) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: getPageLink(page.value + 1),
                  class: "inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-400 transition-colors"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.posts.next"))}</span>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.posts.next")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-4 h-4"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-700 cursor-not-allowed select-none" aria-disabled="true"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.next"))}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`</span>`);
              }
              _push2(`</div></nav>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-14 md:mt-20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiNewsletterBox, {
              topic: "blog",
              source: "hoxi_blog"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 md:py-20" }, [
                createVNode("div", { class: "mb-10 md:mb-14 text-center max-w-3xl mx-auto" }, [
                  createVNode("span", { class: "inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full mb-3 border border-blue-200/50 dark:border-blue-800/50" }, toDisplayString(_ctx.$t("hoxi.home.sections.posts")), 1),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight" }, toDisplayString(_ctx.$t("hoxi.posts.title")), 1),
                  createVNode("p", { class: "text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.posts.subtitle")), 1)
                ]),
                createVNode("div", { class: "mb-6 flex flex-wrap items-center justify-between gap-3" }, [
                  createVNode("div", { class: "inline-flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(trackTabs.value, (tab) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: tab.value,
                        to: getTrackLink(tab.value),
                        class: ["px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors", activeTrack.value === tab.value ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"]
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tab.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["to", "class"]);
                    }), 128))
                  ]),
                  createVNode("span", { class: "text-xs text-slate-400 dark:text-slate-500" }, toDisplayString(trackHintText.value), 1)
                ]),
                unref(categories).length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-10 md:mb-12 flex flex-wrap items-center gap-2"
                }, [
                  createVNode(_component_NuxtLink, {
                    to: getCategoryLink(""),
                    class: ["px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:border-blue-200 dark:hover:border-blue-800 transition-colors", { "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800": !activeCategory.value }]
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.posts.allCategories")), 1)
                    ]),
                    _: 1
                  }, 8, ["to", "class"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (cat) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      key: cat.slug,
                      to: getCategoryLink(cat.slug),
                      class: ["px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:border-blue-200 dark:hover:border-blue-800 transition-colors", { "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800": activeCategory.value === cat.slug }]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(cat.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "class"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                pending.value ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                    return createVNode("div", {
                      key: i,
                      class: "bg-slate-100 dark:bg-slate-900/60 rounded-2xl h-80 animate-pulse border border-slate-100 dark:border-slate-800"
                    });
                  }), 64))
                ])) : posts.value && posts.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(posts.value, (post) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      key: post.slug,
                      to: localePath(`/blog/${post.slug}`, post.locale || void 0),
                      class: "group bg-white dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl dark:hover:bg-slate-900 transition-all duration-300 flex flex-col h-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "aspect-[16/9] w-full bg-slate-50 dark:bg-slate-800/60 relative overflow-hidden" }, [
                          post.imageUrl || post.slug ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: post.imageUrl || unref(buildBlogOgCoverUrl)(post.slug, currentLocale.value),
                            alt: post.title,
                            loading: "lazy",
                            class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400 dark:text-slate-600"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:article",
                              class: "w-12 h-12"
                            })
                          ])),
                          resolveCardBadge(post) ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: ["absolute bottom-3 left-3 backdrop-blur-md font-medium px-2.5 py-0.5 rounded-md border text-xs shadow-xs", post.key === "devpulse" ? "bg-emerald-950/85 text-emerald-300 border-emerald-700/60" : unref(isExternalBreakdownPost)(post) ? "bg-slate-950/80 text-blue-300 border-blue-800/60" : "bg-white/90 dark:bg-slate-950/80 text-slate-800 dark:text-slate-200 border-slate-200/60 dark:border-slate-800"]
                          }, toDisplayString(resolveCardBadge(post)), 3)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "p-6 flex flex-col flex-grow" }, [
                          createVNode("div", { class: "text-xs text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-4" }, [
                            post.createdAt ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex items-center gap-1.5"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:calendar-blank",
                                class: "w-3.5 h-3.5"
                              }),
                              createVNode("span", null, toDisplayString(unref(formatDate)(post.createdAt)), 1)
                            ])) : createCommentVNode("", true),
                            post.views !== void 0 && post.views !== null ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "flex items-center gap-1.5"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:eye",
                                class: "w-3.5 h-3.5"
                              }),
                              createVNode("span", null, toDisplayString(post.views), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("h3", { class: "text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2.5 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug" }, toDisplayString(post.title), 1),
                          post.description ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-sm text-slate-600 dark:text-slate-400 line-clamp-3 flex-grow mb-4 leading-relaxed"
                          }, toDisplayString(post.description), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-auto" }, [
                            createVNode("span", { class: "text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform" }, [
                              createTextVNode(toDisplayString(_ctx.$t("hoxi.common.readMore") || "\u9605\u8BFB\u5168\u6587") + " ", 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-4 h-4"
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "text-center py-20 bg-slate-50/50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:article-bold",
                    class: "w-16 h-16 text-slate-400 dark:text-slate-600 mb-4 mx-auto"
                  }),
                  createVNode("h3", { class: "text-xl font-bold text-slate-800 dark:text-white mb-2" }, toDisplayString(_ctx.$t("hoxi.posts.empty")), 1),
                  createVNode("p", { class: "text-slate-500 dark:text-slate-400 text-sm" }, toDisplayString(_ctx.$t("hoxi.posts.checkBackLater")), 1)
                ])),
                totalPages.value > 1 ? (openBlock(), createBlock("nav", {
                  key: 4,
                  class: "mt-12 md:mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-sm",
                  "aria-label": _ctx.$t("hoxi.posts.pagination")
                }, [
                  createVNode("div", { class: "flex-1 flex justify-start" }, [
                    page.value > 1 ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      to: getPageLink(page.value - 1),
                      class: "inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-400 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-left",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.posts.previous")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-700 cursor-not-allowed select-none",
                      "aria-disabled": "true"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-left",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.posts.previous")), 1)
                    ]))
                  ]),
                  createVNode("span", { class: "text-xs text-slate-400 dark:text-slate-500 tabular-nums sm:hidden" }, toDisplayString(page.value) + " / " + toDisplayString(totalPages.value), 1),
                  createVNode("div", { class: "hidden sm:flex items-center gap-1 md:gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(visiblePages.value, (item, idx) => {
                      return openBlock(), createBlock(Fragment, {
                        key: typeof item === "number" ? `page-${item}` : `ellipsis-${idx}`
                      }, [
                        item === "..." ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "px-2 py-1 text-xs text-slate-300 dark:text-slate-700 select-none"
                        }, " \u2026 ")) : item === page.value ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "px-2.5 py-1 text-xs md:text-sm font-semibold text-slate-900 dark:text-white tabular-nums",
                          "aria-current": "page"
                        }, toDisplayString(item), 1)) : (openBlock(), createBlock(_component_NuxtLink, {
                          key: 2,
                          to: getPageLink(Number(item)),
                          class: "px-2.5 py-1 text-xs md:text-sm text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-400 transition-colors tabular-nums"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]))
                      ], 64);
                    }), 128))
                  ]),
                  createVNode("div", { class: "flex-1 flex justify-end" }, [
                    page.value < totalPages.value ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 0,
                      to: getPageLink(page.value + 1),
                      class: "inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-500 dark:text-slate-500 dark:hover:text-blue-400 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.posts.next")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-4 h-4"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-700 cursor-not-allowed select-none",
                      "aria-disabled": "true"
                    }, [
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.posts.next")), 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4"
                      })
                    ]))
                  ])
                ], 8, ["aria-label"])) : createCommentVNode("", true),
                createVNode("div", { class: "mt-14 md:mt-20" }, [
                  createVNode(_component_HoxiNewsletterBox, {
                    topic: "blog",
                    source: "hoxi_blog"
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-IZB5xsgb.mjs.map
