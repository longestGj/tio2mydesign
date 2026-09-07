# CONV-SAMPLE Visual Direction V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `CONV-SAMPLE` |
| Page | Request a Sample |
| URL | `/request-sample/` |
| Gate | Gate 4 — Visual Direction |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_USER_REVIEW / NOT_APPROVED` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Selected direction | `Technical Review Desk` |
| Inputs | Gate 2 content architecture, Gate 3 wireframe, Conversion Playbook V0.1, Visual Standard V1.0, Global Chrome V0.5, production SVG manifest, PRODUCT V0.3 |
| Stop boundary | Gate 4; Gate 5 is `NOT_STARTED / NOT_AUTHORIZED` |
| Excluded | Full visual frames, development, CMS, code, testing, release and `D:\16Wordpress_nextjs` |

This direction defines the visual system for review. It is not the Gate 5 full visual and does not authorize implementation or publication.

> **Continuation notice — 2026-09-01:** The user subsequently authorized Gate 5 execution. `Technical Review Desk` has been rendered in `../visual-designs/CONV-SAMPLE_FULL_VISUAL_DESIGN_V0.1.md`; Gate 5 remains submitted/not approved/privacy-blocked and does not authorize implementation or publication.

## 1. Direction Decision

The selected direction is **Technical Review Desk**: a restrained industrial B2B intake that feels like a clear technical-review document rather than an ecommerce checkout, lead-generation splash page or sample-order flow.

| Direction | Assessment | Decision |
|---|---|---|
| Sample ordering portal | Familiar transactional pattern | Implies inventory, quantity selection, fulfilment and automatic acceptance | Rejected |
| Laboratory campaign | Visually dramatic | Lab imagery can imply testing capability, performance proof or sample readiness | Rejected |
| Technical Review Desk | Supports minimal data entry, human review and non-approval boundaries | Requires careful hierarchy so boundary copy remains readable | Selected |

The visual hierarchy gives the test objective more prominence than optional commercial details and makes human review visible without turning it into a guaranteed process tracker.

## 2. Brand Continuity

- Typography: Inter only; H1/H2 use firm Navy hierarchy, body text remains highly readable.
- Primary Navy `#062B5B`: headings, form section labels, focus-outline base and key rules.
- Deep Navy `#031B3A`: inherited Footer and limited high-contrast receipt/boundary surfaces.
- Controlled Teal `#007F77`: active links, selected-control accents and real interactive emphasis.
- White `#FFFFFF`: dominant form and content surface.
- Soft Background `#F5F8FB`: page ground and section separation.
- Border `#D9E2EC`: form controls, dividers and neutral panels.
- Body `#334155`: primary paragraph and helper copy.
- Error `#B42318` with text/icon/summary structure; never color alone.
- Success/receipt uses Navy/Teal neutral acknowledgement, not an “approved” green seal.

Global Header, Mobile Menu and Deep Navy Footer retain their approved visual system unchanged.

## 3. Production Logo and Chrome Lock

| Surface | Asset / behavior |
|---|---|
| Desktop/Mobile Header | `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`; 180×60 Desktop, 120×40 Mobile |
| Desktop/Mobile Footer | `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`; 180×60 |
| Desktop Header | 84px; exact navigation order; permanent RFQ to `/request-a-quote/` |
| Mobile Header | 64px; `Logo | RFQ | Menu` |
| Mobile Menu | Same exact order; permanent RFQ; ≥44px targets |
| Current-state treatment | CONV-SAMPLE has 0 buyer-visible `CURRENT` labels and 0 `aria-current=page` mappings |

The SVG artwork is used unchanged. No recreated wordmark, PNG fallback, recoloring, stretching or new conversion-page navigation item is permitted.

## 4. Page-specific Visual Language

### 4.1 Technical dossier, not order form

Use section numbers and thin rules to suggest a review dossier:

- `01 EVALUATION CONTEXT`;
- `02 BUSINESS AND DESTINATION CONTEXT`;
- `03 OPTIONAL TRIAL CONTEXT`.

Numbers organise reading only. They do not show completion, qualification or approval. No shopping-cart, parcel, inventory, shipping or credit-card icon is used.

### 4.2 Human-review boundary

The Hero boundary is a full-width inset panel with a 3px Teal rule, a small neutral review icon and 16px body copy. It cannot be reduced to faint legal text. The visual must support the complete list of non-confirmed outcomes without truncation.

### 4.3 Review sequence

The four review stages use a vertical editorial list with neutral outlined numbers. There are no connecting progress bars, completed checkmarks, active-stage animation, clocks or delivery estimates.

### 4.4 Prefill context

Prefilled values appear as compact bordered rows, not recommendation pills. Each row contains:

- neutral field label;
- visible value;
- text actions `Change` and/or `Remove` with independent focus states.

M-2377, its five approved Application values and Sulfate receive no special color, badge, rank or icon.

## 5. Color and Surface Ratio

| Surface | Approximate share |
|---|---:|
| White | 62–68% |
| Soft Background | 16–20% |
| Primary/Deep Navy | 10–14% |
| Teal and status accents | 4–6% |

Form card: white, 1px neutral border, 12px radius and shadow no stronger than `0 10px 30px rgba(6,43,91,.07)`. Inputs use 6–8px radius, never giant pills. The review panel may use a Soft Background or very pale Navy tint; it must not resemble an approved-status card.

## 6. Typography and Rhythm

| Element | Desktop | Tablet | 390px | Notes |
|---|---:|---:|---:|---|
| H1 | 52px / 1.08 | 44px / 1.10 | 36–38px / 1.12 | Natural wrap; no oversized campaign headline |
| H2 | 36px / 1.15 | 32px | 28px / 1.20 | Form and answer sections |
| Form section label | 15px / 1.4, 700 | Same | 14px / 1.4 | Uppercase with controlled tracking |
| Label | 15–16px / 1.4, 600 | Same | 16px / 1.4 | Persistent; never placeholder-only |
| Body | 17px / 1.65 | 16–17px | 16px / 1.65 | Boundaries remain full-size |
| Helper/error | 14px / 1.5 | 14px | 14px / 1.5 | Error not smaller than helper |
| Button | 16px / 1.2, 600 | 16px | 16px | Min 48px preferred, never below 44px |

Desktop section gaps are 80–104px; Tablet 64–80px; Mobile 48–64px. Form field vertical rhythm is 24–28px between controls and 40–48px between form sections.

## 7. Hero Direction

The Hero is a compact Soft Background field with left-aligned content inside the shared shell. It avoids photography and uses one abstract visual only: a thin line connecting `REQUEST`, `HUMAN REVIEW` and `SEPARATE OUTCOME` labels.

This line is not a live status tracker and receives presentation-only semantics. It contains no parcel, warehouse, lab result, clock, checkmark or arrow to “approved”.

Desktop:

- copy width 7–8 columns;
- abstract review line may occupy 4–5 columns;
- boundary panel spans the copy width or full shell below both columns;
- no Hero form, floating submit or duplicate CTA.

Tablet/Mobile:

- motif moves below intro and above the boundary note, or is omitted if it causes an oversized Hero;
- the boundary stays within the first viewport progression and remains fully readable;
- no decorative empty block after the copy.

## 8. Form Component Recipe

### Controls

- input/select height 52px Desktop and 48–52px Mobile;
- textarea minimum 144px for Test objective and 112px for optional notes;
- border contrast remains visible on White and Soft Background;
- selected values use text plus control state, never colored chips alone;
- native browser assistance and long-value clipping preserve accessible full values.

### Labels and helpers

- label sits 8px above control;
- `Required` or `Optional` is spelled out, not represented only by an asterisk;
- helper sits 8px below control and has adequate contrast;
- no helper claims secure handling, non-sharing, response time or availability.

### Primary submit

- Navy filled button with White text; Teal may appear as a narrow accent or hover/focus treatment;
- label is exactly `Submit Sample Request for Review`;
- Desktop width fits label without becoming a full-width ecommerce checkout bar;
- Mobile width is 100%; no sticky duplicate;
- submitting state preserves width and uses text plus a spinner/progress indicator that does not imply success.

### Optional document choices

Use checkboxes or multi-select rows, not colourful document badges. `TDS`, `SDS`, `COA`, `COO` and `Other / Not sure` remain neutral choices. No download icon or available label appears.

## 9. Responsive Composition

### Desktop 1440

- 1240px shell and 8/4 form/review split;
- main form card is visually dominant;
- review panel top aligns with the form heading and remains static;
- answer rows use a 4/8 editorial split below the form.

### Tablet 834

- form and review panel stack;
- Contact name and Company may use 2-up only when long-copy tests pass;
- review sequence becomes 2×2 or one column without progress-line semantics;
- no compressed right rail.

### Mobile 390

- 16px outer gutters; all content one column;
- prefill context becomes bordered rows with actions below or beside the value when space permits;
- every field-level message uses the full field width;
- primary button full width;
- review steps use a simple vertical list;
- questions use full-width disclosure rows with at least 48px triggers;
- no horizontal chip rail, clipped email, hidden helper or Footer overlap.

## 10. Interaction and State Direction

| State | Visual treatment | Prohibited implication |
|---|---|---|
| Default | Neutral border, persistent label | No premature error |
| Hover | Slight border emphasis on real controls only | No card lift on non-clickable context |
| Focus | 2px Navy outline with offset plus control border | Not color-only |
| Valid selection | Normal control with visible value | No green approved check |
| Error | Red marker/icon, explicit message, error summary and focus | No shake-only or color-only error |
| Submitting | Stable button, `Sending your request…`, progress indicator | No `processing sample` or fulfilment language |
| Receipt | Navy/Teal acknowledgement panel and neutral receipt icon | No approval seal, parcel or shipment status |
| Failure | Warm-neutral/red border, retained form immediately below, `Try again` | No lost-data appearance or false success |
| Restricted | Neutral explanatory panel, no usable fake form | No invented fallback contact |

Motion is limited to 120–160ms control/disclosure transitions. Reduced-motion removes nonessential transitions.

## 11. Error and Focus Visual Board

- Error summary uses a 4px red left rule, icon, heading and linked list on a pale neutral/red-tinted surface.
- Field error uses the same icon family and message text below the field.
- The focus target receives a visible outline even when the field is already in an error state.
- The first invalid field is not automatically scrolled behind the 84px/64px Header.
- On Mobile, long error links wrap to multiple lines while keeping a ≥44px activation area.
- Success and failure headings receive programmatic focus but are not styled as modal dialogs unless the approved interaction actually is modal; this direction assumes inline replacement/panel behavior.

## 12. Privacy and Restricted-state Visual Treatment

The acknowledgement is reserved as a calm full-width bordered panel before Submit. It supports a checkbox, 3–5 lines Desktop and 6–10 lines Mobile. No lock icon, shield, `secure`, `private`, `never shared` or retention badge appears without approved evidence.

Until the exact privacy/data-handling copy is approved, Gate 4 review artefacts may show only the clearly non-public annotation:

`[APPROVED DATA-HANDLING AND HUMAN-REVIEW ACKNOWLEDGEMENT REQUIRED BEFORE GATE 5]`

The service-unavailable treatment uses a neutral document/receiver icon and direct text. A disabled form skeleton is avoided because it can imply temporary but otherwise guaranteed operation.

## 13. PRODUCT V0.3 Visual Lock

- Grade options are alphabetic/registered-list controls with equal visual weight; no recommendation score or preferred Grade.
- M-2377 may appear in prefill context with Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate only as neutral source context.
- M-2377 + Specialty Materials is not auto-rendered.
- Rubber is not a tag, option, category, icon, route label or Schema relation; buyer text under Other remains ordinary unclassified input.
- M-996 and M-2196 do not receive paired placement, different badges, arrows, rank numbers, plus/minus comparisons or alternative/equivalent language.
- No-public mappings produce no grey disabled option, crossed-out state or negative suitability visual.

## 14. Imagery and Icon Boundary

No AI-generated or stock photography is needed. A form-led page benefits from deterministic typography, fields and simple line graphics, and avoids implying unverified capability.

Allowed icons:

- neutral request/document outline;
- person-review outline;
- clarification/question outline;
- separate-message/outcome outline;
- error, information and neutral receipt symbols.

Prohibited visuals:

- factory, production line, warehouse or stocked bags;
- laboratory equipment/results that imply in-house testing or verified performance;
- free sample box, parcel, freight, port, truck, plane or delivery map;
- certificate, regulatory seal, availability checkmark or approval stamp;
- country flags used as eligibility indicators;
- competitor logos, equals signs, substitution arrows or ranking trophies.

## 15. Accessibility Direction

- Contrast is checked for body, helper, error, boundary and button text.
- Visible focus applies to every control, disclosure, prefill action, Header item and Mobile Menu row.
- Labels and states are not communicated through placeholder, color, icon, position or motion alone.
- Target size is ≥44px logical across 390px Header, Menu, inputs, checkboxes, disclosure rows and actions.
- Decorative review-line motif is ignored by assistive technology.
- Error summary, field errors, receipt and failure states have programmatic headings/focus targets.
- Long form values, 254-character email handling, 2,000-character text, long privacy copy and long boundary copy remain readable without horizontal scrolling.

## 16. Gate 5 Frame Requirements — Recorded, Not Started

If Gate 4 is later approved and Gate 5 is separately authorized, the complete visual set must include:

1. Desktop 1440 unprefilled Buyer Clean.
2. Desktop 1440 valid prefilled context.
3. Tablet 834 primary layout.
4. Mobile 390 unprefilled Buyer Clean.
5. Mobile 390 valid prefilled context.
6. Mobile Menu open with permanent RFQ and zero CONV-SAMPLE current mapping.
7. Unknown Grade and Other/Not sure Application.
8. Insufficient information, inline validation, error summary and focus.
9. Submitting, unconfirmed failure with retained values and confirmed receipt.
10. Privacy acknowledgement, human-review sequence and service-unavailable restricted state.
11. Long-copy stress board.

This list is acceptance planning only. No Gate 5 frame has been created or approved.

## 17. Gate 4 Self-check

- [x] The direction is visually distinct as a technical review intake without becoming an order flow.
- [x] Visual Standard and Global Chrome V0.5 remain unchanged.
- [x] Production SVG bindings are explicit.
- [x] Desktop, Tablet and 390px composition rules are defined.
- [x] Default, prefill, unknown, validation, focus, failure, success, privacy, human-review and restricted states have visual rules.
- [x] Receipt and review never look like approval or fulfilment.
- [x] PRODUCT V0.3 public and frozen relationships are visually controlled.
- [x] No evidence-implying photography is required.
- [x] Gate 5+, development and release remain excluded.

Self-check is not Gate 4 approval.

## 18. Open Items

| ID | Level | Status |
|---|---|---|
| CS-G4-01 | REVIEW | `OPEN_USER_REVIEW / SUBMITTED_NOT_APPROVED` |
| CS-G2-01 | REVIEW | `OPEN / INCLUDED_IN_SAME_REVIEW_PACKAGE` |
| CS-G3-01 | REVIEW | `OPEN / INCLUDED_IN_SAME_REVIEW_PACKAGE` |
| CS-PRIV-01 | BLOCKING_GATE_5_RELEASE | `OPEN`; approved data-handling/acknowledgement copy missing |
| CS-RCV-01 | BLOCKING_RELEASE | `OPEN`; receiver/positive acknowledgement not verified |
| CS-MAN-01 | BLOCKING_RELEASE | `OPEN`; fallback channel not verified |
| CS-ROUTE-01 | BLOCKING_RELEASE | `OPEN`; route/form not tested in this project |
| CS-SEO-01 | REVIEW | `OPEN`; indexing/canonical activation not approved |
| CS-REL-01 | CONTROLLED | `CONTROLLED_IN_DIRECTION` under PRODUCT V0.3 |

## 19. Version Record

| Version | Date | Change | Approval source |
|---|---|---|---|
| V0.1 | 2026-09-01 | First Gate 4 direction for CONV-SAMPLE; `Technical Review Desk` selected | User authorized work through Gate 4; direction submitted for review, not approved |
