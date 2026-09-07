# APP-000 Applications Hub — Full Visual Design V0.12

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Version | V0.12 |
| Date | 2026-09-01 |
| Review ID | `APP-000-G5-V12-GLOBAL-CHROME-REALIGN-01` |
| Status | `REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Baseline role | `UNIFIED_CURRENT_VISUAL_REVIEW_CANDIDATE` |
| Sole Global Chrome authority | `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |

V0.12 inherits the V0.11 APP-000 body exactly and corrects only shared Header/Footer pixels and authority references. The controlled delta is `APP-000_GLOBAL_CHROME_REALIGNMENT_DELTA_V0.1.md`.

## 2. Global Chrome conformance

| Contract | V0.12 result |
|---|---|
| Desktop Header | 84px; Applications Bold + 3px Teal underline; visible `CURRENT` count 0 |
| Mobile Header | 64px logical; `Logo | RFQ | Menu`; accessible name contract remains `Request a Quote` |
| Mobile Menu | Applications Bold + 4px Teal left marker; visible `CURRENT` count 0; RFQ terminal action retained |
| RFQ | Fixed in Desktop Header, Mobile Header, Mobile Menu and Footer |
| Header Logo | Production SVG `brand_logo_primary_horizontal` |
| Footer Logo | Production SVG `brand_logo_reverse_monochrome` |
| Footer | Approved Deep Navy Brand / Explore / Information / Procurement / RFQ / Copyright contract; no page-level expansion |

Production SVG hashes match Manifest V1.0:

- Primary horizontal: `EEED3A758E7AE1B847238D1C88E86EEE7A8E67B863969AF4D286747E9A72487C`.
- Reverse monochrome: `7CFAEAFA02AC8469A006C9489DB2F92B15B2621E4151B04EFE1B30FC734C1B5E`.

## 3. Protected body result

All six V0.11 → V0.12 raw-RGBA protected body hashes are identical. Exact values are recorded in `APP-000_GLOBAL_CHROME_REALIGNMENT_DELTA_V0.1.md`.

Protected content includes:

- H1, Hero copy, quick navigation and Application cards;
- PRODUCT V0.3 sets 8 / 8 / 7 / 4 / 2 / 1;
- M-2377 in five approved Applications and Sulfate;
- five-step guide and Desktop/Tablet/Mobile Process presentation;
- procurement cards, FAQ, Final RFQ and route-safe behavior;
- `NO_PRIMARY_KEYWORD`, child-page keyword ownership and all comparison restrictions.

## 4. Formal Manifest

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.12.png` | 1440×5410 | 662280 | `7011C412F549C8D3F8AA7C5FADCCED65B0F99893BEBD2486EAABE75276C7A0A3` |
| `APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.12.png` | 1440×4374 | 527180 | `E42160CBE90D40A03270DAA15E0A0020C7B8D047B58499788C167E0506F9D2EC` |
| `APP-000_G5_TABLET_FULL_ROUTE_BUYER_CLEAN_V0.12.png` | 1024×5416 | 607760 | `C9EEE3D60B730BD135BF6A65B4D51ADFE4F3F27C1F3C11E6009587300CD7E2A3` |
| `APP-000_G5_TABLET_ROUTE_SAFE_BUYER_CLEAN_V0.12.png` | 1024×4354 | 478362 | `B88323CA14436EC6F6922AA5D263BF185F8BD86D09993275A5E27F15E359628C` |
| `APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.12.png` | 780×17064, representing 390×8532 logical | 1471888 | `3DD9BEC462E2C704AFE4BAADCFD63AC3CC175A98557BF3F4B053BC49E183FE50` |
| `APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.12.png` | 780×13366, representing 390×6683 logical | 1145715 | `4D28E650B3354A07ED383946F514F99E30794AF1BE802CA1B0430E94AF1818B3` |
| `APP-000_G5_GLOBAL_CHROME_STATES_V0.12.png` | 1600×1740 | 240743 | `5FA7BCC78A53C5D03E71532CC525B75DEAC75D83DE101580DD76046EE3F171B4` |

The unaffected `APP-000_G5_APPLICATION_COMPONENT_STATES_V0.11.png` remains the current Application interaction-state reference with SHA-256 `F309BFB918D9E0C881F22CC550C5B820F0D40C6C672E2F6FEB3876C52FB7E43E`; it is not duplicated or altered by this Chrome-only correction.

V0.11 PNGs remain historical and are not overwritten or deleted.

## 5. Original-detail QA

- Desktop Full-route and Route-safe: Production SVG Logo, 84px Header, 3px current underline, fixed RFQ, Footer closure and no entity line confirmed.
- Tablet Full-route and Route-safe: 84px Header, readable navigation, fixed RFQ, four-column Footer and no clipping confirmed.
- 390px Full-route and Route-safe: 64px `Logo | RFQ | Menu`, 44px controls, no horizontal overflow, Mobile Footer fixed RFQ and normal closure confirmed.
- Global Chrome board: buyer-visible `CURRENT` count 0 in the Header/Menu compositions; focus reference remains distinct from the current-page marker.

Machine-visible Logo-region checks also passed for all six full-page assets: Header non-background pixel counts are 2841 for Desktop/Tablet and 5302 for 2× Mobile; Footer non-background counts are 2442 for Desktop/Tablet and 5378 for 2× Mobile. Every asset's final row is complete Deep Navy, proving Footer closure.

## 6. Governance

| Record | Status |
|---|---|
| `APP-000-G5-V12-GLOBAL-CHROME-REALIGN-01` | `REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| APP-000 V0.11 | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.12` |
| `GHF-APP-V11-ENTITY-QUOTE-01` | `CLOSED_WITHOUT_APPROVAL / SUPERSEDED_BY_GLOBAL_HEADER_FOOTER_SPEC_V0.5` |
| Live DOM / route QA | `NOT_TESTABLE / RELEASE_BLOCKER` |
| `G5-01` | `OPEN` |
| Gate 6/7 | Not started / not authorised |

Local visual and hash checks do not constitute project-control approval.
