import { u as useI18n, n as _sfc_main$G, _ as _sfc_main$W } from './server.mjs';
import { defineComponent, ref, computed, watch, mergeProps, isRef, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_UModal = _sfc_main$G;
      const _component_UIcon = _sfc_main$W;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CaptchaSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "CaptchaSlider" });

export { __nuxt_component_3 as _ };
//# sourceMappingURL=CaptchaSlider-Cs9hB6kV.mjs.map
