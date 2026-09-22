import { e as useI18n, f as useFormatTime, g as useToast, s as useConfirm, h as useAdminPermissions, i as useAdminExtensions, w as themeExtensionPermissionCode, A as ADMIN_PERMISSIONS, m as moduleViewCode, j as moduleEditCode, x as usePagination, y as useFetch, r as useRouter, b as _sfc_main$G, k as _sfc_main$B, l as _sfc_main$h, z as _sfc_main$n, c as _sfc_main$l, d as _sfc_main$k, q as navigateTo } from './server.mjs';
import { _ as __nuxt_component_2, i as isSettingsTabId } from './Nav-DQUTv58w.mjs';
import { _ as __nuxt_component_7 } from './FullScreenModal-C_oQJW_c.mjs';
import { defineComponent, computed, withAsyncContext, ref, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, isRef, withModifiers, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "manages",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t, locale } = useI18n();
    const { formatDateTime } = useFormatTime();
    const toast = useToast();
    const { confirm } = useConfirm();
    const { hasPerm: hasAdminPerm, labelFor, isSuper } = useAdminPermissions();
    const { extensionPermissionDefs, extensionSections } = useAdminExtensions();
    const extensionPermissionSections = computed(() => extensionSections.value.map((section) => ({
      key: section.key,
      title: section.title,
      defs: extensionPermissionDefs.value.filter(
        (def) => section.pages.some((page2) => (page2.permissionCode || themeExtensionPermissionCode(page2.extensionKey, page2.key)) === def.code)
      )
    })));
    const allPermissionDefs = computed(() => [...ADMIN_PERMISSIONS, ...extensionPermissionDefs.value]);
    const allTieredCodes = computed(
      () => allPermissionDefs.value.flatMap((def) => {
        if (def.editable === void 0) return [def.code];
        return def.editable === false ? [moduleViewCode(def.code)] : [moduleViewCode(def.code), moduleEditCode(def.code)];
      })
    );
    const goToSettingsTab = (tabId) => {
      if (isSettingsTabId(tabId)) {
        navigateTo({ path: "/admin/settings", query: { tab: tabId } });
      }
    };
    const totalPermissionCount = ADMIN_PERMISSIONS.length;
    const fullAccessLabel = computed(() => locale.value.startsWith("zh") ? "\u5168\u90E8\u6743\u9650" : "Full Access");
    const permissionsLabel = computed(() => locale.value.startsWith("zh") ? "\u4E2A\u6A21\u5757" : "modules");
    const superAdminLabel = computed(() => locale.value.startsWith("zh") ? "\u8D85\u7EA7\u7BA1\u7406\u5458" : "Super Admin");
    const superAdminHint = computed(() => locale.value.startsWith("zh") ? "\u4E3B\u7BA1\u7406\u5458\u8D26\u53F7\u9ED8\u8BA4\u62E5\u6709\u5168\u90E8\u6743\u9650\uFF0C\u4E0D\u53EF\u4FEE\u6539\u6216\u5220\u9664\u3002" : "The primary admin always has full access and cannot be modified or deleted.");
    const permissionSectionLabel = computed(() => locale.value.startsWith("zh") ? "\u7BA1\u7406\u6743\u9650" : "Permissions");
    const permissionSectionHint = computed(() => locale.value.startsWith("zh") ? "\u52FE\u9009\u6B64\u7BA1\u7406\u5458\u53EF\u8BBF\u95EE\u7684\u540E\u53F0\u6A21\u5757\uFF0C\u4EE5\u53CA\u662F\u5426\u5141\u8BB8\u4FEE\u6539\u3002" : "Select which admin modules this account can access, and whether it can make changes.");
    const moduleColumnLabel = computed(() => locale.value.startsWith("zh") ? "\u6A21\u5757" : "Module");
    const viewLabel = computed(() => locale.value.startsWith("zh") ? "\u67E5\u770B" : "View");
    const editLabel = computed(() => locale.value.startsWith("zh") ? "\u7F16\u8F91" : "Edit");
    const selectAllLabel = computed(() => locale.value.startsWith("zh") ? "\u5168\u9009" : "Select All");
    const clearAllLabel = computed(() => locale.value.startsWith("zh") ? "\u6E05\u7A7A" : "Clear All");
    const editBlockedTitle = computed(() => locale.value.startsWith("zh") ? "\u8D85\u7EA7\u7BA1\u7406\u5458\u4E0D\u53EF\u7F16\u8F91\uFF0C\u8BF7\u5230\u4E2A\u4EBA\u8D44\u6599\u9875\u4FEE\u6539\u5BC6\u7801" : "Super admin is locked; use Profile page to change password");
    const deleteBlockedTitle = computed(() => locale.value.startsWith("zh") ? "\u8D85\u7EA7\u7BA1\u7406\u5458\u4E0D\u53EF\u5220\u9664" : "Super admin cannot be deleted");
    const noPermTitle = computed(() => locale.value.startsWith("zh") ? "\u65E0\u7BA1\u7406\u5458\u7BA1\u7406\u6743\u9650" : "Requires admins permission");
    const columns = computed(() => [
      { accessorKey: "id", header: "ID", size: 60 },
      { accessorKey: "username", header: t("admin.users.username") },
      { accessorKey: "permissions", header: permissionSectionLabel.value },
      { accessorKey: "createdAt", header: t("admin.users.createdAt") },
      { accessorKey: "actions", header: t("admin.users.actions"), size: 120 }
    ]);
    const { page, pageSize: pageCount, onPageChange } = usePagination(15);
    const {
      data: usersData,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/admin/admins",
      {
        query: {
          page,
          pageSize: pageCount
        },
        watch: [page],
        onResponseError({ response }) {
          if (response.status === 401) {
            useRouter().push("/admin/login");
          }
        }
      },
      "$2twsC2Te0P"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const totalItems = computed(() => {
      var _a;
      return ((_a = usersData.value) == null ? void 0 : _a.total) || 0;
    });
    const paginatedUsers = computed(() => {
      var _a;
      return ((_a = usersData.value) == null ? void 0 : _a.data) || [];
    });
    const isModalOpen = ref(false);
    const isSaving = ref(false);
    const form = reactive({
      id: null,
      username: "",
      password: ""
    });
    const formPermissions = ref([]);
    const isEditingMainAdmin = computed(() => !!form.id && form.username === "admin");
    const canEdit = (row) => {
      if (!hasAdminPerm("admins:edit")) return false;
      if (row.username === "admin") return isSuper.value;
      return true;
    };
    const canDelete = (row) => {
      if (!hasAdminPerm("admins:edit")) return false;
      if (row.username === "admin") return false;
      return true;
    };
    const onPermToggle = (code, checked) => {
      if (checked) {
        if (!formPermissions.value.includes(code)) formPermissions.value.push(code);
      } else {
        const i = formPermissions.value.indexOf(code);
        if (i >= 0) formPermissions.value.splice(i, 1);
      }
    };
    const hasView = (code) => formPermissions.value.includes(code) || formPermissions.value.includes(moduleViewCode(code)) || formPermissions.value.includes(moduleEditCode(code));
    const hasEdit = (code) => formPermissions.value.includes(code) || formPermissions.value.includes(moduleEditCode(code));
    const clearModuleGrant = (code) => {
      formPermissions.value = formPermissions.value.filter((p) => p !== code);
    };
    const onViewToggle = (code, checked) => {
      clearModuleGrant(code);
      const viewCode = moduleViewCode(code);
      const editCode = moduleEditCode(code);
      if (checked) {
        if (!formPermissions.value.includes(viewCode)) formPermissions.value.push(viewCode);
      } else {
        formPermissions.value = formPermissions.value.filter((p) => p !== viewCode && p !== editCode);
      }
    };
    const onEditToggle = (code, checked) => {
      clearModuleGrant(code);
      const viewCode = moduleViewCode(code);
      const editCode = moduleEditCode(code);
      if (checked) {
        if (!formPermissions.value.includes(editCode)) formPermissions.value.push(editCode);
        if (!formPermissions.value.includes(viewCode)) formPermissions.value.push(viewCode);
      } else {
        const i = formPermissions.value.indexOf(editCode);
        if (i >= 0) formPermissions.value.splice(i, 1);
      }
    };
    const toggleAllPerms = (select) => {
      formPermissions.value = select ? [...allTieredCodes.value] : [];
    };
    const openModal = (user) => {
      if (user) {
        form.id = user.id;
        form.username = user.username;
        form.password = "";
        const perms = Array.isArray(user.permissions) ? user.permissions : null;
        if (perms === null || perms.includes("*")) {
          formPermissions.value = [...allTieredCodes.value];
        } else {
          formPermissions.value = [...perms];
        }
      } else {
        form.id = null;
        form.username = "";
        form.password = "";
        formPermissions.value = [];
      }
      isModalOpen.value = true;
    };
    const saveUser = async () => {
      var _a;
      if (!hasAdminPerm("admins:edit")) {
        toast.add({ title: "Error", description: noPermTitle.value, color: "error" });
        return;
      }
      isSaving.value = true;
      try {
        const url = form.id ? `/api/admin/admins/${form.id}` : "/api/admin/admins";
        const method = form.id ? "PUT" : "POST";
        const payload = { username: form.username };
        if (form.password) {
          payload.password = form.password;
        }
        if (!isEditingMainAdmin.value) {
          if (formPermissions.value.length >= allTieredCodes.value.length) {
            payload.permissions = ["*"];
          } else if (formPermissions.value.length === 0) {
            payload.permissions = [];
          } else {
            payload.permissions = [...formPermissions.value];
          }
        }
        await $fetch(url, {
          method,
          body: payload
        });
        isModalOpen.value = false;
        await refresh();
        toast.add({
          title: "Success",
          description: `User ${form.id ? "updated" : "created"} successfully`,
          color: "success"
        });
      } catch (e) {
        toast.add({
          title: "Error",
          description: ((_a = e.data) == null ? void 0 : _a.message) || `Failed to ${form.id ? "update" : "create"} user`,
          color: "error"
        });
      } finally {
        isSaving.value = false;
      }
    };
    const deleteUser = async (id) => {
      var _a;
      if (!hasAdminPerm("admins:edit")) {
        toast.add({ title: "Error", description: noPermTitle.value, color: "error" });
        return;
      }
      const isConfirmed = await confirm({
        title: "Delete Admin User",
        description: "Are you sure you want to delete this admin user?"
      });
      if (!isConfirmed) return;
      try {
        await $fetch(`/api/admin/admins/${id}`, {
          method: "DELETE"
        });
        await refresh();
        toast.add({
          title: "Success",
          description: "User deleted successfully",
          color: "success"
        });
      } catch (e) {
        toast.add({
          title: "Error",
          description: ((_a = e.data) == null ? void 0 : _a.message) || "Failed to delete user",
          color: "error"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UButton = _sfc_main$B;
      const _component_AdminSettingsNav = __nuxt_component_2;
      const _component_UTable = _sfc_main$h;
      const _component_UPagination = _sfc_main$n;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto pb-12" }, _attrs))}><div class="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-four",
        class: "w-8 h-8 text-purple-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("admin.users.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(_ctx.$t("admin.users.subtitle"))}</p></div>`);
      if (unref(hasAdminPerm)("admins:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          class: "bg-purple-600 hover:bg-purple-500 text-white",
          icon: "ph:plus-bold",
          onClick: ($event) => openModal()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.users.add"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.users.add")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8">`);
      _push(ssrRenderComponent(_component_AdminSettingsNav, {
        active: "users",
        onSelect: goToSettingsTab
      }, null, _parent));
      _push(`<div class="lg:col-span-9"><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[calc(100vh-18rem)]"><div class="flex-1 overflow-auto">`);
      _push(ssrRenderComponent(_component_UTable, {
        data: paginatedUsers.value,
        columns: columns.value,
        loading: unref(pending),
        class: "min-w-full"
      }, {
        "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
            ];
          }
        }),
        "permissions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="flex flex-col gap-1.5"${_scopeId}>`);
            if ((_a = row.original.permissionSummary) == null ? void 0 : _a.all) {
              _push2(`<div class="flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:shield-check",
                class: "w-4 h-4 text-emerald-500 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(fullAccessLabel.value)}</span></div>`);
            } else {
              _push2(`<div class="flex items-center gap-1.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:shield-half-tilt",
                class: "w-4 h-4 text-blue-500 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(((_b = row.original.permissionSummary) == null ? void 0 : _b.count) || 0)} / ${ssrInterpolate(unref(totalPermissionCount))} ${ssrInterpolate(permissionsLabel.value)}</span></div>`);
            }
            if (row.original.username === "admin") {
              _push2(`<div class="text-xs text-purple-500 dark:text-purple-400 font-medium"${_scopeId}>${ssrInterpolate(superAdminLabel.value)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-1.5" }, [
                ((_c = row.original.permissionSummary) == null ? void 0 : _c.all) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center gap-1.5"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:shield-check",
                    class: "w-4 h-4 text-emerald-500 shrink-0"
                  }),
                  createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(fullAccessLabel.value), 1)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex items-center gap-1.5"
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:shield-half-tilt",
                    class: "w-4 h-4 text-blue-500 shrink-0"
                  }),
                  createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(((_d = row.original.permissionSummary) == null ? void 0 : _d.count) || 0) + " / " + toDisplayString(unref(totalPermissionCount)) + " " + toDisplayString(permissionsLabel.value), 1)
                ])),
                row.original.username === "admin" ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "text-xs text-purple-500 dark:text-purple-400 font-medium"
                }, toDisplayString(superAdminLabel.value), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:pencil-simple",
              onClick: ($event) => openModal(row.original),
              disabled: !canEdit(row.original),
              title: !canEdit(row.original) ? row.original.username === "admin" ? editBlockedTitle.value : noPermTitle.value : ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              variant: "ghost",
              icon: "ph:trash",
              onClick: ($event) => deleteUser(Number(row.original.id)),
              disabled: !canDelete(row.original),
              title: !canDelete(row.original) ? row.original.username === "admin" ? deleteBlockedTitle.value : noPermTitle.value : ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  icon: "ph:pencil-simple",
                  onClick: ($event) => openModal(row.original),
                  disabled: !canEdit(row.original),
                  title: !canEdit(row.original) ? row.original.username === "admin" ? editBlockedTitle.value : noPermTitle.value : ""
                }, null, 8, ["onClick", "disabled", "title"]),
                createVNode(_component_UButton, {
                  color: "error",
                  variant: "ghost",
                  icon: "ph:trash",
                  onClick: ($event) => deleteUser(Number(row.original.id)),
                  disabled: !canDelete(row.original),
                  title: !canDelete(row.original) ? row.original.username === "admin" ? deleteBlockedTitle.value : noPermTitle.value : ""
                }, null, 8, ["onClick", "disabled", "title"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-4 py-2 border-t border-gray-200 dark:border-gray-800/50 flex justify-between items-center shrink-0 bg-white dark:bg-[#121214]"><div class="text-sm text-gray-500 dark:text-gray-400"><span class="text-gray-900 dark:text-white">${ssrInterpolate(totalItems.value)}</span> ${ssrInterpolate(_ctx.$t("admin.common.results"))}</div>`);
      _push(ssrRenderComponent(_component_UPagination, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        total: totalItems.value,
        "items-per-page": unref(pageCount),
        "onUpdate:page": (val) => unref(onPageChange)(val, () => unref(refresh)())
      }, null, _parent));
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: isModalOpen.value,
        "onUpdate:modelValue": ($event) => isModalOpen.value = $event,
        title: form.id ? _ctx.$t("admin.users.edit") : _ctx.$t("admin.users.add"),
        maxWidth: "sm:max-w-2xl",
        defaultFullscreen: false
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => isModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              form: "admin-user-form",
              color: "primary",
              class: "bg-purple-600 hover:bg-purple-500 text-white",
              loading: isSaving.value,
              disabled: !unref(hasAdminPerm)("admins:edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("admin.common.save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                onClick: ($event) => isModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_UButton, {
                type: "submit",
                form: "admin-user-form",
                color: "primary",
                class: "bg-purple-600 hover:bg-purple-500 text-white",
                loading: isSaving.value,
                disabled: !unref(hasAdminPerm)("admins:edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form id="admin-user-form" class="space-y-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("admin.users.username")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.username,
                    "onUpdate:modelValue": ($event) => form.username = $event,
                    required: "",
                    class: "text-gray-900 dark:text-white w-full",
                    disabled: isEditingMainAdmin.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.username,
                      "onUpdate:modelValue": ($event) => form.username = $event,
                      required: "",
                      class: "text-gray-900 dark:text-white w-full",
                      disabled: isEditingMainAdmin.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: form.id ? "Password (leave blank to keep current)" : "Password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.password,
                    "onUpdate:modelValue": ($event) => form.password = $event,
                    type: "password",
                    required: !form.id,
                    class: "text-gray-900 dark:text-white w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.password,
                      "onUpdate:modelValue": ($event) => form.password = $event,
                      type: "password",
                      required: !form.id,
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "required"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"${_scopeId}>${ssrInterpolate(permissionSectionLabel.value)}</label><p class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(permissionSectionHint.value)}</p></div>`);
            if (!isEditingMainAdmin.value) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "ghost",
                onClick: ($event) => toggleAllPerms(true)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(selectAllLabel.value)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(selectAllLabel.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                color: "neutral",
                variant: "ghost",
                onClick: ($event) => toggleAllPerms(false)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(clearAllLabel.value)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(clearAllLabel.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (isEditingMainAdmin.value) {
              _push2(`<div class="rounded-xl border border-purple-200/60 bg-purple-50/60 px-4 py-3 dark:border-purple-500/20 dark:bg-purple-500/10"${_scopeId}><div class="flex items-start gap-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:shield-check",
                class: "w-5 h-5 text-purple-500 mt-0.5 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><div class="text-sm font-medium text-purple-800 dark:text-purple-300"${_scopeId}>${ssrInterpolate(superAdminLabel.value)}</div><div class="text-xs text-purple-600/80 dark:text-purple-400/80 mt-0.5"${_scopeId}>${ssrInterpolate(superAdminHint.value)}</div></div></div></div>`);
            } else {
              _push2(`<!--[--><div class="flex items-center gap-4 px-3 mb-1.5 text-[11px] font-semibold tracking-wide text-gray-400 dark:text-gray-500"${_scopeId}><div class="flex-1"${_scopeId}>${ssrInterpolate(moduleColumnLabel.value)}</div><div class="w-14 text-center shrink-0"${_scopeId}>${ssrInterpolate(viewLabel.value)}</div><div class="w-14 text-center shrink-0"${_scopeId}>${ssrInterpolate(editLabel.value)}</div></div><div class="space-y-1.5"${_scopeId}><!--[-->`);
              ssrRenderList(unref(ADMIN_PERMISSIONS), (def) => {
                _push2(`<div class="flex items-center gap-4 rounded-lg border border-gray-200 dark:border-white/5 px-3 py-2"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="text-sm font-medium text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(unref(labelFor)(def))}</div><div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate"${_scopeId}>${ssrInterpolate(def.code)}</div></div><div class="w-14 flex justify-center shrink-0"${_scopeId}><input${ssrIncludeBooleanAttr(hasView(def.code)) ? " checked" : ""}${ssrIncludeBooleanAttr(isEditingMainAdmin.value) ? " disabled" : ""} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0"${_scopeId}></div><div class="w-14 flex justify-center shrink-0"${_scopeId}>`);
                if (def.editable !== false) {
                  _push2(`<input${ssrIncludeBooleanAttr(hasEdit(def.code)) ? " checked" : ""}${ssrIncludeBooleanAttr(isEditingMainAdmin.value) ? " disabled" : ""} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0"${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div><!--[-->`);
              ssrRenderList(extensionPermissionSections.value, (section) => {
                _push2(`<!--[--><div class="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-500 mt-4 mb-2"${_scopeId}>${ssrInterpolate(section.title)}</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-2"${_scopeId}><!--[-->`);
                ssrRenderList(section.defs, (def) => {
                  _push2(`<label class="flex items-start gap-2.5 rounded-lg border border-gray-200 dark:border-white/5 px-3 py-2.5 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.03] has-[:checked]:border-purple-300 has-[:checked]:bg-purple-50/60 dark:has-[:checked]:border-purple-500/30 dark:has-[:checked]:bg-purple-500/10"${_scopeId}><input${ssrIncludeBooleanAttr(formPermissions.value.includes(def.code)) ? " checked" : ""}${ssrIncludeBooleanAttr(isEditingMainAdmin.value) ? " disabled" : ""} type="checkbox" class="mt-0.5 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="text-sm font-medium text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(unref(labelFor)(def))}</div><div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate"${_scopeId}>${ssrInterpolate(def.code)}</div></div></label>`);
                });
                _push2(`<!--]--></div><!--]-->`);
              });
              _push2(`<!--]--><!--]-->`);
            }
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                id: "admin-user-form",
                onSubmit: withModifiers(saveUser, ["prevent"]),
                class: "space-y-5"
              }, [
                createVNode(_component_UFormField, {
                  label: _ctx.$t("admin.users.username")
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.username,
                      "onUpdate:modelValue": ($event) => form.username = $event,
                      required: "",
                      class: "text-gray-900 dark:text-white w-full",
                      disabled: isEditingMainAdmin.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_UFormField, {
                  label: form.id ? "Password (leave blank to keep current)" : "Password"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.password,
                      "onUpdate:modelValue": ($event) => form.password = $event,
                      type: "password",
                      required: !form.id,
                      class: "text-gray-900 dark:text-white w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "required"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode("div", null, [
                  createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" }, toDisplayString(permissionSectionLabel.value), 1),
                      createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(permissionSectionHint.value), 1)
                    ]),
                    !isEditingMainAdmin.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center gap-2"
                    }, [
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "ghost",
                        onClick: ($event) => toggleAllPerms(true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(selectAllLabel.value), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        size: "xs",
                        color: "neutral",
                        variant: "ghost",
                        onClick: ($event) => toggleAllPerms(false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(clearAllLabel.value), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])) : createCommentVNode("", true)
                  ]),
                  isEditingMainAdmin.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "rounded-xl border border-purple-200/60 bg-purple-50/60 px-4 py-3 dark:border-purple-500/20 dark:bg-purple-500/10"
                  }, [
                    createVNode("div", { class: "flex items-start gap-2.5" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:shield-check",
                        class: "w-5 h-5 text-purple-500 mt-0.5 shrink-0"
                      }),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-sm font-medium text-purple-800 dark:text-purple-300" }, toDisplayString(superAdminLabel.value), 1),
                        createVNode("div", { class: "text-xs text-purple-600/80 dark:text-purple-400/80 mt-0.5" }, toDisplayString(superAdminHint.value), 1)
                      ])
                    ])
                  ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", { class: "flex items-center gap-4 px-3 mb-1.5 text-[11px] font-semibold tracking-wide text-gray-400 dark:text-gray-500" }, [
                      createVNode("div", { class: "flex-1" }, toDisplayString(moduleColumnLabel.value), 1),
                      createVNode("div", { class: "w-14 text-center shrink-0" }, toDisplayString(viewLabel.value), 1),
                      createVNode("div", { class: "w-14 text-center shrink-0" }, toDisplayString(editLabel.value), 1)
                    ]),
                    createVNode("div", { class: "space-y-1.5" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(ADMIN_PERMISSIONS), (def) => {
                        return openBlock(), createBlock("div", {
                          key: def.code,
                          class: "flex items-center gap-4 rounded-lg border border-gray-200 dark:border-white/5 px-3 py-2"
                        }, [
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white truncate" }, toDisplayString(unref(labelFor)(def)), 1),
                            createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate" }, toDisplayString(def.code), 1)
                          ]),
                          createVNode("div", { class: "w-14 flex justify-center shrink-0" }, [
                            createVNode("input", {
                              checked: hasView(def.code),
                              disabled: isEditingMainAdmin.value,
                              type: "checkbox",
                              class: "h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0",
                              onChange: ($event) => onViewToggle(def.code, $event.target.checked)
                            }, null, 40, ["checked", "disabled", "onChange"])
                          ]),
                          createVNode("div", { class: "w-14 flex justify-center shrink-0" }, [
                            def.editable !== false ? (openBlock(), createBlock("input", {
                              key: 0,
                              checked: hasEdit(def.code),
                              disabled: isEditingMainAdmin.value,
                              type: "checkbox",
                              class: "h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0",
                              onChange: ($event) => onEditToggle(def.code, $event.target.checked)
                            }, null, 40, ["checked", "disabled", "onChange"])) : createCommentVNode("", true)
                          ])
                        ]);
                      }), 128))
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(extensionPermissionSections.value, (section) => {
                      return openBlock(), createBlock(Fragment, {
                        key: section.key
                      }, [
                        createVNode("div", { class: "text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-500 mt-4 mb-2" }, toDisplayString(section.title), 1),
                        createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(section.defs, (def) => {
                            return openBlock(), createBlock("label", {
                              key: def.code,
                              class: "flex items-start gap-2.5 rounded-lg border border-gray-200 dark:border-white/5 px-3 py-2.5 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.03] has-[:checked]:border-purple-300 has-[:checked]:bg-purple-50/60 dark:has-[:checked]:border-purple-500/30 dark:has-[:checked]:bg-purple-500/10"
                            }, [
                              createVNode("input", {
                                checked: formPermissions.value.includes(def.code),
                                disabled: isEditingMainAdmin.value,
                                type: "checkbox",
                                class: "mt-0.5 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0",
                                onChange: ($event) => onPermToggle(def.code, $event.target.checked)
                              }, null, 40, ["checked", "disabled", "onChange"]),
                              createVNode("div", { class: "min-w-0 flex-1" }, [
                                createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white truncate" }, toDisplayString(unref(labelFor)(def)), 1),
                                createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate" }, toDisplayString(def.code), 1)
                              ])
                            ]);
                          }), 128))
                        ])
                      ], 64);
                    }), 128))
                  ], 64))
                ])
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings/manages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
