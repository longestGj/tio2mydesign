# APP-000 Desktop and 390px Wireframe Specification V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| URL | `/applications/` |
| Gate | Gate 3 — Wireframe |
| Version / date | V0.1 / 2026-08-30 |
| Status | `DRAFT_FOR_GATE_3_REVIEW` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Content input | `APP-000_CONTENT_ARCHITECTURE_V0.1.md` |
| Relationship input | PRODUCT V0.2.1 `APPROVED_RELATION_BASELINE` |
| Authorization | User authorized APP-000 design production through Gate 5; this is not Gate approval |
| Excluded | Child-page wireframes, code, CMS, development, testing, deployment and publishing |

`GATE 3 DRAFT / SUBMITTED FOR PROJECT-CONTROL REVIEW`

## 1. Wireframe Decision

Use an **Application Editorial Directory** rather than a one-result-only selector. All six current application collections are simultaneously inspectable, proving the complete 25-relation baseline while keeping each category structurally equal. The page remains a hub because five cards route to their owner pages conditionally and Specialty Materials routes only to CR-901 conditionally.

## 2. Viewports and Grid

| Viewport | Canvas / content | Columns | Outer margin | Card behavior |
|---|---|---|---|---|
| Desktop | 1440px / 1200px | 12 × 72px, 24px gutters | 120px | Hero 7/5; Application 2-column; Process 3-column |
| Tablet wide | 1024px / 928px | 8 columns | 48px | Application 2-column; Process 2+1 |
| Tablet narrow | 768px / 704px | 6 columns | 32px | Application cards stack; process stack |
| Mobile | 390px / 358px | 1 column | 16px | All modules stack; no carousel or horizontal chip scroll |

## 3. Desktop Full-route Frame — 1440px

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ Logo | Home Markets Products APPLICATIONS Documents Resources About RFQ │ 72
├──────────────────────────────────────────────────────────────────────────┤
│ Home > Applications                                                     │ 40
├─────────────────────────────── HERO 7/5 ─────────────────────────────────┤
│ APPLICATIONS HUB                 │ six-category relationship map          │
│ Explore Titanium Dioxide        │ Coatings 7 | Plastics 7                │
│ by Application                  │ Masterbatch 6 | Printing Inks 3        │
│ body + qualification            │ Paper 1 | Specialty Materials 1        │
│ [Explore Applications] [RFQ]    │ neutral motif; no evidence image       │
├──────────────────────────────────────────────────────────────────────────┤
│ APPLICATION-FIRST NAVIGATION                                            │
│ Choose an Application Path + real-length introduction                    │
│ ┌──────────────────────────────┐ ┌─────────────────────────────────────┐ │
│ │ Coatings — 7                 │ │ Plastics — 7                       │ │
│ │ seven grade rows/chips       │ │ seven grade rows/chips             │ │
│ │ [Explore Coatings]           │ │ [Explore Plastics]                 │ │
│ └──────────────────────────────┘ └─────────────────────────────────────┘ │
│ ┌──────────────────────────────┐ ┌─────────────────────────────────────┐ │
│ │ Masterbatch — 6              │ │ Printing Inks — 3                  │ │
│ │ six grade rows/chips         │ │ three grade rows/chips             │ │
│ │ [Explore Masterbatch]        │ │ [Explore Printing Inks]            │ │
│ └──────────────────────────────┘ └─────────────────────────────────────┘ │
│ ┌──────────────────────────────┐ ┌─────────────────────────────────────┐ │
│ │ Paper — 1                    │ │ Specialty Materials — 1            │ │
│ │ M-350                        │ │ CR-901                              │ │
│ │ [Explore Paper]              │ │ [View CR-901] — no Application page│ │
│ └──────────────────────────────┘ └─────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────┤
│ USE THE HUB AS A STARTING POINT — three equal guidance steps             │
├──────────────────────────────────────────────────────────────────────────┤
│ PROCESS CLASSIFICATION SEPARATELY                                        │
│ [Chloride — 8] [Sulfate — 4] [Vapor-phase oxidation — CR-901]           │
├──────────────────────────────────────────────────────────────────────────┤
│ BEFORE YOU SELECT A GRADE — four compact evaluation checks               │
├──────────────────────────────────────────────────────────────────────────┤
│ CONTINUE REVIEW — Products | Documents | Markets                         │
├──────────────────────────────────────────────────────────────────────────┤
│ BUYER QUESTIONS — one expanded + four collapsed                          │
├──────────────────────────────────────────────────────────────────────────┤
│ FINAL RFQ BAND — body + qualification + [Request a Quote]                │
├──────────────────────────────────────────────────────────────────────────┤
│ Footer                                                                   │
└──────────────────────────────────────────────────────────────────────────┘
```

### Desktop geometry

| Module | Geometry | Required behavior |
|---|---|---|
| Header | 72px min | Applications current uses bold + structural marker + `CURRENT`; Home visible |
| Hero | 560–640px | Left content 7 columns; right motif 5; actions horizontal |
| Application card grid | 2 columns, 24px gap | Cards have content-driven equal row height; never truncate grade list |
| Grade list | 2–4 chips per row or compact rows | All exact names readable; order unnumbered |
| Use guide | 3 equal cards | No progress bar, score or completion state |
| Process | 3 equal cards | All exact grade sets readable; M-2377 absent |
| Evaluation | 4 equal cells | Text-first, no proof-like certification graphics |
| Support | 3 equal atomic cards | Only complete live cards; grid closes at 2/1 |
| Buyer Questions | 1 expanded + 4 collapsed | Expansion state not color-only |
| Final RFQ | dark terminal band | 0px when unavailable |

## 4. 390px Route-safe Full-page Frame

```text
┌──────────────────────────────┐
│ TiO2 Malaysia         [Menu] │ 56
│ Home > Applications          │
│ APPLICATIONS HUB             │
│ Explore Titanium Dioxide     │
│ by Application               │
│ body                         │
│ qualification                │
│ [Explore Applications]       │
├──────────────────────────────┤
│ CHOOSE AN APPLICATION PATH   │
│ intro                        │
│ [Coatings — 7]               │
│ 7 grade chips / no CTA       │
│ [Plastics — 7]               │
│ 7 grade chips / no CTA       │
│ [Masterbatch — 6]            │
│ [Printing Inks — 3]          │
│ [Paper — 1]                  │
│ [Specialty Materials — 1]    │
│ no child/fallback route      │
├──────────────────────────────┤
│ 3 use-guide cards            │
├──────────────────────────────┤
│ Chloride — 8                 │
│ Sulfate — 4                  │
│ Vapor-phase oxidation — 1    │
├──────────────────────────────┤
│ 4 evaluation checks          │
├──────────────────────────────┤
│ Buyer Questions 1 + 4        │
├──────────────────────────────┤
│ Footer                       │
└──────────────────────────────┘
```

Route-safe Mobile removes Header RFQ, Hero RFQ, five child-card CTAs, Grade CTAs, Support Paths and Final RFQ. It does not remove the approved neutral lists. Removed surfaces reserve 0px and leave one 24–32px logical section gap.

## 5. Mobile Card Contract

- Outer width: 358px logical.
- Card inner padding: 16px.
- Card gap: 12px within a section; section gap: 56–72px.
- Card heading: 20–22px; body: minimum 16px logical; label: minimum 13px.
- Grade chips: content-driven wrap; minimum 32px height when non-interactive, 44px when linked.
- CTA: minimum 44px logical; full-width only when needed for stable wrap.
- `Specialty Materials` and `Vapor-phase oxidation` wrap to two lines without reducing type size.
- The final card CTA must not be followed by a decorative blank band.

## 6. Application Card States

| State | Structure | Public wording |
|---|---|---|
| Default complete | Heading + count + full exact grade set | `Grades to Review — N` |
| Focus | 2px Navy/Teal focus ring plus offset | No copy change |
| Hover | Border/arrow emphasis only | No elevation implying preferred category |
| Route live | One approved CTA appears | Five owner CTA labels or `View CR-901` |
| Route unavailable | CTA and dependent sentence absent | No `Coming soon`, disabled button or fallback |
| Grade route live | Grade name may link | Accessible name includes grade |
| Grade route unavailable | Plain text | No empty link shell |
| Long-content | Chips wrap and card grows | No clipping, truncation or carousel |

Every application card has the same visual tier. Count size and card position must not imply business priority.

## 7. Freeze and Negative-state Proof

- M-2377 appears zero times in Application cards, Process cards, Metadata, ALT and Schema plans.
- M-996 and M-2196 both appear in Coatings and Sulfate with identical chip style, order weight and interaction; their independent `comparison_hold` never invalidates the verified Application/Process mapping.
- No `versus`, `better`, `recommended`, `ideal`, `equivalent`, `replacement` or selection reason appears.
- A missing relationship produces no public row and no negative label. There is no `not suitable` state.
- Internal hard-gate and comparison fields exist only in the non-public review annotation.

## 8. Process State Board

| State | Desktop | Mobile |
|---|---|---|
| Classification only | 3 complete equal cards | 3 stacked cards |
| Route links available | One qualified CTA per corresponding complete card | CTA stacks below grade list |
| Route links unavailable | CTA 0px; classification remains | CTA 0px; no reserved gap |
| Long names | Wrap inside card | Two-line wrap; no horizontal scroll |

## 9. Mobile Menu-open State

- Order: Home, Markets, Products, Applications, Documents, Resources, About, conditional Request a Quote.
- Applications current: bold text + `CURRENT` + structural left rule/underline.
- Home remains visible text.
- RFQ unavailable: item absent; no disabled placeholder.
- Menu close target and each item: minimum 44px logical.

## 10. Tablet Logic

- At 1024px, Hero remains split; Application cards remain 2-column.
- At 768px, Hero stacks and Application cards become one column before grade text becomes compressed.
- Process cards use 2+1 at 1024px and one column at 768px.
- No breakpoint hides an approved grade relationship.

## 11. Accessibility and Overflow States

- Keyboard order follows visible order; no focus enters hidden CTA surfaces.
- Each linked grade has a unique accessible name such as `View M-350 grade details`.
- Card count is not the only indicator; the full list is readable by assistive technology.
- Expanded accordion uses `aria-expanded`; indicator includes plus/minus and text structure.
- Current navigation and selected/focus states are not color-only.
- 200% zoom and 390px long-label tests produce no horizontal overflow.

## 12. Gate 3 Self-check

- [x] Desktop 1440px and 390px structures are complete.
- [x] All six Application sets and all 25 relationships are visible.
- [x] All 13 Process classifications are visible.
- [x] M-2377 hard gate and M-996/M-2196 comparison hold are preserved.
- [x] Five child-page keyword owners remain card-level navigation only.
- [x] Specialty Materials does not create a sixth Application route.
- [x] Full-route and route-safe states close without empty shells.
- [x] Real-length copy and long labels were used.
- [x] 44px touch, focus, menu-current and accordion states are specified.
- [x] Gate 3 remains a draft for project-control review.

## 13. Open Items and Record

| ID | Issue | Status |
|---|---|---|
| APP-R002 | Child routes provisional | OPEN; route-safe state is primary mobile proof |
| APP-R004 | M-996/M-2196 comparison hold | OPEN; equal visual treatment |
| R-M2377-TDS | M-2377 hard gate | OPEN_HARD_GATE; zero relation rendering |
| APP-R005 | Support/RFQ live state unknown | OPEN; atomic omission |
| G3-01 | Project-control Gate 3 approval | OPEN |

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial Desktop/Tablet/390px APP-000 wireframe with complete V0.2.1 sets and route states | `DRAFT_FOR_GATE_3_REVIEW` |
