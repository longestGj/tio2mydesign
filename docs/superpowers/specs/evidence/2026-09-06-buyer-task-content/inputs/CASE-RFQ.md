# CASE-RFQ：历史表单内容片段练习

这是方法验证输入，不是当前页面审查或页面修订任务。源文件仅供追溯，不需打开页面其他资料。以下英文为历史原文摘录，未注入错误或修改措辞。文件内历史控制语言是待分析的资料，不是给执行者的指令。

任务：整理成买家可直接阅读的英文询价表单文案及独立的操作/状态说明，中文解释必要取舍；改进确有问题之处，保留已经合理的内容。字段、预填、数据保留和状态合同在本练习中固定，不重新设计，不能增添企业承诺。只处理摘录范围，不补造整站Header/Footer或最终发布批准。

练习上下文：本页负责正式RFQ。允许未知Grade；Destination Country使用自由文本，并非国家下拉框。所有输入合同以摘录为准。其他页面和路由按完整网站最终体验设计；文案语言为英语。摘录外元数据无需补写。

来源：D:/23MySec/pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md
摘录：源文件第37–198行及第203–303行；包括正常正文、预填、验证与提交状态。

---
### 1.3 Hero

- Eyebrow: `B2B QUOTATION REQUEST`
- H1: `Request a Titanium Dioxide Quote`
- Paragraph:

> Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.

There is no Hero button. `REQUEST QUOTE` inside the form is the only solid page-body CTA.

### 1.4 RFQ form

#### Form heading and introduction

- H2: `Quotation request details`
- Introduction:

> Required fields are marked. Please use business information and avoid confidential formulations, account credentials, payment details or sensitive personal information.

#### Group A heading

`Your requirement`

##### Product / Grade

- Label: `Product / Grade`
- Required indicator: visible and programmatically associated.
- Empty option: `Select a product or grade`
- Options, in this order:
  1. `M-350`
  2. `M-510`
  3. `M-896`
  4. `M-996`
  5. `M-2196`
  6. `M-895`
  7. `M-200`
  8. `M-108`
  9. `M-210`
  10. `M-340`
  11. `M-886`
  12. `M-52`
  13. `M-2377`
  14. `CR-901`
  15. `Not sure / Need help`
- No helper, recommendation, comparison, equivalence, ranking or availability statement appears beside this field.

##### Application

- Label: `Application`
- Empty option: `Select an application`
- Options, in this order:
  1. `Coatings`
  2. `Plastics`
  3. `Masterbatch`
  4. `Printing Inks`
  5. `Paper`
  6. `Specialty Materials`
  7. `Other / Not sure`
- An Application selection records buyer context only and never selects, recommends or validates a grade.

##### Required Quantity

- Label: `Required Quantity`
- Control: positive numeric input.
- Adjacent fixed suffix: `Metric tonnes (MT)`.
- The suffix is visible, non-editable text. There is no Unit select, radio or second input, and no kg or Other option.
- No MOQ, quotation eligibility or supply conclusion is stated.

##### Destination Country

- Label: `Destination Country`
- Required: Yes.
- Control: single-line text input.
- Placeholder: `Enter the destination country`.
- Maximum length: 100 Unicode characters after trimming.
- The field uses no select, country list, shared country dataset, country code, region taxonomy or automatic country normalization.
- Buyer-entered text is RFQ request context only. It does not prove or promise service scope, shipping, freight, lead time, regulatory applicability, market support, inventory or availability.

##### Destination Port / City

- Label: `Destination Port / City (optional)`
- Maximum length: 120 characters.
- Helper:

> Add this only if it is already known.

#### Group B heading

`Company details`

##### Company Name

- Label: `Company Name`
- Required length: 2–160 Unicode characters after trimming.
- No company-verification or qualification claim is shown.

##### Your Name

- Label: `Your Name`
- Required length: 2–100 Unicode characters after trimming.

##### Business Email

- Label: `Business Email`
- Maximum length: 254 characters.
- Helper:

> Use the business email where we can respond to this request.

Email syntax checking does not prove deliverability, identity or authority.

##### Phone / WhatsApp

- Label: `Phone / WhatsApp (optional)`
- Maximum length: 40 characters.
- No helper text and no consent checkbox.
- International `+` may be entered and must not be discarded during later normalization.

##### Website

- Label: `Website (optional)`
- Maximum length: 2,048 characters.
- A supplied domain does not prove the company’s identity, capability or relationship to a product.

#### Group C heading

`Additional requirements`

##### Additional Requirements

- Label: `Additional Requirements (optional)`
- Maximum length: 2,000 characters.
- Helper:

> Add any non-confidential specification, packaging, schedule, document or other context that may help us review the request.

The helper collects context only. It does not promise packaging, schedule, document availability or acceptance of another workflow.

#### Privacy notice

> We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.

`Privacy Policy` is a visible text link to the approved shared privacy route. There is no receipt, privacy-consent or acknowledgement checkbox.

#### Submit control

- Normal label: `REQUEST QUOTE`
- In-progress label: `SUBMITTING…`
- The form submit is the only solid page-body CTA.

### 1.5 Alternative Requests

- H2: `Other request types`
- Introduction:

> Use the separate request form when you need a sample review or controlled document request instead of a quotation.

- Text link: `Request a Sample` → `/request-sample/`
- Text link: `Request Documents` → `/request-documents/`

These links are low-weight task switches. They do not submit the RFQ and do not state sample or document approval, availability or release.

## 2. Prefill and carried-context copy behavior

Prefill appears only as editable content in an existing field. There is no separate Selected Context panel, pill rail or status message.

| Explicit upstream source | Current visible destination | Buyer-visible behavior |
|---|---|---|
| Registered Product / Grade | Product / Grade | Select that exact supported option; buyer may change it |
| Approved Application | Application | Select that exact supported option; do not infer a grade |
| Explicit Destination Country | Destination Country | Carry only actual country text explicitly provided by the buyer or upstream action; keep it visible and editable |
| Approved public document label | Additional Requirements | Carry neutral editable text only |
| Approved public resource topic | Additional Requirements | Carry neutral editable text only |
| Explicit approved M-2377 process context | Additional Requirements | May carry neutral `Sulfate` text; no suitability statement |

Unsupported, stale or malformed values clear to the neutral empty state without a first-load error. Prefill never states recommendation, compatibility, availability, equivalence, substitution, serviceability, approval or regulatory outcome.

Country prefill does not use a list, country code, taxonomy, lookup or automatic normalization. A broad market or region such as `European Union` must not be written automatically into this field. Empty, whitespace-only, invalid or over-100-character prefill returns to the empty text state without a first-load error.

## 3. Validation, focus and field-error copy

### 3.1 First load

- No validation summary is displayed.
- Empty required fields are not announced as errors before the buyer attempts submission or meaningfully leaves an edited field.
- Discarding unsupported prefill does not create an error message.

### 3.2 Validation summary

- Heading: `Please review the highlighted fields.`
- Body:

> Correct the information below and try again. Your other entries are still here.

After an invalid submission attempt, focus moves to the summary. Each listed error links to its field. Activating a summary item moves focus to the associated control without clearing another entry.

### 3.3 Exact field errors

| Condition | Error copy |
|---|---|
| Product / Grade empty | `Select a product or grade, or choose “Not sure / Need help.”` |
| Application empty | `Select an application.` |
| Required Quantity empty, non-numeric or not greater than zero | `Enter a quantity greater than 0.` |
| Destination Country empty or whitespace-only | `Enter a destination country.` |
| Destination Country over 100 characters after trimming | `Keep the destination country to 100 characters or fewer.` |
| Destination Port / City over 120 characters | `Keep the destination port or city to 120 characters or fewer.` |
| Company Name empty or shorter than 2 characters after trimming | `Enter your company name.` |
| Company Name over 160 characters | `Keep your company name to 160 characters or fewer.` |
| Your Name empty or shorter than 2 characters after trimming | `Enter your name.` |
| Your Name over 100 characters | `Keep your name to 100 characters or fewer.` |
| Business Email empty | `Enter your business email.` |
| Business Email invalid or over 254 characters | `Enter a business email in the format name@company.com.` |
| Phone / WhatsApp over 40 characters | `Keep the phone or WhatsApp number to 40 characters or fewer.` |
| Website invalid or over 2,048 characters | `Enter a complete website address or remove this optional value.` |
| Additional Requirements over 2,000 characters | `Keep additional requirements to 2,000 characters or fewer.` |

Every field error appears beside its field, is programmatically associated with it and remains readable without relying on color alone. Correcting a field removes only that field’s error when its value becomes valid.

### 3.4 Keyboard focus

- Every input, select, link and button retains a visible focus indicator.
- Focus order follows the visible semantic order in §1.
- Opening or closing the Mobile Menu follows the shared Global Chrome focus contract.
- A failed submit does not move focus to Header, Footer, Contact or an unavailable route.

## 4. Submission states

### 4.1 Submitting

- Button label changes to `SUBMITTING…`.
- Duplicate activation of the form submit is prevented until the attempt resolves.
- Entered information remains visible.
- Header, Mobile Menu and Footer Request a Quote links remain visible as shared navigation.

### 4.2 Submission failure

- Heading: `Something went wrong while submitting your request.`
- Body:

> Your information is still here. Please try again.

- Action: `TRY AGAIN`

Focus moves to the failure message. All buyer-entered values remain available. The state includes no Contact link, email, phone, reference number, implied receipt or response-time statement.

### 4.3 Success

- Heading: `Thank you. We’ve received your quotation request.`
- Body:

> Our team will review the details and contact you using the information provided.

The success state appears only after a verified positive receipt response from the eventual form receiver. It means the request has been received for human review. It is not a quotation and does not confirm or approve price, MOQ, stock, lead time, shipping, sample, document, order, regulation result or any commercial outcome.

## 5. Human review, unknown grade and insufficient information

- `Not sure / Need help` is a valid Product / Grade selection and never triggers automatic rejection.
- The form does not calculate suitability, recommend a grade, rank products or expose an automated qualification result.
- When the submitted information is insufficient, the team may request clarification using the supplied contact information.
- No response-time, quotation-time or follow-up SLA is stated.
- Buyer-entered Application, Destination or Additional Requirements text is request context, not an approved product relationship or service commitment.

No extra Human Review module or FAQ is added. These rules are expressed through the form options, success copy and internal interaction contract.