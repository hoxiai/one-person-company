import { u as useI18n, bu as useSeoMeta, _ as _sfc_main$Y } from './server.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$1, f as formatPoints } from './layout-Dxfcj7bO.mjs';
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
  __name: "models",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => `${t("hoxi.member.models.title")} \xB7 ${t("hoxi.site.name")}`
    });
    const loading = ref(true);
    const gatewayAvailable = ref(false);
    const keyGroup = ref(null);
    const models = ref([]);
    const searchQuery = ref("");
    const filteredModels = computed(() => {
      const q = searchQuery.value.trim().toLowerCase();
      if (!q) return models.value;
      return models.value.filter(
        (m) => String(m.modelName || "").toLowerCase().includes(q) || String(m.displayName || "").toLowerCase().includes(q) || String(m.vendor || "").toLowerCase().includes(q)
      );
    });
    async function loadModels() {
      loading.value = true;
      try {
        const res = await $fetch("/api/hoxi/member/models");
        gatewayAvailable.value = Boolean(res == null ? void 0 : res.gatewayAvailable);
        keyGroup.value = (res == null ? void 0 : res.keyGroup) || null;
        models.value = Array.isArray(res == null ? void 0 : res.models) ? res.models : [];
      } catch {
        gatewayAvailable.value = false;
        models.value = [];
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Y;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.member.models.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.member.models.title")), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-700 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.subtitle"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-700 dark:text-gray-400" }, toDisplayString(_ctx.$t("hoxi.member.models.subtitle")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="space-y-6 relative"${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-5 lg:p-6 shadow-sm dark:shadow-inner flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden"${_scopeId}><div class="flex flex-wrap items-center gap-3 flex-1"${_scopeId}><div class="relative flex-1 min-w-[220px] max-w-md"${_scopeId}><input${ssrRenderAttr("value", searchQuery.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.member.models.searchPlaceholder"))} class="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]/50 transition"${_scopeId}></div>`);
            if ((_a = keyGroup.value) == null ? void 0 : _a.name) {
              _push2(`<span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#6d4cff]/20 bg-[#6d4cff]/10 text-xs font-mono text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:stack-duotone",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.keyGroupLabel"))}: ${ssrInterpolate(keyGroup.value.name)}</span></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="text-xs font-mono text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.countLabel", { count: filteredModels.value.length }))}</div></div>`);
            if (!loading.value && !gatewayAvailable.value) {
              _push2(`<div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-12 text-center shadow-sm dark:shadow-inner"${_scopeId}><div class="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mx-auto mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:plugs-duotone",
                class: "w-8 h-8 text-gray-400 dark:text-white/40"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm font-medium text-gray-700 dark:text-white/70"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.gatewayUnavailable"))}</p><button type="button" class="mt-5 px-5 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-gray-800 dark:hover:bg-slate-100 transition"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.retry"))}</button></div>`);
            } else {
              _push2(`<div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner"${_scopeId}>`);
              if (loading.value) {
                _push2(`<div class="p-16 text-center text-sm text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.loading"))}</div>`);
              } else if (!filteredModels.value.length) {
                _push2(`<div class="p-16 text-center text-sm text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.empty"))}</div>`);
              } else {
                _push2(`<div class="overflow-x-auto"${_scopeId}><table class="w-full min-w-[760px] text-left border-collapse text-sm"${_scopeId}><thead${_scopeId}><tr class="border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50"${_scopeId}><th class="py-4 px-6 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.colModel"))}</th><th class="py-4 px-6 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.colVendor"))}</th><th class="py-4 px-6 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.colMode"))}</th><th class="py-4 px-6 font-medium text-right"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.colInputPoints"))}</th><th class="py-4 px-6 font-medium text-right"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.models.colOutputPoints"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-white/5"${_scopeId}><!--[-->`);
                ssrRenderList(filteredModels.value, (item) => {
                  _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group"${_scopeId}><td class="py-4 px-6"${_scopeId}><div class="font-mono font-medium text-gray-900 dark:text-white group-hover:text-[#6d4cff] dark:group-hover:text-[#b496ff] transition-colors"${_scopeId}>${ssrInterpolate(item.modelName)}</div>`);
                  if (item.displayName && item.displayName !== item.modelName) {
                    _push2(`<div class="text-xs text-gray-500 dark:text-white/45 mt-0.5"${_scopeId}>${ssrInterpolate(item.displayName)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</td><td class="py-4 px-6"${_scopeId}><span class="inline-flex items-center rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-2.5 py-1 text-xs text-gray-700 dark:text-white/70"${_scopeId}>${ssrInterpolate(item.vendor)}</span></td><td class="py-4 px-6 font-mono text-xs text-gray-600 dark:text-white/60"${_scopeId}>${ssrInterpolate(item.billingMode)}</td><td class="py-4 px-6 text-right font-mono tabular-nums"${_scopeId}>`);
                  if (item.billingMode === "per_call") {
                    _push2(`<!--[--><span class="font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(unref(formatPoints)(item.perCallPoints))}</span><span class="text-gray-400 dark:text-white/40 ml-1 text-xs"${_scopeId}>/ call</span><!--]-->`);
                  } else {
                    _push2(`<!--[--><div class="font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(formatPoints)(item.inputPointsPerM))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</div><div class="text-[11px] text-gray-500 dark:text-white/40"${_scopeId}>$${ssrInterpolate(Number(item.inputUsdPerM || 0).toFixed(2))} / 1M</div><!--]-->`);
                  }
                  _push2(`</td><td class="py-4 px-6 text-right font-mono tabular-nums"${_scopeId}>`);
                  if (item.billingMode === "per_call") {
                    _push2(`<span class="text-gray-400 dark:text-white/30"${_scopeId}>\u2014</span>`);
                  } else {
                    _push2(`<!--[--><div class="font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(unref(formatPoints)(item.outputPointsPerM))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</div><div class="text-[11px] text-gray-500 dark:text-white/40"${_scopeId}>$${ssrInterpolate(Number(item.outputUsdPerM || 0).toFixed(2))} / 1M</div><!--]-->`);
                  }
                  _push2(`</td></tr>`);
                });
                _push2(`<!--]--></tbody></table></div>`);
              }
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6 relative" }, [
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-5 lg:p-6 shadow-sm dark:shadow-inner flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden" }, [
                  createVNode("div", { class: "flex flex-wrap items-center gap-3 flex-1" }, [
                    createVNode("div", { class: "relative flex-1 min-w-[220px] max-w-md" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                        type: "text",
                        placeholder: _ctx.$t("hoxi.member.models.searchPlaceholder"),
                        class: "w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]/50 transition"
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, searchQuery.value]
                      ])
                    ]),
                    ((_b = keyGroup.value) == null ? void 0 : _b.name) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#6d4cff]/20 bg-[#6d4cff]/10 text-xs font-mono text-[#6d4cff] dark:text-[#8ea3ff]"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:stack-duotone",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.models.keyGroupLabel")) + ": " + toDisplayString(keyGroup.value.name), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "text-xs font-mono text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.models.countLabel", { count: filteredModels.value.length })), 1)
                ]),
                !loading.value && !gatewayAvailable.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-12 text-center shadow-sm dark:shadow-inner"
                }, [
                  createVNode("div", { class: "w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mx-auto mb-4" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:plugs-duotone",
                      class: "w-8 h-8 text-gray-400 dark:text-white/40"
                    })
                  ]),
                  createVNode("p", { class: "text-sm font-medium text-gray-700 dark:text-white/70" }, toDisplayString(_ctx.$t("hoxi.member.common.gatewayUnavailable")), 1),
                  createVNode("button", {
                    type: "button",
                    class: "mt-5 px-5 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-gray-800 dark:hover:bg-slate-100 transition",
                    onClick: loadModels
                  }, toDisplayString(_ctx.$t("hoxi.member.common.retry")), 1)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner"
                }, [
                  loading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-16 text-center text-sm text-gray-500 dark:text-white/50"
                  }, toDisplayString(_ctx.$t("hoxi.member.common.loading")), 1)) : !filteredModels.value.length ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "p-16 text-center text-sm text-gray-500 dark:text-white/50"
                  }, toDisplayString(_ctx.$t("hoxi.member.models.empty")), 1)) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "overflow-x-auto"
                  }, [
                    createVNode("table", { class: "w-full min-w-[760px] text-left border-collapse text-sm" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50" }, [
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.models.colModel")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.models.colVendor")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.models.colMode")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.models.colInputPoints")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.models.colOutputPoints")), 1)
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-white/5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredModels.value, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.modelName,
                            class: "hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group"
                          }, [
                            createVNode("td", { class: "py-4 px-6" }, [
                              createVNode("div", { class: "font-mono font-medium text-gray-900 dark:text-white group-hover:text-[#6d4cff] dark:group-hover:text-[#b496ff] transition-colors" }, toDisplayString(item.modelName), 1),
                              item.displayName && item.displayName !== item.modelName ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-xs text-gray-500 dark:text-white/45 mt-0.5"
                              }, toDisplayString(item.displayName), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("td", { class: "py-4 px-6" }, [
                              createVNode("span", { class: "inline-flex items-center rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-2.5 py-1 text-xs text-gray-700 dark:text-white/70" }, toDisplayString(item.vendor), 1)
                            ]),
                            createVNode("td", { class: "py-4 px-6 font-mono text-xs text-gray-600 dark:text-white/60" }, toDisplayString(item.billingMode), 1),
                            createVNode("td", { class: "py-4 px-6 text-right font-mono tabular-nums" }, [
                              item.billingMode === "per_call" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode("span", { class: "font-semibold text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(unref(formatPoints)(item.perCallPoints)), 1),
                                createVNode("span", { class: "text-gray-400 dark:text-white/40 ml-1 text-xs" }, "/ call")
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode("div", { class: "font-semibold text-gray-900 dark:text-white" }, toDisplayString(unref(formatPoints)(item.inputPointsPerM)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1),
                                createVNode("div", { class: "text-[11px] text-gray-500 dark:text-white/40" }, "$" + toDisplayString(Number(item.inputUsdPerM || 0).toFixed(2)) + " / 1M", 1)
                              ], 64))
                            ]),
                            createVNode("td", { class: "py-4 px-6 text-right font-mono tabular-nums" }, [
                              item.billingMode === "per_call" ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-gray-400 dark:text-white/30"
                              }, "\u2014")) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode("div", { class: "font-semibold text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(unref(formatPoints)(item.outputPointsPerM)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1),
                                createVNode("div", { class: "text-[11px] text-gray-500 dark:text-white/40" }, "$" + toDisplayString(Number(item.outputUsdPerM || 0).toFixed(2)) + " / 1M", 1)
                              ], 64))
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/user/models.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=models-DFrx6KxS.mjs.map
