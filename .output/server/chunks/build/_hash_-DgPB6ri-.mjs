import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n$1, E as useLocaleRouter, y as useFetch, bA as useSeoMeta, P as __nuxt_component_3$4, j as _sfc_main$10 } from './server.mjs';
import __nuxt_component_3 from './HoxiReadinessReport-mJcC1H71.mjs';
import { defineComponent, computed, withAsyncContext, ref, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useReadinessQuiz } from './useReadinessQuiz-BYG-RsBh.mjs';
import { n as normalizeHoxiLocale } from './projectMatcher-mcLmK4UC.mjs';
import { r as resolveReadinessHash } from './readinessHash-D0DMxJPv.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:child_process';
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
import './HoxiReadinessRadar-Bkw4--UY.mjs';
import './useHoxiCommunity-DiiZNEqV.mjs';
import './readiness-i18n-JBjMTJkv.mjs';
import './useHoxiProjects-w0PcEYoF.mjs';
import './projects-DCfvntB8.mjs';
import './blogOgCard-Dd_qPNIc.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[hash]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const { t, locale } = useI18n$1();
    const { localePath } = useLocaleRouter();
    const {
      results: localResults,
      isEvaluating,
      history,
      activeHistoryId,
      loadHistoryRecord,
      restartQuiz,
      uiCopy
    } = useReadinessQuiz();
    const currentLocale = computed(() => normalizeHoxiLocale(locale.value));
    const hashParam = computed(() => {
      const raw = route.params.hash;
      const parts = Array.isArray(raw) ? raw : [raw];
      return String(parts.at(-1) || "").trim().toLowerCase();
    });
    const { data: serverReport, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `/api/hoxi/readiness/${hashParam.value}`,
      {
        key: () => `hoxi-readiness-report-${hashParam.value}-${currentLocale.value}`,
        query: computed(() => ({ locale: currentLocale.value }))
      },
      "$GxkOS2d1gl"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const reportResult = computed(() => {
      if (serverReport.value && serverReport.value.roleMeta) {
        return serverReport.value;
      }
      if (localResults.value && (!hashParam.value || localResults.value.hash === hashParam.value)) {
        return localResults.value;
      }
      return null;
    });
    const copied = ref(false);
    const shareReport = async () => {
      var _a, _b;
      const r = reportResult.value;
      if (!r) return;
      const effectiveHash = hashParam.value || r.hash || resolveReadinessHash({
        id: activeHistoryId.value,
        role: r.role,
        scores: r.dimensionMap
      });
      const origin = "https://hoxi.ai";
      const reportUrl = `${origin}${localePath(`/readiness/${effectiveHash}`)}`;
      const topProj = (_a = r.matchedProjects) == null ? void 0 : _a[0];
      const topProjUrl = topProj ? `${origin}${localePath(`/projects/${topProj.project.slug || topProj.project.id}`)}` : "";
      const isZh = currentLocale.value === "zh" || currentLocale.value === "zh-HK";
      const lines = [
        isZh ? `\u3010\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u6D4B\u8BC4\u3011${r.roleMeta.name} \xB7 \u7EFC\u5408\u5F97\u5206 ${r.overallScore}/100` : `[Solo Company Readiness] ${r.roleMeta.name} \xB7 Score ${r.overallScore}/100`,
        ((_b = r.aiEvaluation) == null ? void 0 : _b.summary) || r.tier.summary,
        ...topProj ? [
          isZh ? `\u9996\u9009\u5339\u914D\u9879\u76EE\uFF1A${topProj.project.name}\uFF08${topProj.matchScore}%\uFF09 ${topProjUrl}` : `Top Match: ${topProj.project.name} (${topProj.matchScore}%) ${topProjUrl}`
        ] : [],
        reportUrl
      ];
      try {
        await (void 0).clipboard.writeText(lines.join("\n"));
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 2200);
      } catch {
      }
    };
    const handleRestart = async () => {
      restartQuiz();
      await router.push(localePath("/readiness?start=1"));
    };
    const handleSelectHistory = async (record) => {
      const targetHash = loadHistoryRecord(record);
      if (targetHash && targetHash !== hashParam.value) {
        await router.push(localePath(`/readiness/${targetHash}`));
      }
    };
    const seoTitle = computed(() => {
      var _a, _b, _c;
      const r = reportResult.value;
      if (!r) return String(t("hoxi.readiness.seoTitle"));
      const topProj = (_c = (_b = (_a = r.matchedProjects) == null ? void 0 : _a[0]) == null ? void 0 : _b.project) == null ? void 0 : _c.name;
      const topSuffix = topProj ? ` \xB7 ${topProj}` : "";
      return `${r.roleMeta.name} ${r.overallScore}/100 (${r.archetype.name})${topSuffix} \u2014 ${t("hoxi.readiness.title")}`;
    });
    const seoDescription = computed(() => {
      var _a;
      const r = reportResult.value;
      if (!r) return String(t("hoxi.readiness.seoDescription"));
      return ((_a = r.aiEvaluation) == null ? void 0 : _a.summary) || r.tier.summary || String(t("hoxi.readiness.seoDescription"));
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$10;
      const _component_HoxiReadinessReport = __nuxt_component_3;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 md:py-16 max-w-4xl mx-auto space-y-6"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-3"${_scopeId}><div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 min-w-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/"),
              class: "hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.nav.home"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.home")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>/</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/readiness"),
              class: "hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hoxi.readiness.title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hoxi.readiness.title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>/</span><span class="font-mono text-slate-900 dark:text-white font-medium truncate"${_scopeId}> #${ssrInterpolate(hashParam.value)}</span></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/readiness?start=1"),
              class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "ph:lightning-bold",
                    class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref(uiCopy).visitorBannerCta)}</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:lightning-bold",
                      class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                    }),
                    createVNode("span", null, toDisplayString(unref(uiCopy).visitorBannerCta), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (reportResult.value) {
              _push2(`<button type="button" class="${ssrRenderClass([copied.value ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500", "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: copied.value ? "ph:check-bold" : "ph:share-network-bold",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(copied.value ? _ctx.$t("hoxi.readiness.copiedBtn") : _ctx.$t("hoxi.readiness.copyBtn"))}</span></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (unref(pending) && !reportResult.value) {
              _push2(`<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-sm text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(unref(uiCopy).aiEvaluating)}</div>`);
            } else if (reportResult.value) {
              _push2(ssrRenderComponent(_component_HoxiReadinessReport, {
                result: reportResult.value,
                hash: hashParam.value,
                "is-evaluating": unref(isEvaluating),
                history: unref(history),
                "active-history-id": unref(activeHistoryId),
                "ui-copy": unref(uiCopy),
                onRestart: handleRestart,
                onSelectHistory: handleSelectHistory
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center space-y-4"${_scopeId}><div class="text-lg font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.title"))}</div><p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(unref(uiCopy).visitorBannerTitle)}</p>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(localePath)("/readiness?start=1"),
                class: "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-500 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(unref(uiCopy).visitorBannerCta)}</span>`);
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: "ph:arrow-right",
                      class: "w-4 h-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(unref(uiCopy).visitorBannerCta), 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4"
                      })
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
              createVNode("div", { class: "py-8 md:py-16 max-w-4xl mx-auto space-y-6" }, [
                createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3" }, [
                  createVNode("div", { class: "flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 min-w-0" }, [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/"),
                      class: "hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.home")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode("span", null, "/"),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/readiness"),
                      class: "hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.readiness.title")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode("span", null, "/"),
                    createVNode("span", { class: "font-mono text-slate-900 dark:text-white font-medium truncate" }, " #" + toDisplayString(hashParam.value), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/readiness?start=1"),
                      class: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: "ph:lightning-bold",
                          class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                        }),
                        createVNode("span", null, toDisplayString(unref(uiCopy).visitorBannerCta), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    reportResult.value ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "button",
                      class: ["inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer", copied.value ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300" : "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500"],
                      onClick: shareReport
                    }, [
                      createVNode(_component_UIcon, {
                        name: copied.value ? "ph:check-bold" : "ph:share-network-bold",
                        class: "w-3.5 h-3.5"
                      }, null, 8, ["name"]),
                      createVNode("span", null, toDisplayString(copied.value ? _ctx.$t("hoxi.readiness.copiedBtn") : _ctx.$t("hoxi.readiness.copyBtn")), 1)
                    ], 2)) : createCommentVNode("", true)
                  ])
                ]),
                unref(pending) && !reportResult.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-sm text-slate-500 dark:text-slate-400"
                }, toDisplayString(unref(uiCopy).aiEvaluating), 1)) : reportResult.value ? (openBlock(), createBlock(_component_HoxiReadinessReport, {
                  key: 1,
                  result: reportResult.value,
                  hash: hashParam.value,
                  "is-evaluating": unref(isEvaluating),
                  history: unref(history),
                  "active-history-id": unref(activeHistoryId),
                  "ui-copy": unref(uiCopy),
                  onRestart: handleRestart,
                  onSelectHistory: handleSelectHistory
                }, null, 8, ["result", "hash", "is-evaluating", "history", "active-history-id", "ui-copy"])) : (openBlock(), createBlock("div", {
                  key: 2,
                  class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center space-y-4"
                }, [
                  createVNode("div", { class: "text-lg font-bold text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.readiness.title")), 1),
                  createVNode("p", { class: "text-xs sm:text-sm text-slate-500 dark:text-slate-400" }, toDisplayString(unref(uiCopy).visitorBannerTitle), 1),
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/readiness?start=1"),
                    class: "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-500 transition-colors"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(unref(uiCopy).visitorBannerCta), 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right",
                        class: "w-4 h-4"
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/readiness/[hash].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_hash_-DgPB6ri-.mjs.map
