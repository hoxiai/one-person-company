import __nuxt_component_4 from './HoxiSectionLabel-BHyUHyFd.mjs';
import { v as useSettings, b9 as useUserSession, f as useI18n, b as _sfc_main$G } from './server.mjs';
import { defineComponent, computed, ref, watch, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiComment",
  __ssrInlineRender: true,
  props: {
    targetType: { default: "post" },
    targetId: {}
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
      } catch (err) {
      } finally {
        pending.value = false;
      }
    }
    function cancelReply() {
      replyingTo.value = null;
      errorMessage.value = "";
    }
    function formatDate(dateStr) {
      if (!dateStr) return "";
      const d = new Date(dateStr);
      return d.toLocaleDateString(locale.value === "zh" ? "zh-CN" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HoxiSectionLabel = __nuxt_component_4;
      const _component_UIcon = _sfc_main$G;
      if (isEnabled.value) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-16 pt-10 border-t border-slate-100 dark:border-slate-800" }, _attrs))}><div class="mb-8">`);
        _push(ssrRenderComponent(_component_HoxiSectionLabel, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("hoxi.comment.title"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("hoxi.comment.title")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="mt-1 text-xs text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.comment.subtitle"))}</p></div><div class="mb-10">`);
        if (replyingTo.value) {
          _push(`<div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 px-1"><span>${ssrInterpolate(_ctx.$t("hoxi.comment.replyTo", { name: replyingTo.value.authorName }))}</span><button type="button" class="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">${ssrInterpolate(_ctx.$t("hoxi.comment.cancel"))}</button></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isLoggedIn) && unref(user)) {
          _push(`<div class="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-slate-400">`);
          if (unref(user).avatarUrl) {
            _push(`<img${ssrRenderAttr("src", unref(user).avatarUrl)} alt="Avatar" class="w-5 h-5 rounded-full object-cover">`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.comment.loginAs", { name: unref(user).nickname || unref(user).email }))}</span></div>`);
        } else {
          _push(`<div class="space-y-2 mb-3"><div class="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 px-0.5"><span>\u8BF7\u7559\u4E0B\u4F60\u7684\u57FA\u672C\u4FE1\u606F\u6216\u5FEB\u6377\u6388\u6743\uFF1A</span><a href="/api/auth/github" class="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:github-logo",
            class: "w-3.5 h-3.5 text-slate-700 dark:text-slate-300"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(_ctx.$t("hoxi.comment.loginWithGithub"))}</span></a></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5"><input${ssrRenderAttr("value", authorName.value)} type="text" maxlength="50"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.comment.authorPlaceholder"))} class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"><input${ssrRenderAttr("value", authorEmail.value)} type="email" maxlength="100"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.comment.emailPlaceholder"))} class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"><input${ssrRenderAttr("value", authorUrl.value)} type="text" maxlength="200"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.comment.urlPlaceholder"))} class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"></div></div>`);
        }
        _push(`<div class="relative"><textarea rows="3" maxlength="1000"${ssrRenderAttr("placeholder", replyingTo.value ? _ctx.$t("hoxi.comment.replyTo", { name: replyingTo.value.authorName }) : _ctx.$t("hoxi.comment.placeholder"))} class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-y min-h-[90px]">${ssrInterpolate(content.value)}</textarea></div><div class="mt-3 flex items-center justify-between"><div class="text-xs">`);
        if (errorMessage.value) {
          _push(`<span class="text-red-500">${ssrInterpolate(errorMessage.value)}</span>`);
        } else if (successMessage.value) {
          _push(`<span class="text-emerald-600 dark:text-emerald-400 font-medium">${ssrInterpolate(successMessage.value)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-3"><span class="text-xs text-slate-400 tabular-nums">${ssrInterpolate(content.value.length)}/1000 </span><button type="button"${ssrIncludeBooleanAttr(submitting.value || !content.value.trim()) ? " disabled" : ""} class="px-5 py-2 bg-blue-500 text-white text-xs font-medium rounded-full hover:bg-blue-600 disabled:opacity-40 transition-colors cursor-pointer disabled:cursor-not-allowed">${ssrInterpolate(submitting.value ? _ctx.$t("hoxi.comment.submitting") : _ctx.$t("hoxi.comment.submit"))}</button></div></div></div>`);
        if (pending.value) {
          _push(`<div class="space-y-4 animate-pulse py-4"><div class="h-4 bg-slate-100 dark:bg-slate-800 rounded w-1/4"></div><div class="h-4 bg-slate-100 dark:bg-slate-800 rounded w-full"></div></div>`);
        } else if (comments.value.length === 0) {
          _push(`<div class="py-12 text-center text-xs text-slate-400 dark:text-slate-500">${ssrInterpolate(_ctx.$t("hoxi.comment.empty"))}</div>`);
        } else {
          _push(`<div class="divide-y divide-slate-100 dark:divide-slate-800/80"><!--[-->`);
          ssrRenderList(comments.value, (item) => {
            _push(`<div class="py-6 first:pt-0"><div class="flex items-start gap-3"><img${ssrRenderAttr("src", item.avatarUrl)}${ssrRenderAttr("alt", item.authorName)} class="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 object-cover shrink-0 mt-0.5" loading="lazy"><div class="min-w-0 flex-1"><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2 flex-wrap">`);
            if (getGitHubUsername(item.authorUrl)) {
              _push(`<a${ssrRenderAttr("href", item.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1 group/gh hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><span class="text-xs font-semibold text-slate-900 dark:text-white group-hover/gh:text-blue-500 dark:group-hover/gh:text-blue-400 transition-colors">${ssrInterpolate(item.authorName)}</span><span class="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[10px] font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 group-hover/gh:bg-blue-50 dark:group-hover/gh:bg-blue-950/60 group-hover/gh:text-blue-600 dark:group-hover/gh:text-blue-400 transition-colors">`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:github-logo-fill",
                class: "w-3 h-3 text-slate-700 dark:text-slate-300"
              }, null, _parent));
              _push(`<span>@${ssrInterpolate(getGitHubUsername(item.authorUrl))}</span></span></a>`);
            } else if (item.authorUrl) {
              _push(`<a${ssrRenderAttr("href", item.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1 group/site hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><span class="text-xs font-semibold text-slate-900 dark:text-white group-hover/site:text-blue-500 dark:group-hover/site:text-blue-400 transition-colors">${ssrInterpolate(item.authorName)}</span>`);
              _push(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-up-right",
                class: "w-3 h-3 text-slate-400 group-hover/site:text-blue-500 transition-colors"
              }, null, _parent));
              _push(`</a>`);
            } else {
              _push(`<span class="text-xs font-semibold text-slate-900 dark:text-white">${ssrInterpolate(item.authorName)}</span>`);
            }
            _push(`<span class="text-[11px] text-slate-400 tabular-nums">${ssrInterpolate(formatDate(item.createdAt))}</span>`);
            if (item.status === "pending") {
              _push(`<span class="text-[10px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.2 rounded">${ssrInterpolate(_ctx.$t("hoxi.comment.underReview"))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><button type="button" class="text-xs text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">${ssrInterpolate(_ctx.$t("hoxi.comment.reply"))}</button></div><p class="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line break-words">${ssrInterpolate(item.content)}</p>`);
            if (item.replies && item.replies.length > 0) {
              _push(`<div class="mt-4 pl-4 border-l border-slate-100 dark:border-slate-800 space-y-4"><!--[-->`);
              ssrRenderList(item.replies, (reply) => {
                _push(`<div class="flex items-start gap-2.5"><img${ssrRenderAttr("src", reply.avatarUrl)}${ssrRenderAttr("alt", reply.authorName)} class="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-800 object-cover shrink-0 mt-0.5" loading="lazy"><div class="min-w-0 flex-1"><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-1.5 flex-wrap">`);
                if (getGitHubUsername(reply.authorUrl)) {
                  _push(`<a${ssrRenderAttr("href", reply.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-1 group/gh hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><span class="text-xs font-semibold text-slate-900 dark:text-white group-hover/gh:text-blue-500 dark:group-hover/gh:text-blue-400 transition-colors">${ssrInterpolate(reply.authorName)}</span><span class="inline-flex items-center gap-0.5 rounded px-1 py-0.2 text-[9px] font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800">`);
                  _push(ssrRenderComponent(_component_UIcon, {
                    name: "ph:github-logo-fill",
                    class: "w-2.5 h-2.5 text-slate-700 dark:text-slate-300"
                  }, null, _parent));
                  _push(`<span>@${ssrInterpolate(getGitHubUsername(reply.authorUrl))}</span></span></a>`);
                } else if (reply.authorUrl) {
                  _push(`<a${ssrRenderAttr("href", reply.authorUrl)} target="_blank" rel="noopener nofollow" class="inline-flex items-center gap-0.5 text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><span>${ssrInterpolate(reply.authorName)}</span>`);
                  _push(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-up-right",
                    class: "w-2.5 h-2.5 text-slate-400"
                  }, null, _parent));
                  _push(`</a>`);
                } else {
                  _push(`<span class="text-xs font-semibold text-slate-900 dark:text-white">${ssrInterpolate(reply.authorName)}</span>`);
                }
                if (reply.replyToName) {
                  _push(`<span class="text-[11px] text-slate-400">${ssrInterpolate(_ctx.$t("hoxi.comment.replyTo", { name: reply.replyToName }))}</span>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<span class="text-[11px] text-slate-400 tabular-nums">${ssrInterpolate(formatDate(reply.createdAt))}</span>`);
                if (reply.status === "pending") {
                  _push(`<span class="text-[10px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.2 rounded">${ssrInterpolate(_ctx.$t("hoxi.comment.underReview"))}</span>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div><button type="button" class="text-xs text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">${ssrInterpolate(_ctx.$t("hoxi.comment.reply"))}</button></div><p class="mt-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line break-words">${ssrInterpolate(reply.content)}</p></div></div>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiComment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main, { __name: "HoxiComment" });

export { __nuxt_component_7 as default };
