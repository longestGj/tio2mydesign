# Homepage Mobile V0.6 — Responsive Content Synchronisation

Status: `READY_FOR_USER_VISUAL_REVIEW`  
Date: 2026-08-31  
Scope: Homepage Mobile visual design only  
Content source of truth: Homepage PC V0.7  
Production status: Not production code; not a release approval

## A. Homepage Mobile V0.6 Revised Visual

The existing Mobile V0.5 visual system and approved page order are retained. Mobile V0.6 synchronises the buyer-visible content with PC V0.7 and reorganises it for 375–430px widths.

Formal visual outputs:

- Main Mobile Buyer Clean: `homepage-full-visual-mobile-clean-v0.6.png`
- Mobile Menu Open: `homepage-mobile-menu-open-v0.6.png`

Main 390px export: `390 × 9666px`  
Menu Open export: `390 × 844px`

Responsive diagnostic exports:

- 375px: `375 × 9795px`
- 430px: `430 × 9332px`

Sticky RFQ status: `OPTIONAL UX TEST / NOT RENDERED`.

## B. Desktop → Mobile Content Sync Check

| Section | Status | Mobile treatment |
|---|---|---|
| Hero | SYNCED | Uses the PC V0.7 eyebrow, H1, supporting copy and two CTAs. The large Desktop image is intentionally hidden as a responsive presentation choice. |
| Start Here | SYNCED | Uses the PC V0.7 introductory sentence and Markets / Products / Documents meanings. Layout remains a compact three-cell row. |
| Markets | SYNCED | European Union, United Kingdom, India and Brazil use the PC V0.7 card copy in a single column. |
| Products | SYNCED | Uses `Four product groups. Fourteen grades.`, the four approved groups, the direct GEO organisation sentence, Chloride/Sulfate terminology and `View All 14 Grades`. Individual grade chips remain off the Mobile Homepage by design. |
| Applications | SYNCED | All five PC V0.7 application summaries are present. Presentation changes from Desktop grid to a readable Mobile single column. |
| Company | SYNCED | Uses the PC V0.7 heading, complete legal operating entity and the three company-information items. |
| Documents | SYNCED | Uses the PC V0.7 title, supporting copy, Documents Hub and Request Documents summaries. The cards stack vertically. |
| Resources | SYNCED | Uses the PC V0.7 title, supporting copy and two research-topic summaries. Mobile adds lightweight `Research Topics` and `Buyer Answers` labels only for grouping. |
| Buyer Answers | SYNCED | All three PC V0.7 questions and complete direct answers remain visible by default. |
| RFQ | SYNCED | Uses the PC V0.7 title, support sentence, six field labels and CTA. Fields stack in one column. |
| Footer | SYNCED | Uses the PC V0.7 buyer-facing description and `Procurement` label. Layout becomes two columns plus a full-width RFQ. |

No buyer-facing section is marked `INTENTIONALLY SHORTENED`. Content wrapping and stacking change, but the approved semantic copy is preserved.

## C. Mobile UX Change Log

| Area | Original Mobile V0.5 | Revised Mobile V0.6 | Reason |
|---|---|---|---|
| Hero H1 | `...for Industrial Procurement` | `...for Industrial Buyers` | Synchronises the approved PC V0.7 H1 and Homepage intent. |
| Hero copy | Old navigation-led short copy | Full PC V0.7 sourcing sentence | Preserves the approved SEO/GEO meaning instead of recreating Mobile copy. |
| H1 wrapping | Old wording and fixed composition | Four readable lines at 375, 390 and 430px | Keeps the core `Malaysia Titanium Dioxide` relationship without shrinking the H1. |
| Header | Logo / RFQ / Menu | Retained with 44px controls | Preserves the approved shared chrome and touch size. |
| Start Here | Three cells with old route captions | Introductory sentence plus three full-cell entries | Removes route terminology and clarifies the three purchasing starting points. |
| Markets | Single column with old copy | Single column with PC V0.7 market summaries | Keeps all four destinations visible without carousel or keyword expansion. |
| Products | `14 MODELS` and old model language | `14 GRADES`, four collapsed groups and direct organisation statement | Corrects terminology and preserves the machine-readable four-group fact. |
| Product grade display | No full chip list | Still no full chip list | This is an intentional responsive layout decision; all 14 grade IDs remain in the approved data set and Product destination. |
| Process spelling | `Sulfate / Sulphate` | `Sulfate Process` | Standardises visible terminology. |
| Applications | Two narrow columns | Five single-column cards | Prevents cramped copy and maintains product-to-application GEO relationships. |
| Company | Old route/platform wording | Full PC V0.7 company statement and legal name | Preserves entity clarity without shrinking or abbreviating the company name. |
| Documents | Old `Information and request paths` | PC V0.7 documentation title and two stacked roles | Separates guidance from a specific document request in buyer language. |
| Resources | Research and answers looked like one list | `Research Topics` and `Buyer Answers` subheadings with a divider hierarchy | Clarifies semantic grouping without adding a new heavy module. |
| Buyer Answers | Shortened Mobile answers | Full PC V0.7 direct answers visible by default | Preserves GEO citation quality and `preferred grade if known`. |
| RFQ | Two-column field summary | Single-column 56px field rows and full-width CTA | Improves label readability and tap behaviour at 375px. |
| Footer | Older platform description | PC V0.7 description, two link columns and full-width RFQ | Synchronises content and retains the simplified Mobile structure. |
| Section height | Multiple fixed heights | Content-driven section heights | Prevents clipping and blank areas while keeping full copy and readable type. |

Typography and interaction verification:

- H1: 42px at 390/430px; 40px at 375px.
- Standard buyer body text: 16px.
- Start Here captions: 14px.
- Tested interactive visual targets: 40 elements; none below 44px high.
- No horizontal carousel or core horizontal scrolling.
- No hover-dependent information.

## D. GEO Preservation Check

| Required Mobile fact | Result | Visible expression |
|---|---|---|
| Operating company | PASS | `TiO₂ Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` |
| Fourteen grades / four groups | PASS | Direct answer is visible in Products and Buyer Answers. |
| Five applications | PASS | Coatings, Plastics, Masterbatch, Printing Inks and Paper all have visible descriptions. |
| Four markets | PASS | European Union, United Kingdom, India and Brazil are visible in full. |
| Document paths | PASS | Documents Hub and Request Documents are distinct and visible. |
| Three Buyer Answers | PASS | All questions and answers are visible by default; none is collapsed. |
| Structured quotation requirements | PASS | Destination Market, Application, Grade / Product, Quantity, Packaging and Document Needs are visible. |

M-2377 is retained in the complete 14-grade source set. It is not rendered as a warning or frozen state. The Mobile Homepage intentionally does not display all fourteen chips.

## E. Responsive Check

| Width | Result | H1 lines | Horizontal overflow | Body/caption sizes | Tap targets | Notes |
|---:|---|---:|---|---|---|---|
| 375px | PASS | 4 | None | 16px body / 14px caption | All tested targets ≥44px | Hero CTAs stack vertically; all sections remain readable. |
| 390px | PASS | 4 | None | 16px body / 14px caption | All tested targets ≥44px | Formal Mobile Buyer Clean export. |
| 430px | PASS | 4 | None | 16px body / 14px caption | All tested targets ≥44px | Wider line lengths reduce total page height without semantic loss. |

Across all three widths:

- Markets remains one column.
- Applications remains one column.
- RFQ fields remain one column.
- Company legal name wraps naturally.
- Buyer Answers remain expanded.
- Header contains Logo, RFQ and Menu.
- Footer RFQ remains available.
- No sticky CTA is rendered.

## F. Final Gate

| Gate | Result | Note |
|---|---|---|
| Mobile Visual Gate | PASS | V0.5 visual language is retained and professionally reorganised for Mobile. |
| Responsive UX Gate | PASS | 375, 390 and 430px checks pass without horizontal overflow. |
| Desktop/Mobile Content Consistency Gate | PASS | PC V0.7 is the semantic source of truth; no old Mobile copy remains in the Buyer Clean output. |
| SEO Gate | PASS | `Malaysia Titanium Dioxide` remains the H1 core and the Homepage role is unchanged. |
| GEO Preservation Gate | PASS | Company, product organisation, applications, markets, documents, answers and RFQ relationships remain visible. |
| Accessibility Gate | PASS WITH CHANGES | Visual font size and target-size checks pass; actual focus order, semantics, labels, keyboard behaviour and assistive-technology testing remain implementation-stage requirements. |
| Conversion Gate | PASS WITH CHANGES | Mobile RFQ presentation is clear and single-column; actual form validation, privacy, routing and submission behaviour remain implementation/release dependencies. |

Automated checks support but do not replace user and project-control visual review.
