# CONV-SAMPLE Full Visual Design V0.1

> Historical submission notice: this V0.1 review package is superseded for current review by `CONV-SAMPLE_FULL_VISUAL_DESIGN_V0.2.md`. V0.2 removes Buyer-facing internal/privacy placeholder language and expands the responsive state evidence. This file is retained unchanged as version history and is not a release asset.

## 0. Document Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Page type | Sample conversion page |
| Gate | Gate 5 — Full Visual and Key Interaction States |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED / PRIVACY_BLOCKED` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Direction | `Technical Review Desk` |
| Authorization | User explicitly authorized Gate 5 execution on 2026-09-01 |
| Sources | Updated Page Brief; Gate 2 Content Architecture V0.1; Gate 3 Wireframe V0.1; Gate 4 Visual Direction V0.1; Conversion Playbook V0.1; Global Chrome V0.5; PRODUCT V0.3 |
| Development boundary | Visual planning evidence only; no CMS, code delivery, testing, deployment, release, DNS or indexing; `D:\16Wordpress_nextjs` not accessed |

Gate 5 has been executed and submitted, but it cannot be approved or closed while approved data-handling/acknowledgement wording, receiver ownership and operational route evidence remain absent. The form compositions therefore visibly identify the privacy slot as an internal review block and are not Buyer Clean release assets.

## 1. Formal Visual Assets

All Mobile page renders are 390px logical width exported at 2×. The Mobile Menu is 390×720 logical exported at 2×.

| Asset | Dimensions | Bytes | SHA-256 | Review role |
|---|---:|---:|---|---|
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_UNPREFILLED_REVIEW_V0.1.png` | 1440×4058 | 303086 | `0933E49600358786E1B7915A70FD1E7AEE26640FDE25DCC0BEE5E9608EAF38D3` | Desktop full visual, unprefilled |
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_PREFILLED_REVIEW_V0.1.png` | 1440×4354 | 347111 | `5D16B643770F8D645B3A75A87F46C934CFC300535BE37062D0A75D21D824337D` | Desktop M-2377 neutral prefill |
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_SUCCESS_REVIEW_V0.1.png` | 1440×2590 | 218091 | `779A7A2C783D6C4CCE6F33EB43CC3B753579A9CC2606B855FFDEC47339B69E3C` | Desktop confirmed-receipt state |
| `assets/CONV-SAMPLE_G5_MOBILE_390_UNPREFILLED_REVIEW_V0.1.png` | 780×11744 | 837114 | `908FDC972C22FE943B970FA8A2EDE2EA573762479882DFEC8A4C7D468F68D551` | 390px full visual, unprefilled |
| `assets/CONV-SAMPLE_G5_MOBILE_390_PREFILLED_REVIEW_V0.1.png` | 780×13204 | 1043068 | `4B00F1381F36C6F4CE37ADD681402C49801053BC10FEC1EAF0A8333F87A035FF` | 390px M-2377 neutral prefill |
| `assets/CONV-SAMPLE_G5_MOBILE_390_VALIDATION_FOCUS_ERROR_V0.1.png` | 780×12682 | 921225 | `D2C1CDDE0D96F909123494565D87EFF91A4689D19A3E5B8CFD7F92876492CEF0` | 390px insufficient information, summary, focus and field errors |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUBMISSION_FAILURE_V0.1.png` | 780×12180 | 996466 | `72F3A286187F78320D3B10E88D9CC580C03B8B1B99827E2A01B90DDAE95F994A` | 390px unconfirmed submission with retained values |
| `assets/CONV-SAMPLE_G5_MOBILE_390_MENU_OPEN_V0.1.png` | 780×1440 | 46496 | `EF552150ABF8BB5EF590AC635C16883C6999F8722976F11773D4C9A9F3F9F8C3` | 390px Mobile Menu-open shared Chrome |
| `assets/CONV-SAMPLE_G5_DESKTOP_INTERACTION_STATE_BOARD_V0.1.png` | 1440×1834 | 178325 | `81540E5B8F12C88FBCC19D494AA3C93B01BB846597A1B0D67E9535126A0DE843` | Desktop internal state evidence |
| `assets/CONV-SAMPLE_G5_MOBILE_390_INTERACTION_STATE_BOARD_V0.1.png` | 780×5758 | 523885 | `AC0588A927D2A850577C16C580E41F39A66CABE7587BA06DDCFD0EAEE245F6D3` | 390px internal state evidence |

Planning-only render source is stored under `99_workspace/CONV-SAMPLE/visual-preview/`. It is not a development handoff or production implementation.

## 2. Locked Full-page Composition

The Desktop and 390px full visuals use the same content order:

1. Global Header — exact V0.5 Chrome.
2. Breadcrumb — `Home / Request a Sample`.
3. Compact Hero — purpose, request/review/separate-outcome motif and full non-approval boundary.
4. Conditional visible prefill context — only in prefilled frames.
5. Single-page form — Evaluation, Business/Destination and Optional Trial sections.
6. Internal privacy/acknowledgement review block — not Buyer Clean.
7. One submit control — `Submit Sample Request for Review`.
8. Human Review panel — descriptive four-step sequence.
9. Sample Request Questions — four visible answer-ready questions.
10. Inherited Deep Navy Footer with permanent Request a Quote.

No sticky submit, duplicate CTA, sample quantity control, shopping-cart pattern, delivery tracker or availability indicator appears.

## 3. Desktop Visual Result

### Unprefilled

- 1440px canvas, 1240px shared shell and 8/4 form/review split.
- Hero H1 uses a three-line technical-evaluation hierarchy without campaign imagery.
- Required/optional status is visible at each label.
- The form begins without validation errors.
- Test objective is the most prominent input.
- Human Review is top-aligned but visually secondary to the form.
- The unapproved acknowledgement slot is clearly separated as internal review evidence.

### Prefilled

The visible context block shows:

- Grade `M-2377`;
- Application `Coatings`;
- Process context `Sulfate`;
- Destination `United Kingdom`.

Every context row has Change/Remove behavior and equal neutral treatment. The form controls remain editable. No recommendation, suitability, eligibility, availability, score or sample approval is implied.

### Confirmed receipt

The success frame uses the exact heading:

`Your sample request has been received for human review.`

It uses a neutral receipt panel and no parcel, dispatch, inventory, certification or approval seal. The complete non-confirmation boundary remains visible.

## 4. Mobile 390px Visual Result

- Header is exactly 64px with `Logo | RFQ | Menu`.
- Page width and document scroll width are both 390px in every tested page state.
- Body, helper, boundary, error and success content retain readable sizes and natural wrapping.
- Every audited Mobile interactive target is at least 44px logical.
- All fields stack; no field pair or chip rail creates lateral scroll.
- Prefill values become stacked bordered rows with visible Change/Remove actions.
- Long company, email, destination, objective, notes, errors and privacy-block content remain inside the 358px content shell.
- Footer links and permanent RFQ remain visible and meet the Mobile target contract.

The Mobile full-page heights are content-driven; no short placeholder was used to hide field, error, success or footer problems.

## 5. Mobile Menu-open Result

Visible order is exactly:

1. Home
2. Markets
3. Products
4. Applications
5. Documents
6. Resources
7. About
8. Request a Quote

The Header retains the production Logo, permanent `RFQ` control and Close control. `Request a Sample` is not added as a first-level item. The conversion route has zero buyer-visible CURRENT text/badges/suffixes and zero `aria-current=page` mapping. Both RFQ surfaces point to `/request-a-quote/`.

## 6. Interaction-state Coverage

| Required state | Visual evidence | Result |
|---|---|---|
| Unprefilled | Desktop and Mobile full visuals | COVERED |
| Valid prefill | Desktop and Mobile M-2377 full visuals | COVERED |
| Unknown Grade | Desktop/Mobile internal state boards; valid selected control | COVERED |
| Other Application / buyer-entered Rubber | Desktop/Mobile state boards; unclassified text input | COVERED |
| Insufficient information | Mobile validation frame | COVERED |
| Error summary | Mobile validation frame | COVERED |
| Field-level error | Mobile validation frame and state boards | COVERED |
| Keyboard focus | Product Grade error control has visible Navy outline plus error border | COVERED |
| Submission in progress | Component behavior locked in Gate 4; visual uses stable button geometry and `Sending your request…` contract | SPECIFIED; no standalone raster needed |
| Submission failure | Mobile full frame plus both state boards | COVERED |
| Retained entries | Failure frame shows the full entered M-2377/Coatings/business/test context after failure | COVERED |
| Confirmed success | Desktop success full visual plus both state boards | COVERED |
| Privacy acknowledgement | Internal review block in all form frames and state boards | COVERED AS BLOCKED; not Buyer Clean |
| Human review | Full-page panel and both state boards | COVERED |
| Form service unavailable / restricted | Both state boards | COVERED |
| Mobile Menu | Dedicated 390×720 logical frame | COVERED |

## 7. Content and Form Controls

Required first-request controls shown:

- Product Grade with valid unknown-grade option;
- Application with Other and Not sure;
- Test objective;
- Contact name;
- Company or organisation;
- Business email;
- Destination country or market;
- pending approved acknowledgement.

Optional controls shown:

- current grade or target requirement;
- expected project or annual use, explicitly not sample quantity;
- documents needed for the trial, without availability implication;
- additional non-confidential context.

Not collected: phone, detailed address, port, Incoterm, packaging, sample quantity, payment data or complete formulation.

## 8. Failure, Success and Review Semantics

Failure copy:

- `We could not confirm that your request was received.`
- `Your entries are still on this page. Please try again.`
- action `Try again`.

There is no unverified email, phone, Contact fallback, ticket or “may have been received” message.

Success copy:

- receipt for human review only;
- possible clarification;
- outcome communicated separately;
- explicit non-confirmation of approval, availability, quantity, free supply, freight, dispatch, delivery and regulatory eligibility.

The four Human Review steps are descriptive, not a live progress tracker. No active/completed stage, response-time estimate or SLA appears.

## 9. PRODUCT V0.3 Visual Validation

- Current relation source remains 30 verified / 0 conflict / 54 no-public and Process 8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation.
- M-2377 + Coatings + Sulfate is shown only in the neutral prefill state. The same visual behavior applies to its other four approved Applications.
- M-2377 → Specialty Materials is not prefilled or presented as a relation.
- Rubber appears only as buyer-entered `Other` text on an internal state board; it does not become an option, category, URL, keyword, navigation or Schema relation.
- M-996 and M-2196 remain equal independent Grade options. No difference, ranking, superiority, equivalence, substitute, alternative or comparison reason appears.
- No-public mappings create no disabled item, crossed-out row or `not applicable` message.

## 10. Global Chrome and Logo Validation

- Desktop Header rendered at exactly 84px.
- Mobile Header rendered at exactly 64px.
- Production Header logo is `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`.
- Production Footer logo is `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`.
- Permanent Request a Quote appears in Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer and points to `/request-a-quote/`.
- `RFQ_ROUTE_READY=false` remains a release blocker; no hidden, disabled, empty or Contact-fallback RFQ state was designed.
- Buyer-visible CURRENT count is 0 in every page/Menu raster; visible `aria-current=page` count is 0.
- Header/Footer structure is inherited rather than redesigned.

## 11. Visual and Accessibility Validation

Automated render checks passed for all ten assets:

- one visible H1 on page/state-board frames and zero during Menu-only overlay;
- 0 horizontal overflow at 1440px and all 390px states;
- 0 visible CURRENT labels and 0 visible `aria-current=page` mappings;
- two visible permanent RFQ links on each full page/Menu frame;
- exact Header heights;
- ≥44px minimum Mobile interactive target;
- exact submit, failure and success phrases;
- complete state-board coverage.

Manual visual review confirmed:

- real long company/email/objective/notes content does not break the layout;
- validation summary, field errors and focus ring remain distinguishable;
- failure preserves values;
- success does not resemble approval or shipment;
- Mobile Menu, Footer and long full-page compositions remain coherent;
- no factory, warehouse, lab-result, parcel, shipping, certificate or availability imagery appears.

## 12. Privacy and Operational Blockers

### `CS-PRIV-01 — BLOCKING_GATE_5_APPROVAL_AND_RELEASE`

Exact approved controller, purpose, categories, recipients, transfers, retention, rights, contact and legal-basis wording is absent. The form rasters therefore contain an internal amber dashed review block. This annotation must never reach Buyer Clean output.

### `CS-RCV-01 — BLOCKING_RELEASE`

Receiver, owner/inbox and explicit positive acknowledgement contract are not verified.

### `CS-MAN-01 — BLOCKING_RELEASE`

No approved manual fallback channel is available. No fallback contact renders.

### `CS-ROUTE-01 — BLOCKING_RELEASE`

Route and form service readiness are outside this project and have not been tested.

### `CS-SEO-01 — REVIEW_REQUIRED`

Canonical activation, robots and sitemap inclusion remain unapproved. No indexing action was taken.

## 13. Gate Status

| Gate | Status |
|---|---|
| Gate 0 | `AUTHORIZED_TO_PROCEED / NOT_FINAL_CLOSED` |
| Gate 1 | `AUTHORIZED_TO_PROCEED / EVIDENCE_BOUNDARIES_RETAINED` |
| Gate 2 | `SUBMITTED_FOR_REVIEW / NOT_APPROVED` |
| Gate 3 | `SUBMITTED_FOR_REVIEW / NOT_APPROVED` |
| Gate 4 | `SUBMITTED_FOR_REVIEW / NOT_APPROVED` |
| Gate 5 | `EXECUTED_AND_SUBMITTED / NOT_APPROVED / PRIVACY_BLOCKED` |
| Gate 6+ | `NOT_STARTED / OUT_OF_SCOPE / PROHIBITED` |

Gate 5 execution authorization does not equal Gate 5 approval. The next valid action is project-control/user review of this package and resolution of the privacy block. No development handoff is authorized.

## 14. Version Record

| Version | Date | Change | Approval source |
|---|---|---|---|
| V0.1 | 2026-09-01 | First complete Desktop, 390px, Mobile Menu and interaction-state visual package | User authorized Gate 5 execution; package submitted, not approved |
