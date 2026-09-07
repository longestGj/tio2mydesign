# PRODUCT-000 Gate 7 Handoff Package V0.2

## 0. Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Page type | Product hub |
| Priority | P0 |
| Date | `2026-08-31` |
| Gate 7 authorization | User authorized preparation on `2026-08-31` |
| Package status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Review ID | `PRODUCT-000-G7-PCR-02` |
| Implementation | Not started; this package is implementation-neutral |
| Handoff state | Not handed off; project-control review required first |
| Gate 8 | Not started / not authorized by this package |
| Gate 9 | Not started |
| Gate 10 | Not authorized |

This package defines what an external WordPress/Next.js implementation must preserve. It does not prescribe framework internals, create code, start Process or Grade child pages, or declare any route live.

## 1. Authority and consumption order

1. Current user decisions and this user-authorized Gate 7 scope.
2. Current Page Brief `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.2.md`; V0.1 is historical traceability only.
3. `PRODUCT-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.2.md` and the exact V0.13/V0.17/V0.16 visual baseline.
4. `PRODUCT-000_GATE6_CURRENT_BASELINE_MANIFEST_V0.1.md`.
5. Historical Gate 6 V0.2 documents for unchanged scope.
6. `PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.2.md` plus V0.3 for the fourteen-summary delta.
7. `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and unified audit V0.3.
8. Production SVG Logo Manifest V1.0, Logo Addendum V1.0 and Cross-page Registry V1.0.
9. Page Registry and page-keyword master for Page IDs, registered URLs and ownership.

Historical documents remain traceability records. Stale 25-relation, four-Sulfate, unresolved M-2377, conditional-Global-Chrome-RFQ, old Gate-state or conditional-Meta language must not override the current baseline.

The approved Meta is route-safe and unconditional. Process route readiness controls Process-card rendering and later route QA only; it is not a prerequisite for the current Meta.

## 2. Required delivery set

| Deliverable | File |
|---|---|
| Current Page Brief | `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.2.md` |
| Master handoff | `PRODUCT-000_GATE7_HANDOFF_PACKAGE_V0.2.md` |
| CMS/API/component mapping | `PRODUCT-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.2.md` |
| SEO/GEO/Schema/metadata | `PRODUCT-000_GATE7_SEO_GEO_SCHEMA_METADATA_V0.2.md` |
| Responsive/a11y/interaction acceptance | `PRODUCT-000_GATE7_RESPONSIVE_A11Y_INTERACTION_ACCEPTANCE_V0.2.md` |
| Malaysia scope isolation | `PRODUCT-000_GATE7_SITE_SCOPE_ISOLATION_CONTRACT_V0.2.md` |
| Acceptance and blockers | `PRODUCT-000_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md` |
| Handoff Manifest | `PRODUCT-000_GATE7_HANDOFF_MANIFEST_V0.2.md` |
| Project-control submission | `pages/products/05_review/PRODUCT-000_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` |

## 3. Page identity and public module order

The rendered page must preserve this order:

1. Global Header with Products current state and fixed RFQ.
2. Breadcrumb: Home → Products.
3. Hero.
4. Application-first Selector.
5. Conditional Process routes plus the CR-901 classification row.
6. Complete fourteen-grade directory.
7. Five-step Evaluation guide.
8. Conditional Applications/Documents/Markets procurement paths.
9. Five Buyer Questions.
10. Contextual final RFQ.
11. Global Footer with `PROCUREMENT` and fixed RFQ.

Conditional removal must collapse the complete module and its spacing. It must never leave an empty card, heading, divider, dead link or reserved desktop/mobile band.

## 4. Public content baseline

### 4.1 Identity and Hero

- Breadcrumb: `Home > Products`.
- Kicker: `TITANIUM DIOXIDE PRODUCTS`.
- H1: `Titanium Dioxide Pigment Grades for Industrial Applications`.
- Primary action: `Start Grade Selection` → local `#grade-selector`.
- Contextual action: `Request a Quote` → route key `CONV-RFQ`.
- Hero summary: `14 grades. Four portfolio groups.` with `6 Coatings Grades`, `5 Plastics & Masterbatch`, `2 Inks & Multi-Application`, `1 Specialty Grade`.
- The exact supporting and qualification copy comes from V0.13. No copy may promise suitability, availability or delivery.

### 4.2 Selector

- Controls: Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials and Not Sure.
- Result label: `Grades to Review`, never recommended/best/preferred.
- Public membership comes only from PRODUCT V0.3: 8 / 8 / 7 / 4 / 2 / 1.
- Default implementation state may be Coatings with eight results to match the approved visual; a no-JavaScript or initialization state must remain understandable and must not expose a crawlable facet URL.
- Selector state changes do not create routes, query-indexable pages, Canonicals or sitemap entries.
- No-result copy: `No grade is listed for this application. Browse all grades or share your requirements for technical review.`
- If the interactive Selector fails, preserve the complete fourteen-grade directory and expose a non-technical error message; never guess relations.

### 4.3 Process

- `PRODUCT-PROC-CL`: Chloride card, atomic title/body/action.
- `PRODUCT-PROC-SU`: Sulfate card, atomic title/body/action.
- Route states: 2/1/0 cards based on Malaysia-scope route resolution; zero means the complete module is absent.
- Process classification data remain 8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation.
- CR-901 is a lightweight grade row, not a third Process landing page.

### 4.4 Fourteen-grade directory

- Four navigation groups remain 6 / 5 / 2 / 1.
- Exactly fourteen unique rows in the approved order.
- Each row contains grade name, exact `summary`, route key and `View Grade →`.
- The exact fourteen summaries are defined in V0.13 A5.1 and the Gate 6 TDS impact audit.
- `grade_directory[].summary` is the single server-side source for visible copy and optional Product Schema `description`.
- Provenance fields remain internal and must not render in Buyer Clean.

### 4.5 Evaluation, support, FAQ and RFQ

- Five ordered Evaluation steps use the exact titles and bodies in the component mapping.
- Support cards are atomic 3/2/1/0 route-resolved units for `APP-000`, `DOC-000` and `MARKET-000`.
- FAQ has exactly five questions and answers; one-expanded/four-collapsed is the reference visual state, but all answers exist in initial server-rendered DOM.
- Final RFQ uses the exact V0.13 copy and route key `CONV-RFQ`.
- Global Header/Mobile Header/Mobile Menu/Footer RFQ is always visible. `rfq_route_ready=false` is a release blocker, not a visibility switch.

## 5. Route identity contract

No route below is declared live by this package. Gate 8 implements; Gate 9 verifies response, redirect, Canonical, Schema URL and Malaysia-scope isolation.

| Purpose | Page ID / route key | Registered URL | Current handoff classification |
|---|---|---|---|
| Current page | `PRODUCT-000` | `/products/` | Approved identity; not implementation proof |
| Chloride Process | `PRODUCT-PROC-CL` | `/products/chloride-process-titanium-dioxide/` | Approved registered identity; route not verified live |
| Sulfate Process | `PRODUCT-PROC-SU` | `/products/sulfate-process-titanium-dioxide/` | Approved registered identity; route not verified live |
| Applications | `APP-000` | `/applications/` | Planned; route not verified live |
| Documents | `DOC-000` | `/documents/` | Planned; route not verified live |
| Markets | `MARKET-000` | `/markets/` | Approved navigation identity; route not verified live |
| RFQ | `CONV-RFQ` | `/request-a-quote/` | Planned conversion identity; Gate 8 implementation and Gate 9 release blocker |

The fourteen Grade route identities are enumerated in the component mapping and Manifest. No destination may fall back to mytio2, TIOVAR or another `site_scope`.

## 6. Global Chrome and production Logo

- Desktop nav order: Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Products current state uses text/weight/structural marker, not colour alone.
- Mobile structure: Logo | RFQ | Menu; menu preserves current state and fixed RFQ.
- Footer buyer-visible title is `PROCUREMENT`; public `CONVERSION` is prohibited.
- Production assets are referenced by approved keys, never copied:
  - `brand_logo_primary_horizontal` for Desktop/Mobile light Header.
  - `brand_logo_reverse_monochrome` for Deep Navy Footer.
  - `brand_favicon_safe` for favicon.
- Historical PNG inside mockups is visual evidence only, never a production asset.

## 7. Technical neutrality

The external developer chooses implementation details while meeting observable contracts. This package does not require a specific:

- WordPress post type, plugin, field library or editor;
- Next.js router mode, data-fetching API, state library or CSS system;
- cache provider, analytics vendor or form backend;
- component folder layout or test framework.

It does require stable field semantics, server-rendered public content, Malaysia-scope isolation, route-state behavior, metadata/Schema parity and acceptance evidence.

## 8. Evidence and claim boundaries

- PRODUCT V0.3 remains 84×24, 30 verified / 0 conflict / 54 no-public and 8/5/1 Process.
- M-2377 renders in five Applications and Sulfate; Specialty Materials and Rubber remain absent.
- M-996/M-2196 may show individual facts only; 12/12 comparison hold remains.
- `NO_PUBLIC_MAPPING` means silent non-render, never “not suitable”.
- `PRODUCT-G6-TDS-I01` is accepted and non-blocking for Gate 7: fourteen complete TDS files are not in the repository. Only the exact user-approved summaries may be used.
- No numeric specification, standard, guarantee, certification, origin, inventory, price, availability, MOQ, lead time, equivalence or recommendation may be inferred.

## 9. Stage boundaries

- Gate 7 prepares and reviews this specification package only.
- Project-control PASS is required before any actual handoff.
- Gate 8 implements in the external development project after separate authorization.
- Gate 9 performs read-only acceptance and blocks release for unresolved routes, RFQ, metadata, Schema, scope, accessibility or viewport defects.
- Gate 10 requires separate user authorization for deployment, indexing and publication.
- This package does not authorize operations in `D:\16Wordpress_nextjs`.

## 10. Proposed disposition

Proposed project-control disposition:

`PROJECT_CONTROL_GATE_7_PACKAGE_PASS_FOR_EXTERNAL_HANDOFF_WITH_GATE_8_9_ACCEPTANCE_ITEMS`

This is a proposal only. Current status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`; no handoff has occurred.
