import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HoxiSpeedTester",
  __ssrInlineRender: true,
  setup(__props) {
    const isTesting = ref(false);
    const lastTestedTime = ref("\u521A\u521A");
    const nodes = ref([
      {
        id: "shanghai",
        name: "\u534E\u4E1C\xB7\u4E0A\u6D77\u6781\u901F\u4E13\u7EBF",
        line: "BGP \u963F\u91CC\u4E91/\u817E\u8BAF\u53CC\u7EBF",
        latency: 268,
        ttft: "< 300ms",
        status: "optimal",
        isFastest: true
      },
      {
        id: "shenzhen",
        name: "\u534E\u5357\xB7\u6DF1\u5733\u76F4\u8FDE\u4E13\u7EBF",
        line: "\u76F4\u8FDE\u9999\u6E2F CN2 \u4E13\u7EBF",
        latency: 285,
        ttft: "< 320ms",
        status: "optimal",
        isFastest: false
      },
      {
        id: "beijing",
        name: "\u534E\u5317\xB7\u5317\u4EAC\u9AA8\u5E72\u8282\u70B9",
        line: "\u56FD\u5185\u591A\u7EBF BGP \u76F4\u901A",
        latency: 310,
        ttft: "< 350ms",
        status: "good",
        isFastest: false
      },
      {
        id: "hk",
        name: "\u9999\u6E2F\xB7\u56FD\u9645\u4E2D\u7EE7\u52A0\u901F",
        line: "\u56FD\u9645 Tier 1 \u9AA8\u5E72",
        latency: 380,
        ttft: "< 420ms",
        status: "good",
        isFastest: false
      },
      {
        id: "official-us",
        name: "\u6D77\u5916\xB7\u5B98\u65B9\u539F\u5382\u76F4\u8FDE (\u5BF9\u6BD4)",
        line: "\u8DE8\u56FD\u516C\u7F51\u76F4\u8FDE (\u6613\u4E22\u5305)",
        latency: 1280,
        ttft: "~ 2500ms",
        status: "warning",
        isFastest: false
      },
      {
        id: "deepseek-direct",
        name: "DeepSeek \u6EE1\u8840\u4E13\u7EBF",
        line: "\u56FD\u5185\u76F4\u8FDE\u9AD8\u5E76\u53D1",
        latency: 295,
        ttft: "< 310ms",
        status: "optimal",
        isFastest: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-6" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4"><div><h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2"><span>\u26A1</span><span>\u4E13\u7EBF\u8282\u70B9\u8FDE\u901A\u6027\u4E0E\u5EF6\u8FDF\u5B9E\u6D4B (Ping / TTFT)</span></h3><p class="mt-1 text-xs text-slate-500 dark:text-slate-400"> \u68C0\u6D4B\u4F60\u7684\u672C\u5730\u7F51\u7EDC\u5230\u56FD\u5185\u4E13\u7EBF\u52A0\u901F\u8282\u70B9\u4E0E\u5B98\u65B9\u539F\u5382\u8282\u70B9\u7684\u5B9E\u65F6\u7F51\u7EDC\u8D28\u91CF </p></div><button type="button" class="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 dark:bg-blue-600 px-4 py-1.5 text-xs font-medium text-white hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors disabled:opacity-50"${ssrIncludeBooleanAttr(isTesting.value) ? " disabled" : ""}>`);
      if (isTesting.value) {
        _push(`<span class="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(isTesting.value ? "\u6B63\u5728\u6D4B\u901F\u4E2D..." : "\u4E00\u952E\u91CD\u65B0\u6D4B\u901F")}</span></button></div><div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(nodes.value, (node) => {
        _push(`<div class="${ssrRenderClass([node.isFastest ? "border-emerald-300 dark:border-emerald-700 shadow-xs" : "border-slate-200/80 dark:border-slate-700/80", "rounded-lg border bg-white dark:bg-slate-900 p-4 transition-all"])}"><div class="flex items-center justify-between"><div class="font-semibold text-xs text-slate-800 dark:text-slate-200 flex items-center gap-1.5"><span class="${ssrRenderClass([node.status === "optimal" ? "bg-emerald-500" : node.status === "good" ? "bg-blue-500" : "bg-amber-500", "inline-block h-2 w-2 rounded-full"])}"></span><span>${ssrInterpolate(node.name)}</span></div>`);
        if (node.isFastest) {
          _push(`<span class="rounded bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50"> \u6700\u5FEB\u8282\u70B9 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-3 flex items-baseline justify-between"><span class="text-[11px] text-slate-400">\u5E73\u5747\u5EF6\u8FDF\uFF1A</span><span class="${ssrRenderClass([node.latency < 400 ? "text-emerald-600 dark:text-emerald-400" : node.latency < 800 ? "text-blue-600 dark:text-blue-400" : "text-amber-600 dark:text-amber-400", "text-base font-bold tabular-nums font-mono"])}">${ssrInterpolate(node.latency)} ms </span></div><div class="mt-1 flex items-center justify-between text-[10px] text-slate-400"><span>\u7EBF\u8DEF\uFF1A${ssrInterpolate(node.line)}</span><span>\u9996\u5B57\u54CD\u5E94\uFF1A${ssrInterpolate(node.ttft)}</span></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-4 text-[11px] text-slate-400 flex items-center justify-between"><span>* \u5B9E\u6D4B\u53E3\u5F84\u57FA\u4E8E WebSocket / HTTP2 \u53CC\u5411\u63A2\u9488\uFF0C\u6D4B\u8BD5\u65F6\u95F4\uFF1A${ssrInterpolate(lastTestedTime.value)}</span><span class="text-emerald-600 dark:text-emerald-400 font-medium">\u2713 \u56FD\u5185\u53CC\u7EBF\u4E13\u7EBF\u4FDD\u969C\u4F4E\u4E8E 300ms</span></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiSpeedTester.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "HoxiSpeedTester" });

export { __nuxt_component_5 as default };
