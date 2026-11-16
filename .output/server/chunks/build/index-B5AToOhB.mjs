import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n$1, E as useLocaleRouter, bA as useSeoMeta, j as _sfc_main$_, P as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_3 from './HoxiReadinessProgress-BZl9C8v0.mjs';
import __nuxt_component_4 from './HoxiReadinessQuestion-CE9Bzti0.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, createTextVNode, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useReadinessQuiz } from './useReadinessQuiz-DUeLheVF.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:zlib';
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
import './readiness-i18n-JBjMTJkv.mjs';
import './projectMatcher-mcLmK4UC.mjs';
import './blogOgCard-Dd_qPNIc.mjs';
import './readinessHash-D0DMxJPv.mjs';
import './useHoxiProjects-CBwj1NtM.mjs';
import './projects-k3Tmu0Co.mjs';

const MIN_SAMPLE = 30;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    const { t } = useI18n$1();
    const { localePath } = useLocaleRouter();
    const {
      selectedRole,
      roles,
      dimensions,
      rolePreviewProjects,
      selectRole,
      currentIndex,
      currentQuestion,
      totalQuestions,
      answers,
      isCompleted,
      progressPercent,
      selectOption,
      nextQuestion,
      prevQuestion,
      jumpToQuestion,
      restartQuiz,
      results,
      history,
      activeHash,
      loadHistoryRecord,
      uiCopy
    } = useReadinessQuiz();
    const isStarted = ref(false);
    const currentRoleMeta = computed(() => roles.value[selectedRole.value]);
    const dimensionList = computed(() => Object.values(dimensions.value));
    const answeredCount = computed(() => Object.keys(answers.value).length);
    const hasSavedProgress = computed(() => answeredCount.value > 0);
    const latestReportHash = computed(() => {
      var _a, _b;
      return activeHash.value || ((_a = results.value) == null ? void 0 : _a.hash) || ((_b = history.value[0]) == null ? void 0 : _b.hash) || "";
    });
    const communityStats = ref({
      totalParticipants: 0,
      averageScore: null,
      roleCounts: {}
    });
    const formatDate = (iso) => {
      if (!iso) return "";
      return iso.replace("T", " ").slice(0, 16);
    };
    const scoreDelta = (idx) => {
      const curr = history.value[idx];
      const prev = history.value[idx + 1];
      if (!curr || !prev) return null;
      return curr.overallScore - prev.overallScore;
    };
    const startNewQuiz = () => {
      restartQuiz();
      isStarted.value = true;
    };
    const resumeQuiz = () => {
      isStarted.value = true;
    };
    const handleNext = async () => {
      const hash = await nextQuestion();
      if (hash) {
        await router.push(localePath(`/readiness/${hash}`));
      }
    };
    const handleReviewRecord = async (record) => {
      const hash = loadHistoryRecord(record);
      if (hash) {
        await router.push(localePath(`/readiness/${hash}`));
      }
    };
    useSeoMeta({
      title: computed(() => String(t("hoxi.readiness.seoTitle"))),
      description: computed(() => String(t("hoxi.readiness.seoDescription"))),
      ogTitle: computed(() => String(t("hoxi.readiness.seoTitle"))),
      ogDescription: computed(() => String(t("hoxi.readiness.seoDescription")))
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$_;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_HoxiReadinessProgress = __nuxt_component_3;
      const _component_HoxiReadinessQuestion = __nuxt_component_4;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}>`);
            if (!isStarted.value) {
              _push2(`<div class="max-w-4xl mx-auto space-y-10"${_scopeId}><div class="text-center space-y-4"${_scopeId}><div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"${_scopeId}></span><span${_scopeId}>`);
              if (communityStats.value.totalParticipants >= MIN_SAMPLE) {
                _push2(`<!--[-->${ssrInterpolate(_ctx.$t("hoxi.readiness.testedCount", { count: communityStats.value.totalParticipants }))} \xB7 <!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`${ssrInterpolate(_ctx.$t("hoxi.readiness.badgeMeta"))}</span></div><h1 class="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.title"))}</h1></div><div class="space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 dark:text-slate-400"${_scopeId}><span class="flex h-5 w-5 rounded-full bg-blue-500 text-white items-center justify-center text-[10px] font-mono"${_scopeId}>1</span><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.chooseRole"))}</span></div></div><div class="grid sm:grid-cols-2 gap-3.5"${_scopeId}><!--[-->`);
              ssrRenderList(Object.values(unref(roles)), (role) => {
                _push2(`<button type="button" class="${ssrRenderClass([unref(selectedRole) === role.key ? "border-blue-500 bg-blue-50/50 shadow-sm ring-1 ring-blue-500/30 dark:bg-blue-950/40" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800/60", "p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group relative"])}"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-2xs dark:bg-slate-900 dark:border-slate-800"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: role.icon,
                  class: ["w-4 h-4", role.color]
                }, null, _parent2, _scopeId));
                _push2(`</span><div${_scopeId}><h3 class="text-sm font-bold text-slate-900 leading-tight dark:text-white"${_scopeId}>${ssrInterpolate(role.name)}</h3><div class="text-[11px] text-slate-400 font-normal dark:text-slate-500"${_scopeId}>${ssrInterpolate(role.title)}</div></div></div><div class="${ssrRenderClass([unref(selectedRole) === role.key ? "bg-blue-500 text-white" : "border border-slate-300 dark:border-slate-700", "w-5 h-5 rounded-full flex items-center justify-center transition-colors"])}"${_scopeId}>`);
                if (unref(selectedRole) === role.key) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:check-bold",
                    class: "w-3 h-3"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><p class="text-xs text-slate-600 leading-relaxed mt-1 dark:text-slate-300"${_scopeId}>${ssrInterpolate(role.description)}</p></div><div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 dark:border-slate-800 dark:text-slate-500"${_scopeId}><span class="text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(role.targetDilemma)}</span>`);
                if ((communityStats.value.roleCounts[role.key] || 0) >= MIN_SAMPLE) {
                  _push2(`<span class="font-mono tabular-nums"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.testedShort", { count: communityStats.value.roleCounts[role.key] }))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></button>`);
              });
              _push2(`<!--]--></div></div><div class="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 p-6 md:p-8 space-y-4 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.authorInitial"))}</div><div${_scopeId}><div class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.authorName"))}</div><div class="text-xs text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.whyTitle"))}</div></div></div><div class="space-y-3 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 dark:text-slate-300 dark:border-slate-800"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.whyP1"))}</p><p${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.whyP2Prefix"))}<strong${_scopeId}>\u3010${ssrInterpolate(currentRoleMeta.value.name)}\u3011</strong>${ssrInterpolate(_ctx.$t("hoxi.readiness.whyP2Suffix"))}</p></div><div class="pt-2 flex flex-wrap items-center gap-3"${_scopeId}>`);
              if (hasSavedProgress.value && !unref(isCompleted)) {
                _push2(`<button type="button" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-xs"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.resumeBtn", { role: currentRoleMeta.value.name, answered: answeredCount.value, total: unref(totalQuestions) }))}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:play-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="button" class="${ssrRenderClass([hasSavedProgress.value && !unref(isCompleted) ? "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" : "bg-blue-500 text-white hover:bg-blue-600 shadow-xs", "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(hasSavedProgress.value && !unref(isCompleted) ? _ctx.$t("hoxi.readiness.restartBtn") : _ctx.$t("hoxi.readiness.startBtn", { role: currentRoleMeta.value.name }))}</span>`);
              if (!hasSavedProgress.value || unref(isCompleted)) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button>`);
              if (latestReportHash.value) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)(`/readiness/${latestReportHash.value}`),
                  class: "inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-blue-200 bg-blue-50/60 text-blue-700 hover:bg-blue-100/70 text-xs sm:text-sm font-semibold transition-colors dark:border-blue-800/70 dark:bg-blue-950/40 dark:text-blue-300"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:chart-polar-bold",
                        class: "w-4 h-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(unref(uiCopy).historyReviewBtn)} (#${ssrInterpolate(latestReportHash.value)})</span>`);
                    } else {
                      return [
                        createVNode(_component_UIcon, {
                          name: "ph:chart-polar-bold",
                          class: "w-4 h-4"
                        }),
                        createVNode("span", null, toDisplayString(unref(uiCopy).historyReviewBtn) + " (#" + toDisplayString(latestReportHash.value) + ")", 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
              if (unref(rolePreviewProjects).length > 0) {
                _push2(`<section class="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-slate-50/60 p-5 sm:p-6 md:p-8 space-y-5 dark:border-blue-900/60 dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-950"${_scopeId}><div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-800"${_scopeId}><div class="space-y-1.5"${_scopeId}><div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:rocket-launch-bold",
                  class: "w-3.5 h-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(uiCopy).rolePreviewBadge)} \xB7 ${ssrInterpolate(currentRoleMeta.value.name)}</span></div><h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(uiCopy).rolePreviewHeading)}</h2><p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300"${_scopeId}>${ssrInterpolate(unref(uiCopy).rolePreviewSubheading)}</p></div>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: unref(localePath)("/projects"),
                  class: "inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 shrink-0 dark:text-blue-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchViewAll"))}</span>`);
                      _push3(ssrRenderComponent(_component_UIcon, {
                        name: "ph:arrow-right-bold",
                        class: "w-4 h-4"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchViewAll")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right-bold",
                          class: "w-4 h-4"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div><div class="grid gap-4 lg:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(unref(rolePreviewProjects), (item) => {
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    key: item.project.id,
                    to: unref(localePath)(`/projects/${item.project.slug || item.project.id}`),
                    class: "group rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between space-y-4 hover:border-blue-400 transition-colors dark:border-slate-800 dark:bg-slate-900"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="space-y-3"${_scopeId2}><div class="flex items-center justify-between gap-2"${_scopeId2}><span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"${_scopeId2}>${ssrInterpolate(item.project.categoryLabel)}</span><span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/60"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:lightning-fill",
                          class: "w-3 h-3 text-emerald-500"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchScoreLabel", { score: item.matchScore }))}</span></span></div><div${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                        if (item.project.icon) {
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: item.project.icon,
                            class: "w-4 h-4 text-blue-600 shrink-0 dark:text-blue-400"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<h3 class="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400"${_scopeId2}>${ssrInterpolate(item.project.name)}</h3></div><p class="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2"${_scopeId2}>${ssrInterpolate(item.project.tagline)}</p></div><div class="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-xs text-slate-700 dark:bg-emerald-950/25 dark:border-emerald-900/50 dark:text-slate-200"${_scopeId2}><strong class="font-bold text-emerald-800 block mb-0.5 dark:text-emerald-300"${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchMonetizeLabel"))}</strong><span class="line-clamp-2"${_scopeId2}>${ssrInterpolate(item.howToMakeMoney)}</span></div>`);
                        if (item.project.monthlyCost) {
                          _push3(`<div class="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400"${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: "ph:calculator-bold",
                            class: "w-3.5 h-3.5 text-blue-500 shrink-0"
                          }, null, _parent3, _scopeId2));
                          _push3(`<span class="truncate"${_scopeId2}>${ssrInterpolate(item.project.monthlyCost)}</span></div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div><div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 dark:border-slate-800 dark:text-blue-400"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(_ctx.$t("hoxi.readiness.matchInspectBtn"))}</span>`);
                        _push3(ssrRenderComponent(_component_UIcon, {
                          name: "ph:arrow-right",
                          class: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                              createVNode("span", { class: "px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300" }, toDisplayString(item.project.categoryLabel), 1),
                              createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/60" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:lightning-fill",
                                  class: "w-3 h-3 text-emerald-500"
                                }),
                                createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchScoreLabel", { score: item.matchScore })), 1)
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                item.project.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: item.project.icon,
                                  class: "w-4 h-4 text-blue-600 shrink-0 dark:text-blue-400"
                                }, null, 8, ["name"])) : createCommentVNode("", true),
                                createVNode("h3", { class: "text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400" }, toDisplayString(item.project.name), 1)
                              ]),
                              createVNode("p", { class: "mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2" }, toDisplayString(item.project.tagline), 1)
                            ]),
                            createVNode("div", { class: "p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-xs text-slate-700 dark:bg-emerald-950/25 dark:border-emerald-900/50 dark:text-slate-200" }, [
                              createVNode("strong", { class: "font-bold text-emerald-800 block mb-0.5 dark:text-emerald-300" }, toDisplayString(_ctx.$t("hoxi.readiness.matchMonetizeLabel")), 1),
                              createVNode("span", { class: "line-clamp-2" }, toDisplayString(item.howToMakeMoney), 1)
                            ]),
                            item.project.monthlyCost ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:calculator-bold",
                                class: "w-3.5 h-3.5 text-blue-500 shrink-0"
                              }),
                              createVNode("span", { class: "truncate" }, toDisplayString(item.project.monthlyCost), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 dark:border-slate-800 dark:text-blue-400" }, [
                            createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchInspectBtn")), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right",
                              class: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div></section>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(history).length > 0) {
                _push2(`<div class="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 space-y-3 dark:border-slate-800 dark:bg-slate-900"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}><h2 class="text-sm font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(uiCopy).historyHeading)}</h2><p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5"${_scopeId}>${ssrInterpolate(unref(uiCopy).historySubheading)}</p></div><span class="text-xs font-mono text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(unref(history).length)}</span></div><div class="divide-y divide-slate-100 dark:divide-slate-800"${_scopeId}><!--[-->`);
                ssrRenderList(unref(history).slice(0, 6), (item, idx) => {
                  _push2(`<button type="button" class="w-full py-3 flex items-center justify-between gap-3 text-left hover:bg-slate-50/70 transition-colors rounded-lg px-2 -mx-2 dark:hover:bg-slate-800/50"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="flex flex-wrap items-center gap-2 text-xs"${_scopeId}><span class="font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(item.roleName)}</span>`);
                  if (item.hash) {
                    _push2(`<span class="font-mono text-[11px] text-blue-600 dark:text-blue-400"${_scopeId}>#${ssrInterpolate(item.hash)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span class="text-slate-400 dark:text-slate-500"${_scopeId}>\xB7</span><span class="font-mono text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(formatDate(item.createdAt))}</span>`);
                  if (item.topProjectName) {
                    _push2(`<span class="text-slate-500 truncate dark:text-slate-400"${_scopeId}> \xB7 ${ssrInterpolate(unref(uiCopy).historyTopMatchPrefix)}${ssrInterpolate(item.topProjectName)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div><div class="flex items-center gap-2.5 shrink-0"${_scopeId}>`);
                  if (scoreDelta(idx) !== null) {
                    _push2(`<span class="${ssrRenderClass([(scoreDelta(idx) || 0) >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400", "text-[11px] font-mono font-semibold"])}"${_scopeId}>${ssrInterpolate((scoreDelta(idx) || 0) >= 0 ? `+${scoreDelta(idx)}` : scoreDelta(idx))}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span class="font-mono text-sm font-black text-blue-600 tabular-nums dark:text-blue-400"${_scopeId}>${ssrInterpolate(item.overallScore)}/100 </span><span class="text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400"${_scopeId}>${ssrInterpolate(unref(uiCopy).historyReviewBtn)} \u2192 </span></div></button>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="space-y-4"${_scopeId}><div class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.dimensionsTitle"))}</div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"${_scopeId}><!--[-->`);
              ssrRenderList(dimensionList.value, (dim) => {
                _push2(`<div class="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 dark:border-slate-800 dark:bg-slate-900"${_scopeId}><div class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: dim.icon,
                  class: ["w-4 h-4", dim.color]
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(dim.name)}</span></div><p class="text-xs text-slate-500 leading-normal dark:text-slate-400"${_scopeId}>${ssrInterpolate(dim.description)}</p></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<div class="max-w-2xl mx-auto space-y-6"${_scopeId}><div class="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: currentRoleMeta.value.icon,
                class: ["w-4 h-4", currentRoleMeta.value.color]
              }, null, _parent2, _scopeId));
              _push2(`<span class="mr-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.currentRole"))}</span><strong class="text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(currentRoleMeta.value.name)}</strong></div><button type="button" class="text-blue-600 hover:underline font-medium dark:text-blue-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.switchRole"))}</button></div>`);
              _push2(ssrRenderComponent(_component_HoxiReadinessProgress, {
                "current-index": unref(currentIndex),
                "total-questions": unref(totalQuestions),
                "progress-percent": unref(progressPercent),
                "answered-map": unref(answers),
                onJump: unref(jumpToQuestion)
              }, null, _parent2, _scopeId));
              if (unref(currentQuestion)) {
                _push2(ssrRenderComponent(_component_HoxiReadinessQuestion, {
                  question: unref(currentQuestion),
                  "selected-option-index": unref(answers)[unref(currentQuestion).id],
                  "current-index": unref(currentIndex),
                  "total-questions": unref(totalQuestions),
                  onSelect: unref(selectOption),
                  onNext: handleNext,
                  onPrev: unref(prevQuestion)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-16" }, [
                !isStarted.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "max-w-4xl mx-auto space-y-10"
                }, [
                  createVNode("div", { class: "text-center space-y-4" }, [
                    createVNode("div", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60" }, [
                      createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" }),
                      createVNode("span", null, [
                        communityStats.value.totalParticipants >= MIN_SAMPLE ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString(_ctx.$t("hoxi.readiness.testedCount", { count: communityStats.value.totalParticipants })) + " \xB7 ", 1)
                        ], 64)) : createCommentVNode("", true),
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.readiness.badgeMeta")), 1)
                      ])
                    ]),
                    createVNode("h1", { class: "text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight dark:text-white" }, toDisplayString(_ctx.$t("hoxi.readiness.title")), 1)
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 dark:text-slate-400" }, [
                        createVNode("span", { class: "flex h-5 w-5 rounded-full bg-blue-500 text-white items-center justify-center text-[10px] font-mono" }, "1"),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.chooseRole")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "grid sm:grid-cols-2 gap-3.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(Object.values(unref(roles)), (role) => {
                        return openBlock(), createBlock("button", {
                          key: role.key,
                          type: "button",
                          class: ["p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group relative", unref(selectedRole) === role.key ? "border-blue-500 bg-blue-50/50 shadow-sm ring-1 ring-blue-500/30 dark:bg-blue-950/40" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800/60"],
                          onClick: ($event) => unref(selectRole)(role.key)
                        }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("span", { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-2xs dark:bg-slate-900 dark:border-slate-800" }, [
                                  createVNode(_component_UIcon, {
                                    name: role.icon,
                                    class: ["w-4 h-4", role.color]
                                  }, null, 8, ["name", "class"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-bold text-slate-900 leading-tight dark:text-white" }, toDisplayString(role.name), 1),
                                  createVNode("div", { class: "text-[11px] text-slate-400 font-normal dark:text-slate-500" }, toDisplayString(role.title), 1)
                                ])
                              ]),
                              createVNode("div", {
                                class: ["w-5 h-5 rounded-full flex items-center justify-center transition-colors", unref(selectedRole) === role.key ? "bg-blue-500 text-white" : "border border-slate-300 dark:border-slate-700"]
                              }, [
                                unref(selectedRole) === role.key ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: "ph:check-bold",
                                  class: "w-3 h-3"
                                })) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            createVNode("p", { class: "text-xs text-slate-600 leading-relaxed mt-1 dark:text-slate-300" }, toDisplayString(role.description), 1)
                          ]),
                          createVNode("div", { class: "mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 dark:border-slate-800 dark:text-slate-500" }, [
                            createVNode("span", { class: "text-slate-500 dark:text-slate-400" }, toDisplayString(role.targetDilemma), 1),
                            (communityStats.value.roleCounts[role.key] || 0) >= MIN_SAMPLE ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "font-mono tabular-nums"
                            }, toDisplayString(_ctx.$t("hoxi.readiness.testedShort", { count: communityStats.value.roleCounts[role.key] })), 1)) : createCommentVNode("", true)
                          ])
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 p-6 md:p-8 space-y-4 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("div", { class: "w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0" }, toDisplayString(_ctx.$t("hoxi.readiness.authorInitial")), 1),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-sm font-bold text-slate-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.readiness.authorName")), 1),
                        createVNode("div", { class: "text-xs text-slate-500 dark:text-slate-400" }, toDisplayString(_ctx.$t("hoxi.readiness.whyTitle")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "space-y-3 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 dark:text-slate-300 dark:border-slate-800" }, [
                      createVNode("p", null, toDisplayString(_ctx.$t("hoxi.readiness.whyP1")), 1),
                      createVNode("p", null, [
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.readiness.whyP2Prefix")), 1),
                        createVNode("strong", null, "\u3010" + toDisplayString(currentRoleMeta.value.name) + "\u3011", 1),
                        createTextVNode(toDisplayString(_ctx.$t("hoxi.readiness.whyP2Suffix")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "pt-2 flex flex-wrap items-center gap-3" }, [
                      hasSavedProgress.value && !unref(isCompleted) ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "button",
                        class: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-xs",
                        onClick: resumeQuiz
                      }, [
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.resumeBtn", { role: currentRoleMeta.value.name, answered: answeredCount.value, total: unref(totalQuestions) })), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:play-bold",
                          class: "w-4 h-4"
                        })
                      ])) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "button",
                        class: ["inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors", hasSavedProgress.value && !unref(isCompleted) ? "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" : "bg-blue-500 text-white hover:bg-blue-600 shadow-xs"],
                        onClick: startNewQuiz
                      }, [
                        createVNode("span", null, toDisplayString(hasSavedProgress.value && !unref(isCompleted) ? _ctx.$t("hoxi.readiness.restartBtn") : _ctx.$t("hoxi.readiness.startBtn", { role: currentRoleMeta.value.name })), 1),
                        !hasSavedProgress.value || unref(isCompleted) ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "ph:arrow-right",
                          class: "w-4 h-4"
                        })) : createCommentVNode("", true)
                      ], 2),
                      latestReportHash.value ? (openBlock(), createBlock(_component_NuxtLink, {
                        key: 1,
                        to: unref(localePath)(`/readiness/${latestReportHash.value}`),
                        class: "inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-blue-200 bg-blue-50/60 text-blue-700 hover:bg-blue-100/70 text-xs sm:text-sm font-semibold transition-colors dark:border-blue-800/70 dark:bg-blue-950/40 dark:text-blue-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UIcon, {
                            name: "ph:chart-polar-bold",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, toDisplayString(unref(uiCopy).historyReviewBtn) + " (#" + toDisplayString(latestReportHash.value) + ")", 1)
                        ]),
                        _: 1
                      }, 8, ["to"])) : createCommentVNode("", true)
                    ])
                  ]),
                  unref(rolePreviewProjects).length > 0 ? (openBlock(), createBlock("section", {
                    key: 0,
                    class: "rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-slate-50/60 p-5 sm:p-6 md:p-8 space-y-5 dark:border-blue-900/60 dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-950"
                  }, [
                    createVNode("div", { class: "flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-800" }, [
                      createVNode("div", { class: "space-y-1.5" }, [
                        createVNode("div", { class: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:rocket-launch-bold",
                            class: "w-3.5 h-3.5"
                          }),
                          createVNode("span", null, toDisplayString(unref(uiCopy).rolePreviewBadge) + " \xB7 " + toDisplayString(currentRoleMeta.value.name), 1)
                        ]),
                        createVNode("h2", { class: "text-lg sm:text-xl font-bold text-slate-900 dark:text-white" }, toDisplayString(unref(uiCopy).rolePreviewHeading), 1),
                        createVNode("p", { class: "text-xs sm:text-sm text-slate-600 dark:text-slate-300" }, toDisplayString(unref(uiCopy).rolePreviewSubheading), 1)
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/projects"),
                        class: "inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 shrink-0 dark:text-blue-400"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchViewAll")), 1),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right-bold",
                            class: "w-4 h-4"
                          })
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
                    createVNode("div", { class: "grid gap-4 lg:grid-cols-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(rolePreviewProjects), (item) => {
                        return openBlock(), createBlock(_component_NuxtLink, {
                          key: item.project.id,
                          to: unref(localePath)(`/projects/${item.project.slug || item.project.id}`),
                          class: "group rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between space-y-4 hover:border-blue-400 transition-colors dark:border-slate-800 dark:bg-slate-900"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "space-y-3" }, [
                              createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                                createVNode("span", { class: "px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300" }, toDisplayString(item.project.categoryLabel), 1),
                                createVNode("span", { class: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/60" }, [
                                  createVNode(_component_UIcon, {
                                    name: "ph:lightning-fill",
                                    class: "w-3 h-3 text-emerald-500"
                                  }),
                                  createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchScoreLabel", { score: item.matchScore })), 1)
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  item.project.icon ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: item.project.icon,
                                    class: "w-4 h-4 text-blue-600 shrink-0 dark:text-blue-400"
                                  }, null, 8, ["name"])) : createCommentVNode("", true),
                                  createVNode("h3", { class: "text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400" }, toDisplayString(item.project.name), 1)
                                ]),
                                createVNode("p", { class: "mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2" }, toDisplayString(item.project.tagline), 1)
                              ]),
                              createVNode("div", { class: "p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-xs text-slate-700 dark:bg-emerald-950/25 dark:border-emerald-900/50 dark:text-slate-200" }, [
                                createVNode("strong", { class: "font-bold text-emerald-800 block mb-0.5 dark:text-emerald-300" }, toDisplayString(_ctx.$t("hoxi.readiness.matchMonetizeLabel")), 1),
                                createVNode("span", { class: "line-clamp-2" }, toDisplayString(item.howToMakeMoney), 1)
                              ]),
                              item.project.monthlyCost ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400"
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:calculator-bold",
                                  class: "w-3.5 h-3.5 text-blue-500 shrink-0"
                                }),
                                createVNode("span", { class: "truncate" }, toDisplayString(item.project.monthlyCost), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 dark:border-slate-800 dark:text-blue-400" }, [
                              createVNode("span", null, toDisplayString(_ctx.$t("hoxi.readiness.matchInspectBtn")), 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-right",
                                class: "w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                              })
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  unref(history).length > 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "rounded-2xl border border-slate-200 bg-white p-5 md:p-6 space-y-3 dark:border-slate-800 dark:bg-slate-900"
                  }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", null, [
                        createVNode("h2", { class: "text-sm font-bold text-slate-900 dark:text-white" }, toDisplayString(unref(uiCopy).historyHeading), 1),
                        createVNode("p", { class: "text-xs text-slate-500 dark:text-slate-400 mt-0.5" }, toDisplayString(unref(uiCopy).historySubheading), 1)
                      ]),
                      createVNode("span", { class: "text-xs font-mono text-slate-400 dark:text-slate-500" }, toDisplayString(unref(history).length), 1)
                    ]),
                    createVNode("div", { class: "divide-y divide-slate-100 dark:divide-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(history).slice(0, 6), (item, idx) => {
                        return openBlock(), createBlock("button", {
                          key: item.id,
                          type: "button",
                          class: "w-full py-3 flex items-center justify-between gap-3 text-left hover:bg-slate-50/70 transition-colors rounded-lg px-2 -mx-2 dark:hover:bg-slate-800/50",
                          onClick: ($event) => handleReviewRecord(item)
                        }, [
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            createVNode("div", { class: "flex flex-wrap items-center gap-2 text-xs" }, [
                              createVNode("span", { class: "font-bold text-slate-900 dark:text-white" }, toDisplayString(item.roleName), 1),
                              item.hash ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "font-mono text-[11px] text-blue-600 dark:text-blue-400"
                              }, "#" + toDisplayString(item.hash), 1)) : createCommentVNode("", true),
                              createVNode("span", { class: "text-slate-400 dark:text-slate-500" }, "\xB7"),
                              createVNode("span", { class: "font-mono text-slate-500 dark:text-slate-400" }, toDisplayString(formatDate(item.createdAt)), 1),
                              item.topProjectName ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-slate-500 truncate dark:text-slate-400"
                              }, " \xB7 " + toDisplayString(unref(uiCopy).historyTopMatchPrefix) + toDisplayString(item.topProjectName), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "flex items-center gap-2.5 shrink-0" }, [
                            scoreDelta(idx) !== null ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ["text-[11px] font-mono font-semibold", (scoreDelta(idx) || 0) >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"]
                            }, toDisplayString((scoreDelta(idx) || 0) >= 0 ? `+${scoreDelta(idx)}` : scoreDelta(idx)), 3)) : createCommentVNode("", true),
                            createVNode("span", { class: "font-mono text-sm font-black text-blue-600 tabular-nums dark:text-blue-400" }, toDisplayString(item.overallScore) + "/100 ", 1),
                            createVNode("span", { class: "text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400" }, toDisplayString(unref(uiCopy).historyReviewBtn) + " \u2192 ", 1)
                          ])
                        ], 8, ["onClick"]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500" }, toDisplayString(_ctx.$t("hoxi.readiness.dimensionsTitle")), 1),
                    createVNode("div", { class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(dimensionList.value, (dim) => {
                        return openBlock(), createBlock("div", {
                          key: dim.key,
                          class: "p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 dark:border-slate-800 dark:bg-slate-900"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white" }, [
                            createVNode(_component_UIcon, {
                              name: dim.icon,
                              class: ["w-4 h-4", dim.color]
                            }, null, 8, ["name", "class"]),
                            createVNode("span", null, toDisplayString(dim.name), 1)
                          ]),
                          createVNode("p", { class: "text-xs text-slate-500 leading-normal dark:text-slate-400" }, toDisplayString(dim.description), 1)
                        ]);
                      }), 128))
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "max-w-2xl mx-auto space-y-6"
                }, [
                  createVNode("div", { class: "flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: currentRoleMeta.value.icon,
                        class: ["w-4 h-4", currentRoleMeta.value.color]
                      }, null, 8, ["name", "class"]),
                      createVNode("span", { class: "mr-1" }, toDisplayString(_ctx.$t("hoxi.readiness.currentRole")), 1),
                      createVNode("strong", { class: "text-slate-900 dark:text-white" }, toDisplayString(currentRoleMeta.value.name), 1)
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "text-blue-600 hover:underline font-medium dark:text-blue-400",
                      onClick: ($event) => isStarted.value = false
                    }, toDisplayString(_ctx.$t("hoxi.readiness.switchRole")), 9, ["onClick"])
                  ]),
                  createVNode(_component_HoxiReadinessProgress, {
                    "current-index": unref(currentIndex),
                    "total-questions": unref(totalQuestions),
                    "progress-percent": unref(progressPercent),
                    "answered-map": unref(answers),
                    onJump: unref(jumpToQuestion)
                  }, null, 8, ["current-index", "total-questions", "progress-percent", "answered-map", "onJump"]),
                  unref(currentQuestion) ? (openBlock(), createBlock(_component_HoxiReadinessQuestion, {
                    key: 0,
                    question: unref(currentQuestion),
                    "selected-option-index": unref(answers)[unref(currentQuestion).id],
                    "current-index": unref(currentIndex),
                    "total-questions": unref(totalQuestions),
                    onSelect: unref(selectOption),
                    onNext: handleNext,
                    onPrev: unref(prevQuestion)
                  }, null, 8, ["question", "selected-option-index", "current-index", "total-questions", "onSelect", "onPrev"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/readiness/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B5AToOhB.mjs.map
