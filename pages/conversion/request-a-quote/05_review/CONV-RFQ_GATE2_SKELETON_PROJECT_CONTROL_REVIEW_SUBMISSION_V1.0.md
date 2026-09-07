# CONV-RFQ Gate 2 Skeleton Project-control Review Submission V1.0

## 0. Submission control

| Field | Value |
|---|---|
| Review ID | `CONV-RFQ-G2-SKELETON-01` |
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 2 — content-skeleton checkpoint |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_SKELETON_PENDING_USER_CONFIRMATION` |
| Gate 1 | `CONV-RFQ-G1-V12-DIRECTED-03 = APPROVED / CLOSED` |
| Authorization | User instruction `启动Gate2`, 2026-09-01 |
| Requested action | Project-control review; if passed, request user confirmation of the content skeleton before full Gate 2 copy |

Submission is not project-control PASS, user approval, a completed Gate 2, Gate 3 authorization or development authority.

## 1. Review payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.2.md` | 16,624 | `D0EB8C435616B5EE5DEC43F573D4F0C792421284F836E2D8B6DF4EFEF4A0722F` | Approved Gate 1 page contract |
| `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_INTENT_FIELD_EVIDENCE_REBASE_V1.2.2.md` | 12,293 | `22F6228DB5589A3A6587A813CE464FB05FB8363B799101E85F52FF7403F7087D` | Approved Gate 1 evidence and relationship audit |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_CONTENT_SKELETON_V1.0.md` | 15,234 | `C5CD8C02141599882D859BBCE0B01636546F2DCAD9285741F6D784ED04ACF843` | H1, Hero, module/form order, exact state copy, CTA and link skeleton |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.0.md` | 7,930 | `B72D70F2E2FF68387C19276B3A7C6DC9101C37E9A160A58BFA7FF7B1F25ED747` | SEO/GEO/Schema direction |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.3.md` | 11,996 | `72B89CAA6507CC120DF88FDC0593B2628D91BD5A77DF45646A031B47AA695D07` | Current unique Gate 1–5 control Manifest |

## 2. Skeleton decisions submitted

| Decision | Submission result |
|---|---|
| H1 `Request a Titanium Dioxide Quote` | SUBMITTED |
| Hero states grade/application, MT quantity, destination and unknown-grade path | SUBMITTED |
| Module order: shared Header → breadcrumb → Hero → one RFQ form → Alternative Requests → shared Footer | SUBMITTED |
| No long Human Review or FAQ module | PASS AGAINST APPROVED GATE 1 |
| Desktop remains one page flow with form-internal two-column Grid; Tablet/Mobile single-column | PASS AGAINST APPROVED GATE 1 |
| One Product / Grade selector with 14 grades + Need help | PASS AGAINST APPROVED GATE 1 |
| Application seven-value taxonomy; no automatic grade selection | PASS AGAINST APPROVED GATE 1 |
| Only public unit is `Metric tonnes (MT)` | PASS AGAINST APPROVED GATE 1 |
| Required/optional fields match approved minimum set | PASS AGAINST APPROVED GATE 1 |
| Exact success, failure and privacy text retained | PASS AGAINST APPROVED GATE 1 |
| Low-weight Sample/Documents links retained in complete final experience | PASS AGAINST APPROVED GATE 1 |
| Contact absent as failure/unavailable fallback | PASS |
| PRODUCT V0.3 restrictions retained | PASS |
| Global Chrome V0.5 unchanged | PASS |
| Title/Meta/H1/Canonical/robots recommendation submitted | SUBMITTED |
| Schema limited to `WebPage` + `BreadcrumbList` and stable site references | PASS |

## 3. Superseded-source normalization

Earlier Playbook and V0.1 Gate 2 artifacts are not consumed where they conflict with the approved page-specific Gate 1 contract. The current skeleton does not restore:

- multiple-grade paths;
- Packaging, Document Needs or Sample Interest fields;
- kg or Other quantity units;
- receipt/consent acknowledgement checkbox;
- old submit, success, failure or privacy copy;
- long Human Review or FAQ modules;
- route-readiness-based hiding of Privacy, Sample or Documents links;
- Contact as a fallback.

Historical files remain unchanged and non-current.

## 4. Gate 2 standard coverage at the skeleton checkpoint

| Required skeleton item | Evidence | Result |
|---|---|---|
| H1 and Hero core message | Content Skeleton §§2–3 | PRESENT |
| Module order and buyer purpose | Content Skeleton §2 | PRESENT |
| Primary/secondary CTA and URLs | Content Skeleton §§4, 8–9 | PRESENT |
| Form field order and exact values | Content Skeleton §4 | PRESENT |
| Prefill and upstream context | Content Skeleton §6 | PRESENT |
| Validation/focus/failure/success/unavailable direction | Content Skeleton §7 | PRESENT |
| Product/evidence restrictions | Content Skeleton §11 | PRESENT |
| Global Chrome and whole-site dependency direction | Content Skeleton §§8, 10–11 | PRESENT |
| SEO Title, Meta, Canonical, robots | SEO/GEO Direction §2 | PRESENT |
| GEO entities and extractable answers | SEO/GEO Direction §4 | PRESENT |
| Schema scope and visible/machine parity | SEO/GEO Direction §§5–6 | PRESENT |
| Complete full copy | NOT YET REQUIRED / AFTER SKELETON CONFIRMATION |
| `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` | OPEN / NOT CLAIMED |

## 5. Requested project-control decisions

1. Confirm or return the proposed H1 and Hero paragraph.
2. Confirm or return the six-stage page order and three form groups.
3. Confirm or return the exact validation-summary and field-error copy direction.
4. Confirm or return the Alternative Requests heading, introduction and link treatment.
5. Confirm or return the proposed SEO Title, Meta Description, index/follow recommendation and WebPage/BreadcrumbList-only Schema scope.
6. If project-control passes, present the skeleton to the user before any complete Gate 2 copy is described as confirmed.

## 6. Open dependencies

| Item | Status | Effect |
|---|---|---|
| Gate 2 skeleton review | OPEN | Blocks user skeleton confirmation |
| User skeleton confirmation | OPEN | Blocks complete Gate 2 copy |
| Privacy/legal/cookie shared routes and production data flow | PARALLEL | Included in final design; verify Gate 7–9 and before release |
| RFQ receiver and workflow owner | NOT VERIFIED | Blocks operational release; does not justify invented Buyer Clean copy |
| RFQ/Sample/Documents route readiness | NOT TESTED | Later release verification; final links remain in Gate 1–5 target |
| Canonical/robots activation | NOT AUTHORIZED | Recommendation only |

## 7. Stop statement

Work stops at the Gate 2 skeleton submission. Full Gate 2 copy, `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`, Gate 3, wireframes, visual direction, complete visual, code, development, route creation, legal-page implementation, deployment, publication and indexing are not claimed or authorized by this submission.

## 8. Validation record

| Check | Result |
|---|---|
| Current Gate 2 skeleton files | `4/4 PASS` |
| Review ID and draft/checkpoint consistency | `4/4 PASS` |
| H1, Hero and six-stage page order | `PASS` |
| Product/Grade, Application and unknown-grade path | `PASS` |
| Only public unit `Metric tonnes (MT)` | `PASS` |
| Phone/WhatsApp and Website optional contract | `PASS` |
| Exact success, failure and privacy strings | `PASS` |
| PRODUCT V0.3 restricted relationships | `PASS` |
| Desktop internal Grid and Tablet/Mobile single-column direction | `PASS` |
| Sample/Documents final links and no Contact fallback | `PASS` |
| SEO Title / Meta character lengths | `47 / 149 / PASS` |
| Schema allowed/prohibited coverage | `PASS` |
| Current payload and Manifest hash references | `PASS` |
| Review/index targets | `8/8 PASS` |
| Full-copy checkpoint claimed | `NO / PASS` |
| Gate 3 authorization | `NOT_STARTED / NOT_AUTHORIZED / PASS` |

The residual scan found no active multiple-grade path, Packaging/Document Needs/Sample Interest field, alternate quantity unit, acknowledgement checkbox, old submit/state copy, route-hide rule or Contact fallback. Historical documents may retain those terms only as superseded evidence.
