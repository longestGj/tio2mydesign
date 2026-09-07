# DOC-000 Selector-CTA Gate 3 Wireframe Specification V0.6

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Decision ID | `DOC-000-G2-G3-SELECTOR-CTA-01` |
| Status | `APPROVED / CLOSED` |
| Copy source | `DOC-000_CONTENT_ARCHITECTURE_V0.8.md` |
| Superseded candidate | Wireframe V0.5; preserved, not overwritten |
| Required new assets | 1440 Desktop, 768 Tablet, 390 logical @2x Mobile, Selector three-state board |

## 1. Complete module order

`Hero → Product Grade Selector → How It Works → Review Scenarios → Documentation Categories → Why on Request → Buyer Questions → Closing CTA → Shared Footer`

Shared Header precedes the body. No module is omitted at 768px or 390px.

## 2. Desktop 1440

- Consume the shared 84px Header and approximately 1200px body working area.
- Keep the balanced Hero copy/media split from the reader-focused candidate.
- Place the full Product Grade Selector immediately after the Hero as a two-column band: explanation and Explore Products link at left; dropdown, helper, stable validation position and initially visible Continue button at right.
- Keep How It Works as a lightweight horizontal sequence.
- Keep only the three Review Scenarios as a three-card row.
- Keep the four documentation categories as 2 × 2 informational cards without actions.
- Keep Why on Request as a full-width information band.
- Keep all six FAQ question buttons visible; answers default collapsed, with one expanded proof.
- Keep the Closing CTA compact and ensure an action is always visible.

## 3. Tablet 768

- Consume the shared 64px compact Header.
- Hero stacks copy then media.
- Selector remains directly after Hero and reflows to explanation above the complete field/action panel.
- Dropdown and Continue action remain simultaneously visible without requiring a Grade selection.
- All later modules preserve their prior approved Tablet reflow.
- Primary controls are at least 44px high and there is no horizontal overflow.

## 4. Mobile 390 logical @2x

- Export at 780px physical width and label as `390px logical @2x`.
- Hero CTA targets the adjacent selector with sticky-Header offset.
- Selector is a complete single-column block: heading, body, Explore Products link, label, dropdown, helper, stable error position and full-width Continue action.
- The Continue action remains at least 44px and is visible in the initial full-page asset.
- FAQ remains a compact disclosure list, not six default-open answers.
- Closing action remains full width and never disappears.
- No clipping, text clamp or horizontal page overflow.

## 5. Selector state board

The separate grayscale state board must show the same Product Grade control and the same visible primary CTA in all states:

1. Initial — prompt, helper, empty validation position, visible Continue.
2. No-selection validation — prompt, exact error `Select a product grade to continue.`, visible Continue; contract states no navigation and focus return.
3. Valid selected Grade — selected value, `Selected product grade: M-2196`, same Continue and `/request-documents/?product=M-2196` target example.

State-board review labels are evidence annotations and must not enter Gate 4/5 Buyer Clean.

## 6. Dropdown data contract

The dropdown contains one non-selecting prompt followed by exactly these 14 values: `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

Do not replace it with cards, a permanently visible list, accordion, carousel, Show more or pagination.

## 7. Asset set

| Asset | Dimensions / label | Purpose |
|---|---|---|
| `DOC-000_G3_DESKTOP_1440_SELECTOR_CTA_WIREFRAME_V0.2.png` | 1440px wide | Complete Desktop initial state |
| `DOC-000_G3_TABLET_768_SELECTOR_CTA_WIREFRAME_V0.2.png` | 768px wide | Complete Tablet initial state |
| `DOC-000_G3_MOBILE_390_LOGICAL_2X_SELECTOR_CTA_WIREFRAME_V0.2.png` | 780px physical / 390 logical @2x | Complete Mobile initial state |
| `DOC-000_G3_SELECTOR_CTA_STATES_V0.1.png` | 1440px wide | Initial / validation / selected proof |
| Prior Mobile Menu V0.1 | Inherited unchanged | Global Chrome assembly proof; not redrawn |

## 8. Frozen boundaries

The four categories, 14 Grade identifiers, Grade-only handoff, FAQ copy, reader-focused content, `NO_PRIMARY_KEYWORD`, evidence limits and shared Header/Footer/Menu remain unchanged. No Gate 4/5 or D16 authority is created.

## 9. Project-control disposition

Review ID `DOC-000-G2-G3-SELECTOR-CTA-01` is `APPROVED / CLOSED`. The user approved the complete Gate 3 candidate on 2026-09-02 and separately authorized Gate 4. The 1440/768/390@2x complete pages and three-state board are the approved Gate 3 assets; Gate 5 remains unauthorized.
