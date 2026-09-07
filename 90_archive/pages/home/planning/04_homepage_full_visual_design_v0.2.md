# TiO₂ Malaysia 首页整页视觉设计 V0.2

## 0. 状态、版本和阶段边界

| 项目 | 内容 |
|---|---|
| 文档类型 | 首页整页视觉设计说明；不是首页开发成果或生产页面 |
| 当前状态 | V0.2 整改交付，等待主控人工视觉复审 |
| 上游基线 | PRD V0.4、首页内容架构 V0.2、线框规范 V0.1、页面—关键词主表、视觉标准 V1.0、视觉方向 V0.2 |
| 视觉组合 | Direction A 为整站基底；Products、Documents、Resources 吸收 Direction B 的技术编辑/采购卷宗表达 |
| 当前授权 | PC 与 Mobile 整页视觉、内部审核叠层、两个移动交互状态示意 |
| 明确不包含 | 最终文案、真实链接、按钮行为、菜单逻辑、产品折叠逻辑、正式表单、响应式生产实现、实施计划、部署 |
| 日期 | 2026-08-29 |

V0.2 仍然是**视觉设计**。PNG 是静态画面；HTML 是用于对照与导出的视觉审核载体。二者都不能证明链接、按钮、表单、菜单或响应式行为已经实现。

## 1. V0.1 主控未通过事项与 V0.2 修正

| V0.1 未通过原因 | V0.2 对应修正 |
|---|---|
| 买家界面混入 page_id、pending、not live、evidence gate 等内部状态 | 拆分 Buyer Clean View 与 Internal Review Overlay；买家稿不显示内部状态，审核稿单独叠加 |
| 为满足旧页面高度目标使用 7–11px 正文，阅读困难 | 按视觉标准恢复桌面 H1/H2/H3/正文/导航字号；移动端重新排版，正文保持 15–16px |
| 移动端把展开菜单审核态当成默认首页 | Clean 默认只显示 Logo + Menu + RFQ，菜单关闭；另交付 Menu Open 状态图 |
| 移动 Products 把全部组展开审核态当成默认体验 | Clean 默认四组折叠，明确 14 models 与 6/5/2/1；另交付一个分组展开状态；审核稿保留完整 14 型号核对区 |
| Logo/Icon 视觉方向资产状态出现在买家界面 | 资产状态只保留在 Internal Review Overlay 和本文档；Clean 不显示审核标签 |
| 静态视觉稿容易被误解为真实交互或生产实现 | 预览页和本文档明确区分视觉设计、交互状态示意与生产实现 |
| 英文工作文案出现 grade IDs、approved procurement paths、evidence gates 等内部/生硬表达 | Clean 改为买家可理解的 markets、product groups、models、document paths 和 quotation request 表达 |

V0.1 的全部文件保留为未通过的历史版本，没有覆盖或删除。

## 2. V0.2 交付物

### 2.1 Buyer Clean View

| 交付 | 文件 | 实际尺寸 | 作用 |
|---|---|---:|---|
| PC 买家干净稿 | `visual-designs/homepage-full-visual-pc-clean-v0.2.png` | 1440 × 6000px | 仅显示拟面向买家的视觉与中性工作内容 |
| Mobile 买家干净稿 | `visual-designs/homepage-full-visual-mobile-clean-v0.2.png` | 390 × 7200px | 默认菜单关闭、产品组折叠的移动首页视觉 |

Clean View 不显示 page_id、证据状态、URL 状态、NOT LIVE、pending 或制作说明。未核实事实采用中性路径表达或不渲染，不把 Malaysia-origin、制造、COO、追溯、文件可用性或履约能力写成公开承诺。

### 2.2 Internal Review Overlay

| 交付 | 文件 | 实际尺寸 | 作用 |
|---|---|---:|---|
| PC 内部审核稿 | `visual-designs/homepage-full-visual-pc-review-v0.2.png` | 1440 × 6000px | 在对应 PC 视觉上叠加 page_id、证据门禁、素材和页面状态 |
| Mobile 内部审核稿 | `visual-designs/homepage-full-visual-mobile-review-v0.2.png` | 390 × 7200px | 对应移动稿的内部审查版本，并附 14 型号完整核对区 |

审核稿顶部标记 `INTERNAL REVIEW OVERLAY / NOT BUYER UI / NOT PRODUCTION`。黄色注释只用于主控审核，不是面向买家的界面组件。

### 2.3 移动交互状态示意

| 交付 | 文件 | 实际尺寸 | 表达的状态 | 明确不代表 |
|---|---|---:|---|---|
| Menu Open | `visual-designs/homepage-mobile-menu-open-v0.2.png` | 390 × 1050px | 菜单打开后显示完整八项顺序 | 已实现点击、焦点、关闭、滚动锁或键盘操作 |
| Product Expanded | `visual-designs/homepage-mobile-product-expanded-v0.2.png` | 390 × 1200px | Coatings Grades 展开，显示 6 个型号；其余三组保持关闭 | 已实现 disclosure、链接、路由或产品数据加载 |

### 2.4 对照预览

`visual-designs/homepage-full-visual-preview-v0.2.html`

预览页并列说明 Buyer Clean、Internal Review、Menu Open 和 Product Expanded 四种审核用途，并标明 `VISUAL DESIGN REVIEW ONLY / NOT PRODUCTION IMPLEMENTATION`。它只承担视觉对照和稳定导出，不是生产代码。

## 3. 视觉系统

### 3.1 整体基底

- 以 Direction A 的白色、浅灰、Deep Navy、Navy 与 Malaysia Teal 建立清洁、克制、国际工业品牌感。
- Hero 使用大留白、清晰 H1 和有限装饰资产；H1 与 CTA 始终先于图形成为第一视觉焦点。
- Markets 位于前半页，以编辑式连续入口呈现，不使用旗帜、旅游地标或地图式国家营销。
- 页面允许增长到可读高度，不再以压缩字号换取形式上的旧高度限制。

### 3.2 技术采购表达

Products、Documents 和 Resources 使用 Direction B 的以下元素：编号、细线、目录层级、编辑式纸张结构和清楚的入口关系。

明确不使用：KPI 数字墙、筛选器、系统状态卡、深色网格、仪表盘、卡片堆叠或 SaaS 控制台语言。

### 3.3 字号与行高

| 场景 | 桌面端 | 移动端 |
|---|---:|---:|
| H1 | 62px / 1.04 | 42px / 1.05 |
| 主模块 H2 | 40px / 1.08 | 32px / 1.10 |
| H3 / 产品组标题 | 24–30px | 21–27px |
| 正文 | 16–18px / 1.55–1.68 | 15–16px / 1.55–1.65 |
| 导航 | 15px | 14–15px |
| CTA | 15px | 15px |
| 辅助文字 | 14–15px | 14px |
| 内部审核注释 | 12–13px | 12px；只在审核稿出现 |

## 4. 页面结构与买家路径

顺序保持已批准基线：

```text
Header
→ Hero
→ Markets / Products / Documents 紧凑三入口
→ Markets
→ Products
→ Applications
→ About / Origin
→ Documents
→ Resources / Buyer Answers
→ Final RFQ
→ Footer
```

### 4.1 Header 与 Hero

PC 可见导航顺序固定为：

```text
Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote
```

Logo 不替代 Home。Mobile Clean 默认只显示 Logo、Menu、RFQ。Hero H1 在主标题层级包含 `Malaysia Titanium Dioxide`，主 CTA 为 `Request a Quote`，次 CTA 为 `View Products`；不出现 Request Documents 或 Sample。

### 4.2 Markets

EU、UK、India、Brazil 四个主要入口完整可见。EU 只用一句话提示 Germany、Italy、Spain、Poland、Netherlands、Belgium 六国路径，不在首页堆叠六国正文。所有市场说明保持评估/导航语气，不形成法规、交付或供应能力承诺。

### 4.3 Products

PC 在四个紧凑组内完整呈现 14 个唯一型号：

| 分组 | 数量 | 型号 |
|---|---:|---|
| Coatings Grades | 6 | M-350、M-510、M-896、M-996、M-2196、M-895 |
| Plastics & Masterbatch Grades | 5 | M-200、M-108、M-210、M-340、M-886 |
| Inks & Multi-Application | 2 | M-52、M-2377 |
| Specialty Grade | 1 | CR-901 |

Mobile Clean 首层仅显示四个组名、6/5/2/1 和 Expand，避免机械堆叠。Product Expanded 状态显示 Coatings 的 6 个型号；Mobile Review 另有全部 14 型号核对区。M-2377 不显示工艺结论。唯一产品主 CTA 为 `View All 14 Grades`；Chloride 与 Sulfate / Sulphate 仅作次级文本路径。

### 4.4 Applications

Coatings、Plastics、Masterbatch、Printing Inks、Paper 五项完整。Clean 不显示内部 page_id 或 provisional URL。Masterbatch 明确为 TiO₂ input evaluation，不是 finished masterbatch。

### 4.5 About / Origin

Clean 只用 `Company & Supply Information` 的中性编辑式布局，呈现平台、公司信息以及 origin/document pathways 的查看路径，不放证明型图片，也不暗示制造、工厂、COO 或追溯事实。Review Overlay 再标注 `FACT COPY PENDING / VERIFIED ASSET PENDING`。

### 4.6 Documents

只表现 `Documents Hub` 与 `Request Documents` 两条买家路径。不把 REACH、TDS、SDS、COA、COO 做成已上线或可提供的文件卡，不在 Clean 中声称文件一定可获得。

### 4.7 Resources / Buyer Answers / GEO

只保留两个主题入口和三个简短问题/答案结构。Clean 使用一般性采购导航与组织方式，不写未经证据支持的企业事实；Review Overlay 标出页面计划和内容审核状态。该结构可支持后续 GEO 内容，但静态结构本身不代表内容已获批准，也不保证 GEO、排名或转化效果。

### 4.8 Final RFQ

只显示字段摘要：Destination Market、Application、Grade / Specification、Quantity、Packaging、Document Needs；唯一行动为 `Request a Quote`。本稿不包含正式表单、隐私同意、校验、提交状态、责任人或响应时间承诺；不显示 Sample。

## 5. 素材与事实边界

- 当前横版 Logo 与 3D Icon 仍只是视觉方向资产，不是最终生产资产。
- Icon 仅在 Hero 低透明度使用，承担氛围，不承担企业、产地、制造、实验室、仓库、装运或文件证明。
- V0.2 没有生成新的事实型图片，也没有使用被否决的假工厂或旅游化资产。
- 证明型模块只有在真实事实、权属与公开授权均通过后，才可加入真实资产。
- Buyer Clean 不展示资产状态标签；Internal Review Overlay 与本文档保留状态，避免买家界面被内部流程污染。

## 6. 仍待解决事项

- 制造主体、生产地点、品牌/运营/制造关系与可公开的 Malaysia-origin 表述。
- COO、批次追溯、生产/QC/仓储/装运流程及证明资产。
- 产能、库存、MOQ、交期、包装、Incoterms、出口与技术支持能力。
- TDS、SDS、COA、COO、REACH-related 文件范围、版本、公开状态与申请资格。
- M-2377 工艺/应用结论及全部型号的技术依据。
- Applications 子页最终 URL。
- RFQ 字段、隐私、责任人、提交处理与响应规则。
- 企业联系事实、法律页面和生产级 Logo/Icon 文件。

## 7. 阶段门槛

本轮停在主控人工视觉复审。自动检查和静态截图不能替代人工审核。主控通过前，不进入生产代码、实施计划或部署，也不把任何视觉状态图描述为已经实现的交互。
