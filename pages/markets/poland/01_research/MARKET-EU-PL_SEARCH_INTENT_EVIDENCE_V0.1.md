# MARKET-EU-PL 搜索意图证据分析 V0.1

## 1. 方法输入与使用范围

- 日期：2026-09-06；Page ID：MARKET-EU-PL；目标：Poland；页面语言 EN。
- 原词：`titanium dioxide supplier poland`。
- 问题：原词返回哪些来源类型？工业颜料采购是否有来源支持？应与哪些其他需求区分？代表来源实际提供什么下一步？
- 使用：web_search（web.run search_query）与 web_fetch（web.run open）。未操作 Google 浏览器或 Semrush；未遇登录/额度障碍，未声称测得当地排名或指标。Volume/KD/CPC/Trend 均 Unavailable。
- 输出：`D:\23MySec\pages\markets\poland\01_research\MARKET-EU-PL_SEARCH_INTENT_EVIDENCE_V0.1.md`。
- 原始返回完整保存于本页 evidence，随后从本地 JSON 读回；实际请求 args、日期及原样 result 均保留。捕获索引另登记 SHA-256。工具返回的全文表示其抽取范围，不保证网页全部动态内容。
- 本报告仅提供方法观察与问题线索，不决定读者优先级、页面 CTA、模块顺序或 Gate 批准。

## 2. 查询与归属

| ID | 实际查询 | 目的/结果范围 |
|---|---|---|
| PL-Q01 | titanium dioxide supplier poland | 首次单独查询；22 条工具返回（search0–21），不是 Google Poland 前22名，也不是22个独立供应商 |
| PL-Q02 | dwutlenek tytanu dostawca farby tworzywa Polska | 单独波兰语工业扩展；找产品与应用来源，不用于原词比例 |
| PL-Q03 | site.pzpfik.pl farby lakiery Polska | 实际输入误用了点号，不是有效 site: 过滤；返回跨域探索结果。仅定位 PZPFiK，再直接读取其一方正文，不据此声称站内搜索或行业频率 |
| PL-Q04 | site:tworzywa.org.pl Polska przetwórstwo opakowania budownictwo | 单独行业背景探索；Empty search results。不能解释成无塑料产业/无需求 |

### 原词逐项归类与选择

以下编号是返回标记尾号，顺序以 raw 文件可见返回为准；search12 实际位于 search2 后，不重排为排名。

| 返回尾号 | 来源/类型 | 选择与限制 |
|---|---|---|
| 0、7 | Trademo供应商/买家数据库 | 贸易情报线索；不把记录标签或shipment数当真实本公司买家/销量，未读数据库正文 |
| 1、3、5、6、8、9、10 | ZWUKSO企业/首页/分类/产品 | 同一企业7条；5/8还包含非www/www主页，合并一个来源家族；选择10产品页P01，不累计独立供应商 |
| 2 | CC Polska企业页 | 选择P02，核对Poland销售主体与跨国品牌背景 |
| 12、14、16 | TYTANPOL旧宣传册/SDS/PDF | 同一制造来源家族的历史线索；URL2018/2023与搜索Published/Crawled不等，不作当前产量、唯一制造商或合规依据。另由Q02找到P06应用正文 |
| 4、13 | Foodcom产品页与PDF | 同一家族；原词产品EN打开超时P05，改读Q02发现的PL页P05b，不宣称EN全文已读 |
| 11 | Alfred Kochen / Grupa Azoty | 德国分销来源，覆盖德国/奥地利等；不等于Poland买家本地意图；未读正文，不据此认证最新产能 |
| 15 | 大学存储库SDS材料 | 学术/文件查找反例线索，非供应商交易页；不进一步读取 |
| 17 | Konimpex原料清单PDF | 工业分销文件线索，不打开旧表作当前库存来源 |
| 18、19、20、21 | Wikipedia企业史/物质百科 | 信息查询反例；不作为工业事实技术权威 |

原词支持“找供应商/产品资料”和“文件/贸易数据库/一般知识”等多种可能任务。供应商和分销页出现不证明搜索者职位，也不证明只找波兰制造商。不能从同源多条或定向扩展推导市场需求份额。

## 3. 代表正文观察

| ID / 一方URL | 实际读取范围、来源日期 | 观察（不是本公司事实） | 实际行动入口及限制 |
|---|---|---|---|
| P01 [ZWUKSO TiO2](https://www.zwukso.pl/offer-en/powder-pigments/titanium-dioxide.html) | Total70，L0–69；正文无明确发布日期；抓取2026-09-06 | L21–26并列颜料与光催化PRETIOX CG并列，也列本企业包装；L29–39按牌号列TDS/SDS栏目 | L9 Contact、L41–45电话/邮箱、L58–60目录链接；表格提取单元格为空，不能称已验证可下载每份TDS/SDS；未观察到样品按钮 |
| P02 [CC Polska](https://www.ccpolska.eu/front-page/) | Total75，L0–74；正文未注明整体发布日期，L20单独公告日期2024-01-08 | L25Poland销售业务；L36引用Slovenian Cinkarna背景，显示销售地点与来源/品牌并非同一概念 | L9 Kontakt与L50–59联系方式；无已观察样品表单。其价格承诺不移植 |
| P03 [Global Colors Polska](https://www.globalcolors.pl/products/white-masterbatches/) | Total182，L0–181；无正文发布日期，页脚版权不作数据日期 | L68说明TiO2在聚合物载体中的白色母粒；L71–82列薄膜、袋、管件等终端例子。这是成品色母粒，不是裸TiO2粉体 | L30/L109 Kontakt；L99–105是newsletter不是询价/样品；不引用其色母粒性能作为本公司颜料保证 |
| P04 [PZPFiK](https://pzpfik.pl/o-nas/) | Total55，L0–54；无正文发布日期，2026页脚非行业统计日期 | L43–45协会范围涉及涂料、胶粘剂、建材制造者及原料供应者；不提供本次可用的TiO2需求规模 | 导航企业/成员/法规，L39–40联系；不是产品供应或合规证书证明 |
| P05 [Foodcom EN](https://foodcom.pl/en/products/titanium-dioxide/) | 仅L0失败信息；400 timeout | 未读取EN正文 | 失败保留，不用搜索摘要冒充正文 |
| P05b [Foodcom PL](https://foodcom.pl/products/dwutlenek-tytanu/) | Total475，L0–474；无正文发布日期 | L51、98同时涉及化妆品/补充剂等；是“B2B”并不自动等于本项目工业颜料适用范围的反例 | L53问产品/下载规格；L138–187买/预订/询价；L367–404询价表单。未下载规格或提交表单；其库存、MOQ、响应时间只属来源 |
| P06 [TYTANPOL paints/coatings](https://tytanpol.com/zastosowanie/farby-i-powloki/) | Total144，L0–143；L51显示2023-02-03 | L74–90区分装饰/建筑和工业涂料，并提及润湿、分散、稳定性等评估维度；L95–100另有印刷油墨；日期较旧不当需求趋势 | L1联系、L9产品、L17目录；L114–116为该企业旧小包装/48h提案，仅来源内容。未观察到样品专用入口 |

## 4. 问题线索（交 Agent 决定取舍）

| 线索 | 性质与定位 | 可支持的解释 / 不支持的扩张 |
|---|---|---|
| 供应商在哪、产品来自哪，是否是同一个问题？ | 据P02 L25/36概括；Q01多家不同背景来源 | 可解释国家供应商词未必要求Poland origin；不证明进口偏好或本公司当地仓库 |
| 寻找TiO2粉体，还是聚合物中的白色母粒？ | P03 L68来源明确产品形式 | 值得区分原料与成品；不能自动把成品色母粒列为本公司产品 |
| 涂料需求应提供什么体系信息？ | 据P06 L74–90概括 | 装饰/工业用途、配方与评估目标为可能问题；不证明全部Poland买家相同，更非型号推荐 |
| 文件应对应哪个型号？ | 据P01 L29–39与P05b L53概括 | 型号和资料关联是可观察线索；本公司文件流程仍用自身合同 |
| supplier查询是否包含非项目用途？ | P01 L24–25、P05b L51/98及Q01百科/SDS线索 | 是，光催化、化妆品/补充剂与一般知识可能混入；这不是这些用途违法/不存在的结论 |
| 采购询价需要哪些信息？ | P05b L367–404来源字段＋分析者问题 | 可启发产品、量、用途、目的地问题；不能复制来源表单、隐私同意或运输条件 |

## 5. 限制与交回

- 没有获得Google当地SERP/本地设备/个性化可控结果，不能称Poland SEO排名；没有Semrush本词指标。
- 原词同源重复多，记录22个返回只用于可追溯性，不计算“主要市场”或“多数采购者”。
- Q03 typo与Q04空结果保留；PZPFiK一方正文已直接核对，不须为了弥补无用数量继续查找。
- P05 EN失败，P05b PL为不同语言页面；事实引用明确其各自范围。
- 工业涂料、成品色母粒、分销主体、非工业混合反例已有代表证据；没有调查进口份额、港口、当地仓库或交期，也不在本方法中提出这些能力。
- 实时法律/税率不在此次拟回答命题中，本方法不作此类结论；将来需要具体结论时另核当前官方来源。
- 方法报告保存后读回；Agent应以本报告结合批准源综合方向。当前没有“必须再搜才可综合”的方法阻塞项；未知指标和来源限制以上述范围移交。

