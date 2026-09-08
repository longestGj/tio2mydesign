# SYS-404 与 CONV-THANK 页面新增决定 V1.0

## 1. 决定与授权

| 字段 | 内容 |
|---|---|
| Decision ID / date | `SYS404-CONVTHANK-ADDITION-20260908` / `2026-09-08` |
| 状态 | `USER_APPROVED_DESIGN / GATE0_REGISTERED` |
| 用户来源 | 2026-09-08当前对话；[批准设计§12](../superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md)记录逐项批准；[执行计划](../superpowers/plans/2026-09-08-404-thank-you-gate0-gate1.md)记录用户确认按该规格执行Gate 0并分别启动两页Gate 1 |
| 对象 | `SYS-404`、`CONV-THANK`；三个既有表单的未来共享成功目的地 |
| 本次完成范围 | Gate 0身份、职责、URL、关键词与批准输入登记；正式内容/行为批准按设计原范围继承 |
| 后续权限 | 按计划先执行SYS-404 Gate 1，独立审查及用户确认关闭后再执行CONV-THANK Gate 1；本记录不关闭Gate 1，不授权Gate 2+、开发、外发、部署、发布或索引开放 |
| 实际作者 | `/root/sys404_thank_gate0`，受总控Task 1派发；本记录是已批准决定的登记，不是作者自签独立审查 |

批准设计仍是精确内容与行为的来源；本决定是其Gate 0架构增补。设计批准不等于Gate 1关闭。既有表单历史批准源保持，未来接入通过当前Manifest的增补/继承关系处理，不以本登记声称已上线或已改变运行行为。

## 2. 原因、影响、风险与回退

新增404帮助读者从不存在的URL恢复导航；共享Thank You完成Quote、Documents、Sample提交后的体验，保留各自成功文案和下一步。两个页面均不承担搜索获客意图，不能由现有商业页替代系统响应或提交结果职责。

| 影响 | 已批准处理 |
|---|---|
| 页面数量 | 57 → 59；保留原57页身份和URL；新增一个全站运行时fallback及一个共享工具路由 |
| SEO / GEO | 两页均`NO_PRIMARY_KEYWORD`且不进sitemap；不创建GEO答案目标、商业主词、独立社交推广目标 |
| 内链与导航 | 保留批准恢复/下一步链接；不新增一级导航；Header/Footer/Logo/fixed RFQ均由Home/Global Chrome owner提供，页面不得分叉实现 |
| 表单职责 | 三个源表单仍各自负责数据收集、校验、receiver、失败、重试和重复提交防护；Thank You仅显示符合条件的结果与下一步 |
| 数据与实现 | 未来Gate 6明确技术交付，Gate 8独立开发项目实现，Gate 9验证；本次无代码或运行时变更 |
| PRD口径 | 当前组合为PRD V0.4＋既有批准增补＋本新增决定；本决定对其页面清单作57→59增补，旧PRD原文保留，后续合订由原owner处理 |

| 风险 | 控制 / 验证责任 |
|---|---|
| 直接访问被误报为已提交 | 无有效短时浏览器会话标记、过期或请求类型不支持时显示direct/invalid；Gate 8实现、Gate 9验证 |
| URL或标记泄露数据 | 禁止PII及产品/请求内容进入URL、marker、analytics及Thank You可见内容；Gate 6约束、Gate 8/9验证 |
| 假404或拦截有效页面 | 真正HTTP 404；Gate 9验证代表性已知路由与各类未知路由 |
| 转化统计膨胀 | 仅receiver positive acknowledgement触发成功事件；页面浏览、刷新、直接访问不产生成功事件 |
| 失败处理丢失 | 失败仍留在源表单，保留输入并支持重试；无跳转、无成功marker |
| 共享组件分叉 | 消费Global Chrome owner的现行Header/Footer、生产Logo、fixed RFQ与法律链接 |

回退来源：三个表单保留历史inline-success批准合同；共享路由无法安全交付时可依批准设计回到最后批准的inline状态，不改变已提交数据。404可回到现行全站not-found实现，同时保留此次登记与设计。回退或后续实施由有权owner按对应Gate执行，本次不实际回退、删资料或重写历史源。

## 3. 唯一页面身份

| 字段 | SYS-404 | CONV-THANK |
|---|---|---|
| Name | Page Not Found | Thank You |
| Section / type | `SYSTEM` / Global system recovery page | `CONVERSION` / Shared form-result utility page |
| Route | `RUNTIME_FALLBACK`：运行时全站fallback，仅在`tio2-my`内承接未知URL；无独立可索引`/404/` | `/thank-you/` |
| Language / market | `EN` / `GLOBAL` | `EN` / `GLOBAL` |
| Primary keyword | `NO_PRIMARY_KEYWORD` | `NO_PRIMARY_KEYWORD` |
| Mapping / verification | `APPROVED_USER_PAGE_ADDITION` / `NO_DIRECT_KEYWORD_TARGET` | `APPROVED_USER_PAGE_ADDITION` / `NO_DIRECT_KEYWORD_TARGET` |
| HTTP / robots | 真正`404` / `noindex, follow` | 实际工具路由`200` / `noindex, nofollow` |
| Sitemap | 不进sitemap | 不进sitemap |
| Canonical | 不为任意未知URL建立可索引canonical合同 | 不为query变体创建canonical或可索引获客页 |
| Schema | 不要求页面专属Schema | 不输出转化、订单、报价、文件交付或样品批准Schema |
| Suggested title | `Page Not Found \| TiO2 Malaysia` | `Thank You \| TiO2 Malaysia` |
| site_scope | `tio2-my`，禁止跨scope fallback | `tio2-my`，禁止跨scope fallback |
| 页面目录 | `pages/system/404/` | `pages/conversion/thank-you/` |

系统页没有另建已批准通用Playbook；以本决定、批准设计及当前工作流作为页面专属准入合同。Thank You继承Conversion Playbook中适用的共享责任规则；其旧三表单范围、旧成功措辞/限制、旧834px平板及历史Gate编号不能覆盖本次批准设计与现行流程，也不据此自动批准整个Playbook。

## 4. SYS-404精确可见内容

- Eyebrow: `404 · PAGE NOT FOUND`
- H1: `Let’s help you find what you need.`
- Body: `The page you’re looking for may have moved or is no longer available. You can continue by exploring our titanium dioxide products, requesting technical documents, or contacting our team.`

| 层级 | 精确CTA | 目标 |
|---|---|---|
| Primary | `Explore Products` | `/products/` |
| Primary | `Go to Homepage` | `/` |
| Supporting | `Request Documents` | `/request-documents/` |
| Supporting | `Contact Our Team` | `/contact/` |
| Supporting | `Request a Quote` | `/request-a-quote/` |

不添加站内搜索、FAQ、表单、长SEO正文、动态推荐或内部治理文字；不指责访客输错地址。未知路由无导航current项；买家可见`CURRENT`标签为0。

## 5. CONV-THANK精确可见内容

三个成功变体采用成功图标与`REQUEST RECEIVED` eyebrow；以文字表达成功，随后是各自H1、正文及两个动作和共享Footer。不回显提交的个人或商业信息，不显示请求编号、限制性结果免责声明、产品推荐、营销横幅或另一个提交按钮。direct/invalid不显示成功图标、成功eyebrow或任何已收到暗示。

### Quote

H1: `Thank you. We’ve received your quotation request.`

Body: `Our team will review the details and contact you using the information provided.`

1. `Explore Products` → `/products/`
2. `Go to Homepage` → `/`

### Documents

H1: `Thank you. We’ve received your document request.`

Body: `Our team will review the requested documents and contact you using the information provided.`

1. `Return to Documents` → `/documents/`
2. `Explore Products` → `/products/`

### Sample

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

该变体用于无有效成功标记、过期、新会话或不支持的请求类型；不计为提交或转化。不得在marker验证前闪现成功变体。

## 6. 成功证明、隐私与责任边界

获批目的地仅为`/thank-you/?request=quote`、`/thank-you/?request=documents`、`/thank-you/?request=sample`。query只选择候选文案，不是成功证明。成功确认只来自receiver positive acknowledgement＋短时浏览器会话标记；先获得明确肯定接收响应，再记录源表单对应成功事件、建立marker并跳转。

marker只保存批准请求类型（`quote`、`documents`、`sample`）、成功时间戳和验证当前browser session所需的非个人流程标记。同一有效会话内刷新保留正确变体，会话结束后失效；不自行指定未批准的分钟数。Gate 6/8可选择同等私密且更稳健的实现，必须保持这些可观察规则。

姓名、邮箱、电话、公司、产品、目的地、应用、文件、样品、报价和请求正文不得进入URL、浏览器marker、analytics payload或Thank You可见内容。源表单已批准的数据收集职责不因此迁至Thank You。

| 条件 | 必须结果 |
|---|---|
| Explicit positive acknowledgement | 仅记录该表单成功事件；创建非个人marker；跳转匹配变体 |
| Validation error | 保留源表单并聚焦错误摘要/字段；不跳转 |
| Network / provider / receiver failure | 保留输入并允许重试；不跳转、无成功marker |
| Duplicate activation while submitting | 源表单防止重复请求、第二次跳转或第二个成功事件 |
| Direct / invalid / stale / new session | direct/invalid文案；无转化事件 |

Quote、Documents、Sample成功事件名称继续区分；Thank You page view本身永远不是成功证据。分析受批准GA4/GTM同意架构约束，remarketing继续关闭，不引入Turnstile/reCAPTCHA。404分析只可使用移除可能含个人或敏感信息的query/fragment后的净化路径。

## 7. Gate后置验证与同步范围

两页均消费共享Desktop Header、Mobile Header、Mobile Menu、Footer、production Logo、fixed RFQ及法律链接；不新增导航项、不自建分叉。Gate 3/4覆盖1440、768、390完整状态；键盘可达、可见focus、390px逻辑目标至少44×44px、200%缩放可用、无横向溢出。主标题作为初始页面landmark；404文本换行或本地化增长仍保留恢复动作。

Gate 6登记三表单接入差异、owner、状态/marker与分析合同；Gate 8实现接收后跳转、会话、失败/重复防护、真实404、robots、sitemap及全链路scope隔离；Gate 9核对设计§10全部接受条件并提交三端/键盘/焦点/缩放/溢出实际证据。缺少这些未来运行能力不阻塞本次Gate 0，不表示运行已验收。

| 同步对象 | 本次处理 / 后续责任 |
|---|---|
| Page Registry、关键词主表 | 各增2条唯一身份；总数59；既有57行保持 |
| PROJECT_CONTEXT、Index、Status | 背景口径、决定与Manifest导航、Gate 0已完成/Gate 1未执行 |
| 本页Gate 0 intake与唯一Manifest | 保存批准输入、阶段边界、开放项和下一允许动作 |
| PRD page inventory | 以本决定作为批准增补，57→59；历史PRD不回写 |
| 三个表单成功合同及其当前Manifest | Gate 1对现行组合做影响审计，未来通过版本化增补接入；历史inline源和既有运行状态保持 |

登记前实查：Registry和关键词主表均57行；两Page ID、`/thank-you/`及独立`/404/`无现行登记。链接目标属于既有身份，不能把已登记等同已上线。本次由总控后续接收核对登记成果；Gate 1独立审查与用户确认仍分别保留。
