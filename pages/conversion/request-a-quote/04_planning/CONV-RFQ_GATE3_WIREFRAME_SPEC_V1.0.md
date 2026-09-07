# CONV-RFQ Gate 3 Wireframe Specification V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 3 — responsive wireframe |
| Review ID | `CONV-RFQ-G3-WF-01` |
| Date | 2026-09-01 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Gate 3 authorization | `USER_AUTHORIZED_2026-09-01 / START` |
| Gate 4–5 | `NOT_STARTED / NOT_AUTHORIZED` |

These are actual grayscale wireframes, not a visual direction or complete visual. They establish structure, order, responsive behavior and state placement only.

## 1. Current wireframe assets

| Asset | Logical viewport / export | Purpose |
|---|---|---|
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_DESKTOP_1440_V1.0.png` | 1440 × 2720 | Full Desktop page |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_TABLET_768_V1.0.png` | 768 × 2600 | Full Tablet page |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_390_LOGICAL_AT2X_V1.0.png` | 390 × 2760 logical; 780 × 5520 export | Full Mobile page |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png` | 390 × 844 logical; 780 × 1688 export | Shared Mobile Menu open assembly proof |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_STATE_BOARD_1440_V1.0.png` | 1440 × 2220 | Initial, prefill, error, submitting, failure, success, unavailable and long-value states |

Matching SVG sources are retained beside each PNG. PNGs are the review evidence; SVGs are editable planning sources only and are not implementation code.

## 2. Page-wide structure

The page is one vertical sequence at every viewport:

1. Approved shared Header assembly.
2. `Home / Request a Quote` breadcrumb.
3. Compact Hero.
4. One RFQ form.
5. Low-weight `Other request types` section.
6. Approved shared Footer assembly.

No page-level left/right composition, side rail, context rail, sticky conversion rail, Dashboard shell, second form or second solid page-body CTA exists.

Shared Header, Mobile Menu and Footer are consumed unchanged. Their grayscale areas prove assembly and permanent RFQ visibility; they do not redesign or implement shared components.

## 3. Hero structure

- Eyebrow: `B2B QUOTATION REQUEST`.
- H1: `Request a Titanium Dioxide Quote`.
- Original approved paragraph appears at real length.
- No Hero button or decorative media region.
- Desktop and Tablet keep a compact text block above the form.
- Mobile wraps the H1 to two lines without horizontal clipping.

## 4. RFQ form structure

### 4.1 Field order

1. Product / Grade — required single select.
2. Application — required single select.
3. Required Quantity — required numeric input plus adjacent fixed `Metric tonnes (MT)` suffix.
4. Destination Country — required single-line free-text input with placeholder `Enter the destination country`.
5. Destination Port / City — optional.
6. Company Name — required.
7. Your Name — required.
8. Business Email — required.
9. Phone / WhatsApp — optional, with no helper.
10. Website — optional.
11. Additional Requirements — optional multiline.
12. Form-area Privacy Policy sentence and visible link.
13. One solid `REQUEST QUOTE` submit control.

### 4.2 Desktop 1440

- Page content uses one centered column.
- The only two-column layout is the form-internal Grid.
- Product / Grade pairs with Application.
- Required Quantity + fixed MT suffix pairs with Destination Country free text.
- Company Name pairs with Your Name.
- Business Email pairs with Phone / WhatsApp.
- Destination Port / City, Website and Additional Requirements span full form width.
- Long copy and helpers remain inside the form boundary.

### 4.3 Tablet 768

- Shared compact Header assembly.
- One content column and one form-field column.
- Every field follows the semantic order in §4.1.
- Quantity input and MT suffix remain one adjacent control group.
- Other request links remain visually secondary.

### 4.4 Mobile 390 logical

- PNG is exported at 780px as 390 logical @2x.
- Shared 64px Mobile Header assembly.
- All page and form content is single-column.
- H1, Hero paragraph, helpers, privacy text and Additional Requirements helper wrap without horizontal overflow.
- Quantity input and MT suffix remain adjacent on one row.
- Submit control becomes full form width and remains the only solid page-body CTA.
- Request a Sample and Request Documents stack as low-weight text links.
- Touch controls are represented at 44px or larger.

## 5. Mobile Menu open

The 390 logical @2x menu proof consumes the shared Mobile Menu structure:

- Home, Markets, Products, Applications, Documents, Resources and About remain present.
- Request a Quote remains a visible solid navigation action pointing to the current RFQ route.
- The menu proof is labeled as shared assembly evidence, not a page-owned design.
- Focus return, dismissal and `aria-current` behavior remain governed by Global Chrome V0.5.

## 6. Key state structure board

| State | Structural proof |
|---|---|
| Initial | Neutral empty fields; no premature error; one submit CTA |
| Prefill | M-2377, Coatings and explicit `Brazil` text shown as visible editable independent context; no suitability inference |
| Field errors / summary | Exact summary copy, focus target, quantity error and Destination Country empty error |
| Submitting | `SUBMITTING…`; duplicate submit protected; entered data and shared RFQ navigation remain visible |
| Failure | Exact failure copy and `TRY AGAIN`; no Contact fallback or implied receipt |
| Success | Exact receipt-only success copy and no commercial approval implication |
| Route/form unavailable | Exact Buyer Clean unavailable copy; review-only RELEASE_BLOCKER annotation remains outside the Buyer Clean panel |
| Long value | Destination Country 100-character error plus retained Phone / WhatsApp and Website fields |

## 7. Prefill and restricted-state behavior

- Product / Grade and Application remain independent editable fields.
- Destination Country consumes only explicit actual-country text; a broad region is not auto-filled.
- Invalid, blank or overlength country prefill returns to empty without a first-load error.
- M-2377 context remains neutral under PRODUCT V0.3.
- M-996/M-2196 comparison, ranking, equivalence and substitution remain absent.
- No availability, price, MOQ, inventory, lead-time, shipping, sample, document, regulation or order outcome is introduced.

## 8. Accessibility and interaction placement

- Summary focus target is visually distinct and precedes linked field errors.
- Field focus and errors do not rely on color alone in later visual work.
- Labels remain visible; placeholder text does not replace labels.
- Mobile targets are at least 44px in the structural evidence.
- Success, failure and unavailable messages use clear headings before their body copy.
- Shared Mobile Menu behavior remains owned by Global Chrome.

## 9. Gate boundary

The assets are submitted under `CONV-RFQ-G3-WF-01` as `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. They do not authorize Gate 4, Gate 5, development, WordPress, Next.js, `D:\16Wordpress_nextjs`, deployment or publication.
