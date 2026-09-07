# TiO2 Malaysia Conversion Page Playbook V0.1

## 0. Document control

| Field | Value |
|---|---|
| Document ID | `CONVERSION-PLAYBOOK-001` |
| Version | `V0.1` |
| Date | 2026-09-01 |
| Owner | Conversion page system owner |
| Applies to | `CONV-RFQ`, `CONV-SAMPLE`, `CONV-DOC` |
| Status | `USER_AUTHORIZED_WORKING_BASELINE / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Authorization | User instruction dated 2026-09-01 to establish the shared Conversion Playbook and advance CONV-RFQ through Gate 4 |
| Current consumer | CONV-RFQ Gate 2–4 submission |
| Sibling consumers | CONV-SAMPLE and CONV-DOC may consume this path/version without creating a second Playbook; their page-specific Gates remain independent |
| Global Chrome authority | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Production Logo authority | `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` and `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Product relationship authority | PRODUCT V0.3 matrix and its three approved audits |
| Development boundary | Planning contract only; no WordPress, Next.js, CMS, code, tests, deployment or publication |

This Playbook establishes the shared rules for the three registered Conversion pages. It does not approve any page-specific copy, route, form receiver, privacy wording, inbox, SLA, commercial outcome, sample policy or document inventory. Each page still requires its own Brief, Gate records and review.

## 1. Registered page identities and separation

| Page ID | URL | Page task | Receipt means | Receipt does not mean |
|---|---|---|---|---|
| `CONV-RFQ` | `/request-a-quote/` | Capture the minimum qualified B2B context needed for human quotation review | A quotation request was received for review | Quotation, price, stock, MOQ, lead time, shipping, sample, document, order or approval |
| `CONV-SAMPLE` | `/request-sample/` | Capture the minimum application and test context needed for human sample-request review | A sample request was received for review | Sample approval, availability, quantity, free supply, freight, dispatch, delivery, regulatory eligibility or approval |
| `CONV-DOC` | `/request-documents/` | Capture the minimum context needed for controlled document-request review | A document request was received for review | File availability, applicability, current version, release, download, delivery, compliance, origin proof or approval |

Rules:

1. RFQ, Sample and Request Documents are separate workflows and must not be merged into one universal form.
2. A page may capture a limited cross-workflow interest field only when its Brief permits it. That field does not submit or approve the sibling request.
3. No sibling page gains a new Header item. The only Global Chrome conversion action remains `Request a Quote` → `/request-a-quote/`.
4. Contact is a separate utility page. It is never a Conversion form fallback, substitute route or implied submission channel.

## 2. Shared minimum-data principle

Collect only information needed to route and human-review the initial B2B request. Information that may be useful later is not automatically required now.

### 2.1 Universal initial fields

| Field | RFQ | Sample | Documents | Shared rule |
|---|---:|---:|---:|---|
| Contact name | Required | Required | Required | No title, personal address or government ID |
| Company / organization | Required | Required | Required | No mandatory website, company size or registration number |
| Business email | Required | Required | Required | Syntax validation does not prove deliverability or approve the inbox |
| Destination country / market | Required | Required | Required | Editable; no serviceability, regulatory or logistics inference |
| Product / grade | Required choice | Required choice | Required choice | Include `Unknown / need help` or `Not sure`, and `Multiple grades` where the page contract allows |
| Page-specific task context | Required as defined below | Required as defined below | Required as defined below | Do not reuse a sibling page's qualifying fields |
| Non-confidential notes | Optional or conditional | Optional | Optional or conditional | Warn against confidential formulations, credentials and sensitive personal data |
| Inline data-handling and review acknowledgement | Required before submission | Required before submission | Required before submission | Exact text and legal basis require separate approval; do not label consent when consent is not the approved basis |
| Source context | System metadata only | System metadata only | System metadata only | Not buyer-required; never the only carrier of meaningful context |

### 2.2 Page-specific minimum fields

#### CONV-RFQ

- Application: required; `Other / Not sure` remains valid.
- Current grade or target non-confidential requirement: required only when grade is unknown; optional otherwise.
- Estimated purchase quantity and quantity unit: required as an estimate; this is not an MOQ.
- Destination port / city: optional.
- Packaging preference: optional, including `No preference / Not sure`; no pack-size or availability promise.
- Document needs: optional multi-select; no file availability implication.
- Sample interest: optional `Yes / No / Not sure`; does not submit a Sample request.

#### CONV-SAMPLE

- Application: required; `Other / Not sure` remains valid.
- Test objective: required and buyer-entered; never inferred from a grade.
- Current grade or target non-confidential requirement: optional.
- Expected project or annual use: optional and must not be presented as sample quantity.
- Documents needed for the trial: optional; no availability implication.
- Do not initially require telephone, detailed shipping address, port, Incoterm, packaging, sample quantity, payment information or a confidential formulation.

#### CONV-DOC

- Document type: required multi-select from the page-approved routing categories.
- Application / Process: optional visible context only; never buyer-required.
- Request context: required only for `Other`; otherwise optional.
- Do not initially require quantity, packaging, price, port, shipping terms, sample need, upload, password, batch/order number or production route.

### 2.3 Prohibited universal collection

The initial public form must not require government ID, payment/card data, login password, personal residential address, full confidential formulation, current supplier identity, exact desired price, marketing consent, or file upload. Any later expansion requires a page-specific evidence and minimization review.

## 3. Shared upstream prefill contract

### 3.1 Source families

The receiving page may consume explicit, status-aware context from Products, Grade, Applications, Markets, Documents and Resources. RFQ may additionally accept a sibling-interest flag where its Brief permits it. Prefill never proves capability, suitability, availability or approval.

| Context key | Allowed source | Public behavior | Invalid, stale or unsupported behavior |
|---|---|---|---|
| `source_page_id` | Registered upstream page identity | Attribution only; not buyer-visible unless needed to explain context | Ignore without breaking the page; never display internal IDs/statuses |
| `grade_id` | Explicit buyer selection or unambiguous Grade-page identity | Visible, editable registered neutral grade | Clear to `Unknown / needs review`; do not say unavailable or unsuitable |
| `application_id` | Explicit buyer selection or unambiguous Application-page identity | Visible, editable approved taxonomy value | Clear to blank or `Other / Not sure`; do not infer a grade |
| `process_context` | Explicit buyer selection or PRODUCT V0.3-approved Grade/Process relation carried by the source action | Optional visible/removable context chip; not a required free-entry form field | Discard; never infer fit or ask the buyer to repair an internal relation |
| `market_id` / destination | Explicit Market-page identity or buyer selection | Visible and editable destination context | Clear to blank; no serviceability, regulatory or shipping statement |
| `document_needs[]` | Explicit Document-page/category selection | Visible and editable request context | Remove unsupported value; no availability/version statement |
| `resource_context` | Explicit Resource-page identity or buyer-selected neutral topic | Optional non-commercial context | Ignore stale/unsupported value; no equivalence or trade-outcome inference |

### 3.2 Universal prefill rules

1. Every meaningful prefill value is visible before submission and can be changed or removed.
2. Hidden source metadata cannot satisfy a buyer-facing required field.
3. No form shows validation errors on first load solely because prefill is absent or invalid.
4. Unknown grade is a valid human-review path, not a form error.
5. A generic Application page must not automatically choose a grade.
6. A grade identity must not automatically claim application fit, market availability, document availability or sample eligibility.
7. A route's existence in the registry does not make it live. Conditional outbound links render only after route readiness is independently approved.
8. Internal values such as `NO_PUBLIC_MAPPING`, `DO_NOT_RENDER`, comparison holds, Page IDs, readiness flags and release blockers never appear in Buyer Clean text, assistive text, URLs, metadata, analytics labels or Schema.

## 4. PRODUCT V0.3 relationship contract

The only current Grade–Application and Grade–Process relationship baseline is:

- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`;
- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`;
- `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md`;
- `pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md`.

Internal validation totals are 30 verified / 0 conflict / 54 no-public across 84 Grade–Application rows. Process distribution is 8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation.

### 4.1 Required public behavior

- M-2377 may carry neutral Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context when explicitly selected or supplied by an approved upstream action.
- M-2377 → Specialty Materials remains `NO_PUBLIC_MAPPING / DO_NOT_RENDER` as a system-generated relationship. Its absence is not a statement of unsuitability or inapplicability.
- Rubber remains evidence-register context only. It creates no structured Application option, filter, taxonomy group, page, URL, keyword, navigation item, Schema relation or automatic prefill. Buyer-entered Rubber context may remain unclassified under `Other`.
- M-996 and M-2196 may be selected independently. Their differences, ranking, superiority/inferiority, equivalence, replacement, substitution, comparative performance and comparison-led selection rationale remain frozen.
- `NO_PUBLIC_MAPPING` means no approved positive public relation. It never means not applicable, unsuitable, unsupported, impossible, unavailable or prohibited.
- A verified mapping is only neutral context for human review. It is not Best, Recommended, Ideal, guaranteed fit, sample eligibility, document eligibility or procurement approval.

## 5. Privacy and data-handling contract

### 5.1 Required approved inputs

Before Gate 5 or release, each form requires approved, scope-specific wording for:

1. controller / responsible entity identity;
2. purpose of collecting the business contact and request context;
3. categories of information collected;
4. recipients/processors and international transfer information where applicable;
5. retention period or clear retention criterion;
6. applicable rights and an approved privacy contact/channel;
7. whether acknowledgement or consent is required and why.

The 54-page registry contains no approved Privacy page. A Conversion page must not invent `/privacy/`, add a Footer item or claim that a missing policy exists.

### 5.2 Fail-closed privacy behavior

- Gate 2–4 may reserve an internal annotated privacy-copy slot.
- An unapproved slot is not Buyer Clean final copy and cannot pass Gate 5 or release.
- Do not publish generic claims such as “we keep your data secure,” “we never share,” a retention duration, a named controller or a rights process without approval.
- The non-confidential-information warning and receipt-only acknowledgement may be designed separately from legal privacy wording, but neither substitutes for the approved data-handling notice.

## 6. Validation, focus and error contract

### 6.1 Timing

- First load: no error styling.
- After a field is interacted with: validate the affected field without erasing input.
- On submission attempt: validate the complete form, show one error summary and connect it to field-level errors.
- Server response: success appears only after an explicit positive receipt acknowledgement. Timeout, ambiguous response and transport failure are failures, not success.

### 6.2 Field behavior

| State | Required behavior | Prohibited behavior |
|---|---|---|
| Required empty | Plain-language field error after interaction/submission | Error on first load; color-only border |
| Business email invalid | Preserve entry; explain expected email form | Claim inbox/domain validity from syntax alone |
| Unknown grade | Activate the page-approved conditional context field | Force a guessed model or say no product is suitable |
| Multiple grades | Preserve neutral multi-value context | Rank, compare or choose for the buyer |
| Quantity invalid on RFQ | Require a positive estimate and unit | Treat validation as MOQ, stock or quote eligibility |
| `Other` selected | Reveal and focus the associated short description when required | Require unrelated personal or confidential detail |
| Stale prefill | Clear/downgrade safely and leave the form usable | Expose status codes or block the whole route |

### 6.3 Focus and accessibility

- Every control has a persistent visible label; placeholder text is supplementary only.
- Error summary receives programmatic focus after a failed submit, and each summary link moves focus to the related field.
- Field hints and errors use `aria-describedby`-equivalent relationships in later implementation.
- Focus remains visually independent from current, hover, selected, error and disabled states.
- All functions are keyboard operable; logical targets are at least 44×44px.
- Error, failure and success use text plus structure/icon; no state relies on red/green alone.

## 7. Submission state machine

| State | Trigger | Buyer-visible rule | Internal/release rule |
|---|---|---|---|
| `FORM_READY` | Page and receiver passed readiness gate | Usable form with neutral defaults | No readiness flag visible |
| `VALIDATING` | Submit attempt | Preserve values and expose validation progress only when perceptible | No network receipt implied |
| `SUBMITTING` | Valid request sent | Prevent duplicate page-body submits; show clear progress | Global RFQ remains visible and enabled as navigation |
| `RECEIPT_CONFIRMED` | Explicit positive receiver acknowledgement | Show page-specific receipt-only success | Never infer commercial/sample/document outcome |
| `SUBMISSION_UNCONFIRMED` | Timeout, network, server or ambiguous response | Preserve values, show retry and state that receipt could not be confirmed | Never log/label as success |
| `FORM_SERVICE_UNAVAILABLE` | Receiver/configuration unavailable | This state exists for design/review; a released page must not knowingly enter this state | `RELEASE_BLOCKER` until form readiness is restored |
| `ROUTE_UNAVAILABLE` | Route not available | Not an approved public alternative state | `RELEASE_BLOCKER`; Global Chrome RFQ visibility and URL stay fixed |

### 7.1 Safe no-channel failure copy

When no real alternative channel has been approved and verified, the failure state uses a reserved, channel-free pattern:

> We could not confirm that your request was received. Your entries are still on this page. Please try again.

It may show `Try again`. It must not display or link Contact, an unverified email/phone, a fabricated ticket number, or wording that implies receipt.

### 7.2 Verified-channel conditional branch

An alternative manual channel may be added only after its address/route, owner, handling process and privacy implications are verified and approved for the specific workflow. Absence of this branch does not permit Contact fallback; it keeps release blocked where the approved operational contract requires a manual alternative.

## 8. Page-specific success and human-review rules

### 8.1 Shared sequence

Visible process explanation may state only:

1. provide the minimum request context;
2. submit the request;
3. the request is reviewed by a person;
4. clarification may be requested;
5. any outcome is communicated separately.

No response-time, turnaround, SLA, automatic qualification or guaranteed follow-up is allowed without separate evidence.

### 8.2 Required success boundaries

| Page | Required success meaning | Required negative boundary |
|---|---|---|
| RFQ | `Your quotation request has been received for human review.` | Not a quotation; no price, stock, MOQ, lead time, shipping, sample, document, order or approval confirmation |
| Sample | `Your sample request has been received for human review.` | No approval, availability, quantity, free supply, freight, dispatch, delivery, regulatory eligibility or approval confirmation |
| Documents | `Your document request has been received for human review.` | No file availability, applicability, current version, release, download, delivery, compliance, origin proof or approval confirmation |

Success cannot use “approved,” “confirmed” without the object `receipt`, “order received,” “quote ready,” “sample arranged,” “documents will be sent,” or equivalent implications.

## 9. Global Chrome V0.5 contract

All Conversion pages consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` without modification:

- Desktop Header: 84px; `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Mobile Header: 64px; `Logo | RFQ | Menu`.
- Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer keep `Request a Quote` visible and pointed to `/request-a-quote/`.
- Conversion routes have zero current links per navigation surface unless a later approved mapping defines a parent. Buyer-visible `CURRENT` text/badge/suffix count is always 0.
- No false About, Documents or RFQ parent/current state may be inferred. The Global RFQ keeps its terminal CTA styling without receiving `aria-current="page"` on an unmapped Conversion route.
- At the active viewport, only one primary-navigation surface is exposed to accessibility and keyboard focus.
- Footer remains the approved shared Deep Navy component and gains no page-local links or failure fallback.
- `RFQ_ROUTE_READY=false` is a `RELEASE_BLOCKER`; it never hides, disables, empties or relinks the global RFQ.

### 9.1 Production SVG bindings

| Surface | Asset key | Exact path |
|---|---|---|
| Desktop/Mobile light Header | `brand_logo_primary_horizontal` | `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg` |
| Deep Navy Footer | `brand_logo_reverse_monochrome` | `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg` |
| Symbol-only approved contexts | `brand_symbol_primary` | `brand/logo/candidates/v0.1/tio2-malaysia-symbol-v0.1.svg` |
| Favicon | `brand_favicon_safe` | `brand/logo/candidates/v0.1/tio2-malaysia-favicon-safe-v0.1.svg` |

No page-specific copy, raster fallback, cross-`site_scope` fallback or modified SVG is allowed.

## 10. CTA hierarchy and duplicate prevention

1. Global Header/Footer RFQ uses the approved terminal Teal tier and remains present on all three pages.
2. The page-body primary action names the workflow and review action: e.g. `Submit RFQ for Review`, `Submit Sample Request for Review`, or `Submit Document Request for Review`.
3. A current-page Global RFQ link is not converted into another submit button.
4. Unknown-grade help is a field path, not a competing solid CTA or second form.
5. Supporting internal links use descriptive text or the approved secondary tier. No third promotional CTA style is added.
6. The page-body form has one submit control. Duplicate sticky submit bars are not approved.

## 11. Shared visual and responsive rules

- Use Inter, Navy headings, Body Text, white/Soft Background sections, Border Gray inputs and Teal only as controlled emphasis.
- Form layout and readable labels take priority over decorative imagery. Do not use factory, warehouse, port, laboratory, certificate or shipping imagery that implies unverified capability.
- Desktop reference: 1440px with 1200–1280px content shell and 84px Header.
- Tablet reference: 834px; no clipped two-column fields or horizontal navigation leakage.
- Mobile reference: 390px with 16–20px outer gutters, one-column fields, 64px Header, ≥44px targets and zero horizontal overflow.
- Long company names, 254-character email handling, long destination labels, 2,000-character notes, wrapped errors, privacy text and success text must not break the layout.
- Reduced motion must preserve all meaning; no loading state depends on animation alone.

## 12. SEO, GEO and Schema shared boundaries

- Each page keeps the registered URL, role, primary-keyword status and cannibalization boundary from `11_page_keyword_master.csv`.
- CONV-DOC remains `NO_PRIMARY_KEYWORD`; no commercial keyword may be invented.
- Answer-ready copy may describe minimum information, unknown-grade handling, receipt, human review and non-approval boundaries only.
- Visible product/application/market/document context remains buyer-selected; machine-readable data must not infer relations.
- Page-level Schema is limited to the page-approved WebPage type and `BreadcrumbList`. Do not emit Product, Offer, price, availability, shipping, certification, rating, order, FAQPage or HowTo facts from a Conversion page.
- A visible Q&A block does not automatically authorize `FAQPage` Schema.
- Time-sensitive supply, price, logistics, regulatory, sample or file information is absent unless separately evidenced, dated and approved.

## 13. Fail-closed release matrix

| Missing or false input | Design work allowed | Buyer Clean release behavior |
|---|---|---|
| Route readiness | Gate 2–4 specification and annotated restricted state | Block release; keep fixed Global RFQ in shared Chrome specifications |
| Form receiver readiness | Gate 2–4 form/state design | Block release; do not knowingly publish a broken form |
| Verified workflow inbox/owner | Layout and receipt-only copy | Block operational release; do not invent an inbox or success path |
| Approved privacy wording | Annotated slot through Gate 4 | Block Gate 5 final Buyer Clean and release |
| Verified alternative manual channel | Safe channel-free failure state | Do not show Contact/email/phone; keep any manual-channel branch absent |
| Product relation evidence | Neutral allowed values and unknown path | Discard unsupported relation; never publish a negative inference |
| Sample policy | Sample request structure | Do not show availability, quantity, free/freight or dispatch promises |
| Document inventory | Document request categories | Do not show availability, version, applicability, download or delivery promises |

## 14. Gate and review rules

- This Playbook lets a user/project-control-authorized page proceed beyond Gate 1; it does not approve sibling Briefs or their page-specific Gate outputs.
- Every Gate artifact records status, verification, open issues and approval source.
- `SUBMITTED` is not `APPROVED`; `DESIGN_IN_REVIEW` is not `APPROVED_FOR_HANDOFF`.
- Gate 4 is visual direction, not a complete Buyer Clean visual.
- Gate 5 requires final Desktop/Mobile visuals and all approved visible text; it is not authorized by this Playbook.
- Gate 6/7, development, CMS, code, tests, deployment, DNS, indexing activation and publication require separate authorization.

## 15. Shared acceptance checklist

- [ ] Page identity, URL, role and keyword mapping match the registry and implementation master.
- [ ] Only minimum initial information is required.
- [ ] Explicit prefill is visible, editable and safely discarded when invalid.
- [ ] Unknown grade remains a valid path.
- [ ] PRODUCT V0.3, M-2377 and M-996/M-2196 boundaries are preserved.
- [ ] Privacy wording is approved or the final visual/release remains blocked.
- [ ] Validation timing, focus, error summary and field errors are specified.
- [ ] Failure preserves entries, does not imply receipt and does not fall back to Contact.
- [ ] Success states receipt only and includes the page-specific negative boundary.
- [ ] Human review has no SLA or approval implication.
- [ ] Global Chrome V0.5, production SVG bindings, fixed RFQ and current-link count 0 are inherited.
- [ ] Page-body CTA does not compete with the Global RFQ tier.
- [ ] Desktop, Tablet and 390px behavior is defined with ≥44px targets and no overflow.
- [ ] No code, implementation, deployment or publication action occurred.

## 16. Open controls

| Control ID | Scope | Status | Required closure |
|---|---|---|---|
| `CONV-PL-R001` | Playbook project-control review | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` | Project-control decision; user has authorized current CONV-RFQ working consumption |
| `CONV-PL-R002` | Privacy controller/purpose/retention/rights/contact wording | `OPEN / BLOCKS_GATE_5_AND_RELEASE` | Approved scope-specific data-handling text |
| `CONV-PL-R003` | Verified receiver, owner and manual failure channel | `OPEN / BLOCKS_OPERATIONAL_RELEASE` | Verified workflow route/channel and handling owner |
| `CONV-PL-R004` | Conversion route/form readiness | `NOT_TESTED / RELEASE_BLOCKER` | Authorized external implementation and release QA |
| `CONV-PL-R005` | Sibling page-specific Gate approval | `INDEPENDENT` | CONV-SAMPLE and CONV-DOC reviews in their own tasks |

## 17. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Established shared minimum-data, prefill, privacy, validation, focus, error, failure, success, human-review, fail-closed, non-approval, PRODUCT V0.3 and Global Chrome V0.5 rules for the three Conversion pages | `USER_AUTHORIZED_WORKING_BASELINE / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
