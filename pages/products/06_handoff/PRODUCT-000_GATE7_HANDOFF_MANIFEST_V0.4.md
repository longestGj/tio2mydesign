# PRODUCT-000 Gate 7 Handoff Manifest V0.4

## 1. Control

| Field | Value |
|---|---|
| Page ID | PRODUCT-000 |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Review ID | `PRODUCT-000-G7-PCR-04` |
| Package status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Current disposition | `HANDED_OFF` |
| Global Chrome authority | V0.5 authority consumed; `GHC-CURRENT-TEXT-REMOVAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 execution status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; `HANDED_OFF` |
| Gate 8 | `HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED` |
| External task | `01My首页开发`; thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Prepared date | 2026-08-31 |
| Site scope | `tio2-my` |

This manifest records the project-control-approved implementation-neutral package and its completed external handoff. Actual Gate 8 execution status is maintained by the D16 development task. This manifest does not authorize child pages, deployment, publication or indexing.

## 2. Gate 7 formal package

All paths are relative to `D:\23MySec`.

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.4.md` | 19561 | `106B67715E54E495F916A480C83928A651DD6CC0CE386C2B42230A8DB842AF0F` | Current complete Page Brief; lifecycle `HANDED_OFF` |
| `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.3.md` | 1860 | `23DF2AA0C4F1A4A6AF92868F0C6FC884D87A00626E24096F872779E584F390DE` | Approved relationship-only addendum incorporated into V0.4 |
| `pages/products/06_handoff/PRODUCT-000_GATE7_HANDOFF_PACKAGE_V0.3.md` | 12732 | `0E8BDBB542CB331786ABC161177DE656918796DDB82C8F85E6383B8212C1C3F6` | Approved and handed-off master contract |
| `pages/products/06_handoff/PRODUCT-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.3.md` | 17149 | `4B1C89D6A8F854903D6D64802A1EDDE2804D7B1A1C5D01FFC1F8ACF9302AC8D7` | Approved CMS, API and component mapping |
| `pages/products/06_handoff/PRODUCT-000_GATE7_SEO_GEO_SCHEMA_METADATA_V0.3.md` | 8466 | `E43F0890A4C387B1745A9B087BCED1717E9FCF80EC6D9146167233017E1A2919` | Approved SEO, GEO, Schema and route-safe metadata contract |
| `pages/products/06_handoff/PRODUCT-000_GATE7_RESPONSIVE_A11Y_INTERACTION_ACCEPTANCE_V0.3.md` | 9432 | `C7DBE02F284269AFC4CD8A4C8B272CD8BC8E18B0EDCB8E03824831557BC4D8D3` | Approved responsive, accessibility and interaction acceptance |
| `pages/products/06_handoff/PRODUCT-000_GATE7_SITE_SCOPE_ISOLATION_CONTRACT_V0.4.md` | 9643 | `380FC885CE84F1FC750FF5D905DD4103B23A82E865803BBAD83DA3787C45377B` | Approved `site_scope=tio2-my` isolation contract; Gate 9 verifies Process route-card states 2/1/0 |
| `pages/products/06_handoff/PRODUCT-000_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.3.md` | 9722 | `CC8097BEFE466C09E3C9C9B2DAF08B51360F6B4F038C0F91AB5C882A9253DD81` | Approved Hub/external ownership and Gate 8/9/10 acceptance |
| `pages/products/06_handoff/PRODUCT-000_GATE7_GLOBAL_CHROME_CURRENT_STATE_ACCEPTANCE_V0.1.md` | 7080 | `F1B1C37AED758AC8495245887951CB0AAD9CEADA426465E46E25AE8663D46C5E` | Approved V0.5 Global Chrome authority binding and Gate 8/9 current-state acceptance |

The hash of this manifest is deliberately not self-declared. The project-control submission records its final external hash.

`PRODUCT-000-G7-PCR-01` and `PRODUCT-000-G7-PCR-02` are historical `CONDITIONAL_RETURN / NOT_APPROVED` reviews. PCR-03 passed its three directed issues and was incorporated into PCR-04. `PRODUCT-000-G7-PCR-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`. Gate 7 V0.1/V0.2 files and less precise current-state phrases in earlier package files do not override the approved PCR-04 authority set.

## 3. Approved Gate 5 buyer-facing baseline

| File | Dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.13.md` | n/a | 27989 | `23D74EB4A8FF16BDFF1F1E2A8683AC0EE68A039F721D94B13977CF058839444E` | Approved specification |
| `pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_DESKTOP_BUYER_FACING_FINAL_V0.17.png` | 1440×5481 | 406703 | `F0CE195FE5583FB68A81A2BD0468F74B126F3A851E1E799055FC705BECD1C63B` | Approved desktop visual |
| `pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_MOBILE_390_BUYER_FACING_FINAL_V0.16.png` | 780×12867, 390px logical at 2× | 652118 | `27480B92700CDEB97EA41A1AB751E1D539F4D339FC58ED2967719A656869DE67` | Approved mobile visual |
| `pages/products/05_review/PRODUCT-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.2.md` | n/a | 4807 | `4E78A3894A77702132B0336B6730524870EFEDA094AB3C52778F91D76EB484AE` | Approved Gate 5 manifest |

Gate 7 must not revise, overwrite or reinterpret this visual baseline.

## 4. Product relationship baseline

| File | Bytes | SHA-256 | Authority |
|---|---:|---|---|
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | 61284 | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` | Current approved relation source: 84 rows, 30 verified, 0 conflict, 54 no-public; Process 8 Chloride, 5 Sulfate, 1 Vapor-phase oxidation |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md` | 4178 | `338F2D4F2083E2E56B00637A4771982D08BFA15C1283022D6A28D506F0DEDEDB` | Unified relation audit |
| `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md` | 2350 | `ED17610571BCEDABADC3EFF103E7DB99978D9BCA78971BCE2655D1DDC8500AF8` | Gate 1 evidence delta |
| `pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md` | 2012 | `900ACDC97767910139B3478DAD69DB9A734B933F8B2BAF9D8A8955B2CDF05A78` | PRODUCT-000 relation dependency delta |

Mandatory data boundaries:

- M-2377 may be mapped neutrally to Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate. Specialty Materials and Rubber must not render.
- Rubber is evidence-only and must not become a taxonomy, page, route, URL, keyword or filter.
- M-996 and M-2196 individual facts may render only from their own approved records. Comparison, ranking, superiority, equivalence, replacement and selection-reason claims remain frozen.
- `NO_PUBLIC_MAPPING` means no public mapping. It must not be rewritten as “not applicable”.

## 5. Gate 6 authority

| File | Bytes | SHA-256 | Coverage |
|---|---:|---|---|
| `pages/products/05_review/PRODUCT-000_GATE6_AUDIT_AND_ACCEPTANCE_V0.2.md` | 16820 | `AF184667CDFF8E716CD50701F0456159E0B23C35D15356E2708D40D0D9D48E36` | Historical Gate 6 coverage for unchanged scope |
| `pages/products/05_review/PRODUCT-000_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` | 8575 | `1618C78FE831DC8C4932C65B76E4130753F97CA0A741B9F5548FA59D08066C43` | Historical Gate 6 review record |
| `pages/products/05_review/PRODUCT-000_GATE6_TDS_DIRECTORY_IMPACT_AUDIT_V0.1.md` | 16659 | `1BD5CF8DCB75B31CA6905FBEE5A72CABFFD90B614A04DF147A2539310F4FB3A8` | Approved targeted audit for the 14 directory summaries |
| `pages/products/05_review/PRODUCT-000_GATE6_CURRENT_BASELINE_MANIFEST_V0.1.md` | 6178 | `A1B946003ED0F6BB867C34E36633A5D59779DB5FA4469653AE7BE5F4181E950A` | Current combined Gate 6 baseline |
| `pages/products/04_planning/PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.2.md` | 13572 | `4C9AC952DC33DFAAC30475FEF8BEE3985A4BD112EA5BCCBB5AA7C79343B1E232` | SEO/GEO/Schema unchanged-scope baseline |
| `pages/products/04_planning/PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.3.md` | 5280 | `053F8D4FE0C4D5A0DD21AECD38131A78B6A4D6FD32EEB3670CE4B6CDF585AF45` | Directory-summary delta contract |

`PRODUCT-G6-TDS-I01` remains `ACCEPTED_SOURCE_LIMITATION / NON_BLOCKING_FOR_GATE_7`: the project repository does not contain fourteen complete TDS files. Only the exact user-approved directory strings may be implemented. No numerical value, standard, guarantee, recommendation, comparison or cross-page technical claim may be inferred.

`PRODUCT-G6-TDS-I02` is a Gate 7 acceptance contract and Gate 9 QA item: each visible directory summary and any optional Product Schema `description` must derive from the single server-side `grade_directory[].summary` value and match character-for-character. Provenance fields are internal and must not enter Buyer Clean output.

## 6. Global Chrome current-state authority

| File | Bytes | SHA-256 | Status / role |
|---|---:|---|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 7235 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; formal Global Chrome authority |
| `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` | 3682 | `2214BF1BCBE7646E8727A8E75E5E2A1552047E838D861891D0441B4895401B94` | Approved component-state and semantic-test reference |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` | 3237 | `EA3CCC7D90FD6EBB28BE562C9FABFDD4663D360AA18E66590A6297FB14F697B7` | Approved PRODUCT-000 → Products cross-page binding |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.2.md` | 2586 | `B12C92F8CC87B1F7DBCAFECA6BAE2D29D2C4883BF52B751388FCBB8EA63FB54E` | Project-control closure record |

The controlling PRODUCT-000 acceptance is `PRODUCT-000_GATE7_GLOBAL_CHROME_CURRENT_STATE_ACCEPTANCE_V0.1.md`. It requires Desktop Bold + 3px Teal underline, Mobile Bold + 4px Teal left marker, buyer-visible `CURRENT` count 0 and surface-scoped `aria-current="page"`. At an active viewport, exactly one primary-navigation surface and one current link enter the accessibility tree. Gate 5 PNGs remain immutable history; their old visible-label pixels are not production current-state authority. Page body, SEO/GEO, PRODUCT V0.3 and all unrelated Gate 5 content remain unchanged.

## 7. Production SVG Logo baseline

### 7.1 Governance files

| File | Bytes | SHA-256 |
|---|---:|---|
| `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | 8090 | `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894` |
| `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` | 2589 | `E2AADC1ADBEF3CF1DAAF5345197352D15C9EDBB6A388DBE9C56F83C15670BF46` |
| `docs/architecture/GLOBAL_LOGO_CROSS_PAGE_REGISTRY_V1.0.md` | 2473 | `8AB997CA706FDC79A076037E7106CB612E3C98D2D1D48D1110FA2143DCFD4CC1` |

### 7.2 Asset keys

| Asset key | Approved source path | Bytes | SHA-256 |
|---|---|---:|---|
| `brand_logo_primary_horizontal` | `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg` | 4342 | `EEED3A758E7AE1B847238D1C88E86EEE7A8E67B863969AF4D286747E9A72487C` |
| `brand_logo_reverse_monochrome` | `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg` | 2725 | `7CFAEAFA02AC8469A006C9489DB2F92B15B2621E4151B04EFE1B30FC734C1B5E` |
| `brand_symbol_primary` | `brand/logo/candidates/v0.1/tio2-malaysia-symbol-v0.1.svg` | 2510 | `9FD1FAFAFAD4BC6FEF0C05F499C27BAF1051EEF084D1B834B1061CAF3B8B85A0` |
| `brand_favicon_safe` | `brand/logo/candidates/v0.1/tio2-malaysia-favicon-safe-v0.1.svg` | 1107 | `F1D1B97FF66211410A50279EED16414B5A6E888C27C11419E41265168D08692C` |

The Gate 5 PNGs remain visual evidence only. They must not be treated as production Logo files.

## 8. Route ownership and release state

The package binds stable Page IDs and route keys but does not declare any destination live. Project control handed the authority set to `01My首页开发`; Gate 8 is authorized for the `/products/` Hub only. It does not implement or authorize RFQ, Grade, Process, Applications, Documents or Markets targets; those remain external dependencies owned by their own tasks. Actual development progress is maintained by the D16 task. Gate 9 verifies target readiness, Hub resolver behavior, status/redirect behavior, Canonical, Schema, scope isolation, form integration, accessibility and viewport behavior.

The following remain open acceptance items:

- External Grade, Process, Applications, Markets, Documents and RFQ route/page readiness.
- RFQ form readiness while all Global Chrome RFQ surfaces remain visible.
- Hub readiness-resolver consumption, conditional cards/links and fail-closed behavior.
- Process 2/1/0 counts only Chloride/Sulfate cards; parent heading/intro and CR-901 row remain in every state, while the row action depends on external `GRADE-CR901` readiness.
- robots and sitemap release state.
- runtime `site_scope=tio2-my` isolation, cache/analytics partitioning and no cross-scope fallback.
- runtime keyboard, focus, menu, FAQ, 44px touch-target and 390px overflow verification.
- Global Chrome current-state runtime acceptance: visible `CURRENT` = 0; Desktop and Mobile structural markers; one `aria-current="page"` per mapped surface; one accessible navigation surface/current link at the active viewport; inactive surface excluded from accessibility tree and keyboard focus.

## 9. Stage boundary

- Gate 7 outcome: `PRODUCT-000-G7-PCR-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
- Page lifecycle: `HANDED_OFF`.
- Handoff: completed by project control on 2026-08-31 to `01My首页开发`, thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`.
- Gate 8: `HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED`.
- External execution status is maintained by the D16 development task and is not asserted by this manifest.
- Gate 9: read-only QA only after an accessible implementation exists.
- Gate 10: deployment, publication and indexing require separate user authorization.
- `D:\16Wordpress_nextjs`: not accessed or modified.
