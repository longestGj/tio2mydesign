# HOME-001 Home Brief V0.1

## 0. 文档控制

| 字段 | 当前值 |
|---|---|
| Page ID | `HOME-001` |
| Page Name | Home |
| URL | `/` |
| Page Type | Homepage |
| Playbook Key | `HOME` |
| Market / Language | GLOBAL / EN |
| Priority | P0 |
| 当前状态 | `HOME-001-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| 页面生命周期 | `READ_ONLY_QA_APPROVED` |
| Gate 5 | `APPROVED / CLOSED`，用户批准日期 2026-08-31 |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORISATION` |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_FOR_HANDOFF`；用户授权日期 2026-08-31 |
| Gate 8 | 外部候选实现已存在；当前审查 HEAD `49289d40fdb0b91d28f534776464403883d912ff` |
| Gate 9 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Gate 10 | `LOCKED / NOT AUTHORISED` |
| 文档创建日期 | 2026-08-31 |
| 历史声明 | 本 Brief 创建于 Gate 6 定向修订，只正式化当前基线，不追溯冒充 Gate 0–5 批准文件 |
| 开发边界 | 本项目仅作只读验收与治理同步，不操作 `D:\16Wordpress_nextjs`；返修由外部开发任务执行 |

## 1. 权威输入

| 顺序 | 资料 | 用途 |
|---:|---|---|
| 1 | 用户 2026-08-31 Gate 5 与定向修订决定 | 当前审批、Footer 与响应式 RFQ 决定 |
| 2 | 根 `AGENTS.md` | 项目治理与阶段边界 |
| 3 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | 页面架构和职责 |
| 4 | `research/keyword/11_page_keyword_master.csv` | Home 身份、主关键词与防内耗 |
| 5 | `docs/page-playbooks/HOME_PLAYBOOK_V0.1.md` | Home 作业合同草案 |
| 6 | `pages/home/04_planning/01_homepage_content_architecture_v0.3.md` | 当前内容架构 |
| 7 | Desktop V0.7 / Mobile V0.6.1 | Gate 5 Buyer Clean 视觉基线 |
| 8 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md` | Procurement Footer 候选共享规范 |
| 9 | PRODUCT V0.3 关系矩阵 | 14 型号与公开关系边界 |
| 10 | 视觉标准 V1.0 | 品牌、排版、颜色和素材边界 |
| 11 | `HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | Title、Meta、Canonical、robots、最小实体图谱与禁止字段 |

### 当前冲突/决定记录

| ID | 项目 | 当前处理 |
|---|---|---|
| HOME-BRIEF-C01 | V0.2 Footer 买家栏目写 `Conversion`，Home 当前视觉写 `Procurement` | 用户批准统一采用 `Procurement`；Global Chrome V0.3 提交总控复审 |
| HOME-BRIEF-C02 | Desktop 有页面级 RFQ，Mobile V0.6.1 删除该 Section | 用户批准为响应式内容差异；不是漏模块 |
| HOME-BRIEF-C03 | 历史 Content Architecture 对 M-2377 的冻结描述已过期 | 使用 PRODUCT V0.3；M-2377 可中性映射，Specialty `NO_PUBLIC_MAPPING` 静默不渲染 |
| HOME-BRIEF-C04 | Home SEO/GEO P0 缺少正式合同，manufacturer 关系未明确 | V0.1 合同及最终关系已通过项目总控复验；`HOME-G6-SEO-GEO-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| HOME-BRIEF-C05 | Tablet V0.2 视觉证据省略 `Start Here`，书面合同要求保留 | `USER_DECISION_REQUIRED / IMPLEMENTATION_UNCHANGED`；用户或项目总控作出明确决定前不得改动 Tablet 实现 |

## 2. 页面策略

| 字段 | 当前合同 |
|---|---|
| 目标买家 | 终端制造企业采购人员、技术评估人员 |
| 目标市场 | EU、UK、India、Brazil |
| Buyer Stage | Supplier Search |
| 核心顾虑 | 原产地/合规真实性、供应稳定性、产品与应用匹配、文件路径 |
| 页面职责 | 承接宽泛 Malaysia TiO₂ 商业供应意图并把买家导向正确 owner 页面 |
| 主转化 | Request a Quote |
| 次转化 | View Products；Markets、Applications、Documents、Resources、About 导流 |
| 成功信号 | 买家能理解网站、确认下一条采购路径并发起合格 RFQ；无证据主张不渲染 |

### 明确不负责

| 排除事项 | 正确承接 |
|---|---|
| Origin/manufacturing/traceability 证明 | `ABOUT-001` |
| 文件类型、合规细节与申请管理 | Documents 体系 |
| 国家 supplier 深层意图 | 对应 Market 页面 |
| 泛产品、工艺和具体型号详情 | Products 体系 |
| 泛应用详情 | Applications 体系 |
| 替代来源、工艺比较、贸易更新 | Resources 体系 |
| RFQ 表单流程、隐私、验证和提交结果 | `CONV-RFQ` |

## 3. 搜索意图与关键词合同

| 字段 | 当前值 |
|---|---|
| Primary Keyword | `malaysia titanium dioxide` |
| Secondary Keywords | `titanium dioxide malaysia`; `malaysia tio2`; `titanium dioxide supplier malaysia`; `malaysia titanium dioxide supplier`; `malaysia titanium dioxide exporter`; `export titanium dioxide from malaysia` |
| Search Intent | C |
| Source Cluster | ORIGIN-01 |
| Mapping Status | `APPROVED_PRD_V0.3` |
| Verification Status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Excluded Keywords | country-specific supplier terms；exact grade terms；non-China guide terms；company-proof terms |
| Cannibalization Boundary | Home owns broad commercial Malaysia supply intent; About owns origin/manufacturing proof; Market pages own destination-country intent |

### SEO/GEO 正式合同草案

| 字段 | 锁定值 |
|---|---|
| Title | `Malaysia Titanium Dioxide Supplier | TiO₂ Malaysia` |
| Meta Description | `Explore titanium dioxide grades, applications, destination markets and document request paths through TiO₂ Malaysia for international industrial buyers.` |
| Canonical | `https://tio2malaysia.com/` |
| robots/index | `index, follow` |
| Language | EN |
| H1 | `Malaysia Titanium Dioxide for Industrial Buyers`；保持当前视觉 |

Schema 合同使用 WebSite、WebPage、Organization、Brand 和轻量 generic Product。关系锁定为 WebPage→isPartOf→WebSite、WebSite→publisher→Organization、WebPage→about→Brand/Organization/Product、Product→brand→Brand、Product→manufacturer→Organization；删除 Organization→brand。publisher 仅表示网站内容与运营责任，不表示母公司、所有权、工厂主体、生产地点、产品原产地或其他公司控制关系。`manufacturer` 只允许挂在 Product。完整 JSON-LD、证据映射和禁止字段见 `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`。Review ID `HOME-G6-SEO-GEO-PCR-02` 已 `PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 9 已验证候选实现中的五节点/五关系，但这不等于 Gate 9 批准、生产发布或 Gate 10 授权。

## 4. 必须回答的问题

| ID | 买家问题 | 回答模块 | 证据/边界 |
|---|---|---|---|
| Q01 | 这个网站为谁提供什么采购入口？ | Hero | 只表达平台与采购范围，不证明制造/原产地 |
| Q02 | 应先按市场、产品还是文件开始？ | Start Here | 页面架构事实 |
| Q03 | 哪些主要市场有采购入口？ | Markets | EU、UK、India、Brazil；不写未验证市场承诺 |
| Q04 | 有多少产品，如何发现？ | Products | 14 grades、四组 6/5/2/1；PRODUCT V0.3 |
| Q05 | 覆盖哪些应用方向？ | Applications | 五个批准应用入口；不替代应用详情 |
| Q06 | 谁运营 TiO₂ Malaysia？ | About | IKHLAS TITANIUM (MALAYSIA) SDN. BHD.；可使用获批的 titanium dioxide manufacturer 最小句，不推断工厂地点或产品原产地 |
| Q07 | 文件信息与文件申请去哪里？ | Documents | Documents Hub 与 Request Documents 分工 |
| Q08 | 如何准备报价需求？ | Buyer Answers / Desktop RFQ /固定 RFQ入口 | 字段摘要；不承诺响应时间或报价已批准 |

## 5. 内容架构与模块顺序

| 顺序 | Module ID | Desktop | Mobile | CTA / 目标 |
|---:|---|---|---|---|
| 0 | GLOBAL_HEADER | 完整八项导航 | Logo + RFQ + Menu | Request a Quote |
| 1 | HERO | H1 + 两 CTA +氛围材料图 | H1 + 两 CTA；不依赖大图 | Request a Quote / View Products |
| 2 | START_HERE | Markets / Products / Documents 三入口 | 紧凑三入口 | 对应 Hub |
| 3 | MARKETS | EU/UK/India/Brazil 四入口 | 顺序卡片 | View All Markets |
| 4 | PRODUCTS | 四组内显示全部 14 型号 | 默认四组折叠；Expanded 状态可发现全部型号 | View All 14 Grades；Process 文本路径 |
| 5 | APPLICATIONS | 五项 | 单列/适配布局 | 对应 page_id |
| 6 | ABOUT | 公司与供应摘要 | 堆叠但职责不合并 | About |
| 7 | DOCUMENTS | Hub + Request 两路径 | 两路径堆叠 | `DOC-000` / `CONV-DOC` |
| 8 | RESOURCES | 2 topics + 3 Buyer Answers | 保留答案可见 | 资源/市场/产品/RFQ |
| 9 | PAGE_RFQ_DESKTOP | 保留结构化 RFQ Section | 不渲染 | Request a Quote |
| 10 | GLOBAL_FOOTER | Brand/Explore/Information/Procurement | 相同内容适配 | Request a Quote |

Mobile 的顺序是 Resources / Buyer Answers → Footer。不得添加替代 RFQ Strip、表单或营销 CTA Section。

## 6. Products 当前合同

| 组 | 数量 | 型号 |
|---|---:|---|
| Coatings Grades | 6 | M-350、M-510、M-896、M-996、M-2196、M-895 |
| Plastics & Masterbatch Grades | 5 | M-200、M-108、M-210、M-340、M-886 |
| Inks & Multi-Application | 2 | M-52、M-2377 |
| Specialty Grade | 1 | CR-901 |

- 14 个型号必须完整唯一。
- M-2377：PRODUCT V0.3 允许中性映射 Coatings、Plastics、Masterbatch、Printing Inks、Paper，并中性分类 Sulfate。
- M-2377 → Specialty Materials：`NO_PUBLIC_MAPPING / DO_NOT_RENDER`。
- M-996/M-2196：仅中性列出；差异、排名、优越性、等效、替代和比较式选型冻结。
- 首页分组不是完整产品推荐或工艺比较。

## 7. CTA 与内链

| 入口 | 位置 | Page ID / 目标 | 当前边界 |
|---|---|---|---|
| Request a Quote | Header、Hero、Footer、Mobile Menu、Desktop页面级RFQ | `CONV-RFQ` | 固定可见；route/form readiness 为发布阻塞 |
| View Products / View All 14 Grades | Hero / Products | `PRODUCT-000` | 已批准 Hub |
| Markets | Start Here / Markets | `MARKET-000` +市场页 | 市场事实/route 门禁继续有效 |
| Applications | Applications | `APP-COAT`、`APP-PLAS`、`APP-MB`、`APP-INK`、`APP-PAPER` | 只锁 page_id，不锁暂定 href |
| Documents Hub | Documents | `DOC-000` | 信息说明路径 |
| Request Documents | Documents | `CONV-DOC` | 受控申请路径，不承诺文件可用 |
| Resources | Resources | `RES-000` /获准子页 | route/freshness 未满足则不渲染具体链接 |
| About | Company | `ABOUT-001` | 可公开 manufacturer 关系；工厂、地点、产地、COO 与追溯继续门禁 |

不显示 Sample CTA。

## 8. Claim Register 与不渲染边界

| Claim ID | 可见内容 | 当前状态 | 渲染决定 |
|---|---|---|---|
| HOME-C01 | TiO₂ Malaysia 品牌 | 已批准项目身份 | RENDER |
| HOME-C02 | IKHLAS 为网站运营主体 | 当前批准基线 | RENDER |
| HOME-C02A | IKHLAS 为 `a titanium dioxide manufacturer` | 用户明确批准 2026-08-31 | RENDER；只支持可见句与 Product→Organization manufacturer |
| HOME-C03 | EU、UK、India、Brazil 四市场入口 | 已批准架构 | RENDER |
| HOME-C04 | 14 grades / 四组 6/5/2/1 | PRD + PRODUCT V0.3 | RENDER |
| HOME-C05 | PRODUCT V0.3 中性产品关系 | 用户批准关系基线 | RENDER_NEUTRAL_ONLY |
| HOME-C06 | Malaysia manufacturing location / Made in Malaysia / product origin | `FACT_EVIDENCE_REQUIRED` | DO_NOT_RENDER |
| HOME-C07 | COO / batch traceability | `FACT_EVIDENCE_REQUIRED` | DO_NOT_RENDER |
| HOME-C08 | 文件具体可用性 / REACH | `FACT_EVIDENCE_REQUIRED` | DO_NOT_RENDER / CONTROLLED_REQUEST_ONLY |
| HOME-C09 | 库存、产能、MOQ、交期、包装、出口承诺 | 未验证 | DO_NOT_RENDER |
| HOME-C10 | M-996 与 M-2196 差异 | `M996_VS_M2196_DIFFERENTIATION_FROZEN` | DO_NOT_RENDER |

Hero 材料图为 atmosphere-only；不得作为工厂、制造、原产地、仓库、实验室或装运证明。

## 9. 视觉与响应式合同

### 正式 Gate 5 基线

- Desktop Buyer Clean V0.7：1440×5683。
- 390px Mobile Buyer Clean V0.6.1：390×8884。
- Mobile Menu Open V0.6：390×844。
- 当前 Global Chrome authority 为 `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`；可见 `CURRENT` 为 0，Desktop 使用 Bold + 3px Teal underline，Mobile 使用 Bold + 4px Teal left marker，并保留正确 `aria-current="page"` 语义。

### 本轮补充证据

- Desktop Buyer Clean V0.8：1440×5683，SHA-256 `DB34764C15A1F8F2197DDE019FDFD4F6FC90C6E85A4023CF5B76657929ABA117`；仅 Company 句和换行几何变化。
- Mobile Buyer Clean V0.6.2：390×8884，SHA-256 `4ECE62FA2E3ACDEE65CE983D80D5AEF3E294FED9F2593B2B1960A2524E78BB49`；仅 Company 句和换行几何变化。
- Current Mobile Products Expanded V0.4：390×1428，SHA-256 `B19D39AB44E26F419F48E1F68E4CBC76CE9B76BF838B3559CAD3B179E5D64A85`；显示 14 型号、四组及 6/5/2/1。
- Tablet 768 evidence：768×5364，SHA-256 `A7A54820A2C12061CE5EEC97C0694F6E31C867DA31B80018F6E7225EAD9849C6`。
- Tablet 1024 evidence：1024×4070，SHA-256 `3B1D0D334F1FD18719CC67C648DAF5E253C0F1F9E96B300A21E3644A0DC9C7BB`。
- 以上为后续 Gate 7 使用的批准视觉输入；外部候选实现已经存在，但静态视觉本身不构成实现或 Gate 9 通过证据。
- Mobile 最小触控目标不低于 44px。
- 390px、768px、1024px 不得横向溢出。
- Buyer Clean 不显示内部 page_id、pending、not live、evidence gate 或 production 状态词。

### 响应式 RFQ 差异

| 位置 | Desktop | Mobile |
|---|---|---|
| Header RFQ | 显示 | 显示 |
| Hero RFQ | 显示 | 显示 |
| Mobile Menu RFQ | N/A | 显示 |
| 页面级 RFQ Section | 显示 | 不渲染 |
| Footer RFQ | 显示 | 显示 |

## 10. 可访问性与实现边界

- Buyer Clean Mobile 可见辅助文字至少 14px，正文约 16px。
- 关键按钮与菜单触控目标至少 44px。
- Accessible Teal 与白字组合保持已批准对比度。
- 导航当前项不能只依赖颜色。
- Gate 9 已对实际链接、键盘焦点、语义、ARIA 和响应式状态进行只读验证；颜色对比、下游 404/500 与 RFQ receiver/readiness 仍按 Gate 9 findings 保持未通过或发布阻塞。静态视觉不作为实现通过证据。

## 11. Gate 记录

| Gate | 当前记录 | 边界 |
|---|---|---|
| Gate 0–4 | 历史过程已有成果，但本 Brief 不追溯成为其批准依据 | 不补造审批 |
| Gate 5 | `APPROVED / CLOSED`，用户批准 2026-08-31 | 正式视觉基线已登记 |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | 五项定向修订及 SEO/GEO P0 已通过项目总控复验 |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_FOR_HANDOFF` | 用户于 2026-08-31 授权；开发交付包已通过总控复审 |
| Gate 8 | 外部候选实现存在 | 本项目不修改外部开发仓库 |
| Gate 9 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
| Gate 10 | `LOCKED / NOT AUTHORISED` | 无部署、发布、DNS 或索引授权 |

## 12. Gate 9 开放项与责任边界

1. Home owner / 外部开发三项必修已在 commit `616193f3dbf059f0e081c8d59119c008ba2b848b` 完成，并由 `HOME-001-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` 验证关闭。
2. 下游 404/500、RFQ receiver 与子页面 readiness 属外部 owner/release dependency；Home 不得创建子页、改 URL 或使用跨 `site_scope` fallback。
3. Tablet `Start Here` 为 `USER_DECISION_REQUIRED / IMPLEMENTATION_UNCHANGED`。
4. broader-suite 中与 Home 无关或依赖本地环境的失败由对应 owner 处理，不作为 Home 页面缺陷。
5. planned/provisional href、事实、route、localization、freshness 和 M-996/M-2196 比较门禁继续开放。
6. Gate 10、部署、发布、DNS 和索引均未授权。

## 13. 版本记录

| 版本 | 日期 | 变更 | 状态 |
|---|---|---|---|
| V0.1 | 2026-08-31 | 在 Gate 6 定向修订阶段正式化当前 Home 基线、响应式差异与证据门禁 | `GATE6_PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORISATION` |
| V0.1 governance sync | 2026-09-04 | 仅同步 Gate 7–9 已发生状态、Gate 9 有条件退回责任拆分及 Tablet 决策门禁；未改变页面内容合同 | `READ_ONLY_QA_IN_REVIEW / CONDITIONAL_RETURN` |
| V0.1 Gate 9 re-review sync | 2026-09-04 | 登记 commit `616193f3…` 定向修订和 V0.2 独立复验；三项 Home finding 均验证修复，等待总控关闭 | `READ_ONLY_QA_IN_REVIEW / CLOSURE_REVIEW_PENDING` |
| V0.1 Gate 9 closure sync | 2026-09-04 | 同步 `HOME-001-G9-ROQA-02` 总控关闭决定；保留 Tablet 决策项与外部 release blockers | `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS` |
