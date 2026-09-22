import { p as _sfc_main$s, b as _sfc_main$G } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useHoxiCommunity } from './useHoxiCommunity-7prUOnMO.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiCommunityModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    modelValue: { type: Boolean }
  },
  emits: ["update:open", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { isOpen: communityOpenState } = useHoxiCommunity();
    const isOpen = computed({
      get() {
        if (props.open !== void 0) return props.open;
        if (props.modelValue !== void 0) return props.modelValue;
        return communityOpenState.value;
      },
      set(value) {
        emit("update:open", value);
        emit("update:modelValue", value);
        communityOpenState.value = value;
      }
    });
    const copied = ref(false);
    const close = () => {
      isOpen.value = false;
    };
    const copyWechat = async () => {
      try {
        await (void 0).clipboard.writeText("CollerMr");
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 2e3);
      } catch (e) {
        console.error("Failed to copy WeChat ID", e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$s;
      const _component_UIcon = _sfc_main$G;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event,
        ui: {
          overlay: "bg-slate-900/60 backdrop-blur-xs",
          content: "relative w-full max-w-md rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
        }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative p-6 md:p-8"${_scopeId}><div class="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/15 dark:bg-amber-500/20 blur-2xl"${_scopeId}></div><button type="button" class="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-slate-500 cursor-pointer z-10" aria-label="\u5173\u95ED"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:x-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</button><div class="text-center"${_scopeId}><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60 mb-3"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"${_scopeId}></span> \u4E00\u4EBA\u516C\u53F8\u7FA4 </span><h3 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white"${_scopeId}> \u52A0\u53EF\u4E50\u5FAE\u4FE1 </h3><p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400"${_scopeId}> \u4E00\u4E2A\u4EBA\u505A\u4EA7\u54C1\uFF0C\u6709\u4E2A\u80FD\u804A\u7684\u5730\u65B9\u4F1A\u597D\u5F88\u591A\u3002\u52A0\u6211\u5FAE\u4FE1\uFF0C\u6211\u62C9\u4F60\u8FDB<strong${_scopeId}>\u300C\u53EF\u559C \xB7 \u4E00\u4EBA\u516C\u53F8\u7FA4\u300D</strong>\u3002 </p></div><div class="mt-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 p-5 text-center"${_scopeId}><div class="mx-auto w-44 h-44 rounded-xl bg-white dark:bg-slate-900 p-2 shadow-xs border border-slate-200/60 dark:border-slate-800 flex flex-col items-center justify-center relative group"${_scopeId}><div class="w-36 h-36 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 p-3 text-white flex flex-col items-center justify-between relative overflow-hidden"${_scopeId}><div class="flex items-center justify-between w-full text-[10px] text-amber-300 font-mono"${_scopeId}><span${_scopeId}>WECHAT</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:chat-circle-dots",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col items-center justify-center my-auto"${_scopeId}><div class="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shadow-md mb-1"${_scopeId}> \u559C </div><span class="text-[10px] text-slate-300 tracking-wider font-mono"${_scopeId}>CollerMr</span></div><div class="text-[9px] text-slate-400 font-mono dark:text-slate-500"${_scopeId}> \u5FAE\u4FE1\u641C\u7D22\u6DFB\u52A0 </div></div></div><div class="mt-4 flex items-center justify-center gap-2"${_scopeId}><span class="text-xs text-slate-500 dark:text-slate-400"${_scopeId}>\u5FAE\u4FE1\u53F7\uFF1A</span><code class="font-mono text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700"${_scopeId}> CollerMr </code><button type="button" class="${ssrRenderClass([copied.value ? "bg-emerald-600 text-white" : "bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-500", "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: copied.value ? "ph:check" : "ph:copy",
              class: "w-3 h-3"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236\u5FAE\u4FE1\u53F7")}</span></button></div></div><div class="mt-5 space-y-2 text-[11px] text-slate-500 dark:text-slate-400"${_scopeId}><div class="flex items-start gap-1.5"${_scopeId}><span class="text-amber-500 font-bold"${_scopeId}>1.</span><span${_scopeId}>\u5FAE\u4FE1\u641C\u7D22 <strong${_scopeId}>CollerMr</strong> \u52A0\u597D\u53CB\uFF0C\u5907\u6CE8<strong${_scopeId}>\u3010\u53EF\u559C\u3011</strong>\u3002</span></div><div class="flex items-start gap-1.5"${_scopeId}><span class="text-amber-500 font-bold"${_scopeId}>2.</span><span${_scopeId}>\u7FA4\u91CC\u804A\u72EC\u7ACB\u5F00\u53D1\u3001AI \u7F16\u7A0B\u3001\u51FA\u6D77\u548C\u600E\u4E48\u8D5A\u5230\u94B1\u3002</span></div><div class="flex items-start gap-1.5"${_scopeId}><span class="text-amber-500 font-bold"${_scopeId}>3.</span><span${_scopeId}>\u4E0D\u53D1\u5E7F\u544A\u3002</span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative p-6 md:p-8" }, [
                createVNode("div", { class: "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/15 dark:bg-amber-500/20 blur-2xl" }),
                createVNode("button", {
                  type: "button",
                  class: "absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-slate-500 cursor-pointer z-10",
                  "aria-label": "\u5173\u95ED",
                  onClick: close
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:x-bold",
                    class: "w-4 h-4"
                  })
                ]),
                createVNode("div", { class: "text-center" }, [
                  createVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60 mb-3" }, [
                    createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" }),
                    createTextVNode(" \u4E00\u4EBA\u516C\u53F8\u7FA4 ")
                  ]),
                  createVNode("h3", { class: "text-xl font-bold tracking-tight text-slate-900 dark:text-white" }, " \u52A0\u53EF\u4E50\u5FAE\u4FE1 "),
                  createVNode("p", { class: "mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400" }, [
                    createTextVNode(" \u4E00\u4E2A\u4EBA\u505A\u4EA7\u54C1\uFF0C\u6709\u4E2A\u80FD\u804A\u7684\u5730\u65B9\u4F1A\u597D\u5F88\u591A\u3002\u52A0\u6211\u5FAE\u4FE1\uFF0C\u6211\u62C9\u4F60\u8FDB"),
                    createVNode("strong", null, "\u300C\u53EF\u559C \xB7 \u4E00\u4EBA\u516C\u53F8\u7FA4\u300D"),
                    createTextVNode("\u3002 ")
                  ])
                ]),
                createVNode("div", { class: "mt-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 p-5 text-center" }, [
                  createVNode("div", { class: "mx-auto w-44 h-44 rounded-xl bg-white dark:bg-slate-900 p-2 shadow-xs border border-slate-200/60 dark:border-slate-800 flex flex-col items-center justify-center relative group" }, [
                    createVNode("div", { class: "w-36 h-36 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 p-3 text-white flex flex-col items-center justify-between relative overflow-hidden" }, [
                      createVNode("div", { class: "flex items-center justify-between w-full text-[10px] text-amber-300 font-mono" }, [
                        createVNode("span", null, "WECHAT"),
                        createVNode(_component_UIcon, {
                          name: "ph:chat-circle-dots",
                          class: "w-3.5 h-3.5"
                        })
                      ]),
                      createVNode("div", { class: "flex flex-col items-center justify-center my-auto" }, [
                        createVNode("div", { class: "w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-lg shadow-md mb-1" }, " \u559C "),
                        createVNode("span", { class: "text-[10px] text-slate-300 tracking-wider font-mono" }, "CollerMr")
                      ]),
                      createVNode("div", { class: "text-[9px] text-slate-400 font-mono dark:text-slate-500" }, " \u5FAE\u4FE1\u641C\u7D22\u6DFB\u52A0 ")
                    ])
                  ]),
                  createVNode("div", { class: "mt-4 flex items-center justify-center gap-2" }, [
                    createVNode("span", { class: "text-xs text-slate-500 dark:text-slate-400" }, "\u5FAE\u4FE1\u53F7\uFF1A"),
                    createVNode("code", { class: "font-mono text-xs font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700" }, " CollerMr "),
                    createVNode("button", {
                      type: "button",
                      class: ["inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer", copied.value ? "bg-emerald-600 text-white" : "bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-500"],
                      onClick: copyWechat
                    }, [
                      createVNode(_component_UIcon, {
                        name: copied.value ? "ph:check" : "ph:copy",
                        class: "w-3 h-3"
                      }, null, 8, ["name"]),
                      createVNode("span", null, toDisplayString(copied.value ? "\u5DF2\u590D\u5236" : "\u590D\u5236\u5FAE\u4FE1\u53F7"), 1)
                    ], 2)
                  ])
                ]),
                createVNode("div", { class: "mt-5 space-y-2 text-[11px] text-slate-500 dark:text-slate-400" }, [
                  createVNode("div", { class: "flex items-start gap-1.5" }, [
                    createVNode("span", { class: "text-amber-500 font-bold" }, "1."),
                    createVNode("span", null, [
                      createTextVNode("\u5FAE\u4FE1\u641C\u7D22 "),
                      createVNode("strong", null, "CollerMr"),
                      createTextVNode(" \u52A0\u597D\u53CB\uFF0C\u5907\u6CE8"),
                      createVNode("strong", null, "\u3010\u53EF\u559C\u3011"),
                      createTextVNode("\u3002")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-start gap-1.5" }, [
                    createVNode("span", { class: "text-amber-500 font-bold" }, "2."),
                    createVNode("span", null, "\u7FA4\u91CC\u804A\u72EC\u7ACB\u5F00\u53D1\u3001AI \u7F16\u7A0B\u3001\u51FA\u6D77\u548C\u600E\u4E48\u8D5A\u5230\u94B1\u3002")
                  ]),
                  createVNode("div", { class: "flex items-start gap-1.5" }, [
                    createVNode("span", { class: "text-amber-500 font-bold" }, "3."),
                    createVNode("span", null, "\u4E0D\u53D1\u5E7F\u544A\u3002")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiCommunityModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "HoxiCommunityModal" });

export { __nuxt_component_4 as default };
