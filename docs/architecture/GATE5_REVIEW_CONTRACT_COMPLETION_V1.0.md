# Gate 5审查合同补全与Gate 4对比 V1.0

日期：2026-09-07。状态：USER_APPROVED_TARGETED_REVISION / ROLE_AND_METHOD_ACTIVE_WITHIN_AUTHORIZED_REVIEW。
批准来源：用户在六项规范问题及七部分结构建议后明确“那就修改完整，然后我们在对比一下gate4和gate5的agent和skill”。

## 1. 本次生效范围

[新Gate 5 Agent V0.2](../../agents/gate5-independent-visual-review/agent.md)与[核验Skill V0.6](../../skills/layout-interaction-verification/SKILL.md)、[独立审查方法V0.2](../../skills/layout-interaction-verification/references/independent-visual-review.md)用于获授权的最终独立视觉审查。角色不自动注册运行，不授予页面执行、外发或下一阶段权限。

本次是既有审查角色和方法定向补全。新Gate 5名称与审查职责已获用户确认；[当前工作流](GATE_WORKFLOW_V3.2.md)仍把最终独立视觉审查放在合并Gate 4内。正式编号迁移、总控路由和联合关闭授权映射尚未实施；现有授权内调用本角色履行该次最终审查，不再另加一次Gate 4独立审查。旧gate5-execution为历史制作角色，不是当前Reviewer。

## 2. 修改前后

| 项目 | 修改前 | 修改后 |
|---|---|---|
| 角色分层 | Agent重复详细审查方法 | Agent维护职责、接口、判定和停止；Skill维护具体方法 |
| 输入/输出 | 自然语言列举，与总控字段未完整对齐 | 引用总控合同，绑定派发、真实实例、输入/成果身份和方法版本 |
| 失败状态 | 输入不足与工具不足边界含糊 | INPUT_INCOMPLETE / CHANGES_REQUIRED / FAILED明确区分，旧状态映射保留 |
| 机器前提 | 必需结果未定义，可能等待未实现工具 | 列明字段及责任方，允许实际原生命令/既有脚本的等价检查 |
| 首审/复审 | 完整审查顺序可能覆盖定向复审规则 | 显式模式与范围；复审引用原覆盖，从变化入口执行 |
| 三端操作 | 可能变成每端重跑所有相同行为 | 三端视觉完整检查；同一审查内有证据的等价行为复用；差异分别运行 |
| 证据写权限 | Skill要求追加执行索引，Agent禁止修改 | 自检按执行权限写；Reviewer只读冻结索引，独立记录精确引用 |
| PASS | 必修关闭与范围完整较笼统 | 身份、覆盖、必修、合同冲突、后置依赖和未测范围明确判定 |

## 3. Gate 4与新Gate 5 Agent对比

对照源：[Gate 4 Agent V1.2](../../agents/gate4-complete-visual/agent.md)、新Gate 5 Agent V0.2。本次未改写Gate 4角色或页面成果。

| 维度 | Gate 4 | 新Gate 5 |
|---|---|---|
| 对结果负责 | 完整视觉源、正式三端和状态、自检、返修、冻结 | 独立质量判断、Finding、定向复审 |
| 核心输入 | 批准Gate 2全文、Gate 3结构、品牌及共享合同 | 同一批准依据与准确Gate 4冻结包，不重建上游 |
| 方向与制作 | 4A确认方向，4B完成全部实例 | 审是否落实批准要求，不另做方向或页面 |
| 修改权限 | 授权范围内修改视觉源及执行证据 | 只写自身报告与必要审查证据；问题退回执行者 |
| 自检与独立性 | 自检完整，但不能审自己的成果 | 不同实际作者；亲自查看和操作，不能仅接受作者PASS |
| 图片 | 生产正式三端和适用状态，诊断按需求 | 消费正式图；明确触发才新增必要证据 |
| 返修 | 修改问题、更新受影响冻结组合 | 核对原条件、变化及回归，继承未变有效覆盖 |
| 输出 | 权威视觉入口、自检、冻结与接收说明 | 简明独立报告、运行记录和技术结论 |
| 关闭 | 由总控按有效授权决定 | 返回REVIEW_PASS，不登记批准或关闭 |

制作方与审查方都会看实际页面，这是必要的自检和独立判断。应消除的是第二套制作、重复资产、相同实例的机械重跑和重复台账，不能取消独立判断本身。

## 4. Skill对比

| Skill | Gate 4使用 | 新Gate 5使用 |
|---|---|---|
| [brand-applied-visual-design V0.2](../../skills/brand-applied-visual-design/SKILL.md) | 4A建立规则与高风险样例，交回方向判断 | 不调用制作；读取规则作为被审依据 |
| [full-page-visual-composition V0.2](../../skills/full-page-visual-composition/SKILL.md) | 4B应用到整页、状态，返修并冻结 | 不调用制作；读取最终成果 |
| layout-interaction-verification V0.6 | SELF_CHECK，对自身工作集检查，执行Agent负责修复 | INDEPENDENT_REVIEW；INITIAL或TARGETED范围，只读冻结组合 |

无需新增“Gate 5专用制作Skill”。共享同一个核验能力，通过实际身份、输入、模式、写权限和输出形成不同角色责任。

## 5. 尚待联合流程修订的明确差额

1. Gate 4 Agent§6及当前工作流仍使用“Gate 4最终独立审查”，尚未正式改成新Gate 5路由；联合迁移时替换该环节，不能保留两次审查。
2. Gate 4 Agent引用共同合同V1.1，两项制作Skill仍指向V1.0；联合修订需核对并统一当前合同指针，不凭版本号静默扩大权限。
3. 总控的Gate路由、常设授权映射、Gate 6接收入口需随正式编号切换同步。本次不把角色源落档当成全流程已经迁移。
4. 统一validator尚未实现；本次允许可核实的等价机器结果，没有虚报工具已交付。真实页面回放与效率测量仍需实际执行证明。

## 6. 维护与验证

修改前六个文件原件保存在[本轮快照目录](../../90_archive/project-governance/2026-09-07-gate5-contract-completion/)，维持相对路径。Gate 3/4消费共享Skill的新基线升版本，历史Manifest保留；导航同步新指针。未改变页面Manifest、历史关闭结论或开发项目。

文件引用、基线身份与Skill格式校验结果由本次执行工具记录支持；文档校验不等于真实Reviewer行为回放，不宣称已测得耗时下降。
