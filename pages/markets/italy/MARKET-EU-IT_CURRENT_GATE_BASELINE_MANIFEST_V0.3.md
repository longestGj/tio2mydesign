# MARKET-EU-IT 当前Gate基线Manifest V0.3

## 1. 当前唯一批准基线

- Page ID：`MARKET-EU-IT`；Italy；EN；`/markets/italy/`；`site_scope=tio2-my`。
- Gate 1：`MARKET-EU-IT-G1-01 = APPROVED / CLOSED`。
- 独立审查：2026-09-06 `PROJECT_CONTROL_REVIEW_PASS`；用户阶段关闭：2026-09-07。
- `CONTENT_INTENT_CONFIRMED=CONFIRMED`；`CONTENT_AND_FACT_APPROVED=APPROVED`；生命周期=`APPROVED_FOR_DESIGN`。
- Gate 2–10：`NOT_STARTED / NOT_AUTHORIZED`。
- 本V0.3取代V0.2成为唯一当前组合入口；V0.1/V0.2与所有研究源保留为历史，不覆盖其字节。

## 2. 批准对象与范围

| ID | 对象 | 当前状态 |
|---|---|---|
| IT-D01 | Italy工业采购supplier/product-first方向；木器/工业涂料、compound/masterbatch、包装印刷语境；主RFQ、次Explore Products | `USER_APPROVED / CLOSED` |
| IT-D02 | Italy页面可写“A Certificate of Origin is available upon request.”及同义正文/SEO/GEO/社交元数据/Schema | `USER_APPROVED / CLOSED` |
| MARKET-EU-IT-G1-01 | Italy Gate 1研究、意图、事实边界及阶段 | `APPROVED / CLOSED` |

不扩张为Italy本地库存、客户、语言服务、固定交期、特定Grade推荐/认证、关税或待遇结论。

## 3. 当前权威文件与哈希

所有路径相对 `D:/23MySec/`；Manifest不记录自身哈希。

| 角色 | 当前文件 | SHA-256 |
|---|---|---|
| 完整 Brief | `docs/page-briefs/MARKET-EU-IT_ITALY_BRIEF_V0.2.md` | `DD5389343EB4ADC884E5EF250CE08F831C710AD7607495121AB4DC7A7B981677` |
| Gate 1综合研究 | `pages/markets/italy/01_research/MARKET-EU-IT_GATE1_RESEARCH_REPORT_V0.2.md` | `5980D967022557668E69D59940B2B3F9E8FFF1CB6E49828F61E25FD5D3933EAC` |
| 命题证据CSV | `pages/markets/italy/01_research/MARKET-EU-IT_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv` | `B92F02ABFC258066DE585C1819570878FA95F53D9BF4D043B8F4E85291A4EF2A` |
| 独立总控审查 | `pages/markets/italy/05_review/MARKET-EU-IT_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md` | `4C65AEAA948F0AA9D7140D03817628203289195091B3E84E3B95D31C5D98270B` |
| 用户批准与关闭记录 | `pages/markets/italy/05_review/MARKET-EU-IT_GATE1_USER_APPROVAL_AND_CLOSURE_V0.1.md` | `A8361B6738FFA3E87045E8E20EB48E98FA03DFBBF031A8EA10281F07C4EE19A9` |
| 当前唯一入口 | `pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md` | 不记录自身哈希 |

Brief与研究报告中阶段未关闭的文字是形成时的历史状态；当前阶段与消费顺序以本Manifest和关闭记录为准，不重复要求用户确认IT-D01/02。

## 4. 后续消费与权限

- Gate 2由其他 controller 在获得独立授权后消费本 Manifest，必须保留Italy独有语境、跨页owner边界及PRODUCT V0.3关系限制。
- 当前可选Italy库存、客户、意大利语支持等事实未获批准，不进入正文或机器可读字段；未来若拟使用再逐句确认，不是当前整页Hold。
- 不授权 Gate 2–10、开发、部署、发布、DNS或索引；未操作 `D:/16Wordpress_nextjs`。

## 5. 历史

- V0.1：独立总控审查前/用户内容批准前的研究组合。
- V0.2：方向/CTA/COO已批准但Gate 1阶段未正式关闭的组合；SHA-256 `5D49E7A7C3BEF74DA3C5E7069CC6EBCB74DD8F25D7F0210568C972011DDA5894`。
