# CONV-DOC Gate 6 Responsive / Accessibility / Conversion Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Review ID | `CONV-DOC-G6-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Visual source | Approved Gate 5 V0.6 baseline |

Static PNGs prove approved composition. They do not prove runtime DOM, accessibility tree, receiver operation, persistence, routing or analytics; those require Gate 8 implementation and Gate 9 read-only QA.

## 1. Approved responsive evidence

| Surface | Asset | Gate 6 reading |
|---|---|---|
| Desktop | 1440 × 2357 | Complete workflow, two-column field rhythm, privacy left and CTA right |
| Tablet | 768 × 2658 | Readable paired fields and complete shared Footer composition |
| Mobile | 390 logical @2×; 780 × 6766 | One-column form, privacy directly above full-width CTA, no horizontal overflow |
| Mobile Menu | 390 logical @2×; 780 × 1440 | Shared navigation with permanent RFQ; no Request Documents top-level item |
| Interaction States | 1600 × 2820 | Prefill, empty, restricted, validation, focus, error, submitting, failure, retry, success and privacy coverage |

## 2. Runtime responsive acceptance

Gate 8/9 must verify 1440, 1280, 1024, 768, 430, 390, 375 and 320px without page-level horizontal scrolling, clipping or fixed-height content loss.

- Desktop Header is 84px; Mobile Header is 64px.
- Fields may pair on Desktop/Tablet only while labels, long values, helpers and errors remain readable.
- Mobile uses one column and at least 44px logical touch targets.
- The terminal order remains privacy then submit; no sticky duplicate submit bar is allowed.
- Long company names, 254-character email handling, 500-character Additional Requirements, wrapped errors and success/failure copy remain stable.
- No artificial post-button void, hidden overflow or page-local Footer fork is allowed.

## 3. Semantic and keyboard acceptance

1. Exactly one H1 and one semantic form.
2. Every control has a persistent programmatic label; placeholder is supplementary.
3. Required state is visible and programmatically available.
4. Country / Region uses text-input semantics, not combobox/select semantics.
5. Document Types use a keyboard-operable multi-selection group with a programmatic group label.
6. Focus order follows visible/semantic order; privacy link precedes submit.
7. Focus style remains distinct from hover, selected, error and disabled states.
8. Failed submit focuses one error summary; each summary link focuses its field.
9. Hints/errors use described-by relationships and invalid controls expose invalid state.
10. Submitting, failure and success use appropriate status/alert announcements without duplicate or premature speech.
11. Mobile Menu traps focus while open, closes on Escape, restores trigger focus and removes hidden navigation from the accessibility tree.
12. No state relies on colour or motion alone.

## 4. Form and state-machine acceptance

| State | Runtime requirement |
|---|---|
| Initial | No error or success styling; supported prefill visible/editable |
| Validation failed | Preserve values; exact summary and field errors; no network request |
| Submitting | Prevent duplicate page-body submit; preserve visible values; shared RFQ stays navigable |
| Failure/unconfirmed | Preserve values; show Try again; do not claim receipt or fall back to Contact/unverified channels |
| Retry | Reuse preserved values and return to submitting |
| Success | Render only after explicit positive receiver acknowledgement; state receipt only |
| Service unavailable | Never knowingly release as the normal experience; operational release blocker |

Business-email syntax validation does not prove deliverability. Other-only conditional validation must not erase text when selection changes. Refresh/back behavior must avoid silent resubmission and must not place sensitive form values in URLs, metadata, analytics labels or client-visible logs.

## 5. CTA and shared-Chrome acceptance

The body has one solid workflow action: `Request Documents`. Global Request a Quote remains the fixed shared terminal navigation action at `/request-a-quote/`. The two actions retain distinct scopes and must not submit each other's data.

Runtime accessibility and visual fixes may not change approved copy, fields, category count, hierarchy or composition without change control.
