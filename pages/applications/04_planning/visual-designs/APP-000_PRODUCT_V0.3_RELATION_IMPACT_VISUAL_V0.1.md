# APP-000 PRODUCT V0.3 Relationship Impact Visual V0.1

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Date | 2026-08-30 |
| Review ID | `APP-000-PRODUCT-V03-REL-01` |
| Status | `INCORPORATED_INTO_APP-000_FULL_VISUAL_DESIGN_V0.6` |
| Baseline relationship source | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` |
| Parent chrome baseline | APP-000 V0.5 `FORMAL_FIXED_RFQ_VISUAL_BASELINE` |
| Assets | One Desktop complete page + one 390px logical complete page |

This bounded relationship-impact proof has been incorporated into `APP-000_FULL_VISUAL_DESIGN_V0.6.md`, which now provides the unified four complete pages and Global Chrome state board. These two proofs remain historical evidence and do not require separate visual approval. V0.5 remains the approved fixed-RFQ Global Chrome history. No Gate approval is claimed.

## 2. Rendering method and protected surfaces

The two proofs reuse the same APP-000 V0.5 deterministic renderer, registered Inter font files, `brand_logo_primary_horizontal` source, fixed RFQ Header/Footer and exact Buyer Clean copy. Only these data inputs changed:

- Application collections: 7/7/6/3/1/1 → 8/8/7/4/2/1;
- add M-2377 to Coatings, Plastics, Masterbatch, Printing Inks and Paper;
- Sulfate: 4 → 5 by adding M-2377.

Specialty Materials remains CR-901 only. Chloride 8 and Vapor-phase oxidation 1 remain unchanged. No Rubber category or relationship surface exists.

## 3. Formal Manifest

| Asset | Actual dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `assets/relation-impact/APP-000_PRODUCT_V03_RELATION_IMPACT_DESKTOP_V0.1.png` | 1440×6193 | 722743 | `EB9816D460747291E30762AB7FAF9247E9239AEC93704DA4970FA71FCF8CD92A` |
| `assets/relation-impact/APP-000_PRODUCT_V03_RELATION_IMPACT_MOBILE_390_V0.1.png` | 780×19024, representing 390×9512 logical | 1604374 | `A6117BD4F0539C41AF3F82C8E13F65187750BBC88D165C6305AEAB0AC27799FB` |

The output directory contains only these two current review assets. The generator remains under `99_workspace` and is not a development deliverable.

## 4. Visual review record

Machine comparison against the approved V0.5 full-route assets reproduced zero differing RGBA channels in both complete Header regions and both complete Footer regions. The Desktop canvas grows by 60px for the additional Masterbatch chip row; the Mobile export grows by 160px, equal to 80px logical, for one additional Masterbatch chip row and one additional Sulfate grade row. These are content-driven deltas, not fixed-height padding.

### 4.1 Desktop

- Header Logo, Applications `CURRENT`, visible Home, and fixed `Request a Quote` are present.
- Hero count panel reads Coatings 8, Plastics 8, Masterbatch 7, Printing Inks 4, Paper 2 and Specialty Materials 1.
- M-2377 is visible once in each of the five authorized existing Application cards and absent from Specialty Materials.
- Sulfate reads 5 and includes M-2377; Chloride remains 8; Vapor-phase oxidation remains 1.
- No card text, chip, button, accordion answer or Footer content is cropped or overlapped.
- Footer Logo and fixed Request a Quote remain present with complete Deep Navy closure.

### 4.2 390px logical

- Header order is `Logo | RFQ | Menu`; RFQ label is exactly `RFQ`.
- All collection cards use content-driven height. M-2377 chips wrap inside the 16–374px logical safe strip.
- The last visible chip to CTA spacing remains normal; no fixed-height blank region or horizontal overflow is visible.
- Sulfate grows to five grade rows without collision; the next Process and Buyer Clean sections close normally.
- Footer Logo, navigation, fixed Request a Quote and copyright close without crop.

### 4.3 V0.5 preservation check

The five approved V0.5 source assets remain present at their prior dimensions and SHA-256 values. No V0.5 PNG was overwritten. The new proofs are stored only under `assets/relation-impact/`.

## 5. Claim and taxonomy QA

| Check | Result |
|---|---|
| 30 verified / 0 conflict / 54 no-public source result | PASS |
| Five M-2377 Application mappings | PASS |
| M-2377 Sulfate classification | PASS |
| M-2377 Specialty Materials | ZERO RENDER |
| Rubber category/card/URL/keyword | NOT CREATED |
| M-996/M-2196 ranking, difference, equivalence or replacement | ZERO CLAIM |
| `NO_PUBLIC_MAPPING` rewritten as unsuitability | ZERO CLAIM |
| Fixed RFQ and approved Global Chrome | PRESERVED |
| Page identity and child keyword ownership | PRESERVED |

## 6. Governance

`APP-000-PRODUCT-V03-REL-01` is `INCORPORATED_INTO_V0.6`; its evidence and relationship delta remain valid, while V0.6 is the sole current complete visual review candidate. A local self-check is not project-control or user approval. Gate 1–5 existing review statuses, `G5-01=OPEN`, lifecycle `DESIGN_IN_REVIEW`, Gate 6/7 prohibition and the ban on Application child-page work remain unchanged.
