import { a as useToast, v as _sfc_main$z, H as _sfc_main$q, g as _sfc_main$D, p as _sfc_main$u, d as _sfc_main$X, j as _sfc_main$10, _ as _sfc_main$R, f as _sfc_main$L, k as _sfc_main$F, h as _sfc_main$E, C as _sfc_main$m } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { d as defaultHoxiProjects } from './projects-k3Tmu0Co.mjs';
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
import './projectMatcher-mcLmK4UC.mjs';
import './blogOgCard-Dd_qPNIc.mjs';

function cleanCommunityLine(raw) {
  return String(raw || "").replace(/<[^>]+>/g, " ").replace(/^#{1,6}\s+/g, "").replace(/^\s*(?:[-*•]|\d+[.)、])\s+/g, "").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/【[^】]+】/g, "").replace(/\s+/g, " ").trim().replace(/[。；;]+$/g, "").trim();
}
function finalizeCommunityPlainLines(lines) {
  const output = [];
  for (const item of lines) {
    if (item === "") {
      if (output.length > 0 && output[output.length - 1] !== "") {
        output.push("");
      }
      continue;
    }
    const cleaned = cleanCommunityLine(String(item || ""));
    if (cleaned) {
      output.push(cleaned);
    }
  }
  while (output.length > 0 && output[output.length - 1] === "") {
    output.pop();
  }
  return output.join("\n");
}
function buildCommunityPlainTextFromLedger(input) {
  const period = String(input.periodLabel || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)).trim();
  const commits = Math.max(0, Math.round(Number(input.todayCommits) || 0));
  const repos = Math.max(1, Math.round(Number(input.activeReposCount) || 1));
  const totalTokens = Math.max(0, Number(input.dbTotalTokens) || 0);
  const cacheTokens = Math.max(0, Number(input.dbCacheReadTokens) || 0);
  const costUsd = Math.max(0, Number(input.dbTotalCost) || 0);
  const costRmb = (costUsd * 7.25).toFixed(1);
  const totalMillion = (totalTokens / 1e6).toFixed(2);
  const cacheRatio = totalTokens > 0 ? Math.min(99, Math.round(cacheTokens / totalTokens * 100)) : 0;
  const cleanOrigin = String(input.origin || "https://hoxi.ai").replace(/\/+$/, "");
  const targetUrl = input.slug ? `${cleanOrigin}/blog/${String(input.slug).replace(/^\/?(?:blog\/)?/, "")}` : `${cleanOrigin}/one-person-company`;
  const subject = cleanCommunityLine(
    input.headSubject || "\u628A\u4E00\u4EBA\u516C\u53F8\u7684\u591A\u6A21\u578B\u7F13\u5B58\u8DEF\u7531\u548C\u65E0\u503C\u5B88\u5185\u5BB9\u95ED\u73AF\u91CD\u65B0\u68B3\u7406\u4E86\u4E00\u904D"
  );
  return finalizeCommunityPlainLines([
    `\u6700\u8FD1\u4E00\u4E2A\u4EBA\u5728\u5BB6\u6298\u817E\u81EA\u5DF1\u7684\u72EC\u7ACB\u8F6F\u4EF6\u77E9\u9635 \u987A\u624B\u628A ${period} \u8FD9\u4E00\u8F6E\u7684\u7B97\u529B\u8D26\u5355\u62C9\u51FA\u6765\u7B97\u4E86\u7B97`,
    "",
    `\u8FD9\u51E0\u5929\u4E3B\u8981\u5728\u641E\u7684\u4E8B\u60C5\u662F${subject}`,
    `\u4E00\u5171\u5728 ${repos} \u4E2A\u5173\u8054\u4ED3\u5E93\u91CC\u63A8\u4E86 ${commits} \u6B21\u63D0\u4EA4`,
    "",
    `\u7F51\u5173\u90A3\u8FB9\u771F\u5B9E\u8DD1\u6389\u4E86 ${totalMillion}M Token \u8D26\u5355\u6298\u5408\u4E0B\u6765\u662F $${costUsd.toFixed(2)} \u5927\u6982 ${costRmb} \u5757\u4EBA\u6C11\u5E01`,
    cacheRatio > 0 ? `\u597D\u5728\u628A\u7CFB\u7EDF\u63D0\u793A\u8BCD\u56FA\u5B9A\u524D\u7F00\u62C6\u5E72\u51C0\u4E4B\u540E Prompt \u7F13\u5B58\u547D\u4E2D\u7387\u62C9\u5230\u4E86 ${cacheRatio}% \u4E0D\u7136\u5168\u8D70\u539F\u4EF7\u63A8\u7406\u771F\u625B\u4E0D\u4F4F` : "\u76EE\u524D\u8FD8\u5728\u7EE7\u7EED\u538B\u9AD8\u9891\u6279\u5904\u7406\u4EFB\u52A1\u7684\u8F93\u5165\u4E0A\u4E0B\u6587 \u4E0D\u7136\u5168\u8D70\u65D7\u8230\u6A21\u578B\u539F\u4EF7\u63A8\u7406\u6210\u672C\u8FD8\u662F\u504F\u9AD8",
    "",
    "\u73B0\u5728\u6700\u5927\u7684\u4F53\u611F\u662F\u4E00\u4EBA\u516C\u53F8\u5343\u4E07\u522B\u8FF7\u4FE1\u5355\u4E2A\u6700\u8D35\u6A21\u578B",
    "\u810F\u6D3B\u7D2F\u6D3B\u548C\u6279\u91CF\u6E05\u6D17\u4EA4\u7ED9 DeepSeek V3 \u515C\u5E95 \u771F\u6B63\u5361\u4F4F\u7684\u590D\u6742\u903B\u8F91\u518D\u5207 Claude Sonnet \u5904\u7406 \u5355\u65E5\u6210\u672C\u57FA\u672C\u5C31\u662F\u4E00\u676F\u7F8E\u5F0F\u7684\u94B1",
    "",
    `\u5B8C\u6574\u7684\u7F51\u5173\u6A21\u578B\u5206\u6D41\u548C\u8E29\u5751\u8D26\u672C\u6211\u76F4\u63A5\u5F52\u6863\u5728\u8FD9\u7BC7\u91CC\u4E86 ${targetUrl}`,
    "\u6709\u540C\u6837\u81EA\u5DF1\u5728\u8DD1\u72EC\u7ACB\u5F00\u53D1\u6216\u8005\u8DE8\u5883\u5DE5\u5177\u7684\u8001\u54E5\u6B22\u8FCE\u4E00\u8D77\u5BF9\u5BF9\u8D26"
  ]);
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HoxiDevPulseLedgerCard",
  __ssrInlineRender: true,
  emits: ["published"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toast = useToast();
    const showGenerator = ref(false);
    const loadingDrafts = ref(false);
    const generating = ref(false);
    const publishingSlug = ref("");
    const pendingDrafts = ref([]);
    const form = reactive({
      periodLabel: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      todayCommits: 12,
      activeReposCount: 3,
      dbTotalTokens: 124e5,
      dbInputTokens: 22e5,
      dbCacheReadTokens: 96e5,
      dbTotalCost: 3.6,
      headSubject: ""
    });
    async function writeCommunityClipboard(text) {
    }
    async function copyFromForm() {
      const slug = `solo-ledger-${String(form.periodLabel || "").trim().replace(/[^a-zA-Z0-9-]+/g, "-").toLowerCase()}`;
      buildCommunityPlainTextFromLedger({
        periodLabel: form.periodLabel,
        todayCommits: Number(form.todayCommits) || 0,
        activeReposCount: Math.max(1, Number(form.activeReposCount) || 1),
        dbTotalTokens: Number(form.dbTotalTokens) || 0,
        dbCacheReadTokens: Number(form.dbCacheReadTokens) || 0,
        dbTotalCost: Number(form.dbTotalCost) || 0,
        headSubject: form.headSubject.trim() || void 0,
        slug
      });
      await writeCommunityClipboard();
    }
    async function copyFromDraft(draft) {
      const periodMatch = draft.slug.match(/(\d{4}-\d{2}-\d{2})/);
      buildCommunityPlainTextFromLedger({
        periodLabel: (periodMatch == null ? void 0 : periodMatch[1]) || form.periodLabel,
        todayCommits: Number(form.todayCommits) || 12,
        activeReposCount: Math.max(1, Number(form.activeReposCount) || 3),
        dbTotalTokens: Number(form.dbTotalTokens) || 124e5,
        dbCacheReadTokens: Number(form.dbCacheReadTokens) || 96e5,
        dbTotalCost: Number(form.dbTotalCost) || 3.6,
        headSubject: draft.description || draft.title,
        slug: draft.slug
      });
      await writeCommunityClipboard();
    }
    async function loadPendingDrafts() {
      loadingDrafts.value = true;
      try {
        const res = await $fetch("/api/admin/hoxi/projects/devpulse-blog", {
          method: "POST",
          body: { action: "list_drafts" }
        });
        if (Array.isArray(res == null ? void 0 : res.drafts)) {
          pendingDrafts.value = res.drafts.filter((d) => d.locale !== "en");
        }
      } catch {
      } finally {
        loadingDrafts.value = false;
      }
    }
    async function generateLedgerDraft() {
      var _a;
      generating.value = true;
      try {
        const res = await $fetch("/api/admin/hoxi/projects/devpulse-blog", {
          method: "POST",
          body: {
            action: "generate",
            periodLabel: form.periodLabel,
            todayCommits: Number(form.todayCommits) || 0,
            activeReposCount: Math.max(1, Number(form.activeReposCount) || 1),
            dbTotalTokens: Number(form.dbTotalTokens) || 0,
            dbInputTokens: Number(form.dbInputTokens) || 0,
            dbCacheReadTokens: Number(form.dbCacheReadTokens) || 0,
            dbTotalCost: Number(form.dbTotalCost) || 0,
            headSubject: form.headSubject.trim() || void 0,
            publishImmediately: false
          }
        });
        showGenerator.value = false;
        await loadPendingDrafts();
        toast.add({
          title: `\u5B9E\u76D8\u8D26\u672C\u8349\u7A3F\u5DF2\u751F\u6210\uFF1A${(res == null ? void 0 : res.slug) || ""}`,
          description: "\u5DF2\u751F\u6210\u4E2D\u82F1\u53CC\u8BED\u7248\u672C\u4E0E\u4E13\u5C5E OG \u6570\u636E\u5C01\u9762\uFF0C\u786E\u8BA4\u65E0\u8BEF\u540E\u70B9\u51FB\u300C\u4E00\u952E\u516C\u5F00\u4E0A\u7EBF\u300D\u5373\u53EF\u53D1\u5E03",
          color: "success"
        });
      } catch (err) {
        toast.add({
          title: "\u751F\u6210\u5B9E\u76D8\u8D26\u672C\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        generating.value = false;
      }
    }
    async function approveDraftNow(draftSlug) {
      publishingSlug.value = draftSlug;
      try {
        await $fetch("/api/admin/hoxi/projects/devpulse-blog", {
          method: "POST",
          body: { action: "publish", slug: draftSlug }
        });
        await loadPendingDrafts();
        emit("published", draftSlug);
        toast.add({ title: `\u5DF2\u516C\u5F00\u4E0A\u7EBF\uFF1A/blog/${draftSlug}`, color: "success" });
      } catch (err) {
        toast.add({ title: "\u516C\u5F00\u5931\u8D25", description: (err == null ? void 0 : err.message) || String(err), color: "error" });
      } finally {
        publishingSlug.value = "";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$q;
      const _component_UIcon = _sfc_main$10;
      const _component_UButton = _sfc_main$X;
      const _component_UFormField = _sfc_main$F;
      const _component_UInput = _sfc_main$D;
      _push(ssrRenderComponent(_component_UCard, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"${_scopeId}><div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:pulse-duotone",
              class: "w-5 h-5 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>A\u8F68 \xB7 \u4E00\u4EBA\u516C\u53F8\u5B9E\u76D8\u7814\u53D1\u4E0E\u7B97\u529B\u8D26\u672C\uFF08\u8349\u7A3F\u9632\u76F2\u53D1 + 10 \u79D2\u4E00\u952E\u653E\u884C\uFF09</span></h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u652F\u6301\u901A\u8FC7 \`POST /api/hoxi/devpulse/publish\` \u81EA\u52A8\u63A8\u9001\u6216\u5728\u6B64\u624B\u52A8\u5F55\u5165\u5468\u671F\u8109\u51B2\uFF0C\u751F\u6210\u7B2C\u4E00\u4EBA\u79F0\u4E2D\u82F1\u53CC\u8BED\u5B9E\u76D8\u8D26\u672C\u8349\u7A3F\uFF0C\u5E76\u652F\u6301\u4E00\u952E\u590D\u5236\u53BB AI \u5473\u7684\u793E\u533A\u7EAF\u6587\u672C\u5E16\u3002 </p></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "xs",
              icon: "ph:arrows-clockwise",
              loading: loadingDrafts.value,
              onClick: loadPendingDrafts
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5237\u65B0\u5F85\u5BA1\u8349\u7A3F `);
                } else {
                  return [
                    createTextVNode(" \u5237\u65B0\u5F85\u5BA1\u8349\u7A3F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              variant: "subtle",
              size: "xs",
              icon: "ph:note-pencil",
              onClick: ($event) => showGenerator.value = !showGenerator.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(showGenerator.value ? "\u6536\u8D77\u5F55\u5165\u9762\u677F" : "\u65B0\u5EFA\u5B9E\u76D8\u8D26\u672C\u8349\u7A3F")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(showGenerator.value ? "\u6536\u8D77\u5F55\u5165\u9762\u677F" : "\u65B0\u5EFA\u5B9E\u76D8\u8D26\u672C\u8349\u7A3F"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:pulse-duotone",
                      class: "w-5 h-5 text-emerald-500"
                    }),
                    createVNode("span", null, "A\u8F68 \xB7 \u4E00\u4EBA\u516C\u53F8\u5B9E\u76D8\u7814\u53D1\u4E0E\u7B97\u529B\u8D26\u672C\uFF08\u8349\u7A3F\u9632\u76F2\u53D1 + 10 \u79D2\u4E00\u952E\u653E\u884C\uFF09")
                  ]),
                  createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u652F\u6301\u901A\u8FC7 `POST /api/hoxi/devpulse/publish` \u81EA\u52A8\u63A8\u9001\u6216\u5728\u6B64\u624B\u52A8\u5F55\u5165\u5468\u671F\u8109\u51B2\uFF0C\u751F\u6210\u7B2C\u4E00\u4EBA\u79F0\u4E2D\u82F1\u53CC\u8BED\u5B9E\u76D8\u8D26\u672C\u8349\u7A3F\uFF0C\u5E76\u652F\u6301\u4E00\u952E\u590D\u5236\u53BB AI \u5473\u7684\u793E\u533A\u7EAF\u6587\u672C\u5E16\u3002 ")
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    size: "xs",
                    icon: "ph:arrows-clockwise",
                    loading: loadingDrafts.value,
                    onClick: loadPendingDrafts
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5237\u65B0\u5F85\u5BA1\u8349\u7A3F ")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    variant: "subtle",
                    size: "xs",
                    icon: "ph:note-pencil",
                    onClick: ($event) => showGenerator.value = !showGenerator.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(showGenerator.value ? "\u6536\u8D77\u5F55\u5165\u9762\u677F" : "\u65B0\u5EFA\u5B9E\u76D8\u8D26\u672C\u8349\u7A3F"), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (showGenerator.value) {
              _push2(`<div class="space-y-3 pb-4 mb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="grid grid-cols-2 sm:grid-cols-6 gap-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u7EDF\u8BA1\u5468\u671F" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.periodLabel,
                      "onUpdate:modelValue": ($event) => form.periodLabel = $event,
                      placeholder: "2026-11-15",
                      size: "xs",
                      class: "font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.periodLabel,
                        "onUpdate:modelValue": ($event) => form.periodLabel = $event,
                        placeholder: "2026-11-15",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u63D0\u4EA4\u6B21\u6570" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.todayCommits,
                      "onUpdate:modelValue": ($event) => form.todayCommits = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      size: "xs",
                      class: "font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.todayCommits,
                        "onUpdate:modelValue": ($event) => form.todayCommits = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u6D3B\u8DC3\u4ED3\u5E93\u6570" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.activeReposCount,
                      "onUpdate:modelValue": ($event) => form.activeReposCount = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      size: "xs",
                      class: "font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.activeReposCount,
                        "onUpdate:modelValue": ($event) => form.activeReposCount = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u603B Token" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.dbTotalTokens,
                      "onUpdate:modelValue": ($event) => form.dbTotalTokens = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      size: "xs",
                      class: "font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.dbTotalTokens,
                        "onUpdate:modelValue": ($event) => form.dbTotalTokens = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u7F13\u5B58\u547D\u4E2D Token" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.dbCacheReadTokens,
                      "onUpdate:modelValue": ($event) => form.dbCacheReadTokens = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      size: "xs",
                      class: "font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.dbCacheReadTokens,
                        "onUpdate:modelValue": ($event) => form.dbCacheReadTokens = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u603B\u8D26\u5355 (USD)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: form.dbTotalCost,
                      "onUpdate:modelValue": ($event) => form.dbTotalCost = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      step: "0.01",
                      size: "xs",
                      class: "font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: form.dbTotalCost,
                        "onUpdate:modelValue": ($event) => form.dbTotalCost = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "0.01",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: form.headSubject,
                "onUpdate:modelValue": ($event) => form.headSubject = $event,
                placeholder: "\u672C\u671F\u6838\u5FC3\u7A81\u7834\u7B80\u8FF0\uFF08\u5982\uFF1A\u6253\u901A\u53CC\u8F68\u65E0\u503C\u5B88\u8D22\u52A1\u62C6\u89E3\u535A\u5BA2\u4E0E Prompt \u7F13\u5B58\u8DEF\u7531\u4F18\u5316\uFF09...",
                size: "xs",
                class: "flex-1"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                size: "xs",
                icon: "ph:copy-simple",
                onClick: copyFromForm
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u590D\u5236\u53BB AI \u5473\u793E\u533A\u5E16 `);
                  } else {
                    return [
                      createTextVNode(" \u590D\u5236\u53BB AI \u5473\u793E\u533A\u5E16 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                size: "xs",
                icon: "ph:sparkle",
                loading: generating.value,
                onClick: generateLedgerDraft
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u751F\u6210\u5F85\u5BA1\u8349\u7A3F `);
                  } else {
                    return [
                      createTextVNode(" \u751F\u6210\u5F85\u5BA1\u8349\u7A3F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (pendingDrafts.value.length > 0) {
              _push2(`<div class="space-y-2"${_scopeId}><div class="text-xs font-semibold text-amber-600 dark:text-amber-400"${_scopeId}> \u5F85\u653E\u884C\u65E0\u503C\u5B88\u8349\u7A3F\uFF08${ssrInterpolate(pendingDrafts.value.length)} \u7BC7 \xB7 \u6838\u5BF9\u6807\u9898\u65E0\u8BEF\u540E\u70B9\u51FB\u516C\u5F00\u4E0A\u7EBF\uFF09 </div><div class="divide-y divide-gray-100 dark:divide-gray-800 rounded-lg border border-gray-100 dark:border-gray-800"${_scopeId}><!--[-->`);
              ssrRenderList(pendingDrafts.value, (draft) => {
                _push2(`<div class="px-3 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"${_scopeId}><div class="min-w-0 flex-1 space-y-0.5"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="font-mono text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800"${_scopeId}>${ssrInterpolate(draft.key)}</span><span class="font-semibold text-gray-900 dark:text-white truncate"${_scopeId}>${ssrInterpolate(draft.title)}</span></div>`);
                if (draft.description) {
                  _push2(`<p class="text-[11px] text-gray-500 line-clamp-1"${_scopeId}>${ssrInterpolate(draft.description)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex items-center gap-2 shrink-0"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:copy-simple",
                  onClick: ($event) => copyFromDraft(draft)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u590D\u5236\u793E\u533A\u7EAF\u6587\u672C\u5E16 `);
                    } else {
                      return [
                        createTextVNode(" \u590D\u5236\u793E\u533A\u7EAF\u6587\u672C\u5E16 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "success",
                  variant: "subtle",
                  size: "xs",
                  icon: "ph:check-circle",
                  loading: publishingSlug.value === draft.slug,
                  onClick: ($event) => approveDraftNow(draft.slug)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u4E00\u952E\u516C\u5F00\u4E0A\u7EBF `);
                    } else {
                      return [
                        createTextVNode(" \u4E00\u952E\u516C\u5F00\u4E0A\u7EBF ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<div class="text-xs text-gray-400 py-1"${_scopeId}> \u5F53\u524D\u6682\u65E0\u5F85\u5BA1\u8349\u7A3F\uFF08B \u8F68\u9AD8\u5206\u7CBE\u54C1\u62C6\u89E3\u6587\u5DF2\u81EA\u52A8\u516C\u5F00\uFF0CA \u8F68\u5B9E\u76D8\u8D26\u672C\u63A8\u9001\u540E\u5C06\u5728\u6B64\u6392\u961F\u7B49\u5F85\u4E00\u952E\u653E\u884C\uFF09\u3002 </div>`);
            }
          } else {
            return [
              showGenerator.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-3 pb-4 mb-4 border-b border-gray-100 dark:border-gray-800"
              }, [
                createVNode("div", { class: "grid grid-cols-2 sm:grid-cols-6 gap-2.5" }, [
                  createVNode(_component_UFormField, { label: "\u7EDF\u8BA1\u5468\u671F" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.periodLabel,
                        "onUpdate:modelValue": ($event) => form.periodLabel = $event,
                        placeholder: "2026-11-15",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u63D0\u4EA4\u6B21\u6570" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.todayCommits,
                        "onUpdate:modelValue": ($event) => form.todayCommits = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u6D3B\u8DC3\u4ED3\u5E93\u6570" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.activeReposCount,
                        "onUpdate:modelValue": ($event) => form.activeReposCount = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u603B Token" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.dbTotalTokens,
                        "onUpdate:modelValue": ($event) => form.dbTotalTokens = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u7F13\u5B58\u547D\u4E2D Token" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.dbCacheReadTokens,
                        "onUpdate:modelValue": ($event) => form.dbCacheReadTokens = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u603B\u8D26\u5355 (USD)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.dbTotalCost,
                        "onUpdate:modelValue": ($event) => form.dbTotalCost = $event,
                        modelModifiers: { number: true },
                        type: "number",
                        step: "0.01",
                        size: "xs",
                        class: "font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5" }, [
                  createVNode(_component_UInput, {
                    modelValue: form.headSubject,
                    "onUpdate:modelValue": ($event) => form.headSubject = $event,
                    placeholder: "\u672C\u671F\u6838\u5FC3\u7A81\u7834\u7B80\u8FF0\uFF08\u5982\uFF1A\u6253\u901A\u53CC\u8F68\u65E0\u503C\u5B88\u8D22\u52A1\u62C6\u89E3\u535A\u5BA2\u4E0E Prompt \u7F13\u5B58\u8DEF\u7531\u4F18\u5316\uFF09...",
                    size: "xs",
                    class: "flex-1"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xs",
                    icon: "ph:copy-simple",
                    onClick: copyFromForm
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u590D\u5236\u53BB AI \u5473\u793E\u533A\u5E16 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "primary",
                    size: "xs",
                    icon: "ph:sparkle",
                    loading: generating.value,
                    onClick: generateLedgerDraft
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u751F\u6210\u5F85\u5BA1\u8349\u7A3F ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])) : createCommentVNode("", true),
              pendingDrafts.value.length > 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "space-y-2"
              }, [
                createVNode("div", { class: "text-xs font-semibold text-amber-600 dark:text-amber-400" }, " \u5F85\u653E\u884C\u65E0\u503C\u5B88\u8349\u7A3F\uFF08" + toDisplayString(pendingDrafts.value.length) + " \u7BC7 \xB7 \u6838\u5BF9\u6807\u9898\u65E0\u8BEF\u540E\u70B9\u51FB\u516C\u5F00\u4E0A\u7EBF\uFF09 ", 1),
                createVNode("div", { class: "divide-y divide-gray-100 dark:divide-gray-800 rounded-lg border border-gray-100 dark:border-gray-800" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(pendingDrafts.value, (draft) => {
                    return openBlock(), createBlock("div", {
                      key: draft.slug + "-" + draft.locale,
                      class: "px-3 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    }, [
                      createVNode("div", { class: "min-w-0 flex-1 space-y-0.5" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("span", { class: "font-mono text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800" }, toDisplayString(draft.key), 1),
                          createVNode("span", { class: "font-semibold text-gray-900 dark:text-white truncate" }, toDisplayString(draft.title), 1)
                        ]),
                        draft.description ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-[11px] text-gray-500 line-clamp-1"
                        }, toDisplayString(draft.description), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center gap-2 shrink-0" }, [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          size: "xs",
                          icon: "ph:copy-simple",
                          onClick: ($event) => copyFromDraft(draft)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u590D\u5236\u793E\u533A\u7EAF\u6587\u672C\u5E16 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          color: "success",
                          variant: "subtle",
                          size: "xs",
                          icon: "ph:check-circle",
                          loading: publishingSlug.value === draft.slug,
                          onClick: ($event) => approveDraftNow(draft.slug)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4E00\u952E\u516C\u5F00\u4E0A\u7EBF ")
                          ]),
                          _: 1
                        }, 8, ["loading", "onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "text-xs text-gray-400 py-1"
              }, " \u5F53\u524D\u6682\u65E0\u5F85\u5BA1\u8349\u7A3F\uFF08B \u8F68\u9AD8\u5206\u7CBE\u54C1\u62C6\u89E3\u6587\u5DF2\u81EA\u52A8\u516C\u5F00\uFF0CA \u8F68\u5B9E\u76D8\u8D26\u672C\u63A8\u9001\u540E\u5C06\u5728\u6B64\u6392\u961F\u7B49\u5F85\u4E00\u952E\u653E\u884C\uFF09\u3002 "))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/components/HoxiDevPulseLedgerCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const list = ref([]);
    const saving = ref(false);
    const autopilotRunning = ref(false);
    const autopilotUrl = ref("");
    const autopilotCustomName = ref("");
    const autopilotCategory = ref("cross-border");
    const errorMsg = ref("");
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const categoryMap = {
      "cross-border": "\u5916\u8D38\u4E0E\u8DE8\u5883",
      "saas": "\u5546\u4E1A\u53D8\u73B0 SaaS",
      "ai-infra": "AI \u9009\u578B\u4E0E\u6D41\u91CF",
      "gateway": "\u7B97\u529B\u57FA\u5EFA",
      "devtools": "\u5F00\u53D1\u6548\u7387\u4E0E\u5E95\u5EA7",
      "open-source": "\u5F00\u6E90\u751F\u6001",
      "other": "\u5176\u4ED6\u9879\u76EE"
    };
    const categoryOptions = [
      { label: "\u5168\u90E8\u5206\u7C7B", value: "all" },
      { label: "\u5916\u8D38\u4E0E\u8DE8\u5883", value: "cross-border" },
      { label: "\u5546\u4E1A\u53D8\u73B0 SaaS", value: "saas" },
      { label: "AI \u9009\u578B\u4E0E\u6D41\u91CF", value: "ai-infra" },
      { label: "\u7B97\u529B\u57FA\u5EFA", value: "gateway" },
      { label: "\u5F00\u53D1\u6548\u7387\u4E0E\u5E95\u5EA7", value: "devtools" },
      { label: "\u5F00\u6E90\u751F\u6001", value: "open-source" }
    ];
    const categoryFormOptions = [
      { label: "\u5916\u8D38\u4E0E\u8DE8\u5883", value: "cross-border" },
      { label: "\u5546\u4E1A\u53D8\u73B0 SaaS", value: "saas" },
      { label: "AI \u9009\u578B\u4E0E\u6D41\u91CF", value: "ai-infra" },
      { label: "\u7B97\u529B\u57FA\u5EFA", value: "gateway" },
      { label: "\u5F00\u53D1\u6548\u7387\u4E0E\u5E95\u5EA7", value: "devtools" },
      { label: "\u5F00\u6E90\u751F\u6001", value: "open-source" },
      { label: "\u5176\u4ED6\u9879\u76EE", value: "other" }
    ];
    const statusOptions = [
      { label: "\u5546\u4E1A\u5316\u8FD0\u884C\u4E2D (active)", value: "active" },
      { label: "\u516C\u6D4B/\u5185\u6D4B\u4E2D (beta)", value: "beta" },
      { label: "\u5F00\u6E90\u514D\u8D39 (open-source)", value: "open-source" },
      { label: "\u5B75\u5316\u63A2\u7D22\u4E2D (incubating)", value: "incubating" }
    ];
    const badgeToneOptions = [
      { label: "\u6B63\u9762\u63A8\u8350 (\u7EFF/\u6210\u529F)", value: "positive" },
      { label: "\u4FE1\u606F\u63D0\u793A (\u84DD)", value: "info" },
      { label: "\u8B66\u793A/\u6CE8\u610F (\u6A59/\u9EC4)", value: "warning" },
      { label: "\u4E2D\u6027\u7070", value: "neutral" }
    ];
    const formatStatus = (st) => {
      switch (st) {
        case "active":
          return "\u5546\u4E1A\u5316\u8FD0\u884C";
        case "beta":
          return "\u516C\u6D4B\u4E2D";
        case "open-source":
          return "\u5F00\u6E90\u514D\u8D39";
        case "incubating":
          return "\u5B75\u5316\u63A2\u7D22";
        default:
          return st;
      }
    };
    const loadData = async () => {
      try {
        const data = await $fetch("/api/admin/hoxi/projects");
        if (Array.isArray(data)) {
          list.value = data;
          return;
        }
      } catch (err) {
        errorMsg.value = (err == null ? void 0 : err.message) || "\u52A0\u8F7D\u5B9E\u6218\u9879\u76EE\u6570\u636E\u8868\u5931\u8D25";
      }
      list.value = defaultHoxiProjects.map((p) => ({ ...p }));
    };
    const runBatchAutopilot = async () => {
      var _a;
      autopilotRunning.value = true;
      errorMsg.value = "";
      try {
        const res = await $fetch("/api/admin/hoxi/projects/autopilot", {
          method: "POST",
          body: {}
        });
        await loadData();
        toast.add({
          title: `\u5DE1\u68C0\u540C\u6B65\u5B8C\u6210\uFF1A\u5171\u540C\u6B65 ${(res == null ? void 0 : res.syncedProjects) || 0} \u4E2A\u9879\u76EE\uFF0C\u751F\u6210/\u5BF9\u9F50\u62C6\u89E3\u535A\u5BA2 ${(res == null ? void 0 : res.syncedBlogs) || 0} \u7BC7`,
          color: "success"
        });
      } catch (err) {
        toast.add({
          title: "\u65E0\u4EBA\u503C\u5B88\u540C\u6B65\u5931\u8D25",
          description: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        autopilotRunning.value = false;
      }
    };
    const runSingleUrlAutopilot = async () => {
      var _a, _b;
      const url = autopilotUrl.value.trim();
      if (!url || !/^https?:\/\//i.test(url)) {
        toast.add({ title: "\u8BF7\u8F93\u5165\u4EE5 http:// \u6216 https:// \u5F00\u5934\u7684\u9879\u76EE\u6216 Toolify \u94FE\u63A5", color: "warning" });
        return;
      }
      autopilotRunning.value = true;
      errorMsg.value = "";
      try {
        const res = await $fetch("/api/admin/hoxi/projects/autopilot", {
          method: "POST",
          body: {
            targetUrl: url,
            name: autopilotCustomName.value.trim() || void 0,
            category: autopilotCategory.value
          }
        });
        autopilotUrl.value = "";
        autopilotCustomName.value = "";
        await loadData();
        toast.add({
          title: `AI \u62C6\u89E3\u5165\u5E93\u6210\u529F\uFF1A${((_a = res == null ? void 0 : res.ingestedProject) == null ? void 0 : _a.name) || url}`,
          description: "\u5DF2\u81EA\u52A8\u751F\u6210\u4E94\u7EF4\u5339\u914D\u753B\u50CF\u30015 \u8BED\u79CD\u5B57\u5178\u5E76\u53D1\u5E03\u6DF1\u5EA6\u62C6\u89E3\u535A\u5BA2",
          color: "success"
        });
      } catch (err) {
        toast.add({
          title: "AI \u91C7\u96C6\u62C6\u89E3\u5931\u8D25",
          description: ((_b = err == null ? void 0 : err.data) == null ? void 0 : _b.message) || (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        autopilotRunning.value = false;
      }
    };
    const copyProjectCommunityPost = async (item) => {
      return;
    };
    const isFiltered = computed(() => Boolean(searchQuery.value.trim()) || selectedCategory.value !== "all");
    const filteredList = computed(() => {
      let result = list.value;
      if (selectedCategory.value !== "all") {
        result = result.filter((item) => item.category === selectedCategory.value);
      }
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.trim().toLowerCase();
        result = result.filter(
          (item) => item.name && item.name.toLowerCase().includes(q) || item.id && item.id.toLowerCase().includes(q) || item.tagline && item.tagline.toLowerCase().includes(q) || item.description && item.description.toLowerCase().includes(q) || item.modelUsed && item.modelUsed.toLowerCase().includes(q) || Array.isArray(item.techStack) && item.techStack.some((t) => t.toLowerCase().includes(q)) || item.author && item.author.toLowerCase().includes(q)
        );
      }
      return result;
    });
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const techStackInput = ref("");
    const highlightsInput = ref("");
    const openAddModal = () => {
      isEditingNew.value = true;
      editingItem.value = {
        id: `project-${Date.now()}`,
        name: "",
        tagline: "",
        description: "",
        category: "cross-border",
        categoryLabel: "\u5916\u8D38\u4E0E\u8DE8\u5883",
        status: "active",
        statusLabel: "\u5546\u4E1A\u5316\u8FD0\u884C",
        modelUsed: "",
        monthlyCost: "",
        techStack: [],
        author: "\u53EF\u4E50 (Coller)",
        authorUrl: "",
        badge: "\u7AD9\u957F\u7CBE\u9009",
        badgeTone: "positive",
        icon: "ph:rocket-launch-bold",
        url: "",
        githubUrl: "",
        storyUrl: "",
        highlights: [],
        order: (list.value.length + 1) * 10,
        hidden: false
      };
      techStackInput.value = "";
      highlightsInput.value = "";
      isEditModalOpen.value = true;
    };
    const openEditModal = (item) => {
      isEditingNew.value = false;
      editingItem.value = JSON.parse(JSON.stringify(item));
      techStackInput.value = Array.isArray(item.techStack) ? item.techStack.join(", ") : "";
      highlightsInput.value = Array.isArray(item.highlights) ? item.highlights.join("\n") : "";
      isEditModalOpen.value = true;
    };
    const saveEditItem = async () => {
      if (!editingItem.value) return;
      if (!editingItem.value.id.trim() || !editingItem.value.name.trim() || !editingItem.value.url.trim()) {
        toast.add({ title: "\u8BF7\u586B\u5199\u5B8C\u6574\u7684\u9879\u76EE ID\u3001\u540D\u79F0\u4E0E\u5B98\u7F51\u94FE\u63A5", color: "warning" });
        return;
      }
      editingItem.value.categoryLabel = categoryMap[editingItem.value.category] || "\u5176\u4ED6\u9879\u76EE";
      editingItem.value.statusLabel = formatStatus(editingItem.value.status);
      editingItem.value.techStack = techStackInput.value.split(/[,，]/).map((s) => s.trim()).filter(Boolean);
      editingItem.value.highlights = highlightsInput.value.split("\n").map((s) => s.trim()).filter(Boolean);
      if (isEditingNew.value) {
        list.value.unshift(editingItem.value);
      } else {
        const idx = list.value.findIndex((i) => {
          var _a;
          return i.id === ((_a = editingItem.value) == null ? void 0 : _a.id);
        });
        if (idx !== -1) {
          list.value[idx] = editingItem.value;
        }
      }
      isEditModalOpen.value = false;
      await save();
    };
    const toggleHidden = async (item) => {
      item.hidden = !item.hidden;
      await save();
    };
    const isDeleteModalOpen = ref(false);
    const itemToDelete = ref(null);
    const openDeleteModal = (item) => {
      itemToDelete.value = item;
      isDeleteModalOpen.value = true;
    };
    const confirmDelete = async () => {
      if (!itemToDelete.value) return;
      const id = itemToDelete.value.id;
      list.value = list.value.filter((i) => i.id !== id);
      isDeleteModalOpen.value = false;
      itemToDelete.value = null;
      await save();
    };
    const moveUp = (index) => {
      if (isFiltered.value || index <= 0) return;
      const temp = list.value[index];
      list.value[index] = list.value[index - 1];
      list.value[index - 1] = temp;
      list.value.forEach((item, idx) => {
        item.order = (idx + 1) * 10;
      });
    };
    const moveDown = (index) => {
      if (isFiltered.value || index >= list.value.length - 1) return;
      const temp = list.value[index];
      list.value[index] = list.value[index + 1];
      list.value[index + 1] = temp;
      list.value.forEach((item, idx) => {
        item.order = (idx + 1) * 10;
      });
    };
    const resetToBaseline = () => {
      list.value = defaultHoxiProjects.map((p) => ({ ...p }));
      toast.add({ title: "\u5DF2\u6062\u590D\u9ED8\u8BA4\u63A8\u8350\u9879\u76EE\uFF0C\u70B9\u51FB\u4FDD\u5B58\u540E\u5199\u5165\u6570\u636E\u5E93", color: "info" });
    };
    const save = async () => {
      saving.value = true;
      try {
        const sanitized = list.value.map((item, idx) => ({
          ...item,
          order: Number(item.order) || (idx + 1) * 10,
          hidden: Boolean(item.hidden),
          techStack: Array.isArray(item.techStack) ? item.techStack : [],
          highlights: Array.isArray(item.highlights) ? item.highlights : []
        }));
        await $fetch("/api/admin/hoxi/projects", {
          method: "POST",
          body: {
            projects: sanitized
          }
        });
        toast.add({ title: "\u5B9E\u6218\u9879\u76EE\u6570\u636E\u8868\u5DF2\u66F4\u65B0\uFF0C\u524D\u53F0\u5373\u65F6\u751F\u6548", color: "success" });
      } catch (error) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: error instanceof Error ? error.message : String(error),
          color: "error"
        });
      } finally {
        saving.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UAlert = _sfc_main$z;
      const _component_UCard = _sfc_main$q;
      const _component_UIcon = _sfc_main$10;
      const _component_UButton = _sfc_main$X;
      const _component_UInput = _sfc_main$D;
      const _component_USelect = _sfc_main$u;
      const _component_UBadge = _sfc_main$R;
      const _component_UModal = _sfc_main$L;
      const _component_UFormField = _sfc_main$F;
      const _component_UTextarea = _sfc_main$E;
      const _component_UCheckbox = _sfc_main$m;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (errorMsg.value) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: "\u8BF7\u6C42\u5F02\u5E38",
          description: errorMsg.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3"${_scopeId}><div${_scopeId}><h3 class="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:robot-duotone",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u65E0\u4EBA\u503C\u5B88 AI \u9879\u76EE\u6293\u53D6 \xB7 \u4E94\u7EF4\u6253\u5206 \xB7 \u4E94\u8BED\u79CD\u62C6\u89E3\u5F15\u64CE (Toolify / \u5916\u8D38\u8DE8\u5883 / \u72EC\u7ACB\u5F00\u53D1)</span></h3><p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u6BCF\u65E5\u5317\u4EAC\u65F6\u95F4 02:00 \u81EA\u52A8\u5DE1\u68C0\u540C\u6B65\u3002\u652F\u6301\u8F93\u5165\u4EFB\u610F Toolify \u5DE5\u5177\u9875\u6216\u4EA7\u54C1\u5B98\u7F51 URL\uFF0C\u4E00\u952E\u5B8C\u6210\u300C\u53D8\u73B0\u903B\u8F91\u62C6\u89E3 + \u4E94\u89D2\u8272/\u4E94\u7EF4\u6253\u5206 + \u82F1/\u4E2D/\u7E41/\u65E5/\u97E9 5 \u8BED\u79CD\u7FFB\u8BD1 + \u81EA\u52A8\u53D1\u5E03\u62C6\u89E3\u535A\u5BA2\u300D\u3002 </p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "subtle",
              size: "xs",
              icon: "ph:arrows-clockwise",
              loading: autopilotRunning.value,
              onClick: runBatchAutopilot
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4E00\u952E\u5DE1\u68C0\u540C\u6B65\u5168\u5E93 &amp; \u62C6\u89E3\u535A\u5BA2 `);
                } else {
                  return [
                    createTextVNode(" \u4E00\u952E\u5DE1\u68C0\u540C\u6B65\u5168\u5E93 & \u62C6\u89E3\u535A\u5BA2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3" }, [
                createVNode("div", null, [
                  createVNode("h3", { class: "text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:robot-duotone",
                      class: "w-5 h-5 text-blue-500"
                    }),
                    createVNode("span", null, "\u65E0\u4EBA\u503C\u5B88 AI \u9879\u76EE\u6293\u53D6 \xB7 \u4E94\u7EF4\u6253\u5206 \xB7 \u4E94\u8BED\u79CD\u62C6\u89E3\u5F15\u64CE (Toolify / \u5916\u8D38\u8DE8\u5883 / \u72EC\u7ACB\u5F00\u53D1)")
                  ]),
                  createVNode("p", { class: "mt-0.5 text-xs text-gray-500 dark:text-gray-400" }, " \u6BCF\u65E5\u5317\u4EAC\u65F6\u95F4 02:00 \u81EA\u52A8\u5DE1\u68C0\u540C\u6B65\u3002\u652F\u6301\u8F93\u5165\u4EFB\u610F Toolify \u5DE5\u5177\u9875\u6216\u4EA7\u54C1\u5B98\u7F51 URL\uFF0C\u4E00\u952E\u5B8C\u6210\u300C\u53D8\u73B0\u903B\u8F91\u62C6\u89E3 + \u4E94\u89D2\u8272/\u4E94\u7EF4\u6253\u5206 + \u82F1/\u4E2D/\u7E41/\u65E5/\u97E9 5 \u8BED\u79CD\u7FFB\u8BD1 + \u81EA\u52A8\u53D1\u5E03\u62C6\u89E3\u535A\u5BA2\u300D\u3002 ")
                ]),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "subtle",
                  size: "xs",
                  icon: "ph:arrows-clockwise",
                  loading: autopilotRunning.value,
                  onClick: runBatchAutopilot
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4E00\u952E\u5DE1\u68C0\u540C\u6B65\u5168\u5E93 & \u62C6\u89E3\u535A\u5BA2 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: autopilotUrl.value,
              "onUpdate:modelValue": ($event) => autopilotUrl.value = $event,
              icon: "ph:link",
              placeholder: "\u8F93\u5165 Toolify \u9879\u76EE\u5730\u5740 (\u5982 https://www.toolify.ai/tool/...) \u6216\u4EFB\u610F\u6D77\u5916 SaaS / \u8DE8\u5883\u5DE5\u5177\u5B98\u7F51...",
              size: "sm",
              class: "flex-1 font-mono"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: autopilotCustomName.value,
              "onUpdate:modelValue": ($event) => autopilotCustomName.value = $event,
              placeholder: "\u53EF\u9009\uFF1A\u6307\u5B9A\u9879\u76EE\u540D\u79F0",
              size: "sm",
              class: "w-full sm:w-44"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: autopilotCategory.value,
              "onUpdate:modelValue": ($event) => autopilotCategory.value = $event,
              items: categoryFormOptions,
              size: "sm",
              class: "w-full sm:w-40"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              size: "sm",
              icon: "ph:magic-wand",
              loading: autopilotRunning.value,
              onClick: runSingleUrlAutopilot
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` AI \u6293\u53D6\u62C6\u89E3\u5165\u5E93 `);
                } else {
                  return [
                    createTextVNode(" AI \u6293\u53D6\u62C6\u89E3\u5165\u5E93 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5" }, [
                createVNode(_component_UInput, {
                  modelValue: autopilotUrl.value,
                  "onUpdate:modelValue": ($event) => autopilotUrl.value = $event,
                  icon: "ph:link",
                  placeholder: "\u8F93\u5165 Toolify \u9879\u76EE\u5730\u5740 (\u5982 https://www.toolify.ai/tool/...) \u6216\u4EFB\u610F\u6D77\u5916 SaaS / \u8DE8\u5883\u5DE5\u5177\u5B98\u7F51...",
                  size: "sm",
                  class: "flex-1 font-mono"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_UInput, {
                  modelValue: autopilotCustomName.value,
                  "onUpdate:modelValue": ($event) => autopilotCustomName.value = $event,
                  placeholder: "\u53EF\u9009\uFF1A\u6307\u5B9A\u9879\u76EE\u540D\u79F0",
                  size: "sm",
                  class: "w-full sm:w-44"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_USelect, {
                  modelValue: autopilotCategory.value,
                  "onUpdate:modelValue": ($event) => autopilotCategory.value = $event,
                  items: categoryFormOptions,
                  size: "sm",
                  class: "w-full sm:w-40"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  size: "sm",
                  icon: "ph:magic-wand",
                  loading: autopilotRunning.value,
                  onClick: runSingleUrlAutopilot
                }, {
                  default: withCtx(() => [
                    createTextVNode(" AI \u6293\u53D6\u62C6\u89E3\u5165\u5E93 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { onPublished: loadData }, null, _parent));
      _push(ssrRenderComponent(_component_UCard, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div${_scopeId}><h2 class="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:rocket-launch",
              class: "w-5 h-5 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u4E00\u4EBA\u516C\u53F8\u9879\u76EE\u62C6\u89E3\u5E93\u7BA1\u7406</span></h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u81F3 \`hoxi_projects\` \u6570\u636E\u8868\u3002\u7BA1\u7406\u9879\u76EE\u5E95\u5C42\u903B\u8F91\u3001\u53D8\u73B0\u4E0E\u7B97\u529B\u8D26\u672C\u3001\u6240\u9700\u80FD\u529B\u4E0E\u88C5\u5907\u6808\u3001\u4E94\u7EF4\u5339\u914D\u753B\u50CF\u3001\u4E94\u8BED\u79CD\u5B57\u5178\u53CA\u6DF1\u5EA6\u62C6\u89E3\u535A\u5BA2\u94FE\u63A5\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:arrow-counter-clockwise",
              size: "sm",
              onClick: resetToBaseline
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6062\u590D\u9ED8\u8BA4\u63A8\u8350 `);
                } else {
                  return [
                    createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u63A8\u8350 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              icon: "ph:plus",
              size: "sm",
              onClick: openAddModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u65B0\u589E\u9879\u76EE `);
                } else {
                  return [
                    createTextVNode(" \u65B0\u589E\u9879\u76EE ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: saving.value,
              icon: "ph:floppy-disk",
              size: "sm",
              onClick: save
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:rocket-launch",
                      class: "w-5 h-5 text-blue-500"
                    }),
                    createVNode("span", null, "\u4E00\u4EBA\u516C\u53F8\u9879\u76EE\u62C6\u89E3\u5E93\u7BA1\u7406")
                  ]),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, " \u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u81F3 `hoxi_projects` \u6570\u636E\u8868\u3002\u7BA1\u7406\u9879\u76EE\u5E95\u5C42\u903B\u8F91\u3001\u53D8\u73B0\u4E0E\u7B97\u529B\u8D26\u672C\u3001\u6240\u9700\u80FD\u529B\u4E0E\u88C5\u5907\u6808\u3001\u4E94\u7EF4\u5339\u914D\u753B\u50CF\u3001\u4E94\u8BED\u79CD\u5B57\u5178\u53CA\u6DF1\u5EA6\u62C6\u89E3\u535A\u5BA2\u94FE\u63A5\u3002 ")
                ]),
                createVNode("div", { class: "flex flex-wrap items-center gap-2.5" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:arrow-counter-clockwise",
                    size: "sm",
                    onClick: resetToBaseline
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6062\u590D\u9ED8\u8BA4\u63A8\u8350 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    icon: "ph:plus",
                    size: "sm",
                    onClick: openAddModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u65B0\u589E\u9879\u76EE ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UButton, {
                    color: "primary",
                    loading: saving.value,
                    icon: "ph:floppy-disk",
                    size: "sm",
                    onClick: save
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FDD\u5B58\u81F3\u6570\u636E\u5E93 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:divide-gray-800"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              icon: "ph:magnifying-glass",
              placeholder: "\u6309\u9879\u76EE\u540D / \u63CF\u8FF0 / \u6838\u5FC3\u6A21\u578B / \u6280\u672F\u6808\u641C\u7D22...",
              size: "sm",
              class: "w-72"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedCategory.value,
              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
              items: categoryOptions,
              size: "sm",
              class: "w-44"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xs text-gray-500"${_scopeId}> \u5171 ${ssrInterpolate(list.value.length)} \u4E2A\u9879\u76EE \xB7 \u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u4E2A\uFF08\u5168\u91CF\u652F\u6301 EN / \u7B80 / \u7E41 / JA / KO \u4E94\u8BED\u79CD\u4E0E\u4E94\u89D2\u8272\u5339\u914D\uFF09 </div></div><div class="overflow-x-auto"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="w-12 px-3 py-3 text-center"${_scopeId}>\u6392\u5E8F</th><th class="px-3 py-3"${_scopeId}>\u9879\u76EE\u540D\u79F0 / \u5B9A\u4F4D</th><th class="px-3 py-3"${_scopeId}>\u5206\u7C7B</th><th class="px-3 py-3"${_scopeId}>\u4E94\u89D2\u8272\u5951\u5408\u5206</th><th class="px-3 py-3"${_scopeId}>\u6838\u5FC3\u6A21\u578B &amp; \u8D26\u672C</th><th class="px-3 py-3"${_scopeId}>\u6765\u6E90 / \u5FBD\u7AE0</th><th class="px-3 py-3"${_scopeId}>\u94FE\u63A5 &amp; \u62C6\u89E3\u535A\u5BA2</th><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u4E0A\u67B6</th><th class="w-28 px-3 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item, index) => {
              var _a2, _b2;
              _push2(`<tr class="${ssrRenderClass([{ "opacity-50": item.hidden }, "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="px-3 py-3 text-center font-mono"${_scopeId}><div class="flex items-center justify-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:arrow-up",
                disabled: isFiltered.value || index === 0,
                onClick: ($event) => moveUp(index)
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-gray-400 text-[11px]"${_scopeId}>${ssrInterpolate((_a2 = item.order) != null ? _a2 : index + 1)}</span>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:arrow-down",
                disabled: isFiltered.value || index === filteredList.value.length - 1,
                onClick: ($event) => moveDown(index)
              }, null, _parent2, _scopeId));
              _push2(`</div></td><td class="px-3 py-3"${_scopeId}><div class="flex items-start gap-2.5"${_scopeId}><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 mt-0.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.icon || "ph:rocket-launch-bold",
                class: "w-4 h-4 text-blue-500"
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><div class="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.name)}</span></div><div class="text-[11px] text-gray-500 line-clamp-1 max-w-xs"${_scopeId}>${ssrInterpolate(item.tagline)}</div><div class="text-[10px] text-gray-400 font-mono mt-0.5"${_scopeId}>${ssrInterpolate(item.id)}</div></div></div></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.categoryLabel || item.category)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.categoryLabel || item.category), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-3 whitespace-nowrap font-mono text-[11px]"${_scopeId}>`);
              if ((_b2 = item.matchProfile) == null ? void 0 : _b2.roles) {
                _push2(`<div class="space-y-0.5 text-gray-600 dark:text-gray-300"${_scopeId}><div${_scopeId}>\u5916\u8D38 ${ssrInterpolate(item.matchProfile.roles.trade)} \xB7 \u7814\u53D1 ${ssrInterpolate(item.matchProfile.roles.developer)}</div><div${_scopeId}>\u4EA7\u54C1 ${ssrInterpolate(item.matchProfile.roles.product)} \xB7 \u8FD0\u8425 ${ssrInterpolate(item.matchProfile.roles.growth)}</div></div>`);
              } else {
                _push2(`<span class="text-gray-400"${_scopeId}>\u81EA\u52A8\u63A8\u5BFC</span>`);
              }
              _push2(`</td><td class="px-3 py-3"${_scopeId}><div class="space-y-0.5"${_scopeId}>`);
              if (item.modelUsed) {
                _push2(`<div class="text-gray-800 dark:text-gray-200 font-medium truncate max-w-xs"${_scopeId}> \u{1F9E0} ${ssrInterpolate(item.modelUsed)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.monthlyCost) {
                _push2(`<div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono"${_scopeId}> \u{1F4B0} ${ssrInterpolate(item.monthlyCost)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!item.modelUsed && !item.monthlyCost) {
                _push2(`<div class="text-gray-400"${_scopeId}>\u2014</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}><div class="space-y-1"${_scopeId}><div class="text-gray-700 dark:text-gray-300 font-medium"${_scopeId}>${ssrInterpolate(item.author || "\u53EF\u4E50 (Coller)")}</div>`);
              if (item.badge) {
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: item.badgeTone === "positive" ? "success" : item.badgeTone === "warning" ? "warning" : "info",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.badge)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.badge), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="px-3 py-3 max-w-xs"${_scopeId}><div class="space-y-1"${_scopeId}>`);
              if (item.url) {
                _push2(`<a${ssrRenderAttr("href", item.url)} target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 truncate"${_scopeId}><span class="truncate"${_scopeId}>${ssrInterpolate(item.url)}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.storyUrl) {
                _push2(`<a${ssrRenderAttr("href", item.storyUrl)} target="_blank" rel="noopener" class="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 text-[11px]"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:book-open-text",
                  class: "w-3 h-3 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(item.storyUrl)}</span></a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: item.hidden ? "neutral" : "success",
                variant: "subtle",
                size: "xs",
                onClick: ($event) => toggleHidden(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.hidden ? "\u5DF2\u4E0B\u67B6" : "\u4E0A\u67B6\u4E2D")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u4E0B\u67B6" : "\u4E0A\u67B6\u4E2D"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-3 text-right whitespace-nowrap"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:copy-simple",
                title: "\u590D\u5236\u53BB AI \u5473\u793E\u533A\u7EAF\u6587\u672C\u5E16",
                onClick: ($event) => copyProjectCommunityPost()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u793E\u533A\u5E16`);
                  } else {
                    return [
                      createTextVNode("\u793E\u533A\u5E16")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:pencil-simple",
                onClick: ($event) => openEditModal(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u7F16\u8F91`);
                  } else {
                    return [
                      createTextVNode("\u7F16\u8F91")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                onClick: ($event) => openDeleteModal(item)
              }, null, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (filteredList.value.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="9" class="px-4 py-8 text-center text-gray-400"${_scopeId}> \u6682\u672A\u627E\u5230\u5339\u914D\u7684\u9879\u76EE\u6570\u636E </td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:divide-gray-800" }, [
                createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                  createVNode(_component_UInput, {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    icon: "ph:magnifying-glass",
                    placeholder: "\u6309\u9879\u76EE\u540D / \u63CF\u8FF0 / \u6838\u5FC3\u6A21\u578B / \u6280\u672F\u6808\u641C\u7D22...",
                    size: "sm",
                    class: "w-72"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelect, {
                    modelValue: selectedCategory.value,
                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                    items: categoryOptions,
                    size: "sm",
                    class: "w-44"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "text-xs text-gray-500" }, " \u5171 " + toDisplayString(list.value.length) + " \u4E2A\u9879\u76EE \xB7 \u663E\u793A " + toDisplayString(filteredList.value.length) + " \u4E2A\uFF08\u5168\u91CF\u652F\u6301 EN / \u7B80 / \u7E41 / JA / KO \u4E94\u8BED\u79CD\u4E0E\u4E94\u89D2\u8272\u5339\u914D\uFF09 ", 1)
              ]),
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "w-12 px-3 py-3 text-center" }, "\u6392\u5E8F"),
                      createVNode("th", { class: "px-3 py-3" }, "\u9879\u76EE\u540D\u79F0 / \u5B9A\u4F4D"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5206\u7C7B"),
                      createVNode("th", { class: "px-3 py-3" }, "\u4E94\u89D2\u8272\u5951\u5408\u5206"),
                      createVNode("th", { class: "px-3 py-3" }, "\u6838\u5FC3\u6A21\u578B & \u8D26\u672C"),
                      createVNode("th", { class: "px-3 py-3" }, "\u6765\u6E90 / \u5FBD\u7AE0"),
                      createVNode("th", { class: "px-3 py-3" }, "\u94FE\u63A5 & \u62C6\u89E3\u535A\u5BA2"),
                      createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u4E0A\u67B6"),
                      createVNode("th", { class: "w-28 px-3 py-3 text-right" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item, index) => {
                      var _a2, _b2;
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        class: ["hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors", { "opacity-50": item.hidden }]
                      }, [
                        createVNode("td", { class: "px-3 py-3 text-center font-mono" }, [
                          createVNode("div", { class: "flex items-center justify-center gap-1" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:arrow-up",
                              disabled: isFiltered.value || index === 0,
                              onClick: ($event) => moveUp(index)
                            }, null, 8, ["disabled", "onClick"]),
                            createVNode("span", { class: "text-gray-400 text-[11px]" }, toDisplayString((_a2 = item.order) != null ? _a2 : index + 1), 1),
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:arrow-down",
                              disabled: isFiltered.value || index === filteredList.value.length - 1,
                              onClick: ($event) => moveDown(index)
                            }, null, 8, ["disabled", "onClick"])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "flex items-start gap-2.5" }, [
                            createVNode("span", { class: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 mt-0.5" }, [
                              createVNode(_component_UIcon, {
                                name: item.icon || "ph:rocket-launch-bold",
                                class: "w-4 h-4 text-blue-500"
                              }, null, 8, ["name"])
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold text-gray-900 dark:text-white flex items-center gap-1.5" }, [
                                createVNode("span", null, toDisplayString(item.name), 1)
                              ]),
                              createVNode("div", { class: "text-[11px] text-gray-500 line-clamp-1 max-w-xs" }, toDisplayString(item.tagline), 1),
                              createVNode("div", { class: "text-[10px] text-gray-400 font-mono mt-0.5" }, toDisplayString(item.id), 1)
                            ])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
                          createVNode(_component_UBadge, {
                            color: "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.categoryLabel || item.category), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap font-mono text-[11px]" }, [
                          ((_b2 = item.matchProfile) == null ? void 0 : _b2.roles) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-0.5 text-gray-600 dark:text-gray-300"
                          }, [
                            createVNode("div", null, "\u5916\u8D38 " + toDisplayString(item.matchProfile.roles.trade) + " \xB7 \u7814\u53D1 " + toDisplayString(item.matchProfile.roles.developer), 1),
                            createVNode("div", null, "\u4EA7\u54C1 " + toDisplayString(item.matchProfile.roles.product) + " \xB7 \u8FD0\u8425 " + toDisplayString(item.matchProfile.roles.growth), 1)
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-gray-400"
                          }, "\u81EA\u52A8\u63A8\u5BFC"))
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "space-y-0.5" }, [
                            item.modelUsed ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-gray-800 dark:text-gray-200 font-medium truncate max-w-xs"
                            }, " \u{1F9E0} " + toDisplayString(item.modelUsed), 1)) : createCommentVNode("", true),
                            item.monthlyCost ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-[11px] text-emerald-600 dark:text-emerald-400 font-mono"
                            }, " \u{1F4B0} " + toDisplayString(item.monthlyCost), 1)) : createCommentVNode("", true),
                            !item.modelUsed && !item.monthlyCost ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "text-gray-400"
                            }, "\u2014")) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            createVNode("div", { class: "text-gray-700 dark:text-gray-300 font-medium" }, toDisplayString(item.author || "\u53EF\u4E50 (Coller)"), 1),
                            item.badge ? (openBlock(), createBlock(_component_UBadge, {
                              key: 0,
                              color: item.badgeTone === "positive" ? "success" : item.badgeTone === "warning" ? "warning" : "info",
                              variant: "subtle",
                              size: "xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.badge), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 max-w-xs" }, [
                          createVNode("div", { class: "space-y-1" }, [
                            item.url ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: item.url,
                              target: "_blank",
                              rel: "noopener",
                              class: "text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 truncate"
                            }, [
                              createVNode("span", { class: "truncate" }, toDisplayString(item.url), 1),
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-square-out",
                                class: "w-3 h-3 shrink-0"
                              })
                            ], 8, ["href"])) : createCommentVNode("", true),
                            item.storyUrl ? (openBlock(), createBlock("a", {
                              key: 1,
                              href: item.storyUrl,
                              target: "_blank",
                              rel: "noopener",
                              class: "text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 text-[11px]"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:book-open-text",
                                class: "w-3 h-3 shrink-0"
                              }),
                              createVNode("span", null, toDisplayString(item.storyUrl), 1)
                            ], 8, ["href"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-center whitespace-nowrap" }, [
                          createVNode(_component_UButton, {
                            color: item.hidden ? "neutral" : "success",
                            variant: "subtle",
                            size: "xs",
                            onClick: ($event) => toggleHidden(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.hidden ? "\u5DF2\u4E0B\u67B6" : "\u4E0A\u67B6\u4E2D"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color", "onClick"])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-right whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:copy-simple",
                              title: "\u590D\u5236\u53BB AI \u5473\u793E\u533A\u7EAF\u6587\u672C\u5E16",
                              onClick: ($event) => copyProjectCommunityPost()
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u793E\u533A\u5E16")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:pencil-simple",
                              onClick: ($event) => openEditModal(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u7F16\u8F91")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              onClick: ($event) => openDeleteModal(item)
                            }, null, 8, ["onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128)),
                    filteredList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "9",
                        class: "px-4 py-8 text-center text-gray-400"
                      }, " \u6682\u672A\u627E\u5230\u5339\u914D\u7684\u9879\u76EE\u6570\u636E ")
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isEditModalOpen.value,
        "onUpdate:open": ($event) => isEditModalOpen.value = $event,
        title: isEditingNew.value ? "\u65B0\u589E\u9879\u76EE\u62C6\u89E3" : `\u7F16\u8F91\u9879\u76EE\u62C6\u89E3 \xB7 ${((_a = editingItem.value) == null ? void 0 : _a.name) || ((_b = editingItem.value) == null ? void 0 : _b.id)}`,
        ui: { content: "max-w-2xl sm:max-w-2xl" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (editingItem.value) {
              _push2(`<div class="space-y-4 py-2"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9879\u76EE\u552F\u4E00 ID (Slug)",
                required: "",
                help: "\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u4E0E\u8FDE\u5B57\u7B26\uFF0C\u5982 hoxi-ai"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.id,
                      "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                      placeholder: "\u4F8B\u5982: hoxi-ai",
                      size: "sm",
                      disabled: !isEditingNew.value,
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u4F8B\u5982: hoxi-ai",
                        size: "sm",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9879\u76EE\u540D\u79F0",
                required: "",
                help: "\u5C55\u793A\u5728\u524D\u53F0\u7684\u5B8C\u6574\u6807\u9898"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.name,
                      "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                      placeholder: "\u4F8B\u5982: Hoxi AI",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u4F8B\u5982: Hoxi AI",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u4E00\u53E5\u8BDD\u5B9A\u4F4D / Tagline",
                required: "",
                help: "\u5361\u7247\u548C\u8BE6\u60C5\u9875\u7684\u6838\u5FC3\u53E3\u53F7"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.tagline,
                      "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                      placeholder: "\u4F8B\u5982: \u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u4E0E\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u9009\u578B\u7AD9",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.tagline,
                        "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                        placeholder: "\u4F8B\u5982: \u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u4E0E\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u9009\u578B\u7AD9",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6240\u5C5E\u5206\u7C7B",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.category,
                      "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                      items: categoryFormOptions,
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.category,
                        "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                        items: categoryFormOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u8FD0\u8425\u72B6\u6001",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.status,
                      "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                      items: statusOptions,
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.status,
                        "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                        items: statusOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9879\u76EE\u5E95\u5C42\u903B\u8F91",
                help: "\u8BF4\u660E\u8FD9\u4E2A\u9879\u76EE\u89E3\u51B3\u8C01\u7684\u4EC0\u4E48\u75DB\u70B9\u3001\u4E3A\u4EC0\u4E48\u4E00\u4E2A\u4EBA\u52A0 AI \u5C31\u80FD\u8DD1\u901A\u4EA4\u4ED8..."
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingItem.value.description,
                      "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                      rows: 3,
                      placeholder: "\u8BF4\u660E\u8FD9\u4E2A\u9879\u76EE\u89E3\u51B3\u8C01\u7684\u4EC0\u4E48\u75DB\u70B9\u3001\u4E3A\u4EC0\u4E48\u4E00\u4E2A\u4EBA\u52A0 AI \u5C31\u80FD\u8DD1\u901A\u4EA4\u4ED8...",
                      size: "sm",
                      class: "w-full text-sm"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.description,
                        "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                        rows: 3,
                        placeholder: "\u8BF4\u660E\u8FD9\u4E2A\u9879\u76EE\u89E3\u51B3\u8C01\u7684\u4EC0\u4E48\u75DB\u70B9\u3001\u4E3A\u4EC0\u4E48\u4E00\u4E2A\u4EBA\u52A0 AI \u5C31\u80FD\u8DD1\u901A\u4EA4\u4ED8...",
                        size: "sm",
                        class: "w-full text-sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u600E\u4E48\u8D5A\u94B1\u4E0E\u7B97\u529B\u8D26\u672C",
                help: "\u6536\u8D39\u6A21\u5F0F\u3001\u5BA2\u5355\u4EF7\u4E0E\u6BCF\u6708\u771F\u5B9E AI \u7B97\u529B\u8D26\u672C"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.monthlyCost,
                      "onUpdate:modelValue": ($event) => editingItem.value.monthlyCost = $event,
                      placeholder: "\u4F8B\u5982: \u6309\u6708\u8BA2\u9605 + \u7B97\u529B\u5305\u53D8\u73B0 \xB7 \u7B97\u529B\u7EA6 \xA5320/\u6708",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.monthlyCost,
                        "onUpdate:modelValue": ($event) => editingItem.value.monthlyCost = $event,
                        placeholder: "\u4F8B\u5982: \u6309\u6708\u8BA2\u9605 + \u7B97\u529B\u5305\u53D8\u73B0 \xB7 \u7B97\u529B\u7EA6 \xA5320/\u6708",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6838\u5FC3 AI \u6A21\u578B\u4E0E\u7B97\u529B\u65B9\u6848",
                help: "\u5982: DeepSeek-V3 + Claude 4.5 Sonnet"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.modelUsed,
                      "onUpdate:modelValue": ($event) => editingItem.value.modelUsed = $event,
                      placeholder: "\u4F8B\u5982: DeepSeek-V3 + Claude 4.5 Sonnet",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.modelUsed,
                        "onUpdate:modelValue": ($event) => editingItem.value.modelUsed = $event,
                        placeholder: "\u4F8B\u5982: DeepSeek-V3 + Claude 4.5 Sonnet",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6240\u9700\u80FD\u529B\u4E0E\u88C5\u5907\u6808 (\u82F1\u6587\u6216\u4E2D\u6587\u9017\u53F7\u5206\u9694)",
                help: "\u505A\u8FD9\u4E2A\u9879\u76EE\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3001Hoxi \u6280\u80FD\u6216\u6280\u672F\u6808\uFF0C\u5982: \u8DE8\u5883\u9009\u54C1\u55C5\u89C9, \u591A\u8BED\u79CD\u7535\u5546 SEO, Hoxi Work \u6280\u80FD, Nuxt 4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: techStackInput.value,
                      "onUpdate:modelValue": ($event) => techStackInput.value = $event,
                      placeholder: "\u4F8B\u5982: \u8DE8\u5883\u9009\u54C1\u55C5\u89C9, \u591A\u8BED\u79CD\u7535\u5546 SEO, Hoxi Work \u6280\u80FD, Nuxt 4",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: techStackInput.value,
                        "onUpdate:modelValue": ($event) => techStackInput.value = $event,
                        placeholder: "\u4F8B\u5982: \u8DE8\u5883\u9009\u54C1\u55C5\u89C9, \u591A\u8BED\u79CD\u7535\u5546 SEO, Hoxi Work \u6280\u80FD, Nuxt 4",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4F5C\u8005\u59D3\u540D / \u56E2\u961F" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.author,
                      "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                      placeholder: "\u4F8B\u5982: \u53EF\u4E50 (Coller)",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.author,
                        "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                        placeholder: "\u4F8B\u5982: \u53EF\u4E50 (Coller)",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u4F5C\u8005\u4E3B\u9875 / \u793E\u4EA4\u94FE\u63A5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.authorUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.authorUrl = $event,
                      placeholder: "\u4F8B\u5982: https://github.com/...",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.authorUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.authorUrl = $event,
                        placeholder: "\u4F8B\u5982: https://github.com/...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u63A8\u8350\u5FBD\u7AE0",
                help: "\u5982: \u7AD9\u957F\u51FA\u54C1 / Toolify \u6807\u6746\u62C6\u89E3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.badge,
                      "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                      placeholder: "\u4F8B\u5982: \u7AD9\u957F\u51FA\u54C1",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u4F8B\u5982: \u7AD9\u957F\u51FA\u54C1",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5FBD\u7AE0\u8272\u8C03" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.badgeTone,
                      "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                      items: badgeToneOptions,
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.badgeTone,
                        "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                        items: badgeToneOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u56FE\u6807 Icon",
                help: "Phosphor \u56FE\u6807\u540D"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.icon,
                      "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                      placeholder: "ph:rocket-launch-bold",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.icon,
                        "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                        placeholder: "ph:rocket-launch-bold",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u9879\u76EE\u5B98\u7F51 / \u4F53\u9A8C\u94FE\u63A5 *",
                required: "",
                help: "\u6807\u51C6\u5B98\u7F51\u6216\u4F53\u9A8C\u5730\u5740"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.url,
                      "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                      placeholder: "https://...",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.url,
                        "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                        placeholder: "https://...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "GitHub \u6E90\u7801\u94FE\u63A5",
                help: "\u9009\u586B\uFF0C\u5F00\u6E90\u4ED3\u5E93\u94FE\u63A5"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.githubUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.githubUrl = $event,
                      placeholder: "https://github.com/...",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.githubUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.githubUrl = $event,
                        placeholder: "https://github.com/...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6DF1\u5EA6\u62C6\u89E3\u535A\u5BA2\u94FE\u63A5 (story_url)",
                help: "\u586B\u5199\u5BF9\u5E94\u7684\u535A\u5BA2\u6587\u7AE0\u8DEF\u5F84\uFF08\u5982 /blog/shopark-cross-border-store-breakdown\uFF09\uFF0C\u8BE6\u7EC6\u8BB2\u900F\u600E\u4E48\u8D5A\u94B1\u3001\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u4E0E\u5B9E\u64CD\u6B65\u9AA4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.storyUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.storyUrl = $event,
                      placeholder: "/blog/xxx-breakdown",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.storyUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.storyUrl = $event,
                        placeholder: "/blog/xxx-breakdown",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u8D5A\u94B1\u903B\u8F91\u4E0E\u5B9E\u64CD\u62C6\u89E3\u8981\u70B9 (\u6BCF\u884C\u4E00\u6761)",
                help: "\u524D\u53F0\u5361\u7247\u53F3\u4FA7\u5C55\u793A\u7684\u7ED3\u6784\u5316\u57FA\u7840\u62C6\u89E3\uFF08\u5EFA\u8BAE\u6309\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u3010\u6210\u672C\u4E0E\u6BDB\u5229\u3011\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u5206\u884C\u586B\u5199\uFF09"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: highlightsInput.value,
                      "onUpdate:modelValue": ($event) => highlightsInput.value = $event,
                      rows: 4,
                      placeholder: "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u6309\u6708\u8BA2\u9605\u6216\u6309\u91CF\u62BD\u6210...\n\u3010\u6210\u672C\u4E0E\u6BDB\u5229\u3011\u6708\u7B97\u529B\u6210\u672C\u4E0E\u6BDB\u5229\u7387...\n\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u5728 Hoxi \u63A5\u5165\u5BF9\u5E94\u6280\u80FD\u4E00\u6B65\u6B65\u8DD1\u901A...",
                      size: "sm",
                      class: "w-full text-sm"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: highlightsInput.value,
                        "onUpdate:modelValue": ($event) => highlightsInput.value = $event,
                        rows: 4,
                        placeholder: "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u6309\u6708\u8BA2\u9605\u6216\u6309\u91CF\u62BD\u6210...\n\u3010\u6210\u672C\u4E0E\u6BDB\u5229\u3011\u6708\u7B97\u529B\u6210\u672C\u4E0E\u6BDB\u5229\u7387...\n\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u5728 Hoxi \u63A5\u5165\u5BF9\u5E94\u6280\u80FD\u4E00\u6B65\u6B65\u8DD1\u901A...",
                        size: "sm",
                        class: "w-full text-sm"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UCheckbox, {
                modelValue: editingItem.value.hidden,
                "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event,
                label: "\u6682\u4E0D\u4E0A\u67B6 (\u9690\u85CF)"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex items-center gap-2"${_scopeId}><span class="text-xs text-gray-500"${_scopeId}>\u6392\u5E8F\u6743\u91CD\uFF1A</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: editingItem.value.order,
                "onUpdate:modelValue": ($event) => editingItem.value.order = $event,
                modelModifiers: { number: true },
                type: "number",
                class: "w-24",
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              editingItem.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4 py-2"
              }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u9879\u76EE\u552F\u4E00 ID (Slug)",
                    required: "",
                    help: "\u5C0F\u5199\u82F1\u6587\u5B57\u6BCD\u4E0E\u8FDE\u5B57\u7B26\uFF0C\u5982 hoxi-ai"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u4F8B\u5982: hoxi-ai",
                        size: "sm",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u9879\u76EE\u540D\u79F0",
                    required: "",
                    help: "\u5C55\u793A\u5728\u524D\u53F0\u7684\u5B8C\u6574\u6807\u9898"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.name,
                        "onUpdate:modelValue": ($event) => editingItem.value.name = $event,
                        placeholder: "\u4F8B\u5982: Hoxi AI",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u4E00\u53E5\u8BDD\u5B9A\u4F4D / Tagline",
                  required: "",
                  help: "\u5361\u7247\u548C\u8BE6\u60C5\u9875\u7684\u6838\u5FC3\u53E3\u53F7"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.tagline,
                      "onUpdate:modelValue": ($event) => editingItem.value.tagline = $event,
                      placeholder: "\u4F8B\u5982: \u4E2D\u6587 AI \u6A21\u578B\u6392\u884C\u4E0E\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u9009\u578B\u7AD9",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u6240\u5C5E\u5206\u7C7B",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.category,
                        "onUpdate:modelValue": ($event) => editingItem.value.category = $event,
                        items: categoryFormOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u8FD0\u8425\u72B6\u6001",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.status,
                        "onUpdate:modelValue": ($event) => editingItem.value.status = $event,
                        items: statusOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u9879\u76EE\u5E95\u5C42\u903B\u8F91",
                  help: "\u8BF4\u660E\u8FD9\u4E2A\u9879\u76EE\u89E3\u51B3\u8C01\u7684\u4EC0\u4E48\u75DB\u70B9\u3001\u4E3A\u4EC0\u4E48\u4E00\u4E2A\u4EBA\u52A0 AI \u5C31\u80FD\u8DD1\u901A\u4EA4\u4ED8..."
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: editingItem.value.description,
                      "onUpdate:modelValue": ($event) => editingItem.value.description = $event,
                      rows: 3,
                      placeholder: "\u8BF4\u660E\u8FD9\u4E2A\u9879\u76EE\u89E3\u51B3\u8C01\u7684\u4EC0\u4E48\u75DB\u70B9\u3001\u4E3A\u4EC0\u4E48\u4E00\u4E2A\u4EBA\u52A0 AI \u5C31\u80FD\u8DD1\u901A\u4EA4\u4ED8...",
                      size: "sm",
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u600E\u4E48\u8D5A\u94B1\u4E0E\u7B97\u529B\u8D26\u672C",
                    help: "\u6536\u8D39\u6A21\u5F0F\u3001\u5BA2\u5355\u4EF7\u4E0E\u6BCF\u6708\u771F\u5B9E AI \u7B97\u529B\u8D26\u672C"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.monthlyCost,
                        "onUpdate:modelValue": ($event) => editingItem.value.monthlyCost = $event,
                        placeholder: "\u4F8B\u5982: \u6309\u6708\u8BA2\u9605 + \u7B97\u529B\u5305\u53D8\u73B0 \xB7 \u7B97\u529B\u7EA6 \xA5320/\u6708",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u6838\u5FC3 AI \u6A21\u578B\u4E0E\u7B97\u529B\u65B9\u6848",
                    help: "\u5982: DeepSeek-V3 + Claude 4.5 Sonnet"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.modelUsed,
                        "onUpdate:modelValue": ($event) => editingItem.value.modelUsed = $event,
                        placeholder: "\u4F8B\u5982: DeepSeek-V3 + Claude 4.5 Sonnet",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u6240\u9700\u80FD\u529B\u4E0E\u88C5\u5907\u6808 (\u82F1\u6587\u6216\u4E2D\u6587\u9017\u53F7\u5206\u9694)",
                  help: "\u505A\u8FD9\u4E2A\u9879\u76EE\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u3001Hoxi \u6280\u80FD\u6216\u6280\u672F\u6808\uFF0C\u5982: \u8DE8\u5883\u9009\u54C1\u55C5\u89C9, \u591A\u8BED\u79CD\u7535\u5546 SEO, Hoxi Work \u6280\u80FD, Nuxt 4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: techStackInput.value,
                      "onUpdate:modelValue": ($event) => techStackInput.value = $event,
                      placeholder: "\u4F8B\u5982: \u8DE8\u5883\u9009\u54C1\u55C5\u89C9, \u591A\u8BED\u79CD\u7535\u5546 SEO, Hoxi Work \u6280\u80FD, Nuxt 4",
                      size: "sm",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, { label: "\u4F5C\u8005\u59D3\u540D / \u56E2\u961F" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.author,
                        "onUpdate:modelValue": ($event) => editingItem.value.author = $event,
                        placeholder: "\u4F8B\u5982: \u53EF\u4E50 (Coller)",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u4F5C\u8005\u4E3B\u9875 / \u793E\u4EA4\u94FE\u63A5" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.authorUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.authorUrl = $event,
                        placeholder: "\u4F8B\u5982: https://github.com/...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u63A8\u8350\u5FBD\u7AE0",
                    help: "\u5982: \u7AD9\u957F\u51FA\u54C1 / Toolify \u6807\u6746\u62C6\u89E3"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.badge,
                        "onUpdate:modelValue": ($event) => editingItem.value.badge = $event,
                        placeholder: "\u4F8B\u5982: \u7AD9\u957F\u51FA\u54C1",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u5FBD\u7AE0\u8272\u8C03" }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.badgeTone,
                        "onUpdate:modelValue": ($event) => editingItem.value.badgeTone = $event,
                        items: badgeToneOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u56FE\u6807 Icon",
                    help: "Phosphor \u56FE\u6807\u540D"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.icon,
                        "onUpdate:modelValue": ($event) => editingItem.value.icon = $event,
                        placeholder: "ph:rocket-launch-bold",
                        size: "sm",
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
                  createVNode(_component_UFormField, {
                    label: "\u9879\u76EE\u5B98\u7F51 / \u4F53\u9A8C\u94FE\u63A5 *",
                    required: "",
                    help: "\u6807\u51C6\u5B98\u7F51\u6216\u4F53\u9A8C\u5730\u5740"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.url,
                        "onUpdate:modelValue": ($event) => editingItem.value.url = $event,
                        placeholder: "https://...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "GitHub \u6E90\u7801\u94FE\u63A5",
                    help: "\u9009\u586B\uFF0C\u5F00\u6E90\u4ED3\u5E93\u94FE\u63A5"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.githubUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.githubUrl = $event,
                        placeholder: "https://github.com/...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u6DF1\u5EA6\u62C6\u89E3\u535A\u5BA2\u94FE\u63A5 (story_url)",
                  help: "\u586B\u5199\u5BF9\u5E94\u7684\u535A\u5BA2\u6587\u7AE0\u8DEF\u5F84\uFF08\u5982 /blog/shopark-cross-border-store-breakdown\uFF09\uFF0C\u8BE6\u7EC6\u8BB2\u900F\u600E\u4E48\u8D5A\u94B1\u3001\u9700\u8981\u4EC0\u4E48\u80FD\u529B\u4E0E\u5B9E\u64CD\u6B65\u9AA4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.storyUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.storyUrl = $event,
                      placeholder: "/blog/xxx-breakdown",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: "\u8D5A\u94B1\u903B\u8F91\u4E0E\u5B9E\u64CD\u62C6\u89E3\u8981\u70B9 (\u6BCF\u884C\u4E00\u6761)",
                  help: "\u524D\u53F0\u5361\u7247\u53F3\u4FA7\u5C55\u793A\u7684\u7ED3\u6784\u5316\u57FA\u7840\u62C6\u89E3\uFF08\u5EFA\u8BAE\u6309\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u3010\u6210\u672C\u4E0E\u6BDB\u5229\u3011\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u5206\u884C\u586B\u5199\uFF09"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: highlightsInput.value,
                      "onUpdate:modelValue": ($event) => highlightsInput.value = $event,
                      rows: 4,
                      placeholder: "\u3010\u600E\u4E48\u8D5A\u94B1\u3011\u6309\u6708\u8BA2\u9605\u6216\u6309\u91CF\u62BD\u6210...\n\u3010\u6210\u672C\u4E0E\u6BDB\u5229\u3011\u6708\u7B97\u529B\u6210\u672C\u4E0E\u6BDB\u5229\u7387...\n\u3010\u600E\u4E48\u64CD\u4F5C\u3011\u5728 Hoxi \u63A5\u5165\u5BF9\u5E94\u6280\u80FD\u4E00\u6B65\u6B65\u8DD1\u901A...",
                      size: "sm",
                      class: "w-full text-sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800" }, [
                  createVNode(_component_UCheckbox, {
                    modelValue: editingItem.value.hidden,
                    "onUpdate:modelValue": ($event) => editingItem.value.hidden = $event,
                    label: "\u6682\u4E0D\u4E0A\u67B6 (\u9690\u85CF)"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "text-xs text-gray-500" }, "\u6392\u5E8F\u6743\u91CD\uFF1A"),
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.order,
                      "onUpdate:modelValue": ($event) => editingItem.value.order = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      class: "w-24",
                      size: "xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: ($event) => isEditModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              loading: saving.value,
              size: "sm",
              onClick: saveEditItem
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u5E76\u540C\u6B65\u81F3\u6570\u636E\u5E93 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u540C\u6B65\u81F3\u6570\u636E\u5E93 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-2 w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "sm",
                  onClick: ($event) => isEditModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  loading: saving.value,
                  size: "sm",
                  onClick: saveEditItem
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u540C\u6B65\u81F3\u6570\u636E\u5E93 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isDeleteModalOpen.value,
        "onUpdate:open": ($event) => isDeleteModalOpen.value = $event,
        title: "\u786E\u8BA4\u5220\u9664\u5B9E\u6218\u9879\u76EE",
        ui: { content: "max-w-md sm:max-w-md" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(`<div class="flex items-start gap-3 py-2"${_scopeId}><div class="p-2 rounded-full bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:warning-circle-bold",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1.5 text-xs text-gray-600 dark:text-gray-300"${_scopeId}><p class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}> \u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5B9E\u6218\u9879\u76EE\u5417\uFF1F </p><p${_scopeId}> \u5373\u5C06\u5220\u9664\u9879\u76EE <span class="font-semibold text-gray-900 dark:text-white font-mono"${_scopeId}>\u201C${ssrInterpolate((_a2 = itemToDelete.value) == null ? void 0 : _a2.name)}\u201D</span>\uFF08${ssrInterpolate((_b2 = itemToDelete.value) == null ? void 0 : _b2.id)}\uFF09\u3002 </p><p class="text-red-500 dark:text-red-400"${_scopeId}> \u6B64\u64CD\u4F5C\u5C06\u76F4\u63A5\u4ECE \`hoxi_projects\` \u6570\u636E\u5E93\u4E2D\u6C38\u4E45\u79FB\u9664\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002 </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-start gap-3 py-2" }, [
                createVNode("div", { class: "p-2 rounded-full bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 shrink-0" }, [
                  createVNode(_component_UIcon, {
                    name: "ph:warning-circle-bold",
                    class: "w-6 h-6"
                  })
                ]),
                createVNode("div", { class: "space-y-1.5 text-xs text-gray-600 dark:text-gray-300" }, [
                  createVNode("p", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, " \u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5B9E\u6218\u9879\u76EE\u5417\uFF1F "),
                  createVNode("p", null, [
                    createTextVNode(" \u5373\u5C06\u5220\u9664\u9879\u76EE "),
                    createVNode("span", { class: "font-semibold text-gray-900 dark:text-white font-mono" }, "\u201C" + toDisplayString((_c = itemToDelete.value) == null ? void 0 : _c.name) + "\u201D", 1),
                    createTextVNode("\uFF08" + toDisplayString((_d = itemToDelete.value) == null ? void 0 : _d.id) + "\uFF09\u3002 ", 1)
                  ]),
                  createVNode("p", { class: "text-red-500 dark:text-red-400" }, " \u6B64\u64CD\u4F5C\u5C06\u76F4\u63A5\u4ECE `hoxi_projects` \u6570\u636E\u5E93\u4E2D\u6C38\u4E45\u79FB\u9664\uFF0C\u4E0D\u53EF\u64A4\u9500\u3002 ")
                ])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-2 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: ($event) => isDeleteModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              size: "sm",
              icon: "ph:trash",
              loading: saving.value,
              onClick: confirmDelete
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u786E\u8BA4\u5220\u9664 `);
                } else {
                  return [
                    createTextVNode(" \u786E\u8BA4\u5220\u9664 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-2 w-full" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "sm",
                  onClick: ($event) => isDeleteModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "error",
                  size: "sm",
                  icon: "ph:trash",
                  loading: saving.value,
                  onClick: confirmDelete
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u786E\u8BA4\u5220\u9664 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/admin/pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-BtgQ8HK7.mjs.map
