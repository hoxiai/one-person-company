import __nuxt_component_1 from './HoxiToolBrandMark-C1f66sTa.mjs';
import { u as useI18n, _ as _sfc_main$Y, O as __nuxt_component_3$3 } from './server.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const SKILL_ENTRY_URL = "https://hoxi.ai/skills/tools/SKILL.md";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiToolDetailModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    tool: {},
    endpoints: {},
    useCases: {},
    categories: {},
    isEn: { type: Boolean }
  },
  emits: ["close", "selectCategory"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const copiedKey = ref(null);
    const kindLabel = computed(() => {
      if (!props.tool) return "";
      if (props.tool.kind === "provider") return t("hoxi.tools.kindProvider");
      if (props.tool.kind === "saas") return t("hoxi.tools.kindSaas");
      return t("hoxi.tools.kindCategory");
    });
    const hasApiEndpoints = computed(() => {
      var _a;
      return props.endpoints.length > 0 && ((_a = props.tool) == null ? void 0 : _a.kind) !== "saas";
    });
    function normalizeSkillPromptUrl(text) {
      return text.replace(/https:\/\/hoxi\.ai\/(?:skills\/hoxi-tools\/)?SKILL\.md/g, SKILL_ENTRY_URL);
    }
    const mainAgentPrompt = computed(() => {
      if (!props.tool) return "";
      if (!hasApiEndpoints.value) {
        if (!props.isEn) {
          return `\u5728 Hoxi \u4E2D\u4F7F\u7528\u5185\u7F6E\u6D4F\u89C8\u5668\uFF08hoxi_browser\uFF09\u8BBF\u95EE ${props.tool.url}\uFF0C\u6216\u5E2E\u6211\u5728\u5F53\u524D\u9879\u76EE\u4E2D\u8C03\u7814\u5E76\u96C6\u6210 ${props.tool.name}\u3002`;
        }
        return `In Hoxi, use hoxi_browser to inspect ${props.tool.url}, or help me evaluate and integrate ${props.tool.name} into my current project.`;
      }
      const prov = props.tool.providerSlug || props.tool.id;
      if (!props.isEn) {
        if (props.tool.agentPromptZh) {
          return `${normalizeSkillPromptUrl(props.tool.agentPromptZh)}\uFF08Hoxi \u684C\u9762\u7AEF\u53EF\u76F4\u63A5\u8C03\u7528\u5185\u7F6E hoxi_tools\uFF0Cprovider="${prov}"\uFF09`;
        }
        return `\u4F7F\u7528 Hoxi \u5185\u7F6E\u5DE5\u5177 hoxi_tools\uFF08\u5916\u90E8\u5BA2\u6237\u7AEF\u53EF\u52A0\u8F7D ${SKILL_ENTRY_URL}\uFF09\uFF0C\u5148 inspect \u518D\u8C03\u7528 ${props.tool.name}\uFF08provider="${prov}"\uFF09\u63A5\u53E3\u3002`;
      }
      if (props.tool.agentPrompt) {
        return `${normalizeSkillPromptUrl(props.tool.agentPrompt)} (In Hoxi Desktop call built-in hoxi_tools directly, provider="${prov}")`;
      }
      return `Use built-in hoxi_tools in Hoxi Desktop (or load ${SKILL_ENTRY_URL}), inspect provider="${prov}", and run ${props.tool.name}.`;
    });
    const parentCategories = computed(() => {
      var _a;
      if (!props.tool) return [];
      const ids = ((_a = props.tool.parents) == null ? void 0 : _a.length) ? props.tool.parents : [props.tool.category];
      return props.categories.filter((c) => c.id !== "all" && ids.includes(c.id));
    });
    function formatUseCasePrompt(uc) {
      var _a, _b;
      const prov = ((_a = props.tool) == null ? void 0 : _a.providerSlug) || ((_b = props.tool) == null ? void 0 : _b.id) || "";
      if (props.isEn) {
        return `Use hoxi_tools${prov ? ` (provider="${prov}")` : ""} to ${uc.prompt}`;
      }
      return `\u4F7F\u7528 hoxi_tools${prov ? `\uFF08provider="${prov}"\uFF09` : ""}\uFF1A${uc.promptZh || uc.prompt}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiToolBrandMark = __nuxt_component_1;
      const _component_UIcon = _sfc_main$Y;
      const _component_NuxtLink = __nuxt_component_3$3;
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.open && __props.tool) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/60" role="dialog" aria-modal="true"><div class="w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 p-5 sm:p-7 space-y-6"><div class="flex items-start justify-between gap-4"><div class="flex items-start gap-3.5 min-w-0">`);
          _push2(ssrRenderComponent(_component_HoxiToolBrandMark, {
            name: __props.tool.providerSlug || __props.tool.id,
            label: __props.tool.name,
            "logo-url": __props.tool.logoUrl,
            "logo-dark": __props.tool.logoDark,
            icon: __props.tool.icon,
            size: 44
          }, null, _parent));
          _push2(`<div class="min-w-0"><div class="flex flex-wrap items-center gap-2"><h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">${ssrInterpolate(__props.tool.name)}</h2><span class="rounded-full px-2 py-0.5 font-mono text-[10px] font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase">${ssrInterpolate(kindLabel.value)}</span>`);
          if (__props.tool.discountPercent) {
            _push2(`<span class="rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold bg-blue-600 text-white uppercase">${ssrInterpolate(__props.tool.discountPercent)}% OFF </span>`);
          } else {
            _push2(`<!---->`);
          }
          if (__props.tool.noMarkup === "all" || __props.tool.noMarkup === "partial") {
            _push2(`<span class="rounded-full px-2 py-0.5 font-mono text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/60 uppercase"${ssrRenderAttr("title", __props.tool.noMarkup === "partial" ? _ctx.$t("hoxi.tools.zeroMarkupPartialTip") : _ctx.$t("hoxi.tools.zeroMarkupTip"))}>${ssrInterpolate(_ctx.$t("hoxi.tools.zeroMarkup"))}`);
            if (__props.tool.noMarkup === "partial") {
              _push2(`<!--[-->*<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><p class="mt-1 font-mono text-xs text-slate-400 dark:text-slate-500">${ssrInterpolate(__props.tool.categoryLabel)} `);
          if (__props.endpoints.length > 0 || __props.tool.pricing) {
            _push2(`<!--[--> \xB7 ${ssrInterpolate(__props.tool.pricing)}<!--]-->`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</p></div></div><div class="flex items-center gap-2 shrink-0">`);
          if (__props.tool.docsUrl) {
            _push2(`<a${ssrRenderAttr("href", __props.tool.docsUrl)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 transition-colors"><span>${ssrInterpolate(_ctx.$t("hoxi.tools.viewDocs"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-up-right",
              class: "w-3.5 h-3.5 text-slate-400"
            }, null, _parent));
            _push2(`</a>`);
          } else {
            _push2(`<!---->`);
          }
          if (__props.tool.affiliateUrl || __props.tool.url) {
            _push2(`<a${ssrRenderAttr("href", __props.tool.affiliateUrl || __props.tool.url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors"><span>${ssrInterpolate(_ctx.$t("hoxi.tools.visitWebsite"))}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-up-right-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent));
            _push2(`</a>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"${ssrRenderAttr("aria-label", _ctx.$t("hoxi.tools.closeModal"))}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: "ph:x-bold",
            class: "w-4 h-4"
          }, null, _parent));
          _push2(`</button></div></div><p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">${ssrInterpolate(__props.tool.description)}</p><div class="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-100"><div class="flex flex-wrap items-center justify-between gap-2 mb-2.5"><div class="flex flex-wrap items-center gap-2"><span class="font-mono text-[11px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>${ssrInterpolate(_ctx.$t("hoxi.tools.giveToAgent"))}</span></span>`);
          if (hasApiEndpoints.value) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/skills",
              class: "inline-flex items-center gap-1 rounded-full border border-blue-800/70 bg-blue-950/60 hover:bg-blue-900/70 px-2 py-0.5 font-mono text-[10px] text-blue-300 transition-colors",
              onClick: ($event) => emit("close")
            }, {
              default: withCtx((_, _push3, _parent2, _scopeId) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:puzzle-piece-bold",
                    class: "w-3 h-3"
                  }, null, _parent2, _scopeId));
                  _push3(`<span${_scopeId}>hoxi_tools \xB7 /tools</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:puzzle-piece-bold",
                      class: "w-3 h-3"
                    }),
                    createVNode("span", null, "hoxi_tools \xB7 /tools")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><button type="button" class="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 hover:bg-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-200 transition-colors cursor-pointer">`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: copiedKey.value === "main-agent" ? "ph:check-bold" : "ph:copy-bold",
            class: "w-3.5 h-3.5 text-emerald-400"
          }, null, _parent));
          _push2(`<span>${ssrInterpolate(copiedKey.value === "main-agent" ? _ctx.$t("hoxi.tools.copied") : _ctx.$t("hoxi.tools.copyPrompt"))}</span></button></div><div class="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 break-words select-all"><span class="text-emerald-400 select-none mr-2">$</span>${ssrInterpolate(mainAgentPrompt.value)}</div></div>`);
          if (__props.endpoints.length > 0) {
            _push2(`<div class="space-y-3"><div class="flex items-center justify-between"><h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">${ssrInterpolate(_ctx.$t("hoxi.tools.endpointsTitle"))} <span class="ml-1">(${ssrInterpolate(__props.endpoints.length)})</span></h3></div><div class="grid gap-3 sm:grid-cols-2"><!--[-->`);
            ssrRenderList(__props.endpoints, (ep) => {
              _push2(`<div class="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 p-3.5 flex flex-col justify-between gap-2.5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"><div class="space-y-1.5 min-w-0"><div class="flex items-center justify-between gap-2"><span class="font-mono text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">${ssrInterpolate(ep.providerDisplayName)}</span>`);
              if (ep.noMarkup) {
                _push2(`<span class="shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[9px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 uppercase">${ssrInterpolate(_ctx.$t("hoxi.tools.zeroMarkup"))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="text-sm font-semibold text-slate-900 dark:text-white truncate"${ssrRenderAttr("title", ep.displayName)}>${ssrInterpolate(ep.displayName)}</div><div class="font-mono text-[11px] text-blue-600 dark:text-blue-400 truncate"${ssrRenderAttr("title", ep.endpoint)}>${ssrInterpolate(ep.endpoint)}</div>`);
              if (ep.displayDescription) {
                _push2(`<p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">${ssrInterpolate(ep.displayDescription)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="pt-2.5 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between gap-2"><div class="font-mono text-xs"><span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(ep.priceAmt)}</span><span class="text-slate-400 dark:text-slate-500 ml-1 text-[11px]">${ssrInterpolate(ep.priceUnit)}</span></div><button type="button" class="inline-flex items-center gap-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400 px-2 py-1 font-mono text-[10px] text-slate-600 dark:text-slate-300 transition-colors cursor-pointer">`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: copiedKey.value === `ep:${ep.provider}:${ep.endpoint}` ? "ph:check-bold" : "ph:copy",
                class: "w-3 h-3"
              }, null, _parent));
              _push2(`<span>${ssrInterpolate(copiedKey.value === `ep:${ep.provider}:${ep.endpoint}` ? _ctx.$t("hoxi.tools.copied") : _ctx.$t("hoxi.tools.copyPrompt"))}</span></button></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (__props.useCases.length > 0) {
            _push2(`<div class="space-y-3"><h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1.5">`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:robot-bold",
              class: "w-3.5 h-3.5 text-slate-400"
            }, null, _parent));
            _push2(`<span>${ssrInterpolate(_ctx.$t("hoxi.tools.useCasesTitle"))}</span></h3><div class="space-y-2.5"><!--[-->`);
            ssrRenderList(__props.useCases, (uc, idx) => {
              _push2(`<div class="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950/40 p-3.5 space-y-2"><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2.5 min-w-0"><span class="font-mono text-xs font-semibold text-slate-400 dark:text-slate-500">${ssrInterpolate(String(idx + 1).padStart(2, "0"))}</span><span class="text-sm font-semibold text-slate-900 dark:text-white truncate">${ssrInterpolate(__props.isEn ? uc.title : uc.titleZh || uc.title)}</span></div><button type="button" class="shrink-0 inline-flex items-center gap-1 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-blue-500 px-2 py-1 font-mono text-[11px] text-slate-600 dark:text-slate-300 transition-colors cursor-pointer">`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: copiedKey.value === `uc:${uc.id}` ? "ph:check-bold" : "ph:copy",
                class: "w-3 h-3"
              }, null, _parent));
              _push2(`<span>${ssrInterpolate(copiedKey.value === `uc:${uc.id}` ? _ctx.$t("hoxi.tools.copied") : _ctx.$t("hoxi.tools.copyPrompt"))}</span></button></div><div class="rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 px-3 py-2 font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${ssrInterpolate(formatUseCasePrompt(uc))}</div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (parentCategories.value.length > 0) {
            _push2(`<div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2"><span class="font-mono text-[11px] text-slate-400 dark:text-slate-500 mr-1">${ssrInterpolate(_ctx.$t("hoxi.tools.relatedCategories"))}: </span><!--[-->`);
            ssrRenderList(parentCategories.value, (cat) => {
              _push2(`<button type="button" class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400 px-3 py-1 text-xs text-slate-700 dark:text-slate-200 transition-colors cursor-pointer">`);
              if (cat.icon) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: cat.icon,
                  class: "w-3.5 h-3.5 text-slate-400"
                }, null, _parent));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span>${ssrInterpolate(cat.label)}</span></button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiToolDetailModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "HoxiToolDetailModal" });

export { __nuxt_component_2 as default };
//# sourceMappingURL=HoxiToolDetailModal-MKeSjti7.mjs.map
