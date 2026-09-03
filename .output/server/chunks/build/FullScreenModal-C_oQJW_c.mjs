import { p as _sfc_main$q, k as _sfc_main$z } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, toDisplayString, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FullScreenModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    title: {},
    defaultFullscreen: { type: Boolean },
    maxWidth: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const emit = __emit;
    const isOpen = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    const isFullscreen = ref((_a = props.defaultFullscreen) != null ? _a : true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$q;
      const _component_UButton = _sfc_main$z;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event,
        fullscreen: isFullscreen.value,
        ui: { content: !isFullscreen.value ? __props.maxWidth || "sm:max-w-4xl" : "" }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([isFullscreen.value ? "h-screen" : "max-h-[90vh] rounded-xl border border-gray-200 dark:border-gray-800", "flex flex-col bg-white dark:bg-[#121214]"])}"${_scopeId}><div class="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 shrink-0"${_scopeId}><h3 class="text-xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(__props.title)}</h3><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: isFullscreen.value ? "ph:corners-in-bold" : "ph:corners-out-bold",
              onClick: ($event) => isFullscreen.value = !isFullscreen.value,
              title: "Toggle Fullscreen"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              onClick: ($event) => isOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex-1 overflow-y-auto p-6 relative"${_scopeId}><div class="w-full"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
            if (_ctx.$slots.footer) {
              _push2(`<div class="${ssrRenderClass([!isFullscreen.value ? "rounded-b-xl" : "", "p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900/50 shrink-0"])}"${_scopeId}><div class="mx-auto flex justify-end gap-3 w-full"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ["flex flex-col bg-white dark:bg-[#121214]", isFullscreen.value ? "h-screen" : "max-h-[90vh] rounded-xl border border-gray-200 dark:border-gray-800"]
              }, [
                createVNode("div", { class: "flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 shrink-0" }, [
                  createVNode("h3", { class: "text-xl font-bold text-gray-900 dark:text-white" }, toDisplayString(__props.title), 1),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: isFullscreen.value ? "ph:corners-in-bold" : "ph:corners-out-bold",
                      onClick: ($event) => isFullscreen.value = !isFullscreen.value,
                      title: "Toggle Fullscreen"
                    }, null, 8, ["icon", "onClick"]),
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      icon: "ph:x-bold",
                      onClick: ($event) => isOpen.value = false
                    }, null, 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "flex-1 overflow-y-auto p-6 relative" }, [
                  createVNode("div", { class: "w-full" }, [
                    renderSlot(_ctx.$slots, "default")
                  ])
                ]),
                _ctx.$slots.footer ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900/50 shrink-0", !isFullscreen.value ? "rounded-b-xl" : ""]
                }, [
                  createVNode("div", { class: "mx-auto flex justify-end gap-3 w-full" }, [
                    renderSlot(_ctx.$slots, "footer")
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FullScreenModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main, { __name: "FullScreenModal" });

export { __nuxt_component_7 as _ };
