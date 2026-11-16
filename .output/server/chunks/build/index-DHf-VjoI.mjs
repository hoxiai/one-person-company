import __nuxt_component_0 from './HoxiContainer-DDAEb0_Y.mjs';
import { I as useRoute, u as useI18n$1, bA as useSeoMeta, j as _sfc_main$_ } from './server.mjs';
import __nuxt_component_3 from './HoxiSiteBuilderStorePreview-PYpfnNQs.mjs';
import { defineComponent, computed, ref, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, withDirectives, vModelText, vModelSelect, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from 'vue/server-renderer';
import { s as setInterval } from './interval-BBg9qvAV.mjs';
import '../nitro/nitro.mjs';
import 'node:crypto';
import 'drizzle-orm';
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
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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

const CF_QUICK_TOKEN_URL = "https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22d1%22%2C%22type%22%3A%22edit%22%7D%2C%7B%22key%22%3A%22page%22%2C%22type%22%3A%22edit%22%7D%5D&name=Hoxi-APay-Site-Builder";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { locale } = useI18n$1();
    const isEn = computed(() => String(locale.value || "").toLowerCase().startsWith("en"));
    const currentStep = ref(1);
    const selectedProjectSlug = ref(String(route.query.project || "").trim());
    const promptInput = ref(String(route.query.prompt || "").trim());
    const selectedCategory = ref("digital-store");
    const selectedThemePreset = ref("minimal");
    const isGenerating = ref(false);
    const isVerifyingCf = ref(false);
    const isDeploying = ref(false);
    const errorMsg = ref("");
    const currentJob = ref(null);
    const activeBlueprint = ref(null);
    const deployMode = ref("byoc");
    const quickTokenUrl = ref(CF_QUICK_TOKEN_URL);
    const cfTokenInput = ref("");
    const cfAccounts = ref([]);
    const selectedCfAccountId = ref("");
    let pollTimer = null;
    const steps = computed(
      () => isEn.value ? [
        { num: 1, label: "Intent & Model" },
        { num: 2, label: "Blueprint & Preview" },
        { num: 3, label: "Cloudflare / Sandbox" },
        { num: 4, label: "Live Delivery" }
      ] : [
        { num: 1, label: "\u8F93\u5165\u5546\u4E1A\u610F\u56FE" },
        { num: 2, label: "\u5FAE\u8C03\u84DD\u56FE\u4E0E\u9884\u89C8" },
        { num: 3, label: "\u7ED1\u5B9A Cloudflare / \u6C99\u76D2" },
        { num: 4, label: "\u81EA\u52A8\u6784\u5EFA\u4E0E\u4E0A\u7EBF" }
      ]
    );
    const starterIdeas = computed(
      () => isEn.value ? [
        {
          title: "\u{1F3AC} AI Video Workflow & Prompt Store",
          prompt: "Build an AI Video & ComfyUI Workflow Store selling $29 starter bundles, $79 Pro license keys, and $199 advisory with instant delivery.",
          category: "prompt-skill-hub",
          theme: "dev"
        },
        {
          title: "\u{1F511} Vertical SaaS License & API Key Shop",
          prompt: "Launch an automated software license key & API quota storefront with guest checkout and instant card delivery.",
          category: "digital-store",
          theme: "minimal"
        },
        {
          title: "\u{1F4DA} Indie Hacker Paid Playbook & Templates",
          prompt: "Create a solo founder handbook, Notion template pack, and 1-on-1 consulting storefront with built-in SEO blog.",
          category: "creator-newsletter",
          theme: "official"
        }
      ] : [
        {
          title: "\u{1F3AC} \u51FA\u6D77 AI \u89C6\u9891\u5DE5\u4F5C\u6D41\u4E0E\u63D0\u793A\u8BCD\u53D1\u5361\u7AD9",
          prompt: "\u505A\u4E00\u4E2A\u9762\u5411\u51FA\u6D77\u521B\u4F5C\u8005\u7684 AI \u77ED\u89C6\u9891\u5DE5\u4F5C\u6D41\u4E0E ComfyUI \u6A21\u677F\u72EC\u7ACB\u7AD9\uFF0C\u5305\u542B $29 \u5165\u95E8\u5305\u3001$79 \u4E13\u4E1A\u7248\u81EA\u52A8\u53D1\u5361\u6388\u6743\u4E0E $199 \u966A\u8DD1\u670D\u52A1\u3002",
          category: "prompt-skill-hub",
          theme: "dev"
        },
        {
          title: "\u{1F511} \u72EC\u7ACB\u8F6F\u4EF6\u6FC0\u6D3B\u7801 / API \u989D\u5EA6\u81EA\u52A8\u53D1\u5361\u5546\u57CE",
          prompt: "\u642D\u5EFA\u4E00\u4E2A 7\xD724 \u5C0F\u65F6\u65E0\u4EBA\u503C\u5B88\u7684\u8F6F\u4EF6\u6FC0\u6D3B\u7801\u4E0E\u6570\u5B57\u5DE5\u5177\u5546\u57CE\uFF0C\u652F\u6301\u6E38\u5BA2\u514D\u6CE8\u518C\u8F93\u5165\u90AE\u7BB1\u76F4\u63A5\u4E70\u5361\u5BC6\u3002",
          category: "digital-store",
          theme: "minimal"
        },
        {
          title: "\u{1F4DA} \u4E00\u4EBA\u516C\u53F8\u4ED8\u8D39\u4E13\u680F + \u6E90\u7801\u6A21\u677F + 1v1 \u54A8\u8BE2\u7AD9",
          prompt: "\u521B\u5EFA\u4E00\u4E2A\u6C89\u6DC0 SEO \u535A\u5BA2\u6D41\u91CF\u7684\u4E00\u4EBA\u516C\u53F8\u77E5\u8BC6\u5E93\u4E0E\u6E90\u7801\u6A21\u677F\u72EC\u7ACB\u7AD9\uFF0C\u63D0\u4F9B\u9636\u68AF\u5F0F\u6570\u5B57\u4E0B\u8F7D\u5305\u4E0E\u9AD8\u5BA2\u5355\u5B9A\u5236\u9884\u7EA6\u3002",
          category: "creator-newsletter",
          theme: "official"
        }
      ]
    );
    const canJumpToStep = (stepNum) => {
      if (stepNum === 1) return true;
      if ((stepNum === 2 || stepNum === 3) && activeBlueprint.value) return true;
      if (stepNum === 4 && currentJob.value) return true;
      return false;
    };
    const applyStarterIdea = (idea) => {
      promptInput.value = idea.prompt;
      selectedCategory.value = idea.category;
      selectedThemePreset.value = idea.theme;
    };
    const handleGenerateBlueprint = async () => {
      var _a;
      errorMsg.value = "";
      if (!promptInput.value.trim() && !selectedProjectSlug.value) {
        errorMsg.value = isEn.value ? "Please enter your site idea or select a starter chip." : "\u8BF7\u5148\u8F93\u5165\u4F60\u60F3\u505A\u7684\u7F51\u7AD9\u65B9\u5411\uFF0C\u6216\u70B9\u51FB\u4E0A\u65B9\u7075\u611F\u6807\u7B7E\u3002";
        return;
      }
      isGenerating.value = true;
      try {
        const res = await $fetch("/api/hoxi/site-builder/blueprint", {
          method: "POST",
          body: {
            prompt: promptInput.value,
            projectSlug: selectedProjectSlug.value || void 0,
            category: selectedCategory.value,
            themePreset: selectedThemePreset.value,
            locale: locale.value
          }
        });
        if (res == null ? void 0 : res.job) {
          currentJob.value = res.job;
          activeBlueprint.value = JSON.parse(JSON.stringify(res.job.blueprint));
          if (res.quickTokenUrl) quickTokenUrl.value = res.quickTokenUrl;
          currentStep.value = 2;
        }
      } catch (err) {
        errorMsg.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "Failed to generate blueprint";
      } finally {
        isGenerating.value = false;
      }
    };
    const addProductRow = () => {
      if (!activeBlueprint.value) return;
      const nextIndex = activeBlueprint.value.products.length + 1;
      activeBlueprint.value.products.push({
        slug: `custom-pack-${nextIndex}`,
        name: isEn.value ? `Custom Tier #${nextIndex}` : `\u81EA\u5B9A\u4E49\u6570\u5B57\u5546\u54C1 #${nextIndex}`,
        price: 39,
        currency: "USD",
        type: "file",
        description: isEn.value ? "Instant digital download after payment." : "\u4ED8\u6B3E\u540E\u81EA\u52A8\u53D1\u9001\u4E0B\u8F7D\u94FE\u63A5\u6216\u5361\u5BC6\u3002",
        content: "",
        resource: "https://hoxi.ai/downloads/custom-pack.zip"
      });
    };
    const saveBlueprintAndProceed = async () => {
      if (!currentJob.value || !activeBlueprint.value) return;
      try {
        const res = await $fetch("/api/hoxi/site-builder/blueprint", {
          method: "POST",
          body: {
            jobId: currentJob.value.id,
            blueprint: activeBlueprint.value
          }
        });
        if (res == null ? void 0 : res.job) {
          currentJob.value = res.job;
          activeBlueprint.value = JSON.parse(JSON.stringify(res.job.blueprint));
        }
      } catch {
      }
      currentStep.value = 3;
    };
    const handleVerifyCfToken = async () => {
      var _a;
      errorMsg.value = "";
      isVerifyingCf.value = true;
      try {
        const res = await $fetch("/api/hoxi/site-builder/cloudflare/verify", {
          method: "POST",
          body: { apiToken: cfTokenInput.value }
        });
        if (!(res == null ? void 0 : res.valid)) {
          errorMsg.value = (res == null ? void 0 : res.error) || "Invalid Cloudflare API Token";
          cfAccounts.value = [];
          return;
        }
        cfAccounts.value = res.accounts || [];
        if (cfAccounts.value.length > 0) {
          selectedCfAccountId.value = cfAccounts.value[0].id;
        }
      } catch (err) {
        errorMsg.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "Verification failed";
      } finally {
        isVerifyingCf.value = false;
      }
    };
    const startPollingJob = (jobId) => {
      if (pollTimer) clearInterval(pollTimer);
      pollTimer = setInterval();
    };
    const handleStartDeploy = async () => {
      var _a;
      if (!currentJob.value || !activeBlueprint.value) return;
      errorMsg.value = "";
      if (deployMode.value === "byoc" && !cfTokenInput.value.trim()) {
        errorMsg.value = isEn.value ? "Please paste your Cloudflare API Token or switch to Instant Sandbox Preview." : "\u8BF7\u7C98\u8D34\u4F60\u7684 Cloudflare API Token\uFF0C\u6216\u5207\u6362\u53F3\u4FA7\u300C\u514D\u914D\u7F6E\u6C99\u76D2\u7ACB\u5373\u9884\u89C8\u300D\u3002";
        return;
      }
      isDeploying.value = true;
      try {
        const res = await $fetch("/api/hoxi/site-builder/deploy", {
          method: "POST",
          body: {
            jobId: currentJob.value.id,
            deployMode: deployMode.value,
            cfToken: deployMode.value === "byoc" ? cfTokenInput.value.trim() : void 0,
            cfAccountId: deployMode.value === "byoc" ? selectedCfAccountId.value || void 0 : void 0,
            projectName: activeBlueprint.value.siteSlug,
            blueprint: activeBlueprint.value
          }
        });
        if (res == null ? void 0 : res.job) {
          currentJob.value = res.job;
          currentStep.value = 4;
          if (res.job.status !== "live" && res.job.status !== "failed") {
            startPollingJob(res.job.id);
          }
        }
      } catch (err) {
        errorMsg.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || "Deployment failed";
      } finally {
        isDeploying.value = false;
      }
    };
    useSeoMeta({
      title: () => isEn.value ? "Solo Company AI Site Builder \u2014 APay + Cloudflare Pages | Hoxi" : "\u4E00\u4EBA\u516C\u53F8 AI \u5FEB\u901F\u5EFA\u7AD9\u5DE5\u4F5C\u53F0 \u2014 APay + Cloudflare Pages | Hoxi",
      description: () => isEn.value ? "Generate and deploy a complete APay e-commerce & Micro-SaaS storefront to Cloudflare Pages + D1 in 60 seconds." : "\u57FA\u4E8E APay \u4EA4\u6613\u57FA\u5EA7\uFF0C\u4E00\u53E5\u8BDD\u751F\u6210\u5E26\u514D\u6CE8\u518C\u7ED3\u8D26\u3001\u81EA\u52A8\u53D1\u5361\u3001SEO \u535A\u5BA2\u4E0E /admin \u540E\u53F0\u7684\u4E00\u4EBA\u516C\u53F8\u72EC\u7ACB\u7AD9\uFF0C\u4E00\u952E\u90E8\u7F72\u81F3 Cloudflare Pages\u3002"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiContainer = __nuxt_component_0;
      const _component_UIcon = _sfc_main$_;
      const _component_HoxiSiteBuilderStorePreview = __nuxt_component_3;
      _push(ssrRenderComponent(_component_HoxiContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 md:py-16 space-y-10"${_scopeId}><div class="max-w-3xl mx-auto text-center space-y-3"${_scopeId}><div class="inline-flex items-center gap-2 rounded-full border border-blue-200/80 dark:border-blue-800/70 bg-blue-50/80 dark:bg-blue-950/60 px-3.5 py-1 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:rocket-launch-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(isEn.value ? "APAY ENGINE \xD7 CLOUDFLARE PAGES + D1" : "APay \u4EA4\u6613\u57FA\u5EA7 \xD7 Cloudflare Pages + D1 \u96F6\u6210\u672C\u5EFA\u7AD9")}</span></div><h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight"${_scopeId}>${ssrInterpolate(isEn.value ? "Solo Company Rapid Site Builder" : "\u4E00\u4EBA\u516C\u53F8 AI \u5FEB\u901F\u5EFA\u7AD9\u5DE5\u4F5C\u53F0")}</h1><p class="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed"${_scopeId}>${ssrInterpolate(isEn.value ? "Describe your business idea or clone any solo project. Generate a full APay storefront with guest checkout, auto license delivery, SEO blog, and /admin backend \u2014 deployed to Cloudflare Pages." : "\u8F93\u5165\u4E00\u53E5\u8BDD\u5546\u4E1A\u610F\u56FE\u6216\u590D\u523B\u4EFB\u4E00\u5B9E\u6218\u9879\u76EE\uFF0C\u81EA\u52A8\u751F\u6210\u5E26\u300C\u514D\u6CE8\u518C\u6781\u901F\u7ED3\u8D26\u3001\u81EA\u52A8\u53D1\u5361/\u53D1\u8D27\u3001SEO \u535A\u5BA2\u4E0E /admin \u7BA1\u7406\u540E\u53F0\u300D\u7684\u5B8C\u6574\u72EC\u7ACB\u7AD9\uFF0C\u4E00\u952E\u53D1\u5E03\u81F3 Cloudflare Pages\u3002")}</p></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-4xl mx-auto"${_scopeId}><!--[-->`);
            ssrRenderList(steps.value, (s) => {
              _push2(`<button type="button" class="${ssrRenderClass([currentStep.value === s.num ? "border-blue-600 bg-blue-50/70 dark:border-blue-500 dark:bg-blue-950/40" : currentStep.value > s.num ? "border-emerald-300/80 bg-emerald-50/30 dark:border-emerald-800/60 dark:bg-emerald-950/20" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] opacity-75", "rounded-xl border px-3.5 py-2.5 text-left transition-colors cursor-pointer"])}"${_scopeId}><div class="flex items-center justify-between font-mono text-[11px]"${_scopeId}><span class="${ssrRenderClass([currentStep.value === s.num ? "text-blue-600 dark:text-blue-400" : "text-slate-400", "font-bold"])}"${_scopeId}> STEP 0${ssrInterpolate(s.num)}</span>`);
              if (currentStep.value > s.num) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:check-circle-fill",
                  class: "w-4 h-4 text-emerald-500"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 truncate"${_scopeId}>${ssrInterpolate(s.label)}</div></button>`);
            });
            _push2(`<!--]--></div>`);
            if (currentStep.value === 1) {
              _push2(`<div class="max-w-4xl mx-auto space-y-6"${_scopeId}><div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 sm:p-8 space-y-6"${_scopeId}>`);
              if (selectedProjectSlug.value) {
                _push2(`<div class="rounded-xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/50 dark:bg-blue-950/30 p-3.5 flex items-center justify-between gap-3 text-xs"${_scopeId}><div class="flex items-center gap-2 text-blue-800 dark:text-blue-300"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:sparkle-fill",
                  class: "w-4 h-4 text-blue-600 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(isEn.value ? "Cloning solo project blueprint:" : "\u6B63\u5728\u57FA\u4E8E\u5B9E\u6218\u9879\u76EE\u751F\u6210\u540C\u6B3E\u72EC\u7ACB\u7AD9\uFF1A")} <strong class="font-mono"${_scopeId}>${ssrInterpolate(selectedProjectSlug.value)}</strong></span></div><button type="button" class="text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"${_scopeId}>${ssrInterpolate(isEn.value ? "Clear" : "\u6E05\u9664\u5173\u8054")}</button></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="space-y-2"${_scopeId}><label class="block text-sm font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(isEn.value ? "1. What kind of solo-company site do you want to launch?" : "1. \u63CF\u8FF0\u4F60\u60F3\u505A\u7684\u4E00\u4EBA\u516C\u53F8\u7F51\u7AD9\u6216\u53D8\u73B0\u4EA7\u54C1")}</label><textarea rows="4" class="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111319] p-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors"${ssrRenderAttr("placeholder", isEn.value ? "e.g. Build an AI Video Prompt & ComfyUI Workflow Store selling $29 starter packs and $79 commercial licenses with instant delivery..." : "\u4F8B\u5982\uFF1A\u505A\u4E00\u4E2A\u9762\u5411\u51FA\u6D77\u521B\u4F5C\u8005\u7684 TikTok AI \u89C6\u9891\u5DE5\u4F5C\u6D41\u4E0E\u63D0\u793A\u8BCD\u72EC\u7ACB\u7AD9\uFF0C\u552E\u5356 $29 \u5165\u95E8\u6A21\u677F\u5305\u3001$79 \u5546\u4E1A\u6388\u6743\u5361\u5BC6\u4E0E $199 \u5B9A\u5236\u670D\u52A1\uFF0C\u652F\u6301\u514D\u6CE8\u518C\u4E0B\u5355\u81EA\u52A8\u53D1\u8D27...")}${_scopeId}>${ssrInterpolate(promptInput.value)}</textarea></div><div class="space-y-2"${_scopeId}><div class="text-xs font-mono text-slate-400"${_scopeId}>${ssrInterpolate(isEn.value ? "Quick Starter Ideas:" : "\u4E00\u952E\u586B\u5165\u9AD8\u8F6C\u5316\u4E00\u4EBA\u516C\u53F8\u5EFA\u7AD9\u7075\u611F\uFF1A")}</div><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(starterIdeas.value, (idea, idx) => {
                _push2(`<button type="button" class="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#111319] hover:border-blue-500 text-xs text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"${_scopeId}>${ssrInterpolate(idea.title)}</button>`);
              });
              _push2(`<!--]--></div></div><div class="grid sm:grid-cols-2 gap-4 pt-2"${_scopeId}><div class="space-y-2"${_scopeId}><label class="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(isEn.value ? "Business Model Category" : "\u53D8\u73B0\u4E1A\u52A1\u6A21\u578B")}</label><select class="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"${_scopeId}><option value="digital-store"${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "digital-store") : ssrLooseEqual(selectedCategory.value, "digital-store")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(isEn.value ? "Digital Product & License Key Store" : "\u6570\u5B57\u5546\u54C1\u4E0E\u81EA\u52A8\u53D1\u5361\u5546\u57CE (Digital Store)")}</option><option value="prompt-skill-hub"${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "prompt-skill-hub") : ssrLooseEqual(selectedCategory.value, "prompt-skill-hub")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(isEn.value ? "Agent Skills, Prompts & Workflows" : "Agent \u6280\u80FD / \u63D0\u793A\u8BCD / \u5DE5\u4F5C\u6D41\u5E02\u96C6")}</option><option value="ai-micro-saas"${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "ai-micro-saas") : ssrLooseEqual(selectedCategory.value, "ai-micro-saas")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(isEn.value ? "AI Micro-SaaS & API Quota Pack" : "AI Micro-SaaS \u5DE5\u5177\u4E0E\u8BA2\u9605\u72EC\u7ACB\u7AD9")}</option><option value="creator-newsletter"${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "creator-newsletter") : ssrLooseEqual(selectedCategory.value, "creator-newsletter")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(isEn.value ? "Paid Column, E-Book & Advisory" : "\u4ED8\u8D39\u4E13\u680F\u3001\u77E5\u8BC6\u5E93\u4E0E 1v1 \u54A8\u8BE2\u7AD9")}</option></select></div><div class="space-y-2"${_scopeId}><label class="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(isEn.value ? "APay Storefront Theme Preset" : "APay \u4E3B\u9898\u89C6\u89C9\u57FA\u5EA7")}</label><select class="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"${_scopeId}><option value="minimal"${ssrIncludeBooleanAttr(Array.isArray(selectedThemePreset.value) ? ssrLooseContain(selectedThemePreset.value, "minimal") : ssrLooseEqual(selectedThemePreset.value, "minimal")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(isEn.value ? "Minimal \u2014 Ultra-fast conversion checkout" : "Minimal \xB7 \u6781\u7B80\u9AD8\u8F6C\u5316\u5355\u9875\u6536\u94F6\u53F0")}</option><option value="official"${ssrIncludeBooleanAttr(Array.isArray(selectedThemePreset.value) ? ssrLooseContain(selectedThemePreset.value, "official") : ssrLooseEqual(selectedThemePreset.value, "official")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(isEn.value ? "Official \u2014 Full SaaS Storefront & Blog" : "Official \xB7 \u6807\u51C6\u5546\u4E1A\u65D7\u8230\u7AD9 + \u535A\u5BA2\u77E9\u9635")}</option><option value="dev"${ssrIncludeBooleanAttr(Array.isArray(selectedThemePreset.value) ? ssrLooseContain(selectedThemePreset.value, "dev") : ssrLooseEqual(selectedThemePreset.value, "dev")) ? " selected" : ""}${_scopeId}>${ssrInterpolate(isEn.value ? "Dev \u2014 Geek Terminal & Developer Store" : "Dev \xB7 \u6781\u5BA2\u5F00\u53D1\u8005\u4E0E\u5F00\u6E90\u5DE5\u5177\u98CE\u683C")}</option></select></div></div>`);
              if (errorMsg.value) {
                _push2(`<div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400"${_scopeId}>${ssrInterpolate(errorMsg.value)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="pt-2 flex items-center justify-between gap-4"${_scopeId}><span class="text-xs text-slate-400 font-mono"${_scopeId}>${ssrInterpolate(isEn.value ? "Includes full /admin + D1 SQLite schema + SEO blog" : "\u81EA\u52A8\u751F\u6210\u5546\u54C1\u3001\u6F14\u793A\u5361\u5BC6\u3001SEO \u535A\u5BA2\u4E0E /admin \u540E\u53F0")}</span><button type="button"${ssrIncludeBooleanAttr(isGenerating.value) ? " disabled" : ""} class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-bold shadow-sm transition-colors cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: isGenerating.value ? "ph:spinner-gap-bold" : "ph:magic-wand-bold",
                class: ["w-4 h-4", isGenerating.value ? "animate-spin" : ""]
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(isGenerating.value ? isEn.value ? "Generating Blueprint..." : "AI \u6B63\u5728\u89C4\u5212\u6574\u7AD9\u84DD\u56FE..." : isEn.value ? "Generate Site Blueprint \u2192" : "\u7ACB\u5373\u751F\u6210\u6574\u7AD9\u84DD\u56FE \u2192")}</span></button></div></div></div>`);
            } else if (currentStep.value === 2 && activeBlueprint.value) {
              _push2(`<div class="space-y-6"${_scopeId}><div class="grid lg:grid-cols-12 gap-6 items-start"${_scopeId}><div class="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-5 sm:p-6 space-y-5"${_scopeId}><div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3"${_scopeId}><h2 class="text-base font-bold text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(isEn.value ? "Customize Site Blueprint" : "\u5FAE\u8C03\u72EC\u7ACB\u7AD9\u914D\u7F6E\u4E0E\u5546\u54C1")}</h2><span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-[11px]"${_scopeId}>${ssrInterpolate(activeBlueprint.value.generatedBy === "ai" ? "AI Generated" : "Smart Blueprint")}</span></div><div class="space-y-3 text-xs"${_scopeId}><div${_scopeId}><label class="block font-semibold text-slate-600 dark:text-slate-300 mb-1"${_scopeId}>${ssrInterpolate(isEn.value ? "Brand / Site Name" : "\u7F51\u7AD9\u54C1\u724C\u540D\u79F0")}</label><input${ssrRenderAttr("value", activeBlueprint.value.siteName)} type="text" class="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111319] px-3 py-2 text-slate-900 dark:text-white"${_scopeId}></div><div${_scopeId}><label class="block font-semibold text-slate-600 dark:text-slate-300 mb-1"${_scopeId}>${ssrInterpolate(isEn.value ? "Cloudflare Pages Subdomain (slug)" : "Cloudflare Pages \u4E8C\u7EA7\u57DF\u540D\u6807\u8BC6 (slug)")}</label><div class="flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111319] px-3 py-2 font-mono"${_scopeId}><input${ssrRenderAttr("value", activeBlueprint.value.siteSlug)} type="text" class="flex-1 bg-transparent text-slate-900 dark:text-white focus:outline-none"${_scopeId}><span class="text-slate-400"${_scopeId}>.pages.dev</span></div></div><div${_scopeId}><label class="block font-semibold text-slate-600 dark:text-slate-300 mb-1"${_scopeId}>${ssrInterpolate(isEn.value ? "Hero Value Proposition" : "\u4E00\u53E5\u8BDD\u6838\u5FC3\u4EF7\u503C\u4E3B\u5F20 (Tagline)")}</label><input${ssrRenderAttr("value", activeBlueprint.value.tagline)} type="text" class="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111319] px-3 py-2 text-slate-900 dark:text-white"${_scopeId}></div></div><div class="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="text-xs font-bold text-slate-800 dark:text-slate-200"${_scopeId}>${ssrInterpolate(isEn.value ? "Products & Auto-Fulfillment" : "\u9884\u7F6E\u5546\u54C1\u4E0E\u81EA\u52A8\u53D1\u8D27\u5185\u5BB9")}</span><button type="button" class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"${_scopeId}> + ${ssrInterpolate(isEn.value ? "Add Product" : "\u65B0\u589E\u5546\u54C1")}</button></div><!--[-->`);
              ssrRenderList(activeBlueprint.value.products, (prod, idx) => {
                _push2(`<div class="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/40 dark:bg-[#111319] p-3 space-y-2 text-xs"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><input${ssrRenderAttr("value", prod.name)} type="text" class="flex-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-2.5 py-1.5 font-semibold text-slate-900 dark:text-white"${_scopeId}><input${ssrRenderAttr("value", prod.price)} type="number" min="1" class="w-20 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-2 py-1.5 font-mono text-slate-900 dark:text-white"${_scopeId}></div><input${ssrRenderAttr("value", prod.description)} type="text" class="w-full rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-2.5 py-1 text-slate-600 dark:text-slate-300"${ssrRenderAttr("placeholder", isEn.value ? "Short description" : "\u5546\u54C1\u7B80\u8FF0")}${_scopeId}></div>`);
              });
              _push2(`<!--]--></div><div class="pt-3 flex items-center justify-between gap-3"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer"${_scopeId}> \u2190 ${ssrInterpolate(isEn.value ? "Back" : "\u4E0A\u4E00\u6B65")}</button><button type="button" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold cursor-pointer inline-flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(isEn.value ? "Next: Choose Deployment Target \u2192" : "\u4E0B\u4E00\u6B65\uFF1A\u9009\u62E9\u9884\u89C8\u6216\u53D1\u5E03\u5230 Cloudflare \u2192")}</span></button></div></div><div class="lg:col-span-7"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_HoxiSiteBuilderStorePreview, {
                blueprint: activeBlueprint.value,
                locale: unref(locale)
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else if (currentStep.value === 3 && activeBlueprint.value) {
              _push2(`<div class="max-w-4xl mx-auto space-y-6"${_scopeId}><div class="grid md:grid-cols-2 gap-5"${_scopeId}><div class="${ssrRenderClass([deployMode.value === "byoc" ? "border-blue-600 bg-blue-50/30 dark:border-blue-500 dark:bg-blue-950/20 shadow-xs" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14]", "rounded-2xl border p-6 space-y-4 cursor-pointer transition-all"])}"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold uppercase"${_scopeId}>${ssrInterpolate(isEn.value ? "Recommended \xB7 Free Forever" : "\u5F3A\u70C8\u63A8\u8350 \xB7 \u6C38\u4E45\u514D\u8D39\u4E14\u8D44\u4EA7\u5F52\u4F60")}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: deployMode.value === "byoc" ? "ph:check-circle-fill" : "ph:circle",
                class: ["w-5 h-5", deployMode.value === "byoc" ? "text-blue-600" : "text-slate-400"]
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-lg font-extrabold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(isEn.value ? "Deploy to My Cloudflare Account" : "\u4E00\u952E\u90E8\u7F72\u5230\u6211\u7684 Cloudflare (Pages + D1)")}</h3><p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed"${_scopeId}>${ssrInterpolate(isEn.value ? "Automatically creates a D1 SQLite database and deploys your APay site to https://<slug>.pages.dev under your own Cloudflare account." : "\u7531 Hoxi \u4E13\u7528\u6784\u5EFA\u8282\u70B9\uFF0864\u6838\u670D\u52A1\u5668 + /dev/shm \u5185\u5B58\u76D8\u52A0\u901F\uFF09\u81EA\u52A8\u5728\u4F60\u7684 Cloudflare \u8D26\u53F7\u4E0B\u521B\u5EFA D1 \u6570\u636E\u5E93\u3001\u6267\u884C\u8FC1\u79FB\u5E76\u53D1\u5E03\u5230 *.pages.dev\u3002")}</p>`);
              if (deployMode.value === "byoc") {
                _push2(`<div class="pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-3"${_scopeId}><a${ssrRenderAttr("href", quickTokenUrl.value)} target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-bold transition-colors"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:key-bold",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(isEn.value ? "Step 1: Click to Open Pre-filled Cloudflare Token Page \u2197" : "\u7B2C 1 \u6B65\uFF1A\u70B9\u6B64\u6253\u5F00 Cloudflare \u9884\u586B\u6743\u9650\u9875\uFF08\u76F4\u63A5\u70B9 Continue \u751F\u6210 Token\uFF09\u2197")}</span></a><div class="space-y-1.5"${_scopeId}><label class="block text-xs font-semibold text-slate-700 dark:text-slate-300"${_scopeId}>${ssrInterpolate(isEn.value ? "Step 2: Paste Cloudflare API Token" : "\u7B2C 2 \u6B65\uFF1A\u7C98\u8D34\u751F\u6210\u7684 Cloudflare API Token\uFF08\u7528\u5B8C\u5373\u711A\uFF0C\u4E0D\u843D\u76D8\u4FDD\u5B58\uFF09")}</label><div class="flex gap-2"${_scopeId}><input${ssrRenderAttr("value", cfTokenInput.value)} type="password" class="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] px-3 py-2 text-xs font-mono text-slate-900 dark:text-white" placeholder="Paste Cloudflare API Token..."${_scopeId}><button type="button"${ssrIncludeBooleanAttr(isVerifyingCf.value || !cfTokenInput.value) ? " disabled" : ""} class="px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold disabled:opacity-50 cursor-pointer shrink-0"${_scopeId}>${ssrInterpolate(isVerifyingCf.value ? "..." : isEn.value ? "Verify" : "\u81EA\u52A8\u8BC6\u522B\u8D26\u53F7")}</button></div></div>`);
                if (cfAccounts.value.length > 0) {
                  _push2(`<div class="space-y-1"${_scopeId}><label class="block text-xs font-mono text-emerald-600 dark:text-emerald-400"${_scopeId}> \u2713 ${ssrInterpolate(isEn.value ? "Detected Cloudflare Account:" : "\u5DF2\u81EA\u52A8\u8BC6\u522B\u4F60\u7684 Cloudflare \u8D26\u53F7\uFF08\u65E0\u9700\u624B\u52A8\u627E Account ID\uFF09\uFF1A")}</label><select class="w-full rounded-xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-[#111319] px-3 py-2 text-xs font-mono text-slate-900 dark:text-white"${_scopeId}><!--[-->`);
                  ssrRenderList(cfAccounts.value, (acc) => {
                    _push2(`<option${ssrRenderAttr("value", acc.id)}${ssrIncludeBooleanAttr(Array.isArray(selectedCfAccountId.value) ? ssrLooseContain(selectedCfAccountId.value, acc.id) : ssrLooseEqual(selectedCfAccountId.value, acc.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(acc.name)} (${ssrInterpolate(acc.id)}) </option>`);
                  });
                  _push2(`<!--]--></select></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="${ssrRenderClass([deployMode.value === "sandbox" ? "border-blue-600 bg-blue-50/30 dark:border-blue-500 dark:bg-blue-950/20 shadow-xs" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14]", "rounded-2xl border p-6 space-y-4 cursor-pointer transition-all"])}"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><span class="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold uppercase"${_scopeId}>${ssrInterpolate(isEn.value ? "Zero Config \xB7 3 Seconds" : "\u96F6\u914D\u7F6E \xB7 3\u79D2\u5373\u523B\u4F53\u9A8C")}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: deployMode.value === "sandbox" ? "ph:check-circle-fill" : "ph:circle",
                class: ["w-5 h-5", deployMode.value === "sandbox" ? "text-blue-600" : "text-slate-400"]
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-lg font-extrabold text-slate-950 dark:text-white"${_scopeId}>${ssrInterpolate(isEn.value ? "Instant Sandbox Preview (72 Hours)" : "\u514D\u914D\u7F6E\u6C99\u76D2\u7ACB\u5373\u9884\u89C8\uFF0872\u5C0F\u65F6\u6709\u6548\uFF09")}</h3><p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed"${_scopeId}>${ssrInterpolate(isEn.value ? "No Cloudflare token required right now. Generates an interactive storefront + /admin preview link immediately so you can test checkout and share it." : "\u73B0\u5728\u65E0\u9700\u586B\u5199\u4EFB\u4F55 Cloudflare \u51ED\u636E\uFF0C3 \u79D2\u751F\u6210\u53EF\u4EA4\u4E92\u7684\u72EC\u7ACB\u7AD9\u524D\u53F0\u3001\u514D\u6CE8\u518C\u53D1\u5361\u6D4B\u8BD5\u4E0E /admin \u540E\u53F0\u9884\u89C8\u94FE\u63A5\uFF0C\u6EE1\u610F\u540E\u968F\u65F6\u4E00\u952E\u8F6C\u6B63\u90E8\u7F72\u3002")}</p></div></div>`);
              if (errorMsg.value) {
                _push2(`<div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400"${_scopeId}>${ssrInterpolate(errorMsg.value)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex items-center justify-between pt-2"${_scopeId}><button type="button" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer"${_scopeId}> \u2190 ${ssrInterpolate(isEn.value ? "Back to Blueprint" : "\u8FD4\u56DE\u4FEE\u6539\u84DD\u56FE")}</button><button type="button"${ssrIncludeBooleanAttr(isDeploying.value) ? " disabled" : ""} class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-bold shadow-sm cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: isDeploying.value ? "ph:spinner-gap-bold" : "ph:cloud-arrow-up-bold",
                class: ["w-4 h-4", isDeploying.value ? "animate-spin" : ""]
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(deployMode.value === "byoc" ? isEn.value ? "Build & Deploy to Cloudflare Pages \u2192" : "\u5F00\u59CB\u6253\u5305\u5E76\u53D1\u5E03\u5230 Cloudflare Pages \u2192" : isEn.value ? "Launch Instant Sandbox Preview \u2192" : "\u7ACB\u5373\u542F\u52A8\u6C99\u76D2\u72EC\u7ACB\u7AD9\u9884\u89C8 \u2192")}</span></button></div></div>`);
            } else if (currentStep.value === 4 && currentJob.value) {
              _push2(`<div class="max-w-5xl mx-auto space-y-6"${_scopeId}><div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 sm:p-8 space-y-6"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-4"${_scopeId}><div${_scopeId}><div class="font-mono text-xs font-bold uppercase text-blue-600 dark:text-blue-400"${_scopeId}> JOB #${ssrInterpolate(currentJob.value.id)} \xB7 STAGE: ${ssrInterpolate(currentJob.value.stage)}</div><h2 class="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white mt-1"${_scopeId}>${ssrInterpolate(currentJob.value.siteName)}</h2></div><span class="${ssrRenderClass([currentJob.value.status === "live" ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : currentJob.value.status === "failed" ? "bg-rose-500/15 text-rose-600 dark:text-rose-400" : "bg-blue-500/15 text-blue-600 dark:text-blue-400 animate-pulse", "px-3 py-1 rounded-full font-mono text-xs font-bold uppercase"])}"${_scopeId}>${ssrInterpolate(currentJob.value.status)} (${ssrInterpolate(currentJob.value.progress)}%) </span></div><div class="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden"${_scopeId}><div class="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500" style="${ssrRenderStyle({ width: `${Math.min(100, Math.max(10, currentJob.value.progress || 20))}%` })}"${_scopeId}></div></div><div class="rounded-xl bg-slate-950 text-slate-200 p-4 font-mono text-xs space-y-1.5 max-h-56 overflow-y-auto border border-slate-800"${_scopeId}><!--[-->`);
              ssrRenderList(currentJob.value.logs, (entry, idx) => {
                _push2(`<div class="flex items-start gap-2"${_scopeId}><span class="text-slate-500 shrink-0"${_scopeId}>[${ssrInterpolate(entry.step)}]</span><span class="${ssrRenderClass(entry.level === "error" ? "text-rose-400" : entry.level === "success" ? "text-emerald-400" : "text-slate-200")}"${_scopeId}>${ssrInterpolate(entry.message)}</span></div>`);
              });
              _push2(`<!--]--></div>`);
              if (currentJob.value.status === "live") {
                _push2(`<div class="rounded-xl border border-emerald-300/80 dark:border-emerald-800/80 bg-emerald-50/40 dark:bg-emerald-950/20 p-5 space-y-4"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-4"${_scopeId}><div class="space-y-1"${_scopeId}><div class="text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400"${_scopeId}> \u2713 ${ssrInterpolate(isEn.value ? "YOUR SOLO SITE IS LIVE" : "\u72EC\u7ACB\u7AD9\u5DF2\u5C31\u7EEA\uFF0C\u53EF\u7ACB\u5373\u8BBF\u95EE\u4E0E\u63A5\u5355")}</div><div class="text-sm font-mono font-bold text-slate-900 dark:text-white break-all"${_scopeId}>${ssrInterpolate(currentJob.value.previewUrl)}</div></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}><a${ssrRenderAttr("href", currentJob.value.previewUrl || "#")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors"${_scopeId}><span${_scopeId}>${ssrInterpolate(isEn.value ? "Open Storefront \u2197" : "\u6253\u5F00\u72EC\u7ACB\u7AD9\u524D\u53F0 \u2197")}</span></a><a${ssrRenderAttr("href", currentJob.value.adminUrl || "#")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111319] text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold"${_scopeId}><span${_scopeId}>${ssrInterpolate(isEn.value ? "Open /admin Console \u2197" : "\u8FDB\u5165 /admin \u7BA1\u7406\u540E\u53F0 \u2197")}</span></a></div></div><div class="grid sm:grid-cols-2 gap-3 pt-2 border-t border-emerald-200/70 dark:border-emerald-800/50 text-xs font-mono"${_scopeId}><div class="text-slate-600 dark:text-slate-300"${_scopeId}> Admin Username: <strong class="text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(currentJob.value.adminUsername || "admin")}</strong></div><div class="text-slate-600 dark:text-slate-300"${_scopeId}> Initial Password: <strong class="text-slate-900 dark:text-white"${_scopeId}>${ssrInterpolate(currentJob.value.adminPassword)}</strong></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_HoxiSiteBuilderStorePreview, {
                blueprint: currentJob.value.blueprint,
                locale: unref(locale)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 md:py-16 space-y-10" }, [
                createVNode("div", { class: "max-w-3xl mx-auto text-center space-y-3" }, [
                  createVNode("div", { class: "inline-flex items-center gap-2 rounded-full border border-blue-200/80 dark:border-blue-800/70 bg-blue-50/80 dark:bg-blue-950/60 px-3.5 py-1 text-xs font-mono font-semibold text-blue-700 dark:text-blue-300" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:rocket-launch-bold",
                      class: "w-3.5 h-3.5"
                    }),
                    createVNode("span", null, toDisplayString(isEn.value ? "APAY ENGINE \xD7 CLOUDFLARE PAGES + D1" : "APay \u4EA4\u6613\u57FA\u5EA7 \xD7 Cloudflare Pages + D1 \u96F6\u6210\u672C\u5EFA\u7AD9"), 1)
                  ]),
                  createVNode("h1", { class: "text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight" }, toDisplayString(isEn.value ? "Solo Company Rapid Site Builder" : "\u4E00\u4EBA\u516C\u53F8 AI \u5FEB\u901F\u5EFA\u7AD9\u5DE5\u4F5C\u53F0"), 1),
                  createVNode("p", { class: "text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed" }, toDisplayString(isEn.value ? "Describe your business idea or clone any solo project. Generate a full APay storefront with guest checkout, auto license delivery, SEO blog, and /admin backend \u2014 deployed to Cloudflare Pages." : "\u8F93\u5165\u4E00\u53E5\u8BDD\u5546\u4E1A\u610F\u56FE\u6216\u590D\u523B\u4EFB\u4E00\u5B9E\u6218\u9879\u76EE\uFF0C\u81EA\u52A8\u751F\u6210\u5E26\u300C\u514D\u6CE8\u518C\u6781\u901F\u7ED3\u8D26\u3001\u81EA\u52A8\u53D1\u5361/\u53D1\u8D27\u3001SEO \u535A\u5BA2\u4E0E /admin \u7BA1\u7406\u540E\u53F0\u300D\u7684\u5B8C\u6574\u72EC\u7ACB\u7AD9\uFF0C\u4E00\u952E\u53D1\u5E03\u81F3 Cloudflare Pages\u3002"), 1)
                ]),
                createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-4xl mx-auto" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(steps.value, (s) => {
                    return openBlock(), createBlock("button", {
                      key: s.num,
                      type: "button",
                      class: ["rounded-xl border px-3.5 py-2.5 text-left transition-colors cursor-pointer", currentStep.value === s.num ? "border-blue-600 bg-blue-50/70 dark:border-blue-500 dark:bg-blue-950/40" : currentStep.value > s.num ? "border-emerald-300/80 bg-emerald-50/30 dark:border-emerald-800/60 dark:bg-emerald-950/20" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] opacity-75"],
                      onClick: ($event) => canJumpToStep(s.num) && (currentStep.value = s.num)
                    }, [
                      createVNode("div", { class: "flex items-center justify-between font-mono text-[11px]" }, [
                        createVNode("span", {
                          class: ["font-bold", currentStep.value === s.num ? "text-blue-600 dark:text-blue-400" : "text-slate-400"]
                        }, " STEP 0" + toDisplayString(s.num), 3),
                        currentStep.value > s.num ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "ph:check-circle-fill",
                          class: "w-4 h-4 text-emerald-500"
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 truncate" }, toDisplayString(s.label), 1)
                    ], 10, ["onClick"]);
                  }), 128))
                ]),
                currentStep.value === 1 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "max-w-4xl mx-auto space-y-6"
                }, [
                  createVNode("div", { class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 sm:p-8 space-y-6" }, [
                    selectedProjectSlug.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "rounded-xl border border-blue-200 dark:border-blue-800/80 bg-blue-50/50 dark:bg-blue-950/30 p-3.5 flex items-center justify-between gap-3 text-xs"
                    }, [
                      createVNode("div", { class: "flex items-center gap-2 text-blue-800 dark:text-blue-300" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:sparkle-fill",
                          class: "w-4 h-4 text-blue-600 shrink-0"
                        }),
                        createVNode("span", null, [
                          createTextVNode(toDisplayString(isEn.value ? "Cloning solo project blueprint:" : "\u6B63\u5728\u57FA\u4E8E\u5B9E\u6218\u9879\u76EE\u751F\u6210\u540C\u6B3E\u72EC\u7ACB\u7AD9\uFF1A") + " ", 1),
                          createVNode("strong", { class: "font-mono" }, toDisplayString(selectedProjectSlug.value), 1)
                        ])
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer",
                        onClick: ($event) => selectedProjectSlug.value = ""
                      }, toDisplayString(isEn.value ? "Clear" : "\u6E05\u9664\u5173\u8054"), 9, ["onClick"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "block text-sm font-bold text-slate-900 dark:text-white" }, toDisplayString(isEn.value ? "1. What kind of solo-company site do you want to launch?" : "1. \u63CF\u8FF0\u4F60\u60F3\u505A\u7684\u4E00\u4EBA\u516C\u53F8\u7F51\u7AD9\u6216\u53D8\u73B0\u4EA7\u54C1"), 1),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => promptInput.value = $event,
                        rows: "4",
                        class: "w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111319] p-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors",
                        placeholder: isEn.value ? "e.g. Build an AI Video Prompt & ComfyUI Workflow Store selling $29 starter packs and $79 commercial licenses with instant delivery..." : "\u4F8B\u5982\uFF1A\u505A\u4E00\u4E2A\u9762\u5411\u51FA\u6D77\u521B\u4F5C\u8005\u7684 TikTok AI \u89C6\u9891\u5DE5\u4F5C\u6D41\u4E0E\u63D0\u793A\u8BCD\u72EC\u7ACB\u7AD9\uFF0C\u552E\u5356 $29 \u5165\u95E8\u6A21\u677F\u5305\u3001$79 \u5546\u4E1A\u6388\u6743\u5361\u5BC6\u4E0E $199 \u5B9A\u5236\u670D\u52A1\uFF0C\u652F\u6301\u514D\u6CE8\u518C\u4E0B\u5355\u81EA\u52A8\u53D1\u8D27..."
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vModelText, promptInput.value]
                      ])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("div", { class: "text-xs font-mono text-slate-400" }, toDisplayString(isEn.value ? "Quick Starter Ideas:" : "\u4E00\u952E\u586B\u5165\u9AD8\u8F6C\u5316\u4E00\u4EBA\u516C\u53F8\u5EFA\u7AD9\u7075\u611F\uFF1A"), 1),
                      createVNode("div", { class: "flex flex-wrap gap-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(starterIdeas.value, (idea, idx) => {
                          return openBlock(), createBlock("button", {
                            key: idx,
                            type: "button",
                            class: "px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#111319] hover:border-blue-500 text-xs text-slate-700 dark:text-slate-300 transition-colors cursor-pointer",
                            onClick: ($event) => applyStarterIdea(idea)
                          }, toDisplayString(idea.title), 9, ["onClick"]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "grid sm:grid-cols-2 gap-4 pt-2" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "block text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400" }, toDisplayString(isEn.value ? "Business Model Category" : "\u53D8\u73B0\u4E1A\u52A1\u6A21\u578B"), 1),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                          class: "w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"
                        }, [
                          createVNode("option", { value: "digital-store" }, toDisplayString(isEn.value ? "Digital Product & License Key Store" : "\u6570\u5B57\u5546\u54C1\u4E0E\u81EA\u52A8\u53D1\u5361\u5546\u57CE (Digital Store)"), 1),
                          createVNode("option", { value: "prompt-skill-hub" }, toDisplayString(isEn.value ? "Agent Skills, Prompts & Workflows" : "Agent \u6280\u80FD / \u63D0\u793A\u8BCD / \u5DE5\u4F5C\u6D41\u5E02\u96C6"), 1),
                          createVNode("option", { value: "ai-micro-saas" }, toDisplayString(isEn.value ? "AI Micro-SaaS & API Quota Pack" : "AI Micro-SaaS \u5DE5\u5177\u4E0E\u8BA2\u9605\u72EC\u7ACB\u7AD9"), 1),
                          createVNode("option", { value: "creator-newsletter" }, toDisplayString(isEn.value ? "Paid Column, E-Book & Advisory" : "\u4ED8\u8D39\u4E13\u680F\u3001\u77E5\u8BC6\u5E93\u4E0E 1v1 \u54A8\u8BE2\u7AD9"), 1)
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, selectedCategory.value]
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("label", { class: "block text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400" }, toDisplayString(isEn.value ? "APay Storefront Theme Preset" : "APay \u4E3B\u9898\u89C6\u89C9\u57FA\u5EA7"), 1),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => selectedThemePreset.value = $event,
                          class: "w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"
                        }, [
                          createVNode("option", { value: "minimal" }, toDisplayString(isEn.value ? "Minimal \u2014 Ultra-fast conversion checkout" : "Minimal \xB7 \u6781\u7B80\u9AD8\u8F6C\u5316\u5355\u9875\u6536\u94F6\u53F0"), 1),
                          createVNode("option", { value: "official" }, toDisplayString(isEn.value ? "Official \u2014 Full SaaS Storefront & Blog" : "Official \xB7 \u6807\u51C6\u5546\u4E1A\u65D7\u8230\u7AD9 + \u535A\u5BA2\u77E9\u9635"), 1),
                          createVNode("option", { value: "dev" }, toDisplayString(isEn.value ? "Dev \u2014 Geek Terminal & Developer Store" : "Dev \xB7 \u6781\u5BA2\u5F00\u53D1\u8005\u4E0E\u5F00\u6E90\u5DE5\u5177\u98CE\u683C"), 1)
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, selectedThemePreset.value]
                        ])
                      ])
                    ]),
                    errorMsg.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400"
                    }, toDisplayString(errorMsg.value), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "pt-2 flex items-center justify-between gap-4" }, [
                      createVNode("span", { class: "text-xs text-slate-400 font-mono" }, toDisplayString(isEn.value ? "Includes full /admin + D1 SQLite schema + SEO blog" : "\u81EA\u52A8\u751F\u6210\u5546\u54C1\u3001\u6F14\u793A\u5361\u5BC6\u3001SEO \u535A\u5BA2\u4E0E /admin \u540E\u53F0"), 1),
                      createVNode("button", {
                        type: "button",
                        disabled: isGenerating.value,
                        class: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-bold shadow-sm transition-colors cursor-pointer",
                        onClick: handleGenerateBlueprint
                      }, [
                        createVNode(_component_UIcon, {
                          name: isGenerating.value ? "ph:spinner-gap-bold" : "ph:magic-wand-bold",
                          class: ["w-4 h-4", isGenerating.value ? "animate-spin" : ""]
                        }, null, 8, ["name", "class"]),
                        createVNode("span", null, toDisplayString(isGenerating.value ? isEn.value ? "Generating Blueprint..." : "AI \u6B63\u5728\u89C4\u5212\u6574\u7AD9\u84DD\u56FE..." : isEn.value ? "Generate Site Blueprint \u2192" : "\u7ACB\u5373\u751F\u6210\u6574\u7AD9\u84DD\u56FE \u2192"), 1)
                      ], 8, ["disabled"])
                    ])
                  ])
                ])) : currentStep.value === 2 && activeBlueprint.value ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-6"
                }, [
                  createVNode("div", { class: "grid lg:grid-cols-12 gap-6 items-start" }, [
                    createVNode("div", { class: "lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-5 sm:p-6 space-y-5" }, [
                      createVNode("div", { class: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3" }, [
                        createVNode("h2", { class: "text-base font-bold text-slate-900 dark:text-white" }, toDisplayString(isEn.value ? "Customize Site Blueprint" : "\u5FAE\u8C03\u72EC\u7ACB\u7AD9\u914D\u7F6E\u4E0E\u5546\u54C1"), 1),
                        createVNode("span", { class: "px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-mono text-[11px]" }, toDisplayString(activeBlueprint.value.generatedBy === "ai" ? "AI Generated" : "Smart Blueprint"), 1)
                      ]),
                      createVNode("div", { class: "space-y-3 text-xs" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block font-semibold text-slate-600 dark:text-slate-300 mb-1" }, toDisplayString(isEn.value ? "Brand / Site Name" : "\u7F51\u7AD9\u54C1\u724C\u540D\u79F0"), 1),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => activeBlueprint.value.siteName = $event,
                            type: "text",
                            class: "w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111319] px-3 py-2 text-slate-900 dark:text-white"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, activeBlueprint.value.siteName]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block font-semibold text-slate-600 dark:text-slate-300 mb-1" }, toDisplayString(isEn.value ? "Cloudflare Pages Subdomain (slug)" : "Cloudflare Pages \u4E8C\u7EA7\u57DF\u540D\u6807\u8BC6 (slug)"), 1),
                          createVNode("div", { class: "flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111319] px-3 py-2 font-mono" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => activeBlueprint.value.siteSlug = $event,
                              type: "text",
                              class: "flex-1 bg-transparent text-slate-900 dark:text-white focus:outline-none"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, activeBlueprint.value.siteSlug]
                            ]),
                            createVNode("span", { class: "text-slate-400" }, ".pages.dev")
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block font-semibold text-slate-600 dark:text-slate-300 mb-1" }, toDisplayString(isEn.value ? "Hero Value Proposition" : "\u4E00\u53E5\u8BDD\u6838\u5FC3\u4EF7\u503C\u4E3B\u5F20 (Tagline)"), 1),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => activeBlueprint.value.tagline = $event,
                            type: "text",
                            class: "w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#111319] px-3 py-2 text-slate-900 dark:text-white"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, activeBlueprint.value.tagline]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-xs font-bold text-slate-800 dark:text-slate-200" }, toDisplayString(isEn.value ? "Products & Auto-Fulfillment" : "\u9884\u7F6E\u5546\u54C1\u4E0E\u81EA\u52A8\u53D1\u8D27\u5185\u5BB9"), 1),
                          createVNode("button", {
                            type: "button",
                            class: "text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer",
                            onClick: addProductRow
                          }, " + " + toDisplayString(isEn.value ? "Add Product" : "\u65B0\u589E\u5546\u54C1"), 1)
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(activeBlueprint.value.products, (prod, idx) => {
                          return openBlock(), createBlock("div", {
                            key: idx,
                            class: "rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/40 dark:bg-[#111319] p-3 space-y-2 text-xs"
                          }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => prod.name = $event,
                                type: "text",
                                class: "flex-1 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-2.5 py-1.5 font-semibold text-slate-900 dark:text-white"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, prod.name]
                              ]),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => prod.price = $event,
                                type: "number",
                                min: "1",
                                class: "w-20 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-2 py-1.5 font-mono text-slate-900 dark:text-white"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  prod.price,
                                  void 0,
                                  { number: true }
                                ]
                              ])
                            ]),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => prod.description = $event,
                              type: "text",
                              class: "w-full rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0d12] px-2.5 py-1 text-slate-600 dark:text-slate-300",
                              placeholder: isEn.value ? "Short description" : "\u5546\u54C1\u7B80\u8FF0"
                            }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                              [vModelText, prod.description]
                            ])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "pt-3 flex items-center justify-between gap-3" }, [
                        createVNode("button", {
                          type: "button",
                          class: "px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer",
                          onClick: ($event) => currentStep.value = 1
                        }, " \u2190 " + toDisplayString(isEn.value ? "Back" : "\u4E0A\u4E00\u6B65"), 9, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: "px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold cursor-pointer inline-flex items-center gap-1.5",
                          onClick: saveBlueprintAndProceed
                        }, [
                          createVNode("span", null, toDisplayString(isEn.value ? "Next: Choose Deployment Target \u2192" : "\u4E0B\u4E00\u6B65\uFF1A\u9009\u62E9\u9884\u89C8\u6216\u53D1\u5E03\u5230 Cloudflare \u2192"), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "lg:col-span-7" }, [
                      createVNode(_component_HoxiSiteBuilderStorePreview, {
                        blueprint: activeBlueprint.value,
                        locale: unref(locale)
                      }, null, 8, ["blueprint", "locale"])
                    ])
                  ])
                ])) : currentStep.value === 3 && activeBlueprint.value ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "max-w-4xl mx-auto space-y-6"
                }, [
                  createVNode("div", { class: "grid md:grid-cols-2 gap-5" }, [
                    createVNode("div", {
                      class: ["rounded-2xl border p-6 space-y-4 cursor-pointer transition-all", deployMode.value === "byoc" ? "border-blue-600 bg-blue-50/30 dark:border-blue-500 dark:bg-blue-950/20 shadow-xs" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14]"],
                      onClick: ($event) => deployMode.value = "byoc"
                    }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold uppercase" }, toDisplayString(isEn.value ? "Recommended \xB7 Free Forever" : "\u5F3A\u70C8\u63A8\u8350 \xB7 \u6C38\u4E45\u514D\u8D39\u4E14\u8D44\u4EA7\u5F52\u4F60"), 1),
                        createVNode(_component_UIcon, {
                          name: deployMode.value === "byoc" ? "ph:check-circle-fill" : "ph:circle",
                          class: ["w-5 h-5", deployMode.value === "byoc" ? "text-blue-600" : "text-slate-400"]
                        }, null, 8, ["name", "class"])
                      ]),
                      createVNode("h3", { class: "text-lg font-extrabold text-slate-950 dark:text-white" }, toDisplayString(isEn.value ? "Deploy to My Cloudflare Account" : "\u4E00\u952E\u90E8\u7F72\u5230\u6211\u7684 Cloudflare (Pages + D1)"), 1),
                      createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed" }, toDisplayString(isEn.value ? "Automatically creates a D1 SQLite database and deploys your APay site to https://<slug>.pages.dev under your own Cloudflare account." : "\u7531 Hoxi \u4E13\u7528\u6784\u5EFA\u8282\u70B9\uFF0864\u6838\u670D\u52A1\u5668 + /dev/shm \u5185\u5B58\u76D8\u52A0\u901F\uFF09\u81EA\u52A8\u5728\u4F60\u7684 Cloudflare \u8D26\u53F7\u4E0B\u521B\u5EFA D1 \u6570\u636E\u5E93\u3001\u6267\u884C\u8FC1\u79FB\u5E76\u53D1\u5E03\u5230 *.pages.dev\u3002"), 1),
                      deployMode.value === "byoc" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "pt-3 border-t border-slate-200/80 dark:border-slate-800 space-y-3",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, [
                        createVNode("a", {
                          href: quickTokenUrl.value,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          class: "w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-bold transition-colors"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:key-bold",
                            class: "w-4 h-4"
                          }),
                          createVNode("span", null, toDisplayString(isEn.value ? "Step 1: Click to Open Pre-filled Cloudflare Token Page \u2197" : "\u7B2C 1 \u6B65\uFF1A\u70B9\u6B64\u6253\u5F00 Cloudflare \u9884\u586B\u6743\u9650\u9875\uFF08\u76F4\u63A5\u70B9 Continue \u751F\u6210 Token\uFF09\u2197"), 1)
                        ], 8, ["href"]),
                        createVNode("div", { class: "space-y-1.5" }, [
                          createVNode("label", { class: "block text-xs font-semibold text-slate-700 dark:text-slate-300" }, toDisplayString(isEn.value ? "Step 2: Paste Cloudflare API Token" : "\u7B2C 2 \u6B65\uFF1A\u7C98\u8D34\u751F\u6210\u7684 Cloudflare API Token\uFF08\u7528\u5B8C\u5373\u711A\uFF0C\u4E0D\u843D\u76D8\u4FDD\u5B58\uFF09"), 1),
                          createVNode("div", { class: "flex gap-2" }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => cfTokenInput.value = $event,
                              type: "password",
                              class: "flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111319] px-3 py-2 text-xs font-mono text-slate-900 dark:text-white",
                              placeholder: "Paste Cloudflare API Token..."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, cfTokenInput.value]
                            ]),
                            createVNode("button", {
                              type: "button",
                              disabled: isVerifyingCf.value || !cfTokenInput.value,
                              class: "px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold disabled:opacity-50 cursor-pointer shrink-0",
                              onClick: handleVerifyCfToken
                            }, toDisplayString(isVerifyingCf.value ? "..." : isEn.value ? "Verify" : "\u81EA\u52A8\u8BC6\u522B\u8D26\u53F7"), 9, ["disabled"])
                          ])
                        ]),
                        cfAccounts.value.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-1"
                        }, [
                          createVNode("label", { class: "block text-xs font-mono text-emerald-600 dark:text-emerald-400" }, " \u2713 " + toDisplayString(isEn.value ? "Detected Cloudflare Account:" : "\u5DF2\u81EA\u52A8\u8BC6\u522B\u4F60\u7684 Cloudflare \u8D26\u53F7\uFF08\u65E0\u9700\u624B\u52A8\u627E Account ID\uFF09\uFF1A"), 1),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => selectedCfAccountId.value = $event,
                            class: "w-full rounded-xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-[#111319] px-3 py-2 text-xs font-mono text-slate-900 dark:text-white"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(cfAccounts.value, (acc) => {
                              return openBlock(), createBlock("option", {
                                key: acc.id,
                                value: acc.id
                              }, toDisplayString(acc.name) + " (" + toDisplayString(acc.id) + ") ", 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, selectedCfAccountId.value]
                          ])
                        ])) : createCommentVNode("", true)
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ], 10, ["onClick"]),
                    createVNode("div", {
                      class: ["rounded-2xl border p-6 space-y-4 cursor-pointer transition-all", deployMode.value === "sandbox" ? "border-blue-600 bg-blue-50/30 dark:border-blue-500 dark:bg-blue-950/20 shadow-xs" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14]"],
                      onClick: ($event) => deployMode.value = "sandbox"
                    }, [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold uppercase" }, toDisplayString(isEn.value ? "Zero Config \xB7 3 Seconds" : "\u96F6\u914D\u7F6E \xB7 3\u79D2\u5373\u523B\u4F53\u9A8C"), 1),
                        createVNode(_component_UIcon, {
                          name: deployMode.value === "sandbox" ? "ph:check-circle-fill" : "ph:circle",
                          class: ["w-5 h-5", deployMode.value === "sandbox" ? "text-blue-600" : "text-slate-400"]
                        }, null, 8, ["name", "class"])
                      ]),
                      createVNode("h3", { class: "text-lg font-extrabold text-slate-950 dark:text-white" }, toDisplayString(isEn.value ? "Instant Sandbox Preview (72 Hours)" : "\u514D\u914D\u7F6E\u6C99\u76D2\u7ACB\u5373\u9884\u89C8\uFF0872\u5C0F\u65F6\u6709\u6548\uFF09"), 1),
                      createVNode("p", { class: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed" }, toDisplayString(isEn.value ? "No Cloudflare token required right now. Generates an interactive storefront + /admin preview link immediately so you can test checkout and share it." : "\u73B0\u5728\u65E0\u9700\u586B\u5199\u4EFB\u4F55 Cloudflare \u51ED\u636E\uFF0C3 \u79D2\u751F\u6210\u53EF\u4EA4\u4E92\u7684\u72EC\u7ACB\u7AD9\u524D\u53F0\u3001\u514D\u6CE8\u518C\u53D1\u5361\u6D4B\u8BD5\u4E0E /admin \u540E\u53F0\u9884\u89C8\u94FE\u63A5\uFF0C\u6EE1\u610F\u540E\u968F\u65F6\u4E00\u952E\u8F6C\u6B63\u90E8\u7F72\u3002"), 1)
                    ], 10, ["onClick"])
                  ]),
                  errorMsg.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400"
                  }, toDisplayString(errorMsg.value), 1)) : createCommentVNode("", true),
                  createVNode("div", { class: "flex items-center justify-between pt-2" }, [
                    createVNode("button", {
                      type: "button",
                      class: "px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer",
                      onClick: ($event) => currentStep.value = 2
                    }, " \u2190 " + toDisplayString(isEn.value ? "Back to Blueprint" : "\u8FD4\u56DE\u4FEE\u6539\u84DD\u56FE"), 9, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      disabled: isDeploying.value,
                      class: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-bold shadow-sm cursor-pointer",
                      onClick: handleStartDeploy
                    }, [
                      createVNode(_component_UIcon, {
                        name: isDeploying.value ? "ph:spinner-gap-bold" : "ph:cloud-arrow-up-bold",
                        class: ["w-4 h-4", isDeploying.value ? "animate-spin" : ""]
                      }, null, 8, ["name", "class"]),
                      createVNode("span", null, toDisplayString(deployMode.value === "byoc" ? isEn.value ? "Build & Deploy to Cloudflare Pages \u2192" : "\u5F00\u59CB\u6253\u5305\u5E76\u53D1\u5E03\u5230 Cloudflare Pages \u2192" : isEn.value ? "Launch Instant Sandbox Preview \u2192" : "\u7ACB\u5373\u542F\u52A8\u6C99\u76D2\u72EC\u7ACB\u7AD9\u9884\u89C8 \u2192"), 1)
                    ], 8, ["disabled"])
                  ])
                ])) : currentStep.value === 4 && currentJob.value ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "max-w-5xl mx-auto space-y-6"
                }, [
                  createVNode("div", { class: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d0f14] p-6 sm:p-8 space-y-6" }, [
                    createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "font-mono text-xs font-bold uppercase text-blue-600 dark:text-blue-400" }, " JOB #" + toDisplayString(currentJob.value.id) + " \xB7 STAGE: " + toDisplayString(currentJob.value.stage), 1),
                        createVNode("h2", { class: "text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white mt-1" }, toDisplayString(currentJob.value.siteName), 1)
                      ]),
                      createVNode("span", {
                        class: ["px-3 py-1 rounded-full font-mono text-xs font-bold uppercase", currentJob.value.status === "live" ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : currentJob.value.status === "failed" ? "bg-rose-500/15 text-rose-600 dark:text-rose-400" : "bg-blue-500/15 text-blue-600 dark:text-blue-400 animate-pulse"]
                      }, toDisplayString(currentJob.value.status) + " (" + toDisplayString(currentJob.value.progress) + "%) ", 3)
                    ]),
                    createVNode("div", { class: "w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden" }, [
                      createVNode("div", {
                        class: "h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500",
                        style: { width: `${Math.min(100, Math.max(10, currentJob.value.progress || 20))}%` }
                      }, null, 4)
                    ]),
                    createVNode("div", { class: "rounded-xl bg-slate-950 text-slate-200 p-4 font-mono text-xs space-y-1.5 max-h-56 overflow-y-auto border border-slate-800" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(currentJob.value.logs, (entry, idx) => {
                        return openBlock(), createBlock("div", {
                          key: idx,
                          class: "flex items-start gap-2"
                        }, [
                          createVNode("span", { class: "text-slate-500 shrink-0" }, "[" + toDisplayString(entry.step) + "]", 1),
                          createVNode("span", {
                            class: entry.level === "error" ? "text-rose-400" : entry.level === "success" ? "text-emerald-400" : "text-slate-200"
                          }, toDisplayString(entry.message), 3)
                        ]);
                      }), 128))
                    ]),
                    currentJob.value.status === "live" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "rounded-xl border border-emerald-300/80 dark:border-emerald-800/80 bg-emerald-50/40 dark:bg-emerald-950/20 p-5 space-y-4"
                    }, [
                      createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4" }, [
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("div", { class: "text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400" }, " \u2713 " + toDisplayString(isEn.value ? "YOUR SOLO SITE IS LIVE" : "\u72EC\u7ACB\u7AD9\u5DF2\u5C31\u7EEA\uFF0C\u53EF\u7ACB\u5373\u8BBF\u95EE\u4E0E\u63A5\u5355"), 1),
                          createVNode("div", { class: "text-sm font-mono font-bold text-slate-900 dark:text-white break-all" }, toDisplayString(currentJob.value.previewUrl), 1)
                        ]),
                        createVNode("div", { class: "flex flex-wrap items-center gap-2.5" }, [
                          createVNode("a", {
                            href: currentJob.value.previewUrl || "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors"
                          }, [
                            createVNode("span", null, toDisplayString(isEn.value ? "Open Storefront \u2197" : "\u6253\u5F00\u72EC\u7ACB\u7AD9\u524D\u53F0 \u2197"), 1)
                          ], 8, ["href"]),
                          createVNode("a", {
                            href: currentJob.value.adminUrl || "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111319] text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold"
                          }, [
                            createVNode("span", null, toDisplayString(isEn.value ? "Open /admin Console \u2197" : "\u8FDB\u5165 /admin \u7BA1\u7406\u540E\u53F0 \u2197"), 1)
                          ], 8, ["href"])
                        ])
                      ]),
                      createVNode("div", { class: "grid sm:grid-cols-2 gap-3 pt-2 border-t border-emerald-200/70 dark:border-emerald-800/50 text-xs font-mono" }, [
                        createVNode("div", { class: "text-slate-600 dark:text-slate-300" }, [
                          createTextVNode(" Admin Username: "),
                          createVNode("strong", { class: "text-slate-900 dark:text-white" }, toDisplayString(currentJob.value.adminUsername || "admin"), 1)
                        ]),
                        createVNode("div", { class: "text-slate-600 dark:text-slate-300" }, [
                          createTextVNode(" Initial Password: "),
                          createVNode("strong", { class: "text-slate-900 dark:text-white" }, toDisplayString(currentJob.value.adminPassword), 1)
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_HoxiSiteBuilderStorePreview, {
                    blueprint: currentJob.value.blueprint,
                    locale: unref(locale)
                  }, null, 8, ["blueprint", "locale"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/site-builder/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DHf-VjoI.mjs.map
