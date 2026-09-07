# CONV-SAMPLE Gate 9 Project Control Return V0.1

## Document Control

| Field | Value |
|---|---|
| Page ID | `CONV-SAMPLE` |
| Page | Request a Sample |
| URL | `/request-sample/` |
| Review ID | `CONV-SAMPLE-G9-PCR-01` |
| Review date | `2026-09-04` |
| Review authority | Project Control |
| Gate | Gate 9 — Read-only Quality Acceptance |
| Status | `CONDITIONAL_RETURN / TARGETED_DEVELOPMENT_REVISION_REQUIRED` |
| Gate 9 approval | `NOT_APPROVED` |
| Gate 10 | `NOT_AUTHORIZED` |

## Project-control conclusion

The submitted Gate 9 evidence is not approved in its current state. Project Control independently confirmed all four consolidated implementation findings. The page remains in `READ_ONLY_QA_IN_REVIEW` until the development owner submits a targeted revision and the page owner completes a fresh read-only re-review.

## Confirmed findings

### `SAMPLE-G9-P1-01` — known service unavailability is not represented on the initial page

When the server already knows that the request receiver URL or token is absent, the initial page still exposes a usable form. The approved handoff contract requires the initial page to replace the form with the approved service-unavailable panel when that condition is known before rendering.

Required correction:

- pass a non-secret server-side readiness value to the page;
- render the approved unavailable panel on the initial GET when the receiver is unavailable;
- do not expose the receiver URL, token, or other secrets to the client;
- retain the existing input-preservation and failure handling when readiness changes during submission.

### `SAMPLE-G9-P1-02` — Privacy Policy link target is below the approved touch minimum

At `768px`, `430px`, `390px`, `375px`, and `320px`, the Privacy Policy link's interactive target is approximately `17px × 34px`, below the approved minimum of `44px × 44px`.

Required correction: make the actual clickable/focusable target at least `44px × 44px` at all applicable breakpoints. Non-interactive surrounding whitespace does not satisfy this requirement.

### `SAMPLE-G9-P2-01` — FAQ disclosure semantics do not match the handoff contract

The implementation uses native `details/summary`, so the reviewed control exposes no `aria-expanded` value. The approved Gate 7 acceptance contract specifies disclosure buttons with an accurate expanded state.

Required correction: implement each FAQ disclosure as a keyboard-operable button with accurate `aria-expanded` state and an accessible relationship to its answer panel.

### `SAMPLE-G9-P2-02` — submitting state is missing `aria-busy`

The form correctly disables submission and prevents duplicate requests, but the form does not expose the approved `aria-busy=true` state while a request is in flight.

Required correction: set `aria-busy=true` on the form during submission and restore it when the request completes or fails.

## Scope preserved

The targeted revision must not change the approved page copy, field contract, product relationships, no-promise boundaries, shared Global Chrome contract, or `site_scope=tio2-my` isolation. It must not perform deployment, production release, DNS changes, or indexing.

## Required re-review evidence

- focused automated tests demonstrating all four corrected behaviors;
- typecheck, lint, build, and relevant regression-test results;
- browser evidence at the affected responsive widths;
- keyboard and accessibility evidence for FAQ, submitting state, and the Privacy Policy link;
- changed-file list and development commit hash;
- confirmation that existing release blockers remain recorded and that Gate 10 is still unauthorized.

## Release boundary

Receiver/persistence readiness, WordPress migration, Privacy Policy availability, shared dependencies, and explicit Gate 10 release authorization remain release controls. This return does not authorize deployment or publication.
