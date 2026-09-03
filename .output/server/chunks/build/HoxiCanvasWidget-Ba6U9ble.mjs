import { b as _sfc_main$E } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
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
  __name: "HoxiCanvasWidget",
  __ssrInlineRender: true,
  setup(__props) {
    const copied = ref(false);
    const selectedAdvantage = ref("fullstack");
    const selectedAiStrategy = ref("mixed");
    const selectedInfra = ref("vercel_supabase");
    const selectedRevenue = ref("saas_global");
    const selectedTraffic = ref("video_wechat");
    const step1Options = [
      { id: "fullstack", icon: "\u{1F4BB}", title: "\u5168\u6808\u5DE5\u7A0B\u5E08", desc: "\u524D\u540E\u7AEF\u72EC\u7ACB\u4EA4\u4ED8" },
      { id: "domain_expert", icon: "\u{1F3AF}", title: "\u5782\u76F4\u884C\u4E1A\u4E13\u5BB6", desc: "\u6DF1\u523B\u7406\u89E3\u7528\u6237\u75DB\u70B9" },
      { id: "creator", icon: "\u{1F3AC}", title: "\u5185\u5BB9/\u81EA\u5A92\u4F53\u4EBA", desc: "\u81EA\u5E26\u6D41\u91CF\u4E0E\u8868\u8FBE\u529B" },
      { id: "designer", icon: "\u{1F3A8}", title: "\u5168\u6808\u4EA7\u54C1\u8BBE\u8BA1", desc: "\u9876\u7EA7\u4EA4\u4E92\u4E0E\u89C6\u89C9\u7F8E\u611F" }
    ];
    const step2Options = [
      { id: "mixed", title: "70% \u6781\u901F + 30% \u601D\u8003", cost: "\u7EA6 \xA550/\u6708", desc: "Gemini 2.5 Flash \u6253\u5E95\uFF0CClaude 3.7 \u653B\u575A\u91CD\u6784" },
      { id: "premium", title: "\u5168\u5929\u5019\u6EE1\u8840\u601D\u8003\u6A21\u5F0F", cost: "\u7EA6 \xA5150/\u6708", desc: "\u5168\u7A0B Claude 3.7 / o3-mini \u6DF1\u5EA6\u63A8\u7406\u653B\u575A" },
      { id: "budget", title: "\u6781\u81F4\u4F4E\u6210\u672C\u6781\u901F\u6D41", cost: "\u7EA6 \xA515/\u6708", desc: "\u7EAF DeepSeek V3 / Qwen Coder\uFF0C\u51E0\u4E4E\u514D\u8D39" }
    ];
    const step3Options = [
      { id: "vercel_supabase", title: "Vercel + Supabase", desc: "\u4E00\u4EBA\u516C\u53F8\u9996\u9009\u3002Git \u63D0\u4EA4\u79D2\u90E8\u7F72\uFF0C\u5B8C\u5168\u96F6\u8FD0\u7EF4" },
      { id: "cloudflare", title: "Cloudflare Workers/D1", desc: "\u5168\u7403\u8FB9\u7F18\u8BA1\u7B97\uFF0C\u6781\u901F\u76F4\u8FDE\uFF0C\u514D\u8D39\u989D\u5EA6\u5DE8\u5927" },
      { id: "vps_docker", title: "\u8F7B\u91CF VPS + Docker", desc: "\u81EA\u4E3B\u53EF\u63A7\uFF0C\u6210\u672C\u56FA\u5B9A\uFF0C\u9002\u5408\u6709\u8FD0\u7EF4\u7ECF\u9A8C\u7684\u73A9\u5BB6" }
    ];
    const step4Options = [
      { id: "saas_global", title: "\u6D77\u5916 SaaS / \u8BA2\u9605", desc: "LemonSqueezy / Stripe" },
      { id: "ai_reseller", title: "AI \u7B97\u529B\u4E0E\u4E2D\u8F6C\u5206\u9500", desc: "\u4EE3\u7406\u5206\u6210\u4E0E API Key \u5145\u503C" },
      { id: "community", title: "\u4ED8\u8D39\u793E\u7FA4 / 1v1\u54A8\u8BE2", desc: "\u9AD8\u5355\u4EF7\u77E5\u8BC6\u670D\u52A1\u4E0E\u966A\u8DD1" },
      { id: "one_time", title: "\u72EC\u7ACB\u5DE5\u5177\u5355\u6B21\u4E70\u65AD", desc: "\u6C38\u4E45\u6388\u6743 License \u6A21\u5F0F" }
    ];
    const step5Options = [
      { id: "video_wechat", title: "\u53E3\u64AD\u89C6\u9891 + \u5FAE\u4FE1\u79C1\u57DF", desc: "B\u7AD9/YouTube \u7ED3\u5408\u4EA4\u6D41\u7FA4" },
      { id: "x_indie", title: "X (Twitter) \u72EC\u7ACB\u5F00\u53D1", desc: "\u516C\u5F00\u6784\u5EFA (Build in Public)" },
      { id: "seo_inbound", title: "\u5782\u76F4 SEO \u641C\u7D22\u5F15\u6D41", desc: "\u7CBE\u51C6\u9AD8\u610F\u5411\u957F\u5C3E\u9700\u6C42" },
      { id: "open_source", title: "GitHub \u5F00\u6E90\u5E26\u8D27", desc: "\u6280\u672F\u80CC\u4E66\u4E0E\u6781\u5BA2\u5F00\u53D1\u8005\u88C2\u53D8" }
    ];
    const currentAdvantageLabel = computed(() => {
      var _a;
      return ((_a = step1Options.find((o) => o.id === selectedAdvantage.value)) == null ? void 0 : _a.title) || "";
    });
    const currentAiStrategyLabel = computed(() => {
      var _a;
      return ((_a = step2Options.find((o) => o.id === selectedAiStrategy.value)) == null ? void 0 : _a.title) || "";
    });
    const currentInfraLabel = computed(() => {
      var _a;
      return ((_a = step3Options.find((o) => o.id === selectedInfra.value)) == null ? void 0 : _a.title) || "";
    });
    const currentRevenueLabel = computed(() => {
      var _a;
      return ((_a = step4Options.find((o) => o.id === selectedRevenue.value)) == null ? void 0 : _a.title) || "";
    });
    const currentTrafficLabel = computed(() => {
      var _a;
      return ((_a = step5Options.find((o) => o.id === selectedTraffic.value)) == null ? void 0 : _a.title) || "";
    });
    const calculatedScore = computed(() => {
      let score = 80;
      if (selectedAiStrategy.value === "mixed") score += 7;
      if (selectedInfra.value === "vercel_supabase") score += 6;
      if (selectedRevenue.value === "saas_global") score += 5;
      if (selectedTraffic.value === "video_wechat") score += 2;
      return Math.min(score, 100);
    });
    const adviceComment = computed(() => {
      if (selectedInfra.value === "vercel_supabase" && selectedAiStrategy.value === "mixed") {
        return "\u6781\u5EA6\u63A8\u8350\u7684\u9EC4\u91D1\u67B6\u6784\uFF01Vercel + Supabase \u5E2E\u4F60\u5B8C\u5168\u7529\u6389\u8FD0\u7EF4\u5305\u88B1\uFF0C\u642D\u914D 70% \u6781\u901F\u6A21\u578B + 30% \u601D\u8003\u6A21\u5F0F\uFF0C\u6BCF\u6708\u7814\u53D1\u7B97\u529B\u63A7\u5236\u5728 50 \u5143\u5185\u3002\u628A\u5168\u90E8\u7CBE\u529B\u653E\u5728\u53E3\u64AD\u89C6\u9891\u548C\u5BA2\u6237\u6C9F\u901A\u4E0A\uFF0C\u5546\u4E1A\u95ED\u73AF\u8DD1\u901A\u6982\u7387\u6781\u9AD8\u3002";
      }
      if (selectedInfra.value === "vps_docker") {
        return "\u81EA\u5EFA VPS \u867D\u7136\u81EA\u4E3B\u53EF\u63A7\uFF0C\u4F46\u5BB9\u6613\u88AB Docker \u7F51\u7EDC\u3001\u5907\u4EFD\u4E0E\u5B89\u5168\u8865\u4E01\u6D88\u8017\u6389\u4F60\u5B9D\u8D35\u7684\u5355\u5175\u6CE8\u610F\u529B\u3002\u5EFA\u8BAE\u524D\u671F\u5148\u628A\u4EA7\u54C1\u8DD1\u51FA\u771F\u5B9E\u8425\u6536\uFF0C\u540E\u671F\u6709\u7A33\u5B9A\u6D41\u6C34\u518D\u8003\u8651\u81EA\u5EFA\u57FA\u7840\u8BBE\u65BD\u3002";
      }
      return "\u8FD9\u5957\u5355\u5175\u642D\u914D\u7ED3\u6784\u5F88\u6E05\u6670\u3002\u6838\u5FC3\u662F\u8981\u8BB0\u4F4F\uFF1A\u7B2C\u4E00\u5929\u5C31\u5F00\u542F\u6536\u8D39\u9A8C\u8BC1\uFF0C\u4E0D\u8981\u5BB3\u6015\u5411\u7528\u6237\u8981\u94B1\uFF1B\u7528 AI \u5DE5\u5177\u6760\u6746\u66FF\u4EE3\u62DB\u8058\uFF0C\u5584\u7528\u5FAE\u4FE1\u79C1\u57DF\u505A\u771F\u5B9E\u7684\u7528\u6237\u6C9F\u901A\uFF01";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50/50 to-amber-50/30 dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-950 p-6 md:p-10 shadow-lg relative overflow-hidden" }, _attrs))}><div class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/10 dark:bg-amber-500/15 blur-3xl"></div><div class="max-w-2xl"><div class="flex items-center gap-2 mb-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-sm"> \u{1F4CB} </span><span class="rounded-full bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60"> \u4E00\u4EBA\u6210\u519B \xB7 \u5B9E\u6218\u63A8\u6F14 </span></div><h3 class="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight"> \u4E00\u4EBA\u516C\u53F8\u542F\u52A8\u753B\u5E03 \xB7 5\u6B65\u5355\u5175\u67B6\u6784\u81EA\u67E5 </h3><p class="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"> \u6211\u662F\u53EF\u4E50\u3002\u505A\u4E00\u4EBA\u4F01\u4E1A\u5207\u5FCC\u76F2\u76EE\u4E0A\u9A6C\u3002\u82B1 1 \u5206\u949F\u70B9\u9009\u4F60\u7684 5 \u9879\u6838\u5FC3\u8981\u7D20\uFF0C\u7CFB\u7EDF\u5C06\u5B9E\u65F6\u8BCA\u65AD\u4F60\u7684\u5355\u5175\u6218\u6597\u529B\u6307\u6570\uFF0C\u5E76\u751F\u6210\u4E00\u5957\u5C5E\u4E8E\u4F60\u7684\u4E13\u5C5E\u67B6\u6784\u6E05\u5355\u3002 </p></div><div class="mt-8 space-y-6"><div><label class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-2.5"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-bold">1</span><span>\u4F60\u7684\u6838\u5FC3\u8D85\u7EA7\u6280\u80FD (Core Advantage)</span></label><div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5"><!--[-->`);
      ssrRenderList(step1Options, (opt) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedAdvantage.value === opt.id ? "border-amber-500 bg-amber-500/10 text-slate-900 dark:text-white font-semibold shadow-xs" : "border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:border-slate-300", "p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between"])}"><span class="text-base mb-1">${ssrInterpolate(opt.icon)}</span><span class="font-bold">${ssrInterpolate(opt.title)}</span><span class="text-[10px] opacity-75 mt-0.5 leading-normal">${ssrInterpolate(opt.desc)}</span></button>`);
      });
      _push(`<!--]--></div></div><div><label class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-2.5"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-bold">2</span><span>AI \u7B97\u529B\u4E0E\u7F16\u7A0B\u642D\u914D\u7B56\u7565 (AI Leverage)</span></label><div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5"><!--[-->`);
      ssrRenderList(step2Options, (opt) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedAiStrategy.value === opt.id ? "border-amber-500 bg-amber-500/10 text-slate-900 dark:text-white font-semibold shadow-xs" : "border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:border-slate-300", "p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between"])}"><div class="flex items-center justify-between"><span class="font-bold">${ssrInterpolate(opt.title)}</span><span class="text-[10px] font-mono text-amber-600 dark:text-amber-400">${ssrInterpolate(opt.cost)}</span></div><span class="text-[10px] opacity-75 mt-1 leading-normal">${ssrInterpolate(opt.desc)}</span></button>`);
      });
      _push(`<!--]--></div></div><div><label class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-2.5"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-bold">3</span><span>\u5168\u6808\u90E8\u7F72\u4E0E\u6570\u636E\u57FA\u7840\u8BBE\u65BD (Infrastructure)</span></label><div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5"><!--[-->`);
      ssrRenderList(step3Options, (opt) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedInfra.value === opt.id ? "border-amber-500 bg-amber-500/10 text-slate-900 dark:text-white font-semibold shadow-xs" : "border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:border-slate-300", "p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between"])}"><span class="font-bold">${ssrInterpolate(opt.title)}</span><span class="text-[10px] opacity-75 mt-1 leading-normal">${ssrInterpolate(opt.desc)}</span></button>`);
      });
      _push(`<!--]--></div></div><div><label class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-2.5"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-bold">4</span><span>\u5546\u4E1A\u53D8\u73B0\u4E0E\u5168\u7403\u6536\u6B3E\u95ED\u73AF (Monetization)</span></label><div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5"><!--[-->`);
      ssrRenderList(step4Options, (opt) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedRevenue.value === opt.id ? "border-amber-500 bg-amber-500/10 text-slate-900 dark:text-white font-semibold shadow-xs" : "border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:border-slate-300", "p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between"])}"><span class="font-bold">${ssrInterpolate(opt.title)}</span><span class="text-[10px] opacity-75 mt-0.5 leading-normal">${ssrInterpolate(opt.desc)}</span></button>`);
      });
      _push(`<!--]--></div></div><div><label class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-2.5"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-bold">5</span><span>\u83B7\u5BA2\u6E20\u9053\u4E0E\u79C1\u57DF\u62A4\u57CE\u6CB3 (Moat &amp; Traffic)</span></label><div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5"><!--[-->`);
      ssrRenderList(step5Options, (opt) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedTraffic.value === opt.id ? "border-amber-500 bg-amber-500/10 text-slate-900 dark:text-white font-semibold shadow-xs" : "border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:border-slate-300", "p-3 rounded-xl border text-left text-xs transition-all flex flex-col justify-between"])}"><span class="font-bold">${ssrInterpolate(opt.title)}</span><span class="text-[10px] opacity-75 mt-0.5 leading-normal">${ssrInterpolate(opt.desc)}</span></button>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-10 rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 p-6 md:p-8 shadow-xl"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5"><div><span class="text-[11px] font-mono uppercase tracking-wider text-amber-400">SOLOPRENEUR ARCHITECTURE REPORT</span><h4 class="text-lg md:text-xl font-bold text-white mt-1"> \u6211\u7684\u5408\u559C\u4E00\u4EBA\u516C\u53F8\u67B6\u6784\u8BCA\u65AD\u4E66 </h4></div><div class="flex items-center gap-3"><div class="text-right"><span class="text-[10px] text-slate-400 block">\u5355\u5175\u6210\u519B\u6307\u6570</span><span class="text-2xl md:text-3xl font-black text-amber-400 font-mono">${ssrInterpolate(calculatedScore.value)}</span><span class="text-xs text-slate-500 font-mono"> / 100</span></div><div class="h-10 w-px bg-slate-800 hidden sm:block"></div><button type="button" class="${ssrRenderClass([copied.value ? "bg-emerald-600 text-white" : "bg-slate-800 hover:bg-slate-700 text-slate-200", "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: copied.value ? "ph:check-bold" : "ph:copy-bold",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236\u6E05\u5355" : "\u4E00\u952E\u590D\u5236\u6211\u7684\u67B6\u6784")}</span></button></div></div><div class="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-3"><span class="text-lg shrink-0">\u2615</span><div><strong class="text-amber-300 font-semibold">\u53EF\u4E50\u5927\u767D\u8BDD\u70B9\u8BC4\uFF1A</strong><p class="mt-1 text-slate-400 leading-relaxed">${ssrInterpolate(adviceComment.value)}</p></div></div><div class="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs"><div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"><span class="text-[10px] text-slate-500 block">1. \u8D85\u7EA7\u6280\u80FD</span><strong class="text-white mt-0.5 block truncate">${ssrInterpolate(currentAdvantageLabel.value)}</strong></div><div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"><span class="text-[10px] text-slate-500 block">2. \u7B97\u529B\u642D\u914D</span><strong class="text-amber-400 mt-0.5 block truncate">${ssrInterpolate(currentAiStrategyLabel.value)}</strong></div><div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"><span class="text-[10px] text-slate-500 block">3. \u5168\u6808\u6258\u7BA1</span><strong class="text-white mt-0.5 block truncate">${ssrInterpolate(currentInfraLabel.value)}</strong></div><div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80"><span class="text-[10px] text-slate-500 block">4. \u6536\u6B3E\u6A21\u5F0F</span><strong class="text-emerald-400 mt-0.5 block truncate">${ssrInterpolate(currentRevenueLabel.value)}</strong></div><div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 col-span-2 sm:col-span-1"><span class="text-[10px] text-slate-500 block">5. \u79C1\u57DF\u62A4\u57CE\u6CB3</span><strong class="text-blue-400 mt-0.5 block truncate">${ssrInterpolate(currentTrafficLabel.value)}</strong></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiCanvasWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "HoxiCanvasWidget" });

export { __nuxt_component_3 as default };
