# CONV-DOC Gate 4 Visual Redesign Direction V0.5

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G3-G5-VISUAL-REDESIGN-01` |
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Status | `USER_APPROVED / PROJECT_CONTROL_REVIEW_PENDING / NOT_CLOSED` |
| Parent | Gate 3 wireframe V0.5 |
| Gate ceiling | Gate 5 only |

V0.5 replaces V0.4 as the current visual-direction candidate. It changes density, hierarchy and surface treatment only; it does not reopen Gate 1/2 or change any field, evidence or relationship rule.

## 1. Direction

The page uses a compact international B2B procurement aesthetic:

- white Hero and pale neutral page background;
- Deep Navy for headings, form labels and strong structure;
- Teal for the single primary action and selected/received states;
- restrained amber focus ring and red validation/failure treatment;
- one white form surface with fine dividers instead of nested cards;
- light typographic hierarchy with practical helper text;
- no decorative industrial imagery, certificate seal, download icon or factory claim.

The result should feel like a trusted request form embedded in the approved site, not a back-office dashboard.

## 2. Density and hierarchy rules

1. Hero contains only the eyebrow, H1 and one sentence.
2. Stepper communicates the process once; the page must not repeat the same process in banners or cards.
3. Section headings number the three tasks inside the form surface.
4. Request types use compact selectable rows/cards; their descriptions wrap naturally without creating module-height cards.
5. Review uses divider rows and no surrounding secondary surface.
6. Privacy and submit form one terminal action region.
7. Shared Footer begins immediately after the form region.

## 3. Responsive visual treatment

| Width | Treatment |
|---|---|
| 1440px | 1120px content measure, two-column form rhythm, two-column request-type grid, inline terminal action |
| 768px | Reduced padding, maintained two-column information density, responsive Footer |
| 390px | One-column controls, horizontal compact stepper, full-width CTA, 44px minimum touch targets |
| Mobile Menu | Shared open-menu component without page-local divergence |

## 4. Interaction-state language

- Focus: Navy edge, white separation and amber outer ring.
- Selected: Teal checkbox/edge with readable neutral body copy.
- Validation error: red edge plus specific text; color is never the only cue.
- Error summary: focusable block with links to affected fields.
- Restricted request: neutral review notice; no suggestion that a file exists or will be approved.
- Submitting: values remain visible and duplicate submit is prevented.
- Failure: values remain; Try again is available.
- Success: receipt only, with human-review and scope boundary intact.

## 5. Prohibited visual signals

Do not show `INTERNAL REVIEW`, `PENDING COPY`, `RELEASE BLOCKER`, approval stamps, availability badges, public-download controls, certification seals, Market/Destination selectors, promised turnaround times, Contact fallback or any RFQ field inside this form.

## 6. Shared Chrome

Header, Mobile Header, Mobile Menu and Footer are inherited. Desktop Header remains 84px, Mobile Header 64px, Footer Deep Navy, and all RFQ placements remain visible and point to `/request-a-quote/`. Request Documents is not added to first-level navigation.

## 7. Gate 4 verification and open decision

| Check | Result |
|---|---|
| Brand palette and typography inherited | Pass |
| Card-on-card module treatment removed | Pass |
| Process explanation shown once | Pass |
| State semantics defined | Pass |
| Shared Chrome preserved | Pass |
| Project-control approval | Open |
| User approval | Recorded 2026-09-01 |

`Gate 4 V0.5 = USER_APPROVED / PROJECT_CONTROL_REVIEW_PENDING / NOT_CLOSED`. It supports Gate 5 review only and does not authorize Gate 6.
