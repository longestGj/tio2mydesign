# GRADE-M350 Gate 1 Evidence and Claim Audit V0.1

## 0. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M350-G1-EVIDENCE-01` |
| Page ID | `GRADE-M350` |
| URL | `/products/m-350/` |
| Date | `2026-09-20` |
| Gate 1 path | `GAP_RESEARCH` |
| Path basis | Existing identity, keyword, TDS and most relationships are reusable; the bounded gaps are independent M-350 control, Paper provenance, current copy parity and D32 domain |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Development | `NOT_AUTHORIZED` |

No new SERP collection was performed. Search intent and keyword ownership are already approved and remain unchanged. This audit addresses product evidence and cross-contract content differences only.

## 1. Read-only TDS inspection

The complete one-page PDF was rendered and inspected visually. Text, lists and the technical table are readable.

| Check | Result |
|---|---|
| Source | `docs/7.27 马来全套TDS +应用指南/TDS_M-350_V3_2023.pdf` |
| SHA-256 | `881A1F9C6DB4C1FF52702BFF8BE984C8795D2BB7EAAF0AF43521929719522B58` |
| Visible Grade | `M-350` |
| Visible type | `Rutile TiO2 Pigment` |
| Visible positioning | `CHLORIDE PROCESS | GENERAL GRADE` |
| Visible footer | `TDS | M-350 Titanium Dioxide Pigment | V3 2023` |
| Applications | High-end decorative paint; Ink; Automotive paint; Industrial paint; Plastic |
| Key features | Excellent hue and high gloss; Good dispersibility; Strong hiding power; Good weather and temperature resistance |
| Technical table | 15 rows; columns `Index Item`, `Standard`, `Typical Value` |
| Other source blocks | Storage & Packaging; Safety Notice; disclaimer; legacy contact/email/domain |
| Layout condition | One page; identity, prose, lists, table, operational blocks, disclaimer and footer visibly complete |

The public page may rewrite source terminology into original Buyer Clean language but must preserve exact technical values, units and Standard/Typical semantics.

## 2. Cross-source consistency

| Topic | Registry/keyword master | PRODUCT V0.3 | M-350 TDS | Audit result |
|---|---|---|---|---|
| Grade identity | M-350 | M-350 | M-350 | `MATCH` |
| URL | `/products/m-350/` | Not relationship scope | Not applicable | `LOCKED_BY_ARCHITECTURE` |
| Primary keyword | `M-350 titanium dioxide` | Not relationship scope | Not SEO authority | `LOCKED_BY_KEYWORD_MASTER` |
| Page role | General chloride grade for decorative, industrial and automotive coatings and inks | Coatings/Inks plus additional mappings | Same three coatings plus Ink and Plastic | `PRIMARY_ROLE_CONSISTENT / PLASTICS_SECONDARY` |
| Process | Chloride | Chloride verified neutral | Chloride process | `CONSISTENT` |
| Coatings | Approved role | Verified neutral mapping | Decorative, Automotive and Industrial paint | `CONSISTENT / DETAILED_TDS_DIRECTIONS_ALLOWED` |
| Printing Inks | Approved role | Verified neutral mapping | Ink | `CONSISTENT / DETAILED_TDS_DIRECTION_ALLOWED` |
| Plastics | Secondary model direction | Verified neutral mapping | Plastic | `CONSISTENT / DETAILED_TDS_DIRECTION_ALLOWED` |
| Paper | Not in CSV page-role sentence | Verified neutral mapping from approved first-party Home baseline | Not listed | `NEUTRAL_MAPPING_ONLY / NO_TDS_PERFORMANCE` |
| Masterbatch | Not an approved M-350 role | `NO_PUBLIC_MAPPING` | Not listed | `DO_NOT_RENDER` |
| Specialty Materials | Not an approved M-350 role | `NO_PUBLIC_MAPPING` | Not listed | `DO_NOT_RENDER` |
| Related Grades | No approved comparison reason | Relationship sharing alone does not prove selection reason | Not supplied | `OMIT` |
| Canonical domain | Historical sources use `tio2malaysia.com` | Not relationship scope | Not applicable | `SUPERSEDED_FOR_D32_BY_USER_APPROVED_TIO2PRODUCTS_DOMAIN` |

## 3. Claim Register

| Claim ID | Proposed public fact or statement | Type | Source | Validation | Rendering decision |
|---|---|---|---|---|---|
| `M350-CL-001` | Grade identity is M-350; path is `/products/m-350/` | PRODUCT / SEO | Registry + keyword master | Approved | `RENDER` |
| `M350-CL-002` | M-350 is a general-grade rutile titanium dioxide pigment produced by the chloride process | PRODUCT / TECHNICAL | M-350 TDS + PRODUCT V0.3 | Direct visible match | `RENDER` |
| `M350-CL-003` | The TDS describes particle-size control, inorganic treatment with aluminum and zirconium compounds, and compound organic treatment | PRODUCT | M-350 TDS | Source-backed; no quantified performance inferred | `RENDER_WITH_QUALIFIER` |
| `M350-CL-004` | Decorative, industrial and automotive coatings, printing inks and plastics are M-350 TDS-listed evaluation directions | APPLICATION | M-350 TDS + relevant PRODUCT V0.3 relationships | Direct visible directions; original copy required | `RENDER_WITH_EVALUATION_QUALIFIER` |
| `M350-CL-005` | Hue/high gloss, dispersibility, hiding power, weather resistance and temperature resistance are factors to evaluate | TECHNICAL / PERFORMANCE | M-350 TDS | Source calls these Key Features; page reframes as buyer test directions | `RENDER_AS_EVALUATION_FACTORS` |
| `M350-CL-006` | Fifteen Standard/Typical technical rows | TECHNICAL | M-350 TDS | Exact rows visible | `RENDER_AS_SOURCE_DATA` |
| `M350-CL-007` | Technical values are initial evaluation data, not a product specification | TECHNICAL | M-350 TDS disclaimer | Direct boundary | `RENDER` |
| `M350-CL-008` | Paper is a neutral M-350 Grade-to-review relationship | APPLICATION | PRODUCT V0.3 | Approved relationship; TDS supplies no Paper detail | `RENDER_NEUTRAL_MAPPING_WITH_EXPLICIT_TDS_BOUNDARY` |
| `M350-CL-009` | M-350 Paper performance, paper type, furnish, coating or process suitability | APPLICATION / PERFORMANCE | No M-350 TDS evidence | Unsupported | `DO_NOT_RENDER` |
| `M350-CL-010` | M-510/M-896/M-895 are related selections, alternatives or comparisons | COMPARISON | Shared Coatings relation only | No selection/comparison reason | `DO_NOT_RENDER` |
| `M350-CL-011` | Packaging sizes, container loading and storage terms | LOGISTICS | M-350 TDS | Source-backed but outside the approved page decision path and operational availability contract | `NOT_SELECTED_FOR_PAGE` |
| `M350-CL-012` | Safety/handling wording and SDS direction | SAFETY / DOCUMENT | M-350 TDS | Must not replace current SDS/document workflow | `CONTROLLED_REQUEST_ONLY` |
| `M350-CL-013` | Legacy email, website and address from the TDS footer | COMPANY / CONTACT | M-350 TDS | Not the current site contact/canonical authority | `DO_NOT_RENDER` |
| `M350-CL-014` | Product-specific Malaysia manufacturing, COO or traceability | ORIGIN | No product-specific M-350 source selected here | Not established by this audit | `DO_NOT_RENDER_AS_PRODUCT_CLAIM` |
| `M350-CL-015` | Stock, price, capacity, MOQ, lead time, freight, Incoterm or delivery promise | COMMERCE / LOGISTICS | No approved operational source | Unsupported | `DO_NOT_RENDER` |
| `M350-CL-016` | Best, superior, equivalent, substitute, replacement or guaranteed fit | COMPARISON | No approved comparison evidence | Prohibited/unsupported | `DO_NOT_RENDER` |
| `M350-CL-017` | Current absolute canonical is `https://tio2products.com/products/m-350/` | SEO | 2026-09-20 user domain decision applied to D32 | Approved for current D32 planning | `RENDER_IN_CURRENT_D32_CONTRACT` |

## 4. Technical rows released to Gate 2

| Property | Standard | Typical Value |
|---|---|---|
| TiO₂ content, % | ≥ 92.5 | 93.5 |
| Content of rutile, % | ≥ 99.0 | 100 |
| Brightness, % | ≥ 95.1 | 95.4 |
| L (dry powder) | — | 98.3 |
| b (dry powder) | — | 1.85 |
| Reducing power (Reynolds number) | 1920 | 1950 |
| Dispersibility (Hegman) | ≥ 6.50 | 6.75 |
| Oil absorption, g/100g | ≤ 20 | 18 |
| Slurry pH | 6.5–8.5 | 7.2 |
| Electric resistivity, Ω·m | 80 | 165 |
| Volatile at 105°C, % | ≤ 0.5 | 0.4 |
| Sieve residue (45 µm), % | ≤ 0.02 | 0.01 |
| Average particle size (nm) SEM | — | 230 |
| Inorganic treatment | ZrO₂, Al₂O₃ | — |
| Organic treatment | Yes | — |

Gate 2 and later stages must:

1. Keep all 15 rows unless a later approved source conflict requires field-level suppression.
2. Preserve Standard and Typical Value as distinct semantic columns.
3. Preserve inequality signs, units, test references contained in property labels and dash semantics.
4. State that the data does not constitute a specification.
5. Use the same visible rows for any Product `additionalProperty` output.
6. Never merge M-350 values with another Grade record.

## 5. Application and feature disposition

| Public item | Provenance | Allowed copy depth |
|---|---|---|
| Decorative Coatings | TDS `High-end decorative paint` + Coatings mapping | Original evaluation copy about buyer formulation, pigment loading, appearance and application conditions; no prestige/performance guarantee |
| Industrial Coatings | TDS `Industrial paint` + Coatings mapping | Original evaluation copy about finish, dispersion, hiding target and service/qualification context |
| Automotive Coatings | TDS `Automotive paint` + Coatings mapping | Original evaluation copy about color, gloss, hiding, dispersion and complete-system validation |
| Printing Inks | TDS `Ink` + Printing Inks mapping | Original evaluation copy about ink formulation, dispersion, print process and final appearance |
| Plastics | TDS `Plastic` + Plastics mapping | Original evaluation copy about polymer, additives, loading, process temperature and end-use conditions |
| Paper | PRODUCT V0.3 neutral mapping only | Short, separate neutral path; expressly no TDS-specific Paper performance statement |
| Hue and high gloss | TDS Key Feature | Evaluation target in the complete formulation/application system |
| Hiding power | TDS Key Feature | Evaluation target at intended loading, film/print/polymer conditions |
| Dispersibility | TDS Key Feature | Evaluation target in the actual binder/polymer/ink system and process |
| Weather and temperature resistance | TDS Key Feature | Evaluation target under intended service/processing conditions; no fixed-result promise |

## 6. Gate 1 decision and Gate 2 inputs

The approved page direction is sufficient for Gate 2 drafting:

- Exact page identity, URL and keyword owner remain unchanged.
- The revised page is multi-application but follows the CSV hierarchy: coatings and inks primary, plastics source-backed secondary, Paper separately neutral.
- All five TDS directions, four feature directions and 15 technical rows are released within the qualifiers above.
- Related Grades, product-specific origin, operational promises, legacy contact and unsupported relationships remain absent.
- The D32 canonical uses `tio2products.com`.
- The current Product Detail component family remains a candidate; actual reuse status waits for Gate 3 with approved real copy.

## 7. Self-check

| Quality question | Result |
|---|---|
| Direction clear | Yes: exact Grade evaluation with coatings/inks hierarchy, plastics secondary and Paper neutral |
| Important questions answered | Yes: identity, applications, evaluation factors, exact technical data, Paper boundary and actions |
| Claims supported | Yes: every new/retained claim group maps to Registry, keyword master, PRODUCT V0.3, TDS or the user domain decision |
| Gate 2 consumable | Yes: module direction, field dispositions and complete technical table are explicit |
| Open items actionable | Complete English wording still requires independent Buyer Review and user confirmation; receiver readiness remains a later conditional dependency |

## 8. Submission status

`GATE_1_EXECUTION_SELF_CHECK = PASS`

`SUBMISSION = DRAFT_FOR_PROJECT_CONTROL_REVIEW`

The author does not independently approve or close Gate 1. A separate reviewer must verify the GAP_RESEARCH choice, the Paper/TDS distinction, technical-row fidelity, current domain and downstream Gate 2 usability.
