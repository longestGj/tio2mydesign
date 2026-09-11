# PRODUCT-000 Root Page Hero · Wave 2 Reference Binding V1.0

## Status and scope

- Record ID: `PRODUCT-ROOT-HERO-G4-REFERENCE-BINDING-V1.0`
- Candidate ID: `PRODUCT-ROOT-HERO-G4-REFERENCE-01`
- Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`
- Workflow: `ROOT-HERO-G4-7P-V1`, Wave 2 reference binding only
- Authority: explicit user authorization for the next Wave 2 step on 2026-09-11.

This additive record exposes the approved PRODUCT-000 Hero as a shared `RootPageHero` reference binding. It does not supersede `pages/products/05_review/PRODUCT-000_GATE6_CURRENT_BASELINE_MANIFEST_V0.1.md`, alter PRODUCT's handed-off/external status, close a Gate, or authorize Gate 6/8 work.

## Consumed authority

| Source | Binding used |
|---|---|
| `docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md` | Shared Header → breadcrumb → `RootPageHero` → first module order; H1 token 56/44/36px at 700. |
| `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_CONTROL_V1.0.md` | PRODUCT remains the approved reference page; this is an additive Wave 2 reference record, not a redesign. |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Desktop navigation order, 84/64px Header, Products active state, fixed RFQ and no buyer-visible status word. |
| `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.13.md` | Exact Hero copy, 6/5/2/1 portfolio summary and the existing application-first module. |
| `pages/products/05_review/PRODUCT-000_GATE6_CURRENT_BASELINE_MANIFEST_V0.1.md` | Current authority binding to V0.13 plus Desktop V0.17 and Mobile V0.16, all retained without modification. |

## Bound page-owned slots

| Slot | Approved bound value |
|---|---|
| Eyebrow | TITANIUM DIOXIDE PRODUCTS |
| H1 | Titanium Dioxide Pigment Grades for Industrial Applications |
| Hero copy | The exact approved introduction, rutile statement and suitability boundary from V0.13. |
| Actions | Start Grade Selection → `#grade-selector`; Request a Quote → `CONV-RFQ` registered URL `/request-a-quote/`, always visible and never upgraded to a live-route claim. |
| Summary card | 14 grades. Four portfolio groups. with 6 Coatings Grades / 5 Plastics & Masterbatch / 2 Inks & Multi-Application / 1 Specialty Grade. |
| First module | Start with Your Application: six approved controls plus Not Sure, neutral Coatings result set of eight grades. |

## Relationship and scope guardrails

The candidate preserves PRODUCT V0.3: M-2377 renders neutrally in the Coatings selection shown and carries no special warning; M-996 and M-2196 remain separate grade rows without comparison language. Rubber is absent from visible taxonomy, URL, link, copy and schema-facing preview. The standalone evidence creates no Grade, Process or Application child route; downstream targets remain governed by their existing Page-ID/readiness contracts.
