# DOC-TDS Gate 3 Responsive Wireframe Specification V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Version / date | V0.1 / 2026-09-04 |
| Gate | Gate 3 Responsive Wireframe |
| User-approved direction | `APPROACH A / DECISION-FIRST` |
| Copy authority | `DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` |
| Design authority | `docs/superpowers/specs/2026-09-04-doc-tds-gate3-wireframe-design.md` |
| Candidate status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 4–10 | `NOT_AUTHORIZED` |

## 1. Complete structure

The shared Header precedes and the shared Footer closes the following approved ten-module body:

`Hero → Direct Answer → Document Choice → Product Grade → Comparison → Request Checklist → Request Process → Buyer Questions → Related Document Paths → Final CTA`

All ten modules and their approved real-length text render at 1440px, 768px and 390px. No content module is hidden at a smaller breakpoint.

## 2. Desktop 1440

- Shared 84px Header; Documents is current through bold plus underline without a visible status word.
- 1220px body shell.
- Two-column Hero: approved H1/support/actions at left; neutral TDS/SDS/COA decision key at right.
- Direct Answer is a full-width high-contrast band.
- Document Choice is four equal cards in one row: three semantic checkbox cards and one non-selectable explanatory Multiple document needs card.
- Product Grade is a two-column context band with explanatory copy at left and the complete dropdown/helper/summary/action panel at right.
- Comparison is a semantic four-column table.
- Checklist is two columns; Request Process is a four-step horizontal sequence.
- FAQ is a full-width disclosure list; the Desktop evidence shows one expanded answer as interaction proof.
- Related Paths is a three-card row.
- Final CTA remains separate from Shared Footer.

## 3. Tablet 768

- Shared 64px compact Header in `Logo | RFQ | Menu` order.
- Hero content and decision key stack.
- Document Choice becomes a 2 × 2 grid.
- Product Grade becomes a one-column copy-plus-control block.
- Comparison remains a readable semantic table with no horizontal page overflow.
- Checklist remains two columns at this width.
- Request Process becomes a 2 × 2 sequence.
- FAQ, Related Paths and Final CTA preserve all content and actions.
- Measured minimum visible interactive target is 44px.

## 4. Mobile 390 logical

- Formal exports are 780px physical and labelled `390px logical @2x`.
- Shared 64px Mobile Header; all body content is single column.
- Hero actions are stacked full width; the decision key becomes three rows.
- Document Choice cards stack in TDS, SDS, COA and Multiple document needs order.
- Product Grade and request action are full width.
- The wide comparison table is removed from layout and replaced with TDS, SDS and COA cards. Each repeats Primary buyer use, When to request, Typical scope and Useful request context.
- Checklist becomes one list; Request Process becomes a vertical four-step timeline.
- FAQ remains collapsed in the normal Mobile page.
- Related Paths and Final CTA stack.
- Shared Footer uses a full-width brand block, two link columns, an independent Procurement/RFQ block and the approved legal/utility row.
- Measured minimum visible interactive target is 44px; measured horizontal overflow is zero.

## 5. Document and Grade selection

### Initial

- TDS, SDS and COA are unchecked.
- Product Grade shows the invalid prompt `Choose a Grade`.
- The primary action remains visible and routes to the receiving form without forcing preselection.

### One document plus Grade

- Example evidence: TDS plus M-2196.
- Target example: `/request-documents/?document_types%5B%5D=technical_product&product_grade=M-2196`.
- The receiving form remains responsible for displaying editable/removable prefill and required-field validation.

### Multiple documents without Grade

- Example evidence: SDS plus COA with no Grade.
- Multiple document values are carried through `document_types[]`; no multi-Grade UI exists.

Selection does not imply availability, applicability, approval, currentness, release or delivery.

## 6. Mobile Menu

- Open state preserves `Logo | RFQ | Close` in the 64px Header.
- Menu order is Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Documents is current through bold plus a left marker; buyer-visible `CURRENT` text is zero.
- RFQ remains the terminal menu action.

## 7. FAQ behavior

- Exactly five approved question buttons render.
- Normal-page default is collapsed.
- One expanded Desktop proof remains in document flow and does not overlay subsequent content.
- Each button has an expressible `aria-expanded` state and visible focus direction.

## 8. Shared Chrome and Logo

- Header and Mobile Menu consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`.
- Footer legal/utility row consumes `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`.
- White Headers use the exact `brand_logo_primary_horizontal` production SVG.
- Deep Navy Footer uses the exact `brand_logo_reverse_monochrome` production SVG.
- Shared Footer wording, columns, RFQ and legal controls are not page-level inventions.

## 9. Evidence and route boundaries

- No filename, public inventory, file count, download action, fake preview or Grade-document availability mapping renders.
- No factory image, certificate graphic, fake PDF thumbnail or decorative stock image renders.
- Internal Gate, Claim Register, Evidence Hold, allowlist, normalization, eligibility, fail-closed and Schema-parity language remains outside Buyer Clean.
- Related Paths show the intended complete-site experience; later implementation must still obey target-route eligibility and Gate 7 dependency registration.
- When the Request Documents route/action is not eligible, later implementation removes the visible request action and corresponding Schema relation together. No disabled action or automatic Contact fallback is specified.

## 10. Asset set

| Asset | Dimensions | Purpose |
|---|---:|---|
| `assets/DOC-TDS_G3_DESKTOP_1440_WIREFRAME_V0.1.png` | 1440 × 6110 | Complete Desktop plus one expanded FAQ proof |
| `assets/DOC-TDS_G3_TABLET_768_WIREFRAME_V0.1.png` | 768 × 7475 | Complete Tablet initial state |
| `assets/DOC-TDS_G3_MOBILE_390_LOGICAL_2X_WIREFRAME_V0.1.png` | 780 × 19986 physical / 390 logical @2x | Complete Mobile initial state |
| `assets/DOC-TDS_G3_MOBILE_MENU_390_LOGICAL_2X_WIREFRAME_V0.1.png` | 780 × 20770 physical / 390 logical @2x | Complete Mobile Menu open state |
| `assets/DOC-TDS_G3_SELECTION_STATES_V0.1.png` | 1440 × 1014 | Initial, one document plus Grade, and multiple documents without Grade |

## 11. Gate boundary

This candidate implements the user's approved Approach A and passes project-control validation. It remains `PENDING_USER_APPROVAL`; it does not close Gate 3 or authorize Gate 4 until the user explicitly approves the complete assets.

