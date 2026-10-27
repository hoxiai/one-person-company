import { e as useToast, v as _sfc_main$o, G as _sfc_main$n, b as _sfc_main$v, _ as _sfc_main$W, k as _sfc_main$M, i as _sfc_main$R, n as _sfc_main$G, a as _sfc_main$w, c as _sfc_main$r, B as _sfc_main$l } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const hoxiFreeTiers = [
  {
    id: "google",
    providerID: "google",
    name: "Google AI Studio (Gemini)",
    nameEn: "Google AI Studio (Gemini)",
    badge: "\u6BCF\u65E5\u9AD8\u9891\u514D\u8D39",
    badgeEn: "Generous Daily Free",
    quotaLabel: "Gemini 2.5 Flash \u6BCF\u65E5 500~1500 \u6B21\u514D\u8D39\u8BF7\u6C42\uFF0C1M \u8D85\u957F\u4E0A\u4E0B\u6587",
    quotaLabelEn: "500\u20131,500 free RPD on Gemini 2.5 Flash with 1M context window",
    steps: [
      "\u4F7F\u7528 Google \u8D26\u53F7\u767B\u5F55 Google AI Studio (aistudio.google.com/apikey)",
      "\u70B9\u51FB\u53F3\u4E0A\u89D2 Get API key -> Create API key \u4E00\u952E\u751F\u6210\u5BC6\u94A5\uFF08\u65E0\u9700\u7ED1\u5B9A\u4FE1\u7528\u5361\uFF09",
      "\u5728 Hoxi \u4F9B\u5E94\u5546\u8BBE\u7F6E\u4E2D\u9009\u62E9 Google\uFF0C\u7C98\u8D34 API Key\uFF08\u53EF\u7C98\u8D34\u591A\u4E2A Key \u7528\u9017\u53F7\u5206\u9694\u5B9E\u73B0\u81EA\u52A8\u8F6E\u8BE2\uFF09"
    ],
    stepsEn: [
      "Sign in to Google AI Studio (aistudio.google.com/apikey) with your Google account",
      "Click Get API key -> Create API key (no credit card required)",
      "Select Google in Hoxi Provider Settings and paste your API key(s)"
    ],
    signupUrl: "https://aistudio.google.com/apikey",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta",
    customMode: false,
    recommendedModels: ["gemini-2.5-flash", "gemini-2.0-flash"],
    hidden: false,
    sortOrder: 10
  },
  {
    id: "groq",
    providerID: "groq",
    name: "Groq Cloud (LPU \u6781\u901F\u63A8\u7406)",
    nameEn: "Groq Cloud (Ultra-Fast LPU)",
    badge: "\u6CE8\u518C\u5373\u9001\u514D\u8D39\u5C42",
    badgeEn: "Free Developer Tier",
    quotaLabel: "Llama 3.3 70B / Qwen / DeepSeek \u6BCF\u65E5\u6700\u9AD8 1,000~14,400 \u6B21\u514D\u8D39\u8BF7\u6C42",
    quotaLabelEn: "1,000\u201314,400 RPD free across Llama 3.3 70B, Qwen & DeepSeek",
    steps: [
      "\u8BBF\u95EE console.groq.com \u4F7F\u7528 GitHub \u6216 Google \u8D26\u53F7\u4E00\u952E\u767B\u5F55",
      "\u5DE6\u4FA7\u83DC\u5355\u8FDB\u5165 API Keys -> Create API Key \u751F\u6210 `gsk_...` \u5BC6\u94A5",
      "\u5728 Hoxi \u81EA\u5B9A\u4E49\u7AEF\u70B9\u4E2D\u6DFB\u52A0\uFF1A`https://api.groq.com/openai/v1` \u5E76\u586B\u5165 API Key"
    ],
    stepsEn: [
      "Sign in at console.groq.com with GitHub or Google",
      "Go to API Keys -> Create API Key (`gsk_...`)",
      "Add a Custom Endpoint in Hoxi with Base URL `https://api.groq.com/openai/v1`"
    ],
    signupUrl: "https://console.groq.com/keys",
    baseUrl: "https://api.groq.com/openai/v1",
    customMode: true,
    recommendedModels: ["llama-3.3-70b-versatile", "qwen-qwq-32b"],
    hidden: false,
    sortOrder: 20
  },
  {
    id: "openrouter",
    providerID: "openrouter",
    name: "OpenRouter (:free \u514D\u8D39\u6A21\u578B\u4E13\u533A)",
    nameEn: "OpenRouter (:free Models)",
    badge: "\u591A\u6A21\u578B\u805A\u5408\u767D\u5AD6",
    badgeEn: "Multi-Model Free Pool",
    quotaLabel: "\u6570\u5341\u6B3E\u5E26 `:free` \u540E\u7F00\u7684\u5F00\u6E90\u65D7\u8230\u6A21\u578B\uFF08DeepSeek R1/V3\u3001Gemma 3\u3001Qwen3\uFF09\u514D\u8D39\u8C03\u7528",
    quotaLabelEn: "Dozens of `:free` models (DeepSeek R1/V3, Gemma 3, Qwen3) at $0 cost",
    steps: [
      "\u767B\u5F55 openrouter.ai/settings/keys\uFF0C\u70B9\u51FB Create Key \u521B\u5EFA\u514D\u8D39\u5BC6\u94A5",
      "\u5728 Hoxi \u4F9B\u5E94\u5546\u5217\u8868\u9009\u62E9 OpenRouter \u5E76\u586B\u5165 `sk-or-v1-...` \u5BC6\u94A5",
      "\u5C06\u5E26 `:free` \u540E\u7F00\u7684\u6A21\u578B\u52A0\u5165 `hoxi-auto/free` \u5019\u9009\u6C60\uFF0C\u89E6\u53D1 429 \u81EA\u52A8\u5207\u6362\u4E0B\u4E00\u8282\u70B9"
    ],
    stepsEn: [
      "Visit openrouter.ai/settings/keys and click Create Key",
      "Select OpenRouter in Hoxi Providers and paste your `sk-or-v1-...` key",
      "Add `:free` models to `hoxi-auto/free` for automatic 429 rotation"
    ],
    signupUrl: "https://openrouter.ai/settings/keys",
    baseUrl: "https://openrouter.ai/api/v1",
    customMode: false,
    recommendedModels: ["deepseek/deepseek-chat-v3-0324:free", "deepseek/deepseek-r1:free", "qwen/qwen3-235b-a22b:free"],
    hidden: false,
    sortOrder: 30
  },
  {
    id: "siliconflow",
    providerID: "siliconflow",
    name: "SiliconFlow \u7845\u57FA\u6D41\u52A8",
    nameEn: "SiliconFlow Cloud",
    badge: "\u56FD\u5185\u76F4\u8FDE + \u6C38\u4E45\u514D\u8D39\u6A21\u578B",
    badgeEn: "Permanent Free Models",
    quotaLabel: "\u6CE8\u518C\u8D60\u9001\u4F53\u9A8C\u91D1 + Qwen2.5-7B / DeepSeek-R1-Distill-7B \u7B49\u591A\u6B3E\u6A21\u578B \xA50 \u6C38\u4E45\u514D\u8D39",
    quotaLabelEn: "Signup bonus credits + permanent \xA50 free models (Qwen2.5-7B, DeepSeek-R1-Distill-7B)",
    steps: [
      "\u8BBF\u95EE cloud.siliconflow.cn \u6CE8\u518C\u8D26\u53F7\uFF08\u56FD\u5185\u7F51\u7EDC\u76F4\u8FDE\u514D\u4EE3\u7406\uFF09",
      "\u5728\u300CAPI \u5BC6\u94A5\u300D\u9875\u9762\u65B0\u5EFA\u5BC6\u94A5 `sk-...`",
      "\u5728 Hoxi \u81EA\u5B9A\u4E49\u7AEF\u70B9\u4E2D\u6DFB\u52A0 Base URL\uFF1A`https://api.siliconflow.cn/v1`"
    ],
    stepsEn: [
      "Register at cloud.siliconflow.cn",
      "Create a new API key (`sk-...`) under API Keys",
      "Add a Custom Endpoint in Hoxi with Base URL `https://api.siliconflow.cn/v1`"
    ],
    signupUrl: "https://cloud.siliconflow.cn/account/ak",
    baseUrl: "https://api.siliconflow.cn/v1",
    customMode: true,
    recommendedModels: ["Qwen/Qwen2.5-Coder-7B-Instruct", "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B"],
    hidden: false,
    sortOrder: 40
  },
  {
    id: "github-models",
    providerID: "github",
    name: "GitHub Models (Azure AI Inference)",
    nameEn: "GitHub Models (Azure AI Inference)",
    badge: "GitHub \u8D26\u53F7\u5373\u7528",
    badgeEn: "Included with GitHub",
    quotaLabel: "\u51ED GitHub Personal Access Token \u6BCF\u65E5\u514D\u8D39\u8C03\u7528 GPT-4o / GPT-4.1-mini / DeepSeek-R1",
    quotaLabelEn: "Use your GitHub PAT for free daily requests on GPT-4o, GPT-4.1-mini & DeepSeek-R1",
    steps: [
      "\u767B\u5F55 GitHub -> Settings -> Developer settings -> Personal access tokens \u751F\u6210 Token",
      "\u65E0\u9700\u52FE\u9009\u7279\u6B8A\u4ED3\u5E93\u6743\u9650\uFF0C\u4EC5\u7528\u4E8E GitHub Models \u63A8\u7406\u9274\u6743",
      "\u5728 Hoxi \u81EA\u5B9A\u4E49\u7AEF\u70B9\u6DFB\u52A0 `https://models.inference.ai.azure.com` \u5E76\u586B\u5165 GitHub Token"
    ],
    stepsEn: [
      "Go to GitHub Settings -> Developer settings -> Personal access tokens to create a token",
      "No repository permissions are required for inference access",
      "Add a Custom Endpoint in Hoxi with Base URL `https://models.inference.ai.azure.com`"
    ],
    signupUrl: "https://github.com/marketplace/models",
    baseUrl: "https://models.inference.ai.azure.com",
    customMode: true,
    recommendedModels: ["gpt-4o-mini", "gpt-4.1-mini", "DeepSeek-R1"],
    hidden: false,
    sortOrder: 50
  },
  {
    id: "mistral",
    providerID: "mistral",
    name: "Mistral AI La Plateforme",
    nameEn: "Mistral AI La Plateforme",
    badge: "Experiment \u514D\u8D39\u5C42",
    badgeEn: "Experiment Free Tier",
    quotaLabel: "\u5F00\u901A Experiment \u514D\u8D39\u8BA1\u5212\u5373\u53EF\u514D\u8D39\u8C03\u7528 Codestral \u4E0E Mistral Small \u6700\u65B0\u4EE3\u7801\u6A21\u578B",
    quotaLabelEn: "Enable the free Experiment plan to access Codestral and Mistral Small at $0",
    steps: [
      "\u767B\u5F55 console.mistral.ai \u8FDB\u5165 Workspace \u9009\u62E9 Experiment \u514D\u8D39\u8BA1\u5212",
      "\u8FDB\u5165 API Keys \u9875\u9762\u751F\u6210\u5BC6\u94A5",
      "\u5728 Hoxi \u81EA\u5B9A\u4E49\u7AEF\u70B9\u6DFB\u52A0 `https://api.mistral.ai/v1` \u5E76\u586B\u5165\u5BC6\u94A5"
    ],
    stepsEn: [
      "Sign in at console.mistral.ai and select the free Experiment plan",
      "Generate an API key under API Keys",
      "Add a Custom Endpoint in Hoxi with Base URL `https://api.mistral.ai/v1`"
    ],
    signupUrl: "https://console.mistral.ai/api-keys",
    baseUrl: "https://api.mistral.ai/v1",
    customMode: true,
    recommendedModels: ["codestral-latest", "mistral-small-latest"],
    hidden: false,
    sortOrder: 60
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "free-tiers",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const saving = ref(false);
    const errorMsg = ref("");
    const searchQuery = ref("");
    const list = ref([]);
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const editingModelsText = ref("");
    const editingStepsText = ref("");
    const editingStepsEnText = ref("");
    const filteredList = computed(() => {
      const q = searchQuery.value.trim().toLowerCase();
      if (!q) return list.value;
      return list.value.filter(
        (item) => item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q) || item.providerID.toLowerCase().includes(q) || item.baseUrl.toLowerCase().includes(q) || (item.recommendedModels || []).some((m) => m.toLowerCase().includes(q))
      );
    });
    const moveUp = (index) => {
      if (index <= 0) return;
      const arr = [...list.value];
      const tmp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = tmp;
      list.value = arr;
    };
    const moveDown = (index) => {
      if (index >= list.value.length - 1) return;
      const arr = [...list.value];
      const tmp = arr[index + 1];
      arr[index + 1] = arr[index];
      arr[index] = tmp;
      list.value = arr;
    };
    const openAddModal = () => {
      isEditingNew.value = true;
      editingItem.value = {
        id: `free-${Date.now()}`,
        providerID: "custom",
        name: "\u65B0\u514D\u8D39 API \u5E73\u53F0",
        nameEn: "New Free API Platform",
        badge: "\u514D\u8D39\u989D\u5EA6",
        badgeEn: "Free Quota",
        quotaLabel: "\u6BCF\u65E5\u514D\u8D39\u8C03\u7528\u989D\u5EA6\u8BF4\u660E",
        quotaLabelEn: "Daily free quota description",
        steps: ["\u8BBF\u95EE\u5B98\u7F51\u6CE8\u518C\u8D26\u53F7", "\u521B\u5EFA API Key", "\u586B\u5165 Hoxi \u5373\u53EF\u53C2\u4E0E\u514D\u8D39\u8F6E\u8BE2"],
        stepsEn: ["Register on official website", "Create an API Key", "Configure in Hoxi"],
        signupUrl: "https://hoxi.ai",
        baseUrl: "https://api.hoxi.ai/v1",
        customMode: true,
        recommendedModels: [],
        hidden: false
      };
      editingModelsText.value = "";
      editingStepsText.value = editingItem.value.steps.join("\n");
      editingStepsEnText.value = (editingItem.value.stepsEn || []).join("\n");
      isEditModalOpen.value = true;
    };
    const openEditModal = (item) => {
      isEditingNew.value = false;
      editingItem.value = JSON.parse(JSON.stringify(item));
      editingModelsText.value = (item.recommendedModels || []).join(", ");
      editingStepsText.value = (item.steps || []).join("\n");
      editingStepsEnText.value = (item.stepsEn || []).join("\n");
      isEditModalOpen.value = true;
    };
    const saveEditModal = () => {
      if (!editingItem.value) return;
      editingItem.value.recommendedModels = editingModelsText.value.split(",").map((s) => s.trim()).filter(Boolean);
      editingItem.value.steps = editingStepsText.value.split("\n").map((s) => s.trim()).filter(Boolean);
      editingItem.value.stepsEn = editingStepsEnText.value.split("\n").map((s) => s.trim()).filter(Boolean);
      if (isEditingNew.value) {
        list.value.push(editingItem.value);
      } else {
        const idx = list.value.findIndex((i) => {
          var _a;
          return i.id === ((_a = editingItem.value) == null ? void 0 : _a.id);
        });
        if (idx !== -1) list.value[idx] = editingItem.value;
      }
      isEditModalOpen.value = false;
    };
    const removeItem = (id) => {
      list.value = list.value.filter((i) => i.id !== id);
    };
    const resetToBaseline = () => {
      list.value = JSON.parse(JSON.stringify(hoxiFreeTiers));
      toast.add({ title: "\u5DF2\u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF\u6570\u636E\uFF0C\u8BF7\u70B9\u51FB\u300C\u4FDD\u5B58\u81F3\u6570\u636E\u5E93\u300D\u751F\u6548", color: "info" });
    };
    const save = async () => {
      saving.value = true;
      errorMsg.value = "";
      try {
        await $fetch("/api/admin/hoxi/free-tiers", {
          method: "POST",
          body: { items: list.value }
        });
        toast.add({ title: "\u514D\u8D39\u989D\u5EA6\u5B9D\u5178\u5DF2\u4FDD\u5B58\uFF0CHoxi \u684C\u9762\u7AEF\u5C06\u5B9E\u65F6\u540C\u6B65\u6700\u65B0\u6559\u7A0B", color: "success" });
      } catch (err) {
        errorMsg.value = (err == null ? void 0 : err.message) || "\u4FDD\u5B58\u5931\u8D25";
      } finally {
        saving.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UAlert = _sfc_main$o;
      const _component_UCard = _sfc_main$n;
      const _component_UIcon = _sfc_main$W;
      const _component_UButton = _sfc_main$R;
      const _component_UInput = _sfc_main$v;
      const _component_UBadge = _sfc_main$M;
      const _component_UModal = _sfc_main$G;
      const _component_UFormField = _sfc_main$w;
      const _component_UTextarea = _sfc_main$r;
      const _component_UCheckbox = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (errorMsg.value) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: "\u8BF7\u6C42\u5F02\u5E38",
          description: errorMsg.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h2 class="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:gift",
              class: "w-5 h-5 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u514D\u8D39\u989D\u5EA6\u5B9D\u5178 (Free Tier Hub) \u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u4F9B Hoxi \u684C\u9762\u7AEF\u300C\u667A\u80FD\u8F6E\u8BE2\u6C60 \xB7 \u514D\u8D39\u989D\u5EA6\u5B9D\u5178\u300D\u5B9E\u65F6\u62C9\u53D6\uFF08\u63A5\u53E3\uFF1A<code class="font-mono text-xs"${_scopeId}>/api/hoxi/models/free-tiers</code>\uFF09\u3002\u652F\u6301\u7BA1\u7406\u514D\u8D39 API \u5E73\u53F0\u3001\u6BCF\u65E5\u989D\u5EA6\u8BF4\u660E\u3001\u6CE8\u518C\u6B65\u9AA4\u3001Base URL \u4E0E\u63A8\u8350\u514D\u8D39\u6A21\u578B\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:arrow-counter-clockwise",
              size: "sm",
              onClick: resetToBaseline
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF `);
                } else {
                  return [
                    createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:plus",
              size: "sm",
              onClick: openAddModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u65B0\u589E\u514D\u8D39\u5E73\u53F0 `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u514D\u8D39\u5E73\u53F0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: saving.value,
              icon: "ph:floppy-disk",
              size: "sm",
              onClick: save
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:gift",
                      class: "w-5 h-5 text-emerald-500"
                    }),
                    createVNode("span", null, "\u514D\u8D39\u989D\u5EA6\u5B9D\u5178 (Free Tier Hub) \u7BA1\u7406")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, [
                    createTextVNode(" \u4F9B Hoxi \u684C\u9762\u7AEF\u300C\u667A\u80FD\u8F6E\u8BE2\u6C60 \xB7 \u514D\u8D39\u989D\u5EA6\u5B9D\u5178\u300D\u5B9E\u65F6\u62C9\u53D6\uFF08\u63A5\u53E3\uFF1A"),
                    createVNode("code", { class: "font-mono text-xs" }, "/api/hoxi/models/free-tiers"),
                    createTextVNode("\uFF09\u3002\u652F\u6301\u7BA1\u7406\u514D\u8D39 API \u5E73\u53F0\u3001\u6BCF\u65E5\u989D\u5EA6\u8BF4\u660E\u3001\u6CE8\u518C\u6B65\u9AA4\u3001Base URL \u4E0E\u63A8\u8350\u514D\u8D39\u6A21\u578B\u3002 ")
                  ])
                ]),
                createVNode("div", { class: "flex flex-wrap items-center gap-2.5" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:arrow-counter-clockwise",
                    size: "sm",
                    onClick: resetToBaseline
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u57FA\u7EBF ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:plus",
                    size: "sm",
                    onClick: openAddModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u65B0\u589E\u514D\u8D39\u5E73\u53F0 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: saving.value,
                    icon: "ph:floppy-disk",
                    size: "sm",
                    onClick: save
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              icon: "ph:magnifying-glass",
              placeholder: "\u641C\u7D22\u5E73\u53F0\u540D\u79F0\u3001Provider ID\u3001Base URL \u6216\u63A8\u8350\u6A21\u578B...",
              size: "sm",
              class: "w-72"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-xs text-gray-500"${_scopeId}> \u5171 ${ssrInterpolate(list.value.length)} \u4E2A\u514D\u8D39\u6E20\u9053 \xB7 \u5F53\u524D\u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u4E2A </div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u6392\u5E8F</th><th class="px-3 py-3"${_scopeId}>\u5E73\u53F0\u540D\u79F0 / ID</th><th class="px-3 py-3"${_scopeId}>\u514D\u8D39\u989D\u5EA6\u8BF4\u660E</th><th class="px-3 py-3"${_scopeId}>\u63A5\u5165\u65B9\u5F0F / Base URL</th><th class="px-3 py-3"${_scopeId}>\u63A8\u8350\u514D\u8D39\u6A21\u578B</th><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u72B6\u6001</th><th class="w-28 px-3 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item, index) => {
              _push2(`<tr class="${ssrRenderClass([{ "opacity-50": item.hidden }, "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="px-3 py-3 text-center font-mono"${_scopeId}><div class="flex items-center justify-center gap-1"${_scopeId}><button type="button" class="p-0.5 hover:text-blue-600 disabled:opacity-30"${ssrIncludeBooleanAttr(index === 0) ? " disabled" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-up",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</button><span class="text-gray-400 text-[11px]"${_scopeId}>${ssrInterpolate(index + 1)}</span><button type="button" class="p-0.5 hover:text-blue-600 disabled:opacity-30"${ssrIncludeBooleanAttr(index === filteredList.value.length - 1) ? " disabled" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-down",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td><td class="px-3 py-3"${_scopeId}><div class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.name)}</span>`);
              if (item.badge) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: "success",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.badge)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.badge), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="text-[11px] text-gray-400 font-mono mt-0.5"${_scopeId}> id: ${ssrInterpolate(item.id)} \xB7 provider: ${ssrInterpolate(item.providerID)}</div></td><td class="px-3 py-3 max-w-xs"${_scopeId}><div class="text-gray-700 dark:text-gray-300 line-clamp-2"${_scopeId}>${ssrInterpolate(item.quotaLabel)}</div><div class="text-[11px] text-gray-400 mt-0.5"${_scopeId}>\u5171 ${ssrInterpolate((item.steps || []).length)} \u6B65\u6559\u7A0B</div></td><td class="px-3 py-3 font-mono text-[11px]"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: item.customMode ? "info" : "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.customMode ? "\u81EA\u5B9A\u4E49\u7AEF\u70B9 (OpenAI \u517C\u5BB9)" : "\u5185\u7F6E\u4F9B\u5E94\u5546\u76F4\u8FDE")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.customMode ? "\u81EA\u5B9A\u4E49\u7AEF\u70B9 (OpenAI \u517C\u5BB9)" : "\u5185\u7F6E\u4F9B\u5E94\u5546\u76F4\u8FDE"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="text-gray-500 truncate max-w-[200px] mt-1"${_scopeId}>${ssrInterpolate(item.baseUrl)}</div></td><td class="px-3 py-3"${_scopeId}><div class="flex flex-wrap gap-1 max-w-xs"${_scopeId}><!--[-->`);
              ssrRenderList(item.recommendedModels || [], (m) => {
                _push2(`<span class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-[11px] text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(m)}</span>`);
              });
              _push2(`<!--]--></div></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: item.hidden ? "neutral" : "success",
                variant: "subtle",
                size: "xs",
                onClick: ($event) => item.hidden = !item.hidden
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-3 text-right whitespace-nowrap"${_scopeId}><div class="flex items-center justify-end gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:pencil-simple",
                onClick: ($event) => openEditModal(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u7F16\u8F91 `);
                  } else {
                    return [
                      createTextVNode(" \u7F16\u8F91 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                onClick: ($event) => removeItem(item.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5220\u9664 `);
                  } else {
                    return [
                      createTextVNode(" \u5220\u9664 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode(_component_UInput, {
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                  icon: "ph:magnifying-glass",
                  placeholder: "\u641C\u7D22\u5E73\u53F0\u540D\u79F0\u3001Provider ID\u3001Base URL \u6216\u63A8\u8350\u6A21\u578B...",
                  size: "sm",
                  class: "w-72"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "text-xs text-gray-500" }, " \u5171 " + toDisplayString(list.value.length) + " \u4E2A\u514D\u8D39\u6E20\u9053 \xB7 \u5F53\u524D\u663E\u793A " + toDisplayString(filteredList.value.length) + " \u4E2A ", 1)
              ]),
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u6392\u5E8F"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5E73\u53F0\u540D\u79F0 / ID"),
                      createVNode("th", { class: "px-3 py-3" }, "\u514D\u8D39\u989D\u5EA6\u8BF4\u660E"),
                      createVNode("th", { class: "px-3 py-3" }, "\u63A5\u5165\u65B9\u5F0F / Base URL"),
                      createVNode("th", { class: "px-3 py-3" }, "\u63A8\u8350\u514D\u8D39\u6A21\u578B"),
                      createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u72B6\u6001"),
                      createVNode("th", { class: "w-28 px-3 py-3 text-right" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item, index) => {
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        class: ["hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors", { "opacity-50": item.hidden }]
                      }, [
                        createVNode("td", { class: "px-3 py-3 text-center font-mono" }, [
                          createVNode("div", { class: "flex items-center justify-center gap-1" }, [
                            createVNode("button", {
                              type: "button",
                              class: "p-0.5 hover:text-blue-600 disabled:opacity-30",
                              disabled: index === 0,
                              onClick: ($event) => moveUp(index)
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-up",
                                class: "w-3.5 h-3.5"
                              })
                            ], 8, ["disabled", "onClick"]),
                            createVNode("span", { class: "text-gray-400 text-[11px]" }, toDisplayString(index + 1), 1),
                            createVNode("button", {
                              type: "button",
                              class: "p-0.5 hover:text-blue-600 disabled:opacity-30",
                              disabled: index === filteredList.value.length - 1,
                              onClick: ($event) => moveDown(index)
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-down",
                                class: "w-3.5 h-3.5"
                              })
                            ], 8, ["disabled", "onClick"])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                            createVNode("span", null, toDisplayString(item.name), 1),
                            item.badge ? (openBlock(), createBlock(_component_UBadge, {
                              key: 0,
                              color: "success",
                              variant: "subtle",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.badge), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "text-[11px] text-gray-400 font-mono mt-0.5" }, " id: " + toDisplayString(item.id) + " \xB7 provider: " + toDisplayString(item.providerID), 1)
                        ]),
                        createVNode("td", { class: "px-3 py-3 max-w-xs" }, [
                          createVNode("div", { class: "text-gray-700 dark:text-gray-300 line-clamp-2" }, toDisplayString(item.quotaLabel), 1),
                          createVNode("div", { class: "text-[11px] text-gray-400 mt-0.5" }, "\u5171 " + toDisplayString((item.steps || []).length) + " \u6B65\u6559\u7A0B", 1)
                        ]),
                        createVNode("td", { class: "px-3 py-3 font-mono text-[11px]" }, [
                          createVNode("div", null, [
                            createVNode(_component_UBadge, {
                              color: item.customMode ? "info" : "neutral",
                              variant: "subtle",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.customMode ? "\u81EA\u5B9A\u4E49\u7AEF\u70B9 (OpenAI \u517C\u5BB9)" : "\u5185\u7F6E\u4F9B\u5E94\u5546\u76F4\u8FDE"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("div", { class: "text-gray-500 truncate max-w-[200px] mt-1" }, toDisplayString(item.baseUrl), 1)
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "flex flex-wrap gap-1 max-w-xs" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.recommendedModels || [], (m) => {
                              return openBlock(), createBlock("span", {
                                key: m,
                                class: "px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-[11px] text-gray-600 dark:text-gray-300"
                              }, toDisplayString(m), 1);
                            }), 128))
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-center whitespace-nowrap" }, [
                          createVNode(_component_UButton, {
                            color: item.hidden ? "neutral" : "success",
                            variant: "subtle",
                            size: "xs",
                            onClick: ($event) => item.hidden = !item.hidden
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u9690\u85CF" : "\u5C55\u793A\u4E2D"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color", "onClick"])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-right whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1.5" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:pencil-simple",
                              onClick: ($event) => openEditModal(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u7F16\u8F91 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              onClick: ($event) => removeItem(item.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5220\u9664 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isEditModalOpen.value,
        "onUpdate:open": ($event) => isEditModalOpen.value = $event,
        title: isEditingNew.value ? "\u65B0\u589E\u514D\u8D39\u989D\u5EA6\u5E73\u53F0" : `\u7F16\u8F91\u5E73\u53F0: ${(_a = editingItem.value) == null ? void 0 : _a.name}`
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (editingItem.value) {
              _push2(`<div class="space-y-4 py-2"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u552F\u4E00\u6807\u8BC6 ID",
                required: "",
                help: "\u5982 google, groq, openrouter"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.id,
                      "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                      disabled: !isEditingNew.value,
                      placeholder: "\u5982 groq",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        disabled: !isEditingNew.value,
                        placeholder: "\u5982 groq",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5BF9\u5E94 Hoxi Provider ID",
                required: "",
                help: "\u5185\u7F6E\u4F9B\u5E94\u5546 ID \u6216\u81EA\u5B9A\u4E49\u7AEF\u70B9\u6807\u8BC6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.providerID,
                      "onUpdate:modelValue": ($event) => editingItem.value.providerID = $event,
                      placeholder: "\u5982 groq \u6216 google",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.providerID,
                        "onUpdate:modelValue": ($event) => editingItem.value.providerID = $event,
                        placeholder: "\u5982 groq \u6216 google",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5E73\u53F0\u540D\u79F0 (\u4E2D\u6587)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                      placeholder: "\u5982 Google AI Studio (Gemini)",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u5982 Google AI Studio (Gemini)",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5E73\u53F0\u540D\u79F0 (English)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.nameEn,
                      "onUpdate:modelValue": ($event) => editingItem.value.nameEn = $event,
                      placeholder: "Google AI Studio (Gemini)",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.nameEn,
                        "onUpdate:modelValue": ($event) => editingItem.value.nameEn = $event,
                        placeholder: "Google AI Studio (Gemini)",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4EAE\u70B9\u5FBD\u7AE0 (\u4E2D\u6587)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.badge,
                      "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                      placeholder: "\u5982 \u6BCF\u65E5\u9AD8\u9891\u514D\u8D39",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u5982 \u6BCF\u65E5\u9AD8\u9891\u514D\u8D39",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4EAE\u70B9\u5FBD\u7AE0 (English)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.badgeEn,
                      "onUpdate:modelValue": ($event) => editingItem.value.badgeEn = $event,
                      placeholder: "Generous Daily Free",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badgeEn,
                        "onUpdate:modelValue": ($event) => editingItem.value.badgeEn = $event,
                        placeholder: "Generous Daily Free",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u514D\u8D39\u989D\u5EA6\u8BF4\u660E (\u4E2D\u6587)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.quotaLabel,
                      "onUpdate:modelValue": ($event) => editingItem.value.quotaLabel = $event,
                      placeholder: "\u5982 Gemini 2.5 Flash \u6BCF\u65E5 500~1500 \u6B21\u514D\u8D39\u8BF7\u6C42",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.quotaLabel,
                        "onUpdate:modelValue": ($event) => editingItem.value.quotaLabel = $event,
                        placeholder: "\u5982 Gemini 2.5 Flash \u6BCF\u65E5 500~1500 \u6B21\u514D\u8D39\u8BF7\u6C42",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u514D\u8D39\u989D\u5EA6\u8BF4\u660E (English)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.quotaLabelEn,
                      "onUpdate:modelValue": ($event) => editingItem.value.quotaLabelEn = $event,
                      placeholder: "500-1,500 free RPD on Gemini 2.5 Flash",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.quotaLabelEn,
                        "onUpdate:modelValue": ($event) => editingItem.value.quotaLabelEn = $event,
                        placeholder: "500-1,500 free RPD on Gemini 2.5 Flash",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9886 Key \u6CE8\u518C\u5730\u5740 (Signup URL)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.signupUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.signupUrl = $event,
                      placeholder: "https://...",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.signupUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.signupUrl = $event,
                        placeholder: "https://...",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "API Base URL",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.baseUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.baseUrl = $event,
                      placeholder: "https://.../v1",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.baseUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.baseUrl = $event,
                        placeholder: "https://.../v1",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u63A8\u8350\u514D\u8D39\u6A21\u578B\u5217\u8868 (\u9017\u53F7\u5206\u9694)",
                help: "\u5982 gemini-2.5-flash, gemini-2.0-flash"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingModelsText.value,
                      "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                      placeholder: "gemini-2.5-flash, gemini-2.0-flash",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingModelsText.value,
                        "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                        placeholder: "gemini-2.5-flash, gemini-2.0-flash",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u767D\u5AD6\u63A5\u5165\u6B65\u9AA4 (\u4E2D\u6587\uFF0C\u6BCF\u884C\u4E00\u6B65)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingStepsText.value,
                      "onUpdate:modelValue": ($event) => editingStepsText.value = $event,
                      rows: 3,
                      class: "w-full text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingStepsText.value,
                        "onUpdate:modelValue": ($event) => editingStepsText.value = $event,
                        rows: 3,
                        class: "w-full text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u767D\u5AD6\u63A5\u5165\u6B65\u9AA4 (English\uFF0C\u6BCF\u884C\u4E00\u6B65)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingStepsEnText.value,
                      "onUpdate:modelValue": ($event) => editingStepsEnText.value = $event,
                      rows: 3,
                      class: "w-full text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingStepsEnText.value,
                        "onUpdate:modelValue": ($event) => editingStepsEnText.value = $event,
                        rows: 3,
                        class: "w-full text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.customMode,
                "onUpdate:modelValue": ($event) => editingItem.value.customMode = $event
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u901A\u8FC7\u300C\u81EA\u5B9A\u4E49\u7AEF\u70B9 (OpenAI \u517C\u5BB9)\u300D\u6A21\u5F0F\u63A5\u5165</span></label><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.hidden,
                "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u9690\u85CF\u8BE5\u5E73\u53F0</span></label></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              editingItem.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4 py-2"
              }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u552F\u4E00\u6807\u8BC6 ID",
                    required: "",
                    help: "\u5982 google, groq, openrouter"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        disabled: !isEditingNew.value,
                        placeholder: "\u5982 groq",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u5BF9\u5E94 Hoxi Provider ID",
                    required: "",
                    help: "\u5185\u7F6E\u4F9B\u5E94\u5546 ID \u6216\u81EA\u5B9A\u4E49\u7AEF\u70B9\u6807\u8BC6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.providerID,
                        "onUpdate:modelValue": ($event) => editingItem.value.providerID = $event,
                        placeholder: "\u5982 groq \u6216 google",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u5E73\u53F0\u540D\u79F0 (\u4E2D\u6587)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u5982 Google AI Studio (Gemini)",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5E73\u53F0\u540D\u79F0 (English)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.nameEn,
                        "onUpdate:modelValue": ($event) => editingItem.value.nameEn = $event,
                        placeholder: "Google AI Studio (Gemini)",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, { label: "\u4EAE\u70B9\u5FBD\u7AE0 (\u4E2D\u6587)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u5982 \u6BCF\u65E5\u9AD8\u9891\u514D\u8D39",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u4EAE\u70B9\u5FBD\u7AE0 (English)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badgeEn,
                        "onUpdate:modelValue": ($event) => editingItem.value.badgeEn = $event,
                        placeholder: "Generous Daily Free",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u514D\u8D39\u989D\u5EA6\u8BF4\u660E (\u4E2D\u6587)",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.quotaLabel,
                      "onUpdate:modelValue": ($event) => editingItem.value.quotaLabel = $event,
                      placeholder: "\u5982 Gemini 2.5 Flash \u6BCF\u65E5 500~1500 \u6B21\u514D\u8D39\u8BF7\u6C42",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u514D\u8D39\u989D\u5EA6\u8BF4\u660E (English)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.quotaLabelEn,
                      "onUpdate:modelValue": ($event) => editingItem.value.quotaLabelEn = $event,
                      placeholder: "500-1,500 free RPD on Gemini 2.5 Flash",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u9886 Key \u6CE8\u518C\u5730\u5740 (Signup URL)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.signupUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.signupUrl = $event,
                        placeholder: "https://...",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "API Base URL",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.baseUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.baseUrl = $event,
                        placeholder: "https://.../v1",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u63A8\u8350\u514D\u8D39\u6A21\u578B\u5217\u8868 (\u9017\u53F7\u5206\u9694)",
                  help: "\u5982 gemini-2.5-flash, gemini-2.0-flash"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingModelsText.value,
                      "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                      placeholder: "gemini-2.5-flash, gemini-2.0-flash",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u767D\u5AD6\u63A5\u5165\u6B65\u9AA4 (\u4E2D\u6587\uFF0C\u6BCF\u884C\u4E00\u6B65)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: editingStepsText.value,
                      "onUpdate:modelValue": ($event) => editingStepsText.value = $event,
                      rows: 3,
                      class: "w-full text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u767D\u5AD6\u63A5\u5165\u6B65\u9AA4 (English\uFF0C\u6BCF\u884C\u4E00\u6B65)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: editingStepsEnText.value,
                      "onUpdate:modelValue": ($event) => editingStepsEnText.value = $event,
                      rows: 3,
                      class: "w-full text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: editingItem.value.customMode,
                      "onUpdate:modelValue": ($event) => editingItem.value.customMode = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", null, "\u901A\u8FC7\u300C\u81EA\u5B9A\u4E49\u7AEF\u70B9 (OpenAI \u517C\u5BB9)\u300D\u6A21\u5F0F\u63A5\u5165")
                  ]),
                  createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: editingItem.value.hidden,
                      "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", null, "\u9690\u85CF\u8BE5\u5E73\u53F0")
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => isEditModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              onClick: saveEditModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u8BA4\u5E94\u7528`);
                } else {
                  return [
                    createTextVNode("\u786E\u8BA4\u5E94\u7528")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-2 w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  onClick: ($event) => isEditModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  onClick: saveEditModal
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u786E\u8BA4\u5E94\u7528")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/free-tiers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=free-tiers-DKI6DrXT.mjs.map
