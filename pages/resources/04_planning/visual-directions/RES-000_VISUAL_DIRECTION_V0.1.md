# RES-000 Visual Direction V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `RES-000` |
| Page | Resources Hub |
| Gate | Gate 4 — Visual Direction |
| Date | 2026-08-30 |
| Status | `DRAFT_FOR_GATE_4_REVIEW / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Project-control review | Gate 4 targeted re-review PASS under `RES-000-G15-PCR-01`; user approval remains pending |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Direction | `Industrial Editorial Research` |
| Inputs | Gate 2 content architecture, Gate 3 wireframe, Visual Standard V1.0, PRODUCT V0.3 matrix + unified audit: `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`; `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md` |
| Excluded | New content/routes, child-page visuals, product relationship graphics, Gate 6+, development and `D:\16Wordpress_nextjs` |

## 1. Direction Decision

The selected direction is **Industrial Editorial Research**: a calm B2B research index built from strong typography, restrained data/document cues and clear evidence boundaries. It inherits the site’s Industrial Editorial identity but gives Resources a distinct “research path + source discipline” character.

| Approach | Assessment | Decision |
|---|---|---|
| Newsroom feed | Overweights recency and implies active publication inventory | Rejected |
| Product comparison portal | Risks relationship, recommendation and equivalence overreach | Rejected |
| Industrial Editorial Research | Supports procurement education, inventory-zero usefulness and evidence transparency | Selected |

## 2. Brand Continuity

- Primary Navy `#062B5B`: headings, navigation, rules and Footer.
- Deep Navy `#031B3A`: Hero background and deepest Footer plane.
- Contrast-corrected Teal `#007F77`: CTA/link text and key rules. It replaces `#00A99D` for small text/interactive contrast while preserving brand identity.
- Accent Teal `#14B8A6`: decorative large-form line only; never small white-on-teal text without testing.
- White `#FFFFFF`: dominant content field.
- Soft Background `#F5F8FB`: section separation.
- Border `#D9E2EC`; Body `#334155`.
- Inter only; H1 700, H2 700, H3 600, body 400, CTA 600.

The page remains Premium International Industrial B2B: no SaaS dashboard glow, chemical marketplace catalogue, news ticker, national-flag decoration or consumer-app pill system.

## 3. Page-specific Visual Language

### 3.1 Research-path motif

Use a simple three-node line diagram in the Hero: one origin point leading to three labelled abstract endpoints. It represents choice architecture, not product flow, manufacturing, logistics or compliance.

### 3.2 Numbered editorial panels

Research paths use `01 / 02 / 03`, a thin Teal rule and a restrained line icon. Panels are explanatory surfaces, not live-page cards. In the zero-inventory state they have no arrow, button, hover lift or clickable affordance.

### 3.3 Evidence boundary

Use an asymmetric two-column editorial panel with thin horizontal rules. No green compliance badge, seal, approval checkmark or “verified” ribbon appears. Publication requirements are prose, not capability claims.

### 3.4 Procurement next steps

Use compact white cards with a Navy top rule. Route-unavailable cards are not visually “disabled”; they are plain explanatory entries without buttons. This avoids suggesting a temporarily broken live destination.

## 4. Color Ratio and Surfaces

| Role | Approximate ratio |
|---|---:|
| White | 62–68% |
| Deep/Primary Navy | 16–20% |
| Soft background | 10–14% |
| Teal accents | 4–7% |

Cards: 12px radius, 1px border, shadow no stronger than `0 10px 30px rgba(6,43,91,.07)`. Buttons: 7px radius. No glass effect, neon edge, large blur or giant pill.

## 5. Typography and Rhythm

| Element | Desktop | 390px | Notes |
|---|---:|---:|---|
| H1 | 60px / 1.05 | 40px / 1.08 | Maximum readable wrap; no forced orphan word |
| H2 | 42px / 1.12 | 30px / 1.18 | Section identity |
| H3 | 22px / 1.3 | 20px / 1.35 | Path/owner entry |
| Body | 17px / 1.65 | 16px / 1.65 | Real copy, no tiny disclaimer |
| Supporting | 14px / 1.55 | 14px / 1.55 | Source/context only |
| Navigation | 15px | 16px menu | 500–600 weight |

Desktop section gaps are 96–128px; mobile 64–80px. Conditional deletion leaves one normal adjacent gap, never a double gap or decorative band.

## 6. Hero Direction

Desktop uses a 7/5 split: copy at left, abstract research-path diagram at right. The diagram uses white rules, muted Teal nodes and short generic labels such as `CONTEXT`, `EVALUATION`, `CURRENT SOURCE`; it contains no model, country, competitor, trade result, factory or document claim.

Mobile stacks copy, local CTA and the compact motif. The motif is reduced to a short vertical path and must not push the first meaningful section below an excessive decorative field.

The qualification note is a high-contrast text block with a thin Teal left rule, not 12px legal copy.

## 7. Module Recipes

### Research Paths

- Desktop: three equal panels in one row.
- Tablet: two plus one; the single panel retains its natural width.
- 390px: one column; 20px internal padding; full copy.
- Non-clickable current state has default cursor and no arrow.

### Research Boundaries

- Soft background section.
- Desktop: title/intro above a 2×2 rule list.
- Mobile: single rule list; no nested cards.
- “Missing relationship” uses neutral explanatory language; no warning red.

### Procurement Paths

- Desktop: three plus two balanced cards.
- Mobile: one column.
- Eligible action is a Navy text link with a Teal arrow; unavailable action is absent, not greyed.

### Buyer Questions

- Desktop: 4/8 editorial split.
- Mobile: H2 followed by full-width accordion.
- Expanded answer is readable body text; trigger has 48–56px logical height.
- Plus/minus and focus state do not rely on color alone.

## 8. PRODUCT V0.3 Visual Lock

- No public grade grid, model chip, Application tag, Process badge, recommendation score or comparison table.
- No arrows connecting one grade to another, substitute icon, equals sign, rank number or “best match” treatment.
- No named-grade relationship representation, including M-2377; PRODUCT V0.3 evidence approval does not create a Hub row or recommendation visual.
- No visual distinction between M-996 and M-2196 because neither appears in the Hub design.
- The 54 no-public relationships leave no blank row, crossed-out item or unsuitable label.
- Generic Technical evaluation is visually equal to Sourcing and Trade paths; it is not the Hero’s dominant “selector”.

## 9. Imagery and Icon Boundary

This page does not require AI-generated photography. Deterministic line graphics better express path selection and avoid unverified manufacturing, inventory, origin, certification, shipment or product-performance implications.

Allowed: document outline, compass/path, comparison columns without values, calendar/source outline, route arrow, question mark.

Prohibited: factory photography, branded sacks, competitor marks, country flags, customs stamps, tariff percentages, laboratory results, grade/application photography or certification seals unless separately evidenced and approved.

## 10. Interaction and Accessibility Direction

- Teal action color uses `#007F77`; normal text never uses low-contrast bright Teal.
- Focus ring is 2px Navy with offset; Menu current state adds a left rule and `Current page` text for assistive semantics.
- Hover movement max 2px and only on actual links/cards.
- Accordion transition max 160ms; reduced-motion removes it.
- 44px logical target minimum; the 390px@2× raster must show at least 88px physical interactive height.
- Decorative Hero motif receives empty alt or is CSS/SVG presentation-only.
- No information is conveyed only by color, icon, hover or position.

## 11. Gate 5 Required Frames

1. 1440px full-page `S0_ROUTE_SAFE_ZERO` Buyer Clean.
2. 390px logical full-page `S0_ROUTE_SAFE_ZERO` Buyer Clean exported at 2×.
3. 390px logical mobile Menu-open current state exported at 2×.
4. Separate non-public component/state board showing inventory 0/1+, trade CURRENT/review-due, owner action present/absent and RFQ present/absent without child-page names.

All full-page frames use actual readable Gate 2 copy. Internal state tokens appear only on the separate review board.

## 12. Gate 4 Self-check

- [x] Industrial Editorial continuity and Resources-specific character are distinct.
- [x] Palette, contrast, type, spacing, cards and buttons follow the visual baseline.
- [x] Desktop/Tablet/390px recipes are defined.
- [x] PRODUCT V0.3 relationship restrictions have explicit visual controls without visual redesign.
- [x] Visible labels and copy contracts use natural procurement language; internal Gate/route/workflow/approval/publication/structured-data/owner terminology is reserved for non-public review artifacts.
- [x] Trade freshness is expressed without publishing a trade conclusion.
- [x] Buyer Clean and internal review states are separated.
- [x] No generated photograph or evidence-implying visual is required.
- [x] No child page, code or Gate 6+ work is authorized.

Self-check is not Gate 4 approval.

## 13. Open Items

| Item | Status |
|---|---|
| RES-R002–R007 | `OPEN` |
| RES-R008–R009 | `CONTROLLED_IN_DRAFT` |
| RES-G4-01 | `OPEN_USER_APPROVAL / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| RES-G15-01 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` — Buyer Clean copy contract synchronized without changing the visual direction and passed targeted project-control re-review |
| RES-REL-V03-PCR-01 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` — Approval source: `USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW`; date: `2026-08-30`; canonical PRODUCT V0.3 control confirmed; no visual-direction change |

## 14. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial Industrial Editorial Research direction, relationship/freshness locks and Gate 5 frame contract | `DRAFT_FOR_GATE_4_REVIEW` |
| V0.1 / RES-G15-01 targeted revision | 2026-08-30 | Synchronized natural buyer-language contract for Hero, research paths, boundaries, procurement next steps and questions; visual direction unchanged | Gate 4 direction review PASS; status remains `DRAFT_FOR_GATE_4_REVIEW` pending downstream re-review |
| V0.1 / RES-000-G15-PCR-01 targeted review PASS | 2026-08-30 | Synchronized targeted project-control PASS after copy-contract and visual-direction verification | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; Gate 4 remains `DRAFT_FOR_GATE_4_REVIEW` and user approval remains OPEN |
| V0.1 / PRODUCT V0.3 relationship-source sync | 2026-08-30 | Updated the internal relationship lock to PRODUCT V0.3, 54 no-public and no named-grade Hub rendering; removed the superseded M-2377 TDS active gate; visual direction unchanged | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; Gate 4 status unchanged |
| V0.1 / RES-REL-V03-PCR-01 targeted correction | 2026-08-30 | Corrected the current Document Control Inputs from V0.2.1 to canonical PRODUCT V0.3 matrix + unified audit | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; Approval source: `USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW`; Gate 4 and visual direction unchanged |
