---
name: shopify-ops
description: Manage Shopify stores, product and variant listings, Liquid theme customization, Collections and Metafields, discount campaigns, abandoned checkout recovery, and order/inventory operations. 管理 Shopify 独立站商品与多规格上架、Liquid 主题装修与转化率优化、商品系列（Collections）与元字段（Metafields）、折扣活动与弃单挽回、订单履约与库存巡检。当用户要求运营 Shopify 店铺、上架或批量优化 Shopify 商品、修改 Liquid 模板、设置折扣码或排查订单库存时使用。
compatibility: 适用于一人公司与跨境独立站工作模式，支持 Shopify Admin MCP、内置浏览器店铺体检与 CSV/Markdown 资产导出
metadata:
  author: "Hoxi"
  version: "1.0.0"
---

# Shopify 独立站全域运营技能 (`shopify-ops`)

## 适用场景

- **商品与变体（Variants）高转化上架**：从原始产品资料、供应商表格或竞品链接生成符合欧美/全球 DTC 标准的 Shopify 商品方案（Title、URL Handle、5 点卖点、AIDA 详情 HTML/Markdown、多规格变体定价、Tags、Collections 与 Metafields）。
- **Liquid 主题装修与转化率优化（CRO）**：针对 Dawn 等主流 OS 2.0 主题设计首页、商品落地页（PDP）与集合页（Collection Page）的 Section 结构、JSON Schema 配置、信任徽章（Trust Badges）与加购动线（Sticky ATC / Upsell）。
- **大促折扣、捆绑加购与弃单挽回**：策划满减/阶梯折扣码（Discount Codes）、买赠（BOGO）、高客单价 Bundle 组合，以及 3 封高打开率的 Abandoned Checkout（弃单挽回）与欢迎序列邮件。
- **日常经营大盘、订单履约与库存预警**：巡检店铺 GMV、转化率漏斗（浏览 → 加购 → 发起结账 → 支付成功）、高风险欺诈订单筛查与热销 SKU 安全库存补货测算。

## 执行步骤

### 1. 确认店铺与品牌上下文
1. 优先读取工作区 `.hoxi/memory/project.md` 或当前已绑定的 Shopify 站点域名（`*.myshopify.com` 或品牌主域名）、目标国家市场、结算币种与品牌语调。
2. 若已连接 `shopify-mcp`，优先通过 MCP 工具读取实时商品、系列、订单与库存数据；未连接时生成可直接导入或复制的标准结构化文档与 CSV/JSON 载荷。

### 2. Shopify 商品上架标准产出（5 大核心要素）
1. **SEO Title & Handle**：核心搜索词前置，控制在 55–70 字符；生成简短语义化 `handle`（全小写连字符）与 155 字符内的 `SEO Meta Description`。
2. **Above-the-Fold 黄金 5 点（Bullet Points）**：每条采用「Emoji/图标 + 2–4 词粗体利益点标题 + 具体场景/参数支撑」，直击买家痛点。
3. **高说服力详情页结构（OS 2.0 模块化）**：
   - 痛点唤醒与核心价值主张（Hero Callout）
   - 3 大核心特性拆解与微距/动图视觉指导（Feature Grid）
   - 品牌 vs 市面普通品对比矩阵（Us vs. Them Table）
   - 规格参数、包装清单与尺码指南（Specs & Size Chart）
   - 物流时效、30 天无忧退换承诺与高频 FAQ（5 题）
4. **Variants & AOV 阶梯定价**：设计单件装、最受欢迎双件装（Most Popular，享 10%–15% 折扣）与家庭/礼盒装，搭配 Cart Drawer 顺手买一件（Order Bump）。
5. **Collections & Metafields 规范**：明确建议归属的 Automated Collection 规则（按 Tag/Type）及自定义 `custom.*` Metafields 字段（材质、洗护说明、质保期）。

### 3. Liquid 主题装修与 CRO 诊断规范
- 修改或生成 Shopify OS 2.0 Section 代码时，确保 `{% schema %}` JSON 合法、支持 Theme Editor 可视化拖拽配置，并遵循移动端优先（Mobile-First）字号与按钮触控间距（最小 44px）。
- 使用内置浏览器诊断线上店铺时，重点排查：首屏 LCP 大图体积、价格与折扣标签清晰度、Add to Cart 按钮首屏可见性、快捷支付（Shop Pay / PayPal / Apple Pay）展示与运费门槛提示。

### 4. Chrome Link 浏览器半自动后台填入工作流
- 当用户已通过 **Chrome Link 扩展**连接本机已登录的 Shopify Admin 后台标签页（`admin.shopify.com/store/*`）时，优先使用 `hoxi_browser` 工具执行半自动操作：
  1. 先调用快照/读取当前页面 DOM，确认处于「Add product」「Discounts」或「Themes」目标编辑页。
  2. 自动将定稿的 Title、Description、SEO Handle、Variants 价格或折扣码参数填入对应表单输入框。
  3. **严格停在最终「Save / Publish（保存/发布）」按钮之前**，截图或汇总已填入字段供用户核对，由用户确认或亲手点击保存。

## 输出与安全红线
- 将生成的商品上架案、Liquid 代码片段、折扣方案或邮件序列同步写入工作区 Markdown/代码文件（如 `products/`、`campaigns/` 目录），方便在右侧画布直接预览与复用。
- **凭据不出本机**：Shopify Admin Access Token（`shpat_...`）与店铺私有 API 仅在本机桌面环境或直连 Shopify 官方端点时使用，严禁经第三方中转服务器明文透传。
- **安全门控**：任何通过 MCP、本地脚本或浏览器修改线上 Shopify 商品价格、库存数量、发布主题更改、创建全店折扣码或执行订单退款的操作，必须先向用户展示变更前后对比并获得显式确认。
