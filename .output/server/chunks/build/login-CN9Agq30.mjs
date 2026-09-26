import { v as useSettings, j as useAdminExtensions, K as useAdminSession, f as useI18n, w as useAsyncData, D as useRoute, s as useRouter, L as firstAllowedAdminRoute, r as navigateTo, b as _sfc_main$G, q as _sfc_main$s } from './server.mjs';
import { defineComponent, withAsyncContext, reactive, ref, computed, unref, mergeProps, watch, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAdminLocale } from './useAdminLocale-BMByEm3b.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CaptchaSlider",
  __ssrInlineRender: true,
  emits: ["success", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const isOpen = ref(false);
    const status = ref("idle");
    const token = ref("");
    const imgBackSrc = ref("");
    const imgPieceSrc = ref("");
    const pieceTop = ref(0);
    const moveBlockLeft = ref(0);
    const errorMsg = ref("");
    const containerRef = ref(null);
    const { locale } = useI18n();
    const isZh = computed(() => (locale.value || "").startsWith("zh"));
    let isDragging = false;
    let startX = 0;
    let startLeft = 0;
    let scaleRatio = 1;
    function show() {
      isOpen.value = true;
      fetchCaptcha();
    }
    function close() {
      isOpen.value = false;
      emit("close");
    }
    watch(isOpen, (val) => {
      if (!val) {
        emit("close");
      }
    });
    async function fetchCaptcha() {
      var _a;
      status.value = "loading";
      moveBlockLeft.value = 0;
      errorMsg.value = "";
      try {
        const res = await $fetch("/api/auth/captcha/get");
        if ((res == null ? void 0 : res.success) && res.data) {
          token.value = res.data.token;
          imgBackSrc.value = res.data.bg;
          imgPieceSrc.value = res.data.pieceImg;
          pieceTop.value = res.data.pieceY;
          status.value = "idle";
        } else {
          throw new Error(isZh.value ? "\u83B7\u53D6\u9A8C\u8BC1\u7801\u5931\u8D25" : "Failed to fetch captcha");
        }
      } catch (err) {
        status.value = "error";
        errorMsg.value = ((_a = err.data) == null ? void 0 : _a.message) || err.message || (isZh.value ? "\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0" : "Load failed");
      }
    }
    function getClientX(evt) {
      if ("touches" in evt && evt.touches.length > 0) {
        return evt.touches[0].clientX;
      }
      return evt.clientX;
    }
    function startDrag(e) {
      if (status.value === "loading" || status.value === "verifying" || status.value === "success") {
        return;
      }
      isDragging = true;
      startX = getClientX(e);
      startLeft = moveBlockLeft.value;
      if (containerRef.value) {
        const rect = containerRef.value.getBoundingClientRect();
        scaleRatio = rect.width > 0 ? rect.width / 330 : 1;
      }
      const onMove = (evt) => {
        if (!isDragging) return;
        const currentX = getClientX(evt);
        const delta = (currentX - startX) / scaleRatio;
        const nextLeft = Math.max(0, Math.min(startLeft + delta, 278));
        moveBlockLeft.value = nextLeft;
      };
      const onEnd = async () => {
        if (!isDragging) return;
        isDragging = false;
        (void 0).removeEventListener("mousemove", onMove);
        (void 0).removeEventListener("mouseup", onEnd);
        (void 0).removeEventListener("touchmove", onMove);
        (void 0).removeEventListener("touchend", onEnd);
        await submitVerify();
      };
      if (e.type === "mousedown") {
        (void 0).addEventListener("mousemove", onMove);
        (void 0).addEventListener("mouseup", onEnd);
      } else {
        (void 0).addEventListener("touchmove", onMove, { passive: false });
        (void 0).addEventListener("touchend", onEnd);
      }
    }
    async function submitVerify() {
      var _a;
      status.value = "verifying";
      try {
        const res = await $fetch("/api/auth/captcha/check", {
          method: "POST",
          body: {
            token: token.value,
            moveX: Math.round(moveBlockLeft.value)
          }
        });
        if ((res == null ? void 0 : res.success) && res.ticket) {
          status.value = "success";
          setTimeout(() => {
            emit("success", res.ticket);
            close();
          }, 400);
        } else {
          throw new Error(isZh.value ? "\u9A8C\u8BC1\u5931\u8D25" : "Verification failed");
        }
      } catch (err) {
        status.value = "error";
        errorMsg.value = ((_a = err.data) == null ? void 0 : _a.message) || err.message || (isZh.value ? "\u672A\u5BF9\u9F50\uFF0C\u8BF7\u91CD\u8BD5" : "Position mismatch");
        setTimeout(() => {
          fetchCaptcha();
        }, 700);
      }
    }
    __expose({
      show,
      close,
      fetchCaptcha
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$s;
      const _component_UIcon = _sfc_main$G;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        ui: {
          overlay: "bg-black/50 dark:bg-black/75 backdrop-blur-sm",
          content: "bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden w-full max-w-[380px]"
        }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 text-gray-900 dark:text-white w-full max-w-[380px] mx-auto select-none"${_scopeId}><div class="flex items-center justify-between mb-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:shield-check-bold",
              class: "w-5 h-5 text-emerald-500 dark:text-emerald-400"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(unref(isZh) ? "\u5B89\u5168\u9A8C\u8BC1" : "Security Verification")}</h3></div><div class="flex items-center gap-1"${_scopeId}><button type="button" class="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"${ssrRenderAttr("title", unref(isZh) ? "\u5237\u65B0\u9A8C\u8BC1\u7801" : "Refresh captcha")}${ssrIncludeBooleanAttr(unref(status) === "loading") ? " disabled" : ""}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrows-clockwise-bold",
              class: ["w-4 h-4", { "animate-spin": unref(status) === "loading" }]
            }, null, _parent2, _scopeId));
            _push2(`</button><button type="button" class="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"${ssrRenderAttr("title", unref(isZh) ? "\u5173\u95ED" : "Close")}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:x-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div><p class="text-xs text-gray-500 dark:text-gray-400 mb-4"${_scopeId}>${ssrInterpolate(unref(isZh) ? "\u62D6\u52A8\u4E0B\u65B9\u6ED1\u5757\uFF0C\u5C06\u62FC\u56FE\u5B8C\u6574\u5D4C\u5165\u7F3A\u53E3" : "Drag the slider to fit the piece into the slot")}</p><div class="relative w-[330px] h-[155px] mx-auto mb-4 bg-gray-100 dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-inner"${_scopeId}>`);
            if (unref(imgBackSrc)) {
              _push2(`<img${ssrRenderAttr("src", unref(imgBackSrc))} class="w-full h-full object-cover block pointer-events-none" alt="captcha-bg"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(imgPieceSrc)) {
              _push2(`<img${ssrRenderAttr("src", unref(imgPieceSrc))} class="absolute z-20 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]" style="${ssrRenderStyle({
                top: `${unref(pieceTop)}px`,
                left: 0,
                transform: `translateX(${unref(moveBlockLeft)}px)`,
                width: "52px",
                height: "52px"
              })}" alt="captcha-piece"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(status) === "loading") {
              _push2(`<div class="absolute inset-0 bg-white/80 dark:bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-2 z-30"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner-gap-bold",
                class: "w-6 h-6 text-gray-800 dark:text-white animate-spin"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-xs text-gray-600 dark:text-gray-300 font-medium"${_scopeId}>${ssrInterpolate(unref(isZh) ? "\u6B63\u5728\u52A0\u8F7D\u5B89\u5168\u51ED\u636E..." : "Loading challenge...")}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(status) === "success") {
              _push2(`<div class="absolute inset-0 bg-emerald-600/90 dark:bg-emerald-950/85 backdrop-blur-sm flex items-center justify-center gap-2 z-30 transition-all duration-300"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:check-circle-fill",
                class: "w-7 h-7 text-white dark:text-emerald-400"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm font-medium text-white dark:text-emerald-200"${_scopeId}>${ssrInterpolate(unref(isZh) ? "\u9A8C\u8BC1\u901A\u8FC7" : "Verification Passed")}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="relative h-[44px] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl max-w-[330px] mx-auto w-full overflow-hidden flex items-center"${_scopeId}><div class="absolute left-0 top-0 bottom-0 bg-emerald-500/15 dark:bg-white/15 pointer-events-none transition-all duration-75" style="${ssrRenderStyle({ width: `${unref(moveBlockLeft) + 26}px` })}"${_scopeId}></div><div class="absolute left-0 top-0 bottom-0 w-[52px] bg-white dark:bg-zinc-800 text-gray-700 dark:text-white border border-gray-200/80 dark:border-white/15 rounded-xl cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md dark:shadow-lg flex items-center justify-center touch-none select-none transition-transform duration-75 z-10 hover:bg-gray-50 dark:hover:bg-zinc-700 active:scale-[0.98]" style="${ssrRenderStyle({ transform: `translateX(${unref(moveBlockLeft)}px)` })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrows-left-right-bold",
              class: "w-5 h-5 pointer-events-none text-gray-600 dark:text-gray-200"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="absolute inset-0 flex items-center justify-center pointer-events-none text-xs text-gray-500 dark:text-gray-400 tracking-wider font-medium"${_scopeId}>`);
            if (unref(status) === "verifying") {
              _push2(`<span class="flex items-center gap-1.5 text-gray-800 dark:text-white"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:spinner-gap-bold",
                class: "w-3.5 h-3.5 animate-spin text-gray-600 dark:text-gray-300"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(unref(isZh) ? "\u6B63\u5728\u6821\u9A8C..." : "Verifying...")}</span>`);
            } else if (unref(status) === "error") {
              _push2(`<span class="text-rose-500 dark:text-rose-400"${_scopeId}>${ssrInterpolate(unref(errorMsg) || (unref(isZh) ? "\u4F4D\u7F6E\u672A\u5BF9\u9F50\uFF0C\u8BF7\u91CD\u8BD5" : "Position mismatch, retry"))}</span>`);
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(isZh) ? "\u6309\u4F4F\u6ED1\u5757\u5E76\u62D6\u52A8" : "Drag slider to match")}</span>`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 text-gray-900 dark:text-white w-full max-w-[380px] mx-auto select-none" }, [
                createVNode("div", { class: "flex items-center justify-between mb-4" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:shield-check-bold",
                      class: "w-5 h-5 text-emerald-500 dark:text-emerald-400"
                    }),
                    createVNode("h3", { class: "text-base font-semibold tracking-tight text-gray-900 dark:text-white" }, toDisplayString(unref(isZh) ? "\u5B89\u5168\u9A8C\u8BC1" : "Security Verification"), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode("button", {
                      type: "button",
                      class: "p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors",
                      title: unref(isZh) ? "\u5237\u65B0\u9A8C\u8BC1\u7801" : "Refresh captcha",
                      disabled: unref(status) === "loading",
                      onClick: fetchCaptcha
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:arrows-clockwise-bold",
                        class: ["w-4 h-4", { "animate-spin": unref(status) === "loading" }]
                      }, null, 8, ["class"])
                    ], 8, ["title", "disabled"]),
                    createVNode("button", {
                      type: "button",
                      class: "p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors",
                      title: unref(isZh) ? "\u5173\u95ED" : "Close",
                      onClick: close
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:x-bold",
                        class: "w-4 h-4"
                      })
                    ], 8, ["title"])
                  ])
                ]),
                createVNode("p", { class: "text-xs text-gray-500 dark:text-gray-400 mb-4" }, toDisplayString(unref(isZh) ? "\u62D6\u52A8\u4E0B\u65B9\u6ED1\u5757\uFF0C\u5C06\u62FC\u56FE\u5B8C\u6574\u5D4C\u5165\u7F3A\u53E3" : "Drag the slider to fit the piece into the slot"), 1),
                createVNode("div", {
                  ref_key: "containerRef",
                  ref: containerRef,
                  class: "relative w-[330px] h-[155px] mx-auto mb-4 bg-gray-100 dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-inner"
                }, [
                  unref(imgBackSrc) ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: unref(imgBackSrc),
                    class: "w-full h-full object-cover block pointer-events-none",
                    alt: "captcha-bg"
                  }, null, 8, ["src"])) : createCommentVNode("", true),
                  unref(imgPieceSrc) ? (openBlock(), createBlock("img", {
                    key: 1,
                    src: unref(imgPieceSrc),
                    class: "absolute z-20 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]",
                    style: {
                      top: `${unref(pieceTop)}px`,
                      left: 0,
                      transform: `translateX(${unref(moveBlockLeft)}px)`,
                      width: "52px",
                      height: "52px"
                    },
                    alt: "captcha-piece"
                  }, null, 12, ["src"])) : createCommentVNode("", true),
                  unref(status) === "loading" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "absolute inset-0 bg-white/80 dark:bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-2 z-30"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:spinner-gap-bold",
                      class: "w-6 h-6 text-gray-800 dark:text-white animate-spin"
                    }),
                    createVNode("span", { class: "text-xs text-gray-600 dark:text-gray-300 font-medium" }, toDisplayString(unref(isZh) ? "\u6B63\u5728\u52A0\u8F7D\u5B89\u5168\u51ED\u636E..." : "Loading challenge..."), 1)
                  ])) : createCommentVNode("", true),
                  unref(status) === "success" ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "absolute inset-0 bg-emerald-600/90 dark:bg-emerald-950/85 backdrop-blur-sm flex items-center justify-center gap-2 z-30 transition-all duration-300"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:check-circle-fill",
                      class: "w-7 h-7 text-white dark:text-emerald-400"
                    }),
                    createVNode("span", { class: "text-sm font-medium text-white dark:text-emerald-200" }, toDisplayString(unref(isZh) ? "\u9A8C\u8BC1\u901A\u8FC7" : "Verification Passed"), 1)
                  ])) : createCommentVNode("", true)
                ], 512),
                createVNode("div", { class: "relative h-[44px] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl max-w-[330px] mx-auto w-full overflow-hidden flex items-center" }, [
                  createVNode("div", {
                    class: "absolute left-0 top-0 bottom-0 bg-emerald-500/15 dark:bg-white/15 pointer-events-none transition-all duration-75",
                    style: { width: `${unref(moveBlockLeft) + 26}px` }
                  }, null, 4),
                  createVNode("div", {
                    class: "absolute left-0 top-0 bottom-0 w-[52px] bg-white dark:bg-zinc-800 text-gray-700 dark:text-white border border-gray-200/80 dark:border-white/15 rounded-xl cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md dark:shadow-lg flex items-center justify-center touch-none select-none transition-transform duration-75 z-10 hover:bg-gray-50 dark:hover:bg-zinc-700 active:scale-[0.98]",
                    style: { transform: `translateX(${unref(moveBlockLeft)}px)` },
                    onMousedown: startDrag,
                    onTouchstart: startDrag
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:arrows-left-right-bold",
                      class: "w-5 h-5 pointer-events-none text-gray-600 dark:text-gray-200"
                    })
                  ], 36),
                  createVNode("div", { class: "absolute inset-0 flex items-center justify-center pointer-events-none text-xs text-gray-500 dark:text-gray-400 tracking-wider font-medium" }, [
                    unref(status) === "verifying" ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "flex items-center gap-1.5 text-gray-800 dark:text-white"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:spinner-gap-bold",
                        class: "w-3.5 h-3.5 animate-spin text-gray-600 dark:text-gray-300"
                      }),
                      createTextVNode(" " + toDisplayString(unref(isZh) ? "\u6B63\u5728\u6821\u9A8C..." : "Verifying..."), 1)
                    ])) : unref(status) === "error" ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-rose-500 dark:text-rose-400"
                    }, toDisplayString(unref(errorMsg) || (unref(isZh) ? "\u4F4D\u7F6E\u672A\u5BF9\u9F50\uFF0C\u8BF7\u91CD\u8BD5" : "Position mismatch, retry")), 1)) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(isZh) ? "\u6309\u4F4F\u6ED1\u5757\u5E76\u62D6\u52A8" : "Drag slider to match"), 1))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CaptchaSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "CaptchaSlider" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { fetchSettings } = useSettings();
    const { extensionPermissionDefs } = useAdminExtensions();
    const { admin, loadAdmin } = useAdminSession();
    const { t, locale, locales, setLocale } = useI18n();
    const { loadAdminLocale } = useAdminLocale();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("admin-login-locale", () => loadAdminLocale())), await __temp, __restore();
    const route = useRoute();
    const router = useRouter();
    if (admin.value) {
      let redirectTarget = "/admin/dashboard";
      if (typeof route.query.redirect === "string" && route.query.redirect.startsWith("/admin") && !route.query.redirect.startsWith("/admin/login") && route.query.redirect !== "/admin/profile") {
        redirectTarget = route.query.redirect;
      } else {
        redirectTarget = firstAllowedAdminRoute(admin.value, extensionPermissionDefs == null ? void 0 : extensionPermissionDefs.value) || "/admin/dashboard";
      }
      [__temp, __restore] = withAsyncContext(() => navigateTo(redirectTarget, { replace: true })), await __temp, __restore();
    }
    const form = reactive({
      username: "",
      password: ""
    });
    const isLoading = ref(false);
    const errorMsg = ref("");
    const showPassword = ref(false);
    const captchaSliderRef = ref(null);
    const captchaTicket = ref("");
    const needCaptcha = ref(false);
    const onCaptchaSuccess = (ticket) => {
      captchaTicket.value = ticket;
      handleLogin();
    };
    const welcomeText = computed(() => {
      return t("admin.login.title");
    });
    const switchableLocales = computed(
      () => (unref(locales) || []).map((loc) => typeof loc === "string" ? { code: loc, name: loc } : loc)
    );
    const backgroundStyle = computed(() => {
      return {
        backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')`
      };
    });
    const handleLogin = async () => {
      var _a, _b, _c, _d, _e;
      isLoading.value = true;
      errorMsg.value = "";
      try {
        await $fetch("/api/admin/login", {
          method: "POST",
          body: {
            ...form,
            captchaTicket: captchaTicket.value || void 0
          },
          // 服务端的报错文案走 getRequestLocale(),它只看 accept-language。不带这个头
          // 就是浏览器语言说了算:页面明明切成中文,「管理员不存在」却回英文。
          headers: { "accept-language": locale.value }
        });
      } catch (e) {
        errorMsg.value = ((_a = e.data) == null ? void 0 : _a.message) || ((_b = e.data) == null ? void 0 : _b.statusMessage) || t("admin.login.invalidCredentials");
        isLoading.value = false;
        if (((_d = (_c = e.data) == null ? void 0 : _c.data) == null ? void 0 : _d.needCaptcha) || e.statusCode === 403) {
          needCaptcha.value = true;
          captchaTicket.value = "";
          (_e = captchaSliderRef.value) == null ? void 0 : _e.show();
        }
        return;
      }
      captchaTicket.value = "";
      needCaptcha.value = false;
      let redirectTarget = "/admin/dashboard";
      try {
        await loadAdmin(true);
        if (typeof route.query.redirect === "string" && route.query.redirect.startsWith("/admin") && !route.query.redirect.startsWith("/admin/login") && route.query.redirect !== "/admin/profile") {
          redirectTarget = route.query.redirect;
        } else {
          await fetchSettings();
          redirectTarget = firstAllowedAdminRoute(admin.value, extensionPermissionDefs == null ? void 0 : extensionPermissionDefs.value) || "/admin/dashboard";
        }
      } catch (e) {
        console.error("[admin-login] could not resolve the post-login landing page:", e);
        redirectTarget = "/admin/dashboard";
      } finally {
        isLoading.value = false;
      }
      router.push(redirectTarget);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$G;
      const _component_CaptchaSlider = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-black selection:bg-white selection:text-black" }, _attrs))}><div class="absolute inset-0 pointer-events-none"><div class="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity grayscale" style="${ssrRenderStyle(unref(backgroundStyle))}"></div><div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div></div><div class="w-full max-w-md relative z-10">`);
      if (unref(switchableLocales).length > 1) {
        _push(`<div class="mb-4 flex justify-end"><div class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-2xl" role="group"${ssrRenderAttr("aria-label", _ctx.$t("admin.login.language"))}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:translate-duotone",
          class: "w-4 h-4 ml-2 mr-0.5 text-gray-500"
        }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(switchableLocales), (loc) => {
          _push(`<button type="button" class="${ssrRenderClass([loc.code === unref(locale) ? "bg-white text-black" : "text-gray-400 hover:text-white hover:bg-white/10", "rounded-full px-3 py-1.5 text-xs font-medium transition-colors"])}"${ssrRenderAttr("aria-pressed", loc.code === unref(locale))}>${ssrInterpolate(loc.name || loc.code)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl relative overflow-hidden group"><div class="absolute -inset-24 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"></div><div class="mb-10 text-center relative z-10"><h1 class="text-3xl font-medium tracking-tight text-white mb-2">${ssrInterpolate(unref(welcomeText))}</h1><p class="text-gray-400 text-sm">${ssrInterpolate(_ctx.$t("admin.login.subtitle"))}</p></div>`);
      if (unref(route).query.setup === "success") {
        _push(`<div class="mb-8 p-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm flex items-center gap-3 relative z-10">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "w-5 h-5"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("admin.login.setupSuccess"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6 relative z-10"><div class="space-y-1.5"><label class="text-sm font-medium text-gray-300 block">${ssrInterpolate(_ctx.$t("admin.login.username"))}</label><div class="relative"><input${ssrRenderAttr("value", unref(form).username)} type="text" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"${ssrRenderAttr("placeholder", _ctx.$t("admin.login.usernamePlaceholder"))} required></div></div><div class="space-y-1.5"><div class="flex justify-between items-center"><label class="text-sm font-medium text-gray-300 block">${ssrInterpolate(_ctx.$t("admin.login.password"))}</label></div><div class="relative"><input${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" required><button type="button" tabindex="-1" class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-white transition-colors focus:outline-none"${ssrRenderAttr("aria-label", unref(showPassword) ? _ctx.$t("admin.login.hidePassword") : _ctx.$t("admin.login.showPassword"))}${ssrRenderAttr("aria-pressed", unref(showPassword))}>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: unref(showPassword) ? "ph:eye-slash" : "ph:eye",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div></div><button type="submit" class="w-full bg-white text-black font-medium py-3.5 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""}>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner-gap-bold",
          class: "w-5 h-5 animate-spin"
        }, null, _parent));
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("admin.login.submit"))}</span>`);
      }
      if (!unref(isLoading)) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-right-bold",
          class: "w-4 h-4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button></form>`);
      if (unref(errorMsg)) {
        _push(`<div class="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center justify-center gap-2 relative z-10">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:warning-circle-fill",
          class: "w-5 h-5 shrink-0"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(errorMsg))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-center mt-12 text-gray-600 text-xs font-medium tracking-wide">${ssrInterpolate(_ctx.$t("admin.login.footer"))} \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</div></div>`);
      _push(ssrRenderComponent(_component_CaptchaSlider, {
        ref_key: "captchaSliderRef",
        ref: captchaSliderRef,
        onSuccess: onCaptchaSuccess
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
