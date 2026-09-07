# Gate 5 有限隔离验证证据入口

本目录保存 G5-LAB-01 虚构页面的制作、独立视觉审查和接收演练。当前结果由[总控验证记录](../../2026-09-07-gate5-skill-validation-v0.1.md)控制；设计授权来自[用户决定](../../2026-09-07-gate5-design-user-approval-v0.1.md)。它不是登记页面的 Manifest 或 Gate 批准。

- [固定输入](input/brief.md)及 input/snapshots 保存执行前输入与方法版本。
- [候选 A Manifest](candidate-a/manifest.json)是作者提交时的视觉组合；[交接入口](candidate-a/G5-LAB-01_GATE5_TO_GATE6_HANDOFF.md)与[独立视觉报告](review-a/report.md)分别保存自检提交和独立结论。作者提交中的 pending 状态保留历史，由总控验证记录说明后续结果。
- receiving-b 是故意加入错误的接收元数据，仅供负向测试；不能作为当前事实、批准或运行授权。它引用未改动的 A 图片与源。[预登记计划](controller-plan.md)和[注入映射](mutation-map.json)记录控制者操作；这些材料没有作为接收者初审输入。
- 接收初审、修正及复验保存到 receiving-review 与 receiving-c；修正只涉及接收元数据，不自动修改 A 视觉组合。
- [总控文件核验](controller-check.json)验证身份、尺寸、覆盖和上游未改动；[最终链接与文档身份核验](final-check.json)供追溯。

approval_core 与 diagnostic_support 依各报告明确区分。截图、断言或 PASS 数量只表示本次证据范围，不是方法质量得分。实际页面批准、Gate 6 授权和生产验证均不由本目录产生。
