# DOC-TDS Gate 7 Responsive, Accessibility and Interaction Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Visual authority | Approved Gate 5 V0.1 / Superdesign v4 |
| Required logical widths | `1440, 1280, 1024, 768, 640, 430, 390, 375, 320` |
| Gate 8 | `NOT_AUTHORIZED` |

## 1. Responsive implementation

| Width | Required composition |
|---:|---|
| 1440 / 1280 | Desktop Header; two-column Hero; four choice cards; two-column Grade region; semantic wide comparison; horizontal four-step process |
| 1024 | Content-driven intermediate layout; no cropped table/cards or premature mobile navigation conflict |
| 768 | Mobile Header; single-column Hero/Direct Answer/Grade; two-column choice cards and process; readable comparison treatment |
| 640 | Desktop-at-200%-zoom reflow proxy; all content and controls remain operable without page-level horizontal scrolling |
| 430 / 390 / 375 / 320 | Single-column content; full-width actions; comparison converted to readable labeled groups or an accessible contained table; vertical process; Footer reflow |

No tested width may introduce page-level horizontal scroll, fixed-height text clipping, overlapping content, empty post-button bands or an unclosed Footer.

## 2. Minimum sizing and readable content

- Every visible interactive target is at least 44×44 logical pixels.
- Body text remains at least the approved readable size and line-height.
- Long H1, FAQ questions, helper text, route labels and Grade names wrap without truncation.
- No action label is replaced by an icon-only control.
- The body remains intentionally image-free; no placeholder or decorative gap appears when no content image exists.

## 3. Semantic structure

1. One visible H1.
2. Heading order follows the ten-module hierarchy.
3. Breadcrumb is one labeled navigation landmark.
4. Document choices are one labeled checkbox group.
5. Product Grade has a persistent programmatic label.
6. Selection summary uses a polite live region and does not announce duplicate unchanged content.
7. Comparison retains row/column meaning at every width.
8. Request process uses ordered semantics.
9. FAQ questions are buttons with stable relationships to their answers.
10. Related cards use descriptive native anchors.

## 4. Keyboard and focus

- Logical focus order follows visible reading order.
- Every link, checkbox, select, disclosure and Cookie Settings control has a visible focus indicator distinct from hover/selected state.
- Space toggles checkboxes; Enter/Space toggles FAQ buttons.
- Selecting a Grade or document type does not navigate automatically.
- Primary actions are native links when eligible.
- When a conditional action/card is omitted, no hidden focusable descendant remains.
- Focus is never moved merely because the selection summary changes.

## 5. Shared navigation behavior

- Desktop Header is 84px and Mobile Header is 64px according to Global Chrome V0.5.
- The active viewport exposes exactly one accessible primary navigation surface.
- Documents is current exactly once within the active accessible surface.
- Hidden navigation has no accessible/focusable descendants.
- Mobile Menu has an accessible name, traps focus while open, closes on Escape, restores trigger focus and restores page scroll state.
- Buyer-visible `CURRENT` text count is zero.

## 6. State differentiation

The implementation must provide programmatic and visible differences for:

- no selection;
- one document type;
- multiple document types;
- Grade only;
- document type(s) plus Grade;
- FAQ collapsed and expanded;
- Mobile Menu closed and open;
- eligible and ineligible action/related-route conditions;
- keyboard focus.

State meaning cannot rely only on teal color, border color, icon rotation or animation.

## 7. Motion, zoom and forced presentation

- `prefers-reduced-motion` removes non-essential transitions without hiding state change.
- Browser text zoom and 200% zoom remain usable; 640px proxy acceptance does not replace runtime 200% testing.
- Content remains meaningful with CSS background images disabled.
- High-contrast/forced-colors testing must retain checkbox, focus, current navigation and disclosure meaning.

## 8. Gate 9 visual evidence

Required implementation evidence:

- full-page 1440, 768 and 390 screenshots compared with approved Gate 5 assets;
- 1280, 1024, 430, 375 and 320 overflow/target measurements;
- Mobile Menu open/focus evidence;
- TDS + M-2196 and SDS + COA/no-Grade real component states;
- FAQ expanded state;
- visible focus at document choice, Grade, FAQ and shared navigation;
- route-unavailable DOM/accessibility-tree evidence;
- 200% browser zoom and reduced-motion/forced-colors checks.

Static screenshot parity alone is insufficient; Gate 9 requires DOM, keyboard and accessibility-tree evidence.

## 9. Boundary

Actual framework mechanics belong to the external development project after Gate 8 authorization. Material changes to copy, module order, hierarchy, component character or responsive composition require change control.
