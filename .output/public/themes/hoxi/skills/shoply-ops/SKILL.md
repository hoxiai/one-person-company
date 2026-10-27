---
name: shoply-ops
description: Manage Shoply independent e-commerce stores, SaaS tenant licenses, APay partner contracts, and GoPanel production operations (runshoply.com / iqingpu.com / shoply.page). 管理 Shoply 独立站店铺、SaaS 租户订阅权益、APay 合作方接口契约与线上容器运维。当用户要求查询独立站店铺大盘、查看商家店铺与订单 GMV、创建新独立站、生成店铺后台免密登录链接、对账同步客户订阅权益、跟进建站咨询线索、检查四项接入自检或排查 Shoply 线上容器与 PHP 进程池时使用。Use when the user asks to inspect or create Shoply stores, generate store admin SSO URLs, sync or reconcile SaaS licenses, check consulting leads, run partner smoke tests, or diagnose Shoply Go/PHP/Podman services.
compatibility: 需要访问 Shoply 或 APay 工作区、对应合作方环境变量或受控 GoPanel 节点
metadata:
  author: "Hoxi"
  version: "1.1.0"
---

# Shoply 独立站店铺管理与经营技能 (`shoply-ops`)

## 适用场景

- **商家独立站一键管理**：基于 Hoxi 统一账号一键免填拉取名下独立站列表、剩余可开店配额（`quota`）、14 天试用状态、单店与汇总 30 天订单量 / GMV / UV，创建新独立站，或签发一次性免密进入店铺后台的 SSO 链接。
- **高转化建站与商品运营**：为当前选中的 Shoply 店铺规划首页视觉布局、高转化商品详情页、限时闪促与满减规则，并巡检库存预警与异常订单。
- **SaaS 平台主理人运营**：查询全平台店铺大盘（总店数、活跃/试用/7 天内即将到期 `expiringStores`、出单店数、时区/币种/套餐/类目分布），按店名/域名/客户邮箱检索店铺。

## 执行步骤

### 1. 识别当前选中店铺工作区
- 优先读取工作台注入的「当前绑定店铺」上下文（店铺名称、站点域名、Store ID、币种），所有分析、建站、商品上架与促销策划均围绕当前选中的 Shoply 店铺展开。
- 当用户需要查看账号下全部店铺、订单或订阅权益时，优先调用已授权的 `apay_get_profile`、`apay_list_orders`、`apay_list_subscriptions` 等 MCP 工具。

### 2. 独立站店铺与经营动作规范
1. **查询店铺大盘或商家店铺（只读安全操作，可直接执行）**：
   - 汇总活跃店数、近 30 天订单量与 GMV、客单价、转化漏斗及 7 天内即将到期预警，先给出 1–3 句核心结论，再列出可执行建议。
2. **创建新独立站或修改线上配置**：
   - 创建店铺或修改价格/折扣前，先向用户展示结构化参数清单并确认后再执行。
3. **成果沉淀**：
   - 生成的建站方案、商品详情、促销活动与邮件模板同步写入当前工作区 Markdown 文件，供右侧「成果画布」直接预览与复用。
