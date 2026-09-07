# TiO2 Malaysia 网站策划流程迭代 V1.1 草案

## 0. 文档控制

| 字段 | 当前值 |
|---|---|
| Document ID | `TIO2MY-PLANNING-PROCESS-V1.1-DRAFT` |
| Version | `V1.1 DRAFT` |
| Status | `OUT_OF_CURRENT_REVIEW_SCOPE / PRESERVED_DRAFT / NOT_APPROVED` |
| Date | `2026-09-02` |
| Basis | `TIO2_MALAYSIA_PLANNING_PROCESS_RETROSPECTIVE_V0.1.md` |
| Relationship to current standard | 提议补强 Gate 0–10 的执行协议；不替代当前 `PAGE_GATE_1_5_STANDARD_V1.0.md` |
| Change boundary | 未经用户批准不得据此改变任何当前 Gate、页面状态、交付授权、开发或发布决定 |

> 2026-09-02 用户澄清：当前迭代对象是页面 Gate 之前的项目级网站策划流程，不是 Gate 0–10 的执行协议。本文件保留用于追溯，不进入当前项目控制审查，不替代任何现行标准。

## 1. 迭代目标

V1.1 的目标不是减少逐页 Gate，而是让每个 Gate 更容易开始、更容易完成、更容易验收，并让一次页面实践产生的经验可以服务下一个页面。

目标状态：

> 明确输入 → 执行任务 → 总控复审与用户决定 → Gate 关闭 → 下一 Gate 独立授权 → 交付回执 → 经验回写

## 2. 保持不变的流程骨架

| Gate | 核心职责 | V1.1 立场 |
|---|---|---|
| Gate 0 | 页面准入与身份锁定 | 保留 |
| Gate 1 | 研究、意图、关键词与证据 | 保留 |
| Gate 2 | 内容、SEO、GEO、Schema 与模块顺序 | 保留两个确认点 |
| Gate 3 | 1440/768/390 响应式线框 | 保留 |
| Gate 4 | 视觉方向与组件状态 | 保留 |
| Gate 5 | 完整视觉稿与当前基线 | 保留 |
| Gate 6 | 项目总控综合审查 | 保留 |
| Gate 7 | 开发交付合同 | 保留 |
| Gate 8 | 外部开发实现 | 保留在 D16 |
| Gate 9 | D23 只读质量验收 | 保留 |
| Gate 10 | 发布授权 | 保留并继续独立授权 |

## 3. 新增统一执行组件

### 3.1 Gate Start Packet

每个 Gate 开始前形成一个简短的 Start Packet，不新增 Gate 编号。它只回答：

- 当前 Gate；
- 已关闭的前置决定；
- 当前 authority 文件与版本；
- 本 Gate 必须完成的交付；
- 本 Gate 不得触碰的范围；
- 当前冻结字段；
- 共享基线版本；
- 上游、下游和发布依赖；
- 谁负责执行、谁负责复审、是否需要用户决定；
- 完成后允许申请什么，不自动授权什么。

Start Packet 的作用是让执行任务在开工前获得完整输入，不再从大量历史文件中自行推断当前范围。

### 3.2 Gate Evidence Kit

为 Gate 1–9 固定证据包目录和命名规则：

| Gate | 最小 Evidence Kit |
|---|---|
| Gate 1 | Brief、Page Intent、关键词边界、证据表、冻结表、依赖初表 |
| Gate 2 | 内容骨架决定、完整文案、SEO/GEO/Schema、链接与条件状态 |
| Gate 3 | 1440/768/390 线框、交互与异常状态、响应式检查 |
| Gate 4 | 视觉方向、关键组件状态、共享基线引用 |
| Gate 5 | 三视口完整视觉、Mobile Menu、状态板、视觉规格、当前 Manifest |
| Gate 6 | 九维审查、问题分级、关闭条件和综合结论 |
| Gate 7 | Handoff Package、CMS/API/组件映射、验收标准、Manifest |
| Gate 8 | Implementation Receipt、commit、测试、未实现项、预览入口 |
| Gate 9 | 只读复验、视觉证据、SEO/GEO/Schema、缺陷与 release blockers |

Evidence Kit 应由模板或脚本校验完整性，但不能由脚本替代内容判断和总控审查。

### 3.3 双钥匙批准模型

需要用户决定的 Gate 分别记录两个独立字段：

| 字段 | 可用状态 |
|---|---|
| Project Control Review | `PENDING` / `PASS` / `RETURN` |
| User Decision | `NOT_REQUIRED` / `PENDING` / `APPROVED` / `REVISION_REQUESTED` |

Gate closure 规则：

- 默认先完成 Project Control Review，再向用户提交 Decision Packet；
- 用户在总控复审前主动批准具体版本时，User Decision 可以先记为 `APPROVED`；
- 只有 Project Control Review=`PASS` 且 User Decision=`APPROVED` 或 `NOT_REQUIRED` 时，Gate 才可标记 `APPROVED / CLOSED`；
- 任一方要求修订，Gate 保持打开并只重开受影响范围；
- 批准顺序可以不同，关闭条件不能降低。

### 3.4 下一阶段授权分离

每个关闭记录必须分开保存：

1. `CURRENT_GATE_CLOSED`；
2. `NEXT_GATE_PREPARATION_AUTHORIZED`；
3. `HANDOFF_AUTHORIZED`；
4. `HANDED_OFF`；
5. `IMPLEMENTATION_RECEIPT_RECORDED`；
6. `RELEASE_AUTHORIZED`。

前一字段为真不自动推导后一字段。

### 3.5 Decision Packet

需要用户确认时，页面执行任务或总控必须在对话中直接提交：

1. 本次要决定的具体对象；
2. 实际文案、字段、模块、视觉或规则；
3. 与上一版本的变化；
4. 影响页面和功能；
5. 风险、限制和冻结项；
6. Controller 建议；
7. 用户批准后将进入的下一动作；
8. 文件和 Review ID，仅用于追溯。

Decision Packet 是用户决策界面，Manifest 是项目证据界面，二者不得互相替代。

## 4. Gate 0–5 的迭代执行规则

### 4.1 Gate 0：增加 readiness 检查

Gate 0 除页面身份外，必须确认：

- 页面所在网站架构版本；
- 页面类型 Playbook 是否可用；
- 是否为该页面类型 pilot；
- 当前共享 Chrome、Logo、产品关系、Legal/Privacy 等 authority；
- 页面依赖是否已有 owner；
- 事实缺失是阻塞整个 Gate，还是仅冻结字段；
- 本页面允许推进到哪个 Gate。

Gate 0 输出 Gate Start Packet。

### 4.2 Gate 1：把意图、证据和依赖同时确认

保留 `CONTENT_INTENT_CONFIRMED`，并新增两个必须输出：

- `FIELD_FREEZE_REGISTERED`：公开、冻结、条件公开和不渲染字段均有状态；
- `DEPENDENCY_OWNERS_IDENTIFIED`：上游、下游和 release dependency 已识别 owner；未有 owner 时明确登记，不得等到 Gate 9 才发现。

### 4.3 Gate 2：继续执行两次确认

第一次确认内容骨架，第二次确认完整文案与模块顺序。V1.1 补充：

- 骨架确认时同步展示页面依赖、CTA 目标和 route readiness；
- Buyer Clean 文案与内部风险说明分开保存；
- 完整网站将具备但当前尚未实现的共享内容，作为 delivery dependency，不以内部占位文案进入页面；
- Gate 2 关闭前完成变化影响预判：文案事实、SEO/GEO/Schema、布局和依赖分别标记。

### 4.4 Gate 3：固定响应式证据协议

- 逻辑宽度固定为 1440、768、390；
- 780 导出必须登记为 390 logical @2x；
- 三个视口使用同一版本真实文案；
- 每页声明必须展示的状态，不机械要求无关状态；
- 交互行为使用状态板或序列证明；
- Gate 3 关闭记录单独说明哪些状态留到 Gate 5 完整表现。

### 4.5 Gate 4：共享系统只消费，不重定义

Gate 4 Start Packet 固定共享 authority 版本。页面可以提出 change proposal，但不得在本页直接分叉共享组件。共享 owner 批准新版本后，再按影响矩阵判断本页是否需要定向重开。

### 4.6 Gate 5：固定完整视觉与 Manifest 生成

- Evidence Kit 必须一次包含 1440、768、390、Mobile Menu 和适用状态；
- Manifest 使用统一模板生成资产尺寸、字节数、哈希和 authority order；
- 用户批准的具体资产和版本必须被记录；
- Gate 5 关闭后形成一条 `PROCESS_LEARNING_G5`，只记录流程经验，不混入页面内容审查；
- Gate 6、Gate 7 和开发继续需要独立授权。

## 5. Gate 6–10 的迭代执行规则

### 5.1 Gate 6：总控审查输出统一化

Gate 6 必须分别给出：

- 内容、证据、SEO、GEO、Schema；
- 视觉、响应式、无障碍；
- 转化、链接和依赖；
- P0、P1、P2；
- 当前页面是否可形成 Gate 7 包；
- 哪些是未来 Gate 8/9 验证项；
- 本轮流程经验 `PROCESS_LEARNING_G6`。

### 5.2 Gate 7：增加 Handoff Receipt

Gate 7 分为两个事件：

1. Gate 7 package `APPROVED_FOR_HANDOFF`；
2. 目标开发任务返回 `HANDOFF_RECEIVED`。

Handoff Receipt 至少记录目标项目、目标任务、接收日期、接收的 Manifest 哈希、实现范围、明确排除项和 Gate 8 状态。没有 Receipt，不得把页面标记为 `HANDED_OFF`。

### 5.3 Gate 8：增加 Implementation Receipt

D16 完成实现后返回：

- implementation commit；
- consumed Gate 7 Manifest；
- implemented scope；
- omitted/conditional scope；
- tests、typecheck、lint 和工作树状态；
- preview 或 production-equivalent 验收入口；
- known defects 和 external dependencies；
- 是否 ready for Gate 9。

D23 只记录回执，不修改实现。

### 5.4 Gate 9：分开缺陷与发布依赖

Gate 9 报告固定分成：

- implementation defects：由当前实现 owner 修复；
- contract deviations：实现与 Gate 7 不一致；
- release dependencies：属于其他页面、共享系统、法律、数据或授权；
- Gate 10 authorization：始终独立。

Gate 9 关闭后形成 `PROCESS_LEARNING_G9`，回写对应 Playbook、Evidence Kit 或交付合同候选改进。

### 5.5 Gate 10：保持独立授权

Gate 10 不因页面 Gate 9 通过自动开放。完整网站 release readiness 应汇总所有页面、共享系统、Legal/Privacy、表单、域名、邮箱、索引和生产验证，但不重开已经通过的页面 Gate 9，除非页面自身合同发生变化。

## 6. 变更分类与 Gate 重开矩阵

| 变更类型 | 示例 | 默认处理 |
|---|---|---|
| C1 页面局部内容 | Hero、模块文案、单页 CTA | 从受影响的 Gate 1/2 检查点定向重开，并检查下游布局/SEO/GEO |
| C2 页面局部视觉 | 间距、卡片、局部响应式结构 | 定向重开 Gate 3/4/5；内容 Gate 不自动重开 |
| C3 共享系统 | Global Chrome、Logo、Consent、表单公共行为 | 共享 owner 先关闭变更，再发布 consumer impact notice |
| C4 事实或证据 | TDS、原产地、法规、公司事实 | 重开事实登记及所有可见/机器可读消费者 |
| C5 页面架构 | 页面增删、URL、主关键词、页面职责 | 先走项目级变更控制，再更新登记册、PRD、关键词主表和相关 Brief |
| C6 开发实现 | 组件、API、CMS、route 或测试实现 | 由 D16 处理；D23 只根据是否改变批准合同决定是否重开策划 Gate |

每个变更必须先分类，再决定重开范围。不得因为一个局部变化自动重做全部 Gate，也不得因为变化很小就跳过受影响的质量检查。

## 7. 共享 authority 传播机制

共享 owner 发布新版本时，必须同时提供：

- change ID；
- previous/new authority；
- changed fields；
- unchanged fields；
- consumer list；
- each consumer adoption state；
- required action：`NO_ACTION` / `REFERENCE_UPDATE` / `REEXPORT_REQUIRED` / `GATE_REOPEN_REQUIRED`；
- release impact；
- post-closure hash。

页面不根据文件名版本自行判断是否需要变化。

## 8. 页面类型 pilot 与经验扩展

每个页面类型优先选择一个代表页面完整跑通 Gate 1–9。Pilot 的目的不是让其他页面跳过 Gate，而是验证：

- Playbook 是否完整；
- 字段模型是否可用；
- 响应式模板是否稳定；
- 共享组件和条件状态是否足够；
- Gate 7 合同是否能被开发实现；
- Gate 9 是否能按合同验收。

Pilot 关闭后形成 family retrospective，更新 Playbook 候选版本。其他页面仍保持独立事实、内容、SEO、GEO、Schema、批准和生命周期。

## 9. 流程学习回写

每个页面只需在以下节点记录一条简短经验：

| 节点 | 回写问题 |
|---|---|
| Gate 5 | 哪个输入若更早明确，可以减少本轮视觉返工？ |
| Gate 7 | 哪个合同字段最容易被开发误解或遗漏？ |
| Gate 9 | 哪个问题本可在更早 Gate 被发现，应该更新哪个模板或 Playbook？ |

经验分为三类：

- `PAGE_LOCAL`：只影响当前页，不更新公共流程；
- `FAMILY_CANDIDATE`：候选更新页面类型 Playbook；
- `PROJECT_PROCESS_CANDIDATE`：候选更新项目流程标准。

只有经过项目总控和必要用户批准的候选才能进入正式标准。

## 10. V1.1 试运行建议

V1.1 在批准前不直接覆盖当前流程。建议选择接下来尚未跨越 Gate 2 的页面作为试运行对象，使用：

1. Gate Start Packet；
2. 双钥匙批准字段；
3. Dependency Owner 表；
4. 固定 Evidence Kit；
5. Process Learning 回写。

试运行完成后，对照首次实践指标评估是否减少输入缺失、authority 冲突、无 owner 依赖、状态补录和不必要的整体重做，再决定是否将本草案合并为正式流程版本。

## 11. 当前决定边界

本草案不执行以下事项：

- 不改变当前页面数量、URL、关键词或职责；
- 不改变任何页面当前 Gate 或生命周期；
- 不撤销或重开任何已批准页面；
- 不授权 Gate 7、Gate 8、Gate 10、开发、部署、发布或索引；
- 不覆盖 `PAGE_GATE_1_5_STANDARD_V1.0.md`；
- 不把建议状态写成已批准项目规则。
