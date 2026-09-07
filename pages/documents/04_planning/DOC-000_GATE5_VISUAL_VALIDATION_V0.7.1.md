# DOC-000 Gate 5 Visual Validation V0.7.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `DOC-000-G5-MOBILE-REPAIR-01` |
| Revision | V0.7.1 |
| Status | `VALIDATED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Date | 2026-09-02 |
| Scope | Desktop/Tablet shared Footer revision; body and Mobile preservation |

## 1. Revised assets

| Asset | Dimensions | Bytes | SHA-256 | Result |
|---|---:|---:|---|---|
| Desktop full Buyer Clean V0.7.1 | 1440×3784 | 422469 | `6DD95749FE87FCCAEBE16AC8AFD8A3C21F1BAD1227A3BB7D5660234AE57A0A12` | PASS |
| Tablet full Buyer Clean V0.7.1 | 768×5324 | 388567 | `85A1A5810AFDE686ECD0D2160A40A45AB13F1125941A9FADADE3CBD0FCF0DF96` | PASS |

## 2. RAW body preservation

| Viewport | Footer starts | RAW bytes compared | Old/New RAW SHA-256 | Result |
|---|---:|---:|---|---|
| Desktop | 3494px | 20,125,440 | `3A04185DD277ACB5E9EE86343ED6897DF9D8E615D6BEDDD3A4FB2F7A84327B4F` | BYTE_IDENTICAL |
| Tablet | 4904px | 15,065,088 | `DB55218FEDBF85037EBAC6647048D8758CB89CCDEB1824255EE8AA1FC0D08885` | BYTE_IDENTICAL |

The comparison covers every RGBA pixel above the Footer boundary. Only the Footer regions differ from V0.6.

## 3. Shared Footer validation

| Check | Desktop | Tablet |
|---|---|---|
| Brand and operating entity | PASS | PASS |
| Explore = Home / Markets / Products / Applications | PASS | PASS |
| Information = Documents / Resources / About | PASS | PASS |
| Procurement = Request a Quote | PASS | PASS |
| Copyright | PASS | PASS |
| Legacy page-specific links | 0 / PASS | 0 / PASS |
| Footer region changed from V0.6 | PASS | PASS |

Original-detail Footer crops were visually reviewed. Both show clearly separated shared columns and the persistent Teal RFQ action without crop or collision.

## 4. Preserved V0.7 Mobile findings

- Mobile V0.7 hash matches `7631E2B994AF50C149E3310EB6018E3BC9037D082C411911135E5517D0A76282`.
- Mobile proof hash matches `629EB38658307BBFAB4CE6BF116783C5543DCF247D3093E5C2A3BDC0F749FE07`.
- H1, FAQ fixed action slot and Mobile five-part Footer remain independently validated.

## 5. Result

Automated result: `PASS`. Original-detail Footer review: `PASS_FOR_PROJECT_CONTROL_REVIEW`.

This is not a Gate 5 approval. Gate 6/7, development and D16 remain unauthorized.

