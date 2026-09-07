# PRODUCT-000 Desktop and Mobile Wireframe Specification V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page name | Titanium Dioxide Products |
| URL | `/products/` |
| Gate | Gate 3 — Wireframe |
| Version | V0.1 |
| Date | 2026-08-29 |
| Status | `APPROVED_GATE_3_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Approved content baseline | `pages/products/04_planning/PRODUCT-000_CONTENT_ARCHITECTURE_V0.1.md` — `APPROVED_GATE_2_BASELINE` |
| Approved route baseline | `pages/products/02_analysis/PRODUCT-000_ROUTE_AUDIT_V0.1.md` — `APPROVED_ROUTE_GATE_BASELINE` |
| Approved evidence baseline | `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.1.md` — `APPROVED_GATE_1_BASELINE` |
| Review owner | Project control and quality review; user final approval |
| Approval record | 2026-08-29: project-control review PASS; user approved PRODUCT-000 Gate 3 and authorized Gate 4 visual-direction work only |
| Explicitly excluded | Gate 4 visual direction, Gate 5 full visual design, final colors, final imagery, code, CMS, testing, development handoff, deployment and publishing |

`WIREFRAME ONLY / NOT PRODUCTION / GATE 4–5 NOT APPROVED`

This is an annotated low-fidelity wireframe specification. It uses approved, real-length English copy to test hierarchy, wrapping, state removal and responsive behavior. Boxes, dimensions and gray values describe structure only; they do not establish final visual styling.

## 1. Gate 3 Design Decision

### 1.1 Chosen wireframe system

The page uses one stable narrative and two route modes:

1. **Full-route mode:** at least one Process route is available and RFQ is available. The full Hero/Meta copy may render; live Process cards and all RFQ surfaces may appear.
2. **Route-safe mode:** `FULL_ROUTE_COPY=false`. The Hero/Meta use the approved fallback. Unavailable Process cards are atomic and disappear; if no Process route is available, the entire Process module disappears. If RFQ is unavailable, every RFQ action, dependent sentence and `FINAL_RFQ` disappears.

The principal desktop frame shows full-route mode so every approved module can be reviewed in sequence. The principal 390px mobile frame shows the strict route-safe case—zero Process routes and RFQ unavailable—so the most failure-prone deletion and whitespace behavior is visible. Two cross-mode delta frames then prove the reverse viewport combinations: 390px full-route stacking and 1440px strict route-safe closure.

### 1.2 Content priority

| Priority | Content | Wireframe rule |
|---:|---|---|
| P1 | Page identity, application-first Selector, All 14 Grades | Always visible unless the Selector itself fails; All Grades always remains |
| P2 | Live Process routes, Evaluation Guide, Buyer Questions | Process is conditional; the guide and evidence-bounded answers remain |
| P3 | Live Support Paths and RFQ | Each route surface is conditional and leaves no empty shell |
| P4 | Global footer | Uses only registered/live destinations; no Legal/Privacy addition |

## 2. Viewports and Structural Grid

| View | Review width | Content width | Columns | Gutter | Outer margin | Structural intent |
|---|---:|---:|---:|---:|---:|---|
| Desktop | 1440px | 1200px max | 12 | 24px | 120px max | Dense B2B selection page; no ornamental empty regions |
| Tablet landscape | 1024px | 928px max | 8 | 20px | 48px | Preserve two-column Selector/result and two-column support where content fits |
| Tablet portrait | 768px | 704px max | 6 | 16px | 32px | Stack Hero and Selector result; use two-column option/grade groups |
| Mobile | 390px | 358px | 4 | 12px | 16px | Single narrative column; no horizontal scroll; touch-first controls |

Wireframe spacing tokens are structural estimates only: 8 / 12 / 16 / 24 / 32 / 48 / 64px. Gate 4 may refine rhythm without changing order, visibility rules or content priority.

## 3. Metadata and Hero State Strip

Metadata is not visible in the page canvas, so every review frame must carry a non-public annotation strip naming the active state.

| Mode | Condition | Title | H1 | Meta Description | Hero intro |
|---|---|---|---|---|---|
| Full-route | `PROCESS_AVAILABLE=true` and `RFQ_AVAILABLE=true` | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` | `Titanium Dioxide Pigment Grades for Industrial Applications` | `Explore 14 titanium dioxide pigment grades by application, process, or model, then review product details or request a quote from TiO2 Malaysia.` (144) | `Explore 14 titanium dioxide pigment grades by application, production process, or model. Use the guided paths to identify product pages for further technical evaluation.` (169) |
| Route-safe | `FULL_ROUTE_COPY=false` | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` | `Titanium Dioxide Pigment Grades for Industrial Applications` | `Browse 14 titanium dioxide pigment grades and review model pages for product details and technical evaluation with TiO2 Malaysia.` (129) | `Explore 14 titanium dioxide pigment grades and open model pages for further technical evaluation.` (97) |

Title and H1 never change between route modes. The full Meta and full Hero intro are an atomic state pair. The wireframe must not combine a full Meta with a route-safe Hero or the reverse.

## 4. Desktop Wireframe — Full-route Baseline (1440px)

### 4.1 Full-page annotated frame

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ REVIEW STRIP — FULL_ROUTE_COPY / PROCESS 2 LIVE / RFQ AVAILABLE / WIREFRAME ONLY             │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ HEADER 72                                                                                    │
│ Logo | Home | Markets | Products[current] | Applications | Documents | Resources | About    │
│                                                                    [Request a Quote]          │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMB 44                                                                                │
│ Home  >  Products                                                                           │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ HERO 420                                                                                     │
│ Titanium Dioxide Products                                                                   │
│ Titanium Dioxide Pigment Grades for Industrial Applications                                 │
│ Explore 14 titanium dioxide pigment grades by application, production process, or model.    │
│ Use the guided paths to identify product pages for further technical evaluation.             │
│ A grade listing is an evaluation starting point, not a guarantee of suitability for a        │
│ formulation or destination.                                                                  │
│ [Find the Right Grade]  [Request a Quote]                                                     │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ GRADE SELECTOR 620 — APPLICATION-FIRST                                                       │
│ Start with Your Application                                                                  │
│ Choose the closest application to see currently listed grades for technical evaluation.      │
│ A listed result is a starting point for evaluation, not a guarantee of suitability.           │
│                                                                                              │
│ Step 1 — Select an application                 │ Step 2 — Grades to Review                    │
│ [Coatings selected] [Plastics]                 │ M-350                                        │
│ [Masterbatch] [Printing Inks]                  │ Coatings                                     │
│ [Paper] [Specialty Materials] [Not Sure]       │ Chloride process                             │
│                                                │ Review M-350 against your formulation and    │
│                                                │ performance requirements.                    │
│                                                │ [View M-350]                                 │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ PROCESS ROUTES 340                                                                           │
│ Browse by Production Process                                                                │
│ Use these routes when a production-process classification is part of your sourcing           │
│ specification. Process classification does not determine application fit on its own.          │
│ ┌───────────────────────────────────┐  ┌───────────────────────────────────┐                   │
│ │ Chloride Process Titanium Dioxide│  │ Sulfate Process Titanium Dioxide │                   │
│ │ Browse grades classified under   │  │ Browse grades classified under   │                   │
│ │ the chloride process...          │  │ the sulfate process...           │                   │
│ │ [Explore Chloride Grades]        │  │ [Explore Sulfate Grades]         │                   │
│ └───────────────────────────────────┘  └───────────────────────────────────┘                   │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ ALL 14 GRADES 560                                                                            │
│ Browse All 14 Titanium Dioxide Grades                                                        │
│ Already know the model? Open its product page directly. Portfolio sections are navigation    │
│ aids, not suitability rankings.                                                               │
│ Coatings Grades — 6             │ Plastics & Masterbatch — 5 │ Additional — 2 │ Specialty — 1 │
│ M-350  M-510  M-896             │ M-200  M-108  M-210        │ M-52           │ CR-901        │
│ M-996  M-2196  M-895            │ M-340  M-886               │ M-2377         │               │
│ each: [View Grade]              │ each: [View Grade]         │ name/link only │ [View Grade]  │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ EVALUATION GUIDE 430                                                                         │
│ How to Evaluate a Titanium Dioxide Grade                                                     │
│ Use the product page and applicable technical information to check the following areas...     │
│ 1 Define the application → 2 Confirm whether process matters → 3 Review applicable technical  │
│ data → 4 Identify destination and document needs → 5 Validate in the buyer's system           │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ SUPPORT PATHS 320                                                                            │
│ Continue Your Procurement Review                                                            │
│ [Review by Application]   [Identify Required Documents]   [Review Destination Context]        │
│ each complete card renders only with its own live route                                      │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ BUYER QUESTIONS 560                                                                          │
│ Five visible answer rows; first expanded in baseline; accessible expand/collapse controls      │
│ [−] How do I choose a titanium dioxide pigment grade?                                        │
│     Start with the intended application, then use process classification if it is a required  │
│     sourcing parameter... A directory listing is not a suitability guarantee.                │
│ [+] Which grades are listed in this product center?                                          │
│ [+] What is the difference between application and process selection?                        │
│ [+] What if no grade is shown for my application?                                            │
│ [+] Does a listed grade guarantee suitability?                                               │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FINAL RFQ 280                                                                                │
│ Share your requirements                                                                      │
│ Request a Quote for Your Requirements                                                        │
│ Share the application, destination, estimated quantity and any grade you are reviewing...     │
│ Submitting a request starts a review. It does not confirm price, availability, documents,     │
│ sample approval or delivery timing.                                      [Request a Quote]    │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FOOTER 300 — registered/live destinations only; RFQ shown because RFQ_AVAILABLE=true          │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

Estimated full-route page height: 3946px including 24–48px inter-module spacing. This is a density target, not a Gate 4 visual measurement.

### 4.2 Desktop module geometry and priority

| Module | Estimated height | Desktop structure | Primary review point |
|---|---:|---|---|
| Header | 72px | One row; visible Home text; Products current state; one conditional RFQ action | No wrapping at 1200px content width |
| Breadcrumb | 44px | Single line | Matches `BreadcrumbList` |
| Hero | 420px | Copy width 7 columns; no evidence-bearing media required | Real 169-character intro wraps naturally; CTA row ends within 32px of content block |
| Selector | 620px | 5-column option panel + 7-column result panel | Selected and focus states remain distinguishable without color alone |
| Process Routes | 340px | Two equal atomic cards | No card may survive without its CTA |
| All Grades | 560px | Four directory groups sized 6/5/2/1 | 14 ordinary links; no 14-card marketing wall |
| Evaluation Guide | 430px | Five connected steps or five equal text cells | Full sentences wrap without truncation |
| Support Paths | 320px | Up to three complete live cards | Missing card closes the grid; no empty slot label |
| Buyer Questions | 560px | One expanded + four collapsed rows | Answer remains visible and readable; no FAQ Schema implication |
| Final RFQ | 280px | Copy 8 columns + action 4 columns | Entire module disappears when RFQ unavailable |
| Footer | 300px | Compact registered navigation groups | No unregistered Legal/Privacy link |

## 5. Mobile Wireframe — Strict Route-safe Baseline (390px)

### 5.1 Route-safe full-page frame

```text
┌──────────────────────────────────────┐
│ ROUTE-SAFE / PROCESS 0 / RFQ OFF     │
│ WIREFRAME ONLY                       │
├──────────────────────────────────────┤
│ HEADER 64                            │
│ Logo                       [Menu]    │
│ no RFQ action                         │
├──────────────────────────────────────┤
│ Home > Products                      │
├──────────────────────────────────────┤
│ Titanium Dioxide Products            │
│                                      │
│ Titanium Dioxide Pigment Grades      │
│ for Industrial Applications          │
│                                      │
│ Explore 14 titanium dioxide pigment  │
│ grades and open model pages for      │
│ further technical evaluation.        │
│                                      │
│ A grade listing is an evaluation     │
│ starting point, not a guarantee of   │
│ suitability for a formulation or     │
│ destination.                         │
│                                      │
│ [Find the Right Grade — full width]  │
│ ≤24px to section end                 │
├──────────────────────────────────────┤
│ Start with Your Application          │
│ Choose the closest application to    │
│ see currently listed grades for      │
│ technical evaluation. A listed       │
│ result is a starting point for       │
│ evaluation, not a guarantee of       │
│ suitability.                         │
│                                      │
│ Step 1 — Select an application       │
│ [Coatings]       [Plastics]          │
│ [Masterbatch]    [Printing Inks]     │
│ [Paper]          [Specialty Mat.]    │
│ [Not Sure — full row]                │
│                                      │
│ Step 2 — Grades to Review            │
│ Select an application to view        │
│ available evaluation paths.          │
├──────────────────────────────────────┤
│ PROCESS MODULE ABSENT                │
│ annotation only; 0px public height   │
├──────────────────────────────────────┤
│ Browse All 14 Titanium Dioxide       │
│ Grades                               │
│ Already know the model? Open its     │
│ product page directly. Portfolio     │
│ sections are navigation aids, not    │
│ suitability rankings.               │
│                                      │
│ [−] Coatings Grades — 6              │
│     M-350   [View Grade]             │
│     M-510   [View Grade]             │
│     M-896   [View Grade]             │
│     M-996   [View Grade]             │
│     M-2196  [View Grade]             │
│     M-895   [View Grade]             │
│ [+] Plastics & Masterbatch — 5       │
│ [+] Additional Grades — 2            │
│ [+] Specialty Grade — 1              │
│ all 14 links remain crawlable         │
├──────────────────────────────────────┤
│ How to Evaluate a Titanium Dioxide   │
│ Grade                                │
│ 1 Define the application             │
│ 2 Confirm whether process matters    │
│ 3 Review applicable technical data   │
│ 4 Identify destination and document  │
│   needs                              │
│ 5 Validate in the buyer's system     │
├──────────────────────────────────────┤
│ Continue Your Procurement Review     │
│ only complete live support cards     │
│ stack here; module absent if none     │
├──────────────────────────────────────┤
│ Buyer Questions                      │
│ [−] How do I choose a titanium       │
│     dioxide pigment grade?           │
│     Start with the intended          │
│     application, then use process    │
│     classification if it is a        │
│     required sourcing parameter...   │
│ [+] Which grades are listed in this  │
│     product center?                  │
│ [+] What is the difference between   │
│     application and process          │
│     selection?                       │
│ [+] What if no grade is shown for    │
│     my application?                  │
│ [+] Does a listed grade guarantee    │
│     suitability?                     │
├──────────────────────────────────────┤
│ FINAL RFQ ABSENT                     │
│ no CTA, no dependent sentence,       │
│ annotation only; 0px public height   │
├──────────────────────────────────────┤
│ FOOTER                               │
│ live registered destinations only    │
│ no RFQ, no Legal/Privacy additions    │
└──────────────────────────────────────┘
```

The words `PROCESS MODULE ABSENT` and `FINAL RFQ ABSENT` are review annotations outside the public frame. They occupy zero public height and must not appear to buyers.

### 5.2 Mobile height and whitespace controls

| Area | Estimated visible height in route-safe baseline | Control |
|---|---:|---|
| Closed header + breadcrumb | 104px | Menu-open is a separate state, not permanent page height |
| Hero | 520–580px | One full-width CTA; 16–24px after button, then next module |
| Selector default | 760–880px | Two-column options, Not Sure full width; result follows immediately |
| Process | 0px | No shell, separator or excess section gap when both routes are absent |
| All Grades | 620–780px with one group expanded | Accordion headers 48px minimum; model rows wrap without horizontal scroll |
| Evaluation Guide | 720–850px | Five vertical steps; no tiny multi-column text |
| Support Paths | 0–660px | Only complete live cards; full suppression if none |
| Buyer Questions | 760–940px with one answer expanded | One open answer in baseline; headings wrap to multiple lines |
| Final RFQ | 0px | No trailing blank band when unavailable |
| Footer | 460–620px | Compact grouped links; no unregistered entries |

The route-safe mobile page is expected to fall between 3900px and 5250px depending on live Support Paths and accordion state. Height is secondary to complete readable copy; repetition and unavailable shells are forbidden.

### 5.3 Cross-mode delta frame A — 390px full-route, Process 2, RFQ on

State assumptions for this annotated review frame:

- `FULL_ROUTE_COPY=true`;
- `PROCESS_CL_AVAILABLE=true` and `PROCESS_SU_AVAILABLE=true`;
- `RFQ_AVAILABLE=true`;
- all three Support Paths are assumed live only to test their maximum mobile stack;
- Selector is shown in a no-listed-grade state so its RFQ-dependent sentence and CTA are physically tested.

```text
┌──────────────────────────────────────┐
│ 390 FULL_ROUTE / PROCESS 2 / RFQ ON  │
│ review annotation; not public copy   │
├──────────────────────────────────────┤
│ HEADER — 64                          │
│ Logo               [Menu] [RFQ]      │
│ menu-open delta includes             │
│ “Request a Quote” as final row        │
├──────────────────────────────────────┤
│ BREADCRUMB — 40                      │
│ Home > Products                      │
├──────────────────────────────────────┤
│ HERO FULL COPY — 620–690             │
│ H1 wraps to 3–4 lines                │
│ 169-character full intro             │
│ qualification note                   │
│ [Find the Right Grade — full width]  │
│ 12 gap                               │
│ [Request a Quote — full width]       │
│ 24 max to module end                 │
├────────────── 32 module gap ─────────┤
│ SELECTOR NO-RESULT — 820–920         │
│ seven options in 2 columns           │
│ selected option + focus-safe state   │
│ No grade is listed for this          │
│ application. Browse all grades to    │
│ continue your product review.        │
│ You can also share your requirements │
│ for technical review.                │
│ [View All Grades — full width]       │
│ 12 gap                               │
│ [Request a Quote — full width]       │
│ 24 max to module end                 │
├────────────── 32 module gap ─────────┤
│ PROCESS ROUTES — 680–760             │
│ heading + real-length intro           │
│ [Chloride complete card — 250–280]   │
│ body wraps; CTA full width            │
│ 24 card gap                           │
│ [Sulfate complete card — 250–280]    │
│ body wraps; CTA full width            │
│ 24 max after final CTA                │
├────────────── 32 module gap ─────────┤
│ ALL 14 GRADES — 620–780              │
│ one group expanded; three collapsed   │
├────────────── 32 module gap ─────────┤
│ EVALUATION GUIDE — 720–850           │
│ five vertical real-length steps       │
├────────────── 32 module gap ─────────┤
│ SUPPORT PATHS MAX STACK — 700–820    │
│ [Applications complete card]         │
│ 16 gap                               │
│ [Documents complete card]            │
│ 16 gap                               │
│ [Markets complete card]              │
│ 24 max after final CTA                │
├────────────── 32 module gap ─────────┤
│ BUYER QUESTIONS — 820–980            │
│ BQ-04 expanded; RFQ-only sentence:   │
│ You can also share your application  │
│ requirements through Request a Quote.│
│ remaining answers collapsed           │
├────────────── 32 module gap ─────────┤
│ FINAL RFQ — 460–540                  │
│ full approved H2/body/qualification  │
│ [Request a Quote — full width]       │
│ 24 max to module end                 │
├────────────── 32 module gap ─────────┤
│ FOOTER — 520–650                     │
│ registered/live links + RFQ item      │
└──────────────────────────────────────┘
```

Expected visible height: approximately 6400–7250px with one Grade group and BQ-04 expanded. The added height is the result of real copy and complete live paths, not decorative whitespace. There is no horizontal carousel, fixed-height crop or CTA followed by more than 24px of internal bottom space.

RFQ surfaces proven in this frame:

1. compact Header RFQ action;
2. Menu-open `Request a Quote` row;
3. Hero secondary CTA;
4. Selector no-result dependent sentence and CTA;
5. Buyer Question 4 RFQ-only sentence;
6. complete `FINAL_RFQ` module;
7. Footer RFQ item.

**One-Process-card delta:** if exactly one Process route is live, `FULL_ROUTE_COPY` remains true because RFQ is on and `PROCESS_AVAILABLE=true`. Keep the same full Meta/Hero. Remove the unavailable card and its 24px inter-card gap; retain the shared heading/intro and one complete 250–280px card. Expected Process module height becomes 400–470px, and All Grades moves upward by approximately 280–320px. No empty second slot or disabled card appears.

### 5.4 Cross-mode delta frame B — 1440px route-safe, Process 0, RFQ off, Support 0

State assumptions:

- `FULL_ROUTE_COPY=false`;
- both Process routes unavailable;
- `RFQ_AVAILABLE=false` and no fallback approved;
- all Support Paths unavailable;
- the Selector remains available and All Grades contains all 14 links.

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ 1440 ROUTE_SAFE / PROCESS 0 / RFQ OFF / SUPPORT 0 — review annotation                       │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ HEADER 72                                                                                    │
│ Logo | Home | Markets | Products[current] | Applications | Documents | Resources | About    │
│ no RFQ item; About closes the navigation row                                                  │
├────────────── 24 gap ─────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMB 44 — Home > Products                                                               │
├────────────── 32 gap ─────────────────────────────────────────────────────────────────────────┤
│ HERO ROUTE-SAFE 360–390                                                                      │
│ H1 + 97-character route-safe intro + qualification note                                       │
│ [Find the Right Grade]                                                                        │
│ no secondary CTA; 32 max to Hero boundary                                                     │
├────────────── 48 module gap ──────────────────────────────────────────────────────────────────┤
│ SELECTOR 620                                                                                  │
│ options + selected/default/result state; no RFQ-dependent sentence or CTA                     │
├────────────── 48 module gap ──────────────────────────────────────────────────────────────────┤
│ PROCESS 0 — PUBLIC HEIGHT 0                                                                   │
│ review annotation outside public frame; no heading, intro, divider or reserved 340px band     │
├────────────── effective 48 gap only ──────────────────────────────────────────────────────────┤
│ ALL 14 GRADES 560                                                                             │
│ four 6/5/2/1 groups; all approved links                                                       │
├────────────── 48 module gap ──────────────────────────────────────────────────────────────────┤
│ EVALUATION GUIDE 430                                                                          │
│ five real-length steps; no unavailable owner CTA                                               │
├────────────── 48 module gap ──────────────────────────────────────────────────────────────────┤
│ SUPPORT 0 — PUBLIC HEIGHT 0                                                                   │
│ no section heading, cards, divider, empty label or reserved 320px band                        │
├────────────── effective 48 gap only ──────────────────────────────────────────────────────────┤
│ BUYER QUESTIONS 560                                                                           │
│ BQ-04 ends after directory guidance; no RFQ-only sentence                                     │
├────────────── 48 module gap ──────────────────────────────────────────────────────────────────┤
│ FINAL RFQ 0 — PUBLIC HEIGHT 0                                                                 │
│ no kicker, H2, body, qualification, CTA, divider or reserved 280px band                       │
├────────────── effective 48–64 gap only ───────────────────────────────────────────────────────┤
│ FOOTER 280–300                                                                                │
│ registered/live destinations only; no RFQ or Legal/Privacy additions                          │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

Expected public height: approximately 3000–3250px, depending on the selected Selector/BQ state. The following closure checks are mandatory:

- Selector → All Grades uses one normal 48px module gap; the removed Process module contributes 0px.
- Evaluation Guide → Buyer Questions uses one normal 48px module gap; the removed Support module contributes 0px.
- Buyer Questions → Footer uses one 48–64px terminal gap; the removed Final RFQ contributes 0px.
- Header, Hero, Selector, BQ-04 and Footer contain no RFQ label, promise, disabled control or punctuation remnant.
- Route-safe Meta (129) and Hero intro (97) are paired; the page makes no Process-navigation or quote-request claim.
- Desktop grid reflows adjacent public modules upward; no empty 340px/320px/280px band, orphan separator or blank card remains.

## 6. Mobile Menu-open State

### 6.1 RFQ available

```text
┌──────────────────────────────────────┐
│ Logo                    [Close ×]    │
├──────────────────────────────────────┤
│ Home                                 │
│ Markets                              │
│ Products — current                   │
│ Applications                         │
│ Documents                            │
│ Resources                            │
│ About                                │
│ Request a Quote                      │
└──────────────────────────────────────┘
```

### 6.2 RFQ unavailable

The same menu renders with `Request a Quote` removed. `About` becomes the last item; there is no divider, blank row or disabled RFQ label. Home remains visible and is not replaced by the Logo.

Menu behavior contract:

- Opening moves focus to the Close control or first menu item according to the approved global Header behavior.
- Focus is trapped within the open menu until it closes.
- Escape closes the menu and returns focus to Menu.
- Each row has a minimum 44px touch target.
- `Products — current` has text/state information in addition to any visual treatment.
- Long localized labels must wrap; the menu never scrolls horizontally.

## 7. Selector State Board

All states use the fixed section copy:

- H2: `Start with Your Application`
- Intro: `Choose the closest application to see currently listed grades for technical evaluation. A listed result is a starting point for evaluation, not a guarantee of suitability.`
- Labels: `Step 1 — Select an application` and `Step 2 — Grades to Review`

### 7.1 Default

```text
[Coatings] [Plastics] [Masterbatch] [Printing Inks] [Paper] [Specialty Materials] [Not Sure]

Step 2 — Grades to Review
Select an application to view available evaluation paths.
```

No grade is preselected or displayed.

### 7.2 Coatings selected → M-350

```text
[Coatings — selected]

M-350
Coatings
Chloride process
Review M-350 against your formulation and performance requirements.
[View M-350]
```

### 7.3 Printing Inks selected → M-350

```text
[Printing Inks — selected]

M-350
Printing Inks
Chloride process
Review M-350 against your formulation and performance requirements.
[View M-350]
```

### 7.4 No-listed-grade state

Used for Plastics, Masterbatch, Paper and Specialty Materials.

Base, always visible:

`No grade is listed for this application. Browse all grades to continue your product review.`

Base action: `View All Grades`.

When `RFQ_AVAILABLE=true`, append the sentence `You can also share your requirements for technical review.` and the CTA `Request a Quote`. When false, both are absent. An Application link may appear only when its own Page ID is approved and live.

### 7.5 Not Sure

Base, always visible:

`Start with the full grade directory and open model pages for further technical evaluation.`

Base action: `View All Grades`.

When `RFQ_AVAILABLE=true`, append `You can also share your formulation, process, destination and document requirements for review.` and `Request a Quote`. When false, both are absent.

### 7.6 Interaction failure / no-script

```text
The guided selector is unavailable. Use the full grade directory below.
[View All Grades]
```

The failed interactive panel is replaced by this compact state. All 14 Grade links remain available in All Grades; no broken result box or indefinite loading treatment remains.

### 7.7 Selector interaction and accessibility

- Options behave as one keyboard-operable single-selection group.
- Default has no selected option. Arrow-key or Tab behavior must follow the interaction pattern selected at development handoff; Gate 3 requires a visible focus target and a persistent selected label.
- Focus and selected are two distinct states; neither relies on color alone.
- Result updates are announced without moving keyboard focus unexpectedly.
- On mobile, options use two columns where labels fit; `Specialty Materials` may wrap, and `Not Sure` occupies a full row.
- Result content follows the options in reading order and never appears beside them at 390px.
- No result state shows internal status, Evidence ID or workflow language.

## 8. Process Route State Board

Shared module copy when at least one card is present:

- H2: `Browse by Production Process`
- Intro: `Use these routes when a production-process classification is part of your sourcing specification. Process classification does not determine application fit on its own.`

### 8.1 Two routes live

Render both complete cards:

- `Chloride Process Titanium Dioxide` / `Browse grades classified under the chloride process and continue to the relevant product pages.` / `Explore Chloride Grades`
- `Sulfate Process Titanium Dioxide` / `Browse grades classified under the sulfate process and continue to the relevant product pages.` / `Explore Sulfate Grades`

### 8.2 One route live

Render only the complete live card. On desktop it occupies 6–8 columns rather than stretching into a visually dominant pseudo-Hero. On mobile it occupies full width. No empty partner card, disabled destination or “coming soon” label appears.

### 8.3 Zero routes live

Do not render the module heading, intro, card, divider or module padding. The transition is directly from Selector to All Grades. The public height is 0px.

## 9. All 14 Grades Wireframe Contract

### 9.1 Fixed directory

| Group | Visible grade links | Count |
|---|---|---:|
| Coatings Grades | M-350, M-510, M-896, M-996, M-2196, M-895 | 6 |
| Plastics & Masterbatch Grades | M-200, M-108, M-210, M-340, M-886 | 5 |
| Additional Grades | M-52, M-2377 | 2 |
| Specialty Grade | CR-901 | 1 |
| Total | 14 unique Grade names and approved URLs | 14 |

Approved link contract used by every desktop/tablet/mobile directory state:

| Grade | Approved URL | Public directory fields |
|---|---|---|
| M-350 | `/products/m-350/` | Name + `View Grade` link |
| M-510 | `/products/m-510/` | Name + `View Grade` link |
| M-896 | `/products/m-896/` | Name + `View Grade` link |
| M-996 | `/products/m-996/` | Name + `View Grade` link; no M-2196 difference |
| M-2196 | `/products/m-2196/` | Name + `View Grade` link; no M-996 difference |
| M-895 | `/products/m-895/` | Name + `View Grade` link |
| M-200 | `/products/m-200/` | Name + `View Grade` link |
| M-108 | `/products/m-108/` | Name + `View Grade` link |
| M-210 | `/products/m-210/` | Name + `View Grade` link |
| M-340 | `/products/m-340/` | Name + `View Grade` link |
| M-886 | `/products/m-886/` | Name + `View Grade` link |
| M-52 | `/products/m-52/` | Name + `View Grade` link |
| M-2377 | `/products/m-2377/` | Name + approved link only; no other public field |
| CR-901 | `/products/cr-901/` | Name + `View Grade` link |

Desktop uses four directory groups, not 14 promotional cards. Tablet uses two columns. Mobile uses accessible group expand/collapse controls; at least one group is shown expanded in review frames to test six-row density. Collapsed presentation must not remove the 14 links from the initial crawlable content contract.

M-2377 shows only `M-2377` and its approved link action. It has no process, application, recommendation, difference, badge, qualifier or empty metadata row. M-996 and M-2196 are adjacent neutral entries with identical structural treatment and no comparison or ordering explanation.

Long-link behavior:

- Grade name and `View Grade` may wrap into two lines but never overlap.
- Minimum row target is 44px.
- No horizontal carousel is permitted.
- Expanded group control exposes `aria-expanded` intent in the later handoff specification; Gate 3 visually distinguishes open/closed with text or icon plus state, not color alone.

## 10. Evaluation Guide — Real-length Copy Test

The wireframe must allocate enough vertical space for all five approved steps:

1. **Define the application** — `Record the resin or material system, end use, processing conditions and performance targets that the grade must be evaluated against.`
2. **Confirm whether process matters** — `Identify whether chloride or sulfate process classification is a required sourcing parameter. Process classification does not replace application testing.`
3. **Review applicable technical data** — `Compare the product information supplied for the grade you are evaluating. Do not infer missing values from another grade or an older source.`
4. **Identify destination and document needs** — `State the destination market and the technical, quality, compliance or origin documents you need. Scope and availability must be confirmed for the applicable request.`
5. **Validate in the buyer's system** — `Confirm the candidate through the buyer's own formulation, processing and qualification process before making a purchase decision.`

Optional Applications/Documents actions appear only when their routes are approved and live. Removing an action does not remove or alter the instructional step.

## 11. Support Path State Rules

Each live card is atomic:

- **Review by Application** — `Review selection factors by end use and continue to listed product evaluation paths.` — `Explore Applications`
- **Identify Required Documents** — `Identify the technical, quality, compliance or origin document you need. Scope and availability are confirmed for the applicable request.` — `Explore Documents`
- **Review Destination Context** — `Review destination-market procurement context without assuming local availability, registration or regulatory acceptance for a grade.` — `Explore Markets`

Three/two/one live destinations produce three/two/one complete cards and close the grid. Zero live destinations suppress the entire module. No card remains as information-only content after its CTA is removed.

## 12. Buyer Questions — Real-length Expanded States

One answer may be expanded at a time in the baseline frame; all five questions remain reachable. Full approved copy used for layout testing:

1. **How do I choose a titanium dioxide pigment grade?**

   `Start with the intended application, then use process classification if it is a required sourcing parameter. Open the grade page to review the available product information and confirm fit against your formulation, processing conditions, destination and document needs. A directory listing is not a suitability guarantee.`

2. **Which grades are listed in this product center?**

   `The product center links to 14 grade pages: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.`

3. **What is the difference between application and process selection?**

   `Application selection starts with the intended end use. Process selection organizes grades by chloride or sulfate classification. They answer different procurement questions, and neither replaces formulation testing or review of the applicable product information.`

4. **What if no grade is shown for my application?**

   Base: `If no grade appears, browse the full grade directory and review the relevant model pages. Do not treat an application category alone as a product recommendation.`

   RFQ-only addition: `You can also share your application requirements through Request a Quote.`

5. **Does a listed grade guarantee suitability?**

   `No. A listed grade is a candidate for technical evaluation. The buyer should confirm product information, formulation fit, processing conditions, destination requirements and any required documents before qualification.`

When RFQ is unavailable, the RFQ-only sentence in answer 4 is absent. The answer ends after the directory guidance without leftover conjunction or empty link row. Buyer Questions are visible answer content but do not imply `FAQPage` or `QAPage` Schema.

## 13. RFQ State Board

### 13.1 RFQ available

Header, Hero, eligible Selector states, Buyer Question 4, Final RFQ and Footer may show their approved RFQ surface. Final RFQ copy:

- Kicker: `Share your requirements`
- H2: `Request a Quote for Your Requirements`
- Body: `Share the application, destination, estimated quantity and any grade you are reviewing. The RFQ page may carry only the application or grade you explicitly selected.`
- Qualification note: `Submitting a request starts a review. It does not confirm price, availability, documents, sample approval or delivery timing.`
- CTA: `Request a Quote`

### 13.2 RFQ unavailable

All of the following disappear in the same state update:

- Header RFQ item;
- Hero secondary CTA;
- no-result and Not Sure RFQ-dependent sentences and CTA;
- Buyer Question 4 RFQ-only sentence;
- entire `FINAL_RFQ`, including kicker, H2, body, qualification note, CTA and spacing;
- Footer RFQ item.

No approved fallback exists in V0.1. If one is approved later, it must use its exact approved surface, destination and wording; it does not reuse `Request a Quote`, unlock full-route Metadata or restore `FINAL_RFQ`.

## 14. Tablet Responsive Logic

| Module | 1024px landscape | 768px portrait |
|---|---|---|
| Header | Keep desktop navigation if labels fit without compression below touch/readability limits; otherwise use Menu pattern | Menu pattern; current page preserved |
| Hero | 7/5 copy-to-empty-structure ratio; CTA row | Single column; CTA row may wrap |
| Selector | Options 3 columns / result 5 columns | Stack options above result; options 2 columns |
| Process | Two equal cards or one 6-column card | Two stacked complete cards; one full-width card |
| All Grades | Four groups in 2×2 grid | Two columns; group content wraps naturally |
| Evaluation Guide | Five compact steps, 3+2 | Single vertical list or 2+2+1 only if full copy remains readable |
| Support Paths | Three cards or 2+1 balanced grid | Stack complete cards |
| Buyer Questions | Full-width rows, answer max readable line length | Full-width rows; multi-line headings |
| Final RFQ | Copy/action split | Single column; CTA within 24px of qualification note |

Tablet does not introduce horizontal carousels. Breakpoint selection belongs to development handoff; Gate 3 fixes the reflow behavior, not framework values.

## 15. Focus, Selection, Long-copy and Overflow States

| State | Wireframe treatment | Acceptance requirement |
|---|---|---|
| Keyboard focus | 2px structural outline with 2px separation annotation | Visible on every link, option, menu control and accordion header; final color deferred |
| Selector selected | Persistent check/radio marker plus `Selected` annotation | Distinct from focus and not color-only |
| Accordion open | Minus/chevron-up plus expanded content | Control remains at least 44px high |
| Accordion closed | Plus/chevron-down plus hidden visual content | Label remains complete; crawlability contract preserved for Grades |
| Long H1 | Wrap naturally to 2 desktop lines or 3–4 mobile lines | No clipping or ellipsis |
| Long answer | Natural block flow | No fixed-height crop; next row moves down |
| Long CTA | Wrap inside button if needed | No text overflow; target remains at least 44px high |
| Missing conditional module | Adjacent modules close the gap | No double divider, orphan heading or button-after blank field |
| Selector failure | Compact failure sentence + All Grades action | No spinner-only or empty panel |

Global overflow checks:

- 390px viewport has no horizontal page scroll.
- Minimum public side margin is 16px.
- No core path depends on hover.
- Button groups wrap vertically before shrinking text.
- A final CTA is followed by no more than 24–32px structural space before its module boundary.
- The removal of Process or Final RFQ does not leave a desktop-height blank band on mobile.

## 16. Module Visibility Matrix

| Module | Always | Route condition | Zero-state public behavior |
|---|---|---|---|
| Header shell | Yes | Individual destinations, including RFQ, require their own live state | Missing item closes navigation order |
| Breadcrumb | Yes | Home route required at release | Release blocker if Home cannot resolve |
| Hero | Yes | Full vs route-safe intro/Meta; RFQ secondary conditional | Route-safe Hero remains complete |
| Selector | Yes when interaction works | Result relations fixed at 2 render / 19 do not render | Failure state routes to All Grades |
| Process Routes | No | Per-card route approved + live | Zero routes: module absent |
| All Grades | Yes | 14 fixed Grade links must resolve before release | Missing/incorrect count blocks release |
| Evaluation Guide | Yes | Optional owner actions conditional | Instructional copy remains |
| Support Paths | No | Each destination approved + live | Zero destinations: module absent |
| Buyer Questions | Yes when approved copy exists | RFQ-only sentence conditional | Base answers remain complete |
| Final RFQ | No | `RFQ_AVAILABLE=true` only | Entire module absent |
| Footer | Yes | Only registered/live destinations | No placeholder or unregistered link |

## 17. Gate 3 Self-check

### A. Governance and scope

- [x] Gate 1 Evidence Audit, Route Audit and Gate 2 Content Architecture approvals are recorded.
- [x] Page lifecycle is `DESIGN_IN_REVIEW`.
- [x] R-009, G12-01 and G12-02 are closed.
- [x] R-002, R-003 and R-004 remain open hard gates.
- [x] Gate 4/5, development handoff and publishing are not approved.

### B. Real-length content

- [x] Full and route-safe Title/H1/Meta/Hero states use approved copy.
- [x] Selector, Evaluation Guide, Support Paths, Buyer Questions and Final RFQ use approved English copy rather than short lorem ipsum.
- [x] Long H1, long answers and CTA wrapping have explicit behavior.

### C. Selector

- [x] Default, Coatings→M-350, Printing Inks→M-350, no-result, Not Sure and interaction-failure states are defined.
- [x] Only two M-350 relationships render; no new grade relationship is introduced.
- [x] RFQ-dependent sentences and CTAs disappear with RFQ unavailable.

### D. Process and routes

- [x] Process 2/1/0 live-route states are defined.
- [x] Cards are atomic; zero routes removes the whole module and public height.
- [x] Support cards follow the same no-orphan-route rule.

### E. Product directory and freezes

- [x] All 14 Grade names are present in 6/5/2/1 groups.
- [x] M-2377 is limited to neutral name and approved link action.
- [x] M-996/M-2196 have no difference, ordering reason or comparison.
- [x] Mobile group expansion is accessible and does not replace the crawlable-link contract.

### F. RFQ and metadata

- [x] RFQ available/unavailable surfaces are enumerated as one synchronized state.
- [x] Full-route copy requires Process and RFQ availability.
- [x] Route-safe copy claims only the 14-grade directory and product-detail review.
- [x] No unapproved fallback is invented.

### G. Responsive and accessibility

- [x] Desktop, 1024px/768px Tablet logic and 390px Mobile are covered.
- [x] A 390px full-route delta frame proves Process 2/1, maximum Support Paths, all RFQ surfaces, real-copy wrapping and CTA bottom-space behavior.
- [x] A 1440px strict route-safe delta frame proves Process 0, Support 0 and RFQ-off module closure without desktop blank bands.
- [x] Mobile menu open states cover RFQ available and unavailable.
- [x] No horizontal carousel or required hover interaction is introduced.
- [x] Focus, selected, expanded/collapsed and failure states are distinguishable without color alone.
- [x] Touch targets, long text, button-after whitespace and conditional-module gap closure are specified.

### H. Visual boundary

- [x] No final color, image style, typography family, shadow, radius, illustration or high-fidelity component is locked.
- [x] No image asset was generated or treated as evidence.
- [x] No code, CMS, test, deployment or development change is part of this artifact.

## 18. Open Gate Items

| Review ID | Level | Gate 3 effect | Status |
|---|---|---|---|
| R-002 | IMPORTANT | Keeps 19 unsupported Selector relations absent; no impact on approved state layouts | OPEN |
| R-003 | IMPORTANT | Wireframes must retain every route-dependent removal state; final route resolution remains blocked | OPEN |
| R-004 | IMPORTANT | M-2377 and M-996/M-2196 frozen fields remain absent | OPEN |
| G3-01 | BLOCKING | Gate 3 wireframe had not received project-control and user approval | Project-control review PASS and user approval recorded 2026-08-29 | CLOSED |
| G3-02 | IMPORTANT | Reverse viewport/state combinations lacked annotated layout proof | Delta frames passed project-control review and user approved Gate 3 on 2026-08-29 | CLOSED |

## 19. Review and Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Initial PRODUCT-000 desktop, tablet-response and 390px mobile low-fidelity wireframe; includes full-route/route-safe, Selector, Process 2/1/0, RFQ and accessibility state boards | Draft for Gate 3 project-control review |
| V0.1 review revision | 2026-08-29 | Added G3-02 reverse-combination delta frames with actual module order, height/gap estimates, mobile full-route maximum stacking, one-Process-card difference and desktop strict route-safe closure; self-check 38 PASS / 0 FAIL | G3-02 project-control review PASS; Gate 3 pending user approval |
| V0.1 approval record | 2026-08-29 | Project-control review PASS and user approval; G3-01/G3-02 closed; Gate 4 visual-direction work authorized; R-002/R-003/R-004 remain open | Approved Gate 3 baseline; Gate 5 not authorized |

Gate 3 is approved. Gate 4 visual-direction work is authorized and must be submitted for project-control and user review. Gate 5 full visual design remains unauthorized until Gate 4 receives separate approval.
