# DOC-000 Gate 1 Intent, Keyword and Evidence Rebaseline V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `DOC-000-G1-V11-REB-01` |
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 1 only |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Research date | 2026-09-01 |
| New online research | None; this is a local-authority and supplied-spec rebaseline |
| Stop | No Gate 2–5, child page, development or D16 operation |

## 1. Authority and source ledger

| ID | Source | Date / scope | SHA-256 | Use |
|---|---|---|---|---|
| G1-S01 | `C:\Users\longe\Downloads\IKHLAS_Document_Hub_Request_Documents_Design_Spec_V1.1.md` | Modified 2026-09-01; supplied V1.1 design/content input | `3E303D2700A0ADEE87750D4AD2E91675F535F71124239B58A5EDA1B2A2ED0D30` | Current rebaseline intent; subordinate to the three explicit conflict decisions |
| G1-S02 | `D:\23MySec\AGENTS.md` | Current project governance | `1757CC9CAA419ED5E31DE1906E8ED16D506D1230A242E63BE265B9CBC082C286` | Gate, evidence, ownership and no-development rules |
| G1-S03 | `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md` | Approved 2026-09-01 | `8626B84369A024A6B1A6B06C15FBA4C36E57D48A5210C8D389DE9C346DE2D279` | Page Intent Card and checkpoint requirements |
| G1-S04 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Approved architecture baseline dated 2026-08-29 | `135DE023057004651D70CC127A27DE47662B71572E05252B3F1D781A4E797305` | Brand, Header, 14-grade and page-system boundary |
| G1-S05 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Registry dated 2026-08-29 | `3263F747ADE147479B0903020D08526A340ABDFF3FE29DDBB90BDE96196E7E10` | Page ID, URL, type, priority, mapping and child identities |
| G1-S06 | `research/keyword/11_page_keyword_master.csv` | Implementation keyword baseline dated 2026-08-29 | `0DC7FF7337232F41CFADEA120536435FB511FB89A5F347648B17A71BC6B76435` | Keyword, intent, role and cannibalization boundary |
| G1-S07 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | User-approved Product V0.3 relationship baseline; 14 unique grades | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` | Grade identifier set only; no application/process facts imported into DOC-000 |
| G1-S08 | `docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.3.md` | Historical unapproved Finder playbook | `E9E72E03D9DB51C9CBB4655145485F6DE7825B8B28430B4F71BFF2FE4D07026C` | Change-impact comparison only |
| G1-S09 | `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.3.md` | Historical unapproved Finder Brief | `3556D9F82DB02D0BB6DE2512A33ECB2D24228D0895EBDE1B303A3F53CF78F69F` | Change-impact comparison only |
| G1-S10 | `pages/documents/04_planning/DOC-000_GATE5_REVIEW_SUBMISSION_V0.5.md` | Historical V0.5 dimension submission | `E7188D61FE1E647E53E921D0678104C47729076F057167C5D18ACA32CC73AC0B` | Historical endpoint comparison only |

The reference image is layout evidence only. It is not a source for product availability, fields, workflow, market logic, file identity, SLA or copy where V1.1 conflicts.

## 2. Identity and keyword audit

| Check | Result | Notes |
|---|---|---|
| Page ID | PASS — `DOC-000` | No new page |
| URL | PASS — `/documents/` | Explicitly overrides V1.1 `/document-hub/` suggestion |
| Header key | PASS — `Documents` | Eyebrow may say `DOCUMENT HUB`; shared navigation is unchanged |
| Page type | PASS — Navigation hub | Qualification and selection support, not transaction form or download library |
| Primary keyword | PASS — `NO_PRIMARY_KEYWORD` | No forced acquisition term |
| Secondary keywords | PASS — `TDS | SDS | COA | COO | REACH` | Category semantics only; not independent Hub targets |
| Search intent | PASS — `N` | Navigation and controlled-request preparation |
| Mapping / verification | PASS — `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET` | No lifecycle upgrade |
| Child-page identity | PASS | DOC-REACH, DOC-TDS and DOC-COO retained exactly; none started or removed |

### 2.1 Conflict register

| Conflict ID | Conflict | Gate 1 treatment | Downstream owner |
|---|---|---|---|
| DOC-G1-CF01 | V1.1 proposes `/document-hub/`; registry and user decision retain `/documents/` | `/documents/` is locked; no URL change proposal | None |
| DOC-G1-CF02 | V1.1 proposes navigation label `Document Hub`; shared authority and user decision retain `Documents` | Header stays `Documents`; `DOCUMENT HUB` is page eyebrow only | Global Chrome owner |
| DOC-G1-CF03 | Old V0.3–V0.5 direction permits Finder/View/Download; V1.1 prohibits direct access | Old direction is historical and cannot control new Gate 2–5 work | Future DOC-000 Gate 2–5 |
| DOC-G1-CF04 | Keyword master describes CONV-DOC capture by Grade, market, company and type; V1.1 removes market-based document logic | DOC-000 has no Market/Destination selector. CONV-DOC's own field/role revision is outside this task and requires separate governance | CONV-DOC task / project control |
| DOC-G1-CF05 | V1.1 requires editable Grade prefill, while receiver/live behavior is unverified | Record it as a required cross-page contract and freeze any live/readiness claim | CONV-DOC task / later QA |
| DOC-G1-CF06 | Reference material may visually emphasize M-2377 | Use all 14 approved identifiers, no default; M-2377 is example-only | DOC-000 future Gate 2–5 |

## 3. Audience, buyer problems and questions

| Audience | Buyer problem | Gate 1 question the Hub must answer |
|---|---|---|
| Procurement / Sourcing | Determine whether documentation support fits supplier qualification | What documentation groups can support supplier review, and what is the next step? |
| Technical / R&D | Identify material needed for product evaluation | Which documentation group supports product evaluation, without implying suitability or file availability? |
| QA / QC | Understand quality/COA request context | How is quality and COA-related documentation requested without presenting a universal COA? |
| Regulatory / Compliance | Prepare a scoped compliance/origin request | How can regulatory/origin review be supported without promising registration, coverage or customs outcomes? |

All audiences converge on the same Product Grade selector and the same `Request Documents` handoff. No audience receives a separate market or language workflow.

## 4. Required relationship model

```text
Buyer role
→ one of three review processes
→ one or more of five documentation groups
→ one selected Product Grade from the approved 14-grade set
→ Request Documents
→ editable Product Grade prefill on /request-documents/
```

This model does not create a relationship between a specific Grade and a specific available document. It describes selection and request context only.

## 5. Claim and evidence matrix

| Claim ID | Candidate visible meaning | Source / date | Scope | Verification state | Public rule |
|---|---|---|---|---|---|
| DOC-G1-C01 | The Hub supports a controlled documentation-request workflow, not direct downloads | G1-S01 / 2026-09-01 | DOC-000 process intent | `USER_SUPPLIED_REBASE_INPUT` | Candidate for confirmation |
| DOC-G1-C02 | The page serves three review processes | G1-S01 / 2026-09-01 | Navigation framing only | `USER_SUPPLIED_REBASE_INPUT` | Use labels/purposes only; no capability expansion |
| DOC-G1-C03 | Five documentation groups organize the request scope | G1-S01 / 2026-09-01 | Category definitions | `USER_SUPPLIED_REBASE_INPUT` | No file, count, link or universal coverage implication |
| DOC-G1-C04 | The selector contains 14 approved Grade identifiers | G1-S04–S07 / 2026-08-29 to 2026-08-30 | Identifier inventory only | `VERIFIED_FOR_SELECTOR_IDENTITY` | All 14 labels; no derived technical relation |
| DOC-G1-C05 | M-2377 is one selectable Grade | G1-S04–S07 | Identifier only | `VERIFIED_FOR_SELECTOR_IDENTITY` | Example only; never sole/default Grade |
| DOC-G1-C06 | Product Grade selection passes to the request page as editable prefill | G1-S01 / 2026-09-01 | Cross-page intended behavior | `RECEIVER_IMPLEMENTATION_UNVERIFIED` | Contract only; do not claim live until verified |
| DOC-G1-C07 | Current documentation support is English only | G1-S01 / 2026-09-01 | Current-stage service intent | `USER_SUPPLIED_REBASE_INPUT / OPERATIONAL_SCOPE_TO_VERIFY` | No language selector or multilingual promise |
| DOC-G1-C08 | Documentation is provided on request | G1-S01 / 2026-09-01 | Process explanation | `CONDITIONAL_PUBLIC_LANGUAGE` | Never imply every Grade/group has an available record |
| DOC-G1-C09 | Malaysia-origin review can be supported by documentation | G1-S01 + project positioning | Review-purpose semantics | `FACT_EVIDENCE_REQUIRED` | Do not assert specific origin file, product origin or customs result |

## 6. Forbidden and frozen fields

### Prohibited in the rebased content direction

- `Download Documents`, `Download PDF`, `View PDF`, `Direct Access`, `View related documents` or equivalent.
- Document library/file manager language or visual logic.
- Market section, country cards, market/destination selector or market-specific request logic.
- Document-language selector.
- A fixed M-2377 or any single Grade card as the only selection surface.
- `1–2 business days`, guaranteed response, immediate availability, approval or delivery.
- RFQ fields such as annual volume, target price, quantity, purchase timeline, WhatsApp or existing supplier.

### Frozen pending evidence or downstream readiness

| Freeze ID | Field | Reason | Unfreeze evidence |
|---|---|---|---|
| DOC-G1-F01 | Public document inventory, filename, date, revision, count and action | No approved inventory | Record-level approval, disclosure and applicability evidence |
| DOC-G1-F02 | REACH registration/compliance coverage | No entity/Grade/market applicability proof | Current approved regulatory evidence with scope/date |
| DOC-G1-F03 | COO/origin/traceability availability or product coverage | No approved DOC inventory/applicability matrix | Approved first-party evidence and disclosure boundary |
| DOC-G1-F04 | Universal five-group availability for every Grade | Group taxonomy is not availability evidence | Grade/group applicability evidence |
| DOC-G1-F05 | Live Product Grade prefill | Receiver implementation not verified | Approved CONV-DOC contract and route verification |
| DOC-G1-F06 | Response time | No SLA approval | Formal business SLA approval |
| DOC-G1-F07 | Schema document/file relations | No visible verified record | Exact visible, verified relation at a later Gate |

## 7. SEO, GEO and machine-readable boundary

- DOC-000 remains a `NO_PRIMARY_KEYWORD` navigation hub; no keyword expansion is proposed.
- GEO may later express visible relationships among the Hub, review processes, documentation groups, Grade selection and Request Documents handoff only after content confirmation.
- No `DigitalDocument`, `MediaObject`, file `ItemList`, download action, per-Grade document availability or regulatory coverage relation is eligible in the current evidence state.
- DOC-REACH, DOC-TDS and DOC-COO retain their independent search ownership. The five Hub cards are not child-page actions.
- Any future Schema must match the visible page exactly and cannot convert “available on request” into a machine claim of file availability.

## 8. Gate 1 validation

| Validation | Result |
|---|---|
| Identity/URL/type preserved | PASS |
| Header label preserved | PASS |
| V1.1 conflict precedence recorded | PASS |
| Page Intent Card complete | PASS — pending confirmation |
| Three review processes present | PASS |
| Five documentation groups present | PASS |
| 14 unique Grade identifiers present | PASS |
| M-2377 not sole/default | PASS |
| No market/language selector | PASS |
| No direct-download/view action | PASS |
| Child identities preserved; no child started | PASS |
| Keyword/cannibalization boundary retained | PASS |
| Evidence/source/date/scope recorded | PASS |
| Forbidden/frozen fields recorded | PASS |
| Gate 2–5 work avoided | PASS |

Gate 1 result: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`. The content-intent checkpoint remains `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION`.
