# HOME-001 Gate 7 Unique Manifest V0.2

## 0. Manifest control

| Field | Value |
|---|---|
| Manifest ID | `HOME-001-G7-MANIFEST-02` |
| Existing package ID | `HOME-001-G7-HANDOFF-01` |
| P0 Amendment ID | `HOME-001-G7-P0-REV-01` |
| Page | `HOME-001` / `/` |
| Site scope | `tio2-my` |
| User P0 revision authorisation date | 2026-08-31 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / P0_INPUT_REVISION` |
| Existing page lifecycle | `APPROVED_FOR_HANDOFF` for the V0.1 package; current P0 revision awaits project-control review |
| Handoff state | `HANDED_OFF=NO`; external development not started |
| Purpose | Current Gate 7 P0 input inventory with corrected Tablet evidence and Canonical acceptance |

This V0.2 Manifest is the only current Manifest candidate for the P0-revised Gate input. V0.1 remains preserved as the previously approved historical baseline. No external implementation may treat this V0.2 candidate as project-control approved until its review result is recorded.

## 1. Current P0 specification payload

| File | Role | Bytes | SHA-256 |
|---|---|---:|---|
| `pages/home/06_handoff/HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md` | Unchanged Gate 7 page/content/rendering/isolation/SEO-GEO base contract | 28386 | `49B34C52B5B761C0A66190A55329CDB7717097E81638491E11DA88DD3212DB4F` |
| `pages/home/06_handoff/HOME-001_GATE7_P0_INPUT_AMENDMENT_V0.1.md` | Authoritative P0 replacement scope and Canonical equivalence rule | 3574 | `55C0114FEEBD480E1EBABE2599E62C21141BE0AB16C95A8060E216643C6E1652` |
| `pages/home/06_handoff/HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md` | Current P0 acceptance layer; inherits unaffected V0.1 clauses | 4817 | `E5801B380EB22211978768B0DE97EE778847A56B496F1AE81FAC60B447BEEA41` |
| `pages/home/04_planning/14_homepage_gate7_p0_tablet_evidence_v0.2.md` | Tablet evidence correction, provenance, limitations and version record | 4375 | `99B004E5AD64C7F76A4215227A26A8A22075FB3085A49D80871B2515AF67FB72` |

The P0 project-control review cover is mutable and intentionally outside the immutable payload checksum table. This Manifest cannot include its own hash without creating a circular checksum.

## 2. Frozen control inputs

| File | Role | Bytes | SHA-256 |
|---|---|---:|---|
| `pages/home/06_handoff/HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | Historical base clauses inherited where V0.2 does not replace an ID | 12741 | `2B604E56AE1A6D104C94EE76F05EC1CCBB41C240561BAD3E9E7D395B8E77BF23` |
| `pages/home/04_planning/HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | Preferred Canonical value and final Gate 6 SEO/GEO relation contract | 11649 | `C76EFDA95E797B80BB2B4E34095B6E002C51ADEF2A936CDEF349A33D192657C1` |
| `docs/page-playbooks/HOME_PLAYBOOK_V0.1.md` | Home page-type workflow and constraints | 15112 | `ABA3A53908849BC9361918DF4B2C81E2463356BBA532B9424EA3BB90BCF0C80A` |
| `docs/page-briefs/HOME-001_HOME_BRIEF_V0.1.md` | Frozen Gate 6 Home brief | 14317 | `AFA9BA5BE6A32F836F15EFA5E77631A6C438856438B2A759028C24FCECEF660F` |
| `pages/home/04_planning/01_homepage_content_architecture_v0.3.md` | Current content architecture and Desktop/Mobile RFQ distinction | 42057 | `F1DC14EC862BFDBE473AC6A771D45A97F81CF52CCBC9FD66557958FEABAC99BC` |
| `pages/home/05_review/HOME-001_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` | Gate 6 PASS and open-boundary record | 13073 | `62B8C44EBA88214045FA6B0A6D39CA0AA34394B7DB2602CEAB77ECB478DA7E28` |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.3.md` | Procurement Footer and fixed-RFQ Home treatment | 11284 | `54D3B6909FFC1D81C349EF5EF38F37A4A979A647A4F4BB69D7F512997F936587` |
| `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | Visual-system constraints | 11671 | `75CF7BBD306A4B2BF2662414DFB28813B094B8552AF8A7FE54231F3837E524EC` |
| `research/keyword/11_page_keyword_master.csv` | Page identity, URL and keyword ownership | 39157 | `0DC7FF7337232F41CFADEA120536435FB511FB89A5F347648B17A71BC6B76435` |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Four groups, 14 grades and technical relation boundary | 61284 | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` |

## 3. Current visual and responsive evidence

| Asset role | Formal file | Dimensions | Bytes | SHA-256 | Status |
|---|---|---:|---:|---|---|
| Desktop Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-pc-clean-v0.8.png` | 1440×5683 | 840463 | `DB34764C15A1F8F2197DDE019FDFD4F6FC90C6E85A4023CF5B76657929ABA117` | Unchanged current input |
| 390px Mobile Buyer Clean | `pages/home/04_planning/visual-designs/homepage-full-visual-mobile-clean-v0.6.2.png` | 390×8884 | 366200 | `4ECE62FA2E3ACDEE65CE983D80D5AEF3E294FED9F2593B2B1960A2524E78BB49` | Unchanged; page-level RFQ omitted by contract |
| Mobile Menu Open | `pages/home/04_planning/visual-designs/homepage-mobile-menu-open-v0.6.png` | 390×844 | 34905 | `FB0C56744BAE0B524E3D0B6F28B3FF56B617B2C2D9DB21554ADADF4BC1A0ABC6` | Unchanged fixed Global RFQ state |
| Mobile Products Expanded | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-mobile-products-expanded-v0.4.png` | 390×1428 | 55001 | `B19D39AB44E26F419F48E1F68E4CBC76CE9B76BF838B3559CAD3B179E5D64A85` | Unchanged |
| Tablet 768 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.2.png` | 768×6844 | 444731 | `E642EA33FD0755884529AB35E3A80062A7F44F8A9D31E209F271176CCC5EA357` | P0 corrected current evidence |
| Tablet 1024 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.2.png` | 1024×5220 | 448760 | `F81110344F7946185504D7A5D37E50CA0AC1E4DF72826F67F40EC528E8E3897C` | P0 corrected current evidence |
| Desktop Global Chrome | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.3.png` | 1440×1380 | 110734 | `A6F60D33E70B762BD3B2E2816FE0BB7947BC432FB1E93992E7A5182BE4E24BC4` | Unchanged |
| Mobile Global Chrome | `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.3.png` | 390×1690 | 60728 | `ADC330D8E074585844FF1A693C00D22FE6A7C454371912C58A8C9D1A474B5723` | Unchanged |

## 4. Visual dependencies and asset restrictions

| Asset | Dimensions | Bytes | SHA-256 | Role and restriction |
|---|---:|---:|---|---|
| `pages/home/04_planning/visual-designs/assets/homepage-hero-tio2-material-v0.6.png` | 1122×1402 | 1915067 | `7308472E4E633584FE4D7761AFD7ED9EA4EA4C622576E2D7736C105F13CF50A5` | Atmosphere-only; not company/factory/origin/manufacturing evidence; production-use clearance required |
| `brand/visual/ChatGPT Image 2026年8月29日 09_37_10 (1).png` | 2172×724 | 654755 | `285E6F4F2FD2304EB102845242A2B7C20DC9E1AC2DB4D38541B1CDE44AC75DE5` | Current visual-direction Logo reference; not final production SVG |

## 5. Historical Tablet evidence retained

| Viewport | Historical file | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| 768 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.1.png` | 768×5364 | 351499 | `A7A54820A2C12061CE5EEC97C0694F6E31C867DA31B80018F6E7225EAD9849C6` |
| 1024 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.1.png` | 1024×4070 | 346382 | `3B1D0D334F1FD18719CC67C648DAF5E253C0F1F9E96B300A21E3644A0DC9C7BB` |

Historical V0.1 evidence is not part of the current visual set and must not be substituted for V0.2 during P0 review.

## 6. Canonical Manifest interpretation

- Preferred emitted value: `https://tio2malaysia.com/`.
- Accepted normalized Home equivalent: `https://tio2malaysia.com`.
- Exactly one rendered canonical is required.
- HTTPS, hostname `tio2malaysia.com`, pathname `/`, empty query and empty fragment are mandatory.
- No second tag, alternate domain, locale, other path or other `site_scope` is permitted.

## 7. Manifest boundary

- A matching hash proves file identity, not implementation correctness.
- V0.2 Tablet evidence is deterministic Gate visual evidence, not a production browser screenshot or implementation proof.
- RFQ route/form, planned/provisional routes, production assets, evidence gates and release authority remain open.
- `HANDED_OFF=NO`; Gate 8, Gate 9 and Gate 10 remain unstarted.
