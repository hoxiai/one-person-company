import { r as useRouter, L as __nuxt_component_0$1, c as _sfc_main$l, d as _sfc_main$k, k as _sfc_main$B } from './server.mjs';
import { defineComponent, reactive, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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

const MIN_PASSWORD_LEN = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setup",
  __ssrInlineRender: true,
  setup(__props) {
    const USERNAME_REGEX = /^[a-zA-Z0-9_.-]{3,32}$/;
    useRouter();
    const form = reactive({
      username: "",
      password: ""
    });
    const isLoading = ref(false);
    const errorMsg = ref("");
    const showPassword = ref(false);
    const redirecting = ref(false);
    const usernameError = computed(() => {
      if (!form.username) return "";
      const trimmed = form.username.trim();
      if (!USERNAME_REGEX.test(trimmed)) {
        return "3-32 chars, letters / digits / _ . - only";
      }
      return "";
    });
    const usernameHint = computed(
      () => usernameError.value ? "" : "3-32 chars: letters, numbers, underscore, dot or hyphen"
    );
    const rules = computed(() => {
      const pw = form.password;
      return [
        {
          label: `At least ${MIN_PASSWORD_LEN} characters`,
          pass: pw.length >= MIN_PASSWORD_LEN
        },
        {
          label: "Contains uppercase letter (A-Z)",
          pass: /[A-Z]/.test(pw)
        },
        {
          label: "Contains lowercase letter (a-z)",
          pass: /[a-z]/.test(pw)
        },
        {
          label: "Contains digit (0-9)",
          pass: /\d/.test(pw)
        },
        {
          label: "At least 2 character classes combined",
          pass: (() => {
            const variety = [/[a-z]/.test(pw), /[A-Z]/.test(pw), /\d/.test(pw)].filter(Boolean).length;
            return variety >= 2;
          })()
        }
      ];
    });
    const strengthScore = computed(() => rules.value.filter((r) => r.pass).length);
    const strengthPercent = computed(() => strengthScore.value / rules.value.length * 100);
    const strengthLabel = computed(() => {
      if (!form.password) return "\u2014";
      const s = strengthScore.value;
      if (s <= 2) return "Weak";
      if (s <= 3) return "Fair";
      if (s <= 4) return "Good";
      return "Strong";
    });
    const strengthLabelClass = computed(() => {
      const s = strengthScore.value;
      if (!form.password) return "text-gray-400";
      if (s <= 2) return "text-red-500";
      if (s <= 3) return "text-amber-500";
      if (s <= 4) return "text-sky-500";
      return "text-emerald-500";
    });
    const strengthBarClass = computed(() => {
      const s = strengthScore.value;
      if (!form.password) return "bg-gray-400";
      if (s <= 2) return "bg-red-500";
      if (s <= 3) return "bg-amber-500";
      if (s <= 4) return "bg-sky-500";
      return "bg-emerald-500";
    });
    const passwordError = computed(() => {
      if (!form.password) return "";
      const firstFail = rules.value.find((r) => !r.pass);
      return firstFail ? `Not met: ${firstFail.label}` : "";
    });
    const passwordHint = computed(
      () => passwordError.value ? "" : `${MIN_PASSWORD_LEN}+ chars with 2+ of lowercase / uppercase / digit`
    );
    const canSubmit = computed(() => {
      if (isLoading.value) return false;
      if (!form.username.trim() || !form.password) return false;
      if (usernameError.value || passwordError.value) return false;
      return true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_UFormField = _sfc_main$l;
      const _component_UInput = _sfc_main$k;
      const _component_UButton = _sfc_main$B;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white dark:bg-[#09090b] flex items-center justify-center p-4" }, _attrs))}><div class="w-full max-w-md"><div class="text-center mb-8"><div class="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(168,85,247,0.4)]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:rocket-launch-fill",
        class: "text-white w-6 h-6"
      }, null, _parent));
      _push(`</div><h1 class="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">System Setup</h1><p class="text-gray-500 dark:text-gray-400 mt-2">Create your first administrator account</p></div><div class="bg-white dark:bg-[#121214] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"><div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>`);
      if (!unref(redirecting)) {
        _push(`<form class="space-y-6">`);
        _push(ssrRenderComponent(_component_UFormField, {
          label: "Admin Username",
          description: unref(usernameHint),
          error: unref(usernameError)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(form).username,
                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                placeholder: "admin",
                size: "lg",
                icon: "ph:user",
                class: "text-white",
                required: ""
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UInput, {
                  modelValue: unref(form).username,
                  "onUpdate:modelValue": ($event) => unref(form).username = $event,
                  placeholder: "admin",
                  size: "lg",
                  icon: "ph:user",
                  class: "text-white",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UFormField, {
          label: "Password",
          description: unref(passwordHint),
          error: unref(passwordError)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: unref(form).password,
                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                type: unref(showPassword) ? "text" : "password",
                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                size: "lg",
                icon: unref(showPassword) ? "ph:eye" : "ph:eye-slash",
                "trailing-icon": unref(showPassword) ? "ph:eye-slash" : "ph:eye",
                class: "text-white",
                required: "",
                "onClick:icon": ($event) => showPassword.value = !unref(showPassword),
                "onClick:trailing": ($event) => showPassword.value = !unref(showPassword)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UInput, {
                  modelValue: unref(form).password,
                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                  type: unref(showPassword) ? "text" : "password",
                  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                  size: "lg",
                  icon: unref(showPassword) ? "ph:eye" : "ph:eye-slash",
                  "trailing-icon": unref(showPassword) ? "ph:eye-slash" : "ph:eye",
                  class: "text-white",
                  required: "",
                  "onClick:icon": ($event) => showPassword.value = !unref(showPassword),
                  "onClick:trailing": ($event) => showPassword.value = !unref(showPassword)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "icon", "trailing-icon", "onClick:icon", "onClick:trailing"])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(form).password) {
          _push(`<div class="space-y-2"><div class="flex items-center justify-between text-xs"><span class="text-gray-500 dark:text-gray-400">Password strength</span><span class="${ssrRenderClass(unref(strengthLabelClass))}">${ssrInterpolate(unref(strengthLabel))}</span></div><div class="h-1.5 w-full rounded-full bg-gray-200/70 dark:bg-gray-800 overflow-hidden"><div class="${ssrRenderClass([unref(strengthBarClass), "h-full rounded-full transition-all duration-200"])}" style="${ssrRenderStyle({ width: unref(strengthPercent) + "%" })}"></div></div><ul class="space-y-1 text-xs pt-1"><!--[-->`);
          ssrRenderList(unref(rules), (rule, idx) => {
            _push(`<li class="${ssrRenderClass([rule.pass ? "text-emerald-500" : "text-gray-500 dark:text-gray-400", "flex items-center gap-2"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: rule.pass ? "ph:check-circle-fill" : "ph:circle",
              class: "w-3.5 h-3.5 shrink-0"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(rule.label)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UButton, {
          type: "submit",
          color: "primary",
          size: "xl",
          block: "",
          class: "mt-8 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all text-white bg-purple-600 hover:bg-purple-500",
          loading: unref(isLoading),
          disabled: !unref(canSubmit)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Initialize System `);
            } else {
              return [
                createTextVNode(" Initialize System ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form>`);
      } else {
        _push(`<div class="py-12 text-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:spinner-gap",
          class: "w-8 h-8 mx-auto animate-spin text-purple-500"
        }, null, _parent));
        _push(`<p class="mt-4 text-sm text-gray-500 dark:text-gray-400">Redirecting\u2026</p></div>`);
      }
      if (unref(errorMsg)) {
        _push(`<div class="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">${ssrInterpolate(unref(errorMsg))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/setup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
