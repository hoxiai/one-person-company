import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { I as useRoute, u as useI18n$1, E as useLocaleRouter, y as useFetch, by as useSeoMeta, P as __nuxt_component_3$3, j as _sfc_main$Z } from './server.mjs';
import __nuxt_component_3 from './HoxiSiteBuilderStorePreview-DaSsxknm.mjs';
import { defineComponent, computed, withAsyncContext, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
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
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { locale } = useI18n$1();
    const localeRouter = useLocaleRouter();
    const localePath = (p) => (localeRouter == null ? void 0 : localeRouter.localePath) ? localeRouter.localePath(p) : p;
    const isEn = computed(() => String(locale.value || "").toLowerCase().startsWith("en"));
    const jobId = computed(() => String(route.params.id || ""));
    const initialTab = computed(
      () => route.query.view === "admin" ? "admin" : "storefront"
    );
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `/api/hoxi/site-builder/jobs/${jobId.value}`,
      { key: `site-builder-preview-${jobId.value}` },
      "$QuGDA5O81j"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const job = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.job) || null;
    });
    useSeoMeta({
      title: () => job.value ? `${job.value.siteName} \u2014 Site Preview | Hoxi` : "Site Preview | Hoxi",
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$Z;
      const _component_HoxiSiteBuilderStorePreview = __nuxt_component_3;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="py-8 md:py-12 space-y-6"${_scopeId}><div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4"${_scopeId}><div class="flex items-center gap-3 min-w-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: localePath(`/site-builder?job=${jobId.value}`),
              class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-blue-500 transition-colors shrink-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-left-bold",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>${ssrInterpolate(isEn.value ? "Back to Builder" : "\u8FD4\u56DE\u5EFA\u7AD9\u5DE5\u4F5C\u53F0")}</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-left-bold",
                      class: "w-3.5 h-3.5"
                    }),
                    createVNode("span", null, toDisplayString(isEn.value ? "Back to Builder" : "\u8FD4\u56DE\u5EFA\u7AD9\u5DE5\u4F5C\u53F0"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (job.value) {
              _push2(`<div class="min-w-0"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"${_scopeId}></span><h1 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(job.value.siteName)}</h1><span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-[11px]"${_scopeId}>${ssrInterpolate(job.value.deployMode === "byoc" ? "Cloudflare Pages" : isEn.value ? "Sandbox Preview" : "\u6C99\u76D2\u5B9E\u65F6\u9884\u89C8")}</span></div><p class="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5"${_scopeId}>${ssrInterpolate((_a = job.value.blueprint) == null ? void 0 : _a.tagline)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (job.value) {
              _push2(`<div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
              if (job.value.adminUsername && job.value.adminPassword) {
                _push2(`<div class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#111319] border border-slate-200/80 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300"${_scopeId}><span${_scopeId}>admin: <strong${_scopeId}>${ssrInterpolate(job.value.adminUsername)}</strong> / <strong${_scopeId}>${ssrInterpolate(job.value.adminPassword)}</strong></span></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (job.value.previewUrl && job.value.previewUrl.startsWith("https://") && !job.value.previewUrl.includes("/site-builder/preview/")) {
                _push2(`<a${ssrRenderAttr("href", job.value.previewUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"${_scopeId}><span${_scopeId}>${ssrInterpolate(isEn.value ? "Open Live *.pages.dev" : "\u8BBF\u95EE\u7EBF\u4E0A\u72EC\u7ACB\u7AD9")}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-up-right-bold",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: localePath(`/site-builder?job=${job.value.id}&step=3`),
                  class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:cloud-arrow-up-bold",
                        class: "w-4 h-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(isEn.value ? "Deploy to My Cloudflare (Free Forever)" : "\u4E00\u952E\u90E8\u7F72\u5230\u6211\u7684 Cloudflare \u6C38\u4E45\u4E0A\u7EBF")}</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:cloud-arrow-up-bold",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(isEn.value ? "Deploy to My Cloudflare (Free Forever)" : "\u4E00\u952E\u90E8\u7F72\u5230\u6211\u7684 Cloudflare \u6C38\u4E45\u4E0A\u7EBF"), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(pending)) {
              _push2(`<div class="rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center text-sm text-slate-500"${_scopeId}>${ssrInterpolate(isEn.value ? "Loading site preview..." : "\u6B63\u5728\u52A0\u8F7D\u72EC\u7ACB\u7AD9\u5B9E\u65F6\u9884\u89C8...")}</div>`);
            } else if (!job.value) {
              _push2(`<div class="rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3"${_scopeId}><div class="text-base font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(isEn.value ? "Preview Not Found" : "\u672A\u627E\u5230\u8BE5\u5EFA\u7AD9\u9884\u89C8\u4EFB\u52A1")}</div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: localePath("/site-builder"),
                class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(isEn.value ? "Create New Site" : "\u524D\u5F80\u5FEB\u901F\u5EFA\u7AD9")}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(isEn.value ? "Create New Site" : "\u524D\u5F80\u5FEB\u901F\u5EFA\u7AD9"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(ssrRenderComponent(_component_HoxiSiteBuilderStorePreview, {
                blueprint: job.value.blueprint,
                "initial-tab": initialTab.value,
                locale: unref(locale)
              }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-12 space-y-6" }, [
                createVNode("div", { class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4" }, [
                  createVNode("div", { class: "flex items-center gap-3 min-w-0" }, [
                    createVNode(_component_NuxtLink, {
                      to: localePath(`/site-builder?job=${jobId.value}`),
                      class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-blue-500 transition-colors shrink-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-left-bold",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, toDisplayString(isEn.value ? "Back to Builder" : "\u8FD4\u56DE\u5EFA\u7AD9\u5DE5\u4F5C\u53F0"), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    job.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "min-w-0"
                    }, [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode("span", { class: "inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }),
                        createVNode("h1", { class: "font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate" }, toDisplayString(job.value.siteName), 1),
                        createVNode("span", { class: "px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-[11px]" }, toDisplayString(job.value.deployMode === "byoc" ? "Cloudflare Pages" : isEn.value ? "Sandbox Preview" : "\u6C99\u76D2\u5B9E\u65F6\u9884\u89C8"), 1)
                      ]),
                      createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5" }, toDisplayString((_b = job.value.blueprint) == null ? void 0 : _b.tagline), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  job.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-wrap items-center gap-2.5"
                  }, [
                    job.value.adminUsername && job.value.adminPassword ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#111319] border border-slate-200/80 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300"
                    }, [
                      createVNode("span", null, [
                        createTextVNode("admin: "),
                        createVNode("strong", null, toDisplayString(job.value.adminUsername), 1),
                        createTextVNode(" / "),
                        createVNode("strong", null, toDisplayString(job.value.adminPassword), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    job.value.previewUrl && job.value.previewUrl.startsWith("https://") && !job.value.previewUrl.includes("/site-builder/preview/") ? (openBlock(), createBlock("a", {
                      key: 1,
                      href: job.value.previewUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                    }, [
                      createVNode("span", null, toDisplayString(isEn.value ? "Open Live *.pages.dev" : "\u8BBF\u95EE\u7EBF\u4E0A\u72EC\u7ACB\u7AD9"), 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-up-right-bold",
                        class: "w-3.5 h-3.5"
                      })
                    ], 8, ["href"])) : (openBlock(), createBlock(_component_NuxtLink, {
                      key: 2,
                      to: localePath(`/site-builder?job=${job.value.id}&step=3`),
                      class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:cloud-arrow-up-bold",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(isEn.value ? "Deploy to My Cloudflare (Free Forever)" : "\u4E00\u952E\u90E8\u7F72\u5230\u6211\u7684 Cloudflare \u6C38\u4E45\u4E0A\u7EBF"), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]))
                  ])) : createCommentVNode("", true)
                ]),
                unref(pending) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center text-sm text-slate-500"
                }, toDisplayString(isEn.value ? "Loading site preview..." : "\u6B63\u5728\u52A0\u8F7D\u72EC\u7ACB\u7AD9\u5B9E\u65F6\u9884\u89C8..."), 1)) : !job.value ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3"
                }, [
                  createVNode("div", { class: "text-base font-bold text-slate-900 dark:text-white" }, toDisplayString(isEn.value ? "Preview Not Found" : "\u672A\u627E\u5230\u8BE5\u5EFA\u7AD9\u9884\u89C8\u4EFB\u52A1"), 1),
                  createVNode(_component_NuxtLink, {
                    to: localePath("/site-builder"),
                    class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(isEn.value ? "Create New Site" : "\u524D\u5F80\u5FEB\u901F\u5EFA\u7AD9"), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])) : (openBlock(), createBlock(_component_HoxiSiteBuilderStorePreview, {
                  key: 2,
                  blueprint: job.value.blueprint,
                  "initial-tab": initialTab.value,
                  locale: unref(locale)
                }, null, 8, ["blueprint", "initial-tab", "locale"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/site-builder/preview/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Bo4t4-mU.mjs.map
