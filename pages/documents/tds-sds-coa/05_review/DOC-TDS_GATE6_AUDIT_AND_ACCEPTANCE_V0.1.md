# DOC-TDS Gate 6 Audit and Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Review ID | `DOC-TDS-G6-PCR-01` |
| Date | 2026-09-05 |
| Gate 5 | `USER_APPROVED / CLOSED` |
| Gate 6 authority | User decision `批准 Gate 5，并授权启动 Gate 6。` |
| Overall result | `PASS_WITH_RECORDED_LATER_PHASE_CONTROLS` |
| Gate 6 result | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Page lifecycle | `DESIGN_IN_REVIEW / GATE6_PASS` |
| Gate 7–10 | `NOT_AUTHORIZED` |
| Development | No code, CMS, test implementation, deployment, publication or indexing action performed |

## 1. Reviewed authority

### 1.1 Governance and page identity

- root `AGENTS.md`;
- `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md`;
- `WEBSITE_VISUAL_CONTENT_SEO_GEO_REVIEW_STANDARD_V1.0.md`;
- `docs/architecture/PAGE_REGISTRY_V0.2.md`;
- `research/keyword/11_page_keyword_master.csv`;
- `docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.3.md` for shared evidence and document-request principles only;
- `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.3.md` as the approved Gate 1 page contract.

The Documents Playbook's embedded Hub submission status is historical and cannot override this child page's approved page-specific authority.

### 1.2 Approved content and visual baseline

- `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md`;
- `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.5.md`;
- `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md`;
- `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE3_BASELINE_MANIFEST_V0.3.md`;
- `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE4_APPROVED_MANIFEST_V0.2.md`;
- `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE5_APPROVED_MANIFEST_V0.2.md`;
- `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE5_USER_APPROVAL_CLOSURE_V0.1.md`.

### 1.3 Cross-page and evidence inputs

- `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.10.md`;
- `pages/documents/05_review/DOC-000_POST_GATE9_FAQ_GRADE_ALIGNMENT_DECISION_V0.1.md`;
- `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_RESEARCH_EVIDENCE_AUDIT_V0.1.md`;
- `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv`;
- shared Global Chrome V0.5 as referenced by the approved Gate 5 specification.

## 2. Required review outcome

| Dimension | Result |
|---|---|
| Overall Result | PASS |
| SEO/GEO Gate | PASS as approved specification |
| Malaysia-Origin Gate | PASS because no page-specific origin claim is published; global hold remains open |
| Brand / visual consistency | PASS |
| Information hierarchy | PASS |
| Page role / business task | PASS |
| Conversion path | PASS as specification |
| Credibility / evidence | PASS |
| Images / graphics | PASS; intentional body-image-free treatment |
| Desktop / Tablet / Mobile | PASS |
| Global components | PASS as approved V0.5 assembly reference |

Page-specification P0 findings: **0**.

Page-specification P1 findings: **0**.

Required P2 changes before Gate 7: **0**.

## 3. Page identity, keyword and cannibalization

| Check | Approved value | Result |
|---|---|---|
| Page ID | `DOC-TDS` | PASS |
| URL | `/documents/tds-sds-coa/` | PASS |
| Type | Technical-document decision page / Document-compliance child page | PASS |
| Language / priority | EN / P1 | PASS |
| Primary keyword | `titanium dioxide tds` | PASS |
| Secondary intent | titanium dioxide SDS, COA, technical data sheet, safety data sheet and controlled document request | PASS |
| Excluded intent | Grade primary terms and country-supplier primary terms | PASS |
| Mapping / evidence state | `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` | PASS |

Ownership remains separated:

- DOC-TDS owns TDS/SDS/COA decision support and request-context explanation;
- DOC-000 owns Hub navigation and high-level selection;
- CONV-DOC owns form validation, submission and receiver behavior;
- Grade pages own exact model intent and facts;
- Market pages own country-supplier intent;
- DOC-REACH and DOC-COO own their separate document questions.

No Page ID, URL, primary keyword or page responsibility changed.

## 4. Page role and Buyer Clean review

The approved page performs its task in ten modules:

1. identify the TDS/SDS/COA question and request action;
2. provide a direct three-document answer;
3. let the buyer choose one or more document types;
4. add one optional primary Grade plus supporting context;
5. compare the three document purposes and controlling context;
6. explain the useful request inputs;
7. explain the four-step review process;
8. answer five buyer questions;
9. route to REACH, COO and the Documents Hub;
10. repeat the controlled request action after sufficient explanation.

The approved editorial fixes are present:

- FAQ #2 says `Choose one primary Grade on the request form. If other Grades are relevant, add their names in the additional context field.`;
- supplementary Grade copy says `Additional Grades can be included as supporting context for review.`;
- the Direct Answer uses `jurisdiction and language context`, not the less precise `market or language context`;
- required-field copy reads `Required fields are shown on the Request Documents form.`.

Buyer-visible copy does not expose structured-data-model wording, internal Gate labels, evidence-gap language, public inventory, filenames, downloads, certifications, availability guarantees, currentness guarantees or delivery promises.

Result: PASS.

## 5. Documents Hub and conversion-contract alignment

The current approved Hub FAQ #2 states:

> You can start a document request without a preselected Grade, but a Product Grade is required before submission.

DOC-TDS follows the same state model:

- the buyer may enter CONV-DOC without a preselected Grade;
- DOC-TDS may prefill one primary Grade and one or more document types;
- prefilled buyer context remains editable/removable on the receiving form;
- CONV-DOC owns the final required-field rule before submission;
- additional Grades are supporting free-text context, not structured Grade-document pairs.

There is no contradiction between the current Documents Hub, DOC-TDS and CONV-DOC contracts.

Result: PASS.

## 6. Evidence and credibility review

- Local TDS files remain internal technical evidence and do not become a public inventory or download library.
- No SDS or COA availability is inferred from TDS evidence.
- The page does not publish a Grade-document availability matrix.
- A selected Grade or document type is request context, not availability evidence.
- Submission means review; it is not approval, currentness or delivery confirmation.
- No company, certification, manufacturing, origin, REACH-registration, stock, capacity, lead-time or shipment fact is introduced.
- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` remains attached to DOC-REACH and is not bypassed through this page.
- `SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD=OPEN` remains a site-wide release control; DOC-TDS publishes no page-specific Malaysia-origin claim.

Result: PASS.

## 7. SEO, GEO and Schema review

### 7.1 SEO

- H1: `Titanium Dioxide TDS, SDS & COA: What to Request`.
- SEO Title: `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia`.
- Meta Description: `Understand the difference between titanium dioxide TDS, SDS and COA, add the relevant product or batch context, and request the documents needed for review.`
- Candidate Canonical: `https://tio2malaysia.com/documents/tds-sds-coa/`; not activated by this review.
- Language: EN.
- The primary term appears naturally in H1/Title and the supporting TDS/SDS/COA terms serve one document-decision intent.

### 7.2 GEO

The Direct Answer gives an extractable relationship without guessing:

`TDS → Grade-level technical evaluation; SDS → product + jurisdiction + language safety context; COA → specific lot/batch results`.

The comparison, checklist, process and FAQ deepen that answer while preserving the difference between information, request context and document availability.

### 7.3 Schema

- Approved candidates: `WebPage` and `BreadcrumbList`.
- The five visible FAQ items remain ordinary page content; no `FAQPage` rich-result strategy is approved.
- No Product, Offer, DigitalDocument, certification, downloadable-file, availability, compliance, currentness or delivery relationship is approved.
- Visible action and matching Schema relationship must be added/removed atomically according to route eligibility.
- All machine-readable statements must be sourced from and remain within visible approved copy.

Result: SEO/GEO PASS as specification. Runtime metadata, Canonical, robots and JSON-LD remain later-stage implementation and QA matters.

## 8. Conversion, route and internal-link review

- Primary CTA: `Request TDS, SDS or COA` → `/request-documents/` when eligible.
- Secondary CTA: `View Document Hub` → `/documents/`.
- Related paths: `/documents/reach/`, `/documents/certificate-of-origin/` and `/documents/`, each rendered only when the destination is approved and eligible.
- One or more document types map to `technical_product`, `safety` and `quality_coa`.
- One optional primary Grade is passed as buyer-editable request context.
- Hidden source attribution is `source_page=DOC-TDS` → internal `source_context.page_id`; it is system-controlled, non-editable and never buyer-visible.
- Contact is not an automatic fallback when the Request Documents action is unavailable.

The approved complete-site visual displays the planned links as the final reader experience. That visual does not prove runtime readiness of any target.

Result: PASS as specification.

## 9. Visual, responsive and accessibility review

| Evidence | Size | SHA-256 | Result |
|---|---:|---|---|
| Desktop full page | 1440×6174 | `AAA0A9F232F44DD617DD3718F64FC6651B75F5529628A698502D5779BCCE5BC8` | PASS |
| Tablet full page | 768×8331 | `268106B789C31C9B21221803DC2E4522B12380D624528700599A1DCC64CB11D3` | PASS |
| Mobile full page | 780×21966 (`390 logical @2x`) | `7077CBFC56E703FECD162CFA82799D6F2A893E422575EC11FF0366C599AAC43F` | PASS |
| Mobile Menu open | 780×22748 (`390 logical @2x`) | `CDB9C87AD129CFBCA6337FB5AF36183E77E02B1DD19FF400116005E3E4AA9ABE` | PASS |
| Three-state board | 1440×1017 | `BD8E42E2FDB3E73E41FC09C6932372DADD86CDA0B1C4283DCEBA22BDB261CCB9` | PASS |
| TDS + M-2196 real state | 1440×1150 | `0278C837A7C5738EA9E5C2DAEB91CF79EC0CCB5E780944CDFAB3D7FEED4BC189` | PASS |
| SDS + COA / no Grade real state | 1440×1150 | `E1E70DC2F807A9F70D6539E3357E3C14C32E576DAB4410A348780E09E54A5EC1` | PASS |
| FAQ open state | 1440×703 | `64E8758ED9E593BA17503A86943A2B1D2BFC1D13AE14160B1BF2545ADF8CC867` | PASS |

Fresh validation confirms:

- zero horizontal overflow at 1440, 768 and 390;
- 44px minimum interactive targets at 768 and 390;
- 640px desktop 200%-zoom reflow proxy has zero overflow and 44px targets;
- document-choice, Grade and FAQ controls expose visible keyboard focus;
- long approved headings/helper text fit at 390;
- the intentional body-image-free state is complete rather than a placeholder;
- TDS/Grade, multi-document/no-Grade, FAQ-open and Mobile-Menu states retain their semantic state indicators.

Actual framework DOM, Mobile Menu focus containment/Escape/focus-return, screen-reader output, reduced motion and production-browser 200% zoom remain Gate 8 implementation and Gate 9 read-only QA checks.

Result: PASS as approved visual specification.

## 10. Gate 5 state-scope normalization

The Gate 1 Brief asked future Gate 3–5 evidence to cover a route-unavailable state. The later user-approved Gate 5 package defines the complete target-site visual with the planned CONV-DOC route present and does not include a separate route-unavailable raster.

This is resolved by authority and full-site rules, without changing the approved design:

1. the user's later Gate 5 approval controls the final visual-state set;
2. the complete-site target legitimately renders the Request Documents action when the planned destination is eligible;
3. the earlier route-unavailable requirement remains binding as a conditional Gate 7 rendering/Schema contract;
4. if eligibility is false, the action and its Schema relationship are both suppressed; Contact is not substituted;
5. Gate 9 and Gate 10 must verify the actual runtime state before release.

This is a recorded later-phase control, not an unresolved Gate 6 page defect.

## 11. Mandatory carry-forwards

| ID | Control | Required disposition |
|---|---|---|
| `DOC-TDS-G6-R01` | `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` remains current | Gate 7 must preserve the state; Gate 8/9/10 must not infer live Canonical, indexing or facts from this Gate 6 pass. |
| `DOC-TDS-G6-R02` | Request Documents route/action and visible/Schema parity | Gate 7 must specify eligibility and atomic suppression; Gate 8 implements; Gate 9/10 verify. |
| `DOC-TDS-G6-R03` | DOC-REACH, DOC-COO and Hub related destinations | Render only when approved/eligible in the relevant release; Gate 9 verifies routes, response, Canonical and no cross-scope fallback. |
| `DOC-TDS-G6-R04` | CONV-DOC prefill, editable context, required Grade before submission, hidden source and receiver/privacy behavior | Gate 7 binds the receiving contract; Gate 8 implements; Gate 9/10 verify the complete data flow. |
| `DOC-TDS-G6-R05` | Runtime metadata, Canonical, robots, Schema, server rendering, accessibility and responsive behavior | Gate 8 implements; Gate 9 performs read-only QA; Gate 10 separately controls publication/indexing. |
| `DOC-TDS-G6-R06` | Existing evidence/publication holds remain open | Later stages must carry the Claim Register decisions and suppress any unapproved availability, currentness, download, compliance, origin or delivery relationship. |

These controls do not reopen the approved Gate 5 visual. They prevent a design approval from being misread as production proof.

## 12. Gate 7 readiness

The approved material is sufficient to prepare a Gate 7 development-delivery package containing:

- Page ID, URL and `site_scope=tio2-my` isolation;
- current Buyer Clean copy and ten-module order;
- 1440/768/390 visual assets and important interaction states;
- document-type, Grade and hidden-source field contracts;
- conditional rendering, empty/frozen-field suppression and no-cross-scope fallback;
- SEO, GEO, Canonical, robots and Schema boundaries;
- Global Chrome, CONV-DOC and related-route dependencies;
- deterministic Gate 8 implementation and Gate 9 read-only acceptance criteria.

This readiness finding does not create a Gate 7 package, authorize handoff or permit access to `D:\16Wordpress_nextjs`.

## 13. Fresh validation

`DOC-TDS-G6-VALIDATION-01 = 109 PASS / 0 FAIL`.

Validation authority: `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE6_FRESH_VALIDATION_V0.1.md`, SHA-256 `EE7605C1CA03A8B0B47A5E1B2C2333588E6732D4C552F9C5DD74FB6230EBFBF8`.

## 14. Gate 6 conclusion

`DOC-TDS-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.

The approved Gate 5 baseline may proceed to Gate 7 package preparation only after explicit user authorization. Gate 7–10, development, deployment, publication, DNS and indexing are not authorized by this review.
