import { defineComponent, ref, reactive, watch, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr, ssrLooseContain, ssrRenderList } from 'vue/server-renderer';
import { H as HOXI_MODEL_CATEGORIES } from './model-category-8Z7P4563.mjs';
import { u as useI18n } from './server.mjs';
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
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
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
  __name: "rewards",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const saving = ref(false);
    const retrying = ref(false);
    const statusMsg = ref("");
    const maskedToken = ref("");
    const connection = ref(null);
    const outbox = ref(null);
    const events = ref([]);
    const categoryOptions = HOXI_MODEL_CATEGORIES;
    const callableModels = ref([]);
    const effectiveDefaults = ref({});
    const modelCategoryFilter = ref("");
    const grantSearch = ref("");
    const grantSearching = ref(false);
    const grantSubmitting = ref(false);
    const grantUsers = ref([]);
    const selectedGrantUser = ref(null);
    const grantForm = reactive({
      points: 5e3,
      reason: ""
    });
    watch(selectedGrantUser, () => {
    });
    const form = reactive({
      baseUrl: "https://api.ainode.run",
      tenantToken: "",
      clientDefaults: {
        chat: "",
        coding: "",
        tts: "",
        ttsVoice: "longanhuan",
        realtime: "",
        realtimeVoice: "Chelsie",
        asr: "",
        image: "",
        video: "",
        categoryOverrides: {}
      },
      policy: {
        enabled: true,
        ruleVersion: "v1",
        randomEnabled: true,
        randomMinPoints: 5e3,
        randomMaxPoints: 1e5,
        basePoints: 5e3,
        streakStep: 1e3,
        maxPoints: 1e5,
        userMonthlyCapPoints: 5e6,
        globalMonthlyBudgetPoints: 5e8,
        requireVerifiedEmail: true
      }
    });
    function getEffectiveCategoryFor(m) {
      return form.clientDefaults.categoryOverrides[m.modelName] || m.inferredCategory || m.category || "chat";
    }
    function modelsByCategory(cats) {
      return callableModels.value.filter((m) => cats.includes(getEffectiveCategoryFor(m)));
    }
    const filteredCallableModels = computed(() => {
      const q = modelCategoryFilter.value.trim().toLowerCase();
      if (!q) return callableModels.value;
      return callableModels.value.filter((m) => {
        const cat = getEffectiveCategoryFor(m);
        return m.modelName.toLowerCase().includes(q) || m.displayName.toLowerCase().includes(q) || cat.toLowerCase().includes(q);
      });
    });
    function isModelCurrentDefault(modelName, category) {
      if (category === "chat") return (form.clientDefaults.chat || effectiveDefaults.value.chat) === modelName;
      if (category === "coding") return (form.clientDefaults.coding || effectiveDefaults.value.coding) === modelName;
      if (category === "tts") return (form.clientDefaults.tts || effectiveDefaults.value.tts) === modelName;
      if (category === "realtime") return (form.clientDefaults.realtime || effectiveDefaults.value.realtime) === modelName;
      if (category === "asr") return (form.clientDefaults.asr || effectiveDefaults.value.asr) === modelName;
      if (category === "image") return (form.clientDefaults.image || effectiveDefaults.value.image) === modelName;
      if (category === "video") return (form.clientDefaults.video || effectiveDefaults.value.video) === modelName;
      return false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-6xl mx-auto space-y-6 text-slate-900 dark:text-slate-100" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800"><div><h1 class="text-xl font-bold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.title"))}</h1><p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.subtitle"))}</p></div><div class="flex items-center gap-2"><button type="button" class="px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium hover:border-blue-400"${ssrIncludeBooleanAttr(retrying.value) ? " disabled" : ""}>${ssrInterpolate(retrying.value ? _ctx.$t("hoxi.admin.rewards.loading") : _ctx.$t("hoxi.admin.rewards.retryPendingBtn"))}</button><button type="button" class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""}>${ssrInterpolate(saving.value ? _ctx.$t("hoxi.admin.rewards.loading") : _ctx.$t("hoxi.admin.rewards.saveBtn"))}</button></div></div>`);
      if (statusMsg.value) {
        _push(`<p class="text-xs text-blue-600 dark:text-blue-400">${ssrInterpolate(statusMsg.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4"><div class="flex items-center justify-between"><h2 class="text-sm font-semibold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.ainodeTitle"))}</h2><span class="${ssrRenderClass([((_a = connection.value) == null ? void 0 : _a.reachable) ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300", "px-2 py-0.5 rounded text-[11px] font-mono"])}">${ssrInterpolate(((_b = connection.value) == null ? void 0 : _b.reachable) ? "Connected" : "Unreachable / Unconfigured")}</span></div><div><label class="block text-xs text-slate-500 mb-1">AINode Base URL</label><input${ssrRenderAttr("value", form.baseUrl)} type="text" placeholder="https://api.ainode.run" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1"> Tenant Token (${ssrInterpolate(maskedToken.value || "not set")}) </label><input${ssrRenderAttr("value", form.tenantToken)} type="password" placeholder="Leave blank to keep existing token" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div>`);
      if ((_c = connection.value) == null ? void 0 : _c.reachable) {
        _push(`<div class="text-xs font-mono text-slate-500 space-y-1"><div>KeyGroup: ${ssrInterpolate(connection.value.keyGroupName)} (#${ssrInterpolate(connection.value.keyGroupId)}, x${ssrInterpolate(connection.value.groupMultiplier)})</div><div>Callable Models: ${ssrInterpolate(connection.value.modelsCount)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4"><div class="flex items-center justify-between"><h2 class="text-sm font-semibold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.policyTitle"))}</h2><label class="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(form.policy.randomEnabled) ? ssrLooseContain(form.policy.randomEnabled, null) : form.policy.randomEnabled) ? " checked" : ""} type="checkbox" class="rounded border-slate-300 dark:border-slate-700 text-blue-600"><span>Random Points Range</span></label></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-3"><div><label class="block text-xs text-slate-500 mb-1">Random Min Points</label><input${ssrRenderAttr("value", form.policy.randomMinPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Random Max Points</label><input${ssrRenderAttr("value", form.policy.randomMaxPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Base Points</label><input${ssrRenderAttr("value", form.policy.basePoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Streak Step</label><input${ssrRenderAttr("value", form.policy.streakStep)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Max Daily Points</label><input${ssrRenderAttr("value", form.policy.maxPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">User Monthly Cap</label><input${ssrRenderAttr("value", form.policy.userMonthlyCapPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Global Monthly Cap</label><input${ssrRenderAttr("value", form.policy.globalMonthlyBudgetPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Rule Version</label><input${ssrRenderAttr("value", form.policy.ruleVersion)} type="text" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div></div></div></div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-5"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3"><div><h2 class="text-sm font-semibold">\u5BA2\u6237\u7AEF\u6A21\u578B\u5206\u7C7B\u4E0E\u9ED8\u8BA4\u6A21\u578B\u914D\u7F6E\uFF08Hoxi \u684C\u9762\u7AEF / \u79FB\u52A8\u7AEF\u5BF9\u53F7\u5165\u5EA7\uFF09</h2><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"> \u7EDF\u4E00\u4E3A\u7F51\u5173\u4E0B\u53D1\u6A21\u578B\u6807\u8BB0\u529F\u80FD\u5206\u7C7B\uFF08\u5BF9\u8BDD\u3001\u7F16\u7A0B\u3001TTS\u3001Realtime\u3001\u56FE\u50CF\u3001\u89C6\u9891\uFF09\uFF0C\u5E76\u6307\u5B9A\u5404\u7AEF\u9996\u6B21\u8FDE\u63A5\u6216\u672A\u624B\u52A8\u9009\u578B\u65F6\u7684\u9ED8\u8BA4\u6A21\u578B\u4E0E\u97F3\u8272 </p></div><span class="text-xs font-mono text-slate-500"> \u7559\u7A7A\u5219\u81EA\u52A8\u9009\u7528\u5BF9\u5E94\u5206\u7C7B\u4E0B\u7684\u9996\u4E2A\u53EF\u7528\u6A21\u578B </span></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><div><label class="block text-xs text-slate-500 mb-1"> \u{1F4AC} \u9ED8\u8BA4\u65E5\u5E38\u5BF9\u8BDD\u6A21\u578B (<code class="font-mono">chat</code>) </label><input${ssrRenderAttr("value", form.clientDefaults.chat)} list="datalist-chat-models" type="text"${ssrRenderAttr("placeholder", effectiveDefaults.value.chat || "\u81EA\u52A8\u9009\u62E9\u9996\u4E2A\u5BF9\u8BDD\u6A21\u578B")} class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"><datalist id="datalist-chat-models"><!--[-->`);
      ssrRenderList(modelsByCategory(["chat", "coding"]), (m) => {
        _push(`<option${ssrRenderAttr("value", m.modelName)}>${ssrInterpolate(m.displayName)}</option>`);
      });
      _push(`<!--]--></datalist></div><div><label class="block text-xs text-slate-500 mb-1"> \u{1F4BB} \u9ED8\u8BA4\u7F16\u7A0B / Agent \u6A21\u578B (<code class="font-mono">coding</code>) </label><input${ssrRenderAttr("value", form.clientDefaults.coding)} list="datalist-coding-models" type="text"${ssrRenderAttr("placeholder", effectiveDefaults.value.coding || "\u81EA\u52A8\u9009\u62E9\u9996\u4E2A\u7F16\u7A0B/\u5BF9\u8BDD\u6A21\u578B")} class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"><datalist id="datalist-coding-models"><!--[-->`);
      ssrRenderList(modelsByCategory(["coding", "chat"]), (m) => {
        _push(`<option${ssrRenderAttr("value", m.modelName)}>${ssrInterpolate(m.displayName)}</option>`);
      });
      _push(`<!--]--></datalist></div><div><label class="block text-xs text-slate-500 mb-1"> \u{1F50A} \u9ED8\u8BA4\u8BED\u97F3\u5408\u6210\u6A21\u578B (<code class="font-mono">tts</code>) </label><input${ssrRenderAttr("value", form.clientDefaults.tts)} list="datalist-tts-models" type="text"${ssrRenderAttr("placeholder", effectiveDefaults.value.tts || "\u5982 cosyvoice-v3-flash")} class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"><datalist id="datalist-tts-models"><!--[-->`);
      ssrRenderList(modelsByCategory(["tts"]), (m) => {
        _push(`<option${ssrRenderAttr("value", m.modelName)}>${ssrInterpolate(m.displayName)}</option>`);
      });
      _push(`<!--]--></datalist></div><div><label class="block text-xs text-slate-500 mb-1"> \u{1F3B5} \u9ED8\u8BA4 TTS \u97F3\u8272 (<code class="font-mono">ttsVoice</code>) </label><input${ssrRenderAttr("value", form.clientDefaults.ttsVoice)} type="text" placeholder="longanhuan / Kore / alloy" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1"> \u{1F399}\uFE0F \u9ED8\u8BA4\u5B9E\u65F6\u8BED\u97F3\u6A21\u578B (<code class="font-mono">realtime</code>) </label><input${ssrRenderAttr("value", form.clientDefaults.realtime)} list="datalist-realtime-models" type="text"${ssrRenderAttr("placeholder", effectiveDefaults.value.realtime || "\u5982 qwen-omni-turbo-realtime")} class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"><datalist id="datalist-realtime-models"><!--[-->`);
      ssrRenderList(modelsByCategory(["realtime"]), (m) => {
        _push(`<option${ssrRenderAttr("value", m.modelName)}>${ssrInterpolate(m.displayName)}</option>`);
      });
      _push(`<!--]--></datalist></div><div><label class="block text-xs text-slate-500 mb-1"> \u{1F5E3}\uFE0F \u9ED8\u8BA4 Realtime \u97F3\u8272 (<code class="font-mono">realtimeVoice</code>) </label><input${ssrRenderAttr("value", form.clientDefaults.realtimeVoice)} type="text" placeholder="Chelsie" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1"> \u{1F3A8} \u9ED8\u8BA4\u56FE\u50CF\u751F\u6210\u6A21\u578B (<code class="font-mono">image</code>) </label><input${ssrRenderAttr("value", form.clientDefaults.image)} list="datalist-image-models" type="text"${ssrRenderAttr("placeholder", effectiveDefaults.value.image || "\u5982 gpt-image-1")} class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"><datalist id="datalist-image-models"><!--[-->`);
      ssrRenderList(modelsByCategory(["image"]), (m) => {
        _push(`<option${ssrRenderAttr("value", m.modelName)}>${ssrInterpolate(m.displayName)}</option>`);
      });
      _push(`<!--]--></datalist></div><div><label class="block text-xs text-slate-500 mb-1"> \u{1F3AC} \u9ED8\u8BA4\u89C6\u9891\u751F\u6210\u6A21\u578B (<code class="font-mono">video</code>) </label><input${ssrRenderAttr("value", form.clientDefaults.video)} list="datalist-video-models" type="text"${ssrRenderAttr("placeholder", effectiveDefaults.value.video || "\u5982 seedance-1-0")} class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"><datalist id="datalist-video-models"><!--[-->`);
      ssrRenderList(modelsByCategory(["video"]), (m) => {
        _push(`<option${ssrRenderAttr("value", m.modelName)}>${ssrInterpolate(m.displayName)}</option>`);
      });
      _push(`<!--]--></datalist></div></div>`);
      if (callableModels.value.length) {
        _push(`<div class="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2"><div class="text-xs font-medium text-slate-600 dark:text-slate-300"> \u7F51\u5173\u6A21\u578B\u5206\u7C7B\u5BF9\u53F7\u5165\u5EA7\u8868\uFF08\u5171 ${ssrInterpolate(callableModels.value.length)} \u6B3E\u6A21\u578B\uFF0C\u53EF\u624B\u52A8\u8C03\u6574\u5206\u7C7B\u8986\u76D6\uFF09 </div><input${ssrRenderAttr("value", modelCategoryFilter.value)} type="text" placeholder="\u8FC7\u6EE4\u6A21\u578B\u540D\u6216\u5206\u7C7B..." class="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono w-full sm:w-60"></div><div class="max-h-64 overflow-y-auto rounded-lg border border-slate-100 dark:border-slate-800"><table class="w-full text-left border-collapse text-xs"><thead><tr class="border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 text-slate-500"><th class="py-2 px-3">\u6A21\u578B\u6807\u8BC6 (modelName)</th><th class="py-2 px-3">\u7F51\u5173\u6A21\u6001</th><th class="py-2 px-3">\u81EA\u52A8\u8BC6\u522B\u5206\u7C7B</th><th class="py-2 px-3">\u5BA2\u6237\u7AEF\u751F\u6548\u5206\u7C7B</th><th class="py-2 px-3 text-right">\u5FEB\u6377\u8BBE\u4E3A\u9ED8\u8BA4</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
        ssrRenderList(filteredCallableModels.value, (m) => {
          _push(`<tr><td class="py-2 px-3 font-mono font-medium">${ssrInterpolate(m.modelName)}</td><td class="py-2 px-3 font-mono text-slate-500">${ssrInterpolate(m.modality)}</td><td class="py-2 px-3 font-mono text-slate-400">${ssrInterpolate(m.inferredCategory)}</td><td class="py-2 px-3"><select${ssrRenderAttr("value", getEffectiveCategoryFor(m))} class="px-2 py-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-mono"><!--[-->`);
          ssrRenderList(unref(categoryOptions), (cat) => {
            _push(`<option${ssrRenderAttr("value", cat.key)}>${ssrInterpolate(cat.key)} \xB7 ${ssrInterpolate(cat.labelZh)}</option>`);
          });
          _push(`<!--]--></select></td><td class="py-2 px-3 text-right space-x-1"><button type="button" class="${ssrRenderClass([isModelCurrentDefault(m.modelName, getEffectiveCategoryFor(m)) ? "border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 font-semibold" : "border-slate-200 dark:border-slate-700 text-slate-500 hover:border-blue-400", "px-2 py-0.5 rounded border text-[11px] transition"])}">${ssrInterpolate(isModelCurrentDefault(m.modelName, getEffectiveCategoryFor(m)) ? "\u2713 \u5F53\u524D\u9ED8\u8BA4" : "\u8BBE\u4E3A\u8BE5\u7C7B\u9ED8\u8BA4")}</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4"><div class="flex items-center justify-between"><div><h2 class="text-sm font-semibold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantTitle"))}</h2><p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantSubtitle"))}</p></div><span class="text-xs font-mono text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantRateHint"))}</span></div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label class="block text-xs text-slate-500 mb-1">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantSearchLabel"))}</label><div class="flex items-center gap-2"><input${ssrRenderAttr("value", grantSearch.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.admin.rewards.grantSearchPlaceholder"))} class="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"><button type="button" class="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium hover:border-blue-400"${ssrIncludeBooleanAttr(grantSearching.value) ? " disabled" : ""}>${ssrInterpolate(grantSearching.value ? _ctx.$t("hoxi.admin.rewards.loading") : _ctx.$t("hoxi.admin.rewards.grantSearchBtn"))}</button></div></div><div><label class="block text-xs text-slate-500 mb-1">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantSelectedLabel"))}</label><div class="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono truncate">`);
      if (selectedGrantUser.value) {
        _push(`<span> #${ssrInterpolate(selectedGrantUser.value.userId)} \xB7 ${ssrInterpolate(selectedGrantUser.value.email || selectedGrantUser.value.nickname)} `);
        if (!selectedGrantUser.value.linked) {
          _push(`<span class="text-amber-600 dark:text-amber-400"> \xB7 ${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantUnlinked"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<span class="text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantNoneSelected"))}</span>`);
      }
      _push(`</div></div></div>`);
      if (grantUsers.value.length) {
        _push(`<div class="max-h-56 overflow-y-auto rounded-lg border border-slate-100 dark:border-slate-800"><!--[-->`);
        ssrRenderList(grantUsers.value, (user) => {
          var _a2;
          _push(`<button type="button" class="${ssrRenderClass([((_a2 = selectedGrantUser.value) == null ? void 0 : _a2.userId) === user.userId ? "bg-blue-50 dark:bg-blue-950/40" : "", "w-full text-left px-3 py-2 text-xs border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-800/60"])}"><span class="font-mono">#${ssrInterpolate(user.userId)}</span><span class="ml-2">${ssrInterpolate(user.email || user.nickname)}</span>`);
          if (!user.emailVerified) {
            _push(`<span class="ml-2 text-amber-600 dark:text-amber-400">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantEmailUnverified"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (user.status !== 1) {
            _push(`<span class="ml-2 text-rose-600 dark:text-rose-400">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantDisabled"))}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3"><div><label class="block text-xs text-slate-500 mb-1">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantPointsLabel"))}</label><input${ssrRenderAttr("value", grantForm.points)} type="number" min="1" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div class="sm:col-span-2"><label class="block text-xs text-slate-500 mb-1">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantReasonLabel"))}</label><input${ssrRenderAttr("value", grantForm.reason)} type="text" maxlength="200"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.admin.rewards.grantReasonPlaceholder"))} class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs"></div></div><div class="flex items-center justify-between gap-3"><p class="text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.grantAuditHint"))}</p><button type="button" class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"${ssrIncludeBooleanAttr(grantSubmitting.value) ? " disabled" : ""}>${ssrInterpolate(grantSubmitting.value ? _ctx.$t("hoxi.admin.rewards.loading") : _ctx.$t("hoxi.admin.rewards.grantSubmitBtn"))}</button></div></div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"><div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between"><h2 class="text-sm font-semibold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.outboxTitle"))}</h2><span class="text-xs font-mono text-slate-500"> Succeeded: ${ssrInterpolate(((_f = (_e = (_d = outbox.value) == null ? void 0 : _d.counts) == null ? void 0 : _e.succeeded) == null ? void 0 : _f.count) || 0)} \xB7 RetryWait: ${ssrInterpolate(((_i = (_h = (_g = outbox.value) == null ? void 0 : _g.counts) == null ? void 0 : _h.retry_wait) == null ? void 0 : _i.count) || 0)} \xB7 Blocked: ${ssrInterpolate(((_l = (_k = (_j = outbox.value) == null ? void 0 : _j.counts) == null ? void 0 : _k.blocked) == null ? void 0 : _l.count) || 0)}</span></div><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="border-b border-slate-100 dark:border-slate-800 text-slate-500"><th class="py-2.5 px-4">Operation ID</th><th class="py-2.5 px-4">User</th><th class="py-2.5 px-4">Source</th><th class="py-2.5 px-4">Remark</th><th class="py-2.5 px-4 text-right">Points</th><th class="py-2.5 px-4">Status</th><th class="py-2.5 px-4">Last Error</th><th class="py-2.5 px-4 text-right">Action</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
      ssrRenderList(events.value, (ev) => {
        _push(`<tr><td class="py-2.5 px-4 font-mono text-[11px]">${ssrInterpolate(ev.operationId)}</td><td class="py-2.5 px-4 font-mono">#${ssrInterpolate(ev.userId)}</td><td class="py-2.5 px-4 font-mono">${ssrInterpolate(ev.sourceKey)}</td><td class="py-2.5 px-4 max-w-xs truncate">`);
        if (ev.sourceType === "admin_grant") {
          _push(`<span class="text-blue-600 dark:text-blue-400">${ssrInterpolate(ev.operatorName || "admin")} \xB7 ${ssrInterpolate(ev.remark)}</span>`);
        } else {
          _push(`<span class="text-slate-400">\u2014</span>`);
        }
        _push(`</td><td class="py-2.5 px-4 text-right font-mono tabular-nums">+${ssrInterpolate(ev.points)}</td><td class="py-2.5 px-4 font-mono">${ssrInterpolate(ev.status)}</td><td class="py-2.5 px-4 text-rose-600 dark:text-rose-400 max-w-xs truncate">${ssrInterpolate(ev.lastError)}</td><td class="py-2.5 px-4 text-right">`);
        if (ev.status !== "succeeded") {
          _push(`<button type="button" class="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 text-xs hover:border-blue-400"> Replay </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/rewards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rewards-BJWCTEtq.mjs.map
