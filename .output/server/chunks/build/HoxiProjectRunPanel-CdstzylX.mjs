import { E as useLocaleRouter, j as _sfc_main$Z, P as __nuxt_component_3$3 } from './server.mjs';
import { defineComponent, computed, reactive, ref, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
  __name: "HoxiProjectRunPanel",
  __ssrInlineRender: true,
  props: {
    projectSlug: {},
    projectName: {},
    manifest: {},
    locale: {}
  },
  setup(__props) {
    const props = __props;
    const { localePath } = useLocaleRouter();
    const isEn = computed(() => props.locale === "en");
    const formValues = reactive({});
    const running = ref(false);
    const errorMsg = ref("");
    const runResult = ref(null);
    const copiedResult = ref(false);
    const copiedDocker = ref(false);
    function fillSampleValues() {
      const fields = props.manifest.inputs || [];
      for (const field of fields) {
        formValues[field.key] = isEn.value ? field.sampleValueEn || field.sampleValue : field.sampleValue;
      }
    }
    watch(
      () => [props.projectSlug, props.locale, props.manifest.mode],
      () => {
        errorMsg.value = "";
        runResult.value = null;
        if (props.manifest.mode === "workflow_playground") {
          fillSampleValues();
        }
      },
      { immediate: true }
    );
    const dockerQuickCommand = computed(() => {
      var _a, _b;
      const image = props.manifest.dockerImage || "calciumion/new-api:latest";
      const port = props.manifest.defaultPort || 3e3;
      const envBase = ((_a = props.manifest.injectAinodeEnv) == null ? void 0 : _a.baseUrlKey) || "OPENAI_API_BASE";
      const envKey = ((_b = props.manifest.injectAinodeEnv) == null ? void 0 : _b.apiKeyKey) || "OPENAI_API_KEY";
      return `docker run -d --name ${props.projectSlug} -p ${port}:${port} -e ${envBase}=https://api.ainode.run/v1 -e ${envKey}=$AINODE_API_KEY ${image}`;
    });
    const ui = computed(() => {
      if (isEn.value) {
        return {
          playgroundBadge: "LIVE WORKFLOW SANDBOX",
          playgroundTitle: `Try "${props.projectName}" Core Workflow Online`,
          playgroundDesc: "Pre-filled with real business inputs. Run directly via AINode and turn it into your own paid micro-site.",
          fillSample: "Reset Sample Input",
          runBtn: "Run Live Workflow Now",
          runningBtn: "Running on AINode\u2026",
          costNote: (pts) => `Est. ~${pts} compute pts / run \xB7 Free trial quota included`,
          copyOutput: "Copy Output",
          copied: "Copied",
          monetizeFallback: "Satisfied with this workflow? Launch a turnkey paid site in 3 minutes.",
          clonePaidSiteBtn: "Clone as Paid Micro-Site",
          openShoparkBtn: "Launch Cross-Border Store on ShopArk",
          gopanelBadge: "VERIFIED CONTAINER RECIPE",
          gopanelTitle: `Deploy "${props.projectName}" to Your GoPanel Server`,
          gopanelDesc: "Verified self-hosted image with automatic AINode API gateway injection in Hoxi Client.",
          openClientDeploy: "1-Click Install in Hoxi Client",
          copyDockerBtn: "Copy Docker Command"
        };
      }
      return {
        playgroundBadge: "AINODE \u5B9E\u65F6\u5DE5\u4F5C\u6D41\u6C99\u76D2",
        playgroundTitle: `\u5728\u7EBF\u8BD5\u8DD1\u300C${props.projectName}\u300D\u6838\u5FC3\u4EA4\u4ED8\u95ED\u73AF`,
        playgroundDesc: "\u5DF2\u9884\u586B\u771F\u5B9E\u884C\u4E1A\u6837\u4F8B\u53C2\u6570\uFF0C\u70B9\u51FB\u5373\u53EF\u9A8C\u8BC1\u6838\u5FC3\u4EA7\u51FA\uFF0C\u5E76\u652F\u6301\u4E00\u952E\u5C01\u88C5\u6210\u4F60\u7684\u72EC\u7ACB\u6536\u6B3E\u7AD9\u3002",
        fillSample: "\u91CD\u7F6E\u5B9E\u6218\u6837\u4F8B",
        runBtn: "\u7ACB\u5373\u5728\u7EBF\u8BD5\u8DD1\u5DE5\u4F5C\u6D41",
        runningBtn: "\u6B63\u5728\u8C03\u7528\u7B97\u529B\u6267\u884C\u2026",
        costNote: (pts) => `\u5355\u6B21\u7EA6\u6D88\u8017 ${pts} \u7B97\u529B\u70B9 \xB7 \u542B\u514D\u914D\u7F6E\u4F53\u9A8C\u989D\u5EA6`,
        copyOutput: "\u590D\u5236\u7ED3\u679C",
        copied: "\u5DF2\u590D\u5236",
        monetizeFallback: "\u8DD1\u901A\u4EA4\u4ED8\u6548\u679C\u540E\uFF0C\u53EF\u76F4\u63A5\u5C01\u88C5\u6210\u5E26\u81EA\u52A8\u6536\u6B3E\u4E0E\u53D1\u5361\u7684\u540C\u6B3E\u72EC\u7ACB\u7AD9\uFF1A",
        clonePaidSiteBtn: "\u7528 APay \u4E00\u952E\u5C01\u88C5\u6210\u6536\u8D39\u5FAE\u7AD9",
        openShoparkBtn: "\u7528 ShopArk \u5F00\u8BBE\u540C\u6B3E\u5916\u8D38\u7AD9",
        gopanelBadge: "\u5DF2\u6838\u9A8C\u5BB9\u5668\u76F4\u88C5\u914D\u65B9",
        gopanelTitle: `\u5728 GoPanel \u670D\u52A1\u5668\u4E0A\u4E00\u952E\u62C9\u8D77\u300C${props.projectName}\u300D`,
        gopanelDesc: "\u5DF2\u901A\u8FC7\u5BB9\u5668\u7F16\u6392\u63A2\u9488\u6838\u9A8C\uFF0C\u5728 Hoxi \u5BA2\u6237\u7AEF\u9009\u62E9 GoPanel \u8282\u70B9\u5373\u53EF\u81EA\u52A8\u6CE8\u5165 AINode \u7B97\u529B\u5BC6\u94A5\u5B8C\u6210\u90E8\u7F72\u3002",
        openClientDeploy: "\u5728 Hoxi \u5BA2\u6237\u7AEF\u4E00\u952E\u5B89\u88C5\u5230\u670D\u52A1\u5668",
        copyDockerBtn: "\u590D\u5236 Docker \u542F\u52A8\u547D\u4EE4"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_UIcon = _sfc_main$Z;
      const _component_NuxtLink = __nuxt_component_3$3;
      if (__props.manifest.mode === "workflow_playground" || __props.manifest.mode === "gopanel_app") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          id: "project-run-panel",
          class: "mt-8 rounded-2xl border border-blue-200/80 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/50 via-white to-emerald-50/30 dark:from-[#0f1420] dark:via-[#0d0f14] dark:to-[#0d1615] p-6 sm:p-8 space-y-6"
        }, _attrs))}>`);
        if (__props.manifest.mode === "workflow_playground") {
          _push(`<!--[--><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div class="space-y-1"><div class="inline-flex items-center gap-2 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:lightning-bold",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(ui.value.playgroundBadge)}</span>`);
          if (__props.manifest.ainodeModel) {
            _push(`<span class="px-2 py-0.5 rounded bg-slate-900/5 dark:bg-white/10 text-slate-700 dark:text-slate-300">${ssrInterpolate(__props.manifest.ainodeModel)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><h2 class="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white">${ssrInterpolate(ui.value.playgroundTitle)}</h2><p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">${ssrInterpolate(__props.manifest.verificationNote || ui.value.playgroundDesc)}</p></div><button type="button" class="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 bg-white dark:bg-[#111520] text-xs font-semibold text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-colors cursor-pointer">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:magic-wand-bold",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(ui.value.fillSample)}</span></button></div><div class="grid gap-4"><!--[-->`);
          ssrRenderList(__props.manifest.inputs || [], (field) => {
            _push(`<div class="space-y-1.5"><label class="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">${ssrInterpolate(isEn.value ? field.labelEn || field.label : field.label)}</label>`);
            if (field.type === "textarea") {
              _push(`<textarea rows="3"${ssrRenderAttr("placeholder", isEn.value ? field.placeholderEn || field.sampleValueEn || field.sampleValue : field.placeholder || field.sampleValue)} class="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-mono leading-relaxed">${ssrInterpolate(formValues[field.key])}</textarea>`);
            } else {
              _push(`<input${ssrRenderAttr("value", formValues[field.key])} type="text"${ssrRenderAttr("placeholder", isEn.value ? field.placeholderEn || field.sampleValueEn || field.sampleValue : field.placeholder || field.sampleValue)} class="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-mono">`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div><div class="flex flex-wrap items-center justify-between gap-3"><button type="button"${ssrIncludeBooleanAttr(running.value) ? " disabled" : ""} class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white px-5 py-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: running.value ? "ph:circle-notch-bold" : "ph:play-fill",
            class: ["w-4 h-4", { "animate-spin": running.value }]
          }, null, _parent));
          _push(`<span>${ssrInterpolate(running.value ? ui.value.runningBtn : ui.value.runBtn)}</span></button><span class="text-xs font-mono text-slate-500 dark:text-slate-400">${ssrInterpolate(ui.value.costNote(__props.manifest.estimatedPoints || 12))}</span></div>`);
          if (errorMsg.value) {
            _push(`<div class="rounded-xl border border-rose-200 dark:border-rose-900/70 bg-rose-50/80 dark:bg-rose-950/30 px-4 py-3 text-xs sm:text-sm text-rose-700 dark:text-rose-300">${ssrInterpolate(errorMsg.value)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (runResult.value) {
            _push(`<div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] overflow-hidden"><div class="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 bg-slate-50/70 dark:bg-[#111319]"><div class="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-300"><span class="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:check-circle-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent));
            _push(` ${ssrInterpolate(runResult.value.executionMode === "live_ainode" ? "AINode Live" : "Preview")}</span><span>\xB7 ${ssrInterpolate(runResult.value.modelUsed)}</span><span>\xB7 ${ssrInterpolate(runResult.value.latencyMs)}ms</span>`);
            if ((_a = runResult.value.usage) == null ? void 0 : _a.totalTokens) {
              _push(`<span>\xB7 ${ssrInterpolate(runResult.value.usage.totalTokens)} tokens</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><button type="button" class="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 cursor-pointer">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: copiedResult.value ? "ph:check-bold" : "ph:copy-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(copiedResult.value ? ui.value.copied : ui.value.copyOutput)}</span></button></div>`);
            if (runResult.value.previewNotice) {
              _push(`<div class="px-4 py-2 bg-amber-50/70 dark:bg-amber-950/20 border-b border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-800 dark:text-amber-300">${ssrInterpolate(runResult.value.previewNotice)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<pre class="p-4 sm:p-5 text-xs sm:text-sm font-mono whitespace-pre-wrap break-words text-slate-800 dark:text-slate-200 leading-relaxed max-h-[420px] overflow-y-auto">${ssrInterpolate(runResult.value.output)}</pre><div class="px-4 py-3.5 border-t border-slate-100 dark:border-slate-800 bg-emerald-50/50 dark:bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">${ssrInterpolate(((_b = runResult.value.monetize) == null ? void 0 : _b.prompt) || ui.value.monetizeFallback)}</div>`);
            if (((_c = runResult.value.monetize) == null ? void 0 : _c.engine) === "shopark") {
              _push(`<a${ssrRenderAttr("href", runResult.value.monetize.launchpadPath || "https://myshopark.com")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 shrink-0 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-xs font-bold transition-colors">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:storefront-bold",
                class: "w-4 h-4"
              }, null, _parent));
              _push(`<span>${ssrInterpolate(ui.value.openShoparkBtn)}</span></a>`);
            } else {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)(`/site-builder?project=${__props.projectSlug}`),
                class: "inline-flex items-center justify-center gap-1.5 shrink-0 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-xs font-bold transition-colors"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:rocket-launch-bold",
                      class: "w-4 h-4"
                    }, null, _parent2, _scopeId));
                    _push2(`<span${_scopeId}>${ssrInterpolate(ui.value.clonePaidSiteBtn)}</span>`);
                  } else {
                    return [
                      createVNode(_component_UIcon, {
                        name: "ph:rocket-launch-bold",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", null, toDisplayString(ui.value.clonePaidSiteBtn), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent));
            }
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else if (__props.manifest.mode === "gopanel_app") {
          _push(`<!--[--><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4"><div class="space-y-1.5"><div class="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:cube-bold",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(ui.value.gopanelBadge)}</span>`);
          if (__props.manifest.gopanelAppKey) {
            _push(`<span class="px-2 py-0.5 rounded bg-blue-100/80 dark:bg-blue-950 text-blue-700 dark:text-blue-300"> appKey: ${ssrInterpolate(__props.manifest.gopanelAppKey)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><h2 class="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white">${ssrInterpolate(ui.value.gopanelTitle)}</h2><p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">${ssrInterpolate(__props.manifest.verificationNote || ui.value.gopanelDesc)}</p></div><div class="flex flex-wrap gap-2.5 shrink-0">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)("/download"),
            class: "inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 text-xs sm:text-sm font-bold transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:desktop-tower-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(ui.value.openClientDeploy)}</span>`);
              } else {
                return [
                  createVNode(_component_UIcon, {
                    name: "ph:desktop-tower-bold",
                    class: "w-4 h-4"
                  }),
                  createVNode("span", null, toDisplayString(ui.value.openClientDeploy), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<button type="button" class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-blue-500 cursor-pointer">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: copiedDocker.value ? "ph:check-bold" : "ph:terminal-window-bold",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(copiedDocker.value ? ui.value.copied : ui.value.copyDockerBtn)}</span></button></div></div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-x-auto leading-relaxed"><code>${ssrInterpolate(dockerQuickCommand.value)}</code></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/projects/HoxiProjectRunPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HoxiProjectRunPanel = Object.assign(_sfc_main, { __name: "HoxiProjectRunPanel" });

export { HoxiProjectRunPanel as default };
//# sourceMappingURL=HoxiProjectRunPanel-CdstzylX.mjs.map
