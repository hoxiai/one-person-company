import { computed, ref } from 'vue';
import { l as localizeDimensions, a as localizeRoles, b as localizeQuestions, c as localizeTier, f as findTier, d as localizeArchetype, A as ARCHETYPES, B as BLINDSPOT_PRESCRIPTIONS, e as localizeBlindspot, g as localizeRoleAdvice, R as ROLE_ADVICES } from './readiness-i18n-JBjMTJkv.mjs';
import { n as normalizeHoxiLocale, r as rankProjectsForUser } from './projectMatcher-mcLmK4UC.mjs';
import { r as resolveReadinessHash } from './readinessHash-D0DMxJPv.mjs';
import { u as useHoxiProjects } from './useHoxiProjects-w0PcEYoF.mjs';
import { u as useI18n$1 } from './server.mjs';

const ROLE_DEFAULT_PREVIEW_SCORES = {
  developer: { market: 66, delivery: 90, distribution: 62, leverage: 84, resilience: 76 },
  product: { market: 88, delivery: 68, distribution: 78, leverage: 80, resilience: 76 },
  designer: { market: 78, delivery: 72, distribution: 76, leverage: 75, resilience: 74 },
  growth: { market: 86, delivery: 64, distribution: 92, leverage: 80, resilience: 78 },
  trade: { market: 90, delivery: 66, distribution: 88, leverage: 84, resilience: 82 }
};
const getOrCreateClientId = () => {
  return "";
};
function useReadinessQuiz() {
  const { locale } = useI18n$1();
  const { projects } = useHoxiProjects();
  const activeLocale = computed(() => {
    const value = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
    return normalizeHoxiLocale(value);
  });
  const isEn = computed(() => {
    return activeLocale.value !== "zh" && activeLocale.value !== "zh-HK";
  });
  const uiCopy = computed(() => {
    switch (activeLocale.value) {
      case "zh-HK":
        return {
          aiBadge: "AI \u6DF1\u5EA6\u8A55\u4F30",
          aiEvaluating: "\u6B63\u5728\u7D50\u5408\u4F60\u7684\u7B54\u984C\u660E\u7D30\u9032\u884C AI \u6DF1\u5EA6\u8A55\u4F30\u8207\u9805\u76EE\u5339\u914D\u2026",
          aiBlindspotLabel: "\u7B54\u984C\u66B4\u9732\u76F2\u5340\uFF1A",
          historyHeading: "\u6E2C\u8A66\u8A18\u9304\u8207\u5FA9\u76E4",
          historySubheading: "\u6BCF\u6B21\u6E2C\u8A66\u81EA\u52D5\u751F\u6210\u5C08\u5C6C\u5831\u544A\u9801\uFF08/readiness/:hash\uFF09\uFF0C\u53EF\u96A8\u6642\u56DE\u9867\u6216\u5206\u4EAB",
          historyViewingBadge: "\u6B63\u5728\u56DE\u9867\u6B77\u53F2\u8A18\u9304",
          historyReviewBtn: "\u67E5\u770B\u5C08\u5C6C\u5831\u544A",
          historyCurrentTag: "\u7576\u524D\u67E5\u770B",
          historyTopMatchPrefix: "\u9996\u9078\u5339\u914D\uFF1A",
          historyEmpty: "\u66AB\u7121\u6B77\u53F2\u6E2C\u8A66\u8A18\u9304",
          rolePreviewBadge: "\u5D17\u4F4D\u5BE6\u6230\u9805\u76EE\u9810\u89BD",
          rolePreviewHeading: "\u9078\u4E2D\u5D17\u4F4D\u7684\u9AD8\u5951\u5408\u4E00\u4EBA\u516C\u53F8\u9805\u76EE",
          rolePreviewSubheading: "\u5B8C\u6210 2 \u5206\u9418\u60C5\u666F\u6E2C\u8A55\u5F8C\uFF0C\u7CFB\u7D71\u5C07\u7D50\u5408\u4F60\u7684\u4E94\u7DAD\u5F97\u5206\u8207\u76F2\u5340\uFF0C\u5B9A\u5236\u5C08\u5C6C Top 3 \u8B8A\u73FE\u65B9\u6848\u8207\u843D\u5730\u9801",
          shareLinkLabel: "\u5C08\u5C6C\u5831\u544A\u9023\u7D50",
          copyLinkBtn: "\u8907\u88FD\u5831\u544A\u9023\u7D50",
          copiedLinkBtn: "\u5DF2\u8907\u88FD\u5C08\u5C6C\u9023\u7D50",
          visitorBannerBadge: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u8207\u9805\u76EE\u5339\u914D\u5831\u544A",
          visitorBannerTitle: "\u9019\u662F\u4E00\u4EFD\u5C08\u5C6C\u7684\u4E00\u4EBA\u516C\u53F8\u4E94\u7DAD\u80FD\u529B\u8A3A\u65B7\u8207\u8B8A\u73FE\u9805\u76EE\u63A8\u85A6",
          visitorBannerCta: "\u6E2C\u6E2C\u6211\u7684\u4E00\u4EBA\u516C\u53F8\u80FD\u529B & \u5339\u914D\u9805\u76EE"
        };
      case "ja":
        return {
          aiBadge: "AI \u6DF1\u5C64\u8A3A\u65AD",
          aiEvaluating: "\u56DE\u7B54\u5185\u5BB9\u306B\u57FA\u3065\u304DAI\u304C\u9069\u6027\u3068\u53CE\u76CA\u5316\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u7CBE\u5BC6\u8A55\u4FA1\u4E2D\u2026",
          aiBlindspotLabel: "\u56DE\u7B54\u304B\u3089\u898B\u3048\u305F\u76F2\u70B9\uFF1A",
          historyHeading: "\u8A3A\u65AD\u5C65\u6B74\u3068\u5C02\u7528\u30EC\u30DD\u30FC\u30C8",
          historySubheading: "\u5404\u8A3A\u65AD\u306F\u5C02\u7528URL\uFF08/readiness/:hash\uFF09\u3068\u3057\u3066\u4FDD\u5B58\u3055\u308C\u3001\u3044\u3064\u3067\u3082\u5171\u6709\u30FB\u632F\u308A\u8FD4\u308A\u304C\u53EF\u80FD\u3067\u3059",
          historyViewingBadge: "\u904E\u53BB\u306E\u8A18\u9332\u3092\u8868\u793A\u4E2D",
          historyReviewBtn: "\u30EC\u30DD\u30FC\u30C8\u3092\u958B\u304F",
          historyCurrentTag: "\u8868\u793A\u4E2D",
          historyTopMatchPrefix: "\u6700\u9069\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\uFF1A",
          historyEmpty: "\u8A3A\u65AD\u5C65\u6B74\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093",
          rolePreviewBadge: "\u8077\u7A2E\u5225\u304A\u3059\u3059\u3081\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
          rolePreviewHeading: "\u9078\u629E\u3057\u305F\u8077\u7A2E\u3068\u76F8\u6027\u306E\u826F\u30441\u4EBA\u8D77\u696D\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
          rolePreviewSubheading: "2\u5206\u9593\u306E\u8A3A\u65AD\u3092\u5B8C\u4E86\u3059\u308B\u3068\u30015\u6B21\u5143\u30B9\u30B3\u30A2\u306B\u57FA\u3065\u3044\u3066\u3042\u306A\u305F\u5C02\u7528\u306ETop 3\u53CE\u76CA\u5316\u30D7\u30E9\u30F3\u3092\u751F\u6210\u3057\u307E\u3059",
          shareLinkLabel: "\u5C02\u7528\u30EC\u30DD\u30FC\u30C8URL",
          copyLinkBtn: "URL\u3092\u30B3\u30D4\u30FC",
          copiedLinkBtn: "URL\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
          visitorBannerBadge: "1\u4EBA\u8D77\u696D\u30B9\u30AD\u30EB\uFF06\u6848\u4EF6\u30DE\u30C3\u30C1\u30F3\u30B0\u8A3A\u65AD",
          visitorBannerTitle: "5\u6B21\u5143\u30B9\u30AD\u30EB\u8A55\u4FA1\u3068\u9AD8\u53CE\u76CA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u500B\u5225\u30DE\u30C3\u30C1\u30F3\u30B0\u30EC\u30DD\u30FC\u30C8",
          visitorBannerCta: "\u81EA\u5206\u306E\u9069\u6027\u3068\u304A\u3059\u3059\u3081\u6848\u4EF6\u3092\u8A3A\u65AD\u3059\u308B"
        };
      case "ko":
        return {
          aiBadge: "AI \uC2EC\uCE35 \uD3C9\uAC00",
          aiEvaluating: "\uB2F5\uBCC0 \uB0B4\uC5ED\uC744 \uBC14\uD0D5\uC73C\uB85C AI\uAC00 \uC5ED\uB7C9 \uBC0F \uCD5C\uC801 \uD504\uB85C\uC81D\uD2B8\uB97C \uC815\uBC00 \uBD84\uC11D \uC911\uC785\uB2C8\uB2E4\u2026",
          aiBlindspotLabel: "\uB2F5\uBCC0\uC5D0\uC11C \uB4DC\uB7EC\uB09C \uB9F9\uC810:",
          historyHeading: "\uD14C\uC2A4\uD2B8 \uAE30\uB85D \uBC0F \uC804\uC6A9 \uB9AC\uD3EC\uD2B8",
          historySubheading: "\uBAA8\uB4E0 \uD14C\uC2A4\uD2B8 \uACB0\uACFC\uB294 \uC804\uC6A9 \uB9C1\uD06C(/readiness/:hash)\uB85C \uC0DD\uC131\uB418\uC5B4 \uC5B8\uC81C\uB4E0 \uBCF5\uAE30\uD558\uAC70\uB098 \uACF5\uC720\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
          historyViewingBadge: "\uACFC\uAC70 \uAE30\uB85D \uC5F4\uB78C \uC911",
          historyReviewBtn: "\uB9AC\uD3EC\uD2B8 \uC5F4\uAE30",
          historyCurrentTag: "\uC5F4\uB78C \uC911",
          historyTopMatchPrefix: "\uCD5C\uC801 \uB9E4\uCE6D:",
          historyEmpty: "\uC544\uC9C1 \uD14C\uC2A4\uD2B8 \uAE30\uB85D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
          rolePreviewBadge: "\uC9C1\uAD70\uBCC4 \uCD94\uCC9C \uC2E4\uC804 \uD504\uB85C\uC81D\uD2B8",
          rolePreviewHeading: "\uC120\uD0DD\uD55C \uC9C1\uAD70\uC5D0 \uCD5C\uC801\uD654\uB41C 1\uC778 \uAE30\uC5C5 \uD504\uB85C\uC81D\uD2B8 \uBBF8\uB9AC\uBCF4\uAE30",
          rolePreviewSubheading: "2\uBD84 \uD14C\uC2A4\uD2B8\uB97C \uC644\uB8CC\uD558\uBA74 5\uCC28\uC6D0 \uC810\uC218\uC640 \uC57D\uC810\uC744 \uBC18\uC601\uD55C \uB9DE\uCDA4\uD615 Top 3 \uC218\uC775\uD654 \uB9AC\uD3EC\uD2B8\uB97C \uC0DD\uC131\uD569\uB2C8\uB2E4",
          shareLinkLabel: "\uC804\uC6A9 \uB9AC\uD3EC\uD2B8 \uB9C1\uD06C",
          copyLinkBtn: "\uB9C1\uD06C \uBCF5\uC0AC",
          copiedLinkBtn: "\uB9C1\uD06C \uBCF5\uC0AC\uB428",
          visitorBannerBadge: "1\uC778 \uAE30\uC5C5 \uC5ED\uB7C9 \uBC0F \uD504\uB85C\uC81D\uD2B8 \uB9E4\uCE6D \uB9AC\uD3EC\uD2B8",
          visitorBannerTitle: "5\uCC28\uC6D0 \uC5ED\uB7C9 \uC9C4\uB2E8 \uBC0F \uB9DE\uCDA4\uD615 \uC218\uC775\uD654 \uD504\uB85C\uC81D\uD2B8 \uCD94\uCC9C \uACB0\uACFC\uC785\uB2C8\uB2E4",
          visitorBannerCta: "\uB0B4 1\uC778 \uAE30\uC5C5 \uC5ED\uB7C9 & \uCD94\uCC9C \uD504\uB85C\uC81D\uD2B8 \uD14C\uC2A4\uD2B8\uD558\uAE30"
        };
      case "en":
        return {
          aiBadge: "AI Assessment",
          aiEvaluating: "Evaluating your answers with AI to refine project fit\u2026",
          aiBlindspotLabel: "Answer-Revealed Blindspot:",
          historyHeading: "Assessment History & Shareable Reports",
          historySubheading: "Every completed test gets a dedicated report URL (/readiness/:hash) you can revisit or share",
          historyViewingBadge: "Viewing Past Record",
          historyReviewBtn: "Open Report",
          historyCurrentTag: "Viewing",
          historyTopMatchPrefix: "Top Match:",
          historyEmpty: "No past records yet",
          rolePreviewBadge: "Role-Matched Projects Preview",
          rolePreviewHeading: "Recommended Solo Projects for Your Selected Role",
          rolePreviewSubheading: "Finish the 2-minute scenario test to unlock your personalized Top 3 project matches, 7-day launch plan, and shareable report URL",
          shareLinkLabel: "Dedicated Report URL",
          copyLinkBtn: "Copy Report Link",
          copiedLinkBtn: "Link Copied",
          visitorBannerBadge: "Solo Company Readiness & Project Match Report",
          visitorBannerTitle: "Personalized 5D capability diagnosis and Top 3 monetizable solo project recommendations",
          visitorBannerCta: "Take the Quiz & Match My Solo Projects"
        };
      default:
        return {
          aiBadge: "AI \u6DF1\u5EA6\u8BC4\u4F30",
          aiEvaluating: "\u6B63\u5728\u7ED3\u5408\u4F60\u7684\u7B54\u9898\u660E\u7EC6\u8FDB\u884C AI \u6DF1\u5EA6\u8BC4\u4F30\u4E0E\u9879\u76EE\u5339\u914D\u2026",
          aiBlindspotLabel: "\u7B54\u9898\u66B4\u9732\u76F2\u533A\uFF1A",
          historyHeading: "\u6D4B\u8BD5\u8BB0\u5F55\u4E0E\u590D\u76D8",
          historySubheading: "\u6BCF\u6B21\u6D4B\u8BD5\u81EA\u52A8\u751F\u6210\u4E13\u5C5E\u62A5\u544A\u9875\uFF08/readiness/:hash\uFF09\uFF0C\u53EF\u968F\u65F6\u56DE\u987E\u6216\u5206\u4EAB\u7ED9\u670B\u53CB",
          historyViewingBadge: "\u6B63\u5728\u56DE\u987E\u5386\u53F2\u8BB0\u5F55",
          historyReviewBtn: "\u67E5\u770B\u4E13\u5C5E\u62A5\u544A",
          historyCurrentTag: "\u5F53\u524D\u67E5\u770B",
          historyTopMatchPrefix: "\u9996\u9009\u5339\u914D\uFF1A",
          historyEmpty: "\u6682\u65E0\u5386\u53F2\u6D4B\u8BD5\u8BB0\u5F55",
          rolePreviewBadge: "\u5C97\u4F4D\u5B9E\u6218\u9879\u76EE\u9884\u89C8",
          rolePreviewHeading: "\u5F53\u524D\u6240\u9009\u5C97\u4F4D\u7684\u9AD8\u5951\u5408\u4E00\u4EBA\u516C\u53F8\u9879\u76EE",
          rolePreviewSubheading: "\u5B8C\u6210 2 \u5206\u949F\u60C5\u666F\u6D4B\u8BC4\u540E\uFF0C\u7CFB\u7EDF\u5C06\u7ED3\u5408\u4F60\u7684\u4E94\u7EF4\u957F\u77ED\u677F\u5B9A\u5236\u4E13\u5C5E Top 3 \u8D5A\u94B1\u9879\u76EE\u4E0E\u53EF\u5206\u4EAB\u62A5\u544A\u843D\u5730\u9875",
          shareLinkLabel: "\u4E13\u5C5E\u62A5\u544A\u94FE\u63A5",
          copyLinkBtn: "\u590D\u5236\u62A5\u544A\u94FE\u63A5",
          copiedLinkBtn: "\u5DF2\u590D\u5236\u4E13\u5C5E\u94FE\u63A5",
          visitorBannerBadge: "\u4E00\u4EBA\u516C\u53F8\u80FD\u529B\u4E0E\u9879\u76EE\u5339\u914D\u62A5\u544A",
          visitorBannerTitle: "\u8FD9\u662F\u4E00\u4EFD\u4E13\u5C5E\u7684\u4E00\u4EBA\u516C\u53F8\u4E94\u7EF4\u80FD\u529B\u8BCA\u65AD\u4E0E Top 3 \u53D8\u73B0\u9879\u76EE\u63A8\u8350\u62A5\u544A",
          visitorBannerCta: "\u6D4B\u6D4B\u6211\u7684\u4E00\u4EBA\u516C\u53F8\u80FD\u529B & \u5339\u914D\u4E13\u5C5E\u9879\u76EE"
        };
    }
  });
  const dimensions = computed(() => localizeDimensions(isEn.value));
  const roles = computed(() => localizeRoles(isEn.value));
  const questionsByRole = computed(() => localizeQuestions(isEn.value));
  const selectedRole = ref("developer");
  const currentIndex = ref(0);
  const answers = ref({});
  const isCompleted = ref(false);
  const isEvaluating = ref(false);
  const percentile = ref(null);
  const aiEvaluation = ref(null);
  const aiProjectOverrides = ref({});
  const history = ref([]);
  const activeHistoryId = ref(null);
  const activeHash = ref(null);
  const rolePreviewProjects = computed(() => {
    const role = selectedRole.value || "developer";
    const previewScores = ROLE_DEFAULT_PREVIEW_SCORES[role] || ROLE_DEFAULT_PREVIEW_SCORES.developer;
    return rankProjectsForUser({
      projects: projects.value,
      role,
      dimensionScores: previewScores,
      locale: activeLocale.value,
      limit: 3
    });
  });
  const persistHistory = () => {
    return;
  };
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
      aiEvaluation.value = null;
      aiProjectOverrides.value = {};
      activeHistoryId.value = null;
      activeHash.value = null;
    }
  };
  const selectOption = (optionIndex) => {
    const q = currentQuestion.value;
    if (!q) return;
    answers.value[q.id] = optionIndex;
  };
  const recordToHistory = (res, customId, customHash) => {
    const topMatch = res.matchedProjects[0];
    const recordId = `local_${Date.now().toString(36)}`;
    const hash = customHash || resolveReadinessHash({
      id: recordId,
      role: res.role,
      scores: res.dimensionMap
    });
    const record = {
      id: recordId,
      hash,
      role: res.role,
      roleName: res.roleMeta.name,
      overallScore: res.overallScore,
      tierId: res.tier.id,
      tierTitle: res.tier.title,
      archetypeId: res.archetype.id,
      archetypeName: res.archetype.name,
      strongestDimension: res.strongestDimension.key,
      strongestName: res.strongestDimension.meta.name,
      weakestDimension: res.weakestDimension.key,
      weakestName: res.weakestDimension.meta.name,
      topProjectId: topMatch == null ? void 0 : topMatch.project.id,
      topProjectName: topMatch == null ? void 0 : topMatch.project.name,
      topProjectScore: topMatch == null ? void 0 : topMatch.matchScore,
      scores: { ...res.dimensionMap },
      answers: { ...answers.value },
      aiEvaluation: res.aiEvaluation,
      percentile: res.percentile,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const existingIdx = history.value.findIndex((item) => item.id === recordId);
    if (existingIdx !== -1) {
      history.value[existingIdx] = record;
    } else {
      history.value = [record, ...history.value].slice(0, 30);
    }
    activeHistoryId.value = recordId;
    activeHash.value = hash;
    return record;
  };
  const submitToServer = async (res) => {
    const localRecord = recordToHistory(res);
    let resolvedHash = localRecord.hash || "";
    isEvaluating.value = true;
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
          locale: activeLocale.value,
          clientId: getOrCreateClientId()
        }
      });
      if (resp) {
        percentile.value = typeof resp.percentile === "number" ? resp.percentile : null;
        if (resp.aiEvaluation) {
          aiEvaluation.value = resp.aiEvaluation;
        }
        if (Array.isArray(resp.matchedProjects)) {
          const map = {};
          for (const item of resp.matchedProjects) {
            if (item == null ? void 0 : item.id) {
              map[item.id] = {
                matchScore: item.matchScore,
                whyItFits: item.whyItFits,
                firstWeekAction: item.firstWeekAction
              };
            }
          }
          aiProjectOverrides.value = map;
        }
        const serverId = resp.id ? `srv_${resp.id}` : localRecord.id;
        resolvedHash = resp.hash || resolveReadinessHash({
          id: serverId,
          role: res.role,
          scores: res.dimensionMap
        });
        const idx = history.value.findIndex((h) => h.id === localRecord.id);
        if (idx !== -1) {
          const updated = {
            ...history.value[idx],
            id: serverId,
            hash: resolvedHash,
            percentile: percentile.value,
            aiEvaluation: aiEvaluation.value,
            createdAt: resp.createdAt || localRecord.createdAt
          };
          history.value[idx] = updated;
          activeHistoryId.value = serverId;
          activeHash.value = resolvedHash;
          persistHistory();
        }
        persistState();
      }
    } catch (err) {
      console.warn("[useReadinessQuiz] Submit failed:", err);
    } finally {
      isEvaluating.value = false;
    }
    return resolvedHash;
  };
  const nextQuestion = async () => {
    if (currentIndex.value < totalQuestions.value - 1) {
      currentIndex.value += 1;
      return null;
    } else {
      isCompleted.value = true;
      if (results.value) {
        return await submitToServer(results.value);
      }
      return null;
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
  const loadHistoryRecord = (record) => {
    var _a, _b;
    selectedRole.value = record.role;
    answers.value = { ...record.answers || {} };
    percentile.value = (_a = record.percentile) != null ? _a : null;
    aiEvaluation.value = (_b = record.aiEvaluation) != null ? _b : null;
    aiProjectOverrides.value = {};
    isCompleted.value = true;
    activeHistoryId.value = record.id;
    const hash = record.hash || resolveReadinessHash({
      id: record.id,
      role: record.role,
      scores: record.scores
    });
    activeHash.value = hash;
    return hash;
  };
  const restartQuiz = () => {
    answers.value = {};
    currentIndex.value = 0;
    isCompleted.value = false;
    aiEvaluation.value = null;
    aiProjectOverrides.value = {};
    activeHistoryId.value = null;
    activeHash.value = null;
  };
  const results = computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
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
        const chosenIdx = (_a = answers.value[q.id]) != null ? _a : answers.value[String(q.id)];
        if (typeof chosenIdx === "number" && q.options[chosenIdx]) {
          rawScores[dim] += (_b = q.options[chosenIdx].scores[dim]) != null ? _b : 10;
        } else {
          rawScores[dim] += Math.round((qMax + qMin) / 2);
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
    const strongestDimension = (_c = sortedByScore[0]) != null ? _c : dimensionResults[0];
    const weakestDimension = (_d = sortedByScore[sortedByScore.length - 1]) != null ? _d : dimensionResults[0];
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
    const roleMeta = (_e = roles.value[role]) != null ? _e : roles.value.developer;
    const roleAdvice = localizeRoleAdvice((_f = ROLE_ADVICES[role]) != null ? _f : ROLE_ADVICES.developer, role, isEn.value);
    const matchedProjects = rankProjectsForUser({
      projects: projects.value,
      role,
      dimensionScores: dimensionMap,
      locale: activeLocale.value,
      limit: 3
    }).map((item) => {
      const ov = aiProjectOverrides.value[item.project.id];
      if (!ov) return item;
      return {
        ...item,
        matchScore: typeof ov.matchScore === "number" ? ov.matchScore : item.matchScore,
        whyItFits: ov.whyItFits || item.whyItFits,
        firstWeekAction: ov.firstWeekAction || item.firstWeekAction
      };
    });
    let fallbackEval = aiEvaluation.value;
    if (!fallbackEval && answeredCount > 0) {
      const chosenInsights = [];
      for (const q of qList) {
        const idx = (_g = answers.value[q.id]) != null ? _g : answers.value[String(q.id)];
        if (typeof idx === "number" && q.options[idx]) {
          const opt = q.options[idx];
          if (((_h = opt.scores[q.dimensionFocus]) != null ? _h : 15) <= 12) {
            chosenInsights.push(`\u3010${q.category}\u3011${opt.insight}`);
          }
        }
      }
      fallbackEval = {
        source: "answer-engine",
        summary: tier.summary,
        blindspotAnalysis: chosenInsights.slice(0, 2).join(" ") || ((_j = (_i = blindspots[0]) == null ? void 0 : _i.diagnosis) != null ? _j : ""),
        actionPlan: (_m = (_l = (_k = blindspots[0]) == null ? void 0 : _k.prescriptions) == null ? void 0 : _l.slice(0, 3)) != null ? _m : [],
        evaluatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
    const hash = activeHash.value || resolveReadinessHash({
      id: activeHistoryId.value,
      role,
      scores: dimensionMap
    });
    return {
      hash,
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
      matchedProjects,
      percentile: percentile.value,
      aiEvaluation: fallbackEval
    };
  });
  return {
    selectedRole,
    roles,
    dimensions,
    rolePreviewProjects,
    selectRole,
    currentIndex,
    currentQuestion,
    totalQuestions,
    questions,
    answers,
    isCompleted,
    isEvaluating,
    isCurrentAnswered,
    progressPercent,
    selectOption,
    nextQuestion,
    prevQuestion,
    jumpToQuestion,
    restartQuiz,
    results,
    percentile,
    aiEvaluation,
    history,
    activeHistoryId,
    activeHash,
    loadHistoryRecord,
    uiCopy
  };
}

export { useReadinessQuiz as u };
//# sourceMappingURL=useReadinessQuiz-BYG-RsBh.mjs.map
