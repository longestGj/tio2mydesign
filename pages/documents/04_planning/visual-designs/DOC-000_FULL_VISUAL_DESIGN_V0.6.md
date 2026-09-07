# DOC-000 Full Visual Design V0.6 — Buyer Clean

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Gate | Gate 5 |
| Review ID | `DOC-000-G5-FULL-VISUAL-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Date | 2026-09-02 |
| Gate 5 authority | `USER_AUTHORIZED / IN_PROGRESS` |
| Approved upstream | Gate 4 Manifest V0.1 SHA-256 `9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00` |
| Gate 6/7 | `NOT_AUTHORIZED` |

V0.1–V0.5 full visual documents and assets remain historical. V0.6 is the first Gate 5 candidate based on the approved reader-focused Selector architecture, user-approved Hero direct link and PCR-01 responsive corrections.

## 1. Current full visual assets

| Surface | Asset | Dimensions |
|---|---|---:|
| Desktop complete page | `gate5_v0.6/assets/DOC-000_G5_DESKTOP_1440_FULL_BUYER_CLEAN_V0.6.png` | 1440×3784 |
| Tablet complete page | `gate5_v0.6/assets/DOC-000_G5_TABLET_768_FULL_BUYER_CLEAN_V0.6.png` | 768×5324 |
| Mobile complete page | `gate5_v0.6/assets/DOC-000_G5_MOBILE_390_LOGICAL_2X_FULL_BUYER_CLEAN_V0.6.png` | 780×11168 (`390 logical @2x`) |
| Selector / FAQ states | `gate5_v0.6/assets/DOC-000_G5_SELECTOR_FAQ_INTERACTION_STATES_V0.6.png` | 1440×1260 |
| Mobile Menu open | `gate5_v0.6/assets/DOC-000_G5_MOBILE_MENU_OPEN_390_LOGICAL_2X_V0.6.png` | 780×1360 (`390 logical @2x`) |
| Shared Chrome assembly | Inherited approved Gate 4 proof | 1440×1680 |

## 2. Complete Buyer Clean page

The three complete-page assets contain only reader-facing website UI. Removed from the Gate 5 page surfaces:

- Gate/review title bars;
- internal approval or blocker states;
- the Gate 4 Hero illustration annotation;
- file inventory, route or governance notes;
- fake download, view, approval or availability actions.

The Buyer Clean sequence is:

`Shared Header → Breadcrumb → Hero → Product Grade Selector → How It Works → Supporting Your Review Process → Documentation You Can Request → Why Documents Are Provided on Request → Buyer Questions → Closing CTA → Shared Footer`.

## 3. Hero

- Desktop keeps the approved two-column composition: content left and evidence-neutral vector document system right.
- Tablet and Mobile stack content before media.
- CTA visible copy: `Start a Document Request`.
- CTA semantics: accessible link to `/request-documents/`.
- It carries no Product Grade parameter, does not scroll/focus the Hub Selector and does not create a default Grade.
- The right-side media has no actual filename, certificate, revision, market, factory or inventory claim.

## 4. Product Grade Selector

The Selector remains immediately after Hero as a separate Grade-first path.

### Initial

- One closed dropdown has no default Grade.
- All 14 approved Grade values belong to the control.
- `Continue to Request Documents` is visible, focusable and operable.
- Helper and validation regions reserve stable space.
- `Not sure which grade to select? Explore Products. →` links to `/products/` at Desktop, Tablet and Mobile.

### No-selection validation

- No navigation.
- Exact error: `Select a product grade to continue.`
- Error associates with and returns focus to the Grade dropdown.
- Continue remains in the same position.

### Valid selected Grade

- Example proof uses `M-2196`.
- Confirmation: `Selected product grade: M-2196`.
- Continue navigates to `/request-documents/?product=M-2196` or the approved safe equivalent.
- Receiving Grade remains editable.

### Responsive geometry

- Desktop: field left and primary action right.
- Tablet: full-width field, stable helper/validation/Explore region and full-width Continue on a separate row; field/button overlap=0.
- Mobile: one column; Explore Products remains visible; full-width Continue; no horizontal overflow.

## 5. Main content modules

- `How It Works`: three lightweight numbered steps, not cards.
- `Supporting Your Review Process`: exactly three explanatory scenario cards without actions or badges.
- `Documentation You Can Request`: exactly four informational cards:
  1. Technical Data & Product Documentation.
  2. Safety Documentation.
  3. Quality & COA Documentation.
  4. Origin & Supplier Qualification Documentation.
- Category cards contain no action slot, file count, availability label or status badge.
- `Why Documents Are Provided on Request` remains a single Soft Teal information band.

## 6. Buyer Questions

- Six question buttons are visible.
- Answers are collapsed by default in all three complete pages.
- The interaction board demonstrates one expanded answer.
- Disclosure row and keyboard target are at least 44px.
- Expand/collapse does not navigate or change the selected Grade.

## 7. Closing CTA

- No selected Grade: `Select a Product Grade` focuses the upper Selector.
- Valid selected Grade: `Continue to Request Documents` uses the same Grade-only handoff.
- The action slot is never empty, hidden or disabled.

## 8. Mobile Menu open

- Uses the shared 64px Mobile Header and `Logo | RFQ | Menu` order.
- Visible order: Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote.
- Documents current state: bold plus 4px Teal left marker.
- Buyer-visible `CURRENT` word: zero.
- Request a Quote remains the terminal visible action.

## 9. Shared Global Chrome

- Desktop Header: 84px, Documents bold plus 3px Teal underline.
- Desktop and Mobile Header retain persistent Request a Quote.
- Footer uses inherited Deep Navy shared authority.
- Production SVG Logo bindings are inherited without modification.
- DOC-000 owns only `currentNavigationKey=Documents`; it does not fork Header, Menu or Footer.

The approved Gate 4 assembly proof is inherited byte-identically as Gate 5 assembly evidence.

## 10. Evidence and structured-data boundary

- No document is presented as existing, approved, downloadable or immediately available.
- No file inventory, filename, revision or language coverage is invented.
- No universal Grade, market, destination or regulatory applicability is claimed.
- A request does not guarantee availability, approval, regulatory coverage or delivery timing.
- SEO/GEO/Schema V0.6 remains unchanged; the visual does not create a structured file relation or `potentialAction`.
- Route and receiver readiness remain later release validation and do not enter Buyer Clean.

## 11. Accessibility and responsive acceptance

- Primary targets are 50px in the full visual; shared Menu target minimum remains 44px.
- Primary White-on-Deep-Teal contrast remains 4.88:1 or higher.
- Visible keyboard focus is shown on the interaction asset.
- Error and selected states are not colour-only.
- Mobile long titles wrap; no horizontal overflow is present in the 390 logical composition.
- The Hero is not mechanically shrunk from Desktop; media and cards stack intentionally.

## 12. Open items

| ID | Item | Status |
|---|---|---|
| DOC-G5-O01 | Project-control review of three complete Buyer Clean pages | `PENDING` |
| DOC-G5-O02 | Project-control review of Selector/FAQ interaction states | `PENDING` |
| DOC-G5-O03 | Project-control review of Mobile Menu and inherited Chrome assembly | `PENDING` |
| DOC-G5-O04 | User approval after project-control pass | `NOT_REQUESTED_YET` |
| DOC-G5-O05 | Gate 6/7 authorization | `NOT_AUTHORIZED` |

## 13. Stage boundary

`DOC-000-G5-FULL-VISUAL-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

No Gate 6/7, child Document page, development, D16, code, testing, deployment, publication, DNS or indexing authority is created.
