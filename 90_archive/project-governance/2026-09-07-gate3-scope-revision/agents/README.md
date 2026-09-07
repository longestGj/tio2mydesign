# 项目自有 Agent 角色目录

> 阶段解释必须先读[Gate工作流V2.0](../docs/architecture/GATE_WORKFLOW_V2.0.md)。Gate 6负责策划总审与开发交付，Gate 7不再独立执行；已有角色/Skill/设计记录中的旧Gate 7表述仅按该规则兼容。Gate 5仍只交Gate 6输入，不承担交付包编制。源文件及其批准hash保持，本次不新建Gate 6/7 Agent或Skill、不改变页面权限。

本目录保存岗位职责与工作合同；`skills/` 保存可复用方法，`pages/` 等项目资料目录保存事实、研究成果与决定。根 `AGENTS.md` 继续是整个项目的工作入口。

| 角色 | 当前文件 | 设计来源 |
|---|---|---|
| Gate 6策划总审与开发交付（候选） | [agent.md](gate6-review-delivery/agent.md) V0.1 | [设计记录](../docs/superpowers/specs/2026-09-07-gate6-agent-skill-design-v0.1.md)：用户已确定独立总审、问题闭环、唯一交付包与Gate 9接受条件四项职责；详细角色/方法为候选，直接面向开发与验收。全站取消Gate 7由专人负责；本入口不授予具体页面或开发权限 |
| Gate 5执行Agent（设计已批准） | [agent.md](gate5-execution/agent.md) V0.1 | [首版设计及Gate 6交接合同](../docs/superpowers/specs/2026-09-07-gate5-agent-skill-design-v0.1.md)已获[用户批准](../docs/superpowers/specs/2026-09-07-gate5-design-user-approval-v0.1.md)：完整三端、全部实例/状态、视觉判断、冻结交付及Gate 6接收；配套完整视觉制作并复用布局核验。[有限隔离验证已完成](../docs/superpowers/specs/2026-09-07-gate5-skill-validation-v0.1.md)：独立视觉核查完成，接收挑战经修正复验关闭。源文件保留提交时文字，当前设计批准由决定记录控制，不授权真实页面执行 |
| Gate 4执行Agent（候选） | [agent.md](gate4-execution/agent.md) V0.1 | [细化记录V0.2](../docs/superpowers/specs/2026-09-07-gate4-agent-skill-design-v0.2.md)：视觉方向、样例覆盖与Gate 5交接；[有限方法验证](../docs/superpowers/specs/2026-09-07-gate4-skill-validation-v0.1.md)后，已按用户授权完成[Poland首个真实页面制作、自检、独立初审、返修与复验](../pages/markets/poland/05_review/MARKET-EU-PL_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md)，Poland方向已获用户批准关闭。Chloride Process方向亦已获用户批准关闭；[两页流程复盘](../docs/superpowers/specs/2026-09-07-gate4-two-page-process-retrospective-v0.1.md)已记录；角色源保持，未运行注册，不据两页验证倒填普遍批准 |
| Gate 1 执行 Agent | [agent.md](gate1-execution/agent.md) | [已批准角色说明 V0.7](../docs/superpowers/specs/2026-09-06-gate1-execution-agent-design-v0.7.md) |
| Gate 3 执行 Agent | [agent.md](gate3-execution/agent.md) V0.2 | [当前基线Manifest V1.2](../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md)：第三页V0.2实测已获用户批准关闭；共享消费指针为V0.2，修正前[V0.2快照](gate3-execution/history/agent-v0.2-pre-shared-consumer-v0.2.md)与[V0.1历史源](gate3-execution/history/agent-v0.1.md)保留 |
| Gate 2 执行 Agent | [agent.md](gate2-execution/agent.md) V0.5 | [设计收束 V0.7](../docs/superpowers/specs/2026-09-06-gate2-execution-agent-design-v0.7.md) + [当前交付结构V0.4](../docs/superpowers/specs/2026-09-07-gate2-delivery-structure-v0.4.md)：两步流程保持；提交前完成全页扫描与条件性第三方来源表达精度自检；C只因页面合同语义变化升级 |
| Gate 2 Review Agent | [agent.md](gate2-review/agent.md) V0.5 | [用户批准设计 V0.1](../docs/superpowers/specs/2026-09-06-gate2-review-agent-design-v0.1.md) + [当前交付结构V0.4](../docs/superpowers/specs/2026-09-07-gate2-delivery-structure-v0.4.md)：独立审读实际Buyer Copy；发现一个问题后继续完整扫描；外部来源触发语义精度审查；精简报告保存全部实质Finding |

2026-09-06 用户同意整理正式角色文件；Spain实践后建立独立Review Agent，PRODUCT-PROC-CL后形成V0.3。MARKET-EU-PL完整测试促成V0.4风险优先审查。2026-09-07 RES-CHEMOURS测试证明“最危险/最弱”可能被误当作发现上限，第三方来源表述需要逐命题核对，且Manifest与C会因审查往返过度升级；用户批准V0.5角色与V0.4交付结构。V0.4角色已保存为Chemours测试基线，已批准页面不回写。执行任务需明确读取对应文件；任意命名的 `agent.md` 不应被视作已自动加载的项目入口，参见 [Codex 指令文件发现规则](https://learn.chatgpt.com/docs/agent-configuration/agents-md)。

德国手工试跑资料仍保存在页面目录，通过其 [当前 Manifest](../pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md) 查找；具体页面事实不写进通用角色文件。既有 `research/keyword/agent.md` 不属于本次 Gate 1 角色，不迁移或覆盖。

2026-09-07用户要求执行下一步，将已认可Gate 3细则整理为项目角色入口。随后Poland市场页和Chloride Process聚合页均完成执行、自检、总控独立审查、用户批准与关闭；[两页流程复盘](../docs/superpowers/specs/2026-09-07-gate3-two-page-process-retrospective-v0.1.md)形成V0.2的六项定向修订。[RES-CHEMOURS第三页实测V0.2](../docs/superpowers/specs/2026-09-07-gate3-v0.2-live-test-result-v0.2.md)也已完成并获用户批准关闭。当前仍没有运行注册、自动派发或常设独立Gate 3 Review岗位；具体执行任务须明确读取角色源及所使用的SKILL.md。
