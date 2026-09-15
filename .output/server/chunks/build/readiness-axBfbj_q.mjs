import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { e as useI18n, aM as useLocaleRouter, bj as useSeoMeta, a as __nuxt_component_3$1, b as _sfc_main$E } from './server.mjs';
import __nuxt_component_3 from './HoxiReadinessProgress-D1QEcYX9.mjs';
import { D as DIMENSIONS, _ as __nuxt_component_4, R as ROLE_QUESTIONS_MAP, a as READINESS_TIERS, A as ARCHETYPES, B as BLINDSPOT_PRESCRIPTIONS, b as ROLES, c as ROLE_ADVICES } from './HoxiReadinessQuestion-YbX8CLFG.mjs';
import __nuxt_component_5 from './HoxiReadinessReport-7oK7ayyY.mjs';
import { defineComponent, ref, computed, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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
import 'ioredis';
import 'zod';
import 'node:child_process';
import 'node:os';
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
import './HoxiReadinessRadar-Ce_Ue92s.mjs';

const getOrCreateClientId = () => {
  return "";
};
function useReadinessQuiz() {
  const selectedRole = ref("developer");
  const currentIndex = ref(0);
  const answers = ref({});
  const isCompleted = ref(false);
  const percentile = ref(76);
  const persistState = () => {
    return;
  };
  const questions = computed(() => {
    return ROLE_QUESTIONS_MAP[selectedRole.value] || ROLE_QUESTIONS_MAP.developer;
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
      if (resp && typeof resp.percentile === "number") {
        percentile.value = resp.percentile;
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
    var _a;
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
    const tier = READINESS_TIERS.find((t) => overallScore >= t.minScore && overallScore <= t.maxScore) || READINESS_TIERS[3];
    const dimensions = dimensionKeys.map((key) => ({
      key,
      meta: DIMENSIONS[key],
      score: dimensionMap[key]
    }));
    const sortedByScore = [...dimensions].sort((a, b) => b.score - a.score);
    const strongestDimension = sortedByScore[0];
    const weakestDimension = sortedByScore[sortedByScore.length - 1];
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
    const archetype = ARCHETYPES[archetypeKey] || ARCHETYPES["geek-builder"];
    const weakDimensions = dimensions.filter((d) => d.score < 70).sort((a, b) => a.score - b.score);
    const targetBlindspotKeys = weakDimensions.length > 0 ? weakDimensions.slice(0, 2).map((d) => d.key) : [weakestDimension.key];
    const blindspots = targetBlindspotKeys.map((k) => BLINDSPOT_PRESCRIPTIONS[k]);
    const role = selectedRole.value;
    const roleMeta = ROLES[role];
    const roleAdvice = ROLE_ADVICES[role];
    return {
      role,
      roleMeta,
      roleAdvice,
      overallScore,
      tier,
      dimensions,
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
    roles: ROLES,
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "readiness",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const {
      selectedRole,
      roles,
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
    const currentRoleMeta = computed(() => roles[selectedRole.value]);
    const answeredCount = computed(() => Object.keys(answers.value).length);
    const hasSavedProgress = computed(() => answeredCount.value > 0);
    const communityStats = ref({
      totalParticipants: 1680,
      averageScore: 67,
      roleCounts: {
        developer: 940,
        product: 460,
        designer: 160,
        growth: 120
      }
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
      const _component_NuxtLink = __nuxt_component_3$1;
      const _component_UIcon = _sfc_main$E;
      const _component_HoxiReadinessProgress = __nuxt_component_3;
      const _component_HoxiReadinessQuestion = __nuxt_component_4;
      const _component_HoxiReadinessReport = __nuxt_component_5;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 md:py-16"${_scopeId}><nav class="mb-6 md:mb-8 flex items-center gap-2 text-xs md:text-sm text-slate-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)("/"),
              class: "hover:text-slate-900 transition-colors"
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
            _push2(`<span${_scopeId}>/</span><span class="text-slate-400"${_scopeId}>\u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357</span><span${_scopeId}>/</span><span class="text-slate-900 font-medium"${_scopeId}>\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6\u6D4B\u8BC4</span></nav>`);
            if (!isStarted.value && !unref(isCompleted)) {
              _push2(`<div class="max-w-3xl mx-auto space-y-10"${_scopeId}><div class="text-center space-y-4"${_scopeId}><div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shadow-2xs"${_scopeId}><span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(communityStats.value.totalParticipants)}+ \u4F4D IT \u540C\u884C\u5DF2\u6D4B \xB7 12 \u9053\u60C5\u666F\u4E24\u96BE\u9898 \xB7 \u7EA6 3 \u5206\u949F</span></div><h1 class="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.readiness.title"))}</h1><p class="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"${_scopeId}> \u4E0D\u540C\u5C97\u4F4D\u7684\u6838\u5FC3\u75DB\u70B9\u622A\u7136\u76F8\u53CD\uFF1A\u7A0B\u5E8F\u5458\u6B7B\u4E8E\u4EE3\u7801\u81EA\u55E8\u4E0E\u4E0D\u6562\u6536\u8D39\uFF0C\u4EA7\u54C1\u7ECF\u7406\u5361\u5728\u5168\u6808\u4EE3\u7801\u4E0E\u7B97\u529B\u8D26\u672C\u3002\u5BF9\u75C7\u4E0B\u836F\uFF0C\u624D\u80FD\u770B\u6E05\u4F60\u7684\u771F\u6B63\u77ED\u677F\u3002 </p></div><div class="space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5"${_scopeId}><span class="flex h-5 w-5 rounded-full bg-blue-500 text-white items-center justify-center text-[10px] font-mono"${_scopeId}>1</span><span${_scopeId}>\u7B2C\u4E00\u6B65\uFF1A\u9009\u62E9\u4F60\u7684\u4E3B\u529B\u5C97\u4F4D\u80CC\u666F</span></div><span class="text-xs text-slate-400"${_scopeId}>\u70B9\u51FB\u5207\u6362\u4E13\u5C5E\u9898\u5E93</span></div><div class="grid sm:grid-cols-2 gap-3.5"${_scopeId}><!--[-->`);
              ssrRenderList(Object.values(unref(roles)), (role) => {
                _push2(`<button type="button" class="${ssrRenderClass([unref(selectedRole) === role.key ? "border-blue-500 bg-blue-50/50 shadow-sm ring-1 ring-blue-500/30" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60", "p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group relative"])}"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between mb-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-2xs"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: role.icon,
                  class: ["w-4 h-4", role.color]
                }, null, _parent2, _scopeId));
                _push2(`</span><div${_scopeId}><h3 class="text-sm font-bold text-slate-900 leading-tight"${_scopeId}>${ssrInterpolate(role.name)}</h3><div class="text-[11px] text-slate-400 font-normal"${_scopeId}>${ssrInterpolate(role.title)}</div></div></div><div class="${ssrRenderClass([unref(selectedRole) === role.key ? "bg-blue-500 text-white" : "border border-slate-300", "w-5 h-5 rounded-full flex items-center justify-center transition-colors"])}"${_scopeId}>`);
                if (unref(selectedRole) === role.key) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:check-bold",
                    class: "w-3 h-3"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><p class="text-xs text-slate-600 leading-relaxed mt-1"${_scopeId}>${ssrInterpolate(role.description)}</p></div><div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400"${_scopeId}><span class="text-slate-500"${_scopeId}>${ssrInterpolate(role.targetDilemma)}</span>`);
                if (communityStats.value.roleCounts[role.key]) {
                  _push2(`<span class="font-mono tabular-nums"${_scopeId}>${ssrInterpolate(communityStats.value.roleCounts[role.key])} \u4EBA\u5DF2\u6D4B </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></button>`);
              });
              _push2(`<!--]--></div></div><div class="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 p-6 md:p-8 space-y-4"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0"${_scopeId}> \u559C </div><div${_scopeId}><div class="text-sm font-bold text-slate-900"${_scopeId}>\u7AD9\u957F\u53EF\u4E50\u7684\u5FC3\u58F0</div><div class="text-xs text-slate-500"${_scopeId}>\u4E3A\u4EC0\u4E48\u6211\u4E0D\u6D4B\u6027\u683C\uFF0C\u53EA\u6D4B\u4E0D\u540C\u5C97\u4F4D\u7684\u5546\u4E1A\u95ED\u73AF\uFF1F</div></div></div><div class="space-y-3 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"${_scopeId}><p${_scopeId}> \u5E02\u9762\u4E0A 90% \u7684\u521B\u4E1A\u6D4B\u8BC4\u591A\u534A\u5728\u95EE\u201C\u4F60\u662F\u5426\u6709\u9886\u5BFC\u529B\u201D\u3001\u201C\u4F60\u662F\u5426\u8010\u5F97\u4F4F\u5BC2\u5BDE\u201D\u8FD9\u7C7B\u6BEB\u65E0\u610F\u4E49\u7684\u81EA\u5938\u5957\u8BDD\u3002 \u4F46\u5728\u771F\u5B9E\u4E16\u754C\u91CC\uFF0C\u4F60\u662F\u4EC0\u4E48\u5C97\u4F4D\u80CC\u666F\uFF0C\u5C31\u6CE8\u5B9A\u4F1A\u6709\u4EC0\u4E48\u6837\u7684<strong${_scopeId}>\u201C\u5927\u5382\u804C\u4E1A\u75C5\u201D</strong>\u3002 </p><p${_scopeId}> \u5DF2\u4E3A\u4F60\u8F7D\u5165<strong${_scopeId}>\u3010${ssrInterpolate(currentRoleMeta.value.name)}\u3011\u4E13\u5C5E\u7684 12 \u9053\u60C5\u666F\u9898\u5E93</strong>\u3002 \u6D4B\u5B8C\u540E\u4F60\u4F1A\u62FF\u5230\u4E00\u5F20<strong${_scopeId}>\u4E94\u7EF4\u80FD\u529B\u96F7\u8FBE\u56FE</strong>\u3001\u540C\u5C97\u4F4D\u53D7\u6D4B\u540C\u884C\u767E\u5206\u6BD4\u6392\u540D\uFF0C\u4EE5\u53CA\u4E00\u4EFD\u89C1\u8840\u7684<strong${_scopeId}>\u804C\u4E1A\u75C5\u6212\u65AD\u6307\u5357\u4E0E 7 \u5929\u907F\u5751\u5904\u65B9\u7B7E</strong>\u3002 </p></div><div class="pt-2 flex flex-wrap items-center gap-3"${_scopeId}>`);
              if (hasSavedProgress.value) {
                _push2(`<button type="button" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-xs"${_scopeId}><span${_scopeId}>\u7EE7\u7EED\u3010${ssrInterpolate(currentRoleMeta.value.name)}\u3011\u8FDB\u5EA6 (\u5DF2\u7B54 ${ssrInterpolate(answeredCount.value)} / ${ssrInterpolate(unref(totalQuestions))} \u9898)</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:play-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="button" class="${ssrRenderClass([hasSavedProgress.value ? "bg-slate-100 text-slate-700 hover:bg-slate-200" : "bg-blue-500 text-white hover:bg-blue-600 shadow-xs", "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(hasSavedProgress.value ? "\u91CD\u5934\u5F00\u59CB\u505A" : `\u4EE5\u3010${currentRoleMeta.value.name}\u3011\u5F00\u59CB\u4F53\u68C0 (12 \u9898)`)}</span>`);
              if (!hasSavedProgress.value) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button></div></div><div class="space-y-4"${_scopeId}><div class="text-xs font-bold uppercase tracking-wider text-slate-400"${_scopeId}> \u672C\u6D4B\u8BC4\u91CD\u70B9\u8003\u6838\u7684\u4E94\u5927\u8D85\u7EA7\u4E2A\u4F53\u7EF4\u5EA6 </div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"${_scopeId}><!--[-->`);
              ssrRenderList(Object.values(unref(DIMENSIONS)), (dim) => {
                _push2(`<div class="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5"${_scopeId}><div class="flex items-center gap-2 text-sm font-bold text-slate-900"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: dim.icon,
                  class: ["w-4 h-4", dim.color]
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(dim.name)}</span></div><p class="text-xs text-slate-500 leading-normal"${_scopeId}>${ssrInterpolate(dim.description)}</p></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else if (isStarted.value && !unref(isCompleted)) {
              _push2(`<div class="max-w-2xl mx-auto space-y-6"${_scopeId}><div class="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: currentRoleMeta.value.icon,
                class: ["w-4 h-4", currentRoleMeta.value.color]
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u5F53\u524D\u4E13\u5C5E\u9898\u5E93\uFF1A<strong class="text-slate-900"${_scopeId}>${ssrInterpolate(currentRoleMeta.value.name)}</strong></span></div><button type="button" class="text-blue-600 hover:underline font-medium"${_scopeId}> \u5207\u6362\u5C97\u4F4D </button></div>`);
              _push2(ssrRenderComponent(_component_HoxiReadinessProgress, {
                "current-index": unref(currentIndex),
                "total-questions": unref(totalQuestions),
                "progress-percent": unref(progressPercent),
                "answered-map": unref(answers),
                onJump: unref(jumpToQuestion)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_HoxiReadinessQuestion, {
                question: unref(currentQuestion),
                "selected-option-index": unref(answers)[unref(currentQuestion).id],
                "current-index": unref(currentIndex),
                "total-questions": unref(totalQuestions),
                onSelect: unref(selectOption),
                onNext: handleNext,
                onPrev: unref(prevQuestion)
              }, null, _parent2, _scopeId));
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
                createVNode("nav", { class: "mb-6 md:mb-8 flex items-center gap-2 text-xs md:text-sm text-slate-500" }, [
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/"),
                    class: "hover:text-slate-900 transition-colors"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("hoxi.nav.home")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode("span", null, "/"),
                  createVNode("span", { class: "text-slate-400" }, "\u4E00\u4EBA\u516C\u53F8\u53D1\u5C55\u6307\u5357"),
                  createVNode("span", null, "/"),
                  createVNode("span", { class: "text-slate-900 font-medium" }, "\u4E00\u4EBA\u516C\u53F8\u5C31\u7EEA\u5EA6\u6D4B\u8BC4")
                ]),
                !isStarted.value && !unref(isCompleted) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "max-w-3xl mx-auto space-y-10"
                }, [
                  createVNode("div", { class: "text-center space-y-4" }, [
                    createVNode("div", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shadow-2xs" }, [
                      createVNode("span", { class: "w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" }),
                      createVNode("span", null, toDisplayString(communityStats.value.totalParticipants) + "+ \u4F4D IT \u540C\u884C\u5DF2\u6D4B \xB7 12 \u9053\u60C5\u666F\u4E24\u96BE\u9898 \xB7 \u7EA6 3 \u5206\u949F", 1)
                    ]),
                    createVNode("h1", { class: "text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight" }, toDisplayString(_ctx.$t("hoxi.readiness.title")), 1),
                    createVNode("p", { class: "text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto" }, " \u4E0D\u540C\u5C97\u4F4D\u7684\u6838\u5FC3\u75DB\u70B9\u622A\u7136\u76F8\u53CD\uFF1A\u7A0B\u5E8F\u5458\u6B7B\u4E8E\u4EE3\u7801\u81EA\u55E8\u4E0E\u4E0D\u6562\u6536\u8D39\uFF0C\u4EA7\u54C1\u7ECF\u7406\u5361\u5728\u5168\u6808\u4EE3\u7801\u4E0E\u7B97\u529B\u8D26\u672C\u3002\u5BF9\u75C7\u4E0B\u836F\uFF0C\u624D\u80FD\u770B\u6E05\u4F60\u7684\u771F\u6B63\u77ED\u677F\u3002 ")
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5" }, [
                        createVNode("span", { class: "flex h-5 w-5 rounded-full bg-blue-500 text-white items-center justify-center text-[10px] font-mono" }, "1"),
                        createVNode("span", null, "\u7B2C\u4E00\u6B65\uFF1A\u9009\u62E9\u4F60\u7684\u4E3B\u529B\u5C97\u4F4D\u80CC\u666F")
                      ]),
                      createVNode("span", { class: "text-xs text-slate-400" }, "\u70B9\u51FB\u5207\u6362\u4E13\u5C5E\u9898\u5E93")
                    ]),
                    createVNode("div", { class: "grid sm:grid-cols-2 gap-3.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(Object.values(unref(roles)), (role) => {
                        return openBlock(), createBlock("button", {
                          key: role.key,
                          type: "button",
                          class: ["p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group relative", unref(selectedRole) === role.key ? "border-blue-500 bg-blue-50/50 shadow-sm ring-1 ring-blue-500/30" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60"],
                          onClick: ($event) => unref(selectRole)(role.key)
                        }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between mb-2" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("span", { class: "flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-2xs" }, [
                                  createVNode(_component_UIcon, {
                                    name: role.icon,
                                    class: ["w-4 h-4", role.color]
                                  }, null, 8, ["name", "class"])
                                ]),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "text-sm font-bold text-slate-900 leading-tight" }, toDisplayString(role.name), 1),
                                  createVNode("div", { class: "text-[11px] text-slate-400 font-normal" }, toDisplayString(role.title), 1)
                                ])
                              ]),
                              createVNode("div", {
                                class: ["w-5 h-5 rounded-full flex items-center justify-center transition-colors", unref(selectedRole) === role.key ? "bg-blue-500 text-white" : "border border-slate-300"]
                              }, [
                                unref(selectedRole) === role.key ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: "ph:check-bold",
                                  class: "w-3 h-3"
                                })) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            createVNode("p", { class: "text-xs text-slate-600 leading-relaxed mt-1" }, toDisplayString(role.description), 1)
                          ]),
                          createVNode("div", { class: "mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400" }, [
                            createVNode("span", { class: "text-slate-500" }, toDisplayString(role.targetDilemma), 1),
                            communityStats.value.roleCounts[role.key] ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "font-mono tabular-nums"
                            }, toDisplayString(communityStats.value.roleCounts[role.key]) + " \u4EBA\u5DF2\u6D4B ", 1)) : createCommentVNode("", true)
                          ])
                        ], 10, ["onClick"]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 p-6 md:p-8 space-y-4" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("div", { class: "w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-xs shrink-0" }, " \u559C "),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-sm font-bold text-slate-900" }, "\u7AD9\u957F\u53EF\u4E50\u7684\u5FC3\u58F0"),
                        createVNode("div", { class: "text-xs text-slate-500" }, "\u4E3A\u4EC0\u4E48\u6211\u4E0D\u6D4B\u6027\u683C\uFF0C\u53EA\u6D4B\u4E0D\u540C\u5C97\u4F4D\u7684\u5546\u4E1A\u95ED\u73AF\uFF1F")
                      ])
                    ]),
                    createVNode("div", { class: "space-y-3 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3" }, [
                      createVNode("p", null, [
                        createTextVNode(" \u5E02\u9762\u4E0A 90% \u7684\u521B\u4E1A\u6D4B\u8BC4\u591A\u534A\u5728\u95EE\u201C\u4F60\u662F\u5426\u6709\u9886\u5BFC\u529B\u201D\u3001\u201C\u4F60\u662F\u5426\u8010\u5F97\u4F4F\u5BC2\u5BDE\u201D\u8FD9\u7C7B\u6BEB\u65E0\u610F\u4E49\u7684\u81EA\u5938\u5957\u8BDD\u3002 \u4F46\u5728\u771F\u5B9E\u4E16\u754C\u91CC\uFF0C\u4F60\u662F\u4EC0\u4E48\u5C97\u4F4D\u80CC\u666F\uFF0C\u5C31\u6CE8\u5B9A\u4F1A\u6709\u4EC0\u4E48\u6837\u7684"),
                        createVNode("strong", null, "\u201C\u5927\u5382\u804C\u4E1A\u75C5\u201D"),
                        createTextVNode("\u3002 ")
                      ]),
                      createVNode("p", null, [
                        createTextVNode(" \u5DF2\u4E3A\u4F60\u8F7D\u5165"),
                        createVNode("strong", null, "\u3010" + toDisplayString(currentRoleMeta.value.name) + "\u3011\u4E13\u5C5E\u7684 12 \u9053\u60C5\u666F\u9898\u5E93", 1),
                        createTextVNode("\u3002 \u6D4B\u5B8C\u540E\u4F60\u4F1A\u62FF\u5230\u4E00\u5F20"),
                        createVNode("strong", null, "\u4E94\u7EF4\u80FD\u529B\u96F7\u8FBE\u56FE"),
                        createTextVNode("\u3001\u540C\u5C97\u4F4D\u53D7\u6D4B\u540C\u884C\u767E\u5206\u6BD4\u6392\u540D\uFF0C\u4EE5\u53CA\u4E00\u4EFD\u89C1\u8840\u7684"),
                        createVNode("strong", null, "\u804C\u4E1A\u75C5\u6212\u65AD\u6307\u5357\u4E0E 7 \u5929\u907F\u5751\u5904\u65B9\u7B7E"),
                        createTextVNode("\u3002 ")
                      ])
                    ]),
                    createVNode("div", { class: "pt-2 flex flex-wrap items-center gap-3" }, [
                      hasSavedProgress.value ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "button",
                        class: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-xs",
                        onClick: resumeQuiz
                      }, [
                        createVNode("span", null, "\u7EE7\u7EED\u3010" + toDisplayString(currentRoleMeta.value.name) + "\u3011\u8FDB\u5EA6 (\u5DF2\u7B54 " + toDisplayString(answeredCount.value) + " / " + toDisplayString(unref(totalQuestions)) + " \u9898)", 1),
                        createVNode(_component_UIcon, {
                          name: "ph:play-bold",
                          class: "w-4 h-4"
                        })
                      ])) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "button",
                        class: ["inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors", hasSavedProgress.value ? "bg-slate-100 text-slate-700 hover:bg-slate-200" : "bg-blue-500 text-white hover:bg-blue-600 shadow-xs"],
                        onClick: startNewQuiz
                      }, [
                        createVNode("span", null, toDisplayString(hasSavedProgress.value ? "\u91CD\u5934\u5F00\u59CB\u505A" : `\u4EE5\u3010${currentRoleMeta.value.name}\u3011\u5F00\u59CB\u4F53\u68C0 (12 \u9898)`), 1),
                        !hasSavedProgress.value ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "ph:arrow-right",
                          class: "w-4 h-4"
                        })) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "text-xs font-bold uppercase tracking-wider text-slate-400" }, " \u672C\u6D4B\u8BC4\u91CD\u70B9\u8003\u6838\u7684\u4E94\u5927\u8D85\u7EA7\u4E2A\u4F53\u7EF4\u5EA6 "),
                    createVNode("div", { class: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(Object.values(unref(DIMENSIONS)), (dim) => {
                        return openBlock(), createBlock("div", {
                          key: dim.key,
                          class: "p-4 rounded-xl border border-slate-200 bg-white space-y-1.5"
                        }, [
                          createVNode("div", { class: "flex items-center gap-2 text-sm font-bold text-slate-900" }, [
                            createVNode(_component_UIcon, {
                              name: dim.icon,
                              class: ["w-4 h-4", dim.color]
                            }, null, 8, ["name", "class"]),
                            createVNode("span", null, toDisplayString(dim.name), 1)
                          ]),
                          createVNode("p", { class: "text-xs text-slate-500 leading-normal" }, toDisplayString(dim.description), 1)
                        ]);
                      }), 128))
                    ])
                  ])
                ])) : isStarted.value && !unref(isCompleted) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "max-w-2xl mx-auto space-y-6"
                }, [
                  createVNode("div", { class: "flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_UIcon, {
                        name: currentRoleMeta.value.icon,
                        class: ["w-4 h-4", currentRoleMeta.value.color]
                      }, null, 8, ["name", "class"]),
                      createVNode("span", null, [
                        createTextVNode("\u5F53\u524D\u4E13\u5C5E\u9898\u5E93\uFF1A"),
                        createVNode("strong", { class: "text-slate-900" }, toDisplayString(currentRoleMeta.value.name), 1)
                      ])
                    ]),
                    createVNode("button", {
                      type: "button",
                      class: "text-blue-600 hover:underline font-medium",
                      onClick: ($event) => isStarted.value = false
                    }, " \u5207\u6362\u5C97\u4F4D ", 8, ["onClick"])
                  ]),
                  createVNode(_component_HoxiReadinessProgress, {
                    "current-index": unref(currentIndex),
                    "total-questions": unref(totalQuestions),
                    "progress-percent": unref(progressPercent),
                    "answered-map": unref(answers),
                    onJump: unref(jumpToQuestion)
                  }, null, 8, ["current-index", "total-questions", "progress-percent", "answered-map", "onJump"]),
                  createVNode(_component_HoxiReadinessQuestion, {
                    question: unref(currentQuestion),
                    "selected-option-index": unref(answers)[unref(currentQuestion).id],
                    "current-index": unref(currentIndex),
                    "total-questions": unref(totalQuestions),
                    onSelect: unref(selectOption),
                    onNext: handleNext,
                    onPrev: unref(prevQuestion)
                  }, null, 8, ["question", "selected-option-index", "current-index", "total-questions", "onSelect", "onPrev"])
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
