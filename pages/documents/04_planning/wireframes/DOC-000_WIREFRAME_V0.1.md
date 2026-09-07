# DOC-000 Documents & Compliance Hub Wireframe V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Gate | Gate 3 |
| Version / date | V0.1 / 2026-09-01 |
| Status | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Upstream | DOC-000 Content Architecture V0.1 and SEO/GEO/Schema Contract V0.1 |
| Shared Chrome | Global Header/Footer V0.5 and Production SVG Manifest V1.0 |
| Current represented state | Zero eligible document records; child/request actions omitted |
| Historical stop | Gate 4 review at initial submission; Gate 5 was subsequently authorized and is recorded in `DOC-000_FULL_VISUAL_DESIGN_V0.1.md` |

## 1. Layout tokens and viewport contract

| Token | Desktop | Tablet | Mobile |
|---|---:|---:|---:|
| Reference viewport | 1440px | 768–1024px | 390px |
| Header | 84px | 64px compact at breakpoint chosen by shared owner | 64px |
| Content maximum | 1200px | Fluid with 32px outer gutters | 358px content / 16px gutters |
| Primary grid | 12 columns | 8 columns | 1 column |
| Hero body width | 7 columns | 6–8 columns | Full |
| Section vertical rhythm | 80–112px | 64–88px | 48–64px |
| Touch target | Not below shared requirements | >=44px | >=44px |
| Buyer Clean body copy | 16–18px direction | 16px direction | 16px direction |

No final pixel styling is approved by this Gate 3 document. Values define review geometry and density only.

## 2. Desktop wireframe — 1440px

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ 84px GLOBAL HEADER                                                          │
│ Production SVG Logo | Home Markets Products Applications DOCUMENTS ... RFQ │
│ Documents = bold + 3px underline; visible status word = 0                   │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────── 1200px CONTENT ─────────────────────────────────┐
│ Home / Documents                                                            │
│                                                                              │
│ DOCUMENTS & COMPLIANCE                                                       │
│ Documents & Compliance Guidance                         [document-index motif]│
│ Choose the category...                                                       │
│ [ Review document categories ↓ ]                                             │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────── CATEGORY GUIDE ──────────────────────────────────┐
│ Choose by review need                                                        │
│ Intro                                                                        │
│                                                                              │
│ ┌────────────────────────────┐  ┌────────────────────────────┐                │
│ │ 01  TDS                    │  │ 04  COO / Origin           │                │
│ │ purpose + scope note       │  │ purpose + scope note       │                │
│ ├────────────────────────────┤  ├────────────────────────────┤                │
│ │ 02  SDS                    │  │ 05  Traceability           │                │
│ │ purpose + scope note       │  │ purpose + scope note       │                │
│ ├────────────────────────────┤  ├────────────────────────────┤                │
│ │ 03  COA                    │  │ 06  REACH / Compliance     │                │
│ │ purpose + scope note       │  │ purpose + scope note       │                │
│ └────────────────────────────┘  └────────────────────────────┘                │
│ No filenames, counts, status badges, child CTAs or reserved action slots     │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────── SCOPE FACTORS ───────────────────────────────────┐
│ What affects document scope                                                  │
│ [Product & grade]        [Destination & language]        [Order & batch]     │
│ short paragraph          short paragraph                 short paragraph      │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────── CONTROLLED PROCESS ──────────────────────────────┐
│ How document requests are handled                                            │
│ 01 Identify product/category → 02 Add relevant context → 03 Separate review │
│ Neutral current no-link statement; no request button; no Contact fallback    │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────── BUYER QUESTIONS ─────────────────────────────────┐
│ Buyer questions                                                              │
│ [−] Which document should I choose?        expanded answer                   │
│ [+] Does one document cover every grade or market?                           │
│ [+] Can I download documents from this page?                                 │
│ [+] Does submitting a request mean the document is approved?                 │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────── PREPARE CONTEXT ─────────────────────────────────┐
│ Prepare the context                                                          │
│ Product/grade | Destination | Document category | Order/batch if relevant    │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ GLOBAL DEEP NAVY FOOTER — Production reverse SVG + Procurement + fixed RFQ  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Desktop density rules

- Hero height target: 480–560px including breadcrumb; avoid oversized empty right rail.
- Category rows are editorial list units, not six independent promotional cards.
- Two columns become one semantic reading sequence: TDS, SDS, COA, COO/Origin, Traceability, REACH/Compliance.
- Category numbers and icons are navigation aids, not evidence badges.
- Controlled-process panel is visually distinct but contains no success colour, SLA or action.
- Buyer Questions use one-open-at-a-time visual direction; all content remains accessible without JavaScript in future implementation.

## 3. Tablet wireframe — 768–1024px

```text
┌────────────────────────────────────────────────────────────┐
│ Shared compact Header / shared breakpoint behaviour        │
└────────────────────────────────────────────────────────────┘
│ Breadcrumb                                                 │
│ Hero text and anchor (single dominant column)              │
│ Optional motif moves below or to a narrow side rail        │
├────────────────────────────────────────────────────────────┤
│ Category guide                                             │
│ 2 columns above 840px; 1 column below 840px                │
├────────────────────────────────────────────────────────────┤
│ Scope factors: 2 + 1 or single column                      │
├────────────────────────────────────────────────────────────┤
│ Controlled process: three steps stack if text wraps        │
├────────────────────────────────────────────────────────────┤
│ Buyer questions                                            │
├────────────────────────────────────────────────────────────┤
│ Prepare context                                            │
├────────────────────────────────────────────────────────────┤
│ Shared Footer                                              │
└────────────────────────────────────────────────────────────┘
```

Tablet acceptance:

- no category row changes order;
- long English and PT-BR-length test strings wrap without overlap;
- controlled-process steps do not collapse into icon-only labels;
- no horizontal carousel or table overflow;
- hover is not required to reveal purpose or scope.

## 4. Mobile wireframe — 390px

```text
┌────────────────────────────── 390px ──────────────────────────────┐
│ 64px GLOBAL HEADER                                               │
│ [Production SVG Logo 120×40]       [ RFQ 44+ ] [ Menu 44+ ]      │
├───────────────────────────────────────────────────────────────────┤
│ 16px gutter                                                       │
│ Home / Documents                                                  │
│                                                                   │
│ DOCUMENTS & COMPLIANCE                                            │
│ Documents & Compliance                                            │
│ Guidance                                                          │
│ 2-sentence answer                                                 │
│ [ Review document categories ↓ ]                                  │
├───────────────────────────────────────────────────────────────────┤
│ Choose by review need                                             │
│ Intro                                                             │
│                                                                   │
│ 01 [icon] Technical Data Sheet (TDS)                              │
│    purpose                                                        │
│    scope note                                                     │
│ ───────────────────────────────────────────────────────────────── │
│ 02 [icon] Safety Data Sheet (SDS)                                 │
│    purpose + scope note                                           │
│ ───────────────────────────────────────────────────────────────── │
│ 03 [icon] Certificate of Analysis (COA)                           │
│ ───────────────────────────────────────────────────────────────── │
│ 04 [icon] Certificate of Origin and Origin Documents              │
│ ───────────────────────────────────────────────────────────────── │
│ 05 [icon] Traceability Information                                │
│ ───────────────────────────────────────────────────────────────── │
│ 06 [icon] REACH and Compliance Information                        │
├───────────────────────────────────────────────────────────────────┤
│ What affects document scope                                       │
│ [Product & grade]                                                 │
│ [Destination & language]                                         │
│ [Order & batch context]                                          │
├───────────────────────────────────────────────────────────────────┤
│ How document requests are handled                                 │
│ 01 Identify                                                      │
│ 02 Add context                                                    │
│ 03 Review separately                                              │
│ neutral no-link statement                                         │
├───────────────────────────────────────────────────────────────────┤
│ Buyer questions                                                   │
│ [−] First answer open                                             │
│ [+] Question 2                                                    │
│ [+] Question 3                                                    │
│ [+] Question 4                                                    │
├───────────────────────────────────────────────────────────────────┤
│ Prepare the context                                               │
│ ✓ Product or grade                                                │
│ ✓ Destination market                                             │
│ ✓ Document category                                              │
│ ✓ Order/batch if relevant                                        │
├───────────────────────────────────────────────────────────────────┤
│ DEEP NAVY FOOTER — reverse SVG, stacked links, fixed RFQ          │
└───────────────────────────────────────────────────────────────────┘
```

### 390px acceptance

- Logical width 390px; content width 358px; no element exceeds its container.
- Hero H1 wraps naturally to two or three lines without forcing an artificial minimum height.
- Category names remain full; no ellipsis hides document type or scope.
- Visible body copy uses a 16px-level direction and category labels remain at least 14px.
- Every interactive row and action is >=44px logical height.
- No child CTA, disabled icon, blank slot or hidden link reserves height.
- Sections close naturally after the no-link process message.
- `scrollWidth <= 390px` in future implementation QA.

## 5. Mobile Menu Open

```text
┌────────────────────────────── 390px ──────────────────────────────┐
│ Logo                                                  Close 44+   │
│ Home                                                              │
│ Markets                                                           │
│ Products                                                          │
│ Applications                                                      │
│ ▌ Documents      ← bold + 4px Teal marker; visible status word 0 │
│ Resources                                                         │
│ About                                                             │
│ Request a Quote   ← terminal fixed action                          │
└───────────────────────────────────────────────────────────────────┘
```

One active accessible navigation surface; the Desktop surface is absent from the accessibility tree and keyboard sequence at this viewport.

## 6. Component-state matrix

| Component | Default | Hover | Keyboard focus | Restricted/zero state |
|---|---|---|---|---|
| Hero local anchor | Navy outline | Border/fill emphasis without movement dependency | 3px visible outline with offset | Always available because it targets page content |
| Category row | Text + outline icon + divider | Subtle Soft Background or border emphasis | Full-row outline if it later becomes a link | Current rows are non-link informational units; no hover affordance |
| Future child action | Not present | Defined only after eligibility | Defined only after eligibility | Removed atomically; no disabled control |
| Controlled status | Text explanation + restrained lock/file motif | Not interactive | Not applicable | No red warning, success green or certification seal |
| FAQ row | Question + plus/minus | Subtle background | Full-width visible outline | Answer content remains readable in no-script fallback |
| Global RFQ | Shared V0.5 terminal CTA | Shared state | Shared focus | Never removed; false readiness blocks release |

## 7. Long-content stress strings

Use these exact lengths in Gate 4 review frames:

- `Certificate of Origin and Origin Documentation for Product- and Shipment-Specific Review`
- `Safety Data Sheet for the Applicable Product, Destination Market, Language and Current Revision`
- `REACH and Regulatory Compliance Information for an Exact Substance, Legal Role and Intended Use`

Rules:

- wrap on natural word boundaries;
- never shrink below readable type;
- preserve complete accessible name;
- no horizontal scroll;
- no tooltip required to recover truncated meaning.

## 8. State-frame requirements for Gate 4

Gate 4 must visually show:

1. Desktop Inventory 0 full direction above the fold plus representative body sections;
2. 390px Inventory 0 continuous structure;
3. Mobile Menu Open with Documents marker and no visible status word;
4. controlled-request explanatory row;
5. route-unavailable action removal;
6. long-name wrap;
7. no-image/text-only treatment;
8. hover/focus difference for eligible controls only;
9. a compact internal state key kept separate from Buyer Clean.

No Gate 4 frame may invent a filename, document count, availability badge, download action, child URL or completed request form.

## 9. Gate 3 self-check

- [x] Desktop, Tablet and 390px sequences are defined.
- [x] Global Chrome V0.5 and Production SVG bindings are inherited.
- [x] Buyer-visible current-state word count is zero.
- [x] Current body contains no child/request action.
- [x] Six category rows have a stable semantic order.
- [x] Zero-record, route-unavailable, controlled, long-copy, no-image and focus states are specified.
- [x] Hub/form responsibility remains separated.
- [x] At initial Gate 3 submission, no child page or Gate 5 asset was created; the later authorized Gate 5 asset is tracked separately.

## 10. Gate status

`DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED`. The current user instruction authorises Gate 4 preparation but does not approve this wireframe.
