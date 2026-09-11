# HOME-001 Root Page Hero · F01 Targeted Gate 4 Binding V1.4

## Status and scope

- Record ID: `HOME-ROOT-HERO-G4-BINDING-V1.4`
- Candidate ID: `HOME-ROOT-HERO-G4-CANDIDATE-05`
- Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`
- Workflow / finding: `ROOT-HERO-G4-7P-V1` / `ROOT-HERO-G5-XPAGE-F01`
- Scope: Home-only correction of the 1440px Hero H1 computed token from `61.92px / 750` to the shared `56px / 700`, with new 1440/768/390 page-context proof.

This is not a redesign. It does not replace the current Home Manifest or any approved historical candidate, update shared progress/status, close Gate 4/5, enter Gate 6/8, alter SEO/GEO/Schema or routes, or authorize implementation/release.

## Consumed contracts and upstreams

| Source | Binding applied |
|---|---|
| `docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md` | Open-white `RootPageHero`; H1 `56/44/36px`, weight `700`, no more than three lines; no Hero-wide card, left rule, or horizontal overflow. |
| `docs/architecture/ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_CONTROL_V1.0.md` and progress V1.0 | Home is a preservation-first root-page binding; page-context proof must include shared Chrome, full Hero, and Start Here transition. |
| `docs/architecture/ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_INDEPENDENT_REVIEW_V1.0.md` | F01 is the only Home defect: 1440 H1 `61.92px / 750`. The required return is Home-only token alignment without changing copy, CTA, photograph, Start Here, or open-white surface. |
| `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.6.md` and `docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md` | Existing page identity, exact buyer content, primary/secondary CTA targets, Header/Footer, and current-manifest boundary are retained. |
| `pages/home/04_planning/HOME-001_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.3.md` | V1.3 is preserved as the direct historical baseline. |

## Bound content and preservation boundary

| Slot | Bound value |
|---|---|
| Eyebrow | `FOR INTERNATIONAL INDUSTRIAL BUYERS` |
| H1 | `Malaysia Titanium Dioxide for Industrial Buyers` |
| Primary CTA | `Request a Quote` → `/request-a-quote/` |
| Secondary CTA | `View Products` → `/products/` |
| Hero media | `homepage-hero-tio2-material-v0.6.png` |
| First following module | `START HERE` / the unchanged Markets, Products, Documents cards |

The V1.4 source removes only V1.3's desktop-only `@media(min-width:1440px)` H1 override. The shared base H1 therefore applies at 1440px as `56px / 700`; V1.3's existing `≤1023px` and `≤767px` breakpoints remain unchanged and are replayed at 768px and 390px. The version-local font URL points to the unchanged V1.3 font dependency so the rendered font remains identical.

## Cross-page F01 acceptance lock

- 1440px must compute `56px / 700`, retain two H1 lines, the same H1 text, two CTA targets, Hero media, open-white Hero and Start Here transition.
- 768px must remain `44px / 700`, two lines; 390px must remain `36px / 700`, three lines. At all tested widths the H1 remains at or below three lines, the CTAs retain at least 44px height, and document/body width equals the viewport.
- Header/Footer and buyer-visible `CURRENT` remain unchanged; there is no literal buyer-visible `CURRENT` label.

The binding is a Gate 4 candidate for project-control review only. Historical V1.3 assets remain untouched.
