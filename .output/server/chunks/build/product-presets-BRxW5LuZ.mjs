import { e as useI18n, g as useToast, h as useAdminPermissions, b as _sfc_main$G, c as _sfc_main$l, o as _sfc_main$j, k as _sfc_main$B, d as _sfc_main$k, q as navigateTo } from './server.mjs';
import { _ as __nuxt_component_2, i as isSettingsTabId } from './Nav-DQUTv58w.mjs';
import { _ as _sfc_main$1 } from './Checkbox-BmTSvkxP.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { P as PRESET_FIELD_TYPES, i as isValidPresetFieldName, c as cleanMetaPresets, a as PRODUCT_META_PRESETS_KEY, p as parseMetaPresets } from './adminProductFormData-BiTP6ur1.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
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
  __name: "product-presets",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const toast = useToast();
    const { hasPerm: hasAdminPerm } = useAdminPermissions();
    const adminFetch = $fetch;
    const goToSettingsTab = (tabId) => {
      if (isSettingsTabId(tabId)) {
        navigateTo({ path: "/admin/settings", query: { tab: tabId } });
      }
    };
    const typeOptions = computed(() => [
      { label: t("admin.products.form.type_basic"), value: "basic" },
      { label: t("admin.products.form.type_subscription"), value: "subscription" },
      { label: t("admin.products.form.type_service"), value: "service" },
      { label: t("admin.products.form.type_key"), value: "key" },
      { label: t("admin.products.form.type_file"), value: "file" },
      { label: t("admin.products.form.type_topup"), value: "topup" }
    ]);
    const fieldTypeOptions = computed(
      () => PRESET_FIELD_TYPES.map((value) => ({ label: t(`admin.settings.presets.type_${value}`), value }))
    );
    const activeType = ref("subscription");
    const presets = ref({});
    const isSaving = ref(false);
    const currentFields = computed(() => {
      if (!presets.value[activeType.value]) presets.value[activeType.value] = [];
      return presets.value[activeType.value];
    });
    const addField = () => {
      currentFields.value.push({
        id: `${Date.now()}${Math.random().toString(36).slice(2, 9)}`,
        name: "",
        label: "",
        type: "text",
        required: false,
        default: ""
      });
    };
    const removeField = (index) => {
      currentFields.value.splice(index, 1);
    };
    const save = async () => {
      isSaving.value = true;
      try {
        const cleaned = cleanMetaPresets(presets.value);
        await adminFetch("/api/admin/settings", {
          method: "POST",
          body: { [PRODUCT_META_PRESETS_KEY]: JSON.stringify(cleaned) }
        });
        presets.value = parseMetaPresets(JSON.stringify(cleaned));
        toast.add({ title: t("admin.common.save"), color: "success" });
      } catch (e) {
        toast.add({ title: "Error", description: (e == null ? void 0 : e.message) || "Failed", color: "error" });
      } finally {
        isSaving.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_AdminSettingsNav = __nuxt_component_2;
      const _component_UFormField = _sfc_main$l;
      const _component_USelect = _sfc_main$j;
      const _component_UButton = _sfc_main$B;
      const _component_UInput = _sfc_main$k;
      const _component_UCheckbox = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto pb-12" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:list-plus-fill",
        class: "w-8 h-8 text-purple-500"
      }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("admin.settings.presets.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(_ctx.$t("admin.settings.presets.subtitle"))}</p></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-8">`);
      _push(ssrRenderComponent(_component_AdminSettingsNav, {
        active: "product-presets",
        onSelect: goToSettingsTab
      }, null, _parent));
      _push(`<div class="lg:col-span-9 space-y-6">`);
      if (!unref(hasAdminPerm)("settings:view")) {
        _push(`<div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-8 text-center text-gray-500 dark:text-gray-400">${ssrInterpolate(_ctx.$t("admin.settings.presets.no_permission"))}</div>`);
      } else {
        _push(`<!--[--><div class="flex items-center justify-between gap-4">`);
        _push(ssrRenderComponent(_component_UFormField, {
          label: _ctx.$t("admin.settings.presets.product_type")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_USelect, {
                modelValue: activeType.value,
                "onUpdate:modelValue": ($event) => activeType.value = $event,
                items: typeOptions.value,
                "option-attribute": "label",
                "value-attribute": "value",
                class: "w-56"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_USelect, {
                  modelValue: activeType.value,
                  "onUpdate:modelValue": ($event) => activeType.value = $event,
                  items: typeOptions.value,
                  "option-attribute": "label",
                  "value-attribute": "value",
                  class: "w-56"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(hasAdminPerm)("settings:edit")) {
          _push(ssrRenderComponent(_component_UButton, {
            size: "sm",
            color: "primary",
            class: "bg-purple-600 hover:bg-purple-500 text-white",
            loading: isSaving.value,
            onClick: save
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
        _push(`</div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl p-6"><p class="text-xs text-gray-500 dark:text-gray-400 mb-4">${ssrInterpolate(_ctx.$t("admin.settings.presets.help"))}</p>`);
        if (!currentFields.value.length) {
          _push(`<div class="text-center text-sm text-gray-400 dark:text-gray-500 py-8">${ssrInterpolate(_ctx.$t("admin.settings.presets.empty"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(currentFields.value, (field, index) => {
          _push(`<div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-end mb-3 pb-3 border-b border-gray-100 dark:border-gray-800/60 last:border-0">`);
          _push(ssrRenderComponent(_component_UFormField, {
            class: "md:col-span-3",
            label: _ctx.$t("admin.settings.presets.field_name")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: field.name,
                  "onUpdate:modelValue": ($event) => field.name = $event,
                  placeholder: "max_items",
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UInput, {
                    modelValue: field.name,
                    "onUpdate:modelValue": ($event) => field.name = $event,
                    placeholder: "max_items",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UFormField, {
            class: "md:col-span-3",
            label: _ctx.$t("admin.settings.presets.field_label")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: field.label,
                  "onUpdate:modelValue": ($event) => field.label = $event,
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UInput, {
                    modelValue: field.label,
                    "onUpdate:modelValue": ($event) => field.label = $event,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UFormField, {
            class: "md:col-span-2",
            label: _ctx.$t("admin.settings.presets.field_type")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_USelect, {
                  modelValue: field.type,
                  "onUpdate:modelValue": ($event) => field.type = $event,
                  items: fieldTypeOptions.value,
                  "option-attribute": "label",
                  "value-attribute": "value",
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_USelect, {
                    modelValue: field.type,
                    "onUpdate:modelValue": ($event) => field.type = $event,
                    items: fieldTypeOptions.value,
                    "option-attribute": "label",
                    "value-attribute": "value",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UFormField, {
            class: "md:col-span-2",
            label: _ctx.$t("admin.settings.presets.field_default")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UInput, {
                  modelValue: field.default,
                  "onUpdate:modelValue": ($event) => field.default = $event,
                  class: "w-full"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UInput, {
                    modelValue: field.default,
                    "onUpdate:modelValue": ($event) => field.default = $event,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="md:col-span-2 flex items-center gap-3 pb-1">`);
          _push(ssrRenderComponent(_component_UCheckbox, {
            modelValue: field.required,
            "onUpdate:modelValue": ($event) => field.required = $event,
            label: _ctx.$t("admin.settings.presets.field_required")
          }, null, _parent));
          _push(ssrRenderComponent(_component_UButton, {
            color: "error",
            variant: "ghost",
            size: "xs",
            icon: "ph:trash",
            onClick: ($event) => removeField(index)
          }, null, _parent));
          _push(`</div>`);
          if (field.name && !unref(isValidPresetFieldName)(field.name)) {
            _push(`<p class="md:col-span-12 text-xs text-red-500">${ssrInterpolate(_ctx.$t("admin.settings.presets.field_name_invalid"))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (unref(hasAdminPerm)("settings:edit")) {
          _push(ssrRenderComponent(_component_UButton, {
            size: "sm",
            variant: "soft",
            icon: "ph:plus",
            class: "mt-2",
            onClick: addField
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("admin.settings.presets.add_field"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("admin.settings.presets.add_field")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/settings/product-presets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
