# APP-000 Applications Hub — Full Visual Design V0.8

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Version | `V0.8` |
| Date | 2026-08-31 |
| Review ID | `APP-000-G5-V08-PROCESS-LAYOUT-01` |
| Current status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Baseline role | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.9` |
| User approval date | Not approved for Gate 5 |

V0.8 inherits V0.7, retains the user's approved Final RFQ copy removal and revises the Process-classification layout. V0.9 now supersedes it as the current review candidate after the user's explicit instruction to insert the complete 14-grade directory content; V0.8 remains preserved as historical evidence.

V0.7 remains preserved as historical evidence and is not overwritten. This revision does not advance Gate 5, Gate 6 or Gate 7 and does not authorize Application child pages, handoff, development, deployment or publication.

## 2. Controlled layout change from V0.7

`APP-000_PROCESS_CLASSIFICATION_LAYOUT_DELTA_V0.1.md` governs the change.

The previous equal-height three-card row is replaced by grouped row panels:

- Desktop: `Chloride — 8` in the left column; `Sulfate — 5` and `Vapor-phase oxidation — 1` stacked independently in the right column.
- 390px: the three panels stack in Process order.
- Every grade occupies a compact bordered row inside its Process group.
- Group and row heights are driven by content, removing the blank area previously visible below the shorter Process lists.

The user-supplied reference contributes only this layout principle. Its content, grade descriptions and `View Grade` actions are not copied or treated as authority.

## 3. Relationship baseline

The sole current relationship source remains `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and its three V0.3 audits.

| Process | Count | Current visible grades |
|---|---:|---|
| Chloride | 8 | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 |
| Sulfate | 5 | M-996, M-2196, M-108, M-52, M-2377 |
| Vapor-phase oxidation | 1 | CR-901 |

The Application collections remain Coatings 8, Plastics 8, Masterbatch 7, Printing Inks 4, Paper 2 and Specialty Materials 1. The source result remains 30 verified Application relations, 0 conflict and 54 no-public.

M-2377 renders only in the five existing Application paths and Sulfate; its Specialty Materials relation remains `DO_NOT_RENDER`. Rubber remains evidence-only and creates no category, card, navigation item, URL, Page ID, keyword or child-page asset. M-996 and M-2196 retain equal-weight neutral treatment and the comparison freeze. `NO_PUBLIC_MAPPING` is not rendered as unsuitable or not applicable.

## 4. State coverage

| Asset state | Process layout | Global Chrome RFQ |
|---|---|---|
| Desktop Full-route | Two-column grouped row panels | Fixed visible |
| Desktop Route-safe | Same Process presentation; conditional APP body actions remain absent | Fixed visible |
| 390px Full-route | Three content-driven stacked panels | `Logo | RFQ | Menu`; fixed Footer RFQ |
| 390px Route-safe | Same stacked panels; conditional APP body actions remain absent | `Logo | RFQ | Menu`; fixed Footer RFQ |
| Global Chrome states | No component change; V0.8 review title only | Fixed visible in every public state |

## 5. Protected scope

Except for the Process module layout, V0.8 preserves V0.7:

- exact page copy, including the removed Final RFQ qualification remaining absent;
- Application relationship labels, counts, chips and display order;
- Process heading, introduction, grades, counts and order;
- Inter typography, approved body sizes, colors and overall module sequence;
- approved Logo, Desktop Header, Mobile `Logo | RFQ | Menu`, Mobile Menu and Deep Navy Footer;
- fixed Request a Quote behavior, hover and focus reference;
- APP-000 identity, `NO_PRIMARY_KEYWORD`, canonical direction and five child-page keyword owners;
- `site_scope=tio2-my` and no-cross-site-fallback boundary.

## 6. V0.8 formal Manifest

| Asset | Actual dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.8.png` | 1440×6246 | 733179 | `44F07F444117A2CD5551112E5E4EBE95C390C8B0BCB8263579800E9ABC50B398` |
| `APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.8.png` | 1440×5230 | 607135 | `53775362EF4DE40A44CD708AA11D8E7422BE68C9361A27AB4E4D42998F6D3787` |
| `APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.8.png` | 780×19136, representing 390×9568 logical | 1625327 | `BB5AE35C866EDAD79C393A4D1024D8E281CDDF455DA9E975B5B7D7028EC71AD2` |
| `APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.8.png` | 780×15528, representing 390×7764 logical | 1333907 | `BD79C2BCEB691E00E4D2F061EC954B32B1F783052D80DA2007A075A8F262860B` |
| `APP-000_G5_GLOBAL_CHROME_STATES_V0.8.png` | 1600×1740 | 259247 | `71340FAEAA03B6DA04FA739E63704A1F1CCB3D2C4281FBDA057B1B5774DD8228` |

Only these five PNGs constitute the V0.8 Manifest. V0.7 and earlier assets remain historical and are excluded from this Manifest.

## 7. Visual QA

### Desktop

- The two columns have equal width, but the two right-side panels close independently by content.
- Chloride contains 8 rows; Sulfate contains 5; Vapor-phase oxidation contains 1.
- No empty equal-height footer remains below Sulfate or Vapor-phase oxidation.
- Long `Vapor-phase oxidation — 1` text fits without clipping.
- The next module starts after normal section spacing with no overlap.

### 390px

- All panels and nested rows remain inside the 16–374px logical safe strip.
- Grade names and 13px neutral row labels remain readable without horizontal overflow.
- M-2377 and CR-901 rows are complete and uncropped.
- Each panel closes after its last row; no desktop-height placeholder is retained.
- The following Buyer Clean module begins with normal terminal spacing.

### Protected-region checks

- All four V0.7→V0.8 Header regions are pixel-identical.
- All four V0.7→V0.8 Footer regions are pixel-identical after bottom alignment.
- The page prefix before the revised Process module is unchanged.
- Final RFQ still contains only the retained heading, body and CTA; the removed qualification does not return.

## 8. SEO, GEO and claim boundary

- APP-000 remains a `NO_PRIMARY_KEYWORD` Navigation hub and does not take child-page primary keywords.
- The visual rows represent only current neutral Grade–Process relations.
- No copied `View Grade` link, Offer, availability, suitability, recommendation, equivalence, ranking, comparison or performance claim is introduced.
- No Rubber entity, URL, Schema entry or navigation item is introduced.
- Machine-readable relations may mirror only the visible neutral PRODUCT V0.3 relations.

## 9. Governance record

| Record | Status | Boundary |
|---|---|---|
| `APP-000-G5-V08-PROCESS-LAYOUT-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.9` | V0.8 preserved as historical evidence |
| `APP-000-G5-V07-RFQ-COPY-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.8` | V0.7 preserved; its approved copy delta is retained |
| `APP-000-PRODUCT-V03-REL-01` | `RETAINED_IN_V0.8` | Relationship scope unchanged |
| `GHF-FIXED-RFQ-APP-01` | `APPROVED / CLOSED` | Fixed-RFQ Chrome remains protected |
| Gate 1–4 | Existing states unchanged | No approval inferred |
| Gate 5 / `G5-01` | Existing state unchanged; `G5-01=OPEN` | Current V0.9 requires project-control and user review |
| Page lifecycle | `DESIGN_IN_REVIEW` | No transition |
| Gate 6/7 | Not started / not authorized | No handoff or development |
| Application child pages | Not started | No child-page artifact |

Local visual checks support review only. They are not Gate 5 approval and do not authorize development, delivery or publication.
