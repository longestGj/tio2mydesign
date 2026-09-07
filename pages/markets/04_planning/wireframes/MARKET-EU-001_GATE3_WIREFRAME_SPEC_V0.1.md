# MARKET-EU-001 Gate 3 Responsive Wireframe Specification V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Version / date | V0.1 / 2026-09-04 |
| Current state | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 | `AUTHORIZED / EXECUTED / PENDING_USER_APPROVAL` |
| Gate 4–10 | `NOT_AUTHORIZED` |

## 1. Wireframe set

One responsive HTML source produces three complete Buyer Clean page proofs:

| Viewport | Layout contract | Full-page proof |
|---|---|---|
| Desktop 1440 | 1200px content maximum, 12-column editorial grid, 7/5 Hero, 3×2 checklist, 4/8 FAQ | `market-eu-001/v0.1/MARKET-EU-001_GATE3_DESKTOP_1440_V0.1.png` |
| Tablet 768 | 704px content width, deliberate 2-column information grids, stacked Hero and FAQ | `market-eu-001/v0.1/MARKET-EU-001_GATE3_TABLET_768_V0.1.png` |
| Mobile 390 | 358px content width, single-column decision flow, stacked CTAs and document responsibilities | `market-eu-001/v0.1/MARKET-EU-001_GATE3_MOBILE_390_V0.1.png` |

Responsive HTML: `market-eu-001/v0.1/MARKET-EU-001_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`.

## 2. Locked page sequence

The wireframe preserves the approved Gate 2 sequence without copy or fact changes:

1. Shared Header and breadcrumb.
2. Hero and six-step procurement path.
3. Direct answer.
4. Six-step procurement checklist and boundary note.
5. Five Application paths.
6. Product review path.
7. Four Documents categories and EU import responsibilities.
8. Malaysia manufacturing and origin information.
9. Evergreen EU customs guidance plus the dated 4 September 2026 trade-context inset.
10. Six EU destination paths.
11. Six Buyer Questions.
12. Final conversion section.
13. Shared Footer.

## 3. Responsive behaviour

- Desktop uses editorial splits only where two streams support the same buyer decision; it does not create a country-directory or logistics-dashboard appearance.
- Tablet stacks the Hero and Questions while retaining two-column checklist, Applications and Documents groups where the approved copy remains legible.
- Mobile uses one-column content cards and full-width principal CTAs. Destination controls remain individually touchable and collapse to one column at 390px.
- The full approved copy remains visible in all three proofs; no short placeholder copy is used.
- The Header uses the approved `180×60` Desktop and `120×40` mobile Logo boxes. The Footer uses the approved reverse `180×60` Logo on Deep Navy.
- Focus-ring classes and minimum 44px action heights are present in the HTML wireframe.
- Mobile Menu-open is not a Gate 3 required frame; its complete state remains a Gate 5 obligation.

## 4. Fact and scope boundaries retained

- Specific Grade names: 0.
- EU-specific Grade recommendations: 0.
- EU office, warehouse, local stock or delivery-network claims: 0.
- Fixed tariff rates or concluded-investigation claims: 0.
- Terms of Use links: 0.
- Footer legal controls: Privacy Policy, Dasar Privasi (BM), Cookie Policy and Cookie Settings.

## 5. Validation result

The responsive check ran against Superdesign draft `17fff1e7-222d-49da-a016-511b72599344`, current version 3.

| Viewport | Client width | Scroll width | H1 | Destinations | Relative links | Result |
|---|---:|---:|---:|---:|---:|---|
| 1440 | 1440 | 1440 | 1 | 6 | 0 | PASS |
| 768 | 768 | 768 | 1 | 6 | 0 | PASS |
| 390 | 390 | 390 | 1 | 6 | 0 | PASS |

All three checks also confirmed one approved primary Header Logo, one approved reverse Footer Logo, the final conversion heading, and no Terms of Use text.

## 6. Gate boundary

This specification records a Gate 3 candidate only. It does not approve Gate 3, authorize Gate 4, select final imagery, approve high-fidelity colour treatment, or authorize development, deployment, publication, DNS or indexing.

