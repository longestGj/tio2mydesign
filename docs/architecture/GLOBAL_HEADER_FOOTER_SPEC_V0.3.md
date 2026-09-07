# TiO2 Malaysia Global Header / Footer Specification V0.3

## 1. Document Control

| Field | Value |
|---|---|
| Document ID | GLOBAL-CHROME-003 |
| Version | V0.3 |
| Date | 2026-08-31 |
| Current Status | USER_DECISION_RECORDED / DRAFT_FOR_PROJECT_CONTROL_REVIEW |
| Scope | TiO2 Malaysia 全站公开页面的 Header、Mobile Header、Mobile Menu 与 Footer |
| Candidate successor | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`；V0.3 经总控复审前，V0.2 仍是上一批准基线 |
| Historical baseline | V0.1、V0.2 保留，不覆盖、不删除 |
| User decision source | 用户于 2026-08-31 批准全站 Footer 买家可见栏目标题统一采用 `Procurement`，不再使用内部术语 `Conversion` |
| Production Logo authority | `GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` → `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Development boundary | 本规范仅定义视觉与交付合同；不授权 WordPress、Next.js、CMS、代码、测试、部署或发布 |

## 2. Decision Summary

`Request a Quote` 是全站固定的一级转化入口，不再由页面 route、inventory、market、application、document、resource、support 或其他内容可用性决定是否显示。

公开页面必须同时满足：

1. Desktop Header 固定显示 `Request a Quote`。
2. Mobile Header 固定显示紧凑 RFQ 行动。
3. Mobile Menu 固定显示 `Request a Quote` 最终行动项。
4. Footer 固定显示 Procurement / `Request a Quote` 行动。
5. Buyer Clean 正式视觉稿不得再出现 RFQ OFF、隐藏、禁用或空槽状态。
6. `/request-a-quote/` 路由或表单不可用时，视为发布阻塞，不得通过隐藏 RFQ、改链 Contact 或展示不可用按钮规避。

本决定只改变全站公共 Chrome 的 RFQ 可见性合同，不解冻任何页面正文、产品关系、市场 route、本地化、库存、文件、贸易 freshness 或技术证据门禁。

Global Chrome 的 Logo 来源现由批准的 Production Logo Addendum V1.0 统一绑定。该绑定只替代早期规范中的视觉方向 PNG 来源，不改变本规范的 Header / Footer 尺寸、导航、固定 RFQ、交互或页面正文。

## 3. Global Navigation Contract

### 3.1 Desktop Header

固定一级导航顺序：

`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`

要求：

- Header 高度、容器、Logo、字体、颜色与已批准全站视觉体系保持一致。
- `Home` 必须是可见文字链接，不能仅由 Logo 代替。
- 当前页面使用 Bold + `CURRENT` + Teal underline 三重线索，不只依赖颜色。
- `Request a Quote` 始终显示为全站批准的 accessible Teal solid terminal CTA。
- 页面正文 route-safe、资料受限或内容为空，不得影响 Header RFQ。
- Header 不允许预留 RFQ 空槽，也不允许将其替换为 Contact。

### 3.2 Mobile Header

固定结构：

`Logo | RFQ | Menu`

要求：

- RFQ 始终显示，不存在公开 RFQ OFF 变体。
- Logo、RFQ 与 Menu 的逻辑触控目标均不得小于 44px。
- 390px 画布不得发生裁切、覆盖或横向滚动。
- RFQ 必须保持可识别文本或已批准的紧凑标签，不得只用含义不明的图标。

### 3.3 Mobile Menu

固定一级导航顺序与 Desktop 一致，`Request a Quote` 为最终行动项。

要求：

- 当前页面使用 Bold + `CURRENT` + 左侧结构标记，不只依赖颜色。
- RFQ 始终存在，不因当前页面的 route-safe 或数据门禁而隐藏。
- Menu 中不得增加第二个 Contact 替代 RFQ。
- 所有导航行的逻辑触控目标不得小于 44px。

## 4. Footer Contract

Footer 延续批准的 Deep Navy 全站视觉体系，并固定包含：

1. Brand 区域。
2. Explore 导航。
3. Information 导航。
4. Procurement / `Request a Quote` 行动。
5. Copyright。

要求：

- Footer RFQ 始终显示，不存在公开 RFQ OFF 变体。
- Footer RFQ 使用批准的 global / terminal tier Teal solid 样式，与 Header terminal CTA 同属一个层级。
- Footer 不得因页面 route、inventory、support、market 或资料状态而隐藏 Procurement 区域或留下空白带。
- Contact 只有在其自身 route 已批准且 live 时才可作为普通 Information 导航项；Contact 的可用性不影响 RFQ。
- Contact 不得成为 RFQ 的失败回退、替代路径或第三种促销 CTA。

## 5. RFQ Route and Release Contract

### 5.1 Visibility

RFQ 可见性为常量：

`RFQ_VISIBILITY = ALWAYS_VISIBLE`

页面级和状态级条件不得覆盖该常量。以下条件均不得关闭 RFQ：

- route-safe 页面状态；
- 子页面 route 未验证；
- inventory 为 0；
- ItemList 为 0；
- application、market、document、resource 或 support 关系不可用；
- PT-BR、本地化、贸易 freshness 或技术证据保持冻结；
- M-2377 或其他单一型号关系保持冻结。

### 5.2 Release Precondition

发布前必须满足：

`RFQ_ROUTE_READY = true`

其含义至少包括：

- `/request-a-quote/` 使用批准的稳定 URL；
- 路由可访问；
- 表单可用；
- 必要的验证、错误、成功、隐私说明和失败处理存在；
- 上游预填字段不会造成页面错误；
- Header、Mobile Header、Mobile Menu 与 Footer 均指向同一批准入口。

若任一条件不满足，状态为：

`RELEASE_BLOCKER`

处理规则：

- 不隐藏 RFQ；
- 不禁用 RFQ；
- 不改链 Contact；
- 不把不可用按钮作为临时视觉稿；
- 不允许相关页面进入发布授权。

### 5.3 Field Contract

后续开发交付规格不得再使用 `rfq_available=false` 控制公共 Chrome。

推荐字段语义：

| Field | Contract |
|---|---|
| `rfq_visibility` | 固定 `ALWAYS_VISIBLE`，不可由 CMS 页面级覆盖 |
| `rfq_url` | 固定指向批准的 `/request-a-quote/` |
| `rfq_route_ready` | 发布前健康门禁；false 时阻止发布，不改变视觉可见性 |
| `contact_available` | 只控制普通 Contact 导航，不控制或替代 RFQ |

## 6. CTA Hierarchy

全站继续使用两层 RFQ 视觉合同：

1. **Global / terminal tier**：Header 与 Footer 的 RFQ 使用批准的 accessible Teal solid。
2. **Contextual tier**：Hero、Selector、Buyer Questions 或其他正文内 RFQ，可按已批准页面合同使用 White/Navy outline 或 Navy text link。

规则：

- Global / terminal tier 全站固定可见。
- 正文 contextual RFQ 是否显示，仍由该页面已批准的内容与证据合同决定；本规范不自动增加正文 RFQ。
- 同一层级保持一致颜色、图标政策、hover 与 focus 行为。
- 不得把两个层级压成一种通用 RFQ 样式。
- 不得增加第三种促销样式。
- Products Hero 的 `Request a Quote` 不得在填充、对比权重、尺寸、位置或强调度上等于或超过 `Find the Right Grade`。

## 7. Page-specific Impact

### 7.1 Home

- Desktop Header、Mobile Header、Mobile Menu 与 Footer 固定显示 RFQ。
- Home 正文模块与主次 CTA 合同不因本规则自动改变。

### 7.2 Product Detail Template（03）

- 所有公开状态固定显示 Global Chrome RFQ。
- 型号证据冻结只影响正文关系与声明，不影响全站 RFQ。

### 7.3 Products Hub（04 / PRODUCT-000）

- Full-route 与 route-safe 正式视觉稿均固定显示 Header、Mobile Header、Mobile Menu 与 Footer RFQ。
- route-safe 只控制正文 Process、Support、关系与其他受限模块，不得关闭 Global Chrome RFQ。
- PRODUCT V0.2.1、M-2377 与 M-996/M-2196 冻结规则保持不变。

### 7.4 Markets Hub（05 / MARKET-000）

- S0–S6 所有公开状态固定显示 Global Chrome RFQ。
- S0 可继续不显示未验证的市场、support、Trade 或正文 RFQ 行动，但不得关闭全站 RFQ。
- 22 个 route、PT-BR 与 Trade freshness 门禁保持不变。

### 7.5 Resources Hub（06 / RES-000）

- inventory=0、ItemList=0 或 route-safe 状态下，Global Chrome RFQ 仍固定显示。
- 资源、文件与 Trade freshness 门禁继续控制正文，不控制全站 RFQ。

### 7.6 Applications Hub（07 / APP-000）

- Full-route 与 route-safe 正式视觉稿均固定显示 Global Chrome RFQ。
- PRODUCT V0.2.1 关系门禁继续控制推荐内容，不控制全站 RFQ。

## 8. Required Visual States

当前正式视觉包必须覆盖：

- Desktop Header：固定 RFQ；
- Mobile Header：固定 RFQ；
- Mobile Menu Open：固定 RFQ；
- Desktop Footer：固定 RFQ；
- Mobile Footer：固定 RFQ；
- 当前页面状态；
- hover、focus 与键盘可见状态；
- 390px 无横向溢出与最小 44px 触控目标。

不得作为当前 Buyer Clean 正式资产保留：

- RFQ OFF；
- RFQ hidden；
- RFQ disabled；
- RFQ empty slot；
- Contact fallback；
- 因 route-safe 而移除 Global Chrome RFQ 的画面。

内部 QA 可以记录 `RFQ_ROUTE_READY=false = RELEASE_BLOCKER`，但不得制作成公开页面隐藏 RFQ 的候选视觉。

## 9. Cross-page Acceptance Checklist

全站统一审查必须同时通过：

1. Home 与 03–07 的 Desktop Header 均显示同一层级 RFQ。
2. Home 与 03–07 的 Mobile Header 均显示 RFQ。
3. Home 与 03–07 的 Mobile Menu 均显示 RFQ。
4. Home 与 03–07 的 Desktop/Mobile Footer 均显示 RFQ。
5. Header/Footer 的 Logo、导航顺序、当前页状态、颜色、尺寸与交互保持统一。
6. 所有正式 current manifest 中 RFQ OFF Buyer Clean 资产为 0。
7. route-safe 与资料受限状态不再改变 Global Chrome RFQ。
8. Contact fallback 命中为 0。
9. `/request-a-quote/` 未通过可用性验收时，发布状态必须为阻塞。
10. 页面正文与既有证据、关系、route、freshness、本地化门禁无意外解冻。

## 10. Governance and Execution Boundary

- 用户已批准本 V0.3 唯一语义变更：Footer 买家可见栏目标题从 `Conversion` 改为 `Procurement`。V0.3 当前只提交项目总控复审，不自行成为新的全站执行基线。
- V0.3 不改变 V0.2 已批准的固定 RFQ、Logo、Header、导航、尺寸、颜色、Footer 其他内容或交互合同。
- Home V0.7 / V0.6.1 已使用 `Procurement`，正文和其他像素不得因此改动；其他页面不得在本任务中自行重导或修改。
- 项目总控复审通过前，V0.2 继续作为上一批准共享基线；V0.1、V0.2 均保留历史追溯。
- 本规范不授权 Gate 6/7、子页、WordPress、Next.js、CMS、代码、测试、部署或发布。

## 11. Review Items

| Review ID | Decision | Status |
|---|---|---|
| GHF-D01 | V0.1 全站 Header/Footer 统一基线 | HISTORICAL_APPROVED_BASELINE |
| GHF-D02 | RFQ 在 Header、Mobile Header、Mobile Menu 与 Footer 全站固定显示；路由不可用即阻止发布 | APPROVED / CLOSED |
| GHF-D03 | Footer 买家可见栏目标题统一为 `Procurement`；内部页面体系仍可使用 Conversion 分类，不得在 Footer 暴露 | USER_APPROVED_DECISION / PENDING_PROJECT_CONTROL_REVIEW |

## 12. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-30 | 建立统一 Global Header/Footer 基线及条件式 RFQ 状态 | APPROVED_HISTORICAL_BASELINE |
| V0.2 | 2026-08-30 | 按用户决定将 RFQ 改为全站固定；删除公开 RFQ OFF；路由不可用改为发布阻塞；保持正文门禁独立 | DRAFT_FOR_USER_REVIEW |
| V0.2 / user approval | 2026-08-30 | 用户确认 V0.2 书面规范，授权首页及 03–07 仅重导 Global Chrome 视觉 | APPROVED_GLOBAL_CHROME_BASELINE |
| V0.3 | 2026-08-31 | 仅将 Footer 买家可见栏目标题由 `Conversion` 改为 `Procurement`；其余 Global Chrome 合同冻结 | USER_DECISION_RECORDED / DRAFT_FOR_PROJECT_CONTROL_REVIEW |
