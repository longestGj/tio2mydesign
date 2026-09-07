# MARKET-000 Gate 7 Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `MARKET-000-G7-HANDOFF-01` |
| Date | 2026-08-31 |
| Status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Handoff | Approved for handoff; not delivered and not `HANDED_OFF` |
| Gate 8 | `LOCKED / NOT_AUTHORIZED` |

## 1. Gate 7 package files

| File | Role | Current state |
|---|---|---|
| `MARKET-000_GATE7_HANDOFF_PACKAGE_V0.1.md` | Page, route, visual, SEO/GEO, a11y, scope and phase contract | Approved Gate 7 handoff baseline |
| `MARKET-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` | Exact content fields and implementation-neutral semantic mapping | Approved Gate 7 handoff baseline |
| `MARKET-000_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | Gate 7 acceptance and Gate 8/9 QA/release matrix | Approved Gate 7 handoff baseline |
| `MARKET-000_GATE7_MANIFEST_V0.1.md` | File and approved-asset inventory | Approved Gate 7 handoff baseline |
| `MARKET-000_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | Review entry point | `MARKET-000-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

All files are located in `D:\23MySec\pages\markets\06_handoff\`.

## 2. Approved visual evidence

| Asset | Dimensions | SHA-256 | Handoff role |
|---|---:|---|---|
| `MARKET-000_G5_DESKTOP_FINAL_REVIEW_CANDIDATE_V0.5.png` | 1440×4664 | `DD94FB6613A21F42C9225EDCD7C1123D9B2AF266821F8224A128BE41A65FA397` | Desktop visual reference |
| `MARKET-000_G5_MOBILE_390_FINAL_REVIEW_CANDIDATE_V0.5.png` | 780×16874 | `008C8A83D778672C4494FA38D5660522ECB70A5638FB0ABE0A68A3D78322DD0B` | 390px logical Mobile reference at 2× |
| `MARKET-000_G5_TABLET_768_FINAL_REVIEW_CANDIDATE_V0.5.png` | 768×6399 | `A1BA1068BE372E4B710D0A2AF2B58EDA0EF5827151099B03F926AA48033ADF5A` | Tablet reference |
| `MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.4.png` | 1600×2500 | `E4D8C2E71CB9A65F032A5770D4FBD1B7BB24AFE23C4EEBB92706B0F5234BCFAA` | State and hierarchy evidence; embedded draft label is historical |

Asset directory: `D:\23MySec\pages\markets\04_planning\visual-designs\assets\`.

These PNGs are visual evidence, not production UI or Logo assets.

## 3. Approved contracts

| File | Status / purpose |
|---|---|
| `MARKET-000_FULL_VISUAL_DESIGN_V0.4.md` | `APPROVED_GATE_5_BASELINE` |
| `MARKET-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md` | Approved visual hashes and locked content |
| `MARKET-000_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | Gate 6 PASS; Gate 7 authorized |
| `MARKET-000_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md` | `MARKET-000-G6-PCR-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` | `APPROVED_GLOBAL_CHROME_BASELINE` |
| `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Current sole relationship source; zero row-level rendering on MARKET-000 |

## 4. Production Logo Manifest slot

| Field | Current value |
|---|---|
| Brand/rights decision | `MARKET-G6-B04=APPROVED / CLOSED`, user 2026-08-31 |
| Owner | Home / Global Chrome |
| Production Manifest | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`; ID `TIO2MY-PRODUCTION-SVG-LOGO-MANIFEST-01`; `APPROVED_PRODUCTION_SVG_BASELINE / ACTIVE` |
| Global Chrome binding | `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` |
| Cross-page registration | `docs/architecture/GLOBAL_LOGO_CROSS_PAGE_REGISTRY_V1.0.md`; Markets registered |
| Production asset keys | `brand_logo_primary_horizontal`; `brand_logo_reverse_monochrome`; `brand_symbol_primary`; `brand_favicon_safe` |
| Dependency | `MARKET-G7-B05=APPROVED / CLOSED` |
| Candidate directory | Historical evidence only: `D:\23MySec\brand\logo\candidates\v0.1\` |
| Old PNG Logo | Gate 5 static visual evidence only; not production input |

This page Manifest references, and does not copy, the owner-promoted Production Manifest. Exact SVG paths, hashes, viewBoxes, byte sizes and usage rules remain authoritative only in that owner Manifest.

## 5. Excluded materials

- V0.1–V0.3 Markets full visual drafts as current authority.
- Builder scripts and workspace files.
- Candidate SVGs as direct MARKET-000 production inputs.
- Old PNG Logo as a production Logo.
- PT-BR content, URL relation, hreflang or menu item.
- Four specific Trade routes/content.
- Row-level PRODUCT V0.3 mappings.
- Any WordPress, Next.js, CMS, component, test, deployment or release code.

## 6. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Registered Gate 7 documents and approved visual evidence; synchronized owner production Logo authority; passed independent project-control review | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE`; B04/B05 closed; Gate 8 locked |
