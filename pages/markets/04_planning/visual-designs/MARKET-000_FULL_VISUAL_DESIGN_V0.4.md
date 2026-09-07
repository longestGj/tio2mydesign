# MARKET-000 Full Visual Design V0.4 — Final-Review Candidate

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `MARKET-000` |
| Page | Markets |
| URL | `/markets/` |
| Date | 2026-08-31 |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Document status | `APPROVED_GATE_5_BASELINE` |
| Review ID | `MARKET-000-G5-FRC-01` |
| Review status | `APPROVED / CLOSED` |
| User approval | 2026-08-31 |
| Revision type | Controlled revision of the approved visual system; not a redesign |
| Source request | User-provided “Revise MARKET-000 /markets/ page to final-review candidate” specification dated 2026-08-31 |
| Development boundary | Gate 5 visual, content, SEO/GEO and responsive baseline only; Gate 6 review is separately authorized, but Gate 7, Market child pages, development, handoff, deployment and publication remain unauthorized |

This V0.4 specification and its Desktop/Mobile/Tablet V0.5 plus Responsive States V0.4 assets are the current user-approved Gate 5 baseline. They supersede the fixed-RFQ V0.3/V0.4 page-body baseline for current visual review while preserving the approved Global Chrome contract. Approval does not authorize implementation.

## 1. Authority and Page Role

The candidate consumes:

1. `WEBSITE_VISUAL_CONTENT_SEO_GEO_REVIEW_STANDARD_V1.0.md`.
2. `research/keyword/11_page_keyword_master.csv`.
3. `MARKET-000_FULL_VISUAL_DESIGN_V0.3.md` and the approved V0.4 complete-page assets.
4. `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` and the approved fixed-RFQ Global Chrome.
5. The current PRODUCT V0.3 relationship baseline and MARKET-000 zero-row-level rendering contract.

The page contract remains:

| Field | Locked value |
|---|---|
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Search intent | Navigation |
| Buyer stage | Navigation |
| Primary role | Route buyers to the approved destination-market systems |
| Core conversion event | Buyer enters the correct destination-market page |
| Cannibalization boundary | The Hub does not compete with regional or country supplier-intent pages |

The H1 remains exactly `Choose Your Destination Market`. No supplier, manufacturer, importer, wholesaler, distributor or country-level acquisition keyword was added.

## 2. Controlled Body Changes

### Removed

- Hero body-level `Request a Quote` CTA.
- FAQ Q7, `How is quotation handled?`.
- Entire terminal body RFQ module: `Ready to discuss a destination market?`.
- English-language positioning as Brazil's main value proposition while PT-BR remains on localization hold.

### Retained

- Approved Global Header, Mobile Header, Mobile Menu and Footer RFQ treatment.
- H1, chapter marker, section order and Industrial Editorial visual system.
- European Union parent structure and six EU country destinations.
- `Choose the level of market context you need` and Direct Answer.
- Products, Applications and Documents as secondary procurement paths.
- Trade information separation and official-source/scope/update-date boundary.
- PRODUCT V0.3 zero-row-level relationship rendering.

### Changed

- Hero now has one body CTA: `Choose a Market`.
- Hero supporting copy is navigation-first and does not force Malaysia-origin supplier language.
- Ten English market destinations have clear link affordance in the intended full-route presentation.
- UK, India and Brazil cards use full-width action treatment; Brazil copy now says `Brazil-specific market context`.
- Resources has a visible `Review Resources` path without publishing a duty, tariff, measure or customs outcome.
- FAQ is focused on six navigation questions and ends directly before the Global Footer.

## 3. Final Body Sequence

1. Breadcrumb.
2. Hero — one body CTA.
3. Destination Market — EU overview, six EU countries, UK, India and Brazil.
4. How to Choose — three steps plus Direct Answer.
5. Next Procurement Check — Products, Applications and Documents.
6. Current Information — Trade boundary plus Resources path.
7. Buyer Questions — Q1–Q6.
8. Global Footer.

No terminal body RFQ or replacement contact/banner module exists between FAQ and Footer.

## 4. Route and Link Contract

The visual candidate shows the intended enabled link affordance required by the user. It does not assert that a route is currently live.

| Visible action | Page ID | Planned href |
|---|---|---|
| Explore the European Union | `MARKET-EU-001` | `/markets/european-union/` |
| Germany | `MARKET-EU-DE` | `/markets/germany/` |
| Italy | `MARKET-EU-IT` | `/markets/italy/` |
| Spain | `MARKET-EU-ES` | `/markets/spain/` |
| Poland | `MARKET-EU-PL` | `/markets/poland/` |
| Netherlands | `MARKET-EU-NL` | `/markets/netherlands/` |
| Belgium | `MARKET-EU-BE` | `/markets/belgium/` |
| Explore the United Kingdom | `MARKET-UK-001` | `/markets/united-kingdom/` |
| Explore India | `MARKET-IN-001` | `/markets/india/` |
| Explore Brazil | `MARKET-BR-EN` | `/markets/brazil/` |
| Explore Products | `PRODUCT-000` | `/products/` |
| Explore Applications | `APP-000` | `/applications/` |
| Review Documents | `DOC-000` | `/documents/` |
| Review Resources | `RES-000` | `/resources/` |

Implementation must use normal crawlable `<a href>` links. JS-only navigation is prohibited. `MKT-R004` remains OPEN: all destinations must pass content, Canonical, `site_scope=tio2-my` and live-route verification before public release. The visual affordance is not evidence of live status.

`MARKET-BR-PT` remains `PROVISIONAL_URL / LOCALIZATION_REVIEW_REQUIRED / LOCALIZATION_HOLD / DO_NOT_RENDER` and is absent from Buyer Clean, menu, Schema, hreflang and this candidate.

## 5. SEO and GEO Guardrails

- `Primary Keyword=NO_PRIMARY_KEYWORD` remains unchanged.
- Navigation intent remains primary; the page is not an acquisition, RFQ or trade-policy landing page.
- Country-level supplier keywords remain owned by `MARKET-EU-001`, the six EU country pages, `MARKET-UK-001`, `MARKET-IN-001` and `MARKET-BR-EN`.
- The Hub contains no keyword-stuffed supplier paragraph and no country-to-grade/application/process inference.
- Direct Answer and Q1–Q6 preserve extractable EU-overview, country-context and standalone-market relationships.
- Schema remains page-level `CollectionPage`, visible destination `ItemList` and `BreadcrumbList` semantics only after the corresponding visible URLs pass release gates.
- No `FAQPage`/`QAPage`, Product, Offer, LocalBusiness or hidden relationship Schema is authorized by this visual revision.

## 6. Trade, Product and Evidence Gates

- No duty percentage, tariff rate, current measure, investigation status, customs outcome or effective-date claim appears.
- Resources references only the stable review dimensions: official sources, scope and update dates.
- `MKT-R005` remains OPEN; any current Trade action requires official-source, scope, date, content, freshness and live-route approval.
- PRODUCT V0.3 remains the sole relationship source: 30 verified Application rows, 0 conflict, 54 no-public and 14 verified Process grades.
- MARKET-000 continues to render zero row-level grade/Application/Process content.
- M-996/M-2196 comparison hold and all no-public negative-inference prohibitions remain unchanged.

## 7. Responsive Contract

### 390px Mobile

- 16px body/Q&A copy and 14px minimum labels.
- H1, Destination H2 and all long action labels wrap naturally.
- EU overview uses one card; six country actions stack as full-width 48px rows.
- UK, India and Brazil stack as full-width actionable cards.
- How to Choose and Procurement cards preserve logical order.
- FAQ uses one full-width card per question.
- Footer follows Q6 with one normal closing gap; no body RFQ intervenes.
- No horizontal overflow, clipped border, tiny country link or decorative blank band.

### 768px Tablet

- Mobile-style `Logo | RFQ | Menu` Header is used when full desktop navigation cannot fit.
- EU country actions use two columns with full labels and 48px rows.
- Destination, choice, procurement, Trade and FAQ modules use a readable single-column flow.
- Global Footer preserves Brand, Explore, Information, Conversion and Copyright hierarchy.

### Desktop

- EU parent card remains visually dominant over country links.
- UK, India and Brazil remain peers outside the EU hierarchy.
- Destination routing outranks all secondary procurement paths.
- FAQ ends directly into the approved Global Footer.

## 8. Formal Candidate Asset Manifest

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `assets/MARKET-000_G5_DESKTOP_FINAL_REVIEW_CANDIDATE_V0.5.png` | 1440 × 4664 | 566614 | `DD94FB6613A21F42C9225EDCD7C1123D9B2AF266821F8224A128BE41A65FA397` |
| `assets/MARKET-000_G5_MOBILE_390_FINAL_REVIEW_CANDIDATE_V0.5.png` | 780 × 16874 (`390px @2x`) | 1256841 | `008C8A83D778672C4494FA38D5660522ECB70A5638FB0ABE0A68A3D78322DD0B` |
| `assets/MARKET-000_G5_TABLET_768_FINAL_REVIEW_CANDIDATE_V0.5.png` | 768 × 6399 | 573351 | `A1BA1068BE372E4B710D0A2AF2B58EDA0EF5827151099B03F926AA48033ADF5A` |
| `assets/MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.4.png` | 1600 × 2500 | 350407 | `E4D8C2E71CB9A65F032A5770D4FBD1B7BB24AFE23C4EEBB92706B0F5234BCFAA` |

The approved V0.4/V0.3 assets remain unchanged as historical and rollback baselines.

## 9. Acceptance Checklist

- [x] H1 remains `Choose Your Destination Market`.
- [x] Hero contains one body CTA: `Choose a Market`.
- [x] Hero body RFQ is removed; fixed Global Chrome RFQ remains.
- [x] Terminal body RFQ is removed.
- [x] EU hierarchy and ten English destination actions remain clear.
- [x] No country-level supplier keyword stuffing is introduced.
- [x] Products, Applications, Documents and Resources remain secondary.
- [x] FAQ contains Q1–Q6; quotation FAQ is removed.
- [x] 390px full-body and 768px full-body candidates exist.
- [x] No new photography, flags, maps, charts, gradients, icons or marketing modules are introduced.
- [x] PT-BR and Trade freshness gates remain closed.
- [x] Gate 6/7, child pages, development, handoff and release remain unauthorized.

## 10. Review Items

| Review ID | Level | Issue | Current control | Status |
|---|---|---|---|---|
| `MARKET-000-G5-FRC-01` | BLOCKING | Controlled body revision completed project-control review and user approval | V0.4 specification and V0.5/V0.4 assets are the current approved Gate 5 baseline; earlier approved fixed-RFQ assets remain rollback evidence | `APPROVED / CLOSED` |
| `G5-01` | BLOCKING | MARKET-000 Gate 5 required final user approval | User approved Gate 5 on 2026-08-31; Gate 6 review is separately authorized, but Gate 7 and implementation remain locked | `CLOSED` |
| `MKT-R002` | IMPORTANT | Market-specific product, application, document, logistics and supply facts remain unsupported | No such facts are added | `OPEN` |
| `MKT-R003` | IMPORTANT | Brazil PT-BR remains unapproved | `LOCALIZATION_HOLD / DO_NOT_RENDER` | `OPEN` |
| `MKT-R004` | IMPORTANT | 22 external destinations remain unverified live | Link affordance is a candidate; live-route verification remains a release blocker | `OPEN` |
| `MKT-R005` | IMPORTANT | Trade official-source and freshness review remains incomplete | No current Trade claim is rendered | `OPEN` |

## 11. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.4 draft | 2026-08-31 | Created controlled final-review candidate; removed duplicate body RFQ surfaces and quotation FAQ; strengthened route affordance; added 390px and 768px full-body evidence | `MARKET-000-G5-FRC-01=DRAFT_FOR_FINAL_REVIEW` |
| V0.4 project-control review | 2026-08-31 | Project control independently verified four candidate assets, exact Global Chrome inheritance, responsive closure, content/SEO/GEO boundaries and the consolidated validator | `MARKET-000-G5-FRC-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not approved or closed |
| V0.4 user approval | 2026-08-31 | User approved the final-review candidate and MARKET-000 Gate 5; promoted this specification and Desktop/Mobile/Tablet V0.5 plus Responsive States V0.4 to the current visual baseline | `MARKET-000-G5-FRC-01=APPROVED / CLOSED`; `G5-01=CLOSED`; `APPROVED_GATE_5_BASELINE` |

Gate 6 review is separately authorized. Do not enter Gate 7, start Market child pages, develop, hand off, deploy or publish.
