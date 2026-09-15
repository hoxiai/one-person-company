import{b as f}from"./CzEHoD3_.js";import{i as g,ae as n,aa as x,af as e,b2 as c,F as k,aA as h,aE as p,ag as r,a3 as _,n as m,d as C}from"./Dn2n2_7u.js";import"./B9bUP62N.js";import"./CfYFMnge.js";const w={class:"rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50/70 via-white to-amber-50/20 dark:from-slate-900/80 dark:via-slate-900/50 dark:to-slate-950 p-6 md:p-8 shadow-xs"},y={class:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5"},A={class:"inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs self-start sm:self-center"},I=["onClick"],S={class:"mt-6"},N={class:"relative rounded-xl border border-slate-800/80 bg-slate-950 text-slate-200 overflow-hidden shadow-md"},T={class:"flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs"},V={class:"flex items-center gap-2"},P={class:"ml-2 font-mono text-[11px] text-slate-400"},O={class:"p-4 overflow-x-auto font-mono text-xs leading-relaxed text-emerald-400 dark:text-emerald-300 select-all"},B=g({__name:"HoxiVideoCompanion",setup(H){const o=m("cursor"),s=m(!1),b=[{id:"cursor",name:"Cursor 极速配置"},{id:"cursorrules",name:"一人公司 .cursorrules"},{id:"cline",name:"VS Code / Cline"},{id:"terminal",name:"Claude Code 终端"}],l={cursor:{fileName:"Cursor -> Settings -> Models / OpenAI API Key",code:`// 1. 在 Cursor 设置中打开 "OpenAI API Key"
// 2. 勾选 "Override OpenAI Base URL" 填入：
https://api.ainode.run/v1

// 3. 填入你在中转站获取的 API Key：
sk-ainode-xxxxxxxxxxxxxxxxxxxx

// 4. 在 Model List 中添加并启用以下视频同款主力模型：
claude-3-7-sonnet
deepseek-r1
gemini-2.5-flash`},cursorrules:{fileName:"项目根目录 -> .cursorrules (一人公司全栈开发系统级规则)",code:`# 一人公司极简全栈开发规则 (.cursorrules)
# 核心心智：一人成军、杜绝废话、架构优先、生产就绪

- 角色：高级全栈工程师与一人公司技术架构副驾。
- 编码原则：
  1. 保持最简可用架构，拒绝过度设计与复杂抽象。
  2. 优先采用类型安全、现代化语法（TypeScript 严格模式 / Tailwind CSS / Vue 3 Composition API）。
  3. 严禁臆造不存在的第三方 API 或组件；优先查验现有依赖与上下文。
  4. 修改代码必须单点精准，保留不相关的原样代码与注释。
- 思考与调试：
  1. 遇到复杂重构，先输出 3 条以内的核心设计决策，得到确认后再写代码。
  2. 遇到 Bug 优先定位根本原因（Root Cause），给出防复发的健壮方案。
- 沟通风格：极简、务实、直奔核心，直接给出最佳落地方案。`},cline:{fileName:"VS Code -> Cline Settings (JSON / UI)",code:`{
  "apiProvider": "openai-native",
  "openAiBaseUrl": "https://api.ainode.run/v1",
  "openAiApiKey": "sk-ainode-xxxxxxxxxxxxxxxxxxxx",
  "openAiModelId": "claude-3-7-sonnet",
  "thinking": {
    "enabled": true,
    "budgetTokens": 16000
  }
}`},terminal:{fileName:"~/.zshrc 或 ~/.bashrc (终端环境变量)",code:`# 一键配置 Claude Code 终端命令行国内直连加速
export ANTHROPIC_BASE_URL="https://api.ainode.run"
export ANTHROPIC_API_KEY="sk-ainode-xxxxxxxxxxxxxxxxxxxx"

# 运行 claude 即可直接进入无墙高速模式
claude`}},d=C(()=>l[o.value]||l.cursor),u=async()=>{try{await navigator.clipboard.writeText(d.value.code),s.value=!0,setTimeout(()=>{s.value=!1},2500)}catch(i){console.error("Clipboard copy failed:",i)}};return(i,t)=>{const v=f;return n(),x("div",w,[e("div",y,[t[0]||(t[0]=c('<div><div class="flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-sm"> 🎬 </span><h3 class="text-base md:text-lg font-bold text-slate-900 dark:text-white"> 视频同款配置 · 1分钟极速接入 </h3><span class="rounded-full bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60"> 一人公司自用 </span></div><p class="mt-1.5 text-xs text-slate-500 dark:text-slate-400"> 我是可乐。这是我在口播视频中实战演示的 Cursor、VS Code 与终端配置，一键复制填入，直接开启满血思考模式。 </p></div>',1)),e("div",A,[(n(),x(k,null,h(b,a=>e("button",{key:a.id,type:"button",class:p(["rounded-lg px-3 py-1.5 font-medium transition-all",o.value===a.id?"bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"]),onClick:K=>o.value=a.id},r(a.name),11,I)),64))])]),e("div",S,[e("div",N,[e("div",T,[e("div",V,[t[1]||(t[1]=e("div",{class:"flex gap-1.5"},[e("span",{class:"h-2.5 w-2.5 rounded-full bg-rose-500/80"}),e("span",{class:"h-2.5 w-2.5 rounded-full bg-amber-500/80"}),e("span",{class:"h-2.5 w-2.5 rounded-full bg-emerald-500/80"})],-1)),e("span",P,r(d.value.fileName),1)]),e("button",{type:"button",class:p(["inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition-all",s.value?"bg-emerald-600 text-white shadow-xs":"bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"]),onClick:u},[_(v,{name:s.value?"ph:check-bold":"ph:copy",class:"w-3.5 h-3.5"},null,8,["name"]),e("span",null,r(s.value?"已复制，直接粘贴！":"一键复制同款代码"),1)],2)]),e("div",O,[e("pre",null,[e("code",null,r(d.value.code),1)])])]),t[2]||(t[2]=c('<div class="mt-4 grid gap-3 sm:grid-cols-3 text-xs"><div class="flex items-start gap-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3"><span class="text-emerald-600 dark:text-emerald-400 font-bold">✓</span><div><div class="font-semibold text-slate-800 dark:text-slate-200">无需魔法环境</div><div class="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">国内专线毫秒直连，告别梯子波动与掉线</div></div></div><div class="flex items-start gap-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3"><span class="text-amber-600 dark:text-amber-400 font-bold">⚡</span><div><div class="font-semibold text-slate-800 dark:text-slate-200">满血思考模式</div><div class="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">完整透传 Thinking Token，代码重构更深</div></div></div><div class="flex items-start gap-2 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 p-3"><span class="text-blue-600 dark:text-blue-400 font-bold">💰</span><div><div class="font-semibold text-slate-800 dark:text-slate-200">按量扣费不过期</div><div class="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">充多少用多少，不用时 0 成本，月费低至十元</div></div></div></div>',1))])])}}}),L=Object.assign(B,{__name:"HoxiVideoCompanion"});export{L as default};
