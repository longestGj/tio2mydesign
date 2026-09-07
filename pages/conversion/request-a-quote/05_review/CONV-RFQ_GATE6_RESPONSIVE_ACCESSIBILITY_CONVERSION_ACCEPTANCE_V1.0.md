# CONV-RFQ Gate 6 Responsive / Accessibility / Conversion Acceptance V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Visual source | `CONV-RFQ-G5-APPROVED-BASELINE-01` |

Static PNG/SVG assets prove approved design composition. They do not prove runtime DOM, accessibility tree, route behavior or receiver function; those remain later implementation/QA acceptance.

## 1. Responsive visual evidence

| Surface | Approved evidence | Gate 6 reading |
|---|---|---|
| Desktop | 1440 × 2615 complete Buyer Clean | one centred page-body flow; field pairs only inside form |
| Tablet | 768 × 3026 complete Buyer Clean | one field column and complete responsive Footer |
| Mobile | 390 × 3257 logical, @2x export | natural H1/copy/error wrapping; full-width form submit |
| Mobile Menu | 390 × 844 logical, @2x export | permanent RFQ and complete seven-item navigation |
| Desktop states | 1440 × 2600 | complete interaction/restricted-state coverage |
| Mobile states | 390 × 2100 logical, @2x export | long-state wrapping and 100-character error proof |

## 2. Runtime responsive acceptance

- Render at 1440, 1280, 1024, 768, 430, 390, 375 and 320px without page-level horizontal scrolling.
- Desktop Header is 84px; compact/Mobile Header is 64px according to the shared breakpoint contract.
- Content order remains breadcrumb → Hero → form → Other request types → Footer.
- Tablet/Mobile fields are one column; Desktop may pair only related form fields.
- `Metric tonnes (MT)` remains adjacent to the quantity input without clipping or misleading editable styling.
- Long labels, translated browser validation suppression, values, helpers and errors wrap without overlap, crop or unreadable shrinking.
- Form height is content-driven; no fixed crop, sticky submit or large artificial blank band.
- All Mobile links/controls have at least 44 × 44 logical px targets.

## 3. Semantic and keyboard acceptance

1. One H1; ordered section and form-group headings.
2. One semantic form with persistent programmatic labels; placeholders supplement labels only.
3. Required state is programmatically available and visibly indicated.
4. Keyboard focus order matches visual/semantic order.
5. Every input, select, link and button has a visible focus indicator distinct from hover/current/error.
6. Error summary receives focus after failed submit; each summary link focuses its field.
7. Hints/errors use described-by relationships; invalid fields expose invalid state.
8. Success/failure/unavailable messages use an appropriate status/alert announcement without duplicate or premature speech.
9. Submitting prevents duplicate form activation but does not trap focus or disable shared RFQ navigation.
10. Mobile Menu traps focus while open, closes on Escape, restores focus to the trigger and removes hidden navigation from the accessibility tree.
11. Reduced motion does not remove information or required feedback.
12. No state relies on colour alone.

## 4. Initial/prefill acceptance

- Initial load shows no errors or success state.
- Approved prefill is visible and editable.
- Invalid/stale prefill clears safely without first-load error or internal-status leakage.
- M-2377 neutral context does not create a recommendation badge or automatic comparative message.
- Unknown grade remains a usable path.

## 5. Validation and submission acceptance

| State | Acceptance |
|---|---|
| Validation failed | Values retained; summary and field errors exact; focus summary. |
| Submitting | Button reads `SUBMITTING…`; one attempt; values remain visible. |
| Failure | Exact failure text; `TRY AGAIN`; values retained; focus message; no Contact fallback. |
| Success | Exact receipt text only after positive acknowledgement; no quote/order/approval language. |
| Unavailable | Exact final-reader message; no request implied; global RFQ remains visible. |

Browser refresh/back-navigation behavior must avoid silently resubmitting or losing a retryable draft where the chosen implementation can safely preserve it. No sensitive form values may be placed in URLs, analytics payload labels, page metadata or client-visible logs.

## 6. Internal-link and CTA acceptance

- The form submit is the only solid page-body CTA.
- Header/Footer/Mobile Menu Request a Quote remains the shared terminal action and points to `/request-a-quote/`.
- `Request a Sample` and `Request Documents` are visually lower-weight task links and never submit RFQ data.
- No link is changed to Contact; no failure state adds Contact.
- Breadcrumb Home returns to `/` and current item remains non-duplicative.
- Route readiness is verified later. Required shared RFQ surfaces are never hidden/disabled when readiness is false.

## 7. Visual/accessibility non-regression

Gate 8 implementation must preserve the approved colour hierarchy and readable contrast while meeting semantic/focus requirements. If a runtime accessibility fix requires a visible change, it must remain materially faithful; any change to approved copy, hierarchy, field set or composition returns through change control.

