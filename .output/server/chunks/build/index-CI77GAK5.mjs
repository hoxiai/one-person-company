import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aL as useLocaleRouter, f as useFormatTime, C as useRoute, r as useRouter, y as useFetch, bi as useSeoMeta, a as __nuxt_component_3$1, b as _sfc_main$E, z as _sfc_main$l } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, watch, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const PAGE_SIZE = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const localeRouter = useLocaleRouter();
    const localePath = (p) => {
      const target = typeof p === "object" && (p == null ? void 0 : p.value) !== void 0 ? p.value : String(p || "");
      if (localeRouter && typeof localeRouter.localePath === "function") {
        return localeRouter.localePath(target);
      }
      return target.startsWith("/") ? target : `/${target}`;
    };
    const { formatDate } = useFormatTime();
    const route = useRoute();
    const router = useRouter();
    const page = ref(Number(route.query.page) > 0 ? Number(route.query.page) : 1);
    const { data: response, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/posts",
      {
        query: computed(() => ({ type: "blog", page: page.value, pageSize: PAGE_SIZE })),
        default: () => ({ data: [], total: 0, page: 1, pageSize: PAGE_SIZE }),
        watch: [page]
      },
      "$rQPs4i2dHI"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const pending = computed(() => status.value === "pending");
    const posts = computed(() => {
      var _a, _b;
      return ((_b = (_a = response.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((p) => (p == null ? void 0 : p.slug) && (p == null ? void 0 : p.title))) || [];
    });
    const total = computed(() => {
      var _a;
      return Number((_a = response.value) == null ? void 0 : _a.total) || 0;
    });
    const totalPages = computed(() => Math.max(1, Math.ceil(total.value / PAGE_SIZE)));
    watch(page, (newPage) => {
      router.push({
        query: {
          ...route.query,
          page: newPage > 1 ? String(newPage) : void 0
        }
      });
    });
    useSeoMeta({
      title: () => t("hoxi.posts.seoTitle"),
      description: () => t("hoxi.posts.seoDescription"),
      ogTitle: () => t("hoxi.posts.seoTitle"),
      ogDescription: () => t("hoxi.posts.seoDescription")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$E;
      const _component_UPagination = _sfc_main$l;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 md:py-20"${_scopeId}><div class="mb-12 md:mb-16 text-center max-w-3xl mx-auto"${_scopeId}><span class="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full mb-3 border border-blue-200/50 dark:border-blue-800/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.home.sections.posts") || "\u5B9E\u6218\u5FC3\u5F97 & \u6DF1\u5EA6\u8BC4\u6D4B")}</span><h1 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.title"))}</h1><p class="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.posts.subtitle"))}</p></div>`);
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
                  to: localePath(`/blog/${post.slug}`),
                  class: "group bg-white dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl dark:hover:bg-slate-900 transition-all duration-300 flex flex-col h-full"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="aspect-[16/9] w-full bg-slate-50 dark:bg-slate-800/60 relative overflow-hidden"${_scopeId2}>`);
                      if (post.imageUrl) {
                        _push3(`<img${ssrRenderAttr("src", post.imageUrl)}${ssrRenderAttr("alt", post.title)} loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"${_scopeId2}>`);
                      } else {
                        _push3(`<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400 dark:text-slate-600"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:article",
                          class: "w-12 h-12"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      }
                      if (post.type) {
                        _push3(`<div class="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md text-slate-800 dark:text-slate-200 font-medium px-2.5 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-800 text-xs capitalize shadow-xs"${_scopeId2}>${ssrInterpolate(post.type)}</div>`);
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
                          post.imageUrl ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: post.imageUrl,
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
                          post.type ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "absolute bottom-3 left-3 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md text-slate-800 dark:text-slate-200 font-medium px-2.5 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-800 text-xs capitalize shadow-xs"
                          }, toDisplayString(post.type), 1)) : createCommentVNode("", true)
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
              _push2(`<div class="mt-14 flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UPagination, {
                modelValue: page.value,
                "onUpdate:modelValue": ($event) => page.value = $event,
                "items-per-page": PAGE_SIZE,
                total: total.value
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 md:py-20" }, [
                createVNode("div", { class: "mb-12 md:mb-16 text-center max-w-3xl mx-auto" }, [
                  createVNode("span", { class: "inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full mb-3 border border-blue-200/50 dark:border-blue-800/50" }, toDisplayString(_ctx.$t("hoxi.home.sections.posts") || "\u5B9E\u6218\u5FC3\u5F97 & \u6DF1\u5EA6\u8BC4\u6D4B"), 1),
                  createVNode("h1", { class: "text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight" }, toDisplayString(_ctx.$t("hoxi.posts.title")), 1),
                  createVNode("p", { class: "text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.posts.subtitle")), 1)
                ]),
                pending.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(6, (i) => {
                    return createVNode("div", {
                      key: i,
                      class: "bg-slate-100 dark:bg-slate-900/60 rounded-2xl h-80 animate-pulse border border-slate-100 dark:border-slate-800"
                    });
                  }), 64))
                ])) : posts.value && posts.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(posts.value, (post) => {
                    return openBlock(), createBlock(_component_NuxtLink, {
                      key: post.slug,
                      to: localePath(`/blog/${post.slug}`),
                      class: "group bg-white dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl dark:hover:bg-slate-900 transition-all duration-300 flex flex-col h-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "aspect-[16/9] w-full bg-slate-50 dark:bg-slate-800/60 relative overflow-hidden" }, [
                          post.imageUrl ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: post.imageUrl,
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
                          post.type ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "absolute bottom-3 left-3 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md text-slate-800 dark:text-slate-200 font-medium px-2.5 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-800 text-xs capitalize shadow-xs"
                          }, toDisplayString(post.type), 1)) : createCommentVNode("", true)
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
                  key: 2,
                  class: "text-center py-20 bg-slate-50/50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:article-bold",
                    class: "w-16 h-16 text-slate-400 dark:text-slate-600 mb-4 mx-auto"
                  }),
                  createVNode("h3", { class: "text-xl font-bold text-slate-800 dark:text-white mb-2" }, toDisplayString(_ctx.$t("hoxi.posts.empty")), 1),
                  createVNode("p", { class: "text-slate-500 dark:text-slate-400 text-sm" }, toDisplayString(_ctx.$t("hoxi.posts.checkBackLater")), 1)
                ])),
                totalPages.value > 1 ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "mt-14 flex justify-center"
                }, [
                  createVNode(_component_UPagination, {
                    modelValue: page.value,
                    "onUpdate:modelValue": ($event) => page.value = $event,
                    "items-per-page": PAGE_SIZE,
                    total: total.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "total"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
