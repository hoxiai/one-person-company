import { bm as useUserSession, t as useSettings, g as useToast, e as useI18n, aL as useLocaleRouter, b as _sfc_main$E, k as _sfc_main$z } from './server.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EmailVerificationBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const { user, loggedIn, ready, fetch } = useUserSession();
    const { getSetting } = useSettings();
    const toast = useToast();
    const { t } = useI18n();
    useLocaleRouter();
    const isSending = ref(false);
    const isRefreshing = ref(false);
    const isLoggingOut = ref(false);
    const cooldown = ref(0);
    let timer = null;
    const policy = computed(() => {
      return getSetting("email_verify_policy") || "banner";
    });
    const isVerified = computed(() => {
      if (!user.value) return true;
      const u = user.value;
      return Boolean(u.emailVerifiedAt || u.emailVerified);
    });
    const userEmail = computed(() => {
      var _a;
      return ((_a = user.value) == null ? void 0 : _a.email) || "";
    });
    const showSoftBanner = computed(() => {
      if (!ready.value || !loggedIn.value || !user.value) return false;
      if (policy.value !== "banner") return false;
      return !isVerified.value;
    });
    const showStrictModal = computed(() => {
      if (!ready.value || !loggedIn.value || !user.value) return false;
      if (policy.value !== "strict") return false;
      return !isVerified.value;
    });
    const startCooldown = (seconds = 60) => {
      cooldown.value = seconds;
      if (timer) clearInterval(timer);
      timer = setInterval();
    };
    const resendEmail = async () => {
      var _a;
      if (cooldown.value > 0 || isSending.value) return;
      isSending.value = true;
      try {
        const res = await $fetch("/api/auth/resend-verification", {
          method: "POST",
          body: {
            email: userEmail.value
          }
        });
        if (res == null ? void 0 : res.alreadyVerified) {
          toast.add({
            title: t("site.auth.email_verification.already_verified"),
            color: "success"
          });
          await fetch();
          return;
        }
        startCooldown((res == null ? void 0 : res.cooldownSeconds) || 60);
        toast.add({
          title: t("site.auth.email_verification.toast_sent_title"),
          description: t("site.auth.email_verification.toast_sent_desc", { email: userEmail.value }),
          color: "success"
        });
      } catch (err) {
        const errMsg = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.message) || (err == null ? void 0 : err.message) || t("site.auth.email_verification.toast_failed");
        toast.add({
          title: t("common.error"),
          description: errMsg,
          color: "error"
        });
      } finally {
        isSending.value = false;
      }
    };
    const refreshVerificationStatus = async () => {
      var _a, _b;
      if (isRefreshing.value) return;
      isRefreshing.value = true;
      try {
        const res = await $fetch("/api/auth/me");
        await fetch();
        const verified = Boolean(((_a = res == null ? void 0 : res.user) == null ? void 0 : _a.emailVerified) || ((_b = res == null ? void 0 : res.user) == null ? void 0 : _b.emailVerifiedAt) || isVerified.value);
        if (verified) {
          toast.add({
            title: t("site.auth.email_verification.verified_success"),
            color: "success"
          });
        } else {
          toast.add({
            title: t("site.auth.email_verification.still_unverified"),
            color: "warning"
          });
        }
      } catch {
        toast.add({
          title: t("site.auth.email_verification.still_unverified"),
          color: "warning"
        });
      } finally {
        isRefreshing.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$E;
      const _component_UButton = _sfc_main$z;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (showSoftBanner.value) {
        _push(`<div class="w-full bg-amber-500/10 dark:bg-amber-950/40 border-b border-amber-500/20 dark:border-amber-800/40 px-4 py-2 transition-all duration-300 relative z-30"><div class="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm"><div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-medium truncate">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:envelope-simple-fill",
          class: "w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400"
        }, null, _parent));
        _push(`<span class="truncate">${ssrInterpolate(_ctx.$t("site.auth.email_verification.banner_unverified"))}</span></div><div class="flex items-center gap-2 shrink-0">`);
        _push(ssrRenderComponent(_component_UButton, {
          size: "xs",
          color: "warning",
          variant: "soft",
          class: "rounded-lg font-medium shadow-xs text-xs",
          loading: isSending.value,
          disabled: cooldown.value > 0,
          onClick: resendEmail
        }, {
          leading: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:paper-plane-tilt-bold",
                class: "w-3.5 h-3.5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:paper-plane-tilt-bold",
                  class: "w-3.5 h-3.5"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(cooldown.value > 0 ? _ctx.$t("site.auth.email_verification.resend_cooldown", { seconds: cooldown.value }) : isSending.value ? _ctx.$t("site.auth.email_verification.resending") : _ctx.$t("site.auth.email_verification.resend_btn"))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(cooldown.value > 0 ? _ctx.$t("site.auth.email_verification.resend_cooldown", { seconds: cooldown.value }) : isSending.value ? _ctx.$t("site.auth.email_verification.resending") : _ctx.$t("site.auth.email_verification.resend_btn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showStrictModal.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/10 dark:bg-black/55 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true"><div class="w-full max-w-md bg-white dark:bg-[#121214] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden p-6 sm:p-8 text-center space-y-6 animate-scale-in"><div class="mx-auto w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:envelope-open-duotone",
          class: "w-8 h-8"
        }, null, _parent));
        _push(`</div><div class="space-y-2"><h3 class="text-xl font-bold text-gray-900 dark:text-white tracking-tight">${ssrInterpolate(_ctx.$t("site.auth.email_verification.strict_modal_title"))}</h3><p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">${ssrInterpolate(_ctx.$t("site.auth.email_verification.strict_modal_desc"))}</p>`);
        if (userEmail.value) {
          _push(`<div class="inline-block mt-2 px-3 py-1 bg-gray-100 dark:bg-gray-800/80 rounded-full text-xs font-mono text-gray-700 dark:text-gray-300">${ssrInterpolate(userEmail.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-3 pt-2">`);
        _push(ssrRenderComponent(_component_UButton, {
          block: "",
          size: "lg",
          color: "primary",
          class: "rounded-xl font-semibold shadow-md py-3",
          loading: isSending.value,
          disabled: cooldown.value > 0,
          onClick: resendEmail
        }, {
          leading: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:paper-plane-tilt-bold",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:paper-plane-tilt-bold",
                  class: "w-4 h-4"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(cooldown.value > 0 ? _ctx.$t("site.auth.email_verification.resend_cooldown", { seconds: cooldown.value }) : isSending.value ? _ctx.$t("site.auth.email_verification.resending") : _ctx.$t("site.auth.email_verification.resend_btn"))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(cooldown.value > 0 ? _ctx.$t("site.auth.email_verification.resend_cooldown", { seconds: cooldown.value }) : isSending.value ? _ctx.$t("site.auth.email_verification.resending") : _ctx.$t("site.auth.email_verification.resend_btn")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          block: "",
          size: "lg",
          color: "neutral",
          variant: "soft",
          class: "rounded-xl font-semibold py-3",
          loading: isRefreshing.value,
          onClick: refreshVerificationStatus
        }, {
          leading: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-clockwise-bold",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-clockwise-bold",
                  class: "w-4 h-4"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("site.auth.email_verification.refresh_status"))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(_ctx.$t("site.auth.email_verification.refresh_status")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="pt-2 border-t border-gray-100 dark:border-gray-800/80"><button type="button" class="text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"${ssrIncludeBooleanAttr(isLoggingOut.value) ? " disabled" : ""}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sign-out",
          class: "w-3.5 h-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("site.auth.email_verification.logout_btn"))}</span></button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EmailVerificationBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "EmailVerificationBanner" });

export { __nuxt_component_0 as _ };
