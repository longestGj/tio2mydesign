# RES-000 Full Visual Design V0.5 — Final Content and Responsive Closeout

## 0. Document Control

| Field | Value |
|---|---|
| Page | `RES-000` / `/resources/` |
| Gate | Gate 5 final directed revision |
| Date | 2026-08-31 |
| Status | `APPROVED_GATE_5_BASELINE` |
| Review ID | `RES-HUB-FINAL-01` |
| Parent | V0.4 Procurement Research Hub; structure and shared components retained |
| Sources | Content Architecture V0.3; SEO/GEO Contract V0.2; Wireframe V0.3; Visual Direction V0.3 |
| Global Chrome | Formal V0.5 shared Header/Mobile Menu/Footer; unchanged |
| Development boundary | Planning and visual evidence only; no code, CMS, test, deployment or publication |

## 1. Formal Assets

| Asset | Dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/RES-000_G5_DESKTOP_PROCUREMENT_RESEARCH_HUB_V0.5.png` | 1440×3782 | 311135 | `1EF97A450A3F2240B010F957C2C170DE87186845ED3BE1751EDF717D3329575C` | `APPROVED_GATE_5_BASELINE` |
| `assets/RES-000_G5_MOBILE_390_PROCUREMENT_RESEARCH_HUB_V0.5.png` | 780×10974; 390px logical at 2× | 859403 | `76E5E10075B44F82C2B32B124143E0BDF2A2D4B5376DBAF0F0DBC8A9FBF76222` | `APPROVED_GATE_5_BASELINE` |
| `assets/RES-000_G5_MOBILE_390_MENU_OPEN_V0.5.png` | 780×1440; 390×720 logical at 2× | 46704 | `427703CAC08393194289AE64BB1B78135139350A2FAD18E671DFBC2FAD62CAB9` | `APPROVED_GATE_5_BASELINE` |

Planning-only render source remains under `99_workspace/RES-000/visual-preview/` and is not a formal deliverable.

## 2. Locked Structure

V0.5 retains the V0.4 order without addition or removal:

1. Header
2. Breadcrumb
3. Hero
4. Featured Resource
5. Three Decision Paths
6. How we use evidence
7. Buyer Questions
8. Footer

Latest Research remains 0px because only one real Resource candidate exists. The removed sitemap module and `Where details belong` do not return.

## 3. Final Copy Delta

### Featured Resource

Description:

`Use a practical due-diligence framework to evaluate alternative-origin titanium dioxide supply, including Malaysia-origin sourcing, through origin evidence, grade-specific technical documentation, application requirements and destination-market context.`

`Malaysia-origin sourcing` appears once. It defines an origin-evaluation context and does not claim manufacturing, compliance, duty treatment or superiority.

Right-side content:

**What this guide covers**

- Origin evidence and supplier identity
- Grade-specific technical documentation
- Application and processing requirements
- Destination-market context

Every item is present in the RES-ORIGIN Brief/Gate 1 content contract. No certification, test result, trade status or supply capability was added.

### Technical Evaluation

Removed:

`A research framework does not select a grade.`

Final positive guidance:

`Use technical research to evaluate titanium dioxide grade characteristics, processing requirements and application context. Compare relevant technical documentation and application requirements using clearly defined evaluation criteria.`

### FAQ 1

Question remains:

`What should buyers compare when evaluating titanium dioxide grades?`

Final answer:

`Buyers should compare the intended application, processing requirements, grade-specific technical data and relevant technical documentation. Performance values should be compared using compatible test methods and current documents. Final suitability should be validated in the buyer’s formulation or processing system.`

The remaining four questions are unchanged and remain independent procurement answers.

## 4. Desktop Featured Spacing

| Property | V0.5 |
|---|---|
| Section padding | 84px top / 76px bottom |
| Heading-to-content gap | 34px |
| Column ratio | 2.15fr / 0.85fr |
| Column gap | 36px |
| Card padding | 32px 34px 28px |
| Card height | Content-driven; no artificial minimum |
| Right alignment | Top-aligned with compact list |
| Full Desktop height | 3782px; V0.4 was 3883px |

No fake card, repeated Resource, placeholder, Coming soon or skeleton fills the section.

## 5. Mobile Computed Typography

Measured at 390px CSS width:

| Surface | Font size | Line height | Result |
|---|---:|---:|---|
| Body | 16px | 25.6px / 1.6 | PASS |
| Featured description | 16px | 25.92px / 1.62 | PASS |
| FAQ answer | 16px | 25.6px / 1.6 | PASS |
| Eyebrow | 12px | 14.4px / 1.2 | PASS; short uppercase labels remain readable |
| Footer copy/links | 15px | 24px / 1.6 | PASS |

The Mobile Hero diagram remains `display:none`; scroll width equals 390px; primary targets are at least 44px; no text is clipped or horizontally scrolled.

## 6. SEO / GEO Final Contract

| Field | Final result |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Secondary keywords | `buying guides | technical guides | market trade updates` |
| Search intent | `N` with informational Hub utility |
| H1 | One; unchanged |
| URL | `/resources/`; unchanged |
| Canonical | `https://tio2malaysia.com/resources/`; unchanged |
| Child cannibalization | No process, competitor/grade-alternative or Trade child primary phrase added |
| GEO relationship | Titanium dioxide procurement → sourcing / technical / trade; grade evaluation → application + processing + documentation; destinations → EU / UK / India / Brazil; alternative origin → Malaysia-origin sourcing context |

## 7. Truth and Gate Boundary

- RES-ORIGIN remains the only real Resource candidate and is not public/live.
- Current public Resource inventory and ItemList remain 0.
- PRODUCT V0.3 remains 84 = 30 verified / 0 conflict / 54 no-public with 14 Process; Hub row renderer remains 0.
- M-996/M-2196 comparison hold remains.
- No current Trade item, source date, review date or market outcome renders.
- RES-R002 remains open as `CHILD_STARTED_NOT_PUBLIC`; RES-R003–R007 remain open; RES-R008–R009 remain controlled.
- No Gate 6/7, development or publication is authorized.

### Global Chrome validation note

- Desktop Header and Mobile Header pixel-region hashes match V0.4.
- Mobile Footer pixel-region hash and Mobile Menu full-asset hash match V0.4.
- Desktop Footer inner HTML, computed-style contract hash and 374.90625px component height match V0.4. Its isolated raster hash differs because the shortened body moves the Footer from a 0.015625 to 0.484375 subpixel vertical phase; original-detail review found no component, content or geometry change.

## 8. Gate Status

`RES-HUB-FINAL-01 = APPROVED / CLOSED`; user approval date 2026-09-01.

Gate 5 is the approved visual endpoint. This approval does not approve RES-ORIGIN, any Trade child, route, implementation, delivery or publication.
