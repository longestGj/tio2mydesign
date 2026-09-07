# TiO2 Malaysia Product Page Planning Pack

> 当前未来执行采用[Gate工作流V2.0](../architecture/GATE_WORKFLOW_V2.0.md)、[SOP V2.1](03_Product_Detail_Template_Reuse_Development_SOP_V2.1.md)、[清单V1.1](04_Product_Detail_Single_Grade_Operational_Checklist_V1.1.md)与[Playbook增补V0.2](../page-playbooks/PRODUCT_PLAYBOOK_CURRENT_SOP_ADDENDUM_V0.2.md)。原Gate 7交付并入Gate 6。下列旧批准、Review ID、SOP V2.0及封存包均为可追溯历史/有效具体合同，不能据旧流程新建独立Gate 7阶段；实质产品要求保持。

## Current active SOP — 2026-09-02

- `03_Product_Detail_Template_Reuse_Development_SOP_V2.0.md` is `APPROVED_PROJECT_STANDARD / ACTIVE` under `PRODUCT-DETAIL-SOP-V2-USER-APPROVAL-01`.
- `04_Product_Detail_Single_Grade_Operational_Checklist_V1.0.md` is its approved active per-Grade checklist.
- `12_Product_Detail_Development_SOP_V2_User_Approval_Closure_V0.1.md` records the user's 2026-09-02 approval and the exact scope.
- The original V1.0 SOP is `SUPERSEDED / HISTORICAL`. V2.0 approval governs workflow only and does not authorize another Grade, Gate 8, Gate 10 or any release action.

## Historical V1.0 package snapshot

- Version: V1.0
- Date: 2026-08-29
- Scope: Planning, content specification, SEO rules, QA and development handoff only
- Approved strategy: One unified product-page template with module-level evidence gating
- Explicitly excluded: Page implementation, final copy for all 14 grades, changes to PRD V0.4, and changes to the original keyword-research files
- Gate 5: `PRODUCT-DETAIL-G5-BASELINE-01 = APPROVED / CLOSED` on 2026-09-01
- Gate 6: `PRODUCT-DETAIL-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`
- Gate 7 PCR-01: `CONDITIONAL_RETURN / NOT_APPROVED`
- Gate 7 PCR-02: `PROJECT_CONTROL_REVIEW_PASS / APPROVED_FOR_HANDOFF`; `HANDED_OFF=NO`
- Gate 8 and development: `NOT_AUTHORIZED`

## Files

1. `01_Product_Page_Template_and_Content_Spec_V1.0.md`
   - Approved product routes and keyword ownership
   - Unified module order and display conditions
   - Lean content data structure
   - SEO, metadata, breadcrumb and Product structured-data rules
   - Internal-link rules and conflict handling
2. `02_M350_Complete_Template_Example_V1.0.md`
   - Complete M-350 page example using the unified template
   - Public-render example and modules that remain suppressed until evidence is approved
3. `03_Product_Page_Development_SOP_and_QA_V1.0.md`
   - `SUPERSEDED / HISTORICAL` development/QA baseline
   - Content, technical, SEO, compliance, conversion and responsive QA checklists
   - Maintenance and template-upgrade process
4. `03_Product_Detail_Template_Reuse_Development_SOP_V2.0.md`
   - Current approved standard for standard versus fast-track Grade development
   - Complete Gate 7 handoff, WordPress + Next.js generalization, Gate 8 evidence and Gate 9 read-only QA
5. `04_Product_Detail_Single_Grade_Operational_Checklist_V1.0.md`
   - Copy-per-Grade execution checklist aligned to SOP V2.0
6. `06_Product_Page_Relationship_Gate_Addendum_V0.3.md`
   - Current PRODUCT V0.3 relationship and rendering-gate authority
   - M-2377 public/no-public boundaries and M-996/M-2196 comparison hold
7. `09_M350_Final_Targeted_Revision_V0.5.md`
   - User-approved Gate 5 M-350 visual/content example baseline
8. `pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE6-AUTHORITY-AND-PRECEDENCE-MANIFEST_V0.1.md`
   - Current source priority, hashes and supersession map
9. `pages/products/detail-template/05_review/PRODUCT-DETAIL-GLOBAL-CHROME-CURRENT-AUTHORITY-ADDENDUM_V0.5.md`
   - Current no-visible-CURRENT, Procurement Footer, Production SVG and fixed-RFQ contract
10. `pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE6-TEMPLATE-CONTRACT-REVIEW_V0.1.md`
   - Unified 14-page field, module, SEO/GEO/Schema, scope, route, responsive and accessibility review
11. `pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE6-PROJECT-CONTROL-REVIEW-SUBMISSION_V0.1.md`
   - Gate 6 project-control review entry point
12. `pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-PACKAGE_V0.1.md`
   - Complete Gate 7 development-specification package
13. `pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-MANIFEST_V0.1.md`
   - Unique package hashes and approved dependencies
14. `pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-PROJECT-CONTROL-REVIEW-SUBMISSION_V0.1.md`
   - Gate 7 project-control review entry point; not handed off
15. `pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-PACKAGE_V0.2.md`
   - PCR-02 targeted revision: fixed RFQ, M-350-only implementation scope and external destination ownership
16. `pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-MANIFEST_V0.2.md`
   - Current V0.2 hashes; V0.1 remains history
17. `pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-PROJECT-CONTROL-REVIEW-SUBMISSION_V0.2.md`
   - Current PCR-02 review entry point; not approved or handed off
18. `pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-PCR02-FRESH-VALIDATION_V0.2.md`
   - Fresh Manifest, P0 wording, history, conflict and trailing-whitespace validation
19. `pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE7-PROJECT-CONTROL-CLOSURE_V0.2.md`
   - Current Gate 7 authority, version history and `APPROVED_FOR_HANDOFF / HANDED_OFF=NO` record

## Governing Baseline

Apply sources in this order when they conflict:

1. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`
2. `research/keyword/11_page_keyword_master.csv`
3. Approved current product and corporate evidence
4. Original keyword-research files
5. mytio2.com pages as fact-check candidates only

The current mytio2.com body copy is not a copy source for the new website. A statement appearing there does not by itself make that statement publishable.

## Simplified Evidence Model

Product records do not carry source, owner, approval date, review date or public-visibility metadata beside every content field.

Instead:

- product content records contain only content and routing values needed by the page;
- one `publishing_status` map controls whole modules or claim groups;
- source and owner rules are defined once by field group in the main specification;
- a `pending_verification` or `not_public` module is absent from public HTML, metadata, structured data and accessible hidden content.

## Handoff Rule

Developers must use the page ID or route key defined by the site route registry for links to Applications, Documents and Conversion pages. Do not hard-code a provisional URL from the keyword master as though it were approved.
