# RES-CHEMOURS Gate 3 V0.2 用户授权 V0.1

## 决定

| 字段 | 当前值 |
|---|---|
| 日期 | 2026-09-07 |
| 用户原话 | `我们测试gate3的V0.2` |
| Page ID | `RES-CHEMOURS` |
| 授权范围 | 使用Gate 3 Agent/Skill当前V0.2基线完成第三个真实页面测试 |
| 阶段状态 | `GATE3_AUTHORIZED / IN_PROGRESS` |
| 停止点 | 完成执行、自检及冻结候选的总控独立审查后，提交用户决定；不得自行关闭Gate 3 |

## 授权组合

- 当前页面入口：[Manifest V0.13](../RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md)，其Gate 2批准组合保持。
- A：[Skeleton V0.3](../04_planning/RES-CHEMOURS_GATE2_CONTENT_SKELETON_V0.3.md)，SHA-256 `e4786e732ff75ae250d3e659e95a1d5eb37e42889402ae65f25b724c9f7d817f`。
- B：[Full Buyer Clean Copy V0.3](../04_planning/RES-CHEMOURS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md)，SHA-256 `91ae0f0c13701dd9be8f8cdb68fe81781ebd7ad5f6e460ab022ac3466561e5f6`；仍是唯一页面可见正文源。
- C：[Content Contract V0.7](../04_planning/RES-CHEMOURS_GATE2_CONTENT_CONTRACT_V0.7.md)，SHA-256 `ab5ba6f7db66dd411974251dbfcb7201ea9bbf92928f638d2619cfc173ffaea4`。
- Gate 3当前方法入口：[Agent/Skill Baseline V1.0](../../../../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.0.md)，使用Agent V0.2、两项Skill V0.2及页面中立共享消费包V0.1。

## 边界

本次可在本页`04_planning/gate3-v0.1/`和`05_review/`创建Gate 3源、正式资产、预检/冻结记录、设计报告、自检、独立审查和相应当前Manifest。不得改写批准A/B/C、Brief、关键词、页面职责或事实边界。

`NEW_PAGE_CANDIDATE`、Canonical实现、sitemap和indexing决定保持；Gate 3可以按完整未来页面做规划，但本授权不批准页面创建、上线或索引。Gate 4、开发、部署和发布均未授权。
