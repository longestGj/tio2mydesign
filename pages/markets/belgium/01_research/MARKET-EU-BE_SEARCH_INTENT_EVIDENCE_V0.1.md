# Belgium · 搜索意图证据分析 V0.1

## 1. 方法范围与实际工具

- Page ID：MARKET-EU-BE；日期2026-09-06；目标为Belgium，页面语言EN；补充FR与NL查询只用来发现不同结果和当地语境，不改变语言架构。
- 执行项目方法 `skills/search-intent-evidence-analysis/SKILL.md`，输出路径为本文件。此报告只呈现观察与解释，不决定页面角色优先级、CTA、模块顺序或Gate状态。
- 实际 `web_search` = `web.run.search_query`，`web_fetch` = `web.run.open`。未调用Google内置浏览器或Semrush；没有观察其登录状态，不声称登录失败。Volume/KD/CPC/趋势、Google当地排名/PAA/设备/Belgium IP和个性化均未知。
- 原始调用完整args/result先保存为JSON，再读本地记录。11份raw含3查询、4份可读正文、4份失败返回。索引：[RAW INDEX](evidence/MARKET-EU-BE_RAW_EVIDENCE_INDEX_V0.1.csv)。完整tool return不等于全网、网页所有动态内容或真实当地SERP。

## 2. 查询与选择链

| ID | 实际query / 用途 | 分层与限度 |
|---|---|---|
| BE-Q01 | `titanium dioxide supplier belgium` | 原词单独调用并保存，21条返回，显示编号0–20；编号是本次返回顺序，不是Google排名 |
| BE-Q02 | `fournisseur dioxyde de titane Belgique peinture plastique` | FR扩展：检查原材料/成品/涂装服务混淆与产品形态，不参与原词分布计数 |
| BE-Q03 | `titaandioxide leverancier België verf kunststoffen essenscia IVP` | NL定向行业语境，含指定机构名；不能用返回的协会占比证明原词主导意图 |

原词全样本家族合并及处理（各精确URL/标题/摘要见Q01原文件）：

| Q01编号 | 来源家族/类型 | 选择或排除理由 |
|---|---|---|
| 0 | Trademo贸易数据库 | 供应商发现线索；列表含法国/德国企业，不能将标题内Belgium当作每家地址/制造地证明；不采纳数量和shipment指标 |
| 1 | Brenntag BE产品介绍 | 选P01，核对工业产品和实际入口 |
| 2、7、9 | TCI同家族、不同产品/locale | 选9→P03，实验试剂/小包装反例；不当3家独立工业供应商 |
| 3 | ReachCentrum行业联盟 | 法规/注册信息反例，只读搜索返回；不据此陈述当前法律，更不证明我方REACH覆盖 |
| 4 | KRONOS工厂地点页 | 选P02，区分当地制造事实、公司查找与面向当地采购的供应意图 |
| 5 | ECHEMI marketplace | 标题含rutile/anatase混合，卖家主产品与TiO2不一致；只作第三方列表线索，不作为我方或市场能力证据 |
| 6、8、10 | Volza三个不同查询口径 | 同一数据平台，OR词集合/HS口径和日期不同；不累加，不采纳供应商数/贸易份额 |
| 11 | Natuurplus小包装商店 | 搜索已见25g/100g/1000g、购物车及cosmetics语境；与工业颜料用途并存的反例，不读为我方用途许可 |
| 12 | Ti-Pure技术PDF | 全球技术材料，非Belgium需求研究；未打开，不引用其技术参数 |
| 13 | USITC历史PDF | 非本页现行EU政策源；未打开，无当前贸易结论 |
| 14、17 | Sciensano同项目两文件 | 面罩风险研究反例；不当两份独立商业来源，不外推全部TiO2风险或用途 |
| 15 | Kemat存档的2021分销商名录 | 旧多公司混合材料，不用来证明今天比利时供应商能力 |
| 16 | 旧EEA生产者报告 | 年代与地域不适合当前需求判断；不引用份额 |
| 18、19、20 | Wikipedia三历史/公司条目 | 泛历史结果，不用于页面事实或当期竞争结论 |

Q02共21条返回：0 Norkem→P04；1 Caparol成品涂料、2/11 PIX同家族涂装服务、4 MAPO涂装服务、5 DS Color成品涂料、6 Labo3D喷漆、7 Colpaert陶瓷用氧化物、8 Caron涂料商店均提示不能把“paint”结果当原料采购者。3 Brenntag法国页为P01同家族跨locale；9 Kompass目录；10 Ti-Pure塑料产品为技术线索；12–17旧技术/监管/产品PDF、18–20百科只作发现，未正文打开不形成新技术事实。

Q03共17条返回：0/1 essenscia正式/暂存站同源；3/6/7/8/9/10该机构团队页同源，选正式0→P05/P07；4/5 IVP同机构家族，选5→P06再首页P08；2 Brenntag NL是P01同家族；11 Whitearrow商业线索；12 EUR-Lex及13–16行业PDF未展开，不能当当前法律或TiO2需求统计。IVP与essenscia有关联，不能视为独立双重统计验证。

## 3. 正文观察

| 记录 / source | 实际读取范围、日期 | 观察与入口 | 不可推导 |
|---|---|---|---|
| [BE-P01 Brenntag Belgium](https://www.brenntag.com/en-be/products/titanium-dioxide.html) | L0–135完整可读提取；2026-09-06；页面发布日期未显示，crawl日期不是发布日 | L2 Belgium English，L9–18产品身份；L11列paint/paper/plastics及其他用途，L70–93为用途解释；L2/123 Contact us，L6登录，L104–110公司Belgium地址 | 全球用途描述不是比利时需求份额；未观察独立Sample/TDS/RFQ按钮，不把Contact写成Sample；用途性能不是我方指标 |
| [BE-P02 KRONOS Langerbrugge](https://www.kronosww.com/langerbrugge-belgium-2/) | L0–221；2026-09-06；未显示本页发布日期 | L75–80自述Ghent制造和港口场地，L84–86区分另一化学品TiOCl2；L139/145证书Download/View链接；L151–153 Contact，L172–184产品/技术路径 | KRONOS自述不是我方产能/认证/当地场所。未下载证书。厂址页面也含career内容，不把所有访问当采购 |
| [BE-P03 TCI Belgium FR](https://www.tcichemicals.com/BE/fr/p/T4019) | L0–419；2026-09-06 | L172–211高纯试剂产品、100/500G规格、购物车与Devis en Vrac；L190–193 SDS/CoA等入口；L277–318有语言/批次查询及错误文案 | 纯度页内标题/数据不一致，不用作技术事实；“bulk quote”不证明工业颜料定位；提取含多个状态字符串，不声称已触发错误/下载文件 |
| [BE-P04 Norkem FR](https://www.norkem.fr/products/dioxyde-de-titane) | L0–97；2026-09-06为读取日；未显示发布日；抓取元数据Crawled 1.4 years ago | L59–64分别介绍粉体与悬浮液形态，并自述Belgium悬浮液生产；L65产品目录与产品问题入口；L67–69公司联系 | 不是我方浆料、包装、仓储/交付或试样能力；读取日不升级为2026实地验证的产能事实；不得把Belgium服务页默认写成只需任何TiO2即可 |
| [essenscia](https://www.essenscia.be/over-essenscia/secties/) / P05、P07 | 两次fetch仅L0 Timeout；Q03 result0有搜索扩展文本 | 仅搜索层可见PolyMatters塑料产业与IVP涂料/油墨组织说明；P05/P07无正文 | 不标全文读过，不采用成员数字或行业占比；若Gate2要公开当地产业事实需补读/确认 |
| [IVP](https://www.ivp-coatings.be/vision-mission) / P06，首页P08 | 两次不同URL均L0 Timeout | Q03 result5仅搜索层见decorative/industrial coatings、inks、car refinishes等成员语境 | 不把页面概况等于TiO2采购需求调查；四失败不隐藏，不继续重复访问 |

## 4. 意图解释及反例

Q01存在商业供应商产品介绍、贸易数据与当地生产者查找，也存在试剂、小包装、法规联盟、历史及安全研究；因此商业调查是有支持的解释，但不能认定所有搜索者是工厂采购或强制需要本地制造。未给“主导/多数”或比例结论。

Q02增加的形态差异（粉体/浆料）和上下游差异（原料/成品涂料/涂装服务）能帮助分析者提出资格核对问题。Q03只提供当地行业存在的有限语境，不证明行业采购量或用途优先级。具体读者与CTA取舍交给Agent结合项目定位决定。

## 5. 问题线索（不是页面优先级）

| 线索 | 性质与依据 | 限制 |
|---|---|---|
| 需要的是工业颜料粉体、液体分散体系还是高纯实验试剂？ | 从P03/P04形态与包装对比概括 | 不推导我方提供浆料/试剂；不比较性能优劣 |
| 选择型号时需要说明涂料/塑料体系及评价要求吗？ | P01用途+P04产品问询→分析者概括 | 没有买家访谈；不是比利时全体偏好 |
| 供应地、制造地与最终使用地是否是不同信息？ | Q01数据库混合国家、P02本地制造、P04自述Belgium加工→分析者提出 | 不设置我方当地库存或港口承诺 |
| 产品文件入口是否等于已拿到正确版本文件？ | P03语言/批次查询及状态说明 | 未下载，不能确认实际文件可用性 |
| 涂料服务商与颜料原料采购商是否应分开？ | Q02 PIX/Caparol/Colpaert与P01产品页的不同对象 | 搜索层反例，不断言这些企业不采购原料 |
| 找原产地文件与找EU政策结论是否同一任务？ | Q01 ReachCentrum联盟结果与来源查找并存→分析者提出 | 本轮无法律结论；公司COO由项目用户决定 |

## 6. 局限与方法交接

方法已覆盖原词混合解释、四种实际网页角色/产品形态、FR/NL扩展反例和有限协会语境，足以支持Agent综合；不以继续堆来源代替判断。未知项：精确搜索指标、Google当地排序、协会正文、真实需求份额、买家访谈；均不填零或假定可得。

交接：本文件保存后全文读回；Agent须据它独立制定方向。协会正文失败若只用为研究线索不阻塞当前方向，但不能在Gate2变成“比利时主要需求”的定量主张。无新页面、语言、CTA或Gate批准由此方法产生。
