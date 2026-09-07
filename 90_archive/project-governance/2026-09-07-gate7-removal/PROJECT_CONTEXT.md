# TiO2 Malaysia · 项目背景速读

> 更新：2026-09-06。用途：让AI先了解已有项目，不重新向用户询问已经回答的问题。本文件是批准源的导航性摘要，不是第二份PRD、技术证据或授权记录；冲突按根AGENTS处理。本文的“四个环节”是全站前期工作，不等于某一页的Gate 1–4。

## 1. 第一环节：网站为什么做、要带来什么结果

我们在做面向国际B2B采购商的TiO2 Malaysia网站，运营主体为 **IKHLAS TITANIUM (MALAYSIA) SDN. BHD.**，规划域名为 `https://tio2malaysia.com`。目标市场是European Union、United Kingdom、India、Brazil。

核心不是展示一个空泛企业网站，而是让采购者从市场/产品/应用需求进入，理解产品与文件支持，最终发起有具体采购背景的 **Request a Quote、Request a Sample、Request Documents**。Malaysia-origin是来源与信任表达，不把关税规避作为品牌主张。

已有结论足够支撑页面策划，不以“尚未另设客户优先级或数字KPI”为由反复重开定位讨论。要新增优先级或指标时才提出具体待决定项。

来源：[PRD V0.4](docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md)；[原产地全站授权](docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md)。

## 2. 第二环节：我们是谁、提供哪些产品和材料

- 产品体系与 **mytio2.com相同**，共14个型号：M-350、M-510、M-896、M-996、M-2196、M-895、M-200、M-108、M-210、M-340、M-886、M-52、M-2377、CR-901。历史“剩余12个型号”指首两个之后的执行批次，不是把全站产品减为12个。
- 相同产品不等于照抄原网站正文、沿用其所有页面或推导本公司能力；本网站要按自己的市场与采购任务重新组织内容。
- 企业身份与网站定位已在PRD中；用户已批准的具体公司事实/图片/文案可以在同一范围对外使用，包含SEO/GEO/Schema，不应再次降为“内部候选”。
- `Malaysia-origin titanium dioxide` 已获全站公开授权；不能继续声称缺少全站授权。不同的证书、装运、海关或税率命题按决定登记册分别处理，不能自动扩大、也不能自动禁止。
- 项目已有TDS、应用指南、用户确认资料及各型号独立内容/证据合同。使用具体指标须读取该型号当前Manifest锁定的来源，不能用“同一产品体系”代替技术核查。
- Application/Process关系用PRODUCT V0.3矩阵和统一审计，不沿用旧V0.2.1的M-2377全局隐藏。M-2377可中性映射Coatings、Plastics、Masterbatch、Printing Inks、Paper与Sulfate；Specialty/Rubber边界及M-996/M-2196比较限制按当前审计，不推导型号优劣或等效。
- 单页用户批准的exact summary与产品关系矩阵是不同作用域：不要从摘要里的描述自动增加全站taxonomy或关系。

来源：[PRD](docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md)、[材料目录](<docs/7.27 马来全套TDS +应用指南/>)、[PRODUCT V0.3矩阵](pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv)、[统一审计](pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md)、[用户决定登记册](docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md)。精确联络方式/表单字段按相应页面当前批准合同，不从PRD早期规划邮箱或旧表单需求直接发布。

## 3. 第三环节：客户、搜索意图和市场研究已有多少

已存在全站关键词研究、意图聚类、SERP、竞品、国家研究和内耗检查。主题包括市场供应商/来源、产品及应用、TDS/SDS/COA与原产地文件、询价/样品、替代来源及贸易研究。

因此，单页Gate 1应先消费这些资料，回答“这页的读者具体要判断什么、哪些问题需要补证据”，而不是每次从零做全站调研。

必须分清研究与执行权威：

- [研究总结](research/keyword/08_research_summary.md)记录2026-08-29的176个关键词、29组聚类、36条查询/360条SERP。其自身仍标有等待再审状态；这些数量说明研究已有，不代表每条研究建议均获批准。
- 搜索量、KD、CPC等没有数据时就是Unavailable；SERP出现不代表有经证实的搜索量，竞品内容不证明本公司能力。
- 当前页面分工和关键词归属以 [页面—关键词实施主表](research/keyword/11_page_keyword_master.csv) 与当前登记册为准，不以历史 `03_keyword_architecture_map.csv` 的建议覆盖它。
- 法规、贸易及当期SERP等需按本页任务和时效补查；历史研究不是当前法律/税率证据。

## 4. 第四环节：网站结构和页面各自负责什么

现有PRD、登记册、关键词实施主表、Playbook和Brief共同定义全站架构；不是还没有网站结构。

| 页面体系 | 对读者负责的任务 |
|---|---|
| Home | 表达供应定位，承接全站入口并引导市场/产品/应用/文件与询盘 |
| Markets | Hub帮助选市场；市场页回答当地采购问题，不以换国家名复制正文 |
| Products | Hub帮助选产品；Process承接工艺意图；Grade各有一个权威URL，不按国家复制 |
| Applications | 回答应用体系与技术评估问题，引导有批准关系的型号 |
| Documents | 说明可申请的文件与用途；申请行为由Request Documents完成，不等于公开下载或预先批准文件 |
| Resources | 采购研究、解释与时效资料；不抢商业页面职责，不机械复用另一文章的内容 |
| About / Contact | About承接企业与来源信任；Contact为联系工具，不当供应商关键词落地页 |
| Conversion | RFQ、Sample、Documents各自完成相应请求；具体字段/状态按页面批准合同 |
| Legal / Privacy | Privacy EN/BM、Cookie Policy；Cookie Settings为共享功能，不是独立SEO页面；当前不设Terms页 |

当前 [登记册V0.2](docs/architecture/PAGE_REGISTRY_V0.2.md) 为57页；“已登记”不等于所有页面已批准、已开发或已上线。Malaysia Origin不设独立一级栏目，相关职责分配到Home、About、Documents、Resources。

共享Header/Footer由Home/Global Chrome owner维护，页面消费，不各自开发；前台不展示“CURRENT”文字。WordPress/Next.js由独立开发项目实现，共享架构但严格隔离 `site_scope=tio2-my`。

来源：[PRD](docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md)、[实施主表](research/keyword/11_page_keyword_master.csv)、[登记册](docs/architecture/PAGE_REGISTRY_V0.2.md)、[No-Terms批准增补](docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md)、[Global Chrome V0.5](docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)。

## 5. 进入单页Gate 1时怎么使用

1. 继承上述全站结论，读取本页登记行、关键词归属、Playbook、完整Brief和当前Manifest。
2. 把用户想法变成Page Intent Card：谁来、要判断什么、这页负责什么、下一步去哪里。
3. 区分“已有批准答案”“需要补查的本页问题”“需要用户事实确认的具体命题”，不反复询问已有答案。
4. 提交买家问题—证据—内容建议与Gate 2输入；G1不是完整正文，G2才组织并确认完整文案。
5. 未获该页下一阶段授权不自动推进；执行自检不代替总控或用户批准。

根 [AGENTS](AGENTS.md) 决定怎么工作；[索引](01_PROJECT_INDEX.md) 找当前输入；[状态](00_PROJECT_STATUS.md)只在需要进度/授权时读。后续修改事实先改原责任文件，再更新本摘要与来源；不得把摘要更新当成新的事实批准。
