# Product Detail Gate 7 Route, Form, Gate 8 and Gate 9 Acceptance V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-G7-ROUTE-QA-01` |
| Gate 7 Review ID | `PRODUCT-DETAIL-G7-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 8 | `NOT_AUTHORIZED` |
| Gate 9 | `NOT_STARTED` |

## 2. Readiness resolver

Every route key resolves inside `site_scope=tio2-my` to one controlled state:

| State | Meaning | Grade Detail behavior |
|---|---|---|
| `LIVE_APPROVED` | Destination approved, functional and publicly reachable | Render eligible link/action |
| `PREVIEW_ONLY` | Destination exists for authenticated review | Do not render publicly |
| `NOT_READY` | Planned/provisional or implementation incomplete | Fail closed; omit link/action |
| `DISABLED` | Explicitly withdrawn or unsafe | Omit and invalidate scoped caches |

CMS route keys are not converted to public URLs until the resolver returns `LIVE_APPROVED`.

## 3. Destination readiness matrix

| Destination family | Current planning status | Gate 8 implementation requirement | Gate 9 release test |
|---|---|---|---|
| Coatings Application | `PROVISIONAL_URL` | Final approved mapping, route response and scoped content | Link present only if crawlable and content owner is correct |
| Other Applications | Mixed planned/provisional | Same resolver and PRODUCT V0.3 relation validation | No link to unready or unrelated Application |
| RFQ | `PLANNED_CONVERSION` | Standalone receiver, validation, consent, success/failure, grade/source/scope prefill; domain optional | Header/Hero/Footer actions resolve and submit; no Contact fallback |
| Request Sample | `PLANNED_CONVERSION` | Receiver, validation, consent, success/failure and grade/source/scope prefill | Submission verified; no free/dispatch promise |
| Request Documents | `PLANNED_CONVERSION` | Receiver and grade/source/type/destination prefill; neutral availability wording | Submission verified; no availability promise or wrong-grade request |
| Market EU/UK/India/Brazil | Approved architecture; live status unproven here | Scope-safe pages and resolver entries | Only successful approved destinations render |
| Chloride/Sulfate Process | Approved architecture; live status unproven here | Scope-safe pages and process relation validation | Only verified process and functional destination link render |
| Documents information pages | Planned/provisional evidence states | Evidence-safe page, resolver entry and current public wording | No unsupported compliance/document statement or dead link |
| Related Grade routes | Identity approved; page runtime varies | Exact target resolver and approved public context | No link to unready shell or unsupported comparison |

Route incompleteness does not block Gate 6 closure or Gate 7 package review. It is enforced during Gate 8 implementation and becomes a Gate 9/public-release blocker when a required visible journey cannot work safely.

## 4. Fail-closed rules

- No Contact fallback for RFQ, Sample or Request Documents.
- No placeholder page, `#`, JavaScript no-op or disabled-looking active link.
- No hard-coded provisional URL bypassing the resolver.
- No fallback to another `site_scope`, TIOVAR, a frozen site or a generic global record.
- No borrowed media, menu, SEO or form receiver from another site.
- No unready route in visible section navigation, Schema, Open Graph, analytics label or prefetch payload.
- A verified factual Application name may remain unlinked when its destination is not ready; a CTA cannot.

## 5. Receiver form contract

### RFQ

Required journey data: site scope, grade, source page, company, business email, destination, Application/requirements, quantity context, document/sample need and consent. Website/domain is optional.

### Sample

Required journey data: site scope, grade, source page, buyer/company context, destination, Application, evaluation objective and consent.

### Request Documents

Required journey data: site scope, grade, source page, selected document types where applicable, company/business email, destination and consent.

All receivers:

- show the selected grade to the buyer;
- validate required inputs with field-specific errors;
- preserve privacy/consent requirements;
- expose explicit success and recoverable failure states;
- avoid response-time, approval, document-availability, free-sample, stock or delivery promises;
- prevent duplicate or cross-scope routing;
- log source/grade/action without logging non-public product evidence.

## 6. Gate 8 implementation checklist

- [ ] Exact 14 canonical routes implemented under `site_scope=tio2-my` without creating final copy from placeholders.
- [ ] Public projection excludes pending, not-public and no-public data before serialization.
- [ ] Shared Global Chrome V0.5 and Production SVG keys consumed; no private Header/Footer.
- [ ] Route resolver implements all four states and fails closed.
- [ ] RFQ, Sample and Request Documents receivers implement scoped prefill, validation, consent and outcomes.
- [ ] Domain remains optional on RFQ.
- [ ] Cache/query/media/menu/form/analytics isolation tested.
- [ ] Product and Breadcrumb JSON-LD generated from visible scoped content.
- [ ] Conditional modules leave no wrapper, anchor or hidden leakage.
- [ ] M-2377 and M-996/M-2196 boundaries covered by tests.
- [ ] Responsive/a11y requirements implemented for representative and long-content states.
- [ ] No deployment, indexing or publication occurs without later authorization.

## 7. Gate 9 read-only QA checklist

- [ ] Verify successful canonical response, redirect variants, self-canonical and index state for each implemented Grade route.
- [ ] Compare CMS public projection, rendered HTML, metadata and JSON-LD.
- [ ] Crawl every visible internal link and action; confirm resolver state and destination ownership.
- [ ] Submit RFQ, Sample and Document test journeys with correct grade/source/scope.
- [ ] Confirm no Contact, placeholder or cross-scope fallback under failure conditions.
- [ ] Inspect 1440, tablet, 430, 390, narrow mobile and 200% zoom.
- [ ] Test keyboard order, focus, Menu semantics, hidden navigation and form errors.
- [ ] Confirm touch targets ≥44px and no horizontal overflow.
- [ ] Verify technical table meaning in visual and accessibility trees.
- [ ] Scan for all 54 no-public relationships, M-2377 Specialty Materials/Rubber and frozen comparison leakage.
- [ ] Confirm other 13 grades expose no M-350 copy, values, media or Schema.
- [ ] Confirm shared production SVG and current Footer/visible-current rules.

## 8. Release blockers

The following block public release even if visual rendering appears complete:

- required receiver action does not resolve or submit;
- wrong grade, source or site scope reaches a receiver;
- Contact/placeholder/cross-scope fallback occurs;
- pending/not-public/no-public fact leaks into HTML, API or Schema;
- M-350 content appears on another grade;
- M-996/M-2196 comparison hold or M-2377 exclusion is violated;
- canonical, robots, metadata or Breadcrumb disagrees with the visible route;
- shared Global Chrome/Production SVG contract is not consumed;
- critical responsive, keyboard, focus, table-semantic or form-accessibility failure.

## 9. Rollback boundary

If a shared template defect is found after an implementation candidate exists:

1. Disable the affected scoped route/module/action through approved recoverable controls.
2. Preserve approved content and historical versions; do not overwrite evidence.
3. Invalidate only affected `tio2-my` caches.
4. Revert the shared template/component version through the external development workflow.
5. Re-run Gate 9 checks for every affected Grade route.
6. Do not substitute another site's page or receiver during rollback.

## 10. Hard stop

This Gate 7 document does not authorize Gate 8, implementation, testing, deployment, publication or `D:\16Wordpress_nextjs` access.
