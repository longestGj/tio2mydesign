# Product Detail Gate 7 Global Chrome, Responsive and Accessibility Contract V0.2

## 1. Control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-G7-CHROME-A11Y-01` |
| Gate 7 Review ID | `PRODUCT-DETAIL-G7-PCR-02` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Parent return | `PRODUCT-DETAIL-G7-PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Visual baseline | M-350 Gate 5 V0.5 Desktop and Mobile 390 |

## 2. Shared Global Chrome consumption

All Grade Detail Pages consume the shared site components. A page-private Header, Mobile Menu or Footer is prohibited.

| Contract | Required value |
|---|---|
| Desktop Header | 84px; full eight-item navigation |
| Desktop current item | `Products` bold + 3px Teal underline |
| Mobile Header | 64px; `Logo | RFQ | Menu` |
| Mobile current item | `Products` bold + 4px Teal left marker in open Menu |
| Buyer-visible `CURRENT` | 0 on Header and Mobile Menu |
| Footer | Deep Navy; `Procurement`; no `Conversion` or current marker |
| RFQ | Permanently visible across Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer; fixed target `/request-a-quote/` |
| Header Logo | Production key `brand_logo_primary_horizontal` |
| Footer Logo | Production key `brand_logo_reverse_monochrome` |
| Logo source | Exact paths/hashes from Production SVG Logo Manifest V1.0 |

Historical PNG Logo use in V0.1/V0.2 mockups is visual history only and cannot become the production implementation source.

### Fixed RFQ release contract

- Shared Global Chrome RFQ is not governed by contextual-action omission.
- `RFQ_ROUTE_READY=false` leaves every shared RFQ visible and linked to `/request-a-quote/`.
- An unready RFQ receiver is a public-release blocker for any page consuming Global Chrome.
- Never hide, disable, remove, leave an empty RFQ slot or reroute the shared RFQ to Contact.
- Hero RFQ is body context and remains subject to the normal readiness resolver.
- The RFQ receiver is owned by `CONV-RFQ`; Product Detail development consumes it and does not implement it.

## 3. Navigation semantics

- One `aria-current="page"` maximum per primary-navigation surface.
- Grade routes map to `Products`.
- At the active viewport, exactly one primary-navigation surface is in the accessibility tree.
- The inactive responsive surface is programmatically hidden and has zero focusable descendants.
- Full shared DOM may contain one current node per surface, but the active accessibility tree exposes one.
- Menu open/close control has an accessible name, expanded state and predictable focus return.
- Escape closes the Mobile Menu where the shared component supports that keyboard interaction.

## 4. Responsive layout matrix

| Test state | Required behavior |
|---|---|
| Desktop reference 1440px | Two-column Hero, stable wide container, five-fact strip, full technical table, three related cards |
| Desktop minimum | No Header collision; H1/actions/visual remain legible before tablet reflow |
| Tablet landscape/portrait | Hero and grids reflow before content becomes compressed; table meaning preserved |
| 430px mobile | Single-column order identical in meaning to Desktop; no horizontal page overflow |
| 390px mobile | Gate 5 V0.5 composition preserved; full-width actions and stacked modules |
| Narrow mobile | Long grade/type/value/CTA strings wrap; no clipped control or off-screen content |
| 200% zoom | No two-dimensional scrolling for ordinary content; shared navigation and controls remain operable |

## 5. Content order and conditional modules

- Desktop, tablet and mobile use the same semantic page order.
- Visual repositioning cannot move the Hero visual ahead of the H1 in the reading/accessibility order.
- Conditional removal leaves no empty heading, background band, anchor or section-navigation item.
- Application and Related Grade cards keep source order after reflow.
- M-350 V0.5 proves the template geometry only; content lengths for the other grades require stress testing.

## 6. Technical-data mobile semantics

- Desktop presents explicit Property, Standard and Typical Value headers where those columns exist.
- Mobile may use stacked rows, but every value retains its programmatic Property and qualifier association.
- Standard and Typical values cannot be merged, swapped or reduced to visual position alone.
- Units, symbols, ranges, minimum/maximum and `Typical` meaning remain visible.
- Long treatment values wrap within the row; horizontal clipping and meaning-changing truncation fail.
- Screen-reader reading order is Property → Standard → Typical/Value → unit/qualifier.

## 7. Interaction and accessibility acceptance

| Area | Acceptance |
|---|---|
| Touch targets | Minimum 44 × 44px for actionable controls |
| Keyboard | All links, buttons, Menu and receiver forms reachable in logical order |
| Focus | Clearly visible against white, Soft Gray and Deep Navy surfaces |
| Heading hierarchy | Exactly one H1; ordered H2/H3 structure after conditional rendering |
| Landmarks | One Header, main content and one Footer; navigation landmarks distinctly named if multiple |
| Links | Descriptive accessible names; arrow glyphs not the sole label |
| Images | Accurate ALT or empty ALT; no duplicate nearby text announcement |
| Contrast | Text/actions/states meet approved accessible contrast requirements |
| Reduced motion | Non-essential animation respects preference and cannot gate information |
| Forms | Receiver labels, instructions, consent, errors and success states are programmatically associated |
| Errors | Field-specific, actionable and announced; color is not the only signal |

## 8. Gate 5 proof and later verification

Gate 5 M-350 V0.5 already records:

- Desktop 1440 × 6613, SHA-256 `72B56E251D8C22C031B4E294A4E10A2E86D52284D12B8525EE00E0861581818D`.
- Mobile 390 × 10558, SHA-256 `1A6E6CBA3D93C814ACA6B5AD094D840E16265FE8279C25CC178E92E66E4BE6DF`.
- 1440/390/430 no horizontal overflow and minimum 44px controls.

Static proof does not validate runtime focus, accessible-tree, zoom, external receiver integration, font loading or actual long-content cases. If Gate 8 is later authorized, Product Detail work implements shared template infrastructure plus the M-350 candidate only. Gate 9 inspects only authorized implemented surfaces; external receiver tasks validate their own forms before the template consumes them.

## 9. Release blockers

- Page-private Header/Footer or stale V0.2 visible `CURRENT`/`Conversion` state.
- Shared Global Chrome RFQ hidden, disabled, removed, left empty or linked anywhere other than `/request-a-quote/`.
- RFQ receiver not READY at public-release time, even though the fixed RFQ remains visible.
- Historical PNG used instead of approved production SVG binding.
- Duplicate accessible navigation or focusable hidden navigation.
- Horizontal overflow at 430/390/narrow mobile or 200% zoom.
- Technical values lose Property/Standard/Typical association.
- Controls below 44px, invisible focus, keyboard trap or unlabeled form control.

This document defines acceptance only. It does not authorize implementation.
