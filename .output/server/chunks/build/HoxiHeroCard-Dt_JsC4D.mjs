import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiHeroCard",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        id: "idea",
        icon: "\u{1F4A1}",
        title: "\u7075\u611F\u4E0E\u9009\u578B",
        desc: "DeepSeek / Claude 3.7 \u65B9\u6848\u79D2\u7EA7\u5BF9\u9F50",
        badge: "0 \u6C9F\u901A\u6210\u672C"
      },
      {
        id: "code",
        icon: "\u26A1",
        title: "AI \u7ED3\u5BF9\u5168\u6808\u4EA4\u4ED8",
        desc: "Nuxt 3 + Cursor \u6781\u901F\u843D\u5730",
        badge: "10x \u751F\u4EA7\u529B"
      },
      {
        id: "deploy",
        icon: "\u{1F680}",
        title: "\u8FB9\u7F18\u65E0\u8FD0\u7EF4\u4E0A\u7EBF",
        desc: "Cloudflare / \u4E13\u7EBF\u4E2D\u8F6C\u4F4E\u6210\u672C\u8FD0\u884C",
        badge: "\xA535/\u6708\u6210\u672C"
      },
      {
        id: "revenue",
        icon: "\u{1F4B0}",
        title: "\u5168\u7403\u81EA\u52A8\u6536\u6B3E",
        desc: "Stripe + \u805A\u5408\u7F51\u5173\u5168\u81EA\u52A8\u7ED3\u7B97",
        badge: "0 \u4EBA\u5DE5\u4ECB\u5165"
      }
    ];
    const activeStep = ref(0);
    const isRunning = ref(false);
    const completedCount = ref(0);
    const lightTrackStyle = computed(() => {
      const total = steps.length;
      const topPercent = activeStep.value / (total - 1) * 75 + 15;
      return `top: 8px; height: ${topPercent}%;`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-5 shadow-sm backdrop-blur-md transition-all dark:border-slate-800 dark:bg-slate-900/95 select-none" }, _attrs))}><div class="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800/80"><div class="flex items-center gap-2"><span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span></span><span class="text-xs font-semibold tracking-tight text-slate-800 dark:text-slate-200 font-mono"> \u4E00\u4EBA\u6210\u519B \xB7 \u81EA\u52A8\u5316\u95ED\u73AF </span></div><span class="text-[11px] font-mono text-slate-400 dark:text-slate-500"> AI \u4EA4\u4ED8\u6D41 </span></div><div class="relative my-4 space-y-2.5 pl-6"><div class="absolute left-2.5 top-2.5 bottom-2.5 w-0.5 bg-slate-100 dark:bg-slate-800"></div><div class="absolute left-2.5 w-0.5 bg-gradient-to-b from-amber-400 via-blue-500 to-emerald-400 transition-all duration-500 ease-out" style="${ssrRenderStyle(lightTrackStyle.value)}"></div><!--[-->`);
      ssrRenderList(steps, (step, idx) => {
        _push(`<div class="${ssrRenderClass([activeStep.value === idx ? "bg-slate-50 dark:bg-slate-800/80 shadow-xs" : "hover:bg-slate-50/50 dark:hover:bg-slate-800/40", "relative flex items-center justify-between rounded-xl p-2 transition-all duration-300 cursor-pointer"])}"><span class="${ssrRenderClass([activeStep.value === idx ? "border-amber-500 scale-110 shadow-xs shadow-amber-500/50" : "border-slate-300 dark:border-slate-700", "absolute -left-6 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-slate-900 border-2 transition-all duration-300"])}"><span class="${ssrRenderClass([activeStep.value === idx ? "bg-amber-500" : "bg-transparent", "h-1.5 w-1.5 rounded-full transition-colors"])}"></span></span><div class="flex items-center gap-2.5"><span class="text-base">${ssrInterpolate(step.icon)}</span><div><div class="text-xs font-semibold text-slate-800 dark:text-slate-200">${ssrInterpolate(step.title)}</div><div class="text-[11px] text-slate-400 dark:text-slate-500">${ssrInterpolate(step.desc)}</div></div></div><span class="${ssrRenderClass([activeStep.value === idx ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium" : "text-slate-400 dark:text-slate-500", "text-[10px] font-mono px-2 py-0.5 rounded-md transition-colors"])}">${ssrInterpolate(step.badge)}</span></div>`);
      });
      _push(`<!--]--></div><div class="pt-1"><button type="button" class="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-slate-50/80 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 transition-all active:scale-[0.99] cursor-pointer"><span class="${ssrRenderClass([{ "animate-spin": isRunning.value }, "text-sm transition-transform duration-300"])}"> \u26A1 </span><span>${ssrInterpolate(isRunning.value ? "\u6D41\u6C34\u7EBF\u81EA\u52A8\u6D41\u8F6C\u4E2D..." : "\u6A21\u62DF\u4E00\u6B21\u95ED\u73AF\u4EA4\u4ED8")}</span>`);
      if (completedCount.value > 0) {
        _push(`<span class="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md ml-1"> +$29.00 ARR (\u7B2C ${ssrInterpolate(completedCount.value)} \u6B21) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiHeroCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "HoxiHeroCard" });

export { __nuxt_component_1 as default };
