# CASE-RFQ · 隔离内容练习

日期：2026-09-06。状态：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`（仅方法验证成果，不是页面 Gate 审查或批准）。

唯一内容输入：`D:/23MySec/99_workspace/gate2-skill-validation/2026-09-06/inputs/CASE-RFQ.md`。遵守指定角色与项目规则；未读取 Skill、设计历史、其他验证结果或真实页面源文件，未联网。以下只处理摘录范围。

## B. Buyer-facing English copy

本节为可见文案编辑源。B1–B5依次出现；B6按对应交互状态出现，不同时堆在初始页面。字段、选项、占位和帮助文字逐项列出，标题编号和文档说明不渲染。

### B1. Hero

**B2B QUOTATION REQUEST**

# Request a Titanium Dioxide Quote

Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and respond to your quotation request.

### B2. Form introduction

## Quotation request details

Required fields are marked. Please use business information and avoid confidential formulations, account credentials, payment details or sensitive personal information.

### B3. Form fields

#### Your requirement

**Product / Grade (required)**

Select a product or grade

Options, in order:

- M-350
- M-510
- M-896
- M-996
- M-2196
- M-895
- M-200
- M-108
- M-210
- M-340
- M-886
- M-52
- M-2377
- CR-901
- Not sure / Need help

**Application (required)**

Select an application

Options, in order:

- Coatings
- Plastics
- Masterbatch
- Printing Inks
- Paper
- Specialty Materials
- Other / Not sure

**Required Quantity (required)**

Metric tonnes (MT)

**Destination Country (required)**

Enter the destination country

**Destination Port / City (optional)**

Add this only if it is already known.

#### Company details

**Company Name (required)**

**Your Name (required)**

**Business Email (required)**

Use the business email where we can respond to this request.

**Phone / WhatsApp (optional)**

**Website (optional)**

#### Additional requirements

**Additional Requirements (optional)**

Add any non-confidential specification, packaging, schedule, document or other context that may help us review the request.

### B4. Privacy and submit

We use the information you provide to review and respond to your quotation request. Learn more in our **Privacy Policy**.

**REQUEST QUOTE**

### B5. Alternative requests

## Other request types

To request a sample or documents instead of a quotation, use the relevant form.

[Request a Sample](/request-sample/)

[Request Documents](/request-documents/)

### B6. Validation and submission copy

#### B6.1 Validation summary

**Please review the highlighted fields.**

Correct the information below and try again. Your other entries are still here.

#### B6.2 Field messages

| ID | Field message |
|---|---|
| E01 | Select a product or grade, or choose “Not sure / Need help.” |
| E02 | Select an application. |
| E03 | Enter a quantity greater than 0. |
| E04 | Enter a destination country. |
| E05 | Keep the destination country to 100 characters or fewer. |
| E06 | Keep the destination port or city to 120 characters or fewer. |
| E07 | Enter your company name. |
| E08 | Keep your company name to 160 characters or fewer. |
| E09 | Enter your name. |
| E10 | Keep your name to 100 characters or fewer. |
| E11 | Enter your business email. |
| E12 | Enter a business email in the format name@company.com. |
| E13 | Keep the phone or WhatsApp number to 40 characters or fewer. |
| E14 | Enter a complete website address or remove this optional value. |
| E15 | Keep additional requirements to 2,000 characters or fewer. |

#### B6.3 Submitting

**SUBMITTING…**

#### B6.4 Submission failure

**Something went wrong while submitting your request.**

Your information is still here. Please try again.

**TRY AGAIN**

#### B6.5 Success

**Thank you. We’ve received your quotation request.**

Our team will review the details and contact you using the information provided.

## C. 操作与状态合同（内部，不渲染）

### C1. 页面顺序与行动

- 顺序为B1 Hero → B2表单引导 → B3三个字段组 → B4隐私说明与提交 → B5替代请求。保留已有结构，无新增Human Review模块、FAQ或推荐模块。
- Hero无按钮。B4的表单提交是页面正文唯一实心CTA；提交中和失败时沿用同一主行动语义。B5两条链接为低权重任务切换，不提交RFQ，也不代表样品或文件已获批、可用或可释放。
- B5目标明确为 `/request-sample/` 与 `/request-documents/`。不补造跨表单自动迁移、草稿跨页保留或其他参数。
- B4中的Privacy Policy必须是可见文本链接，绑定批准共享隐私路由；输入未给出具体URL，不猜测 `/privacy/` 等地址。无需隐私同意、收讫、确认或Phone/WhatsApp复选框。
- 共用Header、Mobile Menu与Footer按owner合同消费；提交中其中的Request a Quote导航保持可见。不重写共享文案或推导导航URL。
- 不生成摘录外SEO、GEO、Schema、Canonical或社交元数据。

### C2. 字段、约束与对应错误

可见标签、选项、帮助与错误以B为唯一编辑源；此处只规定行为。必填指示采用B3的可见 `(required)`，程序化关联到控件，不能只靠颜色或视觉位置表达。

| 字段 | 固定控制及约束 | 错误触发 → B6.2 |
|---|---|---|
| Product / Grade | 必填选择；精确采用B3顺序。未知Grade选项有效，不自动拒绝。无推荐、比较、排名、等效或可用性帮助文字 | 空 → E01 |
| Application | 必填选择；精确采用B3顺序。只记录买家上下文，不选择、推荐或验证Grade | 空 → E02 |
| Required Quantity | 必填正数输入；B3单位为可见、不可编辑的相邻固定后缀；无单位选择、kg或Other选项 | 空、非数字或不大于0 → E03 |
| Destination Country | 必填单行自由文本；B3文字作placeholder；trim后最多100个Unicode字符。不使用下拉、国家清单、代码、分类或自动规范化 | 空或纯空白 → E04；trim后超100 → E05 |
| Destination Port / City | 可选；最多120字符 | 超120 → E06 |
| Company Name | 必填；trim后2–160个Unicode字符 | 空或trim后不足2 → E07；超过上限 → E08 |
| Your Name | 必填；trim后2–100个Unicode字符 | 空或trim后不足2 → E09；超过上限 → E10 |
| Business Email | 必填；检查语法，最多254字符 | 空 → E11；无效或超254 → E12 |
| Phone / WhatsApp | 可选；最多40字符；保留国际号码开头的 `+`，后续规范化不得丢弃 | 超40 → E13 |
| Website | 可选；提供时须符合既有有效地址校验；最多2,048字符 | 无效或超2,048 → E14 |
| Additional Requirements | 可选；最多2,000字符 | 超2,000 → E15 |

不新增未提供的数量精度、步进、最小订单量、邮箱域名限制、国家服务范围或额外必填字段。除源合同明确要求trim的位置外，不扩展字符处理规则。邮箱语法、公司名称或网站域名均不证明身份、授权、投递成功或企业能力。

### C3. 预填与上下文

所有预填仅进入既有字段，可见且可修改。无独立Selected Context面板、标签栏或状态消息。

| 明确输入来源 | 既有字段 | 处理 |
|---|---|---|
| 已登记Product / Grade | Product / Grade | 仅选择精确匹配的受支持选项 |
| 已批准Application | Application | 仅选择精确匹配选项，不由此推断Grade |
| 买家或上游动作明确提供的实际国家文本 | Destination Country | 保留为可编辑国家文字；不做国家代码、清单或分类映射，不自动填入European Union等广义市场/地区 |
| 已批准公开文件标签 | Additional Requirements | 仅携带中性可编辑文字 |
| 已批准公开资源主题 | Additional Requirements | 仅携带中性可编辑文字 |
| 明确批准的M-2377工艺上下文 | Additional Requirements | 可携带中性 `Sulfate`，不作适用性判断 |

不支持、过期或格式异常值回到中性空状态，不产生首屏错误。Country空值、纯空白、无效或超过100字符的预填同样清空。输入未规定独立国家识别库或更多有效性判据，不能借“无效”增加查表、市场限制或自动国家规范化。

不承诺兼容、等效、替代、供应、服务、审批或监管结果。不在本文补造参数名、多源合并/覆盖顺序或未给出的中性标签正文。

### C4. 校验、焦点与数据保留

- 初始无校验摘要；买家尝试提交或编辑某字段后有意义地离开该字段之前，不把未填必填字段宣布为错误。丢弃不支持的预填不报错。
- 无效提交显示B6.1并移焦至摘要；各错误条目链接到关联控件，点击后移动焦点，不清除其他条目。
- 每个错误在字段旁显示并程序化关联，不能只靠颜色。字段有效后只移除该字段错误。
- 所有输入、选择、链接和按钮都有可见焦点；焦点顺序沿B的语义顺序。移动菜单开关沿用共享焦点合同。
- 失败不移焦到Header、Footer、Contact或不可用路由。
- 仅继承本次表单交互中的保留合同；不据此承诺刷新后、关闭页面后、跨设备或跨请求类型的数据保留，也不推导服务器保留期限。

### C5. 提交与人工处理

| 阶段 | 可见文案引用 | 固定行为 |
|---|---|---|
| 正常 | B4 | 表单提交；后台接收地址在摘录中未提供，不虚构 |
| 提交中 | B6.3 | 防止重复激活直到本次尝试结束；输入保持可见；共享询价导航保持可见 |
| 失败 | B6.4 | 焦点移至失败消息；全部买家输入保留并可重试；无Contact链接、邮箱、电话、引用编号、收讫暗示或响应时限 |
| 成功 | B6.5 | 仅在最终表单接收方返回经验证的明确成功收讫响应后出现；接收进行人工审阅，不等于已经报价或批准 |

成功不确认价格、MOQ、库存、交期、运送、样品、文件、订单、监管或其他商业结果。信息不足时团队可通过已提供联系方式澄清；无报价或回复SLA。表单不计算适用性、不推荐或排名型号、不提供自动资格判定。Application、Destination与Additional Requirements均为需求上下文，不建立已批准产品关系或服务承诺。

### C6. 后续依赖与练习边界

共享隐私路由的精确地址、实际接收端与其成功信号、共享焦点合同的实现、真实运行中的保留及防重复行为均未在摘录完整提供；这里只继承必要行为，没有实施或测试证据。这些是正式交付时应由相应owner提供并验证的依赖，不妨碍本练习给出正常最终买家体验，也不需要因此隐藏现有链接。

## D. 中文重要取舍与自检

### D1. 实际改动与保留

| 位置/原文 | 买家影响（分析判断） | 处理与结果 |
|---|---|---|
| Hero：`prepare the appropriate commercial response` | 表述抽象，买家需要自己解释“commercial response”与本次询价的关系 | 改为B1的 `respond to your quotation request`，说明下一步仍是团队处理询价；未加入报价保证或响应时间 |
| 替代请求：`sample review or controlled document request` | `controlled`是流程控制语言；`sample review`不如申请样品直接，增加理解步骤 | 改为B5：`To request a sample or documents instead of a quotation, use the relevant form.` 保留两项真实申请链接，未改成下载或立即取得样品 |
| 必填可见指示分散在字段规范及错误规则 | 如果只复用裸标签，买家不能直接看出哪些必须填写 | B3给必填字段统一呈现 `(required)`；保留原有可选标记，无新增必填项 |
| 产品/应用选项、三个字段组、单位、帮助、隐私、提交与结果文字 | 原文已支持任务完成；大量改写不能自动带来改善 | 除上述明确位置外保留。Product / Grade不加额外推荐帮助，未知Grade由已有有效选项承接 |
| 数据、国家、审批等内部限制 | 直接堆入正文会把操作表单变成治理说明 | 完整保留到C，B只保留输入指引、隐私用途及用户需看见的状态，无逐段免责声明 |

保留B6.2全部既有错误字符串，未改写固定状态合同。发现其中E07/E09未明确2字符下限，E12/E14把格式错误与长度上限合并成通用提示：极端长度输入的纠错指引不充分。由于本练习固定状态合同，记录为重要后续文案候选，不自行拆分错误分支或覆盖明确的exact copy。若后续授权修订，可分别明确最小长度，并对超长邮箱/网址提供长度提示；本次不声称该问题已经解决。

### D2. 四项自检

1. **任务可完成：** B1–B5保持单一正式RFQ路径，需求→公司联系方式→补充信息→隐私与提交。未知Grade可以选择，Country是自由文本；无额外Human Review模块或FAQ。边缘错误指引局限见D1，未被总分掩盖。
2. **文案可独立理解：** B1说明团队会处理询价，B3说明所需信息及单位，B6.4提供保留和重试，B6.5说明已收到且将人工联系。买家不需读取C即可理解正常任务与下一步；共享隐私精确URL仍需正式绑定。
3. **名称符合行为：** B4申请报价，B5切换请求类型，B6.5只确认收讫；没有“已报价”、下载、批准、库存查询或时限保证。成功状态条件在C5保持严格。
4. **上下文与责任正确：** C2–C4逐项承接固定字段、可编辑预填和校验/焦点/保留合同，没有国家下拉、地区自动填充、Grade推断或跨页自动迁移承诺。未修改任何真实页面或Manifest。

这是文案与合同对照自检，不是真实用户测试、独立审查或运行验收。未添加技术性能、企业能力、原产地或监管等新事实；输入要求不处理摘录外元数据，因此没有用未提供的SEO/Schema材料补全页面。

### D3. 交付与未完成项

- 本练习要求的英文表单文案、全部摘录内错误/提交文字、独立操作合同与中文取舍已交付。
- 待总控独立比较本结果与原始CASE输入；本报告没有自行授予PASS或关闭Gate。
- 真实页面发布、元数据、共享路由落实、接收端实施及浏览器运行验证不属于练习；未开展，不能视为已完成。
- E07/E09/E12/E14纠错具体性局限按D1保留供后续授权判断；本次没有擅改固定状态文案。
