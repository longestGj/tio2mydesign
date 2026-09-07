# ABOUT-001 Gate 4 Visual Direction V0.1

## 0. 文档控制

| 字段 | 记录值 |
|---|---|
| Page ID | `ABOUT-001` |
| URL | `/about/` |
| Gate | Gate 4 — Visual Direction |
| 版本 | `V0.1` |
| 日期 | `2026-09-01` |
| 状态 | `DRAFT_COMPLETE / SUBMITTED_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Gate 0–3 | `USER_APPROVED_2026_09_01` |
| Gate 4 授权 | `USER_AUTHORIZED_2026_09_01` |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` |
| Visual Baseline | `TiO2_Malaysia_Visual_Standard_V1.0.md` |
| Global Chrome | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` + Home shared V0.2 |
| Wireframe | `ABOUT-001_GATE3_DESKTOP_390_WIREFRAME_SPEC_V0.1.md` |

本文件确定视觉语言和关键样本，不是 Gate 5 完整页面视觉。十模块完整画面、全部状态、最终像素和所有交互组合仍留给 Gate 5。

## 1. 方向命名与核心判断

### Direction Name

`Evidence-Led Industrial`

### One-line Direction

以白色和 Navy 建立国际工业材料公司的权威感，以 Teal 标记 Malaysia 身份、来源和行动；用可见事实、来源行、结构化关系和克制的数据表达信任，不依赖工厂照片、认证徽章或夸张 KPI。

### Desired Impression

`Premium International Industrial B2B Supplier + Malaysia Supply Identity + Technical Credibility`

### Explicitly Not

- 中国化工模板站
- Alibaba 供应商主页
- SaaS Startup 页面
- Malaysia 旅游宣传页
- 国旗墙、港口海报或航线宣传图
- “20 years / leading manufacturer / certified quality”式未经证据支持的传统外贸表达

## 2. Visual Standard 继承与局部优先级

### 2.1 全站品牌色

| Token | Value | About 使用 |
|---|---|---|
| Primary Navy | `#062B5B` | H1/H2、重要事实值、正文行动主色 |
| Deep Navy | `#031B3A` | Footer、终段信任背景、少量高对比区域 |
| Malaysia Teal | `#00A99D` | Eyebrow、section number、链接、关系节点、source marker |
| Accent Teal | `#14B8A6` | Body link hover、轻量关系图辅助；不作大面积背景 |
| White | `#FFFFFF` | 页面主背景与卡片 |
| Soft Background | `#F5F8FB` | Hero、Company Facts、交替 section |
| Border Gray | `#D9E2EC` | 卡片、事实行、表格和分隔线 |
| Body Text | `#334155` | 正文、说明和限定语 |

### 2.2 Global Chrome 更高优先级色

Header/Footer 的 terminal RFQ 直接继承 Home shared V0.2：

- Default `#007F77`
- Hover `#006E68`
- Focus 3px 非纯颜色外轮廓

Body 内的 `Explore Product Grades`、`Request Product Information` 等上下文 CTA 不使用 terminal RFQ 的视觉层级。正文主行动使用 Navy solid，次行动使用 White/Navy outline。

### 2.3 色彩比例

- White / near-white：约 66%
- Primary/Deep Navy：约 17%
- Teal：约 8%
- Soft Background：约 7%
- Border/neutral：约 2%

Teal 只承担定位、状态与行动，不形成蓝绿渐变大背景。

## 3. Typography Direction

| Element | Desktop | 390px | Weight | Color |
|---|---:|---:|---:|---|
| Hero H1 | 56px / 1.08 | 38px / 1.12 | 700 | Primary Navy |
| H2 | 40px / 1.15 | 30px / 1.2 | 700 | Primary Navy |
| H3 / card title | 21px / 1.35 | 19px / 1.35 | 600 | Primary Navy |
| Body lead | 18px / 1.65 | 17px / 1.6 | 400 | Body Text |
| Body | 16px / 1.65 | 16px / 1.6 | 400 | Body Text |
| Navigation | 15px | 16px menu | 500–600 | Primary Navy / white on footer |
| Eyebrow / source | 14px / 1.5 | 14px / 1.5 | 500 | Teal / Body Text |

- Font family：Inter。
- H1 长标题在 Desktop 允许 2–3 行，在 390px 允许 4–5 行。
- `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` 不作为小字免责声明；以 16–18px 视觉实体行呈现并自然换行。
- 来源、更新时间和 company-provided 限定不得小于 14px，不藏入 tooltip。

## 4. Layout and Rhythm

### Desktop

- 1440px 参考画布，正文 max-width 1200px。
- Hero 为 7:5 两列；主文案左，Malaysia/markets 关系图右。
- 标准 section 上下留白 96–120px；密集信息 section 72–88px。
- Why Malaysia、Documentation、Company Facts 形成强弱交替的三个信任锚点。
- 不为“高级感”制造空洞的超高 section；每段留白必须服务层级或阅读。

### 390px

- 内容左右 20px；Header 64px。
- H1、运营主体、正文、CTA、source row、关系图按批准线框顺序堆叠。
- 所有卡片单列；按钮目标至少 44px，主要 CTA 在 390px 默认满宽。
- Company Facts 使用 label-over-value；长地址自然换行。
- 关系图去掉交叉线，只保留 Malaysia 节点与四市场文字矩阵。

## 5. Surface and Card Language

### 5.1 Standard Card

- White background
- 1px Border Gray
- 12px radius
- 非常轻的阴影，只用于与 Soft Background 分离
- Padding：Desktop 28–32px；390px 22–24px
- Hover：上移 2px + border 变为浅 Teal；不放大、不旋转

### 5.2 Trust Anchor Surface

Why Malaysia、Documentation 和 Company Facts 不使用完全相同的卡片模板：

- Why Malaysia：White 页面背景 + 四张 equal cards + Teal section index。
- Documentation：Soft Background + 两列文档/限定内容 + Navy primary action。
- Company Facts：White/Soft alternating rows + 细分隔线；规模数据保持在事实表内，不做首屏夸张 counter。

### 5.3 What We Do

四张功能卡使用 `01–04` 序号替代图标。这样既保留工业秩序感，也避免 Factory、Certificate、Shipping icon 暗示未经独立验证的能力。

## 6. Hero Visual Direction

### Background

Soft Background `#F5F8FB`，允许非常轻的 Navy-to-transparent 线性纹理，但不使用渐变光效、粒子或照片。

### Left Column

- Teal eyebrow
- Navy H1
- 运营主体完整名称
- Body Text lead
- Navy solid contextual CTA + White/Navy outline secondary CTA
- 可见 source row

### Right Column

`Malaysia Supply Relationship` 非地图式信息图：

- Malaysia 为 Teal 主节点
- European Union、United Kingdom、India、Brazil 为 Navy 文本节点
- 1px Border Gray 结构线
- 右下显示 `Priority website markets · Not fixed shipping routes`
- 不使用国旗、世界地图轮廓、飞机/船舶/集装箱 icon 或发光线路

## 7. Documentation Visual Language

- 文件类型以纯文字缩写或简洁 file row 表示：TDS、SDS、COA、COO、REACH/FDA-related。
- 不使用 Verification Badge、Certification Badge、盾牌或证书缩略图。
- `where applicable` 与 grade/market/transaction 限定必须同屏。
- Documents 和 Request Documents CTA 分层：前者为内容入口，后者为受控申请入口。
- Batch traceability、ISO 和认证 QMS 不出现在可见样本中。

## 8. Company Facts and Source Treatment

### Facts

- Desktop 两列；390px 单列。
- Label 使用 Body Text 的较浅层级；value 使用 Navy/Body Text 500。
- 年度供应、出口覆盖和客户数明确标注 `Company-reported`。
- 不用 animated counter、超大数字或独立“verified”标记。

### Source Row

统一结构：

`● Company-provided information · Source: mytio2.com · Reviewed 1 September 2026`

- 圆点为 Teal，纯装饰且不表示第三方验证。
- source row 与其支持的事实块相邻。
- Partial 状态更新 source row 范围；Restricted 状态不保留失去支持对象的来源行。

## 9. CTA Hierarchy

| Tier | Use | Default | Hover | Focus |
|---|---|---|---|---|
| Global terminal | Header/Footer RFQ | Accessible Teal solid | Darker Teal | 3px visible outline |
| Contextual primary | Explore Product Grades / View Document Support | Navy solid | Primary Navy darken | 3px Teal/Navy contrast outline |
| Contextual secondary | Request Product Information / Request Documents / Talk to Our Team | White + Navy border | Soft Background | 3px visible outline |
| Text link | Markets/Applications/owner routing | Navy text + Teal underline on hover | underline | visible outline |

- Button radius 7px，禁止 pill。
- Label 不因 hover/focus 移动。
- About current 保持 Bold + CURRENT + Teal underline/左侧标记。

## 10. Evidence State Visual Rules

### Sufficient

显示批准事实、source row 和适用范围；Teal 只标记结构，不作为 verified badge。

### Partial

删除受影响事实行，网格自动收拢；不显示灰色空卡、`—`、blur 或 pending chip。剩余 source row 只说明仍显示字段。

### Restricted

- H1 使用 `About TiO2 Malaysia`。
- Hero 取消关系图，改为较窄的身份版式。
- Company Facts 只保留 Brand 与 Operating company。
- 不使用警告色或错误页面样式；这仍是正常可阅读的受限页面。
- Global RFQ、owner links 和 Deep Navy Footer 保持。

## 11. Motion and Interaction Direction

- Card hover：120–180ms，translateY -2px。
- Button background/border：120–180ms。
- Navigation underline：120–180ms。
- 不使用首屏数字动画、自动播放地图、循环线条、3D、parallax 或大面积 fade cascade。
- `prefers-reduced-motion` 下移除位移，仅保留颜色/边框状态。

## 12. Accessibility Direction

- 正文与背景达到 WCAG AA；关键文字不使用低对比灰。
- Focus-visible 外轮廓至少 3px，不被 card overflow 裁切。
- 390px 所有目标至少 44×44px。
- 当前项、source/限制、事实状态不只靠颜色表达。
- 关系图提供文本说明；不把关键事实放进装饰图形。
- 无图片，因此本页 Gate 4 不产生暗示性 ALT；未来如改变资产范围必须重新过证据门禁。

## 13. Gate 4 Key Specimens

Gate 4 只输出关键样本，不拼成完整 Gate 5 页面：

1. Desktop：Global Header + Hero + Why Malaysia + source treatment。
2. 390px：Mobile Header + Hero + CTA + source row + compact Malaysia/markets relationship。
3. Trust System：Documentation、Company Facts、source row、company-reported metrics。
4. Interaction：Global terminal RFQ、contextual primary/secondary、text link、hover/focus/current。

正式样本：

- `ABOUT-001_GATE4_DESKTOP_DIRECTION_V0.1.png`
- `ABOUT-001_GATE4_390PX_DIRECTION_V0.1.png`
- `ABOUT-001_GATE4_TRUST_SYSTEM_V0.1.png`
- `ABOUT-001_GATE4_INTERACTION_STATES_V0.1.png`
- `ABOUT-001_GATE4_VALIDATION_V0.1.md`

## 14. Gate 4 Redlines

- 不引入能力照片、生成图或图库图。
- 不使用 Factory、Certificate、Shield、Port、Container、Ship icon。
- 不使用 ISO/REACH/FDA/COO badge；文件名只作为文档支持信息。
- 不做巨大 KPI、国旗墙、发光地图、旋转地球或科技蓝渐变。
- 不改变 Header/Footer、导航顺序、About current、RFQ 固定规则。
- 不改变 Gate 2 文案或 Gate 3 模块顺序。
- 不开始 Gate 5 全页完整视觉。

## 15. Gate 4 Review Request

请用户/总控决定：

1. 是否批准 `Evidence-Led Industrial` 作为 About 页视觉方向。
2. 是否批准 Soft Background Hero + 无摄影关系图。
3. 是否批准 Why Malaysia、Documentation、Company Facts 的三种差异化 trust surfaces。
4. 是否批准 Navy contextual CTA 与 Teal terminal RFQ 的双层视觉合同。
5. 是否批准 source row 和 company-reported facts 的视觉层级。
6. 是否批准 Desktop/390px 与 interaction specimens，并在批准后单独授权 Gate 5。

