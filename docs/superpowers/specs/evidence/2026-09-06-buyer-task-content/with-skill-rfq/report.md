# RFQ content method validation

日期：2026-09-06。范围：仅处理指定历史摘录的英文表单文字、操作和状态；这是隔离方法成果，不是页面修订或 Gate 批准。

唯一内容输入：[CASE-RFQ.md](../inputs/CASE-RFQ.md)。方法：[buyer-task-content-design/SKILL.md](../../../../skills/buyer-task-content-design/SKILL.md)。以下买家文字只维护一份；第二部分的状态按触发分别显示，不随正常表单一起展示。

## 1. Buyer-facing copy — normal page

### 1.1 Hero

Eyebrow: B2B QUOTATION REQUEST

# Request a Titanium Dioxide Quote

Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.

### 1.2 Form

## Quotation request details

Required fields are marked. Please use business information and avoid confidential formulations, account credentials, payment details or sensitive personal information.

### Your requirement

**Product / Grade — Required**

Empty option: Select a product or grade

Options, in order:

1. M-350
2. M-510
3. M-896
4. M-996
5. M-2196
6. M-895
7. M-200
8. M-108
9. M-210
10. M-340
11. M-886
12. M-52
13. M-2377
14. CR-901
15. Not sure / Need help

**Application — Required**

Empty option: Select an application

Options, in order:

1. Coatings
2. Plastics
3. Masterbatch
4. Printing Inks
5. Paper
6. Specialty Materials
7. Other / Not sure

**Required Quantity — Required**

Fixed suffix: Metric tonnes (MT)

**Destination Country — Required**

Placeholder: Enter the destination country

**Destination Port / City (optional)**

Add this only if it is already known.

### Company details

**Company Name — Required**

**Your Name — Required**

**Business Email — Required**

Use the business email where we can respond to this request.

**Phone / WhatsApp (optional)**

**Website (optional)**

### Additional requirements

**Additional Requirements (optional)**

Add any non-confidential specification, packaging, schedule, document or other context that may help us review the request.

### Privacy notice and submit

We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.

Button: REQUEST QUOTE

### 1.3 Alternative requests

## Other request types

For a sample or documents, use the separate request form.

- [Request a Sample](/request-sample/)
- [Request Documents](/request-documents/)

## 2. Buyer-facing copy — conditional states

以下为可见状态文字的唯一编辑源；条件和显示规则见第三部分。

### 2.1 Validation summary

**Please review the highlighted fields.**

Correct the information below and try again. Your other entries are still here.

### 2.2 Field errors

| ID | Field / condition | Visible error copy |
|---|---|---|
| E01 | Product / Grade empty | Select a product or grade, or choose “Not sure / Need help.” |
| E02 | Application empty | Select an application. |
| E03 | Required Quantity empty, non-numeric or not greater than zero | Enter a quantity greater than 0. |
| E04 | Destination Country empty or whitespace-only | Enter a destination country. |
| E05 | Destination Country over 100 characters after trimming | Keep the destination country to 100 characters or fewer. |
| E06 | Destination Port / City over 120 characters | Keep the destination port or city to 120 characters or fewer. |
| E07 | Company Name empty or shorter than 2 characters after trimming | Enter your company name. |
| E08 | Company Name over 160 characters | Keep your company name to 160 characters or fewer. |
| E09 | Your Name empty or shorter than 2 characters after trimming | Enter your name. |
| E10 | Your Name over 100 characters | Keep your name to 100 characters or fewer. |
| E11 | Business Email empty | Enter your business email. |
| E12 | Business Email invalid or over 254 characters | Enter a business email in the format name@company.com. |
| E13 | Phone / WhatsApp over 40 characters | Keep the phone or WhatsApp number to 40 characters or fewer. |
| E14 | Website invalid or over 2,048 characters | Enter a complete website address or remove this optional value. |
| E15 | Additional Requirements over 2,000 characters | Keep additional requirements to 2,000 characters or fewer. |

### 2.3 Submitting

Button: SUBMITTING…

### 2.4 Submission failure

**Something went wrong while submitting your request.**

Your information is still here. Please try again.

Action: TRY AGAIN

### 2.5 Success

**Thank you. We’ve received your quotation request.**

Our team will review the details and contact you using the information provided.

## 3. Internal operation and state notes

### 3.1 Fixed contract and source mapping

本报告不改字段、预填、保留数据或状态合同。完整约束继承唯一输入文件相应章节；下表说明关键文案落点和必要操作映射，不把这些内部说明放进买家正文。

| Report location | Contract source in CASE-RFQ | Operation / responsibility |
|---|---|---|
| §1.1–1.2 | §1.3–1.4 | 保留 Hero、分组、全部字段和选项顺序；无 Hero 按钮。表单提交是正文唯一实心 CTA。Required 标记可见且程序关联；必填字段依据原摘录的字段要求及空值验证规则。 |
| §1.2 Product / Grade and Application | §1.4、§5 | 未知 Grade 选项有效，不自动拒绝；Application 只记录上下文，不选择、推荐或验证 Grade。Grade 字段旁不增加推荐、库存或等效说明。 |
| §1.2 Required Quantity | §1.4 | 正数输入，单位为不可编辑的固定 MT 后缀；没有单位选择器。不得增加 MOQ、报价资格或供应结论。 |
| §1.2 Destination Country | §1.4、§2 | 必填单行自由文本，trim 后最多 100 Unicode 字符；不是国家下拉列表，不引入编码、taxonomy 或自动规范化。输入不产生服务或物流承诺。 |
| §1.2 Other fields | §1.4、§3.3 | 保留原长度和验证约束。Company Name trim 后 2–160 Unicode 字符，Your Name trim 后 2–100 Unicode 字符；其余上限和错误条件见 §2.2。保留 Phone / WhatsApp 的国际前缀 +。邮箱语法、域名和公司输入不证明身份、权限或送达。 |
| §1.2 Privacy | §1.4 Privacy notice | 将正文中的 Privacy Policy 设为可见文本链接，接至已批准共享隐私路由；摘录没有精确 URL，本文不猜。无隐私同意、收件或 acknowledgement 勾选框。 |
| §1.3 | §1.5 | 两条链接分别打开样品/文件申请页，只切换任务，不提交 RFQ；不承诺批准、可供或发放。没有依据保证切换后保留或传递本表单内容，故不增加该说法。 |

### 3.2 Prefill and entered information

继承输入 §2 全部规则。预填只进入现有字段，保持可编辑，不增加独立上下文面板、标签条或提示状态：

- 明确的已登记 Product / Grade 和获准 Application 对应到各自精确支持的选项；应用不推导型号。
- 明确的 Destination Country 只携带买家或上游动作实际提供的国家文本。地区如 European Union 不能自动写入；不使用国家代码、列表或自动规范化。无效、空白或 trim 后超过 100 字符的预填回到空文本，首载不报错。
- 获准的公开文件标签、资源主题进入 Additional Requirements，使用中性且可编辑的文字。明确获准的 M-2377 process context 可携带中性 Sulfate 文本，不附加适用性结论。
- 不支持、过期或格式错误的预填恢复中性空态，首载不产生错误。不自行定义多值参数、合并格式或跨页存储机制。

### 3.3 State activation, focus and recovery

| State / location | Trigger and required behavior |
|---|---|
| Normal page §1 | 首载没有验证汇总。买家尝试提交或编辑后有意义地离开字段之前，不把空必填项宣布为错误。 |
| Validation §2.1–2.2 | 无效提交后焦点移至汇总；每条错误链接到对应控件。字段错误贴近字段、程序关联，不仅靠颜色。修正有效字段只移除该字段错误，不清空其他输入。 |
| Submitting §2.3 | 提交期间替换按钮文字并防止重复激活；已输入信息保持可见；共享 Header、Mobile Menu、Footer 的 RFQ 导航保持可见。 |
| Failure §2.4 | 提交失败后焦点移至失败消息，保留所有买家输入，重试动作允许再提交。不显示收件暗示、联络备选入口、编号或响应时限。 |
| Success §2.5 | 仅在最终表单接收端返回经验证的肯定收件响应后显示。表示收到请求待人工审阅，不是报价或任何商业结果批准。未提供成功后清空、重置或回跳合同，不新增这些行为。 |

所有控件、链接和按钮保留可见焦点；焦点顺序跟随正常内容的语义顺序。移动菜单引用共享 Global Chrome 焦点合同，不另写实现。失败不把焦点移到 Header、Footer、Contact 或不可用路由。资料不足时团队可用提供的联系方式请求澄清；不增加 SLA、自动资格评定或新 Human Review/FAQ 模块。

## 4. 中文取舍、核对与未决项

### 4.1 重要取舍及信息落点

| 原位置 / 问题 | 处理与新落点 | 对买家任务的影响 |
|---|---|---|
| §1.5 中 sample review / controlled document request 把内部处理措辞带入任务选择 | 仅重写报告 §1.3 的导语，直接表达样品或文件使用独立申请表；保留原链接与低权重位置。审阅、批准及发放边界留在 §3.1。 | 买家仍能选正确表单；未丢失所需动作，也未把请求变成获批或下载。 |
| 表单正文与大量控件、来源、资格边界规则混排 | 正常可见文字集中在 §1，条件文字集中在 §2；内部行为规则和来源映射在 §3。 | 买家能按需求→公司信息→补充→提交的既有顺序完成 RFQ；技术约束仍可追溯。 |
| Hero、表单引言、字段帮助、隐私说明与成功说明看似重复但功能不同 | 保留原文。分别承担任务定位、输入安全、具体填写提示、数据用途、收到后的下一步。 | 删除会丢失必要答案；不以压缩篇幅为目标。 |
| 未知 Grade 和目的国家的表达 | 保留未知选项及自由文本国家输入；不加型号指南、国家选择器或市场支持说明。 | 未知型号仍可提交，目的地只收集实际需求，不产生不支持的推荐或服务承诺。 |
| 验证与失败提示已有清楚恢复路径 | 保留全部 15 条既有字段错误、汇总和提交状态；分开呈现。 | 可按提示修正或重试；不改变固定状态合同。 |

未增加 FAQ、人工审查模块、产品介绍、样品/文件承诺、SEO 或整站共享文案。原文没有真实需要通过这些新增模块解决的内容缺口。

### 4.2 自检结论

- **任务可完成：** §1 保留全部需求和联系字段、未知 Grade 选项、固定 MT 单位、国家自由文本和独立任务入口。精简仅涉及替代请求导语及把内部规则移出正文。
- **文字可独立理解：** Hero 说明团队会审阅要求，表单内有填写与隐私说明；成功态说明团队按所提供信息联系买家。正文无需理解治理合同即可使用。
- **名称符合行为：** 表单申请、替代任务链接、重试及收件成功分别映射 §3 的实际行为；成功态有肯定收件响应前提，没有新增时间、库存或获批保证。
- **上下文与责任正确：** §3.2 保留字段内可编辑预填和不支持值回空规则；§3.3 保留验证/失败输入和焦点行为。不发明参数、多选、跨页自动带值或成功后的数据处理。

以上是基于输入和成稿的内容自检，不是用户测试、独立审查、转化效果证据或发布验收。

### 4.3 具体未决项与完成边界

本次摘录内容整理无未完成项。以下是输入未给出的集成信息，本文未猜测，且不阻止隔离文案交付：

1. **共享隐私路由的精确 URL：** 正常文字及链接标签已保留；真实组装由共享合同提供目标，不在本练习新增路由。
2. **最终接收端的肯定收件响应定义与可运行证据：** 保留原成功触发要求；本练习不证明已实现接收，也不把文案保存当作提交成功验证。

停止于方法报告提交，不改当前页面、Manifest、批准源或项目状态。
