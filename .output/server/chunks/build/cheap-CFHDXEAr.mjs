import { _ as _sfc_main$1 } from './Alert-IcedS2f6.mjs';
import { _ as _sfc_main$2 } from './Card-jMFP8cqX.mjs';
import { g as useToast, d as _sfc_main$k, o as _sfc_main$j, k as _sfc_main$B, b as _sfc_main$G, c as _sfc_main$l, O as _sfc_main$g } from './server.mjs';
import { _ as _sfc_main$3 } from './Checkbox-BmTSvkxP.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-C_oQJW_c.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { h as hoxiGateways } from './gateways-tgDca7H5.mjs';
import { h as hoxiModels } from './models-VgTGFaGO.mjs';
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
import './isValueEqualOrExist-BVczPdKj.mjs';
import './VisuallyHiddenInput-32bCuzTQ.mjs';
import './RovingFocusItem-DyHBwisL.mjs';
import './utils-DD3u_B8M.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cheap",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const saving = ref(false);
    const errorMsg = ref("");
    const searchQuery = ref("");
    const selectedModelFilter = ref("all");
    const activeModalTab = ref("basic");
    const modalTabs = [
      { key: "basic", label: "1. \u57FA\u7840\u4E0E\u63A5\u5165", icon: "ph:identification-card" },
      { key: "speed", label: "2. \u4EF7\u683C\u4E0E\u6D4B\u901F", icon: "ph:gauge" },
      { key: "models", label: "3. \u652F\u6301\u6A21\u578B\u4E0E\u7279\u6027", icon: "ph:cpu" },
      { key: "caveats", label: "4. \u907F\u5751\u4E0E\u6CE8\u610F\u4E8B\u9879", icon: "ph:warning-circle" }
    ];
    const availableModelNames = computed(() => hoxiModels.map((m) => m.name));
    const selectedModelsList = computed(() => {
      return (editingModelsText.value || "").split(",").map((s) => s.trim()).filter(Boolean);
    });
    const isModelSelected = (modelName) => {
      return selectedModelsList.value.some((m) => m.toLowerCase() === modelName.toLowerCase());
    };
    const toggleModel = (modelName) => {
      const current = [...selectedModelsList.value];
      const idx = current.findIndex((m) => m.toLowerCase() === modelName.toLowerCase());
      if (idx !== -1) {
        current.splice(idx, 1);
      } else {
        current.push(modelName);
      }
      editingModelsText.value = current.join(", ");
    };
    const selectedRecommendedModelsList = computed(() => {
      return (editingRecommendedModelsText.value || "").split(",").map((s) => s.trim()).filter(Boolean);
    });
    const isRecommendedModelSelected = (modelName) => {
      return selectedRecommendedModelsList.value.some((m) => m.toLowerCase() === modelName.toLowerCase());
    };
    const toggleRecommendedModel = (modelName) => {
      const current = [...selectedRecommendedModelsList.value];
      const idx = current.findIndex((m) => m.toLowerCase() === modelName.toLowerCase());
      if (idx !== -1) {
        current.splice(idx, 1);
      } else {
        current.push(modelName);
      }
      editingRecommendedModelsText.value = current.join(", ");
    };
    const list = ref([]);
    const modelFilterOptions = [
      { label: "\u5168\u90E8\u4E3B\u63A8\u6A21\u578B", value: "all" },
      { label: "Claude 3.7 Sonnet", value: "claude-3-7" },
      { label: "DeepSeek R1", value: "deepseek-r1" },
      { label: "Qwen 2.5 Coder", value: "qwen-coder" },
      { label: "GPT-4o", value: "gpt-4o" },
      { label: "Claude 3.5 Sonnet", value: "claude-3-5" }
    ];
    const primaryModelKeyOptions = [
      { label: "claude-3-7 (Claude 3.7 Sonnet)", value: "claude-3-7" },
      { label: "deepseek-r1 (DeepSeek R1 / V3)", value: "deepseek-r1" },
      { label: "qwen-coder (Qwen 2.5 Coder)", value: "qwen-coder" },
      { label: "gpt-4o (GPT-4o / o3-mini)", value: "gpt-4o" },
      { label: "claude-3-5 (Claude 3.5 Sonnet)", value: "claude-3-5" },
      { label: "all (\u901A\u7528\u805A\u5408)", value: "all" }
    ];
    const badgeToneOptions = [
      { label: "\u7FE1\u7FE0\u7EFF (positive / \u63A8\u8350)", value: "positive" },
      { label: "\u4FE1\u606F\u84DD (info / \u5E38\u89C4)", value: "info" },
      { label: "\u8B66\u544A\u6A59 (warning / \u63D0\u793A)", value: "warning" }
    ];
    const computeSavings = (gw) => {
      const official = Number(gw.officialPriceCNY) || 0;
      const price = Number(gw.pricePerM) || 0;
      if (official <= 0) return 0;
      return Math.max(0, Math.round((official - price) / official * 100));
    };
    const filteredList = computed(() => {
      let result = list.value;
      if (selectedModelFilter.value !== "all") {
        result = result.filter((item) => item.primaryModelKey === selectedModelFilter.value);
      }
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.trim().toLowerCase();
        result = result.filter(
          (item) => item.name && item.name.toLowerCase().includes(q) || item.domain && item.domain.toLowerCase().includes(q) || item.baseUrl && item.baseUrl.toLowerCase().includes(q) || item.models && item.models.some((m) => m.toLowerCase().includes(q)) || item.badge && item.badge.toLowerCase().includes(q)
        );
      }
      return result;
    });
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const editingModelsText = ref("");
    const editingRecommendedModelsText = ref("");
    const editingFeaturesText = ref("");
    const openAddModal = () => {
      isEditingNew.value = true;
      editingItem.value = {
        id: `node-${Date.now()}`,
        name: "\u65B0\u5EFA AI \u4E2D\u8F6C\u4E13\u7EBF",
        domain: "api.example.com",
        url: "https://example.com",
        models: ["Claude 3.7 Sonnet", "DeepSeek R1"],
        recommendedModels: ["Claude 3.7 Sonnet"],
        primaryModelKey: "claude-3-7",
        latencyMs: 280,
        uptime: "99.99%",
        pricePerM: 2.5,
        priceLabel: "\xA52.50 / M",
        officialPriceCNY: 21.8,
        savingsPercent: 88,
        isSelfOperated: false,
        badge: "\u65B0\u589E\u7EBF\u8DEF",
        badgeTone: "info",
        baseUrl: "https://api.example.com/v1",
        features: ["\u56FD\u5185\u53CC\u7EBF\u76F4\u8FDE", "\u652F\u6301\u601D\u8003\u6A21\u5F0F"],
        caveat: "\u65B0\u8282\u70B9\u5EFA\u8BAE\u5C0F\u989D\u6D4B\u8BD5\u5145\u503C",
        hidden: false
      };
      editingModelsText.value = editingItem.value.models.join(", ");
      editingRecommendedModelsText.value = (editingItem.value.recommendedModels || []).join(", ");
      editingFeaturesText.value = editingItem.value.features.join("\n");
      isEditModalOpen.value = true;
    };
    const openEditModal = (gw) => {
      isEditingNew.value = false;
      editingItem.value = JSON.parse(JSON.stringify(gw));
      editingModelsText.value = (gw.models || []).join(", ");
      editingRecommendedModelsText.value = (gw.recommendedModels || []).join(", ");
      editingFeaturesText.value = (gw.features || []).join("\n");
      isEditModalOpen.value = true;
    };
    const duplicateGateway = (gw) => {
      const copy = {
        ...JSON.parse(JSON.stringify(gw)),
        id: `${gw.id}-copy-${Date.now()}`,
        name: `${gw.name} (\u526F\u672C)`
      };
      list.value.unshift(copy);
      toast.add({ title: "\u5DF2\u521B\u5EFA\u526F\u672C", color: "info" });
    };
    const removeGateway = (index) => {
      list.value.splice(index, 1);
    };
    const saveEditModal = () => {
      if (!editingItem.value) return;
      editingItem.value.models = editingModelsText.value.split(",").map((s) => s.trim()).filter(Boolean);
      editingItem.value.recommendedModels = editingRecommendedModelsText.value.split(",").map((s) => s.trim()).filter(Boolean);
      editingItem.value.features = editingFeaturesText.value.split("\n").map((s) => s.trim()).filter(Boolean);
      editingItem.value.priceLabel = `\xA5${Number(editingItem.value.pricePerM || 0).toFixed(2)} / M`;
      editingItem.value.savingsPercent = computeSavings(editingItem.value);
      if (isEditingNew.value) {
        list.value.unshift(editingItem.value);
      } else {
        const idx = list.value.findIndex((item) => {
          var _a;
          return item.id === ((_a = editingItem.value) == null ? void 0 : _a.id);
        });
        if (idx !== -1) {
          list.value[idx] = editingItem.value;
        }
      }
      isEditModalOpen.value = false;
    };
    const resetToBaseline = () => {
      list.value = hoxiGateways.map((gw) => ({ ...gw, hidden: false }));
      toast.add({ title: "\u5DF2\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u57FA\u7EBF\u6570\u636E\uFF0C\u70B9\u51FB\u4FDD\u5B58\u540E\u5199\u5165\u6570\u636E\u5E93", color: "info" });
    };
    const save = async () => {
      saving.value = true;
      try {
        const sanitized = list.value.map((item) => ({
          ...item,
          pricePerM: Number(item.pricePerM) || 0,
          officialPriceCNY: Number(item.officialPriceCNY) || 0,
          latencyMs: Number(item.latencyMs) || 0,
          priceLabel: item.priceLabel || `\xA5${Number(item.pricePerM || 0).toFixed(2)} / M`,
          savingsPercent: computeSavings(item),
          models: Array.isArray(item.models) ? item.models : [],
          recommendedModels: Array.isArray(item.recommendedModels) ? item.recommendedModels : [],
          features: Array.isArray(item.features) ? item.features : [],
          hidden: Boolean(item.hidden),
          isSelfOperated: Boolean(item.isSelfOperated)
        }));
        await $fetch("/api/admin/hoxi/gateways", {
          method: "POST",
          body: {
            gateways: sanitized
          }
        });
        toast.add({ title: "\u4E2D\u8F6C\u7AD9\u6570\u636E\u8868\u5DF2\u66F4\u65B0\uFF0C\u524D\u53F0\u7ACB\u5373\u751F\u6548", color: "success" });
      } catch (error) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: error instanceof Error ? error.message : String(error),
          color: "error"
        });
      } finally {
        saving.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UAlert = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UCheckbox = _sfc_main$3;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$l;
      const _component_UTextarea = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (errorMsg.value) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: "\u63A5\u53E3\u8BF7\u6C42\u5F02\u5E38",
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
              name: "ph:broadcast",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>AI \u4E2D\u8F6C\u7AD9\u4E0E\u4E13\u7EBF\u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u6570\u636E\u5DF2\u6301\u4E45\u5316\u5B58\u50A8\u81F3 \`hoxi_gateways\` \u6570\u636E\u8868\u3002\u652F\u6301\u7BA1\u7406\u4E2D\u8F6C\u4E13\u7EBF\u8282\u70B9\u3001\u8F93\u5165\u5355\u4EF7 (\xA5/M)\u3001\u5B9E\u6D4B\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E Base URL\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
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
                  _push3(` \u65B0\u589E\u4E2D\u8F6C\u4E13\u7EBF `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u4E2D\u8F6C\u4E13\u7EBF ")
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
                      name: "ph:broadcast",
                      class: "w-5 h-5 text-blue-500"
                    }),
                    createVNode("span", null, "AI \u4E2D\u8F6C\u7AD9\u4E0E\u4E13\u7EBF\u7BA1\u7406")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " \u6570\u636E\u5DF2\u6301\u4E45\u5316\u5B58\u50A8\u81F3 `hoxi_gateways` \u6570\u636E\u8868\u3002\u652F\u6301\u7BA1\u7406\u4E2D\u8F6C\u4E13\u7EBF\u8282\u70B9\u3001\u8F93\u5165\u5355\u4EF7 (\xA5/M)\u3001\u5B9E\u6D4B\u5EF6\u8FDF\u3001\u5728\u7EBF\u7387\u4E0E Base URL\u3002 ")
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
                      createTextVNode(" \u65B0\u589E\u4E2D\u8F6C\u4E13\u7EBF ")
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
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              icon: "ph:magnifying-glass",
              placeholder: "\u641C\u7D22\u7AD9\u70B9\u540D\u79F0\u3001\u57DF\u540D\u3001Base URL \u6216\u652F\u6301\u6A21\u578B...",
              class: "w-72",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedModelFilter.value,
              "onUpdate:modelValue": ($event) => selectedModelFilter.value = $event,
              items: modelFilterOptions,
              class: "w-44",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u5171\u6536\u5F55 ${ssrInterpolate(list.value.length)} \u4E2A\u8282\u70B9 (\u5F53\u524D\u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u4E2A) </div></div><div class="overflow-x-auto mt-4"${_scopeId}><table class="w-full min-w-[1000px] text-sm"${_scopeId}><thead${_scopeId}><tr class="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700"${_scopeId}><th class="py-2.5 pr-3 w-10 text-center"${_scopeId}>#</th><th class="py-2.5 pr-4 w-44"${_scopeId}>\u7AD9\u70B9 / \u4E13\u7EBF\u540D\u79F0</th><th class="py-2.5 pr-4 w-36"${_scopeId}>\u57DF\u540D / \u5B98\u7F51</th><th class="py-2.5 pr-4 w-28"${_scopeId}>\u5355\u4EF7 (\xA5/M)</th><th class="py-2.5 pr-4 w-24"${_scopeId}>\u5B9E\u6D4B\u5EF6\u8FDF</th><th class="py-2.5 pr-4 w-24"${_scopeId}>\u5728\u7EBF\u7387</th><th class="py-2.5 pr-4 w-48"${_scopeId}>Base URL</th><th class="py-2.5 pr-4 w-32"${_scopeId}>\u63A8\u8350\u6807\u7B7E</th><th class="py-2.5 pr-4 w-16 text-center"${_scopeId}>\u9690\u85CF</th><th class="py-2.5 text-right w-28"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (gw, index) => {
              _push2(`<tr class="${ssrRenderClass([gw.hidden ? "opacity-50" : "", "border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="py-2.5 pr-3 text-center text-xs font-mono text-gray-400"${_scopeId}>${ssrInterpolate(index + 1)}</td><td class="py-2.5 pr-4"${_scopeId}><div class="space-y-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: gw.name,
                "onUpdate:modelValue": ($event) => gw.name = $event,
                placeholder: "\u5982\uFF1AAINode \u6781\u901F\u4E13\u7EBF",
                class: "w-full",
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-1.5 text-[11px] text-gray-400"${_scopeId}>`);
              if (gw.isSelfOperated) {
                _push2(`<span class="inline-block px-1.5 py-0.2 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-medium"${_scopeId}>\u81EA\u8425</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>\u4E3B\u63A8: ${ssrInterpolate(gw.primaryModelKey || "\u901A\u7528")}</span></div></div></td><td class="py-2.5 pr-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: gw.domain,
                "onUpdate:modelValue": ($event) => gw.domain = $event,
                placeholder: "ainode.run",
                class: "w-full",
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 pr-4"${_scopeId}><div class="space-y-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: gw.pricePerM,
                "onUpdate:modelValue": ($event) => gw.pricePerM = $event,
                modelModifiers: { number: true },
                type: "number",
                step: "0.01",
                min: "0",
                placeholder: "2.8",
                class: "w-full",
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono"${_scopeId}> \u964D ${ssrInterpolate(computeSavings(gw))}% </div></div></td><td class="py-2.5 pr-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: gw.latencyMs,
                "onUpdate:modelValue": ($event) => gw.latencyMs = $event,
                modelModifiers: { number: true },
                type: "number",
                step: "10",
                min: "0",
                placeholder: "280",
                class: "w-full",
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 pr-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: gw.uptime,
                "onUpdate:modelValue": ($event) => gw.uptime = $event,
                placeholder: "99.99%",
                class: "w-full",
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 pr-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: gw.baseUrl,
                "onUpdate:modelValue": ($event) => gw.baseUrl = $event,
                placeholder: "https://api.ainode.run/v1",
                class: "w-full",
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 pr-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: gw.badge,
                "onUpdate:modelValue": ($event) => gw.badge = $event,
                placeholder: "\u81EA\u8425\u63A8\u8350",
                class: "w-full",
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 pr-4 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: gw.hidden,
                "onUpdate:modelValue": ($event) => gw.hidden = $event
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-2.5 text-right"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:sliders",
                title: "\u7F16\u8F91\u5B8C\u6574\u8BE6\u60C5",
                onClick: ($event) => openEditModal(gw)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:copy",
                title: "\u590D\u5236\u6B64\u8282\u70B9",
                onClick: ($event) => duplicateGateway(gw)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                title: "\u5220\u9664\u8282\u70B9",
                onClick: ($event) => removeGateway(index)
              }, null, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
            if (!filteredList.value.length) {
              _push2(`<div class="py-12 text-center text-sm text-gray-400"${_scopeId}>${ssrInterpolate(list.value.length ? "\u672A\u627E\u5230\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u4E2D\u8F6C\u4E13\u7EBF" : "\u6682\u65E0\u4E2D\u8F6C\u4E13\u7EBF\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u65B0\u589E\u4E2D\u8F6C\u4E13\u7EBF\u300D\u5F00\u59CB\u521B\u5EFA")}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                  createVNode(_component_UInput, {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    icon: "ph:magnifying-glass",
                    placeholder: "\u641C\u7D22\u7AD9\u70B9\u540D\u79F0\u3001\u57DF\u540D\u3001Base URL \u6216\u652F\u6301\u6A21\u578B...",
                    class: "w-72",
                    size: "sm"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelect, {
                    modelValue: selectedModelFilter.value,
                    "onUpdate:modelValue": ($event) => selectedModelFilter.value = $event,
                    items: modelFilterOptions,
                    class: "w-44",
                    size: "sm"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, " \u5171\u6536\u5F55 " + toDisplayString(list.value.length) + " \u4E2A\u8282\u70B9 (\u5F53\u524D\u663E\u793A " + toDisplayString(filteredList.value.length) + " \u4E2A) ", 1)
              ]),
              createVNode("div", { class: "overflow-x-auto mt-4" }, [
                createVNode("table", { class: "w-full min-w-[1000px] text-sm" }, [
                  createVNode("thead", null, [
                    createVNode("tr", { class: "border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700" }, [
                      createVNode("th", { class: "py-2.5 pr-3 w-10 text-center" }, "#"),
                      createVNode("th", { class: "py-2.5 pr-4 w-44" }, "\u7AD9\u70B9 / \u4E13\u7EBF\u540D\u79F0"),
                      createVNode("th", { class: "py-2.5 pr-4 w-36" }, "\u57DF\u540D / \u5B98\u7F51"),
                      createVNode("th", { class: "py-2.5 pr-4 w-28" }, "\u5355\u4EF7 (\xA5/M)"),
                      createVNode("th", { class: "py-2.5 pr-4 w-24" }, "\u5B9E\u6D4B\u5EF6\u8FDF"),
                      createVNode("th", { class: "py-2.5 pr-4 w-24" }, "\u5728\u7EBF\u7387"),
                      createVNode("th", { class: "py-2.5 pr-4 w-48" }, "Base URL"),
                      createVNode("th", { class: "py-2.5 pr-4 w-32" }, "\u63A8\u8350\u6807\u7B7E"),
                      createVNode("th", { class: "py-2.5 pr-4 w-16 text-center" }, "\u9690\u85CF"),
                      createVNode("th", { class: "py-2.5 text-right w-28" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (gw, index) => {
                      return openBlock(), createBlock("tr", {
                        key: gw.id || index,
                        class: ["border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/40 transition-colors", gw.hidden ? "opacity-50" : ""]
                      }, [
                        createVNode("td", { class: "py-2.5 pr-3 text-center text-xs font-mono text-gray-400" }, toDisplayString(index + 1), 1),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(_component_UInput, {
                              modelValue: gw.name,
                              "onUpdate:modelValue": ($event) => gw.name = $event,
                              placeholder: "\u5982\uFF1AAINode \u6781\u901F\u4E13\u7EBF",
                              class: "w-full",
                              size: "sm"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "flex items-center gap-1.5 text-[11px] text-gray-400" }, [
                              gw.isSelfOperated ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "inline-block px-1.5 py-0.2 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-medium"
                              }, "\u81EA\u8425")) : createCommentVNode("", true),
                              createVNode("span", null, "\u4E3B\u63A8: " + toDisplayString(gw.primaryModelKey || "\u901A\u7528"), 1)
                            ])
                          ])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode(_component_UInput, {
                            modelValue: gw.domain,
                            "onUpdate:modelValue": ($event) => gw.domain = $event,
                            placeholder: "ainode.run",
                            class: "w-full",
                            size: "sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode(_component_UInput, {
                              modelValue: gw.pricePerM,
                              "onUpdate:modelValue": ($event) => gw.pricePerM = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              step: "0.01",
                              min: "0",
                              placeholder: "2.8",
                              class: "w-full",
                              size: "sm"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "text-[11px] text-emerald-600 dark:text-emerald-400 font-mono" }, " \u964D " + toDisplayString(computeSavings(gw)) + "% ", 1)
                          ])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode(_component_UInput, {
                            modelValue: gw.latencyMs,
                            "onUpdate:modelValue": ($event) => gw.latencyMs = $event,
                            modelModifiers: { number: true },
                            type: "number",
                            step: "10",
                            min: "0",
                            placeholder: "280",
                            class: "w-full",
                            size: "sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode(_component_UInput, {
                            modelValue: gw.uptime,
                            "onUpdate:modelValue": ($event) => gw.uptime = $event,
                            placeholder: "99.99%",
                            class: "w-full",
                            size: "sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode(_component_UInput, {
                            modelValue: gw.baseUrl,
                            "onUpdate:modelValue": ($event) => gw.baseUrl = $event,
                            placeholder: "https://api.ainode.run/v1",
                            class: "w-full",
                            size: "sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4" }, [
                          createVNode(_component_UInput, {
                            modelValue: gw.badge,
                            "onUpdate:modelValue": ($event) => gw.badge = $event,
                            placeholder: "\u81EA\u8425\u63A8\u8350",
                            class: "w-full",
                            size: "sm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 pr-4 text-center" }, [
                          createVNode(_component_UCheckbox, {
                            modelValue: gw.hidden,
                            "onUpdate:modelValue": ($event) => gw.hidden = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-2.5 text-right" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:sliders",
                              title: "\u7F16\u8F91\u5B8C\u6574\u8BE6\u60C5",
                              onClick: ($event) => openEditModal(gw)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:copy",
                              title: "\u590D\u5236\u6B64\u8282\u70B9",
                              onClick: ($event) => duplicateGateway(gw)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              title: "\u5220\u9664\u8282\u70B9",
                              onClick: ($event) => removeGateway(index)
                            }, null, 8, ["onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])
                ])
              ]),
              !filteredList.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "py-12 text-center text-sm text-gray-400"
              }, toDisplayString(list.value.length ? "\u672A\u627E\u5230\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u4E2D\u8F6C\u4E13\u7EBF" : "\u6682\u65E0\u4E2D\u8F6C\u4E13\u7EBF\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u65B0\u589E\u4E2D\u8F6C\u4E13\u7EBF\u300D\u5F00\u59CB\u521B\u5EFA"), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: isEditModalOpen.value,
        "onUpdate:modelValue": ($event) => isEditModalOpen.value = $event,
        maxWidth: "sm:max-w-5xl",
        title: isEditingNew.value ? "\u65B0\u589E\u4E2D\u8F6C\u4E13\u7EBF" : `\u7F16\u8F91\u4E2D\u8F6C\u4E13\u7EBF \xB7 ${((_a = editingItem.value) == null ? void 0 : _a.name) || ((_b = editingItem.value) == null ? void 0 : _b.id)}`
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              onClick: ($event) => isEditModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              icon: "ph:check",
              onClick: saveEditModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u4E13\u7EBF\u914D\u7F6E `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u4E13\u7EBF\u914D\u7F6E ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  onClick: ($event) => isEditModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  icon: "ph:check",
                  onClick: saveEditModal
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4FDD\u5B58\u4E13\u7EBF\u914D\u7F6E ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (editingItem.value) {
              _push2(`<div class="space-y-6"${_scopeId}><div class="flex flex-wrap items-center border-b border-gray-200 dark:border-gray-800 gap-2 sm:gap-6 pb-1"${_scopeId}><!--[-->`);
              ssrRenderList(modalTabs, (tab) => {
                _push2(`<button type="button" class="${ssrRenderClass([activeModalTab.value === tab.key ? "border-blue-500 text-blue-600 dark:text-blue-400 font-semibold" : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white", "pb-2.5 px-1 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: tab.icon,
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(tab.label)}</span></button>`);
              });
              _push2(`<!--]--></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "basic" ? null : { display: "none" })}"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u7AD9\u70B9 / \u4E13\u7EBF\u540D\u79F0",
                required: "",
                help: "\u524D\u53F0\u5929\u68AF\u699C\u4E0E\u5361\u7247\u663E\u793A\u7684\u540D\u79F0\uFF0C\u5982\uFF1AAINode \u6781\u901F\u4E13\u7EBF"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                      placeholder: "\u5982\uFF1AAINode \u6781\u901F\u4E13\u7EBF",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u5982\uFF1AAINode \u6781\u901F\u4E13\u7EBF",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u8282\u70B9\u552F\u4E00 ID",
                required: "",
                help: "\u5168\u82F1\u6587\u4E0E\u77ED\u6A2A\u7EBF\uFF0C\u552F\u4E00\u6807\u8BC6\uFF0C\u4E0D\u53EF\u91CD\u590D"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.id,
                      "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                      placeholder: "\u5982\uFF1Aainode-pro",
                      disabled: !isEditingNew.value,
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u5982\uFF1Aainode-pro",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u7AD9\u70B9\u57DF\u540D",
                help: "\u5982\uFF1Aainode.run"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.domain,
                      "onUpdate:modelValue": ($event) => editingItem.value.domain = $event,
                      placeholder: "\u5982\uFF1Aainode.run",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.domain,
                        "onUpdate:modelValue": ($event) => editingItem.value.domain = $event,
                        placeholder: "\u5982\uFF1Aainode.run",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5B98\u7F51\u94FE\u63A5",
                help: "\u4F9B\u7528\u6237\u8DF3\u8F6C\u8BBF\u95EE\u7AD9\u70B9"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.url,
                      "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                      placeholder: "\u5982\uFF1Ahttps://ainode.run",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.url,
                        "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                        placeholder: "\u5982\uFF1Ahttps://ainode.run",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "API Base URL",
                required: "",
                help: "\u7528\u6237\u5728 Cursor / Cline / Roo Code / Cherry Studio \u4E2D\u914D\u7F6E\u7684 OpenAI \u517C\u5BB9\u7AEF\u70B9"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.baseUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.baseUrl = $event,
                      placeholder: "https://api.ainode.run/v1",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.baseUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.baseUrl = $event,
                        placeholder: "https://api.ainode.run/v1",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}><div class="rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 p-4"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.isSelfOperated,
                "onUpdate:modelValue": ($event) => editingItem.value.isSelfOperated = $event
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u2B50 \u6807\u8BB0\u4E3A\u5B98\u65B9\u81EA\u8425\u4E13\u7EBF\uFF08\u63A8\u8350\u9AD8\u4EAE\u5C55\u793A\uFF09</span></label></div><div class="rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 p-4"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.hidden,
                "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u{1F6AB} \u9690\u85CF\u6B64\u4E13\u7EBF\uFF08\u4E0D\u5728\u524D\u53F0\u5929\u68AF\u699C\u5C55\u793A\uFF09</span></label></div></div></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "speed" ? null : { display: "none" })}"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-3 gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u8F93\u5165\u5355\u4EF7 (\xA5/M)",
                required: "",
                help: "\u6298\u540E\u5B9E\u9645\u5355\u4EF7\uFF0C\u5982\uFF1A2.8"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.pricePerM,
                      "onUpdate:modelValue": ($event) => editingItem.value.pricePerM = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      step: "0.01",
                      min: "0",
                      placeholder: "2.8",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.pricePerM,
                        "onUpdate:modelValue": ($event) => editingItem.value.pricePerM = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "0.01",
                        min: "0",
                        placeholder: "2.8",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5B98\u65B9\u53C2\u8003\u5355\u4EF7 (\xA5/M)",
                required: "",
                help: "\u539F\u5382\u5B98\u65B9\u53C2\u8003\u4EF7\uFF0C\u7528\u4E8E\u81EA\u52A8\u8BA1\u7B97\u964D\u8D39\u6BD4\u4F8B"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.officialPriceCNY,
                      "onUpdate:modelValue": ($event) => editingItem.value.officialPriceCNY = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      step: "0.1",
                      min: "0",
                      placeholder: "21.8",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.officialPriceCNY,
                        "onUpdate:modelValue": ($event) => editingItem.value.officialPriceCNY = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "0.1",
                        min: "0",
                        placeholder: "21.8",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5B9E\u6D4B\u9996\u5B57\u5EF6\u8FDF (ms)",
                help: "\u56FD\u5185\u8282\u70B9\u5B9E\u6D4B TTFT\uFF0C\u5982\uFF1A280"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.latencyMs,
                      "onUpdate:modelValue": ($event) => editingItem.value.latencyMs = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      step: "10",
                      min: "0",
                      placeholder: "280",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.latencyMs,
                        "onUpdate:modelValue": ($event) => editingItem.value.latencyMs = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "10",
                        min: "0",
                        placeholder: "280",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5728\u7EBF\u7387 (Uptime)",
                help: "\u5982\uFF1A99.99%"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.uptime,
                      "onUpdate:modelValue": ($event) => editingItem.value.uptime = $event,
                      placeholder: "99.99%",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.uptime,
                        "onUpdate:modelValue": ($event) => editingItem.value.uptime = $event,
                        placeholder: "99.99%",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u4E3B\u63A8\u6A21\u578B\u5206\u7C7B",
                help: "\u7528\u4E8E\u524D\u53F0\u5FEB\u6377 Tab \u7B5B\u9009\u4E0E\u5206\u7C7B"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.primaryModelKey,
                      "onUpdate:modelValue": ($event) => editingItem.value.primaryModelKey = $event,
                      items: primaryModelKeyOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.primaryModelKey,
                        "onUpdate:modelValue": ($event) => editingItem.value.primaryModelKey = $event,
                        items: primaryModelKeyOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u6807\u7B7E\u8272\u5F69\u98CE\u683C" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.badgeTone,
                      "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                      items: badgeToneOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.badgeTone,
                        "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                        items: badgeToneOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9AD8\u4EAE\u5FBD\u6807\u6587\u6848",
                help: "\u5C55\u793A\u5728\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u4EAE\u70B9\u5FBD\u6807\uFF0C\u5982\uFF1A\u81EA\u8425\u63A8\u8350 / \u4EE3\u7801\u5E73\u66FF\u738B / \u8001\u724C\u4E2D\u8F6C"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.badge,
                      "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                      placeholder: "\u5982\uFF1A\u81EA\u8425\u63A8\u8350 / \u4EE3\u7801\u5E73\u66FF\u738B",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u5982\uFF1A\u81EA\u8425\u63A8\u8350 / \u4EE3\u7801\u5E73\u66FF\u738B",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "models" ? null : { display: "none" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u652F\u6301\u7684\u6838\u5FC3\u6A21\u578B",
                help: "\u82F1\u6587\u9017\u53F7\u5206\u9694\uFF0C\u4E5F\u53EF\u76F4\u63A5\u4ECE\u4E0B\u65B9\u5DF2\u6536\u5F55\u6A21\u578B\u4E2D\u70B9\u51FB\u6DFB\u52A0"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingModelsText.value,
                      "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                      placeholder: "Claude 3.7 Sonnet, DeepSeek R1, GPT-4o, Claude 3.5 Sonnet",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-3"${_scopeId2}><div class="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center justify-between"${_scopeId2}><span${_scopeId2}>\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\uFF1A</span><span class="text-xs text-blue-600 dark:text-blue-400 font-semibold"${_scopeId2}>\u5DF2\u5173\u8054 ${ssrInterpolate(selectedModelsList.value.length)} \u4E2A\u6A21\u578B</span></div><div class="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2.5 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60"${_scopeId2}><!--[-->`);
                    ssrRenderList(availableModelNames.value, (modelName) => {
                      _push3(`<button type="button" class="${ssrRenderClass([isModelSelected(modelName) ? "bg-blue-600 border-blue-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500", "rounded-lg px-2.5 py-1 text-xs font-medium transition-all flex items-center gap-1.5 border cursor-pointer"])}"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(isModelSelected(modelName) ? "\u2713" : "+")}</span><span${_scopeId2}>${ssrInterpolate(modelName)}</span></button>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingModelsText.value,
                        "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                        placeholder: "Claude 3.7 Sonnet, DeepSeek R1, GPT-4o, Claude 3.5 Sonnet",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "mt-3" }, [
                        createVNode("div", { class: "text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center justify-between" }, [
                          createVNode("span", null, "\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\uFF1A"),
                          createVNode("span", { class: "text-xs text-blue-600 dark:text-blue-400 font-semibold" }, "\u5DF2\u5173\u8054 " + toDisplayString(selectedModelsList.value.length) + " \u4E2A\u6A21\u578B", 1)
                        ]),
                        createVNode("div", { class: "flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2.5 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(availableModelNames.value, (modelName) => {
                            return openBlock(), createBlock("button", {
                              key: modelName,
                              type: "button",
                              class: ["rounded-lg px-2.5 py-1 text-xs font-medium transition-all flex items-center gap-1.5 border cursor-pointer", isModelSelected(modelName) ? "bg-blue-600 border-blue-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500"],
                              onClick: ($event) => toggleModel(modelName)
                            }, [
                              createVNode("span", null, toDisplayString(isModelSelected(modelName) ? "\u2713" : "+"), 1),
                              createVNode("span", null, toDisplayString(modelName), 1)
                            ], 10, ["onClick"]);
                          }), 128))
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u2B50 \u91CD\u70B9\u63A8\u8350\u5230\u4EE5\u4E0B\u6A21\u578B\u8BE6\u60C5\u9875",
                help: "\u53EA\u6709\u88AB\u9009\u4E2D\u7684\u6A21\u578B\u8BE6\u60C5\u9875\uFF0C\u624D\u4F1A\u5C06\u672C\u4E13\u7EBF\u4F5C\u4E3A\u63A8\u8350\u65B9\u6848\u7F6E\u9876\u5C55\u793A"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingRecommendedModelsText.value,
                      "onUpdate:modelValue": ($event) => editingRecommendedModelsText.value = $event,
                      placeholder: "Claude 3.7 Sonnet, GPT-4o, Gemini 3.7 Flash",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-3"${_scopeId2}><div class="text-xs font-medium text-amber-700 dark:text-amber-400 mb-2 flex items-center justify-between"${_scopeId2}><span${_scopeId2}>\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u63A8\u8350\uFF1A</span><span class="text-xs font-semibold text-amber-600 dark:text-amber-400"${_scopeId2}>\u5DF2\u63A8\u8350 ${ssrInterpolate(selectedRecommendedModelsList.value.length)} \u4E2A\u6A21\u578B</span></div><div class="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2.5 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20"${_scopeId2}><!--[-->`);
                    ssrRenderList(availableModelNames.value, (modelName) => {
                      _push3(`<button type="button" class="${ssrRenderClass([isRecommendedModelSelected(modelName) ? "bg-amber-500 border-amber-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400 dark:hover:border-amber-500", "rounded-lg px-2.5 py-1 text-xs font-medium transition-all flex items-center gap-1.5 border cursor-pointer"])}"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(isRecommendedModelSelected(modelName) ? "\u2B50" : "+")}</span><span${_scopeId2}>${ssrInterpolate(modelName)}</span></button>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingRecommendedModelsText.value,
                        "onUpdate:modelValue": ($event) => editingRecommendedModelsText.value = $event,
                        placeholder: "Claude 3.7 Sonnet, GPT-4o, Gemini 3.7 Flash",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "mt-3" }, [
                        createVNode("div", { class: "text-xs font-medium text-amber-700 dark:text-amber-400 mb-2 flex items-center justify-between" }, [
                          createVNode("span", null, "\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u63A8\u8350\uFF1A"),
                          createVNode("span", { class: "text-xs font-semibold text-amber-600 dark:text-amber-400" }, "\u5DF2\u63A8\u8350 " + toDisplayString(selectedRecommendedModelsList.value.length) + " \u4E2A\u6A21\u578B", 1)
                        ]),
                        createVNode("div", { class: "flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2.5 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(availableModelNames.value, (modelName) => {
                            return openBlock(), createBlock("button", {
                              key: modelName,
                              type: "button",
                              class: ["rounded-lg px-2.5 py-1 text-xs font-medium transition-all flex items-center gap-1.5 border cursor-pointer", isRecommendedModelSelected(modelName) ? "bg-amber-500 border-amber-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400 dark:hover:border-amber-500"],
                              onClick: ($event) => toggleRecommendedModel(modelName)
                            }, [
                              createVNode("span", null, toDisplayString(isRecommendedModelSelected(modelName) ? "\u2B50" : "+"), 1),
                              createVNode("span", null, toDisplayString(modelName), 1)
                            ], 10, ["onClick"]);
                          }), 128))
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u4E13\u7EBF\u7279\u6027\u4EAE\u70B9 (\u6BCF\u884C\u4E00\u6761)",
                help: "\u524D\u53F0\u5361\u7247\u5C55\u793A\u7684\u6838\u5FC3\u4F18\u52BF\u5356\u70B9"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingFeaturesText.value,
                      "onUpdate:modelValue": ($event) => editingFeaturesText.value = $event,
                      rows: 4,
                      placeholder: "\u56FD\u5185\u53CC\u7EBF\u76F4\u8FDE\n\u652F\u6301 100% \u6EE1\u8840\u601D\u8003\u6A21\u5F0F\n\u5FAE\u4FE1/\u652F\u4ED8\u5B9D\u5145\u503C\n\u4F59\u989D\u6C38\u4E0D\u8FC7\u671F",
                      class: "w-full text-xs font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingFeaturesText.value,
                        "onUpdate:modelValue": ($event) => editingFeaturesText.value = $event,
                        rows: 4,
                        placeholder: "\u56FD\u5185\u53CC\u7EBF\u76F4\u8FDE\n\u652F\u6301 100% \u6EE1\u8840\u601D\u8003\u6A21\u5F0F\n\u5FAE\u4FE1/\u652F\u4ED8\u5B9D\u5145\u503C\n\u4F59\u989D\u6C38\u4E0D\u8FC7\u671F",
                        class: "w-full text-xs font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "caveats" ? null : { display: "none" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u907F\u5751\u6307\u5357\u4E0E\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879",
                help: "\u4E3A\u7528\u6237\u63D0\u4F9B\u5BA2\u89C2\u3001\u771F\u5B9E\u7684\u6392\u5751\u63D0\u9192\u4E0E\u4F7F\u7528\u5EFA\u8BAE"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingItem.value.caveat,
                      "onUpdate:modelValue": ($event) => editingItem.value.caveat = $event,
                      rows: 4,
                      placeholder: "\u5982\uFF1A\u665A\u9AD8\u5CF0\u82E5\u9047\u5B98\u65B9\u7B97\u529B\u6CE2\u52A8\u4F1A\u81EA\u52A8\u5E73\u6ED1\u5207\u6362\u5907\u7528\u7B97\u529B\u6C60\uFF1B\u53EA\u505A\u9AD8\u8D28\u91CF\u4F01\u4E1A\u4E13\u7EBF\uFF0C\u4E0D\u63D0\u4F9B\u51E0\u5206\u94B1\u7684\u63BA\u6C34\u6E20\u9053",
                      class: "w-full text-sm leading-relaxed"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.caveat,
                        "onUpdate:modelValue": ($event) => editingItem.value.caveat = $event,
                        rows: 4,
                        placeholder: "\u5982\uFF1A\u665A\u9AD8\u5CF0\u82E5\u9047\u5B98\u65B9\u7B97\u529B\u6CE2\u52A8\u4F1A\u81EA\u52A8\u5E73\u6ED1\u5207\u6362\u5907\u7528\u7B97\u529B\u6C60\uFF1B\u53EA\u505A\u9AD8\u8D28\u91CF\u4F01\u4E1A\u4E13\u7EBF\uFF0C\u4E0D\u63D0\u4F9B\u51E0\u5206\u94B1\u7684\u63BA\u6C34\u6E20\u9053",
                        class: "w-full text-sm leading-relaxed"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              editingItem.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-6"
              }, [
                createVNode("div", { class: "flex flex-wrap items-center border-b border-gray-200 dark:border-gray-800 gap-2 sm:gap-6 pb-1" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(modalTabs, (tab) => {
                    return createVNode("button", {
                      key: tab.key,
                      type: "button",
                      class: ["pb-2.5 px-1 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5", activeModalTab.value === tab.key ? "border-blue-500 text-blue-600 dark:text-blue-400 font-semibold" : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"],
                      onClick: ($event) => activeModalTab.value = tab.key
                    }, [
                      createVNode(_component_UIcon, {
                        name: tab.icon,
                        class: "w-4 h-4"
                      }, null, 8, ["name"]),
                      createVNode("span", null, toDisplayString(tab.label), 1)
                    ], 10, ["onClick"]);
                  }), 64))
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u7AD9\u70B9 / \u4E13\u7EBF\u540D\u79F0",
                      required: "",
                      help: "\u524D\u53F0\u5929\u68AF\u699C\u4E0E\u5361\u7247\u663E\u793A\u7684\u540D\u79F0\uFF0C\u5982\uFF1AAINode \u6781\u901F\u4E13\u7EBF"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.name,
                          "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                          placeholder: "\u5982\uFF1AAINode \u6781\u901F\u4E13\u7EBF",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u8282\u70B9\u552F\u4E00 ID",
                      required: "",
                      help: "\u5168\u82F1\u6587\u4E0E\u77ED\u6A2A\u7EBF\uFF0C\u552F\u4E00\u6807\u8BC6\uFF0C\u4E0D\u53EF\u91CD\u590D"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.id,
                          "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                          placeholder: "\u5982\uFF1Aainode-pro",
                          disabled: !isEditingNew.value,
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u7AD9\u70B9\u57DF\u540D",
                      help: "\u5982\uFF1Aainode.run"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.domain,
                          "onUpdate:modelValue": ($event) => editingItem.value.domain = $event,
                          placeholder: "\u5982\uFF1Aainode.run",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5B98\u7F51\u94FE\u63A5",
                      help: "\u4F9B\u7528\u6237\u8DF3\u8F6C\u8BBF\u95EE\u7AD9\u70B9"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.url,
                          "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                          placeholder: "\u5982\uFF1Ahttps://ainode.run",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UFormField, {
                    label: "API Base URL",
                    required: "",
                    help: "\u7528\u6237\u5728 Cursor / Cline / Roo Code / Cherry Studio \u4E2D\u914D\u7F6E\u7684 OpenAI \u517C\u5BB9\u7AEF\u70B9"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.baseUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.baseUrl = $event,
                        placeholder: "https://api.ainode.run/v1",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode("div", { class: "rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 p-4" }, [
                      createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                        createVNode(_component_UCheckbox, {
                          modelValue: editingItem.value.isSelfOperated,
                          "onUpdate:modelValue": ($event) => editingItem.value.isSelfOperated = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, "\u2B50 \u6807\u8BB0\u4E3A\u5B98\u65B9\u81EA\u8425\u4E13\u7EBF\uFF08\u63A8\u8350\u9AD8\u4EAE\u5C55\u793A\uFF09")
                      ])
                    ]),
                    createVNode("div", { class: "rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 p-4" }, [
                      createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                        createVNode(_component_UCheckbox, {
                          modelValue: editingItem.value.hidden,
                          "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("span", null, "\u{1F6AB} \u9690\u85CF\u6B64\u4E13\u7EBF\uFF08\u4E0D\u5728\u524D\u53F0\u5929\u68AF\u699C\u5C55\u793A\uFF09")
                      ])
                    ])
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "basic"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u8F93\u5165\u5355\u4EF7 (\xA5/M)",
                      required: "",
                      help: "\u6298\u540E\u5B9E\u9645\u5355\u4EF7\uFF0C\u5982\uFF1A2.8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.pricePerM,
                          "onUpdate:modelValue": ($event) => editingItem.value.pricePerM = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          step: "0.01",
                          min: "0",
                          placeholder: "2.8",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5B98\u65B9\u53C2\u8003\u5355\u4EF7 (\xA5/M)",
                      required: "",
                      help: "\u539F\u5382\u5B98\u65B9\u53C2\u8003\u4EF7\uFF0C\u7528\u4E8E\u81EA\u52A8\u8BA1\u7B97\u964D\u8D39\u6BD4\u4F8B"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.officialPriceCNY,
                          "onUpdate:modelValue": ($event) => editingItem.value.officialPriceCNY = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          step: "0.1",
                          min: "0",
                          placeholder: "21.8",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5B9E\u6D4B\u9996\u5B57\u5EF6\u8FDF (ms)",
                      help: "\u56FD\u5185\u8282\u70B9\u5B9E\u6D4B TTFT\uFF0C\u5982\uFF1A280"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.latencyMs,
                          "onUpdate:modelValue": ($event) => editingItem.value.latencyMs = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          step: "10",
                          min: "0",
                          placeholder: "280",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode(_component_UFormField, {
                      label: "\u5728\u7EBF\u7387 (Uptime)",
                      help: "\u5982\uFF1A99.99%"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.uptime,
                          "onUpdate:modelValue": ($event) => editingItem.value.uptime = $event,
                          placeholder: "99.99%",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u4E3B\u63A8\u6A21\u578B\u5206\u7C7B",
                      help: "\u7528\u4E8E\u524D\u53F0\u5FEB\u6377 Tab \u7B5B\u9009\u4E0E\u5206\u7C7B"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: editingItem.value.primaryModelKey,
                          "onUpdate:modelValue": ($event) => editingItem.value.primaryModelKey = $event,
                          items: primaryModelKeyOptions,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { label: "\u6807\u7B7E\u8272\u5F69\u98CE\u683C" }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: editingItem.value.badgeTone,
                          "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                          items: badgeToneOptions,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UFormField, {
                    label: "\u9AD8\u4EAE\u5FBD\u6807\u6587\u6848",
                    help: "\u5C55\u793A\u5728\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u4EAE\u70B9\u5FBD\u6807\uFF0C\u5982\uFF1A\u81EA\u8425\u63A8\u8350 / \u4EE3\u7801\u5E73\u66FF\u738B / \u8001\u724C\u4E2D\u8F6C"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u5982\uFF1A\u81EA\u8425\u63A8\u8350 / \u4EE3\u7801\u5E73\u66FF\u738B",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, activeModalTab.value === "speed"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode(_component_UFormField, {
                    label: "\u652F\u6301\u7684\u6838\u5FC3\u6A21\u578B",
                    help: "\u82F1\u6587\u9017\u53F7\u5206\u9694\uFF0C\u4E5F\u53EF\u76F4\u63A5\u4ECE\u4E0B\u65B9\u5DF2\u6536\u5F55\u6A21\u578B\u4E2D\u70B9\u51FB\u6DFB\u52A0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingModelsText.value,
                        "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                        placeholder: "Claude 3.7 Sonnet, DeepSeek R1, GPT-4o, Claude 3.5 Sonnet",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "mt-3" }, [
                        createVNode("div", { class: "text-xs font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center justify-between" }, [
                          createVNode("span", null, "\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\uFF1A"),
                          createVNode("span", { class: "text-xs text-blue-600 dark:text-blue-400 font-semibold" }, "\u5DF2\u5173\u8054 " + toDisplayString(selectedModelsList.value.length) + " \u4E2A\u6A21\u578B", 1)
                        ]),
                        createVNode("div", { class: "flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2.5 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(availableModelNames.value, (modelName) => {
                            return openBlock(), createBlock("button", {
                              key: modelName,
                              type: "button",
                              class: ["rounded-lg px-2.5 py-1 text-xs font-medium transition-all flex items-center gap-1.5 border cursor-pointer", isModelSelected(modelName) ? "bg-blue-600 border-blue-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500"],
                              onClick: ($event) => toggleModel(modelName)
                            }, [
                              createVNode("span", null, toDisplayString(isModelSelected(modelName) ? "\u2713" : "+"), 1),
                              createVNode("span", null, toDisplayString(modelName), 1)
                            ], 10, ["onClick"]);
                          }), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u2B50 \u91CD\u70B9\u63A8\u8350\u5230\u4EE5\u4E0B\u6A21\u578B\u8BE6\u60C5\u9875",
                    help: "\u53EA\u6709\u88AB\u9009\u4E2D\u7684\u6A21\u578B\u8BE6\u60C5\u9875\uFF0C\u624D\u4F1A\u5C06\u672C\u4E13\u7EBF\u4F5C\u4E3A\u63A8\u8350\u65B9\u6848\u7F6E\u9876\u5C55\u793A"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingRecommendedModelsText.value,
                        "onUpdate:modelValue": ($event) => editingRecommendedModelsText.value = $event,
                        placeholder: "Claude 3.7 Sonnet, GPT-4o, Gemini 3.7 Flash",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "mt-3" }, [
                        createVNode("div", { class: "text-xs font-medium text-amber-700 dark:text-amber-400 mb-2 flex items-center justify-between" }, [
                          createVNode("span", null, "\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u63A8\u8350\uFF1A"),
                          createVNode("span", { class: "text-xs font-semibold text-amber-600 dark:text-amber-400" }, "\u5DF2\u63A8\u8350 " + toDisplayString(selectedRecommendedModelsList.value.length) + " \u4E2A\u6A21\u578B", 1)
                        ]),
                        createVNode("div", { class: "flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2.5 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(availableModelNames.value, (modelName) => {
                            return openBlock(), createBlock("button", {
                              key: modelName,
                              type: "button",
                              class: ["rounded-lg px-2.5 py-1 text-xs font-medium transition-all flex items-center gap-1.5 border cursor-pointer", isRecommendedModelSelected(modelName) ? "bg-amber-500 border-amber-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400 dark:hover:border-amber-500"],
                              onClick: ($event) => toggleRecommendedModel(modelName)
                            }, [
                              createVNode("span", null, toDisplayString(isRecommendedModelSelected(modelName) ? "\u2B50" : "+"), 1),
                              createVNode("span", null, toDisplayString(modelName), 1)
                            ], 10, ["onClick"]);
                          }), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u4E13\u7EBF\u7279\u6027\u4EAE\u70B9 (\u6BCF\u884C\u4E00\u6761)",
                    help: "\u524D\u53F0\u5361\u7247\u5C55\u793A\u7684\u6838\u5FC3\u4F18\u52BF\u5356\u70B9"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: editingFeaturesText.value,
                        "onUpdate:modelValue": ($event) => editingFeaturesText.value = $event,
                        rows: 4,
                        placeholder: "\u56FD\u5185\u53CC\u7EBF\u76F4\u8FDE\n\u652F\u6301 100% \u6EE1\u8840\u601D\u8003\u6A21\u5F0F\n\u5FAE\u4FE1/\u652F\u4ED8\u5B9D\u5145\u503C\n\u4F59\u989D\u6C38\u4E0D\u8FC7\u671F",
                        class: "w-full text-xs font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, activeModalTab.value === "models"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode(_component_UFormField, {
                    label: "\u907F\u5751\u6307\u5357\u4E0E\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879",
                    help: "\u4E3A\u7528\u6237\u63D0\u4F9B\u5BA2\u89C2\u3001\u771F\u5B9E\u7684\u6392\u5751\u63D0\u9192\u4E0E\u4F7F\u7528\u5EFA\u8BAE"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.caveat,
                        "onUpdate:modelValue": ($event) => editingItem.value.caveat = $event,
                        rows: 4,
                        placeholder: "\u5982\uFF1A\u665A\u9AD8\u5CF0\u82E5\u9047\u5B98\u65B9\u7B97\u529B\u6CE2\u52A8\u4F1A\u81EA\u52A8\u5E73\u6ED1\u5207\u6362\u5907\u7528\u7B97\u529B\u6C60\uFF1B\u53EA\u505A\u9AD8\u8D28\u91CF\u4F01\u4E1A\u4E13\u7EBF\uFF0C\u4E0D\u63D0\u4F9B\u51E0\u5206\u94B1\u7684\u63BA\u6C34\u6E20\u9053",
                        class: "w-full text-sm leading-relaxed"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ], 512), [
                  [vShow, activeModalTab.value === "caveats"]
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/cheap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
