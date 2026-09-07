# Gate 6 Agent/Skill 前置学习与 Gate 7 交接评估 V0.1

日期：2026-09-07。

来源：用户要求先学习 Gate 1–5 的 Agent/Skill，查找已完成的 Gate 6，并评估交给 Gate 7 的 handoff。

状态：`ASSESSMENT_COMPLETE / DESIGN_RECOMMENDATIONS_NOT_APPROVED`。

本记录是历史流程与交接合同评估，不是对任何页面重新执行 Gate 6 或 Gate 9，不改变页面批准、事实、架构或后续授权。没有创建 Gate 6 角色/Skill 源、运行注册、派发代理或访问 D16。下列设计建议尚未成为执行标准。

## 1. 结论

已有材料足以设计 Gate 6，重点不是增加一次视觉制作，而是建立独立的页面综合审查和明确的 Gate 7 接收边界。

- Gate 5 送审：确认完整视觉候选是否兑现批准内容、结构和方向。
- Gate 6：从页面原始任务、最新决定与批准成果，判断内容、事实、视觉、响应式、SEO/GEO、动作、接收合同及共享职责是否一致。
- Gate 7：把经审查的页面要求转成明确的内容/组件/字段映射、条件行为、实施责任和验收合同。

历史 Gate 6 已有完整审查、定向退回、独立复验、阶段分离和后续依赖登记。主要缺口是这些经验尚未形成统一、精简的角色和接收合同；部分旧页把大量字段与开发合同提前写在 Gate 6，不能把这种文件结构照搬为新任务的固定模板。

## 2. Gate 1–5 已学内容及应继承原则

已完整读取根入口、Context、分工标准、治理细则 §8–17、Gate 1–5 标准；读取六份当前角色源、项目方法源目录及相应方法全文。Gate 2 的历史内容 Skill 只作为历史材料读取，不恢复使用。

| 阶段 | 当前设计与实践 | Gate 6 应继承的内容 |
|---|---|---|
| Gate 1 | [执行角色](../../../agents/gate1-execution/agent.md)；[搜索意图证据分析](../../../skills/search-intent-evidence-analysis/SKILL.md) | 先消费已有研究；区分观察、推论、用户事实批准和时效证据；实际读取方法报告后判断，不只转述摘要 |
| Gate 2 | [执行角色](../../../agents/gate2-execution/agent.md)、[Buyer Review](../../../agents/gate2-review/agent.md)、[交付结构 V0.4](2026-09-07-gate2-delivery-structure-v0.4.md) | B 是唯一可见正文编辑源，C 是稳定行为/事实/机器语义合同；从头到尾发现问题，再精简报告；不以问题数量代替覆盖 |
| Gate 3 | [执行角色](../../../agents/gate3-execution/agent.md)、[线框方法](../../../skills/responsive-wireframe-design/SKILL.md)、[布局交互核验](../../../skills/layout-interaction-verification/SKILL.md) | 批准输入与冻结源绑定；三端与适用状态；实际图像、几何和操作证据互补；自检不能变成独立审查 |
| Gate 4 | [执行角色](../../../agents/gate4-execution/agent.md)、[品牌样例方法](../../../skills/brand-applied-visual-design/SKILL.md)及[两页复盘](2026-09-07-gate4-two-page-process-retrospective-v0.1.md) | 代表样例只证明其范围；实际背景×状态决定对比与含义；采集错误和设计缺陷分开 |
| Gate 5 | [执行角色](../../../agents/gate5-execution/agent.md)、[完整视觉方法](../../../skills/full-page-visual-composition/SKILL.md)、[用户设计批准](2026-09-07-gate5-design-user-approval-v0.1.md)及[两页复盘](2026-09-07-gate5-two-page-process-retrospective-v0.1.md) | 全页、可读分段和运行记录；全部实例与状态；独立判断；批准组合和下一 Gate 授权分开 |

补充判断：

1. Gate 1–5 的方法化不是“一 Gate 必须一 Skill”。Gate 2 已明确不设专属 Skill；Gate 3–5 共用布局交互核验。
2. 源文件中的候选状态可能是冻结提交截面。Gate 5 当前设计批准由独立批准记录控制，不能因源头仍写候选就判定设计未获批准。
3. 两页真实流程证明市场说明页、工艺目录页的执行链可用，不代表复杂表单、技术表、多媒体等类型已全部验证。
4. Gate 6 可复用有效证据，但必须自行判断证据是否覆盖本次组合、问题和结论。

## 3. 已找到的 Gate 6 完成案例

在正式 `pages/` 目录检索到 21 份文件名明确包含 Gate 6 与 Closure 的记录：8 份独立/组合关闭记录，加 13 份 Grade 快速流程关闭记录。机械读取确认均包含通过/关闭文本；这不是 21 个独立页面的全量复审，也不是全部 Gate 6 完成量。

### 3.1 已精读的代表性关闭链

| 案例 | 原记录结果 | 对设计的价值 |
|---|---|---|
| [DOC-REACH](../../../pages/documents/reach/05_review/DOC-REACH_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md) | 2026-09-05，G6-PCR-01 关闭；随后用户保留通用答案并授权 Gate 7 | 最清楚的审查→具体事实决定→交接准备授权分离案例；八项后续控制 |
| [DOC-TDS](../../../pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md) | 2026-09-05，G6-PCR-01 关闭，关闭时 Gate 7 未授权 | 文案、文件多选、单 Grade、接收页提交条件之间的一致性审查 |
| [CONV-SAMPLE](../../../pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md) | 2026-09-03，G6-PCR-01 关闭，满足用户先前条件后启动 Gate 7 准备 | 高状态密度表单；成功、失败、重试、隐私与后续运行验证的分离 |
| [CONV-RFQ](../../../pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_PROJECT_CONTROL_CLOSURE_V1.0.md) | 2026-09-01，PCR-01 退回，PCR-02 关闭 | 依赖分类错误可以阻断 Gate 6，同时不重开 Gate 5 |
| [DOC-000](../../../pages/documents/05_review/DOC-000_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md) | 2026-09-02，PCR-02 关闭 | 权威归一、无 Terms 架构、社交元数据同源，不能让接手者重拼历史覆写 |
| [MARKET-EU-001](../../../pages/markets/05_review/MARKET-EU-001_GATE6_USER_APPROVAL_CLOSURE_V0.1.md) | 2026-09-04，用户明确批准 Gate 6、授权 Gate 7 | 总控审查、用户批准和后续授权可分别追溯 |
| [Legal/Privacy](../../../pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md) | 2026-09-02，两个 Important 问题经批准定向修正后关闭 | 共享 Footer 精确文字和菜单增项仍需核对；批准变化保留旧资产 |
| [Product Detail 模板](../../../pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE6-PROJECT-CONTROL-CLOSURE_V0.1.md) | 2026-09-01，模板 Gate 6 关闭 | 模板接受不等于其余 Grade 的事实、正文或开发自动获批 |

另外读取了 [CONV-DOC 阶段矩阵](../../../pages/conversion/05_review/CONV-DOC_GATE6_DEPENDENCY_PHASE_MATRIX_V0.1.md)，其中记录 Gate 6 通过及先前条件授权生效，说明仅按文件名统计会漏项。

### 3.2 Grade 快速流程的范围

13 份 `FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE` 分别对应 M-510、M-896、M-895、M-340、CR-901、M-996、M-2196、M-200、M-108、M-210、M-886、M-52、M-2377。

重点精读 [M-896 退回](../../../pages/products/detail-template/05_review/GRADE-M896_GATE6_GATE7_PROJECT_CONTROL_RETURN_V0.1.md)和[关闭](../../../pages/products/detail-template/05_review/GRADE-M896_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md)。其四类问题是 Hero 字段缺失、Application category 缺失、技术值与方法字段的运行兼容、治理字段混入公开合同。关闭时保留正确 `value/testMethod` 语义，把兼容改造及旧型号回归明确交 Gate 8。

这是有专门连续授权和模板复用条件的案例。不能据此把新通用流程默认改成 Gate 6/7 合并、所有 Grade 套模板或通过后自动开发。

## 4. Gate 6→7 handoff 评估

总体判断：**历史链条可用，接收接口需要收束；可以作为设计依据，不能整包照搬。**

### 4.1 做得好的部分

- DOC-REACH 的 [Gate 7 包](../../../pages/documents/reach/06_handoff/DOC-REACH_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md)包含明确源 payload、组件映射、行为、SEO/GEO/Schema、响应式、共享 scope 及验收合同；[关闭记录](../../../pages/documents/reach/06_handoff/DOC-REACH_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md)区分包就绪与实际送出。
- CONV-SAMPLE 的 [验收/阻塞清单](../../../pages/conversion/request-sample/06_handoff/CONV-SAMPLE_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md)明确本页、receiver、Legal、Global Chrome 和上游 owner，包含正向接收与失败/重复/未知信息场景。
- DOC-TDS 的 [Gate 7 Manifest](../../../pages/documents/tds-sds-coa/06_handoff/DOC-TDS_CURRENT_GATE7_BASELINE_MANIFEST_V0.1.md)能定位精确组合。本轮重新计算其 authority 表 12 个文件的 SHA-256：12 个存在、12 个一致、0 个缺失、0 个不匹配。该核对只证明这张表的文件身份，不证明语义时效或递归全部视觉资产。
- REACH、TDS、Sample 的当前 Gate 9 Manifest 均保留已批准 Gate 7 合同及后续验收轨迹，说明这些包实际进入了后续流程；这不是本轮重新确认运行时合格。

### 4.2 应进入新设计的关键缺口

| 编号 | 观察及证据 | 建议处理 |
|---|---|---|
| A01 | 旧 Gate 6 有审查同时编制整套字段、SEO、交付合同的做法；RFQ/Sample 后续 Gate 7 又展开映射 | Gate 6 以审查既有要求及记录缺口为主；已有等价合同引用继承。新开发映射由 Gate 7 编制，实质新语义交对应 owner 决定，不能借交接新增 |
| A02 | RFQ [Gate 6 退回](../../../pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_PROJECT_CONTROL_RETURN_V1.0.md)：错误允许隐藏两个必需兄弟入口；[Gate 7 退回](../../../pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_PROJECT_CONTROL_RETURN_V1.0.md)：把这些路由和法律/CMP 实施责任错误派给 RFQ | 每项依赖同时写“最终行为、批准来源、实施 owner、本页消费责任、失败时阻塞阶段”。完成网站依赖不等于本页获得跨页实施权 |
| A03 | RFQ 必需入口不可隐藏；REACH/TDS 的获批局部动作存在明确条件省略合同 | 不制定统一的“未就绪就隐藏”或“任何条件都不能隐藏”。逐对象核对获批行为；真实冲突提交决定，不按模板裁决 |
| A04 | DOC-TDS 历史 G6 审计及 G7 Manifest 仍写原产地 Hold 开放；[全站原产地授权](../../architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md)及[当前决定册](../../architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md)已关闭该旧 Hold | 接收时区分文件冻结身份与规则有效性；用明确的最新决定覆盖记录解释旧状态，不回写历史批准文件、不重问已答事实，也不强行增加原页面没有的原产地文案 |
| A05 | 部分文档把独立审查关闭写作 `PROJECT_CONTROL_REVIEW_PASS / CLOSED`，市场 EU 另有用户 Gate 6 批准；Sample/CONV-DOC 则有先前条件授权 | 审查结论、用户决定、Gate 关闭、Gate 7 准备授权和实际外发分栏。`CLOSED` 必须说明关闭的对象，不从文件名称或 PASS 推导后续权限 |
| A06 | 原有材料使用阻塞/重要/建议、P0/P1/P2及 required P2 等不同口径 | 保留原严重度并写明确处置：本阶段必修、后续实施/发布控制、用户待决或可选建议。不可仅靠 P 编号决定放行，不在本次擅改全站枚举 |
| A07 | G6 carry-forward 表有稳定 ID，G7 多数按主题重组；接手者仍需人工证明每个条目没有遗失 | 增加 G6条目→G7合同章节→owner→G8证据→G9接受条件的映射，允许多对一，但每条必须有处置 |
| A08 | 历史大量 PASS 数字、静态图、源码检查与生产依赖容易在摘要里混为一谈 | 结论说明证据层级和实际范围；不得将图片、存在的监听器、本地模拟或历史测试当作生产 receiver、SSR、Schema、CMP 或设备验证 |

A01–A08 是新流程设计风险，不是本轮对历史页面签发的正式 Gate Finding。

### 4.3 不同历史经验应怎样使用

- [Legal/Privacy G6 审查](../../../pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE6_PROJECT_CONTROL_REVIEW_V0.1.md)证明已批准视觉仍可能存在共享消费错误，Gate 6 应发现并定向交回，而非因“上游已批准”放过。
- [Home Gate 7 定向增补](../../../pages/home/06_handoff/HOME-001_GATE7_P0_INPUT_AMENDMENT_V0.1.md)记录 Tablet 完整性与 Canonical 比较方式的问题；应检查证据覆盖和接受标准是否对应真实语义。本轮不以该草稿单独推定最终批准状态。
- DOC-TDS 历史 route-unavailable 状态处理有其具体批准解释，不能推广为新页允许缺失必需 Gate 5 状态。
- M-896 说明现有实现不支持某个正确数据语义时，可以登记获批扩展要求交开发，不能为了迁就旧字段而篡改技术意义。

## 5. 建议的 Gate 6→7 最小接收合同

建议采用一份页面级导航说明，例如 `{PAGE_ID}_GATE6_TO_GATE7_HANDOFF_Vx.y.md`，放既有 `05_review/`。它由当前页面 Manifest 引用，反向导航 Manifest，不建立第二份权威源。已有等价文件按章节映射，不要求重命名或批量补文件。

| 接收项 | Gate 6 交出什么 | Gate 7 接到后做什么 |
|---|---|---|
| 对象与权威 | Page ID、Brief、当前 Manifest、冻结组合、用户决定覆盖记录、审查与授权对象 | 确认使用同一组合，不凭版本号选源 |
| 原始页面要求 | A/B/C 或等价源、G1事实/职责、G3结构、G4规则、G5完整源/图/状态 | 转成可实施映射，正文仍来自唯一批准源 |
| 综合审查结果 | 本轮真实覆盖、全部实质 Finding、返修复验、明确未测范围 | 不能把未关闭的本阶段必修项静默带过 |
| 动作和机器语义 | 可见操作→目标→上下文→接收约定；Title/Meta/Canonical/Schema/社交的来源及条件 | 明确字段、条件和状态，逐项保持可见/机器语义一致 |
| 共享与隔离 | owner、当前来源、本页消费范围、`site_scope=tio2-my`及禁止跨 scope fallback | 编制本页与外部 owner 的责任和验收映射 |
| 后续控制 | 稳定 ID、具体问题/影响、当前证据、责任方、处理阶段、接受条件、时效触发 | 每项映射到 G7条款及 G8/G9证据要求，不复制无效历史 Hold |
| 接收状态 | 输入是否可定位、是否有必修缺口、G6是否关闭、G7是否授权 | 给接收回执；“文件可读”和“可以开始”分开 |

建议的就绪条件是：

1. 核心输入存在且身份一致，原始要求、批准组合和当前决定均可追到。
2. 本阶段阻塞及应在交接前修复的问题关闭；可选建议不拖延流程。
3. 未来依赖有明确 owner、行为、阶段和可判断的接受条件；没有凭“后续验证”掩盖当前应有成果。
4. 无未声明的内容、结构、字段、共享职责或机器语义变化。
5. Gate 7 准备授权有具体来源；已有条件授权满足时直接继承，不重复请求。

交接就绪可使用与上游一致的建议表达 `READY_FOR_GATE7_WHEN_AUTHORIZED`，但此处未批准新状态体系。它不等于 `APPROVED_FOR_HANDOFF`、实际发送、Gate 8 授权或发布。

可复用条目示例：

> RFQ 的 Request a Sample 入口必须保留，目标为 `/request-sample/`。CONV-SAMPLE owner 实施目标页，RFQ owner 消费并验证入口。目标未就绪不得隐藏、禁用或改成 Contact；须在 Gate 9/完整站发布前验证。Gate 7 把此项映射到对应 owner、验收条款与回执。

该示例只解释 RFQ 的实际批准合同，不推广为全部页面的行为规则。

## 6. Agent 与 Skill 划分建议

建议先细化一个 **Gate 6 综合审查 Agent**，负责输入权威判断、审查范围、页面质量判断、问题归属、复验整合和 Gate 7 接收建议。它应独立于所审内容/视觉的制作者；不能切换名称给自己的成果签独立 PASS。若同一任务编制了新的实质合同，该合同仍需不同审查者检查。

建议新增一个方法候选：**页面合同一致性核验**。其可复用任务是：把原始要求、批准成果、可见表达、机器语义、动作/接收合同和依赖责任进行双向对照，给出差异、证据、影响及未测范围。方法不维护页面当前批准或自行决定 Gate 放行。

复用现有 **布局与交互核验**，避免另建相同的三端/裁切/键盘检查。声明与证据核验目前只有计划范围，尚无正式 Skill；新设计不能声称已调用。是否以后独立建设该方法，应按真实验证缺口决定。

暂不建议：为每个审查维度创建一个 Agent；建立包含所有前五 Gate 方法的巨型 Skill；把 Gate 6 做成第二次内容/视觉制作；默认把 Gate 6/7 合并；强制每页相同截图或 PASS 数量。

建议首轮验证依次采用：

1. 对已完成 REACH/TDS 包进行只读接收演练，测试权威定位、旧 Hold 覆盖和控制项追踪；这不是重开原 Gate。
2. 用 RFQ 退回材料做限定反例，检查能否发现必需入口误隐藏及跨页 owner 越界。
3. 用 M-896 材料检验技术值/方法/Schema语义和实现兼容边界。
4. 方法设计及运行范围明确后，再选 Poland 或 Chloride Process 做首次新的真实 Gate 6；两页目前只有 Gate 5→6 接收就绪记录，本轮未启动。

## 7. 本轮验证边界与交付

- 检索限正式项目资料，没有用临时 D16 副本或开发仓库推定当前实现。
- 21 份命名关闭记录完成存在性及关闭文本盘点；代表案例精读，其他 Grade 仅作记录级盘点。
- DOC-TDS Gate 7 authority 表 12 项完成现场文件存在性和 hash 核对。
- 其余历史 PASS 数字、浏览器和 Gate 9 结果均为原记录所述，本轮未重跑、未重新打开全部视觉或验证外部法规的当前真实性。
- REACH 法规内容只作为历史合同结构研究，不在本轮提供新的法律结论。
- 本轮保存本评估，不改页面 Manifest、Status、Index 或任何已批准角色/方法源；下一步设计应依据上述边界形成具体候选，再记录其批准和验证。

当前后续轨迹参考：[REACH Gate 9 V0.17](../../../pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE9_BASELINE_MANIFEST_V0.17.md)、[TDS Gate 9 V0.3](../../../pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md)、[Sample Gate 9 V0.3](../../../pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.3.md)。新入口参考：[Poland Gate 5→6](../../../pages/markets/poland/05_review/MARKET-EU-PL_GATE5_TO_GATE6_HANDOFF_V0.1.md)、[Chloride Gate 5→6](../../../pages/products/chloride-process/05_review/PRODUCT-PROC-CL_GATE5_TO_GATE6_HANDOFF_V0.1.md)。
