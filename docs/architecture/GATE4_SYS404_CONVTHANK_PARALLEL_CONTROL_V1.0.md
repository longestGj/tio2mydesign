# SYS-404 与 CONV-THANK Gate 4 并行执行控制 V1.0

日期：2026-09-08。控制 ID：`G4-SYS404-CONVTHANK-PARALLEL-20260908`。状态：`COMPLETED / 2 OF 2 APPROVED_AND_CLOSED`。

## 1. 授权与执行方式

用户在两页 Gate 3 已关闭并形成正式 Gate 3→4 交接后明确要求“启动Gate4”。本轮只覆盖 `SYS-404` 与 `CONV-THANK` 的合并 Gate 4 完整视觉制作、4A 内部方向检查、4B 三端及适用状态制作、自检、冻结，以及由不同实际身份执行的新 Gate 5 唯一最终独立视觉审查。两个页面由两个独立执行子代理并行制作；审查在各页形成精确冻结组合后另行派发。

总控依据 `G346-DELEGATED-CLOSURE-20260907`，在独立审查通过、必修 Finding 全部关闭、冻结与证据身份一致后直接登记合并 Gate 4 `APPROVED / CLOSED`。常规逐页用户复核为 `NOT_REQUIRED_BY_STANDING_AUTHORITY`。本控制不启动 Gate 6，不授权访问或修改 `D:\16Wordpress_nextjs`，也不授权开发、外发、部署、发布、DNS 或索引操作。

## 2. 共同基线与停止点

| 项目 | 当前要求 |
|---|---|
| 执行角色 | `agents/gate4-complete-visual/agent.md` V1.4 |
| 方法 | `brand-applied-visual-design`、`full-page-visual-composition`、`layout-interaction-verification` 的当前项目源 |
| 共同合同 | `GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md` |
| 交审合同 | `GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md` |
| 独立审查角色 | `agents/gate5-independent-visual-review/agent.md` V0.4；必须与本页成果作者身份不同 |
| 生命周期 | 执行交审 `DRAFT_FOR_PROJECT_CONTROL_REVIEW` → 独立审查 `PROJECT_CONTROL_REVIEW_PASS` → 总控 `APPROVED / CLOSED` |
| 执行停止点 | `COMPLETE_VISUAL_FROZEN / READY_FOR_REVIEW`，不得自行批准、更新当前 Manifest 或启动后续阶段 |

每页建立一个 `workset_id`，三项 Skill 共用一个 `input_index`、一个 `design_source` 和一个 `evidence_index`。正式渲染前必须完成硬性预检；通过后锁定候选与渲染条件，再生成审批核心证据，诊断支持证据单独登记。正式输出覆盖 1440、768、390 完整页面及本页真实适用状态。源或耐久依赖变化必须形成新的冻结及组合身份。

## 3. 已批准视觉意图与 4A 边界

两页已由批准设计、Gate 2 精确正文、Gate 3 冻结结构和共享品牌合同提供充分方向。4A 只核对这些规则能否落成完整视觉，并补齐字体层级、间距、表面、焦点和状态表达等普通视觉参数；不另起替代风格探索，也不改变内容、模块关系、行为接口、共享 owner 或品牌方向。

- `SYS-404`：形成简洁、明确、可恢复的系统错误页。重点核对 1440 短页纵向平衡、两项 Primary 与三项 Supporting 的视觉层级、390 五按钮完整单列、404 语气克制；不得增加搜索、推荐、表单、媒体或自动跳转。
- `CONV-THANK`：形成可信、克制的共享结果页。四态保持互斥；三个成功态使用文本加图标的回执提示，Direct/invalid 不出现成功提示。重点核对长 Documents/Sample 文案、三个相似成功态的一致性、Direct 三动作区分、390 换行，以及批准的 `request` 参数与 session/acknowledgement 边界；不得把本地模拟表现为生产接收证明。

不需要新增图片搜索或生成媒体。生产 Logo、Header/Footer、固定 RFQ、Cookie Settings 和法律链接只消费当前共享 owner 来源，不建立页面分叉。

## 4. 页面派发

| Page | 执行 dispatch | 当前 Manifest | Gate 3冻结输入 | 允许写入 | 页面专属风险 |
|---|---|---|---|---|---|
| `SYS-404` | `G4-SYS404-EXEC-20260908-01` | `pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md` | `SYS-404_GATE3_TO_GATE4_HANDOFF_V0.1.md` 所列 V0.1 精确组合 | 本页 `04_planning/gate4-v0.1/` 与必要的 `05_review/` Gate 4执行文件 | 短页平衡、2+3层级、390五按钮、无新增功能 |
| `CONV-THANK` | `G4-CONVTHANK-EXEC-20260908-01` | `pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md` | `CONV-THANK_GATE3_TO_GATE4_HANDOFF_V0.1.md` 所列 V0.2 精确组合 | 本页 `04_planning/gate4-v0.1/` 与必要的 `05_review/` Gate 4执行文件 | 四态、成功提示、长文案、Direct三动作、390换行、`request`接口 |

执行者不得改写 Gate 2 B、Gate 3冻结原件、当前 Manifest、状态、索引、共享合同或另一页面。提交必须给出实际作者、精确文件身份、完整覆盖/未测范围、自检结论、Finding 状态及可直接消费的 `handoff_entry`。

## 5. 接收、返修与关闭

总控只接收精确 `bundle_id`。不同实际身份的 Gate 5 Reviewer按 `INDEPENDENT_REVIEW` 审查原正式证据和可运行冻结源；不得把作者自检或机器 PASS 当成质量结论，也不因审查名义默认重复生产整套截图。出现 Finding 时退回原执行者形成新冻结组合，再由原 Reviewer按 `TARGETED_RECHECK` 核对原接受条件、实际变化和相邻回归。

只有两页各自满足 `REVIEW_PASS`、Required Findings 0、输入与证据身份匹配、后置依赖具备 owner 与接受条件时，总控才可分别关闭并生成简短 Gate 4→6 接收入口。本轮关闭后停在 `READY_FOR_GATE6_WHEN_AUTHORIZED`；Gate 6保持未启动。

## 6. 完成记录

两页首审均发现同一共享 Footer 顺序 P1：页面消费源将法律链接置于版权之前。两个原执行者分别形成 V0.2冻结组合，只调整为 `footerGrid → copyright → legalUtilities`；原Reviewer完成定向复审并关闭两项 Finding。

| Page | Final bundle | Gate 5 final result | Controller closure | Gate 4→6 state |
|---|---|---|---|---|
| `SYS-404` | `SYS-404-G4-BUNDLE-20260908-02` | `SYS404-G5-IR-F01=CLOSED`; Required 0; `REVIEW_PASS` | `SYS404-G5-PC-VISUAL-CLOSURE-20260908-01`; [记录](../../pages/system/404/05_review/SYS-404_GATE5_CONTROLLER_ACCEPTANCE_AND_VISUAL_CLOSURE_V0.1.md) | [READY_FOR_GATE6_WHEN_AUTHORIZED](../../pages/system/404/05_review/SYS-404_GATE4_TO_GATE6_HANDOFF_V0.1.md) |
| `CONV-THANK` | `CONV-THANK-G4-BUNDLE-20260908-02` | `CONVTHANK-G5-IR-F01=CLOSED`; Required 0; `REVIEW_PASS` | `CONVTHANK-G5-PC-VISUAL-CLOSURE-20260908-01`; [记录](../../pages/conversion/thank-you/05_review/CONV-THANK_GATE5_CONTROLLER_ACCEPTANCE_AND_VISUAL_CLOSURE_V0.1.md) | [READY_FOR_GATE6_WHEN_AUTHORIZED](../../pages/conversion/thank-you/05_review/CONV-THANK_GATE4_TO_GATE6_HANDOFF_V0.1.md) |

总控依据`G346-DELEGATED-CLOSURE-20260907`关闭两页合并Gate 4。Gate 6、D16开发、外发、部署和发布均未启动。
