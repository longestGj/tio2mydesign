# CONV-RFQ Gate 5 Complete Visual Design V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 5 targeted revision |
| Date | 2026-09-01 |
| Status | `TARGETED_REVISION_SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED / RELEASE_BLOCKED` |
| Revision source | User rejected the PC left/right body layout |
| Visual direction | `visual-directions/CONV-RFQ_VISUAL_DIRECTION_V0.2.md` |
| Supersedes | V0.1 Desktop complete visual only |
| Inherits unchanged | V0.1 390px complete visual, Desktop/Mobile state boards, Mobile Menu, form/state contracts, PRODUCT V0.3 and Global Chrome V0.5 |

## 1. Revised Desktop asset

| Asset | Exact pixel size | Layout | SHA-256 |
|---|---:|---|---|
| `assets/CONV-RFQ_G5_DESKTOP_FULL_V0.2.png` | 1440 × 4517 | Single-column page body; intro above centred form | `B1928EF06963DA40D827134E96B9BAD37EEA218679F7E328A7933B7497A1376F` |

The render reports `contentWidth = 1440`, so the revision introduces no Desktop horizontal overflow.

## 2. Desktop composition

The V0.1 368px explanatory rail beside the form is removed. The V0.2 reading order and visual order now agree:

`Global Header → Breadcrumb → Intro → Preparation cards → Centred RFQ form → Human review → Buyer questions → Global Footer`

The main form is a single 1040px centred surface. Related field pairs such as Contact/Company and Quantity/Unit remain paired inside the form; they do not create a competing page-level left/right layout.

## 3. Unchanged Gate 5 assets

| Asset | Size | SHA-256 |
|---|---:|---|
| `assets/CONV-RFQ_G5_MOBILE_390_FULL_V0.1.png` | 390 × 6663 | `085B4E2D67F96D422825D37C2A8B6538FAB5322E69E2E8D580223072EB9C16EB` |
| `assets/CONV-RFQ_G5_DESKTOP_STATE_BOARD_V0.1.png` | 1440 × 2475 | `1D2D974D06DD84D2CFB2FF2D1DCDFBB443C5982D0058ADB97AFEE46F27124BA4` |
| `assets/CONV-RFQ_G5_MOBILE_STATE_BOARD_V0.1.png` | 390 × 4692 | `1AA2A223695C0D29738C0CCCD2ABC4FA81671A93D1FA8F100A729D881F2A4D1B` |
| `assets/CONV-RFQ_G5_MOBILE_MENU_OPEN_V0.1.png` | 390 × 844 | `C1478FA360E48380A286FFCDA0D7E210FFEE3B1B8C4CFB631096E7572DE2DC29` |

## 4. Preserved boundaries

- One dominant form and one page-level submit action.
- Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer RFQ remain visible.
- Conversion current-page marker count remains zero.
- M-2377, M-996/M-2196 and NO_PUBLIC_MAPPING rules remain unchanged.
- Success remains receipt-only.
- Privacy, receiver/manual channel, route/form readiness and index/canonical activation remain release blockers.
- No Gate 6/7, development, CMS, route, test, deployment or release work is authorized.

## 5. Review conclusion

V0.2 resolves the specific PC page-body layout objection by replacing the side-by-side composition with a stacked single-column hierarchy. It remains a Gate 5 review submission, not an approved or release-ready artifact.

