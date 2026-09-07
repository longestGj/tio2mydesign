# GRADE-M896 Gate 7 Acceptance Matrix V0.2

## 1. Control

| Field | Value |
|---|---|
| Matrix ID | `GRADE-M896-G7-ACCEPTANCE-02` |
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
| Machine contract | Complete JSON payload parses and aligns to M-510 public top-level/identity/release/module-status shape | PASS |
| Hero visual | Four required neutral keys; no filename-only version/date or origin/factory/packaging implication | PASS |
| Application DTO | 6/6 application items include `category=Coatings` | PASS |
| Technical compatibility | M-896 keeps `value/testMethod`; Gate 8 generalizes shared mapper without legacy regressions | PASS candidate |
| Release controls | Public content contract contains only `indexingAuthorized=false` and `sitemapAuthorized=false` | PASS |
| Site isolation | `site_scope=tio2-my`; no fallback contract | PASS |
| Handoff boundary | Package marked NOT_HANDED_OFF | PASS |

## 3. Exact count parity

| Item | Expected |
|---|---:|
| Breadcrumb items | 3 |
| Hero visual keys | 4 |
| Hero facts | 5 |
| Hero primary/secondary actions | 2 |
| Hero Documents/TDS actions | 0 |
| Application items | 6; all `category=Coatings` |
| Evaluation groups | 2 |
| Evaluation items | 8 |
| Technical columns | 3 |
| Technical rows | 11; every row has non-empty `value` and `testMethod` |
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
| Next.js | Exact page copy, metadata, Schema and conditional module output; shared technical-row DTO supports current and legacy shapes |
| Regression | M-350/M-510 visual, HTML, JSON-LD and screenshots; Product Hub and Global Chrome unchanged |
| Responsive | 1440/1024/768/430/390/320 plus 200% zoom-equivalent |
| Accessibility | Keyboard, focus, names, heading order, contrast/touch targets |
| Tooling | Unit/integration/E2E, fail-closed Schema, typecheck, lint and clean-worktree evidence |
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


## 7. Gate 8 technical-row acceptance detail

- M-896 rows use `property + value + optional testMethod`; the visible second column and Product `additionalProperty.value` come from `value`.
- `testMethod` is the visible third column or an optional description only. It cannot replace `value`.
- M-350/M-510 legacy `property + optional standard + typical` continues to map through `typical` without visual, HTML, JSON-LD or screenshot change.
- A missing/empty value-bearing field fails closed: no empty technical cell and no invalid or shifted Schema property.
- Unit, integration and E2E evidence is mandatory before any Grade-specific implementation can pass Gate 8/9.

