# ABOUT-001 Gate 3 Desktop / 390px Wireframe Spec V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `ABOUT-001` |
| URL | `/about/` |
| Gate | Gate 3 — Wireframe |
| 版本 | `V0.1` |
| 日期 | `2026-09-01` |
| 状态 | `DRAFT_COMPLETE / SUBMITTED_FOR_GATE_3_REVIEW / NOT_APPROVED` |
| Gate 0–2 | `USER_APPROVED_2026_09_01` |
| Gate 3 授权 | `USER_AUTHORIZED_2026_09_01` |
| Gate 4–5 | `NOT_STARTED / NOT_AUTHORIZED` |
| 内容来源 | `ABOUT-001_GATE2_CONTENT_ARCHITECTURE_COPY_V0.1.md` |
| Header/Footer | Global Chrome V0.2 + Home shared V0.2 |

本文件只定义 Desktop、390px、Mobile Menu 和证据状态的结构线框。灰阶、间距和模块框只表达层级，不是 Gate 4 视觉方向或 Gate 5 完整视觉。

### 0.1 线框输出

- `ABOUT-001_GATE3_DESKTOP_WIREFRAME_V0.1.png` — 1440px Desktop 全页
- `ABOUT-001_GATE3_390PX_WIREFRAME_V0.1.png` — 390px Mobile 全页
- `ABOUT-001_GATE3_MOBILE_MENU_WIREFRAME_V0.1.png` — 390px Mobile Menu Open
- `ABOUT-001_GATE3_PARTIAL_EVIDENCE_WIREFRAME_V0.1.png` — Desktop 部分证据状态
- `ABOUT-001_GATE3_RESTRICTED_WIREFRAME_V0.1.png` — Desktop 受限状态
- `ABOUT-001_GATE3_VALIDATION_V0.1.md` — 尺寸、overflow、Header、触控、图片、RFQ 与状态验证

## 1. Gate 3 验证目标

- 十个批准模块顺序保持不变。
- Desktop Header 84px；Mobile Header 64px；About 保持一级 current state。
- Desktop、390px 和 Mobile Menu 的 Global RFQ 永久可见并指向 `/request-a-quote/`。
- Hero 使用真实 H1、真实长公司名、真实说明文字与真实按钮标签。
- 全页不需要工厂、港口、仓库、装柜、证书、团队或包装图片，不出现空媒体框。
- Why Malaysia、Documentation & Transparency、Company Facts 在视觉层级中成为三个主要信任锚点。
- 证据充足、部分证据和受限状态都能原子移除字段，不破坏版面。
- 390px 无横向滚动；按钮、菜单和可操作链接的触控区域不低于 44px。
- About 不接管 Documents 文件申请、Contact 工具或 RFQ 表单。

## 2. Desktop 线框合同

### 2.1 画布与全局结构

| 项目 | Desktop 线框值 |
|---|---|
| 参考画布 | 1440px 宽 |
| 内容最大宽度 | 1200px；左右安全区至少 40px |
| Header | 84px；Logo、固定导航、RFQ；About current |
| 主体栅格 | 12 列；正文主列 7–8 列，辅助事实/关系区域 4–5 列 |
| 正文宽度 | 长正文控制在可读行长；不让段落横跨整张 1200px |
| Footer | Deep Navy；继承批准的 Brand/Explore/Information/Conversion 分组和固定 RFQ |
| 图片 | 0 个能力图片；0 个空图片槽 |

### 2.2 Desktop 模块顺序与结构

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ HEADER 84px | Logo | Home Markets Products Applications Documents ... About │
│                                                      Request a Quote          │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO                                                                         │
│ Eyebrow                                                                      │
│ A Malaysia Titanium Dioxide Manufacturer    ┌─────────────────────────────┐   │
│ Serving Global Markets                      │ Malaysia relation diagram   │   │
│ IKHLAS TITANIUM (MALAYSIA) SDN. BHD.        │ EU · UK · India · Brazil   │   │
│ Lead + supporting line                      │ non-route disclaimer       │   │
│ [Explore Product Grades] [Request Product Information]                     │
│ Company-provided source · reviewed date                                      │
├──────────────────────────────────────────────────────────────────────────────┤
│ WHO WE ARE | short narrative + four compact support statements               │
├──────────────────────────────────────────────────────────────────────────────┤
│ WHY MALAYSIA MATTERS                                                         │
│ Intro                                                                         │
│ [Broader sourcing mix] [Supply-chain planning]                               │
│ [Market coordination] [Malaysia-based operations]                            │
│ Qualification line + Markets link                                             │
├──────────────────────────────────────────────────────────────────────────────┤
│ WHAT WE DO | four equal functional cards                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│ MARKETS WE SERVE | EU | UK | India | Brazil                                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ APPLICATIONS WE SUPPORT | five concise application rows                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ HOW WE WORK | four numbered principles                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ DOCUMENTATION & PRODUCT TRANSPARENCY                                          │
│ Intro + document list                         qualification + two CTAs         │
├──────────────────────────────────────────────────────────────────────────────┤
│ COMPANY FACTS | two-column fact table + company-provided source line          │
├──────────────────────────────────────────────────────────────────────────────┤
│ FINAL CTA | Discuss Your Titanium Dioxide Requirements                        │
│ [Request Product Information] [Talk to Our Team]                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ DEEP NAVY FOOTER | shared navigation + Request a Quote                        │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Desktop 关键布局决定

- Hero 左右比例约 7:5；右侧关系图是信息结构，不是摄影图或路线承诺。
- H1 保持两到三行；运营主体全称独立成行并允许换行，不能缩成脚注。
- Hero CTA 与来源行都留在首屏逻辑内；来源行不藏入 tooltip。
- Who We Are 不设置时间线或历史年表，只用短正文和四个支持范围。
- Why Malaysia 用 2×2 卡片；资格限定横跨卡片下方，避免每卡重复小字。
- What We Do 用四卡等权结构；Documentation 与 Logistics 卡不得出现证书、盾牌、工厂或船舶图标。
- Markets 用四列；不绘制真实航线、距离、运价或交期。
- Applications 用五项两列或三列自适应列表；不出现型号推荐。
- How We Work 使用 1–4 顺序结构，但不画成生产/QC/批次追溯流程。
- Documentation 与 Company Facts 采用较高信息密度，成为页面后半段的信任锚点。
- Company Facts 的地址、公司名和来源行允许自然换行；不使用省略号。
- Final CTA 不嵌表单；Header/Footer RFQ 继续永久显示。

## 3. 390px 线框合同

### 3.1 画布与全局结构

| 项目 | 390px 线框值 |
|---|---|
| 参考宽度 | 390px；同时不得破坏 320px 最低支持宽度 |
| Mobile Header | 64px；`Logo | RFQ | Menu` |
| 内容内边距 | 20px 方向值；任何内容不得触碰屏幕边缘 |
| 栅格 | 单列；仅 Markets / Applications 的短标签允许两列，空间不足时回单列 |
| CTA | 默认纵向堆叠；每个目标高度 ≥44px |
| Footer | 单列分组；RFQ 永久显示 |
| 横向滚动 | 0 |

### 3.2 390px 模块顺序

```text
┌──────────────────────────────┐
│ MOBILE HEADER 64px           │
│ Logo      RFQ        Menu    │
├──────────────────────────────┤
│ ABOUT TIO2 MALAYSIA          │
│ A Malaysia Titanium Dioxide  │
│ Manufacturer Serving Global  │
│ Markets                      │
│                              │
│ IKHLAS TITANIUM (MALAYSIA)   │
│ SDN. BHD.                    │
│ Lead + supporting line       │
│ [Explore Product Grades]     │
│ [Request Product Information]│
│ Source · reviewed date       │
│                              │
│ Malaysia                     │
│ EU · UK · India · Brazil     │
│ non-route disclaimer         │
├──────────────────────────────┤
│ WHO WE ARE                   │
│ short copy + 4 stacked rows  │
├──────────────────────────────┤
│ WHY MALAYSIA MATTERS         │
│ 4 stacked decision cards     │
│ qualification + link         │
├──────────────────────────────┤
│ WHAT WE DO                   │
│ 4 stacked cards              │
├──────────────────────────────┤
│ MARKETS | 4 stacked cards    │
├──────────────────────────────┤
│ APPLICATIONS | compact list  │
├──────────────────────────────┤
│ HOW WE WORK | 1–4 rows       │
├──────────────────────────────┤
│ DOCUMENTATION                │
│ list + limitation + 2 CTAs   │
├──────────────────────────────┤
│ COMPANY FACTS                │
│ label above value per row    │
├──────────────────────────────┤
│ FINAL CTA                    │
│ 2 stacked actions            │
├──────────────────────────────┤
│ MOBILE FOOTER                │
└──────────────────────────────┘
```

### 3.3 390px 关键决定

- H1 使用真实文本，预计四行；不压缩字号、不截断。
- 长公司名预计两到三行，与 H1 分开，确保实体关系可读。
- Hero CTA 紧跟正文，不在按钮后留下装饰性大空白；关系图自然位于 CTA/来源之后。
- 关系图在移动端改为 Malaysia 主节点 + 四个文字节点的紧凑网格，不画交叉线。
- 所有四卡模块改为单列；顺序与 Desktop 一致。
- Company Facts 从双列表格改为“标签在上、值在下”的堆叠事实行；地址不得横向滚动。
- 来源和更新时间保持可见，最低仍为正文辅助字号，不放入折叠区。
- 任何省略字段直接删除对应事实行，不显示 `—`、`pending` 或空卡。

## 4. Mobile Menu Open 线框

```text
┌──────────────────────────────┐
│ Logo                Close ×  │ 64px
├──────────────────────────────┤
│ Home                         │ ≥44px
│ Markets                      │ ≥44px
│ Products                     │ ≥44px
│ Applications                 │ ≥44px
│ Documents                    │ ≥44px
│ Resources                    │ ≥44px
│ About   CURRENT              │ ≥44px + left marker
│                              │
│ [Request a Quote]            │ ≥44px, terminal CTA
└──────────────────────────────┘
```

- 顺序与 Desktop 完全一致，不新增或删除一级项。
- About 使用 Bold + `CURRENT` + 左侧结构标记；不能只靠颜色。
- RFQ 在菜单底部永久显示并指向 `/request-a-quote/`。
- Open 后焦点进入 Close；随后按视觉顺序遍历导航与 RFQ；关闭后焦点返回 Menu。
- Escape 可关闭；背景内容不可获得焦点。

## 5. 证据状态线框

### 5.1 Evidence Sufficient

- 显示 Taiping manufacturing site、Malaysia origin、annual supply、30+ countries、200+ customers、包装、quality control、REACH/FDA-related document support、Port Klang/FCL/LCL。
- 每个相关事实区保留 company-provided 来源、日期和适用范围。
- Schema 只复述同屏可见字段。

### 5.2 Evidence Partial

示例：年度供应、国家数、客户数暂时撤回，但 manufacturing/origin、包装、documents 和 export coordination 仍可见。

- Hero 结构不变；只删除受影响的规模表述。
- Company Facts 删除三行 scale metrics；后续行上移，不保留空位。
- Why Malaysia 和 What We Do 仍显示已获批准的子字段。
- 来源行继续存在，并描述当前仍显示字段的来源范围。

### 5.3 Evidence Restricted

示例：只保留品牌、运营主体关系、页面职责、owner 导航和中性采购评估框架。

- Hero 删除 manufacturer/location/origin/export 句子，H1 改用经批准的受限版本：`About TiO2 Malaysia`；不得为 primary keyword 强写未经支持的事实。
- 删除关系图、company scale metrics、manufacturing site、origin、quality、Port Klang、FCL/LCL 和 document availability claim。
- Why Malaysia 只保留不归因于公司的采购评估解释。
- What We Do 只保留信息架构与 owner 导航，不声称当前能力。
- Company Facts 只保留 Brand 与 Operating company；无空字段。
- Header、Footer、Global RFQ、Products/Markets/Applications/Documents/Contact owner 路径保持。

## 6. Focus、Hover 与键盘顺序

### Desktop 顺序

`Logo → Home → Markets → Products → Applications → Documents → Resources → About → Header RFQ → Hero CTA 1 → Hero CTA 2 → content links in document order → Final CTA 1 → Final CTA 2 → Footer links → Footer RFQ`

### 390px 页面顺序

`Logo → Header RFQ → Menu → Hero CTA 1 → Hero CTA 2 → content links → Final CTA 1 → Final CTA 2 → Footer links → Footer RFQ`

### 状态要求

- 文字链接 hover 使用下划线或结构变化，不只使用颜色。
- 按钮 hover 保持标签、尺寸和位置不变。
- Focus-visible 为清晰的 2px 以上外轮廓方向值，与背景有足够对比，不被 overflow 裁切。
- About current 不是链接禁用状态；仍可聚焦和激活。
- 所有核心信息不依赖 hover 才可见。

## 7. Header / Footer 与发布依赖

- Desktop Header 84px；Mobile Header 64px；Desktop/Mobile Header、Mobile Menu、Desktop/Mobile Footer 的 Request a Quote 永久显示。
- 所有 RFQ 指向 `/request-a-quote/`；不得出现 RFQ OFF、hidden、disabled、empty slot 或 Contact fallback。
- Footer 使用已批准的 Deep Navy 结构；本页不得改变 Footer 分组、栏目或顺序。
- `RFQ_ROUTE_READY=false`、About route 或下游 owner route 不可用只形成 `RELEASE_BLOCKER`；不改变正式 Buyer Clean 线框。

## 8. Gate 3 自检

- [x] Desktop 1440 逻辑与 390px 单列线框均已定义。
- [x] Desktop 84px、Mobile 64px、About current、固定 RFQ、Deep Navy Footer 已继承。
- [x] Mobile Menu Open 顺序、current、Close、RFQ 和焦点行为已覆盖。
- [x] 十模块顺序与 Gate 2 批准稿一致。
- [x] Why Malaysia、Documentation、Company Facts 为三个主要信任锚点。
- [x] 长 H1、长公司名、长地址和来源行使用真实长度验证。
- [x] 无能力图片、无空媒体槽、无生成/图库替代、无工厂图标/认证徽章。
- [x] Evidence sufficient、partial、restricted 状态均可原子重排。
- [x] 390px 按钮/菜单目标 ≥44px，CTA 堆叠，无横向滚动。
- [x] Focus、hover、键盘顺序已定义。
- [x] About 未接管 Documents、Contact、RFQ 或其他页面职责。
- [x] Gate 4–5 未开始，未创建开发交付或代码。

## 9. Gate 3 审查请求

请用户/总控决定：

1. 是否批准 Desktop Hero 7:5 结构和无摄影关系图。
2. 是否批准 390px Hero 的 CTA → 来源 → Malaysia/markets 关系图顺序。
3. 是否批准 Why Malaysia、Documentation、Company Facts 的信任权重。
4. 是否批准 Evidence Partial 与 Restricted 的原子移除行为。
5. 是否批准 Mobile Menu、focus/hover 与 Global Chrome 继承。
6. Gate 3 通过后，是否单独授权进入 Gate 4 视觉方向；本提交不请求 Gate 5 授权。
