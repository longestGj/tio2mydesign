# GRADE-M52 Gate 7 Fresh Validation V0.1

## 1. Control

| Field | Value |
|---|---|
| Validation ID | `GRADE-M52-G7-VALIDATION-01` |
| Date / status | 2026-09-02 / `PASS_CANDIDATE_PENDING_CONTROLLER_02_REVIEW` |
| Scope | D23 planning artifacts only; no D16, code, test implementation or Gate 8 |

## 2. Source validation

| Check | Result |
|---|---|
| Current PDF | `TDS_M-52_V3_2023.pdf`; one page; rendered and visually inspected |
| SHA-256 | `C3E81C2B6DF86EE7B7DFF4F04BFF8842DC84E8253AABCDE6CB030A424008DE30` |
| Printed identity | M-52 / Rutile TiO₂ Pigment for Inks |
| Printed process/version | Sulfate Process / Ink Grade / V3 2023 |
| Other M-52 PDF | None found |
| Public matrix | Printing Inks, Coatings and Sulfate verified; other application mappings not public |

## 3. Machine-contract parse and counts

PowerShell `ConvertFrom-Json` completed without error.

| Check | Actual | Result |
|---|---:|---|
| Identity / site scope | `GRADE-M52 / /products/m-52/ / tio2-my` | PASS |
| Breadcrumb | 3 | PASS |
| Hero visual / facts / actions | 4 / 5 / 2 | PASS |
| Applications | 3 | PASS |
| Application categories | Printing Inks 1 / Coatings 2 | PASS |
| Evaluation groups/items | 2 / 8 | PASS |
| Technical columns/rows | 3 / 11 | PASS |
| Documents options / Markets | 2 / 4 | PASS |
| Indexing / sitemap | false / false | PASS |

All 11 technical rows preserve property, value, unit/qualifier and test-method semantics from the PDF. `Moisture when packed = 0.3% max / ISO 787-2`; the within-48-hours source note is present.

## 4. Public projection negative checks

Case-insensitive JSON scans returned zero for `Plastics`, `Masterbatch`, `Paper`, `Specialty Materials`, `countryOfOrigin` and `M-108`. No origin, comparison, Offer, price, stock, lead-time or compliance field exists.

## 5. Route and isolation validation

All 12 route-registry Page IDs occur exactly once in `PAGE_REGISTRY_V0.2`: Home, Products, RFQ, Sample, Documents, Sulfate, Printing Inks, Coatings, EU, UK, India and Brazil. No unsupported application route exists.

Predecessor Grades appear only in internal template/regression references; no predecessor Grade token enters the Buyer Clean JSON. No M-108 artifact or planning file was created.

## 6. Document hygiene

- JSON syntax: PASS.
- Public content contains no internal review token, evidence path or frozen-field explanation.
- Markdown/JSON readable; no trailing-space dependency.
- Files created only under `D:\23MySec`; `D:\16Wordpress_nextjs` was not accessed.

## 7. Result

`GRADE-M52 Gate 0–7 candidate validation = PASS_PENDING_CONTROLLER_02_REVIEW`

This result does not approve Gate 3–7, authorize Gate 8 or unlock M-108.

