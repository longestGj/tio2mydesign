# PRODUCT-000 Gate 7 Acceptance and Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / `/products/` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-000-G7-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Purpose | Gate 8 implementation requirements, Gate 9 read-only QA/release blockers and Gate 10 boundary |

## 1. Stage contract

| Stage | Responsibility | Current state |
|---|---|---|
| Gate 7 | Project-control review and, only after PASS, external handoff of this specification set | Package prepared; not approved or handed off |
| Gate 8 | External WordPress/Next.js implementation and technical tests | Not started |
| Gate 9 | This project's read-only visual/content/SEO/GEO/Schema/a11y/scope acceptance | Not started |
| Gate 10 | Separate user authorization for deployment, production data, DNS, indexing and publication | Not authorized |

Gate 8/9 items do not prevent project-control approval of a complete Gate 7 specification. They do prevent release until closed.

## 2. Gate 8 implementation requirements and Gate 9 blockers

| ID | Requirement | Gate 8 evidence | Gate 9 close condition | Status |
|---|---|---|---|---|
| `PRODUCT-G6-B02` | Malaysia RFQ route/form/privacy/validation/error/success/prefill | Implemented route and end-to-end test evidence | Read-only successful and failure-path verification; all Global/context links same destination | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G6-B03` | Fourteen Grade routes and conditional Process/Applications/Documents/Markets routes | Implement route resolver, registered identities, 2/1/0 and 3/2/1/0 behavior | Response/redirect/Canonical/Schema/link/scope verification | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G6-TDS-I02` | Visible summary and optional Product Schema `description` use one server field and match character-for-character | Implement one summary field and server-rendered parity | 14/14 visible/DOM/Schema comparison | `GATE_7_ACCEPTANCE_CONTRACT / GATE_9_QA` |
| `PRODUCT-G7-B04` | Approved Meta promises production-process navigation | Implement at least one valid visible Process route before release, or return for a separately approved route-safe Meta decision | `PROCESS_AVAILABLE=true` and visible module, or approved replacement metadata | `GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G7-B05` | Target robots/sitemap cannot activate early | Environment/release controls implemented | Noindex/excluded before Gate 10; exact canonical included only after authorization | `GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G7-B06` | `site_scope=tio2-my` isolation across all listed domains | Scoped queries/routes/menu/media/forms/cache/analytics implementation tests | Read-only cross-scope negative and positive evidence | `GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `PRODUCT-G7-B07` | Runtime accessibility/responsive behavior not proven by PNG | Implement semantic Selector/FAQ/Menu, 44px targets and responsive contracts | 1440/1024/768/390, keyboard, ARIA, focus, overflow and initial DOM evidence | `GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |

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
- Process data 8/5/1 and route cards 2/1/0.
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

## 7. Route and form acceptance

- Required Home, fourteen Grade and RFQ destinations resolve in Malaysia scope.
- Process and Support cards render atomically from Malaysia route state.
- Redirects remain intentional, limited and canonical-correct.
- Header, Mobile Header, Mobile Menu, Footer and contextual RFQ use the same approved Malaysia route.
- Form validates required fields, labels errors, preserves safe input, shows success without promise, includes privacy text and rejects scope tampering.
- Selected Application/Grade prefill includes only explicit user selection.

## 8. Advisory items

| ID | Advisory | Status |
|---|---|---|
| `PRODUCT-G6-A01` | No approved social preview image; omit image fields. | OPEN_NON_BLOCKING |
| `PRODUCT-G6-A02` | No approved current Tablet visual artifact; runtime 1024/768 evidence required in Gate 9. | OPEN_NON_BLOCKING_FOR_GATE_7 |
| `PRODUCT-G6-A03` | FAQPage is semantic consistency, not a rich-result promise. | OPEN_NON_BLOCKING |

## 9. Gate 7 project-control acceptance

Project control should verify before approving handoff:

- all eight Gate 7 files exist and cross-reference the current baseline;
- all exact summary, relationship and route tables match authorities;
- production SVG keys/hashes are referenced, not copied;
- no implementation technology is mandated unnecessarily;
- Gate 8/9/10 ownership is unambiguous;
- package status remains not approved until the decision is recorded;
- no files were written to the external development project.

Suggested disposition: `PROJECT_CONTROL_GATE_7_PACKAGE_PASS_FOR_EXTERNAL_HANDOFF_WITH_GATE_8_9_ACCEPTANCE_ITEMS`.

This suggested disposition is not self-approval and does not itself perform a handoff.

