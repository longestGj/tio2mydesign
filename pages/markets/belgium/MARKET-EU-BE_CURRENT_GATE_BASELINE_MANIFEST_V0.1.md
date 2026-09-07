# MARKET-EU-BE · Current Gate Baseline Manifest V0.1

## 0. 身份与控制

| 项目 | 当前值 |
|---|---|
| Page / URL / Language | MARKET-EU-BE / `/markets/belgium/` / EN |
| Primary keyword | `titanium dioxide supplier belgium` |
| Review ID | MARKET-EU-BE-G1-01 |
| Date | 2026-09-06 |
| Lifecycle | BRIEF_IN_REVIEW |
| Gate1 / Review status | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL |
| Content intent / User approval date | PENDING_USER_CONFIRMATION / 空白，未批准 |
| Execution authority | 用户逐页Gate1串行委托；Netherlands获确认后“同意。下一步”启动本页草案，不授予本页批准 |
| Roles | 执行子代理读取Gate1 Agent，实际使用搜索意图Skill；总控独立审查，用户最终决定 |
| Owner / shared parent | MARKETS；MARKET-EU-001 `/markets/european-union/` |
| Next-stage permission | Gate2另由其他controller负责；本任务未启动Gate2–10，不从自检或提交推导授权 |

本文件为Belgium当前唯一组合入口。研究质量已通过总控独立审查，仍不是用户已批准Brief或开发交付包。所有相对路径均相对 `D:\23MySec`，除明确网页URL。

## 1. 当前四核心

| Core | Path | Status / purpose | Bytes | SHA-256 |
|---|---|---|---|---|
| Brief | `docs/page-briefs/MARKET-EU-BE_BELGIUM_BRIEF_V0.1.md` | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL；身份、意图卡、5个买家问题、范围/决定 | 11291 | 0B273DFDF55935B394EF78FB8EE07C96BBEF5FCA677CB8A8091A80416FB453E7 |
| 综合研究 | `pages/markets/belgium/01_research/MARKET-EU-BE_GATE1_RESEARCH_REPORT_V0.1.md` | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL；发现、推论、反例、优先级与Gate2输入 | 10864 | 1E5B8A30F2715E9C115F0D2C7F455CD6A826F3683E836AC65C48B6387E93DCF8 |
| 命题证据 | `pages/markets/belgium/01_research/MARKET-EU-BE_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv` | 已纳入总控研究质量通过组合；20稳定命题ID、11字段，原命题状态不改、用户pending保留 | 9264 | C231D56883FB190E020DADD80FA5C66FE3241ED13BD4B3D255017244F37E3841 |
| 当前Manifest | `pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` | PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL；本文件，不记录自身hash | — | — |

## 2. 方法支持，不是第五核心

| Path | Role / actual scope | Bytes | SHA-256 |
|---|---|---|---|
| `pages/markets/belgium/01_research/MARKET-EU-BE_SEARCH_INTENT_EVIDENCE_V0.1.md` | Skill保存并全文读回后Agent消费；原词/FR/NL扩展、正文、反例与局限，不授予方向或Gate | 9503 | E8980B005BB55108C8509BDDD59C0EEB5DAFF6B896AB6F24C38DB79411CB12B4 |
| `pages/markets/belgium/01_research/evidence/MARKET-EU-BE_RAW_EVIDENCE_INDEX_V0.1.csv` | 11 raw文件的path/bytes/SHA与读取口径 | 1703 | 772F8FCBF24AE9D0F3DB2C6693335470AA0FDBDA88DC43DE1FCE5E9C1E589CC5 |
| `pages/markets/belgium/05_review/MARKET-EU-BE_GATE1_PROJECT_CONTROL_REVIEW_V0.1.md` | 总控独立审查；PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL，不替用户决定BE-D01/02 | 5029 | D1F38193B8A54D3A73A8732143B91163956FB5BF316D2CFEFEB2BC51506E10A3 |

Raw目录：`pages/markets/belgium/01_research/evidence/`；BE-Q01原词单独query、BE-Q02 FR、BE-Q03 NL定向行业查询；BE-P01–04完整可读提取；BE-P05–08超时。每份JSON保留actual args/result。P07是P05同URL同方法单次重试，P08是IVP首页替代URL。Google/Semrush未采，不虚构当地排名、数字指标或登录失败。

## 3. 组合权威与消费顺序

1. 用户当前决定、根AGENTS与当前 `docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.4.md`，依批准对象/范围判断，不靠版本号扩大批准。`docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md` 为2026-09-05全站公开授权；Belgium不重复问origin。本页COO仍BE-D02。
2. 登记身份 `docs/architecture/PAGE_REGISTRY_V0.2.md` 与 `research/keyword/11_page_keyword_master.csv` 本页及竞争owner行；PRD `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` 的当前批准范围。
3. 本次四核心是总控已复审、待用户批准的本页组合，不能覆盖更高层已批准事实。`docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md`、Gate1标准、治理细则适用章节；旧origin自动hold、conditional RFQ与缺证即禁用按最新用户/根规则处理，详Brief§2。
4. PRODUCT关系只消费 `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` 及 `PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`；矩阵SHA `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`。不复制重建矩阵或国家推荐。
5. Shared Chrome V0.5与Home owner当前生产Logo/法律区合同后续消费；本页只声明Markets导航，无CURRENT，固定RFQ，不自建组件。CONV-DOC Brief V0.4 Country/Region联系公司位置语义保持；其他接收页精确参数在Gate2/7消费其当时当前Manifest。
6. 原始研究和方法只能支持观察/推论。外部生产商、分销商、试剂页面不是我方能力证据；协会正文未读到不得升格为产业统计。Norkem旧crawl不因读取日变当前产能事实。TCI未实际下载文件。

## 4. 未决与阶段分开

| ID | 需决定的具体内容 | 状态 / 范围 |
|---|---|---|
| BE-D01 | 工业采购/技术评估读者，涂料/塑料重点、进口商/分销采购次级；主CTA Request a Quote，次Explore Products | PENDING_USER_CONFIRMATION；用户看直接内容，不需自行读文件 |
| BE-D02 | “A Certificate of Origin is available upon request.” 可用于本页及等义SEO/GEO/Schema | PENDING_USER_FACT_CONFIRMATION；不冻结已批Malaysia-origin，不扩展每票/税率/海关结果 |
| BE-I01 | 无Google/Semrush指标；essenscia/IVP正文超时，只有搜索层线索 | 研究限制非方向自动阻塞；不引用行业份额或成员统计 |
| BE-I02 | 跨页精确参数、routes/live及scope为后续owner集成事项 | Gate2/7合同消费，Gate8实施/Gate9验证/Gate10发布授权；不阻止当前Gate1草案 |

最终用户方向、事实批准、Gate批准与下一阶段权限分别记录。当前没有APPROVED/CLOSED的Belgium Gate1结论；表中继承的全站批准不代表本页阶段批准。

## 5. 历史、范围与核验

本轮启动前未发现Belgium独立Brief或当前Manifest；首次新增V0.1，无旧批准Belgium文件覆盖。旧全站关键词研究保留原时间与Germany proxy缺口；其他国及共享Status/Index/登记册不在本子代理写入范围。

执行只读核验：20个命题ID唯一，CSV 11字段；11 raw索引bytes/hash逐项一致；方法与三核心已全文读回；主表本页URL/Primary/Page ID唯一；PRODUCT矩阵hash保持；Markdown/CSV无conflict marker或trailing whitespace。Manifest保存后另读回检查自身路径与组合hash。自检不替总控审查，无新脚本、视觉、表单、代码或开发成果。

停止点：`MARKET-EU-BE-G1-01` 总控复审通过，等待用户逐页确认BE-D01/02；不推进India、不启动Gate2、不操作 `D:\16Wordpress_nextjs`。

版本记录：2026-09-06 V0.1，建立Belgium Gate1初始待审组合；同日完整读取总控独立审查后，仅同步Brief/研究/Manifest为PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL并登记审查hash。BRIEF_IN_REVIEW、BE-D01/02 pending、用户批准日期空白均保持；CSV/方法/raw未改。
