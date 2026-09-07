# Belgium Page Brief V0.1

## 0. 控制与授权

| 字段 | 值 |
|---|---|
| Page ID / Review ID | MARKET-EU-BE / MARKET-EU-BE-G1-01 |
| 日期 / 责任人 | 2026-09-06 / Gate 1执行子代理；总控独立审查；用户最终批准 |
| 页面生命周期 / 提交状态 | BRIEF_IN_REVIEW / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |
| 授权来源 | 用户要求本controller逐页完成Gate1、做一个确认一个；2026-09-06用户确认荷兰后说“同意。下一步”，按串行控制启动Belgium研究草案 |
| 用户内容确认 / Gate1批准 | PENDING；CONTENT_INTENT_CONFIRMED=PENDING_USER_CONFIRMATION；无批准日期 |
| Gate2 | NOT_STARTED_BY_THIS_CONTROLLER；交另一controller，本文不授予下一Gate |
| 唯一当前入口 | `pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` |

## 1. 身份与关键词

| 字段 | 值 |
|---|---|
| Name / Section / Type | Belgium / MARKETS / Market procurement landing page |
| URL / Canonical方向 | `/markets/belgium/` / `https://tio2malaysia.com/markets/belgium/` |
| Language / Market / Priority | EN / BELGIUM / P2 |
| Mapping / Verification | APPROVED_PRD_V0.3 / QUALITATIVE_KEYWORD_EVIDENCE |
| Playbook / Site scope | MARKET / tio2-my |
| Primary | `titanium dioxide supplier belgium` |
| Secondary | `tio2 supplier belgium`；`malaysia titanium dioxide belgium` |
| Intent / Stage / Cluster | C / Supplier Search / MARKET-EU-02 |
| Excluded | generic application terms；exact grade terms；detailed trade-update terms |
| Ownership原文 | Own Belgium-specific supplier and procurement intent; link to EU-level compliance context. |
| Cannibalization原文 | Country page owns explicit country modifier; EU page owns Europe/EU modifier; Resources owns detailed trade-policy queries. |
| Index / Hreflang | INDEX/FOLLOW为既有可索引市场页目标，最终值Gate2/7确认、Gate9验证；本页EN，无新增FR/NL/German URL或hreflang |

主词与URL在57行主表中各唯一一行；EU父页为MARKET-EU-001 `/markets/european-union/`，不能误写 `/markets/europe/`。正式页面尚未实现，本文不宣称route live。

## 2. 当前输入及旧规则处理

1. 根AGENTS、Context四环节与用户串行授权；`docs/architecture/GATE1_SITE_WIDE_SERIAL_CONTROL_V1.0.md`。
2. `docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.4.md`；Malaysia-origin全站授权V1.0。Belgium COO尚未包含在EG-002，不能从Netherlands批准自动扩张。
3. PRD V0.4、登记册V0.2、关键词主表本页及EU/NL/Products/Applications/Documents/Resources/Conversion竞争行。
4. MARKET_PLAYBOOK_V0.1、PAGE_GATE_1_5_STANDARD_V1.1、PROJECT_GOVERNANCE_DETAILS_V1.0适用章节。
5. PRODUCT V0.3矩阵与统一审计；不新建关系源。
6. 本页研究/证据登记册/搜索方法报告/11份raw，见Manifest。

输入差异：Playbook旧“未验证origin冻结”、conditional RFQ和route-live先决语言由最新全站origin授权、根§2.4/2.6及固定RFQ覆盖；旧模板“缺证即DO_NOT_RENDER”不沿用。旧研究将Germany作为EU proxy，不可作为Belgium指标。没有覆盖历史文件或擅改主表。

## 3. Page Intent Card（等待BE-D01）

| 项目 | 本轮建议 |
|---|---|
| Audience | 面向Belgium生产用途的工业TiO2采购与技术评估人员，重点为涂料/塑料配方和加工需求；进口商或分销采购作为次级读者，不假定所有访客为当地制造商 |
| Buyer problem | 在本地生产者、跨境供应商、分散液供应和试剂目录并存的搜索结果中，明确本网站提供的是Malaysia-origin工业颜料产品；按实际用途确认型号资料，再给出Belgium采购需求 |
| Core message | 将Malaysia-origin titanium dioxide作为面向Belgium工业采购的产品来源选择，帮助读者从应用需求进入型号评估并发起具体询价；不是本地工厂、仓库或即购试剂目录 |
| Must include | 已批准Malaysia-origin；工业产品身份与Products路径；应用/型号/采购数量和Belgium目的地作为沟通任务；文件申请路径；EU信息owner入口；COO一句话仅待BE-D02决定 |
| Must exclude | 不复制同行或换国家名；不借KRONOS/Norkem事实宣称我方本地制造、浆料、仓储、港口和交期；不添加试剂/食品/化妆品/成品涂料的供应承诺；不制造技术等效、关税优势或客户名录 |
| Primary CTA | Request a Quote → CONV-RFQ `/request-a-quote/`；根据采购任务选择，不是竞品CTA投票结果 |
| Secondary CTA | Explore Products → PRODUCT-000 `/products/`；供尚不确定型号的读者 |
| Ownership boundary | 本页拥有Belgium supplier/procurement方向；EU总页负责EU语境，Products/Grades负责技术事实，Applications负责泛应用评估，Documents解释文件，Conversion处理请求，Resources负责时效贸易详情 |

上述行业重点是Agent结合项目B2B目标、P01/P04可读供应页面和Q03有限行业线索的编辑建议，不是Belgium需求份额结论。Gate2不得把它改成“比利时主要/最大TiO2市场”。

## 4. 必须回答的问题与Gate2输入

| ID | 买家问题 | 本页应给出的方向 / 边界 |
|---|---|---|
| BE-BQ01 | 这里提供哪一种TiO2，是否适合进入我的工业选料流程？ | 先清楚表达已批准产品体系与Malaysia-origin；引导按用途查看Products。研究发现粉体/浆料/高纯试剂不可混同，不为本公司新增剂型 |
| BE-BQ02 | 我需要提供什么才能开始评估和询价？ | 应用/当前型号或要求、数量、Belgium目的地；使用既有RFQ工作流，不新建表单字段或承诺报价时限 |
| BE-BQ03 | 比利时页面是不是意味着产品在比利时制造或有现货？ | 正面说清Malaysia-origin与Belgium采购目的地是不同信息；不使用本地地址/仓库/旗帜暗示，无需买家界面重复免责 |
| BE-BQ04 | 型号资料和原产地文件从哪里申请？ | Documents与Request Documents独立owner；COO on request按BE-D02，不能等同自动寄送、每票COO或监管批准 |
| BE-BQ05 | EU法规、文件解释和贸易更新去哪里看？ | EU/Docs/Resources各自导流，本页不扩写现行法规与税率 |

回答优先级与证据细节见研究§4；这里只锁方向，不锁最终文案、模块顺序、H1/Meta或Schema代码。Gate2须先提交内容骨架给用户，再完成全文。

## 5. 页面独有内容与GEO

- 当地搜索环境：KRONOS Belgium地点页、Brenntag Belgium产品页与TCI Belgium试剂目录并存，故“Belgium作为采购目的地”不能被读成每家都是比利时制造；用清楚的公司/产品来源信息解决判断，不做对手名录。
- FR扩展Norkem给出粉体/悬浮液差异，成品涂料/涂装服务也被检出；本页必须明确工业颜料/产品评估对象，不泛称任何TiO2方案都可供应。
- 行业语境只作线索：essenscia/IVP搜索返回显示涂料、油墨和塑料领域，但正文超时；不发布其成员数、市场比例或将油墨设为未经证明的“第一需求”。
- 可能answer-ready方向：工业颜料需求怎样带入型号评估；产品来源与Belgium目的地怎样表达；怎样从型号资料进入采购请求。答案深度是本页方向，不是最终FAQ文本。
- 实体：TiO2 Malaysia → IKHLAS TITANIUM (MALAYSIA) SDN. BHD.；Malaysia-origin工业TiO2；Belgium目的市场；EU父页与Products/Documents/Conversion导航关系。不得把导航关系升级成型号在Belgium获认证或现场库存。
- Schema候选仅WebPage/BreadcrumbList及与可见内容一致的关系；Gate2/7细化。不得用LocalBusiness暗示比利时机构；无当地办公实体事实。
- 时间敏感：精确税率、贸易措施、注册适用、实时库存/交期全部不在本轮新发布命题内；未来若提出，先核对当前官方来源/用户具体事实，不能自动禁止或伪造。

## 6. 产品及事实范围

PRODUCT V0.3共84关系、30 verified/0 conflict/54 no-public，Process 8 Chloride/5 Sulfate/1 Vapor-phase oxidation。这里只引用全局集合；零条“为Belgium推荐某Grade”结论。M-2377五应用+Sulfate保留，Specialty无公开映射、Rubber仅证据登记；M-996/M-2196比较冻结；NO_PUBLIC_MAPPING不表示不适用。

本页唯一新增企业事实确认为BE-D02：“A Certificate of Origin is available upon request.”，本页可见和等义SEO/GEO/社交/Schema范围，状态PENDING_USER_FACT_CONFIRMATION。其他页已批准不等于本页批准；不提出every-shipment、关税或通关结果。未计划的本地仓储/交期/浆料能力不是为凑清单而要求用户回答；将来要增加时再给具体命题。

## 7. 内链、CTA与共享合同

| Owner | 路径 / 使用 |
|---|---|
| MARKET-000 | `/markets/`；上游市场选择和返回入口 |
| MARKET-EU-001 | `/markets/european-union/`；EU层上下文与父关系 |
| PRODUCT-000 | `/products/`；主选型出口；不创建国家版Grade |
| APP-000 | `/applications/`；泛应用目录；子页确切URL由其当前Manifest消费 |
| DOC-000 | `/documents/`；文件用途与申请说明 |
| CONV-DOC | `/request-documents/`；只传接收页批准参数，不能把market塞成文件适用性/国家过滤。Country/Region是联系公司位置，不按本页Belgium自动预填 |
| CONV-RFQ | `/request-a-quote/`；Belgium作为明确页面目的地上下文可建议可编辑预填，精确字段/参数须消费接收页当前合同；不能擅加市场字段 |
| CONV-SAMPLE | `/request-sample/`；需要评估样品时的支持路径，不承诺免费/库存/发货 |
| RES-TRADE-EU | Page ID优先消费其当前合同；仅未来新鲜且可访问时链接，不据旧主表词生成贸易结论 |

Header/Footer与Mobile Menu使用Home/Global Chrome共享规范V0.5；nav=Markets，无买家可见CURRENT；固定Request a Quote。品牌Visual Standard/CTA Addendum/production SVG当前Manifest为后续视觉输入，不在Gate1开发分叉。未来1440/768/390完整视口、44px触控及读者内容均遵循Gate标准，当前无视觉提交。

## 8. 阶段与自检

| 项 | 状态 / 实际结论 |
|---|---|
| Page/URL/主词准入 | 已登记且本轮串行授权研究；无新增Page ID、URL、语言或关键词 |
| Gate1 | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL；研究质量经总控独立复审通过，仍未用户批准/关闭 |
| BE-D01 | PENDING_USER_CONFIRMATION：确认§3方向和CTA |
| BE-D02 | PENDING_USER_FACT_CONFIRMATION：确认本页COO on request |
| Gate2–7 | 不在本任务启动；Gate2另一controller承接，不自行交付获批全文 |
| Gate8–10 | NOT_AUTHORIZED；无代码/部署/发布/索引 |
| 五项执行自检 | 研究§8逐项定位：方向明确、必须问题有回答、精确证据、Gate2可消费、未决可行动 |
| 回退 | 新建V0.1草案，无旧批准Belgium文件可覆盖；否决只返修本页，不动其他国 |

版本记录：2026-09-06 V0.1建立Belgium Gate1四核心与方法证据；同日按 `pages/markets/belgium/05_review/MARKET-EU-BE_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md` 同步总控复审通过、待用户批准。BE-D01/02仍待确认，未在D:\16Wordpress_nextjs执行操作。
