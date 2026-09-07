# MARKET-EU-NL · 搜索意图证据分析 V0.1

## 1. 输入、范围与交接

- 日期：2026-09-06；Page ID `MARKET-EU-NL`；目标 Netherlands，页面 EN。
- 原词：`titanium dioxide supplier netherlands`。研究问题：该词能支持哪些任务解释？工业产品评估与其他意图是否并存？哪些来源问题和行动入口真实可见？不预设港口、仓储或物流定位。
- 已有输入：主表已登记本词和 `/markets/netherlands/`；2026-08-29 旧研究中的 Netherlands 定量指标为 UNAVAILABLE，Germany proxy 不能充当荷兰原词证据。
- 本方法由执行 Agent 实际读取 `skills/search-intent-evidence-analysis/SKILL.md` 后执行；不决定页面读者优先级、CTA、最终文案或 Gate 批准。
- 指定 output_path：`D:\23MySec\pages\markets\netherlands\01_research\MARKET-EU-NL_SEARCH_INTENT_EVIDENCE_V0.1.md`。
- 实际工具：`web.run search_query` 映射 web_search；`web.run open` 映射 web_fetch。未使用 Google 浏览器或 Semrush，未发生账号登录尝试；没有当地 Google 排名、PAA、搜索量、KD、CPC 或第三方 intent 指标。
- 通用检索未控制荷兰 IP、设备、登录、个性化或搜索引擎数据库；只能称本次工具返回样本，不能称荷兰全国 SERP。
- 原始 args 与完整 result 在 [RAW Index](evidence/MARKET-EU-NL_RAW_EVIDENCE_INDEX_V0.1.csv) 对应 10 个 JSON 内。检索日期不是来源发布日期；抓取正文是工具提供的完整文本范围，不等于已检查原网页所有 DOM、图片、下载文件或后台功能。

## 2. 逐查询链与取样

| ID | 实际独立 query | 用途与边界 |
|---|---|---|
| NL-Q01 | titanium dioxide supplier netherlands | 最先独立执行、先保存原始返回；原词观察唯一来源 |
| NL-Q02 | titaandioxide leverancier Nederland verf kunststoffen pigment | 荷兰语工业定向扩展，检查不同来源与反例，不混入原词分布 |
| NL-Q03 | site:vvvf.nl verf drukinkt industrie Nederland | 协会语境核验，定向结果不证明原词主导意图 |
| NL-Q04 | site:profiltra.nl titanium dioxide pigmenten | 对原词 Profiltra PDF 线索作当前正文扩展，不把同站多条变多家供应商 |

Q01 返回 22 个工具结果块，原始呈现顺序为结果编号 `0,12,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21`。这是工具块编号/呈现顺序，不是 Google 自然排名。标题、完整 URL、摘要、工具日期标签和返回顺序全部保存在 Q01 JSON；下表是去重和阅读选择，不能据此计算行业需求比例。

| Q01 结果编号 | 来源家族/类型 | 选择或排除 |
|---|---|---|
| 0,4,10 | EPCE.nl / EPCEb2b.nl；同一公司分类/产品交易页 | 合并同家族；0 是分类页，4 的具体产品正文见 P02，作为购物车/袋装采购反例 |
| 1,5,7 | White；首页/关于/产品 | 合并同站；首页 P01 核验 TiO2 应用与咨询入口 |
| 2 | europages；目录聚合 | 摘要涉及多类用途；不把条目当独立核验企业，不用于公司能力 |
| 3,6,9 | Volza；供应商/贸易数据变体 | 3/6重复、9不同产品口径；不采纳 54/37 等统计，不扩成现有客户 |
| 8 | Alchemora；国家销售落地页 | 仅摘要线索，未取正文，不能当已核验当地经营 |
| 11 | WS Chemicals；rutile 产品页 | P03 核验产品规格问题与 RFQ/Sample 表单 |
| 12,13,14,15 | Tronox；供应商 PDF/历史资料 | 合并；13 含 2017 日期，搜索“published/crawled”不证明当前有效；未读 PDF，不引用现时产能、厂址/唯一生产商或 REACH 结论 |
| 16 | ChemPoint；Chemours SDS | 历史文件发现项，未读取，不当当前法规证据 |
| 17 | Profiltra；TiO2 PDF | 文件路径与搜索日期不一致，不倒填发布日期；通过 Q04 找当前广义 pigments 页 P05 |
| 18,19,20,21 | Wikipedia；历史公司/通用化学 | 合并同来源家族；仅说明检索还混有历史/解释型内容，不用作技术主证 |

Q02 荷兰语扩展返回供应商、零售及泛化学/食用线索，也包含 Galaksi 荷兰语页面。Galaksi 的 P06 正文超时，保持 snippet-only 线索，不据 `.nl` 域名或页面语言推定目标市场/仓库。VVVF 由 Q03 定向协会查询发现；Q04 定向 Profiltra。各扩展全量返回分别保存，不拼接成原词的样本或排名。选取 P01/P02/P03 三个不同企业家族，再以 P04 协会和 P05 广义工业颜料语境交叉检验，而不是只读支持一个预设定位的页面。

## 3. 正文观察与行动入口

下表只概括已读正文；各 supplier 的供货、技术、库存和服务陈述属于其自述，不是我方事实。链接存在不表示已完成下载或提交。

| ID / URL | 实际正文范围和定位 | 观察与局限 |
|---|---|---|
| P01 [White](https://white-global.com/) | L0–127；L75–86 应用；L54–73 联系区；L118–123 产品链接 | TiO2 页面把涂料、塑料/masterbatch、油墨与咨询连接。观察到 Contact/consultant 表单及产品链接；未观察到独立 Request a Sample 或 TDS 下载。其 Venlo 地址和向买家仓库配送的自述不能移植为我方；L54 不证明 White 自有仓库。 |
| P02 [EPCE](https://www.epce.nl/pigmentpoeder-titaan-wit-titanium-dioxide.html) | L0–265；L173–224 产品/购物车；L226–227 公司对象 | TiO2 袋装商品带价格、购物车、库存配送表述，且服务消费者和专业客户。说明 supplier 原词不是纯技术咨询；25 kg 不证明搜索者是大宗工业买家。不采纳其价格、性能、库存或次日承诺。 |
| P03 [WS Chemicals](https://wschemicalsbv.com/product-tio2-rutile.html) | L0–158；L30–41 产品与入口；L106–137 RFQ/Sample 表单 | 可见 RFQ、Samples、SDS/COA 链接及应用技术要求/数量/目的地等字段。未点击文件，未测试表单，COA sample 不等于物理样品。性能数值、Rotterdam/Antwerp、Incoterms 是该供应商自述。 |
| P04 [VVVF](https://www.vvvf.nl/brancheorganisatie) | L0–107；L21–22 行业组织；L34–36 细分 | 荷兰涂料/印刷油墨协会列建筑、油墨、汽车修补、海事、防护、阻燃、道路标线等分组。只支持行业语境，不证明 TiO2 用量、需求比例或我方客户/型号适用。不同来源 85%/95% 代表率口径不采用。 |
| P05 [Profiltra pigments](https://profiltra.nl/en/products/pigments/) | L0–188；L24–36 产品；L42–65 服务流程；L104–115 FAQ | 广义工业颜料服务涂料、油墨、塑料，有 Contact 和 brochure 链接，说明配方要求/产品评估线索。并非当前 TiO2 专页；不把 carbon black 原产地、食品或防腐论述移植给 TiO2。新闻日期不是本页发布日期，testing 不冒充 Sample CTA。 |
| P06 [Galaksi](https://galaksi.nl/nl/producten/grondstoffen/) | 仅错误 L0 | TimeoutError；没有正文证据。已有五个不同家族成功正文满足研究问题，未反复重试。 |

## 4. 意图解释、反例与证据强度

- 原词中出现产品供应、企业咨询和交易商品，可支持“寻找供应来源/评估产品/购买”的商业解释；原词也混有目录、历史 PDF 和通用说明，不能给全部搜索者贴单一阶段或职业。
- P01/P03 的产品与咨询入口使“应用要求和型号评估后联系”成为有依据的一种解释；不证明该解释人数最多。P02 是实际读过的反例：即刻袋装购买也是合理需求。页面 B2B 定位来自项目合同，不来自虚构的 SERP 占比。
- P04 与 P05 只能为荷兰工业应用语境提供补充，不能用定向 site 结果比例宣称原词主要来自 coatings/inks，更不能把同行供应链模式写成我方荷兰仓储或 Rotterdam 港口定位。
- 原词出现历史公司资料不意味着用户主要找工厂历史；供应商自述带国家地址也不证明我方须声称荷兰制造。该组证据允许 Agent 评估 supplier/product 路线，但方法报告不决定优先级或 CTA。

## 5. 可交给 Agent 的问题线索

| 问题线索 | 来源与性质 | 不可推导 |
|---|---|---|
| 所需 TiO2 面向哪一种涂料、油墨或塑料体系？ | P01 L75–86、P03 L106–124，据内容概括 | 不证明特定型号适合所有荷兰应用 |
| 已有型号/配方要求是什么，下一步看产品还是联系？ | P01 产品/咨询、P03 技术表单，分析者综合 | 不新增我方字段、固定表单步骤或性能保证 |
| 买家需要询价还是现货小包装直接购买？ | P02 L177–208 与 P03 L106–137 的反例比较 | 不把零售任务写成我方电商模式 |
| 应用/外观/分散等要求与文件复核怎么衔接？ | P03 参数、SDS/COA入口；P05 配方评估，据内容概括 | 文件链接存在不证明可下载；广义 pigments 不是 TiO2 认证 |
| 国家目的地与生产原产地如何清楚区分？ | P01地址、P03目的地；分析者提出 | 不证明我方荷兰办公室/仓库或具体贸易待遇 |
| 涂料与油墨的细分使用情境是否值得解释？ | P04 L34–36，协会明确列分组 | 不证明市场份额或应给每个细分独立页面 |

## 6. 未完成项与停止理由

Google 当地观察、Semrush NL 数据、精确量/KD/CPC 未采集，保持 UNAVAILABLE，不能报告 0 或排序优先级。Galaksi 只有失败原文和 Q02 摘要；Tronox/Profiltra 历史 PDF、下载附件、供应商后台均未验证，故不用于技术或实时经营结论。未查询当前税率/关税，不对其作结论。以上不阻止对当前商业任务及反例的定性分析；若 Agent 将定量需求、法规或这些公司当前业务事实作为核心判断，需另补相应证据。

交接：本报告保存后由执行 Agent 从同一路径读回；四个独立 query、五份成功正文、一份失败正文均有原始 args/result 与 SHA 索引。无尚未完成但被宣称成功的工具调用。后续页面策略、命题批准和 Gate 决定交由 Agent/总控/用户各自承担。
