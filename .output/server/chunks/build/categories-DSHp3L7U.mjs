import { u as useI18n, a as useToast, i as useConfirm, b as useAdminPermissions, c as useSettings, _ as _sfc_main$O, d as _sfc_main$T, e as _sfc_main$t, f as _sfc_main$I, g as _sfc_main$A, h as _sfc_main$s } from './server.mjs';
import { _ as _sfc_main$1 } from './Switch-CspG8oHO.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import 'node:child_process';
import 'process';
import 'buffer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "categories",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const toast = useToast();
    const { confirm } = useConfirm();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { settings } = useSettings();
    const categories = ref([]);
    const pending = ref(false);
    const saving = ref(false);
    const modalOpen = ref(false);
    const editingId = ref(null);
    const form = ref({
      slug: "",
      name: "",
      description: "",
      sort: 0,
      isActive: true,
      locales: {}
    });
    const supportedLocales = computed(() => {
      var _a, _b;
      const raw = (_b = (_a = settings.value) == null ? void 0 : _a.supported_locales) != null ? _b : "en,zh";
      return String(raw).split(",").map((s) => s.trim()).filter(Boolean);
    });
    const canEdit = computed(() => hasAdminPerm("posts:edit"));
    const columns = [
      { accessorKey: "name", header: t("admin.postCategories.colName", "\u540D\u79F0") },
      { accessorKey: "slug", header: t("admin.postCategories.colSlug", "Slug") },
      { accessorKey: "postCount", header: t("admin.postCategories.colPosts", "\u6587\u7AE0\u6570"), meta: { class: { th: "w-24" } } },
      { accessorKey: "sort", header: t("admin.postCategories.fieldSort", "\u6392\u5E8F"), meta: { class: { th: "w-20" } } },
      { accessorKey: "isActive", header: t("admin.postCategories.colStatus", "\u72B6\u6001"), meta: { class: { th: "w-24" } } },
      { accessorKey: "actions", header: "", meta: { class: { th: "w-24 text-right", td: "text-right" } } }
    ];
    function resetLocales(source) {
      var _a, _b, _c, _d;
      const locales = {};
      for (const loc of supportedLocales.value) {
        locales[loc] = {
          name: ((_b = (_a = source == null ? void 0 : source.locales) == null ? void 0 : _a[loc]) == null ? void 0 : _b.name) || "",
          description: ((_d = (_c = source == null ? void 0 : source.locales) == null ? void 0 : _c[loc]) == null ? void 0 : _d.description) || ""
        };
      }
      return locales;
    }
    async function loadCategories() {
      var _a;
      pending.value = true;
      try {
        const res = await $fetch("/api/admin/posts/categories");
        categories.value = Array.isArray(res == null ? void 0 : res.data) ? res.data : [];
      } catch (error) {
        toast.add({
          title: t("admin.common.error", "\u9519\u8BEF"),
          description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || t("admin.postCategories.loadFailed", "\u52A0\u8F7D\u5931\u8D25"),
          color: "error"
        });
      } finally {
        pending.value = false;
      }
    }
    function openCreate() {
      editingId.value = null;
      form.value = { slug: "", name: "", description: "", sort: 0, isActive: true, locales: resetLocales() };
      modalOpen.value = true;
    }
    function openEdit(category) {
      var _a;
      editingId.value = category.id;
      form.value = {
        slug: category.slug || "",
        name: category.name || "",
        description: category.description || "",
        sort: (_a = category.sort) != null ? _a : 0,
        isActive: Boolean(category.isActive),
        locales: resetLocales(category)
      };
      modalOpen.value = true;
    }
    async function save() {
      var _a;
      const slug = form.value.slug.trim().toLowerCase();
      if (!slug) {
        toast.add({ title: t("admin.postCategories.slugRequired", "\u8BF7\u586B\u5199 slug"), color: "warning" });
        return;
      }
      const locales = {};
      for (const [loc, value] of Object.entries(form.value.locales)) {
        const name = (value.name || "").trim();
        const description = (value.description || "").trim();
        if (name || description) {
          locales[loc] = { ...name ? { name } : {}, ...description ? { description } : {} };
        }
      }
      const payload = {
        slug,
        name: form.value.name.trim(),
        description: form.value.description.trim(),
        sort: Number.isFinite(Number(form.value.sort)) ? Number(form.value.sort) : 0,
        isActive: form.value.isActive,
        locales
      };
      saving.value = true;
      try {
        const url = editingId.value ? `/api/admin/posts/categories/${editingId.value}` : "/api/admin/posts/categories";
        const res = await $fetch(url, { method: editingId.value ? "PUT" : "POST", body: payload });
        if ((res == null ? void 0 : res.code) && res.code !== 0) throw new Error(res.message);
        toast.add({
          title: t("admin.common.success", "\u6210\u529F"),
          description: editingId.value ? t("admin.postCategories.updated", "\u5206\u7C7B\u5DF2\u66F4\u65B0") : t("admin.postCategories.created", "\u5206\u7C7B\u5DF2\u521B\u5EFA"),
          color: "success"
        });
        modalOpen.value = false;
        await loadCategories();
      } catch (error) {
        toast.add({
          title: t("admin.common.error", "\u9519\u8BEF"),
          description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || t("admin.postCategories.saveFailed", "\u4FDD\u5B58\u5931\u8D25"),
          color: "error"
        });
      } finally {
        saving.value = false;
      }
    }
    async function removeCategory(category) {
      var _a;
      const confirmed = await confirm({
        title: t("admin.postCategories.confirmDelete", "\u786E\u8BA4\u5220\u9664\u8BE5\u5206\u7C7B\uFF1F"),
        content: t("admin.postCategories.confirmDeleteHint", "\u5220\u9664\u540E\u5173\u8054\u6587\u7AE0\u5C06\u53D8\u4E3A\u672A\u5206\u7C7B\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002"),
        confirmColor: "error"
      });
      if (!confirmed) return;
      try {
        const res = await $fetch(`/api/admin/posts/categories/${category.id}`, { method: "DELETE" });
        if ((res == null ? void 0 : res.code) && res.code !== 0) throw new Error(res.message);
        toast.add({ title: t("admin.postCategories.deleted", "\u5206\u7C7B\u5DF2\u5220\u9664"), color: "success" });
        await loadCategories();
      } catch (error) {
        toast.add({
          title: t("admin.common.error", "\u9519\u8BEF"),
          description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || t("admin.postCategories.deleteFailed", "\u5220\u9664\u5931\u8D25"),
          color: "error"
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBadge = _sfc_main$O;
      const _component_UButton = _sfc_main$T;
      const _component_UTable = _sfc_main$t;
      const _component_UModal = _sfc_main$I;
      const _component_UInput = _sfc_main$A;
      const _component_USwitch = _sfc_main$1;
      const _component_UTextarea = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[calc(100vh-7rem)] flex flex-col space-y-4" }, _attrs))}><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 shrink-0"><div><div class="flex items-center gap-2"><h1 class="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("admin.postCategories.title", "\u6587\u7AE0\u5206\u7C7B"))}</h1>`);
      _push(ssrRenderComponent(_component_UBadge, {
        color: "primary",
        variant: "subtle",
        size: "xs",
        class: "font-mono font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(categories.value.length)}`);
          } else {
            return [
              createTextVNode(toDisplayString(categories.value.length), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-gray-500 dark:text-gray-400 text-xs mt-0.5">${ssrInterpolate(_ctx.$t("admin.postCategories.subtitle", "\u7BA1\u7406\u535A\u5BA2\u6587\u7AE0\u7684\u5206\u7C7B\uFF0C\u7528\u4E8E\u524D\u53F0\u7B5B\u9009\u4E0E\u5206\u7C7B\u843D\u5730\u9875"))}</p></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/admin/posts",
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-left",
        size: "sm",
        class: "rounded-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.posts.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.posts.title")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-clockwise",
        size: "sm",
        class: "rounded-xl",
        loading: pending.value,
        onClick: loadCategories
      }, null, _parent));
      if (canEdit.value) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          icon: "ph:plus-bold",
          size: "sm",
          class: "bg-purple-600 hover:bg-purple-500 text-white rounded-xl shadow-xs font-medium",
          onClick: openCreate
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.postCategories.create", "\u65B0\u5EFA\u5206\u7C7B"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.postCategories.create", "\u65B0\u5EFA\u5206\u7C7B")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/70 dark:border-gray-800/60 rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1 min-h-0">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: categories.value,
        columns,
        loading: pending.value,
        class: "flex-1 min-h-0"
      }, {
        "name-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><span class="font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(row.original.name || row.original.slug)}</span>`);
            if (row.original.description) {
              _push2(`<span class="text-[11px] text-gray-400 line-clamp-1"${_scopeId}>${ssrInterpolate(row.original.description)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "font-medium text-gray-900 dark:text-white" }, toDisplayString(row.original.name || row.original.slug), 1),
                row.original.description ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-[11px] text-gray-400 line-clamp-1"
                }, toDisplayString(row.original.description), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "slug-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<code class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>/blog/category/${ssrInterpolate(row.original.slug)}</code>`);
          } else {
            return [
              createVNode("code", { class: "text-xs text-gray-500 dark:text-gray-400" }, "/blog/category/" + toDisplayString(row.original.slug), 1)
            ];
          }
        }),
        "postCount-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              color: "neutral",
              variant: "subtle",
              size: "xs"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.original.postCount || 0)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.original.postCount || 0), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.original.postCount || 0), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        "sort-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm font-mono text-gray-500"${_scopeId}>${ssrInterpolate(row.original.sort)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm font-mono text-gray-500" }, toDisplayString(row.original.sort), 1)
            ];
          }
        }),
        "isActive-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBadge, {
              color: row.original.isActive ? "success" : "neutral",
              variant: "subtle",
              size: "xs"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(row.original.isActive ? _ctx.$t("admin.postCategories.active", "\u542F\u7528") : _ctx.$t("admin.postCategories.inactive", "\u505C\u7528"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(row.original.isActive ? _ctx.$t("admin.postCategories.active", "\u542F\u7528") : _ctx.$t("admin.postCategories.inactive", "\u505C\u7528")), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBadge, {
                color: row.original.isActive ? "success" : "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(row.original.isActive ? _ctx.$t("admin.postCategories.active", "\u542F\u7528") : _ctx.$t("admin.postCategories.inactive", "\u505C\u7528")), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ];
          }
        }),
        "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-1"${_scopeId}>`);
            if (canEdit.value) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:pencil-simple",
                onClick: ($event) => openEdit(row.original)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (canEdit.value) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                onClick: ($event) => removeCategory(row.original)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                canEdit.value ? (openBlock(), createBlock(_component_UButton, {
                  key: 0,
                  color: "neutral",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:pencil-simple",
                  onClick: ($event) => openEdit(row.original)
                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                canEdit.value ? (openBlock(), createBlock(_component_UButton, {
                  key: 1,
                  color: "error",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:trash",
                  onClick: ($event) => removeCategory(row.original)
                }, null, 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-16 text-center text-sm text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.postCategories.empty", "\u6682\u65E0\u5206\u7C7B"))}</div>`);
          } else {
            return [
              createVNode("div", { class: "py-16 text-center text-sm text-gray-400" }, toDisplayString(_ctx.$t("admin.postCategories.empty", "\u6682\u65E0\u5206\u7C7B")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: modalOpen.value,
        "onUpdate:open": ($event) => modalOpen.value = $event
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4 max-h-[80vh] overflow-y-auto"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h2 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(editingId.value ? _ctx.$t("admin.postCategories.edit", "\u7F16\u8F91\u5206\u7C7B") : _ctx.$t("admin.postCategories.create", "\u65B0\u5EFA\u5206\u7C7B"))}</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "xs",
              icon: "ph:x",
              onClick: ($event) => modalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}><div class="space-y-1"${_scopeId}><label class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.postCategories.fieldSlug", "Slug"))}</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.value.slug,
              "onUpdate:modelValue": ($event) => form.value.slug = $event,
              placeholder: "tutorials",
              class: "w-full",
              ui: { base: "rounded-xl" }
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-[11px] text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.postCategories.slugHint", "\u4EC5\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u8FDE\u5B57\u7B26\uFF0C\u7528\u4E8E /blog/category/:slug"))}</p></div><div class="space-y-1"${_scopeId}><label class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.postCategories.fieldName", "\u540D\u79F0"))}</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.value.name,
              "onUpdate:modelValue": ($event) => form.value.name = $event,
              class: "w-full",
              ui: { base: "rounded-xl" }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1"${_scopeId}><label class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.postCategories.fieldSort", "\u6392\u5E8F"))}</label>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.value.sort,
              "onUpdate:modelValue": ($event) => form.value.sort = $event,
              type: "number",
              class: "w-full",
              ui: { base: "rounded-xl" }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1 flex flex-col justify-center"${_scopeId}><label class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.postCategories.fieldActive", "\u542F\u7528"))}</label>`);
            _push2(ssrRenderComponent(_component_USwitch, {
              modelValue: form.value.isActive,
              "onUpdate:modelValue": ($event) => form.value.isActive = $event,
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-1"${_scopeId}><label class="text-xs font-medium text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.postCategories.fieldDescription", "\u63CF\u8FF0"))}</label>`);
            _push2(ssrRenderComponent(_component_UTextarea, {
              modelValue: form.value.description,
              "onUpdate:modelValue": ($event) => form.value.description = $event,
              rows: 2,
              class: "w-full",
              ui: { base: "rounded-xl" }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (supportedLocales.value.length > 0) {
              _push2(`<div class="pt-2 border-t border-gray-100 dark:border-gray-800/60 space-y-3"${_scopeId}><p class="text-xs font-semibold text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("admin.postCategories.localeOverrides", "\u591A\u8BED\u8A00\u540D\u79F0/\u63CF\u8FF0\uFF08\u7559\u7A7A\u5219\u56DE\u9000\u4E0A\u65B9\u540D\u79F0\uFF09"))}</p><!--[-->`);
              ssrRenderList(supportedLocales.value, (loc) => {
                _push2(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-2 items-start"${_scopeId}><span class="text-xs font-mono text-gray-500 pt-2"${_scopeId}>${ssrInterpolate(loc.toUpperCase())}</span>`);
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: form.value.locales[loc].name,
                  "onUpdate:modelValue": ($event) => form.value.locales[loc].name = $event,
                  placeholder: _ctx.$t("admin.postCategories.fieldName", "\u540D\u79F0"),
                  class: "w-full sm:col-span-1",
                  ui: { base: "rounded-xl" }
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: form.value.locales[loc].description,
                  "onUpdate:modelValue": ($event) => form.value.locales[loc].description = $event,
                  placeholder: _ctx.$t("admin.postCategories.fieldDescription", "\u63CF\u8FF0"),
                  class: "w-full sm:col-span-1",
                  ui: { base: "rounded-xl" }
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => modalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.cancel", "\u53D6\u6D88"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel", "\u53D6\u6D88")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: saving.value,
              onClick: save
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.save", "\u4FDD\u5B58"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.save", "\u4FDD\u5B58")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4 max-h-[80vh] overflow-y-auto" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(editingId.value ? _ctx.$t("admin.postCategories.edit", "\u7F16\u8F91\u5206\u7C7B") : _ctx.$t("admin.postCategories.create", "\u65B0\u5EFA\u5206\u7C7B")), 1),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:x",
                    onClick: ($event) => modalOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(_ctx.$t("admin.postCategories.fieldSlug", "Slug")), 1),
                    createVNode(_component_UInput, {
                      modelValue: form.value.slug,
                      "onUpdate:modelValue": ($event) => form.value.slug = $event,
                      placeholder: "tutorials",
                      class: "w-full",
                      ui: { base: "rounded-xl" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("p", { class: "text-[11px] text-gray-400" }, toDisplayString(_ctx.$t("admin.postCategories.slugHint", "\u4EC5\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u8FDE\u5B57\u7B26\uFF0C\u7528\u4E8E /blog/category/:slug")), 1)
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(_ctx.$t("admin.postCategories.fieldName", "\u540D\u79F0")), 1),
                    createVNode(_component_UInput, {
                      modelValue: form.value.name,
                      "onUpdate:modelValue": ($event) => form.value.name = $event,
                      class: "w-full",
                      ui: { base: "rounded-xl" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("label", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(_ctx.$t("admin.postCategories.fieldSort", "\u6392\u5E8F")), 1),
                    createVNode(_component_UInput, {
                      modelValue: form.value.sort,
                      "onUpdate:modelValue": ($event) => form.value.sort = $event,
                      type: "number",
                      class: "w-full",
                      ui: { base: "rounded-xl" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "space-y-1 flex flex-col justify-center" }, [
                    createVNode("label", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(_ctx.$t("admin.postCategories.fieldActive", "\u542F\u7528")), 1),
                    createVNode(_component_USwitch, {
                      modelValue: form.value.isActive,
                      "onUpdate:modelValue": ($event) => form.value.isActive = $event,
                      size: "sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "space-y-1" }, [
                  createVNode("label", { class: "text-xs font-medium text-gray-700 dark:text-gray-300" }, toDisplayString(_ctx.$t("admin.postCategories.fieldDescription", "\u63CF\u8FF0")), 1),
                  createVNode(_component_UTextarea, {
                    modelValue: form.value.description,
                    "onUpdate:modelValue": ($event) => form.value.description = $event,
                    rows: 2,
                    class: "w-full",
                    ui: { base: "rounded-xl" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                supportedLocales.value.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "pt-2 border-t border-gray-100 dark:border-gray-800/60 space-y-3"
                }, [
                  createVNode("p", { class: "text-xs font-semibold text-gray-500 dark:text-gray-400" }, toDisplayString(_ctx.$t("admin.postCategories.localeOverrides", "\u591A\u8BED\u8A00\u540D\u79F0/\u63CF\u8FF0\uFF08\u7559\u7A7A\u5219\u56DE\u9000\u4E0A\u65B9\u540D\u79F0\uFF09")), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(supportedLocales.value, (loc) => {
                    return openBlock(), createBlock("div", {
                      key: loc,
                      class: "grid grid-cols-1 sm:grid-cols-3 gap-2 items-start"
                    }, [
                      createVNode("span", { class: "text-xs font-mono text-gray-500 pt-2" }, toDisplayString(loc.toUpperCase()), 1),
                      createVNode(_component_UInput, {
                        modelValue: form.value.locales[loc].name,
                        "onUpdate:modelValue": ($event) => form.value.locales[loc].name = $event,
                        placeholder: _ctx.$t("admin.postCategories.fieldName", "\u540D\u79F0"),
                        class: "w-full sm:col-span-1",
                        ui: { base: "rounded-xl" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                      createVNode(_component_UInput, {
                        modelValue: form.value.locales[loc].description,
                        "onUpdate:modelValue": ($event) => form.value.locales[loc].description = $event,
                        placeholder: _ctx.$t("admin.postCategories.fieldDescription", "\u63CF\u8FF0"),
                        class: "w-full sm:col-span-1",
                        ui: { base: "rounded-xl" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    onClick: ($event) => modalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel", "\u53D6\u6D88")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: saving.value,
                    onClick: save
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("admin.common.save", "\u4FDD\u5B58")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/posts/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=categories-DSHp3L7U.mjs.map
