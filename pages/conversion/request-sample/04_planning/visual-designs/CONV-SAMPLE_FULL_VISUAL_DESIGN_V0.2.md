# CONV-SAMPLE Full Visual Design V0.2 — Buyer-facing Cleanup and Truthful Release Gate

> Superseded for current visual review by `CONV-SAMPLE_FULL_VISUAL_DESIGN_V0.3.md`, which removes the Desktop long-form/sidebar split and its persistent right-side whitespace. V0.2 is retained as version history.

## 0. Document Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Gate | Gate 5 directed revision |
| Date | 2026-09-01 |
| Parent | V0.1 `Technical Review Desk`; core structure retained |
| Status | `GATE_5_REVISION_SUBMITTED / NOT_APPROVED / RELEASE_BLOCKED` |
| Visual result | `BUYER_FACING_INTERNAL_LANGUAGE_REMOVED` |
| Release result | `FAIL / P0 PRIVACY + RECEIVER + ROUTE BLOCKERS OPEN` |
| SEO/GEO Gate | `PASS_FOR_VISUAL_CONTENT_CONTRACT / INDEXING_DECISION_OPEN` |
| Malaysia-Origin Gate | `PASS_WITH_APPROVED_POSITIONING_BOUNDARY` |
| Authority | Website Review Standard V1.0; keyword master; Conversion Playbook V0.1; Global Chrome V0.5; PRODUCT V0.3 |
| Development boundary | Planning and visual evidence only; no production source, API, server action, CMS, build or deployment work; `D:\16Wordpress_nextjs` not accessed |

V0.2 does not redesign the page. It removes internal QA language from Buyer-facing frames, adds the approved site-positioning entity once, strengthens responsive/state evidence, and keeps every unverified operational dependency red.

## 1. Changes from V0.1

| Area | V0.1 | V0.2 |
|---|---|---|
| Buyer-facing privacy placeholder | Amber `INTERNAL REVIEW / NOT BUYER CLEAN` block visible | Removed from rendered Buyer-facing DOM and all Buyer-facing rasters |
| Internal review board | Privacy blocker present | Retained and expanded with receiver/route/fallback and submitting/idempotency readiness |
| Malaysia-origin entity | Not explicit in page body | Hero supporting copy contains one natural `Malaysia-origin titanium dioxide` reference |
| Sidebar disclaimer | Repeated the full approval/availability/dispatch boundary | Reduced to `Review and any outcome remain separate from submission.` |
| Desktop sidebar | Static short card beside long form | `position: sticky; top: 108px` within the form section; stops before FAQ/Footer |
| Mobile sidebar | Static | Remains static; no sticky behavior |
| Success boundary | Full repeated non-confirmation list | Concise receipt-only boundary; Hero retains the full pre-submit boundary |
| Service unavailable | Correct failure direction plus internal review language | Buyer-clean `Please try again later`; no internal or invented fallback language |
| Submitting | Contract only | Dedicated 390px state with disabled button, `Submitting request…` and `aria-busy` |
| Mobile state coverage | Core states plus boards | Dedicated Empty, Prefill, Unknown, Other, Validation, Submitting, Failure, Success and Service Unavailable frames |
| Accessibility evidence | Structural visual check | Validation controls use `aria-invalid` + `aria-describedby`; summary/panels are focus targets; FAQ controls are native buttons |

## 2. Locked Content Structure

The following remains unchanged:

1. Header.
2. Breadcrumb.
3. `TECHNICAL EVALUATION REQUEST` Hero.
4. H1 `Request a Titanium Dioxide Sample for Technical Evaluation`.
5. `REQUEST → HUMAN REVIEW → SEPARATE OUTCOME` motif.
6. Full pre-submit Request ≠ Approval boundary.
7. Conditional Prefilled Context.
8. Sample Request form with the existing three field groups.
9. Human Review sidebar.
10. FAQ.
11. Deep Navy Footer and permanent RFQ.

No field was added and no sample-order, automatic approval or shipment step was introduced.

## 3. Buyer-facing Copy Revision

### Hero supporting copy

`Share the Malaysia-origin titanium dioxide grade you are considering—or tell us that you are not sure—together with your application, destination and test objective. We will use this context to review the request.`

The phrase appears once on the page. It does not claim duty, anti-dumping, regulatory, availability, performance or eligibility benefits.

### Boundary placement

- Hero: retains the complete request/non-approval boundary.
- Submit area: retains the concise `Submission sends the request for human review; it does not approve or dispatch a sample.`
- Sidebar: `Review and any outcome remain separate from submission.`
- Success: `This receipt confirms receipt only. Sample approval, availability and dispatch remain separate.`

### Service unavailable

`We cannot confirm sample requests right now.`

`The sample request form is not available. No request has been confirmed. Please try again later.`

No email, telephone, Contact fallback, RFQ fallback, ticket, response time or reference number is shown.

## 4. Privacy and Buyer Clean Separation

### Buyer-facing frames

Rendered Buyer-facing DOM and rasters contain zero occurrences of:

- `INTERNAL REVIEW`;
- `NOT BUYER CLEAN`;
- `GATE 5`;
- `approved wording required`;
- placeholder legal copy;
- `restricted state`;
- `unverified`;
- release terminology.

The missing legal notice is **not** replaced with AI-created consent, GDPR, legal-basis, retention, controller, recipient, transfer or non-sharing text.

### Internal state board

The Board remains explicitly internal and continues to show:

- Privacy / Acknowledgement — BLOCKED;
- Receiver / Route / Fallback Readiness — OPEN;
- Unknown Grade — valid;
- Other Application — buyer entered;
- Validation + keyboard focus;
- Submitting / double-submit guard;
- Submission Unconfirmed;
- Receipt Confirmed;
- Human Review;
- Form Service Unavailable.

### Release decision

No approved Privacy wording or Privacy route was found. Privacy / acknowledgement remains a release blocker because no approved wording was found.

Removing internal words from the Buyer-facing visual does not convert the form into a releasable workflow. The production route must remain gated until approved wording is supplied and re-rendered/reviewed.

## 5. Submission Truth Contract

No verified sample-request receiver was found in the permitted project scope. No production source, POST endpoint, server action, CRM, email receiver, webhook, queue or persistence layer exists in `D:\23MySec`.

Therefore:

- Success remains a visual interaction state only.
- A production implementation may show success only after an explicit positive acknowledgement from a verified receiver that accepted/persisted the request.
- Timeout, 5xx, network failure and ambiguous response must enter Submission Unconfirmed.
- Submission Unconfirmed preserves the current form values.
- `Try again` must reuse the same form state.
- The submitting state disables the button and marks the form busy, preventing ordinary UI double-click submission.
- No backend idempotency key, deduplication or duplicate-detection mechanism was found. Duplicate risk after an ambiguous acknowledgement remains open.
- No fake request/reference ID is displayed.

## 6. Prefill and PRODUCT V0.3

- Prefill represents explicit context, not a recommendation.
- The V0.2 prefilled frame shows M-2377 + Coatings + Sulfate + United Kingdom as visible, editable and removable context.
- Application/Grade context is accepted only from an explicit user/upstream value and an approved evidence-backed relation.
- Generic Application context never auto-selects a Grade.
- M-2377 Specialty Materials is not emitted as a relation.
- Rubber remains buyer-entered `Other` text and does not create taxonomy or Schema.
- M-996/M-2196 remain independent equal-weight options with no comparison, equivalence or substitution.
- `NO_PUBLIC_MAPPING` is never rendered as not applicable or unsuitable.

## 7. Responsive and Sidebar Result

### Desktop

- Header: 84px.
- Long form retains the 8/4 split.
- Human Review sidebar is sticky at 108px only within the form-region grid.
- The containing grid prevents it from entering FAQ or Footer.
- No filler testimonials, trust badges, promotion or duplicate FAQ was added.

### 390px

- Header: 64px.
- Sidebar is `position: static` and follows the form.
- All fields stack into one column.
- All interactive targets are at least 44px logical.
- All 390px frames have scroll width exactly 390px.
- Document checkboxes, textareas, error copy, FAQ and Footer remain inside the viewport.

## 8. Accessibility Result

- Persistent `label` / control associations remain.
- Required/Optional appears as text, not color alone.
- Validation controls expose `aria-invalid=true` and `aria-describedby` links to their errors.
- The error summary is focusable and receives focus in the validation state.
- Failure, success and restricted panels are focus targets in their states.
- Selects and checkboxes use native keyboard-operable controls.
- FAQ triggers are native buttons with updated `aria-expanded`.
- Focus uses a visible Navy outline in addition to the error border.
- Desktop sticky top offset prevents the review card from sitting beneath the 84px Header.
- 390px minimum target is 44px and error links meet the same target.

This is visual/interaction-preview evidence, not a production accessibility test of an implemented route.

## 9. SEO / GEO Contract

The verified keyword-master row remains:

| Field | Value |
|---|---|
| Primary keyword | `titanium dioxide sample supplier` |
| Secondary keywords | `request titanium dioxide sample | TiO2 sample request` |
| Search intent | `T` |
| Buyer stage | `Technical Evaluation` |
| URL | `/request-sample/` |
| Page role | Capture qualified sample requests and application context. |
| Exclusions | generic supplier terms; exact Grade primary terms |

The page retains one H1 and no informational-pillar expansion. GEO-visible answers continue to establish sample request, technical evaluation, human review, unknown Grade, Application/Destination/Test Objective, clarification and separate outcome. The Hero adds the Malaysia-origin context once.

Canonical activation, robots and sitemap inclusion remain decision-required; no indexing action was taken.

## 10. Global Chrome

- Production Header and Footer SVGs are unchanged.
- Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer retain permanent RFQ to `/request-a-quote/`.
- Request a Sample is not added to the Header.
- Buyer-visible CURRENT and visible `aria-current=page` remain 0.
- Contact is not used as fallback because `/contact/` remains `CONTACT_DETAILS_REQUIRED`.
- RFQ is not repurposed as a sample fallback; its global presence is maintained exactly as required.

## 11. V0.2 Formal Assets

| Asset | Dimensions | Purpose |
|---|---:|---|
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_UNPREFILLED_BUYER_CLEAN_V0.2.png` | 1440×3853 | Desktop empty form |
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_PREFILLED_BUYER_CLEAN_V0.2.png` | 1440×4150 | Desktop prefilled context |
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_SUCCESS_BUYER_CLEAN_V0.2.png` | 1440×2567 | Desktop receipt-confirmed |
| `assets/CONV-SAMPLE_G5_MOBILE_390_UNPREFILLED_BUYER_CLEAN_V0.2.png` | 780×11164 | 390px empty form |
| `assets/CONV-SAMPLE_G5_MOBILE_390_PREFILLED_BUYER_CLEAN_V0.2.png` | 780×12624 | 390px prefill |
| `assets/CONV-SAMPLE_G5_MOBILE_390_UNKNOWN_GRADE_V0.2.png` | 780×11164 | 390px unknown Grade |
| `assets/CONV-SAMPLE_G5_MOBILE_390_OTHER_APPLICATION_V0.2.png` | 780×11464 | 390px Other Application |
| `assets/CONV-SAMPLE_G5_MOBILE_390_VALIDATION_FOCUS_ERROR_V0.2.png` | 780×12102 | 390px validation/focus/error |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUBMITTING_V0.2.png` | 780×11164 | 390px disabled submitting state |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUBMISSION_FAILURE_V0.2.png` | 780×11600 | 390px failure with retained values |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUCCESS_V0.2.png` | 780×7202 | 390px success |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SERVICE_UNAVAILABLE_V0.2.png` | 780×5258 | 390px unavailable/no fallback |
| `assets/CONV-SAMPLE_G5_MOBILE_390_MENU_OPEN_V0.2.png` | 780×1440 | Mobile Menu |
| `assets/CONV-SAMPLE_G5_DESKTOP_INTERACTION_STATE_BOARD_V0.2.png` | 1440×2038 | Desktop internal state board |
| `assets/CONV-SAMPLE_G5_MOBILE_390_INTERACTION_STATE_BOARD_V0.2.png` | 780×6982 | 390px internal state board |

## 12. Gate Decision

| Dimension | Result |
|---|---|
| Core visual direction | PASS |
| Buyer-facing internal-language cleanup | PASS |
| Responsive visual evidence | PASS |
| SEO/GEO visual/content contract | PASS |
| Malaysia-origin wording boundary | PASS |
| Privacy readiness | FAIL / P0 OPEN |
| Receiver/backend readiness | FAIL / P0 OPEN |
| Verified fallback | FAIL / P0 OPEN |
| Production route | FAIL / P0 OPEN |
| Overall release | `FAIL / BLOCKED` |

The page visual and interaction candidate has been revised, but it cannot pass Gate 5 release. The next valid input is approved Privacy wording and verified production submission evidence; this planning project cannot implement those systems.

## 13. Version Record

| Version | Date | Change | Approval source |
|---|---|---|---|
| V0.2 | 2026-09-01 | Buyer-facing cleanup, Malaysia-origin entity, sticky Desktop review card, concise disclaimers, expanded Mobile and submitting/a11y state evidence | User attachment directed revision; submitted for review, not approved |
