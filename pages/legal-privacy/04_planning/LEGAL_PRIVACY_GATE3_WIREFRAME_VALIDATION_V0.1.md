# Legal / Privacy Gate 3 Wireframe Validation V0.1

> Status: `SUPERSEDED_AS_CURRENT_BY_V0.2 / HISTORICAL`.

## 1. Control

| Field | Value |
|---|---|
| Validation ID | `LEGAL-PRIVACY-G3-QA-01` |
| Date | 2026-09-02 |
| Scope | Three complete pages at 1440/768/390, Consent state board and Mobile Menu open |
| Input copy | Privacy EN V0.1; Privacy BM V0.1; Cookie EN V0.2 |
| Result | `PASS / READY_FOR_PROJECT_CONTROL_SUBMISSION` |

## 2. Automated and file checks

| Check | Result |
|---|---|
| Required 3 × 3 page PNG/SVG surfaces generated | PASS |
| Mobile exports identify 390px logical @2× and are physically 780px wide | PASS |
| Asset dimensions and SHA-256 captured in `generation-manifest.json` | PASS |
| Current Cookie assets regenerated from V0.2 | PASS |
| Search of rendered SVGs for `Before release`, `clean browser`, `INTERNAL REVIEW`, `PENDING COPY`, `RELEASE BLOCKER` or paused-state wording | PASS — zero matches |
| Mobile Menu current authority | PASS — V0.2 only; V0.1 excluded from current manifests |

## 3. Visual checks

| Area | Result | Evidence |
|---|---|---|
| Desktop reading hierarchy | PASS | Contained Hero, TOC rail, narrow reading measure, full Footer |
| Tablet reflow | PASS | TOC/content stack and actions fit without removed modules |
| Mobile long copy | PASS | Natural wrapping, single-column flow, no visible right-edge clipping |
| Cookie inventory | PASS | Desktop table and Mobile labelled row fit the viewport |
| CTA placement | PASS | Hero and closing actions remain discoverable and balanced |
| Footer legal row | PASS | Year plus four approved legal/settings controls; no Terms |
| Consent states | PASS | No-Analytics, active-first-layer, reopened settings and four-signal matrix shown distinctly |
| Mobile Menu | PASS | Logo, RFQ, Close and eight approved destinations shown; no internal note |

## 4. Content parity

- Section order matches each approved Gate 2 authority.
- The Cookie Policy public inventory uses the user-approved sentence: `At the date shown above, no optional Analytics or advertising Cookie is active...`.
- Internal clean-browser/network verification remains in non-render controls and is absent from all page wireframes.
- `info@tio2malaysia.com`, the verified operating entity and approved Footer labels remain consistent.
- No inactive GA4, GTM, Google Ads or Vercel Web Analytics technology is presented as active.

## 5. Non-blocking release controls

BM human-equivalence review and production storage/network capture remain mandatory before release. They are content/production validation controls, not Gate 3 layout defects.

## 6. Conclusion

No blocking or important Gate 3 finding remains. The package may advance to `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`. Gate 4–10 and implementation remain unauthorized.
