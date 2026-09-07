# CONV-DOC Gate 3 Responsive Wireframe Specification V0.3

## 0. Document control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Gate | Gate 3 — 1440px Desktop, 768px Tablet and 390px Mobile wireframe |
| Review ID | `CONV-DOC-G5-FIVE-TYPE-20260901-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / USER_EXECUTION_AUTHORIZED / NOT_APPROVED` |
| Authority | User instruction dated 2026-09-01: `授权执行Gate5` |
| Content input | `CONV-DOC_CONTENT_ARCHITECTURE_V0.3.md` |
| Gate ceiling | Gate 5 review package only; no Gate 6/7 or development |

The current user instruction authorizes production of the Gate 5 review candidate and therefore the responsive wireframe needed for that candidate. It does not retroactively mark Gate 2 or Gate 3 approved or closed.

## 1. Page sequence

1. Shared Global Header.
2. `Home / Request Documents` breadcrumb.
3. Deep Navy hero with literal H1 and receipt-only boundary.
4. Three-step cue: Your Details → Request Details → Human Review.
5. Minimum-information warning.
6. One centered form card.
7. Conditional editable prefill block; absent when no valid prefill exists.
8. Your Details: Full Name, Company, Business Email, Country / Region.
9. Request Details: Product Grade, five Document Types, Application / Industry, Additional Requirements.
10. Read-only review summary.
11. Internal privacy evidence slot, visibly marked as non-Buyer-Clean in review assets.
12. Page-primary `Request Documents` action and receipt-only helper.
13. Shared Deep Navy Footer.

No FAQ, file inventory, public download, market selector, destination logic, RFQ field group or page-body RFQ promotion appears.

## 2. Desktop 1440px wireframe

- Shared Header is 84px and keeps the approved eight-item order ending in `Request a Quote`.
- Breadcrumb occupies a compact white strip.
- Hero uses a two-column structure: purpose on the left, receipt-only boundary on the right.
- Main content uses an 880px centered single scan column on a Mist background.
- Three non-clickable step cards form one row.
- Every field spans the form width to support real long organization names and helper copy.
- Five document-type cards stack vertically; two selected examples do not imply availability.
- Review summary, privacy blocker and submit row remain adjacent at the end of the form.
- Footer is inherited unchanged; Footer RFQ remains terminal and visually separate from the form action.

## 3. Tablet 768px wireframe

- Consume the 64px compact shared Header arrangement `Logo | Quote | Menu`.
- Hero becomes one column; receipt boundary follows the H1 copy.
- Step cards stack in reading order.
- Form stays one column with 32px viewport margins and no horizontal scrolling.
- Document cards, textarea, review summary, privacy slot and submit action expand to available width.
- All actions and interactive chips are at least 44px logical height.

## 4. Mobile 390px wireframe

- Logical viewport is 390px; a 780px export is valid only as `390px logical @2×`.
- Header is 64px with Logo, Quote and Menu all visible.
- H1, hero paragraph and receipt boundary wrap without clipping.
- The step cue, form fields, five document cards, review rows and submit action are single column.
- The primary submit action spans the form width; its receipt-only helper follows without a large empty band.
- Long company, email, document labels and 500-character textarea content do not force page-width overflow.
- Footer columns reflow into the approved mobile hierarchy and keep Footer RFQ visible.

## 5. Mobile Menu open

- Header remains visible above the open Deep Navy menu.
- Order is `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Request Documents receives no first-level item and no false current marker.
- Every row and terminal RFQ target is at least 44px logical height.

## 6. State wireframes

| State | Required structure |
|---|---|
| Normal | Persistent labels, helpers and enabled action only after valid required fields |
| Valid prefill | Visible editable/removable chips |
| No/invalid prefill | Entire prefill block omitted; unsupported values discarded silently |
| Restricted request | Selected category plus human-review and no-outcome boundary |
| Focus | Independent Navy focus border and amber outer ring |
| Client validation | Focusable error summary plus adjacent field errors; input retained |
| Submitting | Values retained, `Submitting…`, duplicate page-body submit prevented |
| Server failure | Receipt unconfirmed, values retained, `Try again`; no contact fallback |
| Retry | Reuses preserved values and returns to submitting |
| Success | `Document Request Received`, follow-up by supplied Business Email, explicit no-outcome boundary |
| Privacy | Internal annotation only; blocks Buyer Clean approval and release |

## 7. Five-type and field lock

The form contains exactly five public Document Types:

1. Technical Data & Product Documentation
2. Safety Documentation
3. Quality & COA Documentation
4. Origin & Supplier Qualification Documentation
5. Other Documentation

There are exactly eight buyer fields. Country / Region is contact/company location only. Product Grade contains the 14 published values and remains editable when prefilled. Other Documentation does not create an independent regulatory/compliance capability.

## 8. Validation and stop

The Gate 5 assets demonstrate the wireframe at 1440px, 768px and 390px plus Mobile Menu and states. Gate 3 remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`; this file does not declare `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`, Gate 3 approval or closure.

## 9. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.2 | 2026-09-01 | Six-type overreach wireframe | `OUT_OF_SCOPE_DRAFT / NOT_CURRENT_CONTROL / PRESERVED_FOR_PROVENANCE` |
| V0.3 | 2026-09-01 | Rebuilt responsive wireframe from the current five-type content contract under explicit Gate 5 execution authority | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

