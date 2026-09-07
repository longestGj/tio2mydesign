# Product Detail Gate 7 Route, Form, Gate 8 and Gate 9 Acceptance V0.2

## 1. Control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-G7-ROUTE-QA-01` |
| Gate 7 Review ID | `PRODUCT-DETAIL-G7-PCR-02` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Parent return | `PRODUCT-DETAIL-G7-PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Gate 8 | `NOT_AUTHORIZED` |
| Gate 9 | `NOT_STARTED` |

## 2. Readiness resolver

Every contextual body route key resolves inside `site_scope=tio2-my` to one controlled state:

| State | Meaning | Grade Detail behavior |
|---|---|---|
| `LIVE_APPROVED` | Destination approved, functional and publicly reachable | Render eligible link/action |
| `PREVIEW_ONLY` | Destination exists for authenticated review | Do not render publicly |
| `NOT_READY` | Planned/provisional or implementation incomplete | Fail closed; omit link/action |
| `DISABLED` | Explicitly withdrawn or unsafe | Omit and invalidate scoped caches |

CMS contextual route keys are not converted to public URLs until the resolver returns `LIVE_APPROVED`.

### Fixed Global Chrome RFQ exception

The shared Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer RFQ is permanently visible and permanently targets `/request-a-quote/`. It is not omitted by the resolver. When `RFQ_ROUTE_READY=false`, public release is blocked; the fixed RFQ remains visible and cannot be disabled, emptied or rerouted to Contact. Hero RFQ remains a contextual body action and may be omitted until the external receiver is READY.

## 3. Destination readiness matrix

| Destination family | Current planning status | Product Detail Gate 8 integration requirement | Gate 9 release test |
|---|---|---|---|
| Coatings Application | `PROVISIONAL_URL` | Consume only after the APP-COAT owner independently reaches READY; generate correct scoped link | Link present only if crawlable and content owner is correct |
| Other Applications | Mixed planned/provisional | Consume owner-delivered READY routes and validate PRODUCT V0.3 relation | No link to unready or unrelated Application |
| RFQ | `PLANNED_CONVERSION` | Consume the external `CONV-RFQ` receiver and generate scope/grade/source prefill; domain remains optional. Shared RFQ always visible; Hero RFQ is contextual | Receiver READY and submission works before release; no Contact fallback |
| Request Sample | `PLANNED_CONVERSION` | Consume external `CONV-SAMPLE` only after READY; generate grade/source/scope prefill | Integrated READY journey verified; no free/dispatch promise |
| Request Documents | `PLANNED_CONVERSION` | Consume external `CONV-DOC` only after READY; generate grade/source/type/destination prefill | Integrated READY journey verified; no availability promise or wrong-grade request |
| Market EU/UK/India/Brazil | Approved architecture; live status unproven here | Consume independently READY Market routes only | Only successful approved destinations render |
| Chloride/Sulfate Process | Approved architecture; live status unproven here | Consume independently READY Process routes and validate relation | Only verified process and functional destination link render |
| Documents information pages | Planned/provisional evidence states | Consume independently READY Document routes/current public wording | No unsupported compliance/document statement or dead link |
| Related Grade routes | Identity approved; page runtime varies | Consume independently authorized and READY Grade routes with approved public context | No link to unready shell or unsupported comparison |

Route incompleteness does not block Gate 6 closure or Gate 7 package review. It is enforced during Gate 8 implementation and becomes a Gate 9/public-release blocker when a required visible journey cannot work safely.

## 4. Fail-closed rules

- No Contact fallback for RFQ, Sample or Request Documents.
- Fixed shared Global Chrome RFQ never hides or disables. Its receiver unreadiness blocks release.
- No placeholder page, `#`, JavaScript no-op or disabled-looking active link.
- No hard-coded provisional URL bypassing the resolver.
- No fallback to another `site_scope`, TIOVAR, a frozen site or a generic global record.
- No borrowed media, menu, SEO or form receiver from another site.
- No unready route in visible section navigation, Schema, Open Graph, analytics label or prefetch payload.
- A verified factual Application name may remain unlinked when its destination is not ready; a CTA cannot.

## 5. External receiver integration contract

RFQ, Sample and Request Documents receivers are owned by their own Page IDs, Briefs and Gates. The Product Detail task does not implement them. The requirements below define what must be true before the template may consume a receiver.

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

## 6. Product Detail Gate 8 implementation checklist

- [ ] Implement shared Product Detail template, scoped public projection and conditional-component infrastructure.
- [ ] Implement one M-350 candidate from the approved Gate 5 V0.5 example.
- [ ] Keep the other 13 Grade identities as data-contract registrations only; create no public route, indexable shell, placeholder page or copied M-350 content.
- [ ] Public projection excludes pending, not-public and no-public data before serialization.
- [ ] Shared Global Chrome V0.5 and Production SVG keys consumed; no private Header/Footer.
- [ ] Integrate the external scoped route-readiness resolver for contextual actions and fail closed when destinations are not READY.
- [ ] Preserve shared Global Chrome RFQ visibility and `/request-a-quote/` target regardless of receiver readiness; block release when it is not READY.
- [ ] Integrate RFQ, Sample and Request Documents only after their external owner reports READY; generate correct scoped prefill.
- [ ] Confirm the external RFQ receiver keeps domain optional.
- [ ] Cache/query/media/menu/form/analytics isolation tested.
- [ ] Product and Breadcrumb JSON-LD generated from visible scoped content.
- [ ] Conditional modules leave no wrapper, anchor or hidden leakage.
- [ ] Shared projection tests cover PRODUCT V0.3 boundaries without creating M-2377, M-996 or M-2196 pages.
- [ ] Responsive/a11y requirements implemented for representative and long-content states.
- [ ] No deployment, indexing or publication occurs without later authorization.

## 7. Gate 9 read-only QA checklist

- [ ] Verify the shared template infrastructure and the authorized M-350 implementation candidate only.
- [ ] Do not require or test public routes for the other 13 Grades until each receives independent content/TDS and implementation authorization.
- [ ] Compare CMS public projection, rendered HTML, metadata and JSON-LD.
- [ ] Crawl every visible internal link and action; confirm resolver state and destination ownership.
- [ ] For externally READY and integrated receivers, submit RFQ, Sample and Document journeys with correct grade/source/scope.
- [ ] Confirm fixed Global Chrome RFQ remains visible and targets `/request-a-quote/`; if the receiver is not READY, record a release blocker rather than a hidden CTA.
- [ ] Confirm no Contact, placeholder or cross-scope fallback under failure conditions.
- [ ] Inspect 1440, tablet, 430, 390, narrow mobile and 200% zoom.
- [ ] Test keyboard order, focus, Menu semantics, hidden navigation and form errors.
- [ ] Confirm touch targets ≥44px and no horizontal overflow.
- [ ] Verify technical table meaning in visual and accessibility trees.
- [ ] Scan for all 54 no-public relationships, M-2377 Specialty Materials/Rubber and frozen comparison leakage.
- [ ] Confirm no route, shell, placeholder, API projection or rendered payload was created for the other 13 Grades.
- [ ] Confirm shared production SVG and current Footer/visible-current rules.

## 8. Release blockers

The following block public release even if visual rendering appears complete:

- fixed RFQ receiver is not READY, does not resolve or does not submit, while the shared RFQ remains visible;
- a contextual action renders for an unready destination;
- wrong grade, source or site scope reaches a receiver;
- Contact/placeholder/cross-scope fallback occurs;
- pending/not-public/no-public fact leaks into HTML, API or Schema;
- any public route, shell, placeholder or copied M-350 content appears for another grade;
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
5. Re-run Gate 9 checks only for authorized implemented Grade routes and affected shared-template surfaces.
6. Do not substitute another site's page or receiver during rollback.

## 10. Hard stop

This Gate 7 document does not authorize Gate 8, implementation, testing, deployment, publication or `D:\16Wordpress_nextjs` access.
