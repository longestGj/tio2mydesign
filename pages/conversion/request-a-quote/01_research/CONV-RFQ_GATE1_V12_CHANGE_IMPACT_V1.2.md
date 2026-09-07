# CONV-RFQ V1.2 Gate 1 Change Impact Analysis

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-RFQ-G1-V12-REBASE-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Scope | Impact of the approved V1.2 change input on retained V0.x Gate 2–5 artifacts |
| Rework authority | Gate 1 only; this document does not revise Gate 2–5 content or visuals |

## 1. Rebase reason

The previous RFQ work progressed to unapproved Gate 5 candidates before the new Gate 1–5 standard and the V1.2 user direction established a different content and field contract. V1.2 therefore reopens Gate 1 and removes all former Gate 2–5 artifacts from current control without deleting them.

## 2. Impact by content area

| Area | Historical V0.x | V1.2 direction | Impact |
|---|---|---|---|
| Page body | Intro/form compositions plus long supporting modules | Standard Hero → one form flow → Alternative Conversion | Full Gate 2–5 rework required |
| Selected context | Visible prefill notice/block | Editable preselection inside form fields only | Remove independent block |
| Grade selection | Known/multiple/unknown paths | Required single-select 14 grades + Need help | Data and state contract replaced |
| Application | Earlier taxonomy and relation hints | Exact seven-value taxonomy; no PVC | Options replaced |
| Recommendation | Restricted but relation-aware context existed | No recommendation, priority or Application→Grade logic | Remove any such mechanism |
| Buyer data | No Phone/Website | Both optional | Privacy/data model expands |
| RFQ fields | Packaging, documents and sample-interest included | Remove as separate fields | Minimum form reduced |
| CTA | `Submit RFQ for Review` | `REQUEST QUOTE` | Copy and shared style reference replaced |
| Success | Long receipt/non-approval list | Concise three-part candidate | Buyer copy replaced; internal contract retained |
| Failure | Long channel-free explanation | Concise error + `TRY AGAIN` | Buyer copy replaced; value preservation remains internal |
| Privacy | Unapproved inline slot; no Privacy page | Independent Privacy page approved as external dependency | New route dependency; RFQ cannot build page |
| Supporting content | Preparation, Human Review and FAQ sections | Not current | Remove from Gate 2 skeleton unless later user-approved |
| Alternative routes | Sample/document needs inside form | Low-weight Request Sample and Request Documents links | Conditional route-gated module added |

## 3. Historical artifact disposition

| Historical artifact family | Disposition | Reason |
|---|---|---|
| Brief V0.1 | `HISTORICAL / SUPERSEDED_BY_BRIEF_V1.2 / NOT_CURRENT_CONTROL` | Old Gate and field contract |
| Gate 2 content architecture V0.1 | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | Module, field, CTA, copy and privacy changes |
| Gate 2 SEO/GEO/Schema V0.1 | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | Must follow new content and privacy dependencies |
| Gate 3 wireframe V0.1 | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | No current V1.2 content baseline; 768px standard not met by old 834px evidence |
| Gate 4 visual directions V0.1/V0.2 | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | V1.2 has not entered visual review |
| Gate 5 visual specifications V0.1/V0.2 | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | Old page/module/field/copy contracts |
| Gate 5 PNGs and state boards | `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL` | No visual asset is current in Gate 1 V1.2 |
| Gate 4/5 review submissions V0.x | `HISTORICAL SUBMISSION RECORD / NOT_CURRENT_CONTROL` | Submission did not equal approval and is superseded by this rebase |

## 4. SEO and internal-link impact

- Page ID, `/request-a-quote/`, primary keyword, search intent and cannibalization boundary do not change.
- `/request-quote` examples are invalid and must not be consumed later.
- Product/Application entry links will need Gate 2 query contracts using the canonical route.
- Sample/Documents links become conditional downstream links, not form fields or failure fallbacks.
- The future Privacy Policy creates an external dependency and Footer impact controlled outside CONV-RFQ.
- No new page, URL, Canonical or indexing change is made by this Gate 1 task.

## 5. Product and data impact

- Product selection changes from multi-path/multi-grade to one required selector.
- PRODUCT V0.3 remains authoritative for neutral evidence boundaries but no longer drives recommendations.
- Phone / WhatsApp and Website add privacy/data-handling scope.
- Removed fields must not remain hidden, required or machine-readable in a later implementation.
- Historical visual form fixtures cannot be reused as current field acceptance evidence.

## 6. Responsive and visual carry-forward

No historical layout, component or image is a current V1.2 authority. Later authorized Gates must create:

- 1440px Desktop;
- 768px Tablet;
- 390px Mobile;
- Mobile Menu open;
- applicable form states using concise Buyer Clean copy.

Shared Global Chrome remains a referenced authority and is not modified. The old 834px Tablet reference is not valid evidence for the new 768px requirement.

## 7. Risks and rollback

| Risk | Control |
|---|---|
| Old highest-version visual is mistaken as current | Current Manifest declares all V0.x Gate 2–5 artifacts non-current |
| Privacy page approval is treated as RFQ build authority | Record as external dependency only |
| Removed fields leak into later form | Gate 2 must consume the V1.2 field audit, not V0.x form files |
| Application value implies grade fit | Single selectors remain independent; no recommendation logic |
| Alternative conversion appears before routes are ready | Fail closed; hide links without replacing them with Contact |
| Concise success copy loses commercial boundary | Keep the boundary in workflow/data contract and natural separate-review wording |

Rollback does not reactivate V0.x as current because those artifacts were never approved. If V1.2 is rejected, project control must issue a new decision identifying the next current Gate 1 baseline.

## 8. Required synchronization

- New Brief V1.2.
- Gate 1 intent/field/evidence audit V1.2.
- Current Gate Baseline Manifest V1.2.
- Project-control review submission V1.2.
- Page README, project status and project index current entries.

No Gate 2–5 file is rewritten in this task.
