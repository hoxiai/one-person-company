import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import __nuxt_component_1 from './HoxiPageHeader-BFh30DFm.mjs';
import { u as useI18n, D as useLocaleRouter, bu as useSeoMeta, O as __nuxt_component_3$3, _ as _sfc_main$Y, y as useFetch } from './server.mjs';
import __nuxt_component_4 from './HoxiTag-C29ulhHG.mjs';
import { defineComponent, computed, withCtx, createVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { d as defaultHoxiSkills } from './skills-CdzEm7Yd.mjs';
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

function useHoxiSkills() {
  const { data: remote } = useFetch(
    "/api/hoxi/skills",
    {
      key: "hoxi-skills-catalog",
      default: () => null
    },
    "$yCuoLPN4Ij"
    /* nuxt-injected */
  );
  const skills = computed(() => {
    var _a, _b;
    const items = (_b = (_a = remote.value) == null ? void 0 : _a.data) == null ? void 0 : _b.items;
    const raw = Array.isArray(items) && items.length > 0 ? items : defaultHoxiSkills;
    return raw.filter((item) => !item.hidden).slice().sort((a, b) => {
      var _a2, _b2;
      return ((_a2 = a.order) != null ? _a2 : 999) - ((_b2 = b.order) != null ? _b2 : 999);
    });
  });
  return { skills };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localeRouter = useLocaleRouter();
    const localePath = (p) => {
      if (localeRouter && typeof localeRouter.localePath === "function") {
        return localeRouter.localePath(p);
      }
      return p;
    };
    const { skills } = useHoxiSkills();
    useSeoMeta({
      title: computed(() => String(t("hoxi.skills.seoTitle"))),
      description: computed(() => String(t("hoxi.skills.seoDescription")))
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_HoxiPageHeader = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$Y;
      const _component_HoxiTag = __nuxt_component_4;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:p-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiPageHeader, {
              title: _ctx.$t("hoxi.skills.title"),
              subtitle: _ctx.$t("hoxi.skills.subtitle")
            }, {
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: localePath("/download"),
                    class: "inline-flex items-center gap-1.5 rounded-lg bg-slate-900 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 transition-colors hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: "ph:download-simple-bold",
                          class: "w-3.5 h-3.5"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.$t("hoxi.skills.downloadApp"))}</span>`);
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: "ph:download-simple-bold",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.skills.downloadApp")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: localePath("/download"),
                      class: "inline-flex items-center gap-1.5 rounded-lg bg-slate-900 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 transition-colors hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:download-simple-bold",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.skills.downloadApp")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-8 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 px-4 py-3"${_scopeId}><p class="text-xs leading-6 text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.skills.installNote"))}</p></div>`);
            if (unref(skills).length > 0) {
              _push2(`<div class="mt-8 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(skills), (skill) => {
                var _a;
                _push2(`<article class="rounded-xl border border-slate-100 dark:border-slate-800 p-5 transition-colors hover:border-blue-400/60 dark:hover:border-blue-500/50"${_scopeId}><div class="flex flex-wrap items-start justify-between gap-3"${_scopeId}><div class="min-w-0"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><h2 class="font-mono text-base font-semibold text-slate-900 dark:text-white"${_scopeId}> /${ssrInterpolate(skill.name)}</h2><span class="rounded border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400"${_scopeId}> v${ssrInterpolate(skill.version)}</span>`);
                if (skill.badge) {
                  _push2(ssrRenderComponent(_component_HoxiTag, {
                    tone: skill.badgeTone === "positive" ? "positive" : "neutral",
                    label: skill.badge
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(skill.description)}</p>`);
                if ((_a = skill.highlights) == null ? void 0 : _a.length) {
                  _push2(`<ul class="mt-3 space-y-1.5"${_scopeId}><!--[-->`);
                  ssrRenderList(skill.highlights, (line) => {
                    _push2(`<li class="flex items-start gap-2 text-xs leading-6 text-slate-500 dark:text-slate-400"${_scopeId}><span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(line)}</span></li>`);
                  });
                  _push2(`<!--]--></ul>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex shrink-0 flex-col items-end gap-2"${_scopeId}><span class="text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(skill.categoryLabel)}</span><span class="font-mono text-[11px] text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(skill.author)}</span>`);
                if (skill.repoUrl || skill.homepageUrl) {
                  _push2(`<a${ssrRenderAttr("href", skill.repoUrl || skill.homepageUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.skills.viewSource"))}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-up-right-bold",
                    class: "w-3 h-3"
                  }, null, _parent2, _scopeId));
                  _push2(`</a>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
                if (skill.compatibility) {
                  _push2(`<p class="mt-3 border-t border-slate-100 dark:border-slate-800 pt-3 text-[11px] leading-6 text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(skill.compatibility)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</article>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="mt-8 rounded-xl border border-slate-100 dark:border-slate-800 py-16 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle-bold",
                class: "mx-auto mb-3 h-10 w-10 text-slate-300 dark:text-slate-700"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-sm text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.skills.empty"))}</p></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:p-16" }, [
                createVNode(_component_HoxiPageHeader, {
                  title: _ctx.$t("hoxi.skills.title"),
                  subtitle: _ctx.$t("hoxi.skills.subtitle")
                }, {
                  actions: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: localePath("/download"),
                      class: "inline-flex items-center gap-1.5 rounded-lg bg-slate-900 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 transition-colors hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:download-simple-bold",
                          class: "w-3.5 h-3.5"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.skills.downloadApp")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  _: 1
                }, 8, ["title", "subtitle"]),
                createVNode("div", { class: "mt-8 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 px-4 py-3" }, [
                  createVNode("p", { class: "text-xs leading-6 text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.skills.installNote")), 1)
                ]),
                unref(skills).length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-8 space-y-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(skills), (skill) => {
                    var _a;
                    return openBlock(), createBlock("article", {
                      key: skill.slug,
                      class: "rounded-xl border border-slate-100 dark:border-slate-800 p-5 transition-colors hover:border-blue-400/60 dark:hover:border-blue-500/50"
                    }, [
                      createVNode("div", { class: "flex flex-wrap items-start justify-between gap-3" }, [
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                            createVNode("h2", { class: "font-mono text-base font-semibold text-slate-900 dark:text-white" }, " /" + toDisplayString(skill.name), 1),
                            createVNode("span", { class: "rounded border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400" }, " v" + toDisplayString(skill.version), 1),
                            skill.badge ? (openBlock(), createBlock(_component_HoxiTag, {
                              key: 0,
                              tone: skill.badgeTone === "positive" ? "positive" : "neutral",
                              label: skill.badge
                            }, null, 8, ["tone", "label"])) : createCommentVNode("", true)
                          ]),
                          createVNode("p", { class: "mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400" }, toDisplayString(skill.description), 1),
                          ((_a = skill.highlights) == null ? void 0 : _a.length) ? (openBlock(), createBlock("ul", {
                            key: 0,
                            class: "mt-3 space-y-1.5"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(skill.highlights, (line) => {
                              return openBlock(), createBlock("li", {
                                key: line,
                                class: "flex items-start gap-2 text-xs leading-6 text-slate-500 dark:text-slate-400"
                              }, [
                                createVNode("span", { class: "mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" }),
                                createVNode("span", null, toDisplayString(line), 1)
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex shrink-0 flex-col items-end gap-2" }, [
                          createVNode("span", { class: "text-[11px] text-slate-400 dark:text-slate-500" }, toDisplayString(skill.categoryLabel), 1),
                          createVNode("span", { class: "font-mono text-[11px] text-slate-400 dark:text-slate-500" }, toDisplayString(skill.author), 1),
                          skill.repoUrl || skill.homepageUrl ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: skill.repoUrl || skill.homepageUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
                          }, [
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.skills.viewSource")), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-up-right-bold",
                              class: "w-3 h-3"
                            })
                          ], 8, ["href"])) : createCommentVNode("", true)
                        ])
                      ]),
                      skill.compatibility ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "mt-3 border-t border-slate-100 dark:border-slate-800 pt-3 text-[11px] leading-6 text-slate-400 dark:text-slate-500"
                      }, toDisplayString(skill.compatibility), 1)) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mt-8 rounded-xl border border-slate-100 dark:border-slate-800 py-16 text-center"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:sparkle-bold",
                    class: "mx-auto mb-3 h-10 w-10 text-slate-300 dark:text-slate-700"
                  }),
                  createVNode("p", { class: "text-sm text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.skills.empty")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=skills-Dk8jbyBo.mjs.map
