# MARKET-EU-DE 声明与证据登记 V0.1

- 日期：2026-09-06；本表状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。
- 本次用Markdown表承载角色合同四项核心中的证据登记职责，方便逐项人工审查；不是新增第五项成果。默认CSV是推荐命名，不改变字段职责；未创建电子表格或另一事实矩阵。
- 网页方法来源S01–S07的实际URL/正文位置见 [方法报告](MARKET-EU-DE_SEARCH_INTENT_EVIDENCE_V0.1.md)；本表仍保留具体原始URL。内部状态不是买家文案。

| ID | 具体命题或判断 | 类型 | 原始来源 / 日期 | 可支持范围 | 使用/用户确认状态与下一步 |
|---|---|---|---|---|---|
| DE-C01 | Germany拥有 `/markets/germany/` 与主词 titanium dioxide supplier germany | 项目身份 | `docs/architecture/PAGE_REGISTRY_V0.2.md` Germany行；`research/keyword/11_page_keyword_master.csv` Germany行；核对2026-09-06 | 页面职责和规划URL，不证明live | `APPROVED_MAPPING_INHERITED`；不修改关键词 |
| DE-C02 | Malaysia-origin titanium dioxide可在本页及同义SEO/GEO/Schema使用 | 用户批准企业事实 | `docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md`；2026-09-05用户全站批准 | 原产地命题；不自动产生不同的文件/税率承诺 | `USER_APPROVED / ACTIVE`，本轮不重新降级 |
| DE-C03 | 当前产品体系有14个Grade；Application/Process关系来自PRODUCT V0.3 | 已批准产品关系 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` + `PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`；批准2026-08-30，核对2026-09-06 | 30 verified/0 conflict/54 no-public；Process 8/5/1；没有德国地域维度 | `APPROVED_RELATION_BASELINE_INHERITED`；不从行业/国家反推型号 |
| DE-C04 | 原词包含供应商调查、小包装交易等不同结果类型 | 定性研究观察 | https://tinoxchem.com/ + https://www.sigmaaldrich.com/DE/de/product/aldrich/232033；读取2026-09-06；采集索引Q1 | 工具样本内容类型，不是德国买家比例 | `RESEARCH_OBSERVATION`；可用于方向判断，不是公开市场统计 |
| DE-C05 | 德国工业涂料存在汽车原厂、修补和金属制品等场景 | 外部行业事实 | https://www.wirsindfarbe.de/statistiken/deutscher-lackmarkt-2025；发布2026-02-11，读取2026-09-06 | 德国行业背景，不支持我司汽车认证/客户关系 | `SOURCE_SUPPORTED / PENDING_PAGE_COPY_APPROVAL`；若使用注明行业背景，不必引入销售额 |
| DE-C06 | 德国塑料加工涉及包装、建筑用品、技术部件等产品 | 外部行业事实 | https://www.gkv.de/de/service/presse/kunststoffverarbeitung-erneut-im-minus.html；发布2026-02-18，读取2026-09-06 | 当地产业范围，不支持任一Grade适用所有用途 | `SOURCE_SUPPORTED / PENDING_PAGE_COPY_APPROVAL` |
| DE-C07 | 汉堡港铁路把港区企业接入欧洲铁路网络 | 外部基础设施事实 | https://www.hamburg-port-authority.de/en/port-railway；无明确出版日，读取2026-09-06 | 网络连接；不是我司运输线路、运输能力或时效 | `SOURCE_SUPPORTED / CONTEXT_ONLY`；无需堆港口营销文案 |
| DE-C08 | 德国询价应说明应用、需求数量及约定目的地；港口名不能替代所有收货需求 | Agent采购内容建议 | DE-C07 + 现行主表CONV-RFQ职责；2026-09-06 | 建议说明问题，非德国独有制度，不改变表单 | `PROPOSED_DIRECTION / PENDING_USER_CONFIRMATION` |
| DE-C09 | 本页建议采购人员为主，技术/QA协同；优先产品评估与商业下一步 | Agent策略判断 | PROJECT_CONTEXT商业目标 + DE-C04–06；2026-09-06 | 选择的页面服务对象，不是SERP证明的访客身份 | `PROPOSED_DIRECTION / DE-D01` |
| DE-C10 | 本公司在德国有仓库或可供本地库存 | 未确认企业命题 | 本轮已读Context/PRD/市场输入未建立；竞品S01不是我司证据；核对2026-09-06 | 仅记录拟增强命题，不认为公司没有该能力 | `PENDING_USER_FACT_CONFIRMATION`；如要成为卖点则请用户说明 |
| DE-C11 | 本公司为德国客户提供德语商务或德语技术文件支持 | 未确认企业命题 | 本轮未建立；EN页面登记不等于禁止其他语言服务；核对2026-09-06 | 需确认商务语言/文件种类，不能从网站语言推断 | `PENDING_USER_FACT_CONFIRMATION`；非研究整体阻塞 |
| DE-C12 | 德国采购可按申请获得COO | 未确认该市场企业命题 | `docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md` EG-002仅MARKET-UK-001批准；核对2026-09-06 | 德国范围尚未登记；未被否定 | `PENDING_USER_FACT_CONFIRMATION`；可先保留申请origin资料的任务路径，不承诺可获得 |
| DE-C13 | 本次Germany方向无需复制EU整套法规/税率内容 | Agent内容分工 | 主表Germany/EU/RES-TRADE-EU行；EU当前Gate7 Package V0.1 §3；核对2026-09-06 | 简短回答和分流，不回避供应方身份/原产地问题 | `PROPOSED_DIRECTION`；最终独特性以Gate 2具体文案检验 |
| DE-C14 | 某一我司Grade是德国专用或优于当地竞争型号 | 不受当前来源支持的推导 | PRODUCT V0.3没有国家维度，DE-C05/06不是性能证据 | 未形成该命题；M-996/M-2196比较冻结保持 | `NOT_PROPOSED / NO_INFERENCE`；不是新增全部Grade内容禁令 |

## 使用规则与事实缺口

已批准企业事实保留批准范围；研究观察、Agent建议和可用来源尚不是新页面文案批准。证据表按命题更新，不按“来源数量”升级状态。无当前税率/海关结论，本轮不制造此类事实。具体服务事实缺失按DE-D02处理，不自动写DO_NOT_RENDER或发给用户整份抽象Hold。
