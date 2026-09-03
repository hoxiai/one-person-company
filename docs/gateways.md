# AI 中转专线：实测天梯、验真方法与 IDE 配置

> **更新于 2026-09-04** ｜ 在线版：**<https://hoxi.ai/gateways>**

不看广告看疗效。这里的延迟与在线率是**用真实 API Key 持续实测**出来的，不是厂商宣传页抄的。

---

## 一、为什么一人公司需要中转专线

| 痛点 | 中转怎么解 |
|---|---|
| 海外信用卡门槛 | 微信 / 支付宝扫码充值 |
| 官方风控封号 | 走中转不碰官方风控 |
| 网络不稳、首字慢 | 国内直连专线，TTFT < 300ms |
| 订阅闲置也扣款 | 按真实 token 扣费，**额度永久有效** |
| 想同时用多家旗舰 | 一个 Key 打通多厂商，OpenAI 协议兼容 |

**代价**：得自己承担「选对渠道」的风险——这就是下面两节存在的意义。

---

## 二、实测天梯

| 专线 | 实测延迟 | 在线率 | 参考单价 | 相对官方 | 特点 |
|---|---:|---:|---:|---:|---|
| **AINode 极速专线** | 280ms | 99.99% | ¥2.80 / M | **降 87%** | 国内双线直连、满血思考模式、余额不过期 |
| **DeepSeek 满血直连** | 295ms | 99.95% | ¥0.55 / M | **降 86%** | 国内高并发集群、64K 上下文、Cursor 即插即用 |
| **DuiAPI 聚合** | 380ms | 98.8% | ¥0.70 / M | **降 82%** | 模型较全、支持多种聚合格式 |

⚠️ **注意事项**：
- AINode 只做高质量企业专线，**不提供几分钱的掺水 / 降智渠道**
- DeepSeek 直连在晚高峰遇官方算力波动时会平滑切换备用算力池
- DuiAPI 高峰期偶有排队，**建议小额测试后再充值**

> 完整天梯（含更多渠道与历史实测记录）：<https://hoxi.ai/gateways>

---

## 三、如何验真：别被掺水降智坑了

这行最常见的三种坑：**偷换小模型、悄悄降低推理档位、上下文被截断**。
充值前花十分钟做这四步，能挡掉九成劣质渠道：

### ① 小额测试，永远先充最小额

**任何新渠道，第一笔不超过 ¥10。** 便宜的渠道最贵的地方在于返工时间。

### ② 问模型自己是谁（弱验证，但零成本）

```bash
curl https://你的中转地址/v1/chat/completions \
  -H "Authorization: Bearer $YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"目标模型名","messages":[{"role":"user","content":"你是哪个公司训练的哪个模型？只回答型号。"}]}'
```

⚠️ 这一步只能挡住最粗糙的假冒——**能改系统提示的渠道照样能骗过它**。真正靠谱的是下面两步。

### ③ 跑一段你自己的真实任务，比对体感

拿一个**你熟悉答案的**复杂重构任务，官方和中转各跑一遍：

- 改完的代码**能不能直接跑**
- 长对话到第 20 轮**会不会开始跑偏**
- 同一道题**要不要来回追问三次**

体感差异比任何自检接口都诚实。

### ④ 查上下文与响应字段

```bash
# 塞一段超过 64K 的长文本，看是否被静默截断
# 并检查返回的 usage 字段是否与你的实际用量吻合
```

**返回里没有 `usage` 明细、或者数字明显对不上的渠道，直接放弃。**

### 🚩 五个危险信号

1. 单价低到离谱（旗舰模型几分钱一百万 token）
2. 不公开计费明细，只给一个总余额数字
3. 只有 QQ / TG 群，没有工单和退款说明
4. 模型列表里塞满「顶配加速版」这类官方不存在的型号名
5. 余额有有效期，或者「充多少送多少」但送的部分先扣

---

## 四、各工具配置片段

中转普遍兼容 **OpenAI 协议**，改两个字段就能跑。以下用 AINode 举例，换成你自己的渠道地址即可。

### Cursor

设置 → Models → 打开 **Override OpenAI Base URL**：

```
Base URL:  https://api.ainode.run/v1
API Key:   sk-ainode-xxxxxxxxxxxxxxxxxxxx
```

填完点 **Verify**，通过后就能在模型下拉里选。

### Cline / Roo Code（VS Code 插件）

API Provider 选 **OpenAI Compatible**：

```json
{
  "openAiBaseUrl": "https://api.ainode.run/v1",
  "openAiApiKey": "sk-ainode-xxxxxxxxxxxxxxxxxxxx",
  "openAiModelId": "你要用的模型名"
}
```

### Claude Code CLI

用 Anthropic 协议的环境变量：

```bash
export ANTHROPIC_BASE_URL="https://api.ainode.run"
export ANTHROPIC_API_KEY="sk-ainode-xxxxxxxxxxxxxxxxxxxx"
```

写进 `~/.zshrc` 或 `~/.bashrc` 即可长期生效。

### 任意 OpenAI SDK 项目

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.ainode.run/v1",
    api_key="sk-ainode-xxxxxxxxxxxxxxxxxxxx",
)
```

> 🔐 **别把 Key 硬编码进仓库**。用环境变量或 `.env`，并确认 `.env` 已在 `.gitignore` 里。
> Key 一旦推上 GitHub，几分钟内就会被扫走刷爆。

---

## 五、常见问题

**Q：中转和官方比，能力会打折吗？**
A：正经渠道转发的是原始请求，能力一致；打折的都是在偷换模型或降档位。所以**验真比比价重要**。

**Q：会不会哪天跑路？**
A：会。所以**别一次充太多**——按一到两个月用量充值，是这行最基本的风险控制。

**Q：企业能用吗？要发票怎么办？**
A：需要发票和合规的，优先走[国内平台的官方套餐](coding-plan.md)，支付宝直付、可开增值税发票。

**Q：延迟到底重要吗？**
A：写代码时**首字延迟（TTFT）比总吞吐更影响体感**。300ms 和 1.5s 的差别，一天下来就是几十分钟的等待。

---

## 延伸阅读

- 💰 [AI 算力省钱手册](savings.md)
- 📦 [国内外 Coding Plan 全面对比](coding-plan.md)
- 📖 完整天梯与评测：<https://hoxi.ai/gateways>
