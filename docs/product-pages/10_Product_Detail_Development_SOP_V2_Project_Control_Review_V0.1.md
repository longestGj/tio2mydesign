# Product Detail Development SOP V2.0 Project-Control Review V0.1

## 1. Review record

| Field | Value |
|---|---|
| Review ID | `PRODUCT-DETAIL-SOP-V2-PCR-01` |
| Date | `2026-09-02` |
| Result | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Proposed standard | `03_Product_Detail_Template_Reuse_Development_SOP_V2.0.md` |
| Companion | `04_Product_Detail_Single_Grade_Operational_Checklist_V1.0.md` |
| Current approved predecessor | `03_Product_Page_Development_SOP_and_QA_V1.0.md` |
| Activation | Requires user approval; no automatic Gate 8 authorization for another Grade |

## 2. Why V2.0 is required

V1.0 preserved useful content, technical, SEO, compliance, conversion and responsive checks, but it predates the actual M-350/M-510 workflow. Its main gaps are:

- it treats 14 routes and publication as one development Definition of Done;
- it does not separate D23 planning/read-only QA from D16 implementation;
- it has no standard versus template-reuse fast-track decision;
- it does not require a complete machine-readable Grade payload and hash-bound Manifest;
- it does not describe one-time removal of M-350-only assumptions;
- it lacks `site_scope=tio2-my`, cross-Grade no-fallback and registry allowlisting;
- it combines implementation completion with sitemap/index/search-engine actions that now require Gate 10;
- some old relationship examples are no longer suitable as automatic public mappings.

## 3. V2.0 operating model

The proposed standard uses:

`Gate 0 identity → Gate 1 evidence → Gate 2 full copy → Standard or Fast Track → Gate 6 review → Gate 7 complete package → D16 Gate 8 → D23 Gate 9 → separately authorized Gate 10`

The fast track removes duplicate visual production only when an approved template can express the new Grade without a new layout or visual language. It never removes the content, data, SEO/Schema, route, acceptance or evidence package.

## 4. Material decisions for approval

1. **Two lanes:** standard Gate 3–5 and explicitly approved template-reuse fast track.
2. **Complete handoff:** every Grade supplies decision record, full JSON payload, developer package, Manifest and project-control closure.
3. **One-time generalization:** the first reuse implementation removes single-Grade assumptions; later Grades consume the registry-driven architecture.
4. **Per-Grade release:** each Grade begins preview-only and receives its own Gate 9.
5. **No batch content authorization:** efficiencies come from shared code/checklists, not copied copy or shared approval.
6. **Hard release boundary:** deployment, production data, sitemap and indexing remain Gate 10.

## 5. Risks and controls

| Risk | Control in V2.0 |
|---|---|
| Fast track becomes a way to skip content work | Gate 1/2 and Gate 7 four-piece package remain mandatory |
| Shared template leaks another Grade's facts | Independent payload, allowlist, hash, 404 and no-fallback tests |
| Dense content breaks the page | Density inventory plus 1440/1024/768/430/390/320 and 200% checks |
| Developer redesigns to make content fit | Explicit fast-track exit conditions and return to project control |
| One Grade approval activates others | Per-Grade registry state, Gate 8 authorization and Gate 9 result |
| Development silently becomes publication | Default noindex/sitemap false and separate Gate 10 |

## 6. Project-control recommendation

Approve SOP V2.0 and its operational checklist as the governing workflow for the remaining twelve Grade Product Detail pages. On approval:

- V2.0 becomes `APPROVED_PROJECT_STANDARD / ACTIVE` for Grade Product Detail development;
- V1.0 is retained as `SUPERSEDED / HISTORICAL`, not deleted or rewritten;
- the approved Product Playbook V0.1 receives a non-destructive current-SOP addendum rather than being overwritten;
- approval does not authorize any specific Grade's content, Gate 8, deployment or publication.

