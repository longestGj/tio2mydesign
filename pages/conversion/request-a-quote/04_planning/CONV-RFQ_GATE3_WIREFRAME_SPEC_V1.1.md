# CONV-RFQ Gate 3 Wireframe Specification V1.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 3 — responsive wireframe |
| Review ID | `CONV-RFQ-G3-WF-PCR-01` |
| Date | 2026-09-01 |
| Status | `TARGETED_REVISION_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Supersedes | Full-page wireframes V1.0 in review `CONV-RFQ-G3-WF-01` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Gate 4–5 | `NOT_STARTED / NOT_AUTHORIZED` |

This revision addresses only the two findings returned by project control. All other Gate 3 content, fields, responsive structure, Global Chrome assembly and state-board evidence remain frozen.

## 1. Current review assets

| Asset | Logical viewport / export | Disposition |
|---|---|---|
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_DESKTOP_1440_V1.1.png` | 1440 × 2540 | Current revised full Desktop page |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_TABLET_768_V1.1.png` | 768 × 2609 | Current revised full Tablet page |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_390_LOGICAL_AT2X_V1.1.png` | 390 × 2679 logical; 780 × 5358 export | Current revised full Mobile page |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png` | 390 × 844 logical; 780 × 1688 export | Frozen V1.0 shared assembly proof |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_STATE_BOARD_1440_V1.0.png` | 1440 × 2220 | Frozen V1.0 key-state proof |

Matching SVG planning sources are retained beside the three revised PNGs. These are planning sources only, not development code.

## 2. P0 — form-area privacy evidence

Desktop, Tablet and Mobile now visibly render the complete approved sentence in the submit area:

> We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.

`Privacy Policy` is complete, readable and underlined as the link text. It is not blank, truncated, substituted with a placeholder or moved to the Footer.

## 3. P1 — content-driven page height

- The RFQ form card closes normally after privacy copy and the single submit control.
- The previous review-only `Desktop rule...` annotation has been removed from the Buyer Clean form.
- Desktop: form card ends at y=1865; `Other request types` starts at y=1925, a 60px gap. That section ends at y=2175; shared Footer starts at y=2240, a 65px gap.
- Tablet: form card ends at y=1991; `Other request types` starts at y=2039, a 48px gap. That section ends at y=2269; shared Footer starts at y=2349, an 80px gap.
- Mobile: form card ends at y=2081; `Other request types` starts at y=2129, a 48px logical gap. That section ends at y=2379; shared Footer starts at y=2459, an 80px logical gap.
- No large decorative or fixed-height void remains between these modules.

## 4. Frozen Gate 3 contract

- One vertical page flow: shared Header → breadcrumb → compact Hero → one RFQ form → low-weight `Other request types` → shared Footer.
- Desktop is not a page-level left/right composition. Two-column use remains confined to related form fields.
- Tablet and Mobile remain one form-field column.
- The approved original Hero remains exactly:

  `Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.`

- Product / Grade is a single select; Application is a separate single select.
- Required Quantity remains numeric with the fixed `Metric tonnes (MT)` suffix.
- Destination Country remains required free text, not a country dropdown.
- Phone / WhatsApp and Website remain optional and present.
- One solid page-body CTA remains: `REQUEST QUOTE`.
- Shared Header, Mobile Menu and Footer are consumed unchanged from Global Chrome V0.5; Request a Quote remains permanently visible.
- Mobile Menu open and the state board remain byte-identical to the V1.0 submission.

## 5. Product and outcome boundary

- M-2377 may be neutrally prefilled with the five approved Applications and Sulfate under PRODUCT V0.3; no suitability inference is added.
- M-996/M-2196 differences, rankings, advantages, equivalence, substitution and comparison-based selection reasons remain absent.
- `NO_PUBLIC_MAPPING` is not rewritten as not applicable.
- Submission success means only that the inquiry was received. It does not approve a quote, price, availability, MOQ, lead time, shipment, sample, document, regulatory result or order.

## 6. Gate boundary

This specification is submitted under `CONV-RFQ-G3-WF-PCR-01` as `TARGETED_REVISION_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. It does not authorize Gate 4, Gate 5, development, WordPress, Next.js, `D:\16Wordpress_nextjs`, deployment, publication or indexing.
