# ABOUT-001 Gate 5 Validation V0.1

## 0. Result

| Field | Value |
|---|---|
| Page ID | `ABOUT-001` |
| Date | `2026-09-01` |
| Result | `PASS_FOR_GATE_5_REVIEW / NOT_APPROVED` |
| Gate 6/7 | `NOT_STARTED / NOT_AUTHORIZED` |

## 1. Automated and Visual Checks

| Check | Result |
|---|---|
| Desktop full page contains every approved module in order | PASS |
| 390px full page contains every approved module and full-length approved copy | PASS |
| Desktop Header / Mobile Header | 84px / 64px — PASS |
| Horizontal overflow | none in Desktop, 390px, Menu, Evidence and Interaction views — PASS |
| Mobile targets | all checked targets ≥44×44px — PASS |
| Desktop interactive target height | all checked targets ≥44px — PASS |
| Desktop navigation order | exact approved order — PASS |
| Mobile Menu navigation order | exact approved order — PASS |
| About current state | text + weight + structural marker/underline — PASS |
| Global RFQ routes | all point to `/request-a-quote/` — PASS |
| Header/Footer RFQ | Desktop 2; Mobile 2; Menu 1 — PASS |
| Terminal RFQ color | `rgb(0,127,119)` / `#007F77` — PASS |
| Focus example | 3px visible outline — PASS |
| Approved Logo | Header/Footer/Menu instances loaded — PASS |
| Non-logo/capability images | 0 — PASS |
| SVG or capability icon cues | 0 — PASS |
| Long company name and Taiping address | visible and wrap-safe on Desktop/390px — PASS |
| Source and review date | visible on Desktop/390px and Partial state — PASS |
| Restricted H1 | `About TiO2 Malaysia` — PASS |
| Restricted scale rows | 0 — PASS |
| Frozen legal, ISO and batch-traceability fields | absent — PASS |
| Runtime errors | 0 — PASS |

## 2. Visual Inspection Notes

- Desktop establishes a clear identity-to-evidence-to-action sequence without relying on photography.
- Mobile retains readable line lengths, full copy, visible qualifications and stable full-width CTA placement.
- No decorative gap follows CTA groups; the next evidence or relationship block begins within the same reading sequence.
- Why Malaysia avoids flags, political framing and tariff-avoidance language.
- Markets are clearly navigation/context blocks, not shipment-route claims.
- Documentation maintains the distinction between information support and controlled document request.
- Company-reported scale facts remain inside the fact table and do not become oversized counters.
- Footer structure and fixed RFQ remain consistent across evidence states.

## 3. Manifest

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `ABOUT-001_GATE5_DESKTOP_FULL_VISUAL_V0.1.png` | 1440×7464 | 660519 | `6246330BB5B0851427B595698F13F507720AD11C07530BF6EEEE7FE6E520F1D3` |
| `ABOUT-001_GATE5_390PX_FULL_VISUAL_V0.1.png` | 390×11438 | 521995 | `D78ABF42DD64F765E6F0E14D2177727EEE59CBFC61920B38D416A9646155A711` |
| `ABOUT-001_GATE5_MOBILE_MENU_OPEN_V0.1.png` | 390×868 | 15926 | `FFF997AE57DE5E7B5841A32279149B598821BFB0CDD32E453A29AE1D7DFC3466` |
| `ABOUT-001_GATE5_EVIDENCE_STATES_V0.1.png` | 1440×903 | 91529 | `40BCD86ECCCF35C5473C89CD34DF28B1ABC156014B8DFC37F70175191DAE127F` |
| `ABOUT-001_GATE5_INTERACTION_SCHEMA_V0.1.png` | 1440×900 | 58595 | `177604CEC2B025B7EB549E3CF98B186A50FA6A24484762ACD984BC01682F6325` |

## 4. Residual Restrictions and Approval Boundary

- Registration number, company status, registered address, incorporation date and legal business nature remain omitted.
- ISO, certified QMS and batch traceability remain omitted.
- First-party manufacturing, origin, scale, packing, quality-control, document and export-coordination information retains its source/applicability boundary.
- `RFQ_ROUTE_READY=false` remains a release blocker only; it cannot change the Buyer Clean visual.
- No blocking visual or responsive defect was found in this submission.
- This validation permits submission for Gate 5 review only. It does not approve Gate 5 and does not authorize Gate 6/7 or development.

