# Legal / Privacy Gate 4 Visual Direction Validation V0.1

> Status: `CONDITIONAL_RETURN / SUPERSEDED_AS_CURRENT_BY_V0.2 / HISTORICAL`.

## Control

| Field | Value |
|---|---|
| Validation ID | `LEGAL-PRIVACY-G4-QA-01` |
| Date | 2026-09-02 |
| Scope | Two 1440px internal direction boards, token contract and representative states |
| Result | `CONDITIONAL_RETURN / LIGHT_SURFACE_TEAL_CONTRAST_DECISION_REQUIRED` |

## Asset verification

| Asset | Dimensions | PNG bytes | SHA-256 |
|---|---:|---:|---|
| Desktop editorial direction | 1440×2140 | 288636 | `C67B2379D9508ABFFE7BBE6B9098954F4088E1C09524811019BBB412FF78A3F7` |
| Responsive / Consent direction | 1440×1860 | 273294 | `8FD52B3343E01273202BCD9C7C022ED529BF1DA702FAB3B6DA6B299FB96F7544` |

SVG and PNG hashes match `visual-direction/gate4_v0.1/assets/generation-manifest.json`.

## Visual and governance checks

| Check | Result |
|---|---|
| Visual Standard V1.0 palette, Inter hierarchy, card and button geometry | PASS |
| Accessible Action Teal addendum consumed | PASS |
| White on `#008078` filled CTA | PASS — `4.82:1` |
| White on Primary Navy | PASS — `13.96:1` |
| Body `#334155` on white | PASS — `10.35:1` |
| Malaysia Teal on Deep Navy large/accent usage | PASS — `5.86:1` |
| Privacy Desktop TOC non-sticky interaction shown outside buyer-visible sample and specified | PASS |
| Consent Accept/Necessary first-layer controls identical in style and size | PASS |
| Cookie Policy reduced to tertiary link in Analytics first layer | PASS |
| Current no-Analytics state remains distinct from conditional Analytics state | PASS |
| Approved Production SVG logos used | PASS |
| Terms link/page introduced | PASS — zero |
| Decorative/factual factory photography | PASS — zero |

## Buyer Clean boundary

The two files are explicitly internal direction boards. Board titles, token labels and release-state explanation are not public UI. The representative policy and Consent panels contain no `INTERNAL REVIEW`, placeholder, release-blocker or evidence-gap copy. Gate 5 must remove all board annotations and render only approved buyer-visible content.

## Open release controls

BM human-equivalence review, production Cookie/Local Storage/network inventory and Web3Forms key/receiver remain later release controls. They do not block Gate 4 direction approval.

## Conclusion

The later light-surface functional-teal audit found `#00A99D` link/focus usage at `2.93:1`. This validation is conditionally returned pending `LEGAL-PRIVACY-G4-LIGHT-TEAL-CONTRAST-01`; Gate 4 cannot advance to approval until the direction assets and token contract are corrected and revalidated.
