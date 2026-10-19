import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n, D as useLocaleRouter, bt as useSeoMeta, N as __nuxt_component_3$3, _ as _sfc_main$V, bh as __nuxt_component_2$2 } from './server.mjs';
import __nuxt_component_3 from './HoxiHomeTools-BvSvgUnL.mjs';
import { defineComponent, ref, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, createCommentVNode, Teleport, Transition, withModifiers, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
import './useHoxiTools-D16PTU9W.mjs';
import './i18n-data-DAEMwG3q.mjs';
import './tools-Dasq1Dvd.mjs';
import './projects-CRoQay4i.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localeRouter = useLocaleRouter();
    const localePath = (p) => {
      const target = typeof p === "object" && (p == null ? void 0 : p.value) !== void 0 ? p.value : String(p || "");
      if (localeRouter && typeof localeRouter.localePath === "function") {
        return localeRouter.localePath(target);
      }
      return target.startsWith("/") ? target : `/${target}`;
    };
    const { projects } = useHoxiProjects();
    const isRecommendModalOpen = ref(false);
    const openRecommendModal = () => {
      isRecommendModalOpen.value = true;
    };
    useSeoMeta({
      title: () => `${t("hoxi.projects.seoTitle")} - ${t("hoxi.brand.name")}`,
      description: () => t("hoxi.projects.seoDescription"),
      ogTitle: () => `${t("hoxi.projects.seoTitle")} - ${t("hoxi.brand.name")}`,
      ogDescription: () => t("hoxi.projects.seoDescription")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$V;
      const _component_HoxiHomeTools = __nuxt_component_3;
      const _component_ClientOnly = __nuxt_component_2$2;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 md:py-18"${_scopeId}><div class="text-center max-w-2xl mx-auto mb-12 md:mb-14"${_scopeId}><p class="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.badge"))}</p><h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter leading-tight dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.title"))}</h1><p class="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.subtitle"))}</p><div class="mt-6 flex flex-wrap items-center justify-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: localePath("/tools"),
              class: "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:wrench-bold",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.homeTools.title"))}</span>`);
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right",
                    class: "w-3.5 h-3.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:wrench-bold",
                      class: "w-4 h-4"
                    }),
                    createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeTools.title")), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-3.5 h-3.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button type="button" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.recommendBtn"))}</span></button></div></div>`);
            if (unref(projects).length > 0) {
              _push2(`<div class="space-y-5"${_scopeId}><!--[-->`);
              ssrRenderList(unref(projects), (project, index) => {
                _push2(`<article class="rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0d0f14] overflow-hidden hover:border-blue-600/60 dark:hover:border-blue-500/60 transition-colors"${_scopeId}><div class="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800/90"${_scopeId}><div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6"${_scopeId}><div class="space-y-3"${_scopeId}><div class="flex flex-wrap items-center gap-2.5 font-mono text-xs"${_scopeId}><span class="font-bold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><span class="text-slate-300 dark:text-slate-700"${_scopeId}>/</span><span class="text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(project.categoryLabel)}</span>`);
                if (project.badge) {
                  _push2(`<span class="rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"${_scopeId}>${ssrInterpolate(project.badge)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><h2 class="font-mono text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(project.name)}</h2><p class="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200"${_scopeId}>${ssrInterpolate(project.tagline)}</p><p class="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(project.description)}</p></div><div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2.5"${_scopeId}>`);
                if (project.url) {
                  _push2(`<a${ssrRenderAttr("href", project.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-xs sm:text-sm font-semibold transition-colors"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.viewSite"))}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-up-right-bold",
                    class: "w-3.5 h-3.5"
                  }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<span class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111319] text-slate-500 dark:text-slate-400 px-3.5 py-2 text-xs font-mono"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.internalUse"))}</span></span>`);
                }
                if (project.githubUrl) {
                  _push2(`<a${ssrRenderAttr("href", project.githubUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 px-3.5 py-2 text-xs sm:text-sm font-mono font-semibold transition-colors"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:github-logo-bold",
                    class: "w-4 h-4"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.viewGithub"))}</span></a>`);
                } else {
                  _push2(`<!---->`);
                }
                if (project.storyUrl) {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: localePath(project.storyUrl),
                    class: "inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 px-3.5 py-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:border-blue-500 font-semibold transition-colors"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.projects.viewStory"))}</span>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewStory")), 1),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right",
                            class: "w-3.5 h-3.5"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="lg:col-span-5 p-6 sm:p-8 bg-slate-50/50 dark:bg-[#111319] flex flex-col justify-between space-y-5"${_scopeId}>`);
                if (project.highlights && project.highlights.length) {
                  _push2(`<div class="space-y-3"${_scopeId}><div class="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.highlightsLabel"))}</div><ul class="space-y-2"${_scopeId}><!--[-->`);
                  ssrRenderList(project.highlights, (hl, idx) => {
                    _push2(`<li class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed"${_scopeId}><span class="text-blue-600 dark:text-blue-400 font-mono font-bold mt-0.5"${_scopeId}>\xB7</span><span${_scopeId}>${ssrInterpolate(hl)}</span></li>`);
                  });
                  _push2(`<!--]--></ul></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (project.techStack && project.techStack.length) {
                  _push2(`<div class="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 space-y-2"${_scopeId}><div class="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.projects.techStack"))}</div><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                  ssrRenderList(project.techStack, (tech) => {
                    _push2(`<span class="px-2 py-0.5 rounded bg-white dark:bg-[#0b0d12] border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 font-mono"${_scopeId}>${ssrInterpolate(tech)}</span>`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></article>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="mt-16 md:mt-20 pt-12 border-t border-slate-200/70 dark:border-slate-800/80"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiHomeTools, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "py-12 md:py-18" }, [
                createVNode("div", { class: "text-center max-w-2xl mx-auto mb-12 md:mb-14" }, [
                  createVNode("p", { class: "font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3" }, toDisplayString(_ctx.$t("hoxi.projects.badge")), 1),
                  createVNode("h1", { class: "text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tighter leading-tight dark:text-white" }, toDisplayString(_ctx.$t("hoxi.projects.title")), 1),
                  createVNode("p", { class: "text-sm md:text-base text-slate-500 dark:text-slate-400 mt-3 leading-relaxed" }, toDisplayString(_ctx.$t("hoxi.projects.subtitle")), 1),
                  createVNode("div", { class: "mt-6 flex flex-wrap items-center justify-center gap-2.5" }, [
                    createVNode(_component_NuxtLink, {
                      to: localePath("/tools"),
                      class: "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:wrench-bold",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.homeTools.title")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5"
                        })
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode("button", {
                      type: "button",
                      class: "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer",
                      onClick: openRecommendModal
                    }, [
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.recommendBtn")), 1)
                    ])
                  ])
                ]),
                unref(projects).length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-5"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project, index) => {
                    return openBlock(), createBlock("article", {
                      key: project.id,
                      class: "rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0d0f14] overflow-hidden hover:border-blue-600/60 dark:hover:border-blue-500/60 transition-colors"
                    }, [
                      createVNode("div", { class: "grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800/90" }, [
                        createVNode("div", { class: "lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6" }, [
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("div", { class: "flex flex-wrap items-center gap-2.5 font-mono text-xs" }, [
                              createVNode("span", { class: "font-bold text-blue-600 dark:text-blue-400" }, toDisplayString(String(index + 1).padStart(2, "0")), 1),
                              createVNode("span", { class: "text-slate-300 dark:text-slate-700" }, "/"),
                              createVNode("span", { class: "text-slate-500 dark:text-slate-400" }, toDisplayString(project.categoryLabel), 1),
                              project.badge ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                              }, toDisplayString(project.badge), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("h2", { class: "font-mono text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight" }, toDisplayString(project.name), 1),
                            createVNode("p", { class: "text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200" }, toDisplayString(project.tagline), 1),
                            createVNode("p", { class: "text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400" }, toDisplayString(project.description), 1)
                          ]),
                          createVNode("div", { class: "pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2.5" }, [
                            project.url ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: project.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "inline-flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-xs sm:text-sm font-semibold transition-colors"
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewSite")), 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-up-right-bold",
                                class: "w-3.5 h-3.5"
                              })
                            ], 8, ["href"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#111319] text-slate-500 dark:text-slate-400 px-3.5 py-2 text-xs font-mono"
                            }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.internalUse")), 1)
                            ])),
                            project.githubUrl ? (openBlock(), createBlock("a", {
                              key: 2,
                              href: project.githubUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 px-3.5 py-2 text-xs sm:text-sm font-mono font-semibold transition-colors"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:github-logo-bold",
                                class: "w-4 h-4"
                              }),
                              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewGithub")), 1)
                            ], 8, ["href"])) : createCommentVNode("", true),
                            project.storyUrl ? (openBlock(), createBlock(_component_NuxtLink, {
                              key: 3,
                              to: localePath(project.storyUrl),
                              class: "inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-800 px-3.5 py-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:border-blue-500 font-semibold transition-colors"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString(_ctx.$t("hoxi.projects.viewStory")), 1),
                                createVNode(_component_UIcon, {
                                  name: "ph:arrow-right",
                                  class: "w-3.5 h-3.5"
                                })
                              ]),
                              _: 1
                            }, 8, ["to"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "lg:col-span-5 p-6 sm:p-8 bg-slate-50/50 dark:bg-[#111319] flex flex-col justify-between space-y-5" }, [
                          project.highlights && project.highlights.length ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-3"
                          }, [
                            createVNode("div", { class: "font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.projects.highlightsLabel")), 1),
                            createVNode("ul", { class: "space-y-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(project.highlights, (hl, idx) => {
                                return openBlock(), createBlock("li", {
                                  key: idx,
                                  class: "text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed"
                                }, [
                                  createVNode("span", { class: "text-blue-600 dark:text-blue-400 font-mono font-bold mt-0.5" }, "\xB7"),
                                  createVNode("span", null, toDisplayString(hl), 1)
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true),
                          project.techStack && project.techStack.length ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "pt-4 border-t border-slate-200/70 dark:border-slate-800/80 space-y-2"
                          }, [
                            createVNode("div", { class: "font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.projects.techStack")), 1),
                            createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(project.techStack, (tech) => {
                                return openBlock(), createBlock("span", {
                                  key: tech,
                                  class: "px-2 py-0.5 rounded bg-white dark:bg-[#0b0d12] border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 font-mono"
                                }, toDisplayString(tech), 1);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                createVNode("section", { class: "mt-16 md:mt-20 pt-12 border-t border-slate-200/70 dark:border-slate-800/80" }, [
                  createVNode(_component_HoxiHomeTools)
                ])
              ]),
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Teleport, { to: "body" }, [
                    createVNode(Transition, {
                      "enter-active-class": "transition-opacity duration-150 ease-out",
                      "enter-from-class": "opacity-0",
                      "enter-to-class": "opacity-100",
                      "leave-active-class": "transition-opacity duration-100 ease-in",
                      "leave-from-class": "opacity-100",
                      "leave-to-class": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        isRecommendModalOpen.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
                          "aria-modal": "true",
                          role: "dialog"
                        }, [
                          createVNode("div", {
                            class: "fixed inset-0 bg-slate-950/60 transition-opacity",
                            onClick: ($event) => isRecommendModalOpen.value = false
                          }, null, 8, ["onClick"]),
                          createVNode("div", {
                            class: "relative w-full max-w-md rounded-[14px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 z-10 shadow-xl",
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }, [
                            createVNode("button", {
                              type: "button",
                              class: "absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                              "aria-label": "Close",
                              onClick: ($event) => isRecommendModalOpen.value = false
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:x-bold",
                                class: "w-4 h-4"
                              })
                            ], 8, ["onClick"]),
                            createVNode("h3", { class: "text-base font-bold text-slate-950 dark:text-white mb-3" }, toDisplayString(_ctx.$t("hoxi.projects.recommendBtn")), 1),
                            createVNode("div", { class: "space-y-3 text-xs text-slate-600 leading-relaxed dark:text-slate-300" }, [
                              createVNode("p", null, toDisplayString(_ctx.$t("hoxi.projects.recommendTip")), 1),
                              createVNode("div", { class: "rounded-lg border border-slate-200 p-3 space-y-1.5 font-mono text-slate-800 dark:border-slate-800 dark:text-slate-200" }, [
                                createVNode("div", null, [
                                  createTextVNode("Email: "),
                                  createVNode("span", { class: "text-blue-600 font-semibold dark:text-blue-400" }, "coller@hoxi.ai")
                                ]),
                                createVNode("div", null, [
                                  createTextVNode("WeChat: "),
                                  createVNode("span", { class: "text-blue-600 font-semibold dark:text-blue-400" }, "hoxi-ai")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mt-5 flex justify-end" }, [
                              createVNode("button", {
                                type: "button",
                                class: "px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-950 text-white dark:bg-white dark:text-slate-950 cursor-pointer",
                                onClick: ($event) => isRecommendModalOpen.value = false
                              }, " OK ", 8, ["onClick"])
                            ])
                          ], 8, ["onClick"])
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]))
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-ffIWAH8H.mjs.map
