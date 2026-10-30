import { u as useI18n, bh as useUserSession, D as useLocaleRouter, bu as useSeoMeta, _ as _sfc_main$Y, aw as _sfc_main$W, o as navigateTo } from './server.mjs';
import { defineComponent, ref, computed, withCtx, unref, createVNode, toDisplayString, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useHoxiMember, _ as _sfc_main$1 } from './layout-Dxfcj7bO.mjs';
import { s as setInterval } from './interval-BBg9qvAV.mjs';
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
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { t } = useI18n();
    const { user, clear } = useUserSession();
    const { localePath } = useLocaleRouter();
    const { memberInfo, loadWalletOverview } = useHoxiMember();
    useSeoMeta({
      title: () => `${t("hoxi.member.account.title")} \xB7 ${t("hoxi.site.name")}`
    });
    const nickname = ref(String(((_a = user.value) == null ? void 0 : _a.nickname) || ""));
    const savingProfile = ref(false);
    const profileMsg = ref("");
    const oldPassword = ref("");
    const newPassword = ref("");
    const savingPassword = ref(false);
    const passwordMsg = ref("");
    const userAvatar = computed(
      () => {
        var _a2, _b;
        return ((_a2 = user.value) == null ? void 0 : _a2.avatarUrl) || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(String(((_b = user.value) == null ? void 0 : _b.email) || nickname.value || "hoxi"))}`;
      }
    );
    async function saveProfile() {
      var _a2;
      savingProfile.value = true;
      profileMsg.value = "";
      try {
        const res = await $fetch("/api/users/profile", {
          method: "PUT",
          body: { nickname: nickname.value }
        });
        profileMsg.value = (res == null ? void 0 : res.message) || t("hoxi.member.account.saved");
      } catch (error) {
        profileMsg.value = ((_a2 = error == null ? void 0 : error.data) == null ? void 0 : _a2.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
      } finally {
        savingProfile.value = false;
      }
    }
    async function savePassword() {
      var _a2;
      if (!oldPassword.value || !newPassword.value) return;
      savingPassword.value = true;
      passwordMsg.value = "";
      try {
        const res = await $fetch("/api/users/password", {
          method: "PUT",
          body: { oldPassword: oldPassword.value, newPassword: newPassword.value }
        });
        passwordMsg.value = (res == null ? void 0 : res.message) || t("hoxi.member.account.saved");
        oldPassword.value = "";
        newPassword.value = "";
      } catch (error) {
        passwordMsg.value = ((_a2 = error == null ? void 0 : error.data) == null ? void 0 : _a2.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
      } finally {
        savingPassword.value = false;
      }
    }
    const emailVerified = computed(() => {
      var _a2, _b;
      const fromMember = (_a2 = memberInfo.value) == null ? void 0 : _a2.emailVerified;
      if (typeof fromMember === "boolean") return fromMember;
      return Boolean((_b = user.value) == null ? void 0 : _b.emailVerified);
    });
    const sendingVerify = ref(false);
    const verifyMsg = ref("");
    const verifyCooldown = ref(0);
    let cooldownTimer = null;
    const resendButtonLabel = computed(() => {
      if (sendingVerify.value) return t("hoxi.member.account.resendingVerify");
      if (verifyCooldown.value > 0) return t("hoxi.member.account.resendVerifyCooldown", { sec: verifyCooldown.value });
      return t("hoxi.member.account.resendVerify");
    });
    function startVerifyCooldown(seconds) {
      if (cooldownTimer) clearInterval(cooldownTimer);
      verifyCooldown.value = Math.max(0, Math.floor(seconds) || 0);
      if (verifyCooldown.value <= 0) return;
      cooldownTimer = setInterval();
    }
    async function resendVerification() {
      var _a2, _b, _c;
      if (sendingVerify.value || verifyCooldown.value > 0) return;
      sendingVerify.value = true;
      verifyMsg.value = "";
      try {
        const res = await $fetch("/api/auth/resend-verification", {
          method: "POST"
        });
        if (res == null ? void 0 : res.alreadyVerified) {
          verifyMsg.value = res.message || t("hoxi.member.account.emailVerifiedStatus");
          await loadWalletOverview();
        } else {
          verifyMsg.value = t("hoxi.member.account.resendVerifySent");
          startVerifyCooldown(Number(res == null ? void 0 : res.cooldownSeconds) || 60);
        }
      } catch (error) {
        const status = (error == null ? void 0 : error.statusCode) || ((_a2 = error == null ? void 0 : error.response) == null ? void 0 : _a2.status);
        if (status === 429) {
          verifyMsg.value = ((_b = error == null ? void 0 : error.data) == null ? void 0 : _b.message) || t("hoxi.member.account.resendVerifyCooldown", { sec: 60 });
          startVerifyCooldown(60);
        } else {
          verifyMsg.value = ((_c = error == null ? void 0 : error.data) == null ? void 0 : _c.message) || (error == null ? void 0 : error.message) || t("hoxi.member.common.actionFailed");
        }
      } finally {
        sendingVerify.value = false;
      }
    }
    async function handleLogout() {
      await $fetch("/api/auth/logout", { method: "POST" }).catch(() => {
      });
      await clear().catch(() => {
      });
      await navigateTo(localePath("/auth/login"));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$Y;
      const _component_UAvatar = _sfc_main$W;
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("hoxi.member.account.title"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("hoxi.member.account.title")), 1)
            ];
          }
        }),
        subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-700 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.subtitle"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-700 dark:text-gray-400" }, toDisplayString(_ctx.$t("hoxi.member.account.subtitle")), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-5"${_scopeId}><div class="space-y-5"${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner relative group"${_scopeId}><div class="absolute -right-16 -top-16 w-60 h-60 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6d4cff]/10 transition-colors duration-1000"${_scopeId}></div><div class="px-6 py-5 border-b border-gray-100 dark:border-white/5 flex items-center gap-3 relative z-10 bg-gray-50 dark:bg-black/10"${_scopeId}><div class="w-10 h-10 rounded-xl bg-[#6d4cff]/10 flex items-center justify-center text-[#6d4cff] dark:text-[#8ea3ff] border border-[#6d4cff]/20 dark:border-[#8ea3ff]/20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:user-circle-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.profileTitle"))}</h3><p class="text-xs text-gray-600 dark:text-white/50 mt-0.5"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.subtitle"))}</p></div></div><form class="p-6 space-y-6 relative z-10"${_scopeId}><div class="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 relative overflow-hidden"${_scopeId}><div class="relative shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: userAvatar.value,
              alt: nickname.value || ((_a2 = unref(user)) == null ? void 0 : _a2.email) || "Hoxi",
              size: "3xl",
              class: "ring-4 ring-white dark:ring-white/5 shadow-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 text-center sm:text-left"${_scopeId}><div class="text-base font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(nickname.value || ((_b = unref(user)) == null ? void 0 : _b.email) || _ctx.$t("hoxi.member.shell.guest"))}</div><p class="mt-1 text-xs font-mono text-gray-500 dark:text-white/55"${_scopeId}>${ssrInterpolate(((_c = unref(user)) == null ? void 0 : _c.email) || "")}</p></div></div><div class="grid gap-6 sm:grid-cols-2"${_scopeId}><div${_scopeId}><label class="block text-xs font-medium text-gray-700 dark:text-white/50 mb-2 ml-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.nicknameLabel"))}</label><input${ssrRenderAttr("value", nickname.value)} type="text" class="w-full h-12 bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 focus:border-[#6d4cff]/50 transition-all text-gray-900 dark:text-white rounded-xl px-4 text-sm focus:outline-none"${_scopeId}></div><div${_scopeId}><label class="block text-xs font-medium text-gray-700 dark:text-white/50 mb-2 ml-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.emailLabel"))}</label><div class="h-12 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 text-gray-700 dark:text-white/55 rounded-xl px-4 flex items-center text-sm font-mono truncate"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:envelope-duotone",
              class: "w-4 h-4 mr-2 text-[#6d4cff] shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`<span class="truncate"${_scopeId}>${ssrInterpolate(((_d = unref(user)) == null ? void 0 : _d.email) || "")}</span></div></div></div><div class="${ssrRenderClass([emailVerified.value ? "border-emerald-500/20 bg-emerald-500/5" : "border-amber-500/20 bg-amber-500/10", "flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border transition-colors"])}"${_scopeId}><div class="${ssrRenderClass([emailVerified.value ? "text-emerald-700 dark:text-emerald-300" : "text-amber-700 dark:text-amber-300", "flex items-center gap-2.5 text-xs sm:text-sm"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: emailVerified.value ? "ph:seal-check-duotone" : "ph:warning-circle-duotone",
              class: "w-5 h-5 shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(emailVerified.value ? _ctx.$t("hoxi.member.account.emailVerifiedStatus") : _ctx.$t("hoxi.member.account.emailUnverifiedHint"))}</span></div>`);
            if (!emailVerified.value) {
              _push2(`<div class="flex items-center gap-3 shrink-0 sm:justify-end"${_scopeId}>`);
              if (verifyMsg.value) {
                _push2(`<span class="text-xs text-amber-800 dark:text-amber-200"${_scopeId}>${ssrInterpolate(verifyMsg.value)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="button" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-amber-500/30 text-xs font-medium text-amber-800 dark:text-amber-200 hover:bg-amber-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition"${ssrIncludeBooleanAttr(sendingVerify.value || verifyCooldown.value > 0) ? " disabled" : ""}${_scopeId}>`);
              if (sendingVerify.value) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:spinner-gap-bold",
                  class: "w-3.5 h-3.5 animate-spin"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${ssrInterpolate(resendButtonLabel.value)}</span></button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="pt-6 flex items-center justify-between border-t border-gray-100 dark:border-white/5"${_scopeId}><span class="text-xs text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(profileMsg.value)}</span><button type="submit" class="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-slate-100 text-white dark:text-black rounded-xl px-6 py-3 shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-xs font-semibold disabled:opacity-60"${ssrIncludeBooleanAttr(savingProfile.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.saveProfile"))}</button></div></form></div></div><div class="space-y-5"${_scopeId}><div class="bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner relative group h-full flex flex-col"${_scopeId}><div class="absolute -left-10 -bottom-10 w-48 h-48 bg-[#b496ff]/5 rounded-full blur-[100px] pointer-events-none"${_scopeId}></div><div class="px-6 py-5 border-b border-gray-100 dark:border-white/5 flex items-center gap-3 relative z-10 bg-gray-50 dark:bg-black/10"${_scopeId}><div class="w-10 h-10 rounded-xl bg-[#b496ff]/10 flex items-center justify-center text-[#b496ff] border border-[#b496ff]/20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:shield-check-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h3 class="text-lg font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.passwordTitle"))}</h3><p class="text-xs text-gray-600 dark:text-white/50 mt-0.5"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.passwordHint"))}</p></div></div><div class="p-6 space-y-4 relative z-10 flex-1 flex flex-col"${_scopeId}><form class="p-5 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 flex flex-col gap-3"${_scopeId}><div${_scopeId}><label class="block text-xs text-gray-600 dark:text-white/50 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.oldPassword"))}</label><input${ssrRenderAttr("value", oldPassword.value)} type="password" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]/50"${_scopeId}></div><div${_scopeId}><label class="block text-xs text-gray-600 dark:text-white/50 mb-1"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.newPassword"))}</label><input${ssrRenderAttr("value", newPassword.value)} type="password" class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]/50"${_scopeId}></div><div class="flex items-center justify-between pt-2"${_scopeId}><span class="text-xs text-[#6d4cff] dark:text-[#8ea3ff]"${_scopeId}>${ssrInterpolate(passwordMsg.value)}</span><button type="submit" class="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-xs font-semibold text-gray-800 dark:text-white transition-all hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black active:scale-95"${ssrIncludeBooleanAttr(savingPassword.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.updatePassword"))}</button></div></form><div class="p-5 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 flex flex-col gap-4 flex-1 justify-between"${_scopeId}><div class="flex items-center justify-between gap-3"${_scopeId}><div class="flex items-center gap-3 text-gray-900 dark:text-white"${_scopeId}><div class="w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-500 dark:text-emerald-400 border border-emerald-500/20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:activity-duotone",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><span class="text-sm font-medium"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.accountStatus"))}</span></div><div class="flex items-center gap-2 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20"${_scopeId}><span class="relative flex h-2 w-2"${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"${_scopeId}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"${_scopeId}></span></span><span class="text-xs text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.activeStatus"))}</span></div></div><div class="pt-3 border-t border-gray-200/60 dark:border-white/5 flex items-center justify-between gap-3"${_scopeId}><span class="text-xs text-gray-500 dark:text-white/50"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.logoutDesc"))}</span><button type="button" class="px-4 py-2 rounded-xl border border-red-500/20 bg-red-500/10 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-500/20 transition"${_scopeId}>${ssrInterpolate(_ctx.$t("hoxi.member.account.logoutBtn"))}</button></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-5" }, [
                createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner relative group" }, [
                    createVNode("div", { class: "absolute -right-16 -top-16 w-60 h-60 bg-[#6d4cff]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#6d4cff]/10 transition-colors duration-1000" }),
                    createVNode("div", { class: "px-6 py-5 border-b border-gray-100 dark:border-white/5 flex items-center gap-3 relative z-10 bg-gray-50 dark:bg-black/10" }, [
                      createVNode("div", { class: "w-10 h-10 rounded-xl bg-[#6d4cff]/10 flex items-center justify-center text-[#6d4cff] dark:text-[#8ea3ff] border border-[#6d4cff]/20 dark:border-[#8ea3ff]/20" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:user-circle-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.account.profileTitle")), 1),
                        createVNode("p", { class: "text-xs text-gray-600 dark:text-white/50 mt-0.5" }, toDisplayString(_ctx.$t("hoxi.member.account.subtitle")), 1)
                      ])
                    ]),
                    createVNode("form", {
                      class: "p-6 space-y-6 relative z-10",
                      onSubmit: withModifiers(saveProfile, ["prevent"])
                    }, [
                      createVNode("div", { class: "flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 relative overflow-hidden" }, [
                        createVNode("div", { class: "relative shrink-0" }, [
                          createVNode(_component_UAvatar, {
                            src: userAvatar.value,
                            alt: nickname.value || ((_e = unref(user)) == null ? void 0 : _e.email) || "Hoxi",
                            size: "3xl",
                            class: "ring-4 ring-white dark:ring-white/5 shadow-xl"
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "flex-1 text-center sm:text-left" }, [
                          createVNode("div", { class: "text-base font-semibold text-gray-900 dark:text-white" }, toDisplayString(nickname.value || ((_f = unref(user)) == null ? void 0 : _f.email) || _ctx.$t("hoxi.member.shell.guest")), 1),
                          createVNode("p", { class: "mt-1 text-xs font-mono text-gray-500 dark:text-white/55" }, toDisplayString(((_g = unref(user)) == null ? void 0 : _g.email) || ""), 1)
                        ])
                      ]),
                      createVNode("div", { class: "grid gap-6 sm:grid-cols-2" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs font-medium text-gray-700 dark:text-white/50 mb-2 ml-1" }, toDisplayString(_ctx.$t("hoxi.member.account.nicknameLabel")), 1),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => nickname.value = $event,
                            type: "text",
                            class: "w-full h-12 bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 focus:border-[#6d4cff]/50 transition-all text-gray-900 dark:text-white rounded-xl px-4 text-sm focus:outline-none"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, nickname.value]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs font-medium text-gray-700 dark:text-white/50 mb-2 ml-1" }, toDisplayString(_ctx.$t("hoxi.member.account.emailLabel")), 1),
                          createVNode("div", { class: "h-12 bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 text-gray-700 dark:text-white/55 rounded-xl px-4 flex items-center text-sm font-mono truncate" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:envelope-duotone",
                              class: "w-4 h-4 mr-2 text-[#6d4cff] shrink-0"
                            }),
                            createVNode("span", { class: "truncate" }, toDisplayString(((_h = unref(user)) == null ? void 0 : _h.email) || ""), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", {
                        class: ["flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border transition-colors", emailVerified.value ? "border-emerald-500/20 bg-emerald-500/5" : "border-amber-500/20 bg-amber-500/10"]
                      }, [
                        createVNode("div", {
                          class: ["flex items-center gap-2.5 text-xs sm:text-sm", emailVerified.value ? "text-emerald-700 dark:text-emerald-300" : "text-amber-700 dark:text-amber-300"]
                        }, [
                          createVNode(_component_UIcon, {
                            name: emailVerified.value ? "ph:seal-check-duotone" : "ph:warning-circle-duotone",
                            class: "w-5 h-5 shrink-0"
                          }, null, 8, ["name"]),
                          createVNode("span", null, toDisplayString(emailVerified.value ? _ctx.$t("hoxi.member.account.emailVerifiedStatus") : _ctx.$t("hoxi.member.account.emailUnverifiedHint")), 1)
                        ], 2),
                        !emailVerified.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-3 shrink-0 sm:justify-end"
                        }, [
                          verifyMsg.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-amber-800 dark:text-amber-200"
                          }, toDisplayString(verifyMsg.value), 1)) : createCommentVNode("", true),
                          createVNode("button", {
                            type: "button",
                            class: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-amber-500/30 text-xs font-medium text-amber-800 dark:text-amber-200 hover:bg-amber-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition",
                            disabled: sendingVerify.value || verifyCooldown.value > 0,
                            onClick: resendVerification
                          }, [
                            sendingVerify.value ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: "ph:spinner-gap-bold",
                              class: "w-3.5 h-3.5 animate-spin"
                            })) : createCommentVNode("", true),
                            createVNode("span", null, toDisplayString(resendButtonLabel.value), 1)
                          ], 8, ["disabled"])
                        ])) : createCommentVNode("", true)
                      ], 2),
                      createVNode("div", { class: "pt-6 flex items-center justify-between border-t border-gray-100 dark:border-white/5" }, [
                        createVNode("span", { class: "text-xs text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(profileMsg.value), 1),
                        createVNode("button", {
                          type: "submit",
                          class: "bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-slate-100 text-white dark:text-black rounded-xl px-6 py-3 shadow-md transition-all hover:-translate-y-0.5 active:scale-95 text-xs font-semibold disabled:opacity-60",
                          disabled: savingProfile.value
                        }, toDisplayString(_ctx.$t("hoxi.member.account.saveProfile")), 9, ["disabled"])
                      ])
                    ], 32)
                  ])
                ]),
                createVNode("div", { class: "space-y-5" }, [
                  createVNode("div", { class: "bg-white dark:bg-[#1a1a1e] border border-gray-100 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm dark:shadow-inner relative group h-full flex flex-col" }, [
                    createVNode("div", { class: "absolute -left-10 -bottom-10 w-48 h-48 bg-[#b496ff]/5 rounded-full blur-[100px] pointer-events-none" }),
                    createVNode("div", { class: "px-6 py-5 border-b border-gray-100 dark:border-white/5 flex items-center gap-3 relative z-10 bg-gray-50 dark:bg-black/10" }, [
                      createVNode("div", { class: "w-10 h-10 rounded-xl bg-[#b496ff]/10 flex items-center justify-center text-[#b496ff] border border-[#b496ff]/20" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:shield-check-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-semibold text-gray-900 dark:text-white" }, toDisplayString(_ctx.$t("hoxi.member.account.passwordTitle")), 1),
                        createVNode("p", { class: "text-xs text-gray-600 dark:text-white/50 mt-0.5" }, toDisplayString(_ctx.$t("hoxi.member.account.passwordHint")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "p-6 space-y-4 relative z-10 flex-1 flex flex-col" }, [
                      createVNode("form", {
                        class: "p-5 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 flex flex-col gap-3",
                        onSubmit: withModifiers(savePassword, ["prevent"])
                      }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs text-gray-600 dark:text-white/50 mb-1" }, toDisplayString(_ctx.$t("hoxi.member.account.oldPassword")), 1),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => oldPassword.value = $event,
                            type: "password",
                            class: "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]/50"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, oldPassword.value]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs text-gray-600 dark:text-white/50 mb-1" }, toDisplayString(_ctx.$t("hoxi.member.account.newPassword")), 1),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => newPassword.value = $event,
                            type: "password",
                            class: "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black/40 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-[#6d4cff]/50"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, newPassword.value]
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between pt-2" }, [
                          createVNode("span", { class: "text-xs text-[#6d4cff] dark:text-[#8ea3ff]" }, toDisplayString(passwordMsg.value), 1),
                          createVNode("button", {
                            type: "submit",
                            class: "rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2 text-xs font-semibold text-gray-800 dark:text-white transition-all hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black active:scale-95",
                            disabled: savingPassword.value
                          }, toDisplayString(_ctx.$t("hoxi.member.account.updatePassword")), 9, ["disabled"])
                        ])
                      ], 32),
                      createVNode("div", { class: "p-5 rounded-2xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5 flex flex-col gap-4 flex-1 justify-between" }, [
                        createVNode("div", { class: "flex items-center justify-between gap-3" }, [
                          createVNode("div", { class: "flex items-center gap-3 text-gray-900 dark:text-white" }, [
                            createVNode("div", { class: "w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-500 dark:text-emerald-400 border border-emerald-500/20" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:activity-duotone",
                                class: "w-4 h-4"
                              })
                            ]),
                            createVNode("span", { class: "text-sm font-medium" }, toDisplayString(_ctx.$t("hoxi.member.account.accountStatus")), 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-2 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20" }, [
                            createVNode("span", { class: "relative flex h-2 w-2" }, [
                              createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
                              createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
                            ]),
                            createVNode("span", { class: "text-xs text-emerald-600 dark:text-emerald-400" }, toDisplayString(_ctx.$t("hoxi.member.account.activeStatus")), 1)
                          ])
                        ]),
                        createVNode("div", { class: "pt-3 border-t border-gray-200/60 dark:border-white/5 flex items-center justify-between gap-3" }, [
                          createVNode("span", { class: "text-xs text-gray-500 dark:text-white/50" }, toDisplayString(_ctx.$t("hoxi.member.account.logoutDesc")), 1),
                          createVNode("button", {
                            type: "button",
                            class: "px-4 py-2 rounded-xl border border-red-500/20 bg-red-500/10 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-500/20 transition",
                            onClick: handleLogout
                          }, toDisplayString(_ctx.$t("hoxi.member.account.logoutBtn")), 1)
                        ])
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/pages/user/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=account-DvQ2aDHF.mjs.map
