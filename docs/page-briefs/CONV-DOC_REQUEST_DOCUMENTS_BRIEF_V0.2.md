# Request Documents Page Brief V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `CONV-DOC` |
| Page / URL | Request Documents / `/request-documents/` |
| Page type | Utility conversion page |
| Language | EN |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Priority | P0 |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Current gate | `GATE_5_EXECUTED / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| User authority | 2026-09-01: `授权执行Gate5` |
| Review ID | `CONV-DOC-G5-V11-20260901-01` |
| Gate ceiling | Gate 5 only; Gate 6/7, handoff, development, testing, deployment and release are not authorised |

This V0.2 is the current working Brief. V0.1 is retained unchanged as `HISTORICAL / SUPERSEDED_BY_V1.1_REBASE`; its Gate 2–5 artifacts are not current design authority.

## 1. Authority and decisions

Precedence for this page is: current user decisions → `IKHLAS_Document_Hub_Request_Documents_Design_Spec_V1.1.md` → project Gate standard → current approved Global Chrome → Conversion Playbook → historical V0.1 artifacts.

The following decisions are locked for this Gate 5 execution:

- URL remains `/request-documents/`; no duplicate form routes.
- This is a transaction page, not a brand, product-education or market-content page.
- Market/destination-based document request, filtering, version selection and applicability logic are removed.
- `Country / Region` is required only as contact/company location. It cannot determine document availability, version, applicability or scope.
- Only the minimum request fields in Section 4 are buyer-visible.
- Submission success means receipt only. It does not mean approval, availability, immediate sending, public download, delivery, compliance or origin proof.
- Global Header/Footer and permanent RFQ remain shared; Request Documents is not added to first-level navigation.

## 2. Gate ledger

| Gate | Current V0.2 status | Validation | Approval / authority boundary |
|---|---|---|---|
| Gate 0 | `CONFIRMED` | Registry identity, URL, type, keyword and priority unchanged | Existing registry plus current user decision |
| Gate 1 | `CONTENT_INTENT_CONFIRMED` | V1.1 Page Intent Card, keyword boundary, buyer problem, evidence and exclusions reconciled | User authorised Gate 5 execution after supplying and confirming V1.1 direction; not final visual approval |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_FOR_GATE5_EXECUTION` | Transaction-only module order, minimum fields, CTA, SEO/GEO and state copy checked | Working execution authority only; project-control review remains required |
| Gate 3 | `EXECUTED / REVIEW_CANDIDATE` | 1440, 768 and 390 structures plus menu/states covered | Not approved / not closed |
| Gate 4 | `EXECUTED / REVIEW_CANDIDATE` | Visual system, components, density, focus/error/success direction checked | Not approved / not closed |
| Gate 5 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | Five V0.2 PNG assets rendered and audited | User authorised execution; final project-control and user approval remain open |
| Gate 6+ | `LOCKED / OUT_OF_SCOPE` | No action taken | No authority |

## 3. Page Intent Card

| Intent field | Confirmed V0.2 contract |
|---|---|
| Audience | B2B technical, quality, procurement, regulatory and supplier-qualification contacts who know or can select a published Product Grade |
| Buyer problem | Submit a clear document request without assuming public download, document inventory, approval or market-specific applicability |
| Core message | Provide minimum contact, Product Grade and document-category context; a person reviews the received request and follows up through the supplied Business Email |
| Must include | Eight minimum fields; 14-grade selector; six V1.1 document groups; editable prefill; review step; validation, focus, empty, restricted, failure, success and privacy states |
| Must exclude | Brand story, product education, market content, destination routing, market-based document versions, public download, SLA, approval/availability promise, RFQ fields and immediate RFQ push |
| Primary CTA | `Request Documents` |
| Secondary CTA | None in the active form; success may show `View Products`. Global RFQ remains present only as shared Chrome |
| Ownership boundary | Product/Application/Document Hub pages may pass editable context. Document information pages own explanation/search intent; Markets own market content; CONV-RFQ owns commercial enquiry fields |

## 4. Minimum field contract

| Group | Field | Requirement | Gate 5 behaviour |
|---|---|---|---|
| Your Details | Full Name | Required | Labelled input; empty error |
| Your Details | Company | Required | Labelled input; long-company stress tested |
| Your Details | Business Email | Required | Format validation; personal-domain warning is non-blocking |
| Your Details | Country / Region | Required | Contact/company location only; never a document rule input |
| Request Details | Product Grade | Required | Exactly the 14 published grades; editable prefill |
| Request Details | Document Types | Required | Multi-select; at least one of six groups |
| Request Details | Application / Industry | Recommended | Optional editable context; no product/route inference |
| Request Details | Additional Requirements | Optional | About 500 characters; confidential-data warning |

Excluded RFQ fields: Annual Volume, Target Price, Expected Order Quantity, Purchase Timeline, WhatsApp and Existing Supplier.

## 5. Six document groups

1. Technical Data & Product Documentation
2. Safety Documentation
3. Quality & COA Documentation
4. Regulatory & Compliance Documentation
5. Origin & Supplier Qualification Documentation
6. Other Documentation

Each option is a request-routing category only. No option renders a file inventory, availability, approval, certification, market scope, immediate sending or download claim.

## 6. Prefill and Product V0.3 boundary

- Product page → Product Grade.
- Application page → Application / Industry.
- Document Hub selector → Product Grade.
- Supported URL parameters may prefill Product Grade, document groups and Application / Industry; every value remains editable/removable.
- Empty prefill produces no empty shell. Unsupported or stale values are discarded without negative suitability language.
- M-2377 may be carried neutrally with Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate when the source context contains them.
- Specialty Materials remains `DO_NOT_RENDER`. Rubber remains evidence-only. `NO_PUBLIC_MAPPING` is never rewritten as inapplicable.
- M-996/M-2196 comparison, equivalence, substitution, ranking and advantage claims remain frozen.

## 7. Submission, privacy and operational boundary

Success heading: `Document Request Received`.

Success body: `Thank you. Our team will review your request and follow up using the business email you provided.`

Success shows no SLA and no immediate Request a Quote action. Failure preserves entries, states that receipt could not be confirmed and offers `Try again`; no unverified contact fallback is invented.

Approved buyer-clean privacy copy, controller identity, purpose, retention rule, rights wording, privacy channel and operational receiver remain evidence-gated. Gate 5 may show an internal annotation in review assets only. This prevents Buyer Clean approval and release, but does not block layout/state design.

## 8. SEO, GEO and internal links

- Primary keyword remains `NO_PRIMARY_KEYWORD`; search intent is transactional utility only.
- Informational document pages own TDS/SDS/COA/origin explanation. Market pages own market content. Product and Application pages own their respective search intents.
- H1: `Request Documents`.
- No download-oriented keyword targeting or market-specific request language.
- GEO may state only that the page receives controlled requests for human review. Schema must not assert document availability or approval.
- Breadcrumb: Home / Request Documents. Shared Header/Footer links remain unchanged.

## 9. Gate 5 acceptance inventory

Gate 5 must cover Desktop 1440, Tablet 768, logical 390px, Mobile Menu Open, valid prefill, empty/stale values, all-14-grade capacity, restricted category, focus, validation, error summary, personal-email warning, submitting, failure, success, Other Documentation, privacy review and 500-character stress.

## 10. Open controls

| Control | State | Consequence |
|---|---|---|
| Approved privacy copy and route | `OPEN / RELEASE_BLOCKER` | No Buyer Clean approval or release |
| Operational request receiver | `OPEN / RELEASE_BLOCKER` | No delivery, SLA or fallback channel claim |
| Document inventory and applicability | `NOT_ESTABLISHED / FAIL_CLOSED` | Never displayed or inferred |
| RFQ route readiness | `EXTERNAL_RELEASE_BLOCKER_IF_FALSE` | Global RFQ remains visible; no Contact fallback |
| Project-control Gate 5 review | `OPEN` | V0.2 remains draft |
| Final user approval of V0.2 visuals | `OPEN` | Do not mark approved/closed |

## 11. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-30 to 2026-09-01 | Historical market/destination-oriented Gate 0–5 set | `HISTORICAL / SUPERSEDED_BY_V1.1_REBASE` |
| V0.2 | 2026-09-01 | V1.1 transaction-page rebase and Gate 5 execution | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
