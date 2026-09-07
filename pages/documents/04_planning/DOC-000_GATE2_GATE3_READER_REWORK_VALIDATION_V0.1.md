# DOC-000 Gate 2/3 Reader Rework Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Rework ID | `DOC-000-G2-G3-READER-COPY-WF-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED` |
| Date | 2026-09-01 |
| Validation scope | Copy presence, asset dimensions, responsive overflow, target size and frozen boundaries |

## 1. Asset validation

| Asset | Dimensions | Bytes | SHA-256 | Result |
|---|---:|---:|---|---|
| Desktop | `1440 × 4165` | 285244 | `32377EF7C00467BC20DEACF9D1350ED686C99439377A87000421B8DAF6B6542D` | PASS |
| Tablet | `768 × 5203` | 287918 | `E4FD1C8BE942EB29FB5A5E45898867B4824238B5A16C0472137433888C0EE70F` | PASS |
| Mobile | `780 × 12940`; label=`390 logical @2x` | 860461 | `E3EA8889A97286E2D11F8C8B82D1F0FCB202D88AFC3EB4B904E2F9ADE410F4F6` | PASS |
| Mobile Menu open | `780 × 1688`; label=`390 logical @2x` | 43939 | `F20ED9275D8BD6739B8A73E03FEB96B90DB897200B06839CAC3FD48B0752E7A8` | PASS |

All four assets were visually inspected at original resolution. The Desktop Hero is a balanced content/media split; the steps are a line/number sequence; only scenarios use three equal cards; the request explanation is a full-width band; the closing CTA is compact.

## 2. Responsive runtime checks

| Viewport | Client / scroll width | Horizontal overflow | Minimum primary target height | 3 scenarios / 4 categories / 6 FAQ |
|---|---|---|---:|---|
| Desktop 1440 | `1440 / 1440` | None | `46.84px` | `3 / 4 / 6` |
| Tablet 768 | `768 / 768` | None | `44px` | `3 / 4 / 6` |
| Mobile 390 | `390 / 390` | None | `44px` | `3 / 4 / 6` |
| Mobile Menu 390 | `390 / 390` | None | `44px` | Menu current-link count=`1` |

## 3. Copy validation

- H1 matches the required unchanged H1.
- Hero Body, all three steps, three scenario descriptions, four category descriptions, selector body, request explanation, six Buyer Questions/answers and Closing CTA match Content Architecture V0.7.
- Full real copy is used in the three complete-page assets; no lorem ipsum or short fake title is used.
- The FAQ is collapsed by default with one expanded answer proof.
- The Mobile Menu contains the approved order, persistent RFQ and Documents current state with no visible `CURRENT` word.

## 4. Frozen-boundary validation

| Boundary | Result |
|---|---|
| Page ID/URL/type/NO_PRIMARY_KEYWORD unchanged | PASS |
| Exactly four documentation categories | PASS |
| 14-Grade selector contract retained | PASS |
| No Finder/Document Index/file result/download/inventory/fifth category | PASS |
| No availability, direct-download, approval, timing or universal-coverage promise | PASS |
| Grade-only request handoff retained | PASS |
| Global Header/Footer, RFQ and legal controls retained | PASS |
| Gate 4/5, child page and development authority absent | PASS |

## 5. Open release dependencies

Request Documents Grade-prefill/editability and document-type multi-select, shared legal routes, Cookie Settings behavior, final media evidence and final release eligibility remain later dependencies. They do not render as Buyer Clean placeholders or fallback copy.

## 6. Conclusion

Project control independently reviewed the copy, original-detail assets and validation results and recorded PASS pending explicit user confirmation. This is not user approval and does not authorize Gate 4/5 or implementation.
