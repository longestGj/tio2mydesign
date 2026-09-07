# RES-000 Desktop and 390px Wireframe Specification V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-000` / `/resources/` |
| Gate | Gate 3 directed revision |
| Date | 2026-08-31 |
| Status | `DRAFT_FOR_GATE_3_REVIEW` |
| Content source | `pages/resources/04_planning/RES-000_CONTENT_ARCHITECTURE_V0.2.md` |
| Global Chrome | Formal Global Chrome V0.5 current-state contract; fixed RFQ retained |
| Relationship source | PRODUCT V0.3 canonical matrix + unified audit |

## 1. Desktop 1440px Frame

| Region | Geometry direction | Layout |
|---|---|---|
| Header | 84px fixed shared geometry | Production SVG Logo; eight-item order; Resources Bold + 3px Teal underline; RFQ fixed |
| Breadcrumb | 52px | 1200px shell; Home / Resources |
| Hero | ~530px | 7/5 split; copy left; corrected line diagram right |
| Featured | 560–640px depending on item count | One real candidate uses a wide editorial card; 2–3 items use equal grid; 0 items close section to 0px |
| Decision paths | ~610px | Three equal cards; sourcing / technical / trade |
| Latest | Conditional | Hidden in current one-item state; no duplicate card |
| Evidence | ~390px | Compact three-column principles on Soft Background |
| FAQ | ~720px | 4/8 split; five accordions with first answer expanded |
| Footer | Shared Deep Navy geometry | No page-local links; fixed RFQ |

### Desktop Hero Diagram

```text
                     ┌───────────────────────────┐
               ┌────▶│ SOURCING                  │
  ┌─────────┐  │     └───────────────────────────┘
  │ START   ├──┼────▶│ TECHNICAL EVALUATION      │
  └─────────┘  │     └───────────────────────────┘
               └────▶│ TRADE & MARKET            │
                     └───────────────────────────┘
```

The motif is decorative support (`aria-hidden=true`), uses only lines and labels, and contains no hidden evidence or navigation.

### Featured One-item Layout

- 12-column grid: card spans 8 columns; empty 4 columns hold an editorial rule/callout, not a fake card.
- Card includes type, registered title, neutral description, context label and conditional action.
- No publication date, review date, author, image or status badge is fabricated.
- Proposed visual link treatment is shown for review; delivery marks it conditional.

## 2. Mobile 390px Frame

| Region | Mobile contract |
|---|---|
| Header | 64px; `Logo | RFQ | Menu`; no current-page label |
| Breadcrumb | 48px; one line |
| Hero | Copy only; diagram `display:none` and no reserved height; full-width CTA |
| Featured | One column; 24px card padding; metadata wraps; ≥44px action |
| Decision paths | One column; no horizontal rail; icons and labels remain legible |
| Latest | 0px in one-item state |
| Evidence | Three compact stacked rows/cards; section visibly shorter than V0.3 |
| FAQ | One column; 16px question/answer; natural wrapping; ≥48px button row |
| Footer | Shared Deep Navy stack; no page-local anchors; fixed RFQ |

Body is 16px with 1.6 line height. Outer gutter is 16px. H1 is 38–40px with no clipping. The CTA is followed directly by the Hero boundary with no decorative-diagram blank band.

## 3. Interaction States

| Element | Default | Hover/focus | Conditional / empty |
|---|---|---|---|
| Header current | Bold + structural marker | independent visible focus outline | exactly one current item |
| Hero CTA | Teal primary | darker border/fill + focus outline | retargets to paths if Featured hidden |
| Resource card action | descriptive link | underline + arrow movement ≤2px; reduced motion disables | complete action absent until route/public eligibility |
| FAQ | first item expanded in proof | button toggles `aria-expanded`; answer remains reading-order adjacent | no JS-only inaccessible answer dependency |
| Latest | list/card rows | standard link focus | entire section 0px when no non-duplicate qualified items |

## 4. Removed Geometry

The following have no box, divider, top/bottom padding or reserved height:

- five owner/navigation cards;
- `Where details belong`;
- Hero qualification disclaimer;
- navigation-style FAQ questions;
- Latest section in the one-item state;
- Mobile Hero diagram.

## 5. Responsive Acceptance

- Desktop 1440 and Mobile 390 each show the full revised body.
- Mobile screenshot may be captured at 780px physical width for 2× evidence but represents 390px CSS width.
- No horizontal overflow, clipped H1, side-scrolling cards, tiny descriptions or abnormal post-button whitespace.
- All targets are at least 44×44px logical.
- Long questions wrap without truncation; accordion icons stay aligned to the first line area.
- Global Chrome and fixed RFQ remain present; Footer does not inherit local Hub anchors.

## 6. Gate Status

`RES-HUB-RESTRUCTURE-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW`.

This wireframe does not approve RES-ORIGIN public eligibility, Gate 3, development or publication.
