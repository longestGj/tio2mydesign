# TiO₂ Malaysia Home 页面作业规范 V0.1

## 0. 文档控制

| 项目 | 内容 |
|---|---|
| 文档名称 | `HOME_PLAYBOOK_V0.1` |
| 页面体系 | Home |
| Playbook Key | `HOME` |
| 创建日期 | 2026-08-31 |
| 当前状态 | `GATE6_PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORISATION` |
| 编制依据 | 根 `AGENTS.md`、PRD V0.4、关键词主表、Home 已批准内容架构/视觉及真实执行记录 |
| 使用边界 | 只把当前已批准 Home 流程正式化，不改变页面职责、URL、主关键词、视觉、文案或事实边界 |
| 历史边界 | 本 Playbook 创建于 Gate 6 定向修订，不追溯冒充 Gate 0–5 的批准依据 |
| 页面生命周期 | `DESIGN_IN_REVIEW` |
| Gate 5 | `APPROVED / CLOSED`，用户批准日期 2026-08-31 |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORISATION` |
| Gate 7 | `LOCKED / NOT AUTHORISED` |
| 明确禁止 | WordPress、Next.js、CMS、代码、测试、开发交付、部署、发布或操作 `D:\16Wordpress_nextjs` |

本文件反映 Home 已实际完成的研究、内容架构、线框、视觉方向、完整视觉与 Gate 6 审查过程。它不是重新策划，也不补造历史审批记录。

## 1. 权威基线与冲突顺序

1. 用户当前已批准的最新决定。
2. 根 `AGENTS.md`。
3. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`。
4. `research/keyword/11_page_keyword_master.csv` 的 `HOME-001`。
5. `pages/home/04_planning/01_homepage_content_architecture_v0.3.md`。
6. `pages/home/04_planning/09_homepage_pc_final_copy_visual_v0.7.md`。
7. `pages/home/04_planning/11_homepage_mobile_remove_rfq_v0.6.1.md`。
8. 当前 Global Chrome 候选规范 `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md`。
9. `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`。
10. PRODUCT 当前关系基线 `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`。
11. `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`。

冲突不得静默处理。URL、主关键词、页面职责、导航、模块顺序、事实、产品关系、响应式内容差异或发布状态发生冲突时，必须提交项目总控。

## 2. Home 页面身份

| 字段 | 当前合同 |
|---|---|
| Page ID | `HOME-001` |
| URL | `/` |
| Page Type | Homepage |
| Market / Language | GLOBAL / EN |
| Priority | P0 |
| Primary Keyword | `malaysia titanium dioxide` |
| Search Intent | Commercial supplier search |
| Buyer Stage | Supplier Search |
| Mapping Status | `APPROVED_PRD_V0.3` |
| Verification Status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Page Role | 承接宽泛 Malaysia TiO₂ 商业供应意图，并导向 Markets、Products、Applications、Documents、Resources、About 和 RFQ |

### 2.1 唯一职责

Home 必须帮助终端制造企业的采购和技术人员快速确认：

- 网站面向何种采购任务；
- 应先按目的市场、产品、应用还是文件继续；
- 14 个型号如何进入选型路径；
- 公司、原产地和文件信息分别去哪里核实；
- 如何发起报价询盘。

### 2.2 不负责

| 排除意图或事实 | 正确 owner |
|---|---|
| Malaysia manufacturing、origin proof、traceability 深层证明 | `ABOUT-001` |
| TDS/SDS/COA/COO/REACH 类型说明与申请管理 | Documents 体系 |
| 国家/区域 supplier 深层意图 | 对应 Market 页面 |
| 泛产品选型、工艺和具体型号详情 | Products Hub、Process、Grade 页面 |
| 泛应用详情 | Applications 页面 |
| 替代来源、工艺比较和贸易更新 | Resources 页面 |
| 表单、验证、隐私和提交结果 | `CONV-RFQ` |

## 3. 目标买家与成功标准

- 主要角色：终端制造企业采购人员、技术评估人员。
- 主要市场：EU、UK、India、Brazil。
- 主要顾虑：原产地与合规真实性、供应稳定性、产品/应用匹配、文件获取路径。
- 主要行动：Request a Quote。
- 次级行动：View Products；按市场、应用、文件或公司信息继续。
- 成功标准：买家不需要理解内部 IA 或证据流程即可选择下一条采购路径；页面不制造未经验证承诺。

## 4. 固定内容架构

Desktop 主体顺序：

```text
Header
→ Hero
→ Start Here / Markets + Products + Documents
→ Markets
→ Products
→ Applications
→ About / Company
→ Documents
→ Resources / Buyer Answers
→ Page-level RFQ
→ Footer
```

Mobile 主体顺序：

```text
Mobile Header
→ Hero
→ Start Here
→ Markets
→ Products
→ Applications
→ About / Company
→ Documents
→ Resources / Buyer Answers
→ Footer
```

Mobile 不渲染页面级 RFQ Section。该差异由用户于 2026-08-31 批准，不是漏模块；RFQ 仍固定存在于 Mobile Header、Hero、Mobile Menu 和 Footer。

## 5. 模块合同

| 顺序 | Module ID | 目的 | 主要内容 | CTA / 目标 | 事实边界 |
|---:|---|---|---|---|---|
| 0 | GLOBAL_HEADER | 全站导航和固定 RFQ | 八项顺序；Home current | Request a Quote | 不受正文 route/evidence 状态影响 |
| 1 | HERO | 表达 Home 主题与受众 | H1 含 Malaysia Titanium Dioxide；工作文案已由 Gate 5 批准 | Request a Quote / View Products | 不证明 manufacturing、COO 或 traceability |
| 2 | START_HERE | 三入口决策 | Markets / Products / Documents | 对应 Hub | 紧凑，不发展为第二 Hero |
| 3 | MARKETS | 目的市场入口 | EU、UK、India、Brazil | View All Markets + 四入口 | 不写未验证贸易、物流或合规承诺 |
| 4 | PRODUCTS | 产品深度与发现 | 14 grades、四组 6/5/2/1、Process 文本路径 | View All 14 Grades | 使用 PRODUCT V0.3；不做 14 张长卡 |
| 5 | APPLICATIONS | 五个应用入口 | Coatings、Plastics、Masterbatch、Printing Inks、Paper | 对应 page_id | Masterbatch 指 TiO₂ input，不是 finished masterbatch |
| 6 | ABOUT | 平台与运营主体摘要 | TiO₂ Malaysia 与 IKHLAS 运营关系；用户批准的 titanium dioxide manufacturer 表述；公司/供应/原产地文件入口 | About | 可公开 manufacturer 关系不等于工厂地点、制造产地、COO 或追溯已验证 |
| 7 | DOCUMENTS | 文件信息与申请分流 | Documents Hub / Request Documents | `DOC-000` / `CONV-DOC` | 不承诺具体文件已上线或可提供 |
| 8 | RESOURCES | 研究入口与直接答案 | 最多 2 个资源主题和 3 个 Buyer Answers | 对应 Resource/Hub/RFQ | 时间敏感事实由资源页承接 |
| 9 | PAGE_RFQ_DESKTOP | Desktop 采购收口 | 字段摘要，不是表单实现 | Request a Quote | Desktop only；不承诺响应时间 |
| 10 | GLOBAL_FOOTER | 导航与固定 RFQ 收口 | Brand、Explore、Information、Procurement、Copyright | Request a Quote | 买家可见栏目标题必须为 Procurement |

## 6. Products 与证据合同

首页固定四组：

| 组 | 数量 | 型号 |
|---|---:|---|
| Coatings Grades | 6 | M-350、M-510、M-896、M-996、M-2196、M-895 |
| Plastics & Masterbatch Grades | 5 | M-200、M-108、M-210、M-340、M-886 |
| Inks & Multi-Application | 2 | M-52、M-2377 |
| Specialty Grade | 1 | CR-901 |

强制边界：

- 14 个型号必须唯一、无遗漏、无重复。
- M-2377 可按 PRODUCT V0.3 中性显示，并中性归类为 Sulfate；不得显示比较、性能优越或替代声明。
- M-2377 的 Specialty Materials 为 `NO_PUBLIC_MAPPING`，必须静默不渲染，不能解释为不适用。
- M-996 与 M-2196 可以中性列出；差异、排名、优越性、等效和比较式选型继续冻结。
- `NO_PUBLIC_MAPPING` 不进入 Buyer Clean、HTML 文案、徽章、Schema 或负面判断。

## 7. CTA 与内链合同

| CTA | 位置 | 目标边界 |
|---|---|---|
| Request a Quote | Desktop/Mobile Header、Hero、Mobile Menu、Footer；Desktop 页面级 RFQ | 目标 `CONV-RFQ`；route/form 未验证时是发布阻塞，不能隐藏 CTA |
| View Products | Hero | `PRODUCT-000` |
| View All Markets | Markets | `MARKET-000` |
| View All 14 Grades | Products | `PRODUCT-000` |
| Application links | Applications | 只使用批准 page_id；暂定 URL 不提前锁定 |
| Documents Hub | Documents | `DOC-000` |
| Request Documents | Documents | `CONV-DOC` |
| Resource links | Resources | 目标 route/freshness 获准后才渲染 |
| About | Company | `ABOUT-001` |

Home 不显示 Sample CTA。Header、Hero 和 Footer 中现有 RFQ 不能因 Mobile 删除页面级 RFQ 而移除。

## 8. 事实与素材门禁

### 可以公开的结构事实

- 品牌 TiO₂ Malaysia。
- 运营主体 IKHLAS TITANIUM (MALAYSIA) SDN. BHD.。
- 用户于 2026-08-31 批准 IKHLAS 可公开表述为 `a titanium dioxide manufacturer`；该关系只支持可见 Company 句和 Product→Organization `manufacturer` Schema。
- 四个目标市场。
- 14 个型号及四组 6/5/2/1。
- PRODUCT V0.3 已批准的中性关系。
- 页面和路径职责。

### 继续冻结

- Made/manufactured in Malaysia、制造地点、工厂主体与具体产品产地表述。
- COO、批次追溯、产能、库存、MOQ、交期、包装、港口、Incoterms、出口能力和 SLA。
- REACH 或具体文件可用性承诺。
- M-996/M-2196 差异及其他未获准性能、比较和推荐。
- 未验证联系方式和法律页面。

### 图片规则

- Hero 材料图只承担氛围作用，不是工厂、实验室、仓库、装运、制造或原产地证据。
- AI 图、库存图和概念图不得作为公司事实证明。
- Logo 当前仍为视觉方向 PNG，不是最终生产 SVG。

## 9. 响应式与交互合同

### Desktop

- 1440px Gate 5 主视觉为当前基线。
- Header 显示完整八项导航。
- Products 直接显示全部 14 个型号。
- 页面级 RFQ Section 保留。

### Tablet

- 必须验证 768px 与 1024px。
- 覆盖 Header/Nav、Hero、Markets、Products、Applications、Documents、Footer 与固定 RFQ。
- 核心入口不得横向溢出或依赖无限横滑。
- 当前 Gate 6 证据：768×5364（SHA-256 `A7A54820A2C12061CE5EEC97C0694F6E31C867DA31B80018F6E7225EAD9849C6`）与 1024×4070（SHA-256 `3B1D0D334F1FD18719CC67C648DAF5E253C0F1F9E96B300A21E3644A0DC9C7BB`）。

### Mobile

- 390px Buyer Clean 为当前主基线；375px、390px、430px无横向溢出。
- Header 为 Logo + RFQ + Menu；逻辑触控目标不低于 44px。
- Menu Open 完整显示八项顺序。
- Products 默认折叠；正式 Expanded 状态必须证明 14 个型号可发现。
- 当前 Expanded 候选 V0.4 为 390×1428，SHA-256 `B19D39AB44E26F419F48E1F68E4CBC76CE9B76BF838B3559CAD3B179E5D64A85`。
- Resources / Buyer Answers 后直接进入 Footer，不恢复页面级 RFQ。
- 不通过缩小正文或隐藏技术内容解决页面长度。

## 10. 视觉与可访问性合同

- 继承 Industrial Editorial 基底；Products、Documents、Resources 使用 Technical Editorial 信息秩序。
- 不采用 SaaS 看板、廉价化工模板、旅游 Malaysia、大国旗、假工厂或过度炫光。
- Navy、Deep Navy、Accessible Teal、White、Soft Background 和 Border Gray 按视觉标准使用。
- Buyer Clean 不显示 page_id、pending、not live、evidence gate、working copy 或 production note。
- 买家可见 Mobile 字号不低于 14px；正文约 16px。
- 小文字与背景对比不低于 4.5:1；关键触控目标不低于 44px。
- 实际键盘、焦点、语义、ARIA、表单和辅助技术行为属于后续开发验收，静态视觉不能冒充已实现。

## 10.1 SEO / GEO / Schema 合同

当前正式草案：`pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`。

| 字段 | 锁定值 |
|---|---|
| Title | `Malaysia Titanium Dioxide Supplier | TiO₂ Malaysia` |
| Meta Description | `Explore titanium dioxide grades, applications, destination markets and document request paths through TiO₂ Malaysia for international industrial buyers.` |
| Canonical | `https://tio2malaysia.com/` |
| robots | `index, follow` |
| Language | EN |
| H1 | `Malaysia Titanium Dioxide for Industrial Buyers`；视觉不重写 |

最小图谱使用稳定 `@id` 的 WebSite、WebPage、Organization、Brand 和轻量 generic Product。锁定关系为 WebPage→isPartOf→WebSite、WebSite→publisher→Organization、WebPage→about→Brand/Organization/Product、Product→brand→Brand、Product→manufacturer→Organization；不使用 Organization→brand。publisher 只表示 IKHLAS 对网站内容与运营负责，不表示母公司、所有权、工厂主体、生产地点、产品原产地或其他公司控制关系。`manufacturer` 只挂在 Product。禁止 Offer、ItemList、FAQPage、ContactPoint、PostalAddress、sameAs、ProductGroup、countryOfOrigin、COO、价格、库存、MOQ、交期、availability、rating、GTIN、认证和未验证文件字段。Review ID：`HOME-G6-SEO-GEO-PCR-02`。

当前 Company 可见句锁定为：`TiO₂ Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a titanium dioxide manufacturer.`。该句只解决通用 manufacturer 关系，不开放 factory location、Made/manufactured in Malaysia、product origin、COO、capacity 或 traceability。

## 11. 实际执行流程与阶段门槛

Home 已实际经过：

```text
同行首页研究
→ 企业/客户输入与关键词边界
→ 两种内容架构比较并批准市场优先方案
→ 内容架构 V0.2
→ Desktop/Mobile 低保真线框
→ A/B 首屏视觉方向及人工修订
→ A 基底 + B 技术编辑表达
→ Buyer Clean / Internal Review 分离
→ 字号、对比度与 Mobile Hero 定点修订
→ Global Chrome 与固定 RFQ 统一
→ PC 文案/紧凑度 V0.7
→ Mobile 同步 V0.6
→ Mobile 页面级 RFQ 删除 V0.6.1
→ Gate 5 用户批准
→ Gate 6 总控审查、五项定向修订与 SEO/GEO P0 合同补充
```

后续门槛：

- 本 Playbook、Brief、Content Architecture V0.3、Global Chrome V0.3、Expanded/Tablet 证据已完成 Gate 6 项目总控复审。
- Review ID `HOME-G6-SEO-GEO-PCR-02` 已由项目总控判定 `PROJECT_CONTROL_REVIEW_PASS / CLOSED`。
- SEO/GEO P0 的总控复审通过不等于已实施。
- 用户明确授权 Gate 7 前不得进入开发交付。

## 12. Gate 6 定向复审清单

- [x] Home 页面身份、URL、主关键词和职责未改变。
- [x] Footer Buyer Clean 使用 Procurement，其他 Global Chrome 内容未改变。
- [x] Desktop/Mobile RFQ 响应式差异已在架构、Brief、Playbook 与 Gate 6 包中一致登记。
- [x] Mobile Products Expanded 使用 PRODUCT V0.3，14 型号完整唯一。
- [x] 768px/1024px Tablet 证据覆盖要求模块且无横向溢出。
- [x] Buyer Clean 不含内部状态词。
- [x] 390px 所有测试交互目标不低于 44px。
- [x] V0.2、Gate 5 资产和历史文件未覆盖或删除。
- [x] SEO/GEO 合同字段、JSON-LD 类型范围、可见 manufacturer 句和禁止字段已完成并通过总控复审。
- [x] Gate 6、Gate 7 和生产状态没有越权升级。

## 13. 版本记录

| 版本 | 日期 | 变更 | 状态 |
|---|---|---|---|
| V0.1 | 2026-08-31 | 根据 Home 实际完成流程和批准基线建立页面类型作业规范 | `GATE6_PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORISATION` |
