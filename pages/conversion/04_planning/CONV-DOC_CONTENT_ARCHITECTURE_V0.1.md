# CONV-DOC Request Documents — Gate 2 Content Architecture V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `CONV-DOC` |
| URL | `/request-documents/` |
| Page type | Utility conversion page |
| Gate | Gate 2 — Content architecture, SEO, GEO, Schema, CTA, minimum fields and internal links |
| Version | V0.1 |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Shared Playbook | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` — V0.1; SHA-256 `DEFFD73A7CB5E2399E128CD5E35308E5536D6E2D242FBD678BE4709914733047` |
| Global Chrome | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` — consume without modification |
| Product relationship authority | PRODUCT V0.3 matrix and its approved audits |
| Gate ceiling | Historical Gate 2 creation scope stopped at Gate 4; later 2026-09-01 user authority permits Gate 5 execution only; Gate 6/7, development and release remain unauthorized |

This page captures a controlled document request. It does not explain the document catalogue, publish files, confirm availability or replace the Documents Hub.

## 1. Page task and decision path

### 1.1 One-sentence responsibility

Collect the minimum product, destination and document-type context needed for a person to review a controlled titanium dioxide document request.

### 1.2 Buyer decision sequence

1. Confirm that this is the request workflow rather than an information/download page.
2. Review or remove any context passed from an upstream Product, Application, Market or Document page.
3. Select one or more requested document categories.
4. Provide only the minimum business-contact and applicability context.
5. Acknowledge the approved data-handling notice when it becomes available.
6. Submit one request for human review.
7. Receive confirmation of receipt only; any document outcome is communicated separately.

### 1.3 Explicit non-responsibilities

| This page does not own | Correct owner / treatment |
|---|---|
| Choosing which document category a buyer needs | `DOC-000` and document information pages; CONV-DOC only accepts the buyer's selected request |
| Explaining TDS/SDS/COA terminology in depth | `DOC-TDS` |
| Explaining REACH coverage or registration | `DOC-REACH`; REACH is not a default CONV-DOC category in this version |
| Explaining COO, origin or traceability evidence | `DOC-COO` and verified About content |
| Product performance, grade selection or application suitability | Product, Grade and Application owners |
| Quotation or sample requests | `CONV-RFQ` and `CONV-SAMPLE` |
| Public file download, document inventory, file versions or release status | No public owner is authorized until inventory/evidence approval |

## 2. Buyer-visible content architecture

### 2.1 Module order

| Order | Module ID | Working title | Buyer decision served | Required visible content | CTA / interaction | Evidence and gate behavior |
|---:|---|---|---|---|---|---|
| 1 | `GLOBAL_HEADER` | Shared Header | How do I navigate or request a quote? | Frozen Global Chrome V0.5 | Fixed global `Request a Quote` | No current nav link on Conversion routes; buyer-visible `CURRENT=0` |
| 2 | `BREADCRUMB` | Home / Request Documents | Where am I? | Page identity only | `Home` link if route ready | No false Documents current state |
| 3 | `HERO` | Request titanium dioxide documents for review | Is this the right action? | Short purpose statement plus receipt/non-approval boundary | Scroll/focus to form using a secondary text link only if needed | No file availability, download, delivery or approval claim |
| 4 | `REVIEW_BOUNDARY` | What this request starts | What happens after submission? | Minimum context → submit → human review → clarification may be requested → outcome communicated separately | None | No SLA, turnaround or guaranteed follow-up |
| 5 | `PREFILL_CONTEXT` | Review the context carried into this request | Is the product/market/application/process/document context correct? | Valid visible chips/fields only; each editable/removable | Edit / Remove | Invalid or stale values disappear safely; no internal status code |
| 6 | `REQUEST_FORM` | Document request details | What must I provide? | Minimum fields, persistent labels, hints, non-confidential warning and one submit control | `Submit Document Request for Review` | Privacy slot remains annotated until approved; no Gate 5 Buyer Clean |
| 7 | `HUMAN_REVIEW_NOTE` | Reviewed by a person | Does submission automatically qualify or release a file? | Receipt-only and clarification boundary | None | No outcome, availability or response-time promise |
| 8 | `BUYER_QUESTIONS` | Before you submit | Can I continue without a grade? What does receipt mean? | Four concise visible answers | Conditional information link only | No FAQPage Schema |
| 9 | `RELATED_INFORMATION` | Need document information first? | Where can I understand categories? | One quiet text link to `DOC-000` only after route readiness | `Review document information` | Not a card grid; does not turn this page into a Hub |
| 10 | `GLOBAL_FOOTER` | Shared Footer | How do I continue site navigation? | Frozen Deep Navy component | Fixed global `Request a Quote` | No Contact/privacy fallback or page-local links added |

### 2.2 Proposed visible copy direction

The following is Gate 2 copy for review. Privacy legal text is intentionally excluded.

#### Hero

**Eyebrow:** `CONTROLLED DOCUMENT REQUEST`

**H1:** `Request titanium dioxide documents for review`

**Intro:**

> Tell us which product, destination market and document categories are relevant to your evaluation. Your request will be reviewed by a person before any file outcome is communicated.

**Boundary line:**

> Submitting this form confirms only that your request was received. It does not confirm file availability, applicability, current version, release, download, delivery, compliance, origin proof or approval.

#### Review sequence

1. `Provide the minimum request context.`
2. `Submit your document request.`
3. `A person reviews the request and may ask for clarification.`
4. `Any document outcome is communicated separately.`

#### Non-confidential information warning

> Share only business contact details and non-confidential request context. Do not include passwords, payment information, personal identification or confidential formulations.

#### Submit label

`Submit Document Request for Review`

#### Success

**Heading:** `Your document request has been received for human review.`

**Boundary:**

> This receipt does not confirm file availability, applicability, current version, release, download, delivery, compliance, origin proof or approval. Any outcome will be communicated separately.

No reference number is shown unless a real receiver later supplies and verifies one.

#### Channel-free failure

**Heading:** `We could not confirm receipt.`

**Body:**

> We could not confirm that your request was received. Your entries are still on this page. Please try again.

**Action:** `Try again`

No Contact, email, phone or invented ticket is shown.

## 3. Minimum form contract

### 3.1 Buyer-facing fields

| Order | Field key | Label | Requirement | Control | Validation / conditional behavior | Why it is necessary |
|---:|---|---|---|---|---|---|
| 1 | `contact_name` | Contact name | Required | Text | Trim outer whitespace; non-empty; preserve input | Human follow-up addressee |
| 2 | `company` | Company or organization | Required | Text | Non-empty; long names wrap safely | Controlled business context |
| 3 | `business_email` | Business email | Required | Email | Syntax only; never claim inbox/domain validity | One reply channel |
| 4 | `destination_market` | Destination country or market | Required | Searchable select/text-safe fallback | Editable; no serviceability or regulatory inference | Applicability review context |
| 5 | `grade_id` | Product or grade | Required choice | Select | 14 registered neutral grades + `Not sure` + `Multiple grades`; unknown is valid | Document applicability often depends on grade |
| 6 | `prefill_context` | Application or process context | Optional; only when valid context exists | Removable/editable chips or compact fields | Never required; discard unsupported V0.3 relation silently | Preserve explicit upstream context without adding data burden |
| 7 | `document_needs[]` | Documents requested | Required multi-select | Checkbox group | At least one; TDS, SDS, COA, COO / Origin, Traceability, Other | Core routing task |
| 8 | `request_context` | Additional request context | Required only for Other; otherwise optional | Textarea | Reveal and focus when `Other` is selected; planned 2,000-character layout test | Clarifies non-standard need/order/batch context if buyer has it |
| 9 | `data_acknowledgement` | Data-handling acknowledgement | Required before submit | Checkbox | Exact label/purpose/legal basis is `APPROVED_COPY_REQUIRED` | Required by shared privacy contract |
| 10 | `submit` | Submit Document Request for Review | Single submit | Button | Enabled for interaction; validation occurs on submit; submitting prevents duplicate body submits | Starts the one controlled workflow |

### 3.2 System-only context

| Key | Use | Public handling |
|---|---|---|
| `source_page_id` | Attribution and safe prefill validation | Never displayed as an internal ID; ignored if unsupported |
| `source_context_version` | Validate relation currency | Never Buyer Clean; stale value is discarded |

Hidden metadata never satisfies a required buyer-facing field.

### 3.3 Document category labels and boundaries

| Category | Buyer-facing short help | Must not imply |
|---|---|---|
| TDS | Technical data request for the selected product context | A current or approved TDS exists or will be sent |
| SDS | Safety data request whose market/language applicability may require review | One SDS applies everywhere or proves compliance |
| COA | Quality record request whose batch/order scope may require clarification | A generic or shipment-specific COA is available |
| COO / Origin | Origin-document request whose destination/order scope may require review | Malaysia origin, customs acceptance or a specific COO is proven |
| Traceability | Request for controlled batch or traceability information | Batch history or traceability evidence is available/releasable |
| Other | Another document need described briefly by the buyer | Entering a type means it is supported |

### 3.4 Fields deliberately absent

Phone, personal/residential address, company registration number, company size, website, quantity, price, packaging, port, Incoterm, shipping terms, sample interest, file upload, password, payment data, government ID, mandatory order/batch number and manually entered production route are not collected initially.

## 4. Prefill and restricted-context contract

### 4.1 Accepted context

| Source | Accepted explicit context | Public treatment |
|---|---|---|
| Grade page / Products | Registered `grade_id`; V0.3-approved `application_id` or `process_context` when explicitly carried | Visible and editable/removable |
| Application page | Application identity; grade only after an explicit buyer selection | Generic Application never chooses a grade |
| Market page | Destination market identity | Editable; no supply/route/regulatory implication |
| Document information page | Explicit document category | Editable multi-select; no availability implication |
| Resource page | Neutral source topic for internal attribution | Omitted from the buyer form unless needed to explain valid context |

### 4.2 M-2377

- Accept neutral `M-2377` context.
- Accept Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate only when explicitly selected/carried through an approved V0.3 action.
- Do not generate Specialty Materials.
- Do not generate Rubber. Buyer-entered Rubber may remain unclassified inside `Other` request context.
- Changing/removing M-2377 removes any system-carried incompatible application/process chips without negative language.

### 4.3 M-996 and M-2196

- Either grade may be selected independently.
- No difference, rank, better/worse language, equivalence, replacement, substitution, comparative performance or comparison-led recommendation appears.
- The form does not display attachment-derived technical facts.

### 4.4 No-public and invalid values

`NO_PUBLIC_MAPPING` means no approved positive relationship. An invalid/stale/no-public system value is removed and the form remains usable. Buyer Clean text must not say `not suitable`, `not applicable`, `unsupported`, `unavailable` or expose an internal code.

## 5. Validation and submission-state content

| State | Required copy/behavior direction | Prohibited implication |
|---|---|---|
| First load | Neutral fields, no red/error state | Missing prefill is an error |
| Field touched, required empty | `Enter your contact name.` / equivalent field-specific plain language | Color-only signal |
| Invalid email | `Enter a business email in the format name@company.com.` | Inbox/domain has been verified |
| No document type | `Select at least one document category.` | Any category is available |
| Other without context | `Briefly describe the other document you need.` | Require confidential detail |
| Submit with errors | Summary heading `Review the highlighted fields` with links to each field; focus summary | Input erased or first invalid field focused without summary |
| Submitting | `Submitting your request…` plus persistent context | Receipt or approval already occurred |
| Receipt confirmed | Exact success direction in section 2.2 | Availability, release, delivery, origin proof or approval |
| Submission unconfirmed | Exact channel-free failure in section 2.2; entries preserved | Receipt, ticket or fallback contact |
| Form service unavailable | Annotated review state; release remains blocked | Publish knowingly broken form |

## 6. Privacy and human-review boundary

### 6.1 Gate 2–5 review-artifact permitted content

- The non-confidential-information warning in section 2.2.
- Receipt-only and human-review language.
- An internal wireframe/visual annotation reserving a data-handling notice and acknowledgement slot.

### 6.2 Still required before Gate 5 Buyer Clean approval and release

- controller / responsible entity;
- collection purpose;
- data categories;
- processors/recipients and applicable transfer information;
- retention period or criterion;
- rights and approved privacy channel;
- acknowledgement/consent basis and exact visible text.

No `/privacy/` route, Footer item, privacy claim, retention duration or controller identity is invented by Gate 2.

## 7. SEO contract

| Field | Gate 2 submission |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Secondary language | `request TDS`, `request SDS`, `request COA`, `request COO` as action context only; not independent targets |
| H1 | `Request titanium dioxide documents for review` |
| Title direction | `Request Titanium Dioxide Documents | TiO2 Malaysia` |
| Meta description direction | `Submit product, destination market and document categories for human review. Receipt does not confirm file availability, release, delivery or approval.` |
| Slug | `/request-documents/` |
| Indexing recommendation | `NOINDEX, FOLLOW — RECOMMENDED_PENDING_PROJECT_CONTROL_APPROVAL`; utility workflow has no primary keyword and must not compete with DOC-* information pages |
| Canonical recommendation | Self-reference to `https://tio2malaysia.com/request-documents/` if the route is approved; pending the same SEO decision |
| Sitemap recommendation | Exclude while `NOINDEX`; do not activate in this task |
| Hreflang | `NOT_APPLICABLE` |
| Breadcrumb | `Home / Request Documents` |
| Excluded intent | Informational document primary terms, product/grade terms, supplier/market terms, quotation/sample action |

The indexing/canonical recommendation is not an approved URL/indexing change. It remains a review item and must not be activated by this planning task.

## 8. GEO and answer-ready blocks

| Block ID | Buyer question | Concise answer boundary | Evidence |
|---|---|---|---|
| `GEO-DOC-01` | What information is needed to request titanium dioxide documents? | Business contact, destination, product/grade, requested categories and a short context only when needed | Shared Playbook and page Brief |
| `GEO-DOC-02` | Can I request documents if I do not know the exact grade? | Yes. Choose `Not sure` and provide non-confidential context for human review | Shared unknown-grade contract |
| `GEO-DOC-03` | Does submitting the form mean the documents are approved or available? | No. It confirms receipt for human review only | Shared success boundary |
| `GEO-DOC-04` | What happens after submission? | A person reviews the request, may request clarification and communicates any outcome separately | Shared human-review sequence |

### Entity contract

- Primary entity: TiO2 Malaysia controlled document-request workflow.
- Related entities: only buyer-selected registered grade, destination market, approved taxonomy application/process context and requested document category.
- No relationship is inferred from hidden metadata or Schema.
- No claim is made about company identity beyond approved Global Chrome brand treatment.

## 9. Schema contract

| Schema | Gate 2 decision |
|---|---|
| `WebPage` | Candidate only; name and URL must match visible page and approved canonical/indexing decision |
| `BreadcrumbList` | Candidate `Home` → `Request Documents`; only when both visible links/identity exist |
| `FAQPage` | Not authorized; visible Q&A does not create Schema permission |
| `HowTo` | Prohibited; the review sequence is not a HowTo claim |
| `Product`, `Offer`, `Service` availability | Prohibited |
| Certification, download, file, price, shipping, rating, order or compliance facts | Prohibited |

## 10. CTA and internal-link hierarchy

| Tier | Action | Location | Rule |
|---|---|---|---|
| Global terminal | `Request a Quote` → `/request-a-quote/` | Header, Mobile Header/Menu, Footer | Fixed V0.5; visible, not current, not modified |
| Page primary | `Submit Document Request for Review` | Form end | One submit control only; Accessible Teal solid; does not navigate to RFQ |
| Supporting | `Review document information` → route key `DOC-000` | After Q&A | Quiet text/outline treatment; only after route readiness; not a category grid |
| Utility | Edit / Remove prefill context; Try again after failure | Context/failure states | Workflow controls, not promotional CTAs |

Inbound pages may pass explicit context; they do not receive new content or route status from this Gate.

## 11. Gate 2 verification and open controls

### 11.1 Self-check

- [x] Page role remains controlled request capture, not Documents Hub selection.
- [x] Minimum fields match the shared Playbook.
- [x] Explicit prefill is visible, editable/removable and safely discarded when invalid.
- [x] Unknown grade is valid.
- [x] PRODUCT V0.3 boundaries are preserved.
- [x] Success is receipt only.
- [x] Failure is channel-free and preserves entries.
- [x] Privacy slot is reserved but no legal copy is invented.
- [x] Global Chrome V0.5 is unchanged.
- [x] SEO recommendation is recorded as pending approval rather than activated.
- [x] Schema creates no product, file, availability, compliance or approval fact.

### 11.2 Open controls

| Control | Status | Effect |
|---|---|---|
| Gate 2 project-control/user review | `OPEN` | This architecture is submitted, not approved |
| INDEX/NOINDEX and canonical | `RECOMMENDED_PENDING_APPROVAL` | No implementation or index change |
| Approved privacy wording | `OPEN / BLOCKS_GATE_5_APPROVAL_AND_RELEASE` | Gate 3–5 review artifacts use an internal annotated slot only |
| Verified receiver/owner/manual channel | `OPEN / BLOCKS_OPERATIONAL_RELEASE` | Use channel-free failure state |
| Document inventory | `ABSENT / FACT_FREEZE` | Categories remain request-routing labels only |
| Route/form readiness | `NOT_TESTED / RELEASE_BLOCKER` | Does not change fixed Global RFQ visuals |

## 12. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial CONV-DOC Gate 2 content, SEO, GEO, Schema, minimum-field, prefill, validation and CTA contract | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
