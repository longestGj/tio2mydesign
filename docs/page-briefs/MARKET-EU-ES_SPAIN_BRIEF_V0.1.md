# Spain Page Brief V0.1

## 0. 文档控制

| 字段 | 值 |
|---|---|
| Page ID / 版本 | MARKET-EU-ES / V0.1 |
| 创建/更新日期 | 2026-09-06 |
| 页面负责人 | Gate1执行子代理 spain_gate1，读取 agents/gate1-execution/agent.md |
| 总控审核人 / 最终批准人 | 项目总控 / 用户 |
| 生命周期 / Review | BRIEF_IN_REVIEW / MARKET-EU-ES-G1-01 |
| 提交状态 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |
| 用户批准记录 | 最新用户授权本Controller仅做所有页面Gate1，做一个确认一个；总控派发Spain。本页方向/COO尚待确认，不声称Gate0/1已批准 |
| 下一阶段 | 本任务无Gate2权限；Gate2由另一Controller在取得对应授权后负责 |
| 本版范围 | 首次Spain准入/意图/研究/事实草案，无视觉、代码或交付包 |

## 1. 页面身份

| 字段 | 值 |
|---|---|
| Section / Page name | MARKETS / Spain |
| URL / Canonical | /markets/spain/ / https://tio2malaysia.com/markets/spain/ |
| Type / Playbook | Market procurement landing page / MARKET |
| Market / Language / Priority | SPAIN / EN / P2 |
| Mapping / Verification | APPROVED_PRD_V0.3 / QUALITATIVE_KEYWORD_EVIDENCE |
| Planned domain / Scope | https://tio2malaysia.com / tio2-my |
| Indexing intent | INDEX候选方向，G2锁定元数据，G9/10验证并授权；非发布批准 |
| 外部开发项目 | D:/16Wordpress_nextjs（本任务禁止操作） |

## 2. 权威输入及冲突处理

消费顺序：当前明确用户决定与根AGENTS → 本页批准范围（尚无方向批准）→ PRD及有效增补 → 主表/登记 → Markets Playbook → 本页事实/研究。当前唯一组合入口是 `pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`。

| 输入 | 项目相对路径 | 用途 |
|---|---|---|
| 规则/背景 | AGENTS.md；PROJECT_CONTEXT.md；docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.0.md | 四环节复用、职责与证据治理 |
| 流程 | docs/architecture/PAGE_GATE_1_5_STANDARD_V1.1.md | G1方向确认，G2完整内容，后续1440/768/390 |
| 当前PRD | docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md | 品牌、运营主体、市场职责 |
| 登记/主表 | docs/architecture/PAGE_REGISTRY_V0.2.md；research/keyword/11_page_keyword_master.csv | 本页与相邻owner行 |
| 页面类型 | docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md | 国家页独有问题，不套Hub模块 |
| 事实决定 | docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.1.md；docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md | 全站原产地批准，Spain COO单独待定 |
| 产品关系 | pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv；PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md（同目录） | 中性关系，不证明Spain适用性 |
| 共享组件 | docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md；brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md | 引用owner，不重做品牌；本G1未制作组件 |
| 研究 | pages/markets/spain/01_research/ 下研究报告、方法报告、CSV与evidence | 定性研究，不是企业能力来源 |

| 冲突ID | 旧规则/当前规则 | 本次处理与来源 |
|---|---|---|
| ES-C01 | Playbook/Brief模板旧“无证据=不渲染”与根§2.6 | 按当前用户批准规则，具体事实待用户确认，不整页Hold |
| ES-C02 | Playbook旧origin冻结与全站原产地批准 | Malaysia-origin已准；COO按V1.1范围，Spain不自动继承UK/Italy |
| ES-C03 | 旧Registry V0.1/仅双断点/条件RFQ | 消费当前RegistryV0.2、1440/768/390、固定RFQ/共享组件；本轮不进入视觉 |
| ES-C04 | PRD早期M-2377工艺冲突与V0.3 | 新批准V0.3当前有效，不重启历史M-2377全局Hold |
| ES-C05 | 旧Playbook批准范围仅Hub | 本次用户Gate1串行委托+总控单页派发允许Spain研究/任务卡草案，不宣称旧Hub批准自动授权子页 |

## 3. 页面策略 / Page Intent Card

| 字段 | 待用户确认的方向 |
|---|---|
| Audience | 为西班牙生产项目采购工业TiO2的采购人员，以及参与原料评估的配方/技术人员 |
| Buyer problem | 看清供应产品/原产地，明确涂料体系或塑料最终制品需求，找到可评估的型号和资料，发起与Spain交付需求有关的询价 |
| Core message | Malaysia-origin工业TiO2可作为Spain采购评估的来源；围绕自己的应用和交付要求继续产品核对与询价（方向，不是最终Hero文案） |
| Must include | 产品/原产地与目的市场身份；涂料体系、塑料/色母最终用途问题；产品和文件路径；明确下一步 |
| Must exclude | 国家名替换模板；当地仓库/客户/现货的擅自推断；实验试剂/药用适用承诺；贸易结果保证；批量型号排名/等效；新增taxonomy |
| Primary CTA | Request a Quote → /request-a-quote/ |
| Secondary CTA | Explore Products → /products/ |
| Ownership boundary | 本页只拥有Spain supplier/procurement；EU共性归EU页，技术细节归Products/Applications，文件解释归Documents，政策详情归Resources |

`CONTENT_INTENT_CONFIRMED=NOT_YET_CONFIRMED`。主要/次要读者选择是Agent建议，不是SERP测量。成功信号方向：买家能明确原产地与目的市场、进入型号核对或有具体需求的RFQ；不设虚构转化率KPI。

## 4. SEO/GEO意图合同

| 字段 | 当前值 |
|---|---|
| Primary | titanium dioxide supplier spain |
| Secondary | tio2 supplier spain \| malaysia titanium dioxide spain |
| Search intent / Stage / Cluster | C / Supplier Search / MARKET-EU-02 |
| Excluded | generic application terms \| exact grade terms \| detailed trade-update terms |
| Cannibalization boundary | Country page owns explicit country modifier; EU page owns Europe/EU modifier; Resources owns detailed trade-policy queries. |
| H1/Title/Meta方向 | Spain工业采购与Malaysia-origin；最终英文文案DEFERRED_TO_GATE_2 |
| Slug / Hreflang | /markets/spain/ / NOT_APPLICABLE（当前EN单页，不建ES语言页） |
| Robots / Sitemap | Gate2定义、Gate9/10验证；未宣称可索引已上线 |
| GEO实体 | 品牌、运营主体、Malaysia-origin TiO2、Spain目的市场、产品/应用/文件/转化owner |
| 可引用答案方向 | 型号不确定时应描述的体系/成品要求；产品原产地与采购目的地的不同；获取型号资料与提交询价的路径 |
| 禁止推导 | Spain LocalBusiness/现有客户/仓库、关税结果、比较性能、不可见产品关系 |
| 来源与时效 | CSV稳定命题ID + evidence捕获；实时监管/贸易另需当前官方核验 |

检查：主表Spain主词与URL各唯一；不改EU或泛应用主词。查询没有Google/Semrush本地定量数据；不将缺数据写为0。

## 5. 必须回答的买家问题

研究报告§3.2 Q01–Q05为本节完整当前问题清单与回答方向：产品/原产地、应用需求、资料核对、Spain交付询问、EU政策owner。模块ID与最终答案 `DEFERRED_TO_GATE_2`，无空白待猜字段。

## 6. 内容架构、独有内容与FAQ

- 最终模块顺序、H1和FAQ全文：DEFERRED_TO_GATE_2，本Gate1不锁卡片数或页面长度。
- 独有内容：Spain供应商原词的联系定位；EMSA/Massó涂料体系问题；ANAIP包装膜/袋与建筑型材的最终制品语境；Spain目的地与Malaysia原产地区分。
- 农业薄膜仅可作为下游需求提问线索，不新增Agriculture页/分类或对型号作适用性承诺。
- FAQ仅研究Q01–Q05，FAQ Schema未授权；贸易不成为页面主叙事。

## 7. 产品/应用关系

G1不产出国家型号推荐表；未来仅可消费PRODUCT V0.3正向中性关系，再以具体技术证据和用户批准核对文案。30/0/54、Process8/5/1；M-2377五类+Sulfate、Specialty不公开、Rubber证据限定；M-996/M-2196 comparison hold保留。Printing Inks作为次级路径候选，不自动成为与前两类等权的“Spain三大需求”。

## 8. 事实与证据

唯一逐命题表：`pages/markets/spain/01_research/MARKET-EU-ES_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv`。区分已批准企业事实、外部观察、分析推论、用户待定和外部时效结论。旧模板的缺证禁止条款由根§2.6覆盖。
Spain COO拟用句需ES-D02确认；仓库/交期等本轮未提出为营销承诺，不虚构永久禁止或反复要求用户证明所有能力。

## 9. CTA与表单

主/次CTA见意图卡；Supporting为Documents、Request Documents、选型后的Request a Sample。页面不新增内嵌表单；字段、验证、提交和隐私按各Conversion当前合同消费，G2再锁准确预填参数。
尤其CONV-DOC Country/Region为联系/公司所在地，不用Spain页面上下文控制文件版本、适用性或文件可用性；不新建Market/Destination文件筛选参数。成功不是申请自动获批。共享Header/Footer RFQ固定。

## 10. 内链

| Page ID | URL或受控引用 | 职责 |
|---|---|---|
| HOME-001 / MARKET-000 | / / /markets/ | 品牌/市场入口 |
| MARKET-EU-001 | /markets/european-union/ | EU共同采购语境 |
| PRODUCT-000 | /products/ | 型号目录/选型 |
| APP-COAT / APP-PLAS / APP-MB / APP-INK | 各Page ID当前批准route合同；主表仍有PROVISIONAL标记，不本页升级 | 具体用途深度 |
| DOC-000 / CONV-DOC | /documents/ / /request-documents/ | 文件解释/申请 |
| CONV-RFQ / CONV-SAMPLE | /request-a-quote/ / /request-sample/ | 独立请求 |
| RES-TRADE-EU | /resources/eu-titanium-dioxide-anti-dumping-duty/（主表计划，消费owner当前授权） | 时效政策详情 |

Breadcrumb方向Home→Markets→EU→Spain，物理URL不嵌套。没有执行live探测，mapping不等于上线。所有依赖G7登记/G8实施/G9验证，不在G1让买家看到内部缺口。

## 11. 视觉与响应式

DEFERRED_TO_GATE_3_4_5。最低1440/768/390（780仅390@2x），真实长文案/完整模块/菜单/44px与可访问性。共享Global Chrome V0.5无CURRENT、RFQ固定，品牌/生产SVG引用owner；不为Spain独立开发Footer。无新图片/视觉授权。

## 12–13. 开发与可访问性

具体CMS/API/组件/Schema字段DEFERRED_TO_GATE_7；本页G1不实现。沿用site_scope=tio2-my且禁止跨scope fallback。交互、SEO与运行时a11y由相应阶段实现/只读验证；正式视觉需键盘/focus/语义标题/触控，无内部治理词进Buyer Clean。

## 14–15. 自检、审查与用户决定

执行自检依据研究报告§6与Manifest验证记录。2026-09-06总控独立审查已通过，见 `pages/markets/spain/05_review/MARKET-EU-ES_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md`；此结论不代表用户批准，用户仍需在对话看见具体方向/COO句后判断。

| ID | 决定内容 | 当前状态 |
|---|---|---|
| ES-D01 | 意图卡方向与Primary/Secondary CTA | PENDING_USER_DIRECTION_CONFIRMATION |
| ES-D02 | A Certificate of Origin is available upon request.（Spain页及同义SEO/GEO/Schema） | PENDING_USER_FACT_CONFIRMATION |
| MARKET-EU-ES-G1-01 | 本页Gate1研究提交 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |

| Gate | 状态 |
|---|---|
| Gate0 | 登记准入已核对；Brief草案待审，不冒称正式批准 |
| Gate1 | 总控独立审查通过、待用户批准；CONTENT_INTENT_CONFIRMED未确认，未关闭 |
| Gate2 | 本任务NOT_AUTHORIZED；后续由另一Controller按具体授权执行 |
| Gate3–10 | 本次均未授权/未启动 |

## 16–17. 交付与停止点

四核心由本页唯一Manifest映射。此包是Gate1研究，不是开发handoff，不启动其他页/后续Gate/代码/部署/发布。
用户决定后由总控记录批准对象与日期；目前仅为总控审查通过、待用户批准，不登记用户批准日期。

## 18. 版本记录

| 版本 | 日期 | 变化 |
|---|---|---|
| V0.1 | 2026-09-06 | 新建Spain Gate1草案；执行Agent→Skill文件报告→读回综合；未自行批准 |
| V0.1治理同步 | 2026-09-06 | 引用总控独立审查，登记PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL；ES-D01/ES-D02保持待定，未关闭Gate1 |
