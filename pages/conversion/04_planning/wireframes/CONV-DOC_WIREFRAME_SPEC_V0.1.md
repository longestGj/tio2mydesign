# CONV-DOC Request Documents — Gate 3 Wireframe Specification V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `CONV-DOC` |
| URL | `/request-documents/` |
| Gate | Gate 3 — Desktop, Tablet and 390px wireframe plus interaction/restricted states |
| Version / date | V0.1 / 2026-09-01 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 2 input | `pages/conversion/04_planning/CONV-DOC_CONTENT_ARCHITECTURE_V0.1.md` |
| Shared Playbook | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` V0.1 |
| Global Chrome | V0.5 frozen; production SVG bindings; buyer-visible `CURRENT=0` |
| Gate ceiling | Historical Gate 3 creation scope stopped at Gate 4; later 2026-09-01 user authority permits Gate 5 execution only; this file remains the Gate 3 contract |

Wireframes use real-length English copy and long-state samples. They are structural review artifacts, not Buyer Clean visual designs.

## 1. Shared layout rules

| Rule | Desktop 1440 | Tablet 834 | Mobile 390 |
|---|---|---|---|
| Header | Frozen 84px | Frozen responsive contract; no desktop-nav leakage | Frozen 64px `Logo | RFQ | Menu` |
| Content shell | 1200px max | 730–770px usable shell | 16px outer gutters; 358px content |
| Main form width | 760–800px | Full shell | Full width |
| Review rail | 320–360px sticky only while it does not cover content | Moves above form | Inline above form |
| Fields | Two columns only for short compatible fields | One column | One column |
| Touch target | ≥44px | ≥44px | ≥44px |
| Navigation current state | Zero current links per Conversion surface | Same | Same; buyer-visible `CURRENT=0` |
| Footer | Frozen Deep Navy | Frozen | Frozen stacked mobile Footer |
| Horizontal overflow | 0 | 0 | 0 |

No sticky submit bar is used. The page-body has one submit control at the end of the form. Global RFQ remains a separate navigation action.

## 2. Desktop 1440px wireframe

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ 84px SHARED HEADER — production horizontal SVG                              │
│ Home Markets Products Applications Documents Resources About [Request Quote]│
│ Conversion route: no nav underline/current; visible CURRENT word = 0         │
└──────────────────────────────────────────────────────────────────────────────┘

      Home  /  Request Documents

┌──────────────────────────────────────────────────────────────────────────────┐
│ CONTROLLED DOCUMENT REQUEST                                                  │
│ Request titanium dioxide documents for review                               │
│ Tell us which product, destination market and document categories are       │
│ relevant to your evaluation. Your request will be reviewed by a person      │
│ before any file outcome is communicated.                                    │
│                                                                              │
│ Receipt boundary: Submitting confirms only that the request was received.    │
│ It does not confirm availability, applicability, current version, release,   │
│ download, delivery, compliance, origin proof or approval.                    │
└──────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────┐  ┌──────────────────────────────────────────┐
│ WHAT THIS REQUEST STARTS      │  │ DOCUMENT REQUEST DETAILS                 │
│ 1 Provide minimum context     │  │                                          │
│ 2 Submit the request          │  │ Context carried into this request        │
│ 3 Human review                │  │ [M-2377 ×] [Coatings ×] [Sulfate ×]      │
│ 4 Outcome communicated later  │  │ Edit context                             │
│                               │  │                                          │
│ No response-time or document  │  │ Contact name *       Company *           │
│ outcome is promised.          │  │ [________________]   [________________]  │
│                               │  │                                          │
│ [INTERNAL REVIEW ANNOTATION]  │  │ Business email *                         │
│ Approved privacy copy is      │  │ [________________________________________________]
│ required before approval.     │  │                                          │
└───────────────────────────────┘  │ Destination country or market *          │
                                   │ [Search/select__________________________] │
                                   │                                          │
                                   │ Product or grade *                        │
                                   │ [M-2377_______________________________⌄] │
                                   │ Includes Not sure / Multiple grades       │
                                   │                                          │
                                   │ Documents requested *                     │
                                   │ [ ] TDS       [ ] SDS       [ ] COA       │
                                   │ [ ] COO/Origin [ ] Traceability [ ] Other │
                                   │ Category help states routing scope only.   │
                                   │                                          │
                                   │ Additional request context                │
                                   │ [______________________________________]  │
                                   │ [______________________________________]  │
                                   │ [______________________________________]  │
                                   │ 0 / 2,000                                 │
                                   │                                          │
                                   │ Share only business contact details and   │
                                   │ non-confidential request context.          │
                                   │                                          │
                                   │ [INTERNAL PRIVACY SLOT — exact approved   │
                                   │  controller/purpose/retention/rights copy │
                                   │  required; not Buyer Clean copy]          │
                                   │                                          │
                                   │ [ ] Required acknowledgement text pending │
                                   │                                          │
                                   │ [Submit Document Request for Review]      │
                                   └──────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ REVIEWED BY A PERSON                                                         │
│ A person reviews the request and may ask for clarification. Any document     │
│ outcome is communicated separately. Receipt is not file approval or delivery.│
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ BEFORE YOU SUBMIT — four visible concise Q&A blocks                          │
│ Information needed / Unknown grade / Meaning of receipt / Next steps         │
│ Quiet conditional text link: Review document information                     │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ SHARED DEEP NAVY FOOTER — reverse SVG — fixed Request a Quote                 │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Desktop behavior

- The left review rail may be sticky within the form region only; it stops before Q&A and never overlaps Header/Footer.
- Form fields use a two-column row only for Contact name + Company. Email, market, product, categories, context, privacy and submit remain full-width.
- The terminal Global RFQ is visually separated from the page-primary form submit by location and label.
- `PREFILL_CONTEXT` is absent when no valid visible context exists; the form closes the space rather than leaving an empty card.

## 3. Tablet 834px wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ SHARED HEADER — no clipped Desktop navigation                │
└──────────────────────────────────────────────────────────────┘
  Home / Request Documents
┌──────────────────────────────────────────────────────────────┐
│ HERO: H1 + intro + full receipt boundary                     │
└──────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────┐
│ WHAT THIS REQUEST STARTS — 4 equal compact steps or 2×2      │
└──────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────┐
│ PREFILL CONTEXT (only if valid): wrapped editable chips      │
├──────────────────────────────────────────────────────────────┤
│ CONTACT NAME *                                               │
│ COMPANY *                                                    │
│ BUSINESS EMAIL *                                             │
│ DESTINATION *                                                │
│ PRODUCT / GRADE *                                            │
│ DOCUMENT TYPES * — checkbox grid 2 columns                   │
│ ADDITIONAL CONTEXT                                           │
│ NON-CONFIDENTIAL WARNING                                     │
│ [INTERNAL PRIVACY SLOT]                                      │
│ [ACKNOWLEDGEMENT]                                            │
│ [SUBMIT DOCUMENT REQUEST FOR REVIEW]                         │
└──────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────┐
│ HUMAN REVIEW + Q&A + conditional information link            │
└──────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────┐
│ SHARED FOOTER                                                │
└──────────────────────────────────────────────────────────────┘
```

### Tablet behavior

- Review rail becomes a full-width block before the form; no sticky side rail.
- All buyer fields are one column. Document types may use two columns only if each row remains ≥44px and labels do not clip.
- Long destination labels and error text wrap; selects never force horizontal scrolling.

## 4. Mobile 390px wireframe

```text
┌──────────────────────────────────────┐
│ 64px: [Logo 120×40] [RFQ] [Menu]    │
│ no current marker on Conversion      │
└──────────────────────────────────────┘
  Home / Request Documents

┌──────────────────────────────────────┐
│ CONTROLLED DOCUMENT REQUEST          │
│ Request titanium dioxide documents  │
│ for review                           │
│                                      │
│ Full 2–3 sentence intro              │
│                                      │
│ Receipt-only boundary (not collapsed)│
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ WHAT THIS REQUEST STARTS             │
│ 1 Minimum context                    │
│ 2 Submit                             │
│ 3 Human review                       │
│ 4 Separate outcome                   │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ CONTEXT (if valid)                   │
│ [M-2377 ×]                           │
│ [Coatings ×] [Sulfate ×]            │
│ Edit context                         │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ DOCUMENT REQUEST DETAILS             │
│                                      │
│ Contact name *                       │
│ [__________________________________] │
│ Company or organization *            │
│ [__________________________________] │
│ Business email *                     │
│ [__________________________________] │
│ Destination country or market *      │
│ [________________________________⌄] │
│ Product or grade *                   │
│ [Not sure / select_______________⌄] │
│                                      │
│ Documents requested *                │
│ [ ] TDS                              │
│ [ ] SDS                              │
│ [ ] COA                              │
│ [ ] COO / Origin                     │
│ [ ] Traceability                     │
│ [ ] Other                            │
│ Every option row ≥44px               │
│                                      │
│ Additional request context           │
│ [__________________________________] │
│ [__________________________________] │
│ [__________________________________] │
│ 0 / 2,000                            │
│                                      │
│ Non-confidential warning             │
│ [INTERNAL PRIVACY SLOT]              │
│ [ ] Required acknowledgement         │
│                                      │
│ [ SUBMIT DOCUMENT REQUEST FOR REVIEW ]
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ REVIEWED BY A PERSON                 │
│ Full receipt/no-outcome boundary     │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ BEFORE YOU SUBMIT                    │
│ Four full-width Q&A disclosures      │
│ Review document information →        │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ SHARED DEEP NAVY MOBILE FOOTER       │
│ reverse SVG + fixed Request a Quote  │
└──────────────────────────────────────┘
```

### 390px behavior

- Outer gutters are 16px; no control exceeds the 358px content width.
- Every checkbox row, button, menu row, edit/remove control and disclosure trigger has a logical target ≥44px.
- The long submit label wraps to two centered lines rather than shrinking below readable size.
- Privacy, error, failure and success text use natural height; no fixed-height cards clip content.
- No sticky page submit; mobile browser controls and Footer remain unobstructed.

## 5. Mobile Menu Open state

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
│ Request a Quote                      │
└──────────────────────────────────────┘
```

- CONV-DOC does not add a menu item.
- No row receives visible CURRENT or current structure on this unmapped Conversion route.
- The global RFQ remains the terminal row and the closed-Header RFQ remains present.
- When the menu is open, only the Mobile navigation surface is accessible/focusable; the Desktop surface is excluded.

## 6. Prefill and empty states

### 6.1 Valid M-2377 context

Visible context panel:

```text
Context carried into this request
[M-2377 ×] [Coatings ×] [Sulfate ×]
Review or remove these values before submitting.
```

No text says recommended, suitable, available or approved.

### 6.2 Empty prefill

- `PREFILL_CONTEXT` does not render.
- Product defaults to a neutral unselected state with `Not sure` as a valid choice.
- No first-load error appears.

### 6.3 Stale/unsupported prefill

- Unsupported value is discarded before visible rendering.
- Valid remaining values are preserved.
- The form stays usable and shows no internal status, warning or negative applicability statement.

### 6.4 Restricted relationship

- System-carried M-2377 → Specialty Materials does not render.
- System-carried Rubber does not render as a structured option.
- M-996/M-2196 never produces a comparison helper, ranking or automatic switch.
- `NO_PUBLIC_MAPPING` is not translated into buyer-visible negative copy.

## 7. Validation, focus and error wireframes

### 7.1 Focus

```text
Business email *
╔════════════════════════════════════╗
║ buyer@example-company-name.com    ║  ← visible 3px focus treatment
╚════════════════════════════════════╝
Hint remains present; focus is not replaced by hover/error styling.
```

### 7.2 Field error

```text
Business email *
┌────────────────────────────────────┐
│ purchasing-team@                   │
└────────────────────────────────────┘
(!) Enter a business email in the format name@company.com.
```

Error uses text + icon/structure + border; never color alone. Entry is preserved.

### 7.3 Submit error summary

```text
┌──────────────────────────────────────┐
│ (!) Review the highlighted fields    │  ← programmatic focus after submit
│ • Enter your contact name            │  → moves focus to field
│ • Select at least one document type  │  → moves focus to group legend
└──────────────────────────────────────┘
```

The summary sits directly above the first form field. It does not replace field-level errors.

### 7.4 Other selected

- Selecting Other inserts `Describe the other document you need *` immediately below the group.
- Focus moves to the revealed field only as a direct result of the selection.
- Deselecting Other removes its required status but preserves typed text for the current page session unless the buyer clears it.

## 8. Submission states

### 8.1 Submitting

```text
[ Submitting your request… ]
The body submit prevents duplicate activation.
Global Header/Footer RFQ remains visible and usable as navigation.
```

No animation is the sole signal; live text communicates progress.

### 8.2 Receipt confirmed

```text
┌──────────────────────────────────────────────────────────────┐
│ ✓ Your document request has been received for human review. │
│                                                              │
│ This receipt does not confirm file availability,             │
│ applicability, current version, release, download, delivery, │
│ compliance, origin proof or approval. Any outcome will be    │
│ communicated separately.                                     │
└──────────────────────────────────────────────────────────────┘
```

The state replaces the editable form in the same main region after explicit positive receiver acknowledgement. No reference number appears without a real receiver value.

### 8.3 Submission unconfirmed

```text
┌──────────────────────────────────────────────────────────────┐
│ ! We could not confirm receipt.                              │
│ We could not confirm that your request was received. Your    │
│ entries are still on this page. Please try again.            │
│ [Try again]                                                   │
└──────────────────────────────────────────────────────────────┘
```

The form and entries remain immediately below. No Contact, email, phone or ticket fallback appears.

### 8.4 Form service unavailable — internal review state

```text
[INTERNAL REVIEW STATE — NOT A RELEASE CANDIDATE]
Form receiver unavailable. Preserve full shared Chrome and page structure.
RELEASE_BLOCKER until receiver readiness is restored.
```

Gate 4 may style this on an internal state board only. It cannot become a knowingly released Buyer Clean page.

## 9. Privacy state

Gate 3 reserves natural-height space immediately before acknowledgement and submit:

```text
┌──────────────────────────────────────────────────────────────┐
│ INTERNAL ANNOTATION — APPROVED DATA-HANDLING COPY REQUIRED   │
│ controller • purpose • categories • recipients/transfers     │
│ retention criterion • rights • approved privacy channel      │
│ acknowledgement/consent basis                                │
└──────────────────────────────────────────────────────────────┘
```

This annotation appears only in review wireframes/state boards. It is not Buyer Clean copy, a Privacy link or a legal claim. Gate 5 Buyer Clean approval and release remain blocked until exact approved wording is supplied; later execution authority permits only an annotated Gate 5 review candidate.

## 10. Long-content stress cases

| Test | Wireframe requirement |
|---|---|
| Company | `International Advanced Coatings, Polymer Compounding and Technical Materials Procurement Holdings Sdn. Bhd.` wraps without label/control collision |
| Email | 254-character technical maximum does not overflow; visible value may horizontally scroll inside the input without widening layout |
| Destination | `United Kingdom — Northern Ireland procurement destination under review` wraps/selects without truncating the label |
| Notes | 2,000 characters grow textarea to a capped comfortable height with internal scroll after threshold; counter stays visible |
| Error | Two-line and three-line errors increase row height |
| Success | Full negative boundary remains visible on 390px without truncation |
| Context chips | M-2377 + Printing Inks + Sulfate wrap onto separate lines and each Remove target remains ≥44px |

## 11. Gate 3 responsive and accessibility checks

- [x] Desktop, Tablet and 390px structures are defined.
- [x] Desktop Header 84px and Mobile Header 64px are inherited.
- [x] Conversion route current-link count and visible CURRENT word remain zero.
- [x] Production SVG surface bindings are reserved through shared Chrome.
- [x] One body submit control; no sticky duplicate.
- [x] Default, valid, empty, stale and restricted prefill states are defined.
- [x] Focus, field error, summary, Other conditional field and keyboard targets are defined.
- [x] Submitting, receipt-confirmed, unconfirmed failure and service-unavailable states are defined.
- [x] Privacy is an internal annotated slot only.
- [x] Mobile Menu does not add CONV-DOC or infer a current parent.
- [x] 390px targets are ≥44px and layout specifies zero overflow.
- [x] Long real-length content is included.
- [x] No file inventory, download, approval or delivery promise appears.

## 12. Open controls and review status

| Control | Status | Gate effect |
|---|---|---|
| Gate 3 project-control/user review | `OPEN` | Wireframe submitted, not approved |
| Approved privacy text | `OPEN` | Blocks Gate 5 Buyer Clean approval and release; annotated review slot is allowed through Gate 5 execution |
| Receiver/owner/readiness | `NOT_VERIFIED` | Release blocker; channel-free failure is the only current public failure pattern |
| Alternative manual channel | `NOT_VERIFIED` | No Contact/email/phone branch |
| Document inventory | `ABSENT / FACT_FREEZE` | Categories remain neutral request-routing controls |
| Global Chrome implementation | Outside this task | No code or runtime claim |

## 13. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial Desktop/Tablet/390px structure and form-state wireframe contract | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
