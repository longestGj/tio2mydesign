# Belgium Gate 1 综合研究 V0.1

## 0. 控制

MARKET-EU-BE / MARKET-EU-BE-G1-01；2026-09-06；BRIEF_IN_REVIEW / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL。执行Agent已完整读取 `agents/gate1-execution/agent.md` 与 `skills/search-intent-evidence-analysis/SKILL.md`，实际完成采集→保存方法报告→全文读回→本报告综合，不以返回摘要代替消费。总控已独立复审研究质量通过，用户方向与本页COO仍待确认；Gate1未用户批准/关闭。

## 1. 先复用，后补缺口

| 输入类别 | 现有内容 / 本轮动作 |
|---|---|
| 直接复用 | PRD V0.4已有B2B目标、品牌主体、Belgium注册身份；主表原词/两辅助词；EU层owner；Malaysia-origin全站授权；PRODUCT V0.3；固定共享RFQ |
| 需要更新 | 2026-08-29旧关键词01第Belgium行指标Unavailable且引Germany proxy；02聚类明确其他国数据未得；09 QA要求单独重查Belgium。旧研究不支撑本次原词分布/数字需求 |
| 本页缺口1 | 独立原词究竟指向工业供应、当地制造、试剂还是别的任务？影响产品身份和资格判断，BE-Q01单独查询 |
| 本页缺口2 | 当地语言扩展能否发现会改变产品形态/采购对象的反例？BE-Q02 FR，发现粉体/浆料、成品涂料/涂装服务等 |
| 本页缺口3 | 比利时涂料/塑料行业语境是否存在？BE-Q03定向协会，正文失败但保留搜索层线索；只作方向佐证，不据此发布行业规模或第一需求 |

没有重新调查网站目标、产品体系或重复询问Malaysia-origin。没有把Semrush缺测当零搜索量或用Germany替Belgium。

## 2. 方法交接与来源边界

[方法报告](MARKET-EU-BE_SEARCH_INTENT_EVIDENCE_V0.1.md)已保存并全文读回；[11份raw索引](evidence/MARKET-EU-BE_RAW_EVIDENCE_INDEX_V0.1.csv)保存actual args/result、字节、SHA。原词21条返回包含同源/不同locale，不是21家供应商，不是Google当地排名。

本轮实际观察：Brenntag BE产品介绍（P01 L9–18、70–93，Contact L2/123）；KRONOS Belgium场地（P02 L75–86、139–153）；TCI BE高纯试剂和文档查询（P03 L172–211、277–318）；Norkem粉体/浆料产品介绍（P04 L59–65）。原词/FR/NL查询目的不同，不合并比例。P05/P07同URL同工具重试，P06/P08为IVP具体页及首页，均超时。

Norkem抓取元数据为Crawled 1.4 years ago，2026-09-06为本次读取日，不升级其Belgium工厂为当天实地核验。KRONOS地点及能力也只是一方自述。TCI能看到查询字段与错误模板，不等于已请求或下载文件。

## 3. 发现 → 解释 → 页面决定建议

| 发现与证据 | Agent解释（不等于市场统计） | 页面影响 |
|---|---|---|
| Q01原词同时返回P01商业产品、P02工厂、P03试剂以及联盟/研究 | country supplier不是单一意图；企业/原料身份必须清晰 | 保持主表C/Supplier Search的页面任务，以工业TiO2和Malaysia-origin解释本网站，不仿试剂购物车 |
| P04粉体/悬浮液分别介绍，Q02涂料成品和服务商混入 | 用户需要先确认采购对象和形态，而非只看TiO2化学名称 | 产品评估路径说明我们当前批准产品体系；不因同行有浆料就追加我方剂型 |
| P01在Belgium English页面讲涂料/塑料；Q03协会搜索层也有相关产业 | 涂料/塑料作为编辑入口有语境，但无当地需求份额证据 | 面向工业采购和技术评估，以涂料/塑料为重点，进口商/分销采购兼顾；油墨/其他体系通过Products/Applications承接，不强设排名 |
| P02 Ghent本地制造、P04Belgium浆料加工、Q01目录混入别国企业 | 供应商所在地、原料原产地、订单目的地不能混成一个字段 | 用Malaysia-origin + Belgium采购目标表达，不编造Antwerp仓库/当地现货；可给目的地需求但不预设港口 |
| P03文件按语言/批次有查询逻辑；P01产品咨询入口不是文件下载 | 文件是型号评估支持路径，不是搜索结果里“有按钮”就能当我方全部文件可得 | 连接Docs与CONV-DOC；本页COO单独确认；不新增country-based文件过滤 |

## 4. 读者、优先级与反例

建议读者：为Belgium生产用途采购工业TiO2的采购负责人和技术/配方评估人员；涂料与塑料相关需求先容易找到路径，进口商或分销采购为次级。依据是项目工业B2B目标、可读供应页面与有限当地行业线索的组合判断，不宣称访客身份调查。

| 优先级 | 必须回答 / 深度 | 为什么 | 证据 / owner |
|---|---|---|---|
| P1 | 这是何种工业TiO2与来源？ | 先排除找错采购对象，避免把Belgium读成制造地 | Q01/P02/P03/P04 + 已批准PRD/origin |
| P1 | 应如何开始选型号并提出采购需求？ | 同一TiO2名称下类型不同，采购需要用途和要求 | P01/P04 + PRODUCT-000/CONV-RFQ |
| P1 | 产品文件及COO如何申请？ | 来源与产品评估需要清楚支持路径 | P03仅观察 + 自有CONV-DOC合同 + BE-D02 |
| P2 | 想了解EU政策、注册及贸易去哪里？ | 有Q01联盟反例，但不让本页变政策页 | MARKET-EU-001、DOC-REACH、RES-TRADE-EU |
| 不展开 | 本地港口路线、仓储、现货、税率或每批证书承诺 | 不属于本次已提出的页面必要内容，不能从竞品补写 | 未来具体需要时提交用户/当前官方核查；非永久禁止 |

反例保留：TCI小包装试剂仍有bulk quote，不能单靠CTA判工业；Natuurplus搜索有cosmetics语境但不代表本项目应进入该用途；Q02涂装服务客户不一定直接买颜料，不从其存在推导我们的客户。若将来真实商业反馈显示浆料或试剂需求，本页产品能力及定位必须另审，不默默扩张。

主CTA Request a Quote，次CTA Explore Products。原因是本页C/Supplier Search任务需要把已有用途/数量/目的地转为沟通，而型号不确定者需要选型入口；不是因为原词结果中RFQ占比最高。文件/样品是上下文支持路径，不堆四个同权主按钮。

## 5. 国家差异与防内耗

三条可实际影响写作的Belgium研究差异：

1. 原词有明确Belgium生产者地点页（P02）与Belgium商业产品页（P01），和跨国目录混列（Q01）并存：需要解释本公司产品来源与买家目的地，而非“Belgium supplier=Belgium factory”。
2. FR原词扩展读到自述Belgium加工的悬浮液供应商（P04）以及成品/涂装服务：需要工业颜料对象及型号评估路径，不以泛TiO2或“coating solutions”混淆。
3. 同一Belgium locale的试剂页（P03）使用规格/文档/批次查询：文件支持要按当前自有申请合同让读者行动，不做样品克重电商，也不将市场选择作为文件适用性筛选。

协会搜索层作为第四条辅助语境，非公开统计。以上不是声称其他国家没有同类情况，而是本页独立采集对页面作出的具体决策约束。Gate2必须据此原创回答，不能贴竞争者logo、引用客户或沿用NL全文。

Owner：Belgium显式修饰词唯一本页；EU/Europe词→MARKET-EU-001；generic pigment/选型→PRODUCT-000；generic应用→各APP owner；精确型号→14个Grade唯一URL；文档解释→DOC；行动→CONV；详细贸易→RES-TRADE-EU。FR/NL扩展不授予翻译站或新主词。

## 6. 事实/GEO与相邻合同

可复用事实：TiO2 Malaysia品牌及IKHLAS运营主体（PRD）；Malaysia-origin（EG-001）；PRODUCT V0.3的中性技术集合。没有新Grade→Belgium适用性/注册/推荐关系。M-2377已批五类+Sulfate，不恢复旧冲突；Specialty/Rubber界限、M996/M2196比较限制保留。

COO本页拟一句“A Certificate of Origin is available upon request.”，BE-D02待用户确认；与EG-003每票、EG-004海关及EG-005税率不同。不再次问已批准Malaysia-origin；不把文件缺口变永久禁止。

GEO建议实体与回答边界见Brief§5，最终Schema在Gate2/7；不把外部商家性能、证书、港口写成我方机器可读事实。当前不输出新法律结论，所以没有以非官方来源代替实时法规核查；未来新命题需要官方当期来源。

所有跨页依赖登记为计划消费，不因未验证live而否决G1；Gate7依赖合同、Gate8实现、Gate9可访问与scope验证、Gate10用户发布授权。Global Chrome V0.5共享、固定RFQ不隐藏。CONV-DOC只用批准grade等上下文，country只为联系公司位置；本页不自动传Belgium为document applicability。

## 7. 未决与后续输入

| ID | 具体决定/限制 | 责任及下一步 | 阻塞范围 |
|---|---|---|---|
| BE-D01 | 是否认可Brief§3方向：工业采购/技术评估、涂料/塑料重点，主RFQ次Products | 总控展示给用户；用户决定 | Gate1最终方向确认 |
| BE-D02 | 本页是否可写COO on request，覆盖可见及同义SEO/GEO/Schema | 总控给出精确句子；用户决定 | 仅本页新增COO命题，不冻结origin或其他内容 |
| BE-I01 | Google/Semrush指标未采；协会正文超时 | 保留未知；若Gate2欲公开行业统计须补读，当前不引用数字 | 不阻塞当前定性方向，不得宣称量化研究完成 |
| BE-I02 | 接收页精确参数/实时路由未在G1验收 | Gate2/7消费各owner Manifest，Gate9真实验证 | 后续实施/发布，不阻塞G1 |

给Gate2的输入是本报告、Brief意图卡、命题CSV和Manifest。没有预先写最终整页文案、固定模块顺序、完整SEO/Schema合同。其他controller只在其授权内承接。

## 8. 执行自检（非独立总控审查）

| 检查 | 结果与定位 |
|---|---|
| 方向明确 | 已提出：Brief§3与本报告§3–4解释读者、核心判断、RFQ/Products原因；BE-D01尚未用户确认 |
| 重要问题有回答 | Brief§4五问题对应本报告§4优先级及owner；COO留具体决定，不空泛Hold |
| 精确命题有支持 | CSV区分批准事实、外部观察、推论、pending；方法§2–3完整链，失败/同源/无指标如实保留 |
| 可用于Gate2 | §5写三个非换国名约束、§6–7事实与相邻合同；不要求下游重新猜方向 |
| 未决可行动 | BE-D01/02直接可给用户，I01/02限定正确阶段与责任 |

交付核验：11份raw读得出args/result且索引hash/bytes一致；主表Page ID/URL/Primary各唯一；四核心和支持文件路径存在；CSV不重建PRODUCT矩阵；无开发代码/视觉/新页面。自检结论为可提交草案，不自行PASS/APPROVED/CLOSED。

版本记录：2026-09-06 V0.1，首次Belgium Gate1独立研究；同日依据 `pages/markets/belgium/05_review/MARKET-EU-BE_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md` 同步为PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL。BE-D01/02继续pending，未启动Gate2或下一页。
