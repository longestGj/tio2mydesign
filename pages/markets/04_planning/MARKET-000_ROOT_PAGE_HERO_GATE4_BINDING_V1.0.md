# MARKET-000 Root Page Hero · Targeted Gate 4 Binding V1.0

## Status and scope

- Record ID: `MARKET-ROOT-HERO-G4-BINDING-V1.0`
- Candidate ID: `MARKET-ROOT-HERO-G4-CANDIDATE-01`
- Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`
- Workflow: `ROOT-HERO-G4-7P-V1`, Wave 2 / MARKET-000 only
- Scope: a shared `RootPageHero` / `hub-light` page binding and 1440/768/390 page-context proof only.

This record does not replace `pages/markets/05_review/MARKET-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md`, alter a Gate 5 or Gate 9 conclusion, change page body/SEO/GEO/Schema, close a Gate, enter Gate 6/8, or authorize development/release.

## Consumed contracts

| Source | Binding |
|---|---|
| `ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md` | `hub-light`; 1200px shared shell, shared text/action/media stack, no Hero left teal/green rule; H1 56/44/36px, weight 700, maximum three lines. |
| `ROOT_PAGE_HERO_SEVEN_PAGE_TARGETED_GATE4_CONTROL_V1.0.md` and progress V1.0 | Wave 2 MARKET preservation proof; page is not redesigned and its Hero-to-body transition remains in real context. |
| `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and production Logo contract | Desktop `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`, 84px; Mobile `Logo | RFQ | Menu`, 64px; Markets is current only through bold + teal underline; buyer-visible `CURRENT=0`. |
| MARKET Gate 2/Gate 3/V0.4 approved baseline | Exact Hero copy/local CTA, destination hierarchy, current route-governance state and the existing `Destination Market` module are preserved. |

## Bound page content

| Slot | Exact bound value |
|---|---|
| Breadcrumb | `Home › Markets` |
| Eyebrow | `DESTINATION MARKET NAVIGATION` |
| H1 | `Choose Your Destination Market` |
| Intro | `Start with the region or country where your procurement requirements need to be reviewed. This hub explains which market path to choose and where product, application, document, trade-update, and quotation questions belong.` |
| Primary CTA | `Choose a Market` → `#destination-selector` |
| Informative media | Existing destination-market summary: European Union, United Kingdom, India and Brazil. It remains visible at 768px and 390px. |
| First following module | `Destination market` / `Start with the market tied to your procurement requirements`, including EU parent, the six country labels in approved order, and United Kingdom, India and Brazil. |

## Route and unchanged-scope boundary

- The preview represents `S0_CURRENT_ROUTE_SAFE`: market names are visible navigation structure, but no destination child `<a href>` is emitted. It does not assert that 22 external units are live.
- European Union remains the parent; country order is Germany, Italy, Spain, Poland, Netherlands, Belgium; United Kingdom, India and Brazil remain peers. No PT-BR label, route or locale relationship is rendered.
- No Product V0.3 relation, Trade outcome, market-specific supply fact, external target, SEO/GEO/Schema source, or body module is changed by this binding.
- The standalone preview is Gate 4 visual evidence, not production routing or implementation instruction.
