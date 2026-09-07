# CONV-SAMPLE Desktop, Tablet and 390px Wireframe Specification V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `CONV-SAMPLE` |
| Page name | Request a Sample |
| URL | `/request-sample/` |
| Gate | Gate 3 — Wireframe |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_GATE_4_USER_REVIEW / NOT_APPROVED` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Content source | `pages/conversion/request-sample/04_planning/CONV-SAMPLE_CONTENT_ARCHITECTURE_V0.1.md` |
| Shared authority | Conversion Playbook V0.1; Global Chrome V0.5; PRODUCT V0.3 |
| Primary frame | Unprefilled, form-ready technical evaluation request |
| Required viewports | Desktop 1440px, Tablet 834px, Mobile 390px, Mobile Menu open |
| Excluded | Gate 5 complete visual, implementation, testing, release and `D:\16Wordpress_nextjs` |

This document fixes structure, responsive behavior and interaction states. It is not a full visual design and does not approve the page for Gate 5 or release.

> **Continuation notice — 2026-09-01:** Gate 5 was subsequently authorized and executed. Full visual assets are recorded in `../visual-designs/CONV-SAMPLE_FULL_VISUAL_DESIGN_V0.1.md`; they remain submitted/not approved/privacy-blocked. This wireframe remains the Gate 3 structural source.

## 1. Wireframe Decision

The form uses a **review-first split layout**:

- compact Hero establishes the technical-evaluation purpose and receipt boundary;
- the main form occupies the primary reading column;
- an adjacent review panel explains what happens next without implying a service level;
- Buyer Questions follow the form and repeat only the critical unknown-grade and receipt answers;
- on Tablet and Mobile, content becomes one continuous column with no sticky submit or floating panel.

The form is one page, not a multi-step wizard. This reduces hidden state, preserves entries on failure and avoids implying automatic qualification.

## 2. Viewport Grid

| Viewport | Logical canvas | Content shell | Grid | Outer gutter | Form behavior |
|---|---:|---:|---:|---:|---|
| Desktop | 1440px | 1240px | 12 columns / 24px | 100px | Main form 8 columns; review panel 4 columns |
| Tablet | 834px | 770px | 8 columns / 20px | 32px | Single column; paired short fields may remain 2-up where labels fit |
| Mobile | 390px | 358px | 4 columns / 12px | 16px | All fields one column; no horizontal overflow |

Header height is exactly 84px Desktop and 64px Mobile. All Mobile controls and menu rows have at least a 44×44px logical target.

## 3. Desktop 1440px — Unprefilled Form-ready State

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ GLOBAL HEADER — 84px                                                        │
│ [production horizontal logo] Home Markets Products Applications Documents  │
│ Resources About                                     [Request a Quote]        │
│ CONV-SAMPLE has 0 buyer-visible CURRENT labels and 0 aria-current mappings  │
├──────────────────────────────────────────────────────────────────────────────┤
│ BREADCRUMB — Home / Request a Sample                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ HERO — compact, 420–500px                                                   │
│ TECHNICAL EVALUATION REQUEST                                                │
│ Request a Titanium Dioxide Sample for Technical Evaluation                  │
│ Share the grade you are considering—or tell us that you are not sure—...   │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │ Submitting sends a request for human review. It does not confirm ...   │ │
│ └──────────────────────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────────────┤
│ MAIN FORM REGION — 8/4 split, top aligned                                   │
│ ┌────────────────────────────────────────────────┐ ┌──────────────────────┐ │
│ │ Tell us what you need to evaluate              │ │ What happens after   │ │
│ │ Required-field + non-confidential introduction │ │ you submit           │ │
│ │                                                │ │ 1 Received           │ │
│ │ EVALUATION CONTEXT                             │ │ 2 Human review       │ │
│ │ Product grade [Select.......................]  │ │ 3 Clarification may  │ │
│ │ Application   [Select.......................]  │ │   be requested       │ │
│ │ What do you need to evaluate?                 │ │ 4 Separate outcome   │ │
│ │ [Real 3–5 line buyer-entered objective......] │ │                      │ │
│ │ Current grade or target requirement (Optional)│ │ Receipt is not       │ │
│ │ [...........................................]  │ │ approval...          │ │
│ │                                                │ └──────────────────────┘ │
│ │ BUSINESS AND DESTINATION CONTEXT               │                          │
│ │ Contact name [........] Company [............] │                          │
│ │ Business email [.............................] │                          │
│ │ Destination country or market [.............] │                          │
│ │                                                │                          │
│ │ OPTIONAL TRIAL CONTEXT                         │                          │
│ │ Expected project or annual use [.............] │                          │
│ │ Documents needed [TDS] [SDS] [COA] [COO] ... │                          │
│ │ Additional non-confidential context           │                          │
│ │ [Real multi-line notes.......................] │                          │
│ │                                                │                          │
│ │ [INTERNAL PRIVACY/ACK SLOT — not Buyer Clean] │                          │
│ │ [Submit Sample Request for Review]             │                          │
│ └────────────────────────────────────────────────┘                          │
├──────────────────────────────────────────────────────────────────────────────┤
│ SAMPLE REQUEST QUESTIONS — H2 left, four disclosure rows right              │
│ First answer expanded with full unknown-grade or receipt copy               │
├──────────────────────────────────────────────────────────────────────────────┤
│ GLOBAL FOOTER — Deep Navy, production reverse logo, inherited structure     │
│ Request a Quote permanently visible and linked to /request-a-quote/          │
└──────────────────────────────────────────────────────────────────────────────┘
```

Estimated Desktop height in the unprefilled state: 2500–3100px depending on approved acknowledgement and disclosure expansion. The right review panel is `position: static`; it is not sticky and cannot cover Footer or error states.

## 4. Desktop — Valid Prefilled State

Insert `PREFILL_CONTEXT` between Hero and form:

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Context brought from your previous page                                     │
│ Review any details carried into this form. You can change or remove them.   │
│ [Grade: M-2377] Change Remove   [Application: Coatings] Change Remove       │
│ [Process context: Sulfate] Remove   [Destination: United Kingdom] Change    │
└──────────────────────────────────────────────────────────────────────────────┘
```

- Each value is text, not a recommendation badge.
- Grade, Application and Destination controls below reflect the same editable values.
- `Process context` is informational and does not satisfy another required field.
- Removing a required-value prefill returns that field to its neutral prompt without an error until interaction or submit.
- When no meaningful values remain, the module closes to 0px without an empty heading or gap.

## 5. Tablet 834px

```text
┌────────────────────────────────────────────────────────────┐
│ HEADER — inherited responsive surface                     │
├────────────────────────────────────────────────────────────┤
│ Breadcrumb                                                 │
├────────────────────────────────────────────────────────────┤
│ HERO — H1 2–3 lines, full-width boundary note             │
├────────────────────────────────────────────────────────────┤
│ PREFILL CONTEXT — conditional, chips/rows wrap naturally   │
├────────────────────────────────────────────────────────────┤
│ FORM — one content card                                    │
│ Grade                                                      │
│ Application                                                │
│ Test objective                                             │
│ Current grade/target                                       │
│ Contact name            | Company                          │
│ Business email                                             │
│ Destination                                                │
│ Optional trial fields                                      │
│ acknowledgement + submit                                  │
├────────────────────────────────────────────────────────────┤
│ WHAT HAPPENS AFTER YOU SUBMIT — horizontal 2×2 sequence    │
├────────────────────────────────────────────────────────────┤
│ SAMPLE REQUEST QUESTIONS — single-column disclosures       │
├────────────────────────────────────────────────────────────┤
│ FOOTER                                                     │
└────────────────────────────────────────────────────────────┘
```

At 834px, only Contact name and Company may share a row after real-label and 60-character company testing. Every other field spans the full content width. At narrower Tablet widths, the pair stacks without changing DOM order.

## 6. Mobile 390px — Unprefilled State

```text
┌──────────────────────────────────────┐
│ HEADER 64px                          │
│ [Logo 120×40] [RFQ] [Menu]           │
├──────────────────────────────────────┤
│ Home / Request a Sample              │
├──────────────────────────────────────┤
│ TECHNICAL EVALUATION REQUEST         │
│ Request a Titanium Dioxide Sample    │
│ for Technical Evaluation             │
│ Intro — full real copy               │
│ [Human-review / non-approval note]   │
├──────────────────────────────────────┤
│ TELL US WHAT YOU NEED TO EVALUATE    │
│ Required-field + confidentiality     │
│ reminder                             │
│                                      │
│ EVALUATION CONTEXT                   │
│ Product grade                        │
│ [Select............................] │
│ Application                          │
│ [Select............................] │
│ What do you need to evaluate?        │
│ [textarea, min visible 5 lines.....] │
│ Current grade or target requirement  │
│ (Optional)                           │
│ [..................................] │
│                                      │
│ BUSINESS AND DESTINATION CONTEXT     │
│ Contact name                         │
│ [..................................] │
│ Company or organisation              │
│ [..................................] │
│ Business email                       │
│ [..................................] │
│ Destination country or market        │
│ [..................................] │
│                                      │
│ OPTIONAL TRIAL CONTEXT               │
│ Expected project or annual use       │
│ Documents needed for the trial       │
│ [TDS] [SDS] [COA] [COO]             │
│ Additional non-confidential context  │
│ [textarea, min visible 4 lines.....] │
│                                      │
│ [INTERNAL ACK SLOT — Gate 5 blocked] │
│ [Submit Sample Request for Review]   │
├──────────────────────────────────────┤
│ WHAT HAPPENS AFTER YOU SUBMIT        │
│ 1 Received                           │
│ 2 Human review                       │
│ 3 Clarification may be requested     │
│ 4 Separate outcome                   │
│ Receipt is not approval...           │
├──────────────────────────────────────┤
│ SAMPLE REQUEST QUESTIONS             │
│ [Question + full expanded answer]    │
│ [Question]                           │
│ [Question]                           │
│ [Question]                           │
├──────────────────────────────────────┤
│ DEEP NAVY FOOTER                     │
│ Request a Quote remains visible      │
└──────────────────────────────────────┘
```

Mobile rules:

- shell width 358px with 16px gutters;
- no field, chip, error, email string or disclosure trigger causes horizontal overflow;
- native/select affordance and buttons are at least 48px high where possible, never below 44px;
- Submit is full width and appears once;
- Helper/error copy wraps below the relevant field, never in a narrow side column;
- no horizontal chip carousel; prefill rows wrap as stacked label/value/action groups;
- Footer follows content naturally; no sticky bar obscures the last field.

## 7. Mobile Menu-open State

The menu opens below or from the 64px Header according to the approved shared component. It is a Global Chrome surface, not a page redesign.

```text
┌──────────────────────────────────────┐
│ [Logo] [RFQ] [Close]                 │
├──────────────────────────────────────┤
│ Home                                 │
│ Markets                              │
│ Products                             │
│ Applications                         │
│ Documents                            │
│ Resources                            │
│ About                                │
│ [Request a Quote]                    │
└──────────────────────────────────────┘
```

- exact order is unchanged;
- visible Home is present;
- Request a Quote is permanent and resolves to `/request-a-quote/`;
- CONV-SAMPLE produces no `CURRENT` text/badge/suffix and no `aria-current=page`;
- body scroll is locked, focus is trapped, Escape closes, and focus returns to Menu;
- menu rows and Close/RFQ targets are at least 44px logical;
- `RFQ_ROUTE_READY=false` blocks release but does not hide, disable or reroute RFQ.

## 8. Unknown-grade and Other-application States

### Unknown grade

```text
Product grade — Required
(•) I do not know the grade
    You can continue. Describe your application and test objective for review.
```

- no validation error;
- no auto-recommended Grade panel;
- no hidden scoring or substitute logic;
- Application and Test objective remain required.

### Other application

```text
Application — Required
[Other]
Describe the application — Required
[e.g. buyer-entered Rubber compound evaluation context................]
```

Buyer-entered text remains unclassified. The word `Rubber`, if entered by the buyer, does not create a selector value, public relationship, URL, keyword, navigation entry or Schema node.

### Not sure application

`Not sure` is valid. No additional application-description field is forced; Test objective still provides required buyer-written context.

## 9. Validation, Focus and Insufficient-information Board

### Full submit with missing required information

```text
┌────────────────────────────────────────────────┐
│ ! Check the information you entered.           │ ← programmatic focus
│ • Choose a product grade or unknown-grade.     │
│ • Choose an application, Other or Not sure.    │
│ • Describe what you need to evaluate.          │
│ • Enter a business email address...            │
└────────────────────────────────────────────────┘

Product grade — Required
[Choose a grade.................................]
! Choose a product grade or select “I do not know the grade”.
```

- Error summary is placed before the first form section, not at page top above Hero.
- Each summary item is a link to the invalid control.
- Field error includes text and an error icon/marker; border color is supplemental.
- Existing valid entries and all optional entries remain.
- Long error copy wraps without clipping at 390px.

### Focus

- keyboard focus ring surrounds the full control with a 2px visible outline plus offset;
- focus does not depend on a color-only border change;
- disclosure triggers, Remove/Change actions, checkboxes, selects and Submit all expose focus;
- focus order follows visual/DOM order with no focus jump to the review panel.

### First load

No error summary, red field state, success icon or pre-emptive required warning appears before interaction. Required status remains visible in labels.

## 10. Submission State Board

| State | Wireframe behavior | Copy/controls |
|---|---|---|
| Ready | All fields available | `Submit Sample Request for Review` |
| Validating | Error summary if needed; no page wipe | Field messages and linked summary |
| Submitting | Submit width remains stable; fields remain readable; duplicate submission prevented | `Sending your request…` plus non-color progress indicator |
| Receipt confirmed | Form region replaced or headed by a receipt panel; no approval/checkmark metaphor | Exact success copy in §10.1 |
| Submission unconfirmed | Failure panel appears above retained form; focus moves to heading; entries preserved | Exact failure copy + `Try again` |
| Form service unavailable | Form is not shown as usable; no fake disabled field wall | Restricted copy only; release blocked |

### 10.1 Receipt-confirmed frame

```text
┌──────────────────────────────────────────────────────────────────┐
│ Your sample request has been received for human review.          │
│ The information you provided will be reviewed. We may ask for    │
│ clarification, and any outcome will be communicated separately.  │
│                                                                  │
│ This receipt does not confirm sample approval, availability,     │
│ quantity, free supply, freight, dispatch, delivery or regulatory │
│ eligibility.                                                     │
└──────────────────────────────────────────────────────────────────┘
```

Use a neutral receipt/document icon, not a parcel, delivery truck, inventory check, green approval seal or certificate.

### 10.2 Submission-unconfirmed frame

```text
┌──────────────────────────────────────────────────────────────┐
│ We could not confirm that your request was received.         │
│ Your entries are still on this page. Please try again.       │
│ [Try again]                                                  │
└──────────────────────────────────────────────────────────────┘
│ FORM WITH ALL ENTRIES PRESERVED                              │
```

Timeout and ambiguous receiver responses use this failure state. There is no “maybe received” success-like treatment and no unverified fallback contact.

### 10.3 Service-unavailable frame

```text
┌──────────────────────────────────────────────────────────────┐
│ We cannot confirm sample requests right now.                 │
│ The sample request form is not available. No request has     │
│ been confirmed.                                              │
└──────────────────────────────────────────────────────────────┘
```

This is an internal review frame and release blocker, not permission to publish a dead conversion route.

## 11. Privacy and Human-review States

### Privacy slot

Gate 3 reserves a full-width acknowledgement block immediately before Submit. It must support 3–5 wrapped lines at Desktop and 6–10 lines at 390px plus one checkbox. Until exact approved copy exists, the board carries only the internal annotation:

`[APPROVED DATA-HANDLING AND HUMAN-REVIEW ACKNOWLEDGEMENT REQUIRED BEFORE GATE 5]`

The annotation cannot appear in Buyer Clean output. No `/privacy/` link is drawn.

### Human-review panel

The four-step sequence is descriptive, not a progress tracker. It has no active/completed state, clock, response-time estimate or automatic qualification badge. In the confirmed receipt state, the sequence remains informational; it does not move to “approved”.

## 12. PRODUCT V0.3 Wireframe Lock

- A valid upstream `M-2377 + Coatings/Plastics/Masterbatch/Printing Inks/Paper + Sulfate` context may appear as neutral editable rows.
- No fit score, recommended label, selection reason, available sample badge or market-eligibility badge appears.
- M-2377 + Specialty Materials never appears as automatic prefill or a public relation.
- Rubber is absent from the Application selector and every structured prefill example.
- M-996 and M-2196 are ordinary independent Grade options with identical visual weight. They are never adjacent as a comparison, ranked, badged or connected by arrows.
- No-public relationships create no disabled option, crossed-out item, empty row or `not applicable` copy.

## 13. Long-content Stress Cases

Gate 3 layout must remain stable with:

| Case | Test content/length | Expected behavior |
|---|---|---|
| Company | `International Advanced Coatings and Polymer Technical Evaluation Services (Malaysia) Sdn. Bhd.` | Wrap/scroll inside control as appropriate; no label collision |
| Email | 254-character syntactically handled address | No page overflow; error/helper wraps below |
| Destination | `United Kingdom — Northern Ireland technical evaluation destination` | Natural option/value truncation with accessible full name; no clipped arrow |
| Test objective | 2,000-character non-confidential evaluation description | Control grows/scrolls predictably; page remains operable |
| Notes | 2,000 characters | Same; Submit remains reachable |
| Error summary | All required-field errors simultaneously | Full wrap, linked list, no overlap at 390px |
| Receipt boundary | Full approved long boundary sentence | Minimum 16px body text; no tiny disclaimer |
| Prefill | Four long visible values and Remove/Change actions | Rows stack; no horizontal carousel |

## 14. Accessibility and Responsive Acceptance

- [x] Single H1 and continuous heading order.
- [x] Persistent labels, required markers and described-by relationships specified.
- [x] Error summary focus and field links specified.
- [x] Keyboard path and visible focus specified.
- [x] Status uses text and structure in addition to color.
- [x] 390px controls and Chrome targets are at least 44px logical.
- [x] No horizontal scroll in long data, error, privacy, success or prefill states.
- [x] Mobile Menu inherits focus trap, Escape and return-focus behavior.
- [x] Prefill is visible, editable and removable.
- [x] Failure preserves entries.
- [x] Exact success and failure semantics remain non-promissory.

## 15. Gate 3 Validation and Open Items

| ID | Result/status |
|---|---|
| Desktop 1440 structure | `PASS_SELF_CHECK / SUBMITTED_NOT_APPROVED` |
| Tablet 834 structure | `PASS_SELF_CHECK / SUBMITTED_NOT_APPROVED` |
| Mobile 390 structure | `PASS_SELF_CHECK / SUBMITTED_NOT_APPROVED` |
| Mobile Menu | `PASS_CONTRACT_CHECK / GLOBAL_CHROME_V0.5_UNCHANGED` |
| Prefill/unprefilled/unknown/validation/focus/error | `COVERED` |
| Failure/success/privacy/human-review/restricted | `COVERED` |
| Privacy exact copy | `OPEN / BLOCKS_GATE_5` |
| Receiver/manual channel/route | `OPEN / BLOCKS_RELEASE` |
| Gate 3 approval | `OPEN / SUBMITTED_WITH_GATE_4_PACKAGE` |

Self-check is not Gate 3 approval.

## 16. Version Record

| Version | Date | Change | Approval source |
|---|---|---|---|
| V0.1 | 2026-09-01 | First Desktop 1440, Tablet 834, Mobile 390 and state wireframe specification | User authorized work through Gate 4; wireframe remains submitted, not approved |
