# DOC-REACH Current Gate 7 Baseline Manifest V0.13

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Page type | Document-compliance decision page |
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Manifest version / date | V0.13 / 2026-09-05 |
| Manifest role | Sole current Gate 7 handoff-readiness and lifecycle pointer |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED / PENDING_GATE8_AUTHORIZATION` |
| Gate 1–5 | `USER_APPROVED / CLOSED` |
| Gate 6 | `DOC-REACH-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `DOC-REACH-G7-HANDOFF-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Lifecycle | `APPROVED_FOR_HANDOFF` |
| Gate 8–10 | `NOT_AUTHORIZED` |

## 1. Current authority and consumption order

| Order | Role | File | SHA-256 | State |
|---:|---|---|---|---|
| 1 | Gate 7 project-control closure | `DOC-REACH_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md` | `8377AA586422AD931697B5E27689EC0786C16D72557FF2262D57A28B8B743D2D` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| 2 | Gate 7 project-control submission | `DOC-REACH_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | `45EE28D77841CEDDE725DF7E72E1515330285C42E83796B4CDA28AA93D73CE5E` | Accepted review input |
| 3 | Gate 7 validation | `DOC-REACH_GATE7_VALIDATION_V0.1.md` | `27A9FA49E160FECBA15276BD85D1FC50604FDA2C844A39581F5CB308CA52A5CA` | `150 PASS / 0 FAIL` |
| 4 | Development handoff package | `DOC-REACH_GATE7_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md` | `7A218768F40135BD73964EDD109714898D54D5C2EE15267A6B419E30359733F0` | Approved package root |
| 5 | Exact source payload | `DOC-REACH_GATE7_SOURCE_PAYLOAD_V0.1.json` | `F9D2A1F14BE61EEEB585454FFC139D9AC5051B1515950F39748E8F0E1CF0B339` | Exact page payload |
| 6 | Content/component mapping | `DOC-REACH_GATE7_CONTENT_COMPONENT_MAPPING_V0.1.md` | `51A4E8AAA813C08EE305F6E6BACE27121D90C10E58A13C0A01036BE092CE775F` | Approved contract |
| 7 | Route/prefill/state contract | `DOC-REACH_GATE7_ROUTE_PREFILL_STATE_CONTRACT_V0.1.md` | `E17BFFD0CA7F177C849D924B04C80B4B43F3A3CE277D956C0DBCFC0D8832912A` | Approved contract |
| 8 | SEO/GEO/Schema/social contract | `DOC-REACH_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md` | `126F47A854A4370BF980A5BA4DAE3DC31E28851DEC11BDAAC8879FE034288C82` | Approved contract |
| 9 | Responsive/accessibility/interaction | `DOC-REACH_GATE7_RESPONSIVE_ACCESSIBILITY_INTERACTION_ACCEPTANCE_V0.1.md` | `6EDD5863632C5062E46A4D9F935C673A5DC705E3EB810A745FB3B1E99BCBE908` | Approved contract |
| 10 | Site-scope/shared dependencies | `DOC-REACH_GATE7_SITE_SCOPE_SHARED_DEPENDENCY_CONTRACT_V0.1.md` | `59B266286C405C141D735CF4073B599A95841B03365335C95B0A5EF3C9EE88D5` | Approved contract |
| 11 | Gate 8/Gate 9 acceptance | `DOC-REACH_GATE7_GATE8_IMPLEMENTATION_GATE9_ACCEPTANCE_V0.1.md` | `EC012721FEB7DA093CD47F075CFD652F596DC4F46AF409E87415247C600B2695` | Approved future-stage contract |
| 12 | Gate 6 user decision / Gate 7 authority | `../05_review/DOC-REACH_GATE6_USER_DECISION_AND_GATE7_AUTHORIZATION_V0.1.md` | `5DD2857AB650F1767191286D3261B9802936EB7C55D3A82C4B596AA107D67A4C` | User decision recorded |
| 13 | Gate 6 authority | `../05_review/DOC-REACH_CURRENT_GATE6_BASELINE_MANIFEST_V0.12.md` | `9CDED213A4B259ED9E52824811779837C737640CA755AA3362399C1F7197557A` | Approved upstream |
| 14 | Buyer Clean authority | `../04_planning/DOC-REACH_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` | `CD18BA997EFE53BB5589F76D36453E62DFF6BE61A255D3224AB1D264624E8DCE` | Approved source copy |
| 15 | Evidence-gap decision register | `../../../../docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md` | `3BA9F823645883E32BE5F903D94ACD5B002FBF72518B7AC9B94E067609E353CA` | EG-006 current-baseline decision closed |

Relative paths in rows 1–11 resolve from `pages/documents/reach/06_handoff/`.

## 2. Implementation lock

- Exact scope: `site_scope=tio2-my`; no missing/wrong-scope or cross-scope fallback.
- Exact page identity: `DOC-REACH` / `/documents/reach/` / EN / P1.
- Exact content: eleven ordered modules from the source payload.
- Regulatory subject: EU REACH only, with explicit Great Britain/Northern Ireland boundary language.
- Answer: current approved general answer only; no named-company/legal-entity/supply-arrangement coverage inference.
- Request transport: `document_types[]=other` plus buyer-visible/editable `additional_requirements=REACH documentation`.
- Public semantics: `REACH Documentation`; raw `other` is not the page's buyer-facing label.
- Source: internal `source_context.page_id=DOC-REACH`; hidden/system/non-editable and not established by public query tampering.
- Actions: all page-owned Request Documents actions share one receiver-eligibility state.
- Failure: request/action/Schema relationships are suppressed atomically; no Contact, email, phone or cross-scope substitute.

## 3. Approved Gate 5 visual integrity

| Surface | SHA-256 |
|---|---|
| Desktop 1440 | `64C913C196593B8B3062717CB19C451B1A9909B34885DF1F08625CC607A7800E` |
| Tablet 768 | `B639EE293D58ED5EC20EF8CFF190D30D145349B93D1D93C1CFDC5923C9BFB421` |
| Mobile 390 logical @2x | `AB9FC630610356C61D4A76B042322B1A060A72B1D209C1E833805F9A65196086` |
| Mobile Menu 390 logical @2x | `0E04158847ED794A84099F0171C84DB99D75C1F5EA308E1A1DBA7F6AD4BA29AE` |
| Key states | `CF43400D08F2B45DD6F4F157302B8B629075908DFB7100869D55E2AAF1689F7E` |
| Request route unavailable | `4A00876D9242CC3B2E3A68014A4550AC5823490E08CFB7E9E46549398F5D01DE` |
| FAQ open/focus | `6362A777E7674D8D31CC5FAC21262F09BF0BCBA1F286414818B376EA96CE0B2E` |
| Gate 5 HTML | `80E1BAE01AEFC935CE473C70B231EC72674859F18A390ED63B1A9EFE76890437` |

No Gate 5 visual or approved Buyer Clean source changed in Gate 7.

## 4. Search, GEO and evidence lock

- Title: `Titanium Dioxide REACH Registration: What to Verify | TiO2 Malaysia`.
- Meta: `Understand which EU REACH information titanium dioxide buyers should verify across substance identity, legal-entity scope, supply-chain role, source and review date.`
- Canonical candidate: `https://tio2malaysia.com/documents/reach/`; Gate 10 controls activation/indexing.
- Schema: one `WebPage` plus one `BreadcrumbList`; no FAQPage, QAPage, Product, Offer, DigitalDocument or HowTo.
- `reach compliant titanium dioxide` remains query-language-only and may not render.
- Current general answer is the only approved Direct Answer for this baseline.
- No named-company registration coverage, named Only Representative, registration number, Grade coverage, tonnage, current status, availability or compliance guarantee.
- Four official-source rows preserve URL, source-updated-date availability and site-reviewed date.

## 5. Validation and review disposition

- Core Gate 7 validation: `137 PASS / 0 FAIL`.
- Final package/governance validation: `150 PASS / 0 FAIL`.
- Retained Gate 6 audit: `135 PASS / 0 FAIL`.
- P0: 0.
- P1: 0.
- Required P2: 0.
- Gate 7 package is ready for separate Gate 8 authorization.

Validator: `99_workspace/DOC-REACH/gate7/validate-doc-reach-gate7.mjs`, SHA-256 `462E82B7D2734279EC9D623A1645C83C8A12D59A513B43C98786BA1B3E9D7356`.

## 6. Open later-stage controls

| Control | State |
|---|---|
| DOC-REACH `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` | `OPEN / GATE8_9_10` |
| CONV-DOC route/prefill/runtime integration and semantic alias | `OPEN / GATE8_IMPLEMENTATION + GATE9_QA` |
| DOC-000 and MARKET-EU-001 route eligibility | `OPEN / GATE8_9_RELEASE_CONTROL` |
| Official-source freshness at Gate 9 and pre-publication | `OPEN / REQUIRED_RECHECK` |
| Runtime metadata/Schema/SSR/accessibility/responsive behavior | `OPEN / GATE8_IMPLEMENTATION + GATE9_QA` |
| Stronger company/entity/supply-arrangement proposition | `OUTSIDE_CURRENT_BASELINE / NEW_SCOPED_DECISION_REQUIRED` |
| Production Privacy/data-flow and receiver readiness | `OPEN / RELEASE_CONTROL` |
| Production Canonical/robots/indexing/release | `NOT_AUTHORIZED / GATE10_ONLY` |

## 7. Supersession and stop

This Manifest supersedes `../05_review/DOC-REACH_CURRENT_GATE6_BASELINE_MANIFEST_V0.12.md` only as the current page-level lifecycle pointer. Gate 6 remains the approved review authority.

Gate 8–10 remain unauthorized. The package has not been sent to the external development task. `D:\16Wordpress_nextjs` was not accessed or modified.
