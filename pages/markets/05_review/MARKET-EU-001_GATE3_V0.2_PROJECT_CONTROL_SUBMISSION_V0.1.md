# MARKET-EU-001 Gate 3 V0.2 Project-Control Submission V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Review ID | `MARKET-EU-001-G3-V02-PCR-01` |
| Date | 2026-09-04 |
| Approved input | Gate 2 V0.2 `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 authority | User message `批准，然后授权执行Gate3` |
| Review result | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Requested user decision | Approve or revise the complete revised Gate 3 structure |
| Gate 4–10 | `NOT_AUTHORIZED` |

## 1. Outcome

The revised Gate 3 Desktop, Tablet, Mobile and Mobile Menu-open structures pass project-control review. The page now presents the approved Malaysia-origin supplier identity before the procurement path, includes all 14 neutral Grade routes, separates Documents from EU import responsibilities and preserves the complete compliance, origin, trade, destination, FAQ and conversion sequence.

The output is ready for user review. It is not yet an approved Gate 3 baseline.

## 2. What changed from the original Gate 3

| Area | Original V0.1 wireframe | Revised V0.2 wireframe |
|---|---|---|
| Hero | Procurement-led | Malaysia-origin supplier-led |
| Second module | Direct answer | Supplier/Product definition and fact row |
| Product section | Generic product path; 0 Grade names | Compact directory containing all 14 Grades |
| Applications | Navigation-level cards | Five cards with buyer evaluation criteria |
| Documents / import | Combined | Two separate modules |
| Origin | Later single module | Hero, supplier module, origin module and trade bridge |
| Trade | Evergreen + dated context | Same framework plus controlled sourcing-diversification bridge |
| Buyer Questions | 6 | 8 |
| Mobile Menu proof | Deferred | Complete open-state proof included |
| Shared visual system | Procurement Editorial | Preserved |

## 3. Exact structural decision

### Hero

The visible H1 is:

`Malaysia-Origin Titanium Dioxide for European Union Buyers`

The Hero provides three buyer-stage actions:

- `Explore Titanium Dioxide Grades`;
- `Request Documents`;
- `Request a Quote`.

The right-side path is now:

`Malaysia origin → Titanium dioxide → Applications and grades → Documents → EU import responsibilities → Sample or quotation request`

### Supplier/Product module

This module immediately follows Hero and visibly identifies:

- `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.`;
- `Rutile titanium dioxide pigment`;
- `Taiping, Perak, Malaysia` as the company-stated manufacturing site;
- `Malaysia` as the company-stated product origin;
- `Coatings · Plastics · Masterbatch · Printing Inks · Paper` as the five principal industrial Application paths.

### Grade directory

All 14 Grades appear once as equal-weight product paths:

`M-350 · M-510 · M-896 · M-996 · M-2196 · M-895 · M-200 · M-108 · M-210 · M-340 · M-886 · M-52 · M-2377 · CR-901`

Desktop uses three columns, Tablet uses two columns and Mobile uses one column. Each Grade retains only its approved Application tags and `View [Grade]` link. There are no technical specifications, ranking, preference, equivalence or recommendation badges.

### Documents and import responsibilities

The four Documents categories remain together in one controlled-request module. The current English-service note is visible. EU importing-role, REACH and CLP responsibilities move into their own following module with the ECHA source line and four-item responsibility checklist.

### FAQ and final conversion

Eight Buyer Questions are present. The two supplier-identity answers are expanded in the structural proof; all eight answers remain in the DOM. The final conversion retains Quote as primary, Documents as secondary and Sample as supporting action, followed by the approved non-confirmation note.

## 4. Responsive review

| Check | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---:|---:|---:|
| Client width equals scroll width | PASS | PASS | PASS |
| H1 count | 1 | 1 | 1 |
| Grade routes | 14 | 14 | 14 |
| EU destination routes | 6 | 6 | 6 |
| Buyer Questions | 8 | 8 | 8 |
| Approved Logo assets | PASS | PASS | PASS |
| UK / United Kingdom text | 0 | 0 | 0 |
| Terms of Use text | 0 | 0 | 0 |

Mobile Menu open-state review:

- overlay visible: PASS;
- Close control visible: PASS;
- 8 navigation links: PASS;
- one `Markets` current item: PASS;
- `aria-expanded=true`: PASS;
- document scroll locked: PASS.

## 5. Copy and relationship review

- Gate 2 Buyer Clean inline-copy parity: `120/120 PASS`.
- V0.3 Grade-to-Application relationship parity: `PASS`.
- SEO Title and Meta description: exact approved values.
- H1: exact approved value.
- Company/origin qualifier: visible and unchanged.
- Documents request boundary: visible; no public-download or universal-availability promise.
- Trade boundary: no fixed tariff, exemption or duty-avoidance conclusion.
- Local-EU boundary: no EU establishment, warehouse, stock or fixed delivery claim.

## 6. Visual and content-density assessment

The inherited Procurement Editorial direction remains coherent at all three widths. The added content increases full-page height, especially at 390px, but the height comes from approved readable content rather than decorative spacing. The one-column Mobile Grade directory is intentionally retained because two columns would crowd the longer Application tags and weaken the 44px touch-target contract.

Project-control recommendation: keep the current one-column Mobile Grade directory for Gate 3. Gate 4 may refine visual density without hiding Grade identities, abbreviating approved tags or creating horizontal scrolling.

## 7. Superdesign execution note

The normal Superdesign AI iteration was blocked because the project had no remaining generation credits. The same-draft, no-credit deterministic import workflow was used instead. It produced current version 6 on draft `17fff1e7-222d-49da-a016-511b72599344`; the previous versions remain recoverable. This does not block Gate 3 review because the current preview, exported HTML and rendered evidence all validate.

## 8. Files and hashes

| Role | File | SHA-256 |
|---|---|---|
| Approved Gate 2 pointer | `pages/markets/04_planning/MARKET-EU-001_CURRENT_GATE2_APPROVED_MANIFEST_V0.8.md` | `4EFA9759B904A0C71DB8B8AA318445E8BA30C8481E5D493966F47DDD2B974051` |
| Gate 3 context | `pages/markets/04_planning/MARKET-EU-001_GATE3_SUPERDESIGN_CONTEXT_V0.2.md` | `4983BBB2BD0CDCE5589F2766097D30D2FF7C455A46310F53B23C5DFCA8ACAB83` |
| Gate 3 specification | `pages/markets/04_planning/wireframes/MARKET-EU-001_GATE3_WIREFRAME_SPEC_V0.2.md` | `84C3F3702333CEFF7F488ADB06544A4BE881A590736FEACBCBB68EE20E22AEDA` |
| Responsive HTML | `pages/markets/04_planning/wireframes/market-eu-001/v0.2/MARKET-EU-001_GATE3_RESPONSIVE_WIREFRAME_V0.2.html` | `90729EAA6E180D098DEC3A8634830303722B65FC051A37799C64DCBA893D50C8` |
| Desktop proof | `pages/markets/04_planning/wireframes/market-eu-001/v0.2/MARKET-EU-001_GATE3_DESKTOP_1440_V0.2.png` | `43F7937B2D1E1DDF720302089E8441F7CEB513FA70884C056A6595D24741198A` |
| Tablet proof | `pages/markets/04_planning/wireframes/market-eu-001/v0.2/MARKET-EU-001_GATE3_TABLET_768_V0.2.png` | `925867334179DA6D4CF68ADF198C3591FB8358085CCFF8FB12299797EDE1E6EE` |
| Mobile proof | `pages/markets/04_planning/wireframes/market-eu-001/v0.2/MARKET-EU-001_GATE3_MOBILE_390_V0.2.png` | `A4F5BC2DA6059F555623CE7DF20891ED205BEB803224244E3B2E10CF8416D225` |
| Mobile Menu-open proof | `pages/markets/04_planning/wireframes/market-eu-001/v0.2/MARKET-EU-001_GATE3_MOBILE_MENU_OPEN_390_V0.2.png` | `D7B31541D039CF8C54C3DBFC4989E8E7DE44551A775EE7EC7F8FD36B5CA5B0A1` |

## 9. Decision requested

Approve or revise the complete Gate 3 V0.2 responsive structure, including:

1. the supplier-led Hero and second module;
2. the three-column Desktop / two-column Tablet / one-column Mobile 14-Grade directory;
3. separate Documents and EU import-responsibility modules;
4. the eight-question FAQ treatment;
5. the Mobile Menu-open structure;
6. the unchanged Procurement Editorial visual basis.

Approval closes Gate 3 only. Gate 4 requires a separate explicit authorization.
