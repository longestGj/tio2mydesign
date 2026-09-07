# Documents Child Pages Gate 1 Project-Control Submission V0.1

## 0. Control

| Field | Value |
|---|---|
| Pages | `DOC-TDS`, `DOC-REACH`, `DOC-COO` |
| URLs | `/documents/tds-sds-coa/`, `/documents/reach/`, `/documents/certificate-of-origin/` |
| Date | 2026-09-04 |
| Review status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Lifecycle | `BRIEF_IN_REVIEW` for all three pages |
| Content intent | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |
| Gate 1 | `PENDING_USER_APPROVAL / NOT_CLOSED` |
| Gate 2–10 | `NOT_AUTHORIZED` |
| User authority consumed | Approval to begin the three pages and use shared Gate 0–1 research with serial Gate 2–5 |

## 1. Outcome submitted for decision

Gate 0 identity and Gate 1 research are complete enough for the user to decide the content intent of all three pages. The pages have distinct keyword and buyer-decision responsibilities, local evidence is inventoried, official REACH and COO sources are captured where accessible, and unsupported company/product claims fail closed.

Project Control recommends approving all three Page Intent Cards with the listed evidence holds. This submission is not approval and does not start Gate 2 until the user explicitly decides.

## 2. Proposed Page Intent Cards

### 2.1 DOC-TDS — `/documents/tds-sds-coa/`

| Field | Proposed value |
|---|---|
| Primary keyword | `titanium dioxide tds` |
| Audience | Procurement, formulation, technical, quality and EHS teams evaluating titanium dioxide. |
| Buyer problem | Choose the correct document and understand what controls its applicability. |
| Core message | TDS, SDS and COA serve different decisions and must be reviewed for the exact product and transaction context. |
| Must include | Three-document comparison; TDS Grade/revision scope; SDS product/jurisdiction/language scope; COA lot/order scope; request checklist; receipt boundary. |
| Must exclude | Public inventory, universal availability, fake filenames, instant download, compliance/approval guarantees and inferred Grade-to-document relationships. |
| Primary CTA | `Request Documents`, route-gated and owned by `CONV-DOC`. |
| Secondary CTA | `Review Document Categories` → `/documents/`. |
| Ownership | Information only; DOC-000 navigates, Product pages own Grade facts and CONV-DOC owns form/submission behavior. |
| H1 direction | `Titanium Dioxide TDS, SDS and COA Guidance` |

Proposed Gate 2 order: Hero → direct answer → three-document comparison → TDS scope → SDS scope → COA scope → request checklist → review process → related paths → FAQ → final CTA.

### 2.2 DOC-REACH — `/documents/reach/`

| Field | Proposed value |
|---|---|
| Primary keyword | `titanium dioxide reach registration` |
| Audience | EU-facing procurement, regulatory, EHS and supplier-qualification teams. |
| Buyer problem | Identify the relevant legal actor, substance/product scope, market and evidence date before relying on REACH information. |
| Core message | REACH review depends on the relevant substance, legal actor, supply-chain role and current evidence; generic information is not company or Grade coverage. |
| Must include | Scoped definition, legal-actor/role distinction, evidence/currentness block, buyer checklist and qualified request path. |
| Must exclude | Unqualified `REACH compliant`, company/Grade registration, registration numbers, tonnage, only-representative relation and legal advice without evidence. |
| Primary CTA | `Request Documents`, route-gated and owned by `CONV-DOC`. |
| Secondary CTA | `Review Document Categories` → `/documents/`. |
| Ownership | Regulatory-document information only; EU Market, Resources, Products and CONV-DOC retain their responsibilities. |
| H1 direction | `Titanium Dioxide REACH Information for Procurement Review` |

Proposed Gate 2 order: Hero → scoped answer → generic substance information versus company/supply-chain coverage → scope factors → buyer checklist → dated official-source panel → request process → EU Market/Documents links → FAQ → final CTA.

### 2.3 DOC-COO — `/documents/certificate-of-origin/`

| Field | Proposed value |
|---|---|
| Primary keyword | `titanium dioxide country of origin certificate` |
| Audience | Procurement, supplier-qualification, import/export and trade-documentation teams. |
| Buyer problem | Understand what a COO supports, which transaction context matters and how it differs from traceability. |
| Core message | A certificate of origin is evidence for a defined transaction context; it is not a generic product badge or customs guarantee. |
| Must include | COO purpose, product/order/shipment/destination context, origin substantiation versus traceability, buyer checklist and request boundary. |
| Must exclude | Generic Malaysia-origin, issued-certificate, customs/duty outcome, circumvention and universal traceability claims. |
| Primary CTA | `Request Documents`, route-gated and owned by `CONV-DOC`. |
| Secondary CTA | `Review Document Categories` → `/documents/`. |
| Ownership | Origin-document guidance only; About, Markets, Resources, Products and CONV-DOC retain their responsibilities. |
| H1 direction | `Titanium Dioxide Certificate of Origin Guidance` |

Proposed Gate 2 order: Hero → scoped answer → when a COO is used → transaction factors → origin substantiation versus traceability → buyer checklist → request process → About/Markets/Resources paths → FAQ → final CTA.

## 3. What differs among the pages

| Dimension | DOC-TDS | DOC-REACH | DOC-COO |
|---|---|---|---|
| Primary buyer decision | Which technical/safety/batch document to request | What REACH scope and actor evidence to verify | What transaction-specific origin evidence is relevant |
| Controlling context | Grade/revision; product/jurisdiction/language; lot/order | Substance/product, legal actor, supply-chain role, use/market and date | Product, order/shipment, destination, origin criteria and certificate context |
| Unique content | TDS/SDS/COA three-way comparison | Generic substance information is not supplier/Grade coverage | COO is not a product badge; origin substantiation is not traceability |
| Most important hold | No public inventory or availability matrix | No company/Grade registration or compliance claim | No company/product/shipment Malaysia-origin or traceability claim |
| Time sensitivity | Document revision and request context | Regulatory/registration evidence and reviewed date | Official issuance/origin guidance and transaction facts |

## 4. Evidence and claim disposition

| Page | Register rows | `RENDER` | `RENDER_WITH_QUALIFIER` | `CONTROLLED_REQUEST_ONLY` | `DO_NOT_RENDER` |
|---|---:|---:|---:|---:|---:|
| DOC-TDS | 10 | 2 | 3 | 1 | 4 |
| DOC-REACH | 10 | 1 | 4 | 1 | 4 |
| DOC-COO | 10 | 0 | 5 | 1 | 4 |

Evidence findings:

- Shared inventory: 29 existing local sources, including 18 readable TDS PDFs across the approved 14-Grade architecture; all 29 hashes match.
- TDS boundary: source presence can support internal technical work but does not establish public inventory, current availability or download permission. Multiple versions for M-895, M-886, M-996 and M-2377 cannot be merged. M-210 filename wording does not authorize an FDA claim.
- SDS/COA boundary: no approved first-party inventory was identified, so availability and coverage remain hidden.
- REACH boundary: two complete European Commission pages are captured and eligible for general qualified explanation. ECHA direct captures returned HTTP 403 and remain discovery-only. No company/Grade REACH evidence was identified.
- COO boundary: complete Royal Malaysian Customs and MITI pages are captured. Customs is the lead general source; MITI is dated/scope-qualified supporting context. Neither proves company/product/shipment origin, an issued certificate or traceability capability.

## 5. Risks and controls

| Risk | Control |
|---|---|
| Search wording is mistaken for an approved claim | `reach compliant titanium dioxide` remains query language only; visible copy is qualified. |
| Local files are mistaken for public availability | File names, counts, downloads and Grade-to-document relationships stay buyer-hidden. |
| General official guidance is mistaken for company evidence | Company, Grade, order and shipment assertions stay `DO_NOT_RENDER`. |
| COO content implies trade-measure avoidance | Circumvention framing is prohibited; customs/duty outcomes are never guaranteed. |
| Request receipt is mistaken for approval or delivery | CONV-DOC owns the form; success means receipt/review only. |
| Provisional routes are treated as live-approved | All three URLs remain `PROVISIONAL_URL`; publication/indexing remain locked. |

## 6. Current authority pointers

| Page | Current Gate 1 Manifest | Bytes | SHA-256 |
|---|---|---:|---|
| DOC-TDS | `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md` | 3202 | `57148C2E3A8A2F4685067E79E181E2A9B689CE952315AD64764286635F08B39D` |
| DOC-REACH | `pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md` | 3622 | `8328A3A5CE5D45FEAF4E9ED1671C5FC7249D329A7AB6DEDACEA3697516682290` |
| DOC-COO | `pages/documents/certificate-of-origin/05_review/DOC-COO_CURRENT_GATE1_BASELINE_MANIFEST_V0.1.md` | 3708 | `CC303BDF633A109923DE7FAAE4F9A80DEB1DB6C4ABA9E46703AE20530EF081B7` |

## 7. Project-Control recommendation and requested decision

Recommendation: approve all three Page Intent Cards with all current holds preserved.

If approved:

1. Gate 1 for each explicitly approved Page ID can be closed as `USER_APPROVED / CLOSED_WITH_EVIDENCE_HOLDS`.
2. `CONTENT_INTENT_CONFIRMED` becomes `YES` only for those approved pages.
3. Gate 2 may begin serially in the agreed order: `DOC-TDS → DOC-REACH → DOC-COO`.
4. Gate 2 will produce actual English content architecture, module order, CTA wording and SEO/GEO/Schema direction for a new user decision.
5. The approval will not release any frozen claim, formally approve the provisional URLs for publication, approve Gate 3–10, or authorize code, development, deployment, publication, DNS or indexing.

Requested user decision: approve, revise or reject each of the three Page Intent Cards.

## 8. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | First combined Gate 1 decision package for the three Documents child pages | `PENDING_USER_APPROVAL` |
