# GRADE-M886 Gate 1 Evidence and Claim Audit V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M886-G1-EVIDENCE-01` |
| Page ID / URL | `GRADE-M886` / `/products/m-886/` |
| Date / status | 2026-09-02 / `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CANDIDATE` |
| Development | `NOT_AUTHORIZED` |

## 2. PDF inspection and source precedence

Both one-page PDFs were rendered and visually inspected; text was independently extracted.

| Role | File | Printed state | SHA-256 | Decision |
|---|---|---|---|---|
| Current | `docs/7.27 马来全套TDS +应用指南/7.27/TDS_M-886_IKHLAS_V1_2026.pdf` | `V1 2026` | `1EC47C246F788EFFB842E3A68E541510DD6284CDFF2CA3D8961C48EFF02FFAF6` | Sole public product-fact source |
| Historical | `docs/7.27 马来全套TDS +应用指南/7.27/TDS_M_886_.pdf` | `11/2024` | `32ED1BED3BBDC8ECCE7155360797B8104B128F37496CC5FAC83AA95D11123655` | Comparison only; no public field fallback |

The current page is readable and Grade-matched. Its identity, applications, features, 10 technical rows and printed version were confirmed visually. Historical old-site branding, “Malaysia Origin”, contact, packaging and footer content are not current-page authorities.

## 3. Cross-source consistency

| Topic | Architecture/matrix | Current TDS | Result |
|---|---|---|---|
| Identity | M-886 | M-886 | MATCH |
| URL/keyword | approved exact page intent | not SEO authority | LOCKED |
| Role | plastics / high-temperature processing | plastics Grade | CONSISTENT |
| Process | Chloride | Chloride process | CONSISTENT |
| Plastics / Masterbatch | verified neutral mappings | listed directions | CONSISTENT |
| Coatings | `NO_PUBLIC_MAPPING` | phrase appears only in “high-temperature extrusion coatings and cast films” under plastics Grade | DO NOT CREATE COATINGS RELATION |
| Footwear | no public taxonomy/relationship | listed | EVIDENCE ONLY / DO NOT RENDER |
| Inks/Paper/Specialty | no public mapping | not listed | DO NOT RENDER |
| Technical | architecture not authority | 10 readable rows | RELEASE CANDIDATE |

## 4. Claim ledger

| Claim | Source | State | Decision |
|---|---|---|---|
| M-886 is a rutile titanium dioxide pigment for plastics | current TDS | verified candidate | RENDER |
| Chloride process | current TDS + matrix | verified candidate | RENDER NEUTRAL |
| Polyolefin masterbatch | current TDS + Masterbatch mapping | verified candidate | RENDER |
| High-temperature extrusion and cast-film processing | current TDS + Plastics mapping | verified candidate | RENDER AS PLASTICS PROCESSING DIRECTION |
| Engineering plastics | current TDS + Plastics mapping | verified candidate | RENDER |
| Footwear | current TDS only; no approved public relation | evidence-only / not_public | DO NOT RENDER |
| Excellent dispersion, bright white color, good processing/minimal melt-flow effect | current TDS | verified candidate | RENDER AS EVALUATION DIRECTIONS |
| 10 technical rows | current TDS | verified candidate | RENDER |
| M-886 TDS request | exact file + conditional receiver | verified content | CONTROLLED REQUEST |
| Origin/manufacturing/COO/traceability | no released Grade-specific source | not_public | DO NOT RENDER |
| Related Grades / Not Recommended | no evidence | not_public | DO NOT RENDER |
| Commerce/logistics/compliance | no current publication authority | not_public | DO NOT RENDER |

## 5. Technical extraction

| # | Property | Typical value | Test method |
|---:|---|---|---|
| 1 | TiO₂ content | 97% | XRF |
| 2 | Inorganic coating | Alumina | Not stated |
| 3 | Organic treatment | Present | Not stated |
| 4 | Moisture when packed | 0.4% max | ISO 787-2 |
| 5 | Bulk density (tamped) | 1.2 g/cm³ | ISO 787-11 |
| 6 | Oil absorption | 12 g/100 g | ISO 787-5 |
| 7 | Specific gravity | 4.1 g/cm³ | ISO 787-10 |
| 8 | Identification | ISO 591-1: R2 | Not stated |
| 9 | CAS number | 13463-67-7 | Not stated |
| 10 | Color index | Pigment White 6 | Not stated |

The moisture value carries the source note “Measured within 48 hours of production.” All values are typical product data, not a product specification. Units and the `0.4% max` qualifier are preserved.

## 6. Non-selected source content

Storage, packaging, container loading, safety and food-contact text do not enter the page body. Current-page company contact does not prove Grade-specific origin. Historical `Malaysia Origin`, old-site email/web and TITAN branding are not used.

## 7. Relationship disposition

| Relationship | Public behavior |
|---|---|
| M-886 → Plastics / Masterbatch | Neutral mapping plus TDS directions |
| M-886 → Chloride | Neutral classification |
| M-886 → Coatings | No public relationship; extrusion phrase stays within plastics-processing copy only |
| M-886 → Footwear | Evidence-only / not_public; no visible copy, category, Schema, prefill or route |
| M-886 → other application categories | Do not render |
| M-886 → Markets | Navigation only |
| M-886 → Related Grades | Omit |

## 8. Finding

Current and historical sources are separated. Identity, public relationships and current technical evidence are consistent. Footwear, Coatings inference, origin, logistics, comparison and negative-suitability fields remain frozen.

`CONTENT_INTENT_CANDIDATE = READY_FOR_CONTROLLER_02_REVIEW`

