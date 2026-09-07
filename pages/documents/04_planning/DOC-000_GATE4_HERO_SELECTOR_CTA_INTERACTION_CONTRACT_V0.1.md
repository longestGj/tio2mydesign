# DOC-000 Gate 4 Hero / Selector CTA Interaction Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Decision ID | `DOC-000-G4-HERO-CTA-02` |
| Status | `USER_APPROVED_INTERACTION_CONTRACT / ACTIVE_FOR_GATE4` |
| Date | 2026-09-02 |
| Gate 4 package | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Action matrix

| Surface | Initial visible action | Semantic behavior | Destination / result |
|---|---|---|---|
| Hero | `Start a Document Request` | Accessible link; direct native navigation | `/request-documents/`; no query; no Grade prefill |
| Selector | `Continue to Request Documents` | Operable control from initial load | Without Grade: stay, exact error, focus dropdown |
| Selector with valid Grade | Same `Continue to Request Documents` | Grade-only handoff | `/request-documents/?product={GRADE}`; editable prefill |
| Closing without Grade | `Select a Product Grade` | Focus upper Selector | No navigation |
| Closing with valid Grade | `Continue to Request Documents` | Same Grade-only handoff | `/request-documents/?product={GRADE}` |

## 2. Hero link requirements

- Use an actual link with `href="/request-documents/"` or the approved routing equivalent that preserves link semantics.
- It must work without a JS-only click handler.
- It must not use an in-page fragment, `scrollIntoView`, focus transfer or Product Grade parameter.
- Its visible label is exactly `Start a Document Request`.
- Keyboard focus is visible; Enter follows the link.

## 3. Selector requirements retained

- One dropdown contains the same 14 approved Grade values with no default.
- Selector remains immediately below Hero.
- Initial Continue remains visible, focusable and operable.
- No-selection activation does not navigate; it displays `Select a product grade to continue.` and focuses the dropdown.
- Valid selection shows `Selected product grade: {GRADE}` and uses the same Continue action.
- Unrelated page state is preserved.

## 4. Request Documents receiver boundary

- Direct Hero entry: Grade field starts unselected.
- Grade-first entry: a valid Grade is prefilled and editable.
- Document-type selection, request fields, validation and submission remain owned by `/request-documents/`.
- This contract does not establish route readiness or implementation completion.

## 4A. Responsive Selector geometry

### Tablet 768px

- Dropdown and Continue use separate full-width rows.
- A stable region for helper, validation and selected confirmation remains between the field and actions.
- `Not sure which grade to select? Explore Products. →` remains visible before Continue.
- Initial, validation and selected states use the same field, message, link and button coordinates; only message content and field state change.
- Field/button overlap is prohibited; minimum visible field-to-button separation is 16px.

### Mobile 390px

- `Not sure which grade to select? Explore Products. →` remains Buyer-visible and links to `/products/`.
- The helper/link must not be hidden because of viewport width.
- Continue remains full-width and at least 44px high, with no overlap or horizontal overflow.

## 5. Stage boundary

The interaction decision is user-approved for Gate 4 specification use. Gate 4 visual approval, Gate 5, development and D16 remain unauthorized.
