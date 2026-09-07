# APP-000 Applications Hub — Full Visual Design V0.10

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Version | `V0.10` |
| Date | 2026-08-31 |
| Review ID | `APP-000-G5-V10-HUB-SIMPLIFICATION-01` |
| Current status | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.11` |
| Baseline role | `HISTORICAL_APPLICATION_FIRST_BASELINE` |
| User approval date | Not approved for Gate 5 |

V0.10 continues from the V0.9 Full-route visual parent and implements the user's Application-first simplification. V0.11 now supersedes it as the current final-polish review candidate. Route-safe remains a derived release-proof, not the design source.

V0.9 and earlier versions are preserved as historical evidence. This revision does not advance Gate 5, Gate 6/7 or authorize Application child pages, development, handoff, deployment or publication.

## 2. Controlled design delta

`APP-000_APPLICATION_HUB_SIMPLIFICATION_DELTA_V0.1.md` controls the content and route behavior.

V0.10:

- removes the entire complete-grade directory introduced in V0.9;
- replaces Hero count statistics with six same-page Application anchors;
- replaces database-style Hero language with buyer-facing navigation copy;
- gives each Application card one real scope description and one shared relationship qualifier;
- keeps PRODUCT V0.3 sets at 8 / 8 / 7 / 4 / 2 / 1;
- merges the two former guidance sections into one five-step sequence;
- restores Process classification as a compact table/list using 8 / 5 / 1 exact sets;
- retains Support paths, five Buyer Questions and the positive Final RFQ body;
- retains the approved same-source Logo and fixed Global Chrome RFQ.

## 3. Final page structure

1. Global Header and breadcrumb
2. `Explore Titanium Dioxide by Application` + `Choose an Application`
3. `Choose an Application Path` — six Application cards
4. `How to Use This Application Hub` — one five-step guide
5. `Review Process Classification Separately` — compact table/list
6. `Continue Your Procurement Review` — Products / Documents / Markets
7. `Buyer Questions` — five accordion questions
8. `Share Your Application Requirements` — Request a Quote
9. Global Footer

No `Browse All 14 Titanium Dioxide Grades` or second grade-selection module remains.

## 4. Route states

| State | Grade pills | Child/support/body RFQ | Global Chrome RFQ |
|---|---|---|---|
| Full-route | Demonstrates linked state and hover/focus contract | Visible as the future qualified state | Fixed visible |
| Route-safe | Plain text, because 0/14 Grade routes are verified live | Conditional modules/actions close without placeholder space | Fixed visible |

The six Hero quick links are same-page anchors and remain in both states. Application card heights are content driven.

## 5. Responsive behavior

### Desktop

- Hero uses a two-column hierarchy with a compact 2×3 anchor panel and no duplicate counts.
- Application cards remain a content-driven 2×3 grid.
- Five guidance steps share one compact horizontal container.
- Process classification is one low-weight table, not three large cards.
- The expanded FAQ item grows before the next row; no overlap or crop.

### 390px

- Logical content safe strip is 16–374px.
- H1 uses three intentional lines.
- Hero anchors form a 2×3 grid with 44px controls.
- Grade pills use two columns, 44px height and natural wrapping.
- The five-step guide becomes one vertical panel with internal separators.
- Process rows stack label above grade list while retaining all 14 classifications.
- Full-route page is 8249 logical pixels high versus V0.9's 10590.5, a 22.1% reduction.
- Route-safe removes conditional actions/modules without retained CTA slots or large post-button gaps.

## 6. Typography and interaction

- Inter is used in the Buyer Clean page and state boards.
- Desktop body and FAQ answers remain 17–18px; Application count labels are 14px.
- 390px body and FAQ answers remain 16px; Application count labels are 13px.
- Linked pill and anchor states use visible hover/focus; focus reference is 3px.
- Plain pills do not use link affordance.
- Colors, navy/teal hierarchy, white cards, light neutral bands, buttons, Header and Footer reuse the approved visual system.

## 7. Evidence and SEO/GEO boundary

- PRODUCT V0.3 supplies 30 verified Application and 14 Process relations; 54 no-public relations remain non-rendering.
- M-2377 appears in Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate. It is not shown as pending.
- M-2377 does not appear under Specialty Materials or Rubber.
- M-996/M-2196 are visually equal; no comparative claim or selection reason is added.
- APP-000 remains `NO_PRIMARY_KEYWORD`; Application child pages retain their five primary-keyword clusters and PRODUCT-000 retains complete-grade-directory intent.
- The compact table makes Application classification ≠ Process classification explicit and extractable without adding unsupported technical claims.

## 8. Formal Manifest

| Asset | Actual dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.10.png` | 1440×5410 | 670058 | `ECAE6669993E6FF1E00CFA82C030FF2C6438502BD39C61B78DA1299A9E6D1A7B` |
| `APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.10.png` | 1440×4374 | 537531 | `D321CD1F833E1B61D09EAEBCACAA9AB36765D5213BD3015B5111CE6E6BD80D66` |
| `APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.10.png` | 780×16498, representing 390×8249 logical | 1444784 | `2D21F2E632C99F739284CC3C51ADE06C944142234A68A6996FDC251279989C2B` |
| `APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.10.png` | 780×12801, representing 390×6400.5 logical | 1134042 | `79F494BA32EB8C42E5ECB022B4A1D12E7EDB3EBF76D27580A1DA5E649E2FBF47` |
| `APP-000_G5_GLOBAL_CHROME_STATES_V0.10.png` | 1600×1740 | 253569 | `F8D5971EE7AF6023726E4766FAC76E0CAC9C0A4CE48B2A6F5572A9789A68DA0D` |
| `APP-000_G5_APPLICATION_COMPONENT_STATES_V0.10.png` | 1600×1200 | 132638 | `7C4357F2747886EB938EA566AA2A7F0734018D0CA0273F73E55AE6E2E02E0549` |

Only these six PNGs are the V0.10 Manifest. Earlier assets remain historical and are excluded.

## 9. Visual QA submitted

- Desktop Full-route and Route-safe were inspected at original detail for Hero, Application cards, five-step guide, Process table, FAQ, Final CTA and Footer closure.
- Mobile Full-route and Route-safe were inspected at original detail for 390px wrapping, 44px controls, content-driven closure and no horizontal overflow.
- Guide and Process original-detail crops show no line crossing, crop or overlap after the final re-render.
- Grade Directory text and rows do not appear in V0.10.
- Fixed RFQ, Logo, Applications current state and Footer remain visible.
- Manifest dimensions, byte sizes and SHA-256 values were read from the final files.

These are local validation results for project-control review, not Gate 5 approval.

## 10. Governance record

| Record | Status | Boundary |
|---|---|---|
| `APP-000-G5-V10-HUB-SIMPLIFICATION-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.11` | Historical six-asset review candidate; not approved |
| `APP-000-G5-V09-DIRECTORY-CONTENT-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.10` | V0.9 preserved as history |
| `APP-000-G5-V07-RFQ-COPY-01` | `RETAINED_IN_V0.10` | Removed negative Final RFQ qualification remains absent |
| `APP-000-PRODUCT-V03-REL-01` | `RETAINED_IN_V0.10` | Relationship authority unchanged |
| `GHF-FIXED-RFQ-APP-01` | `APPROVED / CLOSED` | Fixed-RFQ Chrome remains protected |
| Gate 1–4 | Existing states unchanged | No approval inferred |
| Gate 5 / `G5-01` | Existing state unchanged / `OPEN` | User approval still required |
| Page lifecycle | `DESIGN_IN_REVIEW` | No transition |
| Gate 6/7 | Not started / not authorized | No handoff or development |
| Application child pages | Not started | No child-page artifact |
