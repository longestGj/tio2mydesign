# CONV-SAMPLE Gate 6 Responsive and Accessibility Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Review ID | `CONV-SAMPLE-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Visual source | V0.5 Gate 5 `APPROVED_GATE_5_BASELINE / ACTIVE` |

Static PNGs prove the approved composition only. They do not prove a runtime DOM, accessibility tree, route, form receiver or persistence behavior.

## 1. Approved Responsive Evidence

| Surface | Approved evidence | Gate 6 reading |
|---|---|---|
| Desktop unprefilled | 1440 × 4100 | Full-width Sample Request, then full-width Human Review, then FAQ; no right-rail blank region |
| Desktop prefilled | 1440 × 4397 | Visible editable Grade/Application/Process/Destination context without recommendation language |
| Desktop success | 1440 × 2391 | Receipt-only success and separate Human Review/FAQ flow |
| Tablet | 768 × 4802 | Dedicated complete page; 64px Header; one-column form; Privacy link and Footer present |
| Mobile unprefilled | 390 logical / 780 × 11004 physical | Complete single-column page and long-copy wrapping |
| Mobile prefilled | 390 logical / 780 × 12464 physical | Complete context card plus form and downstream modules |
| Mobile critical states | 390 logical @2x | Unknown, Other, validation/focus/error, submitting, failure, success and unavailable states |
| Mobile Menu | 390 × 720 logical / 780 × 1440 physical | Shared navigation with permanent Request a Quote |
| Internal state boards | 1440 Desktop and 390 logical Mobile | Component/state review evidence only; not Buyer Clean production UI |

## 2. Runtime Responsive Acceptance

- Verify 1440, 1280, 1024, 768, 430, 390, 375 and 320px without page-level horizontal scrolling.
- Desktop Header is 84px; responsive/Mobile Header is 64px according to Global Chrome V0.5.
- Page order remains breadcrumb → Hero → optional Prefill Context → Sample Request → Human Review → FAQ → Footer.
- The form is one main reading column; Desktop may pair related fields inside a section only.
- At 768px and below, form fields use one column and document choices wrap without clipping.
- Long company names, business email addresses, objectives, helpers, validation text and user-entered Destination values wrap without overlap or unreadable shrinking.
- Content height is intrinsic; no fixed-height crop, sticky submit, sticky review card or artificial filler band.
- Every interactive target is at least 44 × 44 logical px at 768px and below.

## 3. Semantic and Keyboard Acceptance

1. One H1 and a logical heading hierarchy for form groups, Human Review and FAQ.
2. One semantic form with persistent programmatic labels; placeholders never replace labels.
3. Required state is programmatically available and visibly expressed in text.
4. Keyboard focus order follows visible and semantic order.
5. Every input, select, checkbox, link, button and disclosure control has a visible focus indicator distinct from hover, error and current state.
6. Error summary receives focus after an invalid submit and links to every invalid field.
7. Hints and errors use `aria-describedby`; invalid fields expose `aria-invalid=true`.
8. Success, failure and unavailable panels receive appropriate focus and status/alert announcement without duplicate or premature speech.
9. Submitting sets a busy state and prevents repeat activation without trapping focus or disabling shared RFQ navigation.
10. Mobile Menu traps focus while open, closes on Escape, restores focus to its trigger and removes hidden navigation from the accessibility tree.
11. FAQ buttons expose `aria-expanded` and remain fully keyboard operable.
12. Reduced motion preserves all information; no state relies on colour alone.

## 4. Initial, Prefill and Conditional Acceptance

- Initial load is neutral: no errors, busy state, failure or success.
- Valid prefill is visible, editable and removable.
- Invalid/stale prefill clears safely without first-load errors or internal-status leakage.
- Unknown Grade is a valid path.
- Choosing `Other` reveals and requires Describe the application; leaving `Other` must not erase buyer text unexpectedly during a failed validation round.
- M-2377 neutral context never creates a recommendation badge, suitability sentence or comparison message.

## 5. State Acceptance

| State | Runtime acceptance |
|---|---|
| Validation failed | Values retained; exact summary and field errors; focus moves to summary; each error is programmatically associated. |
| Submitting | Button reads `Submitting request…`, is disabled, one browser attempt remains active and values stay visible. |
| Submission unconfirmed | Exact failure copy, `Try again`, retained values and focus on message; no receipt, Contact or invented fallback. |
| Success | Exact approved success copy only after explicit positive receiver acknowledgement; no sample approval, quantity, timing or dispatch meaning. |
| Service unavailable | Exact final-reader unavailable meaning; no request implied and no unverified contact channel. |

Refresh and back-navigation must not silently resubmit. Retryable values should be retained where the implementation can do so safely. Sensitive form values must not be written to URLs, analytics labels, page metadata or client-visible logs.

## 6. Shared Chrome and Non-regression

- Header, Mobile Header, Mobile Menu and Footer use the current Global Chrome contract and approved production SVG logos.
- Request a Quote remains present and linked to `/request-a-quote/` in every shared surface and form state.
- Request a Sample remains absent from first-level navigation; current navigation key remains `NONE`.
- Accessibility fixes at implementation time may make necessary semantic/focus changes, but any material change to approved copy, field set, hierarchy, composition or claims must return through change control.

