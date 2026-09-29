import { B as useRoute, u as useI18n, z as useLocaleRouter, d as useFormatTime, w as useFetch, bk as usePageResourceState, bi as useSeoMeta, bj as useJsonLd, a$ as PageRequestError, I as __nuxt_component_3$3, _ as _sfc_main$I, bl as __nuxt_component_3$2 } from './server.mjs';
import __nuxt_component_7 from './HoxiComment-DRQJGa5I.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHoxiModels, i as injectModelReferences } from './useHoxiModels-Dawtm-Ac.mjs';
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
import '@libsql/client';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
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
import './HoxiSectionLabel-BK4CHoLb.mjs';
import './models-VgTGFaGO.mjs';
import './vendors-sPFB0I2R.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
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
    const { models } = useHoxiModels();
    const rawSlug = route.params.slug;
    const slug = Array.isArray(rawSlug) ? String(rawSlug.at(-1) || "") : String(rawSlug || "");
    const { data, status, error, refresh } = useFetch(
      `/api/posts/${slug}`,
      {
        key: `hoxi-post-${slug}`,
        lazy: true
      },
      "$WrqFe2EHQW"
      /* nuxt-injected */
    );
    const post = computed(() => data.value || null);
    const { pending, requestFailed } = usePageResourceState(data, status, error);
    const backRoute = computed(() => {
      var _a;
      const target = ((_a = post.value) == null ? void 0 : _a.key) ? `/${post.value.key}` : "/blog";
      return localePath(target);
    });
    const backLabel = computed(() => {
      var _a, _b;
      if (((_a = post.value) == null ? void 0 : _a.key) === "refactoring-the-self") {
        return "\u8FD4\u56DE\u300A\u5E95\u5C42\u91CD\u6784\u300B\u4E13\u680F";
      }
      if ((_b = post.value) == null ? void 0 : _b.key) {
        return `\u8FD4\u56DE\u300A${post.value.key}\u300B\u4E13\u680F`;
      }
      return t("hoxi.posts.backToList") || "\u8FD4\u56DE\u6587\u7AE0\u5217\u8868";
    });
    const renderedContent = computed(() => {
      var _a;
      if (!((_a = post.value) == null ? void 0 : _a.content)) return "";
      return injectModelReferences(post.value.content, models.value, {
        href: (modelSlug) => localePath(`/models/${modelSlug}`),
        blendedLabel: t("hoxi.model.blendedShort"),
        scoreLabel: t("hoxi.model.scoreShort")
      });
    });
    ref(null);
    useSeoMeta({
      title: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) ? `${post.value.title} \xB7 \u53EF\u559C AI` : "\u6587\u7AE0\u8BE6\u60C5 \xB7 \u53EF\u559C AI";
      },
      description: () => {
        var _a, _b;
        return ((_a = post.value) == null ? void 0 : _a.description) || ((_b = post.value) == null ? void 0 : _b.title) || "";
      },
      ogTitle: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || "";
      },
      ogDescription: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.description) || "";
      },
      ogImage: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.imageUrl) || void 0;
      },
      ogType: "article",
      twitterCard: "summary_large_image",
      twitterTitle: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || "";
      },
      twitterDescription: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.description) || "";
      },
      twitterImage: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.imageUrl) || void 0;
      }
    });
    useJsonLd("hoxi-post", computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": ((_a = post.value) == null ? void 0 : _a.title) || "",
        "description": ((_b = post.value) == null ? void 0 : _b.description) || void 0,
        "image": ((_c = post.value) == null ? void 0 : _c.imageUrl) || void 0,
        "datePublished": ((_d = post.value) == null ? void 0 : _d.createdAt) || void 0,
        "dateModified": ((_e = post.value) == null ? void 0 : _e.updatedAt) || ((_f = post.value) == null ? void 0 : _f.createdAt) || void 0
      };
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_PageRequestError = PageRequestError;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$I;
      const _component_LikeButton = __nuxt_component_3$2;
      const _component_HoxiComment = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-16" }, _attrs))}>`);
      if (unref(pending) && !post.value) {
        _push(`<div class="space-y-6 animate-pulse py-4"><div class="h-5 bg-slate-200 dark:bg-slate-800 rounded w-24 mb-6"></div><div class="h-10 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-4"></div><div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mb-8"></div><div class="aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-2xl mb-8 max-h-[400px]"></div><div class="space-y-3"><div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div><div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div><div class="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div></div></div>`);
      } else if (unref(requestFailed)) {
        _push(ssrRenderComponent(_component_PageRequestError, { retry: unref(refresh) }, null, _parent));
      } else if (post.value) {
        _push(`<article>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: backRoute.value,
          class: "inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-left",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(backLabel.value)}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-left",
                  class: "w-4 h-4"
                }),
                createTextVNode(" " + toDisplayString(backLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<header class="mb-10 md:mb-12"><div class="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4">`);
        if (post.value.type) {
          _push(`<span class="capitalize bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-1 rounded text-xs">${ssrInterpolate(post.value.type)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (post.value.type) {
          _push(`<span>\u2022</span>`);
        } else {
          _push(`<!---->`);
        }
        if (post.value.createdAt) {
          _push(`<div class="flex items-center gap-1.5">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:calendar-blank",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<time${ssrRenderAttr("datetime", post.value.createdAt)}>${ssrInterpolate(unref(formatDate)(post.value.createdAt))}</time></div>`);
        } else {
          _push(`<!---->`);
        }
        if (post.value.views !== void 0 && post.value.views !== null) {
          _push(`<!--[--><span>\u2022</span><div class="flex items-center gap-1.5">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:eye",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(post.value.views)}</span></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h1 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">${ssrInterpolate(post.value.title)}</h1></header>`);
        if (post.value.imageUrl) {
          _push(`<div class="mb-10 md:mb-12 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl"><img${ssrRenderAttr("src", post.value.imageUrl)}${ssrRenderAttr("alt", post.value.title)} class="w-full object-cover max-h-[540px]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-theme-style="hoxi-article" class="prose dark:prose-invert max-w-none text-[16px] md:text-[17px] leading-8 md:leading-9 text-slate-800 dark:text-slate-200">${(_a = renderedContent.value) != null ? _a : ""}</div><div class="my-14 flex flex-col items-center justify-center gap-2.5">`);
        _push(ssrRenderComponent(_component_LikeButton, {
          "target-type": "post",
          "target-id": String(post.value.slug),
          "initial-count": post.value.likes || 0,
          size: "lg",
          variant: "button",
          label: _ctx.$t("hoxi.posts.like"),
          "auto-fetch": "",
          class: "!rounded-full px-7 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
        }, null, _parent));
        _push(`<span class="text-xs text-slate-400 dark:text-slate-500 select-none">${ssrInterpolate(_ctx.$t("hoxi.posts.likePrompt"))}</span></div><div class="mt-14 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: backRoute.value,
          class: "inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-left",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(backLabel.value)}`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-left",
                  class: "w-4 h-4"
                }),
                createTextVNode(" " + toDisplayString(backLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_HoxiComment, {
          "target-type": "post",
          "target-id": String(post.value.slug)
        }, null, _parent));
        _push(`</article>`);
      } else {
        _push(`<div class="text-center py-20 bg-slate-50/50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:file-x-bold",
          class: "w-16 h-16 text-slate-400 dark:text-slate-600 mb-4 mx-auto"
        }, null, _parent));
        _push(`<h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-2">${ssrInterpolate(_ctx.$t("hoxi.blog.notFound"))}</h1><p class="text-slate-500 dark:text-slate-400 mb-6 text-sm">${ssrInterpolate(_ctx.$t("hoxi.blog.notFoundDesc"))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: localePath("/blog"),
          class: "inline-flex items-center gap-2 px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("hoxi.blog.returnBlog"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("hoxi.blog.returnBlog")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
