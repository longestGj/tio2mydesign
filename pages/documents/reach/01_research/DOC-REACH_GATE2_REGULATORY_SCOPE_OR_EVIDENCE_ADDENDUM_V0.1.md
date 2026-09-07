# DOC-REACH Gate 2 Regulatory Scope / Only Representative Evidence Addendum V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-REACH` |
| Version / review date | V0.1 / 2026-09-05 |
| Status | `GATE2_EVIDENCE_ADDENDUM / VERIFIED_FOR_SKELETON` |
| Purpose | Correct the EU/EEA scope and separate generic Only Representative information from named-entity relationship claims |
| Historical integrity | Does not rewrite the approved Gate 1 audit or Claim Register |

## 1. Verification result

The review feedback is factually supported. The approved Gate 1 boundary was too restrictive in two places:

1. “EU REACH” must not be described as strictly EU-only. The official framework extends to the EEA countries Norway, Iceland and Liechtenstein.
2. Generic Only Representative role information may be explained from official framework sources. What remains prohibited is a statement that a named company, supplier, customer or importer has or is covered by a particular Only Representative relationship.

Neither correction supplies the still-missing titanium-dioxide-specific ECHA evidence. `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` is unchanged.

## 2. Official sources reviewed

| ID | Official source | Current source indication | Supported use | Capture note |
|---|---|---|---|---|
| G2-SRC-01 | ECHA, `REACH and CLP for non-EU companies` — `https://echa.europa.eu/support/getting-started/enquiry-on-reach-and-clp` | Current indexed official page reviewed 2026-09-05 | REACH/CLP apply to legal entities in the EU and Norway, Iceland and Liechtenstein; importer/Only Representative framework | Direct automated fetch returned HTTP 403; current official indexed content was cross-checked against G2-SRC-02 and G2-SRC-03 |
| G2-SRC-02 | Your Europe, `FAQs - Registering chemicals (REACH)` — `https://europa.eu/youreurope/business/product-rules-compliance/chemicals-and-hazardous-substances/registering-chemicals-reach/faq/index_en.htm` | Page states `Last checked: 01/10/2025`; fetched 2026-09-05 | EEA-established registrant roles; non-EU/EEA companies; importer obligations; appointment of an Only Representative; threshold qualification | Complete current page content accessible during review |
| G2-SRC-03 | EUR-Lex, Regulation (EC) No 1907/2006 — `https://eur-lex.europa.eu/eli/reg/2006/1907/` | Official act marked `Text with EEA relevance`; current project snapshot dated 2026-06-22 remains retained | EEA relevance of the REACH legislation | Existing approved project snapshot remains the local legal source |
| G2-SRC-04 | HSE, `UK REACH explained` — `https://www.hse.gov.uk/reach/about.htm` | Updated 2025-09-02; fetched 2026-09-05 | UK REACH applies in Great Britain and operates independently from EU REACH; supply-chain role must be assessed separately | Complete current page content accessible during review |
| G2-SRC-05 | ECHA, `Registration` and `Do I reach the one tonne a year threshold?` — `https://echa.europa.eu/regulations/reach/registration` | Current indexed official pages reviewed 2026-09-05 | General manufacturer/importer/Only Representative roles and qualified one-tonne-per-year registration context | Direct automated fetch returned HTTP 403; threshold is framework context only |

## 3. Claim-control overlay

| Overlay ID | Public claim class | Gate 2 disposition | Boundary |
|---|---|---|---|
| G2-CL-001 | EU REACH includes EU Member States and the EEA countries Norway, Iceland and Liechtenstein | `RENDER` | Do not call the page EU-only |
| G2-CL-002 | UK REACH is a separate framework for Great Britain | `RENDER_WITH_SCOPE_QUALIFIER` | Do not turn this into UK REACH advice or a UK coverage conclusion |
| G2-CL-003 | A non-EEA manufacturer may appoint an EEA-based Only Representative to fulfil importer obligations under REACH | `RENDER_WITH_QUALIFIER` | Generic role explanation only |
| G2-CL-004 | A named entity has, appoints or is covered by a specific Only Representative | `DO_NOT_RENDER` | Requires separate first-party evidence and approval |
| G2-CL-005 | Registration threshold is generally one tonne per year or more for a manufacturer/importer, subject to role, scope, exemptions and other conditions | `CONTEXT_ONLY` | No large-number treatment, decision card or supplier-specific conclusion |

## 4. Relationship to Gate 1 claims

- Gate 1 `CL-010` continues to prohibit unverified company-specific Only Representative details.
- G2-CL-003 is a new generic framework claim; it does not reverse CL-010.
- The Direct Answer blocker remains substance-specific and is not affected by these general framework sources.
- No registration number, tonnage band, all-Grade coverage or company registration claim becomes publishable.

## 5. Date-model control

Future source panels must distinguish:

- `source_updated_date`: the publication/update date supplied by the official source, when available;
- `site_reviewed_date`: the date TiO2 Malaysia last checked the source for this page.

An internal retrieval timestamp may be retained in the audit trail, but it must not be relabelled as an evidence, effective or source-update date in buyer-visible output.

