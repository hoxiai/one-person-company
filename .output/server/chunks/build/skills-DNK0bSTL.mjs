import { e as useToast, v as _sfc_main$q, G as _sfc_main$p, b as _sfc_main$A, _ as _sfc_main$Y, k as _sfc_main$O, i as _sfc_main$T, n as _sfc_main$I, a as _sfc_main$w, l as _sfc_main$v, c as _sfc_main$s, B as _sfc_main$l } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import { d as defaultHoxiSkills } from './skills-D-3yZZph.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const saving = ref(false);
    const errorMsg = ref("");
    const searchQuery = ref("");
    const list = ref([]);
    const categorySelectOptions = [
      { label: "\u6280\u80FD\u521B\u4F5C (authoring)", value: "authoring" },
      { label: "\u7EBF\u4E0A\u8FD0\u7EF4 (ops)", value: "ops" },
      { label: "\u5F00\u53D1\u534F\u4F5C (dev)", value: "dev" },
      { label: "\u7814\u7A76\u68C0\u7D22 (research)", value: "research" },
      { label: "\u5176\u4ED6 (other)", value: "other" }
    ];
    const categoryMap = {
      authoring: "\u6280\u80FD\u521B\u4F5C",
      ops: "\u7EBF\u4E0A\u8FD0\u7EF4",
      dev: "\u5F00\u53D1\u534F\u4F5C",
      research: "\u7814\u7A76\u68C0\u7D22",
      other: "\u5176\u4ED6"
    };
    const runtimeOptions = [{ label: "OpenCode", value: "opencode" }];
    const filteredList = computed(() => {
      const q = searchQuery.value.trim().toLowerCase();
      if (!q) return list.value;
      return list.value.filter(
        (item) => item.name && item.name.toLowerCase().includes(q) || item.slug && item.slug.toLowerCase().includes(q) || item.description && item.description.toLowerCase().includes(q) || item.categoryLabel && item.categoryLabel.toLowerCase().includes(q)
      );
    });
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const highlightsText = ref("");
    const syncHighlights = (item) => {
      highlightsText.value = Array.isArray(item == null ? void 0 : item.highlights) ? item.highlights.join("\n") : "";
    };
    const openAddModal = () => {
      isEditingNew.value = true;
      editingItem.value = {
        slug: "",
        name: "",
        description: "",
        category: "other",
        categoryLabel: "\u5176\u4ED6",
        author: "Hoxi",
        version: "1.0.0",
        runtime: "opencode",
        contentUrl: "",
        contentSha256: "",
        badge: "",
        badgeTone: "neutral",
        icon: "ph:sparkle",
        highlights: [],
        order: (list.value.length + 1) * 10,
        hidden: false
      };
      syncHighlights(editingItem.value);
      isEditModalOpen.value = true;
    };
    const openEditModal = (item) => {
      isEditingNew.value = false;
      editingItem.value = JSON.parse(JSON.stringify(item));
      syncHighlights(editingItem.value);
      isEditModalOpen.value = true;
    };
    const onCategoryChange = () => {
      if (editingItem.value) {
        editingItem.value.categoryLabel = categoryMap[editingItem.value.category] || "\u5176\u4ED6";
      }
    };
    const saveEditItem = () => {
      const item = editingItem.value;
      if (!item) return;
      if (!item.slug.trim() || !item.name.trim() || !item.contentUrl.trim()) {
        toast.add({ title: "\u8BF7\u586B\u5199 Slug\u3001\u6280\u80FD\u540D\u4E0E\u6B63\u6587\u5730\u5740", color: "warning" });
        return;
      }
      if (!/^[a-f0-9]{64}$/.test(item.contentSha256.trim())) {
        toast.add({ title: "\u6B63\u6587\u6458\u8981\u5FC5\u987B\u662F 64 \u4F4D\u5C0F\u5199 hex", color: "warning" });
        return;
      }
      item.slug = item.slug.trim();
      item.name = item.name.trim();
      item.categoryLabel = categoryMap[item.category] || "\u5176\u4ED6";
      item.highlights = highlightsText.value.split("\n").map((line) => line.trim()).filter(Boolean);
      if (isEditingNew.value) {
        list.value.unshift(item);
      } else {
        const idx = list.value.findIndex((i) => i.slug === item.slug);
        if (idx !== -1) list.value[idx] = item;
      }
      isEditModalOpen.value = false;
    };
    const removeItem = async (item) => {
      list.value = list.value.filter((i) => i.slug !== item.slug);
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
      list.value = defaultHoxiSkills.map((item) => ({ ...item }));
      toast.add({ title: "\u5DF2\u6062\u590D\u9ED8\u8BA4\u6280\u80FD\u5E93\uFF0C\u70B9\u51FB\u4FDD\u5B58\u540E\u5199\u5165\u6570\u636E\u5E93", color: "info" });
    };
    const save = async () => {
      saving.value = true;
      try {
        const sanitized = list.value.map((item, idx) => ({
          ...item,
          order: Number(item.order) || (idx + 1) * 10,
          hidden: Boolean(item.hidden)
        }));
        await $fetch("/api/admin/hoxi/skills", {
          method: "POST",
          body: { skills: sanitized }
        });
        toast.add({ title: "\u6280\u80FD\u5E93\u5DF2\u66F4\u65B0\uFF0C\u684C\u9762\u7AEF\u5237\u65B0\u7EBF\u4E0A\u5E02\u96C6\u540E\u751F\u6548", color: "success" });
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
      const _component_UAlert = _sfc_main$q;
      const _component_UCard = _sfc_main$p;
      const _component_UIcon = _sfc_main$Y;
      const _component_UButton = _sfc_main$T;
      const _component_UInput = _sfc_main$A;
      const _component_UBadge = _sfc_main$O;
      const _component_UModal = _sfc_main$I;
      const _component_UFormField = _sfc_main$w;
      const _component_USelect = _sfc_main$v;
      const _component_UTextarea = _sfc_main$s;
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
              name: "ph:sparkle",
              class: "w-5 h-5 text-sky-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Agent \u6280\u80FD\u5E93\u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u4F9B Hoxi \u684C\u9762\u7AEF\u300C\u68C0\u67E5\u5668 \u2192 \u6280\u80FD \u2192 \u7EBF\u4E0A\u5E02\u96C6\u300D\u8BFB\u53D6\uFF08\u63A5\u53E3\uFF1A<code class="font-mono text-xs"${_scopeId}>/api/hoxi/skills</code>\uFF09\u3002 \u8FD9\u91CC\u53EA\u53D1\u5E03\u5143\u6570\u636E\uFF1B\u6B63\u6587\u7531 <code class="font-mono text-xs"${_scopeId}>contentUrl</code> \u6307\u5411\u7684 SKILL.md \u63D0\u4F9B\uFF0C\u684C\u9762\u7AEF\u4E0B\u8F7D\u540E\u6309 <code class="font-mono text-xs"${_scopeId}>contentSha256</code> \u6821\u9A8C\u3002\u6458\u8981\u4E0E\u6587\u4EF6\u4E0D\u4E00\u81F4\u65F6\u6784\u5EFA\u5B88\u536B <code class="font-mono text-xs"${_scopeId}>scripts/check-skills.mjs</code> \u4F1A\u76F4\u63A5\u5931\u8D25\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
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
                  _push3(` \u65B0\u589E\u6280\u80FD `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u6280\u80FD ")
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
                      name: "ph:sparkle",
                      class: "w-5 h-5 text-sky-500"
                    }),
                    createVNode("span", null, "Agent \u6280\u80FD\u5E93\u7BA1\u7406")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, [
                    createTextVNode(" \u4F9B Hoxi \u684C\u9762\u7AEF\u300C\u68C0\u67E5\u5668 \u2192 \u6280\u80FD \u2192 \u7EBF\u4E0A\u5E02\u96C6\u300D\u8BFB\u53D6\uFF08\u63A5\u53E3\uFF1A"),
                    createVNode("code", { class: "font-mono text-xs" }, "/api/hoxi/skills"),
                    createTextVNode("\uFF09\u3002 \u8FD9\u91CC\u53EA\u53D1\u5E03\u5143\u6570\u636E\uFF1B\u6B63\u6587\u7531 "),
                    createVNode("code", { class: "font-mono text-xs" }, "contentUrl"),
                    createTextVNode(" \u6307\u5411\u7684 SKILL.md \u63D0\u4F9B\uFF0C\u684C\u9762\u7AEF\u4E0B\u8F7D\u540E\u6309 "),
                    createVNode("code", { class: "font-mono text-xs" }, "contentSha256"),
                    createTextVNode(" \u6821\u9A8C\u3002\u6458\u8981\u4E0E\u6587\u4EF6\u4E0D\u4E00\u81F4\u65F6\u6784\u5EFA\u5B88\u536B "),
                    createVNode("code", { class: "font-mono text-xs" }, "scripts/check-skills.mjs"),
                    createTextVNode(" \u4F1A\u76F4\u63A5\u5931\u8D25\u3002 ")
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
                      createTextVNode(" \u65B0\u589E\u6280\u80FD ")
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
              placeholder: "\u6309\u6280\u80FD\u540D\u3001slug\u3001\u5206\u7C7B\u6216\u63CF\u8FF0\u641C\u7D22...",
              size: "sm",
              class: "w-72"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-xs text-gray-500"${_scopeId}> \u5171 ${ssrInterpolate(list.value.length)} \u4E2A\u6280\u80FD \xB7 \u5F53\u524D\u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u4E2A </div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u6392\u5E8F</th><th class="px-3 py-3"${_scopeId}>\u6280\u80FD\u540D / Slug</th><th class="px-3 py-3"${_scopeId}>\u5206\u7C7B / \u7248\u672C</th><th class="px-3 py-3"${_scopeId}>\u6B63\u6587\u5730\u5740\u4E0E\u6458\u8981</th><th class="px-3 py-3"${_scopeId}>\u72B6\u6001</th><th class="w-28 px-3 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
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
                name: item.icon || "ph:sparkle",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><div class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.name)}</span>`);
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
              _push2(`</div><div class="text-[11px] text-gray-400 font-mono"${_scopeId}>${ssrInterpolate(item.slug)}</div></div></div></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}>`);
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
              _push2(`<div class="mt-1 font-mono text-[11px] text-gray-400"${_scopeId}>v${ssrInterpolate(item.version)} \xB7 ${ssrInterpolate(item.runtime)}</div></td><td class="px-3 py-3 max-w-xs"${_scopeId}><div class="truncate font-mono text-[11px] text-gray-500"${ssrRenderAttr("title", item.contentUrl)}${_scopeId}>${ssrInterpolate(item.contentUrl)}</div><div class="truncate font-mono text-[11px] text-gray-400"${ssrRenderAttr("title", item.contentSha256)}${_scopeId}>${ssrInterpolate(item.contentSha256)}</div></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}>`);
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
                onClick: ($event) => removeItem(item)
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
                  placeholder: "\u6309\u6280\u80FD\u540D\u3001slug\u3001\u5206\u7C7B\u6216\u63CF\u8FF0\u641C\u7D22...",
                  size: "sm",
                  class: "w-72"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "text-xs text-gray-500" }, " \u5171 " + toDisplayString(list.value.length) + " \u4E2A\u6280\u80FD \xB7 \u5F53\u524D\u663E\u793A " + toDisplayString(filteredList.value.length) + " \u4E2A ", 1)
              ]),
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u6392\u5E8F"),
                      createVNode("th", { class: "px-3 py-3" }, "\u6280\u80FD\u540D / Slug"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5206\u7C7B / \u7248\u672C"),
                      createVNode("th", { class: "px-3 py-3" }, "\u6B63\u6587\u5730\u5740\u4E0E\u6458\u8981"),
                      createVNode("th", { class: "px-3 py-3" }, "\u72B6\u6001"),
                      createVNode("th", { class: "w-28 px-3 py-3 text-right" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item, index) => {
                      var _a2;
                      return openBlock(), createBlock("tr", {
                        key: item.slug,
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
                                name: item.icon || "ph:sparkle",
                                class: "w-4 h-4"
                              }, null, 8, ["name"])
                            ]),
                            createVNode("div", null, [
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
                              createVNode("div", { class: "text-[11px] text-gray-400 font-mono" }, toDisplayString(item.slug), 1)
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
                          }, 1024),
                          createVNode("div", { class: "mt-1 font-mono text-[11px] text-gray-400" }, "v" + toDisplayString(item.version) + " \xB7 " + toDisplayString(item.runtime), 1)
                        ]),
                        createVNode("td", { class: "px-3 py-3 max-w-xs" }, [
                          createVNode("div", {
                            class: "truncate font-mono text-[11px] text-gray-500",
                            title: item.contentUrl
                          }, toDisplayString(item.contentUrl), 9, ["title"]),
                          createVNode("div", {
                            class: "truncate font-mono text-[11px] text-gray-400",
                            title: item.contentSha256
                          }, toDisplayString(item.contentSha256), 9, ["title"])
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
                              onClick: ($event) => removeItem(item)
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
        title: isEditingNew.value ? "\u65B0\u589E\u6280\u80FD" : `\u7F16\u8F91\u6280\u80FD: ${(_a = editingItem.value) == null ? void 0 : _a.name}`
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (editingItem.value) {
              _push2(`<div class="space-y-4 py-2"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "Slug\uFF08\u76EE\u5F55\u540D\uFF09",
                required: "",
                help: "\u5C0F\u5199\u5B57\u6BCD\u4E0E\u5355\u8FDE\u5B57\u7B26\uFF0C\u987B\u4E0E SKILL.md \u7684 name \u4E00\u81F4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.slug,
                      "onUpdate:modelValue": ($event) => editingItem.value.slug = $event,
                      placeholder: "\u5982 skill-authoring",
                      disabled: !isEditingNew.value,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.slug,
                        "onUpdate:modelValue": ($event) => editingItem.value.slug = $event,
                        placeholder: "\u5982 skill-authoring",
                        disabled: !isEditingNew.value,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6280\u80FD\u540D",
                required: "",
                help: "\u901A\u5E38\u4E0E slug \u76F8\u540C"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                      placeholder: "\u5982 skill-authoring",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u5982 skill-authoring",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5206\u7C7B",
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
                label: "\u7248\u672C",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.version,
                      "onUpdate:modelValue": ($event) => editingItem.value.version = $event,
                      placeholder: "1.0.0",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.version,
                        "onUpdate:modelValue": ($event) => editingItem.value.version = $event,
                        placeholder: "1.0.0",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u8FD0\u884C\u65F6" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.runtime,
                      "onUpdate:modelValue": ($event) => editingItem.value.runtime = $event,
                      options: runtimeOptions,
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.runtime,
                        "onUpdate:modelValue": ($event) => editingItem.value.runtime = $event,
                        options: runtimeOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6B63\u6587\u5730\u5740 (contentUrl)",
                required: "",
                help: "\u7AD9\u5185\u7528 /skills/<slug>/SKILL.md\uFF1B\u7AD9\u5916\u53EA\u5141\u8BB8 hoxi.ai\u3001GitHub \u4E0E jsDelivr"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.contentUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.contentUrl = $event,
                      placeholder: "/themes/hoxi/skills/xxx/SKILL.md",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.contentUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.contentUrl = $event,
                        placeholder: "/themes/hoxi/skills/xxx/SKILL.md",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6B63\u6587\u6458\u8981 (contentSha256)",
                required: "",
                help: "SKILL.md \u7684 64 \u4F4D\u5C0F\u5199 hex\uFF0C\u5FC5\u987B\u9010\u5B57\u8282\u4E00\u81F4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.contentSha256,
                      "onUpdate:modelValue": ($event) => editingItem.value.contentSha256 = $event,
                      placeholder: "64 \u4F4D hex",
                      class: "w-full font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.contentSha256,
                        "onUpdate:modelValue": ($event) => editingItem.value.contentSha256 = $event,
                        placeholder: "64 \u4F4D hex",
                        class: "w-full font-mono text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u63CF\u8FF0 (description)",
                required: "",
                help: "\u5199\u6E05\u7528\u9014\u4E0E\u89E6\u53D1\u573A\u666F\uFF0C\u6700\u591A 1024 \u5B57\u7B26"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingItem.value.description,
                      "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                      rows: 3,
                      class: "w-full text-sm"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.description,
                        "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                        rows: 3,
                        class: "w-full text-sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4F5C\u8005" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.author,
                      "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                      placeholder: "Hoxi",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.author,
                        "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                        placeholder: "Hoxi",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5FBD\u7AE0" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.badge,
                      "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                      placeholder: "\u5982 \u5B98\u65B9",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u5982 \u5B98\u65B9",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u56FE\u6807" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.icon,
                      "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                      placeholder: "ph:sparkle",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.icon,
                        "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                        placeholder: "ph:sparkle",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u6E90\u7801\u5730\u5740 (repoUrl)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.repoUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.repoUrl = $event,
                      placeholder: "https://github.com/...",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.repoUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.repoUrl = $event,
                        placeholder: "https://github.com/...",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4E3B\u9875\u5730\u5740 (homepageUrl)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.homepageUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.homepageUrl = $event,
                      placeholder: "https://hoxi.ai/skills",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.homepageUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.homepageUrl = $event,
                        placeholder: "https://hoxi.ai/skills",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u73AF\u5883\u8981\u6C42 (compatibility)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.compatibility,
                      "onUpdate:modelValue": ($event) => editingItem.value.compatibility = $event,
                      placeholder: "\u5982 \u9700\u8981\u8BBF\u95EE\u76EE\u6807\u4ED3\u5E93\u4E0E\u53D7\u63A7\u8282\u70B9",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.compatibility,
                        "onUpdate:modelValue": ($event) => editingItem.value.compatibility = $event,
                        placeholder: "\u5982 \u9700\u8981\u8BBF\u95EE\u76EE\u6807\u4ED3\u5E93\u4E0E\u53D7\u63A7\u8282\u70B9",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4EAE\u70B9\uFF08\u6BCF\u884C\u4E00\u6761\uFF09" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: highlightsText.value,
                      "onUpdate:modelValue": ($event) => highlightsText.value = $event,
                      rows: 3,
                      class: "w-full text-sm"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: highlightsText.value,
                        "onUpdate:modelValue": ($event) => highlightsText.value = $event,
                        rows: 3,
                        class: "w-full text-sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800"${_scopeId}><label class="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 cursor-pointer"${_scopeId}>`);
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
                    label: "Slug\uFF08\u76EE\u5F55\u540D\uFF09",
                    required: "",
                    help: "\u5C0F\u5199\u5B57\u6BCD\u4E0E\u5355\u8FDE\u5B57\u7B26\uFF0C\u987B\u4E0E SKILL.md \u7684 name \u4E00\u81F4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.slug,
                        "onUpdate:modelValue": ($event) => editingItem.value.slug = $event,
                        placeholder: "\u5982 skill-authoring",
                        disabled: !isEditingNew.value,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u6280\u80FD\u540D",
                    required: "",
                    help: "\u901A\u5E38\u4E0E slug \u76F8\u540C"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u5982 skill-authoring",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u5206\u7C7B",
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
                    label: "\u7248\u672C",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.version,
                        "onUpdate:modelValue": ($event) => editingItem.value.version = $event,
                        placeholder: "1.0.0",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u8FD0\u884C\u65F6" }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.runtime,
                        "onUpdate:modelValue": ($event) => editingItem.value.runtime = $event,
                        options: runtimeOptions,
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u6B63\u6587\u5730\u5740 (contentUrl)",
                  required: "",
                  help: "\u7AD9\u5185\u7528 /skills/<slug>/SKILL.md\uFF1B\u7AD9\u5916\u53EA\u5141\u8BB8 hoxi.ai\u3001GitHub \u4E0E jsDelivr"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.contentUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.contentUrl = $event,
                      placeholder: "/themes/hoxi/skills/xxx/SKILL.md",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "\u6B63\u6587\u6458\u8981 (contentSha256)",
                  required: "",
                  help: "SKILL.md \u7684 64 \u4F4D\u5C0F\u5199 hex\uFF0C\u5FC5\u987B\u9010\u5B57\u8282\u4E00\u81F4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.contentSha256,
                      "onUpdate:modelValue": ($event) => editingItem.value.contentSha256 = $event,
                      placeholder: "64 \u4F4D hex",
                      class: "w-full font-mono text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "\u63CF\u8FF0 (description)",
                  required: "",
                  help: "\u5199\u6E05\u7528\u9014\u4E0E\u89E6\u53D1\u573A\u666F\uFF0C\u6700\u591A 1024 \u5B57\u7B26"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: editingItem.value.description,
                      "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                      rows: 3,
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                  createVNode(_component_UFormField, { label: "\u4F5C\u8005" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.author,
                        "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                        placeholder: "Hoxi",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5FBD\u7AE0" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u5982 \u5B98\u65B9",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u56FE\u6807" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.icon,
                        "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                        placeholder: "ph:sparkle",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, { label: "\u6E90\u7801\u5730\u5740 (repoUrl)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.repoUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.repoUrl = $event,
                        placeholder: "https://github.com/...",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u4E3B\u9875\u5730\u5740 (homepageUrl)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.homepageUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.homepageUrl = $event,
                        placeholder: "https://hoxi.ai/skills",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, { label: "\u73AF\u5883\u8981\u6C42 (compatibility)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.compatibility,
                      "onUpdate:modelValue": ($event) => editingItem.value.compatibility = $event,
                      placeholder: "\u5982 \u9700\u8981\u8BBF\u95EE\u76EE\u6807\u4ED3\u5E93\u4E0E\u53D7\u63A7\u8282\u70B9",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u4EAE\u70B9\uFF08\u6BCF\u884C\u4E00\u6761\uFF09" }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: highlightsText.value,
                      "onUpdate:modelValue": ($event) => highlightsText.value = $event,
                      rows: 3,
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=skills-DNK0bSTL.mjs.map
