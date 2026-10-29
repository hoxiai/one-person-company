---
name: qingpu-ops
description: Operate Qingpu AI (轻铺 AI / qingpu.ai) multi-platform product listing, AI studio image/copy generation, 1688/competitor link cleaning, and cross-border e-commerce store publishing workflows. 当用户要求使用轻铺 AI 采集清洗 1688/竞品商品、批量生成多平台高转化商品标题/五点卖点/多规格详情页、测算跨境定价毛利或向已绑定的店铺一键刊登商品时使用。
compatibility: 适用于一人公司工作模式，支持 Hoxi 统一账号一键免填授权、内置浏览器协同及本地商品表格/图片附件处理
metadata:
  author: "Hoxi"
  version: "1.1.0"
---

# 轻铺 AI 智能上品与多平台刊登技能 (`qingpu-ops`)

## 适用场景

- **1688 / 竞品链接洗稿与高溢价重构**：将供应商原始参数表、1688 采集素材或竞品链接清洗提炼，去除生硬厂牌词，重构为符合欧美/日德/东南亚市场审美的高转化商品方案。
- **多平台一键适配刊登**：围绕同一款核心选品，同步生成适配独立站（Shopark / Shopify）、Amazon、TikTok Shop 等多渠道的差异化标题、五点描述、SKU 变体矩阵与汇率加价方案。
- **电商主图与详情视觉脚本**：输出首屏白底图、痛点对比图、场景氛围图、尺寸规格图与 A+ 模块的逐张构图指令与内嵌文案。

## 执行步骤

### 1. 读取当前轻铺店铺工作区与品牌记忆
1. 读取当前选中的「轻铺店铺工作区」（目标渠道、店铺名称、默认计价币种与加价倍率）以及 `<workspace>/.hoxi/memory/project.md` 品牌档案。
2. 若用户上传了商品原图、CSV/Excel 表格或粘贴了供货链接，先提取核心材质、尺寸、痛点场景与成本结构。

### 2. 商品上架结构化产出标准
每款商品的上品方案必须包含以下 5 个可直接落地的模块，并保存为工作区 Markdown 文件供右侧画布预览：
1. **SEO & 转化双优标题**（主标题 + 副标题 + URL Handle 建议，前置核心高意图搜索词）。
2. **首屏 5 点黄金卖点（5 Key Bullet Points）**：采用「痛点场景/利益点 + 产品特性证明」结构。
3. **详情页故事线（AIDA 模型）与视觉脚本**：痛点共鸣 → 核心工艺拆解 → 场景对比与规格表 → 品质保障与 CTA。
4. **多规格（Variants）与跨境阶梯毛利定价表**：自动核算单件装、2 件折上折、3 件家庭囤货装的售价与净利率。
5. **结构化 FAQ（3–5 题）**：消除尺码、兼容性、物流时效与退换货顾虑。
