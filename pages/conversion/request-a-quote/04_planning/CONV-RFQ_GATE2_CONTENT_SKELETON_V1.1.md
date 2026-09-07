# CONV-RFQ Gate 2 Content Skeleton V1.1

## 0. Control

| Field | Value |
|---|---|
| Page ID | `CONV-RFQ` |
| URL | `/request-a-quote/` |
| Page type | RFQ conversion page |
| Gate | Gate 2 — content-skeleton checkpoint |
| Review ID | `CONV-RFQ-G2-SKELETON-PCR-01` |
| Date | 2026-09-01 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / TARGETED_REVISION` |
| Checkpoint | `CONTENT_SKELETON_PENDING_USER_CONFIRMATION / REVISION_REQUIRED` |
| Gate 1 authority | `CONV-RFQ-G1-V12-DIRECTED-03 = APPROVED / CLOSED` |
| Gate 2 authorization | User instruction `启动Gate2`, 2026-09-01 |
| Current ceiling | Gate 2 skeleton only; full copy, Gate 3, visual and development not authorized by this artifact |

This file is the fast-review content skeleton required before complete Gate 2 copy. It fixes no layout dimensions and creates no visual baseline.

## 1. Authority and conflict normalization

| Source | Consumption rule |
|---|---|
| Approved Brief V1.2.2 | Controls page intent, fields, exact state/privacy copy and responsive boundary |
| Gate 1 Audit V1.2.2 | Controls evidence, prefill, relationship and restricted-state boundaries |
| Conversion Playbook V0.1 | Consumed only where it does not conflict with the approved page-specific Gate 1 contract |
| PRODUCT V0.3 | Only Grade–Application–Process relationship authority |
| Global Chrome V0.5 | Shared Header/Mobile Menu/Footer authority; no page-level fork |
| Legal & Privacy Framework V1.0 | Complete final privacy/legal/cookie experience and later verification boundary |

The following earlier ideas remain superseded and do not return in Gate 2: multiple-grade paths, Packaging field, Document Needs field, Sample Interest field, acknowledgement checkbox, alternate quantity units, `Submit RFQ for Review`, long human-review module, FAQ module, Contact fallback, and route-readiness-based hiding of final links.

## 2. One-page content skeleton

| Order | Module ID | Visible heading / content | Buyer decision served | CTA / boundary |
|---:|---|---|---|---|
| 0 | `GLOBAL_HEADER` | Shared Global Header V0.5 | Navigate while retaining the permanent RFQ route | Shared Request a Quote remains visible; page adds no current navigation parent |
| 1 | `BREADCRUMB` | `Home / Request a Quote` | Confirm the current task and return to Home | Home is the only breadcrumb link |
| 2 | `RFQ_HERO` | Eyebrow, H1 and one concise explanatory paragraph | Understand what information is needed and that an unknown grade is accepted | No Hero button; the form submit is the only solid page-body CTA |
| 3 | `RFQ_FORM` | `Quotation request details` | Provide the minimum requirement and business-contact context | One `REQUEST QUOTE` submit control |
| 4 | `ALTERNATIVE_REQUESTS` | `Other request types` | Move to the correct separate workflow when the buyer needs a sample or documents | Low-weight `Request a Sample` and `Request Documents` links |
| 5 | `GLOBAL_FOOTER` | Shared Deep Navy Footer | Use global navigation and whole-site legal/cookie controls | No page-local Footer additions or Contact fallback |

The page remains one standard content flow. At a later authorized layout Gate, the 1440px form may use an internal two-column field Grid; 768px and 390px use a single-column field order. This skeleton does not create a left/right page composition, side rail, independent context rail or Dashboard shell.

## 3. Hero copy for skeleton confirmation

| Element | Proposed buyer-visible copy |
|---|---|
| Eyebrow | `B2B QUOTATION REQUEST` |
| H1 | `Request a Titanium Dioxide Quote` |
| Paragraph | `Tell us the grade you need—or choose “Not sure / Need help”—then provide your application, required quantity in metric tonnes and destination. Our team will review the submitted details and contact you using the information provided.` |

This Hero gives the buyer the task, required context and unknown-grade path without promising price, stock, MOQ, lead time, logistics, samples, documents or an order outcome.

## 4. Form content skeleton

### 4.1 Form introduction

- H2: `Quotation request details`
- Intro: `Required fields are marked. Please use business information and avoid confidential formulations, account credentials, payment details or sensitive personal information.`

### 4.2 Group A — Your requirement

| Order | Field label | Required | Control / visible values | Skeleton helper or boundary |
|---:|---|---:|---|---|
| 1 | `Product / Grade` | Yes | Single-select: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377, CR-901, `Not sure / Need help` | No recommendation, comparison or multiple-grade path |
| 2 | `Application` | Yes | Single-select: Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials, `Other / Not sure` | Buyer context only; no automatic grade selection |
| 3 | `Required Quantity` | Yes | Positive numeric input followed by the fixed, non-editable suffix `Metric tonnes (MT)` | The suffix is static text, not a select, radio or separate required input; no kg, alternate or Other unit; quantity does not establish an MOQ or quotation eligibility |
| 4 | `Destination Country` | Yes | Country selector | Actual country; no serviceability, regulation or shipping inference |
| 5 | `Destination Port / City (optional)` | No | Text, maximum 120 characters | `Add this only if it is already known.` |

### 4.3 Group B — Company details

| Order | Field label | Required | Length / format | Skeleton helper or boundary |
|---:|---|---:|---|---|
| 6 | `Company Name` | Yes | 2–160 Unicode characters after trimming | Business identity for human review |
| 7 | `Your Name` | Yes | 2–100 Unicode characters after trimming | Contact person |
| 8 | `Business Email` | Yes | Up to 254 characters; email syntax validation | `Use the business email where we can respond to this request.` |
| 9 | `Phone / WhatsApp (optional)` | No | Up to 40 characters; later normalization must preserve international `+` | No helper copy and no consent checkbox |
| 10 | `Website (optional)` | No | Up to 2048 characters; URL/text normalization | Domain does not prove company capability or identity |

### 4.4 Group C — Additional requirements

| Field label | Required | Length | Proposed helper |
|---|---:|---:|---|
| `Additional Requirements (optional)` | No | Up to 2,000 characters | `Add any non-confidential specification, packaging, schedule, document or other context that may help us review the request.` |

The helper does not promise packaging, schedule, document availability or another workflow. A visual character count may appear after 1,600 characters in a later interaction specification.

### 4.5 Privacy notice and submit

Final notice:

> We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.

`Privacy Policy` is a visible text link. The form has no consent or acknowledgement checkbox.

- Primary button: `REQUEST QUOTE`
- Submitting label: `SUBMITTING…`
- Only the page-body submit is protected from duplicate activation during submission. The shared Header/Footer RFQ remains visible as navigation.

## 5. Desktop field-pair direction for later Gate 3

This is a content grouping note, not a wireframe:

| Desktop row | Left field | Right field |
|---:|---|---|
| 1 | Product / Grade | Application |
| 2 | `Required Quantity [input] + Metric tonnes (MT) [fixed suffix]` | Destination Country |
| 3 | Destination Port / City | Full-width or empty paired area only if the later layout remains balanced; no new field may be invented |
| 4 | Company Name | Your Name |
| 5 | Business Email | Phone / WhatsApp |
| 6 | Website | Full width |
| 7 | Additional Requirements | Full width |

Real long labels, values, errors and browser behavior may force any field to span the full form width. Tablet and Mobile preserve the same semantic order in one column and keep `Metric tonnes (MT)` as the fixed, non-editable suffix adjacent to Required Quantity.

## 6. Prefill and upstream-context skeleton

| Source family | Visible editable destination | Rule |
|---|---|---|
| Products / Grade | Product / Grade selector | Only a registered explicit grade; invalid values clear to neutral |
| Applications | Application selector | No grade is inferred from an Application |
| Markets | Destination Country | Only explicit actual-country context; broad region labels do not satisfy the required country field |
| Documents | Additional Requirements | An approved public document label may be carried as neutral editable text; no availability or applicability statement |
| Resources | Additional Requirements | An approved public topic label may be carried as neutral editable text; no equivalence, substitution or trade outcome |
| Approved process context | Additional Requirements | M-2377 may carry neutral `Sulfate` text from an approved explicit upstream action; no direct process selector is added |
| Source identity | System attribution | May support analytics/routing but cannot satisfy a required field or display an internal ID/status |

Meaningful prefill is visible and editable in an existing field. No separate Selected Context block or independent context rail is introduced. Stale/unsupported values are discarded without a first-load error or negative product message.

## 7. Validation and state-copy skeleton

### 7.1 Validation summary

- Heading: `Please review the highlighted fields.`
- Body: `Correct the information below and try again. Your other entries are still here.`

The summary receives focus after a failed submission attempt and links to each affected field. No error appears on first load solely because a field is empty or a prefill value is invalid.

### 7.2 Field errors

| Field | Error copy |
|---|---|
| Product / Grade | `Select a product or grade, or choose “Not sure / Need help.”` |
| Application | `Select an application.` |
| Required Quantity | `Enter a quantity greater than 0.` |
| Destination Country | `Select a destination country.` |
| Company Name | `Enter your company name.` |
| Your Name | `Enter your name.` |
| Business Email empty | `Enter your business email.` |
| Business Email format | `Enter a business email in the format name@company.com.` |
| Website format, when supplied | `Enter a complete website address or remove this optional value.` |

Syntax validation does not prove email deliverability, company identity or website capability.

### 7.3 Submission failure

- Heading: `Something went wrong while submitting your request.`
- Body: `Your information is still here. Please try again.`
- CTA: `TRY AGAIN`

No Contact link, email, phone, ticket number or implied receipt is added.

### 7.4 Success

- Heading: `Thank you. We’ve received your quotation request.`
- Body: `Our team will review the details and contact you using the information provided.`

The internal state contract treats this as receipt only. It is not a quotation and does not confirm price, stock, MOQ, lead time, shipping, sample, document, order or approval.

### 7.5 Human review and insufficient information

- Unknown grade remains valid through `Not sure / Need help`.
- Additional clarification may be requested after receipt when the supplied context is insufficient.
- The page does not expose an automated suitability, qualification, rejection or approval result.
- No response time or follow-up SLA is stated.

### 7.6 Form and route unavailable

For a review-only form-service-unavailable proof:

- Heading: `The quotation request form is temporarily unavailable.`
- Body: `No request has been submitted. Please return later and try again.`

This state has no Contact fallback and is not an approved released state. Form or route unavailability remains an internal release blocker for Gate 7–9 verification. The fixed Request a Quote links in Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer remain visible and unchanged in all Gate 1–5 specifications.

## 8. Alternative requests

- H2: `Other request types`
- Intro: `Use the separate request form when you need a sample review or controlled document request instead of a quotation.`
- Text link: `Request a Sample` → `/request-sample/`
- Text link: `Request Documents` → `/request-documents/`

These low-weight links are part of the complete final reader experience. They do not submit the RFQ, do not indicate approval or availability, and are never submission-failure fallbacks. Route verification occurs at Gate 7–9 and before release.

## 9. Breadcrumb and internal-link contract

| Direction | Source/destination | Contract |
|---|---|---|
| Breadcrumb | Home → `/` | One linked Home item and one unlinked current item |
| Inbound | Products, Grades, Applications, Markets, Documents, Resources | Action anchor such as `Request a Quote`; explicit context may use the prefill rules in §6 |
| Outbound | Request a Sample → `/request-sample/` | Low-weight task switch; not a sample approval or availability claim |
| Outbound | Request Documents → `/request-documents/` | Low-weight task switch; not a file availability or release claim |
| Prohibited | Contact | Never used as failure, unavailable or RFQ fallback |

The page contains no second solid page-body CTA, sticky submit bar or second form.

## 10. Global Chrome consumption

- Desktop Header: 84px; Mobile Header: 64px.
- Navigation order remains `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Conversion route current-navigation mapping remains zero; no false `aria-current="page"` or visible `CURRENT` label.
- Request a Quote remains visible and points to `/request-a-quote/` on Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer.
- Footer remains the shared Deep Navy Footer and consumes the whole-site Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings contracts.
- This page creates no Header/Footer link, asset or visual fork.

## 11. Conditional rendering and evidence boundaries

| Condition | Gate 2 content behavior |
|---|---|
| Unknown grade | Keep `Not sure / Need help`; do not guess or reject |
| Unsupported Product/Application relationship | Render the independent buyer choices only; no relationship statement |
| M-2377 + approved context | Neutral visible/editable context only; no suitability claim |
| M-2377 + Specialty Materials | Do not generate a relationship; independent buyer selections remain request context |
| Rubber | Buyer-entered text only under `Other / Not sure` or Additional Requirements; no taxonomy/page/URL/keyword |
| M-996 / M-2196 | Independent options only; no difference, ranking, equivalence, substitution or rationale |
| `NO_PUBLIC_MAPPING` | No public relation; never rewrite as not applicable |
| Optional empty field | Do not render placeholder data, warning cards or hidden required values |
| Receiver or route not ready | Record internal release blocker; keep complete Gate 1–5 final experience and shared RFQ Chrome |

## 12. Gate 2 skeleton decision

This targeted revision is `DRAFT_FOR_PROJECT_CONTROL_REVIEW / TARGETED_REVISION` under Review ID `CONV-RFQ-G2-SKELETON-PCR-01`. The checkpoint remains `CONTENT_SKELETON_PENDING_USER_CONFIRMATION / REVISION_REQUIRED`. Requested decision: verify only the corrected Hero logic and fixed MT suffix treatment; all other skeleton contracts remain frozen.

It does not close `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`, authorize Gate 3, create a visual baseline or authorize development/release.
