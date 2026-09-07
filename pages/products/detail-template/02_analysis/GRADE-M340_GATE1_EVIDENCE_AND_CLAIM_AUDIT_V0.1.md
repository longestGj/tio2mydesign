# GRADE-M340 Gate 1 Evidence and Claim Audit V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M340-G1-EVIDENCE-01` |
| Page ID / URL | `GRADE-M340` / `/products/m-340/` |
| Date / status | 2026-09-02 / `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CANDIDATE` |
| Development | `NOT_AUTHORIZED` |

## 2. PDF inspection

The complete source was rendered and visually inspected, and text was independently extracted.

| Check | Result |
|---|---|
| Source | `docs/7.27 马来全套TDS +应用指南/7.27/TDS_M340_IKHLAS_2023V.pdf` |
| SHA-256 | `9950FCE6EFCA4F11CC4FFF81777653AC15028CFCE74236873A35EB21FEB927ED` |
| Pages | 1 |
| Visible identity | M-340 / Rutile TiO2 Pigment for Plastics |
| Visible process | Chloride process |
| Printed version/date | Not visible |
| Filename-only token | `2023V`; internal only |
| Visual readability / extraction | PASS |
| Other M-340 PDF conflict | None found |
| SOP validity | `VALID_GRADE_SPECIFIC_SOURCE_CANDIDATE` |

## 3. Cross-source consistency

| Topic | Architecture/matrix | TDS | Result |
|---|---|---|---|
| Identity | M-340 | M-340 | MATCH |
| URL/keyword | approved exact page intent | not SEO authority | LOCKED |
| Role | High-concentration masterbatch and film | same plus detailed plastics uses | CONSISTENT |
| Process | Chloride | Chloride process | CONSISTENT |
| Plastics / Masterbatch | verified neutral | listed | CONSISTENT |
| Rubber | No approved public relationship/taxonomy row | directly listed in TDS | EVIDENCE ONLY / DO NOT RENDER |
| Coatings/Inks/Paper/Specialty | no public mapping | not listed | DO NOT RENDER |
| Technical | architecture not authority | 14 readable rows | RELEASE CANDIDATE |

## 4. Claim ledger

| Claim | Source | State | Decision |
|---|---|---|---|
| M-340 is a rutile titanium dioxide pigment | TDS | verified candidate | RENDER |
| Chloride process | TDS + matrix | verified candidate | RENDER NEUTRAL |
| High-concentration masterbatch; high-quality films; silk and wire plastics; injection plastics; moderate-durability plastics | TDS + approved matrix | verified candidate | RENDER AS DIRECTIONS |
| Rubber | TDS only; no approved public relationship row | evidence-only / not_public | DO NOT RENDER |
| Al₂O₃ inorganic treatment and organic treatment | TDS table | verified candidate | RENDER |
| Dispersibility, bluish undertone, whiteness, high-temperature anti-yellowing and stable film production | TDS | verified candidate | RENDER AS QUALIFIED TESTS |
| 14 Technical Index rows | TDS | verified candidate | RENDER |
| M-340 TDS request | exact file + conditional receiver | verified content | CONTROLLED REQUEST |
| Product origin/manufacturing/COO/traceability | no released source | not_public | DO NOT RENDER |
| Related Grades / Not Recommended | no evidence | not_public | DO NOT RENDER |
| Commerce/logistics/compliance | no current publication authority | not_public | DO NOT RENDER |

## 5. Technical extraction

| # | Property | Standard | Typical value |
|---:|---|---|---|
| 1 | TiO₂ content, % | >= 94.0 | 97.0 |
| 2 | Rutile content, % | >= 99.8 | 100 |
| 3 | Brightness, % | >= 94.8 | 95.0 |
| 4 | Whiteness vs. standard sample | Not less than | Not less than |
| 5 | L* (dry powder) | -- | 99.3 |
| 6 | b* (dry powder) | -- | 1.2 |
| 7 | Reducing power (Reynolds number) | 1850 | 1900 |
| 8 | Dispersibility (Hegman) | >= 6.50 | 6.50 |
| 9 | Oil absorption, g/100 g | <= 15.0 | 15.0 |
| 10 | Volatile at 105 °C, % | <= 0.5 | 0.1 |
| 11 | Color at 320 °C, dE | -- | 0.5 |
| 12 | Average particle size (nm), SEM | -- | 190 |
| 13 | Inorganic treatment | Al₂O₃ | -- |
| 14 | Organic treatment | Yes | -- |

`--` is preserved as an unstated source cell. No missing threshold/value is inferred. Product Schema uses the meaningful visible value per row: `typical` when stated, otherwise `standard` for the two categorical treatment rows. This avoids publishing `--` as a Schema value.

## 6. Non-selected source content

Storage, packaging, loading and safety text do not enter the page body. The old-site email/web footer is not a new-site Contact authority. TiO2 Malaysia branding/company address does not prove product-specific origin.

## 7. Relationship disposition

| Relationship | Public behavior |
|---|---|
| M-340 → Plastics / Masterbatch | Neutral mapping plus TDS directions |
| M-340 → Chloride | Neutral classification |
| M-340 → Rubber | Evidence-only / not_public; no visible copy, category, Schema, prefill or route |
| M-340 → other public application categories | Do not render |
| M-340 → Markets | Navigation only |
| M-340 → Related Grades | Omit |

## 8. Finding

Identity, relationships and current technical evidence are consistent. The dedicated TDS is readable and sufficient for a Gate 2 candidate. Filename-only version, logistics, origin, comparison and negative-suitability fields remain frozen.

`CONTENT_INTENT_CANDIDATE = READY_FOR_CONTROLLER_02_REVIEW`

