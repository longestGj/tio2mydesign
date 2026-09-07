# MARKET-000 SEO / GEO / Schema Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `MARKET-000` / Markets / `/markets/` |
| Date | 2026-08-31 |
| Source baseline | User-approved Gate 5 V0.4 specification and V0.5/V0.4 assets |
| Document status | `GATE6_PROJECT_CONTROL_REVIEW_PASS / USER_GATE7_AUTHORIZED` |
| Gate 6 review ID | `MARKET-000-G6-PCR-02` |
| Gate 7 | `AUTHORIZED_FOR_PACKAGE_PREPARATION / NOT_APPROVED_FOR_HANDOFF` |
| Implementation boundary | Contract only; no WordPress, Next.js, CMS, code, test, deployment or publication |

## 1. Page identity and intent

| Field | Locked value |
|---|---|
| Page ID | `MARKET-000` |
| Page name | Markets |
| URL | `/markets/` |
| Page type | Navigation hub |
| Language | EN |
| Priority | P1 |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Search intent | Navigation |
| Buyer stage | Navigation |
| Mapping | `APPROVED_NAVIGATION_HUB` |
| Verification | `NO_DIRECT_KEYWORD_TARGET` |
| H1 | `Choose Your Destination Market` |

The page is indexable because it provides stable destination selection, answer structure and internal navigation. It does not acquire EU, UK, India, Brazil or country-level supplier queries and does not become a Product, Application, Documents, Resources or RFQ landing page.

## 2. SEO metadata contract

| Field | Gate 7 specification value | Gate 8 implementation | Gate 9 read-only QA / release check |
|---|---|---|---|
| HTML Title | `Markets for Titanium Dioxide Procurement | TiO2 Malaysia` | Emit once in the Malaysia scope | Exact value, one title, no supplier-intent rewrite |
| H1 | `Choose Your Destination Market` | One server-rendered H1 | Exact value and single-H1 rule |
| Route-safe Meta | `Navigate titanium dioxide procurement information for the European Union, United Kingdom, India, and Brazil, with clear guidance on the next review step.` | Use only when the four first-level Market actions are not all implemented and approved for release | Exact visible-state consistency |
| Full-route Meta | `Choose a destination market for titanium dioxide procurement in the European Union, United Kingdom, India, or Brazil, then continue to the relevant market page.` | Use when EU, UK, India and Brazil EN actions are implemented and approved for release | Four first-level actions resolve to correct Canonicals |
| Canonical target | `https://tio2malaysia.com/markets/` | Emit self-canonical in `site_scope=tio2-my` | 200/approved response, one Canonical, no redirect or cross-scope drift |
| Production robots | `index, follow` | Emit only in the release environment after release gates close | No staging leakage; indexability matches authorization |
| Staging robots | `noindex, nofollow` | Environment control | Verified before any public preview is exposed |
| Hreflang | `NOT_APPLICABLE` | Emit no Hub alternate | No MARKET-000 pt-BR alternate now or later |
| Sitemap | One approved Canonical only | Add only through the Malaysia sitemap after release authorization | No provisional URL, parameter or alternate duplicate |
| Open Graph | Text must match the current Hero; no image unless cleared | Implement optional cleared asset only | No logistics, origin, factory or coverage implication |

Title, H1 and Meta must not use country supplier, manufacturer, importer, wholesaler or distributor acquisition structures. They must not target product-grade, Process, Application or Trade Update primary intent.

## 3. GEO answer and entity contract

The public graph is limited to stable page-navigation relationships:

```text
TiO2 Malaysia
  -> has navigation hub -> Markets
Markets
  -> organizes destination context -> European Union, United Kingdom, India, Brazil
European Union
  -> contains listed country destinations -> Germany, Italy, Spain, Poland, Netherlands, Belgium
Markets
  -> directs the next procurement check -> Products, Applications, Documents, Resources
```

These are page and navigation relationships. They do not assert supply coverage, local presence, registration, inventory, logistics, product suitability or service availability.

Approved visible answer subjects are:

1. How the Market navigation is organized.
2. EU overview versus EU country destination.
3. What a Market page helps a buyer review.
4. Where current Trade information belongs.
5. Where to start when a grade is not known.
6. Where technical and origin documents are handled.

All six answers must remain in the initial server-rendered DOM. They are normal Buyer Questions, not an authorization for `FAQPage` or `QAPage`.

## 4. Schema candidate boundary

### 4.1 Allowed

| Type | Allowed content | Runtime condition |
|---|---|---|
| `CollectionPage` | Page identity, name, URL, `inLanguage=en`, description and WebSite relationship | Must match visible Buyer Clean and approved metadata |
| `BreadcrumbList` | Home → Markets | Gate 8 emits planned URLs; Gate 9 verifies both Canonicals and responses before release |
| `ItemList` | Ten visible English destination actions only | Each item is emitted with its URL only when the same visible anchor is implemented; Gate 9 verifies URL/Canonical parity |

The planned `ItemList` order is: European Union, Germany, Italy, Spain, Poland, Netherlands, Belgium, United Kingdom, India, Brazil EN. Gate 7 may deliver this planned order before the routes are live. Gate 8 implements it; Gate 9 verifies and blocks release on broken, cross-scope or non-canonical items.

### 4.2 Prohibited

- `FAQPage`, `QAPage`, `Product`, `ProductGroup`, `Offer`, `LocalBusiness`, `Place`, `Organization` locality claims, rating, price, inventory, availability, office, warehouse, factory, origin, certification or logistics fields.
- Any Grade, Application, Process or Grade-comparison relation.
- `MARKET-BR-PT`, pt-BR `inLanguage`, Hub hreflang alternate or a hidden localized item.
- A Trade measure, rate, duty, customs outcome, effective date or unreviewed Trade URL.
- URLs or entities absent from the Buyer Clean page.

Schema must never be used to restore content or relationships that the visible page omits.

## 5. Ten Market actions and 22-route phase contract

### 5.1 Ten approved visual Market actions

| Page ID | Planned URL | Gate 7 state | Gate 8 responsibility | Gate 9 / release evidence |
|---|---|---|---|---|
| `MARKET-EU-001` | `/markets/european-union/` | Approved destination identity | Implement Malaysia-scope route and anchor | Response, Canonical, link and scope isolation |
| `MARKET-EU-DE` | `/markets/germany/` | Approved destination identity | Same | Same |
| `MARKET-EU-IT` | `/markets/italy/` | Approved destination identity | Same | Same |
| `MARKET-EU-ES` | `/markets/spain/` | Approved destination identity | Same | Same |
| `MARKET-EU-PL` | `/markets/poland/` | Approved destination identity | Same | Same |
| `MARKET-EU-NL` | `/markets/netherlands/` | Approved destination identity | Same | Same |
| `MARKET-EU-BE` | `/markets/belgium/` | Approved destination identity | Same | Same |
| `MARKET-UK-001` | `/markets/united-kingdom/` | Approved destination identity | Same | Same |
| `MARKET-IN-001` | `/markets/india/` | Approved destination identity | Same | Same |
| `MARKET-BR-EN` | `/markets/brazil/` | Approved destination identity | Same | Same |

These planned links do not need to be live before a later authorized Gate 7 package is created or delivered. Gate 7 specifies identities and acceptance behavior; Gate 8 implements; Gate 9 performs read-only route/Canonical/scope verification before release.

### 5.2 Complete 22-route inventory

| Group | Count | IDs | Current Gate 6 treatment |
|---|---:|---|---|
| English Market destinations | 10 | `MARKET-EU-001`, `MARKET-EU-DE`, `MARKET-EU-IT`, `MARKET-EU-ES`, `MARKET-EU-PL`, `MARKET-EU-NL`, `MARKET-EU-BE`, `MARKET-UK-001`, `MARKET-IN-001`, `MARKET-BR-EN` | Approved visual identities; Gate 8 implementation + Gate 9 QA/release |
| Brazil Portuguese | 1 | `MARKET-BR-PT` | `PROVISIONAL_URL / LOCALIZATION_HOLD / DO_NOT_RENDER`; not a Gate 8 instruction until separately approved |
| Supporting destinations | 7 | `PRODUCT-000`, `APP-000`, `DOC-000`, `RES-000`, `ABOUT-001`, `CONV-DOC`, `CONV-RFQ` | Page-specific visibility applies; implemented in Gate 8 only when included by the approved Gate 7 contract; verified in Gate 9 |
| Trade destinations | 4 | `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR` | `OFFICIAL_SOURCE_UPDATE_REQUIRED / NOT_AUDITED / DO_NOT_RENDER`; no implementation instruction until content, source, scope and freshness are approved |
| Total | 22 | — | All remain `NOT_VERIFIED_LIVE` at Gate 6; that is a phase status, not evidence that routes do not exist |

Normal crawlable anchors are required. JS-only navigation, cross-scope fallback and dead-link publication are prohibited.

## 6. PT-BR and Trade freshness

- `MARKET-BR-PT` is absent from Buyer Clean, Header, Mobile Menu, Footer, `ItemList`, `inLanguage`, hreflang, sitemap and Canonical relations.
- MARKET-000 always has `hreflang=NOT_APPLICABLE`; future Brazil EN/pt-BR hreflang belongs only to the two child pages after independent approval.
- The Trade module states only that detailed time-sensitive information belongs in Resources and requires official sources, scope and update dates.
- No duty, tariff, measure, investigation, customs outcome, avoidance claim or current effective date is published.
- The generic `Review Resources` path does not make a Trade Update current. Four specific Trade routes remain withheld until their independent evidence and freshness gates close.

## 7. PRODUCT V0.3 boundary

`D:\23MySec\pages\products\01_research\PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` is the sole relationship source. MARKET-000 renders zero row-level Grade/Application/Process relations.

- No market-to-grade recommendation, country suitability, Process preference, registration, inventory or supply availability is inferred.
- M-2377's approved relations are not repeated on this Hub; Specialty Materials remains no-public and Rubber remains evidence-only.
- M-996/M-2196 differentiation, ranking, reason-for-selection and comparison positioning remain prohibited.
- `NO_PUBLIC_MAPPING` is never explained as unsuitability.
- Products and Applications appear only as page-level navigation destinations.

## 8. Gate 7 field inventory

A later user-authorized Gate 7 package must map, without implementation:

| Field group | Required inventory |
|---|---|
| Identity | `page_id=MARKET-000`, `site_scope=tio2-my`, slug, language, page type and lifecycle source |
| SEO | Title, two deterministic Meta states, Canonical target, robots environments, hreflang none and sitemap rule |
| Hero | Eyebrow, H1, intro, local `Choose a Market` anchor and chapter marker |
| Destinations | EU parent, six EU countries, UK, India and Brazil EN; Page ID, planned URL, label, description, order and link semantics |
| Choice guide | Three ordered steps and Direct Answer |
| Procurement paths | Products, Applications and Documents labels, descriptions, Page IDs and planned URLs |
| Trade boundary | Stable no-outcome copy, generic Resources path and separate frozen Trade route inventory |
| Buyer Questions | Q1–Q6 exact approved copy; initial server DOM requirement; no FAQ Schema |
| Global Chrome | Markets current state; fixed Header/Mobile Header/Mobile Menu/Footer RFQ; no RFQ OFF or Contact fallback |
| Production brand asset | Reference the Home/Global Chrome owner authority `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` and its registered asset keys; preserve the approved Gate 5 PNG Logo only as static visual evidence and do not copy or rewrite the SVG files |
| Schema | Allowed types, ten-item planned destination order, visible parity and prohibited fields |
| State controls | PT-BR hold, Trade hold, zero row-level Product relations, atomic visible link behavior and no cross-scope fallback |
| QA acceptance | Desktop/390/768, keyboard, focus, menu, 44px targets, overflow, metadata, Schema, route, Canonical, RFQ and scope isolation |

`MARKET-G6-B04=APPROVED / CLOSED` by explicit user approval dated 2026-08-31. `MARKET-G7-B05=APPROVED / CLOSED` because the Home/Global Chrome owner published `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`, the approved Global Chrome Logo Addendum and the cross-page registry. Gate 7 references that authority and its asset keys without copying/rewriting SVGs or using the old PNG as a production asset.

## 9. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Consolidated the approved Gate 5 SEO/GEO/Schema, 10-Market action, 22-route phase and Gate 7 field contracts | `DRAFT_FOR_GATE_6_PROJECT_CONTROL_REVIEW` |
| V0.1 targeted revision | 2026-08-31 | Added `MARKET-G6-B04` production SVG candidate dependency after `MARKET-000-G6-PCR-02` conditional return | `RESOLVED_IN_DRAFT_PENDING_TARGETED_PROJECT_CONTROL_REVIEW`; Gate 6 not approved |
| V0.1 project-control targeted re-review | 2026-08-31 | Project control confirmed the B04 dependency, asset boundary and all unchanged Gate 6 domains | `MARKET-000-G6-PCR-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; Gate 6=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORIZATION` |
| V0.1 Gate 7 authorization sync | 2026-08-31 | User approved the production SVG direction and rights, closed B04 and authorized MARKET-000 Gate 7; production reference remains pending the Home/Global Chrome owner Manifest | `MARKET-G6-B04=APPROVED / CLOSED`; `MARKET-G7-B05=OPEN_SHARED_OWNER_PRODUCTION_MANIFEST_DEPENDENCY` |
