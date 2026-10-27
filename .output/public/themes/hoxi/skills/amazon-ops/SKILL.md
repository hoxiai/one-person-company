---
name: amazon-ops
description: Operate Amazon Seller Central cross-border stores, A9 SEO product listings (Title, 5 Bullet Points, Backend Search Terms), A+ Content visual scripts, PPC ad keyword and negative keyword optimization, and customer review (VOC) analysis. 运营亚马逊（Amazon）跨境店铺：A9 算法高权重 Listing（标题、五点描述、后台 Search Terms）、A+ 页面视觉脚本、SP/SB 广告否词与 ACOS 诊断、竞品差评（VOC）痛点挖掘与售后申诉。当用户要求撰写或优化亚马逊 Listing、设计 A+ 页面、分析亚马逊广告报表或挖掘竞品 Review 时使用。
compatibility: 适用于一人公司与亚马逊北美/欧洲/日本站点卖家，支持 Amazon MCP、内置浏览器竞品抓取与广告词表分析
metadata:
  author: "Hoxi"
  version: "1.0.0"
---

# Amazon 亚马逊跨境爆款与广告运营技能 (`amazon-ops`)

## 适用场景

- **A9 算法高转化 Listing 全案撰写**：根据产品参数、核心关键词词库与竞品卖点，输出符合亚马逊各站点（US / UK / DE / JP）规范的 Title、5 条利益痛点型 Bullet Points、Product Description 与 249 Bytes 以内的后台 Search Terms。
- **A+ 页面（EBC）与品牌旗舰店脚本**：规划高转化率 A+ 页面 6–7 个标准模块（首屏主视觉横幅、3 栏痛点与功能拆解、使用场景大图、竞品对比表 Comparison Chart、包装规格与品牌故事）。
- **PPC 广告（SP / SB / SD）诊断与否词优化**：分析搜索词报表（Search Term Report），识别高花费零转化词（精准/词组否定）、提炼高转化出单词升级为 Exact 手动精准大词，降低 ACOS、提升 TACOS 盈利能力。
- **竞品 Review（VOC）差评拆解与选品改款**：提炼同类目 BSR 前 10 竞品的 1–3 星差评高频痛点与 5 星好评爽点，指导产品微创新、五点防差评话术与 QA 预埋。

## 执行步骤

### 1. 读取站点、类目与品牌上下文
1. 优先读取工作区 `.hoxi/memory/project.md` 确认目标亚马逊站点（美/英/德/日）、目标客群与品牌名。
2. 严格遵守亚马逊 Listing 字符数与合规红线（禁止出现促销词如 Best Seller / Free Shipping / 100% Quality Guaranteed、禁止竞品商标侵权词、遵守主图纯白底 RGB 255,255,255 规范）。

### 2. Amazon Listing 五大交付要素（保存至 `products/` 目录）
1. **Title（150–195 字符）**：`[Brand] + [Core Keyword 1] + [Key Feature / Material / Size] + [Use Case / Target Audience] + [Color/Pack]`，首字母大写（介词除外），移动端前 80 字符露出核心词与最大卖点。
2. **5 Key Bullet Points（每点 200–240 字符）**：
   - 全大写痛点利益短语开头（如 `【EFFORTLESS 3-SECOND SETUP】` 或 `UPGRADED LEAK-PROOF SEAL:`）
   - 埋入中长尾核心词，前 3 点解决核心功能、材质耐用度与痛点场景，第 4 点讲易用性/尺寸适配，第 5 点讲礼赠场景与售后保障。
3. **Backend Search Terms（严格控制在 249 Bytes 以内）**：去重 Title 与五点已用词，补充同义词、拼写变体、西语高频词（美站适用）与场景词，空格分隔、不加标点。
4. **7 张主附图拍摄/设计脚本**：1 张纯白底高占比主图 + 2 张核心功能痛点信息图 + 1 张尺寸与包装清单图 + 1 张竞品 Us vs. Others 对比图 + 2 张目标人群生活场景图。
5. **A+ 页面模块排版表**：逐模块给出标题、核心文案、画面构图指导与底部可点击关联交叉销售（Cross-sell）比较表。

### 3. 联动 Chrome Link 浏览器与卖家后台
- 如用户已通过 Chrome Link 连接亚马逊前台或 Seller Central，可读取竞品 ASIN 页面结构提取五点与 Review 槽点，或协助将数据填入后台草稿框（严禁未经确认直接点击 Save and Finish 提交修改线上在售价格或库存）。
