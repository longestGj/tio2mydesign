# APP-000 Applications Hub — Full Visual Design V0.9

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Version | `V0.9` |
| Date | 2026-08-31 |
| Review ID | `APP-000-G5-V09-DIRECTORY-CONTENT-01` |
| Current status | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.10` |
| Baseline role | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.10` |
| User approval date | Not approved for Gate 5 |

V0.9 is preserved as the historical complete-directory candidate. The user's later Application-first review direction superseded it with V0.10, which removes the directory and restores a compact Process table.

V0.8 remains preserved as historical evidence. This revision does not advance Gate 5, Gate 6 or Gate 7 and does not authorize Application child pages, handoff, development, deployment or publication.

## 2. Controlled change from V0.8

`APP-000_PRODUCT_DIRECTORY_CONTENT_DELTA_V0.1.md` governs the revision.

The following V0.8 module is removed:

- `SEPARATE CLASSIFICATION`
- `Review Process Classification Separately`
- three Process-only grouped panels and repeated `PROCESS` labels

It is replaced by the complete directory:

- `COMPLETE PRODUCT DIRECTORY`
- `Browse All 14 Titanium Dioxide Grades`
- the approved directory intro and public navigation-category disambiguation;
- four content-driven groups containing all 14 grades;
- exact neutral PRODUCT-000 V0.12 descriptions;
- conditional `View Grade →` actions in Full-route only.

## 3. Directory content

| Group | Count | Grades |
|---|---:|---|
| Coatings Grades | 6 | M-350, M-510, M-896, M-996, M-2196, M-895 |
| Plastics & Masterbatch Grades | 5 | M-200, M-108, M-210, M-340, M-886 |
| Inks & Multi-Application Grades | 2 | M-52, M-2377 |
| Specialty Grade | 1 | CR-901 |

The row-description deck is inherited exactly from the approved PRODUCT-000 V0.12 baseline. It represents neutral identification facts, not recommendations or comparative selection reasons.

The underlying PRODUCT V0.3 result remains 30 verified Application relations, 0 conflict and 54 no-public; Process remains 8 Chloride, 5 Sulfate and 1 Vapor-phase oxidation. No relationship source changes in V0.9.

## 4. Responsive state coverage

| Asset state | Directory behavior | Global Chrome RFQ |
|---|---|---|
| Desktop Full-route | 2×2 editorial grid; complete descriptions and `View Grade →` | Fixed visible |
| Desktop Route-safe | Same groups/descriptions; actions omitted | Fixed visible |
| 390px Full-route | Four content-driven stacked panels; grade/action first line and full description below | `Logo | RFQ | Menu`; fixed Footer RFQ |
| 390px Route-safe | Same stacked panels; actions omitted without an empty slot | `Logo | RFQ | Menu`; fixed Footer RFQ |
| Global Chrome states | No component change; V0.9 review title only | Fixed visible in every public state |

## 5. Protected scope

Except for the directory replacement, V0.9 preserves V0.8:

- exact Application-card copy, counts, chips and order;
- Use Guide, Buyer Clean Check, Support Paths and Buyer Questions;
- the Final RFQ qualification remains removed;
- Inter typography, approved body sizes, colors and module sequence position;
- approved Logo, Desktop Header, Mobile `Logo | RFQ | Menu`, Mobile Menu and Deep Navy Footer;
- fixed Request a Quote behavior, hover and focus reference;
- APP-000 identity, `NO_PRIMARY_KEYWORD`, canonical direction and five child-page keyword owners;
- PRODUCT V0.3, M-2377 and M-996/M-2196 evidence boundaries;
- `site_scope=tio2-my` and no-cross-site-fallback boundary.

## 6. V0.9 formal Manifest

| Asset | Actual dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.9.png` | 1440×6559 | 834948 | `4CC88766EE7860754CAA9FC226362FDA9F00279592EBB8C718EFC9CB889C6BD8` |
| `APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.9.png` | 1440×5543 | 694551 | `6687CB31C312A8C98E8656E15A3D721A4BE642F37F6BE9EA4887163ECF31FFC6` |
| `APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.9.png` | 780×21181, representing 390×10590.5 logical | 1912416 | `5715986D25391055756A0FF58FC5ED5FD86276D08F20A1F8FB4E797994D2E4EC` |
| `APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.9.png` | 780×17573, representing 390×8786.5 logical | 1563120 | `7E9BE319B1231A1203F5A3EB497BE52EA7E09F8C145E35710A6EC8B346CE10CF` |
| `APP-000_G5_GLOBAL_CHROME_STATES_V0.9.png` | 1600×1740 | 258871 | `CE924BB565F9AB4DB460970600192198F14695774B7BB796AB22124890776834` |

Only these five PNGs constitute the V0.9 Manifest. V0.8 and earlier assets remain historical and are excluded from this Manifest.

## 7. Visual QA

### Desktop

- The four groups use a 2×2 content-driven grid; the second row begins below the taller first-row group.
- Coatings has 6 rows, Plastics & Masterbatch 5, Inks & Multi-Application 2 and Specialty 1.
- Every grade, complete description and Full-route action is visible without clipping or overlap.
- Shorter groups do not inherit the height of adjacent taller groups.
- The next Buyer Clean module begins after normal section closure.

### 390px

- Four panels remain inside the 16–374px logical safe strip.
- Grade name and Full-route action share the first line; complete descriptions wrap below.
- M-2377's two-line description and CR-901 remain complete.
- Panels close by their actual rows; no desktop equal-height placeholder remains.
- Route-safe removes actions without horizontal residue or an empty footer.

### Protected regions

- All four V0.8→V0.9 Header regions are pixel-identical.
- Both Desktop Footer regions are pixel-identical after bottom alignment.
- Mobile Footer component geometry, Logo, links, fixed RFQ and closure are unchanged and pass original-detail review. The enlarged directory changes the full SVG canvas phase, so the re-rasterized Mobile Footer is not represented as a byte-identical crop.
- The page prefix before the replaced module is unchanged.
- Final RFQ still contains only the retained heading, body and CTA.

## 8. SEO, GEO and claim boundary

- APP-000 remains `NO_PRIMARY_KEYWORD`; no keyword ownership is transferred from PRODUCT-000 or the five Application child pages.
- The duplicated directory is a user-directed supporting navigation module. Project control must review the cross-page cannibalization risk before Gate 5 approval.
- No new Page ID, URL, canonical, category, Rubber entity or Schema ownership is introduced.
- `View Grade →` routes only to the existing product-detail pages when the route is approved/live.
- No recommendation, suitability guarantee, ranking, comparison, equivalence, replacement, Offer, price or availability assertion is introduced.

## 9. Governance record

| Record | Status | Boundary |
|---|---|---|
| `APP-000-G5-V09-DIRECTORY-CONTENT-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.10` | Historical five-asset visual candidate; not approved |
| `APP-000-G5-V08-PROCESS-LAYOUT-01` | `SUPERSEDED_AS_CURRENT_REVIEW_CANDIDATE_BY_V0.9` | V0.8 preserved as historical evidence |
| `APP-000-G5-V07-RFQ-COPY-01` | `RETAINED_IN_V0.9` | Final RFQ copy delta remains active |
| `APP-000-PRODUCT-V03-REL-01` | `RETAINED_IN_V0.9` | Relationship authority unchanged |
| `GHF-FIXED-RFQ-APP-01` | `APPROVED / CLOSED` | Fixed-RFQ Chrome remains protected |
| Gate 1–4 | Existing states unchanged | No approval inferred |
| Gate 5 / `G5-01` | Existing state unchanged; `G5-01=OPEN` | V0.9 requires project-control and user review |
| Page lifecycle | `DESIGN_IN_REVIEW` | No transition |
| Gate 6/7 | Not started / not authorized | No handoff or development |
| Application child pages | Not started | No child-page artifact |

Local checks support review only. They are not Gate 5 approval and do not authorize development, delivery or publication.
