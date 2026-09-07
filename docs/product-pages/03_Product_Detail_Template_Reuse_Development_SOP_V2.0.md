# TiO2 Malaysia 型号产品详情页模板复用开发 SOP V2.0

## 0. 文档控制

| 字段 | 当前值 |
|---|---|
| Document ID | `PRODUCT-DETAIL-DEVELOPMENT-SOP` |
| Version | `V2.0` |
| Date | `2026-09-02` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Scope | TiO2 Malaysia 14 个 Grade Product Detail 页面从准入、证据、内容、模板复用、开发交付、Gate 8 到 Gate 9 只读验收 |
| Planning / QA owner | `D:\23MySec` 产品中心与产品详情页 Controller |
| Implementation owner | `D:\16Wordpress_nextjs` WordPress + Next.js 开发项目 |
| Release owner | 用户明确授权后，由 WordPress + Next.js 开发项目执行 |
| Proven process | M-350 基线开发与 Gate 9；M-510 模板复用快速通道与 Gate 8 完整交付 |
| Supersedes | `docs/product-pages/03_Product_Page_Development_SOP_and_QA_V1.0.md`，待用户批准本 V2.0 后生效 |

本 SOP 把“共用一个产品详情模板”和“每个型号都有独立事实与发布资格”同时落实。模板可以复用；型号身份、证据、正文、SEO、Schema、路由授权和 Gate 9 结果不可复用。

## 1. 适用范围与完成目标

### 1.1 适用

- `GRADE-M350` 至 `GRADE-CR901` 的 14 个型号详情页。
- 已有一个通过 Gate 9 的 Product Detail 模板后，新型号的标准开发或模板复用快速开发。
- WordPress 内容记录、GraphQL/公共投影、Next.js 路由与渲染、SEO/Schema、CTA 预填、测试和只读验收。

### 1.2 不适用

- Products Hub、Process、Applications、Markets、Documents、Resources 或 Conversion 页面的独立策划。
- 用一个型号的正文、技术参数或图片批量替换型号名。
- 未经用户授权的部署、生产发布、DNS、sitemap、开放索引或 Search Console 操作。

### 1.3 单型号完成目标

一个型号只有在以下链路完整时才算完成开发周期：

`身份锁定 → 证据锁定 → 完整内容合同 → 开发通道判定 → Gate 7 完整交付 → Gate 8 外部实现 → Gate 9 只读验收`

Gate 9 通过仍不等于发布。Gate 10 必须单独获得用户授权。

## 2. 核心原则

1. **共享模板，不共享产品事实。** 不允许以 M-350 或任一型号作为内容 fallback。
2. **先确认内容，再判断是否需要设计。** 内容密度不同不自动意味着模板失效；先用真实内容测试共享组件的弹性。
3. **快速通道可以省去重复视觉生产，不能省去开发输入。** Gate 7 仍必须交付完整正文、数据、路由、SEO/Schema 和验收合同。
4. **有专属且可读的型号文档即为有效证据源。** 但只释放文档中明确存在、型号匹配且准确提取的字段，不从相邻文案推导隐藏结论。
5. **每个型号独立授权。** 证据存在、模板可复用或另一个型号已开发，都不自动授权当前型号 Gate 8。
6. **预览先于发布。** 新型号默认 `PREVIEW_ONLY`、`noindex,nofollow`、不进入 sitemap。
7. **失败关闭。** 缺失、重复、错误哈希、错误路径、错误 `site_scope` 或未授权身份必须 404/不渲染，不得跨站或跨型号回退。
8. **D23 与 D16 职责分离。** D23 写规格和做只读验收；D16 写代码、测试和提供实现证据。

## 3. 两条开发通道

### 3.1 标准通道

出现任一条件时，走标准 Gate 3–5：

- 需要改变已批准模块顺序或信息层级。
- 需要新的页面模块、交互模式、视觉语言或媒体类型。
- 真实内容无法在共享组件中稳定呈现。
- 需要超过现有模板能力的技术比较、复杂计算、交互表格或特殊合规表达。
- 型号身份与普通 Grade 页面明显不同，项目总控判断模板不再适合。

流程：`Gate 1 → Gate 2 → Gate 3 → Gate 4 → Gate 5 → Gate 6 → Gate 7 → Gate 8 → Gate 9`。

### 3.2 模板复用快速通道

同时满足以下条件，才可提交快速通道：

- 有一个已通过 Gate 9 的同类 Product Detail 模板基线。
- 当前型号的 Gate 1 证据和 Gate 2 完整正文已批准。
- 模块家族和叙事顺序与共享模板一致。
- 差异可由内容长度、项目数量、动态技术列或模块整体省略解决。
- 不需要新的视觉语言、组件类型或交互模式。
- 用户明确批准该型号采用快速通道并授权相应阶段。

快速通道状态写为：

`Gate 3–5 = SATISFIED_BY_APPROVED_TEMPLATE_REUSE`

这不是把 Gate 3–5 标为“未做”，而是引用已批准模板作为视觉与响应式权威，并对当前型号做内容密度和条件状态验证。

### 3.3 必须退出快速通道的情况

Gate 7 或 Gate 8 发现下列问题时停止相关工作并回到对应 Gate：

- 为容纳内容必须重新排模块或改变阅读顺序。
- 需要新卡片、新表格交互、新媒体形式或新的移动端交互。
- 删除内容才能让模板“看起来合适”。
- 开发需要自行补写文案、推断事实或使用占位内容。
- 共享组件的修改会实质改变已批准基线页面。

开发不得把上述情况当作普通 CSS 修复静默处理。

## 4. 角色与责任

| 角色 | 必须负责 | 不得代替 |
|---|---|---|
| 用户 | 批准重大内容、快速通道、Gate 8 与 Gate 10 | 不需要自己编写技术交付包 |
| 项目总控 / Controller | 准入、证据边界、内容审查、通道判定、Gate 7、Gate 9 | 不写 D16 实现代码 |
| 技术/内容 owner | TDS 提取、事实准确性、完整 Buyer Clean 文案 | 不用竞品或模板事实证明本型号 |
| SEO/GEO owner | 关键词边界、元数据、实体关系、Schema 同源 | 不创建页面上不可见的事实 |
| D16 开发任务 | WordPress、Next.js、测试、证据和修复 | 不改变获批内容或发布边界 |
| Gate 9 审查 | 对 production-equivalent 结果做只读验证 | 不直接修改代码 |

## 5. Gate 0：单型号准入

### 5.1 必读输入

- 根 `AGENTS.md`、项目状态与项目索引。
- Page Registry 中该型号的 Page ID、URL 和状态。
- `research/keyword/11_page_keyword_master.csv` 中该型号的唯一行。
- 当前 PRD、Product Playbook、统一 Gate 1–5 标准。
- 当前 Product Detail 模板 Manifest 与最近一次 Gate 9 关闭记录。
- 该型号专属 TDS 和其他明确适用的证据。

### 5.2 准入检查

- Page ID、Grade code、slug、URL、canonical 和主关键词一一对应。
- 无 URL 或主关键词冲突。
- 型号属于批准的14型号范围。
- 特殊边界已登记。
- 建立独立 Page Brief，不从上一型号复制批准状态。

### 5.3 输出

`{PAGE-ID}_PAGE_BRIEF_Vx.x.md`

未通过 Gate 0 时只能研究，不能进入正式内容、视觉或开发交付。

## 6. Gate 1：证据与 Page Intent

### 6.1 Page Intent Card

必须让用户直接看到并确认：

- Audience
- Buyer problem
- Core message
- Must include
- Must exclude
- Primary CTA
- Secondary CTA
- Ownership boundary

检查点：`CONTENT_INTENT_CONFIRMED`。

### 6.2 TDS 有效性规则

型号专属文档满足以下条件即为有效来源：

1. 文件存在；
2. 可见型号身份与目标 Grade 匹配；
3. 内容可读取；
4. 没有未解决的身份冲突。

有效不等于可以扩写。逐项提取时必须保留：

- 原始字段名；
- 数值、单位、最小/最大/典型含义；
- 文档可见版本与日期；
- 文件 SHA-256；
- 适用模块；
- `verified / pending_verification / not_public` 状态。

### 6.3 证据输出

- Claim/Evidence Register。
- 模块级 evidence ledger。
- 允许公开、带限定公开、不公开和冻结字段。
- 应用、工艺、文件、市场及相关型号关系。
- 特殊冲突与退出条件。

不得因为一个字段未确认而冻结不依赖它的全部页面。

## 7. Gate 2：完整内容与机器可读方向

### 7.1 先骨架、后完整正文

先批准：H1、Hero、模块顺序、模块目的、CTA、SEO/GEO/Schema 方向和条件模块。再完成全部真实正文。

检查点：`FULL_COPY_AND_MODULE_ORDER_CONFIRMED`。

### 7.2 Gate 2 最低内容

- SEO title、meta description、canonical、breadcrumb。
- Hero 完整文案、事实标签和操作。
- Positioning、Applications、Evaluation。
- Technical Data 的真实列、全部字段、值、单位和限定语。
- Documents、Markets、Sample 与 RFQ 路径。
- 允许出现和必须省略的模块。
- 所有 CTA label、target Page ID、route 和 prefill。
- Product 与 Breadcrumb Schema 方向。
- route 不可用、receiver 不可用、无媒体和证据撤回时的行为。

### 7.3 内容密度评估

内容密度用以下实际数据判断，不用“字数感觉”判断：

- Hero 标题、摘要和事实条数。
- Application card 数量与最长正文。
- Evaluation group 数量与最长条目。
- Technical column 数、row 数、最长 property/value。
- 可见 CTA 数量。
- 条件模块的存在与省略组合。
- 1440、768、390 中的预计换行与滚动长度。

密度高于 M-350 不自动退出模板。只要共享组件可以动态扩展、换行、堆叠或整体省略，仍可复用。

## 8. 快速通道判定与批准

项目总控完成《单型号模板适配表》：

| 检查 | PASS 标准 |
|---|---|
| 模块顺序 | 与批准模板一致 |
| 组件家族 | 无新组件类型 |
| Hero | 适配现有信息拓扑与最多两项 Hero CTA |
| Technical | 动态列/行即可表达，无新交互 |
| Conditional modules | 可整体省略且不留空壳/导航/间距 |
| Responsive | 真实内容可在模板断点规则中稳定重排 |
| Visual | 不需要新的色彩、字体、卡片或媒体语言 |
| Accessibility | 现有语义和键盘模式可覆盖 |

全部 PASS 后，向用户直接提交：复用哪些内容、哪些字段独立、允许的组件适配、仍存在的风险和 Gate 8 范围。

只有用户明确批准后，才写入 `SATISFIED_BY_APPROVED_TEMPLATE_REUSE`。不得从“同意正文”推断“同意跳过视觉 Gate”或“授权开发”。

## 9. Gate 6：项目总控复审

快速通道下，Gate 6 重点审查差异包而不是重复审查整套模板：

- 页面身份与关键词一致。
- Gate 1/2 已批准且没有失效来源。
- 新型号内容中没有基线型号事实。
- 模块差异均能由共享组件表达。
- WordPress 和 Next.js 不需要猜测字段。
- SEO、Schema 与 visible copy 同源。
- 条件链接和 receiver 采用 fail-closed。
- preview、robots、sitemap 和 Gate 10 边界明确。
- 回归、隔离、响应式和无障碍测试可执行。

结果：`PROJECT_CONTROL_REVIEW_PASS / CLOSED` 或定向退回。

## 10. Gate 7：开发交付包

### 10.1 不可省略的四件套

每个型号至少交付：

1. **用户决定/快速通道记录**：批准对象、适用范围、未授权事项。
2. **机器可读内容合同**：完整 Grade payload，不是空字段表。
3. **开发交付说明**：WordPress、Next.js、路由、Schema、条件行为和验收矩阵。
4. **Manifest 与总控关闭记录**：文件版本、SHA-256、authority order 和状态。

推荐命名：

```text
{PAGE-ID}_TEMPLATE_REUSE_DECISION_Vx.x.md
{PAGE-ID}_PRODUCT_DETAIL_CONTENT_CONTRACT_Vx.x.json
{PAGE-ID}_GATE7_HANDOFF_PACKAGE_Vx.x.md
{PAGE-ID}_GATE7_MANIFEST_Vx.x.md
{PAGE-ID}_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_Vx.x.md
```

### 10.2 机器可读内容合同最低字段

- `reviewId`
- `identity`: Page ID、scope、locale、Grade、slug、path、template/schema version、record state、content revision
- `releaseControls`
- `seo`
- `globalChromeRef`
- `breadcrumb`
- `moduleStatus`
- 所有可见模块的完整文案与数据
- CTA target、href 和 prefill
- `routeRegistry`
- `evidenceLedger`

不存在的可选模块应缺席，不使用空对象、空标题或占位内容冒充完整合同。

### 10.3 WordPress 交付要求

- 一个型号一份独立且版本化的内容记录。
- Registry 只启用当前获批型号。
- Page ID、Grade、slug、path、locale 与 `site_scope=tio2-my` 必须一致。
- 记录绑定获批合同版本/哈希。
- 公共投影不输出内部证据路径、治理状态和未批准字段。
- 缺失、重复、错误哈希、错误 scope 或身份不一致必须 fail closed。
- 不从其他 `site_scope` 或其他 Grade 回退。

### 10.4 Next.js 交付要求

- 路由从获批 registry/allowlist 解析，不使用单型号 literal 作为长期实现。
- 每个型号生成自己的 title、description、canonical、H1、Product 和 Breadcrumb Schema。
- Technical 支持 Grade-specific columns/rows。
- Optional module 缺失时整段、导航项和间距一起省略。
- 条件链接只在 owner route ready 时可点击。
- CTA receiver ready 时传递精确 prefill；不 ready 时按合同省略。
- Cache/revalidation 按 Grade 隔离。
- 未授权 Grade 保持 404。

### 10.5 交付前自动/机械校验

- JSON 可以解析。
- Identity 与 Registry/CSV 一致。
- 技术列数和行数与批准正文一致。
- 所有 prefill 精确一致。
- 禁止型号名或模板事实无意混入 payload。
- release controls 默认为 false。
- Manifest 所列文件存在且 SHA-256 一致。
- 当前 Manifest 唯一，旧版本明确 historical/superseded。

## 11. Gate 8：外部开发 SOP

### 11.1 派单

- 使用已有 D16 开发任务，除非用户明确要求新任务。
- 派单信息包含完整 authority set、实现范围、禁止事项、测试和返回证据。
- D16 先读取自己的 `AGENTS.md`、当前 worktree/branch 和本地 Next.js 文档。
- D23 不进入 D16 修改代码。

### 11.2 一次性模板通用化

首个复用型号可能暴露基线实现中的单型号假设。允许在 Gate 8 中一次性通用化：

- literal slug/type/query → registry-validated Grade identity；
- 单一 config → 独立 Grade config；
- 固定技术列 → 动态技术列；
- 必填模块 → 可选模块整体省略；
- 单型号 cache → Grade-specific cache/revalidation。

通用化必须先保证基线型号回归不变，再启用新型号。

### 11.3 实现顺序

1. 检查现有代码、测试和工作树。
2. 为基线行为补足回归保护。
3. 通用化 identity/resolver/types/query/cache。
4. 加入新型号 WordPress 内容记录。
5. 启用新型号 preview route。
6. 实现 SEO/Schema 与条件模块。
7. 运行隔离、404、回归、响应式和无障碍测试。
8. 提交实现 commit 与证据。

### 11.4 Gate 8 必须返回

- Commit 与 clean-worktree 证据。
- Changed-file list。
- 测试命令和完整结果。
- 基线型号回归证据。
- 新型号 screenshots、metadata 和 Schema 证据。
- 错误身份、错误 scope、未知 Grade 和未授权 Grade 的 404/fail-closed 证据。
- 当前 release blockers。

Gate 8 不得自行部署或开放索引。

## 12. Gate 8 最低测试矩阵

### 12.1 数据与隔离

- [ ] 新型号只读取自己的 `tio2-my` 记录。
- [ ] 基线型号输出保持不变。
- [ ] 两个型号的 H1、正文、技术值、metadata、canonical 和 JSON-LD 不同且正确。
- [ ] 未知 Grade 与未授权 Grade 返回 404。
- [ ] 错误 Page ID、slug、path、hash、locale 或 `site_scope` fail closed。
- [ ] 缺数据时不 fallback 到另一个型号或站点。
- [ ] Cache/revalidation 不交叉污染。

### 12.2 内容与组件

- [ ] 一个可见 H1。
- [ ] 技术列和行准确，无空列。
- [ ] Optional module 省略后无空壳、导航项和异常空白。
- [ ] CTA receiver ready/unavailable 两种状态均正确。
- [ ] Prefill 中 Grade、scope、source 和 document type 正确。
- [ ] Buyer Clean 中无 internal review、pending、blocker 或 placeholder。

### 12.3 SEO、GEO 与 Schema

- [ ] Title、description、canonical 与批准合同一致。
- [ ] Product/Breadcrumb Schema 与 visible copy 一致。
- [ ] 没有虚构 Offer、price、availability、rating、review、origin、manufacturer 或 certification。
- [ ] preview 为 `noindex,nofollow` 且 sitemap 不包含该 URL。
- [ ] 未生成未批准 FAQ/QAPage。

### 12.4 响应式与无障碍

- [ ] 1440、1024、768、430、390、320 宽度。
- [ ] 200% zoom-equivalent。
- [ ] 无横向溢出和文字裁切。
- [ ] 技术 property/value 关系在移动端清楚。
- [ ] 键盘、焦点、accessible name、heading order 和触控尺寸通过。
- [ ] Global Chrome 和 Footer 正确闭合。

## 13. Gate 9：D23 只读验收 SOP

### 13.1 准入

只有开发任务返回 production-equivalent preview、commit 和测试证据后才开始 Gate 9。

### 13.2 只读检查

- 锁定开发 commit/worktree 状态。
- 独立运行或复核相关测试、typecheck 和 lint。
- 对比机器可读合同与实际 WordPress/GraphQL/Next.js 输出。
- 检查全量可见正文、技术字段、CTA、prefill、metadata、canonical 和 Schema。
- 检查所有响应式宽度、200% zoom、键盘和焦点。
- 检查基线型号回归和 scope/Grade 隔离。
- 检查 preview/noindex/sitemap 控制与 release blockers。

### 13.3 问题分级

| 级别 | 定义 | 处理 |
|---|---|---|
| P0 阻塞 | 错误事实、跨 scope/Grade 泄露、错误 canonical/index、路由越权、表单错投、严重可访问性/布局失败 | Gate 9 不通过，退回 D16 |
| P1 重要 | 明显内容/视觉偏差、条件模块错误、Schema 不一致、关键回归 | 修复并定向复验 |
| P2 建议 | 不影响事实、任务完成或发布安全的改进 | 可记录后续优化 |

### 13.4 Gate 9 结果

- `READ_ONLY_QA_APPROVED`
- `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`
- `READ_ONLY_QA_RETURNED_FOR_FIX`

D23 只出问题清单和关闭记录，不直接修代码。

## 14. Gate 10：发布边界

必须由用户单独授权：

- 部署到生产；
- 生产 WordPress 数据写入；
- 域名/DNS；
- 从 noindex 改为 index；
- sitemap inclusion；
- 对外发布和搜索引擎提交。

发布前还必须验证共享下游：Global Chrome、Products Hub、RFQ、Sample、Documents、Markets、Privacy/Consent 以及本页实际使用的链接和 receiver。

## 15. 特殊型号路由

| 型号 | 必须增加的前置检查 |
|---|---|
| M-200 | 解决源文件名/PDF title 与可见 M-200 身份、版本冲突 |
| M-996 / M-2196 | 各自事实独立；命名比较和差异继续单独证据治理 |
| M-2377 | 使用最新批准的工艺/应用关系；Rubber 等未批准关系不得外推 |
| CR-901 | Specialty 与 vapor-phase oxidation 专项表达；医疗、化妆品、纯度和安全声明需要专项合规审查 |

特殊型号可能仍复用页面 shell，但不得因为 shell 相同而跳过专项证据或合规审查。

## 16. 批量推进后续型号

后续型号按“一个型号一个批准包”推进，不一次授权全部路由：

1. 先完成每个型号的 Gate 0–2 和模板适配表。
2. 普通型号可按小批次准备，但每个型号保留独立 payload、Manifest 和 Gate 状态。
3. Gate 8 可以复用已完成的通用代码，只新增获批记录和必要测试。
4. 每个型号独立 Gate 9；不得用抽样通过替代型号级事实验收。
5. 特殊冲突型号单独排期，不混入普通批次自动放行。

批量工作的效率来自共享组件、通用测试和交付模板，不来自批量复制文案或批量授权发布。

## 17. 单型号 Definition of Done

### 17.1 `APPROVED_FOR_HANDOFF`

- [ ] 身份、URL、关键词和 Brief 一致。
- [ ] Gate 1 证据与 Gate 2 完整正文已批准。
- [ ] 标准/快速通道判定明确。
- [ ] 完整 JSON payload 和开发合同存在。
- [ ] Manifest 哈希与 authority order 通过。
- [ ] Gate 6/7 项目总控关闭。

### 17.2 `HANDED_OFF / GATE8`

- [ ] 用户已授权 Gate 8。
- [ ] 完整包已发送到 D16 任务并记录 thread/回执。
- [ ] 开发范围、禁止事项和返回证据明确。

### 17.3 `READ_ONLY_QA_APPROVED`

- [ ] Gate 8 实现与测试完整。
- [ ] 新型号事实、技术值、SEO 和 Schema 准确。
- [ ] 基线回归、404、scope/Grade 隔离通过。
- [ ] 响应式和无障碍通过。
- [ ] 仍未完成的发布依赖已明确记录。

### 17.4 `PUBLISHED`

只有 Gate 10 单独授权和生产验证完成后才能使用。不得把 `APPROVED_FOR_HANDOFF`、`HANDED_OFF` 或 `READ_ONLY_QA_APPROVED` 写成 `PUBLISHED`。

## 18. 本次流程固化出的决定

| 实际问题 | SOP 决定 |
|---|---|
| M-510 与 M-350 内容密度不同，模板是否失效 | 不因密度不同判定失效；用动态列、自然扩展和条件模块验证模板能力 |
| 是否必须重复 Gate 3–5 | 精确复用已批准模板且用户明确批准时，可以快速通道满足 |
| 跳过重复视觉后是否可以直接“空手开发” | 不可以；Gate 7 完整内容/data/验收包不可省略 |
| TDS 何时有效 | 专属文件存在、型号匹配、内容可读即有效；具体公开字段仍须准确提取 |
| 现有代码只支持 M-350 怎么办 | 先做一次 registry-driven 通用化，再加入第二代表型号 |
| Related Grades 或 Standard 列不存在怎么办 | 组件支持动态数据并整体省略，不显示空列、空模块或占位 |
| 新型号开发完成能否发布 | 不能；先 preview、独立 Gate 9，再等待 Gate 10 |

## 19. 版本记录

| 日期 | 版本 | 说明 |
|---|---|---|
| 早期基线 | V1.0 | 14页统一开发与六类 QA 的早期说明；未反映当前 Gate、scope 隔离和模板快速通道 |
| 2026-09-02 | V2.0 | 基于 M-350/M-510 实际流程，加入双通道、完整 Gate 7、WordPress + Next.js 通用化、单型号预览、Gate 8 证据和 Gate 9 只读验收 |

