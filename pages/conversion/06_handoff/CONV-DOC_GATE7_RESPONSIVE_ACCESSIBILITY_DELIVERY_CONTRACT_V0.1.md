# CONV-DOC Gate 7 Responsive / Accessibility Delivery Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `CONV-DOC-G7-HANDOFF-01` |
| Review ID | `CONV-DOC-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Visual authority | Approved Gate 5 V0.6 assets and specification |

## 1. Responsive implementation

Implement content-driven layouts at 1440, 1280, 1024, 768, 430, 390, 375 and 320px with no page-level horizontal scrolling, clipping or fixed-height content loss.

- Desktop uses the approved two-column rhythm where content remains readable.
- Tablet preserves readable field pairs and shared Footer reflow.
- Mobile uses one field/type column and at least 44px logical touch targets.
- Privacy precedes submit at every width; at 390px it is directly above the full-width CTA.
- The approved long company, 254-character email and 500-character notes cases wrap without overlap.
- No sticky duplicate submit, post-button dead space or page-local Footer copy is allowed.

## 2. Semantic/accessibility requirements

1. One visible H1 and one semantic form.
2. Persistent programmatic labels for all controls.
3. Programmatic required state and visible required indicators.
4. `country_region` uses text-input semantics.
5. Document Types expose one labeled keyboard-operable multiselect group.
6. Helpers and errors are associated with their controls; invalid state is programmatic.
7. On failed submit, a single error summary receives focus and links to fields.
8. Focus indicators remain distinct from hover, selected, error and disabled states.
9. Submitting prevents duplicate activation without trapping focus or disabling shared RFQ navigation.
10. Failure/success messages use appropriate status/alert semantics and avoid premature or duplicate announcements.
11. Mobile Menu traps focus while open, closes on Escape, restores trigger focus and removes hidden navigation from the accessibility tree.
12. Reduced motion preserves meaning; no state relies on colour or animation alone.

## 3. Visual fidelity

Gate 8 must reproduce the approved Desktop, Tablet, Mobile, Mobile Menu and Interaction States evidence. Runtime accessibility fixes may adjust implementation mechanics, but any material change to copy, field set, module order, hierarchy, spacing character or visual composition requires change control.

## 4. State acceptance

Initial, editable prefill, empty/invalid prefill, restricted request, focus, field error, error summary, Other-only, mixed selection, business-email advice, submitting, failure, retry, success and privacy states must remain reachable and mutually coherent.

Static image parity alone is insufficient. Gate 9 requires keyboard, accessibility-tree, responsive and receiver-driven state evidence.
