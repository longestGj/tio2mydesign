# Gate 4 / Gate 5 合并审计与变更记录 V1.0

## 1. 决定

日期：2026-09-07  
Decision ID：`GATE4-GATE5-COMPLETE-VISUAL-CONSOLIDATION-20260907`  
状态：`USER_APPROVED / IMPLEMENTED_IN_PROJECT_SOURCES`

用户批准“一个执行Agent、三个能力Skill、两个内部检查点”，并进一步明确：

- 三项Skill共用设计源、输入清单和证据索引；
- 完整页面方法接收已通过4A检查的方向，不等待独立方向Gate批准；
- 只设一个最终独立审查环节，但允许Finding、返修与复审；
- 一套成果指一个权威入口和冻结身份，不强制一个物理文件；
- Gate 4与Gate 6审查对象分开，Gate 6按变化、缺口和合同冲突复核；
- 历史成果映射不等于继续执行授权，Belgium保持暂停。

## 2. 当前结果

当前流程：

`Gate 0 → Gate 1 → Gate 2 → Gate 3 → Gate 4 → Gate 6 → Gate 8 → Gate 9 → Gate 10`

Gate 4内部状态：

`USER_AUTHORIZED / IN_PROGRESS`

→ `VISUAL_DIRECTION_CHECKED`

→ `COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW`

→ `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

→ `APPROVED / CLOSED`

4A是内部检查；4B冻结后进入唯一最终独立审查环节。Gate 5保留历史编号，不再作为未来独立阶段。

## 3. 新增和当前入口

| 对象 | 当前入口 |
|---|---|
| 当前工作流 | [GATE_WORKFLOW_V3.0](GATE_WORKFLOW_V3.0.md) |
| 页面Gate标准 | [PAGE_GATE_1_4_STANDARD_V2.1](PAGE_GATE_1_4_STANDARD_V2.1.md) |
| 治理细则 | [PROJECT_GOVERNANCE_DETAILS_V1.2](PROJECT_GOVERNANCE_DETAILS_V1.2.md) |
| Gate 4 Agent/Skill基线 | [GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1](GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md) |
| Gate 4共同工作合同 | [GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.0](GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.0.md) |
| Gate 4执行Agent | [agent.md](../../agents/gate4-complete-visual/agent.md) |
| 品牌应用方法 | [SKILL.md](../../skills/brand-applied-visual-design/SKILL.md) V0.2 |
| 完整页面方法 | [SKILL.md](../../skills/full-page-visual-composition/SKILL.md) V0.2 |
| 共用布局核验 | [SKILL.md](../../skills/layout-interaction-verification/SKILL.md) V0.4 |
| Gate 3兼容基线 | [GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.4](GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.4.md) |
| Gate 6角色 | [agent.md](../../agents/gate6-review-delivery/agent.md) V0.2 |

根AGENTS、Context、Index、Status、Directory Guide及Agent/Skill目录入口已同步到当前流程。Gate 3并行定向修订通过标准V2.1、布局核验V0.4和Gate 3基线V1.4兼容，不丢失其结构停止条件、共享继承和证据范围。

## 4. 历史保留

- 原`agents/gate4-execution/agent.md`与`agents/gate5-execution/agent.md`保持原文，作为历史角色源。
- Skill历史源保存在：
  - `skills/brand-applied-visual-design/history/SKILL-v0.1.md`
  - `skills/full-page-visual-composition/history/SKILL-v0.1.md`
  - `skills/layout-interaction-verification/history/`
- 原Gate 4/5页面文件、Review ID、批准记录、Manifest字段和hash不改名、不删除。
- Gate工作流V2.0、Gate 1–5标准V1.3及更早版本继续用于历史追溯，不作为未来当前入口。

## 5. 页面迁移与权限

| 页面情况 | 迁移原则 |
|---|---|
| 旧Gate 5已批准 | 核对范围、版本和冻结身份后映射为当前Gate 4完整关闭；不重新批准 |
| 仅旧Gate 4已批准 | 继承有效方向与证据，只补4B实际缺口 |
| 旧Gate 4/5未开始 | 使用当前完整Gate 4流程 |
| Belgium | 保持`PAUSED_BEFORE_FREEZE`；恢复须明确4A、完整制作、最终审查及关闭范围 |

本次只批准并实施流程、Agent和Skill设计。未启动或恢复任何页面，未授权Gate 6、Gate 8、开发、派发、部署、发布、DNS或索引。

## 6. 风险与回退

主要风险是旧批准被误判失效、旧方向授权被扩成完整视觉授权、Gate 6重复视觉验收，以及三个Skill产生竞争源或证据。

当前控制：保留旧源和历史名称；一个权威Manifest；共同工作集；4A/4B状态分离；最终独立审查与Gate 6对象分离；成果映射与执行授权分离。

如未来经用户决定回退，应通过动态入口恢复指定旧工作流和标准指针，并按本记录逐项恢复当前角色/方法组合；不得删除本次文件，不得整份覆盖并发形成的Gate 3定向修订或页面状态。

## 7. 校验结果

- `skill-creator`的`quick_validate.py`以UTF-8模式检查三个当前Skill：全部有效。
- 当前入口、新规范、Agent、Skill、共同合同、审计记录及两份当前基线Manifest的本地Markdown链接：全部可解析。
- Gate 3 V1.4与Gate 4 V1.1两份当前基线Manifest：17项文件身份与实际SHA-256一致。
- 当前源未发现冲突标记或误写的转义换行；旧Gate 4→5/Gate 5→6措辞只保留在明确标记的历史来源和兼容表中。
- 首次校验器调用受Windows默认GBK影响无法读取UTF-8中文；改用`PYTHONUTF8=1`后同一校验器三项均通过。该失败属于工具读取环境，不是Skill格式失败。


