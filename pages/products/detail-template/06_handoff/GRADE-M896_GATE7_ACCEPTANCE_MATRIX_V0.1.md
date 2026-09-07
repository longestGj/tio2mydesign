# GRADE-M896 Gate 7 Acceptance Matrix V0.1

## 1. Control

| Field | Value |
|---|---|
| Matrix ID | `GRADE-M896-G7-ACCEPTANCE-01` |
| Date | `2026-09-02` |
| Status | `CANDIDATE_VALIDATED_PENDING_CONTROLLER_02_REVIEW` |
| Gate 8 | `NOT_STARTED` |

## 2. Planning-package acceptance

| Area | Requirement | Candidate result |
|---|---|---|
| Identity | Registry, keyword master, PRD, Brief and payload agree | PASS candidate |
| Serial scope | Only M-896 active; no other Grade prepared | PASS |
| Evidence | Dedicated TDS exists, matches M-896 and is readable | PASS |
| Relationship | Coatings/Chloride consistent with PRODUCT V0.3 | PASS |
| Technical | 11 source-bound rows, values/units/methods preserved | PASS |
| Buyer Clean | No internal governance/freeze/preview words in public copy section | PASS |
| Unsupported facts | Origin, comparison, negative suitability, logistics and document availability excluded | PASS |
| Content completeness | Hero through Sample/standalone RFQ copy complete | PASS candidate |
| SEO boundary | Exact M-896 intent only | PASS |
| GEO/Schema | Visible facts only; no Offer/FAQ/origin/manufacturer/certification | PASS |
| Template fit | No new component, interaction or visual language | PASS candidate |
| Machine contract | Complete JSON payload parses | PASS |
| Release controls | Gate 8/index/sitemap/deploy/publish all false | PASS |
| Site isolation | `site_scope=tio2-my`; no fallback contract | PASS |
| Handoff boundary | Package marked NOT_HANDED_OFF | PASS |

## 3. Exact count parity

| Item | Expected |
|---|---:|
| Breadcrumb items | 3 |
| Hero facts | 5 |
| Hero primary/secondary actions | 2 |
| Hero Documents/TDS actions | 0 |
| Application items | 6 |
| Evaluation groups | 2 |
| Evaluation items | 8 |
| Technical columns | 3 |
| Technical rows | 11 |
| Document options | 2 |
| Market destinations | 4 |
| Related Grade items | 0 / field absent |
| Public Origin claims | 0 |
| Not Recommended claims | 0 |

Mechanical rule: parsed JSON must satisfy `hero.actions.length <= 2`, and no Hero action may target `CONV-DOC` or carry `requested_type=TDS`.

## 4. Route and prefill parity

| Target | Page ID | Expected prefill | Behavior |
|---|---|---|---|
| RFQ | CONV-RFQ | `tio2-my / M-896 / GRADE-M896` | Conditional |
| Sample | CONV-SAMPLE | `tio2-my / M-896 / GRADE-M896` | Conditional |
| Documents | CONV-DOC | same + `TDS` | Conditional |
| Process | PRODUCT-PROC-CL | none | Conditional link/text fallback |
| Application | APP-COAT | none | Conditional link/text fallback |
| Markets | four approved Page IDs | none | Conditional cards |

## 5. Gate 8 / Gate 9 acceptance to execute later

| Category | Required evidence |
|---|---|
| WordPress | Exact independent M-896 scoped record and approved-contract hash binding |
| Resolver | Identity agreement, 404 and no-fallback evidence |
| Next.js | Exact page copy, metadata, Schema and conditional module output |
| Regression | M-350, M-510, Product Hub and Global Chrome unchanged |
| Responsive | 1440/1024/768/430/390/320 plus 200% zoom-equivalent |
| Accessibility | Keyboard, focus, names, heading order, contrast/touch targets |
| Tooling | Relevant tests, typecheck, lint and clean-worktree evidence |
| Release | Preview/noindex/sitemap exclusion and all release blockers retained |

## 6. Open freezes

| Freeze | Public behavior | Gate impact |
|---|---|---|
| Printed TDS version/date not visible | Do not display version/date | Non-blocking |
| Origin/manufacturing/COO/traceability | Module absent | Non-blocking |
| Related-grade rationale | Module absent | Non-blocking |
| Not Recommended evidence | Module absent | Non-blocking |
| Other-document availability | No availability list/promise | Non-blocking |
| Downstream receiver/route readiness | Conditional omission/fail-closed | Blocks corresponding action at runtime, not the package |
| Gate 10 | All release controls remain closed | Blocks publication/indexing |
