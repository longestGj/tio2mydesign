# HOME-001 Gate 7 Unique Manifest V0.1

## 0. Manifest control

| Field | Value |
|---|---|
| Manifest ID | `HOME-001-G7-MANIFEST-01` |
| Package ID | `HOME-001-G7-HANDOFF-01` |
| Page | `HOME-001` / `/` |
| Site scope | `tio2-my` |
| User Gate 7 authorisation date | 2026-08-31 |
| Status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_FOR_HANDOFF` |
| Page lifecycle | `APPROVED_FOR_HANDOFF` |
| Project-control result | `PASS` |
| Purpose | Unique current Gate 7 file, visual, responsive and asset inventory |
| Approval boundary | `APPROVED_FOR_HANDOFF`; not `HANDED_OFF`; external development not started; not production |
| Mutable governance boundary | Status fields in this control section may record review decisions; immutable payload files and their registered checksums remain unchanged |

This is the only current Gate 7 Manifest for HOME-001. Gate 5 and Gate 6 manifests remain historical/governance evidence and must not be substituted for this delivery inventory.

## 1. Gate 7 specification payload

| File | Role | Bytes | SHA-256 |
|---|---|---:|---|
| `pages/home/06_handoff/HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md` | Main content, rendering, fields, isolation and SEO/GEO contract | 28386 | `49B34C52B5B761C0A66190A55329CDB7717097E81638491E11DA88DD3212DB4F` |
| `pages/home/06_handoff/HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | Acceptance matrix, error/empty states and blockers | 12741 | `2B604E56AE1A6D104C94EE76F05EC1CCBB41C240561BAD3E9E7D395B8E77BF23` |

`HOME-001_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` is the mutable review cover and is intentionally outside the immutable specification-payload checksum table. This Manifest cannot hash itself without a circular dependency. The project-control result above is a mutable governance field; it does not change either immutable specification payload.

## 2. Frozen/current control inputs

| File | Role | Bytes | SHA-256 |
|---|---|---:|---|
| `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | Final Gate 6 SEO/GEO relation contract | 11649 | `C76EFDA95E797B80BB2B4E34095B6E002C51ADEF2A936CDEF349A33D192657C1` |
| `docs/page-playbooks/HOME_PLAYBOOK_V0.1.md` | Home page-type workflow and constraints | 15112 | `ABA3A53908849BC9361918DF4B2C81E2463356BBA532B9424EA3BB90BCF0C80A` |
| `docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md` | Current Home brief | 14317 | `AFA9BA5BE6A32F836F15EFA5E77631A6C438856438B2A759028C24FCECEF660F` |
| `pages/home/04_planning/01_homepage_content_architecture_v0.3.md` | Current content architecture | 42057 | `F1DC14EC862BFDBE473AC6A771D45A97F81CF52CCBC9FD66557958FEABAC99BC` |
| `pages/home/05_review/HOME-001_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` | Gate 6 PASS and open-boundary record | 13073 | `62B8C44EBA88214045FA6B0A6D39CA0AA34394B7DB2602CEAB77ECB478DA7E28` |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md` | Procurement Footer/fixed-RFQ Home treatment | 11284 | `54D3B6909FFC1D81C349EF5EF38F37A4A979A647A4F4BB69D7F512997F936587` |
| `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | Visual-system constraints | 11671 | `75CF7BBD306A4B2BF2662414DFB28813B094B8552AF8A7FE54231F3837E524EC` |
| `research/keyword/11_page_keyword_master.csv` | Page IDs, URLs, status and keyword ownership | 39157 | `0DC7FF7337232F41CFADEA120536435FB511FB89A5F347648B17A71BC6B76435` |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Four groups, 14 grades and technical relation boundary | 61284 | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` |

If a listed input hash changes, the Gate 7 package must be revalidated and the Manifest version increased before project-control approval.

## 3. Current Home visual and responsive baseline

| Asset role | Formal file | Dimensions | Bytes | SHA-256 | Delivery status |
|---|---|---:|---:|---|---|
| Desktop Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.8.png` | 1440×5683 | 840463 | `DB34764C15A1F8F2197DDE019FDFD4F6FC90C6E85A4023CF5B76657929ABA117` | Gate 6 project-control reviewed input |
| 390px Mobile Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.2.png` | 390×8884 | 366200 | `4ECE62FA2E3ACDEE65CE983D80D5AEF3E294FED9F2593B2B1960A2524E78BB49` | Gate 6 project-control reviewed input |
| Mobile Menu Open | `pages/home/04_planning/visual-designs/homepage-mobile-menu-open-v0.6.png` | 390×844 | 34905 | `FB0C56744BAE0B524E3D0B6F28B3FF56B617B2C2D9DB21554ADADF4BC1A0ABC6` | Gate 5 approved interaction input |
| Mobile Products Expanded | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-mobile-products-expanded-v0.4.png` | 390×1428 | 55001 | `B19D39AB44E26F419F48E1F68E4CBC76CE9B76BF838B3559CAD3B179E5D64A85` | Gate 6 project-control reviewed input |
| Tablet 768 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.1.png` | 768×5364 | 351499 | `A7A54820A2C12061CE5EEC97C0694F6E31C867DA31B80018F6E7225EAD9849C6` | Gate 6 project-control reviewed input |
| Tablet 1024 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.1.png` | 1024×4070 | 346382 | `3B1D0D334F1FD18719CC67C648DAF5E253C0F1F9E96B300A21E3644A0DC9C7BB` | Gate 6 project-control reviewed input |
| Desktop Global Chrome state | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.3.png` | 1440×1380 | 110734 | `A6F60D33E70B762BD3B2E2816FE0BB7947BC432FB1E93992E7A5182BE4E24BC4` | Reviewed for Home Gate 6 |
| Mobile Global Chrome state | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.3.png` | 390×1690 | 60728 | `ADC330D8E074585844FF1A693C00D22FE6A7C454371912C58A8C9D1A474B5723` | Reviewed for Home Gate 6 |

The Global Chrome V0.3 state is the Home delivery reference for the approved `Procurement` Footer wording. This does not independently alter other pages' shared-component governance.

## 4. Visual dependencies and asset restrictions

| Asset | Dimensions | Bytes | SHA-256 | Role and restriction |
|---|---:|---:|---|---|
| `pages/home/04_planning/visual-designs/assets/homepage-hero-tio2-material-v0.6.png` | 1122×1402 | 1915067 | `7308472E4E633584FE4D7761AFD7ED9EA4EA4C622576E2D7736C105F13CF50A5` | Atmosphere-only material composition; not company/factory/origin/manufacturing evidence; production-use clearance required |
| `brand/visual/ChatGPT Image 2026年8月29日 09_37_10 (1).png` | 2172×724 | 654755 | `285E6F4F2FD2304EB102845242A2B7C20DC9E1AC2DB4D38541B1CDE44AC75DE5` | Current visual-direction Logo reference; not final production SVG or asset-clearance proof |

No other image may be substituted without a versioned, approved Manifest update. No asset from another `site_scope` may be used as fallback.

## 5. Responsive interpretation

- 1440×5683 is the full Desktop Buyer Clean reference.
- 1024 and 768 are responsive evidence, not separate copy variants.
- 390×8884 is the Mobile Buyer Clean reference.
- Mobile Menu Open and Products Expanded are required interaction states.
- Desktop/Tablet retain the page RFQ Section; Mobile omits it.
- Header, Hero, Mobile Menu and Footer RFQ remain fixed according to their device applicability.

## 6. Manifest boundary

- A matching hash proves file identity only, not implementation correctness or production clearance.
- Static images do not prove link, form, keyboard, responsive, metadata or Schema behaviour.
- Production Logo/SVG, route readiness, form readiness, factual evidence and release authority remain separate blockers.
- Project control has approved this Manifest and package for handoff. `HANDED_OFF` remains false until the user separately authorises creation of an external development task.
- Gate 8 external development, Gate 9 read-only QA and Gate 10 release have not started and are not authorised by this approval.
