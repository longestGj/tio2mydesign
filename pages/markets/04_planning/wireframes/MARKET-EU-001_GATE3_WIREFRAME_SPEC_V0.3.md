# MARKET-EU-001 Gate 3 Responsive Wireframe Specification V0.3

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Version / date | V0.3 / 2026-09-04 |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 V0.2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Final Polish delta | `USER_DIRECTED / IMPLEMENTED / PENDING_COMPOSITE_USER_APPROVAL` |
| Gate 3 | `AUTHORIZED / EXECUTED / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 4–10 | `NOT_AUTHORIZED` |
| Visual basis | Procurement Editorial direction preserved; inherited styling is not Gate 4 approval |

## 1. Wireframe set

| Proof | Dimensions | File |
|---|---:|---|
| Desktop | 1440 × 9746 | `market-eu-001/v0.3/MARKET-EU-001_GATE3_DESKTOP_1440_V0.3.png` |
| Tablet | 768 × 13227 | `market-eu-001/v0.3/MARKET-EU-001_GATE3_TABLET_768_V0.3.png` |
| Mobile | 390 × 18025 | `market-eu-001/v0.3/MARKET-EU-001_GATE3_MOBILE_390_V0.3.png` |
| Mobile Menu open | 390 × 844 | `market-eu-001/v0.3/MARKET-EU-001_GATE3_MOBILE_MENU_OPEN_390_V0.3.png` |
| Desktop Grade detail | 1440 × 980 | `market-eu-001/v0.3/MARKET-EU-001_GATE3_GRADES_DESKTOP_1440_V0.3.png` |
| Mobile Grade detail | 390 × 1725 | `market-eu-001/v0.3/MARKET-EU-001_GATE3_GRADES_MOBILE_390_V0.3.png` |

Responsive HTML:

`market-eu-001/v0.3/MARKET-EU-001_GATE3_RESPONSIVE_WIREFRAME_V0.3.html`

## 2. Locked page sequence

The approved V0.2 page sequence is unchanged:

1. Shared Header and breadcrumb.
2. Supplier-led Hero.
3. Supplier and product definition.
4. Direct answer and six-step procurement path.
5. Five Application paths.
6. Six representative Grades grouped by Coatings and Plastics & Masterbatch, followed by the Product Center CTA.
7. Documents.
8. EU import responsibilities.
9. Malaysia manufacturing and origin.
10. Customs guidance and dated trade context.
11. Six EU destination paths.
12. Eight direct-answer Buyer Questions.
13. Final Grade/Documents/Sample/RFQ conversion.
14. Shared Footer.

## 3. Responsive Grade structure

### Desktop 1440

- The Grade module uses two equal category panels.
- Coatings contains M-350, M-510 and M-896.
- Plastics & Masterbatch contains M-200, M-108 and M-210.
- Cards contain only Grade name, short positioning and `View Grade`.
- One `View All Titanium Dioxide Grades` CTA follows both panels.

### Tablet 768

- Category panels stack when required by the existing responsive breakpoint.
- All six Grade identities and actions remain visible without truncation or horizontal scrolling.

### Mobile 390

- Coatings appears first, followed by Plastics & Masterbatch.
- Each category contains three one-column cards.
- The Product Center CTA remains a clear 44px-or-greater touch target.
- No omitted Grade is hidden in disclosure, accordion, table or secondary text.

## 4. Exact content delta

The wireframe consumes Gate 2 V0.2 plus `MARKET-EU-001_FINAL_CONTENT_POLISH_DELTA_V0.1.md`. The required five H2 values, six Grade entries, one all-Grades CTA and five revised FAQ answers are exact. All unaffected copy remains from Gate 2 V0.2.

The Grade selection changes display scope only. It does not modify the approved Grade-to-Application relationship matrix or any product fact.

## 5. Rendering validation

Superdesign draft: `17fff1e7-222d-49da-a016-511b72599344`, current version 7.

| Viewport | Client width | Scroll width | H1 | Grades | Destinations | FAQ | Result |
|---|---:|---:|---:|---:|---:|---:|---|
| 1440 | 1440 | 1440 | 1 | 6 | 6 | 8 | PASS |
| 768 | 768 | 768 | 1 | 6 | 6 | 8 | PASS |
| 390 | 390 | 390 | 1 | 6 | 6 | 8 | PASS |

Additional automated checks:

- all five requested H2 values present: PASS;
- only the six selected Grade names present in the Grade module: PASS;
- representative-Grade introduction present: PASS;
- all-Grades CTA count: 1;
- supplier, REACH/CLP and Documents FAQ direct-answer starts: PASS;
- Title, Meta and H1 unchanged: PASS;
- Mobile Menu visible, Close available, eight links, one Markets current state, `aria-expanded=true` and background scroll lock: PASS.

Desktop and Mobile Grade-detail proofs were visually reviewed. Category hierarchy, line wrapping, card rhythm and CTA placement pass without overflow.

## 6. Supersession and Gate boundary

V0.3 supersedes V0.2 as the current Gate 3 review candidate only. V0.2 remains historical and recoverable. This document does not approve Gate 3, authorize Gate 4, approve final high-fidelity visual treatment, or authorize development, CMS changes, deployment, publication, DNS or indexing.

## 7. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | Original V0.1-copy responsive wireframe | `SUPERSEDED / HISTORICAL` |
| V0.2 | 2026-09-04 | Supplier-led structure with complete 14-Grade directory | `SUPERSEDED / HISTORICAL` |
| V0.3 | 2026-09-04 | Final Content Polish: five H2s, six representative Grades and direct-answer-first FAQ openings | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

