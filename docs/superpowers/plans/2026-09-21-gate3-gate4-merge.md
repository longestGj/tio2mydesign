# Gate 3 / Gate 4 Merge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans for the recommended native execution, or superpowers:subagent-driven-development if the user chooses delegation. Steps use checkbox syntax for tracking.

**Goal:** 将批准的Gate 3/4合并设计同步到当前执行规则，消除默认重复制作和关闭，保留一致性、结构、三端及独立审查。

**Architecture:** 保留Gate 4作为页面设计与验证阶段，吸收Gate 3；Gate 5承担同一最终组合的独立审查。先定稿依赖，再更新基线hash和入口；历史页面按等价映射消费，不批量迁移。

**Tech Stack:** Markdown治理文件、现有Agent/Skill及PowerShell文件与SHA-256核验，无生产代码变更。

**Spec:** [已批准设计V0.1](../specs/2026-09-21-gate3-gate4-merge-design-v0.1.md)

## Global Constraints

- 页面事实、Gate 2批准文案、共享owner、开发实现决定权及发布权限保持各自既有范围。
- 一个执行负责人、一个共同工作集、一套默认最终三端成果、一个冻结组合和一次最终独立审查流程；返修复审按实际缺陷执行。
- 不批量修改页面Manifest；历史源、hash、审批和暂停保持。
- 仅获旧Gate 3授权不得自动开展完整视觉；同一作者的自检不构成独立审查。
- 本计划不派发页面、开发或发布，不修改其他任务的成果，不自动提交无关工作区变更。

## Review Focus

1. 新页只有Gate 2批准输入：合并设计不再索取不存在的Gate 3冻结；Task 1/2检查准入条款。
2. 旧页Gate 3已关闭：直接继承有效结果，不重做也不伪造合并批准；Task 1/3核对兼容表。
3. 仅Gate 3授权或明确暂停：不能扩大制作或恢复任务；Task 1/3核对停止点。
4. 复杂表格、表单及新家族：必要结构验证仍执行，最终独立审查覆盖完整；Task 2检查方法/审查对应。
5. 并行编辑、冻结源变化或hash失配：读回后定向合并或重算，不能覆盖他人修改、沿用失效证据；Task 4核验。

## Task 1：规则与兼容映射

**Files:** 新建 `docs/architecture/GATE3_GATE4_MERGE_DECISION_V1.0.md`、`GATE_WORKFLOW_V3.4.md`、`PAGE_GATE_1_4_STANDARD_V2.4.md`、`GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.4.md`；保留对应旧版。新版本若已被并行任务占用，先核对身份再选择未占用版本，不覆盖。

**Interfaces:** 消费已批准设计；产出编号、4A/4B、授权和历史映射的唯一规则依据，供Task 2/3引用。

- [x] 读回根AGENTS和相关当前源，记录本次精确读写清单与修改前hash；在 `90_archive/project-governance/2026-09-21-gate3-gate4-merge/` 按原相对路径保存将原地修改的源及哈希清单。
- [x] 创建合并决定，登记两个用户决定：合并方向批准与具体设计批准；标明页面启动、开发和发布权限不变。
- [x] 新工作流保留Gate 4编号，明确Gate 3历史阶段、Gate 5独立审查角色以及历史Gate 5制作语义；不重新编号Gate 6/8/9/10。
- [x] 新统一标准与共同合同落实4A一致性/结构/方向内部检查，4B完整制作/自检/冻结；移除新任务默认完整三端线框及单独Gate 3关闭要求。
- [x] 逐项走查设计§7的七类历史/在途情形，确认新页、已关闭Gate 3、仅Gate 3授权、暂停页和已关闭页均有明确处理，不新增批准。

## Task 2：角色、方法与最终审查

**Files:** 修改 `agents/gate4-complete-visual/agent.md`、`agents/gate5-independent-visual-review/agent.md`；为 `agents/gate3-execution/agent.md` 标明历史角色并保留历史任务使用边界；修订 `skills/responsive-wireframe-design/SKILL.md`、`skills/brand-applied-visual-design/SKILL.md`、`skills/full-page-visual-composition/SKILL.md`、`skills/layout-interaction-verification/SKILL.md` 及其 `references/gate3-structure-scope.md`、`gate4-self-check.md`、`independent-visual-review.md` 的适用条款。修订结构方法引用的 `references/preflight-freeze-evidence.md` 时保留其他历史用途。

**Interfaces:** 消费Task 1规则；产出新执行角色和完整审查覆盖，交Task 3定义交接。

- [x] 执行前读取适用skill-creator/writing-skills规则及上述原件，保留源快照；不把治理同步描述为运行注册。
- [x] Gate 4启动从Gate 2批准组合及共享合同读取；旧Gate 3成果作为可继承输入，不作为新页强制准入项。
- [x] 将页面家族、参照批准身份、共享组件、本页差异和owner缺口写入4A；复杂结构按风险制作局部样例，成熟模板直接复用。
- [x] 在同一工作集完成布局与视觉，保留三端完整内容、真实状态、44px、关系/焦点/对比度检查及冻结纪律；过程有效覆盖可继承。
- [x] 将线框方法改为结构能力，消除合并流程中强制独立线框交付/冻结，但保留历史任务原范围；不新建巨型Skill。
- [x] Gate 5明确同时审查跨页一致性、内容关系、视觉和操作；不同作者、原件只读、稳定Finding和定向复验保持。
- [x] 桌面推演三类输入：成熟家族页、长技术表页面、有条件字段和错误状态的表单页。逐项指出制作位置、验证证据和独立审查条款；只记录规则覆盖，不声称真实页面试跑。

## Task 3：交接、总控和当前消费入口

**Files:** 新建 `docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.1.md`、`GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.1.md`。核对并定向修订 `agents/project-orchestrator/agent.md` 及 `references/gate-routing.md`、`handoff-contract.md`、`orchestration-sop.md`；新建或升版总控生效记录。核对 `docs/product-pages/03_Product_Detail_Template_Reuse_Development_SOP_V2.3.md`、`04_Product_Detail_Single_Grade_Operational_Checklist_V1.3.md` 当前继承要求，必要时新建后继版本，保留旧版。旧3→4交接通过合并决定解释，不覆盖历史合同。

**Interfaces:** 消费Task 1/2；产出一致的准入、制作→审查→关闭→Gate 6交接，供Task 4激活。

- [x] 4→5交接保留共同入口、准确输入、跨页映射、冻结源、三端状态及自检；不再强索新Gate 3独立批准。
- [x] 5→6接收直接消费同一冻结组合、独立审查、总控关闭和开放项，不新增视觉审查或重新打包。
- [x] 总控按原页面权限派发；仅旧Gate 3授权仍保留停止点。旧Gate 3已通过的成果作为有效输入继承。
- [x] 搜索当前角色、模板和SOP中的“Gate 3冻结”“Gate 3批准”“Gate 3→4”等消费要求，逐条区分当前必需条件和历史引用；仅修改活跃冲突。将实际受影响清单记入变更记录，禁止全库替换历史编号。
- [x] 核对Gate 6 Agent及其当前基线引用的新接收合同；规则未改的方法不重写。重核五类Review Focus中的权限、继承和复杂结构覆盖。

## Task 4：基线、入口激活及验证

**Files:** 新建 `docs/architecture/GATE3_GATE4_MERGE_CHANGE_RECORD_V1.0.md`，Gate 4及受影响Gate 6/总控基线的后继版本；更新 `AGENTS.md`、`PROJECT_CONTEXT.md`、`01_PROJECT_INDEX.md`、`02_DIRECTORY_GUIDE.md` 的当前职责/导航。只在需要记录本次治理进度时修改 `00_PROJECT_STATUS.md` 对应行，不触碰页面进度。

**Interfaces:** 消费全部已定稿源；产出准确当前入口、源身份和验证记录。

- [x] 每次原地写入前核对文件仍与快照身份一致；发现并行变化时读回并定向合并，不恢复整份旧快照。
- [x] 依赖定稿后使用 `Get-FileHash -Algorithm SHA256` 计算实际源身份，更新后继基线；未变源沿用经核实身份。
- [x] 当前入口明确指向合并规则；Gate 3基线保留历史用途。将设计文档激活状态与实际切换结果对齐，不预写完成。
- [x] 检查新增Markdown相对链接可解析、基线hash等于实际文件、当前规则不存在默认双套成果/双重关闭、授权和独立性约束完整。
- [x] 使用 `git diff --check` 检查本次受控路径；差异审阅限本次文件，区分已有工作区变更。记录未解决问题及真实验证范围。
- [x] 交不同作者一次独立复核，重点核对五类Review Focus与当前入口可执行性；只修实质问题，沿用Finding定向复验。不自动启动页面试跑。
- [x] 汇报实际修改、验证、剩余限制和新任务生效入口；不声称运行注册、真实页面试跑或开发验收已经完成。

## 计划自审与执行选择

设计§1–3由Task 1实现，§4–6由Task 2/3实现，§7由Task 1/3实现，§8由Task 4实现。五类Review Focus均有对应核验。此项为治理文档变更，采用链接/hash/权限场景及交叉条款审查，不引入与文档逐字对应的测试代码。

用户已批准当前任务内顺序执行；四项任务完成，一次不同作者独立审查及定向复验通过。规则已同步并激活；实际记录见docs/architecture/GATE3_GATE4_MERGE_CHANGE_RECORD_V1.0.md。未开展页面试跑或开发操作。
