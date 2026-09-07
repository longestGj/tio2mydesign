# MARKET-EU-PL Current Gate Baseline Manifest V0.12

2026-09-07。本版接替V0.11作为当前页面组合与阶段入口；V0.10批准Gate 2组合、V0.11启动授权及前版成果均保留。

## 当前状态

| 项目 | 当前值 |
|---|---|
| Page ID / URL / language | MARKET-EU-PL / `/markets/poland/` / EN |
| 主关键词 / scope | `titanium dioxide supplier poland` / `tio2-my` |
| Gate 1 / Gate 2 | `APPROVED / CLOSED`，全文和五模块顺序不变 |
| Gate 3 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`，候选V0.1已完成执行、自检和总控独立审查，尚未用户批准或关闭 |
| 生命周期 / 事实 / 关键词 | `DESIGN_IN_REVIEW`；事实和关键词状态继承V0.10，无新变更 |
| Gate 4–10 / 开发发布 | 本轮未授权 |
| 本轮用户来源 | 2026-09-07：“先从波兰市场页开始吧。”；授权执行Gate 3，不能代替对实际候选的确认 |

[用户授权](05_review/MARKET-EU-PL_GATE3_USER_AUTHORIZATION_V0.1.md)；[历史启动Manifest V0.11](MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md)；[Gate 2批准组合V0.10](MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)；[Gate 2全文批准及关闭](05_review/MARKET-EU-PL_GATE2_FULL_COPY_USER_APPROVAL_AND_CLOSURE_V0.1.md)。本版不新增事实或阶段授权。

## 继续有效的批准输入

Brief、Gate 1事实、用户决定及接收边界沿V0.10继承。以下三项本轮前后实算一致：

| 对象 | 精确路径 | SHA-256 |
|---|---|---|
| A V0.2 | [Skeleton](04_planning/MARKET-EU-PL_GATE2_CONTENT_SKELETON_V0.2.md) | `9DC1D04D13AB68A147007E20520CD7FA92EBE7D009ACFD702124DD5CC12C7C9A` |
| B V0.2 | [唯一可见正文源](04_planning/MARKET-EU-PL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md) | `EF55A67FA56ECF7FC84072BC1B8F8CF3B62846A0F53B4B7DBE504887A36E15AA` |
| C V0.4 | [页面内容与操作合同](04_planning/MARKET-EU-PL_GATE2_CONTENT_CONTRACT_V0.4.md) | `77976A11A1792B425D2303C8B0FEDBAA22BC05A45C9F8A5026ACF8FA83110B30` |

## 当前Gate 3候选组合

- [可编辑HTML V0.1](04_planning/gate3-v0.1/MARKET-EU-PL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html)：16354 bytes；SHA-256 `2828406c99e52a3cd3990a06014284b18242f71ae7913d17925df474b9fe160a`。
- [资产清单](04_planning/gate3-v0.1/asset-inventory.json)：SHA-256 `08a3d6fae3609ae9f05a014946d1e471b89832f46c3c1a33d9bb8e3d80fda21d`。此精确清单绑定8张正式PNG、5项依赖快照、批准输入、角色/方法、Logo及支持证据的路径、字节数和hash；清单不是第二个页面Manifest。
- [渲染记录](04_planning/gate3-v0.1/render-evidence.json)：Chromium 152.0.7977.82；全部正式图DPR1，源hash与上述HTML相同。
- [总控实算身份](05_review/gate3-project-control-v0.1/audited-identity.json)及[提交清单逐项复核](05_review/gate3-project-control-v0.1/submission-inventory-audit.json)：实际尺寸、文件hash与对应记录一致。

| 资产 | 逻辑视口 / 物理导出 |
|---|---|
| [Desktop全页](04_planning/gate3-v0.1/MARKET-EU-PL_G3_FULL_1440_V0.1.png) | 1440×1000 / 1440×2387 |
| [Tablet全页](04_planning/gate3-v0.1/MARKET-EU-PL_G3_FULL_768_V0.1.png) | 768×1000 / 768×2854 |
| [Mobile全页](04_planning/gate3-v0.1/MARKET-EU-PL_G3_FULL_390_V0.1.png) | 390×1000 / 390×3810 |
| [Tablet菜单](04_planning/gate3-v0.1/MARKET-EU-PL_G3_MENU_768_V0.1.png) | 768×1000 / 768×1000 |
| [Mobile菜单](04_planning/gate3-v0.1/MARKET-EU-PL_G3_MENU_390_V0.1.png) | 390×1000 / 390×1000 |
| [Desktop Cookie](04_planning/gate3-v0.1/MARKET-EU-PL_G3_COOKIE_1440_V0.1.png) | 1440×1000 / 1440×1000 |
| [Tablet Cookie](04_planning/gate3-v0.1/MARKET-EU-PL_G3_COOKIE_768_V0.1.png) | 768×1000 / 768×1000 |
| [Mobile Cookie](04_planning/gate3-v0.1/MARKET-EU-PL_G3_COOKIE_390_V0.1.png) | 390×1000 / 390×1000 |

共享组合：Global Chrome V0.5及其未替代继承条款；品牌Visual Standard V1.0与Primary CTA Accessibility Addendum V1.0；Production SVG Logo Manifest V1.0；Footer Legal Utility Addendum V1.0与No-Terms决定；LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST V1.3和SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST V1.1。精确消费与来源记录见设计报告及source-binding.json。只读快照用于耐久显示，不升级为共享owner权威。Markets当前导航、固定RFQ、无CURRENT与当前法律入口已证明组装。

## 设计、自检和独立审查

- [设计方法报告V0.1](04_planning/gate3-v0.1/MARKET-EU-PL_GATE3_DESIGN_METHOD_REPORT_V0.1.md)：五模块映射、三端取舍、两项方法实际使用、共享消费及完整资产。
- [执行自检V0.1](05_review/MARKET-EU-PL_GATE3_EXECUTION_SELF_CHECK_V0.1.md)：执行者自检，不能替代独立审查；SHA-256 `c52df7be8de0424afd3a4b2996b713871a69d735c77d58348a4eed8a5fa5d882`。
- [总控独立审查V0.1](05_review/MARKET-EU-PL_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md)：全页可读分段、三端几何、90项实际本地交互/链接记录和身份复核；PL-G3-D01/D02已修复复验，无现存Gate 3阻塞缺陷。总控通过待用户确认。

设计源、渲染与自检的 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`保留为提交时身份，不覆盖历史来伪造执行者批准。当前阶段由本Manifest及独立审查记录表达。

## 尚待完成与停止点

本轮仅剩用户对这版线框结构的确认；取得明确决定后再记录Gate 3关闭。桌面分栏、平板独立重排、手机单列，保留全部批准正文与行动；没有新增内容、字段、页面或商业承诺。

本地链接仅记录批准href，不证明RFQ/Document目的页接收、上下文预填、真实提交或生产CMP。跨断点自动关闭/背景滚动锁定仅源检查；200%为执行方等效重排模拟，真实设备、读屏和浏览器UI缩放未测。后续路由、接收和实现验证归各owner及Gate 8/9，不作为本次结构未完成项，也不授予发布资格。Gate 4未授权，不自动继续。
