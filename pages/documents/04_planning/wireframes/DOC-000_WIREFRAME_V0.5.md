# DOC-000 Reader-Focused Gate 3 Wireframe Specification V0.5

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Rework ID | `DOC-000-G2-G3-READER-COPY-WF-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED` |
| Copy source | `DOC-000_CONTENT_ARCHITECTURE_V0.7.md` |
| Required assets | 1440 Desktop, 768 Tablet, 390 logical @2x Mobile, 390 logical @2x Mobile Menu open |
| Scope | Grayscale structure, content wrapping and interaction placement only |

V0.4 is preserved as `REVISION_REQUIRED / SUPERSEDED_BY_USER_DIRECTED_READER_REWORK`. V0.5 does not approve color, typeface, imagery or finished visual styling.

## 1. Desktop 1440

- Shared 84px Header and approximately 1200px centered page working area.
- Hero is a substantive two-column composition: left contains breadcrumb, eyebrow, H1, full body, English note and CTA; right is a formal media region with crop-safe boundary.
- The media region may show only a grayscale structural proxy in Gate 3. Final image selection and factual implications remain Gate 4+ work.
- `How It Works` is one lightweight horizontal numbered line/sequence, not three large cards.
- Only `Supporting Your Review Process` uses three scenario cards.
- Four documentation categories use a readable 2 × 2 grid with no actions/counts/empty slots.
- Grade Selector is a real two-column section: explanation/Explore Products at left, field/helper/validation/selected CTA states at right.
- `Why Documents Are Provided on Request` is one full-width information band with continuous body copy.
- Buyer Questions are one wide accordion, collapsed by default; one expanded row proves behavior.
- Closing CTA is a compact horizontal text/action band.
- Shared Footer follows at full width.

## 2. Tablet 768

- Shared 64px compact Header.
- Hero reflows to copy then a full-width media region.
- Lightweight steps stack as a compact numbered sequence.
- Scenario cards use 2 + 1; documentation categories remain 2 × 2.
- Selector, FAQ and closing CTA reflow without omitting content or actions.
- Full-width request explanation remains a single band.
- Shared Footer retains RFQ and all legal controls.

## 3. Mobile 390 logical @2x

- Physical asset width is 780px and must be labeled `390px logical @2x`.
- Shared 64px logical Mobile Header: Logo | Request a Quote | Menu.
- Hero copy precedes a compact media crop region.
- All following content is a true single column; no horizontal carousel.
- Steps are a numbered vertical sequence with connecting line, not cards.
- Scenario and category cards use only the height required by real copy.
- Selector field, CTA and accordion buttons use ≥44px logical targets.
- No text clamp, horizontal overflow or artificial fixed-height blank region.
- Closing CTA reflows to copy then full-width action.

## 4. Mobile Menu open

- 390 logical @2x evidence.
- Logo, persistent RFQ and Close remain in the Header.
- Menu order: Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Documents is the only current link in the active surface; no visible `CURRENT` word.
- Each row is ≥44px logical and background page content is excluded from active focus.

## 5. State and behavior contract

| State | Required behavior |
|---|---|
| Selector initial | Prompt and helper; no default Grade and no Continue action |
| Selector menu open | All 14 allowed identifiers exactly once |
| Selector validation | Approved message associated with field; focus returns to field |
| Selector selected | Confirmation plus `Continue to Request Documents` |
| Handoff | Grade only; receiver remains editable |
| FAQ default | All rows collapsed |
| FAQ proof | One row expanded in normal flow; question order unchanged |
| Hero/no-selection closing CTA | Scrolls/focuses actual selector with sticky-Header offset |
| Hover | Only real controls receive interactive feedback |
| Focus | Visible, persistent and not color-only |

## 6. Asset set

| Asset | Required dimensions / label | Purpose |
|---|---|---|
| `DOC-000_G3_DESKTOP_1440_READER_WIREFRAME_V0.1.png` | 1440px wide | Complete Desktop page |
| `DOC-000_G3_TABLET_768_READER_WIREFRAME_V0.1.png` | 768px wide | Complete Tablet page |
| `DOC-000_G3_MOBILE_390_LOGICAL_2X_READER_WIREFRAME_V0.1.png` | 780px physical / 390 logical @2x | Complete Mobile page |
| `DOC-000_G3_MOBILE_MENU_390_LOGICAL_2X_READER_WIREFRAME_V0.1.png` | 780px physical / 390 logical @2x | Menu-open proof |

## 7. Frozen boundary checklist

- Four documentation categories and 14 Grade identifiers only.
- No Finder, file result, download/view action, inventory, fifth category or fake zero-state.
- Global Header/Footer and RFQ remain inherited.
- Real full copy from V0.7 is used; no lorem ipsum.
- Route-unavailable and evidence states remain release/governance controls, not Buyer Clean fallbacks.
- No Gate 4/5, child page, development or D16 authority.

## 8. Project-control disposition

Project control passed the revised 1440/768/390@2x/Menu responsive structures pending explicit user confirmation. The Hero media region remains geometry only; review annotations such as `Interaction proof` must not enter Gate 4/5 Buyer Clean; Header/Footer remain shared Global Chrome assets rather than DOC-000-owned design.
