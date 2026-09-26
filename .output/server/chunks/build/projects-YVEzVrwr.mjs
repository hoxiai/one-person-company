import { _ as _sfc_main$1 } from './Alert-DIZjX071.mjs';
import { _ as _sfc_main$2 } from './Card-jMFP8cqX.mjs';
import { h as useToast, d as _sfc_main$k, p as _sfc_main$j, l as _sfc_main$B, b as _sfc_main$G, o as _sfc_main$x, q as _sfc_main$s, c as _sfc_main$l, e as _sfc_main$g } from './server.mjs';
import { _ as _sfc_main$3 } from './Checkbox-BmTSvkxP.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { d as defaultHoxiProjects } from './projects-B_03J6bT.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const list = ref([]);
    const saving = ref(false);
    const errorMsg = ref("");
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const categoryMap = {
      "ai-infra": "AI \u9009\u578B\u4E0E\u5DE5\u5177",
      "gateway": "\u7B97\u529B\u57FA\u5EFA",
      "saas": "\u5546\u4E1A\u53D8\u73B0",
      "devtools": "\u5F00\u53D1\u6548\u7387",
      "open-source": "\u5F00\u6E90\u751F\u6001",
      "other": "\u5176\u4ED6\u9879\u76EE"
    };
    const categoryOptions = [
      { label: "\u5168\u90E8\u5206\u7C7B", value: "all" },
      { label: "AI \u9009\u578B\u4E0E\u5DE5\u5177", value: "ai-infra" },
      { label: "\u7B97\u529B\u57FA\u5EFA", value: "gateway" },
      { label: "\u5546\u4E1A\u53D8\u73B0", value: "saas" },
      { label: "\u5F00\u53D1\u6548\u7387", value: "devtools" },
      { label: "\u5F00\u6E90\u751F\u6001", value: "open-source" }
    ];
    const categoryFormOptions = [
      { label: "AI \u9009\u578B\u4E0E\u5DE5\u5177", value: "ai-infra" },
      { label: "\u7B97\u529B\u57FA\u5EFA", value: "gateway" },
      { label: "\u5546\u4E1A\u53D8\u73B0", value: "saas" },
      { label: "\u5F00\u53D1\u6548\u7387", value: "devtools" },
      { label: "\u5F00\u6E90\u751F\u6001", value: "open-source" },
      { label: "\u5176\u4ED6\u9879\u76EE", value: "other" }
    ];
    const statusOptions = [
      { label: "\u5546\u4E1A\u5316\u8FD0\u884C\u4E2D (active)", value: "active" },
      { label: "\u516C\u6D4B/\u5185\u6D4B\u4E2D (beta)", value: "beta" },
      { label: "\u5F00\u6E90\u514D\u8D39 (open-source)", value: "open-source" },
      { label: "\u5B75\u5316\u63A2\u7D22\u4E2D (incubating)", value: "incubating" }
    ];
    const badgeToneOptions = [
      { label: "\u6B63\u9762\u63A8\u8350 (\u7EFF/\u6210\u529F)", value: "positive" },
      { label: "\u4FE1\u606F\u63D0\u793A (\u84DD)", value: "info" },
      { label: "\u8B66\u793A/\u6CE8\u610F (\u6A59/\u9EC4)", value: "warning" },
      { label: "\u4E2D\u6027\u7070", value: "neutral" }
    ];
    const formatStatus = (st) => {
      switch (st) {
        case "active":
          return "\u5546\u4E1A\u5316\u8FD0\u884C";
        case "beta":
          return "\u516C\u6D4B\u4E2D";
        case "open-source":
          return "\u5F00\u6E90\u514D\u8D39";
        case "incubating":
          return "\u5B75\u5316\u63A2\u7D22";
        default:
          return st;
      }
    };
    const filteredList = computed(() => {
      let result = list.value;
      if (selectedCategory.value !== "all") {
        result = result.filter((item) => item.category === selectedCategory.value);
      }
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.trim().toLowerCase();
        result = result.filter(
          (item) => item.name && item.name.toLowerCase().includes(q) || item.id && item.id.toLowerCase().includes(q) || item.tagline && item.tagline.toLowerCase().includes(q) || item.description && item.description.toLowerCase().includes(q) || item.modelUsed && item.modelUsed.toLowerCase().includes(q) || Array.isArray(item.techStack) && item.techStack.some((t) => t.toLowerCase().includes(q)) || item.author && item.author.toLowerCase().includes(q)
        );
      }
      return result;
    });
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const techStackInput = ref("");
    const highlightsInput = ref("");
    const openAddModal = () => {
      isEditingNew.value = true;
      editingItem.value = {
        id: `project-${Date.now()}`,
        name: "",
        tagline: "",
        description: "",
        category: "ai-infra",
        categoryLabel: "AI \u9009\u578B\u4E0E\u5DE5\u5177",
        status: "active",
        statusLabel: "\u5546\u4E1A\u5316\u8FD0\u884C",
        modelUsed: "",
        monthlyCost: "",
        techStack: [],
        author: "\u53EF\u4E50 (Coller)",
        authorUrl: "",
        badge: "\u7AD9\u957F\u7CBE\u9009",
        badgeTone: "positive",
        icon: "ph:rocket-launch-bold",
        url: "",
        githubUrl: "",
        storyUrl: "",
        highlights: [],
        order: (list.value.length + 1) * 10,
        hidden: false
      };
      techStackInput.value = "";
      highlightsInput.value = "";
      isEditModalOpen.value = true;
    };
    const openEditModal = (item) => {
      isEditingNew.value = false;
      editingItem.value = JSON.parse(JSON.stringify(item));
      techStackInput.value = Array.isArray(item.techStack) ? item.techStack.join(", ") : "";
      highlightsInput.value = Array.isArray(item.highlights) ? item.highlights.join("\n") : "";
      isEditModalOpen.value = true;
    };
    const saveEditItem = async () => {
      if (!editingItem.value) return;
      if (!editingItem.value.id.trim() || !editingItem.value.name.trim() || !editingItem.value.url.trim()) {
        toast.add({ title: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u9879\u76EE ID\u3001\u540D\u79F0\u4E0E\u5B98\u7F51\u94FE\u63A5", color: "warning" });
        return;
      }
      editingItem.value.categoryLabel = categoryMap[editingItem.value.category] || "\u5176\u4ED6\u9879\u76EE";
      editingItem.value.statusLabel = formatStatus(editingItem.value.status);
      editingItem.value.techStack = techStackInput.value.split(/[,，]/).map((s) => s.trim()).filter(Boolean);
      editingItem.value.highlights = highlightsInput.value.split("\n").map((s) => s.trim()).filter(Boolean);
      if (isEditingNew.value) {
        list.value.unshift(editingItem.value);
      } else {
        const idx = list.value.findIndex((i) => {
          var _a;
          return i.id === ((_a = editingItem.value) == null ? void 0 : _a.id);
        });
        if (idx !== -1) {
          list.value[idx] = editingItem.value;
        }
      }
      isEditModalOpen.value = false;
      await save();
    };
    const toggleHidden = async (item) => {
      item.hidden = !item.hidden;
      await save();
    };
    const isDeleteModalOpen = ref(false);
    const itemToDelete = ref(null);
    const openDeleteModal = (item) => {
      itemToDelete.value = item;
      isDeleteModalOpen.value = true;
    };
    const confirmDelete = async () => {
      if (!itemToDelete.value) return;
      const id = itemToDelete.value.id;
      list.value = list.value.filter((i) => i.id !== id);
      isDeleteModalOpen.value = false;
      itemToDelete.value = null;
      await save();
    };
    const moveUp = (index) => {
      if (index <= 0) return;
      const temp = list.value[index];
      list.value[index] = list.value[index - 1];
      list.value[index - 1] = temp;
      list.value.forEach((item, idx) => {
        item.order = (idx + 1) * 10;
      });
    };
    const moveDown = (index) => {
      if (index >= list.value.length - 1) return;
      const temp = list.value[index];
      list.value[index] = list.value[index + 1];
      list.value[index + 1] = temp;
      list.value.forEach((item, idx) => {
        item.order = (idx + 1) * 10;
      });
    };
    const resetToBaseline = () => {
      list.value = defaultHoxiProjects.map((p) => ({ ...p }));
      toast.add({ title: "\u5DF2\u6062\u590D\u9ED8\u8BA4\u63A8\u8350\u9879\u76EE\uFF0C\u70B9\u51FB\u4FDD\u5B58\u540E\u5199\u5165\u6570\u636E\u5E93", color: "info" });
    };
    const save = async () => {
      saving.value = true;
      try {
        const sanitized = list.value.map((item, idx) => ({
          ...item,
          order: Number(item.order) || (idx + 1) * 10,
          hidden: Boolean(item.hidden),
          techStack: Array.isArray(item.techStack) ? item.techStack : [],
          highlights: Array.isArray(item.highlights) ? item.highlights : []
        }));
        await $fetch("/api/admin/hoxi/projects", {
          method: "POST",
          body: {
            projects: sanitized
          }
        });
        toast.add({ title: "\u5B9E\u6218\u9879\u76EE\u6570\u636E\u8868\u5DF2\u66F4\u65B0\uFF0C\u524D\u53F0\u5373\u65F6\u751F\u6548", color: "success" });
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
      const _component_UBadge = _sfc_main$x;
      const _component_UModal = _sfc_main$s;
      const _component_UFormField = _sfc_main$l;
      const _component_UTextarea = _sfc_main$g;
      const _component_UCheckbox = _sfc_main$3;
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
              name: "ph:rocket-launch",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u9879\u76EE\u5E93\u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u81F3 \`hoxi_projects\` \u6570\u636E\u8868\u3002\u7BA1\u7406\u9879\u76EE\u4FE1\u606F\u3001\u6280\u672F\u9009\u578B\u3001\u6838\u5FC3\u6A21\u578B\u3001\u6708\u7B97\u529B\u8D26\u672C\u4E0E\u4E0A\u4E0B\u67B6\u72B6\u6001\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:arrow-counter-clockwise",
              size: "sm",
              onClick: resetToBaseline
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6062\u590D\u9ED8\u8BA4\u63A8\u8350 `);
                } else {
                  return [
                    createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u63A8\u8350 ")
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
                  _push3(` \u65B0\u589E\u9879\u76EE `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u9879\u76EE ")
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
                      name: "ph:rocket-launch",
                      class: "w-5 h-5 text-blue-500"
                    }),
                    createVNode("span", null, "\u4E00\u4EBA\u516C\u53F8\u5B9E\u6218\u9879\u76EE\u5E93\u7BA1\u7406")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " \u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u81F3 `hoxi_projects` \u6570\u636E\u8868\u3002\u7BA1\u7406\u9879\u76EE\u4FE1\u606F\u3001\u6280\u672F\u9009\u578B\u3001\u6838\u5FC3\u6A21\u578B\u3001\u6708\u7B97\u529B\u8D26\u672C\u4E0E\u4E0A\u4E0B\u67B6\u72B6\u6001\u3002 ")
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
                      createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u63A8\u8350 ")
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
                      createTextVNode(" \u65B0\u589E\u9879\u76EE ")
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
              placeholder: "\u6309\u9879\u76EE\u540D / \u63CF\u8FF0 / \u6838\u5FC3\u6A21\u578B / \u6280\u672F\u6808\u641C\u7D22...",
              size: "sm",
              class: "w-72"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedCategory.value,
              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
              items: categoryOptions,
              size: "sm",
              class: "w-40"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xs text-gray-500"${_scopeId}> \u5171 ${ssrInterpolate(list.value.length)} \u4E2A\u9879\u76EE \xB7 \u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u4E2A </div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="w-12 px-3 py-3 text-center"${_scopeId}>\u6392\u5E8F</th><th class="px-3 py-3"${_scopeId}>\u9879\u76EE\u540D\u79F0 / \u5B9A\u4F4D</th><th class="px-3 py-3"${_scopeId}>\u5206\u7C7B</th><th class="px-3 py-3"${_scopeId}>\u72B6\u6001</th><th class="px-3 py-3"${_scopeId}>\u6838\u5FC3\u6A21\u578B &amp; \u8D26\u672C</th><th class="px-3 py-3"${_scopeId}>\u4F5C\u8005 / \u5FBD\u7AE0</th><th class="px-3 py-3"${_scopeId}>\u94FE\u63A5</th><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u4E0A\u67B6</th><th class="w-28 px-3 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item, index) => {
              var _a2;
              _push2(`<tr class="${ssrRenderClass([{ "opacity-50": item.hidden }, "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="px-3 py-3 text-center font-mono"${_scopeId}><div class="flex items-center justify-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:arrow-up",
                disabled: index === 0,
                onClick: ($event) => moveUp(index)
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-gray-400 text-[11px]"${_scopeId}>${ssrInterpolate((_a2 = item.order) != null ? _a2 : index + 1)}</span>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:arrow-down",
                disabled: index === filteredList.value.length - 1,
                onClick: ($event) => moveDown(index)
              }, null, _parent2, _scopeId));
              _push2(`</div></td><td class="px-3 py-3"${_scopeId}><div class="flex items-start gap-2.5"${_scopeId}><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 mt-0.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon || "ph:rocket-launch-bold",
                class: "w-4 h-4 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><div class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.name)}</span></div><div class="text-[11px] text-gray-500 line-clamp-1 max-w-xs"${_scopeId}>${ssrInterpolate(item.tagline)}</div><div class="text-[10px] text-gray-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(item.id)}</div></div></div></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.categoryLabel || item.category)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.categoryLabel || item.category), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: item.status === "active" ? "success" : item.status === "beta" ? "warning" : "info",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.statusLabel || formatStatus(item.status))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.statusLabel || formatStatus(item.status)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-3"${_scopeId}><div class="space-y-0.5"${_scopeId}>`);
              if (item.modelUsed) {
                _push2(`<div class="text-gray-800 dark:text-gray-200 font-medium truncate max-w-xs"${_scopeId}> \u{1F9E0} ${ssrInterpolate(item.modelUsed)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.monthlyCost) {
                _push2(`<div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono"${_scopeId}> \u{1F4B0} ${ssrInterpolate(item.monthlyCost)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!item.modelUsed && !item.monthlyCost) {
                _push2(`<div class="text-gray-400"${_scopeId}>\u2014</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}><div class="space-y-1"${_scopeId}><div class="text-gray-700 dark:text-gray-300 font-medium"${_scopeId}>${ssrInterpolate(item.author || "\u53EF\u4E50 (Coller)")}</div>`);
              if (item.badge) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: item.badgeTone === "positive" ? "success" : item.badgeTone === "warning" ? "warning" : "info",
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
              _push2(`</div></td><td class="px-3 py-3 max-w-xs"${_scopeId}><div class="space-y-1"${_scopeId}>`);
              if (item.url) {
                _push2(`<a${ssrRenderAttr("href", item.url)} target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 truncate"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(item.url)}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.githubUrl) {
                _push2(`<a${ssrRenderAttr("href", item.githubUrl)} target="_blank" rel="noopener" class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 flex items-center gap-1 text-[11px]"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:github-logo",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>\u6E90\u7801\u4ED3\u5E93</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: item.hidden ? "neutral" : "success",
                variant: "subtle",
                size: "xs",
                onClick: ($event) => toggleHidden(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.hidden ? "\u5DF2\u4E0B\u67B6" : "\u4E0A\u67B6\u4E2D")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u4E0B\u67B6" : "\u4E0A\u67B6\u4E2D"), 1)
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
                onClick: ($event) => openDeleteModal(item)
              }, null, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (filteredList.value.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="9" class="px-4 py-8 text-center text-gray-400"${_scopeId}> \u6682\u672A\u627E\u5230\u5339\u914D\u7684\u9879\u76EE\u6570\u636E </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                  createVNode(_component_UInput, {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    icon: "ph:magnifying-glass",
                    placeholder: "\u6309\u9879\u76EE\u540D / \u63CF\u8FF0 / \u6838\u5FC3\u6A21\u578B / \u6280\u672F\u6808\u641C\u7D22...",
                    size: "sm",
                    class: "w-72"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelect, {
                    modelValue: selectedCategory.value,
                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                    items: categoryOptions,
                    size: "sm",
                    class: "w-40"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "text-xs text-gray-500" }, " \u5171 " + toDisplayString(list.value.length) + " \u4E2A\u9879\u76EE \xB7 \u663E\u793A " + toDisplayString(filteredList.value.length) + " \u4E2A ", 1)
              ]),
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "w-12 px-3 py-3 text-center" }, "\u6392\u5E8F"),
                      createVNode("th", { class: "px-3 py-3" }, "\u9879\u76EE\u540D\u79F0 / \u5B9A\u4F4D"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5206\u7C7B"),
                      createVNode("th", { class: "px-3 py-3" }, "\u72B6\u6001"),
                      createVNode("th", { class: "px-3 py-3" }, "\u6838\u5FC3\u6A21\u578B & \u8D26\u672C"),
                      createVNode("th", { class: "px-3 py-3" }, "\u4F5C\u8005 / \u5FBD\u7AE0"),
                      createVNode("th", { class: "px-3 py-3" }, "\u94FE\u63A5"),
                      createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u4E0A\u67B6"),
                      createVNode("th", { class: "w-28 px-3 py-3 text-right" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item, index) => {
                      var _a2;
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        class: ["hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors", { "opacity-50": item.hidden }]
                      }, [
                        createVNode("td", { class: "px-3 py-3 text-center font-mono" }, [
                          createVNode("div", { class: "flex items-center justify-center gap-1" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:arrow-up",
                              disabled: index === 0,
                              onClick: ($event) => moveUp(index)
                            }, null, 8, ["disabled", "onClick"]),
                            createVNode("span", { class: "text-gray-400 text-[11px]" }, toDisplayString((_a2 = item.order) != null ? _a2 : index + 1), 1),
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:arrow-down",
                              disabled: index === filteredList.value.length - 1,
                              onClick: ($event) => moveDown(index)
                            }, null, 8, ["disabled", "onClick"])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "flex items-start gap-2.5" }, [
                            createVNode("span", { class: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 mt-0.5" }, [
                              createVNode(_component_UIcon, {
                                name: item.icon || "ph:rocket-launch-bold",
                                class: "w-4 h-4 text-blue-500"
                              }, null, 8, ["name"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                                createVNode("span", null, toDisplayString(item.name), 1)
                              ]),
                              createVNode("div", { class: "text-[11px] text-gray-500 line-clamp-1 max-w-xs" }, toDisplayString(item.tagline), 1),
                              createVNode("div", { class: "text-[10px] text-gray-400 font-mono mt-0.5" }, toDisplayString(item.id), 1)
                            ])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
                          createVNode(_component_UBadge, {
                            color: "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.categoryLabel || item.category), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
                          createVNode(_component_UBadge, {
                            color: item.status === "active" ? "success" : item.status === "beta" ? "warning" : "info",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.statusLabel || formatStatus(item.status)), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "space-y-0.5" }, [
                            item.modelUsed ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-gray-800 dark:text-gray-200 font-medium truncate max-w-xs"
                            }, " \u{1F9E0} " + toDisplayString(item.modelUsed), 1)) : createCommentVNode("", true),
                            item.monthlyCost ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-[11px] text-emerald-600 dark:text-emerald-400 font-mono"
                            }, " \u{1F4B0} " + toDisplayString(item.monthlyCost), 1)) : createCommentVNode("", true),
                            !item.modelUsed && !item.monthlyCost ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "text-gray-400"
                            }, "\u2014")) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-gray-700 dark:text-gray-300 font-medium" }, toDisplayString(item.author || "\u53EF\u4E50 (Coller)"), 1),
                            item.badge ? (openBlock(), createBlock(_component_UBadge, {
                              key: 0,
                              color: item.badgeTone === "positive" ? "success" : item.badgeTone === "warning" ? "warning" : "info",
                              variant: "subtle",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.badge), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 max-w-xs" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            item.url ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: item.url,
                              target: "_blank",
                              rel: "noopener",
                              class: "text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 truncate"
                            }, [
                              createVNode("span", { class: "truncate" }, toDisplayString(item.url), 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-square-out",
                                class: "w-3 h-3 shrink-0"
                              })
                            ], 8, ["href"])) : createCommentVNode("", true),
                            item.githubUrl ? (openBlock(), createBlock("a", {
                              key: 1,
                              href: item.githubUrl,
                              target: "_blank",
                              rel: "noopener",
                              class: "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 flex items-center gap-1 text-[11px]"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:github-logo",
                                class: "w-3 h-3 shrink-0"
                              }),
                              createVNode("span", null, "\u6E90\u7801\u4ED3\u5E93")
                            ], 8, ["href"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-center whitespace-nowrap" }, [
                          createVNode(_component_UButton, {
                            color: item.hidden ? "neutral" : "success",
                            variant: "subtle",
                            size: "xs",
                            onClick: ($event) => toggleHidden(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u4E0B\u67B6" : "\u4E0A\u67B6\u4E2D"), 1)
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
                              onClick: ($event) => openDeleteModal(item)
                            }, null, 8, ["onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128)),
                    filteredList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "9",
                        class: "px-4 py-8 text-center text-gray-400"
                      }, " \u6682\u672A\u627E\u5230\u5339\u914D\u7684\u9879\u76EE\u6570\u636E ")
                    ])) : createCommentVNode("", true)
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
        title: isEditingNew.value ? "\u65B0\u589E\u5B9E\u6218\u9879\u76EE" : `\u7F16\u8F91\u5B9E\u6218\u9879\u76EE \xB7 ${((_a = editingItem.value) == null ? void 0 : _a.name) || ((_b = editingItem.value) == null ? void 0 : _b.id)}`,
        ui: { content: "max-w-2xl sm:max-w-2xl" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (editingItem.value) {
              _push2(`<div class="space-y-4 py-2"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9879\u76EE\u552F\u4E00 ID (Slug)",
                required: "",
                help: "\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u4E0E\u8FDE\u5B57\u7B26\uFF0C\u5982 hoxi-ai"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.id,
                      "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                      placeholder: "\u4F8B\u5982: hoxi-ai",
                      size: "sm",
                      disabled: !isEditingNew.value,
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u4F8B\u5982: hoxi-ai",
                        size: "sm",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9879\u76EE\u540D\u79F0",
                required: "",
                help: "\u5C55\u793A\u5728\u524D\u53F0\u7684\u5B8C\u6574\u6807\u9898"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                      placeholder: "\u4F8B\u5982: Hoxi AI",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u4F8B\u5982: Hoxi AI",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u4E00\u53E5\u8BDD\u5B9A\u4F4D / Tagline",
                required: "",
                help: "\u5361\u7247\u548C\u8BE6\u60C5\u9875\u7684\u6838\u5FC3\u53E3\u53F7"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.tagline,
                      "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                      placeholder: "\u4F8B\u5982: \u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u4E0E\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u9009\u578B\u7AD9",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.tagline,
                        "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                        placeholder: "\u4F8B\u5982: \u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u4E0E\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u9009\u578B\u7AD9",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6240\u5C5E\u5206\u7C7B",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.category,
                      "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                      items: categoryFormOptions,
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.category,
                        "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                        items: categoryFormOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u8FD0\u8425\u72B6\u6001",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.status,
                      "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                      items: statusOptions,
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.status,
                        "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                        items: statusOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u8BE6\u7EC6\u63CF\u8FF0\u4E0E\u89E3\u51B3\u7684\u75DB\u70B9",
                help: "\u4ECB\u7ECD\u9879\u76EE\u80CC\u666F\u3001\u89E3\u51B3\u4E86\u4EC0\u4E48\u6838\u5FC3\u95EE\u9898\u3001\u7ED9\u8C01\u7528..."
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingItem.value.description,
                      "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                      rows: 3,
                      placeholder: "\u4ECB\u7ECD\u9879\u76EE\u80CC\u666F\u3001\u89E3\u51B3\u4E86\u4EC0\u4E48\u6838\u5FC3\u95EE\u9898\u3001\u7ED9\u8C01\u7528...",
                      size: "sm",
                      class: "w-full text-sm"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.description,
                        "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                        rows: 3,
                        placeholder: "\u4ECB\u7ECD\u9879\u76EE\u80CC\u666F\u3001\u89E3\u51B3\u4E86\u4EC0\u4E48\u6838\u5FC3\u95EE\u9898\u3001\u7ED9\u8C01\u7528...",
                        size: "sm",
                        class: "w-full text-sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6838\u5FC3 AI \u6A21\u578B",
                help: "\u5982: DeepSeek-V3 \xB7 Claude 3.7"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.modelUsed,
                      "onUpdate:modelValue": ($event) => editingItem.value.modelUsed = $event,
                      placeholder: "\u4F8B\u5982: DeepSeek-V3 \xB7 Claude 3.7",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.modelUsed,
                        "onUpdate:modelValue": ($event) => editingItem.value.modelUsed = $event,
                        placeholder: "\u4F8B\u5982: DeepSeek-V3 \xB7 Claude 3.7",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u771F\u5B9E\u6708\u7B97\u529B\u8D26\u672C",
                help: "\u5982: \xA535/\u6708 (\u6309\u91CF\u6263\u8D39+\u8FB9\u7F18\u7F13\u5B58)"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.monthlyCost,
                      "onUpdate:modelValue": ($event) => editingItem.value.monthlyCost = $event,
                      placeholder: "\u4F8B\u5982: \xA535/\u6708 (\u6309\u91CF\u6263\u8D39+\u8FB9\u7F18\u7F13\u5B58)",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.monthlyCost,
                        "onUpdate:modelValue": ($event) => editingItem.value.monthlyCost = $event,
                        placeholder: "\u4F8B\u5982: \xA535/\u6708 (\u6309\u91CF\u6263\u8D39+\u8FB9\u7F18\u7F13\u5B58)",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6280\u672F\u6808 (\u82F1\u6587\u6216\u4E2D\u6587\u9017\u53F7\u5206\u9694)",
                help: "\u5982: Nuxt 3, Tailwind CSS, Cloudflare Pages, SQLite"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: techStackInput.value,
                      "onUpdate:modelValue": ($event) => techStackInput.value = $event,
                      placeholder: "\u4F8B\u5982: Nuxt 3, Tailwind CSS, Cloudflare Pages, SQLite",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: techStackInput.value,
                        "onUpdate:modelValue": ($event) => techStackInput.value = $event,
                        placeholder: "\u4F8B\u5982: Nuxt 3, Tailwind CSS, Cloudflare Pages, SQLite",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4F5C\u8005\u59D3\u540D / \u56E2\u961F" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.author,
                      "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                      placeholder: "\u4F8B\u5982: \u53EF\u4E50 (Coller)",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.author,
                        "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                        placeholder: "\u4F8B\u5982: \u53EF\u4E50 (Coller)",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4F5C\u8005\u4E3B\u9875 / \u793E\u4EA4\u94FE\u63A5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.authorUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.authorUrl = $event,
                      placeholder: "\u4F8B\u5982: https://github.com/...",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.authorUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.authorUrl = $event,
                        placeholder: "\u4F8B\u5982: https://github.com/...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u63A8\u8350\u5FBD\u7AE0",
                help: "\u5982: \u7AD9\u957F\u51FA\u54C1 / \u4E00\u4EBA\u516C\u53F8\u6807\u6746"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.badge,
                      "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                      placeholder: "\u4F8B\u5982: \u7AD9\u957F\u51FA\u54C1",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u4F8B\u5982: \u7AD9\u957F\u51FA\u54C1",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5FBD\u7AE0\u8272\u8C03" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.badgeTone,
                      "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                      items: badgeToneOptions,
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.badgeTone,
                        "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                        items: badgeToneOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u56FE\u6807 Icon",
                help: "Phosphor \u56FE\u6807\u540D"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.icon,
                      "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                      placeholder: "ph:rocket-launch-bold",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.icon,
                        "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                        placeholder: "ph:rocket-launch-bold",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9879\u76EE\u5B98\u7F51 / \u4F53\u9A8C\u94FE\u63A5 *",
                required: "",
                help: "\u6807\u51C6\u5B98\u7F51\u6216\u4F53\u9A8C\u5730\u5740"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.url,
                      "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                      placeholder: "https://...",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.url,
                        "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                        placeholder: "https://...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "GitHub \u6E90\u7801\u94FE\u63A5",
                help: "\u9009\u586B\uFF0C\u5F00\u6E90\u4ED3\u5E93\u94FE\u63A5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.githubUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.githubUrl = $event,
                      placeholder: "https://github.com/...",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.githubUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.githubUrl = $event,
                        placeholder: "https://github.com/...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u7AD9\u5185\u590D\u76D8\u624B\u8BB0\u94FE\u63A5",
                help: "\u9009\u586B\uFF0C\u5982 /blog/xxx \u6216 /about"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.storyUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.storyUrl = $event,
                      placeholder: "/blog/xxx \u6216 /about",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.storyUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.storyUrl = $event,
                        placeholder: "/blog/xxx \u6216 /about",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9879\u76EE\u4EAE\u70B9\u6E05\u5355 (\u6BCF\u884C\u4E00\u6761)",
                help: "\u524D\u53F0\u5361\u7247\u5C55\u793A\u7684\u6838\u5FC3\u4EAE\u70B9\u5217\u8868"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: highlightsInput.value,
                      "onUpdate:modelValue": ($event) => highlightsInput.value = $event,
                      rows: 3,
                      placeholder: "\u6536\u5F55 20+ \u6B3E\u6838\u5FC3\u5927\u6A21\u578B\u57FA\u7EBF\u6570\u636E\n\u72EC\u5BB6\u81EA\u6D4B\u56FD\u5185\u514D\u7FFB\u76F4\u8FDE\u4E13\u7EBF\n\u4E00\u4EBA\u6210\u519B\u5168\u6808\u6781\u7B80\u8BBE\u8BA1",
                      size: "sm",
                      class: "w-full text-sm"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: highlightsInput.value,
                        "onUpdate:modelValue": ($event) => highlightsInput.value = $event,
                        rows: 3,
                        placeholder: "\u6536\u5F55 20+ \u6B3E\u6838\u5FC3\u5927\u6A21\u578B\u57FA\u7EBF\u6570\u636E\n\u72EC\u5BB6\u81EA\u6D4B\u56FD\u5185\u514D\u7FFB\u76F4\u8FDE\u4E13\u7EBF\n\u4E00\u4EBA\u6210\u519B\u5168\u6808\u6781\u7B80\u8BBE\u8BA1",
                        size: "sm",
                        class: "w-full text-sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.hidden,
                "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event,
                label: "\u6682\u4E0D\u4E0A\u67B6 (\u9690\u85CF)"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-2"${_scopeId}><span class="text-xs text-gray-500"${_scopeId}>\u6392\u5E8F\u6743\u91CD\uFF1A</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: editingItem.value.order,
                "onUpdate:modelValue": ($event) => editingItem.value.order = $event,
                modelModifiers: { number: true },
                type: "number",
                class: "w-24",
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
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
                    label: "\u9879\u76EE\u552F\u4E00 ID (Slug)",
                    required: "",
                    help: "\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u4E0E\u8FDE\u5B57\u7B26\uFF0C\u5982 hoxi-ai"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u4F8B\u5982: hoxi-ai",
                        size: "sm",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u9879\u76EE\u540D\u79F0",
                    required: "",
                    help: "\u5C55\u793A\u5728\u524D\u53F0\u7684\u5B8C\u6574\u6807\u9898"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u4F8B\u5982: Hoxi AI",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u4E00\u53E5\u8BDD\u5B9A\u4F4D / Tagline",
                  required: "",
                  help: "\u5361\u7247\u548C\u8BE6\u60C5\u9875\u7684\u6838\u5FC3\u53E3\u53F7"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.tagline,
                      "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                      placeholder: "\u4F8B\u5982: \u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u4E0E\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u9009\u578B\u7AD9",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u6240\u5C5E\u5206\u7C7B",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.category,
                        "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                        items: categoryFormOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u8FD0\u8425\u72B6\u6001",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.status,
                        "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                        items: statusOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u8BE6\u7EC6\u63CF\u8FF0\u4E0E\u89E3\u51B3\u7684\u75DB\u70B9",
                  help: "\u4ECB\u7ECD\u9879\u76EE\u80CC\u666F\u3001\u89E3\u51B3\u4E86\u4EC0\u4E48\u6838\u5FC3\u95EE\u9898\u3001\u7ED9\u8C01\u7528..."
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: editingItem.value.description,
                      "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                      rows: 3,
                      placeholder: "\u4ECB\u7ECD\u9879\u76EE\u80CC\u666F\u3001\u89E3\u51B3\u4E86\u4EC0\u4E48\u6838\u5FC3\u95EE\u9898\u3001\u7ED9\u8C01\u7528...",
                      size: "sm",
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u6838\u5FC3 AI \u6A21\u578B",
                    help: "\u5982: DeepSeek-V3 \xB7 Claude 3.7"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.modelUsed,
                        "onUpdate:modelValue": ($event) => editingItem.value.modelUsed = $event,
                        placeholder: "\u4F8B\u5982: DeepSeek-V3 \xB7 Claude 3.7",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u771F\u5B9E\u6708\u7B97\u529B\u8D26\u672C",
                    help: "\u5982: \xA535/\u6708 (\u6309\u91CF\u6263\u8D39+\u8FB9\u7F18\u7F13\u5B58)"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.monthlyCost,
                        "onUpdate:modelValue": ($event) => editingItem.value.monthlyCost = $event,
                        placeholder: "\u4F8B\u5982: \xA535/\u6708 (\u6309\u91CF\u6263\u8D39+\u8FB9\u7F18\u7F13\u5B58)",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u6280\u672F\u6808 (\u82F1\u6587\u6216\u4E2D\u6587\u9017\u53F7\u5206\u9694)",
                  help: "\u5982: Nuxt 3, Tailwind CSS, Cloudflare Pages, SQLite"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: techStackInput.value,
                      "onUpdate:modelValue": ($event) => techStackInput.value = $event,
                      placeholder: "\u4F8B\u5982: Nuxt 3, Tailwind CSS, Cloudflare Pages, SQLite",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, { label: "\u4F5C\u8005\u59D3\u540D / \u56E2\u961F" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.author,
                        "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                        placeholder: "\u4F8B\u5982: \u53EF\u4E50 (Coller)",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u4F5C\u8005\u4E3B\u9875 / \u793E\u4EA4\u94FE\u63A5" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.authorUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.authorUrl = $event,
                        placeholder: "\u4F8B\u5982: https://github.com/...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u63A8\u8350\u5FBD\u7AE0",
                    help: "\u5982: \u7AD9\u957F\u51FA\u54C1 / \u4E00\u4EBA\u516C\u53F8\u6807\u6746"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u4F8B\u5982: \u7AD9\u957F\u51FA\u54C1",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5FBD\u7AE0\u8272\u8C03" }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.badgeTone,
                        "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                        items: badgeToneOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u56FE\u6807 Icon",
                    help: "Phosphor \u56FE\u6807\u540D"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.icon,
                        "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                        placeholder: "ph:rocket-launch-bold",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u9879\u76EE\u5B98\u7F51 / \u4F53\u9A8C\u94FE\u63A5 *",
                    required: "",
                    help: "\u6807\u51C6\u5B98\u7F51\u6216\u4F53\u9A8C\u5730\u5740"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.url,
                        "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                        placeholder: "https://...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "GitHub \u6E90\u7801\u94FE\u63A5",
                    help: "\u9009\u586B\uFF0C\u5F00\u6E90\u4ED3\u5E93\u94FE\u63A5"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.githubUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.githubUrl = $event,
                        placeholder: "https://github.com/...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u7AD9\u5185\u590D\u76D8\u624B\u8BB0\u94FE\u63A5",
                  help: "\u9009\u586B\uFF0C\u5982 /blog/xxx \u6216 /about"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.storyUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.storyUrl = $event,
                      placeholder: "/blog/xxx \u6216 /about",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "\u9879\u76EE\u4EAE\u70B9\u6E05\u5355 (\u6BCF\u884C\u4E00\u6761)",
                  help: "\u524D\u53F0\u5361\u7247\u5C55\u793A\u7684\u6838\u5FC3\u4EAE\u70B9\u5217\u8868"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: highlightsInput.value,
                      "onUpdate:modelValue": ($event) => highlightsInput.value = $event,
                      rows: 3,
                      placeholder: "\u6536\u5F55 20+ \u6B3E\u6838\u5FC3\u5927\u6A21\u578B\u57FA\u7EBF\u6570\u636E\n\u72EC\u5BB6\u81EA\u6D4B\u56FD\u5185\u514D\u7FFB\u76F4\u8FDE\u4E13\u7EBF\n\u4E00\u4EBA\u6210\u519B\u5168\u6808\u6781\u7B80\u8BBE\u8BA1",
                      size: "sm",
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UCheckbox, {
                    modelValue: editingItem.value.hidden,
                    "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event,
                    label: "\u6682\u4E0D\u4E0A\u67B6 (\u9690\u85CF)"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "text-xs text-gray-500" }, "\u6392\u5E8F\u6743\u91CD\uFF1A"),
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.order,
                      "onUpdate:modelValue": ($event) => editingItem.value.order = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      class: "w-24",
                      size: "xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              size: "sm",
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
              loading: saving.value,
              size: "sm",
              onClick: saveEditItem
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u5E76\u540C\u6B65\u81F3\u6570\u636E\u5E93 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u540C\u6B65\u81F3\u6570\u636E\u5E93 ")
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
                  size: "sm",
                  onClick: ($event) => isEditModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  loading: saving.value,
                  size: "sm",
                  onClick: saveEditItem
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u540C\u6B65\u81F3\u6570\u636E\u5E93 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isDeleteModalOpen.value,
        "onUpdate:open": ($event) => isDeleteModalOpen.value = $event,
        title: "\u786E\u8BA4\u5220\u9664\u5B9E\u6218\u9879\u76EE",
        ui: { content: "max-w-md sm:max-w-md" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(`<div class="flex items-start gap-3 py-2"${_scopeId}><div class="p-2 rounded-full bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-circle-bold",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1.5 text-xs text-gray-600 dark:text-gray-300"${_scopeId}><p class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}> \u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5B9E\u6218\u9879\u76EE\u5417\uFF1F </p><p${_scopeId}> \u5373\u5C06\u5220\u9664\u9879\u76EE <span class="font-semibold text-gray-900 dark:text-white font-mono"${_scopeId}>\u201C${ssrInterpolate((_a2 = itemToDelete.value) == null ? void 0 : _a2.name)}\u201D</span>\uFF08${ssrInterpolate((_b2 = itemToDelete.value) == null ? void 0 : _b2.id)}\uFF09\u3002 </p><p class="text-red-500 dark:text-red-400"${_scopeId}> \u6B64\u64CD\u4F5C\u5C06\u76F4\u63A5\u4ECE \`hoxi_projects\` \u6570\u636E\u5E93\u4E2D\u6C38\u4E45\u79FB\u9664\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002 </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-start gap-3 py-2" }, [
                createVNode("div", { class: "p-2 rounded-full bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 shrink-0" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:warning-circle-bold",
                    class: "w-6 h-6"
                  })
                ]),
                createVNode("div", { class: "space-y-1.5 text-xs text-gray-600 dark:text-gray-300" }, [
                  createVNode("p", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, " \u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5B9E\u6218\u9879\u76EE\u5417\uFF1F "),
                  createVNode("p", null, [
                    createTextVNode(" \u5373\u5C06\u5220\u9664\u9879\u76EE "),
                    createVNode("span", { class: "font-semibold text-gray-900 dark:text-white font-mono" }, "\u201C" + toDisplayString((_c = itemToDelete.value) == null ? void 0 : _c.name) + "\u201D", 1),
                    createTextVNode("\uFF08" + toDisplayString((_d = itemToDelete.value) == null ? void 0 : _d.id) + "\uFF09\u3002 ", 1)
                  ]),
                  createVNode("p", { class: "text-red-500 dark:text-red-400" }, " \u6B64\u64CD\u4F5C\u5C06\u76F4\u63A5\u4ECE `hoxi_projects` \u6570\u636E\u5E93\u4E2D\u6C38\u4E45\u79FB\u9664\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002 ")
                ])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: ($event) => isDeleteModalOpen.value = false
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
              color: "error",
              size: "sm",
              icon: "ph:trash",
              loading: saving.value,
              onClick: confirmDelete
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u786E\u8BA4\u5220\u9664 `);
                } else {
                  return [
                    createTextVNode(" \u786E\u8BA4\u5220\u9664 ")
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
                  size: "sm",
                  onClick: ($event) => isDeleteModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "error",
                  size: "sm",
                  icon: "ph:trash",
                  loading: saving.value,
                  onClick: confirmDelete
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u786E\u8BA4\u5220\u9664 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
