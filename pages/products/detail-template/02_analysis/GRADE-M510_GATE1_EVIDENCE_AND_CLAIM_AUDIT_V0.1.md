# GRADE-M510 Gate 1 Evidence and Claim Audit V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M510-G1-EVIDENCE-01` |
| Page ID | `GRADE-M510` |
| URL | `/products/m-510/` |
| Date | `2026-09-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / TDS_CURRENTNESS_CONFIRMATION_REQUIRED` |
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
| Currentness | Not established by repository presence alone; explicit technical/product-owner confirmation remains required |

## 3. Cross-source consistency

| Topic | Registry/PRD/master | PRODUCT V0.3 | TDS candidate | Audit result |
|---|---|---|---|---|
| Grade identity | M-510 | M-510 | M-510 | `MATCH` |
| URL | `/products/m-510/` | Not relationship scope | Not applicable | `LOCKED_BY_ARCHITECTURE` |
| Primary keyword | `M-510 titanium dioxide` | Not relationship scope | Not SEO authority | `LOCKED_BY_KEYWORD_MASTER` |
| Process | Chloride | Chloride verified neutral | Chloride process | `CONSISTENT / RELATIONSHIP_RENDER_ALLOWED` |
| Coatings | Approved role | Verified neutral mapping | Multiple coatings uses listed | `CONSISTENT / NEUTRAL_MAPPING_ALLOWED` |
| Plastics | Multi-application role | Verified neutral mapping | Engineering plastics/profiles listed | `CONSISTENT / NEUTRAL_MAPPING_ALLOWED` |
| Masterbatch | Multi-application role | Verified neutral mapping | Masterbatch listed | `CONSISTENT / NEUTRAL_MAPPING_ALLOWED` |
| Printing Inks | Multi-application role | Verified neutral mapping | Printing-ink uses listed | `CONSISTENT / NEUTRAL_MAPPING_ALLOWED` |
| Paper | No approved role | `NO_PUBLIC_MAPPING` | Not listed | `DO_NOT_RENDER` |
| Specialty Materials | No approved role | `NO_PUBLIC_MAPPING` | Not listed | `DO_NOT_RENDER` |
| Exact directory summary | Approved exact M-510 sentence | Does not govern performance wording | Candidate supports similar direction | `EXACT_USER_APPROVED_SENTENCE_ONLY` |
| Numeric technical rows | Not technical source | Not technical source | Readable values present | `CURRENTNESS_AND_PUBLIC_FIELD_APPROVAL_REQUIRED` |

## 4. Field disposition

| Field group | Candidate content exists | Current public disposition | Reason |
|---|---:|---|---|
| Identity / URL / keyword | Yes | `RENDER` | Approved architecture and keyword sources |
| Exact directory summary | Yes | `RENDER_EXACT_ONLY` | Explicit prior user approval; no extrapolation |
| Chloride process | Yes | `RENDER_NEUTRAL_CLASSIFICATION` | PRODUCT V0.3 authority |
| Four Application names | Yes | `RENDER_NEUTRAL_MAPPING` | PRODUCT V0.3 authority |
| Detailed application reasons | Yes | `PENDING_CURRENTNESS_CONFIRMATION` | TDS-specific wording needs current-version confirmation and original web copy review |
| Key Features | Yes | `PENDING_CURRENTNESS_CONFIRMATION` | Do not convert candidate text into approved web claims yet |
| Technical rows | Yes | `PENDING_CURRENTNESS_CONFIRMATION` | Values must be bound to one approved current TDS and marked as typical where applicable |
| Packaging and container loading | Yes | `DO_NOT_RENDER` | Operational/current publication status not confirmed |
| Safety handling text | Yes | `CONTROLLED_REQUEST_ONLY` | Route buyers to current SDS/document workflow; do not replace safety documentation |
| TDS contact/footer identity | Yes | `DO_NOT_RENDER` | Old mytio2.com contact identity is not the new site's canonical/contact authority |
| Origin/manufacturing/COO | No approved product-specific source | `DO_NOT_RENDER` | Unverified for M-510 in this task |
| Related-grade reasons | Candidate does not establish them | `DO_NOT_RENDER_PENDING_SEPARATE_APPROVAL` | Prevent unsupported comparison and selection inference |

## 5. TDS technical rows held for later confirmation

The candidate contains the following property labels: TiO2 content; Surface treatment; Identification; Rutile content; L*; b*; Specific gravity; Tinting strength; pH; Oil absorption; Mean particle size; Carbon black undertone. Values and units are intentionally not promoted into this Gate 1 public contract until `M510-D02` is closed.

When confirmed, later review must:

1. Preserve exact value type, unit and test/condition wording.
2. State clearly that candidate typical properties are not guaranteed specifications where the source makes that distinction.
3. Select only decision-relevant rows for the visible page.
4. Use the same approved rows for visible content and any Product `additionalProperty` output.
5. Avoid combining data from another TDS or Grade.

## 6. Gate 1 finding

| Severity | Finding | Status |
|---|---|---|
| BLOCKING | Page Intent has not yet been explicitly confirmed by the user | `OPEN_M510-D01` |
| IMPORTANT | The candidate TDS visibly identifies V3 2023, but current approved-version authority is not recorded | `OPEN_M510-D02`; blocks technical rows/detailed positioning only |
| IMPORTANT | Receiving routes for documents, sample and RFQ remain independently gated | `CONDITIONAL_RENDER`; does not block intent/evidence work |
| ADVISORY | M-510 is sufficiently multi-application to test shared-template conditionality after approval | `PILOT_RATIONALE_RETAINED` |

Current conclusion:

`GATE_1_EVIDENCE_PARTIALLY_READY / CONTENT_INTENT_PENDING / TDS_TECHNICAL_FIELDS_FROZEN / DEVELOPMENT_NOT_AUTHORIZED`.

## 7. Next review packet

The next user decision should be based on the concrete Page Intent Card in `GRADE-M510_M510_TITANIUM_DIOXIDE_BRIEF_V0.1.md`, not only on a filename or status. If the Page Intent is approved, record `CONTENT_INTENT_CONFIRMED` while retaining the independent TDS-currentness question.
