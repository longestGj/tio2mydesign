# CONV-DOC Gate 3 Binding Successor Wireframe Specification V0.6

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Review ID | `CONV-DOC-G5-DIRECTED-REPAIR-PCR-01` |
| Status | `CURRENT_GATE_5_AUTHORITY / APPROVED_AS_GATE_5_BASELINE` |
| PCR-01 conclusion | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Parent Gate 5 V0.6 | `APPROVED / CLOSED` |
| User approval | 2026-09-03; current user explicit decision |
| Role | Minimal current Gate 3 binding successor |
| Scope | Country control and terminal privacy/CTA order only |
| Predecessor | V0.5, retained as historical evidence |
| Gate ceiling | Gate 5 only |

This successor preserves the previously approved one-surface page structure, responsive density, stepper, prefill, paired Desktop/Tablet fields, single-column Mobile flow, five request types, eight fields, 14-Grade selector, long-content test and shared Global Chrome consumption. It changes only the two bindings below. The predecessor is not part of the current authority set.

## 1. Country / Region control

At 1440px, 768px and 390px, Country / Region is a required single-line free-text input with persistent label, visible focus and adjacent helper/error treatment.

- Placeholder: `Enter your country or region`
- Helper: `Enter the country or region where your company is based.`
- Empty error: `Enter your country or region.`
- No dropdown arrow, options, country-list binding or select semantics.

## 2. Terminal action order

Privacy precedes the primary submit action in DOM, accessible reading and keyboard order on all widths and all submittable states.

| Viewport | Current wireframe rule |
|---|---|
| Desktop 1440px | Privacy sentence left; Request Documents CTA right |
| Tablet 768px | Privacy sentence left; CTA right while readable, otherwise privacy stacks above CTA |
| Mobile 390px | Privacy sentence immediately above the full-width Request Documents CTA |

The visible Privacy Policy link targets `/privacy-policy/`. No consent checkbox is added. Mobile controls and legal links retain at least 44px logical touch treatment where applicable, and no post-button dead space is introduced.

## 3. Preserved structure

1. Shared Header and breadcrumb.
2. Concise Hero and horizontal three-step cue.
3. One primary form surface.
4. Conditional editable prefill with no empty shell.
5. Two-column Desktop/Tablet fields and request types; one-column Mobile flow.
6. Compact review rows.
7. Terminal privacy and submit region governed by Section 2.
8. Shared Footer consumption with permanent RFQ.

Required state coverage remains normal, editable prefill, no prefill, restricted request, personal-email advice, focus, validation, error summary, Other-only, mixed selection, submitting, retry, failure, success, privacy and human review. Long-content proof remains 254 characters for email and 500 for Additional Requirements.

## 4. Authority effect

V0.6 is the current effective Gate 3 authority. V0.5 remains only as historical provenance and is marked `HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING`.

PCR-01 remains project-control passed and closed. Parent Gate 5 V0.6 is approved and closed by the user's explicit decision dated 2026-09-03. No Gate 6+, development or `D:/16Wordpress_nextjs` work is authorized.

## 5. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.5 | 2026-09-01 | Historical responsive wireframe | `HISTORICAL / SUPERSEDED_FOR_COUNTRY_PRIVACY_BINDING` |
| V0.6 | 2026-09-03 | Minimal binding successor for Country free text and privacy-before-submit | `CURRENT_GATE_5_AUTHORITY / APPROVED_AS_GATE_5_BASELINE` |
