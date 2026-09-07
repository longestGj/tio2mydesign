# GRADE-CR901 Gate 1 Evidence and Claim Audit V0.1

`GRADE-CR901-G1-EVIDENCE-01` · 2026-09-02 · `DRAFT_FOR_PROJECT_CONTROL_REVIEW`

## Source inspection

The sole CR-901 PDF was text-extracted, fully rendered and visually inspected. Identity is consistent across filename, PDF title, visible heading and footer.

| Check | Result |
|---|---|
| Controlling source | `docs/7.27 马来全套TDS +应用指南/7.27/TDS_CR-901_.pdf` |
| Source SHA-256 | `5D742146C2DFAB167854A2C43C4E16D29F3334C4F56CFBD5560E8C132C1EEA29` |
| Pages/readability | 1 / extraction and complete visual inspection PASS |
| Visible identity/version | CR-901 / `V1 2026` |
| Visible type/process | high-purity rutile titanium dioxide / Vapor-phase oxidation |
| Public taxonomy authority | Specialty Materials only |
| Public source-specific directions | electronic ceramics; MLCC/PTC/VDR/soft ferrites; optical glass; battery materials; special metallurgy |
| Public generic Application mappings | Coatings, Plastics, Masterbatch, Printing Inks and Paper = none |
| Process aggregation | no Chloride or Sulfate relation; no specialty Process route |

## CR-901 versus CR-200/M-200 boundary

| Item | Decision |
|---|---|
| `TDS_CR-200_2024 V3.pdf` | Applies only to `GRADE-M200` under `GRADE-M200-CR200-SOURCE-01`; not a CR-901 source |
| CR-200 token | Must not be normalized, aliased or compared to CR-901 |
| M-200 facts and values | Zero use in CR-901 public or internal payload |
| CR-901 facts | Derived only from `TDS_CR-901_.pdf`, Matrix V0.3 and approved architecture |

## Claim ledger

| Claim | Evidence | Decision |
|---|---|---|
| High-purity rutile titanium dioxide | visible CR-901 TDS descriptor | render neutrally; no absolute purity guarantee |
| Vapor-phase oxidation | visible CR-901 TDS + Matrix V0.3 | render neutral classification; no Chloride/Sulfate link |
| Specialty Materials | Matrix V0.3 | render neutral relationship |
| Electronic ceramics; MLCC/PTC/VDR/soft ferrites | visible CR-901 TDS | render as evaluation direction |
| Optical glass | visible CR-901 TDS | render as evaluation direction |
| Battery materials | visible CR-901 TDS | render as evaluation direction |
| Special metallurgy | visible CR-901 TDS | render as evaluation direction |
| Low listed impurity levels | visible typical Al/Fe/K/Na/P values | render only through neutral positioning and exact typical rows |
| Narrow particle-size distribution and good dispersion | visible qualitative TDS wording | use only as restrained evaluation context; no quantified or guaranteed result |
| High dielectric constant / electrical and semiconductor properties | visible qualitative TDS wording without numeric acceptance | convert only into buyer evaluation questions; do not publish superiority wording |
| Cosmetics and medicine | visible TDS application list; compliance scope absent | `pending_verification`; do not render |
| Non-toxic / safety | qualitative TDS wording; SDS not supplied | `pending_verification`; do not render |
| UV-resistant and anti-aging | qualitative TDS wording without test scope | `pending_verification`; do not render |
| Stable batch-to-batch quality | qualitative TDS wording without batch acceptance evidence | `pending_verification`; do not render |
| Coatings/Plastics/Masterbatch/Printing Inks/Paper | Matrix V0.3 `NO_PUBLIC_MAPPING` | do not render; not an unsuitability statement |
| Storage, packaging, loading and legacy contact/domain | source material outside approved public facts | do not render |
| Origin, compliance, certification, stock, price and logistics | unsupported | do not render |

## Technical extraction

The source labels the second column `Typical Value`; every public row preserves that non-guaranteed meaning.

| # | Specification | Typical value |
|---:|---|---|
| 1 | TiO₂ content, % | 99.97 |
| 2 | Rutile content, % | 99 |
| 3 | Specific surface area, m²/g | <6 / 6-8 / 8-10 |
| 4 | Volatile matter, % | 0.1 |
| 5 | Al, % | 0.0020 |
| 6 | Fe, % | 0.0010 |
| 7 | K, % | 0.0001 |
| 8 | Na, % | 0.0050 |
| 9 | P, % | 0.0005 |

The source does not provide row-level test methods or acceptance limits. Public rendering uses exactly two columns and does not invent a Test Method column. The source disclaimer says the typical properties are not a specification; public copy preserves that distinction without adding a procurement warning about a latest TDS or batch file.

## Focused compliance disposition

The page may proceed without cosmetics, medicine, non-toxic, safety, UV/anti-aging or batch-stability claims. Those fields are independently suppressed and do not block identity, process, approved Specialty Materials directions or the nine typical rows. No buyer-visible internal governance wording is introduced.

`CONTENT_INTENT_CANDIDATE = READY_FOR_CONTROLLER_02_REVIEW`

