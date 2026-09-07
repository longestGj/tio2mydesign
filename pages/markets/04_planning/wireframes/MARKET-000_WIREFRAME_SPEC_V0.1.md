# MARKET-000 Desktop, Tablet and Mobile Wireframe Specification V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `MARKET-000` |
| Page name | Markets |
| URL | `/markets/` |
| Gate | Gate 3 — Wireframe |
| Version | V0.1 |
| Date | 2026-08-29 |
| Status | `APPROVED_GATE_3_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Approved content baseline | `pages/markets/04_planning/MARKET-000_CONTENT_ARCHITECTURE_V0.1.md` — `APPROVED_GATE_2_BASELINE` |
| Approved evidence baseline | `pages/markets/01_research/MARKET-000_GATE1_EVIDENCE_AUDIT_V0.1.md` — `APPROVED_GATE_1_BASELINE` |
| Approved route baseline | `pages/markets/02_analysis/MARKET-000_ROUTE_AUDIT_V0.1.md` — `APPROVED_ROUTE_GATE_BASELINE`; 22 units remain `NOT_VERIFIED_LIVE` |
| Approved localization baseline | `pages/markets/02_analysis/MARKET-000_BRAZIL_PTBR_LOCALIZATION_AUDIT_V0.1.md` — `APPROVED_LOCALIZATION_GATE_BASELINE`; `LOCALIZATION_HOLD / DO_NOT_RENDER` |
| Review owner | Project control and quality review; user final approval |
| Authorization record | 2026-08-30: project-control review PASS; user approved MARKET-000 Gate 3 and authorized Gate 4 visual-direction work only |
| Explicitly excluded | Gate 5 full visual design, final visual assets, code, CMS, testing, development handoff, deployment, publishing, Market child-page work and `D:\16Wordpress_nextjs` |

`APPROVED GATE 3 BASELINE / NOT PRODUCTION / GATE 4 DRAFT AUTHORIZED / GATE 5 NOT APPROVED`

This is an annotated low-fidelity wireframe specification. It uses approved real-length English copy to test hierarchy, wrapping, route removal, localization hold and responsive behavior. Boxes and size estimates establish structure only; they do not approve final color, typography, imagery, radius, shadow or component styling.

## 1. Gate 3 Design Decision

### 1.1 Chosen wireframe system

The page uses one fixed ten-module narrative and seven deterministic public states from the approved Gate 2 baseline.

1. The principal Desktop and 390px Mobile frames show `S0_CURRENT_ROUTE_SAFE`, because all 22 external units remain `NOT_VERIFIED_LIVE`.
2. Desktop shows the six EU country labels directly; Mobile defaults to a closed EU disclosure and has a separate expanded frame.
3. `S1`–`S6` are review-only delta frames. They demonstrate atomic addition and removal without claiming those routes, workflows or localized relations are currently available.
4. PT-BR remains absent from every current-state canvas. Its future relationship is shown only as a non-public annotation outside the Brazil block.
5. Missing media never creates a placeholder gap. The Hero remains complete as a copy-led layout.

### 1.2 Content priority

| Priority | Buyer task | Wireframe rule |
|---:|---|---|
| P1 | Understand the Hub and choose the correct market level | Header, Breadcrumb, Hero and Destination Selector remain structurally first |
| P2 | Distinguish EU overview, country destination and standalone markets | Choice Guide remains visible without any live route |
| P3 | Continue to Products, Applications, Documents or current trade information | Responsibility copy remains; each action appears only when its own condition passes |
| P4 | Read navigation answers and request review | Base Buyer Questions remain; RFQ surfaces appear only as one synchronized `S4` state |

### 1.3 State labels are not public copy

Every review frame begins with an annotation strip such as `S0 / WIREFRAME ONLY`. These strips, flag names, Page IDs and review notes must not be rendered in the public page.

## 2. Viewports and Structural Grid

| View | Review width | Content width | Columns | Gutter | Outer margin | Structural intent |
|---|---:|---:|---:|---:|---:|---|
| Desktop | 1440px | 1200px max | 12 | 24px | 120px max | Editorial market hierarchy; EU visibly dominant without becoming a separate site section |
| Tablet landscape | 1024px | 928px max | 8 | 20px | 48px | Preserve EU emphasis; reduce simultaneous columns before text becomes compressed |
| Tablet portrait | 768px | 704px max | 6 | 16px | 32px | Stack Hero and major content; allow two-column country and guidance groups only where readable |
| Mobile | 390px | 358px | 4 | 12px | 16px | Single narrative column; touch-first disclosure; zero horizontal scroll |

Structural spacing estimates use 8 / 12 / 16 / 24 / 32 / 48 / 64px. Gate 4 may refine rhythm but must not change module order, content priority, state removal or the EU Desktop/Mobile relationship.

## 3. Fixed Module Order

| Order | Module ID | S0 current behavior | Conditional addition |
|---:|---|---|---|
| 0 | GLOBAL_HEADER | Visible Home text; Markets current; no RFQ action | RFQ item appears only in `S4_RFQ_READY` |
| 1 | BREADCRUMB | `Home / Markets` | No state variation |
| 2 | HERO | Approved route-safe copy + local `Choose a Market` action | Secondary RFQ action only in S4 |
| 3 | DESTINATION_SELECTOR | Four market systems and EU country labels; no external actions; no PT-BR | Per-route actions in S1/S6; future PT-BR relation only in S5 |
| 4 | MARKET_CHOICE_GUIDE | Always visible | No route dependency |
| 5 | PROCUREMENT_PATHS | Three responsibility explanations; no CTA | Per-section CTA in S2/S6 |
| 6 | TRADE_BOUNDARY | Qualified boundary copy; no policy summary or CTA | One qualified current-update CTA per passing market in S3 |
| 7 | BUYER_QUESTIONS | Seven full base answers; Q7 base only | Q7 addition and GEO-A09 only in S4 |
| 8 | FINAL_RFQ | Entire module absent | Complete module only in S4/S6 |
| 9 | GLOBAL_FOOTER | Registered and verified destinations only; no RFQ | RFQ item only in S4/S6 |

## 4. Desktop Wireframe — Current S0 Route-safe Baseline (1440px)

### 4.1 Full-page annotated frame

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────┐
│ REVIEW STRIP — S0 CURRENT / 22 EXTERNAL UNITS NOT VERIFIED LIVE / PT-BR HOLD / WIREFRAME     │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ HEADER 72                                                                                    │
│ Logo | Home | Markets[current] | Products | Applications | Documents | Resources | About    │
│ no RFQ item; visible labels never become dead buttons                                        │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMB 44                                                                                │
│ Home  /  Markets                                                                            │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ HERO 360 — COPY LED / NO IMAGE REQUIRED                                                      │
│ Destination market navigation                                                               │
│ Choose Your Destination Market                                                              │
│ Start with the region or country where your procurement requirements need to be reviewed.   │
│ This hub explains which market path to choose and where product, application, document,      │
│ trade-update, and quotation questions belong.                                                │
│ [Choose a Market — local anchor]                                                             │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ DESTINATION SELECTOR 720                                                                     │
│ Destination market                                                                          │
│ Start with the market tied to your procurement requirements                                 │
│ Use the European Union overview for shared regional context, choose an EU country            │
│ destination when local context matters, or start directly with the UK, India, or Brazil.     │
│                                                                                              │
│ ┌──────────────────────────────────────────────────────────────┐ ┌──────────────────────────┐ │
│ │ EUROPEAN UNION — 8 columns                                   │ │ UNITED KINGDOM — 4 cols  │ │
│ │ Start with the European Union overview when you need shared  │ │ Use the United Kingdom   │ │
│ │ regional procurement context. Choose a country destination   │ │ path when the next       │ │
│ │ when the next step depends on local market context.          │ │ questions need UK context│ │
│ │                                                              │ │ no action                │ │
│ │ EU country destinations                                      │ └──────────────────────────┘ │
│ │ Germany   Italy   Spain                                      │ ┌──────────────────────────┐ │
│ │ Poland    Netherlands   Belgium                              │ │ INDIA — 4 columns         │ │
│ │ labels are plain text in S0; no arrows, dead hrefs or slots  │ │ India-specific context   │ │
│ │ no EU overview action                                        │ │ no action                │ │
│ └──────────────────────────────────────────────────────────────┘ └──────────────────────────┘ │
│                                                                ┌──────────────────────────┐ │
│                                                                │ BRAZIL — 4 columns        │ │
│                                                                │ English-language context  │ │
│                                                                │ no action; no PT-BR label │ │
│                                                                └──────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ MARKET CHOICE GUIDE 440                                                                      │
│ How to choose                                                                                │
│ Choose the level of market context you need                                                  │
│ The right starting point depends on whether your question is regional, destination-specific,│
│ or outside the European Union.                                                               │
│ [1 Start with the EU overview] [2 Choose an EU country] [3 Use a standalone market path]     │
│ Direct answer spans full width below the three guidance items.                               │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ PROCUREMENT PATHS 410                                                                        │
│ Next procurement check                                                                       │
│ Continue with the next procurement check                                                     │
│ Choosing a destination is one part of the review. Continue with the section that addresses   │
│ your next question.                                                                          │
│ [Review pigment grades] [Start from the application] [Plan document review]                  │
│ approved bodies measured in Appendix A; no CTA and no empty button row                       │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ TRADE BOUNDARY 260                                                                           │
│ Current information                                                                          │
│ Keep time-sensitive trade information separate                                              │
│ Market pages organize procurement context. Detailed trade-policy information belongs in     │
│ Resources, where official sources, scope, and update dates can be reviewed. This hub does    │
│ not state current duties, measures, or customs outcomes.                                     │
│ no policy summary; no update CTA                                                             │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ BUYER QUESTIONS 1120 — ALL BASE ANSWERS VISIBLE                                              │
│ Buyer questions                                                                              │
│ Questions buyers ask before choosing a market page                                           │
│ Q1 answer: 6 lines / 144px       Q2 answer: 4 lines / 96px                                  │
│ Q3 answer: 7 lines / 168px       Q4 answer: 4 lines / 96px                                  │
│ Q5 answer: 5 lines / 120px       Q6 answer: 5 lines / 120px                                 │
│ Q7 base: 5 lines / 120px; no sentence about carrying a selection                             │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FINAL RFQ — 0px / ENTIRE MODULE ABSENT                                                       │
├──────────────────────────────────────────────────────────────────────────────────────────────┤
│ FOOTER 300 — registered/verified destinations only; no unapproved office, legal or RFQ item  │
└──────────────────────────────────────────────────────────────────────────────────────────────┘
```

The former single-point height estimate is replaced by the measured 390px S0/S6 ranges in Appendix A. Desktop estimates below remain structural proportions only and are not Gate 4 visual measurements.

### 4.2 Desktop module geometry

| Module | Estimated height | Desktop structure | Primary review point |
|---|---:|---|---|
| Header | 72px | One row at 1200px content width | Home remains visible; removal of RFQ closes the row without a blank slot |
| Breadcrumb | 44px | Single line | Correct hierarchy and readable focus target |
| Hero | 360px | Copy occupies 7–8 columns; remaining area may be empty structure, never an implied route map | Real 35-word intro wraps without oversized empty media |
| Destination Selector | 720px | EU 8 columns; UK/India/Brazil stacked in 4 columns | Not a ten-card wall; all S0 labels are non-interactive rather than dead links |
| Choice Guide | 440px | Three equal guidance items + full-width direct answer | Complete approved copy remains readable without decorative cards becoming dominant |
| Procurement Paths | 410px | Three responsibility items | CTA removal also removes button spacing and icon treatment |
| Trade Boundary | 260px | Full-width qualified statement | No policy metric, badge or stale summary |
| Buyer Questions | 1120px | Two-column editorial answer grid may be used only if reading order remains Q1→Q7 | Answers are ordinary visible content, not a dashboard or Schema promise |
| Final RFQ | 0px in S0 | Completely absent | Trade Boundary/Buyer Questions/Footer close naturally |
| Footer | 300px | Compact registered navigation | No unregistered permanent links |

## 5. Mobile Wireframe — S0 with EU Collapsed (390px)

### 5.1 Full-page frame

```text
┌──────────────────────────────────────┐
│ S0 CURRENT / PT-BR HOLD / RFQ OFF    │
│ 390px / WIREFRAME ONLY               │
├──────────────────────────────────────┤
│ HEADER 64                            │
│ Logo                       [Menu]    │
│ no RFQ action                       │
├──────────────────────────────────────┤
│ Home / Markets                       │
├──────────────────────────────────────┤
│ Destination market navigation        │
│                                      │
│ Choose Your Destination Market       │
│                                      │
│ Start with the region or country     │
│ where your procurement requirements  │
│ need to be reviewed. This hub        │
│ explains which market path to choose │
│ and where product, application,      │
│ document, trade-update, and          │
│ quotation questions belong.         │
│                                      │
│ [Choose a Market — full width]       │
│ ≤24px to module end                  │
├──────────────────────────────────────┤
│ Destination market                   │
│ Start with the market tied to your   │
│ procurement requirements             │
│                                      │
│ Use the European Union overview for  │
│ shared regional context, choose an   │
│ EU country destination when local    │
│ context matters, or start directly   │
│ with the UK, India, or Brazil.       │
│                                      │
│ EUROPEAN UNION                       │
│ Start with the European Union        │
│ overview when you need the shared    │
│ regional procurement context. Choose │
│ a country destination when the next  │
│ step depends on local market context.│
│                                      │
│ [View EU country destinations  +]    │
│ aria-expanded=false intent           │
│ no EU action in S0                    │
│                                      │
│ UNITED KINGDOM                       │
│ Use the United Kingdom path when     │
│ your next procurement questions need │
│ a UK-specific context.               │
│ no action                            │
│                                      │
│ INDIA                                │
│ Use the India path when your next    │
│ procurement questions need an        │
│ India-specific context.              │
│ no action                            │
│                                      │
│ BRAZIL                               │
│ Use the Brazil path when your next   │
│ procurement questions need an        │
│ English-language Brazil context.     │
│ no action; no PT-BR label or gap     │
├──────────────────────────────────────┤
│ How to choose                        │
│ Choose the level of market context   │
│ you need                             │
│                                      │
│ 1 Start with the EU overview         │
│ body: 4 lines / 96px — Appendix A    │
│                                      │
│ 2 Choose an EU country destination   │
│ body: 4 lines / 96px — Appendix A    │
│                                      │
│ 3 Use a standalone market path       │
│ body: 4 lines / 96px — Appendix A    │
│                                      │
│ Direct answer: 6 lines / 144px       │
├──────────────────────────────────────┤
│ Next procurement check               │
│ Continue with the next procurement   │
│ check                                │
│                                      │
│ Review pigment grades                │
│ body: 4 lines / 96px; no CTA         │
│                                      │
│ Start from the application           │
│ body: 5 lines / 120px; no CTA        │
│                                      │
│ Plan document review                 │
│ body: 5 lines / 120px; no CTA        │
├──────────────────────────────────────┤
│ Current information                  │
│ Keep time-sensitive trade            │
│ information separate                 │
│ body: 6 lines / 144px — Appendix A   │
│ no update CTA                        │
├──────────────────────────────────────┤
│ Buyer questions                      │
│ Questions buyers ask before choosing │
│ a market page                        │
│                                      │
│ Q1 answer: 6 lines / 144px           │
│ Q2 answer: 4 lines / 96px            │
│ Q3 answer: 7 lines / 168px           │
│ Q4 answer: 4 lines / 96px            │
│ Q5 answer: 5 lines / 120px           │
│ Q6 answer: 5 lines / 120px           │
│ Q7 base: 5 lines / 120px             │
├──────────────────────────────────────┤
│ FINAL RFQ absent; no divider/gap     │
├──────────────────────────────────────┤
│ FOOTER — stacked registered links    │
└──────────────────────────────────────┘
```

### 5.2 Mobile S0 closure rules

- The public page width is 390px; public content width is 358px with 16px side margins.
- All four market systems remain in the fixed order EU → UK → India → Brazil.
- The EU country list has zero public height while collapsed; no hidden card shell or carousel remains.
- No CTA row is reserved beneath market, support or trade descriptions when its route is unavailable.
- Q7 ends after the approved base sentence. GEO-A09 is not visible or emitted in S0.
- Removing Final RFQ brings Footer directly after Buyer Questions with one standard module transition.

## 6. Mobile EU Expanded State (390px)

This is the same S0 page with only the EU disclosure changed.

```text
┌──────────────────────────────────────┐
│ EUROPEAN UNION                       │
│ description: 5 lines / 120px         │
│                                      │
│ [Hide EU country destinations  −]    │
│ aria-expanded=true intent            │
│ ┌──────────────────────────────────┐ │
│ │ EU country destinations          │ │
│ │ Germany                          │ │
│ │ Italy                            │ │
│ │ Spain                            │ │
│ │ Poland                           │ │
│ │ Netherlands                      │ │
│ │ Belgium                          │ │
│ └──────────────────────────────────┘ │
│ each name is plain text in S0;       │
│ minimum row target 44px              │
│                                      │
│ UNITED KINGDOM follows immediately   │
└──────────────────────────────────────┘
```

Expanded-state requirements:

- Country order is fixed and vertical.
- No horizontal carousel, swipe-only region, truncated country name or nested scroll area is permitted.
- The disclosure control keeps focus after expansion/collapse; content appears next in reading order.
- In S1/S6, only a country whose route passes becomes a complete link row. Other names remain plain text without arrows or pseudo-link styling.

## 7. Tablet Responsive Logic

| Module | 1024px landscape | 768px portrait |
|---|---|---|
| Header | Keep eight-item structure only if every item meets readable/touch spacing; otherwise use Menu pattern | Use Menu pattern; Home remains first inside menu; RFQ remains conditional |
| Hero | Copy 6 columns + neutral structural space 2 columns; no media required | Single column; local CTA may be inline or full width |
| Destination Selector | EU 5 columns; UK/India/Brazil 3-column stack | EU full width; three standalone markets in 2+1 layout or vertical stack if copy wraps |
| EU countries | Two or three text columns, directly visible | Two columns if 44px rows and names fit; otherwise use the same accessible disclosure as Mobile |
| Choice Guide | Three columns when full copy remains readable | Three vertical items or 2+1 without reordering |
| Procurement Paths | Three compact columns | Stack or 2+1; each missing CTA closes its own content block |
| Trade Boundary | Full width | Full width |
| Buyer Questions | Two-column editorial list only with sequential DOM order | One column, full visible answers |
| Final RFQ | Copy/action split when S4 true | Single column; CTA within 24px of body |
| Footer | Multi-column registered groups | Two-column or stacked groups |

Tablet introduces no horizontal carousel. Exact CSS breakpoints belong to later development handoff; Gate 3 fixes reflow behavior, content order and visibility rules only.

## 8. Deterministic State Board

### 8.1 S0 — Current route-safe

| Surface | Visible result |
|---|---|
| Market actions | Zero external actions; names and descriptions remain |
| Support actions | Zero; three responsibility explanations remain |
| Trade | Boundary answer only |
| RFQ | No Header/Hero/Q7 addition/GEO-A09/Final RFQ/Footer action |
| PT-BR | Entirely absent |
| Meta | Approved route-safe Meta |

### 8.2 S1 — Partial market action

Example review delta: `MARKET-EU-001=true`, all other market routes false.

```text
EU block
  approved description
  [Explore the European Union]   ← complete action appears
  Germany / Italy / Spain / Poland / Netherlands / Belgium
  country labels remain plain text

UK / India / Brazil
  approved descriptions only; no empty action row
```

If one EU country route passes, only that country name becomes a complete link row. The EU overview action and other country names do not inherit availability. Desktop and Mobile use the same per-target atomic rule.

### 8.3 S2 — Partial support action

Example review delta: Products and Documents true; Applications false.

```text
[Review pigment grades]
approved explanation
[Explore Products]

[Start from the application]
approved explanation
no action and no reserved button height

[Plan document review]
approved explanation
[Review Documents]
```

Desktop closes the three-item row without an orphan button rail. Mobile places each available CTA directly after its own explanation.

### 8.4 S3 — Trade current

The Trade module retains its approved boundary copy and adds exactly one complete action for each market whose official-source, scope, date, freshness, content and live-route conditions all pass.

```text
Keep time-sensitive trade information separate
approved boundary copy — unchanged
[View Current Trade Updates]
```

No duty, measure, customs outcome, date claim or policy excerpt is added to the Hub. If freshness fails later, the action and its dependent affordance disappear together while the boundary copy remains.

### 8.5 S4 — RFQ ready

`RFQ_AVAILABLE=true` activates one synchronized surface set:

1. Header `Request a Quote` action.
2. Hero secondary `Request a Quote` action.
3. Q7 additional sentence: `After you explicitly choose a market, that selection can be carried into the separate quotation request and remains visible for review.`
4. GEO-A09 becomes eligible because its visible answer exists.
5. Complete Final RFQ module.
6. Footer `Request a Quote` action.

```text
┌──────────────────────────────────────────────────────────────┐
│ Request review                                               │
│ Ready to discuss a destination market?                       │
│ Share the destination market, intended application, grade or │
│ specification if known, quantity context, and document needs.│
│ Submission starts a review; it does not confirm price, stock,│
│ documents, delivery, or acceptance.                          │
│ [Request a Quote]                                            │
└──────────────────────────────────────────────────────────────┘
```

`RFQ_AVAILABLE` is the only condition for these six RFQ surfaces. When it becomes false, Header, Hero, Q7 addition, GEO-A09, Final RFQ and Footer RFQ disappear in the same state update. No extra Footer condition or contact fallback is permitted.

### 8.6 S5 — PT-BR future relation annotation only

Current Gate 3 canvas behavior remains `DO_NOT_RENDER`.

```text
PUBLIC BRAZIL BLOCK IN CURRENT FRAMES
  Brazil
  approved English-context description
  [Explore Brazil] only if MARKET-BR-EN itself passes
  natural module close

NON-PUBLIC REVIEW ANNOTATION OUTSIDE CANVAS
  FUTURE ONLY: if PTBR_RELATION_AVAILABLE=true after independent approval,
  add the approved Brazil EN→PT-BR visible relation/link inside the Brazil
  relationship. Do not create a fifth market system. MARKET-000 hreflang
  remains NOT_APPLICABLE. Child-page en/pt-BR hreflang belongs only to the
  MARKET-BR-EN and MARKET-BR-PT tasks.
```

This wireframe does not invent a Portuguese label, translation, URL confirmation, language switch or public placeholder.

### 8.7 S6 — Full EN action

S6 requires all ten English market targets, all three support routes and RFQ to pass. Trade remains independently freshness-gated and PT-BR remains independently localized-gated.

```text
DESKTOP DELTA — S6 FULL EN ACTION / PT-BR STILL OFF

Header: seven navigation items + Request a Quote
Hero: Choose a Market + Request a Quote

EU block:
  [Explore the European Union]
  Germany [link] | Italy [link] | Spain [link]
  Poland [link]  | Netherlands [link] | Belgium [link]

Standalone markets:
  United Kingdom [Explore the United Kingdom]
  India          [Explore India]
  Brazil EN      [Explore Brazil]

Procurement Paths:
  [Explore Products] [Explore Applications] [Review Documents]

Trade:
  action appears only for separately current/live trade content

Buyer Questions:
  Q7 base + approved selection-carry sentence

Final RFQ:
  complete module visible
```

S6 uses the approved Full-route Meta. It does not change H1, Title, Canonical or Hub hreflang.

### 8.8 390px S6 maximum-action delta

This frame proves that the reverse viewport/state combination closes correctly. It is a future conditional review state, not the current page.

```text
┌──────────────────────────────────────┐
│ S6 FULL EN / RFQ ON / PT-BR OFF      │
│ 390px / FUTURE CONDITIONAL REVIEW    │
├──────────────────────────────────────┤
│ Logo                 [Menu] [RFQ]    │
├──────────────────────────────────────┤
│ Hero route-safe H1 and intro          │
│ [Choose a Market]                     │
│ [Request a Quote]                     │
├──────────────────────────────────────┤
│ EUROPEAN UNION                        │
│ [Explore the European Union]          │
│ [Hide EU country destinations −]      │
│ Germany [link]                        │
│ Italy [link]                          │
│ Spain [link]                          │
│ Poland [link]                         │
│ Netherlands [link]                    │
│ Belgium [link]                        │
│                                      │
│ UNITED KINGDOM                        │
│ [Explore the United Kingdom]          │
│                                      │
│ INDIA                                 │
│ [Explore India]                       │
│                                      │
│ BRAZIL                                │
│ [Explore Brazil]                      │
│ no PT-BR relation                     │
├──────────────────────────────────────┤
│ Choice Guide — three vertical items   │
├──────────────────────────────────────┤
│ Procurement Paths                     │
│ [Explore Products]                    │
│ [Explore Applications]                │
│ [Review Documents]                    │
├──────────────────────────────────────┤
│ Trade Boundary                        │
│ no Trade CTA unless S3 also passes    │
├──────────────────────────────────────┤
│ Buyer Questions                       │
│ Q7 base + RFQ-approved addition        │
├──────────────────────────────────────┤
│ Final RFQ body: 6 lines / 144px        │
│ [Request a Quote — full width]        │
│ ≤24px to module end                   │
├──────────────────────────────────────┤
│ Footer with conditional RFQ action    │
└──────────────────────────────────────┘
```

All actions stack before their labels shrink. The expanded six-country group, three standalone market actions, three support actions and Final RFQ must remain within 358px content width with no horizontal scroll.

## 9. Mobile Menu States

### 9.1 S0 menu open — RFQ unavailable

```text
┌──────────────────────────────────────┐
│ Logo                    [Close menu] │
├──────────────────────────────────────┤
│ Home                                 │
│ Markets — current                    │
│ Products                             │
│ Applications                         │
│ Documents                            │
│ Resources                            │
│ About                                │
│ no Request a Quote row or blank slot │
└──────────────────────────────────────┘
```

### 9.2 S4 menu open — RFQ available

The first seven items keep the same order. `Request a Quote` appears as the eighth item after About. Opening the menu places focus inside it; closing returns focus to the Menu control. The later development specification will choose the exact dialog/navigation pattern.

## 10. Focus, Hover and Touch States

| State | Low-fidelity treatment | Acceptance requirement |
|---|---|---|
| Keyboard focus | 2px structural outline with 2px separation annotation | Visible on Menu, disclosure, local anchor and every rendered link/CTA; final color deferred |
| Hover | Underline or structural edge change annotation | Enhancement only; no core path depends on hover |
| Current navigation | Text label + persistent current marker | Markets current state is not color-only |
| EU disclosure closed | Plus/chevron-down + full label | Minimum 44px target; programmatic expanded=false intent |
| EU disclosure open | Minus/chevron-up + full label | Minimum 44px target; programmatic expanded=true intent |
| Conditional destination link | Complete label, href affordance and focus state appear together | No arrow, hover or analytics target survives without href |
| Plain destination label | Text only | Must not visually impersonate a link |
| Wrapped CTA | Text may wrap to two lines | Target stays at least 44px high and never overflows |

## 11. Long-copy, Zoom and Overflow Stress States

### 11.1 Real-copy measurement reference

Appendix A is the single 390px measurement source. It uses every complete Gate 2 string required for cumulative-height review; the main frames show measured line/height annotations instead of shortened public-copy placeholders.

### 11.2 Required stress content

- H1 must tolerate four Mobile lines without clipping or ellipsis.
- `Start with the market tied to your procurement requirements` must wrap naturally at 390px.
- `View EU country destinations` and `Hide EU country destinations` must remain complete at 200% zoom.
- United Kingdom and Netherlands must not be abbreviated to solve layout pressure.
- Q1, Q3 and Q7 complete answers must push following content downward; no fixed-height crop is allowed.
- Final RFQ body must wrap above its CTA without creating a detached bottom button.

### 11.3 390px overflow contract

- Public side margins remain at least 16px.
- No module uses a minimum width larger than 358px.
- Button groups stack before text shrinks.
- EU countries and market systems never use horizontal scrolling.
- No map, route diagram, table or annotation strip is required for buyer navigation.
- Review annotation strips are outside the production canvas and do not count toward public width.

### 11.4 200% zoom

At 200% zoom, the layout may reflow to the Mobile single-column behavior. Header moves to Menu; EU disclosure remains operable; country labels, complete answers and CTA text remain present. Overlap, clipped focus rings and horizontal page scroll are failures.

## 12. No-image and Media Boundary

The approved content does not require an image to explain the market relationship. Therefore the baseline wireframes are deliberately image-free.

| Condition | Wireframe behavior |
|---|---|
| No approved Hero media | Copy occupies the available Hero width; no skeleton, broken-image box or empty 40% column |
| Decorative route graphic later proposed | Must remain secondary and have empty ALT; cannot imply service coverage or logistics |
| Simplified map later proposed | Must have a complete text equivalent and cannot encode office, warehouse, port, stock or delivery claims |
| Image removed after approval | Hero contracts vertically; CTA remains within 24–32px of the copy block |

Gate 3 creates no image asset and does not approve any map, flag or industrial photograph.

## 13. Module Visibility and Gap-closure Matrix

| Module/surface | Always visible | Conditional trigger | False-state closure |
|---|---|---|---|
| Header shell | Yes | Individual destination hrefs and RFQ have independent conditions | Missing item closes order; no blank navigation cell |
| Breadcrumb | Yes | Home route must resolve before release | Release blocker if unresolved; no invented fallback |
| Hero | Yes | RFQ secondary only in S4 | Local anchor remains; CTA row contracts |
| Destination Selector | Yes | Ten EN actions independently gated | Names/descriptions remain; no dead links |
| EU country disclosure | Mobile/eligible Tablet | Open/closed controlled by buyer | Closed list has zero visual height |
| Choice Guide | Yes | None | Full content remains |
| Procurement Paths | Yes | Three CTAs independently gated | Responsibility copy remains; missing CTA leaves no slot |
| Trade Boundary | Yes | Trade CTA requires all freshness/content/live conditions | Boundary copy remains; action height becomes zero |
| Buyer Questions | Yes | Q7 addition/GEO-A09 require RFQ | Q7 ends cleanly at base answer |
| Final RFQ | No | `RFQ_AVAILABLE=true` | Entire module, divider and padding absent |
| PT-BR relation | No current render | Independent localization approval + live relation | Brazil EN block closes naturally |
| Footer | Yes | Footer RFQ is controlled only by `RFQ_AVAILABLE`; other destinations remain subject to their own registered/verified rules | RFQ false removes the Footer RFQ item in sync with the other five RFQ surfaces |

## 14. State Combination Review Matrix

| Review frame | Desktop | Tablet | 390px Mobile | Required proof |
|---|---|---|---|---|
| S0 current | Full-page principal | Reflow table | Full-page EU collapsed | No external action, no PT-BR, no RFQ, no gaps |
| S0 EU expanded | EU countries directly visible | Direct or disclosure per readability | Separate expanded frame | Order, focus, 44px rows, no horizontal scroll |
| S1 partial market | EU-only example | Same atomic rule | One complete market action | No inherited sibling links |
| S2 partial support | Products + Documents example | Grid closes | CTA follows its own copy | No orphan button rail |
| S3 trade current | One CTA example | Full-width action | Full-width action | No policy summary; freshness can remove action |
| S4 RFQ ready | Header/Hero/Q7/Final/Footer delta | Responsive split | Full-width CTA stack | Six RFQ surfaces synchronize |
| S5 PT-BR | Annotation outside current canvas | Annotation only | Annotation only | Never rendered as currently available |
| S6 full EN | Detailed delta | All actions reflow | Vertical maximum-action stack | Ten EN + three support + RFQ; Trade/PT-BR remain independent |
| Long copy / 200% | Natural wraps | Earlier stack | Four-line H1 and full labels | No clipping or ellipsis |
| No image | Copy-led Hero | Copy-led Hero | Copy-led Hero | No placeholder gap |

## 15. SEO and GEO Wireframe Annotations

Metadata is not a visual canvas element, so the review package carries these non-public checks:

| Field | S0 | S6 |
|---|---|---|
| Title | `Markets for Titanium Dioxide Procurement \| TiO2 Malaysia` | Same |
| H1 | `Choose Your Destination Market` | Same |
| Meta | Approved Route-safe Meta | Approved Full-route Meta only when all four first-level market actions are live |
| Canonical | `https://tio2malaysia.com/markets/` | Same |
| Hreflang | `NOT_APPLICABLE` | Same, including any future S5 relation |
| ItemList | Omitted where destination actions are not live | Includes only visible approved live destination actions |
| GEO-A09 | Absent | Present only when RFQ is also available and visible |

Buyer Questions remain ordinary visible content. This wireframe does not add `FAQPage`, `QAPage`, `LocalBusiness` or any machine-readable fact that is absent from the canvas.

## 16. Gate 3 Self-check

### A. Governance and scope

- [x] Gate 2 approval, G2-01/G2-02 closure and `DESIGN_IN_REVIEW` lifecycle are recorded.
- [x] MKT-R002/R003/R004/R005 remain OPEN.
- [x] Twenty-two external units remain `NOT_VERIFIED_LIVE`.
- [x] Gate 4 visual-direction work is authorized; Gate 5, Market child pages, development and publishing are not authorized.

### B. Desktop and hierarchy

- [x] Desktop full-page S0 frame follows all ten modules in approved order.
- [x] EU uses an 8-column editorial block; UK, India and Brazil remain compact peer destinations.
- [x] Six EU country labels are directly visible on Desktop.
- [x] The page is not a ten-card country wall.

### C. Tablet and Mobile

- [x] 1024px and 768px Tablet behavior is specified.
- [x] The 390px full-page S0 frame uses one column and 16px side margins.
- [x] Mobile EU closed and expanded frames are both defined.
- [x] Mobile order remains EU → UK → India → Brazil.
- [x] Menu-open behavior is defined with and without RFQ.
- [x] No horizontal carousel or swipe-only navigation is introduced.

### D. Deterministic states

- [x] S0, S1, S2, S3, S4, S5 and S6 have separate review rules.
- [x] Partial market and support actions are atomic.
- [x] Trade current adds a link but no policy conclusion.
- [x] RFQ synchronizes Header, Hero, Q7, GEO-A09, Final RFQ and Footer surfaces.
- [x] `RFQ_AVAILABLE` is the only RFQ/Footer condition; no seventh or nested Footer condition exists.
- [x] S6 includes all ten EN market actions and three support actions while keeping Trade/PT-BR independent.

### E. Localization

- [x] PT-BR is absent from all current-state public canvases.
- [x] S5 is a non-public future annotation only.
- [x] No Portuguese label, translation, permanent URL or language switch is invented.
- [x] MARKET-000 hreflang remains `NOT_APPLICABLE`.

### F. Real-length content and closure

- [x] Approved Hero, destination, guidance, support, trade, Buyer Question and RFQ copy lengths drive the geometry.
- [x] Appendix A measures EU, all Choice and Procurement items, Trade, Q1–Q7 and Final RFQ from complete Gate 2 copy at 390px.
- [x] S0 and S6 cumulative-height ranges, CTA bottom gaps and no-horizontal-scroll conclusion are recorded.
- [x] Long H1, long answer, long country name and wrapped CTA behaviors are specified.
- [x] Missing market/support/trade/RFQ actions leave no orphan slots.
- [x] Final RFQ false state has zero module height.
- [x] No-image state contracts without a placeholder gap.

### G. Accessibility

- [x] Home remains visible in Desktop and menu navigation.
- [x] Focus, hover, current, expanded and collapsed states are structurally distinct.
- [x] EU disclosure and country rows target at least 44px.
- [x] Core navigation never depends on hover or color alone.
- [x] 200% zoom and reduced-motion expectations are recorded.

### H. Visual boundary

- [x] No final color, font, image, radius, shadow or illustration is approved.
- [x] No visual asset is treated as evidence.
- [x] No code, CMS, test, deployment or `D:\16Wordpress_nextjs` change is part of this artifact.

## 17. Open Gate Items

| Review ID | Level | Gate 3 effect | Status |
|---|---|---|---|
| MKT-R002 | IMPORTANT | Prevents market-specific supply, application, product, document and logistics facts from entering frames | OPEN |
| MKT-R003 | IMPORTANT | Keeps PT-BR out of all current canvases; S5 remains annotation-only | OPEN |
| MKT-R004 | IMPORTANT | Keeps 22 route-dependent actions unavailable in the principal S0 frames | OPEN |
| MKT-R005 | IMPORTANT | Keeps Trade Update actions absent unless official-source, scope, date, freshness, content and live-route checks all pass | OPEN |
| G3-01 | BLOCKING | Gate 3 wireframe requires project-control review and user approval before Gate 4 | CLOSED — project-control PASS and user approval recorded 2026-08-30 |
| G3-02 | IMPORTANT | 390px real-copy cumulative-height evidence was incomplete | CLOSED — Appendix A passed project-control review and user approved Gate 3 on 2026-08-30 |
| G3-03 | IMPORTANT | Footer RFQ had an extra condition not defined by Gate 2 | CLOSED — unique `RFQ_AVAILABLE` contract passed project-control review and user approved Gate 3 on 2026-08-30 |

## 18. Review and Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Initial MARKET-000 Desktop, Tablet-response and 390px Mobile low-fidelity wireframe; covers S0–S6, EU disclosure, menu, focus, long copy, no-image, overflow and conditional closure | `DRAFT_FOR_GATE_3_REVIEW`; pending project-control and user review |
| V0.1 review revision | 2026-08-29 | Resolve G3-02/G3-03: remove public-frame placeholders, add compact 390px real-copy measurement appendix and height ranges, and make `RFQ_AVAILABLE` the sole six-surface condition; project-control review PASS | `DRAFT_FOR_GATE_3_REVIEW`; G3-02/G3-03=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.1 approval record | 2026-08-30 | User approved MARKET-000 Gate 3 after project-control PASS; G3-01/G3-02/G3-03 closed; Gate 4 visual-direction work authorized; MKT-R002–005 remain OPEN | `APPROVED_GATE_3_BASELINE`; Gate 5 not authorized |

## Appendix A. 390px Real-copy Measurement

### A.1 Measurement model

- Public content width: 358px inside the 390px viewport, with 16px side margins.
- Conservative body wrap: maximum 42 average Latin characters per line; 16px body text with 24px line height.
- Item titles use 28px line height; H2 uses 32–36px; H1 uses 40–44px. Touch/action rows are at least 44px; CTA measurement uses 48px.
- Every module includes 32px top and bottom padding plus the approved content gaps. Ranges allow proportional-font and heading-wrap variation without changing the copy.
- Gate 4 typography must be remeasured against these upper bounds. It may not solve overflow by truncation, smaller-than-approved text or horizontal scrolling.

### A.2 Complete-copy wrap evidence

| Unit | Complete Gate 2 copy measured | Body lines at 42 chars | Body height |
|---|---|---:|---:|
| Hero intro | Start with the region or country where your procurement requirements need to be reviewed. This hub explains which market path to choose and where product, application, document, trade-update, and quotation questions belong. | 6 | 144px |
| Destination intro | Use the European Union overview for shared regional context, choose an EU country destination when local context matters, or start directly with the United Kingdom, India, or Brazil. | 5 | 120px |
| EU description | Start with the European Union overview when you need the shared regional procurement context. Choose a country destination when the next step depends on local market context. | 5 | 120px |
| UK description | Use the United Kingdom path when your next procurement questions need a UK-specific context. | 3 | 72px |
| India description | Use the India path when your next procurement questions need an India-specific context. | 3 | 72px |
| Brazil description | Use the Brazil path when your next procurement questions need an English-language Brazil context. | 3 | 72px |
| Choice intro | The right starting point depends on whether your question is regional, destination-specific, or outside the European Union. | 4 | 96px |
| Choice 1 | Start with the EU overview — Use the European Union path for shared regional procurement context and to understand how the EU country destinations relate to the wider market structure. | 4 | 96px |
| Choice 2 | Choose an EU country destination — Use a country path when your next question depends on the destination market. Country pages provide local procurement context; they do not replace the EU overview. | 4 | 96px |
| Choice 3 | Use a standalone market path — Choose the United Kingdom, India, or Brazil when that destination is the primary context for the next procurement check. | 4 | 96px |
| Choice direct answer | Choose the European Union overview for shared regional context. Choose a country destination for local procurement context. Use the United Kingdom, India, or Brazil paths when those markets are the destination. | 6 | 144px |
| Procurement intro | Choosing a destination is one part of the review. Continue with the section that addresses your next question. | 3 | 72px |
| Product path | Review pigment grades — Use Products when you need to review grade pages or begin from product requirements. Product suitability still depends on technical evaluation. | 4 | 96px |
| Application path | Start from the application — Use Applications when the first known input is coatings, plastics, masterbatch, printing inks, or paper. Product relationships appear only where technical evidence permits. | 5 | 120px |
| Document path | Plan document review — Use Documents to understand document categories and controlled request paths. A page or request does not promise that a document is available for every product or market. | 5 | 120px |
| Trade | Market pages organize procurement context. Detailed trade-policy information belongs in Resources, where official sources, scope, and update dates can be reviewed. This hub does not state current duties, measures, or customs outcomes. | 6 | 144px |
| Q1 | The market navigation is organized around the European Union, United Kingdom, India, and Brazil. Within the EU structure, Germany, Italy, Spain, Poland, the Netherlands, and Belgium are separate country destinations. | 6 | 144px |
| Q2 | Start with the European Union overview for shared regional context. Choose a country destination when the next procurement question depends on local market context. | 4 | 96px |
| Q3 | A market page organizes destination-specific procurement context and directs you to the relevant Products, Applications, Documents, Resources, or quotation path. It does not replace technical evaluation or document confirmation. | 7 | 168px |
| Q4 | Detailed, time-sensitive trade information belongs in Resources and must be checked against current official sources. This hub does not state policy outcomes. | 4 | 96px |
| Q5 | Product selection is handled by Products and Applications. Start with Products when you have a grade or technical requirement, or with Applications when the end use is the first known input. | 5 | 120px |
| Q6 | Document explanations and controlled request paths belong in Documents. Availability, version, and market applicability must be confirmed through the relevant document process. | 5 | 120px |
| Q7 S0 base | Quotation requests are handled separately. This hub does not contain a quotation form or treat a request as an approved price, stock position, document, or delivery commitment. | 5 | 120px |
| Q7 S4 addition | After you explicitly choose a market, that selection can be carried into the separate quotation request and remains visible for review. | 4 | 96px |
| Final RFQ | Share the destination market, intended application, grade or specification if known, quantity context, and document needs. Submission starts a review; it does not confirm price, stock, documents, delivery, or acceptance. | 6 | 144px |

### A.3 Cumulative 390px height budget

| Module | S0 current range | S6 maximum-action range | Measurement note |
|---|---:|---:|---|
| Header | 64px | 64px | RFQ is inside the S6 action set without increasing public width |
| Breadcrumb | 40px | 40px | One wrapped-safe row |
| Hero | 420–452px | 484–516px | S6 adds one stacked 48px CTA plus a 16px gap |
| Destination Selector | 940–1,020px | 1,420–1,540px | S0 EU collapsed; S6 uses expanded six-country rows and all ten EN actions |
| Choice Guide | 860–940px | 860–940px | Three complete items plus the six-line direct answer |
| Procurement Paths | 760–840px | 940–1,030px | S6 adds three 48px CTAs and local gaps |
| Trade Boundary | 320–360px | 320–360px | S6 does not imply S3; if S3 also passes, add 64px for the trade CTA |
| Buyer Questions | 1,680–1,780px | 1,780–1,890px | S6 includes the four-line Q7 addition; all seven questions remain visible |
| Final RFQ | 0px | 380–420px | Entire module absent in S0; complete body and CTA in S6 |
| Footer | 320–380px | 368–428px | S6 adds the synchronized Footer RFQ action |
| **Cumulative range** | **5,404–5,876px** | **6,656–7,228px** | If S3 is combined with S6, use **6,720–7,292px** |

### A.4 Measurement conclusions

- The longest measured body is Q3 at seven lines / 168px. All complete strings wrap inside 358px; none requires truncation or horizontal scrolling.
- In S0, the EU list, every unavailable CTA and Final RFQ contribute 0px public height. Adjacent modules close with one standard transition.
- In S6, buttons stack before text shrinks. The Hero, each conditional support item and Final RFQ keep 24–32px from the last CTA to the module boundary; no button is followed by an ornamental blank band.
- S0 cumulative height is 5,404–5,876px. S6 maximum-action height is 6,656–7,228px, or 6,720–7,292px when the independent S3 Trade CTA is also present.
- These are Gate 3 validation ranges, not final visual dimensions. Exceeding an upper bound at Gate 4 requires a new wrap measurement, not copy truncation.

Gate 3 is approved. Gate 4 visual-direction work is authorized and must be submitted for project-control and user review. Gate 5, Market child pages, development handoff, code, deployment and publishing remain unauthorized.
