# MARKET-EU-IT 原始采集索引 V0.1

2026-09-06；支持性证据，不是第五项核心交付。采集者：总控通过 web search/open；复用分析者：Gate 1 执行子代理。查询输入来自总控工具调用交接记录并再次确认；JSON只保存返回串，不能称其中包含全部请求参数。保存时间按本次采集日；原始网站的Crawled/Published相对日期保留原文，不据此倒算发布日期。未保留的地区、设备、登录、时间戳参数均为Unknown。

## 1. 原始文件清单

以下文件保存完整工具返回，均为JSON字符串、可解析；不等于完整原网页HTML。每条查询的返回URL/标题与工具顺序在原文件中，观察/排除判断另见方法报告。不得修改原始文件。

| ID | 文件 | 类型/实际捕获范围 | SHA-256 |
|---|---|---|---|
| IT-Q01 | [IT-Q01-web-search-2026-09-06.json](IT-Q01-web-search-2026-09-06.json) | 原词单独web search；完整返回串，22条工具条目，非当地Google排名 | 2C2DA39640D7AE20E5FCDC16CE425919ED26A23A620ADD9D93CC5E071DC92FB1 |
| IT-Q02 | [IT-Q02-2026-09-06.json](IT-Q02-2026-09-06.json) | 意大利语工业颜料定向扩展 | E34F70B135706843C868FE2CA8B561CA8228E220C6EDA4FA99E3B165ADCE141F |
| IT-Q03 | [IT-Q03-2026-09-06.json](IT-Q03-2026-09-06.json) | Federchimica AVISA扩展 | F60067FC8BA700C9D0E55E3C01BE330BE8E95C2ED872406FB07297EAA771D3AB |
| IT-Q04 | [IT-Q04-2026-09-06.json](IT-Q04-2026-09-06.json) | 塑料协会扩展，未用其目录片段作需求统计 | C78DECF7A0C8F91D3FD89A8B57AA0E5C764D3D16F44A19E0EB83FEDEB698C3CD |
| IT-P01 | [IT-P01-2026-09-06.json](IT-P01-2026-09-06.json) | Aprochimide open正文L0–305 | 0938315D9E9A34DC66D2E077A43F4C928F2136C83C792EB4908A3F9235116A1E |
| IT-P02 | [IT-P02-2026-09-06.json](IT-P02-2026-09-06.json) | TER Italia open正文L0–216 | C46A557DECE2967DF1B3029FB6821B4AE1A9008B892340B34BDFF73841F4EBDE |
| IT-P03 | [IT-P03-2026-09-06.json](IT-P03-2026-09-06.json) | Norkem open正文L0–97 | C4BD5E1E8BAD9821FEA544A7BC72CE401A27F950476C05345EBE6A86D2E4C77A |
| IT-P04 | [IT-P04-2026-09-06.json](IT-P04-2026-09-06.json) | Garzanti open正文L0–106 | 59434004FF0B8E3038842005D582CF61DC23552A6935EF32DB9389D4F4CE86A5 |
| IT-P05 | [IT-P05-2026-09-06.json](IT-P05-2026-09-06.json) | Federchimica AVISA工具返回正文；所用L193–205均在回执 | 316208999A83879D3CC40F4EAD22492FBB181C7095ED9AD2166856235D84A827 |
| IT-P06 | [IT-P06-2026-09-06.json](IT-P06-2026-09-06.json) | Sol.Tiox open正文L0–31 | 5E3A1679D9BAA7183CBA2635F83A140FA6B7D2E736405265F6743A15C7A639DC |

## 2. 查询输入及追溯

| ID | Exact query | 输入来源 |
|---|---|---|
| IT-Q01 | titanium dioxide supplier italy | 总控采集交接；无引号操作符；先独立查询 |
| IT-Q02 | biossido di titanio fornitore Italia pigmenti vernici plastiche | 总控采集交接 |
| IT-Q03 | site:federchimica.it AVISA pitture vernici inchiostri legno Italia | 总控采集交接 |
| IT-Q04 | site:federazionegommaplastica.it masterbatch compound Italia | 总控采集交接 |

网站URL、选择关系与观察位置见[方法报告](../MARKET-EU-IT_SEARCH_INTENT_EVIDENCE_V0.1.md)§2；保留原词与扩展独立归属，不用扩展供应商比例推原词主导性。P01/P02/P06取自Q01；P03/P04取自Q02；P05取自Q03。同URL正文只计一次。Q04没有进入最终事实结论。

## 3. 完整性与限制

JSON可解析与哈希仅证明保存完整性，不证明来源真实性或方法充分性。没有Google当地SERP/浏览器截图、Semrush导出、访谈、报价、表单提交或当前法规研究。供应商的包装/库存/代理/产能都是其自述，仅作读者问题与反例线索。未修改10份原始回执；没有保存账号凭据。
