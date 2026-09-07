# APP-000 Applications Hub — Full Visual Design V0.7

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Version | `V0.7` |
| Date | 2026-08-31 |
| Review ID | `APP-000-G5-V07-RFQ-COPY-01` |
| Current status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Baseline role | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.8` |
| User approval date | Not approved for Gate 5 |

V0.7 inherits the complete V0.6 unified package and implements the user's 2026-08-31 decision to remove one Final RFQ qualification sentence. V0.8 now supersedes it as the current review candidate after the user's Process-layout direction; V0.7 remains preserved and its copy delta remains active.

V0.6 remains preserved as historical evidence and is not overwritten. This revision does not advance Gate 5, Gate 6 or Gate 7 and does not authorize Application child pages, handoff, development, deployment or publication.

## 2. Controlled change from V0.6

The sole public-copy change is governed by `APP-000_FINAL_RFQ_COPY_DELTA_V0.1.md`:

- removed from Desktop and 390px Full-route Final RFQ: `It does not confirm price, availability, documents, sample approval or delivery timing.`
- retained heading: `Request a Quote with Application Context`;
- retained body: `Provide the intended application, destination, estimated quantity and any grades already under review.`;
- retained CTA: `Request a Quote`;
- Final RFQ containers close by content-driven height after the button and normal terminal spacing.

Desktop and 390px Route-safe assets are byte-identical to V0.6 because the conditional Final RFQ module is absent in that state. The Global Chrome state board changes only its review-version title from V0.6 to V0.7.

The removal does not create or imply a commercial, technical, document, sample or delivery promise. No other Buyer Clean copy is changed.

## 3. Relationship and governance baseline

The sole current relationship source remains `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and its three V0.3 audits.

| Application collection | Count | Current visible grades |
|---|---:|---|
| Coatings | 8 | M-350, M-510, M-896, M-996, M-2196, M-895, M-52, M-2377 |
| Plastics | 8 | M-350, M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Masterbatch | 7 | M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Printing Inks | 4 | M-350, M-510, M-52, M-2377 |
| Paper | 2 | M-350, M-2377 |
| Specialty Materials | 1 | CR-901 |

| Process | Count | Current visible grades |
|---|---:|---|
| Chloride | 8 | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 |
| Sulfate | 5 | M-996, M-2196, M-108, M-52, M-2377 |
| Vapor-phase oxidation | 1 | CR-901 |

The source result remains 30 verified Application relations, 0 conflict and 54 no-public. M-2377 renders only in the five existing Application paths and Sulfate; its Specialty Materials relation remains `DO_NOT_RENDER`. Rubber remains evidence-only and creates no category, card, navigation item, URL, Page ID, keyword or child-page asset. M-996 and M-2196 remain equal-weight neutral relations; difference, ranking, superiority, equivalence, replacement and comparative selection rationale remain frozen. `NO_PUBLIC_MAPPING` is not rendered as unsuitable or not applicable.

## 4. State coverage

| Asset state | APP-000 body route behavior | Global Chrome RFQ |
|---|---|---|
| Desktop Full-route | Application CTA, Support Paths and revised Final RFQ visible | Fixed visible |
| Desktop Route-safe | Conditional APP-000 body routes close to 0px | Fixed visible |
| 390px Full-route | Full body CTA/support stack and revised Final RFQ | `Logo | RFQ | Menu`; fixed Footer RFQ |
| 390px Route-safe | Conditional body actions removed; content-driven closure | `Logo | RFQ | Menu`; fixed Footer RFQ |
| Global Chrome states | Desktop/Mobile Header, Menu, Footer, hover and focus references | Fixed visible in every public state |

## 5. Protected scope

Except for the exact copy delta in Section 2, V0.7 protects:

- the V0.6 relationship labels, counts, chips and display order;
- Inter typography, approved type sizes, colors, card system and module order;
- all other Buyer Clean copy and Buyer Questions;
- the same Logo source and dimensions;
- Desktop Header, Mobile `Logo | RFQ | Menu`, Mobile Menu and Deep Navy Footer;
- fixed Request a Quote behavior, hover and focus reference;
- APP-000 identity, `NO_PRIMARY_KEYWORD`, canonical direction and five child-page keyword owners;
- `site_scope=tio2-my` and the no-cross-site-fallback boundary.

## 6. V0.7 formal Manifest

| Asset | Actual dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.7.png` | 1440×6153 | 709018 | `A171FDB6B9ACDC5CCC11E2DC0AE23DA9767ADACAD34AE1F0C85179DB987F16B7` |
| `APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.7.png` | 1440×5137 | 584662 | `E56006DC8B80F064282E78993D6CE99D034DDFCFF6BF6B04AB65E81C59EA041C` |
| `APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.7.png` | 780×18782, representing 390×9391 logical | 1568732 | `BED6865E9BA6DE28FA42B441EF84EEC20CBDA131EDC4C0CC7A7BC9D32A07F23B` |
| `APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.7.png` | 780×15174, representing 390×7587 logical | 1276966 | `A7841003E88F90CFC6DCFB954627F536BC572A1DBB8A19683D5FC2D0F82FB578` |
| `APP-000_G5_GLOBAL_CHROME_STATES_V0.7.png` | 1600×1740 | 258489 | `44962D6D1B653C2E859FCE598EE9C8790A9CD357E29CB903BFE414D86EE7A581` |

Only these five PNGs constitute the V0.7 Manifest. V0.6, V0.5 and earlier relation-impact assets remain historical and are excluded from this Manifest.

## 7. Targeted visual QA

- Desktop Full-route Final RFQ now contains the retained heading, body and CTA only; the removed sentence is absent.
- 390px Full-route shows the same retained copy with natural wrapping, no clipping and no horizontal overflow.
- Both Full-route Final RFQ bands close with content-driven height and normal spacing after the button; the Footer follows without a blank placeholder.
- Route-safe Desktop and Mobile files are byte-identical to V0.6, proving no unrelated body change in those states.
- Header and Footer visual regions remain unchanged from V0.6 on all four complete pages; fixed RFQ remains visible.
- Original-detail review found no Final RFQ crop, overlap, button-after gap or Footer closure defect.

## 8. SEO, GEO and claim boundary

- APP-000 remains a `NO_PRIMARY_KEYWORD` Navigation hub and does not take ownership of child-page primary keywords.
- No Rubber entity, URL, `ItemList` entry, Schema relation or navigation item is introduced.
- Machine-readable relations may mirror only visible neutral PRODUCT V0.3 relations.
- No `suitableFor`, recommendation, equivalence, replacement, comparison, Offer, availability or guarantee assertion is authorized.
- Removing the qualification sentence does not authorize any positive counterclaim.

## 9. Governance record

| Record | Status | Boundary |
|---|---|---|
| `APP-000-G5-V07-RFQ-COPY-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.8` | V0.7 preserved; Final RFQ copy delta remains active in V0.8 |
| `APP-000-G5-V06-UNIFIED-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.7` | V0.6 preserved as historical unified evidence |
| `APP-000-PRODUCT-V03-REL-01` | `INCORPORATED_INTO_V0.6_AND_RETAINED_IN_V0.7` | Relationship scope unchanged |
| `GHF-FIXED-RFQ-APP-01` | `APPROVED / CLOSED` | Approved V0.5 fixed-RFQ Chrome remains protected |
| Gate 1–4 | Existing states unchanged | No approval inferred |
| Gate 5 / `G5-01` | Existing state unchanged; `G5-01=OPEN` | Current V0.8 requires project-control and user review |
| Page lifecycle | `DESIGN_IN_REVIEW` | No transition |
| Gate 6/7 | Not started / not authorized | No handoff or development |
| Application child pages | Not started | No child-page artifact |

The local checks support project-control review only. They are not Gate 5 approval and do not authorize development, delivery or publication.
