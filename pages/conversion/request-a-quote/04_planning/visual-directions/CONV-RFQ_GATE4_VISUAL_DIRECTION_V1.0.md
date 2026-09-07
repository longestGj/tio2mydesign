# CONV-RFQ Gate 4 Visual Direction V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Page type | RFQ conversion page |
| Primary keyword | `titanium dioxide quote supplier` |
| Gate | Gate 4 — visual direction |
| Review ID | `CONV-RFQ-G4-VD-01` |
| Date | 2026-09-01 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 3 | `USER_APPROVED / CLOSED` |
| Gate 4 authority | `AUTHORIZED / IN_PROGRESS` |
| Gate 5 | `LOCKED / NOT_AUTHORIZED` |

Gate 4 defines the visual language and representative component states only. The four visual boards are not complete-page Gate 5 designs and do not change approved content, fields, structure or Global Chrome.

## 1. Recommended direction

**Procurement Form Editorial** is the recommended direction: a white-led industrial B2B page with compact editorial hierarchy, one centred RFQ surface, Navy information structure and an accessible Deep Teal action system.

The page should feel like a professional procurement intake route, not a sales landing page, ecommerce checkout, SaaS dashboard or long legal form.

Direction priorities:

1. The buyer understands the request purpose immediately.
2. The form is visually dominant without becoming visually heavy.
3. Required information is easy to scan and complete.
4. Privacy, validation and outcome states are visible at the point of use.
5. Shared Header/Footer remain visually continuous with the rest of the site.

## 2. What changes from approved Gate 3

| Gate 3 grayscale structure | Gate 4 visual direction |
|---|---|
| Neutral grayscale canvas | White main canvas with restrained Soft Background framing |
| Generic dark hierarchy | Primary Navy headings and rules |
| Generic solid CTA | Accessible Deep Teal solid CTA with white text |
| Generic form outline | White form surface, 1px Border Gray, 12px radius, very light Navy shadow and a thin Teal leading rule |
| Structural focus/error boxes | Executable focus, error, failure and success colour/state language |
| Placeholder shared Logo proof | Approved production SVG Logo binding in representative Header samples |

No module, field, label, helper, error, state copy, CTA destination or responsive order changes.

## 3. Colour direction

| Token | Value | Use |
|---|---|---|
| Primary Navy | `#062B5B` | H1/H2, field labels, important rules and shared structure |
| Deep Navy | `#031B3A` | Review-board framing and inherited Footer only; not a page-body panel |
| Accessible Teal | `#007F77` | Solid CTA, linked text, focused border and small accent text |
| Teal Hover | `#006B65` | Primary CTA hover/active |
| Bright Malaysia Teal | `#00A99D` | Non-text accent only; never small body text or white-text button fill |
| White | `#FFFFFF` | Main canvas and form surface |
| Soft Background | `#F5F8FB` | Page framing and low-weight alternative-request surface |
| Border Gray | `#D9E2EC` | Inputs, cards and dividers |
| Body Text | `#334155` | Body and input values |
| Supporting Text | `#526176` | Helpers and secondary explanations |

Semantic states:

| State | Text | Background | Border |
|---|---|---|---|
| Error / invalid | `#B42318` | `#FFF1F0` | `#FDA29B` |
| Failure / retry | `#B54708` | `#FFFAEB` | `#FEDF89` |
| Success / receipt | `#067647` | `#ECFDF3` | `#ABEFC6` |

Validated contrast ratios against white: Accessible Teal 4.88:1, Teal Hover 6.38:1, Primary Navy 13.96:1, Body Text 10.35:1 and Supporting Text 6.31:1.

## 4. Typography

Font family is Inter throughout.

| Element | Desktop | Tablet | Mobile | Weight |
|---|---:|---:|---:|---:|
| H1 | 52–56px / 1.1 | 36–40px / 1.15 | 28–34px / 1.15 | 700 |
| Form H2 | 28–32px | 25–28px | 22–26px | 700 |
| Group label | 13–14px | 12–13px | 12–13px | 700 |
| Field label | 14–15px | 14px | 14px | 700 |
| Body | 16–17px / 1.6 | 15–16px / 1.6 | 16px / 1.55–1.65 | 400 |
| Helper / error | 12–14px | 12–13px | 12–13px | 400–600 |
| Button | 14–15px | 14px | 14px | 700 |

Long text wraps naturally. Nothing is truncated, ellipsized or compressed to preserve an artificial height.

## 5. Layout and spacing

- Desktop remains one page-level vertical column. The form is centred at a 1040–1060px maximum width.
- Desktop two-column use remains limited to related field pairs inside the single form surface.
- Tablet and 390px Mobile use one field column.
- Main content maximum width follows the shared 1200px system.
- Major transitions: 56–72px Desktop, 40–56px Tablet, 32–48px Mobile.
- Form internal padding: 48–56px Desktop, 36–40px Tablet, 20–24px Mobile.
- Input height: 52px; text area follows content need.
- Touch targets remain at least 44px.
- Form and module heights are content-driven; no fixed decorative void or sticky submit bar.

## 6. Surface and component language

### Form surface

- White background, 1px Border Gray, 12px radius.
- Very light Navy shadow only to separate the working surface from the Soft Background.
- A thin Accessible Teal leading rule identifies the form surface without turning it into a promotional panel.
- Group labels use Accessible Teal; field labels and headings use Navy.

### Inputs and selects

- Default: white, 1px Border Gray, Navy label and Supporting Text placeholder.
- Hover: slightly stronger Navy/Gray border; no lift.
- Focus: 2px Accessible Teal border plus visible separation/halo.
- Error: 2px error border and exact linked error copy; never colour alone.
- Disabled styling is not used for route/form failure; the approved unavailable message replaces the operational surface.

### Buttons and links

- `REQUEST QUOTE`: Accessible Teal solid, white text, 7px radius.
- Hover/active: Teal Hover.
- Focus: 3px separated outline around the control.
- Submitting: Primary Navy solid with `SUBMITTING…`; no spinner-only state.
- `TRY AGAIN`: white/Navy outline.
- `Privacy Policy`, `Request a Sample` and `Request Documents`: accessible underlined or arrow-supported text links; they never compete with submit.

## 7. Message-state direction

- Validation summary: restrained error-tint card with heading and retained-entry copy.
- Field errors: placed beside the field and linked from the summary.
- Failure: amber retry card to distinguish transport/system failure from invalid buyer input.
- Success: calm green receipt card. It must not resemble a quote document, order confirmation or approval badge.
- Route/form unavailable: neutral white/Navy message with no disabled form, Contact fallback or internal blocker text.
- Focus moves and semantic behavior remain governed by the approved Gate 2/3 contract; Gate 4 defines appearance only.

## 8. Imagery and iconography

Recommended page-specific imagery: **none**.

The RFQ page is a task page; photography would compete with form completion and could imply factory, stock, origin, shipment or capacity evidence. Visual identity comes from typography, Logo, Navy/Teal rules and the form surface.

If a later approved asset is introduced at Gate 5, it may only be a subtle decorative TiO2 material/particle texture with empty ALT and must not increase Hero height or carry factual meaning. No image is required for a complete page, so the no-image fallback is the default approved direction.

Icons are optional and limited to simple 1.5–2px Navy line icons with non-text Teal accents. Labels never rely on icons.

## 9. Responsive direction

### Desktop 1440

- Shared 84px Header, wide reading frame and 52–56px H1.
- Single centred form surface.
- Related field pairs may use two columns; long fields and messages span the form.
- Submit remains left-aligned inside the form and is the only solid page-body CTA.

### Tablet 768

- Shared 64px compact Header assembly.
- H1 reduces to 36–40px.
- One field column and full-width controls.
- Submit remains 220px wide unless content/translation requires more.

### Mobile 390 logical

- Shared 64px Mobile Header with `Logo | RFQ | Menu`.
- H1 wraps naturally at 28–34px.
- Form padding 20–24px; input height 52px.
- Quantity and fixed MT suffix remain adjacent.
- Submit becomes full form width.
- No sticky submit, horizontal scrolling or desktop-size empty band.

## 10. Global Chrome continuity

- Consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` unchanged.
- Use `brand_logo_primary_horizontal` in white Header and `brand_logo_reverse_monochrome` in Deep Navy Footer.
- Desktop Header remains 84px; Mobile Header remains 64px.
- Navigation order and permanent Request a Quote surfaces remain unchanged.
- Conversion routes have no inferred current parent under V0.5; no buyer-visible current label is added.
- Gate 4 samples show Header continuity only. They do not redesign the shared Footer or Mobile Menu.

## 11. Reader-first and evidence boundary

- Buyer Clean shows only the approved page copy and actionable states.
- No `INTERNAL REVIEW`, `PENDING`, `RELEASE_BLOCKER`, evidence ID, route readiness or approval status enters public samples.
- The page explains what to provide and what happens next once; it does not repeat long outcome disclaimers in every module.
- Product selections remain neutral context. No visual badge, ranking or colour suggests suitability, availability or equivalence.
- M-2377, M-996 and M-2196 receive identical control treatment to other grades.

## 12. Gate 5 future frame contract

If Gate 4 is later approved and Gate 5 is separately authorized, Gate 5 must create:

- complete 1440 Desktop, 768 Tablet and 390 Mobile Buyer Clean pages;
- Mobile Menu open;
- initial, editable prefill, validation/focus/error, submitting, failure, success, unavailable and long-value states;
- a complete shared Footer assembly proof;
- true long-copy and no-horizontal-overflow checks.

This list is not Gate 5 authorization.

## 13. Gate boundary

`CONV-RFQ-G4-VD-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

Gate 4 may be approved only after project-control review and user decision. Gate 5, development, WordPress, Next.js, CMS, testing, `D:\16Wordpress_nextjs`, deployment, publication, DNS and indexing remain unauthorized.
