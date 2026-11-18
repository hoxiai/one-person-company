import { u as useI18n, E as useLocaleRouter, bm as useUserSession, bz as useSeoMeta, P as __nuxt_component_3$4 } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
import 'node:zlib';
import 'node:child_process';
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
  __name: "delete",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { loggedIn, user } = useUserSession();
    useSeoMeta({
      title: () => `${t("hoxi.accountDelete.title")} \xB7 ${t("hoxi.site.name")}`,
      description: () => t("hoxi.accountDelete.subtitle"),
      robots: "noindex, nofollow"
    });
    const sessionEmail = computed(() => {
      var _a;
      return String(((_a = user.value) == null ? void 0 : _a.email) || "").trim();
    });
    const email = ref("");
    const code = ref("");
    const reason = ref("");
    const confirmed = ref(false);
    const sendingCode = ref(false);
    const submitting = ref(false);
    const cooldown = ref(0);
    const codeSentNotice = ref("");
    const errorMsg = ref("");
    const completedMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[720px] mx-auto px-4 md:px-6 py-10 md:py-16" }, _attrs))}><nav class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400"><div class="flex flex-wrap items-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/privacy"),
        class: "hover:text-blue-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.footer.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.footer.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-slate-300 dark:text-slate-700">\xB7</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/terms"),
        class: "hover:text-blue-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.footer.terms"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.footer.terms")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-3"><a href="/account/delete" class="hover:text-blue-500 transition-colors"> English </a><span class="text-slate-300 dark:text-slate-700">/</span><a href="/zh/account/delete" class="hover:text-blue-500 transition-colors"> \u7B80\u4F53\u4E2D\u6587 </a><span class="text-slate-300 dark:text-slate-700">/</span><a href="/zh-HK/account/delete" class="hover:text-blue-500 transition-colors"> \u7E41\u9AD4\u4E2D\u6587 </a></div></nav><header class="pt-8 pb-8 border-b border-slate-100 dark:border-slate-800"><p class="text-xs font-medium tracking-wide text-slate-400 uppercase">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.badge"))}</p><h1 class="mt-2 text-[28px] md:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.title"))}</h1><p class="mt-4 text-[16px] leading-8 text-slate-700 dark:text-slate-300">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.subtitle"))}</p></header><section class="py-8 border-b border-slate-100 dark:border-slate-800 space-y-6"><div><h2 class="text-sm font-semibold text-slate-900 dark:text-slate-100">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.scopeDeletedTitle"))}</h2><ul class="mt-2 list-disc pl-5 space-y-1.5 text-sm leading-7 text-slate-600 dark:text-slate-300"><li>${ssrInterpolate(_ctx.$t("hoxi.accountDelete.scopeDeletedItem1"))}</li><li>${ssrInterpolate(_ctx.$t("hoxi.accountDelete.scopeDeletedItem2"))}</li><li>${ssrInterpolate(_ctx.$t("hoxi.accountDelete.scopeDeletedItem3"))}</li></ul></div><div><h2 class="text-sm font-semibold text-slate-900 dark:text-slate-100">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.scopeRetainedTitle"))}</h2><p class="mt-1.5 text-sm leading-7 text-slate-600 dark:text-slate-300">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.scopeRetainedBody"))}</p></div><div><h2 class="text-sm font-semibold text-slate-900 dark:text-slate-100">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.inAppPathTitle"))}</h2><p class="mt-1.5 text-sm leading-7 text-slate-600 dark:text-slate-300">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.inAppPathBody"))}</p></div></section><section class="py-8">`);
      if (completedMessage.value) {
        _push(`<div class="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2"><p class="text-sm font-semibold text-slate-900 dark:text-slate-100">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.doneTitle"))}</p><p class="text-sm leading-7 text-slate-600 dark:text-slate-300">${ssrInterpolate(completedMessage.value)}</p></div>`);
      } else {
        _push(`<form class="space-y-5">`);
        if (unref(loggedIn) && sessionEmail.value) {
          _push(`<div class="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.signedInAs"))} <strong class="font-mono text-slate-900 dark:text-slate-100">${ssrInterpolate(sessionEmail.value)}</strong></div>`);
        } else {
          _push(`<!--[--><div><label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.emailLabel"))}</label><div class="flex flex-col sm:flex-row gap-3"><input${ssrRenderAttr("value", email.value)} type="email" required${ssrRenderAttr("placeholder", _ctx.$t("hoxi.accountDelete.emailPlaceholder"))} class="flex-1 h-11 px-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"><button type="button"${ssrIncludeBooleanAttr(sendingCode.value || cooldown.value > 0 || !email.value.trim()) ? " disabled" : ""} class="h-11 px-5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium rounded-full hover:bg-slate-800 dark:hover:bg-white transition-colors disabled:opacity-50 shrink-0">${ssrInterpolate(sendingCode.value ? _ctx.$t("hoxi.accountDelete.sendingCode") : cooldown.value > 0 ? `${cooldown.value}s` : _ctx.$t("hoxi.accountDelete.sendCodeBtn"))}</button></div>`);
          if (codeSentNotice.value) {
            _push(`<p class="mt-2 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(codeSentNotice.value)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div><label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.codeLabel"))}</label><input${ssrRenderAttr("value", code.value)} type="text" inputmode="numeric" maxlength="6" required${ssrRenderAttr("placeholder", _ctx.$t("hoxi.accountDelete.codePlaceholder"))} class="w-full sm:w-64 h-11 px-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-mono tracking-widest text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"></div><!--]-->`);
        }
        _push(`<div><label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-2">${ssrInterpolate(_ctx.$t("hoxi.accountDelete.reasonLabel"))}</label><textarea rows="2" maxlength="400"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.accountDelete.reasonPlaceholder"))} class="w-full p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500">${ssrInterpolate(reason.value)}</textarea></div><label class="flex items-start gap-2.5 text-xs leading-6 text-slate-600 dark:text-slate-300 cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(confirmed.value) ? ssrLooseContain(confirmed.value, null) : confirmed.value) ? " checked" : ""} type="checkbox" required class="mt-1"><span>${ssrInterpolate(_ctx.$t("hoxi.accountDelete.confirmCheckbox"))}</span></label>`);
        if (errorMsg.value) {
          _push(`<p class="text-xs text-red-500">${ssrInterpolate(errorMsg.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="pt-2"><button type="submit"${ssrIncludeBooleanAttr(submitting.value || !confirmed.value || !unref(loggedIn) && (!email.value.trim() || !code.value.trim())) ? " disabled" : ""} class="px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors disabled:opacity-50">${ssrInterpolate(submitting.value ? _ctx.$t("hoxi.accountDelete.submittingBtn") : _ctx.$t("hoxi.accountDelete.submitBtn"))}</button></div></form>`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/account/delete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=delete-UN1mGzut.mjs.map
