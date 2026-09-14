# 可复用网站工作流 Implementation Plan

> For agentic workers: 按批准的五步顺序执行；当前先完成来源清单检查点。专业方法改写和工具实现执行相应Skill；不得跳过依赖核对或用静态检查冒充试跑。

**Goal:** 将现行网站策划角色和方法提取成可锁定版本的母版，并接入gemasterbatch.com重建项目。
**Architecture:** 通用母版＋行业/技术适配＋独立网站实例；采用明确导出清单，保护现有批准源，目标已有文件先比较。
**Tech Stack:** Markdown、JSON；后续初始化/验证工具优先Python标准库，现有Node/Python阶段工具按适配保留。
**Spec:** [批准范围](../../architecture/workflow-reuse/REUSABLE_WORKFLOW_IMPLEMENTATION_SCOPE_V1.0.md)。

## Global Constraints

- 不修改D16代码；不复制TiO2业务事实、授权、状态和页面成果。
- D10为已有项目，保留原状态入口、资料目录及main-only/no-worktree规则；接入差异先形成可审合并结果。
- 当前D23原源不覆盖，方法变化使用独立母版；来源追溯不随新站复制原批准结论。
- 不新增Gate7或Gate8专属Agent；开发由外部接口承接。
- 实际安装和行为试跑、脚本验证、静态检查分别报告。

## Step 1：导出来源与依赖

Files: docs/architecture/workflow-reuse/SOURCE_EXPORT_CATALOG_V1.0.md、同名JSON及VALIDATION。
Consumes: 当前角色/方法基线、源文件、D15初始化机制、D16开发规则。
Produces: source、sha256、kind、target_layer、action、direct dependency edges与基线差异解释。

- [x] 枚举现行15角色/9方法，排除2个历史角色和1个探索Skill。
- [x] 列出配套参考、工具、测试、合同/schema及外部开发接口。
- [x] 核对58条基线关系，解释2项Hero实例增补差异。
- [x] 输出直接依赖分类，不将尚未映射引用标成可安装。
- [x] 保存目标项目只读映射与既有约束。
- [x] 核对清单来源未变、文件存在、数量和差异解释。

## Step 2：提取通用母版

- [x] 按机器清单逐项读取有效条款，将待映射依赖分配到core、profile、instance或provenance；所有运行必需引用必须有唯一目标。
- [x] 在独立母版目录保留15角色/9方法分工，去除实例Hero、共享消费源和旧批准记录；文案/视觉/交付各自上限保持。
- [x] 建立包内工作流、阶段合同、schema和共享规则引用；新站通过配置选择行业与WordPress＋Next.js适配。
- [x] 建立来源到母版变更对照，检查质量规则与授权方式未被误删或自动扩大。

## Step 3：配置与初始化

- [x] 明确bootstrap(stage-independent)与阶段执行必需配置；企业资料未知不阻止创建空白实例。
- [x] 先定义并验证CREATE/KEEP/MERGE_REQUIRED/CONFLICT文件计划、路径/身份/升级行为，再实现受控写入。
- [x] 同身份重复初始化不改文件；任一冲突不得部分覆盖；配置与锁定文件准确绑定完整包。
- [x] 对D10只输出现有规则合并差异，不创建竞争Status或迁移历史资料。

## Step 4：隔离验证

- [x] 对空白目录和含现有AGENTS/资料目录运行正反例，检查不覆盖、不带旧站状态、依赖齐全。
- [x] 检查缺schema、包身份漂移、错误scope及路径逃逸失败能准确返回。
- [x] 对改动过的阶段脚本运行针对性测试；方法行为检查使用脱离TiO2的场景并记录实际证据。
- [x] 更新发布清单和锁定版本，不将安装成功登记为页面Gate通过。

## Step 5：D10接入与试跑

- [x] 读取准确批准成果和当前研究差额，形成00–10目录到W1–W5/Gate0的接入映射。
- [x] 对现有AGENTS/PLANNING_PROCESS冲突提交具体合并稿，保留main-only和唯一状态入口。
- [x] 按确认接入范围运行当前缺口，记录实际来源、执行/审查身份、交付和返修；不默认重做W1。
- [x] 分别报告安装、方法试跑、网站准备就绪和后续页面授权，不提前声明整个重建完成。
