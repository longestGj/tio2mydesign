# TiO2 Malaysia 全站页面登记册 V0.2

## 0. 文档信息

| 项目 | 内容 |
|---|---|
| 版本 | V0.2 |
| 日期 | 2026-09-02 |
| 页面总数 | 59 |
| 数据基线 | `research/keyword/11_page_keyword_master.csv`（59 行） |
| 架构基线 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` + `LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md` + [2026-09-08系统/成功页新增决定](SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md) |
| 用途 | 总控审查、页面准入、页面任务卡创建、SEO 和开发交付 |

V0.2 保留 V0.1 的 54 页身份，新增用户批准的 Privacy EN、Privacy BM 和 Cookie Policy 三页。阶段性批准的 `LEGAL-TERMS-EN` 与 `/terms-of-use/` 已由用户随后批准删除，从未进入本合并登记册。

## 1. 登记册职责

本文件是 59 个具体页面的人类可读总控视图。CSV 主表继续保存完整的 secondary keywords、search intent、buyer stage、page role、excluded keywords、cannibalization boundary 和 notes；任何页面任务都必须同时读取本登记册和 CSV 对应记录。

如果本登记册、CSV 或最新批准 PRD 出现冲突：

1. 暂停受影响页面的正式设计或开发。
2. 确认最新用户批准决定和变更来源。
3. 生成新版本并同步修改 PRD、CSV、登记册和页面任务卡。
4. 不得静默选择某一个文件继续。

## 2. 状态解释

### 2.1 Mapping Status

- `APPROVED_*`：页面映射已批准，可以按当前职责进入任务卡阶段。
- `PROVISIONAL_URL`：页面职责可以继续研究和策划，但 URL 不是最终批准路由。
- `PLANNED_*`：页面已进入网站规划，但详细页面方案或转化流程尚未批准。
- `NEW_PAGE_CANDIDATE`：关键词研究支持该候选方向，不等于批准建设。
- `APPROVED_LEGAL_ARCHITECTURE`：法律/隐私页面身份与 URL 已由用户批准；不表示页面文案、视觉、开发或发布已批准。

### 2.2 Verification Status

- `NO_DIRECT_KEYWORD_TARGET`：导航或工具页面，不强行设置 SEO 主关键词。
- `QUALITATIVE_KEYWORD_EVIDENCE`：有定性搜索意图证据，不能虚构精确搜索量、KD 或 CPC。
- `PROVISIONAL_KEYWORD_NO_METRICS`：产品型号词来自批准架构，没有型号级量化指标。
- `FACT_EVIDENCE_REQUIRED`：事实字段发布前必须核验。
- `TECHNICAL_VERIFICATION_REQUIRED`：技术冲突字段不得猜测或渲染。
- `OFFICIAL_SOURCE_UPDATE_REQUIRED`：政策或贸易信息必须使用当前官方来源和更新时间。
- `LOCALIZATION_REVIEW_REQUIRED`：语言、URL 和本地表达需要本地化审核。
- `CONTACT_DETAILS_REQUIRED`：只可使用已经核实的联系方式。

### 2.3 与页面生命周期的区别

本表不表示页面视觉或开发进度。页面生命周期另用 `NOT_STARTED`、`APPROVED_FOR_DESIGN`、`APPROVED_FOR_BUILD`、`IN_DEVELOPMENT`、`QA_IN_REVIEW`、`APPROVED_COMPLETE` 等状态记录。一个页面可以拥有已批准映射，但仍未开始设计。

## 3. 页面类型与 Playbook

| Playbook Key | 页面体系 | 数量 | 计划文件 |
|---|---|---:|---|
| `HOME` | Home | 1 | `docs/page-playbooks/HOME_PLAYBOOK_V0.1.md` |
| `ABOUT_CONTACT` | About / Contact | 2 | `docs/page-playbooks/ABOUT_CONTACT_PLAYBOOK_V0.1.md` |
| `MARKET` | Markets | 12 | `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md` |
| `PRODUCT` | Products | 17 | `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md` |
| `APPLICATION` | Applications | 6 | `docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md` |
| `DOCUMENT` | Documents | 4 | `docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.1.md` |
| `RESOURCE` | Resources | 9 | `docs/page-playbooks/RESOURCE_PLAYBOOK_V0.1.md` |
| `CONVERSION` | Conversion | 4 | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md`；共享结果页另按[批准设计](../superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md)消费适用规则 |
| `LEGAL_PRIVACY` | Legal / Privacy | 3 | `docs/page-playbooks/LEGAL_PRIVACY_PLAYBOOK_V0.1.md`（待建立） |
| `SYSTEM` | System | 1 | 无专属通用Playbook；使用[批准设计](../superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md)及[新增决定](SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md)作为页面专属准入合同 |

这些 Playbook 将在下一阶段逐类建立。在对应 Playbook 获得批准前，可以完成证据研究和页面任务卡草案，但不得把页面类型方案描述为最终批准。

## 4. 59 页清单

### 4.1 Home — Playbook `HOME`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| HOME-001 | Home | `/` | Homepage | `malaysia titanium dioxide` | P0 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |

### 4.2 About / Contact — Playbook `ABOUT_CONTACT`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| ABOUT-001 | About TiO2 Malaysia | `/about/` | Trust / company page | `malaysia titanium dioxide manufacturer` | P1 | APPROVED_PRD_V0.3 | FACT_EVIDENCE_REQUIRED |
| CONTACT-001 | Contact | `/contact/` | Utility contact page | `NO_PRIMARY_KEYWORD` | P1 | PLANNED_UTILITY | CONTACT_DETAILS_REQUIRED |

### 4.3 Markets — Playbook `MARKET`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| MARKET-000 | Markets | `/markets/` | Navigation hub | `NO_PRIMARY_KEYWORD` | P1 | APPROVED_NAVIGATION_HUB | NO_DIRECT_KEYWORD_TARGET |
| MARKET-EU-001 | European Union | `/markets/european-union/` | Market procurement landing page | `titanium dioxide supplier europe` | P0 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-EU-DE | Germany | `/markets/germany/` | Market procurement landing page | `titanium dioxide supplier germany` | P1 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-EU-IT | Italy | `/markets/italy/` | Market procurement landing page | `titanium dioxide supplier italy` | P2 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-EU-ES | Spain | `/markets/spain/` | Market procurement landing page | `titanium dioxide supplier spain` | P2 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-EU-PL | Poland | `/markets/poland/` | Market procurement landing page | `titanium dioxide supplier poland` | P2 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-EU-NL | Netherlands | `/markets/netherlands/` | Market procurement landing page | `titanium dioxide supplier netherlands` | P2 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-EU-BE | Belgium | `/markets/belgium/` | Market procurement landing page | `titanium dioxide supplier belgium` | P2 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-UK-001 | United Kingdom | `/markets/united-kingdom/` | Market procurement landing page | `titanium dioxide supplier uk` | P0 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-IN-001 | India | `/markets/india/` | Market procurement landing page | `titanium dioxide supplier india` | P0 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-BR-EN | Brazil | `/markets/brazil/` | Market procurement landing page | `titanium dioxide supplier brazil` | P1 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| MARKET-BR-PT | Brazil Portuguese | `/pt-br/markets/brazil/` | Localized market procurement landing page | `fornecedor de dióxido de titânio` | P1 | PROVISIONAL_URL | LOCALIZATION_REVIEW_REQUIRED |

### 4.4 Products — Playbook `PRODUCT`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| PRODUCT-000 | Titanium Dioxide Products | `/products/` | Product hub | `titanium dioxide pigment` | P0 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| PRODUCT-PROC-CL | Chloride Process Titanium Dioxide | `/products/chloride-process-titanium-dioxide/` | Process aggregation page | `chloride process titanium dioxide` | P1 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| PRODUCT-PROC-SU | Sulfate Process Titanium Dioxide | `/products/sulfate-process-titanium-dioxide/` | Process aggregation page | `sulfate process titanium dioxide` | P1 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| GRADE-M350 | M-350 | `/products/m-350/` | Grade product page | `M-350 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M510 | M-510 | `/products/m-510/` | Grade product page | `M-510 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M896 | M-896 | `/products/m-896/` | Grade product page | `M-896 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M996 | M-996 | `/products/m-996/` | Grade product page | `M-996 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | TECHNICAL_VERIFICATION_REQUIRED |
| GRADE-M2196 | M-2196 | `/products/m-2196/` | Grade product page | `M-2196 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | TECHNICAL_VERIFICATION_REQUIRED |
| GRADE-M895 | M-895 | `/products/m-895/` | Grade product page | `M-895 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M200 | M-200 | `/products/m-200/` | Grade product page | `M-200 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M108 | M-108 | `/products/m-108/` | Grade product page | `M-108 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M210 | M-210 | `/products/m-210/` | Grade product page | `M-210 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M340 | M-340 | `/products/m-340/` | Grade product page | `M-340 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M886 | M-886 | `/products/m-886/` | Grade product page | `M-886 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M52 | M-52 | `/products/m-52/` | Grade product page | `M-52 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |
| GRADE-M2377 | M-2377 | `/products/m-2377/` | Grade product page | `M-2377 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | TECHNICAL_VERIFICATION_REQUIRED |
| GRADE-CR901 | CR-901 | `/products/cr-901/` | Grade product page | `CR-901 titanium dioxide` | P1 | APPROVED_PRD_V0.3 | PROVISIONAL_KEYWORD_NO_METRICS |

### 4.5 Applications — Playbook `APPLICATION`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| APP-000 | Applications | `/applications/` | Navigation hub | `NO_PRIMARY_KEYWORD` | P1 | PLANNED_ARCHITECTURE | NO_DIRECT_KEYWORD_TARGET |
| APP-COAT | TiO2 for Coatings | `/applications/titanium-dioxide-for-coatings/` | Application landing page | `titanium dioxide for coatings` | P1 | PROVISIONAL_URL | QUALITATIVE_KEYWORD_EVIDENCE |
| APP-PLAS | TiO2 for Plastics | `/applications/titanium-dioxide-for-plastics/` | Application landing page | `titanium dioxide for plastics` | P1 | PROVISIONAL_URL | QUALITATIVE_KEYWORD_EVIDENCE |
| APP-MB | TiO2 for Masterbatch | `/applications/titanium-dioxide-for-masterbatch/` | Application landing page | `titanium dioxide for masterbatch` | P1 | PROVISIONAL_URL | QUALITATIVE_KEYWORD_EVIDENCE |
| APP-INK | TiO2 for Printing Inks | `/applications/titanium-dioxide-for-printing-inks/` | Application landing page | `titanium dioxide for printing inks` | P2 | PROVISIONAL_URL | QUALITATIVE_KEYWORD_EVIDENCE |
| APP-PAPER | TiO2 for Paper | `/applications/titanium-dioxide-for-paper/` | Application landing page | `titanium dioxide for paper` | P2 | PROVISIONAL_URL | QUALITATIVE_KEYWORD_EVIDENCE |

### 4.6 Documents — Playbook `DOCUMENT`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| DOC-000 | Documents & Compliance | `/documents/` | Navigation hub | `NO_PRIMARY_KEYWORD` | P1 | PLANNED_ARCHITECTURE | NO_DIRECT_KEYWORD_TARGET |
| DOC-REACH | Titanium Dioxide REACH | `/documents/reach/` | Document / compliance page | `titanium dioxide reach registration` | P1 | PROVISIONAL_URL | FACT_EVIDENCE_REQUIRED |
| DOC-TDS | TDS, SDS & COA | `/documents/tds-sds-coa/` | Document / compliance page | `titanium dioxide tds` | P1 | PROVISIONAL_URL | FACT_EVIDENCE_REQUIRED |
| DOC-COO | Certificate of Origin | `/documents/certificate-of-origin/` | Document / compliance page | `titanium dioxide country of origin certificate` | P1 | PROVISIONAL_URL | FACT_EVIDENCE_REQUIRED |

### 4.7 Resources — Playbook `RESOURCE`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| RES-000 | Resources | `/resources/` | Navigation hub | `NO_PRIMARY_KEYWORD` | P2 | PLANNED_ARCHITECTURE | NO_DIRECT_KEYWORD_TARGET |
| RES-ORIGIN | Non-China Titanium Dioxide Supply Guide | `/resources/non-china-titanium-dioxide/` | Buying guide | `non china titanium dioxide` | P1 | APPROVED_PRD_V0.3 | QUALITATIVE_KEYWORD_EVIDENCE |
| RES-PROC | Chloride vs Sulfate Titanium Dioxide | `/resources/chloride-vs-sulfate-titanium-dioxide/` | Buying guide | `chloride vs sulfate titanium dioxide` | P2 | APPROVED_USER_GATE_0_1 | QUALITATIVE_KEYWORD_EVIDENCE |
| RES-CHEMOURS | Chemours Titanium Dioxide Alternatives | `/resources/chemours-titanium-dioxide-alternatives/` | Technical guide | `chemours titanium dioxide alternative` | P3 | NEW_PAGE_CANDIDATE | QUALITATIVE_KEYWORD_EVIDENCE |
| RES-R706 | Ti-Pure R-706 Alternative Direction | `/resources/ti-pure-r-706-alternative/` | Technical guide | `ti-pure r-706 alternative equivalent` | P2 | NEW_PAGE_CANDIDATE | QUALITATIVE_KEYWORD_EVIDENCE |
| RES-TRADE-EU | EU Titanium Dioxide Trade Update | `/resources/eu-titanium-dioxide-anti-dumping-duty/` | Market & trade update | `eu titanium dioxide anti dumping duty` | P2 | PLANNED_CONTENT | OFFICIAL_SOURCE_UPDATE_REQUIRED |
| RES-TRADE-UK | UK Titanium Dioxide Trade Update | `/resources/uk-titanium-dioxide-anti-dumping-investigation/` | Market & trade update | `uk titanium dioxide anti dumping investigation` | P2 | PLANNED_CONTENT | OFFICIAL_SOURCE_UPDATE_REQUIRED |
| RES-TRADE-IN | India Titanium Dioxide Trade Update | `/resources/india-titanium-dioxide-anti-dumping-duty/` | Market & trade update | `india titanium dioxide anti dumping duty` | P2 | PLANNED_CONTENT | OFFICIAL_SOURCE_UPDATE_REQUIRED |
| RES-TRADE-BR | Brazil Titanium Dioxide Trade Update | `/resources/brazil-titanium-dioxide-anti-dumping-duty/` | Market & trade update | `brazil titanium dioxide anti dumping duty` | P2 | PLANNED_CONTENT | OFFICIAL_SOURCE_UPDATE_REQUIRED |

### 4.8 Conversion — Playbook `CONVERSION`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| CONV-DOC | Request Documents | `/request-documents/` | Utility conversion page | `NO_PRIMARY_KEYWORD` | P0 | PLANNED_CONVERSION | NO_DIRECT_KEYWORD_TARGET |
| CONV-RFQ | Request a Quote | `/request-a-quote/` | RFQ conversion page | `titanium dioxide quote supplier` | P0 | PLANNED_CONVERSION | QUALITATIVE_KEYWORD_EVIDENCE |
| CONV-SAMPLE | Request a Sample | `/request-sample/` | Sample conversion page | `titanium dioxide sample supplier` | P1 | PLANNED_CONVERSION | QUALITATIVE_KEYWORD_EVIDENCE |
| CONV-THANK | Thank You | `/thank-you/` | Shared form-result utility page | `NO_PRIMARY_KEYWORD` | P1 | APPROVED_USER_PAGE_ADDITION | NO_DIRECT_KEYWORD_TARGET |

### 4.9 Legal / Privacy — Playbook `LEGAL_PRIVACY`

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| LEGAL-PRIV-EN | Privacy Policy / Privacy Notice | `/privacy-policy/` | Legal / privacy page | `NO_PRIMARY_KEYWORD` | P0 | APPROVED_LEGAL_ARCHITECTURE | FACT_EVIDENCE_REQUIRED |
| LEGAL-PRIV-MS | Dasar Privasi / Notis Perlindungan Data Peribadi | `/ms/privacy-policy/` | Legal / privacy page | `NO_PRIMARY_KEYWORD` | P0 | APPROVED_LEGAL_ARCHITECTURE | FACT_EVIDENCE_REQUIRED |
| LEGAL-COOKIE-EN | Cookie Policy | `/cookie-policy/` | Legal / cookie page | `NO_PRIMARY_KEYWORD` | P0 | APPROVED_LEGAL_ARCHITECTURE | FACT_EVIDENCE_REQUIRED |

`Cookie Settings` 是 Footer 中重新打开 Consent Manager 的共享功能按钮，不是页面、URL 或关键词记录。`Terms of Use` 不属于当前批准架构。

### 4.10 System — 页面专属批准设计

| Page ID | 页面 | URL | 页面类型 | 主关键词 | 优先级 | Mapping Status | Verification Status |
|---|---|---|---|---|---|---|---|
| SYS-404 | Page Not Found | `RUNTIME_FALLBACK`（全站未知URL；无独立可索引`/404/`） | Global system recovery page | `NO_PRIMARY_KEYWORD` | P1 | APPROVED_USER_PAGE_ADDITION | NO_DIRECT_KEYWORD_TARGET |

新增两页的内容/行为、robots及sitemap规则见[新增决定](SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md)。`APPROVED_USER_PAGE_ADDITION`表示用户批准页面身份/职责与设计输入，不表示Gate 1通过、开发或发布授权。

## 5. 页面准入规则

### 5.1 可以进入正式页面任务卡的条件

- 页面存在于本登记册。
- Page ID、页面类型和页面职责已明确。
- URL 状态被正确标记；暂定 URL 不得伪装为最终 URL。
- 主关键词、排除关键词和防内耗边界已从 CSV 复制。
- 事实验证状态已写入页面任务卡。
- 已指定适用 Playbook；如果 Playbook 尚未批准，页面只能进行研究和任务卡草案。

### 5.2 可以进入视觉设计的条件

- 页面任务卡通过总控审查。
- 页面内容模块、独有内容、CTA、内链和证据边界已确认。
- 不存在未解决的 URL、页面职责或主关键词冲突。
- 受限事实已经明确为可发布、受控申请或不渲染。

### 5.3 可以进入开发的条件

- 页面任务卡和完整视觉稿已获批准。
- WordPress 字段、Next.js 组件、`site_scope=tio2-my` 和表单数据合同已明确。
- 桌面端与手机端验收标准完整。
- 开发任务不会修改其他站点的数据或行为。

### 5.4 可以标记完成的条件

- 通过根 `AGENTS.md` 的完成定义。
- 页面实现与登记册身份一致。
- 阻塞级问题关闭。
- 总控完成质量审查。
- 发布状态另行记录，不因开发完成自动改变。

## 6. 新页面和变更处理

任何不在 59 页清单内的新页面先作为变更提案，不直接创建目录或路由。提案至少包含：搜索意图、主关键词、现有页面为何不能承接、建议 URL、内耗检查、内链影响、内容证据、优先级和是否替代现有候选。

获得批准后，依次更新：

1. 新 PRD 版本。
2. 新页面—关键词主表版本。
3. 新页面登记册版本。
4. 项目状态与索引。
5. 页面任务卡和适用 Playbook。

历史 V0.1 登记册保留，不覆盖。V0.2 的 Legal/Privacy 变更来源为用户于 2026-09-02 批准的 `LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`。

2026-09-08按用户批准设计及Gate 0–1执行计划在现行入口追加两页，57→59；批准增补、原57页保留及PRD组合关系见[新增决定](SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md)。本次不回写历史PRD或表单批准源。
