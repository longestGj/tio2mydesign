# APP-000 Application Hub Simplification Delta V0.1

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Date | 2026-08-31 |
| Decision source | User's explicit V0.10 Applications Hub review direction |
| Review ID | `APP-000-G5-V10-HUB-SIMPLIFICATION-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Relationship authority | PRODUCT V0.3 approved matrix and audits |
| Does not approve | Gate 5, Gate 6/7, Application child pages, development, handoff or publication |

This delta controls the current V0.10 review candidate wherever the historical Gate 2 body or V0.9 directory overlay conflicts with it. It does not rewrite historical decisions.

## 2. Page responsibility

APP-000 is an Application Navigation Hub. Its buyer path is:

`Application → Grades to Review → Application or Grade page → Technical review → Products / Documents / Markets → Inquiry`

The page does not own complete-portfolio browsing or comparison. PRODUCT-000 remains the owner of generic product and complete-grade-directory intent.

## 3. Controlled module changes

### 3.1 Removed

The complete V0.9 `Browse All 14 Titanium Dioxide Grades` module is removed, including all four navigation groups, all directory rows and all `View Grade →` actions. It is not renamed or replaced by another portfolio directory.

### 3.2 Rewritten Hero

- H1 remains `Explore Titanium Dioxide by Application`.
- Body: `This hub organizes titanium dioxide grades by application across coatings, plastics, masterbatch, printing inks, paper and specialty materials. Use each collection as a starting point for technical evaluation.`
- Qualification: `Grades to Review are evaluation starting points, not rankings or guarantees of suitability.`
- The right panel becomes `Choose an Application` with six same-page anchors and no counts.

Anchor targets:

| Label | Anchor ID |
|---|---|
| Coatings | `#application-coatings` |
| Plastics | `#application-plastics` |
| Masterbatch | `#application-masterbatch` |
| Printing Inks | `#application-printing-inks` |
| Paper | `#application-paper` |
| Specialty Materials | `#application-specialty-materials` |

### 3.3 Application cards

The single shared qualification appears above the six cards; repeated card-level disclaimers are removed.

| Application | Public scope description | Grades to Review |
|---|---|---|
| Coatings | `For paint and coating formulations.` | M-350, M-510, M-896, M-996, M-2196, M-895, M-52, M-2377 |
| Plastics | `For plastic compounds and finished plastic applications.` | M-350, M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Masterbatch | `For concentrated pigment masterbatch systems used in plastics.` | M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Printing Inks | `For printing-ink formulations.` | M-350, M-510, M-52, M-2377 |
| Paper | `For paper-related applications.` | M-350, M-2377 |
| Specialty Materials | `For specialty-material application review with CR-901.` | CR-901 |

Counts are 8 / 8 / 7 / 4 / 2 / 1, totaling 30 verified Application relations. Display order, pill styling and position do not indicate ranking.

### 3.4 Merged guidance

`Use the Hub as a Starting Point` and `Before You Select a Grade` are replaced by one `How to Use This Application Hub` section:

1. `Define the Application` — `Clarify the intended use, formulation or processing context.`
2. `Review the Relevant Grade Set` — `Use the application collection as a starting point for product review.`
3. `Compare Current Technical Data` — `Review the applicable TDS and current technical documentation.`
4. `Validate in the Buyer’s System` — `Confirm suitability through the buyer’s own formulation, process or testing requirements.`
5. `Confirm Destination and Documentation Requirements` — `Review market, documentation and procurement requirements before specification.`

Desktop uses one compact horizontal sequence. Mobile uses one vertical, content-driven sequence rather than five detached large cards.

### 3.5 Compact Process classification

- H2: `Review Process Classification Separately`
- Intro: `Application mapping and production process are different dimensions.`
- Boundary: `Process classification is separate from application fit and does not indicate suitability or performance.`

| Process classification | Exact approved grade set | Count |
|---|---|---:|
| Chloride | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 | 8 |
| Sulfate | M-996, M-2196, M-108, M-52, M-2377 | 5 |
| Vapor-phase oxidation | CR-901 | 1 |

This section is a compact table/list with lower visual weight than the Application cards. It does not assert performance or fit.

### 3.6 Retained downstream modules

- `Continue Your Procurement Review`: Products, Documents and Markets paths.
- `Buyer Questions`: five concise, non-promotional accordion questions.
- `Share Your Application Requirements`: requested positive body copy and fixed Global Chrome RFQ.
- Approved Header, Mobile Menu and Footer remain protected.

Final CTA body:

`Share the intended application, destination market, required quantity and any technical or documentation requirements. Our team will review the request and identify the appropriate next step.`

## 4. Route and linking contract

- The 14 Grade Page IDs and planned new-site URLs exist in the approved architecture.
- Current route audit result is `0/14 VERIFIED_LIVE` for `site_scope=tio2-my`.
- Therefore the public route-safe proof renders all grade pills as plain text and creates no fabricated href.
- Full-route is the visual parent and demonstrates the conditional linked state to be used only after an individual route is verified live.
- Application-page, Products, Documents, Markets and RFQ body routes remain independently gated. Fixed Global Chrome RFQ is unaffected.
- No mytio2.com URL and no cross-site fallback is permitted.

## 5. Evidence and claim boundaries

- PRODUCT V0.3 is the only current Grade–Application and Grade–Process relationship source.
- M-2377 renders normally in its five approved Applications and Sulfate. It is not pending and does not block this page.
- M-2377 does not render under Specialty Materials or Rubber.
- Rubber remains evidence-only; no category, Page ID, URL, anchor, keyword or visual module is created.
- M-996/M-2196 may each render their individual base relationship; differences, ranking, superiority, equivalence, substitution and comparison-based selection reasons remain frozen.
- `NO_PUBLIC_MAPPING` remains non-rendering and is never rewritten as unsuitable.
- `Grades to Review` remains an evaluation-starting-point relationship, not a recommendation or suitability guarantee.

## 6. SEO and GEO boundary

- APP-000 remains `NO_PRIMARY_KEYWORD`.
- The Hub uses the six labels to summarize and route; it does not compete for the five child-page application primary keywords.
- Removal of the complete directory restores PRODUCT-000 ownership of complete-grade browsing and generic product intent.
- Visible entity relations remain: Application → Grades to Review; Grade → conditional product page / documentation; Grade → Process classification; Application classification ≠ Process classification; Application → Products / Documents / Markets / Inquiry.
- Schema may express only visible and live relations. Grade routes not verified live must not appear as linked ItemList destinations.

## 7. Responsive and accessibility contract

- Desktop order: Hero / Application cards / one five-step guide / compact Process table / Support / FAQ / Final CTA / Footer.
- 390px uses the same order and complete copy.
- Mobile controls and linked pills are at least 44px high; grade pills wrap without horizontal scrolling.
- Body copy remains 16px on 390px; Desktop normal body remains 17–18px.
- Content-driven height is required; no fixed-height CTA slot or large post-button blank area.
- Same-page anchors and route links require visible hover and keyboard focus. Plain pills must not imitate links.

## 8. Governance

| Record | Status |
|---|---|
| `APP-000-G5-V10-HUB-SIMPLIFICATION-01` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| `APP-000-G5-V09-DIRECTORY-CONTENT-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.10` |
| `APP-000-PRODUCT-V03-REL-01` | `RETAINED_IN_V0.10` |
| `GHF-FIXED-RFQ-APP-01` | `APPROVED / CLOSED`; protected |
| Gate 1–4 | Existing states unchanged |
| Gate 5 / `G5-01` | Existing state unchanged / `OPEN` |
| Gate 6/7 | Not started and not authorized |
| Application child pages | Not started |

Local checks and user review direction do not constitute Gate 5 approval.
