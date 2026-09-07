# MARKET-UK-001 Gate 5 Responsive and Conditional States V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-UK-001` / `/markets/united-kingdom/` |
| Version / date | V0.1 / 2026-09-05 |
| Gate 4 | `USER_APPROVED / CLOSED` |
| Gate 5 | `APPROVED / CLOSED` |
| Buyer Clean direction | `UK Procurement Editorial` |
| Gate 6 | `AUTHORIZED / IN_PROGRESS` |
| Gate 7–10 | `LOCKED / NOT_AUTHORIZED` |

## 1. Responsive evidence

| Surface | Logical viewport | Complete evidence | Result |
|---|---:|---|---|
| Desktop | 1440px | `market-uk-001/v0.1/MARKET-UK-001_GATE5_FULL_DESKTOP_1440_V0.1.png` | Full 8177px page; no clipping or horizontal overflow |
| Tablet | 768px | `market-uk-001/v0.1/MARKET-UK-001_GATE5_FULL_TABLET_768_V0.1.png` | Full 10724px page; no clipping or horizontal overflow |
| Mobile | 390px | `market-uk-001/v0.1/MARKET-UK-001_GATE5_FULL_MOBILE_390_V0.1.png` | Full 14770px page; no clipping or horizontal overflow |
| Mobile Menu | 390 × 844 | `market-uk-001/v0.1/MARKET-UK-001_GATE5_MOBILE_MENU_OPEN_FOCUS_390_V0.1.png` | Dialog open, Close focused, Markets current, fixed RFQ present |

The three complete-page proofs retain every approved module and the complete Gate 2 Buyer Clean copy. Desktop uses the full shared navigation. Tablet and Mobile use the shared Mobile Header. At 390px, the Header order remains `Logo | RFQ | Menu`, the reading flow is single-column and all interactive targets are at least 44px high.

## 2. Interaction-state evidence

### 2.1 Mobile Menu focus containment

| Interaction | Required result | Verified result |
|---|---|---|
| Open Menu | `aria-expanded=true`, scrolling locked, Close receives focus | PASS |
| Shift+Tab from Close | Wrap to the final `Request a Quote` action inside the dialog | PASS |
| Tab from final RFQ | Wrap to Close | PASS |
| Escape | Close dialog, restore scrolling, set `aria-expanded=false`, return focus to Menu | PASS |

Gate 4 opened, closed and focused the dialog correctly but allowed Shift+Tab to move to the background Menu trigger. Gate 5 adds only the focus-containment behavior. It changes no visible copy, layout, style, route or screenshot pixel.

### 2.2 FAQ disclosure

| State | Evidence | Purpose |
|---|---|---|
| Default mixed state | All three complete-page proofs | First two answers open; remaining four collapsed |
| All expanded | `market-uk-001/v0.1/MARKET-UK-001_GATE5_FAQ_ALL_EXPANDED_DESKTOP_1440_V0.1.png` | Validates all six complete answers and accumulated vertical rhythm |
| All collapsed | `market-uk-001/v0.1/MARKET-UK-001_GATE5_FAQ_ALL_COLLAPSED_MOBILE_390_V0.1.png` | Validates mobile scanability, wrapping and 44px targets |

The controls remain native `details` and `summary`. Heading order and answer copy do not change between states.

### 2.3 Visible keyboard focus

`market-uk-001/v0.1/MARKET-UK-001_GATE5_DOCUMENTS_FOCUS_DESKTOP_1440_V0.1.png` shows the Documents primary action with a 3px solid Teal outline. The state is visible independently of colour fill and remains outside adjacent content.

## 3. Gate 2 conditional-state closure

| Gate 2 state | Gate 5 Buyer Clean result | Visual evidence / rule |
|---|---|---|
| `UK-S0-FINAL-TARGET` | Full approved modules, six representative Grades, GB/NI, Documents, COO, official Trade sources and Final RFQ | Three complete-page proofs |
| `UK-S1-TRADE-CURRENT` | Not rendered in the current Buyer Clean candidate because same-day official freshness plus an approved/current/route-ready Trade Update has not been supplied | The future insertion point remains defined by Gate 2; no stale dated statement is visualised as current |
| `UK-S2-TRADE-NOT-CURRENT` | Evergreen Trade guidance plus the GOV.UK Tariff and TRA actions | Current complete-page proofs; the omitted dated paragraph and internal action leave no empty card or divider |
| `UK-S3-ROUTE-IMPLEMENTATION` | Required final-reader actions remain visible; no route-status label appears | Visual target only; runtime readiness remains a later implementation and release contract |
| `UK-S4-UNSUPPORTED-CAPABILITY` | Unsupported UK office, warehouse, stock, registration, certification, MOQ, lead-time, packaging and delivery claims remain absent | No empty placeholder or compensating media block |
| `UK-S5-COO-APPROVED` | `A Certificate of Origin is available upon request.` appears exactly once in Documents | Three complete-page proofs and automated text count |
| `UK-S6-RFQ-FAILURE` | Header, Hero, Final CTA and Footer remain ordinary navigation to the shared RFQ owner; no inline form or fabricated success/failure state | RFQ form behavior stays owned by `CONV-RFQ` |
| `UK-S7-NO-IMAGE` | The complete editorial page renders with zero main-content images | Normal approved state; no blank media frame or placeholder |

Internal state names and conditions in this document are not Buyer Clean copy. They do not appear in any complete-page visual.

## 4. Global Chrome assembly

- Shared Header, Mobile Header, Mobile Menu and Footer are consumed without page-level redesign.
- Markets is the sole current navigation item on the visible active navigation surface; buyer-visible `CURRENT` is absent.
- Primary production SVG Logo appears in Header and Mobile Menu; reverse production SVG Logo appears in Footer.
- RFQ remains fixed on all Global Chrome surfaces.
- Footer legal order is copyright, Privacy Policy, Dasar Privasi (BM), Cookie Policy, Cookie Settings.
- Dasar Privasi (BM) uses `/ms/privacy-policy/`.
- Cookie Settings is a button with no route and dispatches the Consent Manager event.

## 5. Boundary

This Gate 5 visual-state evidence passed project-control review and was approved by the user on 2026-09-05. Gate 6 review is authorized. The approval does not make any route live, validate current Trade status, create a UK capability claim, authorize Gate 7–10, start another Market child page, or authorize development, deployment, publication, DNS or indexing.
