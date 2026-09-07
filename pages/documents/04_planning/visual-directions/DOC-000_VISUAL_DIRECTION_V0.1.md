# DOC-000 Documents & Compliance Hub Visual Direction V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Gate | Gate 4 |
| Version / date | V0.1 / 2026-09-01 |
| Status | `DRAFT_FOR_USER_GATE_4_REVIEW / NOT_APPROVED` |
| User authority | 2026-09-01 instruction authorises progression through Gate 4 and requires a stop for user review |
| Upstream | Document Playbook V0.1; DOC-000 Content Architecture, SEO/GEO/Schema Contract and Wireframe V0.1 |
| Shared Chrome | Global Header/Footer V0.5; Production SVG Logo Manifest V1.0 |
| Current represented body state | Zero eligible document records; controlled request explained; child and request actions fail closed |
| Not included | Gate 5 full visual, child pages, request form, implementation, development, deployment or release |

## 1. Direction statement

`Industrial Documentation Editorial`

The page should feel like a calm procurement document desk: structured, technical and trustworthy, but deliberately not a download library, certification showcase, legal dashboard or empty CMS listing.

The visual hierarchy answers three questions in order:

1. What document family supports my review?
2. What product, destination, language, order or batch context affects scope?
3. What can I prepare before a controlled request is available?

## 2. Visual inheritance

### 2.1 Global Chrome — frozen

- Desktop Header: 84px.
- Mobile Header: 64px, `Logo | RFQ | Menu`.
- Production asset `brand_logo_primary_horizontal` at the approved Header boxes.
- Production asset `brand_logo_reverse_monochrome` in the Deep Navy Footer.
- Fixed first-level order.
- Fixed Header, Mobile Header, Mobile Menu and Footer RFQ.
- Desktop Documents marker: Bold + 3px Teal underline.
- Mobile Menu Documents marker: Bold + 4px Teal left marker.
- Buyer-visible `CURRENT` word: zero.
- Footer content and geometry are inherited; no page-specific footer changes.

### 2.2 Page-body palette

| Token | Value | Use |
|---|---|---|
| Deep Navy | `#031B3A` | Footer and one controlled-process surface only |
| Navy | `#062B5B` | H1, H2, high-priority labels and icon strokes |
| Accessible Deep Teal | `#007F77` | CTA, focus-adjacent accent and approved interactive emphasis |
| Malaysia Teal | `#00A99D` | Non-body-text accent, index marks and decorative rule only |
| Body | `#334155` | Paragraphs and explanatory text |
| Soft Background | `#F5F8FB` | Alternating technical sections and restrained hover/focus support |
| Border | `#D9E2EC` | Dividers, row edges and non-status structure |
| White | `#FFFFFF` | Primary page field |

No red/yellow/green compliance traffic lights appear. No colour is used to imply file availability, regulatory acceptance or approval.

## 3. Typography

Font family: Inter, inherited from the visual standard.

| Element | Desktop direction | 390px direction | Weight |
|---|---:|---:|---:|
| H1 | 52–60px | 38–44px | 700 |
| H2 | 36–42px | 28–32px | 700 |
| Category name | 20–22px | 18–20px | 600 |
| Body | 17–18px | 16px | 400 |
| Kicker/index | 14px | 14px | 600 |
| Supporting scope note | 15–16px | 15–16px | 400 |

Long content wraps; type is never compressed to preserve a card height. Uppercase is limited to the Hero kicker and small document-family labels.

## 4. Hero composition

Desktop uses a restrained 7/5 split:

- left: breadcrumb, kicker, H1, two-sentence answer and local anchor;
- right: an abstract document-index composition made of six labelled tabs/lines, not a certificate preview, file thumbnail, official seal or downloadable PDF;
- the motif uses Navy rules and one Teal index line against Soft Background;
- no Malaysia flag, factory, person or compliance badge.

At 390px the motif collapses to a short six-line index below the anchor or is omitted if it creates unnecessary height. The H1 and anchor remain the first visual focus.

## 5. Category guide

Six categories are presented as an editorial ledger:

- numeric index `01–06`;
- one consistent line icon;
- full category name;
- purpose paragraph;
- scope paragraph integrated into the same row;
- no badge, filename, count, date, arrow, button or reserved action area.

Desktop uses two balanced columns. Reading order remains explicit and the DOM/linear order is 01 through 06. Mobile uses one continuous list.

### Icon direction

| Category | Motif |
|---|---|
| TDS | file with technical lines |
| SDS | file with safety shield outline |
| COA | file with measured check line, without approval seal |
| COO / Origin | file plus neutral globe/route line, without flag or customs stamp |
| Traceability | linked batch nodes |
| REACH / Compliance | file plus regulatory scope rings, without EU flag or certification mark |

All icons: 1.5–2px Navy outline with a small Teal accent. Icons are decorative supplements; visible text carries meaning.

## 6. Scope-factors section

Three factors sit on a Soft Background band:

1. Product and grade.
2. Destination and language.
3. Order and batch context.

Each uses a small line icon, a heading and one sentence. These are not form fields and do not look editable. Desktop uses three columns; Tablet uses 2+1; 390px stacks all three with compact dividers.

## 7. Controlled-process section

Use one Deep Navy editorial band to distinguish process from inventory:

- three numbered steps connected by thin low-contrast rules on Desktop;
- stacked numbered steps on Mobile;
- white type with restrained Teal step numbers;
- a small lock/file line motif paired with visible explanation;
- exact current no-link statement appears as text, not an alert.

This band must not resemble a success panel, file-access modal or form. It contains no CTA in the current state.

## 8. Buyer questions and prepare-context close

Buyer Questions use broad horizontal accordion rows with large, specific question labels. Focus uses a visible 3px outline and offset. The first answer is open in the review direction so real copy length can be measured.

Prepare Context is a quiet closing checklist on White or Soft Background. It contains four items and no button. The page closes directly into the shared Footer without an empty promotional band.

## 9. Current zero-record presentation

The intentional visual signal is completeness of guidance, not emptiness:

- six category-purpose rows remain visible;
- no document tiles or blank grid appears;
- no `0 documents` counter appears;
- no `coming soon`, disabled `Download`, faded card or skeleton appears;
- no child arrow appears;
- the controlled-process band states that there is no document request link on this page at present;
- fixed Global RFQ remains visible but retains quotation meaning.

## 10. Restricted and conditional state direction

### 10.1 Controlled request

When later eligible, a controlled record uses:

- a visible text label such as `Handled through a document request` only after copy approval;
- a restrained lock/file outline;
- a separate Request Documents action only when the receiver route is eligible;
- no download icon, file-size chip or success colour.

### 10.2 Route unavailable

Remove the action, arrow and interactive affordance. The remaining category row stays visually complete as information. No disabled control, Contact fallback or blank column remains.

### 10.3 Partial inventory

Eligible records receive specific scoped rows beneath their category. Ineligible records create no visual gap. The category order remains stable.

### 10.4 Complete inventory

Use the same row language and hierarchy as partial inventory. Do not introduce a celebratory `complete` state, total coverage badge or all-markets claim.

### 10.5 Long names

Long titles wrap to two or three lines. Index and icon align with the first text line; the row expands vertically. No ellipsis, hover-only title or font reduction.

### 10.6 No image

Text and the linear documentation icon system are the default. No placeholder thumbnail, generated certificate, factory image or cross-site media fallback appears.

## 11. Interaction direction

| Element | Default | Hover | Focus | Touch |
|---|---|---|---|---|
| Local Hero anchor | White/Navy outline | Navy text + Soft Background / stronger border | 3px Deep Teal/Navy-visible outline with offset | >=44px |
| FAQ row | White + divider | Soft Background | 3px visible outline around full row | >=44px |
| Future eligible category action | Navy text + direction arrow | Deep Teal text and subtle row emphasis | 3px visible outline | >=44px |
| Informational category row | No link affordance | No hover transformation | Not focusable | Static |
| Global RFQ | Shared V0.5 | Shared V0.5 | Shared V0.5 | Shared V0.5 |

No interaction depends on motion. Reduced-motion users receive identical content and state clarity.

## 12. Desktop review frame

The Gate 4 Desktop review frame must show:

- Production SVG Logo treatment and 84px Header reference;
- Documents current marker without visible status text;
- Hero at realistic copy length;
- all six category rows;
- three scope factors;
- controlled-process band with no action;
- first Buyer Question open;
- Prepare Context and the start of the Deep Navy Footer;
- no document inventory or child/request CTA.

This is a direction frame, not a Gate 5 pixel-complete full page.

## 13. 390px review frame

The Gate 4 390px frame must show:

- 64px `Logo | RFQ | Menu` Header;
- actual H1 and real body copy length;
- all category names at full length;
- stacked scope/process/FAQ/checklist pattern;
- no horizontal overflow or side-scroll affordance;
- the start of the approved Footer;
- a separate Mobile Menu Open state with Documents left marker and visible status word count zero.

## 14. Internal state board separation

An internal review state board may label:

- zero/partial/complete eligibility;
- controlled request;
- route unavailable;
- long-name wrap;
- focus/hover;
- no image;
- machine-readable parity.

These labels must never be composited into Buyer Clean frames. The current Buyer Clean direction uses natural procurement language only.

## 15. Visual red lines

- no certificate or official-seal collage;
- no fake PDF screenshot;
- no download library or search/filter UI without an eligible inventory;
- no green check marks implying compliance/approval;
- no red legal warning aesthetic;
- no flags as origin or coverage proof;
- no factory/port photo implying manufacturing, inventory or shipment capability;
- no SaaS dashboard, KPI cards, ecommerce grid or oversized decorative whitespace;
- no page-specific Header/Footer variation;
- no historical PNG Logo or duplicated SVG asset.

## 16. Gate 4 review checklist

- [x] Direction inherits current Global Chrome V0.5.
- [x] Production SVG asset keys and use boxes are specified.
- [x] Buyer-visible `CURRENT` count is zero.
- [x] Fixed RFQ remains present on all shared surfaces.
- [x] Current body represents zero eligible document records.
- [x] Current body contains no child/request action.
- [x] Controlled, route-unavailable, partial/full, long-name, no-image, hover and focus directions are defined.
- [x] Desktop, Tablet and 390px treatments are defined.
- [x] Buyer Clean/Internal Review separation is explicit.
- [x] At initial Gate 4 submission, no child page or Gate 5 full visual had been created; the later authorized Gate 5 full visual is tracked separately.

## 17. Review stop

`DRAFT_FOR_USER_GATE_4_REVIEW / NOT_APPROVED`

This document was submitted for user Gate 4 review. The user subsequently authorized Gate 5 on 2026-09-01; the resulting full visual is tracked separately. Gate 6, handoff and development remain unauthorized.

## 18. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial DOC-000 Industrial Documentation Editorial direction and restricted-state contract | `DRAFT_FOR_USER_GATE_4_REVIEW / NOT_APPROVED` |
