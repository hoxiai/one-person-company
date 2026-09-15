import { g as useToast, e as useI18n, h as useAdminPermissions, t as useSettings, v as useAsyncData, b as _sfc_main$E, n as _sfc_main$v, k as _sfc_main$z, q as navigateTo } from './server.mjs';
import { _ as __nuxt_component_2, i as isSettingsTabId } from './Nav-DQUTv58w.mjs';
import { _ as _sfc_main$1 } from './Switch-fZeXww_c.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import './VisuallyHiddenInput-32bCuzTQ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "extensions",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const toast = useToast();
    const { t } = useI18n();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const { fetchSettings } = useSettings();
    const saving = ref(false);
    const migrating = ref("");
    const selected = ref(/* @__PURE__ */ new Set());
    const fetchExtensionSettings = $fetch;
    const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("extension-settings", () => fetchExtensionSettings("/api/admin/settings/extensions"))), __temp = await __temp, __restore(), __temp);
    const extensions = computed(() => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.extensions) || [];
    });
    selected.value = new Set(((_a = data.value) == null ? void 0 : _a.enabled) || []);
    const emptyStatus = () => ({
      dialect: "sqlite",
      state: "ready",
      migrations: [],
      failure: null
    });
    const migrationStatus = (id) => {
      var _a2;
      return ((_a2 = data.value) == null ? void 0 : _a2.migrationStatuses[id]) || emptyStatus();
    };
    const statusColor = (id) => {
      const state = migrationStatus(id).state;
      if (state === "ready") return "success";
      if (state === "pending") return "warning";
      return "error";
    };
    const goToSettingsTab = (tabId) => {
      if (isSettingsTabId(tabId)) navigateTo({ path: "/admin/settings", query: { tab: tabId } });
    };
    const toggle = (id, enabled) => {
      const next = new Set(selected.value);
      if (enabled) next.add(id);
      else next.delete(id);
      selected.value = next;
    };
    const migrate = async (id) => {
      var _a2;
      migrating.value = id;
      try {
        await $fetch("/api/admin/settings/extensions", {
          method: "POST",
          body: { action: "migrate", extension: id }
        });
        await refresh();
        toast.add({ title: t("admin.extensions.migrated"), color: "success" });
      } catch (error) {
        const failure = error;
        toast.add({
          title: t("admin.extensions.migrateFailed"),
          description: ((_a2 = failure.data) == null ? void 0 : _a2.message) || failure.message,
          color: "error"
        });
        await refresh();
      } finally {
        migrating.value = "";
      }
    };
    const save = async () => {
      var _a2;
      saving.value = true;
      try {
        await $fetch("/api/admin/settings/extensions", {
          method: "POST",
          body: { enabled: [...selected.value] }
        });
        await fetchSettings(true);
        toast.add({ title: t("admin.extensions.saved"), color: "success" });
      } catch (error) {
        const failure = error;
        toast.add({
          title: t("admin.extensions.saveFailed"),
          description: ((_a2 = failure.data) == null ? void 0 : _a2.message) || failure.message,
          color: "error"
        });
      } finally {
        saving.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$E;
      const _component_AdminSettingsNav = __nuxt_component_2;
      const _component_UBadge = _sfc_main$v;
      const _component_UButton = _sfc_main$z;
      const _component_USwitch = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto pb-12" }, _attrs))}><div class="mb-8"><h1 class="flex items-center gap-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:puzzle-piece-fill",
        class: "h-8 w-8 text-purple-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("admin.extensions.title"))}</h1><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.extensions.subtitle"))}</p></div><div class="grid grid-cols-1 gap-8 lg:grid-cols-12">`);
      _push(ssrRenderComponent(_component_AdminSettingsNav, {
        active: "extensions",
        onSelect: goToSettingsTab
      }, null, _parent));
      _push(`<div class="space-y-4 lg:col-span-9"><!--[-->`);
      ssrRenderList(unref(extensions), (extension) => {
        _push(`<div class="flex items-start justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800/60 dark:bg-[#121214]"><div class="min-w-0 flex-1"><div class="flex items-center gap-2"><h2 class="font-semibold text-gray-900 dark:text-white">${ssrInterpolate(extension.name)}</h2>`);
        _push(ssrRenderComponent(_component_UBadge, {
          color: "neutral",
          variant: "subtle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`v${ssrInterpolate(extension.version)}`);
            } else {
              return [
                createTextVNode("v" + toDisplayString(extension.version), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_UBadge, {
          color: statusColor(extension.id),
          variant: "subtle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(`admin.extensions.status.${migrationStatus(extension.id).state}`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(`admin.extensions.status.${migrationStatus(extension.id).state}`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(extension.description)}</p><code class="mt-3 block text-xs text-gray-400">${ssrInterpolate(extension.id)}</code>`);
        if (migrationStatus(extension.id).migrations.length) {
          _push(`<p class="mt-2 text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.extensions.migrationSummary", {
            applied: migrationStatus(extension.id).migrations.filter((item) => item.state === "applied").length,
            total: migrationStatus(extension.id).migrations.length,
            dialect: migrationStatus(extension.id).dialect
          }))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (migrationStatus(extension.id).state !== "ready" && migrationStatus(extension.id).state !== "checksum_mismatch") {
          _push(ssrRenderComponent(_component_UButton, {
            class: "mt-4",
            color: "warning",
            variant: "soft",
            size: "sm",
            icon: "ph:database",
            loading: unref(migrating) === extension.id,
            disabled: !unref(hasAdminPerm)("settings:edit") || !!unref(migrating),
            onClick: ($event) => migrate(extension.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.extensions.migrate"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.extensions.migrate")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_USwitch, {
          "model-value": unref(selected).has(extension.id),
          disabled: !unref(hasAdminPerm)("settings:edit") || unref(saving) || !unref(selected).has(extension.id) && migrationStatus(extension.id).state !== "ready",
          "onUpdate:modelValue": ($event) => toggle(extension.id, $event)
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="flex justify-end">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        loading: unref(saving),
        disabled: !unref(hasAdminPerm)("settings:edit"),
        onClick: save
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.extensions.save"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.extensions.save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings/extensions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
