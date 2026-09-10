# 项目自有 Agent 角色目录

> 2026-09-07当前批准方式：Gate 3、4、6按[总控常设关闭授权](../docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)执行独立审查与总控关闭，不再等待逐页用户批准；Gate 1/2/9/10不变。本文历史“用户批准”表述只保留原记录语境，当前三关关闭由该授权解释；内容事实决定、明确暂停、下一阶段启动与外发/开发/发布权限分别保留。


> 阶段解释必须先读[Gate工作流V3.2](../docs/architecture/GATE_WORKFLOW_V3.2.md)。原Gate 4/5合并为当前Gate 4完整视觉，原Gate 7职责并入Gate 6；旧角色、文件名、批准和hash保持历史语境。流程设计不改变具体页面权限。

本目录保存岗位职责与工作合同；`skills/` 保存可复用方法，`pages/` 等项目资料目录保存事实、研究成果与决定。根 `AGENTS.md` 继续是整个项目的工作入口。

Gate 9建设入口：[独立只读验收Agent V0.3](gate9-read-only-acceptance/agent.md)与[实战改进及验证记录](../docs/superpowers/specs/2026-09-07-gate9-poland-improvements-v0.1.md)。用户授权根据真实页面只读核验及返修经验修订；外部接收与整体阶段关闭尚未完整验证，未运行注册，不改变页面授权。

总控入口：[Website Planning Orchestrator V0.3](project-orchestrator/agent.md)，由当前根任务承担；[批准、生效及精确身份](../docs/architecture/PROJECT_ORCHESTRATOR_ACTIVATION_V1.2.md)。配套SOP、交接合同和Gate路由在角色中链接；不是新增上级任务或运行注册。

| 角色 | 当前文件 | 设计来源 |
|---|---|---|
| Gate 4完整视觉设计与验证 | [agent.md](gate4-complete-visual/agent.md) V1.2 | [当前基线Manifest](../docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.9.md)：一个执行Agent、三个能力Skill、4A内部检查、4B冻结及一个最终独立审查环节；批准角色源不等于运行注册或页面授权 |
| Gate 6策划总审与开发交付 | [当前基线V1.1](../docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md)：Agent V0.7、两项Skill V0.3；有效上游继承、触发式扩大检查、单一自检、新包独立复核、总控维护Manifest。 |
| 原Gate 4视觉方向Agent（历史） | [agent.md](gate4-execution/agent.md) V0.1 | 保留旧方向职责、验证和页面历史，不再作为未来当前执行入口 |
| 原Gate 5完整视觉Agent（历史） | [agent.md](gate5-execution/agent.md) V0.1 | 保留旧完整视觉职责、验证和页面历史，不再作为未来当前执行入口 |
| Gate 1 执行 Agent | [agent.md](gate1-execution/agent.md) | [已批准角色说明 V0.7](../docs/superpowers/specs/2026-09-06-gate1-execution-agent-design-v0.7.md) |
| Gate 3 执行 Agent | [agent.md](gate3-execution/agent.md) V0.5 | [当前基线Manifest V1.11](../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.11.md)：当前V0.5角色/V0.4线框按专项标准限制媒体、动画、风格和返修，未新页面试跑；用户授权结构范围、共享继承、证据与停止条件定向修订；[修订前V0.2](gate3-execution/history/agent-v0.2-scope-control-baseline.md)保留，新版尚未真实页面试跑 |
| Gate 2 执行 Agent | [agent.md](gate2-execution/agent.md) V0.6 | [设计收束 V0.7](../docs/superpowers/specs/2026-09-06-gate2-execution-agent-design-v0.7.md) + [当前交付结构V0.5](../docs/superpowers/specs/2026-09-07-gate2-delivery-structure-v0.5.md)：两步流程与用户批准保持；骨架限于方向判断、同轮集中返修，总控核对范围及跨合同；提交前完成全页扫描与条件性第三方来源表达精度自检；C只因页面合同语义变化升级 |
| Gate 2 Review Agent | [agent.md](gate2-review/agent.md) V0.6 | [用户批准设计 V0.1](../docs/superpowers/specs/2026-09-06-gate2-review-agent-design-v0.1.md) + [当前交付结构V0.5](../docs/superpowers/specs/2026-09-07-gate2-delivery-structure-v0.5.md)：独立审读实际Buyer Copy；总控按范围/跨合同分工，局部复验不重启完整链；发现一个问题后继续完整扫描；外部来源触发语义精度审查；精简报告保存全部实质Finding |

2026-09-06 用户同意整理正式角色文件；Spain实践后建立独立Review Agent，PRODUCT-PROC-CL后形成V0.3。MARKET-EU-PL完整测试促成V0.4风险优先审查。2026-09-07 RES-CHEMOURS测试证明“最危险/最弱”可能被误当作发现上限，第三方来源表述需要逐命题核对，且Manifest与C会因审查往返过度升级；用户批准V0.5角色与V0.4交付结构。V0.4角色已保存为Chemours测试基线，已批准页面不回写。执行任务需明确读取对应文件；任意命名的 `agent.md` 不应被视作已自动加载的项目入口，参见 [Codex 指令文件发现规则](https://learn.chatgpt.com/docs/agent-configuration/agents-md)。

德国手工试跑资料仍保存在页面目录，通过其 [当前 Manifest](../pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md) 查找；具体页面事实不写进通用角色文件。既有 `research/keyword/agent.md` 不属于本次 Gate 1 角色，不迁移或覆盖。

2026-09-07用户要求执行下一步，将已认可Gate 3细则整理为项目角色入口。随后Poland市场页和Chloride Process聚合页均完成执行、自检、总控独立审查、用户批准与关闭；[两页流程复盘](../docs/superpowers/specs/2026-09-07-gate3-two-page-process-retrospective-v0.1.md)形成V0.2的六项定向修订。[RES-CHEMOURS第三页实测V0.2](../docs/superpowers/specs/2026-09-07-gate3-v0.2-live-test-result-v0.2.md)也已完成并获用户批准关闭。当前仍没有运行注册、自动派发或常设独立Gate 3 Review岗位；具体执行任务须明确读取角色源及所使用的SKILL.md。

新Gate 5独立视觉审查角色：[agent.md](gate5-independent-visual-review/agent.md)。角色与核验方法已按用户要求明确禁止默认重复截图；全流程编号切换及页面授权仍按联合方案另行落地。总控派发必须传入新增截图触发、原始证据和实际作者身份，不能用“完整重验”默许重新生产整套图。

Gate 5审查合同补全：Agent V0.2、核验Skill V0.6及独立审查参考V0.2，见[修订与Gate 4对比](../docs/architecture/GATE5_REVIEW_CONTRACT_COMPLETION_V1.0.md)。新Gate 5正式编号路由尚未切换；现有获授权最终视觉审查可使用此角色，不能再追加同范围审查。

Gate 4自检当前规则：Agent V1.3、制作Skill V0.3、核验Skill V0.7及共同合同V1.2，见[自检效率修订](../docs/architecture/GATE4_SELF_CHECK_EFFICIENCY_CHANGE_V1.0.md)。同一实际覆盖只检查一次，正式捕获与变化补验按范围执行；不减免独立审查。

三个视觉Skill当前方法边界：品牌应用V0.4、完整页面制作V0.4、核验V0.8，均集中列出允许与禁止做法，见[整理记录](../docs/architecture/VISUAL_SKILL_METHOD_BOUNDARIES_CHANGE_V1.0.md)。

Gate 6当前执行与总控路由增补：[执行与复核合同V1.0](../docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.0.md)，[修订记录](../docs/architecture/GATE6_EFFICIENCY_CHANGE_V1.0.md)。启用FAST_PATH/ESCALATED_PATH规则；总控初版“尚未启用”仅为历史说明。共享一致性Skill当前V0.3，Gate 9不套用Gate 6精简路径；未实现统一validator或更改页面授权。

Gate 4→新Gate 5当前交接：[共用合同V1.0](../docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md)及[统一记录](../docs/architecture/GATE4_GATE5_HANDOFF_ALIGNMENT_CHANGE_V1.0.md)。Gate 4 Agent V1.4与Gate 5 Agent V0.3共同消费；新Gate 5承担合并Gate 4唯一最终独立审查，明确映射现有生命周期。此前“交接/路由尚待统一”仅保留历史时点，不再作为当前阻塞。

Gate 5→6当前接收：[共用合同V1.0](../docs/architecture/GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.0.md)及[同步记录](../docs/architecture/GATE5_GATE6_CONTROLLER_ALIGNMENT_CHANGE_V1.0.md)。Gate 5 V0.4、Gate 6 V0.7、Controller V0.2和路由V0.2直接引用当前交接定义。

文章工作线：[D23↔D22交接与Gate 1承接合同V1.0](../docs/architecture/ARTICLE_D23_D22_HANDOFF_CONTRACT_V1.0.md)。总控协调选题、派发、接收及内容批准；页面流程从Gate 1开始。
