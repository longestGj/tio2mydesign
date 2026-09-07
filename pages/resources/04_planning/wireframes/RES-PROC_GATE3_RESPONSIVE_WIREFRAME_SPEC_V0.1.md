# RES-PROC Gate 3 Responsive Wireframe Specification V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Date | 2026-09-05 |
| Gate | Gate 3 — responsive wireframe |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Content authority | Gate 2 Content Architecture V0.3 — `USER_APPROVED / CLOSED` |
| SEO/GEO authority | Gate 2 SEO/GEO/Schema Contract V0.3 — `USER_APPROVED / CLOSED` |
| Global Chrome | V0.5 shared authority; `Resources` current |
| Reference family | Approved Resources Industrial Editorial / RES-ORIGIN responsive family |
| Page-specific principle | Share implementation and brand language, not RES-ORIGIN content modules |
| Development boundary | Planning and visual evidence only; no D16 implementation |

## 1. Locked Module Order

The wireframe must preserve the approved order and exact Buyer Clean content:

1. Shared Header
2. Breadcrumb
3. Hero
4. Direct Answer
5. On This Page
6. How the Chloride and Sulfate Routes Differ
7. What the Route Can Indicate—and What the Label Cannot Prove Alone
8. Which Grade-Level Evidence Should Buyers Compare?
9. Can Both Routes Serve the Same Application Family?
10. A Five-Step Route-to-Grade Qualification Workflow
11. Buyer Questions
12. Sources and Review Basis
13. Continue Your Product Evaluation
14. Shared Footer

No module may be added, removed or reordered. The route-flow diagrams, evidence comparison, overlap citations and workflow are page-specific structures, not reusable RES-ORIGIN content.

## 2. Desktop — 1440px Logical Width

| Region | Wireframe contract |
|---|---|
| Shared Header | 84px approved geometry; exact production Logo; eight-item order; `Resources` bold with teal underline; fixed RFQ |
| Breadcrumb | 52–54px; full three-level path |
| Hero | 1240px shell; editorial split of approximately 8/4; H1/support/link left; compact “decision path” index right without new claims |
| Direct Answer | Deep Navy full-width band or contained high-contrast evidence block; exact three-sentence answer remains continuous and readable |
| On This Page | Compact five-anchor navigation immediately after Direct Answer; no sticky rail by default |
| Route Difference | Two equal route panels with concise flow arrows; shared qualifier below; no process winner visualization |
| Label Limits | Two-column “can indicate / cannot prove alone” comparison with the commercial boundary attached below |
| Grade Evidence | Three-column data table using the six approved rows; headers remain visible and cells do not truncate |
| Application Overlap | Explanatory copy left; three compact cited evidence rows right; sources do not become competitor product cards |
| Workflow | Five numbered stages across a connected horizontal sequence; three decision outcomes below |
| Buyer Questions | Editorial 4/8 split; four disclosure rows; first answer expanded as interaction proof |
| Sources | Six source groups in a readable two-column ledger; seven actual links; dates and source roles stay attached |
| Final Action | Navy or high-contrast closing band; copy left, Products CTA and eligible Process links right |
| Shared Footer | Approved shared Footer; no page-local navigation fork |

Desktop must use content-driven height, measured section spacing and no reserved decorative image area.

## 3. Tablet — 768px Logical Width

| Region | Wireframe contract |
|---|---|
| Shared Header | Compact 64–72px shared Header using `Logo | RFQ | Menu` |
| Hero | Single-column H1/support followed by decision-path index; no clipped title or illustration placeholder |
| Direct Answer / On This Page | Single-column; five anchors may form a two-column list if labels remain complete |
| Route Difference | Two columns retained only if route flows and body copy remain readable; otherwise stack chloride before sulfate |
| Label Limits | Two columns may remain at 768px with balanced copy; commercial boundary spans full width |
| Grade Evidence | Convert the wide table into six stacked evidence records or a two-column card grid; no horizontal scroll |
| Application Overlap | Single-column reading order; evidence examples remain compact citations |
| Workflow | Vertical or wrapped 2+2+1 sequence; preserve numbering and reading order |
| Buyer Questions / Sources / CTA | Single-column; source groups may use two columns only when link labels do not wrap awkwardly |
| Footer | Compact shared composition with natural wrapping |

## 4. Mobile — 390px Logical Width

| Region | Wireframe contract |
|---|---|
| Shared Header | 64px; exact primary Logo; `RFQ`; text `Menu` control |
| Breadcrumb | Minimum 48px target; allow visual truncation only for the final long label while preserving its accessible name |
| Hero | One column; H1 approximately 36–39px; text action at least 44px high; no right-side empty media zone |
| Direct Answer | One column; 16px body with approximately 1.6 line-height; no split quote or clipped sentence |
| On This Page | Five full-width anchor rows or a normal vertical list; each target at least 44px |
| Route Difference | Chloride card followed by sulfate card; flow labels wrap at arrow boundaries; shared qualifier follows both |
| Label Limits | “Can indicate” then “Cannot prove alone”; commercial boundary remains directly attached |
| Grade Evidence | Six stacked records, each preserving question, evidence and interpretation together |
| Application Overlap | Answer, three citations and evidence limit in one column; no carousel or horizontal rail |
| Workflow | Five vertical numbered stages followed by three decision outcomes |
| Buyer Questions | One column; minimum 64px disclosure rows; first answer expanded |
| Sources | Six source groups stacked; long link labels wrap; no raw URL overflow |
| Final Action | One column; Products CTA full width; conditional Process links stack when eligible |
| Shared Footer | Approved one-column shared stack with exact reverse Logo |

The default mobile proof must have 390px client width, 390px scroll width, minimum 16px body text and no horizontal overflow.

## 5. Mobile Menu Open — 390px Logical Width

- Header remains `Logo | RFQ | Menu`.
- Menu order is Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- `Resources` is the single current item using the approved left teal marker and soft background, without visible “CURRENT” text.
- The inactive Desktop navigation is excluded from the accessible tree.
- Each action is at least 44px high; background page content is non-interactive while the menu is open.
- The menu state has no horizontal overflow.

## 6. Interaction and Conditional States

| Element | Default proof | Required behavior |
|---|---|---|
| Shared Header | Desktop nav or compact Header | Visible focus; one current Resources link in the active navigation surface |
| Hero text action | Normal state | Scrolls to the grade-evidence heading; visible focus |
| On This Page | Normal list | Five links retain complete labels and visible focus |
| FAQ | First answer expanded | Native disclosure semantics, adjacent answer and keyboard operation |
| Source links | Normal state | Descriptive link text; no raw URL as the only accessible name |
| Products CTA | Normal only when eligible | No grade/application/market/document prefill |
| Process links | Conditional | Same-scope approved/live targets only; pair may fail closed atomically |
| Mobile Menu | Closed by default | Separate open-state evidence; focus containment and close behavior |

## 7. Content and Fact Boundary

- Every exact Gate 2 Buyer Clean string must appear at real length; no lorem ipsum, abbreviated answer or placeholder text.
- Named TiO2 Malaysia Grade count remains zero.
- BLR-886 and LR-108 appear only as cited overlap evidence; they are not product cards or recommendations.
- Tronox remains broader portfolio-existence context only.
- The wireframe contains no route-wide performance winner, price, availability, capacity, MOQ, lead-time, environmental or current trade conclusion.
- `FAQPage`, `QAPage` and `HowTo` remain off; the wireframe does not imply Schema eligibility.

## 8. Formal Artifact Register

| Artifact | Purpose |
|---|---|
| `res-proc/v0.1/RES-PROC_GATE3_RESPONSIVE_WIREFRAME_V0.1.html` | Responsive source and interaction-state proof |
| `res-proc/v0.1/RES-PROC_GATE3_DESKTOP_1440_V0.1.png` | 1440px Desktop full-page proof |
| `res-proc/v0.1/RES-PROC_GATE3_TABLET_768_V0.1.png` | 768px Tablet full-page proof |
| `res-proc/v0.1/RES-PROC_GATE3_MOBILE_390_LOGICAL_AT_2X_V0.1.png` | 390px logical Mobile full-page proof exported at 2× |
| `res-proc/v0.1/RES-PROC_GATE3_MOBILE_MENU_OPEN_390_LOGICAL_AT_2X_V0.1.png` | 390px logical Mobile Menu open proof exported at 2× |

Superdesign project `9ccf782d-c80a-4a00-a02c-eeebfa533184`, draft `878afb27-3395-4030-95bd-9a89da7125c2` v4, is the current canvas record. The local source and the v4 canvas refetch are byte-identical.

## 9. Gate Boundary

This specification has passed project-control review and awaits explicit user Gate 3 approval. It does not approve Gate 3, select a Gate 4 visual direction, or authorize Gate 4–10, development, route activation, RES-000 inventory, sitemap, deployment, publication, DNS or indexing.
