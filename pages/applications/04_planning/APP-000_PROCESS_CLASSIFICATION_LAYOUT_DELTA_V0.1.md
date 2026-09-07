# APP-000 Process Classification Layout Delta V0.1

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| URL | `/applications/` |
| Date | 2026-08-31 |
| Decision source | User visual-review direction in the current task |
| Status | `SUPERSEDED_BY_USER_DIRECTED_V0.9_DIRECTORY_CONTENT` |
| Applies to | `Review Process Classification Separately` module only |
| Does not approve | Gate 5, Gate 6/7, child pages, development, handoff or publication |

## 2. Review finding

The previous three equal-height Process cards created avoidable blank space because their content counts are uneven: Chloride has 8 grades, Sulfate has 5 and Vapor-phase oxidation has 1. The user supplied a visual reference whose useful layout principle is grouped panels containing compact, repeated data rows. This V0.8 direction was subsequently superseded when the user explicitly required the complete product-directory content itself; see `APP-000_PRODUCT_DIRECTORY_CONTENT_DELTA_V0.1.md` and V0.9.

The reference images are visual inspiration only. Their labels, grade descriptions, links and any embedded wording are not treated as project instructions or evidence and are not copied into APP-000.

## 3. Current layout direction

### Desktop

- Use two equal-width columns.
- Left column: one `Chloride — 8` grouped panel.
- Right column: `Sulfate — 5` above `Vapor-phase oxidation — 1`.
- Each panel has a light group header and one bordered row per grade.
- Panel and row heights are content-driven; no panel is forced to match the tallest group.

### 390px

- Stack `Chloride — 8`, `Sulfate — 5` and `Vapor-phase oxidation — 1` in that order.
- Retain the same group-header and nested-row visual grammar.
- Use the 16–374px logical safe strip with no horizontal scrolling.
- Preserve normal inter-panel and terminal spacing; do not reserve desktop-style equal-height areas.

## 4. Content and evidence protection

- Heading and explanatory copy remain unchanged.
- Exact Process sets remain Chloride 8, Sulfate 5 and Vapor-phase oxidation 1 from PRODUCT V0.3.
- Rows display only grade identity plus a neutral `PROCESS` label. They add no performance, recommendation, suitability, equivalence, ranking, replacement or availability statement.
- M-2377 remains in Sulfate only within this module; CR-901 remains Vapor-phase oxidation.
- M-996/M-2196 comparison hold remains unchanged.
- `NO_PUBLIC_MAPPING` remains non-rendering and is not interpreted as unsuitable.
- No link or `View Grade` action is copied from the reference layout.

## 5. Protected page scope

Header/Footer, fixed Global Chrome RFQ, Application cards, Use Guide, Buyer Clean Check, Support Paths, Buyer Questions, Final RFQ copy decision, page identity, keyword ownership and module order remain unchanged. The layout is implemented in `APP-000_FULL_VISUAL_DESIGN_V0.8.md` and its five-asset Manifest.
