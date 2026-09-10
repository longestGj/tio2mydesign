# Gate 3 制作边界定向修订 V0.1

日期：2026-09-07。决定：G3-BOUNDARY-20260907。状态：USER_AUTHORIZED / IMPLEMENTED。

用户认可“Agent管上限与停止、线框Skill管制作、核验Skill的Gate 3参考管审查、阶段标准与基线同步”，并要求“同意，按照这个方案去修改。”本轮实施此范围。

## 变化与当前入口

- [Agent V0.5](../../../agents/gate3-execution/agent.md)：明确媒体、微交互、混合缺陷与停止，给Reviewer传递相同边界；Gate 2入口同步至已批准V0.5，实际页面仍读取原批准组合。
- [线框Skill V0.4](../../../skills/responsive-wireframe-design/SKILL.md)：沿用基础样式、只按结构缺陷调整，不搜索/生成视觉素材、不做风格备选与动画打磨。
- [Gate 3核验范围V0.2](../../../skills/layout-interaction-verification/references/gate3-structure-scope.md)：实质缺陷才必修，视觉偏好转Gate 4；纠正旧逐页用户批准用语。
- [专项标准V1.0](../../architecture/GATE3_PRODUCTION_BOUNDARY_STANDARD_V1.0.md)：与统一标准V2.2 §4.3共同使用，定义六类制作边界和停止条件。
- [基线V1.7](../../architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.7.md)：独立绑定当前11项源身份；Index、Agent目录、Skill目录定向同步。

## 保留与风险控制

保留真实完整内容、1440/768/390、适用状态、共享资格与本页实测、44px、可读性/无障碍、硬预检、冻结后正式导出、独立审查及总控常设关闭。不能把诊断图改名充当正式证据，不能把真实缺陷包装成视觉建议。已批准素材继续使用，不要求去色或人为降质；素材缺口登记正确owner，不能用未批准占位替换批准内容。

不改共享核验SKILL.md、预检方法和检查器、Gate 4方法或基线；专属范围只由明确Gate 3任务消费。统一标准以Gate 3专项增补收口，根AGENTS已有Index路由，未复制新增一套根规则。未修改页面、Gate 2优化成果、其他任务进度或开发权限。

## 备份、验证与限制

六个既有文件修改前逐字节保存到[归档](../../../90_archive/project-governance/2026-09-07-gate3-boundary/)，写入前核对未变。共享入口只更新Gate 3对应行；历史基线、标准及页面不覆盖。文件映射、SHA-256、链接和情景核对见[验证JSON](2026-09-07-gate3-boundary-validation-v0.1.json)。

验证为作者静态检查及规则情景推演，不是独立Agent行为测试或真实页面试跑，不声称已证明时间下降。后续实际执行验证遵守其页面授权。

回退在有效决定下按本次差异恢复角色/方法及Gate 3导航行，恢复V1.6基线入口；不得整份还原共享目录覆盖并行修改。旧源hash可从本轮归档复算，新标准和记录保留历史。
