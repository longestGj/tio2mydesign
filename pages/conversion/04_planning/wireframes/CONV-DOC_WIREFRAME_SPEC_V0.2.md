# CONV-DOC Request Documents — Gate 3 Wireframe Specification V0.2

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G5-V11-20260901-01` |
| Gate 2 input | `pages/conversion/04_planning/CONV-DOC_CONTENT_ARCHITECTURE_V0.2.md` |
| Status | `EXECUTED / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Required views | 1440 Desktop, 768 Tablet, logical 390px Mobile, Mobile Menu Open, state board |

V0.1 is historical and cannot govern the V1.1 field set.

## 1. Shared structure

All widths use the approved shared Header/Footer. Request Documents has no first-level navigation key, so buyer-visible `CURRENT` count is zero. The body is one transaction flow:

```text
Review ribbon (internal artifact only)
Shared Header + permanent RFQ
Breadcrumb
Hero: H1 + receipt-only boundary
Three-step cue: Your Details / Request Details / Human Review
Minimum-information note
Single-column form
  Prefill review (conditional)
  Your Details
  Request Details
  Review
  Privacy evidence-gated slot
  Request Documents
Shared Deep Navy Footer + permanent RFQ
```

No educational sections or market modules follow the form.

## 2. Desktop 1440

- Desktop Header is 84px; the shared Logo, navigation order and RFQ are unchanged.
- Hero uses a two-column composition: message left, receipt-only boundary right.
- Body container is 880px maximum and centered.
- Three short steps sit in one row above the form; they are orientation, not wizard navigation.
- Form fields scan in one column. Document types also use one column to keep long V1.1 labels stable.
- Submit row places the non-approval reminder left and primary CTA right.
- Footer begins after a clear but non-decorative gap.

## 3. Tablet 768

- Shared 64px compact Header with `Logo | RFQ | Menu`.
- Hero stacks message above boundary.
- Steps stack vertically.
- Form remains one column with 32px page gutters and no horizontal scrolling.
- CTA spans the content width; footer RFQ remains present.

## 4. Mobile 390

- Logical viewport 390px; review export may be 780px at 2×.
- Shared Header is 64px. Quote and Menu both remain at least 44px high.
- Hero, steps, chips, fields, six document choices, review block and submit action are single-column.
- Long labels wrap within the card; no fixed-width input or chip may force overflow.
- Primary page action is full width. Footer RFQ is also present but separated by the full page task and footer hierarchy.

## 5. Conditional and interaction states

| State | Wireframe rule |
|---|---|
| Valid prefill | Show editable/removable chips and matching form values |
| Empty prefill | Omit the context box completely |
| Stale/unsupported | Discard silently; no unsuitable/inapplicable statement |
| 14-grade selector | Must contain M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901 |
| Restricted request | Show human-review boundary; never availability, approval or certification |
| Focus | High-contrast visible ring with separation from the control border |
| Validation | Adjacent error plus focusable summary |
| Personal email | Non-blocking advice only |
| Submitting | Preserve values, disable duplicate submit, use progress label |
| Failure | Preserve values; state receipt is unconfirmed; show Try again only |
| Success | Exact V1.1 heading/body; View Products; no SLA or RFQ push |
| Privacy | Internal annotation in review artifact; not buyer-clean copy |
| Long content | 254-character email and 500-character Additional Requirements stay inside controls |

## 6. Field order and accessibility

Every control has a persistent label; required fields use both text and programmatic required semantics in eventual implementation. Document options have at least 44px targets. Error is not expressed by colour alone. Reading order and keyboard order follow the visible single-column sequence. The review summary does not replace editable controls.

## 7. Gate 3 verification

- 1440, 768 and 390 render widths are represented in Gate 5 assets.
- No buyer-visible destination/market field exists.
- Country / Region helper defines contact/company location only.
- Global RFQ is visible in Desktop Header, Mobile Header, Mobile Menu and both Footer layouts.
- Request Documents is absent from first-level navigation.

Status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.
