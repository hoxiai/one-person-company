import { _ as _sfc_main$1 } from './Alert-IcedS2f6.mjs';
import { _ as _sfc_main$2 } from './Card-jMFP8cqX.mjs';
import { g as useToast, d as _sfc_main$i, o as _sfc_main$h, b as _sfc_main$E, n as _sfc_main$v, k as _sfc_main$z, p as _sfc_main$q, c as _sfc_main$j, O as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$3 } from './Checkbox-BmTSvkxP.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import { d as defaultHoxiTools } from './tools-DBum00wX.mjs';
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
  __name: "tools",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const saving = ref(false);
    const errorMsg = ref("");
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const list = ref([]);
    const categoryOptions = [
      { label: "\u5168\u90E8\u5206\u7C7B", value: "all" },
      { label: "AI \u751F\u4EA7\u529B", value: "ai" },
      { label: "\u6781\u7B80\u5168\u6808\u90E8\u7F72", value: "deploy" },
      { label: "\u51FA\u6D77\u5168\u7403\u6536\u6B3E", value: "payment" },
      { label: "\u57DF\u540D\u4E0E\u7F51\u7EDC", value: "domain" },
      { label: "\u521B\u4F5C\u4E0E\u6548\u7387", value: "media" },
      { label: "\u5176\u4ED6\u5DE5\u5177", value: "other" }
    ];
    const categorySelectOptions = [
      { label: "AI \u751F\u4EA7\u529B (ai)", value: "ai" },
      { label: "\u6781\u7B80\u5168\u6808\u90E8\u7F72 (deploy)", value: "deploy" },
      { label: "\u51FA\u6D77\u5168\u7403\u6536\u6B3E (payment)", value: "payment" },
      { label: "\u57DF\u540D\u4E0E\u7F51\u7EDC (domain)", value: "domain" },
      { label: "\u521B\u4F5C\u4E0E\u6548\u7387 (media)", value: "media" },
      { label: "\u5176\u4ED6\u5DE5\u5177 (other)", value: "other" }
    ];
    const categoryMap = {
      ai: "AI \u751F\u4EA7\u529B",
      deploy: "\u6781\u7B80\u5168\u6808\u90E8\u7F72",
      payment: "\u51FA\u6D77\u5168\u7403\u6536\u6B3E",
      domain: "\u57DF\u540D\u4E0E\u7F51\u7EDC",
      media: "\u521B\u4F5C\u4E0E\u6548\u7387",
      other: "\u5176\u4ED6\u5DE5\u5177"
    };
    const badgeToneOptions = [
      { label: "\u7FE1\u7FE0\u7EFF (\u63A8\u8350 positive)", value: "positive" },
      { label: "\u4FE1\u606F\u84DD (\u5E38\u89C4 info)", value: "info" },
      { label: "\u7425\u73C0\u6A59 (\u63D0\u793A warning)", value: "warning" },
      { label: "\u4E2D\u6027\u7070 (neutral)", value: "neutral" }
    ];
    const onCategoryChange = () => {
      if (editingItem.value) {
        editingItem.value.categoryLabel = categoryMap[editingItem.value.category] || "\u5176\u4ED6\u5DE5\u5177";
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
          (item) => item.name && item.name.toLowerCase().includes(q) || item.id && item.id.toLowerCase().includes(q) || item.description && item.description.toLowerCase().includes(q) || item.badge && item.badge.toLowerCase().includes(q)
        );
      }
      return result;
    });
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const openAddModal = () => {
      isEditingNew.value = true;
      editingItem.value = {
        id: `tool-${Date.now()}`,
        name: "",
        category: "ai",
        categoryLabel: "AI \u751F\u4EA7\u529B",
        description: "",
        url: "",
        affiliateUrl: "",
        badge: "\u4E00\u4EBA\u516C\u53F8\u6807\u914D",
        badgeTone: "positive",
        icon: "ph:wrench-bold",
        pricing: "\u514D\u8D39\u8D77\u6B65",
        order: (list.value.length + 1) * 10,
        hidden: false
      };
      isEditModalOpen.value = true;
    };
    const openEditModal = (item) => {
      isEditingNew.value = false;
      editingItem.value = JSON.parse(JSON.stringify(item));
      isEditModalOpen.value = true;
    };
    const saveEditItem = () => {
      if (!editingItem.value) return;
      if (!editingItem.value.id.trim() || !editingItem.value.name.trim() || !editingItem.value.url.trim()) {
        toast.add({ title: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u5DE5\u5177 ID\u3001\u540D\u79F0\u4E0E\u5B98\u7F51\u94FE\u63A5", color: "warning" });
        return;
      }
      editingItem.value.categoryLabel = categoryMap[editingItem.value.category] || "\u5176\u4ED6\u5DE5\u5177";
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
    };
    const deleteItem = (item) => {
      if (confirm(`\u786E\u5B9A\u8981\u5220\u9664\u5DE5\u5177 "${item.name}" \u5417\uFF1F`)) {
        list.value = list.value.filter((i) => i.id !== item.id);
      }
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
      list.value = defaultHoxiTools.map((t) => ({ ...t }));
      toast.add({ title: "\u5DF2\u6062\u590D\u9ED8\u8BA4\u63A8\u8350\u5DE5\u5177\uFF0C\u70B9\u51FB\u4FDD\u5B58\u540E\u5199\u5165\u6570\u636E\u5E93", color: "info" });
    };
    const save = async () => {
      saving.value = true;
      try {
        const sanitized = list.value.map((item, idx) => ({
          ...item,
          order: Number(item.order) || (idx + 1) * 10,
          hidden: Boolean(item.hidden)
        }));
        await $fetch("/api/admin/hoxi/tools", {
          method: "POST",
          body: {
            tools: sanitized
          }
        });
        toast.add({ title: "\u4E00\u4EBA\u516C\u53F8\u5DE5\u5177\u7BB1\u6570\u636E\u8868\u5DF2\u66F4\u65B0\uFF0C\u524D\u53F0\u5373\u65F6\u751F\u6548", color: "success" });
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
      var _a;
      const _component_UAlert = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      const _component_UIcon = _sfc_main$E;
      const _component_UButton = _sfc_main$z;
      const _component_UInput = _sfc_main$i;
      const _component_USelect = _sfc_main$h;
      const _component_UBadge = _sfc_main$v;
      const _component_UModal = _sfc_main$q;
      const _component_UFormField = _sfc_main$j;
      const _component_UTextarea = _sfc_main$e;
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
              name: "ph:wrench",
              class: "w-5 h-5 text-amber-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u4E00\u4EBA\u516C\u53F8\u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1\u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u81F3 \`hoxi_tools\` \u6570\u636E\u8868\u3002\u652F\u6301\u589E\u5220\u51FA\u6D77\u4E0E\u72EC\u7ACB\u5F00\u53D1\u5FC5\u5907\u5DE5\u5177\u3001\u7AD9\u957F\u8BC4\u8BED\u3001\u5B98\u7F51\u76F4\u8FBE\u4E0E\u4E13\u5C5E\u8FD4\u4F63\u94FE\u63A5\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
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
                  _push3(` \u65B0\u589E\u5DE5\u5177 `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u5DE5\u5177 ")
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
                      name: "ph:wrench",
                      class: "w-5 h-5 text-amber-500"
                    }),
                    createVNode("span", null, "\u4E00\u4EBA\u516C\u53F8\u6781\u7B80\u5168\u6808\u5DE5\u5177\u7BB1\u7BA1\u7406")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " \u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u81F3 `hoxi_tools` \u6570\u636E\u8868\u3002\u652F\u6301\u589E\u5220\u51FA\u6D77\u4E0E\u72EC\u7ACB\u5F00\u53D1\u5FC5\u5907\u5DE5\u5177\u3001\u7AD9\u957F\u8BC4\u8BED\u3001\u5B98\u7F51\u76F4\u8FBE\u4E0E\u4E13\u5C5E\u8FD4\u4F63\u94FE\u63A5\u3002 ")
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
                      createTextVNode(" \u65B0\u589E\u5DE5\u5177 ")
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
              placeholder: "\u6309\u5DE5\u5177\u540D / \u5206\u7C7B / \u63CF\u8FF0\u641C\u7D22...",
              size: "sm",
              class: "w-64"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedCategory.value,
              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
              options: categoryOptions,
              size: "sm",
              class: "w-40"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xs text-gray-500"${_scopeId}> \u5171 ${ssrInterpolate(list.value.length)} \u6B3E\u5DE5\u5177 \xB7 \u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u6B3E </div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="w-12 px-3 py-3 text-center"${_scopeId}>\u6392\u5E8F</th><th class="px-3 py-3"${_scopeId}>\u5DE5\u5177\u540D\u79F0 / ID</th><th class="px-3 py-3"${_scopeId}>\u5206\u7C7B</th><th class="px-3 py-3"${_scopeId}>\u6536\u8D39\u6A21\u5F0F</th><th class="px-3 py-3"${_scopeId}>\u63A8\u8350\u6807\u7B7E</th><th class="px-3 py-3"${_scopeId}>\u63A8\u8350/\u8FD4\u4F63\u94FE\u63A5</th><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u72B6\u6001</th><th class="w-28 px-3 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item, index) => {
              var _a2;
              _push2(`<tr class="${ssrRenderClass([{ "opacity-50": item.hidden }, "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="px-3 py-3 text-center font-mono"${_scopeId}><div class="flex items-center justify-center gap-1"${_scopeId}><button type="button" class="p-0.5 hover:text-blue-600 disabled:opacity-30"${ssrIncludeBooleanAttr(index === 0) ? " disabled" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-up",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</button><span class="text-gray-400 text-[11px]"${_scopeId}>${ssrInterpolate((_a2 = item.order) != null ? _a2 : index + 1)}</span><button type="button" class="p-0.5 hover:text-blue-600 disabled:opacity-30"${ssrIncludeBooleanAttr(index === filteredList.value.length - 1) ? " disabled" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-down",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></td><td class="px-3 py-3"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon || "ph:wrench",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><div class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.name)}</span></div><div class="text-[11px] text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(item.id)}</div></div></div></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.categoryLabel)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.categoryLabel), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}><span class="font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(item.pricing || "\u514D\u8D39\u8D77\u6B65")}</span></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}>`);
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
                _push2(`<span class="text-gray-400"${_scopeId}>\u2014</span>`);
              }
              _push2(`</td><td class="px-3 py-3 max-w-xs truncate"${_scopeId}><a${ssrRenderAttr("href", item.affiliateUrl || item.url)} target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 truncate"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(item.affiliateUrl ? "\u2B50 " + item.affiliateUrl : item.url)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-square-out",
                class: "w-3 h-3 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`</a></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}>`);
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
                onClick: ($event) => deleteItem(item)
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
                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                  createVNode(_component_UInput, {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    icon: "ph:magnifying-glass",
                    placeholder: "\u6309\u5DE5\u5177\u540D / \u5206\u7C7B / \u63CF\u8FF0\u641C\u7D22...",
                    size: "sm",
                    class: "w-64"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelect, {
                    modelValue: selectedCategory.value,
                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                    options: categoryOptions,
                    size: "sm",
                    class: "w-40"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "text-xs text-gray-500" }, " \u5171 " + toDisplayString(list.value.length) + " \u6B3E\u5DE5\u5177 \xB7 \u663E\u793A " + toDisplayString(filteredList.value.length) + " \u6B3E ", 1)
              ]),
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "w-12 px-3 py-3 text-center" }, "\u6392\u5E8F"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5DE5\u5177\u540D\u79F0 / ID"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5206\u7C7B"),
                      createVNode("th", { class: "px-3 py-3" }, "\u6536\u8D39\u6A21\u5F0F"),
                      createVNode("th", { class: "px-3 py-3" }, "\u63A8\u8350\u6807\u7B7E"),
                      createVNode("th", { class: "px-3 py-3" }, "\u63A8\u8350/\u8FD4\u4F63\u94FE\u63A5"),
                      createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u72B6\u6001"),
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
                            createVNode("span", { class: "text-gray-400 text-[11px]" }, toDisplayString((_a2 = item.order) != null ? _a2 : index + 1), 1),
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
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", { class: "flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200" }, [
                              createVNode(_component_UIcon, {
                                name: item.icon || "ph:wrench",
                                class: "w-4 h-4"
                              }, null, 8, ["name"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                                createVNode("span", null, toDisplayString(item.name), 1)
                              ]),
                              createVNode("div", { class: "text-[11px] text-gray-400 font-mono" }, toDisplayString(item.id), 1)
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
                              createTextVNode(toDisplayString(item.categoryLabel), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
                          createVNode("span", { class: "font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(item.pricing || "\u514D\u8D39\u8D77\u6B65"), 1)
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
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
                          }, 1032, ["color"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-400"
                          }, "\u2014"))
                        ]),
                        createVNode("td", { class: "px-3 py-3 max-w-xs truncate" }, [
                          createVNode("a", {
                            href: item.affiliateUrl || item.url,
                            target: "_blank",
                            rel: "noopener",
                            class: "text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 truncate"
                          }, [
                            createVNode("span", { class: "truncate" }, toDisplayString(item.affiliateUrl ? "\u2B50 " + item.affiliateUrl : item.url), 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-square-out",
                              class: "w-3 h-3 shrink-0"
                            })
                          ], 8, ["href"])
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
                              onClick: ($event) => deleteItem(item)
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
        title: isEditingNew.value ? "\u65B0\u589E\u63A8\u8350\u5DE5\u5177" : `\u7F16\u8F91\u5DE5\u5177: ${(_a = editingItem.value) == null ? void 0 : _a.name}`
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (editingItem.value) {
              _push2(`<div class="space-y-4 py-2"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5DE5\u5177\u552F\u4E00 ID (Slug)",
                required: "",
                help: "\u5C0F\u5199\u5B57\u6BCD\u4E0E\u6A2A\u6760\uFF0C\u5982 cursor"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.id,
                      "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                      placeholder: "\u5982 cursor",
                      disabled: !isEditingNew.value,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u5982 cursor",
                        disabled: !isEditingNew.value,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5DE5\u5177\u663E\u793A\u540D\u79F0",
                required: "",
                help: "\u5982 Cursor \u6216 Vercel"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                      placeholder: "\u5982 Cursor",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u5982 Cursor",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6240\u5C5E\u5206\u7C7B",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.category,
                      "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                      options: categorySelectOptions,
                      class: "w-full",
                      onChange: onCategoryChange
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.category,
                        "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                        options: categorySelectOptions,
                        class: "w-full",
                        onChange: onCategoryChange
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6536\u8D39\u6A21\u5F0F / \u4EF7\u683C",
                help: "\u5982\uFF1A\u514D\u8D39\u8D77\u6B65 / $20\u6708 \u6216 500MB\u514D\u8D39"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.pricing,
                      "onUpdate:modelValue": ($event) => editingItem.value.pricing = $event,
                      placeholder: "\u5982\uFF1A\u514D\u8D39\u8D77\u6B65",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.pricing,
                        "onUpdate:modelValue": ($event) => editingItem.value.pricing = $event,
                        placeholder: "\u5982\uFF1A\u514D\u8D39\u8D77\u6B65",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5B98\u7F51\u76F4\u8FBE\u94FE\u63A5 (URL)",
                required: "",
                help: "\u6807\u51C6\u5B98\u7F51\u5730\u5740\uFF0C\u5982 https://cursor.com"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.url,
                      "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                      placeholder: "https://...",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.url,
                        "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                        placeholder: "https://...",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u4E13\u5C5E\u8FD4\u4F63/\u9080\u8BF7\u94FE\u63A5 (Affiliate URL)",
                help: "\u9009\u586B\u3002\u82E5\u586B\u5199\uFF0C\u524D\u53F0\u6309\u94AE\u4F18\u5148\u8DF3\u8F6C\u6B64\u94FE\u63A5\u4EE5\u83B7\u53D6\u63A8\u8350\u5206\u6210"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.affiliateUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.affiliateUrl = $event,
                      placeholder: "\u5982 https://...?ref=coller",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.affiliateUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.affiliateUrl = $event,
                        placeholder: "\u5982 https://...?ref=coller",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u7AD9\u957F\u70B9\u8BC4 / \u4E3A\u4EC0\u4E48\u63A8\u8350",
                required: "",
                help: "\u4EE5\u53EF\u4E50\u5927\u767D\u8BDD\u89C6\u89D2\u5199 1~2 \u53E5\u771F\u8BDA\u63A8\u8350\u8BED"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingItem.value.description,
                      "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                      rows: 3,
                      placeholder: "\u5982\uFF1A\u4E00\u4EBA\u516C\u53F8\u5FC5\u5907\u7684 AI \u7F16\u7A0B\u7F16\u8F91\u5668\uFF0C\u539F\u751F\u96C6\u6210\u591A\u6A21\u578B\u4E0E Agent \u4EE3\u7801\u91CD\u6784\u3002",
                      class: "w-full text-sm"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.description,
                        "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                        rows: 3,
                        placeholder: "\u5982\uFF1A\u4E00\u4EBA\u516C\u53F8\u5FC5\u5907\u7684 AI \u7F16\u7A0B\u7F16\u8F91\u5668\uFF0C\u539F\u751F\u96C6\u6210\u591A\u6A21\u578B\u4E0E Agent \u4EE3\u7801\u91CD\u6784\u3002",
                        class: "w-full text-sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u63A8\u8350\u5FBD\u7AE0\u6587\u5B57",
                help: "\u5982\uFF1A\u4E00\u4EBA\u516C\u53F8\u6807\u914D"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.badge,
                      "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                      placeholder: "\u5982 \u4E00\u4EBA\u516C\u53F8\u6807\u914D",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u5982 \u4E00\u4EBA\u516C\u53F8\u6807\u914D",
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
                      options: badgeToneOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.badgeTone,
                        "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                        options: badgeToneOptions,
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
                      placeholder: "\u5982 ph:code-bold",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.icon,
                        "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                        placeholder: "\u5982 ph:code-bold",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.hidden,
                "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u6682\u4E0D\u5C55\u793A\uFF08\u9690\u85CF/\u4E0B\u67B6\uFF09</span></label><div class="flex items-center gap-2"${_scopeId}><span class="text-xs text-gray-500"${_scopeId}>\u6392\u5E8F\u6743\u91CD\uFF1A</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: editingItem.value.order,
                "onUpdate:modelValue": ($event) => editingItem.value.order = $event,
                modelModifiers: { number: true },
                type: "number",
                class: "w-20",
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
                    label: "\u5DE5\u5177\u552F\u4E00 ID (Slug)",
                    required: "",
                    help: "\u5C0F\u5199\u5B57\u6BCD\u4E0E\u6A2A\u6760\uFF0C\u5982 cursor"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u5982 cursor",
                        disabled: !isEditingNew.value,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u5DE5\u5177\u663E\u793A\u540D\u79F0",
                    required: "",
                    help: "\u5982 Cursor \u6216 Vercel"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u5982 Cursor",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u6240\u5C5E\u5206\u7C7B",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.category,
                        "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                        options: categorySelectOptions,
                        class: "w-full",
                        onChange: onCategoryChange
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u6536\u8D39\u6A21\u5F0F / \u4EF7\u683C",
                    help: "\u5982\uFF1A\u514D\u8D39\u8D77\u6B65 / $20\u6708 \u6216 500MB\u514D\u8D39"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.pricing,
                        "onUpdate:modelValue": ($event) => editingItem.value.pricing = $event,
                        placeholder: "\u5982\uFF1A\u514D\u8D39\u8D77\u6B65",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u5B98\u7F51\u76F4\u8FBE\u94FE\u63A5 (URL)",
                  required: "",
                  help: "\u6807\u51C6\u5B98\u7F51\u5730\u5740\uFF0C\u5982 https://cursor.com"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.url,
                      "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                      placeholder: "https://...",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "\u4E13\u5C5E\u8FD4\u4F63/\u9080\u8BF7\u94FE\u63A5 (Affiliate URL)",
                  help: "\u9009\u586B\u3002\u82E5\u586B\u5199\uFF0C\u524D\u53F0\u6309\u94AE\u4F18\u5148\u8DF3\u8F6C\u6B64\u94FE\u63A5\u4EE5\u83B7\u53D6\u63A8\u8350\u5206\u6210"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.affiliateUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.affiliateUrl = $event,
                      placeholder: "\u5982 https://...?ref=coller",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "\u7AD9\u957F\u70B9\u8BC4 / \u4E3A\u4EC0\u4E48\u63A8\u8350",
                  required: "",
                  help: "\u4EE5\u53EF\u4E50\u5927\u767D\u8BDD\u89C6\u89D2\u5199 1~2 \u53E5\u771F\u8BDA\u63A8\u8350\u8BED"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: editingItem.value.description,
                      "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                      rows: 3,
                      placeholder: "\u5982\uFF1A\u4E00\u4EBA\u516C\u53F8\u5FC5\u5907\u7684 AI \u7F16\u7A0B\u7F16\u8F91\u5668\uFF0C\u539F\u751F\u96C6\u6210\u591A\u6A21\u578B\u4E0E Agent \u4EE3\u7801\u91CD\u6784\u3002",
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u63A8\u8350\u5FBD\u7AE0\u6587\u5B57",
                    help: "\u5982\uFF1A\u4E00\u4EBA\u516C\u53F8\u6807\u914D"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u5982 \u4E00\u4EBA\u516C\u53F8\u6807\u914D",
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
                        options: badgeToneOptions,
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
                        placeholder: "\u5982 ph:code-bold",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode("label", { class: "flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer" }, [
                    createVNode(_component_UCheckbox, {
                      modelValue: editingItem.value.hidden,
                      "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", null, "\u6682\u4E0D\u5C55\u793A\uFF08\u9690\u85CF/\u4E0B\u67B6\uFF09")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "text-xs text-gray-500" }, "\u6392\u5E8F\u6743\u91CD\uFF1A"),
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.order,
                      "onUpdate:modelValue": ($event) => editingItem.value.order = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      class: "w-20",
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
              onClick: saveEditItem
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u8BA4\u5E76\u5E94\u7528\u5230\u5217\u8868`);
                } else {
                  return [
                    createTextVNode("\u786E\u8BA4\u5E76\u5E94\u7528\u5230\u5217\u8868")
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
                  onClick: saveEditItem
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u786E\u8BA4\u5E76\u5E94\u7528\u5230\u5217\u8868")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/tools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
