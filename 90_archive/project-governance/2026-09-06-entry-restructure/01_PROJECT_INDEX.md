# TiO2 Malaysia 项目资料索引

## 1. 首要入口

| 用途 | 当前入口 | 使用说明 |
|---|---|---|
| 项目稳定规则 | [AGENTS.md](AGENTS.md) | 所有任务开工前读取 |
| Agent / Skill 分工标准 | [AGENT_SKILL_SEPARATION_STANDARD_V1.0.md](docs/architecture/AGENT_SKILL_SEPARATION_STANDARD_V1.0.md) | 已批准：Agent 负责结果与判断、Skill 负责可复用方法；执行自检与独立审查分离 |
| Gate 1 执行 Agent 设计 | [Gate 1 execution agent design](docs/superpowers/specs/2026-09-06-gate1-execution-agent-design.md) | 岗位定位已获用户确认；方法选择、研究深度与提交判断待确认；尚未创建运行 Agent |
| Gate 1–5 统一标准 | [PAGE_GATE_1_5_STANDARD_V1.0.md](docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md) | 页面想法、内容确认、响应式视觉、审批状态与单一 Manifest 的当前标准 |
| 当前状态 | [00_PROJECT_STATUS.md](00_PROJECT_STATUS.md) | 查看完成项、冻结项和下一步 |
| 目录说明 | [02_DIRECTORY_GUIDE.md](02_DIRECTORY_GUIDE.md) | 查看资料放置规则和旧路径映射 |
| 最新 PRD | [TiO2_Malaysia_Website_PRD_V0.4.md](docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md) | 当前已确认页面架构与产品基线 |
| 57 页有效架构 | [PAGE_REGISTRY_V0.2.md](docs/architecture/PAGE_REGISTRY_V0.2.md) | 已合并57个唯一 Page ID：原54页加 Privacy EN、Privacy BM、Cookie Policy；Terms为0 |
| 页面任务卡模板 | [PAGE_BRIEF_TEMPLATE.md](docs/page-briefs/PAGE_BRIEF_TEMPLATE.md) | 每个具体页面开工前复制并填写 |
| 页面—关键词实施主表 | [11_page_keyword_master.csv](research/keyword/11_page_keyword_master.csv) | SEO、内容与开发共同使用的实施数据源 |
| Evidence Gap 用户决定登记册 | [EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md](docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md) | 当前事实缺口、具体拟用文案、用户授权范围与外部时效来源状态 |
| 视觉标准 | [TiO2_Malaysia_Visual_Standard_V1.0.md](brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md) | 所有页面视觉设计共同遵守 |
| PRODUCT 当前关系矩阵 | [PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv](pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv) | 14 型号 × 6 Application 的当前用户批准关系基线 |
| 12 Grade 严格串行当前状态 | [Autonomous Serial Manifest V0.16](docs/product-pages/29_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.16.md) | 12/12 已完成 Gate 9；Active Grade=`NONE`；Gate 10 未授权 |
| 12 Grade 完成摘要 | [Completion Summary V0.1](docs/product-pages/30_Product_Detail_12_Grade_Serial_Completion_Summary_V0.1.md) | 固定顺序、12 个实现 commit、Gate 9 结果和发布边界 |

本项目只负责视觉、SEO、GEO 和开发交付规格。代码交付目标为 `D:\16Wordpress_nextjs`，Malaysia 新站必须使用独立 `site_scope=tio2-my`；开发完成后，本项目仅进行只读质量验收，不修改代码。

## 1.1 Legal / Privacy 当前批准增补

- [Legal / Privacy Architecture Change and User Decisions V1.0](docs/architecture/LEGAL_PRIVACY_ARCHITECTURE_CHANGE_AND_USER_DECISIONS_V1.0.md) — 历史批准增补；其 Basic Mode 已被 Advanced override 替代，Terms 页面、58 页总数、Footer Terms 和管辖法律待决项已被下述 No-Terms override 替代。其余 `info@tio2malaysia.com`、三年询盘保留、Web3Forms Free、地址边界等决定继续有效。
- [Legal / Privacy Advanced Consent and Code Reuse Decision V1.0](docs/architecture/LEGAL_PRIVACY_ADVANCED_CONSENT_AND_CODE_REUSE_DECISION_V1.0.md) — `USER_APPROVED / ACTIVE_OVERRIDE`；Advanced Mode 替代 Basic，记录用户对 titantitanium.cn 本地 consent code 的复用授权、自建 Consent Manager 首选方向、必须适配/禁止复制字段及 Gate 7–9 验收合同。
- [Legal / Privacy No-Terms TITAN Pattern Decision V1.0](docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md) — `USER_APPROVED / ACTIVE_ARCHITECTURE_OVERRIDE`；删除独立 Terms 与 Footer Terms，58→57 页，关闭管辖法律/争议处理待决项；保留 Privacy EN/BM、Cookie Policy、Cookie Settings 与 Advanced Consent。
- [Legal / Privacy Gate 1 Data Flow and Evidence V1.0](docs/architecture/LEGAL_PRIVACY_GATE1_DATA_FLOW_AND_EVIDENCE_V1.0.md) — `APPROVED / CLOSED`；用户于 2026-09-02 确认 Web3Forms 账号配置不影响 Gate 1，批准数据流、Web3Forms 30天后台显示与最长3年物理TTL、RFQ字段、子处理方、TITAN本地代码哈希、Advanced Consent、官方依据和 `/privacy-policy/` 路由边界，并授权进入 Gate 2。
- [Legal / Privacy Playbook V0.1](docs/page-playbooks/LEGAL_PRIVACY_PLAYBOOK_V0.1.md) — `USER_APPROVED_GATE_2_BASELINE / ACTIVE`；三页 Legal/Privacy 的共同研究、内容、SEO/GEO、Consent、响应式、证据与交付规则。
- [Legal / Privacy Gate 2 Content Skeleton Submission V0.1](docs/architecture/LEGAL_PRIVACY_GATE2_CONTENT_SKELETON_SUBMISSION_V0.1.md) — Review ID `LEGAL-PRIVACY-G2-SKELETON-PCR-01 = USER_APPROVED / CLOSED`；用户于2026-09-02批准三页及Advanced Consent UI骨架并授权完整文案。
- [Legal / Privacy Gate 2 Full Copy Submission V0.1](docs/architecture/LEGAL_PRIVACY_GATE2_FULL_COPY_SUBMISSION_V0.1.md) 与 [Gate 2 Closure / Gate 3 Authorization V0.1](docs/architecture/LEGAL_PRIVACY_GATE2_CLOSURE_AND_GATE3_AUTHORIZATION_V0.1.md) — `LEGAL-PRIVACY-G2-FULL-COPY-PCR-01 = USER_APPROVED / CLOSED`；英文Privacy、BM Privacy、Cookie Policy及Cookie Settings全文已批准，Gate 3已获授权。
- [Privacy Policy EN Full Copy V0.2](pages/legal-privacy/04_planning/LEGAL-PRIV-EN_GATE2_FULL_COPY_V0.2.md)、[Privacy Policy BM Full Copy V0.2](pages/legal-privacy/04_planning/LEGAL-PRIV-MS_GATE2_FULL_COPY_V0.2.md)、[Cookie Policy EN Full Copy V0.2](pages/legal-privacy/04_planning/LEGAL-COOKIE-EN_GATE2_FULL_COPY_V0.2.md) — 当前三份全文权威；Privacy V0.2纳入Request Documents实际八字段、用途、Web3Forms Free browser-direct及5 September 2026更新日期，Privacy V0.1保留为历史版本。BM人工等效审阅与生产Cookie inventory仍是发布前控制。
- [Cookie Gate 2 Targeted Buyer Clean Closure V0.1](docs/architecture/LEGAL_COOKIE_GATE2_TARGETED_BUYER_CLEAN_CLOSURE_V0.1.md) — `LEGAL-COOKIE-G3-BUYER-CLEAN-01 = USER_APPROVED / CLOSED`；解除Gate 3暂停。
- [Privacy Policy EN Brief V0.1](docs/page-briefs/LEGAL-PRIV-EN_PRIVACY_POLICY_BRIEF_V0.1.md)、[Privacy Policy BM Brief V0.1](docs/page-briefs/LEGAL-PRIV-MS_PRIVACY_POLICY_BM_BRIEF_V0.1.md)、[Cookie Policy EN Brief V0.1](docs/page-briefs/LEGAL-COOKIE-EN_COOKIE_POLICY_BRIEF_V0.1.md) — Gate 1–7阶段任务卡；三页当前阶段已由下述Gate 9 V1.1 Manifest接管，lifecycle=`READ_ONLY_QA_APPROVED`；BM Meta方案A保留，BM人工等效审校仍为发布阻塞项。
- [Advanced Consent / Cookie Settings Shared Brief V0.1](docs/page-briefs/SHARED-CONSENT_ADVANCED_COOKIE_SETTINGS_BRIEF_V0.1.md) — 非页面共享控制的Gate 1–7任务卡；当前`no_optional_analytics`状态已通过Gate 9共享依赖验收。
- [Legal / Privacy Gate 3 Responsive Wireframe Spec V0.2](pages/legal-privacy/04_planning/LEGAL_PRIVACY_GATE3_RESPONSIVE_WIREFRAME_SPEC_V0.2.md)、[Validation V0.2](pages/legal-privacy/04_planning/LEGAL_PRIVACY_GATE3_WIREFRAME_VALIDATION_V0.2.md)、[Project-Control Submission V0.2](docs/architecture/LEGAL_PRIVACY_GATE3_PROJECT_CONTROL_SUBMISSION_V0.2.md) — 当前已批准Gate 3权威；Privacy EN/BM Desktop左侧目录随页面滚动、不使用sticky/fixed。`LEGAL-PRIVACY-G3-PCR-02 = USER_APPROVED / CLOSED`。V0.1保留为历史版本。
- Gate 3 current manifests V0.2: [Privacy EN](pages/legal-privacy/04_planning/LEGAL-PRIV-EN_CURRENT_GATE3_BASELINE_MANIFEST_V0.2.md)、[Privacy BM](pages/legal-privacy/04_planning/LEGAL-PRIV-MS_CURRENT_GATE3_BASELINE_MANIFEST_V0.2.md)、[Cookie EN](pages/legal-privacy/04_planning/LEGAL-COOKIE-EN_CURRENT_GATE3_BASELINE_MANIFEST_V0.2.md)、[Shared Consent](pages/legal-privacy/04_planning/SHARED-CONSENT_CURRENT_GATE3_BASELINE_MANIFEST_V0.2.md)。
- [Gate 3 User Approval and Gate 4 Authorization V0.1](docs/architecture/LEGAL_PRIVACY_GATE3_USER_APPROVAL_AND_GATE4_AUTHORIZATION_V0.1.md) — 用户于2026-09-02批准Gate 3并授权Gate 4；历史阶段授权记录。
- [Gate 4 Primary CTA Contrast Hold V0.1](docs/architecture/LEGAL_PRIVACY_GATE4_PRIMARY_CTA_CONTRAST_HOLD_V0.1.md) — 用户选择方案A，`LEGAL-PRIVACY-G4-CTA-CONTRAST-01 = USER_APPROVED / CLOSED`。
- [Primary CTA Accessibility Addendum V1.0](brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md) — `USER_APPROVED / ACTIVE_GLOBAL_OVERRIDE`；全站填充Primary CTA使用Accessible Action Teal `#008078`+白字（`4.82:1`），原Malaysia Teal `#00A99D`继续用于品牌强调。
- [Gate 4 Consent Equal-Prominence Hold V0.1](docs/architecture/LEGAL_PRIVACY_GATE4_CONSENT_EQUAL_PROMINENCE_HOLD_V0.1.md) — 用户选择方案A，`LEGAL-PRIVACY-G4-CONSENT-PROMINENCE-01 = USER_APPROVED / CLOSED`；Accept与Necessary-only使用完全相同的白底Navy描边，Cookie Policy为三级链接。
- [Legal / Privacy Gate 4 Visual Direction Spec V0.2](pages/legal-privacy/04_planning/LEGAL_PRIVACY_GATE4_VISUAL_DIRECTION_SPEC_V0.2.md)、[Validation V0.2](pages/legal-privacy/04_planning/LEGAL_PRIVACY_GATE4_VISUAL_DIRECTION_VALIDATION_V0.2.md)、[Project-Control Submission V0.2](docs/architecture/LEGAL_PRIVACY_GATE4_PROJECT_CONTROL_SUBMISSION_V0.2.md) — 三项Option A已全部纳入；`LEGAL-PRIVACY-G4-PCR-02 = USER_APPROVED / CLOSED`。
- [Gate 4 User Approval and Gate 5 Authorization V0.1](docs/architecture/LEGAL_PRIVACY_GATE4_USER_APPROVAL_AND_GATE5_AUTHORIZATION_V0.1.md) — 用户于2026-09-02批准Gate 4并授权Gate 5；Gate 6–10未授权。
- [Gate 4 Light-Surface Teal Contrast Hold V0.1](docs/architecture/LEGAL_PRIVACY_GATE4_LIGHT_SURFACE_TEAL_CONTRAST_HOLD_V0.1.md) — 用户选择方案A，`LEGAL-PRIVACY-G4-LIGHT-TEAL-CONTRAST-01 = USER_APPROVED / CLOSED`；白底功能性Teal统一`#008078`，`#00A99D`保留为装饰/深色背景强调。
- Gate 4 manifests V0.4为已批准历史阶段基线，已由Gate 5 current manifests替代当前指针。
- [Legal / Privacy Gate 5 Full Visual Spec V0.1](pages/legal-privacy/04_planning/LEGAL_PRIVACY_GATE5_FULL_VISUAL_SPEC_V0.1.md)、[Validation V0.1](pages/legal-privacy/04_planning/LEGAL_PRIVACY_GATE5_FULL_VISUAL_VALIDATION_V0.1.md)、[Project-Control Submission V0.1](docs/architecture/LEGAL_PRIVACY_GATE5_PROJECT_CONTROL_SUBMISSION_V0.1.md) — 保留历史pre-approval提交状态；用户后续已批准Gate 5，当前视觉输入由V0.6 Manifest与V0.2修正资产覆盖。
- Gate 5 V0.5 manifests为历史批准基线；当前修正视觉输入为V0.6: [Privacy EN](pages/legal-privacy/04_planning/LEGAL-PRIV-EN_CURRENT_GATE5_BASELINE_MANIFEST_V0.6.md)、[Privacy BM](pages/legal-privacy/04_planning/LEGAL-PRIV-MS_CURRENT_GATE5_BASELINE_MANIFEST_V0.6.md)、[Cookie EN](pages/legal-privacy/04_planning/LEGAL-COOKIE-EN_CURRENT_GATE5_BASELINE_MANIFEST_V0.6.md)、[Shared Consent](pages/legal-privacy/04_planning/SHARED-CONSENT_CURRENT_GATE5_BASELINE_MANIFEST_V0.6.md)。
- [Gate 5 Targeted Shared-Chrome Correction V0.2](pages/legal-privacy/04_planning/LEGAL_PRIVACY_GATE5_TARGETED_CHROME_CORRECTION_V0.2.md) 与 [Validation V0.2](pages/legal-privacy/04_planning/LEGAL_PRIVACY_GATE5_TARGETED_CHROME_VALIDATION_V0.2.md) — 用户批准方案A；Footer精确`TiO2`与Mobile Menu八项结构修订通过，V0.1资产未覆盖。
- [Gate 6 Shared Chrome Conformance Hold V0.1](docs/architecture/LEGAL_PRIVACY_GATE6_SHARED_CHROME_CONFORMANCE_HOLD_V0.1.md) — 两项Important finding均已关闭，`HOLD_RESOLVED / CLOSED`。
- [Gate 6 Project-Control Review V0.1](pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE6_PROJECT_CONTROL_REVIEW_V0.1.md) 与 [Closure V0.1](pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md) — `LEGAL-PRIVACY-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；最终20/20审计检查PASS；其历史“Gate 7未授权”边界已由后续用户授权取代。
- Gate 6 current manifests V0.7: [Privacy EN](pages/legal-privacy/05_review/LEGAL-PRIV-EN_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md)、[Privacy BM](pages/legal-privacy/05_review/LEGAL-PRIV-MS_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md)、[Cookie EN](pages/legal-privacy/05_review/LEGAL-COOKIE-EN_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md)、[Shared Consent](pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE6_BASELINE_MANIFEST_V0.7.md)。
- [Gate 7 User Authorization](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_USER_AUTHORIZATION_2026-09-02.md) 与 [BM Meta Hold/Closure](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_BM_META_HOLD_V0.1.md) — 用户授权Gate 7并批准BM Meta方案A；暂停项已关闭。
- [Gate 7 Handoff Package](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_HANDOFF_PACKAGE_V0.1.md)、[CMS/API/Component Mapping](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md)、[Consent/CMP/Data Flow](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_CONSENT_CMP_DATA_FLOW_CONTRACT_V0.1.md)、[SEO/GEO/Schema/Route](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_SEO_GEO_SCHEMA_ROUTE_CONTRACT_V0.1.md)、[Global Chrome/Responsive/A11y](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_GLOBAL_CHROME_RESPONSIVE_A11Y_CONTRACT_V0.1.md) 与 [Gate 8/9 Acceptance](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_GATE8_GATE9_ACCEPTANCE_AND_BLOCKERS_V0.1.md) — 当前开发交付合同；不含代码或凭证。
- [Gate 7 Project-Control Review](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)、[Fresh Validation](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_FRESH_VALIDATION_V0.1.md)、[Closure](pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) 与 [Handoff Manifest V0.1](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_GATE7_HANDOFF_MANIFEST_V0.1.md) — `LEGAL-PRIVACY-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；14/14审计PASS，22行哈希一致，lifecycle=`APPROVED_FOR_HANDOFF`，`HANDED_OFF=NO`，Gate 8–10未授权。
- Gate 7 current manifests V0.8: [Privacy EN](pages/legal-privacy/06_handoff/LEGAL-PRIV-EN_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md)、[Privacy BM](pages/legal-privacy/06_handoff/LEGAL-PRIV-MS_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md)、[Cookie EN](pages/legal-privacy/06_handoff/LEGAL-COOKIE-EN_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md)、[Shared Consent](pages/legal-privacy/06_handoff/SHARED-CONSENT_CURRENT_GATE7_BASELINE_MANIFEST_V0.8.md)。
- [Gate 8 User Authorization — Pending Handoff V0.1](pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE8_USER_AUTHORIZATION_PENDING_HANDOFF_V0.1.md) 与四份V0.9 Authorization Manifest — 历史pre-handoff记录；已由下述V0.2/V1.0当前指针取代，不回写。
- [Gate 8 Authorization and Handoff Record V0.2](pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE8_AUTHORIZATION_AND_HANDOFF_RECORD_V0.2.md) — `LEGAL-PRIVACY-G8-HANDOFF-01`；用户确认移交，批准authority set已发送至`01My首页开发` task/thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`。lifecycle=`HANDED_OFF`，Gate 8=`AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`；Gate 9–10未授权。
- Gate 8 handoff manifests V1.0为历史阶段指针，已由下述Gate 9 V1.1当前指针替代：[Privacy EN](pages/legal-privacy/05_review/LEGAL-PRIV-EN_CURRENT_GATE8_HANDOFF_MANIFEST_V1.0.md)、[Privacy BM](pages/legal-privacy/05_review/LEGAL-PRIV-MS_CURRENT_GATE8_HANDOFF_MANIFEST_V1.0.md)、[Cookie EN](pages/legal-privacy/05_review/LEGAL-COOKIE-EN_CURRENT_GATE8_HANDOFF_MANIFEST_V1.0.md)、[Shared Consent](pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE8_HANDOFF_MANIFEST_V1.0.md)。
- [Gate 9 Read-Only QA Closure V0.1](pages/legal-privacy/05_review/LEGAL_PRIVACY_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — `LEGAL-PRIVACY-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；三页lifecycle=`READ_ONLY_QA_APPROVED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；0项P0/P1/P2实现问题，Gate 10未授权。
- Gate 9 page evidence: [Privacy EN](pages/legal-privacy/05_review/LEGAL-PRIV-EN_GATE9_READ_ONLY_QA_EVIDENCE_V0.1.md)、[Privacy BM](pages/legal-privacy/05_review/LEGAL-PRIV-MS_GATE9_READ_ONLY_QA_EVIDENCE_V0.1.md)、[Cookie EN](pages/legal-privacy/05_review/LEGAL-COOKIE-EN_GATE9_READ_ONLY_QA_EVIDENCE_V0.1.md)；分别记录正文同源、路由/语言/SEO、响应式、视觉哈希与发布边界。
- [Shared Consent Gate 9 Evidence V0.1](pages/legal-privacy/05_review/SHARED-CONSENT_GATE9_READ_ONLY_QA_EVIDENCE_V0.1.md) — 当前`no_optional_analytics`状态、Cookie Settings键盘/焦点、四项denied默认和无Google流量证据；未来Google-active状态须单独批准并重验。
- Gate 9 current manifests: Privacy页面当前为V1.3 [Privacy EN](pages/legal-privacy/05_review/LEGAL-PRIV-EN_CURRENT_GATE9_BASELINE_MANIFEST_V1.3.md)、[Privacy BM](pages/legal-privacy/05_review/LEGAL-PRIV-MS_CURRENT_GATE9_BASELINE_MANIFEST_V1.3.md)；[Cookie EN V1.1](pages/legal-privacy/05_review/LEGAL-COOKIE-EN_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md)与[Shared Consent V1.1](pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md)不变。Privacy V0.2 runtime parity已关闭；BM人工审校、最终法律复核、生产Web3Forms与主机/供应商/存储/网络清单、保留期操作、生产WordPress读回和邮箱收件确认继续作为release controls；Gate 10、部署、发布、DNS和索引未授权。
- [CONV-DOC Post-Gate 9 Current Authority Manifest V1.3](pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md)、[Targeted Read-Only QA Evidence V0.1](pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_TARGETED_READ_ONLY_QA_EVIDENCE_V0.1.md)与[Closure V0.1](pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_TARGETED_READ_ONLY_QA_CLOSURE_V0.1.md) — `LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；D16 commit `f3409f1...`正文同源、八字段、禁用字段、泄露边界、构建与三断点浏览器验证均通过，runtime parity=`VERIFIED / CLOSED`。
- [Post-Gate 9 V1.2 Manifest](pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.2.md)、[Targeted Parity Decision V0.1](pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_TARGETED_PARITY_DECISION_V0.1.md)、[Change Record V0.1](pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CHANGE_RECORD_V0.1.md)、[Machine-readable Source Payload V0.1](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_SOURCE_PAYLOAD_V0.1.json)与[D16 Handoff Record V0.1](pages/legal-privacy/06_handoff/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_D16_HANDOFF_RECORD_V0.1.md) — V1.2及移交状态为历史过渡证据；内容源与机器载荷继续被V1.3引用。
- [Global Footer Legal Utility Addendum V1.0](docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md) — `PROJECT_CONTROL_REVIEW_PASS / USER_APPROVED / CLOSED`；Footer保留年份，底部固定 `© 2026 TiO2 Malaysia.`、Privacy EN、Privacy BM、Cookie Policy和Cookie Settings，无Terms。
- [CONV-RFQ Legal / Privacy Dependency Override V1.0](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_LEGAL_PRIVACY_DEPENDENCY_OVERRIDE_V1.0.md) — RFQ只消费 `/privacy-policy/`、Cookie Policy和Cookie Settings；移除Terms及 `/legal/privacy-policy/` 旧依赖，不修改D16代码。
- [Website Legal & Privacy Framework Adoption V1.0](docs/architecture/WEBSITE_LEGAL_PRIVACY_FRAMEWORK_ADOPTION_V1.0.md) — `APPROVED_PROJECT_IMPLEMENTATION_REQUIREMENT / ACTIVE`；全站法律、隐私、表单、Cookie、Consent 与 Gate 9 验证基线。

## 1.2 Gate 前网站策划流程复盘与迭代

- [Gate 前网站策划首次实践复盘 V0.1](docs/architecture/TIO2_MALAYSIA_PRE_GATE_PLANNING_RETROSPECTIVE_V0.1.md) — `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；复盘从建站目标到页面进入 Gate 之前的定位、资料、研究、架构、共享基础和建设路线，识别本次实践中后补的上游输入。
- [Gate 前网站策划流程 V0.1 草案](docs/architecture/TIO2_MALAYSIA_PRE_GATE_PLANNING_PROCESS_V0.1_DRAFT.md) — `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`；提出 PF0–PF8：项目输入、证据盘点、五轨研究、定位、架构假设、研究—架构收敛、共享基础、交付路线和 Page Launch Readiness。本草案只为页面 Gate 提供输入，不改变 Gate 0–10。
- 早先形成的 Gate 执行复盘与 V1.1 草案已按用户澄清标记为 `OUT_OF_CURRENT_REVIEW_SCOPE / PRESERVED_DRAFT`，不属于当前流程复盘，不产生项目 authority。

## 2. 项目定位与需求

| 资料 | 路径 | 当前用途 |
|---|---|---|
| 网站定位资料 | [TiO2_Malaysia_Website_Positioning_2026-08-29.md](docs/strategy/TiO2_Malaysia_Website_Positioning_2026-08-29.md) | 当前网站定位与战略背景 |
| 关键词研究任务 Brief | [TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md](research/keyword/00_brief/TiO2_Malaysia_Keyword_Research_Agent_Brief_V1.0.md) | 已完成研究的历史任务输入，不是全项目总规则 |
| PRD V0.1 | [TiO2_Malaysia_Website_PRD_V0.1.md](90_archive/prd/TiO2_Malaysia_Website_PRD_V0.1.md) | 历史版本 |
| PRD V0.2 | [TiO2_Malaysia_Website_PRD_V0.2.md](90_archive/prd/TiO2_Malaysia_Website_PRD_V0.2.md) | 历史版本 |
| PRD V0.3 | [TiO2_Malaysia_Website_PRD_V0.3.md](90_archive/prd/TiO2_Malaysia_Website_PRD_V0.3.md) | 历史版本 |
| PRD V0.4 | [TiO2_Malaysia_Website_PRD_V0.4.md](docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md) | 当前实施基线 |

历史版本用于追溯，不能覆盖最新已批准版本；它们保存在归档区，不删除。

## 3. 关键词研究

目录：[research/keyword](research/keyword/)

| 资料 | 职责 |
|---|---|
| `AGENTS.md` | 关键词研究专项规则；服从根项目章程 |
| `01_keyword_master.csv` | 关键词总表 |
| `02_keyword_clusters.csv` | 关键词聚类 |
| `03_keyword_architecture_map.csv` | 研究阶段页面架构映射 |
| `04_new_page_candidates.csv` | 新页面候选 |
| `05_cannibalization_review.csv` | 关键词内耗检查 |
| `06_market_opportunity.csv` | 市场机会分析 |
| `07_serp_evidence.csv` | SERP 证据 |
| `08_research_summary.md` | 研究总结 |
| `09_qa_report.md` | 研究质量报告 |
| `10_keyword_research_sop.md` | 关键词研究 SOP |
| `11_page_keyword_master.csv` | 结合最新 PRD 的页面级实施主表 |
| `raw/` | 原始证据和来源记录，不覆盖 |
| `processed/` | 可复核的处理结果 |

`03_keyword_architecture_map.csv` 是研究输出，`11_page_keyword_master.csv` 是当前实施映射。发生页面归属冲突时仍需结合最新已批准 PRD 核对。

## 4. 首页

目录：[pages/home](pages/home/)

| 子目录 | 职责 |
|---|---|
| `01_original_homepages/` | 同行、区域网站和 mytio2 的原始页面记录 |
| `02_analysis/` | 模块、顺序、转化、信任和边界分析 |
| `03_results/` | 首页研究成果、候选模块和输入要求 |
| `04_planning/` | 内容架构、线框、视觉方向、完整视觉稿与自检 |
| `05_review/` | HOME-001 Gate 5 批准基线清单与 Gate 6 总控审查入口 |
| `06_handoff/` | HOME-001 Gate 7 开发交付规格、唯一 Manifest、验收与总控复审入口；不含实现代码 |
| `07_qa/` | HOME-001 Gate 9 只读 QA 证据、当前实现 Manifest 与关闭记录 |

HOME-001 当前 Gate 5 批准视觉基线如下：

- Desktop Buyer Clean：`04_planning/visual-designs/homepage-full-visual-pc-clean-v0.7.png`。
- 390px Mobile Buyer Clean：`04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.1.png`。
- Mobile Menu Open：`04_planning/visual-designs/homepage-mobile-menu-open-v0.6.png`。
- Shared Desktop/Mobile Global Chrome：`04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` 与 `04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.2.png`。
- 批准日期、尺寸、SHA-256、历史基线与 Gate 6 候选分层：[HOME-001 Gate 5 Approved Baseline Manifest V0.2](pages/home/05_review/HOME-001_GATE5_APPROVED_BASELINE_MANIFEST_V0.2.md)。
- Gate 6 当前审查入口：[HOME-001 Gate 6 Project Control Review Submission V0.2](pages/home/05_review/HOME-001_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md)。
- Home 页面作业规范：[HOME_PLAYBOOK_V0.1.md](docs/page-playbooks/HOME_PLAYBOOK_V0.1.md)。
- Home 页面任务卡：[HOME-001_HOME_BRIEF_V0.1.md](docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md)。
- Home SEO/GEO/Schema 合同：[HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md](pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md)，Review ID `HOME-G6-SEO-GEO-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`。
- Gate 6 视觉与响应式复验记录：[13_homepage_gate6_directed_revision_visual_v0.1.md](pages/home/04_planning/13_homepage_gate6_directed_revision_visual_v0.1.md)，状态 `PROJECT_CONTROL_REVIEW_PASS`；不等于 Gate 7 或已实施。
- Gate 7 主交付规格：[HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md](pages/home/06_handoff/HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md)。
- Gate 7 当前 Manifest：[HOME-001_GATE7_MANIFEST_V0.2.md](pages/home/06_handoff/HOME-001_GATE7_MANIFEST_V0.2.md)。
- Gate 7 验收与未决门禁：[HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md](pages/home/06_handoff/HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md)。
- Gate 7 总控复审入口：[HOME-001_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md](pages/home/06_handoff/HOME-001_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)。
- Gate 7 P0 定向修订：[HOME-001_GATE7_P0_INPUT_AMENDMENT_V0.1.md](pages/home/06_handoff/HOME-001_GATE7_P0_INPUT_AMENDMENT_V0.1.md)。
- Gate 7 P0 Acceptance V0.2：[HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md](pages/home/06_handoff/HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md)。
- Gate 7 P0 当前 Manifest：[HOME-001_GATE7_MANIFEST_V0.2.md](pages/home/06_handoff/HOME-001_GATE7_MANIFEST_V0.2.md)。
- Gate 7 P0 总控复审入口：[HOME-001_GATE7_P0_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md](pages/home/06_handoff/HOME-001_GATE7_P0_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)。
- Tablet P0 证据说明：[14_homepage_gate7_p0_tablet_evidence_v0.2.md](pages/home/04_planning/14_homepage_gate7_p0_tablet_evidence_v0.2.md)。
- Global Chrome current-state 状态板文字 V0.4：[15_global_header_footer_current_state_component_states_v0.4.md](pages/home/04_planning/15_global_header_footer_current_state_component_states_v0.4.md)。
- Global Chrome current-state 状态板文字 V0.5：[16_global_header_footer_current_state_component_states_v0.5.md](pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md)。
- Gate 9 当前实现 Manifest：[HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md](pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md)。
- Gate 9 定向复验证据：[HOME-001_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.2.md](pages/home/07_qa/HOME-001_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.2.md)。
- Gate 9 关闭记录：[HOME-001_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md](pages/home/07_qa/HOME-001_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — `HOME-001-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。

Gate 5–7 已关闭；外部实现 commit `616193f3dbf059f0e081c8d59119c008ba2b848b` 已通过 HOME-001 Gate 9 只读复验。`HOME-001-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`，lifecycle=`READ_ONLY_QA_APPROVED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。Tablet `Start Here` 仍为 `USER_DECISION_REQUIRED / IMPLEMENTATION_UNCHANGED`；下游 404/500、RFQ receiver 与子页 readiness 仍为外部发布依赖。Gate 10、部署、发布、DNS 与索引未授权。历史版本继续保留在原目录与 [首页历史策划](90_archive/pages/home/planning/) 中。

## 5. 产品页

目录：[docs/product-pages](docs/product-pages/)

| 资料 | 职责 |
|---|---|
| [00_README.md](docs/product-pages/00_README.md) | 产品页资料入口 |
| [01_Product_Page_Template_and_Content_Spec_V1.0.md](docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md) | 14 个型号页统一内容与页面模板 |
| [02_M350_Complete_Template_Example_V1.0.md](docs/product-pages/02_M350_Complete_Template_Example_V1.0.md) | M-350 完整示例 |
| [03_Product_Page_Development_SOP_and_QA_V1.0.md](docs/product-pages/03_Product_Page_Development_SOP_and_QA_V1.0.md) | 已批准的早期开发/QA基线；V2.0批准后保留为历史版本 |
| [03_Product_Detail_Template_Reuse_Development_SOP_V2.0.md](docs/product-pages/03_Product_Detail_Template_Reuse_Development_SOP_V2.0.md) | 基于 M-350/M-510 实际流程的双通道开发 SOP；`APPROVED_PROJECT_STANDARD / ACTIVE` |
| [04_Product_Detail_Single_Grade_Operational_Checklist_V1.0.md](docs/product-pages/04_Product_Detail_Single_Grade_Operational_Checklist_V1.0.md) | SOP V2.0 配套单型号执行清单；`APPROVED_ACTIVE_COMPANION` |
| [SOP V2.0 Project-Control Review V0.1](docs/product-pages/10_Product_Detail_Development_SOP_V2_Project_Control_Review_V0.1.md) | 历史批准前复审记录；已由用户批准关闭记录完成最终激活 |
| [SOP V2.0 Candidate Manifest V0.1](docs/product-pages/11_Product_Detail_Development_SOP_V2_Manifest_V0.1.md) | 历史候选 Manifest；由 Active Manifest V0.2 替代为当前指针 |
| [SOP V2.0 User Approval Closure V0.1](docs/product-pages/12_Product_Detail_Development_SOP_V2_User_Approval_Closure_V0.1.md) | `PRODUCT-DETAIL-SOP-V2-USER-APPROVAL-01=USER_APPROVED / CLOSED`；仅激活工作流，不授权任何具体 Grade 的 Gate 8/10 |
| [SOP V2.0 Active Manifest V0.2](docs/product-pages/13_Product_Detail_Development_SOP_V2_Active_Manifest_V0.2.md) | 当前权威指针；固定获批 SOP、清单、批准关闭记录与 Playbook addendum 哈希 |
| [Product Playbook Current SOP Addendum V0.1](docs/page-playbooks/PRODUCT_PLAYBOOK_CURRENT_SOP_ADDENDUM_V0.1.md) | 不改写 Product Playbook V0.1；将 Grade Product Detail 当前 SOP 权威切换到 V2.0 |
| [12-Grade Strict Serial Execution Decision V0.1](docs/product-pages/14_Product_Detail_Strict_Serial_Execution_Decision_V0.1.md) | `PRODUCT-DETAIL-12-GRADE-SERIAL-01=USER_APPROVED / ACTIVE`；“03产品页统一模板”一次只做一个 Grade，Gate 9 完成后才启动下一个；禁止批量与并行 |
| [SOP V2.0 Strict Serial Manifest V0.3](docs/product-pages/15_Product_Detail_Development_SOP_V2_Serial_Manifest_V0.3.md) | 当前权威指针；在 Active Manifest V0.2 上加入用户批准的严格串行覆盖 |
| [12-Grade Autonomous Serial Order and Authorization V0.1](docs/product-pages/16_Product_Detail_12_Grade_Autonomous_Serial_Order_and_Authorization_V0.1.md) | `PRODUCT-DETAIL-12-GRADE-AUTO-SERIAL-01=USER_AUTHORIZED / ACTIVE`；Controller 02 决定固定顺序并逐型号推进至 Gate 9，无需重复询问；Gate 10 不含在内 |
| [SOP V2.0 Autonomous Serial Manifest V0.4](docs/product-pages/17_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.4.md) | 历史串行指针；记录 M-896 激活时点，已由 V0.5 替代 |
| [SOP V2.0 Autonomous Serial Manifest V0.5](docs/product-pages/18_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.5.md) | 历史串行指针；M-896 Gate 9 已关闭，active Grade=`M-895` |
| [M-896 Gate 6–7 Project-Control Return V0.1](pages/products/detail-template/05_review/GRADE-M896_GATE6_GATE7_PROJECT_CONTROL_RETURN_V0.1.md) | `GRADE-M896-G7-PCR-01=TARGETED_RETURN / NOT_APPROVED`；四项机器合同/运行时兼容 P1，Gate 8未授权，M-895未启动 |
| [M-896 Gate 6–7 Project-Control Closure V0.1](pages/products/detail-template/05_review/GRADE-M896_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) | `GRADE-M896-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；V0.2关闭四项P1，Gate 8单型号授权就绪 |
| [M-896 Gate 8 Authorization and Handoff Record V0.1](pages/products/detail-template/05_review/GRADE-M896_GATE8_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md) | `GRADE-M896-G8-HANDOFF-01=USER_AUTHORIZED / HANDED_OFF`；已移交“01My首页开发”，M-895保持锁定 |
| [M-896 Current Gate 8 Handoff Manifest V0.3](pages/products/detail-template/05_review/GRADE-M896_CURRENT_GATE8_HANDOFF_MANIFEST_V0.3.md) | 历史 Gate 8 阶段指针；已由 Current Gate 9 Baseline Manifest V0.4 替代 |
| [M-896 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M896_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-M896-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`WITH_RELEASE_BLOCKERS` |
| [M-896 Current Gate 9 Baseline Manifest V0.4](pages/products/detail-template/05_review/GRADE-M896_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md) | M-896 页面当前 Gate 9 基线；其中串行推进说明为当时历史状态 |
| [M-895 Gate 7 Candidate Manifest V0.1](pages/products/detail-template/06_handoff/GRADE-M895_GATE7_MANIFEST_V0.1.md) | 26/26 哈希匹配；当前 V1 2026 TDS；M-895-only Gate 0–7 候选 authority |
| [M-895 Gate 6–7 Project-Control Closure V0.1](pages/products/detail-template/05_review/GRADE-M895_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) | `GRADE-M895-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 3–5 由模板复用满足 |
| [M-895 Gate 8 Authorization and Handoff Record V0.1](pages/products/detail-template/05_review/GRADE-M895_GATE8_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md) | `GRADE-M895-G8-HANDOFF-01=CONTROLLER_AUTHORIZED / HANDED_OFF`；已移交“01My首页开发” |
| [M-895 Current Gate 8 Handoff Manifest V0.2](pages/products/detail-template/05_review/GRADE-M895_CURRENT_GATE8_HANDOFF_MANIFEST_V0.2.md) | 历史 Gate 8 阶段指针；已由 Current Gate 9 Baseline Manifest V0.3 替代 |
| [M-895 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M895_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-M895-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；M-895=`PREVIEW_ONLY`；release blockers 保留 |
| [M-895 Current Gate 9 Baseline Manifest V0.3](pages/products/detail-template/05_review/GRADE-M895_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) | 当前 M-895 阶段指针；Gate 9 已关闭，允许串行推进到 M-340 |
| [SOP V2.0 Autonomous Serial Manifest V0.6](docs/product-pages/19_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.6.md) | 历史串行指针；M-896/M-895 已完成，active Grade=`M-340` |
| [SOP V2.0 Autonomous Serial Manifest V0.7](docs/product-pages/20_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.7.md) | 历史串行指针；M-340 Gate 9 已关闭，active Grade=`M-886` |
| [M-340 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M340_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-M340-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；M-340=`PREVIEW_ONLY`；有意义 Schema 值不输出 `--` |
| [M-340 Current Gate 9 Baseline Manifest V0.3](pages/products/detail-template/05_review/GRADE-M340_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) | M-340 当前阶段指针；Gate 9 已关闭 |
| [M-886 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M886_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-M886-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；M-886=`PREVIEW_ONLY`；公开关系与证据边界一致 |
| [M-886 Current Gate 9 Baseline Manifest V0.3](pages/products/detail-template/05_review/GRADE-M886_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) | M-886 当前阶段指针；Gate 9 已关闭 |
| [SOP V2.0 Autonomous Serial Manifest V0.8](docs/product-pages/21_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.8.md) | 历史串行指针；前四个 Grade 已完成，active Grade=`M-52` |
| [M-52 Gate 7 Candidate Manifest V0.1](pages/products/detail-template/06_handoff/GRADE-M52_GATE7_MANIFEST_V0.1.md) | 27/27 哈希匹配；V3 2023 TDS；3 apps、2/8 evaluation、11 technical rows |
| [M-52 Gate 6–7 Project-Control Closure V0.1](pages/products/detail-template/05_review/GRADE-M52_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) | `GRADE-M52-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 3–5 由模板复用满足 |
| [M-52 Gate 8 Authorization and Handoff Record V0.1](pages/products/detail-template/05_review/GRADE-M52_GATE8_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md) | `GRADE-M52-G8-HANDOFF-01=CONTROLLER_AUTHORIZED / HANDED_OFF`；M-108 保持锁定 |
| [M-52 Current Gate 8 Handoff Manifest V0.2](pages/products/detail-template/05_review/GRADE-M52_CURRENT_GATE8_HANDOFF_MANIFEST_V0.2.md) | 历史 Gate 8 阶段指针；已由 Current Gate 9 Baseline Manifest V0.3 替代 |
| [M-52 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M52_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-M52-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；M-52=`PREVIEW_ONLY`；16 files / 84 tests 与 production build PASS |
| [M-52 Current Gate 9 Baseline Manifest V0.3](pages/products/detail-template/05_review/GRADE-M52_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) | M-52 当前阶段指针；Gate 9 已关闭，允许串行推进到 M-108 |
| [SOP V2.0 Autonomous Serial Manifest V0.9](docs/product-pages/22_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.9.md) | 历史串行指针；前五个 Grade 已完成，active Grade=`M-108` |
| [M-108 Gate 7 Candidate Manifest V0.1](pages/products/detail-template/06_handoff/GRADE-M108_GATE7_MANIFEST_V0.1.md) | 24/24 hashes match；单一 TDS；3 apps、2/8 evaluation、10 technical rows；filename-only version public count 0 |
| [M-108 Gate 6–7 Project-Control Closure V0.1](pages/products/detail-template/05_review/GRADE-M108_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) | `GRADE-M108-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 3–5 由模板复用满足 |
| [M-108 Gate 8 Authorization and Handoff Record V0.1](pages/products/detail-template/05_review/GRADE-M108_GATE8_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md) | `GRADE-M108-G8-HANDOFF-01=CONTROLLER_AUTHORIZED / HANDED_OFF`；M-210 保持锁定 |
| [M-108 Current Gate 8 Handoff Manifest V0.2](pages/products/detail-template/05_review/GRADE-M108_CURRENT_GATE8_HANDOFF_MANIFEST_V0.2.md) | 历史 Gate 8 阶段指针；已由 Current Gate 9 Baseline Manifest V0.3 替代 |
| [M-108 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M108_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-M108-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；M-108=`PREVIEW_ONLY`；17 files / 92 tests 与 production build PASS |
| [M-108 Current Gate 9 Baseline Manifest V0.3](pages/products/detail-template/05_review/GRADE-M108_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) | M-108 当前阶段指针；Gate 9 已关闭，允许串行推进到 M-210 |
| [SOP V2.0 Autonomous Serial Manifest V0.10](docs/product-pages/23_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.10.md) | 历史串行指针；前六个 Grade 已完成，active Grade=`M-210` |
| [SOP V2.0 Autonomous Serial Manifest V0.16](docs/product-pages/29_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.16.md) | 当前串行权威指针；12/12 Grade Gate 9 已完成，active Grade=`NONE`，严格串行关闭 |
| [12-Grade Strict-Serial Completion Summary V0.1](docs/product-pages/30_Product_Detail_12_Grade_Serial_Completion_Summary_V0.1.md) | 串行执行总表；连同既有 M-350/M-510，全部 14 个 Grade 详情页已完成 Gate 9，只保留 release blockers |
| [CR-901 Gate 7 Manifest V0.1](pages/products/detail-template/06_handoff/GRADE-CR901_GATE7_MANIFEST_V0.1.md) | 25/25 锚点匹配；独立 CR-901 V1 2026 TDS；4 个特种方向、2/8 Evaluation、2 列/9 行 Technical |
| [CR-901 Gate 6–7 Project-Control Closure V0.1](pages/products/detail-template/05_review/GRADE-CR901_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) | `GRADE-CR901-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 3–5 由模板复用满足 |
| [CR-901 Gate 8 Authorization and Handoff V0.1](pages/products/detail-template/05_review/GRADE-CR901_GATE8_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md) | `GRADE-CR901-G8-HANDOFF-01=CONTROLLER_AUTHORIZED / HANDED_OFF`；最终单型号移交 |
| [CR-901 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-CR901_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-CR901-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；commit `2a2d9380...`；route=`PREVIEW_ONLY` |
| [CR-901 Current Gate 9 Baseline Manifest V0.3](pages/products/detail-template/05_review/GRADE-CR901_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) | CR-901 当前阶段指针；Gate 9 已关闭；12 Grade 严格串行完成 |
| [06_Product_Page_Relationship_Gate_Addendum_V0.3.md](docs/product-pages/06_Product_Page_Relationship_Gate_Addendum_V0.3.md) | PRODUCT V0.3 关系与门禁覆盖规则 |
| [09_M350_Final_Targeted_Revision_V0.5.md](docs/product-pages/09_M350_Final_Targeted_Revision_V0.5.md) | Gate 5 已批准 M-350 V0.5 定点修订基线 |
| [Gate 5 Approved Baseline Manifest](pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE5-APPROVED-BASELINE-MANIFEST_V0.1.md) | `PRODUCT-DETAIL-G5-BASELINE-01 = APPROVED / CLOSED` |
| [Gate 6 Authority Manifest](pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE6-AUTHORITY-AND-PRECEDENCE-MANIFEST_V0.1.md) | 当前输入、哈希和覆盖优先级 |
| [Gate 6 Template Contract Review](pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE6-TEMPLATE-CONTRACT-REVIEW_V0.1.md) | 14 页字段、SEO/GEO/Schema、CMS/API、scope、route、响应式与无障碍审查 |
| [Gate 6 Project-Control Submission](pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE6-PROJECT-CONTROL-REVIEW-SUBMISSION_V0.1.md) | Gate 6 提交与已关闭状态记录 |
| [Gate 6 Project-Control Closure](pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE6-PROJECT-CONTROL-CLOSURE_V0.1.md) | `PRODUCT-DETAIL-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| [Gate 7 Handoff Package](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-PACKAGE_V0.1.md) | WordPress、Next.js/API、14型号、SEO/GEO/Schema、Global Chrome、route/form 和验收总包 |
| [Gate 7 Handoff Manifest V0.1](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-MANIFEST_V0.1.md) | PCR-01 历史 Manifest；已由 V0.2 替代 |
| [Gate 7 Project-Control Submission V0.1](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-PROJECT-CONTROL-REVIEW-SUBMISSION_V0.1.md) | PCR-01 原始提交；后续结果为 Conditional Return |
| [Gate 7 PCR-01 Conditional Return](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-PROJECT-CONTROL-RETURN_V0.1.md) | `PRODUCT-DETAIL-G7-PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| [Gate 7 V0.2 Handoff Package](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-PACKAGE_V0.2.md) | 固定RFQ、M-350-only 实现范围、外部页面所有权定向修订 |
| [Gate 7 V0.2 Manifest](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-MANIFEST_V0.2.md) | `PRODUCT-DETAIL-G7-MANIFEST-02` 当前唯一文件哈希 |
| [Gate 7 PCR-02 Fresh Validation](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-PCR02-FRESH-VALIDATION_V0.2.md) | `0 failures / 0 conflicts / 0 trailing whitespace` |
| [Gate 7 PCR-02 Submission](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-PROJECT-CONTROL-REVIEW-SUBMISSION_V0.2.md) | PCR-02提交快照；最终状态以 Closure 为准 |
| [Gate 7 PCR-02 Closure](pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE7-PROJECT-CONTROL-CLOSURE_V0.2.md) | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_FOR_HANDOFF`；当前authority与版本记录 |
| [Product Scope Gate 8 Status Reconciliation](pages/products/05_review/PRODUCT_SCOPE_GATE8_STATUS_RECONCILIATION_V0.1.md) | `PRODUCT-SCOPE-G8-RECON-01 = ADMINISTRATIVE_STATUS_RECONCILED / CLOSED`；补录 PRODUCT-000 与 M-350 的外部 Gate 8 实现事实，不回写历史关闭记录 |
| [PRODUCT-000 Gate 9 Closure](pages/products/05_review/PRODUCT-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `PRODUCT-000-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`WITH_RELEASE_BLOCKERS` |
| [GRADE-M350 Gate 9 Closure](pages/products/detail-template/05_review/GRADE-M350_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-M350-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；M-350=`PREVIEW_ONLY`；其余 13 Grade 保持 404 |
| [13-Grade Evidence and Pilot Readiness V0.1](pages/products/detail-template/02_analysis/PRODUCT-DETAIL-13-GRADE-EVIDENCE-AND-PILOT-READINESS_V0.1.md) | 模板复用工作流的只读证据盘点；M-510 已晋升为获批 pilot，其他 12 Grade 未授权开发 |
| [Multi-Grade WordPress + Next.js Generalization Brief V0.1](pages/products/detail-template/06_handoff/PRODUCT-DETAIL-MULTI-GRADE-WORDPRESS-NEXTJS-GENERALIZATION-BRIEF_V0.1.md) | 历史 pre-authorization brief；其 Gate 8 结论已由 M-510 快速通道决定针对 pilot supersede |
| [Template-Reuse Fast-Track Decision V0.1](pages/products/detail-template/05_review/PRODUCT-DETAIL-TEMPLATE-REUSE-FAST-TRACK-DECISION_V0.1.md) | `PRODUCT-DETAIL-FAST-TRACK-01`；M-510 Gate 3–5 由 M-350 模板复用满足，Gate 8 获用户授权 |
| [M-510 Fast-Track Gate 7 Handoff Package V0.1](pages/products/detail-template/06_handoff/GRADE-M510_FAST_TRACK_GATE7_HANDOFF_PACKAGE_V0.1.md) | 完整开发目标、WordPress/Next.js delta、条件路由、SEO/Schema 与验收矩阵 |
| [M-510 Product Detail Content Contract V0.1](pages/products/detail-template/06_handoff/GRADE-M510_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json) | 完整 machine-readable Grade payload；2 列/12 行技术表；无 Related Grades |
| [M-510 Fast-Track Gate 7 Manifest V0.1](pages/products/detail-template/06_handoff/GRADE-M510_FAST_TRACK_GATE7_MANIFEST_V0.1.md) | `CURRENT / PROJECT_CONTROL_VALIDATED`；固定 M-510 authority 与共享依赖哈希 |
| [M-510 Fast-Track Gate 6/7 Closure V0.1](pages/products/detail-template/05_review/GRADE-M510_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) | `GRADE-M510-FAST-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 8 authorized |
| [M-510 Gate 8 Authorization and Handoff Record V0.1](pages/products/detail-template/05_review/GRADE-M510_GATE8_USER_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md) | 已移交“01My首页开发”thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`；lifecycle=`HANDED_OFF` |
| [M-510 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M510_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) | `GRADE-M510-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；两项 P1 已关闭；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`WITH_RELEASE_BLOCKERS` |
| [M-510 Current Gate 9 Baseline Manifest V0.8](pages/products/detail-template/05_review/GRADE-M510_CURRENT_GATE9_BASELINE_MANIFEST_V0.8.md) | 当前阶段指针；M-510=`PREVIEW_ONLY`；Gate 10、部署、发布与索引未授权 |
| [Product TDS Document-Presence Validity Decision V0.1](pages/products/05_review/PRODUCT_TDS_DOCUMENT_PRESENCE_VALIDITY_DECISION_V0.1.md) | `PRODUCT-TDS-VALIDITY-01=USER_APPROVED / ACTIVE`；专属目录中存在、型号匹配且内容可读的 TDS 即为有效证据 |
| [GRADE-M510 Page Brief V0.4](docs/page-briefs/GRADE-M510_M510_TITANIUM_DIOXIDE_BRIEF_V0.4.md) | 当前 Brief；Gate 2 已关闭，Gate 3 已获用户授权 |
| [GRADE-M510 Gate 1 Closure V0.1](pages/products/detail-template/05_review/GRADE-M510_GATE1_PROJECT_CONTROL_CLOSURE_V0.1.md) | `GRADE-M510-G1-PCR-01=APPROVED / CLOSED_WITH_FIELD_FREEZES`；Gate 2=`USER_AUTHORIZED` |
| [GRADE-M510 Gate 1 TDS Validity Amendment V0.1](pages/products/detail-template/05_review/GRADE-M510_GATE1_TDS_VALIDITY_AMENDMENT_V0.1.md) | `GRADE-M510-G1-TDS-AMD-01=USER_APPROVED / CLOSED`；关闭 `M510-D02` |
| [GRADE-M510 Gate 2 Content Skeleton V0.2](pages/products/detail-template/04_planning/GRADE-M510_GATE2_CONTENT_SKELETON_V0.2.md) | `USER_APPROVED / CONTENT_SKELETON_CONFIRMED`；买家可见标题为 `What to Evaluate in Your Formulation` |
| [GRADE-M510 Gate 2 Skeleton Approval V0.1](pages/products/detail-template/05_review/GRADE-M510_GATE2_CONTENT_SKELETON_APPROVAL_V0.1.md) | `GRADE-M510-G2-SKELETON-APPROVAL-01=USER_APPROVED / CLOSED`；记录标题修订与其余骨架批准 |
| [GRADE-M510 Gate 2 Full Copy V0.1](pages/products/detail-template/04_planning/GRADE-M510_GATE2_FULL_COPY_V0.1.md) | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=USER_APPROVED / CLOSED`；Gate 3 锁定内容输入 |
| [GRADE-M510 Gate 2 Closure and Gate 3 Authorization V0.1](pages/products/detail-template/05_review/GRADE-M510_GATE2_FULL_COPY_APPROVAL_AND_GATE3_AUTHORIZATION_V0.1.md) | `GRADE-M510-G2-COPY-G3-AUTH-01=USER_APPROVED / CLOSED` |
| [GRADE-M510 Gate 3 Responsive Wireframe Spec V0.1](pages/products/detail-template/04_planning/GRADE-M510_GATE3_RESPONSIVE_WIREFRAME_SPEC_V0.1.md) | 历史策划资产；`SUPERSEDED_FOR_IMPLEMENTATION_BY_TEMPLATE_REUSE_FAST_TRACK` |
| [GRADE-M510 Gate 3 Wireframe QA V0.1](pages/products/detail-template/05_review/GRADE-M510_GATE3_WIREFRAME_QA_V0.1.md) | 历史自检记录；保留作内容密度交叉检查，不是 Gate 8 authority |
| [GRADE-M510 Current Gate 3 Baseline Manifest V0.6](pages/products/detail-template/05_review/GRADE-M510_CURRENT_GATE3_BASELINE_MANIFEST_V0.6.md) | 历史阶段指针；由 Current Gate 8 Handoff Manifest V0.7 替代 |
| [GRADE-M510 Current Gate 8 Handoff Manifest V0.7](pages/products/detail-template/05_review/GRADE-M510_CURRENT_GATE8_HANDOFF_MANIFEST_V0.7.md) | 历史 Gate 8 指针；由 Current Gate 9 Baseline Manifest V0.8 替代 |
| [GRADE-M510 Gate 1 Evidence and Claim Audit V0.3](pages/products/detail-template/02_analysis/GRADE-M510_GATE1_EVIDENCE_AND_CLAIM_AUDIT_V0.3.md) | 当前 Gate 1 证据边界；M-510 TDS 有效，12 行技术字段已释放 |
| [GRADE-M510 historical Gate 1–2 Manifest set](pages/products/detail-template/05_review/GRADE-M510_CURRENT_GATE2_BASELINE_MANIFEST_V0.5.md) | 由当前 Gate 3 Manifest V0.6 替代为阶段指针；Gate 2 批准记录继续保留 |

产品页的准确 URL、主关键词、分类与职责仍以 PRD V0.4 和页面—关键词主表为准。M-350、M-510 及严格串行的 12 个 Grade 均已完成独立 Gate 9，lifecycle=`READ_ONLY_QA_APPROVED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。全部 14 个 Grade 均为 `PREVIEW_ONLY`；Active Grade=`NONE`。部署、发布与索引未授权。

Grade Detail 共享 Gate 5 与 Gate 6 已关闭；Gate 7 V0.2 已通过 `PRODUCT-DETAIL-G7-PCR-02` 总控复审，共享 authority 仍是 `PRODUCT-DETAIL-GATE7-HANDOFF-MANIFEST_V0.2.md`，SHA-256 `F35B81A2FD6384B36E94B16DADB8267218AB2E76CB9E5AD1B6FB26AEB75CEF28`。PRODUCT-000 与全部 14 个 Grade 已分别通过 Gate 9；14 个 Grade 均为 `PREVIEW_ONLY`，且未知 identity 继续 fail closed。2 Process、Gate 10、发布与索引均未授权。

PRODUCT V0.3 的关系治理入口：

- [Unified Audit V0.3](pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md)
- [Gate 1 Evidence Audit V0.3](pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md)
- [Relationship Changelog V0.3](pages/products/01_research/PRODUCT_RELATION_V0.3_CHANGELOG.md)
- [Relationship Dependency Audit V0.3](pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md)
- [PRODUCT-000 Global Current-state Authority Notice V0.1](pages/products/05_review/PRODUCT-000_GLOBAL_CURRENT_STATE_AUTHORITY_NOTICE_V0.1.md) — 正式消费 Global Chrome V0.5 path/version/post-closure hash；不改变 PRODUCT Gate 状态。
- [PRODUCT-000 Gate 7 Project-Control Closure V0.1](pages/products/05_review/PRODUCT-000_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) — `PRODUCT-000-G7-PCR-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；生命周期 `HANDED_OFF`；Gate 8=`HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED`；外部任务为“01My首页开发”thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`。
- [PRODUCT-000 Gate 9 Read-Only QA Closure V0.1](pages/products/05_review/PRODUCT-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — `PRODUCT-000-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；生命周期 `READ_ONLY_QA_APPROVED`；发布依赖继续保留。
- [GRADE-M350 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M350_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — `GRADE-M350-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；只覆盖 M-350 与共享模板，不覆盖其余 13 Grade。
- [GRADE-M510 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M510_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — `GRADE-M510-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；两项 P1 已关闭；M-510 保持 `PREVIEW_ONLY`。
- [GRADE-M896 Gate 9 Read-Only QA Closure V0.1](pages/products/detail-template/05_review/GRADE-M896_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — `GRADE-M896-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；M-896 保持 `PREVIEW_ONLY`；严格串行已推进到 M-895。

## 5A. Resources Hub 定向重构

当前总控提交入口：

- [RES-000 V0.3 Content Architecture](pages/resources/04_planning/RES-000_CONTENT_ARCHITECTURE_V0.3.md)
- [RES-000 SEO / GEO / Schema Contract V0.2](pages/resources/04_planning/RES-000_SEO_GEO_SCHEMA_CONTRACT_V0.2.md)
- [RES-000 V0.3 Wireframe](pages/resources/04_planning/wireframes/RES-000_WIREFRAME_SPEC_V0.3.md)
- [RES-000 V0.3 Visual Direction](pages/resources/04_planning/visual-directions/RES-000_VISUAL_DIRECTION_V0.3.md)
- [RES-000 Full Visual V0.5](pages/resources/04_planning/visual-designs/RES-000_FULL_VISUAL_DESIGN_V0.5.md)
- [RES-000 Final Cross-validation V0.2](pages/resources/02_analysis/RES-000_RESEARCH_HUB_FINAL_CROSS_VALIDATION_V0.2.md)
- [RES-000 Gate 5 Approved Baseline Manifest V0.1](pages/resources/05_review/RES-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md)
- [RES-000 Gate 6 Delivery Contract V0.1](pages/resources/05_review/RES-000_GATE6_DELIVERY_CONTRACT_V0.1.md)
- [RES-000 Gate 6 Project-Control Review Submission V0.1](pages/resources/05_review/RES-000_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)
- [RES-000 Gate 7 Handoff Package V0.1](pages/resources/06_handoff/RES-000_GATE7_HANDOFF_PACKAGE_V0.1.md)
- [RES-000 Gate 7 CMS/API/Component Mapping V0.1](pages/resources/06_handoff/RES-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md)
- [RES-000 Gate 7 H0–H5 State Fixtures V0.1](pages/resources/06_handoff/RES-000_GATE7_H0_H5_STATE_FIXTURES_V0.1.md)
- [RES-000 Gate 7 Acceptance and Blockers V0.1](pages/resources/06_handoff/RES-000_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md)
- [RES-000 Gate 7 Manifest V0.1](pages/resources/06_handoff/RES-000_GATE7_MANIFEST_V0.1.md)
- [RES-000 Gate 7 Project-Control Review Submission V0.1](pages/resources/06_handoff/RES-000_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)
- [RES-000 Gate 7 Project-Control Closure V0.1](pages/resources/05_review/RES-000_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md)
- [RES-ORIGIN Brief V0.1](docs/page-briefs/RES-ORIGIN_NON_CHINA_TITANIUM_DIOXIDE_BRIEF_V0.1.md)
- [RES-ORIGIN Gate 1 Audit V0.1](pages/resources/01_research/RES-ORIGIN_GATE1_KEYWORD_CLAIM_EVIDENCE_AUDIT_V0.1.md)
- [RES-ORIGIN Brief V0.2 — current Gate 0/1 draft](docs/page-briefs/RES-ORIGIN_NON_CHINA_TITANIUM_DIOXIDE_BRIEF_V0.2.md)
- [RES-ORIGIN Gate 1 Audit V0.2](pages/resources/01_research/RES-ORIGIN_GATE1_KEYWORD_CLAIM_EVIDENCE_AUDIT_V0.2.md)
- [RES-ORIGIN Gate 0/1 Project-control Submission V0.1](pages/resources/05_review/RES-ORIGIN_GATE0_GATE1_PROJECT_CONTROL_SUBMISSION_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.1](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md)
- [RES-ORIGIN Gate 0/1 Approval Decision V0.1](pages/resources/05_review/RES-ORIGIN_GATE0_GATE1_APPROVAL_DECISION_V0.1.md)
- [RES-ORIGIN Gate 2 Content Architecture V0.1](pages/resources/04_planning/RES-ORIGIN_CONTENT_ARCHITECTURE_V0.1.md)
- [RES-ORIGIN Gate 2 SEO/GEO/Schema Contract V0.1](pages/resources/04_planning/RES-ORIGIN_SEO_GEO_SCHEMA_CONTRACT_V0.1.md)
- [RES-ORIGIN Gate 2 Project-control Submission V0.1](pages/resources/05_review/RES-ORIGIN_GATE2_PROJECT_CONTROL_SUBMISSION_V0.1.md)
- [RES-ORIGIN Gate 2 Project-control Review V0.1](pages/resources/05_review/RES-ORIGIN_GATE2_PROJECT_CONTROL_REVIEW_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.2](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)
- [RES-ORIGIN Gate 2 User Review Return V0.1](pages/resources/05_review/RES-ORIGIN_GATE2_USER_REVIEW_RETURN_V0.1.md)
- [RES-ORIGIN Gate 2 Content Architecture V0.2 — normalized current candidate](pages/resources/04_planning/RES-ORIGIN_CONTENT_ARCHITECTURE_V0.2.md)
- [RES-ORIGIN Gate 2 SEO/GEO/Schema Contract V0.2 — normalized current candidate](pages/resources/04_planning/RES-ORIGIN_SEO_GEO_SCHEMA_CONTRACT_V0.2.md)
- [RES-ORIGIN Gate 2 Definition Normalization Project-control Review V0.1](pages/resources/05_review/RES-ORIGIN_GATE2_DEFINITION_NORMALIZATION_PROJECT_CONTROL_REVIEW_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.3](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md)
- [RES-ORIGIN Gate 2 Approval Decision V0.1](pages/resources/05_review/RES-ORIGIN_GATE2_APPROVAL_DECISION_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.4 — Gate 3 in progress](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md)
- [RES-ORIGIN Malaysia-Origin Authority Impact V0.1](pages/resources/05_review/RES-ORIGIN_MALAYSIA_ORIGIN_AUTHORITY_IMPACT_V0.1.md)
- [RES-ORIGIN Gate 3 Superdesign Context V0.1](pages/resources/04_planning/RES-ORIGIN_GATE3_SUPERDESIGN_CONTEXT_V0.1.md)
- [RES-ORIGIN Gate 3 Responsive Wireframe Specification V0.1](pages/resources/04_planning/wireframes/RES-ORIGIN_GATE3_RESPONSIVE_WIREFRAME_SPEC_V0.1.md)
- [RES-ORIGIN Gate 3 Validation V0.1](pages/resources/04_planning/wireframes/RES-ORIGIN_GATE3_VALIDATION_V0.1.md)
- [RES-ORIGIN Gate 3 Project-control Submission V0.1](pages/resources/05_review/RES-ORIGIN_GATE3_PROJECT_CONTROL_SUBMISSION_V0.1.md)
- [RES-ORIGIN Gate 3 Project-control Review V0.1](pages/resources/05_review/RES-ORIGIN_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.5 — historical Gate 3 review pointer](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md)
- [RES-ORIGIN Gate 3 Approval Decision V0.1](pages/resources/05_review/RES-ORIGIN_GATE3_APPROVAL_DECISION_V0.1.md)
- [RES-ORIGIN Gate 4 Superdesign Context V0.1](pages/resources/04_planning/RES-ORIGIN_GATE4_SUPERDESIGN_CONTEXT_V0.1.md)
- [RES-ORIGIN Gate 4 Visual Direction V0.1](pages/resources/04_planning/visual-directions/RES-ORIGIN_GATE4_VISUAL_DIRECTION_V0.1.md)
- [RES-ORIGIN Gate 4 Validation V0.1](pages/resources/04_planning/visual-directions/RES-ORIGIN_GATE4_VALIDATION_V0.1.md)
- [RES-ORIGIN Gate 4 Project-control Submission V0.1](pages/resources/05_review/RES-ORIGIN_GATE4_PROJECT_CONTROL_SUBMISSION_V0.1.md)
- [RES-ORIGIN Gate 4 Project-control Review V0.1](pages/resources/05_review/RES-ORIGIN_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.6 — historical Gate 4 review pointer](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md)
- [RES-ORIGIN Gate 4 Approval Decision / Gate 5 Authorization V0.1](pages/resources/05_review/RES-ORIGIN_GATE4_APPROVAL_DECISION_V0.1.md)
- [RES-ORIGIN Gate 5 Superdesign Input V0.1](pages/resources/04_planning/RES-ORIGIN_GATE5_SUPERDESIGN_INPUT_V0.1.md)
- [RES-ORIGIN Gate 5 Superdesign Context V0.1](pages/resources/04_planning/RES-ORIGIN_GATE5_SUPERDESIGN_CONTEXT_V0.1.md)
- [RES-ORIGIN Gate 5 Full Visual Specification V0.1](pages/resources/04_planning/visual-designs/RES-ORIGIN_GATE5_FULL_VISUAL_SPEC_V0.1.md)
- [RES-ORIGIN Gate 5 Validation V0.1](pages/resources/04_planning/visual-designs/RES-ORIGIN_GATE5_VALIDATION_V0.1.md)
- [RES-ORIGIN Gate 5 Project-control Submission V0.1](pages/resources/05_review/RES-ORIGIN_GATE5_PROJECT_CONTROL_SUBMISSION_V0.1.md)
- [RES-ORIGIN Gate 5 Project-control Review V0.1](pages/resources/05_review/RES-ORIGIN_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.7 — historical Gate 5 review pointer](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md)
- [RES-ORIGIN Gate 5 Approval Decision / Gate 6 Authorization V0.1](pages/resources/05_review/RES-ORIGIN_GATE5_APPROVAL_DECISION_V0.1.md)
- [RES-ORIGIN Current Brief V0.3 — Gate 6 normalized handoff-readiness contract](docs/page-briefs/RES-ORIGIN_NON_CHINA_TITANIUM_DIOXIDE_BRIEF_V0.3.md)
- [RES-ORIGIN Gate 6 Project-control Review V0.1](pages/resources/05_review/RES-ORIGIN_GATE6_PROJECT_CONTROL_REVIEW_V0.1.md)
- [RES-ORIGIN Gate 6 Validation V0.1](pages/resources/05_review/RES-ORIGIN_GATE6_VALIDATION_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.8 — historical Gate 6 closure pointer](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.8.md)
- [RES-ORIGIN Gate 6 Approval / Gate 7 Authorization Decision V0.1](pages/resources/05_review/RES-ORIGIN_GATE6_APPROVAL_GATE7_AUTHORIZATION_DECISION_V0.1.md)
- [RES-ORIGIN Gate 7 Development Handoff Package V0.1](pages/resources/06_handoff/RES-ORIGIN_GATE7_HANDOFF_PACKAGE_V0.1.md)
- [RES-ORIGIN Gate 7 CMS/API/Component Mapping V0.1](pages/resources/06_handoff/RES-ORIGIN_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md)
- [RES-ORIGIN Gate 7 Implementation-neutral Plan V0.1](pages/resources/06_handoff/RES-ORIGIN_GATE7_IMPLEMENTATION_NEUTRAL_PLAN_V0.1.md)
- [RES-ORIGIN Gate 7 Acceptance and Blockers V0.1](pages/resources/06_handoff/RES-ORIGIN_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md)
- [RES-ORIGIN Gate 7 Manifest V0.1](pages/resources/06_handoff/RES-ORIGIN_GATE7_MANIFEST_V0.1.md)
- [RES-ORIGIN Gate 7 Fresh Validation V0.1](pages/resources/06_handoff/RES-ORIGIN_GATE7_FRESH_VALIDATION_V0.1.md)
- [RES-ORIGIN Gate 7 Project-control Review Submission V0.1](pages/resources/06_handoff/RES-ORIGIN_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)
- [RES-ORIGIN Gate 7 Project-control Closure V0.1](pages/resources/05_review/RES-ORIGIN_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.9 — historical Gate 7 closure pointer](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md)
- [RES-ORIGIN Gate 7 Approval / Gate 8 Authorization Decision V0.1](pages/resources/05_review/RES-ORIGIN_GATE7_APPROVAL_GATE8_AUTHORIZATION_DECISION_V0.1.md)
- [RES-ORIGIN Gate 8 External Task Dispatch V0.1](pages/resources/05_review/RES-ORIGIN_GATE8_EXTERNAL_TASK_DISPATCH_V0.1.md)
- [RES-ORIGIN Current Gate Baseline Manifest V0.10 — historical Gate 8 queued-dispatch pointer](pages/resources/05_review/RES-ORIGIN_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md)
- [RES-ORIGIN Gate 9 Read-Only QA Return V0.1 — historical P0 return](pages/resources/07_qa/RES-ORIGIN_GATE9_READ_ONLY_QA_RETURN_V0.1.md) — SHA-256=`6971B18535E54234B760E920F31F9FFD376584548795C2193FCAE9C68C254BBE`。
- [RES-ORIGIN Gate 9 Read-Only QA Closure V0.1](pages/resources/07_qa/RES-ORIGIN_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — SHA-256=`D818E1979690EEA919AD85754C1E18EC15AD8D1204EA67A79F371F09625ACE95`。
- [RES-ORIGIN Current Gate 9 Baseline Manifest V0.11 — current implementation pointer](pages/resources/07_qa/RES-ORIGIN_CURRENT_GATE9_BASELINE_MANIFEST_V0.11.md) — SHA-256=`268E5092A545E182AB404CB1E65117E59875A737BED37C328F4BE44B1BA2C713`。
- [Resources Shared Template / Independent Content Decision V0.1](pages/resources/05_review/RESOURCE_SHARED_TEMPLATE_NOT_SHARED_CONTENT_DECISION_V0.1.md) — SHA-256=`7B3873FAECB03EBC47BDD0E5C6C99EF44D93437824E8198FC389F9F934913EEC`；`RESOURCE-TEMPLATE-CONTENT-SEPARATION-01=USER_APPROVED / CLOSED`；共享实现模板，不共享页面内容或固定模块顺序。
- [RES-PROC Brief V0.1](docs/page-briefs/RES-PROC_CHLORIDE_VS_SULFATE_BRIEF_V0.1.md)、[Gate 1 Audit V0.1](pages/resources/01_research/RES-PROC_GATE1_KEYWORD_CLAIM_EVIDENCE_AUDIT_V0.1.md)、[Gate 0/1 Submission V0.1](pages/resources/05_review/RES-PROC_GATE0_GATE1_PROJECT_CONTROL_SUBMISSION_V0.1.md) 与 [Gate 1 Manifest V0.1](pages/resources/05_review/RES-PROC_CURRENT_GATE1_REVIEW_MANIFEST_V0.1.md) — `HISTORICAL / SUPERSEDED`；保留用户定向修正前的提审基线。
- [RES-PROC Brief V0.2](docs/page-briefs/RES-PROC_CHLORIDE_VS_SULFATE_BRIEF_V0.2.md) — SHA-256=`018A2B7180EC39D86FE44C098576B8261F0181E9F0E836FD9A362048B5DE091F`；当前 Gate 0/1 内容 authority，保留 route 影响并限制 label-only 牌号级结论。
- [RES-PROC Gate 1 Audit V0.2](pages/resources/01_research/RES-PROC_GATE1_KEYWORD_CLAIM_EVIDENCE_AUDIT_V0.2.md) — SHA-256=`3D4E97AF5FA769643D51C2D6B5E2A753B912C2463CB189B8D720DC697898E4B9`；`USER_APPROVED_WITH_TARGETED_CORRECTION / CLOSED`。
- [RES-PROC Gate 0/1 Submission V0.2](pages/resources/05_review/RES-PROC_GATE0_GATE1_PROJECT_CONTROL_SUBMISSION_V0.2.md) 与 [User Review Closure V0.1](pages/resources/05_review/RES-PROC_GATE0_GATE1_USER_REVIEW_CLOSURE_V0.1.md) — `RES-PROC-G01-USER-REVIEW-01=USER_APPROVED_WITH_TARGETED_CORRECTION / CLOSED`；Mapping=`APPROVED_USER_GATE_0_1`，`CONTENT_INTENT_CONFIRMED`。
- [RES-PROC Gate 2 User Authorization V0.1](pages/resources/05_review/RES-PROC_GATE2_USER_AUTHORIZATION_V0.1.md) — `RES-PROC-G2-USER-AUTHORIZATION-01=USER_AUTHORIZED / ACTIVE`；只授权 Gate 2，两步门禁不变。
- [RES-PROC Gate 2 Content Architecture V0.1](pages/resources/04_planning/RES-PROC_GATE2_CONTENT_ARCHITECTURE_V0.1.md)、[SEO/GEO/Schema V0.1](pages/resources/04_planning/RES-PROC_GATE2_SEO_GEO_SCHEMA_CONTRACT_V0.1.md)、[Submission V0.1](pages/resources/05_review/RES-PROC_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.1.md) 与 [Manifest V0.2](pages/resources/05_review/RES-PROC_CURRENT_GATE2_REVIEW_MANIFEST_V0.2.md) — `SUPERSEDED / HISTORICAL`；保留三项 normalization 前的 Step-1 基线。
- [RES-PROC Gate 2 Content Architecture V0.2](pages/resources/04_planning/RES-PROC_GATE2_CONTENT_ARCHITECTURE_V0.2.md) — SHA-256=`C34C28CDDDA6957A497194D4D7837D837296CC80EABC7B4C3822879331DD4FA5`；`USER_APPROVED / CLOSED` 的 Step-1 内容骨架；Direct Answer、Tronox/LB evidence role 与 PQ-05 已归一。
- [RES-PROC Gate 2 SEO/GEO/Schema Contract V0.2](pages/resources/04_planning/RES-PROC_GATE2_SEO_GEO_SCHEMA_CONTRACT_V0.2.md) — SHA-256=`D6E054F8C7F3322D3DCF0114A018C6B038E24F58A2414B086B1129BAB983E1AB`；`USER_APPROVED / CLOSED` 的 Step-1 SEO/GEO/Schema 输入；180-day 继承自批准 Playbook Section 6.2，FAQ Schema 继续关闭。
- [RES-PROC Gate 2 Skeleton Submission V0.2](pages/resources/05_review/RES-PROC_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.2.md) 与 [Required Normalizations Resolution V0.1](pages/resources/05_review/RES-PROC_GATE2_REQUIRED_NORMALIZATIONS_RESOLUTION_V0.1.md) — `RES-PROC-G2-NORM-01=ALL_3_REQUIREMENTS_RESOLVED / CLOSED`；`RES-PROC-G2-SKELETON-PCR-02=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`。
- [RES-PROC Current Gate 2 Review Manifest V0.3](pages/resources/05_review/RES-PROC_CURRENT_GATE2_REVIEW_MANIFEST_V0.3.md) — `SUPERSEDED / HISTORICAL`；保留 Step-1 骨架用户审批前的指针。
- [RES-PROC Gate 2 Skeleton Approval and Full-copy Authorization V0.1](pages/resources/05_review/RES-PROC_GATE2_SKELETON_APPROVAL_AND_FULL_COPY_AUTHORIZATION_V0.1.md) — SHA-256=`A6D297DB426391CCABEB6E1E5C6D6A03AD46FC40DE76D7B9146258140020DB7F`；`SKELETON_USER_APPROVED / FULL_COPY_AUTHORIZATION_EXECUTED`。
- [RES-PROC Gate 2 Complete Buyer Clean Content V0.3](pages/resources/04_planning/RES-PROC_GATE2_CONTENT_ARCHITECTURE_V0.3.md) — SHA-256=`44383FC94BFA638061946452BFBBEB66E2501092F68871C851D744F72FD4DFE7`；1703 英文词，`RES-PROC-G2-FULL-COPY-PCR-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`。
- [RES-PROC Gate 2 Complete SEO/GEO/Schema Contract V0.3](pages/resources/04_planning/RES-PROC_GATE2_SEO_GEO_SCHEMA_CONTRACT_V0.3.md) — SHA-256=`DE1375AFD44E947D2F81183282ADEDA1F2129C7FF3247DF1D425282C8C419CE2`；全文 SEO/GEO/Schema 同步通过，`FULL_COPY_AND_MODULE_ORDER_CONFIRMED=NOT_SET`。
- [RES-PROC Gate 2 Full-copy Project-control Submission V0.1](pages/resources/05_review/RES-PROC_GATE2_FULL_COPY_PROJECT_CONTROL_SUBMISSION_V0.1.md) — SHA-256=`D060577E8E7B5507ED734CAE07B8EE7217218CAA4FC9BBB149E3F34087773CCE`；29 项内容/SEO 复验 PASS，等待用户审批全文。
- [RES-PROC Current Gate 2 Review Manifest V0.4](pages/resources/05_review/RES-PROC_CURRENT_GATE2_REVIEW_MANIFEST_V0.4.md) — `SUPERSEDED / HISTORICAL`；保留 Gate 2 全文获批前的审查指针。
- [RES-PROC Gate 2 Approval / Gate 3 Authorization Decision V0.1](pages/resources/05_review/RES-PROC_GATE2_APPROVAL_GATE3_AUTHORIZATION_DECISION_V0.1.md) — `GATE_2=USER_APPROVED / CLOSED`；`FULL_COPY_AND_MODULE_ORDER_CONFIRMED=USER_APPROVED / CLOSED`；Gate 3=`USER_AUTHORIZED / ACTIVE`。
- [RES-PROC Gate 3 Superdesign Context V0.1](pages/resources/04_planning/RES-PROC_GATE3_SUPERDESIGN_CONTEXT_V0.1.md) 与 [Responsive Wireframe Specification V0.1](pages/resources/04_planning/wireframes/RES-PROC_GATE3_RESPONSIVE_WIREFRAME_SPEC_V0.1.md) — 当前 Gate 3 内容与响应式结构 authority；14 模块保持不变。
- [RES-PROC Gate 3 Responsive HTML V0.1](pages/resources/04_planning/wireframes/res-proc/v0.1/RES-PROC_GATE3_RESPONSIVE_WIREFRAME_V0.1.html) — Superdesign draft `878afb27-3395-4030-95bd-9a89da7125c2` v4 的字节一致正式源；同目录含 1440、768、390 与 Mobile Menu open 四份 PNG 证据。
- [RES-PROC Gate 3 Validation V0.1](pages/resources/04_planning/wireframes/RES-PROC_GATE3_VALIDATION_V0.1.md) — `54 PASS / 0 FAIL`；三端无横向溢出，最小可见 target 44px，Mobile Menu 背景 inert/hidden 且激活后焦点进入 Close。
- [RES-PROC Gate 3 Project-control Submission V0.1](pages/resources/05_review/RES-PROC_GATE3_PROJECT_CONTROL_SUBMISSION_V0.1.md) 与 [Project-control Review V0.1](pages/resources/05_review/RES-PROC_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md) — `RES-PROC-G3-PCR-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；0 P0 / 0 P1 / 0 P2。
- [RES-PROC Current Gate 3 Review Manifest V0.5](pages/resources/05_review/RES-PROC_CURRENT_GATE3_REVIEW_MANIFEST_V0.5.md) — `SUPERSEDED / HISTORICAL`；保留 Gate 3 用户批准前的审查指针。
- [RES-PROC Gate 3 Approval / Gate 4 Authorization Decision V0.1](pages/resources/05_review/RES-PROC_GATE3_APPROVAL_GATE4_AUTHORIZATION_DECISION_V0.1.md) — `GATE_3=USER_APPROVED / CLOSED`；Gate 4=`USER_AUTHORIZED / ACTIVE`。
- [RES-PROC Gate 4 Superdesign Context V0.1](pages/resources/04_planning/RES-PROC_GATE4_SUPERDESIGN_CONTEXT_V0.1.md) 与 [Process Qualification Ledger Visual Direction V0.1](pages/resources/04_planning/visual-directions/RES-PROC_GATE4_VISUAL_DIRECTION_V0.1.md) — `RES-PROC-G4-PCR-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；方向保持 route-label/Grade-evidence 边界并采用无图片 Hero。
- [RES-PROC Gate 4 Responsive Direction HTML V0.1](pages/resources/04_planning/visual-directions/res-proc/v0.1/RES-PROC_GATE4_PROCESS_QUALIFICATION_LEDGER_V0.1.html) — Superdesign draft `878afb27-3395-4030-95bd-9a89da7125c2` v6 的字节一致正式源；三份代表性 PNG 位于 `pages/resources/04_planning/visual-directions/assets/`。
- [RES-PROC Gate 4 Validation V0.1](pages/resources/04_planning/visual-directions/RES-PROC_GATE4_VALIDATION_V0.1.md) — `42 PASS / 0 FAIL`；三端无横向溢出，44px target、Mobile Menu inert/focus/current state、Logo、等权路线卡和内容/链接完整性均通过。
- [RES-PROC Gate 4 Project-control Submission V0.1](pages/resources/05_review/RES-PROC_GATE4_PROJECT_CONTROL_SUBMISSION_V0.1.md) 与 [Project-control Review V0.1](pages/resources/05_review/RES-PROC_GATE4_PROJECT_CONTROL_REVIEW_V0.1.md) — 0 P0 / 0 P1 / 0 P2；建议用户批准 Gate 4。
- [RES-PROC Current Gate 4 Review Manifest V0.6](pages/resources/05_review/RES-PROC_CURRENT_GATE4_REVIEW_MANIFEST_V0.6.md) — `SUPERSEDED / HISTORICAL`；保留 Gate 4 用户批准前的审查指针。
- [RES-PROC Gate 4 Approval / Gate 5 Authorization Decision V0.1](pages/resources/05_review/RES-PROC_GATE4_APPROVAL_GATE5_AUTHORIZATION_DECISION_V0.1.md) — `GATE_4=USER_APPROVED / CLOSED`；Gate 5=`USER_AUTHORIZED / ACTIVE`。
- [RES-PROC Gate 5 Superdesign Input V0.1](pages/resources/04_planning/RES-PROC_GATE5_SUPERDESIGN_INPUT_V0.1.md) 与 [Context V0.1](pages/resources/04_planning/RES-PROC_GATE5_SUPERDESIGN_CONTEXT_V0.1.md) — 锁定 14 模块、三端全页、Mobile Menu、FAQ focus、Process routes off 与 SEO/Schema 边界。
- [RES-PROC Gate 5 Full Visual Specification V0.1](pages/resources/04_planning/visual-designs/RES-PROC_GATE5_FULL_VISUAL_SPEC_V0.1.md) 与 [Responsive HTML V0.1](pages/resources/04_planning/visual-designs/RES-PROC_GATE5_FULL_VISUAL_V0.1.html) — Superdesign draft `878afb27-3395-4030-95bd-9a89da7125c2` v8 的字节一致正式源；六份完整/状态 PNG 位于 `pages/resources/04_planning/visual-designs/assets/`。
- [RES-PROC Gate 5 Validation V0.1](pages/resources/04_planning/visual-designs/RES-PROC_GATE5_VALIDATION_V0.1.md) — `61 PASS / 0 FAIL`，人工视觉 QA=`PASS`；三端无横向溢出，44px target、精确 metadata、Schema suppression、Mobile Menu、FAQ focus 和条件链接原子隐藏均通过。
- [RES-PROC Gate 5 Project-control Submission V0.1](pages/resources/05_review/RES-PROC_GATE5_PROJECT_CONTROL_SUBMISSION_V0.1.md) 与 [Project-control Review V0.1](pages/resources/05_review/RES-PROC_GATE5_PROJECT_CONTROL_REVIEW_V0.1.md) — `RES-PROC-G5-PCR-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`；0 P0 / 0 P1 / 0 P2。
- [RES-PROC Current Gate 5 Review Manifest V0.7](pages/resources/05_review/RES-PROC_CURRENT_GATE5_REVIEW_MANIFEST_V0.7.md) — `SUPERSEDED / HISTORICAL`；保留 Gate 5 用户批准前的审查指针。
- [RES-PROC Gate 5 Approval / Gate 6 Authorization Decision V0.1](pages/resources/05_review/RES-PROC_GATE5_APPROVAL_GATE6_AUTHORIZATION_DECISION_V0.1.md) — `GATE_5=USER_APPROVED / CLOSED`；Gate 6=`USER_AUTHORIZED / CLOSED_AFTER_PROJECT_CONTROL_PASS`；Gate 7–10 未授权。
- [RES-PROC Brief V0.3](docs/page-briefs/RES-PROC_CHLORIDE_VS_SULFATE_BRIEF_V0.3.md) — 状态与开发交付合同归一；不改变批准的 Buyer Clean 内容、模块、事实、链接、metadata 或视觉。
- [RES-PROC Gate 6 Validation V0.1](pages/resources/05_review/RES-PROC_GATE6_VALIDATION_V0.1.md) 与 [Project-control Review V0.1](pages/resources/05_review/RES-PROC_GATE6_PROJECT_CONTROL_REVIEW_V0.1.md) — 新鲜审计 `48 PASS / 0 FAIL`；`RES-PROC-G6-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；0 P0 / 0 P1 / 0 P2。
- [RES-PROC Current Gate 6 Review Manifest V0.8](pages/resources/05_review/RES-PROC_CURRENT_GATE6_REVIEW_MANIFEST_V0.8.md) — `SUPERSEDED / HISTORICAL`；保留 Gate 7 授权前的总控指针。
- [RES-PROC Gate 6 Approval / Gate 7 Authorization Decision V0.1](pages/resources/05_review/RES-PROC_GATE6_APPROVAL_GATE7_AUTHORIZATION_DECISION_V0.1.md) — `GATE_6=USER_APPROVED / CLOSED`；Gate 7=`USER_AUTHORIZED / CLOSED_AFTER_PROJECT_CONTROL_PASS`；Gate 8–10 未授权。
- [RES-PROC Gate 7 Handoff Package V0.1](pages/resources/06_handoff/RES-PROC_GATE7_HANDOFF_PACKAGE_V0.1.md)、[CMS/API/Component Mapping V0.1](pages/resources/06_handoff/RES-PROC_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md)、[Implementation Plan V0.1](pages/resources/06_handoff/RES-PROC_GATE7_IMPLEMENTATION_NEUTRAL_PLAN_V0.1.md) 与 [Acceptance/Blockers V0.1](pages/resources/06_handoff/RES-PROC_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md) — 四文件核心包；保持 RES-PROC 独立内容/模块/来源/关系，定义9任务、28验收和Gate 9回执。
- [RES-PROC Gate 7 Manifest V0.1](pages/resources/06_handoff/RES-PROC_GATE7_MANIFEST_V0.1.md) 与 [Fresh Validation V0.1](pages/resources/06_handoff/RES-PROC_GATE7_FRESH_VALIDATION_V0.1.md) — 核心包与12项上游 authority 封口；`45 PASS / 0 FAIL`。
- [RES-PROC Gate 7 Project-control Review V0.1](pages/resources/06_handoff/RES-PROC_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md) 与 [Closure V0.1](pages/resources/05_review/RES-PROC_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) — `RES-PROC-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；0 P0 / 0 P1 / 0 P2；`HANDED_OFF=NO`。
- [RES-PROC Current Gate 7 Handoff Manifest V0.9](pages/resources/05_review/RES-PROC_CURRENT_GATE7_HANDOFF_MANIFEST_V0.9.md) — 当前唯一指针；lifecycle=`APPROVED_FOR_HANDOFF`；Gate 8–10 未授权。

`RES-000-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`，Hub lifecycle=`READ_ONLY_QA_APPROVED`，H0 公共 inventory、Featured/Latest 与 ItemList 仍为 0。RES-ORIGIN 的独立 D16 任务为 `Implement RES-ORIGIN Gate 8` / `01a06f70-b99d-7a92-9def-196f2b21abd9`；首轮 Gate 9 返回的 Article 条件链路 P0 已由 `ee64dd7` 修正，并在最终 ref `53ec50213f806ed4a9995042c4431f8e4376d36d` 完成独立复验。`RES-ORIGIN-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`，lifecycle=`READ_ONLY_QA_APPROVED`，24项合同关闭，当前 Article metadata 仍为 null。用户已确认 Resources 后续采用“共享实现模板、不共享页面内容或固定模块顺序”的原则；`RES-ORIGIN` 仅作实现参考，各页仍独立 Gate。页面继续不进入 RES-000 公共 inventory/sitemap；项目级 `Malaysia-origin titanium dioxide` 授权与其他事实门禁不变。Gate 10、部署、生产写入、公开、发布、DNS 与索引未授权。

## 5B. Documents & Compliance Hub Gate 4 审核包

- [Documents Playbook V0.1](docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.1.md)
- [DOC-000 Brief V0.1](docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.1.md)
- [DOC-000 Content Architecture V0.1](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.1.md)
- [DOC-000 SEO / GEO / Schema Contract V0.1](pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.1.md)
- [DOC-000 Wireframe V0.1](pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.1.md)
- [DOC-000 Visual Direction V0.1](pages/documents/04_planning/visual-directions/DOC-000_VISUAL_DIRECTION_V0.1.md)
- [DOC-000 Gate 4 Review Submission V0.1](pages/documents/04_planning/DOC-000_GATE4_REVIEW_SUBMISSION_V0.1.md)
- [DOC-000 Full Visual Design V0.1](pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.1.md)
- [DOC-000 Gate 5 Review Submission V0.1](pages/documents/04_planning/DOC-000_GATE5_REVIEW_SUBMISSION_V0.1.md)

## 5C. Documents & Compliance Hub Gate 5 V0.2 转化修订审核包

- [Documents Playbook V0.2](docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.2.md)
- [DOC-000 Brief V0.2](docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.2.md)
- [DOC-000 Content Architecture V0.2](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.2.md)
- [DOC-000 SEO / GEO / Schema Contract V0.2](pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.2.md)
- [DOC-000 Wireframe V0.2](pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.2.md)
- [DOC-000 Visual Direction V0.2](pages/documents/04_planning/visual-directions/DOC-000_VISUAL_DIRECTION_V0.2.md)
- [DOC-000 Full Visual Design V0.2](pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.2.md)
- [DOC-000 Gate 5 Review Submission V0.2](pages/documents/04_planning/DOC-000_GATE5_REVIEW_SUBMISSION_V0.2.md)

V0.2 是历史 Request Documents Conversion Hub 审核候选，状态为 `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED`。V0.1/V0.2 均保留为历史提交记录。

## 5D. Documents & Compliance Hub Gate 5 V0.3 Finder 修订审核包

- [Documents Playbook V0.3](docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.3.md)
- [DOC-000 Brief V0.3](docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.3.md)
- [DOC-000 Content Architecture V0.3](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.3.md)
- [DOC-000 SEO / GEO / Schema Contract V0.3](pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.3.md)
- [DOC-000 Wireframe V0.3](pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.3.md)
- [DOC-000 Visual Direction V0.3](pages/documents/04_planning/visual-directions/DOC-000_VISUAL_DIRECTION_V0.3.md)
- [DOC-000 Full Visual Design V0.3](pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.3.md)
- [DOC-000 Gate 5 Review Submission V0.3](pages/documents/04_planning/DOC-000_GATE5_REVIEW_SUBMISSION_V0.3.md)

V0.3 是历史 Document Finder + Request Hub 审核候选，状态为 `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED`。V0.1–V0.3 均保留为历史提交记录。

## 5E. Documents & Compliance Hub Gate 5 V0.4 参考图对齐与面包屑

- [DOC-000 Content Architecture V0.4](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.4.md)
- [DOC-000 Visual Direction V0.4](pages/documents/04_planning/visual-directions/DOC-000_VISUAL_DIRECTION_V0.4.md)
- [DOC-000 Full Visual Design V0.4](pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.4.md)
- [DOC-000 Gate 5 Review Submission V0.4](pages/documents/04_planning/DOC-000_GATE5_REVIEW_SUBMISSION_V0.4.md)

V0.4 是参考图对齐并增加 Desktop/Mobile 面包屑的历史审核候选，状态为 `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED`。V0.5 已取代其尺寸/导出基线；V0.4 仍是当前内容与证据父级。

## 5F. Documents & Compliance Hub Gate 5 V0.5 尺寸与导出修订

- [DOC-000 Full Visual Design V0.5](pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.5.md)
- [DOC-000 Gate 5 Asset Manifest V0.5](pages/documents/04_planning/visual-designs/DOC-000_GATE5_ASSET_MANIFEST_V0.5.md)
- [DOC-000 Dimension Validation V0.5](pages/documents/04_planning/DOC-000_DIMENSION_VALIDATION_V0.5.md)
- [DOC-000 Gate 5 Review Submission V0.5](pages/documents/04_planning/DOC-000_GATE5_REVIEW_SUBMISSION_V0.5.md)

V0.5 是历史尺寸/导出审核候选：Desktop 1440×3909 physical、Tablet 768×4831 dedicated reflow、Mobile 390 logical @2× / 780×11126 physical。该版本未获批准，且已被 Gate 1 V1.1 定向重基线标记为 `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL`。

本段仅记录历史 V0.5 提交状态 `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED`。其视觉与 Finder states 不再控制新版本；当前状态以 5G 的 Gate 1 Manifest 为准。

## 5G. Documents & Compliance Hub Gate 1 Types-01 定向修订

当前 Gate 1 复审包：

- [DOC-000 Brief V0.5](docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.5.md)
- [DOC-000 Gate 1 Intent / Keyword / Evidence Rebaseline V0.2](pages/documents/01_research/DOC-000_GATE1_INTENT_KEYWORD_EVIDENCE_REBASE_V0.2.md)
- [DOC-000 Gate 1 Types-01 Change Impact V0.2](pages/documents/01_research/DOC-000_GATE1_V11_CHANGE_IMPACT_V0.2.md)
- [DOC-000 Current Gate Baseline Manifest V0.2](pages/documents/01_research/DOC-000_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md)
- [DOC-000 Gate 1 Project-Control Review Submission V0.2](pages/documents/01_research/DOC-000_GATE1_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md)

Gate 1 Review ID `DOC-000-G1-V11-TYPES-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；checkpoint=`CONTENT_INTENT_CONFIRMED / APPROVED`，批准日期 2026-09-01。Hub 公开 taxonomy 精确为 4 类；独立第五类能力登记为 `NOT_ESTABLISHED / DO_NOT_RENDER`，`Other Documentation` 不作为正式 Hub 卡。用户已授权 Gate 2，Gate 1 文件现作为批准上游，不授权 Gate 3+、视觉或开发。

Gate 1 闭环 Manifest V0.2 SHA-256=`884438681D786736BD152CB9BE9746DEF572179737D860EBE2293C96E9A144F0`；Manifest 内四份闭环 payload 的 bytes/hash 已逐项复验一致。

历史 Gate 1 五类包（保留、不可作为当前控制）：

- [DOC-000 Brief V0.4](docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.4.md)
- [DOC-000 Gate 1 Intent / Keyword / Evidence Rebaseline V0.1](pages/documents/01_research/DOC-000_GATE1_INTENT_KEYWORD_EVIDENCE_REBASE_V0.1.md)
- [DOC-000 Gate 1 V1.1 Change Impact V0.1](pages/documents/01_research/DOC-000_GATE1_V11_CHANGE_IMPACT_V0.1.md)
- [DOC-000 Current Gate Baseline Manifest V0.1](pages/documents/01_research/DOC-000_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md)
- [DOC-000 Gate 1 Project-Control Review Submission V0.1](pages/documents/01_research/DOC-000_GATE1_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)

以上旧包 disposition=`HISTORICAL / SUPERSEDED_BY_TYPES_01 / NOT_CURRENT_CONTROL`；旧 Gate 2–5/V0.1–V0.5 继续保留为 historical/superseded pending rework。

## 5H. Documents & Compliance Hub Gate 2 完整文案复审

- [DOC-000 Content Architecture and Full Copy V0.6](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.6.md)
- [DOC-000 SEO / GEO / Schema Contract V0.5](pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.5.md)
- [DOC-000 Gate 2 Final-Reader Change Impact V0.2](pages/documents/04_planning/DOC-000_GATE2_V11_CHANGE_IMPACT_V0.2.md)
- [DOC-000 Current Gate 2 Baseline Manifest V0.2](pages/documents/04_planning/DOC-000_CURRENT_GATE2_BASELINE_MANIFEST_V0.2.md)
- [DOC-000 Gate 2 Project-Control Review Submission V0.2](pages/documents/04_planning/DOC-000_GATE2_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md)

Gate 2 Review ID=`DOC-000-G2-V11-COPY-02 = APPROVED / CLOSED`，checkpoint=`FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED`，批准日期 2026-09-01。该包继续作为 Gate 3 的批准文案上游，不再是当前 Gate 1–5 包根。

当前 Gate 2 Manifest V0.2 SHA-256=`5874B6376C78985B59E1773D67B7BECEFFD6B3ABCE4DF87FC619EA1E6EBB5622`；四份闭环 payload 为 `4 match / 0 failure`。

历史 COPY-01 包（保留、不可作为当前控制）：

- [DOC-000 Content Architecture and Full Copy V0.5](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.5.md)
- [DOC-000 SEO / GEO / Schema Contract V0.4](pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.4.md)
- [DOC-000 Gate 2 V1.1 Copy Change Impact V0.1](pages/documents/04_planning/DOC-000_GATE2_V11_CHANGE_IMPACT_V0.1.md)
- [DOC-000 Current Gate 2 Baseline Manifest V0.1](pages/documents/04_planning/DOC-000_CURRENT_GATE2_BASELINE_MANIFEST_V0.1.md)
- [DOC-000 Gate 2 Project-Control Review Submission V0.1](pages/documents/04_planning/DOC-000_GATE2_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)

COPY-01 disposition=`HISTORICAL / SUPERSEDED_BY_COPY_02 / NOT_CURRENT_CONTROL`；其 Manifest V0.1 SHA-256=`D5E65811C03715855316F8E1A8143A41F07990D9C2A6018A6013111D58F93CBC`。

## 5H.1 Documents & Compliance Hub Gate 3 响应式线框复审

- [DOC-000 Responsive Wireframe V0.4](pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.4.md)
- [DOC-000 Gate 3 Responsive and Interaction Contract V0.1](pages/documents/04_planning/DOC-000_GATE3_RESPONSIVE_INTERACTION_CONTRACT_V0.1.md)
- [DOC-000 Gate 3 Change Impact V0.1](pages/documents/04_planning/DOC-000_GATE3_CHANGE_IMPACT_V0.1.md)
- [DOC-000 Current Gate 3 Baseline Manifest V0.1](pages/documents/04_planning/DOC-000_CURRENT_GATE3_BASELINE_MANIFEST_V0.1.md)
- [DOC-000 Gate 3 Project-Control Review Submission V0.1](pages/documents/04_planning/DOC-000_GATE3_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)

该包已由用户批准按总控建议返修，现有 disposition=`DOC-000-G3-V11-WF-01 = REVISION_REQUIRED / SUPERSEDED_BY_USER_DIRECTED_READER_REWORK`。V0.1 Manifest 与全部 payload 保留为历史审查记录，不再作为当前控制。

## 5H.2 Documents & Compliance Hub Gate 2/3 Reader Rework

- [Reader-Focused Content Architecture V0.7](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.7.md)
- [Reader-Rework SEO/GEO/Schema Contract V0.6](pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.6.md)
- [Reader-Focused Wireframe Specification V0.5](pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.5.md)
- [Desktop 1440 Grayscale Wireframe](pages/documents/04_planning/wireframes/assets/DOC-000_G3_DESKTOP_1440_READER_WIREFRAME_V0.1.png)
- [Tablet 768 Grayscale Wireframe](pages/documents/04_planning/wireframes/assets/DOC-000_G3_TABLET_768_READER_WIREFRAME_V0.1.png)
- [Mobile 390 logical @2x Grayscale Wireframe](pages/documents/04_planning/wireframes/assets/DOC-000_G3_MOBILE_390_LOGICAL_2X_READER_WIREFRAME_V0.1.png)
- [Mobile Menu 390 logical @2x Wireframe](pages/documents/04_planning/wireframes/assets/DOC-000_G3_MOBILE_MENU_390_LOGICAL_2X_READER_WIREFRAME_V0.1.png)
- [Reader Rework Change Impact V0.1](pages/documents/04_planning/DOC-000_GATE2_GATE3_READER_REWORK_CHANGE_IMPACT_V0.1.md)
- [Reader Rework Validation V0.1](pages/documents/04_planning/DOC-000_GATE2_GATE3_READER_REWORK_VALIDATION_V0.1.md)
- [Reader Rework Project-Control Submission V0.1](pages/documents/04_planning/DOC-000_GATE2_GATE3_READER_REWORK_PROJECT_CONTROL_SUBMISSION_V0.1.md)
- [Current Gate 2/3 Reader Rework Manifest V0.2](pages/documents/04_planning/DOC-000_CURRENT_GATE3_BASELINE_MANIFEST_V0.2.md)

该 Reader Rework 包已被 2026-09-02 用户确认的 Selector-CTA 定向决定取代为当前包根。V0.7/V0.5/V0.2 与四张 V0.1 资产继续保留为 `HISTORICAL / SUPERSEDED_BY_SELECTOR_CTA_01`，不覆盖、不删除。

## 5H.3 Documents & Compliance Hub Selector-CTA 定向修订

- [Selector-CTA Content Architecture V0.8](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.8.md)
- [Selector-CTA Wireframe Specification V0.6](pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.6.md)
- [Responsive and Interaction Contract V0.2](pages/documents/04_planning/DOC-000_GATE3_RESPONSIVE_INTERACTION_CONTRACT_V0.2.md)
- [Desktop 1440 Selector-CTA Wireframe V0.2](pages/documents/04_planning/wireframes/assets/DOC-000_G3_DESKTOP_1440_SELECTOR_CTA_WIREFRAME_V0.2.png)
- [Tablet 768 Selector-CTA Wireframe V0.2](pages/documents/04_planning/wireframes/assets/DOC-000_G3_TABLET_768_SELECTOR_CTA_WIREFRAME_V0.2.png)
- [Mobile 390 logical @2x Selector-CTA Wireframe V0.2](pages/documents/04_planning/wireframes/assets/DOC-000_G3_MOBILE_390_LOGICAL_2X_SELECTOR_CTA_WIREFRAME_V0.2.png)
- [Selector CTA Three-State Proof V0.1](pages/documents/04_planning/wireframes/assets/DOC-000_G3_SELECTOR_CTA_STATES_V0.1.png)
- [Selector-CTA Change Impact V0.1](pages/documents/04_planning/DOC-000_GATE2_GATE3_SELECTOR_CTA_CHANGE_IMPACT_V0.1.md)
- [Selector-CTA Validation V0.1](pages/documents/04_planning/DOC-000_GATE2_GATE3_SELECTOR_CTA_VALIDATION_V0.1.md)
- [Selector-CTA Project-Control Submission V0.1](pages/documents/04_planning/DOC-000_GATE2_GATE3_SELECTOR_CTA_PROJECT_CONTROL_SUBMISSION_V0.1.md)
- [Current Selector-CTA Manifest V0.3](pages/documents/04_planning/DOC-000_CURRENT_GATE3_BASELINE_MANIFEST_V0.3.md)

Review ID=`DOC-000-G2-G3-SELECTOR-CTA-01 = APPROVED / CLOSED`，批准日期 2026-09-02。用户同时授权 Gate 4。批准的上游保持 Content V0.8 / Wireframe V0.6 / Responsive Contract V0.2 / Manifest V0.3；Manifest SHA-256=`ACA7A41E48A778D30327B3DC8A05C1088A2286407AF03AB4C1BC26920C19ECB7`。Gate 3 PNG 未改写。Gate 5 后续已由用户单独授权；子页、开发、D16、部署与发布仍未授权。

## 5H.4 Documents & Compliance Hub 已批准 Gate 4 基线

- [Current Visual Direction V0.5](pages/documents/04_planning/visual-directions/DOC-000_VISUAL_DIRECTION_V0.5.md)
- [Desktop 1440 Key Visual](pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_DESKTOP_1440_KEY_DIRECTION_V0.5.png)
- [Tablet 768 Key Visual](pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_TABLET_768_KEY_DIRECTION_V0.5.png)
- [Mobile 390 logical @2x Key Visual](pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_MOBILE_390_LOGICAL_2X_KEY_DIRECTION_V0.5.png)
- [Selector / FAQ Component States](pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_SELECTOR_FAQ_COMPONENT_STATES_V0.5.png)
- [Global Chrome Assembly Proof](pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_GLOBAL_CHROME_ASSEMBLY_PROOF_V0.5.png)
- [Gate 4 Validation V0.1](pages/documents/04_planning/DOC-000_GATE4_VISUAL_DIRECTION_VALIDATION_V0.1.md)
- [Gate 4 Project-Control Review Submission V0.2](pages/documents/04_planning/DOC-000_GATE4_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md)
- [Hero CTA User Decision V0.1](pages/documents/04_planning/DOC-000_GATE4_HERO_CTA_USER_DECISION_V0.1.md)
- [Hero / Selector CTA Interaction Contract V0.1](pages/documents/04_planning/DOC-000_GATE4_HERO_SELECTOR_CTA_INTERACTION_CONTRACT_V0.1.md)
- [Hero CTA Change Impact V0.1](pages/documents/04_planning/DOC-000_GATE4_HERO_CTA_CHANGE_IMPACT_V0.1.md)
- [PCR-01 Targeted Revision V0.1](pages/documents/04_planning/DOC-000_GATE4_PCR01_TARGETED_REVISION_V0.1.md)
- [PCR-01 Project-Control Closure V0.1](pages/documents/04_planning/DOC-000_GATE4_PCR01_PROJECT_CONTROL_CLOSURE_V0.1.md)
- [Gate 4 User Approval Closure V0.1](pages/documents/04_planning/DOC-000_GATE4_USER_APPROVAL_CLOSURE_V0.1.md)
- [Hero CTA Decision Hold V0.1](pages/documents/04_planning/DOC-000_GATE4_HERO_CTA_DECISION_HOLD_V0.1.md)
- [Current Gate 4 Manifest V0.1](pages/documents/04_planning/DOC-000_CURRENT_GATE4_BASELINE_MANIFEST_V0.1.md)

`DOC-000-G4-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；`DOC-000-G4-DOC-EDITORIAL-01 = APPROVED / CLOSED`，用户批准日期 2026-09-02。Tablet field/button gap=78px、overlap=0；Mobile Explore Products Buyer-visible；Hero direct link、Selector 双路径、4 categories、14 Grades、6 FAQ 和共享 Global Chrome 均纳入批准基线。Gate 4 Manifest SHA-256=`9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00`。用户已单独授权 Gate 5；开发、D16、部署与发布未授权。

## 5H.5 Documents & Compliance Hub 当前 Gate 5 候选

- [Gate 5 Conditional Return V0.1](pages/documents/04_planning/DOC-000_GATE5_PROJECT_CONTROL_CONDITIONAL_RETURN_V0.1.md)
- [Shared Footer P0 Return V0.1](pages/documents/04_planning/DOC-000_GATE5_SHARED_FOOTER_P0_RETURN_V0.1.md)
- [Full Visual Design V0.7.1](pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.7.1.md)
- [Desktop 1440 Full Buyer Clean V0.7.1](pages/documents/04_planning/visual-designs/gate5_v0.7.1/assets/DOC-000_G5_DESKTOP_1440_FULL_BUYER_CLEAN_V0.7.1.png)
- [Tablet 768 Full Buyer Clean V0.7.1](pages/documents/04_planning/visual-designs/gate5_v0.7.1/assets/DOC-000_G5_TABLET_768_FULL_BUYER_CLEAN_V0.7.1.png)
- [Mobile 390 logical @2x Full Buyer Clean V0.7](pages/documents/04_planning/visual-designs/gate5_v0.7/assets/DOC-000_G5_MOBILE_390_LOGICAL_2X_FULL_BUYER_CLEAN_V0.7.png)
- [Mobile H1 / FAQ / Footer Repair Proof V0.7](pages/documents/04_planning/visual-designs/gate5_v0.7/assets/DOC-000_G5_MOBILE_H1_FAQ_FOOTER_REPAIR_PROOF_V0.7.png)
- [Selector / FAQ Interaction States](pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_SELECTOR_FAQ_INTERACTION_STATES_V0.6.png)
- [Mobile Menu Open 390 logical @2x](pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_MOBILE_MENU_OPEN_390_LOGICAL_2X_V0.6.png)
- [Gate 5 Visual Validation V0.7.1](pages/documents/04_planning/DOC-000_GATE5_VISUAL_VALIDATION_V0.7.1.md)
- [Gate 5 Targeted Repair Submission V0.7.1](pages/documents/04_planning/DOC-000_GATE5_TARGETED_REPAIR_PROJECT_CONTROL_SUBMISSION_V0.7.1.md)
- [Gate 5 Project-Control Closure V0.1](pages/documents/04_planning/DOC-000_GATE5_PROJECT_CONTROL_CLOSURE_V0.1.md)
- [Gate 5 User Approval Closure V0.1](pages/documents/04_planning/DOC-000_GATE5_USER_APPROVAL_CLOSURE_V0.1.md)
- [Current Gate 5 Manifest V0.3](pages/documents/04_planning/DOC-000_CURRENT_GATE5_BASELINE_MANIFEST_V0.3.md)

`DOC-000-G5-MOBILE-REPAIR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；父项 `DOC-000-G5-FULL-VISUAL-01 = APPROVED / CLOSED`，用户批准日期 2026-09-02。当前批准基线为 Manifest V0.3 + Desktop V0.7.1 + Tablet V0.7.1 + Mobile V0.7 + Selector/FAQ states V0.6 + Mobile Menu V0.6 + inherited Global Chrome proof。Manifest SHA-256=`D0C8E49F09BC37ED7E13E88B9D5506E724CC7ADA5F53AB5396E795B528CCDE9D`；User Approval Closure SHA-256=`FA0D002411893C23045864AB7EBCF9F27CEDE90EE0AFD3A0C64BD036C49B60F5`。用户已授权 Gate 6；Gate 7、开发、D16、部署与发布未授权。

## 5H.6 Documents & Compliance Hub Gate 6 总控审查

Gate 6 当前批准基线：

- [Normalized Current Brief V0.6](docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.6.md)
- [Normalized Current Content Architecture V0.9](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.9.md)
- [Gate 6 Project-Control Review Package V0.2](pages/documents/05_review/DOC-000_GATE6_PROJECT_CONTROL_REVIEW_PACKAGE_V0.2.md)
- [Gate 6 SEO/GEO/Schema/Social/DOM Review V0.2](pages/documents/05_review/DOC-000_GATE6_SEO_GEO_SCHEMA_REVIEW_V0.2.md)
- [Gate 6 Gate 7 Readiness Contract V0.2](pages/documents/05_review/DOC-000_GATE6_GATE7_READINESS_CONTRACT_V0.2.md)
- [Gate 6 Validation V0.2](pages/documents/05_review/DOC-000_GATE6_VALIDATION_V0.2.md)
- [Gate 6 Project-Control Review Submission V0.2](pages/documents/05_review/DOC-000_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md)
- [Gate 6 Project-Control Closure V0.1](pages/documents/05_review/DOC-000_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md)
- [Current Gate 6 Baseline Manifest V0.3](pages/documents/05_review/DOC-000_CURRENT_GATE6_BASELINE_MANIFEST_V0.3.md)

`DOC-000-G6-PCR-01 = CONDITIONAL_RETURN / SUPERSEDED_BY_PCR_02`；`DOC-000-G6-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；Gate 6 outcome=`PROJECT_CONTROL_GATE_6_PASS`。Gate 7 的页面自有输入统一为 Brief V0.6 → Content V0.9。14 Grades、三场景、四类别、六 FAQ、Hero direct、Hub/CONV-DOC 分工、no-Terms 权威链、OG/Twitter 同源和全部 Gate 5 PNG 均通过复核。lifecycle 保持 `DESIGN_IN_REVIEW`；Gate 7=`LOCKED / NOT_AUTHORIZED`。Current Gate 6 Baseline Manifest SHA-256=`A8CC6C23449BADFEE3CECCDB4DB43A69BD716C85A00253E56671FD1C5C9C030D`；未创建 Gate 7 handoff，未访问 D16，开发和发布未授权。

历史审查提交（保留，不作为当前 Gate 7 输入）：

- [PCR-02 Immutable Reviewed Manifest V0.2](pages/documents/05_review/DOC-000_CURRENT_GATE6_REVIEW_MANIFEST_V0.2.md)
- [Historical Gate 6 Manifest V0.1](pages/documents/05_review/DOC-000_CURRENT_GATE6_REVIEW_MANIFEST_V0.1.md)
- [Historical Gate 6 Submission V0.1](pages/documents/05_review/DOC-000_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)

## 5H.7 Documents & Compliance Hub Gate 7 开发交付包

- [Gate 7 Handoff Package V0.1](pages/documents/06_handoff/DOC-000_GATE7_HANDOFF_PACKAGE_V0.1.md)
- [Gate 7 CMS/API/Component Mapping V0.1](pages/documents/06_handoff/DOC-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md)
- [Gate 7 Route/Prefill Contract V0.1](pages/documents/06_handoff/DOC-000_GATE7_ROUTE_PREFILL_CONTRACT_V0.1.md)
- [Gate 7 SEO/GEO/Schema/Social Contract V0.1](pages/documents/06_handoff/DOC-000_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md)
- [Gate 7 Responsive/A11y/Interaction Acceptance V0.1](pages/documents/06_handoff/DOC-000_GATE7_RESPONSIVE_A11Y_INTERACTION_ACCEPTANCE_V0.1.md)
- [Gate 7 Site-Scope/Shared-Ownership Contract V0.1](pages/documents/06_handoff/DOC-000_GATE7_SITE_SCOPE_SHARED_OWNERSHIP_CONTRACT_V0.1.md)
- [Gate 7 Gate 8/9 Acceptance and Blockers V0.1](pages/documents/06_handoff/DOC-000_GATE7_GATE8_GATE9_ACCEPTANCE_AND_BLOCKERS_V0.1.md)
- [Gate 7 Repeatable Validation V0.1](pages/documents/06_handoff/DOC-000_GATE7_VALIDATION_V0.1.md)
- [Gate 7 Project-Control Submission V0.1](pages/documents/06_handoff/DOC-000_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md)
- [Gate 7 Manifest V0.1](pages/documents/06_handoff/DOC-000_GATE7_MANIFEST_V0.1.md)
- [Gate 7 Project-Control Closure V0.1](pages/documents/06_handoff/DOC-000_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md)
- [Current Gate 7 Baseline Manifest V0.2](pages/documents/06_handoff/DOC-000_CURRENT_GATE7_BASELINE_MANIFEST_V0.2.md)
- [Gate 8 User Authorization and Handoff Record V0.1](pages/documents/05_review/DOC-000_GATE8_USER_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md)
- [Gate 8 Implementation Result Intake V0.1](pages/documents/05_review/DOC-000_GATE8_IMPLEMENTATION_RESULT_INTAKE_V0.1.md)
- [Gate 9 Read-Only QA Closure V0.1](pages/documents/05_review/DOC-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md)
- [Post-Gate 9 FAQ Grade Alignment Decision V0.1](pages/documents/05_review/DOC-000_POST_GATE9_FAQ_GRADE_ALIGNMENT_DECISION_V0.1.md) 与 [Current Buyer Clean Content Architecture V0.10](pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.10.md)

`DOC-000-G7-HANDOFF-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`。用户于 2026-09-02 明确授权 Gate 8；外部实施 commit=`e1d7c761f65570722be5dad705c8c1780262fab0`，Gate 9 P0 cache correction=`51d2db23ccf03d0f5d5bbb7cb0ee90198f7c1fd5`。`DOC-000-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；原实现 lifecycle=`READ_ONLY_QA_APPROVED`。2026-09-05 用户批准FAQ #2定向文案修正，当前Buyer Clean authority升级为V0.10；现有Gate 5/Gate 8/Gate 9证据保持不可变，外部实现与定向只读复验开放并新增为发布阻塞。Gate 10、部署、生产发布、DNS和索引未授权。

## 5H.8 Documents 三个详情页 Gate 0–1 联合审核包

- [REACH / COO Post-TDS Execution Checklist V0.1](docs/page-playbooks/DOCUMENT_REACH_COO_POST_TDS_EXECUTION_CHECKLIST_V0.1.md) 与 [User Approval Record V0.1](pages/documents/05_review/DOCUMENT_REACH_COO_POST_TDS_PROCESS_IMPROVEMENT_APPROVAL_V0.1.md) — 用户于2026-09-05批准把DOC-TDS Gate 2–9复盘固化为两页共享硬门槛，并授权启动DOC-REACH Gate 2；buyer-safe DTO、公开allowlist/denylist、Back/Forward、可移植哈希基线、生产等价验证、正确worktree身份及eligible/real fail-closed测试均已登记。该批准不启动DOC-COO Gate 2，不授权Gate 3或开发。
- [联合 Gate 1 总控提交 V0.3](pages/documents/05_review/DOCUMENT_CHILD_PAGES_GATE1_PROJECT_CONTROL_SUBMISSION_V0.3.md) — 用户于 2026-09-04 批准三页 Gate 1 并授权进入 Gate 2；该提交现为三页共同的 `USER_APPROVED / CLOSED_FOR_GATE1` 输入。六项定向修订已锁定：DOC-TDS multi-select/page type；DOC-REACH Global Audience/EU scope/UK boundary/ECHA Direct Answer blocker/query-only tag；hidden system source attribution；全站 Malaysia-origin Hold；buyer-value-only Meta Direction；自然 COO H1。
- [共享内部来源清单 V0.1](pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_INVENTORY_V0.1.csv) 与 [共享来源审计 V0.1](pages/documents/01_research/DOCUMENT_CHILD_PAGES_SHARED_SOURCE_AUDIT_V0.1.md) — 29 个现有文件、18 份 TDS、14 个型号，全部现有来源哈希匹配；不构成公开库存或可下载授权。
- DOC-TDS：[Approved Gate 1 Manifest V0.4](pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md)、[Gate 1 User Approval Closure V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE1_USER_APPROVAL_CLOSURE_V0.1.md)、[Revised Brief V0.3](docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.3.md)、[Gate 1 证据审计 V0.1](pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md)、[Claim Register V0.1](pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv)。
- DOC-REACH：[Approved Gate 1 Manifest V0.4](pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md)、[Gate 1 User Approval Closure V0.1](pages/documents/reach/05_review/DOC-REACH_GATE1_USER_APPROVAL_CLOSURE_V0.1.md)、[Revised Brief V0.3](docs/page-briefs/DOC-REACH_TITANIUM_DIOXIDE_REACH_BRIEF_V0.3.md)、[Gate 1 证据审计 V0.1](pages/documents/reach/01_research/DOC-REACH_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md)、[Claim Register V0.1](pages/documents/reach/01_research/DOC-REACH_GATE1_CLAIM_REGISTER_V0.1.csv)。
- DOC-COO：[Approved Gate 1 Manifest V0.4](pages/documents/certificate-of-origin/05_review/DOC-COO_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md)、[Gate 1 User Approval Closure V0.1](pages/documents/certificate-of-origin/05_review/DOC-COO_GATE1_USER_APPROVAL_CLOSURE_V0.1.md)、[Revised Brief V0.3](docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.3.md)、[Gate 1 证据审计 V0.1](pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md)、[Claim Register V0.1](pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_CLAIM_REGISTER_V0.1.csv)。
- [历史联合提交 V0.2](pages/documents/05_review/DOCUMENT_CHILD_PAGES_GATE1_PROJECT_CONTROL_SUBMISSION_V0.2.md) 与 [V0.1](pages/documents/05_review/DOCUMENT_CHILD_PAGES_GATE1_PROJECT_CONTROL_SUBMISSION_V0.1.md)，以及相应旧 Brief/Manifest，继续保留为 `HISTORICAL / SUPERSEDED_BY_V0.3`；研究、Claim Register 和 Evidence Hold 未被删除或改写。

三页 Gate 1均为`USER_APPROVED / CLOSED`，URL继续保持`PROVISIONAL_URL`。DOC-TDS与DOC-REACH均已通过Gate 9；DOC-REACH lifecycle=`READ_ONLY_QA_APPROVED`，指定依赖P1已关闭并保留Gate 10发布阻塞。DOC-COO成为下一串行页面。DOC-REACH Gate 10、部署、生产写入、发布、DNS和索引未授权。

## 5H.8A DOC-REACH Gate 8 External Development / Gate 9 Closed

- [Current Gate 9 Baseline Manifest V0.17](pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE9_BASELINE_MANIFEST_V0.17.md) — 当前唯一页面级生命周期指针；SHA-256=`F94C8C69E47252FF275BFAA16C24130DD64825DE828A481F917C54EE2A3D9FF4`；reviewed HEAD=`036ea7a8f838acd93ef2f68865b9d6683d123cff`；Gate 8=`IMPLEMENTATION_RETURN_ACCEPTED / CLOSED`，Gate 9=`DOC-REACH-G9-PCR-01 / PROJECT_CONTROL_REVIEW_PASS / CLOSED`，lifecycle=`READ_ONLY_QA_APPROVED`，Gate 10未授权。
- [Gate 8 Intake and Gate 9 Acceptance V0.1](pages/documents/reach/05_review/DOC-REACH_GATE8_IMPLEMENTATION_INTAKE_AND_GATE9_ACCEPTANCE_V0.1.md) — SHA-256=`5E9D02BD6E08B9D55C7D317B99E815716BD09D3A09B0ED0EA2C0856A59FF93B4`；记录立即审查、首轮P1发现、定向返修与关闭；`DOC-REACH-G9-P1-DEP-01=VERIFIED_FIXED / CLOSED`。44 files/323 tests、37/37 build、25/25 Playwright、八项指定依赖与证据哈希均PASS；APP-000 404及生产CMS/表单/隐私数据流继续作为Gate 10发布阻塞。
- [Gate 8/Gate 9 Controller Monitoring Mandate V0.1](pages/documents/reach/05_review/DOC-REACH_GATE8_GATE9_CONTROLLER_MONITORING_MANDATE_V0.1.md) — 记录用户原话`你负责跟踪开发的进度，并且审查Gate8 ，直到Gate9完成为止。`；小时轮询已被立即主动审查和定向返修取代，临时监控在Gate 9关闭后停止。
- D16实现链：`2d4c7013d7286c7a8b08614ea4b9c1d3b868bd93` → `4344bfeea7107699604072bea4b3eefe82a03e83` → `036ea7a8f838acd93ef2f68865b9d6683d123cff`，branch=`codex/doc-reach-gate8-evidence`，最终审查时worktree clean。旧pending client ID仅保留历史追溯，不代表当前状态。
- [Current Gate 8 Execution Manifest V0.15](pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE8_EXECUTION_MANIFEST_V0.15.md) — 保留为旧任务用量阻塞/自动恢复快照，当前指针由V0.16接管；SHA-256=`F8793E75DBB74CB813EBE7716EDCE8BF4B996496B04237642B0F413006902531`。
- [Gate 8 Execution Blocker and Automated Resume V0.1](pages/documents/reach/05_review/DOC-REACH_GATE8_EXECUTION_BLOCKER_AND_AUTOMATED_RESUME_V0.1.md) — 记录三种模型/同目录恢复尝试、显式Codex用量上限错误、账户窗口观测与自动续跑边界；无实现commit或证据返回，因此Gate 8/9均未虚假关闭。
- [Current Gate 8 Authorization Manifest V0.14](pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE8_AUTHORIZATION_MANIFEST_V0.14.md) — 保留为授权与初次移交快照，当前执行指针由V0.15接管；SHA-256=`226943C4E3C13F21D42B6171BA3A15492B893B0BCB01C2077E58F767468BE51A`。
- [Gate 8 and Gate 9 Authorization V0.1](pages/documents/reach/05_review/DOC-REACH_GATE7_HANDOFF_GATE8_AND_GATE9_AUTHORIZATION_V0.1.md) 与 [Gate 7 Handoff Closure V0.1](pages/documents/reach/05_review/DOC-REACH_GATE7_HANDOFF_CLOSURE_V0.1.md) — 记录用户原话`授权 Gate 8， 然后完成Gate9`；已将冻结包发送至`01My首页开发` task/thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`，即时状态=`active / inProgress`。Gate 9结果未预批准，须由D23独立只读验收。

- [Current Gate 7 Baseline Manifest V0.13](pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE7_BASELINE_MANIFEST_V0.13.md) — 保留为冻结Gate 7开发权威，当前生命周期指针由V0.14接管；SHA-256=`93F08D9F790137A86553BA932EF8C6E3F52504A66E7C646D507C8BDDF6A1850B`；Gate 7核心/最终验证=`137/150 PASS / 0 FAIL`，Gate 6回归=`135 PASS / 0 FAIL`。
- [Gate 7 Development Handoff Package V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md) 与 [Exact Source Payload V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_SOURCE_PAYLOAD_V0.1.json) — 锁定11模块真实文案、当前通用答案、四个官方来源、CONV-DOC `other`传输与买家可见`REACH Documentation`语义、hidden/system source attribution及`site_scope=tio2-my`。
- [Gate 7 Content/Component Mapping V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_CONTENT_COMPONENT_MAPPING_V0.1.md)、[Route/Prefill/State Contract V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_ROUTE_PREFILL_STATE_CONTRACT_V0.1.md)、[SEO/GEO/Schema/Social Contract V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md)、[Responsive/Accessibility/Interaction Acceptance V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_RESPONSIVE_ACCESSIBILITY_INTERACTION_ACCEPTANCE_V0.1.md) 与 [Site-Scope/Shared-Dependency Contract V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_SITE_SCOPE_SHARED_DEPENDENCY_CONTRACT_V0.1.md) — 构成开发必须逐项消费的五份专门合同。
- [Gate 8 Implementation / Gate 9 Acceptance V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_GATE8_IMPLEMENTATION_GATE9_ACCEPTANCE_V0.1.md)、[Gate 7 Validation V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_VALIDATION_V0.1.md)、[Project-Control Review Submission V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md) 与 [Project-Control Closure V0.1](pages/documents/reach/06_handoff/DOC-REACH_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) — 11个未来Gate 8工作包、Gate 9证据矩阵及Gate 7关闭依据；P0/P1/必改P2=`0/0/0`。
- [Gate 6 User Decision and Gate 7 Authorization V0.1](pages/documents/reach/05_review/DOC-REACH_GATE6_USER_DECISION_AND_GATE7_AUTHORIZATION_V0.1.md) — 记录用户原话`保留当前通用答案；授权 Gate 7。`，区分内容决定与阶段授权；Gate 8–10未授权。
- [Current Gate 6 Baseline Manifest V0.12](pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE6_BASELINE_MANIFEST_V0.12.md) — 保留为已批准Gate 6审查权威，当前生命周期指针由V0.13接管；SHA-256=`9CDED213A4B259ED9E52824811779837C737640CA755AA3362399C1F7197557A`。
- [Gate 6 Audit and Acceptance V0.1](pages/documents/reach/05_review/DOC-REACH_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md)、[Fresh Validation V0.1](pages/documents/reach/05_review/DOC-REACH_GATE6_FRESH_VALIDATION_V0.1.md) 与 [Project-Control Closure V0.1](pages/documents/reach/05_review/DOC-REACH_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md) — 页面身份、关键词、11模块、EU/GB/NI边界、官方源、SEO/GEO/Schema、Hub/CONV-DOC、7张视觉资产、响应式与focus均PASS；`135 PASS / 0 FAIL`，P0/P1/必改P2=`0/0/0`。
- [Gate 5 User Approval Closure V0.1](pages/documents/reach/05_review/DOC-REACH_GATE5_USER_APPROVAL_CLOSURE_V0.1.md)、[Current Gate 5 Approved Manifest V0.11](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE5_APPROVED_MANIFEST_V0.11.md)、[Gate 6 Activation Record V0.1](pages/documents/reach/05_review/DOC-REACH_GATE6_ACTIVATION_RECORD_V0.1.md) 与 [Brief Status Overlay V0.1](pages/documents/reach/04_planning/DOC-REACH_PAGE_BRIEF_STATUS_OVERLAY_V0.1.md) — 记录用户原话`批准 Gate 5 并授权 Gate 6`；不回写历史Brief。
- [Evidence Gap User Decision Register V1.0](docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md) — `EG-006=USER_APPROVED_CURRENT_BASELINE_ONLY / CLOSED`：当前通用Buyer Clean答案继续作为公开权威；更强公司/EEA法律主体/供应安排覆盖命题不进入当前基线，未来纳入需要新的范围决定与适当证据。

- [Historical Gate 5 Review Manifest V0.10](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE5_REVIEW_MANIFEST_V0.10.md)、[Gate 5 Project-Control Submission V0.1](pages/documents/reach/05_review/DOC-REACH_GATE5_PROJECT_CONTROL_SUBMISSION_V0.1.md)、[Full Visual Specification V0.1](pages/documents/reach/04_planning/gate5/DOC-REACH_GATE5_FULL_VISUAL_SPECIFICATION_V0.1.md)、[Validation V0.1](pages/documents/reach/04_planning/gate5/DOC-REACH_GATE5_VALIDATION_V0.1.md) 与 [Independent Review Resolution V0.1](pages/documents/reach/05_review/DOC-REACH_GATE5_INDEPENDENT_REVIEW_RESOLUTION_V0.1.md) — 用户批准前的阶段指针；7张完整/状态资产、11模块、默认FAQ关闭、真实FAQ focus、真实request-route-unavailable、零横向溢出与1440/768/390全部44px target均PASS。Desktop target、焦点断言、Global Chrome清单、Mobile Menu空白尾和原生2×问题均已关闭；Gate 5现=`USER_APPROVED / CLOSED`，当前状态由V0.12接管。
- [Current Gate 4 Approved Manifest V0.9](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE4_APPROVED_MANIFEST_V0.9.md)、[Gate 4 User Approval Closure V0.1](pages/documents/reach/05_review/DOC-REACH_GATE4_USER_APPROVAL_CLOSURE_V0.1.md) 与 [Gate 5 Activation Record V0.1](pages/documents/reach/05_review/DOC-REACH_GATE5_ACTIVATION_RECORD_V0.1.md) — 用户于2026-09-05明确批准Gate 4并授权启动Gate 5；Direction A `Regulatory Evidence Ledger`现为已批准上游，Gate 5输出尚未预批准。
- [Gate 4 Visual Direction A V0.1](pages/documents/reach/04_planning/gate4/DOC-REACH_GATE4_VISUAL_DIRECTION_A_V0.1.md)、[Gate 4 Validation V0.1](pages/documents/reach/04_planning/gate4/DOC-REACH_GATE4_VALIDATION_V0.1.md)、[Historical Gate 4 Review Manifest V0.8](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE4_REVIEW_MANIFEST_V0.8.md) 与 [Superdesign preview](https://p.superdesign.dev/draft/02c20623-7f87-4edf-b87e-24ef2137d028) — Gate 4已关闭；Superdesign同一草稿v1为批准方向，v3为当前Gate 5候选，服务器回读与本地源SHA-256一致。
- [Historical Current Gate 3 Approved Manifest V0.7](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE3_APPROVED_MANIFEST_V0.7.md) 与 [Gate 3 User Approval Closure V0.1](pages/documents/reach/05_review/DOC-REACH_GATE3_USER_APPROVAL_CLOSURE_V0.1.md) — Gate 3仍为已批准上游基线，但V0.7已由V0.8接管当前阶段指针。
- [Historical Gate 3 Review Manifest V0.6](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE3_REVIEW_MANIFEST_V0.6.md) — 用户批准前的提交快照，已由V0.7接管。
- [Gate 3 Project-Control Submission V0.1](pages/documents/reach/05_review/DOC-REACH_GATE3_PROJECT_CONTROL_SUBMISSION_V0.1.md)、[Responsive Wireframe Specification V0.1](pages/documents/reach/04_planning/gate3/DOC-REACH_GATE3_WIREFRAME_SPECIFICATION_V0.1.md) 与 [Validation V0.1](pages/documents/reach/04_planning/gate3/DOC-REACH_GATE3_VALIDATION_V0.1.md) — 1440/768/390、Mobile Menu和关键状态5张资产已完成；11模块、无横向溢出、44px触控、可选Source updated及request fail-closed均PASS，P0/P1=`0/0`；Review ID=`DOC-REACH-G3-PCR-01`。
- [Full Buyer Clean Copy V0.1](pages/documents/reach/04_planning/DOC-REACH_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md)、[Gate 2 Approval and Gate 3 Activation V0.1](pages/documents/reach/05_review/DOC-REACH_GATE2_FULL_COPY_APPROVAL_AND_GATE3_ACTIVATION_V0.1.md) 与 [Gate 2 Approved Manifest V0.5](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE2_APPROVED_MANIFEST_V0.5.md) — 用户已批准11模块完整正文，`FULL_COPY_AND_MODULE_ORDER_CONFIRMED=YES`，Gate 2关闭并授权Gate 3。
- [Historical Gate 2 Full-Copy Review Manifest V0.4](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE2_REVIEW_MANIFEST_V0.4.md) 与 [Full-Copy Project-Control Submission V0.1](pages/documents/reach/05_review/DOC-REACH_GATE2_FULL_COPY_PROJECT_CONTROL_SUBMISSION_V0.1.md) — 用户批准前快照，已由V0.5/V0.6接管。
- [Approved Skeleton V0.3](pages/documents/reach/04_planning/DOC-REACH_GATE2_CONTENT_SKELETON_V0.3.md)、[Skeleton Approval Closure V0.1](pages/documents/reach/05_review/DOC-REACH_GATE2_SKELETON_V0.3_USER_APPROVAL_CLOSURE_V0.1.md) 与 [Skeleton Approved Manifest V0.3](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE2_SKELETON_APPROVED_MANIFEST_V0.3.md) — 用户`APPROVE_WITH_MINOR_PRECISION_FIXES`的四项条件均已落实，Skeleton=`USER_APPROVED / CLOSED`。
- [V0.2 Review Resolution V0.1](pages/documents/reach/05_review/DOC-REACH_GATE2_SKELETON_V0.2_REVIEW_RESOLUTION_V0.1.md) 与 [Regulatory Scope / OR Evidence Addendum V0.2](pages/documents/reach/01_research/DOC-REACH_GATE2_REGULATORY_SCOPE_OR_EVIDENCE_ADDENDUM_V0.2.md) — Northern Ireland、完整generic OR、applicable-registration与one-tonne qualifier均经HSE/ECHA资料核验并关闭。
- [Historical Gate 2 Review Manifest V0.2](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE2_REVIEW_MANIFEST_V0.2.md)、[Historical Skeleton V0.2](pages/documents/reach/04_planning/DOC-REACH_GATE2_CONTENT_SKELETON_V0.2.md) 与 [Historical Submission V0.2](pages/documents/reach/05_review/DOC-REACH_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.2.md) — 条件批准前快照，已由V0.3/V0.4接管。
- [Historical Gate 2 Review Manifest V0.1](pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE2_REVIEW_MANIFEST_V0.1.md)、[Historical Skeleton V0.1](pages/documents/reach/04_planning/DOC-REACH_GATE2_CONTENT_SKELETON_V0.1.md) 与 [Historical Submission V0.1](pages/documents/reach/05_review/DOC-REACH_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.1.md) — 不回写历史。
- [Gate 2 Activation Record V0.1](pages/documents/reach/05_review/DOC-REACH_GATE2_ACTIVATION_RECORD_V0.1.md) — 记录用户原话`可以。`、DOC-TDS完成后的串行指针推进及授权边界。

Full Copy V0.1回答一般EU/EEA采购核验问题，区分Great Britain与Northern Ireland，可解释generic OR角色，但不主张named-entity OR关系、公司/Grade覆盖、注册号或吨位。用户决定保留当前通用答案，因此更强命题`Titanium dioxide supplied by IKHLAS TITANIUM (MALAYSIA) SDN. BHD. is covered by an applicable EU REACH registration for the named legal entity and supply arrangement.`不进入当前基线；它未被永久判定为不真实，未来纳入仍需新的范围决定与适当证据。Gate 8–10未授权。

## 5H.9 DOC-TDS Gate 9 只读验收通过

- [Current Gate 9 Baseline Manifest V0.3](pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) — 当前唯一页面阶段指针；SHA-256=`D5AF2E7C91A5DF35B807F3DEDF5D440BC6F7BA0C3FE9420BA0D7A7EB68A5D212`；accepted commit=`d1b15e253b1202d2e4639646845c7ca8155104a8`，lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9=`DOC-TDS-G9-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`，open findings=`0/0/0`。
- [Gate 9 Read-Only QA Closure V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — SHA-256=`6D999BFCA06B100E29A8A53AABFF6BCE5920D8A42ED9731CB8FB6DB757CE00EF`；关闭四项原finding，并锁定Gate 10与发布边界。
- [Gate 9 Targeted Re-Review Audit V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE9_TARGETED_REREVIEW_AUDIT_V0.1.md) — SHA-256=`1121B692252127B99AE73BDF6300072E69E9F7E1A55C027B8A3619EE6561C294`；记录提交完整性、内容/视觉哈希、focused测试、build、九宽度、Axe、公开源负扫、Back/Forward与CONV-DOC预填的独立证据。
- [Historical Current Gate 9 Review Manifest V0.2](pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE9_REVIEW_MANIFEST_V0.2.md) — SHA-256=`78B8EF562812D26D7618D9DEC74E3F43644C6D8AEF2BCE7C473E5C32931E508A`；保留为返修开发中快照，已由Current Gate 9 Baseline Manifest V0.3接管。
- [Correction Dispatch Authorization V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE9_CORRECTION_DISPATCH_AUTHORIZATION_V0.1.md) — SHA-256=`E5C8B0CBEE792C53D5608AF7330A2490D6DF425B9F30DF6915B1B4320CE18633`；记录用户原话`批准`、四项定向返修范围、冻结边界、接收任务及发送后`active / inProgress`状态。
- [Historical Current Gate 9 Review Manifest V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE9_REVIEW_MANIFEST_V0.1.md) — SHA-256=`105BD2C1CC94E067C83FB732B43461775AE64F69134E04966C09D3CA397661E4`；保留为用户批准返修前的不可变审查快照，已由V0.2接管当前指针。
- [Gate 9 Read-Only QA Audit V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE9_READ_ONLY_QA_AUDIT_V0.1.md) — SHA-256=`19F33EB13140F3DD5E436B5D11987561104EEAB07CA8585218759A855A252C6A`；记录独立测试、build、运行态、响应式、无障碍、CONV-DOC预填、公开源扫描和视觉对照证据。
- [Gate 9 Project-Control Return V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE9_PROJECT_CONTROL_RETURN_V0.1.md) — SHA-256=`1C50A2D8904FBB72D72D9B127C404A743A2FBD15770091A55DFF334AAF5C5C8E`；历史返修要求和最小复验范围；四项要求现均已关闭。
- [Gate 8 Development Completion Intake Record V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE8_DEVELOPMENT_COMPLETION_INTAKE_RECORD_V0.1.md) — SHA-256=`AC65FA5431AE616C0EC86D8EEE3F26019EE40230E64A01164DA08E5CB3B11451`；锁定实际实现worktree、branch、commit、提交范围及开发方证据入口。
- [Historical Current Gate 8 Handoff Manifest V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_CURRENT_GATE8_HANDOFF_MANIFEST_V0.1.md) — SHA-256=`02D71F4FE8ABC2A11210BD9568324EC9E6E43A6B30AAA013E7D3F287C6550C8A`；保留为Gate 8授权与接收任务记录，当前页面级指针已由Gate 9 Baseline Manifest V0.3接管。
- [Gate 8 User Authorization and Handoff Record V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE8_USER_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md) — SHA-256=`2B080B002958B08BCF0D47845FE1CD53048B93C97270C8130F608ABE490B8349`；记录用户原话`授权执行Gate8`、授权范围、接收任务、完整authority hashes、开发返回要求与Gate 9/10边界。D23未访问或修改D16。

- [Gate 7 Approved Baseline Manifest V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_CURRENT_GATE7_BASELINE_MANIFEST_V0.1.md) — 保留为实现与Gate 9复验的冻结合同权威；SHA-256=`0EBC11890FA111024A0EB9A3E91C752DFBBA128EA1D9A18DB784CD939B456727`；其中Gate 8–10状态为移交前快照，当前生命周期与进度以Gate 9 Baseline Manifest V0.3为准。
- [Gate 7 Development Handoff Package V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md) 与 [Exact Source Payload V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_SOURCE_PAYLOAD_V0.1.json) — 锁定十模块真实文案、三种文件类型、14个Grade、single-primary-Grade与multi-document行为。
- [Content/Component Mapping V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_CONTENT_COMPONENT_MAPPING_V0.1.md)、[Route/Prefill/State Contract V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_ROUTE_PREFILL_STATE_CONTRACT_V0.1.md) 与 [SEO/GEO/Schema/Social Contract V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md) — 锁定组件消费、CONV-DOC路由/预填/来源归因、失败关闭及机器可读边界。
- [Responsive/A11y/Interaction Acceptance V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_RESPONSIVE_ACCESSIBILITY_INTERACTION_ACCEPTANCE_V0.1.md)、[Site-Scope/Shared Dependency Contract V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_SITE_SCOPE_SHARED_DEPENDENCY_CONTRACT_V0.1.md) 与 [Gate 8 Implementation / Gate 9 Acceptance V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_GATE8_IMPLEMENTATION_GATE9_ACCEPTANCE_V0.1.md) — 覆盖九个验收宽度、可访问性、共享Chrome/Legal、`site_scope=tio2-my`隔离及未来实现/只读验收矩阵。
- [Gate 7 Validation V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_VALIDATION_V0.1.md)、[Project-Control Submission V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md) 与 [Project-Control Closure V0.1](pages/documents/tds-sds-coa/06_handoff/DOC-TDS_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) — Gate 7最终验证=`103 PASS / 0 FAIL`；P0/P1/必改P2=`0/0/0`；保留Gate 6回归=`109 PASS / 0 FAIL`。
- [Gate 7 Execution Plan](docs/superpowers/plans/2026-09-05-doc-tds-gate7-handoff.md) — 本次授权范围、执行任务与验证边界。

- [Gate 6 Approved Upstream Manifest V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE6_BASELINE_MANIFEST_V0.1.md) — 保留为Gate 6批准上游；SHA-256=`C3FE6280B01D9A7AF845A88EB439CEF1B19E775050BA5FBD4B1FF6C413182713`；其中Gate 7–10状态为当时快照，当前页面状态以Gate 9 Baseline Manifest V0.3为准。
- [Gate 6 Audit and Acceptance V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md)、[Fresh Validation V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE6_FRESH_VALIDATION_V0.1.md) 与 [Project-Control Closure V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE6_PROJECT_CONTROL_CLOSURE_V0.1.md) — 页面身份、关键词、十模块、Buyer Clean、SEO/GEO/Schema、Hub/CONV-DOC合同、八张视觉资产和响应式/焦点检查均通过；`109 PASS / 0 FAIL`，P0/P1/必改P2=`0/0/0`，6项后续阶段控制已登记。
- [Page Brief Status Overlay V0.1](pages/documents/tds-sds-coa/04_planning/DOC-TDS_PAGE_BRIEF_STATUS_OVERLAY_V0.1.md) — 不改写已批准Brief V0.3，只把其中的提交时状态归一到Gate 1–5关闭、Gate 6通过、Gate 7未授权。
- [Gate 5 User Approval Closure V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE5_USER_APPROVAL_CLOSURE_V0.1.md) 与 [Current Gate 5 Approved Manifest V0.2](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE5_APPROVED_MANIFEST_V0.2.md) — 记录用户原话“批准 Gate 5，并授权启动 Gate 6。”；Superdesign v4及8张资产=`USER_APPROVED / CLOSED`。

- [Historical Gate 5 Review Manifest V0.1](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE5_REVIEW_MANIFEST_V0.1.md) — 用户批准前审核指针，现由Gate 5 Approved Manifest V0.2与Current Gate 6 Manifest V0.1接管。
- [Gate 5 Full Visual Specification V0.1](pages/documents/tds-sds-coa/04_planning/gate5/DOC-TDS_GATE5_FULL_VISUAL_SPECIFICATION_V0.1.md)、[Validation V0.1](pages/documents/tds-sds-coa/04_planning/gate5/DOC-TDS_GATE5_VALIDATION_V0.1.md) 与 [Project-Control Submission V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE5_PROJECT_CONTROL_SUBMISSION_V0.1.md) — Desktop/Tablet/Mobile完整页、Mobile Menu、三状态板、两种真实选择状态与FAQ展开全部PASS；P0/P1/P2=0，`DOC-TDS-G5-R01=VERIFIED_FIXED / CLOSED`。

- [Approved Gate 4 Stage Manifest V0.2](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE4_APPROVED_MANIFEST_V0.2.md) — Gate 4方向A=`USER_APPROVED / CLOSED_FOR_GATE4`的阶段基线；其嵌入的后续Gate状态为当时快照，当前页面状态以Gate 9 Baseline Manifest V0.3为准。
- [Gate 4 User Approval Closure V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE4_USER_APPROVAL_CLOSURE_V0.1.md) — 记录用户原话“批准 Gate 4，并授权启动 Gate 5。”、批准对象、适用范围与后续边界。

- [Historical Gate 4 Review Manifest V0.1](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE4_REVIEW_MANIFEST_V0.1.md) — 用户批准前审核指针，现由Approved Manifest V0.2接管。
- [Gate 4 Visual Direction A V0.1](pages/documents/tds-sds-coa/04_planning/gate4/DOC-TDS_GATE4_VISUAL_DIRECTION_A_V0.1.md)、[Validation V0.1](pages/documents/tds-sds-coa/04_planning/gate4/DOC-TDS_GATE4_VALIDATION_V0.1.md) 与 [Project-Control Submission V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE4_PROJECT_CONTROL_SUBMISSION_V0.1.md) — 5张视觉/状态资产、10模块、生产Logo、品牌色、三断点、0横向溢出、44px目标与交互合同均PASS；P0/P1/P2=0。
- Superdesign项目=`f0b8ff8d-3fde-4581-b3f7-2ea4a63a4cc1`，draft=`5688ee2b-6554-4a77-a724-b79677fc1592`。AI生成因`insufficient_credits`两次阻塞后按正式import fallback完成；v1为忠实基线，v3为移动端回归修正后的当前方向。

- [Approved Gate 3 Stage Manifest V0.3](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE3_BASELINE_MANIFEST_V0.3.md) — 完整纠正后的Gate 3阶段基线=`USER_APPROVED / CLOSED`；其嵌入的后续Gate状态为当时快照，当前页面状态以Gate 9 Baseline Manifest V0.3为准。V0.2保留为用户批准前提交指针，V0.1保留为修正前历史指针。
- [Gate 3 Responsive Wireframe Specification V0.1](pages/documents/tds-sds-coa/04_planning/gate3/DOC-TDS_GATE3_WIREFRAME_SPECIFICATION_V0.1.md)、[Validation V0.1](pages/documents/tds-sds-coa/04_planning/gate3/DOC-TDS_GATE3_VALIDATION_V0.1.md) 与 [Project-Control Submission V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE3_PROJECT_CONTROL_SUBMISSION_V0.1.md) — 1440 Desktop、768 Tablet、390 logical @2x Mobile、Mobile Menu open与三状态板共5张资产均PASS；10模块、3文件checkbox、14 Grades、5 FAQ、3 Related Paths、4步骤、0横向溢出、44px目标及Buyer Clean扫描全部通过，P0/P1=0。
- [Hero CTA Targeted Correction V0.1](pages/documents/tds-sds-coa/04_planning/gate3/DOC-TDS_GATE3_HERO_CTA_TARGETED_CORRECTION_V0.1.md) — `DOC-TDS-G3-C05=VERIFIED_FIXED / CLOSED`；先以回归断言复现Hero锚点偏差，再统一三处主CTA的接收路由/预填同步并复验PASS；5张Raster资产重新生成后哈希不变。
- [Gate 3 User Approval Closure V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE3_USER_APPROVAL_CLOSURE_V0.1.md) — 记录用户原话“现在通过Gate3，授权启动Gate4”、完整批准范围、五张资产哈希、Gate 3关闭及Gate 4启动授权。
- [Gate 3 Source Bundle V0.1](pages/documents/tds-sds-coa/04_planning/gate3/DOC-TDS_GATE3_SOURCE_BUNDLE_V0.1.md) — 历史记录Gate 3当时的Superdesign项目、`gpt-5.6-sol`选择与两份Production Logo上传；当时draft生成因账户`out of credits`在创建前被阻止，Gate 3正式证据由确定性本地HTML/CSS与浏览器渲染完成。Gate 4现有draft及版本历史以Gate 4 current review Manifest为准。

- [Approved Gate 2 Upstream Manifest V0.5](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.5.md) — 保留为Gate 2批准上游；完整Buyer Clean Copy V0.3=`USER_APPROVED / CLOSED_AFTER_EDITORIAL_FIXES`，`FULL_COPY_AND_MODULE_ORDER_CONFIRMED=YES`。页面级current指针已由Gate 3 Manifest V0.3接管。
- [Gate 2 Content Skeleton V0.2](pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.2.md) 与 [Skeleton Project-Control Submission V0.2](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.2.md) — 用户已批准并关闭骨架 checkpoint；十模块结构、两句 Direct Answer、request-context Grade 标题、Meta 修订及 fail-closed controls 已锁定。
- [Skeleton User Approval and Gate 3 Prerequisite Authorization V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_SKELETON_USER_APPROVAL_AND_GATE3_PREREQUISITE_AUTHORIZATION_V0.1.md) — Review ID `DOC-TDS-G2-SKELETON-V02-USER-APPROVAL-01`；记录用户原话 `同意gate2 ，授权Gate3.`。Gate 3 授权在完整文案获批后自动生效，当前不允许提前制作线框图。
- [Approved Gate 2 Full Buyer Clean Copy V0.3](pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md) — 当前批准正文；用户决定=`APPROVE_WITH_MINOR_EDITORIAL_FIXES`，三项必改与一项可选润色均已落实，十模块、SEO/GEO、CTA、single-primary-Grade、multi-document 与 Evidence Controls 全部锁定。
- [Full-Copy Approval and Gate 3 Activation V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_FULL_COPY_APPROVAL_AND_GATE3_ACTIVATION_V0.1.md) — Review ID `DOC-TDS-G2-FULL-COPY-V03-USER-APPROVAL-01`；记录 `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=YES`、Gate 2 关闭及既有 Gate 3 授权转为 `READY_TO_START`；本记录未生成或批准线框。
- [Historical Full Buyer Clean Copy V0.2](pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md)、[Historical Full-Copy Submission V0.2](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_FULL_COPY_PROJECT_CONTROL_SUBMISSION_V0.2.md) 与 [Historical Gate 2 Manifest V0.4](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.4.md) — 条件批准输入完整保留，由 V0.3/V0.5 接管当前 authority。
- [Historical Full Buyer Clean Copy V0.1](pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md)、[Historical Full-Copy Submission V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_FULL_COPY_PROJECT_CONTROL_SUBMISSION_V0.1.md) 与 [Historical Gate 2 Manifest V0.3](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.3.md) — 完整保留为 `HISTORICAL / SUPERSEDED_BY_V0.2_OR_V0.4`，不再是当前审批候选。
- [Historical pre-approval Gate 2 Baseline Manifest V0.2](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.2.md) — 保留为骨架批准前的历史指针，不再是当前控制。
- [Historical Gate 2 Baseline Manifest V0.1](pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.1.md)、[Historical Content Skeleton V0.1](pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.1.md) 与 [Historical Submission V0.1](pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.1.md) — 全部保留为历史，不再是当前审批候选。

DOC-TDS Gate 2–9已关闭，accepted correction commit=`d1b15e253b1202d2e4639646845c7ca8155104a8`，lifecycle=`READ_ONLY_QA_APPROVED`。DOC-REACH Gate 1–7已关闭并移交；Gate 8新D16 worktree任务=`Implement DOC-REACH Gate 8`仍在setup，pending client ID=`client-new-thread:5b6d8314-5831-41d7-8780-007e7642877b`，Controller持续跟踪、Gate 8证据审查、定向返修与Gate 9复验责任保持至Gate 9完成；Gate 9已授权并等待完整Gate 8证据。DOC-COO尚未启动Gate 2文案。DOC-REACH Gate 10、部署、生产写入、发布、DNS和索引未授权。

## 5I. About TiO2 Malaysia Gate 7 Handoff / Gate 9 QA

- [Gate 9 Project-Control Closure V0.1](pages/about-contact/05_review/ABOUT-001_GATE9_PROJECT_CONTROL_CLOSURE_V0.1.md) — `ABOUT-001-G9-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；标准 lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；Gate 10 未授权。
- [Gate 7 Project-Control Closure V0.1](pages/about-contact/05_review/ABOUT-001_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md) — `ABOUT-001-G7-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`HANDED_OFF`；Gate 8=`AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`。
- [Gate 7 Manifest V0.2](pages/about-contact/06_handoff/ABOUT-001_GATE7_MANIFEST_V0.2.md) — 当前批准交付包根文件；V0.2 媒体治理覆盖继承的 V0.1 非媒体条款。
- [Gate 7 Media Asset Handoff V0.1](pages/about-contact/06_handoff/ABOUT-001_GATE7_MEDIA_ASSET_HANDOFF_V0.1.md) — 12 个正文媒体 Asset keys、三种派生方式、ALT、scope 与 OG/Schema image 规则。
- [Gate 7 Project-Control Review Submission V0.2](pages/about-contact/06_handoff/ABOUT-001_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md) — PCR-02 总控复审输入与历史提交状态。
- [Gate 7 Fresh Validation V0.2](pages/about-contact/06_handoff/ABOUT-001_GATE7_FRESH_VALIDATION_V0.2.md) — 九份当前文件、冻结 PNG 与状态边界的复审前验证记录。

ABOUT-001 外部实现已通过 Gate 9 只读验收。当前标准生命周期为 `READ_ONLY_QA_APPROVED`，Gate 9 disposition 为 `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。开放阻塞仅为 `/applications/`、`/documents/`、`/request-documents/`、`/request-a-quote/`、`/contact/` 未就绪；Gate 10、部署、DNS、发布与索引未授权。本策划任务未修改 PNG、正文、交付合同、外部实现或 `D:\16Wordpress_nextjs`。

## 5J. CONV-DOC Request Documents Gate 9 QA

- [Gate 5 V0.6 User Reconfirmation V0.1](pages/conversion/05_review/CONV-DOC_GATE5_V0.6_USER_RECONFIRMATION_V0.1.md) — 用户于 2026-09-04 再次确认当前 Gate 5 V0.6 视觉版本；既有 `APPROVED / CLOSED` 状态与全部证据/发布边界不变。
- [Current Gate 9 Baseline Manifest V0.4](pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md) — 当前唯一lifecycle/Gate 9与release-control指针；Web3Forms Free browser-direct、共享Key接线、provider accepted测试与Privacy实际数据流parity已验证。邮箱实际出现仍待用户确认；生产WordPress应用/读回及Gate 10保持开放。
- [Previous Gate 9 Baseline Manifest V0.3](pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md) — `SUPERSEDED_BY_V0.4 / HISTORICAL`；其中server-only active描述不得再控制当前runtime。
- [Previous Gate 9 Baseline Manifest V0.2](pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.2.md) — `SUPERSEDED_BY_V0.3 / HISTORICAL`。
- [Previous Gate 9 Baseline Manifest V0.1](pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.1.md) — `SUPERSEDED / HISTORICAL`。
- [Gate 9 Project-control Decision V0.1](pages/conversion/05_review/CONV-DOC_GATE9_PROJECT_CONTROL_DECISION_V0.1.md) — `CONV-DOC-G9-TARGETED-REREVIEW-PCR-01` 已接受；`DOC-G9-P1-01 = VERIFIED_FIXED / CLOSED`。
- [Gate 9 Targeted Re-review Evidence V0.1](pages/conversion/05_review/CONV-DOC_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md) — PRODUCT V0.3、M-2377 正负例、手工输入、production build/browser 与 site-scope 证据。
- [Gate 9 Targeted Finding Closure V0.1](pages/conversion/05_review/CONV-DOC_GATE9_TARGETED_FINDING_CLOSURE_V0.1.md) — 历史提交时的关闭建议；最终关闭状态以项目总控决定和当前 Manifest 为准。
- [Gate 9 Targeted Project-control Resubmission V0.1](pages/conversion/05_review/CONV-DOC_GATE9_TARGETED_PROJECT_CONTROL_RESUBMISSION_V0.1.md) — 已被项目总控接受的定向复审提交。
- [Gate 8 Development Completion Record V0.1](pages/conversion/05_review/CONV-DOC_GATE8_DEVELOPMENT_COMPLETION_RECORD_V0.1.md) — Gate 8 实现与验证来源。
- [Gate 10 WordPress Record Release Blocker Evidence V0.1](pages/conversion/05_review/CONV-DOC_GATE10_WORDPRESS_RECORD_RELEASE_BLOCKER_EVIDENCE_V0.1.md) — HOME/MARKET commit `616193f` production probe 记录 `/request-documents/` 因缺少 `tio2-my` WordPress singleton 返回 500；fail closed 保持，blocker 开放。
- [Gate 10 WordPress Singleton Local Verification Update V0.1](pages/conversion/05_review/CONV-DOC_GATE10_WORDPRESS_SINGLETON_LOCAL_VERIFICATION_UPDATE_V0.1.md) — commit `fae58bf0a846e67cb94d9a5dd75b96580ee30a2b`；本地 scoped singleton、WPGraphQL payload 与 canonical route 已验证，production WordPress application/evidence 仍为 blocker。
- [Gate 10 Web3Forms Receiver Local Implementation Update V0.1](pages/conversion/05_review/CONV-DOC_GATE10_WEB3FORMS_RECEIVER_LOCAL_IMPLEMENTATION_UPDATE_V0.1.md) — commit `782e7fe1945071d293851bd6e4b43cb90d98764b`；历史server-only adapter证据，已被Free browser-direct runtime决定及V0.4 Manifest取代，不是当前runtime authority。

`CONV-DOC-G9-TARGETED-REREVIEW-PCR-01 = PROJECT_CONTROL_ACCEPTED`；`DOC-G9-P1-01 = VERIFIED_FIXED / CLOSED`。当前 lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`。Web3Forms Free browser-direct、共享Key接线、一次provider accepted测试和Privacy实际数据流parity已验证；邮箱实际出现仍待用户外部确认。生产WordPress application/read-back、生产Web3Forms账户/Key放置/recipient binding证据及Gate 10发布/robots/sitemap/DNS/indexing授权继续作为门禁。不得跨scope fallback；Gate 10未授权。本次治理同步未修改D16代码。

## 5K. CONV-RFQ Request a Quote Gate 7 Handoff / Gate 8 External Development

当前 handed-off authority 与治理记录：

- [CONV-RFQ Page Index](pages/conversion/request-a-quote/README.md)
- [Gate 8 Receiver Environment Blocker Record V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE8_RECEIVER_ENVIRONMENT_BLOCKER_RECORD_V1.0.md) — commit `616193f` 协调探针 route=200、receiver unavailable；release blocker 继续开放，不构成 Gate 9 准入。
- [Gate 8 User Authorization and Handoff Record V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE8_USER_AUTHORIZATION_AND_HANDOFF_RECORD_V1.0.md)
- [Gate 7 Project-control Closure V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE7_PROJECT_CONTROL_CLOSURE_V1.0.md)
- [Gate 7 Manifest V1.1 — Current Handed-off Authority](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.1.md)
- [Gate 7 PCR-02 Project-control Review Submission V1.1](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.1.md)
- [Gate 7 PCR-01 Project-control Return V1.0](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_PROJECT_CONTROL_RETURN_V1.0.md)
- [Gate 7 Handoff Package V1.1](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_HANDOFF_PACKAGE_V1.1.md)
- [Gate 7 CMS/API/Component Mapping V1.1](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.1.md)
- [Gate 7 Acceptance and Blockers V1.1](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_ACCEPTANCE_AND_BLOCKERS_V1.1.md)
- [Gate 7 Fresh Validation V1.1](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_FRESH_VALIDATION_V1.1.md)
- [Gate 7 V1.0 Exact Field/State Contracts](pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_CMS_API_COMPONENT_MAPPING_V1.0.md)
- [Gate 7 User Authorization Record V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE7_USER_AUTHORIZATION_RECORD_V1.0.md)
- [Gate 6 Project-control Closure V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_PROJECT_CONTROL_CLOSURE_V1.0.md)
- [Gate 6 Current Baseline Manifest V1.2](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_CURRENT_BASELINE_MANIFEST_V1.2.md)
- [Gate 6 PCR-01 Project-control Return V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_PROJECT_CONTROL_RETURN_V1.0.md)
- [Gate 6 Authority and Precedence Manifest V1.1](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_AUTHORITY_AND_PRECEDENCE_MANIFEST_V1.1.md)
- [Gate 6 Audit and Acceptance V1.1](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_AUDIT_AND_ACCEPTANCE_V1.1.md)
- [Gate 6 SEO/GEO/Schema Contract V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_SEO_GEO_SCHEMA_CONTRACT_V1.0.md)
- [Gate 6 CMS/API/Component Field Inventory V1.1](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_CMS_API_COMPONENT_FIELD_INVENTORY_V1.1.md)
- [Gate 6 Responsive/Accessibility/Conversion Acceptance V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_RESPONSIVE_ACCESSIBILITY_CONVERSION_ACCEPTANCE_V1.0.md)
- [Gate 6 Gate 7–9 Delivery Acceptance V1.1](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_GATE7_9_DELIVERY_ACCEPTANCE_V1.1.md)
- [Gate 6 Fresh Validation V1.1](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE6_FRESH_VALIDATION_V1.1.md)
- [Gate 5 User Approval Closure V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE5_USER_APPROVAL_CLOSURE_V1.0.md)
- [Gate 5 Approved Baseline Manifest V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md)
- [Gate 5 Full Visual Specification V1.0](pages/conversion/request-a-quote/04_planning/visual-designs/CONV-RFQ_GATE5_FULL_VISUAL_SPEC_V1.0.md)
- [Gate 5 Full Visual Validation V1.0](pages/conversion/request-a-quote/04_planning/visual-designs/CONV-RFQ_GATE5_FULL_VISUAL_VALIDATION_V1.0.md)
- [Desktop 1440 Buyer Clean](pages/conversion/request-a-quote/04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_DESKTOP_1440_BUYER_CLEAN_V1.0.png)
- [Tablet 768 Buyer Clean](pages/conversion/request-a-quote/04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_TABLET_768_BUYER_CLEAN_V1.0.png)
- [Mobile 390 logical @2x Buyer Clean](pages/conversion/request-a-quote/04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_MOBILE_390_LOGICAL_AT2X_BUYER_CLEAN_V1.0.png)
- [Mobile Menu open 390 logical @2x](pages/conversion/request-a-quote/04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png)
- [Desktop State Proof](pages/conversion/request-a-quote/04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_STATE_BOARD_1440_V1.0.png)
- [Mobile State Proof 390 logical @2x](pages/conversion/request-a-quote/04_planning/visual-designs/gate5_v1.0/CONV-RFQ_GATE5_MOBILE_STATE_BOARD_390_LOGICAL_AT2X_V1.0.png)
- [Gate 4 User Approval Closure V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE4_USER_APPROVAL_CLOSURE_V1.0.md)
- [Gate 4 Visual Direction V1.0](pages/conversion/request-a-quote/04_planning/visual-directions/CONV-RFQ_GATE4_VISUAL_DIRECTION_V1.0.md)
- [Gate 3 User Approval Closure V1.0](pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE3_USER_APPROVAL_CLOSURE_V1.0.md)
- [Gate 2 Full Copy V1.1](pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md)
- [Approved Gate 1 Brief V1.2.2](docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.2.md)

Gate 1–7 已关闭；`CONV-RFQ-G7-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`。用户于 2026-09-01 明确授权 Gate 8，V1.1 authority 已移交现有 `01My首页开发` task/thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`。生命周期=`HANDED_OFF`；Gate 8=`AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`。2026-09-04 协调探针在 commit `616193f` 报告 `/request-a-quote/`=200、receiver unavailable；未加入 production secret、未修改 RFQ contract、未回退 Contact。`RFQ_RECEIVER_ENVIRONMENT_RELEASE_BLOCKER=OPEN`，不构成 Gate 8 完成或 Gate 9 准入；Gate 9=`NOT_STARTED / WAITING_FOR_PRODUCTION_EQUIVALENT_RESULT`。Privacy Policy、Global Chrome/CMP/consent、`/request-sample/` 和 `/request-documents/` 继续由独立 owner 实现。D23 不开发；部署、发布、DNS 与索引未授权。`CONV-RFQ_GATE7_MANIFEST_V1.2.md` 是未移交的非权威行政候选，不得覆盖 V1.1。

## 5L. CONV-SAMPLE Request a Sample Gate 9 QA

- [Current Gate 9 Baseline Manifest V0.3](pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.3.md) — 当前唯一 lifecycle/Gate 9 指针；`READ_ONLY_QA_APPROVED`；Gate 10 未授权。
- [Gate 9 Project-control Decision V0.1](pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_PROJECT_CONTROL_DECISION_V0.1.md) — `CONV-SAMPLE-G9-PCR-01 = PROJECT_CONTROL_ACCEPTED / CLOSED`；四项 P1/P2 finding 均 `VERIFIED_FIXED / CLOSED`。
- [Gate 9 Targeted Re-review Evidence V0.1](pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md) — 13 files / 133 tests、TypeScript、build/ESLint、双服务器 86/86 production-browser、Desktop/Tablet/Mobile 与 unavailable 证据。
- [Gate 9 Finding Closure Submission V0.1](pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_FINDING_CLOSURE_SUBMISSION_V0.1.md) — 历史关闭建议；最终状态以项目总控决定和 V0.3 Manifest 为准。
- [Gate 9 Project-control Review Submission V0.2](pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md) — 已被项目总控接受的定向复验提交。
- [Gate 8 External Development Completion Record V0.1](pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE8_EXTERNAL_DEVELOPMENT_COMPLETION_RECORD_V0.1.md) — Gate 8 实现与验证来源。

`CONV-SAMPLE-G9-PCR-01 = PROJECT_CONTROL_ACCEPTED / CLOSED`；`SAMPLE-G9-P1-01`、`SAMPLE-G9-P1-02`、`SAMPLE-G9-P2-01`、`SAMPLE-G9-P2-02` 均为 `VERIFIED_FIXED / CLOSED`。当前 lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`。生产 receiver/persistence/dedup/positive acknowledgement、WordPress singleton/seed、Legal/Privacy production data-flow parity、完整站 shared dependencies 与独立 Gate 10 授权继续作为发布门禁；Gate 10 未授权。本次治理同步未修改 D16 代码。

## 5M. MARKET-000 Markets Hub Gate 9 QA

- [Current Gate 9 Baseline Manifest V0.1](pages/markets/07_qa/MARKET-000_CURRENT_GATE9_BASELINE_MANIFEST_V0.1.md) — 当前唯一 Gate 9 指针；lifecycle=`READ_ONLY_QA_APPROVED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。
- [Gate 9 Read-Only QA Closure V0.1](pages/markets/07_qa/MARKET-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md) — `MARKET-000-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；`MARKET-G9-P0-01=VERIFIED_FIXED / CLOSED`。
- [Gate 9 Targeted Re-review Evidence V0.1](pages/markets/07_qa/MARKET-000_GATE9_TARGETED_REREVIEW_EVIDENCE_V0.1.md) — commit `616193f3…` 的 Canonical/308、proxy/API、四视口、a11y、SEO/GEO/Schema 与视觉完整性复验。
- [Gate 9 Findings and Release Blockers V0.1](pages/markets/07_qa/MARKET-000_GATE9_FINDINGS_AND_RELEASE_BLOCKERS_V0.1.md) — 旧三项与 P0-01 已关闭；外部 P0-02/P0-03 与全站 P1-04 继续 OPEN。

MARKET-000 已完成 Gate 9 只读 QA。十个 Market child、`APP-000`、RFQ receiver/readiness、`CONV-DOC` 与 held Trade route cleanliness 继续作为外部或全站 release blockers；MKT-R002–005、22-route、PT-BR、Trade freshness 与 PRODUCT V0.3 零行级渲染门禁保持。该关闭不授权任何 Market 子页、Gate 10、部署、发布、DNS 或索引。

## 5N. MARKET-EU-001 European Union Current Gate 8

- [Current Gate 8 Authorization Manifest V0.18](pages/markets/06_handoff/MARKET-EU-001_CURRENT_GATE8_AUTHORIZATION_MANIFEST_V0.18.md) — 当前唯一页面级指针；lifecycle=`HANDED_OFF`，Gate 8=`AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`。
- [Gate 7 Handoff Closure V0.1](pages/markets/05_review/MARKET-EU-001_GATE7_HANDOFF_CLOSURE_V0.1.md) — `MARKET-EU-001-G7-HANDOFF-CLOSURE-01=DELIVERED / CLOSED`；已交付现有 `01My首页开发` task/thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`。
- [Gate 7 Handoff and Gate 8 Authorization V0.1](pages/markets/05_review/MARKET-EU-001_GATE7_HANDOFF_AND_GATE8_AUTHORIZATION_V0.1.md) — 记录用户决定 `确认移交，授权 Gate 8`；Gate 9–10 未授权。
- [Current Gate 7 Baseline Manifest V0.17](pages/markets/06_handoff/MARKET-EU-001_CURRENT_GATE7_BASELINE_MANIFEST_V0.17.md) — 已批准并移交的 Gate 7 历史基线。
- [Gate 7 Project-Control Review Submission V0.1](pages/markets/06_handoff/MARKET-EU-001_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md) — `MARKET-EU-001-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；P0=0、P1=0、P2=0。
- [Gate 7 Handoff Package V0.1](pages/markets/06_handoff/MARKET-EU-001_GATE7_HANDOFF_PACKAGE_V0.1.md) — CMS/API/组件、关系、SEO/GEO/Schema、Global Chrome、Legal/CMP、响应式、无障碍与 scope 隔离合同。
- [Gate 7 Acceptance and Blockers V0.1](pages/markets/06_handoff/MARKET-EU-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md) — Gate 8 验收、Gate 9 只读 QA 矩阵及 `EU-G6-R01` 至 `EU-G6-R05` 后续控制。
- [Gate 7 Manifest V0.1](pages/markets/06_handoff/MARKET-EU-001_GATE7_MANIFEST_V0.1.md) — Gate 7 文件、内容 authority、共享依赖和 Gate 5 视觉资产哈希。
- [Gate 8 Implementation Plan](docs/superpowers/plans/2026-09-04-market-eu-001-gate8-implementation.md) — 外部开发仓库内执行的十项 test-first 实施与回传计划；当前锁定未执行。
- [Gate 6 User Approval Closure V0.1](pages/markets/05_review/MARKET-EU-001_GATE6_USER_APPROVAL_CLOSURE_V0.1.md) — 记录用户决定 `批准 Gate 6，授权 Gate 7`。
- [Current Gate 6 Baseline Manifest V0.16](pages/markets/05_review/MARKET-EU-001_CURRENT_GATE6_BASELINE_MANIFEST_V0.16.md) — 已批准的 Gate 6 历史基线。
- [Gate 6 Audit and Acceptance V0.1](pages/markets/05_review/MARKET-EU-001_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md) — `MARKET-EU-001-G6-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；页面规格 P0=0、P1=0，并登记五项后续阶段控制。
- [Gate 6 Fresh Validation V0.1](pages/markets/05_review/MARKET-EU-001_GATE6_FRESH_VALIDATION_V0.1.md) — 关键词/登记册、内容、关系、官方源、Global Chrome、交互与视觉资产共 `67 PASS / 0 FAIL`。
- [Current Gate 1–5 Approved Manifest V0.15](pages/markets/04_planning/MARKET-EU-001_CURRENT_GATE5_APPROVED_MANIFEST_V0.15.md) — 当前批准的内容、视觉和交互基线。
- [Gate 5 User Approval Closure V0.1](pages/markets/05_review/MARKET-EU-001_GATE5_USER_APPROVAL_CLOSURE_V0.1.md) — 记录用户决定 `批准 Gate 5，授权 Gate 6`；`MARKET-EU-001-G5-USER-APPROVAL-01=USER_APPROVED / CLOSED`。
- [Gate 5 Full Visual Specification V0.1](pages/markets/04_planning/visual-designs/MARKET-EU-001_GATE5_FULL_VISUAL_SPEC_V0.1.md) — 1440/768/390、Mobile Menu、FAQ、focus、长内容和无内容图片状态合同。
- [Gate 5 Desktop 1440](pages/markets/04_planning/visual-designs/market-eu-001/v0.1/MARKET-EU-001_GATE5_FULL_DESKTOP_1440_V0.1.png) · [Tablet 768](pages/markets/04_planning/visual-designs/market-eu-001/v0.1/MARKET-EU-001_GATE5_FULL_TABLET_768_V0.1.png) · [Mobile 390](pages/markets/04_planning/visual-designs/market-eu-001/v0.1/MARKET-EU-001_GATE5_FULL_MOBILE_390_V0.1.png) · [Mobile Menu open/focus](pages/markets/04_planning/visual-designs/market-eu-001/v0.1/MARKET-EU-001_GATE5_MOBILE_MENU_OPEN_FOCUS_390_V0.1.png) — 当前批准的完整视觉证明。
- [FAQ Expanded Desktop](pages/markets/04_planning/visual-designs/market-eu-001/v0.1/MARKET-EU-001_GATE5_FAQ_ALL_EXPANDED_DESKTOP_1440_V0.1.png) · [FAQ Collapsed Mobile](pages/markets/04_planning/visual-designs/market-eu-001/v0.1/MARKET-EU-001_GATE5_FAQ_ALL_COLLAPSED_MOBILE_390_V0.1.png) · [Documents Focus](pages/markets/04_planning/visual-designs/market-eu-001/v0.1/MARKET-EU-001_GATE5_DOCUMENTS_FOCUS_DESKTOP_1440_V0.1.png) — 重要交互状态证据。
- [Current Gate 4 Approved Manifest V0.13](pages/markets/04_planning/MARKET-EU-001_CURRENT_GATE4_APPROVED_MANIFEST_V0.13.md) · [Current Gate 3 Approved Manifest V0.11](pages/markets/04_planning/MARKET-EU-001_CURRENT_GATE3_APPROVED_MANIFEST_V0.11.md) · [Current Gate 2 Approved Manifest V0.8](pages/markets/04_planning/MARKET-EU-001_CURRENT_GATE2_APPROVED_MANIFEST_V0.8.md) — 上游批准 authority。

MARKET-EU-001 当前为 `HANDED_OFF`，Gate 8=`AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`。Gate 7 权威包已交付 `01My首页开发` task/thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`，外部 task 已进入执行；D23 只跟踪状态并等待完整实现证据后进行 Gate 9 只读 QA。关键词主表与57页登记册未修改；`EU-G6-R01` 至 `EU-G6-R05` 继续约束 Malaysia-origin 证据、贸易 freshness、route/conversion readiness 及 runtime SEO/Schema/CMP/无障碍。Gate 9–10、部署、生产写入、发布、DNS 和索引均未授权。

## 6. 页面治理

| 目录 | 职责 | 当前状态 |
|---|---|---|
| [docs/architecture](docs/architecture/) | 全站页面登记、页面关系和架构版本 | V0.1 建立 |
| [GLOBAL_HEADER_FOOTER_SPEC_V0.2.md](docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md) | 全站唯一 Header、Mobile Menu、Footer 与固定 RFQ 合同 | `APPROVED_GLOBAL_CHROME_BASELINE` |
| [GLOBAL_HEADER_FOOTER_SPEC_V0.3.md](docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md) | Footer 买家标题统一为 Procurement；其余共享字段冻结 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| [GLOBAL_HEADER_FOOTER_SPEC_V0.4.md](docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.4.md) | 首次移除买家可见 CURRENT 的提交 | `CONDITIONAL_RETURN / NOT_APPROVED` |
| [GLOBAL_HEADER_FOOTER_SPEC_V0.5.md](docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md) | 正式 current-state authority；按 navigation surface 管理 `aria-current` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| [GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md](docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md) | 将 Global Chrome Logo 键绑定至批准 production SVG baseline | `APPROVED_GLOBAL_LOGO_ASSET_BINDING` |
| [GLOBAL_LOGO_CROSS_PAGE_REGISTRY_V1.0.md](docs/architecture/GLOBAL_LOGO_CROSS_PAGE_REGISTRY_V1.0.md) | 八类页面体系统一引用 production Logo Manifest | `APPROVED_CROSS_PAGE_ASSET_REFERENCE` |
| [GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.1.md](docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.1.md) | 首次跨页 current-state 影响登记 | `CONDITIONAL_RETURN / NOT_APPROVED` |
| [GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md](docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md) | PCR-01 surface-scoped 跨页登记 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| [GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.1.md](docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.1.md) | 首次 current-state 总控提交 | `CONDITIONAL_RETURN / NOT_APPROVED` |
| [GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.2.md](docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.2.md) | PCR-01 定向修订总控闭环 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| [GLOBAL_HEADER_CURRENT_STATE_PCR_01_VALIDATION_V0.1.md](docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PCR_01_VALIDATION_V0.1.md) | PCR-01 审查前 payload hash 与 fresh validation 历史快照 | `VALIDATION_CONFIRMED_BY_PROJECT_CONTROL` |
| [GLOBAL_HEADER_CURRENT_STATE_PCR_01_CLOSURE_V0.1.md](docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PCR_01_CLOSURE_V0.1.md) | PCR-01 关闭记录与 post-closure hashes | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| [docs/page-briefs](docs/page-briefs/) | 统一任务卡模板和具体页面任务卡 | 模板 V0.2；Home V0.1 已同步至 Gate 9 关闭状态，lifecycle=`READ_ONLY_QA_APPROVED` |
| [docs/page-playbooks](docs/page-playbooks/) | 八类页面的详细作业规范 | Home V0.1 已由 Gate 7–9 实际流程消费；Documents V0.1 为 Gate 5 用户审核草案；其他类型按页推进 |
| [docs/superpowers/plans](docs/superpowers/plans/) | 经批准治理工作的实施计划 | 保留执行与审查记录 |
| [docs/superpowers/specs](docs/superpowers/specs/) | 经批准的架构与迁移设计 | 保留设计决策记录 |

当前全站公共首尾定向视觉修订计划：

- [2026-08-30-global-header-footer-visual-revision.md](docs/superpowers/plans/2026-08-30-global-header-footer-visual-revision.md)

未来页面任务必须遵循：登记册确认身份 → 选择页面类型 Playbook → 建立页面任务卡 → 总控批准 → 策划与视觉 → 总控审核 → 代码开发 → 实现验收。

## 7. 视觉资产

目录：[brand/visual](brand/visual/)

- [TiO2_Malaysia_Visual_Standard_V1.0.md](brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md) 是正式视觉标准。
- 当前目录中的通用命名图片应在后续非破坏性整理中补充用途说明或重命名映射。
- 图片本身不是事实证据；使用前必须确认来源、授权和表达边界。

Production SVG Logo 正式入口：

- [Production SVG Logo Manifest V1.0](brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)
- [Global Chrome Logo Asset Addendum V1.0](docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md)
- [Global Logo Cross-Page Registry V1.0](docs/architecture/GLOBAL_LOGO_CROSS_PAGE_REGISTRY_V1.0.md)

来源与审查记录：

- [Logo Candidate Manifest V0.1](brand/logo/candidates/v0.1/BRAND_LOGO_CANDIDATE_MANIFEST_V0.1.md)
- [Project Control Submission V0.1](brand/logo/candidates/v0.1/BRAND_LOGO_CANDIDATE_PROJECT_CONTROL_SUBMISSION_V0.1.md)
- [Primary Horizontal SVG](brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg)
- [Reverse Monochrome SVG](brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg)
- [Symbol-only SVG](brand/logo/candidates/v0.1/tio2-malaysia-symbol-v0.1.svg)
- [Favicon-safe SVG](brand/logo/candidates/v0.1/tio2-malaysia-favicon-safe-v0.1.svg)
- [Original-size Proof Review Board](brand/logo/candidates/v0.1/proofs/logo-candidate-review-board-v0.1.png)

候选包 ID 为 `TIO2MY-BRAND-LOGO-SVG-CANDIDATE-01`；Review ID `TIO2MY-LOGO-SVG-PCR-01 = APPROVED / CLOSED`，用户批准日期 2026-08-31。四个原 SVG 文件按既有路径和哈希晋升为 production baseline；旧 PNG 仅作历史/视觉追溯。该批准不表示已实施、部署、发布或完成商标注册。

## 8. 策划空间与代码空间边界

| 空间 | 职责 |
|---|---|
| `D:\23MySec` | 视觉、SEO、GEO、战略、PRD、关键词、证据、页面任务卡、交付规格和只读验收资料 |
| `D:\16Wordpress_nextjs` | WordPress、Next.js、CMS、共享组件、代码、测试、部署和实际实现 |

本项目不得直接修改代码。WordPress/Next.js 开发任务不得擅自改写本目录已批准的页面身份、关键词、GEO、视觉或内容职责；实现完成后由本项目只读检查并提交问题清单。

## 9. 归档与工作区

| 目录 | 当前职责 |
|---|---|
| `90_archive/` | 历史版本和废止方案；保留、不删除 |
| `99_workspace/` | 临时脚本、预览、验证输出和一次性中间文件 |

原 `.codex_tmp_keyword_research/` 已迁移到 `99_workspace/keyword-research-workbench/`；原 `.tmp/page-keyword-map-v04/` 已迁移到 `99_workspace/page-keyword-map-v04/`。完整迁移表见 `02_DIRECTORY_GUIDE.md`。

项目状态 V0.1 与 V0.2 已分别归档为 [00_PROJECT_STATUS_V0.1.md](90_archive/governance/00_PROJECT_STATUS_V0.1.md) 和 [00_PROJECT_STATUS_V0.2.md](90_archive/governance/00_PROJECT_STATUS_V0.2.md)。

## 10. 使用本索引的规则

- 新任务先读 `AGENTS.md`，再通过本索引找到当前资料。
- 不根据文件名中的最大版本号自动认定批准状态；必须同时检查状态文件和批准记录。
- 新增正式资料时，在本索引增加入口并写清唯一职责。
- 目录发生移动后同步修正本索引和所有受影响引用。
- 本索引只负责导航，不在这里重复项目规范或页面详细内容。
