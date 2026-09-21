---
name: responsive-wireframe-design
description: Use when approved page content needs cross-page component mapping or risk-based structural validation for dense tables, forms, long content or new page families. Works within a shared design workset; not for changing copy or implementing production code.
---

# 响应式结构设计 V0.7

按[Gate 3/4合并决定](../../docs/architecture/GATE3_GATE4_MERGE_DECISION_V1.0.md)及[共同工作合同](../../docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.4.md)在Gate 4内使用。方法提供跨页映射与必要结构验证，Agent负责判断、授权和最终交付。新流程不默认三端正式线框、单独冻结、独立结构审查或关闭。

## 输入和范围

接收Gate 2批准全文、模块顺序、行为/共享合同、当前页面Manifest及原授权，和共同workset_id、input_index、design_source、evidence_index、绝对output_dir/report_path及允许写范围。已有历史Gate 3批准组合可直接继承，新页不强索。仅限旧Gate 3的任务仍按历史授权停止，不能因方法更新扩大为完整视觉。

## 1. 先确定跨页关系

在共同设计记录中保存“页面家族—参照页面及批准身份—共享组件/同类模块—本页应用—必要差异及依据—共享缺口及owner”。先全站共享，再相关同类页面，不通读全站，不以最新截图、首页或业务页HTML作为母版。文章不强套Hub。已有合同和有效共享消费源直接引用；无法裁决的分叉交owner，不创造本页私有合同。

## 2. 按风险验证结构

从完整文案识别“结构问题—预期关系—位置/视口/状态”。成熟模板已充分覆盖时直接整页制作；长表格、复杂表单、新家族或未覆盖条件分支可制作最小局部样例，不强制独立文件或截图数量。局部通过不能外推整页通过。

| 内容 | 检查与保留关系 |
|---|---|
| 技术表/比较 | 对象、属性、数值、单位、上下限/典型性质、测试方法及脚注准确对应；窄屏卡片不丢关联 |
| 长文/FAQ | 批准顺序、完整答案、来源和展开后后续流；折叠必须有批准行为及可发现入口 |
| 表单/选择 | 标签、帮助、必填、错误、选项数量和动作结果保持关联，不自造字段或承诺 |
| 条件模块/无图 | 按批准条件处理内容、入口、关联说明与空容器，不以隐藏解决未经批准的缺口 |

列数、宽度、间距和响应式方案可在同一设计源调整；不可删文案、改模块顺序、动作职责或共享约束。内容/事实/行为变化交原owner。未来接收服务未实现不阻断规划，明确本地模拟及后续依赖。

## 3. 与整页制作和核验衔接

在同一工作集交回结构关系、跨页映射、已验证范围和剩余风险，由品牌及完整页面方法继续制作。当前结构样例不是额外批准源。4B仍须1440/768/390完整页、适用状态、44×44px实际操作目标、内容/关系、键盘/焦点和共享组装的完整覆盖。

结构阶段实际有效检查可由[布局核验](../layout-interaction-verification/SKILL.md)按源身份、范围及证明对象继承；变化补验，不重复完整自检。最终预检、正式导出和冻结统一在4B进行；历史预检脚本不是新流程必须的工具，不改脚本历史语义。

## 输出与权限

读回共同记录和必要样例后返回绝对路径、追加内容、验证范围、风险/未测和owner，不维护页面Manifest，不生成Gate通过，不实施开发或真实提交。

明确保留旧Gate 3范围的任务，可读取[旧线框方法快照](../../90_archive/project-governance/2026-09-21-gate3-gate4-merge/skills/responsive-wireframe-design/SKILL.md)及其原引用。历史快照中的相对链接按原 `skills/responsive-wireframe-design/` 目录解析；不能把旧独立冻结要求带回合并设计。
