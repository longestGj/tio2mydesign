# CONV-RFQ D32 Gate 6 Independent Review V0.1

日期：2026-09-20。结论：`CONDITIONAL_RETURN`。必修 Finding：**4**。本报告只评价交付合同，不关闭 Gate 6，不修改当前 Manifest，不派发 Gate 8。

## 1. 身份、授权与范围

- 委托来源：任务 `01a0bdf4-30de-7a50-b560-1ba5c9353169` 的明确独立审查消息。
- Reviewer：当前独立任务（cwd `D:/23MySec`，Gate1–9规则评估任务）；不是该来源任务中新包的作者。两个任务均可能使用 `/root` 角色标签，独立性依据实际任务和作者身份，不依据该通用标签。
- 被审包：[D32 Gate6 V0.1](../06_handoff/CONV-RFQ_D32_GATE6_HANDOFF_PACKAGE_V0.1.md)，SHA256 `3a74c012e559a3df401039f1434889e447a86de7bdc688001ae5ed56e1c67e3b`，18542 bytes。
- 作者自检：[PACKAGE_CHECK V0.1](../06_handoff/CONV-RFQ_D32_GATE6_PACKAGE_CHECK_V0.1.json)。自检作为输入，不替代本次独立判断。
- 直接读到来源任务用户 turn `01a0bdfb-7bc8-7783-aaee-fe1e6238d18e`：“同意。交给01开发执行Gate8的开发。”；该任务明确承接对象为 CONV-RFQ。既有开发授权不代表本次 Gate6 已关闭，也不含真实提交、PR、merge或发布。
- 方法：[Gate6基线V1.1](../../../../docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md)，Agent V0.7、页面合同一致性核验 V0.3、开发交付规格整理 V0.3；按执行合同 V1.1 与 Gate5→6 接收合同 V1.0。当前工作流 V3.3 和 D32切换决定解释旧技术栈/编号。
- 路径：`ESCALATED_PATH`，扩大范围限于 D32新增技术映射、精确合同继承与依赖/验收映射。不是重做 Gate2 Buyer Review 或上游视觉审查。

读取根 AGENTS、Context、Index、相关治理章节、Conversion Playbook、Brief V1.2.2、登记与关键词行、包§2来源、Gate2批准关闭、Gate5用户/总控关闭、Gate7关闭及当前方法原文。Brief中旧国家select/Unit选择以及Playbook的额外字段，按较后精确Gate2/Gate7合同解释，不恢复旧要求。

Gate5用户批准、总控审查与16项冻结文件身份可继承；Gate7 V1.2明确继承V1.0精确值、V1.1 owner修订。Gate9 V1.6中的旧D16通过、receiver尝试和环境不能迁移为D32证据。未重渲染或重新评价批准图的审美/视觉质量；只核对冻结身份与新合同对其引用。

## 2. 独立核验事实

使用 PowerShell `Get-FileHash` 独立计算包及作者清单中的15份来源；15/15 SHA256一致。使用只读 Python hashlib解析Gate5 Manifest，12份PNG/SVG及4份规格/验证/关闭文件，16/16身份一致。Gate6基线所列Agent、两项Skill、执行合同及接收合同，5/5身份一致。

哈希一致仅证明对象，不能证明新增摘要无遗漏。没有执行D32代码、CMS写入、浏览器运行测试、真实provider请求或邮件；没有读取secret配置；报告不复制受限收件人值。

## 3. 15项AC的来源与覆盖核对

下表是本次独立检查的来源定位，不是D32实际验收PASS，也不替代作者应补齐的交付映射。缩写：G7-P/M/A分别为旧Gate7 Handoff Package、CMS/API/Component Mapping、Acceptance and Blockers；版本均为V1.0，owner解释叠加相应V1.1。G2为Full Copy V1.1。

| D32 AC | 主要批准/技术来源 | 本次合同判断 |
|---|---|---|
| 01 IDENTITY-CONTENT | G2 §1；G7-P §2–4 | 身份、Hero、模块和唯一正文CTA相符 |
| 02 FIELDS-OPTIONS | G2 §1.4、§3；G7-M §3–5 | 需F02纠正输入数量表述及精确值权威遗漏 |
| 03 VALIDATION-A11Y | G2 §3–4；G7-P §14；G7-A §4 | 摘要可追溯；保留失败消息焦点、逐字段消错和共享Menu键盘要求，不能仅按AC摘要缩减 |
| 04 STATE-ACK | G7-M §6、§8；G7-P §6–7 | 明确肯定应答原则正确，具体响应分支需F03 |
| 05 PREFILL | G2 §2、§8；G7-M §7–8 | 可见可编辑、清空、无隐藏必填及不推导产品关系相符；生产用例须覆盖process/document/resource上下文 |
| 06 SERVER-SECURITY | G7-P §7、§11；G7-A §4；D32 AGENTS架构/安全规则 | 服务端校验与安全输出为合理技术映射；无真实提交授权保持 |
| 07 CMS-MIGRATION | D32 AGENTS内容管理/迁移规则；D32切换决定§3 | 可编辑、保留现有编辑、隔离数据测试及恢复要求成立 |
| 08 SCOPE-ISOLATION | G7-P §11；G7-M §9、§12 | 正/错/缺scope及缓存负例覆盖适用层 |
| 09 SHARED-CHROME | G7-P §10、§14；G7 V1.1 owner矩阵；D32 AGENTS | owner和无分叉原则正确；共享未就绪仍须可追溯依赖，见F01 |
| 10 SEO-SCHEMA | G2 §7；G7-P §12；出版合同§6；PRODUCT-000域名决定 | Title/Meta逐字一致，正式域名定向覆盖、clean canonical、允许Schema及预览noindex成立 |
| 11 RESPONSIVE-VISUAL | G2 §9；Gate5冻结组合；G7-P §14 | 八宽度、44px和200%来自既有合同，不是新增要求；批准专属单列边界仍有效 |
| 12 EXTERNAL-ROUTES | G7 V1.1 owner/最终入口；Privacy override | Sample/Documents不可隐藏成立；Privacy条件冲突见F04 |
| 13 ANALYTICS | G7-P §8；G7-M V1.1 §6 | 不新增分析系统、consent控制、无PII及仅receipt计成功成立；不得因此豁免独立Cookie/CMP依赖，见F01 |
| 14 RECEIVER-CONFIG | G7-P §7；Gate9 V1.6 external-root；D32 AGENTS | secret隔离、mock测试与真实收件尚未证明边界正确；原root ID须保留，见F01 |
| 15 EVIDENCE-HANDOFF | Gate8→9机器交接合同；D32切换决定§2–3 | commit/data/runtime/artifact身份与保持义务成立；WordPress适配不可伪造Next Build验证结果 |

反向检查同时读取G7-A §2–6、G7-M §3–12及G2完整正文。公开文案、产品关系限制、无fallback、安全与回滚要求可通过明确继承继续有效；旧依赖原ID和若干精确值/条件分支未被新摘要准确承接，以下为必修。

## 4. 必修Findings

### RFQ-D32-G6-F01 — 原依赖ID与新AC/DEP缺少可执行映射，CMP被条件化

- 严重度：P2 / 本阶段必修。Owner：Gate6包作者/Controller。
- 位置：新包§5–6及§9；旧G7-A V1.0 §2，Gate9 V1.6 §3；Gate5→6合同§4。
- 预期：保留原开放项ID、来源和状态；新的D32 AC/DEP可增加，但须与原控制建立对应关系，明确阻断层级。无需把旧D16已测结论变成D32通过。
- 实际：新包重新列出5个 `RFQ-D32-DEP-*`，没有 `RFQ-G7-B01`–`B13` 或仍开放的 `RFQ-EXTERNAL-RECEIVER-ROOT` 对应关系。§6 DEP-05把“Consent Manager和同scope analytics consent真实行为”整体限制为“仅在启用analytics时适用”，而旧G7-A的B07（CMP、Cookie Settings、Cookie/storage inventory）与B08（analytics）是不同控制。DEP-03仅提Cookie Settings共享就绪，未明确接住不启用analytics时仍存在的共享Cookie/CMP与inventory要求。15项AC无逐项来源列，作者JSON仅数ID/验证文件hash，未记录其声称的双向覆盖。
- 影响：开发和Gate9可能在不启用analytics时略过原共享依赖，或无法判断新DEP关闭是否同时关闭旧receiver root；整包关闭缺少可追溯依据。
- 修订：在现有包内补一张精简映射，将原B01–B13及external-root逐项映射至适用D32 AC/DEP或明确继承条款。保持原ID/来源，分别写D32未测、后置owner、接受证据与阻断层级；不复制第二套状态台账。拆开CMP/Cookie与analytics适用条件。
- 接受条件：所有适用原控制有去向、所有新AC有来源；无analytics场景仍能定位共享Cookie/CMP需要的结果、owner与后置处置；mock PASS不能关闭生产receiver root。

### RFQ-D32-G6-F02 — “唯一逐字权威”不能覆盖已批准placeholder，且把固定单位列为可输入字段

- 严重度：P2 / 本阶段必修。Owner：Gate6包作者。
- 位置：新包§3“字段…唯一逐字权威为G7 Mapping §3–8”和“12个可输入字段”；AC-02。批准G2 §1.4 Destination Country与Quantity。
- 预期：Destination Country的placeholder为 `Enter the destination country`；11个用户可编辑控件，另有固定非编辑 `quantity_unit=MT` 语义字段，不能另增Unit input/select。
- 实际：被指定为“唯一逐字权威”的G7-M §3–8没有该placeholder；新包也未把它补进引用规则。“12个可输入字段”包含固定不可编辑quantity_unit，与同节后文及G2“不设第二输入控件”相冲突。
- 影响：仅按新包和指定唯一清单实现，可能遗漏精确placeholder或为单位创建多余控件；AC-02的“12字段”不能清楚区分语义字段与可输入控件。
- 修订：明确G2 B是完整Buyer Clean权威，G7-M承接字段/状态映射而不替代未列入的原值；精确引用该placeholder。改为“12个语义字段，其中11个可编辑控件、1个固定MT显示/系统值”，或同等无歧义表述。
- 接受条件：AC-01/02明确覆盖placeholder与固定单位，无第12个可输入控件、无Unit select或radio；无需改任何批准原文。

### RFQ-D32-G6-F03 — 响应分支摘要把HTTP 2xx一概归为unconfirmed

- 严重度：P2 / 本阶段必修。Owner：Gate6包作者。
- 位置：新包§4.3“HTTP 2xx、空 body、任意 message、timeout或解析失败均为submission_unconfirmed”；G7-M §8。
- 预期：不能仅凭2xx成功；但2xx且解析得到明确肯定接受结果可以receipt_confirmed。已注册field errors应映射validation_failed，配置不可用应映射service_unavailable，其他无确认结果才映射submission_unconfirmed。
- 实际：前一句要求 `success === true`，后一句又将“HTTP 2xx”不加限定地归为unconfirmed；没有在这段新adapter合同区分已注册field errors和配置不可用的优先分支，尽管旧§8保留它们。
- 影响：开发可按两个相反分支实现同一成功响应，或吞掉批准的字段错误/不可用状态。该问题是新增合同表述歧义，未声称D32已有实现缺陷。
- 修订：改成“HTTP 2xx本身不足以确认成功”，列明与旧§8一致的分支及优先规则；业务拒绝、已注册field errors、configured unavailable与歧义响应分开。不得为了清晰而添加自动重试或真实provider测试。
- 接受条件：deterministic测试要求明确覆盖2xx+明确true→receipt_confirmed、2xx+false/empty/malformed→unconfirmed、registered field errors→validation_failed并保值、configured unavailable→service_unavailable。成功不得由message或HTTP状态单独决定。

### RFQ-D32-G6-F04 — Privacy链接显示条件的覆盖关系未写清

- 严重度：P2 / 本阶段必修。Owner：Gate6包作者/Controller；超出既有授权时交Legal/原owner决定。
- 位置：新包§2.7、§4.2、AC-12；[Privacy override V1.0](../06_handoff/CONV-RFQ_LEGAL_PRIVACY_DEPENDENCY_OVERRIDE_V1.0.md) §3。
- 预期：接手者能够唯一确定Privacy在目标未就绪时的显示规则，并追到适用批准来源。
- 实际：新包要求Privacy未就绪不改变最终表面，AC-12要求准确链接可见；同时直接继承的2026-09-02 Privacy override写明“The link is present only when the approved route is ready”。包只解释该override的路径与无Terms，未说明其条件显示条款是否被后续根规则/明确决定覆盖。旧Gate5可见链接批准早于该override，不能只用它消除日期冲突。
- 影响：一个实现会始终显示链接，另一个会按readiness隐藏；两者无法同时满足当前包声称保留的全部合同。
- 修订：精确登记该句的当前适用解释及后续权威依据；若按根AGENTS完整网站原则保留最终链接，明确覆盖该旧条件并保留真实route readiness作为集成/发布依赖。不要静默改历史原件，也不要擅自新增替代链接或恢复Terms。
- 接受条件：包与AC-12对Privacy未就绪的可见行为只有一个明确答案，覆盖依据可核对；真实目标未就绪仍保持对应集成/发布阻断，不阻止获授权的隔离页面实现。

## 5. 已确认边界与未测

新包正确区分D23合同与D32实现，WordPress主题/插件划分符合D32根规则；幂等迁移、不覆盖后台编辑、scope fail-closed、共享owner与无分叉要求成立。正式域名来自PRODUCT-000控制记录中精确定位的用户决定，不是从旧域名自行推导；本次核对该记录及覆盖范围，没有再次实施域名配置。

15个错误字符串、正文Hero/notice/其他请求、Title/Meta与批准源对齐；本报告的F02针对精确来源完整性，而非重写这些已批准值。provider肯定应答、失败保值、secret/PII不入公开输出、mock-only和禁止真实提交是正确底线，F03要求消除分支歧义。

未核验生产账户绑定、真实收件、DPA/retention、外部路由/共享环境的实际就绪；这些是owner后置证据，不是本报告要求先实现的条件。未调用联网工具验证provider当前产品能力，因此 `success === true`只作为本包定义的adapter接受合同审读，不宣称本次实测Web3Forms API。后续实际adapter应按接入时的官方合同验证，仍不得无授权真实发送。

本次未审D32源代码或运行页面，不将15项AC标为实测通过；未复审Gate5图像内容。未修改任何包、历史批准源、Manifest、Status或D32文件。

## 6. 返修和复核范围

返回包作者在新版本中处理F01–F04并更新自检身份。Reviewer定向复验：依赖/AC来源映射、11+1控件与placeholder、adapter结果分支、Privacy优先级和相邻条款一致性。其他有效合同范围精确继承，不重开Gate2或Gate5，不新增整页审查轮次。

在四项必修关闭前，本包保持 `NOT_YET_DISPATCHABLE`；不得引用本报告为Gate6 PASS。全部关闭后由不同身份Reviewer给出新版本结论，总控再按既有授权处理Gate6关闭和派发。
