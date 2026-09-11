# APP-000 Root Page Hero · Targeted Gate 4 Binding V1.1

## Status and succession

- Record ID: `APP-ROOT-HERO-G4-BINDING-V1.1`
- Candidate ID: `APP-ROOT-HERO-G4-CANDIDATE-02`
- Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`
- Workflow: `ROOT-HERO-G4-7P-V1`, Wave 1, APP-000 only
- Supersedes for candidate review only: `APP-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.0.md`; V1.0 and its assets remain historical evidence.
- Authority: the 2026-09-11 user-approved open-white APP direction plus mandatory revisions in `pages/applications/05_review/APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_VISUAL_REVIEW_V1.0.md`.

This is an additive targeted-Gate-4 binding. It neither replaces `pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md` nor changes Gate 9, closes a Gate, or authorizes Gate 6/8 work.

## Consumed contracts

| Contract | V1.1 binding |
|---|---|
| `docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md` | Shared `RootPageHero` / `hub-light` composition and its H1 token: 56/44/36px at font weight 700. |
| `docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md` | APP open-white surface: no whole-Hero border, background, radius, shadow or left teal/green line. |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Full desktop order `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`; Applications is the sole active desktop item, without a buyer-visible status word. |
| `pages/applications/04_planning/APP-000_GATE2_CONTENT_CONTRACT_V1.0.md` | Exact M1 anchors and M2 route-resolution boundary: five application destinations resolve only by eligible Page ID at handoff/runtime; Specialty Materials has no child Application route. |

## Page-owned preserved slots and V1.1 route boundary

| Slot | Bound value |
|---|---|
| Breadcrumb | Home › Applications |
| H1 / intro / CTA | Unchanged approved Buyer Clean text; Explore Applications → `#application-selector`; Request a Quote → `/request-a-quote/`. |
| Hero information card | Labels unchanged; hrefs are exactly `#application-coatings`, `#application-plastics`, `#application-masterbatch`, `#application-printing-inks`, `#application-paper`, `#application-specialty-materials`. |
| M2 transition proof | Six matching DOM anchor targets are present as non-interactive collection labels. They deliberately expose no child route href or action; actual eligible APP-COAT/APP-PLAS/APP-MB/APP-INK/APP-PAPER resolution remains Page-ID and runtime conditional. Specialty remains a non-route taxonomy collection. |

## Explicit non-changes

Approved APP content, Global Chrome ownership, SEO/GEO/Schema, historical V1.0 assets, current APP Manifest and Gate 9 status remain unchanged. The standalone preview is visual evidence, not an implementation or routing instruction.
