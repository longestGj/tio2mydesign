# TiO2 Malaysia Gate 前网站策划流程 V0.1 草案

## 0. 文档控制

| 字段 | 当前值 |
|---|---|
| Document ID | `TIO2MY-PRE-GATE-PLANNING-PROCESS-01` |
| Version | `V0.1 DRAFT` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Date | `2026-09-02` |
| Scope | 新网站从立项目标到首批页面获准进入 Gate 0/1 的项目级策划流程 |
| Relationship to page Gates | 本流程为 Gate 提供输入，不替代、不减少、不重编号 Gate 0–10 |
| Current authority | 未经用户批准，本草案不成为项目标准，不改变当前页面或架构状态 |

## 1. 流程目标

Gate 前策划必须完成三个转换：

```text
商业想法
  → 有证据和边界的建站战略
  → 完整网站架构与共享基础
  → 可以稳定启动页面 Gate 的输入
```

流程不以“列出多少页面”为完成标准，而以页面启动后是否仍需要反复补充上游基础为检验标准。

## 2. 流程总览

| 阶段 | 名称 | 核心问题 | 主要输出 |
|---|---|---|---|
| PF0 | Project Intake | 为什么做、谁负责、成功是什么 | Project Foundation Brief |
| PF1 | Source & Evidence Intake | 我们实际知道什么、缺什么 | Source Register、Evidence Readiness Map |
| PF2 | Market, Buyer & Search Discovery | 买家、市场和搜索需求是什么 | Buyer Journey、Market Research、Keyword Research |
| PF3 | Positioning & Strategic Boundaries | 网站是谁、服务谁、不做什么 | Approved Positioning Brief、Decision Log |
| PF4 | Architecture Hypothesis | 网站可能需要哪些体系和能力 | IA Hypothesis、Capability Inventory |
| PF5 | Research-to-Architecture Convergence | 所有研究如何共同决定最终网站 | Approved IA、Page/Capability Registry、差异记录 |
| PF6 | Shared Foundations | 页面共同依赖什么 | Evidence Model、Taxonomy、Visual Direction、Shared System Map |
| PF7 | Delivery Roadmap | 先做什么、怎样试点和扩展 | Pilot Plan、Build/Release Waves、Dependency Map |
| PF8 | Page Launch Readiness | 首批页面是否具备稳定输入 | Page Launch Package、Gate Start Authorization |

PF 是 Planning Foundation，不是新增页面 Gate。它只发生在页面 Gate 之前。

## 3. PF0 — Project Intake

### 3.1 必须确认

- 建站商业目标；
- 前台品牌与运营主体；
- 目标市场和语言；
- 与既有网站、品牌和域名的关系；
- 产品或服务范围；
- 预期转化行为；
- 项目范围与明确禁止事项；
- 策划、开发、发布的责任边界；
- 时间、资源和证据限制；
- 成功标准与失败边界。

### 3.2 输出：Project Foundation Brief

Foundation Brief 必须是一份简洁的当前决定，不使用长对话代替。原始对话、附件和讨论保留为来源。

### 3.3 PF0 完成条件

- 用户能够直接确认网站目标、身份、市场和边界；
- 被否决方向已经进入 Decision Log，不再与当前方向并列；
- 尚未决定的事项有 owner 和决定时点。

## 4. PF1 — Source & Evidence Intake

### 4.1 建立资料清单

至少收集：

- 公司主体、地址、联系和授权资料；
- 产品目录、TDS、SDS、COA、证书和文件样本；
- 产品、应用、工艺和比较关系；
- 品牌、Logo、图片、工厂和媒体资产及使用权；
- 既有网站和内容；
- 市场、法规和贸易资料；
- 表单、邮件、数据处理、Cookie、Analytics 和供应商信息；
- 开发架构与跨站隔离限制。

### 4.2 Evidence Readiness Map

每个资料对象标记：

- `VERIFIED_CURRENT`；
- `USER_APPROVED_FOR_DEFINED_SCOPE`；
- `REFERENCE_ONLY`；
- `STALE_OR_DATE_CHECK_REQUIRED`；
- `CONFLICT`；
- `MISSING`；
- `DO_NOT_PUBLISH`。

### 4.3 PF1 完成条件

不是要求所有证据齐全，而是要求所有重要未知项可见，并知道它会影响定位、架构、页面、共享能力还是未来字段渲染。

## 5. PF2 — Market, Buyer & Search Discovery

PF2 由五条并行研究轨道组成。

### 5.1 Buyer / Commercial Research

- 采购角色；
- 采购阶段；
- 主要判断任务；
- 信任、文件、样品、报价和联系需求；
- 从入口到询盘的完整旅程；
- 购买阻力和风险问题。

### 5.2 Market Research

- 目标国家或地区；
- 应用和行业特点；
- 语言和本地化；
- 采购与供应背景；
- 时间敏感政策及官方来源要求。

### 5.3 Search / Keyword Research

继续采用本项目已验证的 Raw-first 方法：

- 多来源关键词发现；
- SERP page-type 和 intent 证据；
- cluster、cannibalization 和 architecture mapping；
- 缺失 Volume/KD/CPC 保持 Unavailable；
- 新页面只作为人工审核候选；
- 官方来源与技术等效边界；
- 研究完成后 STOP，等待收敛审查。

### 5.4 Competitor / Reference Research

- 分析竞争页面如何满足买家任务；
- 识别行业共同模块、表达和缺口；
- 参考结构不等于复制内容；
- 竞品不能证明本公司的能力。

### 5.5 Operational / Legal / System Research

- 需要哪些表单和接收流程；
- 数据字段、保留、Privacy、Cookie、Consent 和 Analytics；
- Contact、邮箱、地址和失败替代渠道；
- 文件公开、受控申请和敏感资料；
- CMS、路由、语言、SEO、共享组件和 site scope；
- 网站必须具备但不一定有 SEO 主词的 Utility/Legal 页面和功能。

### 5.6 PF2 完成条件

每条研究轨道都有证据、限制、结论和未决项。不得只用关键词研究代表全部网站需求。

## 6. PF3 — Positioning & Strategic Boundaries

PF3 把 PF0–PF2 的发现收敛为批准定位。

### 6.1 Approved Positioning Brief

必须包含：

- 网站类型和一句话定位；
- 前台品牌与运营主体关系；
- 目标买家和市场；
- 核心价值；
- 信任与证据主张；
- 主要转化目标；
- 与既有网站的职责边界；
- 明确不做什么；
- 禁止表达；
- 尚待证据确认的战略假设。

### 6.2 Decision Log

记录每个重大选择：候选、用户决定、原因、被否决方向、影响范围和是否可重新打开。不得让旧建议与当前决定同时作为执行输入。

### 6.3 PF3 完成条件

用户批准的是具体定位内容，而不是文件名或抽象状态。批准定位不自动批准页面架构。

## 7. PF4 — Architecture Hypothesis

PF4 先建立网站假设，不直接宣布最终页面清单。

### 7.1 从五种输入生成架构

- Buyer Journey：买家完成任务需要什么；
- Search Demand：搜索入口需要什么；
- Evidence Model：什么可以真实表达；
- Operational Capability：网站必须怎样运行；
- Business Strategy：网站希望推动什么商业结果。

### 7.2 输出

- 内容体系假设；
- Utility / Legal / Conversion inventory；
- Shared System inventory；
- 语言和市场结构；
- 初步页面职责、URL 和关键词方向；
- 实体、产品、应用、市场、文件与公司关系；
- 候选页面和不建页理由。

### 7.3 PF4 完成条件

架构明确标记为 hypothesis；研究 Agent 不得直接批准页面，项目也不得在收敛前把假设总数写成最终网站规模。

## 8. PF5 — Research-to-Architecture Convergence

PF5 是前置策划的核心审查节点。

### 8.1 六项完整性检查

| 检查 | 必须回答 |
|---|---|
| Strategy fit | 页面体系是否服务批准定位 |
| Buyer journey | 发现、判断、信任、文件和询盘路径是否完整 |
| Search coverage | 关键词和意图是否有唯一承接页面 |
| Evidence feasibility | 页面职责是否超出可用证据 |
| Operational/legal completeness | Utility、Legal、Conversion 和 Consent 是否完整 |
| Shared/release dependencies | 共享系统、目标 route 和发布依赖是否有 owner |

### 8.2 Architecture Convergence Record

记录：

- hypothesis 中保留的内容；
- 研究后新增、删除、合并和拆分的内容；
- 被拒绝的 NEW PAGE CANDIDATE 及原因；
- 关键词与页面职责调整；
- 尚未最终确定的 provisional URL 或语言；
- 页面、功能和共享系统的最终数量；
- 当前架构仍承担的风险。

### 8.3 PF5 输出

- Approved Information Architecture；
- Page/Capability Registry；
- 页面—关键词主表；
- Cannibalization and Ownership Map；
- Buyer Journey Map；
- Shared/Utility/Legal inventory。

### 8.4 PF5 完成条件

PRD、Registry、关键词主表和架构图使用同一批准版本，不依赖“旧基线 + 多个临时 override”作为首批页面启动输入。

## 9. PF6 — Shared Foundations

页面 Gate 启动前，至少建立下列共享基础。

### 9.1 Evidence and Entity Foundation

- 公司、品牌、产品、应用、市场、文件和来源实体；
- 产品—工艺—应用关系；
- 公开、冻结、条件公开和禁止关系；
- 时间敏感事实更新规则。

### 9.2 Brand and Visual Direction

- 品牌视觉定位、色彩、字体、图片和红线；
- Logo 方向与 production asset 计划；
- 明确视觉方向不等于页面结构或生产组件批准。

### 9.3 Shared Experience Foundation

- Header/Footer 信息架构；
- CTA family；
- 表单类型与最小字段；
- 文件申请和成功/失败原则；
- Privacy、Cookie、Consent 和 Contact；
- 语言、本地化和无障碍基线。

### 9.4 Technical Delivery Constraints

- CMS 内容模型方向；
- route、Canonical、hreflang 和索引边界；
- `site_scope` 与跨站隔离；
- 共享组件 owner；
- 不渲染未知字段的原则。

### 9.5 PF6 完成条件

共享基础可以仍是策划级规范，但必须有 owner、当前状态和对首批页面的影响。不得让首个页面任务独自发现或决定全站共享规则。

## 10. PF7 — Delivery Roadmap

### 10.1 两套优先级

| 优先级 | 用途 |
|---|---|
| Content / Commercial Priority | 判断哪些页面最有搜索和商业价值 |
| Build / Release Dependency Wave | 判断哪些共享能力和页面必须先完成，才能形成可用网站 |

两套优先级可以不同，不得互相替代。

### 10.2 Pilot Plan

每个页面类型选择一个代表页面，说明：

- 为什么具有代表性；
- 需要验证哪些研究、内容、视觉、字段和交付假设；
- 哪些内容不能复制到同类页面；
- pilot 完成后如何更新 Playbook；
- 何时允许同类页面进入规模化 Gate。

### 10.3 Build / Release Waves

建议按依赖而不是单纯页面优先级形成波次：

1. 共享身份、Chrome、Legal/Privacy、Consent、Contact 和表单基础；
2. Home、核心 Hub、Conversion 和首个类型 pilot；
3. 关键 Products、Applications、Markets、Documents；
4. 同类页面扩展；
5. Resources、Trade updates、本地化和长期内容。

具体波次由项目决定，本草案只规定必须形成依赖化路线图。

### 10.4 PF7 完成条件

每个首批页面都有上游输入、下游目标、共享依赖、owner 和计划启动时间；不存在“高优先级但无法形成完整旅程”的孤立页面。

## 11. PF8 — Page Launch Readiness

### 11.1 Page Launch Package

每个准备启动的页面生成一份简短启动包：

- Page ID、页面类型、URL 和优先级；
- 来自批准架构的页面职责；
- 关键词所有权和排除边界；
- Buyer Journey 中的位置；
- 可用证据与冻结风险；
- 共享 authority 与 owner；
- 上游、下游和 release dependencies；
- 适用 Playbook；
- 本页为什么在当前 wave 启动；
- 允许进入 Gate 0/1，不自动批准任何 Gate 输出。

Page Launch Package 是全站策划向页面 Gate 的交接，不替代页面 Brief。

### 11.2 Gate Launch Readiness Review

首批页面只有在以下条件满足时才进入 Gate：

- 定位、架构和关键词 authority 一致；
- 页面职责不与其他页面冲突；
- 关键证据未知项已经显性登记；
- 共享基础存在 owner；
- 依赖和 wave 已确定；
- 页面类型 Playbook 或 pilot 范围明确；
- 用户知道启动页面不会自动授权设计、开发或发布。

## 12. 前置策划的迭代机制

前置策划不是一次线性冻结，允许以下回路：

```text
PF2 Research
  → PF4 Architecture Hypothesis
  → PF5 Convergence Review
  → 若发现重大证据、运营或法律缺口，返回对应研究轨道
  → 再次收敛
```

一旦 PF5 Approved Architecture 发布，后续变化进入正式架构变更控制，不再静默修改。

## 13. 下一次项目的衡量指标

| 指标 | 目标 |
|---|---|
| 页面 Gate 启动后新增的项目级共享基础决定 | 趋近于 0 |
| Gate 启动后才发现的无 owner 依赖 | 0 |
| 架构批准后因遗漏 Utility/Legal/Conversion 而新增页面 | 趋近于 0 |
| Strategy、PRD、Registry、关键词主表版本一致率 | 100% |
| 首批页面具备 Page Launch Package 的比例 | 100% |
| 产品/应用/文件关系在页面启动前可见率 | 100% |
| 页面类型 pilot 完成前大规模展开同类页面 | 0 |
| 被否决战略方向仍被执行任务当作当前输入 | 0 |

## 14. 当前边界

本草案目前只提出 Gate 前策划方法：

- 不改变当前 57 页架构；
- 不修改当前 PRD、Registry 或关键词主表；
- 不评价或重开任何页面 Gate；
- 不改变 `PAGE_GATE_1_5_STANDARD_V1.0.md`；
- 不授权开发、部署、发布或索引；
- 必须经用户批准后才能成为下一项目或本项目后续架构工作的正式流程标准。

