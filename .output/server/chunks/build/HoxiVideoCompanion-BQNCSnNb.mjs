import { b as _sfc_main$E } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'crypto';
import 'fs';
import 'path';
import 'node:http';
import 'node:https';
import 'node:crypto';
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
import 'http';
import 'https';
import 'zlib';
import 'stream';
import 'buffer';
import 'util';
import 'url';
import 'net';
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
  __name: "HoxiVideoCompanion",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("cursor");
    const copied = ref(false);
    const tabs = [
      { id: "cursor", name: "Cursor \u6781\u901F\u914D\u7F6E" },
      { id: "cursorrules", name: "\u4E00\u4EBA\u516C\u53F8 .cursorrules" },
      { id: "cline", name: "VS Code / Cline" },
      { id: "terminal", name: "Claude Code \u7EC8\u7AEF" }
    ];
    const configs = {
      cursor: {
        fileName: "Cursor -> Settings -> Models / OpenAI API Key",
        code: `// 1. \u5728 Cursor \u8BBE\u7F6E\u4E2D\u6253\u5F00 "OpenAI API Key"
// 2. \u52FE\u9009 "Override OpenAI Base URL" \u586B\u5165\uFF1A
https://api.ainode.run/v1

// 3. \u586B\u5165\u4F60\u5728\u4E2D\u8F6C\u7AD9\u83B7\u53D6\u7684 API Key\uFF1A
sk-ainode-xxxxxxxxxxxxxxxxxxxx

// 4. \u5728 Model List \u4E2D\u6DFB\u52A0\u5E76\u542F\u7528\u4EE5\u4E0B\u89C6\u9891\u540C\u6B3E\u4E3B\u529B\u6A21\u578B\uFF1A
claude-3-7-sonnet
deepseek-r1
gemini-2.5-flash`
      },
      cursorrules: {
        fileName: "\u9879\u76EE\u6839\u76EE\u5F55 -> .cursorrules (\u4E00\u4EBA\u516C\u53F8\u5168\u6808\u5F00\u53D1\u7CFB\u7EDF\u7EA7\u89C4\u5219)",
        code: `# \u4E00\u4EBA\u516C\u53F8\u6781\u7B80\u5168\u6808\u5F00\u53D1\u89C4\u5219 (.cursorrules)
# \u6838\u5FC3\u5FC3\u667A\uFF1A\u4E00\u4EBA\u6210\u519B\u3001\u675C\u7EDD\u5E9F\u8BDD\u3001\u67B6\u6784\u4F18\u5148\u3001\u751F\u4EA7\u5C31\u7EEA

- \u89D2\u8272\uFF1A\u9AD8\u7EA7\u5168\u6808\u5DE5\u7A0B\u5E08\u4E0E\u4E00\u4EBA\u516C\u53F8\u6280\u672F\u67B6\u6784\u526F\u9A7E\u3002
- \u7F16\u7801\u539F\u5219\uFF1A
  1. \u4FDD\u6301\u6700\u7B80\u53EF\u7528\u67B6\u6784\uFF0C\u62D2\u7EDD\u8FC7\u5EA6\u8BBE\u8BA1\u4E0E\u590D\u6742\u62BD\u8C61\u3002
  2. \u4F18\u5148\u91C7\u7528\u7C7B\u578B\u5B89\u5168\u3001\u73B0\u4EE3\u5316\u8BED\u6CD5\uFF08TypeScript \u4E25\u683C\u6A21\u5F0F / Tailwind CSS / Vue 3 Composition API\uFF09\u3002
  3. \u4E25\u7981\u81C6\u9020\u4E0D\u5B58\u5728\u7684\u7B2C\u4E09\u65B9 API \u6216\u7EC4\u4EF6\uFF1B\u4F18\u5148\u67E5\u9A8C\u73B0\u6709\u4F9D\u8D56\u4E0E\u4E0A\u4E0B\u6587\u3002
  4. \u4FEE\u6539\u4EE3\u7801\u5FC5\u987B\u5355\u70B9\u7CBE\u51C6\uFF0C\u4FDD\u7559\u4E0D\u76F8\u5173\u7684\u539F\u6837\u4EE3\u7801\u4E0E\u6CE8\u91CA\u3002
- \u601D\u8003\u4E0E\u8C03\u8BD5\uFF1A
  1. \u9047\u5230\u590D\u6742\u91CD\u6784\uFF0C\u5148\u8F93\u51FA 3 \u6761\u4EE5\u5185\u7684\u6838\u5FC3\u8BBE\u8BA1\u51B3\u7B56\uFF0C\u5F97\u5230\u786E\u8BA4\u540E\u518D\u5199\u4EE3\u7801\u3002
  2. \u9047\u5230 Bug \u4F18\u5148\u5B9A\u4F4D\u6839\u672C\u539F\u56E0\uFF08Root Cause\uFF09\uFF0C\u7ED9\u51FA\u9632\u590D\u53D1\u7684\u5065\u58EE\u65B9\u6848\u3002
- \u6C9F\u901A\u98CE\u683C\uFF1A\u6781\u7B80\u3001\u52A1\u5B9E\u3001\u76F4\u5954\u6838\u5FC3\uFF0C\u76F4\u63A5\u7ED9\u51FA\u6700\u4F73\u843D\u5730\u65B9\u6848\u3002`
      },
      cline: {
        fileName: "VS Code -> Cline Settings (JSON / UI)",
        code: `{
  "apiProvider": "openai-native",
  "openAiBaseUrl": "https://api.ainode.run/v1",
  "openAiApiKey": "sk-ainode-xxxxxxxxxxxxxxxxxxxx",
  "openAiModelId": "claude-3-7-sonnet",
  "thinking": {
    "enabled": true,
    "budgetTokens": 16000
  }
}`
      },
      terminal: {
        fileName: "~/.zshrc \u6216 ~/.bashrc (\u7EC8\u7AEF\u73AF\u5883\u53D8\u91CF)",
        code: `# \u4E00\u952E\u914D\u7F6E Claude Code \u7EC8\u7AEF\u547D\u4EE4\u884C\u56FD\u5185\u76F4\u8FDE\u52A0\u901F
export ANTHROPIC_BASE_URL="https://api.ainode.run"
export ANTHROPIC_API_KEY="sk-ainode-xxxxxxxxxxxxxxxxxxxx"

# \u8FD0\u884C claude \u5373\u53EF\u76F4\u63A5\u8FDB\u5165\u65E0\u5899\u9AD8\u901F\u6A21\u5F0F
claude`
      }
    };
    const currentConfig = computed(() => configs[activeTab.value] || configs.cursor);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50/70 via-white to-amber-50/20 dark:from-slate-900/80 dark:via-slate-900/50 dark:to-slate-950 p-6 md:p-8 shadow-xs" }, _attrs))}><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5"><div><div class="flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-sm"> \u{1F3AC} </span><h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white"> \u89C6\u9891\u540C\u6B3E\u914D\u7F6E \xB7 1\u5206\u949F\u6781\u901F\u63A5\u5165 </h3><span class="rounded-full bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60"> \u4E00\u4EBA\u516C\u53F8\u81EA\u7528 </span></div><p class="mt-1.5 text-xs text-slate-500 dark:text-slate-400"> \u6211\u662F\u53EF\u4E50\u3002\u8FD9\u662F\u6211\u5728\u53E3\u64AD\u89C6\u9891\u4E2D\u5B9E\u6218\u6F14\u793A\u7684 Cursor\u3001VS Code \u4E0E\u7EC8\u7AEF\u914D\u7F6E\uFF0C\u4E00\u952E\u590D\u5236\u586B\u5165\uFF0C\u76F4\u63A5\u5F00\u542F\u6EE1\u8840\u601D\u8003\u6A21\u5F0F\u3002 </p></div><div class="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs self-start sm:self-center"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeTab.value === tab.id ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white", "rounded-lg px-3 py-1.5 font-medium transition-all"])}">${ssrInterpolate(tab.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="mt-6"><div class="relative rounded-xl border border-slate-800/80 bg-slate-950 text-slate-200 overflow-hidden shadow-md"><div class="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs"><div class="flex items-center gap-2"><div class="flex gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span></div><span class="ml-2 font-mono text-[11px] text-slate-400">${ssrInterpolate(currentConfig.value.fileName)}</span></div><button type="button" class="${ssrRenderClass([copied.value ? "bg-emerald-600 text-white shadow-xs" : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white", "inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition-all"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: copied.value ? "ph:check-bold" : "ph:copy",
        class: "w-3.5 h-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copied.value ? "\u5DF2\u590D\u5236\uFF0C\u76F4\u63A5\u7C98\u8D34\uFF01" : "\u4E00\u952E\u590D\u5236\u540C\u6B3E\u4EE3\u7801")}</span></button></div><div class="p-4 overflow-x-auto font-mono text-xs leading-relaxed text-emerald-400 dark:text-emerald-300 select-all"><pre><code>${ssrInterpolate(currentConfig.value.code)}</code></pre></div></div><div class="mt-4 grid gap-3 sm:grid-cols-3 text-xs"><div class="flex items-start gap-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3"><span class="text-emerald-600 dark:text-emerald-400 font-bold">\u2713</span><div><div class="font-semibold text-slate-800 dark:text-slate-200">\u65E0\u9700\u9B54\u6CD5\u73AF\u5883</div><div class="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">\u56FD\u5185\u4E13\u7EBF\u6BEB\u79D2\u76F4\u8FDE\uFF0C\u544A\u522B\u68AF\u5B50\u6CE2\u52A8\u4E0E\u6389\u7EBF</div></div></div><div class="flex items-start gap-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3"><span class="text-amber-600 dark:text-amber-400 font-bold">\u26A1</span><div><div class="font-semibold text-slate-800 dark:text-slate-200">\u6EE1\u8840\u601D\u8003\u6A21\u5F0F</div><div class="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">\u5B8C\u6574\u900F\u4F20 Thinking Token\uFF0C\u4EE3\u7801\u91CD\u6784\u66F4\u6DF1</div></div></div><div class="flex items-start gap-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3"><span class="text-blue-600 dark:text-blue-400 font-bold">\u{1F4B0}</span><div><div class="font-semibold text-slate-800 dark:text-slate-200">\u6309\u91CF\u6263\u8D39\u4E0D\u8FC7\u671F</div><div class="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">\u5145\u591A\u5C11\u7528\u591A\u5C11\uFF0C\u4E0D\u7528\u65F6 0 \u6210\u672C\uFF0C\u6708\u8D39\u4F4E\u81F3\u5341\u5143</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/hoxi/components/HoxiVideoCompanion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HoxiVideoCompanion = Object.assign(_sfc_main, { __name: "HoxiVideoCompanion" });

export { HoxiVideoCompanion as default };
