import { defineComponent, ref, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr, ssrLooseContain, ssrRenderList } from 'vue/server-renderer';
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
  __name: "rewards",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const saving = ref(false);
    const retrying = ref(false);
    const statusMsg = ref("");
    const maskedToken = ref("");
    const connection = ref(null);
    const outbox = ref(null);
    const events = ref([]);
    const form = reactive({
      baseUrl: "https://api.ainode.run",
      tenantToken: "",
      policy: {
        enabled: true,
        ruleVersion: "v1",
        randomEnabled: true,
        randomMinPoints: 5e3,
        randomMaxPoints: 1e5,
        basePoints: 5e3,
        streakStep: 1e3,
        maxPoints: 1e5,
        userMonthlyCapPoints: 5e6,
        globalMonthlyBudgetPoints: 5e8,
        requireVerifiedEmail: true
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-6xl mx-auto space-y-6 text-slate-900 dark:text-slate-100" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800"><div><h1 class="text-xl font-bold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.title"))}</h1><p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.subtitle"))}</p></div><div class="flex items-center gap-2"><button type="button" class="px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium hover:border-blue-400"${ssrIncludeBooleanAttr(retrying.value) ? " disabled" : ""}>${ssrInterpolate(retrying.value ? _ctx.$t("hoxi.admin.rewards.loading") : _ctx.$t("hoxi.admin.rewards.retryPendingBtn"))}</button><button type="button" class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""}>${ssrInterpolate(saving.value ? _ctx.$t("hoxi.admin.rewards.loading") : _ctx.$t("hoxi.admin.rewards.saveBtn"))}</button></div></div>`);
      if (statusMsg.value) {
        _push(`<p class="text-xs text-blue-600 dark:text-blue-400">${ssrInterpolate(statusMsg.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4"><div class="flex items-center justify-between"><h2 class="text-sm font-semibold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.ainodeTitle"))}</h2><span class="${ssrRenderClass([((_a = connection.value) == null ? void 0 : _a.reachable) ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300", "px-2 py-0.5 rounded text-[11px] font-mono"])}">${ssrInterpolate(((_b = connection.value) == null ? void 0 : _b.reachable) ? "Connected" : "Unreachable / Unconfigured")}</span></div><div><label class="block text-xs text-slate-500 mb-1">AINode Base URL</label><input${ssrRenderAttr("value", form.baseUrl)} type="text" placeholder="https://api.ainode.run" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1"> Tenant Token (${ssrInterpolate(maskedToken.value || "not set")}) </label><input${ssrRenderAttr("value", form.tenantToken)} type="password" placeholder="Leave blank to keep existing token" class="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div>`);
      if ((_c = connection.value) == null ? void 0 : _c.reachable) {
        _push(`<div class="text-xs font-mono text-slate-500 space-y-1"><div>KeyGroup: ${ssrInterpolate(connection.value.keyGroupName)} (#${ssrInterpolate(connection.value.keyGroupId)}, x${ssrInterpolate(connection.value.groupMultiplier)})</div><div>Callable Models: ${ssrInterpolate(connection.value.modelsCount)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4"><div class="flex items-center justify-between"><h2 class="text-sm font-semibold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.policyTitle"))}</h2><label class="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 cursor-pointer"><input${ssrIncludeBooleanAttr(Array.isArray(form.policy.randomEnabled) ? ssrLooseContain(form.policy.randomEnabled, null) : form.policy.randomEnabled) ? " checked" : ""} type="checkbox" class="rounded border-slate-300 dark:border-slate-700 text-blue-600"><span>Random Points Range</span></label></div><div class="grid grid-cols-2 sm:grid-cols-3 gap-3"><div><label class="block text-xs text-slate-500 mb-1">Random Min Points</label><input${ssrRenderAttr("value", form.policy.randomMinPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Random Max Points</label><input${ssrRenderAttr("value", form.policy.randomMaxPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Base Points</label><input${ssrRenderAttr("value", form.policy.basePoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Streak Step</label><input${ssrRenderAttr("value", form.policy.streakStep)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Max Daily Points</label><input${ssrRenderAttr("value", form.policy.maxPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">User Monthly Cap</label><input${ssrRenderAttr("value", form.policy.userMonthlyCapPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Global Monthly Cap</label><input${ssrRenderAttr("value", form.policy.globalMonthlyBudgetPoints)} type="number" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div><div><label class="block text-xs text-slate-500 mb-1">Rule Version</label><input${ssrRenderAttr("value", form.policy.ruleVersion)} type="text" class="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono"></div></div></div></div><div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"><div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between"><h2 class="text-sm font-semibold">${ssrInterpolate(_ctx.$t("hoxi.admin.rewards.outboxTitle"))}</h2><span class="text-xs font-mono text-slate-500"> Succeeded: ${ssrInterpolate(((_f = (_e = (_d = outbox.value) == null ? void 0 : _d.counts) == null ? void 0 : _e.succeeded) == null ? void 0 : _f.count) || 0)} \xB7 RetryWait: ${ssrInterpolate(((_i = (_h = (_g = outbox.value) == null ? void 0 : _g.counts) == null ? void 0 : _h.retry_wait) == null ? void 0 : _i.count) || 0)} \xB7 Blocked: ${ssrInterpolate(((_l = (_k = (_j = outbox.value) == null ? void 0 : _j.counts) == null ? void 0 : _k.blocked) == null ? void 0 : _l.count) || 0)}</span></div><div class="overflow-x-auto"><table class="w-full text-left border-collapse text-xs"><thead><tr class="border-b border-slate-100 dark:border-slate-800 text-slate-500"><th class="py-2.5 px-4">Operation ID</th><th class="py-2.5 px-4">User</th><th class="py-2.5 px-4">Source</th><th class="py-2.5 px-4 text-right">Points</th><th class="py-2.5 px-4">Status</th><th class="py-2.5 px-4">Last Error</th><th class="py-2.5 px-4 text-right">Action</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
      ssrRenderList(events.value, (ev) => {
        _push(`<tr><td class="py-2.5 px-4 font-mono text-[11px]">${ssrInterpolate(ev.operationId)}</td><td class="py-2.5 px-4 font-mono">#${ssrInterpolate(ev.userId)}</td><td class="py-2.5 px-4 font-mono">${ssrInterpolate(ev.sourceKey)}</td><td class="py-2.5 px-4 text-right font-mono tabular-nums">+${ssrInterpolate(ev.points)}</td><td class="py-2.5 px-4 font-mono">${ssrInterpolate(ev.status)}</td><td class="py-2.5 px-4 text-rose-600 dark:text-rose-400 max-w-xs truncate">${ssrInterpolate(ev.lastError)}</td><td class="py-2.5 px-4 text-right">`);
        if (ev.status !== "succeeded") {
          _push(`<button type="button" class="px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 text-xs hover:border-blue-400"> Replay </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/rewards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rewards-Dr1BUY99.mjs.map
