# APP-000 PRODUCT V0.3 Relationship Content Delta V0.1

## 1. Control

| Field | Value |
|---|---|
| Page | `APP-000` Applications Hub |
| Date | 2026-08-30 |
| Status | `INCORPORATED_INTO_V0.6_FOR_PROJECT_CONTROL_REVIEW` |
| Review ID | `APP-000-PRODUCT-V03-REL-01` |
| Parent visual baseline | APP-000 V0.5 `FORMAL_FIXED_RFQ_VISUAL_BASELINE` |
| Sole relationship input | PRODUCT V0.3 matrix and three companion audits |
| Scope | Relationship-driven collection counts, grade chips and Process list only |

This delta supersedes only the V0.2.1 relationship portions of APP-000's existing Gate 1–5 artifacts. It does not overwrite their historical approval/review records and does not alter unrelated copy or layout contracts.

## 2. Exact visible delta

| Surface | Existing V0.5 relationship content | V0.3 content |
|---|---|---|
| Hero count panel | 7 / 7 / 6 / 3 / 1 / 1 | 8 / 8 / 7 / 4 / 2 / 1 |
| Coatings | Seven Grade-to-Review chips | Existing seven + M-2377 |
| Plastics | Seven Grade-to-Review chips | Existing seven + M-2377 |
| Masterbatch | Six Grade-to-Review chips | Existing six + M-2377 |
| Printing Inks | Three Grade-to-Review chips | Existing three + M-2377 |
| Paper | M-350 | M-350 + M-2377 |
| Specialty Materials | CR-901 | CR-901; unchanged |
| Chloride | Eight grades | Eight grades; unchanged |
| Sulfate | M-996, M-2196, M-108, M-52 | Existing four + M-2377 |
| Vapor-phase oxidation | CR-901 | CR-901; unchanged |

All additions use the existing neutral `Grade to Review` or Process-classification visual treatment. M-2377 receives no preferred, recommended, best, ranked, equivalent or performance styling.

## 3. Responsive behavior

- Desktop cards retain the approved two-column collection grid and content-driven height.
- At 390px logical width, the six existing cards remain a single-column stack; M-2377 wraps into the existing two-chip grid without horizontal overflow.
- Buttons remain after the last visible chip with normal content spacing; no empty CTA slot or fixed-height residue is introduced.
- The Sulfate Process card grows by one line; Chloride and Vapor-phase oxidation remain unchanged.
- Header remains 84px Desktop and 64px logical Mobile. Mobile order remains `Logo | RFQ | Menu`, and the label remains `RFQ`.
- Footer and fixed Request a Quote actions remain unchanged.

## 4. Buyer Clean and machine-readable limits

- Rubber does not render in Buyer Clean, metadata, ALT, GEO entity relationships, Schema, route data or navigation.
- M-2377 does not render in Specialty Materials.
- `NO_PUBLIC_MAPPING` generates no negative suitability copy, crossed-out state, disabled chip or exclusion relation.
- SEO/GEO/Schema may mirror only the same six visible approved taxonomy collections and the visible neutral relations.
- No new Application child page, category, URL or keyword is introduced.

## 5. Unchanged protected scope

The following remain exactly governed by the approved APP-000 V0.5 fixed-RFQ baseline and current APP-000 Gate records:

- Header, Mobile Menu and Footer design;
- fixed Global Chrome RFQ behavior;
- Logo source and placement;
- Applications current-state indicator;
- page identity, URL, `NO_PRIMARY_KEYWORD` and child keyword ownership;
- all unrelated Buyer Clean copy and module sequence;
- M-996/M-2196 comparison freeze;
- Gate 1–5 existing statuses, `G5-01=OPEN`, lifecycle `DESIGN_IN_REVIEW`;
- prohibition on Gate 6/7, child pages, development, handoff and publication.
