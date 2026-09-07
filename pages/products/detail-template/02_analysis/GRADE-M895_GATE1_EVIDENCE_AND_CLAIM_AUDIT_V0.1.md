# GRADE-M895 Gate 1 Evidence and Claim Audit V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M895-G1-EVIDENCE-01` |
| Page ID | `GRADE-M895` |
| URL | `/products/m-895/` |
| Date | `2026-09-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CANDIDATE` |
| Development | `NOT_AUTHORIZED` |

## 2. Source inspection and current-source decision

Both M-895 PDFs were rendered and visually inspected in full, and their text was independently extracted.

| Source | SHA-256 | Visible identity/version | Disposition |
|---|---|---|---|
| `docs/7.27 马来全套TDS +应用指南/7.27/TDS_M-895_IKHLAS_V1_2026.pdf` | `5B7E11F6CB3E05FFD5212197FAAF43E14F10704BDEC5F6D258576E3BC17D40C5` | M-895; Rutile Titanium Dioxide; Chloride Process; TDS V1 2026 | `CURRENT_GRADE_SPECIFIC_SOURCE` |
| `docs/7.27 马来全套TDS +应用指南/7.27/TDS_M_895_.pdf` | `CA05FABDFFE1382E86765EEB57BED1F2FA177FE0ED7548AA36EB3814018D794D` | M-895; legacy TITAN/mytio2; 11/2024 | `HISTORICAL_COMPARISON_ONLY` |

The current source is one readable page with matching identity and no internal identity conflict. It is the only technical-value authority for this candidate. The legacy source is not used to fill or override current fields.

## 3. Cross-source consistency

| Topic | Architecture / matrix | Current TDS | Result |
|---|---|---|---|
| Grade | M-895 | M-895 | MATCH |
| URL / primary keyword | `/products/m-895/` / `M-895 titanium dioxide` | Not an SEO source | LOCKED |
| Page role | Architectural and industrial coatings | Interior/exterior architectural and industrial coatings | CONSISTENT |
| Process | Chloride verified neutral | Chloride Process | CONSISTENT |
| Broad application | Coatings verified neutral | Three coating directions | CONSISTENT |
| Other application categories | `NO_PUBLIC_MAPPING` | Not listed | DO NOT RENDER |
| Technical rows | Architecture not authoritative | 11 readable rows | RELEASE AS TDS DATA CANDIDATE |

## 4. Claim ledger

| Claim ID | Candidate claim | Source | State | Public decision |
|---|---|---|---|---|
| M895-CLM-001 | M-895 is a rutile titanium dioxide pigment | Current TDS | `verified` candidate | RENDER |
| M895-CLM-002 | M-895 is manufactured by the chloride process | Current TDS + matrix | `verified` candidate | RENDER_NEUTRAL_CLASSIFICATION |
| M895-CLM-003 | Interior architectural, exterior architectural and industrial coatings | Current TDS | `verified` candidate | RENDER_AS_APPLICATION_DIRECTIONS |
| M895-CLM-004 | Alumina/zirconia inorganic coating and organic treatment present | Current TDS | `verified` candidate | RENDER |
| M895-CLM-005 | Dispersion, opacity, gloss, bright blue-toned white and weather resistance | Current TDS | `verified` candidate | RENDER_AS_QUALIFIED_EVALUATION |
| M895-CLM-006 | Eleven current technical rows | Current TDS | `verified` candidate | RENDER_AS_TDS_DATA |
| M895-CLM-007 | Current source label is V1 2026 | Visible TDS footer | `verified` candidate | RENDER |
| M895-CLM-008 | Current TDS can be requested | Exact file exists; receiver conditional | `verified` content | CONTROLLED_REQUEST_ONLY |
| M895-CLM-009 | Product-specific Malaysia origin/manufacturing/COO/traceability | No released source | `not_public` | DO NOT RENDER |
| M895-CLM-010 | Related-grade difference or recommendation | No comparison source | `not_public` | DO NOT RENDER |
| M895-CLM-011 | Not Recommended applications | No explicit unsuitability evidence | `not_public` | DO NOT RENDER |
| M895-CLM-012 | Price, stock, MOQ, lead time or delivery | No publication evidence | `not_public` | DO NOT RENDER |

## 5. Technical extraction

The current source presents two visible columns, with test methods appended to some typical-value cells after a slash. The public contract normalizes this into three explicit columns without changing any value or method.

| # | Source property | Public value | Test method | Semantics |
|---:|---|---|---|---|
| 1 | TiO2 content, % | 94% | XRF | Typical value |
| 2 | Inorganic coating | Alumina, zirconia | Not stated | Composition |
| 3 | Organic treatment | Present | Not stated | Presence |
| 4 | Moisture when packed, % | 0.5% max | ISO 787-2 | Explicit maximum |
| 5 | Bulk density (tamped), g/cm3 | 1.3 g/cm³ | ISO 787-11 | Typical value |
| 6 | Oil absorption, g/100g | 16 g/100 g | ISO 787-5 | Typical value |
| 7 | pH | 7.4 | ISO 787-9 | Typical value |
| 8 | Specific gravity, g/cm3 | 4.1 g/cm³ | ISO 787-10 | Typical value |
| 9 | Identification | ISO 591-1: R2 | Not stated | Classification |
| 10 | CAS number | 13463-67-7 | Not stated | Identifier |
| 11 | Color index | Pigment White 6 | Not stated | Color-index identity |

Rules:

1. The page states these are typical data, not a specification.
2. `0.5% max` remains a maximum.
3. The moisture footnote “measured within 48 hours of production” remains visible in the table note.
4. `Not stated` means no test method is shown; none is inferred.
5. Product Schema values come from the public `value`, never from `testMethod`.

## 6. Source content deliberately not selected

| Source content | State | Reason |
|---|---|---|
| Storage conditions | `not_public` for this page | No approved module; document/SDS workflow is the safer owner |
| Packaging options and container loading | `not_public` for this page | Avoid turning document values into a general current logistics promise |
| Safety notice | `controlled_request_only` | Does not replace current SDS |
| Food Contact wording | `not_public` | Market/use compliance requires separate current regulatory confirmation |
| Current PDF contact footer | `not_public` | mytio2.com is not the new-site Contact/canonical authority |
| Legacy TITAN wording/contact | `not_public` | Historical only and wrong public destination |
| Company/address presence | `do_not_infer_origin` | Does not establish product-specific origin or COO |

## 7. Relationship disposition

| Relationship | State | Public behavior |
|---|---|---|
| M-895 → Coatings | `VERIFIED_FOR_PUBLIC_MAPPING` | Broad mapping plus three TDS-listed directions |
| M-895 → Chloride | `VERIFIED_FOR_PUBLIC_MAPPING` | Neutral classification |
| M-895 → Plastics/Masterbatch/Inks/Paper/Specialty | `NO_PUBLIC_MAPPING` | Do not render; not an unsuitability statement |
| M-895 → EU/UK/India/Brazil | Navigation only | No local availability/compliance claim |
| M-895 → Related Grades | `not_public` | Omit |

## 8. Gate 1 finding

| Severity | Finding | Disposition |
|---|---|---|
| PASS CANDIDATE | Identity, Coatings and Chloride agree across sources | Ready for Controller 02 review |
| PASS CANDIDATE | Current Grade-specific TDS is readable and complete | Gate 2 candidate may proceed |
| IMPORTANT | Legacy source exists | Preserve for audit; never mix its branding/contact or override current values |
| IMPORTANT | Route/receiver readiness is outside this evidence decision | Fail closed in delivery contract |
| ADVISORY | No related-grade or negative-suitability evidence | Omit without gap |

`CONTENT_INTENT_CANDIDATE = READY_FOR_CONTROLLER_02_REVIEW`


