# DOC-TDS Current Gate 7 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Page type | Technical-document decision page |
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Manifest version / date | V0.1 / 2026-09-05 |
| Manifest role | Sole current Gate 7 handoff-readiness and lifecycle pointer |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED / PENDING_GATE8_AUTHORIZATION` |
| Gate 1–5 | `USER_APPROVED / CLOSED` |
| Gate 6 | `DOC-TDS-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `DOC-TDS-G7-HANDOFF-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Lifecycle | `APPROVED_FOR_HANDOFF` |
| Gate 8–10 | `NOT_AUTHORIZED` |

## 1. Current authority and consumption order

| Order | Role | File | SHA-256 | State |
|---:|---|---|---|---|
| 1 | Gate 7 project-control closure | `DOC-TDS_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md` | `B2621F9E30651986E06FFBC744D1098DC3CA25A2994A59A78F27188B569CFF88` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| 2 | Gate 7 project-control submission | `DOC-TDS_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | `6AEDC218E74406475AF335DC86B7BD0AB78301060C10B59DE5AC76B997FEA900` | Accepted review input |
| 3 | Gate 7 validation | `DOC-TDS_GATE7_VALIDATION_V0.1.md` | `86CAFF8DC1E44C0401D9762EE8C2DEEB254E2B947EB8CCCF330F6C074DE8B8AA` | `103 PASS / 0 FAIL` |
| 4 | Development handoff package | `DOC-TDS_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md` | `D6037D987F225C55801B695340BA3C4CF612E16D9AD3A108FE6FB85084D0B196` | Approved package root |
| 5 | Exact source payload | `DOC-TDS_GATE7_SOURCE_PAYLOAD_V0.1.json` | `85629FD74FCCE082FDCE7374DDC7A9E6570DC93DB46B1E0871BC194B20E387EA` | Exact page payload |
| 6 | Content/component mapping | `DOC-TDS_GATE7_CONTENT_COMPONENT_MAPPING_V0.1.md` | `69A61289931EA8DE8E1F0A0E4A719E5148BC9C4CEF89847E5FD5CF1FE843A818` | Approved contract |
| 7 | Route/prefill/state contract | `DOC-TDS_GATE7_ROUTE_PREFILL_STATE_CONTRACT_V0.1.md` | `B256156E833C1658CA1333243E82CB31A2D8713E857D28EEBCE767F09779513E` | Approved contract |
| 8 | SEO/GEO/Schema/social contract | `DOC-TDS_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md` | `C4C4C140D55DB778336FFBC450040DD554947650B941CC7AA53297D460F7CE7F` | Approved contract |
| 9 | Responsive/accessibility/interaction | `DOC-TDS_GATE7_RESPONSIVE_ACCESSIBILITY_INTERACTION_ACCEPTANCE_V0.1.md` | `98A27999F7A7FA72ECDEE47BF6C3647C2BEFA04303A784C48FEA51E6C79073F9` | Approved contract |
| 10 | Site-scope/shared dependencies | `DOC-TDS_GATE7_SITE_SCOPE_SHARED_DEPENDENCY_CONTRACT_V0.1.md` | `493E3E76D9235D48FF633DFA2FE832B97A4EDC8497FBFC1D4DD228C1A7BAE005` | Approved contract |
| 11 | Gate 8/Gate 9 acceptance | `DOC-TDS_GATE7_GATE8_IMPLEMENTATION_GATE9_ACCEPTANCE_V0.1.md` | `9E86252BD61E4A360736C2FB150291C8D31C9F926AEA906C5AACE2C4C9286D97` | Approved future-stage contract |
| 12 | Gate 6 authority | `../05_review/DOC-TDS_CURRENT_GATE6_BASELINE_MANIFEST_V0.1.md` | `C3FE6280B01D9A7AF845A88EB439CEF1B19E775050BA5FBD4B1FF6C413182713` | Approved upstream |

Relative paths in rows 1–11 resolve from `pages/documents/tds-sds-coa/06_handoff/`.

## 2. Implementation lock

- Exact scope: `site_scope=tio2-my` with no missing/wrong-scope fallback.
- Exact page identity: `DOC-TDS` / `/documents/tds-sds-coa/` / EN / P1.
- Exact content: ten ordered modules from the source payload.
- Document choices: TDS=`technical_product`, SDS=`safety`, COA=`quality_coa`; one or more.
- Grade: zero or one DOC-TDS prefill; exact 14-item allowlist; one Grade required by CONV-DOC before form submission.
- Additional Grades: buyer-entered supporting text only; no structured multi-Grade transport.
- Source: internal `source_context.page_id=DOC-TDS`; hidden/system/non-editable and not established by public query tampering.
- Actions: Hero, Grade-panel and Final primary actions share one state.
- Failure: action/route relationships suppressed atomically; no Contact, email, phone, RFQ or cross-scope substitute.

## 3. Approved Gate 5 visual integrity

| Surface | SHA-256 |
|---|---|
| Desktop 1440 | `AAA0A9F232F44DD617DD3718F64FC6651B75F5529628A698502D5779BCCE5BC8` |
| Tablet 768 | `268106B789C31C9B21221803DC2E4522B12380D624528700599A1DCC64CB11D3` |
| Mobile 390 logical @2x | `7077CBFC56E703FECD162CFA82799D6F2A893E422575EC11FF0366C599AAC43F` |
| Mobile Menu | `CDB9C87AD129CFBCA6337FB5AF36183E77E02B1DD19FF400116005E3E4AA9ABE` |
| Three-state board | `BD8E42E2FDB3E73E41FC09C6932372DADD86CDA0B1C4283DCEBA22BDB261CCB9` |
| TDS + M-2196 | `0278C837A7C5738EA9E5C2DAEB91CF79EC0CCB5E780944CDFAB3D7FEED4BC189` |
| SDS + COA / no Grade | `E1E70DC2F807A9F70D6539E3357E3C14C32E576DAB4410A348780E09E54A5EC1` |
| FAQ open | `64E8758ED9E593BA17503A86943A2B1D2BFC1D13AE14160B1BF2545ADF8CC867` |

No Gate 5 visual or approved Buyer Clean source was changed in Gate 7.

## 4. Search and evidence lock

- Title: `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia`.
- Meta: `Understand the difference between titanium dioxide TDS, SDS and COA, add the relevant product or batch context, and request the documents needed for review.`
- Canonical candidate: `https://tio2malaysia.com/documents/tds-sds-coa/`; Gate 10 controls activation/indexing.
- Schema: one `WebPage` plus one `BreadcrumbList`; no FAQPage/Product/Offer/DigitalDocument/action/file availability nodes.
- No public file inventory, filename, preview, download, currentness, availability, compliance, origin or delivery relationship.

## 5. Validation and review disposition

- Core Gate 7 validation: `95 PASS / 0 FAIL`.
- Final package/governance validation: `103 PASS / 0 FAIL`.
- Retained Gate 6 audit: `109 PASS / 0 FAIL`.
- P0: 0.
- P1: 0.
- Required P2: 0.
- Gate 7 package is ready for separate Gate 8 authorization.

Validator: `99_workspace/DOC-TDS/gate7/validate-doc-tds-gate7.mjs`, SHA-256 `02C74DDD731BB27F110B8A53069C828C95840B892C6DD032993835E0917016D5`.

## 6. Open later-stage controls

| Control | State |
|---|---|
| DOC-TDS `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` | `OPEN / GATE8_9_10` |
| CONV-DOC route/prefill/runtime integration | `OPEN / GATE8_IMPLEMENTATION + GATE9_QA` |
| DOC-REACH, DOC-COO and Hub route eligibility | `OPEN / GATE8_9_RELEASE_CONTROL` |
| CONV-DOC credentials, approved recipient, network and mailbox receipt | `OPEN / RELEASE_BLOCKER` |
| Production WordPress and Privacy/data-flow parity | `OPEN / RELEASE_BLOCKER` |
| Runtime metadata/Schema/SSR/accessibility/responsive behavior | `OPEN / GATE8_IMPLEMENTATION + GATE9_QA` |
| ECHA TiO2 and site-wide Malaysia-origin holds | `OPEN / NO_UNAPPROVED_RELEASE` |
| Production Canonical/robots/indexing/release | `NOT_AUTHORIZED / GATE10_ONLY` |

## 7. Supersession and stop

This Manifest supersedes `../05_review/DOC-TDS_CURRENT_GATE6_BASELINE_MANIFEST_V0.1.md` only as the current page-level lifecycle pointer. Gate 6 remains the approved review authority.

Gate 8–10 remain unauthorized. The package has not been sent to the external development task. `D:\16Wordpress_nextjs` was not accessed or modified.
