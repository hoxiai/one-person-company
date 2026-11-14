---
name: qingpu-ops
description: Operate Qingpu AI (轻铺 AI / qingpu.ai) for 1688 store product scraping, 7-star seller quality audits, AI image editing (background removal, upscale, image-to-image), 9-platform e-commerce hero/scene/spec image generation, Ozon & Wildberries 4-layer draft pipelines, and multi-channel cross-border listing via `qingpu-mcp`, `hoxi ecom`, and `hoxi_browser`. 当用户要求抓取分析 1688 店铺上品数据、优化主图/第 5 张白底图、通过轻铺 AI MCP 修图生图、向 Ozon/WB 推送四层上品草稿或适配多渠道跨境刊登时使用。
compatibility: 适用于 Hoxi Work / Hoxi Code，支持轻铺 AI (`qingpu.ai`) OAuth 2.1 一键授权 (`qingpu-mcp`)、店铺防关联浏览器 (`hoxi_browser`) 与确定性电商引擎 (`hoxi ecom`)
metadata:
  author: "Hoxi"
  version: "1.2.0"
---

# 轻铺 AI 1688 运营、智能修图生图与多渠道上品技能 (`qingpu-ops`)

`qingpu-ops` 将 **Hoxi 本地能力**（店铺隔离浏览器 `hoxi_browser` + 确定性引擎 `hoxi ecom`）与 **轻铺 AI 官方远程 MCP（`qingpu-mcp`，`https://qingpu.ai/api/mcp`）** 串联成完整的「**1688 抓品落盘 → 7 星质量体检 → 轻铺 AI 修图/多平台生图 → Ozon/WB 四层草稿流水线与多渠道接力上品**」闭环。

---

## 一、核心工具分工矩阵

| 环节 | 首选工具 | 能力说明 |
| :--- | :--- | :--- |
| **1. 1688 店铺商品抓取与后台回填** | `hoxi_browser` | 复用已绑定店铺的隔离浏览器登录态抓取 1688 商品详情/后台列表，或将优化后的图文回填至卖家后台草稿 |
| **2. 1688 七星质量体检与跨境核价** | `hoxi ecom listing-check` / `profit` | 本地确定性校验 1688 标题 60 字节与 B2B 意图词、《广告法》极限词、第 5 张纯白底图、属性数、阶梯价与体积重到岸利润 |
| **3. 货源建档同步** | `qingpu-mcp`: `sync_source_product` | 将本地 `source-1688.json` 直接同步至轻铺云端商品库（目标为 `ozon`/`wb` 时返回 `elicitations` 卡点清单） |
| **4. 商品修图与白底抠图** | `qingpu-mcp`: `edit_product_image` | 支持 `image-bg-remove`（纯白底/透明底抠图）、`image-enhancer`（超清修复放大）、`image-to-image`（局部改图换景） |
| **5. 九大平台商拍生图** | `qingpu-mcp`: `generate_ecommerce_image` | 按 `1688`、`ozon`、`wb`、`amazon`、`tiktok`、`shopee`、`aliexpress`、`temu`、`taobao` 平台规范编译生成 `white_bg`、`hero`、`lifestyle_hero`、`scene`、`spec`、`detail` 成图 |
| **6. Ozon / WB 四层上品与草稿** | `qingpu-mcp`: `diagnose_blockers` → `enqueue_pipeline` → `resolve_elicitation` → `refresh_and_submit_draft` | 轻铺原生支持 **`ozon`** 与 **`wb`** 全自动四层流水线（事实翻译 → AI 补属性 → 俄语文案 → 蓝图生图 → 卖家后台草稿提交） |
| **7. 异步任务轮询与 COS 成图回收** | `qingpu-mcp`: `get_task_result` | 轮询生图/修图/流水线任务状态（支持 `taskIds`、`workflowRunId` 或 `productId`），返回腾讯云 COS 托管成图 URL 与交付物供本地落盘复用 |

---

## 二、标准四步作业流（SOP）

### Step 1：1688 店铺上品数据抓取与本地建档

1. 使用当前店铺会话的 `hoxi_browser` 打开 1688 卖家后台商品管理页或指定 `detail.1688.com/offer/<offer-id>.html` 链接，提取真实商品结构化字段并落盘至工作区 `products/<offer-id>/source-1688.json`：
   ```json
   {
     "offerId": "881234567890",
     "sourcePlatform": "1688",
     "sourceUrl": "https://detail.1688.com/offer/881234567890.html",
     "title": "源头厂家跨境专供食品级硅胶隔热餐垫厨房防滑沥水垫一件代发批发",
     "mainImageUrl": "https://cbu01.alicdn.com/img/ibank/O1CN01example1.jpg",
     "images": [
       "https://cbu01.alicdn.com/img/ibank/O1CN01example1.jpg",
       "https://cbu01.alicdn.com/img/ibank/O1CN01example2.jpg"
     ],
     "hasWhiteBgImage": false,
     "hasVideo": true,
     "attributes": [
       { "name": "材质", "value": "食品级硅胶" },
       { "name": "尺寸", "value": "40x30cm" }
     ],
     "skus": [
       { "skuId": "sku-grey-m", "name": "高级灰 40x30cm", "price": "16.80", "stock": 2000 }
     ],
     "priceBrackets": [
       { "minQty": 2, "unitCostCNY": 16.8 },
       { "minQty": 50, "unitCostCNY": 14.5 },
       { "minQty": 300, "unitCostCNY": 12.9 }
     ],
     "weightKg": 0.28,
     "lengthCm": 41,
     "widthCm": 31,
     "heightCm": 1.5
   }
   ```
2. **公网图片安全约束**：传给 `qingpu-mcp` 的参考图 URL 必须是公网可达的 `https://` 地址（如 `alicdn.com` 或腾讯云 COS），严禁传入 `http://`、内网 IP 或本地文件路径。

### Step 2：本地确定性 1688 七星质量体检与跨境核价

1. 运行确定性体检命令定位原商品短板（同时支持 `products/<offer-id>/source-1688.json` 与 `1688-ops` 产出的 `products/<slug>/product.json`，严禁凭感觉估算字节数与合规风险）：
   ```bash
   hoxi ecom listing-check \
     --platform 1688 \
     --seller-7star \
     --from-json "products/<offer-id>/source-1688.json"
   ```
2. 针对返回的 `issues` 逐项制定修复动作：
   - `ALIBABA_1688_TITLE_OVERFLOW` / `TITLE_SHORT` / `MISSING_B2B_INTENT` / `KEYWORD_STUFFING`：重构为 24–30 个汉字（48–60 权重字节）的「B2B 供货意图词（源头厂家/跨境专供/一件代发）+ 核心材质规格 + 高频品类词 + 场景词」，消除重复堆砌。
   - `CN_AD_LAW_SUPERLATIVE`：剔除《广告法》绝对化极限词，替换为客观检测参数。
   - `ALIBABA_1688_WHITE_BG_MISSING` / `IMAGE_COUNT_LOW`：在 Step 3 调用轻铺 `edit_product_image(mode="image-bg-remove")` 生成第 5 张纯白底图，调用 `generate_ecommerce_image(platform="1688", scene="hero"|"white_bg")` 补齐满 5 张高点击主图。
   - `ALIBABA_1688_ATTRIBUTES_SPARSE` / `PACKAGING_INCOMPLETE` / `INVALID_PRICE_TIERS`：补全 `>= 8` 项类目属性、阶梯价与精确单品毛重/外箱体积（跨境供货池与 Ozon/WB 运费核算必填）。
3. 如需测算目标跨境站点到手毛利与建议零售价，运行 `hoxi ecom profit` 输出阶梯到岸成本与保本 ROAS/ACOS。

### Step 3：调用 `qingpu-mcp` 同步货源、AI 修图与多平台生图

1. **同步货源商品**：
   - 调用 `sync_source_product(product=...)`，传入 `source-1688.json` 或 `product.json` 结构化对象（也可直接用 `intake_source_product(sourceUrl=...)` 按 1688 链接入库；若准备发往 `ozon` 或 `wb`，同时传 `channel: "ozon"` 或 `"wb"`，直接返回前置 `elicitations` 卡点卡片）。
2. **修图与第 5 张纯白底图补齐**：
   - 调用 `edit_product_image`（传公网 HTTPS `referenceUrl` 或已托管 `referenceAssetId`）：
     - `mode: "image-bg-remove"`：一键抠除杂乱工厂背景，产出 1688 第 5 张搜索加权白底图及跨境通用透明/白底主图；
     - `mode: "image-enhancer"`：模糊实拍原图超清增强；
     - `mode: "image-to-image"`：传入 `prompt` 在保持商品主体一致的前提下替换高级家居/户外场景或改色。
3. **按目标渠道规范生成商拍套图**：
   - 调用 `generate_ecommerce_image`，传入：
     - `platform`：`1688` | `ozon` | `wb` | `amazon` | `tiktok` | `shopee` | `aliexpress` | `temu` | `taobao`（引擎自动匹配该平台合规负向词与文案语种）；
     - `scene`：`white_bg` | `hero` | `lifestyle_hero` | `scene` | `spec` | `detail` | `contents` | `pain_solution` | `multi_angle`；
     - 可选 `ratio`（`1:1` | `3:4` | `9:16`）、`productTitle`、`sellingPoints`、`userPrompt`、`referenceUrls`（最多 3 张公网 HTTPS 参考图）、`quality`（默认 `high`）与 `count`（1–4）。
4. **轮询回收 COS 托管素材**：
   - 调用 `get_task_result(taskIds=[...], productId="...")`（每 3–5 秒轮询一次直至 `status: "succeeded"`；若有失败任务可调 `retry_failed_tasks(taskIds=[...])`），将返回的腾讯云 COS 成图 `imageUrls` 保存至 `products/<offer-id>/channels/<channel>/assets.json`。

### Step 4：分渠道上品执行与人工确认红线

1. **Ozon / Wildberries（`ozon` / `wb`）—— 轻铺四层原生草稿流水线**：
   - 调用 `diagnose_blockers(channel="ozon"|"wb", productIds=[productId])`（或 `test_store_connection` 实测店铺 API 连通性）检查店铺绑定、类目、包装尺寸、必填属性与卢布核价就绪度；
   - 若返回 `elicitations` 卡点选择卡（`blockerKey`: `store` | `category` | `packaging` | `attributes` | `pricing` | `skus`），向用户清晰展示候选值并调用 `resolve_elicitation(elicitationId, blockerKey, channel, productIds, selectedOption/formValues, autoContinue=true)` 原位回写；
   - 调用 `enqueue_pipeline(channel="ozon"|"wb", productIds=[productId], intent="content")`（可选 `intent`: `content` | `full` | `fill_images` | `translate_facts` | `attributes` | `translate` | `copy` | `images`）启动四层引擎，并用 `get_task_result(workflowRunId=..., productId=..., channel=...)` 跟踪进度；
   - 待流水线完成后，调用 `refresh_and_submit_draft(channel="ozon"|"wb", productIds=[productId])` 提交至 Ozon / WB 卖家后台草稿箱（后续轻铺扩展新渠道后自动沿用同一流水线工具）。
2. **1688 本店回填 / Amazon / TikTok Shop / Shopify —— 本地合规校验 + 隔离浏览器预填**：
   - 结合 Step 3 回收的轻铺 COS 视觉套图，运行 `hoxi ecom listing-check`（校验 Amazon 249 UTF-8 字节 Search Terms、EPA/FDA 违禁词、TikTok 3 秒钩子）或 `hoxi ecom shopify-csv` 生成导入包，保存至 `products/<offer-id>/channels/<channel>/listing.md`；
   - 如需写入卖家后台，通过绑定对应店铺代理环境的 `hoxi_browser` 上传图片与预填表单并保存草稿。
3. **发布安全红线（强制执行）**：
   - `qingpu-mcp` 仅写入渠道草稿箱（Draft），绝不静默执行正式上架；
   - 通过 `hoxi_browser` 在 1688 / Amazon / TikTok / Shopify 卖家后台执行**正式发布上架、线上商品改价、库存覆盖或删除**前，必须先向用户展示「变更前后对比摘要」并获得明确人工确认，严禁自动点击最终发布按钮。
