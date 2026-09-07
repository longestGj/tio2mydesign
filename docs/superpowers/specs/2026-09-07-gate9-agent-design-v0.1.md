# Gate 9 Agent职责与交接设计 V0.1

日期：2026-09-07。状态：`DESIGN_CANDIDATE / USER_REVIEW_PENDING`。

## 1. 本轮授权与范围

用户先要求学习Gate 1–6的Agent/Skill及Gate 9已有任务，随后对“先完成Gate 9 Agent职责与交接，再确定Skill接口”的下一步回复“执行下一步”。本轮形成[角色草案](../../../agents/gate9-read-only-acceptance/agent.md)，不把执行设计授权解释为详细条款全部获批、真实页面试跑或开发发布授权。

采用brainstorming的职责与接口设计思路，以及skill-creator的角色/方法分离原则。本轮只交角色与设计记录，未创建SKILL.md、运行注册、页面Manifest或新审批阶段。

## 2. 承接最新来源

前轮学习时Gate 6为Agent V0.3与两个V0.1候选方法。本轮读回发现其他任务已完成[三页经验修订](2026-09-07-gate6-three-page-method-revision-v0.2.md)，已全文补读Agent V0.4及两项V0.2方法。先前关于候选版本的描述只代表前轮时点，不作为本轮当前状态。

当前设计继承：

- [工作流V3.1](../../architecture/GATE_WORKFLOW_V3.1.md)：同一接受条件贯穿6→8→9，指定实际实现独立只读验证。
- [分工标准](../../architecture/AGENT_SKILL_SEPARATION_STANDARD_V1.0.md)：Agent负责结果，Skill负责方法，页面保存事实与决定。
- [Gate 2 Review](../../../agents/gate2-review/agent.md)：实际成果先读、完整发现后精简报告。
- [Gate 4角色](../../../agents/gate4-complete-visual/agent.md)：统一输入和证据入口，证据类型及最终审查职责清楚。
- [Gate 6角色](../../../agents/gate6-review-delivery/agent.md)：合同、原型、运行实现的关闭对象分开；允许开发评估原型代码复用，既有owner与架构仍须核对。

## 3. 方案选择与影响

建议一个独立验收Agent组织各项检查，复用适用方法并补运行实现方法。选择依据是已有工作流已明确Gate 9独立职责，新增重复预审岗位不能自动增加证据质量。

另两个选择：把所有技术方法塞进角色会导致职责和步骤重复维护；按内容、视觉、CMS分别建立常设Agent会增加交接和版本失配风险。当前没有证明这些新增岗位必要，暂不采用；真实复杂任务仍可在获得授权后分配独立检查范围。

影响仅为新增角色候选和本设计记录。风险在于把历史测试、原型观察或开发回执误认为本次实际验收，因此角色要求环境、数据、版本和证明对象分别记录。未修改现有Agent/Skill、根规则、导航或页面进度。若设计需撤回，保留候选记录并后续标记被替代，不回滚任何页面批准。

## 4. 方法接口建议

| 能力 | 本轮决定/候选接口 |
|---|---|
| 运行实现核验（拟新增，尚无Skill源） | 输入批准接受条件、实现/环境身份、可访问结果、数据/接收合同、实际操作授权及输出路径；输出实际链路观察、条件覆盖、Finding及未验证范围 |
| 布局与交互核验（现有） | 复用内容关系、几何、实际图像与焦点检查；当前偏策划资产，后续须明确Gate 9适配，不能直接继承策划证据为实现PASS |
| 页面合同一致性核验（当前V0.2） | 复用内容/事实/动作/机器含义对照；不能单独证明CMS、接收或scope实际行为 |
| 开发交付规格整理（当前V0.2） | 属Gate 6生成验收输入的能力；Gate 9消费其批准结果，不重复生成开发包 |

所有方法共用审查输入区、接受条件ID和证据索引。报告保存并读回后交Agent实际接收。任务管理、退回协调、批准状态和发布条件裁决留在Agent；不为每个小步骤新增Skill。

## 5. 案例依据与后续验证

| 已读取的案例 | 应验证的能力 |
|---|---|
| [DOC-TDS定向复验](../../../pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE9_TARGETED_REREVIEW_AUDIT_V0.1.md) | 公开数据、历史导航状态、完整视觉和证据身份；修复后关联回归 |
| [CONV-DOC当前记录](../../../pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md) | 服务商接受与实际邮箱收件分开，继承最新接收与Privacy决定 |
| [RES-PROC偏离记录](../../../pages/resources/07_qa/RES-PROC_GATE9_PRELIMINARY_SCOPE_DIVERGENCE_FINDING_V0.1.md) | 错误开发基线、缺失CMS、共享回归和不完整回执；候选一不能因候选二失败而获批 |
| [RES-ORIGIN当前记录](../../../pages/resources/07_qa/RES-ORIGIN_CURRENT_GATE9_BASELINE_MANIFEST_V0.11.md) | 当前未显示的条件分支仍需按合同验证；不误开公开inventory或索引 |
| [DOC-000批准后变更](../../../pages/documents/05_review/DOC-000_POST_GATE9_FAQ_GRADE_ALIGNMENT_DECISION_V0.1.md) | 保留旧关闭范围，新增文案实施/复验保持开放 |

这些是已读取历史材料，未在本轮重新运行，也不证明新角色已通过行为验证。下一步先审阅本角色职责，再编写运行方法及必要适配；以原始合同和候选证据作有限独立回放，评估者不接收既有Finding答案。历史回放不能证明实时浏览器/CMS/接收；真实页面试跑按具体授权和可用环境安排。

## 6. 本轮自检范围

检查角色是否符合当前工作流、职责/方法是否分开、接收与复验是否绑定版本、未测和发布条件是否分开、只读操作是否保留已有授权、文件链接是否有效。此检查为作者自检，不是独立审查、方法行为测试或用户批准。

本目录没有Git仓库，本轮不进行提交。正式文件在项目目录保存，未改D16或共享导航；由对话链接定位候选。角色获认可后再按批准范围同步入口，避免将设计候选误列为当前有效角色。
