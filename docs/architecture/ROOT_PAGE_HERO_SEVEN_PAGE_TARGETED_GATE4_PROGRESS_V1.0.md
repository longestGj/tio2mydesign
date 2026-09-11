# Root Page Hero Seven-Page Targeted Gate 4 Progress V1.0

## Control

| Field | Value |
|---|---|
| Parent control | `ROOT-HERO-G4-7PAGE-CTRL-01` |
| Workset | `ROOT-HERO-G4-7P-V1` |
| Date | `2026-09-11` |
| Current state | `IN_PROGRESS / RES_BINDING_PASS / ABOUT_NEXT` |
| Gate 8 / D16 | `NOT_AUTHORIZED_BY_THIS_RECORD / NOT_TOUCHED` |

This progress record does not replace the seven-page control. It records actual execution after the user chose to prove the shared direction on Home first and then instructed the project to continue by the approved process.

## Home master proof

- Accepted page-local proof bundle: `HOME-ROOT-HERO-G4-CANDIDATE-04`.
- Candidate entry: `pages/home/04_planning/HOME-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.3.md`, SHA-256 `D72A04C6EA8B1F8904DF0473FA1A200089EA1469D6178E07ED577B69311C7933`.
- Freeze record: `pages/home/04_planning/visual-designs/home-root-page-hero-v1.3/freeze-record.json`, SHA-256 `04B5223DFA1598D88D396C0297DD2B8F26036C2DD1FE145DDB4D7395EA370B5A`.
- Independent review chain:
  1. initial V1.0, SHA-256 `E7207224942453C1E244C646390F8922F9C36CD0F16426C72D7B7D37BF696E45`;
  2. targeted recheck V1.1, SHA-256 `58BC96AA6E410F03816A7BC279E962C58A3B8974EA611DEF672674395F7A2B58`;
  3. targeted recheck V1.2, SHA-256 `43CA9F358FC6C6270EFE7F1C2F41E19118CD8B05A80D5E836171E3704C800D4A`.
- Final independent result: `PROJECT_CONTROL_REVIEW_PASS`; `HOME-ROOT-HERO-G5-F01=CLOSED`; residual required Findings `0`.

The Home proof is accepted for inheritance by the remaining bindings. It does not yet close the seven-page visual workset because the parent control requires the complete cross-page bundle and final horizontal review before page Manifest promotion and Gate 6.

## Next execution order

1. Wave 1 is complete and frozen with Home V1.3 and APP V1.1.
2. Continue `PRODUCT-000`, `MARKET-000`, `DOC-000`, `RES-000` and `ABOUT-001` in the parent control order.
3. Perform the final cross-page Gate 5 consistency review, then project-control close and Gate 6 intake.

The Home and APP independent evidence is inherited in the final review; it is not repeated unless the shared master or the corresponding binding changes.

## APP-000 Wave 1 binding

- Final page-local candidate: `APP-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.1.md`.
- Binding record: `APP-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.1.md`.
- Frozen visual evidence: `pages/applications/04_planning/visual-designs/app-root-page-hero-v1.1/` at 1440px, 768px and 390px.
- Author verification: `PASS`, exit code `0`.
- Independent targeted recheck: `APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_TARGETED_RECHECK_V1.1.md`, SHA-256 `4F803F70C43C6F4EAF39FA13733ED5180039C4BF4AE6A716583BA0764DF4588D`.
- Independent result: `PROJECT_CONTROL_REVIEW_PASS`; required Findings `0`.

The initial V1.0 candidate and its independent return are retained as history. V1.1 closes the missing Desktop Home navigation item, prohibited unconditional application subroutes, six imprecise card anchors and the H1 weight mismatch. This remains a page-local proof and does not update the current APP Manifest or close the seven-page Gate 4/Gate 5 workset.

## Wave 1 checkpoint

Home V1.3 and APP V1.1 jointly prove the shared open-white family at 1440px, 768px and 390px. The shared grid, typography, action rhythm, information-card placement, Hero-to-body transition, zero visible `CURRENT`, zero Hero left decorative rule and minimum 44px target rules are frozen for inheritance. Any later change to the shared parent requires regeneration and recheck of both Wave 1 bindings.

Next: begin the `PRODUCT-000` Wave 2 binding as a preservation/reference proof. Do not alter its approved open-white content or treat this checkpoint as Gate 6 or Gate 8 authorization.

## PRODUCT-000 Wave 2 reference binding

- Page-local reference candidate: `PRODUCT-000_ROOT_PAGE_HERO_GATE4_REFERENCE_CANDIDATE_V1.0.md`.
- Reference binding: `PRODUCT-000_ROOT_PAGE_HERO_GATE4_REFERENCE_BINDING_V1.0.md`.
- Frozen page-context evidence: `pages/products/04_planning/visual-designs/product-root-page-hero-v1.0/` at 1440px, 768px and 390px.
- Author verification: `PASS`, exit code `0`.
- Independent review: `pages/products/05_review/PRODUCT-000_ROOT_PAGE_HERO_GATE4_REFERENCE_INDEPENDENT_REVIEW_V1.0.md`, SHA-256 `5393DE6E518918BD70D51401D67F6BA5C2DB06D046A64BB462673237DF28CB97`.
- Independent result: `PROJECT_CONTROL_REVIEW_PASS`; required Findings `0`.

This reference proof confirms that the approved PRODUCT-000 open-white presentation can consume the shared Hero contract without redesign. It does not replace PRODUCT-000's current Manifest or approved full-page assets. Next: `MARKET-000` Wave 2 binding.

## MARKET-000 Wave 2 binding

- Page-local candidate: `MARKET-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.0.md`.
- Binding record: `MARKET-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.0.md`.
- Frozen page-context evidence: `pages/markets/04_planning/visual-designs/market-root-page-hero-v1.0/` at 1440px, 768px and 390px.
- Author and independent validations: `PASS`, both exit code `0`.
- Independent review: `pages/markets/05_review/MARKET-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_V1.0.md`, SHA-256 `2D28CD0917695AEF3EDBE34083D8403B42CE12DC38A7C2103D36713A788FA6E2`.
- Independent result: `PROJECT_CONTROL_REVIEW_PASS`; required Findings `0`.

The binding retains destination-first copy, the local selector action, EU/country hierarchy, PT-BR hold and non-live route governance. The historical buyer-visible `CURRENT` label is absent under Global Chrome V0.5. This does not replace the current MARKET Manifest or authorize route implementation. Next: `DOC-000` Wave 2 binding.

## DOC-000 Wave 2 binding

- Page-local candidate: `DOC-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.0.md`.
- Binding record: `DOC-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.0.md`.
- Frozen page-context evidence: `pages/documents/04_planning/visual-designs/doc-root-page-hero-v1.0/` at 1440px, 768px and 390px.
- Author verification: `PASS`, exit code `0`.
- Independent review: `pages/documents/05_review/DOC-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_REVIEW_V1.0.md`, SHA-256 `4F91C8E9FC947F8FA396CB9469B03D3E4E5A38448FDB66DE8BC9FC81E0421448`.
- Independent result: `PROJECT_CONTROL_REVIEW_PASS`; required Findings `0`.

The Hero action remains a direct `/request-documents/` path. The separate selector below the Hero remains fully visible with one non-default 14-grade field and an explicit Continue action. Its existing teal section rule is preserved as a selector-owned element and is not a Hero decoration. The current FAQ #2 authority overlay is recorded without modifying page copy in this workset.

Wave 2 is complete. Next: `RES-000` Wave 3 `hub-dark` binding.

## RES-000 Wave 3 binding

- Final page-local candidate: `RES-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.2.md`.
- Binding record: `RES-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.2.md`.
- Frozen page-context evidence: `pages/resources/04_planning/visual-designs/res-root-page-hero-v1.2/` at 1440px, 768px and 390px, with 901/1023px media-boundary checks.
- Author and final independent validations: `PASS`, both exit code `0`.
- Final independent review: `pages/resources/05_review/RES-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_TARGETED_RECHECK_V1.2.md`, SHA-256 `2DB3871E896B7C3689653B3E6544FEC532566038E9B5105B04DF21A2CD686FA2`.
- Independent result: `PROJECT_CONTROL_REVIEW_PASS`; required Findings `0`.

V1.0 and V1.1 remain as the original candidate and repair history. The final binding closes Mobile Menu, button token, accessible-decoration and media-breakpoint findings. By the user's 2026-09-11 decision, only the RES-000 390px H1 may wrap naturally to four lines at 36px/700 with normal spacing; this does not change the shared three-line default for other pages or breakpoints.

The candidate retains the current H0 inventory state and transitions directly from the contained dark Hero to Three Decision Paths. Next: `ABOUT-001` Wave 3 `corporate-light` binding.
