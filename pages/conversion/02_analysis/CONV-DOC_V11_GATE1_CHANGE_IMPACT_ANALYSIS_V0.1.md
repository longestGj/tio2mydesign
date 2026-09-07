# CONV-DOC V1.1 Gate 1 Change Impact Analysis V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G1-V11-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Scope | Gate 1 impact analysis only |
| Current checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |

## 1. Directional change

| Area | Historical concept | V1.1 Gate 1 target | Impact if a later Gate is authorised |
|---|---|---|---|
| Page role | Broad controlled request with destination/market context | Focused transaction page | Remove educational and market modules |
| Country field | Destination/market request input | Country / Region as contact/company location only | Rewrite label, helper, validation meaning and stored-field semantics |
| Product | Product/grade plus uncertain-grade path | Required Product Grade across all 14 published Grades | Rework selector, empty state and prefill contract |
| Document choices | TDS, SDS, COA, COO/Origin, Traceability, Other | Six V1.1 grouped types | Replace labels, descriptions, analytics values and validation references |
| Application | Relationship chips/context | Recommended Application / Industry field | Keep editable; no product or availability inference |
| Free text | Up to 2,000 characters | Optional, approximately 500 characters | Rework control, counter, validation and stress tests |
| Page content | Form plus category education and FAQ | Intro → details → request details → review → submit → success | Remove non-transaction content |
| Success | Extended human-review/no-file outcome language | Exact receipt heading and Business Email follow-up | Remove SLA, approval, availability and immediate RFQ push |
| SEO | Utility/no primary keyword | Same | Keep `NO_PRIMARY_KEYWORD`; strengthen cannibalisation exclusions |

## 2. Current Gate impact

| Gate | Rebased-version status | Required future work |
|---|---|---|
| Gate 1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | Project-control review and user confirmation of Page Intent Card |
| Gate 2 | `NOT_STARTED_FOR_REBASED_VERSION` | Create new module order, full copy, CTA/SEO/GEO/Schema and link contract only after Gate 1 approval |
| Gate 3 | `NOT_STARTED_FOR_REBASED_VERSION` | Create new 1440/768/390 wireframes and all states from approved Gate 2 |
| Gate 4 | `NOT_STARTED_FOR_REBASED_VERSION` | Establish approved visual direction from the new wireframes |
| Gate 5 | `NOT_STARTED_FOR_REBASED_VERSION` | Produce complete visuals only after Gate 4 approval |
| Gate 6+ | `NOT_AUTHORIZED` | No action |

## 3. Existing V0.2 provenance handling

The following were produced through an incorrect Gate 5 authority inheritance:

- V0.2 Brief;
- V0.2 Gate 2 content architecture;
- V0.2 Gate 3 wireframe specification;
- V0.2 Gate 4 visual direction;
- V0.2 Gate 5 visual specification;
- five V0.2 PNG assets;
- V0.2 Gate 1–5 Manifest;
- V0.2 Gate 5 review submission.

They are preserved without deletion as:

`OUT_OF_SCOPE_DRAFT / NOT_CURRENT_CONTROL / NOT_APPROVED / PRESERVED_FOR_PROVENANCE`.

They are excluded from current authority, consumption and visual-baseline order. Their existence does not advance the rebased page beyond Gate 1.

## 4. Keyword-master impact

The targeted CONV-DOC row correction correctly reflects V1.1 and remains in place. It is not rolled back. No other keyword-master row, URL, primary keyword, page type, mapping status or verification status changes.

## 5. Global and adjacent-page impact

- DOC-000: no modification and no ownership transfer.
- Global Chrome: no modification; permanent RFQ remains shared.
- Product/Application/Market pages: no modification; only future editable prefill ownership is described.
- D16 development project: no access or action.
- No new visual, code, test, route, CMS, branch, deployment or release artifact is authorised by this analysis.

## 6. Risks and release boundary

If the historical V0.2 assets are consumed before Gate 1 confirmation, they could reintroduce unauthorised current-state claims and bypass the standard Gate sequence. The current Manifest must therefore be the sole authority and must explicitly label every V0.2 Gate 2–5 artifact as non-current.

Privacy copy, receiver readiness, document inventory, applicability, approval, release and SLA remain frozen. These gaps do not block Gate 1 review; they block unsupported later claims and eventual release.

## 7. Recommendation to project control

Review only the Gate 1 Page Intent Card, keyword/evidence audit and this impact analysis. If acceptable, move to user confirmation while keeping checkpoint `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION`. Do not mark Gate 1 confirmed, start Gate 2 or consume V0.2 visuals without the required next approval.
