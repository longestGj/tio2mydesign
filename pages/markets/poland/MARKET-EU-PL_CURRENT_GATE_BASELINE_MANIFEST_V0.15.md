# MARKET-EU-PL Current Gate Baseline Manifest V0.15

2026-09-07。本版接替V0.14作为当前阶段入口；V0.14启动授权、V0.13 Gate 3批准组合及V0.12精确明细保留，不回写冻结输入。

| 项目 | 当前状态 |
|---|---|
| Page ID / URL / language | MARKET-EU-PL / `/markets/poland/` / EN |
| 主关键词 / site_scope | `titanium dioxide supplier poland` / `tio2-my` |
| Gate 1 / 2 / 3 | `APPROVED / CLOSED` |
| Gate 4 | **`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`**；V0.2视觉方向和代表样例已独立复验，待用户批准 |
| 生命周期 | `DESIGN_IN_REVIEW`；事实、关键词及外部实施状态分别继承现行批准源 |
| 当前授权 | [PL-G4-START-01](05_review/MARKET-EU-PL_GATE4_USER_AUTHORIZATION_V0.1.md)：先Poland、后Chloride Process的完整Gate 4执行顺序；未预批尚未展示的视觉结果 |
| Gate 5–10 / 开发发布 | 未授权 |

消费顺序：最新用户决定与根规则 → 本页最新批准对象 → [Gate 3批准组合V0.13](MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md)及其精确组合明细 → [Gate 3→4交接表](05_review/MARKET-EU-PL_GATE3_TO_GATE4_HANDOFF_V0.1.md) → 当前Gate 4候选组合与总控审查。Gate 2 A V0.2、B V0.2、C V0.4继续为批准输入；B是唯一可编辑对外正文源。

## Gate 4当前精确组合

候选目录：`04_planning/gate4-v0.2/`。冻结ID：**PL-G4-V02-SOURCE-01**。18张代表/共享状态图加6张hover及2张移动焦点图，共26张正式PNG；尺寸、比例和各自hash由导出清单绑定。HTML保留完整上下文用于样例渲染，交付范围不是Gate 5三端整页批准。

| 对象 | SHA-256 |
|---|---|
| [样例HTML](04_planning/gate4-v0.2/MARKET-EU-PL_GATE4_VISUAL_SAMPLES_V0.2.html) | `d87fb01ea6c1fd3c1f93002b71c5c86222db38a6a15bb26d7a8319503aac53c9` |
| [visual-rules.css](04_planning/gate4-v0.2/visual-rules.css) | `8d1299c9072b0413f242d4568cc62ed99cb6865a0938a7320c6f7ee5b4400785` |
| [视觉规则及方法报告](04_planning/gate4-v0.2/MARKET-EU-PL_GATE4_VISUAL_DIRECTION_AND_METHOD_REPORT_V0.2.md) | `10dfd6db29484663496b06916bb141d4759351a05aee6050a276230381c35709` |
| [source-freeze.json](04_planning/gate4-v0.2/approval_core/source-freeze.json) | `c318408082383c67049313c60cbb20b9cb8122f590583573c8d2fc0adf9610e7` |
| [export-inventory.json](04_planning/gate4-v0.2/approval_core/export-inventory.json) | `fc3066f1846dec2808635146de5f9888296927db2de466f5e17c347046ce4dc3` |
| [asset-inventory.json](04_planning/gate4-v0.2/asset-inventory.json) | `cba50b6ab6cb66d6025728393591354fe603cddaa622db9ba09a3cabb612174a` |

G3原始源hash仍为`2828406c99e52a3cd3990a06014284b18242f71ae7913d17925df474b9fe160a`。原五模块、正文、页面职责、导航Markets当前状态、CTA/目标、无表单和无媒体结构保持；生产Logo、Chrome、法律区与字体引用精确批准依赖，不建立页面私有共享owner。

## 审查与未关闭决定

[总控审查V0.1](05_review/MARKET-EU-PL_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md)为当前审查入口，串联[初审](05_review/gate4-project-control-v0.1/independent-review/report.md)、[返修回应](04_planning/gate4-v0.2/MARKET-EU-PL_GATE4_IR01_REPAIR_RESPONSE_V0.2.md)、[V0.2执行自检](05_review/MARKET-EU-PL_GATE4_EXECUTION_SELF_CHECK_V0.2.md)和[独立复验](05_review/gate4-project-control-v0.1/independent-review/rereview-v0.2/report.md)。PL-G4-IR01悬停对比度问题已独立验证并由总控关闭；V0.1失败候选全部保留，当前视觉方向仍待用户批准。

S01共享菜单跨断点焦点为非阻断建议、未实施，责任归共享Chrome owner后续评估。Gate 5完整视觉、目的路由/接收、生产CMP及真实设备/辅助技术等后续范围见总控审查，不把本地局部核验扩张成生产通过。Chloride Process顺序授权保持，尚未执行。

本轮使用[Gate 4角色V0.1候选](../../../agents/gate4-execution/agent.md)、[品牌应用方法V0.1](../../../skills/brand-applied-visual-design/SKILL.md)及[布局核验V0.2](../../../skills/layout-interaction-verification/SKILL.md)。角色/方法具体hash保存于冻结输入；本页完成首次真实执行与返修复验，不倒填通用方法批准、自动加载或注册。
