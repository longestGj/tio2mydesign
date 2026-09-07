# TiO2 Malaysia Gate 前网站策划首次实践复盘 V0.1

## 0. 文档控制

| 字段 | 当前值 |
|---|---|
| Document ID | `TIO2MY-PRE-GATE-PLANNING-RETRO-01` |
| Version | `V0.1` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Date | `2026-09-02` |
| Review scope | 从建站目标提出，到页面可以进入 Gate 0/1 之前的项目级策划过程 |
| Excluded scope | 不复盘页面 Gate 执行质量，不评价具体页面内容，不改变任何当前页面或 Gate 状态 |
| Evidence basis | 定位记录、视觉标准、关键词 Brief/原始证据/QA、PRD V0.1–V0.4、页面关键词主表、页面登记册、产品关系、Legal/Privacy 与共享系统后补决定 |

## 1. 本次复盘要回答的问题

Gate 前策划的任务，是把一个模糊的“做一个新网站”目标，转化为一组足以让页面工作稳定启动的全站基础。复盘不讨论 Gate 是否合理，只回答：

1. 我们最初如何得到网站定位、目标市场和网站架构；
2. 哪些前置研究和决定真正帮助了后续工作；
3. 哪些全站基础在页面开始后才被发现或补齐；
4. 为什么页面阶段需要反复吸收这些上游变化；
5. 下一次应如何在页面 Gate 启动前形成更完整、更稳定的策划输入。

## 2. 本项目实际走过的前置策划路径

### 2.1 从战略讨论形成定位

项目从“查看 mytio2.com，并规划下一个网站”开始。最初出现过全球 TiO2 解决方案平台等建议，用户随后明确第二站仍应围绕 Malaysia-origin titanium dioxide，并聚焦受到中国原产 TiO2 贸易措施影响、正在寻找替代来源的市场。

经过多轮选择，逐步确认：

- 前台采用独立的 TiO2 Malaysia 品牌；
- 运营主体为 IKHLAS TITANIUM (MALAYSIA) SDN. BHD.；
- IKHLAS 采用中等展示强度，网站品牌在前，运营主体提供信任背书；
- 优先市场为 EU、UK、India、Brazil；
- 战略表达是 Malaysia-origin、alternative supply、documentation 和 sourcing diversification，不是规避贸易措施。

### 2.2 在关键词研究前先建立架构假设和视觉方向

项目先形成 Market-first Hybrid Architecture 和 Visual Standard V1.0。视觉标准正确地区分了“批准视觉方向”和“尚未批准首页结构与文案”，并明确关键词研究完成前不继续确定页面内容。

### 2.3 用严格 Agent Brief 执行关键词研究

关键词 Brief 限定 Agent 只能发现需求、聚类并映射既定架构；新页面只能作为候选，不能自动改变网站架构。研究最终形成：

- 176 条关键词；
- 29 个 cluster / architecture mapping；
- 360 条 SERP 证据；
- 市场、产品、应用、商业、合规、贸易、竞品与替代意图；
- 缺失指标、官方来源和技术等效边界；
- append-only 原始证据、哈希、QA 和人工复审队列。

### 2.4 用 PRD 和页面主表收敛网站架构

PRD 在同一天从 V0.1 迭代到 V0.4：

- V0.1 固化定位、目标市场、双站边界、14 个产品和 Market 模块；
- V0.2 增加 Products 第二层架构与型号职责；
- V0.3 删除独立 Malaysia Origin 一级栏目，重新分配原产地内容；
- V0.4 形成 54 条页面—关键词实施主表；
- PAGE_REGISTRY V0.1 将 54 个页面转为正式准入清单。

### 2.5 页面启动后继续补充全站前置基础

页面工作开始后，项目又逐步确认或重构：

- 14 Grade × 6 Application 的产品关系和工艺证据矩阵；
- manufacturer、Malaysia origin、工厂、COO 和追溯的可公开边界；
- production Logo 和 Global Chrome 唯一 owner；
- RFQ、Sample、Request Documents 的真实流程；
- Privacy、Cookie、Consent、Web3Forms、数据保留和地址边界；
- Legal/Privacy 页面从原 54 页增至阶段性 58 页，再按最终决定收敛为 57 页；
- 页面间 route、表单、文件、Consent 与 release dependency。

这些工作本质上属于全站策划基础，但在首次实践中有一部分进入了页面 Gate 之后才完成。

## 3. Gate 前策划中已经做对的部分

### 3.1 用户战略决定被逐步收敛，而不是由 Agent 替用户决定

用户否决最初战略方向后，项目能够重新定位，并通过前台品牌、运营主体展示强度和目标市场等具体选择逐步形成战略。这避免了 Agent 把自己的建议当作项目事实。

### 3.2 定位、架构和关键词研究存在明确顺序

项目没有直接从关键词列表开始，而是先确认网站战略，再建立架构假设，最后让 Agent 研究真实搜索需求。这比“搜到什么就建什么页面”稳定得多。

### 3.3 关键词研究任务书和停止条件非常有效

Brief 明确数据字段、研究主题、SERP 证据、官方来源、禁止事项、候选页规则和 STOP 条件；Agent 不能自行写页面、改架构或声明产品等效。原始证据、处理结果和 QA 分层也具有复用价值。

### 3.4 搜索证据与实施架构被区分

关键词研究保留原始 cluster 和候选，PRD 与 `11_page_keyword_master.csv` 负责实施映射。这允许研究证据保持原貌，同时由人工决定页面职责、URL 和关键词所有权。

### 3.5 视觉方向没有越权决定页面内容

Visual Standard V1.0 明确 Logo、色彩、字体、图片与工业 B2B 气质，但把首页结构、文案、Markets/Products 顺序留给后续关键词和架构决定。这一边界正确。

### 3.6 PRD 使用不可回写版本形成决策轨迹

V0.1–V0.4 保存了定位、产品、原产地栏目和页面主表如何逐步收敛，便于判断哪些决定被保留、覆盖或废止。

## 4. Gate 前策划中需要改进的部分

### 4.1 定位资料是长对话记录，不是独立的批准战略合同

当前定位文档保留了建议、用户否决、重新提议和后续决定。它有很高的历史价值，但执行任务需要自行从长文本中区分当前决定与被否决方向。

**经验：** 战略讨论结束后，应另外生成一份简短的 `Approved Positioning Brief`，只包含当前决定、明确不做什么、证据假设和开放问题；原始对话继续作为历史资料。

### 4.2 关键词研究前锁定的是架构假设，但流程上缺少“研究后架构收敛”里程碑

Agent 被正确禁止自行改架构，但真实搜索研究只能提出 NEW PAGE CANDIDATE。随后 PRD V0.1–V0.4 在较短时间内完成了人工收敛，却没有一份独立记录说明：哪些初始架构被数据支持、哪些被修改、哪些候选被拒绝及原因。

**经验：** 下一次应明确区分 `Architecture Hypothesis` 和 `Approved Architecture Baseline`，中间必须进行一次 Research-to-Architecture Convergence Review。

### 4.3 前置研究以 SEO 为主，其他网站输入没有同等级进入

关键词研究非常完整，但完整网站架构还取决于：

- 买家任务与采购旅程；
- 表单与转化流程；
- 法律、隐私和 Consent；
- 产品与应用事实模型；
- 文件申请和敏感资料控制；
- 公司身份、地址、联系方式和运营能力；
- CMS、共享组件和跨站隔离约束。

这些输入后来才通过页面实践逐步出现。

**经验：** Gate 前应并行完成 Search Research、Buyer/Commercial Research、Evidence Research、Operational/Legal Research 和 Technical/System Constraints 五条研究轨道，再共同决定网站架构。

### 4.4 产品证据与关系模型建立得晚于页面架构

PRD 和 54 页登记册先建立，随后才通过 TDS 和用户决定形成 14 × 6 产品关系矩阵，并解决 M-2377、M-996、M-2196 等边界。产品、应用、工艺和文件页面因此需要消费后续变化。

**经验：** 对产品型网站，应在确定 Products、Applications 和 Documents 页面关系前，先完成最小 Product Evidence Model 和关系矩阵；未知项可以冻结，但必须先可见。

### 4.5 共享系统和运营能力没有在首轮架构中完整出现

Logo production、Global Chrome、Privacy/Cookie/Consent、Web3Forms、数据保留、表单 receiver、Contact 和 Legal 页面均是完整网站基础。它们后来影响 Footer、Conversion、About、Documents 和 Gate 9 release blockers。

**经验：** 页面清单不能只从 SEO 和内容栏目产生，还必须从“网站必须运行什么”产生 Utility、Legal、Conversion 和 Shared System inventory。

### 4.6 页面总数较早冻结，但架构完成条件尚未覆盖完整网站

54 页基线可以启动工作，但后来出现 54→58→57 的合法变更。这不是数量变化本身的问题，而是首次架构冻结时尚未完成表单、隐私、Consent 和 Footer 依赖审查。

**经验：** 架构冻结前必须同时通过 Search Coverage、Buyer Journey、Operational Capability、Legal/Privacy、Shared System 和 Release Dependency 六项完整性检查。

### 4.7 页面优先级没有完全等同于网站建设关键路径

关键词价值和商业重要性可以确定 P0/P1，但网站能否形成完整路径还取决于 Shared Chrome、Legal/Privacy、Contact、Conversion、Documents 和目标 route。部分高质量页面最终仍被这些依赖阻止发布。

**经验：** Gate 前应同时建立两套排序：`Content/Commercial Priority` 与 `Build/Release Dependency Wave`。前者决定价值，后者决定建设顺序。

### 4.8 缺少页面类型 pilot 和 rollout 策略的早期决定

M-350 之后才明确“先验证一个代表型号，再通用化并扩展其他 Grade”。这一经验同样适用于 Market、Application、Document、Resource 和 Conversion 页面。

**经验：** 架构批准后、页面 Gate 启动前，应为每个页面类型选择 pilot，并明确 pilot 验证什么、何时更新 Playbook、何时开始同类页面扩展。

### 4.9 缺少统一的 Gate Launch Input

页面启动时需要在定位、PRD、关键词 CSV、登记册、视觉标准、证据资料和共享决定之间查找输入。后来的 Brief 和 Manifest 逐步解决了页面内 authority，但 Gate 之前仍缺少项目级“本页为什么现在可以开始”的启动包。

**经验：** 前置策划最后一个交付物应是每个首批页面的 `Page Launch Package`，它只引用已经批准的全站输入，不代替后续 Page Brief 和 Gate。

## 5. 根因判断

这些迭代点符合第一次采用系统化网站策划方式的特征：

- 项目一开始已有较强商业方向，但缺少一套预先定义的前置策划标准；
- 关键词研究流程最先标准化，因此 SEO 轨道成熟度高于证据、运营、法律和系统轨道；
- 页面实践反向暴露了完整网站所需的共享能力；
- 后续治理文件成功吸收了这些经验，但尚未形成一套独立的 Gate 前流程。

因此，正确改进不是减少研究，也不是延后页面工作，而是让多个前置研究轨道更早并行，并在页面 Gate 启动前完成一次全站收敛。

## 6. 下一次前置策划应达到的结果

进入任何页面 Gate 前，项目应能够提供：

1. 一页批准定位和明确排除项；
2. 事实、证据、未知项和来源 readiness 总表；
3. 买家角色、采购旅程、任务和转化路径；
4. 搜索需求、市场、竞品和关键词证据；
5. 产品、应用、工艺、文件和实体关系模型；
6. 页面架构假设、研究反馈和最终批准架构之间的差异记录；
7. Utility、Legal、Conversion 和 Shared System inventory；
8. Content Priority 与 Build/Release Wave；
9. 页面类型 pilot 与 rollout 顺序；
10. 首批页面的 Page Launch Package。

## 7. 复盘结论

本项目 Gate 前策划已经完成了最关键的战略定位、关键词研究、页面—关键词映射和视觉方向，但第一次实践把 SEO 研究做成了最成熟的前置轨道，而证据、运营、法律、共享系统和建设依赖是在页面阶段逐步补齐的。

下一版应建立一套独立的 Gate 前网站策划流程：不是替代页面 Gate，而是确保页面 Gate 接收到更完整、更稳定、已经过全站收敛的输入。

