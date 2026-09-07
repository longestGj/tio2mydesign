# 全站 Gate 1 串行总控合同与覆盖清单 V1.0

## 1. 用户决定与分工

- 日期：2026-09-06。
- 原话：“现在gate2交给别的controller去做了。你就负责完成所有页面的gate1.做一个我确认一个。”
- 状态：`USER_AUTHORIZED_GATE1_SERIAL_SCOPE`。覆盖当前登记册57个Page ID的Gate1完成/复用核对，不新增页面、URL、关键词或发布授权。
- 本controller只负责Gate1：准入/既有资料核对、派发执行子代理、独立审查、直接展示具体内容、保存用户决定、维护交付入口。
- Gate2由用户安排的另一个controller负责。本记录不猜测该任务ID，不创建新任务，不向未知任务发送消息；也不代表本controller授予任何Gate2及以后权限。
- 延续用户明确选择的子代理方式：执行者读取 `agents/gate1-execution/agent.md`，按需实际读取和执行 `skills/search-intent-evidence-analysis/SKILL.md`，保存方法报告并读回后综合。Skill不替Agent决定页面方向，总控不以子代理自检代替独立审查。
- 不新增定时任务；不存在无人值守越过用户确认的执行。

## 2. 单页循环与停止点

1. 查当前身份/关键词/Brief/Manifest及已有owner；有旧成果先复用，禁止从文件名缺失推断整页从未开始。
2. 每次只允许一个新的Gate1页面处于执行/返修/等待用户确认。队列盘点可并行，不能并行制作第二页。
3. 子代理完成四核心：Brief、综合研究报告、命题证据登记册、唯一Manifest；方法支持件/原始证据另存并被引用。
4. 总控独立读成果与来源；有问题退回同一子代理定向改，不把执行自检计数当通过。
5. 向用户展示读者、核心问题、回答重点、职责、CTA和实际待决定事实，不要求自行读文件。
6. 用户确认本页后记录内容/事实批准与阶段授权，按其具体范围解释；不要求用户重复确认已同意对象。Gate1正式阶段状态按实际批准来源登记，不依靠调度自动关闭。
7. 确认一页后本controller可开始下一页Gate1，但不能替Gate2 controller写整页文案或推进后续阶段。交接通过唯一Manifest定位，不迁移/复制竞争基线。
8. 当前页尚有待用户决定时停在该页；不是连续做完所有页后集中送审。

既有已推进后续Gate的页面不因新角色/Skill建立而重做。盘点记录并不重新确认其历史Gate有效性；若发现真实Gate1缺口，明确对象和影响后进行定向补齐，不擅自推翻下游批准。

## 3. 本次起点和排队口径

- Germany、Italy均已在2026-09-07补齐独立审查/用户阶段批准并正式关闭Gate 1；保留各自研究方法与国家差异，不重做已确认内容。
- Spain、Poland、Netherlands的方向/CTA与COO既有批准保持。Belgium、India、Brazil English与Brazil Portuguese均已完成各自用户确认并登记Gate1 V0.2批准组合。Brazil Portuguese于2026-09-06获用户“批准。”确认D01方向/CTA、D02葡语COO与D03规划路径；Market页面Gate1串行队列至此完成。
- 排序是本Gate1任务的工作安排，不改变主表P0/P1/P2/P3或其他controller既有任务。Spain之后先完成同类国家页，再工艺/应用/Resources；Contact复用旧审计再核对owner。用户可随时调整。
- 旧 `pages/markets/MARKET_REMAINING_CHILD_PAGES_SERIAL_SCHEDULE_V0.1.md` 自身未获用户批准、且以每页Gate5为串行解锁点。本次最新授权是跨页Gate1、逐页确认，不从旧表推导Gate2–5授权。
- `PROVISIONAL_URL` / `NEW_PAGE_CANDIDATE` 页面只在原登记职责内研究，不能借“所有页面”把候选URL或页面方案晋升为批准。
- APP-PAPER存在其他controller的上游文章工作；CONTACT-001已有独立旧审计。排到它们时先核对归属和最新成果，不覆盖或重复生产。

## 4. 57页覆盖盘点（不是57页独立质量审查）

盘点来源：当前Registry V0.2、关键词主表、Status V0.166、pages/和Brief文件名检索；另读取Contact旧Brief/审计、APP-PAPER方向和定向返修决定、旧Market串行表。后续阶段页面本次仅保留已有记录，未逐一复验其全部历史Gate1。所有`QUEUED_PRECHECK`均需到页前再核对最新状态，不能当成最终“从未开工”结论。

| Page ID | 页面 | 登记URL | 本轮处理状态 | 后续动作 |
|---|---|---|---|---|
| HOME-001 | Home | `/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| ABOUT-001 | About TiO2 Malaysia | `/about/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| MARKET-000 | Markets | `/markets/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| MARKET-EU-001 | European Union | `/markets/european-union/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| MARKET-EU-DE | Germany | `/markets/germany/` | GATE1_APPROVED_CLOSED | 2026-09-07总控独立复审PASS且用户条件批准关闭；[当前Manifest V0.3](../../pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)；DE-D02可选事实未批准且不阻塞；Gate2由其他controller负责 |
| MARKET-EU-IT | Italy | `/markets/italy/` | GATE1_APPROVED_CLOSED | 2026-09-07用户条件批准补齐阶段关闭；方向/CTA和COO保持；[当前Manifest V0.3](../../pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)；Gate2由其他controller负责 |
| MARKET-EU-ES | Spain | `/markets/spain/` | GATE1_APPROVED_CLOSED | 顺序1；用户2026-09-06确认方向/CTA与Spain COO，V0.2为当前批准组合；Gate2交其他controller |
| MARKET-EU-PL | Poland | `/markets/poland/` | GATE1_APPROVED_CLOSED | 顺序2；用户2026-09-06“同意。”批准方向/CTA与COO；[当前Manifest V0.2](../../pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)已核对，V0.1保留历史；Gate2由其他controller负责 |
| MARKET-EU-NL | Netherlands | `/markets/netherlands/` | GATE1_APPROVED_CLOSED | 顺序3；用户2026-09-06“同意。下一步”批准NL-D01方向/CTA与NL-D02 COO；[当前Manifest V0.2](../../pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)；总控核对10项当前/历史hash，Gate2交其他controller |
| MARKET-EU-BE | Belgium | `/markets/belgium/` | GATE1_APPROVED_CLOSED | 顺序4；用户2026-09-06原话“继续”确认两项；[当前Manifest V0.2](../../pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)，总控核对10项hash/bytes一致；原V0.1/raw保留，Gate2交其他controller |
| MARKET-UK-001 | United Kingdom | `/markets/united-kingdom/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| MARKET-IN-001 | India | `/markets/india/` | GATE1_APPROVED_CLOSED | 顺序5；用户2026-09-06“继续”确认方向/CTA与India COO；[当前Manifest V0.2](../../pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)，旧V0.1/raw保留，Gate2交其他controller |
| MARKET-BR-EN | Brazil | `/markets/brazil/` | GATE1_APPROVED_CLOSED | 顺序6；用户2026-09-06“同意。”确认BR-EN-D01/D02；[当前Manifest V0.2](../../pages/markets/brazil/MARKET-BR-EN_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)，Gate2交其他controller |
| MARKET-BR-PT | Brazil Portuguese | `/pt-br/markets/brazil/` | GATE1_APPROVED_CLOSED | 顺序7；用户2026-09-06“批准。”确认D01-D03；[当前Manifest V0.2](../../pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)，Gate2交其他controller |
| PRODUCT-000 | Titanium Dioxide Products | `/products/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| PRODUCT-PROC-CL | Chloride Process Titanium Dioxide | `/products/chloride-process-titanium-dioxide/` | GATE1_APPROVED_CLOSED | 顺序8；用户2026-09-06“同意。”批准PROC-CL-D01；当前Manifest V0.2，Gate2交其他controller |
| PRODUCT-PROC-SU | Sulfate Process Titanium Dioxide | `/products/sulfate-process-titanium-dioxide/` | GATE1_APPROVED_CLOSED | 顺序9；用户2026-09-06“同意，下一个。”批准PROC-SU-D01；当前Manifest V0.2，Gate2交其他controller |
| GRADE-M350 | M-350 | `/products/m-350/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M510 | M-510 | `/products/m-510/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M896 | M-896 | `/products/m-896/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M996 | M-996 | `/products/m-996/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M2196 | M-2196 | `/products/m-2196/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M895 | M-895 | `/products/m-895/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M200 | M-200 | `/products/m-200/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M108 | M-108 | `/products/m-108/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M210 | M-210 | `/products/m-210/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M340 | M-340 | `/products/m-340/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M886 | M-886 | `/products/m-886/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M52 | M-52 | `/products/m-52/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-M2377 | M-2377 | `/products/m-2377/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| GRADE-CR901 | CR-901 | `/products/cr-901/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| APP-000 | Applications | `/applications/` | DEDICATED_APP_PIPELINE / NOT_IN_THIS_SERIAL | 用户2026-09-07确认APP页面文章均已完成，后续有专门处理；本文不把文章完成改写为Gate批准，也不干预专门流程 |
| APP-COAT | TiO2 for Coatings | `/applications/titanium-dioxide-for-coatings/` | DEDICATED_APP_PIPELINE / NOT_IN_THIS_SERIAL | 用户2026-09-07确认文章已完成并由专门流程继续；不在本Gate1串行任务启动或审批 |
| APP-PLAS | TiO2 for Plastics | `/applications/titanium-dioxide-for-plastics/` | DEDICATED_APP_PIPELINE / NOT_IN_THIS_SERIAL | 用户2026-09-07确认文章已完成并由专门流程继续；不在本Gate1串行任务启动或审批 |
| APP-MB | TiO2 for Masterbatch | `/applications/titanium-dioxide-for-masterbatch/` | DEDICATED_APP_PIPELINE / NOT_IN_THIS_SERIAL | 用户2026-09-07确认文章已完成并由专门流程继续；不在本Gate1串行任务启动或审批 |
| APP-INK | TiO2 for Printing Inks | `/applications/titanium-dioxide-for-printing-inks/` | DEDICATED_APP_PIPELINE / NOT_IN_THIS_SERIAL | 用户2026-09-07确认文章已完成并由专门流程继续；不在本Gate1串行任务启动或审批 |
| APP-PAPER | TiO2 for Paper | `/applications/titanium-dioxide-for-paper/` | DEDICATED_APP_PIPELINE / NOT_IN_THIS_SERIAL | 用户2026-09-07确认文章已完成并由专门流程继续；不在本Gate1串行任务启动或审批 |
| DOC-000 | Documents & Compliance | `/documents/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| DOC-REACH | Titanium Dioxide REACH | `/documents/reach/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| DOC-TDS | TDS, SDS & COA | `/documents/tds-sds-coa/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| DOC-COO | Certificate of Origin | `/documents/certificate-of-origin/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| CONV-DOC | Request Documents | `/request-documents/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| RES-000 | Resources | `/resources/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| RES-ORIGIN | Non-China Titanium Dioxide Supply Guide | `/resources/non-china-titanium-dioxide/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| RES-PROC | Chloride vs Sulfate Titanium Dioxide | `/resources/chloride-vs-sulfate-titanium-dioxide/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| RES-CHEMOURS | Chemours Titanium Dioxide Alternatives | `/resources/chemours-titanium-dioxide-alternatives/` | GATE1_APPROVED_CLOSED | 用户2026-09-06回复“同意。下一步”批准品牌级评估方法页、Products→Request Documents行动顺序及`RES-R706`精确意图分工；Gate2由其他controller负责 |
| RES-R706 | Ti-Pure R-706 Alternative Direction | `/resources/ti-pure-r-706-alternative/` | GATE1_APPROVED_CLOSED | 顺序19；用户2026-09-07回复“同意。”批准R-706专属资格评估指南及Products Hub→Request Documents→条件性Request Sample顺序；当前不命名IKHLAS等效型号，未来可由受控比较包与用户决定更新；Gate2由其他controller负责 |
| RES-TRADE-EU | EU Titanium Dioxide Trade Update | `/resources/eu-titanium-dioxide-anti-dumping-duty/` | GATE1_APPROVED_CLOSED | 用户2026-09-06“同意。”批准`EU-TRADE-D01`；当前措施优先、再调查pending、核验清单与CTA层级已确认；Gate2由其他controller负责 |
| RES-TRADE-UK | UK Titanium Dioxide Trade Update | `/resources/uk-titanium-dioxide-anti-dumping-investigation/` | GATE1_APPROVED_CLOSED | 用户2026-09-06“同意。”批准`UK-TRADE-D01`；调查/登记/税率区分、GB/NI路径、清单与CTA已确认；Gate2由其他controller负责 |
| RES-TRADE-IN | India Titanium Dioxide Trade Update | `/resources/india-titanium-dioxide-anti-dumping-duty/` | GATE1_APPROVED_CLOSED | 用户2026-09-06“同意。”批准`IN-TRADE-D01`；2025撤销、2026建议未核实实施、两条USD 681路径、清单与CTA已确认；Gate2由其他controller负责 |
| RES-TRADE-BR | Brazil Titanium Dioxide Trade Update | `/resources/brazil-titanium-dioxide-anti-dumping-duty/` | GATE1_APPROVED_CLOSED | 用户2026-09-06回复“同意”批准`BR-TRADE-D01`；当前最终措施、四档税额、850修订、排除范围、公共利益程序、CTA与新鲜度已确认；Gate2由其他controller负责 |
| CONV-RFQ | Request a Quote | `/request-a-quote/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| CONV-SAMPLE | Request a Sample | `/request-sample/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| CONTACT-001 | Contact | `/contact/` | GATE1_DRAFT_COMPLETE / USER_DEFERRED_TO_LAST | 原顺序20；2026-09-07 Agent与搜索意图Skill执行包已完成但尚未总控复审或用户批准；用户明确“这个contact先放过，最后做”，因此保留草案、不进入Gate2，待全站最后处理 |
| LEGAL-PRIV-EN | Privacy Policy / Privacy Notice | `/privacy-policy/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| LEGAL-PRIV-MS | Dasar Privasi / Notis Perlindungan Data Peribadi | `/ms/privacy-policy/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |
| LEGAL-COOKIE-EN | Cookie Policy | `/cookie-policy/` | EXISTING_STAGE_RECORD / NOT_REOPENED | 状态表已有后续阶段记录；不因本计划重做，不将本次盘点当新Gate1审查 |

## 5. 当前交接入口

- [Germany当前Manifest V0.3](../../pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)：独立总控审查PASS、用户阶段批准及Gate 1关闭已补齐；DE-D02保持可选未批准，不由本任务继续Gate2。
- [Italy当前Manifest V0.3](../../pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)：方向/CTA、COO及Gate 1阶段均已批准关闭；历史独立研究复审保留，不由本任务继续Gate2。
- Spain当前成果：[唯一Manifest V0.2](../../pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)；[独立审查历史](../../pages/markets/spain/05_review/MARKET-EU-ES_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md)。用户2026-09-06确认已落档；V0.1保持原样。
- Poland当前成果：[唯一Manifest V0.2](../../pages/markets/poland/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)；[独立审查历史](../../pages/markets/poland/05_review/MARKET-EU-PL_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md)。2026-09-06用户“同意。”已落档，四核心批准，新旧十项hash已由总控核对；不启动Gate2。
- Netherlands当前批准成果：[唯一Manifest V0.2](../../pages/markets/netherlands/MARKET-EU-NL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)；[独立审查历史](../../pages/markets/netherlands/05_review/MARKET-EU-NL_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md)。2026-09-06用户“同意。下一步”批准NL-D01/NL-D02及Gate1，V0.1与原始证据未覆盖；不启动Gate2。
- Belgium当前批准成果：[唯一Manifest V0.2](../../pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)；[独立审查历史](../../pages/markets/belgium/05_review/MARKET-EU-BE_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md)。用户2026-09-06原话“继续”确认BE-D01/BE-D02；Gate1 APPROVED / CLOSED，20命题ID保留，11份raw与原V0.1不变。Gate2由其他controller负责。
- India当前批准成果：[唯一Manifest V0.2](../../pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)；[独立审查V0.1](../../pages/markets/india/05_review/MARKET-IN-001_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md)。用户2026-09-06“继续”批准IN-D01/IN-D02，Gate1 APPROVED / CLOSED；10项新旧/support hash及8份raw由总控核对，20命题无pending。旧Semrush保留原日期，具体贸易结论未形成；Gate2交其他controller。
- 最新公司事实由[决定登记册V1.8](EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md)继承。UK/Italy/Spain/Poland/Netherlands/Belgium/India/Brazil English/Brazil Portuguese COO批准不自动改成其他页批准，也不机械制造无关能力问卷。

## 6. 维护与边界

每次只更新当前页状态、用户决定及下一页选择。原始证据/批准版本保留；根AGENTS不追加每日队列。Status/Index导航本记录；子代理不修改共享入口，防止并发覆盖。所有页面Gate2–10及开发项目不在此controller的当前执行范围，禁止操作D:/16Wordpress_nextjs。

结束标准：当前登记范围内各页Gate1缺口已完成或已映射可复用成果、逐页获得用户所需确认、未决和交接入口真实明确；不能因队列耗时或某页已开发就宣称全站Gate1已独立验收。
