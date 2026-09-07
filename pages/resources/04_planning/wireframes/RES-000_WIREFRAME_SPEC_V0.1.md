# RES-000 Desktop and 390px Wireframe Specification V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `RES-000` |
| Page name | Resources |
| URL | `/resources/` |
| Gate | Gate 3 — Wireframe |
| Date | 2026-08-30 |
| Status | `DRAFT_FOR_GATE_3_REVIEW / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Project-control review | Gate 3 targeted re-review PASS under `RES-000-G15-PCR-01`; user approval remains pending |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Content source | `pages/resources/04_planning/RES-000_CONTENT_ARCHITECTURE_V0.1.md` |
| Relationship source | PRODUCT V0.3 matrix + unified audit: `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`; `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md` |
| Primary review state | `S0_ROUTE_SAFE_ZERO` |
| Excluded | Child pages, current trade conclusions, product selector, Gate 6+, development and `D:\16Wordpress_nextjs` |

## 1. Wireframe Decision

RES-000 uses an editorial decision path with one stable narrative across viewports. The principal Desktop and 390px frames show the strict current state: zero eligible Resource items, zero ItemList items, no external route represented as live and no RFQ surface.

This is intentionally not an empty catalogue. Permanent modules explain how to select and interpret research; unavailable item/update/action modules close to 0px.

## 2. Viewport Grid

| Viewport | Canvas/reference | Content max | Grid | Outer margin | Behavior |
|---|---:|---:|---:|---:|---|
| Desktop | 1440px | 1200px | 12 columns / 24px gutter | 120px | Dense editorial hierarchy; three path panels; two-column boundary block |
| Tablet | 1024px | calc(100%-64px) | 8 columns / 20px | 32px | Path panels 2+1; owner grid 2 columns |
| Tablet | 768px | calc(100%-48px) | 8 columns / 16px | 24px | Single-column path panels; compact Header |
| Mobile | 390px logical | 358px | 4 columns / 12px | 16px | Single column; 44px targets; no horizontal scroll |

## 3. Desktop 1440px — Route-safe Buyer Clean

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ HEADER 72px                                                                  │
│ Logo | Home Markets Products Applications Documents Resources About | RFQ* │
│ Resources current; Home visible; *RFQ absent in current state               │
├──────────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMB 52px   Home / Resources                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO 500–560px — Navy editorial field                                        │
│ [eyebrow]                                                                    │
│ H1 2 lines max (7 cols)             [abstract document / path diagram]        │
│ Intro 3 lines + qualification note (7 cols)                                  │
│ [Explore research paths] local anchor                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ RESEARCH PATHS 700–780px                                                      │
│ H2 + 2-line intro                                                            │
│ [01 Sourcing context] [02 Technical evaluation] [03 Trade information]       │
│ three equal explanatory panels; no item link or child-page title             │
├──────────────────────────────────────────────────────────────────────────────┤
│ RESOURCE ITEMS — 0px current state                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ RESEARCH BOUNDARIES 620–700px — Soft background                              │
│ H2 + intro                                                                   │
│ [Comparison + missing relationship] [Trade freshness + owner boundary]       │
│ standard body copy; no operational badges or internal tokens                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ CURRENT UPDATES — 0px current state                                           │
├──────────────────────────────────────────────────────────────────────────────┤
│ PROCUREMENT PATHS 620–760px                                                   │
│ H2 + intro                                                                   │
│ Products / Applications / Markets / Documents / About                        │
│ 3+2 compact next-step explanations; current state has no external actions    │
├──────────────────────────────────────────────────────────────────────────────┤
│ BUYER QUESTIONS 640–760px                                                     │
│ H2 left (4 cols) | five accordion rows right (8 cols)                        │
│ first answer expanded; exact long-copy test                                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ FINAL ACTION — 0px while RFQ unavailable                                      │
├──────────────────────────────────────────────────────────────────────────────┤
│ FOOTER 330–390px — registered routes only                                    │
└──────────────────────────────────────────────────────────────────────────────┘
```

Estimated current Desktop page height: 3700–4300px, driven by real copy. Conditional removals cannot leave an alternating-color band, orphan divider or second section gap.

## 4. 390px Logical Mobile — Route-safe Buyer Clean

```text
┌──────────────────────────────────────┐
│ HEADER 64px                          │
│ Logo                         Menu    │
├──────────────────────────────────────┤
│ Home / Resources 44–52px             │
├──────────────────────────────────────┤
│ HERO 620–720px                       │
│ Eyebrow                              │
│ H1 36–40px, natural wrap             │
│ Intro + qualification note           │
│ [Explore research paths] 100%        │
│ compact path-line motif              │
├──────────────────────────────────────┤
│ CHOOSE THE RIGHT RESEARCH PATH       │
│ Intro                                │
│ [01 Sourcing context]                │
│ [02 Technical evaluation]            │
│ [03 Time-sensitive trade information]│
│ one column, no sideways carousel      │
├──────────────────────────────────────┤
│ HOW TO INTERPRET RESEARCH             │
│ [Comparison]                         │
│ [Missing relationship]               │
│ [Trade freshness]                    │
│ [Owner boundary]                     │
├──────────────────────────────────────┤
│ CONTINUE YOUR PROCUREMENT REVIEW     │
│ Products / Applications / Markets /  │
│ Documents / About — one column       │
│ explanation only in current state    │
├──────────────────────────────────────┤
│ BUYER QUESTIONS                      │
│ [expanded question + full answer]    │
│ [collapsed question] ×4              │
├──────────────────────────────────────┤
│ FOOTER                               │
└──────────────────────────────────────┘
```

The review raster is exported at 780px physical width with `deviceScaleFactor=2`, representing a 390px logical viewport. A 92px rendered button/trigger equals a 46px logical target.

## 5. Mobile Menu-open State

The overlay sits below the 64px Header and traps focus. Sequence:

1. Home
2. Markets
3. Products
4. Applications
5. Documents
6. Resources — `aria-current=page`
7. About
8. Request a Quote only when RFQ gates pass

Current route-safe frame omits Request a Quote. The Logo remains visible, the Menu control becomes Close, body scrolling is locked and Escape returns focus to the trigger.

## 6. Conditional State Boards

### 6.1 Resource family/item

| State | Wireframe behavior |
|---|---|
| 0 eligible items | Keep explanatory path panel; no item-list heading, card shell, action or ItemList |
| 1 eligible guide | Insert one complete editorial item below its path; do not create an empty grid partner |
| 2+ eligible guides | Use a two-column desktop editorial list; one column at 390px; order by approved information architecture, not recency |
| Candidate | Never render |

### 6.2 Trade update

| State | Wireframe behavior |
|---|---|
| 0 CURRENT items | Entire `CURRENT_UPDATES` module is 0px |
| CURRENT | Complete title, summary, official source, scope, source date, last reviewed and action |
| Review due/expired/missing field | Entire item and machine-readable relation are absent |

### 6.3 Procurement next steps

| Route state | Wireframe behavior |
|---|---|
| Approved + live | Body plus one exact action |
| Not verified live | Body only; no fake disabled button |
| Content/body itself unavailable | Entire owner entry absent; grid closes |

### 6.4 RFQ

| State | Wireframe behavior |
|---|---|
| Available | Add conditional Header, Hero or final action only per approved CTA contract |
| Unavailable | Every action and dependent phrase absent; no alternative contact is invented |

## 7. PRODUCT V0.3 Wireframe Lock

- No Selector, model grid, process card set, recommendation result, competitor table or equivalence diagram appears.
- The permanent Technical evaluation panel includes the non-equivalence sentence in normal reading order.
- The Missing relationship boundary and BQ-03 say absence is not technical unsuitability; no internal status token appears.
- No named grade, including M-2377, M-996 or M-2196, appears in Buyer Clean text or visuals; this is the Hub zero-row-rendering rule, not an M-2377 evidence hold.
- Owner panels have no counts, grade names, application labels or process labels.
- SEO/GEO/Schema carry no hidden relationship that is absent from the wireframe.

## 8. Interaction and Accessibility

- Header and Menu controls: 44px logical minimum.
- Accordions: 48–56px logical minimum; entire row is a button; plus/minus icon is decorative.
- Visible focus: 2px Navy outline plus 2px offset; selected/current state also has text/icon cue.
- Reading order matches visual order; no CSS reordering.
- Hero motif is decorative and has empty alt when implemented as an image; no manufacturing or product implication.
- No hover-only content; pointer hover may move a panel by 2px but does not reveal facts.
- Text zoom at 200% retains content and actions; no clipping.
- 390px long copy wraps in the viewport; no horizontal scroll or `white-space: nowrap` on content.
- Reduced motion removes transition and lift effects.

## 9. Visual Boundary for Gate 4

Gate 4 may define color, type, rhythm, icon and surface treatment only. It must not add:

- a new module, route, item or child-page identity;
- AI-generated factory/product/trade evidence;
- product relationship graphics;
- news-feed timestamps when no CURRENT item exists;
- empty catalogue cards, disabled CTAs or Coming soon copy.

## 10. Gate 3 Self-check

- [x] 1440px, 1024/768px and 390px behavior is specified.
- [x] Route-safe zero-inventory state is the primary full-page frame.
- [x] Full real-length copy and accordion behavior are covered.
- [x] Resource, Trade, owner and RFQ conditional closure is atomic.
- [x] PRODUCT V0.3 relationship restrictions are visible in structure without changing the wireframe.
- [x] Buyer Clean fixtures use natural procurement language and contain no Gate/route/workflow/approval/publication/structured-data/internal-owner explanation.
- [x] Mobile menu has fixed order, visible Home and Resources current state.
- [x] Touch, focus, reading order, wrapping, zoom and reduced-motion rules are explicit.
- [x] No child page or development artifact is authorized.

Self-check is not Gate 3 approval.

## 11. Open Items

| Item | Status |
|---|---|
| RES-R002–R007 | `OPEN` |
| RES-R008–R009 | `CONTROLLED_IN_DRAFT` |
| RES-G3-01 | `OPEN_USER_APPROVAL / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| RES-G15-01 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` — revised Gate 2 Buyer Clean copy propagated to Desktop/390px fixtures and passed targeted project-control re-review |
| RES-REL-V03-PCR-01 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` — Approval source: `USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW`; date: `2026-08-30`; canonical PRODUCT V0.3 control confirmed; no fixture or geometry change |

## 12. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial Desktop/Tablet/390px wireframe contract, zero-inventory full-page state, mobile menu and conditional boards | `DRAFT_FOR_GATE_3_REVIEW` |
| V0.1 / RES-G15-01 targeted revision | 2026-08-30 | Replaced Buyer Clean internal-governance fixtures with natural procurement copy; structure and responsive contract unchanged | Gate 3 structural review PASS; status remains `DRAFT_FOR_GATE_3_REVIEW` pending downstream copy re-review |
| V0.1 / RES-000-G15-PCR-01 targeted review PASS | 2026-08-30 | Synchronized targeted project-control PASS after copy-fixture and responsive verification | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; Gate 3 remains `DRAFT_FOR_GATE_3_REVIEW` and user approval remains OPEN |
| V0.1 / PRODUCT V0.3 relationship-source sync | 2026-08-30 | Updated relationship lock to PRODUCT V0.3 and removed the superseded M-2377 TDS active gate; preserved zero named-grade rows, all fixtures and responsive geometry | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; Gate 3 status unchanged |
| V0.1 / RES-REL-V03-PCR-01 targeted correction | 2026-08-30 | Corrected the current Document Control Relationship source from V0.2.1 to canonical PRODUCT V0.3 matrix + unified audit | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; Approval source: `USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW`; Gate 3, Buyer Clean and geometry unchanged |
