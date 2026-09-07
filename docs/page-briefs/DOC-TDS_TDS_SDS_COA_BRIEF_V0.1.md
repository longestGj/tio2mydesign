# DOC-TDS TDS, SDS & COA Page Brief V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `DOC-TDS` |
| Version / date | V0.1 / 2026-09-04 |
| Owner / reviewer | Documents page task / Project Control and Quality Review |
| User authority | 2026-09-04 approval to start the three Documents child pages using shared Gate 0–1 research and serial Gate 2–5 |
| Approval boundary | Workflow only; this Brief and Gate 1 remain under review |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Mapping / verification | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Change summary | Initial Gate 0–1 contract; no prior page Brief |

## 1. Page identity

| Field | Value |
|---|---|
| Section / type / playbook | DOCUMENTS / Document-compliance information page / `DOCUMENT` |
| Page name | TDS, SDS & COA |
| URL / slug | `/documents/tds-sds-coa/` / `tds-sds-coa`; provisional, not live-approved |
| Market / language / priority | GLOBAL / EN / P1 |
| Planned domain / site scope | `https://tio2malaysia.com` / `tio2-my` |
| Canonical | Candidate `https://tio2malaysia.com/documents/tds-sds-coa/`; decision required before Gate 7 |
| Indexing | Candidate INDEX/FOLLOW; decision required and Gate 10 locked |
| Development workspace | `D:\16Wordpress_nextjs`; excluded until a later approved handoff |

## 2. Authority and conflicts

Authority order: current user decisions → root charter → this page Brief → PRD V0.4 / Registry V0.2 / keyword master → Documents Playbook → verified document evidence → supporting research. Shared visual authority is Global Chrome V0.5 and Visual Standard V1.0.

`NO_CONFLICT_FOUND` as of 2026-09-04. The keyword-master wording “availability” is interpreted through the newer Playbook fail-closed rule: the page may explain availability context but may not state that any TDS, SDS or COA is publicly or currently available without item-level evidence and approval.

## 3. Page Intent Card

| Field | Proposed value |
|---|---|
| Audience | Procurement, formulation, technical, quality and EHS teams evaluating a titanium dioxide grade. |
| Buyer problem | The buyer must choose the correct document and understand which product, revision, market, language or lot context controls its usefulness. |
| Core message | TDS, SDS and COA serve different decisions and must be reviewed for the exact product and transaction context. |
| Must include | Three-document comparison; TDS grade/revision scope; SDS product/jurisdiction/language scope; COA lot/order scope; qualified-request checklist; receipt boundary. |
| Must exclude | Public document inventory; universal availability; fake filenames; “all grades/all markets”; instant download; compliance, approval or test guarantees. |
| Primary CTA | `Request Documents` → `/request-documents/`, only when the approved CONV-DOC route/readiness contract is eligible. |
| Secondary CTA | `Review Document Categories` → `/documents/`. |
| Ownership boundary | DOC-TDS explains generic document intent; Product pages own grade details; DOC-000 navigates; CONV-DOC owns the form and submission states. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_REVIEW_REQUIRED` |

## 4. Buyer and page strategy

- Procurement decides which evidence to request before qualification.
- Technical/formulation users distinguish grade-level technical information from safety communication and batch results.
- Quality users identify when lot/order context is required.
- EHS users identify jurisdiction, language and revision needs for safety review.
- Success means the buyer can select TDS, SDS or COA and provide sufficient context without assuming delivery or applicability.

This page does not own grade specifications, generic supplier intent, country procurement intent, the Documents Hub, the Request Documents form, company-origin facts or public file delivery.

## 5. SEO and GEO contract

| Field | Value |
|---|---|
| Primary keyword | `titanium dioxide tds` |
| Secondary keywords | `titanium dioxide sds`; `titanium dioxide coa`; `titanium dioxide technical data sheet`; `titanium dioxide safety data sheet`; `request titanium dioxide documents` |
| Intent / stage / cluster | I / Technical Evaluation / COMP-02 |
| Excluded keywords | `grade primary terms`; `country supplier primary terms` |
| Cannibalization | DOC-TDS owns generic document/compliance intent; Product pages only describe grade-specific facts and link here or to CONV-DOC. |
| H1 direction | `Titanium Dioxide TDS, SDS and COA Guidance` |
| Title direction | `Titanium Dioxide TDS, SDS & COA Guidance | TiO2 Malaysia` |
| Meta direction | Explain the three document roles, the context buyers should identify and the controlled request path without claiming availability. |
| Hreflang | `NOT_APPLICABLE` for the current EN-only page |
| Robots | Candidate INDEX/FOLLOW; not approved for publication or indexing |
| Primary entity | Titanium dioxide technical, safety and batch documentation |
| Related entities | TDS, SDS, COA, titanium dioxide grade, document request |
| Freshness | Recheck whenever a document revision, product identity, language/jurisdiction requirement or approved inventory changes. |
| Schema direction | `WebPage` + `BreadcrumbList`; FAQPage only after separate current-policy and content approval. |
| GEO exclusions | No Product-document availability, certification, download, legal-compliance or batch relationship without visible approved evidence. |

Answer-ready questions: What is the difference between a TDS, SDS and COA? Which context should a buyer provide? Does request receipt mean a document has been approved or delivered? Why do revision, market, language and lot matter?

## 6. Required buyer questions

| ID | Question | Decision / evidence depth |
|---|---|---|
| TDS-Q01 | What is each document used for? | Stable category semantics; definition depth |
| TDS-Q02 | Which document should I request? | Buyer need mapped to TDS/SDS/COA; no availability promise |
| TDS-Q03 | Why do grade and revision matter for a TDS? | Grade-specific scope; source-backed |
| TDS-Q04 | Why do jurisdiction and language matter for an SDS? | Safety communication scope; general guidance only |
| TDS-Q05 | Why does a COA require lot or order context? | Batch-result scope; no generic COA claim |
| TDS-Q06 | What information should accompany a request? | Approved request-field semantics |
| TDS-Q07 | What happens after submission? | Receipt means review only, not approval or delivery |

## 7. Gate 2 candidate architecture

Proposed sequence: Breadcrumb → Hero → direct answer → three-document comparison → TDS scope → SDS scope → COA scope → qualified-request checklist → review process → related paths → FAQ → final CTA.

Unique content is the three-way purpose/scope/non-proof comparison. It may mention the approved 14-grade system neutrally, but it cannot publish a grade-to-document availability matrix.

Gate 2 copy, order and CTA wording remain unapproved. `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=NO`.

## 8. Relationships

| Owner | Relationship and behavior |
|---|---|
| `DOC-000` | Parent navigation; reciprocal category path only when DOC-TDS route/content are approved. |
| `CONV-DOC` | Sole request-form owner; eligible primary CTA and document-type prefill after route approval. |
| `PRODUCT-000` / Grade pages | Neutral product context and grade identity; no inferred availability relation. |
| `DOC-REACH` | Related compliance information, not merged into TDS/SDS/COA definitions. |
| `DOC-COO` | Related origin-document information, not treated as a fourth item in this page's comparison. |

Product recommendation is `NOT_APPLICABLE`; document guidance does not recommend grades.

## 9. Evidence and rendering

The page-level Claim Register is external to this Brief at `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv`.

Default decisions:

- TDS/SDS/COA stable purposes: candidate `RENDER`, subject to evidence review.
- Context distinctions: candidate `RENDER_WITH_QUALIFIER`.
- Request path: `CONTROLLED_REQUEST_ONLY`, subject to route readiness.
- Any file, revision-currentness, availability, download, universal coverage, compliance, approval or delivery claim: `DO_NOT_RENDER` until independently evidenced and approved.

## 10. CTA and internal-link contract

Primary CTA is Request Documents; `document_type` may prefill `TDS`, `SDS`, `COA` or a review choice, but the buyer must be able to edit or remove it. Secondary CTA returns to Documents. Breadcrumb is Home → Documents → TDS, SDS & COA. Contact is never a fallback.

If a target route is not eligible, remove the action and its Schema relationship atomically; do not render a disabled, hidden or dead control.

## 11. Visual, responsive and accessibility contract

Use Industrial Documentation Editorial styling, Global Chrome V0.5, Production SVG Logo and a text-first three-document comparison. No certificate thumbnails, fake PDF previews, download library or compliance seals.

Required Gate 3–5 evidence: complete 1440, 768 and 390 logical views; Mobile Menu open; route-unavailable; controlled-request; long document names/revisions; no-image; hover and visible keyboard focus. Maintain one H1, continuous heading hierarchy, 44px controls, 16px-level body readability, 200% zoom usability, no horizontal overflow and non-colour-only status communication.

## 12. Future handoff contract

Future Gate 7 must define isolated `site_scope=tio2-my` content, SEO, Schema, cache and route behavior; no cross-site fallback; null or unapproved claims omitted; visible/structured parity; route and stale-state fail-closed behavior. Implementation decisions belong to the external development project.

## 13. Acceptance checklist

- Page identity, keyword owner and provisional URL remain exact.
- TDS, SDS and COA are distinct in purpose and controlling context.
- No availability matrix or public file is inferred from local source presence.
- Every public claim resolves to an approved Claim Register row.
- Buyer Clean content contains no Gate, status or evidence tokens.
- CTA ownership, route readiness, SEO/GEO/Schema parity and three breakpoints are independently verified before later approval.

## 14. Review, Gate and completion record

| Gate | State |
|---|---|
| Gate 0 | `DRAFT_COMPLETE / PROJECT_CONTROL_REVIEW_PENDING` |
| Gate 1 | `IN_PROGRESS / NOT_APPROVED` |
| Gate 2–5 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 6–10 | `NOT_STARTED / NOT_AUTHORIZED` |

Open items: verify internal document source inventory; verify TDS validity versus public eligibility; identify first-party SDS/COA evidence; validate CONV-DOC prefill and route dependencies; obtain user confirmation of the Page Intent Card.

Completion through Gate 5 does not authorize development or publication. This Brief records no external handoff package.

## 15. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial Gate 0–1 Brief created under the approved three-page workflow | `BRIEF_IN_REVIEW` |
