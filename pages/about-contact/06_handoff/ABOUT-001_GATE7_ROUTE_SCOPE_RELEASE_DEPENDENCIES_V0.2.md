# ABOUT-001 Gate 7 Route / Scope / Release Dependencies V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-02` |
| Parent | Route / Scope / Release V0.1 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Inheritance

V0.1 route matrix, Hub fallback, required-action release behavior, `site_scope` isolation, environment/indexing rules, Gate 8 responsibilities and Gate 9 QA remain unchanged. V0.2 replaces only the body-media dependency rule.

## 2. Body-Media Release Rule

The named Media Asset Handoff objects are already approved for ABOUT-001 public body use. Missing independent media-library files do not invalidate that authorization and do not trigger a repeat user-approval dependency.

Gate 8 must implement each Asset key through an existing source, approved derived crop or HTML/CSS/SVG reconstruction. A release blocker exists when a required named Asset key has no valid implementation output after those methods are evaluated, or when the output rasterizes UI text, changes semantic meaning or leaks across `site_scope`.

## 3. OG / Schema Image Rule

No OG or Schema image is required. If no concrete Asset key is selected, omit those properties and do not block the page solely for their absence. If emitted, the selected implementation asset/hash and neutral meaning must be recorded and match the visible page.

## 4. Preserved Release Blockers

- required routes/canonical/robots failure;
- broken RFQ, Contact or Request Documents actions;
- cross-scope content/media/cache leakage;
- HTML/metadata/Schema mismatch;
- frozen facts or `legalName` exposure;
- local Header/Footer fork or visible `CURRENT`;
- invalid media implementation for a named Asset key;
- responsive, keyboard, focus, ALT or overflow failure;
- unauthorized publication or indexing.

## 5. Phase Boundary

Gate 8 remains `NOT_AUTHORIZED / NOT_STARTED`; `HANDED_OFF=NO`.
