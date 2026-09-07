# TiO2 Malaysia Global Header / Footer Specification V0.1

## 1. Document Control

| Field | Value |
|---|---|
| Document ID | `GLOBAL-CHROME-001` |
| Version | `V0.1` |
| Date | `2026-08-30` |
| Current Status | `APPROVED_GLOBAL_CHROME_BASELINE` |
| User Approval | `2026-08-30`；用户明确确认本书面规格 |
| Scope | Home、14个产品详情页统一模板、Products Hub、Markets Hub、Resources Hub、Applications Hub，以及以后所有 TiO2 Malaysia 页面 |
| Site Scope | `tio2-my` |
| Project Boundary | 只定义视觉、内容、SEO/GEO 内链、响应式与开发交付规格；不修改 WordPress、Next.js、CMS、代码、测试、部署或发布 |

本规格统一全站公共 Header、Mobile Menu 和 Footer。它不改变任何页面的 Page ID、URL、主关键词、页面职责、正文模块、证据门禁、Schema 页面类型或已批准产品关系。

本轮现有页面主体视觉不重做。既有页面只替换公共首尾，并补充必要的 Header/Footer 状态画面。

## 2. Authority and Inputs

本规格必须同时遵守以下当前基线：

1. `D:\23MySec\AGENTS.md`
2. `D:\23MySec\docs\prd\TiO2_Malaysia_Website_PRD_V0.4.md`
3. `D:\23MySec\docs\architecture\PAGE_REGISTRY_V0.1.md`
4. `D:\23MySec\brand\visual\TiO2_Malaysia_Visual_Standard_V1.0.md`
5. 各页面最新已批准的 Brief、内容架构、视觉方向与 Gate 5 页面主体成果

发现冲突时，用户最新明确决定优先。本规格不得解冻事实、route、localization、freshness、M-2377 或 M-996/M-2196 比较门禁。

## 3. Review Findings Being Corrected

当前视觉中存在以下跨页冲突：

- Header 使用完整图片 Logo、文字 Logo、圆形加号 Logo和另一套圆形 TiO2 Logo等多个版本。
- 03 产品详情原型的 Desktop 导航缺少 Home、Resources、About，并额外增加 Process；Mobile 缺少 Menu 和 RFQ。
- Mobile Header 同时存在 `Menu + RFQ`、`RFQ + Menu`、`Request Quote + Menu` 等排列和标签。
- 当前页状态同时存在无标识、仅颜色、仅下划线、`CURRENT + 下划线` 等多种表现。
- 首页 Header RFQ 使用 Navy，其他页面主要使用 Teal。
- Footer 同时存在深色多栏、深色原型声明、浅色单行、浅色目录、深色页面内锚点和浅色极简等结构。
- 首页 Footer 出现未登记的 `Privacy`、`Terms`，03 Footer 出现内部原型声明，Resources Footer 混入页面内锚点。

这些差异属于公共组件问题，不要求重开各页面 Gate 1–4，也不要求重做页面主体。

## 4. Global Header Contract

### 4.1 Brand Asset

- Header 和 Footer 必须引用同一个全站品牌资产键：`brand_logo_primary_horizontal`。
- 当前视觉修订阶段统一引用：`D:\23MySec\brand\visual\ChatGPT Image 2026年8月29日 09_37_10 (1).png`。
- 该 PNG 只具有 `CURRENT_VISUAL_DIRECTION_ASSET` 地位，不是最终生产 Logo。
- 开发交付前必须以同一构图的固定 SVG 替换，不能由各页面自行生成或重画 Logo。
- Logo 可见内容固定为 Symbol + `TiO2` Wordmark + `MALAYSIA` 辅助字。
- Logo 的可访问名称固定为 `TiO2 Malaysia`；点击目标固定为 Home。
- 禁止文字 Logo、页面专属 Logo、`PRODUCT TEMPLATE` 副标题和不同 Symbol 版本进入 Buyer Clean 视觉稿。

### 4.2 Desktop Header

| Property | Contract |
|---|---|
| Canvas reference | 1440px Desktop |
| Header height | 84px |
| Content width | 1200px，左右各约120px |
| Background | White |
| Bottom rule | 1px `#D9E2EC` |
| Logo display width | 180px；允许170–210px |
| Font | Inter |
| Navigation size | 14–16px，Weight 500–600 |
| Primary CTA | Teal solid `#00A99D` 或满足 WCAG AA 的已批准深 Teal，White text，6–8px radius |
| Touch/click target | 高度至少44px |

Desktop 导航顺序固定为：

`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`

规则：

- Home 必须是可见文字链接，不能只由 Logo 代替。
- 不得加入 `Process`、`Company`、Legal/Privacy 占位或页面内锚点。
- `Request a Quote` 是唯一 Header 主按钮；不得使用 Navy 作为默认主 CTA。
- `RFQ_AVAILABLE=false` 时，完整移除该按钮且不保留空槽；其他七项导航顺序不变。
- Breadcrumb 独立位于 Header 下方，不属于 Header 组件。

### 4.3 Current-page State

当前页必须同时使用三个不依赖颜色的线索：

1. 字重提升至 700–800；
2. 可见 `CURRENT` 小标签；
3. 3px Teal 结构性下划线。

同时设置 `aria-current="page"`。Home 使用相同规则；产品详情页把 `Products` 标记为当前项。Footer 不显示当前页状态。

### 4.4 Mobile Header

| Property | Contract |
|---|---|
| Reference viewport | 390px |
| Header height | 64px |
| Horizontal padding | 16px |
| Logo display width | 112–128px |
| Action order | `Logo | RFQ | Menu` |
| RFQ label | `RFQ` |
| Menu label | `Menu`；展开后为 `Close` |
| Target size | 每个按钮至少44×44px |

规则：

- `RFQ_AVAILABLE=false` 时，RFQ按钮和其间距一起移除，Menu 保持最右。
- 不使用 `Request Quote`、`Request a Quote` 等其他 Mobile Header 标签。
- 不允许 Header 下方因条件按钮移除而出现空白带。
- 03 产品详情模板不得只显示 Logo；必须继承同一 Mobile Header。

### 4.5 Mobile Menu Open

Mobile Menu 使用 Deep Navy 背景，文字顺序固定为：

`Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`

- `Request a Quote` 只在 `RFQ_AVAILABLE=true` 时显示并位于末项。
- 当前页使用：Bold + 左侧4px Teal结构标记 + `CURRENT` 文本。
- Menu Open 必须分别提供 RFQ ON 与 RFQ OFF 两种状态。
- 390px 下不得横向滚动；全部行至少44px高；键盘焦点必须可见。

## 5. Global Footer Contract

### 5.1 Visual Structure

所有页面统一使用 Deep Navy Footer，不允许页面自行使用浅色单行 Footer。

| Property | Desktop | Mobile 390px |
|---|---|---|
| Background | `#031B3A` | `#031B3A` |
| Content width | 1200px | 358px |
| Layout | 4栏 + bottom bar | 单列品牌 + 两列链接 + 条件RFQ + bottom bar |
| Body/link size | 至少14px | 至少14px |
| Link target | 至少44px高或等效可点击区域 | 至少44px高 |
| Top/bottom spacing | 48–64px | 32–48px |

### 5.2 Desktop Columns

1. **Brand**
   - `brand_logo_primary_horizontal` 的深色背景版本。
   - 统一中性说明：`A focused titanium dioxide purchasing platform for international industrial buyers.`
2. **Explore**
   - Home
   - Markets
   - Products
   - Applications
3. **Information**
   - Documents
   - Resources
   - About
   - Contact（仅当已批准且 live）
4. **Conversion**
   - `Request a Quote` Teal solid（仅当 `RFQ_AVAILABLE=true`）

Bottom bar 固定显示：`© 2026 TiO2 Malaysia.`

### 5.3 Footer Route Rules

- 只允许登记册中已存在、已批准且符合当前公开门禁的目标。
- `Privacy`、`Terms`、`Legal` 当前未登记，不得渲染为链接或占位。
- `Company` 不建立独立目标；公司与主体信息统一指向 About。
- 不显示 03 原型中的 `Local design and interaction review only`、`No production data or enquiries are transmitted` 等内部文字。
- 不把 `Research paths`、`Buyer questions` 或其他页面内锚点放入 Global Footer。
- 不显示14个型号、国家列表或关键词堆砌链接。
- Footer 的 RFQ 只依赖全站统一 `RFQ_AVAILABLE`，不得增加页面专属第二条件。
- RFQ OFF 时完整移除 Conversion CTA，不保留空卡、分隔线或大段空白。

### 5.4 Relationship to Page-terminal Modules

- Final RFQ 是页面内容模块；Global Footer 是全站组件，两者不得合并。
- 有 Final RFQ 时，顺序固定为 `Final RFQ → Global Footer`。
- 没有 Final RFQ 时，上一公开模块以正常48–64px终止间距进入 Global Footer。
- 产品详情页继续在 Sample 模块后直接进入 Global Footer，不新增页内 RFQ 表单或 Final RFQ。

## 6. Shared State Matrix

| State | Header RFQ | Mobile Menu RFQ | Footer RFQ | Required closure |
|---|---:|---:|---:|---|
| `RFQ_ON` | Render | Render | Render | 三处同步出现 |
| `RFQ_OFF` | 0px | 0px | 0px | 无空槽、无空按钮带 |

| Page | Desktop current item | Mobile current item |
|---|---|---|
| Home | Home | Home |
| Product detail template / 14 Grade pages | Products | Products |
| PRODUCT-000 | Products | Products |
| MARKET-000 | Markets | Markets |
| RES-000 | Resources | Resources |
| APP-000 | Applications | Applications |

## 7. Per-page Revision Scope

### 7.1 Home

- 从 V0.3 复制建立下一版本，不覆盖 V0.3。
- 保留全部页面主体、模块顺序和正文。
- Header CTA 改为 Teal；Home 增加统一当前页状态；Mobile 改为 `Logo | RFQ | Menu`。
- Footer 改为本规格的 Deep Navy 统一结构；移除 Company、Privacy、Terms；Contact 服从 route 门禁。

### 7.2 03 Product Detail Template

- `D:\16Wordpress_nextjs` 中的旧 M-350 原型只作只读问题证据，不作为当前视觉基线，不得修改。
- 在 `D:\23MySec` 建立新的产品详情公共首尾视觉证明。
- 移除旧原型状态条、`PRODUCT TEMPLATE` Logo、错误导航和内部 Footer 声明。
- Desktop/Mobile 均继承本规格；Products 为当前项；页面仍在 Sample 后进入 Global Footer。
- 产品正文、技术字段、M-2377 和 M-996/M-2196 门禁不在本轮修改。

### 7.3 PRODUCT-000

- Gate 5 已批准的页面主体继续有效，不重做 Selector、Process、All Grades、Buyer Questions或关系状态。
- 只重导出含新 Header/Footer 的 Desktop Full/Route-safe 与 Mobile Full/Route-safe 完整页。
- Products 当前状态、RFQ ON/OFF 和 Mobile Menu ON/OFF 必须与共享合同一致。

### 7.4 MARKET-000

- 不改变 S0–S6、EU披露、Trade、PT-BR或22个route门禁。
- 只替换 Header/Footer；Markets 为当前项。
- S0 使用 RFQ OFF；S6 使用 RFQ ON；两者 Footer 结构相同，只差条件 CTA。

### 7.5 RES-000

- 不改变 inventory=0、Trade freshness、Resources卡片或Buyer Questions。
- 只替换 Header/Footer；Resources 为当前项。
- 当前 route-safe 主稿继续 RFQ OFF。
- 从 Global Footer 移除 `Research paths`、`Buyer questions` 页面内锚点。

### 7.6 APP-000

- 不改变25条 Application、13个明确 Process、M-2377和M-996/M-2196边界。
- 只替换 Header/Footer；Applications 为当前项。
- Mobile Header 使用 `RFQ`，不使用 `Request Quote`。
- Full/Route-safe 的 RFQ ON/OFF 继续同步闭合。

## 8. Required Visual Deliverables

建立一张共享公共组件状态板，至少包括：

1. Desktop Header — RFQ ON；
2. Desktop Header — RFQ OFF；
3. Desktop 当前页状态；
4. Mobile Header — RFQ ON；
5. Mobile Header — RFQ OFF；
6. Mobile Menu Open — RFQ ON；
7. Mobile Menu Open — RFQ OFF；
8. Desktop Footer — RFQ ON；
9. Desktop Footer — RFQ OFF；
10. Mobile Footer — RFQ ON；
11. Mobile Footer — RFQ OFF；
12. 键盘 focus、200% zoom、长导航文本和无最终 Logo SVG时的设计资产标识。

每个页面任务只需重导出其现有 Desktop/Mobile完整页，证明公共首尾已替换且页面主体未发生非授权变化。

## 9. SEO, GEO and Accessibility

- Header/Footer 链接文字必须与页面登记册可见名称一致。
- 不把 Footer 当作关键词列表，不新增主关键词或跨页事实关系。
- Breadcrumb、Canonical、Schema和页面正文实体关系不因本轮改变。
- Header/Footer 的机器可读导航不得指向页面上不存在或未批准的目标。
- Logo alt 固定为 `TiO2 Malaysia`；装饰性图形使用空 alt。
- 当前项使用 `aria-current="page"`。
- Menu、Close和RFQ都有可访问名称；focus样式不只依赖颜色。
- Desktop与390px均不得横向滚动；按钮后不得出现大段无意义空白。

## 10. Development Handoff Boundary

视觉修订完成后只输出共享组件字段与行为规格：

- `site_scope=tio2-my`
- `brand_logo_primary_horizontal`
- `current_page_id`
- `rfq_available`
- `contact_available`
- 固定导航目标键

WordPress/Next.js开发项目负责共享组件、路由、查询、缓存和实际代码。本项目不创建或修改任何 Header/Footer代码，不操作 `D:\16Wordpress_nextjs`。

不得从 TIOVAR、冻结站点或其他 `site_scope` 回退读取 Logo、菜单或 Footer 数据。

## 11. Acceptance Checklist

- [ ] 所有页面使用同一个 Logo 构图和资产键。
- [ ] Desktop 导航顺序完全一致，Home为可见文字项。
- [ ] Mobile Header 顺序统一为 `Logo | RFQ | Menu`。
- [ ] RFQ Desktop 标签统一为 `Request a Quote`，Mobile Header统一为 `RFQ`。
- [ ] 当前页状态统一为 Bold + `CURRENT` + Teal underline/left marker，并设置 `aria-current`。
- [ ] 所有页面使用同一个 Deep Navy Global Footer。
- [ ] Footer不包含未登记的Privacy、Terms、Legal、Company独立页或页面内锚点。
- [ ] 03原型内部状态条和内部声明不进入Buyer Clean。
- [ ] RFQ ON/OFF在Header、Mobile Menu和Footer同步，无残留空位。
- [ ] Desktop、Tablet和390px无横向溢出、裁切或按钮后大空白。
- [ ] Header/Footer正文与链接至少14px，交互目标至少44px。
- [ ] 既有页面主体、SEO/GEO、产品关系、route与事实门禁未被改写。
- [ ] 没有修改 `D:\16Wordpress_nextjs` 或产生开发、测试、部署成果。

## 12. Governance

- 本规格获用户批准前，不得描述为全站正式基线，不得据此升级任何页面Gate状态。
- 批准后状态升级为 `APPROVED_GLOBAL_CHROME_BASELINE`。
- 各页面既有主体批准继续有效；公共首尾修订作为独立跨页审查项，不重开 Gate 1–4。
- PRODUCT-000 已批准的 Gate 5 页面主体不降级；但开发交付必须等待公共首尾修订通过。
- MARKET-000、RES-000、APP-000 的最终视觉批准应以替换公共首尾后的完整页为准。
- 全部页面公共首尾复审通过后，再形成一次用户集中批准点。

## 13. Decision Record

| ID | Question | Recommended decision | Status |
|---|---|---|---|
| GHF-D01 | 是否批准本规格作为首页、03–07及未来页面的唯一公共首尾合同？ | 批准；随后只做公共首尾定向视觉修订，不重做页面主体 | `APPROVED / CLOSED` |

## 14. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-30 | 根据首页、03产品详情模板、PRODUCT-000、MARKET-000、RES-000、APP-000实际视觉审查，建立统一Header、Mobile Menu与Footer合同 | `APPROVED_GLOBAL_CHROME_BASELINE` |
| V0.1 approval | 2026-08-30 | 用户明确确认书面规格；授权制定执行计划并向原页面任务分派公共首尾定向视觉修订 | `APPROVED` |
