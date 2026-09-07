# DOC-000 Full Visual Design V0.7.1 — Shared Footer Revision

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 5 |
| Review ID | `DOC-000-G5-MOBILE-REPAIR-01` |
| Revision | V0.7.1 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Date | 2026-09-02 |
| Approved upstream | Gate 4 Manifest V0.1 SHA-256 `9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00` |
| Gate 6/7 | `NOT_AUTHORIZED` |

V0.7.1 changes only the Desktop and Tablet Footer assembly. V0.7 Mobile remains current and byte-identical.

## 1. Current visual set

| Surface | Asset | Dimensions | Disposition |
|---|---|---:|---|
| Desktop complete page | `gate5_v0.7.1/assets/DOC-000_G5_DESKTOP_1440_FULL_BUYER_CLEAN_V0.7.1.png` | 1440×3784 | Shared Footer revised |
| Tablet complete page | `gate5_v0.7.1/assets/DOC-000_G5_TABLET_768_FULL_BUYER_CLEAN_V0.7.1.png` | 768×5324 | Shared Footer revised |
| Mobile complete page | V0.7 Mobile asset | 780×11708 | Byte-identical / unchanged |
| Mobile H1 / FAQ / Footer proof | V0.7 proof asset | 780×1840 | Byte-identical / unchanged |
| Selector / FAQ states | V0.6 state asset | 1440×1260 | Unchanged |
| Mobile Menu open | V0.6 menu asset | 780×1360 | Unchanged |

## 2. Shared Footer contract

Desktop and Tablet now consume the same Global Footer information architecture already used by the corrected Mobile page:

- Brand: shared reverse Logo, operating entity and platform description.
- Explore: Home, Markets, Products, Applications.
- Information: Documents, Resources, About.
- Procurement: persistent Request a Quote.
- Copyright: `© 2026 TiO2 Malaysia. All rights reserved.`

The following legacy page-specific Footer items are absent: Technical Data, Safety & Handling, Quality & Compliance, News & Updates, Contact Us, Procurement Support and Supplier Information.

DOC-000 declares only `currentNavigationKey=Documents`. It references the shared Header, Mobile Menu and Footer; it does not own, redesign or fork those components.

## 3. Body pixel preservation

| Viewport | Footer boundary | Preserved region | V0.6 RAW SHA-256 | V0.7.1 RAW SHA-256 | Result |
|---|---:|---:|---|---|---|
| Desktop | 3494px | 1440×3494 | `3A04185DD277ACB5E9EE86343ED6897DF9D8E615D6BEDDD3A4FB2F7A84327B4F` | same | BYTE_IDENTICAL |
| Tablet | 4904px | 768×4904 | `DB55218FEDBF85037EBAC6647048D8758CB89CCDEB1824255EE8AA1FC0D08885` | same | BYTE_IDENTICAL |

The preserved region includes Header, Breadcrumb, Hero, Selector, all content modules, FAQ and Closing CTA. No page-body pixel changed.

## 4. Mobile preservation

- Mobile V0.7 SHA-256 remains `7631E2B994AF50C149E3310EB6018E3BC9037D082C411911135E5517D0A76282`.
- Mobile repair proof SHA-256 remains `629EB38658307BBFAB4CE6BF116783C5543DCF247D3093E5C2A3BDC0F749FE07`.
- Previously validated H1, FAQ and five-part Mobile Footer corrections remain unchanged.

## 5. Stage boundary

`DOC-000-G5-MOBILE-REPAIR-01 / revision V0.7.1 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

No Gate 6/7, child page, development, D16, testing, deployment, publication, DNS or indexing authority is created.

