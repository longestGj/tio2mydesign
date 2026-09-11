# APP-000 Root Page Hero · Targeted Gate 4 Binding V1.0

## Status and scope

- Record ID: `APP-ROOT-HERO-G4-BINDING-V1.0`
- Candidate ID: `APP-ROOT-HERO-G4-CANDIDATE-01`
- Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`
- Workflow: `ROOT-HERO-G4-7P-V1`, Wave 1, APP-000 only
- Authority: user-approved open-white APP direction recorded in the execution request dated 2026-09-11.
- This is an additive targeted-Gate-4 binding. It does not replace `pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md`, close a Gate, alter Gate 9, or authorize Gate 6/8 work.

## Consumed contracts

| Contract | Binding used |
|---|---|
| `docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md` | `RootPageHero` / `hub-light` composition: Global Chrome → breadcrumb → Hero → first page module; M1 copy, actions and information card remain page-owned slots. |
| `docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md` | APP open-white override: no complete Hero border, background, rounded rectangle, shadow, or left teal/green line. |
| `pages/home/04_planning/HOME-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.3.md` | Header grid and responsive H1 evidence pattern are consumed as the approved Home V1.3 sample. |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 84px desktop and 64px responsive header, primary-navigation active treatment, permanently visible RFQ, and no buyer-visible status label. |

## Page-owned preserved slots

| Slot | Bound value |
|---|---|
| Breadcrumb | Home › Applications |
| H1 | Explore Titanium Dioxide by Application |
| Intro | This hub organizes titanium dioxide grades by application across coatings, plastics, masterbatch, printing inks, paper and specialty materials. Use each collection as a starting point for technical evaluation. |
| Primary action | Explore Applications → `#application-selector` |
| Secondary action | Request a Quote → `/request-a-quote/` |
| Information card | Choose an Application: Coatings; Plastics; Masterbatch; Printing Inks; Paper; Specialty Materials. |
| First module after Hero | Choose by Application, including the approved Grades to Review qualification. |

## Explicit non-changes

APP information architecture, link destinations, approved content, Global Chrome ownership, SEO/GEO/Schema, current APP Manifest and Gate 9 status remain unchanged. This candidate is visual proof only and is not a Next.js implementation instruction.
