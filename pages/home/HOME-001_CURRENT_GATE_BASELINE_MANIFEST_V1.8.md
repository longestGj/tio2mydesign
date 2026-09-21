# HOME-001 Current Gate Baseline Manifest V1.8

日期：2026-09-20。首页唯一当前导航入口，继承 [V1.7](HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.7.md) 批准组合与历史，不回写原D16结论。

## 当前 D32 交付组合

| 字段 | 值 |
|---|---|
| Page / route / keyword | HOME-001 / `/` / `malaysia titanium dioxide` |
| 当前目标 | `D:/32Wordpress_new`；WordPress管理内容并生成页面 |
| 范围 | 首页及唯一共享Header/Footer/Menu/Cookie Settings；固定设计、后台可编辑内容；不含产品集合页开发 |
| Package / Handoff | `HOME-001-D32-G6-PACKAGE-V0.2` / `HOME-001-D32-G6-HANDOFF-01` |
| Gate 6 / 生命周期 | `APPROVED / CLOSED` / `APPROVED_FOR_HANDOFF` |
| 关闭人 / 依据 | `/root`；`USER_STANDING_AUTHORITY` / `G346-DELEGATED-CLOSURE-20260907` |
| 独立 Reviewer | `/root/d32_gate6_independent_review`；内链专项 `/root/d32_home_link_review` |
| 必修 | F01、F02已对V0.2关闭；剩余0 |
| 外发 / 开发接收 | `DISPATCH_SENT / DEVELOPER_ACCEPTANCE_PENDING`；接收任务 `00首页开发` |
| D32 Gate8 / Gate9 | `USER_AUTHORIZED / TASK_ACTIVE / INTAKE_PENDING` / `NOT_STARTED`，尚无完成候选 |
| D32集成 / 发布 | `NOT_READY` / `NOT_AUTHORIZED` |

消费顺序：

1. [总控关闭记录](05_review/HOME-001_D32_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md)：精确SHA、有效独立链、关闭范围与后置依赖。
2. [唯一包V0.2](06_handoff/HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)：SHA-256 `EEB70B4D48753BBAF02D9CBEA1B6ADAD65B18D90CD6C6123A0F63C6063065A3A`。文内候选状态为提交时事实，由本次关闭覆盖，不修改冻结文件。
3. [输入身份V0.2](06_handoff/HOME-001_D32_GATE6_INPUT_VERIFICATION_V0.2.json)、[首轮独立审查](05_review/HOME-001_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md)、[定向复验](05_review/HOME-001_D32_GATE6_TARGETED_RECHECK_V0.1.md)、[内链复验](05_review/HOME-001_D32_GATE6_LINK_PLANNING_RECHECK_V0.1.md)。

上游维持包§1组合：整页V1.1 + 已批准Home共享Hero V1.4 +共享Chrome/法律/品牌/SEO具体源。正文、URL和关键词归属无新增；Schema继承原五节点、14型号保持非链接标签。12 AC及5 DEP沿用原身份。

## 历史与停止点

V1.6及其D16实现/回退记录保留；后续全站生产/GA4状态仍由各专题当前入口管理。本记录不宣称旧生产停止或回滚，不将旧D16的PASS/404/未测状态当D32事实。

用户随后明确指定“00首页开发”接收并开发，已按[Gate8授权与派发](06_handoff/HOME-001_D32_GATE8_AUTHORIZATION_AND_DISPATCH_V1.0.md)发送。任务ID为 `01a0bca9-1318-7022-aa49-8723850227f7`，项目 `D:/32Wordpress_new`；[消息回执](06_handoff/HOME-001_D32_GATE8_DISPATCH_RECEIPT_V1.0.json)证明发送成功及任务active，开发方正式接收回执待返回，不将送达冒充开发完成。Gate6批准组合未变，无需重复复核。后置DEP-01..05继续消费；D23不实施代码，产品集合页和发布不在本批授权范围，Gate9独立验收未启动。
