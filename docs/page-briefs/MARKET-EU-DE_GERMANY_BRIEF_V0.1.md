# MARKET-EU-DE Germany Brief V0.1

## 0. 文档控制与实际授权

| 字段 | 当前记录 |
|---|---|
| Page ID / Name | MARKET-EU-DE / Germany |
| URL / type | `/markets/germany/` / Market procurement landing page |
| Market / language / priority | GERMANY / EN / P1 |
| Site scope | `tio2-my` |
| 日期 | 2026-09-06 |
| 用户指令 | 在选择未开始的市场页作为Gate 1试跑对象后，用户明确“同意，做这个页面。” |
| 授权范围 | Germany Gate 1执行试跑、研究与Brief草案；不是新角色部署或独立审查授权 |
| 状态 / lifecycle | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` / `BRIEF_IN_REVIEW` |
| Content intent | `PENDING_USER_CONFIRMATION` |
| Gate 0 | 登记身份已存在，用户已选页；独立Brief批准未登记 |
| Gate 1 | 草案已提交，未独立审查，未用户批准 |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| 当前唯一Manifest | `pages/markets/germany/MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` |

这份Brief是获授权的首轮草案，不冒充已批准任务卡。页面研究目录保存本次草案与证据，不晋升为正式批准成果。未查到该页既有独立Brief/Manifest，未覆盖EU或UK页面。

## 1. Page Intent Card（供用户确认）

| 字段 | 方向建议 |
|---|---|
| Audience | 为德国工厂或采购目的地评估工业钛白粉供应来源的采购人员；配方/技术、质量与进口协同人员为次要读者。主次来自项目商业目标和Agent判断，不是SERP人口统计 |
| Buyer problem | 判断这家马来西亚供应方是否值得进一步评估，怎样找到相关产品、准备资料与德国收货需求，并发起沟通 |
| Core message | 面向德国工业买家的Malaysia-origin titanium dioxide供应评估入口。突出产品与下一步；明确Germany是目标市场，不暗示本地实体或库存 |
| Must include | 已批准供应/原产地身份；德国工业应用场景与对应产品入口；从选型到资料/样品/询价的分流；收货地点与需求描述提示；简短EU背景入口 |
| Must exclude | 将EU页全文换国家名；将行业存在写成我司客户案例/汽车资格；德国→型号适合性的推断；详细法规税率文章；未经确认的本地仓储/固定时效/德语服务承诺 |
| Primary CTA | 建议以 Request a Quote 为主要商业行动，沿用现有CONV-RFQ；不知道型号的读者先走Products。Gate 2才锁定具体文案/位置，不新增表单字段 |
| Secondary CTA | Explore Products；Request Documents；Request a Sample按任务需要出现。不是要求每处同时放四个按钮 |
| Ownership boundary | Germany显式国家supplier/procurement；EU通用进口背景归MARKET-EU-001；技术选型归Products/Applications；具体文件与转化归各自页面 |
| 期望成功信号 | 读者明确供应方与目的地关系，进入合适的产品评估或询价路径；本轮没有设定转化率指标 |

## 2. 继承的关键词与身份

- Primary keyword：`titanium dioxide supplier germany`。
- Secondary：`tio2 supplier germany`、`malaysia titanium dioxide germany`。
- Source cluster：`MARKET-EU-02`；intent：C / Supplier Search。
- Mapping：`APPROVED_PRD_V0.3`；verification：`QUALITATIVE_KEYWORD_EVIDENCE`，未升级为定量验证。
- Excluded：generic application terms、exact grade terms、detailed trade-update terms。
- EU拥有Europe/EU修饰；本页拥有Germany修饰。德语检索用于理解，不新增德语页面、主词或hreflang。
- H1/Title/Meta/完整Schema：留待获授权Gate 2及后续合同；不是在本Brief提前定稿。
- 规划Canonical为当前URL的自引用；不声明实际live、indexable或发布状态。

## 3. 必须回答的读者问题

1. 这是谁提供的钛白粉，Germany指供应地点还是我的采购目的地？
2. 我做涂料、塑料或母粒，应该到哪里看相关产品和评价信息？
3. 技术评估、资料审查和报价各自怎么开始，不知道型号时怎么办？
4. 为德国目的地询价，需要补充什么收货与商业需求信息？
5. 哪些EU层面的信息在父页查看，哪些具体需求应交给供应方沟通？

研究答案和优先理由见综合报告§3。这里不把问题清单当作已经完成的买家正文。

## 4. 内容边界与下一阶段输入

- 建议先关注Coatings、Plastics/Masterbatch场景，Printing Inks/Paper保留为其他相关产品路径，不声明德国市场份额或我司客户份额。
- VdL/GKV提供德国场景，不能证明某个Grade满足该场景所有技术条件。具体型号只消费当前批准关系源和各自产品资料。
- 交付地点提示区分约定到港位置与最终收货地点，读者可在现有询价补充说明中描述；不在本页创造物流表单或承诺可交付任意地址。
- Germany页与EU页的差异仍需Gate 2实际文案验证。研究仅提出三种可用维度：德国行业场景、目的地沟通、EU共享内容的简化分流；不谎称这些步骤德国独有。
- Header/Footer直接继承Global owner；固定RFQ、不出现CURRENT文字。Gate 3/5以后按1440/768/390完整证据，不在Gate 1制图。
- 共享页面/路由未完成不阻塞本轮研究；依赖Gate 7登记、Gate 8实现、Gate 9验证，Gate 10另行授权。

## 5. 权威输入和冲突处理

| 输入 | 本轮用途 / 准确范围 |
|---|---|
| 根AGENTS、PROJECT_CONTEXT、分工标准V1.0、Agent角色V0.7 | 范围、已有背景、角色与方法职责、四项交付和自检 |
| `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | 既有Germany页面商业职责，不将旧产品关系或旧Hold覆盖新决定 |
| `docs/architecture/PAGE_REGISTRY_V0.2.md` + `research/keyword/11_page_keyword_master.csv` Germany/EU及相邻owner行 | 已登记URL、关键词、职责；不修改主表 |
| `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md` + `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.1.md` | 国家页差异、Gate 1质量及后续完整断点 |
| `pages/markets/06_handoff/MARKET-EU-001_CURRENT_GATE8_AUTHORIZATION_MANIFEST_V0.18.md` + EU Gate7 Package V0.1 §§1–3 | 当前EU组合内容和职责；早期Brief的旧阶段状态不作为当前进度 |
| `docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md` + `EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md` | Malaysia-origin已批准；其他具体命题按准确scope，不重启原产地Hold |
| PRODUCT V0.3 matrix + unified audit | 中性Application/Process关系；不新增国家→Grade关系 |
| 本页方法报告、综合报告、证据表 | 本轮新研究，均为草案，不是既有企业事实批准 |

局部继承冲突：旧PRD/Market材料中的原产地缺证Hold、旧M-2377冲突及RFQ可隐藏/仅双断点措辞，分别被最新用户决定、PRODUCT V0.3及根AGENTS覆盖。仅在本页按当前权威消费，不回写历史源。尚未确认的德国服务能力不得写成“没有”或永久禁止。

## 6. 待决定内容与记录

| ID | 给用户的具体内容 | 建议 / 影响 | 状态 |
|---|---|---|---|
| DE-D01 | 德国页主要帮助工业采购评估马来西亚供应来源，以涂料、塑料/母粒场景、产品评估和德国目的地询价为重点；EU法规背景链接父页 | 建议采纳；决定后Gate 2才据此写完整正文 | `PENDING_USER_CONFIRMATION` |
| DE-D02 | 如要突出德国本地库存/仓储、德语支持或德国适用COO可按申请提供，需确认具体哪一项真实可用 | 目前不作为核心卖点，也不宣称不存在；若用户希望突出，再逐项确认服务范围。UK的COO批准不自动扩大 | `PENDING_USER_FACT_CONFIRMATION / OPTIONAL_ENRICHMENT` |

2026-09-06用户“同意，做这个页面”登记为研究执行授权，不能追溯解释为本轮尚未形成的方向或能力批准。用户批准日期留空。Gate 1自检不是独立审查。
