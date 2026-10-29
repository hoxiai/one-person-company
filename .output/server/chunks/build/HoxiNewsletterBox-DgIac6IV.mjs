import { defineComponent, computed, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useI18n } from './server.mjs';
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
  __name: "HoxiNewsletterBox",
  __ssrInlineRender: true,
  props: {
    topic: { default: "blog" },
    source: { default: "hoxi" }
  },
  setup(__props) {
    const { locale, t } = useI18n();
    computed(() => {
      const raw = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? String(locale.value) : String(locale || "zh");
      return raw.startsWith("zh") ? "zh" : "en";
    });
    const emailInput = ref("");
    const submitting = ref(false);
    const feedbackMessage = ref("");
    const feedbackError = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "rounded-[14px] border border-slate-200 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#0d0f14] p-7 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6" }, _attrs))}><div class="space-y-1.5 max-w-xl"><p class="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">${ssrInterpolate(_ctx.$t("hoxi.newsletter.badge"))}</p><h2 class="text-lg sm:text-xl font-bold tracking-tight text-slate-950 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.newsletter.title"))}</h2><p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">${ssrInterpolate(_ctx.$t("hoxi.newsletter.subtitle"))}</p></div><div class="w-full lg:w-auto lg:min-w-[380px]"><form class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"><input${ssrRenderAttr("value", emailInput.value)} type="email" required${ssrRenderAttr("placeholder", _ctx.$t("hoxi.newsletter.placeholder"))} class="flex-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"><button type="submit"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer disabled:opacity-50"><span>${ssrInterpolate(submitting.value ? _ctx.$t("hoxi.newsletter.submitting") : _ctx.$t("hoxi.newsletter.button"))}</span></button></form>`);
      if (feedbackMessage.value) {
        _push(`<p class="${ssrRenderClass([feedbackError.value ? "text-red-500 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400", "mt-2 text-xs font-medium"])}">${ssrInterpolate(feedbackMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiNewsletterBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "HoxiNewsletterBox" });

export { __nuxt_component_5 as default };
//# sourceMappingURL=HoxiNewsletterBox-DgIac6IV.mjs.map
