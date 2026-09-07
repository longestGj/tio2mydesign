# RES-ORIGIN Gate 3 Responsive Wireframe Specification V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-ORIGIN` / `/resources/non-china-titanium-dioxide/` |
| Date | 2026-09-05 |
| Gate | Gate 3 — responsive wireframe |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Content authority | Gate 2 Content Architecture V0.2 — `USER_APPROVED / CLOSED` |
| SEO/GEO authority | Gate 2 SEO/GEO/Schema Contract V0.2 — `USER_APPROVED / CLOSED` |
| Global Chrome | V0.5 shared authority; `Resources` current |
| Visual family | Approved RES-000 Industrial Editorial / Technical Editorial family |
| Development boundary | Planning and visual evidence only |

## 1. Locked Module Order

The complete responsive wireframe preserves the approved order without addition, removal or rewording:

1. Shared Header
2. Breadcrumb
3. Hero
4. Direct Answer
5. Six Due-Diligence Checks
6. Technical Comparison
7. Application and Process Context
8. Document and Evidence Scope
9. Destination-Market Review
10. Qualification Decision
11. Buyer Questions
12. Final Action
13. Shared Footer

The Hero index repeats only the six approved check headings. It introduces no new buyer-visible claim or parallel module.

## 2. Desktop — 1440px Logical Width

| Region | Wireframe contract |
|---|---|
| Shared Header | 84px approved geometry; 180×60 target Logo box; eight-item order; `Resources` bold with 3px teal marker; fixed RFQ |
| Breadcrumb | 52px; full parent path |
| Hero | 1240px shell; approximately 7/5 editorial split; H1/copy/actions left; compact six-check index right |
| Direct Answer | Deep Navy full-width band; heading left, approved definition and support sentence right |
| Six checks | Two-column 3×2 evidence sequence; 42px number markers; each buyer check remains attached to its explanation |
| Technical comparison | Two columns: explanatory copy/callout and five-step evidence alignment sequence |
| Application context | Copy left; five compact application route rows right; no grade cards |
| Document scope | Copy/action left; eight-item evidence checklist right |
| Destination review | Four equal destination cards followed by one generic Trade Update method note |
| Qualification decision | Three equal next-decision cards followed by the approved evidence-decision note |
| Buyer Questions | Editorial 4/8 split; nine accessible disclosure rows; first answer expanded in proof |
| Final Action | Navy band; explanatory copy left, two CTAs right |
| Shared Footer | Deep Navy shared system with exact reverse Logo; no page-local footer navigation |

The full proof is 1440×6843px. The page uses content-driven height and no decorative empty section.

## 3. Tablet — 768px Logical Width

| Region | Wireframe contract |
|---|---|
| Shared Header | 72px compact shared Header using `Logo | RFQ | Menu` |
| Hero | Single-column copy followed by the six-check index; no clipped H1 or reserved illustration space |
| Six checks | Two columns retained because each card remains readable with the approved long copy |
| Technical / Application / Document / FAQ | Single-column reading order |
| Destination review | Two-column 2×2 grid |
| Qualification decision | Single-column stack |
| Footer | Three-column compact shared composition with natural final-column wrap |

The complete proof is 768×9499px. Width metrics are 768 client / 768 scroll.

## 4. Mobile — 390px Logical Width

| Region | Wireframe contract |
|---|---|
| Shared Header | 64px; exact primary Logo; `RFQ`; text `Menu` control |
| Breadcrumb | Minimum 48px; truncates only the long path line, not page content |
| Hero | One column; 39px H1; primary and secondary actions stack full width; six-check index follows immediately |
| Direct Answer | One column; 28px heading; 16px approved answer copy |
| Six checks | One card per row; number, explanation and buyer check remain together |
| Technical / Application / Document / Destination / Decision | One-column stacks; no horizontal rail or table overflow |
| Buyer Questions | One column; 16px answer; minimum 64px disclosure rows |
| Final Action | One column; both actions full width |
| Shared Footer | One-column shared stack; exact reverse Logo |

The full proof is 780×26450 physical pixels and represents 390px logical width at 2×. Computed body typography is 16px / 25.6px. Width metrics are 390 client / 390 scroll. All visible link and disclosure targets are at least 44px high.

## 5. Mobile Menu Open — 390px Logical Width

- Formal asset is 780×1440 physical pixels and represents 390×720 logical at 2×.
- The state is deterministic at `#menu-open`.
- Header remains `Logo | RFQ | Menu`, matching the approved Global Chrome evidence.
- Menu order is Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- `Resources` is the single visible current item, using the approved left teal marker and soft background.
- Every visible action is at least 44px high; the page does not scroll horizontally.

## 6. Interaction and Conditional States

| Element | Default | Interaction / state |
|---|---|---|
| Shared Header | Desktop nav or compact mobile Header | Visible keyboard focus; one current Resources marker where navigation is visible |
| CTAs | Approved labels and destinations | Visible focus; route/query contract unchanged |
| Application / Market routes | Descriptive links | Link atom is omitted when route is not eligible; no disabled or coming-soon control |
| FAQ | First answer expanded in proof | Native disclosure preserves answer adjacency and keyboard operation |
| Mobile Menu | Closed on default page | Open state at `#menu-open`; Menu control returns to page state |
| Trade Update | Generic method note only | Dedicated link remains conditional on current official-source and route gates |

## 7. Content and Fact Boundary

- All Gate 2 exact Buyer Clean strings are present; no placeholder copy is used.
- Named Grade count is zero; public PRODUCT V0.3 relationship row count is zero.
- No M-996/M-2196 comparison appears.
- No tariff, customs acceptance, preference, exemption or trade-remedy outcome appears.
- The current site-wide approval for `Malaysia-origin titanium dioxide` is consumed as authority but not forced into this already approved copy.
- COO availability statements remain separate `PENDING_USER_FACT_CONFIRMATION` questions and are not needed by this wireframe.

## 8. Formal Assets

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `assets/RES-ORIGIN_G3_DESKTOP_1440_V0.1.png` | 1440×6843 | 656200 | `2DDCA2CE14B823E55FEED67B3AF58346C5AA4F522DCAFEC3324132F74E4F8A38` |
| `assets/RES-ORIGIN_G3_TABLET_768_V0.1.png` | 768×9499 | 650823 | `BDC099E686A840FEBBE55663DA6C324ADDFD88A4494779B57DAFF7AA955E1B3D` |
| `assets/RES-ORIGIN_G3_MOBILE_390_LOGICAL_AT2X_V0.1.png` | 780×26450; 390 logical @2x | 2102421 | `D99577783C898AF7CD3058CD5846BDE5B3EF064E0005F36419717768F3EB7779` |
| `assets/RES-ORIGIN_G3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.1.png` | 780×1440; 390×720 logical @2x | 43258 | `A5DC76AD771924634DC882E2188845DB52FD12DDD06431DFBA158A317D655DEF` |

## 9. Gate Boundary

This specification is a Gate 3 candidate. It does not approve Gate 3, select a Gate 4 visual direction, or authorize Gate 4–10, development, route activation, deployment, publication, DNS or indexing.
