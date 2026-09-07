# APP-000 Applications Hub — Full Visual Design V0.5

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Version | `V0.5` |
| Date | 2026-08-30 |
| Review ID | `GHF-FIXED-RFQ-APP-01` |
| Current status | `APPROVED / CLOSED` |
| Baseline role | `FORMAL_FIXED_RFQ_VISUAL_BASELINE` |
| User approval date | 2026-08-30 |

V0.5 is the fixed-RFQ Global Chrome revision required by `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`. It changes only Desktop Header, Mobile Header, Mobile Menu, Desktop/Mobile Footer, and the resulting canvas boundary. V0.4 remains preserved as the immediate body and Logo-correction baseline.

This package does not change APP-000 copy, module order, route-safe body logic, Applications page identity, keyword ownership, PRODUCT V0.2.1 relationships, SEO/GEO/Schema, Gate status, or development scope.

## 2. Authority and shared input

1. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` — `APPROVED_GLOBAL_CHROME_BASELINE`.
2. `docs/superpowers/plans/2026-08-30-global-fixed-rfq-visual-revision.md`, Task 7.
3. `pages/home/04_planning/07_global_header_footer_component_states_v0.2.md`.
4. `pages/home/04_planning/05_homepage_full_visual_design_v0.5.md`.
5. `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.2.png`.
6. `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.2.png`.
7. User-provided current shared-baseline status: `GHF-FIXED-RFQ-HOME-01=PROJECT_CONTROL_REVIEW_PASS / SHARED_FIXED_RFQ_BASELINE_FOR_TASKS_3_7`.
8. APP-000 V0.4 five-asset Manifest and `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv`.

## 3. Fixed Global Chrome contract

`RFQ_VISIBILITY = ALWAYS_VISIBLE`

| Surface | Full-route | Route-safe |
|---|---|---|
| Desktop Header | `Request a Quote` visible | `Request a Quote` visible |
| Mobile Header | `Logo | RFQ | Menu` | `Logo | RFQ | Menu` |
| Mobile Menu | Terminal `Request a Quote` item | Terminal `Request a Quote` item |
| Desktop Footer | Conversion / `Request a Quote` visible | Conversion / `Request a Quote` visible |
| Mobile Footer | Terminal `Request a Quote` visible | Terminal `Request a Quote` visible |

- Applications remains the current item through Bold + `CURRENT` + Teal structural indicator.
- Desktop Header stays 84px. Mobile Header stays 64px logical.
- Mobile RFQ, Menu, menu rows and terminal actions retain at least 44px logical targets.
- The approved `brand_logo_primary_horizontal` current visual PNG remains 180px Desktop Header/Footer, 120px Mobile Header and 128px Mobile Footer.
- Footer remains Deep Navy `#031B3A`; terminal action remains Accessible Teal `#007F77`.
- Current formal assets contain only fixed visible RFQ states. They provide no conditional, inactive, removed, placeholder, or substitute-route candidate.
- `RFQ_ROUTE_READY=false = RELEASE_BLOCKER` is an internal release rule only; it does not change public visual visibility.

## 4. Protected body proof

The V0.5 generator composites the protected V0.4 body pixels after rendering the new Chrome. Raw RGBA hashes and pixel counts match exactly.

| State | Protected rectangle | V0.4 RAW SHA-256 | V0.5 RAW SHA-256 | Differing pixels |
|---|---:|---|---|---:|
| Desktop Full-route | x=0, y=84, 1440×5639 | `10C5F44EEB384358B1F38000FE8B269A041929BB4A5FA0A5523C9F1C6D9AD403` | `10C5F44EEB384358B1F38000FE8B269A041929BB4A5FA0A5523C9F1C6D9AD403` | 0 |
| Desktop Route-safe | x=0, y=84, 1440×4583 | `8DEE662E6659F0D3E7B9FD741A54D51F48C80C1BEE1EC27787D84DA415D7BF2B` | `8DEE662E6659F0D3E7B9FD741A54D51F48C80C1BEE1EC27787D84DA415D7BF2B` | 0 |
| Mobile Full-route, 2× export | x=0, y=128, 780×17496 | `C21B756DEA073FD295468BF7EC2F557D76A46B704286E70E0BE2B9009FC0DA65` | `C21B756DEA073FD295468BF7EC2F557D76A46B704286E70E0BE2B9009FC0DA65` | 0 |
| Mobile Route-safe, 2× export | x=0, y=128, 780×13646 | `1C7068B21A18978DD04D7132CD51901C56D86501B4DFE6DB8EAE0DF6CABA66F7` | `1C7068B21A18978DD04D7132CD51901C56D86501B4DFE6DB8EAE0DF6CABA66F7` | 0 |

Mobile Route-safe increases by 80px logical only because the fixed terminal Footer action is now present. No body coordinate or body pixel changes.

## 5. Relationship and claim gates

- The sole product relationship input remains `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv`.
- Exactly 25 verified Application relations remain: Coatings 7, Plastics 7, Masterbatch 6, Printing Inks 3, Paper 1, Specialty Materials 1.
- Exactly 13 verified Process relations remain: Chloride 8, Sulfate 4, CR-901 Vapor-phase oxidation 1.
- M-2377 remains absent from public Application and Process collections under `R-M2377-TDS=OPEN_HARD_GATE`.
- M-996 and M-2196 remain equal neutral Coatings/Sulfate relations. Difference, ranking, selection reason, equivalence and comparison positioning remain frozen.
- `NO_PUBLIC_MAPPING` rows remain non-rendering inputs and are not rewritten as technical unsuitability.
- Full-route/route-safe still control only protected body routes and actions; they no longer control Global Chrome RFQ.

## 6. V0.5 formal Manifest

| Asset | Actual dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.5.png` | 1440×6133 | 714398 | `DD82F467AC278058A1922136ABF4E574E94136CEB9949BFA7DB8B1A748400011` |
| `APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.5.png` | 1440×5077 | 574773 | `CD106432CE8AD182A9E563CC00413DC7B6071E91ED91AADC91B724E1E708E128` |
| `APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.5.png` | 780×18864, representing 390×9432 logical | 1583152 | `C3E70EB8F0D0489455011530057366EC0A5678EC7F72306D1EBC3D7029A1CA99` |
| `APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.5.png` | 780×15014, representing 390×7507 logical | 1258874 | `5C929AE423A61D30059A1D58E8E1370ADAA66CE427165D7D15CB2835E16D44F8` |
| `APP-000_G5_GLOBAL_CHROME_STATES_V0.5.png` | 1600×1740 | 248591 | `65EA436635E0D2C55C18AED31D55A6019972F3D41E370B5246C5AF225D15D876` |

V0.4 and earlier approved-review assets remain preserved and are excluded from this current V0.5 fixed-RFQ Manifest.

## 7. Visual and machine review

### 7.1 Logo region audit

All sampled logo regions contain non-background pixels:

| Regions | Counts |
|---|---|
| Desktop Full Header / Footer | 2608 / 2763 |
| Desktop Route-safe Header / Footer | 2608 / 2763 |
| Mobile Full Header / Footer | 4549 / 5462 |
| Mobile Route-safe Header / Footer | 4549 / 5462 |
| State board two Desktop Headers | 2608 / 2608 |
| State board Mobile Header / Mobile Footer / Desktop Footer | 1032 / 1364 / 2763 |

### 7.2 Fixed RFQ pixel audit

Accessible Teal pixels are present in every complete-page global terminal surface:

| State | Header | Footer |
|---|---:|---:|
| Desktop Full-route | 5863 | 6954 |
| Desktop Route-safe | 5863 | 6954 |
| Mobile Full-route | 9249 | 65574 |
| Mobile Route-safe | 9249 | 65574 |

### 7.3 Original-detail inspection

- Four complete-page top crops show visible Logo, Applications current state and terminal Header RFQ.
- Four complete-page bottom crops show visible Footer Logo, Conversion/terminal RFQ, copyright and complete Deep Navy closure.
- Both 390px states keep `Logo | RFQ | Menu` inside the 16–374px logical safe strip with no observed crop, overlap or horizontal overflow.
- The V0.5 state board shows Desktop fixed RFQ, route-safe fixed RFQ with 3px focus proof, Mobile Header/Menu, Mobile Footer, Desktop Footer and the internal release-blocker annotation.
- No public conditional or substitute RFQ state is present in the V0.5 state board.

## 8. SEO, GEO, accessibility and delivery boundary

- `NO_PRIMARY_KEYWORD`, canonical, title, description, Schema direction, GEO entities and five Application child-page keyword ownership remain unchanged.
- Visible Home text remains in Header and Footer navigation; Logo does not replace it.
- Current-state and focus treatments do not rely on color alone.
- Footer adds no Legal, Privacy, Contact substitute, internal anchor, invented page or cross-site fallback.
- Future implementation must use `site_scope=tio2-my`, but this package contains no WordPress, Next.js, CMS, test, deployment or publication code.
- `/request-a-quote/` readiness is not asserted by this visual package. Failure of the route/form health gate blocks release without changing public visibility.

## 9. Governance record

| Record | Status | Boundary |
|---|---|---|
| `GHF-FIXED-RFQ-APP-01` | `APPROVED / CLOSED` | User approved the unified Home and 03–07 fixed-RFQ visual package on 2026-08-30; V0.5 is the formal APP-000 fixed-RFQ visual baseline |
| Gate 1–4 | Existing states unchanged | No approval inferred |
| Gate 5 / `G5-01` | Existing status unchanged; `G5-01=OPEN` | Fixed-RFQ review is separate from the page Gate |
| Page lifecycle | `DESIGN_IN_REVIEW` | No transition |
| Gate 6/7 | Not started / not authorized | No handoff or development |
| Application child pages | Not started | No child-page artifact |

Project control passed this five-asset Manifest, and the user approved the unified fixed-RFQ visual package on 2026-08-30. This closes only `GHF-FIXED-RFQ-APP-01`; it does not advance Gate 6/7, authorize an Application child page, or authorize development, handoff, deployment or publication.
