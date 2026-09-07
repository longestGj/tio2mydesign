# CONV-RFQ Gate 3 Wireframe Validation V1.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-RFQ-G3-WF-PCR-01` |
| Specification | `CONV-RFQ_GATE3_WIREFRAME_SPEC_V1.1.md` |
| Specification bytes / SHA-256 | 4,757 / `B30A1F7DB90D6B02115F4A3402A79CE2F4B05CA61B2F0C27435E660FF2341CAC` |
| Date | 2026-09-01 |
| Result | `PASS_FOR_TARGETED_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Revised raster evidence

| PNG | Pixels | Bytes | SHA-256 |
|---|---:|---:|---|
| `CONV-RFQ_GATE3_DESKTOP_1440_V1.1.png` | 1440 × 2540 | 171,035 | `B4B7850FA2EB8D106375DB36293A2709F4D5185769EEFCA654452F4F227CD5A0` |
| `CONV-RFQ_GATE3_TABLET_768_V1.1.png` | 768 × 2609 | 152,616 | `37C4A553BD35AAEC7E1B598C7D94CDEB7EB991E0327CEC62C28FEF9FC11D344B` |
| `CONV-RFQ_GATE3_MOBILE_390_LOGICAL_AT2X_V1.1.png` | 780 × 5358; 390 × 2679 logical | 295,561 | `3F101FFE7224EAC4FEB8A7A446376754F969D3CFC060BF8387B661BABD2AFFEC` |

All three PNGs decoded successfully. Raw-channel inspection found zero non-grayscale samples. Desktop, Tablet and Mobile were visually inspected at final export.

## 2. Revised editable source evidence

| SVG | Logical canvas | Bytes | SHA-256 |
|---|---:|---:|---|
| `CONV-RFQ_GATE3_DESKTOP_1440_V1.1.svg` | 1440 × 2540 | 12,122 | `CE318E17FFEC9057B09088283EDE0584AB60C248AD3C2E5FC8CCF7645E028AC7` |
| `CONV-RFQ_GATE3_TABLET_768_V1.1.svg` | 768 × 2609 | 11,466 | `3726DF5A3243E28EF79A3BFCECC964CBE35A9013B90C54B42A8C21F7AFDB0D07` |
| `CONV-RFQ_GATE3_MOBILE_390_LOGICAL_AT2X_V1.1.svg` | 390 × 2679 | 13,093 | `D822C65CD65C99F706E78E75D6A44B9A18BD60A4BEA490C821C2CADD8F77D6DC` |

SVGs are planning sources only and are not site components or implementation code.

## 3. Returned-finding validation

| Finding | Evidence | Result |
|---|---|---|
| P0 complete privacy sentence in form submit area | Exact sentence is visibly assembled in all three final rasters; `Privacy Policy.` occurs once in each revised SVG as complete underlined link text | PASS |
| P0 no blank/truncated/placeholder link | Link text is readable in Desktop, Tablet and Mobile visual inspection | PASS |
| P0 not moved to Footer | Sentence remains directly above `REQUEST QUOTE` inside the RFQ form card | PASS |
| P1 form closes after privacy + submit | Form cards close at y=1865 / 1991 / 2081 logical for Desktop / Tablet / Mobile | PASS |
| P1 gap to `Other request types` | 60 / 48 / 48 logical px | PASS |
| P1 gap from `Other request types` to Footer | 65 / 80 / 80 logical px | PASS |
| P1 review annotation removed | `Desktop rule` scan count = 0 in all revised SVGs | PASS |
| P1 large fixed void removed | Content-driven full-page heights and visual inspection | PASS |

The Mobile sentence wraps across three visible lines but remains semantically and visually complete:

`We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.`

## 4. Frozen-content regression scan

| Check | Result |
|---|---|
| Original approved Hero present in all three current pages | PASS |
| Superseded `Tell us the grade you need...` Hero | `0 / PASS` |
| Product / Grade and Application remain independent fields | PASS |
| Destination Country remains free text with `Enter the destination country` | PASS |
| Country dropdown copy `Select a destination country` | `0 / PASS` |
| Required Quantity + fixed `Metric tonnes (MT)` | PASS |
| Phone / WhatsApp and Website retained | PASS |
| Contact fallback | `0 / PASS` |
| One solid page-body CTA | PASS |
| Page-level side rail or left/right composition | `0 / PASS` |

## 5. Frozen V1.0 evidence integrity

| Frozen PNG | SHA-256 comparison |
|---|---|
| Desktop V1.0 | `MATCH` — historical returned asset unchanged |
| Tablet V1.0 | `MATCH` — historical returned asset unchanged |
| Mobile V1.0 | `MATCH` — historical returned asset unchanged |
| Mobile Menu open V1.0 | `MATCH` — `14129B54763224ECC4ABBFB5ED6695D9F842E607B091447C029CD2285B6592C0` |
| State Board V1.0 | `MATCH` — `28CF417B7F3926DBA47A00BDF13E1BE1C34F85206D093837730C826C4EA8F6B5` |

The menu and state board remain the current frozen evidence because neither was part of the returned findings.

## 6. Gate and scope boundary

| Boundary | Result |
|---|---|
| Gate 2 remains approved and closed | PASS |
| Gate 3 self-approval claimed | NO / PASS |
| Gate 4 or Gate 5 started | NO / PASS |
| D16, development, deployment or publication work | NONE / PASS |

This validation supports resubmission under `CONV-RFQ-G3-WF-PCR-01`; it is not Gate 3 approval.
