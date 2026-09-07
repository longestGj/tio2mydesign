# APP-000 Full Visual Design V0.3

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Gate | Gate 5 — targeted full-visual revision only |
| Version / date | V0.3 / 2026-08-30 |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Project-control review result | `APP-000-G5-PCR-02 = PASS_PENDING_USER_APPROVAL` |
| Content input | `../APP-000_CONTENT_ARCHITECTURE_V0.1.md`, especially Section 5 exact Buyer Clean copy |
| Visual contract | `../visual-directions/APP-000_VISUAL_DIRECTION_V0.1.md`, especially the Inter hierarchy and typography scale |
| Relationship source | PRODUCT V0.2.1 `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Upstream Gate status | Gate 1–4: `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not closed and not user-approved |
| Review owner | Project control and quality review; user final approval |
| Explicitly excluded | Gate 6/7, five Application child pages, code, CMS, testing, development, deployment, publishing and `D:\16Wordpress_nextjs` |

`GATE 5 PROJECT-CONTROL REVIEW PASS / PENDING USER APPROVAL / NOT CLOSED / NOT FOR DEVELOPMENT`

## 1. Current Review Manifest

Only the following six V0.3 assets are current review assets. V0.1 and V0.2 rasters are retained in their respective `99_workspace/APP-000_gate5_superseded_v0.*/` directories as superseded history and are not part of this manifest.

| Asset | Review role | True canvas / state | Font | Status |
|---|---|---|---|---|
| `assets/APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.3.png` | Buyer Clean complete Desktop | 1440×5823; Full-route | Inter | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.3.png` | Buyer Clean reverse Desktop | 1440×4767; Route-safe | Inter | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.3.png` | Buyer Clean complete 390px route-safe | 780×14010, explicit 2× | Inter | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.3.png` | Buyer Clean reverse 390px full-route | 780×17860, explicit 2× | Inter | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/APP-000_G5_BUYER_CLEAN_COMPONENT_STATES_V0.3.png` | Public component-state proof | 1600×1200 | Inter | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/APP-000_G5_INTERNAL_REVIEW_OVERLAY_V0.3.png` | Non-public revision/relationship proof | 1600×1100; `NOT_BUYER_FACING` | Inter via shared renderer | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

Font source: the approved project asset `D:\23MySec\99_workspace\PRODUCT-000_gate5_render_inputs\Inter-Variable.ttf`, licensed by `Inter-OFL.txt` in the same directory. The V0.3 renderer generated temporary static Regular and ExtraBold instances under `99_workspace/APP-000_gate5_visual_builder/fonts/` solely to make the selected Inter weights explicit and reproducible in raster output. These temporary instances are render inputs, not public page assets.

## 2. Four Complete Page States

### 2.1 Desktop Full-route

![APP-000 Desktop Full-route Buyer Clean V0.3](D:/23MySec/pages/applications/04_planning/visual-designs/assets/APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.3.png)

Proves all 25 neutral Application relationships, all 13 explicit Process classifications, five qualified child Application CTAs plus CR-901, Support 3, complete Buyer Questions, full RFQ qualification and Footer closure.

### 2.2 Desktop Route-safe

![APP-000 Desktop Route-safe Buyer Clean V0.3](D:/23MySec/pages/applications/04_planning/visual-designs/assets/APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.3.png)

Proves that Header/Hero RFQ, child CTAs, Support and Final RFQ close to zero height together. Buyer Questions flows directly into Footer with no disabled control, empty footer, route-status wording or artificial blank band.

### 2.3 390px Route-safe

![APP-000 390px Route-safe Buyer Clean V0.3](D:/23MySec/pages/applications/04_planning/visual-designs/assets/APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.3.png)

Proves the full Gate 2 long copy at 390px, Mobile 16px normal body/answer text, 13px count labels, content-driven Application-card height and 30px logical bottom spacing after the final chip. No empty CTA footer or route placeholder exists.

### 2.4 390px Full-route

![APP-000 390px Full-route Buyer Clean V0.3](D:/23MySec/pages/applications/04_planning/visual-designs/assets/APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.3.png)

Proves Header/Hero RFQ, six collection actions, Support, Buyer Questions, Final RFQ and Footer as one complete mobile stack. Buttons are followed by 24–32px logical spacing rather than fixed blank bands.

## 3. State Boards

![APP-000 Buyer Clean Component States V0.3](D:/23MySec/pages/applications/04_planning/visual-designs/assets/APP-000_G5_BUYER_CLEAN_COMPONENT_STATES_V0.3.png)

The public board uses actual Inter and demonstrates route-live and route-safe cards, 30px logical route-safe closure, equal M-996/M-2196 base relationships, dynamic accordion height and Mobile Menu Open.

![APP-000 Internal Review Overlay V0.3](D:/23MySec/pages/applications/04_planning/visual-designs/assets/APP-000_G5_INTERNAL_REVIEW_OVERLAY_V0.3.png)

The internal board is not Buyer Clean and must never be published. It records the targeted typography/font revision and the retained PRODUCT V0.2.1 relationship lock.

## 4. Typography Contract and Rendering Proof

| Role | Desktop | 390px | V0.3 behavior |
|---|---:|---:|---|
| Normal Buyer Clean body and expanded answers | 17–18px | 16px | Restored throughout Hero, Application intro/cards, Use Guide, Process intro, Checks, Support, Buyer Questions and RFQ |
| Count label | 14px | 13px | Restored on every Application collection |
| Eyebrow / utility label | 12px where specified | 12px where specified | Retained as a non-body utility style |
| Grade chip / Process row | 15px | 15px | Within approved 15–16px range |
| H1 | 56px | 36px | Gate 4 hierarchy retained |
| Card title | 24px | 22px | Gate 4 hierarchy retained |

All Buyer Clean text uses the actual Inter family. Regular and ExtraBold were registered separately and a render probe confirmed distinct raster output for the two weights. No Segoe UI or Arial fallback is used by the V0.3 Buyer Clean renderer.

Affected modules use content-derived vertical measurements. The revision does not shorten Gate 2 copy, reduce line-height to force fit, crop text or introduce fixed-height CTA placeholders.

## 5. Exact Copy and Relationship Locks

Gate 2 Section 5 remains the single Buyer Clean copy source. V0.3 changes typography and layout only; it does not change the Hero, Application intro, three Use Guide bodies, four distinct Buyer Clean Check bodies, Buyer Questions, three Support bodies or full RFQ qualification. Public Support copy contains no internal `route`, gate, workflow or approval-state wording.

| Collection | Exact visible grades |
|---|---|
| Coatings | M-350, M-510, M-896, M-996, M-2196, M-895, M-52 |
| Plastics | M-350, M-510, M-200, M-108, M-210, M-340, M-886 |
| Masterbatch | M-510, M-200, M-108, M-210, M-340, M-886 |
| Printing Inks | M-350, M-510, M-52 |
| Paper | M-350 |
| Specialty Materials | CR-901 |

Process lock remains Chloride 8, Sulfate 4 and CR-901 Vapor-phase oxidation 1. M-2377 renders no Application or Process relationship and remains blocked by `R-M2377-TDS=OPEN_HARD_GATE`. M-996 and M-2196 remain equally weighted Coatings/Sulfate base relationships with no difference, ranking or selection reason. `NO_PUBLIC_MAPPING` is not represented as unsuitable or not applicable.

## 6. Project-control Issue Response

| ID | Level | Current evidence | Status |
|---|---|---|---|
| G5-01 | BLOCKING | Gate 5 still requires explicit user final approval before any later Gate | `OPEN` |
| G5-02 | IMPORTANT | Exact Gate 2 mobile copy and long-line wrapping retained | `PROJECT_CONTROL_REVIEW_PASS` |
| G5-03 | IMPORTANT | Route-safe mobile cards remain content-driven; final chip to card bottom is 30px logical | `PROJECT_CONTROL_REVIEW_PASS` |
| G5-04 | BLOCKING | Desktop titles wrap and accordion items advance by measured content height; no crop/overlap in original-detail inspection | `PROJECT_CONTROL_REVIEW_PASS` |
| G5-05 | IMPORTANT | Buyer-facing Support and complete RFQ qualification retained; internal route language absent | `PROJECT_CONTROL_REVIEW_PASS` |
| G5-06 | IMPORTANT | Four reverse/full complete-page states retained in the current package | `PROJECT_CONTROL_REVIEW_PASS` |
| G5-07 | BLOCKING | Restored Desktop 17–18px and Mobile 16px normal body/answers plus count labels 14px/13px; rebuilt content-driven pages | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| G5-08 | IMPORTANT | Four Buyer Clean pages and public component board rebuilt with actual Inter; font source and true dimensions recorded | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

No G5 row is `CLOSED`. G5-01 remains `OPEN`; G5-07 and G5-08 are `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`. A project-control pass does not represent user approval.

## 7. Original-detail Verification

All six V0.3 assets were opened after final generation. Original-detail crops were also inspected for Desktop Hero/Application, Use Guide, Check/Support, Buyer Questions/RFQ and route-safe closure; and for both 390px page tops, card endings, Support, Buyer Questions, RFQ and Footer.

- [x] Desktop Full-route: Inter hierarchy, 17–18px body/answers and 14px counts are present; no title crop, accordion overlap, horizontal overflow or RFQ truncation.
- [x] Desktop Route-safe: conditional modules close to 0px; Footer follows Buyer Questions normally.
- [x] 390px Route-safe: 16px long copy wraps inside logical margins with no horizontal overflow.
- [x] 390px Route-safe: every Application card is content-driven and ends 30px after its final chip; no empty CTA footer.
- [x] 390px Full-route: child CTAs, Support, Buyer Questions and RFQ stack without clipping or post-button blank bands.
- [x] Buyer Clean component board: actual Inter is rendered and no text is clipped.
- [x] Internal overlay remains visibly separated from Buyer Clean and is marked non-public.

The above is a revision self-verification, not Gate 5 approval.

## 8. Governance and Open Gates

| Item | Status |
|---|---|
| `APP-000-G5-PCR-02` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; user approval date blank |
| Gate 1–4 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 5 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not closed |
| APP-R002 child URL/content/routes | OPEN |
| APP-R004 M-996/M-2196 comparison evidence | OPEN |
| R-M2377-TDS | `OPEN_HARD_GATE` |
| APP-R005 Support/RFQ routes | OPEN |
| Gate 6/7 | Not started and not authorized |

## 9. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial four-asset submission | Superseded for current review; source document retained |
| V0.2 | 2026-08-30 | Gate 5-only response to G5-02…G5-06; six assets and four complete page states | G5-02…G5-06 later received `PROJECT_CONTROL_REVIEW_PASS`; rasters superseded by V0.3 |
| V0.3 | 2026-08-30 | Gate 5-only response to G5-07/G5-08; restored approved body/count scale, actual Inter and content-driven four-page rerender | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not closed; user approval date blank |

Gate 5 stops here. Visual verification is not Gate approval. No Gate 6/7, child-page or development work may begin from this revision without later approval.
