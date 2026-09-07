# PRODUCT-000 Gate 1 Research and Evidence Audit V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Gate | Gate 1 — Research and Evidence |
| Version | V0.1 |
| Date | 2026-08-29 |
| Status | `APPROVED_GATE_1_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Authoring scope | Research, evidence gating, SEO/GEO and content-planning support only |
| Excluded scope | Code, CMS, testing, deployment, publishing and changes to `D:\16Wordpress_nextjs` |
| Review owner | Project control and quality review |
| Final approval | User |
| Approval record | 2026-08-29: project-control re-review PASS; user approved Gate 1 Evidence Audit V0.1 and authorized Gate 3 wireframing |

This audit determines which application-to-grade relationships PRODUCT-000 may expose in its guided selector. It does not approve a technical relationship merely because the PRD groups a product under an application category.

## 1. Governing Evidence Rule

For application and recommendation claims, the permitted primary source is an approved current TDS, approved application-test evidence, or an explicit technical/product-owner approval. PRD V0.4 and the Product Page SOP establish architecture and candidate directions; they are not automatic permission to publish every application relationship.

Public rendering decisions:

| Decision | Public behavior |
|---|---|
| `RENDER` | Relationship may appear as a neutral `Grade to Review`; no ranking or suitability guarantee |
| `DO_NOT_RENDER` | Relationship is absent from visible HTML, page data, Schema, analytics labels and selector output |
| `ROUTE_GATED` | Content relationship is approved, but a contextual destination link appears only after the route is approved and live |

An application selector result is never evidence that the grade is the best choice, a formulation match, an equivalent product, available for sale, compliant in a destination, or supported by a specific document.

## 2. Inputs Reviewed

| Input | Path | Evidence use | Audit conclusion |
|---|---|---|---|
| Project governance | `AGENTS.md` | Evidence hierarchy and frozen claims | Binding |
| Project status | `00_PROJECT_STATUS.md` | Current page-family and external-development state | Binding current state |
| PRD | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Product portfolio, grouping, process and candidate application direction | Architecture evidence only unless a later approved source grants public permission |
| Page-keyword master | `research/keyword/11_page_keyword_master.csv` | Page identity, route and keyword ownership | Architecture/SEO evidence only |
| Page registry | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page IDs and route status | Architecture evidence only |
| Product template | `docs/product-pages/01_Product_Page_Template_and_Content_Spec_V1.0.md` | Evidence standard and public gating | Binding product content rule |
| M-350 example | `docs/product-pages/02_M350_Complete_Template_Example_V1.0.md` | Explicit M-350 application and process publishing status | Current approved product-level relationship record |
| Product SOP | `docs/product-pages/03_Product_Page_Development_SOP_and_QA_V1.0.md` | Candidate application/process matrix and QA | Candidate direction; application table explicitly says it is not automatic publication permission |
| Products Playbook | `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md` | Selector behavior and frozen fields | Approved design governance |
| PRODUCT-000 Brief | `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.1.md` | Claim Register and page contract | Approved for Gate 1/2 work |

## 3. Evidence Inventory Result

The 2026-08-29 workspace scan covered 354 files under `D:\23MySec`. No current product TDS, SDS, COA, COO or standalone technical datasheet was present. The only spreadsheet/document-format candidate was a keyword-validation workbook in `99_workspace`, which is not product evidence.

The only product-level record that explicitly grants public application status is the approved M-350 complete example:

- `applications: verified`
- `positioning: verified`
- `recommendations: verified`
- `process: Chloride`
- approved application directions: Coatings and Printing Inks

The M-350 example records an earlier product-owner approval. This audit relies on that approved project record; it does not independently recreate or expand the source approval.

For the remaining 13 grades, the project contains architecture directions and candidate matrices but no current approved TDS, application-test record or explicit product-specific public approval. Those relationships therefore remain `DO_NOT_RENDER` in PRODUCT-000.

## 4. Selector Relationship Audit

### 4.1 Candidate-by-candidate result

| Relation ID | Selector option | Grade | Candidate basis | Current public evidence | Decision | Public output |
|---|---|---|---|---|---|---|
| SEL-COAT-M350 | Coatings | M-350 | PRD + SOP | M-350 example marks applications verified | `RENDER` | Neutral M-350 result; Coatings direction; Chloride process; View Grade |
| SEL-INK-M350 | Printing Inks | M-350 | PRD + SOP | M-350 example marks applications verified | `RENDER` | Neutral M-350 result; Printing Inks direction; Chloride process; View Grade |
| SEL-COAT-M510 | Coatings | M-510 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-COAT-M896 | Coatings | M-896 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-COAT-M996 | Coatings | M-996 | PRD + SOP | No current product-level technical approval found; M-996/M-2196 difference frozen | `DO_NOT_RENDER` | None |
| SEL-COAT-M2196 | Coatings | M-2196 | PRD + SOP | No current product-level technical approval found; M-996/M-2196 difference frozen | `DO_NOT_RENDER` | None |
| SEL-COAT-M895 | Coatings | M-895 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-PLAS-M200 | Plastics | M-200 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-MB-M108 | Masterbatch | M-108 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-PLAS-M108 | Plastics | M-108 | SOP secondary candidate | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-MB-M210 | Masterbatch | M-210 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-PLAS-M210 | Plastics | M-210 | SOP secondary candidate | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-MB-M340 | Masterbatch | M-340 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-PLAS-M340 | Plastics | M-340 | SOP secondary candidate | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-PLAS-M886 | Plastics | M-886 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-MB-M886 | Masterbatch | M-886 | SOP secondary candidate | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-INK-M52 | Printing Inks | M-52 | PRD + SOP | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-COAT-M52 | Coatings | M-52 | SOP secondary candidate | No current product-level technical approval found | `DO_NOT_RENDER` | None |
| SEL-ANY-M2377 | Any application | M-2377 | No public candidate allowed | Process and application frozen | `DO_NOT_RENDER` | Never returned by Selector |
| SEL-SPEC-CR901 | Specialty Materials | CR-901 | PRD specialty direction | No current approved Application owner or product-level application evidence found | `DO_NOT_RENDER` | None; grade remains available in All Grades |
| SEL-PAPER-ANY | Paper | Any grade | No candidate in approved product matrix | No current approved relationship found | `DO_NOT_RENDER` | Honest no-result state |

### 4.2 Public selector result by option

| Selector option | Public result set in Gate 1 V0.1 | Public state | Next step |
|---|---|---|---|
| Coatings | M-350 | `RESULTS` | View M-350; All Grades; RFQ route when live |
| Printing Inks | M-350 | `RESULTS` | View M-350; All Grades; RFQ route when live |
| Plastics | Empty | `NO_PUBLIC_RELATION` | All Grades; Applications/RFQ route only when live |
| Masterbatch | Empty | `NO_PUBLIC_RELATION` | All Grades; Applications/RFQ route only when live |
| Paper | Empty | `NO_PUBLIC_RELATION` | All Grades; Applications/RFQ route only when live |
| Specialty Materials | Empty | `NO_PUBLIC_RELATION` | All Grades; no invented specialty Application route |
| Not Sure | Empty by design | `GUIDANCE` | Explain how to continue with All Grades or RFQ when live |

No empty option may be silently populated from PRD categories, process groups, related-grade candidates, mytio2.com copy, or model naming.

## 5. Process Evidence Audit

The Process module and M-350 Selector badge use only approved architecture/process records. Process grouping is separate from application suitability.

| Process relation | Current basis | Gate 1 decision | Public rule |
|---|---|---|---|
| M-350 → Chloride | PRD V0.4 + M-350 approved example | `RENDER` in M-350 result | Neutral process label only; no performance implication |
| Chloride Process route | Page registry + page-keyword master + Product SOP mapping | `ROUTE_GATED` | Use Page ID `PRODUCT-PROC-CL`; link only when live |
| Sulfate Process route | Page registry + page-keyword master + Product SOP mapping | `ROUTE_GATED` | Use Page ID `PRODUCT-PROC-SU`; link only when live |
| M-2377 → process | Frozen | `DO_NOT_RENDER` | No process label, link or grouping |
| CR-901 → Chloride/Sulfate | PRD gives separate specialty process | `DO_NOT_RENDER` in either standard process route | Do not force into Chloride/Sulfate |

Process pages may later aggregate their approved process lists, but PRODUCT-000 must not turn that classification into an application recommendation or process superiority statement.

## 6. Frozen Claims and Non-blocking Work

| Frozen item | Current behavior | May continue |
|---|---|---|
| M-2377 process/application/recommendation/difference | Public All Grades entry contains only `M-2377` and its approved URL | Directory, general selector structure, other evidence-backed content |
| M-996 vs M-2196 difference | No comparison, selection reason, ordering or performance distinction | Both names and approved URLs in All Grades |
| Product-level origin/manufacturing/traceability | No claim in PRODUCT-000 | Page identity, product navigation and RFQ planning |
| Documents availability | No availability badge or promise | Documents route planning and request wording with confirmation boundary |
| Stock/MOQ/price/lead time/shipping | No public claim | RFQ route and required-context planning |

## 7. Claim Register Update for PRODUCT-000

| Claim ID | Gate 1 conclusion | Status | Render decision |
|---|---|---|---|
| CL-004 | Selector relationships are mixed, not wholly pending | `PARTIALLY_VERIFIED` | Only SEL-COAT-M350 and SEL-INK-M350 render; all other candidate relations do not render |
| CL-005 | M-2377 public behavior unchanged | `VERIFIED_INTERNAL_RESTRICTION` | Name and approved URL only in All Grades |
| CL-006 | M-996/M-2196 difference remains unresolved | `TECHNICAL_VERIFICATION_REQUIRED` | Difference does not render |
| CL-007 | Origin/manufacturing/traceability remains unsupported | `FACT_EVIDENCE_REQUIRED` | Does not render |
| CL-008 | Document/logistics availability remains unsupported | `EVIDENCE_REQUIRED` | No availability or operating promise |

## 8. Gate 1 Acceptance Check

- [x] Every Selector option has a defined evidence behavior.
- [x] Every candidate relationship in the current Product SOP matrix has a render decision.
- [x] M-350 is the only grade with current explicit public application permission.
- [x] M-350 Coatings and Printing Inks relationships remain neutral candidates, not recommendations or guarantees.
- [x] No PRD-only relationship is treated as public technical evidence.
- [x] Paper and Specialty Materials have honest empty states.
- [x] M-2377 is absent from Selector and Process output.
- [x] M-996/M-2196 difference remains absent.
- [x] No manufacturing, origin, document availability, stock, price or delivery claim was introduced.
- [x] Missing evidence blocks only affected relationships.

## 9. Open Items

| Review ID | Level | Item | Gate impact | Required evidence | Status |
|---|---|---|---|---|---|
| R-002 | IMPORTANT | Remaining application-to-grade relationships lack current product-level public evidence | Keeps affected Selector results empty | Approved current TDS, application test or explicit technical approval per relation | OPEN |
| R-004 | IMPORTANT | M-2377 facts and M-996/M-2196 differentiation remain frozen | Prevents affected claims only | Approved technical decision and current evidence | OPEN |

## 10. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Initial Gate 1 evidence audit; grants only two M-350 Selector relationships and suppresses all unsupported candidates | Draft for project-control review |
| V0.1 approval record | 2026-08-29 | Project-control re-review PASS and user approval; retained 2 `RENDER`, 19 `DO_NOT_RENDER`, R-002 and R-004 as open hard gates | Approved Gate 1 baseline for Gate 3 |
