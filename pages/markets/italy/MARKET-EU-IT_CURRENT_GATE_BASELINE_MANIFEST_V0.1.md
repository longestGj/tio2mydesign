# MARKET-EU-IT 当前Gate基线Manifest V0.1

## 1. 身份与阶段

| 字段 | 当前值 |
|---|---|
| 日期 / Page ID | 2026-09-06 / MARKET-EU-IT |
| URL / Language / Type | /markets/italy/ / EN / Market procurement landing page |
| Mapping / Verification | APPROVED_PRD_V0.3 / QUALITATIVE_KEYWORD_EVIDENCE |
| 生命周期 | BRIEF_IN_REVIEW |
| Review ID / 当前总控复审状态 | MARKET-EU-IT-G1-01 / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |
| 内容意图 | PENDING_USER_CONTENT_INTENT_CONFIRMATION |
| 用户内容批准 | NOT_GRANTED；批准日期NOT_APPLICABLE |
| 当前允许 | Italy单页Gate1研究已通过总控复审，等待用户意图确认；不进入后续Gate |
| Gate2–10 | NOT_AUTHORIZED / NOT_STARTED |
| 已发布 / runtime验收 | 未由本次任务确认，不从映射状态推导 |

本轮来源：用户要求找一个未开工页“也做掉”，并明确“使用子代理的模式，调用agent，然后agent会调用skill”；总控选择Italy并限定Gate1。当前既定Page ID和URL不变；不是旧Market串行表的整体批准。Gate1方向尚未由用户确认，不自行关闭。

## 2. Authority / Consumption Order

指令优先级遵守根AGENTS。本轮阅读顺序为：先本Manifest识别范围与文件组合，再完整读Brief、研究报告、命题表和方法证据。事实与页面权威顺序为最新明确用户决定 → 已批准具体页面合同（Italy尚无）→ 当前批准PRD及增补 → Registry/关键词实施主表 → 已批准Playbook → 有效证据 → 研究建议。Italy草案只组织本轮提案，不因在阅读顺序靠前而覆盖批准源。

事实单独按源读取：Malaysia-origin用全站授权V1.0与决定登记册EG-001；COO用EG-002的页面范围；产品关系只用PRODUCT V0.3矩阵与统一审计。旧Playbook的缺证自动冻结/旧Origin Hold/未live即影响设计的语言由当前根规则覆盖，见Brief IT-C01–03。研究不是新事实授权。

## 3. 四项核心交付

| 核心 | 当前文件 / 覆盖 |
|---|---|
| 1 Brief | [MARKET-EU-IT_ITALY_BRIEF_V0.1.md](../../../docs/page-briefs/MARKET-EU-IT_ITALY_BRIEF_V0.1.md)：完整Gate1身份、意图卡、关键词、CTA/内链方向、后续待定字段、用户待决定与阶段 |
| 2 综合研究报告 | [MARKET-EU-IT_GATE1_RESEARCH_REPORT_V0.1.md](01_research/MARKET-EU-IT_GATE1_RESEARCH_REPORT_V0.1.md)：复用/缺口、发现/反例、买家问题、Agent判断、五项附依据自检 |
| 3 CSV命题证据表 | [MARKET-EU-IT_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv](01_research/MARKET-EU-IT_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv)：16个唯一命题，13字段，含精确命题、来源/日期/作用域、性质与用户决定 |
| 4 当前Manifest | 本文件；唯一当前组合，不记录自身哈希 |

支持件而非第五核心：[方法报告](01_research/MARKET-EU-IT_SEARCH_INTENT_EVIDENCE_V0.1.md)、[采集索引](01_research/evidence/MARKET-EU-IT_SEARCH_CAPTURE_INDEX_V0.1.md)及10份只读原始JSON。方法报告已保存、全文读回，Agent实际读取后综合，交接见研究报告§3。

当前独立复审依据：[MARKET-EU-IT_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md](05_review/MARKET-EU-IT_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md)，由项目总控独立读取四核心与支持证据后作出 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；不是执行子代理自检。Gate1尚未用户批准、未CLOSED。

## 4. 事实与依赖

- 本页建议supplier/product first，使用木器/工业涂料、compound/masterbatch、包装印刷语境；不是当地需求规模或用户职业统计。主RFQ、次Products仍是候选。
- IT-D01：用户确认具体方向和CTA；IT-D02：是否允许Italy说COO可按申请提供。Origin全站已批准，不重问。
- Italy语言服务、库存/仓库/客户等没有被当前草案虚构，也没有被判定不存在；如需要成为实际命题，再交用户确认。不是整页Hold。
- PRODUCT V0.3 SHA-256 `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`；84行、24字段、30/0/54。共享审计Process8/5/1与比较边界不变；无新增Italy型号关系。
- 本地Google SERP、Semrush指标未采集，非登录故障；因此没有量化、当地排名或语言覆盖结论。
- 下游route/表单精确预填与runtime未核验；Gate2核对合同，Gate7登记、Gate8实现、Gate9验收，不能直接声称live。
- Global Chrome引用V0.5、正式production SVG Manifest与当前共享法律合同；nav key=markets、固定RFQ、无可见CURRENT，不另造Header/Footer。

## 5. 资产与版本

Gate2文案/模块顺序、Gate3线框、Gate4方向、Gate5视觉资产均未生成；1440/768/390完整证据要求留正确阶段，不能把本研究当成视觉验收。未调用Superdesign，未触碰开发项目。Italy无被覆盖旧成果；Germany、角色/Skill、共享规范和原始回执不修改。

## 6. 提交完整性核对

执行任务保存后读回四核心及两个支持Markdown：文件路径可访问；CSV解析为16行、唯一ID16、13列；10份原始JSON均可解析且SHA与采集索引相同；PRODUCT矩阵84行/24列及SHA不变。Markdown冲突标记/行末空白检查为0；本页引用的相对Markdown链接均指向存在文件。核对是文件/执行自检，不是总控PASS。

状态历史：2026-09-06初始执行提交为 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；同日总控独立复审后仅同步Brief、研究报告与本Manifest的当前复审状态，研究、方法报告、命题CSV与原始证据不改写。

研究执行已停止，现等待用户意图确认；不自写用户APPROVED/CLOSED，不进入Gate2。向用户直接在聊天呈现IT-D01/02，不要求用户先读文件。
