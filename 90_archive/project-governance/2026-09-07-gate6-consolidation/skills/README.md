# 项目自有Skill源目录

本目录由2026-09-06用户明确要求建立，保存本项目自主设计的方法Skill，不放在用户级公共Skill目录。

## Gate 5方法设计已批准（2026-09-07）

[完整页面视觉制作](full-page-visual-composition/SKILL.md) V0.1将批准内容、结构和视觉规则应用到完整三端及适用状态，交回可编辑源、正式图、身份和实际检查。范围与[Gate 5角色及Gate 6接收设计](../docs/superpowers/specs/2026-09-07-gate5-agent-skill-design-v0.1.md)对应；布局和实际操作复用现有核验方法，Agent负责整页判断与阶段交接。[用户已批准首版设计并授权继续验证](../docs/superpowers/specs/2026-09-07-gate5-design-user-approval-v0.1.md)，[有限隔离验证已完成](../docs/superpowers/specs/2026-09-07-gate5-skill-validation-v0.1.md)：三端整页与独立核查完成，接收挑战经修正复验关闭。精确源不回写，源中候选文字为历史提交截面；有限验证不代表全页面类型或真实页面授权。未改Gate 1–4方法或安装注册。

## Gate 4方法候选（2026-09-07）

[品牌应用与视觉样例制作](brand-applied-visual-design/SKILL.md) V0.1已形成可审阅候选源；范围与接口见[细化记录V0.2](../docs/superpowers/specs/2026-09-07-gate4-agent-skill-design-v0.2.md)。负责品牌用途映射、真实样例、三端/状态制作核对和文件交回；方向、范围与批准由Agent负责。[首轮隔离验证](../docs/superpowers/specs/2026-09-07-gate4-skill-validation-v0.1.md)后，已按用户授权在[Poland首个真实Gate 4页面](../pages/markets/poland/05_review/MARKET-EU-PL_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md)完成制作、自检、独立初审、返修及复验。IR01暴露执行漏查辅助hover背景，现已修复并保留失败；方法源保持V0.1，不以两页通过替代普遍方法批准。Poland与Chloride Process方向均已获用户批准关闭；[两页流程复盘](../docs/superpowers/specs/2026-09-07-gate4-two-page-process-retrospective-v0.1.md)已记录，方法源保持，未安装或运行注册。布局与交互核验按实际样例范围复用，不将局部检查写成整页通过。

Gate 2用户明确决定不设专属Skill；原内容探索文件仅保留历史，不作为待补齐方法推进。决定来源保存在[Gate 4初版学习与设计记录](../docs/superpowers/specs/2026-09-07-gate4-agent-skill-design-v0.1.md)§1。

## Gate 1方法

下列三项为 Gate 1 方法范围；第一项按用户最新决定收窄，已生成项目源文件。正式运行入口仍未安装或启用；其他两项尚未生成 SKILL.md。Gate 3 方法与验证见本文件末节：

| 方法 | 计划子目录 | 当前状态 |
|---|---|---|
| 搜索意图证据分析 | [search-intent-evidence-analysis/SKILL.md](search-intent-evidence-analysis/SKILL.md) | 已增加用户批准的文件交接合同；方法采集验证见 V0.3，文件交接验证见 V0.4；未安装/未正式启用 |
| 问题驱动研究 | `question-driven-research/` | 范围已批准，详细方法待设计 |
| 声明与证据核验 | `claim-evidence-verification/` | 范围已批准，详细方法待设计 |

Agent负责选择方法、综合结果、四项核心交付与阶段管理；Skill只维护可复用方法。参考[Agent角色合同V0.7](../docs/superpowers/specs/2026-09-06-gate1-execution-agent-design-v0.7.md)。

当前文件交接见[批准合同与验证V0.4](../docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-validation-v0.4.md)：Agent 指定 `output_path`，Skill 保存 Markdown 并读回，返回绝对路径、结论摘要与未完成事项；Agent 实际读取后综合。方法报告保存在任务研究目录，不保存在本 Skill 源目录，也不增加第五项 Gate 1 核心成果。此合同替代下述设计 V0.1 中“不强制另建报告”的旧条款，其他方法规则保持。

第一项当前范围见[2026-09-06收窄决定](../docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-scope-v0.1.md)：提供搜索观察、意图解释与局限；主要读者、问题优先级和页面职责决策留给Agent。旧建议名 `search-intent-buyer-questions` 不再作为当前建设范围。

当前方法见[方法与工具设计V0.1](../docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-design-v0.1.md)：须支持web_search、web_fetch、内置浏览器Google及内置浏览器Semrush；按问题选用，分别记录证据来源。用户已确认两站有账号；若实际要求登录，由用户在官方浏览器页面输入，不在聊天或项目文件收集密码。

当前执行结果见[实际采集与首版验证V0.3](../docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-validation-v0.3.md)：四条路径均已实际观察到结果，包括 Google 原词页面及 Semrush UK 关键词报告。真实无 Skill 采集暴露选源偏差、查询归属和行动推断问题；据此编写方法，保留无/有 Skill 回放与真实采集的失败、修订和复测。浏览器仍有间歇超时，指标不可用不填零。小样本结果不宣称普遍增益，也不等于已接入正式 Gate 1 流程。

[浏览器复验V0.2](../docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-validation-v0.2.md)和[首轮验证V0.1](../docs/superpowers/specs/2026-09-06-search-intent-evidence-skill-validation-v0.1.md)仅保留各自时点的历史结果；不用于覆盖当前状态。

旧混合型Skill完整归档位置及迁移状态见[目录与拆分决定](../docs/architecture/PROJECT_SKILL_DIRECTORY_AND_GATE1_SPLIT_V1.0.md)。旧版不放在本目录作为有效方法，不继续从公共路径调用。

本目录是方法源，不等于Codex自动发现或已安装；未来本项目运行入口与验证另行确认。不要为了凑目录创建空壳Skill，不把纸面设计或结构检查写成实际行为验证。

## Gate 3 方法与V0.2定向修订（2026-09-07）

用户已认可 Gate 3 角色细则及两项具体方法，并完成Poland市场页与Chloride Process聚合页两个真实页面测试。[两页流程复盘](../docs/superpowers/specs/2026-09-07-gate3-two-page-process-retrospective-v0.1.md)后，用户授权六项[V0.2定向修订](../docs/superpowers/specs/2026-09-07-gate3-v0.2-targeted-revision.md)；当前组合与运行顺序由[Gate 3 Agent/Skill当前基线Manifest V1.2](../docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.2.md)统一导航，V0.1批准设计和有限隔离验证继续作为历史依据。

| 方法 | 项目源 | 当前状态 |
|---|---|---|
| 响应式线框设计 | [SKILL.md](responsive-wireframe-design/SKILL.md) V0.2 | 正式渲染前必须通过硬预检；冻结记录绑定源、依赖与输入；正式批准核心证据和诊断支持证据分层；[V0.1历史源](responsive-wireframe-design/history/SKILL-v0.1.md)保留 |
| 布局与交互核验 | [SKILL.md](layout-interaction-verification/SKILL.md) V0.2 | 从冻结候选开始核验；使用固定核心项＋页面专属风险，PASS数量只表示覆盖范围，不作跨页质量比较；[V0.1历史源](layout-interaction-verification/history/SKILL-v0.1.md)保留 |

两项均未安装或自动启用；不改变 Gate 1 方法及其批准合同。设计方法交真实资产，核验方法只写问题和证据；页面范围、当前 Manifest 与批准状态由 Agent 和项目记录维护。

V0.2增加[预检、冻结与证据规则](responsive-wireframe-design/references/preflight-freeze-evidence.md)、[预检记录检查器](responsive-wireframe-design/scripts/check-preflight-record.mjs)及[核心项与页面风险模型](layout-interaction-verification/references/core-risk-model.md)。共享Header、Footer、Mobile Menu与Cookie Settings从[页面中立消费包V0.2](../docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md)消费；RES-CHEMOURS冻结前预检发现并阻断V0.1共享交互色偏差，修正前设计Skill V0.2快照已保留。

原有限验证只覆盖一个合成页面；后续两个真实页面证明了内容型市场页和列表型产品聚合页流程。[第三页RES-CHEMOURS实测V0.2](../docs/superpowers/specs/2026-09-07-gate3-v0.2-live-test-result-v0.2.md)完成硬预检阻断、共享修正、冻结、证据分层、独立审查及用户批准关闭。该结果不能代替尚未覆盖的组件类型或所有页面类型。
