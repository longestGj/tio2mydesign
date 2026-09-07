# GRADE-M510 Gate 1 Evidence and Claim Audit V0.3

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M510-G1-EVIDENCE-01` |
| Page ID | `GRADE-M510` |
| URL | `/products/m-510/` |
| Date | `2026-09-02` |
| Status | `CONTENT_INTENT_CONFIRMED / M510_TDS_VALID / TECHNICAL_FIELDS_RELEASED_TO_GATE2` |
| Scope | Read-only evidence, field-boundary and source-consistency audit for Gate 1 |
| Development | `NOT_AUTHORIZED` |

## 2. Read-only TDS inspection

The candidate PDF was inspected as a complete one-page document by rendering and text extraction.

| Check | Result |
|---|---|
| Source | `docs/7.27 马来全套TDS +应用指南/7.27/TDS_M-510_TME TMP FREE.pdf` |
| SHA-256 | `63E20C79D883975EB31453BC80AABFAF26EBEE73533D51B6A6B15530172E2167` |
| Visible Grade | `M-510` |
| Visible document footer | `TDS | M-510 Titanium Dioxide Pigment | V3 2023` |
| Page count | 1 |
| Visual condition | Layout is readable; identity, Applications, Key Features, specification table, Storage & Packaging, Safety Notice, disclaimer and contact footer are visible without material clipping |
| Text extraction | Core headings, prose, lists, values, units and footer were extractable |
| Validity | User confirmed that document presence establishes validity; the Grade match and readable one-page source close the prior currentness hold |

## 3. Cross-source consistency

| Topic | Registry/PRD/master | PRODUCT V0.3 | TDS candidate | Audit result |
|---|---|---|---|---|
| Grade identity | M-510 | M-510 | M-510 | `MATCH` |
| URL | `/products/m-510/` | Not relationship scope | Not applicable | `LOCKED_BY_ARCHITECTURE` |
| Primary keyword | `M-510 titanium dioxide` | Not relationship scope | Not SEO authority | `LOCKED_BY_KEYWORD_MASTER` |
| Page-role hierarchy | Architectural and automotive coating evaluation is primary | Coatings plus three other approved public mappings | Multi-application source with detailed coatings/plastics/inks references | `CSV_ROLE_PRIMARY / PLASTICS_MASTERBATCH_INKS_SECONDARY` |
| Process | Chloride | Chloride verified neutral | Chloride process | `CONSISTENT / RELATIONSHIP_RENDER_ALLOWED` |
| Coatings | Approved role | Verified neutral mapping | Multiple coatings uses listed | `CONSISTENT / NEUTRAL_MAPPING_ALLOWED` |
| Plastics | Multi-application role | Verified neutral mapping | Engineering plastics/profiles listed | `CONSISTENT / NEUTRAL_MAPPING_ALLOWED` |
| Masterbatch | Multi-application role | Verified neutral mapping | Masterbatch listed | `CONSISTENT / NEUTRAL_MAPPING_ALLOWED` |
| Printing Inks | Multi-application role | Verified neutral mapping | Printing-ink uses listed | `CONSISTENT / NEUTRAL_MAPPING_ALLOWED` |
| Paper | No approved role | `NO_PUBLIC_MAPPING` | Not listed | `DO_NOT_RENDER` |
| Specialty Materials | No approved role | `NO_PUBLIC_MAPPING` | Not listed | `DO_NOT_RENDER` |
| Exact directory summary | Approved exact M-510 sentence | Does not govern performance wording | Candidate supports similar direction | `EXACT_USER_APPROVED_SENTENCE_ONLY` |
| Numeric technical rows | Not technical source | Not technical source | Readable values present | `APPROVED_AS_TDS_TYPICAL_VALUES / RELEASED_TO_GATE2` |

## 4. Field disposition

| Field group | Candidate content exists | Current public disposition | Reason |
|---|---:|---|---|
| Identity / URL / keyword | Yes | `RENDER` | Approved architecture and keyword sources |
| Exact directory summary | Yes | `RENDER_EXACT_ONLY` | Explicit prior user approval; no extrapolation |
| Chloride process | Yes | `RENDER_NEUTRAL_CLASSIFICATION` | PRODUCT V0.3 authority |
| Four Application names | Yes | `RENDER_NEUTRAL_MAPPING` | PRODUCT V0.3 authority |
| Detailed application reasons | Yes | `RENDER_WITH_EVALUATION_QUALIFIER` | Valid TDS evidence; rewrite as original buyer-facing copy and keep CSV-centered hierarchy |
| Key Features | Yes | `RENDER_WITH_EVALUATION_QUALIFIER` | Valid TDS evidence; do not turn feature wording into guaranteed performance |
| Technical rows | Yes | `RENDER_AS_TYPICAL_DATA` | Bind to this exact TDS, preserve labels/units and state typical properties are not a specification |
| Packaging and container loading | Yes | `NOT_SELECTED_FOR_PAGE` | Valid source content, omitted because it is not needed in the current Grade-page decision path |
| Safety handling text | Yes | `CONTROLLED_REQUEST_ONLY` | Route buyers to current SDS/document workflow; do not replace safety documentation |
| TDS contact/footer identity | Yes | `DO_NOT_RENDER` | Old mytio2.com contact identity is not the new site's canonical/contact authority |
| Origin/manufacturing/COO | No approved product-specific source | `DO_NOT_RENDER` | Unverified for M-510 in this task |
| Related-grade reasons | Candidate does not establish them | `DO_NOT_RENDER_PENDING_SEPARATE_APPROVAL` | Prevent unsupported comparison and selection inference |

## 5. TDS technical rows released to Gate 2

| Property | TDS Typical Value |
|---|---|
| TiO2 content, % | 94.5 |
| Surface treatment | Zirconia, alumina, organic |
| Identification | ISO 591: R2; ASTM D 476-84: II(IV) |
| Rutile content, % | 99.9 |
| L* | 98.3 |
| b* | 1.65 |
| Specific gravity, g/cm³ | 4.1 |
| Tinting strength, % | 118 |
| pH | 7.5 |
| Oil absorption, g/100g | 17.5 |
| Mean particle size, μm | 0.27 |
| Carbon black undertone (CBU) | 14.0 |

Gate 2 and later review must:

1. Preserve exact value type, unit and test/condition wording.
2. State clearly that candidate typical properties are not guaranteed specifications where the source makes that distinction.
3. Select only decision-relevant rows for the visible page.
4. Use the same approved rows for visible content and any Product `additionalProperty` output.
5. Avoid combining data from another TDS or Grade.

## 6. Gate 1 finding

| Severity | Finding | Status |
|---|---|---|
| CLOSED | User approved tightening Page Intent to the CSV page role: architectural and automotive coatings primary; Plastics, Masterbatch and Printing Inks secondary neutral paths | `M510-D01 = APPROVED / CLOSED` |
| CLOSED | User confirmed that document presence establishes validity; M-510 V3 2023 is valid evidence for its exact Grade scope | `M510-D02 = USER_APPROVED / CLOSED` |
| IMPORTANT | Receiving routes for documents, sample and RFQ remain independently gated | `CONDITIONAL_RENDER`; does not block intent/evidence work |
| ADVISORY | M-510 is sufficiently multi-application to test shared-template conditionality after approval | `PILOT_RATIONALE_RETAINED` |

Current conclusion:

`CONTENT_INTENT_CONFIRMED / M510_TDS_VALID / TECHNICAL_FIELDS_RELEASED_TO_GATE2 / DEVELOPMENT_NOT_AUTHORIZED`.

## 7. Next review packet

The current Page Intent and evidence authority is `GRADE-M510_M510_TITANIUM_DIOXIDE_BRIEF_V0.4.md`. Gate 2 may use the valid M-510 TDS fields. Packaging/loading remains unselected, and Related Grades remains a separate open content decision.

## 8. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-02 | Initial M-510 evidence and claim audit; Page Intent still pending | `HISTORICAL / SUPERSEDED_BY_V0.2` |
| V0.2 | 2026-09-02 | Recorded user-approved CSV role tightening and closed M510-D01; retained TDS currentness hold | `CONTENT_INTENT_CONFIRMED / CURRENT` |
| V0.3 | 2026-09-02 | Recorded document-presence validity rule, closed M510-D02 and released TDS product/technical fields to Gate 2 | `M510_TDS_VALID / CURRENT` |
