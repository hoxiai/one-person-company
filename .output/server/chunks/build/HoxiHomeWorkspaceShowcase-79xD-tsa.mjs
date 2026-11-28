import { u as useI18n$1, E as useLocaleRouter, j as _sfc_main$10, P as __nuxt_component_3$4 } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
import 'node:zlib';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'jose';
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
  __name: "HoxiHomeWorkspaceShowcase",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n$1();
    const { localePath } = useLocaleRouter();
    const isZh = computed(() => {
      const loc = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
      return loc.startsWith("zh");
    });
    const activeTab = ref("worktree");
    const tabs = computed(() => [
      { id: "worktree", label: t("hoxi.desktop.tabWorktree"), icon: "ph:git-branch-bold" },
      { id: "handoff", label: t("hoxi.desktop.tabHandoff"), icon: "ph:terminal-window-bold" },
      { id: "automation", label: t("hoxi.desktop.tabAutomation"), icon: "ph:browsers-bold" },
      { id: "steer", label: t("hoxi.desktop.tabSteer"), icon: "ph:shield-check-bold" },
      { id: "mobile", label: t("hoxi.desktop.tabMobile"), icon: "ph:device-mobile-bold" }
    ]);
    const activeInspectorTab = computed(() => {
      if (activeTab.value === "automation") return "automation";
      if (activeTab.value === "handoff") return "terminal";
      if (activeTab.value === "steer") return "sandbox";
      if (activeTab.value === "mobile") return "mobile";
      return "diffs";
    });
    const activeSessionTitle = computed(() => {
      if (activeTab.value === "automation") return isZh.value ? "Chrome \u56DE\u5F52 + \u684C\u9762\u63A7\u5236" : "Chrome Link & App Control";
      if (activeTab.value === "handoff") return isZh.value ? "\u63A5\u7BA1 Claude Code \u4F1A\u8BDD" : "Claude Code Handoff";
      if (activeTab.value === "steer") return isZh.value ? "Seatbelt \u65E0\u4EBA\u503C\u5B88\u4E0E\u7EA0\u504F" : "Seatbelt Sandbox & Steer";
      if (activeTab.value === "mobile") return isZh.value ? "\u624B\u673A E2EE \u8FDC\u7A0B\u5BA1\u6279" : "E2EE Mobile Approval";
      return isZh.value ? "\u591A\u6A21\u578B\u8D5B\u9A6C\uFF1A\u91CD\u6784\u7F51\u5173\u4EE3\u7406" : "Arena: Refactor OAuth Proxy";
    });
    const activeBranchName = computed(() => {
      if (activeTab.value === "automation") return "qa/browser-verify";
      if (activeTab.value === "handoff") return "cli/claude-handoff";
      if (activeTab.value === "steer") return "sandbox/unattended";
      if (activeTab.value === "mobile") return "feat/mobile-e2ee";
      return "feat/oauth-proxy";
    });
    const activeUserPrompt = computed(() => {
      if (activeTab.value === "automation") {
        return isZh.value ? "\u7528 Chrome Link \u6253\u5F00\u5DF2\u767B\u5F55\u540E\u53F0\u9A8C\u8BC1\u4E0B\u5355\u94FE\u8DEF\uFF0C\u987A\u4FBF\u6838\u5BF9\u684C\u9762\u5F39\u7A97\u72B6\u6001" : "Verify checkout flow in my logged-in Chrome tab and check desktop dialog state";
      }
      if (activeTab.value === "steer") {
        return isZh.value ? "\u8DD1\u5B8C\u5355\u6D4B\u5C31\u505C\uFF0C\u522B\u52A8 .env \u4E5F\u522B\u5F3A\u63A8\u5206\u652F" : "Stop after running tests; do not touch .env or force-push";
      }
      if (activeTab.value === "handoff") {
        return isZh.value ? "Claude Code \u89E6\u53D1\u9650\u6D41\u4E86\uFF0C\u63A5\u7BA1\u5386\u53F2\u4F1A\u8BDD\u5207\u5230\u5185\u7F6E Go \u5F15\u64CE\u7EE7\u7EED\u91CD\u6784" : "Claude Code hit rate limit \u2014 hand off thread to built-in Go engine and continue";
      }
      if (activeTab.value === "mobile") {
        return isZh.value ? "\u79BB\u5F00\u5DE5\u4F4D\u4E86\uFF0C\u6709\u9AD8\u5371\u5BA1\u6279\u53D1\u624B\u673A\u63D0\u9192\u6211\uFF0C\u786E\u8BA4 Diff \u540E\u76F4\u63A5\u653E\u884C" : "Away from desk \u2014 alert my phone for safety gates so I can inspect diff & approve";
      }
      return isZh.value ? "\u8BA9 Opus 5 \u548C DeepSeek \u5728\u72EC\u7ACB Worktree \u5E76\u884C\u4FEE\u590D\u56DE\u73AF 502\uFF0C\u5BF9\u6BD4 Diff \u62E9\u4F18\u5408\u5E76" : "Race Opus 5 and DeepSeek in separate worktrees to fix loopback 502, then merge the cleanest diff";
    });
    const activeThoughtHeader = computed(() => {
      if (activeTab.value === "automation") return isZh.value ? "\u5355\u5E94\u7528\u6388\u6743\u5C31\u7EEA \xB7 1.8s" : "App grant active \xB7 1.8s";
      if (activeTab.value === "steer") return isZh.value ? "Seatbelt \u6C99\u7BB1\u62E6\u622A \xB7 0.1s" : "Seatbelt gate triggered \xB7 0.1s";
      return isZh.value ? "\u601D\u8003\u4E86 2.1s \xB7 Go Native" : "Thought for 2.1s \xB7 Go Native";
    });
    const activePrimaryToolLine = computed(() => {
      if (activeTab.value === "automation") return "hoxi_browser  verify checkout flow (Chrome Link)";
      if (activeTab.value === "handoff") return "write  .hoxi/memory/project.md";
      return "edit   internal/gateway/proxy.go";
    });
    const activePrimaryToolStat = computed(() => {
      if (activeTab.value === "automation") return "200 OK";
      if (activeTab.value === "handoff") return isZh.value ? "8 \u7EF4\u8BB0\u5FC6" : "8-Dim";
      return "+18 -4";
    });
    const activeGateToolLine = computed(() => {
      if (activeTab.value === "automation") return 'hoxi_computer  click "Confirm Order" (Chrome)';
      return "bash   git push --force origin feat/oauth";
    });
    const activeGateBadge = computed(() => {
      if (activeTab.value === "automation") return isZh.value ? "\u672C\u673A\u5141\u8BB8\u4E00\u6B21" : "Allow Once";
      if (activeTab.value === "steer") return isZh.value ? "\u6C99\u7BB1\u786C\u62D2\u7EDD" : "Denied";
      return isZh.value ? "\u5F85\u6279\u51C6" : "Ask";
    });
    const activeCenterThoughtBody = computed(() => {
      switch (activeTab.value) {
        case "automation":
          return isZh.value ? "\u5DF2\u901A\u8FC7 Chrome Link \u9644\u7740\u65E5\u5E38\u767B\u5F55\u6807\u7B7E\u9875\u5B8C\u6210\u6D41\u7A0B\u9A8C\u8BC1\uFF1B\u6D89\u53CA\u524D\u53F0\u70B9\u51FB\u64CD\u4F5C\u65F6\u7531\u672C\u673A\u539F\u751F\u5F39\u7A97\u9010\u6B21\u6388\u6743\uFF0C\u4E0D\u5BF9\u5916\u5F00\u653E\u8FDC\u7A0B\u63A7\u5236\u3002" : "Verified live flow via Chrome Link on your logged-in tab; foreground input uses per-app native confirmation and never opens to remote channels.";
        case "steer":
          return isZh.value ? "\u6536\u5230\u4E2D\u9014 Steer \u7EA0\u504F\u5E76\u547D\u4E2D Seatbelt \u65E0\u4EBA\u503C\u5B88\u7B56\u7565\uFF1A\u5DF2\u62E6\u622A `git push --force`\uFF0C\u51ED\u636E\u73AF\u5883\u53D8\u91CF\u5DF2\u5265\u79BB\uFF0C\u4EE3\u7801\u4FEE\u6539\u9501\u5B9A\u5728\u5F53\u524D worktree\u3002" : "Applied live steer and enforced Seatbelt unattended policy: blocked `git push --force`, stripped secret env vars, and confined writes to the worktree.";
        case "handoff":
          return isZh.value ? "\u5DF2\u5BFC\u5165\u672C\u673A Claude Code \u5B8C\u6574\u5BF9\u8BDD\u4E0E\u5DE5\u5177\u8BB0\u5F55\uFF0C\u5E76\u81EA\u52A8\u5199\u5165 .hoxi/memory/project.md \u7684 8 \u7EF4\u8BB0\u5FC6\uFF0C\u5F53\u524D\u7531\u5185\u7F6E Go \u539F\u751F\u5F15\u64CE\u65E0\u7F1D\u7EED\u8DD1\u3002" : "Imported full Claude Code history & tool traces, synced 8-dimension memory into .hoxi/memory/project.md, and resumed seamlessly on the built-in Go engine.";
        case "mobile":
          return isZh.value ? "\u684C\u9762\u7AEF\u9AD8\u5371\u547D\u4EE4\u95E8\u63A7\u6682\u505C\u5E76\u63A8\u9001\u5F85\u5BA1\u6279\u8BA1\u6570\uFF08\u65E0\u660E\u6587\u4EE3\u7801\uFF09\uFF0C\u624B\u673A\u7AEF\u7ECF X25519 \u7AEF\u5230\u7AEF\u52A0\u5BC6\u901A\u9053\u5BA1\u5B8C Diff \u540E\u4E00\u952E\u653E\u884C\u3002" : "Desktop safety gate paused with a count-only alert; reviewed diff and approved remotely over X25519 end-to-end encryption.";
        default:
          return isZh.value ? "2 \u4E2A\u72EC\u7ACB .hoxi/worktrees/ \u6C99\u7BB1\u5E76\u884C\u5B8C\u6210\u4FEE\u6539\u4E14\u672C\u5730\u5355\u6D4B\u901A\u8FC7\uFF0C\u672C\u5730\u56DE\u73AF\u7ED5\u8FC7\u7CFB\u7EDF\u4EE3\u7406\u6D88\u9664 Clash/Surge 502\uFF0C\u53F3\u4FA7\u76F4\u63A5\u5BA1 Diff \u4E00\u952E\u5408\u5E76\u3002" : "Completed parallel edits in isolated .hoxi/worktrees/ with passing tests and proxy-immune loopback\u2014compare diffs on the right and merge in 1 click.";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$10;
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "home-desktop" }, _attrs))}><div class="text-center max-w-2xl mx-auto mb-7 md:mb-9"><p class="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2.5">${ssrInterpolate(_ctx.$t("hoxi.desktop.archBadge"))}</p><h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-slate-950 dark:text-white">${ssrInterpolate(_ctx.$t("hoxi.desktop.archTitle"))}</h2><p class="mt-2.5 text-sm md:text-base text-slate-500 dark:text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.desktop.archSubtitle"))}</p></div><div class="flex justify-center mb-5"><div class="inline-flex flex-wrap items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-[#111319] p-1 gap-1" role="tablist"><!--[-->`);
      ssrRenderList(tabs.value, (tab) => {
        _push(`<button type="button" role="tab"${ssrRenderAttr("aria-selected", activeTab.value === tab.id)} class="${ssrRenderClass([activeTab.value === tab.id ? "bg-slate-950 text-white dark:bg-blue-600 dark:text-white shadow-2xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white", "inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: tab.icon,
          class: ["w-3.5 h-3.5", activeTab.value === tab.id ? "text-blue-400 dark:text-white" : "text-slate-400"]
        }, null, _parent));
        _push(`<span>${ssrInterpolate(tab.label)}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="rounded-2xl border border-slate-300/80 dark:border-slate-800 bg-[#f1f3f6] dark:bg-[#0c0e12] text-[#14181f] dark:text-[#e5e9f0] shadow-2xl overflow-hidden select-none"><div class="h-[46px] px-4 flex items-center justify-between gap-3 text-xs"><div class="flex items-center gap-2.5 min-w-0"><div class="flex items-center gap-1.5 mr-2"><span class="h-3 w-3 rounded-full bg-[#ff5f57] border border-black/10"></span><span class="h-3 w-3 rounded-full bg-[#febc2e] border border-black/10"></span><span class="h-3 w-3 rounded-full bg-[#28c840] border border-black/10"></span></div><span class="inline-flex items-center justify-center w-6.5 h-6.5 rounded-lg bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sidebar-simple-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span><span class="font-mono text-[12px] text-[#475467] dark:text-[#9ba3b0] truncate"> hoxi </span></div><div class="hidden sm:flex items-center justify-center gap-2 min-w-0"><span class="truncate text-[12px] font-medium text-[#14181f] dark:text-[#e5e9f0]">${ssrInterpolate(activeSessionTitle.value)}</span><span class="inline-flex items-center gap-1 rounded-lg border border-slate-900/10 dark:border-white/10 bg-white/80 dark:bg-[#1a202b] px-2 py-0.5 font-mono text-[11px] text-[#475467] dark:text-[#9ba3b0]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:git-branch-bold",
        class: "w-3 h-3 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(activeBranchName.value)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-2.5 h-2.5 opacity-60"
      }, null, _parent));
      _push(`</span></div><div class="flex items-center gap-1.5"><span class="hidden md:inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-mono text-[#667085] dark:text-[#6e7785]"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span><span>hoxi native</span></span><span class="hidden sm:inline-flex items-center justify-center rounded-lg border border-slate-900/10 dark:border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-[#667085] dark:text-[#6e7785]"> \u2318K </span><span class="inline-flex items-center justify-center w-6.5 h-6.5 rounded-lg bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sidebar-simple-bold",
        class: "w-3.5 h-3.5 rotate-180"
      }, null, _parent));
      _push(`</span></div></div><div class="grid lg:grid-cols-[232px_minmax(0,1fr)_336px] gap-1.5 px-2 pb-2 text-left"><aside class="flex flex-col justify-between px-1.5 py-1 text-[12px]"><div class="space-y-2"><div class="flex items-center justify-between px-1 py-1"><span class="inline-flex items-center gap-1.5 font-medium text-[#14181f] dark:text-[#e5e9f0]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plus-circle-bold",
        class: "w-4 h-4 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(isZh.value ? "\u65B0\u5BF9\u8BDD" : "New Thread")}</span></span><div class="flex items-center gap-1 text-[#667085] dark:text-[#6e7785]"><span class="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrows-left-right-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span><span class="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span><span class="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:folder-plus-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span></div></div><div class="space-y-1"><div class="flex items-center justify-between px-2 py-1 text-[11.5px] font-semibold text-[#475467] dark:text-[#9ba3b0]"><span class="inline-flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-3 h-3"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:folder-simple-fill",
        class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>hoxi</span></span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plus-bold",
        class: "w-3 h-3 opacity-60"
      }, null, _parent));
      _push(`</div><div class="space-y-0.5 pl-2"><button type="button" class="${ssrRenderClass([activeTab.value === "worktree" || activeTab.value === "steer" ? "bg-blue-600/9 dark:bg-blue-500/15 text-[#14181f] dark:text-[#e5e9f0] font-medium" : "text-[#475467] dark:text-[#9ba3b0] hover:bg-black/4 dark:hover:bg-white/5", "w-full text-left rounded-lg px-2.5 py-2 transition-colors cursor-pointer"])}"><div class="flex items-center justify-between gap-1.5"><span class="inline-flex items-center gap-1.5 truncate text-[12px]"><span class="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0"></span><span class="truncate">${ssrInterpolate(isZh.value ? "\u591A\u6A21\u578B\u8D5B\u9A6C\uFF1A\u91CD\u6784\u7F51\u5173\u4EE3\u7406" : "Arena: Refactor Proxy")}</span></span><span class="font-mono text-[10px] shrink-0"><span class="text-emerald-600 dark:text-emerald-400">+142</span><span class="text-rose-600 dark:text-rose-400 ml-0.5">-18</span></span></div><div class="mt-0.5 pl-3 font-mono text-[10px] text-[#667085] dark:text-[#6e7785] truncate"> \u2387 feat/oauth-proxy \xB7 worktree </div></button><button type="button" class="${ssrRenderClass([activeTab.value === "automation" ? "bg-blue-600/9 dark:bg-blue-500/15 text-[#14181f] dark:text-[#e5e9f0] font-medium" : "text-[#475467] dark:text-[#9ba3b0] hover:bg-black/4 dark:hover:bg-white/5", "w-full text-left rounded-lg px-2.5 py-2 transition-colors cursor-pointer"])}"><div class="flex items-center justify-between gap-1.5"><span class="inline-flex items-center gap-1.5 truncate text-[12px]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:browsers-bold",
        class: "w-3 h-3 text-emerald-500 shrink-0"
      }, null, _parent));
      _push(`<span class="truncate">${ssrInterpolate(isZh.value ? "Chrome \u56DE\u5F52 + \u684C\u9762\u63A7\u5236" : "Chrome Link & App Control")}</span></span><span class="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">OK</span></div><div class="mt-0.5 pl-3 font-mono text-[10px] text-[#667085] dark:text-[#6e7785] truncate">${ssrInterpolate(isZh.value ? "Chrome Link \xB7 \u539F\u751F\u7535\u8111\u63A7\u5236" : "Chrome Link \xB7 Computer Control")}</div></button><button type="button" class="${ssrRenderClass([activeTab.value === "handoff" ? "bg-blue-600/9 dark:bg-blue-500/15 text-[#14181f] dark:text-[#e5e9f0] font-medium" : "text-[#475467] dark:text-[#9ba3b0] hover:bg-black/4 dark:hover:bg-white/5", "w-full text-left rounded-lg px-2.5 py-2 transition-colors cursor-pointer"])}"><div class="flex items-center justify-between gap-1.5"><span class="inline-flex items-center gap-1.5 truncate text-[12px]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:terminal-window-bold",
        class: "w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0"
      }, null, _parent));
      _push(`<span class="truncate">${ssrInterpolate(isZh.value ? "\u63A5\u7BA1 Claude Code \u4F1A\u8BDD" : "Claude Code Handoff")}</span></span><span class="font-mono text-[10px] text-blue-600 dark:text-blue-400">CLI</span></div></button><button type="button" class="${ssrRenderClass([activeTab.value === "mobile" ? "bg-blue-600/9 dark:bg-blue-500/15 text-[#14181f] dark:text-[#e5e9f0] font-medium" : "text-[#475467] dark:text-[#9ba3b0] hover:bg-black/4 dark:hover:bg-white/5", "w-full text-left rounded-lg px-2.5 py-2 transition-colors cursor-pointer"])}"><div class="flex items-center justify-between gap-1.5"><span class="inline-flex items-center gap-1.5 truncate text-[12px]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:device-mobile-bold",
        class: "w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0"
      }, null, _parent));
      _push(`<span class="truncate">${ssrInterpolate(isZh.value ? "\u624B\u673A E2EE \u8FDC\u7A0B\u5BA1\u6279" : "E2EE Mobile Control")}</span></span><span class="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">E2EE</span></div></button></div><button type="button" class="w-full flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11.5px] text-[#667085] dark:text-[#6e7785] hover:text-[#14181f] dark:hover:text-white cursor-pointer">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plus-bold",
        class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(isZh.value ? "\u63A5\u7BA1\u5916\u90E8 CLI \u4F1A\u8BDD" : "Import External CLI")}</span></button></div></div><div class="mt-3 pt-2 border-t border-slate-900/8 dark:border-white/8 flex items-center justify-between px-1.5 py-1 text-[11.5px]"><div class="flex items-center gap-2 min-w-0"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white"> H </span><span class="truncate font-mono text-[11px] text-[#475467] dark:text-[#9ba3b0]">${ssrInterpolate(isZh.value ? "\u672C\u5730\u4F18\u5148 \xB7 BYOK" : "Local-First \xB7 BYOK")}</span></div><div class="flex items-center gap-1.5 text-[#667085] dark:text-[#6e7785]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:clock-clockwise-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:gear-six-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</div></div></aside><div class="rounded-xl border border-slate-900/8 dark:border-white/8 bg-white dark:bg-[#12161d] shadow-xs p-4 flex flex-col justify-between min-h-[350px]"><div class="space-y-3 text-xs"><div class="flex justify-end"><div class="rounded-2xl rounded-tr-sm bg-[#f4f6f9] dark:bg-[#1a202b] border border-slate-900/6 dark:border-white/6 px-3.5 py-2 text-[12px] text-[#14181f] dark:text-[#e5e9f0] max-w-[88%]">${ssrInterpolate(activeUserPrompt.value)}</div></div><div class="rounded-xl border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/60 dark:bg-white/[0.03] px-3 py-2.5"><div class="flex items-center justify-between text-[11.5px] font-medium text-[#475467] dark:text-[#9ba3b0]"><span class="inline-flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:brain-bold",
        class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(activeThoughtHeader.value)}</span></span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-3 h-3 opacity-60"
      }, null, _parent));
      _push(`</div><p class="mt-1.5 text-[11.5px] text-[#667085] dark:text-[#9ba3b0] leading-relaxed">${ssrInterpolate(activeCenterThoughtBody.value)}</p></div><div class="space-y-1.5 font-mono text-[11px]"><div class="rounded-lg border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/50 dark:bg-white/[0.02] px-3 py-1.5 flex items-center justify-between gap-2"><span class="inline-flex items-center gap-2 text-[#14181f] dark:text-[#e5e9f0] truncate">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-3.5 h-3.5 text-emerald-500 shrink-0"
      }, null, _parent));
      _push(`<span class="truncate">${ssrInterpolate(activePrimaryToolLine.value)}</span></span><span class="text-emerald-600 dark:text-emerald-400 shrink-0">${ssrInterpolate(activePrimaryToolStat.value)}</span></div><div class="${ssrRenderClass([activeTab.value === "steer" || activeTab.value === "mobile" ? "border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-300" : "border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/50 dark:bg-white/[0.02] text-[#475467] dark:text-[#9ba3b0]", "rounded-lg border px-3 py-1.5 flex items-center justify-between gap-2 transition-all"])}"><span class="inline-flex items-center gap-2 truncate">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-warning-fill",
        class: "w-3.5 h-3.5 text-amber-500 shrink-0"
      }, null, _parent));
      _push(`<span class="truncate">${ssrInterpolate(activeGateToolLine.value)}</span></span><span class="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-300 shrink-0">${ssrInterpolate(activeGateBadge.value)}</span></div></div></div><div class="mt-4"><div class="mx-2 px-3 py-1.5 rounded-t-xl border border-b-0 border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/80 dark:bg-[#1a202b]/80 flex items-center justify-between text-[11px]"><span class="font-mono text-[#475467] dark:text-[#9ba3b0]">${ssrInterpolate(isZh.value ? "2 \u4E2A\u6587\u4EF6\u53D8\u66F4" : "2 files changed")} <strong class="text-emerald-600 dark:text-emerald-400 ml-1">+142</strong><strong class="text-rose-600 dark:text-rose-400 ml-0.5">-18</strong></span><span class="text-blue-600 dark:text-blue-400 font-medium">${ssrInterpolate(_ctx.$t("hoxi.desktop.mockMergeBtn"))} \u2192 </span></div><div class="rounded-2xl border border-slate-900/13 dark:border-white/13 bg-white/95 dark:bg-[#181e28] px-3.5 pt-2.5 pb-2 shadow-sm"><div class="text-[12px] text-[#98a2b3] dark:text-[#6e7785] pb-2.5 truncate">${ssrInterpolate(_ctx.$t("hoxi.desktop.mockSteerHint"))}</div><div class="flex items-center justify-between gap-1.5 pt-1 border-t border-slate-900/6 dark:border-white/6 text-[11px]"><div class="flex flex-wrap items-center gap-1"><span class="p-1 rounded-md text-[#667085] dark:text-[#9ba3b0]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plus-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span><span class="inline-flex items-center gap-1 rounded-md bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 px-2 py-0.5 font-medium"><span>Build</span></span><span class="inline-flex items-center gap-1 rounded-md bg-black/4 dark:bg-white/6 text-[#14181f] dark:text-[#e5e9f0] px-2 py-0.5 font-medium"><span>Claude Opus 5</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-2.5 h-2.5 opacity-60"
      }, null, _parent));
      _push(`</span><span class="hidden sm:inline-flex items-center gap-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 font-mono text-[10.5px]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:git-branch-bold",
        class: "w-3 h-3"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(activeTab.value === "steer" ? isZh.value ? "Seatbelt \u6C99\u7BB1" : "Seatbelt" : isZh.value ? "\u9694\u79BB\u6C99\u7BB1" : "Worktree")}</span></span></div><span class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-up-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span></div></div></div></div><aside class="rounded-xl border border-slate-900/8 dark:border-white/8 bg-white dark:bg-[#12161d] shadow-xs flex flex-col justify-between overflow-hidden"><div><div class="flex items-center gap-0.5 px-2.5 py-2 border-b border-slate-900/8 dark:border-white/8 text-[11px]"><button type="button" class="${ssrRenderClass([activeInspectorTab.value === "diffs" ? "bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400" : "text-[#667085] dark:text-[#6e7785]", "rounded-lg px-2 py-1 font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isZh.value ? "\u53D8\u66F4 (2)" : "Diffs (2)")}</button><button type="button" class="${ssrRenderClass([activeInspectorTab.value === "automation" ? "bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400" : "text-[#667085] dark:text-[#6e7785]", "rounded-lg px-2 py-1 font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isZh.value ? "\u6D4F\u89C8\u5668" : "Browser")}</button><button type="button" class="${ssrRenderClass([activeInspectorTab.value === "terminal" ? "bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400" : "text-[#667085] dark:text-[#6e7785]", "rounded-lg px-2 py-1 font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isZh.value ? "\u7EC8\u7AEF" : "Terminal")}</button><button type="button" class="${ssrRenderClass([activeInspectorTab.value === "sandbox" ? "bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400" : "text-[#667085] dark:text-[#6e7785]", "rounded-lg px-2 py-1 font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isZh.value ? "\u6C99\u7BB1" : "Sandbox")}</button><span class="ml-auto p-1 text-[#667085] dark:text-[#6e7785]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:corners-out-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span></div><div class="p-3 space-y-2.5 font-mono text-[11px]">`);
      if (activeInspectorTab.value === "automation") {
        _push(`<!--[--><div class="rounded-lg border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/70 dark:bg-black/25 p-2.5 space-y-2 text-[10.5px]"><div class="flex items-center justify-between"><span class="inline-flex items-center gap-1.5 font-semibold text-[#14181f] dark:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:browsers-bold",
          class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
        }, null, _parent));
        _push(`<span>Chrome Link \xB7 Persistent</span></span><span class="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9.5px] font-semibold text-emerald-600 dark:text-emerald-400">${ssrInterpolate(isZh.value ? "\u5DF2\u9644\u7740\u6807\u7B7E\u9875" : "Tab Linked")}</span></div><div class="text-[#475467] dark:text-[#9ba3b0] space-y-1"><div>\u2022 ${ssrInterpolate(isZh.value ? "\u6301\u4E45\u5316\u767B\u5F55\u6001\uFF0C\u968F\u65F6\u4E00\u952E\u63A5\u7BA1\u4EBA\u5DE5\u767B\u5F55/\u9A8C\u8BC1\u7801" : "Persistent profile + 1-click manual takeover")}</div><div>\u2022 ${ssrInterpolate(isZh.value ? "\u539F\u751F\u7535\u8111\u63A7\u5236\uFF1A\u5355\u5E94\u7528\u5F39\u7A97\u6388\u6743\uFF0C\u4E0D\u622A\u53D6\u5BC6\u7801\u6846" : "Native computer control: per-app dialog, password fields masked")}</div></div></div><div class="rounded-lg border border-blue-500/25 bg-blue-500/5 p-2.5 space-y-1 text-[10.5px]"><div class="font-semibold text-blue-600 dark:text-blue-400">${ssrInterpolate(isZh.value ? "\u5DF2\u6388\u6743\u5E94\u7528\uFF08\u672C\u4F1A\u8BDD\u6709\u6548\uFF09" : "Granted App (This Session)")}</div><div class="flex items-center justify-between text-[#475467] dark:text-[#9ba3b0]"><span>Google Chrome.app</span><span class="text-emerald-600 dark:text-emerald-400">${ssrInterpolate(isZh.value ? "\u5141\u8BB8\u4E00\u6B21" : "Allow Once")}</span></div></div><!--]-->`);
      } else if (activeInspectorTab.value === "terminal") {
        _push(`<div class="rounded-lg bg-[#0c0e12] text-slate-200 p-3 space-y-2 border border-slate-800 text-[10.5px]"><div class="text-emerald-400">$ hoxi handoff --from claude-code</div><div class="text-slate-400">\u2713 Attached to .hoxi/worktrees/s1</div><div class="text-slate-400">\u2713 Synced 8-Dim Memory (.hoxi/memory/project.md)</div><div class="pt-1 flex flex-wrap gap-1"><span class="rounded bg-blue-600 px-1.5 py-0.5 text-[9.5px] text-white">Hoxi Native</span><span class="rounded bg-slate-800 px-1.5 py-0.5 text-[9.5px] text-slate-300">Claude Code</span><span class="rounded bg-slate-800 px-1.5 py-0.5 text-[9.5px] text-slate-300">Codex</span><span class="rounded bg-slate-800 px-1.5 py-0.5 text-[9.5px] text-slate-300">OpenCode</span><span class="rounded bg-slate-800 px-1.5 py-0.5 text-[9.5px] text-slate-300">Antigravity</span><span class="rounded bg-slate-800 px-1.5 py-0.5 text-[9.5px] text-slate-300">Gemini CLI</span></div></div>`);
      } else if (activeInspectorTab.value === "sandbox") {
        _push(`<div class="rounded-lg border border-amber-500/30 bg-amber-500/8 p-2.5 space-y-2 text-[10.5px]"><div class="flex items-center justify-between"><span class="inline-flex items-center gap-1.5 font-semibold text-amber-800 dark:text-amber-300">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:shield-check-bold",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(isZh.value ? "Seatbelt \u6C99\u7BB1 \xB7 \u95E8\u63A7\u5F00\u542F" : "Seatbelt Sandbox \xB7 Active")}</span></span><span class="rounded bg-amber-500/20 px-1.5 py-0.5 text-[9.5px] font-semibold text-amber-800 dark:text-amber-300"> unattended </span></div><div class="text-[#475467] dark:text-[#9ba3b0] space-y-1"><div>\u2717 ${ssrInterpolate(isZh.value ? "\u5DF2\u5265\u79BB\u51ED\u636E\u73AF\u5883\u53D8\u91CF \xB7 \u5C01\u9501 ~/.ssh \u4E0E .env" : "Stripped secret env \xB7 Blocked ~/.ssh & .env")}</div><div>\u2717 ${ssrInterpolate(isZh.value ? "\u786C\u62D2\u7EDD git push / sudo / \u52A8\u6001 eval" : "Hard-denied git push / sudo / dynamic eval")}</div><div>\u2713 ${ssrInterpolate(isZh.value ? "\u53EA\u5199\u5F53\u524D .hoxi/worktrees/s1 \u6C99\u7BB1\u5206\u652F" : "Write-scoped to .hoxi/worktrees/s1 only")}</div></div></div>`);
      } else if (activeInspectorTab.value === "mobile") {
        _push(`<div class="rounded-lg border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/70 dark:bg-black/25 p-2.5 space-y-2 text-[10.5px]"><div class="flex items-center justify-between"><span class="inline-flex items-center gap-1.5 font-semibold text-[#14181f] dark:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:lock-key-bold",
          class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
        }, null, _parent));
        _push(`<span>X25519 \xB7 AES-256-GCM</span></span><span class="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9.5px] font-semibold text-emerald-600 dark:text-emerald-400"> LAN :5417 </span></div><div class="text-[#475467] dark:text-[#9ba3b0] space-y-1"><div>\u2022 ${ssrInterpolate(isZh.value ? "\u626B\u7801\u6216 6 \u4F4D\u914D\u5BF9\u7801\u76F4\u8FDE\uFF0C\u5916\u51FA\u81EA\u52A8\u5207\u96A7\u9053 (:5418)" : "QR / 6-digit code pairing, auto fallback (:5418)")}</div><div>\u2022 ${ssrInterpolate(isZh.value ? "APNs \u63A8\u9001\u4EC5\u53D1\u5F85\u5BA1\u6279\u8BA1\u6570\uFF0C\u96F6\u4EE3\u7801/\u547D\u4EE4\u6CC4\u9732" : "Count-only APNs alerts \u2014 zero code/cmd leaked")}</div><div>\u2022 ${ssrInterpolate(isZh.value ? "\u652F\u6301\u5B8C\u6574\u7248 Hoxi \u4E0E\u5F00\u6E90\u96F6\u9065\u6D4B Hoxi Remote" : "Works with Hoxi & open-source Hoxi Remote")}</div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/download#mobile"),
          class: "inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold pt-0.5 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(isZh.value ? "\u83B7\u53D6\u79FB\u52A8\u7AEF\u4E0E\u5F00\u6E90 Hoxi Remote APK" : "Get Mobile & Open-Source Hoxi Remote")}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(isZh.value ? "\u83B7\u53D6\u79FB\u52A8\u7AEF\u4E0E\u5F00\u6E90 Hoxi Remote APK" : "Get Mobile & Open-Source Hoxi Remote"), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "w-3 h-3"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[--><div class="flex items-center justify-between text-[10.5px] text-[#475467] dark:text-[#9ba3b0]"><div class="inline-flex rounded-lg bg-black/5 dark:bg-white/6 p-0.5"><span class="rounded-md bg-white dark:bg-[#1a202b] px-2 py-0.5 font-semibold text-[#14181f] dark:text-white shadow-2xs">${ssrInterpolate(isZh.value ? "\u8D5B\u9A6C\u5BF9\u6BD4" : "Arena")}</span><span class="rounded-md px-2 py-0.5">${ssrInterpolate(isZh.value ? "\u5DE5\u4F5C\u6811" : "Worktree")}</span></div><span class="text-emerald-600 dark:text-emerald-400 font-semibold">+142 -18</span></div><div class="rounded-lg border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/70 dark:bg-black/25 overflow-hidden text-[10.5px]"><div class="px-2.5 py-1.5 border-b border-slate-900/6 dark:border-white/6 font-semibold text-[#14181f] dark:text-[#e5e9f0] flex items-center justify-between"><span>internal/gateway/proxy.go</span><span class="text-[10px] text-blue-600 dark:text-blue-400">${ssrInterpolate(isZh.value ? "\u53EF\u89C6\u5316 Diff" : "Visual Diff")}</span></div><div class="p-2 space-y-1"><div class="rounded bg-rose-500/10 text-rose-700 dark:text-rose-300 px-2 py-0.5">- Proxy: http.ProxyFromEnvironment,</div><div class="rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-2 py-0.5">+ Proxy: nil,</div><div class="rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-2 py-0.5">+ FlushInterval: -1,</div></div></div><!--]-->`);
      }
      _push(`</div></div><div class="px-3 py-2 border-t border-slate-900/8 dark:border-white/8 flex items-center justify-between font-mono text-[10.5px] text-[#667085] dark:text-[#6e7785]"><span>?directory=.hoxi/worktrees/s1</span><span class="text-blue-600 dark:text-blue-400 font-semibold">${ssrInterpolate(isZh.value ? "\u9694\u79BB\u6C99\u7BB1" : "Isolated")}</span></div></aside></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiHomeWorkspaceShowcase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "HoxiHomeWorkspaceShowcase" });

export { __nuxt_component_3 as default };
//# sourceMappingURL=HoxiHomeWorkspaceShowcase-79xD-tsa.mjs.map
