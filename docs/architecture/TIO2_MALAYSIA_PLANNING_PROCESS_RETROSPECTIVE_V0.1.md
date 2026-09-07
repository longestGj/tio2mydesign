# TiO2 Malaysia 网站策划流程首次实践复盘 V0.1

## 0. 文档控制

| 字段 | 当前值 |
|---|---|
| Document ID | `TIO2MY-PLANNING-PROCESS-RETRO-01` |
| Version | `V0.1` |
| Status | `OUT_OF_CURRENT_REVIEW_SCOPE / PRESERVED_DRAFT / NOT_APPROVED` |
| Date | `2026-09-02` |
| Purpose | 总结首次以逐页 Gate 方式完成网站策划、交付与只读验收的真实经验 |
| Change authority | 本文件只总结经验，不修改任何已批准页面、Gate、Manifest、PRD、URL、关键词、事实或发布状态 |
| Current process authority | 根 `AGENTS.md` 与 `PAGE_GATE_1_5_STANDARD_V1.0.md` 继续有效 |

> 2026-09-02 用户澄清：当前需要复盘的是页面 Gate 之前的项目级网站策划流程，不是 Gate 执行机制。本文件保留为已完成但偏离当前范围的草案，不作为当前复盘入口，也不产生流程 authority。

## 1. 复盘对象

本次复盘评估的不是页面内容优劣，也不是是否应减少逐页 Gate，而是首次使用这套流程后，判断它是否帮助团队可靠地完成了以下工作：

1. 把用户的自然语言、截图和方向转化为可执行页面合同；
2. 在内容、证据、SEO、GEO、视觉和转化之间形成固定顺序；
3. 让用户、页面执行任务和项目总控在明确节点作出决定；
4. 在事实不完整时冻结局部字段而不是冻结整个任务；
5. 把批准结果交给外部开发项目，并在实现后进行只读验收；
6. 保留变更、批准、回退和发布边界的完整证据。

复盘证据来自 HOME-001、PRODUCT-000、GRADE-M350、GRADE-M510、ABOUT-001、MARKET-000、RES-000、DOC-000、CONV-RFQ、CONV-DOC、CONV-SAMPLE、Global Chrome 及 Product relationship 的 Gate、Manifest、Closure、定向修订和 Gate 9 记录。

## 2. 总体结论

首次实践证明，逐页 Gate 是有效的任务完成机制，应继续保留。它使策划工作从“生成一份页面方案”变成了“按顺序形成、确认、锁定并移交一组可验收决定”。

流程的主要收益不是文档数量，而是以下能力已经真实出现：

- 未获批准的内容不能被自动描述为最终方案；
- 用户可以在内容骨架、完整文案、线框和视觉等不同层次作出决定；
- 事实缺失可以转化为字段冻结和条件渲染，不再迫使整个页面停工；
- 已批准页面发生变化时，可以只重开受影响范围；
- 页面策划与 WordPress/Next.js 开发权限保持分离；
- Gate 9 可以在实现通过时继续保留完整网站发布依赖；
- 历史决定、当前权威和未来授权可以被区分。

首次实践同时表明：流程主体已经成立，但部分执行协议是在项目进行中逐步补出的。下一版应把这些后来形成的有效做法前置为标准输入，降低返工和状态补录，而不是削弱审核。

## 3. 已验证有效的机制

### 3.1 早期内容确认点有效

Gate 1 的 `CONTENT_INTENT_CONFIRMED` 和 Gate 2 的内容骨架、完整文案两个检查点，使用户可以先判断页面要说什么，再判断如何布局和表现。CONV-RFQ 的 Hero 恢复决定证明，内容骨架层可以定向重开，而不必推翻整个 Gate 2。

**保留结论：** Page Intent Card、内容骨架和完整文案确认必须继续作为独立检查点。

### 3.2 字段冻结允许任务继续

产品、原产地、法规、文件和联系资料中存在未验证字段时，流程能够把受影响字段标记为冻结、隐藏或条件渲染，同时继续处理页面身份、叙事、CTA、响应式结构和已验证关系。GRADE-M510 Gate 1 进一步证明，TDS currentness 未关闭并不阻止不依赖技术数值的 Gate 2 工作。

**保留结论：** “冻结字段，不冻结页面”是本流程最重要的生产原则之一。

### 3.3 定向重开优于整体回退

HOME-001 Gate 7 P0 输入修订、CONV-RFQ Hero rebase、DOC-000 Selector-CTA 修订、CONV-DOC Gate 3–5 视觉重做和 Global Chrome current-state 修订均使用了定向范围。旧批准基线保留，只有受影响的合同、证据和 Manifest 被升级。

**保留结论：** 已批准成果变化时，必须先做影响分析，再只重开受影响 Gate 或检查点。

### 3.4 共享 owner 模式有效

Global Chrome 从页面各自表现逐步收敛为 Home / Global Chrome owner 的唯一 authority；其他页面只声明 current navigation key、引用共享 Manifest 并提供组装证明。这避免了 Header、Mobile Menu、Footer 和 Logo 在页面之间长期分叉。

**保留结论：** 全站共享系统必须有唯一 owner，页面是 consumer，不是共同编辑者。

### 3.5 三视口与状态证据提高了可交付性

1440、768、390 logical、Mobile Menu open 和页面适用状态板，使 Tablet 不再被 Desktop/Mobile 推断替代，也让按钮、错误、成功、空值和受限状态进入开发合同。

**保留结论：** 视觉证据必须同时证明页面、响应式和状态行为，不能只提供静态 Desktop 长图。

### 3.6 单一当前 Manifest 提供了 authority

当页面发生多轮修订时，Manifest 的 authority / consumption order、资产尺寸、哈希、批准范围和 superseded 关系有效解决了“文件名版本最大是否等于当前批准版本”的问题。

**保留结论：** 当前 Manifest 继续作为每页 Gate 证据的唯一权威入口。

### 3.7 Gate 7–9 的权限分离正确

D23 只形成开发合同，D16 实现，D23 再做只读 QA。PRODUCT-000、GRADE-M350 和 ABOUT-001 的 Gate 9 证明，本项目可以确认实现符合批准方案，同时不取得代码修复和发布权限。

**保留结论：** 策划、实现、验收和发布必须继续分离。

### 3.8 Gate 9 允许“验收通过但仍不可发布”

`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` 将实现质量与完整网站发布依赖分开。页面不需要因为其他路由未完成而反复重开自己的内容、视觉或实现验收，但 release blockers 仍然阻止 Gate 10。

**保留结论：** 页面 QA 结果和网站发布准备度必须是两个不同判断。

## 4. 首次实践暴露的迭代点

### 4.1 有效流程规则形成得较晚

Page Intent Card、Buyer Clean、完整网站原则、三视口证据、共享 Chrome owner、单一 Manifest 和用户决策摘要等规则，部分是在页面已经开始后才正式统一。早期页面因此需要补证据、重导出或重新登记，而不是因为 Gate 错误，而是因为 Gate 的标准输入当时尚未完整。

**经验：** 下一轮启动前应先发布完整的 Gate execution kit，不让页面执行任务自行发明交付格式。

### 4.2 项目总控与用户批准的先后顺序在真实执行中不总是固定

当前标准采用“总控 PASS 后提交用户批准”的状态链；CONV-DOC 等实际场景出现了用户先认可版本、总控复审随后进行。两项批准都必要，但固定顺序与真实协作方式发生了偏差，造成 `USER_APPROVED / PROJECT_CONTROL_REVIEW_PENDING / NOT_CLOSED` 等临时状态需要页面自行解释。

**经验：** 下一版应采用“双钥匙关闭”：分别记录 Project Control Review 与 User Decision，二者都满足后 Gate 才关闭；默认顺序仍可保持总控先审，但用户提前决定时无需制造异常状态。

### 4.3 下一 Gate 授权与当前 Gate 关闭容易被写在同一记录中

“Gate 已关闭”“允许准备下一 Gate”“允许移交”“已经移交”“允许外部开发”是不同事件。首次实践中多次需要额外说明这些边界。

**经验：** Gate closure、next-gate preparation authorization、handoff authorization 和 handoff receipt 应成为四个独立字段。

### 4.4 共享基线变化会产生跨页重对齐工作

Logo、Global Chrome current state、Footer 标题、PRODUCT V0.3 关系和 Legal/Privacy 规则变化后，需要多个页面消费新 authority。现有 cross-page registry 和定向通知是在实践中逐步形成的。

**经验：** 共享 authority 的每次新版本必须同时产生 impact notice、consumer list、adoption state 和是否需要重开 Gate 的判断。

### 4.5 完整网站依赖需要更早进入页面策划

Gate 9 发现的很多 release blockers 不是页面实现缺陷，而是 Applications、Documents、Contact、Conversion、Legal/Privacy、CMP 或目标路由未就绪。这些依赖在单页内容和视觉阶段通常已有迹象，但缺少统一的 dependency readiness 表。

**经验：** Gate 2 即应登记页面的上游、下游和发布依赖；Gate 5 验证设计状态；Gate 7 写入交付合同；Gate 9 只验证，不首次发现所有权。

### 4.6 外部开发完成事实需要标准回执

PRODUCT scope 曾需要 Gate 8 状态 reconciliation，说明批准交付、实际移交、外部实现完成和 D23 状态更新之间缺少固定回执步骤。

**经验：** D16 完成 Gate 8 时应返回标准 Implementation Receipt，至少包括 commit、scope、测试证据、工作树、未实现项和可供 Gate 9 检查的入口。

### 4.7 Manifest 的必要性已验证，但生成方式仍可标准化

多轮修订中出现大量中间 Manifest。问题不在保留历史，而在页面执行任务需要反复手工组织相同控制字段，容易出现 current/superseded 说明不一致。

**经验：** 应提供统一 Manifest 模板和校验器，由固定字段生成资产清单、哈希、authority order 与版本关系。

### 4.8 用户决策呈现方式需要继续标准化

实践证明，只给用户文件名、Review ID 或抽象状态不能有效支持决定。后续根章程已经要求在对话中直接展示实际文案、变化、影响、风险和建议。

**经验：** 每个需要用户决定的 Gate 必须产生一份 Decision Packet；文件用于追溯，聊天摘要用于决策。

### 4.9 页面类型的首个代表页面具有流程试点价值

M-350 先验证产品详情页，再规划其余 Grade 的共享组件与独立证据合同，说明“一个代表页面完整跑通后再扩展”可以减少同类页面重复试错。

**经验：** 页面类型仍逐页走 Gate，但应先选 pilot page，验证 Playbook、模板、证据和交付合同，再展开同类页面。

### 4.10 缺少正式的流程学习回写节点

当前经验散落在 Closure、Return、Change Impact、Manifest 和状态文件中，尚未形成“页面或页面类型完成后，将经验回写流程标准”的固定动作。

**经验：** Gate 5、Gate 7 和 Gate 9 关闭后应各记录一条简短 Process Learning；页面类型 pilot 完成后再做一次 family retrospective。

## 5. 下一版流程应解决的问题

下一版不减少 Gate，也不降低任何事实、视觉、SEO、GEO、响应式、无障碍、开发和发布要求。它应重点解决：

1. 每个 Gate 开始前，输入是否完整、authority 是否明确；
2. 页面执行任务是否使用同一套交付模板和证据包；
3. 用户批准和总控复审是否可以独立记录并可靠闭合；
4. 页面局部变化、共享变化和架构变化如何判断重开范围；
5. 跨页面和完整网站依赖是否在 Gate 2 前被识别；
6. Gate 7 与 Gate 8 之间是否有可验证的移交及回执；
7. Gate 9 的经验是否回流到标准、Playbook 和下一个同类页面；
8. 如何衡量第二轮执行是否比第一轮更稳定。

## 6. 第二轮建议观察指标

这些指标用于评价流程，不用于评价页面内容：

| 指标 | 目的 |
|---|---|
| Gate 首次提交通过率 | 判断输入和模板是否完整 |
| 每页定向重开次数 | 判断变更是否在正确阶段被发现 |
| 共享基线变更后的 consumer 收敛时间 | 判断跨页传播是否有效 |
| Gate 2 后新增重大页面意图变更数 | 判断 Page Intent 是否充分 |
| Gate 5 证据完整率 | 判断三视口、状态板和 Manifest 是否一次齐备 |
| Gate 7 到 Implementation Receipt 的等待时间 | 判断跨项目交付是否闭环 |
| Gate 9 首次发现的无 owner 依赖数 | 判断依赖是否足够前置 |
| current authority 冲突数 | 目标必须为 0 |
| 用户决定需要补充解释的次数 | 判断 Decision Packet 是否清楚 |
| 同类第二页面相对 pilot 的返工量 | 判断 Playbook 与模板是否真正复用 |

## 7. 复盘结论

本次实践的正确方向是继续通过流程完成任务，并让每一次完成都改善下一次执行。逐页 Gate 不应被视为额外管理负担，而应被视为网站策划的生产系统。

下一步不是重新讨论要不要 Gate，而是把首次实践中已经验证有效的机制固化，把后来补出的规则前置，把状态补录转化为标准回执，把零散经验转化为下一版可执行流程。
