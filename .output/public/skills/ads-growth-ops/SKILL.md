---
name: ads-growth-ops
description: Operate Meta Ads (Facebook/Instagram), Google Ads (Search/PMax/YouTube), and TikTok Ads paid acquisition campaigns, creative hook variations, audience testing matrices, and full-funnel ROAS diagnostics. 运营海外与国内付费广告投流增长（Meta Ads / Google Ads / PMax / 巨量千川）：高点击买量素材文案与视觉钩子裂变、ABO/CBO 受众测试矩阵、ROAS 转化漏斗诊断与落地页 A/B 测试。当用户要求撰写广告投放文案、策划买量素材、搭建广告账户结构或诊断广告 ROAS 掉量原因时使用。
compatibility: 适用于一人公司、独立站 DTC 买量与跨境投流工作模式，支持 Ads MCP、内置浏览器落地页体检与转化漏斗测算
metadata:
  author: "Hoxi"
  version: "1.0.0"
---

# Meta & Google Ads 全域投流增长技能 (`ads-growth-ops`)

## 适用场景

- **Meta Ads (FB / IG) 买量素材与文案裂变**：围绕同一款主推单品，按不同受众痛点切入角（Angles）批量生成 Primary Text（首行折叠钩子 + PAS 正文）、Headline（标题）、Description 与 1:1 / 4:5 / 9:16 视觉图片/视频脚本。
- **Google Ads (Search & Performance Max) 搜索与效果最大化全案**：生成高商业意图关键词组（Exact / Phrase）、否定关键词清单、RSA 响应式搜索广告（15 条 30 字符内标题 + 4 条 90 字符内描述）以及 PMax 素材资源组（Asset Group）受众信号方案。
- **全漏斗 ROAS 诊断与保本盈亏平衡测算**：根据客单价（AOV）、产品毛利率、CPM、CTR、CPC、落地页加载率、加购率（ATC%）与结账转化率（CVR），精准计算保本 ROAS（Break-even ROAS），定位亏损环节并给出调优动作。
- **ABO 测试 → CBO/ASC 放量账户结构规划**：为冷启动新像素（Pixel）或新品设计低风险测试预算分配、关停止损标准（Kill Rules）与扩量规则（Scaling Rules）。

## 执行步骤

### 1. 先算账：盈亏平衡与保本 ROAS 校核
1. 明确商品售价（AOV）、含运费综合成本（COGS + Shipping）与支付手续费。
2. 计算单均毛利与 **保本 ROAS = 售价 ÷ 单均毛利**，以及目标盈利 ROAS 与最高可承受 CPA（Target CPA）。

### 2. 买量素材 4 大高转化切入角（Creative Angles，保存至 `campaigns/`）
1. **痛点暴击角（Problem / Agitation）**：直击用户使用传统方案的抓狂瞬间，前 3 秒抛出解决方案。
2. **Us vs. Them 降维对比角**：直观展示本品与市面普通品/大牌平替在材质、效果或性价比上的碾压优势。
3. **真实买家证言与开箱角（UGC Social Proof）**：以第一人称“本来以为是智商税，结果真香”口吻打消信任顾虑。
4. **限时优惠与组合装锚点角（Offer / Bundle Hook）**：突出买赠、阶梯折扣或 30 天无理由试用零风险承诺。

### 3. 全漏斗数据诊断标准（Metric Benchmarks）
- **外层点击率（Link CTR）偏低（< 1.0%）**：说明素材前 3 秒画面/首图或 Headline 钩子吸引力不足，优先换 Hook 而不急于改落地页。
- **CTR 高但加购率（ATC < 5%）偏低**：说明广告预期与落地页首屏脱节、页面加载过慢（LCP > 3s）或价格/运费门槛劝退。
- **加购多但发起结账/支付转化低**：检查隐藏高额运费、是否缺少 PayPal / Shop Pay / Apple Pay 快捷支付及信任背书。

## 输出与安全红线
- 所有广告文案矩阵、RSA 词表与漏斗诊断报告均保存至工作区 `campaigns/` 目录供右侧画布审阅。
- **安全门控**：涉及通过 MCP 或浏览器调整线上广告预算、开启广告系列或关停广告组的操作，必须先列出预算金额影响并获得用户显式确认。
