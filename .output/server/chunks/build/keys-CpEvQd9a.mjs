import { u as useI18n, bu as useSeoMeta, j as _sfc_main$Y } from './server.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, toDisplayString, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$1, f as formatPoints } from './layout-BygO2qvg.mjs';
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
  __name: "keys",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => `${t("hoxi.member.keys.title")} \xB7 ${t("hoxi.site.name")}`
    });
    const loading = ref(true);
    const creating = ref(false);
    const gatewayBaseUrl = ref("https://api.ainode.run");
    const keys = ref([]);
    const newKeyName = ref("");
    const revealedSecret = ref(null);
    const feedbackMsg = ref("");
    const endpointUrl = computed(() => `${gatewayBaseUrl.value.replace(/\/+$/, "")}/v1`);
    async function loadKeys() {
      loading.value = true;
      try {
        const res = await $fetch("/api/hoxi/member/keys");
        if (res == null ? void 0 : res.gatewayBaseUrl) gatewayBaseUrl.value = res.gatewayBaseUrl;
        keys.value = Array.isArray(res == null ? void 0 : res.keys) ? res.keys : [];
      } catch {
        keys.value = [];
      } finally {
        loading.value = false;
      }
    }
    async function handleCreateKey() {
      var _a, _b;
      if (creating.value) return;
      creating.value = true;
      feedbackMsg.value = "";
      try {
        const res = await $fetch("/api/hoxi/member/keys", {
          method: "POST",
          body: { action: "create", name: newKeyName.value || "Hoxi Key" }
        });
        newKeyName.value = "";
        if (res == null ? void 0 : res.rawKey) {
          revealedSecret.value = {
            name: ((_a = res == null ? void 0 : res.key) == null ? void 0 : _a.name) || "Hoxi Key",
            rawKey: res.rawKey
          };
        }
        await loadKeys();
      } catch (error) {
        feedbackMsg.value = ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
      } finally {
        creating.value = false;
      }
    }
    async function handleRevealKey(item) {
      var _a;
      try {
        const res = await $fetch("/api/hoxi/member/keys", {
          method: "POST",
          body: { action: "reveal", id: item.id }
        });
        if (res == null ? void 0 : res.rawKey) {
          revealedSecret.value = { name: item.name, rawKey: res.rawKey };
        }
      } catch (error) {
        feedbackMsg.value = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
      }
    }
    async function handleToggleStatus(item) {
      var _a;
      const nextStatus = item.status === 1 ? 0 : 1;
      try {
        await $fetch("/api/hoxi/member/keys", {
          method: "POST",
          body: { action: "status", id: item.id, status: nextStatus }
        });
        await loadKeys();
      } catch (error) {
        feedbackMsg.value = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
      }
    }
    async function handleRotateKey(item) {
      var _a;
      try {
        const res = await $fetch("/api/hoxi/member/keys", {
          method: "POST",
          body: { action: "rotate", id: item.id }
        });
        if (res == null ? void 0 : res.rawKey) {
          revealedSecret.value = { name: item.name, rawKey: res.rawKey };
        }
        await loadKeys();
      } catch (error) {
        feedbackMsg.value = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
      }
    }
    async function handleDeleteKey(item) {
      var _a;
      try {
        await $fetch("/api/hoxi/member/keys", {
          method: "POST",
          body: { action: "delete", id: item.id }
        });
        await loadKeys();
      } catch (error) {
        feedbackMsg.value = ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
      }
    }
    async function copyText(text) {
      return;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Y;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.member.keys.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.member.keys.title")), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-700 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.subtitle"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-700 dark:text-gray-400" }, toDisplayString(_ctx.$t("hoxi.member.keys.subtitle")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6 relative"${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden group"${_scopeId}><div class="absolute -right-24 -top-24 w-64 h-64 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6d4cff]/10 transition-colors duration-1000"${_scopeId}></div><div class="relative z-10"${_scopeId}><div class="text-xs font-medium text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.endpointLabel"))}</div><div class="mt-2 flex flex-wrap items-center gap-2.5"${_scopeId}><code class="px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 text-xs font-mono text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(endpointUrl.value)}</code><button type="button" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:copy-duotone",
              class: "w-4 h-4 text-[#6d4cff] dark:text-[#8ea3ff]"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.copy"))}</span></button></div></div><form class="flex flex-wrap items-center gap-2.5 relative z-10"${_scopeId}><input${ssrRenderAttr("value", newKeyName.value)} type="text"${ssrRenderAttr("placeholder", _ctx.$t("hoxi.member.keys.namePlaceholder"))} class="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]/50 min-w-[200px]"${_scopeId}><button type="submit" class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#6d4cff] hover:bg-[#5b3ee0] text-white text-xs font-semibold shadow-md shadow-[#6d4cff]/20 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-60"${ssrIncludeBooleanAttr(creating.value) ? " disabled" : ""}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:plus-bold",
              class: "w-3.5 h-3.5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(creating.value ? _ctx.$t("hoxi.member.common.loading") : _ctx.$t("hoxi.member.keys.createBtn"))}</span></button></form></div>`);
            if (revealedSecret.value) {
              _push2(`<div class="rounded-3xl border border-[#6d4cff]/30 bg-[#6d4cff]/10 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"${_scopeId}><div class="min-w-0"${_scopeId}><div class="text-xs font-semibold text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.secretBannerTitle"))} (${ssrInterpolate(revealedSecret.value.name)}) </div><div class="mt-2 font-mono text-xs break-all text-gray-900 dark:text-white bg-white/80 dark:bg-black/40 px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10"${_scopeId}>${ssrInterpolate(revealedSecret.value.rawKey)}</div></div><div class="flex items-center gap-2 shrink-0"${_scopeId}><button type="button" class="px-4 py-2 rounded-xl bg-[#6d4cff] hover:bg-[#5b3ee0] text-white text-xs font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.copy"))}</button><button type="button" class="px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs text-gray-700 dark:text-white/70"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.hide"))}</button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (feedbackMsg.value) {
              _push2(`<p class="text-xs text-[#6d4cff] dark:text-[#8ea3ff] px-1"${_scopeId}>${ssrInterpolate(feedbackMsg.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner"${_scopeId}>`);
            if (loading.value) {
              _push2(`<div class="p-16 text-center text-sm text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.common.loading"))}</div>`);
            } else if (!keys.value.length) {
              _push2(`<div class="p-16 text-center"${_scopeId}><div class="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mx-auto mb-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:key-duotone",
                class: "w-8 h-8 text-gray-400 dark:text-white/30"
              }, null, _parent2, _scopeId));
              _push2(`</div><p class="text-sm text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.empty"))}</p></div>`);
            } else {
              _push2(`<div class="overflow-x-auto"${_scopeId}><table class="w-full min-w-[760px] text-left border-collapse text-sm"${_scopeId}><thead${_scopeId}><tr class="border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50"${_scopeId}><th class="py-4 px-6 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.colName"))}</th><th class="py-4 px-6 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.colKey"))}</th><th class="py-4 px-6 font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.colStatus"))}</th><th class="py-4 px-6 font-medium text-right"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.colUsedPoints"))}</th><th class="py-4 px-6 font-medium text-right"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.colActions"))}</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-white/5"${_scopeId}><!--[-->`);
              ssrRenderList(keys.value, (item) => {
                _push2(`<tr class="hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group"${_scopeId}><td class="py-4 px-6 font-medium text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(item.name)}</td><td class="py-4 px-6 font-mono text-xs text-gray-600 dark:text-white/60"${_scopeId}>${ssrInterpolate(item.maskedKey)}</td><td class="py-4 px-6"${_scopeId}><span class="${ssrRenderClass([item.status === 1 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40 border border-gray-200 dark:border-white/10", "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"])}"${_scopeId}><span class="${ssrRenderClass([item.status === 1 ? "bg-emerald-500" : "bg-gray-400", "w-1.5 h-1.5 rounded-full"])}"${_scopeId}></span> ${ssrInterpolate(item.status === 1 ? _ctx.$t("hoxi.member.keys.statusEnabled") : _ctx.$t("hoxi.member.keys.statusDisabled"))}</span></td><td class="py-4 px-6 text-right font-mono tabular-nums text-gray-800 dark:text-white/80"${_scopeId}>${ssrInterpolate(unref(formatPoints)(item.quotaUsedPoints))} ${ssrInterpolate(_ctx.$t("hoxi.member.common.pointsUnit"))}</td><td class="py-4 px-6 text-right"${_scopeId}><div class="inline-flex items-center gap-1.5"${_scopeId}><button type="button" class="px-2.5 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.reveal"))}</button><button type="button" class="px-2.5 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition"${_scopeId}>${ssrInterpolate(item.status === 1 ? _ctx.$t("hoxi.member.keys.disable") : _ctx.$t("hoxi.member.keys.enable"))}</button><button type="button" class="px-2.5 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.rotate"))}</button><button type="button" class="px-2.5 py-1.5 rounded-xl border border-red-500/20 bg-red-500/10 text-xs text-red-600 dark:text-red-400 hover:bg-red-500/20 transition"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.keys.delete"))}</button></div></td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6 relative" }, [
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl p-6 lg:p-8 shadow-sm dark:shadow-inner flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden group" }, [
                  createVNode("div", { class: "absolute -right-24 -top-24 w-64 h-64 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6d4cff]/10 transition-colors duration-1000" }),
                  createVNode("div", { class: "relative z-10" }, [
                    createVNode("div", { class: "text-xs font-medium text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.keys.endpointLabel")), 1),
                    createVNode("div", { class: "mt-2 flex flex-wrap items-center gap-2.5" }, [
                      createVNode("code", { class: "px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 text-xs font-mono text-gray-900 dark:text-white" }, toDisplayString(endpointUrl.value), 1),
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-medium text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition",
                        onClick: ($event) => copyText(endpointUrl.value)
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:copy-duotone",
                          class: "w-4 h-4 text-[#6d4cff] dark:text-[#8ea3ff]"
                        }),
                        createVNode("span", null, toDisplayString(_ctx.$t("hoxi.member.keys.copy")), 1)
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("form", {
                    class: "flex flex-wrap items-center gap-2.5 relative z-10",
                    onSubmit: withModifiers(handleCreateKey, ["prevent"])
                  }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => newKeyName.value = $event,
                      type: "text",
                      placeholder: _ctx.$t("hoxi.member.keys.namePlaceholder"),
                      class: "px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]/50 min-w-[200px]"
                    }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                      [vModelText, newKeyName.value]
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#6d4cff] hover:bg-[#5b3ee0] text-white text-xs font-semibold shadow-md shadow-[#6d4cff]/20 transition-all hover:-translate-y-0.5 active:scale-95 disabled:opacity-60",
                      disabled: creating.value
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:plus-bold",
                        class: "w-3.5 h-3.5"
                      }),
                      createVNode("span", null, toDisplayString(creating.value ? _ctx.$t("hoxi.member.common.loading") : _ctx.$t("hoxi.member.keys.createBtn")), 1)
                    ], 8, ["disabled"])
                  ], 32)
                ]),
                revealedSecret.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-3xl border border-[#6d4cff]/30 bg-[#6d4cff]/10 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                }, [
                  createVNode("div", { class: "min-w-0" }, [
                    createVNode("div", { class: "text-xs font-semibold text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(_ctx.$t("hoxi.member.keys.secretBannerTitle")) + " (" + toDisplayString(revealedSecret.value.name) + ") ", 1),
                    createVNode("div", { class: "mt-2 font-mono text-xs break-all text-gray-900 dark:text-white bg-white/80 dark:bg-black/40 px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10" }, toDisplayString(revealedSecret.value.rawKey), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 shrink-0" }, [
                    createVNode("button", {
                      type: "button",
                      class: "px-4 py-2 rounded-xl bg-[#6d4cff] hover:bg-[#5b3ee0] text-white text-xs font-semibold",
                      onClick: ($event) => copyText(revealedSecret.value.rawKey)
                    }, toDisplayString(_ctx.$t("hoxi.member.keys.copy")), 9, ["onClick"]),
                    createVNode("button", {
                      type: "button",
                      class: "px-3.5 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs text-gray-700 dark:text-white/70",
                      onClick: ($event) => revealedSecret.value = null
                    }, toDisplayString(_ctx.$t("hoxi.member.keys.hide")), 9, ["onClick"])
                  ])
                ])) : createCommentVNode("", true),
                feedbackMsg.value ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-xs text-[#6d4cff] dark:text-[#8ea3ff] px-1"
                }, toDisplayString(feedbackMsg.value), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner" }, [
                  loading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "p-16 text-center text-sm text-gray-500 dark:text-white/50"
                  }, toDisplayString(_ctx.$t("hoxi.member.common.loading")), 1)) : !keys.value.length ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "p-16 text-center"
                  }, [
                    createVNode("div", { class: "w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex items-center justify-center mx-auto mb-4" }, [
                      createVNode(_component_UIcon, {
                        name: "ph:key-duotone",
                        class: "w-8 h-8 text-gray-400 dark:text-white/30"
                      })
                    ]),
                    createVNode("p", { class: "text-sm text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.keys.empty")), 1)
                  ])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "overflow-x-auto"
                  }, [
                    createVNode("table", { class: "w-full min-w-[760px] text-left border-collapse text-sm" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "border-b border-gray-100 bg-gray-50 text-xs text-gray-600 dark:border-white/5 dark:bg-black/10 dark:text-white/50" }, [
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.keys.colName")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.keys.colKey")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium" }, toDisplayString(_ctx.$t("hoxi.member.keys.colStatus")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.keys.colUsedPoints")), 1),
                          createVNode("th", { class: "py-4 px-6 font-medium text-right" }, toDisplayString(_ctx.$t("hoxi.member.keys.colActions")), 1)
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-white/5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(keys.value, (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.id,
                            class: "hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group"
                          }, [
                            createVNode("td", { class: "py-4 px-6 font-medium text-gray-900 dark:text-white" }, toDisplayString(item.name), 1),
                            createVNode("td", { class: "py-4 px-6 font-mono text-xs text-gray-600 dark:text-white/60" }, toDisplayString(item.maskedKey), 1),
                            createVNode("td", { class: "py-4 px-6" }, [
                              createVNode("span", {
                                class: ["inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", item.status === 1 ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40 border border-gray-200 dark:border-white/10"]
                              }, [
                                createVNode("span", {
                                  class: ["w-1.5 h-1.5 rounded-full", item.status === 1 ? "bg-emerald-500" : "bg-gray-400"]
                                }, null, 2),
                                createTextVNode(" " + toDisplayString(item.status === 1 ? _ctx.$t("hoxi.member.keys.statusEnabled") : _ctx.$t("hoxi.member.keys.statusDisabled")), 1)
                              ], 2)
                            ]),
                            createVNode("td", { class: "py-4 px-6 text-right font-mono tabular-nums text-gray-800 dark:text-white/80" }, toDisplayString(unref(formatPoints)(item.quotaUsedPoints)) + " " + toDisplayString(_ctx.$t("hoxi.member.common.pointsUnit")), 1),
                            createVNode("td", { class: "py-4 px-6 text-right" }, [
                              createVNode("div", { class: "inline-flex items-center gap-1.5" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "px-2.5 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition",
                                  onClick: ($event) => handleRevealKey(item)
                                }, toDisplayString(_ctx.$t("hoxi.member.keys.reveal")), 9, ["onClick"]),
                                createVNode("button", {
                                  type: "button",
                                  class: "px-2.5 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition",
                                  onClick: ($event) => handleToggleStatus(item)
                                }, toDisplayString(item.status === 1 ? _ctx.$t("hoxi.member.keys.disable") : _ctx.$t("hoxi.member.keys.enable")), 9, ["onClick"]),
                                createVNode("button", {
                                  type: "button",
                                  class: "px-2.5 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-xs text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 transition",
                                  onClick: ($event) => handleRotateKey(item)
                                }, toDisplayString(_ctx.$t("hoxi.member.keys.rotate")), 9, ["onClick"]),
                                createVNode("button", {
                                  type: "button",
                                  class: "px-2.5 py-1.5 rounded-xl border border-red-500/20 bg-red-500/10 text-xs text-red-600 dark:text-red-400 hover:bg-red-500/20 transition",
                                  onClick: ($event) => handleDeleteKey(item)
                                }, toDisplayString(_ctx.$t("hoxi.member.keys.delete")), 9, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]))
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/user/keys.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=keys-CpEvQd9a.mjs.map
