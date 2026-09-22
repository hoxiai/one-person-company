import { e as useI18n, g as useToast, c as _sfc_main$l, d as _sfc_main$k, k as _sfc_main$B } from './server.mjs';
import { defineComponent, ref, reactive, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useToast();
    const isSaving = ref(false);
    const form = reactive({
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    const isFormValid = computed(() => {
      return form.oldPassword && form.newPassword && form.confirmPassword && form.newPassword === form.confirmPassword && form.newPassword.length >= 6;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col max-w-2xl mx-auto w-full" }, _attrs))}><div class="flex justify-between items-end mb-8 shrink-0"><div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("admin.profile.title"))}</h1><p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">${ssrInterpolate(_ctx.$t("admin.profile.subtitle"))}</p></div></div><div class="bg-white dark:bg-[#121214] border border-gray-200/60 dark:border-gray-800/50 rounded-2xl shadow-sm p-8"><form class="space-y-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.profile.username")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: "admin",
              disabled: "",
              class: "text-gray-500 opacity-70 w-full",
              icon: "ph:user"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: "admin",
                disabled: "",
                class: "text-gray-500 opacity-70 w-full",
                icon: "ph:user"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.profile.currentPassword")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.oldPassword,
              "onUpdate:modelValue": ($event) => form.oldPassword = $event,
              type: "password",
              required: "",
              class: "text-gray-900 dark:text-white w-full",
              icon: "ph:lock-key"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: form.oldPassword,
                "onUpdate:modelValue": ($event) => form.oldPassword = $event,
                type: "password",
                required: "",
                class: "text-gray-900 dark:text-white w-full",
                icon: "ph:lock-key"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.profile.newPassword")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.newPassword,
              "onUpdate:modelValue": ($event) => form.newPassword = $event,
              type: "password",
              required: "",
              class: "text-gray-900 dark:text-white w-full",
              icon: "ph:lock-key-open"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: form.newPassword,
                "onUpdate:modelValue": ($event) => form.newPassword = $event,
                type: "password",
                required: "",
                class: "text-gray-900 dark:text-white w-full",
                icon: "ph:lock-key-open"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UFormField, {
        label: _ctx.$t("admin.profile.confirmPassword")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: form.confirmPassword,
              "onUpdate:modelValue": ($event) => form.confirmPassword = $event,
              type: "password",
              required: "",
              class: "text-gray-900 dark:text-white w-full",
              icon: "ph:lock-key-open"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                modelValue: form.confirmPassword,
                "onUpdate:modelValue": ($event) => form.confirmPassword = $event,
                type: "password",
                required: "",
                class: "text-gray-900 dark:text-white w-full",
                icon: "ph:lock-key-open"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pt-4 border-t border-gray-200 dark:border-gray-800/50 flex justify-end">`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        color: "primary",
        class: "bg-purple-600 hover:bg-purple-500 text-white px-8",
        loading: isSaving.value,
        disabled: !isFormValid.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("admin.profile.save"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("admin.profile.save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
