import { r as useSettings, b6 as useUserSession, u as useI18n, _ as _sfc_main$I } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, computed, ref, watch, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import __nuxt_component_4 from './HoxiSectionLabel-BK4CHoLb.mjs';
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
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ioredis';
import 'zod';
import 'node:child_process';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommentSection",
  __ssrInlineRender: true,
  props: {
    targetType: { default: "post" },
    targetId: {},
    title: {},
    subtitle: {},
    allowGuest: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { getSetting } = useSettings();
    const { user, loggedIn: isLoggedIn } = useUserSession();
    const { locale, t } = useI18n();
    const isEnabled = computed(() => {
      const val = getSetting("enable_comments");
      return String(val) !== "false";
    });
    const comments = ref([]);
    const pending = ref(true);
    const submitting = ref(false);
    const errorMessage = ref("");
    const successMessage = ref("");
    const authorName = ref("");
    const authorEmail = ref("");
    const authorUrl = ref("");
    const content = ref("");
    const replyingTo = ref(null);
    ref(null);
    watch(
      () => [props.targetType, props.targetId],
      () => {
        cancelReply();
        fetchComments();
      }
    );
    function getGitHubUsername(url) {
      if (!url) return null;
      const clean = url.trim();
      const match = clean.match(/^https?:\/\/(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)(?:\/)?$/i);
      return match && match[1] ? match[1] : null;
    }
    async function fetchComments() {
      if (!props.targetId) return;
      pending.value = true;
      errorMessage.value = "";
      try {
        const res = await $fetch(
          "/api/comments",
          {
            query: {
              targetType: props.targetType,
              targetId: props.targetId
            }
          }
        );
        if (res == null ? void 0 : res.success) {
          comments.value = res.data || [];
        }
      } catch {
      } finally {
        pending.value = false;
      }
    }
    function cancelReply() {
      replyingTo.value = null;
      errorMessage.value = "";
    }
    function formatDate(timestamp) {
      if (!timestamp) return "";
      const date = new Date(timestamp);
      const now = /* @__PURE__ */ new Date();
      const diffSec = Math.floor((now.getTime() - date.getTime()) / 1e3);
      if (diffSec < 60) return t("common.justNow", "\u521A\u521A");
      if (diffSec < 3600) return `${Math.floor(diffSec / 60)} ${t("common.minutes", "\u5206\u949F\u524D")}`;
      if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} ${t("common.hours", "\u5C0F\u65F6\u524D")}`;
      if (diffSec < 86400 * 30) return `${Math.floor(diffSec / 86400)} ${t("common.days", "\u5929\u524D")}`;
      return date.toLocaleDateString(locale.value === "zh" ? "zh-CN" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$I;
      if (isEnabled.value) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-14 pt-8 border-t border-gray-100 dark:border-gray-800" }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "header", {}, () => {
          _push(`<div class="mb-6 flex items-center justify-between"><div><h3 class="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">`);
          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
            _push(`${ssrInterpolate(__props.title || _ctx.$t("comment.title", "\u8BA8\u8BBA\u4E0E\u53CD\u9988"))}`);
          }, _push, _parent);
          if (comments.value.length > 0) {
            _push(`<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 font-mono text-gray-500 dark:text-gray-400">${ssrInterpolate(comments.value.length)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</h3><p class="mt-1 text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(__props.subtitle || _ctx.$t("comment.subtitle", "\u6B22\u8FCE\u4EA4\u6D41\u4F7F\u7528\u5FC3\u5F97\u3001\u573A\u666F\u5B9E\u6D4B\u4E0E\u5EFA\u8BAE\u3002"))}</p></div></div>`);
        }, _push, _parent);
        _push(`<div class="mb-10">`);
        if (replyingTo.value) {
          _push(`<div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2 px-1"><span>${ssrInterpolate(_ctx.$t("comment.replyTo", { name: `@${replyingTo.value.authorName}` }))}</span><button type="button" class="hover:text-primary-500 transition-colors cursor-pointer">${ssrInterpolate(_ctx.$t("comment.cancel", "\u53D6\u6D88"))}</button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isLoggedIn) && unref(user)) {
          _push(`<div class="flex items-center gap-2 mb-3 text-xs text-gray-500 dark:text-gray-400">`);
          if (unref(user).avatarUrl) {
            _push(`<img${ssrRenderAttr("src", unref(user).avatarUrl)} alt="Avatar" class="w-5 h-5 rounded-full object-cover">`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(_ctx.$t("comment.loginAs", { name: unref(user).nickname || unref(user).email }))}</span></div>`);
        } else if (__props.allowGuest) {
          _push(`<div class="space-y-2 mb-3"><div class="flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500 px-0.5"><span>\u8BF7\u7559\u4E0B\u4F60\u7684\u57FA\u672C\u4FE1\u606F\u6216\u5FEB\u6377\u6388\u6743\uFF1A</span><a href="/api/auth/github" class="inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:github-logo",
            class: "w-3.5 h-3.5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(_ctx.$t("comment.loginWithGithub", "\u7528 GitHub \u767B\u5F55"))}</span></a></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5"><input${ssrRenderAttr("value", authorName.value)} type="text" maxlength="50"${ssrRenderAttr("placeholder", _ctx.$t("comment.authorPlaceholder", "\u4F60\u7684\u6635\u79F0 *"))} class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-xs text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors"><input${ssrRenderAttr("value", authorEmail.value)} type="email" maxlength="100"${ssrRenderAttr("placeholder", _ctx.$t("comment.emailPlaceholder", "\u90AE\u7BB1\uFF08\u9009\u586B\uFF0C\u7528\u4E8E\u5C55\u793A\u5934\u50CF\uFF09"))} class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-xs text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors"><input${ssrRenderAttr("value", authorUrl.value)} type="text" maxlength="200"${ssrRenderAttr("placeholder", _ctx.$t("comment.urlPlaceholder", "\u7F51\u7AD9\u6216 GitHub \u4E3B\u9875\uFF08\u9009\u586B\uFF09"))} class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-xs text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative"><textarea rows="3" maxlength="1000"${ssrRenderAttr("placeholder", replyingTo.value ? _ctx.$t("comment.replyTo", { name: `@${replyingTo.value.authorName}` }) : _ctx.$t("comment.placeholder", "\u6B22\u8FCE\u7559\u4E0B\u4F60\u7684\u770B\u6CD5..."))} class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-3 text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-y min-h-[90px]">${ssrInterpolate(content.value)}</textarea></div><div class="mt-3 flex items-center justify-between"><div class="text-xs">`);
        if (errorMessage.value) {
          _push(`<span class="text-red-500">${ssrInterpolate(errorMessage.value)}</span>`);
        } else if (successMessage.value) {
          _push(`<span class="text-emerald-600 dark:text-emerald-400 font-medium">${ssrInterpolate(successMessage.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-3"><span class="text-xs text-gray-400 tabular-nums">${ssrInterpolate(content.value.length)}/1000 </span><button type="button"${ssrIncludeBooleanAttr(submitting.value || !content.value.trim()) ? " disabled" : ""} class="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded-full disabled:opacity-40 transition-colors cursor-pointer disabled:cursor-not-allowed">${ssrInterpolate(submitting.value ? _ctx.$t("comment.submitting", "\u63D0\u4EA4\u4E2D...") : _ctx.$t("comment.submit", "\u53D1\u8868\u8BC4\u8BBA"))}</button></div></div></div>`);
        if (pending.value) {
          _push(`<div class="space-y-4 animate-pulse py-4"><div class="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/4"></div><div class="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full"></div></div>`);
        } else if (comments.value.length === 0) {
          _push(`<div class="py-12 text-center text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(_ctx.$t("comment.empty", "\u6682\u65E0\u8BC4\u8BBA\uFF0C\u6765\u53D1\u8868\u7B2C\u4E00\u6761\u770B\u6CD5\u5427\u3002"))}</div>`);
        } else {
          _push(`<div class="divide-y divide-gray-100 dark:divide-gray-800/80"><!--[-->`);
          ssrRenderList(comments.value, (item) => {
            var _a, _b;
            _push(`<div class="py-6 first:pt-0"><div class="flex items-start gap-3"><img${ssrRenderAttr("src", item.avatarUrl)}${ssrRenderAttr("alt", item.authorName)} class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 object-cover shrink-0 mt-0.5" loading="lazy"><div class="min-w-0 flex-1"><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2 flex-wrap">`);
            if (getGitHubUsername(item.authorUrl)) {
              _push(`<a${ssrRenderAttr("href", item.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1 group/gh hover:text-primary-500 dark:hover:text-primary-400 transition-colors"><span class="text-xs font-semibold text-gray-900 dark:text-white group-hover/gh:text-primary-500 dark:group-hover/gh:text-primary-400 transition-colors">${ssrInterpolate(item.authorName)}</span><span class="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[10px] font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 group-hover/gh:bg-primary-50 dark:group-hover/gh:bg-primary-950/60 group-hover/gh:text-primary-600 dark:group-hover/gh:text-primary-400 transition-colors">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:github-logo-fill",
                class: "w-3 h-3 text-gray-700 dark:text-gray-300"
              }, null, _parent));
              _push(`<span>@${ssrInterpolate(getGitHubUsername(item.authorUrl))}</span></span></a>`);
            } else if (item.authorUrl) {
              _push(`<a${ssrRenderAttr("href", item.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1 group/site hover:text-primary-500 dark:hover:text-primary-400 transition-colors"><span class="text-xs font-semibold text-gray-900 dark:text-white group-hover/site:text-primary-500 dark:group-hover/site:text-primary-400 transition-colors">${ssrInterpolate(item.authorName)}</span>`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-up-right",
                class: "w-3 h-3 text-gray-400 group-hover/site:text-primary-500 transition-colors"
              }, null, _parent));
              _push(`</a>`);
            } else {
              _push(`<span class="text-xs font-semibold text-gray-900 dark:text-white">${ssrInterpolate(item.authorName)}</span>`);
            }
            if (item.source === "v2ex") {
              _push(`<a${ssrRenderAttr("href", item.externalUrl || "https://www.v2ex.com")} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[10px] font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/60 transition-colors"${ssrRenderAttr("title", _ctx.$t("comment.v2exDiscussion", "\u6765\u81EA V2EX \u793E\u533A\u8BA8\u8BBA\uFF0C\u70B9\u51FB\u67E5\u770B\u539F\u5E16"))}><span class="font-bold">V2EX</span>`);
              if ((_a = item.extraData) == null ? void 0 : _a.floor) {
                _push(`<span>#${ssrInterpolate(item.extraData.floor)}\u697C</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-up-right",
                class: "w-2.5 h-2.5 opacity-60"
              }, null, _parent));
              _push(`</a>`);
            } else if (item.source === "linuxdo") {
              _push(`<a${ssrRenderAttr("href", item.externalUrl || "https://linux.do")} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[10px] font-mono text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 hover:text-amber-600 hover:bg-amber-100 dark:hover:bg-amber-950/60 transition-colors"${ssrRenderAttr("title", _ctx.$t("comment.linuxdoDiscussion", "\u6765\u81EA LINUX DO \u793E\u533A\u8BA8\u8BBA\uFF0C\u70B9\u51FB\u67E5\u770B\u539F\u5E16"))}><span class="font-bold">LINUX DO</span>`);
              if ((_b = item.extraData) == null ? void 0 : _b.floor) {
                _push(`<span>#${ssrInterpolate(item.extraData.floor)}\u697C</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-up-right",
                class: "w-2.5 h-2.5 opacity-60"
              }, null, _parent));
              _push(`</a>`);
            } else if (item.source && item.source !== "local") {
              _push(`<span class="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[10px] font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">${ssrInterpolate(item.source)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="text-[11px] text-gray-400 tabular-nums">${ssrInterpolate(formatDate(item.createdAt))}</span>`);
            if (item.status === "pending") {
              _push(`<span class="text-[10px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.2 rounded">${ssrInterpolate(_ctx.$t("comment.underReview", "\u5BA1\u6838\u4E2D"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><button type="button" class="text-xs text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer">${ssrInterpolate(_ctx.$t("comment.reply", "\u56DE\u590D"))}</button></div><p class="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line break-words">${ssrInterpolate(item.content)}</p>`);
            if (item.replies && item.replies.length > 0) {
              _push(`<div class="mt-4 pl-4 border-l border-gray-100 dark:border-gray-800 space-y-4"><!--[-->`);
              ssrRenderList(item.replies, (reply) => {
                _push(`<div class="flex items-start gap-2.5"><img${ssrRenderAttr("src", reply.avatarUrl)}${ssrRenderAttr("alt", reply.authorName)} class="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-800 object-cover shrink-0 mt-0.5" loading="lazy"><div class="min-w-0 flex-1"><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-1.5 flex-wrap">`);
                if (getGitHubUsername(reply.authorUrl)) {
                  _push(`<a${ssrRenderAttr("href", reply.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1 group/gh hover:text-primary-500 dark:hover:text-primary-400 transition-colors"><span class="text-xs font-semibold text-gray-900 dark:text-white group-hover/gh:text-primary-500 dark:group-hover/gh:text-primary-400 transition-colors">${ssrInterpolate(reply.authorName)}</span><span class="inline-flex items-center gap-0.5 rounded px-1 py-0.2 text-[9px] font-mono text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">`);
                  _push(ssrRenderComponent(_component_UIcon, {
                    name: "ph:github-logo-fill",
                    class: "w-2.5 h-2.5 text-gray-700 dark:text-gray-300"
                  }, null, _parent));
                  _push(`<span>@${ssrInterpolate(getGitHubUsername(reply.authorUrl))}</span></span></a>`);
                } else if (reply.authorUrl) {
                  _push(`<a${ssrRenderAttr("href", reply.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-0.5 group/site hover:text-primary-500 dark:hover:text-primary-400 transition-colors"><span class="text-xs font-semibold text-gray-900 dark:text-white group-hover/site:text-primary-500 transition-colors">${ssrInterpolate(reply.authorName)}</span>`);
                  _push(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-up-right",
                    class: "w-2.5 h-2.5 text-gray-400 group-hover/site:text-primary-500 transition-colors"
                  }, null, _parent));
                  _push(`</a>`);
                } else {
                  _push(`<span class="text-xs font-semibold text-gray-900 dark:text-white">${ssrInterpolate(reply.authorName)}</span>`);
                }
                if (reply.replyToName) {
                  _push(`<span class="text-[11px] text-gray-400">${ssrInterpolate(_ctx.$t("comment.replyTo", { name: `@${reply.replyToName}` }))}</span>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<span class="text-[10px] text-gray-400 tabular-nums">${ssrInterpolate(formatDate(reply.createdAt))}</span>`);
                if (reply.status === "pending") {
                  _push(`<span class="text-[9px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1 py-0.1 rounded">${ssrInterpolate(_ctx.$t("comment.underReview", "\u5BA1\u6838\u4E2D"))}</span>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div><button type="button" class="text-[11px] text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer">${ssrInterpolate(_ctx.$t("comment.reply", "\u56DE\u590D"))}</button></div><p class="mt-1 text-xs text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line break-words">${ssrInterpolate(reply.content)}</p></div></div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommentSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "CommentSection" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiComment",
  __ssrInlineRender: true,
  props: {
    targetType: { default: "post" },
    targetId: {},
    title: {},
    subtitle: {},
    allowGuest: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommentSection = __nuxt_component_0;
      const _component_HoxiSectionLabel = __nuxt_component_4;
      _push(ssrRenderComponent(_component_CommentSection, mergeProps({
        "target-type": __props.targetType,
        "target-id": __props.targetId,
        title: __props.title || _ctx.$t("hoxi.comment.title"),
        subtitle: __props.subtitle || _ctx.$t("hoxi.comment.subtitle"),
        "allow-guest": __props.allowGuest,
        class: "mt-16 pt-10 border-t border-slate-100 dark:border-slate-800"
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HoxiSectionLabel, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.title || _ctx.$t("hoxi.comment.title"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.title || _ctx.$t("hoxi.comment.title")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-1 text-xs text-slate-400 dark:text-slate-500"${_scopeId}>${ssrInterpolate(__props.subtitle || _ctx.$t("hoxi.comment.subtitle"))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8" }, [
                createVNode(_component_HoxiSectionLabel, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.title || _ctx.$t("hoxi.comment.title")), 1)
                  ]),
                  _: 1
                }),
                createVNode("p", { class: "mt-1 text-xs text-slate-400 dark:text-slate-500" }, toDisplayString(__props.subtitle || _ctx.$t("hoxi.comment.subtitle")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiComment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main, { __name: "HoxiComment" });

export { __nuxt_component_7 as default };
