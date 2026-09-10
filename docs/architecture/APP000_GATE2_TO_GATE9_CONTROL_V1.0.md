# APP-000 Gate 2→9 连续执行控制 V1.0

日期：2026-09-08。状态：`AUTHORIZED / ACTIVE`。

## 1. 授权与对象

用户在已获知 APP-000 历史 Gate 1未闭合、Gate 2未批准、V0.12仅为旧视觉候选且缺唯一当前Manifest后，明确要求：`按照我们的流程从Gate2开始，完成到Gate9。`

据此记录：

- Page ID：`APP-000`
- URL：`/applications/`
- 起点：Gate 2；用户当前指令构成继续进入Gate 2所需的上游准入决定，不重新执行Gate 1。
- 终点：Gate 9只读验收结论。
- Gate 2仍须把完整Buyer Copy交用户批准；本连续授权不把尚未展示的正文预先写成用户已批准。
- Gate 3、4、6满足独立审查与必修关闭条件后，由总控按`G346-DELEGATED-CLOSURE-20260907`关闭。
- Gate 8归独立开发项目实施；本项目只派发、接收和核对，不修改`D:/16Wordpress_nextjs`。
- Gate 9只读；问题返回Gate 8，不在本项目修复。
- Gate 10、合并、部署、DNS、索引和发布不在本次范围。

## 2. 恢复与当前判断

- 旧Gate 1–4记录均停在`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`，后续Gate 5草案是在“允许制作草案”下提前形成，未产生阶段关闭。
- V0.12是当前可复用视觉参考，不是批准输入或release candidate。
- 当前Buyer Copy由V0.1内容架构及多份关系、简化、RFQ、polish delta拼接，必须在Gate 2整合成唯一A/B/C组合。
- APP-000当前缺唯一当前Manifest；总控在Gate 2执行/独立审查结果有效后建立，不让执行者创建竞争Manifest。
- 当前共享工作区已有大量其他任务修改。本控制禁止reset、clean、覆盖或以worktree迁移破坏共享页面记录；各写入先读回目标并按Page ID隔离。

## 3. 阶段顺序与身份

| Stage | Author | Independent review | Closure / approval |
|---|---|---|---|
| Gate 2 | Gate 2 Execution Agent子代理 | 不同实例Gate 2 Review Agent | 总控范围/事实核对后，用户批准正文 |
| Gate 3 | Gate 3 Execution Agent子代理 | 不同实例结构审查 | 总控常设授权关闭 |
| Gate 4 / new Gate 5 | Gate 4 Complete Visual Agent子代理 | 不同实例Gate 5 Independent Visual Review Agent | 总控常设授权关闭一次 |
| Gate 6 | Gate 6 Review & Delivery Agent子代理 | 不同实例交付独立复核 | 总控常设授权关闭 |
| Gate 8 | 独立开发任务 | 开发自检＋机器交接核对 | 以实际回执和实现交回为准 |
| Gate 9 | Gate 9 Read-only Acceptance Agent子代理 | 该阶段本身即独立验收 | 按Gate 9现行批准方式记录 |

同一阶段作者不得审自己的成果。返修优先交回原作者；复审只覆盖变化及必要相邻回归。阶段输出必须保存并读回，聊天结论不代替文件交接。

## 4. 当前Gate 2方向

保留：H1、六个Application入口、PRODUCT V0.3中性Grade集合、Products/Documents/Markets后续路径、最终RFQ。

调整：

1. Process Classification不再作为完整目录重复展示，改由Products/Process owner承接。
2. 五步说明压缩为应用选择、技术比较、自有体系验证三步。
3. 五条重复边界FAQ改为一处紧邻Grade集合的简洁定义，不用FAQ重复治理。
4. 完整Grade关系仍保留，但移动端采用Gate 3决定的渐进显示，避免六组30条一次性长滚动。
5. Buyer Clean只保留能帮助选择、理解下一步或完成询盘的内容。

## 5. 停止点

Gate 2作者与独立Reviewer完成且总控核对后，向用户直接展示完整模块顺序和Full Copy。获得用户内容批准后自动继续本控制中的Gate 3→9；没有用户正文批准不得越过Gate 2。Gate 6关闭后按本授权外发Gate 8，但不授权开发方合并、部署或发布。Gate 9完成后停止并报告，不进入Gate 10。

执行计划：`docs/superpowers/plans/2026-09-08-app-000-gate2-to-gate9.md`。
