import { _ as _sfc_main$1 } from './Alert-IcedS2f6.mjs';
import { _ as _sfc_main$2 } from './Card-jMFP8cqX.mjs';
import { g as useToast, d as _sfc_main$i, o as _sfc_main$h, k as _sfc_main$z, b as _sfc_main$E, c as _sfc_main$j, O as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$3 } from './Checkbox-BmTSvkxP.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-C_oQJW_c.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { h as hoxiModels } from './models-VgTGFaGO.mjs';
import { h as hoxiPlans } from './plans-D8XOOLan.mjs';
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
import './isValueEqualOrExist-BVczPdKj.mjs';
import './VisuallyHiddenInput-32bCuzTQ.mjs';
import './RovingFocusItem-DyHBwisL.mjs';
import './utils-DD3u_B8M.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "coding-plans",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const saving = ref(false);
    const errorMsg = ref("");
    const searchQuery = ref("");
    const selectedRegionFilter = ref("all");
    const selectedTypeFilter = ref("all");
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
    const activeModalTab = ref("basic");
    const modalTabs = [
      { key: "basic", label: "1. \u57FA\u7840\u4E0E\u5E73\u53F0", icon: "ph:identification-card" },
      { key: "pricing", label: "2. \u4EF7\u683C\u4E0E\u7ED3\u7B97", icon: "ph:currency-dollar" },
      { key: "specs", label: "3. \u989D\u5EA6\u4E0E\u6A21\u578B", icon: "ph:sliders" },
      { key: "details", label: "4. \u4EAE\u70B9\u4E0E\u94FE\u63A5", icon: "ph:link" }
    ];
    const regionFilterOptions = [
      { label: "\u5168\u90E8\u533A\u57DF\u5E73\u53F0", value: "all" },
      { label: "\u{1F1E8}\u{1F1F3} \u56FD\u5185\u5E73\u53F0", value: "domestic" },
      { label: "\u{1F310} \u56FD\u5916\u5E73\u53F0", value: "international" }
    ];
    const typeFilterOptions = [
      { label: "\u5168\u90E8\u5957\u9910\u7C7B\u578B", value: "all" },
      { label: "\u{1F4BB} IDE \u7F16\u7A0B\u5957\u9910", value: "coding_plan" },
      { label: "\u{1F310} \u5B98\u65B9 Web \u8BA2\u9605", value: "subscription" },
      { label: "\u26A1 Token \u8D44\u6E90\u5305", value: "token_plan" }
    ];
    const regionSelectOptions = [
      { label: "\u{1F1E8}\u{1F1F3} \u56FD\u5185\u5E73\u53F0 (\u76F4\u8FDE/\u652F\u6301\u652F\u4ED8\u5B9D)", value: "domestic" },
      { label: "\u{1F310} \u56FD\u5916\u5E73\u53F0 (\u5B98\u65B9\u539F\u5382/\u9700\u6D77\u5916\u652F\u4ED8)", value: "international" }
    ];
    const typeSelectOptions = [
      { label: "\u{1F4BB} IDE \u7F16\u7A0B\u5957\u9910 (coding_plan)", value: "coding_plan" },
      { label: "\u{1F310} \u5B98\u65B9 Web \u8BA2\u9605 (subscription)", value: "subscription" },
      { label: "\u26A1 Token \u8D44\u6E90\u5305/\u6309\u91CF (token_plan)", value: "token_plan" }
    ];
    const statusSelectOptions = [
      { label: "\u{1F525} \u70ED\u95E8\u4E3B\u529B (hot)", value: "hot" },
      { label: "\u26A1 \u6807\u51C6\u5E38\u89C4 (available / standard)", value: "available" },
      { label: "\u{1F193} \u514D\u8D39/\u767D\u5AD6\u6863 (free-tier)", value: "free-tier" },
      { label: "\u23F3 \u6392\u961F\u5185\u6D4B (waitlist)", value: "waitlist" }
    ];
    const vendorColorOptions = [
      { label: "\u6DF1\u7A7A\u9ED1 (bg-slate-900)", value: "bg-slate-900" },
      { label: "\u79D1\u6280\u84DD (bg-blue-500)", value: "bg-blue-500" },
      { label: "\u7ECF\u5178\u84DD (bg-blue-600)", value: "bg-blue-600" },
      { label: "\u963F\u91CC\u6A59 (bg-orange-500)", value: "bg-orange-500" },
      { label: "Anthropic \u6696\u6A59 (bg-orange-600)", value: "bg-orange-600" },
      { label: "OpenAI \u7FE1\u7FE0\u7EFF (bg-emerald-600)", value: "bg-emerald-600" },
      { label: "\u6708\u4E4B\u6697\u9762 \u7D2B (bg-purple-600)", value: "bg-purple-600" },
      { label: "Codeium \u9752\u7EFF (bg-teal-600)", value: "bg-teal-600" },
      { label: "GitHub \u7070 (bg-slate-800)", value: "bg-slate-800" }
    ];
    const getTypeName = (type) => {
      if (type === "coding_plan") return "IDE \u5957\u9910";
      if (type === "subscription") return "\u5B98\u65B9\u8BA2\u9605";
      return "Token \u8D44\u6E90\u5305";
    };
    const getStatusLabel = (status) => {
      if (status === "hot") return "\u{1F525} \u70ED\u95E8\u63A8\u8350";
      if (status === "free-tier") return "\u{1F193} \u514D\u8D39\u767D\u5AD6";
      if (status === "waitlist") return "\u23F3 \u6392\u961F\u7533\u8BF7";
      return "\u26A1 \u5E38\u89C4\u53EF\u7528";
    };
    const getStatusBadgeClass = (status) => {
      if (status === "hot") return "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400";
      if (status === "free-tier") return "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400";
      if (status === "waitlist") return "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400";
      return "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400";
    };
    const filteredList = computed(() => {
      let result = list.value;
      if (selectedRegionFilter.value !== "all") {
        result = result.filter((item) => item.region === selectedRegionFilter.value);
      }
      if (selectedTypeFilter.value !== "all") {
        result = result.filter((item) => item.type === selectedTypeFilter.value);
      }
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.trim().toLowerCase();
        result = result.filter(
          (item) => item.name && item.name.toLowerCase().includes(q) || item.vendorLabel && item.vendorLabel.toLowerCase().includes(q) || item.slug && item.slug.toLowerCase().includes(q) || item.models && item.models.some((m) => m.toLowerCase().includes(q)) || item.quotaNote && item.quotaNote.toLowerCase().includes(q)
        );
      }
      return result;
    });
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const editingModelsText = ref("");
    const editingRecommendedModelsText = ref("");
    const editingToolsText = ref("");
    const editingPaymentsText = ref("");
    const editingHighlightsText = ref("");
    const editingCaveatsText = ref("");
    const openAddModal = () => {
      isEditingNew.value = true;
      activeModalTab.value = "basic";
      editingItem.value = {
        slug: `plan-${Date.now()}`,
        name: "\u65B0\u5EFA AI \u7F16\u7A0B\u5957\u9910",
        vendor: "custom",
        vendorLabel: "\u5B98\u65B9\u5E73\u53F0",
        vendorColor: "bg-blue-500",
        type: "coding_plan",
        region: "international",
        paymentMethods: ["\u6D77\u5916\u4FE1\u7528\u5361 (Visa/Mastercard)"],
        networkRequirement: "\u9700\u6D77\u5916\u7F51\u7EDC",
        period: "\u6309\u6708\u8BA2\u9605",
        priceLabel: "$20 / \u6708",
        priceMonthlyCNY: 145,
        quotaNote: "\u6BCF\u6708\u4E13\u5C5E\u9AD8\u901F\u989D\u5EA6\uFF0C\u652F\u6301\u591A\u6587\u4EF6\u534F\u540C\u4E0E\u8865\u5168",
        models: ["Claude 3.7 Sonnet", "GPT-4o"],
        recommendedModels: ["Claude 3.7 Sonnet"],
        tools: ["IDE \u63D2\u4EF6", "CLI \u5DE5\u5177"],
        highlights: ["IDE \u539F\u751F\u96C6\u6210", "\u5B9E\u65F6\u667A\u80FD\u8865\u5168", "\u652F\u6301\u6DF1\u5EA6\u601D\u8003"],
        caveats: ["\u9700\u8981\u5916\u5E01\u4FE1\u7528\u5361\u652F\u4ED8"],
        status: "hot",
        officialUrl: "https://example.com",
        hidden: false
      };
      editingModelsText.value = editingItem.value.models.join(", ");
      editingRecommendedModelsText.value = (editingItem.value.recommendedModels || []).join(", ");
      editingToolsText.value = editingItem.value.tools.join(", ");
      editingPaymentsText.value = editingItem.value.paymentMethods.join(", ");
      editingHighlightsText.value = editingItem.value.highlights.join("\n");
      editingCaveatsText.value = editingItem.value.caveats.join("\n");
      isEditModalOpen.value = true;
    };
    const openEditModal = (plan) => {
      isEditingNew.value = false;
      activeModalTab.value = "basic";
      editingItem.value = JSON.parse(JSON.stringify(plan));
      editingModelsText.value = (plan.models || []).join(", ");
      editingRecommendedModelsText.value = (plan.recommendedModels || []).join(", ");
      editingToolsText.value = (plan.tools || []).join(", ");
      editingPaymentsText.value = (plan.paymentMethods || []).join(", ");
      editingHighlightsText.value = (plan.highlights || []).join("\n");
      editingCaveatsText.value = (plan.caveats || []).join("\n");
      isEditModalOpen.value = true;
    };
    const duplicatePlan = (plan) => {
      const copy = {
        ...JSON.parse(JSON.stringify(plan)),
        slug: `${plan.slug}-copy-${Date.now()}`,
        name: `${plan.name} (\u526F\u672C)`
      };
      list.value.unshift(copy);
      toast.add({ title: "\u5DF2\u521B\u5EFA\u5957\u9910\u526F\u672C", color: "info" });
    };
    const removePlan = (index) => {
      list.value.splice(index, 1);
    };
    const saveEditModal = () => {
      if (!editingItem.value) return;
      editingItem.value.models = editingModelsText.value.split(",").map((s) => s.trim()).filter(Boolean);
      editingItem.value.recommendedModels = editingRecommendedModelsText.value.split(",").map((s) => s.trim()).filter(Boolean);
      editingItem.value.tools = editingToolsText.value.split(",").map((s) => s.trim()).filter(Boolean);
      editingItem.value.paymentMethods = editingPaymentsText.value.split(",").map((s) => s.trim()).filter(Boolean);
      editingItem.value.highlights = editingHighlightsText.value.split("\n").map((s) => s.trim()).filter(Boolean);
      editingItem.value.caveats = editingCaveatsText.value.split("\n").map((s) => s.trim()).filter(Boolean);
      if (isEditingNew.value) {
        list.value.unshift(editingItem.value);
      } else {
        const idx = list.value.findIndex((item) => {
          var _a;
          return item.slug === ((_a = editingItem.value) == null ? void 0 : _a.slug);
        });
        if (idx !== -1) {
          list.value[idx] = editingItem.value;
        }
      }
      isEditModalOpen.value = false;
    };
    const resetToBaseline = () => {
      list.value = hoxiPlans.map((plan) => ({ ...plan, hidden: false }));
      toast.add({ title: "\u5DF2\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u57FA\u7EBF\u6570\u636E\uFF0C\u70B9\u51FB\u4FDD\u5B58\u540E\u5199\u5165\u6570\u636E\u5E93", color: "info" });
    };
    const save = async () => {
      saving.value = true;
      try {
        const sanitized = list.value.map((item) => ({
          ...item,
          priceMonthlyCNY: Number(item.priceMonthlyCNY) || 0,
          paymentMethods: Array.isArray(item.paymentMethods) ? item.paymentMethods : [],
          models: Array.isArray(item.models) ? item.models : [],
          recommendedModels: Array.isArray(item.recommendedModels) ? item.recommendedModels : [],
          tools: Array.isArray(item.tools) ? item.tools : [],
          highlights: Array.isArray(item.highlights) ? item.highlights : [],
          caveats: Array.isArray(item.caveats) ? item.caveats : [],
          hidden: Boolean(item.hidden)
        }));
        await $fetch("/api/admin/hoxi/plans", {
          method: "POST",
          body: {
            plans: sanitized
          }
        });
        toast.add({ title: "Coding Plan \u6570\u636E\u8868\u5DF2\u66F4\u65B0\uFF0C\u524D\u53F0\u7ACB\u5373\u751F\u6548", color: "success" });
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
      const _component_UIcon = _sfc_main$E;
      const _component_UButton = _sfc_main$z;
      const _component_UInput = _sfc_main$i;
      const _component_USelect = _sfc_main$h;
      const _component_UCheckbox = _sfc_main$3;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$j;
      const _component_UTextarea = _sfc_main$e;
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
              name: "ph:credit-card",
              class: "w-5 h-5 text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>AI \u7F16\u7A0B\u5957\u9910 (Coding Plans) \u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u6570\u636E\u5DF2\u6301\u4E45\u5316\u5B58\u50A8\u81F3 \`hoxi_coding_plans\` \u6570\u636E\u8868\u3002\u652F\u6301\u7BA1\u7406\u56FD\u5185\u5916\u4E3B\u6D41 IDE \u4E0E\u5B98\u65B9 Coding Plan\u3001\u4EF7\u683C\u3001\u989D\u5EA6\u4E0E\u907F\u5751\u6307\u5357\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
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
                  _push3(` \u65B0\u589E\u5957\u9910 `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u5957\u9910 ")
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
                      name: "ph:credit-card",
                      class: "w-5 h-5 text-purple-500"
                    }),
                    createVNode("span", null, "AI \u7F16\u7A0B\u5957\u9910 (Coding Plans) \u7BA1\u7406")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " \u6570\u636E\u5DF2\u6301\u4E45\u5316\u5B58\u50A8\u81F3 `hoxi_coding_plans` \u6570\u636E\u8868\u3002\u652F\u6301\u7BA1\u7406\u56FD\u5185\u5916\u4E3B\u6D41 IDE \u4E0E\u5B98\u65B9 Coding Plan\u3001\u4EF7\u683C\u3001\u989D\u5EA6\u4E0E\u907F\u5751\u6307\u5357\u3002 ")
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
                      createTextVNode(" \u65B0\u589E\u5957\u9910 ")
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
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              icon: "ph:magnifying-glass",
              placeholder: "\u641C\u7D22\u5957\u9910\u540D\u79F0\u3001\u5382\u5546\u3001\u652F\u6301\u6A21\u578B...",
              class: "w-64",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedRegionFilter.value,
              "onUpdate:modelValue": ($event) => selectedRegionFilter.value = $event,
              items: regionFilterOptions,
              class: "w-40",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedTypeFilter.value,
              "onUpdate:modelValue": ($event) => selectedTypeFilter.value = $event,
              items: typeFilterOptions,
              class: "w-44",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u5171\u6536\u5F55 <strong${_scopeId}>${ssrInterpolate(list.value.length)}</strong> \u4E2A\u5957\u9910 (\u5F53\u524D\u663E\u793A <strong${_scopeId}>${ssrInterpolate(filteredList.value.length)}</strong> \u4E2A) </div></div><div class="overflow-x-auto mt-4"${_scopeId}><table class="w-full min-w-[980px] text-sm"${_scopeId}><thead${_scopeId}><tr class="border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700"${_scopeId}><th class="py-2.5 pr-3 w-10 text-center"${_scopeId}>#</th><th class="py-2.5 pr-4 w-60"${_scopeId}>\u5957\u9910\u540D\u79F0 / \u6807\u8BC6</th><th class="py-2.5 pr-4 w-36"${_scopeId}>\u5E73\u53F0 / \u533A\u57DF</th><th class="py-2.5 pr-4 w-32"${_scopeId}>\u6807\u4EF7 / \u53C2\u8003\u6708\u8D39</th><th class="py-2.5 pr-4 w-48"${_scopeId}>\u6838\u5FC3\u989D\u5EA6\u8BF4\u660E</th><th class="py-2.5 pr-4 w-28"${_scopeId}>\u72B6\u6001</th><th class="py-2.5 pr-4 w-16 text-center"${_scopeId}>\u9690\u85CF</th><th class="py-2.5 text-right w-36"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (plan, index) => {
              _push2(`<tr class="${ssrRenderClass([plan.hidden ? "opacity-50 bg-gray-50/30" : "", "border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="py-3 pr-3 text-center text-xs font-mono text-gray-400"${_scopeId}>${ssrInterpolate(index + 1)}</td><td class="py-3 pr-4"${_scopeId}><div class="flex items-start gap-2"${_scopeId}><span class="${ssrRenderClass([plan.vendorColor || "bg-slate-500", "inline-block h-2.5 w-2.5 rounded-full mt-1.5 shrink-0"])}"${_scopeId}></span><div${_scopeId}><div class="font-medium text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(plan.name)}</span></div><div class="text-xs text-gray-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(plan.slug)}</div></div></div></td><td class="py-3 pr-4"${_scopeId}><div class="text-xs text-gray-900 dark:text-gray-100 font-medium"${_scopeId}>${ssrInterpolate(plan.vendorLabel)}</div><div class="text-[11px] text-gray-400 mt-0.5"${_scopeId}>${ssrInterpolate(plan.region === "domestic" ? "\u{1F1E8}\u{1F1F3} \u56FD\u5185\u76F4\u8FDE" : "\u{1F310} \u56FD\u5916\u5E73\u53F0")} \xB7 ${ssrInterpolate(getTypeName(plan.type))}</div></td><td class="py-3 pr-4"${_scopeId}><div class="font-semibold text-gray-900 dark:text-white text-xs"${_scopeId}>${ssrInterpolate(plan.priceLabel)}</div><div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5"${_scopeId}> \u7EA6 \xA5${ssrInterpolate(plan.priceMonthlyCNY)} / \u6708 </div></td><td class="py-3 pr-4"${_scopeId}><div class="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 max-w-xs leading-relaxed"${ssrRenderAttr("title", plan.quotaNote)}${_scopeId}>${ssrInterpolate(plan.quotaNote)}</div></td><td class="py-3 pr-4 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass([getStatusBadgeClass(plan.status), "inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium"])}"${_scopeId}>${ssrInterpolate(getStatusLabel(plan.status))}</span></td><td class="py-3 pr-4 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: plan.hidden,
                "onUpdate:modelValue": ($event) => plan.hidden = $event
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="py-3 text-right whitespace-nowrap"${_scopeId}><div class="flex items-center justify-end gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:pencil-simple",
                onClick: ($event) => openEditModal(plan)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u8BE6\u60C5 `);
                  } else {
                    return [
                      createTextVNode(" \u8BE6\u60C5 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:copy",
                title: "\u590D\u5236\u6B64\u5957\u9910",
                onClick: ($event) => duplicatePlan(plan)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                title: "\u5220\u9664\u5957\u9910",
                onClick: ($event) => removePlan(index)
              }, null, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
            if (!filteredList.value.length) {
              _push2(`<div class="py-12 text-center text-sm text-gray-400"${_scopeId}>${ssrInterpolate(list.value.length ? "\u672A\u627E\u5230\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u5957\u9910" : "\u6682\u65E0\u5957\u9910\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u65B0\u589E\u5957\u9910\u300D\u5F00\u59CB\u521B\u5EFA")}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                  createVNode(_component_UInput, {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    icon: "ph:magnifying-glass",
                    placeholder: "\u641C\u7D22\u5957\u9910\u540D\u79F0\u3001\u5382\u5546\u3001\u652F\u6301\u6A21\u578B...",
                    class: "w-64",
                    size: "sm"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelect, {
                    modelValue: selectedRegionFilter.value,
                    "onUpdate:modelValue": ($event) => selectedRegionFilter.value = $event,
                    items: regionFilterOptions,
                    class: "w-40",
                    size: "sm"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelect, {
                    modelValue: selectedTypeFilter.value,
                    "onUpdate:modelValue": ($event) => selectedTypeFilter.value = $event,
                    items: typeFilterOptions,
                    class: "w-44",
                    size: "sm"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, [
                  createTextVNode(" \u5171\u6536\u5F55 "),
                  createVNode("strong", null, toDisplayString(list.value.length), 1),
                  createTextVNode(" \u4E2A\u5957\u9910 (\u5F53\u524D\u663E\u793A "),
                  createVNode("strong", null, toDisplayString(filteredList.value.length), 1),
                  createTextVNode(" \u4E2A) ")
                ])
              ]),
              createVNode("div", { class: "overflow-x-auto mt-4" }, [
                createVNode("table", { class: "w-full min-w-[980px] text-sm" }, [
                  createVNode("thead", null, [
                    createVNode("tr", { class: "border-b border-gray-200 text-left text-xs uppercase text-gray-500 dark:border-gray-700" }, [
                      createVNode("th", { class: "py-2.5 pr-3 w-10 text-center" }, "#"),
                      createVNode("th", { class: "py-2.5 pr-4 w-60" }, "\u5957\u9910\u540D\u79F0 / \u6807\u8BC6"),
                      createVNode("th", { class: "py-2.5 pr-4 w-36" }, "\u5E73\u53F0 / \u533A\u57DF"),
                      createVNode("th", { class: "py-2.5 pr-4 w-32" }, "\u6807\u4EF7 / \u53C2\u8003\u6708\u8D39"),
                      createVNode("th", { class: "py-2.5 pr-4 w-48" }, "\u6838\u5FC3\u989D\u5EA6\u8BF4\u660E"),
                      createVNode("th", { class: "py-2.5 pr-4 w-28" }, "\u72B6\u6001"),
                      createVNode("th", { class: "py-2.5 pr-4 w-16 text-center" }, "\u9690\u85CF"),
                      createVNode("th", { class: "py-2.5 text-right w-36" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (plan, index) => {
                      return openBlock(), createBlock("tr", {
                        key: plan.slug || index,
                        class: ["border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/40 transition-colors", plan.hidden ? "opacity-50 bg-gray-50/30" : ""]
                      }, [
                        createVNode("td", { class: "py-3 pr-3 text-center text-xs font-mono text-gray-400" }, toDisplayString(index + 1), 1),
                        createVNode("td", { class: "py-3 pr-4" }, [
                          createVNode("div", { class: "flex items-start gap-2" }, [
                            createVNode("span", {
                              class: ["inline-block h-2.5 w-2.5 rounded-full mt-1.5 shrink-0", plan.vendorColor || "bg-slate-500"]
                            }, null, 2),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-medium text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                                createVNode("span", null, toDisplayString(plan.name), 1)
                              ]),
                              createVNode("div", { class: "text-xs text-gray-400 font-mono mt-0.5" }, toDisplayString(plan.slug), 1)
                            ])
                          ])
                        ]),
                        createVNode("td", { class: "py-3 pr-4" }, [
                          createVNode("div", { class: "text-xs text-gray-900 dark:text-gray-100 font-medium" }, toDisplayString(plan.vendorLabel), 1),
                          createVNode("div", { class: "text-[11px] text-gray-400 mt-0.5" }, toDisplayString(plan.region === "domestic" ? "\u{1F1E8}\u{1F1F3} \u56FD\u5185\u76F4\u8FDE" : "\u{1F310} \u56FD\u5916\u5E73\u53F0") + " \xB7 " + toDisplayString(getTypeName(plan.type)), 1)
                        ]),
                        createVNode("td", { class: "py-3 pr-4" }, [
                          createVNode("div", { class: "font-semibold text-gray-900 dark:text-white text-xs" }, toDisplayString(plan.priceLabel), 1),
                          createVNode("div", { class: "text-[11px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5" }, " \u7EA6 \xA5" + toDisplayString(plan.priceMonthlyCNY) + " / \u6708 ", 1)
                        ]),
                        createVNode("td", { class: "py-3 pr-4" }, [
                          createVNode("div", {
                            class: "text-xs text-gray-600 dark:text-gray-300 line-clamp-2 max-w-xs leading-relaxed",
                            title: plan.quotaNote
                          }, toDisplayString(plan.quotaNote), 9, ["title"])
                        ]),
                        createVNode("td", { class: "py-3 pr-4 whitespace-nowrap" }, [
                          createVNode("span", {
                            class: ["inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium", getStatusBadgeClass(plan.status)]
                          }, toDisplayString(getStatusLabel(plan.status)), 3)
                        ]),
                        createVNode("td", { class: "py-3 pr-4 text-center" }, [
                          createVNode(_component_UCheckbox, {
                            modelValue: plan.hidden,
                            "onUpdate:modelValue": ($event) => plan.hidden = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "py-3 text-right whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1.5" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:pencil-simple",
                              onClick: ($event) => openEditModal(plan)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8BE6\u60C5 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:copy",
                              title: "\u590D\u5236\u6B64\u5957\u9910",
                              onClick: ($event) => duplicatePlan(plan)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              title: "\u5220\u9664\u5957\u9910",
                              onClick: ($event) => removePlan(index)
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
              }, toDisplayString(list.value.length ? "\u672A\u627E\u5230\u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u7684\u5957\u9910" : "\u6682\u65E0\u5957\u9910\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C\u65B0\u589E\u5957\u9910\u300D\u5F00\u59CB\u521B\u5EFA"), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: isEditModalOpen.value,
        "onUpdate:modelValue": ($event) => isEditModalOpen.value = $event,
        maxWidth: "sm:max-w-5xl",
        title: isEditingNew.value ? "\u65B0\u589E AI \u7F16\u7A0B\u5957\u9910" : `\u7F16\u8F91\u5957\u9910 \xB7 ${((_a = editingItem.value) == null ? void 0 : _a.name) || ((_b = editingItem.value) == null ? void 0 : _b.slug)}`
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-3 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
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
                  _push3(` \u786E\u5B9A `);
                } else {
                  return [
                    createTextVNode(" \u786E\u5B9A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-3 w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
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
                    createTextVNode(" \u786E\u5B9A ")
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
                _push2(`<button type="button" class="${ssrRenderClass([activeModalTab.value === tab.key ? "border-purple-500 text-purple-600 dark:text-purple-400 font-semibold" : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white", "pb-2.5 px-1 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: tab.icon,
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(tab.label)}</span></button>`);
              });
              _push2(`<!--]--></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "basic" ? null : { display: "none" })}"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5957\u9910\u5B8C\u6574\u540D\u79F0",
                required: "",
                help: "\u5982\uFF1ACursor Pro \u5B98\u65B9\u8BA2\u9605"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                      placeholder: "\u5982\uFF1ACursor Pro \u5B98\u65B9\u8BA2\u9605",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u5982\uFF1ACursor Pro \u5B98\u65B9\u8BA2\u9605",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u552F\u4E00\u6807\u8BC6 (Slug)",
                required: "",
                help: "\u5C0F\u5199\u82F1\u6587\u8FDE\u5B57\u7B26\uFF0C\u7528\u4E8E\u5B9A\u4F4D\u4E0E\u6BD4\u4EF7"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.slug,
                      "onUpdate:modelValue": ($event) => editingItem.value.slug = $event,
                      placeholder: "\u5982\uFF1Acursor-pro",
                      disabled: !isEditingNew.value,
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.slug,
                        "onUpdate:modelValue": ($event) => editingItem.value.slug = $event,
                        placeholder: "\u5982\uFF1Acursor-pro",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5E73\u53F0 / \u5382\u5546\u663E\u793A\u540D",
                required: "",
                help: "\u5982\uFF1ACursor (Anysphere) \u6216 \u901A\u4E49\u7075\u7801"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.vendorLabel,
                      "onUpdate:modelValue": ($event) => editingItem.value.vendorLabel = $event,
                      placeholder: "\u5982\uFF1ACursor",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.vendorLabel,
                        "onUpdate:modelValue": ($event) => editingItem.value.vendorLabel = $event,
                        placeholder: "\u5982\uFF1ACursor",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5E73\u53F0\u6807\u8BC6 Key",
                required: "",
                help: "\u5173\u8054\u7684\u4F9B\u5E94\u5546 slug\uFF0C\u5982 cursor / qwen"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.vendor,
                      "onUpdate:modelValue": ($event) => editingItem.value.vendor = $event,
                      placeholder: "\u5982\uFF1Acursor",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.vendor,
                        "onUpdate:modelValue": ($event) => editingItem.value.vendor = $event,
                        placeholder: "\u5982\uFF1Acursor",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5382\u5546\u5FBD\u6807\u8272\u5F69",
                required: "",
                help: "\u5361\u7247\u4E0E\u5706\u70B9\u7684\u4E3B\u9898\u989C\u8272"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.vendorColor,
                      "onUpdate:modelValue": ($event) => editingItem.value.vendorColor = $event,
                      items: vendorColorOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.vendorColor,
                        "onUpdate:modelValue": ($event) => editingItem.value.vendorColor = $event,
                        items: vendorColorOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u533A\u57DF\u5206\u7C7B",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.region,
                      "onUpdate:modelValue": ($event) => editingItem.value.region = $event,
                      items: regionSelectOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.region,
                        "onUpdate:modelValue": ($event) => editingItem.value.region = $event,
                        items: regionSelectOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5957\u9910\u4E1A\u52A1\u7C7B\u578B",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.type,
                      "onUpdate:modelValue": ($event) => editingItem.value.type = $event,
                      items: typeSelectOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.type,
                        "onUpdate:modelValue": ($event) => editingItem.value.type = $event,
                        items: typeSelectOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5C55\u793A\u72B6\u6001\u6807\u7B7E" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.status,
                      "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                      items: statusSelectOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.status,
                        "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                        items: statusSelectOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 p-4"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.hidden,
                "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u{1F6AB} \u9690\u85CF\u6B64\u5957\u9910\uFF08\u4E0D\u5728\u524D\u53F0\u5217\u8868\u5C55\u793A\uFF09</span></label></div></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "pricing" ? null : { display: "none" })}"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-3 gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5B98\u65B9\u5C55\u793A\u6807\u4EF7",
                required: "",
                help: "\u5982\uFF1A$20 / \u6708 \u6216 \xA539 / \u6708"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.priceLabel,
                      "onUpdate:modelValue": ($event) => editingItem.value.priceLabel = $event,
                      placeholder: "\u5982\uFF1A$20 / \u6708",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.priceLabel,
                        "onUpdate:modelValue": ($event) => editingItem.value.priceLabel = $event,
                        placeholder: "\u5982\uFF1A$20 / \u6708",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u4EBA\u6C11\u5E01\u53C2\u8003\u6708\u8D39 (\xA5)",
                required: "",
                help: "\u7528\u4E8E\u524D\u53F0\u6392\u5E8F\u4E0E\u7EDF\u4E00\u6210\u672C\u6838\u7B97"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.priceMonthlyCNY,
                      "onUpdate:modelValue": ($event) => editingItem.value.priceMonthlyCNY = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      step: "1",
                      min: "0",
                      placeholder: "145",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.priceMonthlyCNY,
                        "onUpdate:modelValue": ($event) => editingItem.value.priceMonthlyCNY = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "1",
                        min: "0",
                        placeholder: "145",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u8BA1\u8D39\u5468\u671F",
                help: "\u5982\uFF1A\u6309\u6708\u8BA2\u9605 / \u8D44\u6E90\u5305"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.period,
                      "onUpdate:modelValue": ($event) => editingItem.value.period = $event,
                      placeholder: "\u5982\uFF1A\u6309\u6708\u8BA2\u9605",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.period,
                        "onUpdate:modelValue": ($event) => editingItem.value.period = $event,
                        placeholder: "\u5982\uFF1A\u6309\u6708\u8BA2\u9605",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u652F\u6301\u7684\u652F\u4ED8\u65B9\u5F0F",
                help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u6D77\u5916\u4FE1\u7528\u5361 (Visa/Mastercard), \u652F\u4ED8\u5B9D"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingPaymentsText.value,
                      "onUpdate:modelValue": ($event) => editingPaymentsText.value = $event,
                      placeholder: "\u6D77\u5916\u4FE1\u7528\u5361, \u652F\u4ED8\u5B9D",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingPaymentsText.value,
                        "onUpdate:modelValue": ($event) => editingPaymentsText.value = $event,
                        placeholder: "\u6D77\u5916\u4FE1\u7528\u5361, \u652F\u4ED8\u5B9D",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u7F51\u7EDC\u73AF\u5883\u8981\u6C42",
                help: "\u5982\uFF1A\u9700\u6D77\u5916\u7F51\u7EDC \u6216 \u56FD\u5185\u76F4\u8FDE\u53EF\u7528"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.networkRequirement,
                      "onUpdate:modelValue": ($event) => editingItem.value.networkRequirement = $event,
                      placeholder: "\u5982\uFF1A\u9700\u6D77\u5916\u7F51\u7EDC / \u56FD\u5185\u76F4\u8FDE\u53EF\u7528",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.networkRequirement,
                        "onUpdate:modelValue": ($event) => editingItem.value.networkRequirement = $event,
                        placeholder: "\u5982\uFF1A\u9700\u6D77\u5916\u7F51\u7EDC / \u56FD\u5185\u76F4\u8FDE\u53EF\u7528",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "specs" ? null : { display: "none" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u989D\u5EA6\u4E0E\u8C03\u7528\u89C4\u5219\u8BF4\u660E",
                required: "",
                help: "\u91CD\u70B9\u8BF4\u660E\u6BCF\u6708\u5305\u542B\u7684\u9AD8\u901F\u989D\u5EA6\u3001\u6162\u901F\u6392\u961F\u6216\u8BA1\u8D39\u7EC6\u5219"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingItem.value.quotaNote,
                      "onUpdate:modelValue": ($event) => editingItem.value.quotaNote = $event,
                      rows: 3,
                      placeholder: "\u5982\uFF1A\u6BCF\u6708 500 \u6B21 Fast Requests\uFF0C\u8D85\u989D\u540E\u65E0\u9650\u6B21\u6162\u901F\u6392\u961F\uFF1B\u652F\u6301\u591A\u6587\u4EF6 Composer",
                      class: "w-full text-sm leading-relaxed"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.quotaNote,
                        "onUpdate:modelValue": ($event) => editingItem.value.quotaNote = $event,
                        rows: 3,
                        placeholder: "\u5982\uFF1A\u6BCF\u6708 500 \u6B21 Fast Requests\uFF0C\u8D85\u989D\u540E\u65E0\u9650\u6B21\u6162\u901F\u6392\u961F\uFF1B\u652F\u6301\u591A\u6587\u4EF6 Composer",
                        class: "w-full text-sm leading-relaxed"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6838\u5FC3\u652F\u6301\u6A21\u578B",
                help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1AClaude 3.7 Sonnet, GPT-4o, DeepSeek R1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingModelsText.value,
                      "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                      placeholder: "Claude 3.7 Sonnet, GPT-4o, DeepSeek R1",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-2.5"${_scopeId2}><div class="text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5 flex items-center justify-between"${_scopeId2}><span${_scopeId2}>\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u6DFB\u52A0\uFF1A</span><span class="text-[10px] text-gray-400"${_scopeId2}>\u5DF2\u9009 ${ssrInterpolate(selectedModelsList.value.length)} \u4E2A</span></div><div class="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1.5 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60"${_scopeId2}><!--[-->`);
                    ssrRenderList(availableModelNames.value, (modelName) => {
                      _push3(`<button type="button" class="${ssrRenderClass([isModelSelected(modelName) ? "bg-blue-500 border-blue-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600", "rounded-md px-2 py-0.5 text-[11px] font-medium transition-all flex items-center gap-1 border cursor-pointer"])}"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(isModelSelected(modelName) ? "\u2713" : "+")}</span><span${_scopeId2}>${ssrInterpolate(modelName)}</span></button>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingModelsText.value,
                        "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                        placeholder: "Claude 3.7 Sonnet, GPT-4o, DeepSeek R1",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "mt-2.5" }, [
                        createVNode("div", { class: "text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5 flex items-center justify-between" }, [
                          createVNode("span", null, "\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u6DFB\u52A0\uFF1A"),
                          createVNode("span", { class: "text-[10px] text-gray-400" }, "\u5DF2\u9009 " + toDisplayString(selectedModelsList.value.length) + " \u4E2A", 1)
                        ]),
                        createVNode("div", { class: "flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1.5 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(availableModelNames.value, (modelName) => {
                            return openBlock(), createBlock("button", {
                              key: modelName,
                              type: "button",
                              class: ["rounded-md px-2 py-0.5 text-[11px] font-medium transition-all flex items-center gap-1 border cursor-pointer", isModelSelected(modelName) ? "bg-blue-500 border-blue-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600"],
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
                help: "\u53EA\u6709\u88AB\u9009\u4E2D\u7684\u6A21\u578B\u8BE6\u60C5\u9875\uFF0C\u624D\u4F1A\u5C06\u672C\u5957\u9910\u4F5C\u4E3A\u63A8\u8350\u65B9\u6848\u7F6E\u9876\u5C55\u793A"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingRecommendedModelsText.value,
                      "onUpdate:modelValue": ($event) => editingRecommendedModelsText.value = $event,
                      placeholder: "Claude 3.7 Sonnet, GPT-4o, Gemini 3.7 Flash",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-2.5"${_scopeId2}><div class="text-[11px] font-medium text-amber-700 dark:text-amber-400 mb-1.5 flex items-center justify-between"${_scopeId2}><span${_scopeId2}>\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u63A8\u8350\uFF1A</span><span class="text-[10px] text-amber-600 dark:text-amber-400 font-semibold"${_scopeId2}>\u5DF2\u63A8\u8350 ${ssrInterpolate(selectedRecommendedModelsList.value.length)} \u4E2A</span></div><div class="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1.5 rounded-lg border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20"${_scopeId2}><!--[-->`);
                    ssrRenderList(availableModelNames.value, (modelName) => {
                      _push3(`<button type="button" class="${ssrRenderClass([isRecommendedModelSelected(modelName) ? "bg-amber-500 border-amber-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400 dark:hover:border-amber-500", "rounded-md px-2 py-0.5 text-[11px] font-medium transition-all flex items-center gap-1 border cursor-pointer"])}"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(isRecommendedModelSelected(modelName) ? "\u2B50" : "+")}</span><span${_scopeId2}>${ssrInterpolate(modelName)}</span></button>`);
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
                      createVNode("div", { class: "mt-2.5" }, [
                        createVNode("div", { class: "text-[11px] font-medium text-amber-700 dark:text-amber-400 mb-1.5 flex items-center justify-between" }, [
                          createVNode("span", null, "\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u63A8\u8350\uFF1A"),
                          createVNode("span", { class: "text-[10px] text-amber-600 dark:text-amber-400 font-semibold" }, "\u5DF2\u63A8\u8350 " + toDisplayString(selectedRecommendedModelsList.value.length) + " \u4E2A", 1)
                        ]),
                        createVNode("div", { class: "flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1.5 rounded-lg border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(availableModelNames.value, (modelName) => {
                            return openBlock(), createBlock("button", {
                              key: modelName,
                              type: "button",
                              class: ["rounded-md px-2 py-0.5 text-[11px] font-medium transition-all flex items-center gap-1 border cursor-pointer", isRecommendedModelSelected(modelName) ? "bg-amber-500 border-amber-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400 dark:hover:border-amber-500"],
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
                label: "\u96C6\u6210\u5DE5\u5177 / \u5BA2\u6237\u7AEF",
                help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1ACursor IDE, VS Code \u63D2\u4EF6, JetBrains \u63D2\u4EF6, CLI"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingToolsText.value,
                      "onUpdate:modelValue": ($event) => editingToolsText.value = $event,
                      placeholder: "Cursor IDE, Composer, Agent \u6A21\u5F0F, Terminal \u96C6\u6210",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingToolsText.value,
                        "onUpdate:modelValue": ($event) => editingToolsText.value = $event,
                        placeholder: "Cursor IDE, Composer, Agent \u6A21\u5F0F, Terminal \u96C6\u6210",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="space-y-5" style="${ssrRenderStyle(activeModalTab.value === "details" ? null : { display: "none" })}"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6838\u5FC3\u4EAE\u70B9 (Highlights)",
                help: "\u6BCF\u884C\u4E00\u6761"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingHighlightsText.value,
                      "onUpdate:modelValue": ($event) => editingHighlightsText.value = $event,
                      rows: 4,
                      placeholder: "\u5F53\u524D\u5168\u7403\u6700\u4E3B\u6D41\u7684 AI \u7F16\u7A0B IDE\uFF0C\u5199\u4EE3\u7801\u4F53\u9A8C\u7B2C\u4E00\u68AF\u961F\n\u591A\u6587\u4EF6\u8DE8\u6A21\u5757\u91CD\u6784\u80FD\u529B\u6781\u5F3A\n\u6BCF\u6708 500 \u6B21\u9AD8\u901F\u9AD8\u7EA7\u6A21\u578B\u8C03\u7528",
                      class: "w-full text-xs font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingHighlightsText.value,
                        "onUpdate:modelValue": ($event) => editingHighlightsText.value = $event,
                        rows: 4,
                        placeholder: "\u5F53\u524D\u5168\u7403\u6700\u4E3B\u6D41\u7684 AI \u7F16\u7A0B IDE\uFF0C\u5199\u4EE3\u7801\u4F53\u9A8C\u7B2C\u4E00\u68AF\u961F\n\u591A\u6587\u4EF6\u8DE8\u6A21\u5757\u91CD\u6784\u80FD\u529B\u6781\u5F3A\n\u6BCF\u6708 500 \u6B21\u9AD8\u901F\u9AD8\u7EA7\u6A21\u578B\u8C03\u7528",
                        class: "w-full text-xs font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u907F\u5751\u63D0\u9192\u4E0E\u6CE8\u610F\u4E8B\u9879 (Caveats)",
                help: "\u6BCF\u884C\u4E00\u6761"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingCaveatsText.value,
                      "onUpdate:modelValue": ($event) => editingCaveatsText.value = $event,
                      rows: 4,
                      placeholder: "\u9700\u7ED1\u5B9A\u6D77\u5916\u4FE1\u7528\u5361\u652F\u4ED8\uFF0C\u5B58\u5728\u5916\u5E01\u6263\u6B3E\u95E8\u69DB\n500 \u6B21\u9AD8\u901F\u989D\u5EA6\u91CD\u5EA6\u5F00\u53D1\u7EA6 10-15 \u5929\u5373\u8017\u5C3D",
                      class: "w-full text-xs font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingCaveatsText.value,
                        "onUpdate:modelValue": ($event) => editingCaveatsText.value = $event,
                        rows: 4,
                        placeholder: "\u9700\u7ED1\u5B9A\u6D77\u5916\u4FE1\u7528\u5361\u652F\u4ED8\uFF0C\u5B58\u5728\u5916\u5E01\u6263\u6B3E\u95E8\u69DB\n500 \u6B21\u9AD8\u901F\u989D\u5EA6\u91CD\u5EA6\u5F00\u53D1\u7EA6 10-15 \u5929\u5373\u8017\u5C3D",
                        class: "w-full text-xs font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5B98\u7F51\u8D2D\u4E70 / \u5B9A\u4EF7\u9875\u9762\u94FE\u63A5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.officialUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.officialUrl = $event,
                      placeholder: "https://www.cursor.com/pricing",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.officialUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.officialUrl = $event,
                        placeholder: "https://www.cursor.com/pricing",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4FDD\u59C6\u7EA7\u914D\u7F6E\u6559\u7A0B\u94FE\u63A5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.guideUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.guideUrl = $event,
                      placeholder: "https://example.com/guide (\u9009\u586B)",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.guideUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.guideUrl = $event,
                        placeholder: "https://example.com/guide (\u9009\u586B)",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
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
                      class: ["pb-2.5 px-1 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5", activeModalTab.value === tab.key ? "border-purple-500 text-purple-600 dark:text-purple-400 font-semibold" : "border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white"],
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
                      label: "\u5957\u9910\u5B8C\u6574\u540D\u79F0",
                      required: "",
                      help: "\u5982\uFF1ACursor Pro \u5B98\u65B9\u8BA2\u9605"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.name,
                          "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                          placeholder: "\u5982\uFF1ACursor Pro \u5B98\u65B9\u8BA2\u9605",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u552F\u4E00\u6807\u8BC6 (Slug)",
                      required: "",
                      help: "\u5C0F\u5199\u82F1\u6587\u8FDE\u5B57\u7B26\uFF0C\u7528\u4E8E\u5B9A\u4F4D\u4E0E\u6BD4\u4EF7"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.slug,
                          "onUpdate:modelValue": ($event) => editingItem.value.slug = $event,
                          placeholder: "\u5982\uFF1Acursor-pro",
                          disabled: !isEditingNew.value,
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5E73\u53F0 / \u5382\u5546\u663E\u793A\u540D",
                      required: "",
                      help: "\u5982\uFF1ACursor (Anysphere) \u6216 \u901A\u4E49\u7075\u7801"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.vendorLabel,
                          "onUpdate:modelValue": ($event) => editingItem.value.vendorLabel = $event,
                          placeholder: "\u5982\uFF1ACursor",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5E73\u53F0\u6807\u8BC6 Key",
                      required: "",
                      help: "\u5173\u8054\u7684\u4F9B\u5E94\u5546 slug\uFF0C\u5982 cursor / qwen"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.vendor,
                          "onUpdate:modelValue": ($event) => editingItem.value.vendor = $event,
                          placeholder: "\u5982\uFF1Acursor",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5382\u5546\u5FBD\u6807\u8272\u5F69",
                      required: "",
                      help: "\u5361\u7247\u4E0E\u5706\u70B9\u7684\u4E3B\u9898\u989C\u8272"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: editingItem.value.vendorColor,
                          "onUpdate:modelValue": ($event) => editingItem.value.vendorColor = $event,
                          items: vendorColorOptions,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u533A\u57DF\u5206\u7C7B",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: editingItem.value.region,
                          "onUpdate:modelValue": ($event) => editingItem.value.region = $event,
                          items: regionSelectOptions,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u5957\u9910\u4E1A\u52A1\u7C7B\u578B",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: editingItem.value.type,
                          "onUpdate:modelValue": ($event) => editingItem.value.type = $event,
                          items: typeSelectOptions,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { label: "\u5C55\u793A\u72B6\u6001\u6807\u7B7E" }, {
                      default: withCtx(() => [
                        createVNode(_component_USelect, {
                          modelValue: editingItem.value.status,
                          "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                          items: statusSelectOptions,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "rounded-xl border border-gray-200/70 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 p-4" }, [
                    createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                      createVNode(_component_UCheckbox, {
                        modelValue: editingItem.value.hidden,
                        "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", null, "\u{1F6AB} \u9690\u85CF\u6B64\u5957\u9910\uFF08\u4E0D\u5728\u524D\u53F0\u5217\u8868\u5C55\u793A\uFF09")
                    ])
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "basic"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u5B98\u65B9\u5C55\u793A\u6807\u4EF7",
                      required: "",
                      help: "\u5982\uFF1A$20 / \u6708 \u6216 \xA539 / \u6708"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.priceLabel,
                          "onUpdate:modelValue": ($event) => editingItem.value.priceLabel = $event,
                          placeholder: "\u5982\uFF1A$20 / \u6708",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u4EBA\u6C11\u5E01\u53C2\u8003\u6708\u8D39 (\xA5)",
                      required: "",
                      help: "\u7528\u4E8E\u524D\u53F0\u6392\u5E8F\u4E0E\u7EDF\u4E00\u6210\u672C\u6838\u7B97"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.priceMonthlyCNY,
                          "onUpdate:modelValue": ($event) => editingItem.value.priceMonthlyCNY = $event,
                          modelModifiers: { number: true },
                          type: "number",
                          step: "1",
                          min: "0",
                          placeholder: "145",
                          class: "w-full font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u8BA1\u8D39\u5468\u671F",
                      help: "\u5982\uFF1A\u6309\u6708\u8BA2\u9605 / \u8D44\u6E90\u5305"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.period,
                          "onUpdate:modelValue": ($event) => editingItem.value.period = $event,
                          placeholder: "\u5982\uFF1A\u6309\u6708\u8BA2\u9605",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode(_component_UFormField, {
                      label: "\u652F\u6301\u7684\u652F\u4ED8\u65B9\u5F0F",
                      help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A\u6D77\u5916\u4FE1\u7528\u5361 (Visa/Mastercard), \u652F\u4ED8\u5B9D"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingPaymentsText.value,
                          "onUpdate:modelValue": ($event) => editingPaymentsText.value = $event,
                          placeholder: "\u6D77\u5916\u4FE1\u7528\u5361, \u652F\u4ED8\u5B9D",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u7F51\u7EDC\u73AF\u5883\u8981\u6C42",
                      help: "\u5982\uFF1A\u9700\u6D77\u5916\u7F51\u7EDC \u6216 \u56FD\u5185\u76F4\u8FDE\u53EF\u7528"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.networkRequirement,
                          "onUpdate:modelValue": ($event) => editingItem.value.networkRequirement = $event,
                          placeholder: "\u5982\uFF1A\u9700\u6D77\u5916\u7F51\u7EDC / \u56FD\u5185\u76F4\u8FDE\u53EF\u7528",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "pricing"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode(_component_UFormField, {
                    label: "\u989D\u5EA6\u4E0E\u8C03\u7528\u89C4\u5219\u8BF4\u660E",
                    required: "",
                    help: "\u91CD\u70B9\u8BF4\u660E\u6BCF\u6708\u5305\u542B\u7684\u9AD8\u901F\u989D\u5EA6\u3001\u6162\u901F\u6392\u961F\u6216\u8BA1\u8D39\u7EC6\u5219"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.quotaNote,
                        "onUpdate:modelValue": ($event) => editingItem.value.quotaNote = $event,
                        rows: 3,
                        placeholder: "\u5982\uFF1A\u6BCF\u6708 500 \u6B21 Fast Requests\uFF0C\u8D85\u989D\u540E\u65E0\u9650\u6B21\u6162\u901F\u6392\u961F\uFF1B\u652F\u6301\u591A\u6587\u4EF6 Composer",
                        class: "w-full text-sm leading-relaxed"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u6838\u5FC3\u652F\u6301\u6A21\u578B",
                      help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1AClaude 3.7 Sonnet, GPT-4o, DeepSeek R1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingModelsText.value,
                          "onUpdate:modelValue": ($event) => editingModelsText.value = $event,
                          placeholder: "Claude 3.7 Sonnet, GPT-4o, DeepSeek R1",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "mt-2.5" }, [
                          createVNode("div", { class: "text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-1.5 flex items-center justify-between" }, [
                            createVNode("span", null, "\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u6DFB\u52A0\uFF1A"),
                            createVNode("span", { class: "text-[10px] text-gray-400" }, "\u5DF2\u9009 " + toDisplayString(selectedModelsList.value.length) + " \u4E2A", 1)
                          ]),
                          createVNode("div", { class: "flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1.5 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/60" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(availableModelNames.value, (modelName) => {
                              return openBlock(), createBlock("button", {
                                key: modelName,
                                type: "button",
                                class: ["rounded-md px-2 py-0.5 text-[11px] font-medium transition-all flex items-center gap-1 border cursor-pointer", isModelSelected(modelName) ? "bg-blue-500 border-blue-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600"],
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
                      help: "\u53EA\u6709\u88AB\u9009\u4E2D\u7684\u6A21\u578B\u8BE6\u60C5\u9875\uFF0C\u624D\u4F1A\u5C06\u672C\u5957\u9910\u4F5C\u4E3A\u63A8\u8350\u65B9\u6848\u7F6E\u9876\u5C55\u793A"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingRecommendedModelsText.value,
                          "onUpdate:modelValue": ($event) => editingRecommendedModelsText.value = $event,
                          placeholder: "Claude 3.7 Sonnet, GPT-4o, Gemini 3.7 Flash",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "mt-2.5" }, [
                          createVNode("div", { class: "text-[11px] font-medium text-amber-700 dark:text-amber-400 mb-1.5 flex items-center justify-between" }, [
                            createVNode("span", null, "\u4ECE\u7AD9\u5185\u5DF2\u6536\u5F55\u6A21\u578B\u5FEB\u6377\u70B9\u9009\u63A8\u8350\uFF1A"),
                            createVNode("span", { class: "text-[10px] text-amber-600 dark:text-amber-400 font-semibold" }, "\u5DF2\u63A8\u8350 " + toDisplayString(selectedRecommendedModelsList.value.length) + " \u4E2A", 1)
                          ]),
                          createVNode("div", { class: "flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-1.5 rounded-lg border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(availableModelNames.value, (modelName) => {
                              return openBlock(), createBlock("button", {
                                key: modelName,
                                type: "button",
                                class: ["rounded-md px-2 py-0.5 text-[11px] font-medium transition-all flex items-center gap-1 border cursor-pointer", isRecommendedModelSelected(modelName) ? "bg-amber-500 border-amber-600 text-white shadow-xs" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-amber-400 dark:hover:border-amber-500"],
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
                      label: "\u96C6\u6210\u5DE5\u5177 / \u5BA2\u6237\u7AEF",
                      help: "\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1ACursor IDE, VS Code \u63D2\u4EF6, JetBrains \u63D2\u4EF6, CLI"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingToolsText.value,
                          "onUpdate:modelValue": ($event) => editingToolsText.value = $event,
                          placeholder: "Cursor IDE, Composer, Agent \u6A21\u5F0F, Terminal \u96C6\u6210",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "specs"]
                ]),
                withDirectives(createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                    createVNode(_component_UFormField, {
                      label: "\u6838\u5FC3\u4EAE\u70B9 (Highlights)",
                      help: "\u6BCF\u884C\u4E00\u6761"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: editingHighlightsText.value,
                          "onUpdate:modelValue": ($event) => editingHighlightsText.value = $event,
                          rows: 4,
                          placeholder: "\u5F53\u524D\u5168\u7403\u6700\u4E3B\u6D41\u7684 AI \u7F16\u7A0B IDE\uFF0C\u5199\u4EE3\u7801\u4F53\u9A8C\u7B2C\u4E00\u68AF\u961F\n\u591A\u6587\u4EF6\u8DE8\u6A21\u5757\u91CD\u6784\u80FD\u529B\u6781\u5F3A\n\u6BCF\u6708 500 \u6B21\u9AD8\u901F\u9AD8\u7EA7\u6A21\u578B\u8C03\u7528",
                          class: "w-full text-xs font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, {
                      label: "\u907F\u5751\u63D0\u9192\u4E0E\u6CE8\u610F\u4E8B\u9879 (Caveats)",
                      help: "\u6BCF\u884C\u4E00\u6761"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UTextarea, {
                          modelValue: editingCaveatsText.value,
                          "onUpdate:modelValue": ($event) => editingCaveatsText.value = $event,
                          rows: 4,
                          placeholder: "\u9700\u7ED1\u5B9A\u6D77\u5916\u4FE1\u7528\u5361\u652F\u4ED8\uFF0C\u5B58\u5728\u5916\u5E01\u6263\u6B3E\u95E8\u69DB\n500 \u6B21\u9AD8\u901F\u989D\u5EA6\u91CD\u5EA6\u5F00\u53D1\u7EA6 10-15 \u5929\u5373\u8017\u5C3D",
                          class: "w-full text-xs font-mono"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100 dark:border-gray-800" }, [
                    createVNode(_component_UFormField, { label: "\u5B98\u7F51\u8D2D\u4E70 / \u5B9A\u4EF7\u9875\u9762\u94FE\u63A5" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.officialUrl,
                          "onUpdate:modelValue": ($event) => editingItem.value.officialUrl = $event,
                          placeholder: "https://www.cursor.com/pricing",
                          class: "w-full font-mono text-xs"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UFormField, { label: "\u4FDD\u59C6\u7EA7\u914D\u7F6E\u6559\u7A0B\u94FE\u63A5" }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: editingItem.value.guideUrl,
                          "onUpdate:modelValue": ($event) => editingItem.value.guideUrl = $event,
                          placeholder: "https://example.com/guide (\u9009\u586B)",
                          class: "w-full font-mono text-xs"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ], 512), [
                  [vShow, activeModalTab.value === "details"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/coding-plans.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
