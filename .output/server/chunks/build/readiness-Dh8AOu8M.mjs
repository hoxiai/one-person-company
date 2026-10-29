import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { u as useI18n, bt as useSeoMeta, _ as _sfc_main$Y } from './server.mjs';
import __nuxt_component_2 from './HoxiReadinessProgress-14Bx6ccg.mjs';
import { _ as __nuxt_component_3, l as localizeDimensions, a as localizeRoles, b as localizeQuestions, c as localizeTier, f as findTier, d as localizeArchetype, A as ARCHETYPES, B as BLINDSPOT_PRESCRIPTIONS, e as localizeBlindspot, g as localizeRoleAdvice, R as ROLE_ADVICES } from './HoxiReadinessQuestion-B5BD6oD_.mjs';
import __nuxt_component_4 from './HoxiReadinessReport-CskEYzZk.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, openBlock, createBlock, Fragment, createTextVNode, toDisplayString, createCommentVNode, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
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
import './HoxiReadinessRadar-DuqMfg5G.mjs';
import './useHoxiCommunity-peuQtLL3.mjs';

const getOrCreateClientId = () => {
  return "";
};
function useReadinessQuiz() {
  const { locale } = useI18n();
  const isEn = computed(() => {
    const value = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
    return value.toLowerCase().startsWith("en");
  });
  const dimensions = computed(() => localizeDimensions(isEn.value));
  const roles = computed(() => localizeRoles(isEn.value));
  const questionsByRole = computed(() => localizeQuestions(isEn.value));
  const selectedRole = ref("developer");
  const currentIndex = ref(0);
  const answers = ref({});
  const isCompleted = ref(false);
  const percentile = ref(null);
  const persistState = () => {
    return;
  };
  const questions = computed(() => {
    return questionsByRole.value[selectedRole.value] || questionsByRole.value.developer;
  });
  const currentQuestion = computed(() => {
    const list = questions.value;
    return list[currentIndex.value] || list[0];
  });
  const totalQuestions = computed(() => questions.value.length);
  const progressPercent = computed(() => {
    const answeredCount = Object.keys(answers.value).length;
    return Math.round(answeredCount / totalQuestions.value * 100);
  });
  const isCurrentAnswered = computed(() => {
    const q = currentQuestion.value;
    return q && typeof answers.value[q.id] === "number";
  });
  const selectRole = (role) => {
    if (selectedRole.value !== role) {
      selectedRole.value = role;
      answers.value = {};
      currentIndex.value = 0;
      isCompleted.value = false;
    }
  };
  const selectOption = (optionIndex) => {
    const q = currentQuestion.value;
    if (!q) return;
    answers.value[q.id] = optionIndex;
  };
  const submitToServer = async (res) => {
    try {
      const resp = await $fetch("/api/hoxi/readiness/submit", {
        method: "POST",
        body: {
          role: res.role,
          overallScore: res.overallScore,
          tier: res.tier.id,
          archetype: res.archetype.id,
          strongestDimension: res.strongestDimension.key,
          weakestDimension: res.weakestDimension.key,
          scores: res.dimensionMap,
          answers: answers.value,
          clientId: getOrCreateClientId()
        }
      });
      if (resp) {
        percentile.value = typeof resp.percentile === "number" ? resp.percentile : null;
        persistState();
      }
    } catch (err) {
      console.warn("[useReadinessQuiz] Silent submit failed:", err);
    }
  };
  const nextQuestion = () => {
    if (currentIndex.value < totalQuestions.value - 1) {
      currentIndex.value += 1;
    } else {
      isCompleted.value = true;
      if (results.value) {
        submitToServer(results.value);
      }
    }
  };
  const prevQuestion = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
    }
  };
  const jumpToQuestion = (index) => {
    if (index >= 0 && index < totalQuestions.value) {
      currentIndex.value = index;
    }
  };
  const restartQuiz = () => {
    answers.value = {};
    currentIndex.value = 0;
    isCompleted.value = false;
  };
  const results = computed(() => {
    var _a, _b, _c, _d, _e;
    const qList = questions.value;
    const answeredCount = Object.keys(answers.value).length;
    if (answeredCount < qList.length && !isCompleted.value) {
      return null;
    }
    const dimensionKeys = ["market", "delivery", "distribution", "leverage", "resilience"];
    const rawScores = { market: 0, delivery: 0, distribution: 0, leverage: 0, resilience: 0 };
    const maxScores = { market: 0, delivery: 0, distribution: 0, leverage: 0, resilience: 0 };
    const minScores = { market: 0, delivery: 0, distribution: 0, leverage: 0, resilience: 0 };
    for (const q of qList) {
      for (const dim of dimensionKeys) {
        const optionScores = q.options.map((o) => {
          var _a2;
          return (_a2 = o.scores[dim]) != null ? _a2 : 10;
        });
        const qMax = Math.max(...optionScores);
        const qMin = Math.min(...optionScores);
        maxScores[dim] += qMax;
        minScores[dim] += qMin;
        const chosenIdx = answers.value[q.id];
        if (typeof chosenIdx === "number" && q.options[chosenIdx]) {
          rawScores[dim] += (_a = q.options[chosenIdx].scores[dim]) != null ? _a : 10;
        } else {
          rawScores[dim] += qMin;
        }
      }
    }
    const dimensionMap = { market: 50, delivery: 50, distribution: 50, leverage: 50, resilience: 50 };
    for (const dim of dimensionKeys) {
      const range = maxScores[dim] - minScores[dim];
      if (range > 0) {
        const normalized = (rawScores[dim] - minScores[dim]) / range * 100;
        dimensionMap[dim] = Math.round(Math.min(100, Math.max(20, normalized)));
      } else {
        dimensionMap[dim] = 50;
      }
    }
    const weightedOverall = dimensionMap.market * 0.25 + dimensionMap.delivery * 0.2 + dimensionMap.distribution * 0.25 + dimensionMap.leverage * 0.15 + dimensionMap.resilience * 0.15;
    const overallScore = Math.round(Math.min(100, Math.max(10, weightedOverall)));
    const tier = localizeTier(findTier(overallScore), isEn.value);
    const dimensionResults = dimensionKeys.map((key) => ({
      key,
      meta: dimensions.value[key],
      score: dimensionMap[key]
    }));
    const sortedByScore = [...dimensionResults].sort((a, b) => b.score - a.score);
    const strongestDimension = (_b = sortedByScore[0]) != null ? _b : dimensionResults[0];
    const weakestDimension = (_c = sortedByScore[sortedByScore.length - 1]) != null ? _c : dimensionResults[0];
    let archetypeKey = "comfort-dreamer";
    if (overallScore >= 75 && weakestDimension.score >= 60) {
      archetypeKey = "full-stack-solopreneur";
    } else if (dimensionMap.delivery >= 70 && (dimensionMap.market < 60 || dimensionMap.distribution < 60)) {
      archetypeKey = "geek-builder";
    } else if ((dimensionMap.market >= 70 || dimensionMap.distribution >= 70) && dimensionMap.delivery < 65) {
      archetypeKey = "product-strategist";
    } else if (overallScore < 52) {
      archetypeKey = "comfort-dreamer";
    } else {
      archetypeKey = dimensionMap.delivery >= dimensionMap.market ? "geek-builder" : "product-strategist";
    }
    const archetype = localizeArchetype(
      ARCHETYPES[archetypeKey] || ARCHETYPES["geek-builder"],
      isEn.value
    );
    const weakDimensions = dimensionResults.filter((d) => d.score < 70).sort((a, b) => a.score - b.score);
    const targetBlindspotKeys = weakDimensions.length > 0 ? weakDimensions.slice(0, 2).map((d) => d.key) : [weakestDimension.key];
    const blindspots = targetBlindspotKeys.map((k) => BLINDSPOT_PRESCRIPTIONS[k]).filter(Boolean).map((blindspot) => localizeBlindspot(blindspot, isEn.value));
    const role = selectedRole.value;
    const roleMeta = (_d = roles.value[role]) != null ? _d : roles.value.developer;
    const roleAdvice = localizeRoleAdvice((_e = ROLE_ADVICES[role]) != null ? _e : ROLE_ADVICES.developer, role, isEn.value);
    return {
      role,
      roleMeta,
      roleAdvice,
      overallScore,
      tier,
      dimensions: dimensionResults,
      dimensionMap,
      strongestDimension,
      weakestDimension,
      archetype,
      blindspots,
      percentile: percentile.value
    };
  });
  return {
    selectedRole,
    roles,
    dimensions,
    selectRole,
    currentIndex,
    currentQuestion,
    totalQuestions,
    questions,
    answers,
    isCompleted,
    isCurrentAnswered,
    progressPercent,
    selectOption,
    nextQuestion,
    prevQuestion,
    jumpToQuestion,
    restartQuiz,
    results,
    percentile
  };
}
const MIN_SAMPLE = 30;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "readiness",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const {
      selectedRole,
      roles,
      dimensions,
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
      results
    } = useReadinessQuiz();
    const isStarted = ref(false);
    const currentRoleMeta = computed(() => roles.value[selectedRole.value]);
    const dimensionList = computed(() => Object.values(dimensions.value));
    const answeredCount = computed(() => Object.keys(answers.value).length);
    const hasSavedProgress = computed(() => answeredCount.value > 0);
    const communityStats = ref({
      totalParticipants: 0,
      averageScore: null,
      roleCounts: {}
    });
    if (isCompleted.value) {
      isStarted.value = true;
    }
    const startNewQuiz = () => {
      restartQuiz();
      isStarted.value = true;
    };
    const resumeQuiz = () => {
      isStarted.value = true;
    };
    const handleNext = () => {
      nextQuestion();
    };
    const handleRestart = () => {
      restartQuiz();
      isStarted.value = false;
    };
    useSeoMeta({
      title: computed(() => String(t("hoxi.readiness.seoTitle"))),
      description: computed(() => String(t("hoxi.readiness.seoDescription"))),
      ogTitle: computed(() => String(t("hoxi.readiness.seoTitle"))),
      ogDescription: computed(() => String(t("hoxi.readiness.seoDescription")))
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$Y;
      const _component_HoxiReadinessProgress = __nuxt_component_2;
      const _component_HoxiReadinessQuestion = __nuxt_component_3;
      const _component_HoxiReadinessReport = __nuxt_component_4;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}>`);
            if (!isStarted.value && !unref(isCompleted)) {
              _push2(`<div class="max-w-3xl mx-auto space-y-10"${_scopeId}><div class="text-center space-y-4"${_scopeId}><div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"${_scopeId}></span><span${_scopeId}>`);
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
              if (hasSavedProgress.value) {
                _push2(`<button type="button" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-xs"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.resumeBtn", { role: currentRoleMeta.value.name, answered: answeredCount.value, total: unref(totalQuestions) }))}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:play-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="button" class="${ssrRenderClass([hasSavedProgress.value ? "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" : "bg-blue-500 text-white hover:bg-blue-600 shadow-xs", "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(hasSavedProgress.value ? _ctx.$t("hoxi.readiness.restartBtn") : _ctx.$t("hoxi.readiness.startBtn", { role: currentRoleMeta.value.name }))}</span>`);
              if (!hasSavedProgress.value) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button></div></div><div class="space-y-4"${_scopeId}><div class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.dimensionsTitle"))}</div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"${_scopeId}><!--[-->`);
              ssrRenderList(dimensionList.value, (dim) => {
                _push2(`<div class="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 dark:border-slate-800 dark:bg-slate-900"${_scopeId}><div class="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: dim.icon,
                  class: ["w-4 h-4", dim.color]
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(dim.name)}</span></div><p class="text-xs text-slate-500 leading-normal dark:text-slate-400"${_scopeId}>${ssrInterpolate(dim.description)}</p></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else if (isStarted.value && !unref(isCompleted)) {
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
            } else if (unref(results)) {
              _push2(`<div class="max-w-4xl mx-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiReadinessReport, {
                result: unref(results),
                onRestart: handleRestart
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 md:py-16" }, [
                !isStarted.value && !unref(isCompleted) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "max-w-3xl mx-auto space-y-10"
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
                      hasSavedProgress.value ? (openBlock(), createBlock("button", {
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
                        class: ["inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors", hasSavedProgress.value ? "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" : "bg-blue-500 text-white hover:bg-blue-600 shadow-xs"],
                        onClick: startNewQuiz
                      }, [
                        createVNode("span", null, toDisplayString(hasSavedProgress.value ? _ctx.$t("hoxi.readiness.restartBtn") : _ctx.$t("hoxi.readiness.startBtn", { role: currentRoleMeta.value.name })), 1),
                        !hasSavedProgress.value ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "ph:arrow-right",
                          class: "w-4 h-4"
                        })) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
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
                ])) : isStarted.value && !unref(isCompleted) ? (openBlock(), createBlock("div", {
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
                ])) : unref(results) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "max-w-4xl mx-auto"
                }, [
                  createVNode(_component_HoxiReadinessReport, {
                    result: unref(results),
                    onRestart: handleRestart
                  }, null, 8, ["result"])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/readiness.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=readiness-Dh8AOu8M.mjs.map
