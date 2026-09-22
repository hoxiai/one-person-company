import { e as useI18n, f as useFormatTime, g as useToast, s as useConfirm, h as useAdminPermissions, i as useAdminExtensions, A as ADMIN_PERMISSIONS, m as moduleViewCode, j as moduleEditCode, b as _sfc_main$G, k as _sfc_main$B, l as _sfc_main$h, n as _sfc_main$x, c as _sfc_main$l, d as _sfc_main$k, o as _sfc_main$j, p as _sfc_main$s, q as navigateTo, r as useRouter } from './server.mjs';
import { _ as __nuxt_component_2, i as isSettingsTabId } from './Nav-DQUTv58w.mjs';
import { defineComponent, computed, reactive, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, withModifiers, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_7 } from './FullScreenModal-C_oQJW_c.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "IntegrationTab",
  __ssrInlineRender: true,
  props: {
    form: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800/60 shadow-xl rounded-2xl overflow-hidden" }, _attrs))}><div class="px-6 py-5 border-b border-gray-200 dark:border-gray-800/60 bg-gray-100 dark:bg-gray-900/20 flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plugs-fill",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><h2 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(_ctx.$t("admin.settings.integration.title"))}</h2></div><div class="p-6 space-y-6"><div class="pb-4 border-b border-gray-200 dark:border-gray-800/60"><h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">${ssrInterpolate(_ctx.$t("admin.settings.integration.shared_auth_token"))}</h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.settings.integration.shared_auth_token_desc"))}</p></div>`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.integration.token"),
        description: _ctx.$t("admin.settings.integration.token_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.integration_token,
              "onUpdate:modelValue": ($event) => __props.form.integration_token = $event,
              type: "password",
              placeholder: "Enter a shared integration token",
              icon: "ph:key",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.integration_token,
                "onUpdate:modelValue": ($event) => __props.form.integration_token = $event,
                type: "password",
                placeholder: "Enter a shared integration token",
                icon: "ph:key",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-2 pb-4 border-b border-gray-200 dark:border-gray-800/60"><h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">${ssrInterpolate(_ctx.$t("admin.settings.integration.ai_gateway"))}</h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.settings.integration.ai_gateway_desc"))}</p></div>`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.integration.ai_gateway_url"),
        description: _ctx.$t("admin.settings.integration.ai_gateway_url_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.ai_gateway_url,
              "onUpdate:modelValue": ($event) => __props.form.ai_gateway_url = $event,
              icon: "ph:cloud-arrow-up",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.ai_gateway_url,
                "onUpdate:modelValue": ($event) => __props.form.ai_gateway_url = $event,
                icon: "ph:cloud-arrow-up",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-2 pb-4 border-b border-gray-200 dark:border-gray-800/60"><h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">${ssrInterpolate(_ctx.$t("admin.settings.integration.webhook"))}</h3><p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${ssrInterpolate(_ctx.$t("admin.settings.integration.webhook_desc"))}</p></div>`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.settings.integration.webhook_url"),
        description: _ctx.$t("admin.settings.integration.webhook_url_desc")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: __props.form.webhook_url,
              "onUpdate:modelValue": ($event) => __props.form.webhook_url = $event,
              placeholder: "https://your-domain.com/webhook",
              icon: "ph:link",
              size: "md",
              class: "w-full",
              ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: __props.form.webhook_url,
                "onUpdate:modelValue": ($event) => __props.form.webhook_url = $event,
                placeholder: "https://your-domain.com/webhook",
                icon: "ph:link",
                size: "md",
                class: "w-full",
                ui: { base: "bg-gray-50 dark:bg-[#09090b]" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/settings/IntegrationTab.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "AdminSettingsIntegrationTab" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "authorization",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const { formatDateTime } = useFormatTime();
    const toast = useToast();
    const { confirm } = useConfirm();
    const adminFetch = $fetch;
    const { hasPerm: hasAdminPerm, labelFor } = useAdminPermissions();
    const { extensionPermissionDefs, themeSectionTitle } = useAdminExtensions();
    const isZh = computed(() => locale.value.startsWith("zh"));
    const titleLabel = computed(() => isZh.value ? "\u6388\u6743" : "Authorization");
    const subtitleLabel = computed(() => isZh.value ? "\u7BA1\u7406\u672C\u670D\u52A1\u5BF9\u5916\u8C03\u7528\u65F6\u643A\u5E26\u7684\u51ED\u636E\uFF0C\u4EE5\u53CA\u5141\u8BB8\u522B\u4EBA\u8C03\u7528\u672C\u670D\u52A1\u63A5\u53E3\u7684\u7CFB\u7EDF Token\u3002" : "Manage the credentials this server presents to outbound services, and the system tokens that let others call into this server.");
    const outboundSectionLabel = computed(() => isZh.value ? "\u5BF9\u5916\u96C6\u6210" : "Outbound integration");
    const outboundSectionHint = computed(() => isZh.value ? "\u672C\u670D\u52A1\u8C03\u7528 AI Gateway / Webhook \u7B49\u5916\u90E8\u670D\u52A1\u65F6\uFF0C\u81EA\u5DF1\u643A\u5E26\u7684\u8BA4\u8BC1\u4FE1\u606F\u3002" : "Credentials this server presents when calling out to the AI Gateway, webhooks, and other external services.");
    const inboundSectionLabel = computed(() => isZh.value ? "\u7CFB\u7EDF Token" : "System tokens");
    const inboundSectionHint = computed(() => isZh.value ? "\u4F9B\u811A\u672C / \u81EA\u52A8\u5316\u76F4\u63A5\u8C03\u7528\u672C\u670D\u52A1\u540E\u53F0\u63A5\u53E3\uFF0C\u6743\u9650\u8303\u56F4\u5728\u521B\u5EFA\u65F6\u52FE\u9009\uFF0C\u548C\u8D26\u53F7\u767B\u5F55\u8D70\u7684\u662F\u540C\u4E00\u5957\u670D\u52A1\u7AEF\u6821\u9A8C\u3002" : "For scripts and automation to call this server\u2019s admin APIs directly. Scope is set at creation and enforced by the same server-side checks as a logged-in admin.");
    const noSettingsPermTitle = computed(() => isZh.value ? "\u65E0\u8BBE\u7F6E\u7BA1\u7406\u6743\u9650" : "Requires settings permission");
    const noTokensPermTitle = computed(() => isZh.value ? "\u65E0\u7BA1\u7406\u5458\u7BA1\u7406\u6743\u9650" : "Requires admins permission");
    const createTokenLabel = computed(() => isZh.value ? "\u65B0\u5EFA\u7CFB\u7EDF Token" : "Create System Token");
    const fullAccessLabel = computed(() => isZh.value ? "\u5168\u90E8\u6743\u9650" : "Full Access");
    const permissionsLabel = computed(() => isZh.value ? "\u4E2A\u6A21\u5757" : "modules");
    const neverLabel = computed(() => isZh.value ? "\u4ECE\u672A" : "Never");
    const emptyTitleLabel = computed(() => isZh.value ? "\u8FD8\u6CA1\u6709\u7CFB\u7EDF Token" : "No system tokens yet");
    const emptyDescLabel = computed(() => isZh.value ? "\u521B\u5EFA\u4E00\u4E2A Token\uFF0C\u811A\u672C\u91CC\u5E26 Authorization: Bearer \u5934\u5C31\u80FD\u76F4\u63A5\u8C03\u7528\u540E\u53F0\u63A5\u53E3\u3002" : "Create a token to call admin APIs from your own scripts with an Authorization: Bearer header.");
    const nameLabel = computed(() => isZh.value ? "\u540D\u79F0" : "Name");
    const namePlaceholder = computed(() => isZh.value ? "\u4F8B\u5982\uFF1A\u6570\u636E\u540C\u6B65\u811A\u672C" : "e.g. Data sync script");
    const expiresLabel = computed(() => isZh.value ? "\u8FC7\u671F\u65F6\u95F4" : "Expires");
    const permissionSectionLabel = computed(() => isZh.value ? "\u6743\u9650\u8303\u56F4" : "Permission scope");
    const permissionSectionHint = computed(() => isZh.value ? "\u52FE\u9009\u6B64 Token \u53EF\u8BBF\u95EE\u7684\u540E\u53F0\u6A21\u5757\uFF0C\u4EE5\u53CA\u662F\u5426\u5141\u8BB8\u4FEE\u6539\u2014\u2014\u548C\u8D26\u53F7\u6743\u9650\u8D70\u540C\u4E00\u5957\u63A5\u53E3\u6821\u9A8C\uFF0C\u4E0D\u662F\u4EC5\u524D\u7AEF\u8FC7\u6EE4\u3002" : "Select which admin modules this token can reach, and whether it can make changes \u2014 enforced by the same API-level checks as account permissions, not just UI filtering.");
    const moduleColumnLabel = computed(() => isZh.value ? "\u6A21\u5757" : "Module");
    const viewLabel = computed(() => isZh.value ? "\u67E5\u770B" : "View");
    const editLabel = computed(() => isZh.value ? "\u7F16\u8F91" : "Edit");
    const selectAllLabel = computed(() => isZh.value ? "\u5168\u9009" : "Select All");
    const clearAllLabel = computed(() => isZh.value ? "\u6E05\u7A7A" : "Clear All");
    const revealTitleLabel = computed(() => isZh.value ? "\u4FDD\u5B58\u597D\u8FD9\u4E2A Token" : "Save this token");
    const revealDescLabel = computed(() => isZh.value ? "\u73B0\u5728\u590D\u5236\u5B83\u2014\u2014\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u5173\u95ED\u8FD9\u4E2A\u7A97\u53E3\u540E\u5C31\u518D\u4E5F\u770B\u4E0D\u5230\u5B8C\u6574\u5185\u5BB9\u4E86\u3002" : "Copy it now \u2014 for security, you won\u2019t be able to see the full value again after closing this.");
    const doneLabel = computed(() => isZh.value ? "\u6211\u5DF2\u4FDD\u5B58" : "Done, I saved it");
    const goToSettingsTab = (tabId) => {
      if (isSettingsTabId(tabId)) {
        navigateTo({ path: "/admin/settings", query: { tab: tabId } });
      }
    };
    const integrationForm = reactive({
      integration_token: "",
      ai_gateway_url: "",
      webhook_url: ""
    });
    const isSavingIntegration = ref(false);
    const saveIntegrationForm = async () => {
      var _a;
      isSavingIntegration.value = true;
      try {
        await adminFetch("/api/admin/settings", { method: "POST", body: { ...integrationForm } });
        toast.add({ title: isZh.value ? "\u5DF2\u4FDD\u5B58" : "Saved", color: "success" });
      } catch (e) {
        toast.add({
          title: isZh.value ? "\u9519\u8BEF" : "Error",
          description: ((_a = e.data) == null ? void 0 : _a.message) || (isZh.value ? "\u4FDD\u5B58\u5931\u8D25" : "Failed to save"),
          color: "error"
        });
      } finally {
        isSavingIntegration.value = false;
      }
    };
    const totalPermissionCount = ADMIN_PERMISSIONS.length;
    const allPermissionDefs = computed(() => [...ADMIN_PERMISSIONS, ...extensionPermissionDefs.value]);
    const allTieredCodes = computed(
      () => allPermissionDefs.value.flatMap((def) => {
        if (def.editable === void 0) return [def.code];
        return def.editable === false ? [moduleViewCode(def.code)] : [moduleViewCode(def.code), moduleEditCode(def.code)];
      })
    );
    const tokenColumns = computed(() => [
      { accessorKey: "name", header: nameLabel.value },
      { accessorKey: "status", header: isZh.value ? "\u72B6\u6001" : "Status" },
      { accessorKey: "permissions", header: permissionSectionLabel.value },
      { accessorKey: "creator", header: isZh.value ? "\u521B\u5EFA\u8005" : "Created by" },
      { accessorKey: "createdAt", header: isZh.value ? "\u521B\u5EFA\u4E8E" : "Created" },
      { accessorKey: "lastUsedAt", header: isZh.value ? "\u6700\u8FD1\u4F7F\u7528" : "Last used" },
      { accessorKey: "actions", header: "", size: 60 }
    ]);
    const tokensData = ref(null);
    const tokensPending = ref(true);
    const refreshTokens = async () => {
      if (!hasAdminPerm("admins:view")) {
        tokensPending.value = false;
        return;
      }
      tokensPending.value = true;
      try {
        tokensData.value = await adminFetch("/api/admin/admins/tokens");
      } catch (e) {
        if ((e == null ? void 0 : e.status) === 401 || (e == null ? void 0 : e.statusCode) === 401) useRouter().push("/admin/login");
      } finally {
        tokensPending.value = false;
      }
    };
    const tokens = computed(() => {
      var _a;
      return ((_a = tokensData.value) == null ? void 0 : _a.data) || [];
    });
    const isExpired = (tok) => !!tok.expiresAt && new Date(tok.expiresAt).getTime() < Date.now();
    const statusColor = (tok) => {
      if (tok.revoked) return "neutral";
      if (isExpired(tok)) return "warning";
      return "success";
    };
    const statusLabel = (tok) => {
      if (tok.revoked) return isZh.value ? "\u5DF2\u540A\u9500" : "Revoked";
      if (isExpired(tok)) return isZh.value ? "\u5DF2\u8FC7\u671F" : "Expired";
      return isZh.value ? "\u6709\u6548" : "Active";
    };
    const isCreateModalOpen = ref(false);
    const isCreating = ref(false);
    const createForm = reactive({
      name: "",
      expiresInDays: "never"
    });
    const formPermissions = ref([]);
    const expiryOptions = computed(() => [
      { label: isZh.value ? "\u6C38\u4E0D\u8FC7\u671F" : "Never expires", value: "never" },
      { label: isZh.value ? "30 \u5929" : "30 days", value: "30" },
      { label: isZh.value ? "90 \u5929" : "90 days", value: "90" },
      { label: isZh.value ? "365 \u5929" : "365 days", value: "365" }
    ]);
    const openCreateModal = () => {
      createForm.name = "";
      createForm.expiresInDays = "never";
      formPermissions.value = [];
      isCreateModalOpen.value = true;
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
    const onPermToggle = (code, checked) => {
      if (checked) {
        if (!formPermissions.value.includes(code)) formPermissions.value.push(code);
      } else {
        const i = formPermissions.value.indexOf(code);
        if (i >= 0) formPermissions.value.splice(i, 1);
      }
    };
    const toggleAllPerms = (select) => {
      formPermissions.value = select ? [...allTieredCodes.value] : [];
    };
    const isRevealModalOpen = ref(false);
    const revealedToken = ref("");
    const createToken = async () => {
      var _a;
      if (!hasAdminPerm("admins:edit")) return;
      isCreating.value = true;
      try {
        const permissions = formPermissions.value.length >= allTieredCodes.value.length ? ["*"] : [...formPermissions.value];
        const res = await adminFetch("/api/admin/admins/tokens", {
          method: "POST",
          body: {
            name: createForm.name,
            expiresInDays: createForm.expiresInDays === "never" ? null : Number(createForm.expiresInDays),
            permissions
          }
        });
        isCreateModalOpen.value = false;
        revealedToken.value = res.token;
        isRevealModalOpen.value = true;
        await refreshTokens();
      } catch (e) {
        toast.add({
          title: isZh.value ? "\u9519\u8BEF" : "Error",
          description: ((_a = e.data) == null ? void 0 : _a.message) || (isZh.value ? "\u521B\u5EFA\u5931\u8D25" : "Failed to create token"),
          color: "error"
        });
      } finally {
        isCreating.value = false;
      }
    };
    const copyRevealedToken = () => {
      if (!revealedToken.value) return;
      (void 0).clipboard.writeText(revealedToken.value);
      toast.add({ title: isZh.value ? "\u5DF2\u590D\u5236" : "Copied", color: "success" });
    };
    const revokeToken = async (tok) => {
      var _a;
      const isConfirmed = await confirm({
        title: isZh.value ? "\u540A\u9500 Token" : "Revoke Token",
        description: isZh.value ? `\u786E\u5B9A\u8981\u540A\u9500\u300C${tok.name || tok.id}\u300D\u5417\uFF1F\u7528\u5B83\u7B7E\u540D\u7684\u8BF7\u6C42\u4F1A\u7ACB\u523B\u5931\u6548\u3002` : `Revoke "${tok.name || tok.id}"? Any request signed with it will stop working immediately.`
      });
      if (!isConfirmed) return;
      try {
        await adminFetch(`/api/admin/admins/tokens/${tok.id}`, { method: "DELETE" });
        await refreshTokens();
        toast.add({ title: isZh.value ? "\u5DF2\u540A\u9500" : "Revoked", color: "success" });
      } catch (e) {
        toast.add({
          title: isZh.value ? "\u9519\u8BEF" : "Error",
          description: ((_a = e.data) == null ? void 0 : _a.message) || (isZh.value ? "\u540A\u9500\u5931\u8D25" : "Failed to revoke token"),
          color: "error"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_AdminSettingsNav = __nuxt_component_2;
      const _component_UButton = _sfc_main$B;
      const _component_AdminSettingsIntegrationTab = __nuxt_component_3;
      const _component_UTable = _sfc_main$h;
      const _component_UBadge = _sfc_main$x;
      const _component_FullScreenModal = __nuxt_component_7;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_USelect = _sfc_main$j;
      const _component_UModal = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto pb-12" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:key-fill",
        class: "w-8 h-8 text-purple-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(titleLabel.value)}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(subtitleLabel.value)}</p></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8">`);
      _push(ssrRenderComponent(_component_AdminSettingsNav, {
        active: "authorization",
        onSelect: goToSettingsTab
      }, null, _parent));
      _push(`<div class="lg:col-span-9 space-y-8"><div><div class="flex items-center justify-between mb-3"><div><h2 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">${ssrInterpolate(outboundSectionLabel.value)}</h2><p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">${ssrInterpolate(outboundSectionHint.value)}</p></div>`);
      if (unref(hasAdminPerm)("settings:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          size: "sm",
          color: "primary",
          class: "bg-purple-600 hover:bg-purple-500 text-white",
          loading: isSavingIntegration.value,
          onClick: saveIntegrationForm
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("admin.common.save"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("admin.common.save")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(hasAdminPerm)("settings:view")) {
        _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 text-center text-gray-500 dark:text-gray-400">${ssrInterpolate(noSettingsPermTitle.value)}</div>`);
      } else {
        _push(ssrRenderComponent(_component_AdminSettingsIntegrationTab, { form: integrationForm }, null, _parent));
      }
      _push(`</div><div><div class="flex items-center justify-between mb-3"><div><h2 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">${ssrInterpolate(inboundSectionLabel.value)}</h2><p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">${ssrInterpolate(inboundSectionHint.value)}</p></div>`);
      if (unref(hasAdminPerm)("admins:edit")) {
        _push(ssrRenderComponent(_component_UButton, {
          size: "sm",
          color: "primary",
          class: "bg-purple-600 hover:bg-purple-500 text-white",
          icon: "ph:plus-bold",
          onClick: openCreateModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(createTokenLabel.value)}`);
            } else {
              return [
                createTextVNode(toDisplayString(createTokenLabel.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(hasAdminPerm)("admins:view")) {
        _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 text-center text-gray-500 dark:text-gray-400">${ssrInterpolate(noTokensPermTitle.value)}</div>`);
      } else {
        _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm overflow-hidden">`);
        if (tokensPending.value) {
          _push(`<div class="p-6 space-y-4"><!--[-->`);
          ssrRenderList(2, (i) => {
            _push(`<div class="h-16 bg-gray-100 dark:bg-white/5 rounded-xl animate-pulse"></div>`);
          });
          _push(`<!--]--></div>`);
        } else if (tokens.value.length) {
          _push(`<div class="overflow-auto">`);
          _push(ssrRenderComponent(_component_UTable, {
            data: tokens.value,
            columns: tokenColumns.value,
            class: "min-w-full"
          }, {
            "status-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: statusColor(row.original),
                  variant: "subtle",
                  size: "sm"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(statusLabel(row.original))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(statusLabel(row.original)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UBadge, {
                    color: statusColor(row.original),
                    variant: "subtle",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(statusLabel(row.original)), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"])
                ];
              }
            }),
            "permissions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
              var _a, _b, _c, _d, _e, _f;
              if (_push2) {
                _push2(`<div class="flex items-center gap-1.5"${_scopeId}>`);
                if ((_a = row.original.permissionSummary) == null ? void 0 : _a.all) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:shield-check",
                    class: "w-4 h-4 text-emerald-500 shrink-0"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:shield-half-tilt",
                    class: "w-4 h-4 text-blue-500 shrink-0"
                  }, null, _parent2, _scopeId));
                }
                _push2(`<span class="text-sm text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(((_b = row.original.permissionSummary) == null ? void 0 : _b.all) ? fullAccessLabel.value : `${((_c = row.original.permissionSummary) == null ? void 0 : _c.count) || 0} / ${unref(totalPermissionCount)} ${permissionsLabel.value}`)}</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center gap-1.5" }, [
                    ((_d = row.original.permissionSummary) == null ? void 0 : _d.all) ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: "ph:shield-check",
                      class: "w-4 h-4 text-emerald-500 shrink-0"
                    })) : (openBlock(), createBlock(_component_UIcon, {
                      key: 1,
                      name: "ph:shield-half-tilt",
                      class: "w-4 h-4 text-blue-500 shrink-0"
                    })),
                    createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(((_e = row.original.permissionSummary) == null ? void 0 : _e.all) ? fullAccessLabel.value : `${((_f = row.original.permissionSummary) == null ? void 0 : _f.count) || 0} / ${unref(totalPermissionCount)} ${permissionsLabel.value}`), 1)
                  ])
                ];
              }
            }),
            "creator-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(row.original.adminUsername || "\u2014")}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.adminUsername || "\u2014"), 1)
                ];
              }
            }),
            "createdAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(formatDateTime)(row.original.createdAt))}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(formatDateTime)(row.original.createdAt)), 1)
                ];
              }
            }),
            "lastUsedAt-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(row.original.lastUsedAt ? unref(formatDateTime)(row.original.lastUsedAt) : neverLabel.value)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(row.original.lastUsedAt ? unref(formatDateTime)(row.original.lastUsedAt) : neverLabel.value), 1)
                ];
              }
            }),
            "actions-cell": withCtx(({ row }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (!row.original.revoked) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    color: "error",
                    variant: "ghost",
                    icon: "ph:trash",
                    disabled: !unref(hasAdminPerm)("admins:edit"),
                    onClick: ($event) => revokeToken(row.original)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  !row.original.revoked ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    color: "error",
                    variant: "ghost",
                    icon: "ph:trash",
                    disabled: !unref(hasAdminPerm)("admins:edit"),
                    onClick: ($event) => revokeToken(row.original)
                  }, null, 8, ["disabled", "onClick"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="flex flex-col items-center justify-center py-16 text-center px-6"><div class="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:key",
            class: "w-7 h-7 text-gray-400"
          }, null, _parent));
          _push(`</div><h3 class="text-base font-bold text-gray-900 dark:text-white mb-1">${ssrInterpolate(emptyTitleLabel.value)}</h3><p class="text-gray-500 dark:text-gray-400 max-w-sm mb-5 text-sm">${ssrInterpolate(emptyDescLabel.value)}</p>`);
          if (unref(hasAdminPerm)("admins:edit")) {
            _push(ssrRenderComponent(_component_UButton, {
              color: "primary",
              class: "bg-purple-600 hover:bg-purple-500 text-white",
              onClick: openCreateModal
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(createTokenLabel.value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(createTokenLabel.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_FullScreenModal, {
        modelValue: isCreateModalOpen.value,
        "onUpdate:modelValue": ($event) => isCreateModalOpen.value = $event,
        title: createTokenLabel.value,
        maxWidth: "sm:max-w-2xl",
        defaultFullscreen: false
      }, {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              onClick: ($event) => isCreateModalOpen.value = false
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
              form: "admin-token-form",
              color: "primary",
              class: "bg-purple-600 hover:bg-purple-500 text-white",
              loading: isCreating.value,
              disabled: !unref(hasAdminPerm)("admins:edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(createTokenLabel.value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(createTokenLabel.value), 1)
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
                onClick: ($event) => isCreateModalOpen.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("admin.common.cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_UButton, {
                type: "submit",
                form: "admin-token-form",
                color: "primary",
                class: "bg-purple-600 hover:bg-purple-500 text-white",
                loading: isCreating.value,
                disabled: !unref(hasAdminPerm)("admins:edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(createTokenLabel.value), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form id="admin-token-form" class="space-y-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, { label: nameLabel.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: createForm.name,
                    "onUpdate:modelValue": ($event) => createForm.name = $event,
                    required: "",
                    placeholder: namePlaceholder.value,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: createForm.name,
                      "onUpdate:modelValue": ($event) => createForm.name = $event,
                      required: "",
                      placeholder: namePlaceholder.value,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: expiresLabel.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: createForm.expiresInDays,
                    "onUpdate:modelValue": ($event) => createForm.expiresInDays = $event,
                    items: expiryOptions.value,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: createForm.expiresInDays,
                      "onUpdate:modelValue": ($event) => createForm.expiresInDays = $event,
                      items: expiryOptions.value,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><div class="flex items-center justify-between mb-3"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"${_scopeId}>${ssrInterpolate(permissionSectionLabel.value)}</label><p class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(permissionSectionHint.value)}</p></div><div class="flex items-center gap-2"${_scopeId}>`);
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
            _push2(`</div></div><div class="flex items-center gap-4 px-3 mb-1.5 text-[11px] font-semibold tracking-wide text-gray-400 dark:text-gray-500"${_scopeId}><div class="flex-1"${_scopeId}>${ssrInterpolate(moduleColumnLabel.value)}</div><div class="w-14 text-center shrink-0"${_scopeId}>${ssrInterpolate(viewLabel.value)}</div><div class="w-14 text-center shrink-0"${_scopeId}>${ssrInterpolate(editLabel.value)}</div></div><div class="space-y-1.5"${_scopeId}><!--[-->`);
            ssrRenderList(unref(ADMIN_PERMISSIONS), (def) => {
              _push2(`<div class="flex items-center gap-4 rounded-lg border border-gray-200 dark:border-white/5 px-3 py-2"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="text-sm font-medium text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(unref(labelFor)(def))}</div><div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate"${_scopeId}>${ssrInterpolate(def.code)}</div></div><div class="w-14 flex justify-center shrink-0"${_scopeId}><input${ssrIncludeBooleanAttr(hasView(def.code)) ? " checked" : ""} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0"${_scopeId}></div><div class="w-14 flex justify-center shrink-0"${_scopeId}>`);
              if (def.editable !== false) {
                _push2(`<input${ssrIncludeBooleanAttr(hasEdit(def.code)) ? " checked" : ""} type="checkbox" class="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
            if (unref(extensionPermissionDefs).length) {
              _push2(`<!--[--><div class="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-500 mt-4 mb-2"${_scopeId}>${ssrInterpolate(unref(themeSectionTitle))}</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(extensionPermissionDefs), (def) => {
                _push2(`<label class="flex items-start gap-2.5 rounded-lg border border-gray-200 dark:border-white/5 px-3 py-2.5 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.03] has-[:checked]:border-purple-300 has-[:checked]:bg-purple-50/60 dark:has-[:checked]:border-purple-500/30 dark:has-[:checked]:bg-purple-500/10"${_scopeId}><input${ssrIncludeBooleanAttr(formPermissions.value.includes(def.code)) ? " checked" : ""} type="checkbox" class="mt-0.5 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="text-sm font-medium text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(unref(labelFor)(def))}</div><div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate"${_scopeId}>${ssrInterpolate(def.code)}</div></div></label>`);
              });
              _push2(`<!--]--></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                id: "admin-token-form",
                onSubmit: withModifiers(createToken, ["prevent"]),
                class: "space-y-5"
              }, [
                createVNode(_component_UFormField, { label: nameLabel.value }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: createForm.name,
                      "onUpdate:modelValue": ($event) => createForm.name = $event,
                      required: "",
                      placeholder: namePlaceholder.value,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_UFormField, { label: expiresLabel.value }, {
                  default: withCtx(() => [
                    createVNode(_component_USelect, {
                      modelValue: createForm.expiresInDays,
                      "onUpdate:modelValue": ($event) => createForm.expiresInDays = $event,
                      items: expiryOptions.value,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode("div", null, [
                  createVNode("div", { class: "flex items-center justify-between mb-3" }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" }, toDisplayString(permissionSectionLabel.value), 1),
                      createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400" }, toDisplayString(permissionSectionHint.value), 1)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
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
                    ])
                  ]),
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
                            type: "checkbox",
                            class: "h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0",
                            onChange: ($event) => onViewToggle(def.code, $event.target.checked)
                          }, null, 40, ["checked", "onChange"])
                        ]),
                        createVNode("div", { class: "w-14 flex justify-center shrink-0" }, [
                          def.editable !== false ? (openBlock(), createBlock("input", {
                            key: 0,
                            checked: hasEdit(def.code),
                            type: "checkbox",
                            class: "h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0",
                            onChange: ($event) => onEditToggle(def.code, $event.target.checked)
                          }, null, 40, ["checked", "onChange"])) : createCommentVNode("", true)
                        ])
                      ]);
                    }), 128))
                  ]),
                  unref(extensionPermissionDefs).length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-500 mt-4 mb-2" }, toDisplayString(unref(themeSectionTitle)), 1),
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(extensionPermissionDefs), (def) => {
                        return openBlock(), createBlock("label", {
                          key: def.code,
                          class: "flex items-start gap-2.5 rounded-lg border border-gray-200 dark:border-white/5 px-3 py-2.5 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.03] has-[:checked]:border-purple-300 has-[:checked]:bg-purple-50/60 dark:has-[:checked]:border-purple-500/30 dark:has-[:checked]:bg-purple-500/10"
                        }, [
                          createVNode("input", {
                            checked: formPermissions.value.includes(def.code),
                            type: "checkbox",
                            class: "mt-0.5 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 dark:border-gray-600 dark:bg-[#1a1a1e] dark:ring-offset-0",
                            onChange: ($event) => onPermToggle(def.code, $event.target.checked)
                          }, null, 40, ["checked", "onChange"]),
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            createVNode("div", { class: "text-sm font-medium text-gray-900 dark:text-white truncate" }, toDisplayString(unref(labelFor)(def)), 1),
                            createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate" }, toDisplayString(def.code), 1)
                          ])
                        ]);
                      }), 128))
                    ])
                  ], 64)) : createCommentVNode("", true)
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isRevealModalOpen.value,
        "onUpdate:open": ($event) => isRevealModalOpen.value = $event,
        ui: { content: "bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><div class="flex items-start gap-3 mb-5"${_scopeId}><div class="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-fill",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-lg font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(revealTitleLabel.value)}</h3><p class="text-sm text-gray-500 dark:text-gray-400 mt-1"${_scopeId}>${ssrInterpolate(revealDescLabel.value)}</p></div></div><div class="flex items-center gap-2 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3"${_scopeId}><code class="text-sm text-emerald-600 dark:text-emerald-400 font-mono break-all flex-1"${_scopeId}>${ssrInterpolate(revealedToken.value)}</code>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:copy",
              size: "sm",
              onClick: copyRevealedToken
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end pt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              class: "bg-purple-600 hover:bg-purple-500 text-white",
              onClick: ($event) => isRevealModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(doneLabel.value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(doneLabel.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("div", { class: "flex items-start gap-3 mb-5" }, [
                  createVNode("div", { class: "w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:warning-fill",
                      class: "w-5 h-5"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-bold text-gray-900 dark:text-white" }, toDisplayString(revealTitleLabel.value), 1),
                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mt-1" }, toDisplayString(revealDescLabel.value), 1)
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3" }, [
                  createVNode("code", { class: "text-sm text-emerald-600 dark:text-emerald-400 font-mono break-all flex-1" }, toDisplayString(revealedToken.value), 1),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:copy",
                    size: "sm",
                    onClick: copyRevealedToken
                  })
                ]),
                createVNode("div", { class: "flex justify-end pt-6" }, [
                  createVNode(_component_UButton, {
                    color: "primary",
                    class: "bg-purple-600 hover:bg-purple-500 text-white",
                    onClick: ($event) => isRevealModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(doneLabel.value), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings/authorization.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
