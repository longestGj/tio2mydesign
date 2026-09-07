# ABOUT-001 Gate 6 Responsive and Accessibility Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Date | 2026-09-01 |
| Review ID | `ABOUT-001-G6-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Evidence type | Static-design review plus implementation-neutral acceptance contract |

## 1. Current Visual Evidence Coverage

| View | Current evidence | Finding |
|---|---|---|
| Desktop | 853×1844 approved raster | Hierarchy is visible; not native 1440px acceptance proof |
| Tablet | No approved raster | Blocking evidence gap |
| 390px mobile | 833×1889 two-phone composite plus 390×868 Menu proof | Direction is visible; not a continuous native 390px page proof |
| Evidence states | 1440×903 board | Concept proof only; shared Chrome pixels are superseded where inconsistent |
| Interaction | 1440×900 board | Intent proof only; outdated CTA/current-state pixels are superseded |

Static PNGs cannot prove DOM semantics, keyboard behavior, route behavior, actual target boxes, reflow or screen-reader output.

## 2. Required Responsive Contract

| Viewport | Required behavior |
|---|---|
| Desktop ≥1200px | Consume 84px shared Header; max-width body; real content height; no fixed-height clipping; fact rows and cards align without truncating the long company name |
| Tablet 768–1199px | Reflow hero and card grids without horizontal overflow; preserve logical reading order; two-column layouts collapse when content width or long labels require it |
| Mobile 375/390/430px | Consume 64px Mobile Header; one-column narrative; no horizontal scroll; no clipped source lines; body CTAs stack; no arbitrary empty space after buttons |

The long name `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` must wrap naturally in Hero, facts, Footer and any metadata preview without shrinking below the approved readable type floor.

## 3. Mobile Menu and Shared Chrome

- Use Global Chrome V0.5 and Production SVG; do not reproduce the page-local Menu raster.
- Menu order and top-level items are fixed by shared authority.
- About active state is perceivable without buyer-visible `CURRENT` text.
- Request a Quote remains permanently visible and points to `/request-a-quote/`.
- Menu opens by keyboard/touch, traps focus appropriately, closes with Escape and restores focus to the opener.
- Every interactive target is at least 44×44 logical px at 390px.

## 4. Semantic and Keyboard Acceptance

1. Exactly one H1; section headings follow ordered H2/H3 semantics.
2. Breadcrumb is a labelled navigation landmark with current-page semantics.
3. Inline links remain distinguishable without relying on color alone.
4. All buttons and links show visible `:focus-visible`, hover and active feedback.
5. Focus order follows the visible narrative and never enters omitted evidence blocks.
6. No click-only card when the same surface contains nested links.
7. Reduced-motion preferences preserve content and do not disable navigation feedback.
8. Source/review/qualifier text remains readable and programmatically associated with its claim block.

## 5. Image and Icon Acceptance

- Informative images require rights-cleared, claim-neutral ALT describing what is actually shown.
- Decorative map lines, dots, backgrounds and icons use empty ALT or are hidden from the accessibility tree.
- No ALT may call an image the company factory, production line, warehouse, stock or Port Klang shipment unless that identity is approved evidence for that exact asset.
- Country flags are supplementary; the market name remains text.
- Icons never substitute for evidence, certification or visible labels.

## 6. Evidence-State Acceptance

| State | Visual / interaction requirement |
|---|---|
| Sufficient | Qualified facts render with source and review context; no badge inflation |
| Partial | Withheld row/card, divider and spacing collapse to 0px; remaining order stays coherent |
| Restricted | Neutral About identity replaces restricted manufacturer/origin/location claims; no orphan map, icon or image implies them |

All states retain shared Header/Footer and their Request a Quote link. No state may show `RFQ OFF`, hidden, disabled, empty slot or Contact fallback.

## 7. Current Disposition

Responsive and accessibility requirements are fully specified, but current visual evidence does not prove native Desktop, Tablet and continuous 390px behavior. Project control must either request updated proof or explicitly accept the written contract as the downstream acceptance authority. Gate 6 remains not approved.
