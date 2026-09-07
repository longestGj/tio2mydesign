# APP-000 Applications Hub — Full Visual Design V0.4

## 1. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Page type | Navigation hub |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Version | `V0.4` |
| Date | 2026-08-30 |
| Change scope | Task 7 global Header / Mobile Menu / Footer replacement only |
| Current package state | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Review ID | `GHF-APP-01` |
| Review status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| User approval date | Blank |

V0.4 is a global-chrome-only revision of the project-control-reviewed V0.3 APP-000 body. It does not change page copy, module order, keyword ownership, the PRODUCT V0.2.1 relationship baseline, SEO/GEO/Schema rules, route contracts, frozen claims, or any Gate status. It does not authorize Gate 6/7, an Application child page, or development.

## 2. Approved inputs

1. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.1.md`.
2. `docs/superpowers/plans/2026-08-30-global-header-footer-visual-revision.md`, Task 7.
3. `pages/home/04_planning/06_global_header_footer_component_states_v0.1.md`.
4. `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.1.png`.
5. `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.1.png`.
6. APP-000 V0.3 Buyer Clean full-page body assets and their existing Gate 5 governance record.
7. `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` and its V0.2.1 audits.

## 3. Delta contract

### 3.1 Header

- The visible logo is `brand_logo_primary_horizontal`, using the same current visual PNG approved by Task 2: `brand/visual/ChatGPT Image 2026年8月29日 09_37_10 (1).png`.
- Desktop logo width is 180px; Mobile logo width is 120px.
- Desktop keeps the visible order `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote` when the RFQ route is ON.
- `Applications` is the current item and retains its current-state label and underline.
- Mobile order is fixed as `Logo | RFQ | Menu`; the Header CTA label is exactly `RFQ`.
- When RFQ is OFF, the RFQ control and its slot collapse; Menu remains aligned to the far right.

### 3.2 Mobile Menu

- Menu order remains `Home | Markets | Products | Applications | Documents | Resources | About`.
- `Applications` is visibly current.
- Full-route shows one `Request a Quote` menu CTA; route-safe removes the CTA and its space.
- No Contact, Legal, Privacy, unregistered route, or cross-site fallback is introduced.

### 3.3 Footer

- Footer uses the same Symbol + Wordmark composition as the Header. The deep-navy footer uses a white treatment derived from the same approved logo raster; it is not a different logo.
- Explore contains Home, Markets, Products, Applications. Information contains Documents, Resources, About.
- Full-route contains the Conversion CTA; route-safe removes the Conversion column/CTA and reflows the remaining content without an empty placeholder.
- No new public company, origin, manufacturing, stock, lead-time, certification, or route claim is introduced.

## 4. Preserved APP-000 body and evidence boundaries

- The four V0.4 full-page bodies are copied pixel-for-pixel from the corresponding V0.3 body regions after excluding the old Header and Footer.
- Exact body pixel differences are zero in all four states:

| State | Compared body height | Differing pixels |
|---|---:|---:|
| Desktop Full-route | 5639px | 0 |
| Desktop Route-safe | 4583px | 0 |
| 390px Full-route, exported at 2× | 17496px | 0 |
| 390px Route-safe, exported at 2× | 13646px | 0 |

- PRODUCT V0.2.1 remains the sole relationship source: 25 verified Application relationships and 13 verified Process relationships.
- Application collections remain Coatings 7, Plastics 7, Masterbatch 6, Printing Inks 3, Paper 1, Specialty Materials 1.
- Process collections remain Chloride 8, Sulfate 4, and CR-901 Vapor-phase oxidation 1.
- M-2377 Application/Process remains hidden under `R-M2377-TDS=OPEN_HARD_GATE`.
- M-996 and M-2196 remain equal neutral Coatings/Sulfate relationships; comparison, ranking, difference, selection reason, equivalence, and performance positioning remain frozen.
- `NO_PUBLIC_MAPPING` is not rendered and is not rewritten as unsuitability.
- APP-000 remains a classification and selection path and does not take ownership of the five Application child-page primary keywords.

## 5. V0.4 asset manifest

Only the following five V0.4 PNG files are current review assets for this global-chrome delta. V0.3 remains preserved as the historical approved-review body baseline.

| Asset | Actual dimensions | SHA-256 |
|---|---:|---|
| `APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.4.png` | 1440×6133 | `DD82F467AC278058A1922136ABF4E574E94136CEB9949BFA7DB8B1A748400011` |
| `APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.4.png` | 1440×5077 | `653EBEE41CD06AE2965D91FFF2732611351F7137745A663CC7E94D6D2F5B567C` |
| `APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.4.png` | 780×18864, representing 390×9432 logical pixels | `C3E70EB8F0D0489455011530057366EC0A5678EC7F72306D1EBC3D7029A1CA99` |
| `APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.4.png` | 780×14854, representing 390×7427 logical pixels | `A8A13D8420282196FAD762CA8CD9830A8BF5145DBEF08551A23AB0D02C8CF782` |
| `APP-000_G5_GLOBAL_CHROME_STATES_V0.4.png` | 1600×2800 | `4C556C28D1FF4CAFAFA3FE7EA346607A9456618E83E51B93E85DAEE0832A0AC1` |

The rejected first V0.4 export set with missing logos is retained, not deleted, under `99_workspace/APP-000_task7_ghf_app_01_no_logo_return/`, prefixed `REVIEW_RETURN_NO_LOGO_`, and excluded from this Manifest. No V0.3 asset was overwritten.

## 6. Logo render correction and machine audit

### 6.1 Root cause and correction

The first V0.4 export embedded the approved PNG inside the SVG composition. The renderer dropped the nested raster layer, leaving the logo slots visually blank. The correction composites the same approved logo PNG on the final raster canvas after the SVG page is rendered. This prevents loss through nested-image handling, preserves transparency, and places the logo above background layers.

### 6.2 Non-background pixel checks

Every required Header/Footer logo region was sampled against its local white or deep-navy background. All counts are greater than zero.

| Region | Non-background pixels |
|---|---:|
| Desktop Full Header / Footer | 2608 / 2763 |
| Desktop Route-safe Header / Footer | 2608 / 2763 |
| Mobile Full Header / Footer | 4549 / 5462 |
| Mobile Route-safe Header / Footer | 4549 / 5462 |
| States board Desktop Header ON / OFF | 2608 / 2608 |
| States board Mobile Header ON / OFF | 1032 / 1032 |
| States board Mobile Footer ON / OFF | 1364 / 1364 |
| States board Desktop Footer ON / OFF | 2763 / 2763 |

## 7. Original-detail visual review

| Asset/state | Result |
|---|---|
| Desktop Full-route top and bottom | Logo visible; Applications current; Request a Quote present; footer logo and Conversion present; no crop or overlap observed |
| Desktop Route-safe top and bottom | Logo visible; RFQ slot collapsed; route-safe footer reflowed; no empty Conversion placeholder |
| Mobile Full-route top and bottom | Visible 120px logo; order `Logo | RFQ | Menu`; footer logo and CTA visible; no horizontal overflow or clipping observed |
| Mobile Route-safe top and bottom | Visible 120px logo; only `Logo | Menu`; Footer CTA removed with normal closure |
| Global Chrome states board | Desktop/Mobile Header, Menu, and Footer ON/OFF states all show the approved logo; no lost transparency, crop, or layer-order failure observed |

The original-detail review used fresh crops regenerated from the current Manifest assets after the final logo correction. The 390px logical content width, RFQ state behavior, visible routes, and body typography remain unchanged.

## 8. SEO, GEO, accessibility, and development boundary

- Title, description, canonical, `NO_PRIMARY_KEYWORD`, Schema/GEO entity rules, and internal-link ownership remain unchanged.
- Visible Home text remains present; logo does not replace it.
- Header controls retain 44px targets and Mobile order; current-page state is not conveyed by color alone in the design state board.
- Footer and Menu route visibility remains conditional; unavailable targets do not produce dead links or empty slots.
- Future implementation must remain isolated to `site_scope=tio2-my` with no cross-site fallback, but this project produces no implementation code.
- No WordPress, Next.js, CMS, test, deployment, or publication asset is included.

## 9. Review and Gate record

| Record | Status | Note |
|---|---|---|
| `GHF-APP-01` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Project control passed the Logo-only correction; user approval is still blank and the item is not CLOSED |
| Gate 1–4 | Existing `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` remains unchanged | No user approval is inferred |
| Gate 5 body baseline | Existing `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` remains unchanged | `G5-01` stays OPEN; V0.4 is a separate global-chrome delta under review |
| Page lifecycle | `DESIGN_IN_REVIEW` | No transition |
| Gate 6/7 | Not started / not authorized | No handoff or development |
| Application child pages | Not started | No child-page artifact created |

Project control has independently reviewed the Logo correction. This result is not user approval, does not close `GHF-APP-01`, and does not approve or advance any Gate.
