# MARKET-IN-001 搜索意图证据分析 V0.1

## 0. 方法输入与文件交接
- 日期：2026-09-06；目标：India，English；原词：`titanium dioxide supplier india`。
- 方法角色：执行 `D:/23MySec/skills/search-intent-evidence-analysis/SKILL.md`。本报告只记录证据和解释，不替 Agent 决定页面优先级、CTA 或批准。
- 研究问题：原词是否能支持工业颜料采购页？price 是否必须用公开价格表回答？masterbatch 是否混入成品需求？贸易查询应与供应商页怎样区分？
- output_path：`D:/23MySec/pages/markets/india/01_research/MARKET-IN-001_SEARCH_INTENT_EVIDENCE_V0.1.md`。
- 实际工具：web_search = web.run search_query；web_fetch = web.run open。原词先单独调用并完整保存 IN-Q01，然后才查扩展。Google 浏览器与本轮 Semrush 浏览器均未调用；没有登录障碍、没有假称进行当地 Google 排名观察。
- 所有实际 args/result 原样保存到 evidence/*.json，再从本地读回；检索返回不是完整网页镜像。索引保存字节与 SHA-256。派生判断不写入 raw。
- 继承历史 Semrush：2026-08-29 India database `in`、desktop、11词的原始表与可见全文已读；原 Manifest 的6个文件字节/hash均匹配。历史源在 research/keyword/raw/semrush/2026-08-29/in/semrush_in_market_001/，不复制、不更新日期。

## 1. 逐查询口径与覆盖
| ID | 实际查询 | 用途 | 返回范围及限制 |
|---|---|---|---|
| IN-Q01 | titanium dioxide supplier india | 独立原词 | 25条工具返回，保存顺序0–24；不是印度Google前25名，无地区/设备/登录个性化控制，无PAA或广告分层证据 |
| IN-Q02 | titanium dioxide price india paint plastics masterbatch | 价格表达和成品反例定向扩展 | 31条工具返回0–30；添加行业词会主动偏向这些行业，不能用于证明原词各行业需求占比 |
| IN-Q03 | site.dgtr.gov.in titanium dioxide China final findings remand | 官方贸易时效线索 | 18条工具返回，search标识编号范围0–17（并非实际保存顺序）；含外域结果。site搜索文本不是实际强制域过滤。仅DGTR正文用于官方索引事实，第三方解读不当现行措施 |

IN-Q01 全样本选择记录（编号是工具结果标识，不是Google排名）：
| 结果 | 页面类型/来源家族 | 选择或排除 |
|---|---|---|
| 0 Esaar | 经销/产品目录 | 读正文 IN-P01：型号、涂料用途、表格、询价及TDS入口 |
| 1 Inquiry Bazaar | 平台聚合 | 摘要有₹/Kg与₹/Piece及Aanya/Core Chem；不能当多家独立验证。与5/6企业身份重叠 |
| 2 TradeIndia | 平台目录 | 摘要观察价格/MOQ/Kg与Pack混合、工业粉末与纳米分散液；不采用技术参数或售价 |
| 3 Bharat | 经销商自述 | IN-P02正文超时；Q01摘要显示报价表单/MT，但仅摘要证据，不说已读表单全文或提交成功 |
| 4 Pandora | 进口商/产品页 | 读 IN-P05：供应/进口定位、price→联系询价；保留技术模板错误反例 |
| 5 Corechem / 6 Aanya | 经销商页 | Q01摘要，和1品牌重叠；不搬本地网点、回应时限或供应能力 |
| 7 Shankar / 9 Sidharth | 贸易商产品站 | 摘要；supplier不自动等于制造商 |
| 8 Jaydev | 出口/供应产品页 | 摘要出现报价与文件入口；仅作为线索，不借用文件可用性、Incoterm、交期 |
| 10 Sudarshan | 标题为制造/供应页面 | 摘要短，未核验其法律实体与制造资格 |
| 11 Youjee TradeIndia子域 | 平台商家店 | 与2同平台、但不同商家层级；不是第二个独立平台证据 |
| 12 IBM政府PDF / 14 DSIR PDF | 工业资料 | 标题日期与文件年代不同，未读全文，不作为当前份额、产能或厂家数量 |
| 13/15 Meghmani投资者PDF（NSE存档） | 同一公司不同期演示 | 未读正文，不把未来预测/演示当当前实绩 |
| 16 Shankar Chem India PDF | 供应商资料 | 与7域名/品牌近似，不擅自判同实体；未读全文 |
| 17/18/19/21/23/24 Wikipedia | 企业历史/百科/金属铸造等 | 反映信息型与非目标结果混入；不作产品、市场或法律权威 |
| 20/22 Reddit同一用户ximkart25 | 推广贴 | 同作者重复；非独立采购者证据，不据此推断真实用户群 |

IN-Q02 选择/排除：0 Skaomin、1/2 Guruji（同域）、4/6/9 DMP（同域）、5 Youjee、10 Peer、11 PigmentIndia为供应目录；8与Q01-1同URL；3 Tanya为成品母粒，读 IN-P03；7 TradeIndia成品母粒为另一反例线索。12证券研究、13旧DGTR、14旧DSIR、15旧Plexconcil、16旧评级研究、17供应商PDF只作标题/摘要线索；18/20–30为Reddit推广或讨论（多条同作者），19百科，不计独立需求证明。原始完整返回均保留，未按偏好删除。

IN-Q03 去重：0/1同DGTR case的www/非www，2/4同主页；5为同case Hindi版本。12/13/14/15/17是同机构不同年份文件；16官方Gazette承载旧findings；3公开听证，9/11列表。6/7/10是第三方转载/解读，8是Black Toner非TiO2，不采用；只选case正文 IN-P04 核对日期索引，不引申法律效力。

## 2. 正文观察链与行动入口
| Raw | URL / 实际读取范围 | 观察 | 不支持什么 |
|---|---|---|---|
| IN-P01 | https://www.esaar.com/portfolio/titanium-dioxide/ ；全文L0–173 | L0涂料原料目录，L8–158型号/用途/技术表；L39–41等明确询价链接；L171有TDS PDF链接 | 未下载TDS/未提交；Esaar的型号和我方同名近似不构成映射；其性能、库存、包装非我方事实 |
| IN-P02 | https://bharatenterprises.org/ ；L0超时 | 完整保存失败；不重试，因为已有其他代表正文足够 | 不把Q01长摘要升级成正文验证，不冒称网站不存在或表单失败 |
| IN-P03 | https://www.tanyacorporation.com/product-page/masterbatch-d-white ；全文L0–102 | L18–20是含TiO2及carrier resin的白母粒；L23价格、L31wishlist、L93 WhatsApp下单入口 | 是成品而非我方颜料；价格与单位不齐，不能与TiO2粉末比较；未执行购物或消息 |
| IN-P04 | https://www.dgtr.gov.in/en/anti-dumping-cases/anti-dumping-investigation-concerning-imports-titanium-dioxide-originating-or ；全文L0–140 | L89旧File No.14/51/2002-DGAD；L96–120混合2003–2026条目；L113remand日期17/10/2025、L120 Final Findings 03/08/2026，L134网站更新02/09/2026 | 只核验索引条目；不把旧FileNo当2024/2026文件编号，不以网站更新时间代替法规日期，未读附件全文/未核验CBIC实施或税率 |
| IN-P05 | https://www.pandoraindia.com/titanium-dioxide ；全文L0–230 | L19–21进口/供应定位，L35–40涂料/塑料话题，L166–175 price标题下引导email/phone/Contact询价 | L28/L93误写Trichloroethylene，且泛食品/化妆品/技术数值不适合借用；来源只支持其页面表达观察，不认证技术事实、当地能力 |

正文四份成功、一份失败；不声称完整网站或所有链接均已核查。成功页面未显示公开发布日期的，日期为“未显示”；crawl时间不是发布日期。

## 3. 意图解释与反例
1. 原词前12条工具返回均为供应/分销/进口页面或商业平台，足以支持“商业调查/询价”解释，但这不是Google排名统计，不能证明所有搜索者职业或采购阶段。全25条还含历史、投资、百科和推广，不能说纯交易意图。
2. 供应页使用型号/应用/技术表后转询价；Pandora price标题不公布数字而转联系，说明价格需求不一定只能用价目表满足。此为实际表达模式，不是搜索者行为实验。
3. 平台摘要混合Kg、Piece、Pack、不同MOQ与不同产品形态，直接均价或“最低价”无共同口径。价格比较需要先知道采购对象；问题线索，不提供我方报价。
4. masterbatch扩展出现含树脂成品；原词也有纳米分散液。只能提示区分工业TiO2颜料、成品母粒和其他形态；不据此将分类说明设为整页中心。
5. supplier结果包含进口商和经销商；不能由India修饰词推定用户只接受印度本土制造。现有定位是Malaysia-origin，不产生印度工厂/仓库声明。
6. 贸易查询同时出现旧findings/remand/新findings和转载。索引足以证明需追踪具体文件，不能决定当前征税状态。

## 4. 历史指标的有限复用
历史 Semrush source `SEMRUSH-IN-MARKET-20260829-001`，数据日期2026-08-29，India/in，desktop。已读 Manifest、table_rows.json、visible_text.txt、capture_limitations；6/6文件hash/bytes一致。旧绝对路径keyword-research按Directory Guide解析为research/keyword。
| 词 | 历史KD | 原始意图标签 |
|---|---:|---|
| titanium dioxide supplier india | 8 | T |
| tio2 supplier india | 12 | I |
| titanium dioxide manufacturer india | 12 | I |
| titanium dioxide import india | 12 | I |
| malaysia titanium dioxide india | 15 | I |
| non china titanium dioxide india | 10 | I |
| titanium dioxide price india | 22 | C |
| titanium dioxide anti dumping india | 11 | I |
| titanium dioxide for paint india | 10 | C |
| titanium dioxide for plastics india | 10 | C |
| titanium dioxide for masterbatch india | 9 | I/C |

Volume、CPC、trend均Unavailable，不是0；工具标签只作输入，不能覆盖已批准主表的C/Supplier Search归属。没有把旧KD8说成今天低竞争保证，未复制其他国家指标，也未重跑Semrush。

## 5. 给Agent的问题线索（非页面决定）
| 问题 | 性质 | 依据 | 限制 |
|---|---|---|---|
| 采购的是哪个型号、工艺/应用对象？ | 据页面概括 | P01型号/用途表、P05双类型表述 | 不把竞品技术数据转成我方参数 |
| 怎样让询价具备可比口径？ | 分析者提出 | Q01平台单位/MOQ差异、P05 price→联系；Q01-3 MT字段仅摘要 | 数量/目的地/要求哪些必填由现有RFQ owner合同决定，本页不加字段 |
| 找的是TiO2原料还是白色母粒成品？ | 据反例概括 | P03 L18–20 | 澄清采购对象即可，不虚构我方母粒产品 |
| 可查看什么产品资料、如何申请？ | 据入口概括 | P01 L171 TDS链接 | 不是我方文件库存证据 |
| Malaysia来源可怎么表达？ | 项目已有事实待Agent消费 | 全站origin批准 | 本Skill不授予COO/批次或贸易待遇 |
| 当前印度贸易详情到哪里核对？ | 分析者提出 | P04日期索引 | 暂未形成当前财政实施/税率结论，归具体贸易研究owner |

## 6. 未完成事项与交接结论
- 未采本轮Semrush和Google会话，不能提供最新指标、当地排名、PAA或量化行业份额；不影响对已登记工业采购页的定性研究。
- Bharat正文失败，替换为同原词的Pandora代表，不反复尝试或假称读到。
- 未下载TDS/政府附件、未提交询价、未采CBIC措施；因此无当前税率、豁免、海关接受或文件交付能力结论。
- 下一步由 Agent 阅读本文件，结合已批准项目事实决定优先问题和CTA；本文件不批准Gate1。
