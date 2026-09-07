# TiO₂ Malaysia 首页整页视觉设计 V0.1

## 0. 状态与阶段边界

| 项目 | 内容 |
|---|---|
| 文档类型 | 首页整页视觉设计说明；不是生产实现 |
| 主控批准方向 | Direction A 为整站视觉基底，Products / Documents / Resources 吸收 Direction B 的技术采购表达 |
| 上游基线 | PRD V0.4、首页内容架构 V0.2、线框规范 V0.1、页面—关键词主表、视觉标准 V1.0、视觉方向 V0.2 |
| 当前阶段 | 整页 PC / Mobile 视觉稿，等待主控审查 |
| 明确不包含 | 最终文案、生产 HTML/CSS/JS、正式交互、实施计划、部署 |
| 日期 | 2026-08-29 |

整页统一标注 `FULL-PAGE VISUAL DESIGN / NOT PRODUCTION / COPY NOT FINAL`。所有方向资产只承担视觉氛围，不承担企业事实证明。

## 1. 交付物

| 交付 | 路径 | 实际尺寸 |
|---|---|---:|
| PC 整页视觉稿 | `homepage/04_planning/visual-designs/homepage-full-visual-pc-v0.1.png` | `1440 × 3557px` |
| Mobile 整页视觉稿 | `homepage/04_planning/visual-designs/homepage-full-visual-mobile-v0.1.png` | `390 × 4745px` |
| 本地对照预览 | `homepage/04_planning/visual-designs/homepage-full-visual-preview-v0.1.html` | PC / Mobile 两个独立审核画布 |
| 自检记录 | `homepage/04_planning/05_homepage_full_visual_self_check_v0.1.md` | A–L 与整页专项核验 |

移动端由线框的 `5045px` 主动压缩为 `4745px`。压缩来自减少 Products 按钮后的无效留白，不删除任何模块、入口、产品组或型号。

## 2. 整体视觉系统

### 2.1 A 作为全页基底

- 白色和 `#F5F8FB` 交替构成页面节奏。
- Deep Navy 只用于 Hero 装饰构图、Documents、RFQ 和 Footer 等需要集中注意力的区域。
- Malaysia Teal 用于标题强调、结构线、编号、主 CTA 和焦点路径。
- 主要标题使用 Inter / Arial；正文保持高行距和短段落。
- 页面通过大留白、细边界和连续模块形成国际工业材料品牌感，不建立大量圆角卡片或模板化图标墙。
- 3D Icon 仅出现在 Hero，并降低透明度和图形占比；H1 与 CTA 始终是第一视觉焦点。

### 2.2 B 的局部技术表达

Products、Documents、Resources 使用以下语言：

- 技术目录编号；
- 细线分栏；
- 编辑式纸张与卷宗标题；
- page_id / 内容状态 / evidence gate 注释；
- 普通目录说明，而非 KPI 数字或状态面板。

明确不使用：深色网格、数据看板、筛选器、KPI 卡、右对齐指标、状态仪表盘、卡片堆叠和 SaaS 控制台。

## 3. 模块顺序与视觉职责

| 编号 | 模块 | 视觉组织 | 主要目标 / page_id | 视觉 CTA | 事实与证据处理 |
|---:|---|---|---|---|---|
| 00 | 审核状态 | 顶部 26/30px Deep Navy 状态条 | 视觉阶段边界 | 无 | 明确非生产、非最终文案 |
| 01 | Header | 白底 Logo + 完整文字导航；RFQ 为唯一高强调按钮 | HOME-001、MARKET-000、PRODUCT-000、APP-000、DOC-000、RES-000、ABOUT-001、CONV-RFQ | Request a Quote | Logo 为当前视觉方向资产，不是生产文件声明 |
| 02 | Hero | A 的白色大留白 + Deep Navy 低主导 Icon 构图 | HOME-001、CONV-RFQ、PRODUCT-000 | Request a Quote / View Products | `COPY DRAFT / FACT COPY PENDING`；Icon 标 atmosphere only |
| 03 | 快速采购路径 | Hero 后单行/三列紧凑入口 | MARKET-000、PRODUCT-000、DOC-000 | Markets / Products / Documents | 不扩展为第二个 Hero |
| 04 | Markets | 浅灰背景上的四个连续市场入口，不用旗帜或旅游图 | MARKET-EU-001、MARKET-UK-001、MARKET-IN-001、MARKET-BR-EN | Explore / View All Markets | 市场事实继续受当前官方来源与证据审核 |
| 05 | Products | B 的技术采购目录；四组连续分栏，完整显示 14 个型号 ID | PRODUCT-000、两个 process page、14 grade page_id | 唯一主 CTA：View All 14 Grades | `TECHNICAL COPY PENDING`；M-2377 工艺/主应用 pending |
| 06 | Applications | 五个紧凑入口，弱图形、强 page_id | APP-COAT、APP-PLAS、APP-MB、APP-INK、APP-PAPER | Explore Applications 语义 | `PROVISIONAL URL — PAGE_ID ONLY`；Masterbatch 标 TiO₂ input |
| 07 | About / Origin | 左侧平台与证据入口摘要，右侧明确证据资产空位 | ABOUT-001 | Learn About TiO₂ Malaysia | `FACT COPY PENDING` + `VERIFIED ASSET PENDING` |
| 08 | Documents | B 的双路径技术卷宗；只显示 Hub 与受控申请 | DOC-000、CONV-DOC | View Information / Request Documents | `DOCUMENT AVAILABILITY NOT CLAIMED`；不渲染正式文件卡 |
| 09 | Resources / Buyer Answers | 两个研究路径 + 三个 GEO-ready 问题结构 | RES-000、RES-ORIGIN、RES-PROC | View Resources 语义 | RES-PROC 标 NOT LIVE；答案均标 ANSWER PENDING |
| 10 | Final RFQ | Navy 收口区 + 六项字段摘要 | CONV-RFQ | 仅 Request a Quote | 无 Sample、SLA 或响应时间承诺；流程/隐私/责任人 pending |
| 11 | Footer | Deep Navy 紧凑导航与联系/法律 pending | 顶层入口、CONTACT-001 | 导航级入口 | 联系事实与法律文案未验证 |

## 4. Header 与移动导航

### 4.1 PC

可见顺序固定为：

```text
Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote
```

Home 是第一个文字入口，Logo 不替代 Home。Request a Quote 是 Header 中唯一填充按钮。

### 4.2 Mobile

移动稿同时展示：

- Logo；
- Menu；
- 紧凑 RFQ；
- 展开菜单审核状态中的完整八项顺序。

这张视觉稿用“展开状态”证明导航完整性。正式交互仍需在实施计划中定义开关动画、焦点移动、Escape/关闭、当前页、触控区域和滚动锁定；本阶段不实现这些行为。

## 5. Products 的 14 型号发现路径

| 分组 | 数量 | 型号 ID |
|---|---:|---|
| Coatings Grades | 6 | M-350、M-510、M-896、M-996、M-2196、M-895 |
| Plastics & Masterbatch Grades | 5 | M-200、M-108、M-210、M-340、M-886 |
| Inks & Multi-Application Grades | 2 | M-52、M-2377 |
| Specialty Grade | 1 | CR-901 |
| 合计 | 14 | 14 个唯一型号 ID |

PC 四组并列显示；Mobile 四组纵向显示并呈现 expanded audit state，因此 14 个 ID 在静态审核图中全部可见。这里仍不是 14 张产品卡，也没有 14 段技术详情。

Chloride Process 和 Sulfate / Sulphate Process 只作为次级文字路径。M-2377 没有显示工艺归属或主应用结论。

## 6. GEO 内容的视觉处理

Resources 中保留三个面向采购决策的问题，以便后续形成结构明确、可引用、可核验的短答案；本稿不提前撰写事实答案：

1. What should a buyer verify when evaluating Malaysia titanium dioxide?
2. Which route supports coatings, plastics or TiO₂ input for masterbatch?
3. How does a buyer request controlled document information?

三个问题均显示 `ANSWER PENDING`。后续只有在企业证据、页面所有权和正式内容审核完成后，才可替换为公开答案；不得为了 GEO 完整度生成未经核验的企业事实。

## 7. 交互状态说明

本阶段仅表达视觉和信息状态，不实现交互。

| 组件 | 稿件中展示的状态 | 后续需要定义的状态 |
|---|---|---|
| Header 导航 | 默认；Mobile 展开菜单审核态 | hover、focus-visible、current、menu open/close、keyboard |
| CTA | 默认主/次按钮 | hover、focus-visible、pressed、disabled、loading |
| Markets | 默认连续入口 | hover/focus 与当前市场；不可依赖 hover 才出现名称 |
| Products 分组 | PC 展开；Mobile expanded audit state | accessible disclosure、`aria-expanded`、键盘操作；全部组入口始终可发现 |
| Applications | 默认入口 + page_id | 最终 URL 批准后才锁定 href 与 current state |
| Documents | 默认两路径 | 申请资格、身份、错误和成功状态由后续流程定义 |
| Buyer Answers | 问题 + pending | 只有证据通过后渲染答案；不把 pending 当折叠答案 |
| RFQ | 字段摘要 + CTA | 正式字段、校验、隐私同意、提交、错误/成功状态待实施计划 |

## 8. 素材与证据占位

### 8.1 当前允许

- `ChatGPT Image 2026年8月29日 09_37_10 (1).png`：当前横版 Logo 方向，仅作视觉方向稿使用。
- `ChatGPT Image 2026年8月29日 09_37_10 (2).png`：当前 Icon 方向，仅在 Hero 承担氛围作用。
- CSS 色块、细线、纯几何结构：只承担版式和氛围。

### 8.2 证明型资产规则

About / Origin 右侧只显示 `VERIFIED ASSET PENDING`。未来若加入制造、质检、仓储、装运、COO 或追溯相关图片，必须同时满足：

- 企业事实已验证；
- 资产权属明确；
- 获得公开授权；
- 图注与相邻文案准确；
- 不把概念图、库存图或 AI 图包装为证明。

## 9. 仍待确认事项

- 制造主体、生产地点、品牌/运营/制造关系及可公开的 Malaysia-origin 表述。
- COO、批次追溯、生产/QC/仓储/装运流程与证明资产。
- 产能、库存、MOQ、交期、包装、Incoterms、出口与技术支持能力。
- TDS、SDS、COA、COO、REACH-related 文件的版本、范围、公开状态和申请规则。
- M-2377 工艺/主应用、M-996 与 M-2196 差异及全部型号的性能依据。
- 五个 Applications 子页最终 URL。
- RFQ 字段、责任人、隐私同意、提交处理和响应规则。
- 企业地址、电话、邮箱、联系人及法律页面内容。
- PT-BR 页面策略和最终 URL。

## 10. 阶段门槛

本轮只提交整页视觉稿、说明和自检。主控审查通过前，不得制作生产代码、实施计划或部署；不得把审核预览当成生产首页。
