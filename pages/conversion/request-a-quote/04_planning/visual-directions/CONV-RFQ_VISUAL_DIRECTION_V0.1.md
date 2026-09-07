# CONV-RFQ Visual Direction V0.1 — Form-first Industrial Procurement

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 4 |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_USER_GATE_4_REVIEW / NOT_APPROVED` |
| Content | `CONV-RFQ_CONTENT_ARCHITECTURE_V0.1.md` |
| SEO/GEO | `CONV-RFQ_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` |
| Wireframe | `wireframes/CONV-RFQ_WIREFRAME_SPEC_V0.1.md` |
| Inherited system | Visual Standard V1.0; Global Chrome V0.5; Production SVG Logo Manifest V1.0 |
| Product baseline | PRODUCT V0.3 |
| Protected | URL, keyword, form boundary, fixed RFQ, current count 0, evidence/release gates |
| Not created | Gate 5 complete visual, mockup PNG, code, CMS, test, route, deployment or release artifact |

## 1. Direction

Use a restrained, form-first industrial procurement direction: white and Soft Background surfaces, strong Navy typography, precise field grouping, Accessible Deep Teal actions and compact evidence-safe status blocks.

The page should feel like a serious international B2B request workflow—not a promotional supplier landing page, ecommerce checkout, CRM dashboard or generic Contact form.

### Visual hierarchy

1. Clear H1 and receipt boundary.
2. One dominant quotation form.
3. Human-review sequence.
4. Four direct buyer answers.
5. Shared Deep Navy Footer.

No hero photograph, decorative factory image, product pack, port scene, map, certificate, price badge, stock signal, approval seal or quote calculator is used.

## 2. Colour system

| Token | Value | Use |
|---|---|---|
| Deep Navy | `#031B3A` | Shared Footer and rare strongest text block; not a full form background |
| Navy | `#062B5B` | H1/H2, form group headings, labels, primary text emphasis |
| Accessible Deep Teal | `#007F77` | Page submit background, accessible small-link/action text, selected control border |
| Malaysia Teal | `#00A99D` | Large non-text accents, rules and shared Global Chrome marker language only; no normal-size body text |
| Accent Teal | `#14B8A6` | Small decorative line/highlight; never the only state cue |
| Body Text | `#334155` | Body, hints and answer copy |
| Soft Background | `#F5F8FB` | Intro/form page field and alternating review section |
| Border Gray | `#D9E2EC` | Default inputs, dividers and card borders |
| White | `#FFFFFF` | Form card and primary reading surfaces |
| Error text | `#B42318` | Functional errors only |
| Error background | `#FEF3F2` | Error summary/failure tint |
| Error border | `#FDA29B` | Error/failure structural border |
| Success text | `#067647` | Receipt icon/label support only |
| Success background | `#ECFDF3` | Restrained receipt region |
| Warning text | `#B54708` | Internal review/release annotation only, not Buyer Clean status |
| Warning background | `#FFFAEB` | Gate 3–4 privacy/release annotation only |

Accessible Deep Teal replaces Malaysia Teal where white text or small action text needs stronger contrast. Status colours always accompany a heading, body copy and structural border/icon.

## 3. Typography

Use Inter throughout.

| Element | Desktop | Tablet | 390px | Weight / line height |
|---|---:|---:|---:|---|
| H1 | 52px | 44px | 38px | 700 / 1.08–1.15 |
| H2 | 36px | 32px | 28px | 700 / 1.2 |
| Form group heading | 22px | 22px | 20px | 600 / 1.35 |
| Decision-aid label | 12px | 12px | 12px | 700 / 1.2; letter spacing 0.06em |
| Body / form intro | 17px | 16px | 16px | 400 / 1.6 |
| Field label | 15px | 15px | 15px | 600 / 1.45 |
| Hint / error | 14px | 14px | 14px | 400–500 / 1.55 |
| Button | 16px | 16px | 16px | 600 / 1 |
| Breadcrumb | 14px | 14px | 14px | 500 / 1.4 |

No uppercase paragraph text, condensed type, display serif, oversized numeric dashboard style or reduced mobile body size is introduced.

## 4. Surface and spacing direction

### Intro + form field

- Page background: Soft Background.
- Desktop outer shell: max 1200px with 120px side space at 1440px.
- Intro rail remains visually open—no card border and no fake trust badge.
- Form uses White, 1px Border Gray, 12px radius and a restrained shadow equivalent to `0 8px 28px rgba(3,27,58,0.08)`.
- Form internal padding: 32px Desktop/Tablet, 20px at 390px.
- Form-group divider: 1px Border Gray with 32px top/bottom rhythm; no nested card per group.
- Section spacing: 80–88px Desktop; 64px Tablet; 52–60px Mobile.

### Receipt boundary

The non-approval boundary is a quiet structural callout, not an alarm:

- White or very light Navy-tinted surface.
- 3px Navy left rule.
- 16px body text; no warning triangle.
- Full negative list remains readable and is not collapsed behind a tooltip.

### Decision aids

- Three compact text rows with a 24px Navy line/marker and uppercase micro-label.
- No icons suggesting approval, speed, stock, delivery or certification.
- No clickable card treatment.

## 5. Form component direction

### 5.1 Inputs

| State | Visual direction |
|---|---|
| Default | White field, 1px Border Gray, Navy label, Body Text input, 8px radius |
| Hover | Border moves toward Navy at low emphasis; no shadow jump |
| Focus | 2px Navy outline with 2px white offset; survives selected/error state |
| Selected | Accessible Deep Teal border plus check/radio structure and text |
| Error | Error border + icon + full text; label remains Navy unless error relation requires text cue |
| Read-only source label | Soft Background chip with Navy text; not disabled gray |
| Removed prefill | Value disappears and the form remains neutral; no negative badge |
| Submitting | Page-body submit shows progress text; fields remain visually readable |

Input height is 48–52px. Textareas start at 112px; notes start at 168px. Placeholder colour cannot carry the only instruction.

### 5.2 Radio and checkbox controls

- Grade-path radio tiles use a real radio mark, 1px border and two-line-safe label.
- Selected tile uses Accessible Deep Teal border and a subtle `#F0FDFA` tint; it does not show Recommended.
- Document checkboxes wrap naturally and retain ≥44px label targets.
- Acknowledgement is a standard checkbox with long-form text aligned to the first line; it is not a promotional card.

### 5.3 Prefill chips

- Chips use White/Soft Background, Border Gray, 8px radius and Navy text.
- Remove control has a visible × plus an accessible `Remove [value]` label.
- `Process context: Sulfate` is styled exactly like neutral context, not a technical badge.
- M-2377 has no special colour, star, rank or recommendation badge.
- M-996 and M-2196 chips remain equal in size, order weight and colour.

### 5.4 Page submit

- `Submit RFQ for Review`: Accessible Deep Teal solid, White text, 8px radius.
- Height: 52px; horizontal padding 24–28px; Mobile full width.
- Hover: darken toward `#006B64`; no large movement.
- Focus: independent Navy/White focus ring.
- Progress: text changes to `Submitting request…` with a small motion-optional spinner; no success colour.

The submit sits near the end of the long form, so it does not visually duplicate the Header terminal `Request a Quote` in the first viewport. The labels and functions remain distinct.

## 6. State treatment

### Error summary

- Error Background, 1px Error Border, 10px radius, 20px padding.
- Heading in Error Text; Body Text paragraph; linked field names underlined.
- No shake animation, toast-only error or auto-disappearing message.

### Submission failure

- Uses the same restrained error family without catastrophic imagery.
- Heading `We could not confirm receipt` carries highest state weight.
- `Try again` uses Navy outline secondary styling, not another Teal solid CTA.
- The form remains visible and its values remain visually intact.
- No empty contact slot is shown; the absence of an approved manual channel consumes 0px.

### Receipt success

- Success Background with a 3px Success Text left rule and small line icon.
- Heading remains Navy to avoid “green = approved” overstatement.
- Full receipt/non-approval paragraph remains visible.
- No confetti, check badge labeled Approved, quotation number, countdown or automatic redirect.

### Unknown / insufficient information

- Unknown-grade selection uses the ordinary selected radio style.
- Conditional requirement enters below the grade path without warning styling.
- Only after interaction/submit does insufficient information receive the normal field-error treatment.

### Privacy pending

- Gate 4 review material uses an Amber cross-hatched annotation outside the Buyer Clean component boundary.
- Annotation text: `APPROVED PRIVACY COPY REQUIRED BEFORE GATE 5`.
- It must not appear in a future Buyer Clean export, nor be replaced with invented generic privacy language.

### Form/route unavailable

- Gate 4 board may show the restrained no-receipt body and an Amber internal release annotation.
- Global Chrome remains fully drawn with fixed RFQ.
- No Buyer Clean RFQ OFF, hidden, disabled, empty slot, Contact relink or Contact fallback candidate is produced.

## 7. Human-review section

- Soft Background or White opposite the form field for rhythm.
- Four steps use 28–32px outlined numbers, Navy headings and Body Text descriptions.
- Desktop: one horizontal row connected by a thin Border Gray rule.
- Tablet: 2×2 without crossed connector lines.
- Mobile: vertical rows with a subtle left rule.
- No portraits, agent avatars, queue counters, clocks, “fast response,” SLA or approval icons.

## 8. Buyer-question section

- Heading occupies the left 4 columns on Desktop; answers occupy the right 8.
- Each answer row uses a Navy question, Body Text answer and Border Gray divider.
- No card shadow or decorative question-mark icon.
- Answers are visible by default in the Gate 4 direction; if later converted to accordion, the full accessibility and ≥44px contract applies.
- No `FAQPage` visual badge or Schema implication.

## 9. Global Chrome V0.5 and production assets

### 9.1 Header / current state

- Desktop Header: exact shared 84px geometry.
- Mobile Header: exact shared 64px `Logo | RFQ | Menu` geometry.
- CONV-RFQ is an unmapped Conversion route under V0.5: no Desktop underline, no Mobile Menu left marker and zero `aria-current="page"` per navigation surface.
- Buyer-visible `CURRENT` text/badge/suffix count: 0.
- The Global `Request a Quote` remains the terminal Teal action because it is a permanent navigation action, not because it is marked current.

### 9.2 Exact asset bindings

| Context | Asset | SHA-256 |
|---|---|---|
| Light Desktop/Mobile Header | `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg` | `eeed3a758e7ae1b847238d1c88e86eee7a8e67b863969af4d286747e9a72487c` |
| Deep Navy Footer | `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg` | `7cfaeafa02ac8469a006c9489db2f92b15b2621e4151b04efe1b30fc734c1b5e` |
| Approved symbol context | `brand/logo/candidates/v0.1/tio2-malaysia-symbol-v0.1.svg` | `9fd1fafafad4bc6fef0c05f499c27baf1051eef084d1b834b1061caf3b8b85a0` |
| Favicon | `brand/logo/candidates/v0.1/tio2-malaysia-favicon-safe-v0.1.svg` | `f1d1b97ff66211410a50279eed16414b5a6e888c27c11419e41265168d08692c` |

- Desktop target box: 180×60px; Mobile: 120×40px; preserve aspect ratio and clear space.
- No raster fallback, page copy, recolour, shadow, crop or SVG modification.
- Footer uses the approved shared Deep Navy composition and gains no page-local links.

## 10. Responsive direction

### Desktop 1440px

- 4/8 intro-form split with 48px gap.
- Intro may remain sticky only within the intro/form section and only if it never masks content or Footer; default proof can remain non-sticky.
- Form field pairs use two columns where specified; error copy may increase row height independently.
- Submit remains content width and left aligned.

### Tablet 834px

- Use the active Mobile Header surface in the reference proof.
- Intro and form stack; form retains two columns only where controls stay at least 300px wide.
- Review steps use 2×2; questions one column.
- No squeezed Desktop navigation or overflowing radio row.

### Mobile 390px

- 20px page gutter and 20px form padding.
- H1 38px with natural wrap after `Titanium` or `Dioxide`; never force a one-line headline.
- All fields one column; grade radio tiles stack.
- Submit full width, ≥52px; all controls/links ≥44px targets.
- Chips and document checkboxes wrap, never horizontally scroll.
- Long labels, errors, privacy text and success/failure paragraphs remain ≥14/16px according to token role.
- No decorative blank area after the Header, receipt boundary or submit button.

## 11. Motion and reduced-motion

- Hover transition: 120–180ms for border/fill only.
- Optional spinner rotates only during active submission and has live text.
- No auto-scrolling carousel, parallax, particle background, number animation or pulsing availability status.
- Reduced motion removes spinner rotation and arrow movement without removing progress/focus meaning.

## 12. Claim-safe visual boundary

- No price, discount, MOQ, stock, lead time, shipping route, port availability, freight or packaging-size visual.
- No factory, warehouse, laboratory, certificate, product pack, sample bottle, container or Malaysia flag image.
- No “Verified supplier,” “Ready stock,” “Fast quote,” “24-hour response,” “Free sample,” “Documents available” or approval badge.
- No grade score, star, comparison table, equivalence arrows or recommended model.
- M-2377 context remains neutral; Specialty Materials is not auto-generated; Rubber remains Other text only.
- M-996/M-2196 receive identical visual weight and no comparative affordance.

## 13. Gate 4 review checklist

- [x] Visual direction extends Visual Standard V1.0 without inventing a new brand system.
- [x] Form hierarchy is stronger than decorative content.
- [x] Accessible Deep Teal is used where Malaysia Teal would be weak for small text/white-text contrast.
- [x] Default, focus, selected, error, failure, success, privacy and unavailable directions are distinct.
- [x] Status meaning never depends on colour alone.
- [x] Desktop, Tablet and 390px behavior is defined.
- [x] Production SVG paths and hashes are exact.
- [x] Global Chrome V0.5 fixed RFQ and Conversion current count 0 are preserved.
- [x] Page-body submit does not duplicate the Global RFQ label or create a second above-fold promotional CTA.
- [x] No unverified contact channel or privacy text is drawn.
- [x] No Product V0.3 comparison or negative no-public inference is introduced.
- [x] No Gate 5 complete visual, implementation, deployment or publication work occurred.

## 14. Open review decisions

| ID | Decision requested at Gate 4 | Current recommendation | Status |
|---|---|---|---|
| `CONV-RFQ-G4-D01` | Approve form-first White/Soft Background direction | Approve | `PENDING_USER_REVIEW` |
| `CONV-RFQ-G4-D02` | Approve 4/8 Desktop and stacked Tablet/Mobile hierarchy | Approve | `PENDING_USER_REVIEW` |
| `CONV-RFQ-G4-D03` | Approve Accessible Deep Teal page submit and restrained functional state colours | Approve | `PENDING_USER_REVIEW` |
| `CONV-RFQ-G4-D04` | Approve no-photography/no-badge direction | Approve | `PENDING_USER_REVIEW` |
| `CONV-RFQ-G4-D05` | Approve Gate 2 `index, follow` recommendation for later implementation after all release gates close | Approve conditionally | `PENDING_USER_REVIEW` |
| `CONV-RFQ-G4-D06` | Provide/approve privacy wording and real receiver/failure channel before Gate 5 | Required input; no inference | `OPEN / BLOCKS_GATE_5` |

## 15. Gate status and stopping point

`CONV-RFQ-G4-01 = SUBMITTED_FOR_USER_GATE_4_REVIEW / NOT_APPROVED`

Work stops here. Gate 5 complete visual, Gate 6/7, development, CMS, code, testing, deployment, indexing activation and publication remain `NOT_STARTED / NOT_AUTHORIZED`.
