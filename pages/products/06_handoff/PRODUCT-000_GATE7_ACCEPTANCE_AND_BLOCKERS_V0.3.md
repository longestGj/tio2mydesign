# PRODUCT-000 Gate 7 Acceptance and Blockers V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / `/products/` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-000-G7-PCR-04` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Purpose | Gate 8 implementation requirements, Gate 9 read-only QA/release blockers and Gate 10 boundary |

## 1. Stage contract

| Stage | Responsibility | Current state |
|---|---|---|
| Gate 7 | Project-control review and external handoff of this specification set | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; `HANDED_OFF` |
| Gate 8 | PRODUCT-000 Hub implementation/integration under user authorization; external target pages/forms excluded | `HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED`; execution state maintained by D16 task |
| Gate 9 | This project's read-only visual/content/SEO/GEO/Schema/a11y/scope acceptance | Not started |
| Gate 10 | Separate user authorization for deployment, production data, DNS, indexing and publication | Not authorized |

Gate 8/9 items do not prevent project-control approval of a complete Gate 7 specification. They do prevent release until closed.

## 2. PRODUCT-000 integration requirements, external dependencies and Gate 9 blockers

| ID | PRODUCT-000 Hub responsibility after external handoff under Gate 8 authorization | External owner dependency | Gate 9 close condition | Status |
|---|---|---|---|---|
| `PRODUCT-G6-B02` | Integrate fixed RFQ links and approved Hub-origin prefill; consume Malaysia readiness; never hide, disable or replace RFQ | `CONV-RFQ` task implements/approves route, form, privacy, validation, error, success and submission workflow | External RFQ works in Malaysia scope; all Global/context links share target; prefill and failure paths pass | `PRODUCT_HUB_GATE_8_INTEGRATION_REQUIREMENT / EXTERNAL_PAGE_DEPENDENCY / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G6-B03` | Bind fourteen Grade identities, consume shared readiness, implement Hub route-card/link states, 2/1/0 Chloride/Sulfate grid and 3/2/1/0 support cards | Fourteen Grade tasks, two Process tasks, APP-000, DOC-000 and MARKET-000 independently implement/approve their routes/pages | Required Grade targets resolve; conditional target states and links pass response/redirect/Canonical/Schema/scope checks | `PRODUCT_HUB_GATE_8_INTEGRATION_REQUIREMENT / EXTERNAL_PAGE_DEPENDENCIES / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G6-TDS-I02` | Visible summary and optional Product Schema `description` use one Hub server field and match character-for-character | None | 14/14 visible/DOM/Schema comparison | `GATE_7_ACCEPTANCE_CONTRACT / GATE_9_QA` |
| `PRODUCT-G7-B05` | Apply PRODUCT-000 robots/sitemap staging and release controls | Global release/index authorization remains separate | Noindex/excluded before Gate 10; exact canonical included only after authorization | `PRODUCT_HUB_GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G7-B06` | Implement Hub queries, route-readiness consumption, media, metadata, Schema, cache and analytics isolation | Shared resolver and external targets must expose Malaysia-owned identities without cross-scope fallback | Read-only cross-scope negative and positive evidence | `PRODUCT_HUB_GATE_8_IMPLEMENTATION_REQUIREMENT / SHARED_EXTERNAL_DEPENDENCY / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G7-B07` | Implement semantic Hub Selector/FAQ/Menu, 44px targets and responsive contracts | Global Chrome remains a shared approved dependency | 1440/1024/768/390, keyboard, ARIA, focus, overflow and initial DOM evidence | `PRODUCT_HUB_GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |

PRODUCT-000 must not create placeholder/substitute Grade, Process, Application, Document, Market or RFQ pages/forms. Conditional cards fail closed; required Grade and fixed-RFQ dependencies block release; cross-scope fallback is prohibited.

The current Meta is already approved as route-safe and unconditional. Process target readiness and Hub atomic rendering remain covered by `PRODUCT-G6-B03`; they do not create a metadata prerequisite.

## 3. Accepted source limitation and special product gates

| ID | Contract | Status |
|---|---|---|
| `PRODUCT-G6-TDS-I01` | Fourteen complete TDS files are not in the project repository. Only the exact user-approved directory strings may be implemented; no numeric, standard, guarantee or extra-page extrapolation. | `ACCEPTED_SOURCE_LIMITATION / NON_BLOCKING_FOR_GATE_7` |
| `PRODUCT-G6-TDS-A01` | Future complete TDS acquisition may strengthen provenance but cannot silently change approved strings. | `NON_BLOCKING_ADVISORY` |
| `M996_VS_M2196_DIFFERENTIATION_FROZEN` | No comparison, superiority, ranking, equivalence, substitute or comparative selection reasoning. | OPEN content boundary; non-blocking when respected |
| M-2377 boundary | Five Applications + Sulfate may render; Specialty Materials and Rubber remain absent. | Approved boundary |
| `NO_PUBLIC_MAPPING` | Silent non-render; never negative suitability. | Approved boundary |

## 4. Gate 6 IMPORTANT disposition in this Gate 7 package

| Historical item | Gate 7 disposition |
|---|---|
| `PRODUCT-G6-I01` obsolete conditional Global Chrome RFQ wording | Resolved in package: fixed Global Chrome RFQ controls; old visibility-off rule explicitly superseded |
| `PRODUCT-G6-I02` stale V0.2.1 relation language | Resolved for handoff consumption: PRODUCT V0.3, Brief/Content addenda V0.3 and this package control |
| `PRODUCT-G6-I03` shared Global Chrome V0.3 governance record | Carry as shared-owner governance note. Buyer-visible `PROCUREMENT`, fixed RFQ and approved Gate 5 shell remain mandatory; no page-local redesign |
| `PRODUCT-G6-I04` runtime behavior unproven by PNG | Carried into `PRODUCT-G7-B07` and the responsive/a11y acceptance document |
| `PRODUCT-G6-I05` historical wording in approved visual spec | Resolved by Manifest precedence; historical file remains unmodified |

## 5. Content and component acceptance

Gate 9 must record PASS for all:

- Page ID, URL, H1, module order and Products current state.
- Exact Header/Footer/Logo/RFQ contract and `PROCUREMENT`.
- Six Selector sets 8/8/7/4/2/1 with neutral treatment.
- Process data 8/5/1; Chloride/Sulfate route-card grid 2/1/0; parent heading/intro and CR-901 row retained in all three states.
- Fourteen unique directory rows in 6/5/2/1 groups.
- Fourteen exact summary strings and no buyer-visible provenance.
- Five exact Evaluation steps.
- Support paths 3/2/1/0 without orphan shells.
- Five exact FAQ Q/A and initial DOM.
- Final RFQ exact copy and no promise expansion.
- Zero Buy/Buy Now/Purchase/Add to Cart/Checkout actions.

## 6. SEO/GEO/Schema acceptance

- Exact Title, Meta, Canonical, language and one H1.
- Correct pre-release robots and sitemap exclusion.
- CollectionPage/Breadcrumb/ItemList identities and URLs.
- ItemList exactly 14, ordered and unique.
- Optional Product description exact visible parity.
- FAQPage, if emitted, exact Q/A parity.
- No hidden relations, Rubber, M-2377 Specialty or M-996/M-2196 comparison.
- No Offer, price, stock, origin, certificate, rating or unapproved property.
- No selector-generated Canonical, sitemap URL or indexable facet.

## 7. Hub integration and external-dependency acceptance

- PRODUCT-000 implements Hub integration only; evidence does not claim implementation authority for target pages/forms.
- Required Home, fourteen Grade and fixed-RFQ external destinations resolve in Malaysia scope before release.
- Chloride/Sulfate and Support cards render atomically from shared Malaysia target readiness.
- Process 0 state omits only the route-card grid; parent heading/intro and CR-901 classification remain. CR-901 action is omitted if its external Grade target is not ready.
- Redirects remain intentional, limited and canonical-correct.
- Header, Mobile Header, Mobile Menu, Footer and contextual RFQ use the same approved Malaysia route.
- External `CONV-RFQ` evidence confirms required fields, labelled errors, safe input preservation, success without promise, privacy text and scope-tampering rejection.
- PRODUCT-000 prefill integration includes only explicit Application/Grade selection and does not implement form processing.
- No placeholder target, substitute page, local child-page implementation or cross-scope fallback exists.

## 8. Advisory items

| ID | Advisory | Status |
|---|---|---|
| `PRODUCT-G6-A01` | No approved social preview image; omit image fields. | OPEN_NON_BLOCKING |
| `PRODUCT-G6-A02` | No approved current Tablet visual artifact; runtime 1024/768 evidence required in Gate 9. | OPEN_NON_BLOCKING_FOR_GATE_7 |
| `PRODUCT-G6-A03` | FAQPage is semantic consistency, not a rich-result promise. | OPEN_NON_BLOCKING |

## 9. Gate 7 project-control acceptance

Project control should verify before approving handoff:

- current complete Page Brief V0.4, relationship-only addendum V0.3, seven Gate 7 V0.3 package files and V0.3 project-control submission exist and cross-reference the current baseline;
- all exact summary, relationship and route tables match authorities;
- production SVG keys/hashes are referenced, not copied;
- no implementation technology is mandated unnecessarily;
- PRODUCT-000 Hub Gate 8, external target-owner tasks, Gate 9 and Gate 10 ownership is unambiguous;
- package status remains not approved until the decision is recorded;
- no files were written to the external development project.

Suggested disposition: `PROJECT_CONTROL_GATE_7_PACKAGE_PASS_FOR_EXTERNAL_HANDOFF_WITH_GATE_8_9_ACCEPTANCE_ITEMS`.

This suggested disposition is not self-approval and does not itself perform a handoff.
