# 项目自有 Agent 角色目录

> 阶段解释必须先读[Gate工作流V3.0](../docs/architecture/GATE_WORKFLOW_V3.0.md)。原Gate 4/5合并为当前Gate 4完整视觉，原Gate 7职责并入Gate 6；旧角色、文件名、批准和hash保持历史语境。流程设计不改变具体页面权限。

本目录保存岗位职责与工作合同；`skills/` 保存可复用方法，`pages/` 等项目资料目录保存事实、研究成果与决定。根 `AGENTS.md` 继续是整个项目的工作入口。

| 角色 | 当前文件 | 设计来源 |
|---|---|---|
| Gate 4完整视觉设计与验证 | [agent.md](gate4-complete-visual/agent.md) V1.0 | [当前基线Manifest](../docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.0.md)：一个执行Agent、三个能力Skill、4A内部检查、4B冻结及一个最终独立审查环节；批准角色源不等于运行注册或页面授权 |
| Gate 6策划总审与开发交付 | [agent.md](gate6-review-delivery/agent.md) V0.2 | 引用有效Gate 4审查证据，只复核变化、缺口和合同冲突；继续负责整体一致性、唯一开发包和Gate 9接受条件 |
| 原Gate 4视觉方向Agent（历史） | [agent.md](gate4-execution/agent.md) V0.1 | 保留旧方向职责、验证和页面历史，不再作为未来当前执行入口 |
| 原Gate 5完整视觉Agent（历史） | [agent.md](gate5-execution/agent.md) V0.1 | 保留旧完整视觉职责、验证和页面历史，不再作为未来当前执行入口 |
| Gate 1 执行 Agent | [agent.md](gate1-execution/agent.md) | [已批准角色说明 V0.7](../docs/superpowers/specs/2026-09-06-gate1-execution-agent-design-v0.7.md) |
| Gate 3 执行 Agent | [agent.md](gate3-execution/agent.md) V0.3 | [当前基线Manifest V1.3](../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.3.md)：用户授权结构范围、共享继承、证据与停止条件定向修订；[修订前V0.2](gate3-execution/history/agent-v0.2-scope-control-baseline.md)保留，新版尚未真实页面试跑 |
| Gate 2 执行 Agent | [agent.md](gate2-execution/agent.md) V0.5 | [设计收束 V0.7](../docs/superpowers/specs/2026-09-06-gate2-execution-agent-design-v0.7.md) + [当前交付结构V0.4](../docs/superpowers/specs/2026-09-07-gate2-delivery-structure-v0.4.md)：两步流程保持；提交前完成全页扫描与条件性第三方来源表达精度自检；C只因页面合同语义变化升级 |
| Gate 2 Review Agent | [agent.md](gate2-review/agent.md) V0.5 | [用户批准设计 V0.1](../docs/superpowers/specs/2026-09-06-gate2-review-agent-design-v0.1.md) + [当前交付结构V0.4](../docs/superpowers/specs/2026-09-07-gate2-delivery-structure-v0.4.md)：独立审读实际Buyer Copy；发现一个问题后继续完整扫描；外部来源触发语义精度审查；精简报告保存全部实质Finding |

2026-09-06 用户同意整理正式角色文件；Spain实践后建立独立Review Agent，PRODUCT-PROC-CL后形成V0.3。MARKET-EU-PL完整测试促成V0.4风险优先审查。2026-09-07 RES-CHEMOURS测试证明“最危险/最弱”可能被误当作发现上限，第三方来源表述需要逐命题核对，且Manifest与C会因审查往返过度升级；用户批准V0.5角色与V0.4交付结构。V0.4角色已保存为Chemours测试基线，已批准页面不回写。执行任务需明确读取对应文件；任意命名的 `agent.md` 不应被视作已自动加载的项目入口，参见 [Codex 指令文件发现规则](https://learn.chatgpt.com/docs/agent-configuration/agents-md)。

德国手工试跑资料仍保存在页面目录，通过其 [当前 Manifest](../pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md) 查找；具体页面事实不写进通用角色文件。既有 `research/keyword/agent.md` 不属于本次 Gate 1 角色，不迁移或覆盖。

2026-09-07用户要求执行下一步，将已认可Gate 3细则整理为项目角色入口。随后Poland市场页和Chloride Process聚合页均完成执行、自检、总控独立审查、用户批准与关闭；[两页流程复盘](../docs/superpowers/specs/2026-09-07-gate3-two-page-process-retrospective-v0.1.md)形成V0.2的六项定向修订。[RES-CHEMOURS第三页实测V0.2](../docs/superpowers/specs/2026-09-07-gate3-v0.2-live-test-result-v0.2.md)也已完成并获用户批准关闭。当前仍没有运行注册、自动派发或常设独立Gate 3 Review岗位；具体执行任务须明确读取角色源及所使用的SKILL.md。
