# GRADE-M896 Gate 1 Evidence and Claim Audit V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M896-G1-EVIDENCE-01` |
| Page ID | `GRADE-M896` |
| URL | `/products/m-896/` |
| Date | `2026-09-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CANDIDATE` |
| Development | `NOT_AUTHORIZED` |

## 2. M-896 TDS inspection

The complete one-page source was rendered and visually inspected, and its text was independently extracted.

| Check | Result |
|---|---|
| Source | `docs/7.27 马来全套TDS +应用指南/TDS_M896_IKHLAS_2023V3.pdf` |
| SHA-256 | `5115450C184397E774AE652CACBC009682793AD1659831EBB35A6737251FC90E` |
| Pages | 1 |
| Visible Grade | `M-896` |
| Visible product line | `Rutile Titanium Dioxide for Coatings` |
| Visible process | `Chloride Process` |
| Printed version/date | Not visible |
| Filename indicator | `2023V3` appears only in the filename |
| Visual readability | PASS — identity, description, applications, key features, technical table, storage/packaging, safety notice, disclaimer and contact footer are legible |
| Text extraction | PASS — core text, values, units and methods extracted |
| Validity under SOP V2.0 | `VALID_PRODUCT_TDS_CANDIDATE` — dedicated Grade match, readable content, no identity conflict |

The source is valid for its exact M-896 scope under the approved document-presence rule. The filename-only `2023V3` indicator is not promoted into buyer-visible copy.

## 3. Cross-source consistency

| Topic | Architecture/keyword source | PRODUCT V0.3 | M-896 TDS | Audit result |
|---|---|---|---|---|
| Grade identity | M-896 | M-896 | M-896 | MATCH |
| URL | `/products/m-896/` | Not applicable | Not applicable | LOCKED |
| Primary keyword | `M-896 titanium dioxide` | Not applicable | Not SEO authority | LOCKED |
| Page role | Industrial and weather-resistant coatings | Coatings neutral mapping | Industrial plus weather-resistant coating systems | CONSISTENT |
| Process | Chloride | Chloride verified neutral | Chloride Process | CONSISTENT |
| Coatings | Approved role | Verified neutral mapping | Six detailed coating systems | CONSISTENT |
| Plastics/Masterbatch/Inks/Paper/Specialty | Excluded from M-896 role | `NO_PUBLIC_MAPPING` | Not listed | DO NOT RENDER |
| Technical rows | Not a technical source | Not a technical source | 11 readable rows | RELEASE AS TDS DATA CANDIDATE |

## 4. Claim and module ledger

| Claim ID | Candidate public claim | Source | State | Rendering decision |
|---|---|---|---|---|
| M896-CLM-001 | M-896 is a rutile titanium dioxide pigment | TDS p.1 | `verified` candidate | RENDER |
| M896-CLM-002 | M-896 is produced by the chloride process | TDS p.1 + PRODUCT V0.3 | `verified` candidate | RENDER_NEUTRAL_CLASSIFICATION |
| M896-CLM-003 | M-896 is documented for industrial coatings | TDS p.1 + keyword role | `verified` candidate | RENDER |
| M896-CLM-004 | M-896 is documented for weather-resistant coating evaluation | TDS p.1 + keyword role | `verified` candidate | RENDER_WITH_EVALUATION_QUALIFIER |
| M896-CLM-005 | Alumina and silica inorganic coating; organic treatment present | TDS p.1 | `verified` candidate | RENDER |
| M896-CLM-006 | Water-/solvent-based industrial, coil, protective/marine, automotive OEM/refinish, exterior powder and weather-resistant architectural coatings | TDS p.1 | `verified` candidate | RENDER_AS_APPLICATION_DIRECTIONS |
| M896-CLM-007 | Weather resistance, dispersibility, gloss, blue undertone, opacity and tint strength are evaluation criteria | TDS Key Features p.1 | `verified` candidate | RENDER_WITH_EVALUATION_QUALIFIER |
| M896-CLM-008 | 11 technical rows below | TDS p.1 | `verified` candidate | RENDER_AS_TDS_DATA |
| M896-CLM-009 | M-896 TDS can be requested | Exact TDS exists; route contract | `verified` content / receiver conditional | CONTROLLED_REQUEST_ONLY |
| M896-CLM-010 | Product-specific Malaysia origin/manufacturing/COO/traceability | No approved M-896 source | `pending_verification` | DO_NOT_RENDER |
| M896-CLM-011 | Related-grade differences or recommendation | No Grade-specific comparison source | `pending_verification` | DO_NOT_RENDER |
| M896-CLM-012 | Not Recommended applications | No explicit unsuitability evidence | `not_public` | DO_NOT_RENDER |

## 5. Technical field extraction

All values below are bound to TDS p.1 and SHA-256 `5115450C184397E774AE652CACBC009682793AD1659831EBB35A6737251FC90E`.

| # | Source property label | Source value | Test method | Value semantics | Candidate public state |
|---:|---|---|---|---|---|
| 1 | TiO2 content | 92% | XRF | Typical-properties table value | `verified` |
| 2 | Inorganic coating | Alumina, Silica | Not stated | Composition description | `verified` |
| 3 | Organic treatment | Present | Not stated | Presence statement | `verified` |
| 4 | Moisture when packed* | 0.5% max | ISO 787-2 | Explicit maximum | `verified` |
| 5 | Bulk density (tamped) | 1.2 g/cm3 | ISO 787-11 | Typical-properties table value | `verified` |
| 6 | Oil absorption | 18 g/100 g | ISO 787-5 | Typical-properties table value | `verified` |
| 7 | pH | 8.0 | ISO 787-9 | Typical-properties table value | `verified` |
| 8 | Specific gravity | 4.0 g/cm3 | ISO 787-10 | Typical-properties table value | `verified` |
| 9 | ISO 591-1 classification | R2 | Not stated | Classification | `verified` |
| 10 | CAS number | 13463-67-7 | Not stated | Chemical identifier | `verified` |
| 11 | Color index | Pigment White 6 | Not stated | Color-index identity | `verified` |

Publication constraints:

1. The section title and note must state these are typical product data, not a product specification.
2. `0.5% max` remains an explicit maximum and is not rewritten as a typical value.
3. The public table may normalize `TiO2` to `TiO₂` and `g/cm3` to `g/cm³` without changing meaning.
4. A missing test method is displayed as `Not stated` or an em dash only if the table legend explains it; it is never inferred.
5. Product Schema `additionalProperty` must use the same public labels and values.

## 6. Valid source content not selected for this page

| Source content | Disposition | Reason |
|---|---|---|
| Storage conditions | `NOT_SELECTED_FOR_PAGE` | Not needed in the current Grade decision path; current SDS/document workflow is the safer owner |
| Packaging options | `NOT_SELECTED_FOR_PAGE` | No packaging module in the approved template and no need to introduce one |
| Container loading | `NOT_SELECTED_FOR_PAGE` | Avoid turning a TDS line into a general current logistics promise |
| Safety notice | `CONTROLLED_REQUEST_ONLY` | Does not replace current SDS or handling review |
| Legacy address/email/site | `DO_NOT_RENDER` | Not the new site's Contact/canonical authority |
| TDS top-level Malaysia branding | `DO_NOT_INFER_PRODUCT_ORIGIN` | Branding does not establish product-specific country of origin |

## 7. Relationship disposition

| Relationship | State | Evidence | Public behavior |
|---|---|---|---|
| M-896 → Coatings | `VERIFIED_FOR_PUBLIC_MAPPING` | PRODUCT V0.3 + TDS | Neutral broad mapping plus TDS-listed coating directions |
| M-896 → Chloride | `VERIFIED_FOR_PUBLIC_MAPPING` | PRODUCT V0.3 + TDS | Neutral classification only |
| M-896 → non-Coatings application categories | `NO_PUBLIC_MAPPING` | PRODUCT V0.3 | No public mapping; not an unsuitability statement |
| M-896 → Related Grades | `PENDING_VERIFICATION` | No source | Omit |

## 8. Gate 1 finding

| Severity | Finding | Candidate disposition |
|---|---|---|
| PASS CANDIDATE | Identity, Coatings relationship and Chloride process agree across sources | Ready for Controller 02 review |
| PASS CANDIDATE | Dedicated TDS is readable and Grade-matched | Product/application/technical fields may proceed to Gate 2 candidate |
| IMPORTANT | TDS has no printed version/date | Do not display version/date; exact-file hash remains internal evidence binding |
| IMPORTANT | Downstream document/sample/RFQ and contextual routes remain conditional | Does not block content; must fail closed in delivery contract |
| ADVISORY | No related-grade or negative-suitability evidence | Omit modules without gap |

`CONTENT_INTENT_CANDIDATE = READY_FOR_CONTROLLER_02_REVIEW`

