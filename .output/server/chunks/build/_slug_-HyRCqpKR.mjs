import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n, D as useLocaleRouter, l as useFormatTime, H as useRoute, y as useFetch, bz as createError, bA as useCollectionPageJsonLd, bu as useSeoMeta, O as __nuxt_component_3$3, j as _sfc_main$Y } from './server.mjs';
import { defineComponent, computed, withAsyncContext, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as usePostCategories } from './usePostCategories-luVLOPLu.mjs';
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
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
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
    const slug = computed(() => String(route.params.slug || "").trim());
    const { categories } = usePostCategories({ key: "hoxi-blog-categories" });
    const currentCategory = computed(() => categories.value.find((c) => c.slug === slug.value) || null);
    const categoryName = computed(() => {
      var _a;
      return ((_a = currentCategory.value) == null ? void 0 : _a.name) || "";
    });
    const categoryDescription = computed(() => {
      var _a;
      return ((_a = currentCategory.value) == null ? void 0 : _a.description) || "";
    });
    const { data: response, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/posts",
      {
        query: computed(() => ({ type: "blog", locale: locale.value, category: slug.value, pageSize: 50 })),
        default: () => ({ data: [], total: 0 }),
        watch: [slug]
      },
      "$SXJ54dAybV"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const pending = computed(() => status.value === "pending");
    const posts = computed(() => {
      var _a, _b;
      return ((_b = (_a = response.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((p) => (p == null ? void 0 : p.slug) && (p == null ? void 0 : p.title))) || [];
    });
    if (currentCategory.value === null && categories.value.length > 0) {
      throw createError({ statusCode: 404, statusMessage: "Category not found", fatal: true });
    }
    useCollectionPageJsonLd("hoxi-blog-category", {
      path: () => `/blog/category/${slug.value}`,
      name: () => categoryName.value || t("hoxi.posts.category"),
      description: () => categoryDescription.value || t("hoxi.posts.subtitle"),
      items: posts
    });
    useSeoMeta({
      title: () => `${categoryName.value || slug.value} - ${t("hoxi.posts.title")}`,
      description: () => categoryDescription.value || t("hoxi.posts.seoDescription")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$Y;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 md:py-20"${_scopeId}><div class="mb-12 md:mb-16 max-w-3xl mx-auto text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: localePath("/blog"),
              class: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full mb-3 border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-950/70 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-left",
                    class: "w-3 h-3"
                  }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(_ctx.$t("hoxi.posts.title"))}`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-left",
                      class: "w-3 h-3"
                    }),
                    createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.posts.title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h1 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"${_scopeId}>${ssrInterpolate(categoryName.value || slug.value)}</h1><p class="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(categoryDescription.value || _ctx.$t("hoxi.posts.subtitle"))}</p></div>`);
            if (pending.value) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(6, (i) => {
                _push2(`<div class="h-72 rounded-2xl bg-slate-100 dark:bg-slate-900/60 animate-pulse"${_scopeId}></div>`);
              });
              _push2(`<!--]--></div>`);
            } else if (posts.value.length > 0) {
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(posts.value, (post) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: post.slug,
                  to: localePath(`/blog/${post.slug}`, post.locale || void 0),
                  class: "group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 transition-colors hover:border-blue-500/40"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative aspect-[16/9] w-full overflow-hidden bg-slate-50 dark:bg-slate-800/60"${_scopeId2}>`);
                      if (post.imageUrl) {
                        _push3(`<img${ssrRenderAttr("src", post.imageUrl)}${ssrRenderAttr("alt", post.title)} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400 dark:text-slate-600"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:article",
                          class: "h-12 w-12"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      _push3(`</div><div class="flex flex-grow flex-col p-6"${_scopeId2}>`);
                      if (post.createdAt) {
                        _push3(`<div class="mb-3 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:calendar-blank",
                          class: "h-3.5 w-3.5"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span${_scopeId2}>${ssrInterpolate(unref(formatDate)(post.createdAt))}</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<h3 class="mb-2.5 line-clamp-2 text-lg font-bold leading-snug text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 md:text-xl"${_scopeId2}>${ssrInterpolate(post.title)}</h3>`);
                      if (post.description) {
                        _push3(`<p class="mb-4 line-clamp-3 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400"${_scopeId2}>${ssrInterpolate(post.description)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800/80"${_scopeId2}><span class="flex items-center gap-1 text-xs font-semibold text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400 md:text-sm"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.common.readMore") || "Read more")} `);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "h-4 w-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative aspect-[16/9] w-full overflow-hidden bg-slate-50 dark:bg-slate-800/60" }, [
                          post.imageUrl ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: post.imageUrl,
                            alt: post.title,
                            loading: "lazy",
                            class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400 dark:text-slate-600"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:article",
                              class: "h-12 w-12"
                            })
                          ]))
                        ]),
                        createVNode("div", { class: "flex flex-grow flex-col p-6" }, [
                          post.createdAt ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mb-3 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:calendar-blank",
                              class: "h-3.5 w-3.5"
                            }),
                            createVNode("span", null, toDisplayString(unref(formatDate)(post.createdAt)), 1)
                          ])) : createCommentVNode("", true),
                          createVNode("h3", { class: "mb-2.5 line-clamp-2 text-lg font-bold leading-snug text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 md:text-xl" }, toDisplayString(post.title), 1),
                          post.description ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "mb-4 line-clamp-3 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                          }, toDisplayString(post.description), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800/80" }, [
                            createVNode("span", { class: "flex items-center gap-1 text-xs font-semibold text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400 md:text-sm" }, [
                              createTextVNode(toDisplayString(_ctx.$t("hoxi.common.readMore") || "Read more") + " ", 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "h-4 w-4"
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
              _push2(`<div class="rounded-3xl border border-slate-100 bg-slate-50/50 py-20 text-center dark:border-slate-800 dark:bg-slate-900/40"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:folder-open",
                class: "mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="mb-2 text-xl font-bold text-slate-800 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.categoryEmpty"))}</h3>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: localePath("/blog"),
                class: "text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("hoxi.posts.backToList"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.posts.backToList")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 md:py-20" }, [
                createVNode("div", { class: "mb-12 md:mb-16 max-w-3xl mx-auto text-center" }, [
                  createVNode(_component_NuxtLink, {
                    to: localePath("/blog"),
                    class: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full mb-3 border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-950/70 transition-colors"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-left",
                        class: "w-3 h-3"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.$t("hoxi.posts.title")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4" }, toDisplayString(categoryName.value || slug.value), 1),
                  createVNode("p", { class: "text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400" }, toDisplayString(categoryDescription.value || _ctx.$t("hoxi.posts.subtitle")), 1)
                ]),
                pending.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                    return createVNode("div", {
                      key: i,
                      class: "h-72 rounded-2xl bg-slate-100 dark:bg-slate-900/60 animate-pulse"
                    });
                  }), 64))
                ])) : posts.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(posts.value, (post) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      key: post.slug,
                      to: localePath(`/blog/${post.slug}`, post.locale || void 0),
                      class: "group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 transition-colors hover:border-blue-500/40"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative aspect-[16/9] w-full overflow-hidden bg-slate-50 dark:bg-slate-800/60" }, [
                          post.imageUrl ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: post.imageUrl,
                            alt: post.title,
                            loading: "lazy",
                            class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400 dark:text-slate-600"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:article",
                              class: "h-12 w-12"
                            })
                          ]))
                        ]),
                        createVNode("div", { class: "flex flex-grow flex-col p-6" }, [
                          post.createdAt ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mb-3 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500"
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:calendar-blank",
                              class: "h-3.5 w-3.5"
                            }),
                            createVNode("span", null, toDisplayString(unref(formatDate)(post.createdAt)), 1)
                          ])) : createCommentVNode("", true),
                          createVNode("h3", { class: "mb-2.5 line-clamp-2 text-lg font-bold leading-snug text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 md:text-xl" }, toDisplayString(post.title), 1),
                          post.description ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "mb-4 line-clamp-3 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                          }, toDisplayString(post.description), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800/80" }, [
                            createVNode("span", { class: "flex items-center gap-1 text-xs font-semibold text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400 md:text-sm" }, [
                              createTextVNode(toDisplayString(_ctx.$t("hoxi.common.readMore") || "Read more") + " ", 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "h-4 w-4"
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 2,
                  class: "rounded-3xl border border-slate-100 bg-slate-50/50 py-20 text-center dark:border-slate-800 dark:bg-slate-900/40"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:folder-open",
                    class: "mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600"
                  }),
                  createVNode("h3", { class: "mb-2 text-xl font-bold text-slate-800 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.posts.categoryEmpty")), 1),
                  createVNode(_component_NuxtLink, {
                    to: localePath("/blog"),
                    class: "text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.posts.backToList")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/blog/category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-HyRCqpKR.mjs.map
