# DOC-COO Current Gate Baseline Manifest V0.8

2026-09-07. Current page authority pointer. Supersedes [V0.7](DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.7.md), SHA-256 `a404a753a576eaf944f0a4bff6cd8db30e5ca43a3449080c34c3f5c0e46504a6`; all approved historical sources remain unchanged.

| Field | Current state |
|---|---|
| Page / URL / language / site scope | `DOC-COO` / `/documents/certificate-of-origin/` / EN / `tio2-my` |
| Mapping / fact state | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Gate 1–3 | `APPROVED / CLOSED`; inherited exact combination from V0.7 |
| Gate 4 | `USER_AUTHORIZED / IN_PROGRESS`; second page in the serial queue |
| Authority | [G4-8PAGE-SERIAL-01](../../../../docs/architecture/GATE4_EIGHT_PAGE_SERIAL_CONTROL_V1.0.md); user preapproves each completed result after execution, self-check and independent review |
| Gate 5–10 | Not authorized by this batch |

## Approved inputs and intake

- [Brief V0.3](../../../../docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.3.md), with subsequent Gate 1/2 decisions taking precedence over its historical candidate and Hold fields.
- [A V0.1](DOC-COO_GATE2_CONTENT_SKELETON_V0.1.md), [B V0.2](DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md), [C V0.1](DOC-COO_GATE2_CONTENT_CONTRACT_V0.1.md). B owns exact visible content and six modules; C owns current request semantics.
- [G3 approved source](gate3-v0.1/DOC-COO_GATE3_RESPONSIVE_WIREFRAME_V0.1.html): 22,641 bytes; SHA-256 `04b65172bf9fbebce42c3cdc122e5f9f018f466e11a849a23113f7c214b82105`.
- [G3 freeze](gate3-v0.1/DOC-COO_GATE3_FREEZE_RECORD_V0.1.json), [eight formal assets](gate3-v0.1/DOC-COO_GATE3_ASSET_INVENTORY_V0.1.json), [independent review](../05_review/DOC-COO_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md), [closure](../05_review/DOC-COO_GATE3_PREAUTHORIZED_APPROVAL_AND_CLOSURE_V0.1.md), [handoff](../05_review/DOC-COO_GATE3_TO_GATE4_HANDOFF_V0.1.md).
- [Controller upstream identity check](../05_review/gate4-project-control-v0.1/controller-upstream-freeze-check.json): 78 path/hash/byte records checked, zero differences. V0.7 review-table relative locators are resolved here to the actual page review directory; recorded source identities match. No frozen upstream file was edited.

## Gate 4 scope

Develop visual direction from this page's approved G3, retaining the six-module order, full B wording, three distinct evidence types and responsive comparison structure, four context details, origin/traceability distinction, five request-preparation bullets and complete official-source dates/limitation. Apply the current brand, CTA and shared Global Chrome consumer V0.2 with Documents navigation. Do not import another page's content or a private shared-component variant.

Both `Request Origin Documentation` actions retain editable/removable `prefill.document_types[]=origin_supplier_qualification` and hidden `source_context.page_id=DOC-COO`. Do not prefill Product Grade, destination, scheme or transaction outcome. Country / Region remains company location; the approved text places transaction context in Additional Requirements.

The statement `A Certificate of Origin is available upon request` remains excluded for this page. No certificate image/seal, download inventory, issued-document implication or new customs/traceability relationship. Candidate URL and runtime receiver dependencies do not block Gate 4 visual work; later implementation/publication controls remain separate.

Execution output belongs in `gate4-v0.1/`; independent review belongs in `../05_review/gate4-project-control-v0.1/`. Only after complete formal evidence, self-check and independent review may the root controller record preauthorized closure and issue the next Manifest. No Gate 5 execution is implied.
