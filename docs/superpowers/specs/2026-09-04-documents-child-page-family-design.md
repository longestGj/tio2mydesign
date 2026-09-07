# Documents Child Page Family Design Specification

## 0. Document control

| Field | Value |
|---|---|
| Specification | Documents child page family execution design |
| Date | 2026-09-04 |
| Scope | `DOC-TDS`, `DOC-REACH`, `DOC-COO` |
| Planning workspace | `D:\23MySec` |
| Development workspace | `D:\16Wordpress_nextjs` — excluded from this specification's execution |
| Governing standard | `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md` |
| Page-family baseline | `docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.1.md` |
| Approval source | User approved the shared Gate 0–1 plus serial Gate 2–5 approach in the current Controller conversation on 2026-09-04 |
| Approval boundary | The workflow, page order and research/design method are approved. No Page Intent Card, claim, copy, visual, Gate outcome, development, deployment, publication or indexing is approved by this decision. |

## 1. Goal

Prepare three independent Documents information pages through the TiO2 Malaysia Gate 1–5 process, then make each eligible for separate Controller review and later Gate 6–7 work. The pages must help international B2B buyers understand the correct document category, evidence scope and controlled request path without asserting unverified regulatory, availability, origin, shipment or batch facts.

## 2. Approved execution model

The work uses a shared-research, independent-contract, serial-completion model:

1. Complete Gate 0–1 research for all three Page IDs from a common source inventory.
2. Maintain separate Briefs, Page Intent Cards, Claim Registers, evidence audits and current Manifests.
3. Submit the three Gate 1 content-intent decisions together so cross-page boundaries can be reviewed in one view.
4. After Gate 1 approval, complete Gate 2–5 one page at a time in this order:
   - `DOC-TDS`;
   - `DOC-REACH`;
   - `DOC-COO`.
5. Do not start the next page's Gate 2 until the current page has an approved Gate 2 baseline. Later visual work may reuse the approved Documents visual system, but not another page's copy, claims or page-specific information architecture.

The order prioritizes the page with the strongest current first-party source set, then the time-sensitive regulatory page, then the origin/shipment page whose public facts remain most constrained.

## 3. Page identity contracts

### 3.1 DOC-TDS

| Field | Contract |
|---|---|
| Page ID | `DOC-TDS` |
| Page name | TDS, SDS & COA |
| URL | `/documents/tds-sds-coa/` |
| Page type | Document / compliance information page |
| Priority | P1 |
| Language / market | English / Global |
| Primary keyword | `titanium dioxide tds` |
| Secondary keywords | `titanium dioxide sds`; `titanium dioxide coa`; `titanium dioxide technical data sheet`; `titanium dioxide safety data sheet`; `request titanium dioxide documents` |
| Search intent | Informational |
| Buyer stage | Technical Evaluation |
| Mapping status | `PROVISIONAL_URL` |
| Verification status | `FACT_EVIDENCE_REQUIRED` |
| Page owner role | Explain the distinct roles, evidence scope and controlled request context of TDS, SDS and COA. |

The page owns generic TDS/SDS/COA information intent. Product pages own grade-specific product intent, and `CONV-DOC` owns request capture and form states.

### 3.2 DOC-REACH

| Field | Contract |
|---|---|
| Page ID | `DOC-REACH` |
| Page name | Titanium Dioxide REACH |
| URL | `/documents/reach/` |
| Page type | Document / compliance information page |
| Priority | P1 |
| Language / market | English / Global, with EU regulatory scope stated explicitly where applicable |
| Primary keyword | `titanium dioxide reach registration` |
| Secondary keywords | `reach compliant titanium dioxide`; `titanium dioxide reach supplier` |
| Search intent | Informational |
| Buyer stage | Technical Evaluation |
| Mapping status | `PROVISIONAL_URL` |
| Verification status | `FACT_EVIDENCE_REQUIRED` |
| Page owner role | Explain verified REACH-related scope and the information a qualified buyer request must identify. |

The page owns REACH document/compliance intent. It must not turn ECHA substance information into a registration, compliance or coverage claim for IKHLAS, TiO2 Malaysia, a grade, a use or every buyer transaction.

### 3.3 DOC-COO

| Field | Contract |
|---|---|
| Page ID | `DOC-COO` |
| Page name | Certificate of Origin |
| URL | `/documents/certificate-of-origin/` |
| Page type | Document / compliance information page |
| Priority | P1 |
| Language / market | English / Global |
| Primary keyword | `titanium dioxide country of origin certificate` |
| Secondary keywords | `titanium dioxide coo`; `titanium dioxide origin traceability`; `titanium dioxide batch traceability` |
| Search intent | Informational |
| Buyer stage | Technical Evaluation |
| Mapping status | `PROVISIONAL_URL` |
| Verification status | `FACT_EVIDENCE_REQUIRED` |
| Page owner role | Explain origin-document and traceability review without making unverified product, shipment, certificate or customs claims. |

The page owns COO and origin-document intent. About owns verified company/manufacturing/origin trust facts; trade-resource pages own dated trade analysis; `CONV-DOC` owns request capture.

## 4. Shared Page Intent design

All three Page Intent Cards will use the following shared decisions unless page evidence requires a narrower result:

| Field | Shared direction |
|---|---|
| Audience | Procurement, technical, quality, EHS, regulatory and import/export teams evaluating titanium dioxide supply. |
| Buyer problem | Determine which information or document category is relevant, what context controls applicability and how to request review without assuming public availability. |
| Core message | Document usefulness depends on its exact scope; buyers should identify the relevant product and transaction context before requesting review. |
| Must include | Definitions, scope controls, buyer checklist, evidence/currentness guidance, relationship to Products/Documents Hub/Request Documents and concise answer-ready content. |
| Must exclude | Unverified availability, universal coverage, public download promises, regulatory approval, instant delivery, Malaysia-origin proof, shipment proof, customs acceptance or batch traceability claims. |
| Primary CTA | `Request Documents` to `/request-documents/`, rendered only under the approved route/readiness contract. |
| Secondary CTA | `Review Document Categories` to `/documents/`. |
| Ownership boundary | Information pages explain selection and evidence scope; the Documents Hub navigates; Product pages own grade content; About owns company trust facts; CONV-DOC owns the form and submission states. |

Page-specific intent will narrow the shared model:

- `DOC-TDS`: help the buyer distinguish TDS, SDS and COA and identify grade/revision, market/language and lot/order context.
- `DOC-REACH`: help the buyer distinguish substance information from legal-actor and supply-chain obligations, with evidence date and jurisdiction visible.
- `DOC-COO`: help the buyer distinguish general origin-document guidance from evidence for a defined product, order or shipment.

## 5. Gate 1 research and evidence design

### 5.1 Common source inventory

Gate 1 will inventory and classify:

- the current 57-page Registry and keyword master records;
- PRD V0.4 and the Documents Playbook;
- DOC-000 and CONV-DOC approved authority sets;
- all approved Product Grade TDS source files and their existing evidence audits;
- user-approved company identity facts;
- current official ECHA and European Commission sources required for REACH explanations;
- current official Malaysian or transaction-relevant origin-document sources required for COO explanations;
- any first-party SDS, COA, COO, traceability, registration or compliance records supplied or already present in the workspace.

Online and tool-generated research must follow the keyword charter's raw-evidence-first workflow: complete local capture, manifest registration and hash verification before analysis. Competitor pages may establish interface or question patterns only; they cannot establish TiO2 Malaysia capability.

### 5.2 Evidence classes

Each page gets a Claim Register with the following render decisions:

- `RENDER`: supported and approved for the exact public scope;
- `RENDER_WITH_QUALIFIER`: supported only with a visible limiting condition;
- `CONTROLLED_REQUEST_ONLY`: eligible only as a request-path statement;
- `DO_NOT_RENDER`: absent, conflicting, stale, legally overbroad or outside page ownership.

Every claim record must include source, source date, capture date, product/market/language/order/shipment/batch scope, verification status, render decision and review owner.

### 5.3 Default fact freezes

Until evidence closes them:

- Do not say that TiO2 Malaysia, IKHLAS or any grade is REACH registered, REACH compliant or covered by a particular legal actor.
- Do not say that an SDS or COA is available for every grade, market, language or order.
- Do not display a filename or document inventory merely because a local source file exists.
- Do not describe a TDS revision as current without a page-specific validity decision.
- Do not say that a product or shipment has Malaysia origin, a COO, customs acceptance or verified traceability.
- Do not infer batch or shipment relationships from product identity or generic company facts.

Evidence gaps freeze only the affected claim or module. Definitions, buyer checklists, scope explanations, page structure and eligible links may continue.

## 6. Gate 2 content architecture

### 6.1 Shared structure

Each page will use a page-specific variation of this sequence:

1. Breadcrumb and Hero.
2. Direct answer block defining the page's subject and its scope limitation.
3. Buyer decision section explaining when the information is used.
4. Evidence-scope section showing which context changes applicability.
5. Buyer checklist for a qualified review or request.
6. Process explanation connecting information guidance to the controlled request route.
7. Related paths to Documents Hub, appropriate Product context and approved supporting pages.
8. Visible FAQ/answer blocks.
9. Final CTA to Request Documents, conditional on route eligibility.

No page will be a download library, public inventory, legal opinion, certification page or duplicate request form.

### 6.2 DOC-TDS modules

The proposed content skeleton is:

1. Hero: `Titanium Dioxide TDS, SDS and COA Guidance`.
2. Direct comparison: TDS supports technical evaluation; SDS supports safety/hazard communication; COA reports results for a defined production lot.
3. Three-document comparison table covering purpose, controlling context and what the document does not prove.
4. TDS scope: grade identity, revision and approved technical scope.
5. SDS scope: product identity, jurisdiction, language and revision.
6. COA scope: grade, lot, order and issue context.
7. Request checklist: document type, grade, destination market, language and lot/order context when applicable.
8. Review process and receipt boundary.
9. FAQ and final CTA.

The page may refer neutrally to the 14-grade product system, but it may not publish a grade-to-document availability matrix without a separately approved inventory.

### 6.3 DOC-REACH modules

The proposed content skeleton is:

1. Hero: `Titanium Dioxide REACH Information for Procurement Review`.
2. Direct answer distinguishing substance information from company/supply-chain coverage.
3. Scope factors: substance identity, legal actor, tonnage/role where supported, use, grade/product context, market and evidence date.
4. What a buyer should verify with its importer, only representative, regulatory adviser or supplier as appropriate to the evidence.
5. Evidence and currentness panel with dated official sources.
6. Qualified request checklist.
7. Relationship to EU Market guidance and Request Documents.
8. FAQ and final CTA.

The copy will avoid using `REACH compliant` as an unqualified marketing label. Time-sensitive statements will display source and reviewed date.

### 6.4 DOC-COO modules

The proposed content skeleton is:

1. Hero: `Titanium Dioxide Certificate of Origin Guidance`.
2. Direct answer explaining that a COO is transaction- and evidence-specific, not a generic product badge.
3. Scope factors: product, order/shipment, destination, certificate type and issuing/evidence context.
4. Origin substantiation versus batch/order traceability.
5. Buyer checklist for a qualified document review.
6. Process and disclosure boundary.
7. Relationship to About, Market pages, Trade Resources and Request Documents.
8. FAQ and final CTA.

The page will not state that COO changes origin, avoids a trade measure or guarantees customs treatment.

## 7. SEO, GEO and Schema design

Each page retains its unique primary keyword from the keyword master. H1, Title and Meta must serve the same informational intent without importing supplier, grade or country-market primary terms.

Canonical candidates remain the registered URLs, but `PROVISIONAL_URL` is preserved until a formal URL approval decision. Indexability is not inferred from page completion.

The default structured-data direction is:

- `WebPage`;
- `BreadcrumbList` matching visible breadcrumbs;
- FAQ content visible in the initial document, with `FAQPage` output considered only if current search-engine requirements and project approval allow it.

The pages must not output `Product`, `Offer`, `Certification`, `DigitalDocument`, downloadable-file, legal-registration or company-compliance relationships unless the same exact fact and scope are visibly supported and approved.

GEO answer blocks will be short, self-contained and attributable. Time-sensitive REACH or origin statements must carry source and reviewed date. Machine-readable fields must never expand the visible wording.

## 8. Visual and responsive design

The three pages inherit the approved Industrial Documentation Editorial direction:

- white and Soft Background as the main field;
- Navy hierarchy and accessible Deep Teal actions;
- restrained linear document, safety, batch, origin and compliance icons;
- no government seals, fake certificates, stock document previews, unsupported factory imagery or download-library styling;
- Global Chrome V0.5 consumed without page-level changes.

Gate 3 requires complete 1440px, 768px and 390px structural proofs with real copy, Mobile Menu open and long-label wrapping. Gate 4 defines page-specific comparison/checklist/source components. Gate 5 delivers complete Buyer Clean visuals and relevant states, including route unavailable, evidence-restricted, long content, visible keyboard focus and no-image/text-only behavior.

The Documents family may reuse shared components after they are approved, but each page must retain its own information density and subject-specific visual hierarchy.

## 9. File and authority structure

Each page will receive a dedicated directory under `pages/documents/`:

```text
pages/documents/
├── reach/
│   ├── 01_research/
│   ├── 04_planning/
│   └── 05_review/
├── tds-sds-coa/
│   ├── 01_research/
│   ├── 04_planning/
│   └── 05_review/
└── certificate-of-origin/
    ├── 01_research/
    ├── 04_planning/
    └── 05_review/
```

Page Briefs remain in `docs/page-briefs/` and use one file per Page ID. Current Manifests identify the only operative authority set; later versions supersede but do not overwrite historical files. Research raw captures remain under the applicable evidence/raw structure and are never normalized in place.

## 10. Review and approval checkpoints

The work stops for explicit user review at these decision points:

1. Gate 1: three Page Intent Cards, evidence boundaries and Claim Register disposition summary.
2. Gate 2 for each page: content skeleton first, then full Buyer Clean copy and module order.
3. Gate 3 for each page: 1440/768/390 structural proofs.
4. Gate 4 for each page: visual direction and key restricted states.
5. Gate 5 for each page: complete visuals and current Manifest.

Project-control review and user approval remain separate records. Approval of one page or Gate does not authorize another page, Gate 6–7, external development or release.

## 11. Completion criteria

A child page reaches the end of this specification only when:

- its Gate 1–5 current Manifest is unique and internally consistent;
- Page Intent, full copy, module order, SEO/GEO/Schema, 1440/768/390 visuals and required states are approved;
- all public claims have exact evidence dispositions;
- unresolved facts are explicitly frozen without leaking governance language into Buyer Clean content;
- its CTA and internal links follow route eligibility and ownership rules;
- Global Chrome is inherited without a fork;
- no code, CMS, development, deployment or publication status is falsely claimed.

This state remains `DESIGN_IN_REVIEW` until Gate 6 project-control review and does not equal `APPROVED_FOR_HANDOFF`, `READ_ONLY_QA_APPROVED` or published.

## 12. Known risks and controls

| Risk | Control |
|---|---|
| Existing local TDS files are mistaken for a public/current inventory | Treat source presence, validity, public eligibility and route readiness as separate decisions. |
| Generic ECHA information is rewritten as company registration | Record legal actor and scope per claim; fail closed when company evidence is absent. |
| COO guidance implies Malaysia origin or customs outcome | Keep product/order/shipment and official evidence context visible; omit unsupported company/product claims. |
| Three pages duplicate the Hub or conversion form | Keep Hub navigation, child information and CONV-DOC request capture as separate owners. |
| Pages cannibalize Product, Market, About or Resource terms | Enforce keyword-master excluded terms and link to the owning page instead of expanding scope. |
| A provisional route is treated as live | Preserve `PROVISIONAL_URL`; do not render actionable links or Schema URLs until route and content gates pass. |
| Regulatory or trade facts age after approval | Store source and reviewed dates and define stale-fact removal as atomic visible/Schema behavior. |

## 13. Decision record

| Date | Decision | Scope | State |
|---|---|---|---|
| 2026-09-04 | Use shared Gate 0–1 research and separate page contracts, then progress Gate 2–5 in the order DOC-TDS → DOC-REACH → DOC-COO. | Workflow only | `USER_APPROVED / CLOSED` |

