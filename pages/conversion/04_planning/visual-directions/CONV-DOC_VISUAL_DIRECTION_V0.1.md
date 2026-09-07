# CONV-DOC Request Documents — Gate 4 Visual Direction V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `CONV-DOC` |
| URL | `/request-documents/` |
| Gate | Gate 4 — Visual direction |
| Version / date | V0.1 / 2026-09-01 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED` |
| Gate 2 input | `pages/conversion/04_planning/CONV-DOC_CONTENT_ARCHITECTURE_V0.1.md` |
| Gate 3 input | `pages/conversion/04_planning/wireframes/CONV-DOC_WIREFRAME_SPEC_V0.1.md` |
| Visual authority | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` |
| Global Chrome authority | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Logo authority | Production SVG Logo Manifest V1.0 |
| Gate ceiling | Historical Gate 4 submission stopped here; later 2026-09-01 user authority permits Gate 5 execution only; Gate 6/7 remain locked |

The visual direction is a precise design contract, not a complete Desktop/Mobile visual. It preserves all privacy, receiver, inventory, fact and release blockers.

## 1. Visual concept

### Direction name

`Controlled Review Workspace`

### Intended impression

Professional industrial procurement, technically organized and calm. The page should feel like a controlled request intake surface—not a download library, certificate showcase, marketing landing page, ecommerce form or generic contact page.

### Visual hierarchy

1. Page task and non-approval boundary.
2. Editable request context.
3. Minimum form fields and requested document categories.
4. Privacy/human-review boundary.
5. One page-body submit action.
6. Receipt/failure state.
7. Supporting information link.

The fixed Global RFQ remains visually strong in shared Chrome, but its label, position and terminal-navigation role keep it distinct from `Submit Document Request for Review`.

## 2. Frozen Global Chrome consumption

CONV-DOC does not redesign or modify any shared Chrome surface.

| Surface | Required visual binding |
|---|---|
| Desktop light Header | 84px; `brand_logo_primary_horizontal`; 180×60 proof target; fixed eight-item order; global RFQ fixed |
| Mobile light Header | 64px; `brand_logo_primary_horizontal`; 120×40 proof target; `Logo | RFQ | Menu` |
| Mobile Menu | Same eight items; no CONV-DOC item; no current marker on unmapped Conversion route |
| Desktop/Mobile Footer | Deep Navy; `brand_logo_reverse_monochrome`; fixed global RFQ |
| Current state | Zero current links per Conversion navigation surface; buyer-visible `CURRENT` count 0 |
| RFQ route failure | Internal `RELEASE_BLOCKER`; never hide, disable, empty or relink global RFQ |

Production SVG paths remain exactly those in the approved Manifest. No historical PNG, page-specific Logo copy or modified SVG is used in new Gate 4/5 work.

## 3. Page colour system

| Role | Direction | Use |
|---|---|---|
| Deep Navy | `#031B3A` | Shared Footer and limited review-boundary emphasis only |
| Primary Navy | `#062B5B` | H1/H2, strong labels, step numbers and focus structure |
| Accessible Deep Teal | `#007F77` | Page-body primary submit and approved terminal CTA family |
| Malaysia Teal | `#00A99D` | Non-text accent line, step marker or selected-control detail; not small text on white |
| Body Text | `#334155` | Paragraphs, hints and field values |
| Soft Background | `#F5F8FB` | Hero/review section separation and subtle form surround |
| Border Gray | `#D9E2EC` | Inputs, dividers and neutral context chips |
| White | `#FFFFFF` | Page and form surfaces |
| Error semantic candidate | Dark red text/border plus icon/summary structure; exact shared token requires review | Validation/failure only; no state relies on colour alone |
| Success semantic candidate | Navy/Teal structure plus check icon and full receipt text | Receipt only; avoid bright promotional green |

No gradient section background, certificate-gold badge, “verified” seal, traffic-light document status or availability colour coding is used.

## 4. Typography

Use Inter throughout.

| Element | Desktop direction | 390px direction |
|---|---:|---:|
| H1 | 52px / 1.08 / 700; max 18–20 words | 36px / 1.12 / 700 |
| H2 | 32–36px / 1.2 / 700 | 28px / 1.2 / 700 |
| Form section heading | 24px / 1.25 / 600 | 22px / 1.3 / 600 |
| Body / field input | 17px / 1.6 | 16px / 1.55 |
| Label | 15–16px / 600 | 15–16px / 600 |
| Hint/error/privacy | 14–15px / 1.5 | 14px / 1.5 |
| Button | 16px / 600 | 16px / 600; may wrap to two lines |

Labels stay visible above controls. Placeholders never substitute for labels.

## 5. Spatial composition

### 5.1 Desktop

- 1200px shell below frozen Header.
- Hero uses a restrained Soft Background band with a 760–860px text measure; no hero image.
- Main region uses an approximately 340px review rail and 780px form column with a 48–64px gap.
- Form surface is a white card with 12px radius, 1px Border Gray and extremely light/no shadow.
- Section rhythm: 72–96px major vertical spacing; 24–32px field-group spacing; 12px label-to-control spacing.
- Review rail uses numbered lines and a Navy heading, not decorative cards or icons for each step.

### 5.2 Tablet

- Review sequence becomes a full-width compact panel above the form.
- Form is one column; no clipped short-field pairs.
- 32–40px section gaps; no horizontal navigation leakage.

### 5.3 Mobile 390px

- 16px outer gutter and 358px maximum component width.
- Hero uses 32px top/bottom space after breadcrumb; receipt boundary remains visible, not hidden in a tooltip.
- Form card may drop its outer shadow and use either a border or white-on-Soft-Background contrast.
- Each category is a full-width 44–52px checkbox row; no 2-column micro-grid.
- Context chips wrap vertically with separate ≥44px remove controls.
- Submit button uses full width and natural height; label may wrap, never shrink below 16px.
- No fixed/sticky page submit.

## 6. Component direction

### 6.1 Hero and boundary

- Eyebrow is small Navy uppercase with generous tracking; not a status badge.
- H1 is Navy on Soft Background.
- The receipt/non-approval boundary is a white inset panel with a 4px Accessible Deep Teal left rule and a plain-language icon. It must not resemble a warning that the service is unavailable.
- No product powder, factory, port, laboratory, certificate or document-preview image is used.

### 6.2 Review steps

- Four simple numbered steps connected by a thin Border Gray rule on Desktop.
- Mobile stacks steps with visible numbers; no motion required.
- Step 3 explicitly says `Human review`; no clocks, turnaround badges or progress completion promises.

### 6.3 Prefill context

- A neutral outlined panel appears only when valid context exists.
- Chips use White/Soft Background, Navy text and Border Gray; no “verified,” “recommended” or green success styling.
- Remove uses a labeled control or accessible icon with a ≥44px target.
- M-2377 + Coatings + Sulfate is the Gate 4 stress example; Specialty Materials and Rubber never appear as generated chips.

### 6.4 Fields

- 48–52px default control height; textarea natural height 144–176px.
- Border Gray default, Primary Navy label, Body Text input.
- Hover, focus, selected and error are visually distinct.
- Focus direction: 3px Primary Navy or approved shared focus ring with white separation, never a colour-only thin border.
- Required marker uses text/symbol plus accessible label semantics; optional is written only where ambiguity exists.

### 6.5 Document categories

- Use one consistent outline document icon family at most, Navy with controlled Teal accent.
- Icons describe category type, not availability or certification.
- Checkbox selection uses control fill/border plus checkmark and label weight.
- No file thumbnails, download arrows, locks that imply entitlement, availability badges, version numbers or country flags.

### 6.6 Privacy slot

- Gate 4 review board shows the reserved slot with an internal amber/dashed annotation labelled `APPROVED DATA-HANDLING COPY REQUIRED — NOT BUYER COPY`.
- This annotation is outside the proposed Buyer Clean styling layer.
- Gate 5 Buyer Clean approval must replace it with approved text; an authorized review candidate may retain the internal annotation but cannot ship it.

### 6.7 Submit action

- `Submit Document Request for Review` uses Accessible Deep Teal `#007F77`, white text, 6–8px radius and minimum 48px height.
- Hover may use the approved darker Teal; focus adds a visible external ring.
- It is the only solid page-body action.
- Global RFQ retains shared terminal styling and remains separate navigation; it is never converted into a second submit.

## 7. State visual direction

| State | Visual direction | Required text/structure |
|---|---|---|
| Default | Neutral white controls, Border Gray, no error colour | Persistent labels and hints |
| Valid prefill | Neutral outlined context panel and removable chips | `Review the context carried into this request` |
| Empty/stale prefill | Panel absent; natural form closure | No warning, empty shell or internal status |
| Focus | Strong external ring with adequate separation | Remains visible over selected/error state |
| Field error | Dark semantic error text + border + icon/structure | Plain-language error; entry preserved |
| Error summary | Full-width structured panel immediately above fields | Focusable heading and linked error list |
| Other revealed | Smooth/no-motion insertion; direct focus due to buyer action | Short description becomes required |
| Submitting | Button progress text plus restrained spinner/icon; reduced motion safe | `Submitting your request…` |
| Receipt confirmed | Navy/Teal left-rule panel, check icon, large receipt heading | Full negative boundary remains visible |
| Submission unconfirmed | Error/failure panel, retained form below, one outline/secondary retry | Exact channel-free failure copy |
| Service unavailable | Internal review board only with diagonal/dashed annotation | `RELEASE_BLOCKER`; not a release visual |

Success must not look like file delivery: no downloadable cards, attachment list, green “approved” badge, envelope animation or `Documents are on the way` language.

## 8. Accessibility direction

- One H1; continuous H2/H3 order.
- Error summary and success/failure headings have clear programmatic landmarks in later implementation.
- Every input has a persistent label; group labels use a visible legend.
- Hint/error relationships remain adjacent and are intended for `aria-describedby`-equivalent implementation.
- Focus, selected, current, error and disabled states have distinct shapes/structure.
- All targets ≥44×44px.
- Contrast is checked against white and Soft Background; Malaysia Teal is not used for small body text.
- Reduced motion removes spinner rotation/fades without removing status text.
- The inactive responsive navigation surface is excluded from accessibility and focus according to Global Chrome V0.5.

## 9. Imagery and iconography

### Image decision

`NO HERO OR EVIDENCE IMAGE`.

The request workflow benefits from form clarity more than visual storytelling. Removing photography also avoids implying an approved factory, inventory, certification, origin document or laboratory capability.

### Icon decision

- Use a single approved/simple line icon family for document categories and state panels.
- Navy outline + controlled Teal accent only.
- Icons are supplementary and use appropriate accessible treatment; no icon alone carries a category or state meaning.

## 10. Real-content stress direction

Gate 5, if later authorized, must render at least:

- the complete Hero intro and receipt boundary from Gate 2;
- the long company-name sample from Gate 3;
- a 254-character email display behavior;
- long destination text;
- M-2377 + Printing Inks + Sulfate wrapped context;
- a 2,000-character notes state;
- a three-line field error and multi-item error summary;
- complete channel-free failure copy;
- complete receipt-only success boundary;
- approved privacy copy for Buyer Clean approval, or a clearly internal review annotation when execution is authorized before privacy approval; the annotation cannot ship.

Gate 4 does not generate or approve those complete visual assets.

## 11. Prohibited visual directions

- Documents Hub card grid or category-navigation landing page.
- Public download list, document thumbnails or version badges.
- Certificate seals, compliance shields, origin flags or “verified” availability badges.
- Factory/port/lab/warehouse imagery used as proof.
- Ecommerce checkout styling, pricing table or instant-access language.
- SaaS-style oversized rounded pills, glass effects, neon gradients or playful illustrations.
- A second solid CTA competing with submit.
- Sticky mobile submit bar.
- RFQ OFF/hidden/disabled/empty-slot or Contact fallback.
- Buyer-visible CURRENT text or a false Documents/About/RFQ current marker.
- Historical PNG Logo in new production-oriented specifications.

## 12. Gate 4 review proof matrix

| Requirement | Direction evidence | Status |
|---|---|---|
| CONV-DOC is controlled request, not Hub | Form-first composition; one quiet info link; no category cards | Covered |
| No document promise | Neutral category controls; receipt boundary; no previews/download badges | Covered |
| Minimum data | Only Gate 2 fields render | Covered |
| Desktop/Tablet/390px | Three responsive compositions specified | Covered |
| Validation/focus/error | Separate structural treatments | Covered |
| Failure/success | Channel-free failure and receipt-only success panels | Covered |
| Privacy | Internal annotated slot; Gate 5 Buyer Clean approval/release blocked | Covered with open control |
| Restricted context | Neutral chips; Specialty/Rubber hidden; comparisons absent | Covered |
| Global Chrome V0.5 | Frozen surfaces, fixed RFQ, current=0 | Covered |
| Production SVG | Exact Manifest bindings | Covered |
| Buyer-visible CURRENT=0 | Explicitly frozen | Covered |
| No Gate 5 at original submission | No full Buyer Clean visual or PNG had been generated at the time of this Gate 4 submission; later user authority supersedes this execution stop only | Historical check |

## 13. Open controls and stopping condition

| Control | Status | Consequence |
|---|---|---|
| Gate 4 project-control/user decision | `OPEN` | Direction is submitted, not approved |
| Error semantic token | `CANDIDATE_PENDING_SHARED_COMPONENT_REVIEW` | Does not block structural Gate 4 review; exact colour must be checked before Gate 5 |
| Privacy wording | `OPEN / BLOCKS_GATE_5_APPROVAL_AND_RELEASE` | Internal annotation only |
| Receiver/owner/manual channel | `NOT_VERIFIED / BLOCKS_OPERATIONAL_RELEASE` | Channel-free failure only |
| Document inventory | `ABSENT / FACT_FREEZE` | No availability/download visual |
| Indexing recommendation | `PENDING_PROJECT_CONTROL_APPROVAL` | No robots/canonical/sitemap activation |
| Route/form readiness | `NOT_TESTED / RELEASE_BLOCKER` | Fixed Global RFQ remains unchanged |

`CONV-DOC Gate 4 = SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED`.

This Gate 4 artifact stopped here when originally submitted. The later 2026-09-01 user instruction authorizes Gate 5 execution and supersedes only that execution stop. Current work stops after the Gate 5 review submission; do not enter Gate 6/7, create development handoff, WordPress/Next.js/CMS implementation artifacts, tests, deployment, DNS, indexing changes or publication work.

## 14. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Established form-first Controlled Review Workspace visual direction with Global Chrome V0.5, production SVG, responsive/state/accessibility and evidence-freeze rules | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED` |
