import { u as useI18n, D as useLocaleRouter, _ as _sfc_main$Y, O as __nuxt_component_3$3 } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "HoxiHomeWorkspaceShowcase",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { localePath } = useLocaleRouter();
    const isZh = computed(() => {
      const loc = typeof locale === "object" && (locale == null ? void 0 : locale.value) ? locale.value : String(locale || "en");
      return loc.startsWith("zh");
    });
    const activeTab = ref("worktree");
    const tabs = computed(() => [
      { id: "worktree", label: t("hoxi.desktop.tabWorktree"), icon: "ph:git-branch-bold" },
      { id: "memory", label: t("hoxi.desktop.tabMemory"), icon: "ph:brain-bold" },
      { id: "steer", label: t("hoxi.desktop.tabSteer"), icon: "ph:shield-check-bold" },
      { id: "handoff", label: t("hoxi.desktop.tabHandoff"), icon: "ph:terminal-window-bold" },
      { id: "mobile", label: t("hoxi.desktop.tabMobile"), icon: "ph:device-mobile-bold" }
    ]);
    const activeInspectorTab = computed(() => {
      if (activeTab.value === "memory") return "memory";
      if (activeTab.value === "handoff") return "terminal";
      if (activeTab.value === "mobile") return "mobile";
      return "diffs";
    });
    const activeSessionTitle = computed(() => {
      if (activeTab.value === "memory") return isZh.value ? "\u63D0\u70BC 8 \u7EF4\u67B6\u6784\u8BB0\u5FC6\u5E93" : "Sync 8-Dim Memory";
      if (activeTab.value === "handoff") return isZh.value ? "\u63A5\u7BA1 Claude Code \u4F1A\u8BDD" : "Claude Code Handoff";
      if (activeTab.value === "mobile") return isZh.value ? "\u624B\u673A\u7AEF\u8FDC\u7A0B\u5BA1\u6279\u4E0E\u534F\u540C" : "Mobile Remote Approval";
      return isZh.value ? "\u91CD\u6784\u7F51\u5173 OAuth \u4EE3\u7406" : "Refactor OAuth Proxy";
    });
    const activeBranchName = computed(() => {
      if (activeTab.value === "memory") return "refactor/memory";
      if (activeTab.value === "handoff") return "cli/claude-handoff";
      if (activeTab.value === "mobile") return "feat/mobile-sync";
      return "feat/oauth-proxy";
    });
    const activeUserPrompt = computed(() => {
      if (activeTab.value === "memory") {
        return isZh.value ? "\u628A\u5F53\u524D\u4F1A\u8BDD\u7684\u7F51\u5173\u5206\u5C42\u7EA6\u675F\u540C\u6B65\u5230\u9879\u76EE 8 \u7EF4\u8BB0\u5FC6\u5E93" : "Sync gateway layering rules into 8-Dim project memory";
      }
      if (activeTab.value === "steer") {
        return isZh.value ? "\u5148\u522B\u5F3A\u63A8\u8FDC\u7AEF\u5206\u652F\uFF0C\u5148\u5728\u672C\u5730\u8DD1\u901A\u5355\u6D4B" : "Do not force-push yet; run unit tests locally first";
      }
      if (activeTab.value === "handoff") {
        return isZh.value ? "\u63A5\u7BA1\u672C\u673A Claude Code \u5386\u53F2\u4F1A\u8BDD\u5E76\u5728\u5F53\u524D\u5DE5\u4F5C\u6811\u7EE7\u7EED" : "Take over local Claude Code session in this worktree";
      }
      if (activeTab.value === "mobile") {
        return isZh.value ? "\u4EBA\u5728\u5916\u9762\uFF0C\u7528\u624B\u673A\u626B\u7801\u8FDE\u4E0A\u684C\u9762\uFF0C\u6279\u51C6\u8FC1\u79FB\u811A\u672C\u5E76\u67E5\u770B Diff" : "Away from desk \u2014 pair on phone to review diffs and approve migration";
      }
      return isZh.value ? "\u5728\u72EC\u7ACB\u5DE5\u4F5C\u6811\u4E2D\u4FEE\u590D\u7F51\u5173 SSE \u7F13\u51B2\u5E76\u652F\u6301\u96F6\u5EF6\u8FDF\u6D41" : "Fix gateway SSE buffering in isolated worktree";
    });
    const activeCenterThoughtBody = computed(() => {
      switch (activeTab.value) {
        case "memory":
          return isZh.value ? "\u5DF2\u81EA\u52A8\u626B\u63CF\u4EE3\u7801\u53D8\u66F4\u5E76\u66F4\u65B0 .opencode/memory/project.md \u7684 8 \u4E2A\u7EF4\u5EA6\uFF0C\u540E\u7EED\u65B0\u5EFA\u4F1A\u8BDD\u5C06\u81EA\u52A8\u7EE7\u627F\u67B6\u6784\u7EA6\u675F\u3002" : "Updated 8-dimension Markdown memory in .opencode/memory/project.md so future sessions inherit architecture rules.";
        case "steer":
          return isZh.value ? "\u6536\u5230\u5B9E\u65F6 Steer \u7EA0\u504F\u6307\u4EE4\uFF0C\u5DF2\u62E6\u622A\u9AD8\u5371\u547D\u4EE4 `git push --force` \u5E76\u89E6\u53D1\u72B6\u6001\u680F\u63D0\u9192\u7B49\u5F85\u786E\u8BA4\u3002" : "Received live steer instruction and intercepted `git push --force` for human approval.";
        case "handoff":
          return isZh.value ? "\u5DF2\u8BFB\u53D6\u672C\u673A Claude Code \u4F1A\u8BDD\u5386\u53F2\u3001\u6539\u52A8\u6587\u4EF6\u4E0E\u5F85\u529E\u8BA1\u5212\uFF0C\u65E0\u7F1D\u6302\u8F7D\u81F3\u5F53\u524D Git Worktree\u3002" : "Imported local Claude Code conversation history and changed files into the active Git worktree.";
        case "mobile":
          return isZh.value ? "\u684C\u9762\u7AEF PreToolUse \u95E8\u63A7\u6682\u505C\u5E76\u53D1\u9001\u5F85\u5904\u7406\u8BA1\u6570\u63D0\u9192\uFF0C\u624B\u673A\u7AEF\u7ECF\u5C40\u57DF\u7F51 (:5417) \u6216\u96A7\u9053 (:5418) \u67E5\u770B Diff \u5E76\u4E00\u952E\u653E\u884C\u3002" : "Desktop PreToolUse gate paused with a count-only alert; approved remotely from Hoxi Mobile over LAN (:5417) / relay (:5418).";
        default:
          return isZh.value ? "\u5F53\u524D\u4F1A\u8BDD\u5DF2\u9694\u79BB\u5728 .hoxi/worktrees/s1\uFF0C\u4FEE\u6539 proxy.go \u4E0D\u4F1A\u6C61\u67D3\u4E3B\u5206\u652F\u6216\u5176\u4ED6\u5E76\u884C\u4F1A\u8BDD\u3002" : "Session isolated inside .hoxi/worktrees/s1. Editing proxy.go without polluting main or parallel sessions.";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Y;
      const _component_NuxtLink = __nuxt_component_3$3;
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
      _push(`</span></div><div class="flex items-center gap-1.5"><span class="hidden md:inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-mono text-[#667085] dark:text-[#6e7785]"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span><span>opencode</span></span><span class="inline-flex items-center justify-center w-6.5 h-6.5 rounded-lg bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sidebar-simple-bold",
        class: "w-3.5 h-3.5 rotate-180"
      }, null, _parent));
      _push(`</span></div></div><div class="grid lg:grid-cols-[232px_minmax(0,1fr)_328px] gap-1.5 px-2 pb-2 text-left"><aside class="flex flex-col justify-between px-1.5 py-1 text-[12px]"><div class="space-y-2"><div class="flex items-center justify-between px-1 py-1"><span class="inline-flex items-center gap-1.5 font-medium text-[#14181f] dark:text-[#e5e9f0]">`);
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
      _push(`</div><div class="space-y-0.5 pl-2"><button type="button" class="${ssrRenderClass([activeTab.value === "worktree" || activeTab.value === "steer" ? "bg-blue-600/9 dark:bg-blue-500/15 text-[#14181f] dark:text-[#e5e9f0] font-medium" : "text-[#475467] dark:text-[#9ba3b0] hover:bg-black/4 dark:hover:bg-white/5", "w-full text-left rounded-lg px-2.5 py-2 transition-colors cursor-pointer"])}"><div class="flex items-center justify-between gap-1.5"><span class="inline-flex items-center gap-1.5 truncate text-[12px]"><span class="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse shrink-0"></span><span class="truncate">${ssrInterpolate(isZh.value ? "\u91CD\u6784\u7F51\u5173 OAuth \u4EE3\u7406" : "Refactor OAuth Proxy")}</span></span><span class="font-mono text-[10px] shrink-0"><span class="text-emerald-600 dark:text-emerald-400">+142</span><span class="text-rose-600 dark:text-rose-400 ml-0.5">-18</span></span></div><div class="mt-0.5 pl-3 font-mono text-[10px] text-[#667085] dark:text-[#6e7785] truncate"> \u2387 feat/oauth-proxy \xB7 worktree </div></button><button type="button" class="${ssrRenderClass([activeTab.value === "memory" ? "bg-blue-600/9 dark:bg-blue-500/15 text-[#14181f] dark:text-[#e5e9f0] font-medium" : "text-[#475467] dark:text-[#9ba3b0] hover:bg-black/4 dark:hover:bg-white/5", "w-full text-left rounded-lg px-2.5 py-2 transition-colors cursor-pointer"])}"><div class="flex items-center justify-between gap-1.5"><span class="inline-flex items-center gap-1.5 truncate text-[12px]"><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span><span class="truncate">${ssrInterpolate(isZh.value ? "\u63D0\u70BC 8 \u7EF4\u67B6\u6784\u8BB0\u5FC6\u5E93" : "Sync 8-Dim Memory")}</span></span><span class="font-mono text-[10px] text-[#667085] dark:text-[#6e7785]">2m</span></div><div class="mt-0.5 pl-3 font-mono text-[10px] text-[#667085] dark:text-[#6e7785] truncate"> \u2387 refactor/memory \xB7 worktree </div></button><button type="button" class="${ssrRenderClass([activeTab.value === "handoff" ? "bg-blue-600/9 dark:bg-blue-500/15 text-[#14181f] dark:text-[#e5e9f0] font-medium" : "text-[#475467] dark:text-[#9ba3b0] hover:bg-black/4 dark:hover:bg-white/5", "w-full text-left rounded-lg px-2.5 py-2 transition-colors cursor-pointer"])}"><div class="flex items-center justify-between gap-1.5"><span class="inline-flex items-center gap-1.5 truncate text-[12px]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:terminal-window-bold",
        class: "w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0"
      }, null, _parent));
      _push(`<span class="truncate">${ssrInterpolate(isZh.value ? "\u63A5\u7BA1 Claude Code \u4F1A\u8BDD" : "Claude Code Handoff")}</span></span><span class="font-mono text-[10px] text-blue-600 dark:text-blue-400">CLI</span></div></button></div><button type="button" class="w-full flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11.5px] text-[#667085] dark:text-[#6e7785] hover:text-[#14181f] dark:hover:text-white cursor-pointer">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plus-bold",
        class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(isZh.value ? "\u4F1A\u8BDD\u63A5\u7BA1 (Claude / Codex)" : "Session Handoff (CLI)")}</span></button></div></div><div class="mt-3 pt-2 border-t border-slate-900/8 dark:border-white/8 flex items-center justify-between px-1.5 py-1 text-[11.5px]"><div class="flex items-center gap-2 min-w-0"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white"> H </span><span class="truncate font-medium text-[#14181f] dark:text-[#e5e9f0]">hoxi.ai</span></div><div class="flex items-center gap-1.5 text-[#667085] dark:text-[#6e7785]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:trophy-bold",
        class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:gear-six-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</div></div></aside><div class="rounded-xl border border-slate-900/8 dark:border-white/8 bg-white dark:bg-[#12161d] shadow-xs p-4 flex flex-col justify-between min-h-[340px]"><div class="space-y-3 text-xs"><div class="flex justify-end"><div class="rounded-2xl rounded-tr-sm bg-[#f4f6f9] dark:bg-[#1a202b] border border-slate-900/6 dark:border-white/6 px-3.5 py-2 text-[12px] text-[#14181f] dark:text-[#e5e9f0] max-w-[85%]">${ssrInterpolate(activeUserPrompt.value)}</div></div><div class="rounded-xl border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/60 dark:bg-white/[0.03] px-3 py-2.5"><div class="flex items-center justify-between text-[11.5px] font-medium text-[#475467] dark:text-[#9ba3b0]"><span class="inline-flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:brain-bold",
        class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(isZh.value ? "\u601D\u8003\u4E86 2.4s" : "Thought for 2.4s")}</span></span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-3 h-3 opacity-60"
      }, null, _parent));
      _push(`</div><p class="mt-1.5 text-[11.5px] text-[#667085] dark:text-[#9ba3b0] leading-relaxed">${ssrInterpolate(activeCenterThoughtBody.value)}</p></div><div class="space-y-1.5 font-mono text-[11px]"><div class="rounded-lg border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/50 dark:bg-white/[0.02] px-3 py-1.5 flex items-center justify-between"><span class="inline-flex items-center gap-2 text-[#14181f] dark:text-[#e5e9f0] truncate">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "w-3.5 h-3.5 text-emerald-500 shrink-0"
      }, null, _parent));
      _push(`<span class="truncate">${ssrInterpolate(activeTab.value === "memory" ? "write  .opencode/memory/project.md" : "edit   internal/gateway/proxy.go")}</span></span><span class="text-emerald-600 dark:text-emerald-400 shrink-0">+18 -4</span></div><div class="${ssrRenderClass([activeTab.value === "steer" ? "border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-300" : "border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/50 dark:bg-white/[0.02] text-[#475467] dark:text-[#9ba3b0]", "rounded-lg border px-3 py-1.5 flex items-center justify-between transition-all"])}"><span class="inline-flex items-center gap-2 truncate">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-warning-fill",
        class: "w-3.5 h-3.5 text-amber-500 shrink-0"
      }, null, _parent));
      _push(`<span class="truncate">bash git push --force origin feat/oauth</span></span><span class="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-300 shrink-0">${ssrInterpolate(isZh.value ? "\u5F85\u6279\u51C6" : "Ask")}</span></div></div></div><div class="mt-4"><div class="mx-2 px-3 py-1.5 rounded-t-xl border border-b-0 border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/80 dark:bg-[#1a202b]/80 flex items-center justify-between text-[11px]"><span class="font-mono text-[#475467] dark:text-[#9ba3b0]">${ssrInterpolate(isZh.value ? "2 \u4E2A\u6587\u4EF6\u53D8\u66F4" : "2 files changed")} <strong class="text-emerald-600 dark:text-emerald-400 ml-1">+142</strong><strong class="text-rose-600 dark:text-rose-400 ml-0.5">-18</strong></span><span class="text-blue-600 dark:text-blue-400 font-medium">${ssrInterpolate(_ctx.$t("hoxi.desktop.mockMergeBtn"))} \u2192 </span></div><div class="rounded-2xl border border-slate-900/13 dark:border-white/13 bg-white/95 dark:bg-[#181e28] px-3.5 pt-2.5 pb-2 shadow-sm"><div class="text-[12px] text-[#98a2b3] dark:text-[#6e7785] pb-2.5 truncate">${ssrInterpolate(_ctx.$t("hoxi.desktop.mockSteerHint"))}</div><div class="flex items-center justify-between gap-1.5 pt-1 border-t border-slate-900/6 dark:border-white/6 text-[11px]"><div class="flex flex-wrap items-center gap-1"><span class="p-1 rounded-md text-[#667085] dark:text-[#9ba3b0]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plus-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span><span class="inline-flex items-center gap-1 rounded-md bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 px-2 py-0.5 font-medium"><span>Build</span></span><span class="inline-flex items-center gap-1 rounded-md bg-black/4 dark:bg-white/6 text-[#14181f] dark:text-[#e5e9f0] px-2 py-0.5 font-medium"><span>Claude Opus 4.6</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:caret-down-bold",
        class: "w-2.5 h-2.5 opacity-60"
      }, null, _parent));
      _push(`</span><span class="hidden sm:inline-flex items-center gap-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 font-mono text-[10.5px]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:git-branch-bold",
        class: "w-3 h-3"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(isZh.value ? "\u9694\u79BB\u6C99\u7BB1" : "Worktree")}</span></span></div><span class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-up-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span></div></div></div></div><aside class="rounded-xl border border-slate-900/8 dark:border-white/8 bg-white dark:bg-[#12161d] shadow-xs flex flex-col justify-between overflow-hidden"><div><div class="flex items-center gap-0.5 px-2.5 py-2 border-b border-slate-900/8 dark:border-white/8 text-[11.5px]"><button type="button" class="${ssrRenderClass([activeInspectorTab.value === "diffs" ? "bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400" : "text-[#667085] dark:text-[#6e7785]", "rounded-lg px-2 py-1 font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isZh.value ? "\u53D8\u66F4 (2)" : "Diffs (2)")}</button><button type="button" class="${ssrRenderClass([activeInspectorTab.value === "memory" ? "bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400" : "text-[#667085] dark:text-[#6e7785]", "rounded-lg px-2 py-1 font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isZh.value ? "\u8BB0\u5FC6\u5E93" : "Memory")}</button><span class="rounded-lg px-2 py-1 text-[#667085] dark:text-[#6e7785]">${ssrInterpolate(isZh.value ? "\u6587\u4EF6" : "Files")}</span><button type="button" class="${ssrRenderClass([activeInspectorTab.value === "terminal" ? "bg-blue-600/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400" : "text-[#667085] dark:text-[#6e7785]", "rounded-lg px-2 py-1 font-medium transition-colors cursor-pointer"])}">${ssrInterpolate(isZh.value ? "\u7EC8\u7AEF" : "Terminal")}</button><span class="ml-auto p-1 text-[#667085] dark:text-[#6e7785]">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:corners-out-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`</span></div><div class="p-3 space-y-2.5 font-mono text-[11px]">`);
      if (activeInspectorTab.value === "memory") {
        _push(`<!--[--><div class="flex items-center justify-between"><div class="inline-flex rounded-lg bg-black/5 dark:bg-white/6 p-0.5 text-[10px]"><span class="rounded-md px-2 py-0.5 text-[#667085] dark:text-[#9ba3b0]">${ssrInterpolate(isZh.value ? "\u4F1A\u8BDD\u8BB0\u5FC6" : "Session")}</span><span class="rounded-md bg-white dark:bg-[#1a202b] px-2 py-0.5 font-semibold text-[#14181f] dark:text-white shadow-2xs">${ssrInterpolate(isZh.value ? "\u9879\u76EE\u8BB0\u5FC6" : "Project")}</span></div><span class="text-[10px] text-blue-600 dark:text-blue-400">.opencode/memory/project.md</span></div><div class="rounded-lg border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/70 dark:bg-black/25 p-2.5 space-y-1.5 text-[10.5px]"><div class="font-bold text-blue-600 dark:text-blue-400">## 1. Architecture &amp; Layering</div><div class="text-[#475467] dark:text-[#9ba3b0]">\u2022 Wails v2 + SolidJS + Zero-Fork OpenCode</div><div class="font-bold text-blue-600 dark:text-blue-400 pt-1">## 2. Engineering Rules</div><div class="text-[#475467] dark:text-[#9ba3b0]">\u2022 Max 800 lines/file \xB7 Unidirectional store</div><div class="font-bold text-blue-600 dark:text-blue-400 pt-1">## 3. Safety &amp; Gateway</div><div class="text-[#475467] dark:text-[#9ba3b0]">\u2022 127.0.0.1 loopback \xB7 Ask on rm/sudo</div></div><!--]-->`);
      } else if (activeInspectorTab.value === "terminal") {
        _push(`<div class="rounded-lg bg-[#0c0e12] text-slate-200 p-3 space-y-2 border border-slate-800 text-[10.5px]"><div class="text-emerald-400">$ claude --resume ses_feat_oauth</div><div class="text-slate-400">\u2713 Attached to worktree .hoxi/worktrees/s1</div><div class="text-slate-400">\u2713 Loaded 8-Dim Memory (.opencode/memory)</div><div class="pt-1 flex flex-wrap gap-1.5"><span class="rounded bg-blue-600 px-2 py-0.5 text-[10px] text-white">Claude Code</span><span class="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">Codex CLI</span><span class="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">Gemini CLI</span></div></div>`);
      } else if (activeInspectorTab.value === "mobile") {
        _push(`<div class="rounded-lg border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/70 dark:bg-black/25 p-2.5 space-y-2 text-[10.5px]"><div class="flex items-center justify-between"><span class="inline-flex items-center gap-1.5 font-semibold text-[#14181f] dark:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:device-mobile-bold",
          class: "w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(isZh.value ? "Hoxi Mobile \xB7 \u5DF2\u914D\u5BF9" : "Hoxi Mobile \xB7 Paired")}</span></span><span class="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9.5px] font-semibold text-emerald-600 dark:text-emerald-400"> LAN :5417 </span></div><div class="text-[#475467] dark:text-[#9ba3b0] space-y-1"><div>\u2022 ${ssrInterpolate(isZh.value ? "\u4F18\u5148\u5C40\u57DF\u7F51\u76F4\u8FDE\uFF0C\u5916\u51FA\u81EA\u52A8\u5207\u96A7\u9053 (:5418)" : "LAN-first routing, auto fallback to relay (:5418)")}</div><div>\u2022 ${ssrInterpolate(isZh.value ? "\u63A8\u9001\u4EC5\u53D1\u5F85\u5BA1\u6279\u8BA1\u6570\uFF0C\u4E0D\u66B4\u9732\u4EE3\u7801\u4E0E\u547D\u4EE4" : "Count-only push alerts, zero code leaked")}</div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/download#mobile"),
          class: "inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold pt-0.5 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(isZh.value ? "\u67E5\u770B iOS / Android \u624B\u673A\u7AEF\u9884\u544A" : "View iOS / Android Mobile Preview")}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(isZh.value ? "\u67E5\u770B iOS / Android \u624B\u673A\u7AEF\u9884\u544A" : "View iOS / Android Mobile Preview"), 1),
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
        _push(`<!--[--><div class="flex items-center justify-between text-[10.5px] text-[#475467] dark:text-[#9ba3b0]"><div class="inline-flex rounded-lg bg-black/5 dark:bg-white/6 p-0.5"><span class="rounded-md bg-white dark:bg-[#1a202b] px-2 py-0.5 font-semibold text-[#14181f] dark:text-white shadow-2xs">${ssrInterpolate(isZh.value ? "\u5DE5\u4F5C\u6811" : "Worktree")}</span><span class="rounded-md px-2 py-0.5">${ssrInterpolate(isZh.value ? "\u4F1A\u8BDD" : "Session")}</span></div><span class="text-emerald-600 dark:text-emerald-400 font-semibold">+142 -18</span></div><div class="rounded-lg border border-slate-900/8 dark:border-white/8 bg-[#f4f6f9]/70 dark:bg-black/25 overflow-hidden text-[10.5px]"><div class="px-2.5 py-1.5 border-b border-slate-900/6 dark:border-white/6 font-semibold text-[#14181f] dark:text-[#e5e9f0] flex items-center justify-between"><span>internal/gateway/proxy.go</span><span class="text-[10px] text-blue-600 dark:text-blue-400">Pierre Diffs</span></div><div class="p-2 space-y-1"><div class="rounded bg-rose-500/10 text-rose-700 dark:text-rose-300 px-2 py-0.5">- Proxy: http.ProxyFromEnvironment,</div><div class="rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-2 py-0.5">+ Proxy: nil,</div><div class="rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-2 py-0.5">+ FlushInterval: -1,</div></div></div><!--]-->`);
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
//# sourceMappingURL=HoxiHomeWorkspaceShowcase-Bu56zZzZ.mjs.map
