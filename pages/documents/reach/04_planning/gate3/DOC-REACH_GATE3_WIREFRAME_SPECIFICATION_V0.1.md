# DOC-REACH Gate 3 Responsive Wireframe Specification V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Version / date | V0.1 / 2026-09-05 |
| Gate | Gate 3 Responsive Wireframe |
| Copy authority | `DOC-REACH_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` |
| Candidate status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 4–10 | `NOT_AUTHORIZED` |

## 1. Complete structure

Shared Header and Footer frame the following eleven approved body modules:

`Hero → General Direct Answer → Substance Information vs Supplier Coverage → Legal Actors → Regulatory Scope → Buyer Verification Checklist → Official Sources → Request Process → Buyer Questions → Related Paths → Final CTA`

All eleven modules use the approved real-length Buyer Clean copy. No body module disappears at a smaller breakpoint.

## 2. Desktop 1440

- Shared 84px Header; Documents is current through weight and underline without a visible status label.
- 1220px maximum content shell.
- Two-column Hero: approved H1, support, scope line and actions at left; EU/EEA, GB and NI orientation key at right.
- General Direct Answer is a compact high-contrast full-width band.
- Substance information and supplier coverage use a two-column contrast; Commercial Grade identity spans the row beneath.
- Manufacturer, Importer and Only Representative use three equal cards followed by the complete entity/arrangement note.
- EU/EEA, Great Britain and Northern Ireland use separate jurisdiction cards.
- Seven buyer checks use a 4 + 3 grid followed by the complete one-tonne qualifier.
- Four official sources use source, scope and date columns; missing `Source updated` remains absent while `Reviewed` stays visible.
- Request Process is horizontal; FAQ uses a two-column intro/disclosure layout; Related Paths uses two cards.
- Final CTA remains separate from the shared Footer.

## 3. Tablet 768

- Shared 64px compact Header in `Logo | RFQ | Menu` order.
- Hero and orientation key stack; both actions become full width.
- Substance/supplier panels stack; legal roles, jurisdictions and checklist use readable two-column grids.
- Official sources use two columns, retaining source/scope/date semantics without page overflow.
- Request Process becomes 2 × 2; FAQ, Related Paths and Final CTA retain every word.
- Minimum visible interactive target is 44px.

## 4. Mobile 390 logical

- Formal exports are 780px physical and labelled `390px logical @2x`.
- All body content is single column.
- Hero actions stack full width; jurisdiction orientation becomes three rows.
- Substance/supplier content, three legal roles, three regulatory scopes and seven checks stack.
- Source, scope and dates stack per official source; no wide table is required.
- Request Process becomes a vertical timeline.
- FAQ defaults to one answer expanded as structural proof; controls remain 44px or greater.
- Related Paths, Final CTA and shared Footer stack without horizontal overflow.

## 5. Mobile Menu

- Open state preserves `Logo | RFQ | Close` in the 64px Header.
- Menu order is Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Documents is current through weight and a left marker; no buyer-visible `CURRENT` label appears.
- RFQ remains the terminal menu action.

## 6. Key states

The separate state board proves three page-specific behaviors:

1. an expanded FAQ answer with visible keyboard focus and in-flow content;
2. an official source where `Source updated` is absent but `Reviewed` remains;
3. request-route unavailable handling where visible request actions are removed and the corresponding structured-data relationship must also be absent.

The unavailable state does not show a disabled request action or an automatic Contact fallback.

## 7. Evidence boundaries

- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` remains preserved outside buyer frames.
- The page does not render the blocked TiO2-specific registration question or answer.
- No company registration, named importer/Only Representative, registration number, tonnage band, all-Grade coverage or unqualified compliance claim renders.
- The one-tonne reference retains legal-entity/substance context, exemptions and other REACH conditions.
- EU/EEA, Great Britain and Northern Ireland remain distinct at every breakpoint.
- No public download, filename, fake certificate, PDF thumbnail, factory image or availability badge appears.
- Internal Gate, Claim Register, blocker, hold, allowlist, transport-enum and Schema-parity terms remain outside Buyer Clean.

## 8. Shared Chrome and Logo

- Header, Mobile Header, Mobile Menu and Footer consume Global Chrome V0.5 and the approved legal/utility addendum.
- Light Headers use the exact production primary horizontal Logo.
- Deep Navy Footer uses the exact production reverse monochrome Logo.
- Shared Chrome is assembled, not redesigned by DOC-REACH.

## 9. Asset set

| Asset | Dimensions | Purpose |
|---|---:|---|
| `assets/DOC-REACH_G3_DESKTOP_1440_WIREFRAME_V0.1.png` | 1440 × 7458 | Complete Desktop page |
| `assets/DOC-REACH_G3_TABLET_768_WIREFRAME_V0.1.png` | 768 × 9607 | Complete Tablet page |
| `assets/DOC-REACH_G3_MOBILE_390_LOGICAL_2X_WIREFRAME_V0.1.png` | 780 × 25106 physical / 390 logical @2x | Complete Mobile page |
| `assets/DOC-REACH_G3_MOBILE_MENU_390_LOGICAL_2X_WIREFRAME_V0.1.png` | 780 × 25106 physical / 390 logical @2x | Mobile Menu open state |
| `assets/DOC-REACH_G3_KEY_STATES_V0.1.png` | 1440 × 1000 | FAQ focus, optional date and route-unavailable evidence |

## 10. Gate boundary

This candidate translates the user-approved Gate 2 copy into a complete responsive structural package. It remains `PENDING_USER_APPROVAL`; Gate 4 is not authorized unless the user separately approves Gate 3 and authorizes the next Gate.

