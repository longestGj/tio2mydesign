# CONV-RFQ Desktop / Tablet / 390px Wireframe Specification V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 3 |
| Date | 2026-09-01 |
| Status | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` |
| Content source | `pages/conversion/04_planning/CONV-RFQ_CONTENT_ARCHITECTURE_V0.1.md` |
| SEO/GEO source | `pages/conversion/04_planning/CONV-RFQ_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` |
| Shared form rules | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` |
| Viewports | Desktop 1440px; Tablet 834px; Mobile 390px |
| Global Chrome | V0.5; fixed RFQ; Conversion route current count 0; visible `CURRENT` count 0 |
| Stop boundary | Gate 4 review; no Gate 5 visual or implementation |

## 1. Page geometry and reading order

The DOM and keyboard reading order remains:

`Global Header → Breadcrumb → Intro → Form → Human-review process → Buyer questions → Global Footer`

Desktop may visually place the Intro beside the Form, but the Intro precedes the Form in reading order. No sticky rail may cover the Footer or create a second submit action.

## 2. Desktop 1440px wireframe

### 2.1 Frame contract

| Region | Geometry | Layout |
|---|---|---|
| Global Header | 84px | Production primary horizontal SVG; eight items; fixed RFQ; no current item on Conversion route |
| Breadcrumb | 52px | 1200px shell; `Home / Request a Quote` |
| Intro + Form | 1200px shell; 48px gap; top/bottom 56/88px | 4-column intro rail (~368px) + 8-column form (~784px) |
| Review process | 1200px shell; 80px vertical padding | H2 plus four equal steps; no interactive cards |
| Buyer questions | 1200px shell; 80px vertical padding | 4/8 split; heading left, four answer rows right |
| Footer | Approved shared geometry | Production reverse SVG; fixed RFQ; no page-local/failure links |

### 2.2 Desktop page skeleton

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ 84px GLOBAL HEADER: Logo | Home … About | [Request a Quote]                │
│ Conversion route: no underline, no left marker, no aria-current, CURRENT=0 │
└──────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────────────┐
│ Home / Request a Quote                                                      │
└──────────────────────────────────────────────────────────────────────────────┘
┌───────────────────────────────┬──────────────────────────────────────────────┐
│ B2B QUOTATION REQUEST         │ ┌──────────────────────────────────────────┐ │
│                               │ │ Quotation request details                │ │
│ Request a Titanium Dioxide    │ │ Required fields are marked…              │ │
│ Quote                         │ │ [prefill notice / 0px when absent]       │ │
│                               │ │                                          │ │
│ Share the minimum business…   │ │ A. Business contact                      │ │
│                               │ │ [Contact name] [Company / organization]  │ │
│ Submission confirms receipt…  │ │ [Business email_______________________]  │ │
│                               │ │                                          │ │
│ ─ WHAT TO PREPARE             │ │ B. Destination and product context       │ │
│ Company and business email…   │ │ [Destination country] [City / port]      │ │
│                               │ │ (• Known) ( Multiple) ( Unknown/help)    │ │
│ ─ GRADE UNKNOWN?              │ │ [Grade selector] [Application selector]  │ │
│ Choose “Unknown / need help”… │ │ [Conditional requirement textarea____]  │ │
│                               │ │                                          │ │
│ ─ HUMAN REVIEW                │ │ C. Purchase requirement                  │ │
│ A person reviews…             │ │ [Quantity____________] [Unit__________]  │ │
│                               │ │ [Packaging preference_________________]  │ │
│                               │ │ [Document needs multi-select__________]  │ │
│                               │ │ [Sample interest______________________]  │ │
│                               │ │                                          │ │
│                               │ │ D. Additional context                    │ │
│                               │ │ [Notes textarea / 2,000 chars_________]  │ │
│                               │ │ [PRIVACY SLOT — INTERNAL BLOCKER]        │ │
│                               │ │ [ ] Receipt/review acknowledgement       │ │
│                               │ │ [ Submit RFQ for Review ]                │ │
│                               │ │ A submitted request is reviewed…         │ │
│                               │ └──────────────────────────────────────────┘ │
└───────────────────────────────┴──────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────────────┐
│ What happens after you submit                                               │
│ 01 Request received | 02 Context reviewed | 03 Clarification | 04 Outcome  │
└──────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────────────┐
│ Questions before you submit | [Q + full visible answer] × 4                │
└──────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────────────┐
│ SHARED DEEP NAVY FOOTER — reverse SVG — fixed Request a Quote              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Desktop form grid

- Form card internal width: approximately 720px after 32px padding each side.
- Two-column row gap: 20px; vertical field gap: 22px.
- Contact/Company: equal columns; Business email: full width.
- Destination/City: 58/42 split; both allow wrapped hint text.
- Grade path uses three radio tiles in one row at 1440px. Each tile has a minimum 48px height and may wrap to two text lines.
- Grade selector/Application: equal columns. Unknown path hides the grade selector box and expands the requirement textarea to full width without changing prior focus order.
- Quantity/Unit: 2/1 split; Packaging: full width.
- Document needs uses wrapping checkboxes, not a horizontal scrolling chip rail.
- Submit button aligns left and is content width (minimum 220px), not full card width on Desktop.
- The privacy slot remains an internal dashed annotation in Gate 3/4 review material. It is not exported as Buyer Clean copy.

## 3. Tablet 834px wireframe

### 3.1 Global and page layout

The 834px proof uses the approved Mobile Header surface to avoid compressing the eight-item Desktop navigation. Exact implementation breakpoint remains owned by the shared component; this wireframe only specifies the active proof state.

| Region | Tablet behavior |
|---|---|
| Header | 64px `Logo | RFQ | Menu`; RFQ fixed; no current item |
| Breadcrumb | 48px; 32px outer gutter |
| Intro | Full-width, max 720px; decision aids in three columns when each remains ≥210px, otherwise 2+1 wrap |
| Form | Full-width card, 32px outer gutter, 32px internal padding |
| Form fields | Two-column rows retained only where each control remains ≥300px; otherwise stack |
| Review process | 2×2 grid with reading order 1→4 |
| Buyer questions | One column; heading then answer rows |
| Footer | Shared tablet/mobile stack; fixed RFQ |

### 3.2 Tablet skeleton

```text
┌──────────────────────────────────────────────────────────────┐
│ 64px Logo                       [RFQ] [Menu]                 │
└──────────────────────────────────────────────────────────────┘
│ Home / Request a Quote                                     │
│ B2B QUOTATION REQUEST                                      │
│ Request a Titanium Dioxide Quote                           │
│ Share the minimum business and requirement context…        │
│ Submission confirms receipt for review only…               │
│ [WHAT TO PREPARE] [GRADE UNKNOWN?] [HUMAN REVIEW]           │
│                                                            │
│ ┌────────────────────────────────────────────────────────┐ │
│ │ Quotation request details                              │ │
│ │ [Name________________] [Company____________________]    │ │
│ │ [Business email____________________________________]    │ │
│ │ [Country_____________] [City/port__________________]    │ │
│ │ [Known] [Multiple grades] [Unknown / need help]        │ │
│ │ [Grade_______________] [Application_______________]    │ │
│ │ [Conditional requirement___________________________]    │ │
│ │ [Quantity____________] [Unit_______________________]    │ │
│ │ [Packaging_________________________________________]    │ │
│ │ [Documents — wrapped checkboxes____________________]    │ │
│ │ [Sample interest___________________________________]    │ │
│ │ [Notes_____________________________________________]    │ │
│ │ [PRIVACY SLOT — REVIEW ANNOTATION]                      │ │
│ │ [ ] Review acknowledgement                              │ │
│ │ [ Submit RFQ for Review ]                               │ │
│ └────────────────────────────────────────────────────────┘ │
│ What happens after you submit: [1][2] / [3][4]             │
│ Questions before you submit: full-width answer rows        │
│ SHARED FOOTER                                              │
```

### 3.3 Tablet Mobile Menu Open

- Drawer/sheet displays the exact eight-item order.
- `Request a Quote` is the final action and remains Teal terminal tier.
- No row receives a current marker for CONV-RFQ; visible `CURRENT` count is 0.
- The hidden Desktop navigation surface is absent from the accessibility tree and focus order.
- All rows are at least 48px high; close control is at least 44×44px.

## 4. Mobile 390px wireframe

### 4.1 Mobile geometry

| Region | Contract |
|---|---|
| Canvas | 390px CSS width; 20px outer gutter; 350px content width |
| Header | 64px; approved 120×40 production horizontal SVG box; `Logo | RFQ | Menu` |
| Breadcrumb | 44–48px; one line or natural wrap; no horizontal scroll |
| Intro | One column; H1 38–40px target in Gate 4; no image |
| Decision aids | Three compact stacked rows; not cards; 16px separation |
| Form | Edge-to-edge within 20px gutter; 20px internal padding; all fields one column |
| Controls | Minimum 48px visual height; ≥44px logical target |
| Submit | Full content width; minimum 52px height |
| Review process | Four stacked numbered rows |
| Buyer questions | Four full-width answer blocks; no collapsed content required |
| Footer | Shared mobile stack; fixed RFQ; no local anchors |

### 4.2 Mobile skeleton with real copy length

```text
┌──────────────────────────────────────┐
│ Logo                 [RFQ] [Menu]    │ 64px
└──────────────────────────────────────┘
 Home / Request a Quote

 B2B QUOTATION REQUEST
 Request a Titanium
 Dioxide Quote

 Share the minimum business and
 requirement context needed for human
 quotation review. You can continue if
 the exact grade is unknown, and any
 product, application, market or
 document context carried from another
 page remains visible and editable.

 ┌ Receipt boundary ─────────────────┐
 │ Submission confirms receipt for   │
 │ review only. It does not confirm a │
 │ quotation, price, stock, MOQ, lead │
 │ time, shipping, sample, document,  │
 │ order or approval.                 │
 └───────────────────────────────────┘

 WHAT TO PREPARE
 Company and business email,
 destination, application, grade or
 non-confidential requirement, and an
 estimated purchase quantity.

 GRADE UNKNOWN?
 Choose “Unknown / need help” and add
 the current grade or target requirement
 that a reviewer can assess.

 ┌───────────────────────────────────┐
 │ Quotation request details         │
 │ Required fields are marked…       │
 │                                   │
 │ Contact name *                    │
 │ [________________________________]│
 │ Company / organization *          │
 │ [________________________________]│
 │ Business email *                  │
 │ [________________________________]│
 │ Destination country / market *    │
 │ [________________________________]│
 │ Destination city or port          │
 │ [________________________________]│
 │ Product / grade *                 │
 │ ( ) Known grade                   │
 │ ( ) Multiple grades               │
 │ ( ) Unknown / need help           │
 │ Application *                     │
 │ [________________________________]│
 │ Current grade or target           │
 │ non-confidential requirement *    │
 │ [________________________________]│
 │ [________________________________]│
 │ Estimated purchase quantity *     │
 │ [____________________]            │
 │ Unit *                            │
 │ [________________________________]│
 │ Packaging preference              │
 │ [________________________________]│
 │ Documents needed for review       │
 │ [ ] TDS [ ] SDS [ ] COA           │
 │ [ ] COO / Origin [ ] Traceability │
 │ [ ] Other                         │
 │ Is sample evaluation of interest? │
 │ [________________________________]│
 │ Additional non-confidential notes │
 │ [________________________________]│
 │ [________________________________]│
 │ [PRIVACY COPY SLOT — INTERNAL]    │
 │ [ ] I understand that submission  │
 │     sends a request for human      │
 │     review and does not confirm a  │
 │     quotation or commercial outcome│
 │                                   │
 │ [    Submit RFQ for Review       ]│
 │ A submitted request is reviewed   │
 │ separately from any quotation,    │
 │ supply, sample, document or order  │
 │ decision.                         │
 └───────────────────────────────────┘

 What happens after you submit
 01 Request received — The form confirms…
 02 Context reviewed — A person reviews…
 03 Clarification if needed — Additional…
 04 Outcome communicated separately…

 Questions before you submit
 [Question + full answer] × 4

 SHARED DEEP NAVY FOOTER
```

### 4.3 Mobile wrapping rules

- No field label is truncated or replaced only by a placeholder.
- Document checkboxes wrap into one or two per row as needed; their text target remains ≥44px.
- Context chips wrap vertically and use a separate `Remove [value]` accessible label.
- The acknowledgement label may occupy five or more lines without shrinking below 16px.
- Error text uses full content width under the field. No tooltip is required to read it.
- Long success/failure text remains 16px with 1.55–1.65 line height.
- Mobile Menu overlays the body without shifting the 390px canvas beyond the viewport.

## 5. Real-length stress fixtures

These strings are layout fixtures, not claims or submitted data.

| Field | Stress fixture |
|---|---|
| Contact name | `María Fernanda de Albuquerque-Santos` |
| Company | `International Advanced Coatings and Polymer Solutions Procurement GmbH` |
| Business email | `regional.raw.materials.procurement+vendorreview@international-coatings.example` |
| Destination | `São José dos Pinhais, Paraná, Brazil` |
| City / port | `Rotterdam industrial distribution and onward-processing location` |
| Target requirement | `We do not yet know the exact grade. The material is being reviewed for an exterior waterborne industrial coating, and our team can provide the current grade and non-confidential test criteria during human follow-up.` |
| Packaging preference | `No preference yet; please review the estimated quantity first and request packaging context only if needed.` |
| Notes | A 1,800–2,000-character non-confidential fixture with multiple paragraphs, a long unbroken reference of up to 40 characters, and ordinary punctuation |
| Error | `Add a non-confidential current grade or target requirement so the unknown-grade request can be reviewed.` |
| Success | Full receipt-only copy from Content Architecture section 7.4 |

The email fixture uses the reserved `.example` domain and is for wrapping only; it is not a real contact channel.

## 6. Prefill states

### 6.1 Valid M-2377 prefill

Source notice:

`Context carried from M-2377 Titanium Dioxide is shown below. Review or change it before submitting.`

Visible removable context:

```text
[Grade: M-2377 ×] [Application: Printing Inks ×] [Process context: Sulfate ×]
```

- M-2377, Printing Inks and Sulfate are neutral context only.
- No Recommended, Best, Suitable, Ideal or qualification badge appears.
- Specialty Materials is not generated from M-2377.

### 6.2 Multiple M-996 / M-2196

```text
Product / grade: Multiple grades
[M-996 ×] [M-2196 ×]
```

No ordering caption, comparison link, “why choose,” equivalent, replacement or performance difference appears.

### 6.3 Invalid or stale prefill

Notice:

`Some previous context could not be used. Review the fields below and continue with the information you know.`

- The unsupported value is absent, not shown as unavailable/unsuitable.
- Form defaults remain usable.
- Focus begins normally at the page heading; no error summary appears on load.

### 6.4 Empty prefill

The prefill notice and its vertical margin collapse to 0px. The direct-entry form is complete and no placeholder claim appears.

## 7. Validation and focus states

### 7.1 First load

- Neutral Border Gray controls.
- No red border, error icon, success icon or disabled submit solely because required fields are empty.
- Required markers and explanatory hint text remain visible.

### 7.2 Keyboard focus

- Focus outline is visually outside the control and remains distinct from selected/error state.
- Radio tiles, checkboxes, multiselect chips and submit are individually keyboard reachable.
- Focus order follows visible reading order; conditionally revealed fields receive focus only when the triggering choice requires immediate input.

### 7.3 Field errors

| Field | Error copy |
|---|---|
| Contact name | `Enter the name of the person we may reply to.` |
| Company | `Enter your company or organization.` |
| Business email empty | `Enter a business email.` |
| Business email invalid | `Enter a business email in the format name@company.com.` |
| Destination | `Choose the destination country or market.` |
| Grade path | `Choose a known grade, multiple grades, or Unknown / need help.` |
| Grade selector | `Select at least one registered grade or choose Unknown / need help.` |
| Application | `Choose an application or Other / Not sure.` |
| Application Other | `Describe the application in 160 characters or fewer.` |
| Unknown requirement | `Add a non-confidential current grade or target requirement so the unknown-grade request can be reviewed.` |
| Quantity | `Enter a positive estimated purchase quantity.` |
| Unit | `Choose a quantity unit.` |
| Document Other | `Describe the document need in 160 characters or fewer.` |
| Acknowledgement | `Confirm that you understand this is a request for human review, not a quotation or commercial approval.` |

### 7.4 Error summary frame

```text
┌────────────────────────────────────────────────────┐
│ ! Review the highlighted information               │
│ We could not submit the request yet. Correct the   │
│ fields listed below; your other entries have been  │
│ kept.                                              │
│ • Business email                                   │
│ • Current grade or target requirement              │
│ • Estimated purchase quantity                      │
└────────────────────────────────────────────────────┘
```

The summary is inserted immediately below the form intro and before Group A, receives focus, and does not alter Global Header geometry.

## 8. Submission states

### 8.1 Submitting

```text
[ progress indicator ] Submitting request…
```

- All entered values remain visible.
- The page-body submit cannot create a duplicate request while active.
- The state has a live text announcement; an infinite spinner is not sufficient.
- No receipt or success color appears before positive acknowledgement.

### 8.2 Failure — channel-free fail-closed

```text
┌────────────────────────────────────────────────────┐
│ ! We could not confirm receipt                     │
│ We could not confirm that your request was         │
│ received. Your entries are still on this page.     │
│ Please try again.                                  │
│ [ Try again ]                                      │
└────────────────────────────────────────────────────┘
```

- No Contact, email, phone, ticket/reference ID or false success.
- Focus moves to the failure heading/region, then `Try again`.
- The complete form remains after the message.

### 8.3 Success — receipt only

```text
┌────────────────────────────────────────────────────┐
│ ✓ Quotation request received                       │
│ Your quotation request has been received for       │
│ human review. We may ask for clarification if more │
│ context is needed. This receipt is not a quotation │
│ and does not confirm price, stock, MOQ, lead time, │
│ shipping, sample or document availability, order   │
│ acceptance or any approval.                        │
│ [Return to Products →]  conditional text link      │
└────────────────────────────────────────────────────┘
```

- The form is replaced by the durable receipt region after confirmed receipt.
- No automatic redirect or countdown.
- No quotation number or promised response time.
- Conditional Products link is absent until route-live.

## 9. Privacy, human-review and restricted states

### 9.1 Privacy pending

The Gate 3 review board uses a non-Buyer-Clean annotation:

`PRIVACY NOTICE SLOT — APPROVED CONTROLLER / PURPOSE / RETENTION / RECIPIENT / RIGHTS / CONTACT COPY REQUIRED BEFORE GATE 5`

The annotation is visually outside the simulated public component boundary or clearly cross-hatched as review-only. It is never presented as final public privacy wording.

### 9.2 Human-review state

The four-step section renders in every ready/default state and after success. It never shows avatars, employee names, response times, queue position, acceptance percentages or approval badges.

### 9.3 Restricted product relation

- Unsupported relation is removed silently from system prefill.
- Buyer-entered unusual application detail remains neutral in `Other` or notes.
- No public warning says `NO_PUBLIC_MAPPING`, “not applicable,” “not suitable,” “unsupported” or “unavailable.”

## 10. Service and route unavailable review states

### 10.1 Form service unavailable

Review-only body proof:

```text
┌────────────────────────────────────────────────────┐
│ This form is unavailable. No request has been      │
│ received.                                          │
└────────────────────────────────────────────────────┘
```

Internal annotation: `FORM_SERVICE_READY=false = RELEASE_BLOCKER`.

It is not an approved published alternative. The Global Header/Menu/Footer RFQ remains visible and linked to `/request-a-quote/` in the design proof.

### 10.2 Route unavailable

No Buyer Clean route-unavailable page is proposed. Internal state only:

`RFQ_ROUTE_READY=false = RELEASE_BLOCKER`

No RFQ OFF, hidden, disabled, empty slot, Contact relink or Contact fallback visual is allowed.

## 11. Complete state inventory

| ID | State | Required proof | Desktop / Tablet / Mobile behavior |
|---|---|---|---|
| S00 | Default / unprefilled | Complete neutral form | No first-load errors; prefill block 0px |
| S01 | Valid prefill | Source notice + editable values | Chips wrap; source label safe |
| S02 | Empty prefill | Same as default | No empty card or placeholder |
| S03 | Invalid/stale prefill | Neutral recovery notice | No negative applicability text |
| S04 | Unknown grade | Conditional requirement required | Full-width textarea; valid path |
| S05 | Multiple grades | Multi-select registered grades | No comparison/ranking |
| S06 | Insufficient information | Field error after interaction/submit | Preserve other values |
| S07 | Keyboard focus | Independent visible outline | ≥44px targets; no focus clipping |
| S08 | Field validation | Field error + hint relationship | Text/icon/structure, not color-only |
| S09 | Error summary | Focused summary links to fields | Inserts before Group A |
| S10 | Submission in progress | Clear progress and duplicate protection | Global RFQ remains navigation |
| S11 | Submission failure | Values retained + Try again | No Contact/email/receipt implication |
| S12 | Success | Durable receipt-only text | No auto redirect or approval |
| S13 | Privacy pending | Internal annotated slot | Blocks Gate 5/release |
| S14 | Human review | Four stable steps | No SLA/queue/approval badge |
| S15 | Restricted relation | Neutral context only | M-2377/M-996/M-2196 boundaries |
| S16 | Form service unavailable | Review-only no-receipt body | Internal release blocker |
| S17 | RFQ route unavailable | Internal annotation only | Fixed Global Chrome unchanged |
| S18 | Mobile Menu Open | Eight items + fixed terminal RFQ | Zero current links/visible labels |

## 12. Responsive acceptance

- [x] Desktop 1440px, Tablet 834px and Mobile 390px frames are specified.
- [x] Form begins near the top and remains the dominant page-body object.
- [x] Real long company, email, destination, requirement, error and success copy is supplied.
- [x] Mobile fields use one column and no horizontal chip/card rail.
- [x] Mobile controls and navigation targets are at least 44px.
- [x] Global Chrome V0.5 fixed RFQ remains in all state proofs.
- [x] Conversion route has zero current links and buyer-visible `CURRENT` count 0.
- [x] Focus, error summary and field errors are locatable.
- [x] Failure preserves data and contains no unverified channel.
- [x] Success is receipt only.
- [x] Privacy and unavailable states remain clearly annotated blockers, not publishable alternatives.
- [x] No Gate 5 pixels, implementation or route claim is created.

## 13. Gate status

`CONV-RFQ-G3-01 = COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED`

This wireframe is submitted for Gate 4 review. It does not authorize complete visual production, development or publication.
