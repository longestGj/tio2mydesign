# CONV-THANK Shared Form Success Brief V0.1

## 1. 身份、授权与状态

日期：2026-09-08。作者：`/root/conv_thank_gate1_execute`。Task 4 / `CONV-THANK-G1-EXEC-20260908-01`。本完整Brief为Gate 1方向合同，不制作Gate 2骨架、最终模块排序、视觉或代码；下列exact copy是已批准设计的继承。

| 字段 | 当前值 |
|---|---|
| Page ID / name | `CONV-THANK` / Thank You |
| URL / family / type | `/thank-you/` / CONVERSION / Shared form-result utility page |
| Language / market / priority | EN / GLOBAL / P1 |
| site_scope | `tio2-my`；禁止跨scope fallback |
| Lifecycle / Gate 1 | `BRIEF_IN_REVIEW` / `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_CLOSED` |
| Keyword mapping / verification | `APPROVED_USER_PAGE_ADDITION` / `NO_DIRECT_KEYWORD_TARGET` |
| Content authority | [批准设计](../superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md)§3、5–10、12＋[新增决定](../architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md)；四态精确copy与行为`USER_APPROVED_FOR_PUBLIC_USE` |
| CONTENT_INTENT_CONFIRMED | `PENDING_GATE1_USER_CONFIRMATION`；已批准设计内容保持，不降为候选；本次研究/意图包仍待独立审查和用户确认 |
| 执行依据 | [Gate 0–1计划](../superpowers/plans/2026-09-08-404-thank-you-gate0-gate1.md)；[SYS-404前置关闭](../../pages/system/404/05_review/SYS-404_GATE1_USER_APPROVAL_AND_CLOSURE_V0.1.md) `SYS404-G1-USER-20260908-01`已满足串行前置 |
| 当前唯一入口 | [Manifest](../../pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md) |
| 审核 / 后续 | 独立项目总控审查尚未执行；Gate 2+、开发/外发/部署/发布未由本任务授权；运行`NOT_TESTED` |

## 2. Page Intent Card与职责

| 项目 | 方向 |
|---|---|
| Audience | 从RFQ、Request Documents、Request a Sample已获明确接收响应的采购/技术访客；另包含直接打开或持无效链接的访客 |
| Buyer problem | 确认本次请求是否已收到、团队下一步做什么，以及现在可去哪里；直接访问者需要选择正确请求入口 |
| Core message | 经确认接收后提供请求类型对应的简短确认和下一步；无有效证明时提供请求选择 |
| Must include | 三个成功变体及direct/invalid；准确H1/body/CTA；成功文字＋图标；共享Chrome、固定RFQ与法律功能；真实接收门槛和会话/失败边界 |
| Must exclude | 提交数据回显、请求编号、限制性结果免责声明、推荐产品、营销横幅、另一个提交按钮、FAQ/长获客正文、内部治理状态；direct不含receipt暗示 |
| Primary CTA | Quote/Sample：Explore Products；Documents：Return to Documents；direct：Request a Quote，另两个请求同属已批准可选入口 |
| Secondary CTA | Quote：Go to Homepage；Documents：Explore Products；Sample：View Applications；direct：Request Documents与Request a Sample |
| Ownership boundary | 本页仅拥有结果呈现与下一步。三个源表单分别拥有收集、校验、receiver、重试、重复防护与各自成功事件；Documents Hub负责文件说明，Products/Applications负责浏览与评估；共享Chrome/Legal不在本页重建 |

采购阶段为Post-submission confirmation；direct属于请求导航，不推定其已提交。用户能继续浏览或回到适合的请求入口，不需要再次填写数据来查看确认。

## 3. 已批准四态精确内容

以下逐字继承设计§5。三个成功变体具有成功图标与`REQUEST RECEIVED` eyebrow；direct/invalid没有成功图标、eyebrow或已收到暗示。共享Header/Footer均消费原owner，设计§5.1的简短结构不取消Header。最终视觉与完整模块确认留在后续Gate。

### Quote — `/thank-you/?request=quote`

H1: `Thank you. We’ve received your quotation request.`

Body: `Our team will review the details and contact you using the information provided.`

1. `Explore Products` → `/products/`
2. `Go to Homepage` → `/`

### Documents — `/thank-you/?request=documents`

H1: `Thank you. We’ve received your document request.`

Body: `Our team will review the requested documents and contact you using the information provided.`

1. `Return to Documents` → `/documents/`
2. `Explore Products` → `/products/`

### Sample — `/thank-you/?request=sample`

H1: `Thank you. We’ve received your sample request.`

Body: `Our team will review your application and sample requirements and contact you using the information provided.`

1. `Explore Products` → `/products/`
2. `View Applications` → `/applications/`

### Direct / invalid

H1: `How can we help?`

Body: `Choose the request you’d like to make, and our team will guide you through the next step.`

1. `Request a Quote` → `/request-a-quote/`
2. `Request Documents` → `/request-documents/`
3. `Request a Sample` → `/request-sample/`

以上并未承诺响应时间、报价完成、文件发送/可用、样品批准/寄送或订单结果。该语义边界只作内部合同，不追加买家可见免责声明。原表单copy差异按[影响审计](../../pages/conversion/thank-you/02_analysis/CONV-THANK_THREE_FORM_SUCCESS_CONTRACT_IMPACT_AUDIT_V0.1.md)处理，历史源不回写。

## 4. 必须回答的问题与状态方向

| 优先级 / 问题 | 回答 / 责任 |
|---|---|
| P0：什么证明收到？ | 源receiver explicit positive acknowledgement＋有效短时browser-session marker。query alone never proves success，只选择eligible copy |
| P0：哪个请求？ | 仅quote/documents/sample白名单；query与marker请求类型匹配才显示对应成功。不匹配按invalid；禁止把一个流的marker用来证明另一流 |
| P0：失败怎么办？ | 留在源表单；校验错误聚焦摘要/字段；network/provider/receiver/ambiguous失败保留输入并支持retry，无跳转、无新成功marker、无成功事件 |
| P0：能否重复提交？ | submitting期间源表单防重复；不能产生第二次请求、导航或成功事件。原有idempotency由源owner保留 |
| P0：直接、刷新、新会话？ | 无marker、不支持/缺失类型、过期或新会话显示direct/invalid。有效同会话刷新保持正确变体，但不重复计转化；验证前不可闪success |
| P0：页面包含什么数据？ | 仅批准静态copy/链接与三种请求类型。无个人、公司、产品或任何商业请求内容；不收新字段、不显示request reference |
| P1：接下来谁处理？ | 按三条批准body说明团队review及contact；源表单负责实际接收，Thank You不证明邮箱出现、人工已阅读或业务处理完成 |
| P1：继续去哪里？ | 仅§3指定七个唯一既有路由；无预填携带、无新页面/搜索/动态推荐 |

marker仅含批准请求类型、成功时间戳、验证当前browser session所需的非个人流程标记。同会话保留用于refresh，会话结束失效；不发明分钟数、长期保存期或额外ID字段。若存储不可用或无法验证，不得乐观显示收到；Gate 6/8确定同等私密且稳健实现并验证这一边界。

源表单positive acknowledgement门槛分别继承：RFQ显式肯定响应，HTTP 2xx不足；Documents当前browser-direct须HTTP 200且JSON `success=true`；Sample须verified receiver返回`ok=true`且`receipt_confirmed=true`。不得把旧Documents server-only描述恢复为当前模型。

## 5. 搜索、GEO与机器语义边界

| 字段 | Gate 1方向 / 批准约束 |
|---|---|
| Primary / secondary keywords | `NO_PRIMARY_KEYWORD` / `N/A`；不制造商业辅助词 |
| 排除 / 防内耗 | supplier、product、market、application、document、RFQ、sample及help商业主词；源表单保留收集/行动意图，商业页保留获客所有权 |
| Search-intent Skill | `NOT_APPLICABLE_POST_SUBMISSION_UTILITY_PAGE`；已检查方法适用性，无query-level缺口；无SERP、搜索量、KD、CPC研究或虚构0值 |
| HTTP / robots / sitemap | 实际`/thank-you/`工具路由HTTP `200`；全部状态`noindex, nofollow`；sitemap excluded |
| Canonical | 不建query-variant canonical或可索引获客页；不向源表单canonical合并；最终基础route head映射由后续合同明确，不在Gate 1新增canonical策略 |
| Title | 已批准建议：`Thank You \| TiO2 Malaysia`；不按request值或表单值动态扩写 |
| Meta / OG / social | 无新增获客或社交推广目标；不含PII、请求数据或未经验证的结果；具体静态字段由Gate 2按设计边界明确 |
| Language / hreflang / breadcrumb | EN/GLOBAL，无本页替代语言页面；不新增语言URL、breadcrumb或Breadcrumb Schema合同；共享BM Privacy链接并非本页hreflang |
| GEO entities / answers | 已有TiO2 Malaysia及三种request类型；无新GEO答案目标、产品/企业能力或交易关系；不创建独立FAQ或可引用业务结果块 |
| Schema | 不输出conversion、order、quotation、document-delivery、sample-approval Schema；本页不新增其他页面专属Schema，后续只能按批准可见事实确定必要机器语义 |
| 时间敏感事实 | 本页没有法律、税率、库存、价格、交期事实；receiver/route/consent状态属于未来具体环境证据，不能当作今日已实现 |

Registry及关键词主表各有唯一CONV-THANK记录；三个query是同一页状态。注册目标及链接不等于现已上线，依赖见§8。

## 6. 数据、隐私与共享合同

URL、marker、analytics payload及渲染页均不得含姓名、邮箱、电话、公司、产品、目的地、应用、文件选择、样品需求、报价或请求正文。上游prefill/receiver payload留在原表单合同，不搬到结果页，也不将marker/请求token加入analytics。

GA4和GTM为已批准使用的共享分析层，执行服从当前同意架构；不以旧记录中的`PLANNED_BUT_NOT_ENABLED`声称当前生产已启用。Advanced Consent默认四信号denied须先于Google tags；适用同意后才完整测量，denied-state有限cookieless机制由共享合同治理，不能承诺拒绝后绝不发送Google信号。`ad_personalization`保持denied；remarketing、audience、Turnstile、reCAPTCHA均不使用。成功事件只在receiver肯定接收时产生并服从同意规则；Thank You page view、刷新、直接访问绝不作为成功证据。三流事件名称/语义继续区分，未来冻结现行名称，不在本轮发明新事件名称。

共享法律组件：Privacy Policy→`/privacy-policy/`、Dasar Privasi (BM)→`/ms/privacy-policy/`、Cookie Policy→`/cookie-policy/`；Cookie Settings为共享功能按钮，非新路由。无Terms页或链接。保留共享Footer年份合同，不新增政策正文、保留期或表单字段。

来源：[Global Chrome V0.5](../architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[Footer增补](../architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)、[No-Terms](../architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md)、[Legal/Privacy框架](../architecture/WEBSITE_LEGAL_PRIVACY_FRAMEWORK_ADOPTION_V1.0.md)及[Advanced Consent](../architecture/LEGAL_PRIVACY_ADVANCED_CONSENT_AND_CODE_REUSE_DECISION_V1.0.md)，均结合最新批准设计消费。Conversion Playbook V0.1仍是working baseline，旧限制性success、法律占位、834px和历史Gate编号由后续批准覆盖，不据此把整个Playbook晋升批准。

## 7. 后续呈现、数据管理与可访问性要求

本页不定义receiver或实现模型。后续Gate 6应交付静态四态copy/CTA、状态判定结果、共享引用与索引规则；Gate 8确定WordPress/API/Next.js映射。所有查询、route、cache、menu、SEO、form、media和analytics须`site_scope=tio2-my`，无其他站内容、接收器或状态fallback。

Current navigation key=`NONE`，每个导航surface current=0；买家可见CURRENT=0。共享Header 84px/64px、Mobile Menu、Footer、production Logo、fixed RFQ均由Home/Global Chrome owner维护，不分叉。

Gate 3/4覆盖Quote、Documents、Sample、direct/invalid四态的1440/768/390完整页面及Mobile Menu。一个清晰H1作为初始landmark；成功须文本表达，不依赖图标/颜色；所有链接键盘可达、focus可见，390px目标至少44×44逻辑像素，200%缩放可用、无横向溢出。加载/无法校验时不可闪成功；动画尊重reduced motion。该段是后续制作/验收输入，本轮未制作视觉或验证浏览器行为。

## 8. 依赖、验收、决定与下一步

[Research](../../pages/conversion/thank-you/01_research/CONV-THANK_GATE1_RESEARCH_REPORT_V0.1.md)综合问题与依据；[Claim Register](../../pages/conversion/thank-you/01_research/CONV-THANK_GATE1_CLAIM_EVIDENCE_REGISTER_V0.1.csv)逐命题登记；[影响审计§6](../../pages/conversion/thank-you/02_analysis/CONV-THANK_THREE_FORM_SUCCESS_CONTRACT_IMPACT_AUDIT_V0.1.md)为THANK-DEP01–07的唯一开放项明细，含owner、解除条件和验证阶段。

Gate 1验收：方向与所有P0问题有答案、四态exact与九个动作实例无遗漏、证据不越界、搜索/页面所有权不冲突、源表单current组合明确、未来依赖可行动。Gate 6冻结三表单接入增补与接收层级；Gate 8实现，Gate 9以真实结果验证设计§10、四态/会话/失败/重复、隐私/同意/索引/共享/无障碍/scope。未实现不否决本次研究，未验证不得发布。

| 日期 / 来源 | 对象 / 范围 | 当前结果 |
|---|---|---|
| 2026-09-08用户批准设计§12 | 共享页、四态exact copy/actions、状态/数据/搜索/共享要求 | 正式对外内容授权继承；未授予阶段关闭 |
| 2026-09-08用户批准Gate 0–1计划；SYS404-G1-USER-20260908-01前置满足 | 本页Gate 1执行与逐页审查确认 | 当前Task 4执行有效 |
| 本次执行提交 | Brief/研究/命题/Manifest＋审计 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`；不自签独立PASS或关闭 |

无新增待确认企业事实，不重启EG-001–006历史Hold。下一步由独立总控审查本页研究/意图，按原流程向用户呈现具体方向与影响后记录Gate 1确认；Gate 2交其授权owner且本任务不启动。
