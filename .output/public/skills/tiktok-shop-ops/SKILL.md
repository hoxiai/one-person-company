---
name: tiktok-shop-ops
description: Operate TikTok Shop cross-border and local stores, product listing optimization, affiliate creator outreach, short-video shopping scripts, livestream runbooks, and GMV Max ad diagnostics. 运营 TikTok Shop 跨境与本土小店：商品标题与详情合规上架、达人建联（Affiliate）邀约话术、挂车短视频黄金 3 秒带货脚本、直播间排品话术与投流 ROAS 诊断。当用户要求运营 TikTok 小店、撰写达人邀约信、策划挂车短视频或诊断 TikTok 投流转化时使用。
compatibility: 适用于一人公司与跨境社交电商工作模式，支持 TikTok Shop MCP、达人建联模板与短视频分镜生成
metadata:
  author: "Hoxi"
  version: "1.0.0"
---

# TikTok Shop 跨境与短视频带货运营技能 (`tiktok-shop-ops`)

## 适用场景

- **小店商品合规上架与爆款卡位**：针对美区（US）、英区（UK）或东南亚（SEA）市场，生成符合 TikTok 算法推荐与搜索习惯的商品标题、9 图视觉脚本（主图卖点图 + 场景图 + 尺码/对比图）、合规详情页与阶梯促销价（Flash Deal）。
- **达人建联（Affiliate）与寄样催片 SOP**：批量生成高回复率的达人邀约私信（DM）、邮件话术、Target Collaboration 专属高佣方案、寄样跟进表与达人挂车催片/二创投流授权沟通话术。
- **挂车短视频（Shoppable Video）黄金 3 秒裂变**：围绕痛点暴击、开箱测评、猎奇解压、前后强对比等高转化范式，输出带时间戳、镜头景别、画面动作、地道英文/当地语口播（Voiceover）与购物车贴纸引导的分镜脚本。
- **直播带货排品话术与 GMV Max 投流诊断**：设计直播间引流福利品/主推爆款/高毛利连带品排品节奏、主播憋单逼单话术，以及诊断短视频 CTR、3 秒完播率、点击加购率与广告 ROAS 漏斗。

## 执行步骤

### 1. 明确目标站点与品类规则
1. 确认目标市场（如 TikTok Shop 美区、英区或东南亚各国）、商品类目、客单价区间与目标受众画像。
2. 严格排查 TikTok Shop 禁限售与夸大宣传红线（避免绝对化医疗功效、侵权品牌词、虚假前后对比承诺）。

### 2. 达人建联（Affiliate Outreach）高转化标准
1. **私信/IM 首触达（控制在 300 字符内）**：开门见山说明「为什么你的账号风格契合这款产品 + 核心佣金比例（如 20%–25% Commission）+ 免费寄样（Free Sample）无强制硬广压力」。
2. **邮件深度邀约**：包含产品核心爆点（Viral Hook）、同品类爆款视频参考角度、阶梯佣金或保底奖励机制。
3. **寄样后跟进（Sample Delivered Follow-up）**：签收后 24 小时附上「3 个已被验证易爆的拍摄切入点（Content Angles）」，降低达人创作门槛、提升出片率。

### 3. 挂车短视频脚本结构（15–35 秒高转化黄金结构）
- **0–3s 黄金钩子（Visual + Verbal Hook）**：第一帧直接展示痛点翻车现场、极具冲击力的使用效果或反常识提问（配大字居中醒目字幕）。
- **3–12s 痛点解决与核心演示（Problem → Solution Demo）**：快节奏近景特写，最多讲透 1–2 个肉眼可见的核心卖点。
- **12–22s 信任背书与场景延伸（Social Proof / Objections）**：展示真实细节、多场景适用性或买家好评反馈。
- **22–30s 强行动号召（Urgency CTA）**：明确指向左下角小黄车（Orange Shopping Cart），强调限时闪促折扣或免邮门槛。

### 4. Chrome Link 卖家中心与达人广场半自动工作流
- 当用户已通过 **Chrome Link 扩展**连接本机已登录的 TikTok Shop Seller Center 或 Affiliate Center 标签页时，可使用 `hoxi_browser` 辅助执行：
  1. 在商品发布页或达人定向邀约（Target Collaboration）弹窗中，自动填入定稿的商品标题、合规卖点描述或 300 字符内的定制邀约话术與佣金比例。
  2. **停在最终「Submit / Send Invitation / Publish」按钮之前**，提示用户检查无误后点击发送，避免触发平台风控或误发。

## 输出与安全红线
- 将达人邀约话术包、挂车视频分镜表、商品上架方案或直播脚本保存为工作区 Markdown 文件（如 `products/` 或 `campaigns/` 目录），方便在右侧画布审阅与一键复制。
- **安全门控**：涉及修改 TikTok Shop 线上商品售价、开启全店秒杀折扣、批量发送达人定向邀约或调整广告预算的操作，必须先列出明细并经用户确认。
