# DOC-000 Visual Direction V0.5 — Documentation Editorial Request

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Gate | Gate 4 |
| Review ID | `DOC-000-G4-DOC-EDITORIAL-01` |
| Status | `APPROVED / CLOSED` |
| Date | 2026-09-02 |
| Gate 4 authority | User explicit authorization on 2026-09-02 |
| Approved upstream | Content V0.8; Wireframe V0.6; Responsive Contract V0.2; Gate 3 Manifest V0.3; Gate 3 Closure V0.1 |
| Shared authority | Global Header / Footer Specification V0.5; Production SVG Logo Manifest V1.0 |
| Gate 5 | `USER_AUTHORIZED / IN_PROGRESS` |

V0.1–V0.4 are historical visual directions based on superseded page structures. They may explain provenance but are not current design authority. V0.5 is the first Gate 4 candidate built from approved Gate 3 V0.3.

**Resolved Hero CTA decision:** the user approved `Start a Document Request` as an accessible direct link to `/request-documents/`. It carries no query, does not scroll/focus the Selector and does not set a default Grade. The Selector remains a separate Grade-first path.

## 1. Recommended direction

Direction name: **Documentation Editorial Request**.

The page should feel like a controlled B2B documentation desk rather than a file library, dashboard, SaaS product or download centre. The visual hierarchy is built from:

- a white-led industrial editorial canvas;
- Deep Navy headings and closing surface;
- Accessible Deep Teal for operable primary actions and small accent text;
- thin documentation rules, linear file icons and restrained data-like spacing;
- a prominent working selector directly after Hero;
- clear separation between explanatory cards and actual actions.

## 2. Visual tokens

| Token | Value | Use |
|---|---|---|
| Primary Navy | `#062B5B` | H1–H3, navigation, icon outlines, important text |
| Deep Navy | `#031B3A` | Closing CTA and inherited Footer |
| Accessible Deep Teal | `#007F77` | Solid CTA, small accent text, focus treatment |
| Deep Teal hover | `#006B65` | Primary CTA hover |
| Malaysia Teal | `#00A99D` | Non-text line and illustration accents only |
| Accent Teal | `#14B8A6` | Dark-surface eyebrow and light graphic highlight |
| Soft Background | `#F5F8FB` | Selector, section separation and neutral illustration field |
| Soft Teal | `#EAF8F6` | Informational band and icon plate |
| Border | `#D9E2EC` | Cards, fields and dividers |
| Body | `#334155` | Body copy |
| Supporting | `#526176` | Notes and helper copy |
| Error | `#B42318` | Exact no-selection validation only |
| Success | `#067647` | Selected-grade confirmation only |

White on `#007F77` contrast is 4.88:1; White on `#031B3A` is 17.19:1; Navy on White is 13.96:1.

## 3. Typography and geometry

- Font: Inter, inherited.
- Desktop H1: 54px / 60px, weight 700; Tablet: 43px / 49px; Mobile: 34px / 40px.
- Desktop H2: 34px; Tablet: 30px; Mobile: 27–28px.
- Body: 14–16px at key samples with 1.5–1.65 line height; final Gate 5 may refine within approved brand limits.
- Working container: 1296px at 1440; 684px at 768; 354px at 390.
- Card radius: 10–12px; CTA radius: 7px; no pills, glassmorphism or heavy shadow.
- Minimum interactive target: 44px; primary samples use 50px.

## 4. Hero direction

### Desktop

Hero is a true two-column layout. The left column contains breadcrumb, eyebrow, H1, approved body, language note and the link `Start a Document Request`. The link navigates directly to `/request-documents/`, with no query and no Selector anchor/scroll/focus. It uses a restrained Navy outlined link treatment with a navigation arrow so it remains visually distinct from the Selector's filled primary Continue action. The right column contains an evidence-neutral vector composition of layered blank document sheets and TiO2 particle/orbit forms.

The right side must not use an actual TDS/SDS/COA cover, certification seal, factory image, warehouse image, flag, port, staff photo or document filename. It communicates documentation as a process without implying that any specific document exists or is approved.

### Tablet and mobile

Tablet and mobile stack content before illustration. The media remains compact and secondary; it must not create a large blank region after the CTA. If the illustration is not available, the media region may be omitted and the Hero closes after the CTA without a placeholder.

## 5. Selector direction and states

The selector is the visually strongest working surface and remains immediately after Hero.

- It is an optional Grade-first path and is not triggered by the Hero link.
- One native-style closed dropdown owns all 14 approved Grade values.
- Initial state shows the operable `Continue to Request Documents` button; no Grade is selected.
- The helper and stable validation region prevent layout shift.
- No-selection validation uses a 2px error border plus the exact error `Select a product grade to continue.`; focus returns to the dropdown.
- Valid selected state uses a Teal field border and a check-marked confirmation `Selected product grade: {GRADE}`.
- The selected state proves only Grade handoff. It does not imply document availability, approval, scope or delivery.
- Focus uses a visible 3px outer treatment in addition to colour; hover darkens the Teal action without changing geometry.
- At 768px, the field is full-width, helper/validation reserve stable space, `Explore Products` remains visible, and Continue moves to the next full-width row with no overlap.
- At 390px, `Not sure which grade to select? Explore Products. →` remains visible below the stable validation slot and above Continue; responsive design must not hide it.

## 6. Module treatments

### How It Works

Use a light horizontal sequence on Desktop and a vertical sequence on Tablet/Mobile. Number markers are Soft Teal circles with Deep Teal strokes. Do not convert the three steps into cards.

### Supporting Your Review Process

Use one Soft Background section with three white cards. Each card has a linear document icon, Navy title and restrained body. Cards are explanatory and have no CTA, badge or status.

### Documentation You Can Request

Use a 2×2 Desktop grid and single-column Tablet/Mobile stack. Exactly four informational categories render. Cards have no hover lift, cursor cue, button, count, badge or empty action slot.

### Why Documents Are Provided on Request

Use one continuous Soft Teal information band with a document icon. It is visually supportive, not a warning panel.

### Buyer Questions

Use full-width bordered disclosure rows. Six questions are visible and answers default collapsed. A minus mark plus revealed answer demonstrates one-expanded state. Entire row target is at least 44px.

### Closing CTA

Use a compact Deep Navy surface. The action is always visible: `Select a Product Grade` without selection, or `Continue to Request Documents` with a selected Grade. Do not render an empty or disabled slot.

## 7. Shared Global Chrome assembly

DOC-000 consumes the shared Header, Mobile Header, Mobile Menu and Footer without a page-owned fork.

- Desktop Header height 84px; Desktop `Documents` state is bold plus a 3px Teal underline.
- Mobile Header height 64px and order `Logo | RFQ | Menu`.
- Mobile Menu `Documents` state is bold plus a 4px Teal left marker.
- Buyer-visible `CURRENT` text is zero.
- `Request a Quote` is permanently visible and targets `/request-a-quote/`.
- Desktop and Mobile Footer use the shared Deep Navy authority; DOC-000 owns no Footer copy or layout.

The assembly proof is a review board, not a new Global Chrome specification.

## 8. Responsive key decisions

| Surface | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Hero | 2 columns | stacked | stacked |
| Selector | field left, action right | full-width field, stable messages/link, full-width action below | one column, Explore Products retained, full-width action |
| How It Works | horizontal sequence | vertical sequence | vertical sequence |
| Scenario cards | 3 columns | one column | one column |
| Category cards | 2×2 | one column | one column with long-title wrapping |
| FAQ | full-width rows | full-width rows | full-width 44px+ rows |
| Closing | copy left, action right | same | stacked full-width action |

## 9. Evidence and route boundaries

- No download, view, approved-file, file-count or inventory action is shown.
- No visual element claims coverage for every grade, market, destination, language or regulatory scope.
- No factory, manufacturing, warehouse, origin, shipment or certification implication is introduced.
- Route readiness and inventory readiness remain release constraints outside Buyer Clean visual copy.
- SEO/GEO/Schema Contract V0.6 remains unchanged; these visuals establish no new structured relationship.

## 10. Current review assets

1. `gate4_v0.5/assets/DOC-000_G4_DESKTOP_1440_KEY_DIRECTION_V0.5.png`
2. `gate4_v0.5/assets/DOC-000_G4_TABLET_768_KEY_DIRECTION_V0.5.png`
3. `gate4_v0.5/assets/DOC-000_G4_MOBILE_390_LOGICAL_2X_KEY_DIRECTION_V0.5.png`
4. `gate4_v0.5/assets/DOC-000_G4_SELECTOR_FAQ_COMPONENT_STATES_V0.5.png`
5. `gate4_v0.5/assets/DOC-000_G4_GLOBAL_CHROME_ASSEMBLY_PROOF_V0.5.png`

Matching SVG review sources are retained beside each PNG. These are visual-planning artifacts, not development code or implementation authority.

## 11. Open review items

| ID | Item | Current state |
|---|---|---|
| DOC-G4-O01 | Project-control review of direction, density and hierarchy | `PROJECT_CONTROL_REVIEW_PASS` |
| DOC-G4-O02 | Project-control review of selector/FAQ states and evidence boundary | `PROJECT_CONTROL_REVIEW_PASS` |
| DOC-G4-O03 | Project-control review of Global Chrome assembly | `PROJECT_CONTROL_REVIEW_PASS` |
| DOC-G4-O04 | User approval after project-control pass | `APPROVED / CLOSED` on 2026-09-02 |
| DOC-G4-O05 | Gate 5 authorization | `USER_AUTHORIZED / IN_PROGRESS` |
| DOC-G4-O06 | Exact Hero CTA copy and behavior | `USER_APPROVED / CLOSED` via `DOC-000-G4-HERO-CTA-02` |
| DOC-G4-O07 | PCR-01 Tablet overlap and Mobile helper | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

## 12. Stage boundary

`DOC-000-G4-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`. Parent review `DOC-000-G4-DOC-EDITORIAL-01 = APPROVED / CLOSED` by user decision on 2026-09-02. Gate 5 is separately `USER_AUTHORIZED / IN_PROGRESS`; no Gate 6/7 or development authority is created.

This document does not authorize Gate 5, child Document pages, development, D16 access, testing, deployment, publication, DNS or indexing.
