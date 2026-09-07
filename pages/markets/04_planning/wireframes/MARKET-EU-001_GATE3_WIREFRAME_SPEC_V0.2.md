# MARKET-EU-001 Gate 3 Responsive Wireframe Specification V0.2

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Version / date | V0.2 / 2026-09-04 |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 V0.2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 | `AUTHORIZED / EXECUTED / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 4–10 | `NOT_AUTHORIZED` |
| Visual basis | Preserved Procurement Editorial direction; inherited styling is not Gate 4 approval |

## 1. Wireframe set

One responsive HTML source produces the complete Buyer Clean page and Mobile Menu-open state:

| Proof | Dimensions | File |
|---|---:|---|
| Desktop | 1440 × 10068 | `market-eu-001/v0.2/MARKET-EU-001_GATE3_DESKTOP_1440_V0.2.png` |
| Tablet | 768 × 13197 | `market-eu-001/v0.2/MARKET-EU-001_GATE3_TABLET_768_V0.2.png` |
| Mobile | 390 × 19177 | `market-eu-001/v0.2/MARKET-EU-001_GATE3_MOBILE_390_V0.2.png` |
| Mobile Menu open | 390 × 844 | `market-eu-001/v0.2/MARKET-EU-001_GATE3_MOBILE_MENU_OPEN_390_V0.2.png` |

Responsive HTML:

`market-eu-001/v0.2/MARKET-EU-001_GATE3_RESPONSIVE_WIREFRAME_V0.2.html`

## 2. Locked page sequence

The wireframe preserves the approved Gate 2 V0.2 sequence:

1. Shared Header and breadcrumb.
2. Supplier-led Hero.
3. Supplier and product definition with five visible facts.
4. Direct answer and six-step procurement path.
5. Five Application paths with evaluation criteria.
6. Full neutral 14-Grade directory.
7. Four-category Documents module.
8. Separate EU import-responsibility module.
9. Malaysia manufacturing and origin.
10. Evergreen customs guidance, sourcing-diversification bridge and dated trade context.
11. Six EU destination paths.
12. Eight Buyer Questions.
13. Final Grade/Documents/Sample/RFQ conversion.
14. Shared Footer.

## 3. Desktop structure — 1440px

- Shared 1200px content maximum and 12-column editorial grid.
- Desktop Header retains the full approved navigation and one `Markets` current state.
- Hero uses a 7/5 relationship: supplier-led content and actions at left, six-node supplier-to-procurement path at right.
- Supplier/Product module uses a 7/5 content and fact-list relationship.
- Six procurement steps use 3×2 cards.
- Applications use 3+2 editorial card rhythm.
- Fourteen Grades use a compact three-column directory; every Grade appears once with approved tags and an individual route.
- Documents use a 2×2 grid.
- Import Responsibilities and Customs/Trade use controlled 7/5 splits.
- Destinations use 3×2 links; FAQ uses a 4/8 split.
- Final conversion and Footer use Deep Navy terminal emphasis.

## 4. Tablet structure — 768px

- 704px content width with 32px outer margins.
- Mobile Header surface is used; RFQ and Menu remain visible.
- Hero, supplier definition and major two-stream sections stack when a side-by-side split would reduce readability.
- Procurement, Applications, Grades and Documents retain deliberate two-column grids where copy remains legible.
- Destination links remain two columns.
- FAQ heading stacks above disclosure rows.
- Full company name, Grade tags, source links and final actions wrap without clipping.

## 5. Mobile structure — 390px

- 358px content width with 16px outer margins.
- Header order is Logo → RFQ → Menu.
- H1, Hero copy, actions and supplier-to-procurement path stack in reading order.
- Procurement, Applications, Grades and Documents use a single readable column.
- All 14 Grade identities and their approved tags remain visible; no horizontal carousel, truncation, hidden identity or recommendation badge is used.
- FAQ uses native disclosure rows; the two supplier-identity answers are expanded in the structural proof while all eight answers remain in the content/DOM contract.
- Long legal and trade source text wraps naturally.
- Final conversion actions are full width.

## 6. Mobile Menu-open state

- Full-height overlay is structurally present and opens from the visible Menu button.
- Close control is visible and receives focus on open.
- Eight navigation links are present: Home, Markets, Products, Applications, Documents, Resources, About and Request a Quote.
- `Markets` is the sole current item and uses the approved teal left marker.
- `aria-expanded` changes to `true`; background document scrolling is locked.
- Escape and Close return the menu to the closed state; implementation focus trapping remains a Gate 7 acceptance requirement.

## 7. Copy, relationship and scope parity

- H1: `Malaysia-Origin Titanium Dioxide for European Union Buyers`.
- SEO Title and Meta description match the approved Gate 2 V0.2 values.
- All 120 Buyer Clean inline-copy values from the approved content file are present in the HTML; normalized exact-text comparison is `120/120 PASS`.
- Grade identities: 14.
- Grade application tags match `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`.
- M-2377 shows Coatings, Plastics, Masterbatch, Printing Inks and Paper.
- CR-901 shows Specialty Materials only.
- M-996 and M-2196 remain equal-weight Coatings entries without comparison.
- Buyer Questions: 8.
- EU destinations: 6.
- UK / United Kingdom visible references: 0.
- Terms of Use visible references: 0.
- EU establishment, warehouse, stock, inventory, fixed delivery, guaranteed compliance or guaranteed customs claims: 0.

## 8. Rendering validation

Superdesign draft: `17fff1e7-222d-49da-a016-511b72599344`, current version 6.

| Viewport | Client width | Scroll width | H1 | Grades | Destinations | FAQ | Result |
|---|---:|---:|---:|---:|---:|---:|---|
| 1440 | 1440 | 1440 | 1 | 14 | 6 | 8 | PASS |
| 768 | 768 | 768 | 1 | 14 | 6 | 8 | PASS |
| 390 | 390 | 390 | 1 | 14 | 6 | 8 | PASS |

Every viewport also contains two primary-logo instances in the DOM for Header/Menu states, one reverse Footer Logo, the exact SEO Title and Meta description, and no UK or Terms of Use text.

Mobile Menu-open validation:

| Check | Result |
|---|---|
| Menu visible | PASS |
| `aria-expanded=true` | PASS |
| Eight navigation links | PASS |
| One current Markets item | PASS |
| Close control visible | PASS |
| Background scroll locked | PASS |

## 9. Superdesign execution record

- The normal AI iteration command was attempted once and blocked because the project had no remaining Superdesign generation credits.
- No retry or credit-consuming workaround was used.
- The approved Superdesign fallback was used: deterministic self-contained HTML authoring followed by `import-design-draft --into` on the same draft.
- Version 5 imported the revised structure. Version 6 applied the exact approved uppercase Hero eyebrow and is the current proof.
- The same draft ID and preview URL are preserved; versions 1–5 remain available in the draft history.

## 10. Gate boundary

This specification records a Gate 3 candidate only. It does not approve Gate 3, authorize Gate 4, approve a final high-fidelity visual treatment, or authorize development, CMS changes, deployment, publication, DNS or indexing.

## 11. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | Original V0.1-copy responsive wireframe | `SUPERSEDED / HISTORICAL` |
| V0.2 | 2026-09-04 | Revised supplier-led structure with all 14 Grades, separate Documents/import modules, eight FAQs and Mobile Menu-open proof | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
