# 项目自有 Agent 角色目录

> 2026-09-07当前批准方式：Gate 3、4、6按[总控常设关闭授权](../docs/architecture/GATE_3_4_6_DELEGATED_CLOSURE_AUTHORITY_V1.0.md)执行独立审查与总控关闭，不再等待逐页用户批准；Gate 1/2/9/10不变。本文历史“用户批准”表述只保留原记录语境，当前三关关闭由该授权解释；内容事实决定、明确暂停、下一阶段启动与外发/开发/发布权限分别保留。


> 阶段解释必须先读[Gate工作流V3.3](../docs/architecture/GATE_WORKFLOW_V3.3.md)。原Gate 4/5合并为当前Gate 4完整视觉，原Gate 7职责并入Gate 6；旧角色、文件名、批准和hash保持历史语境。流程设计不改变具体页面权限。

本目录保存岗位职责与工作合同；`skills/` 保存可复用方法，`pages/` 等项目资料目录保存事实、研究成果与决定。根 `AGENTS.md` 继续是整个项目的工作入口。

Gate 9建设入口：[独立只读验收Agent V0.5](gate9-read-only-acceptance/agent.md)、[机器交接合同](../docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md)与[多批次复盘](../docs/architecture/GATE9_MULTI_BATCH_RETROSPECTIVE_V1.0.md)。V0.5强制接单预检、四层状态、共享根Finding、原Gate8通知及固定收口事务；外部接收与整体阶段关闭尚未完整验证，未运行注册，不改变页面授权。

总控入口：[Website Planning Orchestrator V0.14](project-orchestrator/agent.md)，由当前根任务承担；[批准、生效及精确身份](../docs/architecture/PROJECT_ORCHESTRATOR_ACTIVATION_V1.13.md)。配套SOP、交接合同和Gate路由在角色中链接；不是新增上级任务或运行注册。

| 角色 | 当前文件 | 设计来源 |
|---|---|---|
| Gate 4完整视觉设计与验证 | [agent.md](gate4-complete-visual/agent.md) V1.5 | [当前基线Manifest](../docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.10.md)：一个执行Agent、三个能力Skill、4A内部检查、4B冻结及一个最终独立审查环节；批准角色源不等于运行注册或页面授权 |
| Gate 6策划总审与开发交付 | [当前基线V1.1](../docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md)：Agent V0.7、两项Skill V0.3；有效上游继承、触发式扩大检查、单一自检、新包独立复核、总控维护Manifest。 |
| 原Gate 4视觉方向Agent（历史） | [agent.md](gate4-execution/agent.md) V0.1 | 保留旧方向职责、验证和页面历史，不再作为未来当前执行入口 |
| 原Gate 5完整视觉Agent（历史） | [agent.md](gate5-execution/agent.md) V0.1 | 保留旧完整视觉职责、验证和页面历史，不再作为未来当前执行入口 |
| Gate 1 执行 Agent | [agent.md](gate1-execution/agent.md) | [已批准角色说明 V0.7](../docs/superpowers/specs/2026-09-06-gate1-execution-agent-design-v0.7.md) |
| Gate 3 执行 Agent | [agent.md](gate3-execution/agent.md) V0.7 | [当前基线Manifest V1.14](../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.14.md)：明确页面家族、跨页复用及差异依据；Gate 4决定列数和响应式布局。 |
| Gate 2 执行 Agent | [agent.md](gate2-execution/agent.md) V0.7 | [设计收束 V0.7](../docs/superpowers/specs/2026-09-06-gate2-execution-agent-design-v0.7.md) + [当前交付结构V0.6](../docs/superpowers/specs/2026-09-08-gate2-delivery-structure-v0.6.md)：两步流程与用户批准保持；骨架限于方向判断、同轮集中返修，总控核对范围及跨合同；提交前完成全页扫描与条件性第三方来源表达精度自检；C只因页面合同语义变化升级 |
| Gate 2 Review Agent | [agent.md](gate2-review/agent.md) V0.7 | [用户批准设计 V0.1](../docs/superpowers/specs/2026-09-06-gate2-review-agent-design-v0.1.md) + [当前交付结构V0.6](../docs/superpowers/specs/2026-09-08-gate2-delivery-structure-v0.6.md)：独立审读实际Buyer Copy；总控按范围/跨合同分工，局部复验不重启完整链；发现一个问题后继续完整扫描；外部来源触发语义精度审查；精简报告保存全部实质Finding |

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

内链专项：[网站内链审查 Agent V0.2](internal-link-review/agent.md)。按[生效与交接合同](../docs/architecture/INTERNAL_LINK_REVIEW_ACTIVATION_V1.1.md)由总控派发；不新增Gate、不自行修复或批准发布。项目源未注册、未实测。

Gate 1当前执行：[三路径合同V1.0](../docs/architecture/GATE1_THREE_PATH_EXECUTION_CONTRACT_V1.0.md)；Agent V0.2，搜索意图Skill V0.2，REUSE_CONFIRMATION / GAP_RESEARCH / FULL_RESEARCH。四类信息可引用映射、按缺口调用方法；旧四文件建设记录保留历史。本轮只改规则，未做页面回放。

Gate 2内容适配已按G2-ADAPTATION-20260908修订：两个Agent V0.7、交付结构V0.6，保留两步/独立冷读/用户批准；三种制作方式不映射G1路径，不新增Skill。当前总控生效增补为[ V1.13 ](../docs/architecture/PROJECT_ORCHESTRATOR_ACTIVATION_V1.13.md)。

网站级准备已接入总控V0.14：[共同合同](../docs/architecture/WEBSITE_PREPARATION_HANDOFF_CONTRACT_V1.6.md) / [最小模板](../docs/architecture/WEBSITE_PREPARATION_HANDOFF_TEMPLATE_V1.6.md)。五工作包不新增Gate；W1–W5 Agent已建立，均未实战试跑，准备就绪与页面授权分开。

企业与产品事实基础：[Agent V0.1](enterprise-product-facts/agent.md)。W1六部分、先读资料再集中补问；不制定战略，不新增Skill，未实战试跑。

市场、客户与竞争分析：[Agent V0.1](market-customer-competition/agent.md)。W2六部分、四类信息和有界研究，为W3提供依据；不批准战略，不新增Skill，未实战试跑。

商业战略与网站定位：[Agent V0.1](business-strategy-positioning/agent.md)。W3六部分、战略选择与网站职责分离，用户决定后交W4；不强造方案、不新增Skill，未实战试跑。

网站架构与采购旅程：[Agent V0.1](site-architecture-buyer-journey/agent.md)。W4七部分、内链与异常旅程、架构批准边界；不新增Skill，未实战试跑。

生产准备与批次安排：[Agent V0.2](production-preparation/agent.md)。W5六部分、当前批次输入与增量/标准补齐安排，总控负责准入/派发/关闭；不新增Skill，未实战试跑。


独立模板资源管理：[页面模板库Agent V0.1](page-template-library/agent.md)。负责候选发现、档案、入库核验接收与版本维护；不属于W1–W5或Gate。角色设计已建立，未运行注册、未开展实际盘点。

2026-09-20 Gate 3/4正文已同步跨页一致性决定，Gate 5 Reviewer V0.5检查同类模块与受控差异；当前精确身份由上述Gate 3 V1.14、Gate 4 V1.10基线维护。
